<template>
	<div class="nav-box">
		<ul class="ul-father">
			<li class="li-father" v-for="item in arr" v-on:mouserin="item.show =! item.show" v-on:mosueout="item.show =! item.show">
                <router-link v-bind:to="item.url"> {{ item.title }} </router-link>
            </li>
		</ul>
		<!-- <component :is=""></component> -->
	</div>

</template>

<script>
	export default{
		data(){
			return{
				arr:[
					{
        				title:'检验报告',
        				url:'/Tab1'
        			},
        			{
        				title:'外检报告单',
        				url:'/Tab2',
        			},
        			{
        				title:'仪器设备检验记录',
        				url:'/Tab3',
        			},
        			{
        				title:'检验过程',
        				url:'/Tab4'
        			},
        			{
        				title:'制动力曲线',
        				url:'/Tab5'
        			},
        			{
        				title:'路试检验',
        				url:'/Tab6'
        			},
        			{
        				title:'交强险',
        				url:'/Tab7'
        			},
        			{
        				title:'检验照片',
        				url:'/Tab8'
        			},
        			{
        				title:'检验视频',
        				url:'/Tab9'
        			}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-box{
		display: block;
		float:left;
		width:100%;
		color: #fff;
		.ul-father{
			float: left;
    		width: 100%;
			margin:0;
			padding:0;
			list-style:none;
			.li-father{
				display:inline-block;;
				float:left;
				list-style:none;
				a{
					color:#333;
					text-decoration:none;
					padding:10px 20px 10px 25px;
				}
				
			}
		}
	}
</style>