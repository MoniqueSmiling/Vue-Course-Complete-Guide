<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      // Finds the team which id is equal to const teamId
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      // Assigns members from selectedTeam to const members
      const members = selectedTeam.members;
      // Create empty array named selectedMembers
      const selectedMembers = [];
      // Loops through every team of members array
      for (const member of members) {
        // Finds user which id is equal to member (another id) and assigns it to const selectedUser
        const selectedUser = this.users.find((user) => user.id === member);
        // Push selectedUser to empty array selectedMembers
        selectedMembers.push(selectedUser);
      }
      //Assigns selectedMembers to local data property members
      this.members = selectedMembers;
      //Assigns selectedTeam.name to local data property teamName
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    // this.$route.path // Example teams/t1
    this.loadTeamMembers(this.teamId);
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>