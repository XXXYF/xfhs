<template>
	<div class="form-box">
		<el-form :model="filters" :rules="rules2"  ref="filters" label-width="150px" id="filters">
			<el-form-item label="公司图片：" >
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
						:action="UploadUrl"
						:http-request="myUpload"
						:data="imgdata"
						:before-upload="onBeforeUpload"
						:on-preview="handlePreview"
						:on-remove="handleRemove"
						:on-success="handleAvatarSuccess"
						:before-remove="beforeRemove"
						:file-list="fileList2"
						:disabled="inputDisabled"
						list-type="picture">
					<el-button size="small" type="primary" :disabled="inputDisabled">点击上传</el-button>
					<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1MB</div>
				</el-upload>
			</el-form-item>
			<el-form-item label="公司简介：" prop="profile" style="width: 80%">
				<!--<quill-editor v-model="filters.profile" ref="myQuillEditor" :options="editorOption"  @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @change="onEditorChange($event)" class="cont" :disabled="inputDisabled">-->
				<!--</quill-editor>-->
				<el-input type="textarea" v-model="filters.profile" :disabled="inputDisabled" ></el-input>
			</el-form-item>
			<el-form-item label="公司名称：" prop="companyName" >
				<el-input type="" v-model="filters.companyName" style="width: 201px" placeholder="请输入公司名称" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="企业类型：" prop="type">
				<el-select v-model="filters.type" placeholder="请输入企业类型" :disabled="inputDisabled">
					<el-option label="检测站" value="1"></el-option>
					<el-option label="保险公司" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="法定代表人：" prop="legalRepresentative">
				<el-input type="" v-model="filters.legalRepresentative" style="width: 201px" placeholder="请输入法定代表人" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="注册时间：" prop="registrationTime">
				<!--<el-input type="" v-model="filters.registrationTime" placeholder="请输入注册时间"></el-input>-->
				<el-date-picker v-model="filters.registrationTime" style="width: 201px" type="date"
								placeholder="请输入注册时间" :disabled="inputDisabled">
				</el-date-picker>
			</el-form-item>

			<el-form-item label="注册资本：" prop="registrationCapital">
				<el-input type="" v-model="filters.registrationCapital" style="width: 201px" placeholder="请输入注册资本" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="经营范围：" prop="operationScope">
				<el-input type="" v-model="filters.operationScope" style="width: 201px" placeholder="请输入经营范围" :disabled="inputDisabled"></el-input>
			</el-form-item>

			<!--<el-form-item label="预约检测类别：" prop="bookingType">-->
				<!--<el-select v-model="filters.bookingType" placeholder="">-->
					<!--<el-option label="检测站" value="1"></el-option>-->
					<!--<el-option label="保险公司" value="2"></el-option>-->
				<!--</el-select>-->
			<!--</el-form-item>-->
			<!--<el-form-item label="预约检测类别：">-->
				<!--<el-checkbox-group v-model="filters.bookingType">-->
					<!--<el-checkbox  :label="100" :key="100">安检</el-checkbox>-->
					<!--<el-checkbox :label="010" :key="010">综检</el-checkbox>-->
					<!--<el-checkbox :label="001" :key="001">环检</el-checkbox>-->
				<!--</el-checkbox-group>-->
			<!--</el-form-item>-->
			<!--<el-form-item label="公司状态：" prop="status">-->
				<!--<el-select v-model="filters.status" placeholder="">-->
					<!--<el-option label="开启" value="01"></el-option>-->
					<!--<el-option label="关闭" value="02"></el-option>-->
				<!--</el-select>-->
			<!--</el-form-item>-->
			<el-form-item label="公司地址：" prop="address">
				<el-input v-model="filters.address" placeholder="请输入公司地址" style="width: 201px" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="手机：" prop="phone">
				<el-input v-model="filters.phone"  placeholder="请输入手机" style="width: 201px" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="经度：" prop="longitude">
				<el-input v-model="filters.longitude"  placeholder="请输入经度" style="width: 201px" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="纬度：" prop="latitude">
				<el-input v-model="filters.latitude"  placeholder="请输入纬度" style="width: 201px" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="行政区域代码：" prop="areaCode">
				<el-input v-model="filters.areaCode"  placeholder="请输入行政区域代码" style="width: 201px" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="法定代表人：" >
				<el-input v-model="filters.legalRepresentative"  placeholder="请输入行政区域代码" style="width: 201px" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="注册资本：" >
				<el-input v-model="filters.registrationCapital"  placeholder="请输入行政区域代码" style="width: 201px" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="夏季起始日期："  prop="summerStartDate">
				<el-date-picker
						v-model="filters.summerStartDate"
						type="date"
						placeholder="选择日期"
						format="yyyy 年 MM 月 dd 日"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="yyyy-MM-dd">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="夏季结束日期：" prop="autumnStartDate">
				<el-date-picker
						v-model="filters.autumnStartDate"
						type="date"
						placeholder="选择日期"
						format="yyyy 年 MM 月 dd 日"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="yyyy-MM-dd">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="夏季上午营业起始时间："  prop="summerAMStartTime">
				<el-time-picker
						v-model="filters.summerAMStartTime"
						type="date"
						placeholder="选择时间"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="HH:mm:ss"
						format="HH:mm:ss">
				</el-time-picker>
			</el-form-item>
			<el-form-item label="夏季上午营业结束时间："  prop="summerAMEndTime">
				<el-time-picker
						v-model="filters.summerAMEndTime"
						type="date"
						placeholder="选择时间"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="HH:mm:ss"
						format="HH:mm:ss">
				</el-time-picker>
			</el-form-item>
			<el-form-item label="夏季下午营业起始时间：" prop="summerPMStartTime">
				<el-time-picker
						v-model="filters.summerPMStartTime"
						type="date"
						placeholder="选择时间"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="HH:mm:ss"
						format="HH:mm:ss">
				</el-time-picker>
			</el-form-item>
			<el-form-item label="夏季下午营业结束时间："  prop="summerPMEndTime">
				<el-time-picker
						v-model="filters.summerPMEndTime"
						type="date"
						placeholder="选择时间"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="HH:mm:ss"
						format="HH:mm:ss">
				</el-time-picker>
			</el-form-item>
			<el-form-item label="秋季上午营业起始时间："  prop="autumnAMStartTime">
				<el-time-picker
						v-model="filters.autumnAMStartTime"
						type="date"
						placeholder="选择时间"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="HH:mm:ss"
						format="HH:mm:ss">
				</el-time-picker>
			</el-form-item>
			<el-form-item label="秋季上午营业结束时间：" prop="autumnAMEndTime">
				<el-time-picker
						v-model="filters.autumnAMEndTime"
						type="date"
						placeholder="选择时间"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="HH:mm:ss"
						format="HH:mm:ss">
				</el-time-picker>
			</el-form-item>
			<el-form-item label="秋季下午营业起始时间：" prop="autumnPMStartTime">
				<el-time-picker
						v-model="filters.autumnPMStartTime"
						type="date"
						placeholder="选择时间"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="HH:mm:ss"
						format="HH:mm:ss">
				</el-time-picker>
			</el-form-item>
			<el-form-item label="秋季下午营业结束时间：" prop="autumnPMEndTime">
				<el-time-picker
						v-model="filters.autumnPMEndTime"
						type="date"
						placeholder="选择时间"
						:disabled="inputDisabled"
						style="width: 201px"
						value-format="HH:mm:ss"
						format="HH:mm:ss">
				</el-time-picker>
			</el-form-item>



			<el-form-item label="      ">
				<el-button type="danger" @click="change">更改设置</el-button>
				<el-button type="danger" @click="getUsers" :disabled="inputDisabled">保存</el-button>
				<el-button type="warning" @click="resetForm" :disabled="inputDisabled">重置</el-button>
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
                    companyId:"1",
                    profile:'', //内容
                    companyName:'', //公司名称
                    type:'', //企业类型
                    legalRepresentative:'', //法定代表人
                    registrationTime:'', //注册时间
                    registrationCapital:'', //注册资本
                    operationScope:'', //经营范围
                    // bookingType:[], //企业类型
                    address:'', //详细地址
                    phone:'',//手机
                    longitude:'',//经度
                    latitude:'',//纬度
                    areaCode:'',//行政区域代码
                    summerStartDate:'',//夏季起始日期
                    autumnStartDate:'',//秋季起始日期
                    summerAMStartTime:'',//夏季上午营业起始时间
                    summerAMEndTime:'',//夏季上午营业结束时间
                    summerPMStartTime:'',//夏季下午营业起始时间
                    summerPMEndTime:'',//夏季下午营业结束时间
                    autumnAMStartTime:'',//秋季上午营业起始时间
                    autumnAMEndTime:'',//秋季上午营业结束时间
                    autumnPMStartTime:'',//秋季下午营业起始时间
                    autumnPMEndTime:'',//秋季下午营业起始时间
                },
                imgdata:{
                    companyId:'1', //内容
                },
                fileList2: [
                    // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                ],
                rules2: {
                    summerStartDate: [
                        { required: true, message: '请输入夏季起始日期', trigger: 'blur' },
                    ],
                    autumnStartDate: [
                        { required: true, message: '请输入秋季起始日期', trigger: 'blur' },
                    ],
                    summerAMStartTime: [
                        { required: true, message: '请输入夏季上午营业起始时间', trigger: 'blur' },
                    ],
                    summerAMEndTime: [
                        { required: true, message: '请输入夏季上午营业结束时间', trigger: 'blur' },
                    ],
                    summerPMStartTime: [
                        { required: true, message: '请输入夏季下午营业起始时间', trigger: 'blur' },
                    ],
                    summerPMEndTime: [
                        { required: true, message: '请输入夏季下午营业结束时间', trigger: 'blur' },
                    ],
                    autumnAMStartTime: [
                        { required: true, message: '请输入秋季上午营业起始时间', trigger: 'blur' },
                    ],
                    autumnAMEndTime: [
                        { required: true, message: '请输入秋季上午营业结束时间', trigger: 'blur' },
                    ],
                    autumnPMStartTime: [
                        { required: true, message: '请输入秋季下午营业起始时间', trigger: 'blur' },
                    ],
                    autumnPMEndTime: [
                        { required: true, message: '请输入秋季下午营业结束时间', trigger: 'blur' },
                    ],


                },
                dialogImageUrl:'',
                dialogVisible:false,
                editorOption:{},  // 文章内容
                timeDefaultShow: new Date(),
                loginName: '',
                inputDisabled: true	,
            }
        },
        methods:{
            // UploadUrl:function(){
            //     return "visp_mg/upload/commonAccess";
            // },
            myUpload(content) {
                // var form = new FormData();
                // form.append("file", content.file);
                // this.$axios.post(content.action, form).then(res=>{
                //     if(res.data.code != 0) {
                //         content.onError('文件上传失败, code:' + res.data.code)
                //     } else {
                //         content.onSuccess('文件上传成功！')
                //     }
                // }).catch(error=>{
                //     if (error.response) {
                //         content.onError('文件上传失败,' + error.response.data);
                //     } else if(error.request) {
                //         content.onError('文件上传失败，服务器端无响应')
                //     } else {
                //         content.onError('文件上传失败，请求封装失败')
                //     }
                // });
                // let mn = {
                //     "file":content.file, //内容
                // }
                // var json =JSON.stringify(mn);
                // let para = {
                //     apiId: "adminCompanyadd",
                //     jsonData:json
                // };
				console.log(content,1)
                var form = new FormData();
                form.append("file", content.file);
                form.append("companyId", "1");
                form.append("name", content.file.name);
                this.logining = true;
                axios.post('/upload/commonAccess', form,{
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
                    this.getMsg()
                    // this.$refs.upload.clearFiles();
                }).catch((response) =>{
                    this.logining = false;
                    this.$message({
                        message: '新增失败',
                        type: 'error'
                    });
                    this.getMsg()
                });
            },
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
                axios.post('/bookingManger/commonAccess', qs.stringify(para),{
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
            change(){
                this.inputDisabled= false;
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
                axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    console.log(response)
                    this.filters = response.data.data;
                    this.filters.companyId = '1';
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

                        // let mn = {
                        //     "companyId":"1", //内容
                        //     "profile":this.filters.profile, //内容
                        //     "companyName":this.filters.companyName, //公司名称
                        //     "type":this.filters.type, //企业类型
                        //     "legalRepresentative":this.filters.legalRepresentative, //法定代表人
                        //     "registrationTime":this.filters.registrationTime, //注册时间
                        //     "registrationCapital":this.filters.registrationCapital, //注册资本
                        //     "operationScope":this.filters.operationScope, //经营范围
                        //     // bookingType:[], //企业类型
                        //     "address":this.filters.address, //详细地址
                        //     "phone":this.filters.phone,//手机
                        //     "longitude":this.filters.longitude,//经度
                        //     "latitude":this.filters.latitude,//纬度
                        //     "areaCode":this.filters.areaCode,//行政区域代码
                        // }
                        let mn = Object.assign({}, this.filters);

                        var json =JSON.stringify(mn);
                        let para = {
                            apiId: "adminCompanymodify",
                            jsonData:json
                        };
                        this.logining = true;
                        axios.post('/bookingManger/commonAccess', qs.stringify(para),{
                            headers: {
                                "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                // "Content-Type":"application/json; charset=UTF-8",
                            },
                            withCredentials:true,
                        }).then((response) =>{
                            this.logining = false;
                            this.inputDisabled= true;
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                            this.getMsg()
                            // this.$refs.upload.clearFiles();
                        }).catch((response) =>{
                            this.logining = false;
                            this.$message({
                                message: '保存失败',
                                type: 'error'
                            });
                            this.inputDisabled= true;
                            this.getMsg()
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
	.el-form--inline .el-form-item__content{
		width: 80%;
	}
	.el-input.is-disabled{
	.el-input__inner{width: 201px;}
	}

</style>