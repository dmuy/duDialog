import './dist/duDialog.css'
import duDialog from './dist/duDialog.js'

export default {
    install(Vue, options) {
        Vue.prototype.$duDialog = duDialog
    }
}