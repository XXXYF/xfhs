<template>
    <section class="sec-box">
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">查询</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters" label-width="160px">

                <el-col :span="6" class="colborder">
                    <el-form-item label="部门名称:">
                        <el-input v-model="filters.bmbhName" v-clickoutside="handleClose" :readonly="true" @click.native="treeBoxshow" ></el-input>
                        <el-tree
                                :data="data2"
                                show-checkbox
                                node-key="id"
                                :default-checked-keys="filters.bmbhdata"
                                :props="defaultProps"
                                check-strictly
                                v-show="treeBoxVisible"
                                @check-change="handleClick"
                                @node-click="nodeClick"
                                ref="roletree">
                        </el-tree>
                    </el-form-item>
                </el-col>
                <el-col :span="6" class="colborder">
                    <el-form-item label="接口名称:">
                        <el-input v-model="filters.jkmc" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6" class="colborder">
                    <el-form-item label="接口类型:">
                        <el-select v-model="filters.jklx" placeholder="" >
                            <el-option label="安检" value="1"></el-option>
                            <el-option label="综检" value="2"></el-option>
                            <el-option label="环检" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6" class="colborder">
                    <el-form-item label="接口状态:">
                        <el-select v-model="filters.jkzt" placeholder="" >
                            <el-option label="开启" value="1"></el-option>
                            <el-option label="关闭" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="getpower">查询</el-button>
                    <el-button  class="dialog-button reset-button"  @click="resetForm('filters')">重置</el-button>
                </el-col>
            </el-form>
        </el-col>


        <!--列表-->
        <div class="list-box">
            <el-col :span="24" class="addBtn">
                <el-button class="dialog-button search-button" @click="handleAdd">新增</el-button>
            </el-col>
            <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
                <el-table-column type="index"    width="60" label="序号">
                </el-table-column>
                <el-table-column prop="jkid"  label="接口ID">
                </el-table-column>
                <el-table-column prop="jkmc"  label="接口名称" >
                </el-table-column>
                <el-table-column prop="bmmc"  label="部门名称">
                </el-table-column>
                <el-table-column prop="dycs"  label="调用次数" >
                </el-table-column>
                <el-table-column prop="jklx"  label="接口类型" :formatter="cdztRole">
                </el-table-column>
                <el-table-column prop="jkzt"  label="接口状态" :formatter="jkztRole">
                </el-table-column>
                <el-table-column prop="gxsj"  label="更新时间" >
                    <template slot-scope="scope">
                        <span>{{scope.row.gxsj | formDate }}</span>
                    </template>
                </el-table-column>


                <el-table-column label="操作" fixed="right">
                    <template slot-scope="scope">
                        <el-button class="dialog-button change-button" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button  class="dialog-button delete-button" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>


        <!--分页工具条-->
        <el-col :span="24" class="toolbar count">
            <span class="count-num">显示10条,共{{total}}条</span>
            <el-pagination layout="prev, pager, next ,jumper" @current-change="handleCurrentChange"  @size-change="handleSizeChange"
                           :page-size="10" :total="total" prev-text='上一页' next-text='下一页'>
            </el-pagination>
        </el-col>

    </section>
</template>

<script>
    import util from '../../common/js/util'
    import { getUserListPage, removeUser,addRole,editRole} from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'

    //点击其他地方隐藏树形框
    const clickoutside = {
        // 初始化指令
        bind(el, binding, vnode) {
            function documentHandler(e) {
                // 这里判断点击的元素是否是本身，是本身，则返回
                if (el.contains(e.target)) {
                    return false;
                }
                // 判断指令中是否绑定了函数
                if (binding.expression) {
                    // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                    binding.value(e);
                }
            }
            // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
            el.__vueClickOutside__ = documentHandler;
            document.addEventListener('click', documentHandler);
        },
        update() {},
        unbind(el, binding) {
            // 解除事件监听
            document.removeEventListener('click', el.__vueClickOutside__);
            delete el.__vueClickOutside__;
        },
    };
    export default {
        data() {

            return {
                filters: {
                    // jsid: '',
                    bmbh: '',
                    jkmc: '',
                    jklx: '',
                    jkzt: '',
                    fcdbhName: '',
                    pageSize:'10',
                    pageNum:'1',
                },
                users: [],
                bmbhList: [],
                total: 0,
                currentPage: 1,
                listLoading: false,
                sels: [],//列表选中列
                bmbhdata: [],//列表选中列
                treeBoxVisible:false,
                data2: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
            };
        },
        //点击其他隐藏树形
        directives: {clickoutside},
        methods: {
            //用户角色显示转换
            cdztRole :function(row, column) {
                return row.jklx == 1 ? '安检' :row.jklx == 2 ? '综检':'环检'
            },
            jkztRole :function(row, column) {
                return row.jkzt == 1 ? '开启' :row.jkzt == 2 ? '关闭':''
            },


            handleCurrentChange(val) {
                this.filters.pageNum = val;
                this.getpower();
            },
            //每页显示多少条数据
            handleSizeChange(size){
                this.filters.pageNum = val;
                this.getpower();
                this.filters.pageSize = size;

                console.log(`每页 ${size} 条`);
            },
            //获取部门信息列表
            getpower() {
                let para = Object.assign({}, this.filters);
                this.listLoading = true;
                var qs = require('querystring')
                axios.post('api/sys/jksqgl/searchTjksqxxPage', qs.stringify(para) ,{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    if (response.data.msg == '用户未登录'){
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    }else if(response.data.msg == '获取不到用户信息'){
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    }
                    this.listLoading = false;
                    console.log(response.data.data.list);

                    this.users = response.data.data.list;
                    this.total = response.data.data.total;
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            //删除
            handleDel: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    console.log(row)
                    let para = {
                        bmbh: row.bmbh,
                        jkid: row.jkid,
                        jklx: row.jklx,
                    };
                    var qs = require('querystring')
                    axios.post('api/sys/jksqgl/delete', qs.stringify(para) ,{
                        headers: {
                            "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                        },
                        withCredentials:true,
                    }).then((response) =>{
                        if (response.data.msg == '用户未登录'){
                            this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            sessionStorage.removeItem('user');
                            this.$router.push('/login');
                        }else if(response.data.msg == '获取不到用户信息'){
                            this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            sessionStorage.removeItem('user');
                            this.$router.push('/login');
                        }
                        if (response.data.code == '1'){
                            this.$message({
                                message: '删除成功',
                                type: 'success'
                            });
                        }else if(response.data.code == '0'){
                            this.listLoading = false;
                            this.$message({
                                message: '删除失败',
                                type: 'error'
                            });
                        }
                        this.listLoading = false;
                        this.getUsers();
                        // this.users = response.data.data.list;
                        // this.total = response.data.data.totalCount;
                    }).catch((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message: '删除失败',
                            type: 'error'
                        });
                    });
                }).catch(() => {

                });
            },
            //显示新增界面
            handleAdd:function(index,row){
                this.$router.push('/addinterface')

            },
            //显示编辑界面
            handleEdit: function (index, row) {
                sessionStorage.setItem('interfacedata',JSON.stringify(row))
                this.$router.push('/editinterface')
            },
            //重置
            resetForm(formName) {
                this.filters = Object.assign({});
            },

            selsChange: function (sels) {
                this.sels = sels;
            },

            //获取部门树列表
            getTree() {
                let para = {
                    bmlx:1,
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/sys/bmgl/tree', qs.stringify(para) ,{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    if (response.data.msg == '用户未登录'){
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    }else if(response.data.msg == '获取不到用户信息'){
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    }
                    this.listLoading = false;
                    this.data2 = response.data.data;
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            //node-click节点被点击时的回调，check-change节点选中状态发生变化时的回调.
            handleClick(item,node,self) {
                if(node==true){ //点击未选中复选框
                    console.log(item.label)
                    this.filters.bmbh=item.id
                    this.filters.bmbhName=item.label
                    this.$refs.roletree.setCheckedNodes([item]);

                }else {
                    if (this.filters.glbmbh == item.id){ //点击已选中复选框。保证至少有一个选中
                        console.log(item.label)
                        this.filters.bmbh=item.id
                        this.filters.bmbhName=item.label
                        this.$refs.roletree.setCheckedNodes([item]);
                    }
                }
                this.treeBoxVisible = false;
            },
            nodeClick(item,node,self){
                console.log(item.label)
                this.filters.bmbh=item.id
                this.filters.bmbhName=item.label
                this.$refs.roletree.setCheckedNodes([item]);
            },
            handleClose:function (e) {
                this.treeBoxVisible = false;

            },
            treeBoxshow:function () {
                this.treeBoxVisible = !this.treeBoxVisible;
            }






        },
        computed:{

        },
        mounted() {
            this.getpower();
            this.getTree();

        },
        filters:{
            formDate:function (dysj) {
                //return monent(dysj)
                return moment(dysj).format('YYYY-MM-DD HH:mm:ss')

            }
        }
    }

</script>

<style scoped>
    .count{
        background-color: #fff;
    }
    .count-num{
        line-height: 32px;
    }
    .el-table .cell{
        text-align: center;
    }
</style>