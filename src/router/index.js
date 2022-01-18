import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import NotFound from '@/components/error-pages/NotFound';
import UsersList from '@/components/users/UsersList';
import UserDetails from '@/components/users/UserDetails';

Vue.use(Router);

export default new Router({
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
      path: '/users/:id',
      name: 'UserDetails',
      component: UserDetails,
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
