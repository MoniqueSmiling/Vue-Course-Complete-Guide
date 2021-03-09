export default {
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
}