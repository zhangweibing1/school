// import { login, getUserInfo } from '@/services/api';
// import { login } from '@/services/api';


const state = {
  tabbarVisible: false,
  token: null,
  userInfo: null,
  menus: null,
  // sftpPath: 'http://47.92.204.199:8000/',
  sftpPath: 'http://192.168.20.31:8000/',
  // sftpPath: 'http://192.168.98.12:8000/',
};

const getters = {
  tabbarVisible: state => state.tabbarVisible,
  userInfo: state => state.userInfo,
};

const mutations = {
  SET_TABBAR_VISIBLE(state, payload) {
    state.tabbarVisible = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  SET_USER_INFO(state, payload) {
    state.userInfo = payload;
  },
  SET_MENU(state, payload) {
    state.menus = payload;
  },
};

const actions = {
  showTabbar({ commit }) {
    commit('SET_TABBAR_VISIBLE', true);
  },
  hideTabbar({ commit }) {
    commit('SET_TABBAR_VISIBLE', false);
  },
  setToken({ commit }, payload) {
    commit('SET_TOKEN', payload);
  },
  setUserInfo({ commit }, payload) {
    commit('SET_USER_INFO', payload);
  },
  setMenu({ commit }, payload) {
    commit('SET_MENU', payload);
  },
  // async getUserInfo({ commit }, payload) {
  //   if (process.env.NODE_ENV === 'production') {
  //     window.overWatch.getUserInfo()
  //       .then((res) => {
  //         commit('SET_TOKEN', res.token);
  //         window.localStorage.setItem('token', res.token);
  //         commit('SET_USER_INFO', res.data);
  //       });
  //   } else {
  //     // 交校
  //     // const { __vt_param__ } = await login(payload);
  //     // commit('SET_TOKEN', __vt_param__);
  //     // window.localStorage.setItem('token', __vt_param__);
  //     // const { data } = await getUserInfo(__vt_param__);
  //     // commit('SET_USER_INFO', data);
  //     // 财专
  //     login(payload).then((resp) => {
  //       commit('SET_TOKEN', resp.data.accessToken);
  //       commit('SET_USER_INFO', resp.data.user);
  //       commit('SET_MENU', resp.data.menus);
  //       window.localStorage.setItem('accessToken', resp.data.accessToken);
  //     });
  //   }
  // },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
