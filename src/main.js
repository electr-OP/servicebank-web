import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toaster from "@meforma/vue-toaster";
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

import './assets/main.css'
import $ from "jquery";
// import * as jqueryExports from "jquery";

// window.$ = $.default;
const VueTelInputOptions = {
    mode: "international",
    onlyCountries: ['NG', 'CM', "CG", "GH", "KE", "LR", "MA", "ZA", "TG", "ZM", "ZW"]
  } 

const app = createApp(App).use(store).use(Toaster).use($).use(VueTelInput, VueTelInputOptions)

app.use(router)

app.mount('#app')
