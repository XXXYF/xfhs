<template>


    <div class="">
        <div class="global-width">
            <div class="gpaction">
                <div class="gpactionleft">
                    <div class="gptitle">开始预览</div>
                    <div class="gppages">
                        <div>
                            <object classid="clsid:090457CB-DF21-41EB-84BB-39AAFC9E271A"
                                    id="ScanCtrl" codebase="*.cab#version=1,0,0,1" width="100%"
                                    height="320"></object>

                        </div>
                    </div>
                </div>
                <div class="gpactionright">
                    <div class="gptitle">照片预览</div>
                    <div class="tppages">
                        <img :src="gpzpsrc" alt="">
                    </div>
                    <div class="btnbox">
                        <input class="dialog-button enjoin-button" type="button" value="上传" @click="TakePic()" />
                        <input class="dialog-button enjoin-button" type="button" value="开始预览" @click="getzlzl()" />
                    </div>


                </div>
            </div>

            <el-col :span="24" class="toolbar fil-tool" style="padding: 0px;clear: both;    border-top: 1px solid #cfcece;margin-top: 20px">
                    <el-form  :model="filters" ref="filters" :rules="filtersValid" id="filterss" class="filters" label-width="160px">
                        <el-col :span="8">
                            <el-form-item label="号牌号码:">
                                <el-input v-filterSpecialChar v-model="filters.hphm" placeholder=""  :maxlength="10"   ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="号牌种类:">
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
                            <el-form-item label="车辆识别代号:">
                                <el-input v-filterSpecialChar v-model="filters.clsbdh" placeholder=""  :maxlength="25" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="保险公司:">
                                <el-select v-model="filters.bxgs"  placeholder="全部" >
                                    <el-option
                                            v-for="item in bxgsList"
                                            :key="item.dmsm"
                                            :label="item.dmsm"
                                            :value="item.dmsm">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="保险凭证号:">
                                <el-input  v-model="filters.bxpzh" placeholder=""  :maxlength="50" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="保险金额:">
                                <el-input v-filterSpecialChar v-model="filters.bxje" placeholder=""  :maxlength="10" ></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="保险生效日期:" prop="sxrq">
                                <el-date-picker
                                        v-model="filters.sxrq"
                                        type="date"  :editable="false"
                                        placeholder=""
                                        :picker-options="pickerOptions0">
                                </el-date-picker>
                            </el-form-item>

                        </el-col>
                        <el-col :span="8">
                            <el-form-item label="保险终止日期:" prop="zzrq">
                                <el-date-picker
                                        v-model="filters.zzrq"
                                        type="date"  :editable="false"
                                        placeholder="结束日期"
                                        :picker-options="pickerOptions1">
                                    <!--format="yyyy 年 MM 月 dd 日"-->
                                    <!--value-format="yyyy-MM-dd"-->
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8" class="gpzlbtn" style="height: 41px">
                            <el-button  class="dialog-button " style="margin-left: 30px" @click="uploadJqx">上传保险信息</el-button>
                            <!--<el-button  class="dialog-button " @click="">状态查询</el-button>-->
                        </el-col>

                    </el-form>
                </el-col>
                <div class="gpzllist">
                    <div class="gptitle">高拍资料列表</div>
                    <div class="gpzlbtn">
                        <el-button v-for="(item,index) in zlzpzldata" :key="index"  class="dialog-button " @click="getzlzl(item.zlzl)">{{item.zlmc}}</el-button>
                    </div>
                </div>
                <el-col :span="24" class="selectBtnbox gpzlBtnbox">
                    <el-button class="dialog-button enjoin-button" @click="updatesqsh" :loading="editLoading">申请审核</el-button>
                    <el-button class="dialog-button enjoin-button" @click="openDetails">检验详情</el-button>
                    <el-button  class="dialog-button enjoin-button" @click="closewindow">退出</el-button>
                    <!--<el-button class="dialog-button enjoin-button" @click="enjoin">禁用</el-button>-->
                </el-col>
        </div>
    </div>




</template>

<script>
    //import { getUserListPage, removeUser,addUser,editUser} from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'

    // function stop_preview()
    // {
    //     ScanCtrl.StopPreview();
    //     fun();
    // }

    export default {

        data(){
            return {
                //不限日期  起始日期小于结束日期
                pickerOptions0: {
                    disabledDate: (time) => {
                        if (this.filters.zzrq != "") {
                            return  time.getTime() > this.filters.zzrq;
                        } else {
                        }
                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.filters.sxrq ;
                    }
                },
                filters:{},
                filtersValid:{
                    sxrq: [
                        { type: 'date', required: true, message: '请输入生效日期', trigger: 'blur' },
                    ],
                    zzrq: [
                        {  type: 'date',required: true, message: '请输入终止日期', trigger: 'blur' },
                    ],
                },
                zlzpzldata:{},
                gpzpsrc:'',
                zp:'',
                zpbh:'',
                editLoading:false,
                hpzlList:{},
                bxgsList:{},
            }
        },
        methods:{
            //初始化高拍仪
            stopgpy(){
                ScanCtrl.StopPreview();
                fun();
            },
            start_preview(url)
            {
                // ScanCtrl.StartPreview();
                // fun();
                ScanCtrl.StartPreviewEx();
            },
            //高拍仪拍照
            getzlzl(zlzl){
                var path="D:\\"+this.get_name()+".jpg";
                //ScanCtrl.EnableDateRecord(1);
                this.zp=ScanCtrl.ScanBase64("");
                console.log(this.zp)
                this.gpzpsrc = "data:image/jpeg;base64," + this.zp;
                this.zpbh=zlzl;
                // this.stopgpy();
            },
            //高拍仪照片上传
            TakePic(){

                var self = this;
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                    zp: this.zp,
                    zpbh: this.zpbh,
                };
                var qs = require('querystring')
                axios.post('api/ajlw/zp/uploadzp', qs.stringify(para) ,{
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
                    if (response.data.code == '0'){
                        self.$message({
                            message: '上传失败',
                            type: 'error'
                        });
                    }else {
                        self.$message({
                            message: '上传成功',
                            type: 'success'
                        });
                    }

                }).catch((response) =>{
                    self.$message({
                        message: '上传失败',
                        type: 'error'
                    });
                });
            },
            // 高拍图片名字生成
            get_name()
            {
                var date=new Date();
                var yy=date.getFullYear().toString();
                var mm=(date.getMonth()+1).toString();
                var dd=date.getDate().toString();
                var hh=date.getHours().toString();
                var nn=date.getMinutes().toString();
                var ss=date.getSeconds().toString();
                var mi=date.getMilliseconds().toString();
                var picName=yy+mm+dd+hh+nn+ss+mi;
                return picName;
            },
            // 获取高拍资料
            getzlzpzldata() {
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                };

                var qs = require('querystring')
                axios.post('api/ajlw/zp/getZlzp', qs.stringify(para) ,{
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
                    console.log(response.data.data.length,11222);
                    if (response.data.code == '0'){

                    }else {
                        this.zlzpzldata = response.data.data;
                    }

                }).catch((response) =>{
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            // 上传保险资料
            uploadJqx() {
                this.$refs.filters.validate((valid) => {
                    if (valid) {
                        if(this.filters.sxrq !== ""){
                            this.filters.sxrq = moment(this.filters.sxrq).format('YYYY-MM-DD')
                        }
                        if(this.filters.zzrq !== ""){
                            this.filters.zzrq = moment(this.filters.zzrq).format('YYYY-MM-DD')
                        }
                        let para = {
                            jylsh: this.filters.jylsh,
                            jycs: this.filters.jycs,
                            jyjgbh: this.filters.jyjgbh,
                            bxpzh: this.filters.bxpzh,
                            bxje: this.filters.bxje,
                            bxgs: this.filters.bxgs,
                            sxrq: this.filters.sxrq,
                            zzrq: this.filters.zzrq,
                        };
                        var self = this;
                        var qs = require('querystring')
                        axios.post('api/ajlw/jqx/uploadJqx', qs.stringify(para) ,{
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
                            self.$message({
                                message: '上传成功',
                                type: 'success'
                            });
                        }).catch((response) =>{
                            self.$message({
                                message: '上传失败',
                                type: 'error'
                            });
                        });
                    }

                });

            },
            updatesqsh() {
                var self = this;
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                };
                this.editLoading = true;
                var qs = require('querystring')
                axios.post('api/ajlw/ysh/getYshResult', qs.stringify(para) ,{
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
                    if (response.data.data.yshjg == "1"){
                        let para = {
                            jylsh: this.filters.jylsh,
                            jycs: this.filters.jycs,
                            jyjgbh: this.filters.jyjgbh,
                            sqlx: 2,
                        };
                        this.editLoading = true;
                        var qs = require('querystring')
                        axios.post('api/ajlw/sh/sqsh', qs.stringify(para) ,{
                            headers: {
                                "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                            },
                            withCredentials:true,
                        }).then((response) =>{

                            self.$message({
                                message: '申请审核成功',
                                type: 'success'
                            });
                            this.editLoading = false;
                        }).catch((response) =>{
                            this.editLoading = false;
                            self.$message({
                                message: '申请审核失败',
                                type: 'error'
                            });
                        });
                    }else {
                        this.$confirm('您的预审核未通过，确认提交吗？', '提示', {}).then(() => {
                            let para = {
                                jylsh: this.filters.jylsh,
                                jycs: this.filters.jycs,
                                jyjgbh: this.filters.jyjgbh,
                                sqlx: 2,
                            };
                            this.editLoading = true;
                            var qs = require('querystring')
                            axios.post('api/ajlw/sh/sqsh', qs.stringify(para) ,{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                self.$message({
                                    message: '申请审核成功',
                                    type: 'success'
                                });
                                this.editLoading = false;
                            }).catch((response) =>{
                                this.editLoading = false;
                                self.$message({
                                    message: '申请审核失败',
                                    type: 'error'
                                });
                            });
                        });
                    }
                    this.editLoading = false;
                }).catch((response) =>{
                    this.editLoading = false;
                    self.$message({
                        message: '申请审核失败',
                        type: 'error'
                    });
                });


            },
            // 获取号牌种类下拉框
            gethpzlUpdata() {
                let para = {
                    sjlx:"hpzl",
                };
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
                    console.log(response.data.data,11222);
                    this.hpzlList = response.data.data.info;
                }).catch((response) =>{
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            // 获取所有保险公司信息
            getbxgsUpdata() {
                let para = {
                    sjlx:"ajlwbxgsxx",
                };
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
                    console.log(response.data.data,11222);
                    this.bxgsList = response.data.data.info;
                }).catch((response) =>{
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            //检验详情
            openDetails() {
                const { href } = this.$router.resolve({
                    name: '安检业务'
                })
                window.open(href,"newWindow","menubar=0,scrollbars=1, resizable=1,status=1,titlebar=0,toolbar=0,location=1");
            },
            //关闭页面
            closewindow(){
                window.close();
                this.stopgpy();

            }

    },
        mounted() {
            var rowdate = sessionStorage.getItem('rowdate');
            if (rowdate) {
                rowdate = JSON.parse(rowdate);
                this.filters = rowdate || '';
            };
            this.getzlzpzldata();
            // this.stopgpy();
            this.gethpzlUpdata();
            this.getbxgsUpdata();
            this.start_preview();
        },

    }



    var READYTOPROCESS = false;
    window.onbeforeunload = function closeWindow(e)
    {
        if (!READYTOPROCESS)
        {
            ScanCtrl.StopPreview();
            fun();
            // stop_preview()
            //message to be returned to the popup box.
            var message = '你确定要关闭吗？',
                e = e || window.event;
            if (e)
                e.returnValue = message; // IE
            return message; // Safari
        }
    };
</script>

<style >
    /*#filterss .el-select>.el-input{*/
        /*width: 150px;*/
    /*}*/

</style>