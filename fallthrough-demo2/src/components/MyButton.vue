<!-- MyButton.vue -->
<template>
  <!-- test 1 with class inherited class/style-->
  <!-- <button class="mybtn">MyButton with appEvent</button>  -->

  <!-- test 2 not wrapped with root element -->
  <!-- 2.1 (X) -->
  <!-- <span class="mybtn">MyButton with appEvent (Wrong)</span> 
  <button class="mybtn">MyButton with appEvent</button>  -->

  <!-- 2.2 (O) -->
  <!-- <div>
    <span class="mybtn">MyButton with appEvent (Correct)</span> 
    <button class="mybtn">MyButton with appEvent</button> 
  </div> -->

  <!-- test 3 with class inherited class/style-->
  <!-- <button class="mybtn" @click="myButtonClick">
    MyButton with appEvent and myButtonClickEvent
  </button> -->

  <!-- test 4 with child component-->
  <!-- <base-button class="mybtn"></base-button> -->

  <!-- test 5 with child component-->
  <!-- <base-button class="mybtn" @click="myButtonClick"></base-button> -->

  <!-- test 6 with child component-->
  <span>Fallthrough attributes: {{ $attrs.class }} {{ $attrs.onClick.toString() }}</span>
</template>

<style>
.mybtn {
  color: red;
  background-color: black;
}
</style>

<!-- test 1 with class inherited class/style-->
<!-- <script>
export default {
  name: "MyButton",
  methods: {
    myButtonClick() {
      console.log("myButtonClick event occured");
    },
  },
};
</script> -->

<!-- test 4 with child component-->
<!-- <script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "MyButton",
  components: {
    BaseButton,
  },methods :{
    myButtonClick() {
      console.log('myButtonClick event occured');
    }
  }
};
</script> -->

<!-- test 4 with child component-->
<!-- <script>
import BaseButton from "./BaseButton.vue";

export default {
  // inheritAttrs: false,
  name: "MyButton",
  components: {
    BaseButton,
  },
  methods: {
    myButtonClick() {
      console.log("myButtonClick event occured");
    },
  },
};
</script> -->


<!-- test 6 with inheritAttrs & attrs-->
<script>

export default {
  inheritAttrs: false,
  name: "MyButton",
  methods: {
    myButtonClick() {
      console.log("myButtonClick event occured");
    },
  },
};
</script>
