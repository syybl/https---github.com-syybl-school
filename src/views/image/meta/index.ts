import type { Tabulation, TabulationTitle, FindItme } from "@/type";

const tableItem: Tabulation[] = [
  {
    prop: "name",
    label: "名称",
  },
  {
    prop: "image",
    label: "缩略图",
  },
  {
    prop: "phone",
    label: "说明",
  },
  {
    prop: "userId",
    label: "上传人",
  },
  {
    prop: "time",
    label: "注册时间",
  }
];
const tableTitle: TabulationTitle[] = [
  {
    title: "轮播图列表",
  },
  {
    title: "添加轮播图",
  },
];
const find: FindItme[][] = [
  [
    {
      title: "添加时间",
      type: "time",
    },
    {
      title: "上传人",
      type: "select",
    },
  ],
  [
    {
      title: "手动搜索",
      type: "input",
    },
    {
      title: "",
      type: "button",
    },
  ],
];

export { tableItem, tableTitle, find };
