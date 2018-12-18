<template>
	<div class="form-box">
		<el-form :model="filters" :rules="rules2"  :inline="true" ref="filters" id="filters" label-width="120px">
			<el-form-item label="标题：" prop="bt">
				<el-input v-model="filters.bt" placeholder="请输入标题"></el-input>
			</el-form-item>
			<el-form-item label="缩略图：">
				<el-upload
				  action="api/Upload/"
				  list-type="picture-card"
				  :on-preview="handlePictureCardPreview"
				  :on-remove="handleRemove">
				  <i class="el-icon-plus"></i>
				</el-upload>
				<el-dialog :visible.sync="dialogVisible" >
				  <img width="100%" :src="dialogImageUrl" alt="">
				</el-dialog>
			</el-form-item>
			<el-form-item label="文章内容：" prop="content">
				<quill-editor v-model="filters.content" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @change="onEditorChange($event)" class="cont">
		    	</quill-editor>
		    </el-form-item>
		    <el-form-item label="      ">
		    	<el-button type="danger" @click="getUsers">发布</el-button>
		    	<el-button type="warning" @click="resetForm">重置</el-button>
		    </el-form-item>
		</el-form>
	</div>
</template>
<script>
	import { quillEditor } from 'vue-quill-editor'
    import axios from 'axios';
    import qs from 'qs';

	export default{
		data(){
			return{
				filters:{
					bt:'', //标题
					content:'', // 文章内容
				},
                rules2: {
                    bt: [
                        { required: true, message: '请输入标题', trigger: 'blur' },
                        // { min: 6, max: 14, message:'账号为6-14位', trigger:'blur'}
                        //{ validator: validaePass }
                    ],
                    content: [
                        { required: true, message: '请输入文章内容', trigger: 'blur' },
                        //{ validator: validaePass2 }
                    ]
                },
				dialogImageUrl: '',
	        	dialogVisible: false,
	        	editorOption:{},  // 文章内容
			}
		},
		methods:{
			handleRemove(file, fileList) {
	        	console.log(file, fileList);
	      	},
	      	handlePictureCardPreview(file) {

	        	this.dialogImageUrl = file.url;
	        	this.dialogVisible = true;
	      	},
	      	onEditorBlur(){//失去焦点事件
				console.log('1')
            },
            onEditorFocus(){//获得焦点事件
            	console.log('2')
            },
            onEditorChange(){//内容改变事件
            	console.log('3')
            },
            getUsers(){
                this.$refs.filters.validate((valid) => {
                    if (valid) {

                        let mn = {
                            "bt":this.filters.bt, //标题
                            "content":this.filters.content, // 文章内容
                        }
                        var json =JSON.stringify(mn);
                        let para = {
                            apiId: "adminNewsadd",
                            jsonData:json
                        };
                        this.logining = true;
                        axios.post('api/AdminCommon', qs.stringify(para),{
                            headers: {
                                "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                // "Content-Type":"application/json; charset=UTF-8",
                            },
                            withCredentials:true,
                        }).then((response) =>{
                            this.logining = false;
                            this.$message({
                                message: '新增成功',
                                type: 'success'
                            });
                        }).catch((response) =>{
                            this.logining = false;
                            this.$message({
                                message: '新增失败',
                                type: 'success'
                            });

                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // 重置
            resetForm(){
            	this.filters = Object.assign({})
            }
		},
		mounted(){

		}
	}
</script>

<style scoped>
	.cont{
		margin-top: -30px;
		margin-left: 120px;
	}
	.cont .ql-editor{
		height: 400px;
	}
</style>