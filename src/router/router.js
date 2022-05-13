import {createWebHistory, createRouter} from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import Scrolling from "../views/Scrolling.vue";
import VideoView from "../views/VideoView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: LandingPage,
    },
    {
        path: "/scroll",
        name: "Scrolling animations",
        component: Scrolling,
    },
    {
        path: "/video",
      name: "Backrooms Video",
        component: VideoView,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
