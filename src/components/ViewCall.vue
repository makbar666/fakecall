<template>
    <div class="md:flex grid">
        <div class="flex h-[1000px] w-[461px]" id="screenshoot">
            <img src="../assets/ss-call.jpeg" alt="Vue logo" class="absolute h-[1000px] w-[461px] object-scale-down" />
            <div class="z-50 relative">
                <div class="pt-1">
                    <span class=" text-white text-center pl-[40px]">{{ data.jam }}</span>
                </div>
                <div class="pt-[85px] flex justify-center w-[460px]">
                    <div class="grid justify-items-center space-y-5">
                        <span class="text-white text-4xl">{{ data.namaKontak }}</span>
                        <span class=" text-white/50 text-2xl">{{ data.waktu }}</span>
                        <div class="pt-[115px]">
                            <img :src="data.uploadedImage" alt=""
                                class="rounded-full h-[230px] w-[230px] bg-white object-cover" />
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
            <div class="grid grid-cols-5">
                <small class="col-span-2 grid content-center">Waktu</small>
                <input type="text" v-model="data.waktu" class="border p-2 rounded-md col-span-3" />
            </div>
            <div class="grid grid-cols-5">
                <small class="col-span-2 grid content-center">Waktu</small>
                <input type="file" id="imageUpload" @change="handleImageUpload" class="col-span-3" />
            </div>
            <div class="grid grid-cols-5">
                <small class="col-span-2 grid content-center"></small>
                <button @click="screenshoot"
                    class="col-span-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Screenshoot
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue'
import html2canvas from 'html2canvas';

export default {
    name: 'App',
    components: {

    },
    setup() {
        const data = ref({
            namaKontak: '',
            jam: '',
            waktu: '',
            uploadedImage: ""
        })

        const screenshoot = () => {
            html2canvas(document.querySelector("#screenshoot")).then(canvas => {
                var link = document.createElement('a');
                link.download = 'filename.png';
                link.href = canvas.toDataURL()
                link.click();
            });
            //     const screenshoot = () => {
            //     html2canvas(document.querySelector("#screenshoot")).then(canvas => {
            //         document.body.appendChild(canvas)
            //     });
            // }
        }

        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            console.log(file);
            data.value.uploadedImage = URL.createObjectURL(file);
        }

        return {
            screenshoot,
            data,
            handleImageUpload
        }
    }
}
</script>