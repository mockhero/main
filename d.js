import 'mockjs'
const page_config = {
	sys_role: {
		api:{base:'/member/list/',list:'query',export:'export'},
		searchItem: [{ type: 'input', label: '角色名称' }],
		tableColumn: '操作,角色名称,角色描述,创建人,创建时间,最近操作人,最近操作时间'.split(',')
	},
	sys_domain: {
		searchItem: [
			{ type: 'select_template_1', label: '域名状态' },
			{ type: 'input', label: '域名地址' },
			{ type: 'input', label: '创建人' }
		],
		tableColumn: '操作,域名地址,域名状态,描述说明,创建人,创建时间,最近操作人,最近操作时间'.split(
			','
		)
	},
	sys_account: {
		searchItem: [
			{ type: 'select_template_1', label: '域名状态' },
			{ type: 'input', label: '域名地址' },
			{ type: 'input', label: '创建人' }
		],
		tableColumn: '操作,域名地址,域名状态,描述说明,创建人,创建时间,最近操作人,最近操作时间'.split(
			','
		)
	},
	sys_login: {
		searchItem: [
			{ type: 'input', label: '用户名称' },
			{ type: 'input', label: '登录IP' }
		],
		tableColumn: '登录时间,用户名称,登录IP,登录地区,登录状态'.split(',')
	},
	stuff_manage: {
		searchItem: [{ type: 'input', label: '用户名称' }],
		tableColumn: '操作,状态,序号,用户名称,姓名,添加时间,创建人,最后登录时间'.split(',')
	},
	para_dict: {
		searchItem: [{ type: 'input', label: '标签' }],
		tableColumn: '序号,字典code,标签,控制类型,模块,注释,值,操作'.split(',')
	},
	member_list: {
		searchItem: [
			{ type: 'time', label: '注册时间' },
			{ type: 'input', label: '会员账号' },
			{ type: 'input', label: '昵称' },
			{ type: 'select-data', label: '会员权益' },
			{ type: 'time', label: '首存时间' },
			{ type: 'select-phone', label: '注册终端' },
			{ type: 'input', label: '所选城市' },
			{ type: 'input', label: '邀请人' }
		],
		tableColumn:
			'会员权益,会员卡的名称,注册时间,最后登录时间,离线天数,注册终端,会员账号,首存时间,首存金额,中心钱包,下单总金额,下单次数,操作,所选城市,邀请人,注册IP,昵称,合营码,最近操作人,最近操作时间'.split(
				','
			)
	},
	member_login: {
		searchItem: [
			{ type: 'time', label: '登录时间' },
			{ type: 'input', label: '会员账号' },
			{ type: 'input', label: '昵称' },
			{ type: 'select_template_1', label: '登录状态' },
			{ type: 'select-phone', label: '登录终端' }
		],
		tableColumn: '登录时间,登录状态,会员账号,昵称,登录IP,IP归属地,登录终端,备注'.split(',')
	},
	manage_list: {
		searchItem: [
			{ type: 'time', label: '注册时间' },
			{ type: 'time', label: '最后操作时间' },
			{ type: 'input', label: '经纪人账号' },
			{ type: 'input', label: '昵称' },
			{ type: 'input-between', label: '佳丽数量' },
			{ type: 'input', label: '创建人' }
		],
		tableColumn:
			'操作,经纪人账号,昵称,LOGO,手机号,QQ,微信,Potato,BatChat,简介,佳丽数量,创建人,注册时间'.split(
				','
			)
	},
	girl_list: {
		searchItem: [
			{ type: 'input', label: '佳丽ID' },
			{ type: 'input', label: '佳丽名称' },
			{ type: 'input', label: '所属经纪人' },
			{ type: 'area', label: '地区' },
			{ type: 'select-star', label: '星级' },
			{ type: 'select_template_1', label: '营业状态' },
			{ type: 'select-data', label: '标签' },
			{ type: 'input', label: '创建人' },
			{ type: 'select-data', label: '佳丽类型' },
			{ type: 'time', label: '创建时间' }
		],
		tableColumn:
			'操作,佳丽ID,佳丽名称,营业状态,封面图,快餐,全套,包夜,初始下单数量,实际下单数量,总下单数量,下单总金额,评价数量,地区,星级,标签,佳丽类型,佳丽类型,所属经纪人,创建时间,最近操作人,最近操作时间'.split(
				','
			)
	},
	girl_list_lite: {
		searchItem: [
			{ type: 'input', label: '佳丽名称' },
			{ type: 'input', label: '所属经纪人' },
			{ type: 'input', label: '经纪人昵称' },
			{ type: 'select_template_1', label: '营业状态' },
			{ type: 'input', label: '创建人' }
		],
		tableColumn:
			'操作,状态,排序,佳丽名称,营业状态,佳丽封面,所属经纪人,经纪人昵称,现价,星级,创建人,创建时间'.split(
				','
			)
	},
	girl_tag: {
		searchItem: [
			{ type: 'input', label: '标签名称' },
			{ type: 'input', label: '创建人' },
			{ type: 'select_template_1', label: '状态' }
		],
		tableColumn: '排序,标签名称,创建人,创建时间,最近操作人,最近操作时间'.split(',')
	},
	girl_serve: {
		searchItem: [
			{ type: 'input', label: '服务项目' },
			{ type: 'input', label: '创建人' },
			{ type: 'select_template_1', label: '状态' }
		],
		tableColumn:
			'操作,排序,服务项目,用户名称,添加时间,创建人,创建时间,最近操作人,最后操作时间'.split(',')
	}
}

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
