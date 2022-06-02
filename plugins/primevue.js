import { defineNuxtPlugin } from "#app";
import Knob from 'primevue/knob';
import SplitButton from 'primevue/splitbutton';
export default defineNuxtPlugin((nuxtApp) => {
     nuxtApp.vueApp.component('Knob', Knob);
     nuxtApp.vueApp.component('SplitButton', SplitButton);
});