<template>
    <section class="sec-box">
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">查询</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters" label-width="160px">
                <el-col :span="8" class="colborder">
                    <el-form-item label="接口ID:" prop="jkid">
                        <el-input  v-model="filters.jkid" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="调用时间:" class="dysjBtn" required>
                        <el-col :span="11">
                            <el-form-item prop="ksdysj">
                                <el-date-picker
                                        v-model="filters.ksdysj"
                                        type="date"  :editable="false"
                                        :picker-options="pickerOptions0">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="1" style="text-align: center">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="jsdysj">
                                <el-date-picker
                                        v-model="filters.jsdysj"
                                        type="date"  :editable="false"
                                        :picker-options="pickerOptions1">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button" @click="getjkdyrz">查询</el-button>
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

                <el-table-column prop="jkid"   label="接口ID" >
                </el-table-column>
                <el-table-column prop="bmmc"  label="部门名称" >
                </el-table-column>
                <el-table-column prop="dysj"  width="160" label="调用时间" >
                    <template slot-scope="scope">
                        <span>{{scope.row.dysj | formDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="fhjgdm"   label="返回结果代码">
                </el-table-column>
                <el-table-column prop="fhsj"  width="160" label="返回时间" >
                    <template slot-scope="scope">
                        <span>{{scope.row.fhsj | formDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="jklx"   label="接口类型" :formatter="formatRole">
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
                <el-form-item label="部门代号:" >
                    <el-input v-model="formdata.bmbh" :disabled="true" auto-complete="off"></el-input>
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
                        if (this.filters.jsdysj != "") {
                            return time.getTime() > Date.now() || time.getTime() > this.filters.jsdysj;
                        } else {
                            return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.filters.ksdysj || time.getTime() > Date.now();
                    }
                },
                filters: {
                    jkid: '',
                    bmmc: '',
                    ksdysj: '',
                    jsdysj: '',
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
            formatRole :function(row, column) {
                return row.jklx == 1 ? '安检' :row.jklx == 2 ? '综检':'环检'
            },
            //用户状态显示转换
            formatState :function(row, column) {
                return row.state == 1 ? '正常' : row.state == 0 ?'警告':'其他'
            },


            handleCurrentChange(val) {
                this.filters.pageNum = val;
                this.getjkdyrz();
            },
            //每页显示多少条数据
            handleSizeChange(size){
                this.filters.pageNum = val;
                this.getjkdyrz();
                this.filters.pageSize = size;

                console.log(`每页 ${size} 条`);
            },

            getjkdyrz(){
                if(this.filters.ksdysj !== ""){
                    this.filters.ksdysj = moment(this.filters.ksdysj).format('YYYY-MM-DD')
                }
                if(this.filters.jsdysj !== ""){
                    this.filters.jsdysj = moment(this.filters.jsdysj).format('YYYY-MM-DD')
                }
                this.filters.hphm = this.filters.hpsf +this.filters.hphmmc;
                let para = Object.assign({}, this.filters);

                this.listLoading = true;
                var qs = require('querystring')
                axios.post('api/sys/jkrz/searchTjkrzPage', qs.stringify(para) ,{
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
                sessionStorage.setItem('logDetaildata',JSON.stringify(row))
                this.$router.push('/logDetail')
            },

            //重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.filters.ksdysj = '';
                this.filters.jsdysj = '';
            },

            selsChange: function (sels) {
                this.sels = sels;
            },

        },
        computed:{

        },
        mounted() {
            this.getjkdyrz();
            // var form =document.getElementById("formdata");
            // form.reset();
            this.filters.ksdysj = new Date();
            this.filters.jsdysj = new Date();

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