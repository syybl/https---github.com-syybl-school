<template>
  <div class="one">
    <el-row :gutter="20">
      <!-- <el-col :span="6" v-for="(item, index) in TodayMessage" :key="item.title"
        ><TodayMessageitem
          :BackGround="color[index]"
          :data="item"
          :icon="icon[index]"
        ></TodayMessageitem>
      </el-col> -->
    </el-row>

    
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import * as echarts from "echarts";
import TodayMessageitem from "./components/TodayMessage.vue";
import Axios from "@/util/Axios";
const color = ref(["#52d6cb", "#d367ce", "#fea55b", "#fe7866"]);
const CharTime = ref<HTMLElement>();
const CharMoney = ref<HTMLElement>();

const icon = ref([
  "icon-qiandai",
  "icon-haoyoutuijie",
  "icon-dingdan",
  "icon-yinglishuai",
]);


onMounted(() => {

});
</script>

<style scoped>
* {
  --CharHeight: 100%;
}
.one {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
}
.el-row {
  width: 100%;
  height: 10vw;
}


</style>
