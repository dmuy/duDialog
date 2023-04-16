import './dist/duDialog.css'
import duDialog from './dist/duDialog.js'

export default {
    install(app, options) {
        app.config.globalProperties.$duDialog = duDialog

        app.provide('duDialog', duDialog)
    }
}