<template>
  <div class="container">
    <div class="text-container">
      <h1 @click="notify" style="cursor: pointer;" class="header">Find your Fire Extinguisher</h1>
      <p class="snippet">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto illum quidem asperiores, cum nisi aperiam eius ipsa sapiente odit!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  methods:{
    notify () {
      this.$announcer.set('Its error message', 'assertive')
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
