import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import ConfirmationService from 'primevue/confirmationservice';
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

import InputNumber from 'primevue/inputnumber';
import Checkbox from 'primevue/checkbox';
import Divider from 'primevue/divider';
import ToastService from 'primevue/toastservice';

import MultiSelect from 'primevue/multiselect';
import RadioButton from 'primevue/radiobutton';
import 'primevue/resources/primevue.min.css';
import FileUpload from 'primevue/fileupload';
import Message from 'primevue/message';
import OverlayPanel from 'primevue/overlaypanel';
import Chips from 'primevue/chips';

import Textarea from 'primevue/textarea';


import router from '@/router.js'
import i18n from '@/locale/i18n.js'

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.use(ConfirmationService)
app.use(ToastService)
app.use(i18n)
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
app.component('pv-multi-select', MultiSelect)
app.component('pv-radio-button', RadioButton)
app.component('pv-file-upload', FileUpload)
app.component('pv-message', Message)
app.component('pv-overlay-panel', OverlayPanel)
app.component('pv-chips', Chips)
app.component('pv-textarea', Textarea)

app.mount('#app')
