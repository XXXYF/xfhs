<template>
  <div class="m">
		<video id="my-video" class="video-js" controls preload="auto"  data-setup="{}" height="300">
			<!-- <source src="http://jq22com.qiniudn.com/jq22-sp.mp4" type="video/mp4"> -->
			<source src="http://www.w3school.com.cn/example/html5/mov_bbb.mp4" type="video/mp4">
<!-- 			<source src="../common/demo.mp4" type="video/mp4">
 -->			<p class="vjs-no-js">
			  To view this video please enable JavaScript, and consider upgrading to a web browser that
			  <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
			</p>
		  </video>
	</div>
</template>

<script>
    import videojs from '../../common/js/video.min.js'
	export default {
	 data(){
	 	return{
	 	}
	 },
	 mounted:function(){
        this.$nextTick(function(){
        	var myPlayer = videojs('my-video');
			videojs("my-video").ready(function(){
				var myPlayer = this;
				myPlayer.play();
			});
        })
    },

	}
</script>

@import '../common/css/video-js.css'
<style scope lang="scss">
	body{background-color: #191919}
	.m{display:block; float:left;width:100%;}
	.vjs-tech{height:400px;}
	.video-js{width:100%; height:100%;}
</style>