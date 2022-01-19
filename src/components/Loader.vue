<template>
  <div class="loader">
    <span class="spinner"></span>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style scoped>
.loader {
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
}
.spinner {
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #5a9fff transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
