# Stan-UI

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 组件

### Button组件

1. 参数支持

| 参数名 | 参数描述 | 参数类型 | 默认值 |
| :----: | :----: | :----: | :----: |
| type | 按钮类型 | string | default |
| plain | 是否朴素按钮 | boolean | false |
| round | 是否圆角按钮 | boolean | false |
| circle | 是否圆形按钮 | boolean | false |
| disabled | 是否禁用按钮 | boolean | false |
| icon | 图标类名 | string | 无 |

1. 事件支持

| 参数名 | 事件描述 |
| :----: | :----: |
| click | 按钮点击事件 |

### Dialog组件

1. 参数支持

| 参数名 | 参数描述 | 参数类型 | 默认值 |
| :----: | :----: | :----: | :----: |
| title | 模态框标题 | string | 提示 |
| width | 模态框宽度 | string | 50% |
| top | 距顶部的距离 | string | 15vh |
| visible | 是否显示模态框 | boolean | false |

1. 事件支持

| 参数名 | 事件描述 |
| :----: | :----: |
| opened | 模态框显示事件 |
| closed | 模态框关闭事件 |

2. 插槽说明

| 插槽名称 | 插槽描述 |
| :----: | :----: |
| default | 模态框内容 |
| title | 模态框标题 |
| footer | 模态框底部操作区 |

### Input组件

1. 参数支持

| 参数名 | 参数描述 | 参数类型 | 默认值 |
| :----: | :----: | :----: | :----: |
| placeholder | 占位符 | string | 无 |
| type | 文本框类型 | string | text |
| disabled | 是否禁用 | boolean | false |
| clearable | 是否显示清空按钮 | boolean | false |
| show-password | 是否显示密码切换按钮 | boolean | false |
| name | name属性 | string | 无 |

2. 事件支持

| 事件名称 | 事件描述 |
| :----: | :----: |
| blur | 文本框失去焦点事件 |
| change | 文本框内容改变事件 |
| focus | 文本框获取焦点事件 |

### Switch组件

1. 参数支持

| 参数名 | 参数描述 | 参数类型 | 默认值 |
| :----: | :----: | :----: | :----: |
| v-model | 双向绑定 | boolean | false |
| name | name属性 | string | text |
| activeColor | 自定义激活颜色 | string | #1ec63b |
| inactiveColor | 自定义不激活颜色 | string |	#dd001b |

2. 事件支持

| 事件名称 | 事件描述 |
| :----: | :----: |
| change | Switch状态改变事件 |
