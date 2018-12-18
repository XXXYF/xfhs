<!-- 安检-检验报告-->
<template>
	<div :model="data" class="detail-box rgwgjyjlBox">
		<p class="title">机动车安全技术检验报告</p>
		<table class="tab-msg">
			<tr class="tab-tr">
				<td colspan="6">一.基本信息</td>
			</tr>
			<tr class="tab-tr" style="">
				<td colspan="1">检验报告编号：</td>
				<td colspan="1">{{data.jybgbh}}</td>
				<td colspan="1">检验机构名称：</td>
				<td colspan="3">{{data.jyjgmc}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">号牌号码</td>
				<td colspan="1">{{data.hphm}}</td>
				<td colspan="1">所有人</td>
				<td colspan="3">{{data.syr}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">车辆类型</td>
				<td colspan="1">{{data.cllxmc}}</td>
				<td colspan="1">品牌/型号</td>
				<td colspan="1">{{data.clpp1}}</td>
				<td colspan="1">使用性质</td>
				<td colspan="1">{{data.syxzmc}}	</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">注册登记日期</td>
				<td colspan="1">{{data.ccdjrq}}</td>
				<td colspan="1">出 厂 年 月</td>
				<td colspan="1">{{data.ccrq}}</td>
				<td colspan="1">检 验 日 期</td>
				<td colspan="1">{{data.jyrq}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">车辆识别代号<br>(或出厂编号)</td>
				<td colspan="2">{{data.clsbdh}}</td>
				<td colspan="1">发动机号码<br>(或电动机号码)</td>
				<td colspan="2">{{data.fdjh}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6">二、检验结论</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">检验结论</td>
				<td colspan="1">{{data.jyjl}}</td>
				<td colspan="1">授权签字人</td>
				<td colspan="3">{{data.pzrxm}}</td>
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
			<tr v-for=" item in data.rgjyjgs" class="tab-tr">
				<td colspan="1">{{item.xh}}</td>
				<td colspan="1">{{item.rgjyxm}}</td>
				<td colspan="1">{{item.rgjgpd | rgjybz}}</td>
				<td colspan="2">{{item.rgjysm }}</td>
				<td colspan="1">{{item.rgjybz}}</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="6">四、仪器设备检验结果</td>
			</tr>
			<tr class="tab-tr">
				<td colspan="1">序号</td>
				<td colspan="1">检验项目</td>
				<td colspan="1">结果</td>
				<td colspan="1">标准限值</td>
				<td colspan="1">结果判定</td>
				<td colspan="1">备注</td>
			</tr>
			<tr v-for=" item in data.yqsbjyjgs" class="tab-tr">
				<td colspan="1">{{item.xh}}</td>
				<td colspan="1">{{item.yqjyxm}}</td>
				<td colspan="1">{{item.yqjyjg}}</td>
				<td colspan="1">{{item.yqbzxz}}</td>
				<td colspan="1">{{item.yqjgpd | rgjybz}}</td>
				<td colspan="1">{{item.yqjybz}}</td>
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
						{{data.jybgbz}}
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
                    bgdlx: 3,
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
            rgjybz:function (dysj) {

                if(dysj == '2'){
                    return '不通过'
                }else  if (dysj == '1'){
                    return '通过'
                }else {
                    return ''
                }
            },
        }


    }
</script>
