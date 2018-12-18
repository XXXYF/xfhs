import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'
//import './assets/theme/theme-green/index.css'
import '../src/common/css/index.css'
import VueRouter from 'vue-router'
import store from './store'
import routes from './routes'
// import Mock from './mock'  //后面删除
// Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import VueHighcharts from 'vue-highcharts'
import '../src/assets/iconfont/iconfont.css'

import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import axios from 'axios';
//滚动插件
import { HappyScroll } from 'vue-happy-scroll'
//自定义组件名
Vue.component('happy-scroll', HappyScroll)
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'

Vue.use(VueQuillEditor)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueHighcharts)

// Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})
Vue.prototype.HOST = '/visp_mg'
axios.defaults.baseURL = '/visp_mg'




router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  // console.log(user,'565656')
  // let Msgtip = JSON.parse(sessionStorage.getItem(''))

  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App),
  methods:{
    moreChart() {
        var options = this.getMoreOptions(this.type);
 
        if (this.chart) {
            this.chart.destroy();
        };
    // 初始化 Highcharts 图表
    this.chart = new Highcharts.Chart('highcharts-more', options);
    }
  }
}).$mount('#app')

