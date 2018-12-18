<!-- 获取数据 -->
<template>
	<div class="msg-box">
		<span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;页面操作日志详情</span>
		<table class="tab" :model="data">
			<tbody>
				<tr class="tr">
					<td class="cell">用户账号</td>
					<td>{{data.loginname}}</td>
					<td class="cell">用户名</td>
					<td>{{data.username}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">登录ip</td>
					<td>{{data.ip}}</td>
					<td class="cell">结果</td>
					<td>{{data.result}}</td>
					
				</tr>
				<tr class="tr">

					<td class="cell">时间</td>
					<td colspan="3">{{data.time}}</td>
				</tr>

			</tbody>
		</table>
		<div slot="footer" class="footer">
			<el-button type="warning" @click="back">返回</el-button>
		</div>
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
				// var box = document.getElementsByClassName("router-link-active");
				// box[0].classList.add("aa")
				// console.log(box[0].value);
			},
		},
		mounted() {
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