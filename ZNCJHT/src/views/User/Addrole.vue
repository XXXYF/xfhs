<template>
	<div class="msg-box">
		<p class="name">用户修改</p>
		<div class="line-box">
			<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="addForm" ref="addForm" :rules="addFormRules" label-width="200px" class="fil-box" id="addForm">
			        <el-col :span="24">
				        <el-form-item label="角色名称:" prop="name">
				          <el-input v-model="addForm.name" placeholder="请输入用户账号"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="角色描述:" prop="description">
				          <el-input v-model="addForm.description" placeholder="请输入用户姓名"></el-input>
				        </el-form-item>
				    </el-col>
				    <el-col :span="24">
				        <el-form-item label="角色类型:" prop="type">
				        	<el-radio-group v-model="addForm.type">
							    <el-radio :label="0">有效</el-radio>
							    <el-radio :label="1">无效</el-radio>
							</el-radio-group>
				        </el-form-item>
				    </el-col>
				    <!--<el-col :span="24">-->
				        <!--<el-form-item label="权限名称:">-->
				          <!--<el-input v-model="addForm.name" placeholder="请输入联系方式"></el-input>-->
				        <!--</el-form-item>-->
				    <!--</el-col>-->
		      	</el-form>
		    </el-row>
		</div>
		<div slot="footer">
			<el-button type="warning" @click.native="addFormVisible = false">取消</el-button>
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
					name:'',//角色名称
					//角色描述
                    description:'',//状态
                    type:'',//权限名称

				},
                addFormRules: {
                    name: [
                        { required: true, message: '请输入角色名称', trigger: 'blur' },
                    ],
                    description: [
                        { required: true, message: '请输入角色描述', trigger: 'blur' },
                    ],
                    type: [
                        { required: true, message: '请输入角色类型', trigger: 'blur' },
                    ],
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
                    name: this.addForm.name,//用户姓名
                    description: this.addForm.description,//用户姓名
                    type: this.addForm.type,//用户姓名
                }
                console.log(this.addForm,'0000')
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.addLoading = true;
                            let para = Object.assign({}, this.addForm);
                            addUser(para).then((res) => {
                                this.addLoading = false;
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                            });
                            var form =document.getElementById("addForm")
                            form.reset()
                            window.history.go(-1)
                            var box = document.getElementsByClassName("router-link-active");
                            box[0].classList.add("aa")
                        });
                    }
                });

			},

			//取消

		},
		mounted(){
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