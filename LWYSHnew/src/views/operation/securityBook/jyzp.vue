<!-- 安检-检验照片-->
<template>
	<div class="pic-cont rgwgjyjlBox">
		<ul class="pic-box"  id="pic-ul">
			<li class="pic-lst" v-for=" item in data">
				<img  :data-original="item.zplj"  :src= "item.zplj" class="img"  @click="picbox($event)" >
				<i class="pic-name">{{item.zpmc}}</i>
				<i class="pic-name">预审核结果:<span style="color: red">{{item.yshjg | yshjg}}</span></i>
				<i class="pic-name">不通过描述信息:<span style="color: red">{{item.yshmsxx}}</span></i>
			</li>
		</ul>
	</div>
</template>

<script>

    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
    import Viewer from 'viewerjs';
    import 'viewerjs/dist/viewer.css';

    export default{
        data(){
            return {
                data:[],
            }
        },
        methods:{
            //获取部门代号列表
            searchReport() {
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/ajlw/zp/getJczp', qs.stringify(para) ,{
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
            updatesqsh() {
                var self = this;
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                };
                var qs = require('querystring')
                axios.post('api/ajlw/ysh/getYshResult', qs.stringify(para) ,{
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
                    console.log(response.data.data,'2233232');
                    this.filters.jyjgbh = response.data.data.yshjg;
                    this.filters.yshmsxx = response.data.data.yshmsxx;
                }).catch((response) =>{

                });
            },
            //放大图片效果
            picbox(e){

                var viewer = new Viewer(document.getElementById('pic-ul'), {
                    url: 'data-original'
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
            this.updatesqsh();

        },
        computed:{

        },
        filters:{
            yshjg:function (yshjg) {
                if(yshjg == '0'){
                    return '未处理'
                }else  if (yshjg == '1'){
                    return '保留'
                }else  if (yshjg == '2'){
                    return '资源未获取'
                }else  if (yshjg == '3'){
                    return '一般性错误'
                }else  if (yshjg == '4'){
                    return '建议人工'
                }else  if (yshjg == '5'){
                    return '严重性错误'
                }else {
                    return ''
                }
            },
        }
    }
</script>

<style scoped>
	.pic-cont{
		display: block;
		float: left;
		width: 100%;
	}
	.pic-box{
		display: block;
		float: left;
		padding: 25px 25px 0px;
		margin: 0;
		margin-bottom: -7px;
	}
	.pic-box .pic-lst{
		position: relative;
		display: inline-block;
		float: left;
		width: 240px;
		height: 160px;
		margin-left: 39px;
		margin-bottom: 90px;
		padding: 0;
	}
	.pic-box .pic-lst:nth-child(4n+1){
		margin-left: 0;
	}
	.pic-box .pic-lst .img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.pic-box .pic-lst .pic-name{

		width: 100%;
		height: 30px;
		line-height: 30px;
		text-indent: 10px;
		color: #333333;
		font-style: normal;
	}
</style>