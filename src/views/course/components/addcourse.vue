<template>
  <div class="addCourse">
    <span>请输入课程相关信息</span>
    <el-form class="addcourse" :model="course">
      <el-form-item label="课程名称">
        <el-input
          class="course_width"
          placeholder="请输入课程名称"
          v-model="course.name"
        ></el-input>
      </el-form-item>
      <el-form-item label="封面图片">
        <el-upload
          class="avatar-uploader"
          :action="uploadpath"
          :show-file-list="false"
          :auto-upload="false"
          :on-success="handleAvatarSuccess"
          :on-error="handleAvatarError"
          ref="upload"
        >
        <el-icon size="1.5vw"><Plus /></el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item label="商品限制">
        <el-radio-group v-model="course.state" class="ml-4">
          <el-radio value="active" size="large">上架商品</el-radio>
          <el-radio value="inactive" size="large">下架商品</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="课程价格">
        <el-input
          class="course_width"
          v-model="course.money"
          type="text"
          placeholder="请输入课程价格"
        ></el-input>
      </el-form-item>

      <el-form-item label="课程简介">
        <el-input 
          placeholder="请输入内容"
          autosize
          type="textarea"
          v-model="course.courseIntroduce"
        ></el-input>
      </el-form-item>
      <el-form-item label="讲师介绍">
        <el-input
          placeholder="请输入内容"
          autosize
          type="textarea"
          v-model="course.teacher"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认</el-button>
        <el-button type="primary">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import type { UploadFiles, UploadProps } from "element-plus";
import Axios from "@/util/Axios";
import { id } from "element-plus/es/locales.mjs";
import type { UploadFile } from "ant-design-vue";
import { useUserStore } from "@/stores/useUserStore";
import type { courseMessage } from '@/type'
const userStore = useUserStore();
const course = ref<courseMessage>({
  userId: userStore.Userinformation.id,
  name: "",
  state: "",
  teacher: "",
  money: "",
  time:new Date(),
  sales: 0,
  courseIntroduce: "",
});

const uploadpath = ref(`http://localhost:8080/course/upload/`);
const upload = ref();
const onSubmit = () => {
  Axios.post("/course/add", course.value).then((res) => {
    uploadpath.value = uploadpath.value + res.data.data.id;
    upload.value.submit();
  });
};

const handleAvatarSuccess = (
  response: any,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log("上传成功", response);
  uploadpath.value = "http://localhost:8080/course/upload/";
  ElMessage({
    message: "上传成功",
    type: "success",
  });
};
const handleAvatarError = (
  error: Error,
  uploadFile: UploadFile,
  uploadFiles: UploadFiles
) => {
  console.log("上传失败", error);
  uploadpath.value = "http://localhost:8080/course/upload/";
  ElMessage({
    message: "上传失败",
    type: "error",
  });
};
</script>

<style scoped>
.addCourse {
  padding: 3vw;
  width: 100%;
  background-color: #fff;
}
.addcourse {
  width: 60%;
}
.el-form-item {
  margin-top: 2vw;
}
.course_width {
  width: 45%;
}
.avatar-uploader{
  width: 10vw;
  height: 10vw;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f9fa;
}

</style>
