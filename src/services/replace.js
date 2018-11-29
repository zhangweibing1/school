import request from '@/utils/request';

/**
 * 查询证件类型
 * @param  {[string]}         []
 * @return {[type]}         [description]
 */
export function cardType() {
  return request({
    method: 'put',
    url: '/api/mobileDailyStuIdtype/read/AllList',
    data: {},
  });
}
/**
 * 证件补办申请
 * @param  {[string]}         []
 * @return {[type]}         [description]
 */
export function submitReplace(data) {
  return request({
    method: 'post',
    url: '/api/mobileDailyStuReplace/read/updateStuReplace',
    data,
  });
}
/**
 * 证件补办历史查询
 * @param  {[string]}  userId  [登录人id]
 * @return {[type]}         [description]
 */
export function replaceHistory(data) {
  return request({
    method: 'put',
    url: '/api/mobileDailyStuReplace/read/list',
    data,
  });
}
/**
 * 证件补办详情
 * @param  {[string]}         []
 * @return {[type]}         [description]
 */
export function replaceDetail(data = {}) {
  return request({
    method: 'put',
    url: '/api/mobileDailyStuReplace/read/detail',
    data,
  });
}
/**
 * 证件补办审批
 * @param  {[string]}   applyState   [0学生提交1辅导员审核2院系审核3学生处审核8不通过]
 * @return {[type]}         [description]
 */
export function replaceSP(data) {
  return request({
    method: 'post',
    url: '/api/dailyStuReplace/read/updateExamineStuReplace',
    data,
  });
}
/**
 * 证件补办未审批列表查询
 * @param  {[string]}  applyStateone  [班主任0]
 * @param  {[string]}  applyStatetwo  [院系1]
 * @param  {[string]}  applyStatethree  [学生处2]
 * @return {[type]}         [description]
 */
export function replaceList(data) {
  return request({
    method: 'put',
    url: '/api/mobileDailyStuReplace/read/queryReplace',
    data,
  });
}

/**
 * 证件补办待办理修改为已办理
 * @param  {[string]}  baId  [实体id]
 * @return {[type]}         [description]
 */
export function changeTodo(data = {}) {
  return request({
    method: 'post',
    url: '/api/mobileDailyStuReplace/read/updateBaN',
    data,
  });
}
