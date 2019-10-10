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

	var supports = !!document.querySelector && !!root.addEventListener, // feature test
		defaults = {
			id: null,				// id attribute of the dialog container (for specific dialog styling convenience)
			init: false,			// determines if initialize only (dialog will not be shown immediately after initialization)
			okText: 'Ok',			// display text for the 'OK' button
			cancelText: 'Cancel',	// display text for the 'Cancel' button
			selection: false,		// determines if dialog is for item selection
			multiple: false,		// determines if multiple seletion (for selection dialog)
			allowSearch: false,		// determines if search input is visible/enabled (for selection dialog)
			selectedValue: null,	// default selected item value (for selection dialog)
			valueField: 'value',	// variable name for the select item value; use this for custom object structure (for selection dialog)
			textField: 'item',		// variable name for the select item display text; use this for custom object structure (for selection dialog)
			callbacks: null			// callback functions: okClick, cancelClick, itemSelect (for selection dialog), onSearch (for selection dialog), itemRender (for selection dialog)
		},
		/*
		* Vanilla JavaScript version of jQuery.extend()
		* src: https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
		*/
		extendObj = function () {
			// Variables
	        var extended = {};
	        var deep = false;
	        var i = 0;
	        var length = arguments.length;

	        // Check if a deep merge
	        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
	            deep = arguments[0];
	            i++;
	        }

	        // Merge the object into the extended object
	        var merge = function (obj) {
	            for (var prop in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
	                    // If deep merge and property is an object, merge properties
	                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
	                        extended[prop] = extendObj(true, extended[prop], obj[prop]);
	                    } else {
	                        extended[prop] = obj[prop];
	                    }
	                }
	            }
	        };

	        // Loop through each object and conduct a merge
	        for (; i < length; i++) {
	            var obj = arguments[i];
	            merge(obj);
	        }

	        return extended;
		}, duDialog = function () {

			if (!(this instanceof duDialog))
				return duDialog.apply(Object.create(duDialog.prototype), arguments);

			var _ = this, _args = arguments, titleType = typeof _args[0], msgType = typeof _args[1], tType = typeof _args[2];

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
			_.cache = {};

			if (!_.config.init) buildUI.apply(_);

			return _;
		}, setAttributes = function(el, attrs) {
			/* src: http://jsfiddle.net/andr3ww/pvuzgfg6/13/ */
			var recursiveSet = function (at, set) {
                for (var prop in at) {
                    var a = at[prop];
                    if ((typeof a === 'object' && a !== null) && a.dataset === undefined && a[0] === undefined) { recursiveSet(a, set[prop]); }
                    else {
                        if (prop in set)
                             if (a !== null) set[prop] = a;
                        else {
                        	 if (a !== null)
                            	set.setAttribute(prop, a);
                            else
                            	set.removeAttribute(prop);
                        }
                    }
                }
            }
			recursiveSet(attrs, el);
		}, removeSpace = function (str) {
			return str.replace(/\s+/g,'');
		}, inArray = function (arr, item) {
			if (!arr) return false;
			if (arr[0] === undefined) return false;

			return arr.filter(function (x) { return x === item  }).length > 0
		}, addEventToElem = function (elem, event, handler) {
            if (Array.isArray(elem)) {
                elem.forEach(function (el) {
                    el.addEventListener(event, handler, false);
                });
            } else {
                elem.addEventListener(event, handler, false);
            }
        }, addEventsToElem = function (el, events, handler) {
            events.forEach(function (evt) {
                el.addEventListener(evt, handler, false);
            });
        }, appendTo = function (elem, to) {
            if (Array.isArray(elem)) {
                elem.forEach(function (el) {
                    to.appendChild(el);
                });
            } else {
                to.appendChild(elem);
            }
        }, buildUI = function() {

			if (!supports) return;

			var _ = this, _callbacks = _.config.callbacks, wrapper, header, content, footer,
				// createElement helper
				createElem = function (tag, attributes, content, isHtml) {
		            // createElement helper
		            var el = document.createElement(tag);

		            if (typeof content !== 'undefined')
		                el[isHtml || false ? 'innerHTML' : 'innerText'] = content;

		            if (typeof attributes !== 'undefined')
		                setAttributes(el, attributes);

		            return el;
		        },
				// global event handler
				evtHandler = function (e) {
					if (e.type === 'click') {
						// handle overlay click if dialog has no action buttons
						if (e.target.matches('.du-dialog')) {
							if (_.type === duDialog.NO_ACTION) _.hide();
							else {
								_.dialog.classList.add('dlg--pulse');
								setTimeout(function () { _.dialog.classList.remove('dlg--pulse') }, 200);
							}
						}

						// handle selection item click
						if (e.target.matches('.dlg-select-item'))
							e.target.querySelector('.dlg-select-lbl').click();

						// handle action buttons click
						if (e.target.matches('.dlg-action')) {
							// OK button
							if (e.target.matches('.ok-action')) {
								if (_.config.selection && _.config.multiple) {
									var checked = content.querySelectorAll('.dlg-select-checkbox:checked'), checkedVals = [], checkedItems = [];

									for (var i = 0; i < checked.length; i++) {
										var item = _.cache[checked[i].id];

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
								var item = _.cache[el.id];
								_.config.selectedValue = typeof item === 'string' ? el.value : item[_.config.valueField];
								_callbacks.itemSelect.apply(el, [e, item]);

								_.hide();
							}
						}
					}

					if (e.type === 'scroll') {
						if (e.target.matches('.dlg-content'))
							e.target.classList[e.target.scrollTop > 5 ? 'add' : 'remove']('content--scrolled');
					}

					if (e.type === 'keyup') {
						if (e.target.matches('.dlg-search')) {
							var _keyword = e.target.value, _items = content.querySelectorAll('.dlg-select-item');

							for (var i = 0; i < _items.length; i++) {
								var dlgItem = _items[i],
									input = dlgItem.querySelector((_.config.multiple ? '.dlg-select-checkbox' : '.dlg-select-radio')),
									item = _.cache[input.id], iType = typeof item, iText = iType === 'string' ? item : item[_.config.textField],
									_matched = false;

								_matched = (_callbacks && _callbacks.onSearch) ? _callbacks.onSearch.call(_, item, _keyword) :
									iText.toLowerCase().indexOf(_keyword.toLowerCase()) >= 0;

								dlgItem.classList[_matched ? 'remove' : 'add']('item--nomatch');
							}
						}
					}
				};

			_.docFrag = document.createDocumentFragment();
			_.dialog = createElem('div', { className: 'du-dialog', id: _.config.id });

			appendTo(_.dialog, _.docFrag);
			
			wrapper = createElem('div', { className: 'dlg-wrapper', tabIndex: 0 });

			appendTo(wrapper, _.dialog);

			if (_.title) {
				header = createElem('div', { className: 'dlg-header' }, _.title);

				appendTo(header, wrapper);
			} else {
				_.dialog.classList.add('dlg--no-title');
			}

			content = createElem('div', { className: 'dlg-content' });

			if (_.config.selection) {
				if (_.config.allowSearch) {
					appendTo(createElem('input', { className: 'dlg-search', placeholder: 'Search...' }), header);
				}

				for (var idx = 0; idx < _.message.length; idx++) {
					var item = _.message[idx], iType = typeof item, 
						iVal = iType === 'string' ? item : item[_.config.valueField],
						iText = iType === 'string' ? item : item[_.config.textField],
						itemId = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + removeSpace(iVal.toString()),
						sItem = createElem('div', { className: 'dlg-select-item' }),
						sRadio = createElem('input', { 
							className: _.config.multiple ? 'dlg-select-checkbox' : 'dlg-select-radio',
							id: itemId,
							name: 'dlg-selection',
							type: _.config.multiple ? 'checkbox' : 'radio',
							value: iVal,
							checked: _.config.multiple ? (_.config.selectedValue && inArray(_.config.selectedValue, iVal)) : _.config.selectedValue === iVal
						}),
						sLabel = createElem('label', { 
							className: 'dlg-select-lbl', htmlFor: itemId
						}, (_callbacks && _callbacks.itemRender ? _callbacks.itemRender.call(_, item) : '<span class="select-item">' + iText + '</span>'), true);
					
					_.cache[itemId] = item;
					appendTo([sRadio, sLabel], sItem);
					appendTo(sItem, content);
				}
			} else content.innerHTML = _.message;

			appendTo(content, wrapper);

			if (_.type !== duDialog.NO_ACTION) {
				footer = createElem('div', { className: 'dlg-actions' });
				appendTo(footer, wrapper);
			}

			/* Setup action buttons */
			switch(_.type) {
				case duDialog.OK_CANCEL:
					appendTo([createElem('button', { className: 'dlg-action cancel-action', tabIndex: 2 }, _.config.cancelText), 
						createElem('button', {  className: 'dlg-action ok-action', tabIndex: 1 }, _.config.okText)
						], footer);
				break;
				case duDialog.DEFAULT:
					appendTo(createElem('button', { className: 'dlg-action ok-action', tabIndex: 1 }, _.config.okText), footer);
				break;
			}

			/* Register event handler */
			addEventToElem(content, 'scroll', evtHandler);
			addEventsToElem(_.dialog, ['click', 'change', 'keyup'], evtHandler);

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

		appendTo(_.docFrag, document.body);
		setTimeout(function () {
			_.dialog.classList.add('dlg--open');

			// scroll to selected item (for single selection only)
			if (_.config.selection && !_.config.multiple) {
				var content = _.dialog.querySelector('.dlg-content'),
					_selected = content.querySelector('.dlg-select-radio:checked');

				if (_selected) {
					var _nodes = Array.prototype.slice.call(content.childNodes), _offset = 0;

					for (var i = 0; i < _nodes.indexOf(_selected.parentNode); i++) {
						var ch = _nodes[i].offsetHeight;

						_offset += ch;
					}

					content.scrollTop = _offset;
				}
			}

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

	return duDialog;
});

/* Polyfills for unsupported methods/functions */

if (!Element.prototype.matches) {
  Element.prototype.matches = 
      Element.prototype.matchesSelector || 
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector || 
      Element.prototype.oMatchesSelector || 
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;            
      };
}