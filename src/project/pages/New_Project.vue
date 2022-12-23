<template>
    <div class="w-full h-screen flex justify-center font-title">
        <div class="h-full flex items-center">
            <div class="flex flex-col gap-2">
                <div>
                    <p>Project Name</p>
                    <input class="border-2 border-zinc-400 bg-zinc-100 focus:outline-none px-2 rounded"/>
                </div>
                <div class="w-full flex justify-center text-white">
                    <button @click="" class="bg-teal-500 hover:bg-teal-400 active:bg-teal-600 transition-all p-1 w-20 rounded">Create</button>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(async()=>{
    var options = {
        properties: ["openDirectory"],
    }
    var path = window.electron.open_dialog(options);
    console.log(path)
})
</script>
<style scoped lang="css">
</style>