import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'

import 'primeicons/primeicons.css'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import ColorPicker from 'primevue/colorpicker';
import SpeedDial from 'primevue/speeddial';
import Dialog from 'primevue/dialog';
import ConfirmDialog from 'primevue/confirmdialog';
import Dropdown from 'primevue/dropdown';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';
import Divider from 'primevue/divider';

import router from '@/router.js'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('pv-button', Button)
app.component('pv-input-text', InputText)
app.component('pv-card', Card)
app.component('pv-chip', Chip)
app.component('pv-color-picker', ColorPicker)
app.component('pv-speed-dial', SpeedDial)
app.component('pv-dialog', Dialog)
app.component('pv-confirm-dialog', ConfirmDialog)
app.component('pv-dropdown', Dropdown)
app.component('pv-input-number', InputNumber)
app.component('pv-checkbox', Checkbox)
app.component('pv-divider', Divider)

app.mount('#app')
