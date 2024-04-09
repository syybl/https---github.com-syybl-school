<template>
  <div class="login">
    <div class="left">
      <div class="title">
        <MaterialSymbolsMenuBookOutlineRounded
          class="icon"
          Color="#fff"
          :width="size"
          :height="size"
        ></MaterialSymbolsMenuBookOutlineRounded>
        <span>教育管理系统</span>
      </div>
      <div class="introduction">
        <div><span>欢迎回来</span></div>
        <div><span>这里是管理系统简单介绍</span></div>
        <div><span>一款让更多人收益的教育管理平台</span></div>
        <div><button>没有账号，去注册</button></div>
      </div>
    </div>
    <div class="right">
      <el-form :model="form" class="form" :v-loading="true">
        <el-form-item>
          <div class="login-title">
            <span>后台登录</span>
          </div>
        </el-form-item>
        <el-form-item>
          <el-input
            class="custom-input"
            type="text"
            v-model="form.username"
            placeholder="请输入用户名"
            :prefix-icon="MaterialSymbolsPerson"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
            :prefix-icon="MaterialSymbolsLock"
          />
        </el-form-item>
        <el-form-item>
          <div class="enter">
            <el-button type="primary" @click="onEnter()">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";

import type { User } from "@/type";
import { ElLoading, ElMessage } from "element-plus";
import { useRouterStore } from "@/stores/useRouterStore";
import { useUserStore } from "@/stores/useUserStore";
import MaterialSymbolsMenuBookOutlineRounded from "@/assets/icones/MaterialSymbolsMenuBookOutlineRounded.vue";
import MaterialSymbolsLock from "@/assets/icones/MaterialSymbolsLock.vue";
import MaterialSymbolsPerson from "@/assets/icones/MaterialSymbolsPerson.vue";
import Axios from "@/util/Axios";
const routerStore = useRouterStore();
const userStore = useUserStore();
const size = ref("2vw");
const form = reactive<User>(userStore.Userinformation);

const onEnter = async () => {
  console.log("登录")
  Axios(`/users/${form.username}/${form.password}`).then((res: any) => {
    const user = res.data;
    if (user.code == 200) {
      userStore.Userinformation = user.data;
      userStore.Userinformation.state = true
      routerStore.skipRouter("/welcome")
    } else {
      ElMessage.error(user.data);
    }
  });
};
</script>

<style scoped>
.login {
  --width: 55vw;
  --height: 28vw;
  position: absolute;
  left: calc(50vw - (var(--width) / 2));
  top: calc(50vh - (var(--height) / 2));
  width: var(--width);
  height: var(--height);

  display: flex;
  border-radius: 50px;
}

.form {
  position: relative;
  left: 20%;
  top: 30%;
}
.left {
  flex: 1.2;
  background-color: #2dbf7f;
}
.right {
  flex: 2;
  background-color: #ffffff;
}

.title {
  padding-top: 1vw;
  padding-left: 1vw;
  display: flex;
  align-items: center;
}
.title span {
  font-size: 1.3vw;
  color: #fff;
  margin-left: 0.6vw;
}

.introduction {
  position: relative;
  top: 20%;
  color: #fff;
}
.introduction div {
  display: flex;
  justify-content: center;
  margin-top: 0.5vw;
  font-size: 0.7vw;
  opacity: 0.9;
  letter-spacing: 1.5px;
  margin-bottom: 0.5vw;
}

.introduction div:nth-child(1) {
  font-size: 1.6vw;
  letter-spacing: 4.5px;
  margin-bottom: 1vw;
}

.introduction div:nth-last-child(1) {
  margin-top: 2vw;
}

.introduction div button {
  width: 12vw;
  height: 3vw;
  background-color: #2dbf7f;
  border-radius: calc(3vw / 2);
  border: 1px solid #fff;
  color: #fff;
}

.el-form-item {
  width: 50%;
}

.login-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #2bc17b;
  font-size: 1.6vw;
  margin-bottom: 1vw;
}
.enter {
  display: flex;
  justify-content: center;
  width: 100%;
}
.enter .el-button {
  width: 100%;
}
</style>
