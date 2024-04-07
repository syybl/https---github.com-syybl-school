import {
  createRouter,
  createWebHashHistory,
} from "vue-router";
import { useUserStore } from "@/stores/useUserStore";
import routes from "./routes";
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.path == "/login") {
    userStore.EmptyUser()
    next();
  } else if (userStore.Userinformation.state) {
    next();
  } else {
    next("/login");
  }
  console.log("路由跳转",to.path);
});

export default router;
