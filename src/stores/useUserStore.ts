import { defineStore } from "pinia";
import type { Ref } from "vue";
import { ref } from "vue";
import type { User } from "@/type";
import Axios from "@/util/Axios";

export const useUserStore = defineStore(
  "user",
  () => {
    const Userinformation: Ref<User> = ref<User>({
      id: "10",
      username: "xiaohong",
      password: "123456",
      state: false,
      
    });

    const EmptyUser = () => {
      Userinformation.value = {
        id: "10",
        username: "xiaohong",
        password: "123456",
        state: false,
      };
    };

    return {
      Userinformation,
      EmptyUser
    };
  },
  {
    persist: {
      enabled: true,
    },
  }
);
