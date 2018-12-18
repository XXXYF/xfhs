<template>
	<div class="lst-box">
		<el-tabs v-model="activeName" @tab-click="handleClick" type="card">
		    <el-tab-pane label="制动设备检测信息" name="first">
		    	<Line1></Line1>
		    </el-tab-pane>
		    <el-tab-pane label="灯光检测设备信息" name="second">
		    	<Line2></Line2>
		    </el-tab-pane>
		    <el-tab-pane label="侧滑检测设备信息" name="third">
		    	<Line3></Line3>
		    </el-tab-pane>
		    <el-tab-pane label="称重检测设备信息" name="fourth">
		    	<Line4></Line4>
		    </el-tab-pane>
		    <el-tab-pane label="速度检测设备信息" name="five">
		    	<Line5></Line5>
		    </el-tab-pane>
		    <el-tab-pane label="其他检测" name="six">
		    	<Line6></Line6>
		    </el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	import Line1 from '../carcheck/Line1'
	import Line2 from '../carcheck/Line2'
	import Line3 from '../carcheck/Line3'
	import Line4 from '../carcheck/Line4'
	import Line5 from '../carcheck/Line5'
	import Line6 from '../carcheck/Line6'

	export default{
		components:{
			Line1,
			Line2,
			Line3,
			Line4,
			Line5,
			Line6,
		},
		data(){
			return{
				activeName:'first'
			}
		},
		methods:{
			handleClick(tab, event) {
		        // console.log(tab, event);
		        console.log('11')
		    }
		},
	}
</script>

<style>
	.lst-box{
		display: block;
		float: left;
		width: 100%;
		margin-top:30px;
	}
</style>