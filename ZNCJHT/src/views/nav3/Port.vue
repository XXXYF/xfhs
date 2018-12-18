<template>
	<section class="sec-box">
		<!--筛选工具条-->
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters"label-width="100px">
				<el-form-item label="调用时间:" >
					<el-col :span="11">
						<el-form-item prop="startTime">
							<el-date-picker
									v-model="filters.startTime"
									type="date"
									placeholder="开始日期"
									:picker-options="pickerOptions0">
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col class="line" :span="2"  style="text-align: center">-</el-col>
					<el-col :span="11">
						<el-form-item prop="endTime">
							<el-date-picker
									v-model="filters.endTime"
									type="date"
									placeholder="结束日期"
									:picker-options="pickerOptions1">
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-form-item>
				<el-form-item label="操作结果:">
					<el-input v-model="filters.result" placeholder="操作结果"></el-input>
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
				<el-table-column prop="ip" label="IP地址">
				</el-table-column>
				<el-table-column prop="linkAddress" label="请求路径" >
				</el-table-column>
				<el-table-column prop="userType" label="类型" :formatter="formattype">
				</el-table-column>
				<el-table-column prop="parameter" label="传入参数">
				</el-table-column>
				<el-table-column prop="result" label="操作结果" >
				</el-table-column>
				<el-table-column prop="time" label="调用时间" :formatter="formatRole">
				</el-table-column>
				<el-table-column label="操作" fixed="right" width="70">
					<template slot-scope="scope">
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
	import { getUserListPage, removeUser,editUser } from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'

	export default {
		data() {
			return {
                pickerOptions0: {
                    disabledDate: (time) => {
                        if (this.filters.endTime != "") {
                            return time.getTime() > Date.now() || time.getTime() > this.filters.endTime;
                        } else {
                            return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.filters.startTime || time.getTime() > Date.now();
                    }
                },
				filters: {
                    startTime:'',
                    endTime:'',
                    result:'',
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
                return moment(row.createTime).format('YYYY-MM-DD hh:mm:ss')
			},
			//用户状态显示转换
            formattype :function(row, column) {
				return row.userType == 1 ? '手机' : row.userType == 0 ?'检测站':'管理员'
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
                if(this.filters.startTime == null){
                    this.filters.startTime = ""
                }
                if(this.filters.endTime == null){
                    this.filters.endTime = ""
                }
                if(this.filters.startTime !== ""){
                    this.filters.startTime = moment(this.filters.startTime).format('YYYY-MM-DD hh:mm:ss')
                }
                if(this.filters.endTime !== ""){
                    this.filters.endTime = moment(this.filters.endTime).format('YYYY-MM-DD hh:mm:ss')
                }
                let mn = {
                    "startTime": this.filters.startTime,
                    "endTime": this.filters.endTime,
                    "result": this.filters.result,
                    "pageRequest":{"currentPage":this.page,"pageSize":this.pagesize}

                }
                var json =JSON.stringify(mn);
                let para = {
                    apiId: "logoperationselect",
                    jsonData: json
                };

                this.listLoading = true;
                axios.post('/log/commonAccess', qs.stringify(para),{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                        // "Content-Type":"application/json; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    this.listLoading = false;
                    this.users = response.data.data.listData;
                    this.total = response.data.data.totalElements;
                    console.log(response)
                }).catch((response) =>{
                    this.listLoading = false;


                });
			},


			//删除

			//详情
			btnDetail: function(index, row){
				let para = Object.assign({}, row)
				sessionStorage.setItem('PortDet',JSON.stringify(para))
				this.$router.push('/PortDet')
			},
			//重置
			resetForm(formName) {
                this.filters = Object.assign({});
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