<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
// Is used to create automated computed properties
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // },
    ...mapGetters(['finalCounter']),
  },
};
</script>
