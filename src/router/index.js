import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import NotFound from '@/components/error-pages/NotFound';
import UsersList from '@/components/users/UsersList.component';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/users/list',
      name: 'UsersList',
      component: UsersList,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
