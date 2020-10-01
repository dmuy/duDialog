import './dist/duDialog.css'
import duDialog from './dist/duDialog.js'

export default {
    install(Vue, options) {
        /**
         * Create a dialog
         * @param {string} title Dialog title
         * @param {string|string[]|object[]} content Dialog message, HTML content, or array of selection items
         * @param {Object} options Dialog configurations
         * @param {string} options.id ID attribute of the dialog container (for specific dialog styling convenience)
         * @param {boolean} options.init Determines if initialize-only (dialog will not be shown immediately after initialization)
         * @param {boolean} options.dark Determines if dark theme is on
         * @param {number} options.buttons Button types (OK, OK_CANCEL, NONE)
         * @param {string} options.okText Display text for the 'OK' button
         * @param {string} options.cancelText Display text for the 'Cancel' button
         * @param {boolean} options.selection Determines if dialog is for item selection
         * @param {boolean} options.multiple Determines if multiple seletion (for selection dialog)
         * @param {number} options.minSelect Determines the minimum required selection (multi select only)
         * @param {number} options.maxSelect Determines the maximum required selection (multi select only)
         * @param {boolean} options.allowSearch Determines if search input is visible/enabled (for selection dialog)
         * @param options.selectedValue Default selected item value (for selection dialog)
         * @param {string} options.valueField Variable name for the select item value; use this for custom object structure (for selection dialog)
         * @param {string} options.textField Variable name for the select item display text; use this for custom object structure (for selection dialog)
         * @param {object} options.callbacks Callback functions holder
         * @param {Function} options.callbacks.okClick Click callback for the 'OK' button
         * @param {Function} options.callbacks.cancelClick Click callback for the 'Cancel' button
         * @param {Function} options.callbacks.itemSelect Selection callback for selection dialog
         * @param {Function} options.callbacks.onSearch Search callback function
         * @param {Function} options.callbacks.itemRender Selection item render callback function
         * @param {Function} options.callbacks.minRequired Minimum item selection check callback function
         * @param {Function} options.callbacks.maxReached Maximum item selection check callback function
         */
        Vue.prototype.$duDialog = (title, content, opts) => {
            duDialog(title, content, opts)
        }

        Object.defineProperties(Vue.prototype.$duDialog, {
            DEFAULT: { value: duDialog.DEFAULT },
            OK_CANCEL: { value: duDialog.OK_CANCEL },
            NONE: { value: duDialog.NONE }
        })
    }
}