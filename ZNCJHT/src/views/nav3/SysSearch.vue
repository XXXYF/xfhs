<template>
	<section class="sec-box">
		<!--筛选工具条-->
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters" label-width="100px">
				<el-form-item label="用户账号:">
					<el-input v-model="filters.name" placeholder="请输入用户账号"></el-input>
				</el-form-item>
				<el-form-item label="登录ip:">
					<el-input v-model="filters.name" placeholder="请输入登录ip"></el-input>
				</el-form-item>
				<el-form-item label="检测结果:">
					<el-select v-model="filters.char" placeholder="全部">
						<el-option label="成功" value="1"></el-option>
						<el-option label="失败" value="0"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="登录开始时间:">
					<el-date-picker v-model="value1" type="datetime"
				      placeholder="选择日期时间">
				    </el-date-picker>
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
		<!--列表-->
		<div class="list-box">
			<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
				<el-table-column prop="useid" label="用户名称">
				</el-table-column>
				<el-table-column prop="useid" label="用户账号" >
				</el-table-column>
				<el-table-column prop="useid" label="Ip地址" >
				</el-table-column>
				<el-table-column prop="useid" label="MAC地址" width="200">
				</el-table-column>
				<el-table-column prop="useid" label="操作结果" >
				</el-table-column>
				<el-table-column prop="useid" label="登录时间" >
				</el-table-column>
				<el-table-column label="操作" fixed="right" width="70">
					<template slot-scope="scope">
						<!-- <router-link :to="{ path :'/SysDet', query : {userId:scope.row}}"><el-button type="primary" size="small">查看</el-button></router-link> -->
						<el-button type="primary" size="small" @click="btnDetail(scope.$index, scope.row)">详情</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>

		<!--分页工具条-->
		<el-col :span="24" class="toolbar count">
			<span class="count-num">显示10条,共{{total}}条</span>
			<el-pagination layout="prev, pager, next,jumper" @current-change="handleCurrentChange"  @size-change="handleSizeChange" 
			 :page-size="10" :total="total" prev-text='上一页' next-text='下一页'>
			</el-pagination>
		</el-col>

	</section>
</template>

<script>
	import util from '../../common/js/util'
	import { getUserListPage} from '../../api/api';
	export default {
		data() {
			return {
				filters: {
					name: '',
					char:'',
					//id: '',
				},
				users: [],
				total: 0,
				page: 1,
				listLoading: false,
				sels: [],//列表选中列
				value1:'',

				//editFormVisible: false,//编辑界面是否显示
				//editLoading: false,
				/*editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					],
				},*/
				//编辑界面数据
				/*editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},*/
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

			//详情跳转
			btnDetail: function(index, row){
				let para = Object.assign({}, row)  //获取当前一行的数据
				console.log(para,'99999999999999') 
				sessionStorage.setItem('trmsg',JSON.stringify(para))
				this.$router.push('/SysDet')
			},
			
			//重置
			resetForm(formName) {
				var form =document.getElementById("filters")
				form.reset()
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