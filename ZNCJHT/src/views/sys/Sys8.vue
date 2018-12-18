<template>
	<div>
		<el-tabs type="border-card" class="sys-box">
			<el-tab-pane label="汽车双怠速法">
				<Sys81></Sys81>
			</el-tab-pane>
			<el-tab-pane label="自由加速不透光烟度">
				<Sys82></Sys82>
			</el-tab-pane>
			<el-tab-pane label="自由加速滤纸式烟度">
				<Sys83></Sys83>
			</el-tab-pane>
			<el-tab-pane label="摩托车双怠速">
				<Sys84></Sys84>
			</el-tab-pane>
			<!-- <el-tab-pane label="车速、侧滑、整备、质量、其他">
				<Sys85></Sys85>
			</el-tab-pane> -->
		</el-tabs>
	</div>
</template>

<script>
	import Sys81 from '../sys/Sys81'
	import Sys82 from '../sys/Sys82'
	import Sys83 from '../sys/Sys83'
	import Sys84 from '../sys/Sys84'
	// import Sys85 from '../sys/Sys85'
	
	export default{
		components:{
			Sys81,
			Sys82,
			Sys83,
			Sys84,
			// Sys85,
		},
		data() {
			return{

			}
		},
		methods: {

		},

	}
</script>