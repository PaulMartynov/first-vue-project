<template>
  <b-container>
    <div class="form-wrapper">
      <b-form @submit.prevent="createOwner">
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Username:"
          for="username">
          <b-col :md="5">
            <b-input
              id="username"
              v-model="formData.username"
              maxlength="60"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="name:"
          for="name">
          <b-col :md="5">
            <b-input
              id="name"
              v-model="formData.name"
              type="text"
              required />
          </b-col>
        </b-form-group>
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Address:"
          for="Address">
          <b-col :md="5">
            <b-input
              id="Address"
              v-model="formData.address"
              maxlength="100"
              required />
          </b-col>
        </b-form-group>
        <hr>
        <b-form-group>
          <b-button variant="success">{{"Ok"}}</b-button>
          <b-button variant="danger">{{"Cancel"}}</b-button>
        </b-form-group>
      </b-form>
    </div>
    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true"
      @ok="onAlertModalOkClick">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>

<script>
export default {
  name: 'UserCreate',
  data() {
    return {
      formData: {
        name: '',
        username: '',
        address: '',
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessfully: false,
    };
  },
  methods: {
    createOwner() {
      this.isSuccessfully = true;
      this.alertModalTitle = 'Successfully';
      this.alertModalContent = 'Successfully created Account Owner';
      this.$refs.alertModal.show();
      this.formData = {
        name: '',
        dateOfBirth: '',
        address: '',
      };
    },
    onAlertModalOkClick() {
      if (this.isSuccessfully) {
        this.$router.push({ name: 'UserList' });
      }
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  margin-top: 20px;
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
}
</style>
