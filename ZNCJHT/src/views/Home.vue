<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo-img"><img src="../assets/logo_index.png"></el-col>
			<el-col :span="14" class="userinfo">
				<ul class="rt-box">
					<!-- 修改密码 -->
					<li class="rt-lst"  @click="passwordModal" >
						<i class="com-icon icon-password"></i>&nbsp;
						<span>修改密码</span>
					</li>
					<!-- 退出 -->
					<li class="rt-lst"  @click="logout">
						<i class="com-icon icon-off"></i>
					 	<span >退出</span>
					</li>				                      	
				</ul>				
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<!-- <aside :class="collapsed?'menu-collapsed':'menu-expanded'"> -->
			<aside class="menu-expanded" ref="Col">
				<!--导航菜单-->
				<div class="tools" ref="leftCol">
					<p class="lab">
						<img src="../assets/touxiang.png" class="img">
						<i class="name">管理员</i>
						<!-- <i class="fa fa-navicon" @click.prevent="collapse"></i> -->
					</p>
				</div>
				<!-- 左侧栏展示 -->
				<div class="side-box" ref="rightCol" :style="{'height': heightData}">
					<ul class="side-ul">
						<li class="side-lst" v-for="(item, index) in $router.options.routes" v-if="item.name">
							<span class="side-hd">{{item.name}}</span>
							<ul class="side-cont">
								<li class="cont-lst" v-for="(items,index2) in item.children" :class="{'focus': index == currentindex && currentindexs == index2 }" @click="tab(index,index2)" style="cursor:pointer;" v-if="!items.hidden">
									<router-link :to="items.path" class="item">{{items.name}}</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
					</el-col>
					<!-- <el-col :span="24" >
						<Tags-view></Tags-view>
					</el-col> -->
					<strong class="nav-title">我的位置：{{$route.name}}</strong>

					<el-col :span="24" class="content-wrapper">
						
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
		<el-dialog title="修改密码" class="dia-box" :visible.sync="editFormVisible"  v-model="editFormVisible" :close-on-click-modal="false" width="40%" center>
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="用户名" prop="loginName">
				    <el-input v-model="editForm.loginName" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="旧密码" prop="oldPassword">
					<el-input v-model="editForm.oldPassword" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="pass">
				    <el-input v-model="editForm.pass" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input v-model="editForm.checkPass" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
				<el-button type="warning" @click.native="editFormVisible = false">取消</el-button>
			</div>
		</el-dialog>
	</el-row>
</template>

<script>
	// import TagsView from '../components/TagsView.vue'
	import util from '../common/js/util'
	import { getUserListPage } from '../api/api'
	import axios from 'axios'
	import qs from 'qs'

	export default {
		// components: { TagsView },
		data() {
			var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入密码'));
		        } else {
		          if (this.editForm.checkPass !== '') {
		            this.$refs.editForm.validateField('checkPass');
		          }
		          callback();
		        }
		    };

		    var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入密码'));
		        } else if (value !== this.editForm.pass) {
		          callback(new Error('两次输入密码不一致!'));
		        } else {
		          callback();
		        }
		    };

			return {
				sysName:'检测线综合联网系统',
				collapsed:false,
				sysUserName: '',  //用户名
				//sysimg:'../../assets/logo.png',
				sysUserAvatar: '', //用户头像
				classA: false,   //联网状态
				total: 0,
				msgbox:[], //消息数据列表
				MsgShow:false,  //消息展开
				listLoading: false,
				page: 1,
				// index: '',
				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
                    loginName: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
					],
                    oldPassword: [
						{ required: true, message: '请输入密码', trigger: 'blur' },
					],
					pass: [
			            { required: true,validator: validatePass, trigger: 'blur' }
			        ],
			        checkPass: [
			            { required: true,validator: validatePass2, trigger: 'blur' }
			        ],
				},
				//编辑界面数据
				editForm: {
                    loginName: '', //姓名
					oldPassword:'', //旧密码
					pass: '' , //新密码
					checkPass: '' ,//确认密码
				},
				currentindex:2,
				currentindexs:0,
                heightData:"",
                fullHeight: document.documentElement.clientHeight,
				focus:'focus'
			}
		},
		methods: {
			//消息展示
			ToggleMsg(){
				// this.MsgShow =!this.MsgShow;
				this.$router.push({ path :'/Notic' })
			},
			tab:function(index,index2){
				console.log(index,'22')
				console.log(index2,'33')
				
				this.currentindex = index
				this.currentindexs = index2
				let current = {
                    "currentindex": this.currentindex,
                    "currentindexs": this.currentindexs,
				}
                sessionStorage.setItem('current',JSON.stringify(current))
			},
			//获取消息列表
			getMsg(){
				let para = {
					page: this.page,
					// index: this.index,
				};
				this.listLoading = true;
				getUserListPage(para).then((res) => {
					console.log(para,'3434343')
					this.total = res.data.total;
					console.log(this.total,'343434')
					this.msgbox = res.data.users;
					this.name = res.data.users.name;
					this.listLoading = false;
					sessionStorage.setItem('userid',JSON.stringify(res.data.users))
				});

			},
			//加载更多，点击跳转
			linkPage(index){
				this.getMsg();
				this.$router.push({ path :'/Notic' })
				this.MsgShow = false;
			},
			basicclk(){
				this.$router.push({ path: '/basic'})
			},
			//修改密码
			passwordModal:function() {
				console.log('344444444')
				this.editFormVisible = true;
				console.log(this.editFormVisible,'2222222')
				// this.$router.push({ path:'/Password'})
			},
			//密码修改提交
			editSubmit: function () {
				var self = this;
				self.$refs.editForm.validate((valid) => {
					if (valid) {
						self.$confirm('确认提交吗？', '提示', {}).then(() => {
							// this.editLoading = true;
							// let para = Object.assign({}, self.editForm);
							// console.log(para, '2232')
							// var qs = require('querystring')
							// axios.post('api/sys/office/save',qs.stringify(para)  ,{
							// 	headers: {
				             //     "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
				             //  }, //转换类型
				             //  withCredentials : true,
							// }).then((response) =>{
							// 	console.log(111)
							// 	self.$message({
							// 		message: '提交成功',
							// 		type: 'success'
							// 	});
							// 	//this.$refs['editForm'].resetFields();
							// 	self.editFormVisible = false;
							// 	this.editLoading = false;
							// 	self.getUsers();
							// }).catch( (response) => {
							// 	console.log(2222)
							// });
                            this.editLoading = true;
                            let mn = {
                                "loginName": this.editForm.loginName,
                                "oldPassword": this.editForm.oldPassword,
                                "password": this.editForm.pass,
                            }
                            var json =JSON.stringify(mn);
                            let para = {
                                apiId: "adminUserupdata",
                                jsonData:json
                            };
                            axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                    // "Content-Type":"application/json; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                self.$message({
                                    message: '修改成功',
                                    type: 'success'
                                });
                                this.editLoading = false;
                                self.editFormVisible = false;
                                self.getUsers();
                            }).catch((response) =>{
                                this.editLoading = false;
                                this.$message({
                                    message:'修改失败',
                                    type:'error'
                                });


                            });
						});
					}
				});
			},
			handleopen() {

			},
			//
			handleclose() {
				//console.log('handleclose');
			},
			//
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});


			},
			//折叠导航栏
			// collapse:function(){
			// 	this.collapsed=!this.collapsed;
			// },
			//菜单折叠
			// showMenu(i,status){
			// 	this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			// }
			heightdate(){
                let n = this.$refs.leftCol.clientHeight;//获取左边列元素的高度
                let m =this.$refs.rightCol.clientHeight;//获取右边列元素的高度
                let c =this.$refs.Col.clientHeight;//获取右边列元素的高度
                console.log(n ,m,c);//获取右边列元素的高度

                    this.heightData = (c - n) +'px';//动态设置VueComponent元素高度
			}
		},
        watch: {
            fullHeight (val) {
                if(!this.timer) {
                    this.fullHeight = val
                    this.timer = true
                    let that = this
                    setTimeout(function (){
                        that.timer = false;
						that.heightdate();
                    },400)
                }
            }
	   },

        //初始化
		mounted() {

			//获取消息
			// this.getMsg();
			//用户信息
			var user = sessionStorage.getItem('user');
            //右侧菜单
			var current = sessionStorage.getItem('current');
			// console.log(user,'9999999999')
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			};
            if (current) {
                current = JSON.parse(current);
                this.currentindex = current.currentindex || '';
                this.currentindexs = current.currentindexs || '';
            };
			this.heightdate();
            const that = this
            window.onresize = () => {
                return (() => {
                    window.fullHeight = document.documentElement.clientHeight
                    that.fullHeight = window.fullHeight
                })()
            }

		}
	}

</script>

<style scoped lang="scss">
	//@import '../common/css/index.css';
	@import '~scss_vars';

	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 66px;
			line-height: 66px;
			background: #e5e3e6;
			color:#3f4144;
			border-bottom: 4px solid #ff5458;
			.logo-img{
				display:inline-block;
				line-height:10px;
			}
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.rt-box{
					list-style:none;
					margin:0 20px 0 0;
					float:right;
					.rt-lst{
						position:relative;
						display:inline-block;
						float:left;
						list-style:none;
						margin-left:27px;
						cursor:pointer;
						.el-badge{
							position:relative;	
							height:auto;
							.notic{
								line-height:20px;
							}
							
						}
						.el-badge__content{
							top:15px;
						}

						.ret-link{
							display:block;
							cursor:pointer;
						}
						.class_red{
							.fa{
								color:red;
							}
						}
						.class_green{
							.fa{
								color:#4fd063;
							}
						}

					}
					.notic{

					}
				}
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:200px;
			}
			.item{
				height:28px;
				.el-button{
					position: absolute;
    				top: 4px;
    				left: -53px;
				}
			}
		}
		.main {
			display: flex;
			position: absolute;
			top: 66px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 200px;
				width: 220px;
				.tools{
					display:block;
					height:124px;
					line-height:124px;
					border-bottom:1px solid #393b3e;
					background:#3f4144;
					color:#fff;
					.img{
						display: inline-block;
					    float: left;
					    width: 80px;
					    height: 80px;
					    margin: 25px 14px 20px 5px;
					}
					.name{
						font-style:normal;
						font-size:16px;
					}
					.lab{
						padding:0 10px;
						margin:0;
						.fa{
							float:right;
							font-size:20px;
							//background:#428dc1;
							color:#fff;
							border-radius:3px;
							padding:0 5px;
							margin:15px 0;
							cursor:pointer;
						}
					}
				}

				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:46px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:46px;
						z-index:99999;
						height:auto;
						display:none;
						background:#01192b;
						
						.el-menu-item{
							color:#fff;
						}
					}
					.fa{
						color:#1794f3;
					}
					.el-menu-item:focus, .el-menu-item:hover{
						background:#01192b;
						color:#fff;
					}

				}
			}
			
			.menu-expanded{
				flex:0 0 200px;
				background:#3f4144;
				width: 220px;
				.el-menu{
					display:block!important;
					background-color:#3f4144;
					
					max-height:400px;
					overflow-y:scroll;
					overflow-x:hidden;
					.el-menu-item{
						
					}
					.el-submenu{
						.el-submenu__title{
							color:#fff!important;
						}
					}
					
				}
			}
			.content-container {
				background: #edecec;
				flex:1;
				overflow-y: scroll;
				padding:0;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: left;
						display:block;
						width:100%;
						margin-bottom:10px;
						padding:15px 0;
						background-color:#fff;
						text-indent: 15px;
						.el-breadcrumb{
							font-size:14px;
						}
					}
				}
				.content-wrapper {
					margin-top:42px;
					padding:20px;
					background-color: #edecec;
					box-sizing: border-box;
				}
			}
			.nav-title{
				display:block;
				float:left;
				width:100%;
				position:fixed;
				background:#fff;
				padding:10px;
				box-sizing:border-box;
				z-index:8;
				color:#888888;
				box-shadow:0 0 10px #ccc;
			}
		}
	}
	
	
	.msg-cont{
		position:absolute;
		display:none; 
		right:-100px;
		background-color:#fff;
		z-index:9;
		border:1px solid #ccc;
		padding:20px;
		width:198px;
		overflow:hidden;
		margin-top:-1px;
		.msg-lst{
			display:block;
			float:left;
			border-bottom:1px dashed #ccc;
			line-height:normal;
			width:100%;
			text-align:left;
			padding:5px 0;
			color:#333;
			.link-item{
				color:#000;
				text-decoration:none;
			}
		}
	}
	.show-box{
		display:block;
	}
	.line{
		font-style:normal;
		margin-right:5px;
	}
	.red{
		color:#fff;
		background:red;
		border-radius: 3px;
	    font-style: normal;
	    margin-right: 5px;
	}
	.org{
		color:#fff;
		background:orange;
		border-radius: 3px;
	    font-style: normal;
	    margin-right: 5px;
	}
	.green{
		color:#fff;
		background:green;
		border-radius: 3px;
	    font-style: normal;
	    margin-right: 5px;
	}
	.dia-box{
		.el-dialog__header{
			background-color:#ff878a;
			.el-dialog__title{
				color:#fff;
			}
		}
	}
	.el-dialog--center{
		color:red;
	}
	.third-leaf{
		margin-left:-40px;
	}
	.el-badge__content{
		top:23px!important;
		right:0px!important;
	}
	.el-submenu .el-menu{
		display:block!important;
	}
	
	.side-box{
		display:block;
		float:left;
		width:100%;
		overflow-y: auto;
		color:#fff;

		.side-ul{
			list-style:none;
			padding:0;
			margin:0;
			.side-lst{
				display:block;
				float:left;
				width:100%;
				box-sizing:border-box;
				border-top:1px solid #393b3e;
				.side-hd{
					display:block;
					float:left;
					width:100%;
					padding:0 40px;
					padding-left: 20px;
					margin:10px 0;
					border-left:2px solid #ff878a;
					box-sizing:border-box;
				}
				.side-cont{
					display:block;
					float:left;
					width:100%;
					list-style:none;
					padding:0;
					background: #333;
					margin:0;
					.cont-lst{
						.item{
							display:block;
							float:left;
							width:100%;
							box-sizing:border-box;
							color:#fff;
							text-decoration:none;
							height:36px;
							line-height:36px;
							padding:0 40px;
						}
						&:hover{
							.item{
								background-color:#ff878a;
								color:#fff;
							}
						}

					}
					.focus{
							.item{
								background-color:#ff878a;
								color:#fff;
							}
							&:hover{
								.item{
									background-color:#ff878a;
									color:#fff;
								}
							}
							
						}
					
					
				}
				
				
				
			}
		}
	}
	/*滚动条样式*/
	.side-box::-webkit-scrollbar {/*滚动条整体样式*/
		width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
		height: 10px;
	}
	.side-box::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
		border-radius: 5px;
		-webkit-box-shadow: inset 0 0 5px rgba(255,135,138,0.2);
		background: rgba(51,51,51,1);
	}
	.side-box::-webkit-scrollbar-track {/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		border-radius: 0;
		background: rgba(102,102,102,1);
	}
	.side-box{
		scrollbar-arrow-color: #f4ae21; /**//*三角箭头的颜色*/
		scrollbar-face-color: #333; /**//*立体滚动条的颜色*/
		scrollbar-3dlight-color: #666; /**//*立体滚动条亮边的颜色*/
		scrollbar-highlight-color: #666; /**//*滚动条空白部分的颜色*/
		scrollbar-shadow-color: #999; /**//*立体滚动条阴影的颜色*/
		scrollbar-darkshadow-color: #666; /**//*立体滚动条强阴影的颜色*/
		scrollbar-track-color: #666; /**//*立体滚动条背景颜色*/
		scrollbar-base-color:#f8f8f8; /**//*滚动条的基本颜色*/

	}
</style>