<template>
  <div class="container text-center p-3">
    <div class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-outline-danger" @click="goBack" type="button">Go Back</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
