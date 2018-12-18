<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">新增用户</div>
            <el-form  :model="filters" ref="filters" :rules="filtersValid" id="filterss" class="filters" label-width="260px">
                <el-col :span="12" class="colborder">
                    <el-form-item label="用户名:" prop="yhbh">
                        <el-input v-model="filters.yhbh" placeholder="" :maxlength="10"   ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="部门名称:" prop="bmbh">
                        <!--<el-select v-model="filters.bmbh"  placeholder="请选择" >-->
                            <!--<el-option-->
                                    <!--v-for="item in bmbhList"-->
                                    <!--:key="item.bmbh"-->
                                    <!--:label="item.bmmc"-->
                                    <!--:value="item.bmbh">-->
                            <!--</el-option>-->
                        <!--</el-select>-->
                        <el-input v-model="filters.glbmmc" v-clickoutside="handleClose" :readonly="true" @click.native="treeBoxshow" ></el-input>
                        <el-tree
                                :data="data2"
                                show-checkbox
                                node-key="id"
                                :default-checked-keys="filters.glbmbhdata"
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
                    <el-form-item label="用户姓名:" prop="yhxm">
                        <el-input v-model="filters.yhxm" placeholder=""  :maxlength="20" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="用户身份证号码:" prop="yhsfzh" >
                        <el-input v-model="filters.yhsfzh" placeholder=""  :maxlength="30" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="用户联系方式:">
                        <el-input v-filterSpecialChar v-model="filters.yhlxfs" placeholder=""  :maxlength="30" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="用户有效期:" prop="yhyxq">
                        <el-date-picker
                                v-model="filters.yhyxq"
                                type="date"  :editable="false"
                                placeholder="选择日期"
                                :picker-options="pickerOptions0">
                        </el-date-picker>

                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="密码有效期:" prop="mmyqx">
                        <el-date-picker
                                v-model="filters.mmyqx"
                                type="date"  :editable="false"
                                placeholder="密码有效期"
                                :picker-options="pickerOptions0">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="允许登录IP地址1:">
                        <el-input v-model="filters.dlipdz1" placeholder=""  :maxlength="20"  ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="允许登录IP地址2:" >
                        <el-input v-model="filters.dlipdz2" placeholder=""  :maxlength="20" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="允许登录IP地址3:" >
                        <el-input v-model="filters.dlipdz3" placeholder="" :maxlength="20"  ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="起始允许登录IP地址:" prop="qsipdz">
                        <el-input v-model="filters.qsipdz" placeholder=""  :maxlength="20" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="截至允许登录IP地址:" prop="jzipdz">
                        <el-input v-model="filters.jzipdz" placeholder=""  :maxlength="20" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12" class="colborder">
                    <el-form-item label="用户角色:" prop="yhjs">
                        <el-select v-model="filters.yhjs"  placeholder="请选择" >
                            <el-option
                                    v-for="item in jsglList"
                                    :key="item.jsid"
                                    :label="item.jsmc"
                                    :value="item.jsid">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <!--<el-col :span="12" class="colborder">-->
                    <!--<el-form-item label="是否管理员:" prop="sfgly">-->
                        <!--<el-select v-model="filters.sfgly"  placeholder="请选择" >-->
                            <!--<el-option label="是" value="1"></el-option>-->
                            <!--<el-option label="不是" value="0"></el-option>-->
                        <!--</el-select>-->
                    <!--</el-form-item>-->
                <!--</el-col>-->

                <el-col :span="24" class="selectBtnbox">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="addUser">新增</el-button>
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
    import {isIpadrss} from '../../api/validate'

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
            var validIpadrss=(rule, value,callback)=>{
                if (!value){
                    callback(new Error('请输入IP地址'))
                }else  if (!isIpadrss(value)){
                    callback(new Error('请输入正确的IP地址'))
                }else {
                    callback()
                }

            }

            return {
                pickerOptions0: {
                    disabledDate: (time) => {
                        return  time.getTime() < Date.now();
                    }
                },
                filters: {
                    yhbh: '',
                    bmbh: '',
                    glbmmc: '',
                    yhxm: '',
                    yhsfzh: '',
                    yhlxfs: '',
                    yhyxq: '',
                    mmyqx: '',
                    dlipdz1: '',
                    dlipdz2: '',
                    dlipdz3: '',
                    qsipdz: '',
                    jzipdz: '',
                    yhjs: '',
                    yhzt: '',
                    // sfgly: '',
                },
                filtersValid:{
                    yhbh: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    bmbh: [
                        { required: true, message: '请输入部门名称', trigger: 'blur' },
                    ],
                    yhxm: [
                        { required: true, message: '请输入用户姓名', trigger: 'blur' },
                    ],
                    yhsfzh: [
                        { required: true, trigger: 'blur', validator: validCardNo }//这里需要用到全局变量
                    ],
                    yhlxfs: [
                        { required: true, message: '请输入用户联系方式', trigger: 'blur' },
                    ],
                    yhyxq: [
                        { type: 'date',required: true, message: '请输入用户有效期', trigger: 'change' },
                    ],
                    mmyqx: [
                        { type: 'date',required: true, message: '请输入密码有效期', trigger: 'change' },
                    ],
                    yhjs: [
                        { required: true, message: '请输入用户角色', trigger: 'blur' },
                    ],
                    yhzt: [
                        { required: true, message: '请输入用户状态', trigger: 'blur' },
                    ],
                    // qsipdz: [
                    //     {required: true, trigger: 'blur', validator: validIpadrss },
                    // ],
                    // jzipdz: [
                    //     {required: true, trigger: 'blur', validator: validIpadrss },
                    // ],
                },

                listLoading: false,
                // bmbhList:{},
                jsglList:{},
                bmbhList:{},
                userdata:{},
                treeBoxVisible:false,
                data2: [],
                glbmbhdata: [],
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
            addUser:function () {


                if( this.filters.yhjs != ''&&this.filters.yhjs != null&&this.filters.yhjs != undefined){
                    this.filters.yhjs = this.filters.yhjs.toString();
                }
                this.$refs.filters.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            if(this.filters.yhyxq !== ""){
                                this.filters.yhyxq = moment(this.filters.yhyxq).format('YYYY-MM-DD')
                            }
                            if(this.filters.mmyqx !== ""){
                                this.filters.mmyqx = moment(this.filters.mmyqx).format('YYYY-MM-DD')
                            }
                            this.listLoading = true;
                            let para = Object.assign({}, this.filters);
                            console.log(para);
                            var qs = require('querystring')
                            axios.post('api/sys/yhgl/insert', qs.stringify(para) ,{
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
                                    message: '新增成功',
                                    type: 'success'
                                });
                                this.filters = Object.assign({});
                                this.$router.push('/userManagement')
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
            // bmgllist:function () {
            //
            //     axios.post('api/sys/bmgl/list' ,{
            //         headers: {
            //             "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
            //         },
            //         withCredentials:true,
            //     }).then((response) =>{
            //         if (response.data.msg == '用户未登录'){
            //             this.$message({
            //                 message: response.data.msg,
            //                 type: 'error'
            //             });
            //             sessionStorage.removeItem('user');
            //             this.$router.push('/login');
            //         }else if(response.data.msg == '获取不到用户信息'){
            //             this.$message({
            //                 message: response.data.msg,
            //                 type: 'error'
            //             });
            //             sessionStorage.removeItem('user');
            //             this.$router.push('/login');
            //         }
            //         this.bmbhList = response.data.data;
            //         console.log(this.bmbhList,111222);
            //     }).catch((response) =>{
            //
            //         console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
            //     });
            //
            // },
            //用户信息列表
            jsgllist:function () {

                axios.post('api/sys/jsgl/list' ,{
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
                    this.jsglList = response.data.data;
                }).catch((response) =>{

                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });

            },

            //获取部门代号列表
            getTree() {
                let para = {
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/sys/bmgl/tree', qs.stringify(para) ,{
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
                    this.filters.bmbh=item.id
                    this.filters.glbmmc=item.label
                    this.$refs.roletree.setCheckedNodes([item]);

                }else {
                    if (this.filters.bmbh == item.id){ //点击已选中复选框。保证至少有一个选中
                        console.log(item.label)
                        this.filters.bmbh=item.id
                        this.filters.glbmmc=item.label
                        this.$refs.roletree.setCheckedNodes([item]);
                    }
                }
                this.treeBoxVisible = false;
            },
            nodeClick(item,node,self){
                console.log(item.label)
                this.filters.bmbh=item.id
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
            this.getTree();
            this.jsgllist();
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