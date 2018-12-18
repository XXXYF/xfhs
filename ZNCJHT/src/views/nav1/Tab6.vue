<!-- 安检-预警信息 -->
<template>
	<div :model="data" class="detail-box">
		<!-- <h1>{{data.name}}</h1> -->
		<table class="tab-msg">
			<tbody>
				<tr class="tab-tr">
					<td>检验流水号</td>
					<td>车牌号码</td>
					<td>预警类型</td>
					<td>预警日期</td>
					<td>预警描述日期</td>
				</tr>
				<tr v-for=" item in itemlst"  class="tab-tr">
					<td>{{item.name}}</td>
					<td>{{item.age}}</td>
					<td>{{item.name}}</td>
					<td>{{item.name}}</td>
					<td>{{item.name}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:{},
				itemlst:[],
			}
		},
		methods:{

		},
	    mounted(){
	    	var  trmsg = sessionStorage.getItem('trmsg')
	    	this.data = JSON.parse(trmsg)
	    	console.log(this.data,'1232')

	    	this.itemlst.push(this.data)  //将对象类型输入到数组类型中

	    	//this.itemlst = this.data
	    	console.log(this.itemlst,'111')
	    },
	    

	}
</script>

