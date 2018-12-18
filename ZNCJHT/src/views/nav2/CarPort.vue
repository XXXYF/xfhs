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
                <span class="hd-tit"><i class="line-sml"></i>&nbsp;&nbsp;接口调用日志</span>
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
    export default {
        data() {
            return {
                filters:{},
                chartColumn: null,
                value1:'',
                value2:'',
                users:[],
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
                    toolbox: {
                    　　show : true,
                    　　feature : {
                            dataZoom : {show: true},
                    　　　　dataView : {show: true, readOnly: false},
                    　　    magicType : {show: true, type: ['line', 'bar']},
                            
                    　　}
                    },
                  xAxis: {
                      data: ["2018/6/21", "2018/6/22", "2018/6/23", "2018/6/24", "2018/6/25", "2018/6/26",'2018/6/27']
                  },
                  yAxis: {},
                  series: [{
                      name: '销量',
                      type: 'bar',
                      data: [5, 20, 36, 10, 10, 20]
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
                    name: this.filters.name,
                };
                this.listLoading = true;
                getUserListPage(para).then((res) => {
                    console.log(res);
                    this.total = res.data.total;
                    this.users = res.data.users;
                    this.listLoading = false;
                    console.log(this.users ,'454545454');
                });
            },
            

            tableSpanMethod(){
                // console.log('1111')
            },

        },

        mounted: function () {
            this.drawCharts();
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