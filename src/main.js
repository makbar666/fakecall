import { createApp } from 'vue'
import App from './App.vue'
import "./index.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App);
app.mount("#app");
app.use(VueSweetalert2);
// app.component('VueDatePicker', VueDatePicker);
