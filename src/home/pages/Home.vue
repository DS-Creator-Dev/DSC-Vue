<template>
    <div class="w-full h-screen flex justify-center font-title">
        <div class="h-full flex items-center">
            <div>
                <div class="flex flex-col items-center" style="text-align:center;">
                    <img src="../../../public/icon_x32.png" class="w-32 h-32"/>
                    <p class="font-bold text-3xl">DS <span class="text-teal-500">Creator</span></p>
                </div>
                <div class="flex flex-row gap-1 mt-2 text-white">
                    <button @click="open_project()" class="bg-teal-500 hover:bg-teal-400 active:bg-teal-600 transition-all p-1 rounded">Load Project</button>
                    <button class="bg-zinc-500 hover:bg-zinc-400 active:bg-zinc-600 transition-all p-1 rounded">New Project</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script setup lang="ts">
import { open_project } from '../../api/electron';
</script>
<style scoped lang="css">
</style>