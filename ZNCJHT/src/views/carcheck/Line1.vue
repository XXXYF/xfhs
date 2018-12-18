<template>
	<div class="line-box">
		<el-row :gutter="20" class="toolbar" style="padding-bottom: 0px;">
	      	<el-form :inline="true" :model="filters" label-width="30%" class="fil-box max-ht">
		        <el-col :span="16">
			        <el-form-item label="设备编号:" class="first-item min-ht">
			          <el-input v-model="filters.no" placeholder="请输入设备编号"></el-input>
			        </el-form-item>
			    </el-col>
			    <el-col :span="8">
			        <el-form-item label="设备检定/校正证书编号:">
			          <el-input v-model="filters.name" placeholder="请输入设备检定/校正证书编号"></el-input>
			        </el-form-item>
			    </el-col>
		        <el-col :span="16">
			        <el-form-item label="设备名称:" class="first-item min-ht">
			          <el-input v-model="filters.name" placeholder="请输入设备名称"></el-input>
			        </el-form-item>
			    </el-col>
		        <el-col :span="8">
			        <el-form-item label="设备型号:" class="min-ht">
			          <el-input v-model="filters.name" placeholder="请输入设备型号"></el-input>
			        </el-form-item>
			    </el-col>
		        <el-col :span="16">
			        <el-form-item label="生产厂家:" class="first-item min-ht">
			          <el-input v-model="filters.name" placeholder="请输入生产厂家"></el-input>
			        </el-form-item>
			    </el-col>
		        <el-col :span="8">
			        <el-form-item label="检测最少时间:">
			          <el-input v-model="filters.name" placeholder="请输入检测最少时间"></el-input>
			        </el-form-item>
			    </el-col>
		        <el-col :span="8">
			        <el-form-item label="检测方式:" class="min-ht">
			          <el-input v-model="filters.name" placeholder="请输入检测方式"></el-input>
			        </el-form-item>
			    </el-col>
			    <el-col :span="8">
			        <el-form-item label="平板制式:" class="min-ht">
			          <el-input v-model="filters.name" placeholder="请输入平板制式"></el-input>
			        </el-form-item>
			    </el-col>
			    <el-col :span="8">
			        <el-form-item label="单平板长度:" class="min-ht">
			          <el-input v-model="filters.name" placeholder="请输入单平板长度"></el-input>
			        </el-form-item>
			    </el-col>

			    <el-col :span="8">
			        <el-form-item label="平板间距:" class="min-ht">
			          <el-input v-model="filters.name" placeholder="请输入平板间距"></el-input>
			        </el-form-item>
			    </el-col>
			    <el-col :span="8">
			        <el-form-item label="滚筒制式:" class="min-ht">
			          <el-input v-model="filters.name" placeholder="请输入滚筒制式"></el-input>
			        </el-form-item>
			    </el-col>
			    <el-col :span="8">
			        <el-form-item label="滚筒停机方式:">
			          <el-input v-model="filters.name" placeholder="请输入滚筒停机方式"></el-input>
			        </el-form-item>
			    </el-col>

			    <el-col :span="8">
			        <el-form-item label="启用日期:" class="min-ht">
			          <el-input v-model="filters.name" placeholder="请输入启用日期"></el-input>
			        </el-form-item>
			    </el-col>
			    <el-col :span="8">
			        <el-form-item label="检定/校准有效期止:">
			          <el-input v-model="filters.name" placeholder="请输入检定/校准有效期止"></el-input>
			        </el-form-item>
			    </el-col>
			    <el-col :span="8">
			        <el-form-item label="设备状态:" class="min-ht">
			          <el-input v-model="filters.name" placeholder="请输入设备状态"></el-input>
			        </el-form-item>
			    </el-col>
	      	</el-form>
	    </el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				filters:{},
			}
		},
		methods:{

		},

		mounted() {
			 var trmsg = sessionStorage.getItem('trmsg')
	    	 // this.data = JSON.parse(trmsg)
	    	 this.filters = JSON.parse(trmsg)
	    	 // console.log(this.filters,'45454')
		}
	}
</script>
<style scoped>
	.line-box .el-input__inner{
		width: 100%;
	}
	.line-box .el-form-item__content{
		width: 70%;
	}
	.line-box .el-form-item{
		width: 100%;
	}
</style>