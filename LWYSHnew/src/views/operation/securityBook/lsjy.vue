<!-- 安检-仪器设备检验 -->
<template>
	<div :model="data" class="detail-box rgwgjyjlBox">
		<p class="title">机动车路试检验结果</p>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="1">代号</td>
				<td colspan="1">{{data.jylsh}}</td>
				<td colspan="1">检验日期</td>
				<td colspan="1">{{data.kssj}}</td>
				<td colspan="1">检验流水号</td>
				<td colspan="1">{{data.jylsh}}</td>
				<td colspan="2">资格许可证</td>
				<td colspan="2">{{data.zgxkz}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">号牌号码</td>
				<td colspan="1">{{data.hphm}}</td>
				<td colspan="1">所有人</td>
				<td colspan="7" >{{data.syr}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">号牌种类</td>
				<td colspan="1">{{data.hpzlmc}}</td>
				<td colspan="1">车辆类型</td>
				<td colspan="3">{{data.cllxmc}}</td>
				<td colspan="2"> </td>
				<td colspan="2"> </td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">VIN(出厂编号)</td>
				<td colspan="1">{{data.clsbdh}}</td>
				<td colspan="1">发动机号</td>
				<td colspan="3">{{data.fdjh}}</td>
				<td colspan="2">燃料种类</td>
				<td colspan="2">{{data.rlzlmc}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">驱动形式</td>
				<td colspan="1">{{data.qdxs}}</td>
				<td colspan="1">驻车轴数</td>
				<td colspan="3">{{data.zczs}}</td>
				<td colspan="2">转向轴悬架形式</td>
				<td colspan="2">{{data.zxzxjxs | zxzxjxs}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">前照灯制</td>
				<td colspan="1">{{data.qzdz | qzdz}}</td>
				<td colspan="5">前照灯远光光速能否单独调整</td>
				<td colspan="3">{{data.ygddtz | ygddtz}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">初次登记时间</td>
				<td colspan="1">{{data.ccdjrq}}</td>
				<td colspan="1">出厂年月</td>
				<td colspan="3">{{data.ccrq}}</td>
				<td colspan="2">里程表读数(Km)</td>
				<td colspan="2">{{data.lcbds}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">检验类别</td>
				<td colspan="1">{{data.jylb | jylb}}</td>
				<td colspan="1">检验项目</td>
				<td colspan="3">{{data.jyxm}}</td>
				<td colspan="1">登陆员</td>
				<td colspan="1">{{data.dly}}</td>
				<td colspan="1">引车员</td>
				<td colspan="1">{{data.ycy}}</td>
			</tr>
		</table>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="1" rowspan="2">代号</td>
				<td colspan="2" rowspan="2">路试检验项</td>
				<td colspan="1" rowspan="2">制动初速度(km/h)</td>
				<td colspan="2" rowspan="1">制动距离(m)</td>
				<td colspan="2" rowspan="1">MFDD(m/s2)</td>
				<td colspan="1" rowspan="2">协调时间(%)</td>
				<td colspan="1" rowspan="2">制动稳定性</td>
				<td colspan="2" rowspan="1">操作力(N)</td>
				<td colspan="1" rowspan="2">项目判定</td>
				<td colspan="1" rowspan="2">单项次数</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" >满载</td>
				<td colspan="1" >空载</td>
				<td colspan="1" >满载</td>
				<td colspan="1" >空载</td>
				<td colspan="1" >手操纵</td>
				<td colspan="1" >脚操纵</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1" rowspan="5">R</td>
				<td colspan="1" rowspan="4">制动*</td>
				<td colspan="1">行车</td>
				<td colspan="1">{{data.zdcsd  }} </td>
				<td colspan="1">{{data.xcmzzdjl  }} </td>
				<td colspan="1">{{data.xckzzdjl  }} </td>
				<td colspan="1">{{data.xcmzmfdd  }} </td>
				<td colspan="1">{{data.xckzmfdd  }} </td>
				<td colspan="1">{{data.zdxtsj  }} </td>
				<td colspan="1">{{data.zdwdx  }} </td>
				<td colspan="1"> </td>
				<td colspan="1"> </td>
				<td colspan="1"> </td>
				<td colspan="1"> </td>

			</tr>
			<tr class="tab-tr">
				<td colspan="1">应急</td>
				<td colspan="1">{{data.yjzdcsd  }} </td>
				<td colspan="1">{{data.yjmzzdjl  }} </td>
				<td colspan="1">{{data.yjkzzdjl  }} </td>
				<td colspan="1">{{data.yjmzmfdd  }} </td>
				<td colspan="1">{{data.yjkzmfdd  }} </td>
				<td colspan="2"> </td>
				<td colspan="1"> </td>
				<td colspan="1"> </td>
				<td colspan="1">{{data.yjzdpd  }} </td>
				<td colspan="1"> </td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1"></td>
				<td colspan="5"> </td>
				<td colspan="4"> </td>
				<td colspan="2"> </td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">驻车</td>
				<td colspan="5"> </td>
				<td colspan="4"> </td>
				<td colspan="1">{{data.lszczdpd  }} </td>
				<td colspan="1"> </td>
			</tr>
			<tr class="tab-tr">
				<td colspan="2">车速表</td>
				<td colspan="5">{{data.csdscz  }} </td>
				<td colspan="4"> </td>
				<td colspan="1">{{data.csbpd }} </td>
				<td colspan="1"> </td>
			</tr>
		</table>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="4">人工检验项</td>
				<td colspan="4">不合格否决项(打编号)</td>
				<td colspan="4">不合格建议维护项(打编号)</td>
				<td colspan="3">检验员</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">1</td>
				<td colspan="3">车辆外观查验</td>
				<td colspan="4"> </td>
				<td colspan="4"> </td>
				<td colspan="3"> </td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">2</td>
				<td colspan="3">底盘动态检验</td>
				<td colspan="4"> </td>
				<td colspan="4"> </td>
				<td colspan="3"> </td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">3</td>
				<td colspan="3">车辆动态检验</td>
				<td colspan="4"> </td>
				<td colspan="4"> </td>
				<td colspan="3"> </td>
			</tr>
			<tr class="tab-tr">
				<td colspan="3">路试结论</td>
				<td colspan="2"></td>
				<td colspan="3">批准人</td>
				<td colspan="2"> </td>
				<td colspan="3">路试判定/路试次数 </td>
				<td colspan="1"> </td>
				<td colspan="1"> </td>
			</tr>
			<tr class="tab-tr">
				<td colspan="3">备注</td>
				<td colspan="2"></td>
				<td colspan="3">送检人(签字)</td>
				<td colspan="2"> </td>
				<td colspan="3">单位盖章</td>
				<td colspan="2"> </td>
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
                    bgdlx: 4,
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
                const fff = ['不能单独调整','单独调整'];
                return fff[ygddtz-1]
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
            jylb:function (jylb) {
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
            zxzxjxs:function (zxzxjxs) {
                if(zxzxjxs == '0'){
                    return '独立悬架'
                }else  if (zxzxjxs == '1'){
                    return '非独立悬架'
                }else {
                    return ''
                }

            },
        }

    }
</script>

