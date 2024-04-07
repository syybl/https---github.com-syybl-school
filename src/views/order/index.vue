<template>
  <findItem :data="find" ></findItem>
  <TableList :data="table" :title="title">
    <div class="operation">
      <div>
        <span>编辑</span>
        <span>|</span>
        <span>下架</span>
      </div>
      <span>删除</span>
    </div>
  </TableList>
</template>

<script setup lang="ts">
import findItem from "@/components/find/find-item.vue";
import TableList from "@/components/table/TableList.vue";
import { ref } from "vue";
import type { FindItme, Tabulation, TabulationTitle } from "@/type";
const find: FindItme[][] = [
  [
    {
      title: "上传时间",
      type: "time",
    },
    {
      title: "订单状态",
      type: "select",
      options: [
        { label: "待支付", value: "1" },
        { label: "已支付", value: "2" },
        { label: "已关闭", value: "3" },
      ],
      placeholder: "请选择订单状态",
    },
  ],
  [
    {
      title: "手动搜索",
      type: "input",
    },
  ],
];
const table: Tabulation[] = [
  {
    label: "订单号",
    prop: "id",
  },
  {
    label: "订单状态",
    prop: "status",
  },
  {
    label: "订单名称",
    prop: "name",
  },
  {
    label: "订单金额",
    prop: "price",
  },
  {
    label: "订单数量",
    prop: "sales",
  },
  {
    label: "上传人",
    prop: "type",
  },
  {
    label: "上传时间",
    prop: "time",
  },
];
const title: TabulationTitle[] = [
  {
    title: "订单列表",

  },
  {
    title: "订单列表",

  },
];
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
