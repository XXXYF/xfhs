<!--<template>-->
	<!--<el-tabs class="childtab" v-model="activeName2" type="card" @tab-click="handleClick">-->
		<!--<el-tab-pane label="基本信息" lazy="true" name="first"><Tab1></Tab1></el-tab-pane>-->
		<!--<el-tab-pane label="人工外观检验记录" lazy="true" name="second"><Tab2></Tab2></el-tab-pane>-->
		<!--<el-tab-pane label="仪器设备检验记录" lazy="true" name="third"><Tab3></Tab3></el-tab-pane>-->
		<!--<el-tab-pane label="检验过程" lazy="true" name="fourth"><Tab4></Tab4></el-tab-pane>-->
		<!--<el-tab-pane label="制动力曲线" lazy="true" name="fiveth"><Tab5></Tab5></el-tab-pane>-->
		<!--<el-tab-pane label="路试检验" lazy="true" name="sixth"><Tab6></Tab6></el-tab-pane>-->
		<!--<el-tab-pane label="检验报告" lazy="true" name="seventh"><Tab7></Tab7></el-tab-pane>-->
		<!--<el-tab-pane label="检验照片" lazy="true" name="eightth"><Tab8></Tab8></el-tab-pane>-->
		<!--<el-tab-pane label="检验视频" lazy="true" name="nineth"><Tab9></Tab9></el-tab-pane>-->
		<!--<el-tab-pane label="预警信息" lazy="true" name="tenth">定时任务补偿</el-tab-pane>-->
	<!--</el-tabs>-->
<!--</template>-->
<!--<script>-->
    <!--import  Tab1 from  '../operation/securityBook/information.vue'-->
    <!--import  Tab2 from  '../operation/securityBook/rgwgjyjl.vue'-->
    <!--import  Tab3 from  '../operation/securityBook/yqsbjyjl.vue'-->
    <!--import  Tab4 from  '../operation/securityBook/jygc.vue'-->
    <!--import  Tab5 from  '../operation/securityBook/zdlqx.vue'-->
    <!--import  Tab6 from  '../operation/securityBook/lsjy.vue'-->
    <!--import  Tab7 from  '../operation/securityBook/jybg.vue'-->
    <!--import  Tab8 from  '../operation/securityBook/jyzp.vue'-->
    <!--import  Tab9 from  '../operation/securityBook/jysp.vue'-->
    <!--export default {-->
        <!--components:{-->
            <!--Tab1,Tab2,Tab3,Tab4,Tab5,Tab6,Tab7,Tab8,Tab9-->
        <!--},-->
        <!--data() {-->
            <!--return {-->
                <!--activeName2: 'first'-->
            <!--};-->
        <!--},-->
        <!--methods: {-->
            <!--handleClick(tab, event) {-->
                <!--console.log(tab, event);-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->
<template>
	<el-tabs v-model="activeName" @tab-click="handleClick" >
		<el-tab-pane label="基本信息" name="first" >
			<Tab1></Tab1>
		</el-tab-pane>
		<el-tab-pane label="人工外观检验记录" name="second">
			<component  :is="rgwgjyjl" ></component>
		</el-tab-pane>
		<el-tab-pane label="仪器设备检验记录" name="third">
			<component  :is="yqsbjyjl"></component>
		</el-tab-pane>
		<el-tab-pane label="检验过程" name="fourth">
			<component  :is="jygc"></component>
		</el-tab-pane>
		<el-tab-pane label="制动力曲线" name="five">
			<component  :is="zdlqx"></component>
		</el-tab-pane>
		<el-tab-pane label="路试检验" name="sixth">
			<component  :is="lsjy"></component>
		</el-tab-pane>
		<el-tab-pane label="检验报告" name="seventh">
			<component  :is="jybg"></component>
		</el-tab-pane>
		<el-tab-pane label="检验照片" name="eightth">
			<component  :is="jyzp"></component>
		</el-tab-pane>
		<el-tab-pane label="检验视频" name="nineth">
			<component  :is="jysp"></component>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
    // 异步引入组件
    const information = resolve => require(['../operation/securityBook/information.vue'], resolve)
    const rgwgjyjl = resolve => require(['../operation/securityBook/rgwgjyjl.vue'], resolve)
    const yqsbjyjl = resolve => require(['../operation/securityBook/yqsbjyjl.vue'], resolve)
    const jygc = resolve => require(['../operation/securityBook/jygc.vue'], resolve)
    const zdlqx = resolve => require(['../operation/securityBook/zdlqx.vue'], resolve)
    const lsjy = resolve => require(['../operation/securityBook/lsjy.vue'], resolve)
    const jybg = resolve => require(['../operation/securityBook/jybg.vue'], resolve)
    const jyzp = resolve => require(['../operation/securityBook/jyzp.vue'], resolve)
    const jysp = resolve => require(['../operation/securityBook/jysp.vue'], resolve)
    import  Tab1 from  '../operation/securityBook/information.vue'

    export default {
        components:{
        	Tab1
        },
        data(){
            return {
                activeName: 'first',
                information: '',
                rgwgjyjl: '',
                yqsbjyjl: '',
                jygc: '',
                zdlqx: '',
                lsjy: '',
                jybg: '',
                jyzp: '',
                jysp: '',
            }
		},
        name: 'tabname',
        methods: {
            handleClick (tab, event) {
                this.$store.commit('changeapplyTab', tab.name)
                this.checkVue(tab.name)
            },
            checkVue (name) {
                switch (name) {
                    case 'first' :
// console.log('second')
                        this.information = information
                        break
                    case 'second' :
// console.log('second')
                        this.rgwgjyjl = rgwgjyjl
                        break
                    case 'third' :
// console.log('third')
                        this.yqsbjyjl = yqsbjyjl
                        break
                    case 'fourth' :
// console.log('fourth')
                        this.jygc = jygc
                        break
                    case 'five' :
// console.log('five')
                        this.zdlqx = zdlqx
                        break
                    case 'sixth' :
// console.log('six')
                        this.lsjy = lsjy
                        break
                    case 'seventh' :
// console.log('sevent')
                        this.jybg = jybg
                        break
					case 'eightth' :
// console.log('sevent')
                        this.jyzp = jyzp
                        break
                    case 'nineth' :
// console.log('sevent')
                        this.jysp = jysp
                        break
                }
            },

        },
        mounted() {
        },
    }
</script>