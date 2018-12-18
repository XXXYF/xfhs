<template>
	<section class="sec-box">
		<!--筛选工具条-->
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters" >
				<el-form-item label="部门名称:">
					<el-input v-model="filters.name" placeholder="请输入部门名称"></el-input>
				</el-form-item>
				<el-form-item label="管理部门名称:">
					<el-select v-model="filters.char" placeholder="全部">
						<el-option label="警员" value="shanghai"></el-option>
						<el-option label="非警员" value="beijing"></el-option>
						<el-option label="机构业务人员" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="部门联系人:">
					<el-input v-model="filters.id" placeholder="请输入部门联系人"></el-input>
				</el-form-item>
				<el-form-item style="float:right;">
					<el-button type="warning" @click="resetForm"><i class="fa fa-undo"></i>&nbsp;重置</el-button>
				</el-form-item>
				<el-form-item style="float:right;">
					<el-button type="primary" v-on:click="getUsers"><i class="fa fa-search"></i>&nbsp;查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		<i class="f-hr20"></i>
		
		<el-col :span="24" class="btn-box">
			<p><el-button type="primary" @click="handleAdd">新增部门</el-button></p>
			
		</el-col>

		<!--列表-->
		<div class="list-box">
			<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
				<el-table-column prop="useid" label="部门编号" >
				</el-table-column>
				<el-table-column prop="name" label="部门名称">
				</el-table-column>
				<el-table-column prop="department" label="部门联系人" >
				</el-table-column>
				<el-table-column prop="roleid" label="管理部门编号">
				</el-table-column>
				<el-table-column prop="state" label="部门状态" :formatter="formatState"  text-align="center">
				</el-table-column>
				<el-table-column label="操作" width="120" fixed="right">
					<template slot-scope="scope">
						<el-button type="danger" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button type="warning" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
						<!-- <el-button type="primary" size="small" @click="btnDetail(scope.$index, scope.row)">查看</el-button> -->
					</template>
				</el-table-column>
			</el-table>
		</div>
		

		<!--分页工具条-->
		<el-col :span="24" class="toolbar count">
			<span class="count-num">显示1到10条,共{{total}}条</span>
			<el-pagination layout="prev, pager, next ,jumper" @current-change="handleCurrentChange"  @size-change="handleSizeChange" 
			 :page-size="10" :total="total" prev-text='上一页' next-text='下一页'>
			</el-pagination>
		</el-col>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	import { getUserListPage, removeUser , editUser} from '../../api/api';

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
				getUserListPage(para).then((res) => {
					console.log(res);
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
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
			handleAdd:function(index,row){
				this.$router.push('/adddepart')
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				// this.editFormVisible = true;
				let editForm = Object.assign({}, row);
				sessionStorage.setItem('editMsg',JSON.stringify(editForm))
				this.$router.push('/editdepart')
			},
			
			//重置
			resetForm(formName) {
				var form =document.getElementById("filters")
				form.reset()
		    },
			// //编辑
			// editSubmit: function () {
			// 	this.$refs.editForm.validate((valid) => {
			// 		if (valid) {
			// 			this.$confirm('确认提交吗？', '提示', {}).then(() => {
			// 				this.editLoading = true;
			// 				//NProgress.start();
			// 				let para = Object.assign({}, this.editForm);
			// 				para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
			// 				editUser(para).then((res) => {
			// 					this.editLoading = false;
			// 					//NProgress.done();
			// 					this.$message({
			// 						message: '提交成功',
			// 						type: 'success'
			// 					});
			// 					this.$refs['editForm'].resetFields();
			// 					this.editFormVisible = false;
			// 					this.getUsers();
			// 				});
			// 			});
			// 		}
			// 	});
			// },
			
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