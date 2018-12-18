<!-- 安检-检验过程 -->
<template>
	<div class="detail-box">
		<!-- <h1>{{data.name}}</h1> -->
		<table class="tab-msg"  :model="data" >
			<tbody>
				<tr class="tab-tr">
					<td>检验项目</td>
					<td>检验次数</td>
					<td>检测线代号</td>
					<td>检验过程开始时间</td>
					<td>检验数据写入时间</td>
					<td>检验过程结束时间</td>
					<td>项目检验状态</td>
				</tr>
				<tr v-for=" item in itemlst" class="tab-tr">
					<td>{{data.name}}</td>
					<td>{{data.age}}</td>
					<td>{{data.name}}</td>
					<td>{{data.name}}</td>
					<td>{{data.name}}</td>
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
			/*itemlst: {
			    get:function(){
			      return this.$store.data
			      console.log(this.$store.data,'1')
			    },
			    set:function(){
			    	console.log(this.data,'2')
			    	return this.data
			    	
			    }

			},*/

		},
	    

	}
</script>


