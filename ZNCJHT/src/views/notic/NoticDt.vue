<template>
	<div class="msg-box">
		<span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;预警信息详情</span>
		<table class="tab" :model="data">
			<tbody>
				<tr class="tr">
					<td class="cell">检验流水号:</td>
					<td>{{data.useid}}</td>
					<td class="cell">检验机构编号:</td>
					<td>{{data.name}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">号牌种类:</td>
					<td></td>
					<td class="cell">号牌号码:</td>
					<td>{{data.roleid}}</td>
					
				</tr>
				<tr class="tr">
					<td class="cell">接口ID:</td>
					<td :formatter="formatRole">{{data.role}}</td>
					<td class="cell">预警种类:</td>
					<td>{{data.department}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">调用时间:</td>
					<td :formatter="formatRole">{{data.role}}</td>
					<td class="cell">返回结果代码:</td>
					<td>{{data.department}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">请求数据</td>
					<td colspan="3"><textarea class="textarea" rows="3" cols="20">{{data.state}} </textarea></td>
				</tr>
				<tr class="tr">
					<td class="cell">返回结果数据</td>
					<td colspan="3"><textarea class="textarea" rows="3" cols="20">{{data.state}} </textarea></td>
				</tr>
			</tbody>
		</table>
		<el-button type="warning" @click="back">返回</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:{},
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
		mounted(){
	    	var trmsg = sessionStorage.getItem('trmsg')
	    	this.data = JSON.parse(trmsg)
	    	console.log(this.data,'3333333')
           

		}
	}
</script>

<style>
	.textarea{
		display: block;
		height: 100px;
		width: 100%;
		margin: 10px 0;
		border:1px solid #e0e0e0;
	}
</style>