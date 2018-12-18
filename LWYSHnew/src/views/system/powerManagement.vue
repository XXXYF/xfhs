<template>
    <section class="sec-box">
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">查询</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters" label-width="160px">
                <el-col :span="8" class="colborder">
                    <el-form-item label="功能名称:">
                        <el-input v-filterSpecialChar v-model="filters.cdmc" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="colborder">
                    <el-form-item label="上级菜单:">
                        <el-input v-model="filters.fcdbhName" v-clickoutside="handleClose" :readonly="true" @click.native="treeBoxshow" ></el-input>
                        <el-tree
                                :data="data2"
                                show-checkbox
                                node-key="id"
                                :default-checked-keys="filters.fcdbhlist"
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

                </el-col>
                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="getpower">查询</el-button>
                    <el-button  class="dialog-button reset-button"  @click="resetForm('filters')">重置</el-button>
                </el-col>
            </el-form>
        </el-col>


        <!--列表-->
        <div class="list-box">
            <!--<el-col :span="24" class="addBtn">-->
                <!--<el-button class="dialog-button search-button" @click="handleAdd">新增</el-button>-->
            <!--</el-col>-->
            <el-table :data="users" highlight-current-row v-loading="listLoading" @row-click="selsChange" style="width: 100%;">
                <el-table-column type="index"    width="60" label="序号">
                </el-table-column>
                <el-table-column prop="cdmc"  label="功能名称" >
                </el-table-column>
                <el-table-column prop="fcdbh"  label="上级菜单">
                </el-table-column>
                <el-table-column prop="gxsj"  label="更新时间">
                    <template slot-scope="scope">
                        <span>{{scope.row.gxsj | formDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="cdjb"  label="菜单级别" :formatter="cdjbRole">
                </el-table-column>
                <!--<el-table-column prop="cdpx"  label="功能排序">-->
                    <!--<template slot-scope="scope">-->
                        <!--<el-input class="powerInput" v-model="scope.row.cdpx" placeholder="" @change="powersort" ></el-input>-->
                    <!--</template>-->
                <!--</el-table-column>-->
                <el-table-column prop="cdzt"  label="功能状态" :formatter="cdztRole">
                </el-table-column>

                <el-table-column label="操作" fixed="right">
                    <template slot-scope="scope">
                        <!--<el-button class="dialog-button change-button" @click="handleEdit(scope.$index, scope.row)">修改</el-button>-->
                        <el-button v-if="scope.row.cdzt === '1'" class="dialog-button password-button" @click="enjoin">禁用</el-button>
                        <el-button v-if="scope.row.cdzt  === '2'" class="dialog-button search-button" @click="enjoin2">启用</el-button>
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
                    cdmc: '',
                    fcdbh: '',
                    fcdbhName: '',
                    pageSize:'10',
                    pageNum:'1',
                },
                users: [],
                bmbhList: [],
                total: 0,
                currentPage: 1,
                cdiddate: '',
                listLoading: false,
                sels: [],//列表选中列
                treeBoxVisible:false,
                data2: [],
                fcdbhlist: [],
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
                return row.cdzt == '1' ? '启用' :row.cdzt == '2' ? '禁用':''
            },
            //用户角色显示转换
            cdjbRole :function(row, column) {
                return row.cdjb == 1 ? '一级菜单' :row.cdjb == 2 ? '二级菜单':'三级菜单'
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
                axios.post('api/sys/qxgl/page', qs.stringify(para) ,{
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

            //显示编辑界面
            handleEdit: function (index, row) {
                sessionStorage.setItem('powerMsg',JSON.stringify(row))
                this.$router.push('/editpower')
            },
            //重置
            resetForm(formName) {
                this.filters = Object.assign({});
            },

            selsChange: function (sels) {
                this.cdiddate = sels.cdid;
                console.log(this.cdiddate)
            },

            //获取部门代号列表
            getTree() {
                let para = {
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/sys/qxgl/tree', qs.stringify(para) ,{
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
                    this.filters.fcdbh=item.id
                    this.filters.fcdbhName=item.label
                    this.$refs.roletree.setCheckedNodes([item]);

                }else {
                    if (this.filters.glbmbh == item.id){ //点击已选中复选框。保证至少有一个选中
                        console.log(item.label)
                        this.filters.fcdbh=item.id
                        this.filters.fcdbhName=item.label
                        this.$refs.roletree.setCheckedNodes([item]);
                    }
                }
                this.treeBoxVisible = false;
            },
            nodeClick(item,node,self){
                console.log(item.label)
                this.filters.fcdbh=item.id
                this.filters.fcdbhName=item.label
                this.$refs.roletree.setCheckedNodes([item]);
            },
            handleClose:function (e) {
                this.treeBoxVisible = false;

            },
            treeBoxshow:function () {
                this.treeBoxVisible = !this.treeBoxVisible;
            },

            //状态更改
            enjoin:function () {
                this.$confirm('确认禁用吗？', '提示', {}).then(() => {
                    let para = {
                        cdid:this.cdiddate,
                        cdzt:"2",
                    };
                    console.log(para);
                    var qs = require('querystring')
                    axios.post('api/sys/qxgl/updateCdzt', qs.stringify(para) ,{
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
                        this.$message({
                            message: '禁用成功',
                            type: 'success'
                        });
                        this.getpower();
                    }).catch((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message: '禁用失败',
                            type: 'error'
                        });
                        console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                    });
                    //数据没有保存到页面

                });

            },
            enjoin2:function () {
                this.$confirm('确认启用吗？', '提示', {}).then(() => {
                    let para = {
                        cdid:this.cdiddate,
                        cdzt:"1",
                    };
                    var qs = require('querystring')
                    axios.post('api/sys/qxgl/updateCdzt', qs.stringify(para) ,{
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
                        this.$message({
                            message: '启用成功',
                            type: 'success'
                        });
                        this.getpower();
                    }).catch((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message: '启用失败',
                            type: 'error'
                        });
                        console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                    });
                    //数据没有保存到页面

                });

            },
            powersort:function (value) {
                this.$confirm('确认修改排序吗？', '提示', {}).then(() => {
                    let para = {
                        cdid:this.cdiddate,
                        cdpx:value,
                    };
                    console.log(para);
                    var qs = require('querystring')
                    axios.post('api/sys/jksqgl/updateCdzt', qs.stringify(para) ,{
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
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        });
                        this.getpower();
                    }).catch((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message: '修改失败',
                            type: 'error'
                        });
                        console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                    });
                    //数据没有保存到页面

                });

            },




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