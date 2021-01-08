<template>
  <div>
    <div class="CENTER">
          <h1>E-WALLET</h1>
    <h3>ACTIVE CARD</h3>
    </div>

    <Card
      v-bind:myCardsNumber="activeCard.myCardsNumber"
      v-bind:myCardsHolder="activeCard.myCardsHolder"
      v-bind:validMonth="activeCard.validMonth"
      v-bind:validYear="activeCard.validYear"
      v-bind:myCardscolor="activeCard.bgcolor"
      v-bind:textColor="myCards.color"
      v-bind:vendorIcon="myCards.img"
    />

    <!-- <a id="button"
    v-on:click ="deleteCard()"
    
    >Delete myCards </a> -->

    <CardStack @myCardsClick="myCardsClick($event)" />

    <router-link id="newCardButton"  to="/AddCard">add new myCards</router-link>
  </div>
</template>

<script>

import CardStack from "@/components/CardStack.vue";
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: {
    CardStack,    
    Card,
  },
  data() {
    return {
      myCards: this.$root.myCards[0],
    };
  },
  computed: {
    activeCard() {
      return this.myCards;
    },
  },
  methods: {
    myCardsClick(myCards) {
      this.myCards = myCards;
    },
  },
};
</script>

<style >

#newCardButton:hover {
  background-color: black;
    color: white;
}

.CENTER{
  justify-content: center;
}
#newCardButton {
  display: flex;
  margin: 2, 1rem 0;
  font-size: 1rem;
  border-radius: 0.4rem;
  max-width: 23rem;
  text-transform: uppercase;
  align-items: center;
  height: 3rem;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  border: 0.12rem solid #000;
}
</style>