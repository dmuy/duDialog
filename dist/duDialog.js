/*!Don't remove this!
 * duDialog v1.1 plugin
 * https://github.com/dmuy/duDialog
 *
 * Author: Dionlee Uy
 * Email: dionleeuy@gmail.com
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.duDialog = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var vars = {
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
  };

  /**
  * Vanilla JavaScript version of jQuery.extend()
  * @see https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
  */

  function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length; // Check if a deep merge

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    } // Merge the object into the extended object


    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    }; // Loop through each object and conduct a merge


    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  }
  /**
   * Sets element attributes
   * @param {HTMLElement} el Element to set attributes
   * @param {Object} attrs Attributes object
   */

  function setAttributes(el, attrs) {
    /* src: http://jsfiddle.net/andr3ww/pvuzgfg6/13/ */
    var recursiveSet = function recursiveSet(at, set) {
      for (var prop in at) {
        var a = at[prop];

        if (_typeof(a) === 'object' && a !== null && a.dataset === undefined && a[0] === undefined) {
          recursiveSet(a, set[prop]);
        } else {
          if (prop in set) if (a !== null) set[prop] = a;else {
            if (a !== null) set.setAttribute(prop, a);else set.removeAttribute(prop);
          }
        }
      }
    };

    recursiveSet(attrs, el);
  }
  /**
   * Removes blank spaces from string
   * @param {string} str String
   */

  function removeSpace(str) {
    return str.replace(/\s+/g, '');
  }
  /**
   * Determines if the item is in the specified array
   * @param {Array} arr Array to search
   * @param {string|Object|number} item Item to search
   */

  function inArray(arr, item) {
    if (!arr) return false;
    if (arr[0] === undefined) return false;
    return arr.filter(function (x) {
      return x === item;
    }).length > 0;
  }
  /**
   * Adds event listener to element
   * @param {HTMLElement} elem Element to add an event listener
   * @param {string} event Event name
   * @param {Function} handler Event handler
   */

  function addEvent(elem, event, handler) {
    if (Array.isArray(elem)) {
      elem.forEach(function (el) {
        el.addEventListener(event, handler, false);
      });
    } else {
      elem.addEventListener(event, handler, false);
    }
  }
  /**
   * Adds event listeners to element
   * @param {HTMLElement} el Element to add an event listener
   * @param {String[]} events Array of event names
   * @param {Function} handler Event handler
   */

  function addEvents(el, events, handler) {
    events.forEach(function (evt) {
      el.addEventListener(evt, handler, false);
    });
  }
  /**
   * Append element to parent
   * @param {HTMLElement} elem Element to append
   * @param {HTMLElement} to Parent element
   */

  function appendTo(elem, to) {
    if (Array.isArray(elem)) {
      elem.forEach(function (el) {
        to.appendChild(el);
      });
    } else {
      to.appendChild(elem);
    }
  }
  /**
   * `document.createElement` wrapper function
   * @param {string} tag Element tag name
   * @param {string} attributes Element attributes
   * @param {string} content Element content
   * @param {boolean} isHtml Determines if content is HTML
   */

  function createElem(tag, attributes, content, isHtml) {
    var el = document.createElement(tag);
    if (typeof content !== 'undefined') el[isHtml || false ? 'innerHTML' : 'innerText'] = content;
    if (typeof attributes !== 'undefined') setAttributes(el, attributes);
    return el;
  }
  /**
   * Builds the dialog UI
   */

  function buildUI() {
    var _ = this,
        cbs = _.config.callbacks,
        wrapper,
        header,
        content,
        footer,
        dialogPulse = function dialogPulse() {
      _.dialog.classList.add('dlg--pulse');

      setTimeout(function () {
        _.dialog.classList.remove('dlg--pulse');
      }, 200);
    },
        maxSelectCheck = function maxSelectCheck() {
      var checked = content.querySelectorAll('.dlg-select-checkbox:checked');

      if (checked.length === _.config.maxSelect) {
        content.querySelectorAll('.dlg-select-checkbox:not(:checked)').forEach(function (cb) {
          cb.setAttribute('disabled', true);
          cb.parentNode.classList.add('item--disabled');
        });
        if (cbs && cbs.maxReached) cbs.maxReached.call(_, _.config.maxSelect);
      } else {
        content.querySelectorAll('.dlg-select-checkbox:not(:checked)').forEach(function (cb) {
          cb.removeAttribute('disabled');
          cb.parentNode.classList.remove('item--disabled');
        });
      }
    },
        // global event handler
    evtHandler = function evtHandler(e) {
      if (e.type === 'click') {
        // handle overlay click if dialog has no action buttons
        if (e.target.matches('.du-dialog')) {
          if (_.type === vars.buttons.NONE) _.hide();else dialogPulse();
        } // handle selection item click


        if (e.target.matches('.dlg-select-item')) {
          e.target.querySelector('.dlg-select-lbl').click();
        } // handle action buttons click


        if (e.target.matches('.dlg-action')) {
          // OK button
          if (e.target.matches('.ok-action')) {
            if (_.config.selection && _.config.multiple) {
              var checked = content.querySelectorAll('.dlg-select-checkbox:checked'),
                  checkedVals = [],
                  checkedItems = [];

              for (var i = 0; i < checked.length; i++) {
                var item = _.cache[checked[i].id];
                checkedItems.push(item);
                checkedVals.push(typeof item === 'string' ? checked[i].value : item[_.config.valueField]);
              }

              if (checkedVals.length >= _.config.minSelect) {
                _.config.selectedValue = checkedVals;

                if (cbs && cbs.itemSelect) {
                  cbs.itemSelect.apply({
                    value: checkedVals
                  }, [e, checkedItems]);

                  _.hide();
                }
              } else {
                dialogPulse();
                if (cbs && cbs.minRequired) cbs.minRequired.call(_, _.config.minSelect);
              }
            } else {
              if (cbs && cbs.okClick) cbs.okClick.apply(_, e);else _.hide();
            }
          } // CANCEL button


          if (e.target.matches('.cancel-action')) {
            if (cbs && cbs.cancelClick) cbs.cancelClick.apply(_, e);else _.hide();
          }
        }
      }

      if (e.type === 'change') {
        // handle selection radio change
        if (e.target.matches('.dlg-select-radio')) {
          var el = e.target;

          if (el.checked && cbs && cbs.itemSelect) {
            var item = _.cache[el.id];
            _.config.selectedValue = typeof item === 'string' ? el.value : item[_.config.valueField];
            cbs.itemSelect.apply(el, [e, item]);

            _.hide();
          }
        } else if (e.target.matches('.dlg-select-checkbox')) {
          if (_.config.maxSelect) maxSelectCheck();
        }
      }

      if (e.type === 'scroll') {
        if (e.target.matches('.dlg-content')) e.target.classList[e.target.scrollTop > 5 ? 'add' : 'remove']('content--scrolled');
      }

      if (e.type === 'keyup') {
        if (e.target.matches('.dlg-search')) {
          var _keyword = e.target.value,
              _items = content.querySelectorAll('.dlg-select-item');

          for (var i = 0; i < _items.length; i++) {
            var dlgItem = _items[i],
                input = dlgItem.querySelector(_.config.multiple ? '.dlg-select-checkbox' : '.dlg-select-radio'),
                item = _.cache[input.id],
                iType = _typeof(item),
                iText = iType === 'string' ? item : item[_.config.textField],
                _matched = false;

            _matched = cbs && cbs.onSearch ? cbs.onSearch.call(_, item, _keyword) : iText.toLowerCase().indexOf(_keyword.toLowerCase()) >= 0;
            dlgItem.classList[_matched ? 'remove' : 'add']('item--nomatch');
          }
        }
      }
    };

    _.docFrag = document.createDocumentFragment();
    _.dialog = createElem('div', {
      className: 'du-dialog',
      id: _.config.id
    });
    if (_.config.dark) _.dialog.setAttribute('dark', true);
    if (_.config.selection) _.dialog.setAttribute('selection', true);
    appendTo(_.dialog, _.docFrag);
    wrapper = createElem('div', {
      className: 'dlg-wrapper',
      tabIndex: 0
    });
    appendTo(wrapper, _.dialog);

    if (_.title) {
      header = createElem('div', {
        className: 'dlg-header'
      }, _.title);
      appendTo(header, wrapper);
    } else {
      _.dialog.classList.add('dlg--no-title');
    }

    content = createElem('div', {
      className: 'dlg-content'
    });

    if (_.config.selection) {
      if (_.config.allowSearch) {
        appendTo(createElem('input', {
          className: 'dlg-search',
          placeholder: 'Search...'
        }), header);
      }

      for (var idx = 0; idx < _.content.length; idx++) {
        var item = _.content[idx],
            iType = _typeof(item),
            iVal = iType === 'string' ? item : item[_.config.valueField],
            iText = iType === 'string' ? item : item[_.config.textField],
            itemId = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + removeSpace(iVal.toString()),
            sItem = createElem('div', {
          className: 'dlg-select-item'
        }),
            sRadio = createElem('input', {
          className: _.config.multiple ? 'dlg-select-checkbox' : 'dlg-select-radio',
          id: itemId,
          name: 'dlg-selection',
          type: _.config.multiple ? 'checkbox' : 'radio',
          value: iVal,
          checked: _.config.multiple ? _.config.selectedValue && inArray(_.config.selectedValue, iVal) : _.config.selectedValue === iVal
        }),
            sLabel = createElem('label', {
          className: 'dlg-select-lbl',
          htmlFor: itemId
        }, cbs && cbs.itemRender ? cbs.itemRender.call(_, item) : '<span class="select-item">' + iText + '</span>', true);

        _.cache[itemId] = item;
        appendTo([sRadio, sLabel], sItem);
        appendTo(sItem, content);
      }

      if (_.config.multiple && _.config.maxSelect) maxSelectCheck();
    } else content.innerHTML = _.content;

    appendTo(content, wrapper);

    if (_.type !== vars.buttons.NONE) {
      footer = createElem('div', {
        className: 'dlg-actions'
      });
      appendTo(footer, wrapper);
    }
    /* Setup action buttons */


    switch (_.type) {
      case vars.buttons.OK_CANCEL:
        appendTo([createElem('button', {
          className: 'dlg-action cancel-action',
          tabIndex: 2
        }, _.config.cancelText), createElem('button', {
          className: 'dlg-action ok-action',
          tabIndex: 1
        }, _.config.okText)], footer);
        break;

      case vars.buttons.DEFAULT:
        appendTo(createElem('button', {
          className: 'dlg-action ok-action',
          tabIndex: 1
        }, _.config.okText), footer);
        break;
    }
    /* Register event handler */


    addEvent(content, 'scroll', evtHandler);
    addEvents(_.dialog, ['click', 'change', 'keyup'], evtHandler);
    if (!_.config.init) _.show();
  }
  /**
   * Defines duDialog button types as exposed properties
   * @param {Object} obj duDialog
   */

  function defineButtons(obj) {
    var props = {},
        buttons = vars.buttons;

    for (var p in buttons) {
      props[p] = {
        value: buttons[p]
      };
    }

    Object.defineProperties(obj, props);
  }

  var _duDialog = /*#__PURE__*/function () {
    function _duDialog(title, content, options) {
      _classCallCheck(this, _duDialog);

      var _ = this,
          titleType = _typeof(title),
          contType = _typeof(content);

      _.config = extend(true, vars.defaults, options);
      _.type = _.config.selection ? _.config.multiple ? vars.buttons.OK_CANCEL : vars.buttons.NONE : _.config.buttons;
      if (titleType === 'undefined' || titleType !== 'string' && title !== null) throw new Error('Dialog title is missing or incorrect format.');
      if ((contType === 'undefined' || contType !== 'string') && !_.config.selection || !Array.isArray(content) && _.config.selection) throw new Error('Dialog message is missing or incorrect format.');
      _.title = title;
      _.content = content;
      _.cache = {};
      if (!_.config.init) buildUI.apply(_);
    }
    /**
     * Shows the dialog
     */


    _createClass(_duDialog, [{
      key: "show",
      value: function show() {
        var _ = this;

        if (_.config.init) buildUI.apply(_);
        appendTo(_.docFrag, document.body);
        setTimeout(function () {
          _.dialog.classList.add('dlg--open'); // scroll to selected item (for single selection only)


          if (_.config.selection && !_.config.multiple) {
            var content = _.dialog.querySelector('.dlg-content'),
                _selected = content.querySelector('.dlg-select-radio:checked');

            if (_selected) {
              var _nodes = _toConsumableArray(content.childNodes),
                  _offset = 0;

              for (var i = 0; i < _nodes.indexOf(_selected.parentNode); i++) {
                var ch = _nodes[i].offsetHeight;
                _offset += ch;
              }

              content.scrollTop = _offset;
            }
          }

          var buttons = document.getElementsByClassName('dlg-action');
          if (buttons && buttons.length) buttons[buttons.length - 1].focus();else _.dialog.getElementsByClassName('dlg-wrapper')[0].focus();
        }, 15);
      }
      /**
       * Hides the dialog
       */

    }, {
      key: "hide",
      value: function hide() {
        var _ = this;

        _.dialog.classList.add('dlg--closing');

        setTimeout(function () {
          document.body.removeChild(_.dialog);
        }, 200);
      }
    }]);

    return _duDialog;
  }();
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


  function duDialog(title, content, options) {
    return new _duDialog(title, content, options);
  }

  defineButtons(duDialog);
  /* Polyfills */

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  return duDialog;

})));
