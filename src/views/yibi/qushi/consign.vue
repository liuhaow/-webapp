<template>
	<div class="consign">
		<div class="consign-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>游戏币寄售</span>
		</div>
		<div class="consign-mian">

			<div class="game-area">
				<h1 class="commen-sty">游戏区服</h1>
				<p><span>{{ganname.name}}</span>/<span>{{yibiqufu.qu}}</span>/<span>{{yibiqufu.fu}}</span></p>
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>商品标题</h1>
				<p @click="biaptIfo">{{name}}</p>
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>单件数量</h1>
				<input type="number" v-model='num' placeholder="出售数量不得低于2000万" />万
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>商品单价</h1>
				<input type="number" v-model='price' placeholder="请输入价格" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>商品件数</h1>
				<input type="number" v-model='amount' placeholder="请输入件数" />件
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>游戏账号</h1>
				<input type="number" v-model='gameAccount' placeholder="请输入账号" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>游戏密码</h1>
				<input type="password" v-model='gamePasswd' placeholder="请输入密码" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>确定游戏密码</h1>
				<input type="password" v-model='gameRPasswd' placeholder="请再次输入密码" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>游戏角色名</h1>
				<input type="text" v-model='gameRole' placeholder="请输入游戏角色名" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>二级密码</h1>
				<input type="number" v-model='erJiPasswd' placeholder="请输入二级密码" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>仓库密码</h1>
				<input type="number" v-model='cangKuPasswd' placeholder="请输入仓库密码" />
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>发货方式</h1>
				<span @click="sheetVOpen">{{jiaoyi}}<i></i></span>
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>密保信息</h1>
				<span @click='mibaomessag'>{{mibao}}<i></i></span>
			</div>
			<div class="rolepelo">
				<h1 class="commen-sty"><i>*</i>防骗暗号</h1>
				<input type="number" v-model='kfuAnhao' placeholder="请输入5位数字的防骗暗号" @input="oninput" />
			</div>
			<div class="consign-btn">
				<p>我们承诺：您提交的帐号资料经过系统加密，绝不外泄， 请放心填写！</p>

				<button @click="nextconsignInfo">下一步</button>
			</div>
		</div>
		<mt-actionsheet :actions="data" v-model="sheetVisible">
		</mt-actionsheet>
		<mt-actionsheet :actions="data1" v-model="sheetV">
		</mt-actionsheet>
		<mt-actionsheet :actions="data2" v-model="sheet">
		</mt-actionsheet>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				sheetVisible: false,
				sheetV: false,
				sheet: false,
				shipmentWay: 1,
				mibaoXinxi: 1,
				num: '',
				price: '',
				amount: '',
				gameAccount: '',
				gamePasswd: '',
				gameRPasswd: '',
				gameRole: '',
				erJiPasswd: '',
				cangKuPasswd: '',
				jiaoyi: '邮件交易',
				name: '请选择标题',
				mibao: 'QQ令牌',
				kfuAnhao: '',
				data: [{    
						name: '在线发货，方便快捷',
						method: this.geEfahuo // 调用methods中的函数
						   
					}, {    
						name: '买的放心，用的安心',
						     method: this.getLibuy // 调用methods中的函数
						   
					},
					{    
						name: '绿色商品，安全迅速',
						     method: this.getLiLvse // 调用methods中的函数
						   
					},
					{    
						name: '支付完成，立马发货',
						     method: this.getLpay // 调用methods中的函数
						   
					},
					{    
						name: '手工打造，诚信保障',
						     method: this.getLihand // 调用methods中的函数
						   
					}
				],
				data2: [{    
						name: 'QQ令牌',
						method: this.QQlinp // 调用methods中的函数
						   
					}, {    
						name: '手机令牌',
						     method: this.phonelinp // 调用methods中的函数
						   
					},
					{    
						name: '手机',
						     method: this.shouji // 调用methods中的函数
						   
					},
					{    
						name: '其他',
						     method: this.otherlinp // 调用methods中的函数
						   
					}
				],
				data1: [{    
						name: '邮寄交易',
						method: this.geEmail // 调用methods中的函数
						   
					}, {    
						name: '拍卖交易',
						     method: this.getLipai // 调用methods中的函数
						   
					},
					{    
						name: '当面交易',
						     method: this.getLiface // 调用methods中的函数
						   
					}
				]

			}
		},
		computed: {
			...mapGetters({
				ganname: 'gamename',
				yibiqufu: 'yibiqufu',
				userDt: 'getUserData'

			})
		},
		methods: {
			...mapActions(
				[
					'JIshouGamebi'
				]
			),
			oninput(e) {
				if(this.kfuAnhao.length > 5) {
					Toast({
						message: '5位数字即可',
						iconClass: 'icon icon-error'
					});
					this.kfuAnhao = this.kfuAnhao.slice(0, 5);
				}
			},
			QQlinp() {
				this.mibao = 'QQ令牌';
				this.mibaoXinxi = 1
			},
			phonelinp() {
				this.mibao = '手机令牌';
				this.mibaoXinxi = 2

			},
			shouji() {
				this.mibao = '手机';
				this.mibaoXinxi = 3;

			},
			otherlinp() {
				this.mibao = '其他';
				this.mibaoXinxi = 4

			},
			mibaomessag() {
				this.sheet = !this.sheet
			},
			geEfahuo() {
				this.name = '在线发货，方便快捷'
			},
			getLibuy() {
				this.name = '买的放心，用的安心'
			},
			getLiLvse() {
				this.name = '绿色商品，安全迅速'
			},
			getLpay() {
				this.name = '支付完成，立马发货'
			},
			getLihand() {
				this.name = '手工打造，诚信保障'
			},
			geEmail() {
				this.jiaoyi = '邮寄交易';
				this.shipmentWay = 1
			},
			getLipai() {
				this.jiaoyi = '拍卖交易'
				this.shipmentWay = 2

			},
			getLiface() {
				this.jiaoyi = '当面交易'
				this.shipmentWay = 3

			},
			sheetVOpen() {
				this.sheetV = !this.sheetV
			},
			goback() {
				this.$router.go(-1)
			},
			biaptIfo() {
				this.sheetVisible = !this.sheetVisible
			},
			nextconsignInfo() {
				if(this.gamePasswd != this.gameRPasswd ){
					Toast({
						message: '密码不一致',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return
				}
				let parm = {
					title: this.name,
					token: this.userDt.token,
					userId: this.userDt.id,
					gameId: this.yibiqufu.gameId,
					gameAreaId: this.yibiqufu.Daqu_id,
					shipmentWay: this.shipmentWay,
					num: this.num,
					gameAccount: this.gameAccount,
					gamePasswd: this.gamePasswd,
					gameRPasswd: this.gameRPasswd,
					gameRole: this.gameRole,
					erJiPasswd: this.erJiPasswd,
					cangKuPasswd: this.cangKuPasswd,
					mibaoXinxi: this.mibaoXinxi,
					amount: this.amount,
					kfuAnhao: this.kfuAnhao,
					price: this.price,
					apiversion: 'v.1.1',
					apisafecode: 'Test.Test'
				}

				this.JIshouGamebi(parm)

				if(!this.price || !this.amount) {
					Toast({
						message: '请填写完整',
						iconClass: 'icon icon-error',
						position: 'center',
					});
					return;
				} else {

					this.$router.push('/yibi/issue')

				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.consign {
		background: #F4F4F4;
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: scroll;
		height: 100%;
		.consign-mian {
			flex: 1;
			overflow: scroll;
			.rolepelo,
			.game-area {
				.commen-sty {
					width: 3rem;
					font-size: 00.38rem;
					color: #333;
					padding-left: .32rem;
					font-weight: 500;
					display: flex;
					align-items: center;
					i {
						color: #ff8042;
						display: block;
						font-size: 00.38rem;
						position: relative;
						top: 1px;
						padding-right: .1rem;
					}
				}
			}
			.consign-btn {
				display: flex;
				flex-direction: column;
				align-items: center;
				p {
					font-size: .38rem;
					color: #9EA6BF;
					width: 90%;
					padding: .32rem 0;
					margin: 0 auto;
				}
				h2 {
					font-size: .38rem;
					color: #9EA6BF;
					width: 80%;
					margin: 0 auto 1rem;
				}
				button {
					width: 80%;
					height: 1.41rem;
					line-height: 1.41rem;
					text-align: center;
					font-size: 0.56rem;
					background: #4673EC;
					margin: 0 auto .5rem;
					border-radius: 0.64rem;
					border: 0;
					color: #fff;
				}
			}
			.rolepelo {
				height: 1.88rem;
				display: flex;
				align-items: center;
				margin-bottom: .1rem;
				background: #fff;
				font-size: 0.38rem;
				input {
					height: 1.6rem;
					width: 55%;
					line-height: 1.6rem;
					margin-right: .2rem;
					border: 0;
					color: #434343;
					font-size: 0.38rem;
					margin-left: .2rem;
				}
			}
			.game-area {
				display: flex;
				height: 1.88rem;
				align-items: center;
				margin-bottom: .1rem;
				background: #fff;
				p {
					width: 70%;
					font-size: 00.38rem;
					color: #333;
					text-align: right;
					margin-right: .4rem;
					font-weight: 400;
				}
			}
		}
		.consign-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .5rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			span {
				font-weight: 500;
			}
			.iconfanhui {
				position: absolute;
				width: 1rem;
				height: 1.375rem;
				top: 0;
				left: 0;
			}
			.amend-preserve {
				position: absolute;
				width: 1.5rem;
				height: 1.375rem;
				font-size: 0.38rem;
				color: #4673EC;
				top: 0;
				right: 0;
			}
		}
	}
</style>