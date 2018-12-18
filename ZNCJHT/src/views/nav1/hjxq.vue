<template>
	<div class="tab-content">
		<div class="tab-box">
			<p class="hd">环检信息详情</p>
			<el-row class="tab-cont">
				<el-tabs type="border-card">
				  <el-tab-pane label="车辆登记信息">
				    <HTab1></HTab1>
				  </el-tab-pane>
				  <el-tab-pane label="车辆外检信息">
				  	<HTab2></HTab2>
				  </el-tab-pane>
				  <el-tab-pane label="车辆照片信息">
				  	<HTab3></HTab3>
				  </el-tab-pane>
				  <el-tab-pane label="检测结果数据">
				    <HTab4></HTab4>
				  </el-tab-pane>
				  <el-tab-pane label="检测过程数据">
				    <HTab5></HTab5>
				  </el-tab-pane>
				  <el-tab-pane label="车辆检测视频">
				  	<HTab6></HTab6>
				  </el-tab-pane>
				  <el-tab-pane label="车检报告单">
				  	<HTab7></HTab7>
				  </el-tab-pane>
				  <el-tab-pane label="车辆检测信息上传结果">
				    <HTab8></HTab8>
				  </el-tab-pane>
				</el-tabs>
			</el-row>
		</div>
	</div>
</template>
<script>
    import HTab1 from '../nav1/HTab1.vue'
    import HTab2 from '../nav1/HTab2.vue'
    import HTab3 from '../nav1/HTab3.vue'
    import HTab4 from '../nav1/HTab4.vue'
    import HTab5 from '../nav1/HTab5.vue'
    import HTab6 from '../nav1/HTab6.vue'
    import HTab7 from '../nav1/HTab7.vue'
    import HTab8 from '../nav1/HTab8.vue'

	export default{
		components:{
			HTab1,
			HTab2,
			HTab3,
			HTab4,
			HTab5,
			HTab6,
			HTab7,
			HTab8,
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
			this.data =this.$route.query.userId
		}
	}
</script>

<style lang="scss" scope>

</style>