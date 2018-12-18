<template>
	<div class="det-box">
		<span class="hd">订单详情</span>
		<table v-model="detail" class="tbdy">
			<tbody>
				<tr>
					<td class="cell">订单号：</td>
					<td>{{detail.id}}</td>
					<td class="cell">客户姓名：</td>
					<td>{{detail.owner}}</td>
				</tr>
				<tr>
					<td class="cell">车牌号：</td>
					<td>{{detail.vehicleNo}}</td>
					<td class="cell">车架号（后四位）：</td>
					<td>{{detail.vinLaterFourNo}}</td>
				</tr>
				<tr>
					<td class="cell">车辆类型：</td>
					<td>{{detail.vehicleType | vType}}</td>
					<td class="cell">预约检测类别：</td>
					<td>{{detail.bookingType | bType}}</td>
				</tr>
				<tr>
					<td class="cell">订单状态：</td>
					<td>{{detail.status | jylxDate}}</td>
					<td class="cell">手机号：</td>
					<td>{{detail.phone}}</td>
				</tr>
				<tr>
					<td class="cell">累计行驶里程：</td>
					<td>{{detail.mileage}}</td>
					<td class="cell">行驶证后六位：</td>
					<td>{{detail.drivingLicenseLaterSixNo}}</td>
				</tr>
				<tr>
					<td class="cell">变速箱类型：</td>
					<td>{{detail.transmissionType | tTypeDate}}</td>
					<td class="cell">创建时间：</td>
					<td>{{detail.startTime |formDate}}</td>
				</tr>

			</tbody>
		</table>
		<el-button type="primary" @click="back">返回</el-button>
	</div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
	export default{
		data(){
			return{
				detail:{},
			}
		},
		methods:{
			back:function(){
				window.history.go(-1)
			}
		},
		mounted(){
			var trmsg = sessionStorage.getItem('trmsg')
			this.detail = JSON.parse(trmsg);
			console.log(this.detail)
		},
        filters:{
            formDate:function (dysj) {
                if (dysj === null){
                    return "";
                }else {
                    return moment(dysj).format('YYYY-MM-DD  hh:mm:ss')
                }
            },
            vType:function (dysj) {
                // const fff = ['小型汽车','大型汽车'];
                return '小型汽车';
            },
            tTypeDate:function (tType) {
                const ggg = ['手动','自动'];
                return ggg[tType  - 1];
            },
            bType:function (dysj) {
                let fff = "";
                if(dysj.slice(0,2) == "11"){
                    fff+="年检 "
                }
                if(dysj.slice(2,3) == "1"){
                    fff+="综检"
                }
                return fff
            },
            jylxDate:function (dysj) {
                const fff = ['申请','接受处理','取消','检测结束'];
                return fff[dysj - 1];
            }

        }
	}
</script>