import request from '@/utils/request';

/**
 * 生源地上报
 * @param  userName      学生名字
 * @param  rYH           学号
 * @param  provinceId    省ID
 * @param  provinceName  省名称
 * @param  cityId        市ID
 * @param  cityName      市名称
 * @param  countyId      县ID
 * @param  countyName    县名称
 * @return {[type]}         [description]
 */
export function updatePlace(data) {
    return request({
        method: 'post',
        url: '/api/mobileEmployBirthplaceApply/read/update',
        data,
    });
}
/**
 * 申请三方协议
 * @param  unitName   单位名称
 * @param  unitNature   单位性质
 * @param  unitNatureCode   单位性质码
 * @param  talentMarket   人才市场
 * @param  provinceId   单位所在省标识
 * @param  provinceName   单位所在省名称
 * @param  cityId   单位所在市标识
 * @param  cityName   单位所在市名称
 * @param  countyId   单位所在区县标识
 * @param  countyName   单位所在区县名称
 * @param  applyResult   申请理由
 * @return {[type]}         [description]
 */
export function updateProtocol(data) {
    return request({
        method: 'post',
        url: '/api/mobileEmployThreeProtocol/read/update',
        data,
    });
}
/**
 * 撤销三方协议
 * @param  backResult   撤销理由
 * @param  diagram   撤销照片
 * @return {[type]}         [description]
 */
export function updateRevoke(data) {
    return request({
        method: 'post',
        url: '/api/mobileEmployThreeProtocol/read/updateRevoke',
        data,
    });
}
/**
 * 判断学生三方协议状态
 * @param  userId
 * @return {[type]}         [description]
 */
export function getThreeProtocol(data) {
    return request({
        method: 'put',
        url: '/apimobileEmployThreeProtocol/read/getThreeProtocol',
        data,
    });
}

/**
 * 单位性质
 * @param  {[type]} params [description]
 * @return
 */
export function getWorkType() {
    return request({
        method: 'put',
        url: '/api/mobileDic/read/dic',
        data: { type: 'companyKind' },
    });
}