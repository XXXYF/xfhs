<template>
	<section class="sec-box">
		<!--筛选工具条-->
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters">
				<el-form-item label="设备编号:">
					<el-input v-model="filters.name" placeholder="请输入设备编号"></el-input>
				</el-form-item>
				<el-form-item label="设备名称:">
					<el-input v-model="filters.id" placeholder="请输入设备名称"></el-input>
				</el-form-item>
				<el-form-item label="设备mac:">
					<el-input v-model="filters.id" placeholder="请输入设备名称"></el-input>
				</el-form-item>
				<el-form-item  style="float:right;">
					<el-button type="warning" @click="resetForm"><i class="fa fa-undo"></i>&nbsp;重置</el-button>
				</el-form-item>
				<el-form-item  style="float:right;">
					<el-button type="primary" v-on:click="getUsers"><i class="fa fa-search"></i>&nbsp;查询</el-button>
				</el-form-item>
				
			</el-form>
		</el-col>
		<i class="f-hr20"></i>
		
		<el-col :span="24" class="btn-box">
			<p><el-button type="primary" @click="handleAdd">新增</el-button></p>
			
		</el-col>

		<!--列表-->
		<div class="list-box">
			<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
				<el-table-column prop="useid" label="设备编号" >
				</el-table-column>
				<el-table-column prop="name" label="设备名称">
				</el-table-column>
				<el-table-column prop="department" label="设备mac" >
				</el-table-column>
				<el-table-column label="操作" width="160" fixed="right">
					<template slot-scope="scope">
						<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
						<!-- <el-button type="primary" size="small" @click="btnDetail(scope.$index, scope.row)">查看</el-button> -->
					</template>
				</el-table-column>
			</el-table>
		</div>
		

		<!--分页工具条-->
		<el-col :span="24" class="toolbar count">
			<span class="count-num">显示10条,共{{total}}条</span>
			<el-pagination layout="prev, pager, next ,jumper" @current-change="handleCurrentChange"  @size-change="handleSizeChange" 
			 :page-size="10" :total="total" prev-text='上一页' next-text='下一页'>
			</el-pagination>
		</el-col>
		<el-dialog title="编辑" class="dia-box"  :visible.sync="editFormVisible"  v-model="editFormVisible" :close-on-click-modal="false"  width="40%" center>
			<el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
				<el-form-item label="设备编号:" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="设备名称:" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="设备mac:" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增" class="dia-box" :visible.sync="addFormVisible" v-model="addFormVisible" :close-on-click-modal="false"  width="40%" center>
			<el-form :model="addForm" label-width="100px" :rules="addFormRules" ref="addForm">
				<el-form-item label="设备编号:" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="设备名称:" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="设备mac:" prop="name">
					<el-input v-model="addForm.name" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	import { getUserListPage, removeUser,editUser} from '../../api/api';

	export default {
		data() {
			return {
				filters: {
					name: '',
					char:'',
					id: '',
				},
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},
				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}

			}
		},
		methods: {
			//用户角色显示转换
			formatRole :function(row, column) {
				return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			},
			//用户状态显示转换
			formatState :function(row, column) {
				return row.state == 1 ? '正常' : row.state == 0 ?'警告':'其他'
			},

			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			//每页显示多少条数据
			handleSizeChange(size){
				//this.page = val;
				//this.getUsers();
				this.pagesize = size;

				console.log(`每页 ${size} 条`);
			},
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					name: this.filters.name,
					age : this.filters.age,
				};
				this.listLoading = true;
				//NProgress.start();
				getUserListPage(para).then((res) => {
					console.log(res);
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
					//this.users =this.filters.age;
					console.log(this.filters.age);
					//NProgress.done();
				});
			},
			//删除
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
			//显示新增界面
			handleAdd: function () {
				this.addFormVisible = true;
				this.addForm = {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				};
			},
			//显示编辑界面
			// handleEdit: function (index, row) {
			// 	this.editFormVisible = true;
			// 	let editForm = Object.assign({}, row);
			// 	sessionStorage.setItem('editMsg',JSON.stringify(editForm))
			// 	// this.$router.push('/edituser')
			// },
			handleEdit: function (index, row) {
				console.log('111111111')
				this.editFormVisible = true;
				console.log(this.editFormVisible,'2222222222')
				this.editForm = Object.assign({}, row);
			},
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			//跳转详情
			// btnDetail: function(index, row){
			// 	let para = Object.assign({}, row)  //获取当前一行的数据
			// 	console.log(para,'99999999999999') 
			// 	sessionStorage.setItem('trmsg',JSON.stringify(para))
			// 	this.$router.push('/Detail')
			// },
			//重置
			/*resetForm: function(){
				//this.store.clearSelection();
			},*/
			//重置
			resetForm(formName) {
				var form =document.getElementById("filters")
				form.reset()
		    },

			//跳转
			/*handeleOpen: function(index, row){

				this.$router.push({ name: 'Detail', params: { userId: this.useid }})
			},*/


			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			
			selsChange: function (sels) {
				this.sels = sels;
			},
			
		},
		computed:{

		},
		mounted() {
			this.getUsers();
		}
	}

</script>

<style scoped>
	.sec-box .fil-tool{
		border-left:none;
	}
	.count{
		background-color: #fff;
	}
	.count-num{
		line-height: 32px;
	}
	.el-table .cell{
		text-align: center;
	}
</style>