<template>
	<div class="payinfo">
		<div class="payinfo-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>支付订单</span>
		</div>

		<div class="payinfo-s-info">
			<img :src='name.img' alt="" />
			<div>
				<p> {{detailList.gameName}}</p>
				<p>{{yibiqufu.fu}}/{{yibiqufu.qu}}</p>
			</div>
			<h2 v-if="xiadanbuy.quf == 9">&yen;<i >{{parseFloat(detailList.deposit)}}</i></h2>
			<h2 v-if="xiadanbuy.quf == 8">&yen;<i >{{parseFloat(detailList.game_gold_price)+parseFloat(detailList.deposit)}}</i></h2>
			
		</div>
		<div class="pay-btn">
			<button @click="paychargeInfo(detailList.id)" v-if="xiadanbuy.quf == 9">确定支付<span><i>{{parseFloat(detailList.amount)}}</i></span></button>
			<button @click="paychargeInfo(detailList.id)" v-if="xiadanbuy.quf ==8">确定支付<span><i>{{parseFloat(detailList.game_gold_price)+parseFloat(detailList.deposit)}}</i></span></button>
			
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import { ZidongPPeiInfo, payZiDongInfo, payJSDBInfo } from '@/api/api'
	import { Toast } from 'mint-ui';
	import { cesi } from '@/api/mine'
	export default {
		data() {
			return {
				chose: false,
				detailList: ''
			}
		},
		computed: {
			...mapGetters({
				name: 'gamename',
				yibiqufu: 'yibiqufu',
				getUserData: 'getUserData',
				xiadanbuy: 'xiadanbuy'

			})
		},
		mounted() {
			if(this.xiadanbuy.quf == 9) {
				let datat = {
					apiversion: 'v.1.1',
					apisafecode: 'Test.Test',
					token: this.getUserData.token,
					userId: this.getUserData.id,
					gameDanbaoJishouOrderId: this.xiadanbuy.goldOrderId,
					type: this.xiadanbuy.type
				}
				cesi(datat).then(res => {
					console.log(res)
					if(res.data.code == 200) {
						this.detailList = res.data.return_data
					} else {
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}
				})
			} else if(this.xiadanbuy.quf == 8) {
				const parem = {
					token: this.getUserData.token,
					userId: this.getUserData.id,
					goldOrderId: this.xiadanbuy.goldOrderId,
					type: 1,
					apiversion: 'v.1.1',
					apisafecode: 'Test.Test'
				}
				ZidongPPeiInfo(parem).then(res => {
					if(res.data.code == 200) {
						console.log(res)
						this.detailList = res.data.return_data
					} else {
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}
				})
			}

		},
		methods: {

			goback() {
				this.$router.go(-1)
			},
			choseinfo() {
				this.chose = !this.chose
			},
			paychargeInfo(idx) {
				console.log(idx)
				if(this.xiadanbuy.quf == 9) {
					let data = {
						apiversion: 'v.1.1',
						apisafecode: 'Test.Test',
						token: this.getUserData.token,
						userId: this.getUserData.id,
						gameDanbaoJishouOrderId: idx,
					}
					payJSDBInfo(data).then(res=>{
						if(res.data.code == 200) {
						Toast({
							message: '支付成功',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						localStorage.removeItem('xiadanbuy')
						localStorage.removeItem('yibiqufu')
						localStorage.removeItem('game')
						this.$router.push('/yibi/payinfo/paysucc')
					} else {
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}
						
					})
				}
				let data = {
					apiversion: 'v.1.1',
					apisafecode: 'Test.Test',
					token: this.getUserData.token,
					userId: this.getUserData.id,
					goldOrderId: idx,
					type: this.xiadanbuy.type
				}
				payZiDongInfo(data).then(res => {
					if(res.data.code == 200) {
						Toast({
							message: '支付成功',
							iconClass: 'icon icon-error',
							position: 'center',
						});
						localStorage.removeItem('xiadanbuy')
						localStorage.removeItem('yibiqufu')
						localStorage.removeItem('game')
						this.$router.push('/yibi/payinfo/paysucc')
					} else {
						Toast({
							message: res.data.msg,
							iconClass: 'icon icon-error',
							position: 'center',
						});
					}

				})
				//				this.$router.push('/yibi/payinfo/paysucc')

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.payinfo {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		/**/
		bottom: 0;
		right: 0;
		.pay-btn {
			width: 100%;
			position: absolute;
			bottom: 20%;
			display: flex;
			align-items: center;
			margin-top: 1rem;
			justify-content: center;
			height: 1.41rem;
			button {
				width: 90%;
				height: 1.41rem;
				line-height: 1.41rem;
				text-align: center;
				font-size: 0.44rem;
				background: #4673EC;
				border-radius: 0.32rem;
				border: 0;
				color: #fff;
				span {
					font-size: .56rem;
					margin-left: .2rem;
				}
			}
		}
		.pay-other {
			height: 1.56rem;
			width: 100%;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			justify-content: space-between;
			background: #fff;
			h2 {
				font-size: .44rem;
				color: #49597C;
				img {
					width: .78rem;
					height: .78rem;
					margin: 0 .3rem;
				}
			}
			p {
				width: .8rem;
				height: .8rem;
				display: flex;
				margin-right: .5rem;
				align-items: center;
				justify-content: center;
				line-height: .8rem;
				position: relative;
				border-radius: 50%;
				background: #ccc;
				i {
					font-size: 1rem;
					position: absolute;
					top: .1rem;
				}
			}
			.chose {
				color: #fff;
				background: #4673EC;
			}
		}
		.payinfo-s-info {
			display: flex;
			align-items: center;
			position: relative;
			height: 2.2rem;
			background: #fff;
			margin-bottom: .1rem;
			h2 {
				font-size: .56rem;
				position: absolute;
				right: 0;
				top: .2rem;
				height: 100%;
				color: #000;
				padding: .3rem .3rem 0 0;
			}
			img {
				height: 1.875rem;
				width: 1.875rem;
				margin: 0 .3rem;
			}
			div {
				height: 1.8rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				p:nth-child(1) {
					font-size: .5rem;
					color: #333;
				}
				p:nth-child(2) {
					font-size: .38rem;
					color: #9EA6BF;
				}
			}
		}
		.payinfo-top {
			height: 1.375rem;
			background: #fff;
			line-height: 1.375rem;
			color: #000;
			font-size: .56rem;
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
				font-size: .44rem;
				color: #4673EC;
				top: 0;
				right: 0;
			}
		}
	}
</style>v