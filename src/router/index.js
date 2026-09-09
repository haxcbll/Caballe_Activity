import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Admissions from "../views/Admissions.vue";
import j_lesson from "../views/j_lesson.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/admissions", name: "Admissions", component: Admissions },
  { path: "/j_lesson", name: "j_lesson", component: j_lesson }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
