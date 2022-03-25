import {createWebHistory, createRouter} from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import Scrolling from "../components/Scrolling.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: LandingPage
    },
    {
        path: "/scroll",
        name: "Scrolling animations",
        component: Scrolling
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
