import { defineStore } from "pinia";
import { ref } from "vue";

export const useOptionStore = defineStore(
  "Option",
  () => {
    const activePath = ref<string>("/welcome");
    return {
      activePath,
    };
  },{
    persist: { 
        enabled: true,
      }
  }
);