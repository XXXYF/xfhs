//import 'event-source-polyfill'
import babelpolyfill from 'babel-polyfill'
// import "@babel/polyfill";

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
// import axios from 'axios'
// import Mock from './mock'  //后面删除
// Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import VueHighcharts from 'vue-highcharts'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/global.css'
// 引入jq插件;
import $ from 'jquery'
// 引入视频插件;
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.use(babelpolyfill)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueHighcharts)

Vue.directive('filterSpecialChar', {
    update: function (el, { value, modifiers }, vnode) {
        try {
            let input = el.children[0]
            if(!input.value){
                return false;
            }
            input.value = input.value.replace(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g, "");
            input.dispatchEvent(new Event(modifiers.lazy ? 'change' : 'input'))
        } catch (e) {
        }
    }
})
// 请求拦截器
import axios from 'axios'
// 配置默认的host,假如你的API host是：http://api.htmlx.club
// axios.defaults.baseURL = 'http://api.htmlx.club'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('请求拦截器');
    // axios.post('api/login/testlogin' ,{
    //     headers: {
    //         "Content-Type" :" application/x-www-form-urlencoded; charset=UTF-8",
    //     },
    //     withCredentials:true,
    // }).then((response) =>{
    //     console.log(response.data.data.length,11222);
    //     if (response.data.code == '0'){
    //         sessionStorage.removeItem('user');
    //         this.$router.push('/login');
    //     }else {
    //     }
    //
    // }).catch((response) =>{
    // });
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
});

// Vue.directive('radio',{
//     bind(){
//         this.el.addEventListener('click'),($event) => {
//             let _this =this
//             window.setTimeout(() =>{
//                 if(!_this.changed){
//                     $event.target.checked =false
//                 }
//                 _this.changed =false
//             },0)
//         }
//         this.el.addEventListener('change',() =>{
//             this.changed =true
//         })
//     },
//     update (){}
// });
// Vue.prototype.HOST = '/api'
// axios.defaults.baseURL = '/api/api'
// Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  routes
})

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

