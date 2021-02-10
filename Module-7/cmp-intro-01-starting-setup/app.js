const app = Vue.createApp({
    data() {
        return {
            friends: [{
                    id: 'manuel',
                    name: 'Manuel Lopez',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                }, {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },

            ]
        };
    }
});

// Components are like mini apps
// A costum html element
// always make it have a dash, to make sure your component names doesn't class with existing ones
app.component('friend-contact', {
    template: `
    <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone}}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lopez',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');