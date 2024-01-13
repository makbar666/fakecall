<template>
    <div class="md:flex grid h-screen p-5">
        <div class=" p-10 space-y-3 z-50 relative">
            <div class="grid md:grid-cols-5 space-y-2 md:space-y-0">
                <small class="md:col-span-2 grid content-center">Jam</small>
                <VueDatePicker class="md:col-span-3" v-model="data.jam2" time-picker placeholder="Pilih Jam" format="HH:mm"
                    preview-format="HH:mm" :use12h="false" />
            </div>
            <div class="grid md:grid-cols-5 space-y-2 md:space-y-0">
                <small class="md:col-span-2 grid content-center">Nama Kontak</small>
                <input type="text" v-model="data.namaKontak" class="border p-2 rounded-md md:col-span-3" />
            </div>
            <div class="grid md:grid-cols-5 space-y-2 md:space-y-0">
                <small class="md:col-span-2 grid content-center">Waktu</small>
                <VueDatePicker class="md:col-span-3" v-model="data.waktu2" time-picker placeholder="Pilih Waktu"
                    format="HH:mm" preview-format="HH:mm" :use12h="false" />
            </div>
            <div class="grid md:grid-cols-5 space-y-2 md:space-y-0">
                <small class="md:col-span-2 grid content-center">Pilih Gambar</small>
                <input type="file" id="imageUpload" @change="handleImageUpload" class="md:col-span-3" />
            </div>
            <div class="grid md:grid-cols-5 space-y-2 md:space-y-0">
                <small class="col-span-2 grid content-center"></small>
                <button @click="screenshoot"
                    class="col-span-3 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
                    Screenshoot
                </button>
            </div>
        </div>
        <div class="scale-90 ">
            <div class="flex h-[1280px] w-[590px]  bg-[url('@/assets/ss-call.jpeg')]" id="screenshoot">
                <div class="z-50 relative">
                    <div class="pt-[9px]">
                        <span class=" text-white text-center text-base pl-[55px]">{{ data.jam }}</span>
                    </div>
                    <div class="pt-[150px] flex justify-center w-[590px]">
                        <div class="grid justify-items-center space-y-5">
                            <span class="text-white text-4xl">{{ data.namaKontak }}</span>
                            <span class=" text-white/50 text-2xl">{{ data.waktu }}</span>
                            <div class="pt-[140px]  w-[300px]">
                                <img :src="data.uploadedImage" alt=""
                                    class="rounded-full  bg-white h-[300px] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import { ref, watch } from 'vue'
import { computed } from 'vue';
import html2canvas from 'html2canvas';
import Swal from "sweetalert2";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    name: 'App',
    components: {
        VueDatePicker
    },
    setup() {
        const data = ref({
            namaKontak: '',
            jam2: '',
            jam: '',
            waktu: '',
            waktu2: '',
            uploadedImage: ""
        })


        const screenshoot = async () => {
            if (!data.value.namaKontak || !data.value.jam || !data.value.waktu || !data.value.uploadedImage) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Data tidak boleh kosong!',
                })
                return;
            }

            const elementToCapture = document.getElementById('screenshoot');
            const canvas = await html2canvas(elementToCapture);

            const currentDate = new Date();
            const dateString = currentDate.toISOString().slice(0, 10);
            const timeString = currentDate.toLocaleTimeString().replace(/:/g, '');
            const filename = `fakecall_${dateString}_${timeString}.png`;

            const link = document.createElement('a');
            link.download = filename;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }

        watch(data, (newValue, oldValue) => {
            if (newValue.jam2) {
                const time = newValue.jam2;
                const hours = time.hours < 10 ? `0${time.hours}` : time.hours;
                const minutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
                const seconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;
                data.value.jam = `${hours}:${minutes}`;
            }
        }, { deep: true });

        watch(data, (newValue, oldValue) => {
            if (newValue.waktu2) {
                const time = newValue.waktu2;
                const hours = time.hours < 10 ? `0${time.hours}` : time.hours;
                const minutes = time.minutes < 10 ? `0${time.minutes}` : time.minutes;
                const seconds = time.seconds < 10 ? `0${time.seconds}` : time.seconds;
                data.value.waktu = `${hours}:${minutes}`;
            }
        }, { deep: true });


        // format time hh:mm
        const formattedTime = computed(() => {
            return {
                format: 'HH:mm',
                use12h: false,
                placeholder: 'Select Time',
            };
        });

        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            data.value.uploadedImage = URL.createObjectURL(file);
        }

        return {
            screenshoot,
            data,
            handleImageUpload,
            formattedTime
        }
    }
}
</script>

<style>
.dp__action_select {
    @apply bg-primary px-2
}
</style>