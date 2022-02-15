<template>
  <div class="st-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StRadioGroup',
    props: {
      value: null
    },
    provide() {
      return {
        RadioGroup: this
      }
    }
  }
</script>

<style scoped></style>
