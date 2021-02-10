const app = Vue.createApp({
    data() {
        return {
            yourName: 'Lola Katharina Jahn',
            yourAge: 32,
            vueLink: 'https://static.wikia.nocookie.net/mystic-messenger/images/b/b8/Seven_33.png/revision/latest/scale-to-width-down/682?cb=20161012193503'
        };
    },
        methods: {
            calculateAge() {
                return this.yourAge + 5;
            },
            calculateRandom() {
                return Math.random();
            }
        }
});
// Connects to the part of the HTML code with #assignment
app.mount('#assignment');