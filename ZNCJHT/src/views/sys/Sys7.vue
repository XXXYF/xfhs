<template>
	<div>
		<el-tabs type="border-card" class="sys-box">
			<el-tab-pane label="动力性">
				<Sys71></Sys71>
			</el-tab-pane>
			<el-tab-pane label="滑行距离、悬架">
				<Sys72></Sys72>
			</el-tab-pane>
			<el-tab-pane label="排放污染物控制">
				<Sys73></Sys73>
			</el-tab-pane>
			<el-tab-pane label="制动、前照灯">
				<Sys74></Sys74>
			</el-tab-pane>
			<el-tab-pane label="其他">
				<Sys75></Sys75>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import Sys71 from '../sys/Sys71'
	import Sys72 from '../sys/Sys72'
	import Sys73 from '../sys/Sys73'
	import Sys74 from '../sys/Sys74'
	import Sys75 from '../sys/Sys75'
	
	export default{
		components:{
			Sys71,
			Sys72,
			Sys73,
			Sys74,
			Sys75,
		},
		data() {
			return{

			}
		},
		methods: {

		},

	}
</script>