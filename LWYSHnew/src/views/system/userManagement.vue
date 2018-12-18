<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">查询</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters" label-width="160px">

                <el-col :span="8" class="colborder">
                    <el-form-item label="部门名称:" prop="bmbh">
                        <!--<el-select v-model="filters.bmbh"  placeholder="请选择" >-->
                            <!--<el-option-->
                                    <!--v-for="item in bmbhList"-->
                                    <!--:key="item.bmbh"-->
                                    <!--:label="item.bmmc"-->
                                    <!--:value="item.bmbh">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
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
                    <el-form-item label="用户姓名:" prop="yhxm">
                        <el-input v-filterSpecialChar v-model="filters.yhxm" placeholder=""   ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="colborder">
                    <el-form-item label="用户角色:" prop="yhjs">
                        <el-input v-filterSpecialChar v-model="filters.yhjs" placeholder=""   ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="colborder">
                    <el-form-item label="用户状态:" prop="yhzt">
                        <el-select v-model="filters.yhzt" placeholder="" >
                            <el-option label="开启" value="1"></el-option>
                            <el-option label="关闭" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="colborder">
                </el-col>
                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="getUsers">查询</el-button>
                    <el-button  class="dialog-button reset-button"  @click="resetForm('filters')">重置</el-button>

                </el-col>
            </el-form>
        </el-col>


        <!--列表-->
        <div class="list-box">
            <el-col :span="24" class="addBtn">
                <el-button class="dialog-button search-button" @click="handleAdd">新增</el-button>
            </el-col>
            <el-table :data="users" :border="true" highlight-current-row v-loading="listLoading"  @selection-change="selsChange" style="width: 100%;">
               <!-- <el-table-column prop="index" label="序号" >
                </el-table-column>-->
                <el-table-column type="index"   width="60" label="序号">
                </el-table-column>
                <el-table-column prop="bmmc"   label="部门名称">
                </el-table-column>
                <el-table-column prop="yhxm"  label="用户姓名"  >
                </el-table-column>
                <el-table-column prop="yhsfzh"  width="160" label="用户身份证号码" >
                </el-table-column>
                <el-table-column prop="yhjsmc" label="用户角色" >
                </el-table-column>
                <el-table-column prop="yhlxfs" label="联系方式" >
                </el-table-column>
                <el-table-column prop="yhzt" label="用户状态"  :formatter="formatRole">
                </el-table-column>

                <el-table-column label="操作" fixed="right">
                    <template slot-scope="scope">
                        <el-button  class="dialog-button change-button" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
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
    //import { getUserListPage, removeUser,addUser,editUser} from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
    import {isvalidPhone} from '../../api/validate'
    import {isvalidCardNo} from '../../api/validate'
    import {isNumber} from '../../api/validate'

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
                    bmbh: '',
                    glbmmc: '',
                    yhxm: '',
                    yhjs: '',
                    yhzt: '',
                    pageSize:'10',
                    pageNum:'1',
                },

                users: [],
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
                // bmbhList:{},

            }
        },
        //点击其他隐藏树形
        directives: {clickoutside},
        methods: {
            //用户角色显示转换
            formatRole :function(row, column) {
                return row.yhzt == 1 ? '启用' :row.yhzt == 2 ? '禁用':''
            },
            //用户状态显示转换
            formatState :function(row, column) {
                return row.state == 1 ? '正常' : row.state == 0 ?'警告':'其他'
            },


            handleCurrentChange(val) {
                this.filters.pageNum = val;
                this.getUsers();
            },
            //每页显示多少条数据
            handleSizeChange(size){
                this.filters.pageNum = val;
                this.getUsers();
                this.filters.pageSize = size;

                console.log(`每页 ${size} 条`);
            },
            //获取用户列表
            getUsers() {
                let para = Object.assign({}, this.filters);

                this.listLoading = true;

                var qs = require('querystring')
                console.log(para,123)
                axios.post('api/sys/yhgl/page', qs.stringify(para) ,{
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
                    console.log(response.data.data.list);

                    this.users = response.data.data.list;
                    this.total = response.data.data.total;
                    this.listLoading = false;
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
                    let para = { yhbh: row.yhbh };
                    var qs = require('querystring')
                    axios.post('api/sys/yhgl/delete', qs.stringify(para) ,{
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
                this.$router.push('/adduser')

            },

            //显示编辑界面
            handleEdit: function (index, row) {
                sessionStorage.setItem('editMsg',JSON.stringify(row))
                this.$router.push('/edituser')
            },
            //跳转详情
            btnDetail: function(index, row){
                let para = Object.assign({}, row)  //获取当前一行的数据
                console.log(para,'99999999999999')
                sessionStorage.setItem('trmsg',JSON.stringify(para))
                this.$router.push('/Detail')
            },
            //重置
            resetForm(formName) {
                // this.filters = Object.assign({});
                // this.filters.startDate = "";
                // this.filters.endDate = "";
                this.$refs[formName].resetFields();
            },

            selsChange: function (sels) {
                this.sels = sels;
            },
            //用户信息列表
            // bmgllist:function () {
            //
            //     axios.post('api/sys/bmgl/list' ,{
            //         headers: {
            //             "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
            //         },
            //         withCredentials:true,
            //     }).then((response) =>{
            //         if (response.data.msg == '用户未登录'){
            //             this.$message({
            //                 message: response.data.msg,
            //                 type: 'error'
            //             });
            //             sessionStorage.removeItem('user');
            //             this.$router.push('/login');
            //         }else if(response.data.msg == '获取不到用户信息'){
            //             this.$message({
            //                 message: response.data.msg,
            //                 type: 'error'
            //             });
            //             sessionStorage.removeItem('user');
            //             this.$router.push('/login');
            //         }
            //         this.bmbhList = response.data.data;
            //         console.log(this.bmbhList,111222);
            //     }).catch((response) =>{
            //
            //         console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
            //     });
            //
            // },
            //获取部门代号列表
            getTree() {
                let para = {
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
            this.getUsers();
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
    .el-tree{
        position: absolute;
        width: 100%;
        background: #ffffff;
        z-index: 9;
        border: 1px solid #d8dce5;
    }
</style>