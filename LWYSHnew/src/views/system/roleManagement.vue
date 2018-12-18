<template>
    <section class="sec-box">
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">查询</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters" label-width="160px">
                <el-col :span="8" class="colborder">
                    <el-form-item label="角色名称:">
                        <el-input v-filterSpecialChar v-model="filters.jsmc" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="16" class="colborder">
                </el-col>
                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="getRole">查询</el-button>
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
                <!--<el-table-column prop="jsid"  label="角色代号" >-->
                <!--</el-table-column>-->
                <el-table-column prop="jsmc"  label="角色名称">
                </el-table-column>
                <el-table-column prop="jsms"  label="角色描述">
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

    export default {
        data() {

            return {
                filters: {
                    // jsid: '',
                    jsmc: '',
                    pageSize:'10',
                    pageNum:'1',
                },
                users: [],
                total: 0,
                currentPage: 1,
                listLoading: false,
                sels: [],//列表选中列

            };
        },
        methods: {
            //用户角色显示转换
            formatRole :function(row, column) {
                return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
            },
            //用户状态显示转换
            formatState :function(row, column) {
                return row.state == 1 ? '正常' : row.state == 0 ?'警告':'其他'
            },

            handleCurrentChange(val) {
                this.filters.pageNum = val;
                this.getRole();
            },
            //每页显示多少条数据
            handleSizeChange(size){
                this.filters.pageNum = val;
                this.getRole();
                this.filters.pageSize = size;

                console.log(`每页 ${size} 条`);
            },
            //获取角色列表
            getRole() {
                let para = Object.assign({}, this.filters);

                this.listLoading = true;
                var qs = require('querystring')
                axios.post('api/sys/jsgl/page', qs.stringify(para) ,{
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
                    let para = { jsid: row.jsid };
                    var qs = require('querystring')
                    axios.post('api/sys/jsgl/delete', qs.stringify(para) ,{
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
                        this.getRole();
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

                this.$router.push('/addrole')

            },

            //显示编辑界面
            handleEdit: function (index, row) {
                sessionStorage.setItem('roleMsg',JSON.stringify(row))
                this.$router.push('/editrole')
            },
            //重置
            resetForm(formName) {
                this.filters = Object.assign({});
            },

            selsChange: function (sels) {
                this.sels = sels;
            },





        },
        computed:{

        },
        mounted() {
            this.getRole();


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