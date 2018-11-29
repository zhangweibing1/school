import request from '@/utils/request';


/**
 * 根据流程名称获取流程定义信息
 * @param {*} data          []
 * *@return {[type]}        [description]
 */
export function information(data = {}) {
  return request({
    method: 'put',
    url: '/workflow/wfProcess/getLastedProcess',
    data,
  });
}
/**
 * 流程启动及执行
 * @param {*} data []
 */
export function start(data = {}) {
  return request({
    method: 'post',
    url: '/workflow/wfProcess/excute',
    data,
  });
}
/**
 * 根据流程实例Id查看流程是否执行完毕
 * @param {*} data []
 */
export function orderIsComplete(data = {}) {
  return request({
    method: 'put',
    url: '/workflow/wfOrder/orderIsComplete',
    data,
  });
}

/**
 * 会议室申请
 * @param  {[type]} params [description]
 */
export function applyForSubmit(data = {}) {
  return request({
    method: 'post',
    url: '/OA/hyglRoomApply',
    data,
  });
}
/**
 * 我的会议室申请
 * @param {*} data []
 */
export function myApplyFor(data = {}) {
  return request({
    method: 'put',
    url: '/OA/hyglRoomApply/read/list',
    data,
  });
}
/**
 * 会议室详情/会议室审批
 * @param {[string]} id [标识符]
 */
export function applyForSP(data = {}) {
  return request({
    method: 'put',
    url: '/OA/hyglRoomApply/read/detail',
    data,
  });
}
/**
 * 选择会议室
 * @param {*} data []
 */
export function selectRoom(data = {}) {
  return request({
    method: 'put',
    url: '/OA/hyglRoom/read/queryNoUseRoom',
    data,
  });
}
