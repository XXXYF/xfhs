<template>
	<div class="" style="margin-top:-20px">
		<!-- <span>我的位置: 预约订单</span> -->
		<el-row class="panel-group" :gutter="26">
		    <el-col :xs="12" :sm="12" :lg="6" :model="orderData" class="card-panel-col">
			  	<div class='card-panel'>
		        	<div class="card-panel-icon-wrapper icon-1">
		        		<i class="iconfont icon-jintian"></i>
		        	</div>
		        	<div class="card-panel-description">
		        		<span class="card-panel-num">{{orderData.todayAll}}</span>
		         		<div class="card-panel-text">今日接单数</div>
		        	</div>
		      	</div>
		    </el-col>
		    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			    <div class="card-panel bd-2">
			        <div class="card-panel-icon-wrapper icon-2">
			          <i class="iconfont icon-yueche-"></i>
			        </div>
			        <div class="card-panel-description">
		        		<span class="card-panel-num">{{orderData.todayWait}}</span>
		         		<div class="card-panel-text">今日待检数</div>
		        	</div>
			      </div>
		    </el-col>
		    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			    <div class="card-panel bd-3">
			        <div class="card-panel-icon-wrapper icon-3">
			          <i class="iconfont icon-zhou"></i>
			        </div>
			        <div class="card-panel-description">
		        		<span class="card-panel-num">{{orderData.weekAll}}</span>
		         		<div class="card-panel-text">本周接单数</div>
		        	</div>
		      	</div>
		    </el-col>
		    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			    <div class="card-panel bd-3">
			        <div class="card-panel-icon-wrapper icon-4">


			          <i class="iconfont icon-yuyue"></i>
			        </div>
			        <div class="card-panel-description">
		        		<span class="card-panel-num">{{orderData.weekWait}}</span>
		         		<div class="card-panel-text">本周待检数</div>
		        	</div>
		      	</div>
		    </el-col>
		</el-row>
		<section class="sec-box">
			<!--筛选工具条-->
			<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
				<el-form :inline="true" :model="filters" ref="filters" id="filters" label-width="80px">
					<el-form-item label="订单号:">
						<el-input v-model="filters.id" placeholder="请输入订单号"></el-input>
					</el-form-item>
					<el-form-item label="预约时间:" >
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
					<el-form-item label="手机号:">
						<el-input v-model="filters.phone" placeholder="请输入手机号"></el-input>
					</el-form-item>
					<!-- <el-form-item label="检测机构:">
						<el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
					</el-form-item> -->
					<el-form-item style="float:right;">
						<el-button type="warning" @click="resetForm"><i class="fa fa-undo"></i>&nbsp;重置</el-button>
					</el-form-item>
					<el-form-item style="float:right;">
						<el-button type="primary" v-on:click="getUsers"><i class="fa fa-search"></i>&nbsp;查询</el-button>
					</el-form-item>
					<el-form-item style="float:right;">
						<el-button type="primary" v-on:click="getExcel">生成Excel</el-button>
					</el-form-item>

				</el-form>
			</el-col>
			<!--列表-->
			<div class="list-box">
				<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
					<el-table-column prop="id" label="订单号">
					</el-table-column>
					<el-table-column prop="owner" label="客户姓名"  width="150" text-align="center">
					</el-table-column>
					<el-table-column prop="vehicleNo" label="车牌号">
					</el-table-column>
					<el-table-column prop="status" label="检测状态" >
						<template slot-scope="scope">
							<span>{{scope.row.status | fontDate }}</span>
						</template>
					</el-table-column>

					<el-table-column prop="startTime" label="预约开始时间">
						<template slot-scope="scope">
							<span>{{scope.row.startTime | formDate }}</span>
						</template>
					</el-table-column>
					<el-table-column prop="endTime" label="预约结束时间">
						<template slot-scope="scope">
							<span>{{scope.row.endTime | formDate }}</span>
						</template>
					</el-table-column>
					<el-table-column prop="phone" label="手机号">
					</el-table-column>
					<el-table-column label="操作" width="300" fixed="right">
						<!-- <template slot-scope="scope">
							<router-link :to="{ path :'/CarDt', query : {userId:scope.row}}"><el-button type="primary" size="small">详情</el-button></router-link>
						</template> -->
						<template slot-scope="scope">
							<el-button type="primary"  size="small" @click="detailbtn(scope.$index, scope.row)">详情</el-button>
							<el-button type="danger" :disabled="scope.row.status !== 1"   size="small" @click="acceptbtn(scope.$index, scope.row)">接受处理</el-button>
							<el-button type="danger" :disabled="scope.row.status !== 1"   size="small" @click="ordbtn(scope.$index, scope.row)">取消订单</el-button>
							<el-button type="danger" :disabled="scope.row.status !== 2"   size="small" @click="surebtn(scope.$index, scope.row)">完成订单</el-button>
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
	</div>
</template>
<script>
	import util from '../../common/js/util'
	import { getUserListPage, removeUser} from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'

	export default{
		data(){
			return{
                pickerOptions0: {
                    disabledDate: (time) => {
                        // if (this.filters.endTime != "") {
                        //     return time.getTime() > Date.now() || time.getTime() > this.filters.endTime;
                        // } else {
                        //     return time.getTime() > Date.now();
                        // }
                        if (this.filters.endTime != "") {
                            return  time.getTime() > this.filters.endTime;
                        } else {
                            // return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.filters.startTime ;
                    }
                },
                orderData: {
                    todayAll:'', //订单号
                    todayWait:'', //预约时间
                    weekAll:'', //预约时间
                    weekWait:'', //手机号
                },
				data:{},
				filters: {
                    id:'', //订单号
                    startTime:'', //预约时间
                    endTime:'', //预约时间
					phone:'', //手机号
				},
				timeDefaultShow:new Date,

				users: [],
				total: 0,
				page: 1,
				pagesize:10,
				listLoading: false,
				sels: [],//列表选中列
				// prev:'上一页',

			}
		},
		methods: {
			//检测类型显示转换

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
			    console.log(this.filters.endTime);
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
                    "id": this.filters.id,
                    "startTime": this.filters.startTime,
                    "endTime": this.filters.endTime,
                    "phone": this.filters.phone,
                    "pageRequest":{"currentPage":this.page,"pageSize":this.pagesize}
                    // "startTime":"2018-09-01 12:26:15", "endTime":"2018-09-02 14:26:15", "status":"1","bookingType":"1", "companyId":"1","pageRequest":{"currentPage":"1","pageSize":"1"}
                }
                // let mn = {"id":"1","companyId":"1","pageRequest":{"currentPage":"1","pageSize":"1"}}
                var json =JSON.stringify(mn);
				let para = {
                    apiId: "adminOrderselect",
					jsonData:json
				};
				this.listLoading = true;

                axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                        // "Content-Type":"application/json; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    console.log(response)
                    this.listLoading = false;
					this.users = response.data.data.listData;
					// this.users.startTime = moment(response.data.data.listData.startTime).format('YYYY-MM-DD  hh:mm:ss');
					// this.users.endTime = moment(response.data.data.listData.endTime).format('YYYY-MM-DD  hh:mm:ss');
					this.total = response.data.data.totalElements;
                }).catch((response) =>{
                    this.listLoading = false;


                });
			},
            //获取用户列表
            getExcel() {
                console.log(this.filters.endTime);
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
                    // "pageRequest":{"currentPage":this.page,"pageSize":this.pagesize}
                }
                var json =JSON.stringify(mn);
                let para = {
                    apiId: "adminOrderselect",
                    jsonData:json
                };


                axios({
                    method: 'post',
                    url: '/download/commonAccess',
                    data: {
                        apiId: "adminOrderselect",
                        jsonData:json
                    },
                    // responseType: 'blob'
                }).then(response => {
                    console.log(response.data.data.url,111222);
                    this.download(response.data.data.url)
                }).catch((error) => {

                })
            },
            // 下载文件
            download (data) {
                if (!data) {
                    return
                }
                let url = window.URL.createObjectURL(new Blob([data]))
                let link = document.createElement('a')
                link.style.display = 'none'
                link.href = data
                // link.href = "http://127.0.0.1/visp_mg/download/commonAccess"
                link.setAttribute('download', 'excel.xlsx')

                document.body.appendChild(link)
                link.click()
            },
            getOrder() {

                let mn = {
                    "companyId": 1,
                }
                var json =JSON.stringify(mn);
                let para = {
                    apiId: "adminDayAndeWeekcount",
                    jsonData:json
                };
                this.listLoading = true;

                axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                        // "Content-Type":"application/json; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    console.log(response)
                    this.listLoading = false;
                    this.orderData = response.data.data;
                }).catch((response) =>{
                    this.listLoading = false;


                });
            },
			//重置
			resetForm(formName) {
                this.filters = Object.assign({});
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
				this.$router.push({path:'/OrdeDet'})

			},
            //接受处理
            acceptbtn:function(index, row){
                this.$confirm('你确认接受订单吗？','提示',{
                    type:'warning'
                }).then(()=>{
                    this.listLoading = true;
                    let mn = {
                        "id": row.id,
                        "status": 2,
                    }
                    var json =JSON.stringify(mn);
                    let para = {
                        apiId: "adminOrdermodify",
                        jsonData:json
                    };

                    var qs = require('querystring')
                    axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                        headers: {
                            "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                            // "Content-Type":"application/json; charset=UTF-8",
                        },
                        withCredentials:true,
                    }).then((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message:'修改成功',
                            type:'success'
                        });
                        this.getUsers()
                    }).catch((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message:'修改失败',
                            type:'success'
                        });
                        this.getUsers()

                    });
                })
                // console.log(this,'111')
            },
            //取消订单
            surebtn:function(index, row){
                this.$confirm('你确认完成订单吗？','提示',{
                    type:'warning'
                }).then(()=>{
                    this.listLoading = true;
                    let mn = {
                        "id": row.id,
                        "status": 4,
                    }
                    var json =JSON.stringify(mn);
                    let para = {
                        apiId: "adminOrdermodify",
                        jsonData:json
                    };

                    var qs = require('querystring')
                    axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                        headers: {
                            "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                            // "Content-Type":"application/json; charset=UTF-8",
                        },
                        withCredentials:true,
                    }).then((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message:'修改成功',
                            type:'success'
                        });
                        this.getUsers()
                    }).catch((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message:'修改失败',
                            type:'success'
                        });
                        this.getUsers()

                    });
                    // removeUser(para).then((res)=>{
                    // 	this.listLoading = false;
                    // 	this.$message({
                    // 		message:'删除成功',
                    // 		type:'success'
                    // 	});
                    // 	this.getUsers()
                    // })
                })
                // console.log(this,'111')
            },
			//取消订单
			ordbtn:function(index, row){
				this.$confirm('你确认取消订单吗？','提示',{
					type:'warning'
				}).then(()=>{
					this.listLoading = true;
                    let mn = {
                        "id": row.id,
                        "status": 3,
                    }
                    var json =JSON.stringify(mn);
                    let para = {
                        apiId: "adminOrdermodify",
                        jsonData:json
                    };

                    var qs = require('querystring')
                    axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                        headers: {
                            "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                            // "Content-Type":"application/json; charset=UTF-8",
                        },
                        withCredentials:true,
                    }).then((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message:'修改成功',
                            type:'success'
                        });
                        this.getUsers()
                    }).catch((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message:'修改失败',
                            type:'error'
                        });
                        this.getUsers()

                    });
					// removeUser(para).then((res)=>{
					// 	this.listLoading = false;
					// 	this.$message({
					// 		message:'删除成功',
					// 		type:'success'
					// 	});
					// 	this.getUsers()
					// })
				})
				// console.log(this,'111')
			}

		},
		computed:{

		},
		mounted: function () {
			this.getUsers();
			this.getOrder();

        },
        filters:{
            formDate:function (dysj) {
                if (dysj === null){
                    return "";
                }else {
                    return moment(dysj).format('YYYY-MM-DD  hh:mm:ss')
                }
            },
            fontDate:function (value) {
                const fff = ['申请','接受处理','取消','检测结束'];
                return fff[value -1]
            }

        }
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.panel-group {
	  margin-top: 18px;
	  .card-panel-col{
	    margin-bottom: 20px;
	  }
	  .card-panel {
	    height: 110px;
	    cursor: pointer;
	    font-size: 12px;
	    position: relative;
	    overflow: hidden;
	    color: #666;
	    background: #fff;
	    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
	    border-color: rgba(0, 0, 0, .05);
	    .iconfont{
	    	font-size:40px;
	    	color: #fff;
	    }
	    .icon-1{
	    	background:#f05050;
	    }
	    .icon-2 {
	    	background:#7266ba;
	    }
	    .icon-3 {
	      background: #23b7e5;
	    }
	    .icon-4 {
	      background: #27c247
	    }
	    .card-panel-icon-wrapper {
	      float: left;
	      margin: 20px;
	      padding: 16px;
	      transition: all 0.38s ease-out;
	      border-radius: 6px;
	      height:70px;
	      width:70px;
	      box-sizing: border-box;
	      text-align:center;
	    }
	    .card-panel-icon {
	      float: left;
	      font-size: 48px;
	    }
	    .card-panel-description {
	      float: left;
	      margin: 29px 0px;
	      margin-left: 0px;
	      .card-panel-text {
	        line-height: 18px;
	        color: #4c4c4c;
	        font-size: 14px;
	      }
	      .card-panel-num {
	        font-size: 28px;
	        color:#4c4c4c;
	      }
	    }
	  }
	}
	#chartColumn, #chartColumn1{
		background:#fff!important;
		//margin-top:20px;
	}

</style>