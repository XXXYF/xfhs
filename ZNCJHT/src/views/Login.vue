<template>


  <div class="ct">
    <div class="head-cont">
      <img src="../assets/logo.png" class="head-img">
    </div>
    <div class="login-box">
      <div class="box">
        <div class="hd-login"  :class="ishow? 'focus' : 'unfocus'">
          <span class="type-name type1" >管理员登录</span>
          <!--<span class="type-name type2">检验机构登录</span>-->
        </div>
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container" v-if="ishow">
          <el-form-item prop="account">
            <i class="fa fa-user"></i>
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
            
          </el-form-item>
          <el-form-item prop="checkPass">
            <i class="fa fa-lock"></i>
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
            
          </el-form-item>
          <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
          <el-form-item style="width:100%;">
            <el-button type="danger" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
            <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
          </el-form-item>
        </el-form>
        <!--<el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container" v-else="">-->
          <!--<el-form-item prop="account">-->
            <!--<el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号111"></el-input>-->
            <!--<i class="fa fa-user"></i>-->
          <!--</el-form-item>-->
          <!--<el-form-item prop="checkPass">-->
            <!--<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码111"></el-input>-->
            <!--<i class="fa fa-lock"></i>-->
          <!--</el-form-item>-->
          <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
          <!--<el-form-item style="width:100%;">-->
            <!--<el-button type="danger" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录2</el-button>-->
            <!--&lt;!&ndash;<el-button @click.native.prevent="handleReset2">重置</el-button>&ndash;&gt;-->
          <!--</el-form-item>-->
        <!--</el-form>-->
      </div>
    </div>
    <span class="ft">
          <p class="tit">建议您使用IE9+、360、FireFox、Google Chrome，分辨率1280*800及以上浏览器</p>
          <p class="tit">南昌市微轲联信息技术有限公司@版权所有@1997-2018</p>
          <p class="tit">版本号：V1.0.0.20180110Beta   服务电话：0791-83807622</p>
      </span>
  </div>
</template>

<script>
  //定义组件的调用方式
  import { requestLogin } from '../api/api';
  //import { reqLogin } from '../api/api';
  import axios from 'axios';
  import qs from 'qs';
  
  export default {
    beforeCreate: function() {
        document.getElementsByTagName("body")[0].className="active";
    },
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            // { min: 6, max: 14, message:'账号为6-14位', trigger:'blur'}
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            // { min: 6, max: 14, message:'密码为6-14位', trigger:'blur'}
            //{ validator: validaePass2 }
          ]
        },
        checked: true,
        ishow:true,
        c1:'focus',
        c2:'unfocus',
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
        surepay(){
          function  jsonFormData(jsonData) {
              var parmams = new URLSearchParams();
              for(var key in jsonData){
                  parmams.append(key,jsonData[key])
              }
              return parmams
          }
        },
      handleSubmit2(ev) {

          // let data ={
          //         "userName": "888888",
          //         "loginName": "888888",
          //         "password": "666666",
          //         "type": 1,
          //         "status": "1",
          //         "phone": "13133819941",
          //         "weChatUserEntity": null,
          //         "managerUserEntity": null,
          //         "companyUserEntity": null,
          //         "roleEntitySet": []
          // }
          //
          // sessionStorage.setItem('user', JSON.stringify(data));
          // this.$router.push({ path: '/order' });

        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
              let mn = {
                  "loginName" : this.ruleForm2.account,
                  "password": this.ruleForm2.checkPass
              }
              var json =JSON.stringify(mn);
              let loginParams ={
                  apiId: "adminLogin",
                  jsonData: json
              }
              console.log(loginParams,'23232')
              var qs = require('querystring')
              console.log(qs.stringify(loginParams))
              axios.post('/login/commonAccess', qs.stringify(loginParams),{
                  headers: {
                      "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                      // "Content-Type":"application/json; charset=UTF-8",
                  },
                  withCredentials:true,
              }).then((response) =>{
                  this.logining = false;
                  this.$message({
                      message: '登录成功',
                      type: 'success'
                  });
                  sessionStorage.setItem('user', JSON.stringify(response.data.data));
                  this.$router.push({ path: '/order' });
              }).catch((response) =>{
                  this.logining = false;
                  this.$message({
                      message: '登录失败',
                      type: 'error'
                  });

              });


          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      // changetab:function(){
      //   this.ishow =! this.ishow
      // }
    },
    created:function() {
        // 主页添加键盘事件,注意,不能直接在焦点事件上添加回车
        var that = this;
        document.onkeydown = function (e) {
            var key = window.event.keyCode;
            if (key == 13) {
                that.handleSubmit2();
            }
        }
    },
  }

</script>

<style>
  .ct{
    display: block;
    float: left;
    width: 100%;
  }
  .active{
    display: block;
    float: left;
    width: 100%;
    height: auto;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
  .head-cont{
    display: block;
    width: 1000px;
    margin:50px auto;
    height: 62px;
  }
  .head-cont .head-img{
    display: block;
    float: left;
  }
  .hd-login{
    display: block;
    float: right;
    width: 341px;
    margin-right: 3px;
    margin-top: 60px;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
    padding: 40px 40px 0px 40px;
  }
  .type-name{
    float: left;
    cursor: pointer;
    color: #888888;
    padding: 10px;
    border-bottom: 1px solid transparent;

  }
  .type-name +.type-name{
    float: right;
  }
  .focus .type1{
    color: #ff5458;
    border-bottom: 1px solid #ff5458;
  }
  .unfocus .type2{
    color: #ff5458;
    border-bottom: 1px solid #ff5458;
  }

  .login-box{
    background:url("../assets/login_bg.png") no-repeat center #0f80d6; 
    height: 467px;
    display: block;
  }
  .login-box .box{
    display: block;
    width: 1000px;
    margin:0 auto;
  }
  .login-container {
    display: block;
    float: right;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    padding: 35px 35px 15px 35px;
    background: #fff; 
    width: 267px;
    margin-right: -340px;
    margin-top: 146px;
  }
    .login-container .el-input__inner{
      padding: 0 15px 0 45px;
      border:1px solid #c8c8c8;
      height: 37px;
      line-height: 37px;
    }
    .login-container .el-form-item.is-success .el-input__inner{
      border-color:#ffcdcd;
    }
    .login-container .fa{
      position: absolute;
      font-size: 22px;
      top:2px;
      left:0px;
      border-right:1px solid #ececec;
      padding: 7px 10px;
      color: #888888;
      z-index: 22;
    }

    .login-container .title {
      margin: 0px auto 20px auto;
      color: #333;
      text-align: center;
    }
    .login-container .title +.title {
      margin-top: 0;
    }
    .login-container .remember {
      margin: 0px 0px 18px 0px;
    }
    .login-container .remember .el-checkbox__label{
      color:#333;
      font-weight: normal;
    }
    .login-container .fog-pass{
      float:right;
      text-decoration:none;
      color:#409EFF;
    }
    .login-container .fog-pass:hover,
    .login-container .fog-pass:active{
      color: #3a8ee6
    }
    .ct .ft{
      display: block;
      float: left;
      width: 100%;
      text-align: center;
      margin-top: 40px;
      color: #333333;
      margin-bottom: 78px;
    }
    .ct .ft .tit{
      margin-bottom: 3px;
      margin-top:0;
    }
</style>