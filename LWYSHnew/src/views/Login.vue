<template>
  <div class="ct">
    <div class="head-cont">
      <img src="../assets/loginlogo.png" class="head-img">
    </div>
    <div class="login-box">
      <div class="box">
        <div class="loginBlock">
          <div class="hd-login"  :class="ishow? 'focus' : 'unfocus'">
            <span class="type-name " >用户登录 / User login</span>
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
            <el-checkbox v-model="checked" class="remember">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
              <el-button class="el-button loginBtn" type="" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
              <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
            </el-form-item>
          </el-form>
        </div>
        <div class="loginCenter">

        </div>

      </div>
    </div>
    <span class="ft">
          <p class="tit">建议您使用IE9+、360、FireFox、Google Chrome，分辨率1280*800及以上浏览器</p>
          <p class="tit">南昌市微轲联信息技术有限公司@版权所有@1997-2018</p>
          <p class="tit">版本号：V1.0.0.20181212Beta   服务电话：0791-83807622</p>
      </span>
    <el-dialog title="登录成功请修改密码后再次登录" class="dia-box" :visible.sync="editFormVisible"  v-model="editFormVisible" :close-on-click-modal="false" width="658px" center @close='closeDialog'>
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="旧密码" prop="oldPwd">
          <el-input type="password" v-model="editForm.oldPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input type="password" v-model="editForm.newPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="editForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="dialog-button danger-button"  type="" @click.native="editSubmit" :loading="editLoading">确认</el-button>
        <el-button class="dialog-button" type="" @click.native="editFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
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
        document.querySelector('body').setAttribute('style', 'background-color:#e1fdfa')


    },
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入新密码'));
            }else if (value.length < 6) {
                callback(new Error('新密码不能少于六位'));
            } else if (value == this.editForm.oldPwd) {
                callback(new Error('新密码与旧密码一致!'));
            } else {
                if (this.editForm.checkPass !== '') {
                    this.$refs.editForm.validateField('checkPass');
                }
                callback();
            }
        };

        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.editForm.newPwd) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
      return {

          ishow:true,
          c1:'focus',
          c2:'unfocus',
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            // { min: 6, max: 14, message:'账号为6-14位', trigger:'blur'}
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true,
        editFormVisible: false,//修改密码界面是否显示
          //编辑界面数据
          editLoading: false,
          editForm: {
              id:'',
              oldPwd:'', //旧密码
              newPwd: '' , //新密码
              checkPass: '' ,//确认密码
          },
          editFormRules: {
              oldPwd: [
                  { required: true, message: '请输入旧密码', trigger: 'blur' },
              ],
              newPwd: [
                  {  required: true,validator: validatePass, trigger: 'blur' }
              ],
              checkPass: [
                  {  required: true,validator: validatePass2, trigger: 'blur' }
              ],
          },
      };
    },
    methods: {
        handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {

        var _this = this;
        console.log(_this.checked);
          //判断复选框是否被勾选 勾选则调用配置cookie方法
          if(_this.checked){
              //传入账号名，密码，和保存天数3个参数
              _this.setCookie(this.ruleForm2.account,this.ruleForm2.checkPass,7);
          }else {
              _this.clearCookie();
          }
          // let  user  = {"scdlip":"192.168.1.212","hj":"1","sfgly":"1","qsipdz":"192.168.1.1","jzipdz":"192.168.10.2","aj":"1","delFlag":"0","yhbh":"admin","jsmc":"测试管理员","yhlxfs":"11","bmmc":"部门1","scdlsj":"2018-11-22 02:28:38","zj":"1","dlsj":"2018-11-22 14:32:54","yhzt":"1","mmyqx":"2019-09-26 12:00:00","yhmm":"96e79218965eb72c92a549dd5a331F12","dlcs":566,"yhsfzh":"362202199309270016","yhyxq":"2019-09-26 12:00:00","dlipdz1":"0:0:0:0:0:0:0:1","yhxm":"zxq","bmbh":"1"}
          // sessionStorage.setItem('user', JSON.stringify(user));
          // this.$router.push({ path: '/main' });
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;

            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
                var qs = require('querystring')
                axios.post('api/login/login', qs.stringify(loginParams) ,{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    console.log(response.data,111)
                    if(response.data.code == 2){
                        this.editFormVisible = true;
                        this.logining = false;
                        this.$message({
                            message: response.data.msg,
                            type: 'success'
                        });

                    }else if(response.data.code == 1){
                        this.logining = false;
                        this.$message({
                            message: response.data.msg,
                            type: 'success'
                        });
                        let  user  = response.data.data;
                        sessionStorage.setItem('user', JSON.stringify(user));
                        //登录按钮跳转
                        this.$router.push({ path: '/main' });
                    }else if (response.data.code == 3){
                        this.logining = false;
                        this.$confirm('该账号已在线，是否继续登录?', '提示', {
                            type: 'warning'
                        }).then(() => {
                            let para = { sfzhm: "2" };
                            var qs = require('querystring')
                            axios.post('api/login/kickout', qs.stringify(para) ,{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                this.$message({
                                    message: response.data.msg,
                                    type: 'success'
                                });
                                this.handleSubmit2();
                            }).catch((response) =>{
                                this.$message({
                                    message: response.data.msg,
                                    type: 'warning'
                                });
                            });
                        }).catch(() => {

                        });
                    }else {
                        this.logining = false;
                        this.$message({
                            message: response.data.msg,
                            type: 'warning'
                        });
                    }




                }).catch((response) =>{
                    this.logining = false;
                    this.$message({
                        message: response.data.msg,
                        type: 'error'
                      });
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
        //设置cookie
        setCookie(c_name,c_pwd,exdays) {
            var exdate=new Date();//获取时间
            exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
            //字符串拼接cookie
            window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
            window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
        },
        //读取cookie
        getCookie:function () {
            if (document.cookie.length>0) {
                var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
                for(var i=0;i<arr.length;i++){
                    var arr2=arr[i].split('=');//再次切割
                    //判断查找相对应的值
                    if(arr2[0]=='userName'){
                        this.ruleForm2.account=arr2[1];//保存到保存数据的地方
                    }else if(arr2[0]=='userPwd'){
                        this.ruleForm2.checkPass=arr2[1];
                    }
                }
            }
        },
        //清除cookie
        clearCookie:function () {
            this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
        },
        //密码修改提交
        editSubmit: function () {
            var self = this;
            self.$refs.editForm.validate((valid) => {
                if (valid) {
                    self.$confirm('确认提交吗？', '提示', {}).then(() => {
                        let para = {
                            userName:self.ruleForm2.account,
                            oldPwd:self.editForm.oldPwd, //旧密码
                            newPwd: self.editForm.newPwd , //新密码
                        };
                        console.log(para, '2232')
                        var qs = require('querystring')
                        axios.post('api/login/updatePassWord',qs.stringify(para)  ,{
                            headers: {
                                "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                            }, //转换类型
                            withCredentials : true,
                        }).then((response) =>{
                            if(response.data.code == 1){
                                self.$message({
                                    message: response.data.msg,
                                    type: 'success'
                                });
                                self.editFormVisible = false;
                                this.editLoading = false;
                            }else {
                                self.$message({
                                    message: response.data.msg,
                                    type: 'error'
                                });
                            }


                            //this.$refs['editForm'].resetFields();

                        }).catch( (response) => {

                            // this.editLoading = false;
                        });
                    });
                }
            });
        },
        //关闭弹框的事件
        closeDialog(){
            // this.formdata = Object.assign({});
            this.editForm = Object.assign({});

        },
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
          mounted(){
          this.getCookie();

      }

  }

</script>

<style scope>
  html{
  }
  body {
    background-color: transparent!important;
  }
  .ct{
    display: block;
    float: left;
    width: 100%;
    background: url("../assets/loginback.jpg") no-repeat ;

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
    text-align: center;
    margin-top: 101px;
  }
  .head-cont .head-img{
    display: inline-block;
  }
  .loginBlock{
    margin:20px auto;
    width: 960px;
    height: 460px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #ffffff;
    border: 1px solid #84c4f0;
    border-radius: 7px;
  }
  .hd-login{
    display: block;
    width: 341px;
    margin-right: 3px;
    margin-top: 80px;
    padding-left: 60px;
  }
  .type-name{
    font-size: 30px;
    color: #0d8ee1;

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
    height: 500px;
    display: block;
  }
  .login-box .box{
    position: relative;
    display: block;
    width: 1000px;
    height: 100%;
    margin:0 auto;
    overflow: hidden;
  }
  .login-container {
    display: block;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    padding: 35px 35px 15px 60px;
    background: #fff;
    width: 336px;
  }
  .login-container .el-input__inner{
    padding: 0 15px 0 45px;
    border:1px solid #0d8ee1;
    height: 46px;
    line-height: 46px;
    border-radius: 3px;
  }
  .login-container .el-form-item.is-success .el-input__inner{
    border-color:#0d8ee1;
  }
  .login-container .fa{
    position: absolute;
    font-size: 22px;
    top:2px;
    left:0px;
    border-right:1px solid #99ccf3;
    padding:  10px;
    color: #888888;
    z-index: 22;
    width: 16px;
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
    color: #ffffff;
  }
  .ct .ft .tit{
    margin-bottom: 3px;
    margin-top:0;
  }
  .loginBtn{
    color: #ffffff;
    background: transparent url("../assets/loginBtn.png") no-repeat ;
    background-size: 100%;
    border: none;
    height: 48px;
  }
  .loginBtn:hover{
    color: #ffffff;
    background: transparent url("../assets/loginBtn.png") no-repeat ;
    background-size: 100%;
  }
  .loginCenter{
    position: absolute;
    right: 0;
    top: 0;
    width: 520px;
    height: 500px;
    background: transparent url("../assets/logincenter.png") no-repeat ;
    background-size: cover;
  }
</style>