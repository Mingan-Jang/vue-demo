<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">setGoal</button>
    <error-alert v-if = "inputIsVisible">
      <h2>Error</h2>
      <span>Plz input</span>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsVisible: false,
    };
  },
  methods: {
    setGoal() {
      const enterVal = this.$refs.goal.value;
      if (enterVal === "") {
        this.inputIsVisible = true;
        alert("Should not be empty");
      }
    },
  },
};
</script>
