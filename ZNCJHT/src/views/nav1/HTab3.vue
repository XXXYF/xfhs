<template>
	<div :model="data">
		<div class="hj-box">
			<p class="name">登记照片</p>
			<img src="" class="img ">
		    <i class="f-hr20"></i>
		    <p class="name">外检照片</p>
		    <p class="empty-tip">暂时没有</p>
		    <i class="f-hr20"></i>
		    <p class="name">新车其他照片</p>
		</div>
	</div>
</template>


<script>
	export default{
		data() {
			return {
				data:{},
				filters:{},
			}
		},
		mounted(){
	    	
	    	 var trmsg = sessionStorage.getItem('trmsg')
	    	 this.data = JSON.parse(trmsg)
	    	 this.filters = this.data

	    	console.log(this.data,'454545555555555555')
	    }
	}
</script>
