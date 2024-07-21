<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop="xxx"> {{ goal }} </slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ['Learn Vue.js', 'Build an App', 'Master JavaScript']
    };
  },
};
</script>
