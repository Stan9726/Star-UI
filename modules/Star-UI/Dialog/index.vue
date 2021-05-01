<template>
	<transition name="dialog-fade">
		<div class="st-dialog_wrapper"
				 v-show="visible"
				 @click.self="handleClose">
			<div class="st-dialog"
					 :style="{width: width, marginTop: top}">
				<div class="st-dialog_header">
					<slot name="title">
						<span class="st-dialog_title">
							{{ title }}
						</span>
					</slot>
					<button class="st-dialog_headerbtn"
									@click="handleClose">
						<i class="st-icon-close"></i>
					</button>
				</div>
				<div class="st-dialog_body">
					<slot></slot>
				</div>
				<div class="st-dialog_footer">
					<slot name="footer"
								v-if="$slots.footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'StDialog',
	props: {
		title: {
			type: String,
			default: ''
		},
		width: {
			type: String,
			default: '20%'
		},
		top: {
			type: String,
			default: '60px'
		},
		visible: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		handleClose() {
			this.$emit('update:visible', false)
		}
	}
}
</script>

<style scoped lang="scss">
.st-dialog_wrapper {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
	margin: 0;
	z-index: 2001;
	background-color: rgba(0, 0, 0, 0.5);

	.st-dialog {
		position: relative;
		margin: 15vh auto 50px;
		background: #fff;
		border-radius: 2px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
		box-sizing: border-box;
		width: 30%;
		&_header {
			padding: 20px 20px 10px;

			.st-dialog_title {
				line-height: 24px;
				font-size: 18px;
				color: #303133;
			}

			.st-dialog_headerbtn {
				position: absolute;
				top: 20px;
				right: 20px;
				padding: 0;
				background: transparent;
				border: none;
				outline: none;
				cursor: pointer;
				font-size: 16px;

				.st-icon-close {
					color: 909399;
				}
			}
		}

		&_body {
			padding: 30px 20px;
			color: #606266;
			font-size: 14px;
			word-break: break-all;
		}

		&_footer {
			padding: 10px 20px 20px;
			text-align: right;
			box-sizing: border-box;

			::v-deep .one-button:first-child {
				margin-right: 20px;
			}
		}
	}
}

.dialog-fade-enter-active {
	animation: fade 0.3s;
}

.dialog-fade-leave-active {
	animation: fade 0.3s reverse;
}

@keyframes fade {
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
