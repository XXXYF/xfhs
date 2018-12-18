<template>
	<div class="line-box rgwgjyjlBox">
		<el-form :inline="true" :model="filters" ref="filters">
			<el-form-item label="制动率抽数">
				<el-select v-model="zdlzs" placeholder="全部" @change="searchReport">
					<el-option label="一轴制动率曲线" value="1"></el-option>
					<el-option label="二轴制动率曲线" value="2"></el-option>
					<el-option label="三轴制动率曲线" value="3"></el-option>
					<el-option label="四轴制动率曲线" value="4"></el-option>
					<el-option label="五轴制动率曲线" value="5"></el-option>
				</el-select>
			</el-form-item>
		</el-form>
		<section class="chart-container">
			<el-row>
				<el-col :span="24" >
					<div id="chartColumn" style="width:500PX; height:400px;"></div>
				</el-col>
			</el-row>
		</section>
	</div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
    import echarts from 'echarts'

    export default {
        data() {
            return {
                filters: {

                },
                zdlzs:'',
                data: [],
                zzdlArr: [],
                yzdlArr: [],
                total: 0,
                page: 1,
                chartColumn: null,
            }
        },
        methods: {
            //获取用户列表
            // getUsers() {
            //     let para = {
            //         page: this.page,
            //         char: this.filters.char,
            //         //age : this.filters.age,
            //     };
            //     //this.listLoading = true;
            //     //NProgress.start();
            //     getUserListPage(para).then((res) => {
            //         console.log(res);
            //         this.total = res.data.total;
            //         this.users = res.data.users;
            //         //this.listLoading = false;
            //         //NProgress.done();
            //     });
            // },
            searchReport() {
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                    zdls: this.zdlzs,
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/ajlw/zdlqx/getZdlqx', qs.stringify(para) ,{
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
                    if(response.data.code == '1'){
                        this.zzdlArr = [];
                        this.yzdlArr = [];
                        this.data = response.data.data.zdlsjs;
                        for (var i = 0; i <this.data.length; i++) {
                            var vote = {};
                            vote.zzdl = this.data[i].zzdl;
                            vote.yzdl = this.data[i].yzdl;
                            this.zzdlArr.push(vote.zzdl);
                            this.yzdlArr.push(vote.yzdl);
                        }
                        console.log(this.zzdlArr,'23232')
                    }else {
                        this.zzdlArr = [];
                        this.yzdlArr = [];
					}
                    //直接运行这里了，加载的那个弹窗一直没有消失
                    this.drawColumnChart();
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));

                this.chartColumn.setOption({
                    title: {
                        text: '',
                        textStyle:{
                            //字体风格,'normal','italic','oblique'
                            fontStyle:'normal',
                            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                            fontWeight:'normal',
                            //字体系列
                            fontFamily:'sans-serif',
                            //字体大小
                            fontSize:14
                        },
                        left :'center',
                    },

                    tooltip: {
                        trigger:'axis'
                    },
                    toolbox: {
                        show : true,
                        feature : {
                            dataZoom : {show: true},
                            //mark : {show: true},
                            dataView : {show: true, readOnly: false},
                            magicType : {show: true, type: ['line', 'bar']},
                            //restore : {show: true},
                            //saveAsImage : {show: true},

                        }
                    },
                    calculable:true,
                    xAxis: {
                        show: false,
                        type : 'category',
                        name: '',
                        data: this.yzdlArr,
                        axisLabel: {
                            interval:0
                        },
                        axisTick: {show:false},
                    },
                    yAxis: {
                        type :'value',
                        name: '数量',
                    },
                    series: [{
                        name: '左轴',
                        type: 'line',
                        data: this.zzdlArr,
                        markLine: {data: [{type: 'average', name: '平均值'}]}
                    },{
                        name:'右轴',
                        type:'line',
                        data:this.yzdlArr,
                        markLine: {data: [{type: 'average', name: '平均值'}]}

                    },
                    ]
                });
                window.onresize = this.chartColumn.resize;
            },
            drawCharts() {
                this.drawColumnChart();
            },

        },
        mounted() {
            // this.getUsers();

            var rowdate = sessionStorage.getItem('rowdate');
            if (rowdate) {
                rowdate = JSON.parse(rowdate);
                this.filters = rowdate || '';
            };
            // this.searchReport();
            this.drawCharts();
        },
        updated: function () {
            this.drawCharts()
        },
    }

</script>



<style lang="scss" scoped>
	.line-box{
		display:block;

	}
	.chart-container {
		width: 100%;
		float: left;
	}
	.el-col {
		padding: 30px 20px;
	}
	#chartColumn{
		background-color:#fff!important;
	canvas{
		width:100%!important;
	}
	}

</style>
