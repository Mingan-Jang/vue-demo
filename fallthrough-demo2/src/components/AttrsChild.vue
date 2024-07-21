<template>
  <div>
    <h2>子组件</h2>
    <p>Class 属性: {{ $attrs.class }}</p>
    <p>自定义事件监听器: {{ $attrs['onCustomEvent'] }}</p>
    <p>自定义属性: {{ $attrs.foo }}</p>
  </div>
</template>

<script>
export default {
  name: 'AttrsChild',
  mounted() {
    console.log('子组件挂载完成，带有以下属性:', this.$attrs);
  }
};
</script>

<style scoped>
/* 子组件的作用域样式 */
</style>
