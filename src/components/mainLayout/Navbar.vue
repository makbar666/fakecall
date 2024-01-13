<template>
    <div>
        <!-- Navbar for desktop -->
        <div class="hidden md:flex justify-between bg-accent text-primary py-5 px-8">
            <div>
                <span class="text-xl">Fake All.</span>
            </div>
            <div class="space-x-10 px-5">
                <span>Home</span>
                <span>Chat</span>
                <span>Call</span>
                <span>Group</span>
            </div>
        </div>

        <!-- Navbar for mobile -->
        <div class="md:hidden bg-accent text-primary py-5 px-5">
            <div class="flex justify-between items-center">
                <span class="text-xl">Fake All.</span>
                <button @click="toggleMobileNav" class="text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div v-if="isMobileNavOpen" class="mt-4 space-y-2">
                <span>Home</span>
                <span>Chat</span>
                <span>Call</span>
                <span>Group</span>
            </div>
        </div>
    </div>
</template>
  
<script>
import { ref } from 'vue';

export default {
    setup() {
        const isMobileNavOpen = ref(false);

        const toggleMobileNav = () => {
            isMobileNavOpen.value = !isMobileNavOpen.value;
        };

        return {
            isMobileNavOpen,
            toggleMobileNav,
        };
    },
};
</script>
  
<style scoped>
/* Your styling here */
</style>
  