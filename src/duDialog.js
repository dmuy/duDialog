import './duDialog.scss'
import { extend, buildUI, appendTo } from './helpers'
import vars from './vars'

class DUDialog {
	constructor() {
		var _ = this, _args = arguments, titleType = typeof _args[0], msgType = typeof _args[1], tType = typeof _args[2]

		_.config = extend(true, vars.defaults, tType === 'object' ? _args[2] : _args[3])

		var enforcedAction = (_.config.selection ? (_.config.multiple ? vars.buttons.OK_CANCEL : vars.buttons.NO_ACTION) : vars.buttons.DEFAULT)

		_.type = tType === 'object' ? enforcedAction : _args[2] || enforcedAction

		if (titleType === 'undefined' || (titleType !== 'string' && _args[0] !== null))
			throw new Error('Dialog title is missing or incorrect format.')

		if (((msgType === 'undefined' || msgType !== 'string') && !_.config.selection) ||
			(!Array.isArray(_args[1]) && _.config.selection))
			throw new Error('Dialog message is missing or incorrect format.')

		_.title = _args[0]
		_.message = _args[1]
		_.cache = {}

		if (!_.config.init)
			buildUI.apply(_)
	}
	/**
	 * Shows the dialog
	 */
	show() {
		var _ = this

		if (_.config.init)
			buildUI.apply(_)

		appendTo(_.docFrag, document.body)
		setTimeout(() => {
			_.dialog.classList.add('dlg--open')

			// scroll to selected item (for single selection only)
			if (_.config.selection && !_.config.multiple) {
				var content = _.dialog.querySelector('.dlg-content'),
					_selected = content.querySelector('.dlg-select-radio:checked')

				if (_selected) {
					var _nodes = [...content.childNodes], _offset = 0

					for (var i = 0; i < _nodes.indexOf(_selected.parentNode); i++) {
						var ch = _nodes[i].offsetHeight

						_offset += ch
					}

					content.scrollTop = _offset
				}
			}

			var buttons = document.getElementsByClassName('dlg-action')
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
		var _ = this

		_.dialog.classList.add('dlg--closing')
		setTimeout(() => {
			document.body.removeChild(_.dialog)
		}, 200)
	}
}

/**
 * Creates a dialog
 * @param {string} title Dialog title
 * @param {string} message Dialog message or content
 * @param {number} type Dialog buttons
 * @param {Object} options Dialog configurations
 */
function duDialog (title, message, type, options) {
	return new DUDialog(...arguments)
}

Object.defineProperties(duDialog, {
	DEFAULT: { value: vars.buttons.DEFAULT },
	OK_CANCEL: { value: vars.buttons.OK_CANCEL },
	NO_ACTION: { value: vars.buttons.NO_ACTION }
})

/* Polyfills for unsupported methods/functions */
if (!Element.prototype.matches) {
	Element.prototype.matches =
		Element.prototype.matchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector ||
		Element.prototype.oMatchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		function (s) {
			var matches = (this.document || this.ownerDocument).querySelectorAll(s),
				i = matches.length
			while (--i >= 0 && matches.item(i) !== this) { }
			return i > -1
		}
}

export default duDialog