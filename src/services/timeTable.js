import request from '@/utils/request';


/**
 * 忘记密码
 * @param  {[type]} userId
 */
export function getMyTimeTable(data) {
  return request({
    method: 'put',
    url: '/edu/userKbMobile/read/queryUserKb',
    data,
  });
}
