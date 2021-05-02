import Vue from 'vue'
import App from './App.vue'
// import StarUI from '../modules/Star-UI'
import { StButton, StDialog, StInput, StSwitch } from '../modules/Star-UI'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

// Vue.use(StarUI, {
// 	components: ['StButton']
// })

Vue.use(StButton)
	.use(StDialog)
	.use(StInput)
	.use(StSwitch)

new Vue({
	render: h => h(App)
}).$mount('#app')
