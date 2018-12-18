<template>
	<div :model="data">
		<div class="hj-box">
			<p class="name">基本信息</p>
			<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="150px" class="">
			        <el-form-item label="车辆识别代号:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="整备质量:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			         <el-form-item label="行政区划:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			         <el-form-item label="车辆类型:">
			          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
			        </el-form-item>
			         <el-form-item label="车辆品牌(中文):">
			          <el-input v-model="filters.no" placeholder="请输入状态标记"></el-input>
			        </el-form-item>
			         <el-form-item label="初次登记日期:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
			        </el-form-item>
			         <el-form-item label="车辆型号:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
			        </el-form-item>
			         <el-form-item label="检验机构编码:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="检验方法:">
			          	<el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
			        </el-form-item>
			         <el-form-item label="国产机构:">
			          <el-input v-model="filters.no" placeholder="请输入检测人员总数"></el-input>
			        </el-form-item>
			         <el-form-item label="生产厂商名称:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="号牌号码:">
			          <el-input v-model="filters.no" placeholder="请输入总检工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="检测线编码:">
			          <el-input v-model="filters.no" placeholder="请输入引车员人数"></el-input>
			        </el-form-item>
			         <el-form-item label="车身颜色:">
			          <el-input v-model="filters.no" placeholder="请输入通过省级质检考核人数"></el-input>
			        </el-form-item>
			         <el-form-item label="总质量:">
			          <el-input v-model="filters.no" placeholder="请输入未通过省级质检考核人数"></el-input>
			        </el-form-item>

			        <el-form-item label="检验报告编码:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="所有人:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			        <el-form-item label="检验类别:">
				        <el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
			        </el-form-item>
			         <el-form-item label="车辆类型:">
			          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
			        </el-form-item>
			         <el-form-item label="使用性质:">
			          <el-input v-model="filters.no" placeholder="请输入状态标记"></el-input>
			        </el-form-item>
			         <el-form-item label="核定载质量:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
			        </el-form-item>
			         <el-form-item label="发动机号:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
			        </el-form-item>
			         <el-form-item label="号牌种类:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="首检检验流水号:">
			          <el-input v-model="filters.no" placeholder="请输入录入工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="燃料种类:">
			          	<el-select v-model="filters.orgname" placeholder="全部" style="width:190px;" >
							<el-option label="安检1" value="1"></el-option>
							<el-option label="综检2" value="2"></el-option>
							<el-option label="环检3" value="3"></el-option>
						</el-select>
			        </el-form-item>
			         <el-form-item label="核定载客:">
			          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="发动机型号:">
			          <el-input v-model="filters.no" placeholder="请输入总检工位人数"></el-input>
			        </el-form-item>
			         <el-form-item label="号牌颜色:">
			          <el-input v-model="filters.no" placeholder="请输入引车员人数"></el-input>
			        </el-form-item>
			         <el-form-item label="检验状态:">
			          <el-input v-model="filters.no" placeholder="请输入通过省级质检考核人数"></el-input>
			        </el-form-item>
		      	</el-form>
		    </el-col>
		    <i class="f-hr20"></i>
		    <p class="name">其他信息</p>
		    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="150px" class="">
			        <el-form-item label="出厂日期:">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
			        </el-form-item>
			         <el-form-item label="登记员姓名:">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
			        </el-form-item>
			         <el-form-item label="外检员姓名:">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
			        </el-form-item>
			         <el-form-item label="操作员姓名:">
			          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
			        </el-form-item>
			         <el-form-item label="插管员姓名:">
			          <el-input v-model="filters.no" placeholder="请输入状态标记"></el-input>
			        </el-form-item>
			         <el-form-item label="登记时间:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
			        </el-form-item>
			         <el-form-item label="引车员姓名:">
			          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
			        </el-form-item>
			         <el-form-item label="送检人:">
			          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
			        </el-form-item>
		      	</el-form>
		    </el-col>
		    <i class="f-hr20"></i>
		    <p class="name">备注</p>
		    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
		      	<el-form :inline="true" :model="filters" label-width="150px" class="">
			        <el-form-item label="送检人备注:" style="width:100%">
			          <el-input v-model="filters.no" placeholder="请输入安检机构编号" style="width:800px"></el-input>
			        </el-form-item>
			         <el-form-item label="登记备注:" style="width:100%">
			          <el-input v-model="filters.name" placeholder="请输入安检机构名称" style="width:800px"></el-input>
			        </el-form-item>
			        <el-form-item label="备注:" style="width:100%">
			          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号" style="width:800px"></el-input>
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
