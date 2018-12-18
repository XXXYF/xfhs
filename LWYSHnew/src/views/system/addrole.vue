<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">新增角色</div>
            <el-form  :model="filters" ref="filters" :rules="filtersValid" id="filterss" class="filters" label-width="260px">
                <el-col :span="12" class="colborder">
                    <el-form-item label="角色名称:" prop="jsmc">
                        <el-input v-filterSpecialChar v-model="filters.jsmc" placeholder=""  :maxlength="30" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="角色描述:" prop="jsms">
                        <el-input v-model="filters.jsms" placeholder=""  :maxlength="500" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24" class="colborder" style="height: auto;">
                    <el-form-item label="权限信息:" prop="cdids">
                        <el-tree
                                :data="data2"
                                show-checkbox
                                node-key="id"
                                :default-checked-keys="filters.cdids"
                                :props="defaultProps"
                                check-strictly
                                @check-change="handleClick"
                                ref="roletree">
                        </el-tree>
                        <el-input v-model="filters.cdids" placeholder=""  v-show="false"  ></el-input>
                    </el-form-item>
                </el-col>



                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="addrole">新增</el-button>
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
            var validCardNo=(rule, value,callback)=>{
                if (!value){
                    callback(new Error('请输入身份证号码'))
                }else  if (!isvalidCardNo(value)){
                    callback(new Error('请输入正确的身份证号码'))
                }else {
                    callback()
                }

            }

            return {
                filters: {
                    jsid: '',
                    jsmc: '',
                    jsms: '',
                    cdids:[],
                    ssbmN:[],
                    ss:'',
                },
                filtersValid:{
                    jsmc: [
                        { required: true, message: '请输入角色名称', trigger: 'blur' },
                    ],
                    jsms: [
                        { required: true, message: '请输入角色描述', trigger: 'blur' },
                    ],
                    cdids: [
                        { type: 'array',required: true, message: '请输入权限信息', trigger: 'blur' },
                    ]
                },

                listLoading: false,
                bmbhList:{},

                data2: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                i:0,
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
            addrole:function () {
                this.filters.cdids = this.$refs.roletree.getCheckedKeys();
                this.$refs.filters.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.listLoading = true;
                            let para = {
                                jsid:this.filters.jsid,
                                jsmc:this.filters.jsmc,
                                jsms:this.filters.jsms,
                                cdids:this.$refs.roletree.getCheckedKeys(),
                            };
                            console.log(para);
                            var qs = require('querystring')
                            axios.post('api/sys/jsgl/insert', qs.stringify(para) ,{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                this.listLoading = false;
                                this.$message({
                                    message: '新增成功',
                                    type: 'success'
                                });
                                this.filters = Object.assign({});
                                this.$refs.roletree.setCheckedNodes([]);
                                this.$router.push('/roleManagement')
                            }).catch((response) =>{
                                this.listLoading = false;
                                this.$message({
                                    message: '新增失败',
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
            //重置
            resetForm(formName) {
                this.filters = Object.assign({});
            },
            //用户信息列表
            bmgllist:function () {

                axios.post('api/sys/qxgl/tree' ,{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    this.data2 = response.data.data;
                    console.log(response,111222);
                }).catch((response) =>{

                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });

            },
            handleClick(data,checked, node) {
                // console.log(this.formdata.jsqx,123);
                //
                // console.log(this.formdata.jsqx,324);


            },





        },
        mounted() {
            // var form =document.getElementById("formdata");
            // form.reset();
            this.bmgllist();
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