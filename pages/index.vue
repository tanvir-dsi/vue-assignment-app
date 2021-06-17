<template>
  <div>
    <VueAnnouncer/>
    <DashboardHero  />
    <div style="display: flex; flex-direction: row; ">
      <ProductsDetails
      />
      <ProductsDetails/>

    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    this.getIncidents();
  },
  data() {
    return {
      incidents :"",
    }
  },
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    },
    incidentList(){
      return this.$store.getters["products/getIncidents"];
    }
  },
  methods : {
    async getIncidents() {
      let res = await this.$store.dispatch('products/getIncidents');
      this.incidents = res.data;
    },
    // callAnouncer () {
    //   this.$announcer.assertive('My notification error');
    // }

  }

}
</script>

<style>

</style>
