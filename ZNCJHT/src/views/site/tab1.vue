<template>
	<div class="form-box">
		<el-form :model="filters" :rules="rules2" :inline="true" ref="filters" label-width="120px" id="filters">
			<el-form-item label="公司图片：">
				<!--<el-upload-->
						<!--ref = 'upload'-->
						<!--action="api/upload/commonAccess"-->
						<!--:data="imgdata"-->
						<!--list-type="picture-card"-->
						<!--:on-preview="handlePictureCardPreview"-->
						<!--:on-remove="handleRemove"-->
						<!--:on-success="handleAvatarSuccess">-->
					<!--<i class="el-icon-plus"></i>-->
				<!--</el-upload>-->
				<!--<el-dialog :visible.sync="dialogVisible">-->
				  <!--<img width="100%" :src="dialogImageUrl" alt="">-->
				<!--</el-dialog>-->
				<el-upload
						class="upload-demo"
						action="api/upload/commonAccess"
						:data="imgdata"
						:before-upload="onBeforeUpload"
						:on-preview="handlePreview"
						:on-remove="handleRemove"
						:on-success="handleAvatarSuccess"
						:before-remove="beforeRemove"
						:file-list="fileList2"
						list-type="picture">
					<el-button size="small" type="primary">点击上传</el-button>
					<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-form-item>
			<el-form-item label="公司简介：" prop="profile">
				<quill-editor v-model="filters.profile" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @change="onEditorChange($event)" class="cont">
		    	</quill-editor>
			</el-form-item>
			<el-form-item label="公司名称：" prop="companyName">
				<el-input type="" v-model="filters.companyName" placeholder="请输入公司名称"></el-input>
			</el-form-item>
			<el-form-item label="企业类型：" prop="type">
				<el-select v-model="filters.type" placeholder="">
					<el-option label="检测站" value="1"></el-option>
					<el-option label="保险公司" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="预约检测类别：" prop="bookingType">
				<el-select v-model="filters.bookingType" placeholder="">
					<el-option label="检测站" value="1"></el-option>
					<el-option label="保险公司" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="公司状态：" prop="status">
				<el-select v-model="filters.status" placeholder="">
					<el-option label="开启" value="1"></el-option>
					<el-option label="关闭" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="公司地址：" prop="address">
				<el-input v-model="filters.address" placeholder="请输入公司地址"></el-input>
			</el-form-item>
			<el-form-item label="等级：" prop="level">
				<el-input v-model="filters.level" placeholder="请输入等级"></el-input>
			</el-form-item>

			<el-form-item label="公司微信号：" prop="companyWeChatNo">
				<el-input v-model="filters.companyWeChatNo"  placeholder="请输入公司微信号"></el-input>
			</el-form-item>
			<el-form-item label="手机：" prop="telephone">
				<el-input v-model="filters.telephone"  placeholder="请输入手机"></el-input>
			</el-form-item>
			<el-form-item label="经度：" prop="longitude">
				<el-input v-model="filters.longitude"  placeholder="请输入经度"></el-input>
			</el-form-item>
			<el-form-item label="纬度：" prop="latitude">
				<el-input v-model="filters.latitude"  placeholder="请输入纬度"></el-input>
			</el-form-item>
			<el-form-item label="行政区域代码：" prop="areaCode">
				<el-input v-model="filters.areaCode"  placeholder="请输入行政区域代码"></el-input>
			</el-form-item>



			<el-form-item label="      ">
		    	<el-button type="danger" @click="getUsers">保存</el-button>
		    	<el-button type="warning" @click="resetForm">重置</el-button>
		    </el-form-item>

		</el-form>
		<!-- 轮播图 -->
		
	</div>
</template>


<script>
    import { requestLogin } from '../../api/api';

    import { quillEditor } from 'vue-quill-editor'
    import axios from 'axios';
    import qs from 'qs';
    import {isvalidPhone} from '../../api/validate'
	export default{
		data(){
            //定义一个全局的变量，谁用谁知道
            var validPhone=(rule, value,callback)=>{
                if (!value){
                    callback(new Error('请输入电话号码'))
                }else  if (!isvalidPhone(value)){
                    callback(new Error('请输入正确的11位手机号码'))
                }else {
                    callback()
                }
            }
			return{
                logining: false,
                filters:{
                    profile:'', //内容
                    companyName:'', //公司名称
                    type:'', //企业类型
                    bookingType:'', //企业类型
                    status:'', //所在地区
                    address:'', //详细地址
                    level:'', //经营范围
                    companyWeChatNo:'',//电话
                    telephone:'',//手机
                    longitude:'',//经度
                    latitude:'',//纬度
                    areaCode:'',//行政区域代码
				},
				imgdata:{
                    companyId:'1', //内容
				},
                fileList2: [
                    // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
				],
                rules2: {
                    profile: [
                        { required: true, message: '请输入内容', trigger: 'blur' },
                    ],
                    companyName: [
                        { required: true, message: '请输入公司名称', trigger: 'blur' },
                    ],
                    type: [
                        { required: true, message: '请输入企业类型', trigger: 'blur' },
                    ],
                    bookingType: [
                        { required: true, message: '请输入预约检测类别', trigger: 'blur' },
                    ],
                    status: [
                        { required: true, message: '请输入公司状态', trigger: 'blur' },
                    ],
                    address: [
                        { required: true, message: '请输入详细地址', trigger: 'blur' },
                    ],
                    level: [
                        { required: true, message: '请输入经营范围', trigger: 'blur' },
                    ],
                    companyWeChatNo: [
                        { required: true, message: '请输入微信号', trigger: 'blur' },
                    ],
                    telephone: [
                        { required: true, trigger: 'blur', validator: validPhone }//这里需要用到全局变量
                    ],
                    longitude: [
                        { required: true, message: '请输入经度', trigger: 'blur' },
                    ],
                    latitude: [
                        { required: true, message: '请输入纬度', trigger: 'blur' },
                    ],
                    areaCode: [
                        { required: true, message: '请输入行政区域代码', trigger: 'blur' },
                    ],

                },
				dialogImageUrl:'',
				dialogVisible:false,
				editorOption:{},  // 文章内容
				timeDefaultShow: new Date(),
                loginName: '',
			}
		},
		methods:{
		    //上传前验证图片类型大小
            onBeforeUpload(file)
            {
                const isIMAGE = file.type === 'image/jpeg'||'image/gif'||'image/png';
                const isLt1M = file.size / 1024 / 1024 < 1;

                if (!isIMAGE) {
                    this.$message.error('上传文件只能是图片格式!');
                }
                if (!isLt1M) {
                    this.$message.error('上传文件大小不能超过 1MB!');
                }
                return isIMAGE && isLt1M;
            },

            //删除前提醒事件
            beforeRemove(file, fileList) {
                return this.$confirm(`确定删除 ${ file.name }？`);
            },
            //确认删除后调用删除
            handleRemove(response,file, fileList) {
                console.log(response);
                let mn = {
                    "id": response.id,
                }
                var json =JSON.stringify(mn);
                let para = {
                    apiId: "photodelete",
                    jsonData: json
                };
                this.listLoading = true;
                axios.post('api/bookingManger/commonAccess', qs.stringify(para),{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                        // "Content-Type":"application/json; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    this.$message({
                        message:'删除成功',
                        type:'success'
                    });
                    this.getMsg()
                }).catch((response) =>{
                    this.$message({
                        message:'删除失败',
                        type:'error'
                    });
                    this.getMsg()

                });
            },
            //上传成功返回事件
            handleAvatarSuccess(response, file, fileList) {
                //response这个
                console.log(response, file, fileList);
                this.$message({
                    message:'上传成功',
                    type:'success'
                });
                this.getMsg()
            },
            handlePreview(file) {
                console.log(file);
            },
            // beforeUpload (file,id) {
             //     let fd = new FormData()
             //     fd.append('file', file)
             //     fd.append('id',id)
             //     axios.post(url, fd, {
             //         })
             //       // return false // false就是不自动上传，我后来试了发现都一样，都不会自动上传
			// },

			onEditorBlur(){//失去焦点事件
				console.log('1')
            },
            onEditorFocus(){//获得焦点事件
            	console.log('2')
            },
            onEditorChange(){//内容改变事件
            	console.log('3')
            },
            //获取信息
            getMsg() {
                let mn = {
                    "companyId": 1,
                }
                var json =JSON.stringify(mn);
                let para = {
                    apiId: "adminCompany",
                    jsonData:json
                };
                axios.post('api/bookingManger/commonAccess', qs.stringify(para),{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    console.log(response)
                    this.filters = response.data.data;
                    this.fileList2 = response.data.data.companyPhotoEntitySet;

                    for (var i=0;i<this.fileList2.length;i++)
                    {
                        this.fileList2[i].url = response.data.data.serverUrl + this.fileList2[i].url
                    }
                }).catch((response) =>{

                });
            },
            getUsers(){
                this.$refs.filters.validate((valid) => {
                    if (valid) {

					let mn = {
                        "profile":this.filters.profile, //内容
                        "companyName":this.filters.companyName, //公司名称
                        "type":this.filters.type, //企业类型
                        "bookingType":this.filters.bookingType, //企业类型
                        "status":this.filters.status, //公司状态
                        "address":this.filters.address, //详细地址
                        "level":this.filters.level, //经营范围
                        "telephone":this.filters.telephone,//电话
                        "companyWeChatNo":this.filters.companyWeChatNo,//手机
                        "longitude":this.filters.longitude,//经度
                        "latitude":this.filters.latitude,//经度
                        "areaCode":this.filters.areaCode,//经度
					}
					var json =JSON.stringify(mn);
					let para = {
						apiId: "adminCompanyadd",
						jsonData:json
					};
                    this.logining = true;
                        axios.post('api/bookingManger/commonAccess', qs.stringify(para),{
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
                            // this.$refs.upload.clearFiles();
                        }).catch((response) =>{
                            this.logining = false;
                            this.$message({
                                message: '新增失败',
                                type: 'error'
                            });

                        });
                    // requestLogin(para).then(data => {
                    //   this.logining = false;
                    //   let { msg, code, user } = data;
                    //   if (code !== 200) {
                    //     this.$message({
                    //       message: msg,
                    //       type: 'error'
                    //     });
                    //     //console.log(message);
                    //   } else {
                    //     //登录按钮跳转
                    //       this.$message({
                    //           message: '登录成功',
                    //           type: 'success'
                    //       });
                    //
                    //   }
                    // });
                  } else {
                    console.log('error submit!!');
                    return false;
                  }
                });
            },
            // 重置
            resetForm(){
            	this.filters = Object.assign({})
            },

		},
        //初始化
        mounted() {
            //获取消息
            this.getMsg();
            //用户信息
            var user = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                this.loginName = user.loginName || '';
            };
            console.log(this.loginName,'9999999999')
        }
	}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>


</style>