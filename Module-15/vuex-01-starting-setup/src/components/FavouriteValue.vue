<template>
  <h3>{{ counter }}</h3>
  <p>We do more...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      // Without namespace
      // return this.$store.getters.normalizedCounter;
      // With namespace
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
