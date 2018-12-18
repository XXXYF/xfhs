<template>
	<div class="msg-box">
		<span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;系统异常日志详情</span>
		<table class="tab" :model="data">
			<tbody>
				<tr class="tr">
					<td class="cell">ID:</td>
					<td>{{data.id}}</td>
					<td class="cell">异常发生时间:</td>
					<td>{{data.createTime | formDate }}</td>
				</tr>
				<tr class="tr">
					<td class="cell">异常访问地址:</td>
					<td colspan="3">{{data.requestURL}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">异常访问参数:</td>
					<td colspan="3">{{data.requestParameters}}</td>
				</tr>
				<tr class="tr">
					<td class="cell">异常信息</td>
					<td colspan="3"><textarea class="textarea" style="resize:none;height: 250px"  rows="3" cols="20">{{data.exceptionInfo}} </textarea></td>
				</tr>

			</tbody>
		</table>
		<div slot="footer" class="footer">
			<el-button type="warning" @click="back">返回</el-button>
		</div>
	</div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
	export default{
		data(){
			return{
				data:{},
				id:''
			}
		},
		methods:{
			formatRole :function(row,colume) {
				return row.role == 1 ? '检验机构业务员' :row.role == 0 ? '警员':'非警员'
			},
			back: function(){
				window.history.go(-1)
				// console.log(box[0].value);
			},
            //获取信息
            getMsg() {
                let mn = {
                    "id": this.id,
                }
                var json =JSON.stringify(mn);
                let para = {
                    apiId: "logerrordail",
                    jsonData:json
                };
                axios.post('/log/commonAccess', qs.stringify(para),{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    console.log(response)
                    this.data = response.data.data;

                }).catch((response) =>{

                });
            },
		},
		mounted(){
	    	var SysUnDt = sessionStorage.getItem('SysUnDt')
			let data = JSON.parse(SysUnDt)
	    	console.log(data,'3333333')
           	this.id = data.id,
			this.getMsg()

		},
        filters:{
            formDate:function (dysj) {
                if (dysj === null){
                    return "";
                }else {
                    return moment(dysj).format('YYYY-MM-DD  hh:mm:ss')
                }
            },

        }
	}
</script>

<style>
	.textarea{
		display: block;
		height: 100px;
		width: 100%;
		margin: 10px 0;
		border:1px solid #e0e0e0;
	}
</style>