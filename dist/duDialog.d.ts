export interface IDialogCallbacks {
    /**
     * Triggers on OK button click; 'this' inside the callback refers to the dialog object
     * @param {Event} e - event object
     */
    okClick: (this: duDialog, e: Event) => void;
    /**
     * Triggers on YES button click; 'this' inside the callback refers to the dialog object
     * @param {Event} e - event object
     */
    yesClick: (this: duDialog, e: Event) => void;
    /**
     * Triggers on NO button click; 'this' inside the callback refers to the dialog object
     * @param {Event} e - event object
     */
    noClick: (this: duDialog, e: Event) => void;
    /**
     * Triggers on CANCEL button click; 'this' inside the callback refers to the dialog object
     * @param {Event} e - event object
     */
    cancelClick: (this: duDialog, e: Event) => void;
    /**
     * Triggers on item selection change (selection dialog); 'this' inside the callback refers to the radio button.
     * For multiple selection dialog, this will be triggered on OK button click (okClick will not be executed); 'this' does not refer to the checkbox
     * @param {Event} e - event object;
     * @param {string|Object} i - selected item (string or object) bound to the radio button; array of selected items (string or object) for multiple selection
     */
    itemSelect: (this: duDialog | HTMLInputElement, e: Event, i: string | any | Array<string | any>) => void;
    /**
     * Custom search function, triggers on search input keyup (selection dialog); 'this' inside the callback refers to the dialog object.
     * @param {string|Object} i - select item object or string;
     * @param {string} k - search query string
     * @returns boolean (for matching item/s)
     */
    onSearch: (this: duDialog, i: string | any, k: string) => boolean;
    /**
     * Custom item render function; 'this' inside the callback refers to the dialog object.
     * Note: If used, you need to add your own styling
     * @param {string|Object} i - select item object or string
     * @returns string/html markup (to be used for rendering of the item label)
     */
    itemRender: (this: duDialog, i: string | any) => string;
    /**
     * Triggers on OK button click if checked items is less than the minimum (minSelect config)
     * @param {number} min - minSelect value (configuration)
     */
    minRequired: (min: number) => void;
    /**
     * Triggers on item click if checked items is equal to the maximum (maxSelect config)
     * @param {number} max - maxSelect value (configuration)
     */
    maxReached: (max: number) => void;
    /**
     * Triggers on opt-out checkbox check/uncheck
     * @param {boolean} optOut - Opt-out checkbox checked state
     */
    optOutChanged: (optOut: boolean) => void;
}
export interface IDialogConfig {
    /**
     * Determines if search input is visible/enabled (for selection dialog)
     */
    allowSearch: boolean;
    /**
     * Button types (OK, OK_CANCEL, NONE)
     */
    buttons: TDialogButtons;
    /**
     * Callback functions
     */
    callbacks: IDialogCallbacks | null;
    /**
     * Display text for the 'Cancel' button
     */
    cancelText: string;
    /**
     * Determines if (single) select dialog will show the OK_CANCEL buttons for confirmation
     */
    confirmSelect: boolean;
    /**
     * Determines if dark theme is on
     */
    dark: boolean;
    /**
     * Hides dialog on (any) button click if there's a defined callback handler
     */
    hideOnAction: boolean;
    /**
     * ID attribute of the dialog container (for specific dialog styling convenience)
     */
    id: string | null;
    /**
     * Determines if initialize-only (dialog will not be shown immediately after initialization)
     */
    init: boolean;
    /**
     * Determines the maximum required selection (multi select only)
     */
    maxSelect: number | null;
    /**
     * Determines the minimum required selection (multi select only)
     */
    minSelect: number | null;
    /**
     * Determines if multiple seletion (for selection dialog)
     */
    multiple: boolean;
    /**
     * Display text for the 'No' button
     */
    noText: string;
    /**
     * Display text for the 'OK' button
     */
    okText: string;
    /**
     * Determines if a Don't show again checkbox will be displayed
     */
    optOutCb: boolean;
    /**
     * Label for the opt-out checkbox
     */
    optOutText: string;
    /**
     * Default selected item value (for selection dialog)
     */
    selectedValue: any | Array<any>;
    /**
     * Determines if dialog is for item selection
     */
    selection: boolean;
    /**
     * Variable name for the select item display text; use this for custom object structure (for selection dialog)
     */
    textField: string;
    /**
     * Variable name for the select item value; use this for custom object structure (for selection dialog)
     */
    valueField: string;
    /**
     * Display text for the 'Yes' button
     */
    yesText: string;
}
export interface ISelectItem {
    /**
     * Item label
     */
    item: string;
    /**
     * Item value
     */
    value: string;
}
export interface ISelectGroup {
    /**
     * Group label
     */
    group: string;
    /**
     * Group items
     */
    items: Array<string | ISelectItem | any>;
}
type TDialogSelect = string | ISelectItem | ISelectGroup | any;
export type TDialogButtons = 'DEFAULT' | 'OK_CANCEL' | 'YES_NO_CANCEL' | 'NONE';
declare class duDialog {
    static _defaults: IDialogConfig;
    cache: any;
    config: IDialogConfig;
    content: string | Array<TDialogSelect>;
    dialog: HTMLElement | undefined;
    docFrag: DocumentFragment | undefined;
    loadingCancellable: boolean;
    loadingState: boolean;
    optOut: boolean;
    title: string;
    type: TDialogButtons;
    static readonly DEFAULT: TDialogButtons;
    static readonly OK_CANCEL: TDialogButtons;
    static readonly YES_NO_CANCEL: TDialogButtons;
    static readonly NONE: TDialogButtons;
    /**
     * Creates a dialog
     * @param title Dialog title
     * @param content Dialog message, HTML content, or array of selection items
     * @param options Dialog configurations
     */
    constructor(title: string, content: string | Array<TDialogSelect>, options?: Partial<IDialogConfig>);
    /**
     * Builds the dialog UI
     */
    private _buildUI;
    /**
     * Checks the content scroll - adds border (top/bottom) depending on where the current scroll position is
     */
    private _checkContentScroll;
    /**
     * Sets the loading state of the dialog
     * @param {Boolean} loading Determines the loading state of the dialog
     * @param {Boolean} cancellable Determines if the loading state is cancellable (Cancel action button)
     */
    setLoading(loading: boolean, cancellable?: boolean): void;
    /**
     * Sets the dialog config
     * @param config Config name
     * @param value Config value
     */
    setOption<K extends keyof IDialogConfig>(config: K, value: IDialogConfig[K]): void;
    /**
     * Sets the dialog configurations
     * @param options Configurations
     */
    setOptions(options: IDialogConfig): void;
    /**
     * Shows the dialog
     */
    show(): void;
    /**
     * Hides the dialog
     */
    hide(): void;
    /**
     * Sets the dialog defaults
     * @param options Dialog configurations
     */
    static defaults(options: IDialogConfig): void;
}
export default duDialog;
