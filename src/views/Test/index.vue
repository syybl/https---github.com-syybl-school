<template>
  <button class="but" @click="onclick">AI请求</button>
  <button class="but" @click="onaddUser">添加用户请求</button>
  <button class="but" @click="onfindUser">查询用户请求</button>
  <button class="but" @click="deleteuser">删除用户请求</button>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import CryptoJS from "crypto-js";
import Axios from '@/util/Axios'
import {} from '@/util/Ai_Interface'
import  Ai_Interface  from '@/util/Ai_Interface'
const onclick = () => {
  Ai_Interface()
};
// 向服务器添加用户
const onaddUser = () => {
  // 使用Axios向服务器发送post请求，添加用户
  Axios.post("/users/add",{
    // 用户名
    username:"admin",
    // 密码
    password:"123456",
    // 时间
    time:new Date().getTime()
  }).then(res=>{
    // 打印请求成功返回的数据
    console.log(res.data)
  })
};
// 在服务器查找用户
const onfindUser = () => {
  // 使用Axios向服务器发送get请求，查找用户
  Axios.get(`/users/${"admin"}/${123456}`).then(res=>{
    // 打印请求成功返回的数据
    console.log(res.data)
})
}

const deleteuser = () => {
  // 使用Axios向服务器发送delete请求，删除用户
  Axios.delete(`/users/${"1776975746294136833"}`).then(res=>{
    // 打印请求成功返回的数据
    console.log(res.data) 
  })
};
</script>

<style scoped>
.but {
  width: 100px;
  height: 50px;
  background-color: aqua;
}
.txt {
  width: 100px;
  height: 50px;
  font-weight: bold;
}
</style>
