import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components//users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UserList },
    { path: '/teams/:teamId', component: TeamMembers },

  ],

});


app.use(router)
app.mount('#app');
