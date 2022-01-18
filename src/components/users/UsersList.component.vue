<template>
  <div>
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
              <th>Name</th>
              <th>Address</th>
              <th>Company</th>
              <th>Details</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr
              v-for="user in users"
              :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ `${user.address.city}, ${user.address.street}, ${user.address.suite}` }}</td>
              <td>{{ user.company.name }}</td>
              <td>
                <b-button variant="secondary">Details</b-button>
              </td>
              <td>
                <b-button variant="success">Update</b-button>
              </td>
              <td>
                <b-button variant="danger">Delete</b-button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import UsersService from '@/api-services/users.service';

export default {
  name: 'UsersList',
  data() {
    return {
      users: [],
    };
  },
  created() {
    UsersService.getAll().then((response) => {
      this.users = response.data;
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error.response.data);
    });
  },
};
</script>

<style scoped>

</style>
