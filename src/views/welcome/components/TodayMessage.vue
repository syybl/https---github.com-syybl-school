<template>
  <div
    class="box"
    :style="{
      backgroundColor: BackGround,
    }"
  >
    <div class="icon">
      <div :class="['iconfont', icon]"></div>
    </div>
    <div class="data">
      <span>{{ data.title }}</span>
      <span>{{ data.earnings }}</span>
      <span>{{ data.comparison }}% 同昨天对比</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineProps({
  BackGround: {
    type: String,
    default: "red",
  },
  icon: {
    type: String,
    default: "icon-shibaibiaoqing",
  },
  data: {
    type: Object,
    default:{}
  },
});
</script>

<style scoped>
.box {
  height: 100%;
  background-color: #ff0;
  border-radius: 10px;
  display: flex;
}

.icon {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon .iconfont {
  font-size: 6vw;
  color: #fff;
  opacity: 0.7;
}

.data{
  padding-right: 8%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:end;
}
.data span{
  font-size: 1.1vw;
  color: #fff;
  margin-bottom: 0.7vw;
  opacity: 0.85;
}
.data span:nth-child(2){
  opacity: 1;

}

</style>
