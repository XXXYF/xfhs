<template>
	<div :model="data" class="detail-box tab-other">
		<div class="tab-other-ct">
			<span class="lst">
				检验类别：__________
			</span>
			<span class="lst">
				业务类型：__________
			</span>
			<span class="lst">
				检测线编号：__________
			</span>
			<span class="lst">
				检测日期：__________
			</span>
		</div>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="5">号牌号码：</td>
				<td colspan="2"></td>
				<td colspan="6">号牌种类：</td>
				<td colspan="2"></td>
				<td colspan="5">挂车牌照号：</td>
				<td colspan="2"></td>
				<td colspan="5">挂车类型：</td>
				<td colspan="2"></td>
				<td colspan="5">车辆出厂日期：</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5">注册登记日期：</td>
				<td colspan="2"></td>
				<td colspan="6">VIN号：</td>
				<td colspan="2"></td>
				<td colspan="5">车辆型号：</td>
				<td colspan="2"></td>
				<td colspan="5">发动机号：</td>
				<td colspan="2"></td>
				<td colspan="5">车辆颜色：</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5">行驶总里程(km)：</td>
				<td colspan="2"></td>
				<td colspan="6">驱动型式：</td>
				<td colspan="2"></td>
				<td colspan="5">转向轴悬架形式：</td>
				<td colspan="2"></td>
				<td colspan="5">挂车轴数：</td>
				<td colspan="2"></td>
				<td colspan="5">压燃式发动机额定功率(kW)：</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5">点燃式额定扭矩/转速：</td>
				<td colspan="2"></td>
				<td colspan="6">燃料类别：</td>
				<td colspan="2"></td>
				<td colspan="5">驱动轮轮胎规格型号：</td>
				<td colspan="2"></td>
				<td colspan="5">总质量(kg)：</td>
				<td colspan="2"></td>
				<td colspan="5">车高(mm)：</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5">前轮距(mm)：</td>
				<td colspan="2"></td>
				<td colspan="6">客车车长(mm)：</td>
				<td colspan="2"></td>
				<td colspan="5">客车类型等级：</td>
				<td colspan="2"></td>
				<td colspan="5">货车车身型式：</td>
				<td colspan="2"></td>
				<td colspan="5">驱动轴数：</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5">驱动轴空载质量(kg)：</td>
				<td colspan="2"></td>
				<td colspan="6">牵引车满载总质量(kg)：</td>
				<td colspan="2"></td>
				<td colspan="5">并装轴形式：</td>
				<td colspan="2"></td>
				<td colspan="5">转向轴数：</td>
				<td colspan="2"></td>
				<td colspan="5">前照灯制式：</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5">客车座位(铺)数：</td>
				<td colspan="2"></td>
				<td colspan="6">单车(主车)轴数：</td>
				<td colspan="2"></td>
				<td colspan="5">外廓尺寸(长x宽x高)(mm)：</td>
				<td colspan="9">单车 ; 挂车</td>
				<td colspan="5">引车员：</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5">远光束能否单独调整：</td>
				<td colspan="2"></td>
				<td colspan="6">驻车轴：</td>
				<td colspan="2"></td>
				<td colspan="5">车厢栏板高度(mm)：</td>
				<td colspan="9">单车 ; 挂车</td>
				<td colspan="5">登录员：</td>
				<td colspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="4" rowspan="1">项目</td>
				<td colspan="13" rowspan="1">检验结果</td>
				<td colspan="1" rowspan="1">判定</td>
				<td colspan="1" rowspan="1">项目</td>
				<td colspan="16"rowspan="1">检验结果</td>
				<td colspan="1" rowspan="1">判定</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="4" rowspan="2">动力性</td>
				<td colspan="3" rowspan="1">达标功率kW	</td>
				<td colspan="4" rowspan="1">额定车速kw/h</td>
				<td colspan="4" rowspan="1">加载力 N</td>
				<td colspan="2" rowspan="1">稳定车速 km/h</td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="1" rowspan="8">排放性</td>
				<td colspan="1" rowspan="4">汽油车</td>
				<td colspan="5" rowspan="1">双怠速法</td>
				<td colspan="6" rowspan="1">稳态工况</td>
				<td colspan="4" rowspan="2">简易瞬态工况</td>
				<td colspan="1" rowspan="3"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="3" rowspan="1"></td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="3" rowspan="1">高怠速</td>
				<td colspan="2" rowspan="1">低怠速</td>
				<td colspan="3" rowspan="1">5025</td>
				<td colspan="3" rowspan="1">2540</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="4" rowspan="1">燃料经济性</td>
				<td colspan="13" rowspan="1">等速百公里油耗标准限值 L/100 km; 实测值:        L/100 km</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">CO %</td>
				<td colspan="1" rowspan="1">HC 10-6</td>
				<td colspan="1" rowspan="1">λ</td>
				<td colspan="1" rowspan="1">CO %</td>
				<td colspan="1" rowspan="1">HC 10-6</td>
				<td colspan="1" rowspan="1">CO %</td>
				<td colspan="1" rowspan="1">HC 10-6</td>
				<td colspan="1" rowspan="1">NO 10-6</td>
				<td colspan="1" rowspan="1">CO %</td>
				<td colspan="1" rowspan="1">HC 10-6</td>
				<td colspan="1" rowspan="1">NO 10-6</td>
				<td colspan="1" rowspan="1">CO g/km</td>
				<td colspan="1" rowspan="1">HC g/km</td>
				<td colspan="1" rowspan="1">NO g/km</td>
				<td colspan="1" rowspan="1">HC+NO g/km</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="26">制动性</td>
				<td colspan="1" rowspan="23">台架数据</td>
				<td colspan="1" rowspan="8">原始数据</td>
				<td colspan="1" rowspan="1">车轴</td>
				<td colspan="4" rowspan="1">水平称重轮荷 daN</td>
				<td colspan="3" rowspan="1">复合台称重 轴荷daN</td>
				<td colspan="2" rowspan="1">动态轮荷 daN</td>
				<td colspan="2" rowspan="1">行动制动力 daN</td>
				<td colspan="2" rowspan="1">驻车制动力 daN</td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">3434</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1">左轮</td>
				<td colspan="2" rowspan="1">右轮</td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1">左轮</td>
				<td colspan="1" rowspan="1">右轮</td>
				<td colspan="1" rowspan="1">左轮</td>
				<td colspan="1" rowspan="1">右轮</td>
				<td colspan="1" rowspan="1">左轮</td>
				<td colspan="1" rowspan="1">右轮</td>
				<td colspan="1" rowspan="7">/</td>
				<td colspan="1" rowspan="4">柴油车</td>
				<td colspan="9" rowspan="1">加载减速工况</td>
				<td colspan="6" rowspan="1">加载减速工况</td>
				<td colspan="1" rowspan="3">/</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">一轴</td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="5" rowspan="1">光吸收系数 m-1</td>
				<td colspan="4" rowspan="1">滤纸烟度 BSU</td>
				<td colspan="3" rowspan="1">光吸收系数 m-1</td>
				<td colspan="3" rowspan="2">实测最大轮边功率/kW</td>
			</tr> 
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">二轴</td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">1</td>
				<td colspan="1" rowspan="1">2</td>
				<td colspan="1" rowspan="1">3</td>
				<td colspan="2" rowspan="1">平均</td>
				<td colspan="1" rowspan="1">1</td>
				<td colspan="1" rowspan="1">2</td>
				<td colspan="1" rowspan="1">3</td>
				<td colspan="1" rowspan="1">平均</td>
				<td colspan="1" rowspan="1">100%</td>
				<td colspan="1" rowspan="1">90%</td>
				<td colspan="1" rowspan="1">80%</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">三轴</td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">1</td>
				<td colspan="1" rowspan="1">2</td>
				<td colspan="1" rowspan="1">3</td>
				<td colspan="2" rowspan="1">平均</td>
				<td colspan="1" rowspan="1">1</td>
				<td colspan="1" rowspan="1">2</td>
				<td colspan="1" rowspan="1">3</td>
				<td colspan="1" rowspan="1">平均</td>
				<td colspan="1" rowspan="1">100%</td>
				<td colspan="1" rowspan="1">90%</td>
				<td colspan="1" rowspan="1">80%</td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">四轴</td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="2">悬架</td>
				<td colspan="1" rowspan="1">前轴</td>
				<td colspan="5" rowspan="1">左吸收率:  %</td>
				<td colspan="5" rowspan="1">右吸收率:  %</td>
				<td colspan="5" rowspan="1">左右差:  %</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">五轴</td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">后轴</td>
				<td colspan="5" rowspan="1">左吸收率:  %</td>
				<td colspan="5" rowspan="1">右吸收率:  %</td>
				<td colspan="5" rowspan="1">左右差:  %</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">六轴</td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="6">前照灯</td>
				<td colspan="1" rowspan="2">项目</td>
				<td colspan="3" rowspan="1">灯高 mm/td>
				<td colspan="2" rowspan="2">远光光强 cd</td>
				<td colspan="5" rowspan="1">远光偏移</td>
				<td colspan="5" rowspan="1">近光偏移</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="7">整车</td>
				<td colspan="1" rowspan="1">单车</td>
				<td colspan="7" rowspan="1">水平称重daN</td>
				<td colspan="3" rowspan="1">整车制动率%</td>
				<td colspan="3" rowspan="1">驻车制动率</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">近光</td>
				<td colspan="2" rowspan="1">远光</td>
				<td colspan="2" rowspan="1">垂直H</td>
				<td colspan="3" rowspan="1">水平 mm/10m</td>
				<td colspan="2" rowspan="1">垂直H</td>
				<td colspan="3" rowspan="1">前照灯</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="6">汽车列车</td>
				<td colspan="4" rowspan="2">水平称重daN</td>
				<td colspan="1" rowspan="2">整车制动率%</td>
				<td colspan="1" rowspan="1">牵</td>
				<td colspan="1" rowspan="1">12</td>
				<td colspan="1" rowspan="2">驻车制动率%</td>
				<td colspan="2" rowspan="2"></td>
				<td colspan="1" rowspan="2">制动协调时间s</td>
				<td colspan="2" rowspan="2"></td>
				<td colspan="1" rowspan="2"></td>
				<td colspan="1" rowspan="1">左外</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">挂</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">左内</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="3">制动时序</td>
				<td colspan="5" rowspan="1"></td>
				<td colspan="1" rowspan="1">1轴</td>
				<td colspan="1" rowspan="1">2轴</td>
				<td colspan="1" rowspan="1">3轴</td>
				<td colspan="1" rowspan="1">4轴</td>
				<td colspan="1" rowspan="1">5轴</td>
				<td colspan="2" rowspan="1">6轴</td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="1" rowspan="1">右内</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">时间s</td>
				<td colspan="4" rowspan="1">轴制动力达到5%静态轴荷</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1">55</td>
				<td colspan="1" rowspan="1">右外</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="3" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">时序</td>
				<td colspan="4" rowspan="1">轴制动力达到5%静态轴荷</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">车速表</td>
				<td colspan="17" rowspan="1">km/h</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5" rowspan="1">整车制动率比% (牵引车/列车)</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="3" rowspan="1">整车制动率比% (挂车/列车)</td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="3">侧滑量</td>
				<td colspan="17" rowspan="2">第一转向轮    m/km</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="8">单轴</td>
				<td colspan="1" rowspan="2">车轴</td>
				<td colspan="4" rowspan="2">轴制动率 %</td>
				<td colspan="2" rowspan="2">轴制动率 %	制动不平</td>
				<td colspan="3" rowspan="1">过程差最大点 daN</td>
				<td colspan="4" rowspan="1">车轮阻滞率 %</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2" rowspan="1">左轮</td>
				<td colspan="1" rowspan="1">右轮</td>
				<td colspan="2" rowspan="1">左轮</td>
				<td colspan="2" rowspan="1">右轮</td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="17" rowspan="1">第二转向轮    m/km</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">一轴</td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="2">喇叭</td>
				<td colspan="17" rowspan="2">声压级    dB(A)</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">二轴</td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">三轴</td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="3">不合格项汇总</td>
				<td colspan="17" rowspan="3">声压级    dB(A)</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">四轴</td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">五轴</td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">六轴</td>
				<td colspan="4" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="2" rowspan="1"></td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="4">检验工位照片</td>
				<td colspan="17" rowspan="4">声压级dB(A)</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="3">路试</td>
				<td colspan="2" rowspan="2">行车制动</td>
				<td colspan="4" rowspan="1">初速度: km/h</td>
				<td colspan="4" rowspan="1">试车道宽度:m</td>
				<td colspan="5" rowspan="1">制动距离m</td>
				<td colspan="1" rowspan="2"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="4" rowspan="1">MFDD:m/s²</td>
				<td colspan="4" rowspan="1">制动稳定性:</td>
				<td colspan="5" rowspan="1">汽车列车制动协调时间:s</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2" rowspan="1">驻车制动</td>
				<td colspan="4" rowspan="1">驻车坡度:%</td>
				<td colspan="9" rowspan="1">不少于5min坡度驻车情况:</td>
				<td colspan="1" rowspan="2"></td>
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
	    	this.data =this.$route.query.userId
	    }

	}
</script>
<style type="text/css">
	.tab-other{
		font-size: 10px;
		font-weight: normal;
		line-height: 20px;
	}
	.tab-other-ct{
		float: right;
	}
	.tab-other-ct .lst{
		float: left;
		margin-left: 10px;
		margin-bottom: 10px;
	}
	.tab-other .tab-msg .tab-tr td{
		padding: 0 6px;
		text-align: center;
	}
</style>


	