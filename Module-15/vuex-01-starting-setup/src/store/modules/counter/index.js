import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

// Adding modules
const counterModule = {
    // Now the entire module is detached from the rest of the store
    namespaced: true,
    // State is local to module
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
};

export default counterModule;