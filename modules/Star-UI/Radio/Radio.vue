<template>
	<label class="st-radio"
				 :class="{ 'is-checked': label === model }">
		<span class="st-radio_input">
			<span class="st-radio_inner"></span>
			<input type="radio"
						 class="st-radio_original"
						 :value="label"
						 v-model="model"
						 :name="name">
		</span>
		<span class="st-radio_label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script>
export default {
	name: 'StRadio',
	data() {
		return {}
	},
	props: {
		label: {
			type: [String, Number, Boolean],
			default: ''
		},
		value: null,
		name: {
			type: String,
			default: ''
		}
	},
	computed: {
		model: {
			get() {
				return this.isGroup ? this.RadioGroup.value : this.value
			},
			set(value) {
				this.isGroup
					? this.RadioGroup.$emit('input', value)
					: this.$emit('input', value)
			}
		},
		isGroup() {
			return !!this.RadioGroup
		}
	},
	inject: {
		RadioGroup: {
			default: ''
		}
	}
}
</script>

<style scoped lang="scss">
.st-radio {
	color: #606266;
	font-weight: 500;
	line-height: 1;
	position: relative;
	cursor: pointer;
	display: inline-block;
	white-space: nowrap;
	outline: none;
	font-size: 14px;
	margin-right: 30px;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-moz-user-select: none;

	.st-radio_input {
		white-space: nowrap;
		cursor: pointer;
		outline: none;
		display: inline-block;
		line-height: 1;
		position: relative;
		vertical-align: middle;

		.st-radio_inner {
			border: 1px solid #dcdfe6;
			border-radius: 100%;
			width: 14px;
			height: 14px;
			background-color: #fff;
			position: relative;
			cursor: pointer;
			display: inline-block;
			box-sizing: border-box;

			&:after {
				width: 4px;
				height: 4px;
				border-radius: 100%;
				background-color: #fff;
				content: '';
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%) scale(0);
				transition: transform 0.15s ease-in;
			}
		}

		.st-radio_original {
			opacity: 0;
			outline: none;
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0px;
			right: 0;
			bottom: 0;
			margin: 0;
		}
	}

	.st-radio_label {
		font-size: 14px;
		padding-left: 10px;
	}
}

// 选中的样式
.st-radio.is-checked {
	.st-radio_input {
		.st-radio_inner {
			border-color: #409eff;
			background-color: #409eff;

			&:after {
				transform: translate(-50%, -50%) scale(1);
			}
		}
	}

	.st-radio_label {
		color: #409eff;
	}
}
</style>
