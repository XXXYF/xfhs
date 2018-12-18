<!-- 安检-检验过程 -->
<template>
	<div class="detail-box rgwgjyjlBox">
		<!-- <h1>{{data.name}}</h1> -->
		<!--<table class="tab-msg"  :model="data" >-->
			<!--<tbody>-->
			<!--<tr class="tab-tr">-->
				<!--<td>检验项目</td>-->
				<!--<td>检验次数</td>-->
				<!--<td>检验过程开始时间</td>-->
				<!--<td>检验过程结束时间</td>-->
				<!--<td>检验设备编号</td>-->
			<!--</tr>-->
			<!--<tr v-for=" item in data" class="tab-tr">-->
				<!--<td>{{item.jyxm}}</td>-->
				<!--<td>{{item.jycs}}</td>-->
				<!--<td>{{item.kssj}}</td>-->
				<!--<td>{{item.jssj}}</td>-->
				<!--<td>{{item.jysbbh}}</td>-->
			<!--</tr>-->
			<!--</tbody>-->
		<!--</table>-->
		<el-table :data="data" :border="true" highlight-current-row v-loading="listLoading"  @selection-change="selsChange" style="width: 100%;">
			<!-- <el-table-column prop="index" label="序号" >
             </el-table-column>-->
			<el-table-column prop="jyxm"   label="检验项目">
			</el-table-column>
			<el-table-column prop="jycs"  label="检验次数"  >
			</el-table-column>
			<el-table-column prop="kssj"  label="检验过程开始时间"  >
				<template slot-scope="scope">
					<span>{{scope.row.kssj | formDate }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="jssj"  label="检验过程结束时间"  >
				<template slot-scope="scope">
					<span>{{scope.row.kssj | formDate }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="jysbbh"  label="检验设备编号"  >
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import moment from 'moment'
    export default{
        data(){
            return{
                filters:{},
                data:[],
                itemlst:[],
                listLoading:true,
            }
        },
        methods:{

            selsChange: function (sels) {
                this.sels = sels;
            },
            //获取部门代号列表
            searchReport() {
                let para = {
                    jylsh: this.filters.jylsh,
                    jycs: this.filters.jycs,
                    jyjgbh: this.filters.jyjgbh,
                };
                this.listLoading = true;

                var qs = require('querystring')
                axios.post('api/ajlw/jcgc/getJcgc', qs.stringify(para) ,{
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
                }).catch((response) =>{
                    this.listLoading = false;
                    console.log(response,'23232')  //直接运行这里了，加载的那个弹窗一直没有消失
                });
            },
        },

        mounted(){
            var rowdate = sessionStorage.getItem('rowdate');
            if (rowdate) {
                rowdate = JSON.parse(rowdate);
                this.filters = rowdate || '';
            };
            this.searchReport();
        },
        filters:{
            formDate:function (dysj) {
                //return monent(dysj)
                return moment(dysj).format('YYYY-MM-DD HH:mm:ss')

            },

        }


    }
</script>


