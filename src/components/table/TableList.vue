<template>
  <div class="table">
    <div class="title" v-if="title.length > 0">
      <span
        @click="
          () => {
            if (title[0].fun != undefined) title[0].fun();
          }
        "
        >{{ title[0].title }}</span
      >
      <div
        class="add"
        @click="
          () => {
            if (title[1].fun != undefined) title[1].fun();
          }
        "
      >
        <el-icon><Tickets /></el-icon>
        <span>{{ title[1].title }}</span>
      </div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{
        backgroundColor: '#f5faf8',
        color: '#666666',
      }"
    >
      <el-table-column prop="check" align="center" width="70">
        <template #header>
          <el-checkbox size="large" />
        </template>
        <template #default="scope">
          <el-checkbox size="large" />
        </template>
      </el-table-column>

      <el-table-column
        v-for="item in data"
        :prop="item.prop"
        :label="item.label"
        align="center"
      ></el-table-column>
      <el-table-column prop="operation" label="操作" align="center" width="150">
        <template #default="scope">
          <slot></slot>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Tabulation, TabulationTitle } from "@/type";
import { ref } from "vue";
defineProps({
  data: {
    type: Array as () => Tabulation[],
    default: [],
  },
  title: {
    type: Array as () => TabulationTitle[],
    default: [],
  },
});

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    id: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped>
span {
  margin-right: 0.5vw;
}
.table{
    background-color: #fff;
    padding: 2vw;
    margin-top: 2vw;
}

.page {
  width: 100%;
  display: flex;
  padding: 2vw;
  padding-right: 1vw;
  justify-content: end;
}
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom:1.5vw;
}
.add {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2bc17b;
}
.add span {
  margin-left: 0.3vw;
}

.el-table {
  border: 1px solid #dcebe4;
}
</style>
