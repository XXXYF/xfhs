<!-- 获取数据 -->
<template>
	<div class="msg-box">
		<p class="">车辆基本信息</p>
		<table class="tab" :model="data">
			<tbody>
				<tr class="tr">
					<td class="cell">车辆id</td>
					<td>{{data.id}}</td>
					<td class="cell">号牌种类</td>
					<td>{{data.hpzl}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">是否新车</td>
					<td>{{data.isNewVehicle}}</td>
					<td class="cell">联系电话</td>
					<td>{{data.mobile}}</td>
					
				</tr>
				<tr class="tr">
					<td class="cell">车主</td>
					<td >{{data.owner}}</td>
					<td class="cell">用户部门</td>
					<td>{{data.qdlx}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">车牌号</td>
					<td>{{data.vehicleNo}}</td>
					<td class="cell">车辆类型</td>
					<td>{{data.vehicleType}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">车架号后4位</td>
					<td>{{data.vinLaterFourNo}}</td>
					<td class="cell">车架号</td>
					<td>{{data.vinNo}}</td>
				</tr>
			</tbody>
		</table>
		<!-- <router-link :to="{ path :'/user'}"><el-button type="primary">返回</el-button></router-link> -->
		<div slot="footer" class="footer">
			<el-button type="warning" @click="back">返回</el-button>
		</div>

	</div>
</template>

<script>
	export default{
		data(){
			return {
				data:{}
			}
		},
		methods:{
			formatRole :function(row,colume) {
				return row.type == 1 ? '微信用户' :row.type == 0 ? '企业用户':'管理用户'
			},
			back: function(){
				window.history.go(-1)
				// console.log(box[0].value);
			},
		},
		mounted() {
			var CarDetail = sessionStorage.getItem('CarDetail')
	    	this.data = JSON.parse(CarDetail)
	    	// console.log(this.data,'454545555555555555')
		},
        filters:{
            jylxDate:function (dysj) {
                const fff = ['微信用户','企业用户','管理用户'];
                return fff[dysj]
            }

        }
	}
</script>

<style scoped>
	.msg-box{
		border-top:2px solid #1080d6;
	}
	.msg-box table{
		width: 100%;
		border:1px solid #ccc;
		border-top-width:0;
		border-left-width: 0;
		border-spacing:0;
	}
	.msg-box table tr td{
		border-left:1px solid #ccc;
		border-top:1px solid #ccc;
		height: 30px;
		line-height: 30px;
		padding: 0 20px;
	}
	.msg-box table tr .cell{
		width: 15%;
		text-align: right;
	}
	.msg-box table tr:hover{
		background-color: #eef1f6;
	}

</style>