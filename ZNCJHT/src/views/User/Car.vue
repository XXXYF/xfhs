<template>
	<section class="sec-box">
		<!--筛选工具条-->
		<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters" ref="filters" id="filters">
				<el-form-item label="车牌号:">
					<el-input v-model="filters.vehicleNo" placeholder="请输入车牌号"></el-input>
				</el-form-item>
				<el-form-item label="车架号:">
					<el-input v-model="filters.vinNo" placeholder="请输入车架号"></el-input>
				</el-form-item>
				<el-form-item label="手机号:">
					<el-input v-model="filters.mobile" placeholder="请输入手机号"></el-input>
				</el-form-item>
				<el-form-item style="float:right;">
					<el-button type="warning" @click="resetForm"><i class="fa fa-undo"></i>&nbsp;重置</el-button>
				</el-form-item>
				<el-form-item style="float:right;">
					<el-button type="primary" v-on:click="getUsers"><i class="fa fa-search"></i>&nbsp;查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>
		
		<!--<el-col :span="24" class="btn-box">-->
			<!--<p><el-button type="primary" @click="handleAdd">新增用户</el-button></p>-->
		<!--</el-col>-->

		<!--列表-->
		<div class="list-box">
			<el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
				<el-table-column prop="id" label="车辆id" >
				</el-table-column>
				<el-table-column prop="vehicleNo" label="车牌号">
				</el-table-column>
				<el-table-column prop="hpzl" label="号牌种类" :formatter="formatRole"  text-align="center">
				</el-table-column>
				<el-table-column prop="mobile" label="联系电话" >
				</el-table-column>
				<el-table-column prop="qdlx" label="驱动类型">
				</el-table-column>
				<el-table-column prop="owner" label="车主"  text-align="center">
				</el-table-column>
				<el-table-column label="操作" width="160" fixed="right">
					<template slot-scope="scope">
						<!--<el-button type="warning"  size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
						<!--<el-button type="danger"  size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>-->
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
		<!--编辑界面-->
		<el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" :rules="editFormRules"  label-width="80px"  ref="editForm">
                <el-form-item label="用户id:" prop="id">
                    <el-input v-model="editForm.id" placeholder="请输入用户id" ></el-input>
                </el-form-item>
				<el-form-item label="登录名:">
		          	<el-input v-model="editForm.loginName" placeholder="请输入登录名" ></el-input>
		        </el-form-item>
                <el-form-item label="用户类型:">
                    <el-select v-model="editForm.type" placeholder="请输入用户状态">
                        <el-option label="微信用户" value="1"></el-option>
                        <el-option label="企业用户" value="2"></el-option>
                        <el-option label="管理用户" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户状态:" >
                    <el-select v-model="editForm.status" placeholder="请输入用户状态" >
                        <el-option label="启用" value="01"></el-option>
                        <el-option label="锁定" value="02"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="联系电话:">
                    <el-input v-model="editForm.phone" placeholder="请输入联系电话" :maxlength="11"></el-input>
                </el-form-item>
		        <el-form-item label="用户名称:">
		          	<el-input v-model="editForm.userName" placeholder="请输入用户名称"></el-input>
		        </el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit"  :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

	</section>
</template>

<script>
	import util from '../../common/js/util'
	import { getUserListPage, removeUser,editUser} from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
	export default {
		data() {
			return {
				filters: {
                    vehicleNo: '',
                    vinNo:'',
                    mobile: '',
				},
				users: [],
				total: 0,
				page: 1,
                pagesize: 10,
				listLoading: false,
				sels: [],//列表选中列
				disabled: true,
                editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editForm:{
                    id:'',
                    loginName:'',
                    name:'',
                    phone:'',
                    roleType:'',
                    status:'',
                    type:'',
                    userName:'',
				},
                editFormRules: {
                    id: [
                        { required: true, message: '请输入用户id', trigger: 'blur' },
                    ],

                },
			}
		},
		methods: {
			//用户角色显示转换
			formatRole :function(row, column) {
				return row.hpzl == 0 ? '小汽车' :row.hpzl == 1 ? '大货车':'管理用户'
			},
			//用户状态显示转换
			formatState :function(row, column) {
				return row.state == 1 ? '启用' : row.state == 2 ?'锁定':'其他'
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
                let mn = {
                    "vehicleNo": this.filters.vehicleNo,
                    "vinNo": this.filters.vinNo,
                    "mobile": this.filters.mobile,
                    "pageRequest":{"currentPage":this.page,"pageSize":this.pagesize}
                }
                var json =JSON.stringify(mn);
				let para = {
                    apiId: "adminVehicleselect",
                    jsonData: json
				};

				this.listLoading = true;
                axios.post('/vehicleManger/commonAccess', qs.stringify(para),{
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
			handleDel: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
                    let mn = {
                        "id": row.id,
                    }
                    var json =JSON.stringify(mn);
                    let para = {
                        apiId: "adminUserdelete",
                        jsonData: json
                    };
					this.listLoading = true;
                    axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                        headers: {
                            "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                            // "Content-Type":"application/json; charset=UTF-8",
                        },
                        withCredentials:true,
                    }).then((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message:'删除成功',
                            type:'success'
                        });
                        this.getUsers()
                    }).catch((response) =>{
                        this.listLoading = false;
                        this.$message({
                            message:'删除失败',
                            type:'error'
                        });
                        this.getUsers()

                    });
				}).catch(() => {

				});
			},
			//显示新增界面
			handleAdd:function(index,row){
				
				// this.editForm = Object.assign({}, row);
				// sessionStorage.setItem('addMsg',JSON.stringify(para))
				this.$router.push('/adduser')
			},
			// 显示编辑界面
			// handleEdit: function (index, row) {
			// 	let editForm = Object.assign({}, row);
			// 	sessionStorage.setItem('editMsg',JSON.stringify(editForm))
			// 	this.$router.push('/edituser')
			// },
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				console.log(row,'111')
				this.editForm = {
                    id:row.id,
                    loginName: row.loginName,//用户姓名
					phone: row.phone, //手机号码
                    userName:row.userName,
					status:row.status,
                    type:row.type,
				};

				console.log(this.editForm,'23');
			},
			//跳转详情
			btnDetail: function(index, row){
				let para = Object.assign({}, row)  //获取当前一行的数据
				console.log(para,'99999999999999') 
				sessionStorage.setItem('CarDetail',JSON.stringify(para))
				this.$router.push('/CarDetail')
			},
			//重置
			resetForm(formName) {
                this.filters = Object.assign({});
		    },
			//编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = {
                                "id":this.editForm.id,
                                "loginName":this.editForm.loginName,
                                "type": this.editForm.type,
                                "status":this.editForm.status,
                                "phone": this.editForm.phone, //手机号码
                                "userName": this.editForm.userName,//用户姓名
                                // "roleEntityList":this.editForm.roleEntityList,
                                // "sessionId":this.editForm.sessionId,
                                // "passWord": this.editForm.passWord,
							}
                            var json =JSON.stringify(para);
                            let paradata = {
                                apiId: "adminUserupdata",
                                jsonData: json
                            };
                            var qs = require('querystring')
                            axios.post('/bookingManger/commonAccess', qs.stringify(paradata),{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                    // "Content-Type":"application/json; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                this.editLoading = false;
                                this.$message({
                                    message:'修改成功',
                                    type:'success'
                                });
                                this.getUsers()
                            }).catch((response) =>{
                                this.editLoading = false;
                                this.$message({
                                    message:'修改失败',
                                    type:'error'
                                });
                                this.getUsers()

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