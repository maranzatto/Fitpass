import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import ClientsView from "@/views/ClientsView.vue";
import CreateClientView from "@/views/CreateClientView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "dashboard",
            component: DashboardView,
        },
        {
            path: "/clients",
            name: "clients",
            component: ClientsView,
        },
        {
            path: "/clients/create",
            name: "create-client",
            component: CreateClientView,
        },
    ],
});

export default router;
