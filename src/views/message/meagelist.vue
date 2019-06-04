<template>
	<div class="messlist">
		<div class="messlist-top">
			<i class="iconfont iconfanhui" @click="goback"></i>
			<span>消息</span>
		</div>
		<ul class="message-l">
			<li>
				<p>这里是显示的消息</p>
				<h1>2017-09-15</h1>
			</li>
			<li>
				<p>这里是显示的消息</p>
				<h1>2017-09-15</h1>
			</li>
			<li>
				<p>这里是显示的消息</p>
				<h1>2017-09-15</h1>
			</li>
			<li>
				<p>这里是显示的消息</p>
				<h1>2017-09-15</h1>
			</li>
			<li>
				<p>这里是显示的消息</p>
				<h1>2017-09-15</h1>
			</li>
			<li>
				<p>这里是显示的消息</p>
				<h1>2017-09-15</h1>
			</li>
			
		</ul>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

			goback() {
				this.$router.replace('/message')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.messlist {
		background: #F4F4F4;
		position: absolute;
		display: flex;
		flex-direction: column;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.messlist-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .5rem;
			margin-bottom: .1rem;
			position: relative;
			text-align: center;
			.iconfanhui {
				position: absolute;
				width: 1rem;
				height: 1.375rem;
				top: 0;
				left: 0;
			}
		}
		.message-l {
			flex: 1;
			overflow: scroll;
			li {
				height: 1.875rem;
				background: #fff;
				box-sizing: border-box;
				padding-left: .32rem;
				margin-bottom: .1rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				p {
					font-size: 0.38rem;
					font-weight: 400;
					color: rgba(41, 54, 83, 1);
					margin-bottom: .32rem;
				}
				h1 {
					font-size: .38rem;
					font-weight: 400;
					color: rgba(41, 54, 83, 1);
				}
			}
		}
	}
</style>