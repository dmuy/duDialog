duDialog
=========

A simple material concept dialog plugin (no jQuery required, no markup needed).

**[DEMO](https://dmuy.github.io/duDialog/)**

## Installation
### NPM
Install via npm:
```
npm i @dmuy/dialog
```

Include in your app
```javascript
import '@dmuy/dialog/duDialog.css'
import duDialog from '@dmuy/dialog'
```

### CDN
Use the following if you don't want to host the `js` and `css` files:
```
https://cdn.jsdelivr.net/gh/dmuy/duDialog@{version}/duDialog.css
https://cdn.jsdelivr.net/gh/dmuy/duDialog@{version}/duDialog.js
```
Minified version:
```
https://cdn.jsdelivr.net/gh/dmuy/duDialog@{version}/duDialog.min.css
https://cdn.jsdelivr.net/gh/dmuy/duDialog@{version}/duDialog.min.js
```
***Note: Replace `{version}` with the version you want to use.***

[Learn more about the CDN](https://www.jsdelivr.com/features#gh)

### Self Hosting
Copy `duDialog.css` and `duDialog.js` and include in your app:
```html
<link rel="stylesheet" type="text/css" href="{path-to}/duDialog.css">
<script type="text/javascript" src="{path-to}/duDialog.js"></script>
```
***Note: Replace `{path-to}` with the absolute or relative path to where you copied the css and js files.***

## Options
Calling `duDialog()` will return the dialog object.
Dialog constructor:
```javascript
new duDialog(
  title,    // string || null (for no title dialogs)
  message,  // string; accepts html string also || string array or object (for selection dialog)
  [type],   // optional; dialog button types (explained below)
  [config]  // optional; additional dialog configurations (explained below)
)
```

Dialog action button types:
```javascript
duDialog.DEFAULT    // default action button (OK)
duDialog.OK_CANCEL  // OK and CANCEL buttons
duDialog.NO_ACTION  // no action button (used with single selection dialog)
```

Below is the default configuration.
```javascript
{
  id: null,             // id attribute of the dialog container (for specific dialog styling convenience)
  init: false,          // determines if initialize only (dialog will not be shown immediately after initialization)
  dark: false,          // determines if dark theme is on
  okText: 'Ok',         // display text for the 'OK' button
  cancelText: 'Cancel', // display text for the 'Cancel' button
  selection: false,     // determines if dialog is for item selection
  multiple: false,      // determines if multiple seletion (for selection dialog)
  allowSearch: false,   // determines if search input is visible/enabled (for selection dialog)
  selectedValue: null,  // default selected item value (for selection dialog)
  valueField: 'value',  // variable name for the select item value; use this for custom object structure (for selection dialog)
  textField: 'item',    // variable name for the select item display text; use this for custom object structure (for selection dialog)
  callbacks: null       // callback functions: okClick, cancelClick, itemSelect (for selection dialog), onSearch (for selection dialog), itemRender (for selection dialog)
}
```

Callback functions
```javascript
/* 
 * Triggers on OK button click; 'this' inside the callback refers to the dialog object
 * Paramters:
 *    e - event object
 */
okClick(e);

/* 
 * Triggers on CANCEL button click; 'this' inside the callback refers to the dialog object
 * Paramters:
 *    e - event object
 */
cancelClick(e);

/* 
 * Triggers on item selection change (selection dialog); 'this' inside the callback refers to the radio button.
 * For multiple selection dialog, this will be triggered on OK button click (okClick will not be executed); 'this' does not refer to the checkbox
 * Paramters:
 *    e - event object; 
 *    i - selected item (string or object) bound to the radio button; array of selected items (string or object) for multiple selection
 */
itemSelect(e, i);

/* 
 * Custom search function, triggers on search input keyup (selection dialog); 'this' inside the callback refers to the dialog object.
 * Paramters:
 *    i - select item object or string;
 *    k - search query string
 * Returns: boolean (for matching item/s)
 */
onSearch(i, k);

/* 
 * Custom item render function; 'this' inside the callback refers to the dialog object.
 * Note: If used, you need to add your own styling
 * Paramters:
 *    i - select item object or string
 * Returns: string/html markup (to be used for rendering of the item label)
 */
itemRender(i);
```

## Usage
To create a dialog, just call `duDialog()`:
```javascript
// initializes the dialog with default options (and default action button - OK button)
new duDialog('Title', 'This is a dialog message.');
```
![alt text](https://i.imgur.com/BRqZqUD.png "Information dialog")

```javascript
// initializes the dialog with no title/header, and OK (display text is 'Proceed') and CANCEL buttons;
// with a callback function on OK button click
new duDialog(null, 'This action cannot be undone, proceed?', duDialog.OK_CANCEL, { okText: 'Proceed',
  callbacks: {
    okClick: function(){
      // do something
      this.hide();  // hides the dialog
    }
  }
});
```
![alt text](https://i.imgur.com/b0jmCzy.png "Confirmation dialog")
![alt text](https://i.imgur.com/WdNqIt5.png "Confirmation dialog (dark)")

You can combine different configurations to get what you need for a dialog.
```javascript
// You can do this if you want to initialize a dialog for later use;
// 'type' parameter is optional so i can specify the configuration after the message parameter
// 'init: true' means that this is only initialization (dialog will not be shown unless you call '[dialog object].show()')
var dlg = new duDialog('Title', 'This is a dialog message.', { init: true });
```

### Selection Dialog
Default item object format. When used you don't have to specify the `valueField` and `textField` configurations.
```javascript
{
  item: 'Item',   // item display text
  value: 'Value'  // item value
}
```

### Single select
On the `message` parameter, specify an array of string or object and set `selection` configuration to `true`.
```javascript
new duDialog('Select fruit', ['Apple', 'Banana', 'Mango', 'Orange', 'Strawberry'], {
  selection: true, 
  callbacks: {
    // e - event
    // i - selected item (string or object)
    itemSelect: function(e, i){
      // this.value - value of the selected item (i.e 'Apple', 'Banana', etct)
    }
  }
});

// custom item object; default object is { item: 'Item', value: 'value' }
new duDialog('Select fruit', 
  [{ name: 'Apple', id: 1 }, { name: 'Banana', id: 2 }, { name: 'Mango', id: 3 }, { name: 'Orange', id: 4 }, { name: 'Strawberry', id: 5 }], 
  {
    selection: true,
    textField: 'name',  // since 'item' is not in the object, specify 'name' or any varialbe in the object you want as display text
    valueField: 'id',   // since 'value' is not in the object, specify 'id' or any variable in the object you want as the value
    callbacks: {
      itemSelect: function(e, i){
        // this.value - value of the selected item; in this case fruit 'id'
      }
    }
  });
```
![alt text](https://i.imgur.com/fEgkxNW.png "Single select dialog")

### Multiple select
To enable multiple selection, set `multiple` configuration to `true`.
```javascript
new duDialog('Select fruits', 
  [{ name: 'Apple', id: 1 }, { name: 'Banana', id: 2 }, { name: 'Mango', id: 3 }, { name: 'Orange', id: 4 }, { name: 'Strawberry', id: 5 }], 
  {
    selection: true, multiple: true,
    textField: 'name',  // since 'item' is not in the object, specify 'name' or any varialbe in the object you want as display text
    valueField: 'id',   // since 'value' is not in the object, specify 'id' or any variable in the object you want as the value
    callbacks: {
      // i - array of selected items (string or object)
      itemSelect: function(e, i){
        // this.value - value array of the selected items; in this case array of fruit 'id'
      }
    }
  });
```
![alt text](https://i.imgur.com/LR1Zffx.png "Multiple select dialog")
![alt text](https://i.imgur.com/gutG6GD.png "Multiple select dialog (dark)")

**Note: Action buttons are enforced for selection dialog, you don't need to specify the dialog action buttons ('type' duDialog paramter) if `selection: true`.**

### Customize rendering function
```javascript
// assuming item source is like this: { id: 1, desc: 'Mango', caption: 'This is a juicy mango' }
callbacks: {
  itemRender: function(i){
    return '<span class="fruit-name">' + i.desc + '</span><span class="fruit-caption">' + i.caption + '</span>';
  }
}
```
*Note: Should add custom css for `.fruit-name` and `.fruit-caption` to adjust the item display.*

### Customize search function
```javascript
// assuming item source is like this: { id: 1, desc: 'Mango', caption: 'This is a juicy mango' }
callbacks: {
  onSearch: function(i, k){
    var query = k.toLowerCase();
    // search items thru 'desc' and 'caption'
    return i.desc.toLowerCase().indexOf(query) >= 0 || i.caption.toLowerCase().indexOf(query) >= 0;
  }
}
```

### Remember
Comment or remove the line shown below in the css file if you already have a link to the Roboto font.
```css
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
```

Older browsers may need the [classList polyfill](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) which extends classList support back to IE8 (natively, it’s IE10+).