import 'mockjs'
const page_config = {
    sys_role: {
        api:{base:'/member/list/',list:'query'},
        searchItem: [{ type: 'input', label: '角色名称/roleName' }],
        tableColumn: '操作,角色名称/roleName,角色描述/remark,创建人/createdBy,创建时间/createdAt,最近操作人/updatedBy,最近操作时间/updatedAt'.split(',')
    },
    sys_domain: {
        api:{base:'/system/configDomain/',list:'query4Page',batchAdd:'batchAdd',del:'delete'},
        searchItem: [
            { type: 'select_template_1', label: '域名状态' ,param:'domainStatus'},
            { type: 'input', label: '域名地址' ,param:'domain'},
            { type: 'input', label: '创建人',param:'createdBy' }
        ],
        tableColumn: '操作,域名地址/domain,域名状态/domainStatus/op_status,描述说明/domainDesc,创建人/createdBy,创建时间/createdAt,最近操作人/updatedBy,最近操作时间/updatedAt'.split(
            ','
        )
    },
    sys_account: {
        api:{base:'/member/list/',list:'query',export:'export'},    
        searchItem: [
            { type: 'select_template_1', label: '域名状态' },
            { type: 'input', label: '域名地址' },
            { type: 'input', label: '创建人' }
        ],
        tableColumn: '操作,域名地址,域名状态,描述说明,创建人/createdBy,创建时间/createdAt,最近操作人/updatedBy,最近操作时间/updatedAt'.split(
            ','
        )
    },
    sys_login: {
        api:{base:'/system/userLoginLog/',list:'query4Page',export:'export'},
        searchItem: [
            { type: 'input', label: '用户名称' ,param:'userName'},
            { type: 'input', label: '登录IP' ,param:'ip'}
        ],
        tableColumn: '登录时间/createdAt,用户名称/userName,登录IP/登录IP,登录地区/loginRegion,登录状态/loginStatus/login_status'.split(',')
    },
    stuff_manage: {
        api:{base:'/userInfo/',list:'listPage',export:'export',status:'updateStatus'},
        searchItem: [{ type: 'input', label: '用户名称',param:'userName' }],
        tableColumn: '操作,状态/status/op_status,序号//front_index,用户名称/userName,姓名/nickName,添加时间/createAt,创建人/createBy,最后登录时间/lastLoginAt'.split(',')
    },
    para_dict: {
        api:{base:'/system/kvConfig/',list:'query4Page',edit:'update'},
        searchItem: [{ type: 'input', label: '标签',param:'userName' }],
        tableColumn: '序号/id,字典code/k,标签/tag,控制类型/valueType,模块/module,注释/description,值/v,操作'.split(',')
    },
    member_list: {
        api:{base:'/member/list/',list:'query',export:'export',op_reset:['/resetMemberPassword','userId'],op_reset_mobile:['/resetMemberPhone','userId']},
        searchItem: [
            { type: 'time', label: '注册时间',param:'registerBeginTime,lastLoginEndTime' },
            { type: 'input', label: '会员账号' ,param:'userName'},
            { type: 'input', label: '昵称',param:'nickName' },
            { type: 'select-data', label: '会员权益',param:'memberVipType' },
            { type: 'time', label: '最后登陆时间' ,param:'lastLoginBeginTime,lastLoginEndTime'},
            { type: 'time', label: '首存时间' ,param:'firstDepositBeginTime,firstDepositEndTime'},
            { type: 'select-phone', label: '注册终端',param:'deviceType' },
            { type: 'input', label: '所选城市' ,param:'cityName'},
            { type: 'input', label: '邀请人' ,param:'inviteBy'},
            { type: 'input', label: '合营码' ,param:'invitationCode'},
        ],
        tableColumn:
            '操作//op_member_list,会员账号/userName/copy,昵称/nickName,会员权益/memberVipType,中心钱包/coinBalance,下单次数/orderCount,下单次数/orderCount,下单总金额/orderTotalAmount,注册时间/createdAt,注册IP/registerIp,最后登录时间/lastLoginTime,注册终端/deviceType/deviceType,离线天数/offlineDays,所选城市/cityName,邀请人/inviterUserName/copy,合营码/invitationCode,最近操作人/operateBy/copy,最近操作时间/operateDt'.split(
                ','
            )
    },
    member_login: {
        api:{base:'/member/loginLog/',list:'query'},
        searchItem: [
            { type: 'time', label: '登录时间',param:'loginStartTime,loginEndTime' },
            { type: 'input', label: '会员账号' ,param:'userName'},
            { type: 'input', label: '昵称',param:'nickname' },
            { type: 'select_template_1', label: '登录状态' ,param:'loginStatus'},
            { type: 'input', label: '登录IP' ,param:'loginIp'},
            { type: 'input', label: 'IP归属地' ,param:'ipAttribution'},
            { type: 'select-deviceType', label: '登录终端',param:'deviceType' }
        ],
        tableColumn: '登录时间/loginTime,登录状态/loginStatus/loginStatus,会员账号/userName,昵称/nickname,登录IP/loginIp,IP归属地/ipAttribution,登录终端/deviceType/deviceType,备注/loginError'.split(',')
    },
    manage_list: {
        api:{base:'/broker/',list:'selectBrokerPage',add:'saveBroker',edit:'updateBroker'},
        searchItem: [
            { type: 'time', label: '注册时间' ,param:'createdStartTime,createdEndTime'},
            { type: 'time', label: '最后操作时间' ,param:''},
            { type: 'input', label: '经纪人账号' ,param:'account'},
            { type: 'input', label: '昵称' ,param:'nickname'},
            { type: 'input-between', label: '佳丽数量',param:'girlAmountMin,girlAmountMax' },
            { type: 'input', label: '创建人' ,param:'createdBy'}
        ],
        tableColumn:
            '操作//op_broker,经纪人账号/account,昵称/nickname,LOGO/logoUrl,手机号/mobilePhone,QQ/qq,微信/wechat,Potato/potato,BatChat/batchat,简介/description,佳丽数量/girlAmount,创建人/createdBy,注册时间/createdAt'.split(
                ','
            )
    },
    girl_list: {
        api:{base:'/girl/',list:'list',add:'add',edit:'update'},
        searchItem: [
            { type: 'input', label: '佳丽ID' ,param:'girlId'},
            { type: 'input', label: '佳丽名称' ,param:'girlName'},
            { type: 'select-multi-label-between', label: '快餐,包夜,全套' ,param:'fastServicePriceMin/nightServicePriceMin/allServicePriceMin,fastServicePriceMax/nightServicePriceMax/allServicePriceMax'},
            { type: 'input', label: '所属经纪人' ,param:'brokerAccount'},
            { type: 'area', label: '地区' ,param:'需要确认'},
            { type: 'select-multi-label-between', label: '实际下单数量,初始下单数量,总下单数量,总下单金额' ,param:'orderAmountRealMin/orderAmountInitMin/orderAmountTotalMin/orderMoneyTotalMin,orderAmountRealMax/orderAmountInitMin/orderAmountTotalMax/orderAmountRealMax'},
            { type: 'select-star', label: '星级' ,param:'starLevel'},
            { type: 'select_template_1', label: '营业状态' ,param:'status'},
            { type: 'select-data-tagIds', label: '标签' ,param:'tagIds'},
            { type: 'input', label: '创建人' ,param:'createdBy'},
            { type: 'select-data-girlType', label: '佳丽类型' ,param:'serviceItemIds'},
            { type: 'time', label: '创建时间' ,param:''}
        ],
        tableColumn:
            '操作,佳丽ID,佳丽名称,营业状态,封面图,快餐,全套,包夜,初始下单数量,实际下单数量,总下单数量,下单总金额,评价数量,地区,星级,标签,佳丽类型,佳丽类型,所属经纪人,创建时间,最近操作人,最近操作时间'.split(
                ','
            )
    },
    girl_list_lite: {
        api:{base:'/selected/',list:'list',add:'insertSelectedGirl',edit:'update',},
        searchItem: [
            { type: 'input', label: '佳丽名称' ,param:'girlName'},
            { type: 'input', label: '所属经纪人' ,param:'brokerAccount'},
            { type: 'input', label: '经纪人昵称' ,param:'brokerNickname'},
            { type: 'select_template_1', label: '营业状态',param:'status'},
            { type: 'input', label: '创建人',param:'createdBy' }
        ],
        tableColumn:
            '操作//op_lite,状态,排序,佳丽名称,营业状态,佳丽封面,所属经纪人,经纪人昵称,现价,星级,创建人,创建时间'.split(
                ','
            )
    },
    girl_tag: {
        api:{base:'/girl/',list:'selectGirlTagList',add:'saveGirlTag',edit:'updateGirlTag',del:'deleteGirlTag',sort:'sortGirlTag'},
        searchItem: [
            { type: 'input', label: '标签名称' ,param:'tagName'},
            { type: 'input', label: '创建人',param:'createdBy' },
            { type: 'select_template_1', label: '状态',param:'status' }
        ],
        tableColumn: '排序/sort,标签名称/tagName,创建人/createdBy,创建时间/createdAt,最近操作人/updatedBy,最近操作时间/updatedAt'.split(',')
    },
    girl_serve: {
        api:{base:'/girl/',list:'selectServiceItemList',add:'saveServiceItem',edit:'updateServiceItem',del:'deleteServiceItem',sort:'sortServiceItem'},
        searchItem: [
            { type: 'input', label: '服务项目' ,param:'serviceItemName' },
            { type: 'input', label: '创建人' ,param:'tagName' },
            { type: 'select_template_1', label: '状态' ,param:'status' }
        ],
        tableColumn:
            '操作,排序/sort,服务项目/serviceItemName,创建人/createdBy,创建时间/createdAt,最近操作人/updatedBy,最近操作时间/updatedAt'.split(',')
    }
}

//注册终端类型（1-PC，2-IOS_APP，3-IOS_H5，4-Android_H5，5-Android_APP, 6-后台）
const baseUrl ='http://172.21.169.16:8041/cbd-manager/';

export const get_page_config = page_name => {
    return page_config[page_name]
}

export const gene_demo_data = page_name => {
    const column = page_config[page_name].tableColumn
    let obj = {}
    column.forEach((item, i) => {
        obj[`i_${i}`] = mock_data(item)
    })
    return Array(20).fill(obj)
}

const mock_data = str => {
    if (str.includes('时间')) {
        return '2020-05-04 10:10:10'
    }
    if (str.includes('数') || str.includes('金额')) {
        return 12.33
    }
    if (str.includes('数量')) {
        return 12
    }
    if (str.includes('排序')) {
        return 3
    }
    if (str.includes('人') || str.includes('昵称')) {
        return '王大锤'
    }

    if (str.includes('账号')) {
        return 'test123'
    }

    if (str.includes('id') || str.includes('ID')) {
        return '84757'
    }

    if (str.includes('IP') || str.includes('ip')) {
        return '192.199.88.4'
    }

    if (str.includes('状态')) {
        return 1
    }

    return str
}

const auto_attribute_from_str = str => {
    if (str.includes('时间')) {
        return 'date'
    }

    if (str.includes('状态')) {
        return 'status'
    }

    return str
}
