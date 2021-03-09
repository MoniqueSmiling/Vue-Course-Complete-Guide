import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// Adding modules
const counterModule = {
    // // Now the entire module is detached from the rest of the store
    // namespaced: true,
    // State is local to module
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state) {
                state.counter++;
            },
            // payload makes it possible to add extra arguments
            // Payload can be anything.
            increase(state, payload) {
                console.log(state);
                state.counter += payload.value;
            },
    },
    actions: {
        // You can use the same name for a method here as you did in mutations
        // Context is an object: 
        increment(context) {
                setTimeout(function () {
                    console.log(context);
                    context.commit('increment');
                }, 2000);
            },
            increase(context, payload) {
                setTimeout(function () {
                    context.commit('increase', payload);
                }, 2000);
            },
    },
    getters: {
        // Won't work as isAuth state is only available in main store
        // testAuth(state) {
        //     return state.isLoggedIn;
        // },
        // // Workaround
        // testAuth(state, getters, rootState, rootGetters) {
        //     return state.isLoggedIn;
        // },
         finalCounter(state) {
                 return state.counter * 3;
             },
             // _ is a naming convention that shows you don't want to work with this argument ex. _, _2, _3 etc.
             normalizedCounter(_, getters) {
                 const finalCounter = getters.finalCounter;
                 if (finalCounter < 0) {
                     return 0;
                 }
                 if (finalCounter > 100) {
                     return 100;
                 }
                 return finalCounter;
             },
    }
};

// Our main store
const store = createStore({
    // Import separate module inside the main store
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    // Mutations must be synchronous
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    // Good practice to use actions between components and mutations
    // actions are allowed to run asynchronous code
    // You can dispatch an action within an action
    // Don't manipulate the state from within an action, use mutations instead
    actions: {
        login(context) {
            context.commit('setAuth', {isAuth: true});
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false});
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    },
});
const app = createApp(App);

app.use(store);
app.mount('#app');