<template>
  <h2>Example $attrs Object</h2>
  <p>
    There are three elements on the root level of the component, and
    v-bind="$attrs" adds the "pink" id fallthrough attribute to the p-tag.
  </p>
  <div>
    <InfoBox id="pink" class="tiger" />
  </div>
</template>

<script>
import InfoBox from "./components/InfoBox.vue";

export default {
  name: "App",
  components: {
    InfoBox,
  },
};
</script>

<style>
.tiger {
  color: red;
}
</style>
