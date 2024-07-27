<template>
  <div id="app">
    <nav>
      <router-link to="/teams">Teams</router-link>
      <router-link to="/teams/1">Team 1</router-link>
      <router-link to="/users">Users</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>


