<!-- 安检-检验視頻-->
<template>
	<div class="video-box rgwgjyjlBox" :model="data">
		<p class="title">车辆检验视频</p>
		<div class="vid-lt">
			<ul class="vid-ul" >
				<span class="vid-tit">视频列表</span>
				<li v-for="(item, index)  in data" @click="changeImg(index)" class="lst"  :class="{ focus:changeRed == index}" >
					<span class="vid-name">{{ item.hpzlmc  }}({{item.jycs}})</span>
				</li>

			</ul>
			<div class="cont" id="scrollBody" style="" >
				<!--<img :src="item.img" alt="" class="img">-->
				<!-- <video width="840px" height="400px" controls="controls">
                    <source :src="item.viedeo" type="video/mp4"></source>
                </video> -->
				<div id="div_VLC" style="height: 100%;width: 640px; overflow: hidden;">

					<!--<%&#45;&#45; <object class="vlc" type='application/x-vlc-plugin' events='True' width="100%" height="100%">-->
					<!--<param name='mrl' value='' />-->
					<!--<param name='volume' value='50' />-->
					<!--<param name='autoplay' value='true' />-->
					<!--<param name='loop' value='false' />-->
					<!--<param name='fullscreen' value='false' />-->
					<!--</object>&#45;&#45;%>-->

					<!--<%&#45;&#45; <div style="height: 1000px; overflow: auto;">-->
					<!--<object id="vlc" class="vlc" type='application/x-vlc-plugin' events='True' width="720" height="540" classid='clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921'>-->
					<!--<param name='mrl' value='' />-->
					<!--<param name='volume' value='50' />-->
					<!--<param name='autoplay' value='true' />-->
					<!--<param name='loop' value='false' />-->
					<!--<param name='fullscreen' value='false' />-->
					<!--</object>-->
					<!--</div>&#45;&#45;%>-->
				</div>

				<div class="down-box">
							<span class="fa-box">
							<!--<i class="fa fa-backward" @click="doPlayFaster"></i>-->
								<!--<i class="fa fa-pause" @click="doPlayOrPause"></i>-->
								<!--<i class="fa fa-forward" @click="doPlaySlower"></i>-->
							</span>
					<a href="VlcUrl" class="" download="播放插件下载"><i class="fa fa-download" ></i>&nbsp;&nbsp;播放插件下载</a>
				</div>

			</div>
			<el-col  class="toolbar fil-tool" style="padding: 0px;width: 250px;position: absolute;right: 0;">
				<div class="topTitle jysptopTitle">视频列表</div>
				<el-form  :model="filters" ref="filters" id="filterss" class="filters" style="background: #ffffff" >
					<el-col class="jyspcol">
						<el-form-item label="检验流水号:">
							<el-input v-filterSpecialChar v-model="filters.jylsh" placeholder=""   ></el-input>
						</el-form-item>
						<el-form-item label="检验机构:">
							<el-input v-model="filters.jyjgbh" placeholder=""   ></el-input>
						</el-form-item>
						<el-form-item label="检验线代号:">
							<el-input v-model="filters.jcxdh" placeholder=""   ></el-input>
						</el-form-item>
						<el-form-item label="号牌种类:">
							<el-select v-model="filters.hpzl"  placeholder="全部" >
								<el-option
										v-for="item in hpzlList"
										:key="item.lbdm"
										:label="item.dmsm"
										:value="item.lbdm">
								</el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="号牌号码:">
							<el-input v-filterSpecialChar v-model="filters.hphm" placeholder=""   ></el-input>
						</el-form-item>
						<el-form-item label="异常类型:">
							<el-select v-model="filters.yjlx" placeholder="" >
								<el-option label="外检区域无视频信号" value="03"></el-option>
								<el-option label="线内检验无视频信号" value="04"></el-option>
								<el-option label="路试区域无视频信号" value="05"></el-option>
								<el-option label="打印区域无视频信号" value="06"></el-option>
								<el-option label="遮挡摄像头" value="07"></el-option>
								<el-option label="存在舞弊情形" value="10"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="异常描述:">
							<el-input v-model="filters.yjms" placeholder=""   ></el-input>
						</el-form-item>
					</el-col>

					<el-col   class="selectBtnbox" style="text-align: left">
						<el-button  class="dialog-button search-button"  @click.native.prevent="insertSpyj">上传</el-button>
					</el-col>
				</el-form>
			</el-col>
		</div>
	</div>
</template>

<script>
    import playjs from '../../../api/play.js'
    import videojs from '../../../api/video.min.js'
    // import idata from '../../assets/demo.json'
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
    function showPlayer(id, url) {
        var vhtml = '<object id="vlc" class="vlc"';
        //var userAg = navigator.userAgent;
        //if (-1 != userAg.indexOf("MSIE")) {
        vhtml += ' classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921"';
        //}
        //else if (-1 != userAg.indexOf("Firefox") || -1 != userAg.indexOf("Chrome") || -1 != userAg.indexOf("Opera") || -1 != userAg.indexOf("Safari")) {
        vhtml += ' type="application/x-vlc-plugin"';
        //}
        vhtml += ' events="True"';

        //vhtml += ' width="' + $(window).width() + '"';
        //vhtml += ' height="' + $(window).height() + '"';
        vhtml += '>';

        //下面这些播放器的参数自己配置吧
        vhtml += " <param name='mrl' value='' />";
        vhtml += " <param name='volume' value='50' />";
        vhtml += " <param name='autoplay' value='true' />";
        vhtml += " <param name='loop' value='false' />";
        vhtml += " <param name='fullscreen' value='true' />";
        vhtml += '  </object>';
        document.getElementById("div_VLC").innerHTML = vhtml;

        // $("#vlc").width($(window).width());
        // $("#vlc").height($(window).height() - 30);
        $("#vlc").width("1080px");
        $("#vlc").height("500px");

        //setTimeout(function () {
        if (_url != '') {
            play(_url);
        }
        //}, 5000);
    }


    /* 浏览器检测 */
    function checkBrowser() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        if (!!window.ActiveXObject || "ActiveXObject" in window || userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
            if (isInsalledIEVLC()) {
                //alert("已装VLC");
            } else {
                alert("未装VLC,请先安装");
                window.open("http://dl.pconline.com.cn/html_2/1/124/id=6661&pn=0.html");
                location.href = "https://get.videolan.org/vlc/3.0.3/win64/vlc-3.0.3-win64.exe";
                //https://www.videolan.org/
            }
        }
        else if (userAgent.indexOf("Firefox") > -1) {
            if (isInsalledFFVLC()) {//
                //alert("已装VLC");
            }
            else {
                alert("未装VLC");
                window.open("http://dl.pconline.com.cn/html_2/1/124/id=6661&pn=0.html");
                location.href = "https://get.videolan.org/vlc/3.0.3/win64/vlc-3.0.3-win64.exe";
                //https://www.videolan.org/
            }
        } else {
            alert("VLC播放器暂时仅支持IE和火狐浏览器！");
        }

        //var browser = navigator.appName
        //var b_version = navigator.appVersion
        //var version = parseFloat(b_version)
        //if (browser == "Netscape" && version >= 4) {
        //    if (isInsalledFFVLC()) {//
        //        alert("已装VLC");
        //    }
        //    else {
        //        alert("未装VLC");
        //        //location.href = "http://download.videolan.org/pub/videolan/vlc/2.2.1/win32/vlc-2.2.1-win32.exe";
        //        //location.href=“http://rj.baidu.com/soft/detail/12124.html?ald”;
        //    }
        //} else if (browser == "Microsoft Internet Explorer" && version >= 4) {
        //    if (isInsalledIEVLC()) {
        //        alert("已装VLC");
        //    } else {
        //        alert("未装VLC,请先安装");
        //        //location.href = "http://download.videolan.org/pub/videolan/vlc/2.2.1/win32/vlc-2.2.1-win32.exe";
        //        //location.href=“http://rj.baidu.com/soft/detail/12124.html?ald";
        //    }
        //}
    }
    function isInsalledIEVLC() {

        var vlcObj = null;
        var vlcInstalled = false;

        try {
            vlcObj = new ActiveXObject("VideoLAN.Vlcplugin.2");
            if (vlcObj != null) {
                vlcInstalled = true
            }
        } catch (e) {
            vlcInstalled = false;
        }
        return vlcInstalled;
    }
    function isInsalledFFVLC() {
        var numPlugins = navigator.plugins.length;
        for (i = 0; i < numPlugins; i++) {
            plugin = navigator.plugins[i];
            if (plugin.name.indexOf("VideoLAN") > -1 || plugin.name.indexOf("VLC") > -1) {
                return true;
            }
        }
        return false;
    }
    checkBrowser();

    function play(mrl) {
        var vlc = document.getElementById("vlc");
        vlc.playlist.clear();
        //将地址添加到播放列表
        var options = new Array(":newwork-caching=100");
        var id = vlc.playlist.add(mrl, "MNVideo", options);
        vlc.playlist.playItem(id);
        //vlc.playlist.add(mrl);
        //播放
        //vlc.playlist.play();
        _vlc = vlc;
    }

    var _url = 'http://110.10.142.121/test.mp4'; // screen:// rtsp://172.30.0.10:555/2 elem.href rtsp://172.16.15.186:554/12345.sdp
    $(function () {
        showPlayer();
        $(window).resize(function () { showPlayer(); });
    })

    /*针对有的弹出框中关闭界面（隐藏）资源未释放问题需要做调整*/
    setInterval(function () {
        if ($("#div_VLC").is(":hidden")) {
            playListClear();
        }
    }, 2000);

    var _vlc;
    function playListClear() {
        _vlc.playlist.stop();
        _vlc.playlist.clear();

    }
    //window.onbeforeunload = function (event) { playListClear(); delete _vlcs; return confirm("确定离开此页面吗？"); }
    //window.onunload = function () { playListClear() }
    export default{
        data(){
            return{
                filters:{},
                data:{},
                changeRed:0,
                spdz:'',
                VlcUrl:'',
                hpzlList:{},
            }
        },
        methods:{
            changeImg:function(index){
                this.changeRed = index;
                console.log(this.data[index].spdz,'132')
                this.spdz = this.data[index].spdz;
                // if(this.data[index].spdz != "" && this.data[index].jczmc != "") {
                //     this.clickSp(this.data[index].spdz,this.data[index].jczmc);
                // }
                if (this.spdz != '') {
                    play(this.spdz);
                }

            },

            // 视频
            // clickSp(splj,spName) {
            // videojs("vlcplayer",{}).ready(function(){
            // 	var myPlayer = this;
            // 	myPlayer.src(splj);
            // });
            // // $("#testName").text(spName);
            // },
            play(mrl) {
                var vlc = document.getElementById("vlcplayer");
                vlc.playlist.clear();
                //将地址添加到播放列表
                var options = new Array(":newwork-caching=100");
                var id = vlc.playlist.add(mrl, "MNVideo", options);
                vlc.playlist.playItem(id);
                //vlc.playlist.add(mrl);
                //播放
                //vlc.playlist.play();
                _vlc = vlc;
            },
            // doPlayFaster(){
            //     //playjs()
            //     console.log('3')
            // },
            // doPlayOrPause(){
            //     //playjs()
            //     console.log('2')
            // },
            // doPlaySlower(){
            //     //playjs()
            //     console.log('1')
            // },
            //获取部门代号列表
            searchReport() {
                let para = {
                    jylsh: this.filters.jylsh,
                    jyjgbh: this.filters.jyjgbh,
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/ajlw/sp/getJcsp', qs.stringify(para) ,{
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
                    this.data.spdz = "rtsp:" +this.data.spdz
                    console.log(this.data)

                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            // 获取号牌种类下拉框
            gethpzlUpdata() {
                let para = {
                    sjlx:"hpzl",
                };
                var qs = require('querystring')
                axios.post('api/sys/ggcl/queryCsxxInfo', qs.stringify(para) ,{
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
                    console.log(response.data.data,11222);
                    this.hpzlList = response.data.data.info;
                }).catch((response) =>{
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            // 检测业务信息视频异常功能
            insertSpyj() {
                let para = Object.assign({}, this.filters);

                var qs = require('querystring')
                axios.post('api/ajlw/spyj/insertSpyj', qs.stringify(para) ,{
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
                    this.$message({
                        message: '上传成功',
                        type: 'success'
                    });
                }).catch((response) =>{
                    this.$message({
                        message: '上传失败',
                        type: 'error'
                    });
                });
            },
			// 获取下载路径
            xzaddress(){
                var hostport=document.location.host;
                this.VlcUrl = hostport + 'static/vlc_2.2.4.0.exe';
            }

        },
        mounted(){
            var rowdate = sessionStorage.getItem('rowdate');
            if (rowdate) {
                rowdate = JSON.parse(rowdate);
                this.filters = rowdate || '';
            };
            this.searchReport();
            this.gethpzlUpdata();
            this.xzaddress();
            showPlayer();
            $(window).resize(function () { showPlayer(); });
            // init();
            // setTimeout("this.reloadThis()",3000)
            // var vlc = document.getElementById("vlcplayer");
            // vlc.audio.toggleMute();
            // var vlc=document.getElementById("vlc");
            // var pid= vlc.playlist.add('rtsp://:8554/192.168.0.6');
            // vlc.playlist.play();
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
		/*margin:15px 5px;*/
		/*border:1px solid #e0e0e0;*/
	}
	.title{
		text-align: center;
	}
	.vid-lt{
		position: relative;
		height: 700px;
	}

	.vid-tit{
		display: block;
		width: 260px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border: 1px solid #506ea5!important;
		border-radius: 3px;
		background: -webkit-linear-gradient(#edf3ff, #b7c8ee);
		background: -o-linear-gradient(#edf3ff, #b7c8ee);
		background: -moz-linear-gradient(#edf3ff, #b7c8ee);
		background: linear-gradient(#edf3ff, #b7c8ee);
	}
	.vid-ul{
		float: left;
		list-style: none;
		display: block;
		border:1px solid #e0e0e0;
		border-top: none;
		margin: 0;
		padding: 0 0 20px;
		width: 258px;
	}
	.cont{
		float: left;
		width: 800px;
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