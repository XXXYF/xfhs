<template>
	<div class="video-box" :model="data">
		<div class="vid-lt">
			<span class="vid-tit">视频列表</span>
			<ul class="vid-ul">
				<li v-for="(item, index)  in items" @click="changeImg(index)" class="lst"  :class="{ focus:changeRed == index}" >
					<span class="vid-name">{{ item.id }}</span>
					
					<div class="cont">
						<img :src="item.img" alt="" class="img">
						<!-- <video width="840px" height="400px" controls="controls"> 
							<source :src="item.viedeo" type="video/mp4"></source> 
						</video> --> 
						<object type="application/x-vlc-plugin" id="vlcplayer" events="True" classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" height="400px" width="800px" style="border:1px solid #eee">
							<param name="mrl" :value="item.video">
		                    <param name="ShowDisplay" value="False">
			                <param name="AutoLoop" value="True">	
			                <param name="AutoPlay" value="True">
	                    	<param name="Volume" value="50">
		                    <param name="toolbar" value="True">
		                    <param name="StartTime" value="0">  
						</object>

						<div class="down-box">
							<span class="fa-box">
							<i class="fa fa-backward" @click="doPlayFaster"></i>
							<i class="fa fa-pause" @click="doPlayOrPause"></i>
							<i class="fa fa-forward" @click="doPlaySlower"></i>
							</span>                        
							<a href="../common/vlc-2.2.8.0.exe" class="" download="播放插件下载"><i class="fa fa-download" ></i>&nbsp;&nbsp;播放插件下载</a>
						</div>
						<div class="msg">
							<span>检验流水号：{{data.name}}</span>
							<span>检验性代号：C001</span>
							<span>号牌种类：小轿车</span>
							<span>号牌号码：赣A12345</span>
							<span>无异常</span>     
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import playjs from '../../common/js/play.js'
    import idata from '../../assets/demo.json'

	export default{
		data(){
			return{
				data:{},
				changeRed:0, 
			}
		},
		methods:{
			changeImg:function(index){
                this.changeRed = index;
                console.log(index,'132')
            },
            doPlayFaster(){
            	//playjs()
            	console.log('3')
            },
            doPlayOrPause(){
            	//playjs()
            	console.log('2')
            },
            doPlaySlower(){
            	//playjs()
            	console.log('1')
            }

		},
		mounted(){
			console.log(idata,'1111')
			var trmsg = sessionStorage.getItem('trmsg')
			this.data = JSON.parse(trmsg)
		},
		computed:{
			items(){
				return idata.data
			}
		},
	}
</script>
<style type="text/css">
	.video-box{
		margin:15px 5px;
		/*border:1px solid #e0e0e0;*/
	}
	.vid-lt{
		position: relative;
		height: 480px;
	}
	.vid-tit{
		display: block;
		width: 260px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #1080d6;
		color: #fff;
	}
	.vid-ul{
		list-style: none;
		display: block;
		border:1px solid #e0e0e0;
		border-top: none;
		margin: 0;
		padding: 0 0 20px;
		width: 258px;
	}
	.vid-ul .lst{
		display: block;
	}
	.vid-ul .lst .vid-name{
		display: inline-block;
		width: 240px;
		background-color: #c8e7ff;
		color:#2788d9;
		height: 34px;
		line-height: 34px;
		text-align: center;
		margin:10px 10px 0;
		cursor: pointer;
		

	}
	.vid-ul .lst .cont{
		display: none;
		position: absolute;
		top:0px;
		left: 280px;
	}
	.vid-ul .lst .img{
		border:1px solid #e0e0e0;
		width:840px;
		height: 400px;
	}
	.vid-ul .lst.focus .vid-name{
		color: #ca4242;
		background-color: #fecdcd;
	}
	.vid-ul .lst.focus .cont{
		display: block;
	}
	.vid-ul .lst .cont .down-box{
		background-color: #063356;
		color: #fff;
		padding:0 20px;
		height: 50px;
		line-height:50px;
		margin-top:-3px;
		text-align: center;
	}
	.vid-ul .lst .down-box >a{
		color:#fff;
		text-decoration: none;
		float: right;
	}
	.vid-ul .lst .down-box .fa{
		font-size: 20px;
		margin-right: 20px;
		cursor: pointer;
	}
	.vid-ul .lst .cont .msg{
		color:#fff;
		background-color: #000000;
		height: 34px;
		line-height: 34px;
		padding: 0 20px;
	}
	.vid-ul .cont .msg span{
		padding-right: 30px;
	}
</style>