<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="info">
    <b-navbar-brand :to="{ name: 'Home' }">Home</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'UsersList' }">Users</b-nav-item>
      <b-nav-item href="#">Third root</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  padding: 5px 10px;
}
</style>
