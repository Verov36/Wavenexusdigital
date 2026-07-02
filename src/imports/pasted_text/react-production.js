function Vx(t, n) {
    for (var i = 0; i < n.length; i++) {
        const o = n[i];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const l in o)
                if (l !== "default" && !(l in t)) {
                    const u = Object.getOwnPropertyDescriptor(o, l);
                    u && Object.defineProperty(t, l, u.get ? u : {
                        enumerable: !0,
                        get: () => o[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        o(l);
    new MutationObserver(l => {
        for (const u of l)
            if (u.type === "childList")
                for (const c of u.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && o(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(l) {
        const u = {};
        return l.integrity && (u.integrity = l.integrity),
        l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? u.credentials = "include" : l.crossOrigin === "anonymous" ? u.credentials = "omit" : u.credentials = "same-origin",
        u
    }
    function o(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const u = i(l);
        fetch(l.href, u)
    }
}
)();
function Tg(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var Zu = {
    exports: {}
}
  , Zs = {}
  , ec = {
    exports: {}
}
  , _e = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gp;
function Ox() {
    if (gp)
        return _e;
    gp = 1;
    var t = Symbol.for("react.element")
      , n = Symbol.for("react.portal")
      , i = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , l = Symbol.for("react.profiler")
      , u = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , f = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , y = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , g = Symbol.iterator;
    function w(j) {
        return j === null || typeof j != "object" ? null : (j = g && j[g] || j["@@iterator"],
        typeof j == "function" ? j : null)
    }
    var b = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , C = Object.assign
      , M = {};
    function N(j, I, ie) {
        this.props = j,
        this.context = I,
        this.refs = M,
        this.updater = ie || b
    }
    N.prototype.isReactComponent = {},
    N.prototype.setState = function(j, I) {
        if (typeof j != "object" && typeof j != "function" && j != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, j, I, "setState")
    }
    ,
    N.prototype.forceUpdate = function(j) {
        this.updater.enqueueForceUpdate(this, j, "forceUpdate")
    }
    ;
    function A() {}
    A.prototype = N.prototype;
    function L(j, I, ie) {
        this.props = j,
        this.context = I,
        this.refs = M,
        this.updater = ie || b
    }
    var B = L.prototype = new A;
    B.constructor = L,
    C(B, N.prototype),
    B.isPureReactComponent = !0;
    var W = Array.isArray
      , U = Object.prototype.hasOwnProperty
      , se = {
        current: null
    }
      , D = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function H(j, I, ie) {
        var me, we = {}, ue = null, ze = null;
        if (I != null)
            for (me in I.ref !== void 0 && (ze = I.ref),
            I.key !== void 0 && (ue = "" + I.key),
            I)
                U.call(I, me) && !D.hasOwnProperty(me) && (we[me] = I[me]);
        var Pe = arguments.length - 2;
        if (Pe === 1)
            we.children = ie;
        else if (1 < Pe) {
            for (var Ie = Array(Pe), lt = 0; lt < Pe; lt++)
                Ie[lt] = arguments[lt + 2];
            we.children = Ie
        }
        if (j && j.defaultProps)
            for (me in Pe = j.defaultProps,
            Pe)
                we[me] === void 0 && (we[me] = Pe[me]);
        return {
            $$typeof: t,
            type: j,
            key: ue,
            ref: ze,
            props: we,
            _owner: se.current
        }
    }
    function te(j, I) {
        return {
            $$typeof: t,
            type: j.type,
            key: I,
            ref: j.ref,
            props: j.props,
            _owner: j._owner
        }
    }
    function X(j) {
        return typeof j == "object" && j !== null && j.$$typeof === t
    }
    function ae(j) {
        var I = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + j.replace(/[=:]/g, function(ie) {
            return I[ie]
        })
    }
    var ke = /\/+/g;
    function Ae(j, I) {
        return typeof j == "object" && j !== null && j.key != null ? ae("" + j.key) : I.toString(36)
    }
    function je(j, I, ie, me, we) {
        var ue = typeof j;
        (ue === "undefined" || ue === "boolean") && (j = null);
        var ze = !1;
        if (j === null)
            ze = !0;
        else
            switch (ue) {
            case "string":
            case "number":
                ze = !0;
                break;
            case "object":
                switch (j.$$typeof) {
                case t:
                case n:
                    ze = !0
                }
            }
        if (ze)
            return ze = j,
            we = we(ze),
            j = me === "" ? "." + Ae(ze, 0) : me,
            W(we) ? (ie = "",
            j != null && (ie = j.replace(ke, "$&/") + "/"),
            je(we, I, ie, "", function(lt) {
                return lt
            })) : we != null && (X(we) && (we = te(we, ie + (!we.key || ze && ze.key === we.key ? "" : ("" + we.key).replace(ke, "$&/") + "/") + j)),
            I.push(we)),
            1;
        if (ze = 0,
        me = me === "" ? "." : me + ":",
        W(j))
            for (var Pe = 0; Pe < j.length; Pe++) {
                ue = j[Pe];
                var Ie = me + Ae(ue, Pe);
                ze += je(ue, I, ie, Ie, we)
            }
        else if (Ie = w(j),
        typeof Ie == "function")
            for (j = Ie.call(j),
            Pe = 0; !(ue = j.next()).done; )
                ue = ue.value,
                Ie = me + Ae(ue, Pe++),
                ze += je(ue, I, ie, Ie, we);
        else if (ue === "object")
            throw I = String(j),
            Error("Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead.");
        return ze
    }
    function Re(j, I, ie) {
        if (j == null)
            return j;
        var me = []
          , we = 0;
        return je(j, me, "", "", function(ue) {
            return I.call(ie, ue, we++)
        }),
        me
    }
    function ne(j) {
        if (j._status === -1) {
            var I = j._result;
            I = I(),
            I.then(function(ie) {
                (j._status === 0 || j._status === -1) && (j._status = 1,
                j._result = ie)
            }, function(ie) {
                (j._status === 0 || j._status === -1) && (j._status = 2,
                j._result = ie)
            }),
            j._status === -1 && (j._status = 0,
            j._result = I)
        }
        if (j._status === 1)
            return j._result.default;
        throw j._result
    }
    var be = {
        current: null
    }
      , F = {
        transition: null
    }
      , q = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: F,
        ReactCurrentOwner: se
    };
    function K() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return _e.Children = {
        map: Re,
        forEach: function(j, I, ie) {
            Re(j, function() {
                I.apply(this, arguments)
            }, ie)
        },
        count: function(j) {
            var I = 0;
            return Re(j, function() {
                I++
            }),
            I
        },
        toArray: function(j) {
            return Re(j, function(I) {
                return I
            }) || []
        },
        only: function(j) {
            if (!X(j))
                throw Error("React.Children.only expected to receive a single React element child.");
            return j
        }
    },
    _e.Component = N,
    _e.Fragment = i,
    _e.Profiler = l,
    _e.PureComponent = L,
    _e.StrictMode = o,
    _e.Suspense = m,
    _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q,
    _e.act = K,
    _e.cloneElement = function(j, I, ie) {
        if (j == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + j + ".");
        var me = C({}, j.props)
          , we = j.key
          , ue = j.ref
          , ze = j._owner;
        if (I != null) {
            if (I.ref !== void 0 && (ue = I.ref,
            ze = se.current),
            I.key !== void 0 && (we = "" + I.key),
            j.type && j.type.defaultProps)
                var Pe = j.type.defaultProps;
            for (Ie in I)
                U.call(I, Ie) && !D.hasOwnProperty(Ie) && (me[Ie] = I[Ie] === void 0 && Pe !== void 0 ? Pe[Ie] : I[Ie])
        }
        var Ie = arguments.length - 2;
        if (Ie === 1)
            me.children = ie;
        else if (1 < Ie) {
            Pe = Array(Ie);
            for (var lt = 0; lt < Ie; lt++)
                Pe[lt] = arguments[lt + 2];
            me.children = Pe
        }
        return {
            $$typeof: t,
            type: j.type,
            key: we,
            ref: ue,
            props: me,
            _owner: ze
        }
    }
    ,
    _e.createContext = function(j) {
        return j = {
            $$typeof: c,
            _currentValue: j,
            _currentValue2: j,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        j.Provider = {
            $$typeof: u,
            _context: j
        },
        j.Consumer = j
    }
    ,
    _e.createElement = H,
    _e.createFactory = function(j) {
        var I = H.bind(null, j);
        return I.type = j,
        I
    }
    ,
    _e.createRef = function() {
        return {
            current: null
        }
    }
    ,
    _e.forwardRef = function(j) {
        return {
            $$typeof: f,
            render: j
        }
    }
    ,
    _e.isValidElement = X,
    _e.lazy = function(j) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: j
            },
            _init: ne
        }
    }
    ,
    _e.memo = function(j, I) {
        return {
            $$typeof: y,
            type: j,
            compare: I === void 0 ? null : I
        }
    }
    ,
    _e.startTransition = function(j) {
        var I = F.transition;
        F.transition = {};
        try {
            j()
        } finally {
            F.transition = I
        }
    }
    ,
    _e.unstable_act = K,
    _e.useCallback = function(j, I) {
        return be.current.useCallback(j, I)
    }
    ,
    _e.useContext = function(j) {
        return be.current.useContext(j)
    }
    ,
    _e.useDebugValue = function() {}
    ,
    _e.useDeferredValue = function(j) {
        return be.current.useDeferredValue(j)
    }
    ,
    _e.useEffect = function(j, I) {
        return be.current.useEffect(j, I)
    }
    ,
    _e.useId = function() {
        return be.current.useId()
    }
    ,
    _e.useImperativeHandle = function(j, I, ie) {
        return be.current.useImperativeHandle(j, I, ie)
    }
    ,
    _e.useInsertionEffect = function(j, I) {
        return be.current.useInsertionEffect(j, I)
    }
    ,
    _e.useLayoutEffect = function(j, I) {
        return be.current.useLayoutEffect(j, I)
    }
    ,
    _e.useMemo = function(j, I) {
        return be.current.useMemo(j, I)
    }
    ,
    _e.useReducer = function(j, I, ie) {
        return be.current.useReducer(j, I, ie)
    }
    ,
    _e.useRef = function(j) {
        return be.current.useRef(j)
    }
    ,
    _e.useState = function(j) {
        return be.current.useState(j)
    }
    ,
    _e.useSyncExternalStore = function(j, I, ie) {
        return be.current.useSyncExternalStore(j, I, ie)
    }
    ,
    _e.useTransition = function() {
        return be.current.useTransition()
    }
    ,
    _e.version = "18.3.1",
    _e
}
var yp;
function rd() {
    return yp || (yp = 1,
    ec.exports = Ox()),
    ec.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vp;
function Bx() {
    if (vp)
        return Zs;
    vp = 1;
    var t = rd()
      , n = Symbol.for("react.element")
      , i = Symbol.for("react.fragment")
      , o = Object.prototype.hasOwnProperty
      , l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(f, m, y) {
        var v, g = {}, w = null, b = null;
        y !== void 0 && (w = "" + y),
        m.key !== void 0 && (w = "" + m.key),
        m.ref !== void 0 && (b = m.ref);
        for (v in m)
            o.call(m, v) && !u.hasOwnProperty(v) && (g[v] = m[v]);
        if (f && f.defaultProps)
            for (v in m = f.defaultProps,
            m)
                g[v] === void 0 && (g[v] = m[v]);
        return {
            $$typeof: n,
            type: f,
            key: w,
            ref: b,
            props: g,
            _owner: l.current
        }
    }
    return Zs.Fragment = i,
    Zs.jsx = c,
    Zs.jsxs = c,
    Zs
}
var xp;
function Ix() {
    return xp || (xp = 1,
    Zu.exports = Bx()),
    Zu.exports
}
var p = Ix()
  , Aa = {}
  , tc = {
    exports: {}
}
  , rn = {}
  , nc = {
    exports: {}
}
  , rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wp;
function Fx() {
    return wp || (wp = 1,
    (function(t) {
        function n(F, q) {
            var K = F.length;
            F.push(q);
            e: for (; 0 < K; ) {
                var j = K - 1 >>> 1
                  , I = F[j];
                if (0 < l(I, q))
                    F[j] = q,
                    F[K] = I,
                    K = j;
                else
                    break e
            }
        }
        function i(F) {
            return F.length === 0 ? null : F[0]
        }
        function o(F) {
            if (F.length === 0)
                return null;
            var q = F[0]
              , K = F.pop();
            if (K !== q) {
                F[0] = K;
                e: for (var j = 0, I = F.length, ie = I >>> 1; j < ie; ) {
                    var me = 2 * (j + 1) - 1
                      , we = F[me]
                      , ue = me + 1
                      , ze = F[ue];
                    if (0 > l(we, K))
                        ue < I && 0 > l(ze, we) ? (F[j] = ze,
                        F[ue] = K,
                        j = ue) : (F[j] = we,
                        F[me] = K,
                        j = me);
                    else if (ue < I && 0 > l(ze, K))
                        F[j] = ze,
                        F[ue] = K,
                        j = ue;
                    else
                        break e
                }
            }
            return q
        }
        function l(F, q) {
            var K = F.sortIndex - q.sortIndex;
            return K !== 0 ? K : F.id - q.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var u = performance;
            t.unstable_now = function() {
                return u.now()
            }
        } else {
            var c = Date
              , f = c.now();
            t.unstable_now = function() {
                return c.now() - f
            }
        }
        var m = []
          , y = []
          , v = 1
          , g = null
          , w = 3
          , b = !1
          , C = !1
          , M = !1
          , N = typeof setTimeout == "function" ? setTimeout : null
          , A = typeof clearTimeout == "function" ? clearTimeout : null
          , L = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function B(F) {
            for (var q = i(y); q !== null; ) {
                if (q.callback === null)
                    o(y);
                else if (q.startTime <= F)
                    o(y),
                    q.sortIndex = q.expirationTime,
                    n(m, q);
                else
                    break;
                q = i(y)
            }
        }
        function W(F) {
            if (M = !1,
            B(F),
            !C)
                if (i(m) !== null)
                    C = !0,
                    ne(U);
                else {
                    var q = i(y);
                    q !== null && be(W, q.startTime - F)
                }
        }
        function U(F, q) {
            C = !1,
            M && (M = !1,
            A(H),
            H = -1),
            b = !0;
            var K = w;
            try {
                for (B(q),
                g = i(m); g !== null && (!(g.expirationTime > q) || F && !ae()); ) {
                    var j = g.callback;
                    if (typeof j == "function") {
                        g.callback = null,
                        w = g.priorityLevel;
                        var I = j(g.expirationTime <= q);
                        q = t.unstable_now(),
                        typeof I == "function" ? g.callback = I : g === i(m) && o(m),
                        B(q)
                    } else
                        o(m);
                    g = i(m)
                }
                if (g !== null)
                    var ie = !0;
                else {
                    var me = i(y);
                    me !== null && be(W, me.startTime - q),
                    ie = !1
                }
                return ie
            } finally {
                g = null,
                w = K,
                b = !1
            }
        }
        var se = !1
          , D = null
          , H = -1
          , te = 5
          , X = -1;
        function ae() {
            return !(t.unstable_now() - X < te)
        }
        function ke() {
            if (D !== null) {
                var F = t.unstable_now();
                X = F;
                var q = !0;
                try {
                    q = D(!0, F)
                } finally {
                    q ? Ae() : (se = !1,
                    D = null)
                }
            } else
                se = !1
        }
        var Ae;
        if (typeof L == "function")
            Ae = function() {
                L(ke)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var je = new MessageChannel
              , Re = je.port2;
            je.port1.onmessage = ke,
            Ae = function() {
                Re.postMessage(null)
            }
        } else
            Ae = function() {
                N(ke, 0)
            }
            ;
        function ne(F) {
            D = F,
            se || (se = !0,
            Ae())
        }
        function be(F, q) {
            H = N(function() {
                F(t.unstable_now())
            }, q)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(F) {
            F.callback = null
        }
        ,
        t.unstable_continueExecution = function() {
            C || b || (C = !0,
            ne(U))
        }
        ,
        t.unstable_forceFrameRate = function(F) {
            0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < F ? Math.floor(1e3 / F) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return w
        }
        ,
        t.unstable_getFirstCallbackNode = function() {
            return i(m)
        }
        ,
        t.unstable_next = function(F) {
            switch (w) {
            case 1:
            case 2:
            case 3:
                var q = 3;
                break;
            default:
                q = w
            }
            var K = w;
            w = q;
            try {
                return F()
            } finally {
                w = K
            }
        }
        ,
        t.unstable_pauseExecution = function() {}
        ,
        t.unstable_requestPaint = function() {}
        ,
        t.unstable_runWithPriority = function(F, q) {
            switch (F) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                F = 3
            }
            var K = w;
            w = F;
            try {
                return q()
            } finally {
                w = K
            }
        }
        ,
        t.unstable_scheduleCallback = function(F, q, K) {
            var j = t.unstable_now();
            switch (typeof K == "object" && K !== null ? (K = K.delay,
            K = typeof K == "number" && 0 < K ? j + K : j) : K = j,
            F) {
            case 1:
                var I = -1;
                break;
            case 2:
                I = 250;
                break;
            case 5:
                I = 1073741823;
                break;
            case 4:
                I = 1e4;
                break;
            default:
                I = 5e3
            }
            return I = K + I,
            F = {
                id: v++,
                callback: q,
                priorityLevel: F,
                startTime: K,
                expirationTime: I,
                sortIndex: -1
            },
            K > j ? (F.sortIndex = K,
            n(y, F),
            i(m) === null && F === i(y) && (M ? (A(H),
            H = -1) : M = !0,
            be(W, K - j))) : (F.sortIndex = I,
            n(m, F),
            C || b || (C = !0,
            ne(U))),
            F
        }
        ,
        t.unstable_shouldYield = ae,
        t.unstable_wrapCallback = function(F) {
            var q = w;
            return function() {
                var K = w;
                w = q;
                try {
                    return F.apply(this, arguments)
                } finally {
                    w = K
                }
            }
        }
    }
    )(rc)),
    rc
}
var bp;
function Wx() {
    return bp || (bp = 1,
    nc.exports = Fx()),
    nc.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sp;
function Ux() {
    if (Sp)
        return rn;
    Sp = 1;
    var t = rd()
      , n = Wx();
    function i(e) {
        for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, s = 1; s < arguments.length; s++)
            r += "&args[]=" + encodeURIComponent(arguments[s]);
        return "Minified React error #" + e + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var o = new Set
      , l = {};
    function u(e, r) {
        c(e, r),
        c(e + "Capture", r)
    }
    function c(e, r) {
        for (l[e] = r,
        e = 0; e < r.length; e++)
            o.add(r[e])
    }
    var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , m = Object.prototype.hasOwnProperty
      , y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , v = {}
      , g = {};
    function w(e) {
        return m.call(g, e) ? !0 : m.call(v, e) ? !1 : y.test(e) ? g[e] = !0 : (v[e] = !0,
        !1)
    }
    function b(e, r, s, a) {
        if (s !== null && s.type === 0)
            return !1;
        switch (typeof r) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return a ? !1 : s !== null ? !s.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function C(e, r, s, a) {
        if (r === null || typeof r > "u" || b(e, r, s, a))
            return !0;
        if (a)
            return !1;
        if (s !== null)
            switch (s.type) {
            case 3:
                return !r;
            case 4:
                return r === !1;
            case 5:
                return isNaN(r);
            case 6:
                return isNaN(r) || 1 > r
            }
        return !1
    }
    function M(e, r, s, a, d, h, x) {
        this.acceptsBooleans = r === 2 || r === 3 || r === 4,
        this.attributeName = a,
        this.attributeNamespace = d,
        this.mustUseProperty = s,
        this.propertyName = e,
        this.type = r,
        this.sanitizeURL = h,
        this.removeEmptyString = x
    }
    var N = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        N[e] = new M(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var r = e[0];
        N[r] = new M(r,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        N[e] = new M(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        N[e] = new M(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        N[e] = new M(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        N[e] = new M(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        N[e] = new M(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        N[e] = new M(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        N[e] = new M(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var A = /[\-:]([a-z])/g;
    function L(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var r = e.replace(A, L);
        N[r] = new M(r,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var r = e.replace(A, L);
        N[r] = new M(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var r = e.replace(A, L);
        N[r] = new M(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        N[e] = new M(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    N.xlinkHref = new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        N[e] = new M(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function B(e, r, s, a) {
        var d = N.hasOwnProperty(r) ? N[r] : null;
        (d !== null ? d.type !== 0 : a || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (C(r, s, d, a) && (s = null),
        a || d === null ? w(r) && (s === null ? e.removeAttribute(r) : e.setAttribute(r, "" + s)) : d.mustUseProperty ? e[d.propertyName] = s === null ? d.type === 3 ? !1 : "" : s : (r = d.attributeName,
        a = d.attributeNamespace,
        s === null ? e.removeAttribute(r) : (d = d.type,
        s = d === 3 || d === 4 && s === !0 ? "" : "" + s,
        a ? e.setAttributeNS(a, r, s) : e.setAttribute(r, s))))
    }
    var W = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , U = Symbol.for("react.element")
      , se = Symbol.for("react.portal")
      , D = Symbol.for("react.fragment")
      , H = Symbol.for("react.strict_mode")
      , te = Symbol.for("react.profiler")
      , X = Symbol.for("react.provider")
      , ae = Symbol.for("react.context")
      , ke = Symbol.for("react.forward_ref")
      , Ae = Symbol.for("react.suspense")
      , je = Symbol.for("react.suspense_list")
      , Re = Symbol.for("react.memo")
      , ne = Symbol.for("react.lazy")
      , be = Symbol.for("react.offscreen")
      , F = Symbol.iterator;
    function q(e) {
        return e === null || typeof e != "object" ? null : (e = F && e[F] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var K = Object.assign, j;
    function I(e) {
        if (j === void 0)
            try {
                throw Error()
            } catch (s) {
                var r = s.stack.trim().match(/\n( *(at )?)/);
                j = r && r[1] || ""
            }
        return `
` + j + e
    }
    var ie = !1;
    function me(e, r) {
        if (!e || ie)
            return "";
        ie = !0;
        var s = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (r)
                if (r = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(r.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(r, [])
                    } catch (O) {
                        var a = O
                    }
                    Reflect.construct(e, [], r)
                } else {
                    try {
                        r.call()
                    } catch (O) {
                        a = O
                    }
                    e.call(r.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (O) {
                    a = O
                }
                e()
            }
        } catch (O) {
            if (O && a && typeof O.stack == "string") {
                for (var d = O.stack.split(`
`), h = a.stack.split(`
`), x = d.length - 1, S = h.length - 1; 1 <= x && 0 <= S && d[x] !== h[S]; )
                    S--;
                for (; 1 <= x && 0 <= S; x--,
                S--)
                    if (d[x] !== h[S]) {
                        if (x !== 1 || S !== 1)
                            do
                                if (x--,
                                S--,
                                0 > S || d[x] !== h[S]) {
                                    var T = `
` + d[x].replace(" at new ", " at ");
                                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)),
                                    T
                                }
                            while (1 <= x && 0 <= S);
                        break
                    }
            }
        } finally {
            ie = !1,
            Error.prepareStackTrace = s
        }
        return (e = e ? e.displayName || e.name : "") ? I(e) : ""
    }
    function we(e) {
        switch (e.tag) {
        case 5:
            return I(e.type);
        case 16:
            return I("Lazy");
        case 13:
            return I("Suspense");
        case 19:
            return I("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = me(e.type, !1),
            e;
        case 11:
            return e = me(e.type.render, !1),
            e;
        case 1:
            return e = me(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function ue(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case D:
            return "Fragment";
        case se:
            return "Portal";
        case te:
            return "Profiler";
        case H:
            return "StrictMode";
        case Ae:
            return "Suspense";
        case je:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case ae:
                return (e.displayName || "Context") + ".Consumer";
            case X:
                return (e._context.displayName || "Context") + ".Provider";
            case ke:
                var r = e.render;
                return e = e.displayName,
                e || (e = r.displayName || r.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case Re:
                return r = e.displayName || null,
                r !== null ? r : ue(e.type) || "Memo";
            case ne:
                r = e._payload,
                e = e._init;
                try {
                    return ue(e(r))
                } catch {}
            }
        return null
    }
    function ze(e) {
        var r = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (r.displayName || "Context") + ".Consumer";
        case 10:
            return (r._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = r.render,
            e = e.displayName || e.name || "",
            r.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return r;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ue(r);
        case 8:
            return r === H ? "StrictMode" : "Mode";
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
            if (typeof r == "function")
                return r.displayName || r.name || null;
            if (typeof r == "string")
                return r
        }
        return null
    }
    function Pe(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Ie(e) {
        var r = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (r === "checkbox" || r === "radio")
    }
    function lt(e) {
        var r = Ie(e) ? "checked" : "value"
          , s = Object.getOwnPropertyDescriptor(e.constructor.prototype, r)
          , a = "" + e[r];
        if (!e.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
            var d = s.get
              , h = s.set;
            return Object.defineProperty(e, r, {
                configurable: !0,
                get: function() {
                    return d.call(this)
                },
                set: function(x) {
                    a = "" + x,
                    h.call(this, x)
                }
            }),
            Object.defineProperty(e, r, {
                enumerable: s.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(x) {
                    a = "" + x
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[r]
                }
            }
        }
    }
    function Tr(e) {
        e._valueTracker || (e._valueTracker = lt(e))
    }
    function it(e) {
        if (!e)
            return !1;
        var r = e._valueTracker;
        if (!r)
            return !0;
        var s = r.getValue()
          , a = "";
        return e && (a = Ie(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== s ? (r.setValue(e),
        !0) : !1
    }
    function on(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function Hn(e, r) {
        var s = r.checked;
        return K({}, r, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: s ?? e._wrapperState.initialChecked
        })
    }
    function Vi(e, r) {
        var s = r.defaultValue == null ? "" : r.defaultValue
          , a = r.checked != null ? r.checked : r.defaultChecked;
        s = Pe(r.value != null ? r.value : s),
        e._wrapperState = {
            initialChecked: a,
            initialValue: s,
            controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null
        }
    }
    function an(e, r) {
        r = r.checked,
        r != null && B(e, "checked", r, !1)
    }
    function Dn(e, r) {
        an(e, r);
        var s = Pe(r.value)
          , a = r.type;
        if (s != null)
            a === "number" ? (s === 0 && e.value === "" || e.value != s) && (e.value = "" + s) : e.value !== "" + s && (e.value = "" + s);
        else if (a === "submit" || a === "reset") {
            e.removeAttribute("value");
            return
        }
        r.hasOwnProperty("value") ? At(e, r.type, s) : r.hasOwnProperty("defaultValue") && At(e, r.type, Pe(r.defaultValue)),
        r.checked == null && r.defaultChecked != null && (e.defaultChecked = !!r.defaultChecked)
    }
    function li(e, r, s) {
        if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
            var a = r.type;
            if (!(a !== "submit" && a !== "reset" || r.value !== void 0 && r.value !== null))
                return;
            r = "" + e._wrapperState.initialValue,
            s || r === e.value || (e.value = r),
            e.defaultValue = r
        }
        s = e.name,
        s !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        s !== "" && (e.name = s)
    }
    function At(e, r, s) {
        (r !== "number" || on(e.ownerDocument) !== e) && (s == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + s && (e.defaultValue = "" + s))
    }
    var dr = Array.isArray;
    function Yn(e, r, s, a) {
        if (e = e.options,
        r) {
            r = {};
            for (var d = 0; d < s.length; d++)
                r["$" + s[d]] = !0;
            for (s = 0; s < e.length; s++)
                d = r.hasOwnProperty("$" + e[s].value),
                e[s].selected !== d && (e[s].selected = d),
                d && a && (e[s].defaultSelected = !0)
        } else {
            for (s = "" + Pe(s),
            r = null,
            d = 0; d < e.length; d++) {
                if (e[d].value === s) {
                    e[d].selected = !0,
                    a && (e[d].defaultSelected = !0);
                    return
                }
                r !== null || e[d].disabled || (r = e[d])
            }
            r !== null && (r.selected = !0)
        }
    }
    function xt(e, r) {
        if (r.dangerouslySetInnerHTML != null)
            throw Error(i(91));
        return K({}, r, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function An(e, r) {
        var s = r.value;
        if (s == null) {
            if (s = r.children,
            r = r.defaultValue,
            s != null) {
                if (r != null)
                    throw Error(i(92));
                if (dr(s)) {
                    if (1 < s.length)
                        throw Error(i(93));
                    s = s[0]
                }
                r = s
            }
            r == null && (r = ""),
            s = r
        }
        e._wrapperState = {
            initialValue: Pe(s)
        }
    }
    function vn(e, r) {
        var s = Pe(r.value)
          , a = Pe(r.defaultValue);
        s != null && (s = "" + s,
        s !== e.value && (e.value = s),
        r.defaultValue == null && e.defaultValue !== s && (e.defaultValue = s)),
        a != null && (e.defaultValue = "" + a)
    }
    function Gn(e) {
        var r = e.textContent;
        r === e._wrapperState.initialValue && r !== "" && r !== null && (e.value = r)
    }
    function Kn(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function fr(e, r) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? Kn(r) : e === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Tt, _t = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, a, d) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(r, s, a, d)
            })
        }
        : e
    }
    )(function(e, r) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = r;
        else {
            for (Tt = Tt || document.createElement("div"),
            Tt.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>",
            r = Tt.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; r.firstChild; )
                e.appendChild(r.firstChild)
        }
    });
    function Wt(e, r) {
        if (r) {
            var s = e.firstChild;
            if (s && s === e.lastChild && s.nodeType === 3) {
                s.nodeValue = r;
                return
            }
        }
        e.textContent = r
    }
    var Jn = {
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
    }
      , xn = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Jn).forEach(function(e) {
        xn.forEach(function(r) {
            r = r + e.charAt(0).toUpperCase() + e.substring(1),
            Jn[r] = Jn[e]
        })
    });
    function Oi(e, r, s) {
        return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || Jn.hasOwnProperty(e) && Jn[e] ? ("" + r).trim() : r + "px"
    }
    function Xt(e, r) {
        e = e.style;
        for (var s in r)
            if (r.hasOwnProperty(s)) {
                var a = s.indexOf("--") === 0
                  , d = Oi(s, r[s], a);
                s === "float" && (s = "cssFloat"),
                a ? e.setProperty(s, d) : e[s] = d
            }
    }
    var ui = K({
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
    function hr(e, r) {
        if (r) {
            if (ui[e] && (r.children != null || r.dangerouslySetInnerHTML != null))
                throw Error(i(137, e));
            if (r.dangerouslySetInnerHTML != null) {
                if (r.children != null)
                    throw Error(i(60));
                if (typeof r.dangerouslySetInnerHTML != "object" || !("__html"in r.dangerouslySetInnerHTML))
                    throw Error(i(61))
            }
            if (r.style != null && typeof r.style != "object")
                throw Error(i(62))
        }
    }
    function Rr(e, r) {
        if (e.indexOf("-") === -1)
            return typeof r.is == "string";
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
    var pr = null;
    function Ut(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Xn = null
      , _n = null
      , ln = null;
    function ci(e) {
        if (e = Os(e)) {
            if (typeof Xn != "function")
                throw Error(i(280));
            var r = e.stateNode;
            r && (r = Ko(r),
            Xn(e.stateNode, e.type, r))
        }
    }
    function Te(e) {
        _n ? ln ? ln.push(e) : ln = [e] : _n = e
    }
    function et() {
        if (_n) {
            var e = _n
              , r = ln;
            if (ln = _n = null,
            ci(e),
            r)
                for (e = 0; e < r.length; e++)
                    ci(r[e])
        }
    }
    function st(e, r) {
        return e(r)
    }
    function ut() {}
    var un = !1;
    function tt(e, r, s) {
        if (un)
            return e(r, s);
        un = !0;
        try {
            return st(e, r, s)
        } finally {
            un = !1,
            (_n !== null || ln !== null) && (ut(),
            et())
        }
    }
    function ft(e, r) {
        var s = e.stateNode;
        if (s === null)
            return null;
        var a = Ko(s);
        if (a === null)
            return null;
        s = a[r];
        e: switch (r) {
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
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (s && typeof s != "function")
            throw Error(i(231, r, typeof s));
        return s
    }
    var Qn = !1;
    if (f)
        try {
            var k = {};
            Object.defineProperty(k, "passive", {
                get: function() {
                    Qn = !0
                }
            }),
            window.addEventListener("test", k, k),
            window.removeEventListener("test", k, k)
        } catch {
            Qn = !1
        }
    function R(e, r, s, a, d, h, x, S, T) {
        var O = Array.prototype.slice.call(arguments, 3);
        try {
            r.apply(s, O)
        } catch (G) {
            this.onError(G)
        }
    }
    var V = !1
      , $ = null
      , ee = !1
      , ye = null
      , Se = {
        onError: function(e) {
            V = !0,
            $ = e
        }
    };
    function le(e, r, s, a, d, h, x, S, T) {
        V = !1,
        $ = null,
        R.apply(Se, arguments)
    }
    function de(e, r, s, a, d, h, x, S, T) {
        if (le.apply(this, arguments),
        V) {
            if (V) {
                var O = $;
                V = !1,
                $ = null
            } else
                throw Error(i(198));
            ee || (ee = !0,
            ye = O)
        }
    }
    function pe(e) {
        var r = e
          , s = e;
        if (e.alternate)
            for (; r.return; )
                r = r.return;
        else {
            e = r;
            do
                r = e,
                (r.flags & 4098) !== 0 && (s = r.return),
                e = r.return;
            while (e)
        }
        return r.tag === 3 ? s : null
    }
    function Me(e) {
        if (e.tag === 13) {
            var r = e.memoizedState;
            if (r === null && (e = e.alternate,
            e !== null && (r = e.memoizedState)),
            r !== null)
                return r.dehydrated
        }
        return null
    }
    function xe(e) {
        if (pe(e) !== e)
            throw Error(i(188))
    }
    function De(e) {
        var r = e.alternate;
        if (!r) {
            if (r = pe(e),
            r === null)
                throw Error(i(188));
            return r !== e ? null : e
        }
        for (var s = e, a = r; ; ) {
            var d = s.return;
            if (d === null)
                break;
            var h = d.alternate;
            if (h === null) {
                if (a = d.return,
                a !== null) {
                    s = a;
                    continue
                }
                break
            }
            if (d.child === h.child) {
                for (h = d.child; h; ) {
                    if (h === s)
                        return xe(d),
                        e;
                    if (h === a)
                        return xe(d),
                        r;
                    h = h.sibling
                }
                throw Error(i(188))
            }
            if (s.return !== a.return)
                s = d,
                a = h;
            else {
                for (var x = !1, S = d.child; S; ) {
                    if (S === s) {
                        x = !0,
                        s = d,
                        a = h;
                        break
                    }
                    if (S === a) {
                        x = !0,
                        a = d,
                        s = h;
                        break
                    }
                    S = S.sibling
                }
                if (!x) {
                    for (S = h.child; S; ) {
                        if (S === s) {
                            x = !0,
                            s = h,
                            a = d;
                            break
                        }
                        if (S === a) {
                            x = !0,
                            a = h,
                            s = d;
                            break
                        }
                        S = S.sibling
                    }
                    if (!x)
                        throw Error(i(189))
                }
            }
            if (s.alternate !== a)
                throw Error(i(190))
        }
        if (s.tag !== 3)
            throw Error(i(188));
        return s.stateNode.current === s ? e : r
    }
    function Ve(e) {
        return e = De(e),
        e !== null ? ht(e) : null
    }
    function ht(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var r = ht(e);
            if (r !== null)
                return r;
            e = e.sibling
        }
        return null
    }
    var ct = n.unstable_scheduleCallback
      , Ct = n.unstable_cancelCallback
      , We = n.unstable_shouldYield
      , Qt = n.unstable_requestPaint
      , Ue = n.unstable_now
      , di = n.unstable_getCurrentPriorityLevel
      , wn = n.unstable_ImmediatePriority
      , cn = n.unstable_UserBlockingPriority
      , Mr = n.unstable_NormalPriority
      , fi = n.unstable_LowPriority
      , qn = n.unstable_IdlePriority
      , mr = null
      , $t = null;
    function Oe(e) {
        if ($t && typeof $t.onCommitFiberRoot == "function")
            try {
                $t.onCommitFiberRoot(mr, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var He = Math.clz32 ? Math.clz32 : qe
      , Pr = Math.log
      , gr = Math.LN2;
    function qe(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Pr(e) / gr | 0) | 0
    }
    var yr = 64
      , hi = 4194304;
    function pi(e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
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
    function Do(e, r) {
        var s = e.pendingLanes;
        if (s === 0)
            return 0;
        var a = 0
          , d = e.suspendedLanes
          , h = e.pingedLanes
          , x = s & 268435455;
        if (x !== 0) {
            var S = x & ~d;
            S !== 0 ? a = pi(S) : (h &= x,
            h !== 0 && (a = pi(h)))
        } else
            x = s & ~d,
            x !== 0 ? a = pi(x) : h !== 0 && (a = pi(h));
        if (a === 0)
            return 0;
        if (r !== 0 && r !== a && (r & d) === 0 && (d = a & -a,
        h = r & -r,
        d >= h || d === 16 && (h & 4194240) !== 0))
            return r;
        if ((a & 4) !== 0 && (a |= s & 16),
        r = e.entangledLanes,
        r !== 0)
            for (e = e.entanglements,
            r &= a; 0 < r; )
                s = 31 - He(r),
                d = 1 << s,
                a |= e[s],
                r &= ~d;
        return a
    }
    function nv(e, r) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return r + 250;
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
            return r + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function rv(e, r) {
        for (var s = e.suspendedLanes, a = e.pingedLanes, d = e.expirationTimes, h = e.pendingLanes; 0 < h; ) {
            var x = 31 - He(h)
              , S = 1 << x
              , T = d[x];
            T === -1 ? ((S & s) === 0 || (S & a) !== 0) && (d[x] = nv(S, r)) : T <= r && (e.expiredLanes |= S),
            h &= ~S
        }
    }
    function wl(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Yd() {
        var e = yr;
        return yr <<= 1,
        (yr & 4194240) === 0 && (yr = 64),
        e
    }
    function bl(e) {
        for (var r = [], s = 0; 31 > s; s++)
            r.push(e);
        return r
    }
    function bs(e, r, s) {
        e.pendingLanes |= r,
        r !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        r = 31 - He(r),
        e[r] = s
    }
    function iv(e, r) {
        var s = e.pendingLanes & ~r;
        e.pendingLanes = r,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= r,
        e.mutableReadLanes &= r,
        e.entangledLanes &= r,
        r = e.entanglements;
        var a = e.eventTimes;
        for (e = e.expirationTimes; 0 < s; ) {
            var d = 31 - He(s)
              , h = 1 << d;
            r[d] = 0,
            a[d] = -1,
            e[d] = -1,
            s &= ~h
        }
    }
    function Sl(e, r) {
        var s = e.entangledLanes |= r;
        for (e = e.entanglements; s; ) {
            var a = 31 - He(s)
              , d = 1 << a;
            d & r | e[a] & r && (e[a] |= r),
            s &= ~d
        }
    }
    var $e = 0;
    function Gd(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Kd, kl, Jd, Xd, Qd, Cl = !1, Ao = [], Dr = null, Ar = null, _r = null, Ss = new Map, ks = new Map, Lr = [], sv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function qd(e, r) {
        switch (e) {
        case "focusin":
        case "focusout":
            Dr = null;
            break;
        case "dragenter":
        case "dragleave":
            Ar = null;
            break;
        case "mouseover":
        case "mouseout":
            _r = null;
            break;
        case "pointerover":
        case "pointerout":
            Ss.delete(r.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ks.delete(r.pointerId)
        }
    }
    function Cs(e, r, s, a, d, h) {
        return e === null || e.nativeEvent !== h ? (e = {
            blockedOn: r,
            domEventName: s,
            eventSystemFlags: a,
            nativeEvent: h,
            targetContainers: [d]
        },
        r !== null && (r = Os(r),
        r !== null && kl(r)),
        e) : (e.eventSystemFlags |= a,
        r = e.targetContainers,
        d !== null && r.indexOf(d) === -1 && r.push(d),
        e)
    }
    function ov(e, r, s, a, d) {
        switch (r) {
        case "focusin":
            return Dr = Cs(Dr, e, r, s, a, d),
            !0;
        case "dragenter":
            return Ar = Cs(Ar, e, r, s, a, d),
            !0;
        case "mouseover":
            return _r = Cs(_r, e, r, s, a, d),
            !0;
        case "pointerover":
            var h = d.pointerId;
            return Ss.set(h, Cs(Ss.get(h) || null, e, r, s, a, d)),
            !0;
        case "gotpointercapture":
            return h = d.pointerId,
            ks.set(h, Cs(ks.get(h) || null, e, r, s, a, d)),
            !0
        }
        return !1
    }
    function Zd(e) {
        var r = mi(e.target);
        if (r !== null) {
            var s = pe(r);
            if (s !== null) {
                if (r = s.tag,
                r === 13) {
                    if (r = Me(s),
                    r !== null) {
                        e.blockedOn = r,
                        Qd(e.priority, function() {
                            Jd(s)
                        });
                        return
                    }
                } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function _o(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var r = e.targetContainers; 0 < r.length; ) {
            var s = Nl(e.domEventName, e.eventSystemFlags, r[0], e.nativeEvent);
            if (s === null) {
                s = e.nativeEvent;
                var a = new s.constructor(s.type,s);
                pr = a,
                s.target.dispatchEvent(a),
                pr = null
            } else
                return r = Os(s),
                r !== null && kl(r),
                e.blockedOn = s,
                !1;
            r.shift()
        }
        return !0
    }
    function ef(e, r, s) {
        _o(e) && s.delete(r)
    }
    function av() {
        Cl = !1,
        Dr !== null && _o(Dr) && (Dr = null),
        Ar !== null && _o(Ar) && (Ar = null),
        _r !== null && _o(_r) && (_r = null),
        Ss.forEach(ef),
        ks.forEach(ef)
    }
    function Es(e, r) {
        e.blockedOn === r && (e.blockedOn = null,
        Cl || (Cl = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, av)))
    }
    function Ns(e) {
        function r(d) {
            return Es(d, e)
        }
        if (0 < Ao.length) {
            Es(Ao[0], e);
            for (var s = 1; s < Ao.length; s++) {
                var a = Ao[s];
                a.blockedOn === e && (a.blockedOn = null)
            }
        }
        for (Dr !== null && Es(Dr, e),
        Ar !== null && Es(Ar, e),
        _r !== null && Es(_r, e),
        Ss.forEach(r),
        ks.forEach(r),
        s = 0; s < Lr.length; s++)
            a = Lr[s],
            a.blockedOn === e && (a.blockedOn = null);
        for (; 0 < Lr.length && (s = Lr[0],
        s.blockedOn === null); )
            Zd(s),
            s.blockedOn === null && Lr.shift()
    }
    var Bi = W.ReactCurrentBatchConfig
      , Lo = !0;
    function lv(e, r, s, a) {
        var d = $e
          , h = Bi.transition;
        Bi.transition = null;
        try {
            $e = 1,
            El(e, r, s, a)
        } finally {
            $e = d,
            Bi.transition = h
        }
    }
    function uv(e, r, s, a) {
        var d = $e
          , h = Bi.transition;
        Bi.transition = null;
        try {
            $e = 4,
            El(e, r, s, a)
        } finally {
            $e = d,
            Bi.transition = h
        }
    }
    function El(e, r, s, a) {
        if (Lo) {
            var d = Nl(e, r, s, a);
            if (d === null)
                Ul(e, r, a, zo, s),
                qd(e, a);
            else if (ov(d, e, r, s, a))
                a.stopPropagation();
            else if (qd(e, a),
            r & 4 && -1 < sv.indexOf(e)) {
                for (; d !== null; ) {
                    var h = Os(d);
                    if (h !== null && Kd(h),
                    h = Nl(e, r, s, a),
                    h === null && Ul(e, r, a, zo, s),
                    h === d)
                        break;
                    d = h
                }
                d !== null && a.stopPropagation()
            } else
                Ul(e, r, a, null, s)
        }
    }
    var zo = null;
    function Nl(e, r, s, a) {
        if (zo = null,
        e = Ut(a),
        e = mi(e),
        e !== null)
            if (r = pe(e),
            r === null)
                e = null;
            else if (s = r.tag,
            s === 13) {
                if (e = Me(r),
                e !== null)
                    return e;
                e = null
            } else if (s === 3) {
                if (r.stateNode.current.memoizedState.isDehydrated)
                    return r.tag === 3 ? r.stateNode.containerInfo : null;
                e = null
            } else
                r !== e && (e = null);
        return zo = e,
        null
    }
    function tf(e) {
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
            switch (di()) {
            case wn:
                return 1;
            case cn:
                return 4;
            case Mr:
            case fi:
                return 16;
            case qn:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var zr = null
      , jl = null
      , Vo = null;
    function nf() {
        if (Vo)
            return Vo;
        var e, r = jl, s = r.length, a, d = "value"in zr ? zr.value : zr.textContent, h = d.length;
        for (e = 0; e < s && r[e] === d[e]; e++)
            ;
        var x = s - e;
        for (a = 1; a <= x && r[s - a] === d[h - a]; a++)
            ;
        return Vo = d.slice(e, 1 < a ? 1 - a : void 0)
    }
    function Oo(e) {
        var r = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && r === 13 && (e = 13)) : e = r,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Bo() {
        return !0
    }
    function rf() {
        return !1
    }
    function dn(e) {
        function r(s, a, d, h, x) {
            this._reactName = s,
            this._targetInst = d,
            this.type = a,
            this.nativeEvent = h,
            this.target = x,
            this.currentTarget = null;
            for (var S in e)
                e.hasOwnProperty(S) && (s = e[S],
                this[S] = s ? s(h) : h[S]);
            return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Bo : rf,
            this.isPropagationStopped = rf,
            this
        }
        return K(r.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var s = this.nativeEvent;
                s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1),
                this.isDefaultPrevented = Bo)
            },
            stopPropagation: function() {
                var s = this.nativeEvent;
                s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
                this.isPropagationStopped = Bo)
            },
            persist: function() {},
            isPersistent: Bo
        }),
        r
    }
    var Ii = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Tl = dn(Ii), js = K({}, Ii, {
        view: 0,
        detail: 0
    }), cv = dn(js), Rl, Ml, Ts, Io = K({}, js, {
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
        getModifierState: Dl,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Ts && (Ts && e.type === "mousemove" ? (Rl = e.screenX - Ts.screenX,
            Ml = e.screenY - Ts.screenY) : Ml = Rl = 0,
            Ts = e),
            Rl)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : Ml
        }
    }), sf = dn(Io), dv = K({}, Io, {
        dataTransfer: 0
    }), fv = dn(dv), hv = K({}, js, {
        relatedTarget: 0
    }), Pl = dn(hv), pv = K({}, Ii, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), mv = dn(pv), gv = K({}, Ii, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), yv = dn(gv), vv = K({}, Ii, {
        data: 0
    }), of = dn(vv), xv = {
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
    }, wv = {
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
    }, bv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function Sv(e) {
        var r = this.nativeEvent;
        return r.getModifierState ? r.getModifierState(e) : (e = bv[e]) ? !!r[e] : !1
    }
    function Dl() {
        return Sv
    }
    var kv = K({}, js, {
        key: function(e) {
            if (e.key) {
                var r = xv[e.key] || e.key;
                if (r !== "Unidentified")
                    return r
            }
            return e.type === "keypress" ? (e = Oo(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wv[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Dl,
        charCode: function(e) {
            return e.type === "keypress" ? Oo(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Oo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Cv = dn(kv)
      , Ev = K({}, Io, {
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
    })
      , af = dn(Ev)
      , Nv = K({}, js, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Dl
    })
      , jv = dn(Nv)
      , Tv = K({}, Ii, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , Rv = dn(Tv)
      , Mv = K({}, Io, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Pv = dn(Mv)
      , Dv = [9, 13, 27, 32]
      , Al = f && "CompositionEvent"in window
      , Rs = null;
    f && "documentMode"in document && (Rs = document.documentMode);
    var Av = f && "TextEvent"in window && !Rs
      , lf = f && (!Al || Rs && 8 < Rs && 11 >= Rs)
      , uf = " "
      , cf = !1;
    function df(e, r) {
        switch (e) {
        case "keyup":
            return Dv.indexOf(r.keyCode) !== -1;
        case "keydown":
            return r.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function ff(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Fi = !1;
    function _v(e, r) {
        switch (e) {
        case "compositionend":
            return ff(r);
        case "keypress":
            return r.which !== 32 ? null : (cf = !0,
            uf);
        case "textInput":
            return e = r.data,
            e === uf && cf ? null : e;
        default:
            return null
        }
    }
    function Lv(e, r) {
        if (Fi)
            return e === "compositionend" || !Al && df(e, r) ? (e = nf(),
            Vo = jl = zr = null,
            Fi = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
                if (r.char && 1 < r.char.length)
                    return r.char;
                if (r.which)
                    return String.fromCharCode(r.which)
            }
            return null;
        case "compositionend":
            return lf && r.locale !== "ko" ? null : r.data;
        default:
            return null
        }
    }
    var zv = {
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
    function hf(e) {
        var r = e && e.nodeName && e.nodeName.toLowerCase();
        return r === "input" ? !!zv[e.type] : r === "textarea"
    }
    function pf(e, r, s, a) {
        Te(a),
        r = Ho(r, "onChange"),
        0 < r.length && (s = new Tl("onChange","change",null,s,a),
        e.push({
            event: s,
            listeners: r
        }))
    }
    var Ms = null
      , Ps = null;
    function Vv(e) {
        Df(e, 0)
    }
    function Fo(e) {
        var r = Yi(e);
        if (it(r))
            return e
    }
    function Ov(e, r) {
        if (e === "change")
            return r
    }
    var mf = !1;
    if (f) {
        var _l;
        if (f) {
            var Ll = "oninput"in document;
            if (!Ll) {
                var gf = document.createElement("div");
                gf.setAttribute("oninput", "return;"),
                Ll = typeof gf.oninput == "function"
            }
            _l = Ll
        } else
            _l = !1;
        mf = _l && (!document.documentMode || 9 < document.documentMode)
    }
    function yf() {
        Ms && (Ms.detachEvent("onpropertychange", vf),
        Ps = Ms = null)
    }
    function vf(e) {
        if (e.propertyName === "value" && Fo(Ps)) {
            var r = [];
            pf(r, Ps, e, Ut(e)),
            tt(Vv, r)
        }
    }
    function Bv(e, r, s) {
        e === "focusin" ? (yf(),
        Ms = r,
        Ps = s,
        Ms.attachEvent("onpropertychange", vf)) : e === "focusout" && yf()
    }
    function Iv(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Fo(Ps)
    }
    function Fv(e, r) {
        if (e === "click")
            return Fo(r)
    }
    function Wv(e, r) {
        if (e === "input" || e === "change")
            return Fo(r)
    }
    function Uv(e, r) {
        return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r
    }
    var Ln = typeof Object.is == "function" ? Object.is : Uv;
    function Ds(e, r) {
        if (Ln(e, r))
            return !0;
        if (typeof e != "object" || e === null || typeof r != "object" || r === null)
            return !1;
        var s = Object.keys(e)
          , a = Object.keys(r);
        if (s.length !== a.length)
            return !1;
        for (a = 0; a < s.length; a++) {
            var d = s[a];
            if (!m.call(r, d) || !Ln(e[d], r[d]))
                return !1
        }
        return !0
    }
    function xf(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function wf(e, r) {
        var s = xf(e);
        e = 0;
        for (var a; s; ) {
            if (s.nodeType === 3) {
                if (a = e + s.textContent.length,
                e <= r && a >= r)
                    return {
                        node: s,
                        offset: r - e
                    };
                e = a
            }
            e: {
                for (; s; ) {
                    if (s.nextSibling) {
                        s = s.nextSibling;
                        break e
                    }
                    s = s.parentNode
                }
                s = void 0
            }
            s = xf(s)
        }
    }
    function bf(e, r) {
        return e && r ? e === r ? !0 : e && e.nodeType === 3 ? !1 : r && r.nodeType === 3 ? bf(e, r.parentNode) : "contains"in e ? e.contains(r) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(r) & 16) : !1 : !1
    }
    function Sf() {
        for (var e = window, r = on(); r instanceof e.HTMLIFrameElement; ) {
            try {
                var s = typeof r.contentWindow.location.href == "string"
            } catch {
                s = !1
            }
            if (s)
                e = r.contentWindow;
            else
                break;
            r = on(e.document)
        }
        return r
    }
    function zl(e) {
        var r = e && e.nodeName && e.nodeName.toLowerCase();
        return r && (r === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || r === "textarea" || e.contentEditable === "true")
    }
    function $v(e) {
        var r = Sf()
          , s = e.focusedElem
          , a = e.selectionRange;
        if (r !== s && s && s.ownerDocument && bf(s.ownerDocument.documentElement, s)) {
            if (a !== null && zl(s)) {
                if (r = a.start,
                e = a.end,
                e === void 0 && (e = r),
                "selectionStart"in s)
                    s.selectionStart = r,
                    s.selectionEnd = Math.min(e, s.value.length);
                else if (e = (r = s.ownerDocument || document) && r.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var d = s.textContent.length
                      , h = Math.min(a.start, d);
                    a = a.end === void 0 ? h : Math.min(a.end, d),
                    !e.extend && h > a && (d = a,
                    a = h,
                    h = d),
                    d = wf(s, h);
                    var x = wf(s, a);
                    d && x && (e.rangeCount !== 1 || e.anchorNode !== d.node || e.anchorOffset !== d.offset || e.focusNode !== x.node || e.focusOffset !== x.offset) && (r = r.createRange(),
                    r.setStart(d.node, d.offset),
                    e.removeAllRanges(),
                    h > a ? (e.addRange(r),
                    e.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset),
                    e.addRange(r)))
                }
            }
            for (r = [],
            e = s; e = e.parentNode; )
                e.nodeType === 1 && r.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof s.focus == "function" && s.focus(),
            s = 0; s < r.length; s++)
                e = r[s],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var Hv = f && "documentMode"in document && 11 >= document.documentMode
      , Wi = null
      , Vl = null
      , As = null
      , Ol = !1;
    function kf(e, r, s) {
        var a = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
        Ol || Wi == null || Wi !== on(a) || (a = Wi,
        "selectionStart"in a && zl(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        As && Ds(As, a) || (As = a,
        a = Ho(Vl, "onSelect"),
        0 < a.length && (r = new Tl("onSelect","select",null,r,s),
        e.push({
            event: r,
            listeners: a
        }),
        r.target = Wi)))
    }
    function Wo(e, r) {
        var s = {};
        return s[e.toLowerCase()] = r.toLowerCase(),
        s["Webkit" + e] = "webkit" + r,
        s["Moz" + e] = "moz" + r,
        s
    }
    var Ui = {
        animationend: Wo("Animation", "AnimationEnd"),
        animationiteration: Wo("Animation", "AnimationIteration"),
        animationstart: Wo("Animation", "AnimationStart"),
        transitionend: Wo("Transition", "TransitionEnd")
    }
      , Bl = {}
      , Cf = {};
    f && (Cf = document.createElement("div").style,
    "AnimationEvent"in window || (delete Ui.animationend.animation,
    delete Ui.animationiteration.animation,
    delete Ui.animationstart.animation),
    "TransitionEvent"in window || delete Ui.transitionend.transition);
    function Uo(e) {
        if (Bl[e])
            return Bl[e];
        if (!Ui[e])
            return e;
        var r = Ui[e], s;
        for (s in r)
            if (r.hasOwnProperty(s) && s in Cf)
                return Bl[e] = r[s];
        return e
    }
    var Ef = Uo("animationend")
      , Nf = Uo("animationiteration")
      , jf = Uo("animationstart")
      , Tf = Uo("transitionend")
      , Rf = new Map
      , Mf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function Vr(e, r) {
        Rf.set(e, r),
        u(r, [e])
    }
    for (var Il = 0; Il < Mf.length; Il++) {
        var Fl = Mf[Il]
          , Yv = Fl.toLowerCase()
          , Gv = Fl[0].toUpperCase() + Fl.slice(1);
        Vr(Yv, "on" + Gv)
    }
    Vr(Ef, "onAnimationEnd"),
    Vr(Nf, "onAnimationIteration"),
    Vr(jf, "onAnimationStart"),
    Vr("dblclick", "onDoubleClick"),
    Vr("focusin", "onFocus"),
    Vr("focusout", "onBlur"),
    Vr(Tf, "onTransitionEnd"),
    c("onMouseEnter", ["mouseout", "mouseover"]),
    c("onMouseLeave", ["mouseout", "mouseover"]),
    c("onPointerEnter", ["pointerout", "pointerover"]),
    c("onPointerLeave", ["pointerout", "pointerover"]),
    u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var _s = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Kv = new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));
    function Pf(e, r, s) {
        var a = e.type || "unknown-event";
        e.currentTarget = s,
        de(a, r, void 0, e),
        e.currentTarget = null
    }
    function Df(e, r) {
        r = (r & 4) !== 0;
        for (var s = 0; s < e.length; s++) {
            var a = e[s]
              , d = a.event;
            a = a.listeners;
            e: {
                var h = void 0;
                if (r)
                    for (var x = a.length - 1; 0 <= x; x--) {
                        var S = a[x]
                          , T = S.instance
                          , O = S.currentTarget;
                        if (S = S.listener,
                        T !== h && d.isPropagationStopped())
                            break e;
                        Pf(d, S, O),
                        h = T
                    }
                else
                    for (x = 0; x < a.length; x++) {
                        if (S = a[x],
                        T = S.instance,
                        O = S.currentTarget,
                        S = S.listener,
                        T !== h && d.isPropagationStopped())
                            break e;
                        Pf(d, S, O),
                        h = T
                    }
            }
        }
        if (ee)
            throw e = ye,
            ee = !1,
            ye = null,
            e
    }
    function Je(e, r) {
        var s = r[Jl];
        s === void 0 && (s = r[Jl] = new Set);
        var a = e + "__bubble";
        s.has(a) || (Af(r, e, 2, !1),
        s.add(a))
    }
    function Wl(e, r, s) {
        var a = 0;
        r && (a |= 4),
        Af(s, e, a, r)
    }
    var $o = "_reactListening" + Math.random().toString(36).slice(2);
    function Ls(e) {
        if (!e[$o]) {
            e[$o] = !0,
            o.forEach(function(s) {
                s !== "selectionchange" && (Kv.has(s) || Wl(s, !1, e),
                Wl(s, !0, e))
            });
            var r = e.nodeType === 9 ? e : e.ownerDocument;
            r === null || r[$o] || (r[$o] = !0,
            Wl("selectionchange", !1, r))
        }
    }
    function Af(e, r, s, a) {
        switch (tf(r)) {
        case 1:
            var d = lv;
            break;
        case 4:
            d = uv;
            break;
        default:
            d = El
        }
        s = d.bind(null, r, s, e),
        d = void 0,
        !Qn || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0),
        a ? d !== void 0 ? e.addEventListener(r, s, {
            capture: !0,
            passive: d
        }) : e.addEventListener(r, s, !0) : d !== void 0 ? e.addEventListener(r, s, {
            passive: d
        }) : e.addEventListener(r, s, !1)
    }
    function Ul(e, r, s, a, d) {
        var h = a;
        if ((r & 1) === 0 && (r & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var x = a.tag;
                if (x === 3 || x === 4) {
                    var S = a.stateNode.containerInfo;
                    if (S === d || S.nodeType === 8 && S.parentNode === d)
                        break;
                    if (x === 4)
                        for (x = a.return; x !== null; ) {
                            var T = x.tag;
                            if ((T === 3 || T === 4) && (T = x.stateNode.containerInfo,
                            T === d || T.nodeType === 8 && T.parentNode === d))
                                return;
                            x = x.return
                        }
                    for (; S !== null; ) {
                        if (x = mi(S),
                        x === null)
                            return;
                        if (T = x.tag,
                        T === 5 || T === 6) {
                            a = h = x;
                            continue e
                        }
                        S = S.parentNode
                    }
                }
                a = a.return
            }
        tt(function() {
            var O = h
              , G = Ut(s)
              , J = [];
            e: {
                var Y = Rf.get(e);
                if (Y !== void 0) {
                    var oe = Tl
                      , fe = e;
                    switch (e) {
                    case "keypress":
                        if (Oo(s) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        oe = Cv;
                        break;
                    case "focusin":
                        fe = "focus",
                        oe = Pl;
                        break;
                    case "focusout":
                        fe = "blur",
                        oe = Pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        oe = Pl;
                        break;
                    case "click":
                        if (s.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        oe = sf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        oe = fv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        oe = jv;
                        break;
                    case Ef:
                    case Nf:
                    case jf:
                        oe = mv;
                        break;
                    case Tf:
                        oe = Rv;
                        break;
                    case "scroll":
                        oe = cv;
                        break;
                    case "wheel":
                        oe = Pv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        oe = yv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        oe = af
                    }
                    var ge = (r & 4) !== 0
                      , dt = !ge && e === "scroll"
                      , _ = ge ? Y !== null ? Y + "Capture" : null : Y;
                    ge = [];
                    for (var P = O, z; P !== null; ) {
                        z = P;
                        var Z = z.stateNode;
                        if (z.tag === 5 && Z !== null && (z = Z,
                        _ !== null && (Z = ft(P, _),
                        Z != null && ge.push(zs(P, Z, z)))),
                        dt)
                            break;
                        P = P.return
                    }
                    0 < ge.length && (Y = new oe(Y,fe,null,s,G),
                    J.push({
                        event: Y,
                        listeners: ge
                    }))
                }
            }
            if ((r & 7) === 0) {
                e: {
                    if (Y = e === "mouseover" || e === "pointerover",
                    oe = e === "mouseout" || e === "pointerout",
                    Y && s !== pr && (fe = s.relatedTarget || s.fromElement) && (mi(fe) || fe[vr]))
                        break e;
                    if ((oe || Y) && (Y = G.window === G ? G : (Y = G.ownerDocument) ? Y.defaultView || Y.parentWindow : window,
                    oe ? (fe = s.relatedTarget || s.toElement,
                    oe = O,
                    fe = fe ? mi(fe) : null,
                    fe !== null && (dt = pe(fe),
                    fe !== dt || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (oe = null,
                    fe = O),
                    oe !== fe)) {
                        if (ge = sf,
                        Z = "onMouseLeave",
                        _ = "onMouseEnter",
                        P = "mouse",
                        (e === "pointerout" || e === "pointerover") && (ge = af,
                        Z = "onPointerLeave",
                        _ = "onPointerEnter",
                        P = "pointer"),
                        dt = oe == null ? Y : Yi(oe),
                        z = fe == null ? Y : Yi(fe),
                        Y = new ge(Z,P + "leave",oe,s,G),
                        Y.target = dt,
                        Y.relatedTarget = z,
                        Z = null,
                        mi(G) === O && (ge = new ge(_,P + "enter",fe,s,G),
                        ge.target = z,
                        ge.relatedTarget = dt,
                        Z = ge),
                        dt = Z,
                        oe && fe)
                            t: {
                                for (ge = oe,
                                _ = fe,
                                P = 0,
                                z = ge; z; z = $i(z))
                                    P++;
                                for (z = 0,
                                Z = _; Z; Z = $i(Z))
                                    z++;
                                for (; 0 < P - z; )
                                    ge = $i(ge),
                                    P--;
                                for (; 0 < z - P; )
                                    _ = $i(_),
                                    z--;
                                for (; P--; ) {
                                    if (ge === _ || _ !== null && ge === _.alternate)
                                        break t;
                                    ge = $i(ge),
                                    _ = $i(_)
                                }
                                ge = null
                            }
                        else
                            ge = null;
                        oe !== null && _f(J, Y, oe, ge, !1),
                        fe !== null && dt !== null && _f(J, dt, fe, ge, !0)
                    }
                }
                e: {
                    if (Y = O ? Yi(O) : window,
                    oe = Y.nodeName && Y.nodeName.toLowerCase(),
                    oe === "select" || oe === "input" && Y.type === "file")
                        var ve = Ov;
                    else if (hf(Y))
                        if (mf)
                            ve = Wv;
                        else {
                            ve = Iv;
                            var Ce = Bv
                        }
                    else
                        (oe = Y.nodeName) && oe.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (ve = Fv);
                    if (ve && (ve = ve(e, O))) {
                        pf(J, ve, s, G);
                        break e
                    }
                    Ce && Ce(e, Y, O),
                    e === "focusout" && (Ce = Y._wrapperState) && Ce.controlled && Y.type === "number" && At(Y, "number", Y.value)
                }
                switch (Ce = O ? Yi(O) : window,
                e) {
                case "focusin":
                    (hf(Ce) || Ce.contentEditable === "true") && (Wi = Ce,
                    Vl = O,
                    As = null);
                    break;
                case "focusout":
                    As = Vl = Wi = null;
                    break;
                case "mousedown":
                    Ol = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Ol = !1,
                    kf(J, s, G);
                    break;
                case "selectionchange":
                    if (Hv)
                        break;
                case "keydown":
                case "keyup":
                    kf(J, s, G)
                }
                var Ee;
                if (Al)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var Ne = "onCompositionStart";
                            break e;
                        case "compositionend":
                            Ne = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            Ne = "onCompositionUpdate";
                            break e
                        }
                        Ne = void 0
                    }
                else
                    Fi ? df(e, s) && (Ne = "onCompositionEnd") : e === "keydown" && s.keyCode === 229 && (Ne = "onCompositionStart");
                Ne && (lf && s.locale !== "ko" && (Fi || Ne !== "onCompositionStart" ? Ne === "onCompositionEnd" && Fi && (Ee = nf()) : (zr = G,
                jl = "value"in zr ? zr.value : zr.textContent,
                Fi = !0)),
                Ce = Ho(O, Ne),
                0 < Ce.length && (Ne = new of(Ne,e,null,s,G),
                J.push({
                    event: Ne,
                    listeners: Ce
                }),
                Ee ? Ne.data = Ee : (Ee = ff(s),
                Ee !== null && (Ne.data = Ee)))),
                (Ee = Av ? _v(e, s) : Lv(e, s)) && (O = Ho(O, "onBeforeInput"),
                0 < O.length && (G = new of("onBeforeInput","beforeinput",null,s,G),
                J.push({
                    event: G,
                    listeners: O
                }),
                G.data = Ee))
            }
            Df(J, r)
        })
    }
    function zs(e, r, s) {
        return {
            instance: e,
            listener: r,
            currentTarget: s
        }
    }
    function Ho(e, r) {
        for (var s = r + "Capture", a = []; e !== null; ) {
            var d = e
              , h = d.stateNode;
            d.tag === 5 && h !== null && (d = h,
            h = ft(e, s),
            h != null && a.unshift(zs(e, h, d)),
            h = ft(e, r),
            h != null && a.push(zs(e, h, d))),
            e = e.return
        }
        return a
    }
    function $i(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function _f(e, r, s, a, d) {
        for (var h = r._reactName, x = []; s !== null && s !== a; ) {
            var S = s
              , T = S.alternate
              , O = S.stateNode;
            if (T !== null && T === a)
                break;
            S.tag === 5 && O !== null && (S = O,
            d ? (T = ft(s, h),
            T != null && x.unshift(zs(s, T, S))) : d || (T = ft(s, h),
            T != null && x.push(zs(s, T, S)))),
            s = s.return
        }
        x.length !== 0 && e.push({
            event: r,
            listeners: x
        })
    }
    var Jv = /\r\n?/g
      , Xv = /\u0000|\uFFFD/g;
    function Lf(e) {
        return (typeof e == "string" ? e : "" + e).replace(Jv, `
`).replace(Xv, "")
    }
    function Yo(e, r, s) {
        if (r = Lf(r),
        Lf(e) !== r && s)
            throw Error(i(425))
    }
    function Go() {}
    var $l = null
      , Hl = null;
    function Yl(e, r) {
        return e === "textarea" || e === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null
    }
    var Gl = typeof setTimeout == "function" ? setTimeout : void 0
      , Qv = typeof clearTimeout == "function" ? clearTimeout : void 0
      , zf = typeof Promise == "function" ? Promise : void 0
      , qv = typeof queueMicrotask == "function" ? queueMicrotask : typeof zf < "u" ? function(e) {
        return zf.resolve(null).then(e).catch(Zv)
    }
    : Gl;
    function Zv(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Kl(e, r) {
        var s = r
          , a = 0;
        do {
            var d = s.nextSibling;
            if (e.removeChild(s),
            d && d.nodeType === 8)
                if (s = d.data,
                s === "/$") {
                    if (a === 0) {
                        e.removeChild(d),
                        Ns(r);
                        return
                    }
                    a--
                } else
                    s !== "$" && s !== "$?" && s !== "$!" || a++;
            s = d
        } while (s);
        Ns(r)
    }
    function Or(e) {
        for (; e != null; e = e.nextSibling) {
            var r = e.nodeType;
            if (r === 1 || r === 3)
                break;
            if (r === 8) {
                if (r = e.data,
                r === "$" || r === "$!" || r === "$?")
                    break;
                if (r === "/$")
                    return null
            }
        }
        return e
    }
    function Vf(e) {
        e = e.previousSibling;
        for (var r = 0; e; ) {
            if (e.nodeType === 8) {
                var s = e.data;
                if (s === "$" || s === "$!" || s === "$?") {
                    if (r === 0)
                        return e;
                    r--
                } else
                    s === "/$" && r++
            }
            e = e.previousSibling
        }
        return null
    }
    var Hi = Math.random().toString(36).slice(2)
      , Zn = "__reactFiber$" + Hi
      , Vs = "__reactProps$" + Hi
      , vr = "__reactContainer$" + Hi
      , Jl = "__reactEvents$" + Hi
      , ex = "__reactListeners$" + Hi
      , tx = "__reactHandles$" + Hi;
    function mi(e) {
        var r = e[Zn];
        if (r)
            return r;
        for (var s = e.parentNode; s; ) {
            if (r = s[vr] || s[Zn]) {
                if (s = r.alternate,
                r.child !== null || s !== null && s.child !== null)
                    for (e = Vf(e); e !== null; ) {
                        if (s = e[Zn])
                            return s;
                        e = Vf(e)
                    }
                return r
            }
            e = s,
            s = e.parentNode
        }
        return null
    }
    function Os(e) {
        return e = e[Zn] || e[vr],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function Yi(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(i(33))
    }
    function Ko(e) {
        return e[Vs] || null
    }
    var Xl = []
      , Gi = -1;
    function Br(e) {
        return {
            current: e
        }
    }
    function Xe(e) {
        0 > Gi || (e.current = Xl[Gi],
        Xl[Gi] = null,
        Gi--)
    }
    function Ge(e, r) {
        Gi++,
        Xl[Gi] = e.current,
        e.current = r
    }
    var Ir = {}
      , Lt = Br(Ir)
      , qt = Br(!1)
      , gi = Ir;
    function Ki(e, r) {
        var s = e.type.contextTypes;
        if (!s)
            return Ir;
        var a = e.stateNode;
        if (a && a.__reactInternalMemoizedUnmaskedChildContext === r)
            return a.__reactInternalMemoizedMaskedChildContext;
        var d = {}, h;
        for (h in s)
            d[h] = r[h];
        return a && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = r,
        e.__reactInternalMemoizedMaskedChildContext = d),
        d
    }
    function Zt(e) {
        return e = e.childContextTypes,
        e != null
    }
    function Jo() {
        Xe(qt),
        Xe(Lt)
    }
    function Of(e, r, s) {
        if (Lt.current !== Ir)
            throw Error(i(168));
        Ge(Lt, r),
        Ge(qt, s)
    }
    function Bf(e, r, s) {
        var a = e.stateNode;
        if (r = r.childContextTypes,
        typeof a.getChildContext != "function")
            return s;
        a = a.getChildContext();
        for (var d in a)
            if (!(d in r))
                throw Error(i(108, ze(e) || "Unknown", d));
        return K({}, s, a)
    }
    function Xo(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ir,
        gi = Lt.current,
        Ge(Lt, e),
        Ge(qt, qt.current),
        !0
    }
    function If(e, r, s) {
        var a = e.stateNode;
        if (!a)
            throw Error(i(169));
        s ? (e = Bf(e, r, gi),
        a.__reactInternalMemoizedMergedChildContext = e,
        Xe(qt),
        Xe(Lt),
        Ge(Lt, e)) : Xe(qt),
        Ge(qt, s)
    }
    var xr = null
      , Qo = !1
      , Ql = !1;
    function Ff(e) {
        xr === null ? xr = [e] : xr.push(e)
    }
    function nx(e) {
        Qo = !0,
        Ff(e)
    }
    function Fr() {
        if (!Ql && xr !== null) {
            Ql = !0;
            var e = 0
              , r = $e;
            try {
                var s = xr;
                for ($e = 1; e < s.length; e++) {
                    var a = s[e];
                    do
                        a = a(!0);
                    while (a !== null)
                }
                xr = null,
                Qo = !1
            } catch (d) {
                throw xr !== null && (xr = xr.slice(e + 1)),
                ct(wn, Fr),
                d
            } finally {
                $e = r,
                Ql = !1
            }
        }
        return null
    }
    var Ji = []
      , Xi = 0
      , qo = null
      , Zo = 0
      , bn = []
      , Sn = 0
      , yi = null
      , wr = 1
      , br = "";
    function vi(e, r) {
        Ji[Xi++] = Zo,
        Ji[Xi++] = qo,
        qo = e,
        Zo = r
    }
    function Wf(e, r, s) {
        bn[Sn++] = wr,
        bn[Sn++] = br,
        bn[Sn++] = yi,
        yi = e;
        var a = wr;
        e = br;
        var d = 32 - He(a) - 1;
        a &= ~(1 << d),
        s += 1;
        var h = 32 - He(r) + d;
        if (30 < h) {
            var x = d - d % 5;
            h = (a & (1 << x) - 1).toString(32),
            a >>= x,
            d -= x,
            wr = 1 << 32 - He(r) + d | s << d | a,
            br = h + e
        } else
            wr = 1 << h | s << d | a,
            br = e
    }
    function ql(e) {
        e.return !== null && (vi(e, 1),
        Wf(e, 1, 0))
    }
    function Zl(e) {
        for (; e === qo; )
            qo = Ji[--Xi],
            Ji[Xi] = null,
            Zo = Ji[--Xi],
            Ji[Xi] = null;
        for (; e === yi; )
            yi = bn[--Sn],
            bn[Sn] = null,
            br = bn[--Sn],
            bn[Sn] = null,
            wr = bn[--Sn],
            bn[Sn] = null
    }
    var fn = null
      , hn = null
      , Ze = !1
      , zn = null;
    function Uf(e, r) {
        var s = Nn(5, null, null, 0);
        s.elementType = "DELETED",
        s.stateNode = r,
        s.return = e,
        r = e.deletions,
        r === null ? (e.deletions = [s],
        e.flags |= 16) : r.push(s)
    }
    function $f(e, r) {
        switch (e.tag) {
        case 5:
            var s = e.type;
            return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r,
            r !== null ? (e.stateNode = r,
            fn = e,
            hn = Or(r.firstChild),
            !0) : !1;
        case 6:
            return r = e.pendingProps === "" || r.nodeType !== 3 ? null : r,
            r !== null ? (e.stateNode = r,
            fn = e,
            hn = null,
            !0) : !1;
        case 13:
            return r = r.nodeType !== 8 ? null : r,
            r !== null ? (s = yi !== null ? {
                id: wr,
                overflow: br
            } : null,
            e.memoizedState = {
                dehydrated: r,
                treeContext: s,
                retryLane: 1073741824
            },
            s = Nn(18, null, null, 0),
            s.stateNode = r,
            s.return = e,
            e.child = s,
            fn = e,
            hn = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function eu(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function tu(e) {
        if (Ze) {
            var r = hn;
            if (r) {
                var s = r;
                if (!$f(e, r)) {
                    if (eu(e))
                        throw Error(i(418));
                    r = Or(s.nextSibling);
                    var a = fn;
                    r && $f(e, r) ? Uf(a, s) : (e.flags = e.flags & -4097 | 2,
                    Ze = !1,
                    fn = e)
                }
            } else {
                if (eu(e))
                    throw Error(i(418));
                e.flags = e.flags & -4097 | 2,
                Ze = !1,
                fn = e
            }
        }
    }
    function Hf(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        fn = e
    }
    function ea(e) {
        if (e !== fn)
            return !1;
        if (!Ze)
            return Hf(e),
            Ze = !0,
            !1;
        var r;
        if ((r = e.tag !== 3) && !(r = e.tag !== 5) && (r = e.type,
        r = r !== "head" && r !== "body" && !Yl(e.type, e.memoizedProps)),
        r && (r = hn)) {
            if (eu(e))
                throw Yf(),
                Error(i(418));
            for (; r; )
                Uf(e, r),
                r = Or(r.nextSibling)
        }
        if (Hf(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(i(317));
            e: {
                for (e = e.nextSibling,
                r = 0; e; ) {
                    if (e.nodeType === 8) {
                        var s = e.data;
                        if (s === "/$") {
                            if (r === 0) {
                                hn = Or(e.nextSibling);
                                break e
                            }
                            r--
                        } else
                            s !== "$" && s !== "$!" && s !== "$?" || r++
                    }
                    e = e.nextSibling
                }
                hn = null
            }
        } else
            hn = fn ? Or(e.stateNode.nextSibling) : null;
        return !0
    }
    function Yf() {
        for (var e = hn; e; )
            e = Or(e.nextSibling)
    }
    function Qi() {
        hn = fn = null,
        Ze = !1
    }
    function nu(e) {
        zn === null ? zn = [e] : zn.push(e)
    }
    var rx = W.ReactCurrentBatchConfig;
    function Bs(e, r, s) {
        if (e = s.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (s._owner) {
                if (s = s._owner,
                s) {
                    if (s.tag !== 1)
                        throw Error(i(309));
                    var a = s.stateNode
                }
                if (!a)
                    throw Error(i(147, e));
                var d = a
                  , h = "" + e;
                return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === h ? r.ref : (r = function(x) {
                    var S = d.refs;
                    x === null ? delete S[h] : S[h] = x
                }
                ,
                r._stringRef = h,
                r)
            }
            if (typeof e != "string")
                throw Error(i(284));
            if (!s._owner)
                throw Error(i(290, e))
        }
        return e
    }
    function ta(e, r) {
        throw e = Object.prototype.toString.call(r),
        Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : e))
    }
    function Gf(e) {
        var r = e._init;
        return r(e._payload)
    }
    function Kf(e) {
        function r(_, P) {
            if (e) {
                var z = _.deletions;
                z === null ? (_.deletions = [P],
                _.flags |= 16) : z.push(P)
            }
        }
        function s(_, P) {
            if (!e)
                return null;
            for (; P !== null; )
                r(_, P),
                P = P.sibling;
            return null
        }
        function a(_, P) {
            for (_ = new Map; P !== null; )
                P.key !== null ? _.set(P.key, P) : _.set(P.index, P),
                P = P.sibling;
            return _
        }
        function d(_, P) {
            return _ = Jr(_, P),
            _.index = 0,
            _.sibling = null,
            _
        }
        function h(_, P, z) {
            return _.index = z,
            e ? (z = _.alternate,
            z !== null ? (z = z.index,
            z < P ? (_.flags |= 2,
            P) : z) : (_.flags |= 2,
            P)) : (_.flags |= 1048576,
            P)
        }
        function x(_) {
            return e && _.alternate === null && (_.flags |= 2),
            _
        }
        function S(_, P, z, Z) {
            return P === null || P.tag !== 6 ? (P = Gu(z, _.mode, Z),
            P.return = _,
            P) : (P = d(P, z),
            P.return = _,
            P)
        }
        function T(_, P, z, Z) {
            var ve = z.type;
            return ve === D ? G(_, P, z.props.children, Z, z.key) : P !== null && (P.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === ne && Gf(ve) === P.type) ? (Z = d(P, z.props),
            Z.ref = Bs(_, P, z),
            Z.return = _,
            Z) : (Z = Ea(z.type, z.key, z.props, null, _.mode, Z),
            Z.ref = Bs(_, P, z),
            Z.return = _,
            Z)
        }
        function O(_, P, z, Z) {
            return P === null || P.tag !== 4 || P.stateNode.containerInfo !== z.containerInfo || P.stateNode.implementation !== z.implementation ? (P = Ku(z, _.mode, Z),
            P.return = _,
            P) : (P = d(P, z.children || []),
            P.return = _,
            P)
        }
        function G(_, P, z, Z, ve) {
            return P === null || P.tag !== 7 ? (P = Ni(z, _.mode, Z, ve),
            P.return = _,
            P) : (P = d(P, z),
            P.return = _,
            P)
        }
        function J(_, P, z) {
            if (typeof P == "string" && P !== "" || typeof P == "number")
                return P = Gu("" + P, _.mode, z),
                P.return = _,
                P;
            if (typeof P == "object" && P !== null) {
                switch (P.$$typeof) {
                case U:
                    return z = Ea(P.type, P.key, P.props, null, _.mode, z),
                    z.ref = Bs(_, null, P),
                    z.return = _,
                    z;
                case se:
                    return P = Ku(P, _.mode, z),
                    P.return = _,
                    P;
                case ne:
                    var Z = P._init;
                    return J(_, Z(P._payload), z)
                }
                if (dr(P) || q(P))
                    return P = Ni(P, _.mode, z, null),
                    P.return = _,
                    P;
                ta(_, P)
            }
            return null
        }
        function Y(_, P, z, Z) {
            var ve = P !== null ? P.key : null;
            if (typeof z == "string" && z !== "" || typeof z == "number")
                return ve !== null ? null : S(_, P, "" + z, Z);
            if (typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case U:
                    return z.key === ve ? T(_, P, z, Z) : null;
                case se:
                    return z.key === ve ? O(_, P, z, Z) : null;
                case ne:
                    return ve = z._init,
                    Y(_, P, ve(z._payload), Z)
                }
                if (dr(z) || q(z))
                    return ve !== null ? null : G(_, P, z, Z, null);
                ta(_, z)
            }
            return null
        }
        function oe(_, P, z, Z, ve) {
            if (typeof Z == "string" && Z !== "" || typeof Z == "number")
                return _ = _.get(z) || null,
                S(P, _, "" + Z, ve);
            if (typeof Z == "object" && Z !== null) {
                switch (Z.$$typeof) {
                case U:
                    return _ = _.get(Z.key === null ? z : Z.key) || null,
                    T(P, _, Z, ve);
                case se:
                    return _ = _.get(Z.key === null ? z : Z.key) || null,
                    O(P, _, Z, ve);
                case ne:
                    var Ce = Z._init;
                    return oe(_, P, z, Ce(Z._payload), ve)
                }
                if (dr(Z) || q(Z))
                    return _ = _.get(z) || null,
                    G(P, _, Z, ve, null);
                ta(P, Z)
            }
            return null
        }
        function fe(_, P, z, Z) {
            for (var ve = null, Ce = null, Ee = P, Ne = P = 0, jt = null; Ee !== null && Ne < z.length; Ne++) {
                Ee.index > Ne ? (jt = Ee,
                Ee = null) : jt = Ee.sibling;
                var Fe = Y(_, Ee, z[Ne], Z);
                if (Fe === null) {
                    Ee === null && (Ee = jt);
                    break
                }
                e && Ee && Fe.alternate === null && r(_, Ee),
                P = h(Fe, P, Ne),
                Ce === null ? ve = Fe : Ce.sibling = Fe,
                Ce = Fe,
                Ee = jt
            }
            if (Ne === z.length)
                return s(_, Ee),
                Ze && vi(_, Ne),
                ve;
            if (Ee === null) {
                for (; Ne < z.length; Ne++)
                    Ee = J(_, z[Ne], Z),
                    Ee !== null && (P = h(Ee, P, Ne),
                    Ce === null ? ve = Ee : Ce.sibling = Ee,
                    Ce = Ee);
                return Ze && vi(_, Ne),
                ve
            }
            for (Ee = a(_, Ee); Ne < z.length; Ne++)
                jt = oe(Ee, _, Ne, z[Ne], Z),
                jt !== null && (e && jt.alternate !== null && Ee.delete(jt.key === null ? Ne : jt.key),
                P = h(jt, P, Ne),
                Ce === null ? ve = jt : Ce.sibling = jt,
                Ce = jt);
            return e && Ee.forEach(function(Xr) {
                return r(_, Xr)
            }),
            Ze && vi(_, Ne),
            ve
        }
        function ge(_, P, z, Z) {
            var ve = q(z);
            if (typeof ve != "function")
                throw Error(i(150));
            if (z = ve.call(z),
            z == null)
                throw Error(i(151));
            for (var Ce = ve = null, Ee = P, Ne = P = 0, jt = null, Fe = z.next(); Ee !== null && !Fe.done; Ne++,
            Fe = z.next()) {
                Ee.index > Ne ? (jt = Ee,
                Ee = null) : jt = Ee.sibling;
                var Xr = Y(_, Ee, Fe.value, Z);
                if (Xr === null) {
                    Ee === null && (Ee = jt);
                    break
                }
                e && Ee && Xr.alternate === null && r(_, Ee),
                P = h(Xr, P, Ne),
                Ce === null ? ve = Xr : Ce.sibling = Xr,
                Ce = Xr,
                Ee = jt
            }
            if (Fe.done)
                return s(_, Ee),
                Ze && vi(_, Ne),
                ve;
            if (Ee === null) {
                for (; !Fe.done; Ne++,
                Fe = z.next())
                    Fe = J(_, Fe.value, Z),
                    Fe !== null && (P = h(Fe, P, Ne),
                    Ce === null ? ve = Fe : Ce.sibling = Fe,
                    Ce = Fe);
                return Ze && vi(_, Ne),
                ve
            }
            for (Ee = a(_, Ee); !Fe.done; Ne++,
            Fe = z.next())
                Fe = oe(Ee, _, Ne, Fe.value, Z),
                Fe !== null && (e && Fe.alternate !== null && Ee.delete(Fe.key === null ? Ne : Fe.key),
                P = h(Fe, P, Ne),
                Ce === null ? ve = Fe : Ce.sibling = Fe,
                Ce = Fe);
            return e && Ee.forEach(function(zx) {
                return r(_, zx)
            }),
            Ze && vi(_, Ne),
            ve
        }
        function dt(_, P, z, Z) {
            if (typeof z == "object" && z !== null && z.type === D && z.key === null && (z = z.props.children),
            typeof z == "object" && z !== null) {
                switch (z.$$typeof) {
                case U:
                    e: {
                        for (var ve = z.key, Ce = P; Ce !== null; ) {
                            if (Ce.key === ve) {
                                if (ve = z.type,
                                ve === D) {
                                    if (Ce.tag === 7) {
                                        s(_, Ce.sibling),
                                        P = d(Ce, z.props.children),
                                        P.return = _,
                                        _ = P;
                                        break e
                                    }
                                } else if (Ce.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === ne && Gf(ve) === Ce.type) {
                                    s(_, Ce.sibling),
                                    P = d(Ce, z.props),
                                    P.ref = Bs(_, Ce, z),
                                    P.return = _,
                                    _ = P;
                                    break e
                                }
                                s(_, Ce);
                                break
                            } else
                                r(_, Ce);
                            Ce = Ce.sibling
                        }
                        z.type === D ? (P = Ni(z.props.children, _.mode, Z, z.key),
                        P.return = _,
                        _ = P) : (Z = Ea(z.type, z.key, z.props, null, _.mode, Z),
                        Z.ref = Bs(_, P, z),
                        Z.return = _,
                        _ = Z)
                    }
                    return x(_);
                case se:
                    e: {
                        for (Ce = z.key; P !== null; ) {
                            if (P.key === Ce)
                                if (P.tag === 4 && P.stateNode.containerInfo === z.containerInfo && P.stateNode.implementation === z.implementation) {
                                    s(_, P.sibling),
                                    P = d(P, z.children || []),
                                    P.return = _,
                                    _ = P;
                                    break e
                                } else {
                                    s(_, P);
                                    break
                                }
                            else
                                r(_, P);
                            P = P.sibling
                        }
                        P = Ku(z, _.mode, Z),
                        P.return = _,
                        _ = P
                    }
                    return x(_);
                case ne:
                    return Ce = z._init,
                    dt(_, P, Ce(z._payload), Z)
                }
                if (dr(z))
                    return fe(_, P, z, Z);
                if (q(z))
                    return ge(_, P, z, Z);
                ta(_, z)
            }
            return typeof z == "string" && z !== "" || typeof z == "number" ? (z = "" + z,
            P !== null && P.tag === 6 ? (s(_, P.sibling),
            P = d(P, z),
            P.return = _,
            _ = P) : (s(_, P),
            P = Gu(z, _.mode, Z),
            P.return = _,
            _ = P),
            x(_)) : s(_, P)
        }
        return dt
    }
    var qi = Kf(!0)
      , Jf = Kf(!1)
      , na = Br(null)
      , ra = null
      , Zi = null
      , ru = null;
    function iu() {
        ru = Zi = ra = null
    }
    function su(e) {
        var r = na.current;
        Xe(na),
        e._currentValue = r
    }
    function ou(e, r, s) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & r) !== r ? (e.childLanes |= r,
            a !== null && (a.childLanes |= r)) : a !== null && (a.childLanes & r) !== r && (a.childLanes |= r),
            e === s)
                break;
            e = e.return
        }
    }
    function es(e, r) {
        ra = e,
        ru = Zi = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & r) !== 0 && (en = !0),
        e.firstContext = null)
    }
    function kn(e) {
        var r = e._currentValue;
        if (ru !== e)
            if (e = {
                context: e,
                memoizedValue: r,
                next: null
            },
            Zi === null) {
                if (ra === null)
                    throw Error(i(308));
                Zi = e,
                ra.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                Zi = Zi.next = e;
        return r
    }
    var xi = null;
    function au(e) {
        xi === null ? xi = [e] : xi.push(e)
    }
    function Xf(e, r, s, a) {
        var d = r.interleaved;
        return d === null ? (s.next = s,
        au(r)) : (s.next = d.next,
        d.next = s),
        r.interleaved = s,
        Sr(e, a)
    }
    function Sr(e, r) {
        e.lanes |= r;
        var s = e.alternate;
        for (s !== null && (s.lanes |= r),
        s = e,
        e = e.return; e !== null; )
            e.childLanes |= r,
            s = e.alternate,
            s !== null && (s.childLanes |= r),
            s = e,
            e = e.return;
        return s.tag === 3 ? s.stateNode : null
    }
    var Wr = !1;
    function lu(e) {
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
    function Qf(e, r) {
        e = e.updateQueue,
        r.updateQueue === e && (r.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function kr(e, r) {
        return {
            eventTime: e,
            lane: r,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Ur(e, r, s) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (Be & 2) !== 0) {
            var d = a.pending;
            return d === null ? r.next = r : (r.next = d.next,
            d.next = r),
            a.pending = r,
            Sr(e, s)
        }
        return d = a.interleaved,
        d === null ? (r.next = r,
        au(a)) : (r.next = d.next,
        d.next = r),
        a.interleaved = r,
        Sr(e, s)
    }
    function ia(e, r, s) {
        if (r = r.updateQueue,
        r !== null && (r = r.shared,
        (s & 4194240) !== 0)) {
            var a = r.lanes;
            a &= e.pendingLanes,
            s |= a,
            r.lanes = s,
            Sl(e, s)
        }
    }
    function qf(e, r) {
        var s = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        s === a)) {
            var d = null
              , h = null;
            if (s = s.firstBaseUpdate,
            s !== null) {
                do {
                    var x = {
                        eventTime: s.eventTime,
                        lane: s.lane,
                        tag: s.tag,
                        payload: s.payload,
                        callback: s.callback,
                        next: null
                    };
                    h === null ? d = h = x : h = h.next = x,
                    s = s.next
                } while (s !== null);
                h === null ? d = h = r : h = h.next = r
            } else
                d = h = r;
            s = {
                baseState: a.baseState,
                firstBaseUpdate: d,
                lastBaseUpdate: h,
                shared: a.shared,
                effects: a.effects
            },
            e.updateQueue = s;
            return
        }
        e = s.lastBaseUpdate,
        e === null ? s.firstBaseUpdate = r : e.next = r,
        s.lastBaseUpdate = r
    }
    function sa(e, r, s, a) {
        var d = e.updateQueue;
        Wr = !1;
        var h = d.firstBaseUpdate
          , x = d.lastBaseUpdate
          , S = d.shared.pending;
        if (S !== null) {
            d.shared.pending = null;
            var T = S
              , O = T.next;
            T.next = null,
            x === null ? h = O : x.next = O,
            x = T;
            var G = e.alternate;
            G !== null && (G = G.updateQueue,
            S = G.lastBaseUpdate,
            S !== x && (S === null ? G.firstBaseUpdate = O : S.next = O,
            G.lastBaseUpdate = T))
        }
        if (h !== null) {
            var J = d.baseState;
            x = 0,
            G = O = T = null,
            S = h;
            do {
                var Y = S.lane
                  , oe = S.eventTime;
                if ((a & Y) === Y) {
                    G !== null && (G = G.next = {
                        eventTime: oe,
                        lane: 0,
                        tag: S.tag,
                        payload: S.payload,
                        callback: S.callback,
                        next: null
                    });
                    e: {
                        var fe = e
                          , ge = S;
                        switch (Y = r,
                        oe = s,
                        ge.tag) {
                        case 1:
                            if (fe = ge.payload,
                            typeof fe == "function") {
                                J = fe.call(oe, J, Y);
                                break e
                            }
                            J = fe;
                            break e;
                        case 3:
                            fe.flags = fe.flags & -65537 | 128;
                        case 0:
                            if (fe = ge.payload,
                            Y = typeof fe == "function" ? fe.call(oe, J, Y) : fe,
                            Y == null)
                                break e;
                            J = K({}, J, Y);
                            break e;
                        case 2:
                            Wr = !0
                        }
                    }
                    S.callback !== null && S.lane !== 0 && (e.flags |= 64,
                    Y = d.effects,
                    Y === null ? d.effects = [S] : Y.push(S))
                } else
                    oe = {
                        eventTime: oe,
                        lane: Y,
                        tag: S.tag,
                        payload: S.payload,
                        callback: S.callback,
                        next: null
                    },
                    G === null ? (O = G = oe,
                    T = J) : G = G.next = oe,
                    x |= Y;
                if (S = S.next,
                S === null) {
                    if (S = d.shared.pending,
                    S === null)
                        break;
                    Y = S,
                    S = Y.next,
                    Y.next = null,
                    d.lastBaseUpdate = Y,
                    d.shared.pending = null
                }
            } while (!0);
            if (G === null && (T = J),
            d.baseState = T,
            d.firstBaseUpdate = O,
            d.lastBaseUpdate = G,
            r = d.shared.interleaved,
            r !== null) {
                d = r;
                do
                    x |= d.lane,
                    d = d.next;
                while (d !== r)
            } else
                h === null && (d.shared.lanes = 0);
            Si |= x,
            e.lanes = x,
            e.memoizedState = J
        }
    }
    function Zf(e, r, s) {
        if (e = r.effects,
        r.effects = null,
        e !== null)
            for (r = 0; r < e.length; r++) {
                var a = e[r]
                  , d = a.callback;
                if (d !== null) {
                    if (a.callback = null,
                    a = s,
                    typeof d != "function")
                        throw Error(i(191, d));
                    d.call(a)
                }
            }
    }
    var Is = {}
      , er = Br(Is)
      , Fs = Br(Is)
      , Ws = Br(Is);
    function wi(e) {
        if (e === Is)
            throw Error(i(174));
        return e
    }
    function uu(e, r) {
        switch (Ge(Ws, r),
        Ge(Fs, e),
        Ge(er, Is),
        e = r.nodeType,
        e) {
        case 9:
        case 11:
            r = (r = r.documentElement) ? r.namespaceURI : fr(null, "");
            break;
        default:
            e = e === 8 ? r.parentNode : r,
            r = e.namespaceURI || null,
            e = e.tagName,
            r = fr(r, e)
        }
        Xe(er),
        Ge(er, r)
    }
    function ts() {
        Xe(er),
        Xe(Fs),
        Xe(Ws)
    }
    function eh(e) {
        wi(Ws.current);
        var r = wi(er.current)
          , s = fr(r, e.type);
        r !== s && (Ge(Fs, e),
        Ge(er, s))
    }
    function cu(e) {
        Fs.current === e && (Xe(er),
        Xe(Fs))
    }
    var nt = Br(0);
    function oa(e) {
        for (var r = e; r !== null; ) {
            if (r.tag === 13) {
                var s = r.memoizedState;
                if (s !== null && (s = s.dehydrated,
                s === null || s.data === "$?" || s.data === "$!"))
                    return r
            } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
                if ((r.flags & 128) !== 0)
                    return r
            } else if (r.child !== null) {
                r.child.return = r,
                r = r.child;
                continue
            }
            if (r === e)
                break;
            for (; r.sibling === null; ) {
                if (r.return === null || r.return === e)
                    return null;
                r = r.return
            }
            r.sibling.return = r.return,
            r = r.sibling
        }
        return null
    }
    var du = [];
    function fu() {
        for (var e = 0; e < du.length; e++)
            du[e]._workInProgressVersionPrimary = null;
        du.length = 0
    }
    var aa = W.ReactCurrentDispatcher
      , hu = W.ReactCurrentBatchConfig
      , bi = 0
      , rt = null
      , wt = null
      , Et = null
      , la = !1
      , Us = !1
      , $s = 0
      , ix = 0;
    function zt() {
        throw Error(i(321))
    }
    function pu(e, r) {
        if (r === null)
            return !1;
        for (var s = 0; s < r.length && s < e.length; s++)
            if (!Ln(e[s], r[s]))
                return !1;
        return !0
    }
    function mu(e, r, s, a, d, h) {
        if (bi = h,
        rt = r,
        r.memoizedState = null,
        r.updateQueue = null,
        r.lanes = 0,
        aa.current = e === null || e.memoizedState === null ? lx : ux,
        e = s(a, d),
        Us) {
            h = 0;
            do {
                if (Us = !1,
                $s = 0,
                25 <= h)
                    throw Error(i(301));
                h += 1,
                Et = wt = null,
                r.updateQueue = null,
                aa.current = cx,
                e = s(a, d)
            } while (Us)
        }
        if (aa.current = da,
        r = wt !== null && wt.next !== null,
        bi = 0,
        Et = wt = rt = null,
        la = !1,
        r)
            throw Error(i(300));
        return e
    }
    function gu() {
        var e = $s !== 0;
        return $s = 0,
        e
    }
    function tr() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Et === null ? rt.memoizedState = Et = e : Et = Et.next = e,
        Et
    }
    function Cn() {
        if (wt === null) {
            var e = rt.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = wt.next;
        var r = Et === null ? rt.memoizedState : Et.next;
        if (r !== null)
            Et = r,
            wt = e;
        else {
            if (e === null)
                throw Error(i(310));
            wt = e,
            e = {
                memoizedState: wt.memoizedState,
                baseState: wt.baseState,
                baseQueue: wt.baseQueue,
                queue: wt.queue,
                next: null
            },
            Et === null ? rt.memoizedState = Et = e : Et = Et.next = e
        }
        return Et
    }
    function Hs(e, r) {
        return typeof r == "function" ? r(e) : r
    }
    function yu(e) {
        var r = Cn()
          , s = r.queue;
        if (s === null)
            throw Error(i(311));
        s.lastRenderedReducer = e;
        var a = wt
          , d = a.baseQueue
          , h = s.pending;
        if (h !== null) {
            if (d !== null) {
                var x = d.next;
                d.next = h.next,
                h.next = x
            }
            a.baseQueue = d = h,
            s.pending = null
        }
        if (d !== null) {
            h = d.next,
            a = a.baseState;
            var S = x = null
              , T = null
              , O = h;
            do {
                var G = O.lane;
                if ((bi & G) === G)
                    T !== null && (T = T.next = {
                        lane: 0,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    }),
                    a = O.hasEagerState ? O.eagerState : e(a, O.action);
                else {
                    var J = {
                        lane: G,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    };
                    T === null ? (S = T = J,
                    x = a) : T = T.next = J,
                    rt.lanes |= G,
                    Si |= G
                }
                O = O.next
            } while (O !== null && O !== h);
            T === null ? x = a : T.next = S,
            Ln(a, r.memoizedState) || (en = !0),
            r.memoizedState = a,
            r.baseState = x,
            r.baseQueue = T,
            s.lastRenderedState = a
        }
        if (e = s.interleaved,
        e !== null) {
            d = e;
            do
                h = d.lane,
                rt.lanes |= h,
                Si |= h,
                d = d.next;
            while (d !== e)
        } else
            d === null && (s.lanes = 0);
        return [r.memoizedState, s.dispatch]
    }
    function vu(e) {
        var r = Cn()
          , s = r.queue;
        if (s === null)
            throw Error(i(311));
        s.lastRenderedReducer = e;
        var a = s.dispatch
          , d = s.pending
          , h = r.memoizedState;
        if (d !== null) {
            s.pending = null;
            var x = d = d.next;
            do
                h = e(h, x.action),
                x = x.next;
            while (x !== d);
            Ln(h, r.memoizedState) || (en = !0),
            r.memoizedState = h,
            r.baseQueue === null && (r.baseState = h),
            s.lastRenderedState = h
        }
        return [h, a]
    }
    function th() {}
    function nh(e, r) {
        var s = rt
          , a = Cn()
          , d = r()
          , h = !Ln(a.memoizedState, d);
        if (h && (a.memoizedState = d,
        en = !0),
        a = a.queue,
        xu(sh.bind(null, s, a, e), [e]),
        a.getSnapshot !== r || h || Et !== null && Et.memoizedState.tag & 1) {
            if (s.flags |= 2048,
            Ys(9, ih.bind(null, s, a, d, r), void 0, null),
            Nt === null)
                throw Error(i(349));
            (bi & 30) !== 0 || rh(s, r, d)
        }
        return d
    }
    function rh(e, r, s) {
        e.flags |= 16384,
        e = {
            getSnapshot: r,
            value: s
        },
        r = rt.updateQueue,
        r === null ? (r = {
            lastEffect: null,
            stores: null
        },
        rt.updateQueue = r,
        r.stores = [e]) : (s = r.stores,
        s === null ? r.stores = [e] : s.push(e))
    }
    function ih(e, r, s, a) {
        r.value = s,
        r.getSnapshot = a,
        oh(r) && ah(e)
    }
    function sh(e, r, s) {
        return s(function() {
            oh(r) && ah(e)
        })
    }
    function oh(e) {
        var r = e.getSnapshot;
        e = e.value;
        try {
            var s = r();
            return !Ln(e, s)
        } catch {
            return !0
        }
    }
    function ah(e) {
        var r = Sr(e, 1);
        r !== null && In(r, e, 1, -1)
    }
    function lh(e) {
        var r = tr();
        return typeof e == "function" && (e = e()),
        r.memoizedState = r.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Hs,
            lastRenderedState: e
        },
        r.queue = e,
        e = e.dispatch = ax.bind(null, rt, e),
        [r.memoizedState, e]
    }
    function Ys(e, r, s, a) {
        return e = {
            tag: e,
            create: r,
            destroy: s,
            deps: a,
            next: null
        },
        r = rt.updateQueue,
        r === null ? (r = {
            lastEffect: null,
            stores: null
        },
        rt.updateQueue = r,
        r.lastEffect = e.next = e) : (s = r.lastEffect,
        s === null ? r.lastEffect = e.next = e : (a = s.next,
        s.next = e,
        e.next = a,
        r.lastEffect = e)),
        e
    }
    function uh() {
        return Cn().memoizedState
    }
    function ua(e, r, s, a) {
        var d = tr();
        rt.flags |= e,
        d.memoizedState = Ys(1 | r, s, void 0, a === void 0 ? null : a)
    }
    function ca(e, r, s, a) {
        var d = Cn();
        a = a === void 0 ? null : a;
        var h = void 0;
        if (wt !== null) {
            var x = wt.memoizedState;
            if (h = x.destroy,
            a !== null && pu(a, x.deps)) {
                d.memoizedState = Ys(r, s, h, a);
                return
            }
        }
        rt.flags |= e,
        d.memoizedState = Ys(1 | r, s, h, a)
    }
    function ch(e, r) {
        return ua(8390656, 8, e, r)
    }
    function xu(e, r) {
        return ca(2048, 8, e, r)
    }
    function dh(e, r) {
        return ca(4, 2, e, r)
    }
    function fh(e, r) {
        return ca(4, 4, e, r)
    }
    function hh(e, r) {
        if (typeof r == "function")
            return e = e(),
            r(e),
            function() {
                r(null)
            }
            ;
        if (r != null)
            return e = e(),
            r.current = e,
            function() {
                r.current = null
            }
    }
    function ph(e, r, s) {
        return s = s != null ? s.concat([e]) : null,
        ca(4, 4, hh.bind(null, r, e), s)
    }
    function wu() {}
    function mh(e, r) {
        var s = Cn();
        r = r === void 0 ? null : r;
        var a = s.memoizedState;
        return a !== null && r !== null && pu(r, a[1]) ? a[0] : (s.memoizedState = [e, r],
        e)
    }
    function gh(e, r) {
        var s = Cn();
        r = r === void 0 ? null : r;
        var a = s.memoizedState;
        return a !== null && r !== null && pu(r, a[1]) ? a[0] : (e = e(),
        s.memoizedState = [e, r],
        e)
    }
    function yh(e, r, s) {
        return (bi & 21) === 0 ? (e.baseState && (e.baseState = !1,
        en = !0),
        e.memoizedState = s) : (Ln(s, r) || (s = Yd(),
        rt.lanes |= s,
        Si |= s,
        e.baseState = !0),
        r)
    }
    function sx(e, r) {
        var s = $e;
        $e = s !== 0 && 4 > s ? s : 4,
        e(!0);
        var a = hu.transition;
        hu.transition = {};
        try {
            e(!1),
            r()
        } finally {
            $e = s,
            hu.transition = a
        }
    }
    function vh() {
        return Cn().memoizedState
    }
    function ox(e, r, s) {
        var a = Gr(e);
        if (s = {
            lane: a,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        xh(e))
            wh(r, s);
        else if (s = Xf(e, r, s, a),
        s !== null) {
            var d = Yt();
            In(s, e, a, d),
            bh(s, r, a)
        }
    }
    function ax(e, r, s) {
        var a = Gr(e)
          , d = {
            lane: a,
            action: s,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (xh(e))
            wh(r, d);
        else {
            var h = e.alternate;
            if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = r.lastRenderedReducer,
            h !== null))
                try {
                    var x = r.lastRenderedState
                      , S = h(x, s);
                    if (d.hasEagerState = !0,
                    d.eagerState = S,
                    Ln(S, x)) {
                        var T = r.interleaved;
                        T === null ? (d.next = d,
                        au(r)) : (d.next = T.next,
                        T.next = d),
                        r.interleaved = d;
                        return
                    }
                } catch {} finally {}
            s = Xf(e, r, d, a),
            s !== null && (d = Yt(),
            In(s, e, a, d),
            bh(s, r, a))
        }
    }
    function xh(e) {
        var r = e.alternate;
        return e === rt || r !== null && r === rt
    }
    function wh(e, r) {
        Us = la = !0;
        var s = e.pending;
        s === null ? r.next = r : (r.next = s.next,
        s.next = r),
        e.pending = r
    }
    function bh(e, r, s) {
        if ((s & 4194240) !== 0) {
            var a = r.lanes;
            a &= e.pendingLanes,
            s |= a,
            r.lanes = s,
            Sl(e, s)
        }
    }
    var da = {
        readContext: kn,
        useCallback: zt,
        useContext: zt,
        useEffect: zt,
        useImperativeHandle: zt,
        useInsertionEffect: zt,
        useLayoutEffect: zt,
        useMemo: zt,
        useReducer: zt,
        useRef: zt,
        useState: zt,
        useDebugValue: zt,
        useDeferredValue: zt,
        useTransition: zt,
        useMutableSource: zt,
        useSyncExternalStore: zt,
        useId: zt,
        unstable_isNewReconciler: !1
    }
      , lx = {
        readContext: kn,
        useCallback: function(e, r) {
            return tr().memoizedState = [e, r === void 0 ? null : r],
            e
        },
        useContext: kn,
        useEffect: ch,
        useImperativeHandle: function(e, r, s) {
            return s = s != null ? s.concat([e]) : null,
            ua(4194308, 4, hh.bind(null, r, e), s)
        },
        useLayoutEffect: function(e, r) {
            return ua(4194308, 4, e, r)
        },
        useInsertionEffect: function(e, r) {
            return ua(4, 2, e, r)
        },
        useMemo: function(e, r) {
            var s = tr();
            return r = r === void 0 ? null : r,
            e = e(),
            s.memoizedState = [e, r],
            e
        },
        useReducer: function(e, r, s) {
            var a = tr();
            return r = s !== void 0 ? s(r) : r,
            a.memoizedState = a.baseState = r,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: r
            },
            a.queue = e,
            e = e.dispatch = ox.bind(null, rt, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var r = tr();
            return e = {
                current: e
            },
            r.memoizedState = e
        },
        useState: lh,
        useDebugValue: wu,
        useDeferredValue: function(e) {
            return tr().memoizedState = e
        },
        useTransition: function() {
            var e = lh(!1)
              , r = e[0];
            return e = sx.bind(null, e[1]),
            tr().memoizedState = e,
            [r, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, r, s) {
            var a = rt
              , d = tr();
            if (Ze) {
                if (s === void 0)
                    throw Error(i(407));
                s = s()
            } else {
                if (s = r(),
                Nt === null)
                    throw Error(i(349));
                (bi & 30) !== 0 || rh(a, r, s)
            }
            d.memoizedState = s;
            var h = {
                value: s,
                getSnapshot: r
            };
            return d.queue = h,
            ch(sh.bind(null, a, h, e), [e]),
            a.flags |= 2048,
            Ys(9, ih.bind(null, a, h, s, r), void 0, null),
            s
        },
        useId: function() {
            var e = tr()
              , r = Nt.identifierPrefix;
            if (Ze) {
                var s = br
                  , a = wr;
                s = (a & ~(1 << 32 - He(a) - 1)).toString(32) + s,
                r = ":" + r + "R" + s,
                s = $s++,
                0 < s && (r += "H" + s.toString(32)),
                r += ":"
            } else
                s = ix++,
                r = ":" + r + "r" + s.toString(32) + ":";
            return e.memoizedState = r
        },
        unstable_isNewReconciler: !1
    }
      , ux = {
        readContext: kn,
        useCallback: mh,
        useContext: kn,
        useEffect: xu,
        useImperativeHandle: ph,
        useInsertionEffect: dh,
        useLayoutEffect: fh,
        useMemo: gh,
        useReducer: yu,
        useRef: uh,
        useState: function() {
            return yu(Hs)
        },
        useDebugValue: wu,
        useDeferredValue: function(e) {
            var r = Cn();
            return yh(r, wt.memoizedState, e)
        },
        useTransition: function() {
            var e = yu(Hs)[0]
              , r = Cn().memoizedState;
            return [e, r]
        },
        useMutableSource: th,
        useSyncExternalStore: nh,
        useId: vh,
        unstable_isNewReconciler: !1
    }
      , cx = {
        readContext: kn,
        useCallback: mh,
        useContext: kn,
        useEffect: xu,
        useImperativeHandle: ph,
        useInsertionEffect: dh,
        useLayoutEffect: fh,
        useMemo: gh,
        useReducer: vu,
        useRef: uh,
        useState: function() {
            return vu(Hs)
        },
        useDebugValue: wu,
        useDeferredValue: function(e) {
            var r = Cn();
            return wt === null ? r.memoizedState = e : yh(r, wt.memoizedState, e)
        },
        useTransition: function() {
            var e = vu(Hs)[0]
              , r = Cn().memoizedState;
            return [e, r]
        },
        useMutableSource: th,
        useSyncExternalStore: nh,
        useId: vh,
        unstable_isNewReconciler: !1
    };
    function Vn(e, r) {
        if (e && e.defaultProps) {
            r = K({}, r),
            e = e.defaultProps;
            for (var s in e)
                r[s] === void 0 && (r[s] = e[s]);
            return r
        }
        return r
    }
    function bu(e, r, s, a) {
        r = e.memoizedState,
        s = s(a, r),
        s = s == null ? r : K({}, r, s),
        e.memoizedState = s,
        e.lanes === 0 && (e.updateQueue.baseState = s)
    }
    var fa = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? pe(e) === e : !1
        },
        enqueueSetState: function(e, r, s) {
            e = e._reactInternals;
            var a = Yt()
              , d = Gr(e)
              , h = kr(a, d);
            h.payload = r,
            s != null && (h.callback = s),
            r = Ur(e, h, d),
            r !== null && (In(r, e, d, a),
            ia(r, e, d))
        },
        enqueueReplaceState: function(e, r, s) {
            e = e._reactInternals;
            var a = Yt()
              , d = Gr(e)
              , h = kr(a, d);
            h.tag = 1,
            h.payload = r,
            s != null && (h.callback = s),
            r = Ur(e, h, d),
            r !== null && (In(r, e, d, a),
            ia(r, e, d))
        },
        enqueueForceUpdate: function(e, r) {
            e = e._reactInternals;
            var s = Yt()
              , a = Gr(e)
              , d = kr(s, a);
            d.tag = 2,
            r != null && (d.callback = r),
            r = Ur(e, d, a),
            r !== null && (In(r, e, a, s),
            ia(r, e, a))
        }
    };
    function Sh(e, r, s, a, d, h, x) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, h, x) : r.prototype && r.prototype.isPureReactComponent ? !Ds(s, a) || !Ds(d, h) : !0
    }
    function kh(e, r, s) {
        var a = !1
          , d = Ir
          , h = r.contextType;
        return typeof h == "object" && h !== null ? h = kn(h) : (d = Zt(r) ? gi : Lt.current,
        a = r.contextTypes,
        h = (a = a != null) ? Ki(e, d) : Ir),
        r = new r(s,h),
        e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        r.updater = fa,
        e.stateNode = r,
        r._reactInternals = e,
        a && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = d,
        e.__reactInternalMemoizedMaskedChildContext = h),
        r
    }
    function Ch(e, r, s, a) {
        e = r.state,
        typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, a),
        typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, a),
        r.state !== e && fa.enqueueReplaceState(r, r.state, null)
    }
    function Su(e, r, s, a) {
        var d = e.stateNode;
        d.props = s,
        d.state = e.memoizedState,
        d.refs = {},
        lu(e);
        var h = r.contextType;
        typeof h == "object" && h !== null ? d.context = kn(h) : (h = Zt(r) ? gi : Lt.current,
        d.context = Ki(e, h)),
        d.state = e.memoizedState,
        h = r.getDerivedStateFromProps,
        typeof h == "function" && (bu(e, r, h, s),
        d.state = e.memoizedState),
        typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state,
        typeof d.componentWillMount == "function" && d.componentWillMount(),
        typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
        r !== d.state && fa.enqueueReplaceState(d, d.state, null),
        sa(e, s, d, a),
        d.state = e.memoizedState),
        typeof d.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function ns(e, r) {
        try {
            var s = ""
              , a = r;
            do
                s += we(a),
                a = a.return;
            while (a);
            var d = s
        } catch (h) {
            d = `
Error generating stack: ` + h.message + `
` + h.stack
        }
        return {
            value: e,
            source: r,
            stack: d,
            digest: null
        }
    }
    function ku(e, r, s) {
        return {
            value: e,
            source: null,
            stack: s ?? null,
            digest: r ?? null
        }
    }
    function Cu(e, r) {
        try {
            console.error(r.value)
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    var dx = typeof WeakMap == "function" ? WeakMap : Map;
    function Eh(e, r, s) {
        s = kr(-1, s),
        s.tag = 3,
        s.payload = {
            element: null
        };
        var a = r.value;
        return s.callback = function() {
            xa || (xa = !0,
            Bu = a),
            Cu(e, r)
        }
        ,
        s
    }
    function Nh(e, r, s) {
        s = kr(-1, s),
        s.tag = 3;
        var a = e.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var d = r.value;
            s.payload = function() {
                return a(d)
            }
            ,
            s.callback = function() {
                Cu(e, r)
            }
        }
        var h = e.stateNode;
        return h !== null && typeof h.componentDidCatch == "function" && (s.callback = function() {
            Cu(e, r),
            typeof a != "function" && (Hr === null ? Hr = new Set([this]) : Hr.add(this));
            var x = r.stack;
            this.componentDidCatch(r.value, {
                componentStack: x !== null ? x : ""
            })
        }
        ),
        s
    }
    function jh(e, r, s) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new dx;
            var d = new Set;
            a.set(r, d)
        } else
            d = a.get(r),
            d === void 0 && (d = new Set,
            a.set(r, d));
        d.has(s) || (d.add(s),
        e = Ex.bind(null, e, r, s),
        r.then(e, e))
    }
    function Th(e) {
        do {
            var r;
            if ((r = e.tag === 13) && (r = e.memoizedState,
            r = r !== null ? r.dehydrated !== null : !0),
            r)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function Rh(e, r, s, a, d) {
        return (e.mode & 1) === 0 ? (e === r ? e.flags |= 65536 : (e.flags |= 128,
        s.flags |= 131072,
        s.flags &= -52805,
        s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = kr(-1, 1),
        r.tag = 2,
        Ur(s, r, 1))),
        s.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = d,
        e)
    }
    var fx = W.ReactCurrentOwner
      , en = !1;
    function Ht(e, r, s, a) {
        r.child = e === null ? Jf(r, null, s, a) : qi(r, e.child, s, a)
    }
    function Mh(e, r, s, a, d) {
        s = s.render;
        var h = r.ref;
        return es(r, d),
        a = mu(e, r, s, a, h, d),
        s = gu(),
        e !== null && !en ? (r.updateQueue = e.updateQueue,
        r.flags &= -2053,
        e.lanes &= ~d,
        Cr(e, r, d)) : (Ze && s && ql(r),
        r.flags |= 1,
        Ht(e, r, a, d),
        r.child)
    }
    function Ph(e, r, s, a, d) {
        if (e === null) {
            var h = s.type;
            return typeof h == "function" && !Yu(h) && h.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15,
            r.type = h,
            Dh(e, r, h, a, d)) : (e = Ea(s.type, null, a, r, r.mode, d),
            e.ref = r.ref,
            e.return = r,
            r.child = e)
        }
        if (h = e.child,
        (e.lanes & d) === 0) {
            var x = h.memoizedProps;
            if (s = s.compare,
            s = s !== null ? s : Ds,
            s(x, a) && e.ref === r.ref)
                return Cr(e, r, d)
        }
        return r.flags |= 1,
        e = Jr(h, a),
        e.ref = r.ref,
        e.return = r,
        r.child = e
    }
    function Dh(e, r, s, a, d) {
        if (e !== null) {
            var h = e.memoizedProps;
            if (Ds(h, a) && e.ref === r.ref)
                if (en = !1,
                r.pendingProps = a = h,
                (e.lanes & d) !== 0)
                    (e.flags & 131072) !== 0 && (en = !0);
                else
                    return r.lanes = e.lanes,
                    Cr(e, r, d)
        }
        return Eu(e, r, s, a, d)
    }
    function Ah(e, r, s) {
        var a = r.pendingProps
          , d = a.children
          , h = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden")
            if ((r.mode & 1) === 0)
                r.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ge(is, pn),
                pn |= s;
            else {
                if ((s & 1073741824) === 0)
                    return e = h !== null ? h.baseLanes | s : s,
                    r.lanes = r.childLanes = 1073741824,
                    r.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    r.updateQueue = null,
                    Ge(is, pn),
                    pn |= e,
                    null;
                r.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                a = h !== null ? h.baseLanes : s,
                Ge(is, pn),
                pn |= a
            }
        else
            h !== null ? (a = h.baseLanes | s,
            r.memoizedState = null) : a = s,
            Ge(is, pn),
            pn |= a;
        return Ht(e, r, d, s),
        r.child
    }
    function _h(e, r) {
        var s = r.ref;
        (e === null && s !== null || e !== null && e.ref !== s) && (r.flags |= 512,
        r.flags |= 2097152)
    }
    function Eu(e, r, s, a, d) {
        var h = Zt(s) ? gi : Lt.current;
        return h = Ki(r, h),
        es(r, d),
        s = mu(e, r, s, a, h, d),
        a = gu(),
        e !== null && !en ? (r.updateQueue = e.updateQueue,
        r.flags &= -2053,
        e.lanes &= ~d,
        Cr(e, r, d)) : (Ze && a && ql(r),
        r.flags |= 1,
        Ht(e, r, s, d),
        r.child)
    }
    function Lh(e, r, s, a, d) {
        if (Zt(s)) {
            var h = !0;
            Xo(r)
        } else
            h = !1;
        if (es(r, d),
        r.stateNode === null)
            pa(e, r),
            kh(r, s, a),
            Su(r, s, a, d),
            a = !0;
        else if (e === null) {
            var x = r.stateNode
              , S = r.memoizedProps;
            x.props = S;
            var T = x.context
              , O = s.contextType;
            typeof O == "object" && O !== null ? O = kn(O) : (O = Zt(s) ? gi : Lt.current,
            O = Ki(r, O));
            var G = s.getDerivedStateFromProps
              , J = typeof G == "function" || typeof x.getSnapshotBeforeUpdate == "function";
            J || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (S !== a || T !== O) && Ch(r, x, a, O),
            Wr = !1;
            var Y = r.memoizedState;
            x.state = Y,
            sa(r, a, x, d),
            T = r.memoizedState,
            S !== a || Y !== T || qt.current || Wr ? (typeof G == "function" && (bu(r, s, G, a),
            T = r.memoizedState),
            (S = Wr || Sh(r, s, S, a, Y, T, O)) ? (J || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(),
            typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()),
            typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308),
            r.memoizedProps = a,
            r.memoizedState = T),
            x.props = a,
            x.state = T,
            x.context = O,
            a = S) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308),
            a = !1)
        } else {
            x = r.stateNode,
            Qf(e, r),
            S = r.memoizedProps,
            O = r.type === r.elementType ? S : Vn(r.type, S),
            x.props = O,
            J = r.pendingProps,
            Y = x.context,
            T = s.contextType,
            typeof T == "object" && T !== null ? T = kn(T) : (T = Zt(s) ? gi : Lt.current,
            T = Ki(r, T));
            var oe = s.getDerivedStateFromProps;
            (G = typeof oe == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (S !== J || Y !== T) && Ch(r, x, a, T),
            Wr = !1,
            Y = r.memoizedState,
            x.state = Y,
            sa(r, a, x, d);
            var fe = r.memoizedState;
            S !== J || Y !== fe || qt.current || Wr ? (typeof oe == "function" && (bu(r, s, oe, a),
            fe = r.memoizedState),
            (O = Wr || Sh(r, s, O, a, Y, fe, T) || !1) ? (G || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(a, fe, T),
            typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(a, fe, T)),
            typeof x.componentDidUpdate == "function" && (r.flags |= 4),
            typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || S === e.memoizedProps && Y === e.memoizedState || (r.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Y === e.memoizedState || (r.flags |= 1024),
            r.memoizedProps = a,
            r.memoizedState = fe),
            x.props = a,
            x.state = fe,
            x.context = T,
            a = O) : (typeof x.componentDidUpdate != "function" || S === e.memoizedProps && Y === e.memoizedState || (r.flags |= 4),
            typeof x.getSnapshotBeforeUpdate != "function" || S === e.memoizedProps && Y === e.memoizedState || (r.flags |= 1024),
            a = !1)
        }
        return Nu(e, r, s, a, h, d)
    }
    function Nu(e, r, s, a, d, h) {
        _h(e, r);
        var x = (r.flags & 128) !== 0;
        if (!a && !x)
            return d && If(r, s, !1),
            Cr(e, r, h);
        a = r.stateNode,
        fx.current = r;
        var S = x && typeof s.getDerivedStateFromError != "function" ? null : a.render();
        return r.flags |= 1,
        e !== null && x ? (r.child = qi(r, e.child, null, h),
        r.child = qi(r, null, S, h)) : Ht(e, r, S, h),
        r.memoizedState = a.state,
        d && If(r, s, !0),
        r.child
    }
    function zh(e) {
        var r = e.stateNode;
        r.pendingContext ? Of(e, r.pendingContext, r.pendingContext !== r.context) : r.context && Of(e, r.context, !1),
        uu(e, r.containerInfo)
    }
    function Vh(e, r, s, a, d) {
        return Qi(),
        nu(d),
        r.flags |= 256,
        Ht(e, r, s, a),
        r.child
    }
    var ju = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function Tu(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Oh(e, r, s) {
        var a = r.pendingProps, d = nt.current, h = !1, x = (r.flags & 128) !== 0, S;
        if ((S = x) || (S = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0),
        S ? (h = !0,
        r.flags &= -129) : (e === null || e.memoizedState !== null) && (d |= 1),
        Ge(nt, d & 1),
        e === null)
            return tu(r),
            e = r.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : e.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824,
            null) : (x = a.children,
            e = a.fallback,
            h ? (a = r.mode,
            h = r.child,
            x = {
                mode: "hidden",
                children: x
            },
            (a & 1) === 0 && h !== null ? (h.childLanes = 0,
            h.pendingProps = x) : h = Na(x, a, 0, null),
            e = Ni(e, a, s, null),
            h.return = r,
            e.return = r,
            h.sibling = e,
            r.child = h,
            r.child.memoizedState = Tu(s),
            r.memoizedState = ju,
            e) : Ru(r, x));
        if (d = e.memoizedState,
        d !== null && (S = d.dehydrated,
        S !== null))
            return hx(e, r, x, a, S, d, s);
        if (h) {
            h = a.fallback,
            x = r.mode,
            d = e.child,
            S = d.sibling;
            var T = {
                mode: "hidden",
                children: a.children
            };
            return (x & 1) === 0 && r.child !== d ? (a = r.child,
            a.childLanes = 0,
            a.pendingProps = T,
            r.deletions = null) : (a = Jr(d, T),
            a.subtreeFlags = d.subtreeFlags & 14680064),
            S !== null ? h = Jr(S, h) : (h = Ni(h, x, s, null),
            h.flags |= 2),
            h.return = r,
            a.return = r,
            a.sibling = h,
            r.child = a,
            a = h,
            h = r.child,
            x = e.child.memoizedState,
            x = x === null ? Tu(s) : {
                baseLanes: x.baseLanes | s,
                cachePool: null,
                transitions: x.transitions
            },
            h.memoizedState = x,
            h.childLanes = e.childLanes & ~s,
            r.memoizedState = ju,
            a
        }
        return h = e.child,
        e = h.sibling,
        a = Jr(h, {
            mode: "visible",
            children: a.children
        }),
        (r.mode & 1) === 0 && (a.lanes = s),
        a.return = r,
        a.sibling = null,
        e !== null && (s = r.deletions,
        s === null ? (r.deletions = [e],
        r.flags |= 16) : s.push(e)),
        r.child = a,
        r.memoizedState = null,
        a
    }
    function Ru(e, r) {
        return r = Na({
            mode: "visible",
            children: r
        }, e.mode, 0, null),
        r.return = e,
        e.child = r
    }
    function ha(e, r, s, a) {
        return a !== null && nu(a),
        qi(r, e.child, null, s),
        e = Ru(r, r.pendingProps.children),
        e.flags |= 2,
        r.memoizedState = null,
        e
    }
    function hx(e, r, s, a, d, h, x) {
        if (s)
            return r.flags & 256 ? (r.flags &= -257,
            a = ku(Error(i(422))),
            ha(e, r, x, a)) : r.memoizedState !== null ? (r.child = e.child,
            r.flags |= 128,
            null) : (h = a.fallback,
            d = r.mode,
            a = Na({
                mode: "visible",
                children: a.children
            }, d, 0, null),
            h = Ni(h, d, x, null),
            h.flags |= 2,
            a.return = r,
            h.return = r,
            a.sibling = h,
            r.child = a,
            (r.mode & 1) !== 0 && qi(r, e.child, null, x),
            r.child.memoizedState = Tu(x),
            r.memoizedState = ju,
            h);
        if ((r.mode & 1) === 0)
            return ha(e, r, x, null);
        if (d.data === "$!") {
            if (a = d.nextSibling && d.nextSibling.dataset,
            a)
                var S = a.dgst;
            return a = S,
            h = Error(i(419)),
            a = ku(h, a, void 0),
            ha(e, r, x, a)
        }
        if (S = (x & e.childLanes) !== 0,
        en || S) {
            if (a = Nt,
            a !== null) {
                switch (x & -x) {
                case 4:
                    d = 2;
                    break;
                case 16:
                    d = 8;
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
                    d = 32;
                    break;
                case 536870912:
                    d = 268435456;
                    break;
                default:
                    d = 0
                }
                d = (d & (a.suspendedLanes | x)) !== 0 ? 0 : d,
                d !== 0 && d !== h.retryLane && (h.retryLane = d,
                Sr(e, d),
                In(a, e, d, -1))
            }
            return Hu(),
            a = ku(Error(i(421))),
            ha(e, r, x, a)
        }
        return d.data === "$?" ? (r.flags |= 128,
        r.child = e.child,
        r = Nx.bind(null, e),
        d._reactRetry = r,
        null) : (e = h.treeContext,
        hn = Or(d.nextSibling),
        fn = r,
        Ze = !0,
        zn = null,
        e !== null && (bn[Sn++] = wr,
        bn[Sn++] = br,
        bn[Sn++] = yi,
        wr = e.id,
        br = e.overflow,
        yi = r),
        r = Ru(r, a.children),
        r.flags |= 4096,
        r)
    }
    function Bh(e, r, s) {
        e.lanes |= r;
        var a = e.alternate;
        a !== null && (a.lanes |= r),
        ou(e.return, r, s)
    }
    function Mu(e, r, s, a, d) {
        var h = e.memoizedState;
        h === null ? e.memoizedState = {
            isBackwards: r,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: s,
            tailMode: d
        } : (h.isBackwards = r,
        h.rendering = null,
        h.renderingStartTime = 0,
        h.last = a,
        h.tail = s,
        h.tailMode = d)
    }
    function Ih(e, r, s) {
        var a = r.pendingProps
          , d = a.revealOrder
          , h = a.tail;
        if (Ht(e, r, a.children, s),
        a = nt.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            r.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = r.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && Bh(e, s, r);
                    else if (e.tag === 19)
                        Bh(e, s, r);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === r)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === r)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a &= 1
        }
        if (Ge(nt, a),
        (r.mode & 1) === 0)
            r.memoizedState = null;
        else
            switch (d) {
            case "forwards":
                for (s = r.child,
                d = null; s !== null; )
                    e = s.alternate,
                    e !== null && oa(e) === null && (d = s),
                    s = s.sibling;
                s = d,
                s === null ? (d = r.child,
                r.child = null) : (d = s.sibling,
                s.sibling = null),
                Mu(r, !1, d, s, h);
                break;
            case "backwards":
                for (s = null,
                d = r.child,
                r.child = null; d !== null; ) {
                    if (e = d.alternate,
                    e !== null && oa(e) === null) {
                        r.child = d;
                        break
                    }
                    e = d.sibling,
                    d.sibling = s,
                    s = d,
                    d = e
                }
                Mu(r, !0, s, null, h);
                break;
            case "together":
                Mu(r, !1, null, null, void 0);
                break;
            default:
                r.memoizedState = null
            }
        return r.child
    }
    function pa(e, r) {
        (r.mode & 1) === 0 && e !== null && (e.alternate = null,
        r.alternate = null,
        r.flags |= 2)
    }
    function Cr(e, r, s) {
        if (e !== null && (r.dependencies = e.dependencies),
        Si |= r.lanes,
        (s & r.childLanes) === 0)
            return null;
        if (e !== null && r.child !== e.child)
            throw Error(i(153));
        if (r.child !== null) {
            for (e = r.child,
            s = Jr(e, e.pendingProps),
            r.child = s,
            s.return = r; e.sibling !== null; )
                e = e.sibling,
                s = s.sibling = Jr(e, e.pendingProps),
                s.return = r;
            s.sibling = null
        }
        return r.child
    }
    function px(e, r, s) {
        switch (r.tag) {
        case 3:
            zh(r),
            Qi();
            break;
        case 5:
            eh(r);
            break;
        case 1:
            Zt(r.type) && Xo(r);
            break;
        case 4:
            uu(r, r.stateNode.containerInfo);
            break;
        case 10:
            var a = r.type._context
              , d = r.memoizedProps.value;
            Ge(na, a._currentValue),
            a._currentValue = d;
            break;
        case 13:
            if (a = r.memoizedState,
            a !== null)
                return a.dehydrated !== null ? (Ge(nt, nt.current & 1),
                r.flags |= 128,
                null) : (s & r.child.childLanes) !== 0 ? Oh(e, r, s) : (Ge(nt, nt.current & 1),
                e = Cr(e, r, s),
                e !== null ? e.sibling : null);
            Ge(nt, nt.current & 1);
            break;
        case 19:
            if (a = (s & r.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (a)
                    return Ih(e, r, s);
                r.flags |= 128
            }
            if (d = r.memoizedState,
            d !== null && (d.rendering = null,
            d.tail = null,
            d.lastEffect = null),
            Ge(nt, nt.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return r.lanes = 0,
            Ah(e, r, s)
        }
        return Cr(e, r, s)
    }
    var Fh, Pu, Wh, Uh;
    Fh = function(e, r) {
        for (var s = r.child; s !== null; ) {
            if (s.tag === 5 || s.tag === 6)
                e.appendChild(s.stateNode);
            else if (s.tag !== 4 && s.child !== null) {
                s.child.return = s,
                s = s.child;
                continue
            }
            if (s === r)
                break;
            for (; s.sibling === null; ) {
                if (s.return === null || s.return === r)
                    return;
                s = s.return
            }
            s.sibling.return = s.return,
            s = s.sibling
        }
    }
    ,
    Pu = function() {}
    ,
    Wh = function(e, r, s, a) {
        var d = e.memoizedProps;
        if (d !== a) {
            e = r.stateNode,
            wi(er.current);
            var h = null;
            switch (s) {
            case "input":
                d = Hn(e, d),
                a = Hn(e, a),
                h = [];
                break;
            case "select":
                d = K({}, d, {
                    value: void 0
                }),
                a = K({}, a, {
                    value: void 0
                }),
                h = [];
                break;
            case "textarea":
                d = xt(e, d),
                a = xt(e, a),
                h = [];
                break;
            default:
                typeof d.onClick != "function" && typeof a.onClick == "function" && (e.onclick = Go)
            }
            hr(s, a);
            var x;
            s = null;
            for (O in d)
                if (!a.hasOwnProperty(O) && d.hasOwnProperty(O) && d[O] != null)
                    if (O === "style") {
                        var S = d[O];
                        for (x in S)
                            S.hasOwnProperty(x) && (s || (s = {}),
                            s[x] = "")
                    } else
                        O !== "dangerouslySetInnerHTML" && O !== "children" && O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && O !== "autoFocus" && (l.hasOwnProperty(O) ? h || (h = []) : (h = h || []).push(O, null));
            for (O in a) {
                var T = a[O];
                if (S = d != null ? d[O] : void 0,
                a.hasOwnProperty(O) && T !== S && (T != null || S != null))
                    if (O === "style")
                        if (S) {
                            for (x in S)
                                !S.hasOwnProperty(x) || T && T.hasOwnProperty(x) || (s || (s = {}),
                                s[x] = "");
                            for (x in T)
                                T.hasOwnProperty(x) && S[x] !== T[x] && (s || (s = {}),
                                s[x] = T[x])
                        } else
                            s || (h || (h = []),
                            h.push(O, s)),
                            s = T;
                    else
                        O === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0,
                        S = S ? S.__html : void 0,
                        T != null && S !== T && (h = h || []).push(O, T)) : O === "children" ? typeof T != "string" && typeof T != "number" || (h = h || []).push(O, "" + T) : O !== "suppressContentEditableWarning" && O !== "suppressHydrationWarning" && (l.hasOwnProperty(O) ? (T != null && O === "onScroll" && Je("scroll", e),
                        h || S === T || (h = [])) : (h = h || []).push(O, T))
            }
            s && (h = h || []).push("style", s);
            var O = h;
            (r.updateQueue = O) && (r.flags |= 4)
        }
    }
    ,
    Uh = function(e, r, s, a) {
        s !== a && (r.flags |= 4)
    }
    ;
    function Gs(e, r) {
        if (!Ze)
            switch (e.tailMode) {
            case "hidden":
                r = e.tail;
                for (var s = null; r !== null; )
                    r.alternate !== null && (s = r),
                    r = r.sibling;
                s === null ? e.tail = null : s.sibling = null;
                break;
            case "collapsed":
                s = e.tail;
                for (var a = null; s !== null; )
                    s.alternate !== null && (a = s),
                    s = s.sibling;
                a === null ? r || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function Vt(e) {
        var r = e.alternate !== null && e.alternate.child === e.child
          , s = 0
          , a = 0;
        if (r)
            for (var d = e.child; d !== null; )
                s |= d.lanes | d.childLanes,
                a |= d.subtreeFlags & 14680064,
                a |= d.flags & 14680064,
                d.return = e,
                d = d.sibling;
        else
            for (d = e.child; d !== null; )
                s |= d.lanes | d.childLanes,
                a |= d.subtreeFlags,
                a |= d.flags,
                d.return = e,
                d = d.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = s,
        r
    }
    function mx(e, r, s) {
        var a = r.pendingProps;
        switch (Zl(r),
        r.tag) {
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
            return Vt(r),
            null;
        case 1:
            return Zt(r.type) && Jo(),
            Vt(r),
            null;
        case 3:
            return a = r.stateNode,
            ts(),
            Xe(qt),
            Xe(Lt),
            fu(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (ea(r) ? r.flags |= 4 : e === null || e.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024,
            zn !== null && (Wu(zn),
            zn = null))),
            Pu(e, r),
            Vt(r),
            null;
        case 5:
            cu(r);
            var d = wi(Ws.current);
            if (s = r.type,
            e !== null && r.stateNode != null)
                Wh(e, r, s, a, d),
                e.ref !== r.ref && (r.flags |= 512,
                r.flags |= 2097152);
            else {
                if (!a) {
                    if (r.stateNode === null)
                        throw Error(i(166));
                    return Vt(r),
                    null
                }
                if (e = wi(er.current),
                ea(r)) {
                    a = r.stateNode,
                    s = r.type;
                    var h = r.memoizedProps;
                    switch (a[Zn] = r,
                    a[Vs] = h,
                    e = (r.mode & 1) !== 0,
                    s) {
                    case "dialog":
                        Je("cancel", a),
                        Je("close", a);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Je("load", a);
                        break;
                    case "video":
                    case "audio":
                        for (d = 0; d < _s.length; d++)
                            Je(_s[d], a);
                        break;
                    case "source":
                        Je("error", a);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Je("error", a),
                        Je("load", a);
                        break;
                    case "details":
                        Je("toggle", a);
                        break;
                    case "input":
                        Vi(a, h),
                        Je("invalid", a);
                        break;
                    case "select":
                        a._wrapperState = {
                            wasMultiple: !!h.multiple
                        },
                        Je("invalid", a);
                        break;
                    case "textarea":
                        An(a, h),
                        Je("invalid", a)
                    }
                    hr(s, h),
                    d = null;
                    for (var x in h)
                        if (h.hasOwnProperty(x)) {
                            var S = h[x];
                            x === "children" ? typeof S == "string" ? a.textContent !== S && (h.suppressHydrationWarning !== !0 && Yo(a.textContent, S, e),
                            d = ["children", S]) : typeof S == "number" && a.textContent !== "" + S && (h.suppressHydrationWarning !== !0 && Yo(a.textContent, S, e),
                            d = ["children", "" + S]) : l.hasOwnProperty(x) && S != null && x === "onScroll" && Je("scroll", a)
                        }
                    switch (s) {
                    case "input":
                        Tr(a),
                        li(a, h, !0);
                        break;
                    case "textarea":
                        Tr(a),
                        Gn(a);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof h.onClick == "function" && (a.onclick = Go)
                    }
                    a = d,
                    r.updateQueue = a,
                    a !== null && (r.flags |= 4)
                } else {
                    x = d.nodeType === 9 ? d : d.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = Kn(s)),
                    e === "http://www.w3.org/1999/xhtml" ? s === "script" ? (e = x.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = x.createElement(s, {
                        is: a.is
                    }) : (e = x.createElement(s),
                    s === "select" && (x = e,
                    a.multiple ? x.multiple = !0 : a.size && (x.size = a.size))) : e = x.createElementNS(e, s),
                    e[Zn] = r,
                    e[Vs] = a,
                    Fh(e, r, !1, !1),
                    r.stateNode = e;
                    e: {
                        switch (x = Rr(s, a),
                        s) {
                        case "dialog":
                            Je("cancel", e),
                            Je("close", e),
                            d = a;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Je("load", e),
                            d = a;
                            break;
                        case "video":
                        case "audio":
                            for (d = 0; d < _s.length; d++)
                                Je(_s[d], e);
                            d = a;
                            break;
                        case "source":
                            Je("error", e),
                            d = a;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Je("error", e),
                            Je("load", e),
                            d = a;
                            break;
                        case "details":
                            Je("toggle", e),
                            d = a;
                            break;
                        case "input":
                            Vi(e, a),
                            d = Hn(e, a),
                            Je("invalid", e);
                            break;
                        case "option":
                            d = a;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!a.multiple
                            },
                            d = K({}, a, {
                                value: void 0
                            }),
                            Je("invalid", e);
                            break;
                        case "textarea":
                            An(e, a),
                            d = xt(e, a),
                            Je("invalid", e);
                            break;
                        default:
                            d = a
                        }
                        hr(s, d),
                        S = d;
                        for (h in S)
                            if (S.hasOwnProperty(h)) {
                                var T = S[h];
                                h === "style" ? Xt(e, T) : h === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0,
                                T != null && _t(e, T)) : h === "children" ? typeof T == "string" ? (s !== "textarea" || T !== "") && Wt(e, T) : typeof T == "number" && Wt(e, "" + T) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (l.hasOwnProperty(h) ? T != null && h === "onScroll" && Je("scroll", e) : T != null && B(e, h, T, x))
                            }
                        switch (s) {
                        case "input":
                            Tr(e),
                            li(e, a, !1);
                            break;
                        case "textarea":
                            Tr(e),
                            Gn(e);
                            break;
                        case "option":
                            a.value != null && e.setAttribute("value", "" + Pe(a.value));
                            break;
                        case "select":
                            e.multiple = !!a.multiple,
                            h = a.value,
                            h != null ? Yn(e, !!a.multiple, h, !1) : a.defaultValue != null && Yn(e, !!a.multiple, a.defaultValue, !0);
                            break;
                        default:
                            typeof d.onClick == "function" && (e.onclick = Go)
                        }
                        switch (s) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            a = !!a.autoFocus;
                            break e;
                        case "img":
                            a = !0;
                            break e;
                        default:
                            a = !1
                        }
                    }
                    a && (r.flags |= 4)
                }
                r.ref !== null && (r.flags |= 512,
                r.flags |= 2097152)
            }
            return Vt(r),
            null;
        case 6:
            if (e && r.stateNode != null)
                Uh(e, r, e.memoizedProps, a);
            else {
                if (typeof a != "string" && r.stateNode === null)
                    throw Error(i(166));
                if (s = wi(Ws.current),
                wi(er.current),
                ea(r)) {
                    if (a = r.stateNode,
                    s = r.memoizedProps,
                    a[Zn] = r,
                    (h = a.nodeValue !== s) && (e = fn,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            Yo(a.nodeValue, s, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && Yo(a.nodeValue, s, (e.mode & 1) !== 0)
                        }
                    h && (r.flags |= 4)
                } else
                    a = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(a),
                    a[Zn] = r,
                    r.stateNode = a
            }
            return Vt(r),
            null;
        case 13:
            if (Xe(nt),
            a = r.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Ze && hn !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
                    Yf(),
                    Qi(),
                    r.flags |= 98560,
                    h = !1;
                else if (h = ea(r),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!h)
                            throw Error(i(318));
                        if (h = r.memoizedState,
                        h = h !== null ? h.dehydrated : null,
                        !h)
                            throw Error(i(317));
                        h[Zn] = r
                    } else
                        Qi(),
                        (r.flags & 128) === 0 && (r.memoizedState = null),
                        r.flags |= 4;
                    Vt(r),
                    h = !1
                } else
                    zn !== null && (Wu(zn),
                    zn = null),
                    h = !0;
                if (!h)
                    return r.flags & 65536 ? r : null
            }
            return (r.flags & 128) !== 0 ? (r.lanes = s,
            r) : (a = a !== null,
            a !== (e !== null && e.memoizedState !== null) && a && (r.child.flags |= 8192,
            (r.mode & 1) !== 0 && (e === null || (nt.current & 1) !== 0 ? bt === 0 && (bt = 3) : Hu())),
            r.updateQueue !== null && (r.flags |= 4),
            Vt(r),
            null);
        case 4:
            return ts(),
            Pu(e, r),
            e === null && Ls(r.stateNode.containerInfo),
            Vt(r),
            null;
        case 10:
            return su(r.type._context),
            Vt(r),
            null;
        case 17:
            return Zt(r.type) && Jo(),
            Vt(r),
            null;
        case 19:
            if (Xe(nt),
            h = r.memoizedState,
            h === null)
                return Vt(r),
                null;
            if (a = (r.flags & 128) !== 0,
            x = h.rendering,
            x === null)
                if (a)
                    Gs(h, !1);
                else {
                    if (bt !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = r.child; e !== null; ) {
                            if (x = oa(e),
                            x !== null) {
                                for (r.flags |= 128,
                                Gs(h, !1),
                                a = x.updateQueue,
                                a !== null && (r.updateQueue = a,
                                r.flags |= 4),
                                r.subtreeFlags = 0,
                                a = s,
                                s = r.child; s !== null; )
                                    h = s,
                                    e = a,
                                    h.flags &= 14680066,
                                    x = h.alternate,
                                    x === null ? (h.childLanes = 0,
                                    h.lanes = e,
                                    h.child = null,
                                    h.subtreeFlags = 0,
                                    h.memoizedProps = null,
                                    h.memoizedState = null,
                                    h.updateQueue = null,
                                    h.dependencies = null,
                                    h.stateNode = null) : (h.childLanes = x.childLanes,
                                    h.lanes = x.lanes,
                                    h.child = x.child,
                                    h.subtreeFlags = 0,
                                    h.deletions = null,
                                    h.memoizedProps = x.memoizedProps,
                                    h.memoizedState = x.memoizedState,
                                    h.updateQueue = x.updateQueue,
                                    h.type = x.type,
                                    e = x.dependencies,
                                    h.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    s = s.sibling;
                                return Ge(nt, nt.current & 1 | 2),
                                r.child
                            }
                            e = e.sibling
                        }
                    h.tail !== null && Ue() > ss && (r.flags |= 128,
                    a = !0,
                    Gs(h, !1),
                    r.lanes = 4194304)
                }
            else {
                if (!a)
                    if (e = oa(x),
                    e !== null) {
                        if (r.flags |= 128,
                        a = !0,
                        s = e.updateQueue,
                        s !== null && (r.updateQueue = s,
                        r.flags |= 4),
                        Gs(h, !0),
                        h.tail === null && h.tailMode === "hidden" && !x.alternate && !Ze)
                            return Vt(r),
                            null
                    } else
                        2 * Ue() - h.renderingStartTime > ss && s !== 1073741824 && (r.flags |= 128,
                        a = !0,
                        Gs(h, !1),
                        r.lanes = 4194304);
                h.isBackwards ? (x.sibling = r.child,
                r.child = x) : (s = h.last,
                s !== null ? s.sibling = x : r.child = x,
                h.last = x)
            }
            return h.tail !== null ? (r = h.tail,
            h.rendering = r,
            h.tail = r.sibling,
            h.renderingStartTime = Ue(),
            r.sibling = null,
            s = nt.current,
            Ge(nt, a ? s & 1 | 2 : s & 1),
            r) : (Vt(r),
            null);
        case 22:
        case 23:
            return $u(),
            a = r.memoizedState !== null,
            e !== null && e.memoizedState !== null !== a && (r.flags |= 8192),
            a && (r.mode & 1) !== 0 ? (pn & 1073741824) !== 0 && (Vt(r),
            r.subtreeFlags & 6 && (r.flags |= 8192)) : Vt(r),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(i(156, r.tag))
    }
    function gx(e, r) {
        switch (Zl(r),
        r.tag) {
        case 1:
            return Zt(r.type) && Jo(),
            e = r.flags,
            e & 65536 ? (r.flags = e & -65537 | 128,
            r) : null;
        case 3:
            return ts(),
            Xe(qt),
            Xe(Lt),
            fu(),
            e = r.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (r.flags = e & -65537 | 128,
            r) : null;
        case 5:
            return cu(r),
            null;
        case 13:
            if (Xe(nt),
            e = r.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (r.alternate === null)
                    throw Error(i(340));
                Qi()
            }
            return e = r.flags,
            e & 65536 ? (r.flags = e & -65537 | 128,
            r) : null;
        case 19:
            return Xe(nt),
            null;
        case 4:
            return ts(),
            null;
        case 10:
            return su(r.type._context),
            null;
        case 22:
        case 23:
            return $u(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var ma = !1
      , Ot = !1
      , yx = typeof WeakSet == "function" ? WeakSet : Set
      , ce = null;
    function rs(e, r) {
        var s = e.ref;
        if (s !== null)
            if (typeof s == "function")
                try {
                    s(null)
                } catch (a) {
                    ot(e, r, a)
                }
            else
                s.current = null
    }
    function Du(e, r, s) {
        try {
            s()
        } catch (a) {
            ot(e, r, a)
        }
    }
    var $h = !1;
    function vx(e, r) {
        if ($l = Lo,
        e = Sf(),
        zl(e)) {
            if ("selectionStart"in e)
                var s = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    s = (s = e.ownerDocument) && s.defaultView || window;
                    var a = s.getSelection && s.getSelection();
                    if (a && a.rangeCount !== 0) {
                        s = a.anchorNode;
                        var d = a.anchorOffset
                          , h = a.focusNode;
                        a = a.focusOffset;
                        try {
                            s.nodeType,
                            h.nodeType
                        } catch {
                            s = null;
                            break e
                        }
                        var x = 0
                          , S = -1
                          , T = -1
                          , O = 0
                          , G = 0
                          , J = e
                          , Y = null;
                        t: for (; ; ) {
                            for (var oe; J !== s || d !== 0 && J.nodeType !== 3 || (S = x + d),
                            J !== h || a !== 0 && J.nodeType !== 3 || (T = x + a),
                            J.nodeType === 3 && (x += J.nodeValue.length),
                            (oe = J.firstChild) !== null; )
                                Y = J,
                                J = oe;
                            for (; ; ) {
                                if (J === e)
                                    break t;
                                if (Y === s && ++O === d && (S = x),
                                Y === h && ++G === a && (T = x),
                                (oe = J.nextSibling) !== null)
                                    break;
                                J = Y,
                                Y = J.parentNode
                            }
                            J = oe
                        }
                        s = S === -1 || T === -1 ? null : {
                            start: S,
                            end: T
                        }
                    } else
                        s = null
                }
            s = s || {
                start: 0,
                end: 0
            }
        } else
            s = null;
        for (Hl = {
            focusedElem: e,
            selectionRange: s
        },
        Lo = !1,
        ce = r; ce !== null; )
            if (r = ce,
            e = r.child,
            (r.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = r,
                ce = e;
            else
                for (; ce !== null; ) {
                    r = ce;
                    try {
                        var fe = r.alternate;
                        if ((r.flags & 1024) !== 0)
                            switch (r.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (fe !== null) {
                                    var ge = fe.memoizedProps
                                      , dt = fe.memoizedState
                                      , _ = r.stateNode
                                      , P = _.getSnapshotBeforeUpdate(r.elementType === r.type ? ge : Vn(r.type, ge), dt);
                                    _.__reactInternalSnapshotBeforeUpdate = P
                                }
                                break;
                            case 3:
                                var z = r.stateNode.containerInfo;
                                z.nodeType === 1 ? z.textContent = "" : z.nodeType === 9 && z.documentElement && z.removeChild(z.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(i(163))
                            }
                    } catch (Z) {
                        ot(r, r.return, Z)
                    }
                    if (e = r.sibling,
                    e !== null) {
                        e.return = r.return,
                        ce = e;
                        break
                    }
                    ce = r.return
                }
        return fe = $h,
        $h = !1,
        fe
    }
    function Ks(e, r, s) {
        var a = r.updateQueue;
        if (a = a !== null ? a.lastEffect : null,
        a !== null) {
            var d = a = a.next;
            do {
                if ((d.tag & e) === e) {
                    var h = d.destroy;
                    d.destroy = void 0,
                    h !== void 0 && Du(r, s, h)
                }
                d = d.next
            } while (d !== a)
        }
    }
    function ga(e, r) {
        if (r = r.updateQueue,
        r = r !== null ? r.lastEffect : null,
        r !== null) {
            var s = r = r.next;
            do {
                if ((s.tag & e) === e) {
                    var a = s.create;
                    s.destroy = a()
                }
                s = s.next
            } while (s !== r)
        }
    }
    function Au(e) {
        var r = e.ref;
        if (r !== null) {
            var s = e.stateNode;
            switch (e.tag) {
            case 5:
                e = s;
                break;
            default:
                e = s
            }
            typeof r == "function" ? r(e) : r.current = e
        }
    }
    function Hh(e) {
        var r = e.alternate;
        r !== null && (e.alternate = null,
        Hh(r)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (r = e.stateNode,
        r !== null && (delete r[Zn],
        delete r[Vs],
        delete r[Jl],
        delete r[ex],
        delete r[tx])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function Yh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Gh(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Yh(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function _u(e, r, s) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            r ? s.nodeType === 8 ? s.parentNode.insertBefore(e, r) : s.insertBefore(e, r) : (s.nodeType === 8 ? (r = s.parentNode,
            r.insertBefore(e, s)) : (r = s,
            r.appendChild(e)),
            s = s._reactRootContainer,
            s != null || r.onclick !== null || (r.onclick = Go));
        else if (a !== 4 && (e = e.child,
        e !== null))
            for (_u(e, r, s),
            e = e.sibling; e !== null; )
                _u(e, r, s),
                e = e.sibling
    }
    function Lu(e, r, s) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            r ? s.insertBefore(e, r) : s.appendChild(e);
        else if (a !== 4 && (e = e.child,
        e !== null))
            for (Lu(e, r, s),
            e = e.sibling; e !== null; )
                Lu(e, r, s),
                e = e.sibling
    }
    var Rt = null
      , On = !1;
    function $r(e, r, s) {
        for (s = s.child; s !== null; )
            Kh(e, r, s),
            s = s.sibling
    }
    function Kh(e, r, s) {
        if ($t && typeof $t.onCommitFiberUnmount == "function")
            try {
                $t.onCommitFiberUnmount(mr, s)
            } catch {}
        switch (s.tag) {
        case 5:
            Ot || rs(s, r);
        case 6:
            var a = Rt
              , d = On;
            Rt = null,
            $r(e, r, s),
            Rt = a,
            On = d,
            Rt !== null && (On ? (e = Rt,
            s = s.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(s) : e.removeChild(s)) : Rt.removeChild(s.stateNode));
            break;
        case 18:
            Rt !== null && (On ? (e = Rt,
            s = s.stateNode,
            e.nodeType === 8 ? Kl(e.parentNode, s) : e.nodeType === 1 && Kl(e, s),
            Ns(e)) : Kl(Rt, s.stateNode));
            break;
        case 4:
            a = Rt,
            d = On,
            Rt = s.stateNode.containerInfo,
            On = !0,
            $r(e, r, s),
            Rt = a,
            On = d;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Ot && (a = s.updateQueue,
            a !== null && (a = a.lastEffect,
            a !== null))) {
                d = a = a.next;
                do {
                    var h = d
                      , x = h.destroy;
                    h = h.tag,
                    x !== void 0 && ((h & 2) !== 0 || (h & 4) !== 0) && Du(s, r, x),
                    d = d.next
                } while (d !== a)
            }
            $r(e, r, s);
            break;
        case 1:
            if (!Ot && (rs(s, r),
            a = s.stateNode,
            typeof a.componentWillUnmount == "function"))
                try {
                    a.props = s.memoizedProps,
                    a.state = s.memoizedState,
                    a.componentWillUnmount()
                } catch (S) {
                    ot(s, r, S)
                }
            $r(e, r, s);
            break;
        case 21:
            $r(e, r, s);
            break;
        case 22:
            s.mode & 1 ? (Ot = (a = Ot) || s.memoizedState !== null,
            $r(e, r, s),
            Ot = a) : $r(e, r, s);
            break;
        default:
            $r(e, r, s)
        }
    }
    function Jh(e) {
        var r = e.updateQueue;
        if (r !== null) {
            e.updateQueue = null;
            var s = e.stateNode;
            s === null && (s = e.stateNode = new yx),
            r.forEach(function(a) {
                var d = jx.bind(null, e, a);
                s.has(a) || (s.add(a),
                a.then(d, d))
            })
        }
    }
    function Bn(e, r) {
        var s = r.deletions;
        if (s !== null)
            for (var a = 0; a < s.length; a++) {
                var d = s[a];
                try {
                    var h = e
                      , x = r
                      , S = x;
                    e: for (; S !== null; ) {
                        switch (S.tag) {
                        case 5:
                            Rt = S.stateNode,
                            On = !1;
                            break e;
                        case 3:
                            Rt = S.stateNode.containerInfo,
                            On = !0;
                            break e;
                        case 4:
                            Rt = S.stateNode.containerInfo,
                            On = !0;
                            break e
                        }
                        S = S.return
                    }
                    if (Rt === null)
                        throw Error(i(160));
                    Kh(h, x, d),
                    Rt = null,
                    On = !1;
                    var T = d.alternate;
                    T !== null && (T.return = null),
                    d.return = null
                } catch (O) {
                    ot(d, r, O)
                }
            }
        if (r.subtreeFlags & 12854)
            for (r = r.child; r !== null; )
                Xh(r, e),
                r = r.sibling
    }
    function Xh(e, r) {
        var s = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Bn(r, e),
            nr(e),
            a & 4) {
                try {
                    Ks(3, e, e.return),
                    ga(3, e)
                } catch (ge) {
                    ot(e, e.return, ge)
                }
                try {
                    Ks(5, e, e.return)
                } catch (ge) {
                    ot(e, e.return, ge)
                }
            }
            break;
        case 1:
            Bn(r, e),
            nr(e),
            a & 512 && s !== null && rs(s, s.return);
            break;
        case 5:
            if (Bn(r, e),
            nr(e),
            a & 512 && s !== null && rs(s, s.return),
            e.flags & 32) {
                var d = e.stateNode;
                try {
                    Wt(d, "")
                } catch (ge) {
                    ot(e, e.return, ge)
                }
            }
            if (a & 4 && (d = e.stateNode,
            d != null)) {
                var h = e.memoizedProps
                  , x = s !== null ? s.memoizedProps : h
                  , S = e.type
                  , T = e.updateQueue;
                if (e.updateQueue = null,
                T !== null)
                    try {
                        S === "input" && h.type === "radio" && h.name != null && an(d, h),
                        Rr(S, x);
                        var O = Rr(S, h);
                        for (x = 0; x < T.length; x += 2) {
                            var G = T[x]
                              , J = T[x + 1];
                            G === "style" ? Xt(d, J) : G === "dangerouslySetInnerHTML" ? _t(d, J) : G === "children" ? Wt(d, J) : B(d, G, J, O)
                        }
                        switch (S) {
                        case "input":
                            Dn(d, h);
                            break;
                        case "textarea":
                            vn(d, h);
                            break;
                        case "select":
                            var Y = d._wrapperState.wasMultiple;
                            d._wrapperState.wasMultiple = !!h.multiple;
                            var oe = h.value;
                            oe != null ? Yn(d, !!h.multiple, oe, !1) : Y !== !!h.multiple && (h.defaultValue != null ? Yn(d, !!h.multiple, h.defaultValue, !0) : Yn(d, !!h.multiple, h.multiple ? [] : "", !1))
                        }
                        d[Vs] = h
                    } catch (ge) {
                        ot(e, e.return, ge)
                    }
            }
            break;
        case 6:
            if (Bn(r, e),
            nr(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(i(162));
                d = e.stateNode,
                h = e.memoizedProps;
                try {
                    d.nodeValue = h
                } catch (ge) {
                    ot(e, e.return, ge)
                }
            }
            break;
        case 3:
            if (Bn(r, e),
            nr(e),
            a & 4 && s !== null && s.memoizedState.isDehydrated)
                try {
                    Ns(r.containerInfo)
                } catch (ge) {
                    ot(e, e.return, ge)
                }
            break;
        case 4:
            Bn(r, e),
            nr(e);
            break;
        case 13:
            Bn(r, e),
            nr(e),
            d = e.child,
            d.flags & 8192 && (h = d.memoizedState !== null,
            d.stateNode.isHidden = h,
            !h || d.alternate !== null && d.alternate.memoizedState !== null || (Ou = Ue())),
            a & 4 && Jh(e);
            break;
        case 22:
            if (G = s !== null && s.memoizedState !== null,
            e.mode & 1 ? (Ot = (O = Ot) || G,
            Bn(r, e),
            Ot = O) : Bn(r, e),
            nr(e),
            a & 8192) {
                if (O = e.memoizedState !== null,
                (e.stateNode.isHidden = O) && !G && (e.mode & 1) !== 0)
                    for (ce = e,
                    G = e.child; G !== null; ) {
                        for (J = ce = G; ce !== null; ) {
                            switch (Y = ce,
                            oe = Y.child,
                            Y.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                Ks(4, Y, Y.return);
                                break;
                            case 1:
                                rs(Y, Y.return);
                                var fe = Y.stateNode;
                                if (typeof fe.componentWillUnmount == "function") {
                                    a = Y,
                                    s = Y.return;
                                    try {
                                        r = a,
                                        fe.props = r.memoizedProps,
                                        fe.state = r.memoizedState,
                                        fe.componentWillUnmount()
                                    } catch (ge) {
                                        ot(a, s, ge)
                                    }
                                }
                                break;
                            case 5:
                                rs(Y, Y.return);
                                break;
                            case 22:
                                if (Y.memoizedState !== null) {
                                    Zh(J);
                                    continue
                                }
                            }
                            oe !== null ? (oe.return = Y,
                            ce = oe) : Zh(J)
                        }
                        G = G.sibling
                    }
                e: for (G = null,
                J = e; ; ) {
                    if (J.tag === 5) {
                        if (G === null) {
                            G = J;
                            try {
                                d = J.stateNode,
                                O ? (h = d.style,
                                typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (S = J.stateNode,
                                T = J.memoizedProps.style,
                                x = T != null && T.hasOwnProperty("display") ? T.display : null,
                                S.style.display = Oi("display", x))
                            } catch (ge) {
                                ot(e, e.return, ge)
                            }
                        }
                    } else if (J.tag === 6) {
                        if (G === null)
                            try {
                                J.stateNode.nodeValue = O ? "" : J.memoizedProps
                            } catch (ge) {
                                ot(e, e.return, ge)
                            }
                    } else if ((J.tag !== 22 && J.tag !== 23 || J.memoizedState === null || J === e) && J.child !== null) {
                        J.child.return = J,
                        J = J.child;
                        continue
                    }
                    if (J === e)
                        break e;
                    for (; J.sibling === null; ) {
                        if (J.return === null || J.return === e)
                            break e;
                        G === J && (G = null),
                        J = J.return
                    }
                    G === J && (G = null),
                    J.sibling.return = J.return,
                    J = J.sibling
                }
            }
            break;
        case 19:
            Bn(r, e),
            nr(e),
            a & 4 && Jh(e);
            break;
        case 21:
            break;
        default:
            Bn(r, e),
            nr(e)
        }
    }
    function nr(e) {
        var r = e.flags;
        if (r & 2) {
            try {
                e: {
                    for (var s = e.return; s !== null; ) {
                        if (Yh(s)) {
                            var a = s;
                            break e
                        }
                        s = s.return
                    }
                    throw Error(i(160))
                }
                switch (a.tag) {
                case 5:
                    var d = a.stateNode;
                    a.flags & 32 && (Wt(d, ""),
                    a.flags &= -33);
                    var h = Gh(e);
                    Lu(e, h, d);
                    break;
                case 3:
                case 4:
                    var x = a.stateNode.containerInfo
                      , S = Gh(e);
                    _u(e, S, x);
                    break;
                default:
                    throw Error(i(161))
                }
            } catch (T) {
                ot(e, e.return, T)
            }
            e.flags &= -3
        }
        r & 4096 && (e.flags &= -4097)
    }
    function xx(e, r, s) {
        ce = e,
        Qh(e)
    }
    function Qh(e, r, s) {
        for (var a = (e.mode & 1) !== 0; ce !== null; ) {
            var d = ce
              , h = d.child;
            if (d.tag === 22 && a) {
                var x = d.memoizedState !== null || ma;
                if (!x) {
                    var S = d.alternate
                      , T = S !== null && S.memoizedState !== null || Ot;
                    S = ma;
                    var O = Ot;
                    if (ma = x,
                    (Ot = T) && !O)
                        for (ce = d; ce !== null; )
                            x = ce,
                            T = x.child,
                            x.tag === 22 && x.memoizedState !== null ? ep(d) : T !== null ? (T.return = x,
                            ce = T) : ep(d);
                    for (; h !== null; )
                        ce = h,
                        Qh(h),
                        h = h.sibling;
                    ce = d,
                    ma = S,
                    Ot = O
                }
                qh(e)
            } else
                (d.subtreeFlags & 8772) !== 0 && h !== null ? (h.return = d,
                ce = h) : qh(e)
        }
    }
    function qh(e) {
        for (; ce !== null; ) {
            var r = ce;
            if ((r.flags & 8772) !== 0) {
                var s = r.alternate;
                try {
                    if ((r.flags & 8772) !== 0)
                        switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Ot || ga(5, r);
                            break;
                        case 1:
                            var a = r.stateNode;
                            if (r.flags & 4 && !Ot)
                                if (s === null)
                                    a.componentDidMount();
                                else {
                                    var d = r.elementType === r.type ? s.memoizedProps : Vn(r.type, s.memoizedProps);
                                    a.componentDidUpdate(d, s.memoizedState, a.__reactInternalSnapshotBeforeUpdate)
                                }
                            var h = r.updateQueue;
                            h !== null && Zf(r, h, a);
                            break;
                        case 3:
                            var x = r.updateQueue;
                            if (x !== null) {
                                if (s = null,
                                r.child !== null)
                                    switch (r.child.tag) {
                                    case 5:
                                        s = r.child.stateNode;
                                        break;
                                    case 1:
                                        s = r.child.stateNode
                                    }
                                Zf(r, x, s)
                            }
                            break;
                        case 5:
                            var S = r.stateNode;
                            if (s === null && r.flags & 4) {
                                s = S;
                                var T = r.memoizedProps;
                                switch (r.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    T.autoFocus && s.focus();
                                    break;
                                case "img":
                                    T.src && (s.src = T.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (r.memoizedState === null) {
                                var O = r.alternate;
                                if (O !== null) {
                                    var G = O.memoizedState;
                                    if (G !== null) {
                                        var J = G.dehydrated;
                                        J !== null && Ns(J)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(i(163))
                        }
                    Ot || r.flags & 512 && Au(r)
                } catch (Y) {
                    ot(r, r.return, Y)
                }
            }
            if (r === e) {
                ce = null;
                break
            }
            if (s = r.sibling,
            s !== null) {
                s.return = r.return,
                ce = s;
                break
            }
            ce = r.return
        }
    }
    function Zh(e) {
        for (; ce !== null; ) {
            var r = ce;
            if (r === e) {
                ce = null;
                break
            }
            var s = r.sibling;
            if (s !== null) {
                s.return = r.return,
                ce = s;
                break
            }
            ce = r.return
        }
    }
    function ep(e) {
        for (; ce !== null; ) {
            var r = ce;
            try {
                switch (r.tag) {
                case 0:
                case 11:
                case 15:
                    var s = r.return;
                    try {
                        ga(4, r)
                    } catch (T) {
                        ot(r, s, T)
                    }
                    break;
                case 1:
                    var a = r.stateNode;
                    if (typeof a.componentDidMount == "function") {
                        var d = r.return;
                        try {
                            a.componentDidMount()
                        } catch (T) {
                            ot(r, d, T)
                        }
                    }
                    var h = r.return;
                    try {
                        Au(r)
                    } catch (T) {
                        ot(r, h, T)
                    }
                    break;
                case 5:
                    var x = r.return;
                    try {
                        Au(r)
                    } catch (T) {
                        ot(r, x, T)
                    }
                }
            } catch (T) {
                ot(r, r.return, T)
            }
            if (r === e) {
                ce = null;
                break
            }
            var S = r.sibling;
            if (S !== null) {
                S.return = r.return,
                ce = S;
                break
            }
            ce = r.return
        }
    }
    var wx = Math.ceil
      , ya = W.ReactCurrentDispatcher
      , zu = W.ReactCurrentOwner
      , En = W.ReactCurrentBatchConfig
      , Be = 0
      , Nt = null
      , pt = null
      , Mt = 0
      , pn = 0
      , is = Br(0)
      , bt = 0
      , Js = null
      , Si = 0
      , va = 0
      , Vu = 0
      , Xs = null
      , tn = null
      , Ou = 0
      , ss = 1 / 0
      , Er = null
      , xa = !1
      , Bu = null
      , Hr = null
      , wa = !1
      , Yr = null
      , ba = 0
      , Qs = 0
      , Iu = null
      , Sa = -1
      , ka = 0;
    function Yt() {
        return (Be & 6) !== 0 ? Ue() : Sa !== -1 ? Sa : Sa = Ue()
    }
    function Gr(e) {
        return (e.mode & 1) === 0 ? 1 : (Be & 2) !== 0 && Mt !== 0 ? Mt & -Mt : rx.transition !== null ? (ka === 0 && (ka = Yd()),
        ka) : (e = $e,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : tf(e.type)),
        e)
    }
    function In(e, r, s, a) {
        if (50 < Qs)
            throw Qs = 0,
            Iu = null,
            Error(i(185));
        bs(e, s, a),
        ((Be & 2) === 0 || e !== Nt) && (e === Nt && ((Be & 2) === 0 && (va |= s),
        bt === 4 && Kr(e, Mt)),
        nn(e, a),
        s === 1 && Be === 0 && (r.mode & 1) === 0 && (ss = Ue() + 500,
        Qo && Fr()))
    }
    function nn(e, r) {
        var s = e.callbackNode;
        rv(e, r);
        var a = Do(e, e === Nt ? Mt : 0);
        if (a === 0)
            s !== null && Ct(s),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (r = a & -a,
        e.callbackPriority !== r) {
            if (s != null && Ct(s),
            r === 1)
                e.tag === 0 ? nx(np.bind(null, e)) : Ff(np.bind(null, e)),
                qv(function() {
                    (Be & 6) === 0 && Fr()
                }),
                s = null;
            else {
                switch (Gd(a)) {
                case 1:
                    s = wn;
                    break;
                case 4:
                    s = cn;
                    break;
                case 16:
                    s = Mr;
                    break;
                case 536870912:
                    s = qn;
                    break;
                default:
                    s = Mr
                }
                s = cp(s, tp.bind(null, e))
            }
            e.callbackPriority = r,
            e.callbackNode = s
        }
    }
    function tp(e, r) {
        if (Sa = -1,
        ka = 0,
        (Be & 6) !== 0)
            throw Error(i(327));
        var s = e.callbackNode;
        if (os() && e.callbackNode !== s)
            return null;
        var a = Do(e, e === Nt ? Mt : 0);
        if (a === 0)
            return null;
        if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || r)
            r = Ca(e, a);
        else {
            r = a;
            var d = Be;
            Be |= 2;
            var h = ip();
            (Nt !== e || Mt !== r) && (Er = null,
            ss = Ue() + 500,
            Ci(e, r));
            do
                try {
                    kx();
                    break
                } catch (S) {
                    rp(e, S)
                }
            while (!0);
            iu(),
            ya.current = h,
            Be = d,
            pt !== null ? r = 0 : (Nt = null,
            Mt = 0,
            r = bt)
        }
        if (r !== 0) {
            if (r === 2 && (d = wl(e),
            d !== 0 && (a = d,
            r = Fu(e, d))),
            r === 1)
                throw s = Js,
                Ci(e, 0),
                Kr(e, a),
                nn(e, Ue()),
                s;
            if (r === 6)
                Kr(e, a);
            else {
                if (d = e.current.alternate,
                (a & 30) === 0 && !bx(d) && (r = Ca(e, a),
                r === 2 && (h = wl(e),
                h !== 0 && (a = h,
                r = Fu(e, h))),
                r === 1))
                    throw s = Js,
                    Ci(e, 0),
                    Kr(e, a),
                    nn(e, Ue()),
                    s;
                switch (e.finishedWork = d,
                e.finishedLanes = a,
                r) {
                case 0:
                case 1:
                    throw Error(i(345));
                case 2:
                    Ei(e, tn, Er);
                    break;
                case 3:
                    if (Kr(e, a),
                    (a & 130023424) === a && (r = Ou + 500 - Ue(),
                    10 < r)) {
                        if (Do(e, 0) !== 0)
                            break;
                        if (d = e.suspendedLanes,
                        (d & a) !== a) {
                            Yt(),
                            e.pingedLanes |= e.suspendedLanes & d;
                            break
                        }
                        e.timeoutHandle = Gl(Ei.bind(null, e, tn, Er), r);
                        break
                    }
                    Ei(e, tn, Er);
                    break;
                case 4:
                    if (Kr(e, a),
                    (a & 4194240) === a)
                        break;
                    for (r = e.eventTimes,
                    d = -1; 0 < a; ) {
                        var x = 31 - He(a);
                        h = 1 << x,
                        x = r[x],
                        x > d && (d = x),
                        a &= ~h
                    }
                    if (a = d,
                    a = Ue() - a,
                    a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * wx(a / 1960)) - a,
                    10 < a) {
                        e.timeoutHandle = Gl(Ei.bind(null, e, tn, Er), a);
                        break
                    }
                    Ei(e, tn, Er);
                    break;
                case 5:
                    Ei(e, tn, Er);
                    break;
                default:
                    throw Error(i(329))
                }
            }
        }
        return nn(e, Ue()),
        e.callbackNode === s ? tp.bind(null, e) : null
    }
    function Fu(e, r) {
        var s = Xs;
        return e.current.memoizedState.isDehydrated && (Ci(e, r).flags |= 256),
        e = Ca(e, r),
        e !== 2 && (r = tn,
        tn = s,
        r !== null && Wu(r)),
        e
    }
    function Wu(e) {
        tn === null ? tn = e : tn.push.apply(tn, e)
    }
    function bx(e) {
        for (var r = e; ; ) {
            if (r.flags & 16384) {
                var s = r.updateQueue;
                if (s !== null && (s = s.stores,
                s !== null))
                    for (var a = 0; a < s.length; a++) {
                        var d = s[a]
                          , h = d.getSnapshot;
                        d = d.value;
                        try {
                            if (!Ln(h(), d))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (s = r.child,
            r.subtreeFlags & 16384 && s !== null)
                s.return = r,
                r = s;
            else {
                if (r === e)
                    break;
                for (; r.sibling === null; ) {
                    if (r.return === null || r.return === e)
                        return !0;
                    r = r.return
                }
                r.sibling.return = r.return,
                r = r.sibling
            }
        }
        return !0
    }
    function Kr(e, r) {
        for (r &= ~Vu,
        r &= ~va,
        e.suspendedLanes |= r,
        e.pingedLanes &= ~r,
        e = e.expirationTimes; 0 < r; ) {
            var s = 31 - He(r)
              , a = 1 << s;
            e[s] = -1,
            r &= ~a
        }
    }
    function np(e) {
        if ((Be & 6) !== 0)
            throw Error(i(327));
        os();
        var r = Do(e, 0);
        if ((r & 1) === 0)
            return nn(e, Ue()),
            null;
        var s = Ca(e, r);
        if (e.tag !== 0 && s === 2) {
            var a = wl(e);
            a !== 0 && (r = a,
            s = Fu(e, a))
        }
        if (s === 1)
            throw s = Js,
            Ci(e, 0),
            Kr(e, r),
            nn(e, Ue()),
            s;
        if (s === 6)
            throw Error(i(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = r,
        Ei(e, tn, Er),
        nn(e, Ue()),
        null
    }
    function Uu(e, r) {
        var s = Be;
        Be |= 1;
        try {
            return e(r)
        } finally {
            Be = s,
            Be === 0 && (ss = Ue() + 500,
            Qo && Fr())
        }
    }
    function ki(e) {
        Yr !== null && Yr.tag === 0 && (Be & 6) === 0 && os();
        var r = Be;
        Be |= 1;
        var s = En.transition
          , a = $e;
        try {
            if (En.transition = null,
            $e = 1,
            e)
                return e()
        } finally {
            $e = a,
            En.transition = s,
            Be = r,
            (Be & 6) === 0 && Fr()
        }
    }
    function $u() {
        pn = is.current,
        Xe(is)
    }
    function Ci(e, r) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var s = e.timeoutHandle;
        if (s !== -1 && (e.timeoutHandle = -1,
        Qv(s)),
        pt !== null)
            for (s = pt.return; s !== null; ) {
                var a = s;
                switch (Zl(a),
                a.tag) {
                case 1:
                    a = a.type.childContextTypes,
                    a != null && Jo();
                    break;
                case 3:
                    ts(),
                    Xe(qt),
                    Xe(Lt),
                    fu();
                    break;
                case 5:
                    cu(a);
                    break;
                case 4:
                    ts();
                    break;
                case 13:
                    Xe(nt);
                    break;
                case 19:
                    Xe(nt);
                    break;
                case 10:
                    su(a.type._context);
                    break;
                case 22:
                case 23:
                    $u()
                }
                s = s.return
            }
        if (Nt = e,
        pt = e = Jr(e.current, null),
        Mt = pn = r,
        bt = 0,
        Js = null,
        Vu = va = Si = 0,
        tn = Xs = null,
        xi !== null) {
            for (r = 0; r < xi.length; r++)
                if (s = xi[r],
                a = s.interleaved,
                a !== null) {
                    s.interleaved = null;
                    var d = a.next
                      , h = s.pending;
                    if (h !== null) {
                        var x = h.next;
                        h.next = d,
                        a.next = x
                    }
                    s.pending = a
                }
            xi = null
        }
        return e
    }
    function rp(e, r) {
        do {
            var s = pt;
            try {
                if (iu(),
                aa.current = da,
                la) {
                    for (var a = rt.memoizedState; a !== null; ) {
                        var d = a.queue;
                        d !== null && (d.pending = null),
                        a = a.next
                    }
                    la = !1
                }
                if (bi = 0,
                Et = wt = rt = null,
                Us = !1,
                $s = 0,
                zu.current = null,
                s === null || s.return === null) {
                    bt = 1,
                    Js = r,
                    pt = null;
                    break
                }
                e: {
                    var h = e
                      , x = s.return
                      , S = s
                      , T = r;
                    if (r = Mt,
                    S.flags |= 32768,
                    T !== null && typeof T == "object" && typeof T.then == "function") {
                        var O = T
                          , G = S
                          , J = G.tag;
                        if ((G.mode & 1) === 0 && (J === 0 || J === 11 || J === 15)) {
                            var Y = G.alternate;
                            Y ? (G.updateQueue = Y.updateQueue,
                            G.memoizedState = Y.memoizedState,
                            G.lanes = Y.lanes) : (G.updateQueue = null,
                            G.memoizedState = null)
                        }
                        var oe = Th(x);
                        if (oe !== null) {
                            oe.flags &= -257,
                            Rh(oe, x, S, h, r),
                            oe.mode & 1 && jh(h, O, r),
                            r = oe,
                            T = O;
                            var fe = r.updateQueue;
                            if (fe === null) {
                                var ge = new Set;
                                ge.add(T),
                                r.updateQueue = ge
                            } else
                                fe.add(T);
                            break e
                        } else {
                            if ((r & 1) === 0) {
                                jh(h, O, r),
                                Hu();
                                break e
                            }
                            T = Error(i(426))
                        }
                    } else if (Ze && S.mode & 1) {
                        var dt = Th(x);
                        if (dt !== null) {
                            (dt.flags & 65536) === 0 && (dt.flags |= 256),
                            Rh(dt, x, S, h, r),
                            nu(ns(T, S));
                            break e
                        }
                    }
                    h = T = ns(T, S),
                    bt !== 4 && (bt = 2),
                    Xs === null ? Xs = [h] : Xs.push(h),
                    h = x;
                    do {
                        switch (h.tag) {
                        case 3:
                            h.flags |= 65536,
                            r &= -r,
                            h.lanes |= r;
                            var _ = Eh(h, T, r);
                            qf(h, _);
                            break e;
                        case 1:
                            S = T;
                            var P = h.type
                              , z = h.stateNode;
                            if ((h.flags & 128) === 0 && (typeof P.getDerivedStateFromError == "function" || z !== null && typeof z.componentDidCatch == "function" && (Hr === null || !Hr.has(z)))) {
                                h.flags |= 65536,
                                r &= -r,
                                h.lanes |= r;
                                var Z = Nh(h, S, r);
                                qf(h, Z);
                                break e
                            }
                        }
                        h = h.return
                    } while (h !== null)
                }
                op(s)
            } catch (ve) {
                r = ve,
                pt === s && s !== null && (pt = s = s.return);
                continue
            }
            break
        } while (!0)
    }
    function ip() {
        var e = ya.current;
        return ya.current = da,
        e === null ? da : e
    }
    function Hu() {
        (bt === 0 || bt === 3 || bt === 2) && (bt = 4),
        Nt === null || (Si & 268435455) === 0 && (va & 268435455) === 0 || Kr(Nt, Mt)
    }
    function Ca(e, r) {
        var s = Be;
        Be |= 2;
        var a = ip();
        (Nt !== e || Mt !== r) && (Er = null,
        Ci(e, r));
        do
            try {
                Sx();
                break
            } catch (d) {
                rp(e, d)
            }
        while (!0);
        if (iu(),
        Be = s,
        ya.current = a,
        pt !== null)
            throw Error(i(261));
        return Nt = null,
        Mt = 0,
        bt
    }
    function Sx() {
        for (; pt !== null; )
            sp(pt)
    }
    function kx() {
        for (; pt !== null && !We(); )
            sp(pt)
    }
    function sp(e) {
        var r = up(e.alternate, e, pn);
        e.memoizedProps = e.pendingProps,
        r === null ? op(e) : pt = r,
        zu.current = null
    }
    function op(e) {
        var r = e;
        do {
            var s = r.alternate;
            if (e = r.return,
            (r.flags & 32768) === 0) {
                if (s = mx(s, r, pn),
                s !== null) {
                    pt = s;
                    return
                }
            } else {
                if (s = gx(s, r),
                s !== null) {
                    s.flags &= 32767,
                    pt = s;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    bt = 6,
                    pt = null;
                    return
                }
            }
            if (r = r.sibling,
            r !== null) {
                pt = r;
                return
            }
            pt = r = e
        } while (r !== null);
        bt === 0 && (bt = 5)
    }
    function Ei(e, r, s) {
        var a = $e
          , d = En.transition;
        try {
            En.transition = null,
            $e = 1,
            Cx(e, r, s, a)
        } finally {
            En.transition = d,
            $e = a
        }
        return null
    }
    function Cx(e, r, s, a) {
        do
            os();
        while (Yr !== null);
        if ((Be & 6) !== 0)
            throw Error(i(327));
        s = e.finishedWork;
        var d = e.finishedLanes;
        if (s === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        s === e.current)
            throw Error(i(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var h = s.lanes | s.childLanes;
        if (iv(e, h),
        e === Nt && (pt = Nt = null,
        Mt = 0),
        (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || wa || (wa = !0,
        cp(Mr, function() {
            return os(),
            null
        })),
        h = (s.flags & 15990) !== 0,
        (s.subtreeFlags & 15990) !== 0 || h) {
            h = En.transition,
            En.transition = null;
            var x = $e;
            $e = 1;
            var S = Be;
            Be |= 4,
            zu.current = null,
            vx(e, s),
            Xh(s, e),
            $v(Hl),
            Lo = !!$l,
            Hl = $l = null,
            e.current = s,
            xx(s),
            Qt(),
            Be = S,
            $e = x,
            En.transition = h
        } else
            e.current = s;
        if (wa && (wa = !1,
        Yr = e,
        ba = d),
        h = e.pendingLanes,
        h === 0 && (Hr = null),
        Oe(s.stateNode),
        nn(e, Ue()),
        r !== null)
            for (a = e.onRecoverableError,
            s = 0; s < r.length; s++)
                d = r[s],
                a(d.value, {
                    componentStack: d.stack,
                    digest: d.digest
                });
        if (xa)
            throw xa = !1,
            e = Bu,
            Bu = null,
            e;
        return (ba & 1) !== 0 && e.tag !== 0 && os(),
        h = e.pendingLanes,
        (h & 1) !== 0 ? e === Iu ? Qs++ : (Qs = 0,
        Iu = e) : Qs = 0,
        Fr(),
        null
    }
    function os() {
        if (Yr !== null) {
            var e = Gd(ba)
              , r = En.transition
              , s = $e;
            try {
                if (En.transition = null,
                $e = 16 > e ? 16 : e,
                Yr === null)
                    var a = !1;
                else {
                    if (e = Yr,
                    Yr = null,
                    ba = 0,
                    (Be & 6) !== 0)
                        throw Error(i(331));
                    var d = Be;
                    for (Be |= 4,
                    ce = e.current; ce !== null; ) {
                        var h = ce
                          , x = h.child;
                        if ((ce.flags & 16) !== 0) {
                            var S = h.deletions;
                            if (S !== null) {
                                for (var T = 0; T < S.length; T++) {
                                    var O = S[T];
                                    for (ce = O; ce !== null; ) {
                                        var G = ce;
                                        switch (G.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ks(8, G, h)
                                        }
                                        var J = G.child;
                                        if (J !== null)
                                            J.return = G,
                                            ce = J;
                                        else
                                            for (; ce !== null; ) {
                                                G = ce;
                                                var Y = G.sibling
                                                  , oe = G.return;
                                                if (Hh(G),
                                                G === O) {
                                                    ce = null;
                                                    break
                                                }
                                                if (Y !== null) {
                                                    Y.return = oe,
                                                    ce = Y;
                                                    break
                                                }
                                                ce = oe
                                            }
                                    }
                                }
                                var fe = h.alternate;
                                if (fe !== null) {
                                    var ge = fe.child;
                                    if (ge !== null) {
                                        fe.child = null;
                                        do {
                                            var dt = ge.sibling;
                                            ge.sibling = null,
                                            ge = dt
                                        } while (ge !== null)
                                    }
                                }
                                ce = h
                            }
                        }
                        if ((h.subtreeFlags & 2064) !== 0 && x !== null)
                            x.return = h,
                            ce = x;
                        else
                            e: for (; ce !== null; ) {
                                if (h = ce,
                                (h.flags & 2048) !== 0)
                                    switch (h.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ks(9, h, h.return)
                                    }
                                var _ = h.sibling;
                                if (_ !== null) {
                                    _.return = h.return,
                                    ce = _;
                                    break e
                                }
                                ce = h.return
                            }
                    }
                    var P = e.current;
                    for (ce = P; ce !== null; ) {
                        x = ce;
                        var z = x.child;
                        if ((x.subtreeFlags & 2064) !== 0 && z !== null)
                            z.return = x,
                            ce = z;
                        else
                            e: for (x = P; ce !== null; ) {
                                if (S = ce,
                                (S.flags & 2048) !== 0)
                                    try {
                                        switch (S.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ga(9, S)
                                        }
                                    } catch (ve) {
                                        ot(S, S.return, ve)
                                    }
                                if (S === x) {
                                    ce = null;
                                    break e
                                }
                                var Z = S.sibling;
                                if (Z !== null) {
                                    Z.return = S.return,
                                    ce = Z;
                                    break e
                                }
                                ce = S.return
                            }
                    }
                    if (Be = d,
                    Fr(),
                    $t && typeof $t.onPostCommitFiberRoot == "function")
                        try {
                            $t.onPostCommitFiberRoot(mr, e)
                        } catch {}
                    a = !0
                }
                return a
            } finally {
                $e = s,
                En.transition = r
            }
        }
        return !1
    }
    function ap(e, r, s) {
        r = ns(s, r),
        r = Eh(e, r, 1),
        e = Ur(e, r, 1),
        r = Yt(),
        e !== null && (bs(e, 1, r),
        nn(e, r))
    }
    function ot(e, r, s) {
        if (e.tag === 3)
            ap(e, e, s);
        else
            for (; r !== null; ) {
                if (r.tag === 3) {
                    ap(r, e, s);
                    break
                } else if (r.tag === 1) {
                    var a = r.stateNode;
                    if (typeof r.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Hr === null || !Hr.has(a))) {
                        e = ns(s, e),
                        e = Nh(r, e, 1),
                        r = Ur(r, e, 1),
                        e = Yt(),
                        r !== null && (bs(r, 1, e),
                        nn(r, e));
                        break
                    }
                }
                r = r.return
            }
    }
    function Ex(e, r, s) {
        var a = e.pingCache;
        a !== null && a.delete(r),
        r = Yt(),
        e.pingedLanes |= e.suspendedLanes & s,
        Nt === e && (Mt & s) === s && (bt === 4 || bt === 3 && (Mt & 130023424) === Mt && 500 > Ue() - Ou ? Ci(e, 0) : Vu |= s),
        nn(e, r)
    }
    function lp(e, r) {
        r === 0 && ((e.mode & 1) === 0 ? r = 1 : (r = hi,
        hi <<= 1,
        (hi & 130023424) === 0 && (hi = 4194304)));
        var s = Yt();
        e = Sr(e, r),
        e !== null && (bs(e, r, s),
        nn(e, s))
    }
    function Nx(e) {
        var r = e.memoizedState
          , s = 0;
        r !== null && (s = r.retryLane),
        lp(e, s)
    }
    function jx(e, r) {
        var s = 0;
        switch (e.tag) {
        case 13:
            var a = e.stateNode
              , d = e.memoizedState;
            d !== null && (s = d.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        default:
            throw Error(i(314))
        }
        a !== null && a.delete(r),
        lp(e, s)
    }
    var up;
    up = function(e, r, s) {
        if (e !== null)
            if (e.memoizedProps !== r.pendingProps || qt.current)
                en = !0;
            else {
                if ((e.lanes & s) === 0 && (r.flags & 128) === 0)
                    return en = !1,
                    px(e, r, s);
                en = (e.flags & 131072) !== 0
            }
        else
            en = !1,
            Ze && (r.flags & 1048576) !== 0 && Wf(r, Zo, r.index);
        switch (r.lanes = 0,
        r.tag) {
        case 2:
            var a = r.type;
            pa(e, r),
            e = r.pendingProps;
            var d = Ki(r, Lt.current);
            es(r, s),
            d = mu(null, r, a, e, d, s);
            var h = gu();
            return r.flags |= 1,
            typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1,
            r.memoizedState = null,
            r.updateQueue = null,
            Zt(a) ? (h = !0,
            Xo(r)) : h = !1,
            r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null,
            lu(r),
            d.updater = fa,
            r.stateNode = d,
            d._reactInternals = r,
            Su(r, a, e, s),
            r = Nu(null, r, a, !0, h, s)) : (r.tag = 0,
            Ze && h && ql(r),
            Ht(null, r, d, s),
            r = r.child),
            r;
        case 16:
            a = r.elementType;
            e: {
                switch (pa(e, r),
                e = r.pendingProps,
                d = a._init,
                a = d(a._payload),
                r.type = a,
                d = r.tag = Rx(a),
                e = Vn(a, e),
                d) {
                case 0:
                    r = Eu(null, r, a, e, s);
                    break e;
                case 1:
                    r = Lh(null, r, a, e, s);
                    break e;
                case 11:
                    r = Mh(null, r, a, e, s);
                    break e;
                case 14:
                    r = Ph(null, r, a, Vn(a.type, e), s);
                    break e
                }
                throw Error(i(306, a, ""))
            }
            return r;
        case 0:
            return a = r.type,
            d = r.pendingProps,
            d = r.elementType === a ? d : Vn(a, d),
            Eu(e, r, a, d, s);
        case 1:
            return a = r.type,
            d = r.pendingProps,
            d = r.elementType === a ? d : Vn(a, d),
            Lh(e, r, a, d, s);
        case 3:
            e: {
                if (zh(r),
                e === null)
                    throw Error(i(387));
                a = r.pendingProps,
                h = r.memoizedState,
                d = h.element,
                Qf(e, r),
                sa(r, a, null, s);
                var x = r.memoizedState;
                if (a = x.element,
                h.isDehydrated)
                    if (h = {
                        element: a,
                        isDehydrated: !1,
                        cache: x.cache,
                        pendingSuspenseBoundaries: x.pendingSuspenseBoundaries,
                        transitions: x.transitions
                    },
                    r.updateQueue.baseState = h,
                    r.memoizedState = h,
                    r.flags & 256) {
                        d = ns(Error(i(423)), r),
                        r = Vh(e, r, a, s, d);
                        break e
                    } else if (a !== d) {
                        d = ns(Error(i(424)), r),
                        r = Vh(e, r, a, s, d);
                        break e
                    } else
                        for (hn = Or(r.stateNode.containerInfo.firstChild),
                        fn = r,
                        Ze = !0,
                        zn = null,
                        s = Jf(r, null, a, s),
                        r.child = s; s; )
                            s.flags = s.flags & -3 | 4096,
                            s = s.sibling;
                else {
                    if (Qi(),
                    a === d) {
                        r = Cr(e, r, s);
                        break e
                    }
                    Ht(e, r, a, s)
                }
                r = r.child
            }
            return r;
        case 5:
            return eh(r),
            e === null && tu(r),
            a = r.type,
            d = r.pendingProps,
            h = e !== null ? e.memoizedProps : null,
            x = d.children,
            Yl(a, d) ? x = null : h !== null && Yl(a, h) && (r.flags |= 32),
            _h(e, r),
            Ht(e, r, x, s),
            r.child;
        case 6:
            return e === null && tu(r),
            null;
        case 13:
            return Oh(e, r, s);
        case 4:
            return uu(r, r.stateNode.containerInfo),
            a = r.pendingProps,
            e === null ? r.child = qi(r, null, a, s) : Ht(e, r, a, s),
            r.child;
        case 11:
            return a = r.type,
            d = r.pendingProps,
            d = r.elementType === a ? d : Vn(a, d),
            Mh(e, r, a, d, s);
        case 7:
            return Ht(e, r, r.pendingProps, s),
            r.child;
        case 8:
            return Ht(e, r, r.pendingProps.children, s),
            r.child;
        case 12:
            return Ht(e, r, r.pendingProps.children, s),
            r.child;
        case 10:
            e: {
                if (a = r.type._context,
                d = r.pendingProps,
                h = r.memoizedProps,
                x = d.value,
                Ge(na, a._currentValue),
                a._currentValue = x,
                h !== null)
                    if (Ln(h.value, x)) {
                        if (h.children === d.children && !qt.current) {
                            r = Cr(e, r, s);
                            break e
                        }
                    } else
                        for (h = r.child,
                        h !== null && (h.return = r); h !== null; ) {
                            var S = h.dependencies;
                            if (S !== null) {
                                x = h.child;
                                for (var T = S.firstContext; T !== null; ) {
                                    if (T.context === a) {
                                        if (h.tag === 1) {
                                            T = kr(-1, s & -s),
                                            T.tag = 2;
                                            var O = h.updateQueue;
                                            if (O !== null) {
                                                O = O.shared;
                                                var G = O.pending;
                                                G === null ? T.next = T : (T.next = G.next,
                                                G.next = T),
                                                O.pending = T
                                            }
                                        }
                                        h.lanes |= s,
                                        T = h.alternate,
                                        T !== null && (T.lanes |= s),
                                        ou(h.return, s, r),
                                        S.lanes |= s;
                                        break
                                    }
                                    T = T.next
                                }
                            } else if (h.tag === 10)
                                x = h.type === r.type ? null : h.child;
                            else if (h.tag === 18) {
                                if (x = h.return,
                                x === null)
                                    throw Error(i(341));
                                x.lanes |= s,
                                S = x.alternate,
                                S !== null && (S.lanes |= s),
                                ou(x, s, r),
                                x = h.sibling
                            } else
                                x = h.child;
                            if (x !== null)
                                x.return = h;
                            else
                                for (x = h; x !== null; ) {
                                    if (x === r) {
                                        x = null;
                                        break
                                    }
                                    if (h = x.sibling,
                                    h !== null) {
                                        h.return = x.return,
                                        x = h;
                                        break
                                    }
                                    x = x.return
                                }
                            h = x
                        }
                Ht(e, r, d.children, s),
                r = r.child
            }
            return r;
        case 9:
            return d = r.type,
            a = r.pendingProps.children,
            es(r, s),
            d = kn(d),
            a = a(d),
            r.flags |= 1,
            Ht(e, r, a, s),
            r.child;
        case 14:
            return a = r.type,
            d = Vn(a, r.pendingProps),
            d = Vn(a.type, d),
            Ph(e, r, a, d, s);
        case 15:
            return Dh(e, r, r.type, r.pendingProps, s);
        case 17:
            return a = r.type,
            d = r.pendingProps,
            d = r.elementType === a ? d : Vn(a, d),
            pa(e, r),
            r.tag = 1,
            Zt(a) ? (e = !0,
            Xo(r)) : e = !1,
            es(r, s),
            kh(r, a, d),
            Su(r, a, d, s),
            Nu(null, r, a, !0, e, s);
        case 19:
            return Ih(e, r, s);
        case 22:
            return Ah(e, r, s)
        }
        throw Error(i(156, r.tag))
    }
    ;
    function cp(e, r) {
        return ct(e, r)
    }
    function Tx(e, r, s, a) {
        this.tag = e,
        this.key = s,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = r,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Nn(e, r, s, a) {
        return new Tx(e,r,s,a)
    }
    function Yu(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function Rx(e) {
        if (typeof e == "function")
            return Yu(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === ke)
                return 11;
            if (e === Re)
                return 14
        }
        return 2
    }
    function Jr(e, r) {
        var s = e.alternate;
        return s === null ? (s = Nn(e.tag, r, e.key, e.mode),
        s.elementType = e.elementType,
        s.type = e.type,
        s.stateNode = e.stateNode,
        s.alternate = e,
        e.alternate = s) : (s.pendingProps = r,
        s.type = e.type,
        s.flags = 0,
        s.subtreeFlags = 0,
        s.deletions = null),
        s.flags = e.flags & 14680064,
        s.childLanes = e.childLanes,
        s.lanes = e.lanes,
        s.child = e.child,
        s.memoizedProps = e.memoizedProps,
        s.memoizedState = e.memoizedState,
        s.updateQueue = e.updateQueue,
        r = e.dependencies,
        s.dependencies = r === null ? null : {
            lanes: r.lanes,
            firstContext: r.firstContext
        },
        s.sibling = e.sibling,
        s.index = e.index,
        s.ref = e.ref,
        s
    }
    function Ea(e, r, s, a, d, h) {
        var x = 2;
        if (a = e,
        typeof e == "function")
            Yu(e) && (x = 1);
        else if (typeof e == "string")
            x = 5;
        else
            e: switch (e) {
            case D:
                return Ni(s.children, d, h, r);
            case H:
                x = 8,
                d |= 8;
                break;
            case te:
                return e = Nn(12, s, r, d | 2),
                e.elementType = te,
                e.lanes = h,
                e;
            case Ae:
                return e = Nn(13, s, r, d),
                e.elementType = Ae,
                e.lanes = h,
                e;
            case je:
                return e = Nn(19, s, r, d),
                e.elementType = je,
                e.lanes = h,
                e;
            case be:
                return Na(s, d, h, r);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case X:
                        x = 10;
                        break e;
                    case ae:
                        x = 9;
                        break e;
                    case ke:
                        x = 11;
                        break e;
                    case Re:
                        x = 14;
                        break e;
                    case ne:
                        x = 16,
                        a = null;
                        break e
                    }
                throw Error(i(130, e == null ? e : typeof e, ""))
            }
        return r = Nn(x, s, r, d),
        r.elementType = e,
        r.type = a,
        r.lanes = h,
        r
    }
    function Ni(e, r, s, a) {
        return e = Nn(7, e, a, r),
        e.lanes = s,
        e
    }
    function Na(e, r, s, a) {
        return e = Nn(22, e, a, r),
        e.elementType = be,
        e.lanes = s,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function Gu(e, r, s) {
        return e = Nn(6, e, null, r),
        e.lanes = s,
        e
    }
    function Ku(e, r, s) {
        return r = Nn(4, e.children !== null ? e.children : [], e.key, r),
        r.lanes = s,
        r.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        r
    }
    function Mx(e, r, s, a, d) {
        this.tag = r,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = bl(0),
        this.expirationTimes = bl(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = bl(0),
        this.identifierPrefix = a,
        this.onRecoverableError = d,
        this.mutableSourceEagerHydrationData = null
    }
    function Ju(e, r, s, a, d, h, x, S, T) {
        return e = new Mx(e,r,s,S,T),
        r === 1 ? (r = 1,
        h === !0 && (r |= 8)) : r = 0,
        h = Nn(3, null, null, r),
        e.current = h,
        h.stateNode = e,
        h.memoizedState = {
            element: a,
            isDehydrated: s,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        lu(h),
        e
    }
    function Px(e, r, s) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: se,
            key: a == null ? null : "" + a,
            children: e,
            containerInfo: r,
            implementation: s
        }
    }
    function dp(e) {
        if (!e)
            return Ir;
        e = e._reactInternals;
        e: {
            if (pe(e) !== e || e.tag !== 1)
                throw Error(i(170));
            var r = e;
            do {
                switch (r.tag) {
                case 3:
                    r = r.stateNode.context;
                    break e;
                case 1:
                    if (Zt(r.type)) {
                        r = r.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                r = r.return
            } while (r !== null);
            throw Error(i(171))
        }
        if (e.tag === 1) {
            var s = e.type;
            if (Zt(s))
                return Bf(e, s, r)
        }
        return r
    }
    function fp(e, r, s, a, d, h, x, S, T) {
        return e = Ju(s, a, !0, e, d, h, x, S, T),
        e.context = dp(null),
        s = e.current,
        a = Yt(),
        d = Gr(s),
        h = kr(a, d),
        h.callback = r ?? null,
        Ur(s, h, d),
        e.current.lanes = d,
        bs(e, d, a),
        nn(e, a),
        e
    }
    function ja(e, r, s, a) {
        var d = r.current
          , h = Yt()
          , x = Gr(d);
        return s = dp(s),
        r.context === null ? r.context = s : r.pendingContext = s,
        r = kr(h, x),
        r.payload = {
            element: e
        },
        a = a === void 0 ? null : a,
        a !== null && (r.callback = a),
        e = Ur(d, r, x),
        e !== null && (In(e, d, x, h),
        ia(e, d, x)),
        x
    }
    function Ta(e) {
        if (e = e.current,
        !e.child)
            return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }
    function hp(e, r) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var s = e.retryLane;
            e.retryLane = s !== 0 && s < r ? s : r
        }
    }
    function Xu(e, r) {
        hp(e, r),
        (e = e.alternate) && hp(e, r)
    }
    function Dx() {
        return null
    }
    var pp = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function Qu(e) {
        this._internalRoot = e
    }
    Ra.prototype.render = Qu.prototype.render = function(e) {
        var r = this._internalRoot;
        if (r === null)
            throw Error(i(409));
        ja(e, r, null, null)
    }
    ,
    Ra.prototype.unmount = Qu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var r = e.containerInfo;
            ki(function() {
                ja(null, e, null, null)
            }),
            r[vr] = null
        }
    }
    ;
    function Ra(e) {
        this._internalRoot = e
    }
    Ra.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var r = Xd();
            e = {
                blockedOn: null,
                target: e,
                priority: r
            };
            for (var s = 0; s < Lr.length && r !== 0 && r < Lr[s].priority; s++)
                ;
            Lr.splice(s, 0, e),
            s === 0 && Zd(e)
        }
    }
    ;
    function qu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function Ma(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function mp() {}
    function Ax(e, r, s, a, d) {
        if (d) {
            if (typeof a == "function") {
                var h = a;
                a = function() {
                    var O = Ta(x);
                    h.call(O)
                }
            }
            var x = fp(r, a, e, 0, null, !1, !1, "", mp);
            return e._reactRootContainer = x,
            e[vr] = x.current,
            Ls(e.nodeType === 8 ? e.parentNode : e),
            ki(),
            x
        }
        for (; d = e.lastChild; )
            e.removeChild(d);
        if (typeof a == "function") {
            var S = a;
            a = function() {
                var O = Ta(T);
                S.call(O)
            }
        }
        var T = Ju(e, 0, !1, null, null, !1, !1, "", mp);
        return e._reactRootContainer = T,
        e[vr] = T.current,
        Ls(e.nodeType === 8 ? e.parentNode : e),
        ki(function() {
            ja(r, T, s, a)
        }),
        T
    }
    function Pa(e, r, s, a, d) {
        var h = s._reactRootContainer;
        if (h) {
            var x = h;
            if (typeof d == "function") {
                var S = d;
                d = function() {
                    var T = Ta(x);
                    S.call(T)
                }
            }
            ja(r, x, e, d)
        } else
            x = Ax(s, r, e, d, a);
        return Ta(x)
    }
    Kd = function(e) {
        switch (e.tag) {
        case 3:
            var r = e.stateNode;
            if (r.current.memoizedState.isDehydrated) {
                var s = pi(r.pendingLanes);
                s !== 0 && (Sl(r, s | 1),
                nn(r, Ue()),
                (Be & 6) === 0 && (ss = Ue() + 500,
                Fr()))
            }
            break;
        case 13:
            ki(function() {
                var a = Sr(e, 1);
                if (a !== null) {
                    var d = Yt();
                    In(a, e, 1, d)
                }
            }),
            Xu(e, 1)
        }
    }
    ,
    kl = function(e) {
        if (e.tag === 13) {
            var r = Sr(e, 134217728);
            if (r !== null) {
                var s = Yt();
                In(r, e, 134217728, s)
            }
            Xu(e, 134217728)
        }
    }
    ,
    Jd = function(e) {
        if (e.tag === 13) {
            var r = Gr(e)
              , s = Sr(e, r);
            if (s !== null) {
                var a = Yt();
                In(s, e, r, a)
            }
            Xu(e, r)
        }
    }
    ,
    Xd = function() {
        return $e
    }
    ,
    Qd = function(e, r) {
        var s = $e;
        try {
            return $e = e,
            r()
        } finally {
            $e = s
        }
    }
    ,
    Xn = function(e, r, s) {
        switch (r) {
        case "input":
            if (Dn(e, s),
            r = s.name,
            s.type === "radio" && r != null) {
                for (s = e; s.parentNode; )
                    s = s.parentNode;
                for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'),
                r = 0; r < s.length; r++) {
                    var a = s[r];
                    if (a !== e && a.form === e.form) {
                        var d = Ko(a);
                        if (!d)
                            throw Error(i(90));
                        it(a),
                        Dn(a, d)
                    }
                }
            }
            break;
        case "textarea":
            vn(e, s);
            break;
        case "select":
            r = s.value,
            r != null && Yn(e, !!s.multiple, r, !1)
        }
    }
    ,
    st = Uu,
    ut = ki;
    var _x = {
        usingClientEntryPoint: !1,
        Events: [Os, Yi, Ko, Te, et, Uu]
    }
      , qs = {
        findFiberByHostInstance: mi,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , Lx = {
        bundleType: qs.bundleType,
        version: qs.version,
        rendererPackageName: qs.rendererPackageName,
        rendererConfig: qs.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: W.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ve(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: qs.findFiberByHostInstance || Dx,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Da = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Da.isDisabled && Da.supportsFiber)
            try {
                mr = Da.inject(Lx),
                $t = Da
            } catch {}
    }
    return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _x,
    rn.createPortal = function(e, r) {
        var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!qu(r))
            throw Error(i(200));
        return Px(e, r, null, s)
    }
    ,
    rn.createRoot = function(e, r) {
        if (!qu(e))
            throw Error(i(299));
        var s = !1
          , a = ""
          , d = pp;
        return r != null && (r.unstable_strictMode === !0 && (s = !0),
        r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
        r.onRecoverableError !== void 0 && (d = r.onRecoverableError)),
        r = Ju(e, 1, !1, null, null, s, !1, a, d),
        e[vr] = r.current,
        Ls(e.nodeType === 8 ? e.parentNode : e),
        new Qu(r)
    }
    ,
    rn.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var r = e._reactInternals;
        if (r === void 0)
            throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","),
            Error(i(268, e)));
        return e = Ve(r),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    rn.flushSync = function(e) {
        return ki(e)
    }
    ,
    rn.hydrate = function(e, r, s) {
        if (!Ma(r))
            throw Error(i(200));
        return Pa(null, e, r, !0, s)
    }
    ,
    rn.hydrateRoot = function(e, r, s) {
        if (!qu(e))
            throw Error(i(405));
        var a = s != null && s.hydratedSources || null
          , d = !1
          , h = ""
          , x = pp;
        if (s != null && (s.unstable_strictMode === !0 && (d = !0),
        s.identifierPrefix !== void 0 && (h = s.identifierPrefix),
        s.onRecoverableError !== void 0 && (x = s.onRecoverableError)),
        r = fp(r, null, e, 1, s ?? null, d, !1, h, x),
        e[vr] = r.current,
        Ls(e),
        a)
            for (e = 0; e < a.length; e++)
                s = a[e],
                d = s._getVersion,
                d = d(s._source),
                r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, d] : r.mutableSourceEagerHydrationData.push(s, d);
        return new Ra(r)
    }
    ,
    rn.render = function(e, r, s) {
        if (!Ma(r))
            throw Error(i(200));
        return Pa(null, e, r, !1, s)
    }
    ,
    rn.unmountComponentAtNode = function(e) {
        if (!Ma(e))
            throw Error(i(40));
        return e._reactRootContainer ? (ki(function() {
            Pa(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[vr] = null
            })
        }),
        !0) : !1
    }
    ,
    rn.unstable_batchedUpdates = Uu,
    rn.unstable_renderSubtreeIntoContainer = function(e, r, s, a) {
        if (!Ma(s))
            throw Error(i(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(i(38));
        return Pa(e, r, s, !1, a)
    }
    ,
    rn.version = "18.3.1-next-f1338f8080-20240426",
    rn
}
var kp;
function Rg() {
    if (kp)
        return tc.exports;
    kp = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (n) {
                console.error(n)
            }
    }
    return t(),
    tc.exports = Ux(),
    tc.exports
}
var Cp;
function $x() {
    if (Cp)
        return Aa;
    Cp = 1;
    var t = Rg();
    return Aa.createRoot = t.createRoot,
    Aa.hydrateRoot = t.hydrateRoot,
    Aa
}
var Hx = $x()
  , E = rd();
const re = Tg(E)
  , Yx = Vx({
    __proto__: null,
    default: re
}, [E]);
/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Mg = t => {
    throw TypeError(t)
}
  , Gx = (t, n, i) => n.has(t) || Mg("Cannot " + i)
  , ic = (t, n, i) => (Gx(t, n, "read from private field"),
i ? i.call(t) : n.get(t))
  , Kx = (t, n, i) => n.has(t) ? Mg("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(t) : n.set(t, i)
  , Ep = "popstate";
function Jx(t={}) {
    function n(o, l) {
        let {pathname: u, search: c, hash: f} = o.location;
        return go("", {
            pathname: u,
            search: c,
            hash: f
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function i(o, l) {
        return typeof l == "string" ? l : lr(l)
    }
    return Qx(n, i, null, t)
}
function Le(t, n) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(n)
}
function vt(t, n) {
    if (!t) {
        typeof console < "u" && console.warn(n);
        try {
            throw new Error(n)
        } catch {}
    }
}
function Xx() {
    return Math.random().toString(36).substring(2, 10)
}
function Np(t, n) {
    return {
        usr: t.state,
        key: t.key,
        idx: n
    }
}
function go(t, n, i=null, o) {
    return {
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: "",
        ...typeof n == "string" ? si(n) : n,
        state: i,
        key: n && n.key || o || Xx()
    }
}
function lr({pathname: t="/", search: n="", hash: i=""}) {
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    i && i !== "#" && (t += i.charAt(0) === "#" ? i : "#" + i),
    t
}
function si(t) {
    let n = {};
    if (t) {
        let i = t.indexOf("#");
        i >= 0 && (n.hash = t.substring(i),
        t = t.substring(0, i));
        let o = t.indexOf("?");
        o >= 0 && (n.search = t.substring(o),
        t = t.substring(0, o)),
        t && (n.pathname = t)
    }
    return n
}
function Qx(t, n, i, o={}) {
    let {window: l=document.defaultView, v5Compat: u=!1} = o
      , c = l.history
      , f = "POP"
      , m = null
      , y = v();
    y == null && (y = 0,
    c.replaceState({
        ...c.state,
        idx: y
    }, ""));
    function v() {
        return (c.state || {
            idx: null
        }).idx
    }
    function g() {
        f = "POP";
        let N = v()
          , A = N == null ? null : N - y;
        y = N,
        m && m({
            action: f,
            location: M.location,
            delta: A
        })
    }
    function w(N, A) {
        f = "PUSH";
        let L = go(M.location, N, A);
        y = v() + 1;
        let B = Np(L, y)
          , W = M.createHref(L);
        try {
            c.pushState(B, "", W)
        } catch (U) {
            if (U instanceof DOMException && U.name === "DataCloneError")
                throw U;
            l.location.assign(W)
        }
        u && m && m({
            action: f,
            location: M.location,
            delta: 1
        })
    }
    function b(N, A) {
        f = "REPLACE";
        let L = go(M.location, N, A);
        y = v();
        let B = Np(L, y)
          , W = M.createHref(L);
        c.replaceState(B, "", W),
        u && m && m({
            action: f,
            location: M.location,
            delta: 0
        })
    }
    function C(N) {
        return Pg(N)
    }
    let M = {
        get action() {
            return f
        },
        get location() {
            return t(l, c)
        },
        listen(N) {
            if (m)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(Ep, g),
            m = N,
            () => {
                l.removeEventListener(Ep, g),
                m = null
            }
        },
        createHref(N) {
            return n(l, N)
        },
        createURL: C,
        encodeLocation(N) {
            let A = C(N);
            return {
                pathname: A.pathname,
                search: A.search,
                hash: A.hash
            }
        },
        push: w,
        replace: b,
        go(N) {
            return c.go(N)
        }
    };
    return M
}
function Pg(t, n=!1) {
    let i = "http://localhost";
    typeof window < "u" && (i = window.location.origin !== "null" ? window.location.origin : window.location.href),
    Le(i, "No window.location.(origin|href) available to create URL");
    let o = typeof t == "string" ? t : lr(t);
    return o = o.replace(/ $/, "%20"),
    !n && o.startsWith("//") && (o = i + o),
    new URL(o,i)
}
var oo, jp = class {
    constructor(t) {
        if (Kx(this, oo, new Map),
        t)
            for (let[n,i] of t)
                this.set(n, i)
    }
    get(t) {
        if (ic(this, oo).has(t))
            return ic(this, oo).get(t);
        if (t.defaultValue !== void 0)
            return t.defaultValue;
        throw new Error("No value found for context")
    }
    set(t, n) {
        ic(this, oo).set(t, n)
    }
}
;
oo = new WeakMap;
var qx = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function Zx(t) {
    return qx.has(t)
}
var ew = new Set(["lazy", "caseSensitive", "path", "id", "index", "middleware", "children"]);
function tw(t) {
    return ew.has(t)
}
function nw(t) {
    return t.index === !0
}
function yo(t, n, i=[], o={}, l=!1) {
    return t.map( (u, c) => {
        let f = [...i, String(c)]
          , m = typeof u.id == "string" ? u.id : f.join("-");
        if (Le(u.index !== !0 || !u.children, "Cannot specify children on an index route"),
        Le(l || !o[m], `Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),
        nw(u)) {
            let y = {
                ...u,
                id: m
            };
            return o[m] = Tp(y, n(y)),
            y
        } else {
            let y = {
                ...u,
                id: m,
                children: void 0
            };
            return o[m] = Tp(y, n(y)),
            u.children && (y.children = yo(u.children, n, f, o, l)),
            y
        }
    }
    )
}
function Tp(t, n) {
    return Object.assign(t, {
        ...n,
        ...typeof n.lazy == "object" && n.lazy != null ? {
            lazy: {
                ...t.lazy,
                ...n.lazy
            }
        } : {}
    })
}
function Zr(t, n, i="/") {
    return ao(t, n, i, !1)
}
function ao(t, n, i, o) {
    let l = typeof n == "string" ? si(n) : n
      , u = Mn(l.pathname || "/", i);
    if (u == null)
        return null;
    let c = Dg(t);
    iw(c);
    let f = null;
    for (let m = 0; f == null && m < c.length; ++m) {
        let y = mw(u);
        f = hw(c[m], y, o)
    }
    return f
}
function rw(t, n) {
    let {route: i, pathname: o, params: l} = t;
    return {
        id: i.id,
        pathname: o,
        params: l,
        data: n[i.id],
        loaderData: n[i.id],
        handle: i.handle
    }
}
function Dg(t, n=[], i=[], o="", l=!1) {
    let u = (c, f, m=l, y) => {
        let v = {
            relativePath: y === void 0 ? c.path || "" : y,
            caseSensitive: c.caseSensitive === !0,
            childrenIndex: f,
            route: c
        };
        if (v.relativePath.startsWith("/")) {
            if (!v.relativePath.startsWith(o) && m)
                return;
            Le(v.relativePath.startsWith(o), `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            v.relativePath = v.relativePath.slice(o.length)
        }
        let g = or([o, v.relativePath])
          , w = i.concat(v);
        c.children && c.children.length > 0 && (Le(c.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${g}".`),
        Dg(c.children, n, w, g, m)),
        !(c.path == null && !c.index) && n.push({
            path: g,
            score: dw(g, c.index),
            routesMeta: w
        })
    }
    ;
    return t.forEach( (c, f) => {
        var m;
        if (c.path === "" || !((m = c.path) != null && m.includes("?")))
            u(c, f);
        else
            for (let y of Ag(c.path))
                u(c, f, !0, y)
    }
    ),
    n
}
function Ag(t) {
    let n = t.split("/");
    if (n.length === 0)
        return [];
    let[i,...o] = n
      , l = i.endsWith("?")
      , u = i.replace(/\?$/, "");
    if (o.length === 0)
        return l ? [u, ""] : [u];
    let c = Ag(o.join("/"))
      , f = [];
    return f.push(...c.map(m => m === "" ? u : [u, m].join("/"))),
    l && f.push(...c),
    f.map(m => t.startsWith("/") && m === "" ? "/" : m)
}
function iw(t) {
    t.sort( (n, i) => n.score !== i.score ? i.score - n.score : fw(n.routesMeta.map(o => o.childrenIndex), i.routesMeta.map(o => o.childrenIndex)))
}
var sw = /^:[\w-]+$/
  , ow = 3
  , aw = 2
  , lw = 1
  , uw = 10
  , cw = -2
  , Rp = t => t === "*";
function dw(t, n) {
    let i = t.split("/")
      , o = i.length;
    return i.some(Rp) && (o += cw),
    n && (o += aw),
    i.filter(l => !Rp(l)).reduce( (l, u) => l + (sw.test(u) ? ow : u === "" ? lw : uw), o)
}
function fw(t, n) {
    return t.length === n.length && t.slice(0, -1).every( (o, l) => o === n[l]) ? t[t.length - 1] - n[n.length - 1] : 0
}
function hw(t, n, i=!1) {
    let {routesMeta: o} = t
      , l = {}
      , u = "/"
      , c = [];
    for (let f = 0; f < o.length; ++f) {
        let m = o[f]
          , y = f === o.length - 1
          , v = u === "/" ? n : n.slice(u.length) || "/"
          , g = tl({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: y
        }, v)
          , w = m.route;
        if (!g && y && i && !o[o.length - 1].route.index && (g = tl({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: !1
        }, v)),
        !g)
            return null;
        Object.assign(l, g.params),
        c.push({
            params: l,
            pathname: or([u, g.pathname]),
            pathnameBase: vw(or([u, g.pathnameBase])),
            route: w
        }),
        g.pathnameBase !== "/" && (u = or([u, g.pathnameBase]))
    }
    return c
}
function tl(t, n) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[i,o] = pw(t.path, t.caseSensitive, t.end)
      , l = n.match(i);
    if (!l)
        return null;
    let u = l[0]
      , c = u.replace(/(.)\/+$/, "$1")
      , f = l.slice(1);
    return {
        params: o.reduce( (y, {paramName: v, isOptional: g}, w) => {
            if (v === "*") {
                let C = f[w] || "";
                c = u.slice(0, u.length - C.length).replace(/(.)\/+$/, "$1")
            }
            const b = f[w];
            return g && !b ? y[v] = void 0 : y[v] = (b || "").replace(/%2F/g, "/"),
            y
        }
        , {}),
        pathname: u,
        pathnameBase: c,
        pattern: t
    }
}
function pw(t, n=!1, i=!0) {
    vt(t === "*" || !t.endsWith("*") || t.endsWith("/*"), `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`);
    let o = []
      , l = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (c, f, m) => (o.push({
        paramName: f,
        isOptional: m != null
    }),
    m ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return t.endsWith("*") ? (o.push({
        paramName: "*"
    }),
    l += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? l += "\\/*$" : t !== "" && t !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,n ? void 0 : "i"), o]
}
function mw(t) {
    try {
        return t.split("/").map(n => decodeURIComponent(n).replace(/\//g, "%2F")).join("/")
    } catch (n) {
        return vt(!1, `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),
        t
    }
}
function Mn(t, n) {
    if (n === "/")
        return t;
    if (!t.toLowerCase().startsWith(n.toLowerCase()))
        return null;
    let i = n.endsWith("/") ? n.length - 1 : n.length
      , o = t.charAt(i);
    return o && o !== "/" ? null : t.slice(i) || "/"
}
function gw({basename: t, pathname: n}) {
    return n === "/" ? t : or([t, n])
}
var _g = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , id = t => _g.test(t);
function yw(t, n="/") {
    let {pathname: i, search: o="", hash: l=""} = typeof t == "string" ? si(t) : t, u;
    return i ? (i = i.replace(/\/\/+/g, "/"),
    i.startsWith("/") ? u = Mp(i.substring(1), "/") : u = Mp(i, n)) : u = n,
    {
        pathname: u,
        search: xw(o),
        hash: ww(l)
    }
}
function Mp(t, n) {
    let i = n.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(l => {
        l === ".." ? i.length > 1 && i.pop() : l !== "." && i.push(l)
    }
    ),
    i.length > 1 ? i.join("/") : "/"
}
function sc(t, n, i, o) {
    return `Cannot include a '${t}' character in a manually specified \`to.${n}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function Lg(t) {
    return t.filter( (n, i) => i === 0 || n.route.path && n.route.path.length > 0)
}
function sd(t) {
    let n = Lg(t);
    return n.map( (i, o) => o === n.length - 1 ? i.pathname : i.pathnameBase)
}
function od(t, n, i, o=!1) {
    let l;
    typeof t == "string" ? l = si(t) : (l = {
        ...t
    },
    Le(!l.pathname || !l.pathname.includes("?"), sc("?", "pathname", "search", l)),
    Le(!l.pathname || !l.pathname.includes("#"), sc("#", "pathname", "hash", l)),
    Le(!l.search || !l.search.includes("#"), sc("#", "search", "hash", l)));
    let u = t === "" || l.pathname === "", c = u ? "/" : l.pathname, f;
    if (c == null)
        f = i;
    else {
        let g = n.length - 1;
        if (!o && c.startsWith("..")) {
            let w = c.split("/");
            for (; w[0] === ".."; )
                w.shift(),
                g -= 1;
            l.pathname = w.join("/")
        }
        f = g >= 0 ? n[g] : "/"
    }
    let m = yw(l, f)
      , y = c && c !== "/" && c.endsWith("/")
      , v = (u || c === ".") && i.endsWith("/");
    return !m.pathname.endsWith("/") && (y || v) && (m.pathname += "/"),
    m
}
var or = t => t.join("/").replace(/\/\/+/g, "/")
  , vw = t => t.replace(/\/+$/, "").replace(/^\/*/, "/")
  , xw = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t
  , ww = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t
  , ko = class {
    constructor(t, n, i, o=!1) {
        this.status = t,
        this.statusText = n || "",
        this.internal = o,
        i instanceof Error ? (this.data = i.toString(),
        this.error = i) : this.data = i
    }
}
;
function vo(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data"in t
}
function Co(t) {
    return t.map(n => n.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var zg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Vg(t, n) {
    let i = t;
    if (typeof i != "string" || !_g.test(i))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: i
        };
    let o = i
      , l = !1;
    if (zg)
        try {
            let u = new URL(window.location.href)
              , c = i.startsWith("//") ? new URL(u.protocol + i) : new URL(i)
              , f = Mn(c.pathname, n);
            c.origin === u.origin && f != null ? i = f + c.search + c.hash : l = !0
        } catch {
            vt(!1, `<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: o,
        isExternal: l,
        to: i
    }
}
var ti = Symbol("Uninstrumented");
function bw(t, n) {
    let i = {
        lazy: [],
        "lazy.loader": [],
        "lazy.action": [],
        "lazy.middleware": [],
        middleware: [],
        loader: [],
        action: []
    };
    t.forEach(l => l({
        id: n.id,
        index: n.index,
        path: n.path,
        instrument(u) {
            let c = Object.keys(i);
            for (let f of c)
                u[f] && i[f].push(u[f])
        }
    }));
    let o = {};
    if (typeof n.lazy == "function" && i.lazy.length > 0) {
        let l = cs(i.lazy, n.lazy, () => {}
        );
        l && (o.lazy = l)
    }
    if (typeof n.lazy == "object") {
        let l = n.lazy;
        ["middleware", "loader", "action"].forEach(u => {
            let c = l[u]
              , f = i[`lazy.${u}`];
            if (typeof c == "function" && f.length > 0) {
                let m = cs(f, c, () => {}
                );
                m && (o.lazy = Object.assign(o.lazy || {}, {
                    [u]: m
                }))
            }
        }
        )
    }
    return ["loader", "action"].forEach(l => {
        let u = n[l];
        if (typeof u == "function" && i[l].length > 0) {
            let c = u[ti] ?? u
              , f = cs(i[l], c, (...m) => Pp(m[0]));
            f && (l === "loader" && c.hydrate === !0 && (f.hydrate = !0),
            f[ti] = c,
            o[l] = f)
        }
    }
    ),
    n.middleware && n.middleware.length > 0 && i.middleware.length > 0 && (o.middleware = n.middleware.map(l => {
        let u = l[ti] ?? l
          , c = cs(i.middleware, u, (...f) => Pp(f[0]));
        return c ? (c[ti] = u,
        c) : l
    }
    )),
    o
}
function Sw(t, n) {
    let i = {
        navigate: [],
        fetch: []
    };
    if (n.forEach(o => o({
        instrument(l) {
            let u = Object.keys(l);
            for (let c of u)
                l[c] && i[c].push(l[c])
        }
    })),
    i.navigate.length > 0) {
        let o = t.navigate[ti] ?? t.navigate
          , l = cs(i.navigate, o, (...u) => {
            let[c,f] = u;
            return {
                to: typeof c == "number" || typeof c == "string" ? c : c ? lr(c) : ".",
                ...Dp(t, f ?? {})
            }
        }
        );
        l && (l[ti] = o,
        t.navigate = l)
    }
    if (i.fetch.length > 0) {
        let o = t.fetch[ti] ?? t.fetch
          , l = cs(i.fetch, o, (...u) => {
            let[c,,f,m] = u;
            return {
                href: f ?? ".",
                fetcherKey: c,
                ...Dp(t, m ?? {})
            }
        }
        );
        l && (l[ti] = o,
        t.fetch = l)
    }
    return t
}
function cs(t, n, i) {
    return t.length === 0 ? null : async (...o) => {
        let l = await Og(t, i(...o), () => n(...o), t.length - 1);
        if (l.type === "error")
            throw l.value;
        return l.value
    }
}
async function Og(t, n, i, o) {
    let l = t[o], u;
    if (l) {
        let c, f = async () => (c ? console.error("You cannot call instrumented handlers more than once") : c = Og(t, n, i, o - 1),
        u = await c,
        Le(u, "Expected a result"),
        u.type === "error" && u.value instanceof Error ? {
            status: "error",
            error: u.value
        } : {
            status: "success",
            error: void 0
        });
        try {
            await l(f, n)
        } catch (m) {
            console.error("An instrumentation function threw an error:", m)
        }
        c || await f(),
        await c
    } else
        try {
            u = {
                type: "success",
                value: await i()
            }
        } catch (c) {
            u = {
                type: "error",
                value: c
            }
        }
    return u || {
        type: "error",
        value: new Error("No result assigned in instrumentation chain.")
    }
}
function Pp(t) {
    let {request: n, context: i, params: o, unstable_pattern: l} = t;
    return {
        request: kw(n),
        params: {
            ...o
        },
        unstable_pattern: l,
        context: Cw(i)
    }
}
function Dp(t, n) {
    return {
        currentUrl: lr(t.state.location),
        ..."formMethod"in n ? {
            formMethod: n.formMethod
        } : {},
        ..."formEncType"in n ? {
            formEncType: n.formEncType
        } : {},
        ..."formData"in n ? {
            formData: n.formData
        } : {},
        ..."body"in n ? {
            body: n.body
        } : {}
    }
}
function kw(t) {
    return {
        method: t.method,
        url: t.url,
        headers: {
            get: (...n) => t.headers.get(...n)
        }
    }
}
function Cw(t) {
    if (Nw(t)) {
        let n = {
            ...t
        };
        return Object.freeze(n),
        n
    } else
        return {
            get: n => t.get(n)
        }
}
var Ew = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Nw(t) {
    if (t === null || typeof t != "object")
        return !1;
    const n = Object.getPrototypeOf(t);
    return n === Object.prototype || n === null || Object.getOwnPropertyNames(n).sort().join("\0") === Ew
}
var Bg = ["POST", "PUT", "PATCH", "DELETE"]
  , jw = new Set(Bg)
  , Tw = ["GET", ...Bg]
  , Rw = new Set(Tw)
  , Ig = new Set([301, 302, 303, 307, 308])
  , Mw = new Set([307, 308])
  , oc = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , Pw = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
}
  , eo = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0
}
  , Dw = t => ({
    hasErrorBoundary: !!t.hasErrorBoundary
})
  , Fg = "remix-router-transitions"
  , Wg = Symbol("ResetLoaderData");
function Aw(t) {
    const n = t.window ? t.window : typeof window < "u" ? window : void 0
      , i = typeof n < "u" && typeof n.document < "u" && typeof n.document.createElement < "u";
    Le(t.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let o = t.hydrationRouteProperties || []
      , l = t.mapRouteProperties || Dw
      , u = l;
    if (t.unstable_instrumentations) {
        let k = t.unstable_instrumentations;
        u = R => ({
            ...l(R),
            ...bw(k.map(V => V.route).filter(Boolean), R)
        })
    }
    let c = {}, f = yo(t.routes, u, void 0, c), m, y = t.basename || "/";
    y.startsWith("/") || (y = `/${y}`);
    let v = t.dataStrategy || Ow, g = {
        ...t.future
    }, w = null, b = new Set, C = null, M = null, N = null, A = t.hydrationData != null, L = Zr(f, t.history.location, y), B = !1, W = null, U;
    if (L == null && !t.patchRoutesOnNavigation) {
        let k = jn(404, {
            pathname: t.history.location.pathname
        })
          , {matches: R, route: V} = _a(f);
        U = !0,
        L = R,
        W = {
            [V.id]: k
        }
    } else if (L && !t.hydrationData && ut(L, f, t.history.location.pathname).active && (L = null),
    L)
        if (L.some(k => k.route.lazy))
            U = !1;
        else if (!L.some(k => ad(k.route)))
            U = !0;
        else {
            let k = t.hydrationData ? t.hydrationData.loaderData : null
              , R = t.hydrationData ? t.hydrationData.errors : null;
            if (R) {
                let V = L.findIndex($ => R[$.route.id] !== void 0);
                U = L.slice(0, V + 1).every($ => !Rc($.route, k, R))
            } else
                U = L.every(V => !Rc(V.route, k, R))
        }
    else {
        U = !1,
        L = [];
        let k = ut(null, f, t.history.location.pathname);
        k.active && k.matches && (B = !0,
        L = k.matches)
    }
    let se, D = {
        historyAction: t.history.action,
        location: t.history.location,
        matches: L,
        initialized: U,
        navigation: oc,
        restoreScrollPosition: t.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: t.hydrationData && t.hydrationData.loaderData || {},
        actionData: t.hydrationData && t.hydrationData.actionData || null,
        errors: t.hydrationData && t.hydrationData.errors || W,
        fetchers: new Map,
        blockers: new Map
    }, H = "POP", te = null, X = !1, ae, ke = !1, Ae = new Map, je = null, Re = !1, ne = !1, be = new Set, F = new Map, q = 0, K = -1, j = new Map, I = new Set, ie = new Map, me = new Map, we = new Set, ue = new Map, ze, Pe = null;
    function Ie() {
        if (w = t.history.listen( ({action: k, location: R, delta: V}) => {
            if (ze) {
                ze(),
                ze = void 0;
                return
            }
            vt(ue.size === 0 || V != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
            let $ = _n({
                currentLocation: D.location,
                nextLocation: R,
                historyAction: k
            });
            if ($ && V != null) {
                let ee = new Promise(ye => {
                    ze = ye
                }
                );
                t.history.go(V * -1),
                Xn($, {
                    state: "blocked",
                    location: R,
                    proceed() {
                        Xn($, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: R
                        }),
                        ee.then( () => t.history.go(V))
                    },
                    reset() {
                        let ye = new Map(D.blockers);
                        ye.set($, eo),
                        it({
                            blockers: ye
                        })
                    }
                }),
                te == null || te.resolve(),
                te = null;
                return
            }
            return an(k, R)
        }
        ),
        i) {
            n1(n, Ae);
            let k = () => r1(n, Ae);
            n.addEventListener("pagehide", k),
            je = () => n.removeEventListener("pagehide", k)
        }
        return D.initialized || an("POP", D.location, {
            initialHydration: !0
        }),
        se
    }
    function lt() {
        w && w(),
        je && je(),
        b.clear(),
        ae && ae.abort(),
        D.fetchers.forEach( (k, R) => xn(R)),
        D.blockers.forEach( (k, R) => Ut(R))
    }
    function Tr(k) {
        return b.add(k),
        () => b.delete(k)
    }
    function it(k, R={}) {
        k.matches && (k.matches = k.matches.map(ee => {
            let ye = c[ee.route.id]
              , Se = ee.route;
            return Se.element !== ye.element || Se.errorElement !== ye.errorElement || Se.hydrateFallbackElement !== ye.hydrateFallbackElement ? {
                ...ee,
                route: ye
            } : ee
        }
        )),
        D = {
            ...D,
            ...k
        };
        let V = []
          , $ = [];
        D.fetchers.forEach( (ee, ye) => {
            ee.state === "idle" && (we.has(ye) ? V.push(ye) : $.push(ye))
        }
        ),
        we.forEach(ee => {
            !D.fetchers.has(ee) && !F.has(ee) && V.push(ee)
        }
        ),
        [...b].forEach(ee => ee(D, {
            deletedFetchers: V,
            newErrors: k.errors ?? null,
            viewTransitionOpts: R.viewTransitionOpts,
            flushSync: R.flushSync === !0
        })),
        V.forEach(ee => xn(ee)),
        $.forEach(ee => D.fetchers.delete(ee))
    }
    function on(k, R, {flushSync: V}={}) {
        var Me, xe;
        let $ = D.actionData != null && D.navigation.formMethod != null && It(D.navigation.formMethod) && D.navigation.state === "loading" && ((Me = k.state) == null ? void 0 : Me._isRedirect) !== !0, ee;
        R.actionData ? Object.keys(R.actionData).length > 0 ? ee = R.actionData : ee = null : $ ? ee = D.actionData : ee = null;
        let ye = R.loaderData ? Wp(D.loaderData, R.loaderData, R.matches || [], R.errors) : D.loaderData
          , Se = D.blockers;
        Se.size > 0 && (Se = new Map(Se),
        Se.forEach( (De, Ve) => Se.set(Ve, eo)));
        let le = Re ? !1 : st(k, R.matches || D.matches)
          , de = X === !0 || D.navigation.formMethod != null && It(D.navigation.formMethod) && ((xe = k.state) == null ? void 0 : xe._isRedirect) !== !0;
        m && (f = m,
        m = void 0),
        Re || H === "POP" || (H === "PUSH" ? t.history.push(k, k.state) : H === "REPLACE" && t.history.replace(k, k.state));
        let pe;
        if (H === "POP") {
            let De = Ae.get(D.location.pathname);
            De && De.has(k.pathname) ? pe = {
                currentLocation: D.location,
                nextLocation: k
            } : Ae.has(k.pathname) && (pe = {
                currentLocation: k,
                nextLocation: D.location
            })
        } else if (ke) {
            let De = Ae.get(D.location.pathname);
            De ? De.add(k.pathname) : (De = new Set([k.pathname]),
            Ae.set(D.location.pathname, De)),
            pe = {
                currentLocation: D.location,
                nextLocation: k
            }
        }
        it({
            ...R,
            actionData: ee,
            loaderData: ye,
            historyAction: H,
            location: k,
            initialized: !0,
            navigation: oc,
            revalidation: "idle",
            restoreScrollPosition: le,
            preventScrollReset: de,
            blockers: Se
        }, {
            viewTransitionOpts: pe,
            flushSync: V === !0
        }),
        H = "POP",
        X = !1,
        ke = !1,
        Re = !1,
        ne = !1,
        te == null || te.resolve(),
        te = null,
        Pe == null || Pe.resolve(),
        Pe = null
    }
    async function Hn(k, R) {
        if (te == null || te.resolve(),
        te = null,
        typeof k == "number") {
            te || (te = Yp());
            let Ve = te.promise;
            return t.history.go(k),
            Ve
        }
        let V = Tc(D.location, D.matches, y, k, R == null ? void 0 : R.fromRouteId, R == null ? void 0 : R.relative)
          , {path: $, submission: ee, error: ye} = Ap(!1, V, R)
          , Se = D.location
          , le = go(D.location, $, R && R.state);
        le = {
            ...le,
            ...t.history.encodeLocation(le)
        };
        let de = R && R.replace != null ? R.replace : void 0
          , pe = "PUSH";
        de === !0 ? pe = "REPLACE" : de === !1 || ee != null && It(ee.formMethod) && ee.formAction === D.location.pathname + D.location.search && (pe = "REPLACE");
        let Me = R && "preventScrollReset"in R ? R.preventScrollReset === !0 : void 0
          , xe = (R && R.flushSync) === !0
          , De = _n({
            currentLocation: Se,
            nextLocation: le,
            historyAction: pe
        });
        if (De) {
            Xn(De, {
                state: "blocked",
                location: le,
                proceed() {
                    Xn(De, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: le
                    }),
                    Hn(k, R)
                },
                reset() {
                    let Ve = new Map(D.blockers);
                    Ve.set(De, eo),
                    it({
                        blockers: Ve
                    })
                }
            });
            return
        }
        await an(pe, le, {
            submission: ee,
            pendingError: ye,
            preventScrollReset: Me,
            replace: R && R.replace,
            enableViewTransition: R && R.viewTransition,
            flushSync: xe,
            callSiteDefaultShouldRevalidate: R && R.unstable_defaultShouldRevalidate
        })
    }
    function Vi() {
        Pe || (Pe = Yp()),
        fr(),
        it({
            revalidation: "loading"
        });
        let k = Pe.promise;
        return D.navigation.state === "submitting" ? k : D.navigation.state === "idle" ? (an(D.historyAction, D.location, {
            startUninterruptedRevalidation: !0
        }),
        k) : (an(H || D.historyAction, D.navigation.location, {
            overrideNavigation: D.navigation,
            enableViewTransition: ke === !0
        }),
        k)
    }
    async function an(k, R, V) {
        ae && ae.abort(),
        ae = null,
        H = k,
        Re = (V && V.startUninterruptedRevalidation) === !0,
        et(D.location, D.matches),
        X = (V && V.preventScrollReset) === !0,
        ke = (V && V.enableViewTransition) === !0;
        let $ = m || f
          , ee = V && V.overrideNavigation
          , ye = V != null && V.initialHydration && D.matches && D.matches.length > 0 && !B ? D.matches : Zr($, R, y)
          , Se = (V && V.flushSync) === !0;
        if (ye && D.initialized && !ne && Yw(D.location, R) && !(V && V.submission && It(V.submission.formMethod))) {
            on(R, {
                matches: ye
            }, {
                flushSync: Se
            });
            return
        }
        let le = ut(ye, $, R.pathname);
        if (le.active && le.matches && (ye = le.matches),
        !ye) {
            let {error: ct, notFoundMatches: Ct, route: We} = ln(R.pathname);
            on(R, {
                matches: Ct,
                loaderData: {},
                errors: {
                    [We.id]: ct
                }
            }, {
                flushSync: Se
            });
            return
        }
        ae = new AbortController;
        let de = ls(t.history, R, ae.signal, V && V.submission), pe = t.getContext ? await t.getContext() : new jp, Me;
        if (V && V.pendingError)
            Me = [ei(ye).route.id, {
                type: "error",
                error: V.pendingError
            }];
        else if (V && V.submission && It(V.submission.formMethod)) {
            let ct = await Dn(de, R, V.submission, ye, pe, le.active, V && V.initialHydration === !0, {
                replace: V.replace,
                flushSync: Se
            });
            if (ct.shortCircuited)
                return;
            if (ct.pendingActionResult) {
                let[Ct,We] = ct.pendingActionResult;
                if (mn(We) && vo(We.error) && We.error.status === 404) {
                    ae = null,
                    on(R, {
                        matches: ct.matches,
                        loaderData: {},
                        errors: {
                            [Ct]: We.error
                        }
                    });
                    return
                }
            }
            ye = ct.matches || ye,
            Me = ct.pendingActionResult,
            ee = ac(R, V.submission),
            Se = !1,
            le.active = !1,
            de = ls(t.history, de.url, de.signal)
        }
        let {shortCircuited: xe, matches: De, loaderData: Ve, errors: ht} = await li(de, R, ye, pe, le.active, ee, V && V.submission, V && V.fetcherSubmission, V && V.replace, V && V.initialHydration === !0, Se, Me, V && V.callSiteDefaultShouldRevalidate);
        xe || (ae = null,
        on(R, {
            matches: De || ye,
            ...Up(Me),
            loaderData: Ve,
            errors: ht
        }))
    }
    async function Dn(k, R, V, $, ee, ye, Se, le={}) {
        fr();
        let de = e1(R, V);
        if (it({
            navigation: de
        }, {
            flushSync: le.flushSync === !0
        }),
        ye) {
            let xe = await un($, R.pathname, k.signal);
            if (xe.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (xe.type === "error") {
                if (xe.partialMatches.length === 0) {
                    let {matches: Ve, route: ht} = _a(f);
                    return {
                        matches: Ve,
                        pendingActionResult: [ht.id, {
                            type: "error",
                            error: xe.error
                        }]
                    }
                }
                let De = ei(xe.partialMatches).route.id;
                return {
                    matches: xe.partialMatches,
                    pendingActionResult: [De, {
                        type: "error",
                        error: xe.error
                    }]
                }
            } else if (xe.matches)
                $ = xe.matches;
            else {
                let {notFoundMatches: De, error: Ve, route: ht} = ln(R.pathname);
                return {
                    matches: De,
                    pendingActionResult: [ht.id, {
                        type: "error",
                        error: Ve
                    }]
                }
            }
        }
        let pe, Me = $a($, R);
        if (!Me.route.action && !Me.route.lazy)
            pe = {
                type: "error",
                error: jn(405, {
                    method: k.method,
                    pathname: R.pathname,
                    routeId: Me.route.id
                })
            };
        else {
            let xe = ps(u, c, k, $, Me, Se ? [] : o, ee)
              , De = await Gn(k, xe, ee, null);
            if (pe = De[Me.route.id],
            !pe) {
                for (let Ve of $)
                    if (De[Ve.route.id]) {
                        pe = De[Ve.route.id];
                        break
                    }
            }
            if (k.signal.aborted)
                return {
                    shortCircuited: !0
                }
        }
        if (Mi(pe)) {
            let xe;
            return le && le.replace != null ? xe = le.replace : xe = Bp(pe.response.headers.get("Location"), new URL(k.url), y, t.history) === D.location.pathname + D.location.search,
            await vn(k, pe, !0, {
                submission: V,
                replace: xe
            }),
            {
                shortCircuited: !0
            }
        }
        if (mn(pe)) {
            let xe = ei($, Me.route.id);
            return (le && le.replace) !== !0 && (H = "PUSH"),
            {
                matches: $,
                pendingActionResult: [xe.route.id, pe, Me.route.id]
            }
        }
        return {
            matches: $,
            pendingActionResult: [Me.route.id, pe]
        }
    }
    async function li(k, R, V, $, ee, ye, Se, le, de, pe, Me, xe, De) {
        let Ve = ye || ac(R, Se)
          , ht = Se || le || Hp(Ve)
          , ct = !Re && !pe;
        if (ee) {
            if (ct) {
                let He = At(xe);
                it({
                    navigation: Ve,
                    ...He !== void 0 ? {
                        actionData: He
                    } : {}
                }, {
                    flushSync: Me
                })
            }
            let Oe = await un(V, R.pathname, k.signal);
            if (Oe.type === "aborted")
                return {
                    shortCircuited: !0
                };
            if (Oe.type === "error") {
                if (Oe.partialMatches.length === 0) {
                    let {matches: Pr, route: gr} = _a(f);
                    return {
                        matches: Pr,
                        loaderData: {},
                        errors: {
                            [gr.id]: Oe.error
                        }
                    }
                }
                let He = ei(Oe.partialMatches).route.id;
                return {
                    matches: Oe.partialMatches,
                    loaderData: {},
                    errors: {
                        [He]: Oe.error
                    }
                }
            } else if (Oe.matches)
                V = Oe.matches;
            else {
                let {error: He, notFoundMatches: Pr, route: gr} = ln(R.pathname);
                return {
                    matches: Pr,
                    loaderData: {},
                    errors: {
                        [gr.id]: He
                    }
                }
            }
        }
        let Ct = m || f
          , {dsMatches: We, revalidatingFetchers: Qt} = _p(k, $, u, c, t.history, D, V, ht, R, pe ? [] : o, pe === !0, ne, be, we, ie, I, Ct, y, t.patchRoutesOnNavigation != null, xe, De);
        if (K = ++q,
        !t.dataStrategy && !We.some(Oe => Oe.shouldLoad) && !We.some(Oe => Oe.route.middleware && Oe.route.middleware.length > 0) && Qt.length === 0) {
            let Oe = hr();
            return on(R, {
                matches: V,
                loaderData: {},
                errors: xe && mn(xe[1]) ? {
                    [xe[0]]: xe[1].error
                } : null,
                ...Up(xe),
                ...Oe ? {
                    fetchers: new Map(D.fetchers)
                } : {}
            }, {
                flushSync: Me
            }),
            {
                shortCircuited: !0
            }
        }
        if (ct) {
            let Oe = {};
            if (!ee) {
                Oe.navigation = Ve;
                let He = At(xe);
                He !== void 0 && (Oe.actionData = He)
            }
            Qt.length > 0 && (Oe.fetchers = dr(Qt)),
            it(Oe, {
                flushSync: Me
            })
        }
        Qt.forEach(Oe => {
            Xt(Oe.key),
            Oe.controller && F.set(Oe.key, Oe.controller)
        }
        );
        let Ue = () => Qt.forEach(Oe => Xt(Oe.key));
        ae && ae.signal.addEventListener("abort", Ue);
        let {loaderResults: di, fetcherResults: wn} = await Kn(We, Qt, k, $);
        if (k.signal.aborted)
            return {
                shortCircuited: !0
            };
        ae && ae.signal.removeEventListener("abort", Ue),
        Qt.forEach(Oe => F.delete(Oe.key));
        let cn = La(di);
        if (cn)
            return await vn(k, cn.result, !0, {
                replace: de
            }),
            {
                shortCircuited: !0
            };
        if (cn = La(wn),
        cn)
            return I.add(cn.key),
            await vn(k, cn.result, !0, {
                replace: de
            }),
            {
                shortCircuited: !0
            };
        let {loaderData: Mr, errors: fi} = Fp(D, V, di, xe, Qt, wn);
        pe && D.errors && (fi = {
            ...D.errors,
            ...fi
        });
        let qn = hr()
          , mr = Rr(K)
          , $t = qn || mr || Qt.length > 0;
        return {
            matches: V,
            loaderData: Mr,
            errors: fi,
            ...$t ? {
                fetchers: new Map(D.fetchers)
            } : {}
        }
    }
    function At(k) {
        if (k && !mn(k[1]))
            return {
                [k[0]]: k[1].data
            };
        if (D.actionData)
            return Object.keys(D.actionData).length === 0 ? null : D.actionData
    }
    function dr(k) {
        return k.forEach(R => {
            let V = D.fetchers.get(R.key)
              , $ = to(void 0, V ? V.data : void 0);
            D.fetchers.set(R.key, $)
        }
        ),
        new Map(D.fetchers)
    }
    async function Yn(k, R, V, $) {
        Xt(k);
        let ee = ($ && $.flushSync) === !0
          , ye = m || f
          , Se = Tc(D.location, D.matches, y, V, R, $ == null ? void 0 : $.relative)
          , le = Zr(ye, Se, y)
          , de = ut(le, ye, Se);
        if (de.active && de.matches && (le = de.matches),
        !le) {
            _t(k, R, jn(404, {
                pathname: Se
            }), {
                flushSync: ee
            });
            return
        }
        let {path: pe, submission: Me, error: xe} = Ap(!0, Se, $);
        if (xe) {
            _t(k, R, xe, {
                flushSync: ee
            });
            return
        }
        let De = t.getContext ? await t.getContext() : new jp
          , Ve = ($ && $.preventScrollReset) === !0;
        if (Me && It(Me.formMethod)) {
            await xt(k, R, pe, le, De, de.active, ee, Ve, Me, $ && $.unstable_defaultShouldRevalidate);
            return
        }
        ie.set(k, {
            routeId: R,
            path: pe
        }),
        await An(k, R, pe, le, De, de.active, ee, Ve, Me)
    }
    async function xt(k, R, V, $, ee, ye, Se, le, de, pe) {
        fr(),
        ie.delete(k);
        let Me = D.fetchers.get(k);
        Tt(k, t1(de, Me), {
            flushSync: Se
        });
        let xe = new AbortController
          , De = ls(t.history, V, xe.signal, de);
        if (ye) {
            let qe = await un($, new URL(De.url).pathname, De.signal, k);
            if (qe.type === "aborted")
                return;
            if (qe.type === "error") {
                _t(k, R, qe.error, {
                    flushSync: Se
                });
                return
            } else if (qe.matches)
                $ = qe.matches;
            else {
                _t(k, R, jn(404, {
                    pathname: V
                }), {
                    flushSync: Se
                });
                return
            }
        }
        let Ve = $a($, V);
        if (!Ve.route.action && !Ve.route.lazy) {
            let qe = jn(405, {
                method: de.formMethod,
                pathname: V,
                routeId: R
            });
            _t(k, R, qe, {
                flushSync: Se
            });
            return
        }
        F.set(k, xe);
        let ht = q
          , ct = ps(u, c, De, $, Ve, o, ee)
          , Ct = await Gn(De, ct, ee, k)
          , We = Ct[Ve.route.id];
        if (!We) {
            for (let qe of ct)
                if (Ct[qe.route.id]) {
                    We = Ct[qe.route.id];
                    break
                }
        }
        if (De.signal.aborted) {
            F.get(k) === xe && F.delete(k);
            return
        }
        if (we.has(k)) {
            if (Mi(We) || mn(We)) {
                Tt(k, jr(void 0));
                return
            }
        } else {
            if (Mi(We))
                if (F.delete(k),
                K > ht) {
                    Tt(k, jr(void 0));
                    return
                } else
                    return I.add(k),
                    Tt(k, to(de)),
                    vn(De, We, !1, {
                        fetcherSubmission: de,
                        preventScrollReset: le
                    });
            if (mn(We)) {
                _t(k, R, We.error);
                return
            }
        }
        let Qt = D.navigation.location || D.location
          , Ue = ls(t.history, Qt, xe.signal)
          , di = m || f
          , wn = D.navigation.state !== "idle" ? Zr(di, D.navigation.location, y) : D.matches;
        Le(wn, "Didn't find any matches after fetcher action");
        let cn = ++q;
        j.set(k, cn);
        let Mr = to(de, We.data);
        D.fetchers.set(k, Mr);
        let {dsMatches: fi, revalidatingFetchers: qn} = _p(Ue, ee, u, c, t.history, D, wn, de, Qt, o, !1, ne, be, we, ie, I, di, y, t.patchRoutesOnNavigation != null, [Ve.route.id, We], pe);
        qn.filter(qe => qe.key !== k).forEach(qe => {
            let yr = qe.key
              , hi = D.fetchers.get(yr)
              , pi = to(void 0, hi ? hi.data : void 0);
            D.fetchers.set(yr, pi),
            Xt(yr),
            qe.controller && F.set(yr, qe.controller)
        }
        ),
        it({
            fetchers: new Map(D.fetchers)
        });
        let mr = () => qn.forEach(qe => Xt(qe.key));
        xe.signal.addEventListener("abort", mr);
        let {loaderResults: $t, fetcherResults: Oe} = await Kn(fi, qn, Ue, ee);
        if (xe.signal.aborted)
            return;
        if (xe.signal.removeEventListener("abort", mr),
        j.delete(k),
        F.delete(k),
        qn.forEach(qe => F.delete(qe.key)),
        D.fetchers.has(k)) {
            let qe = jr(We.data);
            D.fetchers.set(k, qe)
        }
        let He = La($t);
        if (He)
            return vn(Ue, He.result, !1, {
                preventScrollReset: le
            });
        if (He = La(Oe),
        He)
            return I.add(He.key),
            vn(Ue, He.result, !1, {
                preventScrollReset: le
            });
        let {loaderData: Pr, errors: gr} = Fp(D, wn, $t, void 0, qn, Oe);
        Rr(cn),
        D.navigation.state === "loading" && cn > K ? (Le(H, "Expected pending action"),
        ae && ae.abort(),
        on(D.navigation.location, {
            matches: wn,
            loaderData: Pr,
            errors: gr,
            fetchers: new Map(D.fetchers)
        })) : (it({
            errors: gr,
            loaderData: Wp(D.loaderData, Pr, wn, gr),
            fetchers: new Map(D.fetchers)
        }),
        ne = !1)
    }
    async function An(k, R, V, $, ee, ye, Se, le, de) {
        let pe = D.fetchers.get(k);
        Tt(k, to(de, pe ? pe.data : void 0), {
            flushSync: Se
        });
        let Me = new AbortController
          , xe = ls(t.history, V, Me.signal);
        if (ye) {
            let We = await un($, new URL(xe.url).pathname, xe.signal, k);
            if (We.type === "aborted")
                return;
            if (We.type === "error") {
                _t(k, R, We.error, {
                    flushSync: Se
                });
                return
            } else if (We.matches)
                $ = We.matches;
            else {
                _t(k, R, jn(404, {
                    pathname: V
                }), {
                    flushSync: Se
                });
                return
            }
        }
        let De = $a($, V);
        F.set(k, Me);
        let Ve = q
          , ht = ps(u, c, xe, $, De, o, ee)
          , Ct = (await Gn(xe, ht, ee, k))[De.route.id];
        if (F.get(k) === Me && F.delete(k),
        !xe.signal.aborted) {
            if (we.has(k)) {
                Tt(k, jr(void 0));
                return
            }
            if (Mi(Ct))
                if (K > Ve) {
                    Tt(k, jr(void 0));
                    return
                } else {
                    I.add(k),
                    await vn(xe, Ct, !1, {
                        preventScrollReset: le
                    });
                    return
                }
            if (mn(Ct)) {
                _t(k, R, Ct.error);
                return
            }
            Tt(k, jr(Ct.data))
        }
    }
    async function vn(k, R, V, {submission: $, fetcherSubmission: ee, preventScrollReset: ye, replace: Se}={}) {
        V || (te == null || te.resolve(),
        te = null),
        R.response.headers.has("X-Remix-Revalidate") && (ne = !0);
        let le = R.response.headers.get("Location");
        Le(le, "Expected a Location header on the redirect Response"),
        le = Bp(le, new URL(k.url), y, t.history);
        let de = go(D.location, le, {
            _isRedirect: !0
        });
        if (i) {
            let ht = !1;
            if (R.response.headers.has("X-Remix-Reload-Document"))
                ht = !0;
            else if (id(le)) {
                const ct = Pg(le, !0);
                ht = ct.origin !== n.location.origin || Mn(ct.pathname, y) == null
            }
            if (ht) {
                Se ? n.location.replace(le) : n.location.assign(le);
                return
            }
        }
        ae = null;
        let pe = Se === !0 || R.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH"
          , {formMethod: Me, formAction: xe, formEncType: De} = D.navigation;
        !$ && !ee && Me && xe && De && ($ = Hp(D.navigation));
        let Ve = $ || ee;
        if (Mw.has(R.response.status) && Ve && It(Ve.formMethod))
            await an(pe, de, {
                submission: {
                    ...Ve,
                    formAction: le
                },
                preventScrollReset: ye || X,
                enableViewTransition: V ? ke : void 0
            });
        else {
            let ht = ac(de, $);
            await an(pe, de, {
                overrideNavigation: ht,
                fetcherSubmission: ee,
                preventScrollReset: ye || X,
                enableViewTransition: V ? ke : void 0
            })
        }
    }
    async function Gn(k, R, V, $) {
        var Se;
        let ee, ye = {};
        try {
            ee = await Iw(v, k, R, $, V, !1)
        } catch (le) {
            return R.filter(de => de.shouldLoad).forEach(de => {
                ye[de.route.id] = {
                    type: "error",
                    error: le
                }
            }
            ),
            ye
        }
        if (k.signal.aborted)
            return ye;
        if (!It(k.method))
            for (let le of R) {
                if (((Se = ee[le.route.id]) == null ? void 0 : Se.type) === "error")
                    break;
                !ee.hasOwnProperty(le.route.id) && !D.loaderData.hasOwnProperty(le.route.id) && (!D.errors || !D.errors.hasOwnProperty(le.route.id)) && le.shouldCallHandler() && (ee[le.route.id] = {
                    type: "error",
                    result: new Error(`No result returned from dataStrategy for route ${le.route.id}`)
                })
            }
        for (let[le,de] of Object.entries(ee))
            if (Xw(de)) {
                let pe = de.result;
                ye[le] = {
                    type: "redirect",
                    response: $w(pe, k, le, R, y)
                }
            } else
                ye[le] = await Uw(de);
        return ye
    }
    async function Kn(k, R, V, $) {
        let ee = Gn(V, k, $, null)
          , ye = Promise.all(R.map(async de => {
            if (de.matches && de.match && de.request && de.controller) {
                let Me = (await Gn(de.request, de.matches, $, de.key))[de.match.route.id];
                return {
                    [de.key]: Me
                }
            } else
                return Promise.resolve({
                    [de.key]: {
                        type: "error",
                        error: jn(404, {
                            pathname: de.path
                        })
                    }
                })
        }
        ))
          , Se = await ee
          , le = (await ye).reduce( (de, pe) => Object.assign(de, pe), {});
        return {
            loaderResults: Se,
            fetcherResults: le
        }
    }
    function fr() {
        ne = !0,
        ie.forEach( (k, R) => {
            F.has(R) && be.add(R),
            Xt(R)
        }
        )
    }
    function Tt(k, R, V={}) {
        D.fetchers.set(k, R),
        it({
            fetchers: new Map(D.fetchers)
        }, {
            flushSync: (V && V.flushSync) === !0
        })
    }
    function _t(k, R, V, $={}) {
        let ee = ei(D.matches, R);
        xn(k),
        it({
            errors: {
                [ee.route.id]: V
            },
            fetchers: new Map(D.fetchers)
        }, {
            flushSync: ($ && $.flushSync) === !0
        })
    }
    function Wt(k) {
        return me.set(k, (me.get(k) || 0) + 1),
        we.has(k) && we.delete(k),
        D.fetchers.get(k) || Pw
    }
    function Jn(k, R) {
        Xt(k, R == null ? void 0 : R.reason),
        Tt(k, jr(null))
    }
    function xn(k) {
        let R = D.fetchers.get(k);
        F.has(k) && !(R && R.state === "loading" && j.has(k)) && Xt(k),
        ie.delete(k),
        j.delete(k),
        I.delete(k),
        we.delete(k),
        be.delete(k),
        D.fetchers.delete(k)
    }
    function Oi(k) {
        let R = (me.get(k) || 0) - 1;
        R <= 0 ? (me.delete(k),
        we.add(k)) : me.set(k, R),
        it({
            fetchers: new Map(D.fetchers)
        })
    }
    function Xt(k, R) {
        let V = F.get(k);
        V && (V.abort(R),
        F.delete(k))
    }
    function ui(k) {
        for (let R of k) {
            let V = Wt(R)
              , $ = jr(V.data);
            D.fetchers.set(R, $)
        }
    }
    function hr() {
        let k = []
          , R = !1;
        for (let V of I) {
            let $ = D.fetchers.get(V);
            Le($, `Expected fetcher: ${V}`),
            $.state === "loading" && (I.delete(V),
            k.push(V),
            R = !0)
        }
        return ui(k),
        R
    }
    function Rr(k) {
        let R = [];
        for (let[V,$] of j)
            if ($ < k) {
                let ee = D.fetchers.get(V);
                Le(ee, `Expected fetcher: ${V}`),
                ee.state === "loading" && (Xt(V),
                j.delete(V),
                R.push(V))
            }
        return ui(R),
        R.length > 0
    }
    function pr(k, R) {
        let V = D.blockers.get(k) || eo;
        return ue.get(k) !== R && ue.set(k, R),
        V
    }
    function Ut(k) {
        D.blockers.delete(k),
        ue.delete(k)
    }
    function Xn(k, R) {
        let V = D.blockers.get(k) || eo;
        Le(V.state === "unblocked" && R.state === "blocked" || V.state === "blocked" && R.state === "blocked" || V.state === "blocked" && R.state === "proceeding" || V.state === "blocked" && R.state === "unblocked" || V.state === "proceeding" && R.state === "unblocked", `Invalid blocker state transition: ${V.state} -> ${R.state}`);
        let $ = new Map(D.blockers);
        $.set(k, R),
        it({
            blockers: $
        })
    }
    function _n({currentLocation: k, nextLocation: R, historyAction: V}) {
        if (ue.size === 0)
            return;
        ue.size > 1 && vt(!1, "A router only supports one blocker at a time");
        let $ = Array.from(ue.entries())
          , [ee,ye] = $[$.length - 1]
          , Se = D.blockers.get(ee);
        if (!(Se && Se.state === "proceeding") && ye({
            currentLocation: k,
            nextLocation: R,
            historyAction: V
        }))
            return ee
    }
    function ln(k) {
        let R = jn(404, {
            pathname: k
        })
          , V = m || f
          , {matches: $, route: ee} = _a(V);
        return {
            notFoundMatches: $,
            route: ee,
            error: R
        }
    }
    function ci(k, R, V) {
        if (C = k,
        N = R,
        M = V || null,
        !A && D.navigation === oc) {
            A = !0;
            let $ = st(D.location, D.matches);
            $ != null && it({
                restoreScrollPosition: $
            })
        }
        return () => {
            C = null,
            N = null,
            M = null
        }
    }
    function Te(k, R) {
        return M && M(k, R.map($ => rw($, D.loaderData))) || k.key
    }
    function et(k, R) {
        if (C && N) {
            let V = Te(k, R);
            C[V] = N()
        }
    }
    function st(k, R) {
        if (C) {
            let V = Te(k, R)
              , $ = C[V];
            if (typeof $ == "number")
                return $
        }
        return null
    }
    function ut(k, R, V) {
        if (t.patchRoutesOnNavigation)
            if (k) {
                if (Object.keys(k[0].params).length > 0)
                    return {
                        active: !0,
                        matches: ao(R, V, y, !0)
                    }
            } else
                return {
                    active: !0,
                    matches: ao(R, V, y, !0) || []
                };
        return {
            active: !1,
            matches: null
        }
    }
    async function un(k, R, V, $) {
        if (!t.patchRoutesOnNavigation)
            return {
                type: "success",
                matches: k
            };
        let ee = k;
        for (; ; ) {
            let ye = m == null
              , Se = m || f
              , le = c;
            try {
                await t.patchRoutesOnNavigation({
                    signal: V,
                    path: R,
                    matches: ee,
                    fetcherKey: $,
                    patch: (Me, xe) => {
                        V.aborted || Lp(Me, xe, Se, le, u, !1)
                    }
                })
            } catch (Me) {
                return {
                    type: "error",
                    error: Me,
                    partialMatches: ee
                }
            } finally {
                ye && !V.aborted && (f = [...f])
            }
            if (V.aborted)
                return {
                    type: "aborted"
                };
            let de = Zr(Se, R, y)
              , pe = null;
            if (de) {
                if (Object.keys(de[0].params).length === 0)
                    return {
                        type: "success",
                        matches: de
                    };
                if (pe = ao(Se, R, y, !0),
                !(pe && ee.length < pe.length && tt(ee, pe.slice(0, ee.length))))
                    return {
                        type: "success",
                        matches: de
                    }
            }
            if (pe || (pe = ao(Se, R, y, !0)),
            !pe || tt(ee, pe))
                return {
                    type: "success",
                    matches: null
                };
            ee = pe
        }
    }
    function tt(k, R) {
        return k.length === R.length && k.every( (V, $) => V.route.id === R[$].route.id)
    }
    function ft(k) {
        c = {},
        m = yo(k, u, void 0, c)
    }
    function Qn(k, R, V=!1) {
        let $ = m == null;
        Lp(k, R, m || f, c, u, V),
        $ && (f = [...f],
        it({}))
    }
    return se = {
        get basename() {
            return y
        },
        get future() {
            return g
        },
        get state() {
            return D
        },
        get routes() {
            return f
        },
        get window() {
            return n
        },
        initialize: Ie,
        subscribe: Tr,
        enableScrollRestoration: ci,
        navigate: Hn,
        fetch: Yn,
        revalidate: Vi,
        createHref: k => t.history.createHref(k),
        encodeLocation: k => t.history.encodeLocation(k),
        getFetcher: Wt,
        resetFetcher: Jn,
        deleteFetcher: Oi,
        dispose: lt,
        getBlocker: pr,
        deleteBlocker: Ut,
        patchRoutes: Qn,
        _internalFetchControllers: F,
        _internalSetRoutes: ft,
        _internalSetStateDoNotUseOrYouWillBreakYourApp(k) {
            it(k)
        }
    },
    t.unstable_instrumentations && (se = Sw(se, t.unstable_instrumentations.map(k => k.router).filter(Boolean))),
    se
}
function _w(t) {
    return t != null && ("formData"in t && t.formData != null || "body"in t && t.body !== void 0)
}
function Tc(t, n, i, o, l, u) {
    let c, f;
    if (l) {
        c = [];
        for (let y of n)
            if (c.push(y),
            y.route.id === l) {
                f = y;
                break
            }
    } else
        c = n,
        f = n[n.length - 1];
    let m = od(o || ".", sd(c), Mn(t.pathname, i) || t.pathname, u === "path");
    if (o == null && (m.search = t.search,
    m.hash = t.hash),
    (o == null || o === "" || o === ".") && f) {
        let y = ud(m.search);
        if (f.route.index && !y)
            m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index";
        else if (!f.route.index && y) {
            let v = new URLSearchParams(m.search)
              , g = v.getAll("index");
            v.delete("index"),
            g.filter(b => b).forEach(b => v.append("index", b));
            let w = v.toString();
            m.search = w ? `?${w}` : ""
        }
    }
    return i !== "/" && (m.pathname = gw({
        basename: i,
        pathname: m.pathname
    })),
    lr(m)
}
function Ap(t, n, i) {
    if (!i || !_w(i))
        return {
            path: n
        };
    if (i.formMethod && !Zw(i.formMethod))
        return {
            path: n,
            error: jn(405, {
                method: i.formMethod
            })
        };
    let o = () => ({
        path: n,
        error: jn(400, {
            type: "invalid-body"
        })
    })
      , u = (i.formMethod || "get").toUpperCase()
      , c = Kg(n);
    if (i.body !== void 0) {
        if (i.formEncType === "text/plain") {
            if (!It(u))
                return o();
            let g = typeof i.body == "string" ? i.body : i.body instanceof FormData || i.body instanceof URLSearchParams ? Array.from(i.body.entries()).reduce( (w, [b,C]) => `${w}${b}=${C}
`, "") : String(i.body);
            return {
                path: n,
                submission: {
                    formMethod: u,
                    formAction: c,
                    formEncType: i.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: g
                }
            }
        } else if (i.formEncType === "application/json") {
            if (!It(u))
                return o();
            try {
                let g = typeof i.body == "string" ? JSON.parse(i.body) : i.body;
                return {
                    path: n,
                    submission: {
                        formMethod: u,
                        formAction: c,
                        formEncType: i.formEncType,
                        formData: void 0,
                        json: g,
                        text: void 0
                    }
                }
            } catch {
                return o()
            }
        }
    }
    Le(typeof FormData == "function", "FormData is not available in this environment");
    let f, m;
    if (i.formData)
        f = Pc(i.formData),
        m = i.formData;
    else if (i.body instanceof FormData)
        f = Pc(i.body),
        m = i.body;
    else if (i.body instanceof URLSearchParams)
        f = i.body,
        m = Ip(f);
    else if (i.body == null)
        f = new URLSearchParams,
        m = new FormData;
    else
        try {
            f = new URLSearchParams(i.body),
            m = Ip(f)
        } catch {
            return o()
        }
    let y = {
        formMethod: u,
        formAction: c,
        formEncType: i && i.formEncType || "application/x-www-form-urlencoded",
        formData: m,
        json: void 0,
        text: void 0
    };
    if (It(y.formMethod))
        return {
            path: n,
            submission: y
        };
    let v = si(n);
    return t && v.search && ud(v.search) && f.append("index", ""),
    v.search = `?${f}`,
    {
        path: lr(v),
        submission: y
    }
}
function _p(t, n, i, o, l, u, c, f, m, y, v, g, w, b, C, M, N, A, L, B, W) {
    var Re;
    let U = B ? mn(B[1]) ? B[1].error : B[1].data : void 0, se = l.createURL(u.location), D = l.createURL(m), H;
    if (v && u.errors) {
        let ne = Object.keys(u.errors)[0];
        H = c.findIndex(be => be.route.id === ne)
    } else if (B && mn(B[1])) {
        let ne = B[0];
        H = c.findIndex(be => be.route.id === ne) - 1
    }
    let te = B ? B[1].statusCode : void 0
      , X = te && te >= 400
      , ae = {
        currentUrl: se,
        currentParams: ((Re = u.matches[0]) == null ? void 0 : Re.params) || {},
        nextUrl: D,
        nextParams: c[0].params,
        ...f,
        actionResult: U,
        actionStatus: te
    }
      , ke = Co(c)
      , Ae = c.map( (ne, be) => {
        let {route: F} = ne
          , q = null;
        if (H != null && be > H ? q = !1 : F.lazy ? q = !0 : ad(F) ? v ? q = Rc(F, u.loaderData, u.errors) : Lw(u.loaderData, u.matches[be], ne) && (q = !0) : q = !1,
        q !== null)
            return Mc(i, o, t, ke, ne, y, n, q);
        let K = !1;
        typeof W == "boolean" ? K = W : X ? K = !1 : (g || se.pathname + se.search === D.pathname + D.search || se.search !== D.search || zw(u.matches[be], ne)) && (K = !0);
        let j = {
            ...ae,
            defaultShouldRevalidate: K
        }
          , I = co(ne, j);
        return Mc(i, o, t, ke, ne, y, n, I, j, W)
    }
    )
      , je = [];
    return C.forEach( (ne, be) => {
        if (v || !c.some(we => we.route.id === ne.routeId) || b.has(be))
            return;
        let F = u.fetchers.get(be)
          , q = F && F.state !== "idle" && F.data === void 0
          , K = Zr(N, ne.path, A);
        if (!K) {
            if (L && q)
                return;
            je.push({
                key: be,
                routeId: ne.routeId,
                path: ne.path,
                matches: null,
                match: null,
                request: null,
                controller: null
            });
            return
        }
        if (M.has(be))
            return;
        let j = $a(K, ne.path)
          , I = new AbortController
          , ie = ls(l, ne.path, I.signal)
          , me = null;
        if (w.has(be))
            w.delete(be),
            me = ps(i, o, ie, K, j, y, n);
        else if (q)
            g && (me = ps(i, o, ie, K, j, y, n));
        else {
            let we;
            typeof W == "boolean" ? we = W : X ? we = !1 : we = g;
            let ue = {
                ...ae,
                defaultShouldRevalidate: we
            };
            co(j, ue) && (me = ps(i, o, ie, K, j, y, n, ue))
        }
        me && je.push({
            key: be,
            routeId: ne.routeId,
            path: ne.path,
            matches: me,
            match: j,
            request: ie,
            controller: I
        })
    }
    ),
    {
        dsMatches: Ae,
        revalidatingFetchers: je
    }
}
function ad(t) {
    return t.loader != null || t.middleware != null && t.middleware.length > 0
}
function Rc(t, n, i) {
    if (t.lazy)
        return !0;
    if (!ad(t))
        return !1;
    let o = n != null && t.id in n
      , l = i != null && i[t.id] !== void 0;
    return !o && l ? !1 : typeof t.loader == "function" && t.loader.hydrate === !0 ? !0 : !o && !l
}
function Lw(t, n, i) {
    let o = !n || i.route.id !== n.route.id
      , l = !t.hasOwnProperty(i.route.id);
    return o || l
}
function zw(t, n) {
    let i = t.route.path;
    return t.pathname !== n.pathname || i != null && i.endsWith("*") && t.params["*"] !== n.params["*"]
}
function co(t, n) {
    if (t.route.shouldRevalidate) {
        let i = t.route.shouldRevalidate(n);
        if (typeof i == "boolean")
            return i
    }
    return n.defaultShouldRevalidate
}
function Lp(t, n, i, o, l, u) {
    let c;
    if (t) {
        let y = o[t];
        Le(y, `No route found to patch children into: routeId = ${t}`),
        y.children || (y.children = []),
        c = y.children
    } else
        c = i;
    let f = []
      , m = [];
    if (n.forEach(y => {
        let v = c.find(g => Ug(y, g));
        v ? m.push({
            existingRoute: v,
            newRoute: y
        }) : f.push(y)
    }
    ),
    f.length > 0) {
        let y = yo(f, l, [t || "_", "patch", String((c == null ? void 0 : c.length) || "0")], o);
        c.push(...y)
    }
    if (u && m.length > 0)
        for (let y = 0; y < m.length; y++) {
            let {existingRoute: v, newRoute: g} = m[y]
              , w = v
              , [b] = yo([g], l, [], {}, !0);
            Object.assign(w, {
                element: b.element ? b.element : w.element,
                errorElement: b.errorElement ? b.errorElement : w.errorElement,
                hydrateFallbackElement: b.hydrateFallbackElement ? b.hydrateFallbackElement : w.hydrateFallbackElement
            })
        }
}
function Ug(t, n) {
    return "id"in t && "id"in n && t.id === n.id ? !0 : t.index === n.index && t.path === n.path && t.caseSensitive === n.caseSensitive ? (!t.children || t.children.length === 0) && (!n.children || n.children.length === 0) ? !0 : t.children.every( (i, o) => {
        var l;
        return (l = n.children) == null ? void 0 : l.some(u => Ug(i, u))
    }
    ) : !1
}
var zp = new WeakMap
  , $g = ({key: t, route: n, manifest: i, mapRouteProperties: o}) => {
    let l = i[n.id];
    if (Le(l, "No route found in manifest"),
    !l.lazy || typeof l.lazy != "object")
        return;
    let u = l.lazy[t];
    if (!u)
        return;
    let c = zp.get(l);
    c || (c = {},
    zp.set(l, c));
    let f = c[t];
    if (f)
        return f;
    let m = (async () => {
        let y = Zx(t)
          , g = l[t] !== void 0 && t !== "hasErrorBoundary";
        if (y)
            vt(!y, "Route property " + t + " is not a supported lazy route property. This property will be ignored."),
            c[t] = Promise.resolve();
        else if (g)
            vt(!1, `Route "${l.id}" has a static property "${t}" defined. The lazy property will be ignored.`);
        else {
            let w = await u();
            w != null && (Object.assign(l, {
                [t]: w
            }),
            Object.assign(l, o(l)))
        }
        typeof l.lazy == "object" && (l.lazy[t] = void 0,
        Object.values(l.lazy).every(w => w === void 0) && (l.lazy = void 0))
    }
    )();
    return c[t] = m,
    m
}
  , Vp = new WeakMap;
function Vw(t, n, i, o, l) {
    let u = i[t.id];
    if (Le(u, "No route found in manifest"),
    !t.lazy)
        return {
            lazyRoutePromise: void 0,
            lazyHandlerPromise: void 0
        };
    if (typeof t.lazy == "function") {
        let v = Vp.get(u);
        if (v)
            return {
                lazyRoutePromise: v,
                lazyHandlerPromise: v
            };
        let g = (async () => {
            Le(typeof t.lazy == "function", "No lazy route function found");
            let w = await t.lazy()
              , b = {};
            for (let C in w) {
                let M = w[C];
                if (M === void 0)
                    continue;
                let N = tw(C)
                  , L = u[C] !== void 0 && C !== "hasErrorBoundary";
                N ? vt(!N, "Route property " + C + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : L ? vt(!L, `Route "${u.id}" has a static property "${C}" defined but its lazy function is also returning a value for this property. The lazy route property "${C}" will be ignored.`) : b[C] = M
            }
            Object.assign(u, b),
            Object.assign(u, {
                ...o(u),
                lazy: void 0
            })
        }
        )();
        return Vp.set(u, g),
        g.catch( () => {}
        ),
        {
            lazyRoutePromise: g,
            lazyHandlerPromise: g
        }
    }
    let c = Object.keys(t.lazy), f = [], m;
    for (let v of c) {
        if (l && l.includes(v))
            continue;
        let g = $g({
            key: v,
            route: t,
            manifest: i,
            mapRouteProperties: o
        });
        g && (f.push(g),
        v === n && (m = g))
    }
    let y = f.length > 0 ? Promise.all(f).then( () => {}
    ) : void 0;
    return y == null || y.catch( () => {}
    ),
    m == null || m.catch( () => {}
    ),
    {
        lazyRoutePromise: y,
        lazyHandlerPromise: m
    }
}
async function Op(t) {
    let n = t.matches.filter(l => l.shouldLoad)
      , i = {};
    return (await Promise.all(n.map(l => l.resolve()))).forEach( (l, u) => {
        i[n[u].route.id] = l
    }
    ),
    i
}
async function Ow(t) {
    return t.matches.some(n => n.route.middleware) ? Hg(t, () => Op(t)) : Op(t)
}
function Hg(t, n) {
    return Bw(t, n, o => {
        if (qw(o))
            throw o;
        return o
    }
    , Kw, i);
    function i(o, l, u) {
        if (u)
            return Promise.resolve(Object.assign(u.value, {
                [l]: {
                    type: "error",
                    result: o
                }
            }));
        {
            let {matches: c} = t
              , f = Math.min(Math.max(c.findIndex(y => y.route.id === l), 0), Math.max(c.findIndex(y => y.shouldCallHandler()), 0))
              , m = ei(c, c[f].route.id).route.id;
            return Promise.resolve({
                [m]: {
                    type: "error",
                    result: o
                }
            })
        }
    }
}
async function Bw(t, n, i, o, l) {
    let {matches: u, request: c, params: f, context: m, unstable_pattern: y} = t
      , v = u.flatMap(w => w.route.middleware ? w.route.middleware.map(b => [w.route.id, b]) : []);
    return await Yg({
        request: c,
        params: f,
        context: m,
        unstable_pattern: y
    }, v, n, i, o, l)
}
async function Yg(t, n, i, o, l, u, c=0) {
    let {request: f} = t;
    if (f.signal.aborted)
        throw f.signal.reason ?? new Error(`Request aborted: ${f.method} ${f.url}`);
    let m = n[c];
    if (!m)
        return await i();
    let[y,v] = m, g, w = async () => {
        if (g)
            throw new Error("You may only call `next()` once per middleware");
        try {
            return g = {
                value: await Yg(t, n, i, o, l, u, c + 1)
            },
            g.value
        } catch (b) {
            return g = {
                value: await u(b, y, g)
            },
            g.value
        }
    }
    ;
    try {
        let b = await v(t, w)
          , C = b != null ? o(b) : void 0;
        return l(C) ? C : g ? C ?? g.value : (g = {
            value: await w()
        },
        g.value)
    } catch (b) {
        return await u(b, y, g)
    }
}
function Gg(t, n, i, o, l) {
    let u = $g({
        key: "middleware",
        route: o.route,
        manifest: n,
        mapRouteProperties: t
    })
      , c = Vw(o.route, It(i.method) ? "action" : "loader", n, t, l);
    return {
        middleware: u,
        route: c.lazyRoutePromise,
        handler: c.lazyHandlerPromise
    }
}
function Mc(t, n, i, o, l, u, c, f, m=null, y) {
    let v = !1
      , g = Gg(t, n, i, l, u);
    return {
        ...l,
        _lazyPromises: g,
        shouldLoad: f,
        shouldRevalidateArgs: m,
        shouldCallHandler(w) {
            return v = !0,
            m ? typeof y == "boolean" ? co(l, {
                ...m,
                defaultShouldRevalidate: y
            }) : typeof w == "boolean" ? co(l, {
                ...m,
                defaultShouldRevalidate: w
            }) : co(l, m) : f
        },
        resolve(w) {
            let {lazy: b, loader: C, middleware: M} = l.route
              , N = v || f || w && !It(i.method) && (b || C)
              , A = M && M.length > 0 && !C && !b;
            return N && (It(i.method) || !A) ? Fw({
                request: i,
                unstable_pattern: o,
                match: l,
                lazyHandlerPromise: g == null ? void 0 : g.handler,
                lazyRoutePromise: g == null ? void 0 : g.route,
                handlerOverride: w,
                scopedContext: c
            }) : Promise.resolve({
                type: "data",
                result: void 0
            })
        }
    }
}
function ps(t, n, i, o, l, u, c, f=null) {
    return o.map(m => m.route.id !== l.route.id ? {
        ...m,
        shouldLoad: !1,
        shouldRevalidateArgs: f,
        shouldCallHandler: () => !1,
        _lazyPromises: Gg(t, n, i, m, u),
        resolve: () => Promise.resolve({
            type: "data",
            result: void 0
        })
    } : Mc(t, n, i, Co(o), m, u, c, !0, f))
}
async function Iw(t, n, i, o, l, u) {
    i.some(y => {
        var v;
        return (v = y._lazyPromises) == null ? void 0 : v.middleware
    }
    ) && await Promise.all(i.map(y => {
        var v;
        return (v = y._lazyPromises) == null ? void 0 : v.middleware
    }
    ));
    let c = {
        request: n,
        unstable_pattern: Co(i),
        params: i[0].params,
        context: l,
        matches: i
    }
      , m = await t({
        ...c,
        fetcherKey: o,
        runClientMiddleware: y => {
            let v = c;
            return Hg(v, () => y({
                ...v,
                fetcherKey: o,
                runClientMiddleware: () => {
                    throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")
                }
            }))
        }
    });
    try {
        await Promise.all(i.flatMap(y => {
            var v, g;
            return [(v = y._lazyPromises) == null ? void 0 : v.handler, (g = y._lazyPromises) == null ? void 0 : g.route]
        }
        ))
    } catch {}
    return m
}
async function Fw({request: t, unstable_pattern: n, match: i, lazyHandlerPromise: o, lazyRoutePromise: l, handlerOverride: u, scopedContext: c}) {
    let f, m, y = It(t.method), v = y ? "action" : "loader", g = w => {
        let b, C = new Promise( (A, L) => b = L);
        m = () => b(),
        t.signal.addEventListener("abort", m);
        let M = A => typeof w != "function" ? Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${v}" [routeId: ${i.route.id}]`)) : w({
            request: t,
            unstable_pattern: n,
            params: i.params,
            context: c
        }, ...A !== void 0 ? [A] : [])
          , N = (async () => {
            try {
                return {
                    type: "data",
                    result: await (u ? u(L => M(L)) : M())
                }
            } catch (A) {
                return {
                    type: "error",
                    result: A
                }
            }
        }
        )();
        return Promise.race([N, C])
    }
    ;
    try {
        let w = y ? i.route.action : i.route.loader;
        if (o || l)
            if (w) {
                let b, [C] = await Promise.all([g(w).catch(M => {
                    b = M
                }
                ), o, l]);
                if (b !== void 0)
                    throw b;
                f = C
            } else {
                await o;
                let b = y ? i.route.action : i.route.loader;
                if (b)
                    [f] = await Promise.all([g(b), l]);
                else if (v === "action") {
                    let C = new URL(t.url)
                      , M = C.pathname + C.search;
                    throw jn(405, {
                        method: t.method,
                        pathname: M,
                        routeId: i.route.id
                    })
                } else
                    return {
                        type: "data",
                        result: void 0
                    }
            }
        else if (w)
            f = await g(w);
        else {
            let b = new URL(t.url)
              , C = b.pathname + b.search;
            throw jn(404, {
                pathname: C
            })
        }
    } catch (w) {
        return {
            type: "error",
            result: w
        }
    } finally {
        m && t.signal.removeEventListener("abort", m)
    }
    return f
}
async function Ww(t) {
    let n = t.headers.get("Content-Type");
    return n && /\bapplication\/json\b/.test(n) ? t.body == null ? null : t.json() : t.text()
}
async function Uw(t) {
    var o, l, u, c, f;
    let {result: n, type: i} = t;
    if (ld(n)) {
        let m;
        try {
            m = await Ww(n)
        } catch (y) {
            return {
                type: "error",
                error: y
            }
        }
        return i === "error" ? {
            type: "error",
            error: new ko(n.status,n.statusText,m),
            statusCode: n.status,
            headers: n.headers
        } : {
            type: "data",
            data: m,
            statusCode: n.status,
            headers: n.headers
        }
    }
    return i === "error" ? $p(n) ? n.data instanceof Error ? {
        type: "error",
        error: n.data,
        statusCode: (o = n.init) == null ? void 0 : o.status,
        headers: (l = n.init) != null && l.headers ? new Headers(n.init.headers) : void 0
    } : {
        type: "error",
        error: Gw(n),
        statusCode: vo(n) ? n.status : void 0,
        headers: (u = n.init) != null && u.headers ? new Headers(n.init.headers) : void 0
    } : {
        type: "error",
        error: n,
        statusCode: vo(n) ? n.status : void 0
    } : $p(n) ? {
        type: "data",
        data: n.data,
        statusCode: (c = n.init) == null ? void 0 : c.status,
        headers: (f = n.init) != null && f.headers ? new Headers(n.init.headers) : void 0
    } : {
        type: "data",
        data: n
    }
}
function $w(t, n, i, o, l) {
    let u = t.headers.get("Location");
    if (Le(u, "Redirects returned/thrown from loaders/actions must have a Location header"),
    !id(u)) {
        let c = o.slice(0, o.findIndex(f => f.route.id === i) + 1);
        u = Tc(new URL(n.url), c, l, u),
        t.headers.set("Location", u)
    }
    return t
}
function Bp(t, n, i, o) {
    let l = ["about:", "blob:", "chrome:", "chrome-untrusted:", "content:", "data:", "devtools:", "file:", "filesystem:", "javascript:"];
    if (id(t)) {
        let u = t
          , c = u.startsWith("//") ? new URL(n.protocol + u) : new URL(u);
        if (l.includes(c.protocol))
            throw new Error("Invalid redirect location");
        let f = Mn(c.pathname, i) != null;
        if (c.origin === n.origin && f)
            return c.pathname + c.search + c.hash
    }
    try {
        let u = o.createURL(t);
        if (l.includes(u.protocol))
            throw new Error("Invalid redirect location")
    } catch {}
    return t
}
function ls(t, n, i, o) {
    let l = t.createURL(Kg(n)).toString()
      , u = {
        signal: i
    };
    if (o && It(o.formMethod)) {
        let {formMethod: c, formEncType: f} = o;
        u.method = c.toUpperCase(),
        f === "application/json" ? (u.headers = new Headers({
            "Content-Type": f
        }),
        u.body = JSON.stringify(o.json)) : f === "text/plain" ? u.body = o.text : f === "application/x-www-form-urlencoded" && o.formData ? u.body = Pc(o.formData) : u.body = o.formData
    }
    return new Request(l,u)
}
function Pc(t) {
    let n = new URLSearchParams;
    for (let[i,o] of t.entries())
        n.append(i, typeof o == "string" ? o : o.name);
    return n
}
function Ip(t) {
    let n = new FormData;
    for (let[i,o] of t.entries())
        n.append(i, o);
    return n
}
function Hw(t, n, i, o=!1, l=!1) {
    let u = {}, c = null, f, m = !1, y = {}, v = i && mn(i[1]) ? i[1].error : void 0;
    return t.forEach(g => {
        if (!(g.route.id in n))
            return;
        let w = g.route.id
          , b = n[w];
        if (Le(!Mi(b), "Cannot handle redirect results in processLoaderData"),
        mn(b)) {
            let C = b.error;
            if (v !== void 0 && (C = v,
            v = void 0),
            c = c || {},
            l)
                c[w] = C;
            else {
                let M = ei(t, w);
                c[M.route.id] == null && (c[M.route.id] = C)
            }
            o || (u[w] = Wg),
            m || (m = !0,
            f = vo(b.error) ? b.error.status : 500),
            b.headers && (y[w] = b.headers)
        } else
            u[w] = b.data,
            b.statusCode && b.statusCode !== 200 && !m && (f = b.statusCode),
            b.headers && (y[w] = b.headers)
    }
    ),
    v !== void 0 && i && (c = {
        [i[0]]: v
    },
    i[2] && (u[i[2]] = void 0)),
    {
        loaderData: u,
        errors: c,
        statusCode: f || 200,
        loaderHeaders: y
    }
}
function Fp(t, n, i, o, l, u) {
    let {loaderData: c, errors: f} = Hw(n, i, o);
    return l.filter(m => !m.matches || m.matches.some(y => y.shouldLoad)).forEach(m => {
        let {key: y, match: v, controller: g} = m;
        if (g && g.signal.aborted)
            return;
        let w = u[y];
        if (Le(w, "Did not find corresponding fetcher result"),
        mn(w)) {
            let b = ei(t.matches, v == null ? void 0 : v.route.id);
            f && f[b.route.id] || (f = {
                ...f,
                [b.route.id]: w.error
            }),
            t.fetchers.delete(y)
        } else if (Mi(w))
            Le(!1, "Unhandled fetcher revalidation redirect");
        else {
            let b = jr(w.data);
            t.fetchers.set(y, b)
        }
    }
    ),
    {
        loaderData: c,
        errors: f
    }
}
function Wp(t, n, i, o) {
    let l = Object.entries(n).filter( ([,u]) => u !== Wg).reduce( (u, [c,f]) => (u[c] = f,
    u), {});
    for (let u of i) {
        let c = u.route.id;
        if (!n.hasOwnProperty(c) && t.hasOwnProperty(c) && u.route.loader && (l[c] = t[c]),
        o && o.hasOwnProperty(c))
            break
    }
    return l
}
function Up(t) {
    return t ? mn(t[1]) ? {
        actionData: {}
    } : {
        actionData: {
            [t[0]]: t[1].data
        }
    } : {}
}
function ei(t, n) {
    return (n ? t.slice(0, t.findIndex(o => o.route.id === n) + 1) : [...t]).reverse().find(o => o.route.hasErrorBoundary === !0) || t[0]
}
function _a(t) {
    let n = t.length === 1 ? t[0] : t.find(i => i.index || !i.path || i.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: n
        }],
        route: n
    }
}
function jn(t, {pathname: n, routeId: i, method: o, type: l, message: u}={}) {
    let c = "Unknown Server Error"
      , f = "Unknown @remix-run/router error";
    return t === 400 ? (c = "Bad Request",
    o && n && i ? f = `You made a ${o} request to "${n}" but did not provide a \`loader\` for route "${i}", so there is no way to handle the request.` : l === "invalid-body" && (f = "Unable to encode submission body")) : t === 403 ? (c = "Forbidden",
    f = `Route "${i}" does not match URL "${n}"`) : t === 404 ? (c = "Not Found",
    f = `No route matches URL "${n}"`) : t === 405 && (c = "Method Not Allowed",
    o && n && i ? f = `You made a ${o.toUpperCase()} request to "${n}" but did not provide an \`action\` for route "${i}", so there is no way to handle the request.` : o && (f = `Invalid request method "${o.toUpperCase()}"`)),
    new ko(t || 500,c,new Error(f),!0)
}
function La(t) {
    let n = Object.entries(t);
    for (let i = n.length - 1; i >= 0; i--) {
        let[o,l] = n[i];
        if (Mi(l))
            return {
                key: o,
                result: l
            }
    }
}
function Kg(t) {
    let n = typeof t == "string" ? si(t) : t;
    return lr({
        ...n,
        hash: ""
    })
}
function Yw(t, n) {
    return t.pathname !== n.pathname || t.search !== n.search ? !1 : t.hash === "" ? n.hash !== "" : t.hash === n.hash ? !0 : n.hash !== ""
}
function Gw(t) {
    var n, i;
    return new ko(((n = t.init) == null ? void 0 : n.status) ?? 500,((i = t.init) == null ? void 0 : i.statusText) ?? "Internal Server Error",t.data)
}
function Kw(t) {
    return t != null && typeof t == "object" && Object.entries(t).every( ([n,i]) => typeof n == "string" && Jw(i))
}
function Jw(t) {
    return t != null && typeof t == "object" && "type"in t && "result"in t && (t.type === "data" || t.type === "error")
}
function Xw(t) {
    return ld(t.result) && Ig.has(t.result.status)
}
function mn(t) {
    return t.type === "error"
}
function Mi(t) {
    return (t && t.type) === "redirect"
}
function $p(t) {
    return typeof t == "object" && t != null && "type"in t && "data"in t && "init"in t && t.type === "DataWithResponseInit"
}
function ld(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.headers == "object" && typeof t.body < "u"
}
function Qw(t) {
    return Ig.has(t)
}
function qw(t) {
    return ld(t) && Qw(t.status) && t.headers.has("Location")
}
function Zw(t) {
    return Rw.has(t.toUpperCase())
}
function It(t) {
    return jw.has(t.toUpperCase())
}
function ud(t) {
    return new URLSearchParams(t).getAll("index").some(n => n === "")
}
function $a(t, n) {
    let i = typeof n == "string" ? si(n).search : n.search;
    if (t[t.length - 1].route.index && ud(i || ""))
        return t[t.length - 1];
    let o = Lg(t);
    return o[o.length - 1]
}
function Hp(t) {
    let {formMethod: n, formAction: i, formEncType: o, text: l, formData: u, json: c} = t;
    if (!(!n || !i || !o)) {
        if (l != null)
            return {
                formMethod: n,
                formAction: i,
                formEncType: o,
                formData: void 0,
                json: void 0,
                text: l
            };
        if (u != null)
            return {
                formMethod: n,
                formAction: i,
                formEncType: o,
                formData: u,
                json: void 0,
                text: void 0
            };
        if (c !== void 0)
            return {
                formMethod: n,
                formAction: i,
                formEncType: o,
                formData: void 0,
                json: c,
                text: void 0
            }
    }
}
function ac(t, n) {
    return n ? {
        state: "loading",
        location: t,
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text
    } : {
        state: "loading",
        location: t,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}
function e1(t, n) {
    return {
        state: "submitting",
        location: t,
        formMethod: n.formMethod,
        formAction: n.formAction,
        formEncType: n.formEncType,
        formData: n.formData,
        json: n.json,
        text: n.text
    }
}
function to(t, n) {
    return t ? {
        state: "loading",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: n
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: n
    }
}
function t1(t, n) {
    return {
        state: "submitting",
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
        data: n ? n.data : void 0
    }
}
function jr(t) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}
function n1(t, n) {
    try {
        let i = t.sessionStorage.getItem(Fg);
        if (i) {
            let o = JSON.parse(i);
            for (let[l,u] of Object.entries(o || {}))
                u && Array.isArray(u) && n.set(l, new Set(u || []))
        }
    } catch {}
}
function r1(t, n) {
    if (n.size > 0) {
        let i = {};
        for (let[o,l] of n)
            i[o] = [...l];
        try {
            t.sessionStorage.setItem(Fg, JSON.stringify(i))
        } catch (o) {
            vt(!1, `Failed to save applied view transitions in sessionStorage (${o}).`)
        }
    }
}
function Yp() {
    let t, n, i = new Promise( (o, l) => {
        t = async u => {
            o(u);
            try {
                await i
            } catch {}
        }
        ,
        n = async u => {
            l(u);
            try {
                await i
            } catch {}
        }
    }
    );
    return {
        promise: i,
        resolve: t,
        reject: n
    }
}
var zi = E.createContext(null);
zi.displayName = "DataRouter";
var Eo = E.createContext(null);
Eo.displayName = "DataRouterState";
var Jg = E.createContext(!1);
function i1() {
    return E.useContext(Jg)
}
var cd = E.createContext({
    isTransitioning: !1
});
cd.displayName = "ViewTransition";
var Xg = E.createContext(new Map);
Xg.displayName = "Fetchers";
var s1 = E.createContext(null);
s1.displayName = "Await";
var Pn = E.createContext(null);
Pn.displayName = "Navigation";
var hl = E.createContext(null);
hl.displayName = "Location";
var cr = E.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
cr.displayName = "Route";
var dd = E.createContext(null);
dd.displayName = "RouteError";
var Qg = "REACT_ROUTER_ERROR"
  , o1 = "REDIRECT"
  , a1 = "ROUTE_ERROR_RESPONSE";
function l1(t) {
    if (t.startsWith(`${Qg}:${o1}:{`))
        try {
            let n = JSON.parse(t.slice(28));
            if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.location == "string" && typeof n.reloadDocument == "boolean" && typeof n.replace == "boolean")
                return n
        } catch {}
}
function u1(t) {
    if (t.startsWith(`${Qg}:${a1}:{`))
        try {
            let n = JSON.parse(t.slice(40));
            if (typeof n == "object" && n && typeof n.status == "number" && typeof n.statusText == "string")
                return new ko(n.status,n.statusText,n.data)
        } catch {}
}
function c1(t, {relative: n}={}) {
    Le(No(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: i, navigator: o} = E.useContext(Pn)
      , {hash: l, pathname: u, search: c} = jo(t, {
        relative: n
    })
      , f = u;
    return i !== "/" && (f = u === "/" ? i : or([i, u])),
    o.createHref({
        pathname: f,
        search: c,
        hash: l
    })
}
function No() {
    return E.useContext(hl) != null
}
function oi() {
    return Le(No(), "useLocation() may be used only in the context of a <Router> component."),
    E.useContext(hl).location
}
var qg = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Zg(t) {
    E.useContext(Pn).static || E.useLayoutEffect(t)
}
function d1() {
    let {isDataRoute: t} = E.useContext(cr);
    return t ? N1() : f1()
}
function f1() {
    Le(No(), "useNavigate() may be used only in the context of a <Router> component.");
    let t = E.useContext(zi)
      , {basename: n, navigator: i} = E.useContext(Pn)
      , {matches: o} = E.useContext(cr)
      , {pathname: l} = oi()
      , u = JSON.stringify(sd(o))
      , c = E.useRef(!1);
    return Zg( () => {
        c.current = !0
    }
    ),
    E.useCallback( (m, y={}) => {
        if (vt(c.current, qg),
        !c.current)
            return;
        if (typeof m == "number") {
            i.go(m);
            return
        }
        let v = od(m, JSON.parse(u), l, y.relative === "path");
        t == null && n !== "/" && (v.pathname = v.pathname === "/" ? n : or([n, v.pathname])),
        (y.replace ? i.replace : i.push)(v, y.state, y)
    }
    , [n, i, u, l, t])
}
var h1 = E.createContext(null);
function p1(t) {
    let n = E.useContext(cr).outlet;
    return E.useMemo( () => n && E.createElement(h1.Provider, {
        value: t
    }, n), [n, t])
}
function jo(t, {relative: n}={}) {
    let {matches: i} = E.useContext(cr)
      , {pathname: o} = oi()
      , l = JSON.stringify(sd(i));
    return E.useMemo( () => od(t, JSON.parse(l), o, n === "path"), [t, l, o, n])
}
function m1(t, n, i, o, l) {
    Le(No(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: u} = E.useContext(Pn)
      , {matches: c} = E.useContext(cr)
      , f = c[c.length - 1]
      , m = f ? f.params : {}
      , y = f ? f.pathname : "/"
      , v = f ? f.pathnameBase : "/"
      , g = f && f.route;
    {
        let L = g && g.path || "";
        t0(y, !g || L.endsWith("*") || L.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L === "/" ? "*" : `${L}/*`}">.`)
    }
    let w = oi(), b;
    b = w;
    let C = b.pathname || "/"
      , M = C;
    if (v !== "/") {
        let L = v.replace(/^\//, "").split("/");
        M = "/" + C.replace(/^\//, "").split("/").slice(L.length).join("/")
    }
    let N = Zr(t, {
        pathname: M
    });
    return vt(g || N != null, `No routes matched location "${b.pathname}${b.search}${b.hash}" `),
    vt(N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0, `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),
    w1(N && N.map(L => Object.assign({}, L, {
        params: Object.assign({}, m, L.params),
        pathname: or([v, u.encodeLocation ? u.encodeLocation(L.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : L.pathname]),
        pathnameBase: L.pathnameBase === "/" ? v : or([v, u.encodeLocation ? u.encodeLocation(L.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : L.pathnameBase])
    })), c, i, o, l)
}
function g1() {
    let t = E1()
      , n = vo(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t)
      , i = t instanceof Error ? t.stack : null
      , o = "rgba(200,200,200, 0.5)"
      , l = {
        padding: "0.5rem",
        backgroundColor: o
    }
      , u = {
        padding: "2px 4px",
        backgroundColor: o
    }
      , c = null;
    return console.error("Error handled by React Router default ErrorBoundary:", t),
    c = E.createElement(E.Fragment, null, E.createElement("p", null, "💿 Hey developer 👋"), E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", E.createElement("code", {
        style: u
    }, "ErrorBoundary"), " or", " ", E.createElement("code", {
        style: u
    }, "errorElement"), " prop on your route.")),
    E.createElement(E.Fragment, null, E.createElement("h2", null, "Unexpected Application Error!"), E.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, n), i ? E.createElement("pre", {
        style: l
    }, i) : null, c)
}
var y1 = E.createElement(g1, null)
  , e0 = class extends E.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        this.props.onError ? this.props.onError(t, n) : console.error("React Router caught the following error during render", t)
    }
    render() {
        let t = this.state.error;
        if (this.context && typeof t == "object" && t && "digest"in t && typeof t.digest == "string") {
            const i = u1(t.digest);
            i && (t = i)
        }
        let n = t !== void 0 ? E.createElement(cr.Provider, {
            value: this.props.routeContext
        }, E.createElement(dd.Provider, {
            value: t,
            children: this.props.component
        })) : this.props.children;
        return this.context ? E.createElement(v1, {
            error: t
        }, n) : n
    }
}
;
e0.contextType = Jg;
var lc = new WeakMap;
function v1({children: t, error: n}) {
    let {basename: i} = E.useContext(Pn);
    if (typeof n == "object" && n && "digest"in n && typeof n.digest == "string") {
        let o = l1(n.digest);
        if (o) {
            let l = lc.get(n);
            if (l)
                throw l;
            let u = Vg(o.location, i);
            if (zg && !lc.get(n))
                if (u.isExternal || o.reloadDocument)
                    window.location.href = u.absoluteURL || u.to;
                else {
                    const c = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(u.to, {
                        replace: o.replace
                    }));
                    throw lc.set(n, c),
                    c
                }
            return E.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${u.absoluteURL || u.to}`
            })
        }
    }
    return t
}
function x1({routeContext: t, match: n, children: i}) {
    let o = E.useContext(zi);
    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    E.createElement(cr.Provider, {
        value: t
    }, i)
}
function w1(t, n=[], i=null, o=null, l=null) {
    if (t == null) {
        if (!i)
            return null;
        if (i.errors)
            t = i.matches;
        else if (n.length === 0 && !i.initialized && i.matches.length > 0)
            t = i.matches;
        else
            return null
    }
    let u = t
      , c = i == null ? void 0 : i.errors;
    if (c != null) {
        let v = u.findIndex(g => g.route.id && (c == null ? void 0 : c[g.route.id]) !== void 0);
        Le(v >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),
        u = u.slice(0, Math.min(u.length, v + 1))
    }
    let f = !1
      , m = -1;
    if (i)
        for (let v = 0; v < u.length; v++) {
            let g = u[v];
            if ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (m = v),
            g.route.id) {
                let {loaderData: w, errors: b} = i
                  , C = g.route.loader && !w.hasOwnProperty(g.route.id) && (!b || b[g.route.id] === void 0);
                if (g.route.lazy || C) {
                    f = !0,
                    m >= 0 ? u = u.slice(0, m + 1) : u = [u[0]];
                    break
                }
            }
        }
    let y = i && o ? (v, g) => {
        var w, b;
        o(v, {
            location: i.location,
            params: ((b = (w = i.matches) == null ? void 0 : w[0]) == null ? void 0 : b.params) ?? {},
            unstable_pattern: Co(i.matches),
            errorInfo: g
        })
    }
    : void 0;
    return u.reduceRight( (v, g, w) => {
        let b, C = !1, M = null, N = null;
        i && (b = c && g.route.id ? c[g.route.id] : void 0,
        M = g.route.errorElement || y1,
        f && (m < 0 && w === 0 ? (t0("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        C = !0,
        N = null) : m === w && (C = !0,
        N = g.route.hydrateFallbackElement || null)));
        let A = n.concat(u.slice(0, w + 1))
          , L = () => {
            let B;
            return b ? B = M : C ? B = N : g.route.Component ? B = E.createElement(g.route.Component, null) : g.route.element ? B = g.route.element : B = v,
            E.createElement(x1, {
                match: g,
                routeContext: {
                    outlet: v,
                    matches: A,
                    isDataRoute: i != null
                },
                children: B
            })
        }
        ;
        return i && (g.route.ErrorBoundary || g.route.errorElement || w === 0) ? E.createElement(e0, {
            location: i.location,
            revalidation: i.revalidation,
            component: M,
            error: b,
            children: L(),
            routeContext: {
                outlet: null,
                matches: A,
                isDataRoute: !0
            },
            onError: y
        }) : L()
    }
    , null)
}
function fd(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function b1(t) {
    let n = E.useContext(zi);
    return Le(n, fd(t)),
    n
}
function S1(t) {
    let n = E.useContext(Eo);
    return Le(n, fd(t)),
    n
}
function k1(t) {
    let n = E.useContext(cr);
    return Le(n, fd(t)),
    n
}
function hd(t) {
    let n = k1(t)
      , i = n.matches[n.matches.length - 1];
    return Le(i.route.id, `${t} can only be used on routes that contain a unique "id"`),
    i.route.id
}
function C1() {
    return hd("useRouteId")
}
function E1() {
    var o;
    let t = E.useContext(dd)
      , n = S1("useRouteError")
      , i = hd("useRouteError");
    return t !== void 0 ? t : (o = n.errors) == null ? void 0 : o[i]
}
function N1() {
    let {router: t} = b1("useNavigate")
      , n = hd("useNavigate")
      , i = E.useRef(!1);
    return Zg( () => {
        i.current = !0
    }
    ),
    E.useCallback(async (l, u={}) => {
        vt(i.current, qg),
        i.current && (typeof l == "number" ? await t.navigate(l) : await t.navigate(l, {
            fromRouteId: n,
            ...u
        }))
    }
    , [t, n])
}
var Gp = {};
function t0(t, n, i) {
    !n && !Gp[t] && (Gp[t] = !0,
    vt(!1, i))
}
var Kp = {};
function Jp(t, n) {
    !t && !Kp[n] && (Kp[n] = !0,
    console.warn(n))
}
var j1 = "useOptimistic"
  , Xp = Yx[j1]
  , T1 = () => {}
;
function R1(t) {
    return Xp ? Xp(t) : [t, T1]
}
function M1(t) {
    let n = {
        hasErrorBoundary: t.hasErrorBoundary || t.ErrorBoundary != null || t.errorElement != null
    };
    return t.Component && (t.element && vt(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."),
    Object.assign(n, {
        element: E.createElement(t.Component),
        Component: void 0
    })),
    t.HydrateFallback && (t.hydrateFallbackElement && vt(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),
    Object.assign(n, {
        hydrateFallbackElement: E.createElement(t.HydrateFallback),
        HydrateFallback: void 0
    })),
    t.ErrorBoundary && (t.errorElement && vt(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),
    Object.assign(n, {
        errorElement: E.createElement(t.ErrorBoundary),
        ErrorBoundary: void 0
    })),
    n
}
var P1 = ["HydrateFallback", "hydrateFallbackElement"]
  , D1 = class {
    constructor() {
        this.status = "pending",
        this.promise = new Promise( (t, n) => {
            this.resolve = i => {
                this.status === "pending" && (this.status = "resolved",
                t(i))
            }
            ,
            this.reject = i => {
                this.status === "pending" && (this.status = "rejected",
                n(i))
            }
        }
        )
    }
}
;
function A1({router: t, flushSync: n, onError: i, unstable_useTransitions: o}) {
    o = i1() || o;
    let[u,c] = E.useState(t.state)
      , [f,m] = R1(u)
      , [y,v] = E.useState()
      , [g,w] = E.useState({
        isTransitioning: !1
    })
      , [b,C] = E.useState()
      , [M,N] = E.useState()
      , [A,L] = E.useState()
      , B = E.useRef(new Map)
      , W = E.useCallback( (H, {deletedFetchers: te, newErrors: X, flushSync: ae, viewTransitionOpts: ke}) => {
        X && i && Object.values(X).forEach(je => {
            var Re;
            return i(je, {
                location: H.location,
                params: ((Re = H.matches[0]) == null ? void 0 : Re.params) ?? {},
                unstable_pattern: Co(H.matches)
            })
        }
        ),
        H.fetchers.forEach( (je, Re) => {
            je.data !== void 0 && B.current.set(Re, je.data)
        }
        ),
        te.forEach(je => B.current.delete(je)),
        Jp(ae === !1 || n != null, 'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');
        let Ae = t.window != null && t.window.document != null && typeof t.window.document.startViewTransition == "function";
        if (Jp(ke == null || Ae, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),
        !ke || !Ae) {
            n && ae ? n( () => c(H)) : o === !1 ? c(H) : E.startTransition( () => {
                o === !0 && m(je => Qp(je, H)),
                c(H)
            }
            );
            return
        }
        if (n && ae) {
            n( () => {
                M && (b == null || b.resolve(),
                M.skipTransition()),
                w({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: ke.currentLocation,
                    nextLocation: ke.nextLocation
                })
            }
            );
            let je = t.window.document.startViewTransition( () => {
                n( () => c(H))
            }
            );
            je.finished.finally( () => {
                n( () => {
                    C(void 0),
                    N(void 0),
                    v(void 0),
                    w({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            n( () => N(je));
            return
        }
        M ? (b == null || b.resolve(),
        M.skipTransition(),
        L({
            state: H,
            currentLocation: ke.currentLocation,
            nextLocation: ke.nextLocation
        })) : (v(H),
        w({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: ke.currentLocation,
            nextLocation: ke.nextLocation
        }))
    }
    , [t.window, n, M, b, o, m, i]);
    E.useLayoutEffect( () => t.subscribe(W), [t, W]),
    E.useEffect( () => {
        g.isTransitioning && !g.flushSync && C(new D1)
    }
    , [g]),
    E.useEffect( () => {
        if (b && y && t.window) {
            let H = y
              , te = b.promise
              , X = t.window.document.startViewTransition(async () => {
                o === !1 ? c(H) : E.startTransition( () => {
                    o === !0 && m(ae => Qp(ae, H)),
                    c(H)
                }
                ),
                await te
            }
            );
            X.finished.finally( () => {
                C(void 0),
                N(void 0),
                v(void 0),
                w({
                    isTransitioning: !1
                })
            }
            ),
            N(X)
        }
    }
    , [y, b, t.window, o, m]),
    E.useEffect( () => {
        b && y && f.location.key === y.location.key && b.resolve()
    }
    , [b, M, f.location, y]),
    E.useEffect( () => {
        !g.isTransitioning && A && (v(A.state),
        w({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: A.currentLocation,
            nextLocation: A.nextLocation
        }),
        L(void 0))
    }
    , [g.isTransitioning, A]);
    let U = E.useMemo( () => ({
        createHref: t.createHref,
        encodeLocation: t.encodeLocation,
        go: H => t.navigate(H),
        push: (H, te, X) => t.navigate(H, {
            state: te,
            preventScrollReset: X == null ? void 0 : X.preventScrollReset
        }),
        replace: (H, te, X) => t.navigate(H, {
            replace: !0,
            state: te,
            preventScrollReset: X == null ? void 0 : X.preventScrollReset
        })
    }), [t])
      , se = t.basename || "/"
      , D = E.useMemo( () => ({
        router: t,
        navigator: U,
        static: !1,
        basename: se,
        onError: i
    }), [t, U, se, i]);
    return E.createElement(E.Fragment, null, E.createElement(zi.Provider, {
        value: D
    }, E.createElement(Eo.Provider, {
        value: f
    }, E.createElement(Xg.Provider, {
        value: B.current
    }, E.createElement(cd.Provider, {
        value: g
    }, E.createElement(V1, {
        basename: se,
        location: f.location,
        navigationType: f.historyAction,
        navigator: U,
        unstable_useTransitions: o
    }, E.createElement(_1, {
        routes: t.routes,
        future: t.future,
        state: f,
        onError: i
    })))))), null)
}
function Qp(t, n) {
    return {
        ...t,
        navigation: n.navigation.state !== "idle" ? n.navigation : t.navigation,
        revalidation: n.revalidation !== "idle" ? n.revalidation : t.revalidation,
        actionData: n.navigation.state !== "submitting" ? n.actionData : t.actionData,
        fetchers: n.fetchers
    }
}
var _1 = E.memo(L1);
function L1({routes: t, future: n, state: i, onError: o}) {
    return m1(t, void 0, i, o, n)
}
function z1(t) {
    return p1(t.context)
}
function V1({basename: t="/", children: n=null, location: i, navigationType: o="POP", navigator: l, static: u=!1, unstable_useTransitions: c}) {
    Le(!No(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let f = t.replace(/^\/*/, "/")
      , m = E.useMemo( () => ({
        basename: f,
        navigator: l,
        static: u,
        unstable_useTransitions: c,
        future: {}
    }), [f, l, u, c]);
    typeof i == "string" && (i = si(i));
    let {pathname: y="/", search: v="", hash: g="", state: w=null, key: b="default"} = i
      , C = E.useMemo( () => {
        let M = Mn(y, f);
        return M == null ? null : {
            location: {
                pathname: M,
                search: v,
                hash: g,
                state: w,
                key: b
            },
            navigationType: o
        }
    }
    , [f, y, v, g, w, b, o]);
    return vt(C != null, `<Router basename="${f}"> is not able to match the URL "${y}${v}${g}" because it does not start with the basename, so the <Router> won't render anything.`),
    C == null ? null : E.createElement(Pn.Provider, {
        value: m
    }, E.createElement(hl.Provider, {
        children: n,
        value: C
    }))
}
var Ha = "get"
  , Ya = "application/x-www-form-urlencoded";
function pl(t) {
    return typeof HTMLElement < "u" && t instanceof HTMLElement
}
function O1(t) {
    return pl(t) && t.tagName.toLowerCase() === "button"
}
function B1(t) {
    return pl(t) && t.tagName.toLowerCase() === "form"
}
function I1(t) {
    return pl(t) && t.tagName.toLowerCase() === "input"
}
function F1(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function W1(t, n) {
    return t.button === 0 && (!n || n === "_self") && !F1(t)
}
var za = null;
function U1() {
    if (za === null)
        try {
            new FormData(document.createElement("form"),0),
            za = !1
        } catch {
            za = !0
        }
    return za
}
var $1 = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function uc(t) {
    return t != null && !$1.has(t) ? (vt(!1, `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ya}"`),
    null) : t
}
function H1(t, n) {
    let i, o, l, u, c;
    if (B1(t)) {
        let f = t.getAttribute("action");
        o = f ? Mn(f, n) : null,
        i = t.getAttribute("method") || Ha,
        l = uc(t.getAttribute("enctype")) || Ya,
        u = new FormData(t)
    } else if (O1(t) || I1(t) && (t.type === "submit" || t.type === "image")) {
        let f = t.form;
        if (f == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let m = t.getAttribute("formaction") || f.getAttribute("action");
        if (o = m ? Mn(m, n) : null,
        i = t.getAttribute("formmethod") || f.getAttribute("method") || Ha,
        l = uc(t.getAttribute("formenctype")) || uc(f.getAttribute("enctype")) || Ya,
        u = new FormData(f,t),
        !U1()) {
            let {name: y, type: v, value: g} = t;
            if (v === "image") {
                let w = y ? `${y}.` : "";
                u.append(`${w}x`, "0"),
                u.append(`${w}y`, "0")
            } else
                y && u.append(y, g)
        }
    } else {
        if (pl(t))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        i = Ha,
        o = null,
        l = Ya,
        c = t
    }
    return u && l === "text/plain" && (c = u,
    u = void 0),
    {
        action: o,
        method: i.toLowerCase(),
        encType: l,
        formData: u,
        body: c
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function pd(t, n) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(n)
}
function Y1(t, n, i, o) {
    let l = typeof t == "string" ? new URL(t,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : t;
    return i ? l.pathname.endsWith("/") ? l.pathname = `${l.pathname}_.${o}` : l.pathname = `${l.pathname}.${o}` : l.pathname === "/" ? l.pathname = `_root.${o}` : n && Mn(l.pathname, n) === "/" ? l.pathname = `${n.replace(/\/$/, "")}/_root.${o}` : l.pathname = `${l.pathname.replace(/\/$/, "")}.${o}`,
    l
}
async function G1(t, n) {
    if (t.id in n)
        return n[t.id];
    try {
        let i = await import(t.module);
        return n[t.id] = i,
        i
    } catch (i) {
        return console.error(`Error loading route module \`${t.module}\`, reloading page...`),
        console.error(i),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function K1(t) {
    return t == null ? !1 : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string"
}
async function J1(t, n, i) {
    let o = await Promise.all(t.map(async l => {
        let u = n.routes[l.route.id];
        if (u) {
            let c = await G1(u, i);
            return c.links ? c.links() : []
        }
        return []
    }
    ));
    return Z1(o.flat(1).filter(K1).filter(l => l.rel === "stylesheet" || l.rel === "preload").map(l => l.rel === "stylesheet" ? {
        ...l,
        rel: "prefetch",
        as: "style"
    } : {
        ...l,
        rel: "prefetch"
    }))
}
function qp(t, n, i, o, l, u) {
    let c = (m, y) => i[y] ? m.route.id !== i[y].route.id : !0
      , f = (m, y) => {
        var v;
        return i[y].pathname !== m.pathname || ((v = i[y].route.path) == null ? void 0 : v.endsWith("*")) && i[y].params["*"] !== m.params["*"]
    }
    ;
    return u === "assets" ? n.filter( (m, y) => c(m, y) || f(m, y)) : u === "data" ? n.filter( (m, y) => {
        var g;
        let v = o.routes[m.route.id];
        if (!v || !v.hasLoader)
            return !1;
        if (c(m, y) || f(m, y))
            return !0;
        if (m.route.shouldRevalidate) {
            let w = m.route.shouldRevalidate({
                currentUrl: new URL(l.pathname + l.search + l.hash,window.origin),
                currentParams: ((g = i[0]) == null ? void 0 : g.params) || {},
                nextUrl: new URL(t,window.origin),
                nextParams: m.params,
                defaultShouldRevalidate: !0
            });
            if (typeof w == "boolean")
                return w
        }
        return !0
    }
    ) : []
}
function X1(t, n, {includeHydrateFallback: i}={}) {
    return Q1(t.map(o => {
        let l = n.routes[o.route.id];
        if (!l)
            return [];
        let u = [l.module];
        return l.clientActionModule && (u = u.concat(l.clientActionModule)),
        l.clientLoaderModule && (u = u.concat(l.clientLoaderModule)),
        i && l.hydrateFallbackModule && (u = u.concat(l.hydrateFallbackModule)),
        l.imports && (u = u.concat(l.imports)),
        u
    }
    ).flat(1))
}
function Q1(t) {
    return [...new Set(t)]
}
function q1(t) {
    let n = {}
      , i = Object.keys(t).sort();
    for (let o of i)
        n[o] = t[o];
    return n
}
function Z1(t, n) {
    let i = new Set;
    return new Set(n),
    t.reduce( (o, l) => {
        let u = JSON.stringify(q1(l));
        return i.has(u) || (i.add(u),
        o.push({
            key: u,
            link: l
        })),
        o
    }
    , [])
}
function n0() {
    let t = E.useContext(zi);
    return pd(t, "You must render this element inside a <DataRouterContext.Provider> element"),
    t
}
function eb() {
    let t = E.useContext(Eo);
    return pd(t, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    t
}
var md = E.createContext(void 0);
md.displayName = "FrameworkContext";
function r0() {
    let t = E.useContext(md);
    return pd(t, "You must render this element inside a <HydratedRouter> element"),
    t
}
function tb(t, n) {
    let i = E.useContext(md)
      , [o,l] = E.useState(!1)
      , [u,c] = E.useState(!1)
      , {onFocus: f, onBlur: m, onMouseEnter: y, onMouseLeave: v, onTouchStart: g} = n
      , w = E.useRef(null);
    E.useEffect( () => {
        if (t === "render" && c(!0),
        t === "viewport") {
            let M = A => {
                A.forEach(L => {
                    c(L.isIntersecting)
                }
                )
            }
              , N = new IntersectionObserver(M,{
                threshold: .5
            });
            return w.current && N.observe(w.current),
            () => {
                N.disconnect()
            }
        }
    }
    , [t]),
    E.useEffect( () => {
        if (o) {
            let M = setTimeout( () => {
                c(!0)
            }
            , 100);
            return () => {
                clearTimeout(M)
            }
        }
    }
    , [o]);
    let b = () => {
        l(!0)
    }
      , C = () => {
        l(!1),
        c(!1)
    }
    ;
    return i ? t !== "intent" ? [u, w, {}] : [u, w, {
        onFocus: no(f, b),
        onBlur: no(m, C),
        onMouseEnter: no(y, b),
        onMouseLeave: no(v, C),
        onTouchStart: no(g, b)
    }] : [!1, w, {}]
}
function no(t, n) {
    return i => {
        t && t(i),
        i.defaultPrevented || n(i)
    }
}
function nb({page: t, ...n}) {
    let {router: i} = n0()
      , o = E.useMemo( () => Zr(i.routes, t, i.basename), [i.routes, t, i.basename]);
    return o ? E.createElement(ib, {
        page: t,
        matches: o,
        ...n
    }) : null
}
function rb(t) {
    let {manifest: n, routeModules: i} = r0()
      , [o,l] = E.useState([]);
    return E.useEffect( () => {
        let u = !1;
        return J1(t, n, i).then(c => {
            u || l(c)
        }
        ),
        () => {
            u = !0
        }
    }
    , [t, n, i]),
    o
}
function ib({page: t, matches: n, ...i}) {
    let o = oi()
      , {future: l, manifest: u, routeModules: c} = r0()
      , {basename: f} = n0()
      , {loaderData: m, matches: y} = eb()
      , v = E.useMemo( () => qp(t, n, y, u, o, "data"), [t, n, y, u, o])
      , g = E.useMemo( () => qp(t, n, y, u, o, "assets"), [t, n, y, u, o])
      , w = E.useMemo( () => {
        if (t === o.pathname + o.search + o.hash)
            return [];
        let M = new Set
          , N = !1;
        if (n.forEach(L => {
            var W;
            let B = u.routes[L.route.id];
            !B || !B.hasLoader || (!v.some(U => U.route.id === L.route.id) && L.route.id in m && ((W = c[L.route.id]) != null && W.shouldRevalidate) || B.hasClientLoader ? N = !0 : M.add(L.route.id))
        }
        ),
        M.size === 0)
            return [];
        let A = Y1(t, f, l.unstable_trailingSlashAwareDataRequests, "data");
        return N && M.size > 0 && A.searchParams.set("_routes", n.filter(L => M.has(L.route.id)).map(L => L.route.id).join(",")),
        [A.pathname + A.search]
    }
    , [f, l.unstable_trailingSlashAwareDataRequests, m, o, u, v, n, t, c])
      , b = E.useMemo( () => X1(g, u), [g, u])
      , C = rb(g);
    return E.createElement(E.Fragment, null, w.map(M => E.createElement("link", {
        key: M,
        rel: "prefetch",
        as: "fetch",
        href: M,
        ...i
    })), b.map(M => E.createElement("link", {
        key: M,
        rel: "modulepreload",
        href: M,
        ...i
    })), C.map( ({key: M, link: N}) => E.createElement("link", {
        key: M,
        nonce: i.nonce,
        ...N,
        crossOrigin: N.crossOrigin ?? i.crossOrigin
    })))
}
function sb(...t) {
    return n => {
        t.forEach(i => {
            typeof i == "function" ? i(n) : i != null && (i.current = n)
        }
        )
    }
}
var ob = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    ob && (window.__reactRouterVersion = "7.13.0")
} catch {}
function ab(t, n) {
    return Aw({
        basename: n == null ? void 0 : n.basename,
        getContext: n == null ? void 0 : n.getContext,
        future: n == null ? void 0 : n.future,
        history: Jx({
            window: n == null ? void 0 : n.window
        }),
        hydrationData: lb(),
        routes: t,
        mapRouteProperties: M1,
        hydrationRouteProperties: P1,
        dataStrategy: n == null ? void 0 : n.dataStrategy,
        patchRoutesOnNavigation: n == null ? void 0 : n.patchRoutesOnNavigation,
        window: n == null ? void 0 : n.window,
        unstable_instrumentations: n == null ? void 0 : n.unstable_instrumentations
    }).initialize()
}
function lb() {
    let t = window == null ? void 0 : window.__staticRouterHydrationData;
    return t && t.errors && (t = {
        ...t,
        errors: ub(t.errors)
    }),
    t
}
function ub(t) {
    if (!t)
        return null;
    let n = Object.entries(t)
      , i = {};
    for (let[o,l] of n)
        if (l && l.__type === "RouteErrorResponse")
            i[o] = new ko(l.status,l.statusText,l.data,l.internal === !0);
        else if (l && l.__type === "Error") {
            if (l.__subType) {
                let u = window[l.__subType];
                if (typeof u == "function")
                    try {
                        let c = new u(l.message);
                        c.stack = "",
                        i[o] = c
                    } catch {}
            }
            if (i[o] == null) {
                let u = new Error(l.message);
                u.stack = "",
                i[o] = u
            }
        } else
            i[o] = l;
    return i
}
var i0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , kt = E.forwardRef(function({onClick: n, discover: i="render", prefetch: o="none", relative: l, reloadDocument: u, replace: c, state: f, target: m, to: y, preventScrollReset: v, viewTransition: g, unstable_defaultShouldRevalidate: w, ...b}, C) {
    let {basename: M, unstable_useTransitions: N} = E.useContext(Pn)
      , A = typeof y == "string" && i0.test(y)
      , L = Vg(y, M);
    y = L.to;
    let B = c1(y, {
        relative: l
    })
      , [W,U,se] = tb(o, b)
      , D = fb(y, {
        replace: c,
        state: f,
        target: m,
        preventScrollReset: v,
        relative: l,
        viewTransition: g,
        unstable_defaultShouldRevalidate: w,
        unstable_useTransitions: N
    });
    function H(X) {
        n && n(X),
        X.defaultPrevented || D(X)
    }
    let te = E.createElement("a", {
        ...b,
        ...se,
        href: L.absoluteURL || B,
        onClick: L.isExternal || u ? n : H,
        ref: sb(C, U),
        target: m,
        "data-discover": !A && i === "render" ? "true" : void 0
    });
    return W && !A ? E.createElement(E.Fragment, null, te, E.createElement(nb, {
        page: B
    })) : te
});
kt.displayName = "Link";
var lo = E.forwardRef(function({"aria-current": n="page", caseSensitive: i=!1, className: o="", end: l=!1, style: u, to: c, viewTransition: f, children: m, ...y}, v) {
    let g = jo(c, {
        relative: y.relative
    })
      , w = oi()
      , b = E.useContext(Eo)
      , {navigator: C, basename: M} = E.useContext(Pn)
      , N = b != null && yb(g) && f === !0
      , A = C.encodeLocation ? C.encodeLocation(g).pathname : g.pathname
      , L = w.pathname
      , B = b && b.navigation && b.navigation.location ? b.navigation.location.pathname : null;
    i || (L = L.toLowerCase(),
    B = B ? B.toLowerCase() : null,
    A = A.toLowerCase()),
    B && M && (B = Mn(B, M) || B);
    const W = A !== "/" && A.endsWith("/") ? A.length - 1 : A.length;
    let U = L === A || !l && L.startsWith(A) && L.charAt(W) === "/", se = B != null && (B === A || !l && B.startsWith(A) && B.charAt(A.length) === "/"), D = {
        isActive: U,
        isPending: se,
        isTransitioning: N
    }, H = U ? n : void 0, te;
    typeof o == "function" ? te = o(D) : te = [o, U ? "active" : null, se ? "pending" : null, N ? "transitioning" : null].filter(Boolean).join(" ");
    let X = typeof u == "function" ? u(D) : u;
    return E.createElement(kt, {
        ...y,
        "aria-current": H,
        className: te,
        ref: v,
        style: X,
        to: c,
        viewTransition: f
    }, typeof m == "function" ? m(D) : m)
});
lo.displayName = "NavLink";
var cb = E.forwardRef( ({discover: t="render", fetcherKey: n, navigate: i, reloadDocument: o, replace: l, state: u, method: c=Ha, action: f, onSubmit: m, relative: y, preventScrollReset: v, viewTransition: g, unstable_defaultShouldRevalidate: w, ...b}, C) => {
    let {unstable_useTransitions: M} = E.useContext(Pn)
      , N = mb()
      , A = gb(f, {
        relative: y
    })
      , L = c.toLowerCase() === "get" ? "get" : "post"
      , B = typeof f == "string" && i0.test(f)
      , W = U => {
        if (m && m(U),
        U.defaultPrevented)
            return;
        U.preventDefault();
        let se = U.nativeEvent.submitter
          , D = (se == null ? void 0 : se.getAttribute("formmethod")) || c
          , H = () => N(se || U.currentTarget, {
            fetcherKey: n,
            method: D,
            navigate: i,
            replace: l,
            state: u,
            relative: y,
            preventScrollReset: v,
            viewTransition: g,
            unstable_defaultShouldRevalidate: w
        });
        M && i !== !1 ? E.startTransition( () => H()) : H()
    }
    ;
    return E.createElement("form", {
        ref: C,
        method: L,
        action: A,
        onSubmit: o ? m : W,
        ...b,
        "data-discover": !B && t === "render" ? "true" : void 0
    })
}
);
cb.displayName = "Form";
function db(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function s0(t) {
    let n = E.useContext(zi);
    return Le(n, db(t)),
    n
}
function fb(t, {target: n, replace: i, state: o, preventScrollReset: l, relative: u, viewTransition: c, unstable_defaultShouldRevalidate: f, unstable_useTransitions: m}={}) {
    let y = d1()
      , v = oi()
      , g = jo(t, {
        relative: u
    });
    return E.useCallback(w => {
        if (W1(w, n)) {
            w.preventDefault();
            let b = i !== void 0 ? i : lr(v) === lr(g)
              , C = () => y(t, {
                replace: b,
                state: o,
                preventScrollReset: l,
                relative: u,
                viewTransition: c,
                unstable_defaultShouldRevalidate: f
            });
            m ? E.startTransition( () => C()) : C()
        }
    }
    , [v, y, g, i, o, n, t, l, u, c, f, m])
}
var hb = 0
  , pb = () => `__${String(++hb)}__`;
function mb() {
    let {router: t} = s0("useSubmit")
      , {basename: n} = E.useContext(Pn)
      , i = C1()
      , o = t.fetch
      , l = t.navigate;
    return E.useCallback(async (u, c={}) => {
        let {action: f, method: m, encType: y, formData: v, body: g} = H1(u, n);
        if (c.navigate === !1) {
            let w = c.fetcherKey || pb();
            await o(w, i, c.action || f, {
                unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
                preventScrollReset: c.preventScrollReset,
                formData: v,
                body: g,
                formMethod: c.method || m,
                formEncType: c.encType || y,
                flushSync: c.flushSync
            })
        } else
            await l(c.action || f, {
                unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
                preventScrollReset: c.preventScrollReset,
                formData: v,
                body: g,
                formMethod: c.method || m,
                formEncType: c.encType || y,
                replace: c.replace,
                state: c.state,
                fromRouteId: i,
                flushSync: c.flushSync,
                viewTransition: c.viewTransition
            })
    }
    , [o, l, n, i])
}
function gb(t, {relative: n}={}) {
    let {basename: i} = E.useContext(Pn)
      , o = E.useContext(cr);
    Le(o, "useFormAction must be used inside a RouteContext");
    let[l] = o.matches.slice(-1)
      , u = {
        ...jo(t || ".", {
            relative: n
        })
    }
      , c = oi();
    if (t == null) {
        u.search = c.search;
        let f = new URLSearchParams(u.search)
          , m = f.getAll("index");
        if (m.some(v => v === "")) {
            f.delete("index"),
            m.filter(g => g).forEach(g => f.append("index", g));
            let v = f.toString();
            u.search = v ? `?${v}` : ""
        }
    }
    return (!t || t === ".") && l.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    i !== "/" && (u.pathname = u.pathname === "/" ? i : or([i, u.pathname])),
    lr(u)
}
function yb(t, {relative: n}={}) {
    let i = E.useContext(cd);
    Le(i != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: o} = s0("useViewTransitionState")
      , l = jo(t, {
        relative: n
    });
    if (!i.isTransitioning)
        return !1;
    let u = Mn(i.currentLocation.pathname, o) || i.currentLocation.pathname
      , c = Mn(i.nextLocation.pathname, o) || i.nextLocation.pathname;
    return tl(l.pathname, c) != null || tl(l.pathname, u) != null
}
const gd = E.createContext({});
function yd(t) {
    const n = E.useRef(null);
    return n.current === null && (n.current = t()),
    n.current
}
const vb = typeof window < "u"
  , o0 = vb ? E.useLayoutEffect : E.useEffect
  , ml = E.createContext(null);
function vd(t, n) {
    t.indexOf(n) === -1 && t.push(n)
}
function nl(t, n) {
    const i = t.indexOf(n);
    i > -1 && t.splice(i, 1)
}
const ur = (t, n, i) => i > n ? n : i < t ? t : i;
let xd = () => {}
;
const ri = {}
  , a0 = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function l0(t) {
    return typeof t == "object" && t !== null
}
const u0 = t => /^0[^.\s]+$/u.test(t);
function c0(t) {
    let n;
    return () => (n === void 0 && (n = t()),
    n)
}
const Rn = t => t
  , xb = (t, n) => i => n(t(i))
  , To = (...t) => t.reduce(xb)
  , xo = (t, n, i) => {
    const o = n - t;
    return o === 0 ? 1 : (i - t) / o
}
;
class wd {
    constructor() {
        this.subscriptions = []
    }
    add(n) {
        return vd(this.subscriptions, n),
        () => nl(this.subscriptions, n)
    }
    notify(n, i, o) {
        const l = this.subscriptions.length;
        if (l)
            if (l === 1)
                this.subscriptions[0](n, i, o);
            else
                for (let u = 0; u < l; u++) {
                    const c = this.subscriptions[u];
                    c && c(n, i, o)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const yn = t => t * 1e3
  , Tn = t => t / 1e3;
function d0(t, n) {
    return n ? t * (1e3 / n) : 0
}
const f0 = (t, n, i) => (((1 - 3 * i + 3 * n) * t + (3 * i - 6 * n)) * t + 3 * n) * t
  , wb = 1e-7
  , bb = 12;
function Sb(t, n, i, o, l) {
    let u, c, f = 0;
    do
        c = n + (i - n) / 2,
        u = f0(c, o, l) - t,
        u > 0 ? i = c : n = c;
    while (Math.abs(u) > wb && ++f < bb);
    return c
}
function Ro(t, n, i, o) {
    if (t === n && i === o)
        return Rn;
    const l = u => Sb(u, 0, 1, t, i);
    return u => u === 0 || u === 1 ? u : f0(l(u), n, o)
}
const h0 = t => n => n <= .5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2
  , p0 = t => n => 1 - t(1 - n)
  , m0 = Ro(.33, 1.53, .69, .99)
  , bd = p0(m0)
  , g0 = h0(bd)
  , y0 = t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * bd(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , Sd = t => 1 - Math.sin(Math.acos(t))
  , v0 = p0(Sd)
  , x0 = h0(Sd)
  , kb = Ro(.42, 0, 1, 1)
  , Cb = Ro(0, 0, .58, 1)
  , w0 = Ro(.42, 0, .58, 1)
  , Eb = t => Array.isArray(t) && typeof t[0] != "number"
  , b0 = t => Array.isArray(t) && typeof t[0] == "number"
  , Nb = {
    linear: Rn,
    easeIn: kb,
    easeInOut: w0,
    easeOut: Cb,
    circIn: Sd,
    circInOut: x0,
    circOut: v0,
    backIn: bd,
    backInOut: g0,
    backOut: m0,
    anticipate: y0
}
  , jb = t => typeof t == "string"
  , Zp = t => {
    if (b0(t)) {
        xd(t.length === 4);
        const [n,i,o,l] = t;
        return Ro(n, i, o, l)
    } else if (jb(t))
        return Nb[t];
    return t
}
  , Va = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Tb(t, n) {
    let i = new Set
      , o = new Set
      , l = !1
      , u = !1;
    const c = new WeakSet;
    let f = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function m(v) {
        c.has(v) && (y.schedule(v),
        t()),
        v(f)
    }
    const y = {
        schedule: (v, g=!1, w=!1) => {
            const C = w && l ? i : o;
            return g && c.add(v),
            C.add(v),
            v
        }
        ,
        cancel: v => {
            o.delete(v),
            c.delete(v)
        }
        ,
        process: v => {
            if (f = v,
            l) {
                u = !0;
                return
            }
            l = !0;
            const g = i;
            i = o,
            o = g,
            i.forEach(m),
            i.clear(),
            l = !1,
            u && (u = !1,
            y.process(v))
        }
    };
    return y
}
const Rb = 40;
function S0(t, n) {
    let i = !1
      , o = !0;
    const l = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , u = () => i = !0
      , c = Va.reduce( (B, W) => (B[W] = Tb(u),
    B), {})
      , {setup: f, read: m, resolveKeyframes: y, preUpdate: v, update: g, preRender: w, render: b, postRender: C} = c
      , M = () => {
        const B = ri.useManualTiming
          , W = B ? l.timestamp : performance.now();
        i = !1,
        B || (l.delta = o ? 1e3 / 60 : Math.max(Math.min(W - l.timestamp, Rb), 1)),
        l.timestamp = W,
        l.isProcessing = !0,
        f.process(l),
        m.process(l),
        y.process(l),
        v.process(l),
        g.process(l),
        w.process(l),
        b.process(l),
        C.process(l),
        l.isProcessing = !1,
        i && n && (o = !1,
        t(M))
    }
      , N = () => {
        i = !0,
        o = !0,
        l.isProcessing || t(M)
    }
    ;
    return {
        schedule: Va.reduce( (B, W) => {
            const U = c[W];
            return B[W] = (se, D=!1, H=!1) => (i || N(),
            U.schedule(se, D, H)),
            B
        }
        , {}),
        cancel: B => {
            for (let W = 0; W < Va.length; W++)
                c[Va[W]].cancel(B)
        }
        ,
        state: l,
        steps: c
    }
}
const {schedule: Ye, cancel: ii, state: Pt, steps: cc} = S0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Rn, !0);
let Ga;
function Mb() {
    Ga = void 0
}
const Kt = {
    now: () => (Ga === void 0 && Kt.set(Pt.isProcessing || ri.useManualTiming ? Pt.timestamp : performance.now()),
    Ga),
    set: t => {
        Ga = t,
        queueMicrotask(Mb)
    }
}
  , k0 = t => n => typeof n == "string" && n.startsWith(t)
  , C0 = k0("--")
  , Pb = k0("var(--")
  , kd = t => Pb(t) ? Db.test(t.split("/*")[0].trim()) : !1
  , Db = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function em(t) {
    return typeof t != "string" ? !1 : t.split("/*")[0].includes("var(--")
}
const ys = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , wo = {
    ...ys,
    transform: t => ur(0, 1, t)
}
  , Oa = {
    ...ys,
    default: 1
}
  , fo = t => Math.round(t * 1e5) / 1e5
  , Cd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ab(t) {
    return t == null
}
const _b = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Ed = (t, n) => i => !!(typeof i == "string" && _b.test(i) && i.startsWith(t) || n && !Ab(i) && Object.prototype.hasOwnProperty.call(i, n))
  , E0 = (t, n, i) => o => {
    if (typeof o != "string")
        return o;
    const [l,u,c,f] = o.match(Cd);
    return {
        [t]: parseFloat(l),
        [n]: parseFloat(u),
        [i]: parseFloat(c),
        alpha: f !== void 0 ? parseFloat(f) : 1
    }
}
  , Lb = t => ur(0, 255, t)
  , dc = {
    ...ys,
    transform: t => Math.round(Lb(t))
}
  , Pi = {
    test: Ed("rgb", "red"),
    parse: E0("red", "green", "blue"),
    transform: ({red: t, green: n, blue: i, alpha: o=1}) => "rgba(" + dc.transform(t) + ", " + dc.transform(n) + ", " + dc.transform(i) + ", " + fo(wo.transform(o)) + ")"
};
function zb(t) {
    let n = ""
      , i = ""
      , o = ""
      , l = "";
    return t.length > 5 ? (n = t.substring(1, 3),
    i = t.substring(3, 5),
    o = t.substring(5, 7),
    l = t.substring(7, 9)) : (n = t.substring(1, 2),
    i = t.substring(2, 3),
    o = t.substring(3, 4),
    l = t.substring(4, 5),
    n += n,
    i += i,
    o += o,
    l += l),
    {
        red: parseInt(n, 16),
        green: parseInt(i, 16),
        blue: parseInt(o, 16),
        alpha: l ? parseInt(l, 16) / 255 : 1
    }
}
const Dc = {
    test: Ed("#"),
    parse: zb,
    transform: Pi.transform
}
  , Mo = t => ({
    test: n => typeof n == "string" && n.endsWith(t) && n.split(" ").length === 1,
    parse: parseFloat,
    transform: n => `${n}${t}`
})
  , Qr = Mo("deg")
  , ar = Mo("%")
  , he = Mo("px")
  , Vb = Mo("vh")
  , Ob = Mo("vw")
  , tm = {
    ...ar,
    parse: t => ar.parse(t) / 100,
    transform: t => ar.transform(t * 100)
}
  , ds = {
    test: Ed("hsl", "hue"),
    parse: E0("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: n, lightness: i, alpha: o=1}) => "hsla(" + Math.round(t) + ", " + ar.transform(fo(n)) + ", " + ar.transform(fo(i)) + ", " + fo(wo.transform(o)) + ")"
}
  , gt = {
    test: t => Pi.test(t) || Dc.test(t) || ds.test(t),
    parse: t => Pi.test(t) ? Pi.parse(t) : ds.test(t) ? ds.parse(t) : Dc.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? Pi.transform(t) : ds.transform(t),
    getAnimatableNone: t => {
        const n = gt.parse(t);
        return n.alpha = 0,
        gt.transform(n)
    }
}
  , Bb = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Ib(t) {
    var n, i;
    return isNaN(t) && typeof t == "string" && (((n = t.match(Cd)) == null ? void 0 : n.length) || 0) + (((i = t.match(Bb)) == null ? void 0 : i.length) || 0) > 0
}
const N0 = "number"
  , j0 = "color"
  , Fb = "var"
  , Wb = "var("
  , nm = "${}"
  , Ub = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ms(t) {
    const n = t.toString()
      , i = []
      , o = {
        color: [],
        number: [],
        var: []
    }
      , l = [];
    let u = 0;
    const f = n.replace(Ub, m => (gt.test(m) ? (o.color.push(u),
    l.push(j0),
    i.push(gt.parse(m))) : m.startsWith(Wb) ? (o.var.push(u),
    l.push(Fb),
    i.push(m)) : (o.number.push(u),
    l.push(N0),
    i.push(parseFloat(m))),
    ++u,
    nm)).split(nm);
    return {
        values: i,
        split: f,
        indexes: o,
        types: l
    }
}
function $b(t) {
    return ms(t).values
}
function T0({split: t, types: n}) {
    const i = t.length;
    return o => {
        let l = "";
        for (let u = 0; u < i; u++)
            if (l += t[u],
            o[u] !== void 0) {
                const c = n[u];
                c === N0 ? l += fo(o[u]) : c === j0 ? l += gt.transform(o[u]) : l += o[u]
            }
        return l
    }
}
function Hb(t) {
    return T0(ms(t))
}
const Yb = t => typeof t == "number" ? 0 : gt.test(t) ? gt.getAnimatableNone(t) : t
  , Gb = (t, n) => typeof t == "number" ? n != null && n.trim().endsWith("/") ? t : 0 : Yb(t);
function Kb(t) {
    const n = ms(t);
    return T0(n)(n.values.map( (o, l) => Gb(o, n.split[l])))
}
const $n = {
    test: Ib,
    parse: $b,
    createTransformer: Hb,
    getAnimatableNone: Kb
};
function fc(t, n, i) {
    return i < 0 && (i += 1),
    i > 1 && (i -= 1),
    i < 1 / 6 ? t + (n - t) * 6 * i : i < 1 / 2 ? n : i < 2 / 3 ? t + (n - t) * (2 / 3 - i) * 6 : t
}
function Jb({hue: t, saturation: n, lightness: i, alpha: o}) {
    t /= 360,
    n /= 100,
    i /= 100;
    let l = 0
      , u = 0
      , c = 0;
    if (!n)
        l = u = c = i;
    else {
        const f = i < .5 ? i * (1 + n) : i + n - i * n
          , m = 2 * i - f;
        l = fc(m, f, t + 1 / 3),
        u = fc(m, f, t),
        c = fc(m, f, t - 1 / 3)
    }
    return {
        red: Math.round(l * 255),
        green: Math.round(u * 255),
        blue: Math.round(c * 255),
        alpha: o
    }
}
function rl(t, n) {
    return i => i > 0 ? n : t
}
const Qe = (t, n, i) => t + (n - t) * i
  , hc = (t, n, i) => {
    const o = t * t
      , l = i * (n * n - o) + o;
    return l < 0 ? 0 : Math.sqrt(l)
}
  , Xb = [Dc, Pi, ds]
  , Qb = t => Xb.find(n => n.test(t));
function rm(t) {
    const n = Qb(t);
    if (!n)
        return !1;
    let i = n.parse(t);
    return n === ds && (i = Jb(i)),
    i
}
const im = (t, n) => {
    const i = rm(t)
      , o = rm(n);
    if (!i || !o)
        return rl(t, n);
    const l = {
        ...i
    };
    return u => (l.red = hc(i.red, o.red, u),
    l.green = hc(i.green, o.green, u),
    l.blue = hc(i.blue, o.blue, u),
    l.alpha = Qe(i.alpha, o.alpha, u),
    Pi.transform(l))
}
  , Ac = new Set(["none", "hidden"]);
function qb(t, n) {
    return Ac.has(t) ? i => i <= 0 ? t : n : i => i >= 1 ? n : t
}
function Zb(t, n) {
    return i => Qe(t, n, i)
}
function Nd(t) {
    return typeof t == "number" ? Zb : typeof t == "string" ? kd(t) ? rl : gt.test(t) ? im : nS : Array.isArray(t) ? R0 : typeof t == "object" ? gt.test(t) ? im : eS : rl
}
function R0(t, n) {
    const i = [...t]
      , o = i.length
      , l = t.map( (u, c) => Nd(u)(u, n[c]));
    return u => {
        for (let c = 0; c < o; c++)
            i[c] = l[c](u);
        return i
    }
}
function eS(t, n) {
    const i = {
        ...t,
        ...n
    }
      , o = {};
    for (const l in i)
        t[l] !== void 0 && n[l] !== void 0 && (o[l] = Nd(t[l])(t[l], n[l]));
    return l => {
        for (const u in o)
            i[u] = o[u](l);
        return i
    }
}
function tS(t, n) {
    const i = []
      , o = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let l = 0; l < n.values.length; l++) {
        const u = n.types[l]
          , c = t.indexes[u][o[u]]
          , f = t.values[c] ?? 0;
        i[l] = f,
        o[u]++
    }
    return i
}
const nS = (t, n) => {
    const i = $n.createTransformer(n)
      , o = ms(t)
      , l = ms(n);
    return o.indexes.var.length === l.indexes.var.length && o.indexes.color.length === l.indexes.color.length && o.indexes.number.length >= l.indexes.number.length ? Ac.has(t) && !l.values.length || Ac.has(n) && !o.values.length ? qb(t, n) : To(R0(tS(o, l), l.values), i) : rl(t, n)
}
;
function M0(t, n, i) {
    return typeof t == "number" && typeof n == "number" && typeof i == "number" ? Qe(t, n, i) : Nd(t)(t, n)
}
const rS = t => {
    const n = ({timestamp: i}) => t(i);
    return {
        start: (i=!0) => Ye.update(n, i),
        stop: () => ii(n),
        now: () => Pt.isProcessing ? Pt.timestamp : Kt.now()
    }
}
  , P0 = (t, n, i=10) => {
    let o = "";
    const l = Math.max(Math.round(n / i), 2);
    for (let u = 0; u < l; u++)
        o += Math.round(t(u / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`
}
  , il = 2e4;
function jd(t) {
    let n = 0;
    const i = 50;
    let o = t.next(n);
    for (; !o.done && n < il; )
        n += i,
        o = t.next(n);
    return n >= il ? 1 / 0 : n
}
function iS(t, n=100, i) {
    const o = i({
        ...t,
        keyframes: [0, n]
    })
      , l = Math.min(jd(o), il);
    return {
        type: "keyframes",
        ease: u => o.next(l * u).value / n,
        duration: Tn(l)
    }
}
const at = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
};
function _c(t, n) {
    return t * Math.sqrt(1 - n * n)
}
const sS = 12;
function oS(t, n, i) {
    let o = i;
    for (let l = 1; l < sS; l++)
        o = o - t(o) / n(o);
    return o
}
const pc = .001;
function aS({duration: t=at.duration, bounce: n=at.bounce, velocity: i=at.velocity, mass: o=at.mass}) {
    let l, u, c = 1 - n;
    c = ur(at.minDamping, at.maxDamping, c),
    t = ur(at.minDuration, at.maxDuration, Tn(t)),
    c < 1 ? (l = y => {
        const v = y * c
          , g = v * t
          , w = v - i
          , b = _c(y, c)
          , C = Math.exp(-g);
        return pc - w / b * C
    }
    ,
    u = y => {
        const g = y * c * t
          , w = g * i + i
          , b = Math.pow(c, 2) * Math.pow(y, 2) * t
          , C = Math.exp(-g)
          , M = _c(Math.pow(y, 2), c);
        return (-l(y) + pc > 0 ? -1 : 1) * ((w - b) * C) / M
    }
    ) : (l = y => {
        const v = Math.exp(-y * t)
          , g = (y - i) * t + 1;
        return -pc + v * g
    }
    ,
    u = y => {
        const v = Math.exp(-y * t)
          , g = (i - y) * (t * t);
        return v * g
    }
    );
    const f = 5 / t
      , m = oS(l, u, f);
    if (t = yn(t),
    isNaN(m))
        return {
            stiffness: at.stiffness,
            damping: at.damping,
            duration: t
        };
    {
        const y = Math.pow(m, 2) * o;
        return {
            stiffness: y,
            damping: c * 2 * Math.sqrt(o * y),
            duration: t
        }
    }
}
const lS = ["duration", "bounce"]
  , uS = ["stiffness", "damping", "mass"];
function sm(t, n) {
    return n.some(i => t[i] !== void 0)
}
function cS(t) {
    let n = {
        velocity: at.velocity,
        stiffness: at.stiffness,
        damping: at.damping,
        mass: at.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!sm(t, uS) && sm(t, lS))
        if (n.velocity = 0,
        t.visualDuration) {
            const i = t.visualDuration
              , o = 2 * Math.PI / (i * 1.2)
              , l = o * o
              , u = 2 * ur(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(l);
            n = {
                ...n,
                mass: at.mass,
                stiffness: l,
                damping: u
            }
        } else {
            const i = aS({
                ...t,
                velocity: 0
            });
            n = {
                ...n,
                ...i,
                mass: at.mass
            },
            n.isResolvedFromDuration = !0
        }
    return n
}
function sl(t=at.visualDuration, n=at.bounce) {
    const i = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: n
    } : t;
    let {restSpeed: o, restDelta: l} = i;
    const u = i.keyframes[0]
      , c = i.keyframes[i.keyframes.length - 1]
      , f = {
        done: !1,
        value: u
    }
      , {stiffness: m, damping: y, mass: v, duration: g, velocity: w, isResolvedFromDuration: b} = cS({
        ...i,
        velocity: -Tn(i.velocity || 0)
    })
      , C = w || 0
      , M = y / (2 * Math.sqrt(m * v))
      , N = c - u
      , A = Tn(Math.sqrt(m / v))
      , L = Math.abs(N) < 5;
    o || (o = L ? at.restSpeed.granular : at.restSpeed.default),
    l || (l = L ? at.restDelta.granular : at.restDelta.default);
    let B, W, U, se, D, H;
    if (M < 1)
        U = _c(A, M),
        se = (C + M * A * N) / U,
        B = X => {
            const ae = Math.exp(-M * A * X);
            return c - ae * (se * Math.sin(U * X) + N * Math.cos(U * X))
        }
        ,
        D = M * A * se + N * U,
        H = M * A * N - se * U,
        W = X => Math.exp(-M * A * X) * (D * Math.sin(U * X) + H * Math.cos(U * X));
    else if (M === 1) {
        B = ae => c - Math.exp(-A * ae) * (N + (C + A * N) * ae);
        const X = C + A * N;
        W = ae => Math.exp(-A * ae) * (A * X * ae - C)
    } else {
        const X = A * Math.sqrt(M * M - 1);
        B = je => {
            const Re = Math.exp(-M * A * je)
              , ne = Math.min(X * je, 300);
            return c - Re * ((C + M * A * N) * Math.sinh(ne) + X * N * Math.cosh(ne)) / X
        }
        ;
        const ae = (C + M * A * N) / X
          , ke = M * A * ae - N * X
          , Ae = M * A * N - ae * X;
        W = je => {
            const Re = Math.exp(-M * A * je)
              , ne = Math.min(X * je, 300);
            return Re * (ke * Math.sinh(ne) + Ae * Math.cosh(ne))
        }
    }
    const te = {
        calculatedDuration: b && g || null,
        velocity: X => yn(W(X)),
        next: X => {
            if (!b && M < 1) {
                const ke = Math.exp(-M * A * X)
                  , Ae = Math.sin(U * X)
                  , je = Math.cos(U * X)
                  , Re = c - ke * (se * Ae + N * je)
                  , ne = yn(ke * (D * Ae + H * je));
                return f.done = Math.abs(ne) <= o && Math.abs(c - Re) <= l,
                f.value = f.done ? c : Re,
                f
            }
            const ae = B(X);
            if (b)
                f.done = X >= g;
            else {
                const ke = yn(W(X));
                f.done = Math.abs(ke) <= o && Math.abs(c - ae) <= l
            }
            return f.value = f.done ? c : ae,
            f
        }
        ,
        toString: () => {
            const X = Math.min(jd(te), il)
              , ae = P0(ke => te.next(X * ke).value, X, 30);
            return X + "ms " + ae
        }
        ,
        toTransition: () => {}
    };
    return te
}
sl.applyToOptions = t => {
    const n = iS(t, 100, sl);
    return t.ease = n.ease,
    t.duration = yn(n.duration),
    t.type = "keyframes",
    t
}
;
const dS = 5;
function D0(t, n, i) {
    const o = Math.max(n - dS, 0);
    return d0(i - t(o), n - o)
}
function Lc({keyframes: t, velocity: n=0, power: i=.8, timeConstant: o=325, bounceDamping: l=10, bounceStiffness: u=500, modifyTarget: c, min: f, max: m, restDelta: y=.5, restSpeed: v}) {
    const g = t[0]
      , w = {
        done: !1,
        value: g
    }
      , b = H => f !== void 0 && H < f || m !== void 0 && H > m
      , C = H => f === void 0 ? m : m === void 0 || Math.abs(f - H) < Math.abs(m - H) ? f : m;
    let M = i * n;
    const N = g + M
      , A = c === void 0 ? N : c(N);
    A !== N && (M = A - g);
    const L = H => -M * Math.exp(-H / o)
      , B = H => A + L(H)
      , W = H => {
        const te = L(H)
          , X = B(H);
        w.done = Math.abs(te) <= y,
        w.value = w.done ? A : X
    }
    ;
    let U, se;
    const D = H => {
        b(w.value) && (U = H,
        se = sl({
            keyframes: [w.value, C(w.value)],
            velocity: D0(B, H, w.value),
            damping: l,
            stiffness: u,
            restDelta: y,
            restSpeed: v
        }))
    }
    ;
    return D(0),
    {
        calculatedDuration: null,
        next: H => {
            let te = !1;
            return !se && U === void 0 && (te = !0,
            W(H),
            D(H)),
            U !== void 0 && H >= U ? se.next(H - U) : (!te && W(H),
            w)
        }
    }
}
function fS(t, n, i) {
    const o = []
      , l = i || ri.mix || M0
      , u = t.length - 1;
    for (let c = 0; c < u; c++) {
        let f = l(t[c], t[c + 1]);
        if (n) {
            const m = Array.isArray(n) ? n[c] || Rn : n;
            f = To(m, f)
        }
        o.push(f)
    }
    return o
}
function hS(t, n, {clamp: i=!0, ease: o, mixer: l}={}) {
    const u = t.length;
    if (xd(u === n.length),
    u === 1)
        return () => n[0];
    if (u === 2 && n[0] === n[1])
        return () => n[1];
    const c = t[0] === t[1];
    t[0] > t[u - 1] && (t = [...t].reverse(),
    n = [...n].reverse());
    const f = fS(n, o, l)
      , m = f.length
      , y = v => {
        if (c && v < t[0])
            return n[0];
        let g = 0;
        if (m > 1)
            for (; g < t.length - 2 && !(v < t[g + 1]); g++)
                ;
        const w = xo(t[g], t[g + 1], v);
        return f[g](w)
    }
    ;
    return i ? v => y(ur(t[0], t[u - 1], v)) : y
}
function pS(t, n) {
    const i = t[t.length - 1];
    for (let o = 1; o <= n; o++) {
        const l = xo(0, n, o);
        t.push(Qe(i, 1, l))
    }
}
function mS(t) {
    const n = [0];
    return pS(n, t.length - 1),
    n
}
function gS(t, n) {
    return t.map(i => i * n)
}
function yS(t, n) {
    return t.map( () => n || w0).splice(0, t.length - 1)
}
function ho({duration: t=300, keyframes: n, times: i, ease: o="easeInOut"}) {
    const l = Eb(o) ? o.map(Zp) : Zp(o)
      , u = {
        done: !1,
        value: n[0]
    }
      , c = gS(i && i.length === n.length ? i : mS(n), t)
      , f = hS(c, n, {
        ease: Array.isArray(l) ? l : yS(n, l)
    });
    return {
        calculatedDuration: t,
        next: m => (u.value = f(m),
        u.done = m >= t,
        u)
    }
}
const vS = t => t !== null;
function gl(t, {repeat: n, repeatType: i="loop"}, o, l=1) {
    const u = t.filter(vS)
      , f = l < 0 || n && i !== "loop" && n % 2 === 1 ? 0 : u.length - 1;
    return !f || o === void 0 ? u[f] : o
}
const xS = {
    decay: Lc,
    inertia: Lc,
    tween: ho,
    keyframes: ho,
    spring: sl
};
function A0(t) {
    typeof t.type == "string" && (t.type = xS[t.type])
}
class Td {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(n => {
            this.resolve = n
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(n, i) {
        return this.finished.then(n, i)
    }
}
const wS = t => t / 100;
class ol extends Td {
    constructor(n) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.delayState = {
            done: !1,
            value: void 0
        },
        this.stop = () => {
            var o, l;
            const {motionValue: i} = this.options;
            i && i.updatedAt !== Kt.now() && this.tick(Kt.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (l = (o = this.options).onStop) == null || l.call(o))
        }
        ,
        this.options = n,
        this.initAnimation(),
        this.play(),
        n.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: n} = this;
        A0(n);
        const {type: i=ho, repeat: o=0, repeatDelay: l=0, repeatType: u, velocity: c=0} = n;
        let {keyframes: f} = n;
        const m = i || ho;
        m !== ho && typeof f[0] != "number" && (this.mixKeyframes = To(wS, M0(f[0], f[1])),
        f = [0, 100]);
        const y = m({
            ...n,
            keyframes: f
        });
        u === "mirror" && (this.mirroredGenerator = m({
            ...n,
            keyframes: [...f].reverse(),
            velocity: -c
        })),
        y.calculatedDuration === null && (y.calculatedDuration = jd(y));
        const {calculatedDuration: v} = y;
        this.calculatedDuration = v,
        this.resolvedDuration = v + l,
        this.totalDuration = this.resolvedDuration * (o + 1) - l,
        this.generator = y
    }
    updateTime(n) {
        const i = Math.round(n - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = i
    }
    tick(n, i=!1) {
        const {generator: o, totalDuration: l, mixKeyframes: u, mirroredGenerator: c, resolvedDuration: f, calculatedDuration: m} = this;
        if (this.startTime === null)
            return o.next(0);
        const {delay: y=0, keyframes: v, repeat: g, repeatType: w, repeatDelay: b, type: C, onUpdate: M, finalKeyframe: N} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - l / this.speed, this.startTime)),
        i ? this.currentTime = n : this.updateTime(n);
        const A = this.currentTime - y * (this.playbackSpeed >= 0 ? 1 : -1)
          , L = this.playbackSpeed >= 0 ? A < 0 : A > l;
        this.currentTime = Math.max(A, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = l);
        let B = this.currentTime
          , W = o;
        if (g) {
            const H = Math.min(this.currentTime, l) / f;
            let te = Math.floor(H)
              , X = H % 1;
            !X && H >= 1 && (X = 1),
            X === 1 && te--,
            te = Math.min(te, g + 1),
            !!(te % 2) && (w === "reverse" ? (X = 1 - X,
            b && (X -= b / f)) : w === "mirror" && (W = c)),
            B = ur(0, 1, X) * f
        }
        let U;
        L ? (this.delayState.value = v[0],
        U = this.delayState) : U = W.next(B),
        u && !L && (U.value = u(U.value));
        let {done: se} = U;
        !L && m !== null && (se = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
        const D = this.holdTime === null && (this.state === "finished" || this.state === "running" && se);
        return D && C !== Lc && (U.value = gl(v, this.options, N, this.speed)),
        M && M(U.value),
        D && this.finish(),
        U
    }
    then(n, i) {
        return this.finished.then(n, i)
    }
    get duration() {
        return Tn(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: n=0} = this.options || {};
        return this.duration + Tn(n)
    }
    get time() {
        return Tn(this.currentTime)
    }
    set time(n) {
        n = yn(n),
        this.currentTime = n,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.playbackSpeed),
        this.driver ? this.driver.start(!1) : (this.startTime = 0,
        this.state = "paused",
        this.holdTime = n,
        this.tick(n))
    }
    getGeneratorVelocity() {
        const n = this.currentTime;
        if (n <= 0)
            return this.options.velocity || 0;
        if (this.generator.velocity)
            return this.generator.velocity(n);
        const i = this.generator.next(n).value;
        return D0(o => this.generator.next(o).value, n, i)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(n) {
        const i = this.playbackSpeed !== n;
        i && this.driver && this.updateTime(Kt.now()),
        this.playbackSpeed = n,
        i && this.driver && (this.time = Tn(this.currentTime))
    }
    play() {
        var l, u;
        if (this.isStopped)
            return;
        const {driver: n=rS, startTime: i} = this.options;
        this.driver || (this.driver = n(c => this.tick(c))),
        (u = (l = this.options).onPlay) == null || u.call(l);
        const o = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = i ?? o),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(Kt.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var n, i;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (i = (n = this.options).onComplete) == null || i.call(n)
    }
    cancel() {
        var n, i;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (i = (n = this.options).onCancel) == null || i.call(n)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(n) {
        return this.startTime = 0,
        this.tick(n, !0)
    }
    attachTimeline(n) {
        var i;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (i = this.driver) == null || i.stop(),
        n.observe(this)
    }
}
function bS(t) {
    for (let n = 1; n < t.length; n++)
        t[n] ?? (t[n] = t[n - 1])
}
const Di = t => t * 180 / Math.PI
  , zc = t => {
    const n = Di(Math.atan2(t[1], t[0]));
    return Vc(n)
}
  , SS = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: zc,
    rotateZ: zc,
    skewX: t => Di(Math.atan(t[1])),
    skewY: t => Di(Math.atan(t[2])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}
  , Vc = t => (t = t % 360,
t < 0 && (t += 360),
t)
  , om = zc
  , am = t => Math.sqrt(t[0] * t[0] + t[1] * t[1])
  , lm = t => Math.sqrt(t[4] * t[4] + t[5] * t[5])
  , kS = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: am,
    scaleY: lm,
    scale: t => (am(t) + lm(t)) / 2,
    rotateX: t => Vc(Di(Math.atan2(t[6], t[5]))),
    rotateY: t => Vc(Di(Math.atan2(-t[2], t[0]))),
    rotateZ: om,
    rotate: om,
    skewX: t => Di(Math.atan(t[4])),
    skewY: t => Di(Math.atan(t[1])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Oc(t) {
    return t.includes("scale") ? 1 : 0
}
function Bc(t, n) {
    if (!t || t === "none")
        return Oc(n);
    const i = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let o, l;
    if (i)
        o = kS,
        l = i;
    else {
        const f = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        o = SS,
        l = f
    }
    if (!l)
        return Oc(n);
    const u = o[n]
      , c = l[1].split(",").map(ES);
    return typeof u == "function" ? u(c) : c[u]
}
const CS = (t, n) => {
    const {transform: i="none"} = getComputedStyle(t);
    return Bc(i, n)
}
;
function ES(t) {
    return parseFloat(t.trim())
}
const vs = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , xs = new Set(vs)
  , um = t => t === ys || t === he
  , NS = new Set(["x", "y", "z"])
  , jS = vs.filter(t => !NS.has(t));
function TS(t) {
    const n = [];
    return jS.forEach(i => {
        const o = t.getValue(i);
        o !== void 0 && (n.push([i, o.get()]),
        o.set(i.startsWith("scale") ? 1 : 0))
    }
    ),
    n
}
const ni = {
    width: ({x: t}, {paddingLeft: n="0", paddingRight: i="0", boxSizing: o}) => {
        const l = t.max - t.min;
        return o === "border-box" ? l : l - parseFloat(n) - parseFloat(i)
    }
    ,
    height: ({y: t}, {paddingTop: n="0", paddingBottom: i="0", boxSizing: o}) => {
        const l = t.max - t.min;
        return o === "border-box" ? l : l - parseFloat(n) - parseFloat(i)
    }
    ,
    top: (t, {top: n}) => parseFloat(n),
    left: (t, {left: n}) => parseFloat(n),
    bottom: ({y: t}, {top: n}) => parseFloat(n) + (t.max - t.min),
    right: ({x: t}, {left: n}) => parseFloat(n) + (t.max - t.min),
    x: (t, {transform: n}) => Bc(n, "x"),
    y: (t, {transform: n}) => Bc(n, "y")
};
ni.translateX = ni.x;
ni.translateY = ni.y;
const _i = new Set;
let Ic = !1
  , Fc = !1
  , Wc = !1;
function _0() {
    if (Fc) {
        const t = Array.from(_i).filter(o => o.needsMeasurement)
          , n = new Set(t.map(o => o.element))
          , i = new Map;
        n.forEach(o => {
            const l = TS(o);
            l.length && (i.set(o, l),
            o.render())
        }
        ),
        t.forEach(o => o.measureInitialState()),
        n.forEach(o => {
            o.render();
            const l = i.get(o);
            l && l.forEach( ([u,c]) => {
                var f;
                (f = o.getValue(u)) == null || f.set(c)
            }
            )
        }
        ),
        t.forEach(o => o.measureEndState()),
        t.forEach(o => {
            o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY)
        }
        )
    }
    Fc = !1,
    Ic = !1,
    _i.forEach(t => t.complete(Wc)),
    _i.clear()
}
function L0() {
    _i.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (Fc = !0)
    }
    )
}
function RS() {
    Wc = !0,
    L0(),
    _0(),
    Wc = !1
}
class Rd {
    constructor(n, i, o, l, u, c=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...n],
        this.onComplete = i,
        this.name = o,
        this.motionValue = l,
        this.element = u,
        this.isAsync = c
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (_i.add(this),
        Ic || (Ic = !0,
        Ye.read(L0),
        Ye.resolveKeyframes(_0))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: n, name: i, element: o, motionValue: l} = this;
        if (n[0] === null) {
            const u = l == null ? void 0 : l.get()
              , c = n[n.length - 1];
            if (u !== void 0)
                n[0] = u;
            else if (o && i) {
                const f = o.readValue(i, c);
                f != null && (n[0] = f)
            }
            n[0] === void 0 && (n[0] = c),
            l && u === void 0 && l.set(n[0])
        }
        bS(n)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(n=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n),
        _i.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (_i.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const MS = t => t.startsWith("--");
function z0(t, n, i) {
    MS(n) ? t.style.setProperty(n, i) : t.style[n] = i
}
const PS = {};
function V0(t, n) {
    const i = c0(t);
    return () => PS[n] ?? i()
}
const DS = V0( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , O0 = V0( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , uo = ([t,n,i,o]) => `cubic-bezier(${t}, ${n}, ${i}, ${o})`
  , cm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: uo([0, .65, .55, 1]),
    circOut: uo([.55, 0, 1, .45]),
    backIn: uo([.31, .01, .66, -.59]),
    backOut: uo([.33, 1.53, .69, .99])
};
function B0(t, n) {
    if (t)
        return typeof t == "function" ? O0() ? P0(t, n) : "ease-out" : b0(t) ? uo(t) : Array.isArray(t) ? t.map(i => B0(i, n) || cm.easeOut) : cm[t]
}
function AS(t, n, i, {delay: o=0, duration: l=300, repeat: u=0, repeatType: c="loop", ease: f="easeOut", times: m}={}, y=void 0) {
    const v = {
        [n]: i
    };
    m && (v.offset = m);
    const g = B0(f, l);
    Array.isArray(g) && (v.easing = g);
    const w = {
        delay: o,
        duration: l,
        easing: Array.isArray(g) ? "linear" : g,
        fill: "both",
        iterations: u + 1,
        direction: c === "reverse" ? "alternate" : "normal"
    };
    return y && (w.pseudoElement = y),
    t.animate(v, w)
}
function I0(t) {
    return typeof t == "function" && "applyToOptions"in t
}
function _S({type: t, ...n}) {
    return I0(t) && O0() ? t.applyToOptions(n) : (n.duration ?? (n.duration = 300),
    n.ease ?? (n.ease = "easeOut"),
    n)
}
class F0 extends Td {
    constructor(n) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !n)
            return;
        const {element: i, name: o, keyframes: l, pseudoElement: u, allowFlatten: c=!1, finalKeyframe: f, onComplete: m} = n;
        this.isPseudoElement = !!u,
        this.allowFlatten = c,
        this.options = n,
        xd(typeof n.type != "string");
        const y = _S(n);
        this.animation = AS(i, o, l, y, u),
        y.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !u) {
                const v = gl(l, this.options, f, this.speed);
                this.updateMotionValue && this.updateMotionValue(v),
                z0(i, o, v),
                this.animation.cancel()
            }
            m == null || m(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var n, i;
        (i = (n = this.animation).finish) == null || i.call(n)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: n} = this;
        n === "idle" || n === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var i, o, l;
        const n = (i = this.options) == null ? void 0 : i.element;
        !this.isPseudoElement && (n != null && n.isConnected) && ((l = (o = this.animation).commitStyles) == null || l.call(o))
    }
    get duration() {
        var i, o;
        const n = ((o = (i = this.animation.effect) == null ? void 0 : i.getComputedTiming) == null ? void 0 : o.call(i).duration) || 0;
        return Tn(Number(n))
    }
    get iterationDuration() {
        const {delay: n=0} = this.options || {};
        return this.duration + Tn(n)
    }
    get time() {
        return Tn(Number(this.animation.currentTime) || 0)
    }
    set time(n) {
        const i = this.finishedTime !== null;
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = yn(n),
        i && this.animation.pause()
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(n) {
        n < 0 && (this.finishedTime = null),
        this.animation.playbackRate = n
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(n) {
        this.manualStartTime = this.animation.startTime = n
    }
    attachTimeline({timeline: n, rangeStart: i, rangeEnd: o, observe: l}) {
        var u;
        return this.allowFlatten && ((u = this.animation.effect) == null || u.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        n && DS() ? (this.animation.timeline = n,
        i && (this.animation.rangeStart = i),
        o && (this.animation.rangeEnd = o),
        Rn) : l(this)
    }
}
const W0 = {
    anticipate: y0,
    backInOut: g0,
    circInOut: x0
};
function LS(t) {
    return t in W0
}
function zS(t) {
    typeof t.ease == "string" && LS(t.ease) && (t.ease = W0[t.ease])
}
const mc = 10;
class VS extends F0 {
    constructor(n) {
        zS(n),
        A0(n),
        super(n),
        n.startTime !== void 0 && n.autoplay !== !1 && (this.startTime = n.startTime),
        this.options = n
    }
    updateMotionValue(n) {
        const {motionValue: i, onUpdate: o, onComplete: l, element: u, ...c} = this.options;
        if (!i)
            return;
        if (n !== void 0) {
            i.set(n);
            return
        }
        const f = new ol({
            ...c,
            autoplay: !1
        })
          , m = Math.max(mc, Kt.now() - this.startTime)
          , y = ur(0, mc, m - mc)
          , v = f.sample(m).value
          , {name: g} = this.options;
        u && g && z0(u, g, v),
        i.setWithVelocity(f.sample(Math.max(0, m - y)).value, v, y),
        f.stop()
    }
}
const dm = (t, n) => n === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && ($n.test(t) || t === "0") && !t.startsWith("url("));
function OS(t) {
    const n = t[0];
    if (t.length === 1)
        return !0;
    for (let i = 0; i < t.length; i++)
        if (t[i] !== n)
            return !0
}
function BS(t, n, i, o) {
    const l = t[0];
    if (l === null)
        return !1;
    if (n === "display" || n === "visibility")
        return !0;
    const u = t[t.length - 1]
      , c = dm(l, n)
      , f = dm(u, n);
    return !c || !f ? !1 : OS(t) || (i === "spring" || I0(i)) && o
}
function Uc(t) {
    t.duration = 0,
    t.type = "keyframes"
}
const U0 = new Set(["opacity", "clipPath", "filter", "transform"])
  , IS = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function FS(t) {
    for (let n = 0; n < t.length; n++)
        if (typeof t[n] == "string" && IS.test(t[n]))
            return !0;
    return !1
}
const WS = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"])
  , US = c0( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function $S(t) {
    var g;
    const {motionValue: n, name: i, repeatDelay: o, repeatType: l, damping: u, type: c, keyframes: f} = t;
    if (!(((g = n == null ? void 0 : n.owner) == null ? void 0 : g.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: y, transformTemplate: v} = n.owner.getProps();
    return US() && i && (U0.has(i) || WS.has(i) && FS(f)) && (i !== "transform" || !v) && !y && !o && l !== "mirror" && u !== 0 && c !== "inertia"
}
const HS = 40;
class YS extends Td {
    constructor({autoplay: n=!0, delay: i=0, type: o="keyframes", repeat: l=0, repeatDelay: u=0, repeatType: c="loop", keyframes: f, name: m, motionValue: y, element: v, ...g}) {
        var C;
        super(),
        this.stop = () => {
            var M, N;
            this._animation && (this._animation.stop(),
            (M = this.stopTimeline) == null || M.call(this)),
            (N = this.keyframeResolver) == null || N.cancel()
        }
        ,
        this.createdAt = Kt.now();
        const w = {
            autoplay: n,
            delay: i,
            type: o,
            repeat: l,
            repeatDelay: u,
            repeatType: c,
            name: m,
            motionValue: y,
            element: v,
            ...g
        }
          , b = (v == null ? void 0 : v.KeyframeResolver) || Rd;
        this.keyframeResolver = new b(f, (M, N, A) => this.onKeyframesResolved(M, N, w, !A),m,y,v),
        (C = this.keyframeResolver) == null || C.scheduleResolve()
    }
    onKeyframesResolved(n, i, o, l) {
        var A, L;
        this.keyframeResolver = void 0;
        const {name: u, type: c, velocity: f, delay: m, isHandoff: y, onUpdate: v} = o;
        this.resolvedAt = Kt.now();
        let g = !0;
        BS(n, u, c, f) || (g = !1,
        (ri.instantAnimations || !m) && (v == null || v(gl(n, o, i))),
        n[0] = n[n.length - 1],
        Uc(o),
        o.repeat = 0);
        const b = {
            startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > HS ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: i,
            ...o,
            keyframes: n
        }
          , C = g && !y && $S(b)
          , M = (L = (A = b.motionValue) == null ? void 0 : A.owner) == null ? void 0 : L.current;
        let N;
        if (C)
            try {
                N = new VS({
                    ...b,
                    element: M
                })
            } catch {
                N = new ol(b)
            }
        else
            N = new ol(b);
        N.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(Rn),
        this.pendingTimeline && (this.stopTimeline = N.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = N
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(n, i) {
        return this.finished.finally(n).then( () => {}
        )
    }
    get animation() {
        var n;
        return this._animation || ((n = this.keyframeResolver) == null || n.resume(),
        RS()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(n) {
        this.animation.time = n
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(n) {
        this.animation.speed = n
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(n) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(n) : this.pendingTimeline = n,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var n;
        this._animation && this.animation.cancel(),
        (n = this.keyframeResolver) == null || n.cancel()
    }
}
function $0(t, n, i, o=0, l=1) {
    const u = Array.from(t).sort( (y, v) => y.sortNodePosition(v)).indexOf(n)
      , c = t.size
      , f = (c - 1) * o;
    return typeof i == "function" ? i(u, c) : l === 1 ? u * o : f - u * o
}
const GS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function KS(t) {
    const n = GS.exec(t);
    if (!n)
        return [, ];
    const [,i,o,l] = n;
    return [`--${i ?? o}`, l]
}
function H0(t, n, i=1) {
    const [o,l] = KS(t);
    if (!o)
        return;
    const u = window.getComputedStyle(n).getPropertyValue(o);
    if (u) {
        const c = u.trim();
        return a0(c) ? parseFloat(c) : c
    }
    return kd(l) ? H0(l, n, i + 1) : l
}
const JS = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , XS = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , QS = {
    type: "keyframes",
    duration: .8
}
  , qS = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , ZS = (t, {keyframes: n}) => n.length > 2 ? QS : xs.has(t) ? t.startsWith("scale") ? XS(n[1]) : JS : qS;
function Y0(t, n) {
    if (t != null && t.inherit && n) {
        const {inherit: i, ...o} = t;
        return {
            ...n,
            ...o
        }
    }
    return t
}
function Md(t, n) {
    const i = (t == null ? void 0 : t[n]) ?? (t == null ? void 0 : t.default) ?? t;
    return i !== t ? Y0(i, t) : i
}
const ek = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function tk(t) {
    for (const n in t)
        if (!ek.has(n))
            return !0;
    return !1
}
const Pd = (t, n, i, o={}, l, u) => c => {
    const f = Md(o, t) || {}
      , m = f.delay || o.delay || 0;
    let {elapsed: y=0} = o;
    y = y - yn(m);
    const v = {
        keyframes: Array.isArray(i) ? i : [null, i],
        ease: "easeOut",
        velocity: n.getVelocity(),
        ...f,
        delay: -y,
        onUpdate: w => {
            n.set(w),
            f.onUpdate && f.onUpdate(w)
        }
        ,
        onComplete: () => {
            c(),
            f.onComplete && f.onComplete()
        }
        ,
        name: t,
        motionValue: n,
        element: u ? void 0 : l
    };
    tk(f) || Object.assign(v, ZS(t, v)),
    v.duration && (v.duration = yn(v.duration)),
    v.repeatDelay && (v.repeatDelay = yn(v.repeatDelay)),
    v.from !== void 0 && (v.keyframes[0] = v.from);
    let g = !1;
    if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Uc(v),
    v.delay === 0 && (g = !0)),
    (ri.instantAnimations || ri.skipAnimations || l != null && l.shouldSkipAnimations) && (g = !0,
    Uc(v),
    v.delay = 0),
    v.allowFlatten = !f.type && !f.ease,
    g && !u && n.get() !== void 0) {
        const w = gl(v.keyframes, f);
        if (w !== void 0) {
            Ye.update( () => {
                v.onUpdate(w),
                v.onComplete()
            }
            );
            return
        }
    }
    return f.isSync ? new ol(v) : new YS(v)
}
;
function fm(t) {
    const n = [{}, {}];
    return t == null || t.values.forEach( (i, o) => {
        n[0][o] = i.get(),
        n[1][o] = i.getVelocity()
    }
    ),
    n
}
function Dd(t, n, i, o) {
    if (typeof n == "function") {
        const [l,u] = fm(o);
        n = n(i !== void 0 ? i : t.custom, l, u)
    }
    if (typeof n == "string" && (n = t.variants && t.variants[n]),
    typeof n == "function") {
        const [l,u] = fm(o);
        n = n(i !== void 0 ? i : t.custom, l, u)
    }
    return n
}
function Li(t, n, i) {
    const o = t.getProps();
    return Dd(o, n, i !== void 0 ? i : o.custom, t)
}
const G0 = new Set(["width", "height", "top", "left", "right", "bottom", ...vs])
  , hm = 30
  , nk = t => !isNaN(parseFloat(t));
class rk {
    constructor(n, i={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = o => {
            var u;
            const l = Kt.now();
            if (this.updatedAt !== l && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(o),
            this.current !== this.prev && ((u = this.events.change) == null || u.notify(this.current),
            this.dependents))
                for (const c of this.dependents)
                    c.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(n),
        this.owner = i.owner
    }
    setCurrent(n) {
        this.current = n,
        this.updatedAt = Kt.now(),
        this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = nk(this.current))
    }
    setPrevFrameValue(n=this.current) {
        this.prevFrameValue = n,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(n) {
        return this.on("change", n)
    }
    on(n, i) {
        this.events[n] || (this.events[n] = new wd);
        const o = this.events[n].add(i);
        return n === "change" ? () => {
            o(),
            Ye.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : o
    }
    clearListeners() {
        for (const n in this.events)
            this.events[n].clear()
    }
    attach(n, i) {
        this.passiveEffect = n,
        this.stopPassiveEffect = i
    }
    set(n) {
        this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n)
    }
    setWithVelocity(n, i, o) {
        this.set(i),
        this.prev = void 0,
        this.prevFrameValue = n,
        this.prevUpdatedAt = this.updatedAt - o
    }
    jump(n, i=!0) {
        this.updateAndNotify(n),
        this.prev = n,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        i && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var n;
        (n = this.events.change) == null || n.notify(this.current)
    }
    addDependent(n) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(n)
    }
    removeDependent(n) {
        this.dependents && this.dependents.delete(n)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const n = Kt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > hm)
            return 0;
        const i = Math.min(this.updatedAt - this.prevUpdatedAt, hm);
        return d0(parseFloat(this.current) - parseFloat(this.prevFrameValue), i)
    }
    start(n) {
        return this.stop(),
        new Promise(i => {
            this.hasAnimated = !0,
            this.animation = n(i),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        var n, i;
        (n = this.dependents) == null || n.clear(),
        (i = this.events.destroy) == null || i.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function gs(t, n) {
    return new rk(t,n)
}
const $c = t => Array.isArray(t);
function ik(t, n, i) {
    t.hasValue(n) ? t.getValue(n).set(i) : t.addValue(n, gs(i))
}
function sk(t) {
    return $c(t) ? t[t.length - 1] || 0 : t
}
function ok(t, n) {
    const i = Li(t, n);
    let {transitionEnd: o={}, transition: l={}, ...u} = i || {};
    u = {
        ...u,
        ...o
    };
    for (const c in u) {
        const f = sk(u[c]);
        ik(t, c, f)
    }
}
const Dt = t => !!(t && t.getVelocity);
function ak(t) {
    return !!(Dt(t) && t.add)
}
function Hc(t, n) {
    const i = t.getValue("willChange");
    if (ak(i))
        return i.add(n);
    if (!i && ri.WillChange) {
        const o = new ri.WillChange("auto");
        t.addValue("willChange", o),
        o.add(n)
    }
}
function Ad(t) {
    return t.replace(/([A-Z])/g, n => `-${n.toLowerCase()}`)
}
const lk = "framerAppearId"
  , K0 = "data-" + Ad(lk);
function J0(t) {
    return t.props[K0]
}
function uk({protectedKeys: t, needsAnimating: n}, i) {
    const o = t.hasOwnProperty(i) && n[i] !== !0;
    return n[i] = !1,
    o
}
function X0(t, n, {delay: i=0, transitionOverride: o, type: l}={}) {
    let {transition: u, transitionEnd: c, ...f} = n;
    const m = t.getDefaultTransition();
    u = u ? Y0(u, m) : m;
    const y = u == null ? void 0 : u.reduceMotion;
    o && (u = o);
    const v = []
      , g = l && t.animationState && t.animationState.getState()[l];
    for (const w in f) {
        const b = t.getValue(w, t.latestValues[w] ?? null)
          , C = f[w];
        if (C === void 0 || g && uk(g, w))
            continue;
        const M = {
            delay: i,
            ...Md(u || {}, w)
        }
          , N = b.get();
        if (N !== void 0 && !b.isAnimating() && !Array.isArray(C) && C === N && !M.velocity) {
            Ye.update( () => b.set(C));
            continue
        }
        let A = !1;
        if (window.MotionHandoffAnimation) {
            const W = J0(t);
            if (W) {
                const U = window.MotionHandoffAnimation(W, w, Ye);
                U !== null && (M.startTime = U,
                A = !0)
            }
        }
        Hc(t, w);
        const L = y ?? t.shouldReduceMotion;
        b.start(Pd(w, b, C, L && G0.has(w) ? {
            type: !1
        } : M, t, A));
        const B = b.animation;
        B && v.push(B)
    }
    if (c) {
        const w = () => Ye.update( () => {
            c && ok(t, c)
        }
        );
        v.length ? Promise.all(v).then(w) : w()
    }
    return v
}
function Yc(t, n, i={}) {
    var m;
    const o = Li(t, n, i.type === "exit" ? (m = t.presenceContext) == null ? void 0 : m.custom : void 0);
    let {transition: l=t.getDefaultTransition() || {}} = o || {};
    i.transitionOverride && (l = i.transitionOverride);
    const u = o ? () => Promise.all(X0(t, o, i)) : () => Promise.resolve()
      , c = t.variantChildren && t.variantChildren.size ? (y=0) => {
        const {delayChildren: v=0, staggerChildren: g, staggerDirection: w} = l;
        return ck(t, n, y, v, g, w, i)
    }
    : () => Promise.resolve()
      , {when: f} = l;
    if (f) {
        const [y,v] = f === "beforeChildren" ? [u, c] : [c, u];
        return y().then( () => v())
    } else
        return Promise.all([u(), c(i.delay)])
}
function ck(t, n, i=0, o=0, l=0, u=1, c) {
    const f = [];
    for (const m of t.variantChildren)
        m.notify("AnimationStart", n),
        f.push(Yc(m, n, {
            ...c,
            delay: i + (typeof o == "function" ? 0 : o) + $0(t.variantChildren, m, o, l, u)
        }).then( () => m.notify("AnimationComplete", n)));
    return Promise.all(f)
}
function dk(t, n, i={}) {
    t.notify("AnimationStart", n);
    let o;
    if (Array.isArray(n)) {
        const l = n.map(u => Yc(t, u, i));
        o = Promise.all(l)
    } else if (typeof n == "string")
        o = Yc(t, n, i);
    else {
        const l = typeof n == "function" ? Li(t, n, i.custom) : n;
        o = Promise.all(X0(t, l, i))
    }
    return o.then( () => {
        t.notify("AnimationComplete", n)
    }
    )
}
const fk = {
    test: t => t === "auto",
    parse: t => t
}
  , Q0 = t => n => n.test(t)
  , q0 = [ys, he, ar, Qr, Ob, Vb, fk]
  , pm = t => q0.find(Q0(t));
function hk(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || u0(t) : !0
}
const pk = new Set(["brightness", "contrast", "saturate", "opacity"]);
function mk(t) {
    const [n,i] = t.slice(0, -1).split("(");
    if (n === "drop-shadow")
        return t;
    const [o] = i.match(Cd) || [];
    if (!o)
        return t;
    const l = i.replace(o, "");
    let u = pk.has(n) ? 1 : 0;
    return o !== i && (u *= 100),
    n + "(" + u + l + ")"
}
const gk = /\b([a-z-]*)\(.*?\)/gu
  , Gc = {
    ...$n,
    getAnimatableNone: t => {
        const n = t.match(gk);
        return n ? n.map(mk).join(" ") : t
    }
}
  , Kc = {
    ...$n,
    getAnimatableNone: t => {
        const n = $n.parse(t);
        return $n.createTransformer(t)(n.map(o => typeof o == "number" ? 0 : typeof o == "object" ? {
            ...o,
            alpha: 1
        } : o))
    }
}
  , mm = {
    ...ys,
    transform: Math.round
}
  , yk = {
    rotate: Qr,
    rotateX: Qr,
    rotateY: Qr,
    rotateZ: Qr,
    scale: Oa,
    scaleX: Oa,
    scaleY: Oa,
    scaleZ: Oa,
    skew: Qr,
    skewX: Qr,
    skewY: Qr,
    distance: he,
    translateX: he,
    translateY: he,
    translateZ: he,
    x: he,
    y: he,
    z: he,
    perspective: he,
    transformPerspective: he,
    opacity: wo,
    originX: tm,
    originY: tm,
    originZ: he
}
  , _d = {
    borderWidth: he,
    borderTopWidth: he,
    borderRightWidth: he,
    borderBottomWidth: he,
    borderLeftWidth: he,
    borderRadius: he,
    borderTopLeftRadius: he,
    borderTopRightRadius: he,
    borderBottomRightRadius: he,
    borderBottomLeftRadius: he,
    width: he,
    maxWidth: he,
    height: he,
    maxHeight: he,
    top: he,
    right: he,
    bottom: he,
    left: he,
    inset: he,
    insetBlock: he,
    insetBlockStart: he,
    insetBlockEnd: he,
    insetInline: he,
    insetInlineStart: he,
    insetInlineEnd: he,
    padding: he,
    paddingTop: he,
    paddingRight: he,
    paddingBottom: he,
    paddingLeft: he,
    paddingBlock: he,
    paddingBlockStart: he,
    paddingBlockEnd: he,
    paddingInline: he,
    paddingInlineStart: he,
    paddingInlineEnd: he,
    margin: he,
    marginTop: he,
    marginRight: he,
    marginBottom: he,
    marginLeft: he,
    marginBlock: he,
    marginBlockStart: he,
    marginBlockEnd: he,
    marginInline: he,
    marginInlineStart: he,
    marginInlineEnd: he,
    fontSize: he,
    backgroundPositionX: he,
    backgroundPositionY: he,
    ...yk,
    zIndex: mm,
    fillOpacity: wo,
    strokeOpacity: wo,
    numOctaves: mm
}
  , vk = {
    ..._d,
    color: gt,
    backgroundColor: gt,
    outlineColor: gt,
    fill: gt,
    stroke: gt,
    borderColor: gt,
    borderTopColor: gt,
    borderRightColor: gt,
    borderBottomColor: gt,
    borderLeftColor: gt,
    filter: Gc,
    WebkitFilter: Gc,
    mask: Kc,
    WebkitMask: Kc
}
  , Z0 = t => vk[t]
  , xk = new Set([Gc, Kc]);
function ey(t, n) {
    let i = Z0(t);
    return xk.has(i) || (i = $n),
    i.getAnimatableNone ? i.getAnimatableNone(n) : void 0
}
const wk = new Set(["auto", "none", "0"]);
function bk(t, n, i) {
    let o = 0, l;
    for (; o < t.length && !l; ) {
        const u = t[o];
        typeof u == "string" && !wk.has(u) && ms(u).values.length && (l = t[o]),
        o++
    }
    if (l && i)
        for (const u of n)
            t[u] = ey(i, l)
}
class Sk extends Rd {
    constructor(n, i, o, l, u) {
        super(n, i, o, l, u, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: n, element: i, name: o} = this;
        if (!i || !i.current)
            return;
        super.readKeyframes();
        for (let v = 0; v < n.length; v++) {
            let g = n[v];
            if (typeof g == "string" && (g = g.trim(),
            kd(g))) {
                const w = H0(g, i.current);
                w !== void 0 && (n[v] = w),
                v === n.length - 1 && (this.finalKeyframe = g)
            }
        }
        if (this.resolveNoneKeyframes(),
        !G0.has(o) || n.length !== 2)
            return;
        const [l,u] = n
          , c = pm(l)
          , f = pm(u)
          , m = em(l)
          , y = em(u);
        if (m !== y && ni[o]) {
            this.needsMeasurement = !0;
            return
        }
        if (c !== f)
            if (um(c) && um(f))
                for (let v = 0; v < n.length; v++) {
                    const g = n[v];
                    typeof g == "string" && (n[v] = parseFloat(g))
                }
            else
                ni[o] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: n, name: i} = this
          , o = [];
        for (let l = 0; l < n.length; l++)
            (n[l] === null || hk(n[l])) && o.push(l);
        o.length && bk(n, o, i)
    }
    measureInitialState() {
        const {element: n, unresolvedKeyframes: i, name: o} = this;
        if (!n || !n.current)
            return;
        o === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = ni[o](n.measureViewportBox(), window.getComputedStyle(n.current)),
        i[0] = this.measuredOrigin;
        const l = i[i.length - 1];
        l !== void 0 && n.getValue(o, l).jump(l, !1)
    }
    measureEndState() {
        var f;
        const {element: n, name: i, unresolvedKeyframes: o} = this;
        if (!n || !n.current)
            return;
        const l = n.getValue(i);
        l && l.jump(this.measuredOrigin, !1);
        const u = o.length - 1
          , c = o[u];
        o[u] = ni[i](n.measureViewportBox(), window.getComputedStyle(n.current)),
        c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c),
        (f = this.removedTransforms) != null && f.length && this.removedTransforms.forEach( ([m,y]) => {
            n.getValue(m).set(y)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function ty(t, n, i) {
    if (t == null)
        return [];
    if (t instanceof EventTarget)
        return [t];
    if (typeof t == "string") {
        let o = document;
        const l = (i == null ? void 0 : i[t]) ?? o.querySelectorAll(t);
        return l ? Array.from(l) : []
    }
    return Array.from(t).filter(o => o != null)
}
const ny = (t, n) => n && typeof t == "number" ? n.transform(t) : t;
function Ka(t) {
    return l0(t) && "offsetHeight"in t && !("ownerSVGElement"in t)
}
const {schedule: Ld} = S0(queueMicrotask, !1)
  , Un = {
    x: !1,
    y: !1
};
function ry() {
    return Un.x || Un.y
}
function kk(t) {
    return t === "x" || t === "y" ? Un[t] ? null : (Un[t] = !0,
    () => {
        Un[t] = !1
    }
    ) : Un.x || Un.y ? null : (Un.x = Un.y = !0,
    () => {
        Un.x = Un.y = !1
    }
    )
}
function iy(t, n) {
    const i = ty(t)
      , o = new AbortController
      , l = {
        passive: !0,
        ...n,
        signal: o.signal
    };
    return [i, l, () => o.abort()]
}
function Ck(t) {
    return !(t.pointerType === "touch" || ry())
}
function Ek(t, n, i={}) {
    const [o,l,u] = iy(t, i);
    return o.forEach(c => {
        let f = !1, m = !1, y;
        const v = () => {
            c.removeEventListener("pointerleave", C)
        }
          , g = N => {
            y && (y(N),
            y = void 0),
            v()
        }
          , w = N => {
            f = !1,
            window.removeEventListener("pointerup", w),
            window.removeEventListener("pointercancel", w),
            m && (m = !1,
            g(N))
        }
          , b = () => {
            f = !0,
            window.addEventListener("pointerup", w, l),
            window.addEventListener("pointercancel", w, l)
        }
          , C = N => {
            if (N.pointerType !== "touch") {
                if (f) {
                    m = !0;
                    return
                }
                g(N)
            }
        }
          , M = N => {
            if (!Ck(N))
                return;
            m = !1;
            const A = n(c, N);
            typeof A == "function" && (y = A,
            c.addEventListener("pointerleave", C, l))
        }
        ;
        c.addEventListener("pointerenter", M, l),
        c.addEventListener("pointerdown", b, l)
    }
    ),
    u
}
const sy = (t, n) => n ? t === n ? !0 : sy(t, n.parentElement) : !1
  , zd = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , Nk = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function jk(t) {
    return Nk.has(t.tagName) || t.isContentEditable === !0
}
const Tk = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function Rk(t) {
    return Tk.has(t.tagName) || t.isContentEditable === !0
}
const Ja = new WeakSet;
function gm(t) {
    return n => {
        n.key === "Enter" && t(n)
    }
}
function gc(t, n) {
    t.dispatchEvent(new PointerEvent("pointer" + n,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Mk = (t, n) => {
    const i = t.currentTarget;
    if (!i)
        return;
    const o = gm( () => {
        if (Ja.has(i))
            return;
        gc(i, "down");
        const l = gm( () => {
            gc(i, "up")
        }
        )
          , u = () => gc(i, "cancel");
        i.addEventListener("keyup", l, n),
        i.addEventListener("blur", u, n)
    }
    );
    i.addEventListener("keydown", o, n),
    i.addEventListener("blur", () => i.removeEventListener("keydown", o), n)
}
;
function ym(t) {
    return zd(t) && !ry()
}
const vm = new WeakSet;
function Pk(t, n, i={}) {
    const [o,l,u] = iy(t, i)
      , c = f => {
        const m = f.currentTarget;
        if (!ym(f) || vm.has(f))
            return;
        Ja.add(m),
        i.stopPropagation && vm.add(f);
        const y = n(m, f)
          , v = (b, C) => {
            window.removeEventListener("pointerup", g),
            window.removeEventListener("pointercancel", w),
            Ja.has(m) && Ja.delete(m),
            ym(b) && typeof y == "function" && y(b, {
                success: C
            })
        }
          , g = b => {
            v(b, m === window || m === document || i.useGlobalTarget || sy(m, b.target))
        }
          , w = b => {
            v(b, !1)
        }
        ;
        window.addEventListener("pointerup", g, l),
        window.addEventListener("pointercancel", w, l)
    }
    ;
    return o.forEach(f => {
        (i.useGlobalTarget ? window : f).addEventListener("pointerdown", c, l),
        Ka(f) && (f.addEventListener("focus", y => Mk(y, l)),
        !jk(f) && !f.hasAttribute("tabindex") && (f.tabIndex = 0))
    }
    ),
    u
}
function Vd(t) {
    return l0(t) && "ownerSVGElement"in t
}
const Xa = new WeakMap;
let qr;
const oy = (t, n, i) => (o, l) => l && l[0] ? l[0][t + "Size"] : Vd(o) && "getBBox"in o ? o.getBBox()[n] : o[i]
  , Dk = oy("inline", "width", "offsetWidth")
  , Ak = oy("block", "height", "offsetHeight");
function _k({target: t, borderBoxSize: n}) {
    var i;
    (i = Xa.get(t)) == null || i.forEach(o => {
        o(t, {
            get width() {
                return Dk(t, n)
            },
            get height() {
                return Ak(t, n)
            }
        })
    }
    )
}
function Lk(t) {
    t.forEach(_k)
}
function zk() {
    typeof ResizeObserver > "u" || (qr = new ResizeObserver(Lk))
}
function Vk(t, n) {
    qr || zk();
    const i = ty(t);
    return i.forEach(o => {
        let l = Xa.get(o);
        l || (l = new Set,
        Xa.set(o, l)),
        l.add(n),
        qr == null || qr.observe(o)
    }
    ),
    () => {
        i.forEach(o => {
            const l = Xa.get(o);
            l == null || l.delete(n),
            l != null && l.size || qr == null || qr.unobserve(o)
        }
        )
    }
}
const Qa = new Set;
let fs;
function Ok() {
    fs = () => {
        const t = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Qa.forEach(n => n(t))
    }
    ,
    window.addEventListener("resize", fs)
}
function Bk(t) {
    return Qa.add(t),
    fs || Ok(),
    () => {
        Qa.delete(t),
        !Qa.size && typeof fs == "function" && (window.removeEventListener("resize", fs),
        fs = void 0)
    }
}
function xm(t, n) {
    return typeof t == "function" ? Bk(t) : Vk(t, n)
}
function Ik(t) {
    return Vd(t) && t.tagName === "svg"
}
const Fk = [...q0, gt, $n]
  , Wk = t => Fk.find(Q0(t))
  , wm = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , hs = () => ({
    x: wm(),
    y: wm()
})
  , bm = () => ({
    min: 0,
    max: 0
})
  , St = () => ({
    x: bm(),
    y: bm()
})
  , Uk = new WeakMap;
function yl(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
function bo(t) {
    return typeof t == "string" || Array.isArray(t)
}
const Od = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Bd = ["initial", ...Od];
function vl(t) {
    return yl(t.animate) || Bd.some(n => bo(t[n]))
}
function ay(t) {
    return !!(vl(t) || t.variants)
}
function $k(t, n, i) {
    for (const o in n) {
        const l = n[o]
          , u = i[o];
        if (Dt(l))
            t.addValue(o, l);
        else if (Dt(u))
            t.addValue(o, gs(l, {
                owner: t
            }));
        else if (u !== l)
            if (t.hasValue(o)) {
                const c = t.getValue(o);
                c.liveStyle === !0 ? c.jump(l) : c.hasAnimated || c.set(l)
            } else {
                const c = t.getStaticValue(o);
                t.addValue(o, gs(c !== void 0 ? c : l, {
                    owner: t
                }))
            }
    }
    for (const o in i)
        n[o] === void 0 && t.removeValue(o);
    return n
}
const Jc = {
    current: null
}
  , ly = {
    current: !1
}
  , Hk = typeof window < "u";
function Yk() {
    if (ly.current = !0,
    !!Hk)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , n = () => Jc.current = t.matches;
            t.addEventListener("change", n),
            n()
        } else
            Jc.current = !1
}
const Sm = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let al = {};
function uy(t) {
    al = t
}
function Gk() {
    return al
}
class Kk {
    scrapeMotionValuesFromProps(n, i, o) {
        return {}
    }
    constructor({parent: n, props: i, presenceContext: o, reducedMotionConfig: l, skipAnimations: u, blockInitialAnimation: c, visualState: f}, m={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = Rd,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const b = Kt.now();
            this.renderScheduledAt < b && (this.renderScheduledAt = b,
            Ye.render(this.render, !1, !0))
        }
        ;
        const {latestValues: y, renderState: v} = f;
        this.latestValues = y,
        this.baseTarget = {
            ...y
        },
        this.initialValues = i.initial ? {
            ...y
        } : {},
        this.renderState = v,
        this.parent = n,
        this.props = i,
        this.presenceContext = o,
        this.depth = n ? n.depth + 1 : 0,
        this.reducedMotionConfig = l,
        this.skipAnimationsConfig = u,
        this.options = m,
        this.blockInitialAnimation = !!c,
        this.isControllingVariants = vl(i),
        this.isVariantNode = ay(i),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(n && n.current);
        const {willChange: g, ...w} = this.scrapeMotionValuesFromProps(i, {}, this);
        for (const b in w) {
            const C = w[b];
            y[b] !== void 0 && Dt(C) && C.set(y[b])
        }
    }
    mount(n) {
        var i, o;
        if (this.hasBeenMounted)
            for (const l in this.initialValues)
                (i = this.values.get(l)) == null || i.jump(this.initialValues[l]),
                this.latestValues[l] = this.initialValues[l];
        this.current = n,
        Uk.set(n, this),
        this.projection && !this.projection.instance && this.projection.mount(n),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (l, u) => this.bindToMotionValue(u, l)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ly.current || Yk(),
        this.shouldReduceMotion = Jc.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (o = this.parent) == null || o.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var n;
        this.projection && this.projection.unmount(),
        ii(this.notifyUpdate),
        ii(this.render),
        this.valueSubscriptions.forEach(i => i()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (n = this.parent) == null || n.removeChild(this);
        for (const i in this.events)
            this.events[i].clear();
        for (const i in this.features) {
            const o = this.features[i];
            o && (o.unmount(),
            o.isMounted = !1)
        }
        this.current = null
    }
    addChild(n) {
        this.children.add(n),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(n)
    }
    removeChild(n) {
        this.children.delete(n),
        this.enteringChildren && this.enteringChildren.delete(n)
    }
    bindToMotionValue(n, i) {
        if (this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)(),
        i.accelerate && U0.has(n) && this.current instanceof HTMLElement) {
            const {factory: c, keyframes: f, times: m, ease: y, duration: v} = i.accelerate
              , g = new F0({
                element: this.current,
                name: n,
                keyframes: f,
                times: m,
                ease: y,
                duration: yn(v)
            })
              , w = c(g);
            this.valueSubscriptions.set(n, () => {
                w(),
                g.cancel()
            }
            );
            return
        }
        const o = xs.has(n);
        o && this.onBindTransform && this.onBindTransform();
        const l = i.on("change", c => {
            this.latestValues[n] = c,
            this.props.onUpdate && Ye.preRender(this.notifyUpdate),
            o && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let u;
        typeof window < "u" && window.MotionCheckAppearSync && (u = window.MotionCheckAppearSync(this, n, i)),
        this.valueSubscriptions.set(n, () => {
            l(),
            u && u(),
            i.owner && i.stop()
        }
        )
    }
    sortNodePosition(n) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current)
    }
    updateFeatures() {
        let n = "animation";
        for (n in al) {
            const i = al[n];
            if (!i)
                continue;
            const {isEnabled: o, Feature: l} = i;
            if (!this.features[n] && l && o(this.props) && (this.features[n] = new l(this)),
            this.features[n]) {
                const u = this.features[n];
                u.isMounted ? u.update() : (u.mount(),
                u.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : St()
    }
    getStaticValue(n) {
        return this.latestValues[n]
    }
    setStaticValue(n, i) {
        this.latestValues[n] = i
    }
    update(n, i) {
        (n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = n,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = i;
        for (let o = 0; o < Sm.length; o++) {
            const l = Sm[o];
            this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](),
            delete this.propEventSubscriptions[l]);
            const u = "on" + l
              , c = n[u];
            c && (this.propEventSubscriptions[l] = this.on(l, c))
        }
        this.prevMotionValues = $k(this, this.scrapeMotionValuesFromProps(n, this.prevProps || {}, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(n) {
        return this.props.variants ? this.props.variants[n] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(n) {
        const i = this.getClosestVariantNode();
        if (i)
            return i.variantChildren && i.variantChildren.add(n),
            () => i.variantChildren.delete(n)
    }
    addValue(n, i) {
        const o = this.values.get(n);
        i !== o && (o && this.removeValue(n),
        this.bindToMotionValue(n, i),
        this.values.set(n, i),
        this.latestValues[n] = i.get())
    }
    removeValue(n) {
        this.values.delete(n);
        const i = this.valueSubscriptions.get(n);
        i && (i(),
        this.valueSubscriptions.delete(n)),
        delete this.latestValues[n],
        this.removeValueFromRenderState(n, this.renderState)
    }
    hasValue(n) {
        return this.values.has(n)
    }
    getValue(n, i) {
        if (this.props.values && this.props.values[n])
            return this.props.values[n];
        let o = this.values.get(n);
        return o === void 0 && i !== void 0 && (o = gs(i === null ? void 0 : i, {
            owner: this
        }),
        this.addValue(n, o)),
        o
    }
    readValue(n, i) {
        let o = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options);
        return o != null && (typeof o == "string" && (a0(o) || u0(o)) ? o = parseFloat(o) : !Wk(o) && $n.test(i) && (o = ey(n, i)),
        this.setBaseTarget(n, Dt(o) ? o.get() : o)),
        Dt(o) ? o.get() : o
    }
    setBaseTarget(n, i) {
        this.baseTarget[n] = i
    }
    getBaseTarget(n) {
        var u;
        const {initial: i} = this.props;
        let o;
        if (typeof i == "string" || typeof i == "object") {
            const c = Dd(this.props, i, (u = this.presenceContext) == null ? void 0 : u.custom);
            c && (o = c[n])
        }
        if (i && o !== void 0)
            return o;
        const l = this.getBaseTargetFromProps(this.props, n);
        return l !== void 0 && !Dt(l) ? l : this.initialValues[n] !== void 0 && o === void 0 ? void 0 : this.baseTarget[n]
    }
    on(n, i) {
        return this.events[n] || (this.events[n] = new wd),
        this.events[n].add(i)
    }
    notify(n, ...i) {
        this.events[n] && this.events[n].notify(...i)
    }
    scheduleRenderMicrotask() {
        Ld.render(this.render)
    }
}
class cy extends Kk {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = Sk
    }
    sortInstanceNodePosition(n, i) {
        return n.compareDocumentPosition(i) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(n, i) {
        const o = n.style;
        return o ? o[i] : void 0
    }
    removeValueFromRenderState(n, {vars: i, style: o}) {
        delete i[n],
        delete o[n]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: n} = this.props;
        Dt(n) && (this.childSubscription = n.on("change", i => {
            this.current && (this.current.textContent = `${i}`)
        }
        ))
    }
}
class ai {
    constructor(n) {
        this.isMounted = !1,
        this.node = n
    }
    update() {}
}
function dy({top: t, left: n, right: i, bottom: o}) {
    return {
        x: {
            min: n,
            max: i
        },
        y: {
            min: t,
            max: o
        }
    }
}
function Jk({x: t, y: n}) {
    return {
        top: n.min,
        right: t.max,
        bottom: n.max,
        left: t.min
    }
}
function Xk(t, n) {
    if (!n)
        return t;
    const i = n({
        x: t.left,
        y: t.top
    })
      , o = n({
        x: t.right,
        y: t.bottom
    });
    return {
        top: i.y,
        left: i.x,
        bottom: o.y,
        right: o.x
    }
}
function yc(t) {
    return t === void 0 || t === 1
}
function Xc({scale: t, scaleX: n, scaleY: i}) {
    return !yc(t) || !yc(n) || !yc(i)
}
function Ri(t) {
    return Xc(t) || fy(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function fy(t) {
    return km(t.x) || km(t.y)
}
function km(t) {
    return t && t !== "0%"
}
function ll(t, n, i) {
    const o = t - i
      , l = n * o;
    return i + l
}
function Cm(t, n, i, o, l) {
    return l !== void 0 && (t = ll(t, l, o)),
    ll(t, i, o) + n
}
function Qc(t, n=0, i=1, o, l) {
    t.min = Cm(t.min, n, i, o, l),
    t.max = Cm(t.max, n, i, o, l)
}
function hy(t, {x: n, y: i}) {
    Qc(t.x, n.translate, n.scale, n.originPoint),
    Qc(t.y, i.translate, i.scale, i.originPoint)
}
const Em = .999999999999
  , Nm = 1.0000000000001;
function Qk(t, n, i, o=!1) {
    var f;
    const l = i.length;
    if (!l)
        return;
    n.x = n.y = 1;
    let u, c;
    for (let m = 0; m < l; m++) {
        u = i[m],
        c = u.projectionDelta;
        const {visualElement: y} = u.options;
        y && y.props.style && y.props.style.display === "contents" || (o && u.options.layoutScroll && u.scroll && u !== u.root && (sr(t.x, -u.scroll.offset.x),
        sr(t.y, -u.scroll.offset.y)),
        c && (n.x *= c.x.scale,
        n.y *= c.y.scale,
        hy(t, c)),
        o && Ri(u.latestValues) && qa(t, u.latestValues, (f = u.layout) == null ? void 0 : f.layoutBox))
    }
    n.x < Nm && n.x > Em && (n.x = 1),
    n.y < Nm && n.y > Em && (n.y = 1)
}
function sr(t, n) {
    t.min += n,
    t.max += n
}
function jm(t, n, i, o, l=.5) {
    const u = Qe(t.min, t.max, l);
    Qc(t, n, i, u, o)
}
function Tm(t, n) {
    return typeof t == "string" ? parseFloat(t) / 100 * (n.max - n.min) : t
}
function qa(t, n, i) {
    const o = i ?? t;
    jm(t.x, Tm(n.x, o.x), n.scaleX, n.scale, n.originX),
    jm(t.y, Tm(n.y, o.y), n.scaleY, n.scale, n.originY)
}
function py(t, n) {
    return dy(Xk(t.getBoundingClientRect(), n))
}
function qk(t, n, i) {
    const o = py(t, i)
      , {scroll: l} = n;
    return l && (sr(o.x, l.offset.x),
    sr(o.y, l.offset.y)),
    o
}
const Zk = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , eC = vs.length;
function tC(t, n, i) {
    let o = ""
      , l = !0;
    for (let u = 0; u < eC; u++) {
        const c = vs[u]
          , f = t[c];
        if (f === void 0)
            continue;
        let m = !0;
        if (typeof f == "number")
            m = f === (c.startsWith("scale") ? 1 : 0);
        else {
            const y = parseFloat(f);
            m = c.startsWith("scale") ? y === 1 : y === 0
        }
        if (!m || i) {
            const y = ny(f, _d[c]);
            if (!m) {
                l = !1;
                const v = Zk[c] || c;
                o += `${v}(${y}) `
            }
            i && (n[c] = y)
        }
    }
    return o = o.trim(),
    i ? o = i(n, l ? "" : o) : l && (o = "none"),
    o
}
function Id(t, n, i) {
    const {style: o, vars: l, transformOrigin: u} = t;
    let c = !1
      , f = !1;
    for (const m in n) {
        const y = n[m];
        if (xs.has(m)) {
            c = !0;
            continue
        } else if (C0(m)) {
            l[m] = y;
            continue
        } else {
            const v = ny(y, _d[m]);
            m.startsWith("origin") ? (f = !0,
            u[m] = v) : o[m] = v
        }
    }
    if (n.transform || (c || i ? o.transform = tC(n, t.transform, i) : o.transform && (o.transform = "none")),
    f) {
        const {originX: m="50%", originY: y="50%", originZ: v=0} = u;
        o.transformOrigin = `${m} ${y} ${v}`
    }
}
function my(t, {style: n, vars: i}, o, l) {
    const u = t.style;
    let c;
    for (c in n)
        u[c] = n[c];
    l == null || l.applyProjectionStyles(u, o);
    for (c in i)
        u.setProperty(c, i[c])
}
function Rm(t, n) {
    return n.max === n.min ? 0 : t / (n.max - n.min) * 100
}
const ro = {
    correct: (t, n) => {
        if (!n.target)
            return t;
        if (typeof t == "string")
            if (he.test(t))
                t = parseFloat(t);
            else
                return t;
        const i = Rm(t, n.target.x)
          , o = Rm(t, n.target.y);
        return `${i}% ${o}%`
    }
}
  , nC = {
    correct: (t, {treeScale: n, projectionDelta: i}) => {
        const o = t
          , l = $n.parse(t);
        if (l.length > 5)
            return o;
        const u = $n.createTransformer(t)
          , c = typeof l[0] != "number" ? 1 : 0
          , f = i.x.scale * n.x
          , m = i.y.scale * n.y;
        l[0 + c] /= f,
        l[1 + c] /= m;
        const y = Qe(f, m, .5);
        return typeof l[2 + c] == "number" && (l[2 + c] /= y),
        typeof l[3 + c] == "number" && (l[3 + c] /= y),
        u(l)
    }
}
  , qc = {
    borderRadius: {
        ...ro,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ro,
    borderTopRightRadius: ro,
    borderBottomLeftRadius: ro,
    borderBottomRightRadius: ro,
    boxShadow: nC
};
function gy(t, {layout: n, layoutId: i}) {
    return xs.has(t) || t.startsWith("origin") || (n || i !== void 0) && (!!qc[t] || t === "opacity")
}
function Fd(t, n, i) {
    var c;
    const o = t.style
      , l = n == null ? void 0 : n.style
      , u = {};
    if (!o)
        return u;
    for (const f in o)
        (Dt(o[f]) || l && Dt(l[f]) || gy(f, t) || ((c = i == null ? void 0 : i.getValue(f)) == null ? void 0 : c.liveStyle) !== void 0) && (u[f] = o[f]);
    return u
}
function rC(t) {
    return window.getComputedStyle(t)
}
class iC extends cy {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = my
    }
    readValueFromInstance(n, i) {
        var o;
        if (xs.has(i))
            return (o = this.projection) != null && o.isProjecting ? Oc(i) : CS(n, i);
        {
            const l = rC(n)
              , u = (C0(i) ? l.getPropertyValue(i) : l[i]) || 0;
            return typeof u == "string" ? u.trim() : u
        }
    }
    measureInstanceViewportBox(n, {transformPagePoint: i}) {
        return py(n, i)
    }
    build(n, i, o) {
        Id(n, i, o.transformTemplate)
    }
    scrapeMotionValuesFromProps(n, i, o) {
        return Fd(n, i, o)
    }
}
const sC = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , oC = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function aC(t, n, i=1, o=0, l=!0) {
    t.pathLength = 1;
    const u = l ? sC : oC;
    t[u.offset] = `${-o}`,
    t[u.array] = `${n} ${i}`
}
const lC = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function yy(t, {attrX: n, attrY: i, attrScale: o, pathLength: l, pathSpacing: u=1, pathOffset: c=0, ...f}, m, y, v) {
    if (Id(t, f, y),
    m) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: g, style: w} = t;
    g.transform && (w.transform = g.transform,
    delete g.transform),
    (w.transform || g.transformOrigin) && (w.transformOrigin = g.transformOrigin ?? "50% 50%",
    delete g.transformOrigin),
    w.transform && (w.transformBox = (v == null ? void 0 : v.transformBox) ?? "fill-box",
    delete g.transformBox);
    for (const b of lC)
        g[b] !== void 0 && (w[b] = g[b],
        delete g[b]);
    n !== void 0 && (g.x = n),
    i !== void 0 && (g.y = i),
    o !== void 0 && (g.scale = o),
    l !== void 0 && aC(g, l, u, c, !1)
}
const vy = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , xy = t => typeof t == "string" && t.toLowerCase() === "svg";
function uC(t, n, i, o) {
    my(t, n, void 0, o);
    for (const l in n.attrs)
        t.setAttribute(vy.has(l) ? l : Ad(l), n.attrs[l])
}
function wy(t, n, i) {
    const o = Fd(t, n, i);
    for (const l in t)
        if (Dt(t[l]) || Dt(n[l])) {
            const u = vs.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
            o[u] = t[l]
        }
    return o
}
class cC extends cy {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = St
    }
    getBaseTargetFromProps(n, i) {
        return n[i]
    }
    readValueFromInstance(n, i) {
        if (xs.has(i)) {
            const o = Z0(i);
            return o && o.default || 0
        }
        return i = vy.has(i) ? i : Ad(i),
        n.getAttribute(i)
    }
    scrapeMotionValuesFromProps(n, i, o) {
        return wy(n, i, o)
    }
    build(n, i, o) {
        yy(n, i, this.isSVGTag, o.transformTemplate, o.style)
    }
    renderInstance(n, i, o, l) {
        uC(n, i, o, l)
    }
    mount(n) {
        this.isSVGTag = xy(n.tagName),
        super.mount(n)
    }
}
const dC = Bd.length;
function by(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const i = t.parent ? by(t.parent) || {} : {};
        return t.props.initial !== void 0 && (i.initial = t.props.initial),
        i
    }
    const n = {};
    for (let i = 0; i < dC; i++) {
        const o = Bd[i]
          , l = t.props[o];
        (bo(l) || l === !1) && (n[o] = l)
    }
    return n
}
function Sy(t, n) {
    if (!Array.isArray(n))
        return !1;
    const i = n.length;
    if (i !== t.length)
        return !1;
    for (let o = 0; o < i; o++)
        if (n[o] !== t[o])
            return !1;
    return !0
}
const fC = [...Od].reverse()
  , hC = Od.length;
function pC(t) {
    return n => Promise.all(n.map( ({animation: i, options: o}) => dk(t, i, o)))
}
function mC(t) {
    let n = pC(t)
      , i = Mm()
      , o = !0
      , l = !1;
    const u = y => (v, g) => {
        var b;
        const w = Li(t, g, y === "exit" ? (b = t.presenceContext) == null ? void 0 : b.custom : void 0);
        if (w) {
            const {transition: C, transitionEnd: M, ...N} = w;
            v = {
                ...v,
                ...N,
                ...M
            }
        }
        return v
    }
    ;
    function c(y) {
        n = y(t)
    }
    function f(y) {
        const {props: v} = t
          , g = by(t.parent) || {}
          , w = []
          , b = new Set;
        let C = {}
          , M = 1 / 0;
        for (let A = 0; A < hC; A++) {
            const L = fC[A]
              , B = i[L]
              , W = v[L] !== void 0 ? v[L] : g[L]
              , U = bo(W)
              , se = L === y ? B.isActive : null;
            se === !1 && (M = A);
            let D = W === g[L] && W !== v[L] && U;
            if (D && (o || l) && t.manuallyAnimateOnMount && (D = !1),
            B.protectedKeys = {
                ...C
            },
            !B.isActive && se === null || !W && !B.prevProp || yl(W) || typeof W == "boolean")
                continue;
            if (L === "exit" && B.isActive && se !== !0) {
                B.prevResolvedValues && (C = {
                    ...C,
                    ...B.prevResolvedValues
                });
                continue
            }
            const H = gC(B.prevProp, W);
            let te = H || L === y && B.isActive && !D && U || A > M && U
              , X = !1;
            const ae = Array.isArray(W) ? W : [W];
            let ke = ae.reduce(u(L), {});
            se === !1 && (ke = {});
            const {prevResolvedValues: Ae={}} = B
              , je = {
                ...Ae,
                ...ke
            }
              , Re = F => {
                te = !0,
                b.has(F) && (X = !0,
                b.delete(F)),
                B.needsAnimating[F] = !0;
                const q = t.getValue(F);
                q && (q.liveStyle = !1)
            }
            ;
            for (const F in je) {
                const q = ke[F]
                  , K = Ae[F];
                if (C.hasOwnProperty(F))
                    continue;
                let j = !1;
                $c(q) && $c(K) ? j = !Sy(q, K) : j = q !== K,
                j ? q != null ? Re(F) : b.add(F) : q !== void 0 && b.has(F) ? Re(F) : B.protectedKeys[F] = !0
            }
            B.prevProp = W,
            B.prevResolvedValues = ke,
            B.isActive && (C = {
                ...C,
                ...ke
            }),
            (o || l) && t.blockInitialAnimation && (te = !1);
            const ne = D && H;
            te && (!ne || X) && w.push(...ae.map(F => {
                const q = {
                    type: L
                };
                if (typeof F == "string" && (o || l) && !ne && t.manuallyAnimateOnMount && t.parent) {
                    const {parent: K} = t
                      , j = Li(K, F);
                    if (K.enteringChildren && j) {
                        const {delayChildren: I} = j.transition || {};
                        q.delay = $0(K.enteringChildren, t, I)
                    }
                }
                return {
                    animation: F,
                    options: q
                }
            }
            ))
        }
        if (b.size) {
            const A = {};
            if (typeof v.initial != "boolean") {
                const L = Li(t, Array.isArray(v.initial) ? v.initial[0] : v.initial);
                L && L.transition && (A.transition = L.transition)
            }
            b.forEach(L => {
                const B = t.getBaseTarget(L)
                  , W = t.getValue(L);
                W && (W.liveStyle = !0),
                A[L] = B ?? null
            }
            ),
            w.push({
                animation: A
            })
        }
        let N = !!w.length;
        return o && (v.initial === !1 || v.initial === v.animate) && !t.manuallyAnimateOnMount && (N = !1),
        o = !1,
        l = !1,
        N ? n(w) : Promise.resolve()
    }
    function m(y, v) {
        var w;
        if (i[y].isActive === v)
            return Promise.resolve();
        (w = t.variantChildren) == null || w.forEach(b => {
            var C;
            return (C = b.animationState) == null ? void 0 : C.setActive(y, v)
        }
        ),
        i[y].isActive = v;
        const g = f(y);
        for (const b in i)
            i[b].protectedKeys = {};
        return g
    }
    return {
        animateChanges: f,
        setActive: m,
        setAnimateFunction: c,
        getState: () => i,
        reset: () => {
            i = Mm(),
            l = !0
        }
    }
}
function gC(t, n) {
    return typeof n == "string" ? n !== t : Array.isArray(n) ? !Sy(n, t) : !1
}
function ji(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function Mm() {
    return {
        animate: ji(!0),
        whileInView: ji(),
        whileHover: ji(),
        whileTap: ji(),
        whileDrag: ji(),
        whileFocus: ji(),
        exit: ji()
    }
}
function Zc(t, n) {
    t.min = n.min,
    t.max = n.max
}
function Fn(t, n) {
    Zc(t.x, n.x),
    Zc(t.y, n.y)
}
function Pm(t, n) {
    t.translate = n.translate,
    t.scale = n.scale,
    t.originPoint = n.originPoint,
    t.origin = n.origin
}
const ky = 1e-4
  , yC = 1 - ky
  , vC = 1 + ky
  , Cy = .01
  , xC = 0 - Cy
  , wC = 0 + Cy;
function Jt(t) {
    return t.max - t.min
}
function bC(t, n, i) {
    return Math.abs(t - n) <= i
}
function Dm(t, n, i, o=.5) {
    t.origin = o,
    t.originPoint = Qe(n.min, n.max, t.origin),
    t.scale = Jt(i) / Jt(n),
    t.translate = Qe(i.min, i.max, t.origin) - t.originPoint,
    (t.scale >= yC && t.scale <= vC || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= xC && t.translate <= wC || isNaN(t.translate)) && (t.translate = 0)
}
function po(t, n, i, o) {
    Dm(t.x, n.x, i.x, o ? o.originX : void 0),
    Dm(t.y, n.y, i.y, o ? o.originY : void 0)
}
function Am(t, n, i, o=0) {
    const l = o ? Qe(i.min, i.max, o) : i.min;
    t.min = l + n.min,
    t.max = t.min + Jt(n)
}
function SC(t, n, i, o) {
    Am(t.x, n.x, i.x, o == null ? void 0 : o.x),
    Am(t.y, n.y, i.y, o == null ? void 0 : o.y)
}
function _m(t, n, i, o=0) {
    const l = o ? Qe(i.min, i.max, o) : i.min;
    t.min = n.min - l,
    t.max = t.min + Jt(n)
}
function ul(t, n, i, o) {
    _m(t.x, n.x, i.x, o == null ? void 0 : o.x),
    _m(t.y, n.y, i.y, o == null ? void 0 : o.y)
}
function Lm(t, n, i, o, l) {
    return t -= n,
    t = ll(t, 1 / i, o),
    l !== void 0 && (t = ll(t, 1 / l, o)),
    t
}
function kC(t, n=0, i=1, o=.5, l, u=t, c=t) {
    if (ar.test(n) && (n = parseFloat(n),
    n = Qe(c.min, c.max, n / 100) - c.min),
    typeof n != "number")
        return;
    let f = Qe(u.min, u.max, o);
    t === u && (f -= n),
    t.min = Lm(t.min, n, i, f, l),
    t.max = Lm(t.max, n, i, f, l)
}
function zm(t, n, [i,o,l], u, c) {
    kC(t, n[i], n[o], n[l], n.scale, u, c)
}
const CC = ["x", "scaleX", "originX"]
  , EC = ["y", "scaleY", "originY"];
function Vm(t, n, i, o) {
    zm(t.x, n, CC, i ? i.x : void 0, o ? o.x : void 0),
    zm(t.y, n, EC, i ? i.y : void 0, o ? o.y : void 0)
}
function Om(t) {
    return t.translate === 0 && t.scale === 1
}
function Ey(t) {
    return Om(t.x) && Om(t.y)
}
function Bm(t, n) {
    return t.min === n.min && t.max === n.max
}
function NC(t, n) {
    return Bm(t.x, n.x) && Bm(t.y, n.y)
}
function Im(t, n) {
    return Math.round(t.min) === Math.round(n.min) && Math.round(t.max) === Math.round(n.max)
}
function Ny(t, n) {
    return Im(t.x, n.x) && Im(t.y, n.y)
}
function Fm(t) {
    return Jt(t.x) / Jt(t.y)
}
function Wm(t, n) {
    return t.translate === n.translate && t.scale === n.scale && t.originPoint === n.originPoint
}
function ir(t) {
    return [t("x"), t("y")]
}
function jC(t, n, i) {
    let o = "";
    const l = t.x.translate / n.x
      , u = t.y.translate / n.y
      , c = (i == null ? void 0 : i.z) || 0;
    if ((l || u || c) && (o = `translate3d(${l}px, ${u}px, ${c}px) `),
    (n.x !== 1 || n.y !== 1) && (o += `scale(${1 / n.x}, ${1 / n.y}) `),
    i) {
        const {transformPerspective: y, rotate: v, rotateX: g, rotateY: w, skewX: b, skewY: C} = i;
        y && (o = `perspective(${y}px) ${o}`),
        v && (o += `rotate(${v}deg) `),
        g && (o += `rotateX(${g}deg) `),
        w && (o += `rotateY(${w}deg) `),
        b && (o += `skewX(${b}deg) `),
        C && (o += `skewY(${C}deg) `)
    }
    const f = t.x.scale * n.x
      , m = t.y.scale * n.y;
    return (f !== 1 || m !== 1) && (o += `scale(${f}, ${m})`),
    o || "none"
}
const jy = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  , TC = jy.length
  , Um = t => typeof t == "string" ? parseFloat(t) : t
  , $m = t => typeof t == "number" || he.test(t);
function RC(t, n, i, o, l, u) {
    l ? (t.opacity = Qe(0, i.opacity ?? 1, MC(o)),
    t.opacityExit = Qe(n.opacity ?? 1, 0, PC(o))) : u && (t.opacity = Qe(n.opacity ?? 1, i.opacity ?? 1, o));
    for (let c = 0; c < TC; c++) {
        const f = jy[c];
        let m = Hm(n, f)
          , y = Hm(i, f);
        if (m === void 0 && y === void 0)
            continue;
        m || (m = 0),
        y || (y = 0),
        m === 0 || y === 0 || $m(m) === $m(y) ? (t[f] = Math.max(Qe(Um(m), Um(y), o), 0),
        (ar.test(y) || ar.test(m)) && (t[f] += "%")) : t[f] = y
    }
    (n.rotate || i.rotate) && (t.rotate = Qe(n.rotate || 0, i.rotate || 0, o))
}
function Hm(t, n) {
    return t[n] !== void 0 ? t[n] : t.borderRadius
}
const MC = Ty(0, .5, v0)
  , PC = Ty(.5, .95, Rn);
function Ty(t, n, i) {
    return o => o < t ? 0 : o > n ? 1 : i(xo(t, n, o))
}
function DC(t, n, i) {
    const o = Dt(t) ? t : gs(t);
    return o.start(Pd("", o, n, i)),
    o.animation
}
function So(t, n, i, o={
    passive: !0
}) {
    return t.addEventListener(n, i, o),
    () => t.removeEventListener(n, i)
}
const AC = (t, n) => t.depth - n.depth;
class _C {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(n) {
        vd(this.children, n),
        this.isDirty = !0
    }
    remove(n) {
        nl(this.children, n),
        this.isDirty = !0
    }
    forEach(n) {
        this.isDirty && this.children.sort(AC),
        this.isDirty = !1,
        this.children.forEach(n)
    }
}
function LC(t, n) {
    const i = Kt.now()
      , o = ({timestamp: l}) => {
        const u = l - i;
        u >= n && (ii(o),
        t(u - n))
    }
    ;
    return Ye.setup(o, !0),
    () => ii(o)
}
function Za(t) {
    return Dt(t) ? t.get() : t
}
class zC {
    constructor() {
        this.members = []
    }
    add(n) {
        vd(this.members, n);
        for (let i = this.members.length - 1; i >= 0; i--) {
            const o = this.members[i];
            if (o === n || o === this.lead || o === this.prevLead)
                continue;
            const l = o.instance;
            (!l || l.isConnected === !1) && !o.snapshot && (nl(this.members, o),
            o.unmount())
        }
        n.scheduleRender()
    }
    remove(n) {
        if (nl(this.members, n),
        n === this.prevLead && (this.prevLead = void 0),
        n === this.lead) {
            const i = this.members[this.members.length - 1];
            i && this.promote(i)
        }
    }
    relegate(n) {
        var i;
        for (let o = this.members.indexOf(n) - 1; o >= 0; o--) {
            const l = this.members[o];
            if (l.isPresent !== !1 && ((i = l.instance) == null ? void 0 : i.isConnected) !== !1)
                return this.promote(l),
                !0
        }
        return !1
    }
    promote(n, i) {
        var l;
        const o = this.lead;
        if (n !== o && (this.prevLead = o,
        this.lead = n,
        n.show(),
        o)) {
            o.updateSnapshot(),
            n.scheduleRender();
            const {layoutDependency: u} = o.options
              , {layoutDependency: c} = n.options;
            (u === void 0 || u !== c) && (n.resumeFrom = o,
            i && (o.preserveOpacity = !0),
            o.snapshot && (n.snapshot = o.snapshot,
            n.snapshot.latestValues = o.animationValues || o.latestValues),
            (l = n.root) != null && l.isUpdating && (n.isLayoutDirty = !0)),
            n.options.crossfade === !1 && o.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(n => {
            var i, o, l, u, c;
            (o = (i = n.options).onExitComplete) == null || o.call(i),
            (c = (l = n.resumingFrom) == null ? void 0 : (u = l.options).onExitComplete) == null || c.call(u)
        }
        )
    }
    scheduleRender() {
        this.members.forEach(n => n.instance && n.scheduleRender(!1))
    }
    removeLeadSnapshot() {
        var n;
        (n = this.lead) != null && n.snapshot && (this.lead.snapshot = void 0)
    }
}
const el = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , vc = ["", "X", "Y", "Z"]
  , VC = 1e3;
let OC = 0;
function xc(t, n, i, o) {
    const {latestValues: l} = n;
    l[t] && (i[t] = l[t],
    n.setStaticValue(t, 0),
    o && (o[t] = 0))
}
function Ry(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: n} = t.options;
    if (!n)
        return;
    const i = J0(n);
    if (window.MotionHasOptimisedAnimation(i, "transform")) {
        const {layout: l, layoutId: u} = t.options;
        window.MotionCancelOptimisedAnimation(i, "transform", Ye, !(l || u))
    }
    const {parent: o} = t;
    o && !o.hasCheckedOptimisedAppear && Ry(o)
}
function My({attachResizeListener: t, defaultParent: n, measureScroll: i, checkIsScrollRoot: o, resetTransform: l}) {
    return class {
        constructor(c={}, f=n == null ? void 0 : n()) {
            this.id = OC++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(FC),
                this.nodes.forEach(GC),
                this.nodes.forEach(KC),
                this.nodes.forEach(WC)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = c,
            this.root = f ? f.root || f : this,
            this.path = f ? [...f.path, f] : [],
            this.parent = f,
            this.depth = f ? f.depth + 1 : 0;
            for (let m = 0; m < this.path.length; m++)
                this.path[m].shouldResetTransform = !0;
            this.root === this && (this.nodes = new _C)
        }
        addEventListener(c, f) {
            return this.eventHandlers.has(c) || this.eventHandlers.set(c, new wd),
            this.eventHandlers.get(c).add(f)
        }
        notifyListeners(c, ...f) {
            const m = this.eventHandlers.get(c);
            m && m.notify(...f)
        }
        hasListeners(c) {
            return this.eventHandlers.has(c)
        }
        mount(c) {
            if (this.instance)
                return;
            this.isSVG = Vd(c) && !Ik(c),
            this.instance = c;
            const {layoutId: f, layout: m, visualElement: y} = this.options;
            if (y && !y.current && y.mount(c),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (m || f) && (this.isLayoutDirty = !0),
            t) {
                let v, g = 0;
                const w = () => this.root.updateBlockedByResize = !1;
                Ye.read( () => {
                    g = window.innerWidth
                }
                ),
                t(c, () => {
                    const b = window.innerWidth;
                    b !== g && (g = b,
                    this.root.updateBlockedByResize = !0,
                    v && v(),
                    v = LC(w, 250),
                    el.hasAnimatedSinceResize && (el.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Km)))
                }
                )
            }
            f && this.root.registerSharedNode(f, this),
            this.options.animate !== !1 && y && (f || m) && this.addEventListener("didUpdate", ({delta: v, hasLayoutChanged: g, hasRelativeLayoutChanged: w, layout: b}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const C = this.options.transition || y.getDefaultTransition() || ZC
                  , {onLayoutAnimationStart: M, onLayoutAnimationComplete: N} = y.getProps()
                  , A = !this.targetLayout || !Ny(this.targetLayout, b)
                  , L = !g && w;
                if (this.options.layoutRoot || this.resumeFrom || L || g && (A || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const B = {
                        ...Md(C, "layout"),
                        onPlay: M,
                        onComplete: N
                    };
                    (y.shouldReduceMotion || this.options.layoutRoot) && (B.delay = 0,
                    B.type = !1),
                    this.startAnimation(B),
                    this.setAnimationOrigin(v, L)
                } else
                    g || Km(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = b
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const c = this.getStack();
            c && c.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            ii(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(JC),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: c} = this.options;
            return c && c.getProps().transformTemplate
        }
        willUpdate(c=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ry(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let v = 0; v < this.path.length; v++) {
                const g = this.path[v];
                g.shouldResetTransform = !0,
                (typeof g.latestValues.x == "string" || typeof g.latestValues.y == "string") && (g.isLayoutDirty = !0),
                g.updateScroll("snapshot"),
                g.options.layoutRoot && g.willUpdate(!1)
            }
            const {layoutId: f, layout: m} = this.options;
            if (f === void 0 && !m)
                return;
            const y = this.getTransformTemplate();
            this.prevTransformTemplateValue = y ? y(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            c && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                const m = this.updateBlockedByResize;
                this.unblockUpdate(),
                this.updateBlockedByResize = !1,
                this.clearAllSnapshots(),
                m && this.nodes.forEach($C),
                this.nodes.forEach(Ym);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(Gm);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(HC),
            this.nodes.forEach(YC),
            this.nodes.forEach(BC),
            this.nodes.forEach(IC)) : this.nodes.forEach(Gm),
            this.clearAllSnapshots();
            const f = Kt.now();
            Pt.delta = ur(0, 1e3 / 60, f - Pt.timestamp),
            Pt.timestamp = f,
            Pt.isProcessing = !0,
            cc.update.process(Pt),
            cc.preRender.process(Pt),
            cc.render.process(Pt),
            Pt.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Ld.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(UC),
            this.sharedNodes.forEach(XC)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ye.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ye.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Jt(this.snapshot.measuredBox.x) && !Jt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let m = 0; m < this.path.length; m++)
                    this.path[m].updateScroll();
            const c = this.layout;
            this.layout = this.measure(!1),
            this.layoutVersion++,
            this.layoutCorrected || (this.layoutCorrected = St()),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: f} = this.options;
            f && f.notify("LayoutMeasure", this.layout.layoutBox, c ? c.layoutBox : void 0)
        }
        updateScroll(c="measure") {
            let f = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === c && (f = !1),
            f && this.instance) {
                const m = o(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: c,
                    isRoot: m,
                    offset: i(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : m
                }
            }
        }
        resetTransform() {
            if (!l)
                return;
            const c = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , f = this.projectionDelta && !Ey(this.projectionDelta)
              , m = this.getTransformTemplate()
              , y = m ? m(this.latestValues, "") : void 0
              , v = y !== this.prevTransformTemplateValue;
            c && this.instance && (f || Ri(this.latestValues) || v) && (l(this.instance, y),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(c=!0) {
            const f = this.measurePageBox();
            let m = this.removeElementScroll(f);
            return c && (m = this.removeTransform(m)),
            eE(m),
            {
                animationId: this.root.animationId,
                measuredBox: f,
                layoutBox: m,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var y;
            const {visualElement: c} = this.options;
            if (!c)
                return St();
            const f = c.measureViewportBox();
            if (!(((y = this.scroll) == null ? void 0 : y.wasRoot) || this.path.some(tE))) {
                const {scroll: v} = this.root;
                v && (sr(f.x, v.offset.x),
                sr(f.y, v.offset.y))
            }
            return f
        }
        removeElementScroll(c) {
            var m;
            const f = St();
            if (Fn(f, c),
            (m = this.scroll) != null && m.wasRoot)
                return f;
            for (let y = 0; y < this.path.length; y++) {
                const v = this.path[y]
                  , {scroll: g, options: w} = v;
                v !== this.root && g && w.layoutScroll && (g.wasRoot && Fn(f, c),
                sr(f.x, g.offset.x),
                sr(f.y, g.offset.y))
            }
            return f
        }
        applyTransform(c, f=!1, m) {
            var v, g;
            const y = m || St();
            Fn(y, c);
            for (let w = 0; w < this.path.length; w++) {
                const b = this.path[w];
                !f && b.options.layoutScroll && b.scroll && b !== b.root && (sr(y.x, -b.scroll.offset.x),
                sr(y.y, -b.scroll.offset.y)),
                Ri(b.latestValues) && qa(y, b.latestValues, (v = b.layout) == null ? void 0 : v.layoutBox)
            }
            return Ri(this.latestValues) && qa(y, this.latestValues, (g = this.layout) == null ? void 0 : g.layoutBox),
            y
        }
        removeTransform(c) {
            var m;
            const f = St();
            Fn(f, c);
            for (let y = 0; y < this.path.length; y++) {
                const v = this.path[y];
                if (!Ri(v.latestValues))
                    continue;
                let g;
                v.instance && (Xc(v.latestValues) && v.updateSnapshot(),
                g = St(),
                Fn(g, v.measurePageBox())),
                Vm(f, v.latestValues, (m = v.snapshot) == null ? void 0 : m.layoutBox, g)
            }
            return Ri(this.latestValues) && Vm(f, this.latestValues),
            f
        }
        setTargetDelta(c) {
            this.targetDelta = c,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(c) {
            this.options = {
                ...this.options,
                ...c,
                crossfade: c.crossfade !== void 0 ? c.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pt.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(c=!1) {
            var b;
            const f = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = f.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = f.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = f.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== f;
            if (!(c || m && this.isSharedProjectionDirty || this.isProjectionDirty || (b = this.parent) != null && b.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: v, layoutId: g} = this.options;
            if (!this.layout || !(v || g))
                return;
            this.resolvedRelativeTargetAt = Pt.timestamp;
            const w = this.getClosestProjectingParent();
            w && this.linkedParentVersion !== w.layoutVersion && !w.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && w && w.layout ? this.createRelativeTarget(w, this.layout.layoutBox, w.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = St(),
            this.targetWithTransforms = St()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            SC(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : Fn(this.target, this.layout.layoutBox),
            hy(this.target, this.targetDelta)) : Fn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            this.options.layoutAnchor !== !1 && w && !!w.resumingFrom == !!this.resumingFrom && !w.options.layoutScroll && w.target && this.animationProgress !== 1 ? this.createRelativeTarget(w, this.target, w.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Xc(this.parent.latestValues) || fy(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(c, f, m) {
            this.relativeParent = c,
            this.linkedParentVersion = c.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = St(),
            this.relativeTargetOrigin = St(),
            ul(this.relativeTargetOrigin, f, m, this.options.layoutAnchor || void 0),
            Fn(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var C;
            const c = this.getLead()
              , f = !!this.resumingFrom || this !== c;
            let m = !0;
            if ((this.isProjectionDirty || (C = this.parent) != null && C.isProjectionDirty) && (m = !1),
            f && (this.isSharedProjectionDirty || this.isTransformDirty) && (m = !1),
            this.resolvedRelativeTargetAt === Pt.timestamp && (m = !1),
            m)
                return;
            const {layout: y, layoutId: v} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(y || v))
                return;
            Fn(this.layoutCorrected, this.layout.layoutBox);
            const g = this.treeScale.x
              , w = this.treeScale.y;
            Qk(this.layoutCorrected, this.treeScale, this.path, f),
            c.layout && !c.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (c.target = c.layout.layoutBox,
            c.targetWithTransforms = St());
            const {target: b} = c;
            if (!b) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Pm(this.prevProjectionDelta.x, this.projectionDelta.x),
            Pm(this.prevProjectionDelta.y, this.projectionDelta.y)),
            po(this.projectionDelta, this.layoutCorrected, b, this.latestValues),
            (this.treeScale.x !== g || this.treeScale.y !== w || !Wm(this.projectionDelta.x, this.prevProjectionDelta.x) || !Wm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", b))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(c=!0) {
            var f;
            if ((f = this.options.visualElement) == null || f.scheduleRender(),
            c) {
                const m = this.getStack();
                m && m.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = hs(),
            this.projectionDelta = hs(),
            this.projectionDeltaWithTransform = hs()
        }
        setAnimationOrigin(c, f=!1) {
            const m = this.snapshot
              , y = m ? m.latestValues : {}
              , v = {
                ...this.latestValues
            }
              , g = hs();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !f;
            const w = St()
              , b = m ? m.source : void 0
              , C = this.layout ? this.layout.source : void 0
              , M = b !== C
              , N = this.getStack()
              , A = !N || N.members.length <= 1
              , L = !!(M && !A && this.options.crossfade === !0 && !this.path.some(qC));
            this.animationProgress = 0;
            let B;
            this.mixTargetDelta = W => {
                const U = W / 1e3;
                Jm(g.x, c.x, U),
                Jm(g.y, c.y, U),
                this.setTargetDelta(g),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ul(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
                QC(this.relativeTarget, this.relativeTargetOrigin, w, U),
                B && NC(this.relativeTarget, B) && (this.isProjectionDirty = !1),
                B || (B = St()),
                Fn(B, this.relativeTarget)),
                M && (this.animationValues = v,
                RC(v, y, this.latestValues, U, L, A)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = U
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(c) {
            var f, m, y;
            this.notifyListeners("animationStart"),
            (f = this.currentAnimation) == null || f.stop(),
            (y = (m = this.resumingFrom) == null ? void 0 : m.currentAnimation) == null || y.stop(),
            this.pendingAnimation && (ii(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ye.update( () => {
                el.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = gs(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = DC(this.motionValue, [0, 1e3], {
                    ...c,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: v => {
                        this.mixTargetDelta(v),
                        c.onUpdate && c.onUpdate(v)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        c.onComplete && c.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const c = this.getStack();
            c && c.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(VC),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const c = this.getLead();
            let {targetWithTransforms: f, target: m, layout: y, latestValues: v} = c;
            if (!(!f || !m || !y)) {
                if (this !== c && this.layout && y && Py(this.options.animationType, this.layout.layoutBox, y.layoutBox)) {
                    m = this.target || St();
                    const g = Jt(this.layout.layoutBox.x);
                    m.x.min = c.target.x.min,
                    m.x.max = m.x.min + g;
                    const w = Jt(this.layout.layoutBox.y);
                    m.y.min = c.target.y.min,
                    m.y.max = m.y.min + w
                }
                Fn(f, m),
                qa(f, v),
                po(this.projectionDeltaWithTransform, this.layoutCorrected, f, v)
            }
        }
        registerSharedNode(c, f) {
            this.sharedNodes.has(c) || this.sharedNodes.set(c, new zC),
            this.sharedNodes.get(c).add(f);
            const y = f.options.initialPromotionConfig;
            f.promote({
                transition: y ? y.transition : void 0,
                preserveFollowOpacity: y && y.shouldPreserveFollowOpacity ? y.shouldPreserveFollowOpacity(f) : void 0
            })
        }
        isLead() {
            const c = this.getStack();
            return c ? c.lead === this : !0
        }
        getLead() {
            var f;
            const {layoutId: c} = this.options;
            return c ? ((f = this.getStack()) == null ? void 0 : f.lead) || this : this
        }
        getPrevLead() {
            var f;
            const {layoutId: c} = this.options;
            return c ? (f = this.getStack()) == null ? void 0 : f.prevLead : void 0
        }
        getStack() {
            const {layoutId: c} = this.options;
            if (c)
                return this.root.sharedNodes.get(c)
        }
        promote({needsReset: c, transition: f, preserveFollowOpacity: m}={}) {
            const y = this.getStack();
            y && y.promote(this, m),
            c && (this.projectionDelta = void 0,
            this.needsReset = !0),
            f && this.setOptions({
                transition: f
            })
        }
        relegate() {
            const c = this.getStack();
            return c ? c.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: c} = this.options;
            if (!c)
                return;
            let f = !1;
            const {latestValues: m} = c;
            if ((m.z || m.rotate || m.rotateX || m.rotateY || m.rotateZ || m.skewX || m.skewY) && (f = !0),
            !f)
                return;
            const y = {};
            m.z && xc("z", c, y, this.animationValues);
            for (let v = 0; v < vc.length; v++)
                xc(`rotate${vc[v]}`, c, y, this.animationValues),
                xc(`skew${vc[v]}`, c, y, this.animationValues);
            c.render();
            for (const v in y)
                c.setStaticValue(v, y[v]),
                this.animationValues && (this.animationValues[v] = y[v]);
            c.scheduleRender()
        }
        applyProjectionStyles(c, f) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                c.visibility = "hidden";
                return
            }
            const m = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                c.visibility = "",
                c.opacity = "",
                c.pointerEvents = Za(f == null ? void 0 : f.pointerEvents) || "",
                c.transform = m ? m(this.latestValues, "") : "none";
                return
            }
            const y = this.getLead();
            if (!this.projectionDelta || !this.layout || !y.target) {
                this.options.layoutId && (c.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                c.pointerEvents = Za(f == null ? void 0 : f.pointerEvents) || ""),
                this.hasProjected && !Ri(this.latestValues) && (c.transform = m ? m({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            c.visibility = "";
            const v = y.animationValues || y.latestValues;
            this.applyTransformsToTarget();
            let g = jC(this.projectionDeltaWithTransform, this.treeScale, v);
            m && (g = m(v, g)),
            c.transform = g;
            const {x: w, y: b} = this.projectionDelta;
            c.transformOrigin = `${w.origin * 100}% ${b.origin * 100}% 0`,
            y.animationValues ? c.opacity = y === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : c.opacity = y === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
            for (const C in qc) {
                if (v[C] === void 0)
                    continue;
                const {correct: M, applyTo: N, isCSSVariable: A} = qc[C]
                  , L = g === "none" ? v[C] : M(v[C], y);
                if (N) {
                    const B = N.length;
                    for (let W = 0; W < B; W++)
                        c[N[W]] = L
                } else
                    A ? this.options.visualElement.renderState.vars[C] = L : c[C] = L
            }
            this.options.layoutId && (c.pointerEvents = y === this ? Za(f == null ? void 0 : f.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(c => {
                var f;
                return (f = c.currentAnimation) == null ? void 0 : f.stop()
            }
            ),
            this.root.nodes.forEach(Ym),
            this.root.sharedNodes.clear()
        }
    }
}
function BC(t) {
    t.updateLayout()
}
function IC(t) {
    var i;
    const n = ((i = t.resumeFrom) == null ? void 0 : i.snapshot) || t.snapshot;
    if (t.isLead() && t.layout && n && t.hasListeners("didUpdate")) {
        const {layoutBox: o, measuredBox: l} = t.layout
          , {animationType: u} = t.options
          , c = n.source !== t.layout.source;
        if (u === "size")
            ir(g => {
                const w = c ? n.measuredBox[g] : n.layoutBox[g]
                  , b = Jt(w);
                w.min = o[g].min,
                w.max = w.min + b
            }
            );
        else if (u === "x" || u === "y") {
            const g = u === "x" ? "y" : "x";
            Zc(c ? n.measuredBox[g] : n.layoutBox[g], o[g])
        } else
            Py(u, n.layoutBox, o) && ir(g => {
                const w = c ? n.measuredBox[g] : n.layoutBox[g]
                  , b = Jt(o[g]);
                w.max = w.min + b,
                t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
                t.relativeTarget[g].max = t.relativeTarget[g].min + b)
            }
            );
        const f = hs();
        po(f, o, n.layoutBox);
        const m = hs();
        c ? po(m, t.applyTransform(l, !0), n.measuredBox) : po(m, o, n.layoutBox);
        const y = !Ey(f);
        let v = !1;
        if (!t.resumeFrom) {
            const g = t.getClosestProjectingParent();
            if (g && !g.resumeFrom) {
                const {snapshot: w, layout: b} = g;
                if (w && b) {
                    const C = t.options.layoutAnchor || void 0
                      , M = St();
                    ul(M, n.layoutBox, w.layoutBox, C);
                    const N = St();
                    ul(N, o, b.layoutBox, C),
                    Ny(M, N) || (v = !0),
                    g.options.layoutRoot && (t.relativeTarget = N,
                    t.relativeTargetOrigin = M,
                    t.relativeParent = g)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: o,
            snapshot: n,
            delta: m,
            layoutDelta: f,
            hasLayoutChanged: y,
            hasRelativeLayoutChanged: v
        })
    } else if (t.isLead()) {
        const {onExitComplete: o} = t.options;
        o && o()
    }
    t.options.transition = void 0
}
function FC(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function WC(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function UC(t) {
    t.clearSnapshot()
}
function Ym(t) {
    t.clearMeasurements()
}
function $C(t) {
    t.isLayoutDirty = !0,
    t.updateLayout()
}
function Gm(t) {
    t.isLayoutDirty = !1
}
function HC(t) {
    t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout,
    t.isLayoutDirty = !0)
}
function YC(t) {
    const {visualElement: n} = t.options;
    n && n.getProps().onBeforeLayoutMeasure && n.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function Km(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function GC(t) {
    t.resolveTargetDelta()
}
function KC(t) {
    t.calcProjection()
}
function JC(t) {
    t.resetSkewAndRotation()
}
function XC(t) {
    t.removeLeadSnapshot()
}
function Jm(t, n, i) {
    t.translate = Qe(n.translate, 0, i),
    t.scale = Qe(n.scale, 1, i),
    t.origin = n.origin,
    t.originPoint = n.originPoint
}
function Xm(t, n, i, o) {
    t.min = Qe(n.min, i.min, o),
    t.max = Qe(n.max, i.max, o)
}
function QC(t, n, i, o) {
    Xm(t.x, n.x, i.x, o),
    Xm(t.y, n.y, i.y, o)
}
function qC(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const ZC = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Qm = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , qm = Qm("applewebkit/") && !Qm("chrome/") ? Math.round : Rn;
function Zm(t) {
    t.min = qm(t.min),
    t.max = qm(t.max)
}
function eE(t) {
    Zm(t.x),
    Zm(t.y)
}
function Py(t, n, i) {
    return t === "position" || t === "preserve-aspect" && !bC(Fm(n), Fm(i), .2)
}
function tE(t) {
    var n;
    return t !== t.root && ((n = t.scroll) == null ? void 0 : n.wasRoot)
}
const nE = My({
    attachResizeListener: (t, n) => So(t, "resize", n),
    measureScroll: () => {
        var t, n;
        return {
            x: document.documentElement.scrollLeft || ((t = document.body) == null ? void 0 : t.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((n = document.body) == null ? void 0 : n.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , wc = {
    current: void 0
}
  , Dy = My({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!wc.current) {
            const t = new nE({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            wc.current = t
        }
        return wc.current
    }
    ,
    resetTransform: (t, n) => {
        t.style.transform = n !== void 0 ? n : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , Wd = E.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
function eg(t, n) {
    if (typeof t == "function")
        return t(n);
    t != null && (t.current = n)
}
function rE(...t) {
    return n => {
        let i = !1;
        const o = t.map(l => {
            const u = eg(l, n);
            return !i && typeof u == "function" && (i = !0),
            u
        }
        );
        if (i)
            return () => {
                for (let l = 0; l < o.length; l++) {
                    const u = o[l];
                    typeof u == "function" ? u() : eg(t[l], null)
                }
            }
    }
}
function iE(...t) {
    return E.useCallback(rE(...t), t)
}
class sE extends E.Component {
    getSnapshotBeforeUpdate(n) {
        const i = this.props.childRef.current;
        if (Ka(i) && n.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const o = i.offsetParent
              , l = Ka(o) && o.offsetWidth || 0
              , u = Ka(o) && o.offsetHeight || 0
              , c = getComputedStyle(i)
              , f = this.props.sizeRef.current;
            f.height = parseFloat(c.height),
            f.width = parseFloat(c.width),
            f.top = i.offsetTop,
            f.left = i.offsetLeft,
            f.right = l - f.width - f.left,
            f.bottom = u - f.height - f.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function oE({children: t, isPresent: n, anchorX: i, anchorY: o, root: l, pop: u}) {
    var w;
    const c = E.useId()
      , f = E.useRef(null)
      , m = E.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: y} = E.useContext(Wd)
      , v = ((w = t.props) == null ? void 0 : w.ref) ?? (t == null ? void 0 : t.ref)
      , g = iE(f, v);
    return E.useInsertionEffect( () => {
        const {width: b, height: C, top: M, left: N, right: A, bottom: L} = m.current;
        if (n || u === !1 || !f.current || !b || !C)
            return;
        const B = i === "left" ? `left: ${N}` : `right: ${A}`
          , W = o === "bottom" ? `bottom: ${L}` : `top: ${M}`;
        f.current.dataset.motionPopId = c;
        const U = document.createElement("style");
        y && (U.nonce = y);
        const se = l ?? document.head;
        return se.appendChild(U),
        U.sheet && U.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${C}px !important;
            ${B}px !important;
            ${W}px !important;
          }
        `),
        () => {
            var D;
            (D = f.current) == null || D.removeAttribute("data-motion-pop-id"),
            se.contains(U) && se.removeChild(U)
        }
    }
    , [n]),
    p.jsx(sE, {
        isPresent: n,
        childRef: f,
        sizeRef: m,
        pop: u,
        children: u === !1 ? t : E.cloneElement(t, {
            ref: g
        })
    })
}
const aE = ({children: t, initial: n, isPresent: i, onExitComplete: o, custom: l, presenceAffectsLayout: u, mode: c, anchorX: f, anchorY: m, root: y}) => {
    const v = yd(lE)
      , g = E.useId();
    let w = !0
      , b = E.useMemo( () => (w = !1,
    {
        id: g,
        initial: n,
        isPresent: i,
        custom: l,
        onExitComplete: C => {
            v.set(C, !0);
            for (const M of v.values())
                if (!M)
                    return;
            o && o()
        }
        ,
        register: C => (v.set(C, !1),
        () => v.delete(C))
    }), [i, v, o]);
    return u && w && (b = {
        ...b
    }),
    E.useMemo( () => {
        v.forEach( (C, M) => v.set(M, !1))
    }
    , [i]),
    E.useEffect( () => {
        !i && !v.size && o && o()
    }
    , [i]),
    t = p.jsx(oE, {
        pop: c === "popLayout",
        isPresent: i,
        anchorX: f,
        anchorY: m,
        root: y,
        children: t
    }),
    p.jsx(ml.Provider, {
        value: b,
        children: t
    })
}
;
function lE() {
    return new Map
}
function Ay(t=!0) {
    const n = E.useContext(ml);
    if (n === null)
        return [!0, null];
    const {isPresent: i, onExitComplete: o, register: l} = n
      , u = E.useId();
    E.useEffect( () => {
        if (t)
            return l(u)
    }
    , [t]);
    const c = E.useCallback( () => t && o && o(u), [u, o, t]);
    return !i && o ? [!1, c] : [!0]
}
const Ba = t => t.key || "";
function tg(t) {
    const n = [];
    return E.Children.forEach(t, i => {
        E.isValidElement(i) && n.push(i)
    }
    ),
    n
}
const uE = ({children: t, custom: n, initial: i=!0, onExitComplete: o, presenceAffectsLayout: l=!0, mode: u="sync", propagate: c=!1, anchorX: f="left", anchorY: m="top", root: y}) => {
    const [v,g] = Ay(c)
      , w = E.useMemo( () => tg(t), [t])
      , b = c && !v ? [] : w.map(Ba)
      , C = E.useRef(!0)
      , M = E.useRef(w)
      , N = yd( () => new Map)
      , A = E.useRef(new Set)
      , [L,B] = E.useState(w)
      , [W,U] = E.useState(w);
    o0( () => {
        C.current = !1,
        M.current = w;
        for (let H = 0; H < W.length; H++) {
            const te = Ba(W[H]);
            b.includes(te) ? (N.delete(te),
            A.current.delete(te)) : N.get(te) !== !0 && N.set(te, !1)
        }
    }
    , [W, b.length, b.join("-")]);
    const se = [];
    if (w !== L) {
        let H = [...w];
        for (let te = 0; te < W.length; te++) {
            const X = W[te]
              , ae = Ba(X);
            b.includes(ae) || (H.splice(te, 0, X),
            se.push(X))
        }
        return u === "wait" && se.length && (H = se),
        U(tg(H)),
        B(w),
        null
    }
    const {forceRender: D} = E.useContext(gd);
    return p.jsx(p.Fragment, {
        children: W.map(H => {
            const te = Ba(H)
              , X = c && !v ? !1 : w === W || b.includes(te)
              , ae = () => {
                if (A.current.has(te))
                    return;
                if (N.has(te))
                    A.current.add(te),
                    N.set(te, !0);
                else
                    return;
                let ke = !0;
                N.forEach(Ae => {
                    Ae || (ke = !1)
                }
                ),
                ke && (D == null || D(),
                U(M.current),
                c && (g == null || g()),
                o && o())
            }
            ;
            return p.jsx(aE, {
                isPresent: X,
                initial: !C.current || i ? void 0 : !1,
                custom: n,
                presenceAffectsLayout: l,
                mode: u,
                root: y,
                onExitComplete: X ? void 0 : ae,
                anchorX: f,
                anchorY: m,
                children: H
            }, te)
        }
        )
    })
}
  , _y = E.createContext({
    strict: !1
})
  , ng = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let rg = !1;
function cE() {
    if (rg)
        return;
    const t = {};
    for (const n in ng)
        t[n] = {
            isEnabled: i => ng[n].some(o => !!i[o])
        };
    uy(t),
    rg = !0
}
function Ly() {
    return cE(),
    Gk()
}
function dE(t) {
    const n = Ly();
    for (const i in t)
        n[i] = {
            ...n[i],
            ...t[i]
        };
    uy(n)
}
const fE = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function cl(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || fE.has(t)
}
let zy = t => !cl(t);
function hE(t) {
    typeof t == "function" && (zy = n => n.startsWith("on") ? !cl(n) : t(n))
}
try {
    hE(require("@emotion/is-prop-valid").default)
} catch {}
function pE(t, n, i) {
    const o = {};
    for (const l in t)
        l === "values" && typeof t.values == "object" || Dt(t[l]) || (zy(l) || i === !0 && cl(l) || !n && !cl(l) || t.draggable && l.startsWith("onDrag")) && (o[l] = t[l]);
    return o
}
const xl = E.createContext({});
function mE(t, n) {
    if (vl(t)) {
        const {initial: i, animate: o} = t;
        return {
            initial: i === !1 || bo(i) ? i : void 0,
            animate: bo(o) ? o : void 0
        }
    }
    return t.inherit !== !1 ? n : {}
}
function gE(t) {
    const {initial: n, animate: i} = mE(t, E.useContext(xl));
    return E.useMemo( () => ({
        initial: n,
        animate: i
    }), [ig(n), ig(i)])
}
function ig(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const Ud = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Vy(t, n, i) {
    for (const o in n)
        !Dt(n[o]) && !gy(o, i) && (t[o] = n[o])
}
function yE({transformTemplate: t}, n) {
    return E.useMemo( () => {
        const i = Ud();
        return Id(i, n, t),
        Object.assign({}, i.vars, i.style)
    }
    , [n])
}
function vE(t, n) {
    const i = t.style || {}
      , o = {};
    return Vy(o, i, t),
    Object.assign(o, yE(t, n)),
    o
}
function xE(t, n) {
    const i = {}
      , o = vE(t, n);
    return t.drag && t.dragListener !== !1 && (i.draggable = !1,
    o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none",
    o.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0),
    i.style = o,
    i
}
const Oy = () => ({
    ...Ud(),
    attrs: {}
});
function wE(t, n, i, o) {
    const l = E.useMemo( () => {
        const u = Oy();
        return yy(u, n, xy(o), t.transformTemplate, t.style),
        {
            ...u.attrs,
            style: {
                ...u.style
            }
        }
    }
    , [n]);
    if (t.style) {
        const u = {};
        Vy(u, t.style, t),
        l.style = {
            ...u,
            ...l.style
        }
    }
    return l
}
const bE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function $d(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(bE.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function SE(t, n, i, {latestValues: o}, l, u=!1, c) {
    const m = (c ?? $d(t) ? wE : xE)(n, o, l, t)
      , y = pE(n, typeof t == "string", u)
      , v = t !== E.Fragment ? {
        ...y,
        ...m,
        ref: i
    } : {}
      , {children: g} = n
      , w = E.useMemo( () => Dt(g) ? g.get() : g, [g]);
    return E.createElement(t, {
        ...v,
        children: w
    })
}
function kE({scrapeMotionValuesFromProps: t, createRenderState: n}, i, o, l) {
    return {
        latestValues: CE(i, o, l, t),
        renderState: n()
    }
}
function CE(t, n, i, o) {
    const l = {}
      , u = o(t, {});
    for (const w in u)
        l[w] = Za(u[w]);
    let {initial: c, animate: f} = t;
    const m = vl(t)
      , y = ay(t);
    n && y && !m && t.inherit !== !1 && (c === void 0 && (c = n.initial),
    f === void 0 && (f = n.animate));
    let v = i ? i.initial === !1 : !1;
    v = v || c === !1;
    const g = v ? f : c;
    if (g && typeof g != "boolean" && !yl(g)) {
        const w = Array.isArray(g) ? g : [g];
        for (let b = 0; b < w.length; b++) {
            const C = Dd(t, w[b]);
            if (C) {
                const {transitionEnd: M, transition: N, ...A} = C;
                for (const L in A) {
                    let B = A[L];
                    if (Array.isArray(B)) {
                        const W = v ? B.length - 1 : 0;
                        B = B[W]
                    }
                    B !== null && (l[L] = B)
                }
                for (const L in M)
                    l[L] = M[L]
            }
        }
    }
    return l
}
const By = t => (n, i) => {
    const o = E.useContext(xl)
      , l = E.useContext(ml)
      , u = () => kE(t, n, o, l);
    return i ? u() : yd(u)
}
  , EE = By({
    scrapeMotionValuesFromProps: Fd,
    createRenderState: Ud
})
  , NE = By({
    scrapeMotionValuesFromProps: wy,
    createRenderState: Oy
})
  , jE = Symbol.for("motionComponentSymbol");
function TE(t, n, i) {
    const o = E.useRef(i);
    E.useInsertionEffect( () => {
        o.current = i
    }
    );
    const l = E.useRef(null);
    return E.useCallback(u => {
        var f;
        u && ((f = t.onMount) == null || f.call(t, u));
        const c = o.current;
        if (typeof c == "function")
            if (u) {
                const m = c(u);
                typeof m == "function" && (l.current = m)
            } else
                l.current ? (l.current(),
                l.current = null) : c(u);
        else
            c && (c.current = u);
        n && (u ? n.mount(u) : n.unmount())
    }
    , [n])
}
const Iy = E.createContext({});
function us(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function RE(t, n, i, o, l, u) {
    var B, W;
    const {visualElement: c} = E.useContext(xl)
      , f = E.useContext(_y)
      , m = E.useContext(ml)
      , y = E.useContext(Wd)
      , v = y.reducedMotion
      , g = y.skipAnimations
      , w = E.useRef(null)
      , b = E.useRef(!1);
    o = o || f.renderer,
    !w.current && o && (w.current = o(t, {
        visualState: n,
        parent: c,
        props: i,
        presenceContext: m,
        blockInitialAnimation: m ? m.initial === !1 : !1,
        reducedMotionConfig: v,
        skipAnimations: g,
        isSVG: u
    }),
    b.current && w.current && (w.current.manuallyAnimateOnMount = !0));
    const C = w.current
      , M = E.useContext(Iy);
    C && !C.projection && l && (C.type === "html" || C.type === "svg") && ME(w.current, i, l, M);
    const N = E.useRef(!1);
    E.useInsertionEffect( () => {
        C && N.current && C.update(i, m)
    }
    );
    const A = i[K0]
      , L = E.useRef(!!A && typeof window < "u" && !((B = window.MotionHandoffIsComplete) != null && B.call(window, A)) && ((W = window.MotionHasOptimisedAnimation) == null ? void 0 : W.call(window, A)));
    return o0( () => {
        b.current = !0,
        C && (N.current = !0,
        window.MotionIsMounted = !0,
        C.updateFeatures(),
        C.scheduleRenderMicrotask(),
        L.current && C.animationState && C.animationState.animateChanges())
    }
    ),
    E.useEffect( () => {
        C && (!L.current && C.animationState && C.animationState.animateChanges(),
        L.current && (queueMicrotask( () => {
            var U;
            (U = window.MotionHandoffMarkAsComplete) == null || U.call(window, A)
        }
        ),
        L.current = !1),
        C.enteringChildren = void 0)
    }
    ),
    C
}
function ME(t, n, i, o) {
    const {layoutId: l, layout: u, drag: c, dragConstraints: f, layoutScroll: m, layoutRoot: y, layoutAnchor: v, layoutCrossfade: g} = n;
    t.projection = new i(t.latestValues,n["data-framer-portal-id"] ? void 0 : Fy(t.parent)),
    t.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || f && us(f),
        visualElement: t,
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        crossfade: g,
        layoutScroll: m,
        layoutRoot: y,
        layoutAnchor: v
    })
}
function Fy(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : Fy(t.parent)
}
function bc(t, {forwardMotionProps: n=!1, type: i}={}, o, l) {
    o && dE(o);
    const u = i ? i === "svg" : $d(t)
      , c = u ? NE : EE;
    function f(y, v) {
        let g;
        const w = {
            ...E.useContext(Wd),
            ...y,
            layoutId: PE(y)
        }
          , {isStatic: b} = w
          , C = gE(y)
          , M = c(y, b);
        if (!b && typeof window < "u") {
            DE();
            const N = AE(w);
            g = N.MeasureLayout,
            C.visualElement = RE(t, M, w, l, N.ProjectionNode, u)
        }
        return p.jsxs(xl.Provider, {
            value: C,
            children: [g && C.visualElement ? p.jsx(g, {
                visualElement: C.visualElement,
                ...w
            }) : null, SE(t, y, TE(M, C.visualElement, v), M, b, n, u)]
        })
    }
    f.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    const m = E.forwardRef(f);
    return m[jE] = t,
    m
}
function PE({layoutId: t}) {
    const n = E.useContext(gd).id;
    return n && t !== void 0 ? n + "-" + t : t
}
function DE(t, n) {
    E.useContext(_y).strict
}
function AE(t) {
    const n = Ly()
      , {drag: i, layout: o} = n;
    if (!i && !o)
        return {};
    const l = {
        ...i,
        ...o
    };
    return {
        MeasureLayout: i != null && i.isEnabled(t) || o != null && o.isEnabled(t) ? l.MeasureLayout : void 0,
        ProjectionNode: l.ProjectionNode
    }
}
function _E(t, n) {
    if (typeof Proxy > "u")
        return bc;
    const i = new Map
      , o = (u, c) => bc(u, c, t, n)
      , l = (u, c) => o(u, c);
    return new Proxy(l,{
        get: (u, c) => c === "create" ? o : (i.has(c) || i.set(c, bc(c, void 0, t, n)),
        i.get(c))
    })
}
const LE = (t, n) => n.isSVG ?? $d(t) ? new cC(n) : new iC(n,{
    allowProjection: t !== E.Fragment
});
class zE extends ai {
    constructor(n) {
        super(n),
        n.animationState || (n.animationState = mC(n))
    }
    updateAnimationControlsSubscription() {
        const {animate: n} = this.node.getProps();
        yl(n) && (this.unmountControls = n.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: n} = this.node.getProps()
          , {animate: i} = this.node.prevProps || {};
        n !== i && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var n;
        this.node.animationState.reset(),
        (n = this.unmountControls) == null || n.call(this)
    }
}
let VE = 0;
class OE extends ai {
    constructor() {
        super(...arguments),
        this.id = VE++,
        this.isExitComplete = !1
    }
    update() {
        var u;
        if (!this.node.presenceContext)
            return;
        const {isPresent: n, onExitComplete: i} = this.node.presenceContext
          , {isPresent: o} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || n === o)
            return;
        if (n && o === !1) {
            if (this.isExitComplete) {
                const {initial: c, custom: f} = this.node.getProps();
                if (typeof c == "string") {
                    const m = Li(this.node, c, f);
                    if (m) {
                        const {transition: y, transitionEnd: v, ...g} = m;
                        for (const w in g)
                            (u = this.node.getValue(w)) == null || u.jump(g[w])
                    }
                }
                this.node.animationState.reset(),
                this.node.animationState.animateChanges()
            } else
                this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return
        }
        const l = this.node.animationState.setActive("exit", !n);
        i && !n && l.then( () => {
            this.isExitComplete = !0,
            i(this.id)
        }
        )
    }
    mount() {
        const {register: n, onExitComplete: i} = this.node.presenceContext || {};
        i && i(this.id),
        n && (this.unmount = n(this.id))
    }
    unmount() {}
}
const BE = {
    animation: {
        Feature: zE
    },
    exit: {
        Feature: OE
    }
};
function Po(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const IE = t => n => zd(n) && t(n, Po(n));
function mo(t, n, i, o) {
    return So(t, n, IE(i), o)
}
const Wy = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , sg = (t, n) => Math.abs(t - n);
function FE(t, n) {
    const i = sg(t.x, n.x)
      , o = sg(t.y, n.y);
    return Math.sqrt(i ** 2 + o ** 2)
}
const og = new Set(["auto", "scroll"]);
class Uy {
    constructor(n, i, {transformPagePoint: o, contextWindow: l=window, dragSnapToOrigin: u=!1, distanceThreshold: c=3, element: f}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.lastRawMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = b => {
            this.handleScroll(b.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ia(this.lastRawMoveEventInfo, this.transformPagePoint));
            const b = Sc(this.lastMoveEventInfo, this.history)
              , C = this.startEvent !== null
              , M = FE(b.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!C && !M)
                return;
            const {point: N} = b
              , {timestamp: A} = Pt;
            this.history.push({
                ...N,
                timestamp: A
            });
            const {onStart: L, onMove: B} = this.handlers;
            C || (L && L(this.lastMoveEvent, b),
            this.startEvent = this.lastMoveEvent),
            B && B(this.lastMoveEvent, b)
        }
        ,
        this.handlePointerMove = (b, C) => {
            this.lastMoveEvent = b,
            this.lastRawMoveEventInfo = C,
            this.lastMoveEventInfo = Ia(C, this.transformPagePoint),
            Ye.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (b, C) => {
            this.end();
            const {onEnd: M, onSessionEnd: N, resumeAnimation: A} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && A && A(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const L = Sc(b.type === "pointercancel" ? this.lastMoveEventInfo : Ia(C, this.transformPagePoint), this.history);
            this.startEvent && M && M(b, L),
            N && N(b, L)
        }
        ,
        !zd(n))
            return;
        this.dragSnapToOrigin = u,
        this.handlers = i,
        this.transformPagePoint = o,
        this.distanceThreshold = c,
        this.contextWindow = l || window;
        const m = Po(n)
          , y = Ia(m, this.transformPagePoint)
          , {point: v} = y
          , {timestamp: g} = Pt;
        this.history = [{
            ...v,
            timestamp: g
        }];
        const {onSessionStart: w} = i;
        w && w(n, Sc(y, this.history)),
        this.removeListeners = To(mo(this.contextWindow, "pointermove", this.handlePointerMove), mo(this.contextWindow, "pointerup", this.handlePointerUp), mo(this.contextWindow, "pointercancel", this.handlePointerUp)),
        f && this.startScrollTracking(f)
    }
    startScrollTracking(n) {
        let i = n.parentElement;
        for (; i; ) {
            const o = getComputedStyle(i);
            (og.has(o.overflowX) || og.has(o.overflowY)) && this.scrollPositions.set(i, {
                x: i.scrollLeft,
                y: i.scrollTop
            }),
            i = i.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(n) {
        const i = this.scrollPositions.get(n);
        if (!i)
            return;
        const o = n === window
          , l = o ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: n.scrollLeft,
            y: n.scrollTop
        }
          , u = {
            x: l.x - i.x,
            y: l.y - i.y
        };
        u.x === 0 && u.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += u.x,
        this.lastMoveEventInfo.point.y += u.y) : this.history.length > 0 && (this.history[0].x -= u.x,
        this.history[0].y -= u.y),
        this.scrollPositions.set(n, l),
        Ye.update(this.updatePoint, !0))
    }
    updateHandlers(n) {
        this.handlers = n
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        ii(this.updatePoint)
    }
}
function Ia(t, n) {
    return n ? {
        point: n(t.point)
    } : t
}
function ag(t, n) {
    return {
        x: t.x - n.x,
        y: t.y - n.y
    }
}
function Sc({point: t}, n) {
    return {
        point: t,
        delta: ag(t, $y(n)),
        offset: ag(t, WE(n)),
        velocity: UE(n, .1)
    }
}
function WE(t) {
    return t[0]
}
function $y(t) {
    return t[t.length - 1]
}
function UE(t, n) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let i = t.length - 1
      , o = null;
    const l = $y(t);
    for (; i >= 0 && (o = t[i],
    !(l.timestamp - o.timestamp > yn(n))); )
        i--;
    if (!o)
        return {
            x: 0,
            y: 0
        };
    o === t[0] && t.length > 2 && l.timestamp - o.timestamp > yn(n) * 2 && (o = t[1]);
    const u = Tn(l.timestamp - o.timestamp);
    if (u === 0)
        return {
            x: 0,
            y: 0
        };
    const c = {
        x: (l.x - o.x) / u,
        y: (l.y - o.y) / u
    };
    return c.x === 1 / 0 && (c.x = 0),
    c.y === 1 / 0 && (c.y = 0),
    c
}
function $E(t, {min: n, max: i}, o) {
    return n !== void 0 && t < n ? t = o ? Qe(n, t, o.min) : Math.max(t, n) : i !== void 0 && t > i && (t = o ? Qe(i, t, o.max) : Math.min(t, i)),
    t
}
function lg(t, n, i) {
    return {
        min: n !== void 0 ? t.min + n : void 0,
        max: i !== void 0 ? t.max + i - (t.max - t.min) : void 0
    }
}
function HE(t, {top: n, left: i, bottom: o, right: l}) {
    return {
        x: lg(t.x, i, l),
        y: lg(t.y, n, o)
    }
}
function ug(t, n) {
    let i = n.min - t.min
      , o = n.max - t.max;
    return n.max - n.min < t.max - t.min && ([i,o] = [o, i]),
    {
        min: i,
        max: o
    }
}
function YE(t, n) {
    return {
        x: ug(t.x, n.x),
        y: ug(t.y, n.y)
    }
}
function GE(t, n) {
    let i = .5;
    const o = Jt(t)
      , l = Jt(n);
    return l > o ? i = xo(n.min, n.max - o, t.min) : o > l && (i = xo(t.min, t.max - l, n.min)),
    ur(0, 1, i)
}
function KE(t, n) {
    const i = {};
    return n.min !== void 0 && (i.min = n.min - t.min),
    n.max !== void 0 && (i.max = n.max - t.min),
    i
}
const ed = .35;
function JE(t=ed) {
    return t === !1 ? t = 0 : t === !0 && (t = ed),
    {
        x: cg(t, "left", "right"),
        y: cg(t, "top", "bottom")
    }
}
function cg(t, n, i) {
    return {
        min: dg(t, n),
        max: dg(t, i)
    }
}
function dg(t, n) {
    return typeof t == "number" ? t : t[n] || 0
}
const XE = new WeakMap;
class QE {
    constructor(n) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = St(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = n
    }
    start(n, {snapToCursor: i=!1, distanceThreshold: o}={}) {
        const {presenceContext: l} = this.visualElement;
        if (l && l.isPresent === !1)
            return;
        const u = g => {
            i && this.snapToCursor(Po(g).point),
            this.stopAnimation()
        }
          , c = (g, w) => {
            const {drag: b, dragPropagation: C, onDragStart: M} = this.getProps();
            if (b && !C && (this.openDragLock && this.openDragLock(),
            this.openDragLock = kk(b),
            !this.openDragLock))
                return;
            this.latestPointerEvent = g,
            this.latestPanInfo = w,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            ir(A => {
                let L = this.getAxisMotionValue(A).get() || 0;
                if (ar.test(L)) {
                    const {projection: B} = this.visualElement;
                    if (B && B.layout) {
                        const W = B.layout.layoutBox[A];
                        W && (L = Jt(W) * (parseFloat(L) / 100))
                    }
                }
                this.originPoint[A] = L
            }
            ),
            M && Ye.update( () => M(g, w), !1, !0),
            Hc(this.visualElement, "transform");
            const {animationState: N} = this.visualElement;
            N && N.setActive("whileDrag", !0)
        }
          , f = (g, w) => {
            this.latestPointerEvent = g,
            this.latestPanInfo = w;
            const {dragPropagation: b, dragDirectionLock: C, onDirectionLock: M, onDrag: N} = this.getProps();
            if (!b && !this.openDragLock)
                return;
            const {offset: A} = w;
            if (C && this.currentDirection === null) {
                this.currentDirection = ZE(A),
                this.currentDirection !== null && M && M(this.currentDirection);
                return
            }
            this.updateAxis("x", w.point, A),
            this.updateAxis("y", w.point, A),
            this.visualElement.render(),
            N && Ye.update( () => N(g, w), !1, !0)
        }
          , m = (g, w) => {
            this.latestPointerEvent = g,
            this.latestPanInfo = w,
            this.stop(g, w),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , y = () => {
            const {dragSnapToOrigin: g} = this.getProps();
            (g || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: v} = this.getProps();
        this.panSession = new Uy(n,{
            onSessionStart: u,
            onStart: c,
            onMove: f,
            onSessionEnd: m,
            resumeAnimation: y
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: v,
            distanceThreshold: o,
            contextWindow: Wy(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(n, i) {
        const o = n || this.latestPointerEvent
          , l = i || this.latestPanInfo
          , u = this.isDragging;
        if (this.cancel(),
        !u || !l || !o)
            return;
        const {velocity: c} = l;
        this.startAnimation(c);
        const {onDragEnd: f} = this.getProps();
        f && Ye.postRender( () => f(o, l))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: n, animationState: i} = this.visualElement;
        n && (n.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: o} = this.getProps();
        !o && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        i && i.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(n, i, o) {
        const {drag: l} = this.getProps();
        if (!o || !Fa(n, l, this.currentDirection))
            return;
        const u = this.getAxisMotionValue(n);
        let c = this.originPoint[n] + o[n];
        this.constraints && this.constraints[n] && (c = $E(c, this.constraints[n], this.elastic[n])),
        u.set(c)
    }
    resolveConstraints() {
        var u;
        const {dragConstraints: n, dragElastic: i} = this.getProps()
          , o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (u = this.visualElement.projection) == null ? void 0 : u.layout
          , l = this.constraints;
        n && us(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = HE(o.layoutBox, n) : this.constraints = !1,
        this.elastic = JE(i),
        l !== this.constraints && !us(n) && o && this.constraints && !this.hasMutatedConstraints && ir(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = KE(o.layoutBox[c], this.constraints[c]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: n, onMeasureDragConstraints: i} = this.getProps();
        if (!n || !us(n))
            return !1;
        const o = n.current
          , {projection: l} = this.visualElement;
        if (!l || !l.layout)
            return !1;
        const u = qk(o, l.root, this.visualElement.getTransformPagePoint());
        let c = YE(l.layout.layoutBox, u);
        if (i) {
            const f = i(Jk(c));
            this.hasMutatedConstraints = !!f,
            f && (c = dy(f))
        }
        return c
    }
    startAnimation(n) {
        const {drag: i, dragMomentum: o, dragElastic: l, dragTransition: u, dragSnapToOrigin: c, onDragTransitionEnd: f} = this.getProps()
          , m = this.constraints || {}
          , y = ir(v => {
            if (!Fa(v, i, this.currentDirection))
                return;
            let g = m && m[v] || {};
            (c === !0 || c === v) && (g = {
                min: 0,
                max: 0
            });
            const w = l ? 200 : 1e6
              , b = l ? 40 : 1e7
              , C = {
                type: "inertia",
                velocity: o ? n[v] : 0,
                bounceStiffness: w,
                bounceDamping: b,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...u,
                ...g
            };
            return this.startAxisValueAnimation(v, C)
        }
        );
        return Promise.all(y).then(f)
    }
    startAxisValueAnimation(n, i) {
        const o = this.getAxisMotionValue(n);
        return Hc(this.visualElement, n),
        o.start(Pd(n, o, 0, i, this.visualElement, !1))
    }
    stopAnimation() {
        ir(n => this.getAxisMotionValue(n).stop())
    }
    getAxisMotionValue(n) {
        const i = `_drag${n.toUpperCase()}`
          , o = this.visualElement.getProps()
          , l = o[i];
        return l || this.visualElement.getValue(n, (o.initial ? o.initial[n] : void 0) || 0)
    }
    snapToCursor(n) {
        ir(i => {
            const {drag: o} = this.getProps();
            if (!Fa(i, o, this.currentDirection))
                return;
            const {projection: l} = this.visualElement
              , u = this.getAxisMotionValue(i);
            if (l && l.layout) {
                const {min: c, max: f} = l.layout.layoutBox[i]
                  , m = u.get() || 0;
                u.set(n[i] - Qe(c, f, .5) + m)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: n, dragConstraints: i} = this.getProps()
          , {projection: o} = this.visualElement;
        if (!us(i) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const l = {
            x: 0,
            y: 0
        };
        ir(c => {
            const f = this.getAxisMotionValue(c);
            if (f && this.constraints !== !1) {
                const m = f.get();
                l[c] = GE({
                    min: m,
                    max: m
                }, this.constraints[c])
            }
        }
        );
        const {transformTemplate: u} = this.visualElement.getProps();
        this.visualElement.current.style.transform = u ? u({}, "") : "none",
        o.root && o.root.updateScroll(),
        o.updateLayout(),
        this.constraints = !1,
        this.resolveConstraints(),
        ir(c => {
            if (!Fa(c, n, null))
                return;
            const f = this.getAxisMotionValue(c)
              , {min: m, max: y} = this.constraints[c];
            f.set(Qe(m, y, l[c]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        XE.set(this.visualElement, this);
        const n = this.visualElement.current
          , i = mo(n, "pointerdown", y => {
            const {drag: v, dragListener: g=!0} = this.getProps()
              , w = y.target
              , b = w !== n && Rk(w);
            v && g && !b && this.start(y)
        }
        );
        let o;
        const l = () => {
            const {dragConstraints: y} = this.getProps();
            us(y) && y.current && (this.constraints = this.resolveRefConstraints(),
            o || (o = qE(n, y.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: u} = this.visualElement
          , c = u.addEventListener("measure", l);
        u && !u.layout && (u.root && u.root.updateScroll(),
        u.updateLayout()),
        Ye.read(l);
        const f = So(window, "resize", () => this.scalePositionWithinConstraints())
          , m = u.addEventListener("didUpdate", ( ({delta: y, hasLayoutChanged: v}) => {
            this.isDragging && v && (ir(g => {
                const w = this.getAxisMotionValue(g);
                w && (this.originPoint[g] += y[g].translate,
                w.set(w.get() + y[g].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            f(),
            i(),
            c(),
            m && m(),
            o && o()
        }
    }
    getProps() {
        const n = this.visualElement.getProps()
          , {drag: i=!1, dragDirectionLock: o=!1, dragPropagation: l=!1, dragConstraints: u=!1, dragElastic: c=ed, dragMomentum: f=!0} = n;
        return {
            ...n,
            drag: i,
            dragDirectionLock: o,
            dragPropagation: l,
            dragConstraints: u,
            dragElastic: c,
            dragMomentum: f
        }
    }
}
function fg(t) {
    let n = !0;
    return () => {
        if (n) {
            n = !1;
            return
        }
        t()
    }
}
function qE(t, n, i) {
    const o = xm(t, fg(i))
      , l = xm(n, fg(i));
    return () => {
        o(),
        l()
    }
}
function Fa(t, n, i) {
    return (n === !0 || n === t) && (i === null || i === t)
}
function ZE(t, n=10) {
    let i = null;
    return Math.abs(t.y) > n ? i = "y" : Math.abs(t.x) > n && (i = "x"),
    i
}
class e2 extends ai {
    constructor(n) {
        super(n),
        this.removeGroupControls = Rn,
        this.removeListeners = Rn,
        this.controls = new QE(n)
    }
    mount() {
        const {dragControls: n} = this.node.getProps();
        n && (this.removeGroupControls = n.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Rn
    }
    update() {
        const {dragControls: n} = this.node.getProps()
          , {dragControls: i} = this.node.prevProps || {};
        n !== i && (this.removeGroupControls(),
        n && (this.removeGroupControls = n.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const kc = t => (n, i) => {
    t && Ye.update( () => t(n, i), !1, !0)
}
;
class t2 extends ai {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Rn
    }
    onPointerDown(n) {
        this.session = new Uy(n,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Wy(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: n, onPanStart: i, onPan: o, onPanEnd: l} = this.node.getProps();
        return {
            onSessionStart: kc(n),
            onStart: kc(i),
            onMove: kc(o),
            onEnd: (u, c) => {
                delete this.session,
                l && Ye.postRender( () => l(u, c))
            }
        }
    }
    mount() {
        this.removePointerDownListener = mo(this.node.current, "pointerdown", n => this.onPointerDown(n))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Cc = !1;
class n2 extends E.Component {
    componentDidMount() {
        const {visualElement: n, layoutGroup: i, switchLayoutGroup: o, layoutId: l} = this.props
          , {projection: u} = n;
        u && (i.group && i.group.add(u),
        o && o.register && l && o.register(u),
        Cc && u.root.didUpdate(),
        u.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        u.setOptions({
            ...u.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        el.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(n) {
        const {layoutDependency: i, visualElement: o, drag: l, isPresent: u} = this.props
          , {projection: c} = o;
        return c && (c.isPresent = u,
        n.layoutDependency !== i && c.setOptions({
            ...c.options,
            layoutDependency: i
        }),
        Cc = !0,
        l || n.layoutDependency !== i || i === void 0 || n.isPresent !== u ? c.willUpdate() : this.safeToRemove(),
        n.isPresent !== u && (u ? c.promote() : c.relegate() || Ye.postRender( () => {
            const f = c.getStack();
            (!f || !f.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {visualElement: n, layoutAnchor: i} = this.props
          , {projection: o} = n;
        o && (o.options.layoutAnchor = i,
        o.root.didUpdate(),
        Ld.postRender( () => {
            !o.currentAnimation && o.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: n, layoutGroup: i, switchLayoutGroup: o} = this.props
          , {projection: l} = n;
        Cc = !0,
        l && (l.scheduleCheckAfterUnmount(),
        i && i.group && i.group.remove(l),
        o && o.deregister && o.deregister(l))
    }
    safeToRemove() {
        const {safeToRemove: n} = this.props;
        n && n()
    }
    render() {
        return null
    }
}
function Hy(t) {
    const [n,i] = Ay()
      , o = E.useContext(gd);
    return p.jsx(n2, {
        ...t,
        layoutGroup: o,
        switchLayoutGroup: E.useContext(Iy),
        isPresent: n,
        safeToRemove: i
    })
}
const r2 = {
    pan: {
        Feature: t2
    },
    drag: {
        Feature: e2,
        ProjectionNode: Dy,
        MeasureLayout: Hy
    }
};
function hg(t, n, i) {
    const {props: o} = t;
    t.animationState && o.whileHover && t.animationState.setActive("whileHover", i === "Start");
    const l = "onHover" + i
      , u = o[l];
    u && Ye.postRender( () => u(n, Po(n)))
}
class i2 extends ai {
    mount() {
        const {current: n} = this.node;
        n && (this.unmount = Ek(n, (i, o) => (hg(this.node, o, "Start"),
        l => hg(this.node, l, "End"))))
    }
    unmount() {}
}
class s2 extends ai {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let n = !1;
        try {
            n = this.node.current.matches(":focus-visible")
        } catch {
            n = !0
        }
        !n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = To(So(this.node.current, "focus", () => this.onFocus()), So(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function pg(t, n, i) {
    const {props: o} = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled)
        return;
    t.animationState && o.whileTap && t.animationState.setActive("whileTap", i === "Start");
    const l = "onTap" + (i === "End" ? "" : i)
      , u = o[l];
    u && Ye.postRender( () => u(n, Po(n)))
}
class o2 extends ai {
    mount() {
        const {current: n} = this.node;
        if (!n)
            return;
        const {globalTapTarget: i, propagate: o} = this.node.props;
        this.unmount = Pk(n, (l, u) => (pg(this.node, u, "Start"),
        (c, {success: f}) => pg(this.node, c, f ? "End" : "Cancel")), {
            useGlobalTarget: i,
            stopPropagation: (o == null ? void 0 : o.tap) === !1
        })
    }
    unmount() {}
}
const td = new WeakMap
  , Ec = new WeakMap
  , a2 = t => {
    const n = td.get(t.target);
    n && n(t)
}
  , l2 = t => {
    t.forEach(a2)
}
;
function u2({root: t, ...n}) {
    const i = t || document;
    Ec.has(i) || Ec.set(i, {});
    const o = Ec.get(i)
      , l = JSON.stringify(n);
    return o[l] || (o[l] = new IntersectionObserver(l2,{
        root: t,
        ...n
    })),
    o[l]
}
function c2(t, n, i) {
    const o = u2(n);
    return td.set(t, i),
    o.observe(t),
    () => {
        td.delete(t),
        o.unobserve(t)
    }
}
const d2 = {
    some: 0,
    all: 1
};
class f2 extends ai {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        var m;
        (m = this.stopObserver) == null || m.call(this);
        const {viewport: n={}} = this.node.getProps()
          , {root: i, margin: o, amount: l="some", once: u} = n
          , c = {
            root: i ? i.current : void 0,
            rootMargin: o,
            threshold: typeof l == "number" ? l : d2[l]
        }
          , f = y => {
            const {isIntersecting: v} = y;
            if (this.isInView === v || (this.isInView = v,
            u && !v && this.hasEnteredView))
                return;
            v && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", v);
            const {onViewportEnter: g, onViewportLeave: w} = this.node.getProps()
              , b = v ? g : w;
            b && b(y)
        }
        ;
        this.stopObserver = c2(this.node.current, c, f)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: n, prevProps: i} = this.node;
        ["amount", "margin", "root"].some(h2(n, i)) && this.startObserver()
    }
    unmount() {
        var n;
        (n = this.stopObserver) == null || n.call(this),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
}
function h2({viewport: t={}}, {viewport: n={}}={}) {
    return i => t[i] !== n[i]
}
const p2 = {
    inView: {
        Feature: f2
    },
    tap: {
        Feature: o2
    },
    focus: {
        Feature: s2
    },
    hover: {
        Feature: i2
    }
}
  , m2 = {
    layout: {
        ProjectionNode: Dy,
        MeasureLayout: Hy
    }
}
  , g2 = {
    ...BE,
    ...p2,
    ...r2,
    ...m2
}
  , Q = _E(g2, LE);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y2 = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , v2 = t => t.replace(/^([A-Z])|[\s-_]+(\w)/g, (n, i, o) => o ? o.toUpperCase() : i.toLowerCase())
  , mg = t => {
    const n = v2(t);
    return n.charAt(0).toUpperCase() + n.slice(1)
}
  , Yy = (...t) => t.filter( (n, i, o) => !!n && n.trim() !== "" && o.indexOf(n) === i).join(" ").trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var x2 = {
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
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = E.forwardRef( ({color: t="currentColor", size: n=24, strokeWidth: i=2, absoluteStrokeWidth: o, className: l="", children: u, iconNode: c, ...f}, m) => E.createElement("svg", {
    ref: m,
    ...x2,
    width: n,
    height: n,
    stroke: t,
    strokeWidth: o ? Number(i) * 24 / Number(n) : i,
    className: Yy("lucide", l),
    ...f
}, [...c.map( ([y,v]) => E.createElement(y, v)), ...Array.isArray(u) ? u : [u]]));
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = (t, n) => {
    const i = E.forwardRef( ({className: o, ...l}, u) => E.createElement(w2, {
        ref: u,
        iconNode: n,
        className: Yy(`lucide-${y2(mg(t))}`, `lucide-${t}`, o),
        ...l
    }));
    return i.displayName = mg(t),
    i
}
;
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , yt = Ke("arrow-right", b2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S2 = [["path", {
    d: "M12 7v14",
    key: "1akyts"
}], ["path", {
    d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    key: "ruj8y"
}]]
  , k2 = Ke("book-open", S2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]
  , E2 = Ke("calendar", C2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N2 = [["path", {
    d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
    key: "1tc9qg"
}], ["circle", {
    cx: "12",
    cy: "13",
    r: "3",
    key: "1vg3eu"
}]]
  , Gy = Ke("camera", N2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j2 = [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]
  , T2 = Ke("chart-column", j2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R2 = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
  , Ky = Ke("chevron-right", R2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , P2 = Ke("circle-check", M2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D2 = [["rect", {
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
    d: "M12 11h4",
    key: "1jrz19"
}], ["path", {
    d: "M12 16h4",
    key: "n85exb"
}], ["path", {
    d: "M8 11h.01",
    key: "1dfujw"
}], ["path", {
    d: "M8 16h.01",
    key: "18s6g9"
}]]
  , dl = Ke("clipboard-list", D2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A2 = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , _2 = Ke("external-link", A2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]
  , Jy = Ke("globe", L2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]
  , V2 = Ke("mail", z2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O2 = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , B2 = Ke("map-pin", O2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]
  , F2 = Ke("menu", I2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = [["path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    key: "1lielz"
}]]
  , U2 = Ke("message-square", W2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $2 = [["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}], ["polyline", {
    points: "3.29 7 12 12 20.71 7",
    key: "ousv84"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}]]
  , Xy = Ke("package", $2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H2 = [["circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor",
    key: "1okk4w"
}], ["circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor",
    key: "f64h9f"
}], ["circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor",
    key: "fotxhn"
}], ["circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor",
    key: "qy21gx"
}], ["path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
    key: "12rzf8"
}]]
  , Qy = Ke("palette", H2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y2 = [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]
  , G2 = Ke("phone", Y2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K2 = [["circle", {
    cx: "11",
    cy: "11",
    r: "8",
    key: "4ej97u"
}], ["path", {
    d: "m21 21-4.3-4.3",
    key: "1qie3q"
}]]
  , qy = Ke("search", K2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J2 = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , X2 = Ke("shield", J2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q2 = [["line", {
    x1: "21",
    x2: "14",
    y1: "4",
    y2: "4",
    key: "obuewd"
}], ["line", {
    x1: "10",
    x2: "3",
    y1: "4",
    y2: "4",
    key: "1q6298"
}], ["line", {
    x1: "21",
    x2: "12",
    y1: "12",
    y2: "12",
    key: "1iu8h1"
}], ["line", {
    x1: "8",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "ntss68"
}], ["line", {
    x1: "21",
    x2: "16",
    y1: "20",
    y2: "20",
    key: "14d8ph"
}], ["line", {
    x1: "12",
    x2: "3",
    y1: "20",
    y2: "20",
    key: "m0wm8r"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "2",
    y2: "6",
    key: "14e1ph"
}], ["line", {
    x1: "8",
    x2: "8",
    y1: "10",
    y2: "14",
    key: "1i6ji0"
}], ["line", {
    x1: "16",
    x2: "16",
    y1: "18",
    y2: "22",
    key: "1lctlv"
}]]
  , q2 = Ke("sliders-horizontal", Q2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z2 = [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]
  , Zy = Ke("trending-up", Z2);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eN = [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]
  , tN = Ke("truck", eN);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nN = [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]
  , fl = Ke("users", nN);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rN = [["path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    key: "cbrjhi"
}]]
  , iN = Ke("wrench", rN);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sN = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , oN = Ke("x", sN);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aN = [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]
  , ev = Ke("zap", aN)
  , gg = "/assets/WaveNexus_digital_branding_emblem-CvF69oEw.png"
  , Ft = {
    name: "WaveNexus Digital Invest",
    phone: "(910) 915-2221",
    email: "chris.repstein@wavenexusdigitalinvest.com"
}
  , tv = [{
    name: "Red Vine Mechanical HVAC",
    category: "Local Service Business",
    text: "Lead-driven redesign with service pages, quote form, and local SEO structure.",
    url: "https://redvine-mechanical.figma.site"
}, {
    name: "Dizon Digital Media",
    category: "Social Media Management",
    text: "Strategic social media presence with content planning, audience engagement tools, and brand storytelling.",
    url: "https://dizondigitalmarketing.com/"
}, {
    name: "Blue Anchor Consulting",
    category: "Professional Services",
    text: "Authority-focused brand presentation with a premium booking experience.",
    url: null
}]
  , yg = [{
    label: "About",
    to: "/about"
}, {
    label: "Services",
    to: "/services"
}, {
    label: "Portfolio",
    to: "/portfolio"
}, {
    label: "Blog",
    to: "/blog"
}, {
    label: "Contact",
    to: "/contact"
}];
function lN() {
    const [t,n] = E.useState(!1)
      , [i,o] = E.useState(!1)
      , l = oi();
    return E.useEffect( () => {
        n(!1)
    }
    , [l.pathname]),
    E.useEffect( () => {
        window.scrollTo(0, 0)
    }
    , [l.pathname]),
    E.useEffect( () => {
        const u = () => o(window.scrollY > 8);
        return window.addEventListener("scroll", u, {
            passive: !0
        }),
        () => window.removeEventListener("scroll", u)
    }
    , []),
    p.jsxs("div", {
        className: "min-h-screen bg-background text-foreground flex flex-col",
        children: [p.jsxs("header", {
            className: `sticky top-0 z-50 transition-all duration-200 ${i ? "border-b border-border bg-background/95 backdrop-blur-md" : "bg-background"}`,
            children: [p.jsx("div", {
                className: "h-[2px] bg-amber-500 w-full"
            }), p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs("div", {
                    className: "flex items-center justify-between h-16",
                    children: [p.jsxs(kt, {
                        to: "/",
                        className: "flex items-center gap-3 group",
                        children: [p.jsx("img", {
                            src: gg,
                            alt: Ft.name,
                            className: "h-9 w-9 object-contain"
                        }), p.jsxs("div", {
                            children: [p.jsx("p", {
                                className: "font-['Barlow_Condensed'] font-800 text-base uppercase tracking-widest text-white leading-none",
                                children: "WaveNexus"
                            }), p.jsx("p", {
                                className: "font-['JetBrains_Mono'] text-[10px] text-amber-500 uppercase tracking-widest leading-none mt-0.5",
                                children: "Digital Invest"
                            })]
                        })]
                    }), p.jsxs("nav", {
                        className: "hidden lg:flex items-center gap-1",
                        children: [p.jsxs(lo, {
                            to: "/nexus-field",
                            className: ({isActive: u}) => `flex items-center gap-1.5 px-4 py-1.5 text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest transition-all ${u ? "bg-amber-500 text-zinc-950" : "bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-zinc-950 border border-amber-500/40"}`,
                            children: [p.jsx("span", {
                                className: "w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"
                            }), "Nexus Field"]
                        }), yg.map( ({label: u, to: c}) => p.jsx(lo, {
                            to: c,
                            className: ({isActive: f}) => `px-4 py-1.5 text-sm font-['DM_Sans'] font-medium uppercase tracking-wider transition-all ${f ? "text-amber-400" : "text-zinc-400 hover:text-white"}`,
                            children: u
                        }, c))]
                    }), p.jsx("div", {
                        className: "hidden lg:block",
                        children: p.jsxs("a", {
                            href: "https://wavenexusos.polsia.app/intake",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-2 px-5 py-2 bg-amber-500 text-zinc-950 text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-amber-400 transition-colors",
                            children: ["Free Audit ", p.jsx(Ky, {
                                className: "h-4 w-4"
                            })]
                        })
                    }), p.jsx("button", {
                        onClick: () => n(!t),
                        className: "lg:hidden p-2 text-zinc-400 hover:text-white transition-colors",
                        children: t ? p.jsx(oN, {
                            className: "h-5 w-5"
                        }) : p.jsx(F2, {
                            className: "h-5 w-5"
                        })
                    })]
                })
            }), p.jsx(uE, {
                children: t && p.jsx(Q.div, {
                    initial: {
                        height: 0,
                        opacity: 0
                    },
                    animate: {
                        height: "auto",
                        opacity: 1
                    },
                    exit: {
                        height: 0,
                        opacity: 0
                    },
                    transition: {
                        duration: .18
                    },
                    className: "lg:hidden overflow-hidden border-t border-border bg-zinc-950",
                    children: p.jsxs("nav", {
                        className: "px-4 py-4 flex flex-col gap-1",
                        children: [p.jsxs(lo, {
                            to: "/nexus-field",
                            className: ({isActive: u}) => `flex items-center gap-2 px-4 py-3 text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest ${u ? "bg-amber-500 text-zinc-950" : "bg-amber-500/10 text-amber-400 border border-amber-500/30"}`,
                            children: [p.jsx("span", {
                                className: "w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"
                            }), "Nexus Field — Field Service Software"]
                        }), yg.map( ({label: u, to: c}) => p.jsx(lo, {
                            to: c,
                            className: ({isActive: f}) => `px-4 py-3 text-sm font-['DM_Sans'] uppercase tracking-wider ${f ? "text-amber-400 bg-zinc-900" : "text-zinc-400"}`,
                            children: u
                        }, c)), p.jsx("div", {
                            className: "pt-3 mt-1 border-t border-border",
                            children: p.jsx("a", {
                                href: "https://wavenexusos.polsia.app/intake",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "block w-full text-center px-4 py-3 bg-amber-500 text-zinc-950 text-sm font-['Barlow_Condensed'] font-700 uppercase tracking-widest",
                                children: "Get Free Audit"
                            })
                        })]
                    })
                })
            })]
        }), p.jsx("main", {
            className: "flex-1",
            children: p.jsx(z1, {})
        }), p.jsxs("footer", {
            className: "bg-zinc-950 border-t border-border",
            children: [p.jsx("div", {
                className: "h-[2px] bg-amber-500 w-full"
            }), p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16",
                children: [p.jsxs("div", {
                    className: "grid md:grid-cols-4 gap-10 mb-12",
                    children: [p.jsxs("div", {
                        className: "md:col-span-2",
                        children: [p.jsxs("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [p.jsx("img", {
                                src: gg,
                                alt: Ft.name,
                                className: "h-10 w-10 object-contain"
                            }), p.jsxs("div", {
                                children: [p.jsx("p", {
                                    className: "font-['Barlow_Condensed'] font-800 text-xl uppercase tracking-widest text-white",
                                    children: "WaveNexus Digital Invest"
                                }), p.jsx("p", {
                                    className: "font-['JetBrains_Mono'] text-[11px] text-amber-500 uppercase tracking-widest mt-0.5",
                                    children: "Veteran Owned · Hampton Roads, VA"
                                })]
                            })]
                        }), p.jsx("p", {
                            className: "text-zinc-500 text-sm leading-relaxed max-w-xs font-['DM_Sans']",
                            children: "Veteran-owned web design agency and SaaS company. We build websites, drive local SEO, and make Nexus Field — field service software built around your team."
                        })]
                    }), p.jsxs("div", {
                        children: [p.jsx("p", {
                            className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-4",
                            children: "Agency"
                        }), p.jsx("ul", {
                            className: "space-y-2",
                            children: [{
                                label: "About",
                                to: "/about"
                            }, {
                                label: "Services",
                                to: "/services"
                            }, {
                                label: "Portfolio",
                                to: "/portfolio"
                            }, {
                                label: "Blog",
                                to: "/blog"
                            }, {
                                label: "Contact",
                                to: "/contact"
                            }].map( ({label: u, to: c}) => p.jsx("li", {
                                children: p.jsx(kt, {
                                    to: c,
                                    className: "text-sm text-zinc-500 hover:text-amber-400 transition-colors font-['DM_Sans']",
                                    children: u
                                })
                            }, c))
                        })]
                    }), p.jsxs("div", {
                        children: [p.jsx("p", {
                            className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-4",
                            children: "Product"
                        }), p.jsxs("ul", {
                            className: "space-y-2 mb-6",
                            children: [p.jsx("li", {
                                children: p.jsx(kt, {
                                    to: "/nexus-field",
                                    className: "text-sm text-amber-500 hover:text-amber-400 font-['Barlow_Condensed'] font-700 uppercase tracking-wider transition-colors",
                                    children: "Nexus Field App"
                                })
                            }), p.jsx("li", {
                                children: p.jsx("a", {
                                    href: "https://wavenexusos.polsia.app/intake",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-sm text-zinc-500 hover:text-white transition-colors font-['DM_Sans']",
                                    children: "Request a Demo"
                                })
                            })]
                        }), p.jsx("p", {
                            className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-3",
                            children: "Contact"
                        }), p.jsx("a", {
                            href: `tel:${Ft.phone}`,
                            className: "block text-sm text-zinc-500 hover:text-white transition-colors font-['DM_Sans'] mb-1",
                            children: Ft.phone
                        }), p.jsx("a", {
                            href: `mailto:${Ft.email}`,
                            className: "block text-xs text-zinc-500 hover:text-white transition-colors break-all font-['DM_Sans']",
                            children: Ft.email
                        })]
                    })]
                }), p.jsxs("div", {
                    className: "border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3",
                    children: [p.jsxs("p", {
                        className: "font-['JetBrains_Mono'] text-[10px] text-zinc-700 uppercase tracking-widest",
                        children: ["© 2026 ", Ft.name, ". All rights reserved."]
                    }), p.jsx("p", {
                        className: "font-['JetBrains_Mono'] text-[10px] text-zinc-700 uppercase tracking-widest",
                        children: "Hampton Roads, VA · USMC Veteran Owned"
                    })]
                })]
            })]
        })]
    })
}
function Hd(t, n, i, o) {
    typeof window < "u" && window.gtag && window.gtag("event", t, {
        event_category: n,
        event_label: i,
        value: o
    })
}
const Gt = {
    hidden: {
        opacity: 0,
        y: 32
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .55,
            ease: "easeOut"
        }
    }
}
  , io = {
    show: {
        transition: {
            staggerChildren: .09
        }
    }
};
function uN() {
    return p.jsxs(p.Fragment, {
        children: [p.jsxs("section", {
            className: "relative min-h-[92vh] flex items-center overflow-hidden bg-zinc-950",
            children: [p.jsx("div", {
                className: "absolute inset-0 opacity-[0.04]",
                style: {
                    backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }
            }), p.jsx("div", {
                className: "absolute inset-0 bg-cover bg-center opacity-15",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1760192465389-f0b1f9b6abd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')"
                }
            }), p.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/40"
            }), p.jsxs("div", {
                className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full",
                children: [p.jsxs(Q.div, {
                    initial: "hidden",
                    animate: "show",
                    variants: io,
                    className: "max-w-4xl",
                    children: [p.jsxs(Q.div, {
                        variants: Gt,
                        className: "flex items-center gap-3 mb-8",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-12 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "US Marine Corps Veteran Owned · Hampton Roads, VA"
                        })]
                    }), p.jsxs(Q.h1, {
                        variants: Gt,
                        className: "font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-9xl uppercase leading-[0.9] tracking-tight text-white mb-6",
                        children: ["Web Design", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "& Field Service"
                        }), p.jsx("br", {}), "Software"]
                    }), p.jsx(Q.p, {
                        variants: Gt,
                        className: "text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl font-['DM_Sans']",
                        children: "We build websites that bring in leads and make field service software that actually fits the way your team works. Small team. Focused work. Hampton Roads, VA."
                    }), p.jsxs(Q.div, {
                        variants: Gt,
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [p.jsxs(kt, {
                            to: "/nexus-field",
                            className: "flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors",
                            children: ["Explore Nexus Field ", p.jsx(yt, {
                                className: "h-5 w-5"
                            })]
                        }), p.jsxs(kt, {
                            to: "/services",
                            className: "flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-white font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-lg hover:border-amber-500 hover:text-amber-400 transition-all",
                            children: ["Our Services ", p.jsx(Ky, {
                                className: "h-5 w-5"
                            })]
                        })]
                    })]
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    animate: "show",
                    variants: io,
                    className: "mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800 border border-zinc-800",
                    children: [{
                        val: "8+",
                        label: "Projects"
                    }, {
                        val: "USMC",
                        label: "Veteran Led"
                    }, {
                        val: "24/7",
                        label: "Support"
                    }, {
                        val: "100%",
                        label: "Satisfaction"
                    }].map( ({val: t, label: n}) => p.jsxs(Q.div, {
                        variants: Gt,
                        className: "bg-zinc-950 px-6 py-5 text-center",
                        children: [p.jsx("div", {
                            className: "font-['Barlow_Condensed'] font-900 text-3xl text-amber-500 uppercase",
                            children: t
                        }), p.jsx("div", {
                            className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mt-1",
                            children: n
                        })]
                    }, n))
                })]
            })]
        }), p.jsx("section", {
            className: "bg-zinc-950 py-24 lg:py-32 border-t border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Gt,
                    className: "flex items-center gap-4 mb-12",
                    children: [p.jsx("div", {
                        className: "h-[2px] w-8 bg-amber-500"
                    }), p.jsx("span", {
                        className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                        children: "Our Software Product"
                    }), p.jsxs("span", {
                        className: "flex items-center gap-1.5 px-3 py-1 border border-amber-500/30 bg-amber-500/10",
                        children: [p.jsx("span", {
                            className: "w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[10px] text-amber-400 uppercase tracking-widest",
                            children: "Live Now"
                        })]
                    })]
                }), p.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-start",
                    children: [p.jsxs(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: Gt,
                        children: [p.jsx("h2", {
                            className: "font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-2",
                            children: "Nexus"
                        }), p.jsx("h2", {
                            className: "font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-amber-500 mb-8",
                            children: "Field"
                        }), p.jsx("div", {
                            className: "w-16 h-[2px] bg-amber-500 mb-8"
                        }), p.jsx("p", {
                            className: "text-zinc-300 text-lg leading-relaxed mb-6 font-['DM_Sans']",
                            children: "Field service software built by people who actually talked to field service companies. We got tired of seeing teams duct-tape together spreadsheets, group texts, and apps that never quite fit — so we built one that does."
                        }), p.jsxs("p", {
                            className: "text-zinc-500 leading-relaxed mb-10 font-['DM_Sans']",
                            children: ["Parts inventory is ", p.jsx("span", {
                                className: "text-white font-semibold",
                                children: "free in every plan"
                            }), " — warehouse stock, truck-level inventory, and parts-per-job logging. Because it shouldn't cost extra to know where your parts went."]
                        }), p.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-4",
                            children: [p.jsxs(kt, {
                                to: "/nexus-field",
                                className: "flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors",
                                children: ["See Full Product ", p.jsx(yt, {
                                    className: "h-5 w-5"
                                })]
                            }), p.jsx("a", {
                                href: "https://wavenexusos.polsia.app/intake",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all",
                                children: "Request Demo"
                            })]
                        })]
                    }), p.jsxs(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: io,
                        className: "space-y-px",
                        children: [p.jsx("div", {
                            className: "overflow-hidden mb-px",
                            children: p.jsx("img", {
                                src: "https://images.unsplash.com/photo-1507297230445-ff678f10b524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                                alt: "Field service manager on tablet",
                                className: "w-full h-52 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            })
                        }), p.jsx("div", {
                            className: "grid grid-cols-2 gap-px bg-zinc-800",
                            children: [{
                                icon: Xy,
                                label: "Parts Inventory",
                                note: "Free · Warehouse + Truck",
                                amber: !0
                            }, {
                                icon: dl,
                                label: "Job Tracking",
                                note: "Full history & notes",
                                amber: !1
                            }, {
                                icon: Gy,
                                label: "Photo Database",
                                note: "Attached to every job",
                                amber: !1
                            }, {
                                icon: ev,
                                label: "Built to Suit",
                                note: "Configured for you",
                                amber: !1
                            }].map( ({icon: t, label: n, note: i, amber: o}) => p.jsxs(Q.div, {
                                variants: Gt,
                                className: `p-5 ${o ? "bg-amber-500/10 border border-amber-500/30" : "bg-zinc-900"}`,
                                children: [p.jsx(t, {
                                    className: `h-5 w-5 mb-3 ${o ? "text-amber-400" : "text-zinc-500"}`
                                }), o && p.jsx("span", {
                                    className: "font-['JetBrains_Mono'] text-[9px] text-amber-400 uppercase tracking-widest block mb-1",
                                    children: "Free"
                                }), p.jsx("p", {
                                    className: `font-['Barlow_Condensed'] font-700 uppercase tracking-wider text-sm ${o ? "text-amber-400" : "text-white"}`,
                                    children: n
                                }), p.jsx("p", {
                                    className: "font-['DM_Sans'] text-xs text-zinc-600 mt-0.5",
                                    children: i
                                })]
                            }, n))
                        }), p.jsxs("div", {
                            className: "bg-zinc-900 p-4",
                            children: [p.jsx("p", {
                                className: "font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-zinc-600 mb-3",
                                children: "Built For"
                            }), p.jsx("div", {
                                className: "flex flex-wrap gap-2",
                                children: ["HVAC", "Plumbing", "Electrical", "Landscaping", "Contracting", "Appliance Repair"].map(t => p.jsx("span", {
                                    className: "font-['JetBrains_Mono'] text-[10px] text-zinc-500 border border-zinc-800 px-2 py-1 uppercase tracking-wider",
                                    children: t
                                }, t))
                            })]
                        })]
                    })]
                })]
            })
        }), p.jsx("section", {
            className: "bg-zinc-900 py-24 border-t border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Gt,
                    className: "mb-14",
                    children: [p.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "Digital Agency"
                        })]
                    }), p.jsxs("h2", {
                        className: "font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white",
                        children: ["What We Do for", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "Local Businesses"
                        })]
                    })]
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: io,
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800",
                    children: [{
                        icon: Jy,
                        title: "Website Development",
                        desc: "Sites that load fast, work on phones, and actually bring in inquiries."
                    }, {
                        icon: qy,
                        title: "SEO & AI Search",
                        desc: "Show up on Google and in AI tools like ChatGPT when locals search for you."
                    }, {
                        icon: Qy,
                        title: "Branding & Logos",
                        desc: "A visual identity that makes your business look like it belongs at the top."
                    }, {
                        icon: Zy,
                        title: "Social Media",
                        desc: "Consistent presence without you having to think about it every week."
                    }].map( ({icon: t, title: n, desc: i}) => p.jsxs(Q.div, {
                        variants: Gt,
                        className: "bg-zinc-900 p-8 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500",
                        children: [p.jsx(t, {
                            className: "h-6 w-6 text-amber-500 mb-6"
                        }), p.jsx("h3", {
                            className: "font-['Barlow_Condensed'] font-800 text-xl uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors",
                            children: n
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed",
                            children: i
                        })]
                    }, n))
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Gt,
                    className: "mt-8",
                    children: p.jsxs(kt, {
                        to: "/services",
                        className: "inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all",
                        children: ["View All Services ", p.jsx(yt, {
                            className: "h-4 w-4"
                        })]
                    })
                })]
            })
        }), p.jsx("section", {
            className: "bg-zinc-950 py-24 border-t border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Gt,
                    className: "mb-12",
                    children: [p.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "Our Work"
                        })]
                    }), p.jsxs("h2", {
                        className: "font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white",
                        children: ["Real Projects,", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "Real Results"
                        })]
                    })]
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: io,
                    className: "grid md:grid-cols-2 gap-px bg-zinc-800 mb-8",
                    children: tv.filter(t => t.name !== "Dizon Digital Media").map( (t, n) => p.jsx(Q.div, {
                        variants: Gt,
                        children: p.jsxs("a", {
                            href: t.url || "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: () => Hd("click", "Portfolio", t.name),
                            className: "block bg-zinc-900 p-8 h-full group hover:bg-zinc-950 transition-colors border-l-2 border-transparent hover:border-amber-500",
                            children: [p.jsx("div", {
                                className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 mb-3",
                                children: t.category
                            }), p.jsx("h3", {
                                className: "font-['Barlow_Condensed'] font-800 text-2xl uppercase text-white mb-3 group-hover:text-amber-400 transition-colors",
                                children: t.name
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed mb-6",
                                children: t.text
                            }), p.jsxs("span", {
                                className: "font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-2 group-hover:gap-3 transition-all",
                                children: ["View Project ", p.jsx(yt, {
                                    className: "h-3.5 w-3.5"
                                })]
                            })]
                        })
                    }, t.name))
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Gt,
                    children: p.jsxs(kt, {
                        to: "/portfolio",
                        className: "inline-flex items-center gap-2 px-7 py-3.5 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all",
                        children: ["View All Work ", p.jsx(yt, {
                            className: "h-4 w-4"
                        })]
                    })
                })]
            })
        }), p.jsx("section", {
            className: "bg-amber-500 py-20",
            children: p.jsx("div", {
                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Gt,
                    className: "grid md:grid-cols-2 gap-10 items-center",
                    children: [p.jsxs("div", {
                        children: [p.jsx("p", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/60 mb-4",
                            children: "Ready When You Are"
                        }), p.jsx("h2", {
                            className: "font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase leading-[0.9] text-zinc-950",
                            children: "Let's figure out what you actually need."
                        })]
                    }), p.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [p.jsx("p", {
                            className: "font-['DM_Sans'] text-zinc-950/70 leading-relaxed",
                            children: "No pitch, no packages you don't need. Start with a free audit — we'll give you an honest look at where you stand."
                        }), p.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-3",
                            children: [p.jsxs("a", {
                                href: "https://wavenexusos.polsia.app/intake",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors",
                                children: ["Free Audit ", p.jsx(yt, {
                                    className: "h-5 w-5"
                                })]
                            }), p.jsx(kt, {
                                to: "/contact",
                                className: "flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all",
                                children: "Contact Us"
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}
const vg = "36.7282"
  , xg = "-76.5836"
  , cN = typeof window < "u" ? window.location.origin : "https://wavenexusdigitalinvest.com"
  , mt = {
    title: "Web Developer Near Me | Local Website Designer Hampton Roads VA | WaveNexus Digital Invest",
    description: "WaveNexus Digital Invest is a veteran-owned local web designer and digital marketing team near you in Hampton Roads, VA. We build websites that bring in leads, run local SEO, and offer AI search optimization for Suffolk, Virginia Beach, Chesapeake, and Newport News businesses. Also makers of Nexus Field field service software.",
    keywords: ["web developer near me", "best web developer near me", "website designer near me", "local website designer near me", "local marketing team near me", "digital marketing near me", "web design near me", "SEO company near me", "local SEO company near me", "website design company near me", "web development company near me", "affordable web designer near me", "small business web designer near me", "branding company near me", "logo designer near me", "social media management near me", "web developer Hampton Roads", "local website designer Hampton Roads VA", "web design Hampton Roads", "digital marketing Hampton Roads VA", "SEO company Hampton Roads", "local marketing team Hampton Roads", "website development Hampton Roads", "marketing agency Hampton Roads Virginia", "web developer Virginia Beach VA", "website designer Virginia Beach", "local web design Virginia Beach", "digital marketing Virginia Beach", "SEO services Virginia Beach VA", "web developer Suffolk VA", "website designer Suffolk Virginia", "web design Suffolk VA", "web developer Chesapeake VA", "website designer Chesapeake Virginia", "digital marketing Chesapeake VA", "web developer Newport News VA", "website design Newport News Virginia", "web developer Norfolk VA", "website designer Norfolk Virginia", "veteran owned web design company Virginia", "veteran owned digital marketing agency Hampton Roads", "marine corps veteran owned business Virginia", "AI SEO optimization Hampton Roads", "GEO optimization Virginia", "Google AI Overview optimization", "ChatGPT SEO optimization", "AI search optimization near me", "field service management software", "field service app", "HVAC job tracking software", "parts inventory field service app", "field service software for plumbers", "field service management app Virginia", "Nexus Field app", "technician management software"].join(", "),
    author: "WaveNexus Digital Invest",
    canonical: cN,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
        title: "Web Developer Near Me | Local Website Designer Hampton Roads VA | WaveNexus Digital",
        description: "Veteran-owned local web design and digital marketing team in Hampton Roads, VA. Custom websites, local SEO, AI SEO optimization, branding — and makers of Nexus Field field service software.",
        type: "website",
        siteName: "WaveNexus Digital Invest",
        locale: "en_US"
    },
    twitter: {
        card: "summary_large_image",
        title: "Local Web Designer & Digital Marketing | Hampton Roads VA | WaveNexus Digital",
        description: "Veteran-owned web design, local SEO, AI SEO, and digital marketing serving Hampton Roads VA. Also makers of Nexus Field field service management software."
    },
    geo: {
        region: "US-VA",
        placename: "Hampton Roads, Virginia",
        latitude: vg,
        longitude: xg,
        icbm: `${vg}, ${xg}`
    }
};
function dN() {
    document.title = mt.title;
    const t = document.head;
    ['meta[name="robots"]', 'meta[name="ROBOTS"]', 'meta[name="Robots"]', 'meta[http-equiv="X-Robots-Tag"]', 'meta[content*="noindex"]', 'meta[content*="nofollow"]'].forEach(u => {
        document.querySelectorAll(u).forEach(c => c.remove())
    }
    );
    const n = document.createElement("meta");
    n.setAttribute("name", "robots"),
    n.setAttribute("content", mt.robots),
    t.appendChild(n);
    const i = (u, c, f, m) => {
        let y = document.querySelector(u);
        y || (y = document.createElement("meta"),
        y.setAttribute(c, f),
        t.appendChild(y)),
        y.setAttribute("content", m)
    }
    ;
    i('meta[name="description"]', "name", "description", mt.description),
    i('meta[name="keywords"]', "name", "keywords", mt.keywords),
    i('meta[name="author"]', "name", "author", mt.author),
    i('meta[name="geo.region"]', "name", "geo.region", mt.geo.region),
    i('meta[name="geo.placename"]', "name", "geo.placename", mt.geo.placename),
    i('meta[name="geo.position"]', "name", "geo.position", `${mt.geo.latitude};${mt.geo.longitude}`),
    i('meta[name="ICBM"]', "name", "ICBM", mt.geo.icbm),
    i('meta[name="format-detection"]', "name", "format-detection", "telephone=yes"),
    i('meta[name="apple-mobile-web-app-capable"]', "name", "apple-mobile-web-app-capable", "yes"),
    i('meta[name="apple-mobile-web-app-status-bar-style"]', "name", "apple-mobile-web-app-status-bar-style", "black-translucent"),
    document.documentElement.setAttribute("lang", "en"),
    i('meta[name="language"]', "name", "language", "English"),
    i('meta[http-equiv="content-language"]', "http-equiv", "content-language", "en-us");
    let o = document.querySelector('link[rel="canonical"]');
    o || (o = document.createElement("link"),
    o.setAttribute("rel", "canonical"),
    t.appendChild(o)),
    o.setAttribute("href", mt.canonical);
    const l = document.querySelector('meta[name="viewport"]');
    l && l.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"),
    [{
        property: "og:title",
        content: mt.openGraph.title
    }, {
        property: "og:description",
        content: mt.openGraph.description
    }, {
        property: "og:type",
        content: mt.openGraph.type
    }, {
        property: "og:site_name",
        content: mt.openGraph.siteName
    }, {
        property: "og:locale",
        content: mt.openGraph.locale
    }, {
        property: "og:url",
        content: mt.canonical
    }].forEach( ({property: u, content: c}) => {
        let f = document.querySelector(`meta[property="${u}"]`);
        f || (f = document.createElement("meta"),
        f.setAttribute("property", u),
        t.appendChild(f)),
        f.setAttribute("content", c)
    }
    ),
    [{
        name: "twitter:card",
        content: mt.twitter.card
    }, {
        name: "twitter:title",
        content: mt.twitter.title
    }, {
        name: "twitter:description",
        content: mt.twitter.description
    }].forEach( ({name: u, content: c}) => {
        let f = document.querySelector(`meta[name="${u}"]`);
        f || (f = document.createElement("meta"),
        f.setAttribute("name", u),
        t.appendChild(f)),
        f.setAttribute("content", c)
    }
    )
}
function ws(t, n) {
    document.title = `${t} | WaveNexus Digital Invest`;
    const i = document.querySelector('meta[name="description"]');
    i && i.setAttribute("content", n)
}
const fN = "/assets/1st_vet_image-AhfVhD1d.png"
  , hN = "/assets/2nd_vet_logo-BGCHX9iR.png"
  , Wn = {
    hidden: {
        opacity: 0,
        y: 28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: "easeOut"
        }
    }
}
  , wg = {
    show: {
        transition: {
            staggerChildren: .09
        }
    }
};
function pN() {
    return E.useEffect( () => {
        ws("About — Veteran-Owned Web Design | Hampton Roads VA", "WaveNexus Digital Invest is a veteran-owned web design and digital marketing company in Hampton Roads, VA. Marine Corps veteran founded, serving Suffolk, Virginia Beach, Chesapeake, and Newport News.")
    }
    , []),
    p.jsxs(p.Fragment, {
        children: [p.jsxs("section", {
            className: "relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border",
            children: [p.jsx("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }
            }), p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    animate: "show",
                    variants: wg,
                    className: "max-w-3xl",
                    children: [p.jsxs(Q.div, {
                        variants: Wn,
                        className: "flex items-center gap-4 mb-8",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "Our Story"
                        })]
                    }), p.jsxs(Q.h1, {
                        variants: Wn,
                        className: "font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8",
                        children: ["Small Team.", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "Serious Work."
                        })]
                    }), p.jsx(Q.p, {
                        variants: Wn,
                        className: "font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed",
                        children: "Marine Corps veteran-owned digital agency and SaaS company based in Hampton Roads, VA. We'd rather do great work for a few clients than mediocre work for many."
                    })]
                })
            })]
        }), p.jsx("section", {
            className: "bg-zinc-900 py-12 border-b border-border",
            children: p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Wn,
                    className: "flex flex-col sm:flex-row items-center justify-center gap-px bg-zinc-800 max-w-xl mx-auto",
                    children: [p.jsx("div", {
                        className: "bg-zinc-900 p-8 flex items-center justify-center w-full",
                        children: p.jsx("img", {
                            src: fN,
                            alt: "Veteran Owned Business",
                            className: "max-h-28 w-auto"
                        })
                    }), p.jsx("div", {
                        className: "bg-zinc-900 p-8 flex items-center justify-center w-full",
                        children: p.jsx("img", {
                            src: hN,
                            alt: "Marine Corps Veteran",
                            className: "max-h-28 w-auto"
                        })
                    })]
                })
            })
        }), p.jsx("section", {
            className: "bg-zinc-950 py-24 border-b border-border",
            children: p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [p.jsx(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: Wn,
                        children: p.jsx("div", {
                            className: "overflow-hidden",
                            children: p.jsx("img", {
                                src: "https://images.unsplash.com/photo-1773434013413-b2c56e94c5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                                alt: "Iwo Jima Memorial",
                                className: "w-full h-[480px] object-cover grayscale"
                            })
                        })
                    }), p.jsxs(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: Wn,
                        transition: {
                            delay: .15
                        },
                        children: [p.jsxs("div", {
                            className: "flex items-center gap-4 mb-8",
                            children: [p.jsx("div", {
                                className: "h-[2px] w-8 bg-amber-500"
                            }), p.jsx("span", {
                                className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                                children: "Our Mission"
                            })]
                        }), p.jsxs("h2", {
                            className: "font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white mb-8 leading-[0.9]",
                            children: ["Why We", p.jsx("br", {}), p.jsx("span", {
                                className: "text-amber-500",
                                children: "Started This"
                            })]
                        }), p.jsxs("div", {
                            className: "space-y-5 font-['DM_Sans'] text-zinc-400 leading-relaxed",
                            children: [p.jsxs("p", {
                                children: ["Chris founded WaveNexus after leaving the ", p.jsx("span", {
                                    className: "text-white font-semibold",
                                    children: "Marine Corps"
                                }), " and seeing how many good local businesses were getting left behind online — paying too much for agencies that didn't care, or just not knowing where to start."]
                            }), p.jsxs("p", {
                                children: ["We build websites, handle SEO, and help businesses look the part online. We also built ", p.jsx("span", {
                                    className: "text-amber-400 font-semibold",
                                    children: "Nexus Field"
                                }), " — our field service management app — because field service companies kept telling us the same thing: the software out there doesn't fit how we work."]
                            }), p.jsx("p", {
                                children: "We're not trying to be everything to everyone. Just really good at what we do for the clients who trust us with it."
                            })]
                        })]
                    })]
                })
            })
        }), p.jsx("section", {
            className: "bg-zinc-900 py-24 border-b border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Wn,
                    className: "mb-12",
                    children: [p.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "How We Operate"
                        })]
                    }), p.jsx("h2", {
                        className: "font-['Barlow_Condensed'] font-900 text-5xl uppercase text-white",
                        children: "Our Values"
                    })]
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: wg,
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800",
                    children: [{
                        n: "01",
                        title: "We Finish What We Start",
                        body: "Once we take a project, we see it through — no halfway handoffs."
                    }, {
                        n: "02",
                        title: "We're Honest With You",
                        body: "If something won't work for your situation, we'll tell you."
                    }, {
                        n: "03",
                        title: "We Focus on What Moves the Needle",
                        body: "Not every tactic is worth your money. We focus on what actually matters."
                    }, {
                        n: "04",
                        title: "We Sweat the Details",
                        body: "The small stuff adds up — we care about getting things right, not just done."
                    }].map( ({n: t, title: n, body: i}) => p.jsxs(Q.div, {
                        variants: Wn,
                        className: "bg-zinc-900 p-8 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500",
                        children: [p.jsx("div", {
                            className: "font-['Barlow_Condensed'] font-900 text-4xl text-amber-500/20 group-hover:text-amber-500/40 transition-colors mb-4 leading-none",
                            children: t
                        }), p.jsx("h3", {
                            className: "font-['Barlow_Condensed'] font-800 text-lg uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors",
                            children: n
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed",
                            children: i
                        })]
                    }, t))
                })]
            })
        }), p.jsx("section", {
            className: "bg-zinc-950 py-24 border-b border-border",
            children: p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-center",
                    children: [p.jsxs(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: Wn,
                        children: [p.jsxs("div", {
                            className: "flex items-center gap-4 mb-8",
                            children: [p.jsx("div", {
                                className: "h-[2px] w-8 bg-amber-500"
                            }), p.jsx("span", {
                                className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                                children: "Our Process"
                            })]
                        }), p.jsxs("h2", {
                            className: "font-['Barlow_Condensed'] font-900 text-5xl uppercase text-white mb-8 leading-[0.9]",
                            children: ["How We", p.jsx("br", {}), p.jsx("span", {
                                className: "text-amber-500",
                                children: "Work"
                            })]
                        }), p.jsx("div", {
                            className: "space-y-px",
                            children: [{
                                n: "1",
                                title: "We Listen First",
                                body: "Before recommending anything, we want to understand what you're actually trying to accomplish."
                            }, {
                                n: "2",
                                title: "We Make a Plan Together",
                                body: "No surprise scope creep. We align on what we're building, why, and when."
                            }, {
                                n: "3",
                                title: "We Build and Launch",
                                body: "You stay in the loop. Nothing goes live until you're happy with it."
                            }, {
                                n: "4",
                                title: "We Stick Around",
                                body: "Questions after launch? Changes needed? We're not hard to reach."
                            }].map( ({n: t, title: n, body: i}) => p.jsxs("div", {
                                className: "flex gap-5 items-start bg-zinc-900 p-5 border-l-2 border-transparent hover:border-amber-500 transition-all group",
                                children: [p.jsx("div", {
                                    className: "flex-shrink-0 font-['Barlow_Condensed'] font-900 text-2xl text-amber-500 w-6",
                                    children: t
                                }), p.jsxs("div", {
                                    children: [p.jsx("p", {
                                        className: "font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white text-sm group-hover:text-amber-400 transition-colors",
                                        children: n
                                    }), p.jsx("p", {
                                        className: "font-['DM_Sans'] text-xs text-zinc-600 leading-relaxed mt-1",
                                        children: i
                                    })]
                                })]
                            }, t))
                        })]
                    }), p.jsx(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: Wn,
                        transition: {
                            delay: .15
                        },
                        children: p.jsx("div", {
                            className: "overflow-hidden",
                            children: p.jsx("img", {
                                src: "https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                                alt: "Team collaboration",
                                className: "w-full h-[440px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            })
                        })
                    })]
                })
            })
        }), p.jsx("section", {
            className: "bg-amber-500 py-20",
            children: p.jsx("div", {
                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Wn,
                    className: "grid md:grid-cols-2 gap-10 items-center",
                    children: [p.jsxs("div", {
                        children: [p.jsx("p", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/50 mb-4",
                            children: "Service Area"
                        }), p.jsxs("h2", {
                            className: "font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-zinc-950 leading-[0.9]",
                            children: ["Proudly Serving", p.jsx("br", {}), "Hampton Roads"]
                        })]
                    }), p.jsxs("div", {
                        children: [p.jsx("p", {
                            className: "font-['DM_Sans'] text-zinc-950/70 mb-6 leading-relaxed",
                            children: "Suffolk · Virginia Beach · Chesapeake · Newport News · Hampton · Norfolk · Portsmouth · Williamsburg · York County · Isle of Wight"
                        }), p.jsxs("div", {
                            className: "flex flex-col sm:flex-row gap-3",
                            children: [p.jsxs("a", {
                                href: "https://wavenexusos.polsia.app/intake",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-center gap-2 px-6 py-3 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors",
                                children: ["Free Audit ", p.jsx(yt, {
                                    className: "h-4 w-4"
                                })]
                            }), p.jsx(kt, {
                                to: "/contact",
                                className: "flex items-center justify-center gap-2 px-6 py-3 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all",
                                children: "Contact Us"
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}
const Bt = {
    hidden: {
        opacity: 0,
        y: 28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: "easeOut"
        }
    }
}
  , Wa = {
    show: {
        transition: {
            staggerChildren: .08
        }
    }
}
  , mN = [{
    icon: dl,
    title: "Job Tracking & Notes",
    body: "Every job has its own page — status, tech notes, customer info, and a full activity timeline. You always know where things stand."
}, {
    icon: Gy,
    title: "Photo Database",
    body: "Photos attach to the job automatically. Before, during, after — searchable when you need them, not buried in someone's camera roll."
}, {
    icon: dl,
    title: "Surveys & Inspections",
    body: "When a job needs a site survey or checklist, it's built into the workflow — not a separate clipboard. It stays with the job record."
}, {
    icon: q2,
    title: "Built to Suit",
    body: "We configure the app around how your business actually operates. When your team logs in, it shouldn't feel foreign.",
    badge: "Custom"
}, {
    icon: iN,
    title: "Technician Management",
    body: "See who's on what, track job progress, manage trucks. Less time chasing updates, more time running the business."
}, {
    icon: fl,
    title: "Customer-First Records",
    body: "Before you even say hello, pull up a customer's full history — past jobs, photos, parts used, notes. Every call goes smoother."
}]
  , gN = [{
    n: "01",
    title: "Tell us how you work",
    body: "We ask about your dispatch flow, job types, parts setup, and what's currently frustrating your team."
}, {
    n: "02",
    title: "We configure it for you",
    body: "Your terminology, your job types, your parts catalog. When your team logs in for the first time, it shouldn't feel foreign."
}, {
    n: "03",
    title: "We walk everyone through it",
    body: "We train your techs and dispatchers before go-live. If something isn't working after launch, we fix it."
}];
function yN() {
    return E.useEffect( () => {
        ws("Nexus Field — Field Service Management Software", "Nexus Field is field service management software for HVAC, plumbing, electrical, and contracting companies. Free parts inventory, job tracking, photo database, and survey tools — configured around your team.")
    }
    , []),
    p.jsxs(p.Fragment, {
        children: [p.jsxs("section", {
            className: "relative bg-zinc-950 min-h-[90vh] flex items-center overflow-hidden",
            children: [p.jsx("div", {
                className: "absolute inset-0 opacity-[0.04]",
                style: {
                    backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }
            }), p.jsx("div", {
                className: "absolute top-0 right-0 w-1/2 h-full opacity-20 bg-cover bg-center",
                style: {
                    backgroundImage: "url('https://images.unsplash.com/photo-1640622300362-573446a17973?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')"
                }
            }), p.jsx("div", {
                className: "absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"
            }), p.jsx("div", {
                className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    animate: "show",
                    variants: Wa,
                    className: "max-w-3xl",
                    children: [p.jsxs(Q.div, {
                        variants: Bt,
                        className: "flex items-center gap-3 mb-8",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "Field Service Management Software"
                        })]
                    }), p.jsxs(Q.div, {
                        variants: Bt,
                        children: [p.jsx("h1", {
                            className: "font-['Barlow_Condensed'] font-900 text-7xl sm:text-8xl lg:text-[9rem] uppercase leading-[0.85] text-white",
                            children: "Nexus"
                        }), p.jsx("h1", {
                            className: "font-['Barlow_Condensed'] font-900 text-7xl sm:text-8xl lg:text-[9rem] uppercase leading-[0.85] text-amber-500",
                            children: "Field"
                        })]
                    }), p.jsx(Q.p, {
                        variants: Bt,
                        className: "font-['DM_Sans'] text-xl text-zinc-300 mt-8 mb-4 leading-relaxed max-w-xl",
                        children: "Field service software that works the way your team does."
                    }), p.jsx(Q.p, {
                        variants: Bt,
                        className: "font-['DM_Sans'] text-zinc-500 leading-relaxed mb-10 max-w-xl",
                        children: "We built this because the apps out there were either too expensive, too complicated, or made by people who've never dispatched a tech. Parts, jobs, photos, surveys — all in one place, set up around how you already work."
                    }), p.jsxs(Q.div, {
                        variants: Bt,
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [p.jsxs("a", {
                            href: "https://wavenexusos.polsia.app/intake",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors",
                            children: ["Request a Demo ", p.jsx(yt, {
                                className: "h-5 w-5"
                            })]
                        }), p.jsx(kt, {
                            to: "/contact",
                            className: "flex items-center justify-center gap-2 px-8 py-4 border border-zinc-700 text-zinc-300 font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-lg hover:border-amber-500 hover:text-amber-400 transition-all",
                            children: "Talk to Us First"
                        })]
                    }), p.jsx(Q.div, {
                        variants: Bt,
                        className: "mt-12 flex flex-wrap gap-2",
                        children: ["HVAC", "Plumbing", "Electrical", "Landscaping", "General Contracting", "Appliance Repair", "Security Systems", "Pest Control"].map(t => p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-wider text-zinc-500 border border-zinc-800 px-3 py-1.5",
                            children: t
                        }, t))
                    })]
                })
            })]
        }), p.jsx("section", {
            className: "bg-zinc-900 py-24 lg:py-32 border-t border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Bt,
                    className: "mb-4",
                    children: p.jsxs("span", {
                        className: "inline-flex items-center gap-2 px-4 py-2 border border-amber-500/30 bg-amber-500/10",
                        children: [p.jsx("span", {
                            className: "w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-400",
                            children: "Included Free in Every Plan"
                        })]
                    })
                }), p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Bt,
                    className: "mb-16",
                    children: [p.jsxs("h2", {
                        className: "font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl lg:text-7xl uppercase text-white leading-[0.9]",
                        children: ["Parts Inventory", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "Management"
                        })]
                    }), p.jsx("div", {
                        className: "w-16 h-[2px] bg-amber-500 mt-6"
                    })]
                }), p.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-start",
                    children: [p.jsx(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: Wa,
                        className: "space-y-px",
                        children: [{
                            icon: Xy,
                            title: "Warehouse Stock",
                            body: "Full catalog of everything in your warehouse — quantities, locations, and low-stock alerts before a tech even asks."
                        }, {
                            icon: tN,
                            title: "Truck-Level Inventory",
                            body: "Each truck has its own parts list. Know what's on every vehicle and get notified when stock runs low."
                        }, {
                            icon: fl,
                            title: "Technician Accountability",
                            body: "Trucks are assigned to techs. When a part comes off for a job, it's logged — you know who used what, every time."
                        }, {
                            icon: dl,
                            title: "Parts Used Per Job",
                            body: "Every job shows exactly what was pulled. Great for billing, catching waste, and knowing your true cost per call."
                        }].map( ({icon: t, title: n, body: i}) => p.jsxs(Q.div, {
                            variants: Bt,
                            className: "flex gap-5 bg-zinc-950 p-6 border-l-2 border-transparent hover:border-amber-500 transition-all group",
                            children: [p.jsx("div", {
                                className: "flex-shrink-0 w-10 h-10 border border-amber-500/30 flex items-center justify-center",
                                children: p.jsx(t, {
                                    className: "h-5 w-5 text-amber-500"
                                })
                            }), p.jsxs("div", {
                                children: [p.jsx("h3", {
                                    className: "font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white mb-1 group-hover:text-amber-400 transition-colors",
                                    children: n
                                }), p.jsx("p", {
                                    className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed",
                                    children: i
                                })]
                            })]
                        }, n))
                    }), p.jsxs(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: Bt,
                        transition: {
                            delay: .15
                        },
                        className: "space-y-px",
                        children: [p.jsx("div", {
                            className: "grid grid-cols-2 gap-px bg-zinc-800 mb-px",
                            children: [{
                                label: "Warehouse SKUs",
                                val: "Unlimited"
                            }, {
                                label: "Fleet Vehicles",
                                val: "All Trucks"
                            }, {
                                label: "Tech Assignment",
                                val: "Built-In"
                            }, {
                                label: "Inventory Cost",
                                val: "$0"
                            }].map( ({label: t, val: n}) => p.jsxs("div", {
                                className: "bg-zinc-900 p-6 text-center",
                                children: [p.jsx("p", {
                                    className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-2",
                                    children: t
                                }), p.jsx("p", {
                                    className: "font-['Barlow_Condensed'] font-900 text-3xl text-amber-500 uppercase",
                                    children: n
                                })]
                            }, t))
                        }), p.jsxs("div", {
                            className: "bg-zinc-950 border border-amber-500/20 p-8",
                            children: [p.jsx("h3", {
                                className: "font-['Barlow_Condensed'] font-800 text-xl uppercase text-white mb-4",
                                children: "The real cost of not tracking parts"
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed mb-4",
                                children: "Parts leave trucks without a job attached. Warehouse stock slowly disappears. At the end of the month the numbers don't add up and nobody knows why."
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-sm text-zinc-400 leading-relaxed",
                                children: "Nexus Field connects parts to jobs from the start. When something gets used, it's recorded. When stock is low, you know before it's a problem."
                            })]
                        }), p.jsx("div", {
                            className: "overflow-hidden",
                            children: p.jsx("img", {
                                src: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                                alt: "Field service technician on the job",
                                className: "w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            })
                        })]
                    })]
                })]
            })
        }), p.jsx("section", {
            className: "bg-zinc-950 py-24 border-t border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Bt,
                    className: "mb-14",
                    children: [p.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "What's Included"
                        })]
                    }), p.jsxs("h2", {
                        className: "font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-white",
                        children: ["Everything in one place.", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "Nothing you don't need."
                        })]
                    })]
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Wa,
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800",
                    children: mN.map( ({icon: t, title: n, body: i, badge: o}) => p.jsxs(Q.div, {
                        variants: Bt,
                        className: "bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500",
                        children: [p.jsxs("div", {
                            className: "flex items-start justify-between mb-6",
                            children: [p.jsx("div", {
                                className: "w-10 h-10 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors",
                                children: p.jsx(t, {
                                    className: "h-5 w-5 text-zinc-500 group-hover:text-amber-500 transition-colors"
                                })
                            }), o && p.jsx("span", {
                                className: "font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest text-amber-400 border border-amber-500/30 px-2 py-1",
                                children: o
                            })]
                        }), p.jsx("h3", {
                            className: "font-['Barlow_Condensed'] font-800 text-lg uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors",
                            children: n
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed",
                            children: i
                        })]
                    }, n))
                })]
            })
        }), p.jsx("section", {
            className: "bg-zinc-900 py-24 border-t border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                children: [p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Bt,
                    className: "mb-14",
                    children: [p.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "Getting Started"
                        })]
                    }), p.jsx("h2", {
                        className: "font-['Barlow_Condensed'] font-900 text-5xl uppercase text-white",
                        children: "How We Onboard You"
                    })]
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Wa,
                    className: "space-y-px",
                    children: gN.map( ({n: t, title: n, body: i}) => p.jsxs(Q.div, {
                        variants: Bt,
                        className: "flex gap-8 items-start bg-zinc-950 p-8 border-l-2 border-transparent hover:border-amber-500 transition-all group",
                        children: [p.jsx("div", {
                            className: "flex-shrink-0 font-['Barlow_Condensed'] font-900 text-4xl text-amber-500/30 group-hover:text-amber-500 transition-colors leading-none",
                            children: t
                        }), p.jsxs("div", {
                            children: [p.jsx("h3", {
                                className: "font-['Barlow_Condensed'] font-800 text-xl uppercase tracking-wider text-white mb-2 group-hover:text-amber-400 transition-colors",
                                children: n
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed",
                                children: i
                            })]
                        })]
                    }, t))
                })]
            })
        }), p.jsx("section", {
            className: "bg-zinc-950 py-24 border-t border-border",
            children: p.jsx("div", {
                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Bt,
                    className: "grid md:grid-cols-2 gap-12 items-center",
                    children: [p.jsxs("div", {
                        children: [p.jsxs("div", {
                            className: "flex items-center gap-4 mb-6",
                            children: [p.jsx("div", {
                                className: "h-[2px] w-8 bg-amber-500"
                            }), p.jsx("span", {
                                className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                                children: "Built By"
                            })]
                        }), p.jsxs("h2", {
                            className: "font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white mb-6",
                            children: ["Made by someone", p.jsx("br", {}), p.jsx("span", {
                                className: "text-amber-500",
                                children: "who gets it"
                            })]
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-zinc-400 leading-relaxed mb-4",
                            children: "WaveNexus is Marine Corps veteran-owned. We didn't build Nexus Field to check a box — we built it because field service businesses kept telling us the same thing: the existing apps don't fit how we work."
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-zinc-500 leading-relaxed",
                            children: "So we made one that does. No bloat, no features that only look good in a demo, no charging extra for the basics."
                        })]
                    }), p.jsx("div", {
                        className: "space-y-px",
                        children: [{
                            icon: X2,
                            label: "No Bloat",
                            sub: "Only features that solve real problems"
                        }, {
                            icon: ev,
                            label: "Works in the Field",
                            sub: "Designed for real working conditions"
                        }, {
                            icon: fl,
                            label: "Clear Accountability",
                            sub: "Everyone owns their jobs, parts, outcomes"
                        }].map( ({icon: t, label: n, sub: i}) => p.jsxs("div", {
                            className: "flex items-center gap-5 bg-zinc-900 p-5 border-l-2 border-transparent hover:border-amber-500 transition-all group",
                            children: [p.jsx(t, {
                                className: "h-5 w-5 text-amber-500 flex-shrink-0"
                            }), p.jsxs("div", {
                                children: [p.jsx("p", {
                                    className: "font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white group-hover:text-amber-400 transition-colors",
                                    children: n
                                }), p.jsx("p", {
                                    className: "font-['DM_Sans'] text-xs text-zinc-600",
                                    children: i
                                })]
                            })]
                        }, n))
                    })]
                })
            })
        }), p.jsx("section", {
            className: "bg-amber-500 py-20",
            children: p.jsx("div", {
                className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Bt,
                    children: [p.jsx("p", {
                        className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/50 mb-4",
                        children: "Request a Demo"
                    }), p.jsx("h2", {
                        className: "font-['Barlow_Condensed'] font-900 text-5xl sm:text-6xl uppercase text-zinc-950 mb-4",
                        children: "Want to see how it'd work for your team?"
                    }), p.jsx("p", {
                        className: "font-['DM_Sans'] text-zinc-950/70 mb-10 max-w-xl mx-auto",
                        children: "We'll walk you through it based on how your business actually runs — not a generic demo with fake data."
                    }), p.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4 justify-center",
                        children: [p.jsxs("a", {
                            href: "https://wavenexusos.polsia.app/intake",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-zinc-900 transition-colors",
                            children: ["Request a Demo ", p.jsx(yt, {
                                className: "h-5 w-5"
                            })]
                        }), p.jsx(kt, {
                            to: "/contact",
                            className: "flex items-center justify-center gap-2 px-8 py-4 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-lg hover:bg-zinc-950 hover:text-amber-500 transition-all",
                            children: "Contact Us First"
                        })]
                    })]
                })
            })
        })]
    })
}
const Nr = {
    hidden: {
        opacity: 0,
        y: 28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: "easeOut"
        }
    }
}
  , Nc = {
    show: {
        transition: {
            staggerChildren: .08
        }
    }
}
  , vN = [{
    icon: Jy,
    label: "Website Development",
    outcome: "You get a website that actually brings in inquiries — not just one that looks nice.",
    forWho: "If you're sending people to a site you're embarrassed to share, or you don't have one at all, this is where to start.",
    results: [{
        heading: "People can find you",
        body: "We build with local SEO in mind from the first line of code, so when someone searches for what you do in Hampton Roads, you show up."
    }, {
        heading: "It works on every phone",
        body: "Most of your visitors are on mobile. We design for that first."
    }, {
        heading: "The path to contact is frictionless",
        body: "Clear calls to action, a form that works, a phone number easy to tap."
    }, {
        heading: "You feel good sharing it",
        body: "When you're proud of your site, you mention it more. That adds up."
    }],
    photo: "https://images.unsplash.com/photo-1603195827187-459ab02554a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    photoAlt: "Web designer working with client"
}, {
    icon: qy,
    label: "SEO & AI Search Optimization",
    outcome: "You show up when people in Hampton Roads search for what you do — on Google and AI tools like ChatGPT.",
    forWho: "If your competitors consistently appear above you in search, or you've never really thought about SEO at all, this is the long game that pays off.",
    results: [{
        heading: "More calls from people actively looking",
        body: "SEO brings in people who are already searching — not people you have to interrupt."
    }, {
        heading: "You show up in AI answers too",
        body: "More people ask ChatGPT and Perplexity for local recommendations. We optimize for those."
    }, {
        heading: "Monthly reports that make sense",
        body: "What's improving, where traffic is coming from, what we're focused on next."
    }, {
        heading: "You stop losing ground to competitors",
        body: "If you're not investing in SEO, someone else is. We help you catch up."
    }],
    photo: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    photoAlt: "Business owner reviewing analytics on tablet"
}, {
    icon: Qy,
    label: "Branding & Logo Design",
    outcome: "Your business looks like it belongs at the top of its market — before a customer ever speaks to you.",
    forWho: "First impressions happen fast. If your logo is dated or something you threw together to get started, it's quietly costing you credibility.",
    results: [{
        heading: "You look like an established business",
        body: "A polished logo and consistent brand signal that you take your work seriously."
    }, {
        heading: "Everything matches everywhere",
        body: "Website, truck wrap, business cards, social — all consistent. More powerful than any single piece alone."
    }, {
        heading: "You stop starting from scratch",
        body: "With a brand guide in hand, you or anyone you work with knows exactly what to use."
    }, {
        heading: "You actually want to use it",
        body: "We're not done until you're genuinely proud of it."
    }],
    photo: "https://images.unsplash.com/photo-1762784574847-16c5100cd1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    photoAlt: "Designer working on brand identity"
}, {
    icon: Zy,
    label: "Social Media Management",
    outcome: "Your business stays visible and top-of-mind without you having to think about it every week.",
    forWho: "You know you should be posting. It's always on the list. But running a business takes everything you've got, and social keeps falling to the bottom.",
    results: [{
        heading: "Consistent presence without the time drain",
        body: "We handle the calendar, creation, and posting. You stay visible without writing a caption."
    }, {
        heading: "Content that sounds like you",
        body: "We take time to understand your voice before writing a word. Nothing generic."
    }, {
        heading: "People remember you when they need you",
        body: "Most won't need your service the day they see your post. Consistency builds recall."
    }, {
        heading: "You stay focused on the work",
        body: "Your time is better spent running your business. We handle the part that keeps it growing online."
    }],
    photo: "https://images.unsplash.com/photo-1521633286323-05b17f47cb74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    photoAlt: "Person managing social media on tablet"
}];
function xN() {
    return E.useEffect( () => {
        ws("Services — Web Design, SEO & Digital Marketing Near Me | Hampton Roads VA", "WaveNexus Digital Invest offers website design, local SEO, AI SEO, branding, and social media management for businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News, VA.")
    }
    , []),
    p.jsxs(p.Fragment, {
        children: [p.jsxs("section", {
            className: "relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border",
            children: [p.jsx("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }
            }), p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    animate: "show",
                    variants: Nc,
                    className: "max-w-3xl",
                    children: [p.jsxs(Q.div, {
                        variants: Nr,
                        className: "flex items-center gap-4 mb-8",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "What We Offer"
                        })]
                    }), p.jsxs(Q.h1, {
                        variants: Nr,
                        className: "font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8",
                        children: ["Services That", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "Actually Work"
                        })]
                    }), p.jsx(Q.p, {
                        variants: Nr,
                        className: "font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed",
                        children: "We keep it to the things we're genuinely good at. Every service below is described by what it changes for your business, not just what it includes."
                    })]
                })
            })]
        }), vN.map( (t, n) => p.jsx("section", {
            className: `py-24 border-b border-border ${n % 2 === 0 ? "bg-zinc-950" : "bg-zinc-900"}`,
            children: p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0,
                        margin: "-60px"
                    },
                    variants: Nr,
                    children: p.jsxs("div", {
                        className: "grid lg:grid-cols-2 gap-16 items-start",
                        children: [p.jsxs("div", {
                            className: n % 2 === 1 ? "lg:order-2" : "",
                            children: [p.jsxs("div", {
                                className: "flex items-center gap-3 mb-6",
                                children: [p.jsx(t.icon, {
                                    className: "h-5 w-5 text-amber-500"
                                }), p.jsx("span", {
                                    className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                                    children: t.label
                                })]
                            }), p.jsx("h2", {
                                className: "font-['Barlow_Condensed'] font-900 text-3xl sm:text-4xl uppercase text-white mb-6 leading-[0.95]",
                                children: t.outcome
                            }), p.jsx("div", {
                                className: "border-l-2 border-amber-500 pl-5 mb-8",
                                children: p.jsx("p", {
                                    className: "font-['DM_Sans'] text-zinc-500 leading-relaxed italic",
                                    children: t.forWho
                                })
                            }), p.jsxs(kt, {
                                to: "/contact",
                                className: "inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors",
                                children: ["Get in Touch ", p.jsx(yt, {
                                    className: "h-4 w-4"
                                })]
                            })]
                        }), p.jsxs("div", {
                            className: n % 2 === 1 ? "lg:order-1" : "",
                            children: [p.jsx("div", {
                                className: "overflow-hidden mb-px",
                                children: p.jsx("img", {
                                    src: t.photo,
                                    alt: t.photoAlt,
                                    className: "w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                })
                            }), p.jsx(Q.div, {
                                variants: Nc,
                                initial: "hidden",
                                whileInView: "show",
                                viewport: {
                                    once: !0
                                },
                                className: "space-y-px",
                                children: t.results.map( ({heading: i, body: o}) => p.jsxs(Q.div, {
                                    variants: Nr,
                                    className: "flex gap-4 items-start bg-zinc-900 p-5 border-l-2 border-transparent hover:border-amber-500 transition-all group",
                                    children: [p.jsx(P2, {
                                        className: "h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5"
                                    }), p.jsxs("div", {
                                        children: [p.jsx("p", {
                                            className: "font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-white text-sm mb-0.5 group-hover:text-amber-400 transition-colors",
                                            children: i
                                        }), p.jsx("p", {
                                            className: "font-['DM_Sans'] text-xs text-zinc-600 leading-relaxed",
                                            children: o
                                        })]
                                    })]
                                }, i))
                            })]
                        })]
                    })
                })
            })
        }, t.label)), p.jsx("section", {
            className: "bg-zinc-950 py-24 border-b border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                children: [p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Nr,
                    className: "mb-12",
                    children: [p.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "How We Quote"
                        })]
                    }), p.jsx("h2", {
                        className: "font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-white",
                        children: "How We Figure Out What You Need"
                    })]
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Nc,
                    className: "grid sm:grid-cols-3 gap-px bg-zinc-800 mb-12",
                    children: [{
                        icon: U2,
                        n: "01",
                        heading: "You tell us where things stand",
                        body: "What you have, what's not working, and what you're after. That shapes everything."
                    }, {
                        icon: fl,
                        n: "02",
                        heading: "We figure out what fits",
                        body: "We'll be straight with you about what would help and what you'd be wasting money on."
                    }, {
                        icon: T2,
                        n: "03",
                        heading: "You get a clear proposal",
                        body: "Scope, timeline, cost — no vague estimates. You know exactly what you're getting."
                    }].map( ({icon: t, n, heading: i, body: o}) => p.jsxs(Q.div, {
                        variants: Nr,
                        className: "bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500",
                        children: [p.jsx("div", {
                            className: "font-['Barlow_Condensed'] font-900 text-4xl text-amber-500/20 group-hover:text-amber-500/50 transition-colors mb-4",
                            children: n
                        }), p.jsx("h3", {
                            className: "font-['Barlow_Condensed'] font-800 text-lg uppercase tracking-wider text-white mb-3 group-hover:text-amber-400 transition-colors",
                            children: i
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed",
                            children: o
                        })]
                    }, n))
                }), p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Nr,
                    className: "text-center",
                    children: [p.jsxs("a", {
                        href: "https://wavenexusos.polsia.app/intake",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors",
                        children: ["Start With a Free Audit ", p.jsx(yt, {
                            className: "h-5 w-5"
                        })]
                    }), p.jsx("p", {
                        className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-700 mt-4",
                        children: "No commitment. Just an honest look at where you stand."
                    })]
                })]
            })
        }), p.jsx("section", {
            className: "bg-zinc-900 py-20",
            children: p.jsx("div", {
                className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: Nr,
                    className: "grid sm:grid-cols-2 gap-10 items-center border border-amber-500/20 bg-zinc-950 p-10",
                    children: [p.jsxs("div", {
                        children: [p.jsxs("span", {
                            className: "inline-flex items-center gap-2 mb-4",
                            children: [p.jsx("span", {
                                className: "w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"
                            }), p.jsx("span", {
                                className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-400",
                                children: "We Also Build Software"
                            })]
                        }), p.jsx("h3", {
                            className: "font-['Barlow_Condensed'] font-900 text-3xl uppercase text-white mb-3",
                            children: "Running a field service company?"
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-zinc-500 leading-relaxed",
                            children: "Nexus Field is our field service management app — job tracking, photo documentation, and free parts inventory built for teams that actually work in the field."
                        })]
                    }), p.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [p.jsxs(kt, {
                            to: "/nexus-field",
                            className: "flex items-center justify-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors",
                            children: ["Learn About Nexus Field ", p.jsx(yt, {
                                className: "h-4 w-4"
                            })]
                        }), p.jsx("a", {
                            href: "https://wavenexusos.polsia.app/intake",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-400 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:border-amber-500 hover:text-amber-400 transition-all",
                            children: "Request a Demo"
                        })]
                    })]
                })
            })
        })]
    })
}
const so = {
    hidden: {
        opacity: 0,
        y: 28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: "easeOut"
        }
    }
}
  , bg = {
    show: {
        transition: {
            staggerChildren: .09
        }
    }
};
function wN() {
    E.useEffect( () => {
        ws("Portfolio — Web Design Work | Hampton Roads VA", "Real projects from WaveNexus Digital Invest — a veteran-owned web design company in Hampton Roads, VA. See our work for local businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News.")
    }
    , []);
    const t = tv.filter(n => n.name !== "Dizon Digital Media");
    return p.jsxs(p.Fragment, {
        children: [p.jsxs("section", {
            className: "relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border",
            children: [p.jsx("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }
            }), p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    animate: "show",
                    variants: bg,
                    className: "max-w-3xl",
                    children: [p.jsxs(Q.div, {
                        variants: so,
                        className: "flex items-center gap-4 mb-8",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "Our Work"
                        })]
                    }), p.jsxs(Q.h1, {
                        variants: so,
                        className: "font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8",
                        children: ["Real Projects.", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "Real Results."
                        })]
                    }), p.jsx(Q.p, {
                        variants: so,
                        className: "font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed",
                        children: "Local service businesses and companies we've helped establish a stronger digital presence."
                    })]
                })
            })]
        }), p.jsx("section", {
            className: "bg-zinc-950 py-24 border-b border-border",
            children: p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: bg,
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800",
                    children: t.map( (n, i) => p.jsx(Q.div, {
                        variants: so,
                        children: n.url ? p.jsxs("a", {
                            href: n.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: () => Hd("click", "Portfolio", n.name),
                            className: "block bg-zinc-950 p-8 h-full group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500",
                            children: [p.jsx("div", {
                                className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-500 mb-4",
                                children: n.category
                            }), p.jsx("h2", {
                                className: "font-['Barlow_Condensed'] font-800 text-2xl uppercase text-white mb-4 group-hover:text-amber-400 transition-colors",
                                children: n.name
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed mb-6",
                                children: n.text
                            }), p.jsxs("span", {
                                className: "font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-2 group-hover:gap-3 transition-all",
                                children: ["View Project ", p.jsx(_2, {
                                    className: "h-3.5 w-3.5"
                                })]
                            })]
                        }) : p.jsxs("div", {
                            className: "bg-zinc-950 p-8 h-full border-b-2 border-zinc-800",
                            children: [p.jsx("div", {
                                className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-4",
                                children: n.category
                            }), p.jsx("h2", {
                                className: "font-['Barlow_Condensed'] font-800 text-2xl uppercase text-zinc-500 mb-4",
                                children: n.name
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-sm text-zinc-700 leading-relaxed mb-6",
                                children: n.text
                            }), p.jsx("span", {
                                className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-700",
                                children: "Coming Soon"
                            })]
                        })
                    }, n.name))
                })
            })
        }), p.jsx("section", {
            className: "bg-amber-500 py-20",
            children: p.jsx("div", {
                className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: so,
                    className: "grid md:grid-cols-2 gap-10 items-center",
                    children: [p.jsxs("div", {
                        children: [p.jsx("p", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-zinc-950/50 mb-4",
                            children: "Your Business Could Be Next"
                        }), p.jsx("h2", {
                            className: "font-['Barlow_Condensed'] font-900 text-4xl sm:text-5xl uppercase text-zinc-950 leading-[0.9]",
                            children: "Ready to build something that brings in leads?"
                        })]
                    }), p.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [p.jsxs("a", {
                            href: "https://wavenexusos.polsia.app/intake",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors",
                            children: ["Free Audit ", p.jsx(yt, {
                                className: "h-4 w-4"
                            })]
                        }), p.jsx(kt, {
                            to: "/contact",
                            className: "flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-zinc-950 text-zinc-950 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-zinc-950 hover:text-amber-500 transition-all",
                            children: "Contact Us"
                        })]
                    })]
                })
            })
        })]
    })
}
const as = {
    hidden: {
        opacity: 0,
        y: 28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: "easeOut"
        }
    }
}
  , jc = {
    show: {
        transition: {
            staggerChildren: .07
        }
    }
}
  , Sg = [{
    category: "Local SEO",
    date: "Jun 18, 2026",
    title: "Your Google Business Profile Is Free Real Estate — Are You Using It?",
    excerpt: "Most local businesses set up their Google Business Profile once and forget about it. An optimized profile can put you at the top of local search results without spending a dollar on ads.",
    readTime: "5 min",
    featured: !0
}, {
    category: "Field Service Tech",
    date: "Jun 2, 2026",
    title: "Why Your Field Service Team Is Losing Money on Untracked Parts",
    excerpt: "Most field service businesses have a parts problem they don't fully see. Parts leave trucks without a job record. Warehouse stock disappears. The numbers don't add up and nobody knows why.",
    readTime: "6 min",
    featured: !0
}, {
    category: "Website Development",
    date: "May 28, 2026",
    title: "5 Signs Your Business Website Is Costing You Customers",
    excerpt: "A slow, outdated, or poorly designed website can silently drain leads. Here are the top warning signs and what modern web design can do to turn things around.",
    readTime: "4 min",
    featured: !1
}, {
    category: "Veteran Business",
    date: "May 15, 2026",
    title: "Military Discipline and the Digital Marketing Mindset",
    excerpt: "Mission focus, adaptability, and executing under pressure — the values from the Marine Corps translate directly into building successful digital strategies for small businesses.",
    readTime: "6 min",
    featured: !1
}, {
    category: "Field Service Tech",
    date: "May 5, 2026",
    title: "What to Look for in a Field Service App (And What Most Get Wrong)",
    excerpt: "There are dozens of field service management apps on the market. Most are bloated, overpriced, or built by people who've never dispatched a tech. Here's what actually matters.",
    readTime: "7 min",
    featured: !1
}, {
    category: "AI & SEO",
    date: "Apr 14, 2026",
    title: "How AI Search Is Changing SEO for Local Service Businesses",
    excerpt: "Google AI Overviews and ChatGPT are reshaping how people find local businesses. Learn how to optimize so your business gets recommended when people ask AI tools for local services.",
    readTime: "7 min",
    featured: !1
}, {
    category: "Web Design",
    date: "Apr 30, 2026",
    title: "Mobile-First Design: Why 70% of Your Visitors Are on Their Phones",
    excerpt: "If your website isn't optimized for mobile, you're losing more than half your potential customers. Here's what mobile-first development means and why it matters for your bottom line.",
    readTime: "4 min",
    featured: !1
}, {
    category: "Reputation & Reviews",
    date: "Jun 5, 2026",
    title: "How to Get More Google Reviews (And Why They Matter More Than You Think)",
    excerpt: "For local service businesses, Google reviews are one of the most powerful things you can have. A simple system for getting reviews consistently without it feeling awkward.",
    readTime: "4 min",
    featured: !1
}, {
    category: "Copywriting",
    date: "May 20, 2026",
    title: "Your Website Looks Great. But Does It Say the Right Things?",
    excerpt: "Most small business sites tell visitors what they do but never explain why it matters or why they should call today. How to fix the words on your site without hiring a copywriter.",
    readTime: "6 min",
    featured: !1
}, {
    category: "Digital Strategy",
    date: "Mar 28, 2026",
    title: "Building a Digital Presence from Scratch: A Step-by-Step Guide",
    excerpt: "Whether you're launching a new Hampton Roads business or modernizing an established one, this guide walks through every step of building a strong, lead-generating digital presence.",
    readTime: "8 min",
    featured: !1
}]
  , kg = {
    "Local SEO": "text-green-400 border-green-400/30 bg-green-400/10",
    "Field Service Tech": "text-amber-400 border-amber-400/30 bg-amber-400/10",
    "Website Development": "text-blue-400 border-blue-400/30 bg-blue-400/10",
    "Veteran Business": "text-red-400 border-red-400/30 bg-red-400/10",
    "AI & SEO": "text-orange-400 border-orange-400/30 bg-orange-400/10",
    "Web Design": "text-violet-400 border-violet-400/30 bg-violet-400/10",
    "Reputation & Reviews": "text-teal-400 border-teal-400/30 bg-teal-400/10",
    Copywriting: "text-rose-400 border-rose-400/30 bg-rose-400/10",
    "Digital Strategy": "text-zinc-400 border-zinc-400/30 bg-zinc-400/10"
};
function bN() {
    E.useEffect( () => {
        ws("Blog — Digital Marketing & Field Service Insights | WaveNexus", "Practical tips on website development, local SEO, AI search, field service technology, and digital strategy from a veteran-owned perspective in Hampton Roads, VA.")
    }
    , []);
    const t = Sg.filter(i => i.featured)
      , n = Sg.filter(i => !i.featured);
    return p.jsxs(p.Fragment, {
        children: [p.jsxs("section", {
            className: "relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border",
            children: [p.jsx("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }
            }), p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    animate: "show",
                    variants: jc,
                    className: "max-w-3xl",
                    children: [p.jsxs(Q.div, {
                        variants: as,
                        className: "flex items-center gap-4 mb-8",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "Insights & Resources"
                        })]
                    }), p.jsxs(Q.h1, {
                        variants: as,
                        className: "font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8",
                        children: ["Digital Marketing", p.jsx("br", {}), p.jsx("span", {
                            className: "text-amber-500",
                            children: "& Field Service"
                        }), p.jsx("br", {}), "Insights"]
                    }), p.jsx(Q.p, {
                        variants: as,
                        className: "font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed",
                        children: "Practical tips on web design, local SEO, AI search, field service tech, and digital strategy — from a veteran-owned perspective."
                    })]
                })
            })]
        }), p.jsx("section", {
            className: "bg-zinc-900 py-16 border-b border-border",
            children: p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [p.jsx("p", {
                    className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-6",
                    children: "Featured"
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: jc,
                    className: "grid md:grid-cols-2 gap-px bg-zinc-800",
                    children: t.map(i => p.jsxs(Q.div, {
                        variants: as,
                        className: "bg-zinc-900 p-8 group hover:bg-zinc-950 transition-colors border-b-2 border-transparent hover:border-amber-500 cursor-pointer",
                        children: [p.jsxs("div", {
                            className: "flex items-center justify-between mb-5",
                            children: [p.jsx("span", {
                                className: `font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest px-2 py-1 border ${kg[i.category] ?? "text-zinc-400 border-zinc-700"}`,
                                children: i.category
                            }), p.jsxs("div", {
                                className: "flex items-center gap-1.5 text-zinc-600",
                                children: [p.jsx(E2, {
                                    className: "h-3 w-3"
                                }), p.jsx("span", {
                                    className: "font-['JetBrains_Mono'] text-[10px]",
                                    children: i.date
                                })]
                            })]
                        }), p.jsx("h2", {
                            className: "font-['Barlow_Condensed'] font-800 text-2xl uppercase text-white mb-4 group-hover:text-amber-400 transition-colors leading-tight",
                            children: i.title
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-sm text-zinc-500 leading-relaxed mb-6",
                            children: i.excerpt
                        }), p.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [p.jsxs("div", {
                                className: "flex items-center gap-1.5 text-zinc-700",
                                children: [p.jsx(k2, {
                                    className: "h-3 w-3"
                                }), p.jsxs("span", {
                                    className: "font-['JetBrains_Mono'] text-[10px]",
                                    children: [i.readTime, " read"]
                                })]
                            }), p.jsxs("span", {
                                className: "font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-1.5 group-hover:gap-2.5 transition-all",
                                children: ["Read More ", p.jsx(yt, {
                                    className: "h-3.5 w-3.5"
                                })]
                            })]
                        })]
                    }, i.title))
                })]
            })
        }), p.jsx("section", {
            className: "bg-zinc-950 py-16",
            children: p.jsxs("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: [p.jsx("p", {
                    className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-6",
                    children: "All Posts"
                }), p.jsx(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: jc,
                    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 mb-12",
                    children: n.map(i => p.jsxs(Q.div, {
                        variants: as,
                        className: "bg-zinc-950 p-7 group hover:bg-zinc-900 transition-colors border-b-2 border-transparent hover:border-amber-500 cursor-pointer",
                        children: [p.jsxs("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [p.jsx("span", {
                                className: `font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest px-2 py-1 border ${kg[i.category] ?? "text-zinc-400 border-zinc-700"}`,
                                children: i.category
                            }), p.jsx("span", {
                                className: "font-['JetBrains_Mono'] text-[9px] text-zinc-700",
                                children: i.date
                            })]
                        }), p.jsx("h3", {
                            className: "font-['Barlow_Condensed'] font-800 text-lg uppercase text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight",
                            children: i.title
                        }), p.jsx("p", {
                            className: "font-['DM_Sans'] text-xs text-zinc-600 leading-relaxed mb-4",
                            children: i.excerpt
                        }), p.jsxs("span", {
                            className: "font-['Barlow_Condensed'] font-700 uppercase tracking-widest text-xs text-amber-500 flex items-center gap-1.5 group-hover:gap-2.5 transition-all",
                            children: ["Read More ", p.jsx(yt, {
                                className: "h-3 w-3"
                            })]
                        })]
                    }, i.title))
                }), p.jsxs(Q.div, {
                    initial: "hidden",
                    whileInView: "show",
                    viewport: {
                        once: !0
                    },
                    variants: as,
                    className: "text-center border-t border-border pt-12",
                    children: [p.jsx("p", {
                        className: "font-['DM_Sans'] text-zinc-500 mb-5",
                        children: "Want personalized digital advice for your business?"
                    }), p.jsxs("a", {
                        href: "https://wavenexusos.polsia.app/intake",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors",
                        children: ["Get Your Free Audit ", p.jsx(yt, {
                            className: "h-4 w-4"
                        })]
                    })]
                })]
            })
        })]
    })
}
var SN = Rg();
const kN = Tg(SN);
function CN(t) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , i = document.createElement("style");
    i.type = "text/css",
    n.appendChild(i),
    i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t))
}
const EN = t => {
    switch (t) {
    case "success":
        return TN;
    case "info":
        return MN;
    case "warning":
        return RN;
    case "error":
        return PN;
    default:
        return null
    }
}
  , NN = Array(12).fill(0)
  , jN = ({visible: t, className: n}) => re.createElement("div", {
    className: ["sonner-loading-wrapper", n].filter(Boolean).join(" "),
    "data-visible": t
}, re.createElement("div", {
    className: "sonner-spinner"
}, NN.map( (i, o) => re.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${o}`
}))))
  , TN = re.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, re.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , RN = re.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, re.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , MN = re.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, re.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , PN = re.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, re.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , DN = re.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, re.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), re.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , AN = () => {
    const [t,n] = re.useState(document.hidden);
    return re.useEffect( () => {
        const i = () => {
            n(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", i),
        () => window.removeEventListener("visibilitychange", i)
    }
    , []),
    t
}
;
let nd = 1;
class _N {
    constructor() {
        this.subscribe = n => (this.subscribers.push(n),
        () => {
            const i = this.subscribers.indexOf(n);
            this.subscribers.splice(i, 1)
        }
        ),
        this.publish = n => {
            this.subscribers.forEach(i => i(n))
        }
        ,
        this.addToast = n => {
            this.publish(n),
            this.toasts = [...this.toasts, n]
        }
        ,
        this.create = n => {
            var i;
            const {message: o, ...l} = n
              , u = typeof (n == null ? void 0 : n.id) == "number" || ((i = n.id) == null ? void 0 : i.length) > 0 ? n.id : nd++
              , c = this.toasts.find(m => m.id === u)
              , f = n.dismissible === void 0 ? !0 : n.dismissible;
            return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u),
            c ? this.toasts = this.toasts.map(m => m.id === u ? (this.publish({
                ...m,
                ...n,
                id: u,
                title: o
            }),
            {
                ...m,
                ...n,
                id: u,
                dismissible: f,
                title: o
            }) : m) : this.addToast({
                title: o,
                ...l,
                dismissible: f,
                id: u
            }),
            u
        }
        ,
        this.dismiss = n => (n ? (this.dismissedToasts.add(n),
        requestAnimationFrame( () => this.subscribers.forEach(i => i({
            id: n,
            dismiss: !0
        })))) : this.toasts.forEach(i => {
            this.subscribers.forEach(o => o({
                id: i.id,
                dismiss: !0
            }))
        }
        ),
        n),
        this.message = (n, i) => this.create({
            ...i,
            message: n
        }),
        this.error = (n, i) => this.create({
            ...i,
            message: n,
            type: "error"
        }),
        this.success = (n, i) => this.create({
            ...i,
            type: "success",
            message: n
        }),
        this.info = (n, i) => this.create({
            ...i,
            type: "info",
            message: n
        }),
        this.warning = (n, i) => this.create({
            ...i,
            type: "warning",
            message: n
        }),
        this.loading = (n, i) => this.create({
            ...i,
            type: "loading",
            message: n
        }),
        this.promise = (n, i) => {
            if (!i)
                return;
            let o;
            i.loading !== void 0 && (o = this.create({
                ...i,
                promise: n,
                type: "loading",
                message: i.loading,
                description: typeof i.description != "function" ? i.description : void 0
            }));
            const l = Promise.resolve(n instanceof Function ? n() : n);
            let u = o !== void 0, c;
            const f = l.then(async y => {
                if (c = ["resolve", y],
                re.isValidElement(y))
                    u = !1,
                    this.create({
                        id: o,
                        type: "default",
                        message: y
                    });
                else if (zN(y) && !y.ok) {
                    u = !1;
                    const g = typeof i.error == "function" ? await i.error(`HTTP error! status: ${y.status}`) : i.error
                      , w = typeof i.description == "function" ? await i.description(`HTTP error! status: ${y.status}`) : i.description
                      , C = typeof g == "object" && !re.isValidElement(g) ? g : {
                        message: g
                    };
                    this.create({
                        id: o,
                        type: "error",
                        description: w,
                        ...C
                    })
                } else if (y instanceof Error) {
                    u = !1;
                    const g = typeof i.error == "function" ? await i.error(y) : i.error
                      , w = typeof i.description == "function" ? await i.description(y) : i.description
                      , C = typeof g == "object" && !re.isValidElement(g) ? g : {
                        message: g
                    };
                    this.create({
                        id: o,
                        type: "error",
                        description: w,
                        ...C
                    })
                } else if (i.success !== void 0) {
                    u = !1;
                    const g = typeof i.success == "function" ? await i.success(y) : i.success
                      , w = typeof i.description == "function" ? await i.description(y) : i.description
                      , C = typeof g == "object" && !re.isValidElement(g) ? g : {
                        message: g
                    };
                    this.create({
                        id: o,
                        type: "success",
                        description: w,
                        ...C
                    })
                }
            }
            ).catch(async y => {
                if (c = ["reject", y],
                i.error !== void 0) {
                    u = !1;
                    const v = typeof i.error == "function" ? await i.error(y) : i.error
                      , g = typeof i.description == "function" ? await i.description(y) : i.description
                      , b = typeof v == "object" && !re.isValidElement(v) ? v : {
                        message: v
                    };
                    this.create({
                        id: o,
                        type: "error",
                        description: g,
                        ...b
                    })
                }
            }
            ).finally( () => {
                u && (this.dismiss(o),
                o = void 0),
                i.finally == null || i.finally.call(i)
            }
            )
              , m = () => new Promise( (y, v) => f.then( () => c[0] === "reject" ? v(c[1]) : y(c[1])).catch(v));
            return typeof o != "string" && typeof o != "number" ? {
                unwrap: m
            } : Object.assign(o, {
                unwrap: m
            })
        }
        ,
        this.custom = (n, i) => {
            const o = (i == null ? void 0 : i.id) || nd++;
            return this.create({
                jsx: n(o),
                id: o,
                ...i
            }),
            o
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(n => !this.dismissedToasts.has(n.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
const sn = new _N
  , LN = (t, n) => {
    const i = (n == null ? void 0 : n.id) || nd++;
    return sn.addToast({
        title: t,
        ...n,
        id: i
    }),
    i
}
  , zN = t => t && typeof t == "object" && "ok"in t && typeof t.ok == "boolean" && "status"in t && typeof t.status == "number"
  , VN = LN
  , ON = () => sn.toasts
  , BN = () => sn.getActiveToasts()
  , Cg = Object.assign(VN, {
    success: sn.success,
    info: sn.info,
    warning: sn.warning,
    error: sn.error,
    custom: sn.custom,
    message: sn.message,
    promise: sn.promise,
    dismiss: sn.dismiss,
    loading: sn.loading
}, {
    getHistory: ON,
    getToasts: BN
});
CN("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}[data-sonner-toaster][data-lifted=true]{transform:translateY(-8px)}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Ua(t) {
    return t.label !== void 0
}
const IN = 3
  , FN = "24px"
  , WN = "16px"
  , Eg = 4e3
  , UN = 356
  , $N = 14
  , HN = 45
  , YN = 200;
function rr(...t) {
    return t.filter(Boolean).join(" ")
}
function GN(t) {
    const [n,i] = t.split("-")
      , o = [];
    return n && o.push(n),
    i && o.push(i),
    o
}
const KN = t => {
    var n, i, o, l, u, c, f, m, y;
    const {invert: v, toast: g, unstyled: w, interacting: b, setHeights: C, visibleToasts: M, heights: N, index: A, toasts: L, expanded: B, removeToast: W, defaultRichColors: U, closeButton: se, style: D, cancelButtonStyle: H, actionButtonStyle: te, className: X="", descriptionClassName: ae="", duration: ke, position: Ae, gap: je, expandByDefault: Re, classNames: ne, icons: be, closeButtonAriaLabel: F="Close toast"} = t
      , [q,K] = re.useState(null)
      , [j,I] = re.useState(null)
      , [ie,me] = re.useState(!1)
      , [we,ue] = re.useState(!1)
      , [ze,Pe] = re.useState(!1)
      , [Ie,lt] = re.useState(!1)
      , [Tr,it] = re.useState(!1)
      , [on,Hn] = re.useState(0)
      , [Vi,an] = re.useState(0)
      , Dn = re.useRef(g.duration || ke || Eg)
      , li = re.useRef(null)
      , At = re.useRef(null)
      , dr = A === 0
      , Yn = A + 1 <= M
      , xt = g.type
      , An = g.dismissible !== !1
      , vn = g.className || ""
      , Gn = g.descriptionClassName || ""
      , Kn = re.useMemo( () => N.findIndex(Te => Te.toastId === g.id) || 0, [N, g.id])
      , fr = re.useMemo( () => {
        var Te;
        return (Te = g.closeButton) != null ? Te : se
    }
    , [g.closeButton, se])
      , Tt = re.useMemo( () => g.duration || ke || Eg, [g.duration, ke])
      , _t = re.useRef(0)
      , Wt = re.useRef(0)
      , Jn = re.useRef(0)
      , xn = re.useRef(null)
      , [Oi,Xt] = Ae.split("-")
      , ui = re.useMemo( () => N.reduce( (Te, et, st) => st >= Kn ? Te : Te + et.height, 0), [N, Kn])
      , hr = AN()
      , Rr = g.invert || v
      , pr = xt === "loading";
    Wt.current = re.useMemo( () => Kn * je + ui, [Kn, ui]),
    re.useEffect( () => {
        Dn.current = Tt
    }
    , [Tt]),
    re.useEffect( () => {
        me(!0)
    }
    , []),
    re.useEffect( () => {
        const Te = At.current;
        if (Te) {
            const et = Te.getBoundingClientRect().height;
            return an(et),
            C(st => [{
                toastId: g.id,
                height: et,
                position: g.position
            }, ...st]),
            () => C(st => st.filter(ut => ut.toastId !== g.id))
        }
    }
    , [C, g.id]),
    re.useLayoutEffect( () => {
        if (!ie)
            return;
        const Te = At.current
          , et = Te.style.height;
        Te.style.height = "auto";
        const st = Te.getBoundingClientRect().height;
        Te.style.height = et,
        an(st),
        C(ut => ut.find(tt => tt.toastId === g.id) ? ut.map(tt => tt.toastId === g.id ? {
            ...tt,
            height: st
        } : tt) : [{
            toastId: g.id,
            height: st,
            position: g.position
        }, ...ut])
    }
    , [ie, g.title, g.description, C, g.id]);
    const Ut = re.useCallback( () => {
        ue(!0),
        Hn(Wt.current),
        C(Te => Te.filter(et => et.toastId !== g.id)),
        setTimeout( () => {
            W(g)
        }
        , YN)
    }
    , [g, W, C, Wt]);
    re.useEffect( () => {
        if (g.promise && xt === "loading" || g.duration === 1 / 0 || g.type === "loading")
            return;
        let Te;
        return B || b || hr ? ( () => {
            if (Jn.current < _t.current) {
                const ut = new Date().getTime() - _t.current;
                Dn.current = Dn.current - ut
            }
            Jn.current = new Date().getTime()
        }
        )() : ( () => {
            Dn.current !== 1 / 0 && (_t.current = new Date().getTime(),
            Te = setTimeout( () => {
                g.onAutoClose == null || g.onAutoClose.call(g, g),
                Ut()
            }
            , Dn.current))
        }
        )(),
        () => clearTimeout(Te)
    }
    , [B, b, g, xt, hr, Ut]),
    re.useEffect( () => {
        g.delete && Ut()
    }
    , [Ut, g.delete]);
    function Xn() {
        var Te;
        if (be != null && be.loading) {
            var et;
            return re.createElement("div", {
                className: rr(ne == null ? void 0 : ne.loader, g == null || (et = g.classNames) == null ? void 0 : et.loader, "sonner-loader"),
                "data-visible": xt === "loading"
            }, be.loading)
        }
        return re.createElement(jN, {
            className: rr(ne == null ? void 0 : ne.loader, g == null || (Te = g.classNames) == null ? void 0 : Te.loader),
            visible: xt === "loading"
        })
    }
    const _n = g.icon || (be == null ? void 0 : be[xt]) || EN(xt);
    var ln, ci;
    return re.createElement("li", {
        tabIndex: 0,
        ref: At,
        className: rr(X, vn, ne == null ? void 0 : ne.toast, g == null || (n = g.classNames) == null ? void 0 : n.toast, ne == null ? void 0 : ne.default, ne == null ? void 0 : ne[xt], g == null || (i = g.classNames) == null ? void 0 : i[xt]),
        "data-sonner-toast": "",
        "data-rich-colors": (ln = g.richColors) != null ? ln : U,
        "data-styled": !(g.jsx || g.unstyled || w),
        "data-mounted": ie,
        "data-promise": !!g.promise,
        "data-swiped": Tr,
        "data-removed": we,
        "data-visible": Yn,
        "data-y-position": Oi,
        "data-x-position": Xt,
        "data-index": A,
        "data-front": dr,
        "data-swiping": ze,
        "data-dismissible": An,
        "data-type": xt,
        "data-invert": Rr,
        "data-swipe-out": Ie,
        "data-swipe-direction": j,
        "data-expanded": !!(B || Re && ie),
        style: {
            "--index": A,
            "--toasts-before": A,
            "--z-index": L.length - A,
            "--offset": `${we ? on : Wt.current}px`,
            "--initial-height": Re ? "auto" : `${Vi}px`,
            ...D,
            ...g.style
        },
        onDragEnd: () => {
            Pe(!1),
            K(null),
            xn.current = null
        }
        ,
        onPointerDown: Te => {
            pr || !An || (li.current = new Date,
            Hn(Wt.current),
            Te.target.setPointerCapture(Te.pointerId),
            Te.target.tagName !== "BUTTON" && (Pe(!0),
            xn.current = {
                x: Te.clientX,
                y: Te.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var Te, et, st;
            if (Ie || !An)
                return;
            xn.current = null;
            const ut = Number(((Te = At.current) == null ? void 0 : Te.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , un = Number(((et = At.current) == null ? void 0 : et.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , tt = new Date().getTime() - ((st = li.current) == null ? void 0 : st.getTime())
              , ft = q === "x" ? ut : un
              , Qn = Math.abs(ft) / tt;
            if (Math.abs(ft) >= HN || Qn > .11) {
                Hn(Wt.current),
                g.onDismiss == null || g.onDismiss.call(g, g),
                I(q === "x" ? ut > 0 ? "right" : "left" : un > 0 ? "down" : "up"),
                Ut(),
                lt(!0);
                return
            } else {
                var k, R;
                (k = At.current) == null || k.style.setProperty("--swipe-amount-x", "0px"),
                (R = At.current) == null || R.style.setProperty("--swipe-amount-y", "0px")
            }
            it(!1),
            Pe(!1),
            K(null)
        }
        ,
        onPointerMove: Te => {
            var et, st, ut;
            if (!xn.current || !An || ((et = window.getSelection()) == null ? void 0 : et.toString().length) > 0)
                return;
            const tt = Te.clientY - xn.current.y
              , ft = Te.clientX - xn.current.x;
            var Qn;
            const k = (Qn = t.swipeDirections) != null ? Qn : GN(Ae);
            !q && (Math.abs(ft) > 1 || Math.abs(tt) > 1) && K(Math.abs(ft) > Math.abs(tt) ? "x" : "y");
            let R = {
                x: 0,
                y: 0
            };
            const V = $ => 1 / (1.5 + Math.abs($) / 20);
            if (q === "y") {
                if (k.includes("top") || k.includes("bottom"))
                    if (k.includes("top") && tt < 0 || k.includes("bottom") && tt > 0)
                        R.y = tt;
                    else {
                        const $ = tt * V(tt);
                        R.y = Math.abs($) < Math.abs(tt) ? $ : tt
                    }
            } else if (q === "x" && (k.includes("left") || k.includes("right")))
                if (k.includes("left") && ft < 0 || k.includes("right") && ft > 0)
                    R.x = ft;
                else {
                    const $ = ft * V(ft);
                    R.x = Math.abs($) < Math.abs(ft) ? $ : ft
                }
            (Math.abs(R.x) > 0 || Math.abs(R.y) > 0) && it(!0),
            (st = At.current) == null || st.style.setProperty("--swipe-amount-x", `${R.x}px`),
            (ut = At.current) == null || ut.style.setProperty("--swipe-amount-y", `${R.y}px`)
        }
    }, fr && !g.jsx && xt !== "loading" ? re.createElement("button", {
        "aria-label": F,
        "data-disabled": pr,
        "data-close-button": !0,
        onClick: pr || !An ? () => {}
        : () => {
            Ut(),
            g.onDismiss == null || g.onDismiss.call(g, g)
        }
        ,
        className: rr(ne == null ? void 0 : ne.closeButton, g == null || (o = g.classNames) == null ? void 0 : o.closeButton)
    }, (ci = be == null ? void 0 : be.close) != null ? ci : DN) : null, (xt || g.icon || g.promise) && g.icon !== null && ((be == null ? void 0 : be[xt]) !== null || g.icon) ? re.createElement("div", {
        "data-icon": "",
        className: rr(ne == null ? void 0 : ne.icon, g == null || (l = g.classNames) == null ? void 0 : l.icon)
    }, g.promise || g.type === "loading" && !g.icon ? g.icon || Xn() : null, g.type !== "loading" ? _n : null) : null, re.createElement("div", {
        "data-content": "",
        className: rr(ne == null ? void 0 : ne.content, g == null || (u = g.classNames) == null ? void 0 : u.content)
    }, re.createElement("div", {
        "data-title": "",
        className: rr(ne == null ? void 0 : ne.title, g == null || (c = g.classNames) == null ? void 0 : c.title)
    }, g.jsx ? g.jsx : typeof g.title == "function" ? g.title() : g.title), g.description ? re.createElement("div", {
        "data-description": "",
        className: rr(ae, Gn, ne == null ? void 0 : ne.description, g == null || (f = g.classNames) == null ? void 0 : f.description)
    }, typeof g.description == "function" ? g.description() : g.description) : null), re.isValidElement(g.cancel) ? g.cancel : g.cancel && Ua(g.cancel) ? re.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: g.cancelButtonStyle || H,
        onClick: Te => {
            Ua(g.cancel) && An && (g.cancel.onClick == null || g.cancel.onClick.call(g.cancel, Te),
            Ut())
        }
        ,
        className: rr(ne == null ? void 0 : ne.cancelButton, g == null || (m = g.classNames) == null ? void 0 : m.cancelButton)
    }, g.cancel.label) : null, re.isValidElement(g.action) ? g.action : g.action && Ua(g.action) ? re.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: g.actionButtonStyle || te,
        onClick: Te => {
            Ua(g.action) && (g.action.onClick == null || g.action.onClick.call(g.action, Te),
            !Te.defaultPrevented && Ut())
        }
        ,
        className: rr(ne == null ? void 0 : ne.actionButton, g == null || (y = g.classNames) == null ? void 0 : y.actionButton)
    }, g.action.label) : null)
}
;
function Ng() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    const t = document.documentElement.getAttribute("dir");
    return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t
}
function JN(t, n) {
    const i = {};
    return [t, n].forEach( (o, l) => {
        const u = l === 1
          , c = u ? "--mobile-offset" : "--offset"
          , f = u ? WN : FN;
        function m(y) {
            ["top", "right", "bottom", "left"].forEach(v => {
                i[`${c}-${v}`] = typeof y == "number" ? `${y}px` : y
            }
            )
        }
        typeof o == "number" || typeof o == "string" ? m(o) : typeof o == "object" ? ["top", "right", "bottom", "left"].forEach(y => {
            o[y] === void 0 ? i[`${c}-${y}`] = f : i[`${c}-${y}`] = typeof o[y] == "number" ? `${o[y]}px` : o[y]
        }
        ) : m(f)
    }
    ),
    i
}
const XN = re.forwardRef(function(n, i) {
    const {invert: o, position: l="bottom-right", hotkey: u=["altKey", "KeyT"], expand: c, closeButton: f, className: m, offset: y, mobileOffset: v, theme: g="light", richColors: w, duration: b, style: C, visibleToasts: M=IN, toastOptions: N, dir: A=Ng(), gap: L=$N, icons: B, containerAriaLabel: W="Notifications"} = n
      , [U,se] = re.useState([])
      , D = re.useMemo( () => Array.from(new Set([l].concat(U.filter(j => j.position).map(j => j.position)))), [U, l])
      , [H,te] = re.useState([])
      , [X,ae] = re.useState(!1)
      , [ke,Ae] = re.useState(!1)
      , [je,Re] = re.useState(g !== "system" ? g : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , ne = re.useRef(null)
      , be = u.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , F = re.useRef(null)
      , q = re.useRef(!1)
      , K = re.useCallback(j => {
        se(I => {
            var ie;
            return (ie = I.find(me => me.id === j.id)) != null && ie.delete || sn.dismiss(j.id),
            I.filter( ({id: me}) => me !== j.id)
        }
        )
    }
    , []);
    return re.useEffect( () => sn.subscribe(j => {
        if (j.dismiss) {
            requestAnimationFrame( () => {
                se(I => I.map(ie => ie.id === j.id ? {
                    ...ie,
                    delete: !0
                } : ie))
            }
            );
            return
        }
        setTimeout( () => {
            kN.flushSync( () => {
                se(I => {
                    const ie = I.findIndex(me => me.id === j.id);
                    return ie !== -1 ? [...I.slice(0, ie), {
                        ...I[ie],
                        ...j
                    }, ...I.slice(ie + 1)] : [j, ...I]
                }
                )
            }
            )
        }
        )
    }
    ), [U]),
    re.useEffect( () => {
        if (g !== "system") {
            Re(g);
            return
        }
        if (g === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Re("dark") : Re("light")),
        typeof window > "u")
            return;
        const j = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            j.addEventListener("change", ({matches: I}) => {
                Re(I ? "dark" : "light")
            }
            )
        } catch {
            j.addListener( ({matches: ie}) => {
                try {
                    Re(ie ? "dark" : "light")
                } catch (me) {
                    console.error(me)
                }
            }
            )
        }
    }
    , [g]),
    re.useEffect( () => {
        U.length <= 1 && ae(!1)
    }
    , [U]),
    re.useEffect( () => {
        const j = I => {
            var ie;
            if (u.every(ue => I[ue] || I.code === ue)) {
                var we;
                ae(!0),
                (we = ne.current) == null || we.focus()
            }
            I.code === "Escape" && (document.activeElement === ne.current || (ie = ne.current) != null && ie.contains(document.activeElement)) && ae(!1)
        }
        ;
        return document.addEventListener("keydown", j),
        () => document.removeEventListener("keydown", j)
    }
    , [u]),
    re.useEffect( () => {
        if (ne.current)
            return () => {
                F.current && (F.current.focus({
                    preventScroll: !0
                }),
                F.current = null,
                q.current = !1)
            }
    }
    , [ne.current]),
    re.createElement("section", {
        ref: i,
        "aria-label": `${W} ${be}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, D.map( (j, I) => {
        var ie;
        const [me,we] = j.split("-");
        return U.length ? re.createElement("ol", {
            key: j,
            dir: A === "auto" ? Ng() : A,
            tabIndex: -1,
            ref: ne,
            className: m,
            "data-sonner-toaster": !0,
            "data-sonner-theme": je,
            "data-y-position": me,
            "data-lifted": X && U.length > 1 && !c,
            "data-x-position": we,
            style: {
                "--front-toast-height": `${((ie = H[0]) == null ? void 0 : ie.height) || 0}px`,
                "--width": `${UN}px`,
                "--gap": `${L}px`,
                ...C,
                ...JN(y, v)
            },
            onBlur: ue => {
                q.current && !ue.currentTarget.contains(ue.relatedTarget) && (q.current = !1,
                F.current && (F.current.focus({
                    preventScroll: !0
                }),
                F.current = null))
            }
            ,
            onFocus: ue => {
                ue.target instanceof HTMLElement && ue.target.dataset.dismissible === "false" || q.current || (q.current = !0,
                F.current = ue.relatedTarget)
            }
            ,
            onMouseEnter: () => ae(!0),
            onMouseMove: () => ae(!0),
            onMouseLeave: () => {
                ke || ae(!1)
            }
            ,
            onDragEnd: () => ae(!1),
            onPointerDown: ue => {
                ue.target instanceof HTMLElement && ue.target.dataset.dismissible === "false" || Ae(!0)
            }
            ,
            onPointerUp: () => Ae(!1)
        }, U.filter(ue => !ue.position && I === 0 || ue.position === j).map( (ue, ze) => {
            var Pe, Ie;
            return re.createElement(KN, {
                key: ue.id,
                icons: B,
                index: ze,
                toast: ue,
                defaultRichColors: w,
                duration: (Pe = N == null ? void 0 : N.duration) != null ? Pe : b,
                className: N == null ? void 0 : N.className,
                descriptionClassName: N == null ? void 0 : N.descriptionClassName,
                invert: o,
                visibleToasts: M,
                closeButton: (Ie = N == null ? void 0 : N.closeButton) != null ? Ie : f,
                interacting: ke,
                position: j,
                style: N == null ? void 0 : N.style,
                unstyled: N == null ? void 0 : N.unstyled,
                classNames: N == null ? void 0 : N.classNames,
                cancelButtonStyle: N == null ? void 0 : N.cancelButtonStyle,
                actionButtonStyle: N == null ? void 0 : N.actionButtonStyle,
                closeButtonAriaLabel: N == null ? void 0 : N.closeButtonAriaLabel,
                removeToast: K,
                toasts: U.filter(lt => lt.position == ue.position),
                heights: H.filter(lt => lt.position == ue.position),
                setHeights: te,
                expandByDefault: c,
                gap: L,
                expanded: X,
                swipeDirections: n.swipeDirections
            })
        }
        )) : null
    }
    ))
})
  , Ti = {
    hidden: {
        opacity: 0,
        y: 28
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
            ease: "easeOut"
        }
    }
}
  , jg = {
    show: {
        transition: {
            staggerChildren: .08
        }
    }
};
function QN() {
    E.useEffect( () => {
        ws("Contact — Local Web Designer Near Me | Hampton Roads VA", "Get in touch with WaveNexus Digital Invest — your local web design and digital marketing team in Hampton Roads, VA. Serving Suffolk, Virginia Beach, Chesapeake, and Newport News. Free website audit.")
    }
    , []);
    const [t,n] = E.useState("")
      , [i,o] = E.useState({
        name: "",
        email: "",
        business: "",
        message: ""
    })
      , l = c => o({
        ...i,
        [c.target.name]: c.target.value
    })
      , u = c => {
        if (c.preventDefault(),
        !i.name || !i.email || !i.business || !i.message) {
            Cg.error("Please fill in all fields");
            return
        }
        Hd("submit", "Contact Form", t || "General");
        const f = `Name: ${i.name}
Email: ${i.email}
Business: ${i.business}
Interest: ${t === "nexusfield" ? "Nexus Field App" : t === "agency" ? "Agency Services" : "General"}

Message:
${i.message}`;
        window.location.href = `mailto:${Ft.email}?subject=Contact from ${encodeURIComponent(i.name)}&body=${encodeURIComponent(f)}`,
        Cg.success("Opening your email client..."),
        o({
            name: "",
            email: "",
            business: "",
            message: ""
        }),
        n("")
    }
    ;
    return p.jsxs(p.Fragment, {
        children: [p.jsxs("section", {
            className: "relative bg-zinc-950 py-24 lg:py-32 overflow-hidden border-b border-border",
            children: [p.jsx("div", {
                className: "absolute inset-0 opacity-[0.03]",
                style: {
                    backgroundImage: "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }
            }), p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs(Q.div, {
                    initial: "hidden",
                    animate: "show",
                    variants: jg,
                    className: "max-w-3xl",
                    children: [p.jsxs(Q.div, {
                        variants: Ti,
                        className: "flex items-center gap-4 mb-8",
                        children: [p.jsx("div", {
                            className: "h-[2px] w-8 bg-amber-500"
                        }), p.jsx("span", {
                            className: "font-['JetBrains_Mono'] text-[11px] uppercase tracking-[0.2em] text-amber-500",
                            children: "Get In Touch"
                        })]
                    }), p.jsx(Q.h1, {
                        variants: Ti,
                        className: "font-['Barlow_Condensed'] font-900 text-6xl sm:text-7xl lg:text-8xl uppercase leading-[0.9] text-white mb-8",
                        children: "Let's Talk"
                    }), p.jsx(Q.p, {
                        variants: Ti,
                        className: "font-['DM_Sans'] text-xl text-zinc-400 leading-relaxed",
                        children: "Whether you need a website, want to see Nexus Field, or just aren't sure where to start — reach out. We're easy to get ahold of and we'll give you a straight answer."
                    })]
                })
            })]
        }), p.jsx("section", {
            className: "bg-zinc-950 py-24",
            children: p.jsx("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: p.jsxs("div", {
                    className: "grid lg:grid-cols-5 gap-12",
                    children: [p.jsxs(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: jg,
                        className: "lg:col-span-2 space-y-px",
                        children: [[{
                            icon: G2,
                            label: "Call or Text",
                            value: Ft.phone,
                            href: `tel:${Ft.phone.replace(/\D/g, "")}`
                        }, {
                            icon: V2,
                            label: "Email",
                            value: Ft.email,
                            href: `mailto:${Ft.email}`
                        }, {
                            icon: B2,
                            label: "Serving",
                            value: "Hampton Roads, VA",
                            href: null
                        }].map( ({icon: c, label: f, value: m, href: y}) => p.jsxs(Q.div, {
                            variants: Ti,
                            className: "flex items-center gap-5 bg-zinc-900 p-6 border-l-2 border-transparent hover:border-amber-500 transition-all group",
                            children: [p.jsx("div", {
                                className: "w-10 h-10 border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-amber-500 transition-colors",
                                children: p.jsx(c, {
                                    className: "h-5 w-5 text-amber-500"
                                })
                            }), p.jsxs("div", {
                                children: [p.jsx("p", {
                                    className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-1",
                                    children: f
                                }), y ? p.jsx("a", {
                                    href: y,
                                    className: "font-['Barlow_Condensed'] font-700 text-lg uppercase tracking-wide text-white hover:text-amber-400 transition-colors break-all",
                                    children: m
                                }) : p.jsx("p", {
                                    className: "font-['Barlow_Condensed'] font-700 text-lg uppercase tracking-wide text-white",
                                    children: m
                                })]
                            })]
                        }, f)), p.jsxs(Q.div, {
                            variants: Ti,
                            className: "bg-amber-500 p-8",
                            children: [p.jsx("p", {
                                className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-950/60 mb-3",
                                children: "No obligation"
                            }), p.jsx("h3", {
                                className: "font-['Barlow_Condensed'] font-900 text-2xl uppercase text-zinc-950 mb-3",
                                children: "Free Website Audit"
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-sm text-zinc-950/70 mb-5",
                                children: "A personalized look at your current online presence and what would actually help."
                            }), p.jsxs("a", {
                                href: "https://wavenexusos.polsia.app/intake",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "flex items-center justify-center gap-2 w-full px-5 py-3 bg-zinc-950 text-amber-500 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-zinc-900 transition-colors",
                                children: ["Start Now ", p.jsx(yt, {
                                    className: "h-4 w-4"
                                })]
                            })]
                        }), p.jsxs(Q.div, {
                            variants: Ti,
                            className: "bg-zinc-900 border border-amber-500/20 p-6",
                            children: [p.jsxs("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [p.jsx("span", {
                                    className: "w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"
                                }), p.jsx("span", {
                                    className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-amber-400",
                                    children: "Nexus Field"
                                })]
                            }), p.jsx("h3", {
                                className: "font-['Barlow_Condensed'] font-800 text-xl uppercase text-white mb-2",
                                children: "Interested in Our App?"
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-xs text-zinc-500 mb-4",
                                children: "Request a demo of Nexus Field for your field service team."
                            }), p.jsxs(kt, {
                                to: "/nexus-field",
                                className: "flex items-center justify-center gap-2 w-full px-5 py-2.5 border border-amber-500/40 text-amber-400 font-['Barlow_Condensed'] font-700 uppercase tracking-widest hover:bg-amber-500 hover:text-zinc-950 transition-all text-sm",
                                children: ["Learn More ", p.jsx(yt, {
                                    className: "h-3.5 w-3.5"
                                })]
                            })]
                        })]
                    }), p.jsx(Q.div, {
                        initial: "hidden",
                        whileInView: "show",
                        viewport: {
                            once: !0
                        },
                        variants: Ti,
                        transition: {
                            delay: .1
                        },
                        className: "lg:col-span-3",
                        children: p.jsxs("div", {
                            className: "bg-zinc-900 p-8 border border-border",
                            children: [p.jsx("h2", {
                                className: "font-['Barlow_Condensed'] font-900 text-3xl uppercase text-white mb-2",
                                children: "Send Us a Message"
                            }), p.jsx("p", {
                                className: "font-['DM_Sans'] text-sm text-zinc-500 mb-8",
                                children: "Tell us a bit about what you're looking for."
                            }), p.jsxs("div", {
                                className: "mb-8",
                                children: [p.jsx("p", {
                                    className: "font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 mb-3",
                                    children: "I'm interested in:"
                                }), p.jsxs("div", {
                                    className: "grid grid-cols-2 gap-px bg-zinc-800",
                                    children: [p.jsxs("button", {
                                        type: "button",
                                        onClick: () => n("agency"),
                                        className: `p-5 text-left transition-all ${t === "agency" ? "bg-amber-500" : "bg-zinc-900 hover:bg-zinc-800"}`,
                                        children: [p.jsx("p", {
                                            className: `font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-sm ${t === "agency" ? "text-zinc-950" : "text-white"}`,
                                            children: "Agency Services"
                                        }), p.jsx("p", {
                                            className: `font-['DM_Sans'] text-xs mt-0.5 ${t === "agency" ? "text-zinc-950/60" : "text-zinc-600"}`,
                                            children: "Website, SEO, Branding"
                                        })]
                                    }), p.jsxs("button", {
                                        type: "button",
                                        onClick: () => n("nexusfield"),
                                        className: `p-5 text-left transition-all ${t === "nexusfield" ? "bg-amber-500" : "bg-zinc-900 hover:bg-zinc-800"}`,
                                        children: [p.jsx("p", {
                                            className: `font-['Barlow_Condensed'] font-800 uppercase tracking-wider text-sm ${t === "nexusfield" ? "text-zinc-950" : "text-white"}`,
                                            children: "Nexus Field App"
                                        }), p.jsx("p", {
                                            className: `font-['DM_Sans'] text-xs mt-0.5 ${t === "nexusfield" ? "text-zinc-950/60" : "text-zinc-600"}`,
                                            children: "Field Service Software"
                                        })]
                                    })]
                                })]
                            }), p.jsxs("form", {
                                onSubmit: u,
                                className: "space-y-px bg-zinc-800",
                                children: [[{
                                    label: "Name",
                                    name: "name",
                                    type: "text",
                                    placeholder: "John Doe"
                                }, {
                                    label: "Email",
                                    name: "email",
                                    type: "email",
                                    placeholder: "john@example.com"
                                }, {
                                    label: "Business Name",
                                    name: "business",
                                    type: "text",
                                    placeholder: "Your Business"
                                }].map( ({label: c, name: f, type: m, placeholder: y}) => p.jsxs("div", {
                                    className: "bg-zinc-900",
                                    children: [p.jsx("label", {
                                        className: "block font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 px-5 pt-4 pb-1",
                                        children: c
                                    }), p.jsx("input", {
                                        name: f,
                                        type: m,
                                        value: i[f],
                                        onChange: l,
                                        placeholder: y,
                                        className: "w-full bg-transparent px-5 pb-4 text-white placeholder:text-zinc-700 font-['DM_Sans'] text-sm outline-none focus:bg-zinc-800 transition-colors"
                                    })]
                                }, f)), p.jsxs("div", {
                                    className: "bg-zinc-900",
                                    children: [p.jsx("label", {
                                        className: "block font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-zinc-600 px-5 pt-4 pb-1",
                                        children: "Message"
                                    }), p.jsx("textarea", {
                                        name: "message",
                                        value: i.message,
                                        onChange: l,
                                        placeholder: "Tell us about your project...",
                                        rows: 5,
                                        className: "w-full bg-transparent px-5 pb-4 text-white placeholder:text-zinc-700 font-['DM_Sans'] text-sm outline-none resize-none focus:bg-zinc-800 transition-colors"
                                    })]
                                }), p.jsxs("button", {
                                    type: "submit",
                                    className: "w-full flex items-center justify-center gap-2 py-5 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest text-lg hover:bg-amber-400 transition-colors",
                                    children: ["Send Message ", p.jsx(yt, {
                                        className: "h-5 w-5"
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            })
        })]
    })
}
function qN() {
    return p.jsx("div", {
        className: "min-h-[70vh] bg-zinc-950 flex items-center justify-center",
        children: p.jsxs("div", {
            className: "text-center px-4",
            children: [p.jsx("div", {
                className: "font-['Barlow_Condensed'] font-900 text-[12rem] leading-none text-zinc-900 select-none mb-2",
                children: "404"
            }), p.jsx("div", {
                className: "w-16 h-[2px] bg-amber-500 mx-auto mb-8"
            }), p.jsx("h1", {
                className: "font-['Barlow_Condensed'] font-900 text-4xl uppercase text-white mb-3",
                children: "Page Not Found"
            }), p.jsx("p", {
                className: "font-['DM_Sans'] text-zinc-500 mb-10 max-w-sm mx-auto",
                children: "This page is AWOL. Let's get you back on mission."
            }), p.jsxs(kt, {
                to: "/",
                className: "inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors",
                children: ["Back to Home ", p.jsx(yt, {
                    className: "h-5 w-5"
                })]
            })]
        })
    })
}
const ZN = ab([{
    path: "/",
    Component: lN,
    children: [{
        index: !0,
        Component: uN
    }, {
        path: "about",
        Component: pN
    }, {
        path: "nexus-field",
        Component: yN
    }, {
        path: "services",
        Component: xN
    }, {
        path: "portfolio",
        Component: wN
    }, {
        path: "blog",
        Component: bN
    }, {
        path: "contact",
        Component: QN
    }, {
        path: "*",
        Component: qN
    }]
}]);
var ej = (t, n, i, o, l, u, c, f) => {
    let m = document.documentElement
      , y = ["light", "dark"];
    function v(b) {
        (Array.isArray(t) ? t : [t]).forEach(C => {
            let M = C === "class"
              , N = M && u ? l.map(A => u[A] || A) : l;
            M ? (m.classList.remove(...N),
            m.classList.add(u && u[b] ? u[b] : b)) : m.setAttribute(C, b)
        }
        ),
        g(b)
    }
    function g(b) {
        f && y.includes(b) && (m.style.colorScheme = b)
    }
    function w() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    if (o)
        v(o);
    else
        try {
            let b = localStorage.getItem(n) || i
              , C = c && b === "system" ? w() : b;
            v(C)
        } catch {}
}
  , tj = E.createContext(void 0)
  , nj = {
    setTheme: t => {}
    ,
    themes: []
}
  , rj = () => {
    var t;
    return (t = E.useContext(tj)) != null ? t : nj
}
;
E.memo( ({forcedTheme: t, storageKey: n, attribute: i, enableSystem: o, enableColorScheme: l, defaultTheme: u, value: c, themes: f, nonce: m, scriptProps: y}) => {
    let v = JSON.stringify([i, n, u, t, f, c, o, l]).slice(1, -1);
    return E.createElement("script", {
        ...y,
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? m : "",
        dangerouslySetInnerHTML: {
            __html: `(${ej.toString()})(${v})`
        }
    })
}
);
const ij = ({...t}) => {
    const {theme: n="system"} = rj();
    return p.jsx(XN, {
        theme: n,
        className: "toaster group",
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)"
        },
        ...t
    })
}
  , gn = typeof window < "u" ? window.location.origin : "https://wavenexusdigitalinvest.com"
  , Ai = `${gn}/#organization`
  , sj = `${gn}/#website`
  , oj = {
    "@context": "https://schema.org",
    "@graph": [{
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": Ai,
        name: Ft.name,
        legalName: "WaveNexus Digital Invest",
        description: "Veteran-owned local web design company and digital marketing team in Hampton Roads, VA. We are the local website designers and SEO company near you — serving Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, and Norfolk. Services include custom website design, local SEO, AI SEO, branding, social media management, and Nexus Field field service management software.",
        url: gn,
        telephone: Ft.phone,
        email: Ft.email,
        logo: {
            "@type": "ImageObject",
            url: `${gn}/logo.png`,
            width: 512,
            height: 512
        },
        image: `${gn}/logo.png`,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Hampton Roads",
            addressRegion: "VA",
            addressCountry: "US"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 36.7282,
            longitude: -76.5836
        },
        slogan: "Local website designers and digital marketing near you in Hampton Roads, VA",
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Invoice",
        openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00"
        }],
        sameAs: [],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web Design, Digital Marketing & Field Service Software",
            itemListElement: [{
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Website Design & Development"
                }
            }, {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Local SEO Optimization"
                }
            }, {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "AI SEO & Generative Engine Optimization"
                }
            }, {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Branding & Logo Design"
                }
            }, {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Social Media Management"
                }
            }, {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Nexus Field Field Service Management Software"
                }
            }]
        },
        knowsAbout: ["Website Design", "Web Development", "Local SEO", "AI SEO", "Generative Engine Optimization", "Answer Engine Optimization", "Google Business Profile Optimization", "Branding and Logo Design", "Social Media Marketing", "Digital Marketing for Small Businesses", "Field Service Management Software", "Hampton Roads Virginia Business", "Veteran Owned Business"],
        areaServed: [{
            "@type": "City",
            name: "Suffolk",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "Virginia Beach",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "Chesapeake",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "Newport News",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "Hampton",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "Norfolk",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "Portsmouth",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "Williamsburg",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "York County",
            addressRegion: "VA"
        }, {
            "@type": "City",
            name: "Isle of Wight County",
            addressRegion: "VA"
        }],
        serviceType: ["Web Developer Near Me", "Best Web Developer Near Me", "Website Designer Near Me", "Local Website Designer Near Me", "Local Marketing Team Near Me", "Digital Marketing Near Me", "Web Design Near Me", "SEO Company Near Me", "Local SEO Company Near Me", "Website Design Company Near Me", "Small Business Web Design", "Custom Website Design", "AI SEO Optimization", "Google Business Profile Optimization", "Branding Agency Near Me", "Logo Design Near Me", "Social Media Management", "Field Service Management Software", "Veteran Owned Marketing Agency"]
    }, {
        "@type": "WebSite",
        "@id": sj,
        name: Ft.name,
        url: gn,
        description: "Veteran-owned local web designer and digital marketing team near you in Hampton Roads VA. Custom websites, local SEO, AI SEO, branding, and Nexus Field field service software.",
        publisher: {
            "@id": Ai
        },
        inLanguage: "en-US",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: `${gn}/?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    }, {
        "@type": "SoftwareApplication",
        "@id": `${gn}/nexus-field#software`,
        name: "Nexus Field",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Field Service Management Software",
        operatingSystem: "Web, iOS, Android",
        description: "Nexus Field is a field service management app built for HVAC, plumbing, electrical, landscaping, and contracting companies. Features include free parts inventory tracking across warehouses and trucks, technician assignment, job tracking, built-in photo database, and survey and inspection tools. Configured around how your team actually works.",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Parts inventory management included free with every plan"
        },
        provider: {
            "@id": Ai
        },
        url: `${gn}/nexus-field`,
        keywords: "field service management software, field service app, HVAC job tracking, parts inventory field service, field service software for plumbers, technician management app, Nexus Field",
        featureList: ["Free parts inventory tracking — warehouse and per-truck", "Technician assignment and parts-per-job logging", "Job tracking with notes and full activity timeline", "Built-in photo database per job", "Survey and inspection tools", "Real-time customization to your workflow", "Customer-first record architecture"]
    }]
}
  , aj = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [{
        "@type": "Question",
        name: "Are you a local web designer near me in Hampton Roads VA?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WaveNexus Digital Invest is a veteran-owned local website design and digital marketing team based in Hampton Roads, VA. We serve Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, and surrounding areas. We are the local website designers near you in Southeast Virginia."
        }
    }, {
        "@type": "Question",
        name: "What is the best web developer near me in Hampton Roads Virginia?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "WaveNexus Digital Invest is a top-rated local web developer in Hampton Roads, VA. We build custom websites for local businesses, run local SEO and AI SEO campaigns, and provide full digital marketing services. As a veteran-owned small business, we work with a focused client list so every project gets real attention."
        }
    }, {
        "@type": "Question",
        name: "Do you offer local SEO and digital marketing near me in Hampton Roads?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WaveNexus Digital Invest is a local marketing team serving all of Hampton Roads VA — including Suffolk, Virginia Beach, Chesapeake, and Newport News. We offer local SEO, AI SEO (GEO/AEO), Google Business Profile optimization, branding, and social media management for local businesses."
        }
    }, {
        "@type": "Question",
        name: "What is Nexus Field?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "Nexus Field is a field service management app built for HVAC, plumbing, electrical, landscaping, and contracting companies. It includes free parts inventory tracking across your warehouse and trucks, job tracking, a built-in photo database, technician management, and survey tools. It is configured around how your team actually works, not a generic template."
        }
    }, {
        "@type": "Question",
        name: "How long does it take to build a website?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "Most websites we build are completed in 2 to 3 weeks depending on scope and how quickly content is provided. We give you a clear timeline before we start and keep you updated throughout."
        }
    }, {
        "@type": "Question",
        name: "Do you help small local businesses with web design and SEO?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Most of our clients are small local service businesses in Hampton Roads VA. We keep our client list focused so each business gets real attention — not a cookie-cutter package. We are the local web design and SEO team near you."
        }
    }, {
        "@type": "Question",
        name: "What areas do you serve in Hampton Roads Virginia?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "We serve businesses throughout Hampton Roads including Suffolk, Virginia Beach, Chesapeake, Newport News, Hampton, Norfolk, Portsmouth, Williamsburg, York County, and Isle of Wight County. We are a veteran-owned local digital marketing team based in Southeast Virginia."
        }
    }, {
        "@type": "Question",
        name: "Do you optimize websites for AI search tools like ChatGPT and Perplexity?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Beyond traditional Google SEO, we optimize websites for AI search tools including ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot. This includes structured data, answer-ready content formatting, and generative engine optimization (GEO) so your business gets cited when people ask AI tools for local recommendations."
        }
    }, {
        "@type": "Question",
        name: "Are you veteran owned?",
        acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. WaveNexus Digital Invest is a US Marine Corps veteran-owned business based in Hampton Roads, Virginia. We are proud to serve local businesses throughout Suffolk, Virginia Beach, Chesapeake, Newport News, and the surrounding communities."
        }
    }]
}
  , lj = [{
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${gn}/services#web-design`,
    serviceType: "Website Design & Development",
    name: "Local Website Designer Near Me — Hampton Roads VA",
    alternateName: ["Web Developer Near Me Hampton Roads", "Best Web Developer Near Me Virginia"],
    provider: {
        "@id": Ai
    },
    description: "Looking for a local website designer near you in Hampton Roads VA? WaveNexus Digital Invest builds custom, mobile-first websites for local businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News. SEO-optimized from day one, fast delivery, and built to bring in real inquiries.",
    areaServed: [{
        "@type": "City",
        name: "Suffolk",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Virginia Beach",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Chesapeake",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Newport News",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Hampton",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Norfolk",
        addressRegion: "VA"
    }],
    keywords: "web developer near me, best web developer near me, local website designer near me, website design near me, web design Hampton Roads VA, website designer Virginia Beach, web developer Suffolk VA, website design Chesapeake VA"
}, {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${gn}/services#seo`,
    serviceType: "Local SEO & AI Search Optimization",
    name: "Local SEO Company Near Me — Hampton Roads VA",
    alternateName: ["SEO Company Near Me Hampton Roads", "Digital Marketing Near Me Virginia Beach"],
    provider: {
        "@id": Ai
    },
    description: "Local SEO company near you in Hampton Roads VA. We help local businesses rank higher on Google, appear in Google Maps, and get cited by AI tools like ChatGPT and Perplexity. Services include local SEO, AI SEO (GEO/AEO), Google Business Profile optimization, keyword research, and monthly reporting for Suffolk, Virginia Beach, Chesapeake, and Newport News businesses.",
    areaServed: [{
        "@type": "City",
        name: "Suffolk",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Virginia Beach",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Chesapeake",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Newport News",
        addressRegion: "VA"
    }],
    keywords: "SEO company near me, local SEO company near me, digital marketing near me, local marketing team near me, AI SEO Hampton Roads, GEO optimization Virginia, Google Business Profile optimization Hampton Roads"
}, {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${gn}/services#branding`,
    serviceType: "Branding & Logo Design",
    name: "Logo Designer & Branding Near Me — Hampton Roads VA",
    provider: {
        "@id": Ai
    },
    description: "Professional logo design and branding for local businesses in Hampton Roads VA. Custom logos, brand identity systems, color palettes, and social media kits for businesses in Suffolk, Virginia Beach, Chesapeake, and Newport News.",
    areaServed: [{
        "@type": "City",
        name: "Suffolk",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Virginia Beach",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Chesapeake",
        addressRegion: "VA"
    }],
    keywords: "logo design near me, branding company near me, logo designer Hampton Roads, brand identity Virginia Beach, graphic designer near me Hampton Roads"
}, {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${gn}/services#social`,
    serviceType: "Social Media Management",
    name: "Social Media Management Near Me — Hampton Roads VA",
    provider: {
        "@id": Ai
    },
    description: "Social media management for local businesses in Hampton Roads VA. Content strategy, branded post creation, audience growth, and platform management for Suffolk, Virginia Beach, Chesapeake, and Newport News businesses.",
    areaServed: [{
        "@type": "City",
        name: "Virginia Beach",
        addressRegion: "VA"
    }, {
        "@type": "City",
        name: "Hampton Roads",
        addressRegion: "VA"
    }],
    keywords: "social media management near me, social media marketing Hampton Roads, content marketing Virginia Beach"
}];
function uj() {
    [oj, aj, ...lj].forEach(n => {
        const i = document.createElement("script");
        i.type = "application/ld+json",
        i.text = JSON.stringify(n),
        document.head.appendChild(i)
    }
    )
}
(function() {
    if (typeof document > "u")
        return;
    ['meta[name="robots"]', 'meta[name="ROBOTS"]', 'meta[name="Robots"]', 'meta[content*="noindex"]', 'meta[content*="nofollow"]', 'meta[http-equiv="X-Robots-Tag"]', 'meta[http-equiv="x-robots-tag"]'].forEach(i => document.querySelectorAll(i).forEach(o => o.remove()))
}
)();
(function() {
    if (typeof document > "u" || typeof MutationObserver > "u")
        return;
    const n = l => {
        if (l.nodeType !== 1)
            return !1;
        const u = l;
        if (u.tagName !== "META")
            return !1;
        const c = (u.getAttribute("name") || "").toLowerCase()
          , f = (u.getAttribute("http-equiv") || "").toLowerCase()
          , m = (u.getAttribute("content") || "").toLowerCase();
        return c === "robots" && (m.includes("noindex") || m.includes("nofollow")) || m.includes("noindex") || f === "x-robots-tag" && m.includes("noindex")
    }
      , i = new MutationObserver(l => {
        l.forEach(u => {
            u.addedNodes.forEach(c => {
                n(c) && c.remove()
            }
            )
        }
        )
    }
    )
      , o = () => {
        document.head && i.observe(document.head, {
            childList: !0,
            subtree: !0
        })
    }
    ;
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", o) : o()
}
)();
function cj() {
    return E.useEffect( () => {
        dN(),
        uj(),
        document.body.setAttribute("itemscope", ""),
        document.body.setAttribute("itemtype", "https://schema.org/WebPage")
    }
    , []),
    p.jsxs(p.Fragment, {
        children: [p.jsx(A1, {
            router: ZN
        }), p.jsx(ij, {
            position: "top-center"
        })]
    })
}
Hx.createRoot(document.getElementById("root")).render(p.jsx(cj, {}));
