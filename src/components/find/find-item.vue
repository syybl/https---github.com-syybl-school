<template>
  <div
    class="find"
    :style="{
      height: height,
      backgroundColor: backGroundColor,
      color: color,
      padding: '2vw',
    }"
  >
    <div
      v-for="item in data"
      class="line"
      :style="{
        fontSize: fontSize,
      }"
    >
      <div v-for="(value, index) in item" :key="index">
        <span>{{ value.title }}</span>
        <el-date-picker
          v-if="value.type === 'time'"
          v-model="time"
          type="daterange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          :style="{
            flex: 1,
          }"
        />
      
        <el-cascader :options="value.options"
        :placeholder="value.placeholder"
          v-else-if="value.type === 'select'"
          :style="{
            flex: 1,
          }"
        ></el-cascader>
        <el-input v-else 
        :style="{
            flex: 1,
          }"></el-input>
      </div>
   
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { FindItme } from "@/type";
const time = ref("");

const { data } = defineProps({
  height: {
    type: String,
    default: "10vw",
  },
  backGroundColor: {
    type: String,
    default: "#fff",
  },
  color: {
    type: String,
    default: "#000",
  },
  padding: {
    type: String,
    default: "2vw",
  },
  fontSize: {
    type: String,
    default: "1vw",
  },
  data: {
    type: Array as () => FindItme[][],
    default: () => [],
  },
});
</script>

<style scoped>
.find {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.line {
  width: 100%;
  margin-bottom: 1vw;
  display: flex;
}
.line > div {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2vw;
}

.line span {
  margin-right: 0.5vw;
  width: 18% !important;
}
</style>
