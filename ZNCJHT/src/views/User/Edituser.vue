<template>
	<div class="msg-box">
		<p class="name">用户修改</p>
		<div class="line-box user-box">
			<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="editForm" label-width="30%" class="fil-box" :rules="editFormRules" ref="editForm"> 
			        <!-- <el-col :span="16">
				        <el-form-item label="用户账号:" class="first-item min-ht">
				          <el-input v-model="editForm.no" placeholder="请输入用户账号"></el-input>
				        </el-form-item>
				    </el-col> -->
				    <el-col :span="8">
				        <el-form-item label="用户姓名:" class="min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入用户姓名"></el-input>
				        </el-form-item>
				    </el-col>
			        <!-- <el-col :span="16">
				        <el-form-item label="身份证号码:" class="first-item min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入身份证号码"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="警员/员工编号:">
				          <el-input v-model="editForm.name" placeholder="请输入警员/员工编号"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="16">
				        <el-form-item label="用户角色:" class="first-item min-ht">
				        	<el-select v-model="editForm.role" placeholder="请输入用户角色">
				        		<el-option label="警员" value="0"></el-option>
						      	<el-option label="检验机构业务员" value="1"></el-option>
						      	<el-option label="非警员" value="2"></el-option>
						    </el-select>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="用户部门:" class="min-ht">
				        	<el-select v-model="editForm.department" placeholder="请输入用户部门">
				        		<el-option label="警员" value="0"></el-option>
						      	<el-option label="检验机构业务员" value="1"></el-option>
						      	<el-option label="非警员" value="2"></el-option>
						    </el-select>
				        </el-form-item>
				    </el-col>
			        <el-col :span="16">
				        <el-form-item label="特征:"  class="first-item min-ht">
				        	<el-select v-model="editForm.role" placeholder="请输入特征">
				        		<el-option label="警员" value="0"></el-option>
						      	<el-option label="检验机构业务员" value="1"></el-option>
						      	<el-option label="非警员" value="2"></el-option>
						    </el-select>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="用户有效期止:">
				        	<el-date-picker v-model="editForm.birth" type="date" placeholder="请输入用户有效期止">
							</el-date-picker>
				        </el-form-item>
				    </el-col>
				    <el-col :span="16">
				        <el-form-item label="允许登录ip:"  class="first-item min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入允许登录ip"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="允许登录出错次数:">
				          <el-input v-model="editForm.name" placeholder="请输入允许登录出错次数"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="验证方式:"  class="second-item min-ht">
				        	<el-radio-group v-model="editForm.state">
							    <el-radio :label="0">ip</el-radio>
							    <el-radio :label="1">mac</el-radio>
							    <el-radio :label="2">ip+mac</el-radio>
							    <el-radio :label="3">不验证</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="用户状态:"  class="second-item min-ht">
				          	<el-radio-group v-model="editForm.state">
							    <el-radio :label="0">正常</el-radio>
							    <el-radio :label="1">账号超期</el-radio>
							    <el-radio :label="2">密码超期</el-radio>
							    <el-radio :label="3">超期登录次数被冻结</el-radio>
							    <el-radio :label="4">激活未修改密码</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col> -->

				   <!--  <el-col :span="16">
				        <el-form-item label="可登录时间段:" class="first-item">
				        	<el-time-select placeholder="起始时间" v-model="editForm.startTime"
								:picker-options="{ start: '08:30', step: '00:15', end: '18:30'
							}">
  							</el-time-select> ——
  							<el-time-select placeholder="结束时间" v-model="editForm.endTime"
							    :picker-options="{ start: '08:30', step: '00:15', end: '18:30',
							      minTime: startTime
							    }">
  							</el-time-select>
				          
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="用户密码:" class="min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入用户密码"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="16">
				        <el-form-item label="密码有效期:" class="first-item min-ht">
				          <el-date-picker v-model="editForm.birth" type="date" placeholder="请输入密码有效期">
							</el-date-picker>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="联系方式:" class="min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入联系方式"></el-input>
				        </el-form-item>
				    </el-col> -->
		      	</el-form>
		    </el-row>
		</div>
		<div slot="footer">
			<el-button type="warning" @click="back">取消</el-button>
			<el-button type="primary" style="margin-right:20px;" @click.native="editSubmit" :loading="editLoading">保存</el-button>
		</div> 
	</div>
</template>

<script>
 	import util from '../../common/js/util'
	import { editUser } from '../../api/api'

	export default{
		data(){
			return{
				editForm:{
					name:'',
				},
				editLoading: false,
				editFormRules: {
					
				},
				startTime:'', //可登录时间段开始时间
				endTime:'',   //可登录时间段结束时间

			}
		},
		methods:{
			//保存
			editSubmit: function () {
				this.editForm = {
					name: this.editForm.name,//用户姓名
				};
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							let para = Object.assign({}, this.editForm);
							editUser(para).then((res) => {
								this.editLoading = false;
								this.$message({
									message: '提交成功',
									type: 'success'
								});
							});
							//数据没有保存到页面
							window.history.go(-1)
							var box = document.getElementsByClassName("router-link-active");
							box[0].classList.add("aa")
						});
					}

				});

			},

			//取消
			back: function(){
				window.history.go(-1)
				var box = document.getElementsByClassName("router-link-active");
				box[0].classList.add("aa")
			},

		},
		mounted(){
			var editMsg = sessionStorage.getItem('editMsg')
	    	this.editForm = JSON.parse(editMsg)
	    	console.log(this.editForm,'111111111')

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