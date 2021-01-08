<template>
  <div>
    <div
      id="myCards"
      :style="{ backgroundColor: myCardscolor, color: textColor }"
    >
      <header>
        <img src="@/assets/chip-light.svg"  />

        <img v-if="vendorIcon" :src="require('@/assets/' + vendorIcon)" />
      </header>

      <section class="info">
        <aside
         class="myCardsholder">
          <span
          >Cardholder </span>
          <p>
            {{ myCardsHolder }}
          </p>
        </aside>
        <aside class="valid">
          <span
          >Valid until</span>
          <p>{{ validMonth }} / {{ validYear }}</p>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vendorIcon: {
      type: String,
    },

    myCardsHolder: {
      type: String,
    },

    myCardscolor: {
      type: String,
    },
        textColor: {
      type: String,
    },
    validYear: {
      type: String,
    },
    validMonth: {
      type: String,
    },

    myCardsNumber: {
      type: String,
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
header {
  display: flex;
  grid-column: auto/span 2;
  grid-row: auto/span 2;
  justify-content: space-between;
  align-items: flex-start;
}
#myCards {
  height: 14rem;
  border-radius: 0.6rem;
  gap: 0.6rem 0;
  width: 360px;
  grid-auto-rows: 2.7rem;
  padding: 1rem;
  box-sizing: border-box;
  display: grid;
  max-width: 23rem;

  background: linear-gradient(
      237.75deg,
      hsla(0, 0%, 100%, 0.24),
      hsla(0, 0%, 100%, 0)
    ),
    #d0d0d0;
}

.info {
  grid-column: auto/span 2;
  display: flex;
    grid-row: auto/span 1;
}
#myCards .myCardsholder .info  {
  flex: 1;
}
aside {
  display: block;
}
#myCards section aside.valid span {
  text-align: right;
}
#myCards section aside span {
  display: block;
  margin: 0 0 0.25rem;
  font-size: 0.7rem;
}
#myCards section aside.valid p {
  text-align: right;
}
#myCards section aside p {
    margin: 0;
  display: block;
    padding: 0;
  text-transform: uppercase;
}
</style>