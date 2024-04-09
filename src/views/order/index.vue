<template>
  <findItem :data="find"></findItem>
  <TableList :data="tableItem" :title="title">
    <template #operate>
      <div class="operation">
        <div>
          <span>查看</span>
        </div>
        <span>取消</span>
      </div>
    </template>
  </TableList>
</template>

<script setup lang="ts">
import findItem from "@/components/find/find-item.vue";
import TableList from "@/components/table/TableList.vue";
import { ref, onMounted } from "vue";
import type { FindItme, Tabulation, TabulationTitle } from "@/type";
import { tableItem, find, title } from "./meta";

onMounted(() => {});
</script>

<style scoped>
.operation {
  display: flex;
  justify-content: center;
  align-items: center;
}

span {
  margin-right: 0.5vw;
}
.operation span {
  color: #2bc17b;
}
.operation > span:nth-last-child(1) {
  color: #fb7371;
}
</style>
