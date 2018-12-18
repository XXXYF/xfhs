<template>
    <section class="sec-box" >
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle xtTitle">系统操作日志详情</div>
            <el-form  :model="filters" ref="filters"  id="filterss" class="filters xtcsfilter" label-width="40%">
                <el-col :span="5"  class="colborder fontBox">
                    用户ID
                </el-col>
                <el-col :span="7"  class="colborder msgBox" style="border-right: 1px solid #cecece" >
                    {{filters.id}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" >
                    IP地址
                </el-col>
                <el-col :span="7"  class="colborder msgBox" >
                    {{filters.ipdz}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox">
                    操作时间
                </el-col>
                <el-col :span="7"  class="colborder msgBox" style="border-right: 1px solid #cecece" >
                    {{filters.czsj | timeDate}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" >
                    操作结果
                </el-col>
                <el-col :span="7"  class="colborder msgBox" >
                    {{filters.czjg | fontDate}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" >
                    操作说明
                </el-col>
                <el-col :span="19"  class="colborder msgBox" >
                    {{filters.czsm}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" style="height: 150px"  >
                    传入参数
                </el-col>
                <el-col :span="19"  class="colborder msgBox" style="height: 150px;overflow: auto;word-wrap:break-word" >
                    {{filters.crcs}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" style="height: 150px" >
                    传出参数
                </el-col>
                <el-col :span="19"  class="colborder msgBox" style="height: 150px;overflow: auto;word-wrap:break-word" >
                    {{filters.cccs}}
                </el-col>
                <el-col :span="5"  class="colborder fontBox" >
                    访问路径
                </el-col>
                <el-col :span="19"  class="colborder msgBox" >
                    {{filters.fwlj}}
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
            var syslogMsg = sessionStorage.getItem('syslogMsg');
            console.log(syslogMsg,'456')
            if (syslogMsg) {
                syslogMsg = JSON.parse(syslogMsg);
                this.filters = syslogMsg || '';

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
            fontDate:function (dysj) {
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