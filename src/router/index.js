import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Admissions from "../views/Admissions.vue";
import j_lesson from "../views/j_lesson.vue";
import SampleData from "@/views/SampleData.vue";
import SampleMethods from "@/views/SampleMethods.vue";
import SampleVmodel from "@/views/SampleVmodel.vue";
import Activity2_live from "@/views/Activity2_live.vue";

const routes = [
  { path: "/", name: "Main", component: Main },
  { path: "/admissions", name: "Admissions", component: Admissions },
  { path: "/j_lesson", name: "j_lesson", component: j_lesson },
  {path: "/SampleData", name: SampleData, component: SampleData},
  {path: "/SampleMethods", name: SampleMethods, component: SampleMethods},
  {path: "/Sample-vmodel", name: SampleVmodel, component: SampleVmodel},
  { path: "/activity2-live", name: "Activity2_live", component: Activity2_live }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
