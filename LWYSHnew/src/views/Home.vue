<template>
	<el-row class="container">
		<el-col :span="24" class="header">
			<el-col :span="6" class="logo-img"><img src="../assets/logo.png"></el-col>
			<el-col :span="14" class="userinfo">
				<ul class="rt-box">
					<!-- 管理员 -->
					<li class="rt-lst"   >
						<i class="fa icon-top icon-internet"></i>&nbsp;
						<!--<span v-if="OpenNetdata.aj == 'open'">联网状态：安检/</span>-->
						<!--<span v-if="OpenNetdata.zj == 'open'">联网状态：综检/</span>-->
						<el-dropdown @command="handleCommand">
							  <span class="el-dropdown-link" style="color: #ffffff">
								联网状态：<i class="el-icon-arrow-down el-icon--right"></i>
							  </span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="a" v-if="OpenNetdata.aj == 'open'">联网状态：安检/良好</el-dropdown-item>
								<el-dropdown-item command="a" v-if="OpenNetdata.aj == 'close'">联网状态：安检/断开</el-dropdown-item>
								<el-dropdown-item command="b" v-if="OpenNetdata.zj == 'open'">联网状态：综检/良好</el-dropdown-item>
								<el-dropdown-item command="b" v-if="OpenNetdata.zj == 'close'">联网状态：综检/断开</el-dropdown-item>
								<el-dropdown-item command="c" v-if="OpenNetdata.hj == 'open'">联网状态：环检/良好</el-dropdown-item>
								<el-dropdown-item command="c" v-if="OpenNetdata.hj == 'close'">联网状态：环检/断开</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="rt-lst"  @click="xzaddress" >
						<i class="fa icon-top icon-download"></i>&nbsp;
						<span>下载</span>
					</li>
					<!-- 管理员 -->
					<li class="rt-lst"   >
						<i class="fa icon-top icon-user"></i>&nbsp;
						<span>{{this.userdata.yhbh}}</span>
					</li>
					<!-- 修改密码 -->
					<li class="rt-lst"  @click="passwordModal" >
						<i class="fa icon-top icon-password"></i>&nbsp;
						<span>修改密码</span>
					</li>
					<!-- 退出 -->
					<li class="rt-lst"  @click="logout">
						<i class="fa icon-top icon-quit"></i>&nbsp;
						<span >退出</span>
					</li>
				</ul>

			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<!--<div class="tools">-->
					<!--<p class="lab">-->
						<!--<i class="name">导航菜单</i>-->
						<!--<i class="fa fa-navicon" @click.prevent="collapse"></i>-->
					<!--</p>-->
				<!--</div>-->

				<!--<div class="" v-if="userrole==1">

				</div>-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in routs" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title">
								<div class="nav-item"><i :class="item.iconCls"></i>{{item.name}}</div>
							</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{ child.name }}
								<!-- <template slot="title">
									<i :class="item.iconCls"></i>{{ child.name }}
								</template> -->
								<!-- 新增第三级 -->
								<!-- <el-menu-item v-for="child in child.children" :index="child.path" :key="child.path" v-if="!child.hidden" class="third-leaf">
									{{child.name}}
								</el-menu-item> -->
							</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf && item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}
						</el-menu-item>
					</template>
				</el-menu>
				<!--导航菜单-折叠后-->
				<!--<ul class="el-menu el-menu-vertical-demo collapsed" v-show="collapsed" ref="menuCollapsed">-->
					<!--<li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">-->
						<!--<template v-if="!item.leaf">-->
							<!--<div class="el-submenu__title "  @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>-->
							<!--<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">-->
								<!--<li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}-->
									<!--&lt;!&ndash; <ul class="">-->
										<!--<li v-for="child in child.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.children.path)">-->
											<!--{{child.name}}-->
										<!--</li>-->
									<!--</ul> &ndash;&gt;-->

								<!--</li>-->
							<!--</ul>-->
						<!--</template>-->
						<!--<template v-else>-->
							<!--<li class="el-submenu">-->
								<!--<div class="el-submenu__title el-menu-item" style="height: 46px;line-height: 46px;padding: 0 15px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>-->
							<!--</li>-->
						<!--</template>-->
					<!--</li>-->
				<!--</ul>-->
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<!-- <strong class="title">{{$route.name}}</strong> -->
						<!-- <el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb> -->
					</el-col>
					<!--<el-col :span="24" >
						<Tags-view></Tags-view>
					</el-col>-->
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
		<el-dialog title="修改密码" class="dia-box" :visible.sync="editFormVisible"  v-model="editFormVisible" :close-on-click-modal="false" width="658px" center @close='closeDialog'>
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="旧密码" prop="oldPwd">
					<el-input type="password" v-model="editForm.oldPwd" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="新密码" prop="newPwd">
				    <el-input type="password" v-model="editForm.newPwd" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="确认密码" prop="checkPass">
					<el-input type="password" v-model="editForm.checkPass" auto-complete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button class="dialog-button" type="" @click.native="editFormVisible = false">取消</el-button>
				<el-button class="dialog-button danger-button"  type="" @click.native="editSubmit" :loading="editLoading">确认</el-button>
			</div>
		</el-dialog>
		<el-dialog title="下载插件" class="dia-box" :visible.sync="xzVisible"  v-model="xzVisible" :close-on-click-modal="false" width="258px" center >
			<el-form  >
				<el-form-item  style="text-align: center">
                    <a class="dialog-button danger-button" style="display: block;margin: auto" type="" href="ScanCtrl_2.0.exe" >下载高拍仪插件</a>
                </el-form-item>
                <el-form-item  style="text-align: center">
					<a class="dialog-button danger-button" style="display: block;margin: auto" type=""  href="vlc_2.2.4.0.exe"  >下载视频播放插件</a>
					<!--<el-button class="dialog-button danger-button"  type="" @click="download(VlcUrl)" >下载视频播放插件</el-button>-->
                </el-form-item>
			</el-form>
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
		          callback(new Error('请输入新密码'));
		        } else if (value.length < 6) {
                    callback(new Error('新密码不能少于六位'));
                } else if (value == this.editForm.oldPwd) {
                    callback(new Error('新密码与旧密码一致!'));
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
		        } else if (value !== this.editForm.newPwd) {
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
                sfgly: '', //是否管理员
				classA: false,   //联网状态
				total: 0,
				msgbox:[], //消息数据列表
				MsgShow:false,  //消息展开
				listLoading: false,
				page: 1,
				// index: '',
				editFormVisible: false,//编辑界面是否显示
                xzVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
                    oldPwd: [
                        { required: true, message: '请输入旧密码', trigger: 'blur' },
			        ],
					newPwd: [
			            { validator: validatePass, trigger: 'blur' }
			        ],
			        checkPass: [
			            { validator: validatePass2, trigger: 'blur' }
			        ],
				},
				//编辑界面数据
				editForm: {
					id:'',
                    oldPwd:'', //旧密码
                    newPwd: '' , //新密码
					checkPass: '' ,//确认密码
				},
				routs:this.$router.options.routes,
                userdata: {},
                OpenNetdata:'',
                ScanCtrlUrl:'',
                VlcUrl:'',
			}
		},
		methods: {
			//消息展示
			// ToggleMsg(){
			// 	// this.MsgShow =!this.MsgShow;
			// 	this.$router.push({ path :'/Notic' })
			// },
            handleCommand(command) {
                // if(command == 'a'){
                 //    this.passwordModal()
				// }else if(command == 'b'){
                 //    this.basicclk()
				// }else {
                 //    this.logout()
				// }
            },
            //获取用户信息
            // getUsers: function () {
            //     var self = this;
            //     let para = {
            //         yhbh:self.userdata.yhbh,
            //     };
            //     var qs = require('querystring')
            //     axios.post('api/jdclwysh/index/getTyhxxByYhbh',qs.stringify(para)  ,{
            //         headers: {
            //             "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
            //         }, //转换类型
            //         withCredentials : true,
            //     }).then((response) =>{
            //         if(response.data.code == 1){
            //
            //             self.userdata  = response.data.data;
            //             console.log(self.userdata)
            //             sessionStorage.setItem('yhxx', JSON.stringify(self.userdata));
            //         }else {
            //             self.$message({
            //                 message: response.data.msg,
            //                 type: 'error'
            //             });
            //         }
            //     }).catch( (response) => {
            //
            //     });
            // },
            //获取用户信息
            getlistMenu: function () {
                var self = this;

                axios.post('api/index/listMenuByYhzh' ,{
                    headers: {
                        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                    }, //转换类型
                    withCredentials : true,
                }).then((response) =>{
                    if (response.data.msg == '用户未登录'){
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    }else if(response.data.msg == '获取不到用户信息'){
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    }
                    if(response.data.code == 1){
						console.log(response.data);

                    }else {
                        self.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                    }
                }).catch( (response) => {

                });
            },
            //获取联网状态接口
            OpenNetNow: function () {
                    var self = this;
                    axios.post('api/index/isOpenNet' ,{
                        headers: {
                            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                        }, //转换类型
                        withCredentials : true,
                    }).then((response) =>{
                        if (response.data.msg == '用户未登录'){
                            this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            sessionStorage.removeItem('user');
                            this.$router.push('/login');
                        }else if(response.data.msg == '获取不到用户信息'){
                            this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            sessionStorage.removeItem('user');
                            this.$router.push('/login');
                        }
                        if(response.data.code == 1){

                            self.OpenNetdata  = response.data.data;

                        }else {
                            self.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                        }
                    }).catch( (response) => {

                    });

            },
            OpenNet: function () {
                setTimeout(()=>{
                    var self = this;
                    axios.post('api/index/isOpenNet' ,{
                        headers: {
                            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                        }, //转换类型
                        withCredentials : true,
                    }).then((response) =>{
                        if (response.data.msg == '用户未登录'){
                            this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            sessionStorage.removeItem('user');
                            this.$router.push('/login');
                        }else if(response.data.msg == '获取不到用户信息'){
                            this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            sessionStorage.removeItem('user');
                            this.$router.push('/login');
                        }
                        if(response.data.code == 1){

                            self.OpenNetdata  = response.data.data;

                        }else {
                            self.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                        }
                    }).catch( (response) => {

                    });
                },30000)

            },
			//加载更多，点击跳转
			linkPage(index){
				// this.getMsg();
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
							this.editLoading = true;
                            let para = {
                                userName:self.userdata.yhbh,
                                oldPwd:self.editForm.oldPwd, //旧密码
                                newPwd: self.editForm.newPwd , //新密码
                            };
							console.log(para, '2232')
							var qs = require('querystring')
							axios.post('api/login/updatePassWord',qs.stringify(para)  ,{
								headers: {
				                 "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
				              }, //转换类型
				              withCredentials : true,
							}).then((response) =>{
                                if (response.data.msg == '用户未登录'){
                                    this.$message({
                                        message: response.data.msg,
                                        type: 'error'
                                    });
                                    sessionStorage.removeItem('user');
                                    this.$router.push('/login');
                                }else if(response.data.msg == '获取不到用户信息'){
                                    this.$message({
                                        message: response.data.msg,
                                        type: 'error'
                                    });
                                    sessionStorage.removeItem('user');
                                    this.$router.push('/login');
                                }
                                if(response.data.code == 1){
                                    self.$message({
                                        message: '修改成功',
                                        type: 'success'
                                    });
                                    self.editFormVisible = false;
                                    this.editLoading = false;
                                }else {
                                    self.$message({
                                        message: response.data.msg,
                                        type: 'error'
                                    });
                                    this.editLoading = false;
                                }
							}).catch( (response) => {

							});
						});
					}
				});
			},
			handleopen() {

			},
            //关闭弹框的事件
            closeDialog(){
                // this.formdata = Object.assign({});
                this.editForm = Object.assign({});

            },
			//
			handleclose() {
				//console.log('handleclose');
			},
			//
			handleselect: function (a, b) {
                console.log(a,'133');
                console.log(b,'133');
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {

                    axios.post('api/index/exit' ,{
                        headers: {
                            "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                        }, //转换类型
                        withCredentials : true,
                    }).then((response) =>{
                        if (response.data.msg == '用户未登录'){
                            this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            sessionStorage.removeItem('user');
                            this.$router.push('/login');
                        }else if(response.data.msg == '获取不到用户信息'){
                            this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            sessionStorage.removeItem('user');
                            this.$router.push('/login');
                        }
                        if(response.data.code == 1){
                            _this.$message({
                                message: response.data.msg,
                                type: 'success'
                            });
                            console.log(11)
                            sessionStorage.removeItem('user');
                            _this.$router.push('/login');
                        }else {
                            _this.$message({
                                message: response.data.msg,
                                type: 'error'
                            });
                            console.log(2)

                        }
                    }).catch( (response) => {

                    });

				}).catch(() => {

				});


			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			//菜单折叠
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			},
            xzaddress(){
                this.xzVisible = true;
                var hostport=document.location.host;
                console.log(hostport)
                this.ScanCtrlUrl = hostport + '/static/ScanCtrl_2.0.exe';
                // this.ScanCtrlUrl =  'http://192.168.1.27:8153/static/ScanCtrl_2.0.exe';
                console.log(this.ScanCtrlUrl)
                this.VlcUrl = hostport + '/static/vlc_2.2.4.0.exe';
			},
            VlcUrladress(){
                var hostport=document.location.host;
                this.VlcUrl = hostport + '/static/vlc_2.2.4.0.exe';
                console.log(this.VlcUrl)
                this.download(this.VlcUrl)
			},
            // 下载文件
            download (data) {
                console.log(data,'12322332s')
                if (!data) {
                    return
                }
                let url = window.URL.createObjectURL(new Blob([data]))
                let link = document.createElement('a')
                link.style.display = 'none'
                link.href = url
                link.setAttribute('download', 'vlc_2.2.4.0.exe')

                document.body.appendChild(link)
                link.click()
            },
		},
		//初始化
		mounted() {
		    let that = this

			//获取消息
			var user = sessionStorage.getItem('user');
			 console.log(user,'9999999999')
			if (user) {
				user = JSON.parse(user);
				this.userdata = user || '';
			};
            // this.getUsers();
            this.OpenNet();
            this.OpenNetNow();
            // this.getlistMenu();
            //
            var qs = require('querystring')
            var aa = {
                // 'sfzhm': user.data.sfzhm,
                // 'date': new Date()
            };
            axios.post('api/index/listMenuByYhzh',qs.stringify(aa),{
                headers: {
                    "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
                }, //转换类型
                withCredentials : true,
            }).then((response) =>{
                if (response.data.msg == '用户未登录'){
                    this.$message({
                        message: response.data.msg,
                        type: 'error'
                    });
                    sessionStorage.removeItem('user');
                    this.$router.push('/login');
                }else if(response.data.msg == '获取不到用户信息'){
                    this.$message({
                        message: response.data.msg,
                        type: 'error'
                    });
                    sessionStorage.removeItem('user');
                    this.$router.push('/login');
                }
                console.log(response)
				var data = response.data.data
                let routarr = this.routs
				let falg = false;
				for(let d of data){
                    for(let a of routarr){
                        if(d.cdbs == a.cdbs){
                            a.hidden = false;
						}
						if(a.children != undefined) {
                            for (let child of a.children) {
                                if (d.cdbs == child.cdbs) {
                                    child.hidden = false;
                                }
                            }
                        }
					}
					if('yw:zpcx:zpdy'== d.cdbs){
                        falg=true;
					}
				}
                sessionStorage.setItem('falg', JSON.stringify(falg));

                console.log(this.routs)
            }).catch( (response) => {
                //console.log(2222)
            });

		},
        // beforeMount(){
		//     console.log("dldldldldl")
		// }
	}

</script>

<style  lang="scss" scoped>
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
			background: -webkit-linear-gradient(#66b4f3, #0189df); /* Safari 5.1 - 6.0 */
			background: -o-linear-gradient(#66b4f3, #0189df); /* Opera 11.1 - 12.0 */
			background: -moz-linear-gradient(#66b4f3, #0189df); /* Firefox 3.6 - 15 */
			background: linear-gradient(#66b4f3, #0189df); /* 标准的语法 */
			color:#fff;
			.logo-img{
				display:inline-block;
				line-height:10px;
				margin: 0 0 0 20px ;
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

	}
					.rt-box .headerIcon{
						display: inline-block;
						width: 26px;
						height: 27px;
						background: url("../assets/homeHeadericon.png") no-repeat left center;
						vertical-align: middle;
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
				width: 200px;
				.tools{
					display:block;
					height:50px;
					line-height:50px;
					//border-bottom:1px solid #bbb;
					background:#0d6fba;
					color:#fff;
					.name{
						font-style:normal;
						font-size:16px;
						margin-left:30px;
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
			.menu-collapsed{
				flex:0 0 46px;
				width: 46px;
				.el-submenu {
					.el-menu-item{
						z-index:9;
					}
				}
				.tools{
					.name{
						display:none;
					}
				}
			}
			.menu-expanded{
				flex:0 0 240px;
				width: 240px;
				.el-menu{
					border-right: 1px solid #aaaaaa;
					background-color:#dedede;
					color:#333;
					.el-menu-item{

					}
					.el-submenu{
						.el-submenu__title{
							color:#fff!important;
							background: -webkit-linear-gradient(#dedede, #bdbdbd); /* Safari 5.1 - 6.0 */
							background: -o-linear-gradient(#dedede, #bdbdbd); /* Opera 11.1 - 12.0 */
							background: -moz-linear-gradient(#dedede, #bdbdbd); /* Firefox 3.6 - 15 */
							background: linear-gradient(#dedede, #bdbdbd); /* 标准的语法 */
						}
					}
					
				}
			}
			.content-container {
				background: #e4eeff;
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
					padding:20px;
					background-color: #e4eeff;
					box-sizing: border-box;
				}
			}
		}
	}
	.el-menu-vertical-demo{
		width:240px!important;
	}
	.el-menu-vertical-demo +.el-menu-vertical-demo{
		width:46px!important;
		background:#01192b;
		color:#fff;
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
			background-color:#0d6fba;
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
	.el-menu li{
		border-radius: 5px;
		padding: 10px;
		background-color: #dedede;
	}

</style>
<style>
	.el-submenu__title{
		border: 1px solid #aaaaaa;
		border-radius: 5px;
		background: -webkit-linear-gradient(#dedede, #bdbdbd); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#dedede, #bdbdbd); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#dedede, #bdbdbd); /* Firefox 3.6 - 15 */
		background: linear-gradient(#dedede, #bdbdbd); /* 标准的语法 */
	}
	.el-menu li{
		padding: 10px;
	}
	.el-submenu .el-menu{
		margin-top: 10px;

		background: #dedede;
	}
    .el-submenu .el-menu-item{
        padding: 0 10px!important;
        min-width: 100px;
        text-align: left;
        margin-left: 0px;
        text-indent: 10px;
    }
    .el-submenu .is-active{
        background: url("../assets/leftmenuicon2.png") no-repeat left center;
        color: #ed5644;
    }
    .el-submenu.is-active .el-submenu__title{
        border-bottom-color:  #aaaaaa;
    }
	.el-submenu .el-menu-item.is-active{
		color:  #ffffff;
		background: #1893e4;
	}

	.el-menu-vertical-demo>.el-menu-item[tabindex="-1"]{
		padding: 0 ;
		width: 220px;
		margin: 10px  auto 10px auto;
		height: 46px;
		line-height: 46px;
		border: 1px solid #aaaaaa;
		border-radius: 5px;
		padding: 0 20px;
		background: -webkit-linear-gradient(#dedede, #bdbdbd); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#dedede, #bdbdbd); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#dedede, #bdbdbd); /* Firefox 3.6 - 15 */
		background: linear-gradient(#dedede, #bdbdbd); /* 标准的语法 */
	}
	.dia-box{
		border: 1px solid #c2c2c2;
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 0 10px #b9cccb;
	}
	.dia-box .el-dialog__header{
		text-align: left;
		background: -webkit-linear-gradient(#90d59a, #7eb882); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#90d59a, #7eb882); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#90d59a, #7eb882); /* Firefox 3.6 - 15 */
		background: linear-gradient(#90d59a, #7eb882); /* 标准的语法 */
		padding: 15px;
	}
	/*.dia-box .el-dialog--center .el-dialog__body{*/
		/*padding: 80px 100px 0px 100px ;*/
	/*}*/

</style>