<template>
	<div :model="data" class="other-box">
		<!-- <h1>{{data.name}}</h1> -->
		<p class="title">综检信息——照片补传</p>
		<el-collapse accordion  v-model="activeName" class="col-box">
		  	<el-collapse-item title="制动照片" name="1">
		  		<el-row :gutter="20" class="toolbar col-toolbar" style="padding-bottom: 0px;">
		  			<el-form label-width="80px">
						<el-form-item >
							<el-upload
							  class="upload-demo"
							  action="https://jsonplaceholder.typicode.com/posts/"
							  :on-preview="handlePreview"
							  :on-remove="handleRemove"
							  :file-list="fileList2"
							  list-type="picture">
							  <el-button size="small" type="primary" class="load-btn">点击上传</el-button>
							  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
							</el-upload>
						</el-form-item>
					</el-form>
			    </el-row>
		  	</el-collapse-item>
		    <el-collapse-item title="灯光照片"  name="2">
			    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
			    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
		    </el-collapse-item>
		    <el-collapse-item title="车速照片"  name="3">
			    <div>简化流程：设计简洁直观的操作流程；</div>
			    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
			    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
		    </el-collapse-item>
		  	<el-collapse-item title="测功照片" name="4">
			    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
			    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="侧滑照片"  name="5">
			    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
			    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
		    </el-collapse-item>
		    <el-collapse-item title="尾气照片"  name="6">
			    <div>简化流程：设计简洁直观的操作流程；</div>
			    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
			    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
		    </el-collapse-item>
		  	<el-collapse-item title="行驶证照片" name="7">
			    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
			    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="外观照片" name="8">
			    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
			    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="地盘照片" name="9">
			    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
			    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
		  	</el-collapse-item>
		  	<el-collapse-item title="路试照片" name="10">
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
		data(){
			return{
				data:{},
				activeName: '1' ,
				fileList2: [
				{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
				{name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
				]
      			}
		},
		methods:{
			submitUpload() {
		        this.$refs.upload.submit();
		    },
		    handleRemove(file, fileList) {
		        console.log(file, fileList);
		    },
		    handlePreview(file) {
		        console.log(file);
		    },
		},
	    mounted(){
	    	
	    	 var trmsg = sessionStorage.getItem('trmsg')
	    	 this.data = JSON.parse(trmsg)

	    	console.log(this.data,'454545555555555555')
	    }

	}
</script>

<style lang="scss" scope>
	body{
		background-color:#fff;
	}
	.other-box{
		width:1160px;
		margin:0 auto;
		.title{
			padding:0 20px;
			background-color:#1080d6;
			color:#fff;
			height:60px;
			line-height:60px;
			margin-bottom:0;
		}
		.min-tit{
			height:40px;
			line-height:40px;
			border:1px solid #e6e6e6;
			border-left:3px solid #1080d6;
			padding-left:10px;			
		}
		.min-cont{
			border:1px solid #e6e6e6;
			padding:10px;
		}
	}
	.upload-demo{
		width:100%;
	}
	.upload-demo .el-upload-list__item{
		width:48%;
		float:left;
	}
	.upload-demo .el-upload-list__item:nth-child(2n){
		margin-left:4%;
	}
	.load-btn{
		display:block; 
		width:88px;
		height:34px;
	}
	
</style>