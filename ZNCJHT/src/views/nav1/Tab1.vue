<!-- 安检-人工外观检测 -->
<template>
	<div :model="data" class="detail-box">
		<!-- <h1>{{data.useid}}</h1> -->
		<p class="title">机动车安全技术检验表（人工检验部分）</p>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="8">一、基本信息</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="3" style="width:26%;">号牌号码（编号）：{{data.name}}</td>
				<td colspan="2" class="bd-wt0" style="width:24%;">车辆类型：轻便正三轮摩托车</td>
				<td colspan="2" class="bd-wt0" style="width:24%;">使用性质：非营运</td>
				<td colspan="2" class="bd-wt0" style="width:24%;">里程表读数：1000km</td>
			</tr>
			<tr class="tab-tr sec-tab">
				<td colspan="2" class="bd-wt">车辆出厂日期：</td>
				<td colspan="1" class="bd-wt0">2015-12-15</td>
				<td colspan="1" class="bd-wt0">初次登记日期：</td>
				<td colspan="2" class="bd-wt0">2018-01-19</td>
				<td colspan="1" class="bd-wt0">检验日期：</td>
				<td colspan="2" class="bd-wt0">2018-01-19</td>
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
				<td colspan="1">〇</td>
				<td rowspan="15" colspan="1">4</td>
				<td rowspan="15" colspan="1">安全装置检查（续</td>
				<td colspan="1">27、车辆尾部标志板</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">2、车辆品牌/型号</td>
				<td colspan="1">〇</td>
				<td colspan="1">28、侧后防护装置</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">3、车辆识别代号（或整车出厂编号）</td>
				<td colspan="1">〇</td>
				<td colspan="1">29、应急锤</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">4、发动机号码（或电动机号码）</td>
				<td colspan="1">〇</td>
				<td colspan="1">30、急救箱</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">5、车辆颜色和外形</td>
				<td colspan="1">〇</td>
				<td colspan="1">31、限速功能或限速装置</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td rowspan="10" colspan="1">2</td>
				<td rowspan="10" colspan="1">车辆特征参数检查</td>
				<td colspan="1">6、外廓尺寸</td>
				<td colspan="1">〇</td>
				<td colspan="1">32、防抱死制动装置</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">7、轴距</td>
				<td colspan="1">〇</td>
				<td colspan="1">33、辅助制动装置</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">8、整备质量</td>
				<td colspan="1">〇</td>
				<td colspan="1">34、盘式制动器</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">9、核定载人数</td>
				<td colspan="1">〇</td>
				<td colspan="1">35、紧急切断装置</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">10、核定载质量</td>
				<td colspan="1">〇</td>
				<td colspan="1">36、发动机舱自动灭火装置</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">11、栏板高度</td>
				<td colspan="1">〇</td>
				<td colspan="1">37、手动机械断电开关</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">12、后轴钢板弹簧片数</td>
				<td colspan="1">〇</td>
				<td colspan="1">38、副制动踏板</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">13、客车应急出口</td>
				<td colspan="1">〇</td>
				<td colspan="1">39、校车标志灯和校车停车指示标志牌</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">14、客车乘客通道和引道</td>
				<td colspan="1">〇</td>
				<td colspan="1">40、危险货物运输车标志</td>
				<td colspan="1">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">15、货厢</td>
				<td colspan="1">〇</td>
				<td colspan="1">41、肢体残疾人操纵辅助装置</td>
				<td colspan="1">一</td>
			</tr>

			<tr class="tab-tr">
				<td colspan="1" rowspan="6">3</td>
				<td colspan="1" rowspan="6">车辆外观检查</td>
				<td colspan="1">16、车身外观</td>
				<td colspan="1">〇</td>
				<td colspan="1" rowspan="3">5</td>
				<td colspan="2" rowspan="3">联网查询车辆事故/违法信息 （对发生过造成人员伤亡交通事故的送检机动车，人工检验时应重点检查损伤部位和损伤情况：） </td>
				<td colspan="1" rowspan="3">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">17、外观标识、标注和标牌</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">18、外部照明和信号灯具</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">19、轮胎</td>
				<td colspan="1">〇</td>
				<td colspan="1" rowspan="4">6</td>
				<td colspan="1" rowspan="4">底盘动态检验</td>
				<td colspan="1">42、转向系</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">20、号牌及号牌安装</td>
				<td colspan="1">〇</td>
				<td colspan="1">43、传动系</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">21、加装/改装灯具</td>
				<td colspan="1">〇</td>
				<td colspan="1">44、制动系</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="6">4</td>
				<td colspan="1" rowspan="6">安全装置检查</td>
				<td colspan="1">22、汽车安全带/摩托车安全头盔</td>
				<td colspan="1">〇</td>
				<td colspan="1">45、仪表和指示器</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">23、机动车用三角警告牌</td>
				<td colspan="1">〇</td>
				<td colspan="1" rowspan="5">7</td>
				<td colspan="1" rowspan="5">车辆底盘部件检查</td>
				<td colspan="1">46、转向系部件</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">24、灭火器</td>
				<td colspan="1">〇</td>
				<td colspan="1">47、传动系部件</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">25、行驶记录装置</td>
				<td colspan="1">〇</td>
				<td colspan="1">48、行驶系部件</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">26、车身反光标识</td>
				<td colspan="1">〇</td>
				<td colspan="1">49、制动系部件</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1"></td>
				<td colspan="1"></td>
				<td colspan="1">50、其它部件</td>
				<td colspan="1">〇</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">序号</td>
				<td colspan="3">不合格项（填写编号和名称）</td>
				<td colspan="3">不合格项目说明</td>
				<td colspan="1">备注</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1"></td>
				<td colspan="3"></td>
				<td colspan="3"></td>
				<td colspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="4" style="width:54%">车辆外廓尺寸（mm×mm×mm）: 0 x 0 x 0</td>
				<td colspan="4" class="bd-wt0" style="width:46%">整备质量（kg）:0</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="3" style="width:30%">机动车所有人：熊有信</td>
				<td colspan="2" class="bd-wt0" style="width:30%">手机电话：13979090909</td>
				<td colspan="3" class="bd-wt0" style="width:35%">地址/邮编：330000</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" style="22%">外检人员</td>
				<td colspan="2" style="24%">外检人员：熊有信</td>
				<td colspan="2" class="bd-wt0" style="24%">动态检验员：熊有信</td>
				<td colspan="3" class="bd-wt0" style="30%">地盘检验员：熊有信</td>
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
	export default{
		data(){
			return{
				data:{},
			}
		},
		methods:{

		},
	    mounted(){
	    	var trmsg = sessionStorage.getItem('trmsg')
	    	this.data = JSON.parse(trmsg)
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
