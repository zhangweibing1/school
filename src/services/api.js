import request from '@/utils/request';

/**
 * 登录
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
// v1
export function login(data) {
  return request({
    method: 'post',
    url: '/api/app/login',
    data,
  });
}
// v2
// export function login(data) {
//   return request({
//     method: 'post',
//     url: '/api/loginsso/v2/dologin',
//     data,
//   });
// }

/**
 * 获取用户信息
 * @return {[type]} [description]
 */
export function getUserInfo() {
  return request({
    method: 'put',
    url: '/api/sysUserMobile/read/getCurrUserDetail',
    data: {},
  });
}

/**
 * 获取用户信息
 * @param  {[type]} id 当前用户id
 * @return {[type]} [description]
 */
export function getUser(data) {
  return request({
    method: 'put',
    url: '/api/sysUserMobile/read/readStu',
    data,
  });
}
/**
 * 查询假数据
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function getFakeList(params) {
  return request({
    method: 'get',
    url: '/rest/v1/fake_list',
    params,
  });
}

/**
 * 上传图片文件
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function uploadFile(data, config) {
  return request({
    method: 'post',
    url: '/api/fileInfoMobile/fileInfo',
    headers: "{'Content-Type':'multipart/form-data'}",
    config,
    data,
  });
}
/**
 * 保存假数据
 * @param  {Object} data [description]
 * @return {[type]}      [description]
 */
export function saveFakeData(data = {}) {
  return request({
    method: 'post',
    url: '/rest/v1/save_fake',
    data,
  });
}

/**
 * 根据id获取请假信息
 * @param  {Object} data [description]
 * @return {[type]}      [description]
 */
export function fetchLeaveInfoById(data = {}) {
  return request({
    method: 'post',
    url: '/rest/v1/leave',
    data,
  });
}

/**
 * 获取通知列表
 * @param  {Object} params [description]
 * @return {[type]}        [description]
 */
export function fetchMessage(params = {}) {
  return request({
    method: 'get',
    url: '/rest/v1/message_list',
    params,
  });
}
/**
 * 获取信息列表
 * @param  {Object} params [description]
 * @return {[type]}        [description]
 */
export function fetchInformation(params = {}) {
  return request({
    method: 'get',
    url: '/rest/v1/infomation_list',
    params,
  });
}
/**
 * 根据id获取文章信息
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function fetchArticleById(params) {
  return request({
    method: 'get',
    url: '/rest/v1/article',
    params,
  });
}

/**
 * 调取数据菜单
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function getDataMenus() {
  return request({
    method: 'put',
    url: '/api/v2/loginMobile/read/dicListAndMenus',
    data: { type: 'FWCj' },
  });
}
/**
 * 调取应用菜单
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function getApplyMenus() {
  return request({
    method: 'put',
    url: '/api/v2/loginMobile/read/dicListAndMenus',
    data: { type: 'FWLX' },
  });
}
