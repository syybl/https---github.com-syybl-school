import login from "@/views/login/index.vue";
import type { RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/Test/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/welcome",
    name: "welcome",
    component: () => import("@/views/welcome/index.vue"),
  },
  {
    path: "/course",
    name: "course",
    component: () => import("@/views/course/index.vue"),
    children: [],
  },
  {
    path: "/course/add",
    name: "addcourse",
    component: () => import("@/views/course/components/addcourse.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/order/index.vue"),
    meta: {
      title: "订单管理",
    },
  },
  {
    path: "/order/ordermessage",
    name: "ordermessage",
    component: () => import("@/views/order/components/OrderMessage.vue"),
  },
];

export default routes;
