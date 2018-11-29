import request from '@/utils/request';

/**
 * 获取奖助公示列表
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function fetchNoticeList() {
  return request({
    method: 'put',
    url: '/grant/aidMobile/read/getStuPubTypes',
    data: {},
  });
}
/**
 * 获取奖助公示详情
 * @param  {[string]} name [名称]
 * @param  {[string]} planId [标识符]
 * @return {[type]}        [description]
 */
export function fetchNoticeDetail(data) {
  return request({
    method: 'put',
    url: '/grant/aidMobile/read/selectMobleStuPubTypesAndName',
    data,
  });
}
