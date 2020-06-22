import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import AdminProfilePage from '../views/AdminProfilePage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import HighlightsPage from '../views/HighlightsPage.vue'
import MeetBelgradePage from '../views/MeetBelgradePage.vue'
import GamesPage from '../views/GamesPage.vue'
import AccResPage from '../views/AccResPage.vue'
import RequestsPage from '../views/RequestsPage.vue'
import ArenaReservationPage from '../views/ArenaReservationPage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/adminprofile',
        name: 'AdminProfilePage',
        component: AdminProfilePage
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: ProfilePage
    },
    {
        path: '/highlights',
        name: 'HighlightsPage',
        component: HighlightsPage
    },
    {
        path: '/meetbelgrade',
        name: 'MeetBelgradePage',
        component: MeetBelgradePage
    },
    {
        path: '/games',
        name: 'GamesPage',
        component: GamesPage
    },
    {
        path: '/accres',
        name: 'AccResPage',
        component: AccResPage
    },
    {
        path: '/requests',
        name: 'RequestsPage',
        component: RequestsPage
    },
    {
        path: '/arenareservation',
        name: 'ArenaReservationPage',
        component: ArenaReservationPage
    }
]

const router = new VueRouter({
    routes
})

export default router