
export default {
    defaults: {
        // id attribute of the dialog container (for specific dialog styling convenience)
        id: null,
        // determines if initialize only (dialog will not be shown immediately after initialization)
        init: false,
        // determines if dark theme is on
        dark: false,
        // button types (OK, OK_CANCEL, NONE)
        buttons: 1,
        // display text for the 'OK' button
        okText: 'Ok',
        // display text for the 'Cancel' button
        cancelText: 'Cancel',
        // determines if dialog is for item selection
        selection: false,
        // determines if multiple seletion (for selection dialog)
        multiple: false,
        // determines the minimum required selection (multi select only)
        minSelect: 1,
        // determines the maximum required selection (multi select only)
        maxSelect: null,
        // determines if search input is visible/enabled (for selection dialog)
        allowSearch: false,
        // default selected item value (for selection dialog)
        selectedValue: null,
        // variable name for the select item value; use this for custom object structure (for selection dialog)
        valueField: 'value',
        // variable name for the select item display text; use this for custom object structure (for selection dialog)
        textField: 'item',
        // callback functions
        callbacks: null
    },
    buttons: {
        // OK button only
        DEFAULT: 1,
        // OK and Cancel buttons
        OK_CANCEL: 2,
        // no buttons
        NONE: 0
    }
}