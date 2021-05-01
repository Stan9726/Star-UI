import Button from './Button'
import Dialog from './Dialog'

const StarUI = {},
	StButton = {},
	StDialog = {}

const COMPONENTS = [Button, Dialog]

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
StDialog.install = Vue => Vue.component(Dialog.name, Dialog)

export { StButton, StDialog }

export default StarUI
