import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// const counterModule = {
//     state() {
//         return {

//         }
//     },
//     mutations: {},
//     actions: {},
//     getters: {}
// };

const store = createStore({
    state() {
        return {
            counter: 0,
            isLoggedIn: false
        };
    },
    // Mutations must be synchronous
    mutations: {
        increment(state) {
                state.counter++;
        },
        // payload makes it possible to add extra arguments
        // Payload can be anything.
        increase(state, payload) {
            state.counter += payload.value;
        },
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    // Good practice to use actions between components and mutations
    // actions are allowed to run asynchronous code
    // You can dispatch an action within an action
    // Don't manipulate the state from within an action, use mutations instead
    actions: {
        // You can use the same name for a method here as you did in mutations
        // Context is an object: 
        increment(context) {
            setTimeout(function () {    
                console.log(context);
                context.commit('increment');
            }, 2000);
        },
        increase(context,payload) {
            setTimeout(function() {
                context.commit('increase',payload);
            }, 2000);
        },
        login(context) {
            context.commit('setAuth', {isAuth: true});
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false});
        }
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        // _ is a naming convention that shows you don't want to work with this argument ex. _, _2, _3 etc.
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if(finalCounter > 100) {
                return 100;
            }
        },
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
});
const app = createApp(App);

app.use(store);
app.mount('#app');