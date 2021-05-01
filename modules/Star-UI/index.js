import Button from './Button'

const StarUI = {}
const StButton = {}

const COMPONENTS = [Button]

StarUI.install = (Vue, options) => {
	if (options && options.components) {
		const components = options.components

		components.forEach(componentName =>
			COMPONENTS.forEach(component => {
				if (componentName === component.name)
					Vue.component(component.name, component)
			})
		)
	} else
		COMPONENTS.forEach(component => Vue.component(component.name, component))
}

StButton.install = Vue => Vue.component(Button.name, Button)

export { StButton }

export default StarUI
