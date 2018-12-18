<!-- 安检-人工外观检测 -->
<template>
	<div :model="data" class="detail-box rgwgjyjlBox">
		<!-- <h1>{{data.useid}}</h1> -->
		<p class="title">机动车安全技术检验表（人工检验部分）</p>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="8">一、基本信息</td>
			</tr>
			<tr class="tab-tr">
				<td  style="width:13%;">号牌号码（编号）：</td>
				<td  style="width:13%;">{{data.hphm}}</td>
				<td  style="width:13%;">车辆类型：</td>
				<td  style="width:13%;">{{data.cllxmc}}</td>
				<td  style="width:13%;">使用性质：</td>
				<td  style="width:13%;">{{data.syxzmc}}</td>
				<td  style="width:13%;">里程表读数：</td>
				<td  >{{data.lcbds}}</td>

			<tr class="tab-tr sec-tab">
				<td  style="width:13%;">车辆出厂日期：</td>
				<td  style="width:13%;">{{data.ccrq}}</td>
				<td  style="width:13%;">初次登记日期：</td>
				<td  style="width:13%;">{{data.ccdjrq}}</td>
				<td  style="width:13%;">检验日期：</td>
				<td  colspan="3" style="width:13%;">{{data.kssj}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="8">二、检验结果</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">序号</td>
				<td colspan="2">检验项目</td>
				<td colspan="1">判定</td>
				<td colspan="1">序号</td>
				<td colspan="2">检验项目</td>
				<td colspan="1">判定</td>
			</tr>
			<tr class="tab-tr">
				<td rowspan="5" colspan="1">1</td>
				<td rowspan="5" colspan="1">车辆唯一性检查</td>
				<td colspan="1">1、号牌号码/车辆类型</td>
				<td colspan="1">{{data.rhplx | rppxh }}</td>
				<td rowspan="15" colspan="1">4</td>
				<td rowspan="15" colspan="1">安全装置检查（续</td>
				<td colspan="1">27、车辆尾部标志板</td>
				<td colspan="1">{{data.rclwbzb | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">2、车辆品牌/型号</td>
				<td colspan="1">{{data.rclwbzb | rppxh }}</td>
				<td colspan="1">28、侧后防护装置</td>
				<td colspan="1">{{data.rchfh | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">3、车辆识别代号（或整车出厂编号）</td>
				<td colspan="1">{{data.rvin | rppxh }}</td>
				<td colspan="1">29、应急锤</td>
				<td colspan="1">{{data.yjc | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">4、发动机号码（或电动机号码）</td>
				<td colspan="1">{{data.fdjhm | rppxh }}</td>
				<td colspan="1">30、急救箱</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">5、车辆颜色和外形</td>
				<td colspan="1">{{data.clys | rppxh }}</td>
				<td colspan="1">31、限速功能或限速装置</td>
				<td colspan="1">{{data.rxsgn | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td rowspan="10" colspan="1">2</td>
				<td rowspan="10" colspan="1">车辆特征参数检查</td>
				<td colspan="1">6、外廓尺寸</td>
				<td colspan="1">{{data.rwkcc | rppxh }}</td>
				<td colspan="1">32、防抱死制动装置</td>
				<td colspan="1">{{data.rfbs | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">7、轴距</td>
				<td colspan="1">{{data.rzj | rppxh }}</td>
				<td colspan="1">33、辅助制动装置</td>
				<td colspan="1">{{data.rfzzd | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">8、整备质量</td>
				<td colspan="1">{{data.rzbzl | rppxh }}</td>
				<td colspan="1">34、盘式制动器</td>
				<td colspan="1">{{data.rpszdq | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">9、核定载人数</td>
				<td colspan="1">{{data.rhdzrs | rppxh }}</td>
				<td colspan="1">35、紧急切断装置</td>
				<td colspan="1">{{data.rjjqd | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">10、核定载质量</td>
				<td colspan="1">{{data.rhdzll | rppxh }}</td>
				<td colspan="1">36、发动机舱自动灭火装置</td>
				<td colspan="1">{{data.rfdjcmh | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">11、栏板高度</td>
				<td colspan="1">{{data.rlbgd | rppxh }}</td>
				<td colspan="1">37、手动机械断电开关</td>
				<td colspan="1">{{data.rsddd | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">12、后轴钢板弹簧片数</td>
				<td colspan="1">{{data.rhzgbthps | rppxh }}</td>
				<td colspan="1">38、副制动踏板</td>
				<td colspan="1">{{data.rfzdtb | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">13、客车应急出口</td>
				<td colspan="1">{{data.rkcyjck | rppxh }}</td>
				<td colspan="1">39、校车标志灯和校车停车指示标志牌</td>
				<td colspan="1">{{data.rxcbz | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">14、客车乘客通道和引道</td>
				<td colspan="1">{{data.rkccktd | rppxh }}</td>
				<td colspan="1">40、危险货物运输车标志</td>
				<td colspan="1">{{data.rwxhwbz | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">15、货厢</td>
				<td colspan="1">{{data.rhx | rppxh }}</td>
				<td colspan="1">41、肢体残疾人操纵辅助装置</td>
				<td colspan="1">{{data.ztcjrfzzz | rppxh }}</td>
			</tr>

			<tr class="tab-tr">
				<td colspan="1" rowspan="6">3</td>
				<td colspan="1" rowspan="6">车辆外观检查</td>
				<td colspan="1">16、车身外观</td>
				<td colspan="1">{{data.rcswg | rppxh }}</td>
				<td colspan="1" rowspan="3">5</td>
				<td colspan="2" rowspan="3">联网查询车辆事故/违法信息 （对发生过造成人员伤亡交通事故的送检机动车，人工检验时应重点检查损伤部位和损伤情况：） </td>
				<td colspan="1" rowspan="3">{{data.rlwcx | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">17、外观标识、标注和标牌</td>
				<td colspan="1">{{data.rcswg | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">18、外部照明和信号灯具</td>
				<td colspan="1">{{data.rwgbs | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">19、轮胎</td>
				<td colspan="1">{{data.rlt | rppxh }}</td>
				<td colspan="1" rowspan="4">6</td>
				<td colspan="1" rowspan="4">底盘动态检验</td>
				<td colspan="1">42、转向系</td>
				<td colspan="1">{{data.rzxx | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">20、号牌及号牌安装</td>
				<td colspan="1">{{data.rhpaz | rppxh }}</td>
				<td colspan="1">43、传动系</td>
				<td colspan="1">{{data.rcdx | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">21、加装/改装灯具</td>
				<td colspan="1">{{data.rjzgj | rppxh }}</td>
				<td colspan="1">44、制动系</td>
				<td colspan="1">{{data.rzdx | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="6">4</td>
				<td colspan="1" rowspan="6">安全装置检查</td>
				<td colspan="1">22、汽车安全带/摩托车安全头盔</td>
				<td colspan="1">{{data.rqcaqd | rppxh }}</td>
				<td colspan="1">45、仪表和指示器</td>
				<td colspan="1">{{data.rybzsq | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">23、机动车用三角警告牌</td>
				<td colspan="1">{{data.rsjp | rppxh }}</td>
				<td colspan="1" rowspan="5">7</td>
				<td colspan="1" rowspan="5">车辆底盘部件检查</td>
				<td colspan="1">46、转向系部件</td>
				<td colspan="1">{{data.rzxxbj | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">24、灭火器</td>
				<td colspan="1">{{data.rmhq | rppxh }}</td>
				<td colspan="1">47、传动系部件</td>
				<td colspan="1">{{data.rcdxbj | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">25、行驶记录装置</td>
				<td colspan="1">{{data.rxsjly | rppxh }}</td>
				<td colspan="1">48、行驶系部件</td>
				<td colspan="1">{{data.rxsxbj | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">26、车身反光标识</td>
				<td colspan="1">{{data.rcsfgbs | rppxh }}</td>
				<td colspan="1">49、制动系部件</td>
				<td colspan="1">{{data.rzdxbj | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1"></td>
				<td colspan="1"></td>
				<td colspan="1">50、其它部件</td>
				<td colspan="1">{{data.rqtbj | rppxh }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">序号</td>
				<td colspan="3">不合格项（填写编号和名称）</td>
				<td colspan="3">不合格项目说明</td>
				<td colspan="1">备注</td>
			</tr>
			<tr class="tab-tr" v-for=" item in data.rgjyjgs" >
				<td colspan="1">{{item.xh}}</td>
				<td colspan="3">{{item.rgjyxm}}</td>
				<td colspan="3">{{item.rgjysm }}</td>
				<td colspan="1">{{item.rgjybz}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="4" style="width:54%">车辆外廓尺寸（mm×mm×mm）: {{data.cwk}}</td>
				<td colspan="4" class="bd-wt0" style="width:46%">整备质量（kg）:{{data.zbzl}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="3" style="width:30%">机动车所有人：{{data.syr}}</td>
				<td colspan="2" class="bd-wt0" style="width:30%">手机电话：{{data.sjhm}}</td>
				<td colspan="3" class="bd-wt0" style="width:35%">地址/邮编：{{data.yzbm}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" style="22%">外检人员</td>
				<td colspan="2" style="24%">外检人员：</td>
				<td colspan="2" class="bd-wt0" style="24%">动态检验员：</td>
				<td colspan="3" class="bd-wt0" style="30%">地盘检验员：</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">外检员建议：</td>
				<td colspan="7"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">动态检验员建议：</td>
				<td colspan="7"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">地盘检验员建议：</td>
				<td colspan="7"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="8">
					<p>注1： 判定栏中“○”为合格，“╳”为不合格，“—”表示不适用于送检车。</p>
					<p>注2： 当车辆外廓尺寸、整备质量检验项目使用仪器自动测量并打印在仪器设备检验表格中时，本表相应参数可不填。</p>
				</td>
			</tr>
		</table>
		<p class="basic-tit">检验依据： GB 7258-2017、GB 21861-2014</p>
	</div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
    export default{
        data(){
            return{
                filters:{},
                data:{},
            }
        },
        methods:{
            //获取部门代号列表
            searchReport() {
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                    bgdlx: 1,
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/ajlw/bgdcx/searchReport', qs.stringify(para) ,{
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
                    this.data = response.data.data;
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },


        },
        mounted(){
            var rowdate = sessionStorage.getItem('rowdate');
            if (rowdate) {
                rowdate = JSON.parse(rowdate);
                this.filters = rowdate || '';
            };
            this.searchReport();
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
            rppxh:function (dysj) {

                if(dysj == '0'){
                    return '—'
                }else  if (dysj == '1'){
                    return '〇'
                }else  if (dysj == '2'){
                    return '╳'
                }else {
                    return '—'
                }
            },
        }

    }
</script>
<style scoped>
	.detail-box .tab-msg .bd-wt0{
		border-left: none;
	}
	.detail-box .sec-tab .bd-wt0{
		border-top:none;
	}
	.detail-box .sec-tab .bd-wt{
		border-top: none;
	}
</style>
