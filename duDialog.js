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

	if (!String.prototype.removeSpace) {
		String.prototype.removeSpace = function () { return this.replace(/\s+/g,'') };
	}

	var supports = !!document.querySelector && !!root.addEventListener, // feature test
		defaults = {
			init: false,			// determines if initialize only (dialog will not be shown immediately after initialization)
			okText: 'Ok',			// display text for the 'OK' button
			cancelText: 'Cancel',	// display text for the 'Cancel' button
			selection: false,		// determines if dialog is for item selection
			multiple: false,		// determines if multiple seletion (for selection dialog)
			selectedValue: null,	// default selected item value (for selection dialog)
			valueField: 'value',	// variable name for the select item value; use this for custom object structure (for selection dialog)
			textField: 'item',		// variable name for the select item display text; use this for custom object structure (for selection dialog)
			callbacks: null			// callback functions: okClick, cancelClick, itemSelect (for selection dialog)
		}, duDialog = function () {
			var _ = this, _args = arguments,
				titleType = typeof _args[0], msgType = typeof _args[1], tType = typeof _args[2];

			if (typeof _ === 'undefined') 
				throw new Error('duDialog should be initialized.');

			_.config = extendObj(defaults, tType === 'object' ? _args[2] : _args[3]);

			var enforcedAction = (_.config.selection ? (_.config.multiple ? duDialog.OK_CANCEL : duDialog.NO_ACTION) : duDialog.DEFAULT);

			_.type = tType === 'object' ? enforcedAction : _args[2] || enforcedAction;

			if (titleType === 'undefined' || (titleType !== 'string' && _args[0] !== null))
				throw new Error('Dialog title is missing or incorrect format.');

			if (((msgType === 'undefined' || msgType !== 'string') && !_.config.selection) ||
				(!Array.isArray(_args[1]) && _.config.selection))
				throw new Error('Dialog message is missing or incorrect format.');

			_.title = _args[0];
			_.message = _args[1];

			if (!_.config.init) buildUI.apply(this);
		}, setAttributes = function(el, attrs) {
			/* src: http://jsfiddle.net/andr3ww/pvuzgfg6/13/ */
			var recursiveSet = function(at, set) {
				for (var prop in at) {
					var a = at[prop];
					if (typeof a === 'object' && a.dataset === undefined && a[0] === undefined) { recursiveSet(a, set[prop]); }
					else { set[prop] = a; }
				}
			}
			recursiveSet(attrs, el);
		}, inArray = function (arr, item) {
			if (!arr) return false;
			if (arr[0] === undefined) return false;

			return arr.filter(function (x) { return x === item  }).length > 0
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
						if (e.target.matches('.du-dialog') && _.type === duDialog.NO_ACTION)
							_.hide();

						// handle selection item click
						if (e.target.matches('.dlg-select-item'))
							e.target.querySelector('.dlg-select-lbl').click();

						// handle action buttons click
						if (e.target.matches('.dlg-action')) {
							// OK button
							if (e.target.matches('.ok-action')) {
								if (_.config.selection && _.config.multiple) {
									var checked = content.querySelectorAll(':scope .dlg-select-checkbox:checked'), checkedVals = [], checkedItems = [];

									for (var i = 0; i < checked.length; i++) {
										var item = checked[i].item;

										checkedItems.push(item);
										checkedVals.push(typeof item === 'string' ? checked[i].value : item[_.config.valueField]);
									}

									_.config.selectedValue = checkedVals;
									_callbacks.itemSelect.apply({ value: checkedVals }, [e, checkedItems]);
									_.hide();
								} else {
									if(_callbacks && _callbacks.okClick) _callbacks.okClick.apply(_, e);
									else _.hide();
								}
							}

							// CANCEL button
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
								_.config.selectedValue = typeof el.item === 'string' ? el.value : el.item[_.config.valueField];
								_callbacks.itemSelect.apply(el, [e, el.item]);

								_.hide();
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
			wrapper.tabIndex = 0;
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
						sRadio = createElem('input', _.config.multiple ? 'dlg-select-checkbox' : 'dlg-select-radio'),
						sLabel = createElem('label', 'dlg-select-lbl', iText),
						itemId = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + iVal.toString().removeSpace();

					setAttributes(sRadio, {
						id: itemId,
						name: 'dlg-selection',
						type: _.config.multiple ? 'checkbox' : 'radio',
						value: iVal,
						checked: _.config.multiple ? (_.config.selectedValue && inArray(_.config.selectedValue, iVal)) : _.config.selectedValue === iVal
					});
					sRadio.item = item;
					sLabel.htmlFor = itemId;
					sItem.appendChild(sRadio);
					sItem.appendChild(sLabel);
					content.appendChild(sItem);
				}
			} else content.innerHTML = _.message;

			wrapper.appendChild(content);

			if (_.type !== duDialog.NO_ACTION) {
				footer = createElem('div', 'dlg-actions');
				wrapper.appendChild(footer);
			}

			/* Setup action buttons */
			switch(_.type) {
				case duDialog.OK_CANCEL:
					var btnCancel = createElem('button', 'dlg-action cancel-action', _.config.cancelText),
						btnOk = createElem('button', 'dlg-action ok-action', _.config.okText);

					btnCancel.tabIndex = 2;
					btnOk.tabIndex = 1;
					footer.appendChild(btnCancel);
					footer.appendChild(btnOk);
				break;
				case duDialog.DEFAULT:
					var btnOk = createElem('button', 'dlg-action ok-action', _.config.okText);

					btnOk.tabIndex = 1;
					footer.appendChild(btnOk);
				break;
			}

			/* Register event handler */
			content.addEventListener('scroll', evtHandler, false);
			_.dialog.addEventListener('click', evtHandler, false);
			_.dialog.addEventListener('change', evtHandler, false);

			if (!_.config.init) _.show();
		};

	Object.defineProperties(duDialog, {
		DEFAULT: { value: 1 },
		OK_CANCEL: { value: 2 },
		NO_ACTION: { value: 3 }
	});

	/* Shows dialog */
	duDialog.prototype.show = function() {
		var _ = this;

		if (_.config.init) buildUI.apply(this);

		document.body.appendChild(_.docFrag);
		setTimeout(function () {
			_.dialog.classList.add('dlg--open');

			var buttons = document.getElementsByClassName('dlg-action');
			if (buttons && buttons.length)
				buttons[buttons.length - 1].focus();
			else
				_.dialog.getElementsByClassName('dlg-wrapper')[0].focus();
		}, 15);
	}

	/* Hides dialog */
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