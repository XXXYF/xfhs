<!-- 获取数据 -->
<template>
	<div class="msg-box">
		<span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;数据操作日志详情</span>
		<table class="tab" :model="data">
			<tbody>
				<tr class="tr">
					<td class="cell">用户名称</td>
					<td>{{data.useid}}</td>
					<td class="cell">用户账号</td>
					<td>{{data.name}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">登录MAC地址</td>
					<td>{{data.state}}</td>
					<td class="cell">登录IP地址</td>
					<td>{{data.roleid}}</td>
					
				</tr>
				<tr class="tr">
					<td class="cell">请求路径</td>
					<td :formatter="formatRole">{{data.role}}</td>
					<td class="cell">操作结果</td>
					<td>{{data.department}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">操作时间</td>
					<td :formatter="formatRole">{{data.role}}</td>
					<td class="cell">操作类型</td>
					<td>{{data.department}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">操作描述</td>
					<td colspan="3"></td>
				</tr>
			</tbody>
		</table>
		<el-button type="primary" @click="back">返回</el-button>

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
			// var trmsg = sessionStorage.getItem('trmsg')
			// this.data = JSON.parse(trmsg)
			var trmsg = sessionStorage.getItem('trmsg')
			this.data = JSON.parse(trmsg)
		}
	}
</script>
<style>
	.msg-box{
		border-top: none;
	}
	.msg-box .hd-tit{
		margin-top: 0;
	}
</style>