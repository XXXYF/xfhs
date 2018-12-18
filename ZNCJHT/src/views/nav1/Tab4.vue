<!-- <template>
	<div :model="data" class="detail-box">
		<p class="title">检验机构名称摩托车安全技术报告</p>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="12">一.基本信息</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">检验流水号</td>
				<td colspan="2">124341234</td>
				<td colspan="2">引  车  员</td>
				<td colspan="2">罗伟</td>
				<td colspan="2">检验日期</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">检 验 类 别</td>
				<td colspan="2">注册登记检验</td>
				<td colspan="2">检验项目</td>
				<td colspan="2">F1,DC,H1,H4,B1,B2,R</td>
				<td colspan="2">登录员</td>
				<td colspan="2">谌雪琴</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">号牌（自编）号</td>
				<td colspan="2">新010750</td>
				<td colspan="2">所有人</td>
				<td colspan="6">江西绿州园林有限公司</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">号 牌 种 类</td>
				<td colspan="2">轻便摩托车号牌</td>
				<td colspan="2">车 辆 类 型</td>
				<td colspan="2">轻便正三轮摩托车</td>
				<td colspan="2">品 牌 / 型 号</td>
				<td colspan="2">江西五十铃牌 / JXW1032ASA</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">车辆识别代号</td>
				<td colspan="2">LETADCE14FH010714</td>
				<td colspan="2">发 动 机 号</td>
				<td colspan="2">发 动 机 号</td>
				<td colspan="2">燃 料 类 别</td>
				<td colspan="2">柴油</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">初次登记日期</td>
				<td colspan="2">2018-01-19</td>
				<td colspan="2">出 厂 年 月</td>
				<td colspan="2">2015-12-15</td>
				<td colspan="2">里程表读数</td>
				<td colspan="2">1000km</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">整备质量（kg）</td>
				<td colspan="2">1805</td>
				<td colspan="2">前 照 灯 制</td>
				<td colspan="2">四灯远近光</td>
				<td colspan="3">前照灯远光光束能否单独调整</td>
				<td colspan="1">否</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="12">二、检验结果</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2" rowspan="2">台 式 检 测 项 目</td>
				<td colspan="2" rowspan="1">轮荷（kg）</td>
				<td colspan="2" rowspan="1">制动力（10N）</td>
				<td colspan="2" rowspan="2">制动率（%）</td>
				<td colspan="2" rowspan="2">项目判定</td>
				<td colspan="2" rowspan="2">单项次数</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">左</td>
				<td colspan="1">右</td>
				<td colspan="1">左</td>
				<td colspan="1">右</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="3">制动B</td>
				<td colspan="1">前    轮</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">后轮（轴）</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">驻车</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="1">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="3">前照灯H</td>
				<td colspan="1">项目</td>
				<td colspan="6">远光发光强度（cd）</td>
				<td colspan="2">项目判定</td>
				<td colspan="2">单项次数</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">左（单）灯</td>
				<td colspan="6">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">右   灯</td>
				<td colspan="6">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">路试制动性能</td>
				<td colspan="2">一</td>
				<td colspan="2">路试检验员</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
				<td colspan="2">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">外廓尺寸（mm×mm×mm）</td>
				<td colspan="2">0 x 0 x 0</td>
				<td colspan="2">整备质量(kg)</td>
				<td colspan="2">0</td>
				<td colspan="1">一</td>
				<td colspan="1">1</td>
				<td colspan="1">一</td>
				<td colspan="1">1</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6">
					<span>备注:</span>
				</td>
				<td colspan="2">总检次数</td>
				<td colspan="4">1</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="12">
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
	    	this.data =this.$route.query.userId
	    }

	}
</script>
 -->
 <!-- 安检-检验报告-->
<template>
	<div :model="data" class="detail-box">
		<!-- <h1>{{data.name}}</h1> -->
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="6">一.基本信息</td>
			</tr>
			<tr class="tab-tr" style="">
				<td colspan="1">检验报告编号：</td>
				<td colspan="1">{{data.useid}}</td>
				<td colspan="1">检验机构名称：</td>
				<td colspan="3"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">号牌号码</td>
				<td colspan="1">124341234</td>
				<td colspan="1">所有人</td>
				<td colspan="3"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">车辆类型</td>
				<td colspan="1">轻便正三轮摩托车</td>
				<td colspan="1">品牌/型号</td>
				<td colspan="1">江西五十铃牌/ JXW1032ASA</td>
				<td colspan="1">使用性质</td>
				<td colspan="1">非营运	</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">注册登记日期</td>
				<td colspan="1">124341234</td>
				<td colspan="1">出 厂 年 月</td>
				<td colspan="1">彝良县顺达交安服务有限公司</td>
				<td colspan="1">检 验 日 期</td>
				<td colspan="1">彝良县顺达交安服务有限公司</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">车辆识别代号<br>(或出厂编号)</td>
				<td colspan="2">LETADCE14FH010714</td>
				<td colspan="1">发动机号码<br>(或电动机号码)</td>
				<td colspan="2">30121902</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6">二、检验结论</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">检验结论</td>
				<td colspan="1">124341234</td>
				<td colspan="1">授权签字人</td>
				<td colspan="3"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6">
					<span class="frt">单位名称（盖章）：</span>
				</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6">三、人工检验结果</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">序号</td>
				<td colspan="1">检验项目</td>
				<td colspan="1">结果判定</td>
				<td colspan="2">具体不合格项目情况说明</td>
				<td colspan="1">备注</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1"></td>
				<td colspan="1"></td>
				<td colspan="1"></td>
				<td colspan="2"></td>
				<td colspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6">四、仪器设备检验结果</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">序号</td>
				<td colspan="1">检验项目</td>
				<td colspan="1">结果判定</td>
				<td colspan="1">标准限值</td>
				<td colspan="1">结果判定</td>
				<td colspan="1">备注</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1"></td>
				<td colspan="1"></td>
				<td colspan="1"></td>
				<td colspan="1"></td>
				<td colspan="1"></td>
				<td colspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6">五、建议</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">备注</td>
				<td colspan="5">
					<div>
						<p>下次检验时间：</p>
						<p>机动车安全技术检验合格后请及时向公安机关交通管理部门申领检验合格标志</p>
						<div class="">
							<span>检验地址： 1	</span><span>邮编：1</span><span>投诉电话：1	</span><span>联系电话：1</span></div>
					</div>
				</td>
			</tr>
		</table>
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
	    	var  trmsg = sessionStorage.getItem('trmsg')
	    	this.data = JSON.parse(trmsg)
	    	console.log(this.data)
	    },
	    

	}
</script>
