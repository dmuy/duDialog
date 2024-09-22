/**
 * Sets element attributes
 * @param {HTMLElement} el Element to set attributes
 * @param {Object} attrs Attributes object
 */
export function setAttributes(el: HTMLElement, attrs: object) {
    /* src: http://jsfiddle.net/andr3ww/pvuzgfg6/13/ */
    var recursiveSet = function (at: any, set: any) {
        for (var prop in at) {
            var a = at[prop]
            if ((typeof a === 'object' && a !== null) && a.dataset === undefined && a[0] === undefined) {
                recursiveSet(a, set[prop])
            }
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
export function removeSpace(str: string) {
    return str.replace(/\s+/g, '')
}

/**
 * Determines if the item is in the specified array
 * @param {Array} arr Array to search
 * @param {string|Object|number} item Item to search
 */
export function inArray(arr: Array<any>, item: string | object | number) {
    if (!arr) return false
    if (arr[0] === undefined) return false

    return arr.filter(function (x) { return x === item }).length > 0
}

/**
 * Adds event listener to element
 * @param {HTMLElement | Array<HTMLElement>} elem Element to add an event listener
 * @param {string} event Event name
 * @param {Function} handler Event handler
 */
export function addEvent(elem: HTMLElement | Array<HTMLElement>, event: string, handler: (e: Event) => void) {
    if (Array.isArray(elem)) {
        elem.forEach(el => {
            el.addEventListener(event, handler, false)
        })
    }
    else {
        elem.addEventListener(event, handler, false)
    }
}

/**
 * Adds event listeners to element
 * @param {HTMLElement} el Element to add an event listener
 * @param {String[]} events Array of event names
 * @param {Function} handler Event handler
 */
export function addEvents(el: HTMLElement, events: string[], handler: (e: Event) => void) {
    events.forEach(evt => {
        el.addEventListener(evt, handler, false)
    })
}

/**
 * Append element to parent
 * @param {HTMLElement | Array<HTMLElement>} elem Element to append
 * @param {HTMLElement} to Parent element
 */
export function appendTo(elem: DocumentFragment | HTMLElement | Array<HTMLElement>, to: HTMLElement | DocumentFragment) {
    if (Array.isArray(elem)) {
        elem.forEach((el) => to.appendChild(el))
    }
    else {
        to.appendChild(elem)
    }
}

/**
 * `document.createElement` wrapper function
 * @param {string} tag Element tag name
 * @param {any} attributes Element attributes
 * @param {string} content Element content
 * @param {boolean} isHtml Determines if content is HTML
 */
export function createElem(tag: string, attributes: any, content?: string, isHtml?: boolean) {
    var el = document.createElement(tag)

    if (typeof content !== 'undefined')
        el[isHtml || false ? 'innerHTML' : 'innerText'] = content

    if (typeof attributes !== 'undefined')
        setAttributes(el, attributes)

    return el
}
