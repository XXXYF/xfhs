<template>
	<div class="car-box">
        <div class="cont">
    		<h1车辆检测统计</h1>
    		<el-form :inline="true" :model="filters" ref="filters" id="filters">
                <el-form-item label="检测类型:">
                    <el-select v-model="filters.status" placeholder="全部">
                        <el-option label="预约中" value="1"></el-option>
                        <el-option label="预约成功" value="2"></el-option>
                        <el-option label="取消预约" value="3"></el-option>
                        <el-option label="检测完成" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="检测时间:">
                    <el-col :span="11">
                        <el-form-item prop="startTime">
                            <el-date-picker
                                    v-model="filters.startTime"
                                    type="date"
                                    placeholder="开始日期"
                                    :picker-options="pickerOptions0">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2"  style="text-align: center">-</el-col>
                    <el-col :span="11">
                        <el-form-item prop="endTime">
                            <el-date-picker
                                    v-model="filters.endTime"
                                    type="date"
                                    placeholder="结束日期"
                                    :picker-options="pickerOptions1">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="预约检测类别:">
                    <el-select v-model="filters.bookingType" placeholder="全部">
                        <el-option label="预约中" value="1"></el-option>
                        <el-option label="预约成功" value="2"></el-option>
                        <el-option label="取消预约" value="3"></el-option>
                        <el-option label="检测完成" value="4"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item style="float:right;">
                    <el-button type="warning" @click="resetForm('filters')"><i class="fa fa-undo"></i>&nbsp;重置</el-button>
                </el-form-item>
                <el-form-item style="float:right;">
                    <el-button type="primary"  v-on:click="getUsers"><i class="fa fa-search"></i>&nbsp;查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <i class="f-hr20"></i>
        <div class="cont1">
            <section class="chart-container">
                <span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;车辆检测量统计图</span>
                <el-row>
                    <el-col :span="24">
                        <div id="chartColumn" style="width:100%; height:400px;"></div>
                    </el-col>
                </el-row>
            </section>

            
        </div>


	</div>
</template>

<script>
    import util from '../../common/js/util'
    import { getUserListPage} from '../../api/api';

    import echarts from 'echarts'
    import axios from 'axios';
    import qs from 'qs';
    export default {
        data() {
            return {
                pickerOptions0: {
                    disabledDate: (time) => {
                        if (this.filters.endTime != "") {
                            return time.getTime() > Date.now() || time.getTime() > this.filters.endTime;
                        } else {
                            return time.getTime() > Date.now();
                        }

                    }
                },
                pickerOptions1: {
                    disabledDate: (time) => {
                        return time.getTime() < this.filters.startTime || time.getTime() > Date.now();
                    }
                },
                filters:{
                    status:'', //订单号
                    startTime:'', //预约时间
                    endTime:'', //预约时间
                    bookingType:'', //手机号
                },
                chartColumn: null,
                value1:'',
                value2:'',
                users:[],
                page:1,
                total: 0,
                tableConfig:[
                    {id:110,label:'时间',prop:'birth',width:''},
                    {id:310,label:'机动车检验量数',prop:'',width:'',children:[
                        {id:311,label:'总计',prop:'allyj',width:''},
                        {id:312,label:'注册登记检验',prop:'age',width:''},
                        {id:313,label:'在用车检验',prop:'allyj',width:''},
                        {id:314,label:'临时检验',prop:'type',width:''},
                        {id:315,label:'特殊检验',prop:'type',width:''},
                        ],
                    },
                ],
            }
        },

        methods: {
            drawColumnChart() {
                this.chartColumn = echarts.init(document.getElementById('chartColumn'));
                this.chartColumn.setOption({
                    title: { 
                    //text: 'Column Chart' 
                    },
                    tooltip: {},
                    legend: {
                        data: ['注册登记检验', '在用车检测','临时检测','特殊检测']
                    },
                    toolbox: {
                    　　show : true,
                    // 　　feature : {
                    //         dataZoom : {show: true},
                    // 　　　　dataView : {show: true, readOnly: false},
                    // 　　    magicType : {show: true, type: ['line', 'bar']},
                            
                    // 　　}
                    },
                    xAxis: {
                        data: ["2018/6/21", "2018/6/22", "2018/6/23", "2018/6/24", "2018/6/25", "2018/6/26",'2018/6/27']
                    },
                    yAxis: {
                    type :'value',
                    name: '次数/日',
                  },
                    series: [{
                        name: '注册登记检验',
                        type: 'line',
                        data: [1, 2, 3, 4, 5, 6,7]
                    },{
                        name: '在用车检测',
                        type: 'line',
                        data: [2, 4, 6, 8, 10, 12]
                    },{
                        name: '临时检测',
                        type: 'line',
                        data: [3, 4, 2, 1, 6, 3,5]
                    },{
                        name: '特殊检测',
                        type: 'line',
                        data: [2, 4, 2, 4, 2, 7,4]
                    }
                    ]
                });
            },
            
            drawCharts() {
                this.drawColumnChart()
            },
            //重置
            resetForm(formName) {
                var form =document.getElementById("filters")
                form.reset()
            },
            //获取用户列表
            getUsers() {
                if(this.filters.startTime !== ""){
                    this.filters.startTime = moment(this.filters.startTime).format('YYYY-MM-DD hh:mm:ss')
                }
                if(this.filters.endTime !== ""){
                    this.filters.endTime = moment(this.filters.endTime).format('YYYY-MM-DD hh:mm:ss')
                }
                let mn = {
                    "id": this.filters.id,
                    "startTime": this.filters.startTime,
                    "endTime": this.filters.endTime,
                    "phone": this.filters.phone,
                    "pageRequest":{"currentPage":this.page,"pageSize":this.pagesize}
                    // "startTime":"2018-09-01 12:26:15", "endTime":"2018-09-02 14:26:15", "status":"1","bookingType":"1", "companyId":"1","pageRequest":{"currentPage":"1","pageSize":"1"}
                }
                // let mn = {"id":"1","companyId":"1","pageRequest":{"currentPage":"1","pageSize":"1"}}
                var json =JSON.stringify(mn);
                let para = {
                    apiId: "adminOrderselect",
                    jsonData:json
                };
                this.listLoading = true;

                axios.post('api/bookingManger/commonAccess', qs.stringify(para),{
                    headers: {
                        "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
                        // "Content-Type":"application/json; charset=UTF-8",
                    },
                    withCredentials:true,
                }).then((response) =>{
                    console.log(response)
                    this.listLoading = false;
                    this.users = response.data.data.listData;
                    // this.users.startTime = moment(response.data.data.listData.startTime).format('YYYY-MM-DD  hh:mm:ss');
                    // this.users.endTime = moment(response.data.data.listData.endTime).format('YYYY-MM-DD  hh:mm:ss');
                    this.total = response.data.data.totalElements;
                }).catch((response) =>{
                    this.listLoading = false;


                });
            },

            tableSpanMethod(){
                // console.log('1111')
            },

            //分页点击
            handleCurrentChange(val) {
                this.page = val;
                this.getUsers();
            },
            //每页显示多少条数据
            handleSizeChange(size){
                //this.page = val;
                //this.getUsers();
                this.pagesize = size;

                console.log(`每页 ${size} 条`);
            },

        },

        mounted: function () {
            this.drawCharts()
            this.getUsers();
        },
        updated: function () {
            this.drawCharts()
        }
    }
</script>

<style lang="scss" scoped>
    .car-box{
        display:block;
        //background-color:#fff;
        float:left;
        width:100%;
        .cont{
            padding:20px;
            border-left:3px solid #1080d6;
            background-color:#fff;
            .el-form-item{
                margin-bottom:0;
            }
        }
        .cont1{
            padding:20px;
            background-color:#fff;
        }
    }
    .chart-container {
        padding:20px;
        background-color:#fff;
        .hd-tit{
            margin-top:0;
        }
    }

    .el-col {
    }
    .char-tab{
        padding:20px;
        background-color:#fff;
    }
    .box-tab{
        //border:1px solid #ccc;
        width:100%;
        border-spacing:0;
        border-top-width:0;
        border-left-width:0;
        td{
            border-top:1px solid #ccc;
            border-left:1px solid #ccc;
            text-align:center;
            padding:0 10px;
            line-height:30px;

        }
    }
    .toolbar1{
        text-align:center;
        background-color:#fff;
    }
</style>