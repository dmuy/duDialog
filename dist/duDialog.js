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
      Object.defineProperty(target, descriptor.key, descriptor);
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

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$C =
    // eslint-disable-next-line es-x/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || Function('return this')();

  var shared$5 = {exports: {}};

  var global$B = global$C;

  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  var defineProperty$1 = Object.defineProperty;

  var setGlobal$3 = function (key, value) {
    try {
      defineProperty$1(global$B, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$B[key] = value;
    } return value;
  };

  var global$A = global$C;
  var setGlobal$2 = setGlobal$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$A[SHARED] || setGlobal$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$5.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.22.2',
    mode: 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var fails$j = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$i = fails$j;

  var functionBindNative = !fails$i(function () {
    // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$3 = functionBindNative;

  var FunctionPrototype$2 = Function.prototype;
  var bind$4 = FunctionPrototype$2.bind;
  var call$i = FunctionPrototype$2.call;
  var uncurryThis$i = NATIVE_BIND$3 && bind$4.bind(call$i, call$i);

  var functionUncurryThis = NATIVE_BIND$3 ? function (fn) {
    return fn && uncurryThis$i(fn);
  } : function (fn) {
    return fn && function () {
      return call$i.apply(fn, arguments);
    };
  };

  var global$z = global$C;

  var TypeError$d = global$z.TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$5 = function (it) {
    if (it == undefined) throw TypeError$d("Can't call method on " + it);
    return it;
  };

  var global$y = global$C;
  var requireObjectCoercible$4 = requireObjectCoercible$5;

  var Object$5 = global$y.Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$5 = function (argument) {
    return Object$5(requireObjectCoercible$4(argument));
  };

  var uncurryThis$h = functionUncurryThis;
  var toObject$4 = toObject$5;

  var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es-x/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$4(it), key);
  };

  var uncurryThis$g = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString$8 = uncurryThis$g(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$8(++id + postfix, 36);
  };

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$j = function (argument) {
    return typeof argument == 'function';
  };

  var global$x = global$C;
  var isCallable$i = isCallable$j;

  var aFunction = function (argument) {
    return isCallable$i(argument) ? argument : undefined;
  };

  var getBuiltIn$7 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$x[namespace]) : global$x[namespace] && global$x[namespace][method];
  };

  var getBuiltIn$6 = getBuiltIn$7;

  var engineUserAgent = getBuiltIn$6('navigator', 'userAgent') || '';

  var global$w = global$C;
  var userAgent = engineUserAgent;

  var process = global$w.process;
  var Deno = global$w.Deno;
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

  /* eslint-disable es-x/no-symbol -- required for testing */

  var V8_VERSION$1 = engineV8Version;
  var fails$h = fails$j;

  // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$h(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
  });

  /* eslint-disable es-x/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = nativeSymbol;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var global$v = global$C;
  var shared$4 = shared$5.exports;
  var hasOwn$a = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = nativeSymbol;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var WellKnownSymbolsStore = shared$4('wks');
  var Symbol$1 = global$v.Symbol;
  var symbolFor = Symbol$1 && Symbol$1['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$h = function (name) {
    if (!hasOwn$a(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
      var description = 'Symbol.' + name;
      if (NATIVE_SYMBOL && hasOwn$a(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
        WellKnownSymbolsStore[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
      }
    } return WellKnownSymbolsStore[name];
  };

  var wellKnownSymbol$g = wellKnownSymbol$h;

  var TO_STRING_TAG$5 = wellKnownSymbol$g('toStringTag');
  var test = {};

  test[TO_STRING_TAG$5] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var redefine$8 = {exports: {}};

  var fails$g = fails$j;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$g(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var objectDefineProperty = {};

  var isCallable$h = isCallable$j;

  var isObject$6 = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$h(it);
  };

  var global$u = global$C;
  var isObject$5 = isObject$6;

  var document$1 = global$u.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$5(document$1) && isObject$5(document$1.createElement);

  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$6 = descriptors;
  var fails$f = fails$j;
  var createElement = documentCreateElement$2;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$6 && !fails$f(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$5 = descriptors;
  var fails$e = fails$j;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$e(function () {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var global$t = global$C;
  var isObject$4 = isObject$6;

  var String$4 = global$t.String;
  var TypeError$c = global$t.TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$k = function (argument) {
    if (isObject$4(argument)) return argument;
    throw TypeError$c(String$4(argument) + ' is not an object');
  };

  var NATIVE_BIND$2 = functionBindNative;

  var call$h = Function.prototype.call;

  var functionCall = NATIVE_BIND$2 ? call$h.bind(call$h) : function () {
    return call$h.apply(call$h, arguments);
  };

  var uncurryThis$f = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$f({}.isPrototypeOf);

  var global$s = global$C;
  var getBuiltIn$5 = getBuiltIn$7;
  var isCallable$g = isCallable$j;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Object$4 = global$s.Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$5('Symbol');
    return isCallable$g($Symbol) && isPrototypeOf$3($Symbol.prototype, Object$4(it));
  };

  var global$r = global$C;

  var String$3 = global$r.String;

  var tryToString$3 = function (argument) {
    try {
      return String$3(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var global$q = global$C;
  var isCallable$f = isCallable$j;
  var tryToString$2 = tryToString$3;

  var TypeError$b = global$q.TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$8 = function (argument) {
    if (isCallable$f(argument)) return argument;
    throw TypeError$b(tryToString$2(argument) + ' is not a function');
  };

  var aCallable$7 = aCallable$8;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$8 = function (V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable$7(func);
  };

  var global$p = global$C;
  var call$g = functionCall;
  var isCallable$e = isCallable$j;
  var isObject$3 = isObject$6;

  var TypeError$a = global$p.TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$3(val = call$g(fn, input))) return val;
    if (isCallable$e(fn = input.valueOf) && !isObject$3(val = call$g(fn, input))) return val;
    if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$3(val = call$g(fn, input))) return val;
    throw TypeError$a("Can't convert object to primitive value");
  };

  var global$o = global$C;
  var call$f = functionCall;
  var isObject$2 = isObject$6;
  var isSymbol$1 = isSymbol$2;
  var getMethod$7 = getMethod$8;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$f = wellKnownSymbol$h;

  var TypeError$9 = global$o.TypeError;
  var TO_PRIMITIVE = wellKnownSymbol$f('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$2(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod$7(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$f(exoticToPrim, input, pref);
      if (!isObject$2(result) || isSymbol$1(result)) return result;
      throw TypeError$9("Can't convert object to primitive value");
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

  var global$n = global$C;
  var DESCRIPTORS$4 = descriptors;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
  var anObject$j = anObject$k;
  var toPropertyKey$2 = toPropertyKey$3;

  var TypeError$8 = global$n.TypeError;
  // eslint-disable-next-line es-x/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
    anObject$j(O);
    P = toPropertyKey$2(P);
    anObject$j(Attributes);
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
    anObject$j(O);
    P = toPropertyKey$2(P);
    anObject$j(Attributes);
    if (IE8_DOM_DEFINE$1) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError$8('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var createPropertyDescriptor$4 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var DESCRIPTORS$3 = descriptors;
  var definePropertyModule$3 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$4;

  var createNonEnumerableProperty$9 = DESCRIPTORS$3 ? function (object, key, value) {
    return definePropertyModule$3.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var uncurryThis$e = functionUncurryThis;
  var isCallable$d = isCallable$j;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$e(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$d(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$3 = store$1.inspectSource;

  var global$m = global$C;
  var isCallable$c = isCallable$j;
  var inspectSource$2 = inspectSource$3;

  var WeakMap$1 = global$m.WeakMap;

  var nativeWeakMap = isCallable$c(WeakMap$1) && /native code/.test(inspectSource$2(WeakMap$1));

  var shared$3 = shared$5.exports;
  var uid = uid$2;

  var keys = shared$3('keys');

  var sharedKey$3 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$4 = {};

  var NATIVE_WEAK_MAP = nativeWeakMap;
  var global$l = global$C;
  var uncurryThis$d = functionUncurryThis;
  var isObject$1 = isObject$6;
  var createNonEnumerableProperty$8 = createNonEnumerableProperty$9;
  var hasOwn$9 = hasOwnProperty_1;
  var shared$2 = sharedStore;
  var sharedKey$2 = sharedKey$3;
  var hiddenKeys$3 = hiddenKeys$4;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$7 = global$l.TypeError;
  var WeakMap = global$l.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$7('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared$2.state) {
    var store = shared$2.state || (shared$2.state = new WeakMap());
    var wmget = uncurryThis$d(store.get);
    var wmhas = uncurryThis$d(store.has);
    var wmset = uncurryThis$d(store.set);
    set = function (it, metadata) {
      if (wmhas(store, it)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store, it, metadata);
      return metadata;
    };
    get = function (it) {
      return wmget(store, it) || {};
    };
    has = function (it) {
      return wmhas(store, it);
    };
  } else {
    var STATE = sharedKey$2('state');
    hiddenKeys$3[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$9(it, STATE)) throw new TypeError$7(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$8(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$9(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$9(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var DESCRIPTORS$2 = descriptors;
  var hasOwn$8 = hasOwnProperty_1;

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$8(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var global$k = global$C;
  var isCallable$b = isCallable$j;
  var hasOwn$7 = hasOwnProperty_1;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$9;
  var setGlobal$1 = setGlobal$3;
  var inspectSource$1 = inspectSource$3;
  var InternalStateModule$3 = internalState;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;

  var getInternalState$4 = InternalStateModule$3.get;
  var enforceInternalState = InternalStateModule$3.enforce;
  var TEMPLATE = String(String).split('String');

  (redefine$8.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;
    if (isCallable$b(value)) {
      if (String(name).slice(0, 7) === 'Symbol(') {
        name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
      }
      if (!hasOwn$7(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
        createNonEnumerableProperty$7(value, 'name', name);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
      }
    }
    if (O === global$k) {
      if (simple) O[key] = value;
      else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty$7(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return isCallable$b(this) && getInternalState$4(this).source || inspectSource$1(this);
  });

  var uncurryThis$c = functionUncurryThis;

  var toString$7 = uncurryThis$c({}.toString);
  var stringSlice$4 = uncurryThis$c(''.slice);

  var classofRaw$1 = function (it) {
    return stringSlice$4(toString$7(it), 8, -1);
  };

  var global$j = global$C;
  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$a = isCallable$j;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$e = wellKnownSymbol$h;

  var TO_STRING_TAG$4 = wellKnownSymbol$e('toStringTag');
  var Object$3 = global$j.Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof$7 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object$3(it), TO_STRING_TAG$4)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable$a(O.callee) ? 'Arguments' : result;
  };

  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$6 = classof$7;

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$6(this) + ']';
  };

  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var redefine$7 = redefine$8.exports;
  var toString$6 = objectToString;

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    redefine$7(Object.prototype, 'toString', toString$6, { unsafe: true });
  }

  var objectGetOwnPropertyDescriptor = {};

  var objectPropertyIsEnumerable = {};

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$1(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var global$i = global$C;
  var uncurryThis$b = functionUncurryThis;
  var fails$d = fails$j;
  var classof$5 = classofRaw$1;

  var Object$2 = global$i.Object;
  var split = uncurryThis$b(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$d(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object$2('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$5(it) == 'String' ? split(it, '') : Object$2(it);
  } : Object$2;

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject$1 = indexedObject;
  var requireObjectCoercible$3 = requireObjectCoercible$5;

  var toIndexedObject$4 = function (it) {
    return IndexedObject$1(requireObjectCoercible$3(it));
  };

  var DESCRIPTORS$1 = descriptors;
  var call$e = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$2 = createPropertyDescriptor$4;
  var toIndexedObject$3 = toIndexedObject$4;
  var toPropertyKey$1 = toPropertyKey$3;
  var hasOwn$6 = hasOwnProperty_1;
  var IE8_DOM_DEFINE = ie8DomDefine;

  // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$1 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$3(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$6(O, P)) return createPropertyDescriptor$2(!call$e(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var objectGetOwnPropertyNames = {};

  var ceil = Math.ceil;
  var floor$1 = Math.floor;

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$4 = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- safe
    return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
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

  var uncurryThis$a = functionUncurryThis;
  var hasOwn$5 = hasOwnProperty_1;
  var toIndexedObject$1 = toIndexedObject$4;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$2 = hiddenKeys$4;

  var push$2 = uncurryThis$a([].push);

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
  // eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$1);
  };

  var objectGetOwnPropertySymbols = {};

  // eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

  var getBuiltIn$4 = getBuiltIn$7;
  var uncurryThis$9 = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject$i = anObject$k;

  var concat$1 = uncurryThis$9([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn$4('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject$i(it));
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

  var fails$c = fails$j;
  var isCallable$9 = isCallable$j;

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

  var global$h = global$C;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$9;
  var redefine$6 = redefine$8.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties = copyConstructorProperties$1;
  var isForced = isForced_1;

  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
    options.name        - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$h;
    } else if (STATIC) {
      target = global$h[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$h[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
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
      // extend global
      redefine$6(target, key, sourceProperty, options);
    }
  };

  // https://github.com/tc39/proposal-iterator-helpers
  // https://github.com/tc39/proposal-array-from-async
  var global$g = global$C;
  var call$d = functionCall;
  var aCallable$6 = aCallable$8;
  var anObject$h = anObject$k;
  var getBuiltIn$3 = getBuiltIn$7;
  var getMethod$6 = getMethod$8;

  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var TypeError$6 = global$g.TypeError;

  var createMethod$2 = function (TYPE) {
    var IS_TO_ARRAY = TYPE == 0;
    var IS_FOR_EACH = TYPE == 1;
    var IS_EVERY = TYPE == 2;
    var IS_SOME = TYPE == 3;
    return function (iterator, fn, target) {
      anObject$h(iterator);
      var Promise = getBuiltIn$3('Promise');
      var next = aCallable$6(iterator.next);
      var index = 0;
      var MAPPING = fn !== undefined;
      if (MAPPING || !IS_TO_ARRAY) aCallable$6(fn);

      return new Promise(function (resolve, reject) {
        var closeIteration = function (method, argument) {
          try {
            var returnMethod = getMethod$6(iterator, 'return');
            if (returnMethod) {
              return Promise.resolve(call$d(returnMethod, iterator)).then(function () {
                method(argument);
              }, function (error) {
                reject(error);
              });
            }
          } catch (error2) {
            return reject(error2);
          } method(argument);
        };

        var onError = function (error) {
          closeIteration(reject, error);
        };

        var loop = function () {
          try {
            if (IS_TO_ARRAY && (index > MAX_SAFE_INTEGER) && MAPPING) {
              throw TypeError$6('The allowed number of iterations has been exceeded');
            }
            Promise.resolve(anObject$h(call$d(next, iterator))).then(function (step) {
              try {
                if (anObject$h(step).done) {
                  if (IS_TO_ARRAY) {
                    target.length = index;
                    resolve(target);
                  } else resolve(IS_SOME ? false : IS_EVERY || undefined);
                } else {
                  var value = step.value;
                  if (MAPPING) {
                    Promise.resolve(IS_TO_ARRAY ? fn(value, index) : fn(value)).then(function (result) {
                      if (IS_FOR_EACH) {
                        loop();
                      } else if (IS_EVERY) {
                        result ? loop() : closeIteration(resolve, false);
                      } else if (IS_TO_ARRAY) {
                        target[index++] = result;
                        loop();
                      } else {
                        result ? closeIteration(resolve, IS_SOME || value) : loop();
                      }
                    }, onError);
                  } else {
                    target[index++] = value;
                    loop();
                  }
                }
              } catch (error) { onError(error); }
            }, onError);
          } catch (error2) { onError(error2); }
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

  // https://github.com/tc39/proposal-iterator-helpers
  var $$8 = _export;
  var $forEach$1 = asyncIteratorIteration.forEach;

  $$8({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
    forEach: function forEach(fn) {
      return $forEach$1(this, fn);
    }
  });

  var global$f = global$C;
  var isPrototypeOf$2 = objectIsPrototypeOf;

  var TypeError$5 = global$f.TypeError;

  var anInstance$1 = function (it, Prototype) {
    if (isPrototypeOf$2(Prototype, it)) return it;
    throw TypeError$5('Incorrect invocation');
  };

  var objectDefineProperties = {};

  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3;

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es-x/no-object-keys -- safe
  var objectKeys$1 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };

  var DESCRIPTORS = descriptors;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var definePropertyModule$1 = objectDefineProperty;
  var anObject$g = anObject$k;
  var toIndexedObject = toIndexedObject$4;
  var objectKeys = objectKeys$1;

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es-x/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$g(O);
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

  var anObject$f = anObject$k;
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
  // eslint-disable-next-line es-x/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject$f(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };

  var fails$b = fails$j;

  var correctPrototypeGetter = !fails$b(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var global$e = global$C;
  var hasOwn$3 = hasOwnProperty_1;
  var isCallable$8 = isCallable$j;
  var toObject$3 = toObject$5;
  var sharedKey = sharedKey$3;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

  var IE_PROTO = sharedKey('IE_PROTO');
  var Object$1 = global$e.Object;
  var ObjectPrototype = Object$1.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$1.getPrototypeOf : function (O) {
    var object = toObject$3(O);
    if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$8(constructor) && object instanceof constructor) {
      return constructor.prototype;
    } return object instanceof Object$1 ? ObjectPrototype : null;
  };

  var fails$a = fails$j;
  var isCallable$7 = isCallable$j;
  var getPrototypeOf$2 = objectGetPrototypeOf;
  var redefine$5 = redefine$8.exports;
  var wellKnownSymbol$d = wellKnownSymbol$h;

  var ITERATOR$4 = wellKnownSymbol$d('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$4, PrototypeOfArrayIteratorPrototype, arrayIterator;

  /* eslint-disable es-x/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$2(getPrototypeOf$2(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$4 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$4 == undefined || fails$a(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$4[ITERATOR$4].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$4 = {};

  // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$7(IteratorPrototype$4[ITERATOR$4])) {
    redefine$5(IteratorPrototype$4, ITERATOR$4, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$4,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  // https://github.com/tc39/proposal-iterator-helpers
  var $$7 = _export;
  var global$d = global$C;
  var anInstance = anInstance$1;
  var isCallable$6 = isCallable$j;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$9;
  var fails$9 = fails$j;
  var hasOwn$2 = hasOwnProperty_1;
  var wellKnownSymbol$c = wellKnownSymbol$h;
  var IteratorPrototype$3 = iteratorsCore.IteratorPrototype;

  var TO_STRING_TAG$3 = wellKnownSymbol$c('toStringTag');

  var NativeIterator = global$d.Iterator;

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

  $$7({ global: true, forced: FORCED }, {
    Iterator: IteratorConstructor
  });

  var uncurryThis$8 = functionUncurryThis;
  var aCallable$5 = aCallable$8;
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
  var Iterators$2 = iterators;
  var wellKnownSymbol$a = wellKnownSymbol$h;

  var ITERATOR$2 = wellKnownSymbol$a('iterator');

  var getIteratorMethod$3 = function (it) {
    if (it != undefined) return getMethod$5(it, ITERATOR$2)
      || getMethod$5(it, '@@iterator')
      || Iterators$2[classof$4(it)];
  };

  var global$c = global$C;
  var call$c = functionCall;
  var aCallable$4 = aCallable$8;
  var anObject$e = anObject$k;
  var tryToString$1 = tryToString$3;
  var getIteratorMethod$2 = getIteratorMethod$3;

  var TypeError$4 = global$c.TypeError;

  var getIterator$2 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
    if (aCallable$4(iteratorMethod)) return anObject$e(call$c(iteratorMethod, argument));
    throw TypeError$4(tryToString$1(argument) + ' is not iterable');
  };

  var call$b = functionCall;
  var anObject$d = anObject$k;
  var getMethod$4 = getMethod$8;

  var iteratorClose$2 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$d(iterator);
    try {
      innerResult = getMethod$4(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$b(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$d(innerResult);
    return value;
  };

  var global$b = global$C;
  var bind$2 = functionBindContext;
  var call$a = functionCall;
  var anObject$c = anObject$k;
  var tryToString = tryToString$3;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var lengthOfArrayLike$2 = lengthOfArrayLike$4;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var getIterator$1 = getIterator$2;
  var getIteratorMethod$1 = getIteratorMethod$3;
  var iteratorClose$1 = iteratorClose$2;

  var TypeError$3 = global$b.TypeError;

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate$1 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$2(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose$1(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$c(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      } return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$1(iterable);
      if (!iterFn) throw TypeError$3(tryToString(iterable) + ' is not iterable');
      // optimisation for array iterators
      if (isArrayIteratorMethod$1(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$2(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$1(ResultPrototype, result)) return result;
        } return new Result(false);
      }
      iterator = getIterator$1(iterable, iterFn);
    }

    next = iterator.next;
    while (!(step = call$a(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$1(ResultPrototype, result)) return result;
    } return new Result(false);
  };

  // https://github.com/tc39/proposal-iterator-helpers
  var $$6 = _export;
  var iterate = iterate$1;
  var anObject$b = anObject$k;

  $$6({ target: 'Iterator', proto: true, real: true, forced: true }, {
    forEach: function forEach(fn) {
      iterate(anObject$b(this), fn, { IS_ITERATOR: true });
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

  var classof$3 = classofRaw$1;

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es-x/no-array-isarray -- safe
  var isArray$1 = Array.isArray || function isArray(argument) {
    return classof$3(argument) == 'Array';
  };

  var uncurryThis$7 = functionUncurryThis;
  var fails$8 = fails$j;
  var isCallable$5 = isCallable$j;
  var classof$2 = classof$7;
  var getBuiltIn$1 = getBuiltIn$7;
  var inspectSource = inspectSource$3;

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

  var global$a = global$C;
  var isArray = isArray$1;
  var isConstructor$1 = isConstructor$2;
  var isObject = isObject$6;
  var wellKnownSymbol$9 = wellKnownSymbol$h;

  var SPECIES$2 = wellKnownSymbol$9('species');
  var Array$2 = global$a.Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor$1(C) && (C === Array$2 || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array$2 : C;
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

  var fails$7 = fails$j;

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
  // eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
  } : [].forEach;

  var global$9 = global$C;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$9;

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
      handlePrototype(global$9[COLLECTION_NAME] && global$9[COLLECTION_NAME].prototype);
    }
  }

  handlePrototype(DOMTokenListPrototype);

  var global$8 = global$C;
  var classof$1 = classof$7;

  var String$2 = global$8.String;

  var toString$5 = function (argument) {
    if (classof$1(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return String$2(argument);
  };

  var anObject$a = anObject$k;

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$a(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var fails$6 = fails$j;
  var global$7 = global$C;

  // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$7.RegExp;

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

  var fails$5 = fails$j;
  var global$6 = global$C;

  // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$6.RegExp;

  var regexpUnsupportedDotAll = fails$5(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var fails$4 = fails$j;
  var global$5 = global$C;

  // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$5.RegExp;

  var regexpUnsupportedNcg = fails$4(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' ||
      'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$9 = functionCall;
  var uncurryThis$5 = functionUncurryThis;
  var toString$4 = toString$5;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var shared$1 = shared$5.exports;
  var create$3 = objectCreate;
  var getInternalState$3 = internalState.get;
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
    call$9(nativeExec, re1, 'a');
    call$9(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$3(re);
      var str = toString$4(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$9(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = call$9(regexpFlags, re);
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

      match = call$9(nativeExec, sticky ? reCopy : re, strCopy);

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
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        call$9(nativeReplace, match[0], reCopy, function () {
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

  var uncurryThis$4 = functionUncurryThis;
  var redefine$4 = redefine$8.exports;
  var regexpExec$1 = regexpExec$2;
  var fails$3 = fails$j;
  var wellKnownSymbol$8 = wellKnownSymbol$h;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$9;

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

      redefine$4(String.prototype, KEY, methods[0]);
      redefine$4(RegExpPrototype$2, SYMBOL, methods[1]);
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

  var global$4 = global$C;
  var call$8 = functionCall;
  var anObject$9 = anObject$k;
  var isCallable$4 = isCallable$j;
  var classof = classofRaw$1;
  var regexpExec = regexpExec$2;

  var TypeError$2 = global$4.TypeError;

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$4(exec)) {
      var result = call$8(exec, R, S);
      if (result !== null) anObject$9(result);
      return result;
    }
    if (classof(R) === 'RegExp') return call$8(regexpExec, R, S);
    throw TypeError$2('RegExp#exec called on incompatible receiver');
  };

  var call$7 = functionCall;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var anObject$8 = anObject$k;
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
        var matcher = regexp == undefined ? undefined : getMethod$3(regexp, MATCH);
        return matcher ? call$7(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
      function (string) {
        var rx = anObject$8(this);
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

  var anObject$7 = anObject$k;
  var iteratorClose = iteratorClose$2;

  // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$2 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$7(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
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

  var global$3 = global$C;
  var bind = functionBindContext;
  var call$6 = functionCall;
  var toObject$1 = toObject$5;
  var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$2;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var isConstructor = isConstructor$2;
  var lengthOfArrayLike = lengthOfArrayLike$4;
  var createProperty = createProperty$1;
  var getIterator = getIterator$2;
  var getIteratorMethod = getIteratorMethod$3;

  var Array$1 = global$3.Array;

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
    if (iteratorMethod && !(this == Array$1 && isArrayIteratorMethod(iteratorMethod))) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (;!(step = call$6(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing$1(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike(O);
      result = IS_CONSTRUCTOR ? new this(length) : Array$1(length);
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
    // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
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
    // eslint-disable-next-line es-x/no-array-from -- required for testing
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

  var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$2(IteratorPrototype$2, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
    setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$1[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var global$2 = global$C;
  var isCallable$3 = isCallable$j;

  var String$1 = global$2.String;
  var TypeError$1 = global$2.TypeError;

  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$3(argument)) return argument;
    throw TypeError$1("Can't set " + String$1(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */

  var uncurryThis$2 = functionUncurryThis;
  var anObject$6 = anObject$k;
  var aPossiblePrototype = aPossiblePrototype$1;

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es-x/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
      setter = uncurryThis$2(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject$6(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var $$3 = _export;
  var call$5 = functionCall;
  var FunctionName = functionName;
  var isCallable$2 = isCallable$j;
  var createIteratorConstructor = createIteratorConstructor$1;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag = setToStringTag$2;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$9;
  var redefine$3 = redefine$8.exports;
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

  var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
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
            redefine$3(CurrentIteratorPrototype, ITERATOR, returnThis);
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
        defaultIterator = function values() { return call$5(nativeIterator, this); };
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
          redefine$3(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$3({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    // define iterator
    if (IterablePrototype[ITERATOR] !== defaultIterator) {
      redefine$3(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
    }
    Iterators[NAME] = defaultIterator;

    return methods;
  };

  var charAt$1 = stringMultibyte.charAt;
  var toString$1 = toString$5;
  var InternalStateModule$2 = internalState;
  var defineIterator = defineIterator$1;

  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalState$2 = InternalStateModule$2.getterFor(STRING_ITERATOR);

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
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return { value: undefined, done: true };
    point = charAt$1(string, index);
    state.index += point.length;
    return { value: point, done: false };
  });

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype = Function.prototype;
  var apply$3 = FunctionPrototype.apply;
  var call$4 = FunctionPrototype.call;

  // eslint-disable-next-line es-x/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$4.bind(apply$3) : function () {
    return call$4.apply(apply$3, arguments);
  });

  var uncurryThis$1 = functionUncurryThis;
  var toObject = toObject$5;

  var floor = Math.floor;
  var charAt = uncurryThis$1(''.charAt);
  var replace = uncurryThis$1(''.replace);
  var stringSlice$1 = uncurryThis$1(''.slice);
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

  var apply$2 = functionApply;
  var call$3 = functionCall;
  var uncurryThis = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var fails$2 = fails$j;
  var anObject$5 = anObject$k;
  var isCallable$1 = isCallable$j;
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
        var replacer = searchValue == undefined ? undefined : getMethod$2(searchValue, REPLACE);
        return replacer
          ? call$3(replacer, searchValue, O, replaceValue)
          : call$3(nativeReplace, toString(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (string, replaceValue) {
        var rx = anObject$5(this);
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
            var replacement = toString(apply$2(replaceValue, undefined, replacerArgs));
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

  var fails$1 = fails$j;
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

  var redefine$2 = redefine$8.exports;

  var redefineAll$2 = function (target, src, options) {
    for (var key in src) redefine$2(target, key, src[key], options);
    return target;
  };

  var global$1 = global$C;
  var shared = sharedStore;
  var isCallable = isCallable$j;
  var getPrototypeOf = objectGetPrototypeOf;
  var redefine$1 = redefine$8.exports;
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
    redefine$1(AsyncIteratorPrototype$1, ASYNC_ITERATOR, function () {
      return this;
    });
  }

  var asyncIteratorPrototype = AsyncIteratorPrototype$1;

  var call$2 = functionCall;
  var aCallable$3 = aCallable$8;
  var anObject$4 = anObject$k;
  var create$1 = objectCreate;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$9;
  var redefineAll$1 = redefineAll$2;
  var wellKnownSymbol$1 = wellKnownSymbol$h;
  var InternalStateModule$1 = internalState;
  var getBuiltIn = getBuiltIn$7;
  var getMethod$1 = getMethod$8;
  var AsyncIteratorPrototype = asyncIteratorPrototype;

  var Promise$1 = getBuiltIn('Promise');

  var ASYNC_ITERATOR_PROXY = 'AsyncIteratorProxy';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalState$1 = InternalStateModule$1.getterFor(ASYNC_ITERATOR_PROXY);

  var TO_STRING_TAG$1 = wellKnownSymbol$1('toStringTag');

  var asyncIteratorCreateProxy = function (nextHandler, IS_ITERATOR) {
    var AsyncIteratorProxy = function AsyncIterator(state) {
      state.type = ASYNC_ITERATOR_PROXY;
      state.next = aCallable$3(state.iterator.next);
      state.done = false;
      state.ignoreArgument = !IS_ITERATOR;
      setInternalState$1(this, state);
    };

    AsyncIteratorProxy.prototype = redefineAll$1(create$1(AsyncIteratorPrototype), {
      next: function next(arg) {
        var that = this;
        var hasArgument = !!arguments.length;
        return new Promise$1(function (resolve) {
          var state = getInternalState$1(that);
          var args = hasArgument ? [state.ignoreArgument ? undefined : arg] : IS_ITERATOR ? [] : [undefined];
          state.ignoreArgument = false;
          resolve(state.done ? { done: true, value: undefined } : anObject$4(call$2(nextHandler, state, Promise$1, args)));
        });
      },
      'return': function (value) {
        var that = this;
        return new Promise$1(function (resolve, reject) {
          var state = getInternalState$1(that);
          var iterator = state.iterator;
          state.done = true;
          var $$return = getMethod$1(iterator, 'return');
          if ($$return === undefined) return resolve({ done: true, value: value });
          Promise$1.resolve(call$2($$return, iterator, value)).then(function (result) {
            anObject$4(result);
            resolve({ done: true, value: value });
          }, reject);
        });
      },
      'throw': function (value) {
        var that = this;
        return new Promise$1(function (resolve, reject) {
          var state = getInternalState$1(that);
          var iterator = state.iterator;
          state.done = true;
          var $$throw = getMethod$1(iterator, 'throw');
          if ($$throw === undefined) return reject(value);
          resolve(call$2($$throw, iterator, value));
        });
      }
    });

    if (!IS_ITERATOR) {
      createNonEnumerableProperty$1(AsyncIteratorProxy.prototype, TO_STRING_TAG$1, 'Generator');
    }

    return AsyncIteratorProxy;
  };

  // https://github.com/tc39/proposal-iterator-helpers
  var $$1 = _export;
  var apply$1 = functionApply;
  var aCallable$2 = aCallable$8;
  var anObject$3 = anObject$k;
  var createAsyncIteratorProxy = asyncIteratorCreateProxy;

  var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise, args) {
    var state = this;
    var filterer = state.filterer;

    return new Promise(function (resolve, reject) {
      var loop = function () {
        try {
          Promise.resolve(anObject$3(apply$1(state.next, state.iterator, args))).then(function (step) {
            try {
              if (anObject$3(step).done) {
                state.done = true;
                resolve({ done: true, value: undefined });
              } else {
                var value = step.value;
                Promise.resolve(filterer(value)).then(function (selected) {
                  selected ? resolve({ done: false, value: value }) : loop();
                }, reject);
              }
            } catch (err) { reject(err); }
          }, reject);
        } catch (error) { reject(error); }
      };

      loop();
    });
  });

  $$1({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
    filter: function filter(filterer) {
      return new AsyncIteratorProxy({
        iterator: anObject$3(this),
        filterer: aCallable$2(filterer)
      });
    }
  });

  var call$1 = functionCall;
  var aCallable$1 = aCallable$8;
  var anObject$2 = anObject$k;
  var create = objectCreate;
  var createNonEnumerableProperty = createNonEnumerableProperty$9;
  var redefineAll = redefineAll$2;
  var wellKnownSymbol = wellKnownSymbol$h;
  var InternalStateModule = internalState;
  var getMethod = getMethod$8;
  var IteratorPrototype = iteratorsCore.IteratorPrototype;

  var ITERATOR_PROXY = 'IteratorProxy';
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(ITERATOR_PROXY);

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');

  var iteratorCreateProxy = function (nextHandler, IS_ITERATOR) {
    var IteratorProxy = function Iterator(state) {
      state.type = ITERATOR_PROXY;
      state.next = aCallable$1(state.iterator.next);
      state.done = false;
      state.ignoreArg = !IS_ITERATOR;
      setInternalState(this, state);
    };

    IteratorProxy.prototype = redefineAll(create(IteratorPrototype), {
      next: function next(arg) {
        var state = getInternalState(this);
        var args = arguments.length ? [state.ignoreArg ? undefined : arg] : IS_ITERATOR ? [] : [undefined];
        state.ignoreArg = false;
        var result = state.done ? undefined : call$1(nextHandler, state, args);
        return { done: state.done, value: result };
      },
      'return': function (value) {
        var state = getInternalState(this);
        var iterator = state.iterator;
        state.done = true;
        var $$return = getMethod(iterator, 'return');
        return { done: true, value: $$return ? anObject$2(call$1($$return, iterator, value)).value : value };
      },
      'throw': function (value) {
        var state = getInternalState(this);
        var iterator = state.iterator;
        state.done = true;
        var $$throw = getMethod(iterator, 'throw');
        if ($$throw) return call$1($$throw, iterator, value);
        throw value;
      }
    });

    if (!IS_ITERATOR) {
      createNonEnumerableProperty(IteratorProxy.prototype, TO_STRING_TAG, 'Generator');
    }

    return IteratorProxy;
  };

  // https://github.com/tc39/proposal-iterator-helpers
  var $ = _export;
  var apply = functionApply;
  var aCallable = aCallable$8;
  var anObject$1 = anObject$k;
  var createIteratorProxy = iteratorCreateProxy;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$2;

  var IteratorProxy = createIteratorProxy(function (args) {
    var iterator = this.iterator;
    var filterer = this.filterer;
    var next = this.next;
    var result, done, value;
    while (true) {
      result = anObject$1(apply(next, iterator, args));
      done = this.done = !!result.done;
      if (done) return;
      value = result.value;
      if (callWithSafeIterationClosing(iterator, filterer, value)) return value;
    }
  });

  $({ target: 'Iterator', proto: true, real: true, forced: true }, {
    filter: function filter(filterer) {
      return new IteratorProxy({
        iterator: anObject$1(this),
        filterer: aCallable(filterer)
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
  var redefine = redefine$8.exports;
  var anObject = anObject$k;
  var $toString = toString$5;
  var fails = fails$j;
  var getRegExpFlags = regexpGetFlags;

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var n$ToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return n$ToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
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
          } // Yes button


          if (e.target.matches('.yes-action')) {
            if (cbs && cbs.yesClick) {
              cbs.yesClick.apply(_, e);
              if (_.config.hideOnAction) _.hide();
            } else _.hide();
          } // No button


          if (e.target.matches('.no-action')) {
            if (cbs && cbs.noClick) {
              cbs.noClick.apply(_, e);
              if (_.config.hideOnAction) _.hide();
            } else _.hide();
          } // CANCEL button


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
    }); // dialog loader

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
          _.dialog.classList.add('dlg--open'); // scroll to selected item (for single selection only)


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
