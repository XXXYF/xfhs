<template>
	<div class="form-box">
		<el-form :model="filters" :rules="rules2" :inline="true" ref="filters" label-width="150px" id="filters">
			<el-form-item label="预约时间:" prop="startTime">
				<el-col :span="11">
					<el-form-item >
						<el-time-picker
								v-model="filters.startTime"
								type="date"
								placeholder="开始日期"
								:disabled="inputDisabled"
								value-format="HH:mm:ss" format="HH:mm:ss"
								:picker-options="pickerOptions0">
						</el-time-picker>
					</el-form-item>
				</el-col>
				<el-col class="line" :span="2"  style="text-align: center">-</el-col>
				<el-col :span="11">
					<el-form-item prop="endTime">
						<el-time-picker
								v-model="filters.endTime"
								type="date"
								placeholder="结束日期"
								:disabled="inputDisabled"
								value-format="HH:mm:ss" format="HH:mm:ss"
								:picker-options="pickerOptions1">
						</el-time-picker>
					</el-form-item>
				</el-col>
			</el-form-item>
			<el-form-item label="安检车检间隔分钟：" prop="intervalMinute">
				<el-input type="" v-model="filters.intervalMinute" placeholder="请输入安检车检间隔分钟" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="安检单日可预约数：" prop="securityInspectionTotal">
				<el-input type="" v-model="filters.securityInspectionTotal" placeholder="请输入安检单日可预约数" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="环检单日可预约数：" prop="exhaustInspectionTotal">
				<el-input type="" v-model="filters.exhaustInspectionTotal" placeholder="请输入环检单日可预约数" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="综检单日可预约数：" prop="comprehensiveInspectionTotal">
				<el-input type="" v-model="filters.comprehensiveInspectionTotal" placeholder="请输入综检单日可预约数" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="服务状态：" prop="status">
				<el-select v-model="filters.status" placeholder="请输入服务状态" :disabled="inputDisabled">
					<el-option label="开启" value="0"></el-option>
					<el-option label="关闭" value="1"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="预约安检收费：" prop="securityInspectionCharge">
				<el-input type="" v-model="filters.securityInspectionCharge" placeholder="请输入预约安检收费" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="预约环检收费：" prop="exhaustInspectionCharge">
				<el-input type="" v-model="filters.exhaustInspectionCharge" placeholder="请输入预约环检收费" :disabled="inputDisabled"></el-input>
			</el-form-item>
			<el-form-item label="预约综检收费：" prop="comprehensiveInspectionCharge">
				<el-input type="" v-model="filters.comprehensiveInspectionCharge" placeholder="请输入预约综检收费" :disabled="inputDisabled"></el-input>
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
    import moment from 'moment'

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
                pickerOptions0: {
                    disabledDate: (time) => {
                        if (this.filters.endTime != "") {
                            return time.getTime() > Date.now() || time.getTime() > this.filters.endTime;
                        } else {
                            return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.filters.startTime || time.getTime() > Date.now();
                    }
                },
                logining: false,
                filters:{
                    startTime:'', //开始时间
                    endTime:'', //结束时间
                    securityInspectionTotal:'', //安检单日可预约数
                    exhaustInspectionTotal:'', //环检单日可预约数
                    comprehensiveInspectionTotal:'', //综检单日可预约数
                    status:'', //服务状态
                    securityInspectionCharge:'', //预约安检收费
                    exhaustInspectionCharge:'', //预约环检收费
                    comprehensiveInspectionCharge:'', //预约综检收费
                    intervalMinute:'', //安检车检间隔分钟

                },
                rules2: {
                    // startTime: [
                    //     { required: true, message: '请输入开始时间', trigger: 'blur' },
                    // ],
                    // endTime: [
                    //     { required: true, message: '请输入结束时间', trigger: 'blur' },
                    // ],
                    // securityInspectionTotal: [
                    //     { required: true, message: '请输入安检单日可预约数', trigger: 'blur' },
                    // ],
                    // exhaustInspectionTotal: [
                    //     { required: true, message: '请输入环检单日可预约数', trigger: 'blur' },
                    // ],
                    // comprehensiveInspectionTotal: [
                    //     { required: true, message: '请输入综检单日可预约数', trigger: 'blur' },
                    // ],
                    status: [
                        { required: true, message: '请输入服务状态', trigger: 'blur' },
                    ],
                    // securityInspectionCharge: [
                    //     { required: true, message: '请输入预约安检收费', trigger: 'blur' },
                    // ],
                    // exhaustInspectionCharge: [
                    //     { required: true, message: '请输入预约环检收费', trigger: 'blur' },
                    // ],
                    // comprehensiveInspectionCharge: [
                    //     { required: true, message: '请输入预约综检收费', trigger: 'blur' },
                    // ],

                },
                dialogImageUrl:'',
                dialogVisible:false,
                editorOption:{},  // 文章内容
                timeDefaultShow: new Date(),
                loginName: '',
                inputDisabled: true,
            }
        },
        methods:{


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
                    apiId: "adminSetselect",
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
                    this.filters.intervalMinute = String(this.filters.intervalMinute);

                }).catch((response) =>{

                });
            },
            change(){
				this.inputDisabled= false;
			},
            getUsers(){
                this.$refs.filters.validate((valid) => {
                    if (valid) {
                        // if(this.filters.startTime !== ""){
                        //     this.filters.startTime = moment(this.filters.startTime).format('hh:mm:ss')
                        // }
                        // if(this.filters.endTime !== ""){
                        //     this.filters.endTime = moment(this.filters.endTime).format('hh:mm:ss')
                        // }
                        if(this.filters.startTime == null){
                            this.filters.startTime = ""
                        }
                        if(this.filters.endTime == null){
                            this.filters.endTime = ""
                        }
                        let mn = {
                            "id":'1', //id
                            "startTime":this.filters.startTime, //开始时间
                            "endTime":this.filters.endTime, //结束时间
                            "securityInspectionTotal":this.filters.securityInspectionTotal, //安检单日可预约数
                            "exhaustInspectionTotal":this.filters.exhaustInspectionTotal, //环检单日可预约数
                            "comprehensiveInspectionTotal":this.filters.comprehensiveInspectionTotal, //综检单日可预约数
                            "status":this.filters.status, //服务状态
                            "securityInspectionCharge":this.filters.securityInspectionCharge, //预约安检收费
                            "exhaustInspectionCharge":this.filters.exhaustInspectionCharge, //预约环检收费
                            "comprehensiveInspectionCharge":this.filters.comprehensiveInspectionCharge, //预约综检收费
                            "intervalMinute":this.filters.intervalMinute, //安检车检间隔分钟
                        }
                        var json =JSON.stringify(mn);
                        let para = {
                            apiId: "adminSetmodify",
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
                            this.inputDisabled = true;
                            this.$message({
                                message: '设置成功',
                                type: 'success'
                            });
                            // this.$refs.upload.clearFiles();
                        }).catch((response) =>{
                            this.logining = false;
                            this.$message({
                                message: '设置失败',
                                type: 'error'
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
            },

        },
        //初始化
        mounted() {
            //获取消息
            this.getMsg();
            // //用户信息
            // var user = sessionStorage.getItem('user');
            // if (user) {
            //     user = JSON.parse(user);
            //     this.loginName = user.loginName || '';
            // };
            console.log(this.loginName,'9999999999')
        }
    }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>


</style>