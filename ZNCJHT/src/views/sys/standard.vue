<template>
	<div>
		<el-tabs type="border-card" class="card-box">
			<!-- 照片视频参数配置 -->
			<el-tab-pane label="机动车安全性能检测标准" class="card-lst"> 
				<Sys6></Sys6>
			</el-tab-pane>
			<!-- 信息代码配置 -->
			<el-tab-pane label="机动车综合性能检测标准" class="card-lst">
				<Sys7></Sys7>
			</el-tab-pane>
			<el-tab-pane label="机动车排放污染物检测标准" class="card-lst">
				<Sys8></Sys8>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>


<script>
	import Sys7 from '../sys/Sys7'
	import Sys8 from '../sys/Sys8'
	import Sys6 from '../sys/Sys6'

	export default {
		components: {
			// Sys4,
			Sys8,
			Sys6,
			Sys7,
		},
		data() {
			return {

			}
		},
	}
</script>

<style scoped>
	
</style>