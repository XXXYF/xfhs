<template>
	<div class="msg-box">
		<p class="name">修改权限</p>
		<div class="line-box user-box">
			<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="30%" class="fil-box">
			        <el-col :span="16">
				        <el-form-item label="权限名称:" class="first-item min-ht">
				          <el-input v-model="filters.no" placeholder="请输入用户账号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="请求路径:" class="min-ht">
				          <el-input v-model="filters.name" placeholder="请输入用户姓名"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="16">
				        <el-form-item label="权限标识:" class="first-item min-ht">
				          <el-input v-model="filters.name" placeholder="请输入身份证号码"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="所属模块:" class="min-ht">
				        	<el-select v-model="filters.role" placeholder="请输入用户角色">
				        		<el-option label="警员" value="0"></el-option>
						      	<el-option label="检验机构业务员" value="1"></el-option>
						      	<el-option label="非警员" value="2"></el-option>
						    </el-select>
				        </el-form-item>
				    </el-col>
			        <el-col :span="16">
				        <el-form-item label="权限类别:"  class="first-item min-ht">
				        	<el-select v-model="filters.role" placeholder="请输入特征">
				        		<el-option label="警员" value="0"></el-option>
						      	<el-option label="检验机构业务员" value="1"></el-option>
						      	<el-option label="非警员" value="2"></el-option>
						    </el-select>
				        </el-form-item>
				    </el-col>
				    
				    <el-col :span="8">
				        <el-form-item label="特征:"  class="min-ht">
				        	<el-radio-group v-model="filters.state">
							    <el-radio :label="0">启动</el-radio>
							    <el-radio :label="1">禁用</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="权限状态:"  class="second-item  min-ht">
				          <!-- <el-input v-model="filters.state" placeholder="请输入用户状态"></el-input> -->
				          	<el-radio-group v-model="filters.state">
							    <el-radio :label="0">启动</el-radio>
							    <el-radio :label="1">禁用</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
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
	export default{
		data(){
			return{
				// editForm:{},
				filters:{},
				editLoading: false,
				editFormRules: {
					
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
			editSubmit(){
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
			var editMsg = sessionStorage.getItem('editMsg')
	    	this.filters = JSON.parse(editMsg)
	    	console.log(this.filters,'111111111')

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