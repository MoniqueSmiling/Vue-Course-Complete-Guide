<template>
  <ul>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save Changes</button>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // Makes us go to teams
      this.$router.push('/teams');
      // Go forth and back
      // this.$router.back();
      // this.$router.forward();
    },
    saveChanges() {
      this.changesSaved = true;
    },
  },
  // If Vue router is used it gets called before navigation to this component is confirmed
  beforeRouteEnter(to, from, next) {
    console.log('UserList Cmp beforeRouterEnter');
    console.log(to, from);
    next();
  },
  // Calls this before beforeEach and beforeEnter guards
  beforeRouteLeave(to, from, next) {
    console.log('Userslist Cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('Are you sure? You got unsaved changes');
      next(userWantsToLeave);
    }
  },
  // Runs after the user leaves the page
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>