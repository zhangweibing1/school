import request from '@/utils/request';

/**
 * 根据班主任工号获取所带班级列表
 * @param  {[string]} BZRGH [班主任工号]
 * @return {[type]}         [description]
 */
export function classList(data = {}) {
  return request({
    method: 'put',
    url: '/api/classInfoMobile/read/queryTeaClass',
    data,
  });
}
/**
 * 根据班级id和状态获取该状态下学生列表
 * 根据点击学生的id获取学生信息
 * @param  {[string]} classId  [班级id]
 * @param  {[string]} checkStatus [状态]
 * @return {[type]}         [description]
 */
export function studentList(data = {}) {
  return request({
    method: 'put',
    url: '/api/stuReviewMobile/read/SelectfindUserList',
    // url: '/api/stuReviewMobile/read/findUserPage',
    data,
  });
}
/**
 * 提交
 * @param  {[string]}     []
 * @return {[type]}       [description]
 */
export function submitStu(data = {}) {
  return request({
    method: 'post',
    url: '/api/stuReviewMobile/read/updateMobileStu',
    data,
  });
}
/**
 * 文件上传
 * @param  {[string]}     []
 * @return {[type]}       [description]
 */
export function file(data) {
  return request({
    method: 'post',
    url: '/api/fileInfoMobile/fileInfoList',
    headers: "{'Content-Type':'multipart/form-data'}",
    data,
  });
}
