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
    path: "/course/edit",
    name: "editcourse",
    component: () => import("@/views/course/components/editcourse.vue"),
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
  {
    path:"/refund",
    name:"refund",
    component:()=>import("@/views/refund/index.vue")
  },
  {
    path: "/student",
    name: "student",
    component: () => import("@/views/student/index.vue"),
  },
  {
    path:"/teacher",
    name:"teacher",
    component:()=>import("@/views/teacher/index.vue")
  },
  {
    path:"/image",
    name:"image",
    component:()=>import("@/views/image/index.vue")
  },{
    path:"/article",
    name:"article",
    component:()=>import("@/views/article/index.vue")
  },
  {
    path:"/activity",
    name:"activity",
    component:()=>import("@/views/activity/index.vue")
  },
  {
    path:"/coupon",
    name:"coupon",
    component:()=>import("@/views/coupon/index.vue")
  }
]
export default routes;
