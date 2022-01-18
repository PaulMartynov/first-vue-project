<template>
  <tr>
    <td>{{ user.username }}</td>
    <td>{{ `${user.address.city}, ${user.address.street}, ${user.address.suite}` }}</td>
    <td>{{ user.company.name }}</td>
    <td>
      <b-button variant="secondary" @click="onDetailsClick">Details</b-button>
    </td>
    <td>
      <b-button variant="success" @click="onUpdateClick">Update</b-button>
    </td>
    <td>
      <b-button variant="danger" @click="onDeleteClick">Delete</b-button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'UsersListRow',
  props: ['user'],
  methods: {
    onDetailsClick() {
      this.$emit('details', this.user.id);
    },
    onUpdateClick() {
      this.$emit('update', this.user.id);
    },
    onDeleteClick() {
      this.$emit('delete', this.user.id);
    },
  },
};
</script>

<style scoped>

</style>
