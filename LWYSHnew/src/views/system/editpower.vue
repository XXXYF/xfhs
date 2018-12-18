<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">修改用户</div>
            <el-form  :model="filters" ref="filters" :rules="filtersValid" id="filterss" class="filters" label-width="260px">
                <el-col :span="12" class="colborder">
                    <el-form-item label="权限排序:" prop="cdpx">
                        <el-input v-model="filters.cdpx" placeholder=""   ></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="12" class="colborder">
                    <el-form-item label="权限状态:"  prop="cdzt">
                        <el-select v-model="filters.cdzt" placeholder="" >
                            <el-option label="开启" value="1"></el-option>
                            <el-option label="关闭" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>


                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="changepower">修改</el-button>
                    <el-button class="dialog-button reset-button" @click="back">返回</el-button>
                </el-col>
            </el-form>
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
                    cdpx: '',
                    cdzt: '',
                },
                filtersValid:{
                    cdpx: [
                        { required: true, message: '请输入权限排序', trigger: 'blur' },
                    ],
                    cdzt: [
                        { required: true, message: '请输入权限状态', trigger: 'blur' },
                    ],

                },

                listLoading: false,


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

            //修改权限信息
            changepower:function () {
                this.$refs.filters.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.listLoading = true;
                            let para = Object.assign({}, this.filters);
                            console.log(para);
                            var qs = require('querystring')
                            axios.post('api/sys/qxgl/update', qs.stringify(para) ,{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                this.listLoading = false;
                                this.$message({
                                    message: '修改成功',
                                    type: 'success'
                                });
                                sessionStorage.setItem('powerMsg',JSON.stringify(para))

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
            back:function () {
                this.$router.go(-1);
                // var box = document.getElementsByClassName("router-link-active");
                // box[0].classList.add('aa')
            },



        },
        mounted() {
            //获取消息
            var powerMsg = sessionStorage.getItem('powerMsg');
            console.log(powerMsg,'9999999999')
            if (powerMsg) {
                powerMsg = JSON.parse(powerMsg);
                this.filters = powerMsg || '';
            };
        },

    }

</script>

<style scoped>

</style>