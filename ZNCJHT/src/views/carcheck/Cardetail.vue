<template>
	<div class="cont-box">
		<div class="third-box">
			<div class="third-ct">
				<p class="name">xx机动车检测服务公司</p>
				<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			      	<el-form :inline="true" :model="filters" label-width="170px" class="fil-box seco-box">
				        <el-form-item label="安检机构编号:">
				          <el-input v-model="filters.no" placeholder="请输入安检机构编号"></el-input>
				        </el-form-item>
				         <el-form-item label="安检机构名称:">
				          <el-input v-model="filters.name" placeholder="请输入安检机构名称"></el-input>
				        </el-form-item>
				         <el-form-item label="资格许可证书编号:">
				          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
				        </el-form-item>
				         <el-form-item label="是否与公安网联网:">
				          <el-input v-model="filters.no" placeholder="请输入公安网联网状态"></el-input>
				        </el-form-item>
				         <el-form-item label="状态标记:">
				          <el-input v-model="filters.no" placeholder="请输入状态标记"></el-input>
				        </el-form-item>
				         <el-form-item label="资格许可有效期始:">
				          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
				        </el-form-item>
				         <el-form-item label="资格许可有效期止:">
				          <el-input v-model="filters.no" placeholder="请输入资格许可有效期止"></el-input>
				        </el-form-item>
				         <el-form-item label="外检工位人数:">
				          <el-input v-model="filters.no" placeholder="请输入外检工位人数"></el-input>
				        </el-form-item>
				         <el-form-item label="录入工位人数:">
				          <el-input v-model="filters.no" placeholder="请输入录入工位人数"></el-input>
				        </el-form-item>
				         <el-form-item label="检测人员总数:">
				          <el-input v-model="filters.no" placeholder="请输入检测人员总数"></el-input>
				        </el-form-item>
				         <el-form-item label="地盘工位人数:">
				          <el-input v-model="filters.no" placeholder="请输入地盘工位人数"></el-input>
				        </el-form-item>
				         <el-form-item label="总检工位人数:">
				          <el-input v-model="filters.no" placeholder="请输入总检工位人数"></el-input>
				        </el-form-item>
				         <el-form-item label="引车员人数:">
				          <el-input v-model="filters.no" placeholder="请输入引车员人数"></el-input>
				        </el-form-item>
				         <el-form-item label="通过省级质检考核人数:">
				          <el-input v-model="filters.no" placeholder="请输入通过省级质检考核人数"></el-input>
				        </el-form-item>
				         <el-form-item label="未通过省级质检考核人数:">
				          <el-input v-model="filters.no" placeholder="请输入未通过省级质检考核人数"></el-input>
				        </el-form-item>

			      	</el-form>
			    </el-col>
			</div>
		</div>
		<p class="btn">
			<el-button type="warning" @click="back">返回</el-button>
		</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				filters:{},
			}
		},
		methods:{
			// formatRole :function(row,colume) {
			// 	return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			// },
			back: function(){
				window.history.go(-1)
				var box = document.getElementsByClassName("router-link-active");
				box[0].classList.add("aa")
				// console.log(box[0].value);
			},
		},
		mounted() {
			 var trmsg = sessionStorage.getItem('trmsg')
	    	 // this.data = JSON.parse(trmsg)
	    	 this.filters = JSON.parse(trmsg)
	    	 console.log(this.filters,'45454')
		}
	}
</script>

<style scoped>
	.seco-box .el-form-item__label{
		line-height: 40px!important;
	}
</style>