import './dist/duDialog.css'
import duDialog from './dist/duDialog.es.js'
import type { IDialogConfig } from './dist/duDialog.d.ts'
import { App } from 'vue'

export default {
    install(app: App, options: IDialogConfig) {
        duDialog.defaults(options)
        app.config.globalProperties.$duDialog = duDialog

        app.provide('duDialog', duDialog)
    }
}

declare module "@vue/runtime-core" {
    //Bind to `this` keyword
    interface ComponentCustomProperties {
        $duDialog: typeof duDialog;
    }
}
