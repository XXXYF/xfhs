<template>
    <section class="sec-box">

        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">查询</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters" label-width="160px">
                <el-col :span="8">
                    <el-form-item label="检验类别:" prop="jylb">
                        <el-select v-model="filters.jylb"  placeholder="全部" >
                            <el-option label="注册登记检验" value="00"></el-option>
                            <el-option label="在用车检验（定检）" value="01"></el-option>
                            <el-option label="临时检验" value="02"></el-option>
                            <el-option label="特殊检验" value="03"></el-option>
                            <el-option label="在用车检验" value="04"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="号牌号码:"  required>
                        <el-col :span="9">
                            <el-form-item prop="hpsf">
                                <el-select v-model="filters.hpsf"  placeholder="全部" >
                                    <el-option
                                            v-for="item in hpsfList"
                                            :key="item.hpsfmc"
                                            :label="item.hpsfmc"
                                            :value="item.hpsfmc">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="1">&nbsp;</el-col>
                        <el-col :span="14">
                            <el-form-item prop="hphmmc">
                                <el-input  v-model="filters.hphmmc"  placeholder="" ></el-input>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="号牌种类:" prop="hpzl">
                        <el-select v-model="filters.hpzl"  placeholder="全部" >
                            <el-option
                                    v-for="item in hpzlList"
                                    :key="item.lbdm"
                                    :label="item.dmsm"
                                    :value="item.lbdm">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="流水状态:" prop="lszt">
                        <el-select v-model="filters.lszt" placeholder="全部">
                            <el-option label="检测中" value="0"></el-option>
                            <el-option label="检测完成" value="1"></el-option>
                            <el-option label="合格" value="2"></el-option>
                            <el-option label="不合格" value="3"></el-option>
                            <el-option label="退办" value="4"></el-option>
                            <el-option label="正在审核中" value="5"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="检测开始时间:"  prop="jykssj">
                        <el-date-picker
                                v-model="filters.jykssj"
                                type="date"  :editable="false"
                                :picker-options="pickerOptions0">
                        </el-date-picker>
                    </el-form-item>

                </el-col>
                <el-col :span="8">
                    <el-form-item label="检测截止时间:" prop="jyjzsj">
                        <el-date-picker
                                v-model="filters.jyjzsj"
                                type="date"  :editable="false"
                                :picker-options="pickerOptions1">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button" @click="getjcywxx">查询</el-button>
                    <el-button class="dialog-button reset-button" @click="resetForm('filters')">重置</el-button>
                </el-col>
            </el-form>
        </el-col>
        <i class="f-hr20"></i>
        <!--列表-->

        <div class="list-box">

            <el-table :data="users" highlight-current-row v-loading="listLoading"  @selection-change="selsChange" style="width: 100%">
                <el-table-column type="index"   width="60" label="序号">
                </el-table-column>
                <el-table-column prop="jylb" label="检验类别" >
                    <template slot-scope="scope">
                        <span>{{scope.row.jylb | jylbDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="hphm"   label="号牌号码" >
                </el-table-column>
                <el-table-column prop="hpzlmc"   label="号牌种类" >
                </el-table-column>
                <el-table-column prop="cllxmc"   label="车辆类型" >
                </el-table-column>
                <el-table-column prop="jyrq"   label="检验日期">
                    <template slot-scope="scope">
                        <span>{{scope.row.jyrq | formDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="jycs" width="100" label="检验次数">
                </el-table-column>
                <el-table-column prop="lszt"  width="140" label="检验状态">
                    <template slot-scope="scope">
                        <span>{{scope.row.lszt | lsztDate }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="jyjl" width="100" label="检验结论">
                </el-table-column>

                <el-table-column label="操作" fixed="right">
                    <template slot-scope="scope">
                        <el-button  class="dialog-button blue-button" @click="handleEdit(scope.$index, scope.row)">获取回执</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <el-col :span="24" class="toolbar count">
            <span class="count-num">显示10条,共{{total}}条</span>
            <el-pagination layout="prev,pager,next,jumper" @current-change="handleCurrentChange" @size-change="handleSizeChange"
                           :page-size="10" :total="total" prev-text='上一页' next-text="下一页">

            </el-pagination>
        </el-col>
        <el-dialog title="审核回执" class="dia-box" :visible.sync="shhzVisible"  v-model="shhzVisible" :close-on-click-modal="false" width="658px" center @close='closeDialog'>
            <el-col :span="24" >
                <el-form  :model="shhzList" ref="shhzList" >

                    <el-col :span="18" :offset="3">
                        流水号：{{shhzList.jylsh}}
                    </el-col>
                    <el-col :span="18" :offset="3">
                        检验次数：{{shhzList.jycs}}
                    </el-col>
                    <el-col :span="18" :offset="3">
                        审核结果：{{shjg}}
                    </el-col>
                    <el-col :span="18" :offset="3">
                        <span v-if="shyy != ''">原因：{{shyy}}！</span>
                    </el-col>



                </el-form>
            </el-col>
            <el-col :span="24" class="selectBtnbox">
                <el-button  class="dialog-button search-button" @click="hideDialog">确定</el-button>
            </el-col>
        </el-dialog>
        <el-dialog title="打印签证" class="dia-box" :visible.sync="dyqzVisible"  v-model="dyqzVisible" :close-on-click-modal="false" width="658px" center @close='closeDialog'>
            <!--<el-form :model="dyqzForm" label-width="80px" :rules="dyqzFormRules" ref="editForm">-->
                <!--<el-form-item label="等级评定到期时间" >-->
                    <!--<el-input v-model="dyqzForm.oldPwd" auto-complete="off"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="二级维护到期时间">-->
                    <!--<el-input  v-model="dyqzForm.newPwd" auto-complete="off"></el-input>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="打印到第几行" >-->
                    <!--<el-input  v-model="dyqzForm.checkPass" auto-complete="off"></el-input>-->
                <!--</el-form-item>-->
            <!--</el-form>-->


            <el-col :span="24" class="selectBtnbox">
                <el-button  class="dialog-button search-button" @click="hideDialog">确定</el-button>
            </el-col>
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

        data(){
            return{
                pickerOptions0: {
                    disabledDate: (time) => {
                        if (this.filters.jyjzsj != "") {
                            return time.getTime() > Date.now() || time.getTime() > this.filters.jyjzsj;
                        } else {
                            return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.filters.jykssj || time.getTime() > Date.now();
                    }
                },
                filters:{
                    jylsh:'',
                    jylx:'',
                    hpsf:'',
                    hphmmc:'',
                    hphm:'',
                    hpzl:'',
                    jyjgbh:'',
                    jylb:'',
                    lszt:'',
                    jykssj:'',
                    jyjzsj:'',
                    pageSize:'10',
                    pageNum:'1',
                },
                users: [],
                total: 0,
                currentPage: 1,
                listLoading: false,
                editLoading: false,
                sels: [],//列表选中列

                hpzlList:{},
                jyjgbhList:{},
                shhzList:{},
                dyqzForm:{},
                shjg:"",
                shyy:"",
                shhzVisible:false,
                dyqzVisible:false,
                hpsfList:[
                    {hpsfmc:'京',},
                    {hpsfmc:'津',},
                    {hpsfmc:'冀',},
                    {hpsfmc:'晋',},
                    {hpsfmc:'蒙',},
                    {hpsfmc:'辽',},
                    {hpsfmc:'吉',},
                    {hpsfmc:'黑',},
                    {hpsfmc:'沪',},
                    {hpsfmc:'苏',},
                    {hpsfmc:'浙',},
                    {hpsfmc:'皖',},
                    {hpsfmc:'闽',},
                    {hpsfmc:'赣',},
                    {hpsfmc:'鲁',},
                    {hpsfmc:'豫',},
                    {hpsfmc:'鄂',},
                    {hpsfmc:'湘',},
                    {hpsfmc:'粤',},
                    {hpsfmc:'桂',},
                    {hpsfmc:'琼',},
                    {hpsfmc:'渝',},
                    {hpsfmc:'川',},
                    {hpsfmc:'黔',},
                    {hpsfmc:'滇',},
                    {hpsfmc:'藏',},
                    {hpsfmc:'陕',},
                    {hpsfmc:'甘',},
                    {hpsfmc:'青',},
                    {hpsfmc:'宁',},
                    {hpsfmc:'新',},
                    {hpsfmc:'台',},
                    {hpsfmc:'港',},
                    {hpsfmc:'澳',},
                ],

            }
        },
        methods:{
            //检测类型显示转换
            formatjylx: function(row, column){
                return row.jylx == 1 ? '查验' : row.jylx == 2 ? '检验':'其他'
            },
            //用户角色显示转换
            formatRole :function(row, column) {
                return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
            },
            // 获取七天前
            GetDateStr(AddDayCount) {
                var dd = new Date();
                dd.setDate(dd.getDate()-7);//获取AddDayCount天后的日期
                var y = dd.getFullYear();
                var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
                var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
                console.log(y+"-"+m+"-"+d)
                this.filters.jykssj = y+"-"+m+"-"+d;
                this.filters.jyjzsj = new Date();

            },
            //分页点击
            handleCurrentChange(val) {
                this.filters.pageNum = val;
                this.getjcywxx();
            },

            //每页显示多少条数据
            handleSizeChange(size){
                this.filters.pageNum = val;
                this.getjcywxx();
                this.pagesize = size;

                console.log(`每页 ${size} 条`);
            },
            getjcywxx(){
                if(this.filters.jykssj !== ""){
                    this.filters.jykssj = moment(this.filters.jykssj).format('YYYY-MM-DD')
                }
                if(this.filters.jyjzsj !== ""){
                    this.filters.jyjzsj = moment(this.filters.jyjzsj).format('YYYY-MM-DD')
                }
                this.filters.hphm = this.filters.hpsf +this.filters.hphmmc;
                let para = Object.assign({}, this.filters);

                this.listLoading = true;
                var qs = require('querystring')
                axios.post('api/ajlw/jcjbxx/jcywxxPage', qs.stringify(para) ,{
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

            //重置
            resetForm(formName){
                this.$refs[formName].resetFields();

            },
            selsChange: function (sels) {
                this.sels = sels;
            },


            // 获取号牌种类下拉框
            gethpzlUpdata() {
                let para = {
                    sjlx:"hpzl",
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/sys/ggcl/queryCsxxInfo', qs.stringify(para) ,{
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
                    console.log(response.data.data,11222);
                    this.hpzlList = response.data.data.info;
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            // 获取检验机构下拉框
            getjyjgbhUpdata() {
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/sys/bmgl/listAjbm', qs.stringify() ,{
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
                    console.log(response.data.data,11222);
                    this.jyjgbhList = response.data.data;
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            //关闭弹框的事件
            closeDialog(){
                // this.formdata = Object.assign({});
                this.editForm = Object.assign({});

            },
            //获取审核
            handleEdit: function (index, row) {

                let para = {
                    jylsh: row.jylsh,
                    jycs: row.jycs,
                    jyjgbh: row.jyjgbh,
                };
                var qs = require('querystring')
                axios.post('api/ajlw/sh/getshhz', qs.stringify(para) ,{
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
                    if (response.data.code == '1'){
                        this.$message({
                            message: response.data.msg,
                            type: 'success'
                        });
                    }else {
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                    }

                    // this.shhzVisible = true;
                    // this.shhzList = row;
                    // console.log(response.data.data,11222);
                    // this.shjg = response.data.data.yshjg;
                    // this.shyy = response.data.data.yshmsxx;
                }).catch((response) =>{
                    this.listLoading = false;

                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            hideDialog(){
                this.shhzVisible = false;
            },
        },
        mounted() {
            this.gethpzlUpdata();
            this.getjyjgbhUpdata();
            this.getjcywxx();
            this.GetDateStr();

            // this.getphotoQuery();

        },
        filters:{
            formDate:function (dysj) {
                //return monent(dysj)
                return moment(dysj).format('YYYY-MM-DD HH:mm:ss')

            },
            jylbDate:function (jylb) {
                if(jylb == '00'){
                    return '检测中'
                }else  if (jylb == '01'){
                    return '在用车检验（定检）'
                }else  if (jylb == '02'){
                    return '临时检验'
                }else  if (jylb == '03'){
                    return '特殊检验'
                }else  if (jylb == '04'){
                    return '在用车检验（非定检）'
                }else {
                    return ''
                }

            },
            lsztDate:function (lszt) {
                if(lszt == '0'){
                    return '检测中'
                }else  if (lszt == '1'){
                    return '检测完成'
                }else  if (lszt == '2'){
                    return '合格'
                }else  if (lszt == '3'){
                    return '不合格'
                }else  if (lszt == '4'){
                    return '退办'
                }else  if (lszt == '5'){
                    return '正在审核中'
                }else {
                    return ''
                }

            }
        }
    }
</script>

<style >
    /*#filterss .el-select>.el-input{*/
    /*width: 150px;*/
    /*}*/
    .title{
        font-size: 20px;
    }
</style>