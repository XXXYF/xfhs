<template>
	<section class="sec-box">
		<!--筛选工具条-->
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters" label-width="96px">
				<el-form-item label="检测线名称:">
					<el-input v-model="filters.name" placeholder="请输入检测线名称"></el-input>
				</el-form-item>
				<el-form-item label="检测机构:">
					<el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
						<!-- <el-option v-for="item in items" :label="{{item.label}}" :value="{{item.value}}"></el-option> -->
						<el-option label="安检1" value="1"></el-option>
						<el-option label="综检2" value="2"></el-option>
						<el-option label="环检3" value="3"></el-option>
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
        <!--分页工具条-->
		<el-col :span="24" class="">
			
		</el-col>

		<!--列表-->
		<div class="list-box">
			<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
				<el-table-column prop="name" label="检测机构编号">
				</el-table-column>
				<el-table-column prop="role" label="检测机构名称" :formatter="formatRole" width="150" text-align="center">
				</el-table-column>
				<el-table-column prop="name" label="资格许可证书编号">
				</el-table-column>
				<el-table-column prop="type" label="资格许可证有效期始" :formatter="formatType">
				</el-table-column>
				<el-table-column prop="roleid" label="资格许可证有效期止">
				</el-table-column>
				<el-table-column prop="state" label="检验结果" :formatter="formatState"  text-align="center">
				</el-table-column>
				<el-table-column prop="roleid" label="管理部门">
				</el-table-column>
				<el-table-column prop="roleid" label="状态">
				</el-table-column>
				<el-table-column label="操作" width="100" fixed="right">
					<!-- <template slot-scope="scope">
						<router-link :to="{ path :'/chelineDt', query : {userId:scope.row}}"><el-button type="primary" size="small">详情</el-button></router-link>
					</template> -->
					<template slot-scope="scope">
						<el-button type="primary" size="small" @click="detailbtn(scope.$index, scope.row)">详情</el-button>
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
					name: '',  //检验流水号
					orgname:'',  //检验机构名称
					type:'',  //检验类别  
					no:'',  //号码牌号  
					state:'', //流水状态   
					// id: '',
				},
				value1: '',  //检测起始日期
				value2: '',  //检测截止日期
				users: [],
				total: 0,
				page: 1,
				//pagesize:10,
				listLoading: false,
				sels: [],//列表选中列
				// prev:'上一页',
			}
		},
		methods: {
			//检测类型显示转换
			formatType: function(row, column){
				return row.type == 0 ? '安检' : row.type == 1 ? '综检':'环检'
			},
			//用户角色显示转换
			formatRole :function(row, column) {
				return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			},
			//用户状态显示转换
			formatState :function(row, column) {
				return row.state == 1 ? '正常' : row.state == 0 ?'警告':'其他'
			},
			//分页点击
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
					type: this.filters.type,
					no: this.filters.no,
					state: this.filters.state,
				};
				this.listLoading = true;
				getUserListPage(para).then((res) => {
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
				});	
			},
			// selChange(val){
			// 	var self = this;
			// 	self = val;  //把val传出来，赋值到右边框中
			// 	console.log(self,'2343342')
			// },
			//重置
			resetForm(formName) {
				var form =document.getElementById("filters")
				form.reset()
		    },
			selsChange: function (sels) {
				this.sels = sels;
			},
			//跳转详情
			detailbtn: function (index, row){
				console.log(row,'00000000000')
				let para = Object.assign({}, row)  //获取当前一行的数据
				// console.log(para,'99999999999999') 
				sessionStorage.setItem('trmsg',JSON.stringify(para)) //存储tr一行的数据
				// console.log(row.type,'22222222222222')  //获取检测类型，跳转到不同的详情页
				// window.open('#/chelineDt','_blank')  //跳转新开窗口	
				this.$router.push({path:'/ChelineDt'})		
			}
			
		},
		computed:{

		},
		mounted() {
			this.getUsers();
		}
	}

</script>

<style scoped>

</style>