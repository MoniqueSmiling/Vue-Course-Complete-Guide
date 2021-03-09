export default {
    increment(state) {
            state.counter++;
        },
        // payload makes it possible to add extra arguments
        // Payload can be anything.
        increase(state, payload) {
            console.log(state);
            state.counter += payload.value;
        },
}