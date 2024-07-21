<template>
  <div>
    <h1>父组件</h1>
    <AttrsChild
      class="child-class"
      @customEvent="handleCustomEvent"
      foo="bar"
    />
  </div>
</template>

<script>
import AttrsChild from "./AttrsChild.vue";

export default {
  name: "AttrsFather",
  components: {
    AttrsChild,
  },
  methods: {
    handleCustomEvent() {
      console.log("在父组件中触发自定义事件");
    },
  },
};
</script>

<style scoped>
/* 父组件的作用域样式 */
</style>
