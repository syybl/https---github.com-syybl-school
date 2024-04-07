<template>
  <div class="over">
    <div class="left"  @click="handli()">
      <TablerListDetails
        :width="size"
        :height="size"
        :Color="Color"
        class="margin"
      ></TablerListDetails>
      <span>{{ title }}</span>
    </div>
    <div class="right">
      <MaterialSymbolsHelpOutline
        :width="size"
        :height="size"
        :Color="Color"
        class="margin"
      ></MaterialSymbolsHelpOutline>
      <el-badge :value="200" :max="99"  class="item">
        <el-icon :size="size" :color="Color"><Bell /></el-icon>
      </el-badge>
      <div class="portrait margin">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span
          style="
            padding-right: 15px;
            border-right: 2px solid #a9abb3;
            margin-left: 10px;
          "
          >admin: 00220</span
        >
      </div>

      <div class="margin exit">
        <el-icon :size="size" :color="Color" class="margin"
          ><SwitchButton
        /></el-icon>
        <span>退出</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router' 
import MaterialSymbolsHelpOutline from "@/assets/icones/over/MaterialSymbolsHelpOutline.vue";
import TablerListDetails from "@/assets/icones/over/TablerListDetails.vue";

const router = useRouter()

defineProps({
  title: {
    type: String,
    default: "首页",
  },
});
const size = ref("1.7vw");
const Color = ref("#a9abb3");

const handli = () => {
  router.push('/test')
};

</script>
<style scoped>
.over {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #a9abb3;
}
.over > div,
.exit {
  display: flex;
  align-items: center;
  justify-content: center;
}

.portrait {
  display: flex;
  align-items: center;
  justify-content: center;
}

.margin {
  margin-right: 0.9vw;
}
.item{
  margin-right: 2vw;
}
</style>
