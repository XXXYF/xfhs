<template>
	<div class="line-box">
		<el-form :inline="true" :model="filters" ref="filters">    
            <el-form-item label="检验类别">
				<el-select v-model="filters.char" placeholder="全部">
					<el-option label="前轮制动力曲线" value="shanghai"></el-option>
					<el-option label="后轮（轴）制动力曲线" value="beijing"></el-option>
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
	import util from '../../common/js/util'
	import { getUserListPage} from '../../api/api';
	import echarts from 'echarts'

	export default {
		data() {
			return {
				filters: {
					char:'', 
				},
				users: [],
				total: 0,
				page: 1,
				chartColumn: null,
			}
		},
		methods: {
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					char: this.filters.char,
					//age : this.filters.age,
				};
				//this.listLoading = true;
				//NProgress.start();
				getUserListPage(para).then((res) => {
					console.log(res);
					this.total = res.data.total;
					this.users = res.data.users;
					//this.listLoading = false;
					//NProgress.done();
				});
			},
			drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));
                
                this.chartColumn.setOption({
                    title: {
                        text: '一周业务统计量',
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
                  		type : 'category',
                  		name: '时间',
                     	data: ['周一','周二','周三','周四','周五','周六','周日'],
                     	axisLabel: {
			                interval:0
			            }
                  	},
                  yAxis: {
                  	type :'value',
                  	name: '数量',
                  },
                  series: [{
                      name: '检验业务量',
                      type: 'line',
                      data: [0.1, 1.0, 0.5, 0.3, 0.2, 0.3, 1.0],
                      markLine: {data: [{type: 'average', name: '平均值'}]}
                    }]
                });
                window.onresize = this.chartColumn.resize;
            },
            drawCharts() {
                this.drawColumnChart();
            },   
			
		},
		mounted() {
			this.getUsers();
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
    	float:left;
    	width:100%;
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
