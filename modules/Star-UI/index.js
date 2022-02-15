import Button from './Button'
import Dialog from './Dialog'
import Input from './Input'
import Switch from './Switch'
import { Radio, RadioGroup } from './Radio'
import { Checkbox, CheckboxGroup } from './Checkbox'
import { Form, FormItem } from './Form'

const StarUI = {},
  StButton = {},
  StDialog = {},
  StInput = {},
  StSwitch = {},
  StRadio = {},
  StRadioGroup = {},
  StCheckbox = {},
  StCheckboxGroup = {},
  StForm = {},
  StFormItem = {}

const COMPONENTS = [Button, Dialog, Input, Radio, RadioGroup, Form, FormItem]

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
StRadio.install = Vue => Vue.component(Radio.name, Radio)
StRadioGroup.install = Vue => Vue.component(RadioGroup.name, RadioGroup)
StCheckbox.install = Vue => Vue.component(Checkbox.name, Checkbox)
StCheckboxGroup.install = Vue =>
  Vue.component(CheckboxGroup.name, CheckboxGroup)
StForm.install = Vue => Vue.component(Form.name, Form)
StFormItem.install = Vue => Vue.component(FormItem.name, FormItem)

export {
  StButton,
  StDialog,
  StInput,
  StSwitch,
  StRadio,
  StRadioGroup,
  StCheckbox,
  StCheckboxGroup,
  StForm,
  StFormItem
}

export default StarUI
