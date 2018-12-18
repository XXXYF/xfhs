<template>
	<div class="msg-box">
		<p class="name">修改用户角色</p>
		<div class="line-box">
			<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="200px" class="fil-box">
			        <el-col :span="24">
				        <el-form-item label="角色名称:">
				          <el-input v-model="filters.no" placeholder="请输入用户账号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="角色描述:">
				          <el-input v-model="filters.name" placeholder="请输入用户姓名"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="状态:">
				        	<el-radio-group v-model="filters.state">
							    <el-radio :label="0">有效</el-radio>
							    <el-radio :label="1">无效</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="权限名称:">
				          <el-input v-model="filters.name" placeholder="请输入联系方式"></el-input>
				        </el-form-item>
				    </el-col>
		      	</el-form>
		    </el-row>
		</div>
		<div slot="footer">
			<el-button type="warning" @click.native="editFormVisible = false">取消</el-button>
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
			}
		},
		methods:{
			//
			// formatRole(row){
			// 	return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			// },
			//保存
			editSubmit(){
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            let para = {
                                "name":this.editForm.name,
                                "description": this.editForm.description,//用户姓名
                                "type": this.editForm.type, //手机号码
                            }
                            var json =JSON.stringify(para);
                            let paradata = {
                                apiId: "adminUserupdata",
                                jsonData: json
                            };
                            var qs = require('querystring')
                            axios.post('api/AdminCommon', qs.stringify(paradata),{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                    // "Content-Type":"application/json; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                this.editLoading = false;
                                this.$message({
                                    message:'修改成功',
                                    type:'success'
                                });
                                this.$router.push('/userrole')
                            }).catch((response) =>{
                                this.editLoading = false;
                                this.$message({
                                    message:'修改失败',
                                    type:'success'
                                });
                            });
                        });
                    }
                });
			},

			//取消

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