 export default {
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
         }
 }