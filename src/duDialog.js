import { extend, buildUI, appendTo, defineButtons, setAttributes } from './helpers'
import vars from './vars'

class _duDialog {
	constructor(title, content, options) {
		let _ = this, titleType = typeof title, contType = typeof content

		_.config = extend(true, vars.defaults, options)

		_.type = _.config.selection ? (_.config.multiple || _.config.confirmSelect ? vars.buttons.OK_CANCEL : vars.buttons.NONE) : _.config.buttons

		if (titleType === 'undefined' || (titleType !== 'string' && title !== null))
			throw new Error('Dialog title is missing or incorrect format.')

		if (((contType === 'undefined' || contType !== 'string') && !_.config.selection) ||
			(!Array.isArray(content) && _.config.selection))
			throw new Error('Dialog message is missing or incorrect format.')

		_.title = title
		_.content = content
		_.cache = {}
		_.optOut = false

		if (!_.config.init)
			buildUI.apply(_)
	}
	/**
	 * Sets the loading state of the dialog
	 * @param {Boolean} loading Determines the loading state of the dialog
	 * @param {Boolean} cancellable Determines if the loading state is cancellable (Cancel action button)
	 */
	setLoading(loading, cancellable = false) {
		let _ = this

		_.loadingState = loading
		_.loadingCancellable = cancellable
		_.dialog.classList[loading ? 'add' : 'remove']('dlg--loading')
		_.dialog.querySelectorAll('.dlg-action').forEach(action => {
			if (cancellable && action.classList.contains('cancel-action'))
				return
			else setAttributes(action, { disabled: loading })
		})
	}
	/**
	 * Shows the dialog
	 */
	show() {
		let _ = this

		if (_.config.init)
			buildUI.apply(_)

		appendTo(_.docFrag, document.body)
		setTimeout(() => {
			_.dialog.classList.add('dlg--open')

			// scroll to selected item (for single selection only)
			if (_.config.selection && !_.config.multiple) {
				let content = _.dialog.querySelector('.dlg-content'),
					_selected = content.querySelector('.dlg-select-radio:checked')

				if (_selected) {
					let isIE = !!window.navigator.userAgent.match(/MSIE|Trident/)
					let _nodes = Array.from(content.childNodes), _offset = 0

					for (let i = 0; i < _nodes.indexOf(_selected.parentNode); i++) {
						let ch = _nodes[i].offsetHeight

						_offset += ch
					}

					setTimeout(() => content.scrollTop = _offset, isIE ? 210 : 10)
				}
			}

			let buttons = document.getElementsByClassName('dlg-action')
			if (buttons && buttons.length)
				buttons[buttons.length - 1].focus()

			else
				_.dialog.getElementsByClassName('dlg-wrapper')[0].focus()
		}, 15)
	}
	/**
	 * Hides the dialog
	 */
	hide() {
		let _ = this

		_.setLoading(false)
		_.dialog.classList.add('dlg--closing')
		setTimeout(() => {
			document.body.removeChild(_.dialog)
		}, 200)
	}
}

/**
 * Creates a dialog
 * @param {string} title Dialog title
 * @param {string|string[]|object[]} content Dialog message, HTML content, or array of selection items
 * @param {Object} options Dialog configurations
 * @param {string} options.id ID attribute of the dialog container (for specific dialog styling convenience)
 * @param {boolean} options.init Determines if initialize-only (dialog will not be shown immediately after initialization)
 * @param {boolean} options.dark Determines if dark theme is on
 * @param {number} options.buttons Button types (OK, OK_CANCEL, NONE)
 * @param {string} options.okText Display text for the 'OK' button
 * @param {string} options.cancelText Display text for the 'Cancel' button
 * @param {string} options.yesText Display text for the 'Yes' button
 * @param {string} options.noText Display text for the 'No' button
 * @param {boolean} options.selection Determines if dialog is for item selection
 * @param {boolean} options.confirmSelect Determines if (single) select dialog will show the OK_CANCEL buttons for confirmation
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
function duDialog (title, content, options) {
	return new _duDialog(title, content, options)
}

defineButtons(duDialog)

/* Polyfills */
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function (s) {
			let matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i = matches.length
			while (--i >= 0 && matches.item(i) !== this) { }
			return i > -1
		}
}

export default duDialog