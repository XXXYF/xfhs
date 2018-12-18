<!-- 获取数据 -->
<template>
	<div class="msg-box">
		<span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;系统登录日志详情</span>
		<table class="tab" :model="data">
			<tbody>
				<tr class="tr">
					<td class="cell">用户id</td>
					<td>{{data.id}}</td>
					<td class="cell">IP地址</td>
					<td>{{data.ip}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">请求路径</td>
					<td>{{data.linkAddress}}</td>
					<td class="cell" :formatter="formattype">类型</td>
					<td>{{data.userType |fontDate}}</td>
					
				</tr>
				<tr class="tr">
					<td class="cell">传入参数</td>
					<td>{{data.parameter}}</td>
					<td class="cell">操作结果</td>
					<td>{{data.result}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">调用时间</td>
					<td colspan="3"  :formatter="formatRole">{{data.time | formDate}}</td>
				</tr>

			</tbody>
		</table>
		<el-button type="primary" @click="back">返回</el-button>

	</div>
</template>

<script>
    import moment from 'moment'


    export default{
		data(){
			return {
				data:{}
			}
		},
		methods:{
            //用户角色显示转换
            formatRole :function(row, column) {
                return moment(row.createTime).format('YYYY-MM-DD hh:mm:ss')
            },
            //用户状态显示转换
            formattype :function(row, column) {
                return row.userType == 1 ? '手机' : row.userType == 0 ?'检测站':'管理员'
            },

			back: function(){
				window.history.go(-1)
				var box = document.getElementsByClassName("router-link-active");
				// console.log(box[0].value);
			},
		},
		mounted() {
			// var trmsg = sessionStorage.getItem('trmsg')
			// this.data = JSON.parse(trmsg)
			var PortDet = sessionStorage.getItem('PortDet')
			this.data = JSON.parse(PortDet)
		},
        filters:{
            formDate:function (dysj) {
                if (dysj === null){
                    return "";
                }else {
                    return moment(dysj).format('YYYY-MM-DD  hh:mm:ss')
                }
            },
            fontDate:function (value) {
                const fff = ['手机','检测站','管理员'];
                return fff[value]
            }

        }
	}
</script>
<style>
	.msg-box{
		border-top: none;
	}
	.msg-box .hd-tit{
		margin-top: 0;
	}
</style>
