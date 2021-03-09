import {
    createStore
} from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './modules/counter/index.js';

// Our main store
const store = createStore({
    // Import separate module inside the main store
    modules: {
        // the namespace name is numbers
        numbers: counterModule,
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    // Mutations must be synchronous
    mutations: rootMutations,
    // Good practice to use actions between components and mutations
    // actions are allowed to run asynchronous code
    // You can dispatch an action within an action
    // Don't manipulate the state from within an action, use mutations instead
    actions: rootActions,
    getters: rootGetters,
});

export default store;