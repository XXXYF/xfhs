<template>
    <section class="sec-box">
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">查询</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters" label-width="160px">
                <el-col :span="8" class="colborder" >
                    <el-form-item label="用户名:" prop="yhbh">
                        <el-input v-model="filters.yhbh" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="colborder">
                    <el-form-item label="ip地址:"  prop="ipdz">
                        <el-input v-model="filters.ipdz" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8" class="colborder">
                    <el-form-item label="操作时间:" class="dysjBtn" required>
                        <el-col :span="11">
                            <el-form-item prop="ksczsj">
                                <el-date-picker
                                        v-model="filters.ksczsj"
                                        type="date"  :editable="false"
                                        :picker-options="pickerOptions0">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1" style="text-align: center">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="jsczsj">
                                <el-date-picker
                                        v-model="filters.jsczsj"
                                        type="date"  :editable="false"
                                        :picker-options="pickerOptions1">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="selectBtnbox">
                    <el-button class="dialog-button search-button" v-on:click="getUsers">搜索</el-button>
                    <el-button class="dialog-button reset-button" @click="resetForm('filters')">重置</el-button>
                </el-col>

            </el-form>
        </el-col>
        <i class="f-hr20"></i>
        <!--列表-->
        <div class="list-box">
            <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
               <!-- <el-table-column prop="index" label="序号" >
                </el-table-column>-->
                <el-table-column type="index"   width="60" label="序号">
                </el-table-column>

                <el-table-column prop="yhbh"   label="用户名" >
                </el-table-column>
                <el-table-column prop="ipdz"  label="ip地址" >
                </el-table-column>
                <el-table-column prop="czsj"  width="160" label="操作时间" >
                    <template slot-scope="scope">
                        <span>{{scope.row.czsj | formDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="czjg"    label="操作结果" :formatter="czjgdata">
                </el-table-column>
                <el-table-column prop="fwlj"   label="访问路径" >
                </el-table-column>
                <el-table-column label="操作"  fixed="right">
                    <template slot-scope="scope">
                        <el-button class="dialog-button see-button" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
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
        <el-dialog :title="titleName" :visible.sync="dialogFormVisible">
            <el-form :model="formdata"  ref="formdata"  id="formdata" label-width="110px">
                <el-form-item label="接口id:" >
                    <el-input v-model="formdata.jkid" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户名:" >
                    <el-input v-model="formdata.yhbh" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="接口入参:" >
                    <el-input v-model="formdata.cccs" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="接口出参:" >
                    <el-input v-model="formdata.crcs" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="接口序列号" >
                    <el-input v-model="formdata.jkxlh" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="调用时间" >
                    <el-input v-model="formdata.dysj" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="号牌号码" >
                    <el-input v-model="formdata.hphm" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="号牌种类" >
                    <el-input v-model="formdata.hpzlmc" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="返回代码" >
                    <el-input type="textarea" v-model="formdata.fhjg" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="车辆识别代号" >
                    <el-input v-model="formdata.clsbdh" :disabled="true" auto-complete="off"></el-input>
                </el-form-item>


            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button class="dialog-button" @click="dialogFormVisible = false">取 消</el-button>
                <el-button class="dialog-button danger-button" v-show="editUserBtn" @click="dialogFormVisible = false"  :loading="listLoading">确 定</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    import util from '../../common/js/util'
    //import { getUserListPage, removeUser,addUser,editUser} from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'


    export default {
        data() {
            return {
                pickerOptions0: {
                    disabledDate: (time) => {
                        if (this.filters.jsczsj != "") {
                            return time.getTime() > Date.now() || time.getTime() > this.filters.jsczsj;
                        } else {
                            return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.filters.ksczsj || time.getTime() > Date.now();
                    }
                },
                filters: {
                    yhbh: '',
                    ipdz: '',
                    ksczsj: '',
                    jsczsj: '',
                    pageSize:'10',
                    pageNum:'1',
                },
                filtersdata: {

                },
                users: [],
                total: 0,
                currentPage: 1,
                listLoading: false,
                sels: [],//列表选中列
                dialogFormVisible:false,
                addUserBtn:false,
                editUserBtn:false,
                titleName:"",
                formdata:{
                    jkid:'',
                    bmdh:'',
                    jkxlh:'',
                    dysj:'',
                    hphm:'',
                    hpzl:'',
                    fhjg:'',
                    clsbdh:'',
                    cccs:'',
                    crcs:'',

                },

            }
        },
        methods: {
            //用户角色显示转换
            czjgdata :function(row, column) {
                return row.czjg == 0 ? '失败' :row.czjg == 1 ? '成功':''
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

            getUsers(){
                if(this.filters.ksczsj !== ""){
                    this.filters.ksczsj = moment(this.filters.ksczsj).format('YYYY-MM-DD')
                }
                if(this.filters.jsczsj !== ""){
                    this.filters.jsczsj = moment(this.filters.jsczsj).format('YYYY-MM-DD')
                }
                let para = Object.assign({}, this.filters);

                this.listLoading = true;
                var qs = require('querystring')
                axios.post('api/sys/xtrz/searchTxtrzPage', qs.stringify(para) ,{
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


            //显示详情界面
            handleEdit: function (index, row) {

                sessionStorage.setItem('syslogMsg',JSON.stringify(row))
                this.$router.push('/syslogMsg')
            },

            //重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.filters.ksczsj = '';
                this.filters.jsczsj = '';
            },

            selsChange: function (sels) {
                this.sels = sels;
            },

        },
        computed:{

        },
        mounted() {
            this.getUsers();
            // var form =document.getElementById("formdata");
            // form.reset();
            this.filters.ksczsj = new Date();
            this.filters.jsczsj = new Date();
        },
        filters:{
            formDate:function (dysj) {
                //return monent(dysj)
                return moment(dysj).format('YYYY-MM-DD  HH:mm:ss')

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
    .el-date-editor .el-range-input{
        position: relative;
        top: -3px;
    }
    .el-date-editor .el-range__icon{
        position: relative;
        top: -3px;
    }
    .dysjBtn{
    }
</style>