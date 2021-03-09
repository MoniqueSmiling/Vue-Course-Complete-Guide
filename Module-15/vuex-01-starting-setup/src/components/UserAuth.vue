<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  // Used for functions
  methods: {
    ...mapActions({ login: 'login', logout: 'logout' }),
  },
  // Used to keep eye on changes
  computed: {
    ...mapGetters({ isAuth: 'userIsAuthenticated' }),
  },
};
</script>
