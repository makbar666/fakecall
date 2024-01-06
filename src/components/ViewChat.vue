<template>
    <div class="flex">
        <!-- <img src="./assets/ss-main.jpeg" alt="Vue logo" class="h-[1000px]" /> -->
        <div class="absolute w-full">
            <span class="absolute text-white pt-[15px] pl-[35px]">{{ data.jam }}</span>
            <span class="absolute text-white pt-[65px] pl-[125px]">{{ data.namaKontak }}</span>
            <div class="flex ">
                <div class="pt-[300px] flex pl-5">
                    <div class="bg-chatLeft rounded-lg px-4 py-1.5 text-white text-sm">
                        isi chat kiri
                    </div>
                </div>
                <div class="pt-[300px] flex pl-[130px] ">
                    <div class="bg-chatRight rounded-lg px-4 py-1.5 text-white text-sm flex space-x-2">
                        <div class="grid content-center">isi chat kanan</div>
                        <div class="flex items-center font-light pt-0.5">
                            <div class="grid content-center text-secondary">00.00</div>
                            <!-- <img src="./assets/checklist.png" alt="Vue logo" class="h-6 " /> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-10 space-y-3 z-50 relative">
            <div class="grid grid-cols-5">
                <small class="col-span-2 grid content-center">Jam</small>
                <input type="text" v-model="data.jam" class="border p-2 rounded-md col-span-3" />
            </div>
            <div class="grid grid-cols-5">
                <small class="col-span-2 grid content-center">Nama Kontak</small>
                <input type="text" v-model="data.namaKontak" class="border p-2 rounded-md col-span-3" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'

export default {
    name: 'App',
    components: {
    },
    setup() {
        const data = ref({
            namaKontak: '',
            jam: ''
        })

        return {
            data
        }
    }
}
</script>