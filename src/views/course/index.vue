<template>
  <div class="course">
    <div class="course-find">
      <div class="one">
        <div>
          <span>上传时间</span>
          <el-date-picker
            v-model="time"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
          />
        </div>
        <div>
          <span>课程名称</span>
          <el-cascader :options="options" clearable />
        </div>
        <div>
          <span>上传人</span>
          <el-cascader :options="options" clearable />
        </div>
        
      </div>
      <div class="two">
        <div>
          <span>手动搜索</span>
          <el-input placeholder="请输入内容" />
        </div>
        <div>
          <el-button type="primary">搜索</el-button>
          <el-button type="primary">重置</el-button>
        </div>
      </div>
    </div>

    <div class="course-list">
      <div class="title">
        <span>课程列表</span>
        <div class="add" @click="addCourse">
          <el-icon><Tickets /></el-icon>
          <span>添加课程</span>
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
        <el-table-column prop="id" label="编号" align="center" />
        <el-table-column prop="name" label="名称" align="center" />
        <el-table-column prop="image" label="封面" align="center" />
        <el-table-column prop="status" label="状态" align="center" />
        <el-table-column prop="price" label="价格" align="center" />
        <el-table-column prop="sales" label="销量" align="center" />
        <el-table-column prop="user" label="上传人" align="center" />
        <el-table-column prop="time" label="上传时间" align="center" />
        <el-table-column
          prop="operation"
          label="操作"
          align="center"
          width="150"
        >
          <template #default="scope">
            <div class="operation">
              <div>
                <span>编辑</span>
                <span>|</span>
                <span>下架</span>
              </div>
              <span>删除</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1000" />
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router'
import type { Dayjs } from "dayjs";
type RangeValue = [Dayjs, Dayjs];
const time = ref<RangeValue>();
const router = useRouter()
const options = [
  {
    value: "guide",
    label: "Guide",
  },
];

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

const addCourse = () => {
    router.push("/course/add")
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
</style>
