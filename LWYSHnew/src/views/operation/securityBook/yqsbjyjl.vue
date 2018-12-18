<!-- 安检-仪器设备检验 -->
<template>
	<div :model="data" class="detail-box rgwgjyjlBox">
		<p class="title">机动车安全技术检验表（仪器设备检验部分）</p>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="12">一.基本信息</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">检验流水号</td>
				<td colspan="2">{{data.jylsh}}</td>
				<td colspan="2">引  车  员</td>
				<td colspan="2">{{data.ycy}}</td>
				<td colspan="2">检验日期</td>
				<td colspan="2">{{data.kssj}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">检 验 类 别</td>
				<td colspan="2">{{data.jylb | jylbDate}}</td>
				<td colspan="2">检验项目</td>
				<td colspan="2">{{data.jyxmmc}}</td>
				<td colspan="2">登录员</td>
				<td colspan="2">{{data.dly}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">号牌（自编）号</td>
				<td colspan="2">{{data.hphm}}</td>
				<td colspan="2">所有人</td>
				<td colspan="6">{{data.syr}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">号 牌 种 类</td>
				<td colspan="2">{{data.hpzlmc}}</td>
				<td colspan="2">车 辆 类 型</td>
				<td colspan="2">{{data.cllxmc}}</td>
				<td colspan="2">品 牌 / 型 号</td>
				<td colspan="2">{{data.clxh}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">车辆识别代号</td>
				<td colspan="2">{{data.clsbdh}}</td>
				<td colspan="2">发 动 机 号</td>
				<td colspan="2">{{data.fdjh}}</td>
				<td colspan="2">燃 料 类 别</td>
				<td colspan="2">{{data.rlzlmc}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">初次登记日期</td>
				<td colspan="2">{{data.ccdjrq}}</td>
				<td colspan="2">出 厂 年 月</td>
				<td colspan="2">{{data.ccrq}}</td>
				<td colspan="2">里程表读数</td>
				<td colspan="2">{{data.lcbds}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">整备质量（kg）</td>
				<td colspan="2">{{data.zbzl}}</td>
				<td colspan="2">前 照 灯 制</td>
				<td colspan="2">{{data.qzdz | qzdz}}</td>
				<td colspan="2">前照灯远光光束能否单独调整</td>
				<td colspan="2">{{data.ygddtz | ygddtz}}</td>
			</tr>
		</table>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="19">二、检验结果</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2" rowspan="2">台 式 检 测 项 目</td>
				<td colspan="2" rowspan="1">轮荷(kg)</td>
				<td colspan="2" rowspan="1">最大行车制动力(10N)</td>
				<td colspan="2" rowspan="1">过程差最大差值点(10N)</td>
				<td colspan="4" rowspan="1">空载制动</td>
				<td colspan="3" rowspan="1">加载制动</td>
				<td colspan="2" rowspan="2">项目判定</td>
				<td colspan="2" rowspan="2">单项次数</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">左</td>
				<td colspan="1">右</td>
				<td colspan="1">左</td>
				<td colspan="1">右</td>
				<td colspan="1">左</td>
				<td colspan="1">右</td>
				<td colspan="1">行车制动率(%)</td>
				<td colspan="1">不平衡率(%)</td>
				<td colspan="1">驻车制动力(10N)</td>
				<td colspan="1">驻车制动率(10N)</td>
				<td colspan="1">加载轴荷(kg)</td>
				<td colspan="1">轴制动率(%)</td>
				<td colspan="1">不平衡率(%)</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="8">制动B</td>
				<td colspan="1">一轴</td>
				<td colspan="1">{{data.yzzlz }}</td>
				<td colspan="1">{{data.yzylz }}</td>
				<td colspan="1">{{data.yzqhzzdl }}</td>
				<td colspan="1">{{data.yzqhyzdl }}</td>
				<td colspan="1">{{data.yzqczzdl }}</td>
				<td colspan="1">{{data.yqqcyzdl }}</td>
				<td colspan="1">{{data.yzdll }}</td>
				<td colspan="1">{{data.yzbphl }}</td>
				<td colspan="1">{{data.yzzczdl }}</td>
				<td colspan="1" rowspan="6">-</td>
				<td colspan="1">{{data.yzjzzh }}</td>
				<td colspan="1">{{data.yzjzzzdl }}</td>
				<td colspan="1">{{data.yzjzbphl }}</td>
				<td colspan="2">一</td>
				<td colspan="2">{{data.yzjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">二轴</td>
				<td colspan="1">{{data.ezzlz }}</td>
				<td colspan="1">{{data.ezylz }}</td>
				<td colspan="1">{{data.ezqhzzdl }}</td>
				<td colspan="1">{{data.ezqhyzdl }}</td>
				<td colspan="1">{{data.ezqczzdl }}</td>
				<td colspan="1">{{data.ezqcyzdl }}</td>
				<td colspan="1">{{data.ezdll }}</td>
				<td colspan="1">{{data.ezbphl }}</td>
				<td colspan="1">{{data.ezzczdl }}</td>
				<td colspan="1">{{data.ezjzzh }}</td>
				<td colspan="1">{{data.ezjzzzdl }}</td>
				<td colspan="1">{{data.ezjzbphl }}</td>
				<td colspan="2">一</td>
				<td colspan="2">{{data.ezjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">三轴</td>
				<td colspan="1">{{data.sanzzlz }}</td>
				<td colspan="1">{{data.sanzylz }}</td>
				<td colspan="1">{{data.sanzqhzzdl }}</td>
				<td colspan="1">{{data.sanzqhyzdl }}</td>
				<td colspan="1">{{data.sanzqczzdl }}</td>
				<td colspan="1">{{data.sanzqcyzdl }}</td>
				<td colspan="1">{{data.sanzdll }}</td>
				<td colspan="1">{{data.sanzbphl }}</td>
				<td colspan="1">{{data.sanzzczdl }}</td>
				<td colspan="1">{{data.sanzjzzh }}</td>
				<td colspan="1">{{data.sanzjzzzdl }}</td>
				<td colspan="1">{{data.sanzjzbphl }}</td>
				<td colspan="2">一</td>
				<td colspan="2">{{data.sanzjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">四轴</td>
				<td colspan="1">{{data.sizzlz }}</td>
				<td colspan="1">{{data.sizylz }}</td>
				<td colspan="1">{{data.sizqhzzdl }}</td>
				<td colspan="1">{{data.sizqhyzdl }}</td>
				<td colspan="1">{{data.sizqczzdl }}</td>
				<td colspan="1">{{data.sizqcyzdl }}</td>
				<td colspan="1">{{data.sizdll }}</td>
				<td colspan="1">{{data.sizbphl }}</td>
				<td colspan="1">{{data.sizzczdl }}</td>
				<td colspan="1">{{data.sizjzzh }}</td>
				<td colspan="1">{{data.sizjzzzdl }}</td>
				<td colspan="1">{{data.sizjzbphl }}</td>
				<td colspan="2">一</td>
				<td colspan="2">{{data.sizjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">五轴</td>
				<td colspan="1">{{data.wzzlz }}</td>
				<td colspan="1">{{data.wzylz }}</td>
				<td colspan="1">{{data.wzqhzzdl }}</td>
				<td colspan="1">{{data.wzqhyzdl }}</td>
				<td colspan="1">{{data.wzqczzdl }}</td>
				<td colspan="1">{{data.wzqcyzdl }}</td>
				<td colspan="1">{{data.wzdll }}</td>
				<td colspan="1">{{data.wzbphl }}</td>
				<td colspan="1">{{data.wzzczdl }}</td>
				<td colspan="1">{{data.wzjzzh }}</td>
				<td colspan="1">{{data.wzjzzzdl }}</td>
				<td colspan="1">{{data.wzjzbphl }}</td>
				<td colspan="2">一</td>
				<td colspan="2">{{data.wzjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">整车</td>
				<td colspan="2">{{data.zzlh }}</td>
				<td colspan="2">{{data.zhzqhzdl }}</td>
				<td colspan="2">一</td>
				<td colspan="1">{{data.zzzdl }}</td>
				<td colspan="2">一</td>
				<td colspan="3">一</td>
				<td colspan="2">一</td>
				<td colspan="2">{{data.zdjccs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">驻车</td>
				<td colspan="2">{{data.zclh }}</td>
				<td colspan="6">一</td>
				<td colspan="1">{{data.zczczdl }}</td>
				<td colspan="1">{{data.tczdl }}</td>
				<td colspan="3">一</td>
				<td colspan="2">一</td>
				<td colspan="2">{{data.zzjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="4">动态轮荷(左/右)(kg)</td>
				<td colspan="6">一轴一</td>
				<td colspan="1">二轴</td>
				<td colspan="7">一</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="5">前照灯H</td>
				<td colspan="2">项目</td>
				<td colspan="2">远光发光强度(cd)</td>
				<td colspan="2">远光垂直偏移量(mm/10m)</td>
				<td colspan="2">近光垂直偏移量(mm/10m)</td>
				<td colspan="2">远光灯中心高(mm)</td>
				<td colspan="2">近光灯中心高(mm)</td>
				<td colspan="1">远光垂直偏移(H)</td>
				<td colspan="1">近光垂直偏移(H)</td>
				<td colspan="2">项目判定</td>
				<td colspan="2">单项次数</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">左外灯</td>
				<td colspan="2">{{data.zwygqd }}</td>
				<td colspan="2">{{data.zwygszpz }}</td>
				<td colspan="2">{{data.zjgszcz }}</td>
				<td colspan="2">{{data.zdg }}</td>
				<td colspan="2">{{data.zwjgdg }}</td>
				<td colspan="1">{{data.zwygczpypd }}</td>
				<td colspan="1">{{data.zwjgczpypd }}</td>
				<td colspan="2">{{data.zwdpd }}</td>
				<td colspan="2">{{data.zwdgjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">左内灯</td>
				<td colspan="2">{{data.znygqd }}</td>
				<td colspan="2">{{data.znygszcz }}</td>
				<td colspan="2">{{data.znjgszcz }}</td>
				<td colspan="2">{{data.zndg }}</td>
				<td colspan="2">{{data.znjgdg }}</td>
				<td colspan="1">{{data.znygczpy }}</td>
				<td colspan="1">{{data.znjgczpy }}</td>
				<td colspan="2">{{data.zndpd }}</td>
				<td colspan="2">{{data.znjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">右内灯</td>
				<td colspan="2">{{data.ynygqd }}</td>
				<td colspan="2">{{data.ynygszcz }}</td>
				<td colspan="2">{{data.ynjgszcz }}</td>
				<td colspan="2">{{data.yndg }}</td>
				<td colspan="2">{{data.ynjgdg }}</td>
				<td colspan="1">{{data.ynygczpy }}</td>
				<td colspan="1">{{data.ynjgczpy }}</td>
				<td colspan="2">{{data.yndpd }}</td>
				<td colspan="2">{{data.ynjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">右外灯</td>
				<td colspan="2">{{data.ywygqd }}</td>
				<td colspan="2">{{data.ywygszpz }}</td>
				<td colspan="2">{{data.yjgszcz }}</td>
				<td colspan="2">{{data.ydg }}</td>
				<td colspan="2">{{data.ywjgdg }}</td>
				<td colspan="1">{{data.ywygczpy }}</td>
				<td colspan="1">{{data.ywjgczpy }}</td>
				<td colspan="2">{{data.ywdpd }}</td>
				<td colspan="2">{{data.ywjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">车速表S</td>
				<td colspan="13">{{data.csdscz }}</td>
				<td colspan="2">{{data.csbpd }}</td>
				<td colspan="2">{{data.csjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">侧滑A</td>
				<td colspan="13">{{data.chz }}</td>
				<td colspan="2">{{data.chpd }}</td>
				<td colspan="2">{{data.chjycs }}</td>
			</tr>

			<tr class="tab-tr">
				<td colspan="3">路试制动性能</td>
				<td colspan="8">{{data.lszdxn }}</td>
				<td colspan="2">路试检验员</td>
				<td colspan="2">{{data.lsy }}</td>
				<td colspan="2">{{data.lspd }}</td>
				<td colspan="2">{{data.lsjycs }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="5">外廓尺寸（mm×mm×mm）</td>
				<td colspan="6">{{data.cwk }}</td>
				<td colspan="2">整备质量(kg)</td>
				<td colspan="2">{{data.zbzl }}</td>
				<td colspan="1">一</td>
				<td colspan="1">{{data.cwk }}</td>
				<td colspan="1">一</td>
				<td colspan="1">{{data.cwk }}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="9">主车制动检验结果(对于主车和挂车一起检验，在打印挂车报告时)</td>

				<td colspan="2">{{data.zczdjyjg }}</td>
				<td colspan="2">一</td>
				<td colspan="2">总检次数</td>
				<td colspan="4">{{data.zjcs }}</td>
			</tr>
			<!--<tr class="tab-tr">-->
				<!--<td colspan="6">-->
					<!--<span>备注:</span>-->
				<!--</td>-->
				<!--<td colspan="2">总检次数</td>-->
				<!--<td colspan="4">1</td>-->
			<!--</tr>-->
			<tr class="tab-tr">
				<td colspan="19">
					<p>注1： 判定栏中“○”为合格，“╳”为不合格，“—”表示不适用于送检车。</p>
					<p>注2： 检验依据： GB 7258-2017、GB 21861-2014</p>
				</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="19">
					人工检验不合格说明：
				</td>
			</tr>

		</table>
		<!--<p class="basic-tit">检验依据： GB 7258-2017、GB 21861-2014</p>-->
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
                    bgdlx: 2,
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
                const fff = ['—','○','╳'];
                return fff[dysj-1]
            },
            ygddtz:function (ygddtz) {

                if(ygddtz == '0'){
                    return '不能单独调整'
                }else  if (ygddtz == '1'){
                    return '单独调整'
                }else {
                    return ''
                }
            },
            qzdz:function (qzdz) {
                if(qzdz == '01'){
                    return '四灯远近光'
                }else  if (qzdz == '02'){
                    return '四灯远光'
                }else  if (qzdz == '03'){
                    return '二灯远近光'
                }else  if (qzdz == '04'){
                    return '二灯近光'
                }else  if (qzdz == '05'){
                    return '一灯远光'
                }else {
                    return ''
                }
            },
        }

    }
</script>

