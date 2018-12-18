<!-- 获取数据 -->
<template>
	<div>
		<div class="msg-box">
			<span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;用户基本信息</span>
			<table class="tab" :model="data">
				<tbody>
					<tr class="tr">
						<td class="cell">用户账号</td>
						<td>{{data.useid}}</td>
						<td class="cell">用户姓名</td>
						<td>{{data.name}}</td>
					</tr>
					<tr class="tr">
						<td class="cell">身份证号码</td>
						<td></td>
						<td class="cell">警员/员工编号</td>
						<td>{{data.roleid}}</td>
						
					</tr>
					<tr class="tr">
						<td class="cell">用户角色</td>
						<td :formatter="formatRole">{{data.role}}</td>
						<td class="cell">用户部门</td>
						<td>{{data.department}}</td>
					</tr>
					<tr class="tr">
						<td class="cell">特征</td>
						<td>{{data.state}}</td>
						<td class="cell">用户名有效期至</td>
						<td></td>
					</tr>
					<tr class="tr">
						<td class="cell">允许登录ip</td>
						<td></td>
						<td class="cell">验证方式</td>
						<td></td>
					</tr>
					<tr class="tr">
						<td class="cell">密码有效期至</td>
						<td></td>
						<td class="cell">允许登录出错次数</td>
						<td></td>
					</tr>
					<tr class="tr">
						<td class="cell">可登录时间段</td>
						<td></td>
						<td class="cell">联系方式</td>
						<td></td>
					</tr>
				</tbody>
			</table>
			<!-- <router-link :to="{ path :'/user'}"><el-button type="primary">返回</el-button></router-link> -->
			<span class="btn"><el-button type="warning" @click="back">返回</el-button></span>
		</div>
		<i class="f-hr20"></i>
		<!-- <div class="seconde-box">
			<p class="hd">用户基本信息</p>
			<div class="content">
				<el-row class="container">
					<el-col :span="12">
						<div class="lst"><label class="lab">用户账号：</label>{{data.name}}</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">用户有效期：</label>2018-12-12 12:12:12</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">用户姓名：</label>{{data.name}}</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">允许登录IP：</label>{{data.name}}</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">身份证号：</label>363204199009091234</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">验证方式：</label></div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">用户角色：</label>超级管理员</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">密码有效期周期：</label>2018-12-12 12:12:12</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">用户部门：</label>{{data.name}}</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">可登录时间段：</label>南昌交警大队</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">警号/员工编号：</label>111</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">允许登录出错次数：</label>111</div>
					</el-col>
					<el-col :span="12">
						<div class="lst"><label class="lab">特征：</label>警员</div>
					</el-col>
				</el-row>
			</div>
			<span class="btn"><el-button type="warning" @click="back">返回</el-button></span>
		</div> -->
	</div>
</template>

<script>
	export default{
		data(){
			return {
				data:{}
			}
		},
		methods:{
			formatRole :function(row,colume) {
				return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			},
			back: function(){
				window.history.go(-1)
				var box = document.getElementsByClassName("router-link-active");
				box[0].classList.add("aa")
				// console.log(box[0].value);
			},
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			this.data = JSON.parse(user)
			console.log(this.data,'1233')
		}
	}
</script>
