<template>
	<div>
		<el-tabs type="border-card" class="sys-box">
			<el-tab-pane label="Pad设备管理">
				<Sys1></Sys1>
			</el-tab-pane>
			<el-tab-pane label="视频参数配置">
				<Sys2></Sys2>
			</el-tab-pane>
			<el-tab-pane label="系统参数配置">
				<Sys3></Sys3>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import Sys1 from '../sys/Sys1'
	import Sys2 from '../sys/Sys2'
	import Sys3 from '../sys/Sys3'
	export default{
		components:{
			Sys1,
			Sys2,
			Sys3,
		},
		data() {
			return{

			}
		},
		methods: {

		},

	}
</script>