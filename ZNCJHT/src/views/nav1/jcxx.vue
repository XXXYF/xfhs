<template>
	<section class="sec-box">
		<!--筛选工具条-->
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters" label-width="96px">
				<el-form-item label="检验流水号:">
					<el-input v-model="filters.name" placeholder="检验流水号"></el-input>
				</el-form-item>
				<el-form-item label="车牌号码:">
					<el-input v-model="filters.no" placeholder="请输入车牌号码" style="width:190px;" ></el-input>
				</el-form-item>
				<el-form-item label="号牌种类:">
					<el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
						<!-- <el-option v-for="item in items" :label="{{item.label}}" :value="{{item.value}}"></el-option> -->
						<el-option label="安检1" value="1"></el-option>
						<el-option label="综检2" value="2"></el-option>
						<el-option label="环检3" value="3"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item style="float:right;">
					<el-button type="primary" v-on:click="getUsers"><i class="fa fa-search"></i>&nbsp;查询</el-button>
				</el-form-item>
				<el-form-item label="检测类型:">
					<el-select v-model="filters.type" placeholder="全部">
						<el-option label="安检" value="0"></el-option>
						<el-option label="综检" value="1"></el-option>
						<el-option label="环检" value="2"></el-option>
					</el-select>
				</el-form-item>
				
				<el-form-item label="检测时间:">
				    <el-date-picker v-model="value1" type="date" placeholder="开始日期">
				    </el-date-picker> -
				    <el-date-picker v-model="value2" type="date" placeholder="结束日期">
				    </el-date-picker>
				</el-form-item>
				<el-form-item style="float:right;">
					<el-button type="warning" @click="resetForm"><i class="fa fa-undo"></i>&nbsp;重置</el-button>
				</el-form-item>
				
			</el-form>
		</el-col>
		<i class="f-hr20"></i>
		<!--列表-->
		<div class="list-box">
			<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
				<el-table-column prop="name" label="检测流水号">
				</el-table-column>
				<el-table-column prop="role" label="号牌号码" :formatter="formatRole" width="150" text-align="center">
				</el-table-column>
				<el-table-column prop="name" label="号牌种类">
				</el-table-column>
				<el-table-column prop="type" label="检验类型" :formatter="formatType">
				</el-table-column>
				<el-table-column prop="roleid" label="检测日期">
				</el-table-column>
				<el-table-column prop="state" label="检验结果" :formatter="formatState"  text-align="center">
				</el-table-column>
				<el-table-column label="操作" width="100" fixed="right">
					<template slot-scope="scope">
						<el-button type="primary" size="small" @click="detailbtn(scope.$index, scope.row)">详情</el-button>
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
				return row.type == 0 ? '环检' : row.type == 1 ? '安检':'综检'
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
					// age : this.filters.age,
				};
				this.listLoading = true;
				getUserListPage(para).then((res) => {
					// console.log(para,'1111111111111');
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
					//this.users =this.filters.age;

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
				console.log(para,'99999999999999') 
				sessionStorage.setItem('trmsg',JSON.stringify(para)) //存储tr一行的数据
				console.log(row.type,'22222222222222')  //获取检测类型，跳转到不同的详情页
				if(row.type == '0'){
					//window.open('#/Jcxq','_blank')  //跳转新开窗口
					window.open('#/Hjxq','_blank')  //环检跳转新开窗口
				}else if(row.type == '1') {
					//window.open('#/Zjxq','_blank')  //综检跳转新开窗口
					//window.open('#/Jcxq','_blank')
					window.open('#/Hjxq','_blank')
				}else{
					window.open('#/Jcxq','_blank')  //跳转新开窗口
					//window.open('#/Hjxq','_blank')  //环检跳转新开窗口
				}
				
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