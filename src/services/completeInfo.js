import request from '@/utils/request';

/**
 * 查询省市县接口---------交校
 * @param  {[string]}
 * @return {[type]}         [description]

export function areaData(data) {
    return request({
        method: 'put',
        url: '/api/cityareaInfoMobile/read/allList',
        data,
    });
} */
/**
 * 查询省市县接口-----------财专
 * @param  {[string]}
 * @return {[type]}         [description]
 */
export function areaData(data) {
    return request({
        method: 'put',
        url: '/api/cityareaInfoMobile/read/allList',
        data,
    });
}

/**
 * 提交
 * @param  {[string]}
 * @return {[type]}         [description]
 */
export function submitData(data = {}) {
    return request({
        method: 'post',
        url: '/api/sysUserMobile/write/updateUser',
        data,
    });
}

/**
 * 提交
 * @param  {[string]}
 * @return {[type]}         [description]
 */
export function submitTeaData(data = {}) {
    return request({
        method: 'post',
        url: '/api/sysUserMobile/write/updateUser',
        data,
    });
}

/**
 * 查询字典值
 * @param  {[string]}
 * @return {[type]}         [description]
 */
export function Dic() {
    return request({
        method: 'put',
        url: '/api/dicMobile/read/dic/List',
        data: {},
    });
}

/**
 * 查询学生详细信息
 * @param  {[string]} id    [当前登录人id]
 * @return {[type]}         [description]
 */
export function getStuDetail(data = {}) {
    return request({
        method: 'put',
        url: '/api/sysUserMobile/read/readStu',
        data,
    });
}
/**
 * 查询教师详细信息
 * @param  {[string]} id    [当前登录人id]
 * @return {[type]}         [description]
 */
export function getTeaDetail(data = {}) {
    return request({
        method: 'put',
        url: '/api/sysUserMobile/read/queryDetail',
        data,
    });
}