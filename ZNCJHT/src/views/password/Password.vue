<template>
	<div class="pass-box">
		<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username">
		    	<el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
		  	</el-form-item>
			<el-form-item label="旧密码" prop="oldPassword">
		    	<el-input type="password" v-model="ruleForm2.oldPassword" auto-complete="off"></el-input>
		  	</el-form-item>
		 	<el-form-item label="密码" prop="pass">
		    	<el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
		  	</el-form-item>
		  	<el-form-item label="确认密码" prop="checkPass">
		    	<el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
		  	</el-form-item>
		  	<el-form-item>
		    	<el-button type="success" @click="submitForm('ruleForm2')">提交</el-button>
		    	<el-button type="success" plain  @click="resetForm('ruleForm2')">重置</el-button>
		  	</el-form-item>
		</el-form>
	</div>
</template>
<script>
import util from '../../common/js/util'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      // const validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'))
      //   } else if (value.length < 6) {
      //     callback(new Error('密码长度至少6位'))
      //   } else if (!checkPass(value)) {
      //     callback(new Error('密码为数字、字母，6-14位'))
      //   } else {
      //     callback()
      //   }
      //   if (value === '') {
      //     callback(new Error('请输入密码'))
      //   } else {
      //     callback()
      //   }
      // }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
        	username:'',
        	oldPassword:'',
          	pass: '',
          	checkPass: '',
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
        submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            alert('submit!');
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
        },
      	resetForm(formName) {
        	this.$refs[formName].resetFields();
      	}
    },
    mounted(){
      var userid = sessionStorage.getItem('userid');
      console.log(userid,'000000000')
    }
  }
</script>
<style>
	.pass-box{
		padding:10px;
		background: #fff;
	}
</style>
