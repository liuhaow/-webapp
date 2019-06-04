import * as types from '../types'

const state = {
	
	xiadanbuy:JSON.parse(localStorage.getItem('xiadanbuy')) || {},
	maisellzt:JSON.parse(localStorage.getItem('maisellzt')) || 0,
	detaliId:JSON.parse(localStorage.getItem('detaliId')) || {},
	jcuntq:JSON.parse(localStorage.getItem('tiqu')) || {}
	

}

const actions = {
	/*寄存金币提取传参*/
	JcunTiQu({commit},res){
		localStorage.setItem('tiqu', JSON.stringify(res))			
		commit(types.TIQUJB_ZT,res)
	},
	
	/*游戏币区服选择买卖*/
	yibimaixiadan({commit}, res) {
		localStorage.setItem('xiadanbuy', JSON.stringify(res))	
		commit(types.XIADANBUY,res)
	},
	baocunIdMM({commit}, res){
		localStorage.setItem('detaliId', JSON.stringify(res))	
		
		commit(types.DETAILID_TYPE,res)
	},
	/*买卖游戏币状态*/
	maisellztInfo({commit}, res){
		localStorage.setItem('maisellzt', JSON.stringify(res))	
		commit(types.MSELL_ZT,res)
		
	},
	//寄售游戏币数据存放
	JIshouGamebi({commit},res){
		localStorage.setItem('jishou', JSON.stringify(res))			
		commit(types.JISHOU_GAMEBI,res)	
	}
}

const getters = {
	xiadanbuy: state => state.xiadanbuy,
	maisellzt: state => state.maisellzt,
	detaliId:state => state.detaliId,
	jcuntq:state => state.jcuntq
}

const mutations = {
	[types.XIADANBUY](stata,res){
		stata.xiadanbuy = res
	},
	[types.TIQUJB_ZT](stata,res){
		stata.jcuntq =res
	},
	[types.MSELL_ZT](stata,res){
		stata.maisellzt =res
	},
	[types.JISHOU_GAMEBI](stata,res){
		stata
	},
	[types.DETAILID_TYPE](stata,res){
		stata.detaliId = res
	}

}

export default {
	state,
	actions,
	getters,
	mutations
}