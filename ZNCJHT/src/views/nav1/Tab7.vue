<template>
	<div class="pic-cont">
		<ul class="pic-box" :data="users" id="pic-ul">
			 <li class="pic-lst" v-for=" item in items">
				<img  :data-original="item.src"  :src= "item.src" class="img"  @click="picbox($event)" >
				<i class="pic-name">{{item.name}}</i>
			</li>
		</ul>
	</div>
</template>

<script>
    import idata from '../../assets/demo1.json'
    import Viewer from '../../common/js/viewer.min.js'
    import '../../common/css/viewer.min.css'

	export default{
		data(){
			return {
				users:[],
			}
		},
		methods:{
			picbox(e){
				
				var viewer = new Viewer(document.getElementById('pic-ul'), {
					url: 'data-original'
				});
				
			},
		},
		mounted(){
			console.log(idata,'123')
		},
		computed:{
			items(){
				return idata.data
			}
		},
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
		margin-bottom: 33px;
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
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 30px;
		line-height: 30px;
	    text-indent: 10px;
	    background-color: #0000034d;
	    color: #fff;
	    font-style: normal;
	}
</style>