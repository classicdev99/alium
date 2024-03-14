(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2178], {
    78020: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return d
            }
        });
        var n = r(24262)
          , a = r(19013)
          , i = r(13882);
        function o(t, e) {
            (0,
            i.Z)(2, arguments);
            var r = (0,
            a.Z)(t)
              , n = (0,
            a.Z)(e)
              , o = r.getTime() - n.getTime();
            return o < 0 ? -1 : o > 0 ? 1 : o
        }
        function u(t) {
            return function(t, e) {
                if (null == t)
                    throw new TypeError("assign requires that input parameter not be null or undefined");
                for (var r in e = e || {})
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }({}, t)
        }
        var c = r(4958)
          , s = 6e4
          , l = 1440
          , f = 43200
          , h = 525600;
        function p(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            (0,
            i.Z)(2, arguments);
            var p = r.locale || c.Z;
            if (!p.formatDistance)
                throw new RangeError("locale must contain localize.formatDistance property");
            var d = o(t, e);
            if (isNaN(d))
                throw new RangeError("Invalid time value");
            var y, v, m = u(r);
            m.addSuffix = Boolean(r.addSuffix),
            m.comparison = d,
            d > 0 ? (y = (0,
            a.Z)(e),
            v = (0,
            a.Z)(t)) : (y = (0,
            a.Z)(t),
            v = (0,
            a.Z)(e));
            var b, g = null == r.roundingMethod ? "round" : String(r.roundingMethod);
            if ("floor" === g)
                b = Math.floor;
            else if ("ceil" === g)
                b = Math.ceil;
            else {
                if ("round" !== g)
                    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
                b = Math.round
            }
            var x, w = v.getTime() - y.getTime(), A = w / s, O = (0,
            n.Z)(v) - (0,
            n.Z)(y), P = (w - O) / s;
            if ("second" === (x = null == r.unit ? A < 1 ? "second" : A < 60 ? "minute" : A < l ? "hour" : P < f ? "day" : P < h ? "month" : "year" : String(r.unit))) {
                var k = b(w / 1e3);
                return p.formatDistance("xSeconds", k, m)
            }
            if ("minute" === x) {
                var E = b(A);
                return p.formatDistance("xMinutes", E, m)
            }
            if ("hour" === x) {
                var S = b(A / 60);
                return p.formatDistance("xHours", S, m)
            }
            if ("day" === x) {
                var j = b(P / l);
                return p.formatDistance("xDays", j, m)
            }
            if ("month" === x) {
                var D = b(P / f);
                return 12 === D && "month" !== r.unit ? p.formatDistance("xYears", 1, m) : p.formatDistance("xMonths", D, m)
            }
            if ("year" === x) {
                var M = b(P / h);
                return p.formatDistance("xYears", M, m)
            }
            throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")
        }
        function d(t, e) {
            return (0,
            i.Z)(1, arguments),
            p(t, Date.now(), e)
        }
    },
    42902: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return o
            }
        });
        var n = r(19013)
          , a = r(13882);
        function i(t) {
            (0,
            a.Z)(1, arguments);
            var e = (0,
            n.Z)(t)
              , r = e.getTime();
            return r
        }
        function o(t) {
            return (0,
            a.Z)(1, arguments),
            Math.floor(i(t) / 1e3)
        }
    },
    32370: function(t, e, r) {
        "use strict";
        r.d(e, {
            Z: function() {
                return u
            }
        });
        var n = r(83946)
          , a = r(19013)
          , i = r(13882);
        function o(t, e) {
            (0,
            i.Z)(2, arguments);
            var r = (0,
            a.Z)(t)
              , o = (0,
            n.Z)(e);
            return isNaN(o) ? new Date(NaN) : o ? (r.setDate(r.getDate() + o),
            r) : r
        }
        function u(t, e) {
            (0,
            i.Z)(2, arguments);
            var r = (0,
            n.Z)(e);
            return o(t, -r)
        }
    },
    20731: function(t, e, r) {
        var n = r(88668)
          , a = r(47443)
          , i = r(1196)
          , o = r(29932)
          , u = r(7518)
          , c = r(74757);
        t.exports = function(t, e, r, s) {
            var l = -1
              , f = a
              , h = !0
              , p = t.length
              , d = []
              , y = e.length;
            if (!p)
                return d;
            r && (e = o(e, u(r))),
            s ? (f = i,
            h = !1) : e.length >= 200 && (f = c,
            h = !1,
            e = new n(e));
            t: for (; ++l < p; ) {
                var v = t[l]
                  , m = null == r ? v : r(v);
                if (v = s || 0 !== v ? v : 0,
                h && m === m) {
                    for (var b = y; b--; )
                        if (e[b] === m)
                            continue t;
                    d.push(v)
                } else
                    f(e, m, s) || d.push(v)
            }
            return d
        }
    },
    54290: function(t, e, r) {
        var n = r(6557);
        t.exports = function(t) {
            return "function" == typeof t ? t : n
        }
    },
    48403: function(t, e, r) {
        var n = r(79833)
          , a = r(11700);
        t.exports = function(t) {
            return a(n(t).toLowerCase())
        }
    },
    29246: function(t, e, r) {
        var n = r(98612)
          , a = r(37005);
        t.exports = function(t) {
            return a(t) && n(t)
        }
    },
    75472: function(t, e, r) {
        var n = r(82689)
          , a = r(1469);
        t.exports = function(t, e, r, i) {
            return null == t ? [] : (a(e) || (e = null == e ? [] : [e]),
            a(r = i ? void 0 : r) || (r = null == r ? [] : [r]),
            n(t, e, r))
        }
    },
    98913: function(t, e, r) {
        var n = r(22545)
          , a = r(54290)
          , i = r(40554)
          , o = 4294967295
          , u = Math.min;
        t.exports = function(t, e) {
            if ((t = i(t)) < 1 || t > 9007199254740991)
                return [];
            var r = o
              , c = u(t, o);
            e = a(e),
            t -= o;
            for (var s = n(c, e); ++r < t; )
                e(r);
            return s
        }
    },
    82569: function(t, e, r) {
        var n = r(20731)
          , a = r(5976)
          , i = r(29246)
          , o = a((function(t, e) {
            return i(t) ? n(t, e) : []
        }
        ));
        t.exports = o
    },
    39185: function(t, e, r) {
        "use strict";
        r.d(e, {
            $: function() {
                return L
            }
        });
        var n = r(14293)
          , a = r.n(n)
          , i = r(18446)
          , o = r.n(i)
          , u = r(23560)
          , c = r.n(u)
          , s = r(1469)
          , l = r.n(s)
          , f = r(67294)
          , h = r(94184)
          , p = r.n(h)
          , d = r(18181)
          , y = r(13481)
          , v = r(48710)
          , m = r(79896);
        function b() {
            return (b = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function g(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t)))
                    return;
                var r = []
                  , n = !0
                  , a = !1
                  , i = void 0;
                try {
                    for (var o, u = t[Symbol.iterator](); !(n = (o = u.next()).done) && (r.push(o.value),
                    !e || r.length !== e); n = !0)
                        ;
                } catch (c) {
                    a = !0,
                    i = c
                } finally {
                    try {
                        n || null == u.return || u.return()
                    } finally {
                        if (a)
                            throw i
                    }
                }
                return r
            }(t, e) || function(t, e) {
                if (!t)
                    return;
                if ("string" === typeof t)
                    return x(t, e);
                var r = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === r && t.constructor && (r = t.constructor.name);
                if ("Map" === r || "Set" === r)
                    return Array.from(t);
                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return x(t, e)
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function x(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = new Array(e); r < e; r++)
                n[r] = t[r];
            return n
        }
        function w(t, e) {
            if (null == t)
                return {};
            var r, n, a = function(t, e) {
                if (null == t)
                    return {};
                var r, n, a = {}, i = Object.keys(t);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    e.indexOf(r) >= 0 || (a[r] = t[r]);
                return a
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
            }
            return a
        }
        function A(t) {
            var e = t.offset
              , r = t.layout
              , n = t.width
              , a = t.dataKey
              , i = t.data
              , o = t.dataPointFormatter
              , u = t.xAxis
              , c = t.yAxis
              , s = w(t, ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"])
              , l = (0,
            m.L6)(s)
              , h = i.map((function(t, i) {
                var s = o(t, a)
                  , h = s.x
                  , p = s.y
                  , d = s.value
                  , y = s.errorVal;
                if (!y)
                    return null;
                var m, x, w = [];
                if (Array.isArray(y)) {
                    var A = g(y, 2);
                    m = A[0],
                    x = A[1]
                } else
                    m = x = y;
                if ("vertical" === r) {
                    var O = u.scale
                      , P = p + e
                      , k = P + n
                      , E = P - n
                      , S = O(d - m)
                      , j = O(d + x);
                    w.push({
                        x1: j,
                        y1: k,
                        x2: j,
                        y2: E
                    }),
                    w.push({
                        x1: S,
                        y1: P,
                        x2: j,
                        y2: P
                    }),
                    w.push({
                        x1: S,
                        y1: k,
                        x2: S,
                        y2: E
                    })
                } else if ("horizontal" === r) {
                    var D = c.scale
                      , M = h + e
                      , N = M - n
                      , Z = M + n
                      , R = D(d - m)
                      , C = D(d + x);
                    w.push({
                        x1: N,
                        y1: C,
                        x2: Z,
                        y2: C
                    }),
                    w.push({
                        x1: M,
                        y1: R,
                        x2: M,
                        y2: C
                    }),
                    w.push({
                        x1: N,
                        y1: R,
                        x2: Z,
                        y2: R
                    })
                }
                return f.createElement(v.m, b({
                    className: "recharts-errorBar",
                    key: "bar-".concat(i)
                }, l), w.map((function(t, e) {
                    return f.createElement("line", b({}, t, {
                        key: "line-".concat(e)
                    }))
                }
                )))
            }
            ));
            return f.createElement(v.m, {
                className: "recharts-errorBars"
            }, h)
        }
        A.defaultProps = {
            stroke: "black",
            strokeWidth: 1.5,
            width: 5,
            offset: 0,
            layout: "horizontal"
        },
        A.displayName = "ErrorBar";
        var O = function(t) {
            return null
        };
        O.displayName = "Cell";
        var P = r(2763)
          , k = r(69055)
          , E = r(52017)
          , S = r(47523)
          , j = r(3128);
        function D(t) {
            return (D = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function M(t, e) {
            if (null == t)
                return {};
            var r, n, a = function(t, e) {
                if (null == t)
                    return {};
                var r, n, a = {}, i = Object.keys(t);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    e.indexOf(r) >= 0 || (a[r] = t[r]);
                return a
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (n = 0; n < i.length; n++)
                    r = i[n],
                    e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r])
            }
            return a
        }
        function N() {
            return (N = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = arguments[e];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                }
                return t
            }
            ).apply(this, arguments)
        }
        function Z(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                r.push.apply(r, n)
            }
            return r
        }
        function R(t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Z(Object(r), !0).forEach((function(e) {
                    C(t, e, r[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Z(Object(r)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }
                ))
            }
            return t
        }
        function C(t, e, r) {
            return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = r,
            t
        }
        function _(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function T(t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
        }
        function B(t, e) {
            return (B = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        function F(t) {
            var e = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var r, n = I(t);
                if (e) {
                    var a = I(this).constructor;
                    r = Reflect.construct(n, arguments, a)
                } else
                    r = n.apply(this, arguments);
                return z(this, r)
            }
        }
        function z(t, e) {
            return !e || "object" !== D(e) && "function" !== typeof e ? function(t) {
                if (void 0 === t)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }
        function I(t) {
            return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        var L = function(t) {
            !function(t, e) {
                if ("function" !== typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && B(t, e)
            }(u, t);
            var e, r, n, i = F(u);
            function u() {
                var t;
                _(this, u);
                for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
                    r[n] = arguments[n];
                return (t = i.call.apply(i, [this].concat(r))).state = {
                    isAnimationFinished: !1
                },
                t.id = (0,
                k.EL)("recharts-bar-"),
                t.handleAnimationEnd = function() {
                    var e = t.props.onAnimationEnd;
                    t.setState({
                        isAnimationFinished: !0
                    }),
                    e && e()
                }
                ,
                t.handleAnimationStart = function() {
                    var e = t.props.onAnimationStart;
                    t.setState({
                        isAnimationFinished: !1
                    }),
                    e && e()
                }
                ,
                t
            }
            return e = u,
            n = [{
                key: "getDerivedStateFromProps",
                value: function(t, e) {
                    return t.animationId !== e.prevAnimationId ? {
                        prevAnimationId: t.animationId,
                        curData: t.data,
                        prevData: e.curData
                    } : t.data !== e.curData ? {
                        curData: t.data
                    } : null
                }
            }, {
                key: "renderRectangle",
                value: function(t, e) {
                    return f.isValidElement(t) ? f.cloneElement(t, e) : c()(t) ? t(e) : f.createElement(y.A, e)
                }
            }],
            (r = [{
                key: "renderRectanglesStatically",
                value: function(t) {
                    var e = this
                      , r = this.props.shape
                      , n = (0,
                    m.L6)(this.props);
                    return t && t.map((function(t, a) {
                        var i = R(R(R({}, n), t), {}, {
                            index: a
                        });
                        return f.createElement(v.m, N({
                            className: "recharts-bar-rectangle"
                        }, (0,
                        m.bw)(e.props, t, a), {
                            key: "rectangle-".concat(a)
                        }), u.renderRectangle(r, i))
                    }
                    ))
                }
            }, {
                key: "renderRectanglesWithAnimation",
                value: function() {
                    var t = this
                      , e = this.props
                      , r = e.data
                      , n = e.layout
                      , a = e.isAnimationActive
                      , i = e.animationBegin
                      , o = e.animationDuration
                      , u = e.animationEasing
                      , c = e.animationId
                      , s = this.state.prevData;
                    return f.createElement(d.ZP, {
                        begin: i,
                        duration: o,
                        isActive: a,
                        easing: u,
                        from: {
                            t: 0
                        },
                        to: {
                            t: 1
                        },
                        key: "bar-".concat(c),
                        onAnimationEnd: this.handleAnimationEnd,
                        onAnimationStart: this.handleAnimationStart
                    }, (function(e) {
                        var a = e.t
                          , i = r.map((function(t, e) {
                            var r = s && s[e];
                            if (r) {
                                var i = (0,
                                k.k4)(r.x, t.x)
                                  , o = (0,
                                k.k4)(r.y, t.y)
                                  , u = (0,
                                k.k4)(r.width, t.width)
                                  , c = (0,
                                k.k4)(r.height, t.height);
                                return R(R({}, t), {}, {
                                    x: i(a),
                                    y: o(a),
                                    width: u(a),
                                    height: c(a)
                                })
                            }
                            if ("horizontal" === n) {
                                var l = (0,
                                k.k4)(0, t.height)(a);
                                return R(R({}, t), {}, {
                                    y: t.y + t.height - l,
                                    height: l
                                })
                            }
                            var f = (0,
                            k.k4)(0, t.width)(a);
                            return R(R({}, t), {}, {
                                width: f
                            })
                        }
                        ));
                        return f.createElement(v.m, null, t.renderRectanglesStatically(i))
                    }
                    ))
                }
            }, {
                key: "renderRectangles",
                value: function() {
                    var t = this.props
                      , e = t.data
                      , r = t.isAnimationActive
                      , n = this.state.prevData;
                    return !(r && e && e.length) || n && o()(n, e) ? this.renderRectanglesStatically(e) : this.renderRectanglesWithAnimation()
                }
            }, {
                key: "renderBackground",
                value: function() {
                    var t = this
                      , e = this.props.data
                      , r = (0,
                    m.L6)(this.props.background);
                    return e.map((function(e, n) {
                        e.value;
                        var a = e.background
                          , i = M(e, ["value", "background"]);
                        if (!a)
                            return null;
                        var o = R(R(R(R(R({}, i), {}, {
                            fill: "#eee"
                        }, a), r), (0,
                        m.bw)(t.props, e, n)), {}, {
                            index: n,
                            key: "background-bar-".concat(n),
                            className: "recharts-bar-background-rectangle"
                        });
                        return u.renderRectangle(t.props.background, o)
                    }
                    ))
                }
            }, {
                key: "renderErrorBar",
                value: function() {
                    if (this.props.isAnimationActive && !this.state.isAnimationFinished)
                        return null;
                    var t = this.props
                      , e = t.data
                      , r = t.xAxis
                      , n = t.yAxis
                      , a = t.layout
                      , i = t.children
                      , o = (0,
                    E.NN)(i, A.displayName);
                    if (!o)
                        return null;
                    var u = "vertical" === a ? e[0].height / 2 : e[0].width / 2;
                    function c(t, e) {
                        return {
                            x: t.x,
                            y: t.y,
                            value: t.value,
                            errorVal: (0,
                            j.F$)(t, e)
                        }
                    }
                    return o.map((function(t, i) {
                        return f.cloneElement(t, {
                            key: "error-bar-".concat(i),
                            data: e,
                            xAxis: r,
                            yAxis: n,
                            layout: a,
                            offset: u,
                            dataPointFormatter: c
                        })
                    }
                    ))
                }
            }, {
                key: "render",
                value: function() {
                    var t = this.props
                      , e = t.hide
                      , r = t.data
                      , n = t.className
                      , i = t.xAxis
                      , o = t.yAxis
                      , u = t.left
                      , c = t.top
                      , s = t.width
                      , l = t.height
                      , h = t.isAnimationActive
                      , d = t.background
                      , y = t.id;
                    if (e || !r || !r.length)
                        return null;
                    var m = this.state.isAnimationFinished
                      , b = p()("recharts-bar", n)
                      , g = i && i.allowDataOverflow || o && o.allowDataOverflow
                      , x = a()(y) ? this.id : y;
                    return f.createElement(v.m, {
                        className: b
                    }, g ? f.createElement("defs", null, f.createElement("clipPath", {
                        id: "clipPath-".concat(x)
                    }, f.createElement("rect", {
                        x: u,
                        y: c,
                        width: s,
                        height: l
                    }))) : null, f.createElement(v.m, {
                        className: "recharts-bar-rectangles",
                        clipPath: g ? "url(#clipPath-".concat(x, ")") : null
                    }, d ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(), (!h || m) && P.e.renderCallByParent(this.props, r))
                }
            }]) && T(e.prototype, r),
            n && T(e, n),
            u
        }(f.PureComponent);
        L.displayName = "Bar",
        L.defaultProps = {
            xAxisId: 0,
            yAxisId: 0,
            legendType: "rect",
            minPointSize: 0,
            hide: !1,
            data: [],
            layout: "vertical",
            isAnimationActive: !S.x.isSsr,
            animationBegin: 0,
            animationDuration: 400,
            animationEasing: "ease"
        },
        L.getComposedData = function(t) {
            var e = t.props
              , r = t.item
              , n = t.barPosition
              , a = t.bandSize
              , i = t.xAxis
              , o = t.yAxis
              , u = t.xAxisTicks
              , c = t.yAxisTicks
              , s = t.stackedData
              , f = t.dataStartIndex
              , h = t.displayedData
              , p = t.offset
              , d = (0,
            j.Bu)(n, r);
            if (!d)
                return null;
            var y = e.layout
              , v = r.props
              , m = v.dataKey
              , b = v.children
              , g = v.minPointSize
              , x = "horizontal" === y ? o : i
              , w = s ? x.scale.domain() : null
              , A = (0,
            j.Yj)({
                numericAxis: x
            })
              , P = (0,
            E.NN)(b, O.displayName)
              , S = h.map((function(t, e) {
                var n, h, p, v, b, x;
                if (s ? n = (0,
                j.Vv)(s[f + e], w) : (n = (0,
                j.F$)(t, m),
                l()(n) || (n = [A, n])),
                "horizontal" === y) {
                    if (h = (0,
                    j.Fy)({
                        axis: i,
                        ticks: u,
                        bandSize: a,
                        offset: d.offset,
                        entry: t,
                        index: e
                    }),
                    p = o.scale(n[1]),
                    v = d.size,
                    b = o.scale(n[0]) - o.scale(n[1]),
                    x = {
                        x: h,
                        y: o.y,
                        width: v,
                        height: o.height
                    },
                    Math.abs(g) > 0 && Math.abs(b) < Math.abs(g)) {
                        var O = (0,
                        k.uY)(b || g) * (Math.abs(g) - Math.abs(b));
                        p -= O,
                        b += O
                    }
                } else
                    h = i.scale(n[0]),
                    p = (0,
                    j.Fy)({
                        axis: o,
                        ticks: c,
                        bandSize: a,
                        offset: d.offset,
                        entry: t,
                        index: e
                    }),
                    v = i.scale(n[1]) - i.scale(n[0]),
                    b = d.size,
                    x = {
                        x: i.x,
                        y: p,
                        width: i.width,
                        height: b
                    },
                    Math.abs(g) > 0 && Math.abs(v) < Math.abs(g) && (v += (0,
                    k.uY)(v || g) * (Math.abs(g) - Math.abs(v)));
                return R(R(R({}, t), {}, {
                    x: h,
                    y: p,
                    width: v,
                    height: b,
                    value: s ? n : n[1],
                    payload: t,
                    background: x
                }, P && P[e] && P[e].props), {}, {
                    tooltipPayload: [(0,
                    j.Qo)(r, t)],
                    tooltipPosition: {
                        x: h + v / 2,
                        y: p + b / 2
                    }
                })
            }
            ));
            return R({
                data: S,
                layout: y
            }, p)
        }
    },
    94831: function(t, e, r) {
        "use strict";
        r.d(e, {
            v: function() {
                return c
            }
        });
        var n = r(63823)
          , a = r(39185)
          , i = r(3023)
          , o = r(75358)
          , u = r(97187)
          , c = (0,
        n.z)({
            chartName: "BarChart",
            GraphicalChild: a.$,
            defaultTooltipEventType: "axis",
            validateTooltipEventTypes: ["axis", "item"],
            axisComponents: [{
                axisType: "xAxis",
                AxisComp: i.K
            }, {
                axisType: "yAxis",
                AxisComp: o.B
            }],
            formatAxisMap: u.t9
        })
    },
    73359: function(t, e, r) {
        "use strict";
        r.d(e, {
            t: function() {
                return s
            }
        });
        var n = r(70655)
          , a = r(67294)
          , i = r(14012)
          , o = r(64316)
          , u = r(66252)
          , c = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "subscribeToMore"];
        function s(t, e) {
            var r, s = (0,
            a.useRef)(new Set), l = (0,
            a.useRef)(), f = l.current ? (0,
            i.J)(e, l.current) : e, h = (0,
            o.A)((0,
            u.x)(e && e.client), null !== (r = null === f || void 0 === f ? void 0 : f.query) && void 0 !== r ? r : t), p = h.useQuery((0,
            n.__assign)((0,
            n.__assign)({}, f), {
                skip: !l.current
            })), d = p.observable.options.initialFetchPolicy || h.getDefaultFetchPolicy(), y = Object.assign(p, {
                called: !!l.current
            }), v = (0,
            a.useMemo)((function() {
                for (var t = {}, e = function(e) {
                    var r = y[e];
                    t[e] = function() {
                        return l.current || (l.current = Object.create(null),
                        h.forceUpdate()),
                        r.apply(this, arguments)
                    }
                }, r = 0, n = c; r < n.length; r++) {
                    e(n[r])
                }
                return t
            }
            ), []);
            return Object.assign(y, v),
            (0,
            a.useEffect)((function() {
                return function() {
                    s.current.forEach((function(t) {
                        t.abort()
                    }
                    ))
                }
            }
            ), []),
            [(0,
            a.useCallback)((function(t) {
                var e = new AbortController;
                s.current.add(e),
                l.current = t ? (0,
                n.__assign)((0,
                n.__assign)({}, t), {
                    fetchPolicy: t.fetchPolicy || d
                }) : {
                    fetchPolicy: d
                };
                var r = h.asyncUpdate(e.signal).then((function(t) {
                    return s.current.delete(e),
                    Object.assign(t, v)
                }
                ));
                return r.catch((function() {
                    s.current.delete(e)
                }
                )),
                r
            }
            ), []), y]
        }
    },
    88305: function(t, e, r) {
        "use strict";
        r.d(e, {
            f: function() {
                return a
            }
        });
        var n = r(67294);
        function a(t) {
            var e = n.createContext(null);
            return {
                Provider: function(r) {
                    var a = t(r.initialState);
                    return n.createElement(e.Provider, {
                        value: a
                    }, r.children)
                },
                useContainer: function() {
                    var t = n.useContext(e);
                    if (null === t)
                        throw new Error("Component must be wrapped with <Container.Provider>");
                    return t
                }
            }
        }
    }
}]);
