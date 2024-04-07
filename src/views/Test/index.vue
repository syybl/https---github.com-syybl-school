<template>
  <button class="but" @click="onclick">AI请求</button>
  <button class="but" @click="onTest">添加用户请求</button>
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

const onTest = () => {
  Axios.post("/users/add",{
    username:"admin",
    password:"123456",
    time:new Date().getTime()
  }).then(res=>{
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
