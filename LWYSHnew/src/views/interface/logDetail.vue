<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle xtTitle">接口调用日志详情</div>
            <el-form  :model="filters" ref="filters"  id="filterss" class="filters xtcsfilter" label-width="40%">
                <el-col :span="5"  class="colborder fontBox">
                    接口ID
                </el-col>
                <el-col :span="7"  class="colborder msgBox" style="border-right: 1px solid #cecece" >
                    {{filters.jkid}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" >
                    部门名称
                </el-col>
                <el-col :span="7"  class="colborder msgBox" >
                    {{filters.bmmc}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox">
                    调用时间
                </el-col>
                <el-col :span="7"  class="colborder msgBox" style="border-right: 1px solid #cecece" >
                    {{filters.dysj | timeDate}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" >
                    返回结果代码
                </el-col>
                <el-col :span="7"  class="colborder msgBox" >
                    {{filters.fhjgdm | fhjgdmDate}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" >
                    返回结果信息
                </el-col>
                <el-col :span="19"  class="colborder msgBox" >
                    {{filters.fhjgxx}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" style="height: 150px" >
                    传入参数
                </el-col>
                <el-col :span="19"  class="colborder msgBox" style="height: 150px;overflow: auto;word-wrap:break-word" >
                    {{filters.crcs}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" style="height: 150px" >
                    返回参数
                </el-col>
                <el-col :span="19"  class="colborder msgBox" style="height: 150px;overflow: auto;word-wrap:break-word" >
                    {{filters.cccs}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox">
                    返回时间
                </el-col>
                <el-col :span="7"  class="colborder msgBox" style="border-right: 1px solid #cecece" >
                    {{filters.fhsj | timeDate}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" >
                    接口类型
                </el-col>
                <el-col :span="7"  class="colborder msgBox" >
                    {{filters.jklx | fontDate}}
                </el-col>

                <el-col :span="24" class="selectBtnbox" >
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
                    jklx: "",
                    jkid: "",
                    bmbh: "",
                    dycs: "",

                },


                listLoading: false,

            }
        },
        methods: {
            //用户角色显示转换
            formatRole :function(row, column) {
                return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
            },



            back:function () {
                this.$router.go(-1);

            },







        },
        mounted() {
            //获取消息
            var logDetaildata = sessionStorage.getItem('logDetaildata');
            console.log(logDetaildata,'456')
            if (logDetaildata) {
                logDetaildata = JSON.parse(logDetaildata);
                this.filters = logDetaildata || '';

            };
        },
        filters:{
            timeDate:function (dysj) {
                if (dysj === null){
                    return "";
                }else {
                    return moment(dysj).format('YYYY-MM-DD  HH:mm:ss')
                }
            },
            fontDate:function (value) {
                const fff = ['安检','综检','环检'];
                return fff[value -1]
            },
            fhjgdmDate:function (dysj) {
                if (dysj == '1'){
                    return "成功";
                }else {
                    return "失败"
                }
            },

        }
    }

</script>

<style scoped>

</style>