<template>
	<div class="msg-box">
		<!-- p class="name">系统参数</p> -->
		<div class="line-box user-box">
			<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="editForm" label-width="30%" class="fil-box" :rules="editFormRules" ref="editForm">
				    <el-col :span="24">
				        <el-form-item label="图片保存路径:" class="first-item min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入用户姓名"></el-input>
				          <i class="tip">服务器图片保存地址 ,参考示例:d://aqcp</i>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="监管平台请求路径:" class="first-item min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入身份证号码"></el-input>
				          <i class="tip">监管平台请求路径,参考示例:http://192.168.1.102:8080/zjxm_mn/services/AcWebServices</i>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="使用单位:" class="first-item min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入身份证号码"></el-input>
				          <i class="tip">系统服务单位,打印各种证件时使用</i>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="文件访问地址:" class="first-item min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入身份证号码"></el-input>
				          <i class="tip">访问图片,ip和端口 格式"http://"+ip+":"+port 参考示例:http://192.168.1.102:8080</i>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="检验机构系列号:" class="first-item min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入身份证号码"></el-input>
				          <i class="tip">检验机构序列号,调用监管平台接口时需要用到</i>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="检验机构编号:" class="first-item min-ht">
				          <el-input v-model="editForm.name" placeholder="请输入身份证号码"></el-input>
				          <i class="tip">检验机构编号,调用监管平台接口时需要用到</i>
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
		/*border-top:2px solid #1080d6;*/
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