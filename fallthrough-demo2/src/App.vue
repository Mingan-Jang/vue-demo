<!-- App.vue -->
<template>
  <div>
    <h1>Fallthrough Attribute 範例</h1>
    <MyButton @click="appEvent" class="large" />

    <h1>Attribute 範例</h1>
    <AttrsFather />

    <h1>跳過下個組件，顯現在下下一個組件</h1>
    <NextComponent class="custom-span appclass" @click="handleApp" />
  </div>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import AttrsFather from "./components/AttrsFather.vue";
import NextComponent from "./components/NextComponent.vue";

export default {
  name: "App",
  components: {
    MyButton,
    AttrsFather,
    NextComponent,
  },
  methods: {
    appEvent() {
      console.log("appEvent occured");
    },
    handleApp() {
      console.log("handleApp occured");
    },
  },
};
</script>

<style scoped>
.large {
  background-color: orange;
  font-size: 20px;
  padding: 10px;
}

.appclass {
  border-radius: 15px;
}
</style>



