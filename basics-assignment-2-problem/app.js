const app = Vue.createApp({
    data() {
        return {
            input: '',
            inputEnter: ''
        }
    },
    methods: {
        showAlert() {
            alert('This works!');
        },
        registerInput(event) {
            this.input = event.target.value;
        },
        registerInputEnter(event) {
            this.inputEnter = event.target.value;
        }
    }
});
app.mount('#assignment');