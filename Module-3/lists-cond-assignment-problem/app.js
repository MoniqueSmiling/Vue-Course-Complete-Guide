const app = Vue.createApp({
    data() {
        return {
            taskInput: '',
            tasks: [],
            taskListIsVisible: true,
        }
    },
    computed: {
        toggleText() {
            return this.taskListIsVisible ? 'Hide' : 'Show';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskInput);
        },
        toggleTaskList() {
           this.taskListIsVisible = !this.taskListIsVisible; 
        }
    }
}); 

app.mount('#assignment');