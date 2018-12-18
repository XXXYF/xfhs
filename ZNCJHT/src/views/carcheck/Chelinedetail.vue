<template>
	<div class="cont-box">
		<div class="third-box">
			<div class="third-ct">
				<p class="name">xx机动车检测线设备详情</p>
				<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			      	<el-form :inline="true" :model="filters" label-width="170px" class="fil-box seco-box">
				        <el-form-item label="检测线名称:" class="min-ht">
				          <el-input v-model="filters.no" placeholder="请输入检测线名称"></el-input>
				        </el-form-item>
				        <el-form-item label="状态:" class="min-ht">
				          <el-input v-model="filters.name" placeholder="请输入状态"></el-input>
				        </el-form-item>
				        <el-form-item label="资格许可证书编号:" class="min-ht">
				          <el-input v-model="filters.bookno" placeholder="请输入资格许可证书编号"></el-input>
				        </el-form-item>
				        <el-form-item label="检测线类别:" class="min-ht">
				          <el-input v-model="filters.no" placeholder="请输入检测线类别"></el-input>
				        </el-form-item>
				        <el-form-item label="控制方式:" class="min-ht">
				          <el-input v-model="filters.no" placeholder="请输入控制方式"></el-input>
				        </el-form-item>
				        <el-form-item label="资格许可有效期始:" class="min-ht">
				          <el-input v-model="filters.no" placeholder="请输入资格许可有效期始"></el-input>
				        </el-form-item>
			      	</el-form>
			    </el-col>
			</div>
		    <!-- <el-col :span="24" >
				<Tab-view></Tab-view>
			</el-col> -->
			<Tabview></Tabview>
		</div>
		<p class="btn">
			<el-button type="warning" @click="back">返回</el-button>
		</p>
	</div>
</template>

<script>
	import Tabview from '../carcheck/TabView'

	export default{
		components:{
	      Tabview,
	    },
		data(){
			return {
				filters:{},
			}
		},
		methods:{
			back: function(){
				window.history.go(-1)
				var box = document.getElementsByClassName("router-link-active");
				box[0].classList.add("aa")
				// console.log(box[0].value);
			},
			// handleClick(tab, event) {
   //              console.log(tab, event);
   //      	}
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
</style>