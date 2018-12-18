<template>
    <section class="sec-box">
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">查询</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters" label-width="160px">
                <el-col :span="8" class="colborder">
                    <el-form-item label="部门名称:">
                        <el-input v-model="filters.bmmc" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="colborder">
                    <el-form-item label="上级部门编号:">
                        <!--<el-input v-model="filters.bmbh" placeholder=""></el-input>-->
                        <el-input v-model="filters.glbmmc" v-clickoutside="handleClose" :readonly="true" @click.native="treeBoxshow" ></el-input>
                        <el-tree
                                :data="data2"
                                show-checkbox
                                node-key="id"
                                :default-checked-keys="filters.glbmbhdata"
                                :props="defaultProps"
                                check-strictly
                                v-show="treeBoxVisible"
                                @check-change="handleClick"
                                @node-click="nodeClick"
                                ref="roletree">
                        </el-tree>
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="colborder">
                    <el-form-item label="部门类型:">
                        <el-select v-model="filters.bmlx" placeholder="" >
                            <el-option label="检测机构" value="1"></el-option>
                            <el-option label="非检测机构" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="getdepartment">查询</el-button>
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
                <el-table-column prop="glbmmc"  label="管理部门名称" >
                </el-table-column>
                <!--<el-table-column prop="bmbh"  label="部门编号">-->
                <!--</el-table-column>-->
                <el-table-column prop="bmmc"  label="部门名称">
                </el-table-column>
                <el-table-column prop="bmlxr"  label="部门联系人">
                </el-table-column>
                <el-table-column prop="bmlx"  label="部门类型" :formatter="formatRole">
                </el-table-column>

                <el-table-column label="操作" fixed="right">
                    <template slot-scope="scope">
                        <el-button class="dialog-button change-button" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
                        <el-button class="dialog-button delete-button" @click="handleDel(scope.$index, scope.row)">删除</el-button>
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
                    bmmc: '',
                    bmbh: '',
                    glbmmc: '',
                    pageSize:'10',
                    pageNum:'1',
                },
                users: [],
                bmlxList: [],
                total: 0,
                currentPage: 1,
                listLoading: false,
                sels: [],//列表选中列
                bmbhList:{},
                userdata:{},
                treeBoxVisible:false,
                data2: [],
                glbmbhdata: [],
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
            formatRole :function(row, column) {
                return row.bmlx == 1 ? '检测机构' :row.bmlx == 2 ? '非检测机构':''
            },



            handleCurrentChange(val) {
                this.filters.pageNum = val;
                this.getdepartment();
            },
            //每页显示多少条数据
            handleSizeChange(size){
                this.filters.pageNum = val;
                this.getdepartment();
                this.filters.pageSize = size;

                console.log(`每页 ${size} 条`);
            },
            //获取部门信息列表
            getdepartment() {
                let para = Object.assign({}, this.filters);
                this.listLoading = true;
                var qs = require('querystring')
                axios.post('api/sys/bmgl/page', qs.stringify(para) ,{
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
                    let para = { bmbh: row.bmbh };
                    var qs = require('querystring')
                    axios.post('api/sys/bmgl/delete', qs.stringify(para) ,{
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
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getdepartment();
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

                this.$router.push('/adddepartment')

            },

            //显示编辑界面
            handleEdit: function (index, row) {
                sessionStorage.setItem('departmentMsg',JSON.stringify(row))
                this.$router.push('/editdepartment')
            },
            //重置
            resetForm(formName) {
                this.filters = Object.assign({});
            },

            selsChange: function (sels) {
                this.sels = sels;
            },

            //获取部门代号列表
            getTree() {
                let para = {
                    bmlx:2,
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
                    this.filters.glbmmc=item.label
                    this.$refs.roletree.setCheckedNodes([item]);

                }else {
                    if (this.filters.bmbh == item.id){ //点击已选中复选框。保证至少有一个选中
                        console.log(item.label)
                        this.filters.bmbh=item.id
                        this.filters.glbmmc=item.label
                        this.$refs.roletree.setCheckedNodes([item]);
                    }
                }
                this.treeBoxVisible = false;
            },
            nodeClick(item,node,self){
                console.log(item.label)
                this.filters.bmbh=item.id
                this.filters.glbmmc=item.label
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
            this.getdepartment();
            this.getTree();

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