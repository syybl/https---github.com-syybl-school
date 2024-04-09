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
    <!-- ------------------------------------------   -->
    <el-table
      :data="tableData"
      style="width: 100%"
      @cell-click="tableClick"
      :header-cell-style="{
        backgroundColor: '#f5faf8',
        color: '#666666',
      }"
    >
      <el-table-column
        type="selection"
        prop="all"
        label="全选"
        align="center"
        width="80"
      />

      <el-table-column
        v-for="item in data"
        :prop="item.prop"
        :label="item.label"
        align="center"
        :width="item.width as any | 120"
      >
        <template #default="scope">
          <div
            style="display: flex; align-items: center"
            v-if="item.type == 'slot'"
          >
            <el-image :src="imagePath(scope)" />
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="operation"
        label="操作"
        align="center"
        width="150"
        fixed="right">
        <slot name="operate"></slot>
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
const { title, tableData } = defineProps({
  data: {
    type: Array as () => Tabulation[],
    default: [],
  },
  title: {
    type: Array as () => TabulationTitle[],
    default: [],
  },
  tableData: {},
  tableClick: {
    type: Function,
    default: () => {},
  },
});

const imagePath = (scope:any) => {
  var imagePath = `http://localhost:8080${scope.row.image}`;
  console.log(scope);
  return imagePath;
};
</script>

<style scoped>
span {
  margin-right: 0.5vw;
}
.table {
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
  padding-bottom: 1.5vw;
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
