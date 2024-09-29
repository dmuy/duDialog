import './duDialog.scss'
import { addEvent, addEvents, appendTo, createElem, inArray, removeSpace, setAttributes } from './helpers'

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

type TDialogSelect = string | ISelectItem | ISelectGroup | any

export type TDialogButtons = 'DEFAULT' | 'OK_CANCEL' | 'YES_NO_CANCEL' | 'NONE'

const DEFAULTS: IDialogConfig = {
	id: null,
	init: false,
	dark: false,
	buttons: 'DEFAULT',
	hideOnAction: false,
	optOutCb: false,
	optOutText: 'Don\'t show again',
	okText: 'Ok',
	yesText: 'Yes',
	noText: 'No',
	cancelText: 'Cancel',
	selection: false,
	confirmSelect: false,
	multiple: false,
	minSelect: 1,
	maxSelect: null,
	allowSearch: false,
	selectedValue: null,
	valueField: 'value',
	textField: 'item',
	callbacks: null
}

class duDialog {
	static _defaults: IDialogConfig = DEFAULTS;
	cache: any;
	config: IDialogConfig;
	content: string | Array<TDialogSelect>;
	dialog: HTMLElement | undefined;
	docFrag: DocumentFragment | undefined;
	loadingCancellable: boolean = false;
	loadingState: boolean = false;
	optOut: boolean;
	title: string;
	type: TDialogButtons;
	static readonly DEFAULT: TDialogButtons = 'DEFAULT';
	static readonly OK_CANCEL: TDialogButtons = 'OK_CANCEL';
	static readonly YES_NO_CANCEL: TDialogButtons = 'YES_NO_CANCEL';
	static readonly NONE: TDialogButtons = 'NONE';
	/**
	 * Creates a dialog
	 * @param title Dialog title
	 * @param content Dialog message, HTML content, or array of selection items
	 * @param options Dialog configurations
	 */
	constructor(title: string, content: string | Array<TDialogSelect>, options?: Partial<IDialogConfig>) {
		let _ = this, titleType = typeof title, contType = typeof content

		this.config = Object.assign({}, duDialog._defaults, options)

		this.type = this.config.selection
			? (this.config.multiple || this.config.confirmSelect
				? duDialog.OK_CANCEL
				: duDialog.NONE)
			: this.config.buttons

		if (titleType === 'undefined' || (titleType !== 'string' && title !== null))
			throw new Error('Dialog title is missing or incorrect format.')

		if (((contType === 'undefined' || contType !== 'string') && !_.config.selection) ||
			(!Array.isArray(content) && _.config.selection))
			throw new Error('Dialog message is missing or incorrect format.')

		this.title = title
		this.content = content
		this.cache = {}
		this.optOut = false

		if (!this.config.init) this._buildUI()
	}
	/**
	 * Builds the dialog UI
	 */
	private _buildUI(): void {
		const _ = this, cbs = _.config.callbacks
		let wrapper: HTMLElement, header: HTMLElement, content: HTMLElement, footer: HTMLElement
		const dialogPulse = () => {
			const dialog = this.dialog as HTMLDivElement
			dialog.classList.add('dlg--pulse')
			setTimeout(() => dialog.classList.remove('dlg--pulse'), 200)
		}
		const maxSelectCheck = () => {
			const checked = content.querySelectorAll('.dlg-select-checkbox:checked')
			const toggleNotChecked = (isDisabled: boolean) => {
				content.querySelectorAll('.dlg-select-checkbox:not(:checked)')
					.forEach(cb => {
						const parent = cb.parentNode as HTMLElement
						if (isDisabled) cb.setAttribute('disabled', 'true')
						else cb.removeAttribute('disabled')
						parent?.classList[isDisabled ? 'add' : 'remove']('item--disabled')
					})
			}

			if (checked.length === _.config.maxSelect) {
				toggleNotChecked(true)

				if (cbs && cbs.maxReached) cbs.maxReached.call(_, _.config.maxSelect)
			}
			else toggleNotChecked(false)
		}
		// global event handler
		const evtHandler = (e: Event) => {
			const target = e.target as HTMLElement
			if (e.type === 'click') {
				// handle overlay click if dialog has no action buttons
				if (target.matches('.du-dialog')) {
					if (_.type === duDialog.NONE) _.hide()
					else dialogPulse()
				}

				// handle selection item click
				if (target.matches('.dlg-select-item')) {
					(target.querySelector('.dlg-select-lbl') as HTMLElement)?.click()
				}

				// handle action buttons click
				if (target.matches('.dlg-action')) {
					// OK button
					if (target.matches('.ok-action')) {
						if (_.config.selection && _.config.multiple) {
							const checked = content.querySelectorAll('.dlg-select-checkbox:checked')
							let checkedVals: Array<any> = [], checkedItems: Array<any> = []

							checked.forEach(cb => {
								const item = _.cache[cb.id]
								const checked = cb as HTMLInputElement

								checkedItems.push(item)
								checkedVals.push(typeof item === 'string'
									? checked.value
									: item[_.config.valueField])
							})

							if (_.config.minSelect && checkedVals.length >= _.config.minSelect) {
								_.config.selectedValue = checkedVals
								if (cbs && cbs.itemSelect) {
									// cbs.itemSelect.apply({ value: checkedVals }, [e, checkedItems])
									cbs.itemSelect.apply(_, [e, checkedItems])
									_.hide()
								}
							}
							else {
								dialogPulse()

								if (cbs && cbs.minRequired && _.config.minSelect) cbs.minRequired.call(_, _.config.minSelect)
							}
						}
						else if (_.config.selection && _.config.confirmSelect) {
							const selected = content.querySelector('.dlg-select-radio:checked') as HTMLInputElement

							if (selected) {
								const item = _.cache[selected.id]

								_.config.selectedValue = typeof item === 'string'
									? selected.value
									: item[_.config.valueField]
								_.hide()

								if (cbs && cbs.itemSelect) {
									cbs.itemSelect.apply(selected, [e, item])
								}
							}
							else dialogPulse()
						}
						else {
							if (cbs && cbs.okClick) {
								cbs.okClick.apply(_, [e])
								if (_.config.hideOnAction) _.hide()
							}
							else _.hide()
						}
					}

					// Yes button
					if (target.matches('.yes-action')) {
						if (cbs && cbs.yesClick) {
							cbs.yesClick.apply(_, [e])
							if (_.config.hideOnAction) _.hide()
						}
						else _.hide()
					}

					// No button
					if (target.matches('.no-action')) {
						if (cbs && cbs.noClick) {
							cbs.noClick.apply(_, [e])
							if (_.config.hideOnAction) _.hide()
						}
						else _.hide()
					}

					// CANCEL button
					if (target.matches('.cancel-action')) {
						if (cbs && cbs.cancelClick) {
							cbs.cancelClick.apply(_, [e])
							if (_.config.hideOnAction) _.hide()
						}
						else _.hide()
					}
				}
			}

			if (e.type === 'change') {
				// handle selection radio change
				if (target.matches('.dlg-select-radio')) {
					const el = e.target as HTMLInputElement
					if (el.checked && !_.config.confirmSelect) {
						let item = _.cache[el.id]

						_.config.selectedValue = typeof item === 'string' ? el.value : item[_.config.valueField]
						_.hide()

						if (cbs && cbs.itemSelect) cbs.itemSelect.apply(el, [e, item])
					}
				}
				else if (target.matches('.dlg-select-checkbox')) {
					if (_.config.maxSelect) maxSelectCheck()
				}
				else if (target.matches('.opt-out-cb')) {
					const optOutCb = (target as HTMLInputElement)
					_.optOut = optOutCb.checked

					if (cbs && cbs.optOutChanged) cbs.optOutChanged.call(_, optOutCb.checked)
				}
			}

			if (e.type === 'scroll' && target.matches('.dlg-content')) {
				// const { clientHeight, scrollHeight, scrollTop } = target
				// const scrollLength = scrollHeight - clientHeight - scrollTop
				// const hasOverflow = !(Math.abs(scrollLength) < 1)

				// target.classList[target.scrollTop > 5 ? 'add' : 'remove']('content--scrolled')
				// target.classList[hasOverflow ? 'add' : 'remove']('content--overflow')
				this._checkContentScroll()
			}

			if (e.type === 'keyup' && target.matches('.dlg-search')) {
				const searchInput = e.target as HTMLInputElement
				const keyword = searchInput.value
				const items = content.querySelectorAll('.dlg-select-item')

				items.forEach(dlgItem => {
					if (dlgItem.classList.contains('select--group')) return

					const input = dlgItem.querySelector((_.config.multiple ? '.dlg-select-checkbox' : '.dlg-select-radio')) as HTMLInputElement,
						item = _.cache[input.id], iType = typeof item, iText = iType === 'string' ? item : item[_.config.textField]
					let matched = false

					matched = (cbs && cbs.onSearch) ? cbs.onSearch.call(_, item, keyword) :
						iText.toLowerCase().indexOf(keyword.toLowerCase()) >= 0

					dlgItem.classList[matched ? 'remove' : 'add']('item--nomatch')
				})
			}
		}
		const addItemDOM = (item: string | any, id: string | null, value: string | null, label: string | null, isGroup = false) => {
			if (isGroup) {
				const groupEl = createElem('div', { className: 'dlg-select-item select--group' }, item)
				appendTo(groupEl, content)
			}
			else {
				const itemEl = createElem('div', { className: 'dlg-select-item' })
				const selectEl = createElem('input', {
					className: _.config.multiple ? 'dlg-select-checkbox' : 'dlg-select-radio',
					id: id,
					name: 'dlg-selection',
					type: _.config.multiple ? 'checkbox' : 'radio',
					value: value,
					checked: _.config.multiple 
						? (_.config.selectedValue && inArray(_.config.selectedValue, value as string))
						: _.config.selectedValue === value
				})
				const labelEl = createElem('label', { className: 'dlg-select-lbl', htmlFor: id },
					(cbs && cbs.itemRender
						? cbs.itemRender.call(_, item)
						: '<span class="select-item">' + label + '</span>'), true)

				_.cache[id as string] = item
				appendTo([selectEl, labelEl], itemEl)
				appendTo(itemEl, content)
			}
		}
		const addItem = (item: TDialogSelect) => {
			const type = typeof item
			let id = ''

			if (type === 'string') {
				id = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + removeSpace(item.toString())
				addItemDOM(item, id, item, item)
			}
			else {
				if (!!item.group && Array.isArray(item.items)) {
					const items: Array<string | ISelectItem | any> = item.items

					addItemDOM(item.group, null, null, null, true)
					items.forEach(i => addItem(i))
				}
				else {
					const value = item[_.config.valueField]
					const text = item[_.config.textField]

					id = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + removeSpace(value.toString())

					addItemDOM(item, id, value, text)
				}
			}
		}

		_.docFrag = document.createDocumentFragment()
		_.dialog = createElem('div', { className: 'du-dialog', id: _.config.id })

		if (_.config.dark) _.dialog.setAttribute('dark', 'true')
		if (_.config.selection) _.dialog.setAttribute('selection', 'true')

		appendTo(_.dialog, _.docFrag)

		wrapper = createElem('div', { className: 'dlg-wrapper', tabIndex: 0 })

		// dialog loader
		const loader = createElem('div', { className: 'dlg-loader' })
		const loaderWrapper = createElem('div', { className: 'loader-wrapper' })

		appendTo(createElem('div', { className: 'loading-buffer' }), loaderWrapper)
		appendTo(createElem('div', { className: 'loading-indicator' }), loaderWrapper)
		appendTo(loaderWrapper, loader)
		appendTo(loader, wrapper)
		appendTo(wrapper, _.dialog)

		header = createElem('div', { className: 'dlg-header' }, _.title)

		if (_.title) appendTo(header, wrapper)
		else _.dialog.classList.add('dlg--no-title')

		content = createElem('div', { className: 'dlg-content' })

		if (_.config.selection) {
			if (_.config.allowSearch) {
				const searchInput = createElem('input', { className: 'dlg-search', placeholder: 'Search...' })
				appendTo(searchInput, header)
			}

			(_.content as Array<string | TDialogSelect>).forEach(i => addItem(i))

			if (_.config.multiple && _.config.maxSelect) maxSelectCheck()
		}
		else content.innerHTML = _.content as string

		appendTo(content, wrapper)

		if (_.type !== duDialog.NONE) {
			footer = createElem('div', { className: 'dlg-actions' })

			if (_.config.optOutCb) {
				const cbID = 'opt-out-cb'
				const group = createElem('div', { className: 'opt-out-grp' })

				appendTo(createElem('input', { id: cbID, className: cbID, type: 'checkbox', checked: _.optOut }), group)
				appendTo(createElem('label', { htmlFor: cbID }, _.config.optOutText), group)
				appendTo(group, footer)
			}

			appendTo(footer, wrapper)

			/* Setup action buttons */
			switch (_.type) {
				case duDialog.OK_CANCEL:
					appendTo([
						createElem('button', { className: 'dlg-action cancel-action', tabIndex: 2 }, _.config.cancelText),
						createElem('button', { className: 'dlg-action ok-action', tabIndex: 1 }, _.config.okText)
					], footer)
					break;
				case duDialog.YES_NO_CANCEL:
					appendTo([
						createElem('button', { className: 'dlg-action cancel-action', tabIndex: 3 }, _.config.cancelText),
						createElem('button', { className: 'dlg-action no-action', tabIndex: 2 }, _.config.noText),
						createElem('button', { className: 'dlg-action yes-action', tabIndex: 1 }, _.config.yesText),
					], footer)
					break;
				case duDialog.DEFAULT:
					appendTo(createElem('button', { className: 'dlg-action ok-action', tabIndex: 1 }, _.config.okText), footer)
					break;
			}
		}

		/* Register event handler */
		addEvent(content, 'scroll', evtHandler)
		addEvents(_.dialog, ['click', 'change', 'keyup'], evtHandler)

		if (!_.config.init) _.show()
	}
	/**
	 * Checks the content scroll - adds border (top/bottom) depending on where the current scroll position is
	 */
	private _checkContentScroll(): void {
		if (!this.dialog) return

		const target = this.dialog?.querySelector('.dlg-content') as HTMLElement
		const { clientHeight, scrollHeight, scrollTop } = target
		const scrollLength = scrollHeight - clientHeight - scrollTop
		const hasOverflow = !(Math.abs(scrollLength) < 1)
		
		target.classList[target.scrollTop > 5 ? 'add' : 'remove']('content--scrolled')
		target.classList[hasOverflow ? 'add' : 'remove']('content--overflow')
	}
	/**
	 * Sets the loading state of the dialog
	 * @param {Boolean} loading Determines the loading state of the dialog
	 * @param {Boolean} cancellable Determines if the loading state is cancellable (Cancel action button)
	 */
	setLoading(loading: boolean, cancellable: boolean = false): void {
		const dialog = this.dialog as HTMLDivElement
		this.loadingState = loading
		this.loadingCancellable = cancellable
		dialog.classList[loading ? 'add' : 'remove']('dlg--loading')
		dialog.querySelectorAll('.dlg-action').forEach(action => {
			if (cancellable && action.classList.contains('cancel-action')) return
			else setAttributes(action as HTMLElement, { disabled: loading })
		})
	}
	/**
	 * Sets the dialog config
	 * @param config Config name
	 * @param value Config value
	 */
	setOption<K extends keyof IDialogConfig>(config: K, value: IDialogConfig[K]) {
		// this.config[config] = value
		Object.assign(this.config, { [config]: value })
	}
	/**
	 * Sets the dialog configurations
	 * @param options Configurations
	 */
	setOptions(options: IDialogConfig) {
		Object.assign(this.config, options)
	}
	/**
	 * Shows the dialog
	 */
	show(): void {
		let _ = this

		if (_.config.init) this._buildUI()

		const docFrag = this.docFrag as DocumentFragment
		const dialog = this.dialog as HTMLDivElement

		appendTo(docFrag, document.body)
		setTimeout(() => {
			dialog.classList.add('dlg--open')
			this._checkContentScroll()

			// scroll to selected item (for single selection only)
			if (_.config.selection && !_.config.multiple) {
				const content = dialog.querySelector('.dlg-content') as HTMLDivElement
				const _selected = content.querySelector('.dlg-select-radio:checked') as HTMLInputElement

				if (_selected) {
					const isIE = !!window.navigator.userAgent.match(/MSIE|Trident/)
					const childNodes = Array.from(content.childNodes)
					const nodes = childNodes.slice(0, childNodes.indexOf(_selected.parentNode as HTMLElement))
					const _offset = nodes.reduce((sum, node) => (node as HTMLElement).offsetHeight + sum, 0)

					setTimeout(() => content.scrollTop = _offset, isIE ? 210 : 10)
				}
			}

			const buttons = document.getElementsByClassName('dlg-action')
			if (buttons && buttons.length) (buttons[buttons.length - 1] as HTMLButtonElement).focus()
			else (dialog.getElementsByClassName('dlg-wrapper')[0] as HTMLDivElement).focus()
		}, 15)
	}
	/**
	 * Hides the dialog
	 */
	hide(): void {
		this.setLoading(false)
		this.dialog?.classList.add('dlg--closing')
		setTimeout(() => {
			this.dialog && document.body.removeChild(this.dialog)
		}, 200)
	}
	/**
	 * Sets the dialog defaults
	 * @param options Dialog configurations
	 */
	static defaults(options: IDialogConfig) {
		duDialog._defaults = Object.assign({}, duDialog._defaults, options)
	}
}

export default duDialog
