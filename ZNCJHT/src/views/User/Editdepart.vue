<template>
	<div class="msg-box">
		<p class="name">部门信息修改</p>
		<div class="line-box user-box">
			<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="96px" class="fil-box">
			        <el-col :span="8">
				        <el-form-item label="部门编号:" class="fil-lab min-ht">
				          <el-input v-model="filters.no" placeholder="请输入部门编号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门名称:" class="fil-lab min-ht">
				          <el-input v-model="filters.no" placeholder="请输入部门名称"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门类型:"  class="fil-lab min-ht">
				        	<el-select v-model="filters.role" placeholder="请输入部门类型">
				        		<el-option label="警员" value="0"></el-option>
						      	<el-option label="检验机构业务员" value="1"></el-option>
						      	<el-option label="非警员" value="2"></el-option>
						    </el-select>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="管理部门编号:">
				          <el-input v-model="filters.name" placeholder="请输入管理部门编号"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="管理部门名称:">
				          <el-input v-model="filters.name" placeholder="请输入管理部门名称"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="部门联系人:"  class="fil-lab min-ht">
				          <el-input v-model="filters.name" placeholder="请输入部门联系人"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门联系人电话:">
				          <el-input v-model="filters.name" placeholder="请输入部门联系人电话"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门联系人身份证号:">
				          <el-input v-model="filters.name" placeholder="请输入部门联系人身份证号"></el-input>
				        </el-form-item>
				    </el-col>
			        <el-col :span="8">
				        <el-form-item label="部门联系人电子邮箱:">
				          <el-input v-model="filters.name" placeholder="请输入部门联系人电子邮箱"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门业务系统序列号:">
				          <el-input v-model="filters.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门职能终端系统序列号:">
				          <el-input v-model="filters.name" placeholder="请输入部门职能终端系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门视频系统序列号:">
				          <el-input v-model="filters.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门图片地址:">
				          <el-input v-model="filters.name" placeholder="请输入部门联系人电子邮箱"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="部门视频地址:">
				          <el-input v-model="filters.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="应用场景编号:">
				          <el-input v-model="filters.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="允许登录ip:" class="fil-lab min-ht">
				          <el-input v-model="filters.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="禁用操作人:"  class="fil-lab min-ht">
				          <el-input v-model="filters.name" placeholder="请输入禁用操作人"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="登录允许出错次数:">
				          <el-input v-model="filters.name" placeholder="请输入部门业务系统序列号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="禁用截止时间:">
				          <el-input v-model="filters.name" placeholder="请输入禁用截止时间"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="8">
				        <el-form-item label="是否可用:" class="fil-lab min-ht">
				        	<el-radio-group v-model="filters.state">
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
	.line-box{
		border:1px solid #dfe4ed;
	}
	.line-box .toolbar{
		background-color: #fff;
		margin-left:0!important;
		margin-right:0!important;
	}
	.fil-box .el-form-item__label{
		line-height: 20px;
	}
	.fil-lab .el-form-item__label{
		line-height: 40px;
	}
</style>