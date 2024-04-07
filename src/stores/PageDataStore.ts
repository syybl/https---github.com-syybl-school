import { defineStore } from "pinia";
import { ref } from "vue";
import type { WelcomeMessage } from "@/type";
export const usePageStore = defineStore("Page", () => {
  const  WelcomeMessage = ref<WelcomeMessage>({
    TodayMessage: [
      {
        title: "欢迎使用，网络异常",
        earnings: 100,
        comparison: 10,
      },
    ],
    CharData:[]
  });
  return {
    WelcomeMessage
  };
});
