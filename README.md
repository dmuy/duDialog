duDialog
=========

A simple material concept dialog plugin (no jQuery required, no markup needed).

## Options
Calling `duDialog()` will return the dialog object.
Dialog constructor:
```javascript
new duDialog(
  title,    // string or null (for no title dialogs)
  message,  // string or array of string/object (for selection dialog)
  [type],   // optional; dialog button types (explained below)
  [config]  // optional; additional dialog configurations (explained below)
)
```

Dialog action button types:
```javascript
duDlgTypes.DEFAULT    // default action button (OK)
duDlgTypes.OK_CANCEL  // OK and CANCEL buttons
duDlgTypes.NO_ACTION  // no action button (can be used with selection dialogs)
```

Below is the default configuration.
```javascript
{
  init: false,          // determines if initialize only (dialog will not be shown immediately after initialization)
  okText: 'Ok',         // display text for the 'OK' button
  cancelText: 'Cancel', // display text for the 'Cancel' button
  selection: false,     // determines if dialog is for item selection
  selectedValue: null,  // default selected item value (for selection dialog)
  valueField: 'value',  // variable name for the select item value; use this for custom object structure (for selection dialog)
  textField: 'item',    // variable name for the select item display text; use this for custom object structure (for selection dialog)
  callbacks: null       // callback functions: okClick, cancelClick, itemSelect (for selection dialog)
}
```

Callback functions
```javascript
/* 
 * Triggers on OK button click; 'this' inside the callback refers to the dialog object
 * Paramters:
 *		e - event object
 */
okClick(e);

/* 
 * Triggers on CANCEL button click; 'this' inside the callback refers to the dialog object
 * Paramters:
 *		e - event object
 */
cancelClick(e);

/* 
 * Triggers on item selection change (selection dialog); 'this' inside the callback refers to the radio button
 * Paramters:
 *		e - event object
 *		i - select item (string or object) bound to the radio button
 */
itemSelect(e, i);
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
new duDialog(null, 'This action cannot be undone, proceed?', duDlgTypes.OK_CANCEL, { okText: 'Proceed',
  callbacks: {
    okClick: function(){
      this.hide();	// hides the dialog
      // do something
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
Default item object format:
```javascript
{
  item: 'Item',   // item display text
  value: 'Value'  // item value
}
```

On the `message` parameter, specify an array of string or object and set `selection` configuration to `true`.
```javascript
new duDialog('Select fruit', ['Apple', 'Banana', 'Mango', 'Orange', 'Strawberry'], duDlgTypes.NO_ACTION, {
  selection: true, 
  callbacks: {
  	// e - event
  	// i - select item
    itemSelect: function(e, i){
      // this.value - value of the selected item (i.e 'Apple', 'Banana', etct)
    }
  }
});

// custom item object; default object is { item: 'Item', value: 'value' }
new duDialog('Select fruit', 
  [{ name: 'Apple', id: 1 }, { name: 'Banana', id: 2 }, { name: 'Mango', id: 3 }, { name: 'Orange', id: 4 }, { name: 'Strawberry', id: 5 }], 
  duDlgTypes.NO_ACTION, 
  {
    selection: true,
    textField: 'name',  // since 'item' is not in the object, specify 'name' or any varialbe in the object you want as display text
    valueField: 'id',   // since 'value' is not in the object, specify 'id' or any variable in the object you want as the value
    callbacks: {
      itemSelect: function(e, i){
        // this.value - value of the selected item; in this case the 'id' of the fruits
      }
    }
  });
```
![alt text](https://lh3.googleusercontent.com/vz-mUJ_X2FKNZBb-rL9VBGZIg1QuIQgMWqSY6WGxTLpTkUVErhrOdVL-DBwKaxbGWNnI_tiz308OuKn6kO9LFERTo_CkusfcrUQLaYW2CrQWepnwsOLiZ02__DWtUXqfkkOHO9-yUNMwzTLzT2GY12rgu2YL41vVGa4yotEFyA_Z4V9nOXIwA2-RewoOOhtGk4y-27xiiqgkZY0k0S0nUQDeD0CYAtjqJc7yFLgK5e4RxjA4qxOVI-LsoszeWu-S4IR8obIpRSWxCNjpw1zcnT_zwyCXkLEfsl7M-mBwB19zMHj0GrLsFCZM9MZwH4aTVIetEoZQ7y4niLe901qpqETXyIUtU7i4-pxv3b9ednaB2yIVVUq1iSC8yaVdS3G369dxXx2yQUw51147hROXa9wbzeBiq-dErGhRwNF2nOGX_2CkWuMhnU3LL1BtMRqX6BcOL8158b6ENjr9dkhcnIbBOXMCEII21wyYmtitwvxwCIYAX2pWWhLXihp0uX0PWKoXvxu2fvRkGAk35XSfctNUdcVeWabRsT7Pb13VauazHsjSZgiApHMM9o7iI1evWcmXanTplIvxPlj8ZMsykvLmyoHfoI-NGgG5wu-mgs3mV_rORz5i5CfyIeAIUfzQG3qwlJn01zUN4tZT5TP258xI=w326-h374-no "Select dialog")


### Remember
Comment or remove the line shown below in the css file if you already have a link to the Roboto font.
```css
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
```

Older browsers may need the [classList polyfill](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) which extends classList support back to IE8 (natively, it’s IE10+).