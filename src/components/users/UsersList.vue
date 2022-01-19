<template>
  <div v-if="loading">
    <loader/>
  </div>
  <div v-else>
    <b-row>
      <b-col
        md="2"
        offset-md="10">
        <a href="#">Create user</a>
      </b-col>
    </b-row>
    <br>
    <b-row>
      <b-col md="12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Username</th>
              <th>Address</th>
              <th>Company</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              <users-list-row
                v-for="user in users"
                :key="user.id"
                :user="user"
                @details="detailsUser"
                @update="updateUser"
                @delete="deleteUser"
              />
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
    <b-modal
      ref="deleteConfirmModal"
      title="Confirm your action"
      @ok="onDeleteConfirm"
      @hide="onDeleteModalHide">
      <p class="my-4">Are you sure you want to delete this user?</p>
    </b-modal>

    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </div>
</template>

<script>
import UsersService from '@/api-services/users.service';
import UsersListRow from '@/components/users/UsersListRow';
import Loader from '@/components/Loader';

export default {
  name: 'UsersList',
  components: {
    UsersListRow,
    Loader,
  },
  data() {
    return {
      users: [],
      loading: true,
      selectedUserId: null,
      alertModalTitle: '',
      alertModalContent: '',
    };
  },
  created() {
    UsersService.getAll().then((response) => {
      this.users = response.data;
      this.loading = false;
    }).catch((error) => {
      this.loading = false;
      console.error(error.response.data);
    });
  },
  methods: {
    detailsUser(userId) {
      this.$router.push({ name: 'UserDetails', params: { id: userId } });
    },
    updateUser(userId) {
      console.log('update', userId);
    },
    deleteUser(userId) {
      this.selectedUserId = userId;
      this.$refs.deleteConfirmModal.show();
      // this.users = this.users.filter(user => user.id !== userId);
    },
    onDeleteConfirm() {
      this.alertModalTitle = 'Successfully';
      this.alertModalContent = 'Successfully deleted user';
      this.$refs.alertModal.show();
      this.users = this.users.filter(user => user.id !== this.selectedUserId);
    },
    onDeleteModalHide() {
      this.selectedUserId = null;
    },
  },
};
</script>

<style scoped>

</style>
