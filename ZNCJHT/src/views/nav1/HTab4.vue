<template>
	<div :model="data">
		<div class="hj-box">
			<p class="name">基本信息</p>
			<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="150px" class="">
			        <el-form-item label="检验报告编码:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="检验类别:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			         <el-form-item label="号牌颜色:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			         <el-form-item label="车辆识别代号:">
			          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
			        </el-form-item>
			         <el-form-item label="所有人:">
			          <el-input v-model="filters.no" placeholder="请输入状态标记"></el-input>
			        </el-form-item>
			         <el-form-item label="检测线编码:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
			        </el-form-item>
			         <el-form-item label="检验方法:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
			        </el-form-item>
			         <el-form-item label="号牌种类:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="车辆型号:">
			          <el-input v-model="filters.no" placeholder="请输入检测人员总数"></el-input>
			        </el-form-item>
			         <el-form-item label="燃料种类:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="初次登记日期:">
			          <el-input v-model="filters.no" placeholder="请输入总检工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="行政区划:">
			          <el-input v-model="filters.no" placeholder="请输入引车员人数"></el-input>
			        </el-form-item>
			         <el-form-item label="车辆类型:">
			          <el-input v-model="filters.no" placeholder="请输入通过省级质检考核人数"></el-input>
			        </el-form-item>
			         <el-form-item label="发动机型号:">
			          <el-input v-model="filters.no" placeholder="请输入未通过省级质检考核人数"></el-input>
			        </el-form-item>

			        <el-form-item label="车辆品牌:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="出厂日期:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			         <el-form-item label="号牌号码:">
			          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
			        </el-form-item>
			        
		      	</el-form>
		    </el-col>
		    <i class="f-hr20"></i>
		    <p class="name">检测参数</p>
		    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="150px" class="">
			        <el-form-item label="上线开始时间:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="温度:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			         <el-form-item label="发动机转速:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			        <el-form-item label="计算机滚筒线速度:">
			          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
			        </el-form-item>
			        <el-form-item label="驱动轮胎气压:">
			          <el-input v-model="filters.no" placeholder="请输入状态标记"></el-input>
			        </el-form-item>
			        <el-form-item label="上线结束时间:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
			        </el-form-item>
			        <el-form-item label="气压:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
			        </el-form-item>
			        <el-form-item label="采样深度:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="实际滚筒线速度:">
			          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
			        </el-form-item>
			         <el-form-item label="流量:">
			          <el-input v-model="filters.no" placeholder="请输入状态标记"></el-input>
			        </el-form-item>
			         <el-form-item label="实测最大轮边功率:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
			        </el-form-item>
			         <el-form-item label="温度:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
			        </el-form-item>
			        <el-form-item label="功率修正系数:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="总加载功率:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="上线结果判定:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			        <el-form-item label="校正最大轮边功率:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
		      	</el-form>
		    </el-col>
		    <i class="f-hr20"></i>
		    <p class="name">简易瞬态工况法检测参数</p>
		    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="150px" class="">
			        <el-form-item label="HC质量检测值:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="HC质量判定:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			        <el-form-item label="CO质量限值:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			        <el-form-item label="NOX质量检测值:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			        <el-form-item label="NOX质量判定:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			        <el-form-item label="HCNOX质量限值:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			        <el-form-item label="HC质量限值:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			        <el-form-item label="CO质量检测值:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			        <el-form-item label="CO质量判定:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			        <el-form-item label="NOX质量限值:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			        <el-form-item label="HCNOX质量检测值:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			        <el-form-item label="HCNOX质量判定:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
		      	</el-form>
		    </el-col>
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
