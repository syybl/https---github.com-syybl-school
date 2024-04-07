<template>
    <el-container class="container">
      <el-aside width="13vw" v-if="state"><Option></Option></el-aside>
      <el-container>
        <el-header v-if="state"><over></over></el-header>
        <el-main><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Option from '@/components/option/index.vue'
import over from '@/components/over/index.vue'
import { useUserStore } from './stores/useUserStore';

const userStore = useUserStore()

const state = computed(() => {
  return  userStore.Userinformation.state;
})

</script>

<style scoped>
.container{
  width: 100%;
  height: 100%;
}
.el-header{
  background-color: #fff;
}
.el-main{
  padding: 2vw;
  background-color: #f5f9fa;
}
</style>