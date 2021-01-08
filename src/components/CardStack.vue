<template>
  <div>
    <section
     class="stackCards">
      <article
        @click="myCardsClick(myCards)" :key="i"
        v-for="(myCards, i) in myCards"
      >
        <Card
          :myCardsNumber="myCards.myCardsNumber"
          :myCardsHolder="myCards.myCardsHolder"
          :validYear="myCards.validYear"
          :validMonth="myCards.validMonth"
          :myCardscolor="myCards.bgcolor"
          :textColor="myCards.color"
          :vendorIcon="myCards.img"
        />
      </article>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card
  },
  data () {
    return {
      myCards: this.$root.myCards,
    };
  },
  methods: {
    myCardsClick(myCards) {
      this.$emit("myCardsClick", myCards);
    }
  }
};
</script>

<style scoped>
.stackCards {
  grid-auto-rows: 3.7rem;
  display: grid;
  margin: 2rem 0 13rem;
}
</style>