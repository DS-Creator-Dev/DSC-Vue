<template>
    <img src="../../../public/icon_x7.png"/>
    <input type="file" />
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(async()=>{
    var path = await window.electron.open_project();
    console.log(path)
})
</script>
<style scoped lang="css">
</style>