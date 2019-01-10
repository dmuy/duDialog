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
  init: false,          // determines if initialize only (dialog will not be shown immediately after initialization)
  okText: 'Ok',         // display text for the 'OK' button
  cancelText: 'Cancel', // display text for the 'Cancel' button
  selection: false,     // determines if dialog is for item selection
  multiple: false,      // determines if multiple seletion (for selection dialog)
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

## How to use
Make sure you include the library first.
Include `duDialog.css` and `duDialog.js` in your html file:
```html
<link rel="stylesheet" type="text/css" href="duDialog.css">
<script type="text/javascript" src="duDialog.js"></script>
```

To create a dialog, just call `duDialog()`:
```javascript
// initializes the dialog with default options (and default action button - OK button)
new duDialog('Title', 'This is a dialog message.');
```
![alt text](https://lh3.googleusercontent.com/pzN64pN35nP2ESQUy4QI5kUWrEIq4sM5wryLjb63iWa_LEuTqRiosOlNEzTUJPgCzjDtWIuzRzWFr1MeMARLOUwfDSV20JDh9YwRLzn97-BzvvHBvvhTX7X8o2VOdqVCTB0-S-Jm2tlu8HZu1xuh-C9o94AzSkSwqGEQerwrBCr0640LEOMzSuLOawhhVFDwuG5xiWXOSitYIHl8eRiqP4ypP5wMwzfXUIuYzWNxMC2ksmyuAN0_tSPLJU8iuEUVFKcEqB9MavUx_yXJxXhlD4l1CNef2tmdEAvm8Dw_XgtxcHB16zCLWIspNmG1a5Qp_0DVnYr22g_g-Dbm8VTtmw3dpX66VYAckKpYaVXEP44WYyWIPNcv0nZtKVjJ7Mvznuswzp5YoCUXGZewPHJKK1-fU2BistMjMQydBQbbLUTPLsk6OfveAJfN_7GpcTjfCy1yoYL02lc30SOeoqdk3XRn_gnfH9Q7s8ybFf8ARDzky4CxqEy9OMjRZ4A5qyHkYeEZFobryqWrUYpQTHe9V844WoAeNWoNKWF7etALtr9RalEj5DOaQlAjpuBLOEk3vdukFONE9ZvaBFnD-bNKDFY1nw55B0vzZr0XkmhOBcqVceBKIhOGbqywdHjwTR6amp2UMaTJ-uqluEydcJXXrgps=w322-h209-no "Information dialog")

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
![alt text](https://lh3.googleusercontent.com/EFHvfdpnrXFCq-xp0zmutv-0DMJkBzbenqRez_YcabsGND-WtWatNOr0PXj4DB7dq3wxwYBXI4qeT6XjRhB1PAlwZrwaA-hVf2nMATCXyC71FWOpj72AlNVrjWOSFhZdRfq9HLUyOrrS1AC6OB9IEeJpjh-zRuLuCOIi_QnIod3PcbzzZb8Qq1TEWsjJxmX4p0KfwhA1RqWLWLdLexIsUrQzpsDm65Riqoisz5DQcShA8qbcgwpiAMgs3RBFz8aHMpbt4K768FdBImA6BQcCsfGfnHp8olCLXX2qPvpkSF6c3IZr_5ZY-iB2nseB0R6PCJrZpxZZAv1wjU6UXMViBvYOszf_QUg0Ro9kCzkdMDzrKpBJRByewST9R5g1zSlgnTPrzKDrm_13zZGo02Zzq26KMmWhJOvRkwwAxXMxv46o_OGSgSs872TBbhv3pldK-XYqrETd5XJN89YIlPxaSxbtgGt0DDLtR6k737sjXeZdmZ31WIjx7Ip0sQdebOPZXw6kAFlG-OqdZ8w6VEjABgwR8TDiedNn94WNBy_lWqc0VK_wy3WK67cb0rEygHM0bt0IqMH2Xr_H1WbDhHIfy1KtxLGeNAKyHFsgnrlRAxR9kfslo_kyjt516WVdEFtbf9y1jqx-uegC69WCYDkdA-Gf=w399-h165-no "Confirmation dialog")

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
![alt text](https://lh3.googleusercontent.com/GYCCbgAYrleyFewA24Nvoo8HHwVMriEi0GcMMKSaIIsP2wmy5foH4CncJb4LpU7dIfuchWvHDnRvcaicNPcnmQjGNADUiabi-IPqIJC9VJTE3HSClvE-4T77s7nnVWXQMx6zirgODClgLfGIinYfkeyMlCUjmE70G2M2VUS5c1wYdNSbtRmJuKe7UoA0gdCA95wKxJG1jTLOPJV83O4Iz1gFvD3l4e6LIekWJAKdGAKcqKwIJ9CP8tM9t4QQuFYMXRzQKmmzPOt6LBCp-pkKxw3dOVixQgZFv0iyKZhSHZnhNX6gI0xOYBawETY91mwqHihDbrdOlzXhEch-JAO-SEjQ-VQPQyh8aPhatVTsI-bO4CSD05qMnwl9Ppzm1gatcwQH7fLev-BWcesxWEDZVd9db1ZQtB9GgPHRXi9rGjxJnaq40923CN7P0zzN5mOvqsNXNzItTeFmnfXIqgqkgIyPwLZtZBz-8QNYZoBJzVgJXRMGn3fcN40FkIDanUhXQ_rQvXDkVLVJJoC9nYPCSqaU_MDi2ivsD7lY0qrya-1as0IBuAFxQiyz_VoKZMS3N7WycziluJa4TxdkgCa4iE2uokSjdRpY-BCNxUC9Bl8OXtoh-jHuTKi20ssROq2lnyzJVPerTAu2b1Fpirlovp38=w326-h371-no "Single select dialog")

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
![alt text](https://lh3.googleusercontent.com/0YYBVsrz0lIhfsbCemVtVPI6JZx1Mk-8JOhC6esVp9bLx2YE0ZrsNj4sXsV-_3QtQvJyehEWGh0Iwm4INuSisbd_QDpfYW0XUfHAeAb_p7B6n2va3Smkcd-xfPEe_3On-LX0hhpntIXae5XWPUPs5m4VqUm2mFwVX9dN67nhP1kpma22szWHjYBkiHgp8Bwa816eBMBGNo-QtTE8TuGXzm3HFVdc9Esqm-OKZfZ1eoWJkIib0RhmNkc7uirRb8qBdDl_wxXgr5M_CJMXkWkva_MmROuKcquEZ2vG8lYaGThqd6RsNNxCloC0jhSXYVKVtFCMPgi49vMg3fINi0HGuwhuA-lXMVC9wQLTgwuMrTNRhbT9kltM2ldKDjmNS-EiyJQ2fW8Lw5RcFnzzzXhut9nIbj1W6YxnYvWaZTnF4s-sHxhRN_z7RxrhKxOqt9gTIrbIs8T9Ei0kCdHVefWkpJPP7goo6wCD9TEehdXwsbWRuUCDN7szdj47vsnEZdDBE7LW1PjYev5zB6J_g34dsHCK2dmfVk1KnBz530aQGnNh8_zvk3DOvvOYI9YRZ3AE-IbTQmX0yrXpRYtKLYCjBgJi4aB2IIc1HwcyQwPabcleg4nITJXLQAw_RyoA4HdnGvZIWe4w4b2o4oA-F1bGJqEh=w338-h415-no "Multiple select dialog")

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

### CDN
Use the following if you don't want to host the `js` and `css` files:
```
https://cdn.jsdelivr.net/gh/dmuy/duDialog/duDialog.css
https://cdn.jsdelivr.net/gh/dmuy/duDialog/duDialog.js
```
Minified version:
```
https://cdn.jsdelivr.net/gh/dmuy/duDialog/duDialog.min.css
https://cdn.jsdelivr.net/gh/dmuy/duDialog/duDialog.min.js
```

[Learn more about the CDN](https://www.jsdelivr.com/features#gh)

### Remember
Comment or remove the line shown below in the css file if you already have a link to the Roboto font.
```css
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
```

Older browsers may need the [classList polyfill](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) which extends classList support back to IE8 (natively, it’s IE10+).