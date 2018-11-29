import request from '@/utils/request';

/**
 * 首页消息、资讯、待办
 * @param  {[string]} userId [当前登录人id]
 * @return {[type]}         [description]
 */
export function news(data = {}) {
  return request({
    method: 'put',
    url: '/api/v2/loginMobile/read/selectNoticeListByParam',
    data,
  });
}
/**
 * 二级待办
 * @param  {[string]} userId [当前登录人id]
 * @param  {[string]} noticeType [6]
 * @param  {[string]} otherType [1 代办理  2 已办理  3我的发起]
 * @return {[type]}         [description]
 */
export function List(data = {}) {
  return request({
    method: 'put',
    url: '/api/v2/loginMobile/read/queryBaNoticeByParamType',
    data,
  });
}
/**
 * 修改提醒为已读
 * @param  {[string]} userId [当前登录人id]
 * @param  {[string]} noticeType [6]
 * @param  {[string]} otherType [1 代办理  2 已办理  3我的发起]
 * @return {[type]}         [description]
 */
export function Read(data = {}) {
  return request({
    method: 'post',
    url: '/api/v2/loginMobile/write/updateBaRemindForIsRead',
    data,
  });
}
/**
 * 修改提醒为已读
 * @param  {[string]} id
 * @return {[type]}         [description]
 */
export function newsDetail(data = {}) {
  return request({
    method: 'put',
    url: '/api/v2/loginMobile/get/getBaNoticeDetailById',
    data,
  });
}
