<!-- 安检-检验过程 -->
<template>
	<div class="detail-box hj-box">
		<p class="name">简易瞬态工况法检验过程信息详情</p>
		<i class="f-hr20"></i>
		<table class="tab-msg" :model="data" >
			<tbody>
				<tr class="tab-tr">
					<td>取样点时序</td>
					<td>工况类型</td>
					<td>实测加载功率</td>
					<td>HC浓度</td>
					<td>CO浓度</td>
					<td>CO2浓度</td>
					<td>环境O2浓度</td>
					<td>分析仪O2浓度</td>
					<td>温度计O2浓度</td>
					<td>HC排放质量</td>
					<td>CO排放质量</td>
					<td>NOX排放质量</td>
				</tr>
				<tr v-for=" item in itemlst" class="tab-tr">
					<td>{{data.name}}</td>
					<td>{{data.age}}</td>
					<td>{{data.name}}</td>
					<td>{{data.name}}</td>
					<td>{{data.name}}</td>
					<td>{{data.age}}</td>
					<td>{{data.name}}</td>
					<td>{{data.name}}</td>
					<td>{{data.name}}</td>
					<td>{{data.age}}</td>
					<td>{{data.name}}</td>
					<td>{{data.name}}</td>
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
	    computed:{

		},
	    

	}
</script>