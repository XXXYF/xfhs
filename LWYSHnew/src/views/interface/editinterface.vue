<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle xtTitle">修改授权</div>
            <el-form  :model="filters" ref="filters" :rules="filtersValid" id="filterss" class="filters xtcsfilter" label-width="40%">
                <el-col :span="6"  class="colborder" style="border-right: none">
                </el-col>
                <el-col :span="12"  class="colborder" >
                    <el-form-item label="接口ID:"  prop="jkid">
                        <el-col :span="7" >
                            <el-select v-model="filters.jklx"  placeholder="请选择" @change="getjkxq" >
                                <el-option label="安检接口" value="1"></el-option>
                                <el-option label="综检接口" value="2"></el-option>
                                <el-option label="环检接口" value="3"></el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="15" :offset="2"  prop="jkid">
                            <el-select v-model="filters.jkid"  placeholder="请选择" >
                                <el-option
                                        v-for="item in bmbhList"
                                        :key="item.jkid"
                                        :label="item.jkmc"
                                        :value="item.jkid">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="6"  class="colborder" >
                </el-col>
                <el-col :span="6"  class="colborder" style="border-right: none">
                </el-col>
                <el-col :span="12"  class="colborder" >
                    <el-form-item label="部门编号:" prop="bmbh">
                        <el-input v-model="filters.bmmc" v-clickoutside="handleClose" :readonly="true" @click.native="treeBoxshow" ></el-input>
                        <el-tree
                                :data="data2"
                                show-checkbox
                                node-key="id"
                                :default-checked-keys="bmbhdate"
                                :props="defaultProps"
                                check-strictly
                                v-show="treeBoxVisible"
                                @check-change="handleClick"
                                @node-click="nodeClick"
                                ref="roletree">
                        </el-tree>
                    </el-form-item>
                </el-col>
                <el-col :span="6"  class="colborder" >
                </el-col>
                <el-col :span="6"  class="colborder" style="border-right: none">
                </el-col>
                <el-col :span="12"  class="colborder" >
                    <el-form-item label="接口状态:"  prop="jkzt">
                        <el-select v-model="filters.jkzt"  placeholder="请选择" >
                            <el-option label="启用" value="1"></el-option>
                            <el-option label="禁用" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6"  class="colborder" >
                </el-col>
                <el-col :span="6"  class="colborder" style="border-right: none">
                </el-col>
                <el-col :span="12"  class="colborder" >
                    <el-form-item label="调用次数:" prop="dycs">
                        <el-input v-model="filters.dycs" placeholder=""  :maxlength="10"  ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6"  class="colborder" >
                </el-col>
                <el-col :span="24" class="selectBtnbox" style="text-align: center">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="changeuser">确定</el-button>
                    <el-button class="dialog-button reset-button" @click="back">取消</el-button>
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
            return {
                filters: {
                    jklx: "",
                    jkid: "",
                    bmbh: "",
                    jkzt: "",
                    dycs: "",

                },
                bmbhdate: [],

                filtersValid:{
                    jklx: [
                        { required: true, message: '请输入接口类型', trigger: 'blur' },
                    ],
                    jkid: [
                        { required: true, message: '请输入接口ID', trigger: 'blur' },
                    ],
                    bmbh: [
                        { required: true, message: '请输入部门编号', trigger: 'blur' },
                    ],
                    jkzt: [
                        { required: true, message: '请输入接口状态', trigger: 'blur' },
                    ],
                    dycs: [
                        { required: true, message: '请输入调用次数', trigger: 'blur' },
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
            changeuser:function () {

                this.$refs.filters.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {

                            this.listLoading = true;
                            let para = Object.assign({}, this.filters);
                            console.log(para);
                            var qs = require('querystring')
                            axios.post('api/sys/jksqgl/update', qs.stringify(para) ,{
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
                                sessionStorage.setItem('interfacedata',JSON.stringify(this.filters))
                                this.$router.push('/interfaceAuthorization')

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

            },
            //重置
            resetForm(formName) {
                this.filters = Object.assign({});
            },
            //用户信息列表
            getjkxq:function () {
                let para = {
                    "sjlx" : this.filters.jklx,
                };
                axios.post('api/sys/ggcl/queryCsxxInfo', qs.stringify(para) ,{
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
                    this.bmbhList = response.data.data.info;

                }).catch((response) =>{

                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });

            },

            //获取部门代号列表
            getTree() {
                let para = {
                    bmlx:1,
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
                    this.filters.bmmc=item.label
                    this.$refs.roletree.setCheckedNodes([item]);

                }else {
                    if (this.filters.bmbh == item.id){ //点击已选中复选框。保证至少有一个选中
                        console.log(item.label)
                        this.filters.bmbh=item.id
                        this.filters.bmmc=item.label
                        this.$refs.roletree.setCheckedNodes([item]);
                    }
                }
                this.treeBoxVisible = false;
            },
            nodeClick(item,node,self){
                console.log(item.label)
                this.filters.bmbh=item.id
                this.filters.bmmc=item.label
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

            this.getTree();
            //获取消息
            var interfacedata = sessionStorage.getItem('interfacedata');
            console.log(interfacedata,'456')
            if (interfacedata) {
                interfacedata = JSON.parse(interfacedata);
                this.filters = interfacedata || '';
                console.log(this.filters,123);
                this.bmbhdate.push(this.filters.bmbh);
                this.filters.dycs = String(interfacedata.dycs);
                // this.filters.cdxxs.eval();
            };
            this.getjkxq();

        },

    }

</script>

<style scoped>

</style>