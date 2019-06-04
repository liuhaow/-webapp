<template>
	<div class="approve">
		<div class="approve-top">
			<i class="iconfont iconfanhui" @click="goback"></i> 实名认证
		</div>
		<div class="approve-name">
			<p>真实姓名</p>
			<input type="" placeholder="请输入真实姓名" v-model="namen" name="" id="" value="" />
		</div>
		<div class="approve-name">
			<p>证件号</p>
			<input type="" v-model="papers" placeholder="身份证/护照号" name="" id="" value="" />
		</div>

		<div class="approve-uplode">
			<p><span>手持证件照</span></p>
			<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
				<img v-if="imageUrl" :src="imageUrl" class="avatar">
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<h2>请上传本人手持证件照片，要求面部清晰无遮挡，同时证件照片及号码清晰可辨认。</h2>
		</div>

		<div class="present">
			<button>提交</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				namen: '',
				papers: '',
				imageUrl: ''
			}
		},
		methods: {
			goback() {
				this.$router.back(-1)
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {

				const isLt2M = file.size / 1024 / 1024 < 10;
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 10MB!');
				}
				return isLt2M;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.approve {
		background: #F4F4F4;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		.present {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 1.41rem;
			margin-top: 1rem;
			button {
				background: rgba(70, 115, 236, 1);
				border-radius: 10px;
				height: 1.41rem;
				width: 85%;
				border: 0;
				font-size: 0.56rem;
				color: #fff;
			}
		}
		.approve-uplode {
			width: 90%;
			height: 5.6rem;
			margin: 0 auto;
			p {
				font-size: .38rem;
				color: #000;
				margin-bottom: .1rem;
			}
			h2 {
				font-size: .38rem;
				color: #666;
				line-height: .56rem;
				margin: .12rem 0;
			}
			.avatar-uploader {
				width: 100%;
				height: 80%;
				background: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				.el-upload {
					height: 1.68rem!important;
					width: 100%;
					i {
						font-size: .9rem;
					}
				}
			}
		}
		.approve-name {
			width: 90%;
			margin: .32rem auto;
			p {
				font-size: .38rem;
				color: #000;
				margin-bottom: .1rem;
			}
			input {
				height: 1.25rem;
				line-height: 1.25rem;
				font-size: .38rem;
				box-sizing: border-box;
				width: 100%;
				color: #E5E5E5;
				padding-left: .32rem;
			}
		}
		.approve-top {
			height: 1.375rem!important;
			background: #fff!important;
			line-height: 1.375rem;
			color: #293653!important;
			font-size: .56rem;
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
	}
</style>