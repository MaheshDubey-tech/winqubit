(function () {
  const D = document.createElement("link").relList;
  if (D && D.supports && D.supports("modulepreload")) return;
  for (const j of document.querySelectorAll('link[rel="modulepreload"]')) o(j);
  new MutationObserver((j) => {
    for (const E of j)
      if (E.type === "childList")
        for (const v of E.addedNodes)
          v.tagName === "LINK" && v.rel === "modulepreload" && o(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function M(j) {
    const E = {};
    return (
      j.integrity && (E.integrity = j.integrity),
      j.referrerPolicy && (E.referrerPolicy = j.referrerPolicy),
      j.crossOrigin === "use-credentials"
        ? (E.credentials = "include")
        : j.crossOrigin === "anonymous"
          ? (E.credentials = "omit")
          : (E.credentials = "same-origin"),
      E
    );
  }
  function o(j) {
    if (j.ep) return;
    j.ep = !0;
    const E = M(j);
    fetch(j.href, E);
  }
})();
var hr = { exports: {} },
  Tn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uf;
function wm() {
  if (Uf) return Tn;
  Uf = 1;
  var y = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.fragment");
  function M(o, j, E) {
    var v = null;
    if (
      (E !== void 0 && (v = "" + E),
      j.key !== void 0 && (v = "" + j.key),
      "key" in j)
    ) {
      E = {};
      for (var H in j) H !== "key" && (E[H] = j[H]);
    } else E = j;
    return (
      (j = E.ref),
      { $$typeof: y, type: o, key: v, ref: j !== void 0 ? j : null, props: E }
    );
  }
  return ((Tn.Fragment = D), (Tn.jsx = M), (Tn.jsxs = M), Tn);
}
var qf;
function Sm() {
  return (qf || ((qf = 1), (hr.exports = wm())), hr.exports);
}
var n = Sm(),
  pr = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rf;
function Tm() {
  if (Rf) return L;
  Rf = 1;
  var y = Symbol.for("react.transitional.element"),
    D = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    j = Symbol.for("react.profiler"),
    E = Symbol.for("react.consumer"),
    v = Symbol.for("react.context"),
    H = Symbol.for("react.forward_ref"),
    S = Symbol.for("react.suspense"),
    b = Symbol.for("react.memo"),
    z = Symbol.for("react.lazy"),
    U = Symbol.for("react.activity"),
    ae = Symbol.iterator;
  function De(f) {
    return f === null || typeof f != "object"
      ? null
      : ((f = (ae && f[ae]) || f["@@iterator"]),
        typeof f == "function" ? f : null);
  }
  var k = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    F = Object.assign,
    Me = {};
  function $e(f, A, _) {
    ((this.props = f),
      (this.context = A),
      (this.refs = Me),
      (this.updater = _ || k));
  }
  (($e.prototype.isReactComponent = {}),
    ($e.prototype.setState = function (f, A) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, f, A, "setState");
    }),
    ($e.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    }));
  function $t() {}
  $t.prototype = $e.prototype;
  function Re(f, A, _) {
    ((this.props = f),
      (this.context = A),
      (this.refs = Me),
      (this.updater = _ || k));
  }
  var ot = (Re.prototype = new $t());
  ((ot.constructor = Re), F(ot, $e.prototype), (ot.isPureReactComponent = !0));
  var Tt = Array.isArray;
  function Ge() {}
  var ee = { H: null, A: null, T: null, S: null },
    Le = Object.prototype.hasOwnProperty;
  function Ct(f, A, _) {
    var R = _.ref;
    return {
      $$typeof: y,
      type: f,
      key: A,
      ref: R !== void 0 ? R : null,
      props: _,
    };
  }
  function Xa(f, A) {
    return Ct(f.type, A, f.props);
  }
  function At(f) {
    return typeof f == "object" && f !== null && f.$$typeof === y;
  }
  function Ve(f) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      f.replace(/[=:]/g, function (_) {
        return A[_];
      })
    );
  }
  var Sa = /\/+/g;
  function Dt(f, A) {
    return typeof f == "object" && f !== null && f.key != null
      ? Ve("" + f.key)
      : A.toString(36);
  }
  function jt(f) {
    switch (f.status) {
      case "fulfilled":
        return f.value;
      case "rejected":
        throw f.reason;
      default:
        switch (
          (typeof f.status == "string"
            ? f.then(Ge, Ge)
            : ((f.status = "pending"),
              f.then(
                function (A) {
                  f.status === "pending" &&
                    ((f.status = "fulfilled"), (f.value = A));
                },
                function (A) {
                  f.status === "pending" &&
                    ((f.status = "rejected"), (f.reason = A));
                },
              )),
          f.status)
        ) {
          case "fulfilled":
            return f.value;
          case "rejected":
            throw f.reason;
        }
    }
    throw f;
  }
  function w(f, A, _, R, V) {
    var K = typeof f;
    (K === "undefined" || K === "boolean") && (f = null);
    var ce = !1;
    if (f === null) ce = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case y:
            case D:
              ce = !0;
              break;
            case z:
              return ((ce = f._init), w(ce(f._payload), A, _, R, V));
          }
      }
    if (ce)
      return (
        (V = V(f)),
        (ce = R === "" ? "." + Dt(f, 0) : R),
        Tt(V)
          ? ((_ = ""),
            ce != null && (_ = ce.replace(Sa, "$&/") + "/"),
            w(V, A, _, "", function (kl) {
              return kl;
            }))
          : V != null &&
            (At(V) &&
              (V = Xa(
                V,
                _ +
                  (V.key == null || (f && f.key === V.key)
                    ? ""
                    : ("" + V.key).replace(Sa, "$&/") + "/") +
                  ce,
              )),
            A.push(V)),
        1
      );
    ce = 0;
    var Be = R === "" ? "." : R + ":";
    if (Tt(f))
      for (var je = 0; je < f.length; je++)
        ((R = f[je]), (K = Be + Dt(R, je)), (ce += w(R, A, _, K, V)));
    else if (((je = De(f)), typeof je == "function"))
      for (f = je.call(f), je = 0; !(R = f.next()).done;)
        ((R = R.value), (K = Be + Dt(R, je++)), (ce += w(R, A, _, K, V)));
    else if (K === "object") {
      if (typeof f.then == "function") return w(jt(f), A, _, R, V);
      throw (
        (A = String(f)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(f).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ce;
  }
  function O(f, A, _) {
    if (f == null) return f;
    var R = [],
      V = 0;
    return (
      w(f, R, "", "", function (K) {
        return A.call(_, K, V++);
      }),
      R
    );
  }
  function G(f) {
    if (f._status === -1) {
      var A = f._result;
      ((A = A()),
        A.then(
          function (_) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = _));
          },
          function (_) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = _));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = A)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ue =
      typeof reportError == "function"
        ? reportError
        : function (f) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var A = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof f == "object" &&
                  f !== null &&
                  typeof f.message == "string"
                    ? String(f.message)
                    : String(f),
                error: f,
              });
              if (!window.dispatchEvent(A)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", f);
              return;
            }
            console.error(f);
          },
    me = {
      map: O,
      forEach: function (f, A, _) {
        O(
          f,
          function () {
            A.apply(this, arguments);
          },
          _,
        );
      },
      count: function (f) {
        var A = 0;
        return (
          O(f, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (f) {
        return (
          O(f, function (A) {
            return A;
          }) || []
        );
      },
      only: function (f) {
        if (!At(f))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return f;
      },
    };
  return (
    (L.Activity = U),
    (L.Children = me),
    (L.Component = $e),
    (L.Fragment = M),
    (L.Profiler = j),
    (L.PureComponent = Re),
    (L.StrictMode = o),
    (L.Suspense = S),
    (L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ee),
    (L.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (f) {
        return ee.H.useMemoCache(f);
      },
    }),
    (L.cache = function (f) {
      return function () {
        return f.apply(null, arguments);
      };
    }),
    (L.cacheSignal = function () {
      return null;
    }),
    (L.cloneElement = function (f, A, _) {
      if (f == null)
        throw Error(
          "The argument must be a React element, but you passed " + f + ".",
        );
      var R = F({}, f.props),
        V = f.key;
      if (A != null)
        for (K in (A.key !== void 0 && (V = "" + A.key), A))
          !Le.call(A, K) ||
            K === "key" ||
            K === "__self" ||
            K === "__source" ||
            (K === "ref" && A.ref === void 0) ||
            (R[K] = A[K]);
      var K = arguments.length - 2;
      if (K === 1) R.children = _;
      else if (1 < K) {
        for (var ce = Array(K), Be = 0; Be < K; Be++)
          ce[Be] = arguments[Be + 2];
        R.children = ce;
      }
      return Ct(f.type, V, R);
    }),
    (L.createContext = function (f) {
      return (
        (f = {
          $$typeof: v,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (f.Provider = f),
        (f.Consumer = { $$typeof: E, _context: f }),
        f
      );
    }),
    (L.createElement = function (f, A, _) {
      var R,
        V = {},
        K = null;
      if (A != null)
        for (R in (A.key !== void 0 && (K = "" + A.key), A))
          Le.call(A, R) &&
            R !== "key" &&
            R !== "__self" &&
            R !== "__source" &&
            (V[R] = A[R]);
      var ce = arguments.length - 2;
      if (ce === 1) V.children = _;
      else if (1 < ce) {
        for (var Be = Array(ce), je = 0; je < ce; je++)
          Be[je] = arguments[je + 2];
        V.children = Be;
      }
      if (f && f.defaultProps)
        for (R in ((ce = f.defaultProps), ce))
          V[R] === void 0 && (V[R] = ce[R]);
      return Ct(f, K, V);
    }),
    (L.createRef = function () {
      return { current: null };
    }),
    (L.forwardRef = function (f) {
      return { $$typeof: H, render: f };
    }),
    (L.isValidElement = At),
    (L.lazy = function (f) {
      return { $$typeof: z, _payload: { _status: -1, _result: f }, _init: G };
    }),
    (L.memo = function (f, A) {
      return { $$typeof: b, type: f, compare: A === void 0 ? null : A };
    }),
    (L.startTransition = function (f) {
      var A = ee.T,
        _ = {};
      ee.T = _;
      try {
        var R = f(),
          V = ee.S;
        (V !== null && V(_, R),
          typeof R == "object" &&
            R !== null &&
            typeof R.then == "function" &&
            R.then(Ge, ue));
      } catch (K) {
        ue(K);
      } finally {
        (A !== null && _.types !== null && (A.types = _.types), (ee.T = A));
      }
    }),
    (L.unstable_useCacheRefresh = function () {
      return ee.H.useCacheRefresh();
    }),
    (L.use = function (f) {
      return ee.H.use(f);
    }),
    (L.useActionState = function (f, A, _) {
      return ee.H.useActionState(f, A, _);
    }),
    (L.useCallback = function (f, A) {
      return ee.H.useCallback(f, A);
    }),
    (L.useContext = function (f) {
      return ee.H.useContext(f);
    }),
    (L.useDebugValue = function () {}),
    (L.useDeferredValue = function (f, A) {
      return ee.H.useDeferredValue(f, A);
    }),
    (L.useEffect = function (f, A) {
      return ee.H.useEffect(f, A);
    }),
    (L.useEffectEvent = function (f) {
      return ee.H.useEffectEvent(f);
    }),
    (L.useId = function () {
      return ee.H.useId();
    }),
    (L.useImperativeHandle = function (f, A, _) {
      return ee.H.useImperativeHandle(f, A, _);
    }),
    (L.useInsertionEffect = function (f, A) {
      return ee.H.useInsertionEffect(f, A);
    }),
    (L.useLayoutEffect = function (f, A) {
      return ee.H.useLayoutEffect(f, A);
    }),
    (L.useMemo = function (f, A) {
      return ee.H.useMemo(f, A);
    }),
    (L.useOptimistic = function (f, A) {
      return ee.H.useOptimistic(f, A);
    }),
    (L.useReducer = function (f, A, _) {
      return ee.H.useReducer(f, A, _);
    }),
    (L.useRef = function (f) {
      return ee.H.useRef(f);
    }),
    (L.useState = function (f) {
      return ee.H.useState(f);
    }),
    (L.useSyncExternalStore = function (f, A, _) {
      return ee.H.useSyncExternalStore(f, A, _);
    }),
    (L.useTransition = function () {
      return ee.H.useTransition();
    }),
    (L.version = "19.2.8"),
    L
  );
}
var Qf;
function Er() {
  return (Qf || ((Qf = 1), (pr.exports = Tm())), pr.exports);
}
var se = Er(),
  br = { exports: {} },
  Cn = {},
  gr = { exports: {} },
  yr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bf;
function Cm() {
  return (
    Bf ||
      ((Bf = 1),
      (function (y) {
        function D(w, O) {
          var G = w.length;
          w.push(O);
          e: for (; 0 < G;) {
            var ue = (G - 1) >>> 1,
              me = w[ue];
            if (0 < j(me, O)) ((w[ue] = O), (w[G] = me), (G = ue));
            else break e;
          }
        }
        function M(w) {
          return w.length === 0 ? null : w[0];
        }
        function o(w) {
          if (w.length === 0) return null;
          var O = w[0],
            G = w.pop();
          if (G !== O) {
            w[0] = G;
            e: for (var ue = 0, me = w.length, f = me >>> 1; ue < f;) {
              var A = 2 * (ue + 1) - 1,
                _ = w[A],
                R = A + 1,
                V = w[R];
              if (0 > j(_, G))
                R < me && 0 > j(V, _)
                  ? ((w[ue] = V), (w[R] = G), (ue = R))
                  : ((w[ue] = _), (w[A] = G), (ue = A));
              else if (R < me && 0 > j(V, G))
                ((w[ue] = V), (w[R] = G), (ue = R));
              else break e;
            }
          }
          return O;
        }
        function j(w, O) {
          var G = w.sortIndex - O.sortIndex;
          return G !== 0 ? G : w.id - O.id;
        }
        if (
          ((y.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var E = performance;
          y.unstable_now = function () {
            return E.now();
          };
        } else {
          var v = Date,
            H = v.now();
          y.unstable_now = function () {
            return v.now() - H;
          };
        }
        var S = [],
          b = [],
          z = 1,
          U = null,
          ae = 3,
          De = !1,
          k = !1,
          F = !1,
          Me = !1,
          $e = typeof setTimeout == "function" ? setTimeout : null,
          $t = typeof clearTimeout == "function" ? clearTimeout : null,
          Re = typeof setImmediate < "u" ? setImmediate : null;
        function ot(w) {
          for (var O = M(b); O !== null;) {
            if (O.callback === null) o(b);
            else if (O.startTime <= w)
              (o(b), (O.sortIndex = O.expirationTime), D(S, O));
            else break;
            O = M(b);
          }
        }
        function Tt(w) {
          if (((F = !1), ot(w), !k))
            if (M(S) !== null) ((k = !0), Ge || ((Ge = !0), Ve()));
            else {
              var O = M(b);
              O !== null && jt(Tt, O.startTime - w);
            }
        }
        var Ge = !1,
          ee = -1,
          Le = 5,
          Ct = -1;
        function Xa() {
          return Me ? !0 : !(y.unstable_now() - Ct < Le);
        }
        function At() {
          if (((Me = !1), Ge)) {
            var w = y.unstable_now();
            Ct = w;
            var O = !0;
            try {
              e: {
                ((k = !1), F && ((F = !1), $t(ee), (ee = -1)), (De = !0));
                var G = ae;
                try {
                  t: {
                    for (
                      ot(w), U = M(S);
                      U !== null && !(U.expirationTime > w && Xa());
                    ) {
                      var ue = U.callback;
                      if (typeof ue == "function") {
                        ((U.callback = null), (ae = U.priorityLevel));
                        var me = ue(U.expirationTime <= w);
                        if (((w = y.unstable_now()), typeof me == "function")) {
                          ((U.callback = me), ot(w), (O = !0));
                          break t;
                        }
                        (U === M(S) && o(S), ot(w));
                      } else o(S);
                      U = M(S);
                    }
                    if (U !== null) O = !0;
                    else {
                      var f = M(b);
                      (f !== null && jt(Tt, f.startTime - w), (O = !1));
                    }
                  }
                  break e;
                } finally {
                  ((U = null), (ae = G), (De = !1));
                }
                O = void 0;
              }
            } finally {
              O ? Ve() : (Ge = !1);
            }
          }
        }
        var Ve;
        if (typeof Re == "function")
          Ve = function () {
            Re(At);
          };
        else if (typeof MessageChannel < "u") {
          var Sa = new MessageChannel(),
            Dt = Sa.port2;
          ((Sa.port1.onmessage = At),
            (Ve = function () {
              Dt.postMessage(null);
            }));
        } else
          Ve = function () {
            $e(At, 0);
          };
        function jt(w, O) {
          ee = $e(function () {
            w(y.unstable_now());
          }, O);
        }
        ((y.unstable_IdlePriority = 5),
          (y.unstable_ImmediatePriority = 1),
          (y.unstable_LowPriority = 4),
          (y.unstable_NormalPriority = 3),
          (y.unstable_Profiling = null),
          (y.unstable_UserBlockingPriority = 2),
          (y.unstable_cancelCallback = function (w) {
            w.callback = null;
          }),
          (y.unstable_forceFrameRate = function (w) {
            0 > w || 125 < w
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Le = 0 < w ? Math.floor(1e3 / w) : 5);
          }),
          (y.unstable_getCurrentPriorityLevel = function () {
            return ae;
          }),
          (y.unstable_next = function (w) {
            switch (ae) {
              case 1:
              case 2:
              case 3:
                var O = 3;
                break;
              default:
                O = ae;
            }
            var G = ae;
            ae = O;
            try {
              return w();
            } finally {
              ae = G;
            }
          }),
          (y.unstable_requestPaint = function () {
            Me = !0;
          }),
          (y.unstable_runWithPriority = function (w, O) {
            switch (w) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                w = 3;
            }
            var G = ae;
            ae = w;
            try {
              return O();
            } finally {
              ae = G;
            }
          }),
          (y.unstable_scheduleCallback = function (w, O, G) {
            var ue = y.unstable_now();
            switch (
              (typeof G == "object" && G !== null
                ? ((G = G.delay),
                  (G = typeof G == "number" && 0 < G ? ue + G : ue))
                : (G = ue),
              w)
            ) {
              case 1:
                var me = -1;
                break;
              case 2:
                me = 250;
                break;
              case 5:
                me = 1073741823;
                break;
              case 4:
                me = 1e4;
                break;
              default:
                me = 5e3;
            }
            return (
              (me = G + me),
              (w = {
                id: z++,
                callback: O,
                priorityLevel: w,
                startTime: G,
                expirationTime: me,
                sortIndex: -1,
              }),
              G > ue
                ? ((w.sortIndex = G),
                  D(b, w),
                  M(S) === null &&
                    w === M(b) &&
                    (F ? ($t(ee), (ee = -1)) : (F = !0), jt(Tt, G - ue)))
                : ((w.sortIndex = me),
                  D(S, w),
                  k || De || ((k = !0), Ge || ((Ge = !0), Ve()))),
              w
            );
          }),
          (y.unstable_shouldYield = Xa),
          (y.unstable_wrapCallback = function (w) {
            var O = ae;
            return function () {
              var G = ae;
              ae = O;
              try {
                return w.apply(this, arguments);
              } finally {
                ae = G;
              }
            };
          }));
      })(yr)),
    yr
  );
}
var Yf;
function Am() {
  return (Yf || ((Yf = 1), (gr.exports = Cm())), gr.exports);
}
var vr = { exports: {} },
  Qe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gf;
function Mm() {
  if (Gf) return Qe;
  Gf = 1;
  var y = Er();
  function D(S) {
    var b = "https://react.dev/errors/" + S;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var z = 2; z < arguments.length; z++)
        b += "&args[]=" + encodeURIComponent(arguments[z]);
    }
    return (
      "Minified React error #" +
      S +
      "; visit " +
      b +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function M() {}
  var o = {
      d: {
        f: M,
        r: function () {
          throw Error(D(522));
        },
        D: M,
        C: M,
        L: M,
        m: M,
        X: M,
        S: M,
        M,
      },
      p: 0,
      findDOMNode: null,
    },
    j = Symbol.for("react.portal");
  function E(S, b, z) {
    var U =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: j,
      key: U == null ? null : "" + U,
      children: S,
      containerInfo: b,
      implementation: z,
    };
  }
  var v = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function H(S, b) {
    if (S === "font") return "";
    if (typeof b == "string") return b === "use-credentials" ? b : "";
  }
  return (
    (Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Qe.createPortal = function (S, b) {
      var z =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || (b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11))
        throw Error(D(299));
      return E(S, b, null, z);
    }),
    (Qe.flushSync = function (S) {
      var b = v.T,
        z = o.p;
      try {
        if (((v.T = null), (o.p = 2), S)) return S();
      } finally {
        ((v.T = b), (o.p = z), o.d.f());
      }
    }),
    (Qe.preconnect = function (S, b) {
      typeof S == "string" &&
        (b
          ? ((b = b.crossOrigin),
            (b =
              typeof b == "string"
                ? b === "use-credentials"
                  ? b
                  : ""
                : void 0))
          : (b = null),
        o.d.C(S, b));
    }),
    (Qe.prefetchDNS = function (S) {
      typeof S == "string" && o.d.D(S);
    }),
    (Qe.preinit = function (S, b) {
      if (typeof S == "string" && b && typeof b.as == "string") {
        var z = b.as,
          U = H(z, b.crossOrigin),
          ae = typeof b.integrity == "string" ? b.integrity : void 0,
          De = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        z === "style"
          ? o.d.S(S, typeof b.precedence == "string" ? b.precedence : void 0, {
              crossOrigin: U,
              integrity: ae,
              fetchPriority: De,
            })
          : z === "script" &&
            o.d.X(S, {
              crossOrigin: U,
              integrity: ae,
              fetchPriority: De,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
      }
    }),
    (Qe.preinitModule = function (S, b) {
      if (typeof S == "string")
        if (typeof b == "object" && b !== null) {
          if (b.as == null || b.as === "script") {
            var z = H(b.as, b.crossOrigin);
            o.d.M(S, {
              crossOrigin: z,
              integrity: typeof b.integrity == "string" ? b.integrity : void 0,
              nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            });
          }
        } else b == null && o.d.M(S);
    }),
    (Qe.preload = function (S, b) {
      if (
        typeof S == "string" &&
        typeof b == "object" &&
        b !== null &&
        typeof b.as == "string"
      ) {
        var z = b.as,
          U = H(z, b.crossOrigin);
        o.d.L(S, z, {
          crossOrigin: U,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority:
            typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy:
            typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet:
            typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0,
        });
      }
    }),
    (Qe.preloadModule = function (S, b) {
      if (typeof S == "string")
        if (b) {
          var z = H(b.as, b.crossOrigin);
          o.d.m(S, {
            as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
            crossOrigin: z,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          });
        } else o.d.m(S);
    }),
    (Qe.requestFormReset = function (S) {
      o.d.r(S);
    }),
    (Qe.unstable_batchedUpdates = function (S, b) {
      return S(b);
    }),
    (Qe.useFormState = function (S, b, z) {
      return v.H.useFormState(S, b, z);
    }),
    (Qe.useFormStatus = function () {
      return v.H.useHostTransitionStatus();
    }),
    (Qe.version = "19.2.8"),
    Qe
  );
}
var Lf;
function Em() {
  if (Lf) return vr.exports;
  Lf = 1;
  function y() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (D) {
        console.error(D);
      }
  }
  return (y(), (vr.exports = Mm()), vr.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf;
function zm() {
  if (Vf) return Cn;
  Vf = 1;
  var y = Am(),
    D = Er(),
    M = Em();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function j(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function E(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function v(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function H(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (E(e) !== e) throw Error(o(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = E(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ;) {
      var i = a.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((l = i.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s;) {
          if (s === a) return (S(i), e);
          if (s === l) return (S(i), t);
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) ((a = i), (l = s));
      else {
        for (var c = !1, r = i.child; r;) {
          if (r === a) {
            ((c = !0), (a = i), (l = s));
            break;
          }
          if (r === l) {
            ((c = !0), (l = i), (a = s));
            break;
          }
          r = r.sibling;
        }
        if (!c) {
          for (r = s.child; r;) {
            if (r === a) {
              ((c = !0), (a = s), (l = i));
              break;
            }
            if (r === l) {
              ((c = !0), (l = s), (a = i));
              break;
            }
            r = r.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function z(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null;) {
      if (((t = z(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var U = Object.assign,
    ae = Symbol.for("react.element"),
    De = Symbol.for("react.transitional.element"),
    k = Symbol.for("react.portal"),
    F = Symbol.for("react.fragment"),
    Me = Symbol.for("react.strict_mode"),
    $e = Symbol.for("react.profiler"),
    $t = Symbol.for("react.consumer"),
    Re = Symbol.for("react.context"),
    ot = Symbol.for("react.forward_ref"),
    Tt = Symbol.for("react.suspense"),
    Ge = Symbol.for("react.suspense_list"),
    ee = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    Ct = Symbol.for("react.activity"),
    Xa = Symbol.for("react.memo_cache_sentinel"),
    At = Symbol.iterator;
  function Ve(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (At && e[At]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Sa = Symbol.for("react.client.reference");
  function Dt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Sa ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case F:
        return "Fragment";
      case $e:
        return "Profiler";
      case Me:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Ge:
        return "SuspenseList";
      case Ct:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case k:
          return "Portal";
        case Re:
          return e.displayName || "Context";
        case $t:
          return (e._context.displayName || "Context") + ".Consumer";
        case ot:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ee:
          return (
            (t = e.displayName || null),
            t !== null ? t : Dt(e.type) || "Memo"
          );
        case Le:
          ((t = e._payload), (e = e._init));
          try {
            return Dt(e(t));
          } catch {}
      }
    return null;
  }
  var jt = Array.isArray,
    w = D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    O = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    G = { pending: !1, data: null, method: null, action: null },
    ue = [],
    me = -1;
  function f(e) {
    return { current: e };
  }
  function A(e) {
    0 > me || ((e.current = ue[me]), (ue[me] = null), me--);
  }
  function _(e, t) {
    (me++, (ue[me] = e.current), (e.current = t));
  }
  var R = f(null),
    V = f(null),
    K = f(null),
    ce = f(null);
  function Be(e, t) {
    switch ((_(K, t), _(V, e), _(R, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? nf(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = nf(t)), (e = sf(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (A(R), _(R, e));
  }
  function je() {
    (A(R), A(V), A(K));
  }
  function kl(e) {
    e.memoizedState !== null && _(ce, e);
    var t = R.current,
      a = sf(t, e.type);
    t !== a && (_(V, e), _(R, a));
  }
  function En(e) {
    (V.current === e && (A(R), A(V)),
      ce.current === e && (A(ce), (jn._currentValue = G)));
  }
  var Fi, Or;
  function Ta(e) {
    if (Fi === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Fi = (t && t[1]) || ""),
          (Or =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Fi +
      e +
      Or
    );
  }
  var $i = !1;
  function Pi(e, t) {
    if (!e || $i) return "";
    $i = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var C = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(C.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(C, []);
                } catch (g) {
                  var p = g;
                }
                Reflect.construct(e, [], C);
              } else {
                try {
                  C.call();
                } catch (g) {
                  p = g;
                }
                e.call(C.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                p = g;
              }
              (C = e()) &&
                typeof C.catch == "function" &&
                C.catch(function () {});
            }
          } catch (g) {
            if (g && p && typeof g.stack == "string") return [g.stack, p.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var s = l.DetermineComponentFrameRoot(),
        c = s[0],
        r = s[1];
      if (c && r) {
        var u = c.split(`
`),
          h = r.split(`
`);
        for (
          i = l = 0;
          l < u.length && !u[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; i < h.length && !h[i].includes("DetermineComponentFrameRoot");)
          i++;
        if (l === u.length || i === h.length)
          for (
            l = u.length - 1, i = h.length - 1;
            1 <= l && 0 <= i && u[l] !== h[i];
          )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (u[l] !== h[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || u[l] !== h[i])) {
                  var N =
                    `
` + u[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      N.includes("<anonymous>") &&
                      (N = N.replace("<anonymous>", e.displayName)),
                    N
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      (($i = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Ta(a) : "";
  }
  function e0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ta(e.type);
      case 16:
        return Ta("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Ta("Suspense Fallback")
          : Ta("Suspense");
      case 19:
        return Ta("SuspenseList");
      case 0:
      case 15:
        return Pi(e.type, !1);
      case 11:
        return Pi(e.type.render, !1);
      case 1:
        return Pi(e.type, !0);
      case 31:
        return Ta("Activity");
      default:
        return "";
    }
  }
  function _r(e) {
    try {
      var t = "",
        a = null;
      do ((t += e0(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var es = Object.prototype.hasOwnProperty,
    ts = y.unstable_scheduleCallback,
    as = y.unstable_cancelCallback,
    t0 = y.unstable_shouldYield,
    a0 = y.unstable_requestPaint,
    Pe = y.unstable_now,
    l0 = y.unstable_getCurrentPriorityLevel,
    Hr = y.unstable_ImmediatePriority,
    Ur = y.unstable_UserBlockingPriority,
    zn = y.unstable_NormalPriority,
    n0 = y.unstable_LowPriority,
    qr = y.unstable_IdlePriority,
    i0 = y.log,
    s0 = y.unstable_setDisableYieldValue,
    Dl = null,
    et = null;
  function Pt(e) {
    if (
      (typeof i0 == "function" && s0(e),
      et && typeof et.setStrictMode == "function")
    )
      try {
        et.setStrictMode(Dl, e);
      } catch {}
  }
  var tt = Math.clz32 ? Math.clz32 : o0,
    c0 = Math.log,
    r0 = Math.LN2;
  function o0(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((c0(e) / r0) | 0)) | 0);
  }
  var kn = 256,
    Dn = 262144,
    On = 4194304;
  function Ca(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function _n(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      s = e.suspendedLanes,
      c = e.pingedLanes;
    e = e.warmLanes;
    var r = l & 134217727;
    return (
      r !== 0
        ? ((l = r & ~s),
          l !== 0
            ? (i = Ca(l))
            : ((c &= r),
              c !== 0
                ? (i = Ca(c))
                : a || ((a = r & ~e), a !== 0 && (i = Ca(a)))))
        : ((r = l & ~s),
          r !== 0
            ? (i = Ca(r))
            : c !== 0
              ? (i = Ca(c))
              : a || ((a = l & ~e), a !== 0 && (i = Ca(a)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & s) === 0 &&
            ((s = i & -i),
            (a = t & -t),
            s >= a || (s === 32 && (a & 4194048) !== 0))
          ? t
          : i
    );
  }
  function Ol(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function u0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rr() {
    var e = On;
    return ((On <<= 1), (On & 62914560) === 0 && (On = 4194304), e);
  }
  function ls(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function _l(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function d0(e, t, a, l, i, s) {
    var c = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var r = e.entanglements,
      u = e.expirationTimes,
      h = e.hiddenUpdates;
    for (a = c & ~a; 0 < a;) {
      var N = 31 - tt(a),
        C = 1 << N;
      ((r[N] = 0), (u[N] = -1));
      var p = h[N];
      if (p !== null)
        for (h[N] = null, N = 0; N < p.length; N++) {
          var g = p[N];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~C;
    }
    (l !== 0 && Qr(e, l, 0),
      s !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= s & ~(c & ~t)));
  }
  function Qr(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - tt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 261930)));
  }
  function Br(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a;) {
      var l = 31 - tt(a),
        i = 1 << l;
      ((i & t) | (e[l] & t) && (e[l] |= t), (a &= ~i));
    }
  }
  function Yr(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : ns(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function ns(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function is(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Gr() {
    var e = O.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ef(e.type));
  }
  function Lr(e, t) {
    var a = O.p;
    try {
      return ((O.p = e), t());
    } finally {
      O.p = a;
    }
  }
  var ea = Math.random().toString(36).slice(2),
    Oe = "__reactFiber$" + ea,
    Xe = "__reactProps$" + ea,
    Za = "__reactContainer$" + ea,
    ss = "__reactEvents$" + ea,
    f0 = "__reactListeners$" + ea,
    x0 = "__reactHandles$" + ea,
    Vr = "__reactResources$" + ea,
    Hl = "__reactMarker$" + ea;
  function cs(e) {
    (delete e[Oe], delete e[Xe], delete e[ss], delete e[f0], delete e[x0]);
  }
  function Ia(e) {
    var t = e[Oe];
    if (t) return t;
    for (var a = e.parentNode; a;) {
      if ((t = a[Za] || a[Oe])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = xf(e); e !== null;) {
            if ((a = e[Oe])) return a;
            e = xf(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Ka(e) {
    if ((e = e[Oe] || e[Za])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ul(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ja(e) {
    var t = e[Vr];
    return (
      t ||
        (t = e[Vr] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function ze(e) {
    e[Hl] = !0;
  }
  var Xr = new Set(),
    Zr = {};
  function Aa(e, t) {
    (Wa(e, t), Wa(e + "Capture", t));
  }
  function Wa(e, t) {
    for (Zr[e] = t, e = 0; e < t.length; e++) Xr.add(t[e]);
  }
  var m0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Ir = {},
    Kr = {};
  function h0(e) {
    return es.call(Kr, e)
      ? !0
      : es.call(Ir, e)
        ? !1
        : m0.test(e)
          ? (Kr[e] = !0)
          : ((Ir[e] = !0), !1);
  }
  function Hn(e, t, a) {
    if (h0(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Un(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function Ot(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function ut(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Jr(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function p0(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var i = l.get,
        s = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (c) {
            ((a = "" + c), s.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function rs(e) {
    if (!e._valueTracker) {
      var t = Jr(e) ? "checked" : "value";
      e._valueTracker = p0(e, t, "" + e[t]);
    }
  }
  function Wr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return (
      e && (l = Jr(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function qn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var b0 = /[\n"\\]/g;
  function dt(e) {
    return e.replace(b0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function os(e, t, a, l, i, s, c, r) {
    ((e.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (e.type = c)
        : e.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + ut(t))
          : e.value !== "" + ut(t) && (e.value = "" + ut(t))
        : (c !== "submit" && c !== "reset") || e.removeAttribute("value"),
      t != null
        ? us(e, c, ut(t))
        : a != null
          ? us(e, c, ut(a))
          : l != null && e.removeAttribute("value"),
      i == null && s != null && (e.defaultChecked = !!s),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (e.name = "" + ut(r))
        : e.removeAttribute("name"));
  }
  function Fr(e, t, a, l, i, s, c, r) {
    if (
      (s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        typeof s != "boolean" &&
        (e.type = s),
      t != null || a != null)
    ) {
      if (!((s !== "submit" && s !== "reset") || t != null)) {
        rs(e);
        return;
      }
      ((a = a != null ? "" + ut(a) : ""),
        (t = t != null ? "" + ut(t) : a),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? i),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = r ? e.checked : !!l),
      (e.defaultChecked = !!l),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (e.name = c),
      rs(e));
  }
  function us(e, t, a) {
    (t === "number" && qn(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function Fa(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < a.length; i++) t["$" + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        ((i = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== i && (e[a].selected = i),
          i && l && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + ut(a), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === a) {
          ((e[i].selected = !0), l && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function $r(e, t, a) {
    if (
      t != null &&
      ((t = "" + ut(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + ut(a) : "";
  }
  function Pr(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (jt(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ut(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l),
      rs(e));
  }
  function $a(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var g0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function eo(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || g0.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function to(e, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var i in t)
        ((l = t[i]), t.hasOwnProperty(i) && a[i] !== l && eo(e, i, l));
    } else for (var s in t) t.hasOwnProperty(s) && eo(e, s, t[s]);
  }
  function ds(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var y0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    v0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Rn(e) {
    return v0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function _t() {}
  var fs = null;
  function xs(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Pa = null,
    el = null;
  function ao(e) {
    var t = Ka(e);
    if (t && (e = t.stateNode)) {
      var a = e[Xe] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (os(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode;) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + dt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var i = l[Xe] || null;
                if (!i) throw Error(o(90));
                os(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((l = a[t]), l.form === e.form && Wr(l));
          }
          break e;
        case "textarea":
          $r(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && Fa(e, !!a.multiple, t, !1));
      }
    }
  }
  var ms = !1;
  function lo(e, t, a) {
    if (ms) return e(t, a);
    ms = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((ms = !1),
        (Pa !== null || el !== null) &&
          (Ti(), Pa && ((t = Pa), (e = el), (el = Pa = null), ao(t), e)))
      )
        for (t = 0; t < e.length; t++) ao(e[t]);
    }
  }
  function ql(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Xe] || null;
    if (l === null) return null;
    a = l[t];
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
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var Ht = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    hs = !1;
  if (Ht)
    try {
      var Rl = {};
      (Object.defineProperty(Rl, "passive", {
        get: function () {
          hs = !0;
        },
      }),
        window.addEventListener("test", Rl, Rl),
        window.removeEventListener("test", Rl, Rl));
    } catch {
      hs = !1;
    }
  var ta = null,
    ps = null,
    Qn = null;
  function no() {
    if (Qn) return Qn;
    var e,
      t = ps,
      a = t.length,
      l,
      i = "value" in ta ? ta.value : ta.textContent,
      s = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++);
    var c = a - e;
    for (l = 1; l <= c && t[a - l] === i[s - l]; l++);
    return (Qn = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Bn(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yn() {
    return !0;
  }
  function io() {
    return !1;
  }
  function Ze(e) {
    function t(a, l, i, s, c) {
      ((this._reactName = a),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = s),
        (this.target = c),
        (this.currentTarget = null));
      for (var r in e)
        e.hasOwnProperty(r) && ((a = e[r]), (this[r] = a ? a(s) : s[r]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Yn
          : io),
        (this.isPropagationStopped = io),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Yn));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Yn));
        },
        persist: function () {},
        isPersistent: Yn,
      }),
      t
    );
  }
  var Ma = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Gn = Ze(Ma),
    Ql = U({}, Ma, { view: 0, detail: 0 }),
    j0 = Ze(Ql),
    bs,
    gs,
    Bl,
    Ln = U({}, Ql, {
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
      getModifierState: vs,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Bl &&
              (Bl && e.type === "mousemove"
                ? ((bs = e.screenX - Bl.screenX), (gs = e.screenY - Bl.screenY))
                : (gs = bs = 0),
              (Bl = e)),
            bs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : gs;
      },
    }),
    so = Ze(Ln),
    N0 = U({}, Ln, { dataTransfer: 0 }),
    w0 = Ze(N0),
    S0 = U({}, Ql, { relatedTarget: 0 }),
    ys = Ze(S0),
    T0 = U({}, Ma, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    C0 = Ze(T0),
    A0 = U({}, Ma, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    M0 = Ze(A0),
    E0 = U({}, Ma, { data: 0 }),
    co = Ze(E0),
    z0 = {
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
      MozPrintableKey: "Unidentified",
    },
    k0 = {
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
      224: "Meta",
    },
    D0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function O0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = D0[e])
        ? !!t[e]
        : !1;
  }
  function vs() {
    return O0;
  }
  var _0 = U({}, Ql, {
      key: function (e) {
        if (e.key) {
          var t = z0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Bn(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? k0[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: vs,
      charCode: function (e) {
        return e.type === "keypress" ? Bn(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Bn(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    H0 = Ze(_0),
    U0 = U({}, Ln, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ro = Ze(U0),
    q0 = U({}, Ql, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: vs,
    }),
    R0 = Ze(q0),
    Q0 = U({}, Ma, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    B0 = Ze(Q0),
    Y0 = U({}, Ln, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    G0 = Ze(Y0),
    L0 = U({}, Ma, { newState: 0, oldState: 0 }),
    V0 = Ze(L0),
    X0 = [9, 13, 27, 32],
    js = Ht && "CompositionEvent" in window,
    Yl = null;
  Ht && "documentMode" in document && (Yl = document.documentMode);
  var Z0 = Ht && "TextEvent" in window && !Yl,
    oo = Ht && (!js || (Yl && 8 < Yl && 11 >= Yl)),
    uo = " ",
    fo = !1;
  function xo(e, t) {
    switch (e) {
      case "keyup":
        return X0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mo(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var tl = !1;
  function I0(e, t) {
    switch (e) {
      case "compositionend":
        return mo(t);
      case "keypress":
        return t.which !== 32 ? null : ((fo = !0), uo);
      case "textInput":
        return ((e = t.data), e === uo && fo ? null : e);
      default:
        return null;
    }
  }
  function K0(e, t) {
    if (tl)
      return e === "compositionend" || (!js && xo(e, t))
        ? ((e = no()), (Qn = ps = ta = null), (tl = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return oo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var J0 = {
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
    week: !0,
  };
  function ho(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!J0[e.type] : t === "textarea";
  }
  function po(e, t, a, l) {
    (Pa ? (el ? el.push(l) : (el = [l])) : (Pa = l),
      (t = Di(t, "onChange")),
      0 < t.length &&
        ((a = new Gn("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: t })));
  }
  var Gl = null,
    Ll = null;
  function W0(e) {
    $d(e, 0);
  }
  function Vn(e) {
    var t = Ul(e);
    if (Wr(t)) return e;
  }
  function bo(e, t) {
    if (e === "change") return t;
  }
  var go = !1;
  if (Ht) {
    var Ns;
    if (Ht) {
      var ws = "oninput" in document;
      if (!ws) {
        var yo = document.createElement("div");
        (yo.setAttribute("oninput", "return;"),
          (ws = typeof yo.oninput == "function"));
      }
      Ns = ws;
    } else Ns = !1;
    go = Ns && (!document.documentMode || 9 < document.documentMode);
  }
  function vo() {
    Gl && (Gl.detachEvent("onpropertychange", jo), (Ll = Gl = null));
  }
  function jo(e) {
    if (e.propertyName === "value" && Vn(Ll)) {
      var t = [];
      (po(t, Ll, e, xs(e)), lo(W0, t));
    }
  }
  function F0(e, t, a) {
    e === "focusin"
      ? (vo(), (Gl = t), (Ll = a), Gl.attachEvent("onpropertychange", jo))
      : e === "focusout" && vo();
  }
  function $0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Vn(Ll);
  }
  function P0(e, t) {
    if (e === "click") return Vn(t);
  }
  function ex(e, t) {
    if (e === "input" || e === "change") return Vn(t);
  }
  function tx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var at = typeof Object.is == "function" ? Object.is : tx;
  function Vl(e, t) {
    if (at(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var i = a[l];
      if (!es.call(t, i) || !at(e[i], t[i])) return !1;
    }
    return !0;
  }
  function No(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function wo(e, t) {
    var a = No(e);
    e = 0;
    for (var l; a;) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t))
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a;) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = No(a);
    }
  }
  function So(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? So(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function To(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = qn(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = qn(e.document);
    }
    return t;
  }
  function Ss(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var ax = Ht && "documentMode" in document && 11 >= document.documentMode,
    al = null,
    Ts = null,
    Xl = null,
    Cs = !1;
  function Co(e, t, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Cs ||
      al == null ||
      al !== qn(l) ||
      ((l = al),
      "selectionStart" in l && Ss(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Xl && Vl(Xl, l)) ||
        ((Xl = l),
        (l = Di(Ts, "onSelect")),
        0 < l.length &&
          ((t = new Gn("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = al))));
  }
  function Ea(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var ll = {
      animationend: Ea("Animation", "AnimationEnd"),
      animationiteration: Ea("Animation", "AnimationIteration"),
      animationstart: Ea("Animation", "AnimationStart"),
      transitionrun: Ea("Transition", "TransitionRun"),
      transitionstart: Ea("Transition", "TransitionStart"),
      transitioncancel: Ea("Transition", "TransitionCancel"),
      transitionend: Ea("Transition", "TransitionEnd"),
    },
    As = {},
    Ao = {};
  Ht &&
    ((Ao = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ll.animationend.animation,
      delete ll.animationiteration.animation,
      delete ll.animationstart.animation),
    "TransitionEvent" in window || delete ll.transitionend.transition);
  function za(e) {
    if (As[e]) return As[e];
    if (!ll[e]) return e;
    var t = ll[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in Ao) return (As[e] = t[a]);
    return e;
  }
  var Mo = za("animationend"),
    Eo = za("animationiteration"),
    zo = za("animationstart"),
    lx = za("transitionrun"),
    nx = za("transitionstart"),
    ix = za("transitioncancel"),
    ko = za("transitionend"),
    Do = new Map(),
    Ms =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Ms.push("scrollEnd");
  function Nt(e, t) {
    (Do.set(e, t), Aa(t, [e]));
  }
  var Xn =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    ft = [],
    nl = 0,
    Es = 0;
  function Zn() {
    for (var e = nl, t = (Es = nl = 0); t < e;) {
      var a = ft[t];
      ft[t++] = null;
      var l = ft[t];
      ft[t++] = null;
      var i = ft[t];
      ft[t++] = null;
      var s = ft[t];
      if (((ft[t++] = null), l !== null && i !== null)) {
        var c = l.pending;
        (c === null ? (i.next = i) : ((i.next = c.next), (c.next = i)),
          (l.pending = i));
      }
      s !== 0 && Oo(a, i, s);
    }
  }
  function In(e, t, a, l) {
    ((ft[nl++] = e),
      (ft[nl++] = t),
      (ft[nl++] = a),
      (ft[nl++] = l),
      (Es |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function zs(e, t, a, l) {
    return (In(e, t, a, l), Kn(e));
  }
  function ka(e, t) {
    return (In(e, null, null, t), Kn(e));
  }
  function Oo(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var i = !1, s = e.return; s !== null;)
      ((s.childLanes |= a),
        (l = s.alternate),
        l !== null && (l.childLanes |= a),
        s.tag === 22 &&
          ((e = s.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = s),
        (s = s.return));
    return e.tag === 3
      ? ((s = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - tt(a)),
          (e = s.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = a | 536870912)),
        s)
      : null;
  }
  function Kn(e) {
    if (50 < mn) throw ((mn = 0), (Qc = null), Error(o(185)));
    for (var t = e.return; t !== null;) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var il = {};
  function sx(e, t, a, l) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function lt(e, t, a, l) {
    return new sx(e, t, a, l);
  }
  function ks(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ut(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = lt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function _o(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Jn(e, t, a, l, i, s) {
    var c = 0;
    if (((l = e), typeof e == "function")) ks(e) && (c = 1);
    else if (typeof e == "string")
      c = dm(e, a, R.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case Ct:
          return (
            (e = lt(31, a, t, i)),
            (e.elementType = Ct),
            (e.lanes = s),
            e
          );
        case F:
          return Da(a.children, i, s, t);
        case Me:
          ((c = 8), (i |= 24));
          break;
        case $e:
          return (
            (e = lt(12, a, t, i | 2)),
            (e.elementType = $e),
            (e.lanes = s),
            e
          );
        case Tt:
          return (
            (e = lt(13, a, t, i)),
            (e.elementType = Tt),
            (e.lanes = s),
            e
          );
        case Ge:
          return (
            (e = lt(19, a, t, i)),
            (e.elementType = Ge),
            (e.lanes = s),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Re:
                c = 10;
                break e;
              case $t:
                c = 9;
                break e;
              case ot:
                c = 11;
                break e;
              case ee:
                c = 14;
                break e;
              case Le:
                ((c = 16), (l = null));
                break e;
            }
          ((c = 29),
            (a = Error(o(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = lt(c, a, t, i)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = s),
      t
    );
  }
  function Da(e, t, a, l) {
    return ((e = lt(7, e, l, t)), (e.lanes = a), e);
  }
  function Ds(e, t, a) {
    return ((e = lt(6, e, null, t)), (e.lanes = a), e);
  }
  function Ho(e) {
    var t = lt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function Os(e, t, a) {
    return (
      (t = lt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Uo = new WeakMap();
  function xt(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Uo.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: _r(t) }), Uo.set(e, t), t);
    }
    return { value: e, source: t, stack: _r(t) };
  }
  var sl = [],
    cl = 0,
    Wn = null,
    Zl = 0,
    mt = [],
    ht = 0,
    aa = null,
    Mt = 1,
    Et = "";
  function qt(e, t) {
    ((sl[cl++] = Zl), (sl[cl++] = Wn), (Wn = e), (Zl = t));
  }
  function qo(e, t, a) {
    ((mt[ht++] = Mt), (mt[ht++] = Et), (mt[ht++] = aa), (aa = e));
    var l = Mt;
    e = Et;
    var i = 32 - tt(l) - 1;
    ((l &= ~(1 << i)), (a += 1));
    var s = 32 - tt(t) + i;
    if (30 < s) {
      var c = i - (i % 5);
      ((s = (l & ((1 << c) - 1)).toString(32)),
        (l >>= c),
        (i -= c),
        (Mt = (1 << (32 - tt(t) + i)) | (a << i) | l),
        (Et = s + e));
    } else ((Mt = (1 << s) | (a << i) | l), (Et = e));
  }
  function _s(e) {
    e.return !== null && (qt(e, 1), qo(e, 1, 0));
  }
  function Hs(e) {
    for (; e === Wn;)
      ((Wn = sl[--cl]), (sl[cl] = null), (Zl = sl[--cl]), (sl[cl] = null));
    for (; e === aa;)
      ((aa = mt[--ht]),
        (mt[ht] = null),
        (Et = mt[--ht]),
        (mt[ht] = null),
        (Mt = mt[--ht]),
        (mt[ht] = null));
  }
  function Ro(e, t) {
    ((mt[ht++] = Mt),
      (mt[ht++] = Et),
      (mt[ht++] = aa),
      (Mt = t.id),
      (Et = t.overflow),
      (aa = e));
  }
  var _e = null,
    pe = null,
    te = !1,
    la = null,
    pt = !1,
    Us = Error(o(519));
  function na(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Il(xt(t, e)), Us);
  }
  function Qo(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[Oe] = e), (t[Xe] = l), a)) {
      case "dialog":
        (W("cancel", t), W("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        W("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < pn.length; a++) W(pn[a], t);
        break;
      case "source":
        W("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (W("error", t), W("load", t));
        break;
      case "details":
        W("toggle", t);
        break;
      case "input":
        (W("invalid", t),
          Fr(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        W("invalid", t);
        break;
      case "textarea":
        (W("invalid", t), Pr(t, l.value, l.defaultValue, l.children));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      af(t.textContent, a)
        ? (l.popover != null && (W("beforetoggle", t), W("toggle", t)),
          l.onScroll != null && W("scroll", t),
          l.onScrollEnd != null && W("scrollend", t),
          l.onClick != null && (t.onclick = _t),
          (t = !0))
        : (t = !1),
      t || na(e, !0));
  }
  function Bo(e) {
    for (_e = e.return; _e;)
      switch (_e.tag) {
        case 5:
        case 31:
        case 13:
          pt = !1;
          return;
        case 27:
        case 3:
          pt = !0;
          return;
        default:
          _e = _e.return;
      }
  }
  function rl(e) {
    if (e !== _e) return !1;
    if (!te) return (Bo(e), (te = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || er(e.type, e.memoizedProps))),
        (a = !a)),
      a && pe && na(e),
      Bo(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      pe = ff(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      pe = ff(e);
    } else
      t === 27
        ? ((t = pe), ga(e.type) ? ((e = ir), (ir = null), (pe = e)) : (pe = t))
        : (pe = _e ? gt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Oa() {
    ((pe = _e = null), (te = !1));
  }
  function qs() {
    var e = la;
    return (
      e !== null &&
        (We === null ? (We = e) : We.push.apply(We, e), (la = null)),
      e
    );
  }
  function Il(e) {
    la === null ? (la = [e]) : la.push(e);
  }
  var Rs = f(null),
    _a = null,
    Rt = null;
  function ia(e, t, a) {
    (_(Rs, t._currentValue), (t._currentValue = a));
  }
  function Qt(e) {
    ((e._currentValue = Rs.current), A(Rs));
  }
  function Qs(e, t, a) {
    for (; e !== null;) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Bs(e, t, a, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null;) {
      var s = i.dependencies;
      if (s !== null) {
        var c = i.child;
        s = s.firstContext;
        e: for (; s !== null;) {
          var r = s;
          s = i;
          for (var u = 0; u < t.length; u++)
            if (r.context === t[u]) {
              ((s.lanes |= a),
                (r = s.alternate),
                r !== null && (r.lanes |= a),
                Qs(s.return, a, e),
                l || (c = null));
              break e;
            }
          s = r.next;
        }
      } else if (i.tag === 18) {
        if (((c = i.return), c === null)) throw Error(o(341));
        ((c.lanes |= a),
          (s = c.alternate),
          s !== null && (s.lanes |= a),
          Qs(c, a, e),
          (c = null));
      } else c = i.child;
      if (c !== null) c.return = i;
      else
        for (c = i; c !== null;) {
          if (c === e) {
            c = null;
            break;
          }
          if (((i = c.sibling), i !== null)) {
            ((i.return = c.return), (c = i));
            break;
          }
          c = c.return;
        }
      i = c;
    }
  }
  function ol(e, t, a, l) {
    e = null;
    for (var i = t, s = !1; i !== null;) {
      if (!s) {
        if ((i.flags & 524288) !== 0) s = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var c = i.alternate;
        if (c === null) throw Error(o(387));
        if (((c = c.memoizedProps), c !== null)) {
          var r = i.type;
          at(i.pendingProps.value, c.value) ||
            (e !== null ? e.push(r) : (e = [r]));
        }
      } else if (i === ce.current) {
        if (((c = i.alternate), c === null)) throw Error(o(387));
        c.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(jn) : (e = [jn]));
      }
      i = i.return;
    }
    (e !== null && Bs(t, e, a, l), (t.flags |= 262144));
  }
  function Fn(e) {
    for (e = e.firstContext; e !== null;) {
      if (!at(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ha(e) {
    ((_a = e),
      (Rt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function He(e) {
    return Yo(_a, e);
  }
  function $n(e, t) {
    return (_a === null && Ha(e), Yo(e, t));
  }
  function Yo(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Rt === null)) {
      if (e === null) throw Error(o(308));
      ((Rt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Rt = Rt.next = t;
    return a;
  }
  var cx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    rx = y.unstable_scheduleCallback,
    ox = y.unstable_NormalPriority,
    Se = {
      $$typeof: Re,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ys() {
    return { controller: new cx(), data: new Map(), refCount: 0 };
  }
  function Kl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        rx(ox, function () {
          e.controller.abort();
        }));
  }
  var Jl = null,
    Gs = 0,
    ul = 0,
    dl = null;
  function ux(e, t) {
    if (Jl === null) {
      var a = (Jl = []);
      ((Gs = 0),
        (ul = Xc()),
        (dl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (Gs++, t.then(Go, Go), t);
  }
  function Go() {
    if (--Gs === 0 && Jl !== null) {
      dl !== null && (dl.status = "fulfilled");
      var e = Jl;
      ((Jl = null), (ul = 0), (dl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function dx(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          a.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var i = 0; i < a.length; i++) (0, a[i])(t);
        },
        function (i) {
          for (l.status = "rejected", l.reason = i, i = 0; i < a.length; i++)
            (0, a[i])(void 0);
        },
      ),
      l
    );
  }
  var Lo = w.S;
  w.S = function (e, t) {
    ((Cd = Pe()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        ux(e, t),
      Lo !== null && Lo(e, t));
  };
  var Ua = f(null);
  function Ls() {
    var e = Ua.current;
    return e !== null ? e : he.pooledCache;
  }
  function Pn(e, t) {
    t === null ? _(Ua, Ua.current) : _(Ua, t.pool);
  }
  function Vo() {
    var e = Ls();
    return e === null ? null : { parent: Se._currentValue, pool: e };
  }
  var fl = Error(o(460)),
    Vs = Error(o(474)),
    ei = Error(o(542)),
    ti = { then: function () {} };
  function Xo(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Zo(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(_t, _t), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Ko(e), e);
      default:
        if (typeof t.status == "string") t.then(_t, _t);
        else {
          if (((e = he), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Ko(e), e);
        }
        throw ((Ra = t), fl);
    }
  }
  function qa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ra = a), fl)
        : a;
    }
  }
  var Ra = null;
  function Io() {
    if (Ra === null) throw Error(o(459));
    var e = Ra;
    return ((Ra = null), e);
  }
  function Ko(e) {
    if (e === fl || e === ei) throw Error(o(483));
  }
  var xl = null,
    Wl = 0;
  function ai(e) {
    var t = Wl;
    return ((Wl += 1), xl === null && (xl = []), Zo(xl, e, t));
  }
  function Fl(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function li(e, t) {
    throw t.$$typeof === ae
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Jo(e) {
    function t(x, d) {
      if (e) {
        var m = x.deletions;
        m === null ? ((x.deletions = [d]), (x.flags |= 16)) : m.push(d);
      }
    }
    function a(x, d) {
      if (!e) return null;
      for (; d !== null;) (t(x, d), (d = d.sibling));
      return null;
    }
    function l(x) {
      for (var d = new Map(); x !== null;)
        (x.key !== null ? d.set(x.key, x) : d.set(x.index, x), (x = x.sibling));
      return d;
    }
    function i(x, d) {
      return ((x = Ut(x, d)), (x.index = 0), (x.sibling = null), x);
    }
    function s(x, d, m) {
      return (
        (x.index = m),
        e
          ? ((m = x.alternate),
            m !== null
              ? ((m = m.index), m < d ? ((x.flags |= 67108866), d) : m)
              : ((x.flags |= 67108866), d))
          : ((x.flags |= 1048576), d)
      );
    }
    function c(x) {
      return (e && x.alternate === null && (x.flags |= 67108866), x);
    }
    function r(x, d, m, T) {
      return d === null || d.tag !== 6
        ? ((d = Ds(m, x.mode, T)), (d.return = x), d)
        : ((d = i(d, m)), (d.return = x), d);
    }
    function u(x, d, m, T) {
      var B = m.type;
      return B === F
        ? N(x, d, m.props.children, T, m.key)
        : d !== null &&
            (d.elementType === B ||
              (typeof B == "object" &&
                B !== null &&
                B.$$typeof === Le &&
                qa(B) === d.type))
          ? ((d = i(d, m.props)), Fl(d, m), (d.return = x), d)
          : ((d = Jn(m.type, m.key, m.props, null, x.mode, T)),
            Fl(d, m),
            (d.return = x),
            d);
    }
    function h(x, d, m, T) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== m.containerInfo ||
        d.stateNode.implementation !== m.implementation
        ? ((d = Os(m, x.mode, T)), (d.return = x), d)
        : ((d = i(d, m.children || [])), (d.return = x), d);
    }
    function N(x, d, m, T, B) {
      return d === null || d.tag !== 7
        ? ((d = Da(m, x.mode, T, B)), (d.return = x), d)
        : ((d = i(d, m)), (d.return = x), d);
    }
    function C(x, d, m) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = Ds("" + d, x.mode, m)), (d.return = x), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case De:
            return (
              (m = Jn(d.type, d.key, d.props, null, x.mode, m)),
              Fl(m, d),
              (m.return = x),
              m
            );
          case k:
            return ((d = Os(d, x.mode, m)), (d.return = x), d);
          case Le:
            return ((d = qa(d)), C(x, d, m));
        }
        if (jt(d) || Ve(d))
          return ((d = Da(d, x.mode, m, null)), (d.return = x), d);
        if (typeof d.then == "function") return C(x, ai(d), m);
        if (d.$$typeof === Re) return C(x, $n(x, d), m);
        li(x, d);
      }
      return null;
    }
    function p(x, d, m, T) {
      var B = d !== null ? d.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return B !== null ? null : r(x, d, "" + m, T);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case De:
            return m.key === B ? u(x, d, m, T) : null;
          case k:
            return m.key === B ? h(x, d, m, T) : null;
          case Le:
            return ((m = qa(m)), p(x, d, m, T));
        }
        if (jt(m) || Ve(m)) return B !== null ? null : N(x, d, m, T, null);
        if (typeof m.then == "function") return p(x, d, ai(m), T);
        if (m.$$typeof === Re) return p(x, d, $n(x, m), T);
        li(x, m);
      }
      return null;
    }
    function g(x, d, m, T, B) {
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return ((x = x.get(m) || null), r(d, x, "" + T, B));
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case De:
            return (
              (x = x.get(T.key === null ? m : T.key) || null),
              u(d, x, T, B)
            );
          case k:
            return (
              (x = x.get(T.key === null ? m : T.key) || null),
              h(d, x, T, B)
            );
          case Le:
            return ((T = qa(T)), g(x, d, m, T, B));
        }
        if (jt(T) || Ve(T))
          return ((x = x.get(m) || null), N(d, x, T, B, null));
        if (typeof T.then == "function") return g(x, d, m, ai(T), B);
        if (T.$$typeof === Re) return g(x, d, m, $n(d, T), B);
        li(d, T);
      }
      return null;
    }
    function q(x, d, m, T) {
      for (
        var B = null, le = null, Q = d, Z = (d = 0), P = null;
        Q !== null && Z < m.length;
        Z++
      ) {
        Q.index > Z ? ((P = Q), (Q = null)) : (P = Q.sibling);
        var ne = p(x, Q, m[Z], T);
        if (ne === null) {
          Q === null && (Q = P);
          break;
        }
        (e && Q && ne.alternate === null && t(x, Q),
          (d = s(ne, d, Z)),
          le === null ? (B = ne) : (le.sibling = ne),
          (le = ne),
          (Q = P));
      }
      if (Z === m.length) return (a(x, Q), te && qt(x, Z), B);
      if (Q === null) {
        for (; Z < m.length; Z++)
          ((Q = C(x, m[Z], T)),
            Q !== null &&
              ((d = s(Q, d, Z)),
              le === null ? (B = Q) : (le.sibling = Q),
              (le = Q)));
        return (te && qt(x, Z), B);
      }
      for (Q = l(Q); Z < m.length; Z++)
        ((P = g(Q, x, Z, m[Z], T)),
          P !== null &&
            (e && P.alternate !== null && Q.delete(P.key === null ? Z : P.key),
            (d = s(P, d, Z)),
            le === null ? (B = P) : (le.sibling = P),
            (le = P)));
      return (
        e &&
          Q.forEach(function (wa) {
            return t(x, wa);
          }),
        te && qt(x, Z),
        B
      );
    }
    function Y(x, d, m, T) {
      if (m == null) throw Error(o(151));
      for (
        var B = null, le = null, Q = d, Z = (d = 0), P = null, ne = m.next();
        Q !== null && !ne.done;
        Z++, ne = m.next()
      ) {
        Q.index > Z ? ((P = Q), (Q = null)) : (P = Q.sibling);
        var wa = p(x, Q, ne.value, T);
        if (wa === null) {
          Q === null && (Q = P);
          break;
        }
        (e && Q && wa.alternate === null && t(x, Q),
          (d = s(wa, d, Z)),
          le === null ? (B = wa) : (le.sibling = wa),
          (le = wa),
          (Q = P));
      }
      if (ne.done) return (a(x, Q), te && qt(x, Z), B);
      if (Q === null) {
        for (; !ne.done; Z++, ne = m.next())
          ((ne = C(x, ne.value, T)),
            ne !== null &&
              ((d = s(ne, d, Z)),
              le === null ? (B = ne) : (le.sibling = ne),
              (le = ne)));
        return (te && qt(x, Z), B);
      }
      for (Q = l(Q); !ne.done; Z++, ne = m.next())
        ((ne = g(Q, x, Z, ne.value, T)),
          ne !== null &&
            (e &&
              ne.alternate !== null &&
              Q.delete(ne.key === null ? Z : ne.key),
            (d = s(ne, d, Z)),
            le === null ? (B = ne) : (le.sibling = ne),
            (le = ne)));
      return (
        e &&
          Q.forEach(function (Nm) {
            return t(x, Nm);
          }),
        te && qt(x, Z),
        B
      );
    }
    function xe(x, d, m, T) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === F &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case De:
            e: {
              for (var B = m.key; d !== null;) {
                if (d.key === B) {
                  if (((B = m.type), B === F)) {
                    if (d.tag === 7) {
                      (a(x, d.sibling),
                        (T = i(d, m.props.children)),
                        (T.return = x),
                        (x = T));
                      break e;
                    }
                  } else if (
                    d.elementType === B ||
                    (typeof B == "object" &&
                      B !== null &&
                      B.$$typeof === Le &&
                      qa(B) === d.type)
                  ) {
                    (a(x, d.sibling),
                      (T = i(d, m.props)),
                      Fl(T, m),
                      (T.return = x),
                      (x = T));
                    break e;
                  }
                  a(x, d);
                  break;
                } else t(x, d);
                d = d.sibling;
              }
              m.type === F
                ? ((T = Da(m.props.children, x.mode, T, m.key)),
                  (T.return = x),
                  (x = T))
                : ((T = Jn(m.type, m.key, m.props, null, x.mode, T)),
                  Fl(T, m),
                  (T.return = x),
                  (x = T));
            }
            return c(x);
          case k:
            e: {
              for (B = m.key; d !== null;) {
                if (d.key === B)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === m.containerInfo &&
                    d.stateNode.implementation === m.implementation
                  ) {
                    (a(x, d.sibling),
                      (T = i(d, m.children || [])),
                      (T.return = x),
                      (x = T));
                    break e;
                  } else {
                    a(x, d);
                    break;
                  }
                else t(x, d);
                d = d.sibling;
              }
              ((T = Os(m, x.mode, T)), (T.return = x), (x = T));
            }
            return c(x);
          case Le:
            return ((m = qa(m)), xe(x, d, m, T));
        }
        if (jt(m)) return q(x, d, m, T);
        if (Ve(m)) {
          if (((B = Ve(m)), typeof B != "function")) throw Error(o(150));
          return ((m = B.call(m)), Y(x, d, m, T));
        }
        if (typeof m.then == "function") return xe(x, d, ai(m), T);
        if (m.$$typeof === Re) return xe(x, d, $n(x, m), T);
        li(x, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          d !== null && d.tag === 6
            ? (a(x, d.sibling), (T = i(d, m)), (T.return = x), (x = T))
            : (a(x, d), (T = Ds(m, x.mode, T)), (T.return = x), (x = T)),
          c(x))
        : a(x, d);
    }
    return function (x, d, m, T) {
      try {
        Wl = 0;
        var B = xe(x, d, m, T);
        return ((xl = null), B);
      } catch (Q) {
        if (Q === fl || Q === ei) throw Q;
        var le = lt(29, Q, null, x.mode);
        return ((le.lanes = T), (le.return = x), le);
      } finally {
      }
    };
  }
  var Qa = Jo(!0),
    Wo = Jo(!1),
    sa = !1;
  function Xs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Zs(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function ca(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ra(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (ie & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = Kn(e)),
        Oo(e, null, a),
        t
      );
    }
    return (In(e, l, t, a), Kn(e));
  }
  function $l(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Br(e, a));
    }
  }
  function Is(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var i = null,
        s = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (s === null ? (i = s = c) : (s = s.next = c), (a = a.next));
        } while (a !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var Ks = !1;
  function Pl() {
    if (Ks) {
      var e = dl;
      if (e !== null) throw e;
    }
  }
  function en(e, t, a, l) {
    Ks = !1;
    var i = e.updateQueue;
    sa = !1;
    var s = i.firstBaseUpdate,
      c = i.lastBaseUpdate,
      r = i.shared.pending;
    if (r !== null) {
      i.shared.pending = null;
      var u = r,
        h = u.next;
      ((u.next = null), c === null ? (s = h) : (c.next = h), (c = u));
      var N = e.alternate;
      N !== null &&
        ((N = N.updateQueue),
        (r = N.lastBaseUpdate),
        r !== c &&
          (r === null ? (N.firstBaseUpdate = h) : (r.next = h),
          (N.lastBaseUpdate = u)));
    }
    if (s !== null) {
      var C = i.baseState;
      ((c = 0), (N = h = u = null), (r = s));
      do {
        var p = r.lane & -536870913,
          g = p !== r.lane;
        if (g ? ($ & p) === p : (l & p) === p) {
          (p !== 0 && p === ul && (Ks = !0),
            N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var q = e,
              Y = r;
            p = t;
            var xe = a;
            switch (Y.tag) {
              case 1:
                if (((q = Y.payload), typeof q == "function")) {
                  C = q.call(xe, C, p);
                  break e;
                }
                C = q;
                break e;
              case 3:
                q.flags = (q.flags & -65537) | 128;
              case 0:
                if (
                  ((q = Y.payload),
                  (p = typeof q == "function" ? q.call(xe, C, p) : q),
                  p == null)
                )
                  break e;
                C = U({}, C, p);
                break e;
              case 2:
                sa = !0;
            }
          }
          ((p = r.callback),
            p !== null &&
              ((e.flags |= 64),
              g && (e.flags |= 8192),
              (g = i.callbacks),
              g === null ? (i.callbacks = [p]) : g.push(p)));
        } else
          ((g = {
            lane: p,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            N === null ? ((h = N = g), (u = C)) : (N = N.next = g),
            (c |= p));
        if (((r = r.next), r === null)) {
          if (((r = i.shared.pending), r === null)) break;
          ((g = r),
            (r = g.next),
            (g.next = null),
            (i.lastBaseUpdate = g),
            (i.shared.pending = null));
        }
      } while (!0);
      (N === null && (u = C),
        (i.baseState = u),
        (i.firstBaseUpdate = h),
        (i.lastBaseUpdate = N),
        s === null && (i.shared.lanes = 0),
        (xa |= c),
        (e.lanes = c),
        (e.memoizedState = C));
    }
  }
  function Fo(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function $o(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Fo(a[e], t);
  }
  var ml = f(null),
    ni = f(0);
  function Po(e, t) {
    ((e = Kt), _(ni, e), _(ml, t), (Kt = e | t.baseLanes));
  }
  function Js() {
    (_(ni, Kt), _(ml, ml.current));
  }
  function Ws() {
    ((Kt = ni.current), A(ml), A(ni));
  }
  var nt = f(null),
    bt = null;
  function oa(e) {
    var t = e.alternate;
    (_(Ne, Ne.current & 1),
      _(nt, e),
      bt === null &&
        (t === null || ml.current !== null || t.memoizedState !== null) &&
        (bt = e));
  }
  function Fs(e) {
    (_(Ne, Ne.current), _(nt, e), bt === null && (bt = e));
  }
  function eu(e) {
    e.tag === 22
      ? (_(Ne, Ne.current), _(nt, e), bt === null && (bt = e))
      : ua();
  }
  function ua() {
    (_(Ne, Ne.current), _(nt, nt.current));
  }
  function it(e) {
    (A(nt), bt === e && (bt = null), A(Ne));
  }
  var Ne = f(0);
  function ii(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || lr(a) || nr(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Bt = 0,
    X = null,
    de = null,
    Te = null,
    si = !1,
    hl = !1,
    Ba = !1,
    ci = 0,
    tn = 0,
    pl = null,
    fx = 0;
  function ye() {
    throw Error(o(321));
  }
  function $s(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!at(e[a], t[a])) return !1;
    return !0;
  }
  function Ps(e, t, a, l, i, s) {
    return (
      (Bt = s),
      (X = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (w.H = e === null || e.memoizedState === null ? qu : mc),
      (Ba = !1),
      (s = a(l, i)),
      (Ba = !1),
      hl && (s = au(t, a, l, i)),
      tu(e),
      s
    );
  }
  function tu(e) {
    w.H = nn;
    var t = de !== null && de.next !== null;
    if (((Bt = 0), (Te = de = X = null), (si = !1), (tn = 0), (pl = null), t))
      throw Error(o(300));
    e === null ||
      Ce ||
      ((e = e.dependencies), e !== null && Fn(e) && (Ce = !0));
  }
  function au(e, t, a, l) {
    X = e;
    var i = 0;
    do {
      if ((hl && (pl = null), (tn = 0), (hl = !1), 25 <= i))
        throw Error(o(301));
      if (((i += 1), (Te = de = null), e.updateQueue != null)) {
        var s = e.updateQueue;
        ((s.lastEffect = null),
          (s.events = null),
          (s.stores = null),
          s.memoCache != null && (s.memoCache.index = 0));
      }
      ((w.H = Ru), (s = t(a, l)));
    } while (hl);
    return s;
  }
  function xx() {
    var e = w.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? an(t) : t),
      (e = e.useState()[0]),
      (de !== null ? de.memoizedState : null) !== e && (X.flags |= 1024),
      t
    );
  }
  function ec() {
    var e = ci !== 0;
    return ((ci = 0), e);
  }
  function tc(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function ac(e) {
    if (si) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      si = !1;
    }
    ((Bt = 0), (Te = de = X = null), (hl = !1), (tn = ci = 0), (pl = null));
  }
  function Ye() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Te === null ? (X.memoizedState = Te = e) : (Te = Te.next = e), Te);
  }
  function we() {
    if (de === null) {
      var e = X.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = de.next;
    var t = Te === null ? X.memoizedState : Te.next;
    if (t !== null) ((Te = t), (de = e));
    else {
      if (e === null)
        throw X.alternate === null ? Error(o(467)) : Error(o(310));
      ((de = e),
        (e = {
          memoizedState: de.memoizedState,
          baseState: de.baseState,
          baseQueue: de.baseQueue,
          queue: de.queue,
          next: null,
        }),
        Te === null ? (X.memoizedState = Te = e) : (Te = Te.next = e));
    }
    return Te;
  }
  function ri() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function an(e) {
    var t = tn;
    return (
      (tn += 1),
      pl === null && (pl = []),
      (e = Zo(pl, e, t)),
      (t = X),
      (Te === null ? t.memoizedState : Te.next) === null &&
        ((t = t.alternate),
        (w.H = t === null || t.memoizedState === null ? qu : mc)),
      e
    );
  }
  function oi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return an(e);
      if (e.$$typeof === Re) return He(e);
    }
    throw Error(o(438, String(e)));
  }
  function lc(e) {
    var t = null,
      a = X.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = X.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = ri()), (X.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = Xa;
    return (t.index++, a);
  }
  function Yt(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ui(e) {
    var t = we();
    return nc(t, de, e);
  }
  function nc(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var i = e.baseQueue,
      s = l.pending;
    if (s !== null) {
      if (i !== null) {
        var c = i.next;
        ((i.next = s.next), (s.next = c));
      }
      ((t.baseQueue = i = s), (l.pending = null));
    }
    if (((s = e.baseState), i === null)) e.memoizedState = s;
    else {
      t = i.next;
      var r = (c = null),
        u = null,
        h = t,
        N = !1;
      do {
        var C = h.lane & -536870913;
        if (C !== h.lane ? ($ & C) === C : (Bt & C) === C) {
          var p = h.revertLane;
          if (p === 0)
            (u !== null &&
              (u = u.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              C === ul && (N = !0));
          else if ((Bt & p) === p) {
            ((h = h.next), p === ul && (N = !0));
            continue;
          } else
            ((C = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              u === null ? ((r = u = C), (c = s)) : (u = u.next = C),
              (X.lanes |= p),
              (xa |= p));
          ((C = h.action),
            Ba && a(s, C),
            (s = h.hasEagerState ? h.eagerState : a(s, C)));
        } else
          ((p = {
            lane: C,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            u === null ? ((r = u = p), (c = s)) : (u = u.next = p),
            (X.lanes |= C),
            (xa |= C));
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (u === null ? (c = s) : (u.next = r),
        !at(s, e.memoizedState) && ((Ce = !0), N && ((a = dl), a !== null)))
      )
        throw a;
      ((e.memoizedState = s),
        (e.baseState = c),
        (e.baseQueue = u),
        (l.lastRenderedState = s));
    }
    return (i === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function ic(e) {
    var t = we(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      i = a.pending,
      s = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var c = (i = i.next);
      do ((s = e(s, c.action)), (c = c.next));
      while (c !== i);
      (at(s, t.memoizedState) || (Ce = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (a.lastRenderedState = s));
    }
    return [s, l];
  }
  function lu(e, t, a) {
    var l = X,
      i = we(),
      s = te;
    if (s) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var c = !at((de || i).memoizedState, a);
    if (
      (c && ((i.memoizedState = a), (Ce = !0)),
      (i = i.queue),
      rc(su.bind(null, l, i, e), [e]),
      i.getSnapshot !== t || c || (Te !== null && Te.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        bl(9, { destroy: void 0 }, iu.bind(null, l, i, a, t), null),
        he === null)
      )
        throw Error(o(349));
      s || (Bt & 127) !== 0 || nu(l, t, a);
    }
    return a;
  }
  function nu(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = X.updateQueue),
      t === null
        ? ((t = ri()), (X.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function iu(e, t, a, l) {
    ((t.value = a), (t.getSnapshot = l), cu(t) && ru(e));
  }
  function su(e, t, a) {
    return a(function () {
      cu(t) && ru(e);
    });
  }
  function cu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !at(e, a);
    } catch {
      return !0;
    }
  }
  function ru(e) {
    var t = ka(e, 2);
    t !== null && Fe(t, e, 2);
  }
  function sc(e) {
    var t = Ye();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Ba)) {
        Pt(!0);
        try {
          a();
        } finally {
          Pt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ou(e, t, a, l) {
    return ((e.baseState = a), nc(e, de, typeof l == "function" ? l : Yt));
  }
  function mx(e, t, a, l, i) {
    if (xi(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var s = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          s.listeners.push(c);
        },
      };
      (w.T !== null ? a(!0) : (s.isTransition = !1),
        l(s),
        (a = t.pending),
        a === null
          ? ((s.next = t.pending = s), uu(t, s))
          : ((s.next = a.next), (t.pending = a.next = s)));
    }
  }
  function uu(e, t) {
    var a = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var s = w.T,
        c = {};
      w.T = c;
      try {
        var r = a(i, l),
          u = w.S;
        (u !== null && u(c, r), du(e, t, r));
      } catch (h) {
        cc(e, t, h);
      } finally {
        (s !== null && c.types !== null && (s.types = c.types), (w.T = s));
      }
    } else
      try {
        ((s = a(i, l)), du(e, t, s));
      } catch (h) {
        cc(e, t, h);
      }
  }
  function du(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            fu(e, t, l);
          },
          function (l) {
            return cc(e, t, l);
          },
        )
      : fu(e, t, a);
  }
  function fu(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      xu(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), uu(e, a))));
  }
  function cc(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = a), xu(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function xu(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function mu(e, t) {
    return t;
  }
  function hu(e, t) {
    if (te) {
      var a = he.formState;
      if (a !== null) {
        e: {
          var l = X;
          if (te) {
            if (pe) {
              t: {
                for (var i = pe, s = pt; i.nodeType !== 8;) {
                  if (!s) {
                    i = null;
                    break t;
                  }
                  if (((i = gt(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((s = i.data), (i = s === "F!" || s === "F" ? i : null));
              }
              if (i) {
                ((pe = gt(i.nextSibling)), (l = i.data === "F!"));
                break e;
              }
            }
            na(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = Ye()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mu,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = _u.bind(null, X, l)),
      (l.dispatch = a),
      (l = sc(!1)),
      (s = xc.bind(null, X, !1, l.queue)),
      (l = Ye()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (a = mx.bind(null, X, i, s, a)),
      (i.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function pu(e) {
    var t = we();
    return bu(t, de, e);
  }
  function bu(e, t, a) {
    if (
      ((t = nc(e, t, mu)[0]),
      (e = ui(Yt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = an(t);
      } catch (c) {
        throw c === fl ? ei : c;
      }
    else l = t;
    t = we();
    var i = t.queue,
      s = i.dispatch;
    return (
      a !== t.memoizedState &&
        ((X.flags |= 2048),
        bl(9, { destroy: void 0 }, hx.bind(null, i, a), null)),
      [l, s, e]
    );
  }
  function hx(e, t) {
    e.action = t;
  }
  function gu(e) {
    var t = we(),
      a = de;
    if (a !== null) return bu(t, a, e);
    (we(), (t = t.memoizedState), (a = we()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = e), [t, l, !1]);
  }
  function bl(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = X.updateQueue),
      t === null && ((t = ri()), (X.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function yu() {
    return we().memoizedState;
  }
  function di(e, t, a, l) {
    var i = Ye();
    ((X.flags |= e),
      (i.memoizedState = bl(
        1 | t,
        { destroy: void 0 },
        a,
        l === void 0 ? null : l,
      )));
  }
  function fi(e, t, a, l) {
    var i = we();
    l = l === void 0 ? null : l;
    var s = i.memoizedState.inst;
    de !== null && l !== null && $s(l, de.memoizedState.deps)
      ? (i.memoizedState = bl(t, s, a, l))
      : ((X.flags |= e), (i.memoizedState = bl(1 | t, s, a, l)));
  }
  function vu(e, t) {
    di(8390656, 8, e, t);
  }
  function rc(e, t) {
    fi(2048, 8, e, t);
  }
  function px(e) {
    X.flags |= 4;
    var t = X.updateQueue;
    if (t === null) ((t = ri()), (X.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function ju(e) {
    var t = we().memoizedState;
    return (
      px({ ref: t, nextImpl: e }),
      function () {
        if ((ie & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Nu(e, t) {
    return fi(4, 2, e, t);
  }
  function wu(e, t) {
    return fi(4, 4, e, t);
  }
  function Su(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Tu(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), fi(4, 4, Su.bind(null, t, e), a));
  }
  function oc() {}
  function Cu(e, t) {
    var a = we();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && $s(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function Au(e, t) {
    var a = we();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && $s(t, l[1])) return l[0];
    if (((l = e()), Ba)) {
      Pt(!0);
      try {
        e();
      } finally {
        Pt(!1);
      }
    }
    return ((a.memoizedState = [l, t]), l);
  }
  function uc(e, t, a) {
    return a === void 0 || ((Bt & 1073741824) !== 0 && ($ & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = Md()), (X.lanes |= e), (xa |= e), a);
  }
  function Mu(e, t, a, l) {
    return at(a, t)
      ? a
      : ml.current !== null
        ? ((e = uc(e, a, l)), at(e, t) || (Ce = !0), e)
        : (Bt & 42) === 0 || ((Bt & 1073741824) !== 0 && ($ & 261930) === 0)
          ? ((Ce = !0), (e.memoizedState = a))
          : ((e = Md()), (X.lanes |= e), (xa |= e), t);
  }
  function Eu(e, t, a, l, i) {
    var s = O.p;
    O.p = s !== 0 && 8 > s ? s : 8;
    var c = w.T,
      r = {};
    ((w.T = r), xc(e, !1, t, a));
    try {
      var u = i(),
        h = w.S;
      if (
        (h !== null && h(r, u),
        u !== null && typeof u == "object" && typeof u.then == "function")
      ) {
        var N = dx(u, l);
        ln(e, t, N, rt(e));
      } else ln(e, t, l, rt(e));
    } catch (C) {
      ln(e, t, { then: function () {}, status: "rejected", reason: C }, rt());
    } finally {
      ((O.p = s),
        c !== null && r.types !== null && (c.types = r.types),
        (w.T = c));
    }
  }
  function bx() {}
  function dc(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var i = zu(e).queue;
    Eu(
      e,
      i,
      t,
      G,
      a === null
        ? bx
        : function () {
            return (ku(e), a(l));
          },
    );
  }
  function zu(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: G,
      baseState: G,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: G,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function ku(e) {
    var t = zu(e);
    (t.next === null && (t = e.alternate.memoizedState),
      ln(e, t.next.queue, {}, rt()));
  }
  function fc() {
    return He(jn);
  }
  function Du() {
    return we().memoizedState;
  }
  function Ou() {
    return we().memoizedState;
  }
  function gx(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = rt();
          e = ca(a);
          var l = ra(t, e, a);
          (l !== null && (Fe(l, t, a), $l(l, t, a)),
            (t = { cache: Ys() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function yx(e, t, a) {
    var l = rt();
    ((a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      xi(e)
        ? Hu(t, a)
        : ((a = zs(e, t, a, l)), a !== null && (Fe(a, e, l), Uu(a, t, l))));
  }
  function _u(e, t, a) {
    var l = rt();
    ln(e, t, a, l);
  }
  function ln(e, t, a, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (xi(e)) Hu(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var c = t.lastRenderedState,
            r = s(c, a);
          if (((i.hasEagerState = !0), (i.eagerState = r), at(r, c)))
            return (In(e, t, i, 0), he === null && Zn(), !1);
        } catch {
        } finally {
        }
      if (((a = zs(e, t, i, l)), a !== null))
        return (Fe(a, e, l), Uu(a, t, l), !0);
    }
    return !1;
  }
  function xc(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Xc(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      xi(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = zs(e, a, l, 2)), t !== null && Fe(t, e, 2));
  }
  function xi(e) {
    var t = e.alternate;
    return e === X || (t !== null && t === X);
  }
  function Hu(e, t) {
    hl = si = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function Uu(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Br(e, a));
    }
  }
  var nn = {
    readContext: He,
    use: oi,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useLayoutEffect: ye,
    useInsertionEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useSyncExternalStore: ye,
    useId: ye,
    useHostTransitionStatus: ye,
    useFormState: ye,
    useActionState: ye,
    useOptimistic: ye,
    useMemoCache: ye,
    useCacheRefresh: ye,
  };
  nn.useEffectEvent = ye;
  var qu = {
      readContext: He,
      use: oi,
      useCallback: function (e, t) {
        return ((Ye().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: He,
      useEffect: vu,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          di(4194308, 4, Su.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return di(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        di(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = Ye();
        t = t === void 0 ? null : t;
        var l = e();
        if (Ba) {
          Pt(!0);
          try {
            e();
          } finally {
            Pt(!1);
          }
        }
        return ((a.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, a) {
        var l = Ye();
        if (a !== void 0) {
          var i = a(t);
          if (Ba) {
            Pt(!0);
            try {
              a(t);
            } finally {
              Pt(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = yx.bind(null, X, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ye();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = sc(e);
        var t = e.queue,
          a = _u.bind(null, X, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: oc,
      useDeferredValue: function (e, t) {
        var a = Ye();
        return uc(a, e, t);
      },
      useTransition: function () {
        var e = sc(!1);
        return (
          (e = Eu.bind(null, X, e.queue, !0, !1)),
          (Ye().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var l = X,
          i = Ye();
        if (te) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = t()), he === null)) throw Error(o(349));
          ($ & 127) !== 0 || nu(l, t, a);
        }
        i.memoizedState = a;
        var s = { value: a, getSnapshot: t };
        return (
          (i.queue = s),
          vu(su.bind(null, l, s, e), [e]),
          (l.flags |= 2048),
          bl(9, { destroy: void 0 }, iu.bind(null, l, s, a, t), null),
          a
        );
      },
      useId: function () {
        var e = Ye(),
          t = he.identifierPrefix;
        if (te) {
          var a = Et,
            l = Mt;
          ((a = (l & ~(1 << (32 - tt(l) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = ci++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = fx++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: fc,
      useFormState: hu,
      useActionState: hu,
      useOptimistic: function (e) {
        var t = Ye();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = xc.bind(null, X, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: lc,
      useCacheRefresh: function () {
        return (Ye().memoizedState = gx.bind(null, X));
      },
      useEffectEvent: function (e) {
        var t = Ye(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((ie & 2) !== 0) throw Error(o(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    mc = {
      readContext: He,
      use: oi,
      useCallback: Cu,
      useContext: He,
      useEffect: rc,
      useImperativeHandle: Tu,
      useInsertionEffect: Nu,
      useLayoutEffect: wu,
      useMemo: Au,
      useReducer: ui,
      useRef: yu,
      useState: function () {
        return ui(Yt);
      },
      useDebugValue: oc,
      useDeferredValue: function (e, t) {
        var a = we();
        return Mu(a, de.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ui(Yt)[0],
          t = we().memoizedState;
        return [typeof e == "boolean" ? e : an(e), t];
      },
      useSyncExternalStore: lu,
      useId: Du,
      useHostTransitionStatus: fc,
      useFormState: pu,
      useActionState: pu,
      useOptimistic: function (e, t) {
        var a = we();
        return ou(a, de, e, t);
      },
      useMemoCache: lc,
      useCacheRefresh: Ou,
    };
  mc.useEffectEvent = ju;
  var Ru = {
    readContext: He,
    use: oi,
    useCallback: Cu,
    useContext: He,
    useEffect: rc,
    useImperativeHandle: Tu,
    useInsertionEffect: Nu,
    useLayoutEffect: wu,
    useMemo: Au,
    useReducer: ic,
    useRef: yu,
    useState: function () {
      return ic(Yt);
    },
    useDebugValue: oc,
    useDeferredValue: function (e, t) {
      var a = we();
      return de === null ? uc(a, e, t) : Mu(a, de.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ic(Yt)[0],
        t = we().memoizedState;
      return [typeof e == "boolean" ? e : an(e), t];
    },
    useSyncExternalStore: lu,
    useId: Du,
    useHostTransitionStatus: fc,
    useFormState: gu,
    useActionState: gu,
    useOptimistic: function (e, t) {
      var a = we();
      return de !== null
        ? ou(a, de, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: lc,
    useCacheRefresh: Ou,
  };
  Ru.useEffectEvent = ju;
  function hc(e, t, a, l) {
    ((t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : U({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var pc = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = rt(),
        i = ca(l);
      ((i.payload = t),
        a != null && (i.callback = a),
        (t = ra(e, i, l)),
        t !== null && (Fe(t, e, l), $l(t, e, l)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = rt(),
        i = ca(l);
      ((i.tag = 1),
        (i.payload = t),
        a != null && (i.callback = a),
        (t = ra(e, i, l)),
        t !== null && (Fe(t, e, l), $l(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = rt(),
        l = ca(a);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = ra(e, l, a)),
        t !== null && (Fe(t, e, a), $l(t, e, a)));
    },
  };
  function Qu(e, t, a, l, i, s, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, s, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Vl(a, l) || !Vl(i, s)
          : !0
    );
  }
  function Bu(e, t, a, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && pc.enqueueReplaceState(t, t.state, null));
  }
  function Ya(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = U({}, a));
      for (var i in e) a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function Yu(e) {
    Xn(e);
  }
  function Gu(e) {
    console.error(e);
  }
  function Lu(e) {
    Xn(e);
  }
  function mi(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Vu(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function bc(e, t, a) {
    return (
      (a = ca(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        mi(e, t);
      }),
      a
    );
  }
  function Xu(e) {
    return ((e = ca(e)), (e.tag = 3), e);
  }
  function Zu(e, t, a, l) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var s = l.value;
      ((e.payload = function () {
        return i(s);
      }),
        (e.callback = function () {
          Vu(t, a, l);
        }));
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (e.callback = function () {
        (Vu(t, a, l),
          typeof i != "function" &&
            (ma === null ? (ma = new Set([this])) : ma.add(this)));
        var r = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function vx(e, t, a, l, i) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ol(t, a, i, !0),
        (a = nt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              bt === null ? Ci() : a.alternate === null && ve === 0 && (ve = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = i),
              l === ti
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                  Gc(e, l, i)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === ti
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  Gc(e, l, i)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (Gc(e, l, i), Ci(), !1);
    }
    if (te)
      return (
        (t = nt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== Us && ((e = Error(o(422), { cause: l })), Il(xt(e, a))))
          : (l !== Us && ((t = Error(o(423), { cause: l })), Il(xt(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = xt(l, a)),
            (i = bc(e.stateNode, l, i)),
            Is(e, i),
            ve !== 4 && (ve = 2)),
        !1
      );
    var s = Error(o(520), { cause: l });
    if (
      ((s = xt(s, a)),
      xn === null ? (xn = [s]) : xn.push(s),
      ve !== 4 && (ve = 2),
      t === null)
    )
      return !0;
    ((l = xt(l, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = i & -i),
            (a.lanes |= e),
            (e = bc(a.stateNode, l, e)),
            Is(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (s = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (s !== null &&
                  typeof s.componentDidCatch == "function" &&
                  (ma === null || !ma.has(s)))))
          )
            return (
              (a.flags |= 65536),
              (i &= -i),
              (a.lanes |= i),
              (i = Xu(i)),
              Zu(i, e, a, l),
              Is(a, i),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var gc = Error(o(461)),
    Ce = !1;
  function Ue(e, t, a, l) {
    t.child = e === null ? Wo(t, null, a, l) : Qa(t, e.child, a, l);
  }
  function Iu(e, t, a, l, i) {
    a = a.render;
    var s = t.ref;
    if ("ref" in l) {
      var c = {};
      for (var r in l) r !== "ref" && (c[r] = l[r]);
    } else c = l;
    return (
      Ha(t),
      (l = Ps(e, t, a, c, s, i)),
      (r = ec()),
      e !== null && !Ce
        ? (tc(e, t, i), Gt(e, t, i))
        : (te && r && _s(t), (t.flags |= 1), Ue(e, t, l, i), t.child)
    );
  }
  function Ku(e, t, a, l, i) {
    if (e === null) {
      var s = a.type;
      return typeof s == "function" &&
        !ks(s) &&
        s.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = s), Ju(e, t, s, l, i))
        : ((e = Jn(a.type, null, l, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !Cc(e, i))) {
      var c = s.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Vl), a(c, l) && e.ref === t.ref)
      )
        return Gt(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Ut(s, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ju(e, t, a, l, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Vl(s, l) && e.ref === t.ref)
        if (((Ce = !1), (t.pendingProps = l = s), Cc(e, i)))
          (e.flags & 131072) !== 0 && (Ce = !0);
        else return ((t.lanes = e.lanes), Gt(e, t, i));
    }
    return yc(e, t, a, l, i);
  }
  function Wu(e, t, a, l) {
    var i = l.children,
      s = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((s = s !== null ? s.baseLanes | a : a), e !== null)) {
          for (l = t.child = e.child, i = 0; l !== null;)
            ((i = i | l.lanes | l.childLanes), (l = l.sibling));
          l = i & ~s;
        } else ((l = 0), (t.child = null));
        return Fu(e, t, s, a, l);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Pn(t, s !== null ? s.cachePool : null),
          s !== null ? Po(t, s) : Js(),
          eu(t));
      else
        return (
          (l = t.lanes = 536870912),
          Fu(e, t, s !== null ? s.baseLanes | a : a, a, l)
        );
    } else
      s !== null
        ? (Pn(t, s.cachePool), Po(t, s), ua(), (t.memoizedState = null))
        : (e !== null && Pn(t, null), Js(), ua());
    return (Ue(e, t, i, a), t.child);
  }
  function sn(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Fu(e, t, a, l, i) {
    var s = Ls();
    return (
      (s = s === null ? null : { parent: Se._currentValue, pool: s }),
      (t.memoizedState = { baseLanes: a, cachePool: s }),
      e !== null && Pn(t, null),
      Js(),
      eu(t),
      e !== null && ol(e, t, l, !0),
      (t.childLanes = i),
      null
    );
  }
  function hi(e, t) {
    return (
      (t = bi({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function $u(e, t, a) {
    return (
      Qa(t, e.child, null, a),
      (e = hi(t, t.pendingProps)),
      (e.flags |= 2),
      it(t),
      (t.memoizedState = null),
      e
    );
  }
  function jx(e, t, a) {
    var l = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (te) {
        if (l.mode === "hidden")
          return ((e = hi(t, l)), (t.lanes = 536870912), sn(null, e));
        if (
          (Fs(t),
          (e = pe)
            ? ((e = df(e, pt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: aa !== null ? { id: Mt, overflow: Et } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ho(e)),
                (a.return = t),
                (t.child = a),
                (_e = t),
                (pe = null)))
            : (e = null),
          e === null)
        )
          throw na(t);
        return ((t.lanes = 536870912), null);
      }
      return hi(t, l);
    }
    var s = e.memoizedState;
    if (s !== null) {
      var c = s.dehydrated;
      if ((Fs(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = $u(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (Ce || ol(e, t, a, !1), (i = (a & e.childLanes) !== 0), Ce || i)
      ) {
        if (
          ((l = he),
          l !== null && ((c = Yr(l, a)), c !== 0 && c !== s.retryLane))
        )
          throw ((s.retryLane = c), ka(e, c), Fe(l, e, c), gc);
        (Ci(), (t = $u(e, t, a)));
      } else
        ((e = s.treeContext),
          (pe = gt(c.nextSibling)),
          (_e = t),
          (te = !0),
          (la = null),
          (pt = !1),
          e !== null && Ro(t, e),
          (t = hi(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Ut(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function pi(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function yc(e, t, a, l, i) {
    return (
      Ha(t),
      (a = Ps(e, t, a, l, void 0, i)),
      (l = ec()),
      e !== null && !Ce
        ? (tc(e, t, i), Gt(e, t, i))
        : (te && l && _s(t), (t.flags |= 1), Ue(e, t, a, i), t.child)
    );
  }
  function Pu(e, t, a, l, i, s) {
    return (
      Ha(t),
      (t.updateQueue = null),
      (a = au(t, l, a, i)),
      tu(e),
      (l = ec()),
      e !== null && !Ce
        ? (tc(e, t, s), Gt(e, t, s))
        : (te && l && _s(t), (t.flags |= 1), Ue(e, t, a, s), t.child)
    );
  }
  function ed(e, t, a, l, i) {
    if ((Ha(t), t.stateNode === null)) {
      var s = il,
        c = a.contextType;
      (typeof c == "object" && c !== null && (s = He(c)),
        (s = new a(l, s)),
        (t.memoizedState =
          s.state !== null && s.state !== void 0 ? s.state : null),
        (s.updater = pc),
        (t.stateNode = s),
        (s._reactInternals = t),
        (s = t.stateNode),
        (s.props = l),
        (s.state = t.memoizedState),
        (s.refs = {}),
        Xs(t),
        (c = a.contextType),
        (s.context = typeof c == "object" && c !== null ? He(c) : il),
        (s.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (hc(t, a, c, l), (s.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((c = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          c !== s.state && pc.enqueueReplaceState(s, s.state, null),
          en(t, l, s, i),
          Pl(),
          (s.state = t.memoizedState)),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      s = t.stateNode;
      var r = t.memoizedProps,
        u = Ya(a, r);
      s.props = u;
      var h = s.context,
        N = a.contextType;
      ((c = il), typeof N == "object" && N !== null && (c = He(N)));
      var C = a.getDerivedStateFromProps;
      ((N =
        typeof C == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function"),
        (r = t.pendingProps !== r),
        N ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((r || h !== c) && Bu(t, s, l, c)),
        (sa = !1));
      var p = t.memoizedState;
      ((s.state = p),
        en(t, l, s, i),
        Pl(),
        (h = t.memoizedState),
        r || p !== h || sa
          ? (typeof C == "function" && (hc(t, a, C, l), (h = t.memoizedState)),
            (u = sa || Qu(t, a, u, l, p, h, c))
              ? (N ||
                  (typeof s.UNSAFE_componentWillMount != "function" &&
                    typeof s.componentWillMount != "function") ||
                  (typeof s.componentWillMount == "function" &&
                    s.componentWillMount(),
                  typeof s.UNSAFE_componentWillMount == "function" &&
                    s.UNSAFE_componentWillMount()),
                typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof s.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = h)),
            (s.props = l),
            (s.state = h),
            (s.context = c),
            (l = u))
          : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((s = t.stateNode),
        Zs(e, t),
        (c = t.memoizedProps),
        (N = Ya(a, c)),
        (s.props = N),
        (C = t.pendingProps),
        (p = s.context),
        (h = a.contextType),
        (u = il),
        typeof h == "object" && h !== null && (u = He(h)),
        (r = a.getDerivedStateFromProps),
        (h =
          typeof r == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function") ||
          (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
            typeof s.componentWillReceiveProps != "function") ||
          ((c !== C || p !== u) && Bu(t, s, l, u)),
        (sa = !1),
        (p = t.memoizedState),
        (s.state = p),
        en(t, l, s, i),
        Pl());
      var g = t.memoizedState;
      c !== C ||
      p !== g ||
      sa ||
      (e !== null && e.dependencies !== null && Fn(e.dependencies))
        ? (typeof r == "function" && (hc(t, a, r, l), (g = t.memoizedState)),
          (N =
            sa ||
            Qu(t, a, N, l, p, g, u) ||
            (e !== null && e.dependencies !== null && Fn(e.dependencies)))
            ? (h ||
                (typeof s.UNSAFE_componentWillUpdate != "function" &&
                  typeof s.componentWillUpdate != "function") ||
                (typeof s.componentWillUpdate == "function" &&
                  s.componentWillUpdate(l, g, u),
                typeof s.UNSAFE_componentWillUpdate == "function" &&
                  s.UNSAFE_componentWillUpdate(l, g, u)),
              typeof s.componentDidUpdate == "function" && (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof s.componentDidUpdate != "function" ||
                (c === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                (c === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = g)),
          (s.props = l),
          (s.state = g),
          (s.context = u),
          (l = N))
        : (typeof s.componentDidUpdate != "function" ||
            (c === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 4),
          typeof s.getSnapshotBeforeUpdate != "function" ||
            (c === e.memoizedProps && p === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (s = l),
      pi(e, t),
      (l = (t.flags & 128) !== 0),
      s || l
        ? ((s = t.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : s.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Qa(t, e.child, null, i)),
              (t.child = Qa(t, null, a, i)))
            : Ue(e, t, a, i),
          (t.memoizedState = s.state),
          (e = t.child))
        : (e = Gt(e, t, i)),
      e
    );
  }
  function td(e, t, a, l) {
    return (Oa(), (t.flags |= 256), Ue(e, t, a, l), t.child);
  }
  var vc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function jc(e) {
    return { baseLanes: e, cachePool: Vo() };
  }
  function Nc(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= ct), e);
  }
  function ad(e, t, a) {
    var l = t.pendingProps,
      i = !1,
      s = (t.flags & 128) !== 0,
      c;
    if (
      ((c = s) ||
        (c =
          e !== null && e.memoizedState === null ? !1 : (Ne.current & 2) !== 0),
      c && ((i = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (te) {
        if (
          (i ? oa(t) : ua(),
          (e = pe)
            ? ((e = df(e, pt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: aa !== null ? { id: Mt, overflow: Et } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Ho(e)),
                (a.return = t),
                (t.child = a),
                (_e = t),
                (pe = null)))
            : (e = null),
          e === null)
        )
          throw na(t);
        return (nr(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var r = l.children;
      return (
        (l = l.fallback),
        i
          ? (ua(),
            (i = t.mode),
            (r = bi({ mode: "hidden", children: r }, i)),
            (l = Da(l, i, a, null)),
            (r.return = t),
            (l.return = t),
            (r.sibling = l),
            (t.child = r),
            (l = t.child),
            (l.memoizedState = jc(a)),
            (l.childLanes = Nc(e, c, a)),
            (t.memoizedState = vc),
            sn(null, l))
          : (oa(t), wc(t, r))
      );
    }
    var u = e.memoizedState;
    if (u !== null && ((r = u.dehydrated), r !== null)) {
      if (s)
        t.flags & 256
          ? (oa(t), (t.flags &= -257), (t = Sc(e, t, a)))
          : t.memoizedState !== null
            ? (ua(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ua(),
              (r = l.fallback),
              (i = t.mode),
              (l = bi({ mode: "visible", children: l.children }, i)),
              (r = Da(r, i, a, null)),
              (r.flags |= 2),
              (l.return = t),
              (r.return = t),
              (l.sibling = r),
              (t.child = l),
              Qa(t, e.child, null, a),
              (l = t.child),
              (l.memoizedState = jc(a)),
              (l.childLanes = Nc(e, c, a)),
              (t.memoizedState = vc),
              (t = sn(null, l)));
      else if ((oa(t), nr(r))) {
        if (((c = r.nextSibling && r.nextSibling.dataset), c)) var h = c.dgst;
        ((c = h),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = c),
          Il({ value: l, source: null, stack: null }),
          (t = Sc(e, t, a)));
      } else if (
        (Ce || ol(e, t, a, !1), (c = (a & e.childLanes) !== 0), Ce || c)
      ) {
        if (
          ((c = he),
          c !== null && ((l = Yr(c, a)), l !== 0 && l !== u.retryLane))
        )
          throw ((u.retryLane = l), ka(e, l), Fe(c, e, l), gc);
        (lr(r) || Ci(), (t = Sc(e, t, a)));
      } else
        lr(r)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = u.treeContext),
            (pe = gt(r.nextSibling)),
            (_e = t),
            (te = !0),
            (la = null),
            (pt = !1),
            e !== null && Ro(t, e),
            (t = wc(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (ua(),
        (r = l.fallback),
        (i = t.mode),
        (u = e.child),
        (h = u.sibling),
        (l = Ut(u, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = u.subtreeFlags & 65011712),
        h !== null ? (r = Ut(h, r)) : ((r = Da(r, i, a, null)), (r.flags |= 2)),
        (r.return = t),
        (l.return = t),
        (l.sibling = r),
        (t.child = l),
        sn(null, l),
        (l = t.child),
        (r = e.child.memoizedState),
        r === null
          ? (r = jc(a))
          : ((i = r.cachePool),
            i !== null
              ? ((u = Se._currentValue),
                (i = i.parent !== u ? { parent: u, pool: u } : i))
              : (i = Vo()),
            (r = { baseLanes: r.baseLanes | a, cachePool: i })),
        (l.memoizedState = r),
        (l.childLanes = Nc(e, c, a)),
        (t.memoizedState = vc),
        sn(e.child, l))
      : (oa(t),
        (a = e.child),
        (e = a.sibling),
        (a = Ut(a, { mode: "visible", children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [e]), (t.flags |= 16)) : c.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function wc(e, t) {
    return (
      (t = bi({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function bi(e, t) {
    return ((e = lt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Sc(e, t, a) {
    return (
      Qa(t, e.child, null, a),
      (e = wc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function ld(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Qs(e.return, t, a));
  }
  function Tc(e, t, a, l, i, s) {
    var c = e.memoizedState;
    c === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: i,
          treeForkCount: s,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = l),
        (c.tail = a),
        (c.tailMode = i),
        (c.treeForkCount = s));
  }
  function nd(e, t, a) {
    var l = t.pendingProps,
      i = l.revealOrder,
      s = l.tail;
    l = l.children;
    var c = Ne.current,
      r = (c & 2) !== 0;
    if (
      (r ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      _(Ne, c),
      Ue(e, t, l, a),
      (l = te ? Zl : 0),
      !r && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && ld(e, a, t);
        else if (e.tag === 19) ld(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (i) {
      case "forwards":
        for (a = t.child, i = null; a !== null;)
          ((e = a.alternate),
            e !== null && ii(e) === null && (i = a),
            (a = a.sibling));
        ((a = i),
          a === null
            ? ((i = t.child), (t.child = null))
            : ((i = a.sibling), (a.sibling = null)),
          Tc(t, !1, i, a, s, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, i = t.child, t.child = null; i !== null;) {
          if (((e = i.alternate), e !== null && ii(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = a), (a = i), (i = e));
        }
        Tc(t, !0, a, null, s, l);
        break;
      case "together":
        Tc(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (xa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ol(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Ut(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (a = a.sibling = Ut(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Cc(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Fn(e)));
  }
  function Nx(e, t, a) {
    switch (t.tag) {
      case 3:
        (Be(t, t.stateNode.containerInfo),
          ia(t, Se, e.memoizedState.cache),
          Oa());
        break;
      case 27:
      case 5:
        kl(t);
        break;
      case 4:
        Be(t, t.stateNode.containerInfo);
        break;
      case 10:
        ia(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Fs(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (oa(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? ad(e, t, a)
              : (oa(t), (e = Gt(e, t, a)), e !== null ? e.sibling : null);
        oa(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (a & t.childLanes) !== 0),
          l || (ol(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return nd(e, t, a);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          _(Ne, Ne.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Wu(e, t, a, t.pendingProps));
      case 24:
        ia(t, Se, e.memoizedState.cache);
    }
    return Gt(e, t, a);
  }
  function id(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ce = !0;
      else {
        if (!Cc(e, a) && (t.flags & 128) === 0) return ((Ce = !1), Nx(e, t, a));
        Ce = (e.flags & 131072) !== 0;
      }
    else ((Ce = !1), te && (t.flags & 1048576) !== 0 && qo(t, Zl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = qa(t.elementType)), (t.type = e), typeof e == "function"))
            ks(e)
              ? ((l = Ya(e, l)), (t.tag = 1), (t = ed(null, t, e, l, a)))
              : ((t.tag = 0), (t = yc(null, t, e, l, a)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === ot) {
                ((t.tag = 11), (t = Iu(null, t, e, l, a)));
                break e;
              } else if (i === ee) {
                ((t.tag = 14), (t = Ku(null, t, e, l, a)));
                break e;
              }
            }
            throw ((t = Dt(e) || e), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return yc(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((l = t.type), (i = Ya(l, t.pendingProps)), ed(e, t, l, i, a));
      case 3:
        e: {
          if ((Be(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = t.pendingProps;
          var s = t.memoizedState;
          ((i = s.element), Zs(e, t), en(t, l, null, a));
          var c = t.memoizedState;
          if (
            ((l = c.cache),
            ia(t, Se, l),
            l !== s.cache && Bs(t, [Se], a, !0),
            Pl(),
            (l = c.element),
            s.isDehydrated)
          )
            if (
              ((s = { element: l, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              t = td(e, t, l, a);
              break e;
            } else if (l !== i) {
              ((i = xt(Error(o(424)), t)), Il(i), (t = td(e, t, l, a)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                pe = gt(e.firstChild),
                  _e = t,
                  te = !0,
                  la = null,
                  pt = !0,
                  a = Wo(t, null, l, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Oa(), l === i)) {
              t = Gt(e, t, a);
              break e;
            }
            Ue(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          pi(e, t),
          e === null
            ? (a = bf(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : te ||
                ((a = t.type),
                (e = t.pendingProps),
                (l = Oi(K.current).createElement(a)),
                (l[Oe] = t),
                (l[Xe] = e),
                qe(l, a, e),
                ze(l),
                (t.stateNode = l))
            : (t.memoizedState = bf(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          kl(t),
          e === null &&
            te &&
            ((l = t.stateNode = mf(t.type, t.pendingProps, K.current)),
            (_e = t),
            (pt = !0),
            (i = pe),
            ga(t.type) ? ((ir = i), (pe = gt(l.firstChild))) : (pe = i)),
          Ue(e, t, t.pendingProps.children, a),
          pi(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            te &&
            ((i = l = pe) &&
              ((l = $x(l, t.type, t.pendingProps, pt)),
              l !== null
                ? ((t.stateNode = l),
                  (_e = t),
                  (pe = gt(l.firstChild)),
                  (pt = !1),
                  (i = !0))
                : (i = !1)),
            i || na(t)),
          kl(t),
          (i = t.type),
          (s = t.pendingProps),
          (c = e !== null ? e.memoizedProps : null),
          (l = s.children),
          er(i, s) ? (l = null) : c !== null && er(i, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = Ps(e, t, xx, null, null, a)), (jn._currentValue = i)),
          pi(e, t),
          Ue(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            te &&
            ((e = a = pe) &&
              ((a = Px(a, t.pendingProps, pt)),
              a !== null
                ? ((t.stateNode = a), (_e = t), (pe = null), (e = !0))
                : (e = !1)),
            e || na(t)),
          null
        );
      case 13:
        return ad(e, t, a);
      case 4:
        return (
          Be(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Qa(t, null, l, a)) : Ue(e, t, l, a),
          t.child
        );
      case 11:
        return Iu(e, t, t.type, t.pendingProps, a);
      case 7:
        return (Ue(e, t, t.pendingProps, a), t.child);
      case 8:
        return (Ue(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Ue(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          ia(t, t.type, l.value),
          Ue(e, t, l.children, a),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          Ha(t),
          (i = He(i)),
          (l = l(i)),
          (t.flags |= 1),
          Ue(e, t, l, a),
          t.child
        );
      case 14:
        return Ku(e, t, t.type, t.pendingProps, a);
      case 15:
        return Ju(e, t, t.type, t.pendingProps, a);
      case 19:
        return nd(e, t, a);
      case 31:
        return jx(e, t, a);
      case 22:
        return Wu(e, t, a, t.pendingProps);
      case 24:
        return (
          Ha(t),
          (l = He(Se)),
          e === null
            ? ((i = Ls()),
              i === null &&
                ((i = he),
                (s = Ys()),
                (i.pooledCache = s),
                s.refCount++,
                s !== null && (i.pooledCacheLanes |= a),
                (i = s)),
              (t.memoizedState = { parent: l, cache: i }),
              Xs(t),
              ia(t, Se, i))
            : ((e.lanes & a) !== 0 && (Zs(e, t), en(t, null, null, a), Pl()),
              (i = e.memoizedState),
              (s = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  ia(t, Se, l))
                : ((l = s.cache),
                  ia(t, Se, l),
                  l !== i.cache && Bs(t, [Se], a, !0))),
          Ue(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Lt(e) {
    e.flags |= 4;
  }
  function Ac(e, t, a, l, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Dd()) e.flags |= 8192;
        else throw ((Ra = ti), Vs);
    } else e.flags &= -16777217;
  }
  function sd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Nf(t)))
      if (Dd()) e.flags |= 8192;
      else throw ((Ra = ti), Vs);
  }
  function gi(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Rr() : 536870912), (e.lanes |= t), (jl |= t)));
  }
  function cn(e, t) {
    if (!te)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null;)
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null;)
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null;)
        ((a |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null;)
        ((a |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = a), t);
  }
  function wx(e, t, a) {
    var l = t.pendingProps;
    switch ((Hs(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (be(t), null);
      case 1:
        return (be(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Qt(Se),
          je(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (rl(t)
              ? Lt(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), qs())),
          be(t),
          null
        );
      case 26:
        var i = t.type,
          s = t.memoizedState;
        return (
          e === null
            ? (Lt(t),
              s !== null ? (be(t), sd(t, s)) : (be(t), Ac(t, i, null, l, a)))
            : s
              ? s !== e.memoizedState
                ? (Lt(t), be(t), sd(t, s))
                : (be(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && Lt(t),
                be(t),
                Ac(t, i, e, l, a)),
          null
        );
      case 27:
        if (
          (En(t),
          (a = K.current),
          (i = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && Lt(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (be(t), null);
          }
          ((e = R.current),
            rl(t) ? Qo(t) : ((e = mf(i, l, a)), (t.stateNode = e), Lt(t)));
        }
        return (be(t), null);
      case 5:
        if ((En(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Lt(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (be(t), null);
          }
          if (((s = R.current), rl(t))) Qo(t);
          else {
            var c = Oi(K.current);
            switch (s) {
              case 1:
                s = c.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                s = c.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    s = c.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    s = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i,
                    );
                    break;
                  case "script":
                    ((s = c.createElement("div")),
                      (s.innerHTML = "<script><\/script>"),
                      (s = s.removeChild(s.firstChild)));
                    break;
                  case "select":
                    ((s =
                      typeof l.is == "string"
                        ? c.createElement("select", { is: l.is })
                        : c.createElement("select")),
                      l.multiple
                        ? (s.multiple = !0)
                        : l.size && (s.size = l.size));
                    break;
                  default:
                    s =
                      typeof l.is == "string"
                        ? c.createElement(i, { is: l.is })
                        : c.createElement(i);
                }
            }
            ((s[Oe] = t), (s[Xe] = l));
            e: for (c = t.child; c !== null;) {
              if (c.tag === 5 || c.tag === 6) s.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null;) {
                if (c.return === null || c.return === t) break e;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = s;
            e: switch ((qe(s, i, l), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Lt(t);
          }
        }
        return (
          be(t),
          Ac(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Lt(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = K.current), rl(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (l = null),
              (i = _e),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            ((e[Oe] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                af(e.nodeValue, a)
              )),
              e || na(t, !0));
          } else
            ((e = Oi(e).createTextNode(l)), (e[Oe] = t), (t.stateNode = e));
        }
        return (be(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = rl(t)), a !== null)) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(557));
              e[Oe] = t;
            } else
              (Oa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (be(t), (e = !1));
          } else
            ((a = qs()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (it(t), t) : (it(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (be(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = rl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(o(317));
              i[Oe] = t;
            } else
              (Oa(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (be(t), (i = !1));
          } else
            ((i = qs()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (it(t), t) : (it(t), null);
        }
        return (
          it(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = l !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((l = t.child),
                (i = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (i = l.alternate.memoizedState.cachePool.pool),
                (s = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (s = l.memoizedState.cachePool.pool),
                s !== i && (l.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              gi(t, t.updateQueue),
              be(t),
              null)
        );
      case 4:
        return (je(), e === null && Jc(t.stateNode.containerInfo), be(t), null);
      case 10:
        return (Qt(t.type), be(t), null);
      case 19:
        if ((A(Ne), (l = t.memoizedState), l === null)) return (be(t), null);
        if (((i = (t.flags & 128) !== 0), (s = l.rendering), s === null))
          if (i) cn(l, !1);
          else {
            if (ve !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null;) {
                if (((s = ii(e)), s !== null)) {
                  for (
                    t.flags |= 128,
                      cn(l, !1),
                      e = s.updateQueue,
                      t.updateQueue = e,
                      gi(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (_o(a, e), (a = a.sibling));
                  return (
                    _(Ne, (Ne.current & 1) | 2),
                    te && qt(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              Pe() > wi &&
              ((t.flags |= 128), (i = !0), cn(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = ii(s)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                gi(t, e),
                cn(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !s.alternate &&
                  !te)
              )
                return (be(t), null);
            } else
              2 * Pe() - l.renderingStartTime > wi &&
                a !== 536870912 &&
                ((t.flags |= 128), (i = !0), cn(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : ((e = l.last),
              e !== null ? (e.sibling = s) : (t.child = s),
              (l.last = s));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = Pe()),
            (e.sibling = null),
            (a = Ne.current),
            _(Ne, i ? (a & 1) | 2 : a & 1),
            te && qt(t, l.treeForkCount),
            e)
          : (be(t), null);
      case 22:
      case 23:
        return (
          it(t),
          Ws(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : be(t),
          (a = t.updateQueue),
          a !== null && gi(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && A(Ua),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Qt(Se),
          be(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Sx(e, t) {
    switch ((Hs(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Qt(Se),
          je(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (En(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((it(t), t.alternate === null)) throw Error(o(340));
          Oa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (it(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Oa();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (A(Ne), null);
      case 4:
        return (je(), null);
      case 10:
        return (Qt(t.type), null);
      case 22:
      case 23:
        return (
          it(t),
          Ws(),
          e !== null && A(Ua),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Qt(Se), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cd(e, t) {
    switch ((Hs(t), t.tag)) {
      case 3:
        (Qt(Se), je());
        break;
      case 26:
      case 27:
      case 5:
        En(t);
        break;
      case 4:
        je();
        break;
      case 31:
        t.memoizedState !== null && it(t);
        break;
      case 13:
        it(t);
        break;
      case 19:
        A(Ne);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        (it(t), Ws(), e !== null && A(Ua));
        break;
      case 24:
        Qt(Se);
    }
  }
  function rn(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var s = a.create,
              c = a.inst;
            ((l = s()), (c.destroy = l));
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (r) {
      oe(t, t.return, r);
    }
  }
  function da(e, t, a) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        l = s;
        do {
          if ((l.tag & e) === e) {
            var c = l.inst,
              r = c.destroy;
            if (r !== void 0) {
              ((c.destroy = void 0), (i = t));
              var u = a,
                h = r;
              try {
                h();
              } catch (N) {
                oe(i, u, N);
              }
            }
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (N) {
      oe(t, t.return, N);
    }
  }
  function rd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        $o(t, a);
      } catch (l) {
        oe(e, e.return, l);
      }
    }
  }
  function od(e, t, a) {
    ((a.props = Ya(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      oe(e, t, l);
    }
  }
  function on(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (i) {
      oe(e, t, i);
    }
  }
  function zt(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          oe(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          oe(e, t, i);
        }
      else a.current = null;
  }
  function ud(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (i) {
      oe(e, e.return, i);
    }
  }
  function Mc(e, t, a) {
    try {
      var l = e.stateNode;
      (Zx(l, e.type, a, t), (l[Xe] = t));
    } catch (i) {
      oe(e, e.return, i);
    }
  }
  function dd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && ga(e.type)) ||
      e.tag === 4
    );
  }
  function Ec(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || dd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && ga(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function zc(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = _t)));
    else if (
      l !== 4 &&
      (l === 27 && ga(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (zc(e, t, a), e = e.sibling; e !== null;)
        (zc(e, t, a), (e = e.sibling));
  }
  function yi(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && ga(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (yi(e, t, a), e = e.sibling; e !== null;)
        (yi(e, t, a), (e = e.sibling));
  }
  function fd(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length;)
        t.removeAttributeNode(i[0]);
      (qe(t, l, a), (t[Oe] = e), (t[Xe] = a));
    } catch (s) {
      oe(e, e.return, s);
    }
  }
  var Vt = !1,
    Ae = !1,
    kc = !1,
    xd = typeof WeakSet == "function" ? WeakSet : Set,
    ke = null;
  function Tx(e, t) {
    if (((e = e.containerInfo), ($c = Bi), (e = To(e)), Ss(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var i = l.anchorOffset,
              s = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, s.nodeType);
            } catch {
              a = null;
              break e;
            }
            var c = 0,
              r = -1,
              u = -1,
              h = 0,
              N = 0,
              C = e,
              p = null;
            t: for (;;) {
              for (
                var g;
                C !== a || (i !== 0 && C.nodeType !== 3) || (r = c + i),
                  C !== s || (l !== 0 && C.nodeType !== 3) || (u = c + l),
                  C.nodeType === 3 && (c += C.nodeValue.length),
                  (g = C.firstChild) !== null;
              )
                ((p = C), (C = g));
              for (;;) {
                if (C === e) break t;
                if (
                  (p === a && ++h === i && (r = c),
                  p === s && ++N === l && (u = c),
                  (g = C.nextSibling) !== null)
                )
                  break;
                ((C = p), (p = C.parentNode));
              }
              C = g;
            }
            a = r === -1 || u === -1 ? null : { start: r, end: u };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Pc = { focusedElem: e, selectionRange: a }, Bi = !1, ke = t;
      ke !== null;
    )
      if (
        ((t = ke), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (ke = e));
      else
        for (; ke !== null;) {
          switch (((t = ke), (s = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  ((i = e[a]), (i.ref.impl = i.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && s !== null) {
                ((e = void 0),
                  (a = t),
                  (i = s.memoizedProps),
                  (s = s.memoizedState),
                  (l = a.stateNode));
                try {
                  var q = Ya(a.type, i);
                  ((e = l.getSnapshotBeforeUpdate(q, s)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Y) {
                  oe(a, a.return, Y);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  ar(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ar(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ke = e));
            break;
          }
          ke = t.return;
        }
  }
  function md(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Zt(e, a), l & 4 && rn(5, a));
        break;
      case 1:
        if ((Zt(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (c) {
              oe(a, a.return, c);
            }
          else {
            var i = Ya(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              oe(a, a.return, c);
            }
          }
        (l & 64 && rd(a), l & 512 && on(a, a.return));
        break;
      case 3:
        if ((Zt(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            $o(e, t);
          } catch (c) {
            oe(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && l & 4 && fd(a);
      case 26:
      case 5:
        (Zt(e, a), t === null && l & 4 && ud(a), l & 512 && on(a, a.return));
        break;
      case 12:
        Zt(e, a);
        break;
      case 31:
        (Zt(e, a), l & 4 && bd(e, a));
        break;
      case 13:
        (Zt(e, a),
          l & 4 && gd(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = _x.bind(null, a)), em(e, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || Vt), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Ae), (i = Vt));
          var s = Ae;
          ((Vt = l),
            (Ae = t) && !s ? It(e, a, (a.subtreeFlags & 8772) !== 0) : Zt(e, a),
            (Vt = i),
            (Ae = s));
        }
        break;
      case 30:
        break;
      default:
        Zt(e, a);
    }
  }
  function hd(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), hd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && cs(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var ge = null,
    Ie = !1;
  function Xt(e, t, a) {
    for (a = a.child; a !== null;) (pd(e, t, a), (a = a.sibling));
  }
  function pd(e, t, a) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(Dl, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Ae || zt(a, t),
          Xt(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Ae || zt(a, t);
        var l = ge,
          i = Ie;
        (ga(a.type) && ((ge = a.stateNode), (Ie = !1)),
          Xt(e, t, a),
          gn(a.stateNode),
          (ge = l),
          (Ie = i));
        break;
      case 5:
        Ae || zt(a, t);
      case 6:
        if (
          ((l = ge),
          (i = Ie),
          (ge = null),
          Xt(e, t, a),
          (ge = l),
          (Ie = i),
          ge !== null)
        )
          if (Ie)
            try {
              (ge.nodeType === 9
                ? ge.body
                : ge.nodeName === "HTML"
                  ? ge.ownerDocument.body
                  : ge
              ).removeChild(a.stateNode);
            } catch (s) {
              oe(a, t, s);
            }
          else
            try {
              ge.removeChild(a.stateNode);
            } catch (s) {
              oe(a, t, s);
            }
        break;
      case 18:
        ge !== null &&
          (Ie
            ? ((e = ge),
              of(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              El(e))
            : of(ge, a.stateNode));
        break;
      case 4:
        ((l = ge),
          (i = Ie),
          (ge = a.stateNode.containerInfo),
          (Ie = !0),
          Xt(e, t, a),
          (ge = l),
          (Ie = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (da(2, a, t), Ae || da(4, a, t), Xt(e, t, a));
        break;
      case 1:
        (Ae ||
          (zt(a, t),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && od(a, t, l)),
          Xt(e, t, a));
        break;
      case 21:
        Xt(e, t, a);
        break;
      case 22:
        ((Ae = (l = Ae) || a.memoizedState !== null), Xt(e, t, a), (Ae = l));
        break;
      default:
        Xt(e, t, a);
    }
  }
  function bd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        El(e);
      } catch (a) {
        oe(t, t.return, a);
      }
    }
  }
  function gd(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        El(e);
      } catch (a) {
        oe(t, t.return, a);
      }
  }
  function Cx(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new xd()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new xd()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function vi(e, t) {
    var a = Cx(e);
    t.forEach(function (l) {
      if (!a.has(l)) {
        a.add(l);
        var i = Hx.bind(null, e, l);
        l.then(i, i);
      }
    });
  }
  function Ke(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l],
          s = e,
          c = t,
          r = c;
        e: for (; r !== null;) {
          switch (r.tag) {
            case 27:
              if (ga(r.type)) {
                ((ge = r.stateNode), (Ie = !1));
                break e;
              }
              break;
            case 5:
              ((ge = r.stateNode), (Ie = !1));
              break e;
            case 3:
            case 4:
              ((ge = r.stateNode.containerInfo), (Ie = !0));
              break e;
          }
          r = r.return;
        }
        if (ge === null) throw Error(o(160));
        (pd(s, c, i),
          (ge = null),
          (Ie = !1),
          (s = i.alternate),
          s !== null && (s.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null;) (yd(t, e), (t = t.sibling));
  }
  var wt = null;
  function yd(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ke(t, e),
          Je(e),
          l & 4 && (da(3, e, e.return), rn(3, e), da(5, e, e.return)));
        break;
      case 1:
        (Ke(t, e),
          Je(e),
          l & 512 && (Ae || a === null || zt(a, a.return)),
          l & 64 &&
            Vt &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var i = wt;
        if (
          (Ke(t, e),
          Je(e),
          l & 512 && (Ae || a === null || zt(a, a.return)),
          l & 4)
        ) {
          var s = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (a = e.memoizedProps),
                    (i = i.ownerDocument || i));
                  t: switch (l) {
                    case "title":
                      ((s = i.getElementsByTagName("title")[0]),
                        (!s ||
                          s[Hl] ||
                          s[Oe] ||
                          s.namespaceURI === "http://www.w3.org/2000/svg" ||
                          s.hasAttribute("itemprop")) &&
                          ((s = i.createElement(l)),
                          i.head.insertBefore(
                            s,
                            i.querySelector("head > title"),
                          )),
                        qe(s, l, a),
                        (s[Oe] = e),
                        ze(s),
                        (l = s));
                      break e;
                    case "link":
                      var c = vf("link", "href", i).get(l + (a.href || ""));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (
                            ((s = c[r]),
                            s.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              s.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              s.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              s.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(r, 1);
                            break t;
                          }
                      }
                      ((s = i.createElement(l)),
                        qe(s, l, a),
                        i.head.appendChild(s));
                      break;
                    case "meta":
                      if (
                        (c = vf("meta", "content", i).get(
                          l + (a.content || ""),
                        ))
                      ) {
                        for (r = 0; r < c.length; r++)
                          if (
                            ((s = c[r]),
                            s.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              s.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              s.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              s.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              s.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(r, 1);
                            break t;
                          }
                      }
                      ((s = i.createElement(l)),
                        qe(s, l, a),
                        i.head.appendChild(s));
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  ((s[Oe] = e), ze(s), (l = s));
                }
                e.stateNode = l;
              } else jf(i, e.type, e.stateNode);
            else e.stateNode = yf(i, l, e.memoizedProps);
          else
            s !== l
              ? (s === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : s.count--,
                l === null
                  ? jf(i, e.type, e.stateNode)
                  : yf(i, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                Mc(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Ke(t, e),
          Je(e),
          l & 512 && (Ae || a === null || zt(a, a.return)),
          a !== null && l & 4 && Mc(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Ke(t, e),
          Je(e),
          l & 512 && (Ae || a === null || zt(a, a.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            $a(i, "");
          } catch (q) {
            oe(e, e.return, q);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), Mc(e, i, a !== null ? a.memoizedProps : i)),
          l & 1024 && (kc = !0));
        break;
      case 6:
        if ((Ke(t, e), Je(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = l;
          } catch (q) {
            oe(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          ((Ui = null),
          (i = wt),
          (wt = _i(t.containerInfo)),
          Ke(t, e),
          (wt = i),
          Je(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            El(t.containerInfo);
          } catch (q) {
            oe(e, e.return, q);
          }
        kc && ((kc = !1), vd(e));
        break;
      case 4:
        ((l = wt),
          (wt = _i(e.stateNode.containerInfo)),
          Ke(t, e),
          Je(e),
          (wt = l));
        break;
      case 12:
        (Ke(t, e), Je(e));
        break;
      case 31:
        (Ke(t, e),
          Je(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), vi(e, l))));
        break;
      case 13:
        (Ke(t, e),
          Je(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (Ni = Pe()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), vi(e, l))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var u = a !== null && a.memoizedState !== null,
          h = Vt,
          N = Ae;
        if (
          ((Vt = h || i),
          (Ae = N || u),
          Ke(t, e),
          (Ae = N),
          (Vt = h),
          Je(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (a === null || u || Vt || Ae || Ga(e)),
              a = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                u = a = t;
                try {
                  if (((s = u.stateNode), i))
                    ((c = s.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    r = u.stateNode;
                    var C = u.memoizedProps.style,
                      p =
                        C != null && C.hasOwnProperty("display")
                          ? C.display
                          : null;
                    r.style.display =
                      p == null || typeof p == "boolean" ? "" : ("" + p).trim();
                  }
                } catch (q) {
                  oe(u, u.return, q);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                u = t;
                try {
                  u.stateNode.nodeValue = i ? "" : u.memoizedProps;
                } catch (q) {
                  oe(u, u.return, q);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                u = t;
                try {
                  var g = u.stateNode;
                  i ? uf(g, !0) : uf(u.stateNode, !1);
                } catch (q) {
                  oe(u, u.return, q);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), vi(e, a))));
        break;
      case 19:
        (Ke(t, e),
          Je(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), vi(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ke(t, e), Je(e));
    }
  }
  function Je(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null;) {
          if (dd(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode,
              s = Ec(e);
            yi(e, s, i);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && ($a(c, ""), (a.flags &= -33));
            var r = Ec(e);
            yi(e, r, c);
            break;
          case 3:
          case 4:
            var u = a.stateNode.containerInfo,
              h = Ec(e);
            zc(e, h, u);
            break;
          default:
            throw Error(o(161));
        }
      } catch (N) {
        oe(e, e.return, N);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function vd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var t = e;
        (vd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Zt(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null;) (md(e, t.alternate, t), (t = t.sibling));
  }
  function Ga(e) {
    for (e = e.child; e !== null;) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (da(4, t, t.return), Ga(t));
          break;
        case 1:
          zt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && od(t, t.return, a),
            Ga(t));
          break;
        case 27:
          gn(t.stateNode);
        case 26:
        case 5:
          (zt(t, t.return), Ga(t));
          break;
        case 22:
          t.memoizedState === null && Ga(t);
          break;
        case 30:
          Ga(t);
          break;
        default:
          Ga(t);
      }
      e = e.sibling;
    }
  }
  function It(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
      var l = t.alternate,
        i = e,
        s = t,
        c = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          (It(i, s, a), rn(4, s));
          break;
        case 1:
          if (
            (It(i, s, a),
            (l = s),
            (i = l.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (h) {
              oe(l, l.return, h);
            }
          if (((l = s), (i = l.updateQueue), i !== null)) {
            var r = l.stateNode;
            try {
              var u = i.shared.hiddenCallbacks;
              if (u !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < u.length; i++)
                  Fo(u[i], r);
            } catch (h) {
              oe(l, l.return, h);
            }
          }
          (a && c & 64 && rd(s), on(s, s.return));
          break;
        case 27:
          fd(s);
        case 26:
        case 5:
          (It(i, s, a), a && l === null && c & 4 && ud(s), on(s, s.return));
          break;
        case 12:
          It(i, s, a);
          break;
        case 31:
          (It(i, s, a), a && c & 4 && bd(i, s));
          break;
        case 13:
          (It(i, s, a), a && c & 4 && gd(i, s));
          break;
        case 22:
          (s.memoizedState === null && It(i, s, a), on(s, s.return));
          break;
        case 30:
          break;
        default:
          It(i, s, a);
      }
      t = t.sibling;
    }
  }
  function Dc(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Kl(a)));
  }
  function Oc(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Kl(e)));
  }
  function St(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (jd(e, t, a, l), (t = t.sibling));
  }
  function jd(e, t, a, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (St(e, t, a, l), i & 2048 && rn(9, t));
        break;
      case 1:
        St(e, t, a, l);
        break;
      case 3:
        (St(e, t, a, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Kl(e))));
        break;
      case 12:
        if (i & 2048) {
          (St(e, t, a, l), (e = t.stateNode));
          try {
            var s = t.memoizedProps,
              c = s.id,
              r = s.onPostCommit;
            typeof r == "function" &&
              r(
                c,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (u) {
            oe(t, t.return, u);
          }
        } else St(e, t, a, l);
        break;
      case 31:
        St(e, t, a, l);
        break;
      case 13:
        St(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        ((s = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? s._visibility & 2
              ? St(e, t, a, l)
              : un(e, t)
            : s._visibility & 2
              ? St(e, t, a, l)
              : ((s._visibility |= 2),
                gl(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && Dc(c, t));
        break;
      case 24:
        (St(e, t, a, l), i & 2048 && Oc(t.alternate, t));
        break;
      default:
        St(e, t, a, l);
    }
  }
  function gl(e, t, a, l, i) {
    for (
      i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var s = e,
        c = t,
        r = a,
        u = l,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (gl(s, c, r, u, i), rn(8, c));
          break;
        case 23:
          break;
        case 22:
          var N = c.stateNode;
          (c.memoizedState !== null
            ? N._visibility & 2
              ? gl(s, c, r, u, i)
              : un(s, c)
            : ((N._visibility |= 2), gl(s, c, r, u, i)),
            i && h & 2048 && Dc(c.alternate, c));
          break;
        case 24:
          (gl(s, c, r, u, i), i && h & 2048 && Oc(c.alternate, c));
          break;
        default:
          gl(s, c, r, u, i);
      }
      t = t.sibling;
    }
  }
  function un(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) {
        var a = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            (un(a, l), i & 2048 && Dc(l.alternate, l));
            break;
          case 24:
            (un(a, l), i & 2048 && Oc(l.alternate, l));
            break;
          default:
            un(a, l);
        }
        t = t.sibling;
      }
  }
  var dn = 8192;
  function yl(e, t, a) {
    if (e.subtreeFlags & dn)
      for (e = e.child; e !== null;) (Nd(e, t, a), (e = e.sibling));
  }
  function Nd(e, t, a) {
    switch (e.tag) {
      case 26:
        (yl(e, t, a),
          e.flags & dn &&
            e.memoizedState !== null &&
            fm(a, wt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        yl(e, t, a);
        break;
      case 3:
      case 4:
        var l = wt;
        ((wt = _i(e.stateNode.containerInfo)), yl(e, t, a), (wt = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = dn), (dn = 16777216), yl(e, t, a), (dn = l))
            : yl(e, t, a));
        break;
      default:
        yl(e, t, a);
    }
  }
  function wd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function fn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((ke = l), Td(l, e));
        }
      wd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (Sd(e), (e = e.sibling));
  }
  function Sd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (fn(e), e.flags & 2048 && da(9, e, e.return));
        break;
      case 3:
        fn(e);
        break;
      case 12:
        fn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ji(e))
          : fn(e);
        break;
      default:
        fn(e);
    }
  }
  function ji(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          ((ke = l), Td(l, e));
        }
      wd(e);
    }
    for (e = e.child; e !== null;) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (da(8, t, t.return), ji(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), ji(t)));
          break;
        default:
          ji(t);
      }
      e = e.sibling;
    }
  }
  function Td(e, t) {
    for (; ke !== null;) {
      var a = ke;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          da(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Kl(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), (ke = l));
      else
        e: for (a = e; ke !== null;) {
          l = ke;
          var i = l.sibling,
            s = l.return;
          if ((hd(l), l === a)) {
            ke = null;
            break e;
          }
          if (i !== null) {
            ((i.return = s), (ke = i));
            break e;
          }
          ke = s;
        }
    }
  }
  var Ax = {
      getCacheForType: function (e) {
        var t = He(Se),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return He(Se).controller.signal;
      },
    },
    Mx = typeof WeakMap == "function" ? WeakMap : Map,
    ie = 0,
    he = null,
    J = null,
    $ = 0,
    re = 0,
    st = null,
    fa = !1,
    vl = !1,
    _c = !1,
    Kt = 0,
    ve = 0,
    xa = 0,
    La = 0,
    Hc = 0,
    ct = 0,
    jl = 0,
    xn = null,
    We = null,
    Uc = !1,
    Ni = 0,
    Cd = 0,
    wi = 1 / 0,
    Si = null,
    ma = null,
    Ee = 0,
    ha = null,
    Nl = null,
    Jt = 0,
    qc = 0,
    Rc = null,
    Ad = null,
    mn = 0,
    Qc = null;
  function rt() {
    return (ie & 2) !== 0 && $ !== 0 ? $ & -$ : w.T !== null ? Xc() : Gr();
  }
  function Md() {
    if (ct === 0)
      if (($ & 536870912) === 0 || te) {
        var e = Dn;
        ((Dn <<= 1), (Dn & 3932160) === 0 && (Dn = 262144), (ct = e));
      } else ct = 536870912;
    return ((e = nt.current), e !== null && (e.flags |= 32), ct);
  }
  function Fe(e, t, a) {
    (((e === he && (re === 2 || re === 9)) || e.cancelPendingCommit !== null) &&
      (wl(e, 0), pa(e, $, ct, !1)),
      _l(e, a),
      ((ie & 2) === 0 || e !== he) &&
        (e === he &&
          ((ie & 2) === 0 && (La |= a), ve === 4 && pa(e, $, ct, !1)),
        kt(e)));
  }
  function Ed(e, t, a) {
    if ((ie & 6) !== 0) throw Error(o(327));
    var l = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ol(e, t),
      i = l ? kx(e, t) : Yc(e, t, !0),
      s = l;
    do {
      if (i === 0) {
        vl && !l && pa(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), s && !Ex(a))) {
          ((i = Yc(e, t, !1)), (s = !1));
          continue;
        }
        if (i === 2) {
          if (((s = t), e.errorRecoveryDisabledLanes & s)) var c = 0;
          else
            ((c = e.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            e: {
              var r = e;
              i = xn;
              var u = r.current.memoizedState.isDehydrated;
              if ((u && (wl(r, c).flags |= 256), (c = Yc(r, c, !1)), c !== 2)) {
                if (_c && !u) {
                  ((r.errorRecoveryDisabledLanes |= s), (La |= s), (i = 4));
                  break e;
                }
                ((s = We),
                  (We = i),
                  s !== null &&
                    (We === null ? (We = s) : We.push.apply(We, s)));
              }
              i = c;
            }
            if (((s = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (wl(e, 0), pa(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (s = i), s)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              pa(l, t, ct, !fa);
              break e;
            case 2:
              We = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((i = Ni + 300 - Pe()), 10 < i)) {
            if ((pa(l, t, ct, !fa), _n(l, 0, !0) !== 0)) break e;
            ((Jt = t),
              (l.timeoutHandle = cf(
                zd.bind(
                  null,
                  l,
                  a,
                  We,
                  Si,
                  Uc,
                  t,
                  ct,
                  La,
                  jl,
                  fa,
                  s,
                  "Throttled",
                  -0,
                  0,
                ),
                i,
              )));
            break e;
          }
          zd(l, a, We, Si, Uc, t, ct, La, jl, fa, s, null, -0, 0);
        }
      }
      break;
    } while (!0);
    kt(e);
  }
  function zd(e, t, a, l, i, s, c, r, u, h, N, C, p, g) {
    if (
      ((e.timeoutHandle = -1),
      (C = t.subtreeFlags),
      C & 8192 || (C & 16785408) === 16785408)
    ) {
      ((C = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: _t,
      }),
        Nd(t, s, C));
      var q =
        (s & 62914560) === s ? Ni - Pe() : (s & 4194048) === s ? Cd - Pe() : 0;
      if (((q = xm(C, q)), q !== null)) {
        ((Jt = s),
          (e.cancelPendingCommit = q(
            Rd.bind(null, e, t, s, a, l, i, c, r, u, N, C, null, p, g),
          )),
          pa(e, s, c, !h));
        return;
      }
    }
    Rd(e, t, s, a, l, i, c, r, u);
  }
  function Ex(e) {
    for (var t = e; ;) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var i = a[l],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!at(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function pa(e, t, a, l) {
    ((t &= ~Hc),
      (t &= ~La),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var i = t; 0 < i;) {
      var s = 31 - tt(i),
        c = 1 << s;
      ((l[s] = -1), (i &= ~c));
    }
    a !== 0 && Qr(e, a, t);
  }
  function Ti() {
    return (ie & 6) === 0 ? (hn(0), !1) : !0;
  }
  function Bc() {
    if (J !== null) {
      if (re === 0) var e = J.return;
      else ((e = J), (Rt = _a = null), ac(e), (xl = null), (Wl = 0), (e = J));
      for (; e !== null;) (cd(e.alternate, e), (e = e.return));
      J = null;
    }
  }
  function wl(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Jx(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (Jt = 0),
      Bc(),
      (he = e),
      (J = a = Ut(e.current, null)),
      ($ = t),
      (re = 0),
      (st = null),
      (fa = !1),
      (vl = Ol(e, t)),
      (_c = !1),
      (jl = ct = Hc = La = xa = ve = 0),
      (We = xn = null),
      (Uc = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l;) {
        var i = 31 - tt(l),
          s = 1 << i;
        ((t |= e[i]), (l &= ~s));
      }
    return ((Kt = t), Zn(), a);
  }
  function kd(e, t) {
    ((X = null),
      (w.H = nn),
      t === fl || t === ei
        ? ((t = Io()), (re = 3))
        : t === Vs
          ? ((t = Io()), (re = 4))
          : (re =
              t === gc
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (st = t),
      J === null && ((ve = 1), mi(e, xt(t, e.current))));
  }
  function Dd() {
    var e = nt.current;
    return e === null
      ? !0
      : ($ & 4194048) === $
        ? bt === null
        : ($ & 62914560) === $ || ($ & 536870912) !== 0
          ? e === bt
          : !1;
  }
  function Od() {
    var e = w.H;
    return ((w.H = nn), e === null ? nn : e);
  }
  function _d() {
    var e = w.A;
    return ((w.A = Ax), e);
  }
  function Ci() {
    ((ve = 4),
      fa || (($ & 4194048) !== $ && nt.current !== null) || (vl = !0),
      ((xa & 134217727) === 0 && (La & 134217727) === 0) ||
        he === null ||
        pa(he, $, ct, !1));
  }
  function Yc(e, t, a) {
    var l = ie;
    ie |= 2;
    var i = Od(),
      s = _d();
    ((he !== e || $ !== t) && ((Si = null), wl(e, t)), (t = !1));
    var c = ve;
    e: do
      try {
        if (re !== 0 && J !== null) {
          var r = J,
            u = st;
          switch (re) {
            case 8:
              (Bc(), (c = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              nt.current === null && (t = !0);
              var h = re;
              if (((re = 0), (st = null), Sl(e, r, u, h), a && vl)) {
                c = 0;
                break e;
              }
              break;
            default:
              ((h = re), (re = 0), (st = null), Sl(e, r, u, h));
          }
        }
        (zx(), (c = ve));
        break;
      } catch (N) {
        kd(e, N);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Rt = _a = null),
      (ie = l),
      (w.H = i),
      (w.A = s),
      J === null && ((he = null), ($ = 0), Zn()),
      c
    );
  }
  function zx() {
    for (; J !== null;) Hd(J);
  }
  function kx(e, t) {
    var a = ie;
    ie |= 2;
    var l = Od(),
      i = _d();
    he !== e || $ !== t
      ? ((Si = null), (wi = Pe() + 500), wl(e, t))
      : (vl = Ol(e, t));
    e: do
      try {
        if (re !== 0 && J !== null) {
          t = J;
          var s = st;
          t: switch (re) {
            case 1:
              ((re = 0), (st = null), Sl(e, t, s, 1));
              break;
            case 2:
            case 9:
              if (Xo(s)) {
                ((re = 0), (st = null), Ud(t));
                break;
              }
              ((t = function () {
                ((re !== 2 && re !== 9) || he !== e || (re = 7), kt(e));
              }),
                s.then(t, t));
              break e;
            case 3:
              re = 7;
              break e;
            case 4:
              re = 5;
              break e;
            case 7:
              Xo(s)
                ? ((re = 0), (st = null), Ud(t))
                : ((re = 0), (st = null), Sl(e, t, s, 7));
              break;
            case 5:
              var c = null;
              switch (J.tag) {
                case 26:
                  c = J.memoizedState;
                case 5:
                case 27:
                  var r = J;
                  if (c ? Nf(c) : r.stateNode.complete) {
                    ((re = 0), (st = null));
                    var u = r.sibling;
                    if (u !== null) J = u;
                    else {
                      var h = r.return;
                      h !== null ? ((J = h), Ai(h)) : (J = null);
                    }
                    break t;
                  }
              }
              ((re = 0), (st = null), Sl(e, t, s, 5));
              break;
            case 6:
              ((re = 0), (st = null), Sl(e, t, s, 6));
              break;
            case 8:
              (Bc(), (ve = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        Dx();
        break;
      } catch (N) {
        kd(e, N);
      }
    while (!0);
    return (
      (Rt = _a = null),
      (w.H = l),
      (w.A = i),
      (ie = a),
      J !== null ? 0 : ((he = null), ($ = 0), Zn(), ve)
    );
  }
  function Dx() {
    for (; J !== null && !t0();) Hd(J);
  }
  function Hd(e) {
    var t = id(e.alternate, e, Kt);
    ((e.memoizedProps = e.pendingProps), t === null ? Ai(e) : (J = t));
  }
  function Ud(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Pu(a, t, t.pendingProps, t.type, void 0, $);
        break;
      case 11:
        t = Pu(a, t, t.pendingProps, t.type.render, t.ref, $);
        break;
      case 5:
        ac(t);
      default:
        (cd(a, t), (t = J = _o(t, Kt)), (t = id(a, t, Kt)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Ai(e) : (J = t));
  }
  function Sl(e, t, a, l) {
    ((Rt = _a = null), ac(t), (xl = null), (Wl = 0));
    var i = t.return;
    try {
      if (vx(e, i, t, a, $)) {
        ((ve = 1), mi(e, xt(a, e.current)), (J = null));
        return;
      }
    } catch (s) {
      if (i !== null) throw ((J = i), s);
      ((ve = 1), mi(e, xt(a, e.current)), (J = null));
      return;
    }
    t.flags & 32768
      ? (te || l === 1
          ? (e = !0)
          : vl || ($ & 536870912) !== 0
            ? (e = !1)
            : ((fa = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = nt.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        qd(t, e))
      : Ai(t);
  }
  function Ai(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        qd(t, fa);
        return;
      }
      e = t.return;
      var a = wx(t.alternate, t, Kt);
      if (a !== null) {
        J = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        J = t;
        return;
      }
      J = t = e;
    } while (t !== null);
    ve === 0 && (ve = 5);
  }
  function qd(e, t) {
    do {
      var a = Sx(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (J = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        J = e;
        return;
      }
      J = e = a;
    } while (e !== null);
    ((ve = 6), (J = null));
  }
  function Rd(e, t, a, l, i, s, c, r, u) {
    e.cancelPendingCommit = null;
    do Mi();
    while (Ee !== 0);
    if ((ie & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((s = t.lanes | t.childLanes),
        (s |= Es),
        d0(e, a, s, c, r, u),
        e === he && ((J = he = null), ($ = 0)),
        (Nl = t),
        (ha = e),
        (Jt = a),
        (qc = s),
        (Rc = i),
        (Ad = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            Ux(zn, function () {
              return (Ld(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = w.T), (w.T = null), (i = O.p), (O.p = 2), (c = ie), (ie |= 4));
        try {
          Tx(e, t, a);
        } finally {
          ((ie = c), (O.p = i), (w.T = l));
        }
      }
      ((Ee = 1), Qd(), Bd(), Yd());
    }
  }
  function Qd() {
    if (Ee === 1) {
      Ee = 0;
      var e = ha,
        t = Nl,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = w.T), (w.T = null));
        var l = O.p;
        O.p = 2;
        var i = ie;
        ie |= 4;
        try {
          yd(t, e);
          var s = Pc,
            c = To(e.containerInfo),
            r = s.focusedElem,
            u = s.selectionRange;
          if (
            c !== r &&
            r &&
            r.ownerDocument &&
            So(r.ownerDocument.documentElement, r)
          ) {
            if (u !== null && Ss(r)) {
              var h = u.start,
                N = u.end;
              if ((N === void 0 && (N = h), "selectionStart" in r))
                ((r.selectionStart = h),
                  (r.selectionEnd = Math.min(N, r.value.length)));
              else {
                var C = r.ownerDocument || document,
                  p = (C && C.defaultView) || window;
                if (p.getSelection) {
                  var g = p.getSelection(),
                    q = r.textContent.length,
                    Y = Math.min(u.start, q),
                    xe = u.end === void 0 ? Y : Math.min(u.end, q);
                  !g.extend && Y > xe && ((c = xe), (xe = Y), (Y = c));
                  var x = wo(r, Y),
                    d = wo(r, xe);
                  if (
                    x &&
                    d &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== x.node ||
                      g.anchorOffset !== x.offset ||
                      g.focusNode !== d.node ||
                      g.focusOffset !== d.offset)
                  ) {
                    var m = C.createRange();
                    (m.setStart(x.node, x.offset),
                      g.removeAllRanges(),
                      Y > xe
                        ? (g.addRange(m), g.extend(d.node, d.offset))
                        : (m.setEnd(d.node, d.offset), g.addRange(m)));
                  }
                }
              }
            }
            for (C = [], g = r; (g = g.parentNode);)
              g.nodeType === 1 &&
                C.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof r.focus == "function" && r.focus(), r = 0;
              r < C.length;
              r++
            ) {
              var T = C[r];
              ((T.element.scrollLeft = T.left), (T.element.scrollTop = T.top));
            }
          }
          ((Bi = !!$c), (Pc = $c = null));
        } finally {
          ((ie = i), (O.p = l), (w.T = a));
        }
      }
      ((e.current = t), (Ee = 2));
    }
  }
  function Bd() {
    if (Ee === 2) {
      Ee = 0;
      var e = ha,
        t = Nl,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = w.T), (w.T = null));
        var l = O.p;
        O.p = 2;
        var i = ie;
        ie |= 4;
        try {
          md(e, t.alternate, t);
        } finally {
          ((ie = i), (O.p = l), (w.T = a));
        }
      }
      Ee = 3;
    }
  }
  function Yd() {
    if (Ee === 4 || Ee === 3) {
      ((Ee = 0), a0());
      var e = ha,
        t = Nl,
        a = Jt,
        l = Ad;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ee = 5)
        : ((Ee = 0), (Nl = ha = null), Gd(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (ma = null),
        is(a),
        (t = t.stateNode),
        et && typeof et.onCommitFiberRoot == "function")
      )
        try {
          et.onCommitFiberRoot(Dl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = w.T), (i = O.p), (O.p = 2), (w.T = null));
        try {
          for (var s = e.onRecoverableError, c = 0; c < l.length; c++) {
            var r = l[c];
            s(r.value, { componentStack: r.stack });
          }
        } finally {
          ((w.T = t), (O.p = i));
        }
      }
      ((Jt & 3) !== 0 && Mi(),
        kt(e),
        (i = e.pendingLanes),
        (a & 261930) !== 0 && (i & 42) !== 0
          ? e === Qc
            ? mn++
            : ((mn = 0), (Qc = e))
          : (mn = 0),
        hn(0));
    }
  }
  function Gd(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Kl(t)));
  }
  function Mi() {
    return (Qd(), Bd(), Yd(), Ld());
  }
  function Ld() {
    if (Ee !== 5) return !1;
    var e = ha,
      t = qc;
    qc = 0;
    var a = is(Jt),
      l = w.T,
      i = O.p;
    try {
      ((O.p = 32 > a ? 32 : a), (w.T = null), (a = Rc), (Rc = null));
      var s = ha,
        c = Jt;
      if (((Ee = 0), (Nl = ha = null), (Jt = 0), (ie & 6) !== 0))
        throw Error(o(331));
      var r = ie;
      if (
        ((ie |= 4),
        Sd(s.current),
        jd(s, s.current, c, a),
        (ie = r),
        hn(0, !1),
        et && typeof et.onPostCommitFiberRoot == "function")
      )
        try {
          et.onPostCommitFiberRoot(Dl, s);
        } catch {}
      return !0;
    } finally {
      ((O.p = i), (w.T = l), Gd(e, t));
    }
  }
  function Vd(e, t, a) {
    ((t = xt(a, t)),
      (t = bc(e.stateNode, t, 2)),
      (e = ra(e, t, 2)),
      e !== null && (_l(e, 2), kt(e)));
  }
  function oe(e, t, a) {
    if (e.tag === 3) Vd(e, e, a);
    else
      for (; t !== null;) {
        if (t.tag === 3) {
          Vd(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (ma === null || !ma.has(l)))
          ) {
            ((e = xt(a, e)),
              (a = Xu(2)),
              (l = ra(t, a, 2)),
              l !== null && (Zu(a, l, t, e), _l(l, 2), kt(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gc(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Mx();
      var i = new Set();
      l.set(t, i);
    } else ((i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i)));
    i.has(a) ||
      ((_c = !0), i.add(a), (e = Ox.bind(null, e, t, a)), t.then(e, e));
  }
  function Ox(e, t, a) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      he === e &&
        ($ & a) === a &&
        (ve === 4 || (ve === 3 && ($ & 62914560) === $ && 300 > Pe() - Ni)
          ? (ie & 2) === 0 && wl(e, 0)
          : (Hc |= a),
        jl === $ && (jl = 0)),
      kt(e));
  }
  function Xd(e, t) {
    (t === 0 && (t = Rr()), (e = ka(e, t)), e !== null && (_l(e, t), kt(e)));
  }
  function _x(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Xd(e, a));
  }
  function Hx(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (a = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (l !== null && l.delete(t), Xd(e, a));
  }
  function Ux(e, t) {
    return ts(e, t);
  }
  var Ei = null,
    Tl = null,
    Lc = !1,
    zi = !1,
    Vc = !1,
    ba = 0;
  function kt(e) {
    (e !== Tl &&
      e.next === null &&
      (Tl === null ? (Ei = Tl = e) : (Tl = Tl.next = e)),
      (zi = !0),
      Lc || ((Lc = !0), Rx()));
  }
  function hn(e, t) {
    if (!Vc && zi) {
      Vc = !0;
      do
        for (var a = !1, l = Ei; l !== null;) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var s = 0;
            else {
              var c = l.suspendedLanes,
                r = l.pingedLanes;
              ((s = (1 << (31 - tt(42 | e) + 1)) - 1),
                (s &= i & ~(c & ~r)),
                (s = s & 201326741 ? (s & 201326741) | 1 : s ? s | 2 : 0));
            }
            s !== 0 && ((a = !0), Jd(l, s));
          } else
            ((s = $),
              (s = _n(
                l,
                l === he ? s : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (s & 3) === 0 || Ol(l, s) || ((a = !0), Jd(l, s)));
          l = l.next;
        }
      while (a);
      Vc = !1;
    }
  }
  function qx() {
    Zd();
  }
  function Zd() {
    zi = Lc = !1;
    var e = 0;
    ba !== 0 && Kx() && (e = ba);
    for (var t = Pe(), a = null, l = Ei; l !== null;) {
      var i = l.next,
        s = Id(l, t);
      (s === 0
        ? ((l.next = null),
          a === null ? (Ei = i) : (a.next = i),
          i === null && (Tl = a))
        : ((a = l), (e !== 0 || (s & 3) !== 0) && (zi = !0)),
        (l = i));
    }
    ((Ee !== 0 && Ee !== 5) || hn(e), ba !== 0 && (ba = 0));
  }
  function Id(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes & -62914561;
      0 < s;
    ) {
      var c = 31 - tt(s),
        r = 1 << c,
        u = i[c];
      (u === -1
        ? ((r & a) === 0 || (r & l) !== 0) && (i[c] = u0(r, t))
        : u <= t && (e.expiredLanes |= r),
        (s &= ~r));
    }
    if (
      ((t = he),
      (a = $),
      (a = _n(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      a === 0 ||
        (e === t && (re === 2 || re === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && as(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ol(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && as(l), is(a))) {
        case 2:
        case 8:
          a = Ur;
          break;
        case 32:
          a = zn;
          break;
        case 268435456:
          a = qr;
          break;
        default:
          a = zn;
      }
      return (
        (l = Kd.bind(null, e)),
        (a = ts(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && as(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Kd(e, t) {
    if (Ee !== 0 && Ee !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (Mi() && e.callbackNode !== a) return null;
    var l = $;
    return (
      (l = _n(
        e,
        e === he ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (Ed(e, l, t),
          Id(e, Pe()),
          e.callbackNode != null && e.callbackNode === a
            ? Kd.bind(null, e)
            : null)
    );
  }
  function Jd(e, t) {
    if (Mi()) return null;
    Ed(e, t, !0);
  }
  function Rx() {
    Wx(function () {
      (ie & 6) !== 0 ? ts(Hr, qx) : Zd();
    });
  }
  function Xc() {
    if (ba === 0) {
      var e = ul;
      (e === 0 && ((e = kn), (kn <<= 1), (kn & 261888) === 0 && (kn = 256)),
        (ba = e));
    }
    return ba;
  }
  function Wd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Rn("" + e);
  }
  function Fd(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Qx(e, t, a, l, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var s = Wd((i[Xe] || null).action),
        c = l.submitter;
      c &&
        ((t = (t = c[Xe] || null)
          ? Wd(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((s = t), (c = null)));
      var r = new Gn("action", "action", null, l, i);
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (ba !== 0) {
                  var u = c ? Fd(i, c) : new FormData(i);
                  dc(
                    a,
                    { pending: !0, data: u, method: i.method, action: s },
                    null,
                    u,
                  );
                }
              } else
                typeof s == "function" &&
                  (r.preventDefault(),
                  (u = c ? Fd(i, c) : new FormData(i)),
                  dc(
                    a,
                    { pending: !0, data: u, method: i.method, action: s },
                    s,
                    u,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var Zc = 0; Zc < Ms.length; Zc++) {
    var Ic = Ms[Zc],
      Bx = Ic.toLowerCase(),
      Yx = Ic[0].toUpperCase() + Ic.slice(1);
    Nt(Bx, "on" + Yx);
  }
  (Nt(Mo, "onAnimationEnd"),
    Nt(Eo, "onAnimationIteration"),
    Nt(zo, "onAnimationStart"),
    Nt("dblclick", "onDoubleClick"),
    Nt("focusin", "onFocus"),
    Nt("focusout", "onBlur"),
    Nt(lx, "onTransitionRun"),
    Nt(nx, "onTransitionStart"),
    Nt(ix, "onTransitionCancel"),
    Nt(ko, "onTransitionEnd"),
    Wa("onMouseEnter", ["mouseout", "mouseover"]),
    Wa("onMouseLeave", ["mouseout", "mouseover"]),
    Wa("onPointerEnter", ["pointerout", "pointerover"]),
    Wa("onPointerLeave", ["pointerout", "pointerover"]),
    Aa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Aa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Aa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Aa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var pn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Gx = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(pn),
    );
  function $d(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        i = l.event;
      l = l.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var c = l.length - 1; 0 <= c; c--) {
            var r = l[c],
              u = r.instance,
              h = r.currentTarget;
            if (((r = r.listener), u !== s && i.isPropagationStopped()))
              break e;
            ((s = r), (i.currentTarget = h));
            try {
              s(i);
            } catch (N) {
              Xn(N);
            }
            ((i.currentTarget = null), (s = u));
          }
        else
          for (c = 0; c < l.length; c++) {
            if (
              ((r = l[c]),
              (u = r.instance),
              (h = r.currentTarget),
              (r = r.listener),
              u !== s && i.isPropagationStopped())
            )
              break e;
            ((s = r), (i.currentTarget = h));
            try {
              s(i);
            } catch (N) {
              Xn(N);
            }
            ((i.currentTarget = null), (s = u));
          }
      }
    }
  }
  function W(e, t) {
    var a = t[ss];
    a === void 0 && (a = t[ss] = new Set());
    var l = e + "__bubble";
    a.has(l) || (Pd(t, e, 2, !1), a.add(l));
  }
  function Kc(e, t, a) {
    var l = 0;
    (t && (l |= 4), Pd(a, e, l, t));
  }
  var ki = "_reactListening" + Math.random().toString(36).slice(2);
  function Jc(e) {
    if (!e[ki]) {
      ((e[ki] = !0),
        Xr.forEach(function (a) {
          a !== "selectionchange" && (Gx.has(a) || Kc(a, !1, e), Kc(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ki] || ((t[ki] = !0), Kc("selectionchange", !1, t));
    }
  }
  function Pd(e, t, a, l) {
    switch (Ef(t)) {
      case 2:
        var i = pm;
        break;
      case 8:
        i = bm;
        break;
      default:
        i = ur;
    }
    ((a = i.bind(null, t, a, e)),
      (i = void 0),
      !hs ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: i })
          : e.addEventListener(t, a, !0)
        : i !== void 0
          ? e.addEventListener(t, a, { passive: i })
          : e.addEventListener(t, a, !1));
  }
  function Wc(e, t, a, l, i) {
    var s = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var c = l.tag;
        if (c === 3 || c === 4) {
          var r = l.stateNode.containerInfo;
          if (r === i) break;
          if (c === 4)
            for (c = l.return; c !== null;) {
              var u = c.tag;
              if ((u === 3 || u === 4) && c.stateNode.containerInfo === i)
                return;
              c = c.return;
            }
          for (; r !== null;) {
            if (((c = Ia(r)), c === null)) return;
            if (((u = c.tag), u === 5 || u === 6 || u === 26 || u === 27)) {
              l = s = c;
              continue e;
            }
            r = r.parentNode;
          }
        }
        l = l.return;
      }
    lo(function () {
      var h = s,
        N = xs(a),
        C = [];
      e: {
        var p = Do.get(e);
        if (p !== void 0) {
          var g = Gn,
            q = e;
          switch (e) {
            case "keypress":
              if (Bn(a) === 0) break e;
            case "keydown":
            case "keyup":
              g = H0;
              break;
            case "focusin":
              ((q = "focus"), (g = ys));
              break;
            case "focusout":
              ((q = "blur"), (g = ys));
              break;
            case "beforeblur":
            case "afterblur":
              g = ys;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = so;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = w0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = R0;
              break;
            case Mo:
            case Eo:
            case zo:
              g = C0;
              break;
            case ko:
              g = B0;
              break;
            case "scroll":
            case "scrollend":
              g = j0;
              break;
            case "wheel":
              g = G0;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = M0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = ro;
              break;
            case "toggle":
            case "beforetoggle":
              g = V0;
          }
          var Y = (t & 4) !== 0,
            xe = !Y && (e === "scroll" || e === "scrollend"),
            x = Y ? (p !== null ? p + "Capture" : null) : p;
          Y = [];
          for (var d = h, m; d !== null;) {
            var T = d;
            if (
              ((m = T.stateNode),
              (T = T.tag),
              (T !== 5 && T !== 26 && T !== 27) ||
                m === null ||
                x === null ||
                ((T = ql(d, x)), T != null && Y.push(bn(d, T, m))),
              xe)
            )
              break;
            d = d.return;
          }
          0 < Y.length &&
            ((p = new g(p, q, null, a, N)), C.push({ event: p, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((p = e === "mouseover" || e === "pointerover"),
            (g = e === "mouseout" || e === "pointerout"),
            p &&
              a !== fs &&
              (q = a.relatedTarget || a.fromElement) &&
              (Ia(q) || q[Za]))
          )
            break e;
          if (
            (g || p) &&
            ((p =
              N.window === N
                ? N
                : (p = N.ownerDocument)
                  ? p.defaultView || p.parentWindow
                  : window),
            g
              ? ((q = a.relatedTarget || a.toElement),
                (g = h),
                (q = q ? Ia(q) : null),
                q !== null &&
                  ((xe = E(q)),
                  (Y = q.tag),
                  q !== xe || (Y !== 5 && Y !== 27 && Y !== 6)) &&
                  (q = null))
              : ((g = null), (q = h)),
            g !== q)
          ) {
            if (
              ((Y = so),
              (T = "onMouseLeave"),
              (x = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Y = ro),
                (T = "onPointerLeave"),
                (x = "onPointerEnter"),
                (d = "pointer")),
              (xe = g == null ? p : Ul(g)),
              (m = q == null ? p : Ul(q)),
              (p = new Y(T, d + "leave", g, a, N)),
              (p.target = xe),
              (p.relatedTarget = m),
              (T = null),
              Ia(N) === h &&
                ((Y = new Y(x, d + "enter", q, a, N)),
                (Y.target = m),
                (Y.relatedTarget = xe),
                (T = Y)),
              (xe = T),
              g && q)
            )
              t: {
                for (Y = Lx, x = g, d = q, m = 0, T = x; T; T = Y(T)) m++;
                T = 0;
                for (var B = d; B; B = Y(B)) T++;
                for (; 0 < m - T;) ((x = Y(x)), m--);
                for (; 0 < T - m;) ((d = Y(d)), T--);
                for (; m--;) {
                  if (x === d || (d !== null && x === d.alternate)) {
                    Y = x;
                    break t;
                  }
                  ((x = Y(x)), (d = Y(d)));
                }
                Y = null;
              }
            else Y = null;
            (g !== null && ef(C, p, g, Y, !1),
              q !== null && xe !== null && ef(C, xe, q, Y, !0));
          }
        }
        e: {
          if (
            ((p = h ? Ul(h) : window),
            (g = p.nodeName && p.nodeName.toLowerCase()),
            g === "select" || (g === "input" && p.type === "file"))
          )
            var le = bo;
          else if (ho(p))
            if (go) le = ex;
            else {
              le = $0;
              var Q = F0;
            }
          else
            ((g = p.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (p.type !== "checkbox" && p.type !== "radio")
                ? h && ds(h.elementType) && (le = bo)
                : (le = P0));
          if (le && (le = le(e, h))) {
            po(C, le, a, N);
            break e;
          }
          (Q && Q(e, p, h),
            e === "focusout" &&
              h &&
              p.type === "number" &&
              h.memoizedProps.value != null &&
              us(p, "number", p.value));
        }
        switch (((Q = h ? Ul(h) : window), e)) {
          case "focusin":
            (ho(Q) || Q.contentEditable === "true") &&
              ((al = Q), (Ts = h), (Xl = null));
            break;
          case "focusout":
            Xl = Ts = al = null;
            break;
          case "mousedown":
            Cs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Cs = !1), Co(C, a, N));
            break;
          case "selectionchange":
            if (ax) break;
          case "keydown":
          case "keyup":
            Co(C, a, N);
        }
        var Z;
        if (js)
          e: {
            switch (e) {
              case "compositionstart":
                var P = "onCompositionStart";
                break e;
              case "compositionend":
                P = "onCompositionEnd";
                break e;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break e;
            }
            P = void 0;
          }
        else
          tl
            ? xo(e, a) && (P = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (P = "onCompositionStart");
        (P &&
          (oo &&
            a.locale !== "ko" &&
            (tl || P !== "onCompositionStart"
              ? P === "onCompositionEnd" && tl && (Z = no())
              : ((ta = N),
                (ps = "value" in ta ? ta.value : ta.textContent),
                (tl = !0))),
          (Q = Di(h, P)),
          0 < Q.length &&
            ((P = new co(P, e, null, a, N)),
            C.push({ event: P, listeners: Q }),
            Z ? (P.data = Z) : ((Z = mo(a)), Z !== null && (P.data = Z)))),
          (Z = Z0 ? I0(e, a) : K0(e, a)) &&
            ((P = Di(h, "onBeforeInput")),
            0 < P.length &&
              ((Q = new co("onBeforeInput", "beforeinput", null, a, N)),
              C.push({ event: Q, listeners: P }),
              (Q.data = Z))),
          Qx(C, e, h, a, N));
      }
      $d(C, t);
    });
  }
  function bn(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Di(e, t) {
    for (var a = t + "Capture", l = []; e !== null;) {
      var i = e,
        s = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          s === null ||
          ((i = ql(e, a)),
          i != null && l.unshift(bn(e, i, s)),
          (i = ql(e, t)),
          i != null && l.push(bn(e, i, s))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Lx(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ef(e, t, a, l, i) {
    for (var s = t._reactName, c = []; a !== null && a !== l;) {
      var r = a,
        u = r.alternate,
        h = r.stateNode;
      if (((r = r.tag), u !== null && u === l)) break;
      ((r !== 5 && r !== 26 && r !== 27) ||
        h === null ||
        ((u = h),
        i
          ? ((h = ql(a, s)), h != null && c.unshift(bn(a, h, u)))
          : i || ((h = ql(a, s)), h != null && c.push(bn(a, h, u)))),
        (a = a.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var Vx = /\r\n?/g,
    Xx = /\u0000|\uFFFD/g;
  function tf(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Vx,
        `
`,
      )
      .replace(Xx, "");
  }
  function af(e, t) {
    return ((t = tf(t)), tf(e) === t);
  }
  function fe(e, t, a, l, i, s) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || $a(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            $a(e, "" + l);
        break;
      case "className":
        Un(e, "class", l);
        break;
      case "tabIndex":
        Un(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Un(e, a, l);
        break;
      case "style":
        to(e, l, s);
        break;
      case "data":
        if (t !== "object") {
          Un(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((l = Rn("" + l)), e.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof s == "function" &&
            (a === "formAction"
              ? (t !== "input" && fe(e, t, "name", i.name, i, null),
                fe(e, t, "formEncType", i.formEncType, i, null),
                fe(e, t, "formMethod", i.formMethod, i, null),
                fe(e, t, "formTarget", i.formTarget, i, null))
              : (fe(e, t, "encType", i.encType, i, null),
                fe(e, t, "method", i.method, i, null),
                fe(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((l = Rn("" + l)), e.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (e.onclick = _t);
        break;
      case "onScroll":
        l != null && W("scroll", e);
        break;
      case "onScrollEnd":
        l != null && W("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = Rn("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "" + l)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(a, l)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        (W("beforetoggle", e), W("toggle", e), Hn(e, "popover", l));
        break;
      case "xlinkActuate":
        Ot(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        Ot(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        Ot(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        Ot(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        Ot(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        Ot(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        Ot(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        Ot(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        Ot(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Hn(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = y0.get(a) || a), Hn(e, a, l));
    }
  }
  function Fc(e, t, a, l, i, s) {
    switch (a) {
      case "style":
        to(e, l, s);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? $a(e, l)
          : (typeof l == "number" || typeof l == "bigint") && $a(e, "" + l);
        break;
      case "onScroll":
        l != null && W("scroll", e);
        break;
      case "onScrollEnd":
        l != null && W("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = _t);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Zr.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((i = a.endsWith("Capture")),
              (t = a.slice(2, i ? a.length - 7 : void 0)),
              (s = e[Xe] || null),
              (s = s != null ? s[a] : null),
              typeof s == "function" && e.removeEventListener(t, s, i),
              typeof l == "function")
            ) {
              (typeof s != "function" &&
                s !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, i));
              break e;
            }
            a in e
              ? (e[a] = l)
              : l === !0
                ? e.setAttribute(a, "")
                : Hn(e, a, l);
          }
    }
  }
  function qe(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (W("error", e), W("load", e));
        var l = !1,
          i = !1,
          s;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var c = a[s];
            if (c != null)
              switch (s) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  fe(e, t, s, c, a, null);
              }
          }
        (i && fe(e, t, "srcSet", a.srcSet, a, null),
          l && fe(e, t, "src", a.src, a, null));
        return;
      case "input":
        W("invalid", e);
        var r = (s = c = i = null),
          u = null,
          h = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var N = a[l];
            if (N != null)
              switch (l) {
                case "name":
                  i = N;
                  break;
                case "type":
                  c = N;
                  break;
                case "checked":
                  u = N;
                  break;
                case "defaultChecked":
                  h = N;
                  break;
                case "value":
                  s = N;
                  break;
                case "defaultValue":
                  r = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(o(137, t));
                  break;
                default:
                  fe(e, t, l, N, a, null);
              }
          }
        Fr(e, s, r, u, h, c, i, !1);
        return;
      case "select":
        (W("invalid", e), (l = c = s = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((r = a[i]), r != null))
            switch (i) {
              case "value":
                s = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "multiple":
                l = r;
              default:
                fe(e, t, i, r, a, null);
            }
        ((t = s),
          (a = c),
          (e.multiple = !!l),
          t != null ? Fa(e, !!l, t, !1) : a != null && Fa(e, !!l, a, !0));
        return;
      case "textarea":
        (W("invalid", e), (s = i = l = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((r = a[c]), r != null))
            switch (c) {
              case "value":
                l = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "children":
                s = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                fe(e, t, c, r, a, null);
            }
        Pr(e, l, i, s);
        return;
      case "option":
        for (u in a)
          if (a.hasOwnProperty(u) && ((l = a[u]), l != null))
            switch (u) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                fe(e, t, u, l, a, null);
            }
        return;
      case "dialog":
        (W("beforetoggle", e), W("toggle", e), W("cancel", e), W("close", e));
        break;
      case "iframe":
      case "object":
        W("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < pn.length; l++) W(pn[l], e);
        break;
      case "image":
        (W("error", e), W("load", e));
        break;
      case "details":
        W("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (W("error", e), W("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in a)
          if (a.hasOwnProperty(h) && ((l = a[h]), l != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                fe(e, t, h, l, a, null);
            }
        return;
      default:
        if (ds(t)) {
          for (N in a)
            a.hasOwnProperty(N) &&
              ((l = a[N]), l !== void 0 && Fc(e, t, N, l, a, void 0));
          return;
        }
    }
    for (r in a)
      a.hasOwnProperty(r) && ((l = a[r]), l != null && fe(e, t, r, l, a, null));
  }
  function Zx(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          s = null,
          c = null,
          r = null,
          u = null,
          h = null,
          N = null;
        for (g in a) {
          var C = a[g];
          if (a.hasOwnProperty(g) && C != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                u = C;
              default:
                l.hasOwnProperty(g) || fe(e, t, g, null, l, C);
            }
        }
        for (var p in l) {
          var g = l[p];
          if (((C = a[p]), l.hasOwnProperty(p) && (g != null || C != null)))
            switch (p) {
              case "type":
                s = g;
                break;
              case "name":
                i = g;
                break;
              case "checked":
                h = g;
                break;
              case "defaultChecked":
                N = g;
                break;
              case "value":
                c = g;
                break;
              case "defaultValue":
                r = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(o(137, t));
                break;
              default:
                g !== C && fe(e, t, p, g, l, C);
            }
        }
        os(e, c, r, u, h, N, s, i);
        return;
      case "select":
        g = c = r = p = null;
        for (s in a)
          if (((u = a[s]), a.hasOwnProperty(s) && u != null))
            switch (s) {
              case "value":
                break;
              case "multiple":
                g = u;
              default:
                l.hasOwnProperty(s) || fe(e, t, s, null, l, u);
            }
        for (i in l)
          if (
            ((s = l[i]),
            (u = a[i]),
            l.hasOwnProperty(i) && (s != null || u != null))
          )
            switch (i) {
              case "value":
                p = s;
                break;
              case "defaultValue":
                r = s;
                break;
              case "multiple":
                c = s;
              default:
                s !== u && fe(e, t, i, s, l, u);
            }
        ((t = r),
          (a = c),
          (l = g),
          p != null
            ? Fa(e, !!a, p, !1)
            : !!l != !!a &&
              (t != null ? Fa(e, !!a, t, !0) : Fa(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = p = null;
        for (r in a)
          if (
            ((i = a[r]),
            a.hasOwnProperty(r) && i != null && !l.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                fe(e, t, r, null, l, i);
            }
        for (c in l)
          if (
            ((i = l[c]),
            (s = a[c]),
            l.hasOwnProperty(c) && (i != null || s != null))
          )
            switch (c) {
              case "value":
                p = i;
                break;
              case "defaultValue":
                g = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== s && fe(e, t, c, i, l, s);
            }
        $r(e, p, g);
        return;
      case "option":
        for (var q in a)
          if (
            ((p = a[q]),
            a.hasOwnProperty(q) && p != null && !l.hasOwnProperty(q))
          )
            switch (q) {
              case "selected":
                e.selected = !1;
                break;
              default:
                fe(e, t, q, null, l, p);
            }
        for (u in l)
          if (
            ((p = l[u]),
            (g = a[u]),
            l.hasOwnProperty(u) && p !== g && (p != null || g != null))
          )
            switch (u) {
              case "selected":
                e.selected =
                  p && typeof p != "function" && typeof p != "symbol";
                break;
              default:
                fe(e, t, u, p, l, g);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in a)
          ((p = a[Y]),
            a.hasOwnProperty(Y) &&
              p != null &&
              !l.hasOwnProperty(Y) &&
              fe(e, t, Y, null, l, p));
        for (h in l)
          if (
            ((p = l[h]),
            (g = a[h]),
            l.hasOwnProperty(h) && p !== g && (p != null || g != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(o(137, t));
                break;
              default:
                fe(e, t, h, p, l, g);
            }
        return;
      default:
        if (ds(t)) {
          for (var xe in a)
            ((p = a[xe]),
              a.hasOwnProperty(xe) &&
                p !== void 0 &&
                !l.hasOwnProperty(xe) &&
                Fc(e, t, xe, void 0, l, p));
          for (N in l)
            ((p = l[N]),
              (g = a[N]),
              !l.hasOwnProperty(N) ||
                p === g ||
                (p === void 0 && g === void 0) ||
                Fc(e, t, N, p, l, g));
          return;
        }
    }
    for (var x in a)
      ((p = a[x]),
        a.hasOwnProperty(x) &&
          p != null &&
          !l.hasOwnProperty(x) &&
          fe(e, t, x, null, l, p));
    for (C in l)
      ((p = l[C]),
        (g = a[C]),
        !l.hasOwnProperty(C) ||
          p === g ||
          (p == null && g == null) ||
          fe(e, t, C, p, l, g));
  }
  function lf(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Ix() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0;
        l < a.length;
        l++
      ) {
        var i = a[l],
          s = i.transferSize,
          c = i.initiatorType,
          r = i.duration;
        if (s && r && lf(c)) {
          for (c = 0, r = i.responseEnd, l += 1; l < a.length; l++) {
            var u = a[l],
              h = u.startTime;
            if (h > r) break;
            var N = u.transferSize,
              C = u.initiatorType;
            N &&
              lf(C) &&
              ((u = u.responseEnd), (c += N * (u < r ? 1 : (r - h) / (u - h))));
          }
          if ((--l, (t += (8 * (s + c)) / (i.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var $c = null,
    Pc = null;
  function Oi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function nf(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function sf(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function er(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var tr = null;
  function Kx() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === tr
        ? !1
        : ((tr = e), !0)
      : ((tr = null), !1);
  }
  var cf = typeof setTimeout == "function" ? setTimeout : void 0,
    Jx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    rf = typeof Promise == "function" ? Promise : void 0,
    Wx =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof rf < "u"
          ? function (e) {
              return rf.resolve(null).then(e).catch(Fx);
            }
          : cf;
  function Fx(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ga(e) {
    return e === "head";
  }
  function of(e, t) {
    var a = t,
      l = 0;
    do {
      var i = a.nextSibling;
      if ((e.removeChild(a), i && i.nodeType === 8))
        if (((a = i.data), a === "/$" || a === "/&")) {
          if (l === 0) {
            (e.removeChild(i), El(t));
            return;
          }
          l--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          l++;
        else if (a === "html") gn(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), gn(a));
          for (var s = a.firstChild; s;) {
            var c = s.nextSibling,
              r = s.nodeName;
            (s[Hl] ||
              r === "SCRIPT" ||
              r === "STYLE" ||
              (r === "LINK" && s.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(s),
              (s = c));
          }
        } else a === "body" && gn(e.ownerDocument.body);
      a = i;
    } while (a);
    El(t);
  }
  function uf(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((a = l.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = l;
    } while (a);
  }
  function ar(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ar(a), cs(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function $x(e, t, a, l) {
    for (; e.nodeType === 1;) {
      var i = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Hl])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((s = e.getAttribute("rel")),
                s === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                s !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((s = e.getAttribute("src")),
                (s !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  s &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var s = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === s) return e;
      } else return e;
      if (((e = gt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Px(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = gt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function df(e, t) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = gt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function lr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function nr(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function em(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var l = function () {
        (t(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function gt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var ir = null;
  function ff(e) {
    e = e.nextSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return gt(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function xf(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function mf(e, t, a) {
    switch (((t = Oi(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function gn(e) {
    for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
    cs(e);
  }
  var yt = new Map(),
    hf = new Set();
  function _i(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Wt = O.d;
  O.d = { f: tm, r: am, D: lm, C: nm, L: im, m: sm, X: rm, S: cm, M: om };
  function tm() {
    var e = Wt.f(),
      t = Ti();
    return e || t;
  }
  function am(e) {
    var t = Ka(e);
    t !== null && t.tag === 5 && t.type === "form" ? ku(t) : Wt.r(e);
  }
  var Cl = typeof document > "u" ? null : document;
  function pf(e, t, a) {
    var l = Cl;
    if (l && typeof t == "string" && t) {
      var i = dt(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof a == "string" && (i += '[crossorigin="' + a + '"]'),
        hf.has(i) ||
          (hf.add(i),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement("link")),
            qe(t, "link", e),
            ze(t),
            l.head.appendChild(t))));
    }
  }
  function lm(e) {
    (Wt.D(e), pf("dns-prefetch", e, null));
  }
  function nm(e, t) {
    (Wt.C(e, t), pf("preconnect", e, t));
  }
  function im(e, t, a) {
    Wt.L(e, t, a);
    var l = Cl;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + dt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((i += '[imagesrcset="' + dt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (i += '[imagesizes="' + dt(a.imageSizes) + '"]'))
        : (i += '[href="' + dt(e) + '"]');
      var s = i;
      switch (t) {
        case "style":
          s = Al(e);
          break;
        case "script":
          s = Ml(e);
      }
      yt.has(s) ||
        ((e = U(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        yt.set(s, e),
        l.querySelector(i) !== null ||
          (t === "style" && l.querySelector(yn(s))) ||
          (t === "script" && l.querySelector(vn(s))) ||
          ((t = l.createElement("link")),
          qe(t, "link", e),
          ze(t),
          l.head.appendChild(t)));
    }
  }
  function sm(e, t) {
    Wt.m(e, t);
    var a = Cl;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + dt(l) + '"][href="' + dt(e) + '"]',
        s = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = Ml(e);
      }
      if (
        !yt.has(s) &&
        ((e = U({ rel: "modulepreload", href: e }, t)),
        yt.set(s, e),
        a.querySelector(i) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(vn(s))) return;
        }
        ((l = a.createElement("link")),
          qe(l, "link", e),
          ze(l),
          a.head.appendChild(l));
      }
    }
  }
  function cm(e, t, a) {
    Wt.S(e, t, a);
    var l = Cl;
    if (l && e) {
      var i = Ja(l).hoistableStyles,
        s = Al(e);
      t = t || "default";
      var c = i.get(s);
      if (!c) {
        var r = { loading: 0, preload: null };
        if ((c = l.querySelector(yn(s)))) r.loading = 5;
        else {
          ((e = U({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = yt.get(s)) && sr(e, a));
          var u = (c = l.createElement("link"));
          (ze(u),
            qe(u, "link", e),
            (u._p = new Promise(function (h, N) {
              ((u.onload = h), (u.onerror = N));
            })),
            u.addEventListener("load", function () {
              r.loading |= 1;
            }),
            u.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            Hi(c, t, l));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: r }),
          i.set(s, c));
      }
    }
  }
  function rm(e, t) {
    Wt.X(e, t);
    var a = Cl;
    if (a && e) {
      var l = Ja(a).hoistableScripts,
        i = Ml(e),
        s = l.get(i);
      s ||
        ((s = a.querySelector(vn(i))),
        s ||
          ((e = U({ src: e, async: !0 }, t)),
          (t = yt.get(i)) && cr(e, t),
          (s = a.createElement("script")),
          ze(s),
          qe(s, "link", e),
          a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        l.set(i, s));
    }
  }
  function om(e, t) {
    Wt.M(e, t);
    var a = Cl;
    if (a && e) {
      var l = Ja(a).hoistableScripts,
        i = Ml(e),
        s = l.get(i);
      s ||
        ((s = a.querySelector(vn(i))),
        s ||
          ((e = U({ src: e, async: !0, type: "module" }, t)),
          (t = yt.get(i)) && cr(e, t),
          (s = a.createElement("script")),
          ze(s),
          qe(s, "link", e),
          a.head.appendChild(s)),
        (s = { type: "script", instance: s, count: 1, state: null }),
        l.set(i, s));
    }
  }
  function bf(e, t, a, l) {
    var i = (i = K.current) ? _i(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Al(a.href)),
            (a = Ja(i).hoistableStyles),
            (l = a.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = Al(a.href);
          var s = Ja(i).hoistableStyles,
            c = s.get(e);
          if (
            (c ||
              ((i = i.ownerDocument || i),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              s.set(e, c),
              (s = i.querySelector(yn(e))) &&
                !s._p &&
                ((c.instance = s), (c.state.loading = 5)),
              yt.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                yt.set(e, a),
                s || um(i, e, a, c.state))),
            t && l === null)
          )
            throw Error(o(528, ""));
          return c;
        }
        if (t && l !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ml(a)),
              (a = Ja(i).hoistableScripts),
              (l = a.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function Al(e) {
    return 'href="' + dt(e) + '"';
  }
  function yn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function gf(e) {
    return U({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function um(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        qe(t, "link", a),
        ze(t),
        e.head.appendChild(t));
  }
  function Ml(e) {
    return '[src="' + dt(e) + '"]';
  }
  function vn(e) {
    return "script[async]" + e;
  }
  function yf(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + dt(a.href) + '"]');
          if (l) return ((t.instance = l), ze(l), l);
          var i = U({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            ze(l),
            qe(l, "style", i),
            Hi(l, a.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          i = Al(a.href);
          var s = e.querySelector(yn(i));
          if (s) return ((t.state.loading |= 4), (t.instance = s), ze(s), s);
          ((l = gf(a)),
            (i = yt.get(i)) && sr(l, i),
            (s = (e.ownerDocument || e).createElement("link")),
            ze(s));
          var c = s;
          return (
            (c._p = new Promise(function (r, u) {
              ((c.onload = r), (c.onerror = u));
            })),
            qe(s, "link", l),
            (t.state.loading |= 4),
            Hi(s, a.precedence, e),
            (t.instance = s)
          );
        case "script":
          return (
            (s = Ml(a.src)),
            (i = e.querySelector(vn(s)))
              ? ((t.instance = i), ze(i), i)
              : ((l = a),
                (i = yt.get(s)) && ((l = U({}, a)), cr(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                ze(i),
                qe(i, "link", l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Hi(l, a.precedence, e));
    return t.instance;
  }
  function Hi(e, t, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = l.length ? l[l.length - 1] : null,
        s = i,
        c = 0;
      c < l.length;
      c++
    ) {
      var r = l[c];
      if (r.dataset.precedence === t) s = r;
      else if (s !== i) break;
    }
    s
      ? s.parentNode.insertBefore(e, s.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function sr(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function cr(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ui = null;
  function vf(e, t, a) {
    if (Ui === null) {
      var l = new Map(),
        i = (Ui = new Map());
      i.set(a, l);
    } else ((i = Ui), (l = i.get(a)), l || ((l = new Map()), i.set(a, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), i = 0;
      i < a.length;
      i++
    ) {
      var s = a[i];
      if (
        !(
          s[Hl] ||
          s[Oe] ||
          (e === "link" && s.getAttribute("rel") === "stylesheet")
        ) &&
        s.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = s.getAttribute(t) || "";
        c = e + c;
        var r = l.get(c);
        r ? r.push(s) : l.set(c, [s]);
      }
    }
    return l;
  }
  function jf(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function dm(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled),
              typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Nf(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function fm(e, t, a, l) {
    if (
      a.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var i = Al(l.href),
          s = t.querySelector(yn(i));
        if (s) {
          ((t = s._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = qi.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = s),
            ze(s));
          return;
        }
        ((s = t.ownerDocument || t),
          (l = gf(l)),
          (i = yt.get(i)) && sr(l, i),
          (s = s.createElement("link")),
          ze(s));
        var c = s;
        ((c._p = new Promise(function (r, u) {
          ((c.onload = r), (c.onerror = u));
        })),
          qe(s, "link", l),
          (a.instance = s));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = qi.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var rr = 0;
  function xm(e, t) {
    return (
      e.stylesheets && e.count === 0 && Qi(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Qi(e, e.stylesheets), e.unsuspend)) {
                var s = e.unsuspend;
                ((e.unsuspend = null), s());
              }
            }, 6e4 + t);
            0 < e.imgBytes && rr === 0 && (rr = 62500 * Ix());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Qi(e, e.stylesheets), e.unsuspend))
                ) {
                  var s = e.unsuspend;
                  ((e.unsuspend = null), s());
                }
              },
              (e.imgBytes > rr ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function qi() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Qi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Ri = null;
  function Qi(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Ri = new Map()),
        t.forEach(mm, e),
        (Ri = null),
        qi.call(e)));
  }
  function mm(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Ri.get(e);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Ri.set(e, a));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            s = 0;
          s < i.length;
          s++
        ) {
          var c = i[s];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (l = c));
        }
        l && a.set(null, l);
      }
      ((i = t.instance),
        (c = i.getAttribute("data-precedence")),
        (s = a.get(c) || l),
        s === l && a.set(null, i),
        a.set(c, i),
        this.count++,
        (l = qi.bind(this)),
        i.addEventListener("load", l),
        i.addEventListener("error", l),
        s
          ? s.parentNode.insertBefore(i, s.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var jn = {
    $$typeof: Re,
    Provider: null,
    Consumer: null,
    _currentValue: G,
    _currentValue2: G,
    _threadCount: 0,
  };
  function hm(e, t, a, l, i, s, c, r, u) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ls(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ls(0)),
      (this.hiddenUpdates = ls(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = s),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = u),
      (this.incompleteTransitions = new Map()));
  }
  function wf(e, t, a, l, i, s, c, r, u, h, N, C) {
    return (
      (e = new hm(e, t, a, c, u, h, N, C, r)),
      (t = 1),
      s === !0 && (t |= 24),
      (s = lt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (t = Ys()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (s.memoizedState = { element: l, isDehydrated: a, cache: t }),
      Xs(s),
      e
    );
  }
  function Sf(e) {
    return e ? ((e = il), e) : il;
  }
  function Tf(e, t, a, l, i, s) {
    ((i = Sf(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = ca(t)),
      (l.payload = { element: a }),
      (s = s === void 0 ? null : s),
      s !== null && (l.callback = s),
      (a = ra(e, l, t)),
      a !== null && (Fe(a, e, t), $l(a, e, t)));
  }
  function Cf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function or(e, t) {
    (Cf(e, t), (e = e.alternate) && Cf(e, t));
  }
  function Af(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ka(e, 67108864);
      (t !== null && Fe(t, e, 67108864), or(e, 67108864));
    }
  }
  function Mf(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = rt();
      t = ns(t);
      var a = ka(e, t);
      (a !== null && Fe(a, e, t), or(e, t));
    }
  }
  var Bi = !0;
  function pm(e, t, a, l) {
    var i = w.T;
    w.T = null;
    var s = O.p;
    try {
      ((O.p = 2), ur(e, t, a, l));
    } finally {
      ((O.p = s), (w.T = i));
    }
  }
  function bm(e, t, a, l) {
    var i = w.T;
    w.T = null;
    var s = O.p;
    try {
      ((O.p = 8), ur(e, t, a, l));
    } finally {
      ((O.p = s), (w.T = i));
    }
  }
  function ur(e, t, a, l) {
    if (Bi) {
      var i = dr(l);
      if (i === null) (Wc(e, t, l, Yi, a), zf(e, l));
      else if (ym(i, e, t, a, l)) l.stopPropagation();
      else if ((zf(e, l), t & 4 && -1 < gm.indexOf(e))) {
        for (; i !== null;) {
          var s = Ka(i);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (((s = s.stateNode), s.current.memoizedState.isDehydrated)) {
                  var c = Ca(s.pendingLanes);
                  if (c !== 0) {
                    var r = s;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c;) {
                      var u = 1 << (31 - tt(c));
                      ((r.entanglements[1] |= u), (c &= ~u));
                    }
                    (kt(s), (ie & 6) === 0 && ((wi = Pe() + 500), hn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((r = ka(s, 2)), r !== null && Fe(r, s, 2), Ti(), or(s, 2));
            }
          if (((s = dr(l)), s === null && Wc(e, t, l, Yi, a), s === i)) break;
          i = s;
        }
        i !== null && l.stopPropagation();
      } else Wc(e, t, l, null, a);
    }
  }
  function dr(e) {
    return ((e = xs(e)), fr(e));
  }
  var Yi = null;
  function fr(e) {
    if (((Yi = null), (e = Ia(e)), e !== null)) {
      var t = E(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = v(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = H(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Yi = e), null);
  }
  function Ef(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (l0()) {
          case Hr:
            return 2;
          case Ur:
            return 8;
          case zn:
          case n0:
            return 32;
          case qr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var xr = !1,
    ya = null,
    va = null,
    ja = null,
    Nn = new Map(),
    wn = new Map(),
    Na = [],
    gm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function zf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ya = null;
        break;
      case "dragenter":
      case "dragleave":
        va = null;
        break;
      case "mouseover":
      case "mouseout":
        ja = null;
        break;
      case "pointerover":
      case "pointerout":
        Nn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(t.pointerId);
    }
  }
  function Sn(e, t, a, l, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = Ka(t)), t !== null && Af(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function ym(e, t, a, l, i) {
    switch (t) {
      case "focusin":
        return ((ya = Sn(ya, e, t, a, l, i)), !0);
      case "dragenter":
        return ((va = Sn(va, e, t, a, l, i)), !0);
      case "mouseover":
        return ((ja = Sn(ja, e, t, a, l, i)), !0);
      case "pointerover":
        var s = i.pointerId;
        return (Nn.set(s, Sn(Nn.get(s) || null, e, t, a, l, i)), !0);
      case "gotpointercapture":
        return (
          (s = i.pointerId),
          wn.set(s, Sn(wn.get(s) || null, e, t, a, l, i)),
          !0
        );
    }
    return !1;
  }
  function kf(e) {
    var t = Ia(e.target);
    if (t !== null) {
      var a = E(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = v(a)), t !== null)) {
            ((e.blockedOn = t),
              Lr(e.priority, function () {
                Mf(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = H(a)), t !== null)) {
            ((e.blockedOn = t),
              Lr(e.priority, function () {
                Mf(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var a = dr(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((fs = l), a.target.dispatchEvent(l), (fs = null));
      } else return ((t = Ka(a)), t !== null && Af(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function Df(e, t, a) {
    Gi(e) && a.delete(t);
  }
  function vm() {
    ((xr = !1),
      ya !== null && Gi(ya) && (ya = null),
      va !== null && Gi(va) && (va = null),
      ja !== null && Gi(ja) && (ja = null),
      Nn.forEach(Df),
      wn.forEach(Df));
  }
  function Li(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      xr ||
        ((xr = !0),
        y.unstable_scheduleCallback(y.unstable_NormalPriority, vm)));
  }
  var Vi = null;
  function Of(e) {
    Vi !== e &&
      ((Vi = e),
      y.unstable_scheduleCallback(y.unstable_NormalPriority, function () {
        Vi === e && (Vi = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != "function") {
            if (fr(l || a) === null) continue;
            break;
          }
          var s = Ka(a);
          s !== null &&
            (e.splice(t, 3),
            (t -= 3),
            dc(s, { pending: !0, data: i, method: a.method, action: l }, l, i));
        }
      }));
  }
  function El(e) {
    function t(u) {
      return Li(u, e);
    }
    (ya !== null && Li(ya, e),
      va !== null && Li(va, e),
      ja !== null && Li(ja, e),
      Nn.forEach(t),
      wn.forEach(t));
    for (var a = 0; a < Na.length; a++) {
      var l = Na[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Na.length && ((a = Na[0]), a.blockedOn === null);)
      (kf(a), a.blockedOn === null && Na.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var i = a[l],
          s = a[l + 1],
          c = i[Xe] || null;
        if (typeof s == "function") c || Of(a);
        else if (c) {
          var r = null;
          if (s && s.hasAttribute("formAction")) {
            if (((i = s), (c = s[Xe] || null))) r = c.formAction;
            else if (fr(i) !== null) continue;
          } else r = c.action;
          (typeof r == "function" ? (a[l + 1] = r) : (a.splice(l, 3), (l -= 3)),
            Of(a));
        }
      }
  }
  function _f() {
    function e(s) {
      s.canIntercept &&
        s.info === "react-transition" &&
        s.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (i = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (i !== null && (i(), (i = null)), l || setTimeout(a, 20));
    }
    function a() {
      if (!l && !navigation.transition) {
        var s = navigation.currentEntry;
        s &&
          s.url != null &&
          navigation.navigate(s.url, {
            state: s.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        i = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            i !== null && (i(), (i = null)));
        }
      );
    }
  }
  function mr(e) {
    this._internalRoot = e;
  }
  ((Xi.prototype.render = mr.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        l = rt();
      Tf(a, l, e, t, null, null);
    }),
    (Xi.prototype.unmount = mr.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Tf(e.current, 2, null, e, null, null), Ti(), (t[Za] = null));
        }
      }));
  function Xi(e) {
    this._internalRoot = e;
  }
  Xi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Gr();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Na.length && t !== 0 && t < Na[a].priority; a++);
      (Na.splice(a, 0, e), a === 0 && kf(e));
    }
  };
  var Hf = D.version;
  if (Hf !== "19.2.8") throw Error(o(527, Hf, "19.2.8"));
  O.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = b(t)),
      (e = e !== null ? z(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var jm = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: w,
    reconcilerVersion: "19.2.8",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zi.isDisabled && Zi.supportsFiber)
      try {
        ((Dl = Zi.inject(jm)), (et = Zi));
      } catch {}
  }
  return (
    (Cn.createRoot = function (e, t) {
      if (!j(e)) throw Error(o(299));
      var a = !1,
        l = "",
        i = Yu,
        s = Gu,
        c = Lu;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (s = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = wf(e, 1, !1, null, null, a, l, null, i, s, c, _f)),
        (e[Za] = t.current),
        Jc(e),
        new mr(t)
      );
    }),
    (Cn.hydrateRoot = function (e, t, a) {
      if (!j(e)) throw Error(o(299));
      var l = !1,
        i = "",
        s = Yu,
        c = Gu,
        r = Lu,
        u = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (i = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (s = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (r = a.onRecoverableError),
          a.formState !== void 0 && (u = a.formState)),
        (t = wf(e, 1, !0, t, a ?? null, l, i, u, s, c, r, _f)),
        (t.context = Sf(null)),
        (a = t.current),
        (l = rt()),
        (l = ns(l)),
        (i = ca(l)),
        (i.callback = null),
        ra(a, i, l),
        (a = l),
        (t.current.lanes = a),
        _l(t, a),
        kt(t),
        (e[Za] = t.current),
        Jc(e),
        new Xi(t)
      );
    }),
    (Cn.version = "19.2.8"),
    Cn
  );
}
var Xf;
function km() {
  if (Xf) return br.exports;
  Xf = 1;
  function y() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y);
      } catch (D) {
        console.error(D);
      }
  }
  return (y(), (br.exports = zm()), br.exports);
}
var Dm = km();
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Om = (y) => y.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _m = (y) =>
    y.replace(/^([A-Z])|[\s-_]+(\w)/g, (D, M, o) =>
      o ? o.toUpperCase() : M.toLowerCase(),
    ),
  Zf = (y) => {
    const D = _m(y);
    return D.charAt(0).toUpperCase() + D.slice(1);
  },
  Jf = (...y) =>
    y
      .filter((D, M, o) => !!D && D.trim() !== "" && o.indexOf(D) === M)
      .join(" ")
      .trim(),
  Hm = (y) => {
    for (const D in y)
      if (D.startsWith("aria-") || D === "role" || D === "title") return !0;
  };
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Um = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qm = se.forwardRef(
  (
    {
      color: y = "currentColor",
      size: D = 24,
      strokeWidth: M = 2,
      absoluteStrokeWidth: o,
      className: j = "",
      children: E,
      iconNode: v,
      ...H
    },
    S,
  ) =>
    se.createElement(
      "svg",
      {
        ref: S,
        ...Um,
        width: D,
        height: D,
        stroke: y,
        strokeWidth: o ? (Number(M) * 24) / Number(D) : M,
        className: Jf("lucide", j),
        ...(!E && !Hm(H) && { "aria-hidden": "true" }),
        ...H,
      },
      [
        ...v.map(([b, z]) => se.createElement(b, z)),
        ...(Array.isArray(E) ? E : [E]),
      ],
    ),
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = (y, D) => {
  const M = se.forwardRef(({ className: o, ...j }, E) =>
    se.createElement(qm, {
      ref: E,
      iconNode: D,
      className: Jf(`lucide-${Om(Zf(y))}`, `lucide-${y}`, o),
      ...j,
    }),
  );
  return ((M.displayName = Zf(y)), M);
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rm = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  Qm = I("arrow-left", Rm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bm = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Ft = I("arrow-right", Bm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ym = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  zr = I("award", Ym);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  Lm = I("book-open", Gm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vm = [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
  ],
  jr = I("briefcase", Vm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xm = [
    ["path", { d: "M10 12h4", key: "a56b0p" }],
    ["path", { d: "M10 8h4", key: "1sr2af" }],
    ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2",
      },
    ],
    ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }],
  ],
  Ii = I("building-2", Xm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zm = [
    ["path", { d: "M12 10h.01", key: "1nrarc" }],
    ["path", { d: "M12 14h.01", key: "1etili" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["path", { d: "M16 10h.01", key: "1m94wz" }],
    ["path", { d: "M16 14h.01", key: "1gbofw" }],
    ["path", { d: "M16 6h.01", key: "1x0f13" }],
    ["path", { d: "M8 10h.01", key: "19clt8" }],
    ["path", { d: "M8 14h.01", key: "6423bh" }],
    ["path", { d: "M8 6h.01", key: "1dz90k" }],
    ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3", key: "cabbwy" }],
    [
      "rect",
      { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" },
    ],
  ],
  Im = I("building", Zm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Km = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  Nr = I("calendar", Km);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jm = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Wm = I("chevron-down", Jm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fm = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  $m = I("chevron-right", Fm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pm = [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]],
  eh = I("chevron-up", Pm);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const th = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  vt = I("circle-check", th);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ah = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  lh = I("clock", ah);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nh = [
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M17 20v2", key: "1rnc9c" }],
    ["path", { d: "M17 2v2", key: "11trls" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M2 17h2", key: "7oei6x" }],
    ["path", { d: "M2 7h2", key: "asdhe0" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "M20 17h2", key: "1fpfkl" }],
    ["path", { d: "M20 7h2", key: "1o8tra" }],
    ["path", { d: "M7 20v2", key: "4gnj0m" }],
    ["path", { d: "M7 2v2", key: "1i4yhu" }],
    [
      "rect",
      { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
    ],
    [
      "rect",
      { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
    ],
  ],
  wr = I("cpu", nh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ih = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  Wf = I("credit-card", ih);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sh = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  If = I("dollar-sign", sh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ch = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  rh = I("download", ch);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oh = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  uh = I("eye", oh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dh = [
    [
      "path",
      {
        d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
        key: "j76jl0",
      },
    ],
    ["path", { d: "M22 10v6", key: "1lu8f3" }],
    ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
  ],
  fh = I("graduation-cap", dh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xh = [
    ["path", { d: "m11 17 2 2a1 1 0 1 0 3-3", key: "efffak" }],
    [
      "path",
      {
        d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",
        key: "9pr0kb",
      },
    ],
    ["path", { d: "m21 3 1 11h-2", key: "1tisrp" }],
    ["path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", key: "1uvwmv" }],
    ["path", { d: "M3 4h8", key: "1ep09j" }],
  ],
  Sr = I("handshake", xh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mh = [
    [
      "path",
      {
        d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",
        key: "17lmqv",
      },
    ],
  ],
  hh = I("heart-handshake", mh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ph = [
    [
      "path",
      {
        d: "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",
        key: "1pdavp",
      },
    ],
    ["path", { d: "M20.054 15.987H3.946", key: "14rxg9" }],
  ],
  bh = I("laptop", ph);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gh = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  yh = I("layers", gh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vh = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ],
  Ki = I("lightbulb", vh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jh = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Ff = I("mail", jh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nh = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Tr = I("map-pin", Nh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wh = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  Sh = I("menu", wh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Th = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  $f = I("phone", Th);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ch = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  An = I("rocket", Ch);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ah = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  kr = I("send", Ah);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mh = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    [
      "line",
      { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
    ],
    [
      "line",
      { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
    ],
  ],
  Eh = I("share-2", Mh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zh = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Ji = I("shield-check", zh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kh = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  zl = I("sparkles", kh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dh = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  Oh = I("target", Dh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _h = [
    [
      "path",
      {
        d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
        key: "1n3hpd",
      },
    ],
    [
      "path",
      {
        d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
        key: "rfe1zi",
      },
    ],
    ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    [
      "path",
      {
        d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
        key: "1mhfuq",
      },
    ],
    ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }],
  ],
  Cr = I("trophy", _h);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hh = [
    ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Uh = I("user-check", Hh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qh = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  Rh = I("user", qh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qh = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  Mn = I("users", Qh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bh = [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
        key: "1ngwbx",
      },
    ],
  ],
  Dr = I("wrench", Bh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yh = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Wi = I("x", Yh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gh = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  Pf = I("zap", Gh),
  Lh = ({
    activePage: y,
    onNavigate: D,
    onOpenInnovate: M,
    onOpenJoin: o,
    onOpenCollaborate: j,
  }) => {
    const [E, v] = se.useState(!1),
      [H, S] = se.useState(!1);
    se.useEffect(() => {
      const z = () => {
        v(window.scrollY > 20);
      };
      return (
        window.addEventListener("scroll", z),
        () => window.removeEventListener("scroll", z)
      );
    }, []);
    const b = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "leadership", label: "Leadership" },
      { id: "students", label: "For Students" },
      { id: "programs", label: "Programs" },
      { id: "innovation", label: "Innovation" },
      { id: "partners", label: "Partners" },
      { id: "events", label: "Events" },
      { id: "resources", label: "Resources" },
      { id: "contact", label: "Contact" },
    ];
    return n.jsxs(n.Fragment, {
      children: [
        n.jsx("div", {
          className:
            "bg-gradient-to-r from-violet-950 via-slate-900 to-indigo-950 border-b border-violet-800/30 text-[11px] py-1.5 px-4 text-center text-slate-300",
          children: n.jsxs("div", {
            className:
              "container mx-auto flex items-center justify-center gap-3",
            children: [
              n.jsxs("span", {
                className:
                  "inline-flex items-center gap-1 font-semibold text-violet-300",
                children: [
                  n.jsx(zl, { className: "w-3 h-3 text-cyan-400" }),
                  "HackSpark 2026 Innovation Challenge Open",
                ],
              }),
              n.jsx("span", {
                className: "hidden sm:inline text-slate-500",
                children: "•",
              }),
              n.jsx("span", {
                className: "hidden md:inline text-slate-400",
                children:
                  "₹2.5L Grants for Student POCs Across TSEC, TSDC, TIAT & TIHM",
              }),
              n.jsxs("button", {
                onClick: () => D("events"),
                className:
                  "text-cyan-400 hover:text-cyan-300 font-bold underline inline-flex items-center gap-0.5 ml-1",
                children: ["Explore ", n.jsx(Ft, { className: "w-2.5 h-2.5" })],
              }),
            ],
          }),
        }),
        n.jsxs("header", {
          className: `sticky top-0 z-40 w-full transition-all duration-300 ${E ? "bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/50 py-3" : "bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-3.5"}`,
          children: [
            n.jsxs("div", {
              className:
                "container mx-auto px-4 md:px-8 flex items-center justify-between",
              children: [
                n.jsxs("button", {
                  onClick: () => D("home"),
                  className:
                    "flex items-center space-x-3 text-left group transition",
                  children: [
                    n.jsx("div", {
                      className:
                        "w-9 h-9 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/20 group-hover:scale-105 transition",
                      children: "W",
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsxs("div", {
                          className:
                            "font-display text-xl font-bold tracking-tighter text-white flex items-center",
                          children: [
                            "WIN",
                            n.jsx("span", {
                              className: "text-violet-400 font-light ml-0.5",
                              children: "Qubit",
                            }),
                          ],
                        }),
                        n.jsx("div", {
                          className:
                            "text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-semibold -mt-1",
                          children: "Powered by InQubit",
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsx("nav", {
                  className:
                    "hidden xl:flex items-center space-x-6 text-[11px] font-semibold uppercase tracking-[0.18em]",
                  children: b.map((z) => {
                    const U = y === z.id;
                    return n.jsx(
                      "button",
                      {
                        onClick: () => D(z.id),
                        className: `transition-all duration-200 py-1 ${U ? "text-cyan-400 border-b-2 border-cyan-400 font-bold" : "text-gray-400 hover:text-white"}`,
                        children: z.label,
                      },
                      z.id,
                    );
                  }),
                }),
                n.jsxs("div", {
                  className: "hidden lg:flex items-center space-x-3",
                  children: [
                    n.jsxs("button", {
                      onClick: j,
                      className:
                        "text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 transition flex items-center gap-1.5",
                      title: "Collaborate / Partner",
                      children: [
                        n.jsx(Sr, {
                          className: "w-3.5 h-3.5 text-emerald-400",
                        }),
                        n.jsx("span", { children: "Partner" }),
                      ],
                    }),
                    n.jsx("button", {
                      onClick: M,
                      className:
                        "border border-cyan-500/30 text-cyan-400 px-4 py-1.5 rounded-full text-[10px] font-bold hover:bg-cyan-500 hover:text-black transition uppercase tracking-wider",
                      children: "INNOVATE",
                    }),
                    n.jsx("button", {
                      onClick: o,
                      className:
                        "bg-violet-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-lg shadow-violet-600/20 hover:scale-105 transition uppercase tracking-wider",
                      children: "JOIN NOW",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "flex items-center gap-2 xl:hidden",
                  children: [
                    n.jsx("button", {
                      onClick: M,
                      className:
                        "sm:inline-flex hidden px-3 py-1.5 rounded-full text-[11px] font-bold text-cyan-400 border border-cyan-500/40",
                      children: "INNOVATE",
                    }),
                    n.jsx("button", {
                      onClick: () => S(!H),
                      className:
                        "p-2 text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800",
                      "aria-label": "Toggle navigation",
                      children: H
                        ? n.jsx(Wi, { className: "w-6 h-6" })
                        : n.jsx(Sh, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              ],
            }),
            H &&
              n.jsxs("div", {
                className:
                  "xl:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200",
                children: [
                  n.jsx("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: b.map((z) =>
                      n.jsx(
                        "button",
                        {
                          onClick: () => {
                            (D(z.id), S(!1));
                          },
                          className: `px-3 py-2 rounded-lg text-left text-xs font-semibold ${y === z.id ? "bg-violet-600 text-white font-bold" : "text-slate-300 hover:bg-slate-900"}`,
                          children: z.label,
                        },
                        z.id,
                      ),
                    ),
                  }),
                  n.jsxs("div", {
                    className:
                      "pt-3 border-t border-slate-800 flex flex-col gap-2",
                    children: [
                      n.jsx("button", {
                        onClick: () => {
                          (M(), S(!1));
                        },
                        className:
                          "w-full py-2.5 rounded-xl text-xs font-bold text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-black",
                        children: "SUBMIT IDEA (INNOVATE)",
                      }),
                      n.jsx("button", {
                        onClick: () => {
                          (o(), S(!1));
                        },
                        className:
                          "w-full py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500",
                        children: "JOIN WINQUBIT (₹500/YEAR)",
                      }),
                      n.jsxs("button", {
                        onClick: () => {
                          (j(), S(!1));
                        },
                        className:
                          "w-full py-2 rounded-xl text-xs font-semibold text-emerald-400 hover:bg-slate-900 flex items-center justify-center gap-1.5",
                        children: [
                          n.jsx(Sr, { className: "w-4 h-4" }),
                          " Partner With Us",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Vh = [
    {
      id: "vishram-bapat",
      name: "Mr. Vishram Bapat",
      designation: "Management Committee Member",
      organization: "WINQubit & InQubit Ecosystem",
      photoUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Pioneering strategist guiding ecosystem growth, institutional alignments, and high-impact incubator governance across higher education.",
      focusAreas: [
        "Ecosystem Governance",
        "Strategic Growth",
        "Incubator Alignment",
      ],
    },
    {
      id: "dhruv-singh",
      name: "Mr. Dhruv Singh",
      designation: "Management Committee Member",
      organization: "WINQubit & InQubit Ecosystem",
      photoUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Driving deep-tech ventures, pre-incubation pipelines, and industry challenge integration across collaborative student innovation hubs.",
      focusAreas: [
        "Deep-Tech Pipelines",
        "Industry Linkages",
        "Innovation Policy",
      ],
    },
    {
      id: "harnish-master",
      name: "Mr. Harnish Master",
      designation: "Management Committee Member",
      organization: "WINQubit & InQubit Ecosystem",
      photoUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Orchestrating venture enablement, early-stage prototype grants, and scalable entrepreneurship support from campus to market.",
      focusAreas: [
        "Venture Capital Readiness",
        "Prototype Grant Allocation",
        "Operational Strategy",
      ],
    },
  ],
  Xh = [
    {
      title: "Overall Strategy & Direction",
      description:
        "Setting network-wide milestones, long-term vision, and strategic goals for student innovation.",
    },
    {
      title: "Policy & Governance",
      description:
        "Enforcing ethical standards, inclusion mandates, intellectual property guidelines, and quality frameworks.",
    },
    {
      title: "Budget & Prototype Grants",
      description:
        "Approving institutional funding, proof-of-concept grants, and specialized hardware/cloud allowances.",
    },
    {
      title: "Institutional & Industry Partnerships",
      description:
        "Expanding the campus partner network and bringing Fortune 500 corporate challenges directly to students.",
    },
    {
      title: "Strategic Alignment with InQubit",
      description:
        "Managing the seamless pipeline for validated student prototypes moving into full-stage InQubit incubation.",
    },
    {
      title: "Network Expansion & Performance",
      description:
        "Monitoring Year 1 growth metrics: 500+ members, 50 ideas, 25 prototypes, and 10 viable campus startups.",
    },
  ],
  Va = [
    {
      id: "tsec",
      name: "Thakur Shyamnarayan Engineering College",
      shortName: "TSEC",
      tagline: "Engineering & Advanced Technology Campus",
      badgeColor: "border-violet-500/40 text-violet-400 bg-violet-500/10",
      accentColor: "from-violet-600 to-indigo-600",
      description:
        "Leading breakthroughs in Artificial Intelligence, Robotics, IoT, Cybersecurity, and Software Engineering.",
      campusLocation: "Kandivali (East), Mumbai",
      established: "Estd. 2014",
      faculty: [
        {
          id: "tsec-f1",
          name: "Dr. Principal Name",
          designation: "Principal",
          roleInWINQubit: "Institutional Head & Patron",
          institution: "Thakur Shyamnarayan Engineering College",
          department: "Academic Leadership",
          photoUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tsec-f2",
          name: "Dr. Nirmala Kamble",
          designation: "Faculty Coordinator & Mentor",
          roleInWINQubit: "Faculty Mentor / Institutional Coordinator",
          institution: "Thakur Shyamnarayan Engineering College",
          department: "Computer & IT Engineering",
          photoUrl:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tsec-f3",
          name: "Prof. Faculty Mentor",
          designation: "Assistant Professor",
          roleInWINQubit: "Faculty Mentor — Innovation & R&D",
          institution: "Thakur Shyamnarayan Engineering College",
          department: "Electronics & Telecommunication",
          photoUrl:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        },
      ],
      students: [
        {
          id: "tsec-s1",
          name: "Ananya Sharma",
          role: "Technology Lead",
          branch: "Computer Engineering",
          year: "TE",
          photoUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
          skills: ["Full Stack Dev", "AI Models", "Cloud Systems"],
        },
        {
          id: "tsec-s2",
          name: "Rohan Mehta",
          role: "Social Media & Marketing Lead",
          branch: "Artificial Intelligence & Data Science",
          year: "BE",
          photoUrl:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
          skills: ["Brand Strategy", "Growth Marketing", "Content Tech"],
        },
        {
          id: "tsec-s3",
          name: "Pooja Iyer",
          role: "Operations Lead",
          branch: "Information Technology",
          year: "TE",
          photoUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
          skills: ["Sprint Planning", "Hackathon Management", "Logistics"],
        },
        {
          id: "tsec-s4",
          name: "Aditya Patil",
          role: "Networking & Partnerships Lead",
          branch: "Electronics & Telecommunication",
          year: "TE",
          photoUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
          skills: ["Corporate Outreach", "Alumni Relations", "Pitching"],
        },
        {
          id: "tsec-s5",
          name: "Sneha Deshmukh",
          role: "Finance & Grants Lead",
          branch: "Computer Science & Engineering",
          year: "BE",
          photoUrl:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
          skills: ["Financial Modeling", "Budget Auditing", "Grant Compliance"],
        },
      ],
    },
    {
      id: "tsdc",
      name: "Thakur Shyamnarayan Degree College",
      shortName: "TSDC",
      tagline: "Interdisciplinary Sciences, Commerce & Humanities",
      badgeColor: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
      accentColor: "from-cyan-600 to-teal-600",
      description:
        "Fostering FinTech, E-Commerce, Computational Sciences, Media Tech, and Social Entrepreneurship.",
      campusLocation: "Kandivali (East), Mumbai",
      established: "Estd. 2017",
      faculty: [
        {
          id: "tsdc-f1",
          name: "Dr. Principal Name",
          designation: "Principal",
          roleInWINQubit: "Institutional Head & Patron",
          institution: "Thakur Shyamnarayan Degree College",
          department: "Academic Leadership",
          photoUrl:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tsdc-f2",
          name: "Mrs. Abha Dhote",
          designation: "Faculty Coordinator & Mentor",
          roleInWINQubit: "Faculty Mentor / Institutional Coordinator",
          institution: "Thakur Shyamnarayan Degree College",
          department: "Information Technology & Sciences",
          photoUrl:
            "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tsdc-f3",
          name: "Prof. Faculty Mentor",
          designation: "Assistant Professor",
          roleInWINQubit: "Faculty Mentor — Commerce & Business Models",
          institution: "Thakur Shyamnarayan Degree College",
          department: "Management & Commerce",
          photoUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
        },
      ],
      students: [
        {
          id: "tsdc-s1",
          name: "Tanvi Joshi",
          role: "Technology Lead",
          branch: "B.Sc Information Technology",
          year: "TY",
          photoUrl:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
          skills: ["Web Architecture", "Database Design", "Data Visualization"],
        },
        {
          id: "tsdc-s2",
          name: "Karan Shah",
          role: "Social Media & Marketing Lead",
          branch: "Bachelor of Mass Media (BMM)",
          year: "SY",
          photoUrl:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
          skills: [
            "Digital Storytelling",
            "Video Production",
            "Campaign Design",
          ],
        },
        {
          id: "tsdc-s3",
          name: "Ritika Gupta",
          role: "Operations Lead",
          branch: "Bachelor of Management Studies (BMS)",
          year: "TY",
          photoUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
          skills: [
            "Project Management",
            "Workflow Automation",
            "Volunteer Ops",
          ],
        },
        {
          id: "tsdc-s4",
          name: "Aman Verma",
          role: "Networking Lead",
          branch: "B.Com (Financial Markets)",
          year: "TY",
          photoUrl:
            "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&q=80",
          skills: ["Investor Scouting", "Industry Relations", "Sponsorships"],
        },
        {
          id: "tsdc-s5",
          name: "Devika Nair",
          role: "Finance Lead",
          branch: "B.Sc Computer Science",
          year: "SY",
          photoUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
          skills: ["Cost Forecasting", "SaaS Unit Economics", "Bookkeeping"],
        },
      ],
    },
    {
      id: "tiat",
      name: "Thakur Institute of Aviation Technology",
      shortName: "TIAT",
      tagline: "Aviation, Aerospace & Autonomous Flight",
      badgeColor: "border-sky-500/40 text-sky-400 bg-sky-500/10",
      accentColor: "from-sky-600 to-blue-600",
      description:
        "Pioneering Unmanned Aerial Vehicles (UAVs), Drone tech, Avionics diagnostics, and Aerospace engineering.",
      campusLocation: "Kandivali (East), Mumbai",
      established: "DGCA Approved",
      faculty: [
        {
          id: "tiat-f1",
          name: "Capt. / Principal Name",
          designation: "Principal / Accountable Manager",
          roleInWINQubit: "Institutional Head & Patron",
          institution: "Thakur Institute of Aviation Technology",
          department: "Aviation Safety & Flight Standards",
          photoUrl:
            "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tiat-f2",
          name: "Mr. Vivek Kulkarni",
          designation: "Faculty Coordinator & Mentor",
          roleInWINQubit: "Faculty Mentor / Institutional Coordinator",
          institution: "Thakur Institute of Aviation Technology",
          department: "Aircraft Maintenance & Avionics",
          photoUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tiat-f3",
          name: "Prof. Faculty Mentor",
          designation: "Senior Aviation Instructor",
          roleInWINQubit: "Faculty Mentor — Drone Tech & Aerodynamics",
          institution: "Thakur Institute of Aviation Technology",
          department: "Mechanical & Propulsion Systems",
          photoUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
        },
      ],
      students: [
        {
          id: "tiat-s1",
          name: "Varun Rao",
          role: "Technology Lead",
          branch: "Aircraft Maintenance Engineering (Avionics)",
          year: "TE",
          photoUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
          skills: ["Embedded Avionics", "Drone Firmware", "Telemetry"],
        },
        {
          id: "tiat-s2",
          name: "Meera Kulkarni",
          role: "Social Media & Marketing Lead",
          branch: "Aircraft Maintenance Engineering (Mechanical)",
          year: "SE",
          photoUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
          skills: [
            "Science Communications",
            "Brand Engagement",
            "Visual Media",
          ],
        },
        {
          id: "tiat-s3",
          name: "Sameer Khan",
          role: "Operations Lead",
          branch: "Aviation Safety & Systems",
          year: "TE",
          photoUrl:
            "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
          skills: ["Hangar Testing Protocols", "Lab Procurement", "Safety"],
        },
        {
          id: "tiat-s4",
          name: "Zoya Siddiqui",
          role: "Networking Lead",
          branch: "Aircraft Maintenance Engineering (Avionics)",
          year: "BE",
          photoUrl:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
          skills: ["Defense & Aerospace Linkages", "Aero Club Networking"],
        },
        {
          id: "tiat-s5",
          name: "Kavya Pillai",
          role: "Finance Lead",
          branch: "Aviation Engineering",
          year: "TE",
          photoUrl:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
          skills: ["Hardware Bill of Materials", "R&D Grant Budgeting"],
        },
      ],
    },
    {
      id: "tihm",
      name: "Thakur Institute of Hotel Management",
      shortName: "TIHM",
      tagline: "Hospitality Tech, Culinary Innovation & Food Science",
      badgeColor: "border-amber-500/40 text-amber-400 bg-amber-500/10",
      accentColor: "from-amber-600 to-orange-600",
      description:
        "Transforming smart kitchen tech, alternative foods, sustainable packaging, and experiential hospitality.",
      campusLocation: "Kandivali (East), Mumbai",
      established: "Estd. 2019",
      faculty: [
        {
          id: "tihm-f1",
          name: "Chef / Principal Name",
          designation: "Principal",
          roleInWINQubit: "Institutional Head & Patron",
          institution: "Thakur Institute of Hotel Management",
          department: "Hospitality Leadership",
          photoUrl:
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tihm-f2",
          name: "Prof. Faculty Coordinator",
          designation: "Institutional Coordinator",
          roleInWINQubit: "Faculty Mentor / Institutional Coordinator",
          institution: "Thakur Institute of Hotel Management",
          department: "Food Production & Molecular Gastronomy",
          photoUrl:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        },
        {
          id: "tihm-f3",
          name: "Prof. Faculty Mentor",
          designation: "Assistant Professor",
          roleInWINQubit: "Faculty Mentor — Sustainable Hospitality & Services",
          institution: "Thakur Institute of Hotel Management",
          department: "Food & Beverage Operations",
          photoUrl:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
        },
      ],
      students: [
        {
          id: "tihm-s1",
          name: "Prathamesh Salve",
          role: "Technology Lead",
          branch: "B.Sc Hospitality Studies",
          year: "TY",
          photoUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
          skills: ["Smart Kitchen Automation", "Inventory POS Tech"],
        },
        {
          id: "tihm-s2",
          name: "Gauri Sawant",
          role: "Social Media & Marketing Lead",
          branch: "Culinary Arts & Food Styling",
          year: "SY",
          photoUrl:
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
          skills: ["Food Photography", "Menu Engineering", "Viral Content"],
        },
        {
          id: "tihm-s3",
          name: "Mihir Jadhav",
          role: "Operations Lead",
          branch: "Hospitality Operations",
          year: "TY",
          photoUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
          skills: ["Event Catering Logistics", "Waste Zero Audits"],
        },
        {
          id: "tihm-s4",
          name: "Aishwarya Rane",
          role: "Networking Lead",
          branch: "Hospitality & Tourism Management",
          year: "TY",
          photoUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
          skills: ["Hotel Chain Partnerships", "Supplier Network Connect"],
        },
        {
          id: "tihm-s5",
          name: "Kunal Bhatia",
          role: "Finance Lead",
          branch: "Culinary Arts & Bakery",
          year: "SY",
          photoUrl:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
          skills: ["Food Costing", "Cloud Kitchen Financial Models"],
        },
      ],
    },
  ],
  Zh = ({
    onNavigate: y,
    onOpenInnovate: D,
    onOpenJoin: M,
    onOpenCollaborate: o,
  }) =>
    n.jsx("footer", {
      className:
        "bg-[#020617] border-t border-white/5 pt-16 pb-8 text-slate-400 text-xs",
      children: n.jsxs("div", {
        className: "container mx-auto px-4 md:px-8 space-y-12",
        children: [
          n.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8",
            children: [
              n.jsxs("div", {
                className: "lg:col-span-4 space-y-4",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-9 h-9 bg-gradient-to-tr from-violet-600 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/20",
                        children: "W",
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className:
                              "font-display text-lg font-bold tracking-tighter text-white",
                            children: [
                              "WIN",
                              n.jsx("span", {
                                className: "text-violet-400 font-light ml-0.5",
                                children: "Qubit",
                              }),
                            ],
                          }),
                          n.jsx("div", {
                            className:
                              "text-[9px] uppercase tracking-[0.2em] text-cyan-400 font-semibold -mt-1",
                            children: "Powered by InQubit",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsx("p", {
                    className: "text-gray-400 text-xs leading-relaxed max-w-sm",
                    children:
                      "A student innovation and pre-incubation ecosystem turning campus research and capstones into funded prototypes, patents, and venture-ready startups.",
                  }),
                  n.jsxs("div", {
                    className:
                      "inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[10px] font-semibold text-gray-400",
                    children: [
                      n.jsx(zl, { className: "w-3 h-3 text-cyan-400" }),
                      n.jsx("span", {
                        children: "Women-Led • Inclusive • Student-Driven",
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "lg:col-span-2 space-y-3",
                children: [
                  n.jsx("div", {
                    className:
                      "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400",
                    children: "Ecosystem",
                  }),
                  n.jsxs("ul", {
                    className: "space-y-2 text-xs",
                    children: [
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("home"),
                          className: "hover:text-white transition",
                          children: "Home",
                        }),
                      }),
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("about"),
                          className: "hover:text-white transition",
                          children: "About WINQubit",
                        }),
                      }),
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("leadership"),
                          className: "hover:text-white transition",
                          children: "Governance & Leadership",
                        }),
                      }),
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("students"),
                          className: "hover:text-white transition",
                          children: "For Students (₹500)",
                        }),
                      }),
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("programs"),
                          className: "hover:text-white transition",
                          children: "Incubation Programs",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "lg:col-span-2 space-y-3",
                children: [
                  n.jsx("div", {
                    className:
                      "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400",
                    children: "Innovation",
                  }),
                  n.jsxs("ul", {
                    className: "space-y-2 text-xs",
                    children: [
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("innovation"),
                          className: "hover:text-white transition",
                          children: "Focus Clusters",
                        }),
                      }),
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("partners"),
                          className: "hover:text-white transition",
                          children: "Collegiate Partners",
                        }),
                      }),
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("events"),
                          className: "hover:text-white transition",
                          children: "HackSpark 2026",
                        }),
                      }),
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("resources"),
                          className: "hover:text-white transition",
                          children: "Resource Center",
                        }),
                      }),
                      n.jsx("li", {
                        children: n.jsx("button", {
                          onClick: () => y("contact"),
                          className: "hover:text-white transition",
                          children: "Contact & Desk",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "lg:col-span-4 space-y-3",
                children: [
                  n.jsx("div", {
                    className:
                      "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400",
                    children: "Partner Campuses",
                  }),
                  n.jsx("div", {
                    className: "grid grid-cols-2 gap-2 text-[11px]",
                    children: Va.map((j) =>
                      n.jsxs(
                        "div",
                        {
                          className:
                            "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                          children: [
                            n.jsx("div", {
                              className: "font-bold text-white",
                              children: j.shortName,
                            }),
                            n.jsx("div", {
                              className: "text-[10px] text-gray-500 truncate",
                              children: j.name,
                            }),
                          ],
                        },
                        j.id,
                      ),
                    ),
                  }),
                  n.jsxs("div", {
                    className: "pt-2 flex gap-2",
                    children: [
                      n.jsx("button", {
                        onClick: M,
                        className:
                          "w-full py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition text-center shadow-lg shadow-violet-600/20",
                        children: "Join Pass (₹500)",
                      }),
                      n.jsx("button", {
                        onClick: D,
                        className:
                          "w-full py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold text-[10px] uppercase tracking-wider transition text-center",
                        children: "Submit Idea",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          n.jsxs("div", {
            className:
              "py-4 px-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center space-x-3 overflow-x-auto max-w-full pb-1 md:pb-0",
                children: [
                  n.jsx("span", {
                    className:
                      "text-[9px] text-gray-500 uppercase tracking-widest font-bold whitespace-nowrap",
                    children: "Core Journey:",
                  }),
                  n.jsxs("div", {
                    className:
                      "flex items-center text-[10px] font-bold whitespace-nowrap",
                    children: [
                      n.jsx("span", {
                        className: "text-gray-400",
                        children: "Discover",
                      }),
                      n.jsx("div", {
                        className: "mx-2 w-4 h-[1px] bg-gray-800",
                      }),
                      n.jsx("span", {
                        className: "text-gray-400",
                        children: "Join",
                      }),
                      n.jsx("div", {
                        className: "mx-2 w-4 h-[1px] bg-gray-800",
                      }),
                      n.jsx("span", {
                        className: "text-violet-400 font-bold",
                        children: "Innovate",
                      }),
                      n.jsx("div", {
                        className: "mx-2 w-4 h-[1px] bg-gray-800",
                      }),
                      n.jsx("span", {
                        className: "text-gray-400",
                        children: "Build",
                      }),
                      n.jsx("div", {
                        className: "mx-2 w-4 h-[1px] bg-gray-800",
                      }),
                      n.jsx("span", {
                        className: "text-cyan-400 font-bold",
                        children: "Launch",
                      }),
                      n.jsx("div", {
                        className: "mx-2 w-4 h-[1px] bg-gray-800",
                      }),
                      n.jsx("span", {
                        className: "text-gray-400",
                        children: "Incubate",
                      }),
                    ],
                  }),
                ],
              }),
              n.jsx("div", {
                className:
                  "flex items-center space-x-4 text-[10px] text-gray-500 font-mono",
                children: n.jsx("span", {
                  children: "v1.0 • powered by InQubit",
                }),
              }),
            ],
          }),
          n.jsxs("div", {
            className:
              "pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-gray-500",
            children: [
              n.jsxs("div", {
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " WINQubit Ecosystem. All rights reserved. Supported by",
                  " ",
                  n.jsx("strong", {
                    className: "text-gray-300",
                    children: "InQubit Venture Labs",
                  }),
                  ".",
                ],
              }),
              n.jsxs("div", {
                className: "flex items-center gap-4 text-gray-500",
                children: [
                  n.jsx("span", { children: "TSEC" }),
                  n.jsx("span", { children: "•" }),
                  n.jsx("span", { children: "TSDC" }),
                  n.jsx("span", { children: "•" }),
                  n.jsx("span", { children: "TIAT" }),
                  n.jsx("span", { children: "•" }),
                  n.jsx("span", { children: "TIHM" }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Ih = [
    {
      label: "Partner Institutions",
      value: "4",
      sub: "Campuses Across Mumbai",
      color: "text-violet-400",
    },
    {
      label: "Year 1 Target Members",
      value: "500+",
      sub: "Student Innovators",
      color: "text-cyan-400",
    },
    {
      label: "Ideas in Pipeline",
      value: "50+",
      sub: "Problem Statements",
      color: "text-emerald-400",
    },
    {
      label: "Prototypes Funded",
      value: "25",
      sub: "Hardware & Software",
      color: "text-amber-400",
    },
    {
      label: "Startup Representations",
      value: "15",
      sub: "National & Global Arenas",
      color: "text-sky-400",
    },
    {
      label: "Incubated Startups",
      value: "5",
      sub: "InQubit Fast-Track",
      color: "text-pink-400",
    },
  ],
  Kh = [
    {
      step: "01",
      name: "DISCOVER",
      action: "Explore a Problem",
      tagline: "Spot campus & societal pain points",
      desc: "Participate in Ideathons, problem-scouting bootcamps, and domain deep dives to discover high-value problems worth solving.",
      icon: "Compass",
      gradient: "from-violet-500 to-indigo-500",
    },
    {
      step: "02",
      name: "JOIN",
      action: "Join the Movement",
      tagline: "Access membership & lab network",
      desc: "Become a WINQubit member for ₹500/year, access state-of-the-art labs across all 4 institutions, and join peer teams.",
      icon: "UserPlus",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      step: "03",
      name: "INNOVATE",
      action: "Submit & Refine Idea",
      tagline: "Get matched with mentors",
      desc: "Submit your idea into the WINQubit Idea Hub, get paired with faculty mentors and industry veterans for rapid validation.",
      icon: "Lightbulb",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: "04",
      name: "BUILD",
      action: "Prototype & Test",
      tagline: "POC support & prototype grants",
      desc: "Develop functional Minimum Viable Products (MVPs) using seed prototype grants, fabrication facilities, and cloud credits.",
      icon: "Wrench",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      step: "05",
      name: "LAUNCH",
      action: "Compete & Validate",
      tagline: "National hackathons & beta pilots",
      desc: "Present at Smart India Hackathon, global competitions, and pilot with partner institutions for live user feedback.",
      icon: "Rocket",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      step: "06",
      name: "INCUBATE",
      action: "Scale with InQubit",
      tagline: "Seed capital & corporate scale",
      desc: "Seamless transition into InQubit incubation for company incorporation, angel/VC investment, IP filing, and commercialization.",
      icon: "TrendingUp",
      gradient: "from-emerald-500 to-violet-500",
    },
  ],
  Jh = [
    {
      id: "prog-innovation",
      category: "innovation",
      title: "Innovation Challenges & Buildathons",
      tagline: "From blank canvas to working proof of concept in 48 hours",
      description:
        "Quarterly inter-institutional hackathons, ideathons, and hardware buildathons designed to ignite rapid creative problem solving across cross-functional engineering, science, and management teams.",
      highlights: [
        "HackSpark Annual Flagship 36-Hour Hackathon",
        "Campus Problem-Scouting Ideathons",
        "Hardware & IoT Maker Sprints with physical kit distribution",
        "Cash prizes, pilot trial rights, and seed grant qualifications",
      ],
      audience: "All Students across FE to BE & Degree programs",
      frequency: "Bi-Monthly",
    },
    {
      id: "prog-entrepreneurship",
      category: "entrepreneurship",
      title: "Startup Bootcamps & Founder Circles",
      tagline: "Learning the physics of early-stage venture building",
      description:
        "Intensive 4-week cohort programs covering customer discovery, lean canvas modeling, pricing strategies, pitch deck crafting, and founder psychology led by active startup founders and angel investors.",
      highlights: [
        'Weekly "Founder Talks" with Y-Combinator & Indian Unicorn alumni',
        "Customer Discovery & Lean Canvas Sprint Clinics",
        "Venture Financial Modeling & Investor Deck Teardowns",
        "Mock Angel Demo Days with real venture feedback",
      ],
      audience: "Idea-stage and prototype-ready student teams",
      frequency: "Monthly",
    },
    {
      id: "prog-research",
      category: "research",
      title: "Research & Intellectual Property (IP) Cell",
      tagline: "Translating academic inquiry into protected commercial patents",
      description:
        "Comprehensive institutional support for patent search, provisional drafting, national/PCT patent filing, and publishing in peer-reviewed IEEE / Scopus / Springer indexed journals.",
      highlights: [
        "Prior Art & Patent Search Workshops with IP attorneys",
        "Provisional Patent Drafting Assistance & Filing Subsidy",
        "Scopus & IEEE Indexed Research Paper Mentorship",
        "Faculty-Student Collaborative Innovation Grants",
      ],
      audience: "Students, Faculty Mentors, and Final Year Projects",
      frequency: "Continuous / Bi-Weekly Clinics",
    },
    {
      id: "prog-industry",
      category: "industry",
      title: "Industry Linkage & Live Problem Statements",
      tagline: "Direct corporate challenges with real enterprise data",
      description:
        "Corporate partners bring actual operational friction points to WINQubit innovators. Top performing teams earn industrial stipends, pilot deployments, pre-placement offers (PPOs), and licensing opportunities.",
      highlights: [
        "Live Industry Problem Statements with corporate datasets",
        "Industrial site visits & advanced hangar/lab interactions",
        "Direct 1-on-1 CTO / VP Mentorship hours",
        "Fast-track internship & Pre-Placement Interview tracks",
      ],
      audience: "Pre-final and final year student teams",
      frequency: "Quarterly corporate cohorts",
    },
    {
      id: "prog-women",
      category: "women",
      title: "Women in Technology & Leadership (WIN)",
      tagline: "Centering female founders, researchers, and technical leaders",
      description:
        "Dedicated mentorship streams, leadership fellowships, and investor roundtables ensuring women lead the next wave of high-technology innovations, deep-tech research, and venture capital creation.",
      highlights: [
        "WIN Leadership Fellowships for high-potential female creators",
        "Female Founder & Executive Mentorship Network",
        "Technical Mastery Sprints (Quantum, AI, Cyber, Aerospace)",
        "Special Angel Seed Allocation for Women-Led Ventures",
      ],
      audience: "Women innovators, engineers, creators, and researchers",
      frequency: "Continuous & Dedicated Summit in March",
    },
    {
      id: "prog-prototype",
      category: "prototype",
      title: "Proof-of-Concept (POC) & Prototype Grants",
      tagline: "Zero-equity hardware and cloud development capital",
      description:
        "Micro-grants ranging from ₹10,000 to ₹1,00,000 to procure microcontrollers, drone components, 3D printing filaments, specialized reagents, AWS/GCP cloud credits, and sensor modules for validated ideas.",
      highlights: [
        "Micro-Grants up to ₹1,00,000 per validated project team",
        "Free access to 3D printers, CNC laser cutters, and avionics bays",
        "Sponsored Cloud Server credits & AI Model API access",
        "Pre-Incubation incubation transition pass into InQubit",
      ],
      audience: "Screened project teams with verified problem validation",
      frequency: "Rolling monthly review board",
    },
  ],
  Ar = [
    {
      id: "ai-data",
      title: "Artificial Intelligence & Deep Tech",
      iconName: "Cpu",
      color: "from-violet-600 to-indigo-600",
      subfields: [
        "Large Language Models (LLMs)",
        "Computer Vision",
        "Autonomous Agents",
        "Edge AI",
        "Cybersecurity",
        "Robotics & Automation",
      ],
      description:
        "Building next-generation intelligent algorithms, real-time computer vision for industrial safety, privacy-preserving cybersecurity, and edge intelligence devices.",
      sampleProblems: [
        "Low-latency visual defect detection for manufacturing assembly lines",
        "Edge AI for predictive maintenance in industrial transformers",
        "Multilingual assistive audio interfaces for local Indian dialects",
      ],
    },
    {
      id: "aerospace-mobility",
      title: "Aerospace, Drone & Mobility",
      iconName: "Plane",
      color: "from-sky-600 to-blue-600",
      subfields: [
        "UAV & Drone Systems",
        "Avionics Diagnostics",
        "Electric Vehicle (EV) Powertrains",
        "Battery Management Systems (BMS)",
        "Defence Tech",
        "Autonomous Navigation",
      ],
      description:
        "Leveraging Thakur Institute of Aviation Technology (TIAT) facilities to design DGCA-compliant drones, smart BMS for two-wheelers, and flight safety telemetry.",
      sampleProblems: [
        "Long-endurance autonomous agricultural surveillance drones",
        "Smart thermal runaway prevention algorithm for EV lithium packs",
        "Avionics black-box telemetry with real-time satellite redundancy",
      ],
    },
    {
      id: "life-sciences",
      title: "HealthTech & Life Sciences",
      iconName: "HeartPulse",
      color: "from-pink-600 to-rose-600",
      subfields: [
        "Biomedical Devices",
        "Remote Patient Monitoring",
        "Bio-informatics",
        "AgriTech & Soil Diagnostics",
        "Preventive Healthcare",
        "Affordable Diagnostics",
      ],
      description:
        "Engineering non-invasive diagnostic sensors, IoT-enabled rural telemedicine kits, automated soil nutrient analyzers, and affordable healthcare solutions.",
      sampleProblems: [
        "Portable optical diagnostic device for non-invasive hemoglobin estimation",
        "IoT smart sensor array for precision soil moisture & nitrogen optimization",
        "Continuous ECG anomaly detector using micro-controllers",
      ],
    },
    {
      id: "industry4",
      title: "Industry 4.0 & Advanced Hardware",
      iconName: "Factory",
      color: "from-amber-600 to-yellow-600",
      subfields: [
        "Smart Manufacturing",
        "Embedded Systems",
        "IoT Sensor Meshes",
        "Additive 3D Manufacturing",
        "Renewable Energy Systems",
        "Micro-Electronics",
      ],
      description:
        "Integrating custom PCB hardware with cloud telemetry for smart factory automation, energy harvesting, and industrial process monitoring.",
      sampleProblems: [
        "Smart acoustic vibration sensor for HVAC predictive maintenance",
        "Solar micro-grid inverter controller with local grid stabilization",
        "Automated CNC tool wear measurement using laser interferometry",
      ],
    },
    {
      id: "creative-hospitality",
      title: "Creative, Culinary & Hospitality Tech",
      iconName: "Utensils",
      color: "from-orange-600 to-red-600",
      subfields: [
        "Smart Commercial Kitchens",
        "Food Science & Alternative Proteins",
        "Sustainable Packaging",
        "Hospitality POS Systems",
        "Immersive AR/VR Tourism",
        "Digital Media",
      ],
      description:
        "Collaborating with Thakur Institute of Hotel Management (TIHM) and TSDC to create food-waste mitigation tech, plant-based culinary innovations, and hospitality automation.",
      sampleProblems: [
        "Computer vision food waste quantification system for buffet operations",
        "Biodegradable bioplastic packaging derived from agricultural kitchen waste",
        "Dynamic contactless table reservation & inventory predictive engine",
      ],
    },
    {
      id: "sustainability-sdg",
      title: "Sustainability & Social Impact",
      iconName: "Leaf",
      color: "from-emerald-600 to-teal-600",
      subfields: [
        "CleanTech & Carbon Accounting",
        "Circular Economy",
        "Water Purification",
        "Waste Management",
        "Assistive Tech for Disabilities",
        "SDG Innovations",
      ],
      description:
        "Creating community-centric solutions solving urban waste, clean drinking water access, energy efficiency, and universal digital accessibility.",
      sampleProblems: [
        "Low-cost greywater biological filtration module for housing societies",
        "Smart reverse vending machine rewarding plastic recycling with local credits",
        "Haptic feedback navigational cane for visually impaired individuals",
      ],
    },
  ],
  Wh = [
    {
      q: "Do I need a fully formed startup or team before joining WINQubit?",
      a: "Absolutely not! You only need curiosity and a problem you care about solving. WINQubit provides regular team-matching meetups, ideation bootcamps, and skill sprints to help you form a team and discover validated problem statements.",
    },
    {
      q: "What does the ₹500/year membership fee cover?",
      a: "Your ₹500 annual membership grants you all-access passes to maker labs and advanced equipment across all 4 institutions (TSEC, TSDC, TIAT, TIHM), eligibility for prototype micro-grants (up to ₹1,00,000), free entry to all hackathons and bootcamps, 1-on-1 industry mentorship sessions, and pre-incubation certification from InQubit.",
    },
    {
      q: "How does the transition from WINQubit to InQubit work?",
      a: "WINQubit is the campus pre-incubation layer where you validate, build POCs, and test MVPs. Once your prototype demonstrates technical viability and initial user traction, the Management Committee nominates your team to InQubit for formal company incorporation, seed funding, co-working space, and venture capital introduction.",
    },
    {
      q: "Can students from different partner institutions collaborate on a single project?",
      a: "Yes! Cross-institutional teams are strongly encouraged. For example, a TSEC engineer can team up with a TIAT avionics specialist, a TSDC finance analyst, and a TIHM hospitality lead to build a comprehensive drone food-delivery venture.",
    },
    {
      q: "How do student committee leadership elections/selections happen?",
      a: "Each partner institution holds annual student leadership selections across 5 roles: Technology Lead, Marketing & Social Media Lead, Operations Lead, Networking Lead, and Finance Lead. Applications open at the start of the academic semester and are reviewed jointly by the Faculty Committee and WINQubit Management.",
    },
    {
      q: "Does WINQubit claim any equity or intellectual property from student ideas?",
      a: "No. At the WINQubit pre-incubation stage, student innovators retain 100% of their intellectual property and equity. Our IP Cell assists you in filing provisional patents in your own name.",
    },
  ],
  Mr = [
    {
      id: "evt-1",
      title: "HackSpark 2026: Multi-Campus 36-Hour Hackathon",
      date: "Oct 10 - 12, 2026",
      time: "09:00 AM IST onwards",
      status: "upcoming",
      institution: "TSEC Campus (Central Innovation Hub)",
      category: "Innovation Hackathon",
      description:
        "The flagship inter-college hackathon uniting 400+ developers, designers, and innovators to solve live tracks in AI, Aerospace, EV, and FinTech with ₹2,50,000 in cash prizes and prototype grants.",
      eligibility: "Open to all undergraduate & postgraduate students",
      seatsRemaining: 45,
    },
    {
      id: "evt-2",
      title: "Campus Founder Circle: From Final Year Project to Seed Round",
      date: "Sep 24, 2026",
      time: "04:30 PM - 07:00 PM IST",
      status: "upcoming",
      institution: "TSDC Auditorium & Hybrid Stream",
      category: "Entrepreneurship",
      description:
        "An interactive masterclass with alumni founders who scaled deep-tech hardware and SaaS ventures right from college labs into venture-backed entities.",
      eligibility: "All WINQubit Members",
      seatsRemaining: 80,
    },
    {
      id: "evt-3",
      title: "UAV & Drone Systems Hands-on Flight & Telemetry Sprint",
      date: "Sep 18, 2026",
      time: "10:00 AM - 05:00 PM IST",
      status: "upcoming",
      institution: "TIAT Hangar & Flight Lab",
      category: "Aerospace & Robotics",
      description:
        "Hands-on assembly of autonomous quadcopters, flight controller PID tuning, and telemetry transmission with DGCA certified aviation instructors.",
      eligibility: "Pre-registered WINQubit Tech Teams",
      seatsRemaining: 18,
    },
    {
      id: "evt-4",
      title: "Patent Drafting & Prior-Art Clinic",
      date: "Aug 29, 2026",
      time: "02:00 PM - 05:00 PM IST",
      status: "ongoing",
      institution: "Virtual IP Room",
      category: "Research & IP",
      description:
        "1-on-1 review sessions with registered Patent Agents to conduct Indian & USPTO prior art searches for student hardware and software prototypes.",
      eligibility: "Active Project Teams with Working Prototypes",
    },
    {
      id: "evt-5",
      title: "Smart Hospitality & FoodTech Demo Day",
      date: "Aug 14, 2026",
      time: "11:00 AM - 04:00 PM IST",
      status: "highlight",
      institution: "TIHM Demonstration Labs",
      category: "Ecosystem Highlight",
      description:
        "Exhibition of 12 student prototypes in automated kitchen monitoring, biodegradable packaging, and contactless guest service robots.",
      eligibility: "Completed & Judged by Hotel Industry Executives",
    },
  ],
  Kf = [
    {
      id: "doc-1",
      title: "WINQubit Student Innovation Playbook (2026-27)",
      category: "student",
      fileType: "PDF Guide",
      fileSize: "4.2 MB",
      description:
        "Complete step-by-step roadmap from problem validation, lean canvas crafting, lab access rules, and prototype grant submission.",
    },
    {
      id: "doc-2",
      title: "Patent Search & Intellectual Property Blueprint",
      category: "student",
      fileType: "Handbook",
      fileSize: "2.8 MB",
      description:
        "A beginner-friendly manual on drafting claims, searching patent databases, and understanding student inventor rights.",
    },
    {
      id: "doc-3",
      title: "WINQubit Official Institutional Brochure & Constitution",
      category: "document",
      fileType: "PDF Document",
      fileSize: "5.6 MB",
      description:
        "Comprehensive overview of WINQubit governance, InQubit venture linkage, and multi-campus committee structures.",
    },
    {
      id: "doc-4",
      title: "Campus Innovation Ecosystem Model for Partner Colleges",
      category: "institutional",
      fileType: "Framework Deck",
      fileSize: "6.1 MB",
      description:
        "The operational blueprint detailing how higher education institutes establish a WINQubit chapter with faculty and student leads.",
    },
    {
      id: "doc-5",
      title: "Annual Ecosystem Impact & Startup Representation Report",
      category: "report",
      fileType: "Annual Report",
      fileSize: "3.9 MB",
      description:
        "Summary of student ventures formed, grants disbursed, hackathon representations, and incubated InQubit companies.",
    },
  ],
  Fh = ({
    onNavigate: y,
    onOpenInnovate: D,
    onOpenJoin: M,
    onOpenCollaborate: o,
  }) =>
    n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "relative pt-8 md:pt-14 pb-12 overflow-hidden",
          children: [
            n.jsx("div", {
              className:
                "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[900px] h-[350px] bg-[radial-gradient(circle_at_50%_0%,#1e1b4b,transparent_75%)] pointer-events-none -z-10",
            }),
            n.jsxs("div", {
              className: "container mx-auto px-4 md:px-8 text-center",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-4 mb-4",
                  children: [
                    n.jsx("div", {
                      className: "h-[1px] w-12 bg-violet-500/30",
                    }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                      children: "Women-Led • Inclusive • Student-Driven",
                    }),
                    n.jsx("div", {
                      className: "h-[1px] w-12 bg-violet-500/30",
                    }),
                  ],
                }),
                n.jsxs("h1", {
                  className:
                    "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4",
                  children: [
                    "Dream. Build. ",
                    n.jsx("span", {
                      className:
                        "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                      children: "Lead.",
                    }),
                  ],
                }),
                n.jsxs("p", {
                  className:
                    "text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed mb-8",
                  children: [
                    "A premier student innovation & pre-incubation ecosystem powered by",
                    " ",
                    n.jsx("strong", {
                      className: "text-cyan-400 font-semibold",
                      children: "InQubit",
                    }),
                    ". Turning campus research, capstones, and inquisitiveness into funded prototypes and venture-ready startups.",
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "flex flex-col sm:flex-row items-center justify-center gap-3 mb-12",
                  children: [
                    n.jsxs("button", {
                      onClick: M,
                      className:
                        "w-full sm:w-auto px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-violet-600 hover:bg-violet-500 transition shadow-lg shadow-violet-600/25 flex items-center justify-center gap-2 group",
                      children: [
                        n.jsx("span", { children: "Join WINQubit" }),
                        n.jsx(Ft, {
                          className:
                            "w-3.5 h-3.5 group-hover:translate-x-0.5 transition",
                        }),
                      ],
                    }),
                    n.jsxs("button", {
                      onClick: D,
                      className:
                        "w-full sm:w-auto px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/30 bg-white/[0.02] hover:bg-cyan-500 hover:text-black transition flex items-center justify-center gap-2",
                      children: [
                        n.jsx(Ki, { className: "w-3.5 h-3.5" }),
                        n.jsx("span", {
                          children: "Submit Your Idea (Innovate)",
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsx("div", {
                  className:
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto",
                  children: Ih.map((j, E) =>
                    n.jsxs(
                      "div",
                      {
                        className:
                          "bg-white/[0.02] p-4 rounded-2xl border border-white/5 text-center hover:border-white/20 transition",
                        children: [
                          n.jsx("div", {
                            className: `text-xl sm:text-2xl font-bold font-display ${j.color} mb-0.5`,
                            children: j.value,
                          }),
                          n.jsx("div", {
                            className:
                              "text-[10px] font-bold text-gray-300 uppercase tracking-tight",
                            children: j.label,
                          }),
                          n.jsx("div", {
                            className: "text-[9px] text-gray-500",
                            children: j.sub,
                          }),
                        ],
                      },
                      E,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "bg-slate-900/40 p-6 md:p-10 rounded-[2rem] border border-white/5 relative overflow-hidden",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-7 space-y-3.5",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center space-x-3 mb-2",
                      children: [
                        n.jsx("div", {
                          className: "h-[1px] w-8 bg-violet-500/40",
                        }),
                        n.jsx("span", {
                          className:
                            "text-[10px] font-bold text-violet-400 uppercase tracking-widest",
                          children: "The Ecosystem Story",
                        }),
                      ],
                    }),
                    n.jsxs("h2", {
                      className:
                        "text-2xl md:text-3xl font-bold text-white tracking-tight",
                      children: [
                        "What is ",
                        n.jsx("span", {
                          className: "text-violet-400",
                          children: "WINQubit",
                        }),
                        "?",
                      ],
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "WINQubit is a decentralized campus innovation network created to bridge the gap between classroom theory and real-world enterprise creation. Governed by industry strategists and institutional faculty, WINQubit operates across multiple academic pillars—Engineering, General Sciences, Aviation, and Hospitality—to nurture student-led solutions from ground zero.",
                    }),
                    n.jsxs("p", {
                      className: "text-gray-400 text-xs leading-relaxed",
                      children: [
                        "As the pre-incubation engine powered by ",
                        n.jsx("strong", { children: "InQubit" }),
                        ", WINQubit prepares student teams through hands-on fabrication, seed prototype grants, patent clinics, and corporate challenge sprints before fast-tracking them into institutional venture incubation.",
                      ],
                    }),
                    n.jsx("div", {
                      className: "pt-2",
                      children: n.jsxs("button", {
                        onClick: () => y("about"),
                        className:
                          "text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group",
                        children: [
                          n.jsx("span", {
                            children: "Read About Our Philosophy",
                          }),
                          " ",
                          n.jsx(Ft, {
                            className:
                              "w-3 h-3 group-hover:translate-x-0.5 transition",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "lg:col-span-5 grid grid-cols-2 gap-3",
                  children: [
                    n.jsxs("div", {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1",
                      children: [
                        n.jsx(Ji, {
                          className: "w-5 h-5 text-violet-400 mb-1.5",
                        }),
                        n.jsx("div", {
                          className: "font-bold text-xs text-white",
                          children: "Women-Led",
                        }),
                        n.jsx("div", {
                          className: "text-[10px] text-gray-400",
                          children:
                            "Centering female engineers, researchers, and creators.",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1",
                      children: [
                        n.jsx(Mn, {
                          className: "w-5 h-5 text-cyan-400 mb-1.5",
                        }),
                        n.jsx("div", {
                          className: "font-bold text-xs text-white",
                          children: "Inclusive",
                        }),
                        n.jsx("div", {
                          className: "text-[10px] text-gray-400",
                          children:
                            "Multi-campus interdisciplinary cross-pollination across 4 colleges.",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1",
                      children: [
                        n.jsx(Pf, {
                          className: "w-5 h-5 text-emerald-400 mb-1.5",
                        }),
                        n.jsx("div", {
                          className: "font-bold text-xs text-white",
                          children: "Student-Driven",
                        }),
                        n.jsx("div", {
                          className: "text-[10px] text-gray-400",
                          children:
                            "Student leadership committees driving tech, ops & community.",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1",
                      children: [
                        n.jsx(An, {
                          className: "w-5 h-5 text-pink-400 mb-1.5",
                        }),
                        n.jsx("div", {
                          className: "font-bold text-xs text-white",
                          children: "InQubit Pathway",
                        }),
                        n.jsx("div", {
                          className: "text-[10px] text-gray-400",
                          children:
                            "Direct pipeline from prototype grant to formal incubation.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-10",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-3 mb-2",
                  children: [
                    n.jsx("div", { className: "h-[1px] w-8 bg-violet-500/30" }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                      children: "The Six Value Pillars",
                    }),
                    n.jsx("div", { className: "h-[1px] w-8 bg-violet-500/30" }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "Why Join WINQubit?",
                }),
                n.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children:
                    "Everything you need to go from a dorm room concept to a funded prototype.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: [
                {
                  title: "Mentorship",
                  desc: "Direct guidance from startup founders, CTOs, and domain professors.",
                  icon: Mn,
                  color: "text-violet-400",
                },
                {
                  title: "Build & Hardware",
                  desc: "Maker labs, drone test bays, 3D printing filaments, PCB milling, and IoT hardware components.",
                  icon: Dr,
                  color: "text-cyan-400",
                },
                {
                  title: "Tools & Cloud",
                  desc: "Sponsored cloud server allowances, GitHub Enterprise suites, and generative AI developer APIs.",
                  icon: wr,
                  color: "text-emerald-400",
                },
                {
                  title: "Industry Linkages",
                  desc: "Live problem statements, paid industrial research internships, and hiring pipelines.",
                  icon: jr,
                  color: "text-amber-400",
                },
                {
                  title: "Research & IP Support",
                  desc: "End-to-end assistance with patent prior art search, provisional filing, and journal publishing.",
                  icon: zr,
                  color: "text-pink-400",
                },
                {
                  title: "Startup & Incubation",
                  desc: "Venture pitch clinics, zero-equity prototype grants, and guaranteed InQubit incubation screening.",
                  icon: An,
                  color: "text-sky-400",
                },
              ].map((j, E) => {
                const v = j.icon;
                return n.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/[0.02] p-5 rounded-2xl border border-white/5 hover:border-white/20 transition flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("div", {
                            className:
                              "w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-3",
                            children: n.jsx(v, {
                              className: `w-5 h-5 ${j.color}`,
                            }),
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-1.5",
                            children: j.title,
                          }),
                          n.jsx("p", {
                            className: "text-xs text-gray-400 leading-relaxed",
                            children: j.desc,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px]",
                        children: [
                          n.jsxs("span", {
                            className: "text-gray-500 font-mono",
                            children: ["0", E + 1],
                          }),
                          n.jsx("span", {
                            className: "font-semibold text-gray-300",
                            children: "Included in ₹500 Pass",
                          }),
                        ],
                      }),
                    ],
                  },
                  E,
                );
              }),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "bg-slate-900/40 p-6 md:p-10 rounded-[2rem] border border-white/5",
            children: [
              n.jsxs("div", {
                className: "text-center max-w-3xl mx-auto mb-10",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex items-center justify-center space-x-3 mb-2",
                    children: [
                      n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                      n.jsx("span", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-cyan-400",
                        children: "The Single Central Narrative",
                      }),
                      n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                    ],
                  }),
                  n.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold text-white",
                    children: "The WINQubit Innovation Pathway",
                  }),
                  n.jsx("p", {
                    className: "text-xs text-gray-400 mt-1",
                    children:
                      "How an inquisitive student with a raw idea evolves into an InQubit-incubated startup founder.",
                  }),
                ],
              }),
              n.jsx("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: Kh.map((j) =>
                  n.jsxs(
                    "div",
                    {
                      className:
                        "relative p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/40 transition group",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center justify-between mb-3",
                          children: [
                            n.jsx("span", {
                              className:
                                "font-mono text-xl font-black text-gray-600 group-hover:text-violet-400 transition",
                              children: j.step,
                            }),
                            n.jsx("span", {
                              className:
                                "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/5 text-cyan-300 border border-white/10",
                              children: j.name,
                            }),
                          ],
                        }),
                        n.jsx("h3", {
                          className: "text-sm font-bold text-white mb-0.5",
                          children: j.action,
                        }),
                        n.jsx("div", {
                          className:
                            "text-[11px] text-violet-400 font-medium mb-2",
                          children: j.tagline,
                        }),
                        n.jsx("p", {
                          className: "text-xs text-gray-400 leading-relaxed",
                          children: j.desc,
                        }),
                      ],
                    },
                    j.step,
                  ),
                ),
              }),
              n.jsxs("div", {
                className:
                  "mt-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-bold font-mono",
                        children: "01",
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("div", {
                            className: "text-xs font-bold text-white",
                            children: "Ready to begin Step 01?",
                          }),
                          n.jsx("div", {
                            className: "text-[11px] text-gray-400",
                            children:
                              "You don’t need an existing team or working prototype to join.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      n.jsx("button", {
                        onClick: M,
                        className:
                          "px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-bold uppercase tracking-wider transition shadow-md shadow-violet-600/20",
                        children: "Join WINQubit",
                      }),
                      n.jsx("button", {
                        onClick: D,
                        className:
                          "px-5 py-2 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black text-[10px] font-bold uppercase tracking-wider transition",
                        children: "Submit An Idea",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className:
                "flex flex-col md:flex-row md:items-end justify-between mb-8",
              children: [
                n.jsxs("div", {
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center space-x-3 mb-2",
                      children: [
                        n.jsx("div", {
                          className: "h-[1px] w-8 bg-cyan-500/30",
                        }),
                        n.jsx("span", {
                          className:
                            "text-[10px] font-bold uppercase tracking-widest text-cyan-400",
                          children: "Multi-Disciplinary Scope",
                        }),
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl md:text-3xl font-bold text-white",
                      children: "What Can You Build?",
                    }),
                    n.jsx("p", {
                      className: "text-xs text-gray-400 mt-1",
                      children:
                        "Your idea doesn’t have to fit into a single box. Explore our core focus clusters.",
                    }),
                  ],
                }),
                n.jsxs("button", {
                  onClick: () => y("innovation"),
                  className:
                    "mt-3 md:mt-0 text-[10px] font-bold uppercase tracking-wider text-violet-400 hover:text-violet-300 flex items-center gap-1 group",
                  children: [
                    n.jsx("span", { children: "View All Focus Sectors" }),
                    " ",
                    n.jsx(Ft, {
                      className:
                        "w-3 h-3 group-hover:translate-x-0.5 transition",
                    }),
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: Ar.map((j) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/[0.02] p-5 rounded-2xl border border-white/5 hover:border-white/20 transition flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                              n.jsx("span", {
                                className:
                                  "text-[9px] font-bold text-gray-500 uppercase tracking-widest",
                                children: "DOMAIN",
                              }),
                              n.jsx("span", {
                                className: "w-2 h-2 rounded-full bg-cyan-400",
                              }),
                            ],
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-1.5",
                            children: j.title,
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-3",
                            children: j.description,
                          }),
                          n.jsx("div", {
                            className: "flex flex-wrap gap-1.5 mb-3",
                            children: j.subfields
                              .slice(0, 3)
                              .map((E, v) =>
                                n.jsx(
                                  "span",
                                  {
                                    className:
                                      "px-2 py-0.5 rounded-full bg-white/[0.03] text-[9px] text-gray-300 border border-white/5 font-mono",
                                    children: E,
                                  },
                                  v,
                                ),
                              ),
                          }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "pt-3 border-t border-white/5",
                        children: n.jsxs("button", {
                          onClick: D,
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1",
                          children: [
                            n.jsx("span", { children: "Build in this space" }),
                            " ",
                            n.jsx(Ft, { className: "w-3 h-3" }),
                          ],
                        }),
                      }),
                    ],
                  },
                  j.id,
                ),
              ),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "bg-slate-900/40 p-6 md:p-10 rounded-[2rem] border border-white/5",
            children: [
              n.jsxs("div", {
                className: "text-center max-w-2xl mx-auto mb-8",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex items-center justify-center space-x-3 mb-2",
                    children: [
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                      n.jsx("span", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                        children: "Our Campus Network",
                      }),
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                    ],
                  }),
                  n.jsx("h2", {
                    className: "text-2xl md:text-3xl font-bold text-white",
                    children: "Our Institutional Partners",
                  }),
                  n.jsx("p", {
                    className: "text-xs text-gray-400 mt-1",
                    children:
                      "WINQubit connects students and faculty leadership across 4 specialized academic campuses in Mumbai.",
                  }),
                ],
              }),
              n.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: Va.map((j) =>
                  n.jsxs(
                    "div",
                    {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/40 transition flex flex-col justify-between",
                      children: [
                        n.jsxs("div", {
                          children: [
                            n.jsxs("div", {
                              className:
                                "flex justify-between items-start mb-2.5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-display font-bold text-base text-white",
                                  children: j.shortName,
                                }),
                                n.jsx("span", {
                                  className:
                                    "text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 font-mono",
                                  children: j.established,
                                }),
                              ],
                            }),
                            n.jsx("h4", {
                              className:
                                "text-xs font-bold text-gray-200 mb-1 leading-snug",
                              children: j.name,
                            }),
                            n.jsx("p", {
                              className: "text-[10px] text-violet-400 mb-2",
                              children: j.tagline,
                            }),
                            n.jsx("p", {
                              className:
                                "text-[11px] text-gray-400 leading-relaxed mb-3",
                              children: j.description,
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px]",
                          children: [
                            n.jsx("span", {
                              className: "text-gray-500",
                              children: "3 Faculty • 5 Students",
                            }),
                            n.jsx("button", {
                              onClick: () => y("leadership"),
                              className:
                                "text-cyan-400 hover:underline font-semibold",
                              children: "View Team →",
                            }),
                          ],
                        }),
                      ],
                    },
                    j.id,
                  ),
                ),
              }),
              n.jsx("div", {
                className: "mt-6 text-center",
                children: n.jsxs("button", {
                  onClick: () => y("partners"),
                  className:
                    "inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:border-cyan-400 transition",
                  children: [
                    n.jsx(Ii, { className: "w-3.5 h-3.5 text-cyan-400" }),
                    n.jsx("span", {
                      children: "Explore Campus Hubs & Partner Onboarding",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-8",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-3 mb-2",
                  children: [
                    n.jsx("div", {
                      className: "h-[1px] w-8 bg-emerald-500/30",
                    }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-emerald-400",
                      children: "Accountability & Scale",
                    }),
                    n.jsx("div", {
                      className: "h-[1px] w-8 bg-emerald-500/30",
                    }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "Year 1 Ecosystem Milestones",
                }),
                n.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children:
                    "The Management Committee has committed to transparent targets for 2026-27.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3",
              children: [
                {
                  metric: "500",
                  label: "Active Members",
                  desc: "Across 4 Institutions",
                  color: "border-violet-500/30 text-violet-400",
                },
                {
                  metric: "50",
                  label: "Idea Pipelines",
                  desc: "Vetted Problem Statements",
                  color: "border-cyan-500/30 text-cyan-400",
                },
                {
                  metric: "25",
                  label: "POC Prototypes",
                  desc: "Micro-Grants Disbursed",
                  color: "border-emerald-500/30 text-emerald-400",
                },
                {
                  metric: "15",
                  label: "Representations",
                  desc: "National & Global Expos",
                  color: "border-amber-500/30 text-amber-400",
                },
                {
                  metric: "10",
                  label: "Pre-Startups",
                  desc: "Formal Business Models",
                  color: "border-sky-500/30 text-sky-400",
                },
                {
                  metric: "5",
                  label: "InQubit Incubations",
                  desc: "Incorporated Companies",
                  color: "border-pink-500/30 text-pink-400",
                },
              ].map((j, E) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/[0.02] p-4 rounded-2xl border border-white/5 text-center",
                    children: [
                      n.jsx("div", {
                        className: `font-display text-2xl font-bold mb-0.5 ${j.color.split(" ")[1]}`,
                        children: j.metric,
                      }),
                      n.jsx("div", {
                        className:
                          "text-[10px] font-bold text-gray-300 uppercase tracking-tight mb-0.5",
                        children: j.label,
                      }),
                      n.jsx("div", {
                        className: "text-[9px] text-gray-500",
                        children: j.desc,
                      }),
                    ],
                  },
                  E,
                ),
              ),
            }),
          ],
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className:
                "flex flex-col md:flex-row md:items-end justify-between mb-6",
              children: [
                n.jsxs("div", {
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center space-x-3 mb-1",
                      children: [
                        n.jsx("div", {
                          className: "h-[1px] w-8 bg-violet-500/30",
                        }),
                        n.jsx("span", {
                          className:
                            "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                          children: "Ecosystem Calendar",
                        }),
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl font-bold text-white",
                      children: "What's Happening Now?",
                    }),
                  ],
                }),
                n.jsxs("button", {
                  onClick: () => y("events"),
                  className:
                    "mt-2 md:mt-0 text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:underline flex items-center gap-1",
                  children: [
                    n.jsx("span", { children: "All Events & Hackathons" }),
                    " →",
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-3 gap-4",
              children: Mr.slice(0, 3).map((j) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/[0.02] p-5 rounded-2xl border border-white/5 hover:border-white/20 transition flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className:
                              "flex items-center justify-between mb-2.5 text-xs",
                            children: [
                              n.jsx("span", {
                                className:
                                  "px-2 py-0.5 rounded-full bg-white/5 text-violet-300 border border-white/10 font-semibold text-[9px] uppercase tracking-wider",
                                children: j.category,
                              }),
                              n.jsxs("span", {
                                className:
                                  "text-gray-400 flex items-center gap-1 text-[10px] font-mono",
                                children: [
                                  n.jsx(Nr, { className: "w-3 h-3" }),
                                  " ",
                                  j.date,
                                ],
                              }),
                            ],
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-1.5",
                            children: j.title,
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-3",
                            children: j.description,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px]",
                        children: [
                          n.jsx("span", {
                            className: "text-gray-500 text-[10px]",
                            children: j.institution.split("(")[0],
                          }),
                          n.jsx("button", {
                            onClick: () => y("events"),
                            className:
                              "font-bold text-cyan-400 hover:text-cyan-300 uppercase tracking-wider",
                            children: "Register →",
                          }),
                        ],
                      }),
                    ],
                  },
                  j.id,
                ),
              ),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className: "grid md:grid-cols-2 gap-5",
            children: [
              n.jsxs("div", {
                className:
                  "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 flex flex-col justify-between",
                children: [
                  n.jsxs("div", {
                    children: [
                      n.jsx("div", {
                        className:
                          "w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4",
                        children: n.jsx(Ii, { className: "w-5 h-5" }),
                      }),
                      n.jsx("div", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-1",
                        children: "For Academic Institutions",
                      }),
                      n.jsx("h3", {
                        className: "text-lg font-bold text-white mb-2",
                        children: "Bring WINQubit to Your Campus",
                      }),
                      n.jsx("p", {
                        className: "text-xs text-gray-400 leading-relaxed mb-6",
                        children:
                          "Establish an accredited pre-incubation chapter, complete with dedicated faculty mentor structures, student leadership bodies, access to multi-campus maker labs, and InQubit fast-tracking.",
                      }),
                    ],
                  }),
                  n.jsxs("button", {
                    onClick: o,
                    className:
                      "self-start px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[10px] font-bold uppercase tracking-wider transition shadow-lg shadow-violet-600/20 flex items-center justify-center gap-2",
                    children: [
                      n.jsx("span", {
                        children: "Partner With Us (Institutions)",
                      }),
                      n.jsx(Ft, { className: "w-3.5 h-3.5" }),
                    ],
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 flex flex-col justify-between",
                children: [
                  n.jsxs("div", {
                    children: [
                      n.jsx("div", {
                        className:
                          "w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4",
                        children: n.jsx(jr, { className: "w-5 h-5" }),
                      }),
                      n.jsx("div", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1",
                        children: "For Industry & Ecosystem",
                      }),
                      n.jsx("h3", {
                        className: "text-lg font-bold text-white mb-2",
                        children: "Bring Real Problems. Mentor Innovators.",
                      }),
                      n.jsx("p", {
                        className: "text-xs text-gray-400 leading-relaxed mb-6",
                        children:
                          "Sponsor corporate innovation tracks, provide proprietary datasets, offer executive technical mentorship, hire vetted engineering graduates, and license student patents.",
                      }),
                    ],
                  }),
                  n.jsxs("button", {
                    onClick: o,
                    className:
                      "self-start px-6 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-[10px] font-bold uppercase tracking-wider transition shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2",
                    children: [
                      n.jsx("span", {
                        children: "Collaborate With Us (Industry)",
                      }),
                      n.jsx(Ft, { className: "w-3.5 h-3.5" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-6 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-8 space-y-3",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center space-x-3 mb-1",
                      children: [
                        n.jsx("div", {
                          className: "h-[1px] w-8 bg-violet-500/30",
                        }),
                        n.jsx("span", {
                          className:
                            "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                          children: "The Incubation Pipeline",
                        }),
                      ],
                    }),
                    n.jsxs("h3", {
                      className: "text-2xl font-bold text-white",
                      children: [
                        "Powered by ",
                        n.jsx("span", {
                          className:
                            "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                          children: "InQubit",
                        }),
                      ],
                    }),
                    n.jsxs("p", {
                      className: "text-gray-400 text-xs leading-relaxed",
                      children: [
                        "While WINQubit powers the ",
                        n.jsx("strong", { children: "pre-incubation" }),
                        " phase right on campus—helping students discover problems, form teams, build MVPs, and file provisional patents—",
                        n.jsx("strong", { children: "InQubit" }),
                        " represents the institutional incubator that takes verified winners to market.",
                      ],
                    }),
                    n.jsxs("div", {
                      className: "grid sm:grid-cols-3 gap-3 pt-2",
                      children: [
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5",
                          children: [
                            n.jsx("div", {
                              className:
                                "text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1",
                              children: "1. Pre-Incubation",
                            }),
                            n.jsx("div", {
                              className: "text-[10px] text-gray-400",
                              children:
                                "Campus POCs, student leadership, ₹500 member passes, micro-grants.",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5",
                          children: [
                            n.jsx("div", {
                              className:
                                "text-[10px] font-bold text-violet-400 uppercase tracking-wider mb-1",
                              children: "2. Gateway Screening",
                            }),
                            n.jsx("div", {
                              className: "text-[10px] text-gray-400",
                              children:
                                "Management & Faculty review of verified POC metrics & traction.",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5",
                          children: [
                            n.jsx("div", {
                              className:
                                "text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1",
                              children: "3. InQubit Incubation",
                            }),
                            n.jsx("div", {
                              className: "text-[10px] text-gray-400",
                              children:
                                "Entity incorporation, angel seed capital, venture scaling.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "lg:col-span-4 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5",
                  children: [
                    n.jsx("div", {
                      className:
                        "w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 to-cyan-400 mx-auto mb-3 flex items-center justify-center font-display text-2xl font-bold text-white shadow-lg shadow-violet-600/20",
                      children: "Q",
                    }),
                    n.jsx("div", {
                      className: "text-sm font-bold text-white",
                      children: "InQubit Venture Labs",
                    }),
                    n.jsx("div", {
                      className: "text-[10px] text-gray-500 mb-3",
                      children: "Official Incubation Partner",
                    }),
                    n.jsx("button", {
                      onClick: () => y("about"),
                      className:
                        "text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:underline",
                      children: "Learn More About The Model →",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-violet-950/40 via-slate-900 to-cyan-950/40 border border-white/10 text-center relative overflow-hidden",
            children: [
              n.jsx("h2", {
                className:
                  "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2",
                children: "Have an Idea? Start Here.",
              }),
              n.jsx("p", {
                className:
                  "text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mb-6 leading-relaxed",
                children:
                  "Whether you already have a working circuit diagram or just an inquisitive question about how the world works, WINQubit is built for you.",
              }),
              n.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row items-center justify-center gap-3",
                children: [
                  n.jsx("button", {
                    onClick: M,
                    className:
                      "w-full sm:w-auto px-7 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-violet-600/25",
                    children: "Join WINQubit (₹500/Year)",
                  }),
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "w-full sm:w-auto px-7 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-cyan-400/20",
                    children: "Submit Your Idea",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  $h = ({ onNavigate: y, onOpenJoin: D, onOpenCollaborate: M }) =>
    n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Brand & Ecosystem Philosophy",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "About ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "WINQubit",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "A forward-looking pre-incubation movement built to transform campus curiosity into globally relevant deep-tech solutions, viable companies, and patents.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "bg-slate-900/40 p-6 md:p-10 rounded-[2rem] border border-white/5",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-7 space-y-3.5",
                  children: [
                    n.jsxs("div", {
                      className: "flex items-center space-x-3 mb-1",
                      children: [
                        n.jsx("div", {
                          className: "h-[1px] w-8 bg-violet-500/40",
                        }),
                        n.jsx("span", {
                          className:
                            "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                          children: "Our Identity",
                        }),
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl md:text-3xl font-bold text-white",
                      children: "Who We Are",
                    }),
                    n.jsxs("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children: [
                        "WINQubit is a student innovation and pre-incubation ecosystem powered by ",
                        n.jsx("strong", { children: "InQubit" }),
                        ". We operate across higher education institutions in Mumbai to create an inclusive, multidisciplinary playground where engineers, aviation technicians, data scientists, and hospitality creators collaborate on complex challenges.",
                      ],
                    }),
                    n.jsx("p", {
                      className: "text-gray-400 text-xs leading-relaxed",
                      children:
                        "By uniting academic mentors, industry stalwarts, prototype micro-grants, and dedicated lab infrastructure under one cohesive governance model, WINQubit bridges the gap between campus research and scalable commercialization.",
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className: "lg:col-span-5 grid grid-cols-2 gap-3",
                  children: [
                    n.jsxs("div", {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5",
                      children: [
                        n.jsx("div", {
                          className:
                            "text-xl font-bold font-display text-violet-400 mb-0.5",
                          children: "4",
                        }),
                        n.jsx("div", {
                          className: "text-xs font-semibold text-white",
                          children: "Active Campuses",
                        }),
                        n.jsx("div", {
                          className: "text-[9px] text-gray-500 font-mono",
                          children: "TSEC, TSDC, TIAT, TIHM",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5",
                      children: [
                        n.jsx("div", {
                          className:
                            "text-xl font-bold font-display text-cyan-400 mb-0.5",
                          children: "100%",
                        }),
                        n.jsx("div", {
                          className: "text-xs font-semibold text-white",
                          children: "Student IP Retained",
                        }),
                        n.jsx("div", {
                          className: "text-[9px] text-gray-500 font-mono",
                          children: "Pre-Incubation Stage",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5",
                      children: [
                        n.jsx("div", {
                          className:
                            "text-xl font-bold font-display text-emerald-400 mb-0.5",
                          children: "₹1L",
                        }),
                        n.jsx("div", {
                          className: "text-xs font-semibold text-white",
                          children: "Prototype Grants",
                        }),
                        n.jsx("div", {
                          className: "text-[9px] text-gray-500 font-mono",
                          children: "Zero-Equity Seed Support",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "p-4 rounded-2xl bg-white/[0.02] border border-white/5",
                      children: [
                        n.jsx("div", {
                          className:
                            "text-xl font-bold font-display text-pink-400 mb-0.5",
                          children: "InQubit",
                        }),
                        n.jsx("div", {
                          className: "text-xs font-semibold text-white",
                          children: "Incubation Linkage",
                        }),
                        n.jsx("div", {
                          className: "text-[9px] text-gray-500 font-mono",
                          children: "Direct Fast-Track Route",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "grid md:grid-cols-2 gap-5 mb-5",
              children: [
                n.jsxs("div", {
                  className:
                    "bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden flex flex-col justify-between",
                  children: [
                    n.jsxs("div", {
                      children: [
                        n.jsx("div", {
                          className:
                            "w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4",
                          children: n.jsx(uh, { className: "w-5 h-5" }),
                        }),
                        n.jsx("h3", {
                          className: "text-lg font-bold text-white mb-2",
                          children: "Our Vision",
                        }),
                        n.jsx("p", {
                          className: "text-xs text-gray-300 leading-relaxed",
                          children:
                            "To be a premier global catalyst for student-led innovation, where every idea, regardless of its origin, has the opportunity to be nurtured into a sustainable solution that drives technological progress, human equity, and economic value.",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "mt-4 pt-3 border-t border-white/5 text-[10px] text-violet-400 font-semibold flex items-center gap-1",
                      children: [
                        n.jsx(zl, { className: "w-3 h-3" }),
                        " Empowering the next generation of deep-tech leaders",
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "bg-slate-900/40 p-6 md:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden flex flex-col justify-between",
                  children: [
                    n.jsxs("div", {
                      children: [
                        n.jsx("div", {
                          className:
                            "w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4",
                          children: n.jsx(Oh, { className: "w-5 h-5" }),
                        }),
                        n.jsx("h3", {
                          className: "text-lg font-bold text-white mb-2",
                          children: "Our Mission",
                        }),
                        n.jsx("p", {
                          className: "text-xs text-gray-300 leading-relaxed",
                          children:
                            "To empower students through an inclusive ecosystem providing mentorship, advanced hardware & cloud resources, patent drafting assistance, and seamless industry pathways, bridging academic learning with real-world entrepreneurial execution.",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "mt-4 pt-3 border-t border-white/5 text-[10px] text-cyan-400 font-semibold flex items-center gap-1",
                      children: [
                        n.jsx(zl, { className: "w-3 h-3" }),
                        " From campus lab to InQubit venture incubation",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            n.jsxs("div", {
              className:
                "p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/5",
              children: [
                n.jsx("h3", {
                  className:
                    "text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 text-center border-b border-white/5 pb-3",
                  children: "Core Strategic Objectives",
                }),
                n.jsx("div", {
                  className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                  children: [
                    {
                      title: "De-Risk Prototype Building",
                      desc: "Provide seed micro-grants so students never abandon ideas due to hardware/cloud costs.",
                    },
                    {
                      title: "Drive Female Leadership",
                      desc: "Ensure equal representation and dedicated leadership fellowships for women in engineering & STEM.",
                    },
                    {
                      title: "Protect Student IP",
                      desc: "Guide patent prior-art searches and file provisional patents for high-potential academic projects.",
                    },
                    {
                      title: "Venture Pipeline for InQubit",
                      desc: "Systematically incubate and fund top-performing campus innovations into commercial startups.",
                    },
                  ].map((o, j) =>
                    n.jsxs(
                      "div",
                      {
                        className:
                          "p-4 rounded-2xl bg-white/[0.02] border border-white/5",
                        children: [
                          n.jsxs("div", {
                            className:
                              "font-bold text-xs text-cyan-400 mb-1 flex items-center gap-1.5",
                            children: [
                              n.jsx(vt, {
                                className:
                                  "w-3.5 h-3.5 text-emerald-400 flex-shrink-0",
                              }),
                              n.jsx("span", { children: o.title }),
                            ],
                          }),
                          n.jsx("p", {
                            className:
                              "text-[11px] text-gray-400 leading-relaxed pl-5",
                            children: o.desc,
                          }),
                        ],
                      },
                      j,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-5 items-stretch",
            children: [
              n.jsxs("div", {
                className:
                  "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 flex flex-col justify-between",
                children: [
                  n.jsxs("div", {
                    children: [
                      n.jsx("div", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-pink-400 mb-1.5",
                        children: "The Problem We Solve",
                      }),
                      n.jsx("h3", {
                        className: "text-lg font-bold text-white mb-3",
                        children: "Why WINQubit Exists",
                      }),
                      n.jsx("p", {
                        className: "text-xs text-gray-300 leading-relaxed mb-3",
                        children:
                          "Every year, thousands of brilliant engineering and science students build final-year capstones, hackathon prototypes, and research models that simply vanish after graduation.",
                      }),
                      n.jsx("p", {
                        className: "text-xs text-gray-400 leading-relaxed",
                        children:
                          "The traditional academic system lacks the intermediate pre-incubation runway—the bridge that connects a technical POC with investor readiness, legal IP protection, and industrial validation. WINQubit exists to ensure no worthy student idea is lost.",
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className: "mt-5 pt-3 border-t border-white/5",
                    children: n.jsxs("button", {
                      onClick: () => y("students"),
                      className:
                        "text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:underline flex items-center gap-1",
                      children: [
                        n.jsx("span", {
                          children: "See What Students Receive",
                        }),
                        " →",
                      ],
                    }),
                  }),
                ],
              }),
              n.jsxs("div", {
                className:
                  "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 flex flex-col justify-between",
                children: [
                  n.jsxs("div", {
                    children: [
                      n.jsx("div", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1.5",
                        children: "Operational Framework",
                      }),
                      n.jsx("h3", {
                        className: "text-lg font-bold text-white mb-3",
                        children: "Our Decentralized Campus Model",
                      }),
                      n.jsx("p", {
                        className: "text-xs text-gray-300 leading-relaxed mb-3",
                        children:
                          "Instead of being a solitary central club, WINQubit operates as an integrated federation across premier institutions (TSEC, TSDC, TIAT, TIHM).",
                      }),
                      n.jsx("p", {
                        className: "text-xs text-gray-400 leading-relaxed",
                        children:
                          "Each campus has an autonomous Faculty Committee (Principal + 2 Mentors) and 5 Student Committee Leads, supported by an overarching Management Committee for strategic policy, prototype funding, and InQubit venture linkage.",
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className: "mt-5 pt-3 border-t border-white/5",
                    children: n.jsxs("button", {
                      onClick: () => y("leadership"),
                      className:
                        "text-[10px] font-bold uppercase tracking-wider text-violet-400 hover:underline flex items-center gap-1",
                      children: [
                        n.jsx("span", {
                          children: "Inspect Governance Hierarchy",
                        }),
                        " →",
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: [
              n.jsxs("div", {
                className: "text-center max-w-2xl mx-auto mb-8",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex items-center justify-center space-x-3 mb-1",
                    children: [
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                      n.jsx("span", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                        children: "Collaborative Synergy",
                      }),
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                    ],
                  }),
                  n.jsx("h2", {
                    className: "text-2xl font-bold text-white mt-1",
                    children: "WINQubit × InQubit Partnership",
                  }),
                  n.jsx("p", {
                    className: "text-xs text-gray-400 mt-1",
                    children:
                      "A unified pipeline turning college lab discoveries into market-defining enterprises.",
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "grid md:grid-cols-2 gap-5",
                children: [
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5",
                    children: [
                      n.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-violet-400 font-bold text-sm",
                        children: [
                          n.jsx("span", {
                            className: "w-2.5 h-2.5 rounded-full bg-violet-400",
                          }),
                          "WINQubit (Campus Pre-Incubation)",
                        ],
                      }),
                      n.jsxs("ul", {
                        className:
                          "text-xs text-gray-300 space-y-2 leading-relaxed",
                        children: [
                          n.jsx("li", {
                            children:
                              "• ₹500/year all-inclusive student membership across 4 campuses",
                          }),
                          n.jsx("li", {
                            children:
                              "• Ideathons, hackathons, and cross-college multidisciplinary matchmaking",
                          }),
                          n.jsx("li", {
                            children:
                              "• Seed prototype micro-grants (₹10K to ₹1 Lakh) for hardware BOM and cloud",
                          }),
                          n.jsx("li", {
                            children:
                              "• Provisional patent drafting & faculty mentor guidance",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2.5",
                    children: [
                      n.jsxs("div", {
                        className:
                          "flex items-center gap-2 text-cyan-400 font-bold text-sm",
                        children: [
                          n.jsx("span", {
                            className: "w-2.5 h-2.5 rounded-full bg-cyan-400",
                          }),
                          "InQubit (Venture Incubation & Scale)",
                        ],
                      }),
                      n.jsxs("ul", {
                        className:
                          "text-xs text-gray-300 space-y-2 leading-relaxed",
                        children: [
                          n.jsx("li", {
                            children:
                              "• Formal Private Limited company registration & legal compliance",
                          }),
                          n.jsx("li", {
                            children:
                              "• Angel & Venture Capital syndicates with institutional seed checks",
                          }),
                          n.jsx("li", {
                            children:
                              "• Dedicated incubator co-working desks & enterprise client pilots",
                          }),
                          n.jsx("li", {
                            children:
                              "• Commercial IP licensing and global accelerator representations",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8 text-center",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-gradient-to-r from-violet-950/40 via-slate-900 to-indigo-950/40 border border-white/10 max-w-2xl mx-auto space-y-3",
            children: [
              n.jsx("h3", {
                className: "text-xl font-bold text-white",
                children: "Join the Innovation Movement",
              }),
              n.jsx("p", {
                className: "text-xs text-gray-400 max-w-md mx-auto",
                children:
                  "Be part of an ecosystem where student curiosity is backed by real resources, faculty mentorship, and industrial pathways.",
              }),
              n.jsxs("div", {
                className: "flex justify-center gap-3 pt-2",
                children: [
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-violet-600/20",
                    children: "Join WINQubit (₹500/Year)",
                  }),
                  n.jsx("button", {
                    onClick: M,
                    className:
                      "px-6 py-2.5 rounded-full border border-white/10 hover:border-white/30 text-gray-300 text-[10px] font-bold uppercase tracking-wider transition",
                    children: "Partner With Us",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  Ph = ({ onNavigate: y, onOpenJoin: D, onOpenCollaborate: M }) => {
    const [o, j] = se.useState("tsec"),
      E = Va.find((v) => v.id === o) || Va[0];
    return n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children:
                    "Connecting Academic Excellence with Industry Foresight",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Leadership & ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Governance",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "WINQubit unites a central management board with autonomous campus-level faculty and student innovation committees.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "bg-slate-900/40 rounded-[2rem] border border-white/5 p-6 md:p-8 text-center",
            children: [
              n.jsx("div", {
                className:
                  "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-6",
                children: "Ecosystem Governance Architecture",
              }),
              n.jsxs("div", {
                className: "max-w-4xl mx-auto",
                children: [
                  n.jsx("div", {
                    className:
                      "inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 border border-white/10 text-white shadow-lg shadow-violet-500/20 mb-3",
                    children: n.jsx("div", {
                      className:
                        "font-display font-bold text-sm tracking-wider uppercase",
                      children: "WINQubit Central Ecosystem",
                    }),
                  }),
                  n.jsx("div", {
                    className: "w-[1px] h-6 bg-violet-500/40 mx-auto",
                  }),
                  n.jsxs("div", {
                    className:
                      "inline-block px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-100 shadow-md mb-6",
                    children: [
                      n.jsx("div", {
                        className:
                          "font-bold text-xs text-cyan-400 uppercase tracking-widest",
                        children: "Overall Management Committee",
                      }),
                      n.jsx("div", {
                        className: "text-[11px] text-gray-400 mt-0.5",
                        children:
                          "Mr. Vishram Bapat • Mr. Dhruv Singh • Mr. Harnish Master",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "relative w-full max-w-2xl mx-auto hidden md:block",
                    children: [
                      n.jsx("div", {
                        className: "h-[1px] bg-white/10 w-full mb-6",
                      }),
                      n.jsx("div", {
                        className:
                          "absolute top-0 left-0 w-[1px] h-4 bg-white/10 -translate-y-full",
                      }),
                      n.jsx("div", {
                        className:
                          "absolute top-0 right-0 w-[1px] h-4 bg-white/10 -translate-y-full",
                      }),
                    ],
                  }),
                  n.jsx("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-3",
                    children: Va.map((v) =>
                      n.jsxs(
                        "div",
                        {
                          onClick: () => j(v.id),
                          className: `p-3.5 rounded-2xl border text-center cursor-pointer transition ${o === v.id ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400 shadow-lg shadow-cyan-500/10" : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/20 hover:text-white"}`,
                          children: [
                            n.jsx("div", {
                              className:
                                "font-display font-bold text-xs text-white",
                              children: v.shortName,
                            }),
                            n.jsx("div", {
                              className:
                                "text-[9px] uppercase tracking-wider text-gray-500 mt-0.5",
                              children: "Faculty & Students",
                            }),
                          ],
                        },
                        v.id,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-6",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Central Management Board",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-3 gap-5 mb-10",
              children: Vh.map((v) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-start space-y-4 hover:border-violet-500/40 transition group",
                    children: [
                      n.jsxs("div", {
                        className: "flex items-center space-x-4 w-full",
                        children: [
                          n.jsx("div", {
                            className:
                              "w-14 h-14 rounded-full bg-slate-800 border border-violet-500/50 flex-shrink-0 overflow-hidden",
                            children: n.jsx("img", {
                              src: v.photoUrl,
                              alt: v.name,
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("h3", {
                                className: "text-sm font-bold text-white",
                                children: v.name,
                              }),
                              n.jsx("p", {
                                className:
                                  "text-[10px] text-violet-400 uppercase font-semibold tracking-wider",
                                children: "Management Board",
                              }),
                              n.jsx("p", {
                                className: "text-[10px] text-gray-400",
                                children: v.designation.split("•")[0],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsx("p", {
                        className: "text-xs text-gray-400 leading-relaxed",
                        children: v.bio,
                      }),
                      n.jsx("div", {
                        className:
                          "flex flex-wrap gap-1.5 pt-2 border-t border-white/5 w-full",
                        children: v.focusAreas.map((H, S) =>
                          n.jsx(
                            "span",
                            {
                              className:
                                "px-2 py-0.5 rounded-full bg-white/[0.04] text-[9px] text-gray-300 border border-white/5 font-mono",
                              children: H,
                            },
                            S,
                          ),
                        ),
                      }),
                    ],
                  },
                  v.id,
                ),
              ),
            }),
            n.jsxs("div", {
              className:
                "p-6 rounded-[2rem] bg-white/[0.02] border border-white/5",
              children: [
                n.jsx("h3", {
                  className:
                    "text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-6 text-center border-b border-white/5 pb-3",
                  children: "Core Mandate & Governance Oversight",
                }),
                n.jsx("div", {
                  className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: Xh.map((v, H) =>
                    n.jsxs(
                      "div",
                      {
                        className:
                          "p-4 rounded-2xl bg-white/[0.02] border border-white/5",
                        children: [
                          n.jsxs("div", {
                            className: "flex items-center space-x-2.5 mb-1.5",
                            children: [
                              n.jsxs("span", {
                                className:
                                  "w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 text-[10px] font-bold flex items-center justify-center font-mono",
                                children: ["0", H + 1],
                              }),
                              n.jsx("div", {
                                className: "font-bold text-xs text-white",
                                children: v.title,
                              }),
                            ],
                          }),
                          n.jsx("p", {
                            className:
                              "text-[11px] text-gray-400 leading-relaxed pl-7",
                            children: v.description,
                          }),
                        ],
                      },
                      H,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "flex-1 flex flex-col bg-slate-900/40 rounded-[2rem] border border-white/5 p-6 md:p-8",
            children: [
              n.jsx("div", {
                className:
                  "flex items-center justify-center space-x-2 mb-8 flex-wrap gap-y-2",
                children: Va.map((v) => {
                  const H = o === v.id;
                  return n.jsx(
                    "button",
                    {
                      onClick: () => j(v.id),
                      className: `px-6 py-2 rounded-full text-xs font-bold transition uppercase tracking-wider ${H ? "bg-cyan-500/10 border border-cyan-500/40 text-cyan-400" : "text-gray-500 hover:text-white"}`,
                      children: v.shortName,
                    },
                    v.id,
                  );
                }),
              }),
              n.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
                children: [
                  n.jsxs("div", {
                    className:
                      "lg:col-span-4 lg:border-r lg:border-white/5 lg:pr-8",
                    children: [
                      n.jsxs("h4", {
                        className:
                          "text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2",
                        children: ["Faculty Committee — ", E.shortName],
                      }),
                      n.jsx("div", {
                        className: "space-y-3",
                        children: E.faculty.map((v, H) =>
                          n.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center space-x-3 p-3 bg-white/[0.02] border border-white/5 rounded-2xl",
                              children: [
                                n.jsx("div", {
                                  className:
                                    "w-11 h-11 rounded-xl bg-slate-800 border border-cyan-500/30 overflow-hidden flex-shrink-0",
                                  children: n.jsx("img", {
                                    src: v.photoUrl,
                                    alt: v.name,
                                    className: "w-full h-full object-cover",
                                  }),
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("p", {
                                      className: "text-xs font-bold text-white",
                                      children: v.name,
                                    }),
                                    n.jsx("p", {
                                      className: "text-[9px] text-gray-400",
                                      children: v.designation,
                                    }),
                                    n.jsx("p", {
                                      className:
                                        "text-[9px] text-violet-400 font-semibold",
                                      children: v.roleInWINQubit,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            v.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className: "lg:col-span-8",
                    children: [
                      n.jsxs("h4", {
                        className:
                          "text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2",
                        children: [
                          "Student Innovation Committee — ",
                          E.shortName,
                        ],
                      }),
                      n.jsx("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 gap-4",
                        children: E.students.map((v, H) => {
                          const S = [
                              "border-violet-500/30 text-violet-400",
                              "border-cyan-500/30 text-cyan-400",
                              "border-pink-500/30 text-pink-400",
                              "border-emerald-500/30 text-emerald-400",
                              "border-amber-500/30 text-amber-400",
                            ],
                            b = S[H % S.length],
                            [z, U] = b.split(" ");
                          return n.jsxs(
                            "div",
                            {
                              className:
                                "bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-center hover:border-white/20 transition",
                              children: [
                                n.jsx("div", {
                                  className: `w-14 h-14 bg-slate-800 rounded-full mx-auto mb-3 border ${z} overflow-hidden`,
                                  children: n.jsx("img", {
                                    src: v.photoUrl,
                                    alt: v.name,
                                    className: "w-full h-full object-cover",
                                  }),
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-xs font-bold text-white truncate",
                                  children: v.name,
                                }),
                                n.jsx("p", {
                                  className: `text-[9px] font-semibold mb-1 uppercase tracking-tight ${U}`,
                                  children: v.role,
                                }),
                                n.jsxs("p", {
                                  className:
                                    "text-[9px] text-gray-500 uppercase tracking-tighter font-mono",
                                  children: [v.branch, " | ", v.year],
                                }),
                              ],
                            },
                            v.id,
                          );
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6",
            children: [
              n.jsxs("div", {
                className: "space-y-1.5",
                children: [
                  n.jsx("h3", {
                    className: "text-lg font-bold text-white",
                    children: "Add Your Campus to the WINQubit Network",
                  }),
                  n.jsx("p", {
                    className: "text-xs text-gray-400 max-w-xl",
                    children:
                      "Modular governance framework designed for seamless collegiate expansion with dedicated faculty mentors and student leads.",
                  }),
                ],
              }),
              n.jsx("button", {
                onClick: M,
                className:
                  "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-violet-600/20 whitespace-nowrap",
                children: "Apply for Campus Chapter",
              }),
            ],
          }),
        }),
      ],
    });
  },
  ep = ({ onNavigate: y, onOpenJoin: D, onOpenInnovate: M }) => {
    const [o, j] = se.useState(0),
      E = (S) => {
        j(o === S ? null : S);
      },
      v = [
        {
          title: "Lab & Equipment Access",
          desc: "Access maker labs across all 4 institutions including 3D printing filaments, drone bays, CNC machines, and IoT sensor kits.",
          icon: Dr,
          color: "text-cyan-400",
        },
        {
          title: "Prototype Micro-Grants",
          desc: "Qualify for zero-equity seed funding ranging from ₹10,000 to ₹1,00,000 to buy microcontrollers, raw materials, and components.",
          icon: If,
          color: "text-emerald-400",
        },
        {
          title: "1-on-1 Mentorship Hours",
          desc: "Bi-weekly clinics with faculty advisors, startup founders, patent attorneys, and technical domain specialists.",
          icon: Mn,
          color: "text-violet-400",
        },
        {
          title: "Sponsored Cloud & AI APIs",
          desc: "Free credits for cloud computing instances (AWS, GCP), OpenAI/Gemini developer endpoints, and GitHub Enterprise tools.",
          icon: wr,
          color: "text-amber-400",
        },
        {
          title: "Patent & Research Support",
          desc: "Institutional prior art searches, provisional patent drafting subsidies, and IEEE/Scopus journal publishing guidance.",
          icon: zr,
          color: "text-pink-400",
        },
        {
          title: "Fast-Track InQubit Incubation",
          desc: "Top prototypes receive direct entry into InQubit for seed investment, private limited incorporation, and client pilots.",
          icon: An,
          color: "text-sky-400",
        },
      ],
      H = [
        {
          role: "Technology Lead",
          desc: "Oversees software architecture, hardware prototyping kits, and technical workshops on campus.",
          icon: wr,
          skills: ["Full Stack Dev", "Embedded IoT", "AI Engineering"],
        },
        {
          role: "Marketing & Social Media Lead",
          desc: "Drives brand storytelling, event promotion, video creation, and community buzz across social channels.",
          icon: Eh,
          skills: ["Content Tech", "Video Editing", "Brand Growth"],
        },
        {
          role: "Operations Lead",
          desc: "Manages event schedules, hackathon logistics, lab booking workflows, and volunteer teams.",
          icon: Pf,
          skills: ["Sprint Planning", "Logistics", "Team Management"],
        },
        {
          role: "Networking & Partnerships Lead",
          desc: "Connects with corporate alumni, invites industry guest speakers, and scouts inter-college talent.",
          icon: Mn,
          skills: ["Public Speaking", "Corporate Outreach", "Pitching"],
        },
        {
          role: "Finance & Grants Lead",
          desc: "Monitors prototype micro-grant disbursement, hardware BOM auditing, and budget compliance.",
          icon: If,
          skills: ["Financial Modeling", "Cost Auditing", "Budgeting"],
        },
      ];
    return n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Student Innovator Hub",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Start With ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "An Idea",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed mb-6 font-mono",
              children:
                "“You don't need a startup. You just need a problem worth solving.”",
            }),
            n.jsxs("div", {
              className: "flex flex-wrap justify-center gap-3",
              children: [
                n.jsx("button", {
                  onClick: D,
                  className:
                    "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-violet-600/20",
                  children: "Get ₹500 Annual Pass",
                }),
                n.jsx("button", {
                  onClick: M,
                  className:
                    "px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-[10px] uppercase tracking-wider transition",
                  children: "Submit Idea / Find Team",
                }),
              ],
            }),
          ],
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-8",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-3 mb-1",
                  children: [
                    n.jsx("div", { className: "h-[1px] w-8 bg-violet-500/30" }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                      children: "Member Privileges",
                    }),
                    n.jsx("div", { className: "h-[1px] w-8 bg-violet-500/30" }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "What You Get as a WINQubit Member",
                }),
                n.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children:
                    "A single ₹500 annual membership unlocks complete multi-campus maker infrastructure.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: v.map((S, b) => {
                const z = S.icon;
                return n.jsxs(
                  "div",
                  {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("div", {
                            className:
                              "w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-3",
                            children: n.jsx(z, {
                              className: `w-5 h-5 ${S.color}`,
                            }),
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-1.5",
                            children: S.title,
                          }),
                          n.jsx("p", {
                            className: "text-xs text-gray-400 leading-relaxed",
                            children: S.desc,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500",
                        children: [
                          n.jsx("span", { children: "Included for 2026-27" }),
                          n.jsx("span", {
                            className: "text-emerald-400 font-semibold",
                            children: "✓ Verified Access",
                          }),
                        ],
                      }),
                    ],
                  },
                  b,
                );
              }),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-7 space-y-4",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
                      children: [
                        n.jsx(Ji, { className: "w-3.5 h-3.5" }),
                        " High-Value Student Pass",
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-bold text-white",
                      children: "One Pass. Endless Innovation.",
                    }),
                    n.jsx("p", {
                      className:
                        "text-xs sm:text-sm text-gray-300 leading-relaxed",
                      children:
                        "For less than the price of a single textbook, the ₹500 annual membership gives you full year-long credentials across TSEC, TSDC, TIAT, and TIHM labs, direct prototype micro-grant eligibility, and entry into hackathons.",
                    }),
                    n.jsxs("div", {
                      className:
                        "grid sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-1",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            n.jsx(vt, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " Multi-campus maker lab pass",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            n.jsx(vt, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " ₹1,00,000 POC Grant screening",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            n.jsx(vt, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " 1-on-1 CTO & Founder office hours",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            n.jsx(vt, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " InQubit Pre-Incubation Certificate",
                          ],
                        }),
                      ],
                    }),
                    n.jsx("div", {
                      className: "pt-2",
                      children: n.jsxs("button", {
                        onClick: D,
                        className:
                          "px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-cyan-500/20 flex items-center gap-2",
                        children: [
                          n.jsx(Wf, { className: "w-3.5 h-3.5" }),
                          " Join for ₹500 / Academic Year",
                        ],
                      }),
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "lg:col-span-5",
                  children: n.jsxs("div", {
                    className:
                      "p-6 rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 border border-white/10 shadow-2xl relative overflow-hidden",
                    children: [
                      n.jsxs("div", {
                        className: "flex justify-between items-start mb-6",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-[9px] text-gray-400 uppercase tracking-widest font-mono",
                                children: "STUDENT INNOVATOR PASS",
                              }),
                              n.jsx("div", {
                                className:
                                  "font-display text-lg font-bold text-white mt-0.5",
                                children: "WINQubit × InQubit",
                              }),
                            ],
                          }),
                          n.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center font-display font-extrabold text-white text-sm",
                            children: "W",
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "space-y-3 mb-5 text-xs",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-[9px] text-gray-400 uppercase tracking-wider",
                                children: "MEMBERSHIP PRIVILEGES",
                              }),
                              n.jsx("div", {
                                className:
                                  "text-gray-200 text-xs font-semibold",
                                children:
                                  "TSEC • TSDC • TIAT • TIHM Shared Labs",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 text-xs",
                            children: [
                              n.jsxs("div", {
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "text-[9px] text-gray-400 uppercase tracking-wider",
                                    children: "ANNUAL FEE",
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "text-emerald-400 font-bold text-sm font-mono",
                                    children: "₹500 / Year",
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "text-[9px] text-gray-400 uppercase tracking-wider",
                                    children: "CYCLE",
                                  }),
                                  n.jsx("div", {
                                    className:
                                      "text-gray-200 font-mono text-xs",
                                    children: "2026 – 2027",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "pt-3 border-t border-white/5 flex items-center justify-between text-[9px] text-gray-400 font-mono",
                        children: [
                          n.jsx("span", {
                            children: "AUTHORIZED PRE-INCUBATION PASS",
                          }),
                          n.jsx("span", {
                            className: "text-cyan-400",
                            children: "STATUS: VERIFIED",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-8",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-3 mb-1",
                  children: [
                    n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-cyan-400",
                      children: "Lead on Campus",
                    }),
                    n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "Student Leadership Committees",
                }),
                n.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children:
                    "Each partner campus selects 5 student leaders annually to direct technology, community, operations, and finance.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
              children: H.map((S, b) => {
                const z = S.icon;
                return n.jsxs(
                  "div",
                  {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className: "flex items-center gap-3 mb-2.5",
                            children: [
                              n.jsx("div", {
                                className:
                                  "w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400",
                                children: n.jsx(z, { className: "w-4 h-4" }),
                              }),
                              n.jsx("h3", {
                                className: "font-bold text-sm text-white",
                                children: S.role,
                              }),
                            ],
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-3",
                            children: S.desc,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "pt-2.5 border-t border-white/5",
                        children: [
                          n.jsx("div", {
                            className:
                              "text-[9px] text-gray-500 mb-1 uppercase font-semibold",
                            children: "Key Skills Built",
                          }),
                          n.jsx("div", {
                            className: "flex flex-wrap gap-1",
                            children: S.skills.map((U, ae) =>
                              n.jsx(
                                "span",
                                {
                                  className:
                                    "px-2 py-0.5 rounded-full bg-slate-900 border border-white/5 text-[9px] text-cyan-300 font-mono",
                                  children: U,
                                },
                                ae,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  },
                  b,
                );
              }),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className: "max-w-3xl mx-auto",
            children: [
              n.jsxs("div", {
                className: "text-center mb-8",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex items-center justify-center space-x-3 mb-1",
                    children: [
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                      n.jsx("span", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                        children: "Got Questions?",
                      }),
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                    ],
                  }),
                  n.jsx("h2", {
                    className: "text-2xl font-bold text-white",
                    children: "Frequently Asked Questions",
                  }),
                ],
              }),
              n.jsx("div", {
                className: "space-y-2.5",
                children: Wh.map((S, b) => {
                  const z = o === b;
                  return n.jsxs(
                    "div",
                    {
                      className:
                        "rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition",
                      children: [
                        n.jsxs("button", {
                          onClick: () => E(b),
                          className:
                            "w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-cyan-300 transition",
                          children: [
                            n.jsx("span", { children: S.q }),
                            z
                              ? n.jsx(eh, {
                                  className: "w-4 h-4 text-cyan-400 shrink-0",
                                })
                              : n.jsx(Wm, {
                                  className: "w-4 h-4 text-gray-500 shrink-0",
                                }),
                          ],
                        }),
                        z &&
                          n.jsx("div", {
                            className:
                              "px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t border-white/5 pt-3",
                            children: S.a,
                          }),
                      ],
                    },
                    b,
                  );
                }),
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8 text-center",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 max-w-xl mx-auto space-y-3",
            children: [
              n.jsx("h3", {
                className: "text-xl font-bold text-white",
                children: "Ready to Build Something Real?",
              }),
              n.jsx("p", {
                className: "text-xs text-gray-400",
                children:
                  "Join 500+ student innovators across Mumbai. Claim your annual pass and start building today.",
              }),
              n.jsxs("div", {
                className: "flex justify-center gap-3 pt-2",
                children: [
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition",
                    children: "Get Member Pass (₹500)",
                  }),
                  n.jsx("button", {
                    onClick: M,
                    className:
                      "px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold text-[10px] uppercase tracking-wider transition",
                    children: "Submit Idea",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  tp = ({
    onNavigate: y,
    onOpenInnovate: D,
    onOpenJoin: M,
    onOpenCollaborate: o,
  }) =>
    n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Structured Incubation Tracks",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "WINQubit ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Programs",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "From first-year hackathons to deep-tech patent filings and venture creation with InQubit, explore our core flagship programs.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: Jh.map((j) =>
              n.jsxs(
                "div",
                {
                  className:
                    "p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                  children: [
                    n.jsxs("div", {
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center justify-between mb-3",
                          children: [
                            n.jsx("span", {
                              className:
                                "text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 border border-white/5 font-mono",
                              children: j.category,
                            }),
                            n.jsx("span", {
                              className: "text-[10px] text-gray-500 font-mono",
                              children: j.frequency,
                            }),
                          ],
                        }),
                        n.jsx("h3", {
                          className: "text-base font-bold text-white mb-1.5",
                          children: j.title,
                        }),
                        n.jsx("p", {
                          className:
                            "text-xs text-gray-400 leading-relaxed mb-4",
                          children: j.description,
                        }),
                        n.jsxs("div", {
                          className: "space-y-1.5 mb-5",
                          children: [
                            n.jsx("div", {
                              className:
                                "text-[9px] font-bold text-gray-500 uppercase tracking-wider",
                              children: "Key Inclusions",
                            }),
                            j.highlights.map((E, v) =>
                              n.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center gap-2 text-xs text-gray-300",
                                  children: [
                                    n.jsx(vt, {
                                      className:
                                        "w-3.5 h-3.5 text-emerald-400 shrink-0",
                                    }),
                                    n.jsx("span", { children: E }),
                                  ],
                                },
                                v,
                              ),
                            ),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "pt-3 border-t border-white/5 flex items-center justify-between",
                      children: [
                        n.jsxs("button", {
                          onClick: D,
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 flex items-center gap-1",
                          children: [
                            "Apply for Track ",
                            n.jsx(Ft, { className: "w-3 h-3" }),
                          ],
                        }),
                        n.jsx("span", {
                          className: "text-[9px] text-gray-500 font-mono",
                          children: "Zero Equity Grant",
                        }),
                      ],
                    }),
                  ],
                },
                j.id,
              ),
            ),
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-8 space-y-4",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20",
                      children: [
                        n.jsx(zr, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        "Flagship Funding Initiative",
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-bold text-white",
                      children: "₹1 Lakh Prototype Micro-Grant Scheme",
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "Hardware, cloud infrastructure, and component costs shouldn’t stand between an idea and a working proof-of-concept. The WINQubit Prototype Development fund provides zero-equity seed micro-grants directly to verified student teams across TSEC, TSDC, TIAT, and TIHM.",
                    }),
                    n.jsxs("div", {
                      className: "grid sm:grid-cols-3 gap-3 pt-1",
                      children: [
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "text-gray-400 text-[10px]",
                              children: "Phase 1: Seed",
                            }),
                            n.jsx("div", {
                              className:
                                "font-bold text-white text-sm font-mono",
                              children: "₹10,000 – ₹25,000",
                            }),
                            n.jsx("div", {
                              className: "text-[9px] text-gray-500",
                              children: "Component BOM & Bench Tests",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "text-gray-400 text-[10px]",
                              children: "Phase 2: Scale",
                            }),
                            n.jsx("div", {
                              className:
                                "font-bold text-white text-sm font-mono",
                              children: "₹50,000 – ₹1,00,000",
                            }),
                            n.jsx("div", {
                              className: "text-[9px] text-gray-500",
                              children: "Field Trial & Pilot Testing",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "text-gray-400 text-[10px]",
                              children: "Phase 3: InQubit",
                            }),
                            n.jsx("div", {
                              className:
                                "font-bold text-emerald-400 text-sm font-mono",
                              children: "Institutional Seed",
                            }),
                            n.jsx("div", {
                              className: "text-[9px] text-gray-500",
                              children: "Pvt Ltd Incubation Checks",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "lg:col-span-4 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5",
                  children: [
                    n.jsx("div", {
                      className:
                        "font-display text-4xl font-extrabold text-white mb-1",
                      children: "25",
                    }),
                    n.jsx("div", {
                      className: "text-xs font-bold text-cyan-400 mb-1",
                      children: "Prototypes Targeted (Year 1)",
                    }),
                    n.jsx("p", {
                      className: "text-[10px] text-gray-400 mb-5",
                      children:
                        "Evaluated and awarded on a rolling basis by the WINQubit Management Committee.",
                    }),
                    n.jsx("button", {
                      onClick: D,
                      className:
                        "w-full py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-cyan-400/20",
                      children: "Submit Proposal",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8 text-center",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 max-w-xl mx-auto space-y-3",
            children: [
              n.jsx("h3", {
                className: "text-xl font-bold text-white",
                children: "Have Questions About Track Admissions?",
              }),
              n.jsx("p", {
                className: "text-xs text-gray-400",
                children:
                  "Talk directly to your campus Student Leadership Committee or attend the weekly open office hours.",
              }),
              n.jsxs("div", {
                className: "flex justify-center gap-3 pt-2",
                children: [
                  n.jsx("button", {
                    onClick: () => y("leadership"),
                    className:
                      "px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/30 text-gray-300 font-semibold text-[10px] uppercase tracking-wider transition",
                    children: "Find Campus Mentor",
                  }),
                  n.jsx("button", {
                    onClick: M,
                    className:
                      "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition",
                    children: "Get Annual Pass (₹500)",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  ap = ({ onNavigate: y, onOpenInnovate: D, onOpenCollaborate: M }) => {
    const [o, j] = se.useState(Ar[0]);
    return n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Multidisciplinary Domains",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Innovation ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Areas",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "From cutting-edge drone avionics to AI agents, food engineering, and sustainable energy, WINQubit supports multidisciplinary cross-campus collaboration.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className: "grid lg:grid-cols-12 gap-6 items-start",
            children: [
              n.jsxs("div", {
                className: "lg:col-span-5 space-y-2",
                children: [
                  n.jsx("div", {
                    className:
                      "text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 px-2",
                    children: "Select an Innovation Cluster",
                  }),
                  Ar.map((E) => {
                    const v = o.id === E.id;
                    return n.jsxs(
                      "button",
                      {
                        onClick: () => j(E),
                        className: `w-full p-4 rounded-2xl text-left transition flex items-center justify-between border ${v ? "bg-slate-900/90 border-violet-500/60 shadow-lg text-white" : "bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/15 hover:text-white"}`,
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className:
                                  "text-[9px] font-mono text-cyan-400 mb-0.5",
                                children: E.id.toUpperCase(),
                              }),
                              n.jsx("div", {
                                className:
                                  "font-bold text-xs sm:text-sm leading-snug",
                                children: E.title,
                              }),
                            ],
                          }),
                          n.jsx($m, {
                            className: `w-4 h-4 ${v ? "text-cyan-400" : "text-gray-600"}`,
                          }),
                        ],
                      },
                      E.id,
                    );
                  }),
                ],
              }),
              n.jsx("div", {
                className: "lg:col-span-7",
                children: n.jsxs("div", {
                  className:
                    "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 relative overflow-hidden space-y-5",
                  children: [
                    n.jsxs("div", {
                      className:
                        "flex items-center justify-between border-b border-white/5 pb-3",
                      children: [
                        n.jsx("span", {
                          className:
                            "text-[10px] font-bold uppercase tracking-widest text-cyan-400 font-mono",
                          children: "CLUSTER SPECIFICATION",
                        }),
                        n.jsx("span", {
                          className: "text-[10px] text-gray-500 font-mono",
                          children: "WINQubit × InQubit Scope",
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsx("h3", {
                          className:
                            "text-xl sm:text-2xl font-bold text-white mb-1.5",
                          children: o.title,
                        }),
                        n.jsx("p", {
                          className: "text-xs text-gray-300 leading-relaxed",
                          children: o.description,
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsx("div", {
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2",
                          children: "Subfields & Technology Tracks",
                        }),
                        n.jsx("div", {
                          className: "flex flex-wrap gap-1.5",
                          children: o.subfields.map((E, v) =>
                            n.jsx(
                              "span",
                              {
                                className:
                                  "px-3 py-1 rounded-full bg-slate-900 border border-white/5 text-[10px] font-mono text-gray-300",
                                children: E,
                              },
                              v,
                            ),
                          ),
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      children: [
                        n.jsx("div", {
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2",
                          children:
                            "Sample Open Problem Statements for 2026-27",
                        }),
                        n.jsx("div", {
                          className: "space-y-2",
                          children: o.sampleProblems.map((E, v) =>
                            n.jsxs(
                              "div",
                              {
                                className:
                                  "p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5",
                                children: [
                                  n.jsx(Ki, {
                                    className:
                                      "w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5",
                                  }),
                                  n.jsx("span", {
                                    className:
                                      "text-xs text-gray-300 leading-relaxed",
                                    children: E,
                                  }),
                                ],
                              },
                              v,
                            ),
                          ),
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className:
                        "pt-3 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3",
                      children: [
                        n.jsxs("button", {
                          onClick: D,
                          className:
                            "w-full sm:w-auto px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-cyan-400/20 flex items-center justify-center gap-2",
                          children: [
                            n.jsx(Ki, { className: "w-3.5 h-3.5" }),
                            n.jsxs("span", {
                              children: [
                                "Submit Solution in ",
                                o.title.split("&")[0],
                              ],
                            }),
                          ],
                        }),
                        n.jsx("button", {
                          onClick: M,
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-white",
                          children: "Bring Corporate Challenge →",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: [
              n.jsxs("div", {
                className: "text-center max-w-2xl mx-auto mb-8",
                children: [
                  n.jsxs("div", {
                    className:
                      "flex items-center justify-center space-x-3 mb-1",
                    children: [
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                      n.jsx("span", {
                        className:
                          "text-[10px] font-bold uppercase tracking-widest text-violet-400",
                        children: "Interdisciplinary Power",
                      }),
                      n.jsx("div", {
                        className: "h-[1px] w-8 bg-violet-500/30",
                      }),
                    ],
                  }),
                  n.jsx("h2", {
                    className: "text-2xl font-bold text-white mt-1",
                    children: "Cross-Campus Synergy Matrix",
                  }),
                  n.jsx("p", {
                    className: "text-xs text-gray-400 mt-1",
                    children:
                      "Why our 4-institution ecosystem creates unique advantages that single-discipline colleges cannot replicate.",
                  }),
                ],
              }),
              n.jsxs("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
                children: [
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5",
                    children: [
                      n.jsx("div", {
                        className:
                          "text-xs font-bold font-mono text-gray-400 mb-0.5",
                        children: "TSEC + TIAT",
                      }),
                      n.jsx("div", {
                        className: "text-xs text-cyan-400 font-bold mb-1.5",
                        children: "Autonomous Drone Logistics",
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children:
                          "Software & AI algorithms from TSEC paired with aircraft maintenance and aerodynamics testing at TIAT.",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5",
                    children: [
                      n.jsx("div", {
                        className:
                          "text-xs font-bold font-mono text-gray-400 mb-0.5",
                        children: "TSEC + TIHM",
                      }),
                      n.jsx("div", {
                        className: "text-xs text-violet-400 font-bold mb-1.5",
                        children: "Smart Kitchen Robotics",
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children:
                          "Robotics automation from TSEC deployed in real culinary environments and food labs at TIHM.",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5",
                    children: [
                      n.jsx("div", {
                        className:
                          "text-xs font-bold font-mono text-gray-400 mb-0.5",
                        children: "TSDC + TSEC",
                      }),
                      n.jsx("div", {
                        className: "text-xs text-emerald-400 font-bold mb-1.5",
                        children: "FinTech & Media AI",
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children:
                          "Media communications & financial analysis from TSDC merged with machine learning pipelines from TSEC.",
                      }),
                    ],
                  }),
                  n.jsxs("div", {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5",
                    children: [
                      n.jsx("div", {
                        className:
                          "text-xs font-bold font-mono text-gray-400 mb-0.5",
                        children: "All 4 + InQubit",
                      }),
                      n.jsx("div", {
                        className: "text-xs text-pink-400 font-bold mb-1.5",
                        children: "Venture Incubation",
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children:
                          "A unified gateway from campus discovery to institutional seed funding and market scaling.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  lp = ({ onNavigate: y, onOpenCollaborate: D, onOpenJoin: M }) =>
    n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Ecosystem & Campus Alliance",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Our ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Partners",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "WINQubit unites academic powerhouses, incubation ventures, and industry leaders to create an unmatched innovation playground.",
            }),
          ],
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-8",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-3 mb-1",
                  children: [
                    n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-cyan-400",
                      children: "Academic Pillars",
                    }),
                    n.jsx("div", { className: "h-[1px] w-8 bg-cyan-500/30" }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "Institutional Partners",
                }),
                n.jsx("p", {
                  className: "text-xs text-gray-400 mt-1",
                  children:
                    "Higher education institutes in Mumbai powering WINQubit innovation chapters on campus.",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-2 gap-4",
              children: Va.map((o) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                              n.jsx("span", {
                                className:
                                  "font-display text-xl font-bold text-white",
                                children: o.shortName,
                              }),
                              n.jsxs("span", {
                                className:
                                  "text-[10px] font-mono px-3 py-0.5 rounded-full bg-slate-900 text-gray-400 border border-white/5",
                                children: ["Est. ", o.established],
                              }),
                            ],
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-0.5",
                            children: o.name,
                          }),
                          n.jsx("div", {
                            className:
                              "text-xs font-semibold text-violet-400 mb-2",
                            children: o.tagline,
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-4",
                            children: o.description,
                          }),
                          n.jsxs("div", {
                            className:
                              "p-3.5 rounded-xl bg-slate-900/60 border border-white/5 mb-4 text-xs text-gray-300",
                            children: [
                              n.jsx("div", {
                                className:
                                  "font-bold text-gray-300 text-[11px] mb-1",
                                children: "Campus Governance:",
                              }),
                              n.jsxs("div", {
                                className:
                                  "flex justify-between items-center text-[10px] text-gray-400",
                                children: [
                                  n.jsx("span", {
                                    children: "Principal + 2 Faculty Mentors",
                                  }),
                                  n.jsx("span", {
                                    className: "text-cyan-400 font-mono",
                                    children: "5 Student Leads",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "pt-3 border-t border-white/5 flex items-center justify-between",
                        children: [
                          n.jsx("button", {
                            onClick: () => y("leadership"),
                            className:
                              "text-[10px] font-bold uppercase tracking-wider text-cyan-400 hover:underline",
                            children: "View Campus Committee →",
                          }),
                          n.jsx("span", {
                            className: "text-[10px] text-gray-500 font-mono",
                            children: o.campusLocation,
                          }),
                        ],
                      }),
                    ],
                  },
                  o.id,
                ),
              ),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5 relative overflow-hidden",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-8 space-y-4",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20",
                      children: [
                        n.jsx(An, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        "Venture Incubation Partner",
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-bold text-white",
                      children: "InQubit Venture Incubator",
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "InQubit serves as the formal incubation partner for WINQubit. Once student prototypes pass validation and initial user testing through our campus committees, InQubit provides legal company incorporation, angel seed checks, institutional co-working desks, and commercial distribution partnerships.",
                    }),
                    n.jsxs("div", {
                      className: "grid sm:grid-cols-3 gap-3 pt-1",
                      children: [
                        n.jsxs("div", {
                          className:
                            "p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "font-bold text-white mb-1",
                              children: "Pre-Seed Capital",
                            }),
                            n.jsx("div", {
                              className:
                                "text-[11px] text-gray-400 leading-relaxed",
                              children:
                                "Direct investment routes for vetted student-led ventures.",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "font-bold text-white mb-1",
                              children: "Corporate Pilots",
                            }),
                            n.jsx("div", {
                              className:
                                "text-[11px] text-gray-400 leading-relaxed",
                              children:
                                "Introductions to enterprises for paid POC testing.",
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className:
                            "p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs",
                          children: [
                            n.jsx("div", {
                              className: "font-bold text-white mb-1",
                              children: "Global Launch",
                            }),
                            n.jsx("div", {
                              className:
                                "text-[11px] text-gray-400 leading-relaxed",
                              children:
                                "Representations at national & international expos.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "lg:col-span-4 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5",
                  children: [
                    n.jsx("div", {
                      className:
                        "w-12 h-12 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 mx-auto mb-3 flex items-center justify-center font-display text-2xl font-extrabold text-white",
                      children: "Q",
                    }),
                    n.jsx("div", {
                      className: "text-base font-bold text-white",
                      children: "InQubit Labs",
                    }),
                    n.jsx("div", {
                      className: "text-xs text-gray-400 mb-4 font-mono",
                      children: "Strategic Pre-Incubation Partner",
                    }),
                    n.jsx("button", {
                      onClick: D,
                      className:
                        "w-full py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition",
                      children: "Inquire About Incubation",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className: "text-center max-w-2xl mx-auto mb-8",
              children: [
                n.jsxs("div", {
                  className: "flex items-center justify-center space-x-3 mb-1",
                  children: [
                    n.jsx("div", {
                      className: "h-[1px] w-8 bg-emerald-500/30",
                    }),
                    n.jsx("span", {
                      className:
                        "text-[10px] font-bold uppercase tracking-widest text-emerald-400",
                      children: "How It Works",
                    }),
                    n.jsx("div", {
                      className: "h-[1px] w-8 bg-emerald-500/30",
                    }),
                  ],
                }),
                n.jsx("h2", {
                  className: "text-2xl md:text-3xl font-bold text-white",
                  children: "Partner Onboarding Flow",
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
              children: [
                {
                  step: "01",
                  title: "Submit Proposal",
                  desc: "Institutions or corporates fill out the online collaboration brief.",
                },
                {
                  step: "02",
                  title: "Management Alignment",
                  desc: "The Central Committee reviews scope, resources, and alignment.",
                },
                {
                  step: "03",
                  title: "MoU & Chapter Charter",
                  desc: "Formalize agreement and appoint Faculty & Student Leadership.",
                },
                {
                  step: "04",
                  title: "Launch & Kickoff",
                  desc: "Commence multi-campus access, hackathons, and micro-grant disbursements.",
                },
              ].map((o, j) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-left",
                    children: [
                      n.jsx("div", {
                        className:
                          "font-mono text-xl font-bold text-cyan-400 mb-1",
                        children: o.step,
                      }),
                      n.jsx("div", {
                        className:
                          "font-bold text-xs sm:text-sm text-white mb-1",
                        children: o.title,
                      }),
                      n.jsx("p", {
                        className: "text-[11px] text-gray-400 leading-relaxed",
                        children: o.desc,
                      }),
                    ],
                  },
                  j,
                ),
              ),
            }),
            n.jsx("div", {
              className: "mt-8 text-center",
              children: n.jsx("button", {
                onClick: D,
                className:
                  "px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider hover:brightness-110 transition shadow-lg shadow-emerald-500/20",
                children: "Partner With Us (MoU Inquiries)",
              }),
            }),
          ],
        }),
      ],
    }),
  np = ({ onNavigate: y, onOpenJoin: D, onOpenInnovate: M }) => {
    const [o, j] = se.useState("All"),
      [E, v] = se.useState(null),
      H = [
        "All",
        "Hackathon",
        "Workshop",
        "Conference",
        "Competition",
        "Mentorship",
      ],
      S = o === "All" ? Mr : Mr.filter((z) => z.category === o),
      b = (z) => {
        (v(z),
          setTimeout(() => {
            v(null);
          }, 4e3));
      };
    return n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Hackathons, Sprints & Mentorship",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Events & ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Opportunities",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "Participate in multi-campus hackathons, prototype showcases, industry challenges, and venture pitch days.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5 relative overflow-hidden",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-8 space-y-4",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
                      children: [
                        n.jsx(Cr, { className: "w-3.5 h-3.5" }),
                        "Annual Flagship Hackathon",
                      ],
                    }),
                    n.jsx("h2", {
                      className: "text-2xl sm:text-3xl font-bold text-white",
                      children:
                        "HackSpark 2026: Multi-Campus Innovation Sprint",
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "A 36-hour interdisciplinary hackathon uniting coders from TSEC, science researchers from TSDC, drone engineers from TIAT, and food creators from TIHM. Win from a prize pool of ₹2,50,000 and direct InQubit pre-incubation screening.",
                    }),
                    n.jsxs("div", {
                      className:
                        "flex flex-wrap gap-4 text-xs text-gray-300 pt-1 font-mono",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            n.jsx(Nr, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " October 15–16, 2026",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            n.jsx(Tr, {
                              className: "w-3.5 h-3.5 text-cyan-400",
                            }),
                            " TSEC Main Auditorium & Labs",
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-center gap-1.5",
                          children: [
                            n.jsx(Cr, {
                              className: "w-3.5 h-3.5 text-amber-400",
                            }),
                            " ₹2,50,000 Total Prize Pool",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                n.jsxs("div", {
                  className:
                    "lg:col-span-4 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5",
                  children: [
                    n.jsx("div", {
                      className:
                        "text-[10px] text-gray-400 uppercase tracking-widest font-mono mb-1",
                      children: "Registration Status",
                    }),
                    n.jsx("div", {
                      className:
                        "text-lg font-bold text-emerald-400 font-mono mb-4",
                      children: "OPEN FOR ENTRIES",
                    }),
                    n.jsx("button", {
                      onClick: () =>
                        b("HackSpark 2026: Multi-Campus Hackathon"),
                      className:
                        "w-full py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg",
                      children: "Register Your Team",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        E &&
          n.jsxs("div", {
            className:
              "fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-slate-900 border border-emerald-500/50 text-white text-xs shadow-2xl flex items-center gap-3 animate-in fade-in duration-200",
            children: [
              n.jsx(vt, { className: "w-4 h-4 text-emerald-400 shrink-0" }),
              n.jsxs("div", {
                children: [
                  n.jsx("div", {
                    className: "font-bold text-emerald-300",
                    children: "Registration Confirmed!",
                  }),
                  n.jsxs("div", {
                    className: "text-gray-400 text-[11px]",
                    children: [
                      "You are registered for ",
                      E,
                      ". Details sent to member email.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsxs("div", {
              className:
                "flex flex-wrap items-center justify-between gap-4 mb-6",
              children: [
                n.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: H.map((z) =>
                    n.jsx(
                      "button",
                      {
                        onClick: () => j(z),
                        className: `px-4 py-1.5 rounded-full text-xs font-semibold transition ${o === z ? "bg-violet-600 text-white" : "bg-white/[0.02] text-gray-400 hover:text-white border border-white/5"}`,
                        children: z,
                      },
                      z,
                    ),
                  ),
                }),
                n.jsxs("div", {
                  className: "text-xs text-gray-500 font-mono",
                  children: [
                    "Showing ",
                    n.jsx("span", {
                      className: "text-white font-bold",
                      children: S.length,
                    }),
                    " upcoming sessions",
                  ],
                }),
              ],
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: S.map((z) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                              n.jsx("span", {
                                className:
                                  "text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 border border-white/5 font-mono",
                                children: z.category,
                              }),
                              n.jsxs("span", {
                                className:
                                  "text-[10px] text-gray-400 flex items-center gap-1 font-mono",
                                children: [
                                  n.jsx(Nr, { className: "w-3 h-3" }),
                                  " ",
                                  z.date,
                                ],
                              }),
                            ],
                          }),
                          n.jsx("h3", {
                            className: "text-base font-bold text-white mb-1.5",
                            children: z.title,
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-4",
                            children: z.description,
                          }),
                          n.jsxs("div", {
                            className:
                              "space-y-1 text-[11px] text-gray-400 mb-5 bg-slate-900/60 p-3 rounded-xl border border-white/5",
                            children: [
                              n.jsxs("div", {
                                className:
                                  "flex items-center gap-1.5 text-gray-300",
                                children: [
                                  n.jsx(Tr, {
                                    className: "w-3 h-3 text-violet-400",
                                  }),
                                  n.jsx("span", { children: z.institution }),
                                ],
                              }),
                              z.time &&
                                n.jsxs("div", {
                                  className:
                                    "flex items-center gap-1.5 text-gray-400 font-mono text-[10px]",
                                  children: [
                                    n.jsx(lh, {
                                      className: "w-3 h-3 text-cyan-400",
                                    }),
                                    n.jsx("span", { children: z.time }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "pt-3 border-t border-white/5 flex items-center justify-between",
                        children: [
                          n.jsx("button", {
                            onClick: () => b(z.title),
                            className:
                              "px-4 py-1.5 rounded-full bg-violet-600/80 hover:bg-violet-600 text-white font-bold text-[10px] uppercase tracking-wider transition",
                            children: "Register",
                          }),
                          n.jsx("span", {
                            className: "text-[9px] text-gray-500 font-mono",
                            children: "Free for WINQubit Members",
                          }),
                        ],
                      }),
                    ],
                  },
                  z.id,
                ),
              ),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8 text-center",
          children: n.jsxs("div", {
            className:
              "p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 max-w-xl mx-auto space-y-3",
            children: [
              n.jsx("h3", {
                className: "text-xl font-bold text-white",
                children: "Want to host an event or workshop?",
              }),
              n.jsx("p", {
                className: "text-xs text-gray-400",
                children:
                  "Student committees and partner companies can propose workshops, technical masterclasses, or sponsor hackathon tracks.",
              }),
              n.jsxs("div", {
                className: "flex justify-center gap-3 pt-2",
                children: [
                  n.jsx("button", {
                    onClick: M,
                    className:
                      "px-6 py-2.5 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/30 text-gray-300 font-semibold text-[10px] uppercase tracking-wider transition",
                    children: "Submit Idea Proposal",
                  }),
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "px-6 py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition",
                    children: "Get Annual Pass (₹500)",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  ip = ({ onNavigate: y, onOpenJoin: D }) => {
    const [M, o] = se.useState(null),
      j = (b) => {
        (o(b),
          setTimeout(() => {
            o(null);
          }, 3e3));
      },
      E = [
        { id: "all", label: "All Resources" },
        { id: "students", label: "Student Resources" },
        { id: "documents", label: "WINQubit Documents" },
        { id: "institutional", label: "Institutional Resources" },
        { id: "reports", label: "Reports & Whitepapers" },
      ],
      [v, H] = se.useState("all"),
      S =
        v === "all"
          ? Kf
          : Kf.filter((b) =>
              b.category.toLowerCase().includes(v.toLowerCase()),
            );
    return n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Knowledge & Compliance Hub",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-cyan-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "WINQubit ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "Resources",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "Explore student guides, grant application templates, patent filing prior-art checklists, institutional charter bylaws, and annual reports.",
            }),
          ],
        }),
        M &&
          n.jsxs("div", {
            className:
              "fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-slate-900 border border-cyan-500/50 text-white text-xs shadow-2xl flex items-center gap-3 animate-in fade-in duration-200",
            children: [
              n.jsx(vt, { className: "w-4 h-4 text-cyan-400 shrink-0" }),
              n.jsxs("div", {
                children: [
                  n.jsx("div", {
                    className: "font-bold text-cyan-300",
                    children: "Document Downloaded!",
                  }),
                  n.jsxs("div", {
                    className: "text-gray-400 text-[11px]",
                    children: [M, " has been saved to your downloads."],
                  }),
                ],
              }),
            ],
          }),
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8",
          children: [
            n.jsx("div", {
              className:
                "flex flex-wrap items-center justify-center gap-2 mb-8",
              children: E.map((b) =>
                n.jsx(
                  "button",
                  {
                    onClick: () => H(b.id),
                    className: `px-4 py-1.5 rounded-full text-xs font-semibold transition ${v === b.id ? "bg-violet-600 text-white shadow-lg" : "bg-white/[0.02] text-gray-400 hover:text-white border border-white/5"}`,
                    children: b.label,
                  },
                  b.id,
                ),
              ),
            }),
            n.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
              children: S.map((b) =>
                n.jsxs(
                  "div",
                  {
                    className:
                      "p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsxs("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                              n.jsx("span", {
                                className:
                                  "text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900 text-violet-300 border border-white/5 font-mono",
                                children: b.category,
                              }),
                              n.jsxs("span", {
                                className:
                                  "text-[10px] text-gray-500 font-mono",
                                children: [b.fileType, " • ", b.fileSize],
                              }),
                            ],
                          }),
                          n.jsx("h3", {
                            className: "text-sm font-bold text-white mb-1.5",
                            children: b.title,
                          }),
                          n.jsx("p", {
                            className:
                              "text-xs text-gray-400 leading-relaxed mb-4",
                            children: b.description,
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "pt-3 border-t border-white/5 flex items-center justify-between",
                        children: [
                          n.jsxs("button", {
                            onClick: () => j(b.title),
                            className:
                              "px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-white/10 text-cyan-400 hover:text-cyan-300 text-[10px] font-bold transition flex items-center gap-1.5 font-mono",
                            children: [
                              n.jsx(rh, { className: "w-3 h-3" }),
                              " Download Doc",
                            ],
                          }),
                          n.jsx("span", {
                            className: "text-[9px] text-gray-500 font-mono",
                            children: "Verified by Committee",
                          }),
                        ],
                      }),
                    ],
                  },
                  b.id,
                ),
              ),
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsx("div", {
            className:
              "p-6 md:p-10 rounded-[2rem] bg-slate-900/40 border border-white/5",
            children: n.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-8 items-center",
              children: [
                n.jsxs("div", {
                  className: "lg:col-span-8 space-y-3",
                  children: [
                    n.jsxs("div", {
                      className:
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20",
                      children: [
                        n.jsx(Ji, { className: "w-3.5 h-3.5 text-cyan-400" }),
                        "IP & Patent Support",
                      ],
                    }),
                    n.jsx("h3", {
                      className: "text-xl sm:text-2xl font-bold text-white",
                      children: "Need Help Drafting a Provisional Patent?",
                    }),
                    n.jsx("p", {
                      className:
                        "text-gray-300 text-xs sm:text-sm leading-relaxed",
                      children:
                        "Student innovators retain 100% of their intellectual property during the pre-incubation phase. Our institutional patent mentors guide you through novelty assessment, Indian Patent Office (IPO) classifications, and claim drafting.",
                    }),
                  ],
                }),
                n.jsx("div", {
                  className: "lg:col-span-4 text-center",
                  children: n.jsx("button", {
                    onClick: () => y("contact"),
                    className:
                      "w-full py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg",
                    children: "Schedule IP Advisory Call",
                  }),
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  sp = ({ onNavigate: y, onOpenJoin: D, onOpenCollaborate: M }) => {
    const [o, j] = se.useState({
        name: "",
        email: "",
        department: "General Inquiries",
        campus: "TSEC (Engineering)",
        message: "",
      }),
      [E, v] = se.useState(!1),
      H = (S) => {
        (S.preventDefault(), v(!0));
      };
    return n.jsxs("div", {
      className: "space-y-16 md:space-y-24 pb-16",
      children: [
        n.jsxs("section", {
          className: "container mx-auto px-4 md:px-8 pt-8 text-center",
          children: [
            n.jsxs("div", {
              className: "flex items-center justify-center space-x-4 mb-3",
              children: [
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
                n.jsx("span", {
                  className:
                    "text-[10px] font-bold text-gray-400 uppercase tracking-widest",
                  children: "Get in Touch with the Committee",
                }),
                n.jsx("div", { className: "h-[1px] w-12 bg-violet-500/30" }),
              ],
            }),
            n.jsxs("h1", {
              className:
                "font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2",
              children: [
                "Contact ",
                n.jsx("span", {
                  className:
                    "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400",
                  children: "WINQubit",
                }),
              ],
            }),
            n.jsx("p", {
              className:
                "text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed",
              children:
                "Reach our Central Management Committee, campus Faculty Coordinators, or Student Innovation Leads.",
            }),
          ],
        }),
        n.jsx("section", {
          className: "container mx-auto px-4 md:px-8",
          children: n.jsxs("div", {
            className: "grid lg:grid-cols-12 gap-6 items-start",
            children: [
              n.jsx("div", {
                className: "lg:col-span-5 space-y-6",
                children: n.jsxs("div", {
                  className:
                    "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 space-y-5",
                  children: [
                    n.jsx("h3", {
                      className: "text-lg font-bold text-white",
                      children: "Central Ecosystem Office",
                    }),
                    n.jsx("p", {
                      className: "text-xs text-gray-400 leading-relaxed",
                      children:
                        "Managed in coordination with Thakur Educational Campus innovation centers and InQubit Venture Labs.",
                    }),
                    n.jsxs("div", {
                      className: "space-y-3.5 text-xs text-gray-300",
                      children: [
                        n.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            n.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0 mt-0.5",
                              children: n.jsx(Tr, { className: "w-4 h-4" }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("div", {
                                  className:
                                    "font-bold text-white text-xs mb-0.5",
                                  children: "Main Innovation Hub",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-gray-400 text-[11px] leading-relaxed",
                                  children:
                                    "Zagdu Singh Charitable Trust Campus, Thakur Village, Kandivali (East), Mumbai, Maharashtra 400101",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            n.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5",
                              children: n.jsx(Ff, { className: "w-4 h-4" }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("div", {
                                  className:
                                    "font-bold text-white text-xs mb-0.5",
                                  children: "Official Inquiries",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-gray-400 text-[11px] font-mono",
                                  children:
                                    "info@winqubit.org • partnerships@winqubit.org",
                                }),
                              ],
                            }),
                          ],
                        }),
                        n.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            n.jsx("div", {
                              className:
                                "w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5",
                              children: n.jsx($f, { className: "w-4 h-4" }),
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("div", {
                                  className:
                                    "font-bold text-white text-xs mb-0.5",
                                  children: "Helpline & WhatsApp Hub",
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-gray-400 text-[11px] font-mono",
                                  children: "+91 (022) 6730 8000 / 8100",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    n.jsxs("div", {
                      className: "pt-4 border-t border-white/5",
                      children: [
                        n.jsx("div", {
                          className:
                            "text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2",
                          children: "Campus Coordinators",
                        }),
                        n.jsxs("div", {
                          className:
                            "grid grid-cols-2 gap-2 text-[11px] text-gray-300",
                          children: [
                            n.jsxs("div", {
                              className:
                                "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-semibold text-white text-[11px]",
                                  children: "TSEC Coordinator",
                                }),
                                n.jsx("p", {
                                  className: "text-gray-400 text-[10px]",
                                  children: "Dr. Nirmala Kamble",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-semibold text-white text-[11px]",
                                  children: "TSDC Coordinator",
                                }),
                                n.jsx("p", {
                                  className: "text-gray-400 text-[10px]",
                                  children: "Mrs. Abha Dhote",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-semibold text-white text-[11px]",
                                  children: "TIAT Coordinator",
                                }),
                                n.jsx("p", {
                                  className: "text-gray-400 text-[10px]",
                                  children: "Mr. Vivek Kulkarni",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "p-2.5 rounded-xl bg-white/[0.02] border border-white/5",
                              children: [
                                n.jsx("span", {
                                  className:
                                    "font-semibold text-white text-[11px]",
                                  children: "TIHM Coordinator",
                                }),
                                n.jsx("p", {
                                  className: "text-gray-400 text-[10px]",
                                  children: "Faculty Coordinator",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              n.jsx("div", {
                className: "lg:col-span-7",
                children: n.jsxs("div", {
                  className:
                    "p-6 md:p-8 rounded-[2rem] bg-slate-900/40 border border-white/5",
                  children: [
                    n.jsx("h3", {
                      className:
                        "text-xl sm:text-2xl font-bold text-white mb-1.5",
                      children: "Send a Message",
                    }),
                    n.jsx("p", {
                      className: "text-xs text-gray-400 mb-5",
                      children:
                        "Fill in your query and the relevant Faculty Mentor or Student Committee representative will respond within 24 hours.",
                    }),
                    E
                      ? n.jsxs("div", {
                          className: "text-center py-8 space-y-3",
                          children: [
                            n.jsx("div", {
                              className:
                                "w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-1",
                              children: n.jsx(vt, { className: "w-6 h-6" }),
                            }),
                            n.jsx("h4", {
                              className: "text-xl font-bold text-white",
                              children: "Message Dispatched!",
                            }),
                            n.jsxs("p", {
                              className:
                                "text-xs text-gray-400 max-w-md mx-auto",
                              children: [
                                "Thank you, ",
                                n.jsx("span", {
                                  className: "text-cyan-400 font-bold",
                                  children: o.name,
                                }),
                                ". Your inquiry has been routed to the ",
                                n.jsx("span", {
                                  className: "text-white font-semibold",
                                  children: o.campus,
                                }),
                                " committee desk.",
                              ],
                            }),
                            n.jsx("button", {
                              type: "button",
                              onClick: () => {
                                (v(!1),
                                  j({
                                    name: "",
                                    email: "",
                                    department: "General Inquiries",
                                    campus: "TSEC (Engineering)",
                                    message: "",
                                  }));
                              },
                              className:
                                "px-6 py-2 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/30 text-white text-[10px] uppercase tracking-wider font-bold transition",
                              children: "Send Another Note",
                            }),
                          ],
                        })
                      : n.jsxs("form", {
                          onSubmit: H,
                          className: "space-y-4",
                          children: [
                            n.jsxs("div", {
                              className: "grid sm:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Your Name *",
                                    }),
                                    n.jsx("input", {
                                      type: "text",
                                      required: !0,
                                      placeholder: "e.g. Ananya Sharma",
                                      value: o.name,
                                      onChange: (S) =>
                                        j({ ...o, name: S.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Email Address *",
                                    }),
                                    n.jsx("input", {
                                      type: "email",
                                      required: !0,
                                      placeholder: "ananya@example.com",
                                      value: o.email,
                                      onChange: (S) =>
                                        j({ ...o, email: S.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className: "grid sm:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Inquiry Department",
                                    }),
                                    n.jsxs("select", {
                                      value: o.department,
                                      onChange: (S) =>
                                        j({ ...o, department: S.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400",
                                      children: [
                                        n.jsx("option", {
                                          children: "General Inquiries",
                                        }),
                                        n.jsx("option", {
                                          children: "Student Membership (₹500)",
                                        }),
                                        n.jsx("option", {
                                          children: "Prototype Micro-Grants",
                                        }),
                                        n.jsx("option", {
                                          children: "Patent & IP Guidance",
                                        }),
                                        n.jsx("option", {
                                          children: "Institutional Partnership",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Corporate / Industry Challenge",
                                        }),
                                        n.jsx("option", {
                                          children: "InQubit Incubation",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Target Campus",
                                    }),
                                    n.jsxs("select", {
                                      value: o.campus,
                                      onChange: (S) =>
                                        j({ ...o, campus: S.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400",
                                      children: [
                                        n.jsx("option", {
                                          children:
                                            "Central Management Committee",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "TSEC (Thakur Shyamnarayan Engineering)",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "TSDC (Thakur Shyamnarayan Degree)",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "TIAT (Aviation Technology)",
                                        }),
                                        n.jsx("option", {
                                          children: "TIHM (Hotel Management)",
                                        }),
                                        n.jsx("option", {
                                          children: "InQubit Venture Labs",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1",
                                  children: "Your Message / Query *",
                                }),
                                n.jsx("textarea", {
                                  rows: 4,
                                  required: !0,
                                  placeholder:
                                    "Share your inquiry, question, or project outline in detail...",
                                  value: o.message,
                                  onChange: (S) =>
                                    j({ ...o, message: S.target.value }),
                                  className:
                                    "w-full bg-slate-900 border border-white/5 rounded-xl p-3 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                                }),
                              ],
                            }),
                            n.jsxs("button", {
                              type: "submit",
                              className:
                                "w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-[10px] uppercase tracking-wider transition shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2",
                              children: [
                                n.jsx(kr, { className: "w-3.5 h-3.5" }),
                                " Send Message",
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  cp = ({ isOpen: y, onClose: D }) => {
    const [M, o] = se.useState(1),
      [j, E] = se.useState("idea"),
      [v, H] = se.useState({
        institution: "Thakur Shyamnarayan Engineering College (TSEC)",
        fullName: "",
        email: "",
        phone: "",
        rollNo: "",
        branch: "Computer Engineering",
        year: "TE",
        domain: "Artificial Intelligence & Deep Tech",
        ideaTitle: "",
        problemStatement: "",
        proposedSolution: "",
        currentStage: "Concept / Ideation",
        supportNeeded: [],
        teamSize: "1",
      }),
      [S, b] = se.useState(!1);
    if (!y) return null;
    const z = [
        {
          id: "idea",
          label: "I have an idea to build",
          icon: Ki,
          desc: "Submit your solution for technical validation & review",
        },
        {
          id: "team",
          label: "I need a multidisciplinary team",
          icon: Mn,
          desc: "Connect with coders, designers, or domain specialists",
        },
        {
          id: "mentor",
          label: "I need an industry mentor",
          icon: Uh,
          desc: "Get paired with senior founders and technical experts",
        },
        {
          id: "prototype",
          label: "I want to build a prototype",
          icon: Dr,
          desc: "Apply for lab access and prototype micro-grants",
        },
        {
          id: "challenge",
          label: "I want to solve industry challenges",
          icon: Cr,
          desc: "Participate in corporate & HackSpark challenges",
        },
      ],
      U = (k) => {
        H((F) => ({
          ...F,
          supportNeeded: F.supportNeeded.includes(k)
            ? F.supportNeeded.filter((Me) => Me !== k)
            : [...F.supportNeeded, k],
        }));
      },
      ae = (k) => {
        (k.preventDefault(), b(!0));
      },
      De = () => {
        (b(!1), o(1), D());
      };
    return n.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto",
      children: n.jsxs("div", {
        className:
          "relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden my-8",
        children: [
          n.jsx("div", {
            className:
              "h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-indigo-500 w-full",
          }),
          n.jsxs("div", {
            className: "p-6 md:p-8",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between pb-4 border-b border-white/5",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-9 h-9 rounded-full bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400",
                        children: n.jsx(zl, { className: "w-4 h-4" }),
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("h3", {
                            className:
                              "text-lg font-bold text-white flex items-center gap-2",
                            children: "Student Innovation Portal",
                          }),
                          n.jsx("p", {
                            className: "text-[11px] text-gray-400",
                            children:
                              "WINQubit × InQubit Idea Intake & Acceleration Engine",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition",
                    "aria-label": "Close modal",
                    children: n.jsx(Wi, { className: "w-4 h-4" }),
                  }),
                ],
              }),
              S
                ? n.jsxs("div", {
                    className: "text-center py-6 space-y-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-1",
                        children: n.jsx(vt, { className: "w-6 h-6" }),
                      }),
                      n.jsx("h4", {
                        className: "text-xl font-bold text-white",
                        children: "Innovation Proposal Submitted!",
                      }),
                      n.jsxs("p", {
                        className: "text-xs text-gray-300 max-w-md mx-auto",
                        children: [
                          "Thank you, ",
                          n.jsx("span", {
                            className: "text-cyan-400 font-semibold",
                            children: v.fullName || "Innovator",
                          }),
                          ". Your idea “",
                          n.jsx("span", {
                            className: "text-violet-300",
                            children: v.ideaTitle || "New Project",
                          }),
                          "” has been registered under ",
                          n.jsx("span", {
                            className: "font-semibold text-white",
                            children: v.institution,
                          }),
                          ".",
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "bg-white/[0.02] border border-white/5 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-gray-300",
                        children: [
                          n.jsxs("div", {
                            className:
                              "flex justify-between border-b border-white/5 pb-1.5",
                            children: [
                              n.jsx("span", {
                                className: "text-gray-400 text-[11px]",
                                children: "Tracking Reference:",
                              }),
                              n.jsxs("span", {
                                className:
                                  "font-mono text-cyan-400 font-bold text-[11px]",
                                children: [
                                  "WINQ-2026-",
                                  Math.floor(1e3 + Math.random() * 9e3),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "flex justify-between border-b border-white/5 pb-1.5",
                            children: [
                              n.jsx("span", {
                                className: "text-gray-400 text-[11px]",
                                children: "Next Review Stage:",
                              }),
                              n.jsx("span", {
                                className: "text-amber-300 text-[11px]",
                                children: "Institutional Faculty Review Board",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className: "flex justify-between",
                            children: [
                              n.jsx("span", {
                                className: "text-gray-400 text-[11px]",
                                children: "Target Response:",
                              }),
                              n.jsx("span", {
                                className:
                                  "text-emerald-400 font-medium text-[11px]",
                                children:
                                  "Within 72 Hours via WhatsApp / Email",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsx("button", {
                          type: "button",
                          onClick: De,
                          className:
                            "px-6 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[10px] uppercase tracking-wider font-bold transition shadow-lg",
                          children: "Done & Return to Site",
                        }),
                      }),
                    ],
                  })
                : n.jsxs("div", {
                    children: [
                      n.jsx("div", {
                        className: "flex items-center justify-between my-5",
                        children: [1, 2, 3, 4].map((k) =>
                          n.jsxs(
                            "div",
                            {
                              className: "flex items-center flex-1",
                              children: [
                                n.jsx("div", {
                                  className: `w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold font-mono transition-all ${M === k ? "bg-violet-600 text-white shadow-lg" : M > k ? "bg-cyan-500 text-slate-950" : "bg-white/[0.03] text-gray-500 border border-white/5"}`,
                                  children: M > k ? "✓" : k,
                                }),
                                k < 4 &&
                                  n.jsx("div", {
                                    className: `h-[1px] flex-1 mx-2 transition-all ${M > k ? "bg-cyan-500/50" : "bg-white/5"}`,
                                  }),
                              ],
                            },
                            k,
                          ),
                        ),
                      }),
                      M === 1 &&
                        n.jsxs("div", {
                          className: "space-y-3.5",
                          children: [
                            n.jsxs("div", {
                              className: "mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "text-base font-bold text-white",
                                  children:
                                    "How can WINQubit power your journey?",
                                }),
                                n.jsx("p", {
                                  className: "text-xs text-gray-400",
                                  children:
                                    "Select your primary reason for reaching out today.",
                                }),
                              ],
                            }),
                            n.jsx("div", {
                              className: "grid gap-2",
                              children: z.map((k) => {
                                const F = k.icon,
                                  Me = j === k.id;
                                return n.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => E(k.id),
                                    className: `flex items-start gap-3.5 p-3.5 rounded-2xl text-left border transition-all ${Me ? "bg-violet-600/15 border-violet-500/50 text-white" : "bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/15"}`,
                                    children: [
                                      n.jsx("div", {
                                        className: `p-2 rounded-xl ${Me ? "bg-violet-600 text-white" : "bg-white/5 text-gray-400"}`,
                                        children: n.jsx(F, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      n.jsxs("div", {
                                        className: "flex-1",
                                        children: [
                                          n.jsx("div", {
                                            className:
                                              "font-semibold text-xs text-white",
                                            children: k.label,
                                          }),
                                          n.jsx("div", {
                                            className:
                                              "text-[11px] text-gray-400 mt-0.5 leading-relaxed",
                                            children: k.desc,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  k.id,
                                );
                              }),
                            }),
                          ],
                        }),
                      M === 2 &&
                        n.jsxs("div", {
                          className: "space-y-3.5",
                          children: [
                            n.jsxs("div", {
                              className: "mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "text-base font-bold text-white",
                                  children: "Student & Campus Details",
                                }),
                                n.jsx("p", {
                                  className: "text-xs text-gray-400",
                                  children:
                                    "Tell us where you are studying and how we can reach you.",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsxs("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                  children: [
                                    n.jsx(Ii, {
                                      className: "w-3.5 h-3.5 text-violet-400",
                                    }),
                                    "Select Your Academic Institution",
                                  ],
                                }),
                                n.jsxs("select", {
                                  value: v.institution,
                                  onChange: (k) =>
                                    H({ ...v, institution: k.target.value }),
                                  className:
                                    "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                  children: [
                                    n.jsx("option", {
                                      children:
                                        "Thakur Shyamnarayan Engineering College (TSEC)",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Thakur Shyamnarayan Degree College (TSDC)",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Thakur Institute of Aviation Technology (TIAT)",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Thakur Institute of Hotel Management (TIHM)",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Other Partner Institution / University",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Full Name *",
                                    }),
                                    n.jsx("input", {
                                      type: "text",
                                      required: !0,
                                      placeholder: "e.g. Rahul Sharma",
                                      value: v.fullName,
                                      onChange: (k) =>
                                        H({ ...v, fullName: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Roll Number / Student ID *",
                                    }),
                                    n.jsx("input", {
                                      type: "text",
                                      required: !0,
                                      placeholder: "e.g. TSEC-2024-089",
                                      value: v.rollNo,
                                      onChange: (k) =>
                                        H({ ...v, rollNo: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500 font-mono",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Email Address *",
                                    }),
                                    n.jsx("input", {
                                      type: "email",
                                      required: !0,
                                      placeholder: "student@college.edu.in",
                                      value: v.email,
                                      onChange: (k) =>
                                        H({ ...v, email: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "WhatsApp Contact Number *",
                                    }),
                                    n.jsx("input", {
                                      type: "tel",
                                      required: !0,
                                      placeholder: "+91 98765 43210",
                                      value: v.phone,
                                      onChange: (k) =>
                                        H({ ...v, phone: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500 font-mono",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Branch / Degree Course *",
                                    }),
                                    n.jsx("input", {
                                      type: "text",
                                      placeholder:
                                        "e.g. Computer Engineering / B.Sc IT",
                                      value: v.branch,
                                      onChange: (k) =>
                                        H({ ...v, branch: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Current Year of Study",
                                    }),
                                    n.jsxs("select", {
                                      value: v.year,
                                      onChange: (k) =>
                                        H({ ...v, year: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                      children: [
                                        n.jsx("option", {
                                          value: "FE",
                                          children: "First Year (FE / FY)",
                                        }),
                                        n.jsx("option", {
                                          value: "SE",
                                          children: "Second Year (SE / SY)",
                                        }),
                                        n.jsx("option", {
                                          value: "TE",
                                          children: "Third Year (TE / TY)",
                                        }),
                                        n.jsx("option", {
                                          value: "BE",
                                          children:
                                            "Final Year (BE / B.Tech / Final)",
                                        }),
                                        n.jsx("option", {
                                          value: "Postgrad",
                                          children: "Postgraduate / Masters",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      M === 3 &&
                        n.jsxs("div", {
                          className: "space-y-3.5",
                          children: [
                            n.jsxs("div", {
                              className: "mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "text-base font-bold text-white",
                                  children: "Innovation Domain & Problem",
                                }),
                                n.jsx("p", {
                                  className: "text-xs text-gray-400",
                                  children:
                                    "Describe the problem you are passionate about solving.",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1",
                                  children: "Target Innovation Domain",
                                }),
                                n.jsxs("select", {
                                  value: v.domain,
                                  onChange: (k) =>
                                    H({ ...v, domain: k.target.value }),
                                  className:
                                    "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                  children: [
                                    n.jsx("option", {
                                      children:
                                        "Artificial Intelligence & Deep Tech",
                                    }),
                                    n.jsx("option", {
                                      children: "Aerospace, Drone & Mobility",
                                    }),
                                    n.jsx("option", {
                                      children: "HealthTech & Life Sciences",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Industry 4.0 & Advanced Hardware",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Creative, Culinary & Hospitality Tech",
                                    }),
                                    n.jsx("option", {
                                      children:
                                        "Sustainability & Social Impact (SDGs)",
                                    }),
                                    n.jsx("option", {
                                      children: "FinTech & Digital Commerce",
                                    }),
                                    n.jsx("option", {
                                      children: "Other / Cross-Disciplinary",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1",
                                  children: "Idea / Project Title *",
                                }),
                                n.jsx("input", {
                                  type: "text",
                                  placeholder:
                                    "e.g. AI-Powered Autonomous Agricultural Drone for Crop Disease Detection",
                                  value: v.ideaTitle,
                                  onChange: (k) =>
                                    H({ ...v, ideaTitle: k.target.value }),
                                  className:
                                    "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              children: [
                                n.jsx("label", {
                                  className:
                                    "block text-[11px] font-semibold text-gray-300 mb-1",
                                  children:
                                    "Problem Statement (What pain point are you solving?) *",
                                }),
                                n.jsx("textarea", {
                                  rows: 3,
                                  placeholder:
                                    "Explain the real-world friction, target users, and why existing solutions are inadequate...",
                                  value: v.problemStatement,
                                  onChange: (k) =>
                                    H({
                                      ...v,
                                      problemStatement: k.target.value,
                                    }),
                                  className:
                                    "w-full bg-slate-900 border border-white/10 rounded-xl p-3 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500",
                                }),
                              ],
                            }),
                            n.jsxs("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-3",
                              children: [
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Current Project Stage",
                                    }),
                                    n.jsxs("select", {
                                      value: v.currentStage,
                                      onChange: (k) =>
                                        H({
                                          ...v,
                                          currentStage: k.target.value,
                                        }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                      children: [
                                        n.jsx("option", {
                                          children: "Concept / Ideation",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Proof of Concept (POC) / Lab Simulation",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Working Prototype / MVP Built",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Initial User Testing / Campus Pilot",
                                        }),
                                        n.jsx("option", {
                                          children:
                                            "Ready for Pre-Incubation / Patent Filing",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                n.jsxs("div", {
                                  children: [
                                    n.jsx("label", {
                                      className:
                                        "block text-[11px] font-semibold text-gray-300 mb-1",
                                      children: "Current Team Size",
                                    }),
                                    n.jsxs("select", {
                                      value: v.teamSize,
                                      onChange: (k) =>
                                        H({ ...v, teamSize: k.target.value }),
                                      className:
                                        "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-violet-500",
                                      children: [
                                        n.jsx("option", {
                                          value: "1",
                                          children:
                                            "Solo Innovator (Looking for teammates)",
                                        }),
                                        n.jsx("option", {
                                          value: "2",
                                          children: "2 Members",
                                        }),
                                        n.jsx("option", {
                                          value: "3",
                                          children: "3-4 Members",
                                        }),
                                        n.jsx("option", {
                                          value: "5+",
                                          children:
                                            "5+ Members (Interdisciplinary)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      M === 4 &&
                        n.jsxs("div", {
                          className: "space-y-3.5",
                          children: [
                            n.jsxs("div", {
                              className: "mb-2",
                              children: [
                                n.jsx("h4", {
                                  className: "text-base font-bold text-white",
                                  children: "Support & Resources Needed",
                                }),
                                n.jsx("p", {
                                  className: "text-xs text-gray-400",
                                  children:
                                    "Select what resources you need from WINQubit & InQubit.",
                                }),
                              ],
                            }),
                            n.jsx("div", {
                              className:
                                "grid grid-cols-1 md:grid-cols-2 gap-2",
                              children: [
                                "Prototype Seed Micro-Grants (up to ₹1,00,000)",
                                "1-on-1 Industry & Founder Mentorship",
                                "Access to Maker Labs (3D Printing, Drone Bay, IoT)",
                                "Patent Prior Art Search & Filing Assistance",
                                "Teammate Matching (Tech / Marketing / Finance)",
                                "Cloud Computing & AI API Credits",
                                "InQubit Fast-Track Incubation Evaluation",
                                "Representation in Smart India Hackathon & Global Expos",
                              ].map((k) => {
                                const F = v.supportNeeded.includes(k);
                                return n.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () => U(k),
                                    className: `flex items-center gap-2 p-2.5 rounded-xl text-left border text-xs font-medium transition ${F ? "bg-cyan-500/10 border-cyan-400/50 text-cyan-200" : "bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/15"}`,
                                    children: [
                                      n.jsx("div", {
                                        className: `w-3.5 h-3.5 rounded flex items-center justify-center border text-[9px] font-bold ${F ? "bg-cyan-500 border-cyan-400 text-slate-950" : "border-white/20"}`,
                                        children: F && "✓",
                                      }),
                                      n.jsx("span", {
                                        className: "text-[11px] leading-tight",
                                        children: k,
                                      }),
                                    ],
                                  },
                                  k,
                                );
                              }),
                            }),
                            n.jsxs("div", {
                              className:
                                "p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 space-y-1 mt-3",
                              children: [
                                n.jsxs("div", {
                                  className:
                                    "font-semibold text-violet-300 flex items-center gap-1.5 text-[11px]",
                                  children: [
                                    n.jsx(zl, { className: "w-3.5 h-3.5" }),
                                    "WINQubit Pre-Incubation Guarantee",
                                  ],
                                }),
                                n.jsx("p", {
                                  className:
                                    "text-gray-400 text-[11px] leading-relaxed",
                                  children:
                                    "Your submission is strictly confidential. You retain 100% IP ownership. Your institutional faculty coordinator and WINQubit review board will evaluate your submission within 3-5 business days.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      n.jsxs("div", {
                        className:
                          "flex items-center justify-between pt-4 mt-5 border-t border-white/5",
                        children: [
                          M > 1
                            ? n.jsxs("button", {
                                type: "button",
                                onClick: () => o(M - 1),
                                className:
                                  "flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-300 hover:text-white bg-white/[0.02] border border-white/10 hover:border-white/20 transition",
                                children: [
                                  n.jsx(Qm, { className: "w-3.5 h-3.5" }),
                                  " Back",
                                ],
                              })
                            : n.jsx("div", {}),
                          M < 4
                            ? n.jsxs("button", {
                                type: "button",
                                onClick: () => o(M + 1),
                                className:
                                  "flex items-center gap-1.5 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition shadow-lg",
                                children: [
                                  "Next Step ",
                                  n.jsx(Ft, { className: "w-3.5 h-3.5" }),
                                ],
                              })
                            : n.jsxs("button", {
                                type: "button",
                                onClick: ae,
                                className:
                                  "flex items-center gap-1.5 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition shadow-lg shadow-violet-500/30",
                                children: [
                                  n.jsx(kr, { className: "w-3.5 h-3.5" }),
                                  " Submit Proposal",
                                ],
                              }),
                        ],
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  },
  rp = ({ isOpen: y, onClose: D }) => {
    const [M, o] = se.useState({
        institution: "Thakur Shyamnarayan Engineering College (TSEC)",
        fullName: "",
        email: "",
        phone: "",
        rollNo: "",
        branch: "Computer Engineering",
        year: "SE",
        interestAreas: ["Artificial Intelligence", "Prototype Labs"],
        hasIdea: "no",
        ideaSnippet: "",
      }),
      [j, E] = se.useState(!1);
    if (!y) return null;
    const v = [
        "Artificial Intelligence & ML",
        "Robotics & Embedded IoT",
        "Aerospace & Drone Engineering",
        "Biotech & HealthTech",
        "Hospitality & Food Technology",
        "CleanTech & Sustainability",
        "FinTech & Business Modeling",
        "Patent & Research Writing",
      ],
      H = (z) => {
        o((U) => ({
          ...U,
          interestAreas: U.interestAreas.includes(z)
            ? U.interestAreas.filter((ae) => ae !== z)
            : [...U.interestAreas, z],
        }));
      },
      S = (z) => {
        (z.preventDefault(), E(!0));
      },
      b = () => {
        (E(!1), D());
      };
    return n.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto",
      children: n.jsxs("div", {
        className:
          "relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden my-8",
        children: [
          n.jsx("div", {
            className:
              "h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-emerald-400 w-full",
          }),
          n.jsxs("div", {
            className: "p-6 md:p-8",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between pb-4 border-b border-white/5",
                children: [
                  n.jsxs("div", {
                    children: [
                      n.jsx("div", {
                        className:
                          "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-1 font-mono",
                        children: "Annual Student Pass (2026-27)",
                      }),
                      n.jsx("h3", {
                        className: "text-lg font-bold text-white",
                        children: "Join the WINQubit Ecosystem",
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition",
                    "aria-label": "Close",
                    children: n.jsx(Wi, { className: "w-4 h-4" }),
                  }),
                ],
              }),
              j
                ? n.jsxs("div", {
                    className: "text-center py-6 space-y-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto mb-1",
                        children: n.jsx(vt, { className: "w-6 h-6" }),
                      }),
                      n.jsx("h4", {
                        className: "text-xl font-bold text-white",
                        children: "Welcome to WINQubit!",
                      }),
                      n.jsxs("p", {
                        className: "text-xs text-gray-300 max-w-sm mx-auto",
                        children: [
                          "Membership registration initialized for ",
                          n.jsx("span", {
                            className: "text-cyan-400 font-bold",
                            children: M.fullName || "Member",
                          }),
                          ". Your digital member card has been generated.",
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "relative p-5 rounded-[2rem] bg-slate-900/60 border border-white/10 text-left text-xs max-w-sm mx-auto shadow-xl",
                        children: [
                          n.jsxs("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [
                              n.jsxs("div", {
                                children: [
                                  n.jsx("div", {
                                    className:
                                      "text-[9px] text-gray-400 uppercase tracking-widest font-mono",
                                    children: "Digital Innovator Pass",
                                  }),
                                  n.jsx("div", {
                                    className: "font-bold text-sm text-white",
                                    children: M.fullName || "Student Member",
                                  }),
                                  n.jsx("div", {
                                    className: "text-[10px] text-violet-300",
                                    children: M.institution,
                                  }),
                                ],
                              }),
                              n.jsx("div", {
                                className:
                                  "w-7 h-7 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400 flex items-center justify-center font-bold text-white text-xs",
                                children: "W",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "grid grid-cols-2 gap-2 text-[10px] border-t border-white/5 pt-3 text-gray-400",
                            children: [
                              n.jsxs("div", {
                                children: [
                                  n.jsx("span", {
                                    className: "text-[9px] font-mono",
                                    children: "MEMBER ID",
                                  }),
                                  n.jsxs("p", {
                                    className: "font-mono text-white font-bold",
                                    children: [
                                      "WQ-2026-",
                                      Math.floor(1e3 + Math.random() * 9e3),
                                    ],
                                  }),
                                ],
                              }),
                              n.jsxs("div", {
                                children: [
                                  n.jsx("span", {
                                    className: "text-[9px] font-mono",
                                    children: "STATUS",
                                  }),
                                  n.jsx("p", {
                                    className:
                                      "text-emerald-400 font-bold font-mono",
                                    children: "ACTIVE (2026-27)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsx("button", {
                          type: "button",
                          onClick: b,
                          className:
                            "px-6 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[10px] uppercase tracking-wider font-bold transition shadow-lg",
                          children: "Close & Access Member Hub",
                        }),
                      }),
                    ],
                  })
                : n.jsxs("form", {
                    onSubmit: S,
                    className: "space-y-3.5 mt-5",
                    children: [
                      n.jsxs("div", {
                        className:
                          "p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("div", {
                                className: "text-[11px] text-gray-400",
                                children: "Standard Annual Membership",
                              }),
                              n.jsxs("div", {
                                className:
                                  "text-xl font-bold text-white flex items-baseline gap-1 font-mono",
                                children: [
                                  "₹500 ",
                                  n.jsx("span", {
                                    className:
                                      "text-[11px] font-normal text-gray-400",
                                    children: "/ academic year",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "text-right text-[11px] text-emerald-400 flex items-center gap-1 font-semibold font-mono",
                            children: [
                              n.jsx(Ji, { className: "w-3.5 h-3.5" }),
                              " InQubit Lab Pass Included",
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                            children: [
                              n.jsx(Ii, {
                                className: "w-3.5 h-3.5 text-cyan-400",
                              }),
                              "Your College / Institution *",
                            ],
                          }),
                          n.jsxs("select", {
                            value: M.institution,
                            onChange: (z) =>
                              o({ ...M, institution: z.target.value }),
                            className:
                              "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400",
                            children: [
                              n.jsx("option", {
                                children:
                                  "Thakur Shyamnarayan Engineering College (TSEC)",
                              }),
                              n.jsx("option", {
                                children:
                                  "Thakur Shyamnarayan Degree College (TSDC)",
                              }),
                              n.jsx("option", {
                                children:
                                  "Thakur Institute of Aviation Technology (TIAT)",
                              }),
                              n.jsx("option", {
                                children:
                                  "Thakur Institute of Hotel Management (TIHM)",
                              }),
                              n.jsx("option", {
                                children: "Other Partner Institution",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsxs("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                children: [
                                  n.jsx(Rh, {
                                    className: "w-3.5 h-3.5 text-gray-400",
                                  }),
                                  " Full Name *",
                                ],
                              }),
                              n.jsx("input", {
                                type: "text",
                                required: !0,
                                placeholder: "e.g. Sneha Patel",
                                value: M.fullName,
                                onChange: (z) =>
                                  o({ ...M, fullName: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsxs("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                children: [
                                  n.jsx(Lm, {
                                    className: "w-3.5 h-3.5 text-gray-400",
                                  }),
                                  " Roll / Student ID *",
                                ],
                              }),
                              n.jsx("input", {
                                type: "text",
                                required: !0,
                                placeholder: "e.g. TSDC-2024-512",
                                value: M.rollNo,
                                onChange: (z) =>
                                  o({ ...M, rollNo: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 font-mono",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsxs("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                children: [
                                  n.jsx(Ff, {
                                    className: "w-3.5 h-3.5 text-gray-400",
                                  }),
                                  " Email *",
                                ],
                              }),
                              n.jsx("input", {
                                type: "email",
                                required: !0,
                                placeholder: "sneha@example.com",
                                value: M.email,
                                onChange: (z) =>
                                  o({ ...M, email: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsxs("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1 flex items-center gap-1.5",
                                children: [
                                  n.jsx($f, {
                                    className: "w-3.5 h-3.5 text-gray-400",
                                  }),
                                  " WhatsApp Number *",
                                ],
                              }),
                              n.jsx("input", {
                                type: "tel",
                                required: !0,
                                placeholder: "+91 9876543210",
                                value: M.phone,
                                onChange: (z) =>
                                  o({ ...M, phone: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400 font-mono",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Branch / Course",
                              }),
                              n.jsx("input", {
                                type: "text",
                                placeholder: "e.g. AI & Data Science / BMM",
                                value: M.branch,
                                onChange: (z) =>
                                  o({ ...M, branch: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Academic Year",
                              }),
                              n.jsxs("select", {
                                value: M.year,
                                onChange: (z) =>
                                  o({ ...M, year: z.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400",
                                children: [
                                  n.jsx("option", {
                                    value: "FE",
                                    children: "First Year (FE / FY)",
                                  }),
                                  n.jsx("option", {
                                    value: "SE",
                                    children: "Second Year (SE / SY)",
                                  }),
                                  n.jsx("option", {
                                    value: "TE",
                                    children: "Third Year (TE / TY)",
                                  }),
                                  n.jsx("option", {
                                    value: "BE",
                                    children: "Final Year (BE / Final)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsxs("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5",
                            children: [
                              n.jsx(yh, {
                                className: "w-3.5 h-3.5 text-violet-400",
                              }),
                              " Areas of Interest (Select all that apply)",
                            ],
                          }),
                          n.jsx("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: v.map((z) => {
                              const U = M.interestAreas.includes(z);
                              return n.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => H(z),
                                  className: `text-left px-2.5 py-1.5 rounded-xl text-[11px] font-medium border transition ${U ? "bg-violet-600/20 border-violet-400/60 text-violet-200" : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white"}`,
                                  children: [U ? "✓ " : "+ ", " ", z],
                                },
                                z,
                              );
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-1",
                            children:
                              "Do you currently have a project or idea to submit?",
                          }),
                          n.jsxs("div", {
                            className: "flex gap-4",
                            children: [
                              n.jsxs("label", {
                                className:
                                  "flex items-center gap-2 text-[11px] text-gray-300 cursor-pointer",
                                children: [
                                  n.jsx("input", {
                                    type: "radio",
                                    name: "hasIdea",
                                    value: "no",
                                    checked: M.hasIdea === "no",
                                    onChange: () => o({ ...M, hasIdea: "no" }),
                                    className: "text-violet-600",
                                  }),
                                  "No, I want to learn & explore first",
                                ],
                              }),
                              n.jsxs("label", {
                                className:
                                  "flex items-center gap-2 text-[11px] text-gray-300 cursor-pointer",
                                children: [
                                  n.jsx("input", {
                                    type: "radio",
                                    name: "hasIdea",
                                    value: "yes",
                                    checked: M.hasIdea === "yes",
                                    onChange: () => o({ ...M, hasIdea: "yes" }),
                                    className: "text-violet-600",
                                  }),
                                  "Yes, I have an initial idea",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      M.hasIdea === "yes" &&
                        n.jsx("div", {
                          children: n.jsx("textarea", {
                            rows: 2,
                            placeholder:
                              "Brief 1-2 lines on what you're thinking of building...",
                            value: M.ideaSnippet,
                            onChange: (z) =>
                              o({ ...M, ideaSnippet: z.target.value }),
                            className:
                              "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-400",
                          }),
                        }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsxs("button", {
                          type: "submit",
                          className:
                            "w-full py-2.5 px-6 rounded-full font-bold text-[10px] uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-violet-400 hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2",
                          children: [
                            n.jsx(Wf, { className: "w-3.5 h-3.5" }),
                            " Proceed to Confirm ₹500 Pass",
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  },
  op = ({ isOpen: y, onClose: D, defaultCategory: M = "institution" }) => {
    const [o, j] = se.useState(
        M === "institution"
          ? "college"
          : M === "industry"
            ? "industry"
            : "mentor",
      ),
      [E, v] = se.useState({
        orgName: "",
        contactPerson: "",
        designation: "",
        email: "",
        phone: "",
        city: "",
        collaborationGoals: [],
        notes: "",
      }),
      [H, S] = se.useState(!1);
    if (!y) return null;
    const b = [
        {
          id: "college",
          label: "College / University",
          icon: fh,
          desc: "Establish a WINQubit Innovation Chapter on campus",
        },
        {
          id: "industry",
          label: "Industry / Enterprise",
          icon: jr,
          desc: "Bring corporate challenges & hire top engineering talent",
        },
        {
          id: "startup",
          label: "Startup / Scaleup",
          icon: An,
          desc: "Mentor creators, test beta tech, and co-build MVPs",
        },
        {
          id: "csr",
          label: "CSR / Impact Foundation",
          icon: hh,
          desc: "Sponsor women in tech & prototype seed grants",
        },
        {
          id: "tech",
          label: "Technology / Cloud Vendor",
          icon: bh,
          desc: "Provide developer tools, hardware kits, and cloud credits",
        },
        {
          id: "mentor",
          label: "Individual Mentor / Investor",
          icon: Im,
          desc: "Guide student founders and review early stage pitches",
        },
      ],
      z = [
        "Establish Campus Innovation Chapter",
        "Bring Live Industry Problem Statements",
        "Offer Technical & Executive Mentorship",
        "Sponsor Student Prototype Grants",
        "Offer Internships & Pre-Placement Offers (PPOs)",
        "Co-host HackSpark Hackathons / Ideathons",
        "Establish Joint R&D / Testing Lab",
        "Explore InQubit Venture Co-Investment",
      ],
      U = (k) => {
        v((F) => ({
          ...F,
          collaborationGoals: F.collaborationGoals.includes(k)
            ? F.collaborationGoals.filter((Me) => Me !== k)
            : [...F.collaborationGoals, k],
        }));
      },
      ae = (k) => {
        (k.preventDefault(), S(!0));
      },
      De = () => {
        (S(!1), D());
      };
    return n.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto",
      children: n.jsxs("div", {
        className:
          "relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden my-8",
        children: [
          n.jsx("div", {
            className:
              "h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500 w-full",
          }),
          n.jsxs("div", {
            className: "p-6 md:p-8",
            children: [
              n.jsxs("div", {
                className:
                  "flex items-center justify-between pb-4 border-b border-white/5",
                children: [
                  n.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400",
                        children: n.jsx(Sr, { className: "w-4 h-4" }),
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("h3", {
                            className: "text-lg font-bold text-white",
                            children: "Partner with WINQubit",
                          }),
                          n.jsx("p", {
                            className: "text-[11px] text-gray-400",
                            children:
                              "Institutional, Corporate & Ecosystem Collaboration Hub",
                          }),
                        ],
                      }),
                    ],
                  }),
                  n.jsx("button", {
                    onClick: D,
                    className:
                      "p-1.5 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition",
                    "aria-label": "Close modal",
                    children: n.jsx(Wi, { className: "w-4 h-4" }),
                  }),
                ],
              }),
              H
                ? n.jsxs("div", {
                    className: "text-center py-6 space-y-3",
                    children: [
                      n.jsx("div", {
                        className:
                          "w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-1",
                        children: n.jsx(vt, { className: "w-6 h-6" }),
                      }),
                      n.jsx("h4", {
                        className: "text-xl font-bold text-white",
                        children: "Partnership Request Received!",
                      }),
                      n.jsxs("p", {
                        className: "text-xs text-gray-300 max-w-md mx-auto",
                        children: [
                          "Thank you, ",
                          n.jsx("span", {
                            className: "text-emerald-400 font-bold",
                            children: E.contactPerson,
                          }),
                          " from ",
                          n.jsx("span", {
                            className: "text-white font-semibold",
                            children: E.orgName || "your organization",
                          }),
                          ". The WINQubit Management Committee and Ecosystem Partnerships team will get in touch with you shortly.",
                        ],
                      }),
                      n.jsxs("div", {
                        className:
                          "p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-sm mx-auto text-xs text-gray-300 text-left space-y-1.5",
                        children: [
                          n.jsx("div", {
                            className: "text-gray-400 font-medium text-[11px]",
                            children: "Next Steps:",
                          }),
                          n.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-gray-300 text-[11px]",
                            children: [
                              n.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-emerald-400",
                              }),
                              "Partnership deck & MoU framework shared via email",
                            ],
                          }),
                          n.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-gray-300 text-[11px]",
                            children: [
                              n.jsx("span", {
                                className:
                                  "w-1.5 h-1.5 rounded-full bg-emerald-400",
                              }),
                              "Introductory alignment call with Management Committee",
                            ],
                          }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsx("button", {
                          type: "button",
                          onClick: De,
                          className:
                            "px-6 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-[10px] uppercase tracking-wider font-bold transition shadow-lg",
                          children: "Close Window",
                        }),
                      }),
                    ],
                  })
                : n.jsxs("form", {
                    onSubmit: ae,
                    className: "space-y-4 mt-5",
                    children: [
                      n.jsxs("div", {
                        children: [
                          n.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-2",
                            children:
                              "What best describes your organization / profile?",
                          }),
                          n.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 gap-2",
                            children: b.map((k) => {
                              const F = k.icon,
                                Me = o === k.id;
                              return n.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => j(k.id),
                                  className: `p-3 rounded-2xl text-left border transition ${Me ? "bg-emerald-500/15 border-emerald-400 text-white" : "bg-white/[0.02] border-white/5 text-gray-400 hover:border-white/15"}`,
                                  children: [
                                    n.jsx(F, {
                                      className: `w-3.5 h-3.5 mb-1.5 ${Me ? "text-emerald-400" : "text-gray-400"}`,
                                    }),
                                    n.jsx("div", {
                                      className:
                                        "text-xs font-bold leading-tight text-white",
                                      children: k.label,
                                    }),
                                  ],
                                },
                                k.id,
                              );
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Organization / Institution Name *",
                              }),
                              n.jsx("input", {
                                type: "text",
                                required: !0,
                                placeholder:
                                  "e.g. Acme Tech Solutions / ABC Institute",
                                value: E.orgName,
                                onChange: (k) =>
                                  v({ ...E, orgName: k.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Contact Person Name *",
                              }),
                              n.jsx("input", {
                                type: "text",
                                required: !0,
                                placeholder:
                                  "e.g. Dr. Rajesh Verma / VP Innovation",
                                value: E.contactPerson,
                                onChange: (k) =>
                                  v({ ...E, contactPerson: k.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Official Email Address *",
                              }),
                              n.jsx("input", {
                                type: "email",
                                required: !0,
                                placeholder: "partner@company.com",
                                value: E.email,
                                onChange: (k) =>
                                  v({ ...E, email: k.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400",
                              }),
                            ],
                          }),
                          n.jsxs("div", {
                            children: [
                              n.jsx("label", {
                                className:
                                  "block text-[11px] font-semibold text-gray-300 mb-1",
                                children: "Phone / Mobile Number *",
                              }),
                              n.jsx("input", {
                                type: "tel",
                                required: !0,
                                placeholder: "+91 98200 12345",
                                value: E.phone,
                                onChange: (k) =>
                                  v({ ...E, phone: k.target.value }),
                                className:
                                  "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400 font-mono",
                              }),
                            ],
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-1.5",
                            children:
                              "How would you like to collaborate with WINQubit? (Select all that apply)",
                          }),
                          n.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-2",
                            children: z.map((k) => {
                              const F = E.collaborationGoals.includes(k);
                              return n.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => U(k),
                                  className: `text-left p-2.5 rounded-xl text-xs font-medium border transition ${F ? "bg-emerald-500/15 border-emerald-400 text-emerald-200" : "bg-white/[0.02] border-white/5 text-gray-400 hover:text-white"}`,
                                  children: [F ? "✓ " : "+ ", " ", k],
                                },
                                k,
                              );
                            }),
                          }),
                        ],
                      }),
                      n.jsxs("div", {
                        children: [
                          n.jsx("label", {
                            className:
                              "block text-[11px] font-semibold text-gray-300 mb-1",
                            children: "Specific Initiatives or Details",
                          }),
                          n.jsx("textarea", {
                            rows: 2,
                            placeholder:
                              "Share any specific requirements, student count, industry problem areas, or partnership timeline...",
                            value: E.notes,
                            onChange: (k) => v({ ...E, notes: k.target.value }),
                            className:
                              "w-full bg-slate-900 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-400",
                          }),
                        ],
                      }),
                      n.jsx("div", {
                        className: "pt-2",
                        children: n.jsxs("button", {
                          type: "submit",
                          className:
                            "w-full py-2.5 px-6 rounded-full font-bold text-[10px] uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2",
                          children: [
                            n.jsx(kr, { className: "w-3.5 h-3.5" }),
                            " Submit Collaboration Proposal",
                          ],
                        }),
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    });
  };
function up() {
  const [y, D] = se.useState("home"),
    [M, o] = se.useState(!1),
    [j, E] = se.useState(!1),
    [v, H] = se.useState(!1),
    S = (b) => {
      (D(b), window.scrollTo({ top: 0, behavior: "smooth" }));
    };
  return n.jsxs("div", {
    className:
      "min-h-screen bg-[#020617] text-[#f8fafc] flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950 bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b,transparent)]",
    children: [
      n.jsx(Lh, {
        activePage: y,
        onNavigate: S,
        onOpenInnovate: () => o(!0),
        onOpenJoin: () => E(!0),
        onOpenCollaborate: () => H(!0),
      }),
      n.jsxs("main", {
        className: "flex-grow",
        children: [
          y === "home" &&
            n.jsx(Fh, {
              onNavigate: S,
              onOpenInnovate: () => o(!0),
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "about" &&
            n.jsx($h, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "leadership" &&
            n.jsx(Ph, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "students" &&
            n.jsx(ep, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenInnovate: () => o(!0),
            }),
          y === "programs" &&
            n.jsx(tp, {
              onNavigate: S,
              onOpenInnovate: () => o(!0),
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "innovation" &&
            n.jsx(ap, {
              onNavigate: S,
              onOpenInnovate: () => o(!0),
              onOpenCollaborate: () => H(!0),
            }),
          y === "partners" &&
            n.jsx(lp, {
              onNavigate: S,
              onOpenCollaborate: () => H(!0),
              onOpenJoin: () => E(!0),
            }),
          y === "events" &&
            n.jsx(np, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenInnovate: () => o(!0),
            }),
          y === "resources" &&
            n.jsx(ip, { onNavigate: S, onOpenJoin: () => E(!0) }),
          y === "contact" &&
            n.jsx(sp, {
              onNavigate: S,
              onOpenJoin: () => E(!0),
              onOpenCollaborate: () => H(!0),
            }),
        ],
      }),
      n.jsx(Zh, {
        onNavigate: S,
        onOpenInnovate: () => o(!0),
        onOpenJoin: () => E(!0),
        onOpenCollaborate: () => H(!0),
      }),
      n.jsx(cp, { isOpen: M, onClose: () => o(!1) }),
      n.jsx(rp, { isOpen: j, onClose: () => E(!1) }),
      n.jsx(op, { isOpen: v, onClose: () => H(!1) }),
    ],
  });
}
Dm.createRoot(document.getElementById("root")).render(
  n.jsx(se.StrictMode, { children: n.jsx(up, {}) }),
);
