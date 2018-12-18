<template>
	<div class="msg-box">
		<p class="name">新增用户</p>
		<div class="line-box user-box">
			<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="addForm" label-width="30%" class="fil-box" :rules="addFormRules" ref="addForm" id="addForm">

					<el-col  :span="12">
				        <el-form-item label="用户账号:" class=" min-ht" prop="userName">
				          <el-input v-model="addForm.userName" placeholder="请输入用户账号" style="width: 165px"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col  :span="12" >
				        <el-form-item label="登录名:" class="min-ht" prop="loginName">
				          <el-input v-model="addForm.loginName" placeholder="请输入用户姓名" style="width: 165px"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="12">
						<el-form-item label="用户类型:" class=" min-ht"  prop="type">
							<el-select v-model="addForm.type" placeholder="请输入用户类型" style="width: 165px">
								<el-option label="微信用户" value="1"></el-option>
								<el-option label="企业用户" value="2"></el-option>
								<el-option label="管理用户" value="3"></el-option>
							</el-select>
						</el-form-item>
				    </el-col>
			        <el-col :span="12">
				        <el-form-item label="用户状态:" class="min-ht" prop="status">
				        	<el-select v-model="addForm.status" placeholder="请输入用户状态" style="width: 165px">
				        		<el-option label="启用" value="1"></el-option>
						      	<el-option label="锁定" value="2"></el-option>
						    </el-select>
				        </el-form-item>
				    </el-col>
				    <el-col :span="12">
				        <el-form-item label="角色名称:"  class="min-ht" prop="name">
				          <el-input v-model="addForm.name" placeholder="请输入角色名称" style="width: 165px"></el-input>
				        </el-form-item>
				    </el-col>
					<el-col :span="12">
						<el-form-item label="联系电话:"  class="min-ht" prop="phone">
							<el-input v-model="addForm.phone" placeholder="请输入联系电话" style="width: 165px"></el-input>
						</el-form-item>
					</el-col>
		      	</el-form>
		    </el-row>
		</div>
		<div slot="footer" class="footer">
			<el-button type="warning" @click="back">取消</el-button>
			<el-button type="primary" style="margin-right:20px;" @click.native="addSubmit" :loading="addLoading">保存</el-button>
		</div> 
	</div>
</template>

<script>
	import util from '../../common/js/util'
	import { getUserListPage , addUser } from '../../api/api'
    import axios from 'axios';
    import qs from 'qs';
	export default{
		data(){
			return{
				addForm:{
                    userName:'',//用户账号
                    loginName:'',//登录名
                    type:'',//用户类型
                    status:'',//用户状态
                    phone:'',//联系电话
				},
				page:1,
				addLoading: false,
				addFormRules: {
                    userName: [
						{ required: true, message: '请输入用户账号', trigger: 'blur' }
					]
				},
				startTime:'', //可登录时间段开始时间
				endTime:'',   //可登录时间段结束时间

			}
		},
		methods:{

			//保存
			addSubmit(){

				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
                            //NProgress.start();
                            let para = {
                                "loginName":this.addForm.loginName,
                                "type": this.addForm.type,
                                "status":this.addForm.status,
                                "phone": this.addForm.phone, //手机号码
                                "userName": this.addForm.userName,//用户姓名
                            }
                            var json =JSON.stringify(para);
                            let paradata = {
                                apiId: "adminUseradd",
                                jsonData: json
                            };
                            var qs = require('querystring')
                            axios.post('/bookingManger/commonAccess', qs.stringify(paradata),{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                    // "Content-Type":"application/json; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                this.addLoading = false;
                                this.$message({
                                    message:'新增成功',
                                    type:'success'
                                });
                                window.history.go(-1)
                            }).catch((response) =>{
                                this.addLoading = false;
                                this.$message({
                                    message:'新增失败',
                                    type:'error'
                                });

                            });
						});
					}
				});

				
			},

			//取消
			back: function(){
				window.history.go(-1)
				var box = document.getElementsByClassName("router-link-active");
				// console.log(box[0].value);
			},

		},
		mounted(){
			// this.getUsers();
			// var editMsg = sessionStorage.getItem('editMsg')
	    	// this.filters = JSON.parse(editMsg)
	    	// console.log(this.filters,'111111111')

		}
	}
</script>

<style scoped>
	.msg-box{
		border-top:2px solid #1080d6;
	}
	.line-box{
		border:1px solid #dfe4ed;
	}
	.line-box .toolbar{
		background-color: #fff;
		margin-left:0!important;
		margin-right:0!important;
	}

</style>