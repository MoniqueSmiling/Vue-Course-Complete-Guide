<template>
  <section>
    <form @submit.prevent="submitUserData">
      <div>
        <label>Username</label>
        <input type="text" v-model="enteredUserName" />
      </div>
      <div>
        <label>Age</label>
        <input type="text" v-model="enteredAge" />
      </div>
      <div>
        <button>Create User</button>
      </div>
    </form>
  </section>
</template>

<script>
// UserData should output two input fields => for name and age
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredUserName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitUserData() {
      this.$emit("add-user", this.enteredUserName, this.enteredAge);
    },
  },
};
</script>