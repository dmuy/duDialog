/* !Don't remove this!
 * duDialog v1.0 plugin
 * https://github.com/dmuy/duDialog
 *
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 */

(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define('duDialog', [], factory(root));
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory(root);
	} else {
		// Browser globals
		root.duDialog = factory(root);
	}
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {
	'use strict';

	if (!String.prototype.removeSpace)
		String.prototype.removeSpace = function () { return this.replace(/\s+/g,'') };

	var _types = {};
	Object.defineProperties(_types, {
		DEFAULT: { value: 1 },
		OK_CANCEL: { value: 2 },
		NO_ACTION: { value: 3 }
	});

	Object.defineProperty(root, 'duDlgTypes', { value: _types });

	var supports = !!document.querySelector && !!root.addEventListener, // feature test
		defaults = {
			init: false,			// determines if initialize only (dialog will not be shown immediately after initialization)
			okText: 'Ok',			// display text for the 'OK' button
			cancelText: 'Cancel',	// display text for the 'Cancel' button
			selection: false,		// determines if dialog is for item selection
			selectedValue: null,	// default selected item value (for selection dialog)
			valueField: 'value',	// variable name for the select item value; use this for custom object structure (for selection dialog)
			textField: 'item',		// variable name for the select item display text; use this for custom object structure (for selection dialog)
			callbacks: null			// callback functions: okClick, cancelClick
		}, duDialog = function () {
			var _ = this, _args = arguments,
				titleType = typeof _args[0], msgType = typeof _args[1], tType = typeof _args[2];

			if (typeof _ === 'undefined') 
				throw new Error('duDialog should be initialized.');

			_.type = tType === 'object' ? duDlgTypes.DEFAULT : _args[2] || duDlgTypes.DEFAULT;
			_.config = extendObj(defaults, tType === 'object' ? _args[2] : _args[3]);

			if (titleType === 'undefined' || (titleType !== 'string' && _args[0] !== null))
				throw new Error('Dialog title is missing or incorrect format.');

			if (((msgType === 'undefined' || msgType !== 'string') && !_.config.selection) ||
				(!Array.isArray(_args[1]) && _.config.selection))
				throw new Error('Dialog message is missing or incorrect format.');

			_.title = _args[0];
			_.message = _args[1];

			if (!_.config.init) buildUI.apply(this);
		}, buildUI = function() {

			if (!supports) return;

			var _ = this, _callbacks = _.config.callbacks, wrapper, header, content, footer,
				// createElement helper
				createElem = function(tag, className, content, isHtml) {
					var el = document.createElement(tag);

					el.className = className;
					
					if (typeof content !== 'undefined')
						el[isHtml || false ? 'innerHTML' : 'innerText'] = content;

					return el;
				},
				// global event handler
				evtHandler = function (e) {
					if (e.type === 'click') {
						// handle overlay click if dialog has no action buttons
						if (e.target.matches('.du-dialog') && _.type === duDlgTypes.NO_ACTION)
							_.hide();

						// handle selection item click
						if (e.target.matches('.dlg-select-item'))
							e.target.querySelector('.dlg-select-lbl').click();

						// handle action buttons click
						if (e.target.matches('.dlg-action')) {
							if (e.target.matches('.ok-action')) {
								if(_callbacks && _callbacks.okClick) _callbacks.okClick.apply(_, e);
								else _.hide();
							}

							if (e.target.matches('.cancel-action')) {
								if(_callbacks && _callbacks.cancelClick) _callbacks.cancelClick.apply(_, e);
								else _.hide();
							}
						}
					}

					if (e.type === 'change') {
						// handle selection radio change
						if (e.target.matches('.dlg-select-radio')) {
							var el = e.target;
							if (el.checked && _callbacks && _callbacks.itemSelect) {
								_.config.selectedValue = el.value;
								_callbacks.itemSelect.apply(el, [e, el.item]);

								if (_.type === duDlgTypes.NO_ACTION) _.hide();
							}
						}
					}

					if (e.type === 'scroll') {
						if (e.target.matches('.dlg-content'))
							e.target.classList[e.target.scrollTop > 5 ? 'add' : 'remove']('content--scrolled');
					}
				};

			_.docFrag = document.createDocumentFragment();
			_.dialog = createElem('div', 'du-dialog');
			_.docFrag.appendChild(_.dialog);
			wrapper = createElem('div', 'dlg-wrapper');
			_.dialog.appendChild(wrapper);

			if (_.title) {
				header = createElem('div', 'dlg-header', _.title);
				wrapper.appendChild(header);
			} else {
				_.dialog.classList.add('dlg--no-title');
			}

			content = createElem('div', 'dlg-content');

			if (_.config.selection) {
				for (var idx in _.message) {
					var item = _.message[idx], iType = typeof item, 
						iVal = iType === 'string' ? item : item[_.config.valueField],
						iText = iType === 'string' ? item : item[_.config.textField],
						sItem = createElem('div', 'dlg-select-item'),
						sRadio = createElem('input', 'dlg-select-radio'),
						sLabel = createElem('label', 'dlg-select-lbl', iText),
						itemId = 'dlg-radio' + iVal.toString().removeSpace();

					sRadio.type = 'radio';
					sRadio.name = 'dlg-selection';
					sRadio.value = iVal;
					sRadio.id = itemId;
					sRadio.item = item;
					sRadio.checked = _.config.selectedValue == iVal;
					sLabel.htmlFor = itemId;
					sItem.appendChild(sRadio);
					sItem.appendChild(sLabel);
					content.appendChild(sItem);
				}
			} else content.innerHTML = _.message;

			wrapper.appendChild(content);

			if (_.type !== duDlgTypes.NO_ACTION) {
				footer = createElem('div', 'dlg-actions');
				wrapper.appendChild(footer);
			}

			switch(_.type) {
				case duDlgTypes.OK_CANCEL:
					footer.appendChild(createElem('button', 'dlg-action cancel-action', _.config.cancelText));
					footer.appendChild(createElem('button', 'dlg-action ok-action', _.config.okText));
				break;
				case duDlgTypes.DEFAULT:
					footer.appendChild(createElem('button', 'dlg-action ok-action', _.config.okText));
				break;
			}

			/* Register event handler */
			content.addEventListener('scroll', evtHandler, false);
			_.dialog.addEventListener('click', evtHandler, false);
			_.dialog.addEventListener('change', evtHandler, false);

			if (!_.config.init) _.show();
		};

	// shows dialog
	duDialog.prototype.show = function() {
		var _ = this;

		if (_.config.init) buildUI.apply(this);

		document.body.appendChild(_.docFrag);
		setTimeout(function () {
			_.dialog.classList.add('dlg--open');

			var buttons = document.getElementsByClassName('dlg-action');
			if (buttons && buttons.length)
				buttons[buttons.length - 1].focus();
		}, 15);
	}

	// hides dialog
	duDialog.prototype.hide = function() {
		var _ = this;

		_.dialog.classList.add('dlg--closing');
		setTimeout(function () {
			document.body.removeChild(_.dialog);
		}, 200);
	}

	/*
	* Vanilla JavaScript version of jQuery.extend()
	* src: https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
	*/
	function extendObj() {
		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Check if a deep merge
		if ( Object.prototype.toString.call( arguments[0] ) === '[object Boolean]' ) {
			deep = arguments[0];
			i++;
		}

		// Merge the object into the extended object
		var merge = function (obj) {
			for ( var prop in obj ) {
				if ( Object.prototype.hasOwnProperty.call( obj, prop ) ) {
					// If deep merge and property is an object, merge properties
					if ( deep && Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
						extended[prop] = extend( true, extended[prop], obj[prop] );
					} else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;
	}

	return duDialog;
});