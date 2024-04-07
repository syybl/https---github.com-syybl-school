import { defineStore, type Store } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { ref, type Ref } from "vue";
import type { RouterInformaction } from "@/type";
import type { Router, RouteRecordRaw, RouteRecordName } from "vue-router";
import Axios from '@/util/Axios'
export const useRouterStore = defineStore(
  "router",
  () => {
    const router = useRouter(); // Get router
    const currentRoute = ref<string>("/Login");
    /**
     * 跳转路由
     * @param route // Jump Path
     */
    const skipRouter = (route: string) => {
      currentRoute.value = route; // save current route
      router.push(route); // Skip router
    };


    return {
      skipRouter,
      router,
      currentRoute,
    };
  },
  {
    persist: {
      enabled: true,
      paths: ["currentRoute"],
    },
  }
);
