import vars from './vars'

/**
* Vanilla JavaScript version of jQuery.extend()
* @see https://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
*/
export function extend() {
    // Variables
    var extended = {}
    var deep = false
    var i = 0
    var length = arguments.length

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0]
        i++
    }

    // Merge the object into the extended object
    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // If deep merge and property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extend(true, extended[prop], obj[prop])
                } else {
                    extended[prop] = obj[prop]
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
        var obj = arguments[i]
        merge(obj)
    }

    return extended
}

/**
 * Sets element attributes
 * @param {HTMLElement} el Element to set attributes
 * @param {Object} attrs Attributes object
 */
export function setAttributes(el, attrs) {
    /* src: http://jsfiddle.net/andr3ww/pvuzgfg6/13/ */
    var recursiveSet = function (at, set) {
        for (var prop in at) {
            var a = at[prop]
            if ((typeof a === 'object' && a !== null) && a.dataset === undefined && a[0] === undefined) { recursiveSet(a, set[prop]) }
            else {
                if (prop in set)
                    if (a !== null) set[prop] = a
                    else {
                        if (a !== null)
                            set.setAttribute(prop, a)
                        else
                            set.removeAttribute(prop)
                    }
            }
        }
    }
    recursiveSet(attrs, el)
}

/**
 * Removes blank spaces from string
 * @param {string} str String
 */
export function removeSpace(str) {
    return str.replace(/\s+/g, '')
}

/**
 * Determines if the item is in the specified array
 * @param {Array} arr Array to search
 * @param {string|Object|number} item Item to search
 */
export function inArray(arr, item) {
    if (!arr) return false
    if (arr[0] === undefined) return false

    return arr.filter(function (x) { return x === item }).length > 0
}

/**
 * Adds event listener to element
 * @param {HTMLElement} elem Element to add an event listener
 * @param {string} event Event name
 * @param {Function} handler Event handler
 */
export function addEvent(elem, event, handler) {
    if (Array.isArray(elem)) {
        elem.forEach(function (el) { el.addEventListener(event, handler, false) })
    } else {
        elem.addEventListener(event, handler, false)
    }
}

/**
 * Adds event listeners to element
 * @param {HTMLElement} el Element to add an event listener
 * @param {String[]} events Array of event names
 * @param {Function} handler Event handler
 */
export function addEvents(el, events, handler) {
    events.forEach(function (evt) { el.addEventListener(evt, handler, false) })
}

/**
 * Append element to parent
 * @param {HTMLElement} elem Element to append
 * @param {HTMLElement} to Parent element
 */
export function appendTo(elem, to) {
    if (Array.isArray(elem)) {
        elem.forEach(function (el) { to.appendChild(el) })
    } else {
        to.appendChild(elem)
    }
}

/**
 * `document.createElement` wrapper function
 * @param {string} tag Element tag name
 * @param {string} attributes Element attributes
 * @param {string} content Element content
 * @param {boolean} isHtml Determines if content is HTML
 */
export function createElem(tag, attributes, content, isHtml) {
    var el = document.createElement(tag)

    if (typeof content !== 'undefined')
        el[isHtml || false ? 'innerHTML' : 'innerText'] = content

    if (typeof attributes !== 'undefined')
        setAttributes(el, attributes)

    return el
}

/**
 * Builds the dialog UI
 */
export function buildUI() {
    let _ = this, cbs = _.config.callbacks, wrapper, header, content, footer,
        dialogPulse = () => {
            _.dialog.classList.add('dlg--pulse')
            setTimeout(() => { _.dialog.classList.remove('dlg--pulse') }, 200)
        },
        maxSelectCheck = () => {
            let checked = content.querySelectorAll('.dlg-select-checkbox:checked')

            if (checked.length === _.config.maxSelect) {
                content.querySelectorAll('.dlg-select-checkbox:not(:checked)').forEach(function (cb) {
                    cb.setAttribute('disabled', true)
                    cb.parentNode.classList.add('item--disabled')
                })

                if (cbs && cbs.maxReached) cbs.maxReached.call(_, _.config.maxSelect)
            } else {
                content.querySelectorAll('.dlg-select-checkbox:not(:checked)').forEach(function (cb) {
                    cb.removeAttribute('disabled')
                    cb.parentNode.classList.remove('item--disabled')
                })
            }
        },
        // global event handler
        evtHandler = (e) => {
            if (e.type === 'click') {
                // handle overlay click if dialog has no action buttons
                if (e.target.matches('.du-dialog')) {
                    if (_.type === vars.buttons.NONE) _.hide()
                    else dialogPulse()
                }

                // handle selection item click
                if (e.target.matches('.dlg-select-item')) {
                    e.target.querySelector('.dlg-select-lbl').click()
                }

                // handle action buttons click
                if (e.target.matches('.dlg-action')) {
                    // OK button
                    if (e.target.matches('.ok-action')) {
                        if (_.config.selection && _.config.multiple) {
                            let checked = content.querySelectorAll('.dlg-select-checkbox:checked'), checkedVals = [], checkedItems = []

                            for (let i = 0; i < checked.length; i++) {
                                let item = _.cache[checked[i].id]

                                checkedItems.push(item)
                                checkedVals.push(typeof item === 'string' ? checked[i].value : item[_.config.valueField])
                            }

                            if (checkedVals.length >= _.config.minSelect) {
                                _.config.selectedValue = checkedVals
                                if (cbs && cbs.itemSelect) {
                                    cbs.itemSelect.apply({ value: checkedVals }, [e, checkedItems])
                                    _.hide()
                                }
                            } else {
                                dialogPulse()

                                if (cbs && cbs.minRequired) cbs.minRequired.call(_, _.config.minSelect)
                            }
                        } else if (_.config.selection && _.config.confirmSelect) {
                            let selected = content.querySelector('.dlg-select-radio:checked')

                            if (selected) {
                                let item = _.cache[selected.id]

                                _.config.selectedValue = typeof item === 'string' ? selected.value : item[_.config.valueField]
                                _.hide()
        
                                if (cbs && cbs.itemSelect) cbs.itemSelect.apply(selected, [e, item])
                            } else dialogPulse()
                        } else {
                            if (cbs && cbs.okClick) {
                                cbs.okClick.apply(_, e)
                                if (_.config.hideOnAction) _.hide()
                            }
                            else _.hide()
                        }
                    }

                    // Yes button
                    if (e.target.matches('.yes-action')) {
                        if (cbs && cbs.yesClick) {
                            cbs.yesClick.apply(_, e)
                            if (_.config.hideOnAction) _.hide()
                        }
                        else _.hide()
                    }

                    // No button
                    if (e.target.matches('.no-action')) {
                        if (cbs && cbs.noClick) {
                            cbs.noClick.apply(_, e)
                            if (_.config.hideOnAction) _.hide()
                        }
                        else _.hide()
                    }

                    // CANCEL button
                    if (e.target.matches('.cancel-action')) {
                        if (cbs && cbs.cancelClick) {
                            cbs.cancelClick.apply(_, e)
                            if (_.config.hideOnAction) _.hide()
                        }
                        else _.hide()
                    }
                }
            }

            if (e.type === 'change') {
                // handle selection radio change
                if (e.target.matches('.dlg-select-radio')) {
                    let el = e.target
                    if (el.checked && !_.config.confirmSelect) {
                        let item = _.cache[el.id]

                        _.config.selectedValue = typeof item === 'string' ? el.value : item[_.config.valueField]
                        _.hide()

                        if (cbs && cbs.itemSelect) cbs.itemSelect.apply(el, [e, item])
                    }
                } else if (e.target.matches('.dlg-select-checkbox')) {
                    if (_.config.maxSelect) maxSelectCheck()
                }
            }

            if (e.type === 'scroll') {
                if (e.target.matches('.dlg-content'))
                    e.target.classList[e.target.scrollTop > 5 ? 'add' : 'remove']('content--scrolled')
            }

            if (e.type === 'keyup') {
                if (e.target.matches('.dlg-search')) {
                    let _keyword = e.target.value, _items = content.querySelectorAll('.dlg-select-item')

                    _items.forEach(dlgItem => {
                        if (dlgItem.classList.contains('select--group')) return

                        let input = dlgItem.querySelector((_.config.multiple ? '.dlg-select-checkbox' : '.dlg-select-radio')),
                            item = _.cache[input.id], iType = typeof item, iText = iType === 'string' ? item : item[_.config.textField],
                            _matched = false

                        _matched = (cbs && cbs.onSearch) ? cbs.onSearch.call(_, item, _keyword) :
                            iText.toLowerCase().indexOf(_keyword.toLowerCase()) >= 0

                        dlgItem.classList[_matched ? 'remove' : 'add']('item--nomatch')
                    })
                }
            }
        },
        addItemDOM = (item, id, value, label, isGroup = false) => {
            if (isGroup) {
                let groupEl = createElem('div', { className: 'dlg-select-item select--group' }, item)

                appendTo(groupEl, content)
            } else {
                let itemEl = createElem('div', { className: 'dlg-select-item' }),
                    selectEl = createElem('input', {
                            className: _.config.multiple ? 'dlg-select-checkbox' : 'dlg-select-radio',
                            id: id,
                            name: 'dlg-selection',
                            type: _.config.multiple ? 'checkbox' : 'radio',
                            value: value,
                            checked: _.config.multiple ? (_.config.selectedValue && inArray(_.config.selectedValue, value)) : _.config.selectedValue === value
                        }),
                    labelEl = createElem('label', {
                            className: 'dlg-select-lbl', htmlFor: id
                        }, (cbs && cbs.itemRender ? cbs.itemRender.call(_, item) : '<span class="select-item">' + label + '</span>'), true)

                _.cache[id] = item
                appendTo([selectEl, labelEl], itemEl)
                appendTo(itemEl, content)
            }
        },
        addItem = (item) => {
            let type = typeof item,
                id = ''

            if(type === 'string') {
                id = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + removeSpace(item.toString())
                addItemDOM(item, id, item, item)
            } else {
                if (item.group && Array.isArray(item.items)) {
                    addItemDOM(item.group, null, null, null, true)

                    item.items.forEach(i => addItem(i))
                } else {
                    let value = type === 'string' ? item : item[_.config.valueField],
                        text = type === 'string' ? item : item[_.config.textField]

                    id = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + removeSpace(value.toString())

                    addItemDOM(item, id, value, text)
                }
            }
        }

    _.docFrag = document.createDocumentFragment()
    _.dialog = createElem('div', { className: 'du-dialog', id: _.config.id })

    if (_.config.dark) _.dialog.setAttribute('dark', true)
    if (_.config.selection) _.dialog.setAttribute('selection', true)

    appendTo(_.dialog, _.docFrag)

    wrapper = createElem('div', { className: 'dlg-wrapper', tabIndex: 0 })

    appendTo(wrapper, _.dialog)

    if (_.title) {
        header = createElem('div', { className: 'dlg-header' }, _.title)

        appendTo(header, wrapper)
    } else {
        _.dialog.classList.add('dlg--no-title')
    }

    content = createElem('div', { className: 'dlg-content' })

    if (_.config.selection) {
        if (_.config.allowSearch) {
            appendTo(createElem('input', { className: 'dlg-search', placeholder: 'Search...' }), header)
        }

        _.content.forEach(i => addItem(i))

        if (_.config.multiple && _.config.maxSelect) maxSelectCheck()
    } else content.innerHTML = _.content

    appendTo(content, wrapper)

    if (_.type !== vars.buttons.NONE) {
        footer = createElem('div', { className: 'dlg-actions' })
        appendTo(footer, wrapper)
    }

    /* Setup action buttons */
    switch (_.type) {
        case vars.buttons.OK_CANCEL:
            appendTo([createElem('button', { className: 'dlg-action cancel-action', tabIndex: 2 }, _.config.cancelText),
            createElem('button', { className: 'dlg-action ok-action', tabIndex: 1 }, _.config.okText)
            ], footer)
            break;
        case vars.buttons.YES_NO_CANCEL:
            appendTo([createElem('button', { className: 'dlg-action cancel-action', tabIndex: 3 }, _.config.cancelText),
            createElem('button', { className: 'dlg-action no-action', tabIndex: 2 }, _.config.noText),
            createElem('button', { className: 'dlg-action yes-action', tabIndex: 1 }, _.config.yesText),
            ], footer)
            break;
        case vars.buttons.DEFAULT:
            appendTo(createElem('button', { className: 'dlg-action ok-action', tabIndex: 1 }, _.config.okText), footer)
            break;
    }

    /* Register event handler */
    addEvent(content, 'scroll', evtHandler)
    addEvents(_.dialog, ['click', 'change', 'keyup'], evtHandler)

    if (!_.config.init) _.show()
}

/**
 * Defines duDialog button types as exposed properties
 * @param {Object} obj duDialog
 */
export function defineButtons(obj) {
    let props = {}, buttons = vars.buttons

    for(let p in buttons) {
        props[p] = { value: buttons[p] }
    }

    Object.defineProperties(obj, props)
}