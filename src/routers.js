import HomeView from './components/HomeView.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LogIn from './components/LogIn.vue'
import AddPage from './components/AddPage.vue'
import UpdatePage from './components/UpdatePage.vue'
import adminView from './components/adminView.vue'

const routes = [
    {
        name: "Home",
        component: HomeView,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: "LogIn",
        component: LogIn,
        path: '/login'
    },
    {
        name: "AddPage",
        component: AddPage,
        path: '/alijonovIsAdmin/add'
    },
    {
        name: "UpdatePage",
        component: UpdatePage,
        path: '/update/:id'
    },
    {
        name: "adminView",
        component: adminView,
        path: '/alijonovIsAdmin'
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router