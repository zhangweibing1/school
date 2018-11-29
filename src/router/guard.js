import router from './router';
import store from '../store/';
import { getThreeProtocol } from '../services/work';
// import { login } from '../services/api';

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.webview) {
    const url = `${window.location.origin}/#/${to.path}`;
    window.overWatch.navigateTo(url);
    next(false);
  }
  if (to.name === 'workProtocol') {
    const user = {
      userId: store.state.system.userInfo.id,
    };
    getThreeProtocol(user).then(({ data }) => {
      console.log(data);
      next(false);
    }).catch(() => {
      this.$toast('服务器忙');
      next(false);
    });
  }

  if (to.meta && to.meta.tabBar) {
    store.dispatch('system/showTabbar', {});
  } else {
    store.dispatch('system/hideTabbar', {});
  }
  // APP内嵌截取url字符串添加token
  // if (!window.localStorage.getItem('token')) {
  // const navurl = window.location.href;
  // const navurl = 'http://192.168.10.92:8080//#/grantNoticeList?token=105284917404157542720181018170938';
  // const url = navurl.split('?')[1];
  // const appdata = navurl.split('?');
  // const tokenData = appdata[1].split('=')[1];
  // window.localStorage.setItem('token', tokenData);
  // const page = appdata[0].split('=')[1];
  // router.push({ name: page });
  // }
  // app集成
  // const appJSObject = window.AppJSObject;
  // // 交校
  // const token = appJSObject.getToken();
  // window.localStorage.setItem('token', token);
  // 财专
  // v1
  // const accessToken = appJSObject.getAccessToken();
  // window.localStorage.setItem('accessToken', accessToken);
  // const userInfo = appJSObject.getUserInfo();
  // store.dispatch('system/setUserInfo', userInfo);
  // v2
  // const accessToken = appJSObject.getAccessToken();
  // window.localStorage.setItem('accessToken', accessToken);
  // const userInfo = appJSObject.getUserInfo();
  // store.dispatch('system/setUserInfo', JSON.parse(userInfo));

  // const loginForm = {
  //   account: appJSObject.getUserAccount(),
  //   password: appJSObject.getUserPassWord(),
  // };
  // login(loginForm).then((resp) => {
  //   store.dispatch('system/setToken', resp.data.accessToken);
  //   store.dispatch('system/setUserInfo', resp.data.user);
  //   store.dispatch('system/setMenu', resp.data.menus);
  //   window.localStorage.setItem('accessToken', resp.data.accessToken);
  // });
  // setTimeout(() => {
  //   next();
  // }, 1500);
  next();
});
