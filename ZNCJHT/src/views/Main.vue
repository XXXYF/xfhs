<template>
	<div class="" style="margin-top:-20px">
		<el-row class="panel-group" :gutter="26">
		    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			  	<div class='card-panel' @click="handleSetLineChartData('newVisitis')">
		        	<div class="card-panel-icon-wrapper icon-1">
		        		<i class="iconfont icon-jintian"></i>
		          		
		        	</div>
		        	<div class="card-panel-description">
		        		<span class="card-panel-num">123</span>
		         		<div class="card-panel-text">今日接单数</div>
		        	</div>
		      	</div>
		    </el-col>
		    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			    <div class="card-panel bd-2" @click="handleSetLineChartData('messages')">
			        <div class="card-panel-icon-wrapper icon-2">
			          <i class="iconfont icon-yueche-"></i>
			        </div>
			        <div class="card-panel-description">
		        		<span class="card-panel-num">123</span>
		         		<div class="card-panel-text">今日待检数</div>
		        	</div>
			      </div>
		    </el-col>
		    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			    <div class="card-panel bd-3" @click="handleSetLineChartData('purchases')">
			        <div class="card-panel-icon-wrapper icon-3">
			          <i class="iconfont icon-zhou"></i>
			        </div>
			        <div class="card-panel-description">
		        		<span class="card-panel-num">123</span>
		         		<div class="card-panel-text">本周接单数</div>
		        	</div>
		      	</div>
		    </el-col>
		    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
			    <div class="card-panel bd-3" @click="handleSetLineChartData('purchases')">
			        <div class="card-panel-icon-wrapper icon-4">
			          

			          <i class="iconfont icon-yuyue"></i>
			        </div>
			        <div class="card-panel-description">
		        		<span class="card-panel-num">123</span>
		         		<div class="card-panel-text">本周待检数</div>
		        	</div>
		      	</div>
		    </el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				data:{},
			}
		},
		methods: {
			drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));
                this.chartColumn.setOption({
                    title: {
                        //text: '一周业务统计量',
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
                  	legend: {
                        data: ['安检', '综检','环检']
                    },
                   toolbox: {
					　　show : true,
					},
					calculable:true,
                  	xAxis: {
                  		type : 'category',
                  		name: '',
                     	data: ['周一','周二','周三','周四','周五','周六','周日'],
                     	axisLabel: {
			                interval:0
			            }
                  	},
                  yAxis: {
                  	type :'value',
                  	name: '合格率/日',
                  },
                  series: [{
                      name: '安检',
                      type: 'line',
                      data: [0.1, 1.0, 0.5, 0.3, 0.2, 0.3, 1.0],
                      markLine: {data: [{type: 'average', name: '平均值'}]}
                    },{
                      name: '综检',
                      type: 'line',
                      data: [0.2, 1.1, 0.3, 0.2, 0.1, 0.6, 0.9],
                      markLine: {data: [{type: 'average', name: '平均值'}]}
                    },{
                      name: '环检',
                      type: 'line',
                      data: [0.3, 1.0, 0.4, 0.1, 0.3, 0.2, 0.1],
                      markLine: {data: [{type: 'average', name: '平均值'}]}
                    }
                    ]
                });
            },
            drawColumnChart1() {
                this.chartColumn1 = echarts.init(document.getElementById('chartColumn1'));
                this.chartColumn1.setOption({
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
            },
            drawCharts() {
                this.drawColumnChart(); 
            },
            drawCharts1() {
                this.drawColumnChart1(); 
            },
            handleSetLineChartData(type) {
	          this.$emit('handleSetLineChartData', type)
	        }

		},
		mounted: function () {
            // this.drawCharts();
            // this.drawCharts1();
            var user = sessionStorage.getItem('user');
			console.log(user,'9999999999')
			this.data  = JSON.parse(user);
			console.log(this.data,'5555555555')
			// if (user) {
			// 	user = JSON.parse(user);
			// 	this.sysUserName = user.name || '';
			// 	this.sysUserAvatar = user.avatar || '';
			// };
        },
        // updated: function () {
        //     this.drawCharts();
        //     this.drawCharts1()
        // }
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	.panel-group {
	  margin-top: 18px;
	  .card-panel-col{
	    margin-bottom: 32px;
	  }
	  .card-panel {
	    height: 110px;
	    cursor: pointer;
	    font-size: 12px;
	    position: relative;
	    overflow: hidden;
	    color: #666;
	    background: #fff;
	    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
	    border-color: rgba(0, 0, 0, .05);
	    .iconfont{
	    	font-size:40px;
	    	color: #fff;
	    }
	    .icon-1{
	    	background:#f05050;
	    }
	    .icon-2 {
	    	background:#7266ba;
	    }
	    .icon-3 {
	      background: #23b7e5;
	    }
	    .icon-4 {
	      background: #27c247
	    }
	    .card-panel-icon-wrapper {
	      float: left;
	      margin: 20px;
	      padding: 16px;
	      transition: all 0.38s ease-out;
	      border-radius: 6px;
	      height:70px;
	      width:70px;
	      box-sizing: border-box;
	      text-align:center;
	    }
	    .card-panel-icon {
	      float: left;
	      font-size: 48px;
	    }
	    .card-panel-description {
	      float: left;
	      margin: 29px 0px;
	      margin-left: 0px;
	      .card-panel-text {
	        line-height: 18px;
	        color: #4c4c4c;
	        font-size: 14px;
	      }
	      .card-panel-num {
	        font-size: 28px;
	        color:#4c4c4c;
	      }
	    }
	  }
	}
	#chartColumn, #chartColumn1{
		background:#fff!important;
		//margin-top:20px;
	}
	
</style>