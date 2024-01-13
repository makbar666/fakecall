<template>
  <div>
    <Navbar />
    <ViewCall />
  </div>
</template>

<script>
import { ref } from 'vue'
import ViewCall from './components/ViewCall.vue';
import Navbar from './components/mainLayout/Navbar.vue';

export default {
  name: 'App',
  components: {
    ViewCall,
    Navbar
  },
  setup() {

  }
}
</script>