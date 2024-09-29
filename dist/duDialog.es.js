var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function setAttributes(el, attrs) {
  const recursiveSet = (attr, set) => {
    for (const prop in attr) {
      const a = attr[prop];
      if (typeof a === "object" && a !== null && a.dataset === void 0 && a[0] === void 0) {
        recursiveSet(a, set[prop]);
      } else {
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
  };
  recursiveSet(attrs, el);
}
function removeSpace(str) {
  return str.replace(/\s+/g, "");
}
function inArray(arr, item) {
  if (!arr) return false;
  if (arr[0] === void 0) return false;
  return arr.filter((x) => x === item).length > 0;
}
function addEvent(elem, event, handler) {
  if (Array.isArray(elem)) {
    elem.forEach((el) => el.addEventListener(event, handler, false));
  } else {
    elem.addEventListener(event, handler, false);
  }
}
function addEvents(el, events, handler) {
  events.forEach((evt) => el.addEventListener(evt, handler, false));
}
function appendTo(elem, to) {
  if (Array.isArray(elem)) {
    elem.forEach((el) => to.appendChild(el));
  } else {
    to.appendChild(elem);
  }
}
function createElem(tag, attributes, content, isHtml) {
  const el = document.createElement(tag);
  if (typeof content !== "undefined")
    el[isHtml || false ? "innerHTML" : "innerText"] = content;
  if (typeof attributes !== "undefined")
    setAttributes(el, attributes);
  return el;
}
const DEFAULTS = {
  id: null,
  init: false,
  dark: false,
  buttons: "DEFAULT",
  hideOnAction: false,
  optOutCb: false,
  optOutText: "Don't show again",
  okText: "Ok",
  yesText: "Yes",
  noText: "No",
  cancelText: "Cancel",
  selection: false,
  confirmSelect: false,
  multiple: false,
  minSelect: 1,
  maxSelect: null,
  allowSearch: false,
  selectedValue: null,
  valueField: "value",
  textField: "item",
  callbacks: null
};
const _duDialog = class _duDialog {
  /**
   * Creates a dialog
   * @param title Dialog title
   * @param content Dialog message, HTML content, or array of selection items
   * @param options Dialog configurations
   */
  constructor(title, content, options) {
    __publicField(this, "cache");
    __publicField(this, "config");
    __publicField(this, "content");
    __publicField(this, "dialog");
    __publicField(this, "docFrag");
    __publicField(this, "loadingCancellable", false);
    __publicField(this, "loadingState", false);
    __publicField(this, "optOut");
    __publicField(this, "title");
    __publicField(this, "type");
    let _ = this, titleType = typeof title, contType = typeof content;
    this.config = Object.assign({}, _duDialog._defaults, options);
    this.type = this.config.selection ? this.config.multiple || this.config.confirmSelect ? _duDialog.OK_CANCEL : _duDialog.NONE : this.config.buttons;
    if (titleType === "undefined" || titleType !== "string" && title !== null)
      throw new Error("Dialog title is missing or incorrect format.");
    if ((contType === "undefined" || contType !== "string") && !_.config.selection || !Array.isArray(content) && _.config.selection)
      throw new Error("Dialog message is missing or incorrect format.");
    this.title = title;
    this.content = content;
    this.cache = {};
    this.optOut = false;
    if (!this.config.init) this._buildUI();
  }
  /**
   * Builds the dialog UI
   */
  _buildUI() {
    const _ = this, cbs = _.config.callbacks;
    let wrapper, header, content, footer;
    const dialogPulse = () => {
      const dialog = this.dialog;
      dialog.classList.add("dlg--pulse");
      setTimeout(() => dialog.classList.remove("dlg--pulse"), 200);
    };
    const maxSelectCheck = () => {
      const checked = content.querySelectorAll(".dlg-select-checkbox:checked");
      const toggleNotChecked = (isDisabled) => {
        content.querySelectorAll(".dlg-select-checkbox:not(:checked)").forEach((cb) => {
          const parent = cb.parentNode;
          if (isDisabled) cb.setAttribute("disabled", "true");
          else cb.removeAttribute("disabled");
          parent == null ? void 0 : parent.classList[isDisabled ? "add" : "remove"]("item--disabled");
        });
      };
      if (checked.length === _.config.maxSelect) {
        toggleNotChecked(true);
        if (cbs && cbs.maxReached) cbs.maxReached.call(_, _.config.maxSelect);
      } else toggleNotChecked(false);
    };
    const evtHandler = (e) => {
      var _a;
      const target = e.target;
      if (e.type === "click") {
        if (target.matches(".du-dialog")) {
          if (_.type === _duDialog.NONE) _.hide();
          else dialogPulse();
        }
        if (target.matches(".dlg-select-item")) {
          (_a = target.querySelector(".dlg-select-lbl")) == null ? void 0 : _a.click();
        }
        if (target.matches(".dlg-action")) {
          if (target.matches(".ok-action")) {
            if (_.config.selection && _.config.multiple) {
              const checked = content.querySelectorAll(".dlg-select-checkbox:checked");
              let checkedVals = [], checkedItems = [];
              checked.forEach((cb) => {
                const item = _.cache[cb.id];
                const checked2 = cb;
                checkedItems.push(item);
                checkedVals.push(typeof item === "string" ? checked2.value : item[_.config.valueField]);
              });
              if (_.config.minSelect && checkedVals.length >= _.config.minSelect) {
                _.config.selectedValue = checkedVals;
                if (cbs && cbs.itemSelect) {
                  cbs.itemSelect.apply(_, [e, checkedItems]);
                  _.hide();
                }
              } else {
                dialogPulse();
                if (cbs && cbs.minRequired && _.config.minSelect) cbs.minRequired.call(_, _.config.minSelect);
              }
            } else if (_.config.selection && _.config.confirmSelect) {
              const selected = content.querySelector(".dlg-select-radio:checked");
              if (selected) {
                const item = _.cache[selected.id];
                _.config.selectedValue = typeof item === "string" ? selected.value : item[_.config.valueField];
                _.hide();
                if (cbs && cbs.itemSelect) {
                  cbs.itemSelect.apply(selected, [e, item]);
                }
              } else dialogPulse();
            } else {
              if (cbs && cbs.okClick) {
                cbs.okClick.apply(_, [e]);
                if (_.config.hideOnAction) _.hide();
              } else _.hide();
            }
          }
          if (target.matches(".yes-action")) {
            if (cbs && cbs.yesClick) {
              cbs.yesClick.apply(_, [e]);
              if (_.config.hideOnAction) _.hide();
            } else _.hide();
          }
          if (target.matches(".no-action")) {
            if (cbs && cbs.noClick) {
              cbs.noClick.apply(_, [e]);
              if (_.config.hideOnAction) _.hide();
            } else _.hide();
          }
          if (target.matches(".cancel-action")) {
            if (cbs && cbs.cancelClick) {
              cbs.cancelClick.apply(_, [e]);
              if (_.config.hideOnAction) _.hide();
            } else _.hide();
          }
        }
      }
      if (e.type === "change") {
        if (target.matches(".dlg-select-radio")) {
          const el = e.target;
          if (el.checked && !_.config.confirmSelect) {
            let item = _.cache[el.id];
            _.config.selectedValue = typeof item === "string" ? el.value : item[_.config.valueField];
            _.hide();
            if (cbs && cbs.itemSelect) cbs.itemSelect.apply(el, [e, item]);
          }
        } else if (target.matches(".dlg-select-checkbox")) {
          if (_.config.maxSelect) maxSelectCheck();
        } else if (target.matches(".opt-out-cb")) {
          const optOutCb = target;
          _.optOut = optOutCb.checked;
          if (cbs && cbs.optOutChanged) cbs.optOutChanged.call(_, optOutCb.checked);
        }
      }
      if (e.type === "scroll" && target.matches(".dlg-content")) {
        this._checkContentScroll();
      }
      if (e.type === "keyup" && target.matches(".dlg-search")) {
        const searchInput = e.target;
        const keyword = searchInput.value;
        const items = content.querySelectorAll(".dlg-select-item");
        items.forEach((dlgItem) => {
          if (dlgItem.classList.contains("select--group")) return;
          const input = dlgItem.querySelector(_.config.multiple ? ".dlg-select-checkbox" : ".dlg-select-radio"), item = _.cache[input.id], iType = typeof item, iText = iType === "string" ? item : item[_.config.textField];
          let matched = false;
          matched = cbs && cbs.onSearch ? cbs.onSearch.call(_, item, keyword) : iText.toLowerCase().indexOf(keyword.toLowerCase()) >= 0;
          dlgItem.classList[matched ? "remove" : "add"]("item--nomatch");
        });
      }
    };
    const addItemDOM = (item, id, value, label, isGroup = false) => {
      if (isGroup) {
        const groupEl = createElem("div", { className: "dlg-select-item select--group" }, item);
        appendTo(groupEl, content);
      } else {
        const itemEl = createElem("div", { className: "dlg-select-item" });
        const selectEl = createElem("input", {
          className: _.config.multiple ? "dlg-select-checkbox" : "dlg-select-radio",
          id,
          name: "dlg-selection",
          type: _.config.multiple ? "checkbox" : "radio",
          value,
          checked: _.config.multiple ? _.config.selectedValue && inArray(_.config.selectedValue, value) : _.config.selectedValue === value
        });
        const labelEl = createElem(
          "label",
          { className: "dlg-select-lbl", htmlFor: id },
          cbs && cbs.itemRender ? cbs.itemRender.call(_, item) : '<span class="select-item">' + label + "</span>",
          true
        );
        _.cache[id] = item;
        appendTo([selectEl, labelEl], itemEl);
        appendTo(itemEl, content);
      }
    };
    const addItem = (item) => {
      const type = typeof item;
      let id = "";
      if (type === "string") {
        id = (_.config.multiple ? "dlg-cb" : "dlg-radio") + removeSpace(item.toString());
        addItemDOM(item, id, item, item);
      } else {
        if (!!item.group && Array.isArray(item.items)) {
          const items = item.items;
          addItemDOM(item.group, null, null, null, true);
          items.forEach((i) => addItem(i));
        } else {
          const value = item[_.config.valueField];
          const text = item[_.config.textField];
          id = (_.config.multiple ? "dlg-cb" : "dlg-radio") + removeSpace(value.toString());
          addItemDOM(item, id, value, text);
        }
      }
    };
    _.docFrag = document.createDocumentFragment();
    _.dialog = createElem("div", { className: "du-dialog", id: _.config.id });
    if (_.config.dark) _.dialog.setAttribute("dark", "true");
    if (_.config.selection) _.dialog.setAttribute("selection", "true");
    appendTo(_.dialog, _.docFrag);
    wrapper = createElem("div", { className: "dlg-wrapper", tabIndex: 0 });
    const loader = createElem("div", { className: "dlg-loader" });
    const loaderWrapper = createElem("div", { className: "loader-wrapper" });
    appendTo(createElem("div", { className: "loading-buffer" }), loaderWrapper);
    appendTo(createElem("div", { className: "loading-indicator" }), loaderWrapper);
    appendTo(loaderWrapper, loader);
    appendTo(loader, wrapper);
    appendTo(wrapper, _.dialog);
    header = createElem("div", { className: "dlg-header" }, _.title);
    if (_.title) appendTo(header, wrapper);
    else _.dialog.classList.add("dlg--no-title");
    content = createElem("div", { className: "dlg-content" });
    if (_.config.selection) {
      if (_.config.allowSearch) {
        const searchInput = createElem("input", { className: "dlg-search", placeholder: "Search..." });
        appendTo(searchInput, header);
      }
      _.content.forEach((i) => addItem(i));
      if (_.config.multiple && _.config.maxSelect) maxSelectCheck();
    } else content.innerHTML = _.content;
    appendTo(content, wrapper);
    if (_.type !== _duDialog.NONE) {
      footer = createElem("div", { className: "dlg-actions" });
      if (_.config.optOutCb) {
        const cbID = "opt-out-cb";
        const group = createElem("div", { className: "opt-out-grp" });
        appendTo(createElem("input", { id: cbID, className: cbID, type: "checkbox", checked: _.optOut }), group);
        appendTo(createElem("label", { htmlFor: cbID }, _.config.optOutText), group);
        appendTo(group, footer);
      }
      appendTo(footer, wrapper);
      switch (_.type) {
        case _duDialog.OK_CANCEL:
          appendTo([
            createElem("button", { className: "dlg-action cancel-action", tabIndex: 2 }, _.config.cancelText),
            createElem("button", { className: "dlg-action ok-action", tabIndex: 1 }, _.config.okText)
          ], footer);
          break;
        case _duDialog.YES_NO_CANCEL:
          appendTo([
            createElem("button", { className: "dlg-action cancel-action", tabIndex: 3 }, _.config.cancelText),
            createElem("button", { className: "dlg-action no-action", tabIndex: 2 }, _.config.noText),
            createElem("button", { className: "dlg-action yes-action", tabIndex: 1 }, _.config.yesText)
          ], footer);
          break;
        case _duDialog.DEFAULT:
          appendTo(createElem("button", { className: "dlg-action ok-action", tabIndex: 1 }, _.config.okText), footer);
          break;
      }
    }
    addEvent(content, "scroll", evtHandler);
    addEvents(_.dialog, ["click", "change", "keyup"], evtHandler);
    if (!_.config.init) _.show();
  }
  /**
   * Checks the content scroll - adds border (top/bottom) depending on where the current scroll position is
   */
  _checkContentScroll() {
    var _a;
    if (!this.dialog) return;
    const target = (_a = this.dialog) == null ? void 0 : _a.querySelector(".dlg-content");
    const { clientHeight, scrollHeight, scrollTop } = target;
    const scrollLength = scrollHeight - clientHeight - scrollTop;
    const hasOverflow = !(Math.abs(scrollLength) < 1);
    target.classList[target.scrollTop > 5 ? "add" : "remove"]("content--scrolled");
    target.classList[hasOverflow ? "add" : "remove"]("content--overflow");
  }
  /**
   * Sets the loading state of the dialog
   * @param {Boolean} loading Determines the loading state of the dialog
   * @param {Boolean} cancellable Determines if the loading state is cancellable (Cancel action button)
   */
  setLoading(loading, cancellable = false) {
    const dialog = this.dialog;
    this.loadingState = loading;
    this.loadingCancellable = cancellable;
    dialog.classList[loading ? "add" : "remove"]("dlg--loading");
    dialog.querySelectorAll(".dlg-action").forEach((action) => {
      if (cancellable && action.classList.contains("cancel-action")) return;
      else setAttributes(action, { disabled: loading });
    });
  }
  /**
   * Sets the dialog config
   * @param config Config name
   * @param value Config value
   */
  setOption(config, value) {
    Object.assign(this.config, { [config]: value });
  }
  /**
   * Sets the dialog configurations
   * @param options Configurations
   */
  setOptions(options) {
    Object.assign(this.config, options);
  }
  /**
   * Shows the dialog
   */
  show() {
    let _ = this;
    if (_.config.init) this._buildUI();
    const docFrag = this.docFrag;
    const dialog = this.dialog;
    appendTo(docFrag, document.body);
    setTimeout(() => {
      dialog.classList.add("dlg--open");
      this._checkContentScroll();
      if (_.config.selection && !_.config.multiple) {
        const content = dialog.querySelector(".dlg-content");
        const _selected = content.querySelector(".dlg-select-radio:checked");
        if (_selected) {
          const isIE = !!window.navigator.userAgent.match(/MSIE|Trident/);
          const childNodes = Array.from(content.childNodes);
          const nodes = childNodes.slice(0, childNodes.indexOf(_selected.parentNode));
          const _offset = nodes.reduce((sum, node) => node.offsetHeight + sum, 0);
          setTimeout(() => content.scrollTop = _offset, isIE ? 210 : 10);
        }
      }
      const buttons = document.getElementsByClassName("dlg-action");
      if (buttons && buttons.length) buttons[buttons.length - 1].focus();
      else dialog.getElementsByClassName("dlg-wrapper")[0].focus();
    }, 15);
  }
  /**
   * Hides the dialog
   */
  hide() {
    var _a;
    this.setLoading(false);
    (_a = this.dialog) == null ? void 0 : _a.classList.add("dlg--closing");
    setTimeout(() => {
      this.dialog && document.body.removeChild(this.dialog);
    }, 200);
  }
  /**
   * Sets the dialog defaults
   * @param options Dialog configurations
   */
  static defaults(options) {
    _duDialog._defaults = Object.assign({}, _duDialog._defaults, options);
  }
};
__publicField(_duDialog, "_defaults", DEFAULTS);
__publicField(_duDialog, "DEFAULT", "DEFAULT");
__publicField(_duDialog, "OK_CANCEL", "OK_CANCEL");
__publicField(_duDialog, "YES_NO_CANCEL", "YES_NO_CANCEL");
__publicField(_duDialog, "NONE", "NONE");
let duDialog = _duDialog;
export {
  duDialog as default
};
