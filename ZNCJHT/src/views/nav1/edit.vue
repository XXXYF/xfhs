<template>
	<div :model="data" class="other-box">
		<p class="title">综检信息——人工信息更改</p>
		<el-collapse accordion  v-model="activeName" class="col-box">
		  	<el-collapse-item title="外观检测信息修改" name="1">
		  		<el-row :gutter="20" class="toolbar col-toolbar" style="padding-bottom: 0px;">
			      	<el-form :inline="true" label-width="30%" class="col-w3">
				        <el-col :span="6">
					        <el-form-item label="助理转向传送带:">
					        	<el-select v-model="data.role" placeholder="请输入用户角色">
					        		<el-option label="警员" value="0"></el-option>
							      	<el-option label="检验机构业务员" value="1"></el-option>
							      	<el-option label="非警员" value="2"></el-option>
							    </el-select>
					        </el-form-item>
					    </el-col>
				        <el-col :span="6">
					        <el-form-item label="空气压缩机传送带:">
					        	<el-select v-model="data.role" placeholder="请输入特征">
					        		<el-option label="警员" value="0"></el-option>
							      	<el-option label="检验机构业务员" value="1"></el-option>
							      	<el-option label="非警员" value="2"></el-option>
							    </el-select>
					        </el-form-item>
					    </el-col>
					    <el-col :span="6">
					        <el-form-item label="燃料供给管道与部件:"  class="">
					        	<el-select v-model="data.role" placeholder="请输入特征">
					        		<el-option label="警员" value="0"></el-option>
							      	<el-option label="检验机构业务员" value="1"></el-option>
							      	<el-option label="非警员" value="2"></el-option>
							    </el-select>
					        </el-form-item>
					    </el-col>
					    <el-col :span="6">
					        <el-form-item label="燃料供给管道与部件:"  class="">
					        	<el-select v-model="data.role" placeholder="请输入特征">
					        		<el-option label="警员" value="0"></el-option>
							      	<el-option label="检验机构业务员" value="1"></el-option>
							      	<el-option label="非警员" value="2"></el-option>
							    </el-select>
					        </el-form-item>
					    </el-col>
			      	</el-form>
			    </el-row>
			    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
		  	</el-collapse-item>
		    <el-collapse-item title="地盘检测信息更改"  name="2">
			    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
			    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
		    </el-collapse-item>
		    <el-collapse-item title="地盘动态检测信息更改"  name="3">
			    <div>简化流程：设计简洁直观的操作流程；</div>
			    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
			    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
		    </el-collapse-item>
		  	<el-collapse-item title="路试检测结束信息更改" name="4">
			    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
			    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="唯一性信息更改"  name="5">
			    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
			    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
		    </el-collapse-item>
		    <el-collapse-item title="路障信息诊断更改"  name="6">
			    <div>简化流程：设计简洁直观的操作流程；</div>
			    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
			    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
		    </el-collapse-item>
		  	<el-collapse-item title="测量项更改" name="7">
			    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
			    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="分级项更改" name="8">
			    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
			    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  	</el-collapse-item>
		</el-collapse>
		<p class="f-tc">
			<el-button type="primary">保存</el-button>
			<el-button type="warning">取消</el-button>
		</p>
	</div>
</template>


<script>
	export default{
		data() {
			return {
				data:{},
				activeName: '1' ,
			}
		},
		mounted(){
	    	
	    	 var trmsg = sessionStorage.getItem('trmsg')
	    	 this.data = JSON.parse(trmsg)

	    	console.log(this.data,'454545555555555555')
	    }
	}
</script>
<style scoped>

</style>