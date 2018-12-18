import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Notic from './views/notic/Notic.vue'
import NoticDt from './views/notic/NoticDt.vue'
import Basic from './views/notic/basic.vue'
import Password from './views/password/Password.vue'

import Order from './views/order/index.vue'
import OrdeDet from './views/order/detail.vue'

import Site from './views/site/site.vue'
import News from './views/site/news.vue'
import SiteSet from './views/site/SiteSet.vue'

import Jcxx from './views/nav1/jcxx.vue'
import Hjxq from './views/nav1/hjxq.vue'
import Zjxq from './views/nav1/zjxq.vue'
import Jcxq from './views/nav1/Jcxq.vue'
import Pic from './views/nav1/Pic.vue'
import Edit from './views/nav1/edit.vue'

import CarNum from './views/nav2/CarNum.vue'
import CarPort from './views/nav2/CarPort.vue'
import CarRatio from './views/nav2/CarRatio.vue'

import CarDt from './views/carcheck/Cardetail.vue'
import Checkline from './views/carcheck/Checkline.vue'
import ChelineDt from './views/carcheck/Chelinedetail'
import Line1 from './views/carcheck/Line1.vue'
import Line2 from './views/carcheck/Line2.vue'
import Line3 from './views/carcheck/Line3.vue'
import Line4 from './views/carcheck/Line4.vue'
import Line5 from './views/carcheck/Line5.vue'
import Line6 from './views/carcheck/Line6.vue'

import ChePeo from './views/carcheck/Chepeo'
import ChePeoDt from './views/carcheck/Chepeodetial'
import CheSys from './views/carcheck/CheSys'
import CheSysDt from './views/carcheck/Chesysdetail'

import User from './views/User/user.vue'
import Detail from './views/User/Detail.vue'
import Car from './views/User/Car.vue'
import CarDetail from './views/User/CarDetail.vue'
import Adduser from './views/User/Adduser.vue'
import Edituser from './views/User/Edituser.vue'
import UserRole from './views/User/userrole.vue'
import AddRole from './views/User/Addrole.vue'
import EditRole from './views/User/Editrole.vue'
import UserLimit from './views/User/userlimit.vue'
import AddLimit from './views/User/Addlimit.vue'
import EditLimit from './views/User/Editlimit.vue'
import Depart from './views/User/depart.vue'
import AddDepart from './views/User/Adddepart.vue'
import EditDepart from './views/User/Editdepart.vue'

import SysLog from './views/nav3/SysLog.vue'
import SysSearch from './views/nav3/SysSearch.vue'
import SysDet from './views/nav3/SysDet.vue'
import SafePort from './views/nav3/SafePort.vue'
import Port from './views/nav3/Port.vue'
import PortDet from './views/nav3/PortDet.vue'
import DataView from './views/nav3/dataview.vue'
import DataViewDt from './views/nav3/dataviewDt.vue'
import SysUn from './views/nav3/SysUn.vue'
import SysUnDt from './views/nav3/SysUnDt.vue'
import PortLink from './views/nav3/PortLink.vue'
import PortLinkDt from './views/nav3/PortLinkDt.vue'

import SysPara from './views/sys/syspara.vue'
import SysStand from './views/sys/standard.vue'
import LinkPara from './views/sys/LinkPara.vue'
import RDA from './views/sys/RDA.vue'
import PlaceSh from './views/sys/PlaceSh.vue'
import MsgSh from './views/sys/MsgSh.vue'

// import Demo from './views/charts/demo.php'
// import Tab17 from './views/nav1/Tab17.vue'


let routes = [
    //登录
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    //404
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },

    //预约订单
    {
        path: '/',
        component: Home,
        name: '预约订单',
        iconCls: 'fa fa-bar-chart-o',
        //leaf: true,//只有一个节点
        children: [
            { path: '/Order', component: Order, name: '订单管理' },
            { path:'/OrdeDet', component: OrdeDet, name:'订单详情', hidden: true},
        ]
    },
    //检测机构
    {
        path:'/',
        component:Home,
        name:'站点管理',
        iconCls:'fa fa-sitemap',
        children:[
            { path:'/Site', component: Site, name:'企业信息'},
            { path:'/SiteSet', component: SiteSet, name:'站点设置'},
            { path :'/CarDt', component: CarDt, name:'检测机构详情', hidden: true},
            { path:'/News', component: News, name:'新闻资讯', hidden: true},
            { path :'/ChelineDt', component: ChelineDt, name:'检测线详情', hidden: true},
           
            
        ]
    },
    //检测机构
    // {
    //     path:'/',
    //     component:Home,
    //     name:'订单统计',
    //     iconCls:'fa fa-sitemap',
    //     children:[
    //         { path:'/CarNum', component: CarNum, name:'统计图表'},
    //     ]
    // },
    //用户管理
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'fa fa-user-circle-o',//图标样式class
        children: [
            
            { path: '/user', component: User, name: '用户信息'},
            { path :'/Detail', component: Detail, name:'用户信息详情页', hidden: true },
            { path: '/Car', component: Car, name: '车辆查询'},
            { path :'/CarDetail', component: CarDetail, name:'车辆信息详情页', hidden: true },
            { path :'/Adduser', component: Adduser, name:'新增用户', hidden: true },
            { path :'/Edituser', component: Edituser,name:'编辑用户', hidden: true },
            { path: '/userrole', component: UserRole, name: '用户角色', hidden: true},
            { path :'/EditRole', component: EditRole,name:'编辑角色', hidden: true },
            { path :'/AddRole', component: AddRole,name:'添加角色', hidden: true },
            // { path: '/main', component: Main, name: '首页', hidden: true},
        ]
    },
    //消息列表
    {
        path :'/',
        component: Home,
        name:'',
        hidden: true,
        children:[
            { path:'/Notic', component: Notic, name:'预警消息'},
            { path:'/NoticDt', component: NoticDt, name:'预警消息详情'},
            { path:'/Basic', component: Basic, name:'基本信息'}
        ]
    },
    //修改密码
    {
        path :'/',
        component: Home,
        name:'',
        hidden: true,
        children:[
            { path:'/Password', component: Password, name:'修改密码'}
        ]
    },
    //日志管理
    {
        path: '/',
        component: Home,
        name: '系统日志',
        iconCls: 'fa fa-paste',
        children: [
            { path: '/SysLog', component: SysLog, name: '登录日志' },
            { path: '/SysDet', component: SysDet, name: '登录日志详情',hidden:true },
            { path: '/SysUn', component: SysUn, name: '异常日志'},
            { path: '/SysUnDt', component: SysUnDt, name: '异常日志详情',hidden:true },
             { path: '/Port', component: Port, name: '数据操作日志'},
            { path: '/PortDet', component: PortDet, name: '操作日志详情',hidden:true },

            // { path: '/SysSearch', component: SysSearch, name: '数据查询日志' },
            // { path: '/DataView', component: DataView, name: '接口调用日志'},
            // { path: '/DataViewDt', component: DataViewDt, name: '接口调用日志详情',hidden:true },
            
            // { path: '/PortLink', component: PortLink, name: '安全审计日志'},
            // { path: '/PortLinkDt', component: PortLinkDt, name: '安全审计日志详情',hidden:true },
            // { path: '/SafePort', component: SafePort, name: '审核安全审计日志'},

        ]
    },
    
    
    //404
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },
    

];

export default routes;