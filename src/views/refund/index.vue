<template>
    <findItem :data="find"></findItem>
    <TableList :data="tableItem" :title="tableTitle"></TableList>
</template>

<script setup lang="ts">
import findItem from '@/components/find/find-item.vue'
import TableList from '@/components/table/TableList.vue'
import {tableItem,tableTitle,find } from './meta/index'

</script>