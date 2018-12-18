<template>


    <div class="main">
        <div class="global-width">
            <div class="action">
                <div class="t">开始预览</div>
                <div class="pages">
                    <div>
                        <object classid="clsid:090457CB-DF21-41EB-84BB-39AAFC9E271A"
                                id="ScanCtrl" codebase="*.cab#version=1,0,0,1" width="660"
                                height="400"></object>
                    </div>

                    <form>
                        <table width="90%" border="0" cellspacing="0" cellpadding="0"
                               class="addform-item">
                            <tbody>
                            <tr>
                                <td>
                                    <input class="submit_01" type="button" value="开始预览" @click="start_preview" />
                                    <input class="submit_01" type="button" value="停止预览" onclick="stop_preview()" />
                                    <input class="submit_01" type="button" value="拍照" @click="TakePic()" />
                                    <input class="submit_01" type="button" value="属性" onclick="Property()" />

                                </td>
                            </tr>

                            </tbody>
                        </table>
                    </form>

                    <div>
                        <OBJECT ID="EThumbnails"  CLASSID="CLSID:E8B3DD46-A440-4C3C-AB0A-DC689EEBDA84" width="660" height="150"></OBJECT>
                    </div>
                </div>
            </div>
        </div>
    </div>




</template>
<!--<script language=JavaScript>-->

    <!--function deloptionRes()-->
    <!--{-->
        <!--var obj=document.getElementById("selRes").options;-->
        <!--while (obj.length > 0)-->
        <!--{-->
            <!--obj.options.remove(obj.length - 1);-->
        <!--}-->
    <!--}-->
    <!--function addoptionRes(s)-->
    <!--{-->
        <!--var obj=document.getElementById("selRes").options;-->
        <!--var opt = new Option(s, obj.length );-->
        <!--obj.options.add(opt);-->
    <!--}-->
    <!--function deloptionScanSize()-->
    <!--{-->
        <!--var obj=document.getElementById("selScanSize").options;-->
        <!--while (obj.length > 0)-->
        <!--{-->
            <!--obj.options.remove(obj.length - 1);-->
        <!--}-->
    <!--}-->
    <!--function addoptionScanSize(s)-->
    <!--{-->
        <!--var obj=document.getElementById("selScanSize").options;-->
        <!--var opt = new Option(s, obj.length );-->
        <!--obj.options.add(opt);-->
    <!--}-->
    <!--function deloptionColor()-->
    <!--{-->
        <!--var obj=document.getElementById("selColor").options;-->
        <!--while (obj.length > 0)-->
        <!--{-->
            <!--obj.options.remove(obj.length - 1);-->
        <!--}-->
    <!--}-->
    <!--function addoptionColor(s)-->
    <!--{-->
        <!--var obj=document.getElementById("selColor").options;-->
        <!--var opt = new Option(s, obj.length );-->
        <!--obj.options.add(opt);-->
    <!--}-->
    <!--function deloptionDev()-->
    <!--{-->
        <!--var obj=document.getElementById("selDev").options;-->
        <!--while (obj.length > 0)-->
        <!--{-->
            <!--obj.options.remove(obj.length - 1);-->
        <!--}-->
    <!--}-->
    <!--function addoptionDev(s)-->
    <!--{-->
        <!--var obj=document.getElementById("selDev").options;-->
        <!--var opt = new Option(s, obj.length );-->
        <!--obj.options.add(opt);-->
    <!--}-->
    <!--function deloptionRotate()-->
    <!--{-->
        <!--var obj=document.getElementById("selRotate").options;-->
        <!--while (obj.length > 0)-->
        <!--{-->
            <!--obj.options.remove(obj.length - 1);-->
        <!--}-->
    <!--}-->
    <!--function addoptionRotate(s)-->
    <!--{-->
        <!--var obj=document.getElementById("selRotate").options;-->
        <!--var opt = new Option(s, obj.length );-->
        <!--obj.options.add(opt);-->
    <!--}-->
    <!--function contentLoad()-->
    <!--{-->
        <!--//ScanCtrl.EnableDateRecord(true);-->
        <!--stop_preview();-->
        <!--fun();-->
        <!--ScanCtrl.SlectDevice(0);-->
    <!--}-->
    <!--function fun()-->
    <!--{-->
        <!--deloptionDev();-->
        <!--var iDevIndex = ScanCtrl.GetCurDevIndex();-->
        <!--if(iDevIndex != -1)-->
        <!--{-->
            <!--var count = ScanCtrl.GetDeviceCount();-->
            <!--for(i = 0; i < count; i++)-->
            <!--{-->
                <!--var s = ScanCtrl.GetDevName(i);-->
                <!--addoptionDev(s);-->
            <!--}-->
            <!--document.getElementById("selDev").value=iDevIndex;-->
        <!--}-->

        <!--deloptionRes();-->
        <!--var iResIndex = ScanCtrl.GetCurResolutionIndex();-->
        <!--if(iResIndex != -1)-->
        <!--{-->
            <!--var count = ScanCtrl.GetResolutionCount();-->
            <!--for(i = 0;i < count; i++)-->
            <!--{-->
                <!--var w=ScanCtrl.GetResolutionWidth(i);-->
                <!--var h=ScanCtrl.GetResolutionHeight(i);-->
                <!--var str=w.toString()+"x"+h.toString();-->
                <!--addoptionRes(str);-->
            <!--}-->
            <!--document.getElementById("selRes").value=iResIndex;-->
        <!--}-->

        <!--deloptionScanSize();-->
        <!--var iScanSizeIndex = ScanCtrl.GetCurScanSizeIndex();-->
        <!--if(iScanSizeIndex != -1)-->
        <!--{-->
            <!--var count = ScanCtrl.GetScanSizeCount();-->
            <!--for(i = 0; i < count; i++)-->
            <!--{-->
                <!--var str = ScanCtrl.GetScanSizeName(i);-->
                <!--addoptionScanSize(str);-->
            <!--}-->
            <!--addoptionScanSize("自定义");-->

            <!--var bCustom = ScanCtrl.IsCustom();-->
            <!--if(bCustom)-->
            <!--{-->
                <!--document.getElementById("selScanSize").value=count;-->
            <!--}-->
            <!--else-->
            <!--{-->
                <!--document.getElementById("selScanSize").value=iScanSizeIndex;-->
            <!--}-->

        <!--}-->

        <!--deloptionRotate();-->
        <!--var iRotateIndex = ScanCtrl.GetCurRotateAngle();-->
        <!--if(iRotateIndex != -1)-->
        <!--{-->
            <!--addoptionRotate("0");-->
            <!--addoptionRotate("90");-->
            <!--addoptionRotate("180");-->
            <!--addoptionRotate("270");-->
            <!--document.getElementById("selRotate").value=iRotateIndex;-->
        <!--}-->

        <!--deloptionColor();-->
        <!--var iColorIndex = ScanCtrl.GetCurColor();-->
        <!--if(iColorIndex != -1)-->
        <!--{-->
            <!--addoptionColor("彩色");-->
            <!--addoptionColor("灰度");-->
            <!--addoptionColor("黑白");-->
            <!--document.getElementById("selColor").value=iColorIndex;-->
        <!--}-->

        <!--var bRotateCrop = ScanCtrl.IsRotateCrop();-->
        <!--document.getElementById("rotatecrop").checked=bRotateCrop;-->
        <!--var bDelBkColor = ScanCtrl.IsDelBackColor();-->
        <!--document.getElementById("delbkcolor").checked=bDelBkColor;-->
    <!--}-->
    <!--function start_preview(url)-->
    <!--{-->

        <!--//ScanCtrl.SetCurDev(0);-->
        <!--//ScanCtrl.StartPreviewEx();-->
        <!--ScanCtrl.StartPreview();-->
        <!--fun();-->
    <!--}-->

    <!--function stop_preview(url)-->
    <!--{-->
        <!--ScanCtrl.StopPreview();-->
        <!--fun();-->
    <!--}-->
    <!--function get_name()-->
    <!--{-->
        <!--var date=new Date();-->
        <!--var yy=date.getFullYear().toString();-->
        <!--var mm=(date.getMonth()+1).toString();-->
        <!--var dd=date.getDate().toString();-->
        <!--var hh=date.getHours().toString();-->
        <!--var nn=date.getMinutes().toString();-->
        <!--var ss=date.getSeconds().toString();-->
        <!--var mi=date.getMilliseconds().toString();-->
        <!--var picName=yy+mm+dd+hh+nn+ss+mi;-->
        <!--return picName;-->
    <!--}-->
    <!--function TakePic(url)-->
    <!--{-->
        <!--var path="D:\\"+get_name()+".jpg";-->
        <!--//ScanCtrl.EnableDateRecord(1);-->
        <!--var flag=ScanCtrl.Scan(path);-->
        <!--if(flag)-->
        <!--{-->
            <!--EThumbnails.AddToDisplay(path);-->
        <!--}-->
    <!--}-->
    <!--function Property(url)-->
    <!--{-->
        <!--ScanCtrl.Property();-->
    <!--}-->

    <!--$(function () {-->
        <!--// contentLoad();-->
        <!--// start_preview();-->
        <!--// $(window).resize(function () { contentLoad(); });-->
    <!--})-->



<!--</script>-->

<script>
    import util from '../../common/js/util'
    //import { getUserListPage, removeUser,addUser,editUser} from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
    //打开高拍仪


    export default {

        data(){
            return {}
        },
        methods:{
            start_preview(url)
            {
                ScanCtrl.StartPreview();
                fun();
            },
            TakePic(url){
                var path="D:\\"+this.get_name()+".jpg";
                //ScanCtrl.EnableDateRecord(1);
                var flag=ScanCtrl.Scan(path);
                if(flag)
                {
                    EThumbnails.AddToDisplay(path);
                }
            },
            get_name()
            {
                var date=new Date();
                var yy=date.getFullYear().toString();
                var mm=(date.getMonth()+1).toString();
                var dd=date.getDate().toString();
                var hh=date.getHours().toString();
                var nn=date.getMinutes().toString();
                var ss=date.getSeconds().toString();
                var mi=date.getMilliseconds().toString();
                var picName=yy+mm+dd+hh+nn+ss+mi;
                return picName;
            }
        },
        mounted() {
            // stop_preview();
            // fun();
            // ScanCtrl.StartPreview();
            // fun();
        },

    }
</script>

<style >
    /*#filterss .el-select>.el-input{*/
        /*width: 150px;*/
    /*}*/
    .title{
        font-size: 20px;
    }
    .colborder .el-col-6 ,.colborder .el-col-12{
    	border-right: 1px solid #cfcece;
   		border-bottom: 1px solid #cfcece;
    }
    .time-box .el-col-12{
    	border-bottom: none!important;
    	border-right:none!important;
    }
    .time-box .el-col-12 .el-form-item__content{
    	border-left: none;
    }
</style>