<template>
  <div>
    <h1>Get All Menus</h1>
    <p><button @click="goCreate">+ เพิ่มเมนูกาแฟ</button></p>
  </div>
</template>

<script>
export default {
  methods: {
    goCreate() {
      this.$router.push('/menu/create')
    }
  }
}
</script>

<style scoped></style>
