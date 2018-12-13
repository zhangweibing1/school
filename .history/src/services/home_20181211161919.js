import request from '@/utils/request';

/**
 * 获取通知公告与校园新闻
 * @param  {[string]} id
 * @return {[type]}         [description]
 */
export function loadBaNoticeAndNew(data = {}) {
  return request({
    method: 'put',
    url: '/api/baNoticeMobile/read/baNoticeAndNews',
    data,
  });
}
/**
 * 公告信息详情
 * @param {} data 
 */
export function loadBaNoticeAndNewDetail(data = {}) {
  return request({
    method: 'put',
    url: '/api/baNoticeMobile/read/baNoticeAndNewsDetail',
    data,
  });
}
