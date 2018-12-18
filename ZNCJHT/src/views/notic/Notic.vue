<template>
	<div class="message">
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters">
				<el-form-item label="调用时间:">
					<el-input v-model="filters.name" placeholder="请输入用户账号"></el-input>
				</el-form-item>
				<el-form-item label="调用时间:">
					<el-date-picker v-model="value1" type="datetime"
				      placeholder="选择日期时间">
				    </el-date-picker>
				</el-form-item>
				<el-form-item label="检测类型:">
					<el-select v-model="filters.role" placeholder="全部">
						<el-option label="警员" value="0"></el-option>
						<el-option label="检验机构业务员" value="1"></el-option>
						<el-option label="非警员" value="2"></el-option>
					</el-select>
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

		<div class="list-box">
			<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
				<el-table-column prop="useid" label="用户账号" >
				</el-table-column>
				<el-table-column prop="name" label="姓名">
				</el-table-column>
				<el-table-column prop="department" label="用户部门" >
				</el-table-column>
				<el-table-column prop="role" label="警/员工编号" :formatter="formatRole">
				</el-table-column>
				<el-table-column label="操作" width="220" fixed="right">
					<template slot-scope="scope">
						<el-button type="primary" size="small" @click="btnDetail(scope.$index, scope.row)">查看</el-button>
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

	</div>	
</template>
<script>
	import util from '../../common/js/util'
	import { getUserListPage, removeUser,editUser} from '../../api/api';

	export default {
		data(){
			return{
				filters: {
					name: '',
					role:'',
					//id: '',
				},
				total:0,
				users: [],
				page: 1,
				listLoading: false,
				value1:'',
			}
		},
		methods: {
			//用户角色显示转换
			formatRole :function(row, column) {
				return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			},
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					//name: this.filters.name,
					role: this.filters.role,
				};
				console.log(para,'333')
				this.listLoading = true;
				getUserListPage(para).then((res) => {
					console.log(para,'444');
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
					console.log(this.users ,'454545454');
				});
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
			selsChange: function (sels) {
				this.sels = sels;
			},
			//重置
			resetForm(formName) {
				var form =document.getElementById("filters")
				form.reset()
		    },
			//跳转详情
			btnDetail: function(index, row){
				let para = Object.assign({}, row)  //获取当前一行的数据
				console.log(para,'99999999999999') 
				sessionStorage.setItem('trmsg',JSON.stringify(para))
				this.$router.push('/NoticDt')
			},
		},

		mounted(){
			this.getUsers();

		}
	}
</script>
<style scoped>
	ul,li{
		list-style: none;
	}
	.list-box{
		padding: 20px;
	}
	.message-box{
		display: block;
		background :#fff;
		padding: 10px;
		font-weight: normal;
	}
</style>