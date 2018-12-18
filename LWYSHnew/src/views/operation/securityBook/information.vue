<template>
	<div class="childtabBox">
		<div class="childtabBoxtitle">
			车辆基本信息
		</div>
		<el-col :model="filters" :span="24" class="clxxBox">
			<el-col :span="8" >
				检验流水号：{{filters.jylsh}}
			</el-col>
			<el-col :span="8" >
				检验机构编号：{{filters.jyjgbh}}
			</el-col>
			<el-col :span="8" >
				检验类别：{{filters.jylb | jylbDate}}
			</el-col>
			<el-col :span="8" >
				号牌号码：{{filters.hphm}}
			</el-col>
			<el-col :span="8" >
				号牌种类：{{filters.hpzlmc}}
			</el-col>
			<el-col :span="8" >
				车辆类型：{{filters.cllxmc}}
			</el-col>
			<el-col :span="8" >
				车辆识别代号：{{filters.clsbdh}}
			</el-col>
			<el-col :span="8" >
				检验日期：{{filters.jyrq | formDate}}
			</el-col>
			<el-col :span="8" >
				检验次数：{{filters.jycs}}
			</el-col>
			<el-col :span="8" >
				流水状态：{{filters.lszt | lsztDate}}
			</el-col>
			<el-col :span="8" >
				检验结论：{{filters.jyjl}}
			</el-col>
			<el-col :span="8" >
				审核结果：{{filters.shjg}}
			</el-col>
			<el-col :span="8" >
				申请审核时间：{{filters.sqsj | formDate}}
			</el-col>
			<el-col :span="8" >
				监管审核不通过原因：{{filters.shbtgyy}}
			</el-col>
		</el-col>
		<div class="childtabBoxtitle" >
			预审核结果信息
		</div>
		<el-col :model="filters" :span="24" class="clxxBox">
			<el-col :span="24" >
				预审核结果：<span style="color: red">{{filters.yshjg | yshjg}}</span>
			</el-col>
			<el-col :span="24" >
				预审核不通过描述信息：<span style="color: red">{{filters.yshmsxx}}</span>
			</el-col>

		</el-col>
	</div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
    export default {
        components:{
        },
        data() {
            return {
                activeName2: 'first',
                filters:{
                    jylsh:'',
                    jyjgbh:'',
                    jylb:'',
                    hphm:'',
                    hpzl:'',
                    cllx:'',
                    clsbdh:'',
                    jyrq:'',
                    jycs:'',
                    lszt:'',
                    jyjl:'',
                    shjg:'',
                    hpzlmc:'',
                    sqsj:'',
                    shbtgyy:'',
                    yshjg:'',
                    yshmsxx:'',
				}
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            updatesqsh() {
                var self = this;
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                };
                var qs = require('querystring')
                axios.post('api/ajlw/ysh/getYshResult', qs.stringify(para) ,{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    console.log(response.data.data,'2233232');
                    this.filters.yshjg = response.data.data.yshjg;
                    this.filters.yshmsxx = response.data.data.yshmsxx;
                }).catch((response) =>{

                });
            },
        },
        mounted(){
            var rowdate = sessionStorage.getItem('rowdate');
            if (rowdate) {
                rowdate = JSON.parse(rowdate);
                this.filters = rowdate || '';
            };
			this.updatesqsh();

        },
        filters:{
            formDate:function (dysj) {
                //return monent(dysj)
                return moment(dysj).format('YYYY-MM-DD HH:mm:ss')

            },
            jylbDate:function (jylb) {
                if(jylb == '00'){
                    return '注册登记检验'
                }else  if (jylb == '01'){
                    return '在用车检验（定检）'
                }else  if (jylb == '02'){
                    return '临时检验'
                }else  if (jylb == '03'){
                    return '特殊检验'
                }else  if (jylb == '04'){
                    return '在用车检验（非定检）'
                }else {
                    return ''
                }
            },
            lsztDate:function (lszt) {
                if(lszt == '0'){
                    return '注册登记检验'
                }else  if (lszt == '1'){
                    return '检测完成'
                }else  if (lszt == '2'){
                    return '合格'
                }else  if (lszt == '3'){
                    return '不合格'
                }else  if (lszt == '4'){
                    return '退办'
                }else  if (lszt == '5'){
                    return '正在审核中'
                }else {
                    return ''
                }
            },
            yshjg:function (yshjg) {
                if(yshjg == '0'){
                    return '审核中'
                }else  if (yshjg == '1'){
                    return '合格'
                }else  if (yshjg == '2'){
                    return '不合格'
                }else  if (yshjg == '3'){
                    return '已读取'
                }else  if (yshjg == '4'){
                    return '预审中'
                }else {
                    return ''
                }
            },
        }
    };
</script>