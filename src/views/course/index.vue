<template>
  <div class="course">
    <FindItem :data="find"></FindItem>
    <TableList
      :data="TableItem"
      :title="TableTitle"
      :tableData="tableData"
      :tableClick="tableClick"
    >
    <template #image>

    </template>
      <template #operate>
        <div class="operate">
          <div>
            <span>编辑</span>
            <span>|</span>
            <span>下架</span>
          </div>
          <span>删除</span>
        </div>
      </template>
    </TableList>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import type { Dayjs } from "dayjs";
import FindItem from "@/components/find/find-item.vue";
import TableList from "@/components/table/TableList.vue";
import { find, TableItem, TableTitle } from "./meta";
import Axios from "@/util/Axios";
import type { courseMessage } from "@/type";
import { ElMessage } from "element-plus";
import sixteen from "@/util/sixteen";
import formDate from "@/util/formDate";
import { useUserStore } from "@/stores/useUserStore";
type RangeValue = [Dayjs, Dayjs];
const router = useRouter();
const UserStore = useUserStore();
// 跳转添加课程
const addCourse = () => {
  router.push("/course/add");
};
// 标题数据
const title = ref({
  ...TableTitle,
});
// 当前页
const Page = ref(1);

// 表格点击事件
const tableClick = (
  row: any,
  col: any,
  cell: HTMLTableCellElement,
  event: Event
) => {
  const span = event.target as HTMLSpanElement;
  if (span.innerHTML == "编辑") {
    editCourse(row);
  } else if (span.innerHTML == "下架") {
    console.log("下架");
  } else if (span.innerHTML == "删除") {
    console.log("删除");
  }
};

onMounted(() => {
  title.value[1].fun = addCourse;
  RequsetTablePageData(Page.value);
});
// 表格数据
const tableData = ref<courseMessage[]>([]);
// 请求表格数据
const RequsetTablePageData = (Page: number) => {
  Axios.get(`/course/${Page}`).then((res) => {
    const data = res.data.data;

    if (res.data.code === 200) {
      data.data.forEach((item: courseMessage) => {
        // item.id = sixteen(item.id as string);
        // item.time = formDate(item.time);
      });
      // 表格数据
      tableData.value = data.data;
    } else {
      ElMessage({
        type: "error",
        message: res.data,
      });
    }
  });
};

const editCourse = (row: any) => {
  console.log(row);
  Axios.post(
    `/order/${UserStore.Userinformation.id}/${UserStore.Userinformation.username}`,
    {
      ...row,
    }
  ).then((res) => {
    if (res.data.code === 200) {
      ElMessage({
        type: "success",
        message: res.data.data,
      });
    }
  });
};
</script>

<style scoped>
* {
  --course-background-color: #fff;
  --course-margin: 2vw;
  --course-span-margin: 0.5vw;
  --course-width: 35vw;
}
span {
  margin-right: 0.5vw;
}
.course-find {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 10vw;
  width: 100%;
  background-color: var(--course-background-color);
}

.one,
.two {
  margin-bottom: 1vw;
  display: flex;
}
.one > div,
.two > div {
  margin-right: 3vw;
}
.course-find > div {
  padding-left: 2vw;
}
.el-input {
  width: 22.6vw;
}

.course-list {
  width: 100%;
  margin-top: 3vw;
  padding-left: 2vw;
  padding-right: 2vw;
  background-color: var(--course-background-color);
}

.course-list > .title {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4vw;
}

.el-table {
  border: 1px solid #dcebe4;
}

.operation {
  display: flex;
  justify-content: center;
  align-items: center;
}
.operation span {
  color: #2bc17b;
}
.operation > span:nth-last-child(1) {
  color: #fb7371;
}

.page {
  width: 100%;
  display: flex;
  padding: 2vw;
  padding-right: 1vw;
  justify-content: end;
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
.operate {
  display: flex;
}
.operate > div {
  color: #7ad8ac;
  margin-right: 0.3vw;
}
.operate span {
  margin-right: 0.2vw;
}
.operate > span {
  color: #fb7371;
}
</style>
