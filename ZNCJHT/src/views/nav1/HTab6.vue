<!-- 安检-检验过程 -->
<template>
	<div class="detail-box hj-box">
		<p class="name">简易瞬态工况法检验过程信息详情</p>
		<i class="f-hr20"></i>
		<table class="tab-msg"  :model="data" >
			<tbody>
				<tr class="tab-tr">
					<td>车牌号码</td>
					<td>所属类别</td>
					<td>视频编号</td>
					<td>压缩状态</td>
				</tr>
				<tr v-for=" item in itemlst" class="tab-tr">
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