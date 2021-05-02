<template>
	<div class="st-switch"
			 :class="{ 'is-checked': value }"
			 @click="handleClick">
		<span class="st-switch_core"
					ref="core">
			<span class="st-switch_button"></span>
		</span>
		<input type="checkbox"
					 class="st-switch_input"
					 :name="name"
					 :checked="value">
	</div>
</template>

<script>
export default {
	name: 'StSwitch',
	data() {
		return {}
	},
	props: {
		value: {
			type: Boolean,
			default: false
		},
		activeColor: {
			type: String,
			default: '#1ec63b'
		},
		inactiveColor: {
			type: String,
			default: '#dd001b'
		},
		name: {
			type: String,
			default: ''
		}
	},
	methods: {
		handleClick() {
			this.$emit('input', !this.value)
		},
		changeColor(active) {
			if (this.activeColor || this.inactiveColor) {
				const color = active ? this.activeColor : this.inactiveColor
				this.$refs.core.style.borderColor = color
				this.$refs.core.style.backgroundColor = color
			}
		}
	},
	mounted() {
		this.changeColor(this.value)
	},
	watch: {
		value(e) {
			this.changeColor(!!e)
		}
	}
}
</script>

<style scoped lang="scss">
.st-switch {
	display: inline-block;
	align-items: center;
	position: relative;
	font-size: 14px;
	line-height: 20px;
	vertical-align: middle;

	.st-switch_core {
		margin: 0;
		display: inline-block;
		position: relative;
		width: 40px;
		height: 20px;
		border: 1px solid #dcdfe6;
		outline: none;
		border-radius: 10px;
		box-sizing: border-box;
		background: #dcdfe6;
		cursor: pointer;
		transition: border-color 0.3s, background-color 0.3s;
		vertical-align: middle;

		.st-switch_button {
			position: absolute;
			top: 1px;
			left: 1px;
			border-radius: 100%;
			transition: all 0.3s;
			width: 16px;
			height: 16px;
			background-color: #fff;
		}
	}
}

// 选中样式
.is-checked {
	.st-switch_core {
		border-color: #409eff;
		background-color: #409eff;

		.st-switch_button {
			transform: translateX(20px);
		}
	}
}

// 隐藏input标签
.st-switch_input {
	position: absolute;
	width: 0;
	height: 0;
	opacity: 0;
	margin: 0;
}
</style>
