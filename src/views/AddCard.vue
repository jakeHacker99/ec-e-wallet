<template>
  <div class="">
    <router-link to="/">back</router-link>
    <h1>Add New Card</h1>

    <h3>New Card</h3>
    <CardForm v-on:addcard="addCard($event)"  />
  </div>
</template>


<script>
import CardForm from "@/components/CardForm.vue";

export default {
  components: {
    CardForm
  },  methods: {
    addCard(myCards) {
      this.$root.myCards.push(myCards);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>