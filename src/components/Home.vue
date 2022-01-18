<template>
  <p class="homeText">
    HOME-Root
  </p>
</template>

<script>
import UsersService from '@/api-services/users.service';

export default {
  name: 'Home',
  created() {
    UsersService.getAll().then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data);
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error.response.data);
    });
  },
};
</script>

<style scoped>
.homeText{
  font-size: 35px;
  color: red;
  text-align: center;
  position: relative;
  top:30px;
  text-shadow: 2px 2px 2px gray;
}
</style>
