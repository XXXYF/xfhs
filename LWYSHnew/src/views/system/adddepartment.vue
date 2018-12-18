<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">新增部门</div>
            <el-form  :model="filters" ref="filters" :rules="filtersValid" id="filterss" class="filters" label-width="260px">
                <el-col :span="12" class="colborder">
                    <el-form-item label="管理部门编号:" prop="glbmbh">
                        <el-input v-model="filters.glbmmc" v-clickoutside="handleClose" :readonly="true" @click.native="treeBoxshow" ></el-input>
                        <el-tree
                                :data="data2"
                                show-checkbox
                                node-key="id"
                                :default-checked-keys="filters.glbmbh"
                                :props="defaultProps"
                                check-strictly
                                v-show="treeBoxVisible"
                                @check-change="handleClick"
                                @node-click="nodeClick"
                                ref="roletree">
                        </el-tree>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门名称:" prop="bmmc">
                        <el-input v-model="filters.bmmc" placeholder=""  :maxlength="20" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门联系人:" prop="bmlxr">
                        <el-input v-model="filters.bmlxr" placeholder=""  :maxlength="10" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门联系人电话:" prop="bmlxrdh" >
                        <el-input v-model="filters.bmlxrdh" placeholder=""  :maxlength="11" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="联系人身份证号:" prop="bmlxrsfz">
                        <el-input v-model="filters.bmlxrsfz" placeholder=""  :maxlength="20" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门联系人电子邮箱:">
                        <el-input v-model="filters.bmlxrdzyx" placeholder=""  :maxlength="30" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门图片地址:" >
                        <el-input v-model="filters.bmtpdz" placeholder=""  :maxlength="60" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门视频地址:">
                        <el-input v-model="filters.bmspdz" placeholder=""  :maxlength="60" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门视频用户:" >
                        <el-input v-model="filters.bmspyhm" placeholder=""  :maxlength="10" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门视频密码:" >
                        <el-input v-model="filters.bmspmm" placeholder=""  :maxlength="10" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门号牌号码头1:">
                        <el-input v-model="filters.bmhphmt1" placeholder=""  :maxlength="3" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门号牌号码头2:">
                        <el-input v-model="filters.bmhphmt2" placeholder=""   :maxlength="5"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="登录允许出错次数:" >
                        <el-input v-model="filters.dlyccccs" placeholder=""  :maxlength="1" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门类型:" prop="bmlx">
                        <el-select v-model="filters.bmlx" placeholder="" >
                            <el-option label="检测机构" value="1"></el-option>
                            <el-option label="非检测机构" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="环检检验机构编号:"  >
                        <el-input v-model="filters.hbmbh" placeholder=""   :maxlength="10"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="环检联网机构授权码:" >
                        <el-input v-model="filters.sqm" placeholder=""  :maxlength="30" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="综检检验机构编号:">
                        <el-input v-model="filters.zbmbh" placeholder=""  :maxlength="10" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="综检接口序列号:" >
                        <el-input v-model="filters.zjkxlh" placeholder=""  :maxlength="30" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="安检机构部门编号:" >
                        <el-input v-model="filters.abmbh" placeholder=""   :maxlength="10"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="应用场景编号:" >
                        <el-input v-model="filters.cjsqbh" placeholder=""   :maxlength="18"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="单位机构代码:" >
                        <el-input v-model="filters.dwjgdm" placeholder=""   :maxlength="18"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门业务系统序列号:" >
                        <el-input v-model="filters.bmywxtxlh" placeholder=""  :maxlength="30" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门智能终端系统序列号:" >
                        <el-input v-model="filters.bmznzdxlh" placeholder=""  :maxlength="30" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门视频系统序列号:" >
                        <el-input v-model="filters.bmspxtxlh" placeholder=""   :maxlength="30"></el-input>
                    </el-form-item>
                </el-col>


                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="adddepartment">新增</el-button>
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

    //点击其他地方隐藏树形框
    const clickoutside = {
        // 初始化指令
        bind(el, binding, vnode) {
            function documentHandler(e) {
                // 这里判断点击的元素是否是本身，是本身，则返回
                if (el.contains(e.target)) {
                    return false;
                }
                // 判断指令中是否绑定了函数
                if (binding.expression) {
                    // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                    binding.value(e);
                }
            }
            // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
            el.__vueClickOutside__ = documentHandler;
            document.addEventListener('click', documentHandler);
        },
        update() {},
        unbind(el, binding) {
            // 解除事件监听
            document.removeEventListener('click', el.__vueClickOutside__);
            delete el.__vueClickOutside__;
        },
    };
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
                    glbmbh: '',
                    bmmc: '',
                    bmlxr: '',
                    bmlxrdh: '',
                    bmlxrsfz: '',
                    bmlxrdzyx: '',
                    bmtpdz: '',
                    bmspdz: '',
                    bmspyhm: '',
                    bmspmm: '',
                    bmhphmt1: '',
                    bmhphmt2: '',
                    dlyccccs: '',
                    bmlx: '',
                    zjkxlh: '',
                    abmbh: '',
                    cjsqbh: '',
                    dwjgdm: '',
                    bmywxtxlh: '',
                    bmznzdxlh: '',
                    bmspxtxlh: '',
                    glbmmc: '',
                },
                filtersValid:{
                    glbmbh: [
                        { required: true, message: '请输入管理部门编号', trigger: 'blur' },
                    ],
                    bmmc: [
                        { required: true, message: '请输入部门名称', trigger: 'blur' },
                    ],
                    bmlxr: [
                        { required: true, message: '请输入部门联系人', trigger: 'blur' },
                    ],
                    bmlxrdh: [
                        { required: true, message: '请输入部门联系人电话', trigger: 'blur' },
                    ],
                    bmlxrsfz: [
                        { required: true, message: '请输入联系人身份证号', trigger: 'blur' },
                    ],
                    bmlx: [
                        { required: true, message: '请输入部门类型', trigger: 'blur' },
                    ],

                },

                listLoading: false,
                bmbhList:{},
                treeBoxVisible:false,
                data2: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
            }
        },
        //点击其他隐藏树形
        directives: {clickoutside},
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
            adddepartment:function () {
                this.$refs.filters.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.listLoading = true;
                            let para = Object.assign({}, this.filters);
                            console.log(para);
                            var qs = require('querystring')
                            axios.post('api/sys/bmgl/insert', qs.stringify(para) ,{
                                headers: {
                                    "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                                },
                                withCredentials:true,
                            }).then((response) =>{
                                if (response.data.code == '1'){
                                    this.$message({
                                        message: response.data.msg,
                                        type: 'success'
                                    });
                                    this.listLoading = false;
                                    this.filters = Object.assign({});
                                    this.$refs.roletree.setCheckedNodes([]);
                                    this.$router.push('/departmentManagement')
                                }else if(response.data.code == '0'){
                                    this.$message({
                                        message: response.data.msg,
                                        type: 'error'
                                    });
                                }


                            }).catch((response) =>{
                                this.listLoading = false;
                                this.$message({
                                    message: response.data.msg,
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

                axios.post('api/sys/bmgl/list' ,{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{

                    this.bmbhList = response.data.data;
                    console.log(this.bmbhList,111222);
                }).catch((response) =>{

                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });

            },

            //获取部门代号列表
            getTree() {
                let para = {
                    bmlx:2,
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/sys/bmgl/tree', qs.stringify(para) ,{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    this.listLoading = false;
                    this.data2 = response.data.data;
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            //node-click节点被点击时的回调，check-change节点选中状态发生变化时的回调.
            handleClick(item,node,self) {
                if(node==true){ //点击未选中复选框
                    console.log(item.label)
                    this.filters.glbmbh=item.id
                    this.filters.glbmmc=item.label
                    this.$refs.roletree.setCheckedNodes([item]);

                }else {
                    if (this.filters.glbmbh == item.id){ //点击已选中复选框。保证至少有一个选中
                        console.log(item.label)
                        this.filters.glbmbh=item.id
                        this.filters.glbmmc=item.label
                        this.$refs.roletree.setCheckedNodes([item]);
                    }
                }
                this.treeBoxVisible = false;
            },
            nodeClick(item,node,self){
                console.log(item.label)
                this.filters.glbmbh=item.id
                this.filters.glbmmc=item.label
                this.$refs.roletree.setCheckedNodes([item]);
            },
            handleClose:function (e) {
                this.treeBoxVisible = false;

            },
            treeBoxshow:function () {
                this.treeBoxVisible = !this.treeBoxVisible;
            }





        },
        mounted() {
            // var form =document.getElementById("formdata");
            // form.reset();
            // this.bmgllist();
            this.getTree();
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