<template>
	<div>
		<el-tabs type="border-card" class="sys-box">
			<el-tab-pane label="台式制动设备">
				<Sys61></Sys61>
			</el-tab-pane>
			<el-tab-pane label="路试制动设备">
				<Sys62></Sys62>
			</el-tab-pane>
			<el-tab-pane label="前照灯">
				<Sys63></Sys63>
			</el-tab-pane>
			<el-tab-pane label="外廓尺寸">
				<Sys64></Sys64>
			</el-tab-pane>
			<el-tab-pane label="车速、侧滑、整备、质量、其他">
				<Sys65></Sys65>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import Sys61 from '../sys/Sys61'
	import Sys62 from '../sys/Sys62'
	import Sys63 from '../sys/Sys63'
	import Sys64 from '../sys/Sys64'
	import Sys65 from '../sys/Sys65'
	
	export default{
		components:{
			Sys61,
			Sys62,
			Sys63,
			Sys64,
			Sys65,
		},
		data() {
			return{

			}
		},
		methods: {

		},

	}
</script>