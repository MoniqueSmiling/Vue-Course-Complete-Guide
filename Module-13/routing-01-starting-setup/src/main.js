import { createApp } from 'vue';
// Importing router and history
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

// Creating variable to hold the router
const router = createRouter({
    // Holds users browsing history
    history: createWebHistory(), 
    // Routes to different components
    routes: [
        { path: '/', redirect: '/teams'}, // redirects to '/teams'
        {
            path: '/teams',
            component: TeamsList
        }, // our-domain.com/teams => TeamsList (, alias: '/' )
        { path: '/users', component: UsersList },
        { path: '/teams/:teamId', component: TeamMembers, props: true }, // Dynamic segment
        { path: '/:notFound(.*)', component: NotFound } // Routes any unknown path, should come last as it will overwrite other routes
],
linkActiveClass: 'active'
});
const app = createApp(App)

// Allows us to connect and use vue package
app.use(router); // in this case router
app.mount('#app');
