<template>
	<div class="tab-content">
		<div class="tab-box">
			<p class="hd">安检信息详情</p>
			<el-row class="tab-cont">
				<el-tabs type="border-card">
				  <el-tab-pane label="人工外观检测">
				    <Tab1></Tab1>
				  </el-tab-pane>
				  <el-tab-pane label="仪器设备检验">
				  	<Tab2></Tab2>
				  </el-tab-pane>
				  <el-tab-pane label="检验过程">
				  	<Tab3></Tab3>
				  </el-tab-pane>
				  <el-tab-pane label="检验报告">
				  	<Tab4></Tab4>
				  </el-tab-pane>
				  <el-tab-pane label="制动力曲线">
				  	<Tab5></Tab5>
				  </el-tab-pane>
				  <el-tab-pane label="检验照片">
				  	<Tab7></Tab7>
				  </el-tab-pane>
				  <el-tab-pane label="检验视频">
				  	<Tab8></Tab8>
				  </el-tab-pane>
				  <el-tab-pane label="预警信息">
				  	<Tab6></Tab6>
				  </el-tab-pane>
				</el-tabs>
			</el-row>
		</div>
	</div>
</template>
<script>
    import Tab1 from '../nav1/Tab1.vue'
    import Tab2 from '../nav1/Tab2.vue'
    import Tab3 from '../nav1/Tab3.vue'
    import Tab4 from '../nav1/Tab4.vue'
    import Tab5 from '../nav1/Tab5.vue'
    import Tab6 from '../nav1/Tab6.vue'
    import Tab7 from '../nav1/Tab7.vue'
    import Tab8 from '../nav1/Tab8.vue'
	export default{
		components:{
			Tab1,
			Tab2,
			Tab3,
			Tab4,
			Tab5,
			Tab6,
			Tab7,
			Tab8

		},
		data(){
			return{
				data:{},
			}
		},
		methods: {
	      
	    },
		mounted(){  
		//mountedel 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。

			//替换传输过来的数据路径
			// this.data =this.$route.query.userId
		}
	}
</script>

<style lang="scss" scope>
	.tab-content{
		background-color:#fff;
		min-height:800px;
	}
	.tab-box{
		display:block;
		background-color:#fff;
		padding-top:20px;
		width:1160px;
		margin:0px auto;
		.hd{
			padding:20px;
			margin-bottom:0;
			border:1px solid #ccc;
			border-bottom:0px solid #ccc;
		}
		.tab-cont{
			padding:0 0px 20px;
			.el-tabs__content{
				
			}
		}

	}
</style>