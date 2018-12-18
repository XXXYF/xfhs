<!-- 获取数据 -->
<template>
	<div class="msg-box">
		<p class="">用户基本信息</p>
		<table class="tab" :model="data">
			<tbody>
				<tr class="tr">
					<td class="cell">用户账号</td>
					<td>{{data.loginName}}</td>
					<td class="cell">用户姓名</td>
					<td>{{data.userName}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">用户角色</td>
					<td >{{data.type |jylxDate}}</td>
					<td class="cell">用户部门</td>
					<td>{{data.roleType}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">用户状态</td>
					<td>{{data.status}}</td>
					<td class="cell">联系电话</td>
					<td>{{data.phone}}</td>
				</tr>
				<!--<tr class="tr">-->
					<!--<td class="cell">允许登录ip</td>-->
					<!--<td></td>-->
					<!--<td class="cell">验证方式</td>-->
					<!--<td></td>-->
				<!--</tr>-->
				<!--<tr class="tr">-->
					<!--<td class="cell">密码有效期至</td>-->
					<!--<td></td>-->
					<!--<td class="cell">允许登录出错次数</td>-->
					<!--<td></td>-->
				<!--</tr>-->
				<!--<tr class="tr">-->
					<!--<td class="cell">可登录时间段</td>-->
					<!--<td></td>-->
					<!--<td class="cell">联系方式</td>-->
					<!--<td>{{data.phone}}</td>-->
				<!--</tr>-->
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
				var box = document.getElementsByClassName("router-link-active");
				box[0].classList.add("aa")
				// console.log(box[0].value);
			},
		},
		mounted() {
			var trmsg = sessionStorage.getItem('trmsg')
	    	this.data = JSON.parse(trmsg)
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