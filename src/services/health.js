import request from '@/utils/request';

/**
 * 在线预约学生列表
 * @param  {[string]} stuId [当前登录人id]
 * @return {[type]}         [description]
 */
export function getStuOnLine(data) {
  return request({
    method: 'put',
    url: '/api/mobileMindhealthyPlan/read/getStuOnLine',
    data,
  });
}

/**
 * 在线预约时间地址
 * @param  {[string]} type: "dutyTime" [当前登录人id]
 * @return {[type]}         [description]
 */
export function dutyTime(data) {
  return request({
    method: 'put',
    url: '/api/mobileDic/get/mindhealthy',
    data,
  });
}

/**
 * 在线预约学生列表
 * @param  {[string]} stuId [当前登录人id]
 * @return {[type]}         [description]
 */
export function stuInfo(data) {
  return request({
    method: 'put',
    url: '/api/mobileSysUser/read/selectAllStu',
    data,
  });
}

/**
 * 学生点击预约按钮添加一条坐诊记录
 * @param  {[string]} planId  [选择的对象的id]
 * @param  {[string]} schoolId  [校区标识]
 * @param  {[string]} deptId  [院系标识]
 * @param  {[string]} deptName  [院系名称]
 * @param  {[string]} professionId  [专业标识]
 * @param  {[string]} professionName  [专业标识]
 * @param  {[string]} classId  [班级标识]
 * @param  {[string]} className  [班级名称]
 * @param  {[string]} gradeId  [年级标识]
 * @param  {[string]} gradeName  [年级名称]
 * @param  {[string]} stuId  [学生标识]
 * @param  {[string]} stuName  [学生名称]
 * @param  {[string]} stuSexCode  [性别code（1男2女）]
 * @param  {[string]} stuSexText  [性别Text（1男2女）]
 * @param  {[string]} appointDurationCode  [预约时段code]
 * @param  {[string]} appointDurationText  [预约时段值]
 * @param  {[string]} isAppoint  [预约状态(0未约1已约2预约取消)]
 * @return {[type]}         [description]
 */
export function addRecord(data) {
  return request({
    method: 'post',
    url: '/api/moblieMindhealthyAppointment',
    data,
  });
}

/**
 * 心理咨询师查询预约学生
 * @param  {[string]}  []
 * @return {[type]}         [description]
 */
export function appointStu(data = {}) {
  return request({
    method: 'put',
    url: '/api/moblieMindhealthyAppointment/read/list',
    data,
  });
}

/**
 * 确认来诊 / 取消预约
 * @param  {[string]} id [确认来诊，取消预约  都有参数 id ]
 * @param  {[string]} isComing  [确认来诊 isComing = 1]
 * @param  {[string]} isAppoint  [取消预约 isAppoint  = 1]
 * @return {[type]}         [description]
 */
export function confirmAndCancel(data) {
  return request({
    method: 'post',
    url: '/api/moblieMindhealthyAppointment/update/updateStuMindhealthyAppointment',
    data,
  });
}
/**
 * 心理疾病列表
 * @param  {[string]} type:"mindillness" []
 * @return {[type]}         [description]
 */
export function illnessList(data) {
  return request({
    method: 'put',
    url: '/api/mobileDic/read/list',
    data,
  });
}

/**
 * 调用极光推送
 * @param  {[type]} userId [老师页面为学生userId，学生页面为老师userId]
 * @param  {[type]} mk [xljk]
 * @param  {[type]} message [description]
 * @return {[type]}        [description]
 */
export function jPush(data) {
  return request({
    method: 'put',
    url: '/api/mobileJiGuangController/save/getUserId',
    data,
  });
}
