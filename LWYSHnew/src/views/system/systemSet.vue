<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle xtTitle">系统参数配置</div>
            <el-form  :model="filters" ref="filters" :rules="filtersValid" id="filterss" class="filters xtfilters" label-width="260px">
                <el-col :span="12" :offset="6" >
                    <el-form-item label="联网功能配置（是否启用）:" >
                        <el-checkbox-group v-model="lwgndata">
                            <el-checkbox label="1" :disabled="inputDisable">安检联网</el-checkbox>
                            <el-checkbox label="2" :disabled="inputDisable">综检联网</el-checkbox>
                            <el-checkbox label="3" :disabled="inputDisable">环检联网</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="环检监管平台路径:" >
                        <el-input v-model="filters.hjJkUrl" placeholder=""  :maxlength="60" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="综检监管平台路径:" >
                        <el-input v-model="filters.zjJkUrl" placeholder="" :maxlength="60" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="安检监管平台路径:" >
                        <el-input v-model="filters.ajJkUrl" placeholder="" :maxlength="60" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="系统及接口日志存储期限:" >
                        <el-input v-filterSpecialChar v-model="filters.rzccqx" placeholder="" :maxlength="3" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="照片访问路径:">
                        <el-input v-model="filters.zpfwUrl" placeholder="" :maxlength="60"  :disabled="inputDisable"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="照片存储路径:">
                        <el-input v-model="filters.zpcclj" placeholder="" :maxlength="60" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="视频访问路径:">
                        <el-input v-model="filters.spfwlj" placeholder="" :maxlength="60" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="综检webservice路径:">
                        <el-input v-model="filters.zjWssUrl" placeholder="" :maxlength="100" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="删除系统日志周期(每隔多少年):">
                        <el-input v-filterSpecialChar v-model="filters.scrzzq" placeholder="" :maxlength="3" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="环检webservice路径:">
                        <el-input v-model="filters.hjWssUrl" placeholder="" :maxlength="100" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="接口默认调用次数:">
                        <el-input v-filterSpecialChar v-model="filters.jkmrcs" placeholder="" :maxlength="10" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="安检webservice路径:">
                        <el-input v-model="filters.ajWssUrl" placeholder="" :maxlength="100" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" :offset="6">
                    <el-form-item label="单位机构代码:">
                        <el-input v-model="filters.dwjgdm" placeholder="" :maxlength="18" :disabled="inputDisable" ></el-input>
                    </el-form-item>
                </el-col>



            </el-form>
            <el-col :span="24" class="selectBtnbox" style="text-align: center">
                <el-button  class="dialog-button search-button"  @click.native.prevent="changeuser">确定</el-button>
                <el-button class="dialog-button reset-button" @click="setuser">编辑</el-button>
            </el-col>
        </el-col>



    </section>
</template>

<script>
    import util from '../../common/js/util'
    import axios from 'axios';
    import qs from 'qs';
    import {isvalidPhone} from '../../api/validate'
    import {isvalidCardNo} from '../../api/validate'
    import {isNumber} from '../../api/validate'

    import moment from 'moment'

    export default {
        data() {
            return {
                filters: {
                    lwgn: "",
                    hjJkUrl: '',
                    ajJkUrl: '',
                    zjJkUrl: '',
                    rzccqx: '',
                    zpfwUrl: '',
                    zpcclj: '',
                    spfwlj: '',
                    zjWssUrl: '',
                    scrzzq: '',
                    hjWssUrl: '',
                    jkmrcs: '',
                    ajWssUrl: '',
                    dwjgdm: '',

                },
                lwgndata: [],

                filtersValid:{
                    yhbh: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],

                },

                listLoading: false,
                inputDisable: true,
                bmbhList:{}
            }
        },
        methods: {
            //用户角色显示转换
            formatRole :function(row, column) {
                return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
            },
            //用户状态显示转换
            formatState :function(row, column) {
                return row.state == 1 ? '正常' : row.state == 0 ?'警告':'其他'
            },

            //添加用户信息
            changeuser:function () {

                this.$refs.filters.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            var arr = this.lwgndata
                            this.filters.lwgn = ''
                            if(1 == arr[0]){
                                this.filters.lwgn += "1"
                            }else {
                                this.filters.lwgn += "2"
                            }
                            if(2 == arr[1]){
                                this.filters.lwgn += ",1"
                            }else{
                                this.filters.lwgn += ",2"
                            }
                            if(3 == arr[2]){
                                this.filters.lwgn += ",1"
                            }else{
                                this.filters.lwgn += ",2"
                            }

                            this.listLoading = true;
                            let para = Object.assign({}, this.filters);
                            console.log(para);
                            var qs = require('querystring')
                            axios.post('api/sys/xtsz/update', qs.stringify(para) ,{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                if (response.data.msg == '用户未登录'){
                                    this.$message({
                                        message: response.data.msg,
                                        type: 'error'
                                    });
                                    sessionStorage.removeItem('user');
                                    this.$router.push('/login');
                                }else if(response.data.msg == '获取不到用户信息'){
                                    this.$message({
                                        message: response.data.msg,
                                        type: 'error'
                                    });
                                    sessionStorage.removeItem('user');
                                    this.$router.push('/login');
                                }
                                this.listLoading = false;
                                this.$message({
                                    message: '修改成功',
                                    type: 'success'
                                });
                                this.bmgllist();
                                this.inputDisable = true;
                                // this.users = response.data.data.list;
                                // this.total = response.data.data.totalCount;
                            }).catch((response) =>{
                                this.listLoading = false;
                                this.$message({
                                    message: '修改失败',
                                    type: 'error'
                                });
                                console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                            });
                            //数据没有保存到页面

                        });
                    }

                });
            },
            setuser:function () {
                this.inputDisable = false

            },
            //重置
            resetForm(formName) {
                this.filters = Object.assign({});
            },
            //用户信息列表
            bmgllist:function () {

                axios.post('api/sys/xtsz/getXtsz' ,{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    if (response.data.msg == '用户未登录'){
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    }else if(response.data.msg == '获取不到用户信息'){
                        this.$message({
                            message: response.data.msg,
                            type: 'error'
                        });
                        sessionStorage.removeItem('user');
                        this.$router.push('/login');
                    }
                    this.filters = response.data.data;
                    console.log(this.filters.lwgn,111222);
                    console.log(this.filters.lwgn.substring(0, 1),112222);
                    console.log(this.filters.lwgn.substring(2, 3),112222);
                    console.log(this.filters.lwgn.substring(4, 5),112222);
                    this.lwgndata = [];
                    if (this.filters.lwgn.substring(0, 1)== 1){
                        this.lwgndata.push("1")
                    }
                    if (this.filters.lwgn.substring(2, 3)== 1){
                        this.lwgndata.push("2")
                    }
                    if (this.filters.lwgn.substring(4, 5)== 1){
                        this.lwgndata.push("3")
                    }
                }).catch((response) =>{

                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });

            },






        },
        mounted() {
            // var form =document.getElementById("formdata");
            // form.reset();
            this.bmgllist();
            // this.filters.lwgndata = ["1","2"];

        },
        filters:{
            formDate:function (dysj) {
                //return monent(dysj)
                return moment(dysj).format('YYYY-MM-DD HH:mm:ss')

            }
        }
    }

</script>

<style scoped>

</style>