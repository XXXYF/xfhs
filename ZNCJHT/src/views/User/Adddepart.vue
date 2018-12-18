<template>
	<div class="msg-box">
		<p class="name">部门新增</p>
		<div class="line-box user-box">
			<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="addForm" label-width="30%" class="fil-box">
			        <el-col :span="8">
				        <el-form-item label="部门编号:" class="fil-lab min-ht">
				          <el-input v-model="addForm.no" placeholder="请输入部门编号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门名称:" class="fil-lab min-ht">
				          <el-input v-model="addForm.no" placeholder="请输入部门名称"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门类型:"  class="fil-lab min-ht">
				        	<el-select v-model="addForm.role" placeholder="请输入部门类型">
				        		<el-option label="警员" value="0"></el-option>
						      	<el-option label="检验机构业务员" value="1"></el-option>
						      	<el-option label="非警员" value="2"></el-option>
						    </el-select>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="管理部门编号:">
				          <el-input v-model="addForm.name" placeholder="请输入管理部门编号"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="管理部门名称:">
				          <el-input v-model="addForm.name" placeholder="请输入管理部门名称"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="部门联系人:"  class="fil-lab min-ht">
				          <el-input v-model="addForm.name" placeholder="请输入部门联系人"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门联系人电话:">
				          <el-input v-model="addForm.name" placeholder="请输入部门联系人电话"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门联系人身份证号:">
				          <el-input v-model="addForm.name" placeholder="请输入部门联系人身份证号"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="部门联系人电子邮箱:">
				          <el-input v-model="addForm.name" placeholder="请输入部门联系人电子邮箱"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门业务系统序列号:">
				          <el-input v-model="addForm.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门职能终端系统序列号:">
				          <el-input v-model="addForm.name" placeholder="请输入部门职能终端系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门视频系统序列号:">
				          <el-input v-model="addForm.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门图片地址:">
				          <el-input v-model="addForm.name" placeholder="请输入部门联系人电子邮箱"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门视频地址:">
				          <el-input v-model="addForm.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="应用场景编号:">
				          <el-input v-model="addForm.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="允许登录ip:" class="fil-lab min-ht">
				          <el-input v-model="addForm.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="禁用操作人:"  class="fil-lab min-ht">
				          <el-input v-model="addForm.name" placeholder="请输入禁用操作人"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="登录允许出错次数:">
				          <el-input v-model="addForm.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="禁用截止时间:">
				          <el-input v-model="addForm.name" placeholder="请输入禁用截止时间"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="是否可用:" class="fil-lab min-ht">
				        	<el-radio-group v-model="addForm.state">
							    <el-radio :label="0">可用</el-radio>
							    <el-radio :label="1">禁用</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
		      	</el-form>
		    </el-row>
		</div>
		<div slot="footer">
			<el-button type="warning" @click="back">取消</el-button>
			<el-button type="primary" style="margin-right:20px;" @click.native="addSubmit" :loading="addLoading">保存</el-button>
		</div> 
	</div>
</template>

<script>
	import util from '../../common/js/util'
	import { addUser } from '../../api/api';

	export default{
		data(){
			return{
				// editForm:{},
				addForm:{
					username:'',//用户账号
					name:'',//用户姓名
					//身份证号码
					no:'',//警员/员工编号
					role:'',//用户角色
					department:'',//用户部门
					type:'',//特征
					birth:'',//有效期止
					ip:'',//允许登录ip
					num:'',//允许出错次数
					//验证方式
					state:'',//用户状态
					//可登录时间段
					//用户密码
					//密码有效期
					//联系人

				},
				addLoading: false,
				addFormRules: {	
				},
				startTime:'', //可登录时间段开始时间
				endTime:'',   //可登录时间段结束时间

			}
		},
		methods:{
			//
			// formatRole(row){
			// 	return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			// },
			//保存
			addSubmit(){
				this.addForm = {
					username:'',//用户账号
					name:'',//用户姓名
					//身份证号码
					no:'',//警员/员工编号
					role:'',//用户角色
					department:'',//用户部门
					type:'',//特征
					birth:'',//有效期止
					ip:'',//允许登录ip
					num:'',//允许出错次数
					//验证方式
					state:'',//用户状态
					//可登录时间段
					//用户密码
					//密码有效期
					//联系人
				}
				console.log(this.addForm,'3333333')
				let para = Object.assign({}, this.addForm);
				console.log(para,'444444')
				console.log('1231231312');
			},

			//取消
			back: function(){
				window.history.go(-1)
				var box = document.getElementsByClassName("router-link-active");
				box[0].classList.add("aa")
			},

		},
		mounted(){
			// var editMsg = sessionStorage.getItem('editMsg')
	    	// this.filters = JSON.parse(editMsg)
	    	// console.log(this.filters,'111111111')

		}
	}
</script>

<style>
	.line-box{
		border:1px solid #dfe4ed;
	}
	.line-box .toolbar{
		background-color: #fff;
		margin-left:0!important;
		margin-right:0!important;
	}
</style>