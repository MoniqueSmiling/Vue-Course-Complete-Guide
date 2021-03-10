// Importing router and history
import {
    createRouter,
    createWebHistory
} from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

// Creating variable to hold the router
const router = createRouter({
    // Holds users browsing history
    history: createWebHistory(),
    // Routes to different components
    routes: [{
            path: '/',
            redirect: '/teams'
        }, // redirects to '/teams'
        {
            name: 'teams',
            path: '/teams',
            meta: {
                needsAuth: true
            },
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [{
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                }, // Dynamic segment, nested route
            ]
        }, // our-domain.com/teams => TeamsList (, alias: '/' )
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('users beforeEnter')
                console.log(to, from);
                next();
            }
        },

        {
            path: '/:notFound(.*)',
            component: NotFound
        } // Routes any unknown path, should come last as it will overwrite other routes
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition) {
        // console.log(to, from, savedPosition)
        // If savedPosition exist, we go back...
        if (savedPosition) {
            // savedPosition is returned
            return savedPosition;
        }
        return {
            left: 0,
            top: 0
        };
    }
});

// Before each navigation action, this function will be called
router.beforeEach(function (to, from, next) {
    console.log("Global beforeEach");
    console.log(to, from);
    // Checks metadata for whether it needs authentication
    if (to.meta.needsAuth) {
        console.log('Needs Auth!');
        next();
    } else {
        next();
    }
});

// Runs after
router.afterEach(function (to, from) {
    // Can be used for sending analytics data
    console.log('Global afterEach')
    console.log(to, from);
});

export default router;