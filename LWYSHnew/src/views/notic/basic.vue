<!-- 获取数据 -->
<template>
	<div>
		<div class="cont-box">
			<el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
				<div class="topTitle">用户信息</div>
				<table class="tab" :model="data">
					<tbody>
						<tr class="tr">
							<td class="cell">用户姓名</td>
							<td>{{data.yhxm}}</td>
							<td class="cell">警员/员工编号</td>
							<td>{{data.jybh}}</td>
						</tr>
						<tr class="tr">
							<td class="cell">所属部门</td>
							<td>{{data.ssbmmc}}</td>
							<td class="cell">身份证号码</td>
							<td>{{data.sfzhm}}</td>
						</tr>
						<tr class="tr">
							<td class="cell">最近登录时间</td>
							<td :formatter="formatRole">{{data.zhdlsj | formDate}}</td>
							<td class="cell">最近登录ip</td>
							<td>{{data.zjdlip}}</td>
						</tr>
						<tr class="tr">
							<td class="cell">登录账号</td>
							<td>{{data.yhdlzh}}</td>
							<!--<td class="cell">登录密码</td>
							<td>{{data.yhdlmm}}</td>-->
							<!--<td class="cell">是否管理员</td>
							<td>{{data.sfgly | sfglyDate }}</td>-->
							<td class="cell">更新时间</td>
							<td>{{data.gxsj | formDate}}</td>
						</tr>
						<!--<tr class="tr">
							<td class="cell">更新时间</td>
							<td>{{data.gxsj | formDate}}</td>
							<td class="cell"></td>
							<td></td>
						</tr>-->
						<!--<tr class="tr">
							<td class="cell">是否管理员</td>
							<td>{{data.sfgly | sfglyDate }}</td>
							<td class="cell"></td>
							<td></td>
						</tr>-->
					</tbody>
				</table>
				<!-- <router-link :to="{ path :'/user'}"><el-button type="primary">返回</el-button></router-link> -->
				<p class="btnBox">
					<button class="dialog-button back-photo" @click="back">返回</button>
				</p>
			</el-col>
		</div>
	</div>
</template>

<script>
    import moment from 'moment'

    export default{
		data(){
			return {
				data:{
                    yhxm:'',
                    jybh:'',
                    ssbmmc:'',
                    sfzhm:'',
                    zhdlsj:'',
                    zjdlip:'',
                    yhdlzh:'',
                    yhdlmm:'',
                    gxsj:'',
                    gxrxm:'',
                    sfgly:'',
				}
			}
		},
		methods:{
			formatRole :function(row,colume) {
				return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			},
			back: function(){
				window.history.go(-1)
				var box = document.getElementsByClassName("router-link-active");
				box[0].classList.add("aa")
				// console.log(box[0].value);
			},
		},
		mounted() {
			var user = sessionStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
                console.log(user,'1233')
                this.data = user.data;

            };
		},
        filters:{
            sfglyDate:function (dysj) {
                const fff = ['是','否'];
                return fff[dysj-1]
            },
            formDate:function (dysj) {
                //return monent(dysj)
                return moment(dysj).format('YYYY-MM-DD HH:mm:ss')

            }
        }
	}
</script>
