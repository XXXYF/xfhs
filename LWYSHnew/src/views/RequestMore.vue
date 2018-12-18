<template>
    <div class="">
        <div class="businessBox">
            <el-tabs class="headtab" v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="安检申请审核信息" name="first" ><Tab1></Tab1></el-tab-pane>
                <!--<el-tab-pane label="综检车辆信息" name="second"><Tab2></Tab2></el-tab-pane>-->
                <!--<el-tab-pane label="环检车辆信息" name="third"><Tab3></Tab3></el-tab-pane>-->
            </el-tabs>
        </div>
    </div>

</template>
<script>
    import  Tab1 from  './operation/request/ajsqsh.vue'
    // import  Tab2 from  './operation/fullyMechanized.vue'
    // import  Tab3 from  './operation/ringInspection.vue'

    export default{
        components:{
            Tab1
        },
        data(){

            return{
                activeName: 'first',
                filters:{

                },
                users: [],
                listLoading: false,
            }
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
            }
        },
        mounted(){
            var rowdate = sessionStorage.getItem('rowdate');
            if (rowdate) {
                rowdate = JSON.parse(rowdate);
                this.filters = rowdate || '';
            };
        }
    }
</script>



