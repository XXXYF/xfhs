<template>
    <div class="car-box">
        <div class="cont">
            <h1车辆检测统计</h1>
            <el-form :inline="true" :model="filters" ref="filters" id="filters">
                <el-form-item label="检测类型:">
                    <el-select v-model="filters.type" placeholder="全部">
                        <el-option label="安检" value="0"></el-option>
                        <el-option label="综检" value="1"></el-option>
                        <el-option label="环检" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="检测时间:">
                    <el-date-picker v-model="value1" type="date" placeholder="开始日期">
                    </el-date-picker> -
                    <el-date-picker v-model="value2" type="date" placeholder="结束日期">
                    </el-date-picker>
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
                <span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;检验合格率统计图</span>
                <el-row>
                    <el-col :span="24">
                        <div id="chartColumn" style="width:100%; height:400px;"></div>
                    </el-col>
                </el-row>
            </section>
            <div class="char-tab">
                <span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;检验合格率统计</span>
                <div id="table" class="box-tab">
                    <el-table :data="users" :span-method="tableSpanMethod">
                        <el-table-column v-for='item in tableConfig' :label="item.label" :prop='item.prop' :width='item.width' :key="item.id">
                            <el-table-column v-if='item.children||item.children.length>0' v-for="item1 in item.children" 
                                :label="item1.label" :prop='item1.prop' :width='item1.width' :key="item1.id">
                                <el-table-column v-if='item1.children||item1.children.length>0' v-for="item2 in item1.children" 
                                    :label="item2.label" :prop='item2.prop' :width='item2.width' :key="item2.id">
                                </el-table-column>
                            </el-table-column>
                            
                        </el-table-column>
                    </el-table>
                </div>
            </div> 
            
        </div>
        <el-col :span="24" class="toolbar1">
            <el-pagination layout="prev, pager, next ,jumper" @current-change="handleCurrentChange"  @size-change="handleSizeChange" 
             :page-size="10" :total="total" prev-text='上一页' next-text='下一页'>
            </el-pagination>
        </el-col> 

    </div>
</template>

<script>
    import util from '../../common/js/util'
    import { getUserListPage} from '../../api/api';

    import echarts from 'echarts'
    export default {
        data() {
            return {
                filters:{},
                chartColumn: null,
                value1:'',
                value2:'',
                users:[],
                page:1,
                total: 0,
                tableConfig:[
                    {id:110,label:'时间',prop:'birth',width:''},
                    {id:310,label:'总检',prop:'',width:'',children:[
                        
                        {id:311,label:'已检车辆数',prop:'allyj',width:''},
                        {id:312,label:'合格率数',prop:'age',width:''},
                        {id:313,label:'合格率',prop:'allyj',width:''},
                        ],
                    },
                    {id:320,label:'初检',prop:'',width:'',children:[    
                        {id:321,label:'已检车辆数',prop:'allyj',width:''},
                        {id:322,label:'合格率数',prop:'age',width:''},
                        {id:323,label:'合格率',prop:'allyj',width:''}
                        ],
                    },
                    {id:330,label:'复检',prop:'',width:'',children:[
                        {id:331,label:'已检车辆数',prop:'allyj',width:''},
                        {id:332,label:'合格率数',prop:'age',width:''},
                        {id:333,label:'合格率',prop:'allyj',width:''},
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
                    tooltip: {
                        trigger:'axis'
                    },
                    toolbox: {
                    　　show : true,
                    // 　　feature : {
                    //         dataZoom : {show: true},
                    // 　　　　dataView : {show: true, readOnly: false},
                    // 　　    magicType : {show: true, type: ['line', 'bar']},
                            
                    // 　　}
                    },
                    calculable:true,
                    legend: {
                        data: ['总检合格率', '初检合格率','复检合格率']
                    },
                    xAxis: {
                        type : 'category',
                        axisLabel: {
                            interval:0
                        },
                        data: ["2018/6/21", "2018/6/22", "2018/6/23", "2018/6/24", "2018/6/25", "2018/6/26",'2018/6/27']
                    },
                    yAxis: {
                        type :'value',
                        name: '合格率/日',
                    },
                    series: [
                    {
                        name: '总检合格率',
                        type: 'line',
                        data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6,0.7],
                        //markLine: {data: [{type: 'average', name: '平均值'}]}
                    },{
                        name: '初检合格率',
                        type: 'line',
                        data: [0.2, 0.4, 0.6, 0.8, 0.1, 0.12],
                        //markLine: {data: [{type: 'average', name: '平均值'}]}
                    },{
                        name: '复检合格率',
                        type: 'line',
                        data: [0.3, 0.4, 0.2, 0.1, 0.6, 0.3,0.5],
                        //markLine: {data: [{type: 'average', name: '平均值'}]}
                    }]
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
                let para = {
                    page: this.page,
                };
                this.listLoading = true;
                getUserListPage(para).then((res) => {
                    this.users = res.data.users;
                    this.total = res.data.total;
                    console.log(this.users,'5555555555555555555555')
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
        padding: 30px 20px;
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