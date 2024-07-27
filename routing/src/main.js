import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UserList from './components//users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: '/:noteFound(.*)', component: NotFound },

    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      // component: TeamsList,
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'teamsMembers',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: {
        default: UserList,
        footer: UserFooter,
      },
    },
  ],
  //   linkActiveClass: 'lac',
  //   linkExactActiveClass: 'leac'
});

app.use(router);
app.mount('#app');
