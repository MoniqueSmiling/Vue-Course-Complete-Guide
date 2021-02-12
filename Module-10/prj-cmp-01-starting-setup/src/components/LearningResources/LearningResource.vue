<template>
  <li>
    <header>
      <div>
        <h2>{{ title }}</h2>
      </div>
      <button>Delete</button>
    </header>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: ['title', 'description', 'link'],
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>