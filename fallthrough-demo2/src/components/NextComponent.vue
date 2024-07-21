<template>
  <button v-bind="$attrs">{{ $attrs }}</button>
  <div >A</div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "NextComponent",
};
</script>

<style>
.custom-span {
  background-color: rgb(180, 12, 12);
  color: white;
}
</style>
