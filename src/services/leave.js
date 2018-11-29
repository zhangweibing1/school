import request from '@/utils/request';

/**
 * 学生请假/审批
 * @param  {[type]} schoolId [description]
 * @param  {[type]} schoolName [description]
 * @param  {[type]} deptId [description]
 * @param  {[type]} deptName [description]
 * @param  {[type]} professionId [description]
 * @param  {[type]} professionName [description]
 * @param  {[type]} classId [description]
 * @param  {[type]} className [description]
 * @param  {[type]} userName [description]
 * @param  {[type]} userId [description]
 * @param  {[type]} startTime [description]
 * @param  {[type]} endTime [description]
 * @param  {[type]} leaveDay [description]
 * @param  {[type]} leaveReason [description]
 * @param  {[type]} leaveTypeCode [description]
 * @param  {[type]} leaveTypeText [description]
 * @param  {[type]} photo [description]
 * @param  {[type]} isAdditional 是否补假(提交时间＞请假开始时间，为补假 提交时间＜请假开始时间，为正常 0正常1补假)
 * @param  {[type]} applyOption 审核意见(json格式) [{"bh":"1","userName":"小明",
 * "operator":"提交请假","operatorTime":"2018-10-12 12:20"}]
 * @return
 */
export function getLeave(data) {
  return request({
    method: 'post',
    url: '/api/mobileDailyStuLeave',
    data,
  });
}

/**
 * 学生请假详情
 * @param  {[type]} id [description]
 * @return
 */
export function getLeaveDetail(data = {}) {
  return request({
    method: 'put',
    url: '/api/mobileDailyStuLeave/read/getDetail',
    data,
  });
}

/**
 * 学生请假查询
 * @param  {[type]} params [description]
 * @return
 */
export function getLeaveList(data = {}) {
  return request({
    method: 'put',
    url: '/api/mobileDailyStuLeave/read/list',
    data,
  });
}

/**
 * 学生信息
 * @param  {[type]} params [description]
 * @return
 */
export function getUser(data) {
  return request({
    method: 'put',
    url: '/api/userStuStatus/read/findUserPage',
    data,
  });
}

/**
 * 请假类型2
 * @param  {[type]} params [description]
 * @return
 */
export function getLeaveType() {
  return request({
    method: 'put',
    url: '/api/mobileDic/read/dic',
    data: { type: 'QJLX' },
  });
}

/**
 * 请假待办理修改为已办理
 * @param  {[string]}  baId  [实体id]
 * @return {[type]}         [description]
 */
export function changeTodo(data = {}) {
  return request({
    method: 'post',
    url: '/api/mobileDailyStuLeave/read/updateBaN',
    data,
  });
}
