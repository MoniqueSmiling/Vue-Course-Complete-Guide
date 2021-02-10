const app = Vue.createApp({
    data() {
        return {
            styleName: '',
            buttonVisibility: 'visible',
            inputBackgroundColor: ''
        }
    },
    methods: {
        visibility() {
            
            if(this.buttonVisibility === 'visible') {
                return this.buttonVisibility = 'hidden';
            }
            return this.buttonVisibility = 'visible';
        }
    }

});

app.mount('#assignment');