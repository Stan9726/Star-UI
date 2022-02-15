<template>
  <div class="st-form-item">
    <label :style="labelStyle" class="st-form-item_label">{{ label }}</label>
    <div class="st-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StFormItem',
    props: {
      label: {
        type: String,
        default: ''
      }
    },
    inject: ['Form'],
    computed: {
      labelStyle() {
        return {
          width: this.Form.labelWidth
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .st-form-item {
    margin-bottom: 5px;

    .st-form-item_label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }

    .st-form-item_content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
