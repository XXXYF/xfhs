<template>
	<div class="tab-content">
		<div class="tab-box">
			<p class="hd">综检信息详情
				<el-button type="primary" style="float:right;margin-top: -10px;" @click="pic">照片补传</el-button>
				<el-button type="primary" style="float:right; margin-right:20px;margin-top: -10px;" @click="edit">人工信息修改</el-button>
			</p>
			<el-row class="tab-cont">
				<el-tabs type="border-card">
				  <el-tab-pane label="仪器检验结果">
				    <ZTab1></ZTab1>
				  </el-tab-pane>
				  <el-tab-pane label="人工检验结果">
				  	<ZTab2></ZTab2>
				  </el-tab-pane>
				  <el-tab-pane label="检验照片">
				  	<Tab7></Tab7>
				  </el-tab-pane>
				</el-tabs>
			</el-row>
		</div>
	</div>
</template>
<script>
    import ZTab1 from '../nav1/ZTab1.vue'
    import ZTab2 from '../nav1/ZTab2.vue'
    import Tab7 from '../nav1/Tab7.vue'

	export default{
		components:{
			ZTab1,
			ZTab2,
			Tab7,

		},
		data(){
			return{
				data:{},
			}
		},
		methods: {
	      	pic(){
	      		window.open('#/Pic','_blank')
	      	},
	      	edit(){
	      		window.open('#/Edit','_blank')
	      	}
	    },
		mounted(){  
		    var trmsg = sessionStorage.getItem('trmsg')
	    	this.data = JSON.parse(trmsg)
	    	console.log(this.data,'12')
		}
	}
</script>

<style lang="scss" scope>
	
</style>