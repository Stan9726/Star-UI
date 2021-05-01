<template>
	<div id="app">
		<st-button>按钮</st-button>
		<st-button type="primary">登录</st-button>
		<st-button type="danger">删除</st-button>
		<st-button type="info">取消</st-button>
		<st-button type="success">确定</st-button>
		<st-button type="warning">提示</st-button>

		<st-button plain>按钮</st-button>
		<st-button plain
							 type="primary">登录</st-button>
		<st-button plain
							 type="danger">删除</st-button>
		<st-button plain
							 type="info">取消</st-button>
		<st-button plain
							 type="success">确定</st-button>
		<st-button plain
							 type="warning">提示</st-button>

		<st-button round>按钮</st-button>
		<st-button round
							 type="primary">登录</st-button>
		<st-button round
							 type="danger">删除</st-button>
		<st-button round
							 type="info">取消</st-button>
		<st-button round
							 type="success">确定</st-button>
		<st-button round
							 type="warning">提示</st-button>

		<st-button circle>按钮</st-button>
		<st-button circle
							 type="primary">登录</st-button>
		<st-button circle
							 type="danger">删除</st-button>
		<st-button circle
							 type="info">取消</st-button>
		<st-button circle
							 type="success">确定</st-button>
		<st-button circle
							 type="warning">提示</st-button>

		<st-button icon="appreciate"></st-button>
		<st-button icon="wang"
							 type="primary">登录</st-button>
		<st-button icon="delete"
							 type="danger">删除</st-button>
		<st-button icon="close"
							 type="info">取消</st-button>
		<st-button icon="check"
							 type="success">确定</st-button>
		<st-button icon="info"
							 type="warning">提示</st-button>

		<st-button @click="showInfo">按钮</st-button>

		<st-button disabled>按钮</st-button>
	</div>
</template>

<script>
export default {
	name: 'App',
	methods: {
		showInfo() {
			console.log('点了一下！')
		}
	}
}
</script>

<style scoped lang="scss">
#app {
	.st-button {
		margin-right: 30px;
	}
}
</style>

