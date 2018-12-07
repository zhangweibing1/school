import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/views/home/index.vue';
import routerMeta from './routerMeta';

const {
    webview,
} = routerMeta;

Vue.use(Router);

/**
 * meta
 *   webview 默认为false
 *     - ture 使用native的webview打开
 *     - false 单页面内打开
 *   tabBar 默认为false
 *     - ture tabBar 显示
 *     - false tabBar 隐藏
 */
export default new Router({
    routes: [{
            path: '/',
            name: 'login',
            component: () =>
                import ( /* webpackChunkName: "login" */ '@/views/login/login.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home/home.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/homeTea',
            name: 'homeTea',
            component: () =>
                import ( /* webpackChunkName: "homeTea" */ '@/views/home/homeTea.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/homeStu',
            name: 'homeStu',
            component: () =>
                import ( /* webpackChunkName: "homeStu" */ '@/views/home/homeStu.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/newsList',
            name: 'newsList',
            component: () =>
                import ( /* webpackChunkName: "newsList" */ '@/views/home/newsList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/newsDetail',
            name: 'newsDetail',
            component: () =>
                import ( /* webpackChunkName: "newsDetail" */ '@/views/home/newsDetail.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/infoList',
            name: 'infoList',
            component: () =>
                import ( /* webpackChunkName: "infoList" */ '@/views/home/infoList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/infoDetail',
            name: 'infoDetail',
            component: () =>
                import ( /* webpackChunkName: "infoDetail" */ '@/views/home/infoDetail.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/forgot',
            name: 'forgot',
            component: () =>
                import ( /* webpackChunkName: "forgot" */ '@/views/login/forgot.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/forgotNew',
            name: 'forgotNew',
            component: () =>
                import ( /* webpackChunkName: "forgot" */ '@/views/login/forgotNew_account.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/forgotNew_mq/:account',
            name: 'forgotNew_mq',
            component: () =>
                import ( /* webpackChunkName: "forgot" */ '@/views/login/forgotNew_sq.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/forgotNew_upwd/:account',
            name: 'forgotNew_mq',
            component: () =>
                import ( /* webpackChunkName: "forgot" */ '@/views/login/forgotNew_sq.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '@/views/about/index.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveApprove',
            name: 'leaveApprove',
            component: () =>
                import ( /* webpackChunkName: "leaveApprove" */ '@/views/leaveApprove/index.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/data',
            name: 'data',
            component: () =>
                import ( /* webpackChunkName: "data" */ '@/views/data/data.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/me',
            name: 'me',
            component: () =>
                import ( /* webpackChunkName: "mine" */ '@/views/mine/me.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/mine',
            name: 'mine',
            component: () =>
                import ( /* webpackChunkName: "mine" */ '@/views/mine/mine.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/personal',
            name: 'personal',
            component: () =>
                import ( /* webpackChunkName: "personal" */ '@/views/mine/personal.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/setting',
            name: 'setting',
            component: () =>
                import ( /* webpackChunkName: "setting" */ '@/views/mine/setting/setting.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: () =>
                import ( /* webpackChunkName: "setting" */ '@/views/mine/feedback/feedback.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/mysq',
            name: 'mysq',
            component: () =>
                import ( /* webpackChunkName: "setting" */ '@/views/mine/setting/mysq.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/accountSafe',
            name: 'accountSafe',
            component: () =>
                import ( /* webpackChunkName: "accountSafe" */ '@/views/mine/accountSafe/accountSafe.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: () =>
                import ( /* webpackChunkName: "aboutUs" */ '@/views/mine/aboutUs/aboutUs.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/news',
            name: 'news',
            component: () =>
                import ( /* webpackChunkName: "news" */ '@/views/news/index.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/svg-icons',
            name: 'svg-icons',
            component: () =>
                import ( /* webpackChunkName: "svg-icons" */ '@/views/svg-icons/index.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/article/:id',
            name: 'article',
            component: () =>
                import ( /* webpackChunkName: "article" */ '@/views/news/article/index.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/application',
            name: 'application',
            component: () =>
                import ( /* webpackChunkName: "application" */ '@/views/application/application.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/qgzx',
            name: 'qgzx',
            component: () =>
                import ( /* webpackChunkName: "qgzx" */ '@/views/application/qgzx/qgzx.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/workApply',
            name: 'workApply',
            component: () =>
                import ( /* webpackChunkName: "workApply" */ '@/views/application/qgzx/workApply.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/workInfo',
            name: 'workInfo',
            component: () =>
                import ( /* webpackChunkName: "workInfo" */ '@/views/application/qgzx/workInfo.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/workProposer',
            name: 'workProposer',
            component: () =>
                import ( /* webpackChunkName: "workProposer" */ '@/views/application/qgzx/workProposer.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/workHistory',
            name: 'workHistory',
            component: () =>
                import ( /* webpackChunkName: "workHistory" */ '@/views/application/qgzx/workHistory.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/grantNoticeList',
            name: 'grantNoticeList',
            component: () =>
                import ( /* webpackChunkName: "grantNoticeList" */ '@/views/application/grant/grantNoticeList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/grantNoticeDetail/:id',
            name: 'grantNoticeDetail',
            component: () =>
                import ( /* webpackChunkName: "grantNoticeDetail" */ '@/views/application/grant/grantNoticeDetail.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/task',
            name: 'task',
            component: () =>
                import ( /* webpackChunkName: "task" */ '@/views/task/task.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/apartemntSafety',
            name: 'apartemntSafety',
            component: () =>
                import ( /* webpackChunkName: "apartmentSafety" */ '@/views/application/apartment/apartmentSafety.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/apartemntVisitor',
            name: 'apartemntVisitor',
            component: () =>
                import ( /* webpackChunkName: "apartmentVisitor" */ '@/views/application/apartment/apartmentVisitor.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/classList',
            name: 'classList',
            component: () =>
                import ( /* webpackChunkName: "classList" */ '@/views/application/newStuReview/classList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/studentList',
            name: 'studentList',
            component: () =>
                import ( /* webpackChunkName: "studentList" */ '@/views/application/newStuReview/studentList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/personInfo',
            name: 'personInfo',
            component: () =>
                import ( /* webpackChunkName: "personInfo" */ '@/views/application/newStuReview/personInfo.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/completeInfo',
            name: 'completeInfo',
            component: () =>
                import ( /* webpackChunkName: "completeInfo" */ '@/views/application/completeInfo/completeInfo.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replace',
            name: 'replace',
            component: () =>
                import ( /* webpackChunkName: "replace" */ '@/views/application/replace/replace.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replaceHistory',
            name: 'replaceHistory',
            component: () =>
                import ( /* webpackChunkName: "replaceHistory" */ '@/views/application/replace/replaceHistory.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replaceDetail',
            name: 'replaceDetail',
            component: () =>
                import ( /* webpackChunkName: "replaceDetail" */ '@/views/application/replace/replaceDetail.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replaceSPfdyList',
            name: 'replaceSPfdyList',
            component: () =>
                import ( /* webpackChunkName: "replaceSPfdyList" */ '@/views/application/replace/replaceSPfdyList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replaceSPyxList',
            name: 'replaceSPyxList',
            component: () =>
                import ( /* webpackChunkName: "replaceSPyxList" */ '@/views/application/replace/replaceSPyxList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replaceSPxscList',
            name: 'replaceSPxscList',
            component: () =>
                import ( /* webpackChunkName: "replaceSPxscList" */ '@/views/application/replace/replaceSPxscList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replaceSP',
            name: 'replaceSP',
            component: () =>
                import ( /* webpackChunkName: "replaceSP" */ '@/views/application/replace/replaceSP.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/agreefdy',
            name: 'agreefdy',
            component: () =>
                import ( /* webpackChunkName: "agreefdy" */ '@/views/application/replace/agreefdy.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/disagreefdy',
            name: 'disagreefdy',
            component: () =>
                import ( /* webpackChunkName: "disagreefdy" */ '@/views/application/replace/disagreefdy.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replaceSPyx',
            name: 'replaceSPyx',
            component: () =>
                import ( /* webpackChunkName: "replaceSPyx" */ '@/views/application/replace/replaceSPyx.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/agreeyx',
            name: 'agreeyx',
            component: () =>
                import ( /* webpackChunkName: "agreeyx" */ '@/views/application/replace/agreeyx.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/disagreeyx',
            name: 'disagreeyx',
            component: () =>
                import ( /* webpackChunkName: "disagreeyx" */ '@/views/application/replace/disagreeyx.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/replaceSPxsc',
            name: 'replaceSPxsc',
            component: () =>
                import ( /* webpackChunkName: "replaceSPxsc" */ '@/views/application/replace/replaceSPxsc.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/agreexsc',
            name: 'agreexsc',
            component: () =>
                import ( /* webpackChunkName: "agreexsc" */ '@/views/application/replace/agreexsc.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/disagreexsc',
            name: 'disagreexsc',
            component: () =>
                import ( /* webpackChunkName: "disagreexsc" */ '@/views/application/replace/disagreexsc.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leave',
            name: 'leave',
            component: () =>
                import ( /* webpackChunkName: "leave" */ '@/views/application/leave/leave.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveHistory',
            name: 'leaveHistory',
            component: () =>
                import ( /* webpackChunkName: "leaveHistory" */ '@/views/application/leave/leaveHistory.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveApproval',
            name: 'leaveApproval',
            component: () =>
                import ( /* webpackChunkName: "leaveApproval" */ '@/views/application/leave/leaveApproval.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveApprovalDept',
            name: 'leaveApprovalDept',
            component: () =>
                import ( /* webpackChunkName: "leaveApprovalDept" */ '@/views/application/leave/leaveApprovalDept.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveApprovalSchool',
            name: 'leaveApprovalSchool',
            component: () =>
                import ( /* webpackChunkName: "leaveApprovalSchool" */ '@/views/application/leave/leaveApprovalSchool.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveCancel',
            name: 'leaveCancel',
            component: () =>
                import ( /* webpackChunkName: "leaveCancel" */ '@/views/application/leave/leaveCancel.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveDetail',
            name: 'leaveDetail',
            component: () =>
                import ( /* webpackChunkName: "leaveDetail" */ '@/views/application/leave/leaveDetail.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveOption',
            name: 'leaveOption',
            component: () =>
                import ( /* webpackChunkName: "leaveOption" */ '@/views/application/leave/leaveOption.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveBacklog',
            name: 'leaveBacklog',
            component: () =>
                import ( /* webpackChunkName: "leaveBacklog" */ '@/views/application/leave/leaveBacklog.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/leaveCancelList',
            name: 'leaveCancelList',
            component: () =>
                import ( /* webpackChunkName: "leaveCancelList" */ '@/views/application/leave/leaveCancelList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/workPlace',
            name: 'workPlace',
            component: () =>
                import ( /* webpackChunkName: "workPlace" */ '@/views/application/work/workPlace.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/workProtocol',
            name: 'workProtocol',
            component: () =>
                import ( /* webpackChunkName: "workProtocol" */ '@/views/application/work/workProtocol.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/workProtocolCancel',
            name: 'workProtocolCancel',
            component: () =>
                import ( /* webpackChunkName: "workProtocolCancel" */ '@/views/application/work/workProtocolCancel.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/onlineBooking',
            name: 'onlineBooking',
            component: () =>
                import ( /* webpackChunkName: "onlineBooking" */ '@/views/application/health/onlineBooking.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/stuList',
            name: 'stuList',
            component: () =>
                import ( /* webpackChunkName: "stuList" */ '@/views/application/health/stuList.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/record',
            name: 'record',
            component: () =>
                import ( /* webpackChunkName: "record" */ '@/views/application/health/record.vue'),
            meta: { webview, tabBar: false },
        },
        {
            path: '/baseCompInfoStu',
            name: 'baseCompInfoStu',
            component: () =>
                import ( /* webpackChunkName: "data" */ '@/views/mine/compInfo/baseCompInfoStu.vue'),
            meta: { webview, tabBar: true },
        },
        {
            path: '/baseCompInfoTea',
            name: 'baseCompInfoTea',
            component: () =>
                import ( /* webpackChunkName: "data" */ '@/views/mine/compInfo/baseCompInfoTea.vue'),
            meta: { webview, tabBar: true },
        },
    ],
});