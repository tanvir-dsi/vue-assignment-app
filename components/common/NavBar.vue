<template>
  <vs-navbar center-collapsed v-model="active">
    <vs-navbar-item :active="active === 'guide'" id="guide">
      <NuxtLink to="/">Firengii</NuxtLink>
    </vs-navbar-item>
    <vs-navbar-item :active="active === 'docs'" id="docs">
      <NuxtLink to="/products">Documents</NuxtLink>
    </vs-navbar-item>
    <vs-navbar-item :active="active === 'components'" id="components">
      Components
    </vs-navbar-item>
    <vs-navbar-item :active="active === 'license'" id="license">
      license
    </vs-navbar-item>
    <template #right>
      <vs-button flat >Login</vs-button>
      <vs-button>Get Started</vs-button>
    </template>
  </vs-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data:() => ({
    active: 'guide'
  })
}
</script>

<style scoped>

</style>
