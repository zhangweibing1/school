import request from '@/utils/request';

/**
 * 根据当前登录人查询所有校区
 * @param  {[type]} params [description]
 * @return {
    "data": [{
        "cZDH": "",
        "countyCityareainfo": null,
        "createBy": "1",
        "createTime": "2018-10-11 11:26:41",
        "currentSchoolInfo": null,
        "dZXX": "",
        "dwfzrUser": null,
        "enable": "1",
        "fDDBRH": "",
        "fRZSH": "",
        "id": "1050226149333086211",
        "jXNY": null,
        "keyword": "",
        "lSYG": "",
        "lXDH": "",
        "name": "",
        "organizationId": "1050226150427799554",
        "parent": null,
        "parentId": "0",
        "provinceCityareainfo": null,
        "remark": "",
        "schoolType": "3",
        "schoolTypeText": "",
        "sysCityareainfo": null,
        "sysUser": null,
        "type": "01",
        "typeText": "学校",
        "updateBy": "1",
        "updateTime": "2018-10-11 11:26:41",
        "userId": "1050226149333086213",
        "villageCityareainfo": null,
        "xQR": "",
        "xXDM": "01",
        "xXDZ": "",
        "xXJBZM": "811",
        "xXMC": "山西财政税务专科学校",
        "xXYWMC": "",
        "xXYZBM": "",
        "xXZGBMM": "811",
        "xZXM": "李媛",
        "zYDZ": "",
        "zZJGM": ""
    }],
    "iTotalRecords": "1",
    "iTotalDisplayRecords": "1",
    "httpCode": "200",
    "msg": "请求成功",
    "timestamp": "1540541576456"
}
 */
export function getCurrSchoolInfoList() {
  return request({
    method: 'put',
    url: '/api/mobileSchoolInfo/read/getCurrSchoolInfoList',
    data: {},
  });
}
/**
 * 查询公寓集合
 * @param  {[type]} schoolId 去上面选择的校区id
 * @return {
    "data": [{
        "bH": "1",
        "createBy": "1050226149333086213",
        "createTime": "2018-10-23 10:13:25",
        "id": "1054556366504316929",
        "jzwcs": "5",
        "jzwdz": "知春路角",
        "keyword": "",
        "mC": "学生公寓1#",
        "managerId": "1054567372433510402",
        "managerUserName": "",
        "name": "",
        "remark": "",
        "schoolArea": null,
        "schoolDepartment": null,
        "schoolFloor": null,
        "schoolId": "1050226149333086211",
        "schoolInfo": null,
        "sysUser": null,
        "syzkm": "3",
        "syzktext": "空闲或者未使用",
        "updateBy": "1050226149333086213",
        "updateTime": "2018-10-23 10:13:25",
        "useSex": "",
        "useSexText": "",
        "uses": "5",
        "usesText": "宿舍"
    }],
    "iTotalRecords": "2",
    "iTotalDisplayRecords": "2",
    "httpCode": "200",
    "msg": "请求成功",
    "timestamp": "1540541782173"
}
 */
export function selectGongYuBuild(schoolId) {
  return request({
    method: 'put',
    url: '/api/schoolBuilding/read/selectGongYuBuild',
    data: { schoolId },
  });
}
/**
 * 查询楼层集合
 * @param  {[type]} buildingId 取上面选择的公寓id
 * @return {
    "data": [{
        "bh": "1",
        "schoolId": "1050226149333086211",
        "name": "1层",
        "id": "1054556366659506178",
        "isLeaf": "1"
    }, {
        "bh": "2",
        "schoolId": "1050226149333086211",
        "name": "2层",
        "id": "1054556366659506179",
        "isLeaf": "1"
    }, {
        "bh": "3",
        "schoolId": "1050226149333086211",
        "name": "3层",
        "id": "1054556366659506180",
        "isLeaf": "1"
    }, {
        "bh": "4",
        "schoolId": "1050226149333086211",
        "name": "4层",
        "id": "1054556366659506181",
        "isLeaf": "1"
    }, {
        "bh": "5",
        "schoolId": "1050226149333086211",
        "name": "5层",
        "id": "1054556366659506182",
        "isLeaf": "1"
    }, {
        "bh": "6",
        "schoolId": "1050226149333086211",
        "name": "6层",
        "id": "1054619802902753282",
        "isLeaf": "1"
    }, {
        "bh": "7",
        "schoolId": "1050226149333086211",
        "name": "7层",
        "id": "1054620168784474114",
        "isLeaf": "1"
    }, {
        "bh": "8",
        "schoolId": "1050226149333086211",
        "name": "层",
        "id": "1054639242679709698",
        "isLeaf": "1"
    }],
    "iTotalRecords": "8",
    "iTotalDisplayRecords": "8",
    "httpCode": "200",
    "msg": "请求成功",
    "timestamp": "1540541832642"
}
 */
export function asynchronousLoadingFloor(buildingId) {
  return request({
    method: 'put',
    url: '/api/mobileSchoolFloor/read/asynchronousLoadingFloor',
    data: { buildingId },
  });
}
/**
 * 查询宿舍集合
 * @param  {[type]} params 取上面的楼层id
 * @return {
    "data": [{
        "bH": "115",
        "bedInfoList": null,
        "countParam": null,
        "createBy": "1050226149333086213",
        "createTime": "2018-10-23 10:13:25",
        "enable": "1",
        "facility": "0",
        "facilityText": "",
        "floorId": "1054556366659506178",
        "id": "1054556366663700494",
        "keyword": "",
        "mC": "115室",
        "name": "115室",
        "remark": "",
        "schoolBuilding": null,
        "schoolFloor": {
            "bH": "1",
            "buildingId": "1054556366504316929",
            "createBy": "1050226149333086213",
            "createTime": "2018-10-23 10:13:25",
            "enable": "1",
            "fjs": "15",
            "id": "1054556366659506178",
            "jZWCS": "",
            "keyword": "",
            "mC": "1层",
            "name": "1层",
            "qh": "",
            "remark": "",
            "schoolBuilding": {
                "bH": "1",
                "createBy": "1050226149333086213",
                "createTime": "2018-10-23 10:13:25",
                "id": "1054556366504316929",
                "jzwcs": "5",
                "jzwdz": "知春路角",
                "keyword": "",
                "mC": "学生公寓1#",
                "managerId": "1054567372433510402",
                "managerUserName": "王锦华",
                "name": "学生公寓1#",
                "remark": "",
                "schoolArea": null,
                "schoolDepartment": null,
                "schoolFloor": null,
                "schoolId": "1050226149333086211",
                "schoolInfo": {
                    "cZDH": "",
                    "countyCityareainfo": null,
                    "createBy": "1",
                    "createTime": "2018-10-11 11:26:41",
                    "currentSchoolInfo": null,
                    "dZXX": "",
                    "dwfzrUser": null,
                    "enable": "1",
                    "fDDBRH": "",
                    "fRZSH": "",
                    "id": "1050226149333086211",
                    "jXNY": null,
                    "keyword": "",
                    "lSYG": "",
                    "lXDH": "",
                    "name": "",
                    "organizationId": "1050226150427799554",
                    "parent": null,
                    "parentId": "0",
                    "provinceCityareainfo": null,
                    "remark": "",
                    "schoolType": "3",
                    "schoolTypeText": "",
                    "sysCityareainfo": null,
                    "sysUser": null,
                    "type": "01",
                    "typeText": "学校",
                    "updateBy": "1",
                    "updateTime": "2018-10-11 11:26:41",
                    "userId": "1050226149333086213",
                    "villageCityareainfo": null,
                    "xQR": "",
                    "xXDM": "01",
                    "xXDZ": "",
                    "xXJBZM": "811",
                    "xXMC": "山西财政税务专科学校",
                    "xXYWMC": "",
                    "xXYZBM": "",
                    "xXZGBMM": "811",
                    "xZXM": "李媛",
                    "zYDZ": "",
                    "zZJGM": ""
                },
                "sysUser": null,
                "syzkm": "3",
                "syzktext": "空闲或者未使用",
                "updateBy": "1050226149333086213",
                "updateTime": "2018-10-23 10:13:25",
                "useSex": "",
                "useSexText": "",
                "uses": "5",
                "usesText": "宿舍"
            },
            "schoolId": "1050226149333086211",
            "schoolInfo": {
                "cZDH": "",
                "countyCityareainfo": null,
                "createBy": "1",
                "createTime": "2018-10-11 11:26:41",
                "currentSchoolInfo": null,
                "dZXX": "",
                "dwfzrUser": null,
                "enable": "1",
                "fDDBRH": "",
                "fRZSH": "",
                "id": "1050226149333086211",
                "jXNY": null,
                "keyword": "",
                "lSYG": "",
                "lXDH": "",
                "name": "",
                "organizationId": "1050226150427799554",
                "parent": null,
                "parentId": "0",
                "provinceCityareainfo": null,
                "remark": "",
                "schoolType": "3",
                "schoolTypeText": "",
                "sysCityareainfo": null,
                "sysUser": null,
                "type": "01",
                "typeText": "学校",
                "updateBy": "1",
                "updateTime": "2018-10-11 11:26:41",
                "userId": "1050226149333086213",
                "villageCityareainfo": null,
                "xQR": "",
                "xXDM": "01",
                "xXDZ": "",
                "xXJBZM": "811",
                "xXMC": "山西财政税务专科学校",
                "xXYWMC": "",
                "xXYZBM": "",
                "xXZGBMM": "811",
                "xZXM": "李媛",
                "zYDZ": "",
                "zZJGM": ""
            },
            "schoolRoom": null,
            "sortNo": "1",
            "updateBy": "1050226149333086213",
            "updateTime": "2018-10-23 10:13:25",
            "useSex": "",
            "useSexText": "",
            "uses": "5",
            "usesText": "宿舍"
        },
        "schoolId": "1050226149333086211",
        "schoolInfo": {
            "cZDH": "",
            "countyCityareainfo": null,
            "createBy": "1",
            "createTime": "2018-10-11 11:26:41",
            "currentSchoolInfo": null,
            "dZXX": "",
            "dwfzrUser": null,
            "enable": "1",
            "fDDBRH": "",
            "fRZSH": "",
            "id": "1050226149333086211",
            "jXNY": null,
            "keyword": "",
            "lSYG": "",
            "lXDH": "",
            "name": "",
            "organizationId": "1050226150427799554",
            "parent": null,
            "parentId": "0",
            "provinceCityareainfo": null,
            "remark": "",
            "schoolType": "3",
            "schoolTypeText": "",
            "sysCityareainfo": null,
            "sysUser": null,
            "type": "01",
            "typeText": "学校",
            "updateBy": "1",
            "updateTime": "2018-10-11 11:26:41",
            "userId": "1050226149333086213",
            "villageCityareainfo": null,
            "xQR": "",
            "xXDM": "01",
            "xXDZ": "",
            "xXJBZM": "811",
            "xXMC": "山西财政税务专科学校",
            "xXYWMC": "",
            "xXYZBM": "",
            "xXZGBMM": "811",
            "xZXM": "李媛",
            "zYDZ": "",
            "zZJGM": ""
        },
        "sortNo": "15",
        "updateBy": "1050226149333086213",
        "updateTime": "2018-10-23 10:13:25",
        "useSex": "1",
        "useSexText": "男",
        "uses": "5",
        "usesText": "宿舍"
    }],
    "current": "1",
    "size": "20",
    "pages": "1",
    "total": "15",
    "iTotalRecords": "15",
    "iTotalDisplayRecords": "15",
    "httpCode": "200",
    "msg": "请求成功",
    "timestamp": "1540541855978"
}
 */
export function getRooms(floorId) {
  return request({
    method: 'put',
    url: '/api/mobileSchoolRoom/read/asynchronousLoadingRoom',
    data: { floorId },
  });
}
/**
 * 查询宿舍人员集合
 * @param  {[type]} roomId 取上面的宿舍id
 * @return {
    "data": [{
        "bedCode": "01号",
        "bedTypeCode": "0",
        "bedTypeText": "普通",
        "buildName": "",
        "className": "",
        "createTime": "2018-10-25 15:29:52",
        "deptName": "",
        "enable": "1",
        "floolName": "",
        "id": "1034681907612254111",
        "keyword": "",
        "professionName": "",
        "remark": "",
        "roomId": "1054556366659506183",
        "roomName": "101室",
        "schoolId": "1050226149333086211",
        "schoolName": "山西财政税务专科学校",
        "statusCode": "1",
        "statusText": "使用",
        "updateTime": "2018-10-25 15:29:50",
        "userId": "1054304252230221826",
        "userName": "于雪连"
    }, {
        "bedCode": "02号",
        "bedTypeCode": "0",
        "bedTypeText": "普通",
        "buildId": "1054556366504316929",
        "buildName": "学生公寓1#",
        "classId": "1055373653128110081",
        "className": "驾驶1班",
        "createTime": "2018-10-25 15:29:52",
        "deptId": "1054272759000842241",
        "deptName": "财税学院",
        "enable": "1",
        "floolId": "1054556366659506178",
        "floolName": "1层",
        "id": "2034681907612254112",
        "keyword": "",
        "professionId": "1054291580868739074",
        "professionName": "税务",
        "remark": "",
        "roomId": "1054556366659506183",
        "roomName": "101室",
        "schoolId": "1050226149333086211",
        "schoolName": "山西财政税务专科学校",
        "statusCode": "1",
        "statusText": "使用",
        "updateTime": "2018-10-25 15:29:50",
        "userId": "1054304252230221827",
        "userName": "郭晓宇"
    }, {
        "bedCode": "03号",
        "bedTypeCode": "0",
        "bedTypeText": "普通",
        "buildId": "1054556366504316929",
        "buildName": "学生公寓1#",
        "classId": "1055373653128110081",
        "className": "驾驶1班",
        "createTime": "2018-10-25 15:29:52",
        "deptId": "1054272759000842241",
        "deptName": "财税学院",
        "enable": "1",
        "floolId": "1054556366659506178",
        "floolName": "1层",
        "id": "2034681907612254113",
        "keyword": "",
        "professionId": "1054291580868739074",
        "professionName": "税务",
        "remark": "",
        "roomId": "1054556366659506183",
        "roomName": "101室",
        "schoolId": "1050226149333086211",
        "schoolName": "山西财政税务专科学校",
        "statusCode": "1",
        "statusText": "使用",
        "updateTime": "2018-10-25 15:29:50",
        "userId": "1054304252234416129",
        "userName": "李泽夏"
    }, {
        "bedCode": "04号",
        "bedTypeCode": "0",
        "bedTypeText": "普通",
        "buildId": "1054556366504316929",
        "buildName": "学生公寓1#",
        "classId": "1055373653128110081",
        "className": "驾驶1班",
        "createTime": "2018-10-25 15:29:52",
        "deptId": "1054272759000842241",
        "deptName": "财税学院",
        "enable": "1",
        "floolId": "1054556366659506178",
        "floolName": "1层",
        "id": "2034681907612254114",
        "keyword": "",
        "professionId": "1054291580868739074",
        "professionName": "税务",
        "remark": "",
        "roomId": "1054556366659506183",
        "roomName": "101室",
        "schoolId": "1050226149333086211",
        "schoolName": "山西财政税务专科学校",
        "statusCode": "1",
        "statusText": "使用",
        "updateTime": "2018-10-25 15:29:50",
        "userId": "1054304252238610434",
        "userName": "芦万年"
    }, {
        "bedCode": "05号",
        "bedTypeCode": "0",
        "bedTypeText": "普通",
        "buildId": "1054556366504316929",
        "buildName": "学生公寓1#",
        "classId": "1055373653128110081",
        "className": "驾驶1班",
        "createTime": "2018-10-25 15:29:52",
        "deptId": "1054272759000842241",
        "deptName": "财税学院",
        "enable": "1",
        "floolId": "1054556366659506178",
        "floolName": "1层",
        "id": "2034681907612254115",
        "keyword": "",
        "professionId": "1054291580868739074",
        "professionName": "税务",
        "remark": "",
        "roomId": "1054556366659506183",
        "roomName": "101室",
        "schoolId": "1050226149333086211",
        "schoolName": "山西财政税务专科学校",
        "statusCode": "1",
        "statusText": "使用",
        "updateTime": "2018-10-25 15:29:50",
        "userId": "1054304252238610435",
        "userName": "崔娜"
    }, {
        "bedCode": "06号",
        "bedTypeCode": "0",
        "bedTypeText": "普通",
        "buildId": "1054556366504316929",
        "buildName": "学生公寓1#",
        "classId": "1055373653128110081",
        "className": "驾驶1班",
        "createTime": "2018-10-25 15:29:52",
        "deptId": "1054272759000842241",
        "deptName": "财税学院",
        "enable": "1",
        "floolId": "1054556366659506178",
        "floolName": "1层",
        "id": "2034681907612254116",
        "keyword": "",
        "professionId": "1054291580868739074",
        "professionName": "税务",
        "remark": "",
        "roomId": "1054556366659506183",
        "roomName": "101室",
        "schoolId": "1050226149333086211",
        "schoolName": "山西财政税务专科学校",
        "statusCode": "1",
        "statusText": "使用",
        "updateTime": "2018-10-25 15:29:50",
        "userId": "1054304252242804738",
        "userName": "程卓雅"
    }, {
        "bedCode": "07号",
        "bedTypeCode": "0",
        "bedTypeText": "普通",
        "buildId": "1054556366504316929",
        "buildName": "学生公寓1#",
        "classId": "1055373653128110081",
        "className": "驾驶1班",
        "createTime": "2018-10-25 15:29:52",
        "deptId": "1054272759000842241",
        "deptName": "财税学院",
        "enable": "1",
        "floolId": "1054556366659506178",
        "floolName": "1层",
        "id": "2034681907612254117",
        "keyword": "",
        "professionId": "1054291580868739074",
        "professionName": "税务",
        "remark": "",
        "roomId": "1054556366659506183",
        "roomName": "101室",
        "schoolId": "1050226149333086211",
        "schoolName": "山西财政税务专科学校",
        "statusCode": "1",
        "statusText": "使用",
        "updateTime": "2018-10-25 15:29:50",
        "userId": "1054304252242804739",
        "userName": "郭紫琛"
    }, {
        "bedCode": "08号",
        "bedTypeCode": "0",
        "bedTypeText": "普通",
        "buildId": "1054556366504316929",
        "buildName": "学生公寓1#",
        "classId": "1055373653128110081",
        "className": "驾驶1班",
        "createTime": "2018-10-25 15:29:52",
        "deptId": "1054272759000842241",
        "deptName": "财税学院",
        "enable": "1",
        "floolId": "1054556366659506178",
        "floolName": "1层",
        "id": "2034681907612254118",
        "keyword": "",
        "professionId": "1054291580868739074",
        "professionName": "税务",
        "remark": "",
        "roomId": "1054556366659506183",
        "roomName": "101室",
        "schoolId": "1050226149333086211",
        "schoolName": "山西财政税务专科学校",
        "statusCode": "1",
        "statusText": "使用",
        "updateTime": "2018-10-25 15:29:50",
        "userId": "1054304252246999041",
        "userName": "张睿"
    }],
    "total": "8",
    "httpCode": "200",
    "msg": "请求成功",
    "timestamp": "1540541898827"
}
 */
export function selectList(roomId) {
  return request({
    method: 'put',
    url: '/api/mobileNDormBedinfoController/read/selectList',
    data: { roomId },
  });
}
/**
 * 保存访客
 * @param  {[type]} {"schoolId":record.school.id,
                        "stuId":record.stu.userId,
                        "stuName":record.stu.userName,
                        "schoolName":record.school.schoolName,
                        "buildId":record.building.id,
                        "buildName":record.building.mC,
                        "floolId":record.floor.id,
                        "floolName":record.floor.mC,
                        "roomId":record.room.id,
                        "roomName":record.room.mC,
                        "takeGoods":record.takeGoods,
                        "photo":record.picturePath
                    }
 [description]
 * @return {[type]}        [description]
 */
export function getVisitor(data) {
  return request({
    method: 'post',
    url: '/api/mobileDormVisitController',
    data,
  });
}

/**
 * 安全接口类型查询
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function getSecurityType() {
  return request({
    method: 'put',
    url: '/api/mobileDic/read/dic',
    data: { type: 'SSYHLX' },
  });
}
/**
 * 安全接口添加/修改
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function postSecurity(data) {
  return request({
    method: 'post',
    url: '/api/mobileDormSecurityCheck',
    data,
  });
}

/**
 * 调用极光推送
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export function jPush(data) {
  return request({
    method: 'put',
    url: '/api/mobileJiGuangController/save/getUserId',
    data,
  });
}

