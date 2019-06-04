import Axios from './request'
//注册
export const resgIInfo = data => Axios({
	url: '/User/doRegInfo',
	method: 'post',
	data
})
//验证信息码
export const getSmsCode = data => Axios({
	url: '/Api/getSmsCode/v.1.1/Test.Test/'+data+'/1',
	method: 'get',
	data
})
//忘记密码
export const reviseIInfo = data => Axios({
	url:'/User/doResetPwd',
	method: 'post',
	data
})
//登陆
export const Login = data => Axios({
	url: '/User/doLogin',
	method: 'post',
	data
})
//首页
export const mainList =data => Axios({
	url: '/WapIndex/GetWapInit/v.1.1/Test.Test/1',
	method: 'get',
	data
})
//可买游戏币列表
export const youxiBiall = data => Axios({
	url: '/GameGoldEx/getGameGoldList/v.1.1/Test.Test/10/0/1',
	method: 'get',
	data
})
//游戏币区
export const youxibiQu = data => Axios({
	url: '/GameGoldEx/getGameAreaList/v.1.1/Test.Test/10/0/'+data.gameId+'/1',
	method: 'get',
	data
})
//游戏币服
export const youxibiFu = data => Axios({
	url:'/GameGoldEx/getGameAreaChildList/v.1.1/Test.Test/10/0/'+data.gameId+'/'+data.pid+'/1',
	method: 'get',
	data
})
//游戏币买走势图
export const mainzoushi =data => Axios({
	url:'/GameGoldEx/getGameGoldPrceList/v.1.1/Test.Test/10/0/'+data.gameId+'/'+data.gameAreaId+'/'+data.type+'/1',
	method: 'get',
	data
})


//获取自动匹配游戏交易列表mai

export const zidongppbuyList = data => Axios({
	url:'/GameGoldEx/getGameGoldAutoMatchList/v.1.1/Test.Test/10/0/'+data.gameId+'/'+data.gameAreaId+'/0/1',
	method: 'get',
	data
})


//销售游戏币列表
export const positInfo = data => Axios({
	url:'/GameGoldEx/getGameGoldSellList/v.1.1/Test.Test/10/0/'+data.gameId+'/'+data.gameAreaId+'/0/1',
	method: 'get',
	data
})





//我要买自动匹配
export const buyPPeiInfo = data => Axios({
	url:'/GameGoldBuy/addAutoBuyGold',
	method: 'post',
	data
})
//我要卖自动匹配
export const sellPPeiInfo = data => Axios({
	url:'/GameGoldSell/addAutoSellGold',
	method: 'post',
	data
})

//获取自动匹配金币订单详情

export const ZidongPPeiInfo = data => Axios({
	url:'/GameGold/getGoldOrder',
	method: 'post',
	data
})
//支付自动匹配金币订单 - 暂时余额支付
export const payZiDongInfo = data => Axios({
	url:'/GameGold/payGoldOrder',
	method: 'post',
	data
})

//支付寄售担保订单
export const payJSDBInfo = data => Axios({
	url:'/GameGold/payGameDanbaoJishouGoldOrder',
	method: 'post',
	data
	
})
// 走势图下面担保交易
export const buyjsdbData = data => Axios({
	url:'GameGold/addGameDanbaoJishouGoldOrder',
	method: 'post',
	data
})

//寄存游戏币
export const jicunDataInfo =  data => Axios({
	url:'/GameGoldSell/addJCGold',
	method:'post',
	data
})
//寄售游戏币
export const jishouDataInfo = data => Axios({
	url:'/GameGold/addJishouGold',
	method:'post',
	data
})
//担保游戏币
export const danbaoDataIfo =data => Axios({
	url:'/GameGold/addDanbaoGold',
	method:'post',
	data
})
//个人中心默认数据
export const mineMeInfo = data => Axios({
	url: '/UCenter/getUserData/v.1.1/Test.Test/'+data.token+'/'+data.userId+'/1',
	method: 'get',
	data
})
//个人资产详情
export const mytotleMony = data => Axios({
	url: '/UCenter/getUserPropertyDetail/v.1.1/Test.Test/'+data.token+'/'+data.userId+'/1',
	method: 'get',
	data
})
