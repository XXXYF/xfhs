<template>
    <section class="sec-box">
        <!--筛选工具条-->
        <el-col :span="24" class="toolbar fil-tool" style="padding-bottom: 0px;">
            <div class="topTitle">接口管理时间段设置</div>
            <el-form  :model="filters" ref="filters" id="filterss" class="filters timefilter" label-width="160px">

                <el-col :span="10" class="colborder" style="border-left: 1px solid #cfcece">
                    <el-form-item label="部门名称:">
                        <el-input v-model="filters.bmbhName" v-clickoutside="handleClose" :readonly="true" @click.native="treeBoxshow" ></el-input>
                        <el-tree
                                :data="data2"
                                show-checkbox
                                node-key="id"
                                :default-checked-keys="bmbhdata"
                                :props="defaultProps"
                                check-strictly
                                v-show="treeBoxVisible"
                                @check-change="handleClick"
                                @node-click="nodeClick"
                                ref="roletree">
                        </el-tree>
                    </el-form-item>
                </el-col>
                <el-col :span="14" class="colborder" style="border-right: 1px solid #cfcece">

                </el-col>
            </el-form>

            <el-form  :model="timefilters" ref="timefilters"  class="filters timefilter" label-width="160px">

                <el-col :span="24" class="selectBtnbox" style="text-align: center;border: 1px solid #cfcece; border-top: none">
                    <el-form-item label="开始日期:" class="centerBox" >
                        <el-date-picker
                                v-model="timefilters.kssj"
                                type="date"  :editable="false"
                                :picker-options="pickerOptions0">
                        </el-date-picker>
                        <!--<el-date-picker-->
                                <!--v-model="timefilters.kssj"-->
                                <!--type="date"  :editable="false"-->
                                <!--format="yyyy 年 MM 月 dd 日"-->
                                <!--value-format="yyyy-MM-dd"-->
                                <!--:picker-options="pickerOptions0">-->
                        <!--</el-date-picker>-->
                    </el-form-item>
                    <el-form-item label="结束日期:" class="centerBox" >
                        <el-date-picker
                                v-model="timefilters.jssj"
                                type="date"  :editable="false"
                                :picker-options="pickerOptions1">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="24" >
                    <div style="height: 20px;background: #ffffff"></div>
                    <div class="timeTitle">接口管理时间段设置</div>
                </el-col>
                <el-col :span="24" >
                    <el-col  class="timepickBox">
                        <el-col :span="2" >
                            <div class="timefont">选择</div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="timefont">星期</div>
                        </el-col>
                        <el-col :span="19" >
                            <div class="timefont">时间</div>
                        </el-col>
                    </el-col>
                    <el-col  class="timepickBox">
                        <el-col :span="2" >
                            <div class="timefont" >
                                <el-radio-group v-model="timefilters.monflg">
                                    <el-radio @click.native.prevent="clickitem(1)"  :label=1>&nbsp;</el-radio>
                                </el-radio-group>
                            </div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="timefont">星期一</div>
                        </el-col>
                        <el-col :span="19" >
                            <div class="timefont">
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                            <el-time-picker
                                                    v-model="timefilters.monstart"
                                                    type="date"  :editable="false"
                                                    value-format="HH:mm:ss" format="HH:mm:ss"
                                                    >
                                            </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                            <el-time-picker
                                                    v-model="timefilters.monend"
                                                    type="date"  :editable="false"
                                                    value-format="HH:mm:ss" format="HH:mm:ss"
                                                    >
                                            </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.monstart2"
                                                type="date"  :editable="false"
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.monend2"
                                                type="date"  :editable="false"
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.monstart1"
                                                type="date"  :editable="false"
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.monend1"
                                                type="date"  :editable="false"
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>

                            </div>
                        </el-col>
                    </el-col>
                    <el-col  class="timepickBox">
                        <el-col :span="2" >
                            <div class="timefont">
                                <el-radio-group v-model="timefilters.tueflg">
                                    <el-radio @click.native.prevent="clickitem2(1)"  :label=1>&nbsp;</el-radio>
                                </el-radio-group>
                            </div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="timefont">星期二</div>
                        </el-col>
                        <el-col :span="19" >
                            <div class="timefont">
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.tuestart"
                                                type="date"  :editable="false"
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.tueend"
                                                type="date"  :editable="false"
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.tuestart1"
                                                type="date"  :editable="false"
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.tueend1"
                                                type="date"  :editable="false"
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.tuestart2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.tueend2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>

                            </div>
                        </el-col>
                    </el-col>
                    <el-col  class="timepickBox">
                        <el-col :span="2" >
                            <div class="timefont">
                                <el-radio-group v-model="timefilters.wedflg">
                                    <el-radio @click.native.prevent="clickitem3(1)"  :label=1>&nbsp;</el-radio>
                                </el-radio-group>
                            </div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="timefont">星期三</div>
                        </el-col>
                        <el-col :span="19" >
                            <div class="timefont">
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.wedstart"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.wedend"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.wedstart1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.wedend1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.wedstart2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.wedend2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>

                            </div>
                        </el-col>
                    </el-col>
                    <el-col  class="timepickBox">
                        <el-col :span="2" >
                            <div class="timefont">
                                <el-radio-group v-model="timefilters.thuflg">
                                    <el-radio @click.native.prevent="clickitem4(1)"  :label=1>&nbsp;</el-radio>
                                </el-radio-group>
                            </div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="timefont">星期四</div>
                        </el-col>
                        <el-col :span="19" >
                            <div class="timefont">
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.thustart"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.thuend"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.thustart1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.thuend1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.thustart2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.thuend2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>

                            </div>
                        </el-col>
                    </el-col>
                    <el-col  class="timepickBox">
                        <el-col :span="2" >
                            <div class="timefont">
                                <el-radio-group v-model="timefilters.friflg">
                                    <el-radio @click.native.prevent="clickitem5(1)"  :label=1>&nbsp;</el-radio>
                                </el-radio-group>
                            </div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="timefont">星期五</div>
                        </el-col>
                        <el-col :span="19" >
                            <div class="timefont">
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.fristart"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.friend"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.fristart1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.friend1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.fristart2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.friend2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>

                            </div>
                        </el-col>
                    </el-col>
                    <el-col  class="timepickBox">
                        <el-col :span="2" >
                            <div class="timefont">
                                <el-radio-group v-model="timefilters.satflg">
                                    <el-radio @click.native.prevent="clickitem6(1)"  :label=1>&nbsp;</el-radio>
                                </el-radio-group>
                            </div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="timefont">星期六</div>
                        </el-col>
                        <el-col :span="19" >
                            <div class="timefont">
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.satstart"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.satend"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.satstart1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.satend1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.satstart2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.satend2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>

                            </div>
                        </el-col>
                    </el-col>
                    <el-col  class="timepickBox">
                        <el-col :span="2" >
                            <div class="timefont">
                                <el-radio-group v-model="timefilters.sunflg">
                                    <el-radio @click.native.prevent="clickitem7(1)"  :label=1>&nbsp;</el-radio>
                                </el-radio-group>
                            </div>
                        </el-col>
                        <el-col :span="3" >
                            <div class="timefont">星期日</div>
                        </el-col>
                        <el-col :span="19" >
                            <div class="timefont">
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.sunstart"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.sunend"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.sunstart1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.sunend1"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>
                                <el-col :span="8" >
                                    <el-col :span="10" :offset="1">
                                        <el-time-picker
                                                v-model="timefilters.sunstart2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                                    <el-col :span="10">
                                        <el-time-picker
                                                v-model="timefilters.sunend2"
                                                type="date"  :editable="false"
                                                
                                                value-format="HH:mm:ss" format="HH:mm:ss"
                                                >
                                        </el-time-picker>
                                    </el-col>
                                </el-col>

                            </div>
                        </el-col>
                    </el-col>
                </el-col>
                <el-col :span="24" class="selectBtnbox" style="text-align: center;background: #e3e5e6;padding:20px;">
                    <el-button  class="dialog-button search-button"  @click.native.prevent="changetime">确定</el-button>
                    <!--<el-button class="dialog-button reset-button" @click.native="gettimedate">取消</el-button>-->
                </el-col>



            </el-form>
        </el-col>


        <!--列表-->
        <div class="list-box">

        </div>



    </section>
</template>

<script>
    import util from '../../common/js/util'
    import { getUserListPage, removeUser,addRole,editRole} from '../../api/api';
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'


    //点击其他地方隐藏树形框
    const clickoutside = {
        // 初始化指令
        bind(el, binding, vnode) {
            function documentHandler(e) {
                // 这里判断点击的元素是否是本身，是本身，则返回
                if (el.contains(e.target)) {
                    return false;
                }
                // 判断指令中是否绑定了函数
                if (binding.expression) {
                    // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
                    binding.value(e);
                }
            }
            // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
            el.__vueClickOutside__ = documentHandler;
            document.addEventListener('click', documentHandler);
        },
        update() {},
        unbind(el, binding) {
            // 解除事件监听
            document.removeEventListener('click', el.__vueClickOutside__);
            delete el.__vueClickOutside__;
        },
    };
    export default {
        data() {

            return {
                pickerOptions0: {
                    disabledDate: (time) => {

                        if (this.timefilters.jssj != "") {
                            return  time.getTime() > this.timefilters.jssj;
                        } else {
                            // return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.timefilters.kssj ;
                    }
                },
                filters: {
                    // jsid: '',
                    bmbh: '',
                },
                timefilters: {
                    bmbh:'',
                    kssj: '',
                    jssj: '',
                    monflg: 0,
                    monstart: '',
                    monend: '',
                    monstart2: '',
                    monend2: '',
                    monstart1: '',
                    monend1: '',
                    tueflg: 0,
                    tuestart: '',
                    tueend: '',
                    tuestart1: '',
                    tueend1: '',
                    tuestart2: '',
                    tueend2: '',
                    wedflg: 0,
                    wedstart: '',
                    wedend: '',
                    wedstart1: '',
                    wedend1: '',
                    wedstart2: '',
                    wedend2: '',
                    thuflg: 0,
                    thustart: '',
                    thuend: '',
                    thustart1: '',
                    thuend1: '',
                    thustart2: '',
                    thuend2: '',
                    friflg: 0,
                    fristart: '',
                    friend: '',
                    fristart1: '',
                    friend1: '',
                    fristart2: '',
                    friend2: '',
                    satflg: 0,
                    satstart: '',
                    satend: '',
                    satstart1: '',
                    satend1: '',
                    satstart2: '',
                    satend2: '',
                    sunflg: 0,
                    sunstart: '',
                    sunend: '',
                    sunstart1: '',
                    sunend1: '',
                    sunstart2: '',
                    sunend2: '',
                },
                users: [],
                bmbhList: [],
                total: 0,
                currentPage: 1,
                listLoading: false,
                sels: [],//列表选中列
                bmbhdata: [],//列表选中列
                treeBoxVisible:false,
                data2: [],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },

            };
        },
        //点击其他隐藏树形
        directives: {clickoutside},
        methods: {
            //用户角色显示转换
            cdztRole :function(row, column) {
                return row.cdzt == 1 ? '安检' :row.cdzt == 2 ? '综检':'环检'
            },


            handleCurrentChange(val) {
                this.filters.pageNum = val;
                this.getpower();
            },
            //每页显示多少条数据
            handleSizeChange(size){
                this.filters.pageNum = val;
                this.getpower();
                this.filters.pageSize = size;

                console.log(`每页 ${size} 条`);
            },
            //获取部门信息列表
            gettimedate() {
                let para = Object.assign({}, this.filters);
                this.listLoading = true;
                var qs = require('querystring')
                axios.post('api/sys/jkdysjd/queryTjkdysjdByBmbh', qs.stringify(para) ,{
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
                    console.log(response.data.data);
                    if(response.data.data != ''){
                        this.timefilters = response.data.data;
                        this.timefilters.monflg = parseInt(this.timefilters.monflg);
                        this.timefilters.tueflg = parseInt(this.timefilters.tueflg);
                        this.timefilters.wedflg = parseInt(this.timefilters.wedflg);
                        this.timefilters.thuflg = parseInt(this.timefilters.thuflg);
                        this.timefilters.friflg = parseInt(this.timefilters.friflg);
                        this.timefilters.satflg = parseInt(this.timefilters.satflg);
                        this.timefilters.sunflg = parseInt(this.timefilters.sunflg);
                    }else {
                        this.$message({
                            message: '还没有设置当前部门的时间段',
                            type: 'error'
                        });
                        // this.timefilters = this.timefilters
                    }


                    console.log(this.timefilters);

                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            //修改时间段设置列表
            changetime() {
                if(this.timefilters.kssj !== ""){
                    this.timefilters.kssj = moment(this.timefilters.kssj).format('YYYY-MM-DD')
                }
                if(this.timefilters.jssj !== ""){
                    this.timefilters.jssj = moment(this.timefilters.jssj).format('YYYY-MM-DD')
                }
                let para = Object.assign({}, this.timefilters);
                this.listLoading = true;
                var qs = require('querystring')
                axios.post('api/sys/jkdysjd/insertOrUpdate', qs.stringify(para) ,{
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
                    this.$message({
                        message: '修改成功',
                        type: 'success'
                    });
                    // this.gettimedate();
                    this.inputDisable = true;
                }).catch((response) =>{
                    this.listLoading = false;
                    this.$message({
                        message: '修改失败',
                        type: 'error'
                    });
                });
            },

            //显示新增界面
            handleAdd:function(index,row){
                this.$router.push('/addinterface')

            },
            //显示编辑界面
            handleEdit: function (index, row) {
                sessionStorage.setItem('interfacedata',JSON.stringify(row))
                this.$router.push('/editinterface')
            },
            //重置
            resetForm(formName) {
                this.filters = Object.assign({});
            },

            selsChange: function (sels) {
                this.sels = sels;
            },

            //获取部门代号列表
            getTree() {
                let para = {
                    bmlx:1,
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/sys/bmgl/tree', qs.stringify(para) ,{
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
                    this.data2 = response.data.data;
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
            //node-click节点被点击时的回调，check-change节点选中状态发生变化时的回调.
            handleClick(item,node,self) {
                if(node==true){ //点击未选中复选框
                    console.log(item.label)
                    this.filters.bmbh=item.id
                    this.timefilters.bmbh=item.id
                    this.filters.bmbhName=item.label
                    this.$refs.roletree.setCheckedNodes([item]);
                }else {
                    if (this.filters.glbmbh == item.id){ //点击已选中复选框。保证至少有一个选中
                        console.log(item.label)
                        this.filters.bmbh=item.id
                        this.timefilters.bmbh=item.id
                        this.filters.bmbhName=item.label
                        this.$refs.roletree.setCheckedNodes([item]);

                    }
                }
                this.treeBoxVisible = false;
                this.gettimedate();

            },
            nodeClick(item,node,self){
                console.log(item.label)
                this.filters.bmbh=item.id
                this.timefilters.bmbh=item.id
                this.filters.bmbhName=item.label
                this.$refs.roletree.setCheckedNodes([item]);
            },
            handleClose:function (e) {
                this.treeBoxVisible = false;

            },
            treeBoxshow:function () {
                this.treeBoxVisible = !this.treeBoxVisible;
            },
            clickitem (e) {
                e === this.timefilters.monflg ? this.timefilters.monflg = 0 : this.timefilters.monflg = e
            },
            clickitem2 (e) {
                e === this.timefilters.tueflg ? this.timefilters.tueflg = 0 : this.timefilters.tueflg = e
            },
            clickitem3 (e) {
                e === this.timefilters.wedflg ? this.timefilters.wedflg = 0 : this.timefilters.wedflg = e
            },
            clickitem4 (e) {
                e === this.timefilters.thuflg ? this.timefilters.thuflg = 0 : this.timefilters.thuflg = e
            },
            clickitem5 (e) {
                e === this.timefilters.friflg ? this.timefilters.friflg = 0 : this.timefilters.friflg = e
            },
            clickitem6 (e) {
                e === this.timefilters.satflg ? this.timefilters.satflg = 0 : this.timefilters.satflg = e
            },
            clickitem7 (e) {
                e === this.timefilters.sunflg ? this.timefilters.sunflg = 0 : this.timefilters.sunflg = e
            },





        },
        computed:{

        },
        mounted() {
            // this.gettimedate();
            this.getTree();
        },
        filters:{
            formDate:function (dysj) {
                //return monent(dysj)
                return moment(dysj).format('YYYY-MM-DD HH:mm:ss')

            }
        }
    }

</script>

<style scoped>
    .count{
        background-color: #fff;
    }
    .count-num{
        line-height: 32px;
    }
    .el-table .cell{
        text-align: center;
    }
</style>