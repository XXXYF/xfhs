<template>
	<div :model="data" class="detail-box tab-other">
		<div class="tab-other-ct">
			<span class="lst">
				检测日期：__________
			</span>
			<span class="lst">
				号牌种类：__________
			</span>
			<span class="lst">
				号牌号码：__________
			</span>
		</div>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">分类</td>
				<td colspan="1" rowspan="1">编号</td>
				<td colspan="3" rowspan="1">核查/检验项目</td>
				<td colspan="1" rowspan="1">评定</td>
				<td colspan="1" rowspan="1">编号</td>
				<td colspan="3" rowspan="1">核查/检验项目</td>
				<td colspan="1" rowspan="1">评定</td>
				<td colspan="1" rowspan="1">编号</td>
				<td colspan="3" rowspan="1">核查/检验项目</td>
				<td colspan="1" rowspan="1">评定</td>
				<td colspan="1" rowspan="1">编号</td>
				<td colspan="3" rowspan="1">核查/检验项目</td>
				<td colspan="1" rowspan="1">评定</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="3">核查评定</td>
				<td colspan="1" rowspan="1">1</td>
				<td colspan="3" rowspan="1">★制动防抱死装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">4</td>
				<td colspan="3" rowspan="1">★制动间隙自动调整装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">7</td>
				<td colspan="3" rowspan="1">★安全带</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">10</td>
				<td colspan="3" rowspan="1">★发动机舱内自动灭火装置</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">2</td>
				<td colspan="3" rowspan="1">★盘式制动器</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">5</td>
				<td colspan="3" rowspan="1">★压缩空气干燥或油水分离</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">8</td>
				<td colspan="3" rowspan="1">★限速功能、限速装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="3" rowspan="1">/</td>
				<td colspan="1" rowspan="1">/</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">3</td>
				<td colspan="3" rowspan="1">★缓速器或其他辅助制动装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">6</td>
				<td colspan="3" rowspan="1">★子午线轮胎</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">9</td>
				<td colspan="3" rowspan="1">★卫星定位系统车载终端</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="3" rowspan="1">/</td>
				<td colspan="1" rowspan="1">/</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="3">唯一性认定</td>
				<td colspan="1" rowspan="1">11</td>
				<td colspan="3" rowspan="1">★号牌号码</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">14</td>
				<td colspan="3" rowspan="1">★车身颜色</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">17</td>
				<td colspan="3" rowspan="1">★VIN号</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="3" rowspan="1">/</td>
				<td colspan="1" rowspan="1">/</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">12</td>
				<td colspan="3" rowspan="1">★车辆类型</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">15</td>
				<td colspan="3" rowspan="1">★发动机号</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">18</td>
				<td colspan="3" rowspan="1">★挂车架号</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="3" rowspan="1">/</td>
				<td colspan="1" rowspan="1">/</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">13</td>
				<td colspan="3" rowspan="1">★品牌型号</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">16</td>
				<td colspan="3" rowspan="1">★底盘号</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">19</td>
				<td colspan="3" rowspan="1">★客车座(铺)位数</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="3" rowspan="1">/</td>
				<td colspan="1" rowspan="1">/</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">故障信息诊断</td>
				<td colspan="1" rowspan="1">20</td>
				<td colspan="3" rowspan="1">★发动机排放控制系统</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">21</td>
				<td colspan="3" rowspan="1">★制动防抱装置(ABS)</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">22</td>
				<td colspan="3" rowspan="1">★电动助力转向系统(EPS)</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">23</td>
				<td colspan="3" rowspan="1">★其他与行车安全相关故障信息</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="12">外观检查</td>
				<td colspan="1" rowspan="1">24</td>
				<td colspan="3" rowspan="1">★助力转向传动带</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">36</td>
				<td colspan="3" rowspan="1">★转向灯</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">48</td>
				<td colspan="3" rowspan="1">★应急窗开启</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">60</td>
				<td colspan="3" rowspan="1">★牵引装置和安全锁止机构</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">25</td>
				<td colspan="3" rowspan="1">★空气压缩机传动带/齿轮箱</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">37</td>
				<td colspan="3" rowspan="1">★示廓灯</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">49</td>
				<td colspan="3" rowspan="1">★玻璃破碎装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">61</td>
				<td colspan="3" rowspan="1">★固定集装箱箱体和锁止机构</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">26</td>
				<td colspan="3" rowspan="1">★燃料供给管路与部件</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">38</td>
				<td colspan="3" rowspan="1">★危险报警闪光灯</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">50</td>
				<td colspan="3" rowspan="1">■客车车厢灯和门灯</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">62</td>
				<td colspan="3" rowspan="1">★安全架与隔离装置</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">27</td>
				<td colspan="3" rowspan="1">★车轮及螺栓、螺母</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">39</td>
				<td colspan="3" rowspan="1">★雾灯</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">51</td>
				<td colspan="3" rowspan="1">★外部和内部尖锐凸起物</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">63</td>
				<td colspan="3" rowspan="1">★灭火器材</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">28</td>
				<td colspan="3" rowspan="1">★轮胎胎面状况</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">40</td>
				<td colspan="3" rowspan="1">★反射器与侧标志灯</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">52</td>
				<td colspan="3" rowspan="1">★货车货箱、车门、栏板、底板和栏板锁止机构</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">64</td>
				<td colspan="3" rowspan="1">★警示牌</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">29</td>
				<td colspan="3" rowspan="1">★同轴轮胎规格和花纹</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">41</td>
				<td colspan="3" rowspan="1">★货车车身反光标识和尾部标志板</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">53</td>
				<td colspan="3" rowspan="1">★驾驶室车窗附加物及镜面反光遮阳膜</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">65</td>
				<td colspan="3" rowspan="1">★停车楔</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">30</td>
				<td colspan="3" rowspan="1">★轮胎速度级别</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">42</td>
				<td colspan="3" rowspan="1">★绝缘层</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">54</td>
				<td colspan="3" rowspan="1">★后视镜和下视镜</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">66</td>
				<td colspan="3" rowspan="1">★危货排气管、隔热和熄灭火星装置</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">31</td>
				<td colspan="3" rowspan="1">★轮胎气压</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">43</td>
				<td colspan="3" rowspan="1">★蓄电池连接</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">55</td>
				<td colspan="3" rowspan="1">★防炫目装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">67</td>
				<td colspan="3" rowspan="1">★危货切断总电源和隔离电火花装置</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">32</td>
				<td colspan="3" rowspan="1">★翻新轮胎的使用</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">44</td>
				<td colspan="3" rowspan="1">★绝缘护套</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">56</td>
				<td colspan="3" rowspan="1">★安全带</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">68</td>
				<td colspan="3" rowspan="1">★危货导静电拖地带</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">33</td>
				<td colspan="3" rowspan="1">★子午线轮胎</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">45</td>
				<td colspan="3" rowspan="1">★车门应急控制器</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">57</td>
				<td colspan="3" rowspan="1">★侧面防护装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">69</td>
				<td colspan="3" rowspan="1">★危货运输车辆标志及标识</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">34</td>
				<td colspan="3" rowspan="1">★备用轮胎</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">46</td>
				<td colspan="3" rowspan="1">★应急门</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">58</td>
				<td colspan="3" rowspan="1">★后部防护装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">70</td>
				<td colspan="3" rowspan="1">★危货罐体检验合格证明或报告</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">35</td>
				<td colspan="3" rowspan="1">★前照灯与远、近光光束变换</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">47</td>
				<td colspan="3" rowspan="1">★安全顶窗</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">59</td>
				<td colspan="3" rowspan="1">★保险杠</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">71</td>
				<td colspan="3" rowspan="1">★气瓶、可移动罐(槽)紧固装置</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="4">运行检查</td>
				<td colspan="1" rowspan="1">72</td>
				<td colspan="3" rowspan="1">■起动性能</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">76</td>
				<td colspan="3" rowspan="1">■气压制动弹簧储能装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">80</td>
				<td colspan="3" rowspan="1">■变速器</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">84</td>
				<td colspan="3" rowspan="1">★风窗刮水器</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">73</td>
				<td colspan="3" rowspan="1">★柴油发动机停机装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">77</td>
				<td colspan="3" rowspan="1">★制动踏板</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">81</td>
				<td colspan="3" rowspan="1">★传动件异响</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">85</td>
				<td colspan="3" rowspan="1">■风窗洗涤器</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">74</td>
				<td colspan="3" rowspan="1">■发动机低、中、高速运转</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">78</td>
				<td colspan="3" rowspan="1">★驻车制动装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">82</td>
				<td colspan="3" rowspan="1">★指示器与仪表</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">86</td>
				<td colspan="3" rowspan="1">★除雾、除霜装置</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">75</td>
				<td colspan="3" rowspan="1">★制动报警装置</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">79</td>
				<td colspan="3" rowspan="1">■离合器</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">83</td>
				<td colspan="3" rowspan="1">★卫星定位系统车载终端</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">/</td>
				<td colspan="3" rowspan="1">/</td>
				<td colspan="1" rowspan="1">/</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="5">底盘检查</td>
				<td colspan="1" rowspan="1">87</td>
				<td colspan="3" rowspan="1">■发动机密封性</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">92</td>
				<td colspan="3" rowspan="1">★转向机构部件连接</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">97</td>
				<td colspan="3" rowspan="1">■车桥密封性</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">102</td>
				<td colspan="3" rowspan="1">★万向节与轴承</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">88</td>
				<td colspan="3" rowspan="1">★制动管路</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">93</td>
				<td colspan="3" rowspan="1">★转向机构部件技术状况</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">98</td>
				<td colspan="3" rowspan="1">★拉杆和导杆</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">103</td>
				<td colspan="3" rowspan="1">■排气管和消声器</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">89</td>
				<td colspan="3" rowspan="1">★制动泵(缸)及气(油)路</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">94</td>
				<td colspan="3" rowspan="1">★转向机构部件技术状况</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">99</td>
				<td colspan="3" rowspan="1">★悬架弹性元件</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">外检员</td>
				<td colspan="4" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">90</td>
				<td colspan="3" rowspan="1">★缓速器</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">95</td>
				<td colspan="3" rowspan="1">★车架</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">100</td>
				<td colspan="3" rowspan="1">★悬架部件连接</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">底检员</td>
				<td colspan="4" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="1">91</td>
				<td colspan="3" rowspan="1">★储气筒</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">96</td>
				<td colspan="3" rowspan="1">★车桥的可视裂纹及变形</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">101</td>
				<td colspan="3" rowspan="1">■减振器</td>
				<td colspan="1" rowspan="1"></td>
				<td colspan="1" rowspan="1">引车员</td>
				<td colspan="4" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="5">分级项</td>
				<td colspan="1" rowspan="3">104</td>
				<td colspan="1" rowspan="3">●轮胎花纹深度(mm)</td>
				<td colspan="2" rowspan="3">单车(记录不合格轮胎)
					转向轮:
					左1 左2 右1 右2 
					其他轮:
					左1 左2 右1 右2 
				</td>
				<td colspan="1" rowspan="3"></td>
				<td colspan="1" rowspan="3">106</td>
				<td colspan="1" rowspan="3">●车身与驾驶室</td>
				<td colspan="2" rowspan="3">
					1.轻微开裂、锈蚀和明显变形: 处
					2.缺陷部位 是 否  影响安全性和密封性
				</td>
				<td colspan="1" rowspan="3"></td>
				<td colspan="1" rowspan="3">108</td>
				<td colspan="1" rowspan="3">●车身表面涂装</td>
				<td colspan="2" rowspan="3">
					1. 有 无  明显破损
					2.补漆颜色与原色 是 否 一致</td>
				<td colspan="1" rowspan="3"></td>
				<td colspan="1" rowspan="8">不合格项汇总</td>
				<td colspan="3" rowspan="1">核查评定</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="3" rowspan="1">唯一性认定</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="3" rowspan="1">故障信息诊断</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="2">105</td>
				<td colspan="1" rowspan="2">●门、窗玻璃</td>
				<td colspan="2" rowspan="2">1. 
					齐全完好 
					2. 
					有 无 大于25mm且易破碎的裂纹和穿孔 
					3.密封 
					良好 不良 
				</td>
				<td colspan="1" rowspan="2"></td>
				<td colspan="1" rowspan="2">107</td>
				<td colspan="1" rowspan="2">●对称部位高度差（mm) </td>
				<td colspan="2" rowspan="1">
					单车: 前左: 前右: 单车 后左: 后右: 
				</td>
				<td colspan="1" rowspan="2"></td>
				<td colspan="1" rowspan="2">109</td>
				<td colspan="1" rowspan="2">●转向盘最大自由转动量(°) </td>
				<td colspan="2" rowspan="2">____________</td>
				<td colspan="1" rowspan="2"></td>
				<td colspan="3" rowspan="1">外观检查</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2" rowspan="1">
					单车: 前左: 前右: 单车 后左: 后右: 
				</td>
				<td colspan="3" rowspan="1">外观检查</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="3">测量项</td>
				<td colspan="1" rowspan="3">110</td>
				<td colspan="1" rowspan="3">外廓尺寸(单车</td>
				<td colspan="2" rowspan="1">长: mm </td>
				<td colspan="1" rowspan="3">外廓尺寸(挂车)</td>
				<td colspan="2" rowspan="1">长: mm </td>
				<td colspan="1" rowspan="3">外廓尺寸(列车)</td>
				<td colspan="2" rowspan="1">长: mm</td>
				<td colspan="1" rowspan="3"></td>
				<td colspan="1" rowspan="3">111 </td>
				<td colspan="1" rowspan="3">车厢栏板高度(mm)</td>
				<td colspan="2" rowspan="2">单车 mm </td>
				<!-- <td colspan="1" rowspan="2"></td> -->
				<td colspan="3" rowspan="1">底盘检查</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2" rowspan="1">宽: mm </td>
				<td colspan="2" rowspan="1">宽: mm </td>
				<td colspan="2" rowspan="1">宽: mm </td>
				<td colspan="3" rowspan="1">分级项</td>
				<td colspan="1" rowspan="1"></td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2" rowspan="2">高: mm </td>
				<td colspan="2" rowspan="1">高: mm </td>
				<td colspan="2" rowspan="1">高: mm</td>
				<td colspan="2" rowspan="1">挂车 mm </td>
				<td colspan="3" rowspan="1">测量项</td>
				<td colspan="1" rowspan="1"></td>
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
