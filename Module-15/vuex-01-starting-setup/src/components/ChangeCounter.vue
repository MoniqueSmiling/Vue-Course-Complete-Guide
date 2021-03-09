<template>
  <button @click="inc">Add 1</button>
  <button @click="increase({ value: 10 })">Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   // Utilizing mutation
    //   // this.$store.commit('increment');
    //   // Utilizing action
    //   this.$store.dispatch('increment');
    // },
    // Use ...mapActions to tell which actions we want to utilize
    // ...mapActions(['increment', 'increase']),
    // Alternative way of writing it:
    ...mapActions({
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>