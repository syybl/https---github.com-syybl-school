<template>
  <el-menu
    :router="true"
    default-active="/welcome"
    background-color="#202741"
    text-color="#a9abb2"
    active-text-color="#FFF"
  >
    <div class="title">
      <div>
        <MaterialSymbolsMenuBookOutlineRounded
          class="icon"
          Color="#a9abb3"
          :width="size"
          :height="size"
        ></MaterialSymbolsMenuBookOutlineRounded>
        <span>教育管理系统</span>
      </div>
    </div>
    <el-menu-item index="/welcome">
      <template #title>
        <el-icon><Fa6SolidHouseChimneyWindow /></el-icon>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/course">
      <template #title>
        <el-icon><MaterialSymbolsMenuBookOutlineRounded /></el-icon>
        <span>课程管理</span>
      </template>
    </el-menu-item>

    <el-sub-menu index="order">
      <template #title>
        <el-icon><IconParkSolidTransactionOrder /></el-icon>
        <span>订单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/order">订单</el-menu-item>
        <el-menu-item index="/refund">退款</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>


    <el-sub-menu index="student">
      <template #title>
        <el-icon><MynauiUsers /></el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/student">学员</el-menu-item>
        <el-menu-item index="/teacher">讲师</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="info">
      <template #title>
        <el-icon><IconParkSolidTransactionOrder /></el-icon>
        <span>咨讯管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/image">轮播图</el-menu-item>
        <el-menu-item index="/article">文章</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-sub-menu index="activity">
      <template #title>
        <el-icon><IconParkSolidTransactionOrder /></el-icon>
        <span>促销管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/activity">秒杀活动</el-menu-item>
        <el-menu-item index="/coupon">优惠卷</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MaterialSymbolsMenuBookOutlineRounded from "@/assets/icones/MaterialSymbolsMenuBookOutlineRounded.vue";
import EosIconsClusterManagementOutlined from "@/assets/icones/menu/EosIconsClusterManagementOutlined.vue";
import Fa6SolidHouseChimneyWindow from "@/assets/icones/menu/Fa6SolidHouseChimneyWindow.vue";
import IconParkSolidTransactionOrder from "@/assets/icones/menu/IconParkSolidTransactionOrder.vue";
import IconParkTwotoneShop from "@/assets/icones/menu/IconParkTwotoneShop.vue";
import MaterialSymbolsSettingsSuggestOutline from "@/assets/icones/menu/MaterialSymbolsSettingsSuggestOutline.vue";
import MynauiUsers from "@/assets/icones/menu/MynauiUsers.vue";
import { Location } from "@element-plus/icons-vue";

const size = ref("2vw");
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5vw;
  background-color: #202741;
  color: #a9abb3;
  font-size: 1.2vw;
}
.title div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title span {
  margin-left: 0.4vw;
}
.el-menu {
  height: 100%;
}
</style>
