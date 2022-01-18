<template>
  <div class="user-info">
    <div class="well">
      <div class="row">
        <div class="col-md-3">
          <strong>Name:</strong>
        </div>
        <div class="col-md-3">
          {{ user.name }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>UserName:</strong>
        </div>
        <div class="col-md-3">
          {{ user.username }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>Email:</strong>
        </div>
        <div class="col-md-3">
          {{ user.email }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <strong>Phone:</strong>
        </div>
        <div class="col-md-3">
          {{ user.phone }}
        </div>
      </div>
      <div
        v-if="user.address.suite && `${user.address.suite}`.includes('Suite')"
        class="row">
        <div class="col-md-3">
          <strong>Address:</strong>
        </div>
        <div class="col-md-3">
          <span class="text-success">
            {{ `${user.address.city}, ${user.address.street}, ${user.address.suite}` }}
          </span>
        </div>
      </div>
      <div
        v-else
        class="row">
        <div class="col-md-3">
          <strong>Address:</strong>
        </div>
        <div class="col-md-3">
          <span class="text-info">
            {{ `${user.address.city}, ${user.address.street}, ${user.address.suite}` }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersService from '@/api-services/users.service';

export default {
  name: 'UserDetails',
  data() {
    return {
      user: {
        address: {},
      },
    };
  },
  created() {
    UsersService.get(this.$router.currentRoute.params.id).then((response) => {
      this.user = response.data;
    });
  },
};
</script>

<style scoped>
  .user-info {
    margin-top: 50px;
  }
</style>
