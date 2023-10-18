import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/actors",
    name: "actors",
    component: () => import("@/views/ActorList.vue"),
  },
  {
    path: "/actors/new_actor",
    name: "newActor",
    component: () => import("@/views/ActorForm.vue"),
  },
  {
    path: "/actors/:id",
    name: "actorDetails",
    component: () => import("@/views/ActorDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
