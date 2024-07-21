<!-- App.vue -->
<template>
  <div>
    <h1>Style-scoped Attribute 範例</h1>
    <ComponentA/>
    <ComponentB/>
  </div>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";

export default {
  name: "App",
  components: {
    ComponentA,
    ComponentB
  },
  methods: {
    appEvent() {
      console.log("appEvent occured");
    },
  },
};
</script>
