<template>
  <div class="addCourse">
    <span>请输入课程相关信息</span>
    <el-form class="addcourse" :model="course" >
      <el-form-item label="课程名称">
        <el-input class="course_width" placeholder="请输入课程名称" v-model="course.name"></el-input>
      </el-form-item>
      <el-form-item label="封面图片">
        <el-upload
          class="avatar-uploader"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :show-file-list="false"
          v-model="course.image"
        >
          <span>111</span>
        </el-upload>
      </el-form-item>
      
      <el-form-item label="商品限制">
        <el-radio-group v-model="course.status" class="ml-4">
          <el-radio value="active" size="large">上架商品</el-radio>
          <el-radio value="inactive" size="large">下架商品</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="课程价格">
        <el-input  class="course_width" tsuffix-icon="" type="text" placeholder="请输入课程价格" v-model="course.price"></el-input>
      </el-form-item>

      <el-form-item label="课程简介">
        <el-input placeholder="请输入内容" autosize type="textarea" v-model="course.introduce"></el-input>
      </el-form-item>
      <el-form-item label="讲师介绍">
        <el-input placeholder="请输入内容" autosize  type="textarea" v-model="course.teacher"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button type="primary" >确认</el-button>
        <el-button type="primary" >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps } from "element-plus";

const course = ref({
    name: "",
    image: "",
    status: "",
    price: "",
    introduce: "",
    teacher: "",
})

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
.el-form-item{
    margin-top: 2vw;
}
.course_width{
    width: 45%;
}

</style>
