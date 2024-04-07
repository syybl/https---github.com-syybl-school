import type { RouteRecordRaw, RouteRecordName } from "vue-router";

interface User {
  id: string;
  password: string;
  username: string;
  state: boolean;
}

interface RouterInformaction {
  path: string;
  name: string;
  component: any;
  meta?: {};
  parent?: RouteRecordName;
}

interface TodayMessage {
  title: string;
  earnings: number;
  comparison: number;
}

interface WelcomeMessage {
  TodayMessage: TodayMessage[];
  CharData: any[];
}
// 限定类型
type way = "time" | "select" | "input";
interface optionsItem {
  value: string;
  label: string;
}
// 查询框元素类型
interface FindItme {
  title: string;
  type: way;
  options?: optionsItem[];
  placeholder?: string;
}
// 表格数据类型
interface Tabulation {
  prop: string;
  label: string;
}
// tabulation 标题
interface TabulationTitle {
  title: string;
  fun?: () => void;
}

export {
  User,
  RouterInformaction,
  WelcomeMessage,
  FindItme,
  Tabulation,
  TabulationTitle,
};
