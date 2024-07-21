<!-- BaseButton.vue -->
<template>
  <button class="base-button">BaseButton</button>
</template>



<!-- test 4 with child component-->
<!-- <script>
export default {
  name: "BaseButton",
};
</script> -->

<!-- <style>
.base-button {
  color: white;
}
</style> -->

<!-- test 5 屬性的轉發 (Forwarding Attributes)  -->
<script>
export default {
  name: 'BaseButton',
  props: {
    myButtonClick: String, // BaseButton 可以接受的 prop
  },
};
</script>