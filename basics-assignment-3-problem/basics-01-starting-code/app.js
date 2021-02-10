const app = Vue.createApp({
data() {
        return {
            // Can be used for interpolation in the HTML
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps',
            vueLink: 'https://vuejs.org'
        };
    },
    // methods is a reserved term like data
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

// Mount connects to the section with the id user-goal
app.mount('#user-goal');

