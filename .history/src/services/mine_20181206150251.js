import request from '@/utils/request';

/**
 * 获取验证码
 * @param  {[type]} typeText "修改密码验证码"
 * @param  {[type]} type 3
 * @param  {[type]} phone 手机号
 * @return {[type]}      [description]
 */
export function getCode(data) {
    return request({
        method: 'post',
        url: '/api/loginBeforeMobile/send/code',
        data,
    });
}

/**
 * 忘记密码
 * @param  {[type]} userId
 * @param  {[type]} safecode
 * @param  {[type]} phone 手机号
 * @param  {[type]} passWord
 * @return {[type]}      [description]
 */
export function setPsd(data) {
    return request({
        method: 'post',
        url: '/api/loginBeforeMobile/update/passwordByCode',
        data,
    });
}

/**
 * 修改密码
 * @param  {[type]} loginId
 * @param  {[type]} oldPassword
 * @param  {[type]} password
 * @return {[type]}      [description]
 */
export function setNewPsd(data) {
    return request({
        method: 'post',
        url: '/api/sysUserMobile/update/password',
        data,
    });
}

export function getMySQ(data) {
    return request({
        method: 'post',
        url: '/api/v2/sysMysqMobile/read/getmysq',
        data,
    });
}
/**
 * 提交反馈
 * @param {} data 
 */
export function submitFeedBack(data) {
    return request({
        method: 'put',
        url: '/api/mobileFeedBack/write/saveFeedBack/',
        data,
    });
}

/**
 * 提交密保结果
 * @param {} data 
 */
export function submitMqData(data) {
    return request({
        method: 'post',
        url: '/api/v2/sysMysqMobile/write/updateMqData/',
        data,
    });
}
/**
 * 根据账号查询密保
 * @param {} data 
 */
export function queryMqByAccount(data) {
    return request({
        method: 'post',
        url: '/api/v2/sysMysqMobile/read/queryMqByAccount',
        '/api/v2/sysMysqMobile'
        data,
    });
}