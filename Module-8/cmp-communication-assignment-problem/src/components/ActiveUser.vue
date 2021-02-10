<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>Age: {{ age }}</h3>
  </section>
</template>

<script>
// ActiveUser should output a username (h2) and age (h3)
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>