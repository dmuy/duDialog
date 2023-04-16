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
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
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
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$g =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var shared$5 = {exports: {}};

  var global$f = global$g;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$2(global$f, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$f[key] = value;
    } return value;
  };

  var global$e = global$g;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$e[SHARED] || defineGlobalProperty$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$5.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.1',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedExports = shared$5.exports;

  var fails$k = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$j = fails$k;

  var functionBindNative = !fails$j(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var call$l = FunctionPrototype$2.call;
  var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$l, call$l);

  var functionUncurryThis = NATIVE_BIND$3 ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$l.apply(fn, arguments);
    };
  };

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$5 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$4 = isNullOrUndefined$5;

  var $TypeError$b = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$5 = function (it) {
    if (isNullOrUndefined$4(it)) throw $TypeError$b("Can't call method on " + it);
    return it;
  };

  var requireObjectCoercible$4 = requireObjectCoercible$5;

  var $Object$4 = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$5 = function (argument) {
    return $Object$4(requireObjectCoercible$4(argument));
  };

  var uncurryThis$i = functionUncurryThis;
  var toObject$4 = toObject$5;

  var hasOwnProperty = uncurryThis$i({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$4(it), key);
  };

  var uncurryThis$h = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$8 = uncurryThis$h(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
  };

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$d = global$g;
  var userAgent = engineUserAgent;

  var process = global$d.process;
  var Deno = global$d.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION$1 = engineV8Version;
  var fails$i = fails$k;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$i(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$c = global$g;
  var shared$4 = sharedExports;
  var hasOwn$a = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var Symbol$1 = global$c.Symbol;
  var WellKnownSymbolsStore = shared$4('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$h = function (name) {
    if (!hasOwn$a(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$a(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var wellKnownSymbol$g = wellKnownSymbol$h;

  var TO_STRING_TAG$5 = wellKnownSymbol$g('toStringTag');
  var test = {};

  test[TO_STRING_TAG$5] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;

  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$k = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var objectDefineProperty = {};

  var fails$h = fails$k;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$h(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var isCallable$j = isCallable$k;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$9 = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$j(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$j(it);
  };

  var global$b = global$g;
  var isObject$8 = isObject$9;

  var document$1 = global$b.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$8(document$1) && isObject$8(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$7 = descriptors;
  var fails$g = fails$k;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$7 && !fails$g(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$6 = descriptors;
  var fails$f = fails$k;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$f(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$7 = isObject$9;

  var $String$4 = String;
  var $TypeError$a = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$j = function (argument) {
    if (isObject$7(argument)) return argument;
    throw $TypeError$a($String$4(argument) + ' is not an object');
  };

  var NATIVE_BIND$2 = functionBindNative;

  var call$k = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$k.bind(call$k) : function () {
    return call$k.apply(call$k, arguments);
  };

  var global$a = global$g;
  var isCallable$i = isCallable$k;

  var aFunction = function (argument) {
    return isCallable$i(argument) ? argument : undefined;
  };

  var getBuiltIn$7 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
  };

  var uncurryThis$g = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

  var getBuiltIn$6 = getBuiltIn$7;
  var isCallable$h = isCallable$k;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var $Object$3 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$6('Symbol');
    return isCallable$h($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$3(it));
  };

  var $String$3 = String;

  var tryToString$3 = function (argument) {
    try {
      return $String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$g = isCallable$k;
  var tryToString$2 = tryToString$3;

  var $TypeError$9 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$9 = function (argument) {
    if (isCallable$g(argument)) return argument;
    throw $TypeError$9(tryToString$2(argument) + ' is not a function');
  };

  var aCallable$8 = aCallable$9;
  var isNullOrUndefined$3 = isNullOrUndefined$5;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$8 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined$3(func) ? undefined : aCallable$8(func);
  };

  var call$j = functionCall;
  var isCallable$f = isCallable$k;
  var isObject$6 = isObject$9;

  var $TypeError$8 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$f(fn = input.toString) && !isObject$6(val = call$j(fn, input))) return val;
    if (isCallable$f(fn = input.valueOf) && !isObject$6(val = call$j(fn, input))) return val;
    if (pref !== 'string' && isCallable$f(fn = input.toString) && !isObject$6(val = call$j(fn, input))) return val;
    throw $TypeError$8("Can't convert object to primitive value");
  };

  var call$i = functionCall;
  var isObject$5 = isObject$9;
  var isSymbol$1 = isSymbol$2;
  var getMethod$7 = getMethod$8;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$f = wellKnownSymbol$h;

  var $TypeError$7 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$f('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$5(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$7(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$i(exoticToPrim, input, pref);
      if (!isObject$5(result) || isSymbol$1(result)) return result;
      throw $TypeError$7("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$3 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var DESCRIPTORS$5 = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$i = anObject$j;
  var toPropertyKey$2 = toPropertyKey$3;

  var $TypeError$6 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$i(O);
    P = toPropertyKey$2(P);
    anObject$i(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$i(O);
    P = toPropertyKey$2(P);
    anObject$i(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$6('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var makeBuiltIn$2 = {exports: {}};

  var DESCRIPTORS$4 = descriptors;
  var hasOwn$9 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$4 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$9(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$4 || (DESCRIPTORS$4 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$f = functionUncurryThis;
  var isCallable$e = isCallable$k;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$f(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$e(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$2 = store$1.inspectSource;

  var global$9 = global$g;
  var isCallable$d = isCallable$k;

  var WeakMap$1 = global$9.WeakMap;

  var weakMapBasicDetection = isCallable$d(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var createPropertyDescriptor$4 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$3 = descriptors;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$4;

  var createNonEnumerableProperty$8 = DESCRIPTORS$3 ? function (object, key, value) {
    return definePropertyModule$4.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var shared$3 = sharedExports;
  var uid = uid$2;

  var keys = shared$3('keys');

  var sharedKey$3 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$8 = global$g;
  var isObject$4 = isObject$9;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
  var hasOwn$8 = hasOwnProperty_1;
  var shared$2 = sharedStore;
  var sharedKey$2 = sharedKey$3;
  var hiddenKeys$3 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$8.TypeError;
  var WeakMap = global$8.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$2.state) {
    var store = shared$2.state || (shared$2.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey$2('state');
    hiddenKeys$3[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$8(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$7(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$8(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$8(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$e = functionUncurryThis;
  var fails$e = fails$k;
  var isCallable$c = isCallable$k;
  var hasOwn$7 = hasOwnProperty_1;
  var DESCRIPTORS$2 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var inspectSource$1 = inspectSource$2;
  var InternalStateModule$3 = internalState;

  var enforceInternalState = InternalStateModule$3.enforce;
  var getInternalState$2 = InternalStateModule$3.get;
  var $String$2 = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$1 = Object.defineProperty;
  var stringSlice$5 = uncurryThis$e(''.slice);
  var replace$2 = uncurryThis$e(''.replace);
  var join = uncurryThis$e([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$e(function () {
    return defineProperty$1(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
    if (stringSlice$5($String$2(name), 0, 7) === 'Symbol(') {
      name = '[' + replace$2($String$2(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$7(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
      if (DESCRIPTORS$2) defineProperty$1(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$7(options, 'arity') && value.length !== options.arity) {
      defineProperty$1(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$7(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$2) defineProperty$1(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$7(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$1(function toString() {
    return isCallable$c(this) && getInternalState$2(this).source || inspectSource$1(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$2.exports;

  var isCallable$b = isCallable$k;
  var definePropertyModule$3 = objectDefineProperty;
  var makeBuiltIn = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$8 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$b(value)) makeBuiltIn(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty$1(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else definePropertyModule$3.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var uncurryThis$d = functionUncurryThis;

  var toString$7 = uncurryThis$d({}.toString);
  var stringSlice$4 = uncurryThis$d(''.slice);

  var classofRaw$2 = function (it) {
    return stringSlice$4(toString$7(it), 8, -1);
  };

  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$a = isCallable$k;
  var classofRaw$1 = classofRaw$2;
  var wellKnownSymbol$e = wellKnownSymbol$h;

  var TO_STRING_TAG$4 = wellKnownSymbol$e('toStringTag');
  var $Object$2 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$2(it), TO_STRING_TAG$4)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw$1(O)
      // ES3 arguments fallback
      : (result = classofRaw$1(O)) == 'Object' && isCallable$a(O.callee) ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$6 = classof$7;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$6(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var defineBuiltIn$7 = defineBuiltIn$8;
  var toString$6 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn$7(Object.prototype, 'toString', toString$6, { unsafe: true });
  }

  var objectGetOwnPropertyDescriptor = {};

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var uncurryThis$c = functionUncurryThis;
  var fails$d = fails$k;
  var classof$5 = classofRaw$2;

  var $Object$1 = Object;
  var split = uncurryThis$c(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$d(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$1('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$5(it) == 'String' ? split(it, '') : $Object$1(it);
  } : $Object$1;

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible$3 = requireObjectCoercible$5;

  var toIndexedObject$4 = function (it) {
    return IndexedObject$1(requireObjectCoercible$3(it));
  };

  var DESCRIPTORS$1 = descriptors;
  var call$h = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$4;
  var toIndexedObject$3 = toIndexedObject$4;
  var toPropertyKey$1 = toPropertyKey$3;
  var hasOwn$6 = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$1 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$3(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$h(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var objectGetOwnPropertyNames = {};

  var ceil = Math.ceil;
  var floor$1 = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor$1 : ceil)(n);
  };

  var trunc = mathTrunc;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };

  var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

  var max$1 = Math.max;
  var min$2 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toIntegerOrInfinity$3(index);
    return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
  };

  var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$3 = function (argument) {
    return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var toLength$2 = toLength$3;

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$4 = function (obj) {
    return toLength$2(obj.length);
  };

  var toIndexedObject$2 = toIndexedObject$4;
  var toAbsoluteIndex = toAbsoluteIndex$1;
  var lengthOfArrayLike$3 = lengthOfArrayLike$4;

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$2($this);
      var length = lengthOfArrayLike$3(O);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };

  var uncurryThis$b = functionUncurryThis;
  var hasOwn$5 = hasOwnProperty_1;
  var toIndexedObject$1 = toIndexedObject$4;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$2 = uncurryThis$b([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$1(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$5(hiddenKeys$2, key) && hasOwn$5(O, key) && push$2(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$2(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$3 = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;

  var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$1);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$5 = getBuiltIn$7;
  var uncurryThis$a = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$h = anObject$j;

  var concat$1 = uncurryThis$a([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$h(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };

  var hasOwn$4 = hasOwnProperty_1;
  var ownKeys = ownKeys$1;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var definePropertyModule$2 = objectDefineProperty;

  var copyConstructorProperties$1 = function (target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule$2.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var fails$c = fails$k;
  var isCallable$9 = isCallable$k;

  var replacement = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable$9(detection) ? fails$c(detection)
      : !!detection;
  };

  var normalize = isForced$1.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced$1.data = {};
  var NATIVE = isForced$1.NATIVE = 'N';
  var POLYFILL = isForced$1.POLYFILL = 'P';

  var isForced_1 = isForced$1;

  var global$7 = global$g;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;
  var defineBuiltIn$6 = defineBuiltIn$8;
  var defineGlobalProperty = defineGlobalProperty$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced = isForced_1;

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$7;
    } else if (STATIC) {
      target = global$7[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$7[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty$6(sourceProperty, 'sham', true);
      }
      defineBuiltIn$6(target, key, sourceProperty, options);
    }
  };

  var $TypeError$5 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger$1 = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$5('Maximum allowed index exceeded');
    return it;
  };

  var aCallable$7 = aCallable$9;

  var getIteratorDirect$4 = function (obj) {
    return {
      iterator: obj,
      next: aCallable$7(obj.next)
    };
  };

  var call$g = functionCall;
  var getBuiltIn$4 = getBuiltIn$7;
  var getMethod$6 = getMethod$8;

  var asyncIteratorClose = function (iterator, method, argument, reject) {
    try {
      var returnMethod = getMethod$6(iterator, 'return');
      if (returnMethod) {
        return getBuiltIn$4('Promise').resolve(call$g(returnMethod, iterator)).then(function () {
          method(argument);
        }, function (error) {
          reject(error);
        });
      }
    } catch (error2) {
      return reject(error2);
    } method(argument);
  };

  // https://github.com/tc39/proposal-iterator-helpers
  // https://github.com/tc39/proposal-array-from-async
  var call$f = functionCall;
  var aCallable$6 = aCallable$9;
  var anObject$g = anObject$j;
  var isObject$3 = isObject$9;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var getBuiltIn$3 = getBuiltIn$7;
  var getIteratorDirect$3 = getIteratorDirect$4;
  var closeAsyncIteration$1 = asyncIteratorClose;

  var createMethod$2 = function (TYPE) {
    var IS_TO_ARRAY = TYPE == 0;
    var IS_FOR_EACH = TYPE == 1;
    var IS_EVERY = TYPE == 2;
    var IS_SOME = TYPE == 3;
    return function (object, fn, target) {
      anObject$g(object);
      var MAPPING = fn !== undefined;
      if (MAPPING || !IS_TO_ARRAY) aCallable$6(fn);
      var record = getIteratorDirect$3(object);
      var Promise = getBuiltIn$3('Promise');
      var iterator = record.iterator;
      var next = record.next;
      var counter = 0;

      return new Promise(function (resolve, reject) {
        var ifAbruptCloseAsyncIterator = function (error) {
          closeAsyncIteration$1(iterator, reject, error, reject);
        };

        var loop = function () {
          try {
            if (MAPPING) try {
              doesNotExceedSafeInteger(counter);
            } catch (error5) { ifAbruptCloseAsyncIterator(error5); }
            Promise.resolve(anObject$g(call$f(next, iterator))).then(function (step) {
              try {
                if (anObject$g(step).done) {
                  if (IS_TO_ARRAY) {
                    target.length = counter;
                    resolve(target);
                  } else resolve(IS_SOME ? false : IS_EVERY || undefined);
                } else {
                  var value = step.value;
                  try {
                    if (MAPPING) {
                      var result = fn(value, counter);

                      var handler = function ($result) {
                        if (IS_FOR_EACH) {
                          loop();
                        } else if (IS_EVERY) {
                          $result ? loop() : closeAsyncIteration$1(iterator, resolve, false, reject);
                        } else if (IS_TO_ARRAY) {
                          try {
                            target[counter++] = $result;
                            loop();
                          } catch (error4) { ifAbruptCloseAsyncIterator(error4); }
                        } else {
                          $result ? closeAsyncIteration$1(iterator, resolve, IS_SOME || value, reject) : loop();
                        }
                      };

                      if (isObject$3(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                      else handler(result);
                    } else {
                      target[counter++] = value;
                      loop();
                    }
                  } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
                }
              } catch (error2) { reject(error2); }
            }, reject);
          } catch (error) { reject(error); }
        };

        loop();
      });
    };
  };

  var asyncIteratorIteration = {
    toArray: createMethod$2(0),
    forEach: createMethod$2(1),
    every: createMethod$2(2),
    some: createMethod$2(3),
    find: createMethod$2(4)
  };

  var $$8 = _export;
  var $forEach$1 = asyncIteratorIteration.forEach;

  // `AsyncIterator.prototype.forEach` method
  // https://github.com/tc39/proposal-async-iterator-helpers
  $$8({ target: 'AsyncIterator', proto: true, real: true }, {
    forEach: function forEach(fn) {
      return $forEach$1(this, fn);
    }
  });

  var isPrototypeOf$2 = objectIsPrototypeOf;

  var $TypeError$4 = TypeError;

  var anInstance$1 = function (it, Prototype) {
    if (isPrototypeOf$2(Prototype, it)) return it;
    throw $TypeError$4('Incorrect invocation');
  };

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$1 = objectDefineProperty;
  var anObject$f = anObject$j;
  var toIndexedObject = toIndexedObject$4;
  var objectKeys = objectKeys$1;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$f(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
    return O;
  };

  var getBuiltIn$2 = getBuiltIn$7;

  var html$1 = getBuiltIn$2('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */

  var anObject$e = anObject$j;
  var definePropertiesModule = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys = hiddenKeys$4;
  var html = html$1;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$1 = sharedKey$3;

  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$1('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$e(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var fails$b = fails$k;

  var correctPrototypeGetter = !fails$b(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var hasOwn$3 = hasOwnProperty_1;
  var isCallable$8 = isCallable$k;
  var toObject$3 = toObject$5;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var $Object = Object;
  var ObjectPrototype = $Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
    var object = toObject$3(O);
    if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$8(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof $Object ? ObjectPrototype : null;
  };

  var fails$a = fails$k;
  var isCallable$7 = isCallable$k;
  var isObject$2 = isObject$9;
  var getPrototypeOf$2 = objectGetPrototypeOf;
  var defineBuiltIn$5 = defineBuiltIn$8;
  var wellKnownSymbol$d = wellKnownSymbol$h;

  var ITERATOR$4 = wellKnownSymbol$d('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$4, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$2(getPrototypeOf$2(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$4 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = !isObject$2(IteratorPrototype$4) || fails$a(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$4[ITERATOR$4].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$4 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$7(IteratorPrototype$4[ITERATOR$4])) {
    defineBuiltIn$5(IteratorPrototype$4, ITERATOR$4, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$4,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var $$7 = _export;
  var global$6 = global$g;
  var anInstance = anInstance$1;
  var isCallable$6 = isCallable$k;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
  var fails$9 = fails$k;
  var hasOwn$2 = hasOwnProperty_1;
  var wellKnownSymbol$c = wellKnownSymbol$h;
  var IteratorPrototype$3 = iteratorsCore.IteratorPrototype;

  var TO_STRING_TAG$3 = wellKnownSymbol$c('toStringTag');

  var NativeIterator = global$6.Iterator;

  // FF56- have non-standard global helper `Iterator`
  var FORCED = !isCallable$6(NativeIterator)
    || NativeIterator.prototype !== IteratorPrototype$3
    // FF44- non-standard `Iterator` passes previous tests
    || !fails$9(function () { NativeIterator({}); });

  var IteratorConstructor = function Iterator() {
    anInstance(this, IteratorPrototype$3);
  };

  if (!hasOwn$2(IteratorPrototype$3, TO_STRING_TAG$3)) {
    createNonEnumerableProperty$5(IteratorPrototype$3, TO_STRING_TAG$3, 'Iterator');
  }

  if (FORCED || !hasOwn$2(IteratorPrototype$3, 'constructor') || IteratorPrototype$3.constructor === Object) {
    createNonEnumerableProperty$5(IteratorPrototype$3, 'constructor', IteratorConstructor);
  }

  IteratorConstructor.prototype = IteratorPrototype$3;

  // `Iterator` constructor
  // https://github.com/tc39/proposal-iterator-helpers
  $$7({ global: true, constructor: true, forced: FORCED }, {
    Iterator: IteratorConstructor
  });

  var classofRaw = classofRaw$2;
  var uncurryThis$9 = functionUncurryThis;

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return uncurryThis$9(fn);
  };

  var uncurryThis$8 = functionUncurryThisClause;
  var aCallable$5 = aCallable$9;
  var NATIVE_BIND$1 = functionBindNative;

  var bind$3 = uncurryThis$8(uncurryThis$8.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$5(fn);
    return that === undefined ? fn : NATIVE_BIND$1 ? bind$3(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var iterators = {};

  var wellKnownSymbol$b = wellKnownSymbol$h;
  var Iterators$3 = iterators;

  var ITERATOR$3 = wellKnownSymbol$b('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod$2 = function (it) {
    return it !== undefined && (Iterators$3.Array === it || ArrayPrototype[ITERATOR$3] === it);
  };

  var classof$4 = classof$7;
  var getMethod$5 = getMethod$8;
  var isNullOrUndefined$2 = isNullOrUndefined$5;
  var Iterators$2 = iterators;
  var wellKnownSymbol$a = wellKnownSymbol$h;

  var ITERATOR$2 = wellKnownSymbol$a('iterator');

  var getIteratorMethod$3 = function (it) {
    if (!isNullOrUndefined$2(it)) return getMethod$5(it, ITERATOR$2)
      || getMethod$5(it, '@@iterator')
      || Iterators$2[classof$4(it)];
  };

  var call$e = functionCall;
  var aCallable$4 = aCallable$9;
  var anObject$d = anObject$j;
  var tryToString$1 = tryToString$3;
  var getIteratorMethod$2 = getIteratorMethod$3;

  var $TypeError$3 = TypeError;

  var getIterator$2 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
    if (aCallable$4(iteratorMethod)) return anObject$d(call$e(iteratorMethod, argument));
    throw $TypeError$3(tryToString$1(argument) + ' is not iterable');
  };

  var call$d = functionCall;
  var anObject$c = anObject$j;
  var getMethod$4 = getMethod$8;

  var iteratorClose$4 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$c(iterator);
    try {
      innerResult = getMethod$4(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$d(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$c(innerResult);
    return value;
  };

  var bind$2 = functionBindContext;
  var call$c = functionCall;
  var anObject$b = anObject$j;
  var tryToString = tryToString$3;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var lengthOfArrayLike$2 = lengthOfArrayLike$4;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var getIterator$1 = getIterator$2;
  var getIteratorMethod$1 = getIteratorMethod$3;
  var iteratorClose$3 = iteratorClose$4;

  var $TypeError$2 = TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$1 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$2(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose$3(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$b(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_RECORD) {
      iterator = iterable.iterator;
    } else if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$1(iterable);
      if (!iterFn) throw $TypeError$2(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod$1(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$2(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator$1(iterable, iterFn);
    }

    next = IS_RECORD ? iterable.next : iterator.next;
    while (!(step = call$c(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$3(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  var $$6 = _export;
  var iterate = iterate$1;
  var aCallable$3 = aCallable$9;
  var anObject$a = anObject$j;
  var getIteratorDirect$2 = getIteratorDirect$4;

  // `Iterator.prototype.forEach` method
  // https://github.com/tc39/proposal-iterator-helpers
  $$6({ target: 'Iterator', proto: true, real: true }, {
    forEach: function forEach(fn) {
      anObject$a(this);
      aCallable$3(fn);
      var record = getIteratorDirect$2(this);
      var counter = 0;
      iterate(record, function (value) {
        fn(value, counter++);
      }, { IS_RECORD: true });
    }
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  // in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
  var documentCreateElement = documentCreateElement$2;

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

  var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

  var classof$3 = classofRaw$2;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$1 = Array.isArray || function isArray(argument) {
    return classof$3(argument) == 'Array';
  };

  var uncurryThis$7 = functionUncurryThis;
  var fails$8 = fails$k;
  var isCallable$5 = isCallable$k;
  var classof$2 = classof$7;
  var getBuiltIn$1 = getBuiltIn$7;
  var inspectSource = inspectSource$2;

  var noop = function () { /* empty */ };
  var empty = [];
  var construct = getBuiltIn$1('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$1 = uncurryThis$7(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable$5(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable$5(argument)) return false;
    switch (classof$2(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$2 = !construct || fails$8(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var isArray = isArray$1;
  var isConstructor$1 = isConstructor$2;
  var isObject$1 = isObject$9;
  var wellKnownSymbol$9 = wellKnownSymbol$h;

  var SPECIES$2 = wellKnownSymbol$9('species');
  var $Array$1 = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$1(C) && (C === $Array$1 || isArray(C.prototype))) C = undefined;
      else if (isObject$1(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array$1 : C;
  };

  var arraySpeciesConstructor = arraySpeciesConstructor$1;

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$1 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var bind$1 = functionBindContext;
  var uncurryThis$6 = functionUncurryThis;
  var IndexedObject = indexedObject;
  var toObject$2 = toObject$5;
  var lengthOfArrayLike$1 = lengthOfArrayLike$4;
  var arraySpeciesCreate = arraySpeciesCreate$1;

  var push$1 = uncurryThis$6([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$2($this);
      var self = IndexedObject(O);
      var boundFunction = bind$1(callbackfn, that);
      var length = lengthOfArrayLike$1(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$1(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$1(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$1(7)
  };

  var fails$7 = fails$k;

  var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$7(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () { return 1; }, 1);
    });
  };

  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict = arrayMethodIsStrict$1;

  var STRICT_METHOD = arrayMethodIsStrict('forEach');

  // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$5 = global$g;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;

  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty$4(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };

  for (var COLLECTION_NAME in DOMIterables) {
    if (DOMIterables[COLLECTION_NAME]) {
      handlePrototype(global$5[COLLECTION_NAME] && global$5[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(DOMTokenListPrototype);

  var classof$1 = classof$7;

  var $String$1 = String;

  var toString$5 = function (argument) {
    if (classof$1(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$1(argument);
  };

  var anObject$9 = anObject$j;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$9(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$6 = fails$k;
  var global$4 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$4.RegExp;

  var UNSUPPORTED_Y$1 = fails$6(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008
  var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$6(function () {
    return !$RegExp$2('a', 'y').sticky;
  });

  var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$6(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY,
    UNSUPPORTED_Y: UNSUPPORTED_Y$1
  };

  var fails$5 = fails$k;
  var global$3 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$3.RegExp;

  var regexpUnsupportedDotAll = fails$5(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$4 = fails$k;
  var global$2 = global$g;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$2.RegExp;

  var regexpUnsupportedNcg = fails$4(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$b = functionCall;
  var uncurryThis$5 = functionUncurryThis;
  var toString$4 = toString$5;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared$1 = sharedExports;
  var create$3 = objectCreate;
  var getInternalState$1 = internalState.get;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;

  var nativeReplace = shared$1('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$4 = uncurryThis$5(''.charAt);
  var indexOf = uncurryThis$5(''.indexOf);
  var replace$1 = uncurryThis$5(''.replace);
  var stringSlice$3 = uncurryThis$5(''.slice);

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$b(nativeExec, re1, 'a');
    call$b(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$1(re);
      var str = toString$4(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$b(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$b(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$1(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$3(str, re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = call$b(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$3(match.input, charsAdded);
          match[0] = stringSlice$3(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
        call$b(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = create$3(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$2 = patchedExec;

  var $$5 = _export;
  var exec = regexpExec$2;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$5({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
    exec: exec
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points

  var uncurryThis$4 = functionUncurryThisClause;
  var defineBuiltIn$4 = defineBuiltIn$8;
  var regexpExec$1 = regexpExec$2;
  var fails$3 = fails$k;
  var wellKnownSymbol$8 = wellKnownSymbol$h;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;

  var SPECIES$1 = wellKnownSymbol$8('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$8(KEY);

    var DELEGATES_TO_SYMBOL = !fails$3(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$3(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      FORCED
    ) {
      var uncurriedNativeRegExpMethod = uncurryThis$4(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$4(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
          }
          return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
        }
        return { done: false };
      });

      defineBuiltIn$4(String.prototype, KEY, methods[0]);
      defineBuiltIn$4(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$3(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var uncurryThis$3 = functionUncurryThis;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
  var toString$3 = toString$5;
  var requireObjectCoercible$2 = requireObjectCoercible$5;

  var charAt$3 = uncurryThis$3(''.charAt);
  var charCodeAt = uncurryThis$3(''.charCodeAt);
  var stringSlice$2 = uncurryThis$3(''.slice);

  var createMethod = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$3(requireObjectCoercible$2($this));
      var position = toIntegerOrInfinity$1(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING
            ? charAt$3(S, position)
            : first
          : CONVERT_TO_STRING
            ? stringSlice$2(S, position, position + 2)
            : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var charAt$2 = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$2 = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  var call$a = functionCall;
  var anObject$8 = anObject$j;
  var isCallable$4 = isCallable$k;
  var classof = classofRaw$2;
  var regexpExec = regexpExec$2;

  var $TypeError$1 = TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$4(exec)) {
      var result = call$a(exec, R, S);
      if (result !== null) anObject$8(result);
      return result;
    }
    if (classof(R) === 'RegExp') return call$a(regexpExec, R, S);
    throw $TypeError$1('RegExp#exec called on incompatible receiver');
  };

  var call$9 = functionCall;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$7 = anObject$j;
  var isNullOrUndefined$1 = isNullOrUndefined$5;
  var toLength$1 = toLength$3;
  var toString$2 = toString$5;
  var requireObjectCoercible$1 = requireObjectCoercible$5;
  var getMethod$3 = getMethod$8;
  var advanceStringIndex$1 = advanceStringIndex$2;
  var regExpExec$1 = regexpExecAbstract;

  // @@match logic
  fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.es/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = requireObjectCoercible$1(this);
        var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$3(regexp, MATCH);
        return matcher ? call$9(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject$7(this);
        var S = toString$2(string);
        var res = maybeCallNative(nativeMatch, rx, S);

        if (res.done) return res.value;

        if (!rx.global) return regExpExec$1(rx, S);

        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = regExpExec$1(rx, S)) !== null) {
          var matchStr = toString$2(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  var anObject$6 = anObject$j;
  var iteratorClose$2 = iteratorClose$4;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$2 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$6(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$2(iterator, 'throw', error);
    }
  };

  var toPropertyKey = toPropertyKey$3;
  var definePropertyModule = objectDefineProperty;
  var createPropertyDescriptor$1 = createPropertyDescriptor$4;

  var createProperty$1 = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));
    else object[propertyKey] = value;
  };

  var bind = functionBindContext;
  var call$8 = functionCall;
  var toObject$1 = toObject$5;
  var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$2;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var isConstructor = isConstructor$2;
  var lengthOfArrayLike = lengthOfArrayLike$4;
  var createProperty = createProperty$1;
  var getIterator = getIterator$2;
  var getIteratorMethod = getIteratorMethod$3;

  var $Array = Array;

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject$1(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = call$8(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing$1(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike(O);
      result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
      for (;length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }
    result.length = index;
    return result;
  };

  var wellKnownSymbol$7 = wellKnownSymbol$h;

  var ITERATOR$1 = wellKnownSymbol$7('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$1] = function () {
      return this;
    };
    // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$1] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var $$4 = _export;
  var from = arrayFrom;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;

  var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  });

  // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$4({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
    from: from
  });

  var defineProperty = objectDefineProperty.f;
  var hasOwn$1 = hasOwnProperty_1;
  var wellKnownSymbol$6 = wellKnownSymbol$h;

  var TO_STRING_TAG$2 = wellKnownSymbol$6('toStringTag');

  var setToStringTag$2 = function (target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn$1(target, TO_STRING_TAG$2)) {
      defineProperty(target, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
  var create$2 = objectCreate;
  var createPropertyDescriptor = createPropertyDescriptor$4;
  var setToStringTag$1 = setToStringTag$2;
  var Iterators$1 = iterators;

  var returnThis$1 = function () { return this; };

  var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$2(IteratorPrototype$2, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$1[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var uncurryThis$2 = functionUncurryThis;
  var aCallable$2 = aCallable$9;

  var functionUncurryThisAccessor = function (object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis$2(aCallable$2(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) { /* empty */ }
  };

  var isCallable$3 = isCallable$k;

  var $String = String;
  var $TypeError = TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$3(argument)) return argument;
    throw $TypeError("Can't set " + $String(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThisAccessor = functionUncurryThisAccessor;
  var anObject$5 = anObject$j;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$5(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$3 = _export;
  var call$7 = functionCall;
  var FunctionName = functionName;
  var isCallable$2 = isCallable$k;
  var createIteratorConstructor = iteratorCreateConstructor;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag = setToStringTag$2;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;
  var defineBuiltIn$3 = defineBuiltIn$8;
  var wellKnownSymbol$5 = wellKnownSymbol$h;
  var Iterators = iterators;
  var IteratorsCore = iteratorsCore;

  var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype$1 = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR = wellKnownSymbol$5('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf$1(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf$1(CurrentIteratorPrototype) !== IteratorPrototype$1) {
          if (setPrototypeOf) {
            setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$1);
          } else if (!isCallable$2(CurrentIteratorPrototype[ITERATOR])) {
            defineBuiltIn$3(CurrentIteratorPrototype, ITERATOR, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() { return call$7(nativeIterator, this); };
      }
    }

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          defineBuiltIn$3(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$3({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR] !== defaultIterator) {
      defineBuiltIn$3(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
    }
    Iterators[NAME] = defaultIterator;

    return methods;
  };

  // `CreateIterResultObject` abstract operation
  // https://tc39.es/ecma262/#sec-createiterresultobject
  var createIterResultObject$4 = function (value, done) {
    return { value: value, done: done };
  };

  var charAt$1 = stringMultibyte.charAt;
  var toString$1 = toString$5;
  var InternalStateModule$2 = internalState;
  var defineIterator = iteratorDefine;
  var createIterResultObject$3 = createIterResultObject$4;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR);

  // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator(String, 'String', function (iterated) {
    setInternalState$2(this, {
      type: STRING_ITERATOR,
      string: toString$1(iterated),
      index: 0
    });
  // `%StringIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return createIterResultObject$3(undefined, true);
    point = charAt$1(string, index);
    state.index += point.length;
    return createIterResultObject$3(point, false);
  });

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$1 = FunctionPrototype.apply;
  var call$6 = FunctionPrototype.call;

  // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$6.bind(apply$1) : function () {
    return call$6.apply(apply$1, arguments);
  });

  var uncurryThis$1 = functionUncurryThis;
  var toObject = toObject$5;

  var floor = Math.floor;
  var charAt = uncurryThis$1(''.charAt);
  var replace = uncurryThis$1(''.replace);
  var stringSlice$1 = uncurryThis$1(''.slice);
  // eslint-disable-next-line redos/no-vulnerable -- safe
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

  // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace(replacement, symbols, function (match, ch) {
      var capture;
      switch (charAt(ch, 0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return stringSlice$1(str, 0, position);
        case "'": return stringSlice$1(str, tailPos);
        case '<':
          capture = namedCaptures[stringSlice$1(ch, 1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var apply = functionApply;
  var call$5 = functionCall;
  var uncurryThis = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$2 = fails$k;
  var anObject$4 = anObject$j;
  var isCallable$1 = isCallable$k;
  var isNullOrUndefined = isNullOrUndefined$5;
  var toIntegerOrInfinity = toIntegerOrInfinity$4;
  var toLength = toLength$3;
  var toString = toString$5;
  var requireObjectCoercible = requireObjectCoercible$5;
  var advanceStringIndex = advanceStringIndex$2;
  var getMethod$2 = getMethod$8;
  var getSubstitution = getSubstitution$1;
  var regExpExec = regexpExecAbstract;
  var wellKnownSymbol$4 = wellKnownSymbol$h;

  var REPLACE = wellKnownSymbol$4('replace');
  var max = Math.max;
  var min = Math.min;
  var concat = uncurryThis([].concat);
  var push = uncurryThis([].push);
  var stringIndexOf = uncurryThis(''.indexOf);
  var stringSlice = uncurryThis(''.slice);

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  })();

  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails$2(function () {
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
    return ''.replace(re, '$<a>') !== '7';
  });

  // @@replace logic
  fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod$2(searchValue, REPLACE);
        return replacer
          ? call$5(replacer, searchValue, O, replaceValue)
          : call$5(nativeReplace, toString(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject$4(this);
        var S = toString(string);

        if (
          typeof replaceValue == 'string' &&
          stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
          stringIndexOf(replaceValue, '$<') === -1
        ) {
          var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
          if (res.done) return res.value;
        }

        var functionalReplace = isCallable$1(replaceValue);
        if (!functionalReplace) replaceValue = toString(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) break;

          push(results, result);
          if (!global) break;

          var matchStr = toString(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = toString(result[0]);
          var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = concat([matched], captures, position, S);
            if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
            var replacement = toString(apply(replaceValue, undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + stringSlice(S, nextSourcePosition);
      }
    ];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var fails$1 = fails$k;
  var wellKnownSymbol$3 = wellKnownSymbol$h;
  var V8_VERSION = engineV8Version;

  var SPECIES = wellKnownSymbol$3('species');

  var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION >= 51 || !fails$1(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $$2 = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$1;

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$2({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var perform$1 = function (exec) {
    try {
      return { error: false, value: exec() };
    } catch (error) {
      return { error: true, value: error };
    }
  };

  var defineBuiltIn$2 = defineBuiltIn$8;

  var defineBuiltIns$2 = function (target, src, options) {
    for (var key in src) defineBuiltIn$2(target, key, src[key], options);
    return target;
  };

  var global$1 = global$g;
  var shared = sharedStore;
  var isCallable = isCallable$k;
  var getPrototypeOf = objectGetPrototypeOf;
  var defineBuiltIn$1 = defineBuiltIn$8;
  var wellKnownSymbol$2 = wellKnownSymbol$h;

  var USE_FUNCTION_CONSTRUCTOR = 'USE_FUNCTION_CONSTRUCTOR';
  var ASYNC_ITERATOR = wellKnownSymbol$2('asyncIterator');
  var AsyncIterator = global$1.AsyncIterator;
  var PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
  var AsyncIteratorPrototype$1, prototype;

  if (PassedAsyncIteratorPrototype) {
    AsyncIteratorPrototype$1 = PassedAsyncIteratorPrototype;
  } else if (isCallable(AsyncIterator)) {
    AsyncIteratorPrototype$1 = AsyncIterator.prototype;
  } else if (shared[USE_FUNCTION_CONSTRUCTOR] || global$1[USE_FUNCTION_CONSTRUCTOR]) {
    try {
      // eslint-disable-next-line no-new-func -- we have no alternatives without usage of modern syntax
      prototype = getPrototypeOf(getPrototypeOf(getPrototypeOf(Function('return async function*(){}()')())));
      if (getPrototypeOf(prototype) === Object.prototype) AsyncIteratorPrototype$1 = prototype;
    } catch (error) { /* empty */ }
  }

  if (!AsyncIteratorPrototype$1) AsyncIteratorPrototype$1 = {};

  if (!isCallable(AsyncIteratorPrototype$1[ASYNC_ITERATOR])) {
    defineBuiltIn$1(AsyncIteratorPrototype$1, ASYNC_ITERATOR, function () {
      return this;
    });
  }

  var asyncIteratorPrototype = AsyncIteratorPrototype$1;

  var call$4 = functionCall;
  var perform = perform$1;
  var anObject$3 = anObject$j;
  var create$1 = objectCreate;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;
  var defineBuiltIns$1 = defineBuiltIns$2;
  var wellKnownSymbol$1 = wellKnownSymbol$h;
  var InternalStateModule$1 = internalState;
  var getBuiltIn = getBuiltIn$7;
  var getMethod$1 = getMethod$8;
  var AsyncIteratorPrototype = asyncIteratorPrototype;
  var createIterResultObject$2 = createIterResultObject$4;
  var iteratorClose$1 = iteratorClose$4;

  var Promise$1 = getBuiltIn('Promise');

  var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');
  var ASYNC_ITERATOR_HELPER = 'AsyncIteratorHelper';
  var WRAP_FOR_VALID_ASYNC_ITERATOR = 'WrapForValidAsyncIterator';
  var setInternalState$1 = InternalStateModule$1.set;

  var createAsyncIteratorProxyPrototype = function (IS_ITERATOR) {
    var IS_GENERATOR = !IS_ITERATOR;
    var getInternalState = InternalStateModule$1.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ASYNC_ITERATOR : ASYNC_ITERATOR_HELPER);

    var getStateOrEarlyExit = function (that) {
      var stateCompletion = perform(function () {
        return getInternalState(that);
      });

      var stateError = stateCompletion.error;
      var state = stateCompletion.value;

      if (stateError || (IS_GENERATOR && state.done)) {
        return { exit: true, value: stateError ? Promise$1.reject(state) : Promise$1.resolve(createIterResultObject$2(undefined, true)) };
      } return { exit: false, value: state };
    };

    return defineBuiltIns$1(create$1(AsyncIteratorPrototype), {
      next: function next() {
        var stateCompletion = getStateOrEarlyExit(this);
        var state = stateCompletion.value;
        if (stateCompletion.exit) return state;
        var handlerCompletion = perform(function () {
          return anObject$3(state.nextHandler(Promise$1));
        });
        var handlerError = handlerCompletion.error;
        var value = handlerCompletion.value;
        if (handlerError) state.done = true;
        return handlerError ? Promise$1.reject(value) : Promise$1.resolve(value);
      },
      'return': function () {
        var stateCompletion = getStateOrEarlyExit(this);
        var state = stateCompletion.value;
        if (stateCompletion.exit) return state;
        state.done = true;
        var iterator = state.iterator;
        var returnMethod, result;
        var completion = perform(function () {
          if (state.inner) try {
            iteratorClose$1(state.inner.iterator, 'normal');
          } catch (error) {
            return iteratorClose$1(iterator, 'throw', error);
          }
          return getMethod$1(iterator, 'return');
        });
        returnMethod = result = completion.value;
        if (completion.error) return Promise$1.reject(result);
        if (returnMethod === undefined) return Promise$1.resolve(createIterResultObject$2(undefined, true));
        completion = perform(function () {
          return call$4(returnMethod, iterator);
        });
        result = completion.value;
        if (completion.error) return Promise$1.reject(result);
        return IS_ITERATOR ? Promise$1.resolve(result) : Promise$1.resolve(result).then(function (resolved) {
          anObject$3(resolved);
          return createIterResultObject$2(undefined, true);
        });
      }
    });
  };

  var WrapForValidAsyncIteratorPrototype = createAsyncIteratorProxyPrototype(true);
  var AsyncIteratorHelperPrototype = createAsyncIteratorProxyPrototype(false);

  createNonEnumerableProperty$1(AsyncIteratorHelperPrototype, TO_STRING_TAG$1, 'Async Iterator Helper');

  var asyncIteratorCreateProxy = function (nextHandler, IS_ITERATOR) {
    var AsyncIteratorProxy = function AsyncIterator(record, state) {
      if (state) {
        state.iterator = record.iterator;
        state.next = record.next;
      } else state = record;
      state.type = IS_ITERATOR ? WRAP_FOR_VALID_ASYNC_ITERATOR : ASYNC_ITERATOR_HELPER;
      state.nextHandler = nextHandler;
      state.counter = 0;
      state.done = false;
      setInternalState$1(this, state);
    };

    AsyncIteratorProxy.prototype = IS_ITERATOR ? WrapForValidAsyncIteratorPrototype : AsyncIteratorHelperPrototype;

    return AsyncIteratorProxy;
  };

  var $$1 = _export;
  var call$3 = functionCall;
  var aCallable$1 = aCallable$9;
  var anObject$2 = anObject$j;
  var isObject = isObject$9;
  var getIteratorDirect$1 = getIteratorDirect$4;
  var createAsyncIteratorProxy = asyncIteratorCreateProxy;
  var createIterResultObject$1 = createIterResultObject$4;
  var closeAsyncIteration = asyncIteratorClose;

  var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
    var state = this;
    var iterator = state.iterator;
    var predicate = state.predicate;

    return new Promise(function (resolve, reject) {
      var doneAndReject = function (error) {
        state.done = true;
        reject(error);
      };

      var ifAbruptCloseAsyncIterator = function (error) {
        closeAsyncIteration(iterator, doneAndReject, error, doneAndReject);
      };

      var loop = function () {
        try {
          Promise.resolve(anObject$2(call$3(state.next, iterator))).then(function (step) {
            try {
              if (anObject$2(step).done) {
                state.done = true;
                resolve(createIterResultObject$1(undefined, true));
              } else {
                var value = step.value;
                try {
                  var result = predicate(value, state.counter++);

                  var handler = function (selected) {
                    selected ? resolve(createIterResultObject$1(value, false)) : loop();
                  };

                  if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                  else handler(result);
                } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
              }
            } catch (error2) { doneAndReject(error2); }
          }, doneAndReject);
        } catch (error) { doneAndReject(error); }
      };

      loop();
    });
  });

  // `AsyncIterator.prototype.filter` method
  // https://github.com/tc39/proposal-async-iterator-helpers
  $$1({ target: 'AsyncIterator', proto: true, real: true }, {
    filter: function filter(predicate) {
      anObject$2(this);
      aCallable$1(predicate);
      return new AsyncIteratorProxy(getIteratorDirect$1(this), {
        predicate: predicate
      });
    }
  });

  var call$2 = functionCall;
  var create = objectCreate;
  var createNonEnumerableProperty = createNonEnumerableProperty$8;
  var defineBuiltIns = defineBuiltIns$2;
  var wellKnownSymbol = wellKnownSymbol$h;
  var InternalStateModule = internalState;
  var getMethod = getMethod$8;
  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var createIterResultObject = createIterResultObject$4;
  var iteratorClose = iteratorClose$4;

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var ITERATOR_HELPER = 'IteratorHelper';
  var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
  var setInternalState = InternalStateModule.set;

  var createIteratorProxyPrototype = function (IS_ITERATOR) {
    var getInternalState = InternalStateModule.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

    return defineBuiltIns(create(IteratorPrototype), {
      next: function next() {
        var state = getInternalState(this);
        // for simplification:
        //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
        //   for `%IteratorHelperPrototype%.next` - just a value
        if (IS_ITERATOR) return state.nextHandler();
        try {
          var result = state.done ? undefined : state.nextHandler();
          return createIterResultObject(result, state.done);
        } catch (error) {
          state.done = true;
          throw error;
        }
      },
      'return': function () {
        var state = getInternalState(this);
        var iterator = state.iterator;
        state.done = true;
        if (IS_ITERATOR) {
          var returnMethod = getMethod(iterator, 'return');
          return returnMethod ? call$2(returnMethod, iterator) : createIterResultObject(undefined, true);
        }
        if (state.inner) try {
          iteratorClose(state.inner.iterator, 'normal');
        } catch (error) {
          return iteratorClose(iterator, 'throw', error);
        }
        iteratorClose(iterator, 'normal');
        return createIterResultObject(undefined, true);
      }
    });
  };

  var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
  var IteratorHelperPrototype = createIteratorProxyPrototype(false);

  createNonEnumerableProperty(IteratorHelperPrototype, TO_STRING_TAG, 'Iterator Helper');

  var iteratorCreateProxy = function (nextHandler, IS_ITERATOR) {
    var IteratorProxy = function Iterator(record, state) {
      if (state) {
        state.iterator = record.iterator;
        state.next = record.next;
      } else state = record;
      state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
      state.nextHandler = nextHandler;
      state.counter = 0;
      state.done = false;
      setInternalState(this, state);
    };

    IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

    return IteratorProxy;
  };

  var $ = _export;
  var call$1 = functionCall;
  var aCallable = aCallable$9;
  var anObject$1 = anObject$j;
  var getIteratorDirect = getIteratorDirect$4;
  var createIteratorProxy = iteratorCreateProxy;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$2;

  var IteratorProxy = createIteratorProxy(function () {
    var iterator = this.iterator;
    var predicate = this.predicate;
    var next = this.next;
    var result, done, value;
    while (true) {
      result = anObject$1(call$1(next, iterator));
      done = this.done = !!result.done;
      if (done) return;
      value = result.value;
      if (callWithSafeIterationClosing(iterator, predicate, [value, this.counter++], true)) return value;
    }
  });

  // `Iterator.prototype.filter` method
  // https://github.com/tc39/proposal-iterator-helpers
  $({ target: 'Iterator', proto: true, real: true }, {
    filter: function filter(predicate) {
      anObject$1(this);
      aCallable(predicate);
      return new IteratorProxy(getIteratorDirect(this), {
        predicate: predicate
      });
    }
  });

  var call = functionCall;
  var hasOwn = hasOwnProperty_1;
  var isPrototypeOf = objectIsPrototypeOf;
  var regExpFlags = regexpFlags$1;

  var RegExpPrototype$1 = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype$1, R)
      ? call(regExpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var defineBuiltIn = defineBuiltIn$8;
  var anObject = anObject$j;
  var $toString = toString$5;
  var fails = fails$k;
  var getRegExpFlags = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var pattern = $toString(R.source);
      var flags = $toString(getRegExpFlags(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
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
      // hides dialog on (any) button click if there's a defined callback handler
      hideOnAction: false,
      // determines if a Don't show again checkbox will be displayed
      optOutCb: false,
      // label for the opt-out checkbox
      optOutText: 'Don\'t show again',
      // display text for the 'OK' button
      okText: 'Ok',
      // display text for the 'Yes' button
      yesText: 'Yes',
      // display text for the 'No' button
      noText: 'No',
      // display text for the 'Cancel' button
      cancelText: 'Cancel',
      // determines if dialog is for item selection
      selection: false,
      // determins if (single) select dialog will show the OK_CANCEL buttons for confirmation
      confirmSelect: false,
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
      // Yes, No, Cancel buttons
      YES_NO_CANCEL: 3,
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
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    // Merge the object into the extended object
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
    };

    // Loop through each object and conduct a merge
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
          }

          // handle selection item click
          if (e.target.matches('.dlg-select-item')) {
            e.target.querySelector('.dlg-select-lbl').click();
          }

          // handle action buttons click
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
              } else if (_.config.selection && _.config.confirmSelect) {
                var selected = content.querySelector('.dlg-select-radio:checked');
                if (selected) {
                  var _item = _.cache[selected.id];
                  _.config.selectedValue = typeof _item === 'string' ? selected.value : _item[_.config.valueField];
                  _.hide();
                  if (cbs && cbs.itemSelect) cbs.itemSelect.apply(selected, [e, _item]);
                } else dialogPulse();
              } else {
                if (cbs && cbs.okClick) {
                  cbs.okClick.apply(_, e);
                  if (_.config.hideOnAction) _.hide();
                } else _.hide();
              }
            }

            // Yes button
            if (e.target.matches('.yes-action')) {
              if (cbs && cbs.yesClick) {
                cbs.yesClick.apply(_, e);
                if (_.config.hideOnAction) _.hide();
              } else _.hide();
            }

            // No button
            if (e.target.matches('.no-action')) {
              if (cbs && cbs.noClick) {
                cbs.noClick.apply(_, e);
                if (_.config.hideOnAction) _.hide();
              } else _.hide();
            }

            // CANCEL button
            if (e.target.matches('.cancel-action')) {
              if (cbs && cbs.cancelClick) {
                cbs.cancelClick.apply(_, e);
                if (_.config.hideOnAction) _.hide();
              } else _.hide();
            }
          }
        }
        if (e.type === 'change') {
          // handle selection radio change
          if (e.target.matches('.dlg-select-radio')) {
            var el = e.target;
            if (el.checked && !_.config.confirmSelect) {
              var _item2 = _.cache[el.id];
              _.config.selectedValue = typeof _item2 === 'string' ? el.value : _item2[_.config.valueField];
              _.hide();
              if (cbs && cbs.itemSelect) cbs.itemSelect.apply(el, [e, _item2]);
            }
          } else if (e.target.matches('.dlg-select-checkbox')) {
            if (_.config.maxSelect) maxSelectCheck();
          } else if (e.target.matches('.opt-out-cb')) {
            _.optOut = e.target.checked;
            if (cbs && cbs.optOutChanged) cbs.optOutChanged.call(_, e.target.checked);
          }
        }
        if (e.type === 'scroll') {
          if (e.target.matches('.dlg-content')) e.target.classList[e.target.scrollTop > 5 ? 'add' : 'remove']('content--scrolled');
        }
        if (e.type === 'keyup') {
          if (e.target.matches('.dlg-search')) {
            var _keyword = e.target.value,
              _items = content.querySelectorAll('.dlg-select-item');
            _items.forEach(function (dlgItem) {
              if (dlgItem.classList.contains('select--group')) return;
              var input = dlgItem.querySelector(_.config.multiple ? '.dlg-select-checkbox' : '.dlg-select-radio'),
                item = _.cache[input.id],
                iType = _typeof(item),
                iText = iType === 'string' ? item : item[_.config.textField],
                _matched = false;
              _matched = cbs && cbs.onSearch ? cbs.onSearch.call(_, item, _keyword) : iText.toLowerCase().indexOf(_keyword.toLowerCase()) >= 0;
              dlgItem.classList[_matched ? 'remove' : 'add']('item--nomatch');
            });
          }
        }
      },
      addItemDOM = function addItemDOM(item, id, value, label) {
        var isGroup = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
        if (isGroup) {
          var groupEl = createElem('div', {
            className: 'dlg-select-item select--group'
          }, item);
          appendTo(groupEl, content);
        } else {
          var itemEl = createElem('div', {
              className: 'dlg-select-item'
            }),
            selectEl = createElem('input', {
              className: _.config.multiple ? 'dlg-select-checkbox' : 'dlg-select-radio',
              id: id,
              name: 'dlg-selection',
              type: _.config.multiple ? 'checkbox' : 'radio',
              value: value,
              checked: _.config.multiple ? _.config.selectedValue && inArray(_.config.selectedValue, value) : _.config.selectedValue === value
            }),
            labelEl = createElem('label', {
              className: 'dlg-select-lbl',
              htmlFor: id
            }, cbs && cbs.itemRender ? cbs.itemRender.call(_, item) : '<span class="select-item">' + label + '</span>', true);
          _.cache[id] = item;
          appendTo([selectEl, labelEl], itemEl);
          appendTo(itemEl, content);
        }
      },
      addItem = function addItem(item) {
        var type = _typeof(item),
          id = '';
        if (type === 'string') {
          id = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + removeSpace(item.toString());
          addItemDOM(item, id, item, item);
        } else {
          if (item.group && Array.isArray(item.items)) {
            addItemDOM(item.group, null, null, null, true);
            item.items.forEach(function (i) {
              return addItem(i);
            });
          } else {
            var value = type === 'string' ? item : item[_.config.valueField],
              text = type === 'string' ? item : item[_.config.textField];
            id = (_.config.multiple ? 'dlg-cb' : 'dlg-radio') + removeSpace(value.toString());
            addItemDOM(item, id, value, text);
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

    // dialog loader
    var loader = createElem('div', {
      className: 'dlg-loader'
    });
    var loaderWrapper = createElem('div', {
      className: 'loader-wrapper'
    });
    appendTo(createElem('div', {
      className: 'loading-buffer'
    }), loaderWrapper);
    appendTo(createElem('div', {
      className: 'loading-indicator'
    }), loaderWrapper);
    appendTo(loaderWrapper, loader);
    appendTo(loader, wrapper);
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
      _.content.forEach(function (i) {
        return addItem(i);
      });
      if (_.config.multiple && _.config.maxSelect) maxSelectCheck();
    } else content.innerHTML = _.content;
    appendTo(content, wrapper);
    if (_.type !== vars.buttons.NONE) {
      footer = createElem('div', {
        className: 'dlg-actions'
      });
      if (_.config.optOutCb) {
        var cbID = 'opt-out-cb';
        var group = createElem('div', {
          className: 'opt-out-grp'
        });
        appendTo(createElem('input', {
          id: cbID,
          className: cbID,
          type: 'checkbox',
          checked: _.optOut
        }), group);
        appendTo(createElem('label', {
          htmlFor: cbID
        }, _.config.optOutText), group);
        appendTo(group, footer);
      }
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
      case vars.buttons.YES_NO_CANCEL:
        appendTo([createElem('button', {
          className: 'dlg-action cancel-action',
          tabIndex: 3
        }, _.config.cancelText), createElem('button', {
          className: 'dlg-action no-action',
          tabIndex: 2
        }, _.config.noText), createElem('button', {
          className: 'dlg-action yes-action',
          tabIndex: 1
        }, _.config.yesText)], footer);
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
      _.type = _.config.selection ? _.config.multiple || _.config.confirmSelect ? vars.buttons.OK_CANCEL : vars.buttons.NONE : _.config.buttons;
      if (titleType === 'undefined' || titleType !== 'string' && title !== null) throw new Error('Dialog title is missing or incorrect format.');
      if ((contType === 'undefined' || contType !== 'string') && !_.config.selection || !Array.isArray(content) && _.config.selection) throw new Error('Dialog message is missing or incorrect format.');
      _.title = title;
      _.content = content;
      _.cache = {};
      _.optOut = false;
      if (!_.config.init) buildUI.apply(_);
    }
    /**
     * Sets the loading state of the dialog
     * @param {Boolean} loading Determines the loading state of the dialog
     * @param {Boolean} cancellable Determines if the loading state is cancellable (Cancel action button)
     */
    _createClass(_duDialog, [{
      key: "setLoading",
      value: function setLoading(loading) {
        var cancellable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var _ = this;
        _.loadingState = loading;
        _.loadingCancellable = cancellable;
        _.dialog.classList[loading ? 'add' : 'remove']('dlg--loading');
        _.dialog.querySelectorAll('.dlg-action').forEach(function (action) {
          if (cancellable && action.classList.contains('cancel-action')) return;else setAttributes(action, {
            disabled: loading
          });
        });
      }
      /**
       * Shows the dialog
       */
    }, {
      key: "show",
      value: function show() {
        var _ = this;
        if (_.config.init) buildUI.apply(_);
        appendTo(_.docFrag, document.body);
        setTimeout(function () {
          _.dialog.classList.add('dlg--open');

          // scroll to selected item (for single selection only)
          if (_.config.selection && !_.config.multiple) {
            var content = _.dialog.querySelector('.dlg-content'),
              _selected = content.querySelector('.dlg-select-radio:checked');
            if (_selected) {
              var isIE = !!window.navigator.userAgent.match(/MSIE|Trident/);
              var _nodes = Array.from(content.childNodes),
                _offset = 0;
              for (var i = 0; i < _nodes.indexOf(_selected.parentNode); i++) {
                var ch = _nodes[i].offsetHeight;
                _offset += ch;
              }
              setTimeout(function () {
                return content.scrollTop = _offset;
              }, isIE ? 210 : 10);
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
        _.setLoading(false);
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
   * @param {string} options.yesText Display text for the 'Yes' button
   * @param {string} options.noText Display text for the 'No' button
   * @param {boolean} options.selection Determines if dialog is for item selection
   * @param {boolean} options.confirmSelect Determines if (single) select dialog will show the OK_CANCEL buttons for confirmation
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

}));
