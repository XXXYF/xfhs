import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Basic from './views/notic/basic.vue'



import safeTestinformation from './views/operation/safeTestinformation.vue'
import safeTestReviewreceipt from './views/operation/safeTestReviewreceipt.vue'
import safeRequest from './views/operation/safeRequest.vue'

import userManagement from './views/system/userManagement.vue'
import adduser from './views/system/adduser.vue'
import edituser from './views/system/edituser.vue'

import roleManagement from './views/system/roleManagement.vue'
import addrole from './views/system/addrole.vue'
import editrole from './views/system/editrole.vue'

import powerManagement from './views/system/powerManagement.vue'
import editpower from './views/system/editpower.vue'


import departmentManagement from './views/system/departmentManagement.vue'
import adddepartment from './views/system/adddepartment.vue'
import editdepartment from './views/system/editdepartment.vue'

import systemSet from './views/system/systemSet.vue'
import interfaceAuthorization from './views/interface/interfaceAuthorization.vue'
import addinterface from './views/interface/addinterface.vue'
import editinterface from './views/interface/editinterface.vue'
import timeManagement from './views/interface/timeManagement.vue'

import interfaceCall from './views/interface/interfaceCall.vue'
import systemlog from './views/interface/systemlog.vue'
import syslogMsg from './views/interface/syslogMsg.vue'
import logDetail from './views/interface/logDetail.vue'
import securityBusiness from './views/securityBusiness.vue'
import RequestMore from './views/RequestMore.vue'
import security from './views/operation/security.vue'
import fullyMechanized from './views/operation/fullyMechanized.vue'
import ringInspection from './views/operation/ringInspection.vue'
import securityBook1 from './views/operation/securityBook/information.vue'

var user = sessionStorage.getItem('user');
console.log(user,'hyc')


let routes = [
    //登录
    {
        path: '/login',
        component: Login,
        name: 'Loginpage',
        cdbs:'login',
        hidden: true
    },
    //404
    {
        path: '/404',
        component: NotFound,
        name: 'noanno',
        cdbs:'noanno',
        hidden: true
    },


    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-car mainButton',
        leaf: true,//只有一个节点
        children: [
            { path: '/main', component: Main, name: '首页' },
        ]
    },
    //消息列表
    {
        path :'/',
        component: Home,
        name:'',
        cdbs:'xxlb',
        hidden: true,
        children:[
            // { path:'/Notic', component: Notic, name:'预警消息'},
            // { path:'/NoticDt', component: NoticDt, name:'预警消息详情'},
            { path:'/Basic', component: Basic, name:'基本信息'}
        ]
    },

    //myvue
    {
        path :'/',
        component: Home,
        name:'业务管理',
        iconCls: 'fa fa-car interfaceButton ',
        cdbs:'ywgl',
        children:[
            { path: '/safeTestinformation', component: safeTestinformation, name: '安检检测信息',hidden:true, cdbs:'ywgl:ajjcxx' },
            { path: '/safeRequest', component: safeRequest, name: '安检申请审核',hidden:true, cdbs:'ywgl:ajsqsh' },
            { path: '/safeTestReviewreceipt', component: safeTestReviewreceipt, name: '安检审核回执',hidden:true, cdbs:'ywgl:ajshhz' },
        ]
    },
    {
        path :'/',
        component: Home,
        name:'系统管理',
        iconCls: 'fa fa-car  businessButton',
        // hidden:true,
        cdbs:'xtgl',
        children:[
            { path: '/userManagement', component: userManagement, name: '用户管理',hidden:true, cdbs:'xtgl:yhgl'},
            { path: '/adduser', component: adduser, name: '用户新增',hidden:true,cdbs:'xtgl:yhglxz'},
            { path: '/edituser', component: edituser, name: '用户修改',hidden:true,cdbs:'xtgl:yhglxg'},
            { path: '/roleManagement', component: roleManagement, name: '角色管理' ,hidden:true, cdbs:'xtgl:jsgl'},
            { path: '/addrole', component: addrole, name: '角色新增',hidden:true,cdbs:'xtgl:jsglxz'},
            { path: '/editrole', component: editrole, name: '角色修改',hidden:true,cdbs:'xtgl:jsglxg'},
            { path: '/departmentManagement', component: departmentManagement, name: '部门管理' ,hidden:true, cdbs:'xtgl:bmgl'},
            { path: '/adddepartment', component: adddepartment, name: '部门新增',hidden:true,cdbs:'xtgl:bmglxz'},
            { path: '/editdepartment', component: editdepartment, name: '部门修改',hidden:true,cdbs:'xtgl:bmglxz'},
            { path: '/powerManagement', component: powerManagement, name: '权限管理' ,hidden:true, cdbs:'xtgl:qxgl'},
            { path: '/editpower', component: editpower, name: '权限修改',hidden:true,cdbs:'xtgl:qxglxg'},
            { path: '/systemSet', component: systemSet, name: '系统参数配置',hidden:true, cdbs:'xtgl:xtcspz'},
        ]
    },

    {
        path :'/',
        component: Home,
        name:'接口管理',
        iconCls: 'fa fa-car systemButton ',
        cdbs:'jkgl',
        children:[
            { path: '/interfaceAuthorization', component: interfaceAuthorization, name: '接口授权管理',hidden:true, cdbs:'jkgl:jksqgl' },
            { path: '/addinterface', component: addinterface, name: '用户新增',hidden:true, cdbs:'jkgl:jksqglxz'},
            { path: '/editinterface', component: editinterface, name: '用户修改',hidden:true, cdbs:'jkgl:jksqglxg'},
            { path: '/timeManagement', component: timeManagement, name: '时间段设置',hidden:true, cdbs:'jkgl:sjdsz'},
        ]
    },
    {
        path :'/',
        component: Home,
        name:'日志管理',
        iconCls: 'fa fa-car interfaceButton ',
        cdbs:'rzgl',
        children:[
            { path: '/interfaceCall', component: interfaceCall, name: '接口调用日志',hidden:true, cdbs:'rzgl:jkdyrz' },
            { path: '/systemlog', component: systemlog, name: '系统操作日志',hidden:true, cdbs:'rzgl:xtczrz' },
            { path: '/syslogMsg', component: syslogMsg, name: '系统操作日志详情',hidden:true,cdbs:'rzgl:xtdyrzxq'},
            { path: '/logDetail', component: logDetail, name: '接口调用日志详情',hidden:true,cdbs:'rzgl:jkdyrzxq'},
        ]
    },
    //安检业务界面
    {
        path: '/securityBusiness',
        component: securityBusiness,
        name: '安检业务',
        cdbs:'ajyw',
        hidden: true
    },
    {
        path: '/security',
        component: security,
        name: '安检',
        cdbs:'ajxq',
        hidden: true
    },
    {
        path: '/fullyMechanized',
        component: fullyMechanized,
        name: '综检',
        cdbs:'zjxq',
        hidden: true
    },
    {
        path: '/ringInspection',
        component: ringInspection,
        name: '环检',
        cdbs:'hjxq',
        hidden: true
    },
    {
        path: '/securityBook1',
        component: securityBook1,
        name: '安检业务详情',
        cdbs:'ajxqym',

        hidden: true
    },
    {
        path: '/RequestMore',
        component: RequestMore,
        name: '安检业务审核',
        cdbs:'ajxqym',

        hidden: true
    },


    //404
    {
        path: '*',
        hidden: true,
        cdbs:'nopage',
        redirect: { path: '/404' }
    },


];

export default routes;