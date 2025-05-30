import { createElementBlock as re, openBlock as ne, renderSlot as xe, createCommentVNode as Ce, createStaticVNode as gi, createElementVNode as c, Fragment as we, renderList as ke, normalizeClass as rt, normalizeStyle as $e, toDisplayString as Ge, resolveComponent as pi, createVNode as vi } from "vue";
function tt(e, r) {
  return arguments.length === 1 ? parseInt(Math.random() * e + 1, 10) : parseInt(Math.random() * (r - e + 1) + e, 10);
}
function mi(e, r) {
  let n;
  return function() {
    clearTimeout(n);
    const [i, t] = [this, arguments];
    n = setTimeout(() => {
      r.apply(i, t);
    }, e);
  };
}
function yi(e, r) {
  const n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, i = new n(r);
  return i.observe(e, { attributes: !0, attributeFilter: ["style"], attributeOldValue: !0 }), i;
}
function Bt(e, r) {
  const n = Math.abs(e[0] - r[0]), i = Math.abs(e[1] - r[1]);
  return Math.sqrt(n * n + i * i);
}
function De(e) {
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(r) {
    const n = Math.random() * 16 | 0;
    return (r == "x" ? n : n & 3 | 8).toString(16);
  });
}
const be = {
  data() {
    return {
      dom: "",
      width: 0,
      height: 0,
      debounceInitWHFun: "",
      domObserver: ""
    };
  },
  methods: {
    async autoResizeMixinInit() {
      const { initWH: e, getDebounceInitWHFun: r, bindDomResizeCallback: n, afterAutoResizeMixinInit: i } = this;
      await e(!1), r(), n(), typeof i == "function" && i();
    },
    initWH(e = !0) {
      const { $nextTick: r, $refs: n, ref: i, onResize: t } = this;
      return new Promise((a) => {
        r((l) => {
          const w = this.dom = n[i];
          this.width = w ? w.clientWidth : 0, this.height = w ? w.clientHeight : 0, w ? (!this.width || !this.height) && console.warn("DataV: Component width or height is 0px, rendering abnormality may occur!") : console.warn("DataV: Failed to get dom node, component rendering may be abnormal!"), typeof t == "function" && e && t(), a();
        });
      });
    },
    getDebounceInitWHFun() {
      const { initWH: e } = this;
      this.debounceInitWHFun = mi(100, e);
    },
    bindDomResizeCallback() {
      const { dom: e, debounceInitWHFun: r } = this;
      this.domObserver = yi(e, r), window.addEventListener("resize", r);
    },
    unbindDomResizeCallback() {
      let { domObserver: e, debounceInitWHFun: r } = this;
      e && (e.disconnect(), e.takeRecords(), e = null, window.removeEventListener("resize", r));
    }
  },
  mounted() {
    const { autoResizeMixinInit: e } = this;
    e();
  },
  beforeDestroy() {
    const { unbindDomResizeCallback: e } = this;
    e();
  }
}, ye = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [i, t] of r)
    n[i] = t;
  return n;
}, bi = {
  name: "DvFullScreenContainer",
  mixins: [be],
  data() {
    return {
      ref: "full-screen-container",
      allWidth: 0,
      scale: 0,
      datavRoot: "",
      ready: !1
    };
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { initConfig: e, setAppScale: r } = this;
      e(), r(), this.ready = !0;
    },
    initConfig() {
      const { dom: e } = this, { width: r, height: n } = screen;
      this.allWidth = r, e.style.width = `${r}px`, e.style.height = `${n}px`;
    },
    setAppScale() {
      const { allWidth: e, dom: r } = this, n = document.body.clientWidth;
      r.style.transform = `scale(${n / e})`;
    },
    onResize() {
      const { setAppScale: e } = this;
      e();
    }
  }
};
function Ci(e, r, n, i, t, a) {
  return ne(), re("div", {
    id: "dv-full-screen-container",
    ref: t.ref
  }, [
    t.ready ? xe(e.$slots, "default", { key: 0 }) : Ce("", !0)
  ], 512);
}
const bt = /* @__PURE__ */ ye(bi, [["render", Ci]]), wi = bt.name || `Dv${bt.__file ? bt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Pi = {
  install: (e) => {
    e.component(wi, bt);
  }
}, ki = {
  name: "DvLoading"
}, $i = { class: "dv-loading" }, _i = { class: "loading-tip" };
function xi(e, r, n, i, t, a) {
  return ne(), re("div", $i, [
    r[0] || (r[0] = gi('<svg width="50px" height="50px"><circle cx="25" cy="25" r="20" fill="transparent" stroke-width="3" stroke-dasharray="31.415, 31.415" stroke="#02bcfe" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0, 25 25;360, 25 25" dur="1.5s" repeatCount="indefinite"></animateTransform><animate attributeName="stroke" values="#02bcfe;#3be6cb;#02bcfe" dur="3s" repeatCount="indefinite"></animate></circle><circle cx="25" cy="25" r="10" fill="transparent" stroke-width="3" stroke-dasharray="15.7, 15.7" stroke="#3be6cb" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="360, 25 25;0, 25 25" dur="1.5s" repeatCount="indefinite"></animateTransform><animate attributeName="stroke" values="#3be6cb;#02bcfe;#3be6cb" dur="3s" repeatCount="indefinite"></animate></circle></svg>', 1)),
    c("div", _i, [
      xe(e.$slots, "default")
    ])
  ]);
}
const Ct = /* @__PURE__ */ ye(ki, [["render", xi]]), Ai = Ct.name || `Dv${Ct.__file ? Ct.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Si = {
  install: (e) => {
    e.component(Ai, Ct);
  }
};
function Zn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Li(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var r = e.default;
  if (typeof r == "function") {
    var n = function i() {
      return this instanceof i ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    n.prototype = r.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var t = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(n, i, t.get ? t : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), n;
}
var Me = {}, Et = { exports: {} }, Ar;
function Pe() {
  return Ar || (Ar = 1, function(e) {
    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Et)), Et.exports;
}
var qt = { exports: {} }, zt = { exports: {} }, It = { exports: {} }, Sr;
function ei() {
  return Sr || (Sr = 1, function(e) {
    function r(n, i) {
      (i == null || i > n.length) && (i = n.length);
      for (var t = 0, a = Array(i); t < i; t++) a[t] = n[t];
      return a;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(It)), It.exports;
}
var Lr;
function Oi() {
  return Lr || (Lr = 1, function(e) {
    var r = ei();
    function n(i) {
      if (Array.isArray(i)) return r(i);
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(zt)), zt.exports;
}
var Ht = { exports: {} }, Or;
function Gi() {
  return Or || (Or = 1, function(e) {
    function r(n) {
      if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ht)), Ht.exports;
}
var Vt = { exports: {} }, Gr;
function ti() {
  return Gr || (Gr = 1, function(e) {
    var r = ei();
    function n(i, t) {
      if (i) {
        if (typeof i == "string") return r(i, t);
        var a = {}.toString.call(i).slice(8, -1);
        return a === "Object" && i.constructor && (a = i.constructor.name), a === "Map" || a === "Set" ? Array.from(i) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? r(i, t) : void 0;
      }
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Vt)), Vt.exports;
}
var Ut = { exports: {} }, Rr;
function Ri() {
  return Rr || (Rr = 1, function(e) {
    function r() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ut)), Ut.exports;
}
var Mr;
function Ae() {
  return Mr || (Mr = 1, function(e) {
    var r = Oi(), n = Gi(), i = ti(), t = Ri();
    function a(l) {
      return r(l) || n(l) || i(l) || t();
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(qt)), qt.exports;
}
var Xt = { exports: {} }, Dr;
function Le() {
  return Dr || (Dr = 1, function(e) {
    function r(n) {
      "@babel/helpers - typeof";
      return e.exports = r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, r(n);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Xt)), Xt.exports;
}
var Qt = {}, Yt = { exports: {} }, Kt = { exports: {} }, Tr;
function Mi() {
  return Tr || (Tr = 1, function(e) {
    function r(n) {
      if (Array.isArray(n)) return n;
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Kt)), Kt.exports;
}
var Jt = { exports: {} }, Wr;
function Di() {
  return Wr || (Wr = 1, function(e) {
    function r(n, i) {
      var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
      if (t != null) {
        var a, l, w, z, j = [], E = !0, X = !1;
        try {
          if (w = (t = t.call(n)).next, i === 0) {
            if (Object(t) !== t) return;
            E = !1;
          } else for (; !(E = (a = w.call(t)).done) && (j.push(a.value), j.length !== i); E = !0) ;
        } catch (q) {
          X = !0, l = q;
        } finally {
          try {
            if (!E && t.return != null && (z = t.return(), Object(z) !== z)) return;
          } finally {
            if (X) throw l;
          }
        }
        return j;
      }
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Jt)), Jt.exports;
}
var Zt = { exports: {} }, Fr;
function Ti() {
  return Fr || (Fr = 1, function(e) {
    function r() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Zt)), Zt.exports;
}
var Br;
function Oe() {
  return Br || (Br = 1, function(e) {
    var r = Mi(), n = Di(), i = ti(), t = Ti();
    function a(l, w) {
      return r(l) || n(l, w) || i(l, w) || t();
    }
    e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Yt)), Yt.exports;
}
var Nr;
function Se() {
  return Nr || (Nr = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.deepClone = q, e.eliminateBlur = G, e.checkPointIsInCircle = f, e.getTwoPointDistance = M, e.checkPointIsInPolygon = D, e.checkPointIsInSector = T, e.checkPointIsNearPolyline = U, e.checkPointIsInRect = I, e.getRotatePointPos = Q, e.getScalePointPos = K, e.getTranslatePointPos = V, e.getDistanceBetweenPointAndLine = $, e.getCircleRadianPoint = x, e.getRegularPolygonPoints = g, e.default = void 0;
    var n = r(Ae()), i = r(Oe()), t = r(Le()), a = Math.abs, l = Math.sqrt, w = Math.sin, z = Math.cos, j = Math.max, E = Math.min, X = Math.PI;
    function q(A) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (!A) return A;
      var m = JSON.parse, L = JSON.stringify;
      if (!u) return m(L(A));
      var F = A instanceof Array ? [] : {};
      if (A && (0, t.default)(A) === "object")
        for (var o in A)
          A.hasOwnProperty(o) && (A[o] && (0, t.default)(A[o]) === "object" ? F[o] = q(A[o], !0) : F[o] = A[o]);
      return F;
    }
    function G(A) {
      return A.map(function(u) {
        var m = (0, i.default)(u, 2), L = m[0], F = m[1];
        return [parseInt(L) + 0.5, parseInt(F) + 0.5];
      });
    }
    function f(A, u, m, L) {
      return M(A, [u, m]) <= L;
    }
    function M(A, u) {
      var m = (0, i.default)(A, 2), L = m[0], F = m[1], o = (0, i.default)(u, 2), k = o[0], b = o[1], O = a(L - k), W = a(F - b);
      return l(O * O + W * W);
    }
    function D(A, u) {
      for (var m = 0, L = (0, i.default)(A, 2), F = L[0], o = L[1], k = u.length, b = 1, O = u[0]; b <= k; b++) {
        var W = u[b % k];
        if (F > E(O[0], W[0]) && F <= j(O[0], W[0]) && o <= j(O[1], W[1]) && O[0] !== W[0]) {
          var te = (F - O[0]) * (W[1] - O[1]) / (W[0] - O[0]) + O[1];
          (O[1] === W[1] || o <= te) && m++;
        }
        O = W;
      }
      return m % 2 === 1;
    }
    function T(A, u, m, L, F, o, k) {
      if (!A || M(A, [u, m]) > L) return !1;
      if (!k) {
        var b = q([o, F]), O = (0, i.default)(b, 2);
        F = O[0], o = O[1];
      }
      var W = F > o;
      if (W) {
        var te = [o, F];
        F = te[0], o = te[1];
      }
      var ee = o - F;
      if (ee >= X * 2) return !0;
      var ie = (0, i.default)(A, 2), se = ie[0], ce = ie[1], Y = x(u, m, L, F), oe = (0, i.default)(Y, 2), le = oe[0], de = oe[1], _ = x(u, m, L, o), v = (0, i.default)(_, 2), y = v[0], P = v[1], R = [se - u, ce - m], J = [le - u, de - m], d = [y - u, P - m], S = ee > X;
      if (S) {
        var s = q([d, J]), h = (0, i.default)(s, 2);
        J = h[0], d = h[1];
      }
      var p = B(J, R) && !B(d, R);
      return S && (p = !p), W && (p = !p), p;
    }
    function B(A, u) {
      var m = (0, i.default)(A, 2), L = m[0], F = m[1], o = (0, i.default)(u, 2), k = o[0], b = o[1];
      return -F * k + L * b > 0;
    }
    function U(A, u, m) {
      var L = m / 2, F = u.map(function(b) {
        var O = (0, i.default)(b, 2), W = O[0], te = O[1];
        return [W, te - L];
      }), o = u.map(function(b) {
        var O = (0, i.default)(b, 2), W = O[0], te = O[1];
        return [W, te + L];
      }), k = [].concat((0, n.default)(F), (0, n.default)(o.reverse()));
      return D(A, k);
    }
    function I(A, u, m, L, F) {
      var o = (0, i.default)(A, 2), k = o[0], b = o[1];
      return !(k < u || b < m || k > u + L || b > m + F);
    }
    function Q() {
      var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, u = arguments.length > 1 ? arguments[1] : void 0, m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
      if (!u) return !1;
      if (A % 360 === 0) return u;
      var L = (0, i.default)(u, 2), F = L[0], o = L[1], k = (0, i.default)(m, 2), b = k[0], O = k[1];
      return A *= X / 180, [(F - b) * z(A) - (o - O) * w(A) + b, (F - b) * w(A) + (o - O) * z(A) + O];
    }
    function K() {
      var A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [1, 1], u = arguments.length > 1 ? arguments[1] : void 0, m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0];
      if (!u) return !1;
      if (A === 1) return u;
      var L = (0, i.default)(u, 2), F = L[0], o = L[1], k = (0, i.default)(m, 2), b = k[0], O = k[1], W = (0, i.default)(A, 2), te = W[0], ee = W[1], ie = F - b, se = o - O;
      return [ie * te + b, se * ee + O];
    }
    function V(A, u) {
      if (!A || !u) return !1;
      var m = (0, i.default)(u, 2), L = m[0], F = m[1], o = (0, i.default)(A, 2), k = o[0], b = o[1];
      return [L + k, F + b];
    }
    function $(A, u, m) {
      if (!A || !u || !m) return !1;
      var L = (0, i.default)(A, 2), F = L[0], o = L[1], k = (0, i.default)(u, 2), b = k[0], O = k[1], W = (0, i.default)(m, 2), te = W[0], ee = W[1], ie = ee - O, se = b - te, ce = O * (te - b) - b * (ee - O), Y = a(ie * F + se * o + ce), oe = l(ie * ie + se * se);
      return Y / oe;
    }
    function x(A, u, m, L) {
      return [A + z(L) * m, u + w(L) * m];
    }
    function g(A, u, m, L) {
      var F = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : X * -0.5, o = X * 2 / L, k = new Array(L).fill("").map(function(b, O) {
        return O * o + F;
      });
      return k.map(function(b) {
        return x(A, u, m, b);
      });
    }
    var N = {
      deepClone: q,
      eliminateBlur: G,
      checkPointIsInCircle: f,
      checkPointIsInPolygon: D,
      checkPointIsInSector: T,
      checkPointIsNearPolyline: U,
      getTwoPointDistance: M,
      getRotatePointPos: Q,
      getScalePointPos: K,
      getTranslatePointPos: V,
      getCircleRadianPoint: x,
      getRegularPolygonPoints: g,
      getDistanceBetweenPointAndLine: $
    };
    e.default = N;
  }(Qt)), Qt;
}
var jr;
function Re() {
  if (jr) return Me;
  jr = 1;
  var e = Pe();
  Object.defineProperty(Me, "__esModule", {
    value: !0
  }), Me.filterNonNumber = t, Me.deepMerge = a, Me.mulAdd = l, Me.mergeSameStackData = w, Me.getTwoPointDistance = z, Me.getLinearGradientColor = j, Me.getPolylineLength = E, Me.getPointToLineDistance = X, Me.initNeedSeries = q, Me.radianToAngle = G;
  var r = e(Ae()), n = e(Le()), i = Se();
  function t(f) {
    return f.filter(function(M) {
      return typeof M == "number";
    });
  }
  function a(f, M) {
    for (var D in M) {
      if (f[D] && (0, n.default)(f[D]) === "object") {
        a(f[D], M[D]);
        continue;
      }
      if ((0, n.default)(M[D]) === "object") {
        f[D] = (0, i.deepClone)(M[D], !0);
        continue;
      }
      f[D] = M[D];
    }
    return f;
  }
  function l(f) {
    return f = t(f), f.reduce(function(M, D) {
      return M + D;
    }, 0);
  }
  function w(f, M) {
    var D = f.stack;
    if (!D) return (0, r.default)(f.data);
    var T = M.filter(function(Q) {
      var K = Q.stack;
      return K === D;
    }), B = T.findIndex(function(Q) {
      var K = Q.data;
      return K === f.data;
    }), U = T.splice(0, B + 1).map(function(Q) {
      var K = Q.data;
      return K;
    }), I = U[0].length;
    return new Array(I).fill(0).map(function(Q, K) {
      return l(U.map(function(V) {
        return V[K];
      }));
    });
  }
  function z(f, M) {
    var D = Math.abs(f[0] - M[0]), T = Math.abs(f[1] - M[1]);
    return Math.sqrt(D * D + T * T);
  }
  function j(f, M, D, T) {
    if (!(!f || !M || !D || !T.length)) {
      var B = T;
      typeof B == "string" && (B = [T, T]);
      var U = f.createLinearGradient.apply(f, (0, r.default)(M).concat((0, r.default)(D))), I = 1 / (B.length - 1);
      return B.forEach(function(Q, K) {
        return U.addColorStop(I * K, Q);
      }), U;
    }
  }
  function E(f) {
    var M = new Array(f.length - 1).fill(0).map(function(T, B) {
      return [f[B], f[B + 1]];
    }), D = M.map(function(T) {
      return z.apply(void 0, (0, r.default)(T));
    });
    return l(D);
  }
  function X(f, M, D) {
    var T = z(f, M), B = z(f, D), U = z(M, D);
    return 0.5 * Math.sqrt((T + B + U) * (T + B - U) * (T + U - B) * (B + U - T)) / U;
  }
  function q(f, M, D) {
    return f = f.filter(function(T) {
      var B = T.type;
      return B === D;
    }), f = f.map(function(T) {
      return a((0, i.deepClone)(M, !0), T);
    }), f.filter(function(T) {
      var B = T.show;
      return B;
    });
  }
  function G(f) {
    return f / Math.PI * 180;
  }
  return Me;
}
var ve = Re(), pe = Se();
const Wi = {
  name: "DvBorderBox1",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-1",
      border: ["left-top", "right-top", "left-bottom", "right-bottom"],
      defaultColor: ["#4fd2dd", "#235fa7"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Fi = ["width", "height"], Bi = ["fill", "points"], Ni = ["fill"], ji = ["values"], Ei = ["fill"], qi = ["values"], zi = ["fill"], Ii = ["values"], Hi = { class: "border-box-content" };
function Vi(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-1",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "border",
      width: e.width,
      height: e.height
    }, [
      c("polygon", {
        fill: n.backgroundColor,
        points: `10, 27 10, ${e.height - 27} 13, ${e.height - 24} 13, ${e.height - 21} 24, ${e.height - 11}
      38, ${e.height - 11} 41, ${e.height - 8} 73, ${e.height - 8} 75, ${e.height - 10} 81, ${e.height - 10}
      85, ${e.height - 6} ${e.width - 85}, ${e.height - 6} ${e.width - 81}, ${e.height - 10} ${e.width - 75}, ${e.height - 10}
      ${e.width - 73}, ${e.height - 8} ${e.width - 41}, ${e.height - 8} ${e.width - 38}, ${e.height - 11}
      ${e.width - 24}, ${e.height - 11} ${e.width - 13}, ${e.height - 21} ${e.width - 13}, ${e.height - 24}
      ${e.width - 10}, ${e.height - 27} ${e.width - 10}, 27 ${e.width - 13}, 25 ${e.width - 13}, 21
      ${e.width - 24}, 11 ${e.width - 38}, 11 ${e.width - 41}, 8 ${e.width - 73}, 8 ${e.width - 75}, 10
      ${e.width - 81}, 10 ${e.width - 85}, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`
      }, null, 8, Bi)
    ], 8, Fi)),
    (ne(!0), re(we, null, ke(t.border, (l) => (ne(), re("svg", {
      width: "150px",
      height: "150px",
      key: l,
      class: rt(`${l} border`)
    }, [
      c("polygon", {
        fill: t.mergedColor[0],
        points: "6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
      }, [
        c("animate", {
          attributeName: "fill",
          values: `${t.mergedColor[0]};${t.mergedColor[1]};${t.mergedColor[0]}`,
          dur: "0.5s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, 8, ji)
      ], 8, Ni),
      c("polygon", {
        fill: t.mergedColor[1],
        points: "27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
      }, [
        c("animate", {
          attributeName: "fill",
          values: `${t.mergedColor[1]};${t.mergedColor[0]};${t.mergedColor[1]}`,
          dur: "0.5s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, 8, qi)
      ], 8, Ei),
      c("polygon", {
        fill: t.mergedColor[0],
        points: "9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
      }, [
        c("animate", {
          attributeName: "fill",
          values: `${t.mergedColor[0]};${t.mergedColor[1]};transparent`,
          dur: "1s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, 8, Ii)
      ], 8, zi)
    ], 2))), 128)),
    c("div", Hi, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Er = /* @__PURE__ */ ye(Wi, [["render", Vi]]), Ui = {
  install: (e) => {
    e.component(Er.name, Er);
  }
}, Xi = {
  name: "DvBorderBox2",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-2",
      defaultColor: ["#fff", "rgba(255, 255, 255, 0.6)"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Qi = ["width", "height"], Yi = ["fill", "points"], Ki = ["stroke", "points"], Ji = ["stroke", "points"], Zi = ["fill"], eo = ["fill", "cx"], to = ["fill", "cx", "cy"], ro = ["fill", "cy"], no = { class: "border-box-content" };
function io(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-2",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("polygon", {
        fill: n.backgroundColor,
        points: `
        7, 7 ${e.width - 7}, 7 ${e.width - 7}, ${e.height - 7} 7, ${e.height - 7}
      `
      }, null, 8, Yi),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `2, 2 ${e.width - 2} ,2 ${e.width - 2}, ${e.height - 2} 2, ${e.height - 2} 2, 2`
      }, null, 8, Ki),
      c("polyline", {
        stroke: t.mergedColor[1],
        points: `6, 6 ${e.width - 6}, 6 ${e.width - 6}, ${e.height - 6} 6, ${e.height - 6} 6, 6`
      }, null, 8, Ji),
      c("circle", {
        fill: t.mergedColor[0],
        cx: "11",
        cy: "11",
        r: "1"
      }, null, 8, Zi),
      c("circle", {
        fill: t.mergedColor[0],
        cx: e.width - 11,
        cy: "11",
        r: "1"
      }, null, 8, eo),
      c("circle", {
        fill: t.mergedColor[0],
        cx: e.width - 11,
        cy: e.height - 11,
        r: "1"
      }, null, 8, to),
      c("circle", {
        fill: t.mergedColor[0],
        cx: "11",
        cy: e.height - 11,
        r: "1"
      }, null, 8, ro)
    ], 8, Qi)),
    c("div", no, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const qr = /* @__PURE__ */ ye(Xi, [["render", io]]), oo = {
  install: (e) => {
    e.component(qr.name, qr);
  }
}, ao = {
  name: "DvBorderBox3",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-3",
      defaultColor: ["#2862b7", "#2862b7"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, so = ["width", "height"], lo = ["fill", "points"], uo = ["stroke", "points"], fo = ["stroke", "points"], co = ["stroke", "points"], ho = ["stroke", "points"], go = { class: "border-box-content" };
function po(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-3",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("polygon", {
        fill: n.backgroundColor,
        points: `
        23, 23 ${e.width - 24}, 23 ${e.width - 24}, ${e.height - 24} 23, ${e.height - 24}
      `
      }, null, 8, lo),
      c("polyline", {
        class: "dv-bb3-line1",
        stroke: t.mergedColor[0],
        points: `4, 4 ${e.width - 22} ,4 ${e.width - 22}, ${e.height - 22} 4, ${e.height - 22} 4, 4`
      }, null, 8, uo),
      c("polyline", {
        class: "dv-bb3-line2",
        stroke: t.mergedColor[1],
        points: `10, 10 ${e.width - 16}, 10 ${e.width - 16}, ${e.height - 16} 10, ${e.height - 16} 10, 10`
      }, null, 8, fo),
      c("polyline", {
        class: "dv-bb3-line2",
        stroke: t.mergedColor[1],
        points: `16, 16 ${e.width - 10}, 16 ${e.width - 10}, ${e.height - 10} 16, ${e.height - 10} 16, 16`
      }, null, 8, co),
      c("polyline", {
        class: "dv-bb3-line2",
        stroke: t.mergedColor[1],
        points: `22, 22 ${e.width - 4}, 22 ${e.width - 4}, ${e.height - 4} 22, ${e.height - 4} 22, 22`
      }, null, 8, ho)
    ], 8, so)),
    c("div", go, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const zr = /* @__PURE__ */ ye(ao, [["render", po]]), vo = {
  install: (e) => {
    e.component(zr.name, zr);
  }
}, mo = {
  name: "DvBorderBox4",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-4",
      defaultColor: ["red", "rgba(0,0,255,0.8)"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, yo = ["width", "height"], bo = ["fill", "points"], Co = ["stroke", "points"], wo = ["stroke", "points"], Po = ["stroke", "points"], ko = ["stroke"], $o = ["stroke"], _o = ["stroke"], xo = ["stroke"], Ao = ["stroke"], So = ["stroke", "points"], Lo = ["stroke", "points"], Oo = { class: "border-box-content" };
function Go(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-4",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: rt(`dv-border-svg-container ${n.reverse && "dv-reverse"}`),
      width: e.width,
      height: e.height
    }, [
      c("polygon", {
        fill: n.backgroundColor,
        points: `
        ${e.width - 15}, 22 170, 22 150, 7 40, 7 28, 21 32, 24
        16, 42 16, ${e.height - 32} 41, ${e.height - 7} ${e.width - 15}, ${e.height - 7}
      `
      }, null, 8, bo),
      c("polyline", {
        class: "dv-bb4-line-1",
        stroke: t.mergedColor[0],
        points: `145, ${e.height - 5} 40, ${e.height - 5} 10, ${e.height - 35}
          10, 40 40, 5 150, 5 170, 20 ${e.width - 15}, 20`
      }, null, 8, Co),
      c("polyline", {
        stroke: t.mergedColor[1],
        class: "dv-bb4-line-2",
        points: `245, ${e.height - 1} 36, ${e.height - 1} 14, ${e.height - 23}
          14, ${e.height - 100}`
      }, null, 8, wo),
      c("polyline", {
        class: "dv-bb4-line-3",
        stroke: t.mergedColor[0],
        points: `7, ${e.height - 40} 7, ${e.height - 75}`
      }, null, 8, Po),
      c("polyline", {
        class: "dv-bb4-line-4",
        stroke: t.mergedColor[0],
        points: "28, 24 13, 41 13, 64"
      }, null, 8, ko),
      c("polyline", {
        class: "dv-bb4-line-5",
        stroke: t.mergedColor[0],
        points: "5, 45 5, 140"
      }, null, 8, $o),
      c("polyline", {
        class: "dv-bb4-line-6",
        stroke: t.mergedColor[1],
        points: "14, 75 14, 180"
      }, null, 8, _o),
      c("polyline", {
        class: "dv-bb4-line-7",
        stroke: t.mergedColor[1],
        points: "55, 11 147, 11 167, 26 250, 26"
      }, null, 8, xo),
      c("polyline", {
        class: "dv-bb4-line-8",
        stroke: t.mergedColor[1],
        points: "158, 5 173, 16"
      }, null, 8, Ao),
      c("polyline", {
        class: "dv-bb4-line-9",
        stroke: t.mergedColor[0],
        points: `200, 17 ${e.width - 10}, 17`
      }, null, 8, So),
      c("polyline", {
        class: "dv-bb4-line-10",
        stroke: t.mergedColor[1],
        points: `385, 17 ${e.width - 10}, 17`
      }, null, 8, Lo)
    ], 10, yo)),
    c("div", Oo, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Ir = /* @__PURE__ */ ye(mo, [["render", Go]]), Ro = {
  install: (e) => {
    e.component(Ir.name, Ir);
  }
}, Mo = {
  name: "DvBorderBox5",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-5",
      defaultColor: ["rgba(255, 255, 255, 0.35)", "rgba(255, 255, 255, 0.20)"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Do = ["width", "height"], To = ["fill", "points"], Wo = ["stroke", "points"], Fo = ["stroke", "points"], Bo = ["stroke", "points"], No = ["stroke", "points"], jo = ["stroke", "points"], Eo = ["stroke", "points"], qo = { class: "border-box-content" };
function zo(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-5",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: rt(`dv-border-svg-container  ${n.reverse && "dv-reverse"}`),
      width: e.width,
      height: e.height
    }, [
      c("polygon", {
        fill: n.backgroundColor,
        points: `
        10, 22 ${e.width - 22}, 22 ${e.width - 22}, ${e.height - 86} ${e.width - 84}, ${e.height - 24} 10, ${e.height - 24}
      `
      }, null, 8, To),
      c("polyline", {
        class: "dv-bb5-line-1",
        stroke: t.mergedColor[0],
        points: `8, 5 ${e.width - 5}, 5 ${e.width - 5}, ${e.height - 100}
          ${e.width - 100}, ${e.height - 5} 8, ${e.height - 5} 8, 5`
      }, null, 8, Wo),
      c("polyline", {
        class: "dv-bb5-line-2",
        stroke: t.mergedColor[1],
        points: `3, 5 ${e.width - 20}, 5 ${e.width - 20}, ${e.height - 60}
          ${e.width - 74}, ${e.height - 5} 3, ${e.height - 5} 3, 5`
      }, null, 8, Fo),
      c("polyline", {
        class: "dv-bb5-line-3",
        stroke: t.mergedColor[1],
        points: `50, 13 ${e.width - 35}, 13`
      }, null, 8, Bo),
      c("polyline", {
        class: "dv-bb5-line-4",
        stroke: t.mergedColor[1],
        points: `15, 20 ${e.width - 35}, 20`
      }, null, 8, No),
      c("polyline", {
        class: "dv-bb5-line-5",
        stroke: t.mergedColor[1],
        points: `15, ${e.height - 20} ${e.width - 110}, ${e.height - 20}`
      }, null, 8, jo),
      c("polyline", {
        class: "dv-bb5-line-6",
        stroke: t.mergedColor[1],
        points: `15, ${e.height - 13} ${e.width - 110}, ${e.height - 13}`
      }, null, 8, Eo)
    ], 10, Do)),
    c("div", qo, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Hr = /* @__PURE__ */ ye(Mo, [["render", zo]]), Io = {
  install: (e) => {
    e.component(Hr.name, Hr);
  }
}, Ho = {
  name: "DvBorderBox6",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-6",
      defaultColor: ["rgba(255, 255, 255, 0.35)", "gray"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Vo = ["width", "height"], Uo = ["fill", "points"], Xo = ["fill"], Qo = ["fill", "cx"], Yo = ["fill", "cx", "cy"], Ko = ["fill", "cy"], Jo = ["stroke", "points"], Zo = ["stroke", "points"], ea = ["stroke", "points"], ta = ["stroke", "points"], ra = ["stroke"], na = ["stroke"], ia = ["stroke", "points"], oa = ["stroke", "points"], aa = ["stroke", "points"], sa = ["stroke", "points"], la = ["stroke", "points"], ua = ["stroke", "points"], da = { class: "border-box-content" };
function fa(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-6",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("polygon", {
        fill: n.backgroundColor,
        points: `
        9, 7 ${e.width - 9}, 7 ${e.width - 9}, ${e.height - 7} 9, ${e.height - 7}
      `
      }, null, 8, Uo),
      c("circle", {
        fill: t.mergedColor[1],
        cx: "5",
        cy: "5",
        r: "2"
      }, null, 8, Xo),
      c("circle", {
        fill: t.mergedColor[1],
        cx: e.width - 5,
        cy: "5",
        r: "2"
      }, null, 8, Qo),
      c("circle", {
        fill: t.mergedColor[1],
        cx: e.width - 5,
        cy: e.height - 5,
        r: "2"
      }, null, 8, Yo),
      c("circle", {
        fill: t.mergedColor[1],
        cx: "5",
        cy: e.height - 5,
        r: "2"
      }, null, 8, Ko),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `10, 4 ${e.width - 10}, 4`
      }, null, 8, Jo),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `10, ${e.height - 4} ${e.width - 10}, ${e.height - 4}`
      }, null, 8, Zo),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `5, 70 5, ${e.height - 70}`
      }, null, 8, ea),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `${e.width - 5}, 70 ${e.width - 5}, ${e.height - 70}`
      }, null, 8, ta),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: "3, 10, 3, 50"
      }, null, 8, ra),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: "7, 30 7, 80"
      }, null, 8, na),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `${e.width - 3}, 10 ${e.width - 3}, 50`
      }, null, 8, ia),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `${e.width - 7}, 30 ${e.width - 7}, 80`
      }, null, 8, oa),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `3, ${e.height - 10} 3, ${e.height - 50}`
      }, null, 8, aa),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `7, ${e.height - 30} 7, ${e.height - 80}`
      }, null, 8, sa),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `${e.width - 3}, ${e.height - 10} ${e.width - 3}, ${e.height - 50}`
      }, null, 8, la),
      c("polyline", {
        stroke: t.mergedColor[0],
        points: `${e.width - 7}, ${e.height - 30} ${e.width - 7}, ${e.height - 80}`
      }, null, 8, ua)
    ], 8, Vo)),
    c("div", da, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Vr = /* @__PURE__ */ ye(Ho, [["render", fa]]), ca = {
  install: (e) => {
    e.component(Vr.name, Vr);
  }
}, ha = {
  name: "DvBorderBox7",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-7",
      defaultColor: ["rgba(128,128,128,0.3)", "rgba(128,128,128,0.5)"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, ga = ["width", "height"], pa = ["stroke"], va = ["stroke", "points"], ma = ["stroke", "points"], ya = ["stroke", "points"], ba = ["stroke"], Ca = ["stroke", "points"], wa = ["stroke", "points"], Pa = ["stroke", "points"], ka = { class: "border-box-content" };
function $a(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-7",
    style: $e(`box-shadow: inset 0 0 40px ${t.mergedColor[0]}; border: 1px solid ${t.mergedColor[0]}; background-color: ${n.backgroundColor}`),
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("polyline", {
        class: "dv-bb7-line-width-2",
        stroke: t.mergedColor[0],
        points: "0, 25 0, 0 25, 0"
      }, null, 8, pa),
      c("polyline", {
        class: "dv-bb7-line-width-2",
        stroke: t.mergedColor[0],
        points: `${e.width - 25}, 0 ${e.width}, 0 ${e.width}, 25`
      }, null, 8, va),
      c("polyline", {
        class: "dv-bb7-line-width-2",
        stroke: t.mergedColor[0],
        points: `${e.width - 25}, ${e.height} ${e.width}, ${e.height} ${e.width}, ${e.height - 25}`
      }, null, 8, ma),
      c("polyline", {
        class: "dv-bb7-line-width-2",
        stroke: t.mergedColor[0],
        points: `0, ${e.height - 25} 0, ${e.height} 25, ${e.height}`
      }, null, 8, ya),
      c("polyline", {
        class: "dv-bb7-line-width-5",
        stroke: t.mergedColor[1],
        points: "0, 10 0, 0 10, 0"
      }, null, 8, ba),
      c("polyline", {
        class: "dv-bb7-line-width-5",
        stroke: t.mergedColor[1],
        points: `${e.width - 10}, 0 ${e.width}, 0 ${e.width}, 10`
      }, null, 8, Ca),
      c("polyline", {
        class: "dv-bb7-line-width-5",
        stroke: t.mergedColor[1],
        points: `${e.width - 10}, ${e.height} ${e.width}, ${e.height} ${e.width}, ${e.height - 10}`
      }, null, 8, wa),
      c("polyline", {
        class: "dv-bb7-line-width-5",
        stroke: t.mergedColor[1],
        points: `0, ${e.height - 10} 0, ${e.height} 10, ${e.height}`
      }, null, 8, Pa)
    ], 8, ga)),
    c("div", ka, [
      xe(e.$slots, "default")
    ])
  ], 4);
}
const Ur = /* @__PURE__ */ ye(ha, [["render", $a]]), _a = {
  install: (e) => {
    e.component(Ur.name, Ur);
  }
}, xa = {
  name: "DvBorderBox8",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 3
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    },
    reverse: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    const e = De();
    return {
      ref: "border-box-8",
      path: `border-box-8-path-${e}`,
      gradient: `border-box-8-gradient-${e}`,
      mask: `border-box-8-mask-${e}`,
      defaultColor: ["#235fa7", "#4fd2dd"],
      mergedColor: []
    };
  },
  computed: {
    length() {
      const { width: e, height: r } = this;
      return (e + r - 5) * 2;
    },
    pathD() {
      const { reverse: e, width: r, height: n } = this;
      return e ? `M 2.5, 2.5 L 2.5, ${n - 2.5} L ${r - 2.5}, ${n - 2.5} L ${r - 2.5}, 2.5 L 2.5, 2.5` : `M2.5, 2.5 L${r - 2.5}, 2.5 L${r - 2.5}, ${n - 2.5} L2.5, ${n - 2.5} L2.5, 2.5`;
    }
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Aa = ["width", "height"], Sa = ["id", "d"], La = ["id"], Oa = ["id"], Ga = ["fill"], Ra = ["dur", "path"], Ma = ["fill", "points"], Da = ["stroke", "xlink:href"], Ta = ["stroke", "xlink:href", "mask"], Wa = ["from", "to", "dur"], Fa = { class: "border-box-content" };
function Ba(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-8",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("defs", null, [
        c("path", {
          id: t.path,
          d: a.pathD,
          fill: "transparent"
        }, null, 8, Sa),
        c("radialGradient", {
          id: t.gradient,
          cx: "50%",
          cy: "50%",
          r: "50%"
        }, r[0] || (r[0] = [
          c("stop", {
            offset: "0%",
            "stop-color": "#fff",
            "stop-opacity": "1"
          }, null, -1),
          c("stop", {
            offset: "100%",
            "stop-color": "#fff",
            "stop-opacity": "0"
          }, null, -1)
        ]), 8, La),
        c("mask", { id: t.mask }, [
          c("circle", {
            cx: "0",
            cy: "0",
            r: "150",
            fill: `url(#${t.gradient})`
          }, [
            c("animateMotion", {
              dur: `${n.dur}s`,
              path: a.pathD,
              rotate: "auto",
              repeatCount: "indefinite"
            }, null, 8, Ra)
          ], 8, Ga)
        ], 8, Oa)
      ]),
      c("polygon", {
        fill: n.backgroundColor,
        points: `5, 5 ${e.width - 5}, 5 ${e.width - 5} ${e.height - 5} 5, ${e.height - 5}`
      }, null, 8, Ma),
      c("use", {
        stroke: t.mergedColor[0],
        "stroke-width": "1",
        "xlink:href": `#${t.path}`
      }, null, 8, Da),
      c("use", {
        stroke: t.mergedColor[1],
        "stroke-width": "3",
        "xlink:href": `#${t.path}`,
        mask: `url(#${t.mask})`
      }, [
        c("animate", {
          attributeName: "stroke-dasharray",
          from: `0, ${a.length}`,
          to: `${a.length}, 0`,
          dur: `${n.dur}s`,
          repeatCount: "indefinite"
        }, null, 8, Wa)
      ], 8, Ta)
    ], 8, Aa)),
    c("div", Fa, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Xr = /* @__PURE__ */ ye(xa, [["render", Ba]]), Na = {
  install: (e) => {
    e.component(Xr.name, Xr);
  }
}, ja = {
  name: "DvBorderBox9",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    const e = De();
    return {
      ref: "border-box-9",
      gradientId: `border-box-9-gradient-${e}`,
      maskId: `border-box-9-mask-${e}`,
      defaultColor: ["#11eefd", "#0078d2"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Ea = ["width", "height"], qa = ["id"], za = ["stop-color"], Ia = ["values"], Ha = ["stop-color"], Va = ["values"], Ua = ["id"], Xa = ["points"], Qa = ["points"], Ya = ["points"], Ka = ["points"], Ja = ["points"], Za = ["points"], es = ["points"], ts = ["points"], rs = ["points"], ns = ["fill", "points"], is = ["width", "height", "fill", "mask"], os = { class: "border-box-content" };
function as(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-9",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("defs", null, [
        c("linearGradient", {
          id: t.gradientId,
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%"
        }, [
          r[0] || (r[0] = c("animate", {
            attributeName: "x1",
            values: "0%;100%;0%",
            dur: "10s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null, -1)),
          r[1] || (r[1] = c("animate", {
            attributeName: "x2",
            values: "100%;0%;100%",
            dur: "10s",
            begin: "0s",
            repeatCount: "indefinite"
          }, null, -1)),
          c("stop", {
            offset: "0%",
            "stop-color": t.mergedColor[0]
          }, [
            c("animate", {
              attributeName: "stop-color",
              values: `${t.mergedColor[0]};${t.mergedColor[1]};${t.mergedColor[0]}`,
              dur: "10s",
              begin: "0s",
              repeatCount: "indefinite"
            }, null, 8, Ia)
          ], 8, za),
          c("stop", {
            offset: "100%",
            "stop-color": t.mergedColor[1]
          }, [
            c("animate", {
              attributeName: "stop-color",
              values: `${t.mergedColor[1]};${t.mergedColor[0]};${t.mergedColor[1]}`,
              dur: "10s",
              begin: "0s",
              repeatCount: "indefinite"
            }, null, 8, Va)
          ], 8, Ha)
        ], 8, qa),
        c("mask", { id: t.maskId }, [
          c("polyline", {
            stroke: "#fff",
            "stroke-width": "3",
            fill: "transparent",
            points: `8, ${e.height * 0.4} 8, 3, ${e.width * 0.4 + 7}, 3`
          }, null, 8, Xa),
          c("polyline", {
            fill: "#fff",
            points: `8, ${e.height * 0.15} 8, 3, ${e.width * 0.1 + 7}, 3
              ${e.width * 0.1}, 8 14, 8 14, ${e.height * 0.15 - 7}
            `
          }, null, 8, Qa),
          c("polyline", {
            stroke: "#fff",
            "stroke-width": "3",
            fill: "transparent",
            points: `${e.width * 0.5}, 3 ${e.width - 3}, 3, ${e.width - 3}, ${e.height * 0.25}`
          }, null, 8, Ya),
          c("polyline", {
            fill: "#fff",
            points: `
              ${e.width * 0.52}, 3 ${e.width * 0.58}, 3
              ${e.width * 0.58 - 7}, 9 ${e.width * 0.52 + 7}, 9
            `
          }, null, 8, Ka),
          c("polyline", {
            fill: "#fff",
            points: `
              ${e.width * 0.9}, 3 ${e.width - 3}, 3 ${e.width - 3}, ${e.height * 0.1}
              ${e.width - 9}, ${e.height * 0.1 - 7} ${e.width - 9}, 9 ${e.width * 0.9 + 7}, 9
            `
          }, null, 8, Ja),
          c("polyline", {
            stroke: "#fff",
            "stroke-width": "3",
            fill: "transparent",
            points: `8, ${e.height * 0.5} 8, ${e.height - 3} ${e.width * 0.3 + 7}, ${e.height - 3}`
          }, null, 8, Za),
          c("polyline", {
            fill: "#fff",
            points: `
              8, ${e.height * 0.55} 8, ${e.height * 0.7}
              2, ${e.height * 0.7 - 7} 2, ${e.height * 0.55 + 7}
            `
          }, null, 8, es),
          c("polyline", {
            stroke: "#fff",
            "stroke-width": "3",
            fill: "transparent",
            points: `${e.width * 0.35}, ${e.height - 3} ${e.width - 3}, ${e.height - 3} ${e.width - 3}, ${e.height * 0.35}`
          }, null, 8, ts),
          c("polyline", {
            fill: "#fff",
            points: `
              ${e.width * 0.92}, ${e.height - 3} ${e.width - 3}, ${e.height - 3} ${e.width - 3}, ${e.height * 0.8}
              ${e.width - 9}, ${e.height * 0.8 + 7} ${e.width - 9}, ${e.height - 9} ${e.width * 0.92 + 7}, ${e.height - 9}
            `
          }, null, 8, rs)
        ], 8, Ua)
      ]),
      c("polygon", {
        fill: n.backgroundColor,
        points: `
        15, 9 ${e.width * 0.1 + 1}, 9 ${e.width * 0.1 + 4}, 6 ${e.width * 0.52 + 2}, 6
        ${e.width * 0.52 + 6}, 10 ${e.width * 0.58 - 7}, 10 ${e.width * 0.58 - 2}, 6
        ${e.width * 0.9 + 2}, 6 ${e.width * 0.9 + 6}, 10 ${e.width - 10}, 10 ${e.width - 10}, ${e.height * 0.1 - 6}
        ${e.width - 6}, ${e.height * 0.1 - 1} ${e.width - 6}, ${e.height * 0.8 + 1} ${e.width - 10}, ${e.height * 0.8 + 6}
        ${e.width - 10}, ${e.height - 10} ${e.width * 0.92 + 7}, ${e.height - 10}  ${e.width * 0.92 + 2}, ${e.height - 6}
        11, ${e.height - 6} 11, ${e.height * 0.15 - 2} 15, ${e.height * 0.15 - 7}
      `
      }, null, 8, ns),
      c("rect", {
        x: "0",
        y: "0",
        width: e.width,
        height: e.height,
        fill: `url(#${t.gradientId})`,
        mask: `url(#${t.maskId})`
      }, null, 8, is)
    ], 8, Ea)),
    c("div", os, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Qr = /* @__PURE__ */ ye(ja, [["render", as]]), ss = {
  install: (e) => {
    e.component(Qr.name, Qr);
  }
}, ls = {
  name: "DvBorderBox10",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-10",
      border: ["left-top", "right-top", "left-bottom", "right-bottom"],
      defaultColor: ["#1d48c4", "#d3e1f8"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, us = ["width", "height"], ds = ["fill", "points"], fs = ["fill"], cs = { class: "border-box-content" };
function hs(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-10",
    ref: t.ref,
    style: $e(`box-shadow: inset 0 0 25px 3px ${t.mergedColor[0]}`)
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("polygon", {
        fill: n.backgroundColor,
        points: `
        4, 0 ${e.width - 4}, 0 ${e.width}, 4 ${e.width}, ${e.height - 4} ${e.width - 4}, ${e.height}
        4, ${e.height} 0, ${e.height - 4} 0, 4
      `
      }, null, 8, ds)
    ], 8, us)),
    (ne(!0), re(we, null, ke(t.border, (l) => (ne(), re("svg", {
      width: "150px",
      height: "150px",
      key: l,
      class: rt(`${l} dv-border-svg-container`)
    }, [
      c("polygon", {
        fill: t.mergedColor[1],
        points: "40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"
      }, null, 8, fs)
    ], 2))), 128)),
    c("div", cs, [
      xe(e.$slots, "default")
    ])
  ], 4);
}
const Yr = /* @__PURE__ */ ye(ls, [["render", hs]]), gs = {
  install: (e) => {
    e.component(Yr.name, Yr);
  }
};
var ri = /* @__PURE__ */ ((e) => (e.transparent = "rgba(0,0,0,0)", e.black = "#000000", e.silver = "#C0C0C0", e.gray = "#808080", e.white = "#FFFFFF", e.maroon = "#800000", e.red = "#FF0000", e.purple = "#800080", e.fuchsia = "#FF00FF", e.green = "#008000", e.lime = "#00FF00", e.olive = "#808000", e.yellow = "#FFFF00", e.navy = "#000080", e.blue = "#0000FF", e.teal = "#008080", e.aqua = "#00FFFF", e.aliceblue = "#f0f8ff", e.antiquewhite = "#faebd7", e.aquamarine = "#7fffd4", e.azure = "#f0ffff", e.beige = "#f5f5dc", e.bisque = "#ffe4c4", e.blanchedalmond = "#ffebcd", e.blueviolet = "#8a2be2", e.brown = "#a52a2a", e.burlywood = "#deb887", e.cadetblue = "#5f9ea0", e.chartreuse = "#7fff00", e.chocolate = "#d2691e", e.coral = "#ff7f50", e.cornflowerblue = "#6495ed", e.cornsilk = "#fff8dc", e.crimson = "#dc143c", e.cyan = "#00ffff", e.darkblue = "#00008b", e.darkcyan = "#008b8b", e.darkgoldenrod = "#b8860b", e.darkgray = "#a9a9a9", e.darkgreen = "#006400", e.darkgrey = "#a9a9a9", e.darkkhaki = "#bdb76b", e.darkmagenta = "#8b008b", e.darkolivegreen = "#556b2f", e.darkorange = "#ff8c00", e.darkorchid = "#9932cc", e.darkred = "#8b0000", e.darksalmon = "#e9967a", e.darkseagreen = "#8fbc8f", e.darkslateblue = "#483d8b", e.darkslategray = "#2f4f4f", e.darkslategrey = "#2f4f4f", e.darkturquoise = "#00ced1", e.darkviolet = "#9400d3", e.deeppink = "#ff1493", e.deepskyblue = "#00bfff", e.dimgray = "#696969", e.dimgrey = "#696969", e.dodgerblue = "#1e90ff", e.firebrick = "#b22222", e.floralwhite = "#fffaf0", e.forestgreen = "#228b22", e.gainsboro = "#dcdcdc", e.ghostwhite = "#f8f8ff", e.gold = "#ffd700", e.goldenrod = "#daa520", e.greenyellow = "#adff2f", e.grey = "#808080", e.honeydew = "#f0fff0", e.hotpink = "#ff69b4", e.indianred = "#cd5c5c", e.indigo = "#4b0082", e.ivory = "#fffff0", e.khaki = "#f0e68c", e.lavender = "#e6e6fa", e.lavenderblush = "#fff0f5", e.lawngreen = "#7cfc00", e.lemonchiffon = "#fffacd", e.lightblue = "#add8e6", e.lightcoral = "#f08080", e.lightcyan = "#e0ffff", e.lightgoldenrodyellow = "#fafad2", e.lightgray = "#d3d3d3", e.lightgreen = "#90ee90", e.lightgrey = "#d3d3d3", e.lightpink = "#ffb6c1", e.lightsalmon = "#ffa07a", e.lightseagreen = "#20b2aa", e.lightskyblue = "#87cefa", e.lightslategray = "#778899", e.lightslategrey = "#778899", e.lightsteelblue = "#b0c4de", e.lightyellow = "#ffffe0", e.limegreen = "#32cd32", e.linen = "#faf0e6", e.magenta = "#ff00ff", e.mediumaquamarine = "#66cdaa", e.mediumblue = "#0000cd", e.mediumorchid = "#ba55d3", e.mediumpurple = "#9370db", e.mediumseagreen = "#3cb371", e.mediumslateblue = "#7b68ee", e.mediumspringgreen = "#00fa9a", e.mediumturquoise = "#48d1cc", e.mediumvioletred = "#c71585", e.midnightblue = "#191970", e.mintcream = "#f5fffa", e.mistyrose = "#ffe4e1", e.moccasin = "#ffe4b5", e.navajowhite = "#ffdead", e.oldlace = "#fdf5e6", e.olivedrab = "#6b8e23", e.orange = "#ffa500", e.orangered = "#ff4500", e.orchid = "#da70d6", e.palegoldenrod = "#eee8aa", e.palegreen = "#98fb98", e.paleturquoise = "#afeeee", e.palevioletred = "#db7093", e.papayawhip = "#ffefd5", e.peachpuff = "#ffdab9", e.peru = "#cd853f", e.pink = "#ffc0cb", e.plum = "#dda0dd", e.powderblue = "#b0e0e6", e.rosybrown = "#bc8f8f", e.royalblue = "#4169e1", e.saddlebrown = "#8b4513", e.salmon = "#fa8072", e.sandybrown = "#f4a460", e.seagreen = "#2e8b57", e.seashell = "#fff5ee", e.sienna = "#a0522d", e.skyblue = "#87ceeb", e.slateblue = "#6a5acd", e.slategray = "#708090", e.snow = "#fffafa", e.springgreen = "#00ff7f", e.steelblue = "#4682b4", e.tan = "#d2b48c", e.thistle = "#d8bfd8", e.tomato = "#ff6347", e.turquoise = "#40e0d0", e.violet = "#ee82ee", e.wheat = "#f5deb3", e.whitesmoke = "#f5f5f5", e.yellowgreen = "#9acd32", e))(ri || {});
function Nt(e) {
  return typeof e != "string" ? !1 : (e = e.toLowerCase(), /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e));
}
function ps(e) {
  return typeof e != "string" ? !1 : (e = e.toLowerCase(), /^(rgb\(|RGB\()/.test(e));
}
function ni(e) {
  return typeof e != "string" ? !1 : (e = e.toLowerCase(), /^(rgba|RGBA)/.test(e));
}
function ii(e) {
  return /^(rgb|rgba|RGB|RGBA)/.test(e);
}
function vs(e) {
  return ri[e];
}
function oi(e) {
  if (Nt(e) || ii(e))
    return e;
  const r = vs(e);
  if (!r)
    throw new Error(`Color: Invalid Input of ${e}`);
  return r;
}
function ms(e) {
  e = e.replace("#", ""), e.length === 3 && (e = Array.from(e).map((n) => n + n).join(""));
  const r = e.split("");
  return new Array(3).fill(0).map((n, i) => parseInt(`0x${r[i * 2]}${r[i * 2 + 1]}`));
}
function ys(e) {
  return e.replace(/rgb\(|rgba\(|\)/g, "").split(",").slice(0, 3).map((r) => parseInt(r));
}
function nt(e) {
  const r = oi(e).toLowerCase();
  return Nt(r) ? ms(r) : ys(r);
}
function ai(e) {
  const r = oi(e);
  return ni(r) ? Number(
    r.toLowerCase().split(",").slice(-1)[0].replace(/[)|\s]/g, "")
  ) : 1;
}
function Pr(e) {
  const r = nt(e);
  return r && [...r, ai(e)];
}
function bs(e, r) {
  const n = nt(e);
  return typeof r == "number" ? `rgba(${n.join(",")},${r})` : `rgb(${n.join(",")})`;
}
function Cs(e) {
  if (Nt(e))
    return e;
  const r = nt(e), n = (i) => Number(i).toString(16).padStart(2, "0");
  return `#${r.map(n).join("")}`;
}
function jt(e) {
  if (!Array.isArray(e))
    throw new Error(`getColorFromRgbValue: ${e} is not an array`);
  const { length: r } = e;
  if (r !== 3 && r !== 4)
    throw new Error("getColorFromRgbValue: value length should be 3 or 4");
  return (r === 3 ? "rgb(" : "rgba(") + e.join(",") + ")";
}
function ws(e, r = 0) {
  let n = Pr(e);
  return n = n.map((i, t) => t === 3 ? i : i - Math.ceil(2.55 * r)).map((i) => i < 0 ? 0 : i), jt(n);
}
function Ps(e, r = 0) {
  let n = Pr(e);
  return n = n.map((i, t) => t === 3 ? i : i + Math.ceil(2.55 * r)).map((i) => i > 255 ? 255 : i), jt(n);
}
function qe(e, r = 100) {
  const n = nt(e);
  return jt([...n, r / 100]);
}
const ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  darken: ws,
  fade: qe,
  getColorFromRgbValue: jt,
  getOpacity: ai,
  getRgbValue: nt,
  getRgbaValue: Pr,
  isHex: Nt,
  isRgb: ps,
  isRgbOrRgba: ii,
  isRgba: ni,
  lighten: Ps,
  toHex: Cs,
  toRgb: bs
}, Symbol.toStringTag, { value: "Module" })), $s = {
  name: "DvBorderBox11",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    titleWidth: {
      type: Number,
      default: 250
    },
    title: {
      type: String,
      default: ""
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-11",
      filterId: `border-box-11-filterId-${De()}`,
      defaultColor: ["#8aaafb", "#1f33a2"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    },
    fade: qe
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, _s = ["width", "height"], xs = ["id"], As = ["flood-color"], Ss = ["fill", "points"], Ls = ["stroke", "filter", "points"], Os = ["stroke", "points"], Gs = ["stroke", "points"], Rs = ["stroke", "fill", "filter", "points"], Ms = ["filter", "fill", "points"], Ds = ["filter", "fill", "points"], Ts = ["filter", "fill", "points"], Ws = ["filter", "fill", "points"], Fs = ["filter", "fill", "points"], Bs = ["filter", "fill", "points"], Ns = ["x"], js = ["fill", "filter", "points"], Es = ["fill", "filter", "points"], qs = { class: "border-box-content" };
function zs(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-11",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("defs", null, [
        c("filter", {
          id: t.filterId,
          height: "150%",
          width: "150%",
          x: "-25%",
          y: "-25%"
        }, [
          r[0] || (r[0] = c("feMorphology", {
            operator: "dilate",
            radius: "2",
            in: "SourceAlpha",
            result: "thicken"
          }, null, -1)),
          r[1] || (r[1] = c("feGaussianBlur", {
            in: "thicken",
            stdDeviation: "3",
            result: "blurred"
          }, null, -1)),
          c("feFlood", {
            "flood-color": t.mergedColor[1],
            result: "glowColor"
          }, null, 8, As),
          r[2] || (r[2] = c("feComposite", {
            in: "glowColor",
            in2: "blurred",
            operator: "in",
            result: "softGlowColored"
          }, null, -1)),
          r[3] || (r[3] = c("feMerge", null, [
            c("feMergeNode", { in: "softGlowColored" }),
            c("feMergeNode", { in: "SourceGraphic" })
          ], -1))
        ], 8, xs)
      ]),
      c("polygon", {
        fill: n.backgroundColor,
        points: `
        20, 32 ${e.width * 0.5 - n.titleWidth / 2}, 32 ${e.width * 0.5 - n.titleWidth / 2 + 20}, 53
        ${e.width * 0.5 + n.titleWidth / 2 - 20}, 53 ${e.width * 0.5 + n.titleWidth / 2}, 32
        ${e.width - 20}, 32 ${e.width - 8}, 48 ${e.width - 8}, ${e.height - 25} ${e.width - 20}, ${e.height - 8}
        20, ${e.height - 8} 8, ${e.height - 25} 8, 50
      `
      }, null, 8, Ss),
      c("polyline", {
        stroke: t.mergedColor[0],
        filter: `url(#${t.filterId})`,
        points: `
          ${(e.width - n.titleWidth) / 2}, 30
          20, 30 7, 50 7, ${50 + (e.height - 167) / 2}
          13, ${55 + (e.height - 167) / 2} 13, ${135 + (e.height - 167) / 2}
          7, ${140 + (e.height - 167) / 2} 7, ${e.height - 27}
          20, ${e.height - 7} ${e.width - 20}, ${e.height - 7} ${e.width - 7}, ${e.height - 27}
          ${e.width - 7}, ${140 + (e.height - 167) / 2} ${e.width - 13}, ${135 + (e.height - 167) / 2}
          ${e.width - 13}, ${55 + (e.height - 167) / 2} ${e.width - 7}, ${50 + (e.height - 167) / 2}
          ${e.width - 7}, 50 ${e.width - 20}, 30 ${(e.width + n.titleWidth) / 2}, 30
          ${(e.width + n.titleWidth) / 2 - 20}, 7 ${(e.width - n.titleWidth) / 2 + 20}, 7
          ${(e.width - n.titleWidth) / 2}, 30 ${(e.width - n.titleWidth) / 2 + 20}, 52
          ${(e.width + n.titleWidth) / 2 - 20}, 52 ${(e.width + n.titleWidth) / 2}, 30
        `
      }, null, 8, Ls),
      c("polygon", {
        stroke: t.mergedColor[0],
        fill: "transparent",
        points: `
          ${(e.width + n.titleWidth) / 2 - 5}, 30 ${(e.width + n.titleWidth) / 2 - 21}, 11
          ${(e.width + n.titleWidth) / 2 - 27}, 11 ${(e.width + n.titleWidth) / 2 - 8}, 34
        `
      }, null, 8, Os),
      c("polygon", {
        stroke: t.mergedColor[0],
        fill: "transparent",
        points: `
          ${(e.width - n.titleWidth) / 2 + 5}, 30 ${(e.width - n.titleWidth) / 2 + 22}, 49
          ${(e.width - n.titleWidth) / 2 + 28}, 49 ${(e.width - n.titleWidth) / 2 + 8}, 26
        `
      }, null, 8, Gs),
      c("polygon", {
        stroke: t.mergedColor[0],
        fill: a.fade(t.mergedColor[1] || t.defaultColor[1], 30),
        filter: `url(#${t.filterId})`,
        points: `
          ${(e.width + n.titleWidth) / 2 - 11}, 37 ${(e.width + n.titleWidth) / 2 - 32}, 11
          ${(e.width - n.titleWidth) / 2 + 23}, 11 ${(e.width - n.titleWidth) / 2 + 11}, 23
          ${(e.width - n.titleWidth) / 2 + 33}, 49 ${(e.width + n.titleWidth) / 2 - 22}, 49
        `
      }, null, 8, Rs),
      c("polygon", {
        filter: `url(#${t.filterId})`,
        fill: t.mergedColor[0],
        opacity: "1",
        points: `
          ${(e.width - n.titleWidth) / 2 - 10}, 37 ${(e.width - n.titleWidth) / 2 - 31}, 37
          ${(e.width - n.titleWidth) / 2 - 25}, 46 ${(e.width - n.titleWidth) / 2 - 4}, 46
        `
      }, r[4] || (r[4] = [
        c("animate", {
          attributeName: "opacity",
          values: "1;0.7;1",
          dur: "2s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, -1)
      ]), 8, Ms),
      c("polygon", {
        filter: `url(#${t.filterId})`,
        fill: t.mergedColor[0],
        opacity: "0.7",
        points: `
          ${(e.width - n.titleWidth) / 2 - 40}, 37 ${(e.width - n.titleWidth) / 2 - 61}, 37
          ${(e.width - n.titleWidth) / 2 - 55}, 46 ${(e.width - n.titleWidth) / 2 - 34}, 46
        `
      }, r[5] || (r[5] = [
        c("animate", {
          attributeName: "opacity",
          values: "0.7;0.4;0.7",
          dur: "2s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, -1)
      ]), 8, Ds),
      c("polygon", {
        filter: `url(#${t.filterId})`,
        fill: t.mergedColor[0],
        opacity: "0.5",
        points: `
          ${(e.width - n.titleWidth) / 2 - 70}, 37 ${(e.width - n.titleWidth) / 2 - 91}, 37
          ${(e.width - n.titleWidth) / 2 - 85}, 46 ${(e.width - n.titleWidth) / 2 - 64}, 46
        `
      }, r[6] || (r[6] = [
        c("animate", {
          attributeName: "opacity",
          values: "0.5;0.2;0.5",
          dur: "2s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, -1)
      ]), 8, Ts),
      c("polygon", {
        filter: `url(#${t.filterId})`,
        fill: t.mergedColor[0],
        opacity: "1",
        points: `
          ${(e.width + n.titleWidth) / 2 + 30}, 37 ${(e.width + n.titleWidth) / 2 + 9}, 37
          ${(e.width + n.titleWidth) / 2 + 3}, 46 ${(e.width + n.titleWidth) / 2 + 24}, 46
        `
      }, r[7] || (r[7] = [
        c("animate", {
          attributeName: "opacity",
          values: "1;0.7;1",
          dur: "2s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, -1)
      ]), 8, Ws),
      c("polygon", {
        filter: `url(#${t.filterId})`,
        fill: t.mergedColor[0],
        opacity: "0.7",
        points: `
          ${(e.width + n.titleWidth) / 2 + 60}, 37 ${(e.width + n.titleWidth) / 2 + 39}, 37
          ${(e.width + n.titleWidth) / 2 + 33}, 46 ${(e.width + n.titleWidth) / 2 + 54}, 46
        `
      }, r[8] || (r[8] = [
        c("animate", {
          attributeName: "opacity",
          values: "0.7;0.4;0.7",
          dur: "2s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, -1)
      ]), 8, Fs),
      c("polygon", {
        filter: `url(#${t.filterId})`,
        fill: t.mergedColor[0],
        opacity: "0.5",
        points: `
          ${(e.width + n.titleWidth) / 2 + 90}, 37 ${(e.width + n.titleWidth) / 2 + 69}, 37
          ${(e.width + n.titleWidth) / 2 + 63}, 46 ${(e.width + n.titleWidth) / 2 + 84}, 46
        `
      }, r[9] || (r[9] = [
        c("animate", {
          attributeName: "opacity",
          values: "0.5;0.2;0.5",
          dur: "2s",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, -1)
      ]), 8, Bs),
      c("text", {
        class: "dv-border-box-11-title",
        x: `${e.width / 2}`,
        y: "32",
        fill: "#fff",
        "font-size": "18",
        "text-anchor": "middle",
        "dominant-baseline": "middle"
      }, Ge(n.title), 9, Ns),
      c("polygon", {
        fill: t.mergedColor[0],
        filter: `url(#${t.filterId})`,
        points: `
          7, ${53 + (e.height - 167) / 2} 11, ${57 + (e.height - 167) / 2}
          11, ${133 + (e.height - 167) / 2} 7, ${137 + (e.height - 167) / 2}
        `
      }, null, 8, js),
      c("polygon", {
        fill: t.mergedColor[0],
        filter: `url(#${t.filterId})`,
        points: `
          ${e.width - 7}, ${53 + (e.height - 167) / 2} ${e.width - 11}, ${57 + (e.height - 167) / 2}
          ${e.width - 11}, ${133 + (e.height - 167) / 2} ${e.width - 7}, ${137 + (e.height - 167) / 2}
        `
      }, null, 8, Es)
    ], 8, _s)),
    c("div", qs, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Kr = /* @__PURE__ */ ye($s, [["render", zs]]), Is = {
  install: (e) => {
    e.component(Kr.name, Kr);
  }
}, Hs = {
  name: "DvBorderBox12",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-12",
      filterId: `borderr-box-12-filterId-${De()}`,
      defaultColor: ["#2e6099", "#7ce7fd"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    },
    fade: qe
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Vs = ["width", "height"], Us = ["id"], Xs = ["flood-color"], Qs = ["values"], Ys = ["fill", "stroke", "d"], Ks = ["filter", "stroke"], Js = ["filter", "stroke", "d"], Zs = ["filter", "stroke", "d"], el = ["filter", "stroke", "d"], tl = { class: "border-box-content" };
function rl(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-12",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("defs", null, [
        c("filter", {
          id: t.filterId,
          height: "150%",
          width: "150%",
          x: "-25%",
          y: "-25%"
        }, [
          r[0] || (r[0] = c("feMorphology", {
            operator: "dilate",
            radius: "1",
            in: "SourceAlpha",
            result: "thicken"
          }, null, -1)),
          r[1] || (r[1] = c("feGaussianBlur", {
            in: "thicken",
            stdDeviation: "2",
            result: "blurred"
          }, null, -1)),
          c("feFlood", {
            "flood-color": a.fade(t.mergedColor[1] || t.defaultColor[1], 70),
            result: "glowColor"
          }, [
            c("animate", {
              attributeName: "flood-color",
              values: `
                ${a.fade(t.mergedColor[1] || t.defaultColor[1], 70)};
                ${a.fade(t.mergedColor[1] || t.defaultColor[1], 30)};
                ${a.fade(t.mergedColor[1] || t.defaultColor[1], 70)};
              `,
              dur: "3s",
              begin: "0s",
              repeatCount: "indefinite"
            }, null, 8, Qs)
          ], 8, Xs),
          r[2] || (r[2] = c("feComposite", {
            in: "glowColor",
            in2: "blurred",
            operator: "in",
            result: "softGlowColored"
          }, null, -1)),
          r[3] || (r[3] = c("feMerge", null, [
            c("feMergeNode", { in: "softGlowColored" }),
            c("feMergeNode", { in: "SourceGraphic" })
          ], -1))
        ], 8, Us)
      ]),
      e.width && e.height ? (ne(), re("path", {
        key: 0,
        fill: n.backgroundColor,
        "stroke-width": "2",
        stroke: t.mergedColor[0],
        d: `
          M15 5 L ${e.width - 15} 5 Q ${e.width - 5} 5, ${e.width - 5} 15
          L ${e.width - 5} ${e.height - 15} Q ${e.width - 5} ${e.height - 5}, ${e.width - 15} ${e.height - 5}
          L 15, ${e.height - 5} Q 5 ${e.height - 5} 5 ${e.height - 15} L 5 15
          Q 5 5 15 5
        `
      }, null, 8, Ys)) : Ce("", !0),
      c("path", {
        "stroke-width": "2",
        fill: "transparent",
        "stroke-linecap": "round",
        filter: `url(#${t.filterId})`,
        stroke: t.mergedColor[1],
        d: "M 20 5 L 15 5 Q 5 5 5 15 L 5 20"
      }, null, 8, Ks),
      c("path", {
        "stroke-width": "2",
        fill: "transparent",
        "stroke-linecap": "round",
        filter: `url(#${t.filterId})`,
        stroke: t.mergedColor[1],
        d: `M ${e.width - 20} 5 L ${e.width - 15} 5 Q ${e.width - 5} 5 ${e.width - 5} 15 L ${e.width - 5} 20`
      }, null, 8, Js),
      c("path", {
        "stroke-width": "2",
        fill: "transparent",
        "stroke-linecap": "round",
        filter: `url(#${t.filterId})`,
        stroke: t.mergedColor[1],
        d: `
          M ${e.width - 20} ${e.height - 5} L ${e.width - 15} ${e.height - 5}
          Q ${e.width - 5} ${e.height - 5} ${e.width - 5} ${e.height - 15}
          L ${e.width - 5} ${e.height - 20}
        `
      }, null, 8, Zs),
      c("path", {
        "stroke-width": "2",
        fill: "transparent",
        "stroke-linecap": "round",
        filter: `url(#${t.filterId})`,
        stroke: t.mergedColor[1],
        d: `
          M 20 ${e.height - 5} L 15 ${e.height - 5}
          Q 5 ${e.height - 5} 5 ${e.height - 15}
          L 5 ${e.height - 20}
        `
      }, null, 8, el)
    ], 8, Vs)),
    c("div", tl, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Jr = /* @__PURE__ */ ye(Hs, [["render", rl]]), nl = {
  install: (e) => {
    e.component(Jr.name, Jr);
  }
}, il = {
  name: "DvBorderBox13",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: "transparent"
    }
  },
  data() {
    return {
      ref: "border-box-13",
      defaultColor: ["#6586ec", "#2cf7fe"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, ol = ["width", "height"], al = ["fill", "stroke", "d"], sl = ["stroke"], ll = ["stroke"], ul = ["stroke", "d"], dl = { class: "border-box-content" };
function fl(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-border-box-13",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      class: "dv-border-svg-container",
      width: e.width,
      height: e.height
    }, [
      c("path", {
        fill: n.backgroundColor,
        stroke: t.mergedColor[0],
        d: `
          M 5 20 L 5 10 L 12 3  L 60 3 L 68 10
          L ${e.width - 20} 10 L ${e.width - 5} 25
          L ${e.width - 5} ${e.height - 5} L 20 ${e.height - 5}
          L 5 ${e.height - 20} L 5 20
        `
      }, null, 8, al),
      c("path", {
        fill: "transparent",
        "stroke-width": "3",
        "stroke-linecap": "round",
        "stroke-dasharray": "10, 5",
        stroke: t.mergedColor[0],
        d: "M 16 9 L 61 9"
      }, null, 8, sl),
      c("path", {
        fill: "transparent",
        stroke: t.mergedColor[1],
        d: "M 5 20 L 5 10 L 12 3  L 60 3 L 68 10"
      }, null, 8, ll),
      c("path", {
        fill: "transparent",
        stroke: t.mergedColor[1],
        d: `M ${e.width - 5} ${e.height - 30} L ${e.width - 5} ${e.height - 5} L ${e.width - 30} ${e.height - 5}`
      }, null, 8, ul)
    ], 8, ol)),
    c("div", dl, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Zr = /* @__PURE__ */ ye(il, [["render", fl]]), cl = {
  install: (e) => {
    e.component(Zr.name, Zr);
  }
}, hl = {
  name: "DvDecoration1",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      ref: "decoration-1",
      svgWH: [200, 50],
      svgScale: [1, 1],
      rowNum: 4,
      rowPoints: 20,
      pointSideLength: 2.5,
      halfPointSideLength: 2.5 / 2,
      points: [],
      rects: [],
      defaultColor: ["#fff", "#0de7c2"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcSVGData: e } = this;
      e();
    },
    calcSVGData() {
      const { calcPointsPosition: e, calcRectsPosition: r, calcScale: n } = this;
      e(), r(), n();
    },
    calcPointsPosition() {
      const { svgWH: e, rowNum: r, rowPoints: n } = this, [i, t] = e, a = i / (n + 1), l = t / (r + 1);
      let w = new Array(r).fill(0).map((z, j) => new Array(n).fill(0).map((E, X) => [
        a * (X + 1),
        l * (j + 1)
      ]));
      this.points = w.reduce((z, j) => [...z, ...j], []);
    },
    calcRectsPosition() {
      const { points: e, rowPoints: r } = this, n = e[r * 2 - 1], i = e[r * 2 - 3];
      this.rects = [n, i];
    },
    calcScale() {
      const { width: e, height: r, svgWH: n } = this, [i, t] = n;
      this.svgScale = [e / i, r / t];
    },
    onResize() {
      const { calcSVGData: e } = this;
      e();
    },
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, gl = ["width", "height"], pl = ["fill", "x", "y", "width", "height"], vl = ["values", "begin"], ml = ["fill", "x", "y", "width", "height"], yl = ["values"], bl = ["values"], Cl = ["values"], wl = ["values"], Pl = ["fill", "x", "y", "height"], kl = ["values"];
function $l(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-1",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: `${t.svgWH[0]}px`,
      height: `${t.svgWH[1]}px`,
      style: $e(`transform:scale(${t.svgScale[0]},${t.svgScale[1]});`)
    }, [
      (ne(!0), re(we, null, ke(t.points, (l, w) => (ne(), re(we, null, [
        Math.random() > 0.6 ? (ne(), re("rect", {
          key: w,
          fill: t.mergedColor[0],
          x: l[0] - t.halfPointSideLength,
          y: l[1] - t.halfPointSideLength,
          width: t.pointSideLength,
          height: t.pointSideLength
        }, [
          Math.random() > 0.6 ? (ne(), re("animate", {
            key: 0,
            attributeName: "fill",
            values: `${t.mergedColor[0]};transparent`,
            dur: "1s",
            begin: Math.random() * 2,
            repeatCount: "indefinite"
          }, null, 8, vl)) : Ce("", !0)
        ], 8, pl)) : Ce("", !0)
      ], 64))), 256)),
      t.rects[0] ? (ne(), re("rect", {
        key: 0,
        fill: t.mergedColor[1],
        x: t.rects[0][0] - t.pointSideLength,
        y: t.rects[0][1] - t.pointSideLength,
        width: t.pointSideLength * 2,
        height: t.pointSideLength * 2
      }, [
        c("animate", {
          attributeName: "width",
          values: `0;${t.pointSideLength * 2}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null, 8, yl),
        c("animate", {
          attributeName: "height",
          values: `0;${t.pointSideLength * 2}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null, 8, bl),
        c("animate", {
          attributeName: "x",
          values: `${t.rects[0][0]};${t.rects[0][0] - t.pointSideLength}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null, 8, Cl),
        c("animate", {
          attributeName: "y",
          values: `${t.rects[0][1]};${t.rects[0][1] - t.pointSideLength}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null, 8, wl)
      ], 8, ml)) : Ce("", !0),
      t.rects[1] ? (ne(), re("rect", {
        key: 1,
        fill: t.mergedColor[1],
        x: t.rects[1][0] - 40,
        y: t.rects[1][1] - t.pointSideLength,
        width: 40,
        height: t.pointSideLength * 2
      }, [
        r[0] || (r[0] = c("animate", {
          attributeName: "width",
          values: "0;40;0",
          dur: "2s",
          repeatCount: "indefinite"
        }, null, -1)),
        c("animate", {
          attributeName: "x",
          values: `${t.rects[1][0]};${t.rects[1][0] - 40};${t.rects[1][0]}`,
          dur: "2s",
          repeatCount: "indefinite"
        }, null, 8, kl)
      ], 8, Pl)) : Ce("", !0)
    ], 12, gl))
  ], 512);
}
const en = /* @__PURE__ */ ye(hl, [["render", $l]]), _l = {
  install: (e) => {
    e.component(en.name, en);
  }
}, xl = {
  name: "DvDecoration2",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    dur: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      ref: "decoration-2",
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      defaultColor: ["#3faacb", "#fff"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    },
    reverse() {
      const { calcSVGData: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcSVGData: e } = this;
      e();
    },
    calcSVGData() {
      const { reverse: e, width: r, height: n } = this;
      e ? (this.w = 1, this.h = n, this.x = r / 2, this.y = 0) : (this.w = r, this.h = 1, this.x = 0, this.y = n / 2);
    },
    onResize() {
      const { calcSVGData: e } = this;
      e();
    },
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Al = ["width", "height"], Sl = ["x", "y", "width", "height", "fill"], Ll = ["attributeName", "to", "dur"], Ol = ["x", "y", "fill"], Gl = ["attributeName", "to", "dur"];
function Rl(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-2",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: `${e.width}px`,
      height: `${e.height}px`
    }, [
      c("rect", {
        x: t.x,
        y: t.y,
        width: t.w,
        height: t.h,
        fill: t.mergedColor[0]
      }, [
        c("animate", {
          attributeName: n.reverse ? "height" : "width",
          from: "0",
          to: n.reverse ? e.height : e.width,
          dur: `${n.dur}s`,
          calcMode: "spline",
          keyTimes: "0;1",
          keySplines: ".42,0,.58,1",
          repeatCount: "indefinite"
        }, null, 8, Ll)
      ], 8, Sl),
      c("rect", {
        x: t.x,
        y: t.y,
        width: "1",
        height: "1",
        fill: t.mergedColor[1]
      }, [
        c("animate", {
          attributeName: n.reverse ? "y" : "x",
          from: "0",
          to: n.reverse ? e.height : e.width,
          dur: `${n.dur}s`,
          calcMode: "spline",
          keyTimes: "0;1",
          keySplines: "0.42,0,0.58,1",
          repeatCount: "indefinite"
        }, null, 8, Gl)
      ], 8, Ol)
    ], 8, Al))
  ], 512);
}
const wt = /* @__PURE__ */ ye(xl, [["render", Rl]]), Ml = wt.name || `Dv${wt.__file ? wt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Dl = {
  install: (e) => {
    e.component(Ml, wt);
  }
}, Tl = {
  name: "DvDecoration3",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      ref: "decoration-3",
      svgWH: [300, 35],
      svgScale: [1, 1],
      rowNum: 2,
      rowPoints: 25,
      pointSideLength: 7,
      halfPointSideLength: 7 / 2,
      points: [],
      defaultColor: ["#7acaec", "transparent"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcSVGData: e } = this;
      e();
    },
    calcSVGData() {
      const { calcPointsPosition: e, calcScale: r } = this;
      e(), r();
    },
    calcPointsPosition() {
      const { svgWH: e, rowNum: r, rowPoints: n } = this, [i, t] = e, a = i / (n + 1), l = t / (r + 1);
      let w = new Array(r).fill(0).map((z, j) => new Array(n).fill(0).map((E, X) => [
        a * (X + 1),
        l * (j + 1)
      ]));
      this.points = w.reduce((z, j) => [...z, ...j], []);
    },
    calcScale() {
      const { width: e, height: r, svgWH: n } = this, [i, t] = n;
      this.svgScale = [e / i, r / t];
    },
    onResize() {
      const { calcSVGData: e } = this;
      e();
    },
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Wl = ["width", "height"], Fl = ["fill", "x", "y", "width", "height"], Bl = ["values", "dur", "begin"];
function Nl(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-3",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: `${t.svgWH[0]}px`,
      height: `${t.svgWH[1]}px`,
      style: $e(`transform:scale(${t.svgScale[0]},${t.svgScale[1]});`)
    }, [
      (ne(!0), re(we, null, ke(t.points, (l, w) => (ne(), re("rect", {
        key: w,
        fill: t.mergedColor[0],
        x: l[0] - t.halfPointSideLength,
        y: l[1] - t.halfPointSideLength,
        width: t.pointSideLength,
        height: t.pointSideLength
      }, [
        Math.random() > 0.6 ? (ne(), re("animate", {
          key: 0,
          attributeName: "fill",
          values: `${t.mergedColor.join(";")}`,
          dur: Math.random() + 1 + "s",
          begin: Math.random() * 2,
          repeatCount: "indefinite"
        }, null, 8, Bl)) : Ce("", !0)
      ], 8, Fl))), 128))
    ], 12, Wl))
  ], 512);
}
const Pt = /* @__PURE__ */ ye(Tl, [["render", Nl]]), jl = Pt.name || `Dv${Pt.__file ? Pt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, El = {
  install: (e) => {
    e.component(jl, Pt);
  }
}, ql = {
  name: "DvDecoration4",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: !1
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      ref: "decoration-4",
      defaultColor: ["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.3)"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, zl = ["width", "height"], Il = ["stroke", "points"], Hl = ["stroke", "points"];
function Vl(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-4",
    ref: t.ref
  }, [
    c("div", {
      class: rt(`container ${n.reverse ? "reverse" : "normal"}`),
      style: $e(n.reverse ? `width:${e.width}px;height:5px;animation-duration:${n.dur}s` : `width:5px;height:${e.height}px;animation-duration:${n.dur}s`)
    }, [
      (ne(), re("svg", {
        width: n.reverse ? e.width : 5,
        height: n.reverse ? 5 : e.height
      }, [
        c("polyline", {
          stroke: t.mergedColor[0],
          points: n.reverse ? `0, 2.5 ${e.width}, 2.5` : `2.5, 0 2.5, ${e.height}`
        }, null, 8, Il),
        c("polyline", {
          class: "bold-line",
          stroke: t.mergedColor[1],
          "stroke-width": "3",
          "stroke-dasharray": "20, 80",
          "stroke-dashoffset": "-30",
          points: n.reverse ? `0, 2.5 ${e.width}, 2.5` : `2.5, 0 2.5, ${e.height}`
        }, null, 8, Hl)
      ], 8, zl))
    ], 6)
  ], 512);
}
const kt = /* @__PURE__ */ ye(ql, [["render", Vl]]), Ul = kt.name || `Dv${kt.__file ? kt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Xl = {
  install: (e) => {
    e.component(Ul, kt);
  }
}, Ql = {
  name: "DvDecoration5",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 1.2
    }
  },
  data() {
    return {
      ref: "decoration-5",
      line1Points: "",
      line2Points: "",
      line1Length: 0,
      line2Length: 0,
      defaultColor: ["#3f96a5", "#3f96a5"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcSVGData: e } = this;
      e();
    },
    calcSVGData() {
      const { width: e, height: r } = this;
      let n = [
        [0, r * 0.2],
        [e * 0.18, r * 0.2],
        [e * 0.2, r * 0.4],
        [e * 0.25, r * 0.4],
        [e * 0.27, r * 0.6],
        [e * 0.72, r * 0.6],
        [e * 0.75, r * 0.4],
        [e * 0.8, r * 0.4],
        [e * 0.82, r * 0.2],
        [e, r * 0.2]
      ], i = [
        [e * 0.3, r * 0.8],
        [e * 0.7, r * 0.8]
      ];
      const t = ve.getPolylineLength(n), a = ve.getPolylineLength(i);
      n = n.map((l) => l.join(",")).join(" "), i = i.map((l) => l.join(",")).join(" "), this.line1Points = n, this.line2Points = i, this.line1Length = t, this.line2Length = a;
    },
    onResize() {
      const { calcSVGData: e } = this;
      e();
    },
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Yl = ["width", "height"], Kl = ["stroke", "points"], Jl = ["from", "to", "dur"], Zl = ["stroke", "points"], eu = ["from", "to", "dur"];
function tu(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-5",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: e.width,
      height: e.height
    }, [
      c("polyline", {
        fill: "transparent",
        stroke: t.mergedColor[0],
        "stroke-width": "3",
        points: t.line1Points
      }, [
        c("animate", {
          attributeName: "stroke-dasharray",
          attributeType: "XML",
          from: `0, ${t.line1Length / 2}, 0, ${t.line1Length / 2}`,
          to: `0, 0, ${t.line1Length}, 0`,
          dur: `${n.dur}s`,
          begin: "0s",
          calcMode: "spline",
          keyTimes: "0;1",
          keySplines: "0.4,1,0.49,0.98",
          repeatCount: "indefinite"
        }, null, 8, Jl)
      ], 8, Kl),
      c("polyline", {
        fill: "transparent",
        stroke: t.mergedColor[1],
        "stroke-width": "2",
        points: t.line2Points
      }, [
        c("animate", {
          attributeName: "stroke-dasharray",
          attributeType: "XML",
          from: `0, ${t.line2Length / 2}, 0, ${t.line2Length / 2}`,
          to: `0, 0, ${t.line2Length}, 0`,
          dur: `${n.dur}s`,
          begin: "0s",
          calcMode: "spline",
          keyTimes: "0;1",
          keySplines: ".4,1,.49,.98",
          repeatCount: "indefinite"
        }, null, 8, eu)
      ], 8, Zl)
    ], 8, Yl))
  ], 512);
}
const $t = /* @__PURE__ */ ye(Ql, [["render", tu]]), ru = $t.name || `Dv${$t.__file ? $t.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, nu = {
  install: (e) => {
    e.component(ru, $t);
  }
}, iu = {
  name: "DvDecoration6",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      ref: "decoration-6",
      svgWH: [300, 35],
      svgScale: [1, 1],
      rowNum: 1,
      rowPoints: 40,
      rectWidth: 7,
      halfRectWidth: 7 / 2,
      points: [],
      heights: [],
      minHeights: [],
      randoms: [],
      defaultColor: ["#7acaec", "#7acaec"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcSVGData: e } = this;
      e();
    },
    calcSVGData() {
      const { calcPointsPosition: e, calcScale: r } = this;
      e(), r();
    },
    calcPointsPosition() {
      const { svgWH: e, rowNum: r, rowPoints: n } = this, [i, t] = e, a = i / (n + 1), l = t / (r + 1);
      let w = new Array(r).fill(0).map((j, E) => new Array(n).fill(0).map((X, q) => [
        a * (q + 1),
        l * (E + 1)
      ]));
      this.points = w.reduce((j, E) => [...j, ...E], []);
      const z = this.heights = new Array(r * n).fill(0).map((j) => Math.random() > 0.8 ? tt(0.7 * t, t) : tt(0.2 * t, 0.5 * t));
      this.minHeights = new Array(r * n).fill(0).map((j, E) => z[E] * Math.random()), this.randoms = new Array(r * n).fill(0).map((j) => Math.random() + 1.5);
    },
    calcScale() {
      const { width: e, height: r, svgWH: n } = this, [i, t] = n;
      this.svgScale = [e / i, r / t];
    },
    onResize() {
      const { calcSVGData: e } = this;
      e();
    },
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, ou = ["width", "height"], au = ["fill", "x", "y", "width", "height"], su = ["values", "dur"], lu = ["values", "dur"];
function uu(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-6",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: `${t.svgWH[0]}px`,
      height: `${t.svgWH[1]}px`,
      style: $e(`transform:scale(${t.svgScale[0]},${t.svgScale[1]});`)
    }, [
      (ne(!0), re(we, null, ke(t.points, (l, w) => (ne(), re("rect", {
        key: w,
        fill: t.mergedColor[Math.random() > 0.5 ? 0 : 1],
        x: l[0] - t.halfRectWidth,
        y: l[1] - t.heights[w] / 2,
        width: t.rectWidth,
        height: t.heights[w]
      }, [
        c("animate", {
          attributeName: "y",
          values: `${l[1] - t.minHeights[w] / 2};${l[1] - t.heights[w] / 2};${l[1] - t.minHeights[w] / 2}`,
          dur: `${t.randoms[w]}s`,
          keyTimes: "0;0.5;1",
          calcMode: "spline",
          keySplines: "0.42,0,0.58,1;0.42,0,0.58,1",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, 8, su),
        c("animate", {
          attributeName: "height",
          values: `${t.minHeights[w]};${t.heights[w]};${t.minHeights[w]}`,
          dur: `${t.randoms[w]}s`,
          keyTimes: "0;0.5;1",
          calcMode: "spline",
          keySplines: "0.42,0,0.58,1;0.42,0,0.58,1",
          begin: "0s",
          repeatCount: "indefinite"
        }, null, 8, lu)
      ], 8, au))), 128))
    ], 12, ou))
  ], 512);
}
const _t = /* @__PURE__ */ ye(iu, [["render", uu]]), du = _t.name || `Dv${_t.__file ? _t.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, fu = {
  install: (e) => {
    e.component(du, _t);
  }
}, cu = {
  name: "DvDecoration7",
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      defaultColor: ["#1dc1f5", "#1dc1f5"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, hu = { class: "dv-decoration-7" }, gu = {
  width: "21px",
  height: "20px"
}, pu = ["stroke"], vu = ["stroke"], mu = {
  width: "21px",
  height: "20px"
}, yu = ["stroke"], bu = ["stroke"];
function Cu(e, r, n, i, t, a) {
  return ne(), re("div", hu, [
    (ne(), re("svg", gu, [
      c("polyline", {
        "stroke-width": "4",
        fill: "transparent",
        stroke: t.mergedColor[0],
        points: "10, 0 19, 10 10, 20"
      }, null, 8, pu),
      c("polyline", {
        "stroke-width": "2",
        fill: "transparent",
        stroke: t.mergedColor[1],
        points: "2, 0 11, 10 2, 20"
      }, null, 8, vu)
    ])),
    xe(e.$slots, "default"),
    (ne(), re("svg", mu, [
      c("polyline", {
        "stroke-width": "4",
        fill: "transparent",
        stroke: t.mergedColor[0],
        points: "11, 0 2, 10 11, 20"
      }, null, 8, yu),
      c("polyline", {
        "stroke-width": "2",
        fill: "transparent",
        stroke: t.mergedColor[1],
        points: "19, 0 10, 10 19, 20"
      }, null, 8, bu)
    ]))
  ]);
}
const xt = /* @__PURE__ */ ye(cu, [["render", Cu]]), wu = xt.name || `Dv${xt.__file ? xt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Pu = {
  install: (e) => {
    e.component(wu, xt);
  }
}, ku = {
  name: "DvDecoration8",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      ref: "decoration-8",
      defaultColor: ["#3f96a5", "#3f96a5"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    xPos(e) {
      const { reverse: r, width: n } = this;
      return r ? n - e : e;
    },
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, $u = ["width", "height"], _u = ["stroke", "points"], xu = ["stroke", "points"], Au = ["stroke", "points"];
function Su(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-8",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: e.width,
      height: e.height
    }, [
      c("polyline", {
        stroke: t.mergedColor[0],
        "stroke-width": "2",
        fill: "transparent",
        points: `${a.xPos(0)}, 0 ${a.xPos(30)}, ${e.height / 2}`
      }, null, 8, _u),
      c("polyline", {
        stroke: t.mergedColor[0],
        "stroke-width": "2",
        fill: "transparent",
        points: `${a.xPos(20)}, 0 ${a.xPos(50)}, ${e.height / 2} ${a.xPos(e.width)}, ${e.height / 2}`
      }, null, 8, xu),
      c("polyline", {
        stroke: t.mergedColor[1],
        fill: "transparent",
        "stroke-width": "3",
        points: `${a.xPos(0)}, ${e.height - 3}, ${a.xPos(200)}, ${e.height - 3}`
      }, null, 8, Au)
    ], 8, $u))
  ], 512);
}
const At = /* @__PURE__ */ ye(ku, [["render", Su]]), Lu = At.name || `Dv${At.__file ? At.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Ou = {
  install: (e) => {
    e.component(Lu, At);
  }
}, Gu = {
  name: "DvDecoration9",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    dur: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      ref: "decoration-9",
      polygonId: `decoration-9-polygon-${De()}`,
      svgWH: [100, 100],
      svgScale: [1, 1],
      defaultColor: ["rgba(3, 166, 224, 0.8)", "rgba(3, 166, 224, 0.5)"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcScale: e } = this;
      e();
    },
    calcScale() {
      const { width: e, height: r, svgWH: n } = this, [i, t] = n;
      this.svgScale = [e / i, r / t];
    },
    onResize() {
      const { calcScale: e } = this;
      e();
    },
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    },
    fade: qe
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Ru = ["width", "height"], Mu = ["id"], Du = ["stroke"], Tu = ["dur"], Wu = ["stroke"], Fu = ["dur"], Bu = ["stroke"], Nu = ["xlink:href", "stroke", "fill"], ju = ["dur", "begin"], Eu = ["stroke"];
function qu(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-9",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: `${t.svgWH[0]}px`,
      height: `${t.svgWH[1]}px`,
      style: $e(`transform:scale(${t.svgScale[0]},${t.svgScale[1]});`)
    }, [
      c("defs", null, [
        c("polygon", {
          id: t.polygonId,
          points: "15, 46.5, 21, 47.5, 21, 52.5, 15, 53.5"
        }, null, 8, Mu)
      ]),
      c("circle", {
        cx: "50",
        cy: "50",
        r: "45",
        fill: "transparent",
        stroke: t.mergedColor[1],
        "stroke-width": "10",
        "stroke-dasharray": "80, 100, 30, 100"
      }, [
        c("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          values: "0 50 50;360 50 50",
          dur: `${n.dur}s`,
          repeatCount: "indefinite"
        }, null, 8, Tu)
      ], 8, Du),
      c("circle", {
        cx: "50",
        cy: "50",
        r: "45",
        fill: "transparent",
        stroke: t.mergedColor[0],
        "stroke-width": "6",
        "stroke-dasharray": "50, 66, 100, 66"
      }, [
        c("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          values: "0 50 50;-360 50 50",
          dur: `${n.dur}s`,
          repeatCount: "indefinite"
        }, null, 8, Fu)
      ], 8, Wu),
      c("circle", {
        cx: "50",
        cy: "50",
        r: "38",
        fill: "transparent",
        stroke: a.fade(t.mergedColor[1] || t.defaultColor[1], 30),
        "stroke-width": "1",
        "stroke-dasharray": "5, 1"
      }, null, 8, Bu),
      (ne(!0), re(we, null, ke(new Array(20).fill(0), (l, w) => (ne(), re("use", {
        key: w,
        "xlink:href": `#${t.polygonId}`,
        stroke: t.mergedColor[1],
        fill: Math.random() > 0.4 ? "transparent" : t.mergedColor[0]
      }, [
        c("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          values: "0 50 50;360 50 50",
          dur: `${n.dur}s`,
          begin: `${w * n.dur / 20}s`,
          repeatCount: "indefinite"
        }, null, 8, ju)
      ], 8, Nu))), 128)),
      c("circle", {
        cx: "50",
        cy: "50",
        r: "26",
        fill: "transparent",
        stroke: a.fade(t.mergedColor[1] || t.defaultColor[1], 30),
        "stroke-width": "1",
        "stroke-dasharray": "5, 1"
      }, null, 8, Eu)
    ], 12, Ru)),
    xe(e.$slots, "default")
  ], 512);
}
const St = /* @__PURE__ */ ye(Gu, [["render", qu]]), zu = St.name || `Dv${St.__file ? St.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Iu = {
  install: (e) => {
    e.component(zu, St);
  }
}, Hu = {
  name: "DvDecoration10",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const e = De();
    return {
      ref: "decoration-10",
      animationId1: `d10ani1${e}`,
      animationId2: `d10ani2${e}`,
      animationId3: `d10ani3${e}`,
      animationId4: `d10ani4${e}`,
      animationId5: `d10ani5${e}`,
      animationId6: `d10ani6${e}`,
      animationId7: `d10ani7${e}`,
      defaultColor: ["#00c2ff", "rgba(0, 194, 255, 0.3)"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    }
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, Vu = ["width", "height"], Uu = ["stroke", "points"], Xu = ["stroke", "points", "stroke-dasharray"], Qu = ["id", "values", "begin"], Yu = ["values", "begin"], Ku = ["stroke", "points", "stroke-dasharray"], Ju = ["id", "values", "begin"], Zu = ["values", "begin"], ed = ["stroke", "points", "stroke-dasharray"], td = ["id", "values", "begin"], rd = ["values", "begin"], nd = ["cy", "fill"], id = ["id", "values", "begin"], od = ["cx", "cy", "fill"], ad = ["id", "values", "begin"], sd = ["values", "begin"], ld = ["cx", "cy", "fill"], ud = ["id", "values", "begin"], dd = ["values", "begin"], fd = ["cx", "cy", "fill"], cd = ["id", "values", "begin"], hd = ["values", "begin"];
function gd(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-10",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: e.width,
      height: e.height
    }, [
      c("polyline", {
        stroke: t.mergedColor[1],
        "stroke-width": "2",
        points: `0, ${e.height / 2} ${e.width}, ${e.height / 2}`
      }, null, 8, Uu),
      c("polyline", {
        stroke: t.mergedColor[0],
        "stroke-width": "2",
        points: `5, ${e.height / 2} ${e.width * 0.2 - 3}, ${e.height / 2}`,
        "stroke-dasharray": `0, ${e.width * 0.2}`,
        fill: "freeze"
      }, [
        c("animate", {
          id: t.animationId2,
          attributeName: "stroke-dasharray",
          values: `0, ${e.width * 0.2};${e.width * 0.2}, 0;`,
          dur: "3s",
          begin: `${t.animationId1}.end`,
          fill: "freeze"
        }, null, 8, Qu),
        c("animate", {
          attributeName: "stroke-dasharray",
          values: `${e.width * 0.2}, 0;0, ${e.width * 0.2}`,
          dur: "0.01s",
          begin: `${t.animationId7}.end`,
          fill: "freeze"
        }, null, 8, Yu)
      ], 8, Xu),
      c("polyline", {
        stroke: t.mergedColor[0],
        "stroke-width": "2",
        points: `${e.width * 0.2 + 3}, ${e.height / 2} ${e.width * 0.8 - 3}, ${e.height / 2}`,
        "stroke-dasharray": `0, ${e.width * 0.6}`
      }, [
        c("animate", {
          id: t.animationId4,
          attributeName: "stroke-dasharray",
          values: `0, ${e.width * 0.6};${e.width * 0.6}, 0`,
          dur: "3s",
          begin: `${t.animationId3}.end + 1s`,
          fill: "freeze"
        }, null, 8, Ju),
        c("animate", {
          attributeName: "stroke-dasharray",
          values: `${e.width * 0.6}, 0;0, ${e.width * 0.6}`,
          dur: "0.01s",
          begin: `${t.animationId7}.end`,
          fill: "freeze"
        }, null, 8, Zu)
      ], 8, Ku),
      c("polyline", {
        stroke: t.mergedColor[0],
        "stroke-width": "2",
        points: `${e.width * 0.8 + 3}, ${e.height / 2} ${e.width - 5}, ${e.height / 2}`,
        "stroke-dasharray": `0, ${e.width * 0.2}`
      }, [
        c("animate", {
          id: t.animationId6,
          attributeName: "stroke-dasharray",
          values: `0, ${e.width * 0.2};${e.width * 0.2}, 0`,
          dur: "3s",
          begin: `${t.animationId5}.end + 1s`,
          fill: "freeze"
        }, null, 8, td),
        c("animate", {
          attributeName: "stroke-dasharray",
          values: `${e.width * 0.2}, 0;0, ${e.width * 0.3}`,
          dur: "0.01s",
          begin: `${t.animationId7}.end`,
          fill: "freeze"
        }, null, 8, rd)
      ], 8, ed),
      c("circle", {
        cx: "2",
        cy: e.height / 2,
        r: "2",
        fill: t.mergedColor[1]
      }, [
        c("animate", {
          id: t.animationId1,
          attributeName: "fill",
          values: `${t.mergedColor[1]};${t.mergedColor[0]}`,
          begin: `0s;${t.animationId7}.end`,
          dur: "0.3s",
          fill: "freeze"
        }, null, 8, id)
      ], 8, nd),
      c("circle", {
        cx: e.width * 0.2,
        cy: e.height / 2,
        r: "2",
        fill: t.mergedColor[1]
      }, [
        c("animate", {
          id: t.animationId3,
          attributeName: "fill",
          values: `${t.mergedColor[1]};${t.mergedColor[0]}`,
          begin: `${t.animationId2}.end`,
          dur: "0.3s",
          fill: "freeze"
        }, null, 8, ad),
        c("animate", {
          attributeName: "fill",
          values: `${t.mergedColor[1]};${t.mergedColor[1]}`,
          dur: "0.01s",
          begin: `${t.animationId7}.end`,
          fill: "freeze"
        }, null, 8, sd)
      ], 8, od),
      c("circle", {
        cx: e.width * 0.8,
        cy: e.height / 2,
        r: "2",
        fill: t.mergedColor[1]
      }, [
        c("animate", {
          id: t.animationId5,
          attributeName: "fill",
          values: `${t.mergedColor[1]};${t.mergedColor[0]}`,
          begin: `${t.animationId4}.end`,
          dur: "0.3s",
          fill: "freeze"
        }, null, 8, ud),
        c("animate", {
          attributeName: "fill",
          values: `${t.mergedColor[1]};${t.mergedColor[1]}`,
          dur: "0.01s",
          begin: `${t.animationId7}.end`,
          fill: "freeze"
        }, null, 8, dd)
      ], 8, ld),
      c("circle", {
        cx: e.width - 2,
        cy: e.height / 2,
        r: "2",
        fill: t.mergedColor[1]
      }, [
        c("animate", {
          id: t.animationId7,
          attributeName: "fill",
          values: `${t.mergedColor[1]};${t.mergedColor[0]}`,
          begin: `${t.animationId6}.end`,
          dur: "0.3s",
          fill: "freeze"
        }, null, 8, cd),
        c("animate", {
          attributeName: "fill",
          values: `${t.mergedColor[1]};${t.mergedColor[1]}`,
          dur: "0.01s",
          begin: `${t.animationId7}.end`,
          fill: "freeze"
        }, null, 8, hd)
      ], 8, fd)
    ], 8, Vu))
  ], 512);
}
const Lt = /* @__PURE__ */ ye(Hu, [["render", gd]]), pd = Lt.name || `Dv${Lt.__file ? Lt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, vd = {
  install: (e) => {
    e.component(pd, Lt);
  }
}, md = {
  name: "DvDecoration11",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      ref: "decoration-11",
      defaultColor: ["#1a98fc", "#2cf7fe"],
      mergedColor: []
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  methods: {
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    },
    fade: qe
  },
  mounted() {
    const { mergeColor: e } = this;
    e();
  }
}, yd = ["width", "height"], bd = ["fill", "stroke"], Cd = ["fill", "stroke", "points"], wd = ["fill", "stroke", "points"], Pd = ["fill", "stroke", "points"], kd = ["fill", "stroke", "points"], $d = ["stroke", "points"], _d = ["stroke", "points"], xd = { class: "decoration-content" };
function Ad(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-11",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: e.width,
      height: e.height
    }, [
      c("polygon", {
        fill: a.fade(t.mergedColor[1] || t.defaultColor[1], 10),
        stroke: t.mergedColor[1],
        points: "20 10, 25 4, 55 4 60 10"
      }, null, 8, bd),
      c("polygon", {
        fill: a.fade(t.mergedColor[1] || t.defaultColor[1], 10),
        stroke: t.mergedColor[1],
        points: `20 ${e.height - 10}, 25 ${e.height - 4}, 55 ${e.height - 4} 60 ${e.height - 10}`
      }, null, 8, Cd),
      c("polygon", {
        fill: a.fade(t.mergedColor[1] || t.defaultColor[1], 10),
        stroke: t.mergedColor[1],
        points: `${e.width - 20} 10, ${e.width - 25} 4, ${e.width - 55} 4 ${e.width - 60} 10`
      }, null, 8, wd),
      c("polygon", {
        fill: a.fade(t.mergedColor[1] || t.defaultColor[1], 10),
        stroke: t.mergedColor[1],
        points: `${e.width - 20} ${e.height - 10}, ${e.width - 25} ${e.height - 4}, ${e.width - 55} ${e.height - 4} ${e.width - 60} ${e.height - 10}`
      }, null, 8, Pd),
      c("polygon", {
        fill: a.fade(t.mergedColor[0] || t.defaultColor[0], 20),
        stroke: t.mergedColor[0],
        points: `
          20 10, 5 ${e.height / 2} 20 ${e.height - 10}
          ${e.width - 20} ${e.height - 10} ${e.width - 5} ${e.height / 2} ${e.width - 20} 10
        `
      }, null, 8, kd),
      c("polyline", {
        fill: "transparent",
        stroke: a.fade(t.mergedColor[0] || t.defaultColor[0], 70),
        points: `25 18, 15 ${e.height / 2} 25 ${e.height - 18}`
      }, null, 8, $d),
      c("polyline", {
        fill: "transparent",
        stroke: a.fade(t.mergedColor[0] || t.defaultColor[0], 70),
        points: `${e.width - 25} 18, ${e.width - 15} ${e.height / 2} ${e.width - 25} ${e.height - 18}`
      }, null, 8, _d)
    ], 8, yd)),
    c("div", xd, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Ot = /* @__PURE__ */ ye(md, [["render", Ad]]), Sd = Ot.name || `Dv${Ot.__file ? Ot.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Ld = {
  install: (e) => {
    e.component(Sd, Ot);
  }
}, Od = {
  name: "DvDecoration12",
  mixins: [be],
  props: {
    color: {
      type: Array,
      default: () => []
    },
    /**
     * @description Scan animation dur
     */
    scanDur: {
      type: Number,
      default: 3
    },
    /**
     * @description Halo animation dur
     */
    haloDur: {
      type: Number,
      default: 2
    }
  },
  data() {
    const e = De();
    return {
      ref: "decoration-12",
      gId: `decoration-12-g-${e}`,
      gradientId: `decoration-12-gradient-${e}`,
      defaultColor: ["#2783ce", "#2cf7fe"],
      mergedColor: [],
      pathD: [],
      pathColor: [],
      circleR: [],
      splitLinePoints: [],
      arcD: [],
      segment: 30,
      sectorAngle: Math.PI / 3,
      ringNum: 3,
      ringWidth: 1,
      showSplitLine: !0
    };
  },
  watch: {
    color() {
      const { mergeColor: e } = this;
      e();
    }
  },
  computed: {
    x() {
      const { width: e } = this;
      return e / 2;
    },
    y() {
      const { height: e } = this;
      return e / 2;
    }
  },
  methods: {
    init() {
      const { mergeColor: e, calcPathD: r, calcPathColor: n, calcCircleR: i, calcSplitLinePoints: t, calcArcD: a } = this;
      e(), r(), n(), i(), t(), a();
    },
    mergeColor() {
      const { color: e, defaultColor: r } = this;
      this.mergedColor = ve.deepMerge(pe.deepClone(r, !0), e || []);
    },
    calcPathD() {
      const { x: e, y: r, width: n, segment: i, sectorAngle: t } = this, a = -Math.PI / 2, l = t / i, w = n / 4;
      let z = pe.getCircleRadianPoint(e, r, w, a);
      this.pathD = new Array(i).fill("").map((j, E) => {
        const X = pe.getCircleRadianPoint(e, r, w, a - (E + 1) * l).map((G) => G.toFixed(5)), q = `M${z.join(",")} A${w}, ${w} 0 0 0 ${X.join(",")}`;
        return z = X, q;
      });
    },
    calcPathColor() {
      const { mergedColor: [e], segment: r } = this, n = 100 / (r - 1);
      this.pathColor = new Array(r).fill(e).map((i, t) => qe(e, 100 - t * n));
    },
    calcCircleR() {
      const { segment: e, ringNum: r, width: n, ringWidth: i } = this, t = (n / 2 - i / 2) / r;
      this.circleR = new Array(r).fill(0).map((a, l) => t * (l + 1));
    },
    calcSplitLinePoints() {
      const { x: e, y: r, width: n } = this, i = Math.PI / 6, t = n / 2;
      this.splitLinePoints = new Array(6).fill("").map((a, l) => {
        const w = i * (l + 1), z = w + Math.PI, j = pe.getCircleRadianPoint(e, r, t, w), E = pe.getCircleRadianPoint(e, r, t, z);
        return `${j.join(",")} ${E.join(",")}`;
      });
    },
    calcArcD() {
      const { x: e, y: r, width: n } = this, i = Math.PI / 6, t = n / 2 - 1;
      this.arcD = new Array(4).fill("").map((a, l) => {
        const w = i * (3 * l + 1), z = w + i, j = pe.getCircleRadianPoint(e, r, t, w), E = pe.getCircleRadianPoint(e, r, t, z);
        return `M${j.join(",")} A${e}, ${r} 0 0 1 ${E.join(",")}`;
      });
    },
    afterAutoResizeMixinInit() {
      const { init: e } = this;
      e();
    },
    fade: qe
  }
}, Gd = ["width", "height"], Rd = ["id"], Md = ["stroke", "stroke-width", "d"], Dd = ["id"], Td = ["stop-color"], Wd = ["r", "cx", "cy", "stroke"], Fd = ["cx", "cy", "fill"], Bd = ["values", "dur"], Nd = ["dur"], jd = ["cx", "cy", "fill"], Ed = { key: 0 }, qd = ["points", "stroke"], zd = ["d", "stroke"], Id = ["xlink:href"], Hd = ["values", "dur"], Vd = { class: "decoration-content" };
function Ud(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-decoration-12",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: e.width,
      height: e.height
    }, [
      c("defs", null, [
        c("g", { id: t.gId }, [
          (ne(!0), re(we, null, ke(t.pathD, (l, w) => (ne(), re("path", {
            stroke: t.pathColor[w],
            "stroke-width": e.width / 2,
            fill: "transparent",
            key: l,
            d: l
          }, null, 8, Md))), 128))
        ], 8, Rd),
        c("radialGradient", {
          id: t.gradientId,
          cx: "50%",
          cy: "50%",
          r: "50%"
        }, [
          r[0] || (r[0] = c("stop", {
            offset: "0%",
            "stop-color": "transparent",
            "stop-opacity": "1"
          }, null, -1)),
          c("stop", {
            offset: "100%",
            "stop-color": a.fade(t.mergedColor[1] || t.defaultColor[1], 30),
            "stop-opacity": "1"
          }, null, 8, Td)
        ], 8, Dd)
      ]),
      (ne(!0), re(we, null, ke(t.circleR, (l) => (ne(), re("circle", {
        key: l,
        r: l,
        cx: a.x,
        cy: a.y,
        stroke: t.mergedColor[1],
        "stroke-width": 0.5,
        fill: "transparent"
      }, null, 8, Wd))), 128)),
      c("circle", {
        r: "1",
        cx: a.x,
        cy: a.y,
        stroke: "transparent",
        fill: `url(#${t.gradientId})`
      }, [
        c("animate", {
          attributeName: "r",
          values: `1;${e.width / 2}`,
          dur: `${n.haloDur}s`,
          repeatCount: "indefinite"
        }, null, 8, Bd),
        c("animate", {
          attributeName: "opacity",
          values: "1;0",
          dur: `${n.haloDur}s`,
          repeatCount: "indefinite"
        }, null, 8, Nd)
      ], 8, Fd),
      c("circle", {
        r: "2",
        cx: a.x,
        cy: a.y,
        fill: t.mergedColor[1]
      }, null, 8, jd),
      t.showSplitLine ? (ne(), re("g", Ed, [
        (ne(!0), re(we, null, ke(t.splitLinePoints, (l) => (ne(), re("polyline", {
          key: l,
          points: l,
          stroke: t.mergedColor[1],
          "stroke-width": 0.5,
          opacity: "0.5"
        }, null, 8, qd))), 128))
      ])) : Ce("", !0),
      (ne(!0), re(we, null, ke(t.arcD, (l) => (ne(), re("path", {
        key: l,
        d: l,
        stroke: t.mergedColor[1],
        "stroke-width": "2",
        fill: "transparent"
      }, null, 8, zd))), 128)),
      c("use", {
        "xlink:href": `#${t.gId}`
      }, [
        c("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          values: `0, ${a.x} ${a.y};360, ${a.x} ${a.y}`,
          dur: `${n.scanDur}s`,
          repeatCount: "indefinite"
        }, null, 8, Hd)
      ], 8, Id)
    ], 8, Gd)),
    c("div", Vd, [
      xe(e.$slots, "default")
    ])
  ], 512);
}
const Gt = /* @__PURE__ */ ye(Od, [["render", Ud]]), Xd = Gt.name || `Dv${Gt.__file ? Gt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Qd = {
  install: (e) => {
    e.component(Xd, Gt);
  }
};
var er = {}, tr = {}, rr = { exports: {} }, tn;
function it() {
  return tn || (tn = 1, function(e) {
    function r(n, i) {
      if (!(n instanceof i)) throw new TypeError("Cannot call a class as a function");
    }
    e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(rr)), rr.exports;
}
var rn = {}, nr = { exports: {} }, ir = { exports: {} }, or = { exports: {} }, nn;
function Yd() {
  return nn || (nn = 1, function(e) {
    var r = Le().default;
    function n(i, t) {
      if (r(i) != "object" || !i) return i;
      var a = i[Symbol.toPrimitive];
      if (a !== void 0) {
        var l = a.call(i, t || "default");
        if (r(l) != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(i);
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(or)), or.exports;
}
var on;
function Kd() {
  return on || (on = 1, function(e) {
    var r = Le().default, n = Yd();
    function i(t) {
      var a = n(t, "string");
      return r(a) == "symbol" ? a : a + "";
    }
    e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ir)), ir.exports;
}
var an;
function Te() {
  return an || (an = 1, function(e) {
    var r = Kd();
    function n(i, t, a) {
      return (t = r(t)) in i ? Object.defineProperty(i, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : i[t] = a, i;
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(nr)), nr.exports;
}
var ar = {}, sr = {};
const ot = /* @__PURE__ */ Li(ks);
var lr = {}, ur = {}, sn;
function Jd() {
  return sn || (sn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.bezierCurveToPolyline = T, e.getBezierCurveLength = B, e.default = void 0;
    var n = r(Oe()), i = r(Ae()), t = Math.sqrt, a = Math.pow, l = Math.ceil, w = Math.abs, z = 50;
    function j(I) {
      var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, K = I.length - 1, V = I[0], $ = I[K][2], x = I.slice(1), g = x.map(function(m, L) {
        var F = L === 0 ? V : x[L - 1][2];
        return E.apply(void 0, [F].concat((0, i.default)(m)));
      }), N = new Array(K).fill(z), A = f(g, N), u = D(A, g, x, Q);
      return u.segmentPoints.push($), u;
    }
    function E(I, Q, K, V) {
      return function($) {
        var x = 1 - $, g = a(x, 3), N = a(x, 2), A = a($, 3), u = a($, 2);
        return [I[0] * g + 3 * Q[0] * $ * N + 3 * K[0] * u * x + V[0] * A, I[1] * g + 3 * Q[1] * $ * N + 3 * K[1] * u * x + V[1] * A];
      };
    }
    function X(I, Q) {
      var K = (0, n.default)(I, 2), V = K[0], $ = K[1], x = (0, n.default)(Q, 2), g = x[0], N = x[1];
      return t(a(V - g, 2) + a($ - N, 2));
    }
    function q(I) {
      return I.reduce(function(Q, K) {
        return Q + K;
      }, 0);
    }
    function G(I) {
      return I.map(function(Q, K) {
        return new Array(Q.length - 1).fill(0).map(function(V, $) {
          return X(Q[$], Q[$ + 1]);
        });
      });
    }
    function f(I, Q) {
      return I.map(function(K, V) {
        var $ = 1 / Q[V];
        return new Array(Q[V]).fill("").map(function(x, g) {
          return K(g * $);
        });
      });
    }
    function M(I, Q) {
      return I.map(function(K) {
        return K.map(function(V) {
          return w(V - Q);
        });
      }).map(function(K) {
        return q(K);
      }).reduce(function(K, V) {
        return K + V;
      }, 0);
    }
    function D(I, Q, K, V) {
      var $ = 4, x = 1, g = function() {
        var u = I.reduce(function(ee, ie) {
          return ee + ie.length;
        }, 0);
        I.forEach(function(ee, ie) {
          return ee.push(K[ie][2]);
        });
        var m = G(I), L = m.reduce(function(ee, ie) {
          return ee + ie.length;
        }, 0), F = m.map(function(ee) {
          return q(ee);
        }), o = q(F), k = o / L, b = M(m, k);
        if (b <= V) return "break";
        u = l(k / V * u * 1.1);
        var O = F.map(function(ee) {
          return l(ee / o * u);
        });
        I = f(Q, O), u = I.reduce(function(ee, ie) {
          return ee + ie.length;
        }, 0);
        var W = JSON.parse(JSON.stringify(I));
        W.forEach(function(ee, ie) {
          return ee.push(K[ie][2]);
        }), m = G(W), L = m.reduce(function(ee, ie) {
          return ee + ie.length;
        }, 0), F = m.map(function(ee) {
          return q(ee);
        }), o = q(F), k = o / L;
        var te = 1 / u / 10;
        Q.forEach(function(ee, ie) {
          for (var se = O[ie], ce = new Array(se).fill("").map(function(v, y) {
            return y / O[ie];
          }), Y = 0; Y < $; Y++)
            for (var oe = G([I[ie]])[0], le = oe.map(function(v) {
              return v - k;
            }), de = 0, _ = 0; _ < se; _++) {
              if (_ === 0) return;
              de += le[_ - 1], ce[_] -= te * de, ce[_] > 1 && (ce[_] = 1), ce[_] < 0 && (ce[_] = 0), I[ie][_] = ee(ce[_]);
            }
        }), $ *= 4, x++;
      };
      do {
        var N = g();
        if (N === "break") break;
      } while ($ <= 1025);
      return I = I.reduce(function(A, u) {
        return A.concat(u);
      }, []), {
        segmentPoints: I,
        cycles: x,
        rounds: $
      };
    }
    function T(I) {
      var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
      if (!I)
        return console.error("bezierCurveToPolyline: Missing parameters!"), !1;
      if (!(I instanceof Array))
        return console.error("bezierCurveToPolyline: Parameter bezierCurve must be an array!"), !1;
      if (typeof Q != "number")
        return console.error("bezierCurveToPolyline: Parameter precision must be a number!"), !1;
      var K = j(I, Q), V = K.segmentPoints;
      return V;
    }
    function B(I) {
      var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
      if (!I)
        return console.error("getBezierCurveLength: Missing parameters!"), !1;
      if (!(I instanceof Array))
        return console.error("getBezierCurveLength: Parameter bezierCurve must be an array!"), !1;
      if (typeof Q != "number")
        return console.error("getBezierCurveLength: Parameter precision must be a number!"), !1;
      var K = j(I, Q), V = K.segmentPoints, $ = G([V])[0], x = q($);
      return x;
    }
    var U = T;
    e.default = U;
  }(ur)), ur;
}
var dr = {}, ln;
function Zd() {
  return ln || (ln = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = r(Oe()), i = r(Ae());
    function t(j) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0.25, q = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25;
      if (!(j instanceof Array))
        return console.error("polylineToBezierCurve: Parameter polyline must be an array!"), !1;
      if (j.length <= 2)
        return console.error("polylineToBezierCurve: Converting to a curve requires at least 3 points!"), !1;
      var G = j[0], f = j.length - 1, M = new Array(f).fill(0).map(function(D, T) {
        return [].concat((0, i.default)(a(j, T, E, X, q)), [j[T + 1]]);
      });
      return E && l(M, G), M.unshift(j[0]), M;
    }
    function a(j, E) {
      var X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, q = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.25, G = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0.25, f = j.length;
      if (!(f < 3 || E >= f)) {
        var M = E - 1;
        M < 0 && (M = X ? f + M : 0);
        var D = E + 1;
        D >= f && (D = X ? D - f : f - 1);
        var T = E + 2;
        T >= f && (T = X ? T - f : f - 1);
        var B = j[M], U = j[E], I = j[D], Q = j[T];
        return [[U[0] + q * (I[0] - B[0]), U[1] + q * (I[1] - B[1])], [I[0] - G * (Q[0] - U[0]), I[1] - G * (Q[1] - U[1])]];
      }
    }
    function l(j, E) {
      var X = j[0], q = j.slice(-1)[0];
      return j.push([w(q[1], q[2]), w(X[0], E), E]), j;
    }
    function w(j, E) {
      var X = (0, n.default)(j, 2), q = X[0], G = X[1], f = (0, n.default)(E, 2), M = f[0], D = f[1], T = M - q, B = D - G;
      return [M + T, D + B];
    }
    var z = t;
    e.default = z;
  }(dr)), dr;
}
var un;
function kr() {
  return un || (un = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "bezierCurveToPolyline", {
      enumerable: !0,
      get: function() {
        return n.bezierCurveToPolyline;
      }
    }), Object.defineProperty(e, "getBezierCurveLength", {
      enumerable: !0,
      get: function() {
        return n.getBezierCurveLength;
      }
    }), Object.defineProperty(e, "polylineToBezierCurve", {
      enumerable: !0,
      get: function() {
        return i.default;
      }
    }), e.default = void 0;
    var n = Jd(), i = r(Zd()), t = {
      bezierCurveToPolyline: n.bezierCurveToPolyline,
      getBezierCurveLength: n.getBezierCurveLength,
      polylineToBezierCurve: i.default
    };
    e.default = t;
  }(lr)), lr;
}
var fr = {}, cr = {}, dn;
function ef() {
  return dn || (dn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.drawPolylinePath = i, e.drawBezierCurvePath = t, e.default = void 0;
    var n = r(Ae());
    function i(l, w) {
      var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, j = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      if (!l || w.length < 2) return !1;
      z && l.beginPath(), w.forEach(function(E, X) {
        return E && (X === 0 ? l.moveTo.apply(l, (0, n.default)(E)) : l.lineTo.apply(l, (0, n.default)(E)));
      }), j && l.closePath();
    }
    function t(l, w) {
      var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, j = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, E = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
      if (!l || !w) return !1;
      j && l.beginPath(), z && l.moveTo.apply(l, (0, n.default)(z)), w.forEach(function(X) {
        return X && l.bezierCurveTo.apply(l, (0, n.default)(X[0]).concat((0, n.default)(X[1]), (0, n.default)(X[2])));
      }), E && l.closePath();
    }
    var a = {
      drawPolylinePath: i,
      drawBezierCurvePath: t
    };
    e.default = a;
  }(cr)), cr;
}
var fn;
function $r() {
  return fn || (fn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.extendNewGraph = K, e.default = e.text = e.bezierCurve = e.smoothline = e.polyline = e.regPolygon = e.sector = e.arc = e.ring = e.rect = e.ellipse = e.circle = void 0;
    var n = r(Ae()), i = r(Oe()), t = r(kr()), a = Se(), l = ef(), w = t.default.polylineToBezierCurve, z = t.default.bezierCurveToPolyline, j = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0
      },
      validator: function($) {
        var x = $.shape, g = x.rx, N = x.ry, A = x.r;
        return typeof g != "number" || typeof N != "number" || typeof A != "number" ? (console.error("Circle shape configuration is abnormal!"), !1) : !0;
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape;
        g.beginPath();
        var A = N.rx, u = N.ry, m = N.r;
        g.arc(A, u, m > 0 ? m : 0.01, 0, Math.PI * 2), g.fill(), g.stroke(), g.closePath();
      },
      hoverCheck: function($, x) {
        var g = x.shape, N = g.rx, A = g.ry, u = g.r;
        return (0, a.checkPointIsInCircle)($, N, A, u);
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.rx, u = g.ry;
        N.graphCenter = [A, u];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape;
        this.attr("shape", {
          rx: A.rx + g,
          ry: A.ry + N
        });
      }
    };
    e.circle = j;
    var E = {
      shape: {
        rx: 0,
        ry: 0,
        hr: 0,
        vr: 0
      },
      validator: function($) {
        var x = $.shape, g = x.rx, N = x.ry, A = x.hr, u = x.vr;
        return typeof g != "number" || typeof N != "number" || typeof A != "number" || typeof u != "number" ? (console.error("Ellipse shape configuration is abnormal!"), !1) : !0;
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape;
        g.beginPath();
        var A = N.rx, u = N.ry, m = N.hr, L = N.vr;
        g.ellipse(A, u, m > 0 ? m : 0.01, L > 0 ? L : 0.01, 0, 0, Math.PI * 2), g.fill(), g.stroke(), g.closePath();
      },
      hoverCheck: function($, x) {
        var g = x.shape, N = g.rx, A = g.ry, u = g.hr, m = g.vr, L = Math.max(u, m), F = Math.min(u, m), o = Math.sqrt(L * L - F * F), k = [N - o, A], b = [N + o, A], O = (0, a.getTwoPointDistance)($, k) + (0, a.getTwoPointDistance)($, b);
        return O <= 2 * L;
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.rx, u = g.ry;
        N.graphCenter = [A, u];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape;
        this.attr("shape", {
          rx: A.rx + g,
          ry: A.ry + N
        });
      }
    };
    e.ellipse = E;
    var X = {
      shape: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      validator: function($) {
        var x = $.shape, g = x.x, N = x.y, A = x.w, u = x.h;
        return typeof g != "number" || typeof N != "number" || typeof A != "number" || typeof u != "number" ? (console.error("Rect shape configuration is abnormal!"), !1) : !0;
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape;
        g.beginPath();
        var A = N.x, u = N.y, m = N.w, L = N.h;
        g.rect(A, u, m, L), g.fill(), g.stroke(), g.closePath();
      },
      hoverCheck: function($, x) {
        var g = x.shape, N = g.x, A = g.y, u = g.w, m = g.h;
        return (0, a.checkPointIsInRect)($, N, A, u, m);
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.x, u = g.y, m = g.w, L = g.h;
        N.graphCenter = [A + m / 2, u + L / 2];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape;
        this.attr("shape", {
          x: A.x + g,
          y: A.y + N
        });
      }
    };
    e.rect = X;
    var q = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0
      },
      validator: function($) {
        var x = $.shape, g = x.rx, N = x.ry, A = x.r;
        return typeof g != "number" || typeof N != "number" || typeof A != "number" ? (console.error("Ring shape configuration is abnormal!"), !1) : !0;
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape;
        g.beginPath();
        var A = N.rx, u = N.ry, m = N.r;
        g.arc(A, u, m > 0 ? m : 0.01, 0, Math.PI * 2), g.stroke(), g.closePath();
      },
      hoverCheck: function($, x) {
        var g = x.shape, N = x.style, A = g.rx, u = g.ry, m = g.r, L = N.lineWidth, F = L / 2, o = m - F, k = m + F, b = (0, a.getTwoPointDistance)($, [A, u]);
        return b >= o && b <= k;
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.rx, u = g.ry;
        N.graphCenter = [A, u];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape;
        this.attr("shape", {
          rx: A.rx + g,
          ry: A.ry + N
        });
      }
    };
    e.ring = q;
    var G = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0,
        startAngle: 0,
        endAngle: 0,
        clockWise: !0
      },
      validator: function($) {
        var x = $.shape, g = ["rx", "ry", "r", "startAngle", "endAngle"];
        return g.find(function(N) {
          return typeof x[N] != "number";
        }) ? (console.error("Arc shape configuration is abnormal!"), !1) : !0;
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape;
        g.beginPath();
        var A = N.rx, u = N.ry, m = N.r, L = N.startAngle, F = N.endAngle, o = N.clockWise;
        g.arc(A, u, m > 0 ? m : 1e-3, L, F, !o), g.stroke(), g.closePath();
      },
      hoverCheck: function($, x) {
        var g = x.shape, N = x.style, A = g.rx, u = g.ry, m = g.r, L = g.startAngle, F = g.endAngle, o = g.clockWise, k = N.lineWidth, b = k / 2, O = m - b, W = m + b;
        return !(0, a.checkPointIsInSector)($, A, u, O, L, F, o) && (0, a.checkPointIsInSector)($, A, u, W, L, F, o);
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.rx, u = g.ry;
        N.graphCenter = [A, u];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape;
        this.attr("shape", {
          rx: A.rx + g,
          ry: A.ry + N
        });
      }
    };
    e.arc = G;
    var f = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0,
        startAngle: 0,
        endAngle: 0,
        clockWise: !0
      },
      validator: function($) {
        var x = $.shape, g = ["rx", "ry", "r", "startAngle", "endAngle"];
        return g.find(function(N) {
          return typeof x[N] != "number";
        }) ? (console.error("Sector shape configuration is abnormal!"), !1) : !0;
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape;
        g.beginPath();
        var A = N.rx, u = N.ry, m = N.r, L = N.startAngle, F = N.endAngle, o = N.clockWise;
        g.arc(A, u, m > 0 ? m : 0.01, L, F, !o), g.lineTo(A, u), g.closePath(), g.stroke(), g.fill();
      },
      hoverCheck: function($, x) {
        var g = x.shape, N = g.rx, A = g.ry, u = g.r, m = g.startAngle, L = g.endAngle, F = g.clockWise;
        return (0, a.checkPointIsInSector)($, N, A, u, m, L, F);
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.rx, u = g.ry;
        N.graphCenter = [A, u];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape, u = A.rx, m = A.ry;
        this.attr("shape", {
          rx: u + g,
          ry: m + N
        });
      }
    };
    e.sector = f;
    var M = {
      shape: {
        rx: 0,
        ry: 0,
        r: 0,
        side: 0
      },
      validator: function($) {
        var x = $.shape, g = x.side, N = ["rx", "ry", "r", "side"];
        return N.find(function(A) {
          return typeof x[A] != "number";
        }) ? (console.error("RegPolygon shape configuration is abnormal!"), !1) : g < 3 ? (console.error("RegPolygon at least trigon!"), !1) : !0;
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape, A = x.cache;
        g.beginPath();
        var u = N.rx, m = N.ry, L = N.r, F = N.side;
        if (!A.points || A.rx !== u || A.ry !== m || A.r !== L || A.side !== F) {
          var o = (0, a.getRegularPolygonPoints)(u, m, L, F);
          Object.assign(A, {
            points: o,
            rx: u,
            ry: m,
            r: L,
            side: F
          });
        }
        var k = A.points;
        (0, l.drawPolylinePath)(g, k), g.closePath(), g.stroke(), g.fill();
      },
      hoverCheck: function($, x) {
        var g = x.cache, N = g.points;
        return (0, a.checkPointIsInPolygon)($, N);
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.rx, u = g.ry;
        N.graphCenter = [A, u];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape, u = x.cache, m = A.rx, L = A.ry;
        u.rx += g, u.ry += N, this.attr("shape", {
          rx: m + g,
          ry: L + N
        }), u.points = u.points.map(function(F) {
          var o = (0, i.default)(F, 2), k = o[0], b = o[1];
          return [k + g, b + N];
        });
      }
    };
    e.regPolygon = M;
    var D = {
      shape: {
        points: [],
        close: !1
      },
      validator: function($) {
        var x = $.shape, g = x.points;
        return g instanceof Array ? !0 : (console.error("Polyline points should be an array!"), !1);
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape, A = x.style.lineWidth;
        g.beginPath();
        var u = N.points, m = N.close;
        A === 1 && (u = (0, a.eliminateBlur)(u)), (0, l.drawPolylinePath)(g, u), m && (g.closePath(), g.fill()), g.stroke();
      },
      hoverCheck: function($, x) {
        var g = x.shape, N = x.style, A = g.points, u = g.close, m = N.lineWidth;
        return u ? (0, a.checkPointIsInPolygon)($, A) : (0, a.checkPointIsNearPolyline)($, A, m);
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.points;
        N.graphCenter = A[0];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape, u = A.points, m = u.map(function(L) {
          var F = (0, i.default)(L, 2), o = F[0], k = F[1];
          return [o + g, k + N];
        });
        this.attr("shape", {
          points: m
        });
      }
    };
    e.polyline = D;
    var T = {
      shape: {
        points: [],
        close: !1
      },
      validator: function($) {
        var x = $.shape, g = x.points;
        return g instanceof Array ? !0 : (console.error("Smoothline points should be an array!"), !1);
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape, A = x.cache, u = N.points, m = N.close;
        if (!A.points || A.points.toString() !== u.toString()) {
          var L = w(u, m), F = z(L);
          Object.assign(A, {
            points: (0, a.deepClone)(u, !0),
            bezierCurve: L,
            hoverPoints: F
          });
        }
        var o = A.bezierCurve;
        g.beginPath(), (0, l.drawBezierCurvePath)(g, o.slice(1), o[0]), m && (g.closePath(), g.fill()), g.stroke();
      },
      hoverCheck: function($, x) {
        var g = x.cache, N = x.shape, A = x.style, u = g.hoverPoints, m = N.close, L = A.lineWidth;
        return m ? (0, a.checkPointIsInPolygon)($, u) : (0, a.checkPointIsNearPolyline)($, u, L);
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.points;
        N.graphCenter = A[0];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape, u = x.cache, m = A.points, L = m.map(function(O) {
          var W = (0, i.default)(O, 2), te = W[0], ee = W[1];
          return [te + g, ee + N];
        });
        u.points = L;
        var F = (0, i.default)(u.bezierCurve[0], 2), o = F[0], k = F[1], b = u.bezierCurve.slice(1);
        u.bezierCurve = [[o + g, k + N]].concat((0, n.default)(b.map(function(O) {
          return O.map(function(W) {
            var te = (0, i.default)(W, 2), ee = te[0], ie = te[1];
            return [ee + g, ie + N];
          });
        }))), u.hoverPoints = u.hoverPoints.map(function(O) {
          var W = (0, i.default)(O, 2), te = W[0], ee = W[1];
          return [te + g, ee + N];
        }), this.attr("shape", {
          points: L
        });
      }
    };
    e.smoothline = T;
    var B = {
      shape: {
        points: [],
        close: !1
      },
      validator: function($) {
        var x = $.shape, g = x.points;
        return g instanceof Array ? !0 : (console.error("BezierCurve points should be an array!"), !1);
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape, A = x.cache, u = N.points, m = N.close;
        if (!A.points || A.points.toString() !== u.toString()) {
          var L = z(u, 20);
          Object.assign(A, {
            points: (0, a.deepClone)(u, !0),
            hoverPoints: L
          });
        }
        g.beginPath(), (0, l.drawBezierCurvePath)(g, u.slice(1), u[0]), m && (g.closePath(), g.fill()), g.stroke();
      },
      hoverCheck: function($, x) {
        var g = x.cache, N = x.shape, A = x.style, u = g.hoverPoints, m = N.close, L = A.lineWidth;
        return m ? (0, a.checkPointIsInPolygon)($, u) : (0, a.checkPointIsNearPolyline)($, u, L);
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.points;
        N.graphCenter = A[0];
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape, u = x.cache, m = A.points, L = (0, i.default)(m[0], 2), F = L[0], o = L[1], k = m.slice(1), b = [[F + g, o + N]].concat((0, n.default)(k.map(function(O) {
          return O.map(function(W) {
            var te = (0, i.default)(W, 2), ee = te[0], ie = te[1];
            return [ee + g, ie + N];
          });
        })));
        u.points = b, u.hoverPoints = u.hoverPoints.map(function(O) {
          var W = (0, i.default)(O, 2), te = W[0], ee = W[1];
          return [te + g, ee + N];
        }), this.attr("shape", {
          points: b
        });
      }
    };
    e.bezierCurve = B;
    var U = {
      shape: {
        content: "",
        position: [],
        maxWidth: void 0,
        rowGap: 0
      },
      validator: function($) {
        var x = $.shape, g = x.content, N = x.position, A = x.rowGap;
        return typeof g != "string" ? (console.error("Text content should be a string!"), !1) : N instanceof Array ? typeof A != "number" ? (console.error("Text rowGap should be a number!"), !1) : !0 : (console.error("Text position should be an array!"), !1);
      },
      draw: function($, x) {
        var g = $.ctx, N = x.shape, A = N.content, u = N.position, m = N.maxWidth, L = N.rowGap, F = g.textBaseline, o = g.font, k = parseInt(o.replace(/\D/g, "")), b = u, O = (0, i.default)(b, 2), W = O[0], te = O[1];
        A = A.split(`
`);
        var ee = A.length, ie = k + L, se = ee * ie - L, ce = 0;
        F === "middle" && (ce = se / 2, te += k / 2), F === "bottom" && (ce = se, te += k), u = new Array(ee).fill(0).map(function(Y, oe) {
          return [W, te + oe * ie - ce];
        }), g.beginPath(), A.forEach(function(Y, oe) {
          g.fillText.apply(g, [Y].concat((0, n.default)(u[oe]), [m])), g.strokeText.apply(g, [Y].concat((0, n.default)(u[oe]), [m]));
        }), g.closePath();
      },
      hoverCheck: function($, x) {
        return x.shape, x.style, !1;
      },
      setGraphCenter: function($, x) {
        var g = x.shape, N = x.style, A = g.position;
        N.graphCenter = (0, n.default)(A);
      },
      move: function($, x) {
        var g = $.movementX, N = $.movementY, A = x.shape, u = (0, i.default)(A.position, 2), m = u[0], L = u[1];
        this.attr("shape", {
          position: [m + g, L + N]
        });
      }
    };
    e.text = U;
    var I = /* @__PURE__ */ new Map([["circle", j], ["ellipse", E], ["rect", X], ["ring", q], ["arc", G], ["sector", f], ["regPolygon", M], ["polyline", D], ["smoothline", T], ["bezierCurve", B], ["text", U]]), Q = I;
    e.default = Q;
    function K(V, $) {
      if (!V || !$) {
        console.error("ExtendNewGraph Missing Parameters!");
        return;
      }
      if (!$.shape) {
        console.error("Required attribute of shape to extendNewGraph!");
        return;
      }
      if (!$.validator) {
        console.error("Required function of validator to extendNewGraph!");
        return;
      }
      if (!$.draw) {
        console.error("Required function of draw to extendNewGraph!");
        return;
      }
      I.set(V, $);
    }
  }(fr)), fr;
}
var hr = {}, gr = { exports: {} }, cn;
function tf() {
  return cn || (cn = 1, function(e) {
    var r = Le().default;
    function n() {
      e.exports = n = function() {
        return t;
      }, e.exports.__esModule = !0, e.exports.default = e.exports;
      var i, t = {}, a = Object.prototype, l = a.hasOwnProperty, w = typeof Symbol == "function" ? Symbol : {}, z = w.iterator || "@@iterator", j = w.asyncIterator || "@@asyncIterator", E = w.toStringTag || "@@toStringTag";
      function X(u, m, L, F) {
        Object.defineProperty(u, m, {
          value: L,
          enumerable: !F,
          configurable: !F,
          writable: !F
        });
      }
      try {
        X({}, "");
      } catch {
        X = function(L, F, o) {
          return L[F] = o;
        };
      }
      function q(u, m, L, F) {
        var o = m && m.prototype instanceof M ? m : M, k = Object.create(o.prototype);
        return X(k, "_invoke", /* @__PURE__ */ function(b, O, W) {
          var te = 1;
          return function(ee, ie) {
            if (te === 3) throw Error("Generator is already running");
            if (te === 4) {
              if (ee === "throw") throw ie;
              return {
                value: i,
                done: !0
              };
            }
            for (W.method = ee, W.arg = ie; ; ) {
              var se = W.delegate;
              if (se) {
                var ce = $(se, W);
                if (ce) {
                  if (ce === f) continue;
                  return ce;
                }
              }
              if (W.method === "next") W.sent = W._sent = W.arg;
              else if (W.method === "throw") {
                if (te === 1) throw te = 4, W.arg;
                W.dispatchException(W.arg);
              } else W.method === "return" && W.abrupt("return", W.arg);
              te = 3;
              var Y = G(b, O, W);
              if (Y.type === "normal") {
                if (te = W.done ? 4 : 2, Y.arg === f) continue;
                return {
                  value: Y.arg,
                  done: W.done
                };
              }
              Y.type === "throw" && (te = 4, W.method = "throw", W.arg = Y.arg);
            }
          };
        }(u, L, new N(F || [])), !0), k;
      }
      function G(u, m, L) {
        try {
          return {
            type: "normal",
            arg: u.call(m, L)
          };
        } catch (F) {
          return {
            type: "throw",
            arg: F
          };
        }
      }
      t.wrap = q;
      var f = {};
      function M() {
      }
      function D() {
      }
      function T() {
      }
      var B = {};
      X(B, z, function() {
        return this;
      });
      var U = Object.getPrototypeOf, I = U && U(U(A([])));
      I && I !== a && l.call(I, z) && (B = I);
      var Q = T.prototype = M.prototype = Object.create(B);
      function K(u) {
        ["next", "throw", "return"].forEach(function(m) {
          X(u, m, function(L) {
            return this._invoke(m, L);
          });
        });
      }
      function V(u, m) {
        function L(o, k, b, O) {
          var W = G(u[o], u, k);
          if (W.type !== "throw") {
            var te = W.arg, ee = te.value;
            return ee && r(ee) == "object" && l.call(ee, "__await") ? m.resolve(ee.__await).then(function(ie) {
              L("next", ie, b, O);
            }, function(ie) {
              L("throw", ie, b, O);
            }) : m.resolve(ee).then(function(ie) {
              te.value = ie, b(te);
            }, function(ie) {
              return L("throw", ie, b, O);
            });
          }
          O(W.arg);
        }
        var F;
        X(this, "_invoke", function(o, k) {
          function b() {
            return new m(function(O, W) {
              L(o, k, O, W);
            });
          }
          return F = F ? F.then(b, b) : b();
        }, !0);
      }
      function $(u, m) {
        var L = m.method, F = u.i[L];
        if (F === i) return m.delegate = null, L === "throw" && u.i.return && (m.method = "return", m.arg = i, $(u, m), m.method === "throw") || L !== "return" && (m.method = "throw", m.arg = new TypeError("The iterator does not provide a '" + L + "' method")), f;
        var o = G(F, u.i, m.arg);
        if (o.type === "throw") return m.method = "throw", m.arg = o.arg, m.delegate = null, f;
        var k = o.arg;
        return k ? k.done ? (m[u.r] = k.value, m.next = u.n, m.method !== "return" && (m.method = "next", m.arg = i), m.delegate = null, f) : k : (m.method = "throw", m.arg = new TypeError("iterator result is not an object"), m.delegate = null, f);
      }
      function x(u) {
        this.tryEntries.push(u);
      }
      function g(u) {
        var m = u[4] || {};
        m.type = "normal", m.arg = i, u[4] = m;
      }
      function N(u) {
        this.tryEntries = [[-1]], u.forEach(x, this), this.reset(!0);
      }
      function A(u) {
        if (u != null) {
          var m = u[z];
          if (m) return m.call(u);
          if (typeof u.next == "function") return u;
          if (!isNaN(u.length)) {
            var L = -1, F = function o() {
              for (; ++L < u.length; ) if (l.call(u, L)) return o.value = u[L], o.done = !1, o;
              return o.value = i, o.done = !0, o;
            };
            return F.next = F;
          }
        }
        throw new TypeError(r(u) + " is not iterable");
      }
      return D.prototype = T, X(Q, "constructor", T), X(T, "constructor", D), X(T, E, D.displayName = "GeneratorFunction"), t.isGeneratorFunction = function(u) {
        var m = typeof u == "function" && u.constructor;
        return !!m && (m === D || (m.displayName || m.name) === "GeneratorFunction");
      }, t.mark = function(u) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(u, T) : (u.__proto__ = T, X(u, E, "GeneratorFunction")), u.prototype = Object.create(Q), u;
      }, t.awrap = function(u) {
        return {
          __await: u
        };
      }, K(V.prototype), X(V.prototype, j, function() {
        return this;
      }), t.AsyncIterator = V, t.async = function(u, m, L, F, o) {
        o === void 0 && (o = Promise);
        var k = new V(q(u, m, L, F), o);
        return t.isGeneratorFunction(m) ? k : k.next().then(function(b) {
          return b.done ? b.value : k.next();
        });
      }, K(Q), X(Q, E, "Generator"), X(Q, z, function() {
        return this;
      }), X(Q, "toString", function() {
        return "[object Generator]";
      }), t.keys = function(u) {
        var m = Object(u), L = [];
        for (var F in m) L.unshift(F);
        return function o() {
          for (; L.length; ) if ((F = L.pop()) in m) return o.value = F, o.done = !1, o;
          return o.done = !0, o;
        };
      }, t.values = A, N.prototype = {
        constructor: N,
        reset: function(m) {
          if (this.prev = this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(g), !m) for (var L in this) L.charAt(0) === "t" && l.call(this, L) && !isNaN(+L.slice(1)) && (this[L] = i);
        },
        stop: function() {
          this.done = !0;
          var m = this.tryEntries[0][4];
          if (m.type === "throw") throw m.arg;
          return this.rval;
        },
        dispatchException: function(m) {
          if (this.done) throw m;
          var L = this;
          function F(ee) {
            b.type = "throw", b.arg = m, L.next = ee;
          }
          for (var o = L.tryEntries.length - 1; o >= 0; --o) {
            var k = this.tryEntries[o], b = k[4], O = this.prev, W = k[1], te = k[2];
            if (k[0] === -1) return F("end"), !1;
            if (!W && !te) throw Error("try statement without catch or finally");
            if (k[0] != null && k[0] <= O) {
              if (O < W) return this.method = "next", this.arg = i, F(W), !0;
              if (O < te) return F(te), !1;
            }
          }
        },
        abrupt: function(m, L) {
          for (var F = this.tryEntries.length - 1; F >= 0; --F) {
            var o = this.tryEntries[F];
            if (o[0] > -1 && o[0] <= this.prev && this.prev < o[2]) {
              var k = o;
              break;
            }
          }
          k && (m === "break" || m === "continue") && k[0] <= L && L <= k[2] && (k = null);
          var b = k ? k[4] : {};
          return b.type = m, b.arg = L, k ? (this.method = "next", this.next = k[2], f) : this.complete(b);
        },
        complete: function(m, L) {
          if (m.type === "throw") throw m.arg;
          return m.type === "break" || m.type === "continue" ? this.next = m.arg : m.type === "return" ? (this.rval = this.arg = m.arg, this.method = "return", this.next = "end") : m.type === "normal" && L && (this.next = L), f;
        },
        finish: function(m) {
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var F = this.tryEntries[L];
            if (F[2] === m) return this.complete(F[4], F[3]), g(F), f;
          }
        },
        catch: function(m) {
          for (var L = this.tryEntries.length - 1; L >= 0; --L) {
            var F = this.tryEntries[L];
            if (F[0] === m) {
              var o = F[4];
              if (o.type === "throw") {
                var k = o.arg;
                g(F);
              }
              return k;
            }
          }
          throw Error("illegal catch attempt");
        },
        delegateYield: function(m, L, F) {
          return this.delegate = {
            i: A(m),
            r: L,
            n: F
          }, this.method === "next" && (this.arg = i), f;
        }
      }, t;
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(gr)), gr.exports;
}
var pr, hn;
function rf() {
  if (hn) return pr;
  hn = 1;
  var e = tf()();
  pr = e;
  try {
    regeneratorRuntime = e;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e);
  }
  return pr;
}
var vr = { exports: {} }, gn;
function nf() {
  return gn || (gn = 1, function(e) {
    function r(i, t, a, l, w, z, j) {
      try {
        var E = i[z](j), X = E.value;
      } catch (q) {
        return void a(q);
      }
      E.done ? t(X) : Promise.resolve(X).then(l, w);
    }
    function n(i) {
      return function() {
        var t = this, a = arguments;
        return new Promise(function(l, w) {
          var z = i.apply(t, a);
          function j(X) {
            r(z, l, w, j, E, "next", X);
          }
          function E(X) {
            r(z, l, w, j, E, "throw", X);
          }
          j(void 0);
        });
      };
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(vr)), vr.exports;
}
var mr = {}, pn;
function of() {
  return pn || (pn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = r(Ae()), i = r(it()), t = ot, a = Se(), l = function G(f) {
      (0, i.default)(this, G), this.colorProcessor(f);
      var M = {
        /**
         * @description Rgba value of graph fill color
         * @type {Array}
         * @default fill = [0, 0, 0, 1]
         */
        fill: [0, 0, 0, 1],
        /**
         * @description Rgba value of graph stroke color
         * @type {Array}
         * @default stroke = [0, 0, 0, 1]
         */
        stroke: [0, 0, 0, 0],
        /**
         * @description Opacity of graph
         * @type {Number}
         * @default opacity = 1
         */
        opacity: 1,
        /**
         * @description LineCap of Ctx
         * @type {String}
         * @default lineCap = null
         * @example lineCap = 'butt'|'round'|'square'
         */
        lineCap: null,
        /**
         * @description Linejoin of Ctx
         * @type {String}
         * @default lineJoin = null
         * @example lineJoin = 'round'|'bevel'|'miter'
         */
        lineJoin: null,
        /**
         * @description LineDash of Ctx
         * @type {Array}
         * @default lineDash = null
         * @example lineDash = [10, 10]
         */
        lineDash: null,
        /**
         * @description LineDashOffset of Ctx
         * @type {Number}
         * @default lineDashOffset = null
         * @example lineDashOffset = 10
         */
        lineDashOffset: null,
        /**
         * @description ShadowBlur of Ctx
         * @type {Number}
         * @default shadowBlur = 0
         */
        shadowBlur: 0,
        /**
         * @description Rgba value of graph shadow color
         * @type {Array}
         * @default shadowColor = [0, 0, 0, 0]
         */
        shadowColor: [0, 0, 0, 0],
        /**
         * @description ShadowOffsetX of Ctx
         * @type {Number}
         * @default shadowOffsetX = 0
         */
        shadowOffsetX: 0,
        /**
         * @description ShadowOffsetY of Ctx
         * @type {Number}
         * @default shadowOffsetY = 0
         */
        shadowOffsetY: 0,
        /**
         * @description LineWidth of Ctx
         * @type {Number}
         * @default lineWidth = 0
         */
        lineWidth: 0,
        /**
         * @description Center point of the graph
         * @type {Array}
         * @default graphCenter = null
         * @example graphCenter = [10, 10]
         */
        graphCenter: null,
        /**
         * @description Graph scale
         * @type {Array}
         * @default scale = null
         * @example scale = [1.5, 1.5]
         */
        scale: null,
        /**
         * @description Graph rotation degree
         * @type {Number}
         * @default rotate = null
         * @example rotate = 10
         */
        rotate: null,
        /**
         * @description Graph translate distance
         * @type {Array}
         * @default translate = null
         * @example translate = [10, 10]
         */
        translate: null,
        /**
         * @description Cursor status when hover
         * @type {String}
         * @default hoverCursor = 'pointer'
         * @example hoverCursor = 'default'|'pointer'|'auto'|'crosshair'|'move'|'wait'|...
         */
        hoverCursor: "pointer",
        /**
         * @description Font style of Ctx
         * @type {String}
         * @default fontStyle = 'normal'
         * @example fontStyle = 'normal'|'italic'|'oblique'
         */
        fontStyle: "normal",
        /**
         * @description Font varient of Ctx
         * @type {String}
         * @default fontVarient = 'normal'
         * @example fontVarient = 'normal'|'small-caps'
         */
        fontVarient: "normal",
        /**
         * @description Font weight of Ctx
         * @type {String|Number}
         * @default fontWeight = 'normal'
         * @example fontWeight = 'normal'|'bold'|'bolder'|'lighter'|Number
         */
        fontWeight: "normal",
        /**
         * @description Font size of Ctx
         * @type {Number}
         * @default fontSize = 10
         */
        fontSize: 10,
        /**
         * @description Font family of Ctx
         * @type {String}
         * @default fontFamily = 'Arial'
         */
        fontFamily: "Arial",
        /**
         * @description TextAlign of Ctx
         * @type {String}
         * @default textAlign = 'center'
         * @example textAlign = 'start'|'end'|'left'|'right'|'center'
         */
        textAlign: "center",
        /**
         * @description TextBaseline of Ctx
         * @type {String}
         * @default textBaseline = 'middle'
         * @example textBaseline = 'top'|'bottom'|'middle'|'alphabetic'|'hanging'
         */
        textBaseline: "middle",
        /**
         * @description The color used to create the gradient
         * @type {Array}
         * @default gradientColor = null
         * @example gradientColor = ['#000', '#111', '#222']
         */
        gradientColor: null,
        /**
         * @description Gradient type
         * @type {String}
         * @default gradientType = 'linear'
         * @example gradientType = 'linear' | 'radial'
         */
        gradientType: "linear",
        /**
         * @description Gradient params
         * @type {Array}
         * @default gradientParams = null
         * @example gradientParams = [x0, y0, x1, y1] (Linear Gradient)
         * @example gradientParams = [x0, y0, r0, x1, y1, r1] (Radial Gradient)
         */
        gradientParams: null,
        /**
         * @description When to use gradients
         * @type {String}
         * @default gradientWith = 'stroke'
         * @example gradientWith = 'stroke' | 'fill'
         */
        gradientWith: "stroke",
        /**
         * @description Gradient color stops
         * @type {String}
         * @default gradientStops = 'auto'
         * @example gradientStops = 'auto' | [0, .2, .3, 1]
         */
        gradientStops: "auto",
        /**
         * @description Extended color that supports animation transition
         * @type {Array|Object}
         * @default colors = null
         * @example colors = ['#000', '#111', '#222', 'red' ]
         * @example colors = { a: '#000', b: '#111' }
         */
        colors: null
      };
      Object.assign(this, M, f);
    };
    e.default = l, l.prototype.colorProcessor = function(G) {
      var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, M = f ? t.getColorFromRgbValue : t.getRgbaValue, D = ["fill", "stroke", "shadowColor"], T = Object.keys(G), B = T.filter(function(K) {
        return D.find(function(V) {
          return V === K;
        });
      });
      B.forEach(function(K) {
        return G[K] = M(G[K]);
      });
      var U = G.gradientColor, I = G.colors;
      if (U && (G.gradientColor = U.map(function(K) {
        return M(K);
      })), I) {
        var Q = Object.keys(I);
        Q.forEach(function(K) {
          return I[K] = M(I[K]);
        });
      }
    }, l.prototype.initStyle = function(G) {
      w(G, this), j(G, this), E(G, this);
    };
    function w(G, f) {
      G.save();
      var M = f.graphCenter, D = f.rotate, T = f.scale, B = f.translate;
      M instanceof Array && (G.translate.apply(G, (0, n.default)(M)), D && G.rotate(D * Math.PI / 180), T instanceof Array && G.scale.apply(G, (0, n.default)(T)), B && G.translate.apply(G, (0, n.default)(B)), G.translate(-M[0], -M[1]));
    }
    var z = ["lineCap", "lineJoin", "lineDashOffset", "shadowOffsetX", "shadowOffsetY", "lineWidth", "textAlign", "textBaseline"];
    function j(G, f) {
      var M = f.fill, D = f.stroke, T = f.shadowColor, B = f.opacity;
      z.forEach(function(g) {
        (g || typeof g == "number") && (G[g] = f[g]);
      }), M = (0, n.default)(M), D = (0, n.default)(D), T = (0, n.default)(T), M[3] *= B, D[3] *= B, T[3] *= B, G.fillStyle = (0, t.getColorFromRgbValue)(M), G.strokeStyle = (0, t.getColorFromRgbValue)(D), G.shadowColor = (0, t.getColorFromRgbValue)(T);
      var U = f.lineDash, I = f.shadowBlur;
      U && (U = U.map(function(g) {
        return g >= 0 ? g : 0;
      }), G.setLineDash(U)), typeof I == "number" && (G.shadowBlur = I > 0 ? I : 1e-3);
      var Q = f.fontStyle, K = f.fontVarient, V = f.fontWeight, $ = f.fontSize, x = f.fontFamily;
      G.font = Q + " " + K + " " + V + " " + $ + "px " + x;
    }
    function E(G, f) {
      if (X(f)) {
        var M = f.gradientColor, D = f.gradientParams, T = f.gradientType, B = f.gradientWith, U = f.gradientStops, I = f.opacity;
        M = M.map(function(K) {
          var V = K[3] * I, $ = (0, n.default)(K);
          return $[3] = V, $;
        }), M = M.map(function(K) {
          return (0, t.getColorFromRgbValue)(K);
        }), U === "auto" && (U = q(M));
        var Q = G["create".concat(T.slice(0, 1).toUpperCase() + T.slice(1), "Gradient")].apply(G, (0, n.default)(D));
        U.forEach(function(K, V) {
          return Q.addColorStop(K, M[V]);
        }), G["".concat(B, "Style")] = Q;
      }
    }
    function X(G) {
      var f = G.gradientColor, M = G.gradientParams, D = G.gradientType, T = G.gradientWith, B = G.gradientStops;
      if (!f || !M) return !1;
      if (f.length === 1)
        return console.warn("The gradient needs to provide at least two colors"), !1;
      if (D !== "linear" && D !== "radial")
        return console.warn("GradientType only supports linear or radial, current value is " + D), !1;
      var U = M.length;
      return D === "linear" && U !== 4 || D === "radial" && U !== 6 ? (console.warn("The expected length of gradientParams is " + (D === "linear" ? "4" : "6")), !1) : T !== "fill" && T !== "stroke" ? (console.warn("GradientWith only supports fill or stroke, current value is " + T), !1) : B !== "auto" && !(B instanceof Array) ? (console.warn("gradientStops only supports 'auto' or Number Array ([0, .5, 1]), current value is " + B), !1) : !0;
    }
    function q(G) {
      var f = 1 / (G.length - 1);
      return G.map(function(M, D) {
        return f * D;
      });
    }
    l.prototype.restoreTransform = function(G) {
      G.restore();
    }, l.prototype.update = function(G) {
      this.colorProcessor(G), Object.assign(this, G);
    }, l.prototype.getStyle = function() {
      var G = (0, a.deepClone)(this, !0);
      return this.colorProcessor(G, !0), G;
    };
  }(mr)), mr;
}
var yr = {}, br = {}, vn;
function af() {
  return vn || (vn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = e.easeInOutBounce = e.easeOutBounce = e.easeInBounce = e.easeInOutElastic = e.easeOutElastic = e.easeInElastic = e.easeInOutBack = e.easeOutBack = e.easeInBack = e.easeInOutQuint = e.easeOutQuint = e.easeInQuint = e.easeInOutQuart = e.easeOutQuart = e.easeInQuart = e.easeInOutCubic = e.easeOutCubic = e.easeInCubic = e.easeInOutQuad = e.easeOutQuad = e.easeInQuad = e.easeInOutSine = e.easeOutSine = e.easeInSine = e.linear = void 0;
    var r = [[[0, 1], "", [0.33, 0.67]], [[1, 0], [0.67, 0.33]]];
    e.linear = r;
    var n = [[[0, 1]], [[0.538, 0.564], [0.169, 0.912], [0.88, 0.196]], [[1, 0]]];
    e.easeInSine = n;
    var i = [[[0, 1]], [[0.444, 0.448], [0.169, 0.736], [0.718, 0.16]], [[1, 0]]];
    e.easeOutSine = i;
    var t = [[[0, 1]], [[0.5, 0.5], [0.2, 1], [0.8, 0]], [[1, 0]]];
    e.easeInOutSine = t;
    var a = [[[0, 1]], [[0.55, 0.584], [0.231, 0.904], [0.868, 0.264]], [[1, 0]]];
    e.easeInQuad = a;
    var l = [[[0, 1]], [[0.413, 0.428], [0.065, 0.816], [0.76, 0.04]], [[1, 0]]];
    e.easeOutQuad = l;
    var w = [[[0, 1]], [[0.5, 0.5], [0.3, 0.9], [0.7, 0.1]], [[1, 0]]];
    e.easeInOutQuad = w;
    var z = [[[0, 1]], [[0.679, 0.688], [0.366, 0.992], [0.992, 0.384]], [[1, 0]]];
    e.easeInCubic = z;
    var j = [[[0, 1]], [[0.321, 0.312], [8e-3, 0.616], [0.634, 8e-3]], [[1, 0]]];
    e.easeOutCubic = j;
    var E = [[[0, 1]], [[0.5, 0.5], [0.3, 1], [0.7, 0]], [[1, 0]]];
    e.easeInOutCubic = E;
    var X = [[[0, 1]], [[0.812, 0.74], [0.611, 0.988], [1.013, 0.492]], [[1, 0]]];
    e.easeInQuart = X;
    var q = [[[0, 1]], [[0.152, 0.244], [1e-3, 0.448], [0.285, -0.02]], [[1, 0]]];
    e.easeOutQuart = q;
    var G = [[[0, 1]], [[0.5, 0.5], [0.4, 1], [0.6, 0]], [[1, 0]]];
    e.easeInOutQuart = G;
    var f = [[[0, 1]], [[0.857, 0.856], [0.714, 1], [1, 0.712]], [[1, 0]]];
    e.easeInQuint = f;
    var M = [[[0, 1]], [[0.108, 0.2], [1e-3, 0.4], [0.214, -0.012]], [[1, 0]]];
    e.easeOutQuint = M;
    var D = [[[0, 1]], [[0.5, 0.5], [0.5, 1], [0.5, 0]], [[1, 0]]];
    e.easeInOutQuint = D;
    var T = [[[0, 1]], [[0.667, 0.896], [0.38, 1.184], [0.955, 0.616]], [[1, 0]]];
    e.easeInBack = T;
    var B = [[[0, 1]], [[0.335, 0.028], [0.061, 0.22], [0.631, -0.18]], [[1, 0]]];
    e.easeOutBack = B;
    var U = [[[0, 1]], [[0.5, 0.5], [0.4, 1.4], [0.6, -0.4]], [[1, 0]]];
    e.easeInOutBack = U;
    var I = [[[0, 1]], [[0.474, 0.964], [0.382, 0.988], [0.557, 0.952]], [[0.619, 1.076], [0.565, 1.088], [0.669, 1.08]], [[0.77, 0.916], [0.712, 0.924], [0.847, 0.904]], [[0.911, 1.304], [0.872, 1.316], [0.961, 1.34]], [[1, 0]]];
    e.easeInElastic = I;
    var Q = [[[0, 1]], [[0.073, -0.32], [0.034, -0.328], [0.104, -0.344]], [[0.191, 0.092], [0.11, 0.06], [0.256, 0.08]], [[0.31, -0.076], [0.26, -0.068], [0.357, -0.076]], [[0.432, 0.032], [0.362, 0.028], [0.683, -4e-3]], [[1, 0]]];
    e.easeOutElastic = Q;
    var K = [[[0, 1]], [[0.21, 0.94], [0.167, 0.884], [0.252, 0.98]], [[0.299, 1.104], [0.256, 1.092], [0.347, 1.108]], [[0.5, 0.496], [0.451, 0.672], [0.548, 0.324]], [[0.696, -0.108], [0.652, -0.112], [0.741, -0.124]], [[0.805, 0.064], [0.756, 0.012], [0.866, 0.096]], [[1, 0]]];
    e.easeInOutElastic = K;
    var V = [[[0, 1]], [[0.148, 1], [0.075, 0.868], [0.193, 0.848]], [[0.326, 1], [0.276, 0.836], [0.405, 0.712]], [[0.6, 1], [0.511, 0.708], [0.671, 0.348]], [[1, 0]]];
    e.easeInBounce = V;
    var $ = [[[0, 1]], [[0.357, 4e-3], [0.27, 0.592], [0.376, 0.252]], [[0.604, -4e-3], [0.548, 0.312], [0.669, 0.184]], [[0.82, 0], [0.749, 0.184], [0.905, 0.132]], [[1, 0]]];
    e.easeOutBounce = $;
    var x = [[[0, 1]], [[0.102, 1], [0.05, 0.864], [0.117, 0.86]], [[0.216, 0.996], [0.208, 0.844], [0.227, 0.808]], [[0.347, 0.996], [0.343, 0.8], [0.48, 0.292]], [[0.635, 4e-3], [0.511, 0.676], [0.656, 0.208]], [[0.787, 0], [0.76, 0.2], [0.795, 0.144]], [[0.905, -4e-3], [0.899, 0.164], [0.944, 0.144]], [[1, 0]]];
    e.easeInOutBounce = x;
    var g = /* @__PURE__ */ new Map([["linear", r], ["easeInSine", n], ["easeOutSine", i], ["easeInOutSine", t], ["easeInQuad", a], ["easeOutQuad", l], ["easeInOutQuad", w], ["easeInCubic", z], ["easeOutCubic", j], ["easeInOutCubic", E], ["easeInQuart", X], ["easeOutQuart", q], ["easeInOutQuart", G], ["easeInQuint", f], ["easeOutQuint", M], ["easeInOutQuint", D], ["easeInBack", T], ["easeOutBack", B], ["easeInOutBack", U], ["easeInElastic", I], ["easeOutElastic", Q], ["easeInOutElastic", K], ["easeInBounce", V], ["easeOutBounce", $], ["easeInOutBounce", x]]);
    e.default = g;
  }(br)), br;
}
var mn;
function sf() {
  return mn || (mn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.transition = l, e.injectNewCurve = U, e.default = void 0;
    var n = r(Oe()), i = r(Le()), t = r(af()), a = "linear";
    function l(Q) {
      var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, $ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 30, x = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
      if (!w.apply(void 0, arguments)) return !1;
      try {
        var g = z(Q), N = j(g, $);
        return !x || typeof V == "number" ? f(K, V, N) : B(K, V, N);
      } catch {
        return console.warn("Transition parameter may be abnormal!"), [V];
      }
    }
    function w(Q) {
      var K = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, $ = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 30;
      if (!Q || K === !1 || V === !1 || !$)
        return console.error("transition: Missing Parameters!"), !1;
      if ((0, i.default)(K) !== (0, i.default)(V))
        return console.error("transition: Inconsistent Status Types!"), !1;
      var x = (0, i.default)(V);
      return x === "string" || x === "boolean" || !Q.length ? (console.error("transition: Unsupported Data Type of State!"), !1) : (!t.default.has(Q) && !(Q instanceof Array) && console.warn("transition: Transition curve not found, default curve will be used!"), !0);
    }
    function z(Q) {
      var K = "";
      return t.default.has(Q) ? K = t.default.get(Q) : Q instanceof Array ? K = Q : K = t.default.get(a), K;
    }
    function j(Q, K) {
      var V = 1 / (K - 1), $ = new Array(K).fill(0).map(function(g, N) {
        return N * V;
      }), x = $.map(function(g) {
        return E(Q, g);
      });
      return x;
    }
    function E(Q, K) {
      var V = X(Q, K), $ = q(V, K);
      return G(V, $);
    }
    function X(Q, K) {
      var V = Q.length - 1, $ = "", x = "";
      Q.findIndex(function(m, L) {
        if (L !== V) {
          $ = m, x = Q[L + 1];
          var F = $[0][0], o = x[0][0];
          return K >= F && K < o;
        }
      });
      var g = $[0], N = $[2] || $[0], A = x[1] || x[0], u = x[0];
      return [g, N, A, u];
    }
    function q(Q, K) {
      var V = Q[0][0], $ = Q[3][0], x = $ - V, g = K - V;
      return g / x;
    }
    function G(Q, K) {
      var V = (0, n.default)(Q, 4), $ = (0, n.default)(V[0], 2), x = $[1], g = (0, n.default)(V[1], 2), N = g[1], A = (0, n.default)(V[2], 2), u = A[1], m = (0, n.default)(V[3], 2), L = m[1], F = Math.pow, o = 1 - K, k = x * F(o, 3), b = 3 * N * K * F(o, 2), O = 3 * u * F(K, 2) * o, W = L * F(K, 3);
      return 1 - (k + b + O + W);
    }
    function f(Q, K, V) {
      var $ = "object";
      return typeof Q == "number" && ($ = "number"), Q instanceof Array && ($ = "array"), $ === "number" ? M(Q, K, V) : $ === "array" ? D(Q, K, V) : $ === "object" ? T(Q, K, V) : V.map(function(x) {
        return K;
      });
    }
    function M(Q, K, V) {
      var $ = K - Q;
      return V.map(function(x) {
        return Q + $ * x;
      });
    }
    function D(Q, K, V) {
      var $ = K.map(function(x, g) {
        return typeof x != "number" ? !1 : x - Q[g];
      });
      return V.map(function(x) {
        return $.map(function(g, N) {
          return g === !1 ? K[N] : Q[N] + g * x;
        });
      });
    }
    function T(Q, K, V) {
      var $ = Object.keys(K), x = $.map(function(A) {
        return Q[A];
      }), g = $.map(function(A) {
        return K[A];
      }), N = D(x, g, V);
      return N.map(function(A) {
        var u = {};
        return A.forEach(function(m, L) {
          return u[$[L]] = m;
        }), u;
      });
    }
    function B(Q, K, V) {
      var $ = f(Q, K, V), x = function(u) {
        var m = Q[u], L = K[u];
        if ((0, i.default)(L) !== "object") return "continue";
        var F = B(m, L, V);
        $.forEach(function(o, k) {
          return o[u] = F[k];
        });
      };
      for (var g in K)
        var N = x(g);
      return $;
    }
    function U(Q, K) {
      if (!Q || !K) {
        console.error("InjectNewCurve Missing Parameters!");
        return;
      }
      t.default.set(Q, K);
    }
    var I = l;
    e.default = I;
  }(yr)), yr;
}
var yn;
function lf() {
  return yn || (yn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = r(rf()), i = r(nf()), t = r(Le()), a = r(Ae()), l = r(it()), w = r(of()), z = r(sf()), j = Se(), E = function q(G, f) {
      (0, l.default)(this, q), f = (0, j.deepClone)(f, !0);
      var M = {
        /**
         * @description Weather to render graph
         * @type {Boolean}
         * @default visible = true
         */
        visible: !0,
        /**
         * @description Whether to enable drag
         * @type {Boolean}
         * @default drag = false
         */
        drag: !1,
        /**
         * @description Whether to enable hover
         * @type {Boolean}
         * @default hover = false
         */
        hover: !1,
        /**
         * @description Graph rendering index
         *  Give priority to index high graph in rendering
         * @type {Number}
         * @example index = 1
         */
        index: 1,
        /**
         * @description Animation delay time(ms)
         * @type {Number}
         * @default animationDelay = 0
         */
        animationDelay: 0,
        /**
         * @description Number of animation frames
         * @type {Number}
         * @default animationFrame = 30
         */
        animationFrame: 30,
        /**
         * @description Animation dynamic curve (Supported by transition)
         * @type {String}
         * @default animationCurve = 'linear'
         * @link https://github.com/jiaming743/Transition
         */
        animationCurve: "linear",
        /**
         * @description Weather to pause graph animation
         * @type {Boolean}
         * @default animationPause = false
         */
        animationPause: !1,
        /**
         * @description Rectangular hover detection zone
         *  Use this method for hover detection first
         * @type {Null|Array}
         * @default hoverRect = null
         * @example hoverRect = [0, 0, 100, 100] // [Rect start x, y, Rect width, height]
         */
        hoverRect: null,
        /**
         * @description Mouse enter event handler
         * @type {Function|Null}
         * @default mouseEnter = null
         */
        mouseEnter: null,
        /**
         * @description Mouse outer event handler
         * @type {Function|Null}
         * @default mouseOuter = null
         */
        mouseOuter: null,
        /**
         * @description Mouse click event handler
         * @type {Function|Null}
         * @default click = null
         */
        click: null
      }, D = {
        status: "static",
        animationRoot: [],
        animationKeys: [],
        animationFrameState: [],
        cache: {}
      };
      f.shape || (f.shape = {}), f.style || (f.style = {});
      var T = Object.assign({}, G.shape, f.shape);
      Object.assign(M, f, D), Object.assign(this, G, M), this.shape = T, this.style = new w.default(f.style), this.addedProcessor();
    };
    e.default = E, E.prototype.addedProcessor = function() {
      typeof this.setGraphCenter == "function" && this.setGraphCenter(null, this), typeof this.added == "function" && this.added(this);
    }, E.prototype.drawProcessor = function(q, G) {
      var f = q.ctx;
      G.style.initStyle(f), typeof this.beforeDraw == "function" && this.beforeDraw(this, q), G.draw(q, G), typeof this.drawed == "function" && this.drawed(this, q), G.style.restoreTransform(f);
    }, E.prototype.hoverCheckProcessor = function(q, G) {
      var f = G.hoverRect, M = G.style, D = G.hoverCheck, T = M.graphCenter, B = M.rotate, U = M.scale, I = M.translate;
      return T && (B && (q = (0, j.getRotatePointPos)(-B, q, T)), U && (q = (0, j.getScalePointPos)(U.map(function(Q) {
        return 1 / Q;
      }), q, T)), I && (q = (0, j.getTranslatePointPos)(I.map(function(Q) {
        return Q * -1;
      }), q))), f ? j.checkPointIsInRect.apply(void 0, [q].concat((0, a.default)(f))) : D(q, this);
    }, E.prototype.moveProcessor = function(q) {
      this.move(q, this), typeof this.beforeMove == "function" && this.beforeMove(q, this), typeof this.setGraphCenter == "function" && this.setGraphCenter(q, this), typeof this.moved == "function" && this.moved(q, this);
    }, E.prototype.attr = function(q) {
      var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
      if (!q || G === void 0) return !1;
      var f = (0, t.default)(this[q]) === "object";
      f && (G = (0, j.deepClone)(G, !0));
      var M = this.render;
      q === "style" ? this.style.update(G) : f ? Object.assign(this[q], G) : this[q] = G, q === "index" && M.sortGraphsByIndex(), M.drawAllGraph();
    }, E.prototype.animation = /* @__PURE__ */ function() {
      var q = (0, i.default)(
        /* @__PURE__ */ n.default.mark(function G(f, M) {
          var D, T, B, U, I, Q, K, V, $, x = arguments;
          return n.default.wrap(function(N) {
            for (; ; )
              switch (N.prev = N.next) {
                case 0:
                  if (D = x.length > 2 && x[2] !== void 0 ? x[2] : !1, !(f !== "shape" && f !== "style")) {
                    N.next = 4;
                    break;
                  }
                  return console.error("Only supported shape and style animation!"), N.abrupt("return");
                case 4:
                  if (M = (0, j.deepClone)(M, !0), f === "style" && this.style.colorProcessor(M), T = this[f], B = Object.keys(M), U = {}, B.forEach(function(A) {
                    return U[A] = T[A];
                  }), I = this.animationFrame, Q = this.animationCurve, K = this.animationDelay, V = (0, z.default)(Q, U, M, I, !0), this.animationRoot.push(T), this.animationKeys.push(B), this.animationFrameState.push(V), !D) {
                    N.next = 17;
                    break;
                  }
                  return N.abrupt("return");
                case 17:
                  if (!(K > 0)) {
                    N.next = 20;
                    break;
                  }
                  return N.next = 20, X(K);
                case 20:
                  return $ = this.render, N.abrupt("return", new Promise(
                    /* @__PURE__ */ function() {
                      var A = (0, i.default)(
                        /* @__PURE__ */ n.default.mark(function u(m) {
                          return n.default.wrap(function(F) {
                            for (; ; )
                              switch (F.prev = F.next) {
                                case 0:
                                  return F.next = 2, $.launchAnimation();
                                case 2:
                                  m();
                                case 3:
                                case "end":
                                  return F.stop();
                              }
                          }, u);
                        })
                      );
                      return function(u) {
                        return A.apply(this, arguments);
                      };
                    }()
                  ));
                case 22:
                case "end":
                  return N.stop();
              }
          }, G, this);
        })
      );
      return function(G, f) {
        return q.apply(this, arguments);
      };
    }(), E.prototype.turnNextAnimationFrame = function(q) {
      var G = this.animationDelay, f = this.animationRoot, M = this.animationKeys, D = this.animationFrameState, T = this.animationPause;
      T || Date.now() - q < G || (f.forEach(function(B, U) {
        M[U].forEach(function(I) {
          B[I] = D[U][0][I];
        });
      }), D.forEach(function(B, U) {
        B.shift();
        var I = B.length === 0;
        I && (f[U] = null), I && (M[U] = null);
      }), this.animationFrameState = D.filter(function(B) {
        return B.length;
      }), this.animationRoot = f.filter(function(B) {
        return B;
      }), this.animationKeys = M.filter(function(B) {
        return B;
      }));
    }, E.prototype.animationEnd = function() {
      var q = this.animationFrameState, G = this.animationKeys, f = this.animationRoot, M = this.render;
      return f.forEach(function(D, T) {
        var B = G[T], U = q[T].pop();
        B.forEach(function(I) {
          return D[I] = U[I];
        });
      }), this.animationFrameState = [], this.animationKeys = [], this.animationRoot = [], M.drawAllGraph();
    }, E.prototype.pauseAnimation = function() {
      this.attr("animationPause", !0);
    }, E.prototype.playAnimation = function() {
      var q = this.render;
      return this.attr("animationPause", !1), new Promise(
        /* @__PURE__ */ function() {
          var G = (0, i.default)(
            /* @__PURE__ */ n.default.mark(function f(M) {
              return n.default.wrap(function(T) {
                for (; ; )
                  switch (T.prev = T.next) {
                    case 0:
                      return T.next = 2, q.launchAnimation();
                    case 2:
                      M();
                    case 3:
                    case "end":
                      return T.stop();
                  }
              }, f);
            })
          );
          return function(f) {
            return G.apply(this, arguments);
          };
        }()
      );
    }, E.prototype.delProcessor = function(q) {
      var G = this, f = q.graphs, M = f.findIndex(function(D) {
        return D === G;
      });
      M !== -1 && (typeof this.beforeDelete == "function" && this.beforeDelete(this), f.splice(M, 1, null), typeof this.deleted == "function" && this.deleted(this));
    };
    function X(q) {
      return new Promise(function(G) {
        setTimeout(G, q);
      });
    }
  }(hr)), hr;
}
var bn;
function uf() {
  return bn || (bn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = r(Te()), i = r(Ae()), t = r(it()), a = r(ot), l = r(kr()), w = Se(), z = r($r()), j = r(lf());
    function E(B, U) {
      var I = Object.keys(B);
      if (Object.getOwnPropertySymbols) {
        var Q = Object.getOwnPropertySymbols(B);
        U && (Q = Q.filter(function(K) {
          return Object.getOwnPropertyDescriptor(B, K).enumerable;
        })), I.push.apply(I, Q);
      }
      return I;
    }
    function X(B) {
      for (var U = 1; U < arguments.length; U++) {
        var I = arguments[U] != null ? arguments[U] : {};
        U % 2 ? E(I, !0).forEach(function(Q) {
          (0, n.default)(B, Q, I[Q]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(B, Object.getOwnPropertyDescriptors(I)) : E(I).forEach(function(Q) {
          Object.defineProperty(B, Q, Object.getOwnPropertyDescriptor(I, Q));
        });
      }
      return B;
    }
    var q = function B(U) {
      if ((0, t.default)(this, B), !U) {
        console.error("CRender Missing parameters!");
        return;
      }
      var I = U.getContext("2d"), Q = U.clientWidth, K = U.clientHeight, V = [Q, K];
      U.setAttribute("width", Q), U.setAttribute("height", K), this.ctx = I, this.area = V, this.animationStatus = !1, this.graphs = [], this.color = a.default, this.bezierCurve = l.default, U.addEventListener("mousedown", M.bind(this)), U.addEventListener("mousemove", D.bind(this)), U.addEventListener("mouseup", T.bind(this));
    };
    e.default = q, q.prototype.clearArea = function() {
      var B, U = this.area;
      (B = this.ctx).clearRect.apply(B, [0, 0].concat((0, i.default)(U)));
    }, q.prototype.add = function() {
      var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, U = B.name;
      if (!U) {
        console.error("add Missing parameters!");
        return;
      }
      var I = z.default.get(U);
      if (!I) {
        console.warn("No corresponding graph configuration found!");
        return;
      }
      var Q = new j.default(I, B);
      if (Q.validator(Q))
        return Q.render = this, this.graphs.push(Q), this.sortGraphsByIndex(), this.drawAllGraph(), Q;
    }, q.prototype.sortGraphsByIndex = function() {
      var B = this.graphs;
      B.sort(function(U, I) {
        if (U.index > I.index) return 1;
        if (U.index === I.index) return 0;
        if (U.index < I.index) return -1;
      });
    }, q.prototype.delGraph = function(B) {
      typeof B.delProcessor == "function" && (B.delProcessor(this), this.graphs = this.graphs.filter(function(U) {
        return U;
      }), this.drawAllGraph());
    }, q.prototype.delAllGraph = function() {
      var B = this;
      this.graphs.forEach(function(U) {
        return U.delProcessor(B);
      }), this.graphs = this.graphs.filter(function(U) {
        return U;
      }), this.drawAllGraph();
    }, q.prototype.drawAllGraph = function() {
      var B = this;
      this.clearArea(), this.graphs.filter(function(U) {
        return U && U.visible;
      }).forEach(function(U) {
        return U.drawProcessor(B, U);
      });
    }, q.prototype.launchAnimation = function() {
      var B = this, U = this.animationStatus;
      if (!U)
        return this.animationStatus = !0, new Promise(function(I) {
          G.call(B, function() {
            B.animationStatus = !1, I();
          }, Date.now());
        });
    };
    function G(B, U) {
      var I = this.graphs;
      if (!f(I)) {
        B();
        return;
      }
      I.forEach(function(Q) {
        return Q.turnNextAnimationFrame(U);
      }), this.drawAllGraph(), requestAnimationFrame(G.bind(this, B, U));
    }
    function f(B) {
      return B.find(function(U) {
        return !U.animationPause && U.animationFrameState.length;
      });
    }
    function M(B) {
      var U = this.graphs, I = U.find(function(Q) {
        return Q.status === "hover";
      });
      I && (I.status = "active");
    }
    function D(B) {
      var U = B.offsetX, I = B.offsetY, Q = [U, I], K = this.graphs, V = K.find(function(u) {
        return u.status === "active" || u.status === "drag";
      });
      if (V) {
        if (!V.drag) return;
        if (typeof V.move != "function") {
          console.error("No move method is provided, cannot be dragged!");
          return;
        }
        V.moveProcessor(B), V.status = "drag";
        return;
      }
      var $ = K.find(function(u) {
        return u.status === "hover";
      }), x = K.filter(function(u) {
        return u.hover && (typeof u.hoverCheck == "function" || u.hoverRect);
      }), g = x.find(function(u) {
        return u.hoverCheckProcessor(Q, u);
      });
      g ? document.body.style.cursor = g.style.hoverCursor : document.body.style.cursor = "default";
      var N = !1, A = !1;
      if ($ && (N = typeof $.mouseOuter == "function"), g && (A = typeof g.mouseEnter == "function"), !(!g && !$)) {
        if (!g && $) {
          N && $.mouseOuter(B, $), $.status = "static";
          return;
        }
        if (!(g && g === $)) {
          if (g && !$) {
            A && g.mouseEnter(B, g), g.status = "hover";
            return;
          }
          g && $ && g !== $ && (N && $.mouseOuter(B, $), $.status = "static", A && g.mouseEnter(B, g), g.status = "hover");
        }
      }
    }
    function T(B) {
      var U = this.graphs, I = U.find(function(K) {
        return K.status === "active";
      }), Q = U.find(function(K) {
        return K.status === "drag";
      });
      I && typeof I.click == "function" && I.click(B, I), U.forEach(function(K) {
        return K && (K.status = "static");
      }), I && (I.status = "hover"), Q && (Q.status = "hover");
    }
    q.prototype.clone = function(B) {
      var U = B.style.getStyle(), I = X({}, B, {
        style: U
      });
      return delete I.render, I = (0, w.deepClone)(I, !0), this.add(I);
    };
  }(sr)), sr;
}
var Cn;
function _r() {
  return Cn || (Cn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "CRender", {
      enumerable: !0,
      get: function() {
        return n.default;
      }
    }), Object.defineProperty(e, "extendNewGraph", {
      enumerable: !0,
      get: function() {
        return i.extendNewGraph;
      }
    }), e.default = void 0;
    var n = r(uf()), i = $r(), t = n.default;
    e.default = t;
  }(ar)), ar;
}
var wn;
function si() {
  if (wn) return rn;
  wn = 1;
  var e = Pe(), r = e(Te()), n = e(Ae()), i = _r(), t = $r(), a = Se(), l = ot, w = Re();
  function z(f, M) {
    var D = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(f);
      M && (T = T.filter(function(B) {
        return Object.getOwnPropertyDescriptor(f, B).enumerable;
      })), D.push.apply(D, T);
    }
    return D;
  }
  function j(f) {
    for (var M = 1; M < arguments.length; M++) {
      var D = arguments[M] != null ? arguments[M] : {};
      M % 2 ? z(Object(D), !0).forEach(function(T) {
        (0, r.default)(f, T, D[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(D)) : z(Object(D)).forEach(function(T) {
        Object.defineProperty(f, T, Object.getOwnPropertyDescriptor(D, T));
      });
    }
    return f;
  }
  var E = {
    shape: {
      rx: 0,
      ry: 0,
      ir: 0,
      or: 0,
      startAngle: 0,
      endAngle: 0,
      clockWise: !0
    },
    validator: function(M) {
      var D = M.shape, T = ["rx", "ry", "ir", "or", "startAngle", "endAngle"];
      return T.find(function(B) {
        return typeof D[B] != "number";
      }) ? (console.error("Pie shape configuration is abnormal!"), !1) : !0;
    },
    draw: function(M, D) {
      var T = M.ctx, B = D.shape;
      T.beginPath();
      var U = B.rx, I = B.ry, Q = B.ir, K = B.or, V = B.startAngle, $ = B.endAngle, x = B.clockWise;
      U = parseInt(U) + 0.5, I = parseInt(I) + 0.5, T.arc(U, I, Q > 0 ? Q : 0, V, $, !x);
      var g = (0, a.getCircleRadianPoint)(U, I, K, $).map(function(A) {
        return parseInt(A) + 0.5;
      }), N = (0, a.getCircleRadianPoint)(U, I, Q, V).map(function(A) {
        return parseInt(A) + 0.5;
      });
      T.lineTo.apply(T, (0, n.default)(g)), T.arc(U, I, K > 0 ? K : 0, $, V, x), T.lineTo.apply(T, (0, n.default)(N)), T.closePath(), T.stroke(), T.fill();
    }
  }, X = {
    shape: {
      rx: 0,
      ry: 0,
      r: 0,
      startAngle: 0,
      endAngle: 0,
      gradientStartAngle: null,
      gradientEndAngle: null
    },
    validator: function(M) {
      var D = M.shape, T = ["rx", "ry", "r", "startAngle", "endAngle"];
      return T.find(function(B) {
        return typeof D[B] != "number";
      }) ? (console.error("AgArc shape configuration is abnormal!"), !1) : !0;
    },
    draw: function(M, D) {
      var T = M.ctx, B = D.shape, U = D.style, I = U.gradient;
      I = I.map(function(W) {
        return (0, l.getColorFromRgbValue)(W);
      }), I.length === 1 && (I = [I[0], I[0]]);
      var Q = I.length - 1, K = B.gradientStartAngle, V = B.gradientEndAngle, $ = B.startAngle, x = B.endAngle, g = B.r, N = B.rx, A = B.ry;
      K === null && (K = $), V === null && (V = x);
      var u = (V - K) / Q;
      u === Math.PI * 2 && (u = Math.PI * 2 - 1e-3);
      for (var m = 0; m < Q; m++) {
        T.beginPath();
        var L = (0, a.getCircleRadianPoint)(N, A, g, $ + u * m), F = (0, a.getCircleRadianPoint)(N, A, g, $ + u * (m + 1)), o = (0, w.getLinearGradientColor)(T, L, F, [I[m], I[m + 1]]), k = $ + u * m, b = $ + u * (m + 1), O = !1;
        if (b > x && (b = x, O = !0), T.arc(N, A, g, k, b), T.strokeStyle = o, T.stroke(), O) break;
      }
    }
  }, q = {
    shape: {
      number: [],
      content: "",
      position: [0, 0],
      toFixed: 0,
      rowGap: 0,
      formatter: null
    },
    validator: function(M) {
      var D = M.shape, T = D.number, B = D.content, U = D.position;
      return !(T instanceof Array) || typeof B != "string" || !(U instanceof Array) ? (console.error("NumberText shape configuration is abnormal!"), !1) : !0;
    },
    draw: function(M, D) {
      var T = M.ctx, B = D.shape, U = B.number, I = B.content, Q = B.toFixed, K = B.rowGap, V = B.formatter, $ = I.split("{nt}"), x = "";
      $.forEach(function(g, N) {
        var A = U[N];
        typeof A != "number" && (A = ""), typeof A == "number" && (A = A.toFixed(Q), typeof V == "function" && (A = V(A))), x += g + (A || "");
      }), t.text.draw({
        ctx: T
      }, {
        shape: j(j({}, B), {}, {
          content: x,
          rowGap: K
        })
      });
    }
  }, G = {
    shape: {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    },
    validator: function(M) {
      var D = M.shape, T = D.x, B = D.y, U = D.w, I = D.h;
      return typeof T != "number" || typeof B != "number" || typeof U != "number" || typeof I != "number" ? (console.error("lineIcon shape configuration is abnormal!"), !1) : !0;
    },
    draw: function(M, D) {
      var T = M.ctx, B = D.shape;
      T.beginPath();
      var U = B.x, I = B.y, Q = B.w, K = B.h, V = K / 2;
      T.strokeStyle = T.fillStyle, T.moveTo(U, I + V), T.lineTo(U + Q, I + V), T.lineWidth = 1, T.stroke(), T.beginPath();
      var $ = V - 5 * 2;
      $ <= 0 && ($ = 3), T.arc(U + Q / 2, I + V, $, 0, Math.PI * 2), T.lineWidth = 5, T.stroke(), T.fillStyle = "#fff", T.fill();
    },
    hoverCheck: function(M, D) {
      var T = D.shape, B = T.x, U = T.y, I = T.w, Q = T.h;
      return (0, a.checkPointIsInRect)(M, B, U, I, Q);
    },
    setGraphCenter: function(M, D) {
      var T = D.shape, B = D.style, U = T.x, I = T.y, Q = T.w, K = T.h;
      B.graphCenter = [U + Q / 2, I + K / 2];
    }
  };
  return (0, i.extendNewGraph)("pie", E), (0, i.extendNewGraph)("agArc", X), (0, i.extendNewGraph)("numberText", q), (0, i.extendNewGraph)("lineIcon", G), rn;
}
var Cr = {}, lt = {}, wr = {}, Ie = {}, Pn;
function df() {
  if (Pn) return Ie;
  Pn = 1, Object.defineProperty(Ie, "__esModule", {
    value: !0
  }), Ie.colorConfig = void 0;
  var e = ["#37a2da", "#32c5e9", "#67e0e3", "#9fe6b8", "#ffdb5c", "#ff9f7f", "#fb7293", "#e062ae", "#e690d1", "#e7bcf3", "#9d96f5", "#8378ea", "#96bfff"];
  return Ie.colorConfig = e, Ie;
}
var He = {}, kn;
function ff() {
  if (kn) return He;
  kn = 1, Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.gridConfig = void 0;
  var e = {
    /**
     * @description Grid left margin
     * @type {String|Number}
     * @default left = '10%'
     * @example left = '10%' | 10
     */
    left: "10%",
    /**
     * @description Grid right margin
     * @type {String|Number}
     * @default right = '10%'
     * @example right = '10%' | 10
     */
    right: "10%",
    /**
     * @description Grid top margin
     * @type {String|Number}
     * @default top = 60
     * @example top = '10%' | 60
     */
    top: 60,
    /**
     * @description Grid bottom margin
     * @type {String|Number}
     * @default bottom = 60
     * @example bottom = '10%' | 60
     */
    bottom: 60,
    /**
     * @description Grid default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: "rgba(0, 0, 0, 0)"
    },
    /**
     * @description Grid render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = -30
     */
    rLevel: -30,
    /**
     * @description Grid animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Grid animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 30
  };
  return He.gridConfig = e, He;
}
var Ee = {}, $n;
function cf() {
  if ($n) return Ee;
  $n = 1, Object.defineProperty(Ee, "__esModule", {
    value: !0
  }), Ee.yAxisConfig = Ee.xAxisConfig = void 0;
  var e = {
    /**
     * @description Axis name
     * @type {String}
     * @default name = ''
     */
    name: "",
    /**
     * @description Whether to display this axis
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Axis position
     * @type {String}
     * @default position = 'bottom'
     * @example position = 'bottom' | 'top'
     */
    position: "bottom",
    /**
     * @description Name gap
     * @type {Number}
     * @default nameGap = 15
     */
    nameGap: 15,
    /**
     * @description Name location
     * @type {String}
     * @default nameLocation = 'end'
     * @example nameLocation = 'end' | 'center' | 'start'
     */
    nameLocation: "end",
    /**
     * @description Name default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    nameTextStyle: {
      fill: "#333",
      fontSize: 10
    },
    /**
     * @description Axis min value
     * @type {String|Number}
     * @default min = '20%'
     * @example min = '20%' | 0
     */
    min: "20%",
    /**
     * @description Axis max value
     * @type {String|Number}
     * @default max = '20%'
     * @example max = '20%' | 0
     */
    max: "20%",
    /**
     * @description Axis value interval
     * @type {Number}
     * @default interval = null
     * @example interval = 100
     */
    interval: null,
    /**
     * @description Min interval
     * @type {Number}
     * @default minInterval = null
     * @example minInterval = 1
     */
    minInterval: null,
    /**
     * @description Max interval
     * @type {Number}
     * @default maxInterval = null
     * @example maxInterval = 100
     */
    maxInterval: null,
    /**
     * @description Boundary gap
     * @type {Boolean}
     * @default boundaryGap = null
     * @example boundaryGap = true
     */
    boundaryGap: null,
    /**
     * @description Axis split number
     * @type {Number}
     * @default splitNumber = 5
     */
    splitNumber: 5,
    /**
     * @description Axis line configuration
     * @type {Object}
     */
    axisLine: {
      /**
       * @description Whether to display axis line
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis line default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#333",
        lineWidth: 1
      }
    },
    /**
     * @description Axis tick configuration
     * @type {Object}
     */
    axisTick: {
      /**
       * @description Whether to display axis tick
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis tick default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#333",
        lineWidth: 1
      }
    },
    /**
     * @description Axis label configuration
     * @type {Object}
     */
    axisLabel: {
      /**
       * @description Whether to display axis label
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis label formatter
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = '{value}件'
       * @example formatter = (dataItem) => (dataItem.value)
       */
      formatter: null,
      /**
       * @description Axis label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fill: "#333",
        fontSize: 10,
        rotate: 0
      }
    },
    /**
     * @description Axis split line configuration
     * @type {Object}
     */
    splitLine: {
      /**
       * @description Whether to display axis split line
       * @type {Boolean}
       * @default show = false
       */
      show: !1,
      /**
       * @description Axis split line default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#d4d4d4",
        lineWidth: 1
      }
    },
    /**
     * @description X axis render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = -20
     */
    rLevel: -20,
    /**
     * @description X axis animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description X axis animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50
  };
  Ee.xAxisConfig = e;
  var r = {
    /**
     * @description Axis name
     * @type {String}
     * @default name = ''
     */
    name: "",
    /**
     * @description Whether to display this axis
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Axis position
     * @type {String}
     * @default position = 'left'
     * @example position = 'left' | 'right'
     */
    position: "left",
    /**
     * @description Name gap
     * @type {Number}
     * @default nameGap = 15
     */
    nameGap: 15,
    /**
     * @description Name location
     * @type {String}
     * @default nameLocation = 'end'
     * @example nameLocation = 'end' | 'center' | 'start'
     */
    nameLocation: "end",
    /**
     * @description name default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    nameTextStyle: {
      fill: "#333",
      fontSize: 10
    },
    /**
     * @description Axis min value
     * @type {String|Number}
     * @default min = '20%'
     * @example min = '20%' | 0
     */
    min: "20%",
    /**
     * @description Axis max value
     * @type {String|Number}
     * @default max = '20%'
     * @example max = '20%' | 0
     */
    max: "20%",
    /**
     * @description Axis value interval
     * @type {Number}
     * @default interval = null
     * @example interval = 100
     */
    interval: null,
    /**
     * @description Min interval
     * @type {Number}
     * @default minInterval = null
     * @example minInterval = 1
     */
    minInterval: null,
    /**
     * @description Max interval
     * @type {Number}
     * @default maxInterval = null
     * @example maxInterval = 100
     */
    maxInterval: null,
    /**
     * @description Boundary gap
     * @type {Boolean}
     * @default boundaryGap = null
     * @example boundaryGap = true
     */
    boundaryGap: null,
    /**
     * @description Axis split number
     * @type {Number}
     * @default splitNumber = 5
     */
    splitNumber: 5,
    /**
     * @description Axis line configuration
     * @type {Object}
     */
    axisLine: {
      /**
       * @description Whether to display axis line
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis line default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#333",
        lineWidth: 1
      }
    },
    /**
     * @description Axis tick configuration
     * @type {Object}
     */
    axisTick: {
      /**
       * @description Whether to display axis tick
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis tick default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#333",
        lineWidth: 1
      }
    },
    /**
     * @description Axis label configuration
     * @type {Object}
     */
    axisLabel: {
      /**
       * @description Whether to display axis label
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis label formatter
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = '{value}件'
       * @example formatter = (dataItem) => (dataItem.value)
       */
      formatter: null,
      /**
       * @description Axis label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fill: "#333",
        fontSize: 10,
        rotate: 0
      }
    },
    /**
     * @description Axis split line configuration
     * @type {Object}
     */
    splitLine: {
      /**
       * @description Whether to display axis split line
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis split line default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#d4d4d4",
        lineWidth: 1
      }
    },
    /**
     * @description Y axis render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = -20
     */
    rLevel: -20,
    /**
     * @description Y axis animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Y axis animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50
  };
  return Ee.yAxisConfig = r, Ee;
}
var Ve = {}, _n;
function hf() {
  if (_n) return Ve;
  _n = 1, Object.defineProperty(Ve, "__esModule", {
    value: !0
  }), Ve.titleConfig = void 0;
  var e = {
    /**
     * @description Whether to display title
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Title text
     * @type {String}
     * @default text = ''
     */
    text: "",
    /**
     * @description Title offset
     * @type {Array}
     * @default offset = [0, -20]
     */
    offset: [0, -20],
    /**
     * @description Title default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    style: {
      fill: "#333",
      fontSize: 17,
      fontWeight: "bold",
      textAlign: "center",
      textBaseline: "bottom"
    },
    /**
     * @description Title render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = 20
     */
    rLevel: 20,
    /**
     * @description Title animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Title animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50
  };
  return Ve.titleConfig = e, Ve;
}
var Ue = {}, xn;
function gf() {
  if (xn) return Ue;
  xn = 1, Object.defineProperty(Ue, "__esModule", {
    value: !0
  }), Ue.lineConfig = void 0;
  var e = {
    /**
     * @description Whether to display this line chart
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Legend name
     * @type {String}
     * @default name = ''
     */
    name: "",
    /**
     * @description Data stacking
     * The data value of the series element of the same stack
     * will be superimposed (the latter value will be superimposed on the previous value)
     * @type {String}
     * @default stack = ''
     */
    stack: "",
    /**
     * @description Smooth line
     * @type {Boolean}
     * @default smooth = false
     */
    smooth: !1,
    /**
     * @description Line x axis index
     * @type {Number}
     * @default xAxisIndex = 0
     * @example xAxisIndex = 0 | 1
     */
    xAxisIndex: 0,
    /**
     * @description Line y axis index
     * @type {Number}
     * @default yAxisIndex = 0
     * @example yAxisIndex = 0 | 1
     */
    yAxisIndex: 0,
    /**
     * @description Line chart data
     * @type {Array}
     * @default data = []
     * @example data = [100, 200, 300]
     */
    data: [],
    /**
     * @description Line default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    lineStyle: {
      lineWidth: 1
    },
    /**
     * @description Line point configuration
     * @type {Object}
     */
    linePoint: {
      /**
       * @description Whether to display line point
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Line point radius
       * @type {Number}
       * @default radius = 2
       */
      radius: 2,
      /**
       * @description Line point default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fill: "#fff",
        lineWidth: 1
      }
    },
    /**
     * @description Line area configuration
     * @type {Object}
     */
    lineArea: {
      /**
       * @description Whether to display line area
       * @type {Boolean}
       * @default show = false
       */
      show: !1,
      /**
       * @description Line area gradient color (Hex|rgb|rgba)
       * @type {Array}
       * @default gradient = []
       */
      gradient: [],
      /**
       * @description Line area style default configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        opacity: 0.5
      }
    },
    /**
     * @description Line label configuration
     * @type {Object}
     */
    label: {
      /**
       * @description Whether to display line label
       * @type {Boolean}
       * @default show = false
       */
      show: !1,
      /**
       * @description Line label position
       * @type {String}
       * @default position = 'top'
       * @example position = 'top' | 'center' | 'bottom'
       */
      position: "top",
      /**
       * @description Line label offset
       * @type {Array}
       * @default offset = [0, -10]
       */
      offset: [0, -10],
      /**
       * @description Line label formatter
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = '{value}件'
       * @example formatter = (dataItem) => (dataItem.value)
       */
      formatter: null,
      /**
       * @description Line label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fontSize: 10
      }
    },
    /**
     * @description Line chart render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = 10
     */
    rLevel: 10,
    /**
     * @description Line animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Line animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50
  };
  return Ue.lineConfig = e, Ue;
}
var Xe = {}, An;
function pf() {
  if (An) return Xe;
  An = 1, Object.defineProperty(Xe, "__esModule", {
    value: !0
  }), Xe.barConfig = void 0;
  var e = {
    /**
     * @description Whether to display this bar chart
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Legend name
     * @type {String}
     * @default name = ''
     */
    name: "",
    /**
     * @description Data stacking
     * The data value of the series element of the same stack
     * will be superimposed (the latter value will be superimposed on the previous value)
     * @type {String}
     * @default stack = ''
     */
    stack: "",
    /**
     * @description Bar shape type
     * @type {String}
     * @default shapeType = 'normal'
     * @example shapeType = 'normal' | 'leftEchelon' | 'rightEchelon'
     */
    shapeType: "normal",
    /**
     * @description Echelon bar sharpness offset
     * @type {Number}
     * @default echelonOffset = 10
     */
    echelonOffset: 10,
    /**
     * @description Bar width
     * This property should be set on the last 'bar' series
     * in this coordinate system to take effect and will be in effect
     * for all 'bar' series in this coordinate system
     * @type {String|Number}
     * @default barWidth = 'auto'
     * @example barWidth = 'auto' | '10%' | 20
     */
    barWidth: "auto",
    /**
     * @description Bar gap
     * This property should be set on the last 'bar' series
     * in this coordinate system to take effect and will be in effect
     * for all 'bar' series in this coordinate system
     * @type {String|Number}
     * @default barGap = '30%'
     * @example barGap = '30%' | 30
     */
    barGap: "30%",
    /**
     * @description Bar category gap
     * This property should be set on the last 'bar' series
     * in this coordinate system to take effect and will be in effect
     * for all 'bar' series in this coordinate system
     * @type {String|Number}
     * @default barCategoryGap = '20%'
     * @example barCategoryGap = '20%' | 20
     */
    barCategoryGap: "20%",
    /**
     * @description Bar x axis index
     * @type {Number}
     * @default xAxisIndex = 0
     * @example xAxisIndex = 0 | 1
     */
    xAxisIndex: 0,
    /**
     * @description Bar y axis index
     * @type {Number}
     * @default yAxisIndex = 0
     * @example yAxisIndex = 0 | 1
     */
    yAxisIndex: 0,
    /**
     * @description Bar chart data
     * @type {Array}
     * @default data = []
     * @example data = [100, 200, 300]
     */
    data: [],
    /**
     * @description Background bar configuration
     * @type {Object}
     */
    backgroundBar: {
      /**
       * @description Whether to display background bar
       * @type {Boolean}
       * @default show = false
       */
      show: !1,
      /**
       * @description Background bar width
       * @type {String|Number}
       * @default width = 'auto'
       * @example width = 'auto' | '30%' | 30
       */
      width: "auto",
      /**
       * @description Background bar default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fill: "rgba(200, 200, 200, .4)"
      }
    },
    /**
     * @description Bar label configuration
     * @type {Object}
     */
    label: {
      /**
       * @description Whether to display bar label
       * @type {Boolean}
       * @default show = false
       */
      show: !1,
      /**
       * @description Bar label position
       * @type {String}
       * @default position = 'top'
       * @example position = 'top' | 'center' | 'bottom'
       */
      position: "top",
      /**
       * @description Bar label offset
       * @type {Array}
       * @default offset = [0, -10]
       */
      offset: [0, -10],
      /**
       * @description Bar label formatter
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = '{value}件'
       * @example formatter = (dataItem) => (dataItem.value)
       */
      formatter: null,
      /**
       * @description Bar label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fontSize: 10
      }
    },
    /**
     * @description Bar gradient configuration
     * @type {Object}
     */
    gradient: {
      /**
       * @description Gradient color (Hex|rgb|rgba)
       * @type {Array}
       * @default color = []
       */
      color: [],
      /**
       * @description Local gradient
       * @type {Boolean}
       * @default local = true
       */
      local: !0
    },
    /**
     * @description Bar style default configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    barStyle: {},
    /**
     * @description Independent color mode
     * When set to true, independent color mode is enabled
     * @type {Boolean}
     * @default independentColor = false
     */
    independentColor: !1,
    /**
     * @description Independent colors
     * Only effective when independent color mode is enabled
     * Default value is the same as the color in the root configuration
     * Two-dimensional color array can produce gradient colors
     * @type {Array}
     * @example independentColor = ['#fff', '#000']
     * @example independentColor = [['#fff', '#000'], '#000']
     */
    independentColors: [],
    /**
     * @description Bar chart render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = 0
     */
    rLevel: 0,
    /**
     * @description Bar animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Bar animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50
  };
  return Xe.barConfig = e, Xe;
}
var Qe = {}, Sn;
function li() {
  if (Sn) return Qe;
  Sn = 1, Object.defineProperty(Qe, "__esModule", {
    value: !0
  }), Qe.pieConfig = void 0;
  var e = {
    /**
     * @description Whether to display this pie chart
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Legend name
     * @type {String}
     * @default name = ''
     */
    name: "",
    /**
     * @description Radius of pie
     * @type {String|Number}
     * @default radius = '50%'
     * @example radius = '50%' | 100
     */
    radius: "50%",
    /**
     * @description Center point of pie
     * @type {Array}
     * @default center = ['50%','50%']
     * @example center = ['50%','50%'] | [100, 100]
     */
    center: ["50%", "50%"],
    /**
     * @description Pie chart start angle
     * @type {Number}
     * @default startAngle = -Math.PI / 2
     * @example startAngle = -Math.PI
     */
    startAngle: -Math.PI / 2,
    /**
     * @description Whether to enable rose type
     * @type {Boolean}
     * @default roseType = false
     */
    roseType: !1,
    /**
     * @description Automatic sorting in rose type
     * @type {Boolean}
     * @default roseSort = true
     */
    roseSort: !0,
    /**
     * @description Rose radius increasing
     * @type {String|Number}
     * @default roseIncrement = 'auto'
     * @example roseIncrement = 'auto' | '10%' | 10
     */
    roseIncrement: "auto",
    /**
     * @description Pie chart data
     * @type {Array}
     * @default data = []
     */
    data: [],
    /**
     * @description Pie inside label configuration
     * @type {Object}
     */
    insideLabel: {
      /**
       * @description Whether to display inside label
       * @type {Boolean}
       * @default show = false
       */
      show: !1,
      /**
       * @description Label formatter
       * @type {String|Function}
       * @default formatter = '{percent}%'
       * @example formatter = '${name}-{value}-{percent}%'
       * @example formatter = (dataItem) => (dataItem.name)
       */
      formatter: "{percent}%",
      /**
       * @description Label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fontSize: 10,
        fill: "#fff",
        textAlign: "center",
        textBaseline: "middle"
      }
    },
    /**
     * @description Pie Outside label configuration
     * @type {Object}
     */
    outsideLabel: {
      /**
       * @description Whether to display outside label
       * @type {Boolean}
       * @default show = false
       */
      show: !0,
      /**
       * @description Label formatter
       * @type {String|Function}
       * @default formatter = '{name}'
       * @example formatter = '${name}-{value}-{percent}%'
       * @example formatter = (dataItem) => (dataItem.name)
       */
      formatter: "{name}",
      /**
       * @description Label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fontSize: 11
      },
      /**
       * @description Gap beteen label line bended place and pie
       * @type {String|Number}
       * @default labelLineBendGap = '20%'
       * @example labelLineBendGap = '20%' | 20
       */
      labelLineBendGap: "20%",
      /**
       * @description Label line end length
       * @type {Number}
       * @default labelLineEndLength = 50
       */
      labelLineEndLength: 50,
      /**
       * @description Label line default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      labelLineStyle: {
        lineWidth: 1
      }
    },
    /**
     * @description Pie default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    pieStyle: {},
    /**
     * @description Percentage fractional precision
     * @type {Number}
     * @default percentToFixed = 0
     */
    percentToFixed: 0,
    /**
     * @description Pie chart render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = 10
     */
    rLevel: 10,
    /**
     * @description Animation delay gap
     * @type {Number}
     * @default animationDelayGap = 60
     */
    animationDelayGap: 60,
    /**
     * @description Pie animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Pie start animation curve
     * @type {String}
     * @default startAnimationCurve = 'easeOutBack'
     */
    startAnimationCurve: "easeOutBack",
    /**
     * @description Pie animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50
  };
  return Qe.pieConfig = e, Qe;
}
var Ye = {}, Ln;
function vf() {
  if (Ln) return Ye;
  Ln = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.radarAxisConfig = void 0;
  var e = {
    /**
     * @description Whether to display this radar axis
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Center point of radar axis
     * @type {Array}
     * @default center = ['50%','50%']
     * @example center = ['50%','50%'] | [100, 100]
     */
    center: ["50%", "50%"],
    /**
     * @description Radius of radar axis
     * @type {String|Number}
     * @default radius = '65%'
     * @example radius = '65%' | 100
     */
    radius: "65%",
    /**
     * @description Radar axis start angle
     * @type {Number}
     * @default startAngle = -Math.PI / 2
     * @example startAngle = -Math.PI
     */
    startAngle: -Math.PI / 2,
    /**
     * @description Radar axis split number
     * @type {Number}
     * @default splitNum = 5
     */
    splitNum: 5,
    /**
     * @description Whether to enable polygon radar axis
     * @type {Boolean}
     * @default polygon = false
     */
    polygon: !1,
    /**
     * @description Axis label configuration
     * @type {Object}
     */
    axisLabel: {
      /**
       * @description Whether to display axis label
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Label gap between label and radar axis
       * @type {Number}
       * @default labelGap = 15
       */
      labelGap: 15,
      /**
       * @description Label color (Hex|rgb|rgba), will cover style.fill
       * @type {Array}
       * @default color = []
       */
      color: [],
      /**
       * @description Axis label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fill: "#333"
      }
    },
    /**
     * @description Axis line configuration
     * @type {Object}
     */
    axisLine: {
      /**
       * @description Whether to display axis line
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Line color (Hex|rgb|rgba), will cover style.stroke
       * @type {Array}
       * @default color = []
       */
      color: [],
      /**
       * @description Axis label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#999",
        lineWidth: 1
      }
    },
    /**
     * @description Split line configuration
     * @type {Object}
     */
    splitLine: {
      /**
       * @description Whether to display split line
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Line color (Hex|rgb|rgba), will cover style.stroke
       * @type {Array}
       * @default color = []
       */
      color: [],
      /**
       * @description Split line default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#d4d4d4",
        lineWidth: 1
      }
    },
    /**
     * @description Split area configuration
     * @type {Object}
     */
    splitArea: {
      /**
       * @description Whether to display split area
       * @type {Boolean}
       * @default show = false
       */
      show: !1,
      /**
       * @description Area color (Hex|rgb|rgba), will cover style.stroke
       * @type {Array}
       * @default color = []
       */
      color: ["#f5f5f5", "#e6e6e6"],
      /**
       * @description Split area default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {}
    },
    /**
     * @description Bar chart render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = -10
     */
    rLevel: -10,
    /**
     * @description Radar axis animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Radar axis animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrane: 50
  };
  return Ye.radarAxisConfig = e, Ye;
}
var Ke = {}, On;
function mf() {
  if (On) return Ke;
  On = 1, Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.radarConfig = void 0;
  var e = {
    /**
     * @description Whether to display this radar
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Legend name
     * @type {String}
     * @default name = ''
     */
    name: "",
    /**
     * @description Radar chart data
     * @type {Array}
     * @default data = []
     * @example data = [100, 200, 300]
     */
    data: [],
    /**
     * @description Radar default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    radarStyle: {
      lineWidth: 1
    },
    /**
     * @description Radar point configuration
     * @type {Object}
     */
    point: {
      /**
       * @description Whether to display radar point
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Point radius
       * @type {Number}
       * @default radius = 2
       */
      radius: 2,
      /**
       * @description Radar point default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fill: "#fff"
      }
    },
    /**
     * @description Radar label configuration
     * @type {Object}
     */
    label: {
      /**
       * @description Whether to display radar label
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Label position offset
       * @type {Array}
       * @default offset = [0, 0]
       */
      offset: [0, 0],
      /**
       * @description Label gap between label and radar
       * @type {Number}
       * @default labelGap = 5
       */
      labelGap: 5,
      /**
       * @description Label formatter
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = 'Score-{value}'
       * @example formatter = (label) => (label)
       */
      formatter: null,
      /**
       * @description Radar label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fontSize: 10
      }
    },
    /**
     * @description Radar chart render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = 10
     */
    rLevel: 10,
    /**
     * @description Radar animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Radar animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrane: 50
  };
  return Ke.radarConfig = e, Ke;
}
var Je = {}, Gn;
function ui() {
  if (Gn) return Je;
  Gn = 1, Object.defineProperty(Je, "__esModule", {
    value: !0
  }), Je.gaugeConfig = void 0;
  var e = {
    /**
     * @description Whether to display this gauge
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Legend name
     * @type {String}
     * @default name = ''
     */
    name: "",
    /**
     * @description Radius of gauge
     * @type {String|Number}
     * @default radius = '60%'
     * @example radius = '60%' | 100
     */
    radius: "60%",
    /**
     * @description Center point of gauge
     * @type {Array}
     * @default center = ['50%','50%']
     * @example center = ['50%','50%'] | [100, 100]
     */
    center: ["50%", "50%"],
    /**
     * @description Gauge start angle
     * @type {Number}
     * @default startAngle = -(Math.PI / 4) * 5
     * @example startAngle = -Math.PI
     */
    startAngle: -(Math.PI / 4) * 5,
    /**
     * @description Gauge end angle
     * @type {Number}
     * @default endAngle = Math.PI / 4
     * @example endAngle = 0
     */
    endAngle: Math.PI / 4,
    /**
     * @description Gauge min value
     * @type {Number}
     * @default min = 0
     */
    min: 0,
    /**
     * @description Gauge max value
     * @type {Number}
     * @default max = 100
     */
    max: 100,
    /**
     * @description Gauge split number
     * @type {Number}
     * @default splitNum = 5
     */
    splitNum: 5,
    /**
     * @description Gauge arc line width
     * @type {Number}
     * @default arcLineWidth = 15
     */
    arcLineWidth: 15,
    /**
     * @description Gauge chart data
     * @type {Array}
     * @default data = []
     */
    data: [],
    /**
     * @description Data item arc default style configuration
     * @type {Object}
     * @default dataItemStyle = {Configuration Of Class Style}
     */
    dataItemStyle: {},
    /**
     * @description Axis tick configuration
     * @type {Object}
     */
    axisTick: {
      /**
       * @description Whether to display axis tick
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis tick length
       * @type {Number}
       * @default tickLength = 6
       */
      tickLength: 6,
      /**
       * @description Axis tick default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#999",
        lineWidth: 1
      }
    },
    /**
     * @description Axis label configuration
     * @type {Object}
     */
    axisLabel: {
      /**
       * @description Whether to display axis label
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Axis label data (Can be calculated automatically)
       * @type {Array}
       * @default data = [Number...]
       */
      data: [],
      /**
       * @description Axis label formatter
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = '{value}%'
       * @example formatter = (labelItem) => (labelItem.value)
       */
      formatter: null,
      /**
       * @description Axis label gap between label and axis tick
       * @type {String|Function}
       * @default labelGap = 5
       */
      labelGap: 5,
      /**
       * @description Axis label default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {}
    },
    /**
     * @description Gauge pointer configuration
     * @type {Object}
     */
    pointer: {
      /**
       * @description Whether to display pointer
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Pointer value index of data
       * @type {Number}
       * @default valueIndex = 0 (pointer.value = data[0].value)
       */
      valueIndex: 0,
      /**
       * @description Pointer default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        scale: [1, 1],
        fill: "#fb7293"
      }
    },
    /**
     * @description Data item arc detail configuration
     * @type {Object}
     */
    details: {
      /**
       * @description Whether to display details
       * @type {Boolean}
       * @default show = false
       */
      show: !1,
      /**
       * @description Details formatter
       * @type {String|Function}
       * @default formatter = null
       * @example formatter = '{value}%'
       * @example formatter = '{name}%'
       * @example formatter = (dataItem) => (dataItem.value)
       */
      formatter: null,
      /**
       * @description Details position offset
       * @type {Array}
       * @default offset = [0, 0]
       * @example offset = [10, 10]
       */
      offset: [0, 0],
      /**
       * @description Value fractional precision
       * @type {Number}
       * @default valueToFixed = 0
       */
      valueToFixed: 0,
      /**
       * @description Details position
       * @type {String}
       * @default position = 'center'
       * @example position = 'start' | 'center' | 'end'
       */
      position: "center",
      /**
       * @description Details default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        textBaseline: "middle"
      }
    },
    /**
     * @description Gauge background arc configuration
     * @type {Object}
     */
    backgroundArc: {
      /**
       * @description Whether to display background arc
       * @type {Boolean}
       * @default show = true
       */
      show: !0,
      /**
       * @description Background arc default style configuration
       * @type {Object}
       * @default style = {Configuration Of Class Style}
       */
      style: {
        stroke: "#e0e0e0"
      }
    },
    /**
     * @description Gauge chart render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = 10
     */
    rLevel: 10,
    /**
     * @description Gauge animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Gauge animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50
  };
  return Je.gaugeConfig = e, Je;
}
var Ze = {}, Rn;
function yf() {
  if (Rn) return Ze;
  Rn = 1, Object.defineProperty(Ze, "__esModule", {
    value: !0
  }), Ze.legendConfig = void 0;
  var e = {
    /**
     * @description Whether to display legend
     * @type {Boolean}
     * @default show = true
     */
    show: !0,
    /**
     * @description Legend orient
     * @type {String}
     * @default orient = 'horizontal'
     * @example orient = 'horizontal' | 'vertical'
     */
    orient: "horizontal",
    /**
     * @description Legend left
     * @type {String|Number}
     * @default left = 'auto'
     * @example left = 'auto' | '10%' | 10
     */
    left: "auto",
    /**
     * @description Legend right
     * @type {String|Number}
     * @default right = 'auto'
     * @example right = 'auto' | '10%' | 10
     */
    right: "auto",
    /**
     * @description Legend top
     * @type {String|Number}
     * @default top = 'auto'
     * @example top = 'auto' | '10%' | 10
     */
    top: "auto",
    /**
     * @description Legend bottom
     * @type {String|Number}
     * @default bottom = 'auto'
     * @example bottom = 'auto' | '10%' | 10
     */
    bottom: "auto",
    /**
     * @description Legend item gap
     * @type {Number}
     * @default itemGap = 10
     */
    itemGap: 10,
    /**
     * @description Icon width
     * @type {Number}
     * @default iconWidth = 25
     */
    iconWidth: 25,
    /**
     * @description Icon height
     * @type {Number}
     * @default iconHeight = 10
     */
    iconHeight: 10,
    /**
     * @description Whether legend is optional
     * @type {Boolean}
     * @default selectAble = true
     */
    selectAble: !0,
    /**
     * @description Legend data
     * @type {Array}
     * @default data = []
     */
    data: [],
    /**
     * @description Legend text default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    textStyle: {
      fontFamily: "Arial",
      fontSize: 13,
      fill: "#000"
    },
    /**
     * @description Legend icon default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    iconStyle: {},
    /**
     * @description Legend text unselected default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    textUnselectedStyle: {
      fontFamily: "Arial",
      fontSize: 13,
      fill: "#999"
    },
    /**
     * @description Legend icon unselected default style configuration
     * @type {Object}
     * @default style = {Configuration Of Class Style}
     */
    iconUnselectedStyle: {
      fill: "#999"
    },
    /**
     * @description Legend render level
     * Priority rendering high level
     * @type {Number}
     * @default rLevel = 20
     */
    rLevel: 20,
    /**
     * @description Legend animation curve
     * @type {String}
     * @default animationCurve = 'easeOutCubic'
     */
    animationCurve: "easeOutCubic",
    /**
     * @description Legend animation frame
     * @type {Number}
     * @default animationFrame = 50
     */
    animationFrame: 50
  };
  return Ze.legendConfig = e, Ze;
}
var Mn;
function We() {
  return Mn || (Mn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.changeDefaultConfig = f, Object.defineProperty(e, "colorConfig", {
      enumerable: !0,
      get: function() {
        return r.colorConfig;
      }
    }), Object.defineProperty(e, "gridConfig", {
      enumerable: !0,
      get: function() {
        return n.gridConfig;
      }
    }), Object.defineProperty(e, "xAxisConfig", {
      enumerable: !0,
      get: function() {
        return i.xAxisConfig;
      }
    }), Object.defineProperty(e, "yAxisConfig", {
      enumerable: !0,
      get: function() {
        return i.yAxisConfig;
      }
    }), Object.defineProperty(e, "titleConfig", {
      enumerable: !0,
      get: function() {
        return t.titleConfig;
      }
    }), Object.defineProperty(e, "lineConfig", {
      enumerable: !0,
      get: function() {
        return a.lineConfig;
      }
    }), Object.defineProperty(e, "barConfig", {
      enumerable: !0,
      get: function() {
        return l.barConfig;
      }
    }), Object.defineProperty(e, "pieConfig", {
      enumerable: !0,
      get: function() {
        return w.pieConfig;
      }
    }), Object.defineProperty(e, "radarAxisConfig", {
      enumerable: !0,
      get: function() {
        return z.radarAxisConfig;
      }
    }), Object.defineProperty(e, "radarConfig", {
      enumerable: !0,
      get: function() {
        return j.radarConfig;
      }
    }), Object.defineProperty(e, "gaugeConfig", {
      enumerable: !0,
      get: function() {
        return E.gaugeConfig;
      }
    }), Object.defineProperty(e, "legendConfig", {
      enumerable: !0,
      get: function() {
        return X.legendConfig;
      }
    }), e.keys = void 0;
    var r = df(), n = ff(), i = cf(), t = hf(), a = gf(), l = pf(), w = li(), z = vf(), j = mf(), E = ui(), X = yf(), q = Re(), G = {
      colorConfig: r.colorConfig,
      gridConfig: n.gridConfig,
      xAxisConfig: i.xAxisConfig,
      yAxisConfig: i.yAxisConfig,
      titleConfig: t.titleConfig,
      lineConfig: a.lineConfig,
      barConfig: l.barConfig,
      pieConfig: w.pieConfig,
      radarAxisConfig: z.radarAxisConfig,
      radarConfig: j.radarConfig,
      gaugeConfig: E.gaugeConfig,
      legendConfig: X.legendConfig
    };
    function f(D, T) {
      if (!G["".concat(D, "Config")]) {
        console.warn("Change default config Error - Invalid key!");
        return;
      }
      (0, q.deepMerge)(G["".concat(D, "Config")], T);
    }
    var M = ["color", "title", "legend", "xAxis", "yAxis", "grid", "radarAxis", "line", "bar", "pie", "radar", "gauge"];
    e.keys = M;
  }(wr)), wr;
}
var Dn;
function bf() {
  if (Dn) return lt;
  Dn = 1, Object.defineProperty(lt, "__esModule", {
    value: !0
  }), lt.mergeColor = i;
  var e = We(), r = Se(), n = Re();
  function i(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = (0, r.deepClone)(e.colorConfig, !0), w = a.color, z = a.series;
    if (z || (z = []), w || (w = []), a.color = w = (0, n.deepMerge)(l, w), !!z.length) {
      var j = w.length;
      z.forEach(function(G, f) {
        G.color || (G.color = w[f % j]);
      });
      var E = z.filter(function(G) {
        var f = G.type;
        return f === "pie";
      });
      E.forEach(function(G) {
        return G.data.forEach(function(f, M) {
          return f.color = w[M % j];
        });
      });
      var X = z.filter(function(G) {
        var f = G.type;
        return f === "gauge";
      });
      X.forEach(function(G) {
        return G.data.forEach(function(f, M) {
          return f.color = w[M % j];
        });
      });
      var q = z.filter(function(G) {
        var f = G.type, M = G.independentColor;
        return f === "bar" && M;
      });
      q.forEach(function(G) {
        G.independentColors || (G.independentColors = w);
      });
    }
  }
  return lt;
}
var ut = {}, ze = {}, Tn;
function Fe() {
  if (Tn) return ze;
  Tn = 1;
  var e = Pe();
  Object.defineProperty(ze, "__esModule", {
    value: !0
  }), ze.doUpdate = E, ze.Updater = void 0;
  var r = e(Ae()), n = e(Le()), i = e(it()), t = function X(q, G) {
    (0, i.default)(this, X);
    var f = q.chart, M = q.key, D = q.getGraphConfig;
    if (typeof D != "function") {
      console.warn("Updater need function getGraphConfig!");
      return;
    }
    f[M] || (this.graphs = f[M] = []), Object.assign(this, q), this.update(G);
  };
  ze.Updater = t, t.prototype.update = function(X) {
    var q = this, G = this.graphs, f = this.beforeUpdate;
    if (a(this, X), !!X.length) {
      var M = (0, n.default)(f);
      X.forEach(function(D, T) {
        M === "function" && f(G, D, T, q);
        var B = G[T];
        B ? l(B, D, T, q) : z(G, D, T, q);
      });
    }
  };
  function a(X, q) {
    var G = X.graphs, f = X.chart.render, M = G.length, D = q.length;
    if (M > D) {
      var T = G.splice(D);
      T.forEach(function(B) {
        return B.forEach(function(U) {
          return f.delGraph(U);
        });
      });
    }
  }
  function l(X, q, G, f) {
    var M = f.getGraphConfig, D = f.chart.render, T = f.beforeChange, B = M(q, f);
    w(X, B, D), X.forEach(function(U, I) {
      var Q = B[I];
      typeof T == "function" && T(U, Q), j(U, Q);
    });
  }
  function w(X, q, G) {
    var f = X.length, M = q.length;
    if (M > f) {
      var D = X.slice(-1)[0], T = M - f, B = new Array(T).fill(0).map(function(I) {
        return G.clone(D);
      });
      X.push.apply(X, (0, r.default)(B));
    } else if (M < f) {
      var U = X.splice(M);
      U.forEach(function(I) {
        return G.delGraph(I);
      });
    }
  }
  function z(X, q, G, f) {
    var M = f.getGraphConfig, D = f.getStartGraphConfig, T = f.chart, B = T.render, U = null;
    typeof D == "function" && (U = D(q, f));
    var I = M(q, f);
    if (I.length) {
      U ? (X[G] = U.map(function(K) {
        return B.add(K);
      }), X[G].forEach(function(K, V) {
        var $ = I[V];
        j(K, $);
      })) : X[G] = I.map(function(K) {
        return B.add(K);
      });
      var Q = f.afterAddGraph;
      typeof Q == "function" && Q(X[G]);
    }
  }
  function j(X, q) {
    var G = Object.keys(q);
    G.forEach(function(f) {
      f === "shape" || f === "style" ? X.animation(f, q[f], !0) : X[f] = q[f];
    });
  }
  function E() {
    var X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, q = X.chart, G = X.series, f = X.key, M = X.getGraphConfig, D = X.getStartGraphConfig, T = X.beforeChange, B = X.beforeUpdate, U = X.afterAddGraph;
    q[f] ? q[f].update(G) : q[f] = new t({
      chart: q,
      key: f,
      getGraphConfig: M,
      getStartGraphConfig: D,
      beforeChange: T,
      beforeUpdate: B,
      afterAddGraph: U
    }, G);
  }
  return ze;
}
var Wn;
function Cf() {
  if (Wn) return ut;
  Wn = 1;
  var e = Pe();
  Object.defineProperty(ut, "__esModule", {
    value: !0
  }), ut.title = l;
  var r = e(Oe()), n = Fe(), i = Se(), t = We(), a = Re();
  function l(E) {
    var X = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, q = [];
    X.title && (q[0] = (0, a.deepMerge)((0, i.deepClone)(t.titleConfig, !0), X.title)), (0, n.doUpdate)({
      chart: E,
      series: q,
      key: "title",
      getGraphConfig: w
    });
  }
  function w(E, X) {
    var q = t.titleConfig.animationCurve, G = t.titleConfig.animationFrame, f = t.titleConfig.rLevel, M = z(E, X), D = j(E);
    return [{
      name: "text",
      index: f,
      visible: E.show,
      animationCurve: q,
      animationFrame: G,
      shape: M,
      style: D
    }];
  }
  function z(E, X) {
    var q = E.offset, G = E.text, f = X.chart.gridArea, M = f.x, D = f.y, T = f.w, B = (0, r.default)(q, 2), U = B[0], I = B[1];
    return {
      content: G,
      position: [M + T / 2 + U, D + I]
    };
  }
  function j(E) {
    var X = E.style;
    return X;
  }
  return ut;
}
var dt = {}, Fn;
function wf() {
  if (Fn) return dt;
  Fn = 1;
  var e = Pe();
  Object.defineProperty(dt, "__esModule", {
    value: !0
  }), dt.grid = j;
  var r = e(Oe()), n = e(Te()), i = Fe(), t = Se(), a = We(), l = Re();
  function w(f, M) {
    var D = Object.keys(f);
    if (Object.getOwnPropertySymbols) {
      var T = Object.getOwnPropertySymbols(f);
      M && (T = T.filter(function(B) {
        return Object.getOwnPropertyDescriptor(f, B).enumerable;
      })), D.push.apply(D, T);
    }
    return D;
  }
  function z(f) {
    for (var M = 1; M < arguments.length; M++) {
      var D = arguments[M] != null ? arguments[M] : {};
      M % 2 ? w(Object(D), !0).forEach(function(T) {
        (0, n.default)(f, T, D[T]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(D)) : w(Object(D)).forEach(function(T) {
        Object.defineProperty(f, T, Object.getOwnPropertyDescriptor(D, T));
      });
    }
    return f;
  }
  function j(f) {
    var M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = M.grid;
    D = (0, l.deepMerge)((0, t.deepClone)(a.gridConfig, !0), D || {}), (0, i.doUpdate)({
      chart: f,
      series: [D],
      key: "grid",
      getGraphConfig: E
    });
  }
  function E(f, M) {
    var D = f.animationCurve, T = f.animationFrame, B = f.rLevel, U = X(f, M), I = G(f);
    return M.chart.gridArea = z({}, U), [{
      name: "rect",
      index: B,
      animationCurve: D,
      animationFrame: T,
      shape: U,
      style: I
    }];
  }
  function X(f, M) {
    var D = (0, r.default)(M.chart.render.area, 2), T = D[0], B = D[1], U = q(f.left, T), I = q(f.right, T), Q = q(f.top, B), K = q(f.bottom, B), V = T - U - I, $ = B - Q - K;
    return {
      x: U,
      y: Q,
      w: V,
      h: $
    };
  }
  function q(f, M) {
    return typeof f == "number" ? f : typeof f != "string" ? 0 : M * parseInt(f) / 100;
  }
  function G(f) {
    var M = f.style;
    return M;
  }
  return dt;
}
var ft = {}, Bn;
function Pf() {
  if (Bn) return ft;
  Bn = 1;
  var e = Pe();
  Object.defineProperty(ft, "__esModule", {
    value: !0
  }), ft.axis = f;
  var r = e(Le()), n = e(Oe()), i = e(Te()), t = e(Ae()), a = Fe(), l = We(), w = Re(), z = Se();
  function j(s, h) {
    var p = Object.keys(s);
    if (Object.getOwnPropertySymbols) {
      var C = Object.getOwnPropertySymbols(s);
      h && (C = C.filter(function(H) {
        return Object.getOwnPropertyDescriptor(s, H).enumerable;
      })), p.push.apply(p, C);
    }
    return p;
  }
  function E(s) {
    for (var h = 1; h < arguments.length; h++) {
      var p = arguments[h] != null ? arguments[h] : {};
      h % 2 ? j(Object(p), !0).forEach(function(C) {
        (0, i.default)(s, C, p[C]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(p)) : j(Object(p)).forEach(function(C) {
        Object.defineProperty(s, C, Object.getOwnPropertyDescriptor(p, C));
      });
    }
    return s;
  }
  var X = {
    xAxisConfig: l.xAxisConfig,
    yAxisConfig: l.yAxisConfig
  }, q = Math.abs, G = Math.pow;
  function f(s) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = h.xAxis, C = h.yAxis, H = h.series, Z = [];
    p && C && H && (Z = M(p, C), Z = D(Z), Z = Z.filter(function(ae) {
      var ue = ae.show;
      return ue;
    }), Z = T(Z), Z = B(Z, H), Z = L(Z), Z = F(Z, s), Z = o(Z), Z = b(Z), Z = O(Z, s)), (0, a.doUpdate)({
      chart: s,
      series: Z,
      key: "axisLine",
      getGraphConfig: W
    }), (0, a.doUpdate)({
      chart: s,
      series: Z,
      key: "axisTick",
      getGraphConfig: ie
    }), (0, a.doUpdate)({
      chart: s,
      series: Z,
      key: "axisLabel",
      getGraphConfig: Y
    }), (0, a.doUpdate)({
      chart: s,
      series: Z,
      key: "axisName",
      getGraphConfig: v
    }), (0, a.doUpdate)({
      chart: s,
      series: Z,
      key: "splitLine",
      getGraphConfig: J
    }), s.axisData = Z;
  }
  function M(s, h) {
    var p = [], C = [];
    if (s instanceof Array) {
      var H;
      (H = p).push.apply(H, (0, t.default)(s));
    } else
      p.push(s);
    if (h instanceof Array) {
      var Z;
      (Z = C).push.apply(Z, (0, t.default)(h));
    } else
      C.push(h);
    return p.splice(2), C.splice(2), p = p.map(function(ae, ue) {
      return E(E({}, ae), {}, {
        index: ue,
        axis: "x"
      });
    }), C = C.map(function(ae, ue) {
      return E(E({}, ae), {}, {
        index: ue,
        axis: "y"
      });
    }), [].concat((0, t.default)(p), (0, t.default)(C));
  }
  function D(s) {
    var h = s.filter(function(C) {
      var H = C.axis;
      return H === "x";
    }), p = s.filter(function(C) {
      var H = C.axis;
      return H === "y";
    });
    return h = h.map(function(C) {
      return (0, w.deepMerge)((0, z.deepClone)(l.xAxisConfig), C);
    }), p = p.map(function(C) {
      return (0, w.deepMerge)((0, z.deepClone)(l.yAxisConfig), C);
    }), [].concat((0, t.default)(h), (0, t.default)(p));
  }
  function T(s) {
    var h = s.filter(function(C) {
      var H = C.data;
      return H === "value";
    }), p = s.filter(function(C) {
      var H = C.data;
      return H !== "value";
    });
    return h.forEach(function(C) {
      typeof C.boundaryGap != "boolean" && (C.boundaryGap = !1);
    }), p.forEach(function(C) {
      typeof C.boundaryGap != "boolean" && (C.boundaryGap = !0);
    }), [].concat((0, t.default)(h), (0, t.default)(p));
  }
  function B(s, h) {
    var p = s.filter(function(H) {
      var Z = H.data;
      return Z === "value";
    }), C = s.filter(function(H) {
      var Z = H.data;
      return Z instanceof Array;
    });
    return p = U(p, h), C = u(C), [].concat((0, t.default)(p), (0, t.default)(C));
  }
  function U(s, h) {
    return s.map(function(p) {
      var C = I(p, h), H = V(p, C), Z = (0, n.default)(H, 2), ae = Z[0], ue = Z[1], fe = m(ae, ue, p), he = p.axisLabel.formatter, ge = [];
      return ae < 0 && ue > 0 ? ge = g(ae, ue, fe) : ge = N(ae, ue, fe), ge = ge.map(function(me) {
        return parseFloat(me.toFixed(2));
      }), E(E({}, p), {}, {
        maxValue: ge.slice(-1)[0],
        minValue: ge[0],
        label: A(ge, he)
      });
    });
  }
  function I(s, h) {
    if (h = h.filter(function(ae) {
      var ue = ae.show, fe = ae.type;
      return !(ue === !1 || fe === "pie");
    }), h.length === 0) return [0, 0];
    var p = s.index, C = s.axis;
    h = K(h);
    var H = C + "Axis", Z = h.filter(function(ae) {
      return ae[H] === p;
    });
    return Z.length || (Z = h), Q(Z);
  }
  function Q(s) {
    if (s) {
      var h = Math.min.apply(Math, (0, t.default)(s.map(function(C) {
        var H = C.data;
        return Math.min.apply(Math, (0, t.default)((0, w.filterNonNumber)(H)));
      }))), p = Math.max.apply(Math, (0, t.default)(s.map(function(C) {
        var H = C.data;
        return Math.max.apply(Math, (0, t.default)((0, w.filterNonNumber)(H)));
      })));
      return [h, p];
    }
  }
  function K(s) {
    var h = (0, z.deepClone)(s, !0);
    return s.forEach(function(p, C) {
      var H = (0, w.mergeSameStackData)(p, s);
      h[C].data = H;
    }), h;
  }
  function V(s, h) {
    var p = s.min, C = s.max, H = s.axis, Z = (0, n.default)(h, 2), ae = Z[0], ue = Z[1], fe = (0, r.default)(p), he = (0, r.default)(C);
    if (x(p) || (p = X[H + "AxisConfig"].min, fe = "string"), x(C) || (C = X[H + "AxisConfig"].max, he = "string"), fe === "string") {
      p = parseInt(ae - q(ae * parseFloat(p) / 100));
      var ge = $(p);
      p = parseFloat((p / ge - 0.1).toFixed(1)) * ge;
    }
    if (he === "string") {
      C = parseInt(ue + q(ue * parseFloat(C) / 100));
      var me = $(C);
      C = parseFloat((C / me + 0.1).toFixed(1)) * me;
    }
    return [p, C];
  }
  function $(s) {
    var h = q(s).toString(), p = h.length, C = h.replace(/0*$/g, "").indexOf("0"), H = p - 1;
    return C !== -1 && (H -= C), G(10, H);
  }
  function x(s) {
    var h = (0, r.default)(s), p = h === "string" && /^\d+%$/.test(s), C = h === "number";
    return p || C;
  }
  function g(s, h, p) {
    var C = [], H = [], Z = 0, ae = 0;
    do
      C.push(Z -= p);
    while (Z > s);
    do
      H.push(ae += p);
    while (ae < h);
    return [].concat((0, t.default)(C.reverse()), [0], (0, t.default)(H));
  }
  function N(s, h, p) {
    var C = [s], H = s;
    do
      C.push(H += p);
    while (H < h);
    return C;
  }
  function A(s, h) {
    return h && (typeof h == "string" && (s = s.map(function(p) {
      return h.replace("{value}", p);
    })), typeof h == "function" && (s = s.map(function(p, C) {
      return h({
        value: p,
        index: C
      });
    }))), s;
  }
  function u(s) {
    return s.map(function(h) {
      var p = h.data, C = h.axisLabel.formatter;
      return E(E({}, h), {}, {
        label: A(p, C)
      });
    });
  }
  function m(s, h, p) {
    var C = p.interval, H = p.minInterval, Z = p.maxInterval, ae = p.splitNumber, ue = p.axis, fe = X[ue + "AxisConfig"];
    if (typeof C != "number" && (C = fe.interval), typeof H != "number" && (H = fe.minInterval), typeof Z != "number" && (Z = fe.maxInterval), typeof ae != "number" && (ae = fe.splitNumber), typeof C == "number") return C;
    var he = parseInt((h - s) / (ae - 1));
    return he.toString().length > 1 && (he = parseInt(he.toString().replace(/\d$/, "0"))), he === 0 && (he = 1), typeof H == "number" && he < H ? H : typeof Z == "number" && he > Z ? Z : he;
  }
  function L(s) {
    var h = s.filter(function(C) {
      var H = C.axis;
      return H === "x";
    }), p = s.filter(function(C) {
      var H = C.axis;
      return H === "y";
    });
    return h[0] && !h[0].position && (h[0].position = l.xAxisConfig.position), h[1] && !h[1].position && (h[1].position = h[0].position === "bottom" ? "top" : "bottom"), p[0] && !p[0].position && (p[0].position = l.yAxisConfig.position), p[1] && !p[1].position && (p[1].position = p[0].position === "left" ? "right" : "left"), [].concat((0, t.default)(h), (0, t.default)(p));
  }
  function F(s, h) {
    var p = h.gridArea, C = p.x, H = p.y, Z = p.w, ae = p.h;
    return s = s.map(function(ue) {
      var fe = ue.position, he = [];
      return fe === "left" ? he = [[C, H], [C, H + ae]].reverse() : fe === "right" ? he = [[C + Z, H], [C + Z, H + ae]].reverse() : fe === "top" ? he = [[C, H], [C + Z, H]] : fe === "bottom" && (he = [[C, H + ae], [C + Z, H + ae]]), E(E({}, ue), {}, {
        linePosition: he
      });
    }), s;
  }
  function o(s, h) {
    return s.map(function(p) {
      var C = p.axis, H = p.linePosition, Z = p.position, ae = p.label, ue = p.boundaryGap;
      typeof ue != "boolean" && (ue = X[C + "AxisConfig"].boundaryGap);
      var fe = ae.length, he = (0, n.default)(H, 2), ge = (0, n.default)(he[0], 2), me = ge[0], _e = ge[1], Be = (0, n.default)(he[1], 2), je = Be[0], Ne = Be[1], ci = C === "x" ? je - me : Ne - _e, at = ci / (ue ? fe : fe - 1), xr = new Array(fe).fill(0).map(function(qh, st) {
        return C === "x" ? [me + at * (ue ? st + 0.5 : st), _e] : [me, _e + at * (ue ? st + 0.5 : st)];
      }), hi = k(C, ue, Z, xr, at);
      return E(E({}, p), {}, {
        tickPosition: xr,
        tickLinePosition: hi,
        tickGap: at
      });
    });
  }
  function k(s, h, p, C, H) {
    var Z = s === "x" ? 1 : 0, ae = 5;
    s === "x" && p === "top" && (ae = -5), s === "y" && p === "left" && (ae = -5);
    var ue = C.map(function(fe) {
      var he = (0, z.deepClone)(fe);
      return he[Z] += ae, [(0, z.deepClone)(fe), he];
    });
    return h && (Z = s === "x" ? 0 : 1, ae = H / 2, ue.forEach(function(fe) {
      var he = (0, n.default)(fe, 2), ge = he[0], me = he[1];
      ge[Z] += ae, me[Z] += ae;
    })), ue;
  }
  function b(s, h) {
    return s.map(function(p) {
      var C = p.nameGap, H = p.nameLocation, Z = p.position, ae = p.linePosition, ue = (0, n.default)(ae, 2), fe = ue[0], he = ue[1], ge = (0, t.default)(fe);
      H === "end" && (ge = (0, t.default)(he)), H === "center" && (ge[0] = (fe[0] + he[0]) / 2, ge[1] = (fe[1] + he[1]) / 2);
      var me = 0;
      Z === "top" && H === "center" && (me = 1), Z === "bottom" && H === "center" && (me = 1), Z === "left" && H !== "center" && (me = 1), Z === "right" && H !== "center" && (me = 1);
      var _e = C;
      return Z === "top" && H !== "end" && (_e *= -1), Z === "left" && H !== "start" && (_e *= -1), Z === "bottom" && H === "start" && (_e *= -1), Z === "right" && H === "end" && (_e *= -1), ge[me] += _e, E(E({}, p), {}, {
        namePosition: ge
      });
    });
  }
  function O(s, h) {
    var p = h.gridArea, C = p.w, H = p.h;
    return s.map(function(Z) {
      var ae = Z.tickLinePosition, ue = Z.position, fe = Z.boundaryGap, he = 0, ge = C;
      (ue === "top" || ue === "bottom") && (he = 1), (ue === "top" || ue === "bottom") && (ge = H), (ue === "right" || ue === "bottom") && (ge *= -1);
      var me = ae.map(function(_e) {
        var Be = (0, n.default)(_e, 1), je = Be[0], Ne = (0, t.default)(je);
        return Ne[he] += ge, [(0, t.default)(je), Ne];
      });
      return fe || me.shift(), E(E({}, Z), {}, {
        splitLinePosition: me
      });
    });
  }
  function W(s) {
    var h = s.animationCurve, p = s.animationFrame, C = s.rLevel;
    return [{
      name: "polyline",
      index: C,
      visible: s.axisLine.show,
      animationCurve: h,
      animationFrame: p,
      shape: te(s),
      style: ee(s)
    }];
  }
  function te(s) {
    var h = s.linePosition;
    return {
      points: h
    };
  }
  function ee(s) {
    return s.axisLine.style;
  }
  function ie(s) {
    var h = s.animationCurve, p = s.animationFrame, C = s.rLevel, H = se(s), Z = ce(s);
    return H.map(function(ae) {
      return {
        name: "polyline",
        index: C,
        visible: s.axisTick.show,
        animationCurve: h,
        animationFrame: p,
        shape: ae,
        style: Z
      };
    });
  }
  function se(s) {
    var h = s.tickLinePosition;
    return h.map(function(p) {
      return {
        points: p
      };
    });
  }
  function ce(s) {
    return s.axisTick.style;
  }
  function Y(s) {
    var h = s.animationCurve, p = s.animationFrame, C = s.rLevel, H = oe(s), Z = de(s, H);
    return H.map(function(ae, ue) {
      return {
        name: "text",
        index: C,
        visible: s.axisLabel.show,
        animationCurve: h,
        animationFrame: p,
        shape: ae,
        style: Z[ue],
        setGraphCenter: function() {
        }
      };
    });
  }
  function oe(s) {
    var h = s.label, p = s.tickPosition, C = s.position;
    return p.map(function(H, Z) {
      return {
        position: le(H, C),
        content: h[Z].toString()
      };
    });
  }
  function le(s, h) {
    var p = 0, C = 10;
    return (h === "top" || h === "bottom") && (p = 1), (h === "top" || h === "left") && (C = -10), s = (0, z.deepClone)(s), s[p] += C, s;
  }
  function de(s, h) {
    var p = s.position, C = s.axisLabel.style, H = _(p);
    C = (0, w.deepMerge)(H, C);
    var Z = h.map(function(ae) {
      var ue = ae.position;
      return E(E({}, C), {}, {
        graphCenter: ue
      });
    });
    return Z;
  }
  function _(s) {
    if (s === "left") return {
      textAlign: "right",
      textBaseline: "middle"
    };
    if (s === "right") return {
      textAlign: "left",
      textBaseline: "middle"
    };
    if (s === "top") return {
      textAlign: "center",
      textBaseline: "bottom"
    };
    if (s === "bottom") return {
      textAlign: "center",
      textBaseline: "top"
    };
  }
  function v(s) {
    var h = s.animationCurve, p = s.animationFrame, C = s.rLevel;
    return [{
      name: "text",
      index: C,
      animationCurve: h,
      animationFrame: p,
      shape: y(s),
      style: P(s)
    }];
  }
  function y(s) {
    var h = s.name, p = s.namePosition;
    return {
      content: h,
      position: p
    };
  }
  function P(s) {
    var h = s.nameLocation, p = s.position, C = s.nameTextStyle, H = R(p, h);
    return (0, w.deepMerge)(H, C);
  }
  function R(s, h) {
    if (s === "top" && h === "start" || s === "bottom" && h === "start" || s === "left" && h === "center") return {
      textAlign: "right",
      textBaseline: "middle"
    };
    if (s === "top" && h === "end" || s === "bottom" && h === "end" || s === "right" && h === "center") return {
      textAlign: "left",
      textBaseline: "middle"
    };
    if (s === "top" && h === "center" || s === "left" && h === "end" || s === "right" && h === "end") return {
      textAlign: "center",
      textBaseline: "bottom"
    };
    if (s === "bottom" && h === "center" || s === "left" && h === "start" || s === "right" && h === "start") return {
      textAlign: "center",
      textBaseline: "top"
    };
  }
  function J(s) {
    var h = s.animationCurve, p = s.animationFrame, C = s.rLevel, H = d(s), Z = S(s);
    return H.map(function(ae) {
      return {
        name: "polyline",
        index: C,
        visible: s.splitLine.show,
        animationCurve: h,
        animationFrame: p,
        shape: ae,
        style: Z
      };
    });
  }
  function d(s) {
    var h = s.splitLinePosition;
    return h.map(function(p) {
      return {
        points: p
      };
    });
  }
  function S(s) {
    return s.splitLine.style;
  }
  return ft;
}
var ct = {}, Nn;
function kf() {
  if (Nn) return ct;
  Nn = 1;
  var e = Pe();
  Object.defineProperty(ct, "__esModule", {
    value: !0
  }), ct.line = G;
  var r = e(Le()), n = e(Oe()), i = e(Ae()), t = e(Te()), a = Fe(), l = We(), w = e(kr()), z = Re();
  function j(Y, oe) {
    var le = Object.keys(Y);
    if (Object.getOwnPropertySymbols) {
      var de = Object.getOwnPropertySymbols(Y);
      oe && (de = de.filter(function(_) {
        return Object.getOwnPropertyDescriptor(Y, _).enumerable;
      })), le.push.apply(le, de);
    }
    return le;
  }
  function E(Y) {
    for (var oe = 1; oe < arguments.length; oe++) {
      var le = arguments[oe] != null ? arguments[oe] : {};
      oe % 2 ? j(Object(le), !0).forEach(function(de) {
        (0, t.default)(Y, de, le[de]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(Y, Object.getOwnPropertyDescriptors(le)) : j(Object(le)).forEach(function(de) {
        Object.defineProperty(Y, de, Object.getOwnPropertyDescriptor(le, de));
      });
    }
    return Y;
  }
  var X = w.default.polylineToBezierCurve, q = w.default.getBezierCurveLength;
  function G(Y) {
    var oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, le = oe.xAxis, de = oe.yAxis, _ = oe.series, v = [];
    le && de && _ && (v = (0, z.initNeedSeries)(_, l.lineConfig, "line"), v = f(v, Y)), (0, a.doUpdate)({
      chart: Y,
      series: v,
      key: "lineArea",
      getGraphConfig: U,
      getStartGraphConfig: $,
      beforeUpdate: x,
      beforeChange: g
    }), (0, a.doUpdate)({
      chart: Y,
      series: v,
      key: "line",
      getGraphConfig: N,
      getStartGraphConfig: L,
      beforeUpdate: x,
      beforeChange: g
    }), (0, a.doUpdate)({
      chart: Y,
      series: v,
      key: "linePoint",
      getGraphConfig: F,
      getStartGraphConfig: b
    }), (0, a.doUpdate)({
      chart: Y,
      series: v,
      key: "lineLabel",
      getGraphConfig: O
    });
  }
  function f(Y, oe) {
    var le = oe.axisData;
    return Y.map(function(de) {
      var _ = (0, z.mergeSameStackData)(de, Y);
      _ = M(de, _);
      var v = D(de, le), y = T(_, v), P = B(v);
      return E(E({}, de), {}, {
        linePosition: y.filter(function(R) {
          return R;
        }),
        lineFillBottomPos: P
      });
    });
  }
  function M(Y, oe) {
    var le = Y.data;
    return oe.map(function(de, _) {
      return typeof le[_] == "number" ? de : null;
    });
  }
  function D(Y, oe) {
    var le = Y.xAxisIndex, de = Y.yAxisIndex, _ = oe.find(function(y) {
      var P = y.axis, R = y.index;
      return P === "x" && R === le;
    }), v = oe.find(function(y) {
      var P = y.axis, R = y.index;
      return P === "y" && R === de;
    });
    return [_, v];
  }
  function T(Y, oe) {
    var le = oe.findIndex(function(Z) {
      var ae = Z.data;
      return ae === "value";
    }), de = oe[le], _ = oe[1 - le], v = de.linePosition, y = de.axis, P = _.tickPosition, R = P.length, J = y === "x" ? 0 : 1, d = v[0][J], S = v[1][J], s = S - d, h = de.maxValue, p = de.minValue, C = h - p, H = new Array(R).fill(0).map(function(Z, ae) {
      var ue = Y[ae];
      if (typeof ue != "number") return null;
      var fe = (ue - p) / C;
      return C === 0 && (fe = 0), fe * s + d;
    });
    return H.map(function(Z, ae) {
      if (ae >= R || typeof Z != "number") return null;
      var ue = [Z, P[ae][1 - J]];
      return J === 0 || ue.reverse(), ue;
    });
  }
  function B(Y) {
    var oe = Y.find(function(S) {
      var s = S.data;
      return s === "value";
    }), le = oe.axis, de = oe.linePosition, _ = oe.minValue, v = oe.maxValue, y = le === "x" ? 0 : 1, P = de[0][y];
    if (_ < 0 && v > 0) {
      var R = v - _, J = Math.abs(de[0][y] - de[1][y]), d = Math.abs(_) / R * J;
      le === "y" && (d *= -1), P += d;
    }
    return {
      changeIndex: y,
      changeValue: P
    };
  }
  function U(Y) {
    var oe = Y.animationCurve, le = Y.animationFrame, de = Y.lineFillBottomPos, _ = Y.rLevel;
    return [{
      name: A(Y),
      index: _,
      animationCurve: oe,
      animationFrame: le,
      visible: Y.lineArea.show,
      lineFillBottomPos: de,
      shape: I(Y),
      style: Q(Y),
      drawed: V
    }];
  }
  function I(Y) {
    var oe = Y.linePosition;
    return {
      points: oe
    };
  }
  function Q(Y) {
    var oe = Y.lineArea, le = Y.color, de = oe.gradient, _ = oe.style, v = [_.fill || le], y = (0, z.deepMerge)(v, de);
    y.length === 1 && y.push(y[0]);
    var P = K(Y);
    return _ = E(E({}, _), {}, {
      stroke: "rgba(0, 0, 0, 0)"
    }), (0, z.deepMerge)({
      gradientColor: y,
      gradientParams: P,
      gradientType: "linear",
      gradientWith: "fill"
    }, _);
  }
  function K(Y) {
    var oe = Y.lineFillBottomPos, le = Y.linePosition, de = oe.changeIndex, _ = oe.changeValue, v = le.map(function(J) {
      return J[de];
    }), y = Math.max.apply(Math, (0, i.default)(v)), P = Math.min.apply(Math, (0, i.default)(v)), R = y;
    return de === 1 && (R = P), de === 1 ? [0, R, 0, _] : [R, 0, _, 0];
  }
  function V(Y, oe) {
    var le = Y.lineFillBottomPos, de = Y.shape, _ = oe.ctx, v = de.points, y = le.changeIndex, P = le.changeValue, R = (0, i.default)(v[v.length - 1]), J = (0, i.default)(v[0]);
    R[y] = P, J[y] = P, _.lineTo.apply(_, (0, i.default)(R)), _.lineTo.apply(_, (0, i.default)(J)), _.closePath(), _.fill();
  }
  function $(Y) {
    var oe = U(Y)[0], le = E({}, oe.style);
    return le.opacity = 0, oe.style = le, [oe];
  }
  function x(Y, oe, le, de) {
    var _ = Y[le];
    if (_) {
      var v = A(oe), y = de.chart.render, P = _[0].name, R = v !== P;
      R && (_.forEach(function(J) {
        return y.delGraph(J);
      }), Y[le] = null);
    }
  }
  function g(Y, oe) {
    var le = oe.shape.points, de = Y.shape.points, _ = de.length, v = le.length;
    if (v > _) {
      var y = de.slice(-1)[0], P = new Array(v - _).fill(0).map(function(R) {
        return (0, i.default)(y);
      });
      de.push.apply(de, (0, i.default)(P));
    } else v < _ && de.splice(v);
  }
  function N(Y) {
    var oe = Y.animationCurve, le = Y.animationFrame, de = Y.rLevel;
    return [{
      name: A(Y),
      index: de + 1,
      animationCurve: oe,
      animationFrame: le,
      shape: I(Y),
      style: u(Y)
    }];
  }
  function A(Y) {
    var oe = Y.smooth;
    return oe ? "smoothline" : "polyline";
  }
  function u(Y) {
    var oe = Y.lineStyle, le = Y.color, de = Y.smooth, _ = Y.linePosition, v = m(_, de);
    return (0, z.deepMerge)({
      stroke: le,
      lineDash: [v, 0]
    }, oe);
  }
  function m(Y) {
    var oe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    if (!oe) return (0, z.getPolylineLength)(Y);
    var le = X(Y);
    return q(le);
  }
  function L(Y) {
    var oe = Y.lineStyle.lineDash, le = N(Y)[0], de = le.style.lineDash;
    return oe ? de = [0, 0] : de = (0, i.default)(de).reverse(), le.style.lineDash = de, [le];
  }
  function F(Y) {
    var oe = Y.animationCurve, le = Y.animationFrame, de = Y.rLevel, _ = o(Y), v = k(Y);
    return _.map(function(y) {
      return {
        name: "circle",
        index: de + 2,
        visible: Y.linePoint.show,
        animationCurve: oe,
        animationFrame: le,
        shape: y,
        style: v
      };
    });
  }
  function o(Y) {
    var oe = Y.linePosition, le = Y.linePoint.radius;
    return oe.map(function(de) {
      var _ = (0, n.default)(de, 2), v = _[0], y = _[1];
      return {
        r: le,
        rx: v,
        ry: y
      };
    });
  }
  function k(Y) {
    var oe = Y.color, le = Y.linePoint.style;
    return (0, z.deepMerge)({
      stroke: oe
    }, le);
  }
  function b(Y) {
    var oe = F(Y);
    return oe.forEach(function(le) {
      le.shape.r = 0.1;
    }), oe;
  }
  function O(Y) {
    var oe = Y.animationCurve, le = Y.animationFrame, de = Y.rLevel, _ = W(Y), v = ce(Y);
    return _.map(function(y, P) {
      return {
        name: "text",
        index: de + 3,
        visible: Y.label.show,
        animationCurve: oe,
        animationFrame: le,
        shape: y,
        style: v
      };
    });
  }
  function W(Y) {
    var oe = se(Y), le = te(Y);
    return oe.map(function(de, _) {
      return {
        content: de,
        position: le[_]
      };
    });
  }
  function te(Y) {
    var oe = Y.linePosition, le = Y.lineFillBottomPos, de = Y.label, _ = de.position, v = de.offset, y = le.changeIndex, P = le.changeValue;
    return oe.map(function(R) {
      if (_ === "bottom" && (R = (0, i.default)(R), R[y] = P), _ === "center") {
        var J = (0, i.default)(R);
        J[y] = P, R = ie(R, J);
      }
      return ee(R, v);
    });
  }
  function ee(Y, oe) {
    var le = (0, n.default)(Y, 2), de = le[0], _ = le[1], v = (0, n.default)(oe, 2), y = v[0], P = v[1];
    return [de + y, _ + P];
  }
  function ie(Y, oe) {
    var le = (0, n.default)(Y, 2), de = le[0], _ = le[1], v = (0, n.default)(oe, 2), y = v[0], P = v[1];
    return [(de + y) / 2, (_ + P) / 2];
  }
  function se(Y) {
    var oe = Y.data, le = Y.label.formatter;
    if (oe = oe.filter(function(_) {
      return typeof _ == "number";
    }).map(function(_) {
      return _.toString();
    }), !le) return oe;
    var de = (0, r.default)(le);
    return de === "string" ? oe.map(function(_) {
      return le.replace("{value}", _);
    }) : de === "function" ? oe.map(function(_, v) {
      return le({
        value: _,
        index: v
      });
    }) : oe;
  }
  function ce(Y) {
    var oe = Y.color, le = Y.label.style;
    return (0, z.deepMerge)({
      fill: oe
    }, le);
  }
  return ct;
}
var ht = {}, jn;
function $f() {
  if (jn) return ht;
  jn = 1;
  var e = Pe();
  Object.defineProperty(ht, "__esModule", {
    value: !0
  }), ht.bar = X;
  var r = e(Le()), n = e(Te()), i = e(Oe()), t = e(Ae()), a = Fe(), l = We(), w = Se(), z = Re();
  function j(d, S) {
    var s = Object.keys(d);
    if (Object.getOwnPropertySymbols) {
      var h = Object.getOwnPropertySymbols(d);
      S && (h = h.filter(function(p) {
        return Object.getOwnPropertyDescriptor(d, p).enumerable;
      })), s.push.apply(s, h);
    }
    return s;
  }
  function E(d) {
    for (var S = 1; S < arguments.length; S++) {
      var s = arguments[S] != null ? arguments[S] : {};
      S % 2 ? j(Object(s), !0).forEach(function(h) {
        (0, n.default)(d, h, s[h]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(s)) : j(Object(s)).forEach(function(h) {
        Object.defineProperty(d, h, Object.getOwnPropertyDescriptor(s, h));
      });
    }
    return d;
  }
  function X(d) {
    var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = S.xAxis, h = S.yAxis, p = S.series, C = [];
    s && h && p && (C = (0, z.initNeedSeries)(p, l.barConfig, "bar"), C = q(C, d), C = G(C), C = V(C)), (0, a.doUpdate)({
      chart: d,
      series: C.slice(-1),
      key: "backgroundBar",
      getGraphConfig: m
    }), C.reverse(), (0, a.doUpdate)({
      chart: d,
      series: C,
      key: "bar",
      getGraphConfig: k,
      getStartGraphConfig: ce,
      beforeUpdate: de
    }), (0, a.doUpdate)({
      chart: d,
      series: C,
      key: "barLabel",
      getGraphConfig: _
    });
  }
  function q(d, S) {
    var s = S.axisData;
    return d.forEach(function(h) {
      var p = h.xAxisIndex, C = h.yAxisIndex;
      typeof p != "number" && (p = 0), typeof C != "number" && (C = 0);
      var H = s.find(function(fe) {
        var he = fe.axis, ge = fe.index;
        return "".concat(he).concat(ge) === "x".concat(p);
      }), Z = s.find(function(fe) {
        var he = fe.axis, ge = fe.index;
        return "".concat(he).concat(ge) === "y".concat(C);
      }), ae = [H, Z], ue = ae.findIndex(function(fe) {
        var he = fe.data;
        return he === "value";
      });
      h.valueAxis = ae[ue], h.labelAxis = ae[1 - ue];
    }), d;
  }
  function G(d, S) {
    var s = M(d);
    return s.forEach(function(h) {
      f(h), T(h), B(h), U(h), K(h);
    }), d;
  }
  function f(d) {
    var S = D(d);
    S = S.map(function(h) {
      return {
        stack: h,
        index: -1
      };
    });
    var s = 0;
    d.forEach(function(h) {
      var p = h.stack;
      if (!p)
        h.barIndex = s, s++;
      else {
        var C = S.find(function(H) {
          var Z = H.stack;
          return Z === p;
        });
        C.index === -1 && (C.index = s, s++), h.barIndex = C.index;
      }
    });
  }
  function M(d) {
    var S = d.map(function(s) {
      var h = s.labelAxis, p = h.axis, C = h.index;
      return p + C;
    });
    return S = (0, t.default)(new Set(S)), S.map(function(s) {
      return d.filter(function(h) {
        var p = h.labelAxis, C = p.axis, H = p.index;
        return C + H === s;
      });
    });
  }
  function D(d) {
    var S = [];
    return d.forEach(function(s) {
      var h = s.stack;
      h && S.push(h);
    }), (0, t.default)(new Set(S));
  }
  function T(d) {
    var S = (0, t.default)(new Set(d.map(function(s) {
      var h = s.barIndex;
      return h;
    }))).length;
    d.forEach(function(s) {
      return s.barNum = S;
    });
  }
  function B(d) {
    var S = d.slice(-1)[0], s = S.barCategoryGap, h = S.labelAxis.tickGap, p = 0;
    typeof s == "number" ? p = s : p = (1 - parseInt(s) / 100) * h, d.forEach(function(C) {
      return C.barCategoryWidth = p;
    });
  }
  function U(d) {
    var S = d.slice(-1)[0], s = S.barCategoryWidth, h = S.barWidth, p = S.barGap, C = S.barNum, H = [];
    typeof h == "number" || h !== "auto" ? H = I(s, h, p) : h === "auto" && (H = Q(s, h, p, C));
    var Z = H, ae = (0, i.default)(Z, 2), ue = ae[0], fe = ae[1];
    d.forEach(function(he) {
      he.barWidth = ue, he.barGap = fe;
    });
  }
  function I(d, S, s) {
    var h = 0, p = 0;
    return typeof S == "number" ? h = S : h = parseInt(S) / 100 * d, typeof s == "number" ? p = s : p = parseInt(s) / 100 * h, [h, p];
  }
  function Q(d, S, s, h) {
    var p = 0, C = 0, H = d / h;
    if (typeof s == "number")
      C = s, p = H - C;
    else {
      var Z = 10 + parseInt(s) / 10;
      Z === 0 ? (p = H * 2, C = -p) : (p = H / Z * 10, C = H - p);
    }
    return [p, C];
  }
  function K(d) {
    var S = d.slice(-1)[0], s = S.barGap, h = S.barWidth, p = S.barNum, C = (s + h) * p - s;
    d.forEach(function(H) {
      return H.barAllWidthAndGap = C;
    });
  }
  function V(d, S) {
    return d = x(d), d = $(d), d = N(d), d = A(d), d;
  }
  function $(d) {
    return d.map(function(S) {
      var s = S.labelAxis, h = S.barAllWidthAndGap, p = S.barGap, C = S.barWidth, H = S.barIndex, Z = s.tickGap, ae = s.tickPosition, ue = s.axis, fe = ue === "x" ? 0 : 1, he = ae.map(function(ge, me) {
        var _e = ae[me][fe] - Z / 2, Be = _e + (Z - h) / 2;
        return Be + (H + 0.5) * C + H * p;
      });
      return E(E({}, S), {}, {
        barLabelAxisPos: he
      });
    });
  }
  function x(d) {
    return d.map(function(S) {
      var s = (0, z.mergeSameStackData)(S, d);
      s = g(S, s);
      var h = S.valueAxis, p = h.axis, C = h.minValue, H = h.maxValue, Z = h.linePosition, ae = u(C, H, C < 0 ? 0 : C, Z, p), ue = s.map(function(he) {
        return u(C, H, he, Z, p);
      }), fe = ue.map(function(he) {
        return [ae, he];
      });
      return E(E({}, S), {}, {
        barValueAxisPos: fe
      });
    });
  }
  function g(d, S) {
    var s = d.data;
    return S.map(function(h, p) {
      return typeof s[p] == "number" ? h : null;
    }).filter(function(h) {
      return h !== null;
    });
  }
  function N(d) {
    return d.map(function(S) {
      var s = S.barLabelAxisPos, h = S.data;
      return h.forEach(function(p, C) {
        typeof p != "number" && (s[C] = null);
      }), E(E({}, S), {}, {
        barLabelAxisPos: s.filter(function(p) {
          return p !== null;
        })
      });
    });
  }
  function A(d) {
    return d.forEach(function(S) {
      var s = S.data, h = S.barLabelAxisPos, p = S.barValueAxisPos, C = s.filter(function(Z) {
        return typeof Z == "number";
      }).length, H = h.length;
      H > C && (h.splice(C), p.splice(C));
    }), d;
  }
  function u(d, S, s, h, p) {
    if (typeof s != "number") return null;
    var C = S - d, H = p === "x" ? 0 : 1, Z = h[1][H] - h[0][H], ae = (s - d) / C;
    C === 0 && (ae = 0);
    var ue = ae * Z;
    return ue + h[0][H];
  }
  function m(d) {
    var S = d.animationCurve, s = d.animationFrame, h = d.rLevel, p = L(d), C = o(d);
    return p.map(function(H) {
      return {
        name: "rect",
        index: h,
        visible: d.backgroundBar.show,
        animationCurve: S,
        animationFrame: s,
        shape: H,
        style: C
      };
    });
  }
  function L(d) {
    var S = d.labelAxis, s = d.valueAxis, h = S.tickPosition, p = s.axis, C = s.linePosition, H = F(d), Z = H / 2, ae = p === "x" ? 0 : 1, ue = h.map(function(me) {
      return me[1 - ae];
    }), fe = [C[0][ae], C[1][ae]], he = fe[0], ge = fe[1];
    return ue.map(function(me) {
      return p === "x" ? {
        x: he,
        y: me - Z,
        w: ge - he,
        h: H
      } : {
        x: me - Z,
        y: ge,
        w: H,
        h: he - ge
      };
    });
  }
  function F(d) {
    var S = d.barAllWidthAndGap, s = d.barCategoryWidth, h = d.backgroundBar, p = h.width;
    return typeof p == "number" ? p : p === "auto" ? S : parseInt(p) / 100 * s;
  }
  function o(d) {
    return d.backgroundBar.style;
  }
  function k(d) {
    var S = d.barLabelAxisPos, s = d.animationCurve, h = d.animationFrame, p = d.rLevel, C = b(d);
    return S.map(function(H, Z) {
      return {
        name: C,
        index: p,
        animationCurve: s,
        animationFrame: h,
        shape: O(d, Z),
        style: ie(d, Z)
      };
    });
  }
  function b(d) {
    var S = d.shapeType;
    return S === "leftEchelon" || S === "rightEchelon" ? "polyline" : "rect";
  }
  function O(d, S) {
    var s = d.shapeType;
    return s === "leftEchelon" ? W(d, S) : s === "rightEchelon" ? te(d, S) : ee(d, S);
  }
  function W(d, S) {
    var s = d.barValueAxisPos, h = d.barLabelAxisPos, p = d.barWidth, C = d.echelonOffset, H = (0, i.default)(s[S], 2), Z = H[0], ae = H[1], ue = h[S], fe = p / 2, he = d.valueAxis.axis, ge = [];
    return he === "x" ? (ge[0] = [ae, ue - fe], ge[1] = [ae, ue + fe], ge[2] = [Z, ue + fe], ge[3] = [Z + C, ue - fe], ae - Z < C && ge.splice(3, 1)) : (ge[0] = [ue - fe, ae], ge[1] = [ue + fe, ae], ge[2] = [ue + fe, Z], ge[3] = [ue - fe, Z - C], Z - ae < C && ge.splice(3, 1)), {
      points: ge,
      close: !0
    };
  }
  function te(d, S) {
    var s = d.barValueAxisPos, h = d.barLabelAxisPos, p = d.barWidth, C = d.echelonOffset, H = (0, i.default)(s[S], 2), Z = H[0], ae = H[1], ue = h[S], fe = p / 2, he = d.valueAxis.axis, ge = [];
    return he === "x" ? (ge[0] = [ae, ue + fe], ge[1] = [ae, ue - fe], ge[2] = [Z, ue - fe], ge[3] = [Z + C, ue + fe], ae - Z < C && ge.splice(2, 1)) : (ge[0] = [ue + fe, ae], ge[1] = [ue - fe, ae], ge[2] = [ue - fe, Z], ge[3] = [ue + fe, Z - C], Z - ae < C && ge.splice(2, 1)), {
      points: ge,
      close: !0
    };
  }
  function ee(d, S) {
    var s = d.barValueAxisPos, h = d.barLabelAxisPos, p = d.barWidth, C = (0, i.default)(s[S], 2), H = C[0], Z = C[1], ae = h[S], ue = d.valueAxis.axis, fe = {};
    return ue === "x" ? (fe.x = H, fe.y = ae - p / 2, fe.w = Z - H, fe.h = p) : (fe.x = ae - p / 2, fe.y = Z, fe.w = p, fe.h = H - Z), fe;
  }
  function ie(d, S) {
    var s = d.barStyle, h = d.gradient, p = d.color, C = d.independentColor, H = d.independentColors, Z = [s.fill || p], ae = (0, z.deepMerge)(Z, h.color);
    if (C) {
      var ue = H[S % H.length];
      ae = ue instanceof Array ? ue : [ue];
    }
    ae.length === 1 && ae.push(ae[0]);
    var fe = se(d, S);
    return (0, z.deepMerge)({
      gradientColor: ae,
      gradientParams: fe,
      gradientType: "linear",
      gradientWith: "fill"
    }, s);
  }
  function se(d, S) {
    var s = d.barValueAxisPos, h = d.barLabelAxisPos, p = d.data, C = d.valueAxis, H = C.linePosition, Z = C.axis, ae = (0, i.default)(s[S], 2), ue = ae[0], fe = ae[1], he = h[S], ge = p[S], me = (0, i.default)(H, 2), _e = me[0], Be = me[1], je = Z === "x" ? 0 : 1, Ne = fe;
    return d.gradient.local || (Ne = ge < 0 ? _e[je] : Be[je]), Z === "y" ? [he, Ne, he, ue] : [Ne, he, ue, he];
  }
  function ce(d) {
    var S = k(d), s = d.shapeType;
    return S.forEach(function(h) {
      var p = h.shape;
      s === "leftEchelon" ? p = Y(p, d) : s === "rightEchelon" ? p = oe(p, d) : p = le(p, d), h.shape = p;
    }), S;
  }
  function Y(d, S) {
    var s = S.valueAxis.axis;
    d = (0, w.deepClone)(d);
    var h = d, p = h.points, C = s === "x" ? 0 : 1, H = p[2][C];
    return p.forEach(function(Z) {
      return Z[C] = H;
    }), d;
  }
  function oe(d, S) {
    var s = S.valueAxis.axis;
    d = (0, w.deepClone)(d);
    var h = d, p = h.points, C = s === "x" ? 0 : 1, H = p[2][C];
    return p.forEach(function(Z) {
      return Z[C] = H;
    }), d;
  }
  function le(d, S) {
    var s = S.valueAxis.axis, h = d.x, p = d.y, C = d.w, H = d.h;
    return s === "x" ? C = 0 : (p = p + H, H = 0), {
      x: h,
      y: p,
      w: C,
      h: H
    };
  }
  function de(d, S, s, h) {
    var p = h.chart.render, C = b(S);
    d[s] && d[s][0].name !== C && (d[s].forEach(function(H) {
      return p.delGraph(H);
    }), d[s] = null);
  }
  function _(d) {
    var S = d.animationCurve, s = d.animationFrame, h = d.rLevel, p = v(d), C = J(d);
    return p.map(function(H) {
      return {
        name: "text",
        index: h,
        visible: d.label.show,
        animationCurve: S,
        animationFrame: s,
        shape: H,
        style: C
      };
    });
  }
  function v(d) {
    var S = y(d), s = P(d);
    return s.map(function(h, p) {
      return {
        position: h,
        content: S[p]
      };
    });
  }
  function y(d) {
    var S = d.data, s = d.label, h = s.formatter;
    if (S = S.filter(function(C) {
      return typeof C == "number";
    }).map(function(C) {
      return C.toString();
    }), !h) return S;
    var p = (0, r.default)(h);
    return p === "string" ? S.map(function(C) {
      return h.replace("{value}", C);
    }) : p === "function" ? S.map(function(C, H) {
      return h({
        value: C,
        index: H
      });
    }) : S;
  }
  function P(d) {
    var S = d.label, s = d.barValueAxisPos, h = d.barLabelAxisPos, p = S.position, C = S.offset, H = d.valueAxis.axis;
    return s.map(function(Z, ae) {
      var ue = (0, i.default)(Z, 2), fe = ue[0], he = ue[1], ge = h[ae], me = [he, ge];
      return p === "bottom" && (me = [fe, ge]), p === "center" && (me = [(fe + he) / 2, ge]), H === "y" && me.reverse(), R(me, C);
    });
  }
  function R(d, S) {
    var s = (0, i.default)(d, 2), h = s[0], p = s[1], C = (0, i.default)(S, 2), H = C[0], Z = C[1];
    return [h + H, p + Z];
  }
  function J(d) {
    var S = d.color, s = d.label.style, h = d.gradient.color;
    return h.length && (S = h[0]), s = (0, z.deepMerge)({
      fill: S
    }, s), s;
  }
  return ht;
}
var gt = {}, En;
function _f() {
  if (En) return gt;
  En = 1;
  var e = Pe();
  Object.defineProperty(gt, "__esModule", {
    value: !0
  }), gt.pie = X;
  var r = e(Te()), n = e(Le()), i = e(Oe()), t = e(Ae()), a = Fe(), l = li(), w = Se(), z = Re();
  function j(v, y) {
    var P = Object.keys(v);
    if (Object.getOwnPropertySymbols) {
      var R = Object.getOwnPropertySymbols(v);
      y && (R = R.filter(function(J) {
        return Object.getOwnPropertyDescriptor(v, J).enumerable;
      })), P.push.apply(P, R);
    }
    return P;
  }
  function E(v) {
    for (var y = 1; y < arguments.length; y++) {
      var P = arguments[y] != null ? arguments[y] : {};
      y % 2 ? j(Object(P), !0).forEach(function(R) {
        (0, r.default)(v, R, P[R]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(P)) : j(Object(P)).forEach(function(R) {
        Object.defineProperty(v, R, Object.getOwnPropertyDescriptor(P, R));
      });
    }
    return v;
  }
  function X(v) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = y.series;
    P || (P = []);
    var R = (0, z.initNeedSeries)(P, l.pieConfig, "pie");
    R = q(R, v), R = G(R, v), R = M(R), R = B(R), R = Q(R), R = V(R), R = x(R), R = g(R), (0, a.doUpdate)({
      chart: v,
      series: R,
      key: "pie",
      getGraphConfig: F,
      getStartGraphConfig: o,
      beforeChange: k
    }), (0, a.doUpdate)({
      chart: v,
      series: R,
      key: "pieInsideLabel",
      getGraphConfig: W
    }), (0, a.doUpdate)({
      chart: v,
      series: R,
      key: "pieOutsideLabelLine",
      getGraphConfig: ie,
      getStartGraphConfig: se
    }), (0, a.doUpdate)({
      chart: v,
      series: R,
      key: "pieOutsideLabel",
      getGraphConfig: oe,
      getStartGraphConfig: le
    });
  }
  function q(v, y) {
    var P = y.render.area;
    return v.forEach(function(R) {
      var J = R.center;
      J = J.map(function(d, S) {
        return typeof d == "number" ? d : parseInt(d) / 100 * P[S];
      }), R.center = J;
    }), v;
  }
  function G(v, y) {
    var P = Math.min.apply(Math, (0, t.default)(y.render.area)) / 2;
    return v.forEach(function(R) {
      var J = R.radius, d = R.data;
      J = f(J, P), d.forEach(function(S) {
        var s = S.radius;
        s || (s = J), s = f(s, P), S.radius = s;
      }), R.radius = J;
    }), v;
  }
  function f(v, y) {
    return v instanceof Array || (v = [0, v]), v = v.map(function(P) {
      return typeof P == "number" ? P : parseInt(P) / 100 * y;
    }), v;
  }
  function M(v, y) {
    var P = v.filter(function(R) {
      var J = R.roseType;
      return J;
    });
    return P.forEach(function(R) {
      var J = R.radius, d = R.data, S = R.roseSort, s = T(R), h = (0, t.default)(d);
      d = D(d), d.forEach(function(p, C) {
        p.radius[1] = J[1] - s * C;
      }), S ? d.reverse() : R.data = h, R.roseIncrement = s;
    }), v;
  }
  function D(v) {
    return v.sort(function(y, P) {
      var R = y.value, J = P.value;
      if (R === J) return 0;
      if (R > J) return -1;
      if (R < J) return 1;
    });
  }
  function T(v) {
    var y = v.radius, P = v.roseIncrement;
    if (typeof P == "number") return P;
    if (P === "auto") {
      var R = v.data, J = R.reduce(function(s, h) {
        var p = h.radius;
        return [].concat((0, t.default)(s), (0, t.default)(p));
      }, []), d = Math.min.apply(Math, (0, t.default)(J)), S = Math.max.apply(Math, (0, t.default)(J));
      return (S - d) * 0.6 / (R.length - 1 || 1);
    }
    return parseInt(P) / 100 * y[1];
  }
  function B(v) {
    return v.forEach(function(y) {
      var P = y.data, R = y.percentToFixed, J = I(P);
      P.forEach(function(S) {
        var s = S.value;
        S.percent = s / J * 100, S.percentForLabel = U(s / J * 100, R);
      });
      var d = (0, z.mulAdd)(P.slice(0, -1).map(function(S) {
        var s = S.percent;
        return s;
      }));
      P.slice(-1)[0].percent = 100 - d, P.slice(-1)[0].percentForLabel = U(100 - d, R);
    }), v;
  }
  function U(v) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, P = v.toString(), R = P.split("."), J = R[1] || "0", d = J.slice(0, y);
    return R[1] = d, parseFloat(R.join("."));
  }
  function I(v) {
    return (0, z.mulAdd)(v.map(function(y) {
      var P = y.value;
      return P;
    }));
  }
  function Q(v) {
    return v.forEach(function(y) {
      var P = y.startAngle, R = y.data;
      R.forEach(function(J, d) {
        var S = K(R, d), s = (0, i.default)(S, 2), h = s[0], p = s[1];
        J.startAngle = P + h, J.endAngle = P + p;
      });
    }), v;
  }
  function K(v, y) {
    var P = Math.PI * 2, R = v.slice(0, y + 1), J = (0, z.mulAdd)(R.map(function(s) {
      var h = s.percent;
      return h;
    })), d = v[y].percent, S = J - d;
    return [P * S / 100, P * J / 100];
  }
  function V(v) {
    return v.forEach(function(y) {
      var P = y.data;
      P.forEach(function(R) {
        R.insideLabelPos = $(y, R);
      });
    }), v;
  }
  function $(v, y) {
    var P = v.center, R = y.startAngle, J = y.endAngle, d = (0, i.default)(y.radius, 2), S = d[0], s = d[1], h = (S + s) / 2, p = (R + J) / 2;
    return w.getCircleRadianPoint.apply(void 0, (0, t.default)(P).concat([h, p]));
  }
  function x(v) {
    return v.forEach(function(y) {
      var P = y.data, R = y.center;
      P.forEach(function(J) {
        var d = J.startAngle, S = J.endAngle, s = J.radius, h = (d + S) / 2, p = w.getCircleRadianPoint.apply(void 0, (0, t.default)(R).concat([s[1], h]));
        J.edgeCenterPos = p;
      });
    }), v;
  }
  function g(v) {
    return v.forEach(function(y) {
      var P = u(y), R = u(y, !1);
      P = m(P), R = m(R), L(P, y), L(R, y, !1);
    }), v;
  }
  function N(v) {
    var y = v.outsideLabel.labelLineBendGap, P = A(v);
    return typeof y != "number" && (y = parseInt(y) / 100 * P), y + P;
  }
  function A(v) {
    var y = v.data, P = y.map(function(R) {
      var J = (0, i.default)(R.radius, 2);
      J[0];
      var d = J[1];
      return d;
    });
    return Math.max.apply(Math, (0, t.default)(P));
  }
  function u(v) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, P = v.data, R = v.center, J = R[0];
    return P.filter(function(d) {
      var S = d.edgeCenterPos, s = S[0];
      return y ? s <= J : s > J;
    });
  }
  function m(v) {
    return v.sort(function(y, P) {
      var R = (0, i.default)(y.edgeCenterPos, 2);
      R[0];
      var J = R[1], d = (0, i.default)(P.edgeCenterPos, 2);
      d[0];
      var S = d[1];
      if (J > S) return 1;
      if (J < S) return -1;
      if (J === S) return 0;
    }), v;
  }
  function L(v, y) {
    var P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, R = y.center, J = y.outsideLabel, d = N(y);
    v.forEach(function(S) {
      var s = S.edgeCenterPos, h = S.startAngle, p = S.endAngle, C = J.labelLineEndLength, H = (h + p) / 2, Z = w.getCircleRadianPoint.apply(void 0, (0, t.default)(R).concat([d, H])), ae = (0, t.default)(Z);
      ae[0] += C * (P ? -1 : 1), S.labelLine = [s, Z, ae], S.labelLineLength = (0, z.getPolylineLength)(S.labelLine), S.align = {
        textAlign: "left",
        textBaseline: "middle"
      }, P && (S.align.textAlign = "right");
    });
  }
  function F(v) {
    var y = v.data, P = v.animationCurve, R = v.animationFrame, J = v.rLevel;
    return y.map(function(d, S) {
      return {
        name: "pie",
        index: J,
        animationCurve: P,
        animationFrame: R,
        shape: b(v, S),
        style: O(v, S)
      };
    });
  }
  function o(v) {
    var y = v.animationDelayGap, P = v.startAnimationCurve, R = F(v);
    return R.forEach(function(J, d) {
      J.animationCurve = P, J.animationDelay = d * y, J.shape.or = J.shape.ir;
    }), R;
  }
  function k(v) {
    v.animationDelay = 0;
  }
  function b(v, y) {
    var P = v.center, R = v.data, J = R[y], d = J.radius, S = J.startAngle, s = J.endAngle;
    return {
      startAngle: S,
      endAngle: s,
      ir: d[0],
      or: d[1],
      rx: P[0],
      ry: P[1]
    };
  }
  function O(v, y) {
    var P = v.pieStyle, R = v.data, J = R[y], d = J.color;
    return (0, z.deepMerge)({
      fill: d
    }, P);
  }
  function W(v) {
    var y = v.animationCurve, P = v.animationFrame, R = v.data, J = v.rLevel;
    return R.map(function(d, S) {
      return {
        name: "text",
        index: J,
        visible: v.insideLabel.show,
        animationCurve: y,
        animationFrame: P,
        shape: te(v, S),
        style: ee(v)
      };
    });
  }
  function te(v, y) {
    var P = v.insideLabel, R = v.data, J = P.formatter, d = R[y], S = (0, n.default)(J), s = "";
    return S === "string" && (s = J.replace("{name}", d.name), s = s.replace("{percent}", d.percentForLabel), s = s.replace("{value}", d.value)), S === "function" && (s = J(d)), {
      content: s,
      position: d.insideLabelPos
    };
  }
  function ee(v, y) {
    var P = v.insideLabel.style;
    return P;
  }
  function ie(v) {
    var y = v.animationCurve, P = v.animationFrame, R = v.data, J = v.rLevel;
    return R.map(function(d, S) {
      return {
        name: "polyline",
        index: J,
        visible: v.outsideLabel.show,
        animationCurve: y,
        animationFrame: P,
        shape: ce(v, S),
        style: Y(v, S)
      };
    });
  }
  function se(v) {
    var y = v.data, P = ie(v);
    return P.forEach(function(R, J) {
      R.style.lineDash = [0, y[J].labelLineLength];
    }), P;
  }
  function ce(v, y) {
    var P = v.data, R = P[y];
    return {
      points: R.labelLine
    };
  }
  function Y(v, y) {
    var P = v.outsideLabel, R = v.data, J = P.labelLineStyle, d = R[y].color;
    return (0, z.deepMerge)({
      stroke: d,
      lineDash: [R[y].labelLineLength, 0]
    }, J);
  }
  function oe(v) {
    var y = v.animationCurve, P = v.animationFrame, R = v.data, J = v.rLevel;
    return R.map(function(d, S) {
      return {
        name: "text",
        index: J,
        visible: v.outsideLabel.show,
        animationCurve: y,
        animationFrame: P,
        shape: de(v, S),
        style: _(v, S)
      };
    });
  }
  function le(v) {
    var y = v.data, P = oe(v);
    return P.forEach(function(R, J) {
      R.shape.position = y[J].labelLine[1];
    }), P;
  }
  function de(v, y) {
    var P = v.outsideLabel, R = v.data, J = P.formatter, d = R[y], S = d.labelLine, s = d.name, h = d.percentForLabel, p = d.value, C = (0, n.default)(J), H = "";
    return C === "string" && (H = J.replace("{name}", s), H = H.replace("{percent}", h), H = H.replace("{value}", p)), C === "function" && (H = J(R[y])), {
      content: H,
      position: S[2]
    };
  }
  function _(v, y) {
    var P = v.outsideLabel, R = v.data, J = R[y], d = J.color, S = J.align, s = P.style;
    return (0, z.deepMerge)(E({
      fill: d
    }, S), s);
  }
  return gt;
}
var pt = {}, qn;
function xf() {
  if (qn) return pt;
  qn = 1;
  var e = Pe();
  Object.defineProperty(pt, "__esModule", {
    value: !0
  }), pt.radarAxis = E;
  var r = e(Oe()), n = e(Te()), i = e(Ae()), t = Fe(), a = We(), l = Se(), w = Re();
  function z(o, k) {
    var b = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
      var O = Object.getOwnPropertySymbols(o);
      k && (O = O.filter(function(W) {
        return Object.getOwnPropertyDescriptor(o, W).enumerable;
      })), b.push.apply(b, O);
    }
    return b;
  }
  function j(o) {
    for (var k = 1; k < arguments.length; k++) {
      var b = arguments[k] != null ? arguments[k] : {};
      k % 2 ? z(Object(b), !0).forEach(function(O) {
        (0, n.default)(o, O, b[O]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(b)) : z(Object(b)).forEach(function(O) {
        Object.defineProperty(o, O, Object.getOwnPropertyDescriptor(b, O));
      });
    }
    return o;
  }
  function E(o) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = k.radar, O = [];
    b && (O = X(b), O = q(O, o), O = G(O, o), O = f(O), O = M(O), O = D(O), O = [O]);
    var W = O;
    O.length && !O[0].show && (W = []), (0, t.doUpdate)({
      chart: o,
      series: W,
      key: "radarAxisSplitArea",
      getGraphConfig: T,
      beforeUpdate: I,
      beforeChange: Q
    }), (0, t.doUpdate)({
      chart: o,
      series: W,
      key: "radarAxisSplitLine",
      getGraphConfig: K,
      beforeUpdate: x,
      beforeChange: g
    }), (0, t.doUpdate)({
      chart: o,
      series: W,
      key: "radarAxisLine",
      getGraphConfig: N
    }), (0, t.doUpdate)({
      chart: o,
      series: W,
      key: "radarAxisLable",
      getGraphConfig: m
    }), o.radarAxis = O[0];
  }
  function X(o) {
    return (0, w.deepMerge)((0, l.deepClone)(a.radarAxisConfig), o);
  }
  function q(o, k) {
    var b = k.render.area, O = o.center;
    return o.centerPos = O.map(function(W, te) {
      return typeof W == "number" ? W : parseInt(W) / 100 * b[te];
    }), o;
  }
  function G(o, k) {
    var b = k.render.area, O = o.splitNum, W = o.radius, te = Math.min.apply(Math, (0, i.default)(b)) / 2;
    typeof W != "number" && (W = parseInt(W) / 100 * te);
    var ee = W / O;
    return o.ringRadius = new Array(O).fill(0).map(function(ie, se) {
      return ee * (se + 1);
    }), o.radius = W, o;
  }
  function f(o) {
    var k = o.indicator, b = o.centerPos, O = o.radius, W = o.startAngle, te = Math.PI * 2, ee = k.length, ie = te / ee, se = new Array(ee).fill(0).map(function(ce, Y) {
      return ie * Y + W;
    });
    return o.axisLineAngles = se, o.axisLinePosition = se.map(function(ce) {
      return l.getCircleRadianPoint.apply(void 0, (0, i.default)(b).concat([O, ce]));
    }), o;
  }
  function M(o) {
    var k = o.ringRadius, b = k[0] / 2;
    return o.areaRadius = k.map(function(O) {
      return O - b;
    }), o;
  }
  function D(o) {
    var k = o.axisLineAngles, b = o.centerPos, O = o.radius, W = o.axisLabel;
    return O += W.labelGap, o.axisLabelPosition = k.map(function(te) {
      return l.getCircleRadianPoint.apply(void 0, (0, i.default)(b).concat([O, te]));
    }), o;
  }
  function T(o) {
    var k = o.areaRadius, b = o.polygon, O = o.animationCurve, W = o.animationFrame, te = o.rLevel, ee = b ? "regPolygon" : "ring";
    return k.map(function(ie, se) {
      return {
        name: ee,
        index: te,
        visible: o.splitArea.show,
        animationCurve: O,
        animationFrame: W,
        shape: B(o, se),
        style: U(o, se)
      };
    });
  }
  function B(o, k) {
    var b = o.polygon, O = o.areaRadius, W = o.indicator, te = o.centerPos, ee = W.length, ie = {
      rx: te[0],
      ry: te[1],
      r: O[k]
    };
    return b && (ie.side = ee), ie;
  }
  function U(o, k) {
    var b = o.splitArea, O = o.ringRadius, W = o.axisLineAngles, te = o.polygon, ee = o.centerPos, ie = b.color, se = b.style;
    se = j({
      fill: "rgba(0, 0, 0, 0)"
    }, se);
    var ce = O[0] - 0;
    if (te) {
      var Y = l.getCircleRadianPoint.apply(void 0, (0, i.default)(ee).concat([O[0], W[0]])), oe = l.getCircleRadianPoint.apply(void 0, (0, i.default)(ee).concat([O[0], W[1]]));
      ce = (0, w.getPointToLineDistance)(ee, Y, oe);
    }
    if (se = (0, w.deepMerge)((0, l.deepClone)(se, !0), {
      lineWidth: ce
    }), !ie.length) return se;
    var le = ie.length;
    return (0, w.deepMerge)(se, {
      stroke: ie[k % le]
    });
  }
  function I(o, k, b, O) {
    var W = o[b];
    if (W) {
      var te = O.chart.render, ee = k.polygon, ie = W[0].name, se = ee ? "regPolygon" : "ring", ce = se !== ie;
      ce && (W.forEach(function(Y) {
        return te.delGraph(Y);
      }), o[b] = null);
    }
  }
  function Q(o, k) {
    var b = k.shape.side;
    typeof b == "number" && (o.shape.side = b);
  }
  function K(o) {
    var k = o.ringRadius, b = o.polygon, O = o.animationCurve, W = o.animationFrame, te = o.rLevel, ee = b ? "regPolygon" : "ring";
    return k.map(function(ie, se) {
      return {
        name: ee,
        index: te,
        animationCurve: O,
        animationFrame: W,
        visible: o.splitLine.show,
        shape: V(o, se),
        style: $(o, se)
      };
    });
  }
  function V(o, k) {
    var b = o.ringRadius, O = o.centerPos, W = o.indicator, te = o.polygon, ee = {
      rx: O[0],
      ry: O[1],
      r: b[k]
    }, ie = W.length;
    return te && (ee.side = ie), ee;
  }
  function $(o, k) {
    var b = o.splitLine, O = b.color, W = b.style;
    if (W = j({
      fill: "rgba(0, 0, 0, 0)"
    }, W), !O.length) return W;
    var te = O.length;
    return (0, w.deepMerge)(W, {
      stroke: O[k % te]
    });
  }
  function x(o, k, b, O) {
    var W = o[b];
    if (W) {
      var te = O.chart.render, ee = k.polygon, ie = W[0].name, se = ee ? "regPolygon" : "ring", ce = se !== ie;
      ce && (W.forEach(function(Y) {
        return te.delGraph(Y);
      }), o[b] = null);
    }
  }
  function g(o, k) {
    var b = k.shape.side;
    typeof b == "number" && (o.shape.side = b);
  }
  function N(o) {
    var k = o.axisLinePosition, b = o.animationCurve, O = o.animationFrame, W = o.rLevel;
    return k.map(function(te, ee) {
      return {
        name: "polyline",
        index: W,
        visible: o.axisLine.show,
        animationCurve: b,
        animationFrame: O,
        shape: A(o, ee),
        style: u(o, ee)
      };
    });
  }
  function A(o, k) {
    var b = o.centerPos, O = o.axisLinePosition, W = [b, O[k]];
    return {
      points: W
    };
  }
  function u(o, k) {
    var b = o.axisLine, O = b.color, W = b.style;
    if (!O.length) return W;
    var te = O.length;
    return (0, w.deepMerge)(W, {
      stroke: O[k % te]
    });
  }
  function m(o) {
    var k = o.axisLabelPosition, b = o.animationCurve, O = o.animationFrame, W = o.rLevel;
    return k.map(function(te, ee) {
      return {
        name: "text",
        index: W,
        visible: o.axisLabel.show,
        animationCurve: b,
        animationFrame: O,
        shape: L(o, ee),
        style: F(o, ee)
      };
    });
  }
  function L(o, k) {
    var b = o.axisLabelPosition, O = o.indicator;
    return {
      content: O[k].name,
      position: b[k]
    };
  }
  function F(o, k) {
    var b = o.axisLabel, O = (0, r.default)(o.centerPos, 2), W = O[0], te = O[1], ee = o.axisLabelPosition, ie = b.color, se = b.style, ce = (0, r.default)(ee[k], 2), Y = ce[0], oe = ce[1], le = Y > W ? "left" : "right", de = oe > te ? "top" : "bottom";
    if (se = (0, w.deepMerge)({
      textAlign: le,
      textBaseline: de
    }, se), !ie.length) return se;
    var _ = ie.length;
    return (0, w.deepMerge)(se, {
      fill: ie[k % _]
    });
  }
  return pt;
}
var vt = {}, zn;
function Af() {
  if (zn) return vt;
  zn = 1;
  var e = Pe();
  Object.defineProperty(vt, "__esModule", {
    value: !0
  }), vt.radar = q;
  var r = e(Te()), n = e(Le()), i = e(Oe()), t = e(Ae()), a = Fe(), l = We(), w = Se(), z = ot, j = Re();
  function E(u, m) {
    var L = Object.keys(u);
    if (Object.getOwnPropertySymbols) {
      var F = Object.getOwnPropertySymbols(u);
      m && (F = F.filter(function(o) {
        return Object.getOwnPropertyDescriptor(u, o).enumerable;
      })), L.push.apply(L, F);
    }
    return L;
  }
  function X(u) {
    for (var m = 1; m < arguments.length; m++) {
      var L = arguments[m] != null ? arguments[m] : {};
      m % 2 ? E(Object(L), !0).forEach(function(F) {
        (0, r.default)(u, F, L[F]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(L)) : E(Object(L)).forEach(function(F) {
        Object.defineProperty(u, F, Object.getOwnPropertyDescriptor(L, F));
      });
    }
    return u;
  }
  function q(u) {
    var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, L = m.series;
    L || (L = []);
    var F = (0, j.initNeedSeries)(L, l.radarConfig, "radar");
    F = G(F, u), F = f(F, u), F = M(F, u), (0, a.doUpdate)({
      chart: u,
      series: F,
      key: "radar",
      getGraphConfig: D,
      getStartGraphConfig: T,
      beforeChange: I
    }), (0, a.doUpdate)({
      chart: u,
      series: F,
      key: "radarPoint",
      getGraphConfig: Q,
      getStartGraphConfig: K
    }), (0, a.doUpdate)({
      chart: u,
      series: F,
      key: "radarLabel",
      getGraphConfig: x
    });
  }
  function G(u, m) {
    var L = m.radarAxis;
    if (!L) return [];
    var F = L.indicator, o = L.axisLineAngles, k = L.radius, b = L.centerPos;
    return u.forEach(function(O) {
      var W = O.data;
      O.dataRadius = [], O.radarPosition = F.map(function(te, ee) {
        var ie = te.max, se = te.min, ce = W[ee];
        typeof ie != "number" && (ie = ce), typeof se != "number" && (se = 0), typeof ce != "number" && (ce = se);
        var Y = (ce - se) / (ie - se) * k;
        return O.dataRadius[ee] = Y, w.getCircleRadianPoint.apply(void 0, (0, t.default)(b).concat([Y, o[ee]]));
      });
    }), u;
  }
  function f(u, m) {
    var L = m.radarAxis;
    if (!L) return [];
    var F = L.centerPos, o = L.axisLineAngles;
    return u.forEach(function(k) {
      var b = k.dataRadius, O = k.label, W = O.labelGap;
      k.labelPosition = b.map(function(te, ee) {
        return w.getCircleRadianPoint.apply(void 0, (0, t.default)(F).concat([te + W, o[ee]]));
      });
    }), u;
  }
  function M(u, m) {
    var L = m.radarAxis;
    if (!L) return [];
    var F = (0, i.default)(L.centerPos, 2), o = F[0], k = F[1];
    return u.forEach(function(b) {
      var O = b.labelPosition, W = O.map(function(te) {
        var ee = (0, i.default)(te, 2), ie = ee[0], se = ee[1], ce = ie > o ? "left" : "right", Y = se > k ? "top" : "bottom";
        return {
          textAlign: ce,
          textBaseline: Y
        };
      });
      b.labelAlign = W;
    }), u;
  }
  function D(u) {
    var m = u.animationCurve, L = u.animationFrame, F = u.rLevel;
    return [{
      name: "polyline",
      index: F,
      animationCurve: m,
      animationFrame: L,
      shape: B(u),
      style: U(u)
    }];
  }
  function T(u, m) {
    var L = m.chart.radarAxis.centerPos, F = D(u)[0], o = F.shape.points.length, k = new Array(o).fill(0).map(function(b) {
      return (0, t.default)(L);
    });
    return F.shape.points = k, [F];
  }
  function B(u) {
    var m = u.radarPosition;
    return {
      points: m,
      close: !0
    };
  }
  function U(u) {
    var m = u.radarStyle, L = u.color, F = (0, z.getRgbaValue)(L);
    F[3] = 0.5;
    var o = {
      stroke: L,
      fill: (0, z.getColorFromRgbValue)(F)
    };
    return (0, j.deepMerge)(o, m);
  }
  function I(u, m) {
    var L = m.shape, F = u.shape.points, o = F.length, k = L.points.length;
    if (k > o) {
      var b = F.slice(-1)[0], O = new Array(k - o).fill(0).map(function(W) {
        return (0, t.default)(b);
      });
      F.push.apply(F, (0, t.default)(O));
    } else k < o && F.splice(k);
  }
  function Q(u) {
    var m = u.radarPosition, L = u.animationCurve, F = u.animationFrame, o = u.rLevel;
    return m.map(function(k, b) {
      return {
        name: "circle",
        index: o,
        animationCurve: L,
        animationFrame: F,
        visible: u.point.show,
        shape: V(u, b),
        style: $(u)
      };
    });
  }
  function K(u) {
    var m = Q(u);
    return m.forEach(function(L) {
      return L.shape.r = 0.01;
    }), m;
  }
  function V(u, m) {
    var L = u.radarPosition, F = u.point, o = F.radius, k = L[m];
    return {
      rx: k[0],
      ry: k[1],
      r: o
    };
  }
  function $(u, m) {
    var L = u.point, F = u.color, o = L.style;
    return (0, j.deepMerge)({
      stroke: F
    }, o);
  }
  function x(u) {
    var m = u.labelPosition, L = u.animationCurve, F = u.animationFrame, o = u.rLevel;
    return m.map(function(k, b) {
      return {
        name: "text",
        index: o,
        visible: u.label.show,
        animationCurve: L,
        animationFrame: F,
        shape: g(u, b),
        style: A(u, b)
      };
    });
  }
  function g(u, m) {
    var L = u.labelPosition, F = u.label, o = u.data, k = F.offset, b = F.formatter, O = N(L[m], k), W = o[m] ? o[m].toString() : "0", te = (0, n.default)(b);
    return te === "string" && (W = b.replace("{value}", W)), te === "function" && (W = b(W)), {
      content: W,
      position: O
    };
  }
  function N(u, m) {
    var L = (0, i.default)(u, 2), F = L[0], o = L[1], k = (0, i.default)(m, 2), b = k[0], O = k[1];
    return [F + b, o + O];
  }
  function A(u, m) {
    var L = u.label, F = u.color, o = u.labelAlign, k = L.style, b = X({
      fill: F
    }, o[m]);
    return (0, j.deepMerge)(b, k);
  }
  return vt;
}
var mt = {}, In;
function Sf() {
  if (In) return mt;
  In = 1;
  var e = Pe();
  Object.defineProperty(mt, "__esModule", {
    value: !0
  }), mt.gauge = q;
  var r = e(Te()), n = e(Le()), i = e(Oe()), t = e(Ae()), a = Fe(), l = ui(), w = Se(), z = Re(), j = ot;
  function E(_, v) {
    var y = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var P = Object.getOwnPropertySymbols(_);
      v && (P = P.filter(function(R) {
        return Object.getOwnPropertyDescriptor(_, R).enumerable;
      })), y.push.apply(y, P);
    }
    return y;
  }
  function X(_) {
    for (var v = 1; v < arguments.length; v++) {
      var y = arguments[v] != null ? arguments[v] : {};
      v % 2 ? E(Object(y), !0).forEach(function(P) {
        (0, r.default)(_, P, y[P]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(y)) : E(Object(y)).forEach(function(P) {
        Object.defineProperty(_, P, Object.getOwnPropertyDescriptor(y, P));
      });
    }
    return _;
  }
  function q(_) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = v.series;
    y || (y = []);
    var P = (0, z.initNeedSeries)(y, l.gaugeConfig, "gauge");
    P = G(P, _), P = f(P, _), P = M(P, _), P = D(P), P = T(P), P = B(P), P = U(P), P = I(P), P = Q(P), P = K(P), (0, a.doUpdate)({
      chart: _,
      series: P,
      key: "gaugeAxisTick",
      getGraphConfig: $
    }), (0, a.doUpdate)({
      chart: _,
      series: P,
      key: "gaugeAxisLabel",
      getGraphConfig: N
    }), (0, a.doUpdate)({
      chart: _,
      series: P,
      key: "gaugeBackgroundArc",
      getGraphConfig: m,
      getStartGraphConfig: o
    }), (0, a.doUpdate)({
      chart: _,
      series: P,
      key: "gaugeArc",
      getGraphConfig: k,
      getStartGraphConfig: W,
      beforeChange: te
    }), (0, a.doUpdate)({
      chart: _,
      series: P,
      key: "gaugePointer",
      getGraphConfig: ee,
      getStartGraphConfig: Y
    }), (0, a.doUpdate)({
      chart: _,
      series: P,
      key: "gaugeDetails",
      getGraphConfig: oe
    });
  }
  function G(_, v) {
    var y = v.render.area;
    return _.forEach(function(P) {
      var R = P.center;
      R = R.map(function(J, d) {
        return typeof J == "number" ? J : parseInt(J) / 100 * y[d];
      }), P.center = R;
    }), _;
  }
  function f(_, v) {
    var y = v.render.area, P = Math.min.apply(Math, (0, t.default)(y)) / 2;
    return _.forEach(function(R) {
      var J = R.radius;
      typeof J != "number" && (J = parseInt(J) / 100 * P), R.radius = J;
    }), _;
  }
  function M(_, v) {
    var y = v.render.area, P = Math.min.apply(Math, (0, t.default)(y)) / 2;
    return _.forEach(function(R) {
      var J = R.radius, d = R.data, S = R.arcLineWidth;
      d.forEach(function(s) {
        var h = s.radius, p = s.lineWidth;
        h || (h = J), typeof h != "number" && (h = parseInt(h) / 100 * P), s.radius = h, p || (p = S), s.lineWidth = p;
      });
    }), _;
  }
  function D(_, v) {
    return _.forEach(function(y) {
      var P = y.startAngle, R = y.endAngle, J = y.data, d = y.min, S = y.max, s = R - P, h = S - d;
      J.forEach(function(p) {
        var C = p.value, H = Math.abs((C - d) / h * s);
        p.startAngle = P, p.endAngle = P + H;
      });
    }), _;
  }
  function T(_, v) {
    return _.forEach(function(y) {
      var P = y.data;
      P.forEach(function(R) {
        var J = R.color, d = R.gradient;
        (!d || !d.length) && (d = J), d instanceof Array || (d = [d]), R.gradient = d;
      });
    }), _;
  }
  function B(_, v) {
    return _.forEach(function(y) {
      var P = y.startAngle, R = y.endAngle, J = y.splitNum, d = y.center, S = y.radius, s = y.arcLineWidth, h = y.axisTick, p = h.tickLength, C = h.style.lineWidth, H = R - P, Z = S - s / 2, ae = Z - p, ue = H / (J - 1), fe = 2 * Math.PI * S * H / (Math.PI * 2), he = Math.ceil(C / 2) / fe * H;
      y.tickAngles = [], y.tickInnerRadius = [], y.tickPosition = new Array(J).fill(0).map(function(ge, me) {
        var _e = P + ue * me;
        return me === 0 && (_e += he), me === J - 1 && (_e -= he), y.tickAngles[me] = _e, y.tickInnerRadius[me] = ae, [w.getCircleRadianPoint.apply(void 0, (0, t.default)(d).concat([Z, _e])), w.getCircleRadianPoint.apply(void 0, (0, t.default)(d).concat([ae, _e]))];
      });
    }), _;
  }
  function U(_, v) {
    return _.forEach(function(y) {
      var P = y.center, R = y.tickInnerRadius, J = y.tickAngles, d = y.axisLabel.labelGap, S = J.map(function(h, p) {
        return w.getCircleRadianPoint.apply(void 0, (0, t.default)(P).concat([R[p] - d, J[p]]));
      }), s = S.map(function(h) {
        var p = (0, i.default)(h, 2), C = p[0], H = p[1];
        return {
          textAlign: C > P[0] ? "right" : "left",
          textBaseline: H > P[1] ? "bottom" : "top"
        };
      });
      y.labelPosition = S, y.labelAlign = s;
    }), _;
  }
  function I(_, v) {
    return _.forEach(function(y) {
      var P = y.axisLabel, R = y.min, J = y.max, d = y.splitNum, S = P.data, s = P.formatter, h = (J - R) / (d - 1), p = new Array(d).fill(0).map(function(H, Z) {
        return parseInt(R + h * Z);
      }), C = (0, n.default)(s);
      S = (0, z.deepMerge)(p, S).map(function(H, Z) {
        var ae = H;
        return C === "string" && (ae = s.replace("{value}", H)), C === "function" && (ae = s({
          value: H,
          index: Z
        })), ae;
      }), P.data = S;
    }), _;
  }
  function Q(_, v) {
    return _.forEach(function(y) {
      var P = y.data, R = y.details, J = y.center, d = R.position, S = R.offset, s = P.map(function(h) {
        var p = h.startAngle, C = h.endAngle, H = h.radius, Z = null;
        return d === "center" ? Z = J : d === "start" ? Z = w.getCircleRadianPoint.apply(void 0, (0, t.default)(J).concat([H, p])) : d === "end" && (Z = w.getCircleRadianPoint.apply(void 0, (0, t.default)(J).concat([H, C]))), V(Z, S);
      });
      y.detailsPosition = s;
    }), _;
  }
  function K(_, v) {
    return _.forEach(function(y) {
      var P = y.data, R = y.details, J = R.formatter, d = (0, n.default)(J), S = P.map(function(s) {
        var h = s.value;
        return d === "string" && (h = J.replace("{value}", "{nt}"), h = h.replace("{name}", s.name)), d === "function" && (h = J(s)), h.toString();
      });
      y.detailsContent = S;
    }), _;
  }
  function V(_, v) {
    var y = (0, i.default)(_, 2), P = y[0], R = y[1], J = (0, i.default)(v, 2), d = J[0], S = J[1];
    return [P + d, R + S];
  }
  function $(_) {
    var v = _.tickPosition, y = _.animationCurve, P = _.animationFrame, R = _.rLevel;
    return v.map(function(J, d) {
      return {
        name: "polyline",
        index: R,
        visible: _.axisTick.show,
        animationCurve: y,
        animationFrame: P,
        shape: x(_, d),
        style: g(_)
      };
    });
  }
  function x(_, v) {
    var y = _.tickPosition;
    return {
      points: y[v]
    };
  }
  function g(_, v) {
    var y = _.axisTick.style;
    return y;
  }
  function N(_) {
    var v = _.labelPosition, y = _.animationCurve, P = _.animationFrame, R = _.rLevel;
    return v.map(function(J, d) {
      return {
        name: "text",
        index: R,
        visible: _.axisLabel.show,
        animationCurve: y,
        animationFrame: P,
        shape: A(_, d),
        style: u(_, d)
      };
    });
  }
  function A(_, v) {
    var y = _.labelPosition, P = _.axisLabel.data;
    return {
      content: P[v].toString(),
      position: y[v]
    };
  }
  function u(_, v) {
    var y = _.labelAlign, P = _.axisLabel, R = P.style;
    return (0, z.deepMerge)(X({}, y[v]), R);
  }
  function m(_) {
    var v = _.animationCurve, y = _.animationFrame, P = _.rLevel;
    return [{
      name: "arc",
      index: P,
      visible: _.backgroundArc.show,
      animationCurve: v,
      animationFrame: y,
      shape: L(_),
      style: F(_)
    }];
  }
  function L(_) {
    var v = _.startAngle, y = _.endAngle, P = _.center, R = _.radius;
    return {
      rx: P[0],
      ry: P[1],
      r: R,
      startAngle: v,
      endAngle: y
    };
  }
  function F(_) {
    var v = _.backgroundArc, y = _.arcLineWidth, P = v.style;
    return (0, z.deepMerge)({
      lineWidth: y
    }, P);
  }
  function o(_) {
    var v = m(_)[0], y = X({}, v.shape);
    return y.endAngle = v.shape.startAngle, v.shape = y, [v];
  }
  function k(_) {
    var v = _.data, y = _.animationCurve, P = _.animationFrame, R = _.rLevel;
    return v.map(function(J, d) {
      return {
        name: "agArc",
        index: R,
        animationCurve: y,
        animationFrame: P,
        shape: b(_, d),
        style: O(_, d)
      };
    });
  }
  function b(_, v) {
    var y = _.data, P = _.center, R = _.endAngle, J = y[v], d = J.radius, S = J.startAngle, s = J.endAngle, h = J.localGradient;
    return h && (R = s), {
      rx: P[0],
      ry: P[1],
      r: d,
      startAngle: S,
      endAngle: s,
      gradientEndAngle: R
    };
  }
  function O(_, v) {
    var y = _.data, P = _.dataItemStyle, R = y[v], J = R.lineWidth, d = R.gradient;
    return d = d.map(function(S) {
      return (0, j.getRgbaValue)(S);
    }), (0, z.deepMerge)({
      lineWidth: J,
      gradient: d
    }, P);
  }
  function W(_) {
    var v = k(_);
    return v.map(function(y) {
      var P = X({}, y.shape);
      P.endAngle = y.shape.startAngle, y.shape = P;
    }), v;
  }
  function te(_, v) {
    var y = _.style.gradient, P = y.length, R = v.style.gradient.length;
    if (P > R)
      y.splice(R);
    else {
      var J = y.slice(-1)[0];
      y.push.apply(y, (0, t.default)(new Array(R - P).fill(0).map(function(d) {
        return (0, t.default)(J);
      })));
    }
  }
  function ee(_) {
    var v = _.animationCurve, y = _.animationFrame, P = _.center, R = _.rLevel;
    return [{
      name: "polyline",
      index: R,
      visible: _.pointer.show,
      animationCurve: v,
      animationFrame: y,
      shape: ie(_),
      style: se(_),
      setGraphCenter: function(d, S) {
        S.style.graphCenter = P;
      }
    }];
  }
  function ie(_) {
    var v = _.center;
    return {
      points: ce(v),
      close: !0
    };
  }
  function se(_) {
    var v = _.startAngle, y = _.endAngle, P = _.min, R = _.max, J = _.data, d = _.pointer, S = _.center, s = d.valueIndex, h = d.style, p = J[s] ? J[s].value : 0, C = (p - P) / (R - P) * (y - v) + v + Math.PI / 2;
    return (0, z.deepMerge)({
      rotate: (0, z.radianToAngle)(C),
      scale: [1, 1],
      graphCenter: S
    }, h);
  }
  function ce(_) {
    var v = (0, i.default)(_, 2), y = v[0], P = v[1], R = [y, P - 40], J = [y + 5, P], d = [y, P + 10], S = [y - 5, P];
    return [R, J, d, S];
  }
  function Y(_) {
    var v = _.startAngle, y = ee(_)[0];
    return y.style.rotate = (0, z.radianToAngle)(v + Math.PI / 2), [y];
  }
  function oe(_) {
    var v = _.detailsPosition, y = _.animationCurve, P = _.animationFrame, R = _.rLevel, J = _.details.show;
    return v.map(function(d, S) {
      return {
        name: "numberText",
        index: R,
        visible: J,
        animationCurve: y,
        animationFrame: P,
        shape: le(_, S),
        style: de(_, S)
      };
    });
  }
  function le(_, v) {
    var y = _.detailsPosition, P = _.detailsContent, R = _.data, J = _.details, d = y[v], S = P[v], s = R[v].value, h = J.valueToFixed;
    return {
      number: [s],
      content: S,
      position: d,
      toFixed: h
    };
  }
  function de(_, v) {
    var y = _.details, P = _.data, R = y.style, J = P[v].color;
    return (0, z.deepMerge)({
      fill: J
    }, R);
  }
  return mt;
}
var yt = {}, Hn;
function Lf() {
  if (Hn) return yt;
  Hn = 1;
  var e = Pe();
  Object.defineProperty(yt, "__esModule", {
    value: !0
  }), yt.legend = z;
  var r = e(Te()), n = e(Oe()), i = e(Le()), t = Fe(), a = Se(), l = We(), w = Re();
  function z(o) {
    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, b = k.legend;
    b ? (b = (0, w.deepMerge)((0, a.deepClone)(l.legendConfig, !0), b), b = j(b), b = E(b, k, o), b = X(b, o), b = f(b, o), b = [b]) : b = [], (0, t.doUpdate)({
      chart: o,
      series: b,
      key: "legendIcon",
      getGraphConfig: x
    }), (0, t.doUpdate)({
      chart: o,
      series: b,
      key: "legendText",
      getGraphConfig: A
    });
  }
  function j(o) {
    var k = o.data;
    return o.data = k.map(function(b) {
      var O = (0, i.default)(b);
      return O === "string" ? {
        name: b
      } : O === "object" ? b : {
        name: ""
      };
    }), o;
  }
  function E(o, k, b) {
    var O = k.series, W = b.legendStatus, te = o.data.filter(function(ee) {
      var ie = ee.name, se = O.find(function(ce) {
        var Y = ce.name;
        return ie === Y;
      });
      return se ? (ee.color || (ee.color = se.color), ee.icon || (ee.icon = se.type), ee) : !1;
    });
    return (!W || W.length !== o.data.length) && (W = new Array(o.data.length).fill(!0)), te.forEach(function(ee, ie) {
      return ee.status = W[ie];
    }), o.data = te, b.legendStatus = W, o;
  }
  function X(o, k) {
    var b = k.render.ctx, O = o.data, W = o.textStyle, te = o.textUnselectedStyle;
    return O.forEach(function(ee) {
      var ie = ee.status, se = ee.name;
      ee.textWidth = q(b, se, ie ? W : te);
    }), o;
  }
  function q(o, k, b) {
    return o.font = G(b), o.measureText(k).width;
  }
  function G(o) {
    var k = o.fontFamily, b = o.fontSize;
    return "".concat(b, "px ").concat(k);
  }
  function f(o, k) {
    var b = o.orient;
    return b === "vertical" ? Q(o, k) : M(o, k), o;
  }
  function M(o, k) {
    var b = o.iconHeight, O = o.itemGap, W = D(o, k), te = W.map(function(se) {
      return B(se, o, k);
    }), ee = U(o, k), ie = {
      textAlign: "left",
      textBaseline: "middle"
    };
    W.forEach(function(se, ce) {
      return se.forEach(function(Y) {
        var oe = Y.iconPosition, le = Y.textPosition, de = te[ce], _ = ee + ce * (O + b);
        Y.iconPosition = I(oe, [de, _]), Y.textPosition = I(le, [de, _]), Y.align = ie;
      });
    });
  }
  function D(o, k) {
    var b = o.data, O = o.iconWidth, W = k.render.area[0], te = 0, ee = [[]];
    return b.forEach(function(ie, se) {
      var ce = T(te, se, o), Y = ce + O + 5 + ie.textWidth;
      Y >= W && (te = se, ce = T(te, se, o), ee.push([])), ie.iconPosition = [ce, 0], ie.textPosition = [ce + O + 5, 0], ee.slice(-1)[0].push(ie);
    }), ee;
  }
  function T(o, k, b) {
    var O = b.data, W = b.iconWidth, te = b.itemGap, ee = O.slice(o, k);
    return (0, w.mulAdd)(ee.map(function(ie) {
      var se = ie.textWidth;
      return se;
    })) + (k - o) * (te + 5 + W);
  }
  function B(o, k, b) {
    var O = k.left, W = k.right, te = k.iconWidth, ee = k.itemGap, ie = b.render.area[0], se = o.length, ce = (0, w.mulAdd)(o.map(function(oe) {
      var le = oe.textWidth;
      return le;
    })) + se * (5 + te) + (se - 1) * ee, Y = [O, W].findIndex(function(oe) {
      return oe !== "auto";
    });
    return Y === -1 ? (ie - ce) / 2 : Y === 0 ? typeof O == "number" ? O : parseInt(O) / 100 * ie : (typeof W != "number" && (W = parseInt(W) / 100 * ie), ie - (ce + W));
  }
  function U(o, k) {
    var b = o.top, O = o.bottom, W = o.iconHeight, te = k.render.area[1], ee = [b, O].findIndex(function(oe) {
      return oe !== "auto";
    }), ie = W / 2;
    if (ee === -1) {
      var se = k.gridArea, ce = se.y, Y = se.h;
      return ce + Y + 45 - ie;
    } else return ee === 0 ? typeof b == "number" ? b - ie : parseInt(b) / 100 * te - ie : (typeof O != "number" && (O = parseInt(O) / 100 * te), te - O - ie);
  }
  function I(o, k) {
    var b = (0, n.default)(o, 2), O = b[0], W = b[1], te = (0, n.default)(k, 2), ee = te[0], ie = te[1];
    return [O + ee, W + ie];
  }
  function Q(o, k) {
    var b = K(o, k), O = (0, n.default)(b, 2), W = O[0], te = O[1], ee = V(o, k);
    $(o, W);
    var ie = {
      textAlign: "left",
      textBaseline: "middle"
    };
    o.data.forEach(function(se) {
      var ce = se.textPosition, Y = se.iconPosition;
      se.textPosition = I(ce, [te, ee]), se.iconPosition = I(Y, [te, ee]), se.align = ie;
    });
  }
  function K(o, k) {
    var b = o.left, O = o.right, W = k.render.area[0], te = [b, O].findIndex(function(ie) {
      return ie !== "auto";
    });
    if (te === -1)
      return [!0, W - 10];
    var ee = [b, O][te];
    return typeof ee != "number" && (ee = parseInt(ee) / 100 * W), [!!te, ee];
  }
  function V(o, k) {
    var b = o.iconHeight, O = o.itemGap, W = o.data, te = o.top, ee = o.bottom, ie = k.render.area[1], se = W.length, ce = se * b + (se - 1) * O, Y = [te, ee].findIndex(function(le) {
      return le !== "auto";
    });
    if (Y === -1)
      return (ie - ce) / 2;
    var oe = [te, ee][Y];
    return typeof oe != "number" && (oe = parseInt(oe) / 100 * ie), Y === 1 && (oe = ie - oe - ce), oe;
  }
  function $(o, k) {
    var b = o.data, O = o.iconWidth, W = o.iconHeight, te = o.itemGap, ee = W / 2;
    b.forEach(function(ie, se) {
      var ce = ie.textWidth, Y = (W + te) * se + ee, oe = k ? 0 - O : 0, le = k ? oe - 5 - ce : O + 5;
      ie.iconPosition = [oe, Y], ie.textPosition = [le, Y];
    });
  }
  function x(o, k) {
    var b = o.data, O = o.selectAble, W = o.animationCurve, te = o.animationFrame, ee = o.rLevel;
    return b.map(function(ie, se) {
      return (0, r.default)({
        name: ie.icon === "line" ? "lineIcon" : "rect",
        index: ee,
        visible: o.show,
        hover: O,
        click: O,
        animationCurve: W,
        animationFrame: te,
        shape: g(o, se),
        style: N(o, se)
      }, "click", F(o, se, k));
    });
  }
  function g(o, k) {
    var b = o.data, O = o.iconWidth, W = o.iconHeight, te = (0, n.default)(b[k].iconPosition, 2), ee = te[0], ie = te[1], se = W / 2;
    return {
      x: ee,
      y: ie - se,
      w: O,
      h: W
    };
  }
  function N(o, k) {
    var b = o.data, O = o.iconStyle, W = o.iconUnselectedStyle, te = b[k], ee = te.status, ie = te.color, se = ee ? O : W;
    return (0, w.deepMerge)({
      fill: ie
    }, se);
  }
  function A(o, k) {
    var b = o.data, O = o.selectAble, W = o.animationCurve, te = o.animationFrame, ee = o.rLevel;
    return b.map(function(ie, se) {
      return {
        name: "text",
        index: ee,
        visible: o.show,
        hover: O,
        animationCurve: W,
        animationFrame: te,
        hoverRect: L(o, se),
        shape: u(o, se),
        style: m(o, se),
        click: F(o, se, k)
      };
    });
  }
  function u(o, k) {
    var b = o.data[k], O = b.textPosition, W = b.name;
    return {
      content: W,
      position: O
    };
  }
  function m(o, k) {
    var b = o.textStyle, O = o.textUnselectedStyle, W = o.data[k], te = W.status, ee = W.align, ie = te ? b : O;
    return (0, w.deepMerge)((0, a.deepClone)(ie, !0), ee);
  }
  function L(o, k) {
    var b = o.textStyle, O = o.textUnselectedStyle, W = o.data[k], te = W.status, ee = (0, n.default)(W.textPosition, 2), ie = ee[0], se = ee[1], ce = W.textWidth, Y = te ? b : O, oe = Y.fontSize;
    return [ie, se - oe / 2, ce, oe];
  }
  function F(o, k, b) {
    var O = o.data[k].name;
    return function() {
      var W = b.chart, te = W.legendStatus, ee = W.option, ie = !te[k], se = ee.series.find(function(ce) {
        var Y = ce.name;
        return Y === O;
      });
      se.show = ie, te[k] = ie, b.chart.setOption(ee);
    };
  }
  return yt;
}
var Vn;
function Of() {
  return Vn || (Vn = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "mergeColor", {
      enumerable: !0,
      get: function() {
        return r.mergeColor;
      }
    }), Object.defineProperty(e, "title", {
      enumerable: !0,
      get: function() {
        return n.title;
      }
    }), Object.defineProperty(e, "grid", {
      enumerable: !0,
      get: function() {
        return i.grid;
      }
    }), Object.defineProperty(e, "axis", {
      enumerable: !0,
      get: function() {
        return t.axis;
      }
    }), Object.defineProperty(e, "line", {
      enumerable: !0,
      get: function() {
        return a.line;
      }
    }), Object.defineProperty(e, "bar", {
      enumerable: !0,
      get: function() {
        return l.bar;
      }
    }), Object.defineProperty(e, "pie", {
      enumerable: !0,
      get: function() {
        return w.pie;
      }
    }), Object.defineProperty(e, "radarAxis", {
      enumerable: !0,
      get: function() {
        return z.radarAxis;
      }
    }), Object.defineProperty(e, "radar", {
      enumerable: !0,
      get: function() {
        return j.radar;
      }
    }), Object.defineProperty(e, "gauge", {
      enumerable: !0,
      get: function() {
        return E.gauge;
      }
    }), Object.defineProperty(e, "legend", {
      enumerable: !0,
      get: function() {
        return X.legend;
      }
    });
    var r = bf(), n = Cf(), i = wf(), t = Pf(), a = kf(), l = $f(), w = _f(), z = xf(), j = Af(), E = Sf(), X = Lf();
  }(Cr)), Cr;
}
var Un;
function Gf() {
  return Un || (Un = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var n = r(Le()), i = r(it());
    si();
    var t = r(_r()), a = Se(), l = Of(), w = function z(j) {
      if ((0, i.default)(this, z), !j)
        return console.error("Charts Missing parameters!"), !1;
      var E = j.clientWidth, X = j.clientHeight, q = document.createElement("canvas");
      q.setAttribute("width", E), q.setAttribute("height", X), j.appendChild(q);
      var G = {
        container: j,
        canvas: q,
        render: new t.default(q),
        option: null
      };
      Object.assign(this, G);
    };
    e.default = w, w.prototype.setOption = function(z) {
      var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
      if (!z || (0, n.default)(z) !== "object")
        return console.error("setOption Missing parameters!"), !1;
      j && this.render.graphs.forEach(function(X) {
        return X.animationEnd();
      });
      var E = (0, a.deepClone)(z, !0);
      (0, l.mergeColor)(this, E), (0, l.grid)(this, E), (0, l.axis)(this, E), (0, l.radarAxis)(this, E), (0, l.title)(this, E), (0, l.bar)(this, E), (0, l.line)(this, E), (0, l.pie)(this, E), (0, l.radar)(this, E), (0, l.gauge)(this, E), (0, l.legend)(this, E), this.option = z, this.render.launchAnimation();
    }, w.prototype.resize = function() {
      var z = this.container, j = this.canvas, E = this.render, X = this.option, q = z.clientWidth, G = z.clientHeight;
      j.setAttribute("width", q), j.setAttribute("height", G), E.area = [q, G], this.setOption(X);
    };
  }(tr)), tr;
}
var Xn;
function Rf() {
  return Xn || (Xn = 1, function(e) {
    var r = Pe();
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "changeDefaultConfig", {
      enumerable: !0,
      get: function() {
        return i.changeDefaultConfig;
      }
    }), e.default = void 0;
    var n = r(Gf()), i = We(), t = n.default;
    e.default = t;
  }(er)), er;
}
var Mf = Rf();
const di = /* @__PURE__ */ Zn(Mf), Df = {
  name: "DvCharts",
  mixins: [be],
  props: {
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    const e = De();
    return {
      ref: `charts-container-${e}`,
      chartRef: `chart-${e}`,
      chart: null
    };
  },
  watch: {
    option() {
      let { chart: e, option: r } = this;
      e && (r || (r = {}), e.setOption(r, !0));
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { initChart: e } = this;
      e();
    },
    initChart() {
      const { $refs: e, chartRef: r, option: n } = this, i = this.chart = new di(e[r]);
      n && i.setOption(n);
    },
    onResize() {
      const { chart: e } = this;
      e && e.resize();
    }
  }
};
function Tf(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-charts-container",
    ref: t.ref
  }, [
    c("div", {
      class: "charts-canvas-container",
      ref: t.chartRef
    }, null, 512)
  ], 512);
}
const Qn = /* @__PURE__ */ ye(Df, [["render", Tf]]), Wf = {
  install: (e) => {
    e.component(Qn.name, Qn);
  }
};
var Ff = _r();
const fi = /* @__PURE__ */ Zn(Ff);
si();
const Bf = {
  name: "DvDigitalFlop",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      renderer: null,
      defaultConfig: {
        /**
         * @description Number for digital flop
         * @type {Array<Number>}
         * @default number = []
         * @example number = [10]
         */
        number: [],
        /**
         * @description Content formatter
         * @type {String}
         * @default content = ''
         * @example content = '{nt}个'
         */
        content: "",
        /**
         * @description Number toFixed
         * @type {Number}
         * @default toFixed = 0
         */
        toFixed: 0,
        /**
         * @description Text align
         * @type {String}
         * @default textAlign = 'center'
         * @example textAlign = 'center' | 'left' | 'right'
         */
        textAlign: "center",
        /**
         * @description rowGap
         * @type {Number}
         @default rowGap = 0
         */
        rowGap: 0,
        /**
         * @description Text style configuration
         * @type {Object} {CRender Class Style}
         */
        style: {
          fontSize: 30,
          fill: "#3de7c9"
        },
        /**
         * @description Number formatter
         * @type {Null|Function}
         */
        formatter: void 0,
        /**
         * @description CRender animationCurve
         * @type {String}
         * @default animationCurve = 'easeOutCubic'
         */
        animationCurve: "easeOutCubic",
        /**
         * @description CRender animationFrame
         * @type {String}
         * @default animationFrame = 50
         */
        animationFrame: 50
      },
      mergedConfig: null,
      graph: null
    };
  },
  watch: {
    config() {
      const { update: e } = this;
      e();
    }
  },
  methods: {
    init() {
      const { initRender: e, mergeConfig: r, initGraph: n } = this;
      e(), r(), n();
    },
    initRender() {
      const { $refs: e } = this;
      this.renderer = new fi(e["digital-flop"]);
    },
    mergeConfig() {
      const { defaultConfig: e, config: r } = this;
      this.mergedConfig = ve.deepMerge(pe.deepClone(e, !0), r || {});
    },
    initGraph() {
      const { getShape: e, getStyle: r, renderer: n, mergedConfig: i } = this, { animationCurve: t, animationFrame: a } = i, l = e(), w = r();
      this.graph = n.add({
        name: "numberText",
        animationCurve: t,
        animationFrame: a,
        shape: l,
        style: w
      });
    },
    getShape() {
      const { number: e, content: r, toFixed: n, textAlign: i, rowGap: t, formatter: a } = this.mergedConfig, [l, w] = this.renderer.area, z = [l / 2, w / 2];
      return i === "left" && (z[0] = 0), i === "right" && (z[0] = l), {
        number: e,
        content: r,
        toFixed: n,
        position: z,
        rowGap: t,
        formatter: a
      };
    },
    getStyle() {
      const { style: e, textAlign: r } = this.mergedConfig;
      return ve.deepMerge(e, {
        textAlign: r,
        textBaseline: "middle"
      });
    },
    update() {
      const { mergeConfig: e, mergeShape: r, getShape: n, getStyle: i, graph: t, mergedConfig: a } = this;
      if (t.animationEnd(), e(), !t) return;
      const { animationCurve: l, animationFrame: w } = a, z = n(), j = i();
      r(t, z), t.animationCurve = l, t.animationFrame = w, t.animation("style", j, !0), t.animation("shape", z);
    },
    mergeShape(e, r) {
      const n = e.shape.number.length, i = r.number.length;
      n !== i && (e.shape.number = r.number);
    }
  },
  mounted() {
    const { init: e } = this;
    e();
  }
}, Nf = { class: "dv-digital-flop" }, jf = { ref: "digital-flop" };
function Ef(e, r, n, i, t, a) {
  return ne(), re("div", Nf, [
    c("canvas", jf, null, 512)
  ]);
}
const et = /* @__PURE__ */ ye(Bf, [["render", Ef]]), qf = {
  name: "DvActiveRingChart",
  components: {
    dvDigitalFlop: et
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      defaultConfig: {
        /**
         * @description Ring radius
         * @type {String|Number}
         * @default radius = '50%'
         * @example radius = '50%' | 100
         */
        radius: "50%",
        /**
         * @description Active ring radius
         * @type {String|Number}
         * @default activeRadius = '55%'
         * @example activeRadius = '55%' | 110
         */
        activeRadius: "55%",
        /**
         * @description Ring data
         * @type {Array<Object>}
         * @default data = [{ name: '', value: 0 }]
         */
        data: [{ name: "", value: 0 }],
        /**
         * @description Ring line width
         * @type {Number}
         * @default lineWidth = 20
         */
        lineWidth: 20,
        /**
         * @description Active time gap (ms)
         * @type {Number}
         * @default activeTimeGap = 3000
         */
        activeTimeGap: 3e3,
        /**
         * @description Ring color (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default color = [Charts Default Color]
         * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        color: [],
        /**
         * @description Digital flop style
         * @type {Object}
         */
        digitalFlopStyle: {
          fontSize: 25,
          fill: "#fff"
        },
        /**
         * @description Digital flop toFixed
         * @type {Number}
         */
        digitalFlopToFixed: 0,
        /**
         * @description Digital flop unit
         * @type {String}
         */
        digitalFlopUnit: "",
        /**
         * @description CRender animationCurve
         * @type {String}
         * @default animationCurve = 'easeOutCubic'
         */
        animationCurve: "easeOutCubic",
        /**
         * @description CRender animationFrame
         * @type {String}
         * @default animationFrame = 50
         */
        animationFrame: 50,
        /**
         * @description showOriginValue
         * @type {Boolean}
         * @default showOriginValue = false
         */
        showOriginValue: !1
      },
      mergedConfig: null,
      chart: null,
      activeIndex: 0,
      animationHandler: ""
    };
  },
  computed: {
    digitalFlop() {
      const { mergedConfig: e, activeIndex: r } = this;
      if (!e) return {};
      const {
        digitalFlopStyle: n,
        digitalFlopToFixed: i,
        data: t,
        showOriginValue: a,
        digitalFlopUnit: l
      } = e, w = t.map(({ value: j }) => j);
      let z;
      if (a)
        z = w[r];
      else {
        const j = w.reduce((X, q) => X + q, 0);
        z = parseFloat(w[r] / j * 100) || 0;
      }
      return {
        content: a ? `{nt}${l}` : `{nt}${l || "%"}`,
        number: [z],
        style: n,
        toFixed: i
      };
    },
    ringName() {
      const { mergedConfig: e, activeIndex: r } = this;
      return e ? e.data[r].name : "";
    },
    fontSize() {
      const { mergedConfig: e } = this;
      return e ? `font-size: ${e.digitalFlopStyle.fontSize}px;` : "";
    }
  },
  watch: {
    config() {
      const { animationHandler: e, mergeConfig: r, setRingOption: n } = this;
      clearTimeout(e), this.activeIndex = 0, r(), n();
    }
  },
  methods: {
    init() {
      const { initChart: e, mergeConfig: r, setRingOption: n } = this;
      e(), r(), n();
    },
    initChart() {
      const { $refs: e } = this;
      this.chart = new di(e["active-ring-chart"]);
    },
    mergeConfig() {
      const { defaultConfig: e, config: r } = this;
      this.mergedConfig = ve.deepMerge(
        pe.deepClone(e, !0),
        r || {}
      );
    },
    setRingOption() {
      const { getRingOption: e, chart: r, ringAnimation: n } = this, i = e();
      r.setOption(i, !0), n();
    },
    getRingOption() {
      const { mergedConfig: e, getRealRadius: r } = this, n = r();
      return e.data.forEach((i) => {
        i.radius = n;
      }), {
        series: [
          {
            type: "pie",
            ...e,
            outsideLabel: {
              show: !1
            }
          }
        ],
        color: e.color
      };
    },
    getRealRadius(e = !1) {
      const { mergedConfig: r, chart: n } = this, { radius: i, activeRadius: t, lineWidth: a } = r, l = Math.min(...n.render.area) / 2, w = a / 2;
      let z = e ? t : i;
      typeof z != "number" && (z = parseInt(z) / 100 * l);
      const j = z - w, E = z + w;
      return [j, E];
    },
    ringAnimation() {
      let { activeIndex: e, getRingOption: r, chart: n, getRealRadius: i } = this;
      const t = i(), a = i(!0), l = r(), { data: w } = l.series[0];
      w.forEach((j, E) => {
        E === e ? j.radius = a : j.radius = t;
      }), n.setOption(l, !0);
      const { activeTimeGap: z } = l.series[0];
      this.animationHandler = setTimeout((j) => {
        e += 1, e >= w.length && (e = 0), this.activeIndex = e, this.ringAnimation();
      }, z);
    }
  },
  mounted() {
    const { init: e } = this;
    e();
  },
  beforeDestroy() {
    const { animationHandler: e } = this;
    clearTimeout(e);
  }
}, zf = { class: "dv-active-ring-chart" }, If = {
  class: "active-ring-chart-container",
  ref: "active-ring-chart"
}, Hf = { class: "active-ring-info" };
function Vf(e, r, n, i, t, a) {
  const l = pi("dv-digital-flop");
  return ne(), re("div", zf, [
    c("div", If, null, 512),
    c("div", Hf, [
      vi(l, { config: a.digitalFlop }, null, 8, ["config"]),
      c("div", {
        class: "active-ring-name",
        style: $e(a.fontSize)
      }, Ge(a.ringName), 5)
    ])
  ]);
}
const Yn = /* @__PURE__ */ ye(qf, [["render", Vf]]), Uf = {
  install: (e) => {
    e.component(Yn.name, Yn);
  }
}, Xf = {
  name: "DvCapsuleChart",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      defaultConfig: {
        /**
         * @description Capsule chart data
         * @type {Array<Object>}
         * @default data = []
         * @example data = [{ name: 'foo1', value: 100 }, { name: 'foo2', value: 100 }]
         */
        data: [],
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default color = ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f', '#fb7293']
         * @example color = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: [
          "#37a2da",
          "#32c5e9",
          "#67e0e3",
          "#9fe6b8",
          "#ffdb5c",
          "#ff9f7f",
          "#fb7293"
        ],
        /**
         * @description Chart unit
         * @type {String}
         * @default unit = ''
         */
        unit: "",
        /**
         * @description Show item value
         * @type {Boolean}
         * @default showValue = false
         */
        showValue: !1
      },
      mergedConfig: null,
      capsuleLength: [],
      capsuleValue: [],
      labelData: [],
      labelDataLength: []
    };
  },
  watch: {
    config() {
      const { calcData: e } = this;
      e();
    }
  },
  methods: {
    calcData() {
      const { mergeConfig: e, calcCapsuleLengthAndLabelData: r } = this;
      e(), r();
    },
    mergeConfig() {
      let { config: e, defaultConfig: r } = this;
      this.mergedConfig = ve.deepMerge(
        pe.deepClone(r, !0),
        e || {}
      );
    },
    calcCapsuleLengthAndLabelData() {
      const { data: e } = this.mergedConfig;
      if (!e.length) return;
      const r = e.map(({ value: a }) => a), n = Math.max(...r);
      this.capsuleValue = r, this.capsuleLength = r.map((a) => n ? a / n : 0);
      const i = n / 5, t = Array.from(
        new Set(new Array(6).fill(0).map((a, l) => Math.ceil(l * i)))
      );
      this.labelData = t, this.labelDataLength = Array.from(t).map(
        (a) => n ? a / n : 0
      );
    }
  },
  mounted() {
    const { calcData: e } = this;
    e();
  }
}, Qf = { class: "dv-capsule-chart" }, Yf = { class: "label-column" }, Kf = { class: "capsule-container" }, Jf = {
  key: 0,
  class: "capsule-item-value"
}, Zf = { class: "unit-label" }, ec = {
  key: 0,
  class: "unit-text"
};
function tc(e, r, n, i, t, a) {
  return ne(), re("div", Qf, [
    t.mergedConfig ? (ne(), re(we, { key: 0 }, [
      c("div", Yf, [
        (ne(!0), re(we, null, ke(t.mergedConfig.data, (l) => (ne(), re("div", {
          key: l.name
        }, Ge(l.name), 1))), 128)),
        r[0] || (r[0] = c("div", null, " ", -1))
      ]),
      c("div", Kf, [
        (ne(!0), re(we, null, ke(t.capsuleLength, (l, w) => (ne(), re("div", {
          class: "capsule-item",
          key: w
        }, [
          c("div", {
            class: "capsule-item-column",
            style: $e(`width: ${l * 100}%; background-color: ${t.mergedConfig.colors[w % t.mergedConfig.colors.length]};`)
          }, [
            t.mergedConfig.showValue ? (ne(), re("div", Jf, Ge(t.capsuleValue[w]), 1)) : Ce("", !0)
          ], 4)
        ]))), 128)),
        c("div", Zf, [
          (ne(!0), re(we, null, ke(t.labelData, (l, w) => (ne(), re("div", {
            key: l + w
          }, Ge(l), 1))), 128))
        ])
      ]),
      t.mergedConfig.unit ? (ne(), re("div", ec, Ge(t.mergedConfig.unit), 1)) : Ce("", !0)
    ], 64)) : Ce("", !0)
  ]);
}
const Kn = /* @__PURE__ */ ye(Xf, [["render", tc]]), rc = {
  install: (e) => {
    e.component(Kn.name, Kn);
  }
}, nc = {
  name: "DvWaterLevelPond",
  props: {
    config: Object,
    default: () => ({})
  },
  data() {
    return {
      gradientId: `water-level-pond-${De()}`,
      defaultConfig: {
        /**
         * @description Data
         * @type {Array<Number>}
         * @default data = []
         * @example data = [60, 40]
         */
        data: [],
        /**
         * @description Shape of wanter level pond
         * @type {String}
         * @default shape = 'rect'
         * @example shape = 'rect' | 'roundRect' | 'round'
         */
        shape: "rect",
        /**
         * @description Water wave number
         * @type {Number}
         * @default waveNum = 3
         */
        waveNum: 3,
        /**
         * @description Water wave height (px)
         * @type {Number}
         * @default waveHeight = 40
         */
        waveHeight: 40,
        /**
         * @description Wave opacity
         * @type {Number}
         * @default waveOpacity = 0.4
         */
        waveOpacity: 0.4,
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00BAFF', '#3DE7C9']
         * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ["#3DE7C9", "#00BAFF"],
        /**
         * @description Formatter
         * @type {String}
         * @default formatter = '{value}%'
         */
        formatter: "{value}%"
      },
      mergedConfig: {},
      renderer: null,
      svgBorderGradient: [],
      details: "",
      waves: [],
      animation: !1
    };
  },
  computed: {
    radius() {
      const { shape: e } = this.mergedConfig;
      return e === "round" ? "50%" : e === "rect" ? "0" : e === "roundRect" ? "10px" : "0";
    },
    shape() {
      const { shape: e } = this.mergedConfig;
      return e || "rect";
    }
  },
  watch: {
    config() {
      const { calcData: e, renderer: r } = this;
      r.delAllGraph(), this.waves = [], setTimeout(e, 0);
    }
  },
  methods: {
    init() {
      const { initRender: e, config: r, calcData: n } = this;
      e(), r && n();
    },
    initRender() {
      const { $refs: e } = this;
      this.renderer = new fi(e["water-pond-level"]);
    },
    calcData() {
      const { mergeConfig: e, calcSvgBorderGradient: r, calcDetails: n } = this;
      e(), r(), n();
      const { addWave: i, animationWave: t } = this;
      i(), t();
    },
    mergeConfig() {
      const { config: e, defaultConfig: r } = this;
      this.mergedConfig = ve.deepMerge(pe.deepClone(r, !0), e);
    },
    calcSvgBorderGradient() {
      const { colors: e } = this.mergedConfig, n = 100 / (e.length - 1);
      this.svgBorderGradient = e.map((i, t) => [n * t, i]);
    },
    calcDetails() {
      const { data: e, formatter: r } = this.mergedConfig;
      if (!e.length) {
        this.details = "";
        return;
      }
      const n = Math.max(...e);
      this.details = r.replace("{value}", n);
    },
    addWave() {
      const { renderer: e, getWaveShapes: r, getWaveStyle: n, drawed: i } = this, t = r(), a = n();
      this.waves = t.map((l) => e.add({
        name: "smoothline",
        animationFrame: 300,
        shape: l,
        style: a,
        drawed: i
      }));
    },
    getWaveShapes() {
      const { mergedConfig: e, renderer: r, mergeOffset: n } = this, { waveNum: i, waveHeight: t, data: a } = e, [l, w] = r.area, z = i * 4 + 4, j = l / i / 2;
      return a.map((E) => {
        let X = new Array(z).fill(0).map((q, G) => {
          const f = l - j * G, M = (1 - E / 100) * w, D = G % 2 === 0 ? M : M - t;
          return [f, D];
        });
        return X = X.map((q) => n(q, [j * 2, 0])), { points: X };
      });
    },
    mergeOffset([e, r], [n, i]) {
      return [e + n, r + i];
    },
    getWaveStyle() {
      const { renderer: e, mergedConfig: r } = this, n = e.area[1];
      return {
        gradientColor: r.colors,
        gradientType: "linear",
        gradientParams: [0, 0, 0, n],
        gradientWith: "fill",
        opacity: r.waveOpacity,
        translate: [0, 0]
      };
    },
    drawed({ shape: { points: e } }, { ctx: r, area: n }) {
      const i = e[0], t = e.slice(-1)[0], a = n[1];
      r.lineTo(t[0], a), r.lineTo(i[0], a), r.closePath(), r.fill();
    },
    async animationWave(e = 1) {
      const { waves: r, renderer: n, animation: i } = this;
      if (i) return;
      this.animation = !0;
      const t = n.area[0];
      r.forEach((a) => {
        a.attr("style", { translate: [0, 0] }), a.animation("style", {
          translate: [t, 0]
        }, !0);
      }), await n.launchAnimation(), this.animation = !1, n.graphs.length && this.animationWave(e + 1);
    }
  },
  mounted() {
    const { init: e } = this;
    e();
  },
  beforeDestroy() {
    const { renderer: e } = this;
    e.delAllGraph(), this.waves = [];
  }
}, ic = { class: "dv-water-pond-level" }, oc = { key: 0 }, ac = ["id"], sc = ["offset", "stop-color"], lc = ["stroke", "fill", "x", "y"], uc = ["cx", "cy", "rx", "ry", "stroke"], dc = ["rx", "ry", "width", "height", "stroke"];
function fc(e, r, n, i, t, a) {
  return ne(), re("div", ic, [
    t.renderer ? (ne(), re("svg", oc, [
      c("defs", null, [
        c("linearGradient", {
          id: t.gradientId,
          x1: "0%",
          y1: "0%",
          x2: "0%",
          y2: "100%"
        }, [
          (ne(!0), re(we, null, ke(t.svgBorderGradient, (l) => (ne(), re("stop", {
            key: l[0],
            offset: l[0],
            "stop-color": l[1]
          }, null, 8, sc))), 128))
        ], 8, ac)
      ]),
      c("text", {
        stroke: `url(#${t.gradientId})`,
        fill: `url(#${t.gradientId})`,
        x: t.renderer.area[0] / 2 + 8,
        y: t.renderer.area[1] / 2 + 8
      }, Ge(t.details), 9, lc),
      !a.shape || a.shape === "round" ? (ne(), re("ellipse", {
        key: 0,
        cx: t.renderer.area[0] / 2 + 8,
        cy: t.renderer.area[1] / 2 + 8,
        rx: t.renderer.area[0] / 2 + 5,
        ry: t.renderer.area[1] / 2 + 5,
        stroke: `url(#${t.gradientId})`
      }, null, 8, uc)) : (ne(), re("rect", {
        key: 1,
        x: "2",
        y: "2",
        rx: a.shape === "roundRect" ? 10 : 0,
        ry: a.shape === "roundRect" ? 10 : 0,
        width: t.renderer.area[0] + 12,
        height: t.renderer.area[1] + 12,
        stroke: `url(#${t.gradientId})`
      }, null, 8, dc))
    ])) : Ce("", !0),
    c("canvas", {
      ref: "water-pond-level",
      style: $e(`border-radius: ${a.radius};`)
    }, null, 4)
  ]);
}
const Rt = /* @__PURE__ */ ye(nc, [["render", fc]]), cc = Rt.name || `Dv${Rt.__file ? Rt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, hc = {
  install: (e) => {
    e.component(cc, Rt);
  }
}, gc = {
  name: "DvPercentPond",
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    const e = De();
    return {
      gradientId1: `percent-pond-gradientId1-${e}`,
      gradientId2: `percent-pond-gradientId2-${e}`,
      width: 0,
      height: 0,
      defaultConfig: {
        /**
         * @description Value
         * @type {Number}
         * @default value = 0
         */
        value: 0,
        /**
         * @description Colors (hex|rgb|rgba|color keywords)
         * @type {Array<String>}
         * @default colors = ['#00BAFF', '#3DE7C9']
         * @example colors = ['#000', 'rgb(0, 0, 0)', 'rgba(0, 0, 0, 1)', 'red']
         */
        colors: ["#3DE7C9", "#00BAFF"],
        /**
         * @description Border width
         * @type {Number}
         * @default borderWidth = 3
         */
        borderWidth: 3,
        /**
         * @description Gap between border and pond
         * @type {Number}
         * @default borderGap = 3
         */
        borderGap: 3,
        /**
         * @description Line dash
         * @type {Array<Number>}
         * @default lineDash = [5, 1]
         */
        lineDash: [5, 1],
        /**
         * @description Text color
         * @type {String}
         * @default textColor = '#fff'
         */
        textColor: "#fff",
        /**
         * @description Border radius
         * @type {Number}
         * @default borderRadius = 5
         */
        borderRadius: 5,
        /**
         * @description Local Gradient
         * @type {Boolean}
         * @default localGradient = false
         * @example localGradient = false | true
         */
        localGradient: !1,
        /**
         * @description Formatter
         * @type {String}
         * @default formatter = '{value}%'
         */
        formatter: "{value}%"
      },
      mergedConfig: null
    };
  },
  computed: {
    rectWidth() {
      const { mergedConfig: e, width: r } = this;
      if (!e) return 0;
      const { borderWidth: n } = e;
      return r - n;
    },
    rectHeight() {
      const { mergedConfig: e, height: r } = this;
      if (!e) return 0;
      const { borderWidth: n } = e;
      return r - n;
    },
    points() {
      const { mergedConfig: e, width: r, height: n } = this, i = n / 2;
      if (!e) return `0, ${i} 0, ${i}`;
      const { borderWidth: t, borderGap: a, value: l } = e, w = (r - (t + a) * 2) / 100 * l;
      return `
        ${t + a}, ${i}
        ${t + a + w}, ${i + 1e-3}
      `;
    },
    polylineWidth() {
      const { mergedConfig: e, height: r } = this;
      if (!e) return 0;
      const { borderWidth: n, borderGap: i } = e;
      return r - (n + i) * 2;
    },
    linearGradient() {
      const { mergedConfig: e } = this;
      if (!e) return [];
      const { colors: r } = e, i = 100 / (r.length - 1);
      return r.map((t, a) => [i * a, t]);
    },
    polylineGradient() {
      const { gradientId1: e, gradientId2: r, mergedConfig: n } = this;
      return n && n.localGradient ? e : r;
    },
    gradient2XPos() {
      const { mergedConfig: e } = this;
      if (!e) return "100%";
      const { value: r } = e;
      return `${200 - r}%`;
    },
    details() {
      const { mergedConfig: e } = this;
      if (!e) return "";
      const { value: r, formatter: n } = e;
      return n.replace("{value}", r);
    }
  },
  watch: {
    config() {
      const { mergeConfig: e } = this;
      e();
    }
  },
  methods: {
    async init() {
      const { initWH: e, config: r, mergeConfig: n } = this;
      await e(), r && n();
    },
    async initWH() {
      const { $nextTick: e, $refs: r } = this;
      await e();
      const { clientWidth: n, clientHeight: i } = r["percent-pond"];
      this.width = n, this.height = i;
    },
    mergeConfig() {
      const { config: e, defaultConfig: r } = this;
      this.mergedConfig = ve.deepMerge(pe.deepClone(r, !0), e || {});
    }
  },
  mounted() {
    const { init: e } = this;
    e();
  }
}, pc = {
  class: "dv-percent-pond",
  ref: "percent-pond"
}, vc = ["id"], mc = ["offset", "stop-color"], yc = ["id", "x2"], bc = ["offset", "stop-color"], Cc = ["x", "y", "rx", "ry", "stroke-width", "stroke", "width", "height"], wc = ["stroke-width", "stroke-dasharray", "stroke", "points"], Pc = ["stroke", "fill", "x", "y"];
function kc(e, r, n, i, t, a) {
  return ne(), re("div", pc, [
    (ne(), re("svg", null, [
      c("defs", null, [
        c("linearGradient", {
          id: t.gradientId1,
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "0%"
        }, [
          (ne(!0), re(we, null, ke(a.linearGradient, (l) => (ne(), re("stop", {
            key: l[0],
            offset: `${l[0]}%`,
            "stop-color": l[1]
          }, null, 8, mc))), 128))
        ], 8, vc),
        c("linearGradient", {
          id: t.gradientId2,
          x1: "0%",
          y1: "0%",
          x2: a.gradient2XPos,
          y2: "0%"
        }, [
          (ne(!0), re(we, null, ke(a.linearGradient, (l) => (ne(), re("stop", {
            key: l[0],
            offset: `${l[0]}%`,
            "stop-color": l[1]
          }, null, 8, bc))), 128))
        ], 8, yc)
      ]),
      c("rect", {
        x: t.mergedConfig ? t.mergedConfig.borderWidth / 2 : "0",
        y: t.mergedConfig ? t.mergedConfig.borderWidth / 2 : "0",
        rx: t.mergedConfig ? t.mergedConfig.borderRadius : "0",
        ry: t.mergedConfig ? t.mergedConfig.borderRadius : "0",
        fill: "transparent",
        "stroke-width": t.mergedConfig ? t.mergedConfig.borderWidth : "0",
        stroke: `url(#${t.gradientId1})`,
        width: a.rectWidth > 0 ? a.rectWidth : 0,
        height: a.rectHeight > 0 ? a.rectHeight : 0
      }, null, 8, Cc),
      c("polyline", {
        "stroke-width": a.polylineWidth,
        "stroke-dasharray": t.mergedConfig ? t.mergedConfig.lineDash.join(",") : "0",
        stroke: `url(#${a.polylineGradient})`,
        points: a.points
      }, null, 8, wc),
      c("text", {
        stroke: t.mergedConfig ? t.mergedConfig.textColor : "#fff",
        fill: t.mergedConfig ? t.mergedConfig.textColor : "#fff",
        x: t.width / 2,
        y: t.height / 2
      }, Ge(a.details), 9, Pc)
    ]))
  ], 512);
}
const Mt = /* @__PURE__ */ ye(gc, [["render", kc]]), $c = Mt.name || `Dv${Mt.__file ? Mt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, _c = {
  install: (e) => {
    e.component($c, Mt);
  }
}, xc = {
  name: "DvFlylineChart",
  mixins: [be],
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    const e = De();
    return {
      ref: "dv-flyline-chart",
      unique: Math.random(),
      maskId: `flyline-mask-id-${e}`,
      maskCircleId: `mask-circle-id-${e}`,
      gradientId: `gradient-id-${e}`,
      gradient2Id: `gradient2-id-${e}`,
      defaultConfig: {
        /**
         * @description Flyline chart center point
         * @type {Array<Number>}
         * @default centerPoint = [0, 0]
         */
        centerPoint: [0, 0],
        /**
         * @description Flyline start points
         * @type {Array<Array<Number>>}
         * @default points = []
         * @example points = [[10, 10], [100, 100]]
         */
        points: [],
        /**
         * @description Flyline width
         * @type {Number}
         * @default lineWidth = 1
         */
        lineWidth: 1,
        /**
         * @description Orbit color
         * @type {String}
         * @default orbitColor = 'rgba(103, 224, 227, .2)'
         */
        orbitColor: "rgba(103, 224, 227, .2)",
        /**
         * @description Flyline color
         * @type {String}
         * @default orbitColor = '#ffde93'
         */
        flylineColor: "#ffde93",
        /**
         * @description K value
         * @type {Number}
         * @default k = -0.5
         * @example k = -1 ~ 1
         */
        k: -0.5,
        /**
         * @description Flyline curvature
         * @type {Number}
         * @default curvature = 5
         */
        curvature: 5,
        /**
         * @description Flyline radius
         * @type {Number}
         * @default flylineRadius = 100
         */
        flylineRadius: 100,
        /**
         * @description Flyline animation duration
         * @type {Array<Number>}
         * @default duration = [20, 30]
         */
        duration: [20, 30],
        /**
         * @description Relative points position
         * @type {Boolean}
         * @default relative = true
         */
        relative: !0,
        /**
         * @description Back ground image url
         * @type {String}
         * @default bgImgUrl = ''
         * @example bgImgUrl = './img/bg.jpg'
         */
        bgImgUrl: "",
        /**
         * @description Text configuration
         * @type {Object}
         */
        text: {
          /**
           * @description Text offset
           * @type {Array<Number>}
           * @default offset = [0, 15]
           */
          offset: [0, 15],
          /**
           * @description Text color
           * @type {String}
           * @default color = '#ffdb5c'
           */
          color: "#ffdb5c",
          /**
           * @description Text font size
           * @type {Number}
           * @default fontSize = 12
           */
          fontSize: 12
        },
        /**
         * @description Halo configuration
         * @type {Object}
         */
        halo: {
          /**
           * @description Weather to show halo
           * @type {Boolean}
           * @default show = true
           * @example show = true | false
           */
          show: !0,
          /**
           * @description Halo animation duration (10 = 1s)
           * @type {Number}
           * @default duration = 30
           */
          duration: 30,
          /**
           * @description Halo color
           * @type {String}
           * @default color = '#fb7293'
           */
          color: "#fb7293",
          /**
           * @description Halo max radius
           * @type {Number}
           * @default radius = 120
           */
          radius: 120
        },
        /**
         * @description Center point img configuration
         * @type {Object}
         */
        centerPointImg: {
          /**
           * @description Center point img width
           * @type {Number}
           * @default width = 40
           */
          width: 40,
          /**
           * @description Center point img height
           * @type {Number}
           * @default height = 40
           */
          height: 40,
          /**
           * @description Center point img url
           * @type {String}
           * @default url = ''
           */
          url: ""
        },
        /**
         * @description Points img configuration
         * @type {Object}
         * @default radius = 120
         */
        pointsImg: {
          /**
           * @description Points img width
           * @type {Number}
           * @default width = 15
           */
          width: 15,
          /**
           * @description Points img height
           * @type {Number}
           * @default height = 15
           */
          height: 15,
          /**
           * @description Points img url
           * @type {String}
           * @default url = ''
           */
          url: ""
        }
      },
      mergedConfig: null,
      paths: [],
      lengths: [],
      times: [],
      texts: []
    };
  },
  watch: {
    config() {
      const { calcData: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcData: e } = this;
      e();
    },
    onResize() {
      const { calcData: e } = this;
      e();
    },
    async calcData() {
      const { mergeConfig: e, createFlylinePaths: r, calcLineLengths: n } = this;
      e(), r(), await n();
      const { calcTimes: i, calcTexts: t } = this;
      i(), t();
    },
    mergeConfig() {
      let { config: e, defaultConfig: r } = this;
      const n = ve.deepMerge(pe.deepClone(r, !0), e || {}), { points: i } = n;
      n.points = i.map((t) => t instanceof Array ? { position: t, text: "" } : t), this.mergedConfig = n;
    },
    createFlylinePaths() {
      const { getPath: e, mergedConfig: r, width: n, height: i } = this;
      let { centerPoint: t, points: a, relative: l } = r;
      a = a.map(({ position: w }) => w), l && (t = [n * t[0], i * t[1]], a = a.map(([w, z]) => [n * w, i * z])), this.paths = a.map((w) => e(t, w));
    },
    getPath(e, r) {
      const { getControlPoint: n } = this, i = n(e, r);
      return [r, i, e];
    },
    getControlPoint([e, r], [n, i]) {
      const { getKLinePointByx: t, mergedConfig: a } = this, { curvature: l, k: w } = a, [z, j] = [(e + n) / 2, (r + i) / 2], X = Bt([e, r], [n, i]) / l, q = X / 2;
      let [G, f] = [z, j];
      do
        G += q, f = t(w, [z, j], G)[1];
      while (Bt([z, j], [G, f]) < X);
      return [G, f];
    },
    getKLinePointByx(e, [r, n], i) {
      const t = n - e * r + e * i;
      return [i, t];
    },
    async calcLineLengths() {
      const { $nextTick: e, paths: r, $refs: n } = this;
      await e(), this.lengths = r.map((i, t) => n[`path${t}`][0].getTotalLength());
    },
    calcTimes() {
      const { duration: e, points: r } = this.mergedConfig;
      this.times = r.map((n) => tt(...e) / 10);
    },
    calcTexts() {
      const { points: e } = this.mergedConfig;
      this.texts = e.map(({ text: r }) => r);
    },
    consoleClickPos({ offsetX: e, offsetY: r }) {
      const { width: n, height: i, dev: t } = this;
      if (!t) return;
      const a = (e / n).toFixed(2), l = (r / i).toFixed(2);
      console.warn(`dv-flyline-chart DEV: 
 Click Position is [${e}, ${r}] 
 Relative Position is [${a}, ${l}]`);
    }
  }
}, Ac = ["width", "height"], Sc = ["id"], Lc = ["id"], Oc = ["id", "cx", "cy"], Gc = ["values", "dur"], Rc = ["dur"], Mc = ["xlink:href", "width", "height", "x", "y"], Dc = ["id"], Tc = ["xlink:href", "fill"], Wc = ["xlink:href", "fill", "mask"], Fc = ["id", "d"], Bc = ["xlink:href", "stroke-width", "stroke"], Nc = ["xlink:href", "stroke-width", "stroke", "mask"], jc = ["from", "to", "dur"], Ec = ["id"], qc = ["r", "fill"], zc = ["dur", "path"], Ic = ["xlink:href", "width", "height", "x", "y"], Hc = ["fill", "x", "y"];
function Vc(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-flyline-chart",
    ref: "dv-flyline-chart",
    style: $e(`background-image: url(${t.mergedConfig ? t.mergedConfig.bgImgUrl : ""})`),
    onClick: r[0] || (r[0] = (...l) => a.consoleClickPos && a.consoleClickPos(...l))
  }, [
    t.mergedConfig ? (ne(), re("svg", {
      key: 0,
      width: e.width,
      height: e.height
    }, [
      c("defs", null, [
        c("radialGradient", {
          id: t.gradientId,
          cx: "50%",
          cy: "50%",
          r: "50%"
        }, r[1] || (r[1] = [
          c("stop", {
            offset: "0%",
            "stop-color": "#fff",
            "stop-opacity": "1"
          }, null, -1),
          c("stop", {
            offset: "100%",
            "stop-color": "#fff",
            "stop-opacity": "0"
          }, null, -1)
        ]), 8, Sc),
        c("radialGradient", {
          id: t.gradient2Id,
          cx: "50%",
          cy: "50%",
          r: "50%"
        }, r[2] || (r[2] = [
          c("stop", {
            offset: "0%",
            "stop-color": "#fff",
            "stop-opacity": "0"
          }, null, -1),
          c("stop", {
            offset: "100%",
            "stop-color": "#fff",
            "stop-opacity": "1"
          }, null, -1)
        ]), 8, Lc),
        t.paths[0] ? (ne(), re("circle", {
          key: 0,
          id: `circle${t.paths[0].toString()}`,
          cx: t.paths[0][2][0],
          cy: t.paths[0][2][1]
        }, [
          c("animate", {
            attributeName: "r",
            values: `1;${t.mergedConfig.halo.radius}`,
            dur: t.mergedConfig.halo.duration / 10 + "s",
            repeatCount: "indefinite"
          }, null, 8, Gc),
          c("animate", {
            attributeName: "opacity",
            values: "1;0",
            dur: t.mergedConfig.halo.duration / 10 + "s",
            repeatCount: "indefinite"
          }, null, 8, Rc)
        ], 8, Oc)) : Ce("", !0)
      ]),
      t.paths[0] ? (ne(), re("image", {
        key: 0,
        "xlink:href": t.mergedConfig.centerPointImg.url,
        width: t.mergedConfig.centerPointImg.width,
        height: t.mergedConfig.centerPointImg.height,
        x: t.paths[0][2][0] - t.mergedConfig.centerPointImg.width / 2,
        y: t.paths[0][2][1] - t.mergedConfig.centerPointImg.height / 2
      }, null, 8, Mc)) : Ce("", !0),
      c("mask", {
        id: `maskhalo${t.paths[0].toString()}`
      }, [
        t.paths[0] ? (ne(), re("use", {
          key: 0,
          "xlink:href": `#circle${t.paths[0].toString()}`,
          fill: `url(#${t.gradient2Id})`
        }, null, 8, Tc)) : Ce("", !0)
      ], 8, Dc),
      t.paths[0] && t.mergedConfig.halo.show ? (ne(), re("use", {
        key: 1,
        "xlink:href": `#circle${t.paths[0].toString()}`,
        fill: t.mergedConfig.halo.color,
        mask: `url(#maskhalo${t.paths[0].toString()})`
      }, null, 8, Wc)) : Ce("", !0),
      (ne(!0), re(we, null, ke(t.paths, (l, w) => (ne(), re("g", { key: w }, [
        c("defs", null, [
          c("path", {
            id: `path${l.toString()}`,
            ref_for: !0,
            ref: `path${w}`,
            d: `M${l[0].toString()} Q${l[1].toString()} ${l[2].toString()}`,
            fill: "transparent"
          }, null, 8, Fc)
        ]),
        c("use", {
          "xlink:href": `#path${l.toString()}`,
          "stroke-width": t.mergedConfig.lineWidth,
          stroke: t.mergedConfig.orbitColor
        }, null, 8, Bc),
        t.lengths[w] ? (ne(), re("use", {
          key: 0,
          "xlink:href": `#path${l.toString()}`,
          "stroke-width": t.mergedConfig.lineWidth,
          stroke: t.mergedConfig.flylineColor,
          mask: `url(#mask${t.unique}${l.toString()})`
        }, [
          c("animate", {
            attributeName: "stroke-dasharray",
            from: `0, ${t.lengths[w]}`,
            to: `${t.lengths[w]}, 0`,
            dur: t.times[w] || 0,
            repeatCount: "indefinite"
          }, null, 8, jc)
        ], 8, Nc)) : Ce("", !0),
        c("mask", {
          id: `mask${t.unique}${l.toString()}`
        }, [
          c("circle", {
            cx: "0",
            cy: "0",
            r: t.mergedConfig.flylineRadius,
            fill: `url(#${t.gradientId})`
          }, [
            c("animateMotion", {
              dur: t.times[w] || 0,
              path: `M${l[0].toString()} Q${l[1].toString()} ${l[2].toString()}`,
              rotate: "auto",
              repeatCount: "indefinite"
            }, null, 8, zc)
          ], 8, qc)
        ], 8, Ec),
        c("image", {
          "xlink:href": t.mergedConfig.pointsImg.url,
          width: t.mergedConfig.pointsImg.width,
          height: t.mergedConfig.pointsImg.height,
          x: l[0][0] - t.mergedConfig.pointsImg.width / 2,
          y: l[0][1] - t.mergedConfig.pointsImg.height / 2
        }, null, 8, Ic),
        c("text", {
          style: $e(`fontSize:${t.mergedConfig.text.fontSize}px;`),
          fill: t.mergedConfig.text.color,
          x: l[0][0] + t.mergedConfig.text.offset[0],
          y: l[0][1] + t.mergedConfig.text.offset[1]
        }, Ge(t.texts[w]), 13, Hc)
      ]))), 128))
    ], 8, Ac)) : Ce("", !0)
  ], 4);
}
const Dt = /* @__PURE__ */ ye(xc, [["render", Vc]]), Uc = Dt.name || `Dv${Dt.__file ? Dt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Xc = {
  install: (e) => {
    e.component(Uc, Dt);
  }
}, Qc = {
  name: "DvFlylineChartEnhanced",
  mixins: [be],
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    dev: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    const e = De();
    return {
      ref: "dv-flyline-chart-enhanced",
      unique: Math.random(),
      flylineGradientId: `flyline-gradient-id-${e}`,
      haloGradientId: `halo-gradient-id-${e}`,
      /**
       * @description Type Declaration
       * 
       * interface Halo {
       *    show?: boolean
       *    duration?: [number, number]
       *    color?: string
       *    radius?: number
       * }
       * 
       * interface Text {
       *    show?: boolean
       *    offset?: [number, number]
       *    color?: string
       *    fontSize?: number
       * }
       * 
       * interface Icon {
       *    show?: boolean
       *    src?: string
       *    width?: number
       *    height?: number
       * }
       * 
       * interface Point {
       *    name: string
       *    coordinate: [number, number]
       *    halo?: Halo
       *    text?: Text
       *    icon?: Icon
       * }
       * 
       * interface Line {
       *    width?: number
       *    color?: string
       *    orbitColor?: string
       *    duration?: [number, number]
       *    radius?: string
       * }
       * 
       * interface Flyline extends Line {
       *    source: string
       *    target: string
       * }
       * 
       * interface FlylineWithPath extends Flyline {
       *    d: string
       *    path: [[number, number], [number, number], [number, number]]
       *    key: string
       * }
       */
      defaultConfig: {
        /**
         * @description Flyline chart points
         * @type {Point[]}
         * @default points = []
         */
        points: [],
        /**
         * @description Lines
         * @type {Flyline[]}
         * @default lines = []
         */
        lines: [],
        /**
         * @description Global halo configuration
         * @type {Halo}
         */
        halo: {
          /**
           * @description Whether to show halo
           * @type {Boolean}
           * @default show = false
           */
          show: !1,
          /**
           * @description Halo animation duration (1s = 10)
           * @type {[number, number]}
           */
          duration: [20, 30],
          /**
           * @description Halo color
           * @type {String}
           * @default color = '#fb7293'
           */
          color: "#fb7293",
          /**
           * @description Halo radius
           * @type {Number}
           * @default radius = 120
           */
          radius: 120
        },
        /**
         * @description Global text configuration
         * @type {Text}
         */
        text: {
          /**
           * @description Whether to show text
           * @type {Boolean}
           * @default show = false
           */
          show: !1,
          /**
           * @description Text offset
           * @type {[number, number]}
           * @default offset = [0, 15]
           */
          offset: [0, 15],
          /**
           * @description Text color
           * @type {String}
           * @default color = '#ffdb5c'
           */
          color: "#ffdb5c",
          /**
           * @description Text font size
           * @type {Number}
           * @default fontSize = 12
           */
          fontSize: 12
        },
        /**
         * @description Global icon configuration
         * @type {Icon}
         */
        icon: {
          /**
           * @description Whether to show icon
           * @type {Boolean}
           * @default show = false
           */
          show: !1,
          /**
           * @description Icon src
           * @type {String}
           * @default src = ''
           */
          src: "",
          /**
           * @description Icon width
           * @type {Number}
           * @default width = 15
           */
          width: 15,
          /**
           * @description Icon height
           * @type {Number}
           * @default width = 15
           */
          height: 15
        },
        /**
         * @description Global line configuration
         * @type {Line}
         */
        line: {
          /**
           * @description Line width
           * @type {Number}
           * @default width = 1
           */
          width: 1,
          /**
           * @description Flyline color
           * @type {String}
           * @default color = '#ffde93'
           */
          color: "#ffde93",
          /**
           * @description Orbit color
           * @type {String}
           * @default orbitColor = 'rgba(103, 224, 227, .2)'
           */
          orbitColor: "rgba(103, 224, 227, .2)",
          /**
           * @description Flyline animation duration
           * @type {[number, number]}
           * @default duration = [20, 30]
           */
          duration: [20, 30],
          /**
           * @description Flyline radius
           * @type {Number}
           * @default radius = 100
           */
          radius: 100
        },
        /**
         * @description Back ground image url
         * @type {String}
         * @default bgImgSrc = ''
         */
        bgImgSrc: "",
        /**
         * @description K value
         * @type {Number}
         * @default k = -0.5
         * @example k = -1 ~ 1
         */
        k: -0.5,
        /**
         * @description Flyline curvature
         * @type {Number}
         * @default curvature = 5
         */
        curvature: 5,
        /**
         * @description Relative points position
         * @type {Boolean}
         * @default relative = true
         */
        relative: !0
      },
      /**
       * @description Fly line data
       * @type {FlylineWithPath[]}
       * @default flylines = []
       */
      flylines: [],
      /**
       * @description Fly line lengths
       * @type {Number[]}
       * @default flylineLengths = []
       */
      flylineLengths: [],
      /**
       * @description Fly line points
       * @default flylinePoints = []
       */
      flylinePoints: [],
      mergedConfig: null
    };
  },
  watch: {
    config() {
      const { calcData: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcData: e } = this;
      e();
    },
    onResize() {
      const { calcData: e } = this;
      e();
    },
    async calcData() {
      const { mergeConfig: e, calcflylinePoints: r, calcLinePaths: n } = this;
      e(), r(), n();
      const { calcLineLengths: i } = this;
      await i();
    },
    mergeConfig() {
      let { config: e, defaultConfig: r } = this;
      const n = ve.deepMerge(pe.deepClone(r, !0), e || {}), { points: i, lines: t, halo: a, text: l, icon: w, line: z } = n;
      n.points = i.map((j) => (j.halo = ve.deepMerge(pe.deepClone(a, !0), j.halo || {}), j.text = ve.deepMerge(pe.deepClone(l, !0), j.text || {}), j.icon = ve.deepMerge(pe.deepClone(w, !0), j.icon || {}), j)), n.lines = t.map((j) => ve.deepMerge(pe.deepClone(z, !0), j)), this.mergedConfig = n;
    },
    calcflylinePoints() {
      const { mergedConfig: e, width: r, height: n } = this, { relative: i, points: t } = e;
      this.flylinePoints = t.map((a, l) => {
        const { coordinate: [w, z], halo: j, icon: E, text: X } = a;
        i && (a.coordinate = [w * r, z * n]), a.halo.time = tt(...j.duration) / 10;
        const { width: q, height: G } = E;
        a.icon.x = a.coordinate[0] - q / 2, a.icon.y = a.coordinate[1] - G / 2;
        const [f, M] = X.offset;
        return a.text.x = a.coordinate[0] + f, a.text.y = a.coordinate[1] + M, a.key = `${a.coordinate.toString()}${l}`, a;
      });
    },
    calcLinePaths() {
      const { getPath: e, mergedConfig: r } = this, { points: n, lines: i } = r;
      this.flylines = i.map((t) => {
        const { source: a, target: l, duration: w } = t, z = n.find(({ name: f }) => f === a).coordinate, j = n.find(({ name: f }) => f === l).coordinate, E = e(z, j).map((f) => f.map((M) => parseFloat(M.toFixed(10)))), X = `M${E[0].toString()} Q${E[1].toString()} ${E[2].toString()}`, q = `path${E.toString()}`, G = tt(...w) / 10;
        return { ...t, path: E, key: q, d: X, time: G };
      });
    },
    getPath(e, r) {
      const { getControlPoint: n } = this, i = n(e, r);
      return [e, i, r];
    },
    getControlPoint([e, r], [n, i]) {
      const { getKLinePointByx: t, mergedConfig: a } = this, { curvature: l, k: w } = a, [z, j] = [(e + n) / 2, (r + i) / 2], X = Bt([e, r], [n, i]) / l, q = X / 2;
      let [G, f] = [z, j];
      do
        G += q, f = t(w, [z, j], G)[1];
      while (Bt([z, j], [G, f]) < X);
      return [G, f];
    },
    getKLinePointByx(e, [r, n], i) {
      const t = n - e * r + e * i;
      return [i, t];
    },
    async calcLineLengths() {
      const { $nextTick: e, flylines: r, $refs: n } = this;
      await e(), this.flylineLengths = r.map(({ key: i }) => n[i][0].getTotalLength());
    },
    consoleClickPos({ offsetX: e, offsetY: r }) {
      const { width: n, height: i, dev: t } = this;
      if (!t) return;
      const a = (e / n).toFixed(2), l = (r / i).toFixed(2);
      console.warn(`dv-flyline-chart-enhanced DEV: 
 Click Position is [${e}, ${r}] 
 Relative Position is [${a}, ${l}]`);
    }
  }
}, Yc = ["width", "height"], Kc = ["id"], Jc = ["id"], Zc = ["id", "cx", "cy"], eh = ["values", "dur"], th = ["dur"], rh = ["id"], nh = ["xlink:href", "fill"], ih = ["xlink:href", "fill", "mask"], oh = ["xlink:href", "width", "height", "x", "y"], ah = ["fill", "x", "y"], sh = ["id", "d"], lh = ["xlink:href", "stroke-width", "stroke"], uh = ["id"], dh = ["r", "fill"], fh = ["dur", "path"], ch = ["xlink:href", "stroke-width", "stroke", "mask"], hh = ["from", "to", "dur"];
function gh(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-flyline-chart-enhanced",
    style: $e(`background-image: url(${t.mergedConfig ? t.mergedConfig.bgImgSrc : ""})`),
    ref: t.ref,
    onClick: r[0] || (r[0] = (...l) => a.consoleClickPos && a.consoleClickPos(...l))
  }, [
    t.flylines.length ? (ne(), re("svg", {
      key: 0,
      width: e.width,
      height: e.height
    }, [
      c("defs", null, [
        c("radialGradient", {
          id: t.flylineGradientId,
          cx: "50%",
          cy: "50%",
          r: "50%"
        }, r[1] || (r[1] = [
          c("stop", {
            offset: "0%",
            "stop-color": "#fff",
            "stop-opacity": "1"
          }, null, -1),
          c("stop", {
            offset: "100%",
            "stop-color": "#fff",
            "stop-opacity": "0"
          }, null, -1)
        ]), 8, Kc),
        c("radialGradient", {
          id: t.haloGradientId,
          cx: "50%",
          cy: "50%",
          r: "50%"
        }, r[2] || (r[2] = [
          c("stop", {
            offset: "0%",
            "stop-color": "#fff",
            "stop-opacity": "0"
          }, null, -1),
          c("stop", {
            offset: "100%",
            "stop-color": "#fff",
            "stop-opacity": "1"
          }, null, -1)
        ]), 8, Jc)
      ]),
      (ne(!0), re(we, null, ke(t.flylinePoints, (l) => (ne(), re("g", {
        key: l.key + Math.random()
      }, [
        c("defs", null, [
          l.halo.show ? (ne(), re("circle", {
            key: 0,
            id: `halo${t.unique}${l.key}`,
            cx: l.coordinate[0],
            cy: l.coordinate[1]
          }, [
            c("animate", {
              attributeName: "r",
              values: `1;${l.halo.radius}`,
              dur: `${l.halo.time}s`,
              repeatCount: "indefinite"
            }, null, 8, eh),
            c("animate", {
              attributeName: "opacity",
              values: "1;0",
              dur: `${l.halo.time}s`,
              repeatCount: "indefinite"
            }, null, 8, th)
          ], 8, Zc)) : Ce("", !0)
        ]),
        c("mask", {
          id: `mask${t.unique}${l.key}`
        }, [
          l.halo.show ? (ne(), re("use", {
            key: 0,
            "xlink:href": `#halo${t.unique}${l.key}`,
            fill: `url(#${t.haloGradientId})`
          }, null, 8, nh)) : Ce("", !0)
        ], 8, rh),
        l.halo.show ? (ne(), re("use", {
          key: 0,
          "xlink:href": `#halo${t.unique}${l.key}`,
          fill: l.halo.color,
          mask: `url(#mask${t.unique}${l.key})`
        }, null, 8, ih)) : Ce("", !0),
        l.icon.show ? (ne(), re("image", {
          key: 1,
          "xlink:href": l.icon.src,
          width: l.icon.width,
          height: l.icon.height,
          x: l.icon.x,
          y: l.icon.y
        }, null, 8, oh)) : Ce("", !0),
        l.text.show ? (ne(), re("text", {
          key: 2,
          style: $e(`fontSize:${l.text.fontSize}px;color:${l.text.color}`),
          fill: l.text.color,
          x: l.text.x,
          y: l.text.y
        }, Ge(l.name), 13, ah)) : Ce("", !0)
      ]))), 128)),
      (ne(!0), re(we, null, ke(t.flylines, (l, w) => (ne(), re("g", {
        key: l.key + Math.random()
      }, [
        c("defs", null, [
          c("path", {
            id: l.key,
            ref_for: !0,
            ref: l.key,
            d: l.d,
            fill: "transparent"
          }, null, 8, sh)
        ]),
        c("use", {
          "xlink:href": `#${l.key}`,
          "stroke-width": l.width,
          stroke: l.orbitColor
        }, null, 8, lh),
        c("mask", {
          id: `mask${t.unique}${l.key}`
        }, [
          c("circle", {
            cx: "0",
            cy: "0",
            r: l.radius,
            fill: `url(#${t.flylineGradientId})`
          }, [
            c("animateMotion", {
              dur: l.time,
              path: l.d,
              rotate: "auto",
              repeatCount: "indefinite"
            }, null, 8, fh)
          ], 8, dh)
        ], 8, uh),
        t.flylineLengths[w] ? (ne(), re("use", {
          key: 0,
          "xlink:href": `#${l.key}`,
          "stroke-width": l.width,
          stroke: l.color,
          mask: `url(#mask${t.unique}${l.key})`
        }, [
          c("animate", {
            attributeName: "stroke-dasharray",
            from: `0, ${t.flylineLengths[w]}`,
            to: `${t.flylineLengths[w]}, 0`,
            dur: l.time,
            repeatCount: "indefinite"
          }, null, 8, hh)
        ], 8, ch)) : Ce("", !0)
      ]))), 128))
    ], 8, Yc)) : Ce("", !0)
  ], 4);
}
const Tt = /* @__PURE__ */ ye(Qc, [["render", gh]]), ph = Tt.name || `Dv${Tt.__file ? Tt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, vh = {
  install: (e) => {
    e.component(ph, Tt);
  }
}, mh = {
  name: "DvConicalColumnChart",
  mixins: [be],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ref: "conical-column-chart",
      defaultConfig: {
        /**
         * @description Chart data
         * @type {Array<Object>}
         * @default data = []
         */
        data: [],
        /**
         * @description Chart img
         * @type {Array<String>}
         * @default img = []
         */
        img: [],
        /**
         * @description Chart font size
         * @type {Number}
         * @default fontSize = 12
         */
        fontSize: 12,
        /**
         * @description Img side length
         * @type {Number}
         * @default imgSideLength = 30
         */
        imgSideLength: 30,
        /**
         * @description Column color
         * @type {String}
         * @default columnColor = 'rgba(0, 194, 255, 0.4)'
         */
        columnColor: "rgba(0, 194, 255, 0.4)",
        /**
         * @description Text color
         * @type {String}
         * @default textColor = '#fff'
         */
        textColor: "#fff",
        /**
         * @description Show value
         * @type {Boolean}
         * @default showValue = false
         */
        showValue: !1
      },
      mergedConfig: null,
      column: []
    };
  },
  watch: {
    config() {
      const { calcData: e } = this;
      e();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcData: e } = this;
      e();
    },
    onResize() {
      const { calcData: e } = this;
      e();
    },
    calcData() {
      const { mergeConfig: e, initData: r, calcSVGPath: n } = this;
      e(), r(), n();
    },
    mergeConfig() {
      const { defaultConfig: e, config: r } = this;
      this.mergedConfig = ve.deepMerge(pe.deepClone(e, !0), r || {});
    },
    initData() {
      const { mergedConfig: e } = this;
      let { data: r } = e;
      r = pe.deepClone(r, !0), r.sort(({ value: i }, { value: t }) => {
        if (i > t) return -1;
        if (i < t) return 1;
        if (i === t) return 0;
      });
      const n = r[0] ? r[0].value : 10;
      r = r.map((i) => ({
        ...i,
        percent: i.value / n
      })), e.data = r;
    },
    calcSVGPath() {
      const { mergedConfig: e, width: r, height: n } = this, { imgSideLength: i, fontSize: t, data: a } = e, l = a.length, w = r / (l + 1), z = n - i - t - 5, j = n - t - 5;
      this.column = a.map((E, X) => {
        const { percent: q } = E, G = w * (X + 1), f = w * X, M = w * (X + 2), D = j - z * q, T = z * q * 0.6 + D, B = `
          M${f}, ${j}
          Q${G}, ${T} ${G},${D}
          M${G},${D}
          Q${G}, ${T} ${M},${j}
          L${f}, ${j}
          Z
        `, U = (j + D) / 2 + t / 2;
        return {
          ...E,
          d: B,
          x: G,
          y: D,
          textY: U
        };
      });
    }
  }
}, yh = ["width", "height"], bh = ["d", "fill"], Ch = ["fill", "x", "y"], wh = ["xlink:href", "width", "height", "x", "y"], Ph = ["fill", "x", "y"];
function kh(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-conical-column-chart",
    ref: t.ref
  }, [
    (ne(), re("svg", {
      width: e.width,
      height: e.height
    }, [
      (ne(!0), re(we, null, ke(t.column, (l, w) => (ne(), re("g", { key: w }, [
        c("path", {
          d: l.d,
          fill: t.mergedConfig.columnColor
        }, null, 8, bh),
        c("text", {
          style: $e(`fontSize:${t.mergedConfig.fontSize}px`),
          fill: t.mergedConfig.textColor,
          x: l.x,
          y: e.height - 4
        }, Ge(l.name), 13, Ch),
        t.mergedConfig.img.length ? (ne(), re("image", {
          key: 0,
          "xlink:href": t.mergedConfig.img[w % t.mergedConfig.img.length],
          width: t.mergedConfig.imgSideLength,
          height: t.mergedConfig.imgSideLength,
          x: l.x - t.mergedConfig.imgSideLength / 2,
          y: l.y - t.mergedConfig.imgSideLength
        }, null, 8, wh)) : Ce("", !0),
        t.mergedConfig.showValue ? (ne(), re("text", {
          key: 1,
          style: $e(`fontSize:${t.mergedConfig.fontSize}px`),
          fill: t.mergedConfig.textColor,
          x: l.x,
          y: l.textY
        }, Ge(l.value), 13, Ph)) : Ce("", !0)
      ]))), 128))
    ], 8, yh))
  ], 512);
}
const Jn = /* @__PURE__ */ ye(mh, [["render", kh]]), $h = {
  install: (e) => {
    e.component(Jn.name, Jn);
  }
}, _h = et.name || `Dv${et.__file ? et.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, xh = {
  install: (e) => {
    e.component(_h, et);
  }
}, Ah = {
  name: "DvScrollBoard",
  mixins: [be],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ref: "scroll-board",
      defaultConfig: {
        /**
         * @description Board header
         * @type {Array<String>}
         * @default header = []
         * @example header = ['column1', 'column2', 'column3']
         */
        header: [],
        /**
         * @description Board data
         * @type {Array<Array>}
         * @default data = []
         */
        data: [],
        /**
         * @description Row num
         * @type {Number}
         * @default rowNum = 5
         */
        rowNum: 5,
        /**
         * @description Header background color
         * @type {String}
         * @default headerBGC = '#00BAFF'
         */
        headerBGC: "#00BAFF",
        /**
         * @description Odd row background color
         * @type {String}
         * @default oddRowBGC = '#003B51'
         */
        oddRowBGC: "#003B51",
        /**
         * @description Even row background color
         * @type {String}
         * @default evenRowBGC = '#003B51'
         */
        evenRowBGC: "#0A2732",
        /**
         * @description Scroll wait time
         * @type {Number}
         * @default waitTime = 2000
         */
        waitTime: 2e3,
        /**
         * @description Header height
         * @type {Number}
         * @default headerHeight = 35
         */
        headerHeight: 35,
        /**
         * @description Column width
         * @type {Array<Number>}
         * @default columnWidth = []
         */
        columnWidth: [],
        /**
         * @description Column align
         * @type {Array<String>}
         * @default align = []
         * @example align = ['left', 'center', 'right']
         */
        align: [],
        /**
         * @description Show index
         * @type {Boolean}
         * @default index = false
         */
        index: !1,
        /**
         * @description index Header
         * @type {String}
         * @default indexHeader = '#'
         */
        indexHeader: "#",
        /**
         * @description Carousel type
         * @type {String}
         * @default carousel = 'single'
         * @example carousel = 'single' | 'page'
         */
        carousel: "single",
        /**
         * @description Pause scroll when mouse hovered
         * @type {Boolean}
         * @default hoverPause = true
         * @example hoverPause = true | false
         */
        hoverPause: !0
      },
      mergedConfig: null,
      header: [],
      rowsData: [],
      rows: [],
      widths: [],
      heights: [],
      avgHeight: 0,
      aligns: [],
      animationIndex: 0,
      animationHandler: "",
      updater: 0,
      needCalc: !1
    };
  },
  watch: {
    config() {
      const { stopAnimation: e, calcData: r } = this;
      e(), this.animationIndex = 0, r();
    }
  },
  methods: {
    handleHover(e, r, n, i, t) {
      const { mergedConfig: a, emitEvent: l, stopAnimation: w, animation: z } = this;
      e && l("mouseover", r, n, i, t), a.hoverPause && (e ? w() : z(!0));
    },
    afterAutoResizeMixinInit() {
      const { calcData: e } = this;
      e();
    },
    onResize() {
      const { mergedConfig: e, calcWidths: r, calcHeights: n } = this;
      e && (r(), n());
    },
    calcData() {
      const { mergeConfig: e, calcHeaderData: r, calcRowsData: n } = this;
      e(), r(), n();
      const { calcWidths: i, calcHeights: t, calcAligns: a } = this;
      i(), t(), a();
      const { animation: l } = this;
      l(!0);
    },
    mergeConfig() {
      let { config: e, defaultConfig: r } = this;
      this.mergedConfig = ve.deepMerge(pe.deepClone(r, !0), e || {});
    },
    calcHeaderData() {
      let { header: e, index: r, indexHeader: n } = this.mergedConfig;
      if (!e.length) {
        this.header = [];
        return;
      }
      e = [...e], r && e.unshift(n), this.header = e;
    },
    calcRowsData() {
      let { data: e, index: r, headerBGC: n, rowNum: i } = this.mergedConfig;
      r && (e = e.map((a, l) => {
        a = [...a];
        const w = `<span class="index" style="background-color: ${n};">${l + 1}</span>`;
        return a.unshift(w), a;
      })), e = e.map((a, l) => ({ ceils: a, rowIndex: l }));
      const t = e.length;
      t > i && t < 2 * i && (e = [...e, ...e]), e = e.map((a, l) => ({ ...a, scroll: l })), this.rowsData = e, this.rows = e;
    },
    calcWidths() {
      const { width: e, mergedConfig: r, rowsData: n } = this, { columnWidth: i, header: t } = r, a = i.reduce((j, E) => j + E, 0);
      let l = 0;
      n[0] ? l = n[0].ceils.length : t.length && (l = t.length);
      const w = (e - a) / (l - i.length), z = new Array(l).fill(w);
      this.widths = ve.deepMerge(z, i);
    },
    calcHeights(e = !1) {
      const { height: r, mergedConfig: n, header: i } = this, { headerHeight: t, rowNum: a, data: l } = n;
      let w = r;
      i.length && (w -= t);
      const z = w / a;
      this.avgHeight = z, e || (this.heights = new Array(l.length).fill(z));
    },
    calcAligns() {
      const { header: e, mergedConfig: r } = this, n = e.length;
      let i = new Array(n).fill("left");
      const { align: t } = r;
      this.aligns = ve.deepMerge(i, t);
    },
    async animation(e = !1) {
      const { needCalc: r, calcHeights: n, calcRowsData: i } = this;
      r && (i(), n(), this.needCalc = !1);
      let { avgHeight: t, animationIndex: a, mergedConfig: l, rowsData: w, animation: z, updater: j } = this;
      const { waitTime: E, carousel: X, rowNum: q } = l, G = w.length;
      if (q >= G || e && (await new Promise((T) => setTimeout(T, E)), j !== this.updater))
        return;
      const f = X === "single" ? 1 : q;
      let M = w.slice(a);
      if (M.push(...w.slice(0, a)), this.rows = M.slice(0, X === "page" ? q * 2 : q + 1), this.heights = new Array(G).fill(t), await new Promise((T) => setTimeout(T, 300)), j !== this.updater) return;
      this.heights.splice(0, f, ...new Array(f).fill(0)), a += f;
      const D = a - G;
      D >= 0 && (a = D), this.animationIndex = a, this.animationHandler = setTimeout(z, E - 300);
    },
    stopAnimation() {
      const { animationHandler: e, updater: r } = this;
      this.updater = (r + 1) % 999999, e && clearTimeout(e);
    },
    emitEvent(e, r, n, i, t) {
      const { ceils: a, rowIndex: l } = i;
      this.$emit(e, {
        row: a,
        ceil: t,
        rowIndex: l,
        columnIndex: n
      });
    },
    updateRows(e, r) {
      const { mergedConfig: n, animationHandler: i, animation: t } = this;
      this.mergedConfig = {
        ...n,
        data: [...e]
      }, this.needCalc = !0, typeof r == "number" && (this.animationIndex = r), i || t(!0);
    }
  },
  destroyed() {
    const { stopAnimation: e } = this;
    e();
  }
}, Sh = ["align", "innerHTML"], Lh = ["align", "innerHTML", "onClick", "onMouseenter"];
function Oh(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-scroll-board",
    ref: t.ref
  }, [
    t.header.length && t.mergedConfig ? (ne(), re("div", {
      key: 0,
      class: "header",
      style: $e(`background-color: ${t.mergedConfig.headerBGC};`)
    }, [
      (ne(!0), re(we, null, ke(t.header, (l, w) => (ne(), re("div", {
        class: "header-item",
        key: `${l}${w}`,
        style: $e(`
          height: ${t.mergedConfig.headerHeight}px;
          line-height: ${t.mergedConfig.headerHeight}px;
          width: ${t.widths[w]}px;
        `),
        align: t.aligns[w],
        innerHTML: l
      }, null, 12, Sh))), 128))
    ], 4)) : Ce("", !0),
    t.mergedConfig ? (ne(), re("div", {
      key: 1,
      class: "rows",
      style: $e(`height: ${e.height - (t.header.length ? t.mergedConfig.headerHeight : 0)}px;`)
    }, [
      (ne(!0), re(we, null, ke(t.rows, (l, w) => (ne(), re("div", {
        class: "row-item",
        key: `${l.toString()}${l.scroll}`,
        style: $e(`
          height: ${t.heights[w]}px;
          line-height: ${t.heights[w]}px;
          background-color: ${t.mergedConfig[l.rowIndex % 2 === 0 ? "evenRowBGC" : "oddRowBGC"]};
        `)
      }, [
        (ne(!0), re(we, null, ke(l.ceils, (z, j) => (ne(), re("div", {
          class: "ceil",
          key: `${z}${w}${j}`,
          style: $e(`width: ${t.widths[j]}px;`),
          align: t.aligns[j],
          innerHTML: z,
          onClick: (E) => a.emitEvent("click", w, j, l, z),
          onMouseenter: (E) => a.handleHover(!0, w, j, l, z),
          onMouseleave: r[0] || (r[0] = (E) => a.handleHover(!1))
        }, null, 44, Lh))), 128))
      ], 4))), 128))
    ], 4)) : Ce("", !0)
  ], 512);
}
const Wt = /* @__PURE__ */ ye(Ah, [["render", Oh]]), Gh = Wt.name || `Dv${Wt.__file ? Wt.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Rh = {
  install: (e) => {
    e.component(Gh, Wt);
  }
}, Mh = {
  name: "DvScrollRankingBoard",
  mixins: [be],
  props: {
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ref: "scroll-ranking-board",
      defaultConfig: {
        /**
         * @description Board data
         * @type {Array<Object>}
         * @default data = []
         */
        data: [],
        /**
         * @description Row num
         * @type {Number}
         * @default rowNum = 5
         */
        rowNum: 5,
        /**
         * @description Scroll wait time
         * @type {Number}
         * @default waitTime = 2000
         */
        waitTime: 2e3,
        /**
         * @description Carousel type
         * @type {String}
         * @default carousel = 'single'
         * @example carousel = 'single' | 'page'
         */
        carousel: "single",
        /**
         * @description Value unit
         * @type {String}
         * @default unit = ''
         * @example unit = 'ton'
         */
        unit: "",
        /**
         * @description Auto sort by value
         * @type {Boolean}
         * @default sort = true
         */
        sort: !0,
        /**
         * @description Value formatter
         * @type {Function}
         * @default valueFormatter = null
         */
        valueFormatter: null
      },
      mergedConfig: null,
      rowsData: [],
      rows: [],
      heights: [],
      animationIndex: 0,
      animationHandler: "",
      updater: 0
    };
  },
  watch: {
    config() {
      const { stopAnimation: e, calcData: r } = this;
      e(), r();
    }
  },
  methods: {
    afterAutoResizeMixinInit() {
      const { calcData: e } = this;
      e();
    },
    onResize() {
      const { mergedConfig: e, calcHeights: r } = this;
      e && r(!0);
    },
    calcData() {
      const { mergeConfig: e, calcRowsData: r } = this;
      e(), r();
      const { calcHeights: n } = this;
      n();
      const { animation: i } = this;
      i(!0);
    },
    mergeConfig() {
      let { config: e, defaultConfig: r } = this;
      this.mergedConfig = ve.deepMerge(pe.deepClone(r, !0), e || {});
    },
    calcRowsData() {
      let { data: e, rowNum: r, sort: n } = this.mergedConfig;
      n && e.sort(({ value: j }, { value: E }) => {
        if (j > E) return -1;
        if (j < E) return 1;
        if (j === E) return 0;
      });
      const i = e.map(({ value: j }) => j), t = Math.min(...i) || 0, a = Math.abs(t), w = (Math.max(...i) || 0) + a;
      e = e.map((j, E) => ({ ...j, ranking: E + 1, percent: (j.value + a) / w * 100 }));
      const z = e.length;
      z > r && z < 2 * r && (e = [...e, ...e]), e = e.map((j, E) => ({ ...j, scroll: E })), this.rowsData = e, this.rows = e;
    },
    calcHeights(e = !1) {
      const { height: r, mergedConfig: n } = this, { rowNum: i, data: t } = n, a = r / i;
      this.avgHeight = a, e || (this.heights = new Array(t.length).fill(a));
    },
    async animation(e = !1) {
      let { avgHeight: r, animationIndex: n, mergedConfig: i, rowsData: t, animation: a, updater: l } = this;
      const { waitTime: w, carousel: z, rowNum: j } = i, E = t.length;
      if (j >= E || e && (await new Promise((f) => setTimeout(f, w)), l !== this.updater))
        return;
      const X = z === "single" ? 1 : j;
      let q = t.slice(n);
      if (q.push(...t.slice(0, n)), this.rows = q.slice(0, j + 1), this.heights = new Array(E).fill(r), await new Promise((f) => setTimeout(f, 300)), l !== this.updater) return;
      this.heights.splice(0, X, ...new Array(X).fill(0)), n += X;
      const G = n - E;
      G >= 0 && (n = G), this.animationIndex = n, this.animationHandler = setTimeout(a, w - 300);
    },
    stopAnimation() {
      const { animationHandler: e, updater: r } = this;
      this.updater = (r + 1) % 999999, e && clearTimeout(e);
    }
  },
  destroyed() {
    const { stopAnimation: e } = this;
    e();
  }
}, Dh = { class: "ranking-info" }, Th = { class: "rank" }, Wh = ["innerHTML"], Fh = { class: "ranking-value" }, Bh = { class: "ranking-column" };
function Nh(e, r, n, i, t, a) {
  return ne(), re("div", {
    class: "dv-scroll-ranking-board",
    ref: t.ref
  }, [
    (ne(!0), re(we, null, ke(t.rows, (l, w) => (ne(), re("div", {
      class: "row-item",
      key: l.toString() + l.scroll,
      style: $e(`height: ${t.heights[w]}px;`)
    }, [
      c("div", Dh, [
        c("div", Th, "No." + Ge(l.ranking), 1),
        c("div", {
          class: "info-name",
          innerHTML: l.name
        }, null, 8, Wh),
        c("div", Fh, Ge(t.mergedConfig.valueFormatter ? t.mergedConfig.valueFormatter(l) : l.value + t.mergedConfig.unit), 1)
      ]),
      c("div", Bh, [
        c("div", {
          class: "inside-column",
          style: $e(`width: ${l.percent}%;`)
        }, r[0] || (r[0] = [
          c("div", { class: "shine" }, null, -1)
        ]), 4)
      ])
    ], 4))), 128))
  ], 512);
}
const Ft = /* @__PURE__ */ ye(Mh, [["render", Nh]]), jh = Ft.name || `Dv${Ft.__file ? Ft.__file.split("/").slice(-2, -1)[0] : "UnknownComponent"}`, Eh = {
  install: (e) => {
    e.component(jh, Ft);
  }
}, Ih = {
  install: (e) => {
    e.use(Pi), e.use(Si), e.use(Ui), e.use(oo), e.use(vo), e.use(Ro), e.use(Io), e.use(ca), e.use(_a), e.use(Na), e.use(ss), e.use(gs), e.use(Is), e.use(nl), e.use(cl), e.use(_l), e.use(Dl), e.use(El), e.use(Xl), e.use(nu), e.use(fu), e.use(Pu), e.use(Ou), e.use(Iu), e.use(vd), e.use(Ld), e.use(Qd), e.use(Wf), e.use(Uf), e.use(rc), e.use(hc), e.use(_c), e.use(Xc), e.use(vh), e.use($h), e.use(xh), e.use(Rh), e.use(Eh);
  }
};
export {
  Ih as default
};
