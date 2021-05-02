<template>
	<div class="st-form">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'StForm',
	props: {
		model: {
			type: Object,
			required: true
		},
		labelWidth: {
			type: String,
			default: '80px'
		}
	},
	provide() {
		return {
			Form: this
		}
	}
}
</script>

<style scoped></style>
