<template>
	<section class="sec-box">
		<!--筛选工具条-->
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters" label-width="100px">
				<el-form-item label="检测机构名称:">
					<el-input v-model="filters.name" placeholder="接口ID"></el-input>
				</el-form-item>
				<el-form-item label="接口ID:">
					<el-input v-model="filters.name" placeholder="流水号"></el-input>
				</el-form-item>
				<el-form-item label="检测流水号:">
					<el-input v-model="filters.name" placeholder="流水号"></el-input>
				</el-form-item>
				<el-form-item label="调用时间:">
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
				<el-table-column prop="useid" label="接口ID">
				</el-table-column>
				<el-table-column prop="name" label="检测机构名称">
				</el-table-column>
				<el-table-column prop="roleid" label="检测流水号" width="110">
				</el-table-column>
				<el-table-column prop="department" label="号牌种类" width="150">
				</el-table-column>
				<el-table-column prop="role" label="号牌号码" :formatter="formatRole" width="150" text-align="center">
				</el-table-column>
				<el-table-column prop="role" label="调用时间" :formatter="formatRole" width="150" text-align="center">
				</el-table-column>
				<el-table-column prop="state" label="调用结果" :formatter="formatState" width="100" text-align="center">
				</el-table-column>
				<el-table-column label="操作" fixed="right" width="70">
					<template slot-scope="scope">
						<!-- <router-link :to="{ path :'/PortDet', query : {userId:scope.row}}"><el-button type="primary" size="small">查看</el-button></router-link> -->
						<el-button type="primary" size="small" @click="btnDetail(scope.$index,scope.row)">详情</el-button>
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
	//import NProgress from 'nprogress'
	import { getUserListPage } from '../../api/api';
	export default {
		data() {
			return {
				filters: {
					name: '',
					char:'',
					id: '',
				},
				value1:'',
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
			//详情
			btnDetail: function(index, row){
				let para = Object.assign({}, row)
				sessionStorage.setItem('trmsg',JSON.stringify(para))
				this.$router.push('/PortLinkDt')
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