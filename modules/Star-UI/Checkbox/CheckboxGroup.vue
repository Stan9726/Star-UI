<template>
  <div class="st-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StCheckboxGroup',
    props: {
      value: {
        type: Array
      }
    },
    provide() {
      return {
        CheckboxGroup: this
      }
    }
  }
</script>

<style scoped lang="scss"></style>
