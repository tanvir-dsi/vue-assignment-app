<template>
  <div class="container" style="display: flex; flex-direction: row; justify-content: space-around; width: 100%;">
    <vs-card
      v-for="card in incidents"
      :key="card._id"
    >
      <template>
        <h3>{{ card.type}}</h3>
      </template>
      <template #img>
        <img src="~/assets/svg/fire-extinguisher.svg" alt="User Image">
      </template>
      <template #text>
        <p>
          {{card.user}}
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat' ></i>
          <span class="span">
            {{card.text}}
        </span>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  computed: {
    incidents() {
      return this.$store.getters["products/getIncidents"];
    }
  }
}
</script>

<style scoped>

</style>
