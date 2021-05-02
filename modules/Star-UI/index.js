import Button from './Button'
import Dialog from './Dialog'
import Input from './Input'
import Switch from './Switch'

const StarUI = {},
	StButton = {},
	StDialog = {},
	StInput = {},
	StSwitch = {}

const COMPONENTS = [Button, Dialog, Input]

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
StInput.install = Vue => Vue.component(Input.name, Input)
StSwitch.install = Vue => Vue.component(Switch.name, Switch)

export { StButton, StDialog, StInput, StSwitch }

export default StarUI
