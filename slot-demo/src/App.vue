<template>
  <h1>Part 1</h1>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>

    <course-goals>
      <template v-slot:default="slotProps">
        <h2>{{ slotProps }}</h2>
        <!-- <p>Another Prop: {{ slotProps["another-prop"] }}</p> -->
      </template>
    </course-goals>
  </div>
  <br />
  <h1>Part 2</h1>
  <button @click="setSelectedComp('active-goals')">Active Goals</button>
  <button @click="setSelectedComp('manage-goals')">Manage Goals</button>
  <!-- Demo1 -->
  <!-- <active-goals v-if="selectedComp ==='active-goals'"></active-goals> -->
  <!-- <manage-goals v-if="selectedComp ==='manage-goals'"></manage-goals> -->
  <!-- Demo2 -->
  <keep-alive> <component :is="selectedComp"></component> </keep-alive>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComp: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComp(cmp) {
      this.selectedComp = cmp;
    },setGoal(){
      
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
