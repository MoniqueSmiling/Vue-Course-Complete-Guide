<template>
  <section>
    <user-data @add-user="addUser"></user-data>
    <ul>
      <active-user
        v-for="user in users"
        :key="user.userName"
        :user-name="user.userName"
        :age="user.age"
      ></active-user>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          userName: "Yoosung★",
          age: "21",
        },
        {
          userName: "707",
          age: "22",
        },
      ],
    };
  },
  methods: {
    addUser(userName, age) {
      const newUser = {
        userName: userName,
        age: age,
      };
      this.users.push(newUser);
    },
  },
};
</script>