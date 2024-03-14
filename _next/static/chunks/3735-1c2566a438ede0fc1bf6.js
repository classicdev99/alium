"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3735], {
    55304: function(n, e, r) {
        r.d(e, {
            D: function() {
                return a
            }
        });
        var i = r(82212)
          , t = r(21891)
          , o = r(67978);
        function a(n) {
            if (n instanceof i.WU)
                return n.address;
            if ((0,
            o.U)(n))
                return t.V.defaultToken;
            throw new Error("invalid currency")
        }
    },
    31266: function(n, e, r) {
        r.d(e, {
            y: function() {
                return v
            },
            z: function() {
                return f
            }
        });
        var i = r(80318)
          , t = r(82212)
          , o = r(67294)
          , a = r(85754)
          , d = r(52956)
          , s = r(58924)
          , c = r(30266)
          , l = r(809)
          , u = r.n(l)
          , p = r(206)
          , x = r(21340)
          , h = r(52503);
        function f(n, e) {
            var r = (0,
            a.a)().chainId
              , l = null === e || void 0 === e ? void 0 : e.factory
              , f = null === e || void 0 === e ? void 0 : e.initCodeHash
              , v = (0,
            o.useMemo)((function() {
                return n.map((function(n) {
                    var e = (0,
                    i.Z)(n, 2)
                      , t = e[0]
                      , o = e[1];
                    return [(0,
                    d.pu)(t, r), (0,
                    d.pu)(o, r)]
                }
                ))
            }
            ), [r, n])
              , m = function(n) {
                var e = (0,
                a.a)().chainId
                  , r = (0,
                o.useMemo)((function() {
                    return null === n || void 0 === n ? void 0 : n.reduce((function(n, e) {
                        return n + e
                    }
                    ), "")
                }
                ), [n])
                  , i = (0,
                o.useMemo)((function() {
                    return (null === n || void 0 === n ? void 0 : n.length) && !!e && "useReservesOfPairs/".concat(e, "/").concat(r)
                }
                ), [e, null === n || void 0 === n ? void 0 : n.length, r]);
                return (0,
                h.ZP)(i, (0,
                c.Z)(u().mark((function e() {
                    return u().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.abrupt("return", (0,
                                x.i)(p.yM, n.map((function(n) {
                                    return {
                                        address: n,
                                        name: "getReserves"
                                    }
                                }
                                ))));
                            case 4:
                                e.prev = 4,
                                e.t0 = e.catch(0),
                                console.error(e.t0);
                            case 7:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 4]])
                }
                ))))
            }((0,
            o.useMemo)((function() {
                var n;
                return null === (n = v.map((function(n) {
                    var e = (0,
                    i.Z)(n, 2)
                      , r = e[0]
                      , o = e[1];
                    try {
                        return r && o && !r.equals(o) ? t.sO.getAddress(r, o, l, f) : void 0
                    } catch (a) {
                        return void console.error(a)
                    }
                }
                ))) || void 0 === n ? void 0 : n.filter((function(n) {
                    return !!n
                }
                ))
            }
            ), [l, v, f]))
              , g = m.data
              , y = void 0 === g ? [] : g
              , w = m.isValidating;
            return {
                pairs: (0,
                o.useMemo)((function() {
                    return null === y || void 0 === y ? void 0 : y.map((function(n, e) {
                        var r = v[e][0]
                          , o = v[e][1];
                        if (w)
                            return [s._.LOADING, null];
                        if (!n)
                            return [s._.NOT_EXISTS, null];
                        if (!r || !o || r.equals(o))
                            return [s._.INVALID, null];
                        var a = n.reserve0
                          , d = n.reserve1
                          , c = null !== r && void 0 !== r && r.sortsBefore(o) ? [r, o] : [o, r]
                          , u = (0,
                        i.Z)(c, 2)
                          , p = u[0]
                          , x = u[1];
                        return [s._.EXISTS, new t.sO(new t.dt(p,a.toString()),new t.dt(x,d.toString()),l,f)]
                    }
                    ))
                }
                ), [y, v, w, l, f]),
                loading: w
            }
        }
        function v(n, e, r) {
            var i = f([[e, r]], n).pairs;
            return (null === i || void 0 === i ? void 0 : i[0]) || []
        }
    },
    58924: function(n, e, r) {
        var i;
        r.d(e, {
            _: function() {
                return i
            }
        }),
        function(n) {
            n[n.LOADING = 0] = "LOADING",
            n[n.NOT_EXISTS = 1] = "NOT_EXISTS",
            n[n.EXISTS = 2] = "EXISTS",
            n[n.INVALID = 3] = "INVALID"
        }(i || (i = {}))
    },
    10530: function(n, e, r) {
        r.d(e, {
            Aq: function() {
                return o
            }
        });
        var i = r(22906)
          , t = r(47646)
          , o = function(n) {
            var e = (0,
            t.x)().chainId;
            return (0,
            i.getExchangeConfig)(n || e, "alium")
        }
    },
    86355: function(n, e, r) {
        var i = r(30266)
          , t = r(809)
          , o = r.n(t)
          , a = r(82212)
          , d = r(17409)
          , s = r(52503);
        e.Z = function(n) {
            var e = (0,
            d.Ib)(null === n || void 0 === n ? void 0 : n.address, !1)
              , r = (0,
            s.ZP)((null === n || void 0 === n ? void 0 : n.address) && "totalSupply/".concat(null === n || void 0 === n ? void 0 : n.address), (0,
            i.Z)(o().mark((function n() {
                var r;
                return o().wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0,
                            n.next = 3,
                            e.totalSupply();
                        case 3:
                            return r = n.sent,
                            n.abrupt("return", r);
                        case 7:
                            n.prev = 7,
                            n.t0 = n.catch(0),
                            console.error(n.t0);
                        case 10:
                        case "end":
                            return n.stop()
                        }
                }
                ), n, null, [[0, 7]])
            }
            )))).data;
            return n && r ? new a.dt(n,r.toString()) : void 0
        }
    },
    98846: function(n, e, r) {
        r.d(e, {
            b: function() {
                return i
            }
        });
        var i = r(93350).default.span.withConfig({
            displayName: "styleds__Dots",
            componentId: "sc-1dfqu63-0"
        })(["&::after{display:inline-block;animation:ellipsis 1.25s infinite;content:'.';width:1em;text-align:left;}@keyframes ellipsis{0%{content:'.';}33%{content:'..';}66%{content:'...';}}"])
    },
    53322: function(n, e, r) {
        r.d(e, {
            WP: function() {
                return S
            },
            ZP: function() {
                return A
            }
        });
        var i = r(80318)
          , t = r(82212)
          , o = r(55304)
          , a = r(68084)
          , d = r(41810)
          , s = r(45896)
          , c = r(67294)
          , l = r(85754)
          , u = r(86355)
          , p = r(4536)
          , x = r(60963)
          , h = r(52956)
          , f = r(62639)
          , v = r(95268)
          , m = r(93350)
          , g = r(92107)
          , y = r(61964)
          , w = r(62268)
          , j = r(98846)
          , b = r(99270)
          , k = r(87654)
          , C = r(42)
          , _ = r(85893);
        function S(n) {
            var e = n.pair
              , r = n.showUnwrapped
              , o = void 0 !== r && r
              , s = (0,
            d.$G)().t
              , p = (0,
            l.a)().account
              , m = (0,
            v.l)()
              , g = (0,
            c.useMemo)((function() {
                return {
                    currency0: o ? e.token0 : (0,
                    h.Bv)(e.token0, m.providerParams.nativeCurrency),
                    currency1: o ? e.token1 : (0,
                    h.Bv)(e.token1, m.providerParams.nativeCurrency)
                }
            }
            ), [m.providerParams.nativeCurrency, e.token0, e.token1, o])
              , w = g.currency0
              , j = g.currency1
              , k = (0,
            c.useState)(!1)
              , S = k[0]
              , A = k[1]
              , I = (0,
            a.mM)(null !== p && void 0 !== p ? p : void 0, e.liquidityToken)
              , T = (0,
            u.Z)(e.liquidityToken)
              , Z = e && T && I && t.QA.greaterThanOrEqual(T.raw, I.raw) ? [e.getLiquidityValue(e.token0, T, I, !1), e.getLiquidityValue(e.token1, T, I, !1)] : [void 0, void 0]
              , P = (0,
            i.Z)(Z, 2)
              , z = P[0]
              , L = P[1];
            return (0,
            _.jsx)(_.Fragment, {
                children: I && (0,
                _.jsx)(D, {
                    children: (0,
                    _.jsx)(N, {
                        children: (0,
                        _.jsxs)(y.Tz, {
                            children: [(0,
                            _.jsx)(q, {
                                children: (0,
                                _.jsx)(C.DA, {
                                    children: (0,
                                    _.jsx)(f.xv, {
                                        style: {
                                            textTransform: "uppercase",
                                            fontWeight: 600
                                        },
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        children: s("LP Tokens in your Wallet")
                                    })
                                })
                            }), (0,
                            _.jsxs)(q, {
                                onClick: function() {
                                    return A(!S)
                                },
                                style: {
                                    paddingRight: "16px",
                                    paddingLeft: "16px"
                                },
                                children: [(0,
                                _.jsxs)(C.DA, {
                                    children: [(0,
                                    _.jsx)(b.Z, {
                                        currency0: w,
                                        currency1: j,
                                        margin: !0,
                                        size: 32
                                    }), (0,
                                    _.jsxs)(f.xv, {
                                        fontSize: "14px",
                                        color: "#8990A5",
                                        pl: "8px",
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: [w.symbol, "/", j.symbol]
                                    })]
                                }), (0,
                                _.jsx)(C.DA, {
                                    children: (0,
                                    _.jsx)(f.xv, {
                                        fontSize: "14px",
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: I ? (0,
                                        x.E)(I) : "-"
                                    })
                                })]
                            }), (0,
                            _.jsxs)(y.Tz, {
                                gap: "4px",
                                children: [(0,
                                _.jsxs)(q, {
                                    style: {
                                        backgroundColor: "#F4F5FA",
                                        borderRadius: "6px",
                                        paddingRight: "16px",
                                        paddingLeft: "16px"
                                    },
                                    children: [(0,
                                    _.jsxs)(f.xv, {
                                        fontSize: "14px",
                                        color: "#8990A5",
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: [w.symbol, ":"]
                                    }), z ? (0,
                                    _.jsx)(C.DA, {
                                        children: (0,
                                        _.jsx)(f.xv, {
                                            ml: "6px",
                                            fontSize: "14px",
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: (0,
                                            x.E)(z)
                                        })
                                    }) : "-"]
                                }), (0,
                                _.jsxs)(q, {
                                    style: {
                                        paddingRight: "16px",
                                        paddingLeft: "16px"
                                    },
                                    children: [(0,
                                    _.jsxs)(f.xv, {
                                        fontSize: "14px",
                                        color: "#8990A5",
                                        style: {
                                            fontWeight: 500
                                        },
                                        children: [j.symbol, ":"]
                                    }), L ? (0,
                                    _.jsx)(C.DA, {
                                        children: (0,
                                        _.jsx)(f.xv, {
                                            ml: "6px",
                                            fontSize: "14px",
                                            style: {
                                                fontWeight: 500
                                            },
                                            children: (0,
                                            x.E)(L)
                                        })
                                    }) : "-"]
                                })]
                            })]
                        })
                    })
                })
            })
        }
        function A(n) {
            var e = n.pair
              , r = (0,
            d.$G)().t
              , s = (0,
            l.a)().account
              , m = (0,
            v.l)()
              , g = (0,
            c.useMemo)((function() {
                return {
                    currency0: (0,
                    h.Bv)(e.token0, m.providerParams.nativeCurrency),
                    currency1: (0,
                    h.Bv)(e.token1, m.providerParams.nativeCurrency)
                }
            }
            ), [m.providerParams.nativeCurrency, e.token0, e.token1])
              , S = g.currency0
              , A = g.currency1
              , D = e.liquidityToken.address
              , N = (0,
            c.useState)(!1)
              , P = N[0]
              , z = N[1]
              , L = (0,
            a.mM)(null !== s && void 0 !== s ? s : void 0, e.liquidityToken)
              , E = (0,
            u.Z)(e.liquidityToken)
              , V = L && E && t.QA.greaterThanOrEqual(E.raw, L.raw) ? new t.gG(L.raw,E.raw) : void 0
              , W = e && E && L && t.QA.greaterThanOrEqual(E.raw, L.raw) ? [e.getLiquidityValue(e.token0, E, L, !1), e.getLiquidityValue(e.token1, E, L, !1)] : [void 0, void 0]
              , M = (0,
            i.Z)(W, 2)
              , O = M[0]
              , R = M[1];
            return (0,
            _.jsx)(I, {
                children: (0,
                _.jsxs)(y.Tz, {
                    gap: "12px",
                    children: [(0,
                    _.jsxs)(q, {
                        onClick: function() {
                            return z(!P)
                        },
                        style: {
                            cursor: "pointer"
                        },
                        children: [(0,
                        _.jsxs)(C.DA, {
                            children: [(0,
                            _.jsx)(b.Z, {
                                currency0: S,
                                currency1: A,
                                margin: !0,
                                size: 32
                            }), (0,
                            _.jsx)(f.xv, {
                                style: {
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    fontWeight: 400
                                },
                                children: S && A ? "".concat(S.symbol, "/").concat(A.symbol) : (0,
                                _.jsx)(j.b, {
                                    children: "Loading"
                                })
                            }), (0,
                            _.jsx)(Z, {
                                variant: "text",
                                onClick: function(n) {
                                    navigator.clipboard.writeText(D),
                                    n.stopPropagation()
                                },
                                title: r("Copy LP Token address"),
                                children: (0,
                                _.jsx)(f.Vp, {
                                    width: "24px",
                                    height: "24px"
                                })
                            })]
                        }), (0,
                        _.jsx)(C.DA, {
                            children: P ? (0,
                            _.jsx)(f.AR, {
                                style: {
                                    marginLeft: "10px"
                                }
                            }) : (0,
                            _.jsx)(f.ch, {
                                style: {
                                    marginLeft: "10px"
                                }
                            })
                        })]
                    }), P && (0,
                    _.jsxs)(y.Tz, {
                        gap: "8px",
                        triggerMobile: !0,
                        children: [(0,
                        _.jsxs)(q, {
                            background: !0,
                            children: [(0,
                            _.jsx)(C.DA, {
                                children: (0,
                                _.jsx)(f.xv, {
                                    color: "#8990a5",
                                    children: r("Pooled {{currencySymbol}}:", {
                                        currencySymbol: S.symbol
                                    })
                                })
                            }), O ? (0,
                            _.jsxs)(C.DA, {
                                children: [(0,
                                _.jsx)(T, {
                                    ml: "6px",
                                    children: (0,
                                    x.E)(O)
                                }), (0,
                                _.jsx)(w.Z, {
                                    size: "26px",
                                    style: {
                                        marginLeft: "8px",
                                        padding: 4
                                    },
                                    currency: S
                                })]
                            }) : "-"]
                        }), (0,
                        _.jsxs)(q, {
                            children: [(0,
                            _.jsx)(C.DA, {
                                children: (0,
                                _.jsx)(f.xv, {
                                    color: "#8990a5",
                                    children: r("Pooled {{currencySymbol}}:", {
                                        currencySymbol: A.symbol
                                    })
                                })
                            }), R ? (0,
                            _.jsxs)(C.DA, {
                                children: [(0,
                                _.jsx)(T, {
                                    ml: "6px",
                                    children: (0,
                                    x.E)(R)
                                }), (0,
                                _.jsx)(w.Z, {
                                    size: "26px",
                                    style: {
                                        marginLeft: "8px",
                                        padding: 4
                                    },
                                    currency: A
                                })]
                            }) : "-"]
                        }), (0,
                        _.jsxs)(q, {
                            background: !0,
                            children: [(0,
                            _.jsx)(f.xv, {
                                color: "#8990a5",
                                children: r("Your pool tokens:")
                            }), (0,
                            _.jsx)(T, {
                                children: L ? L.toSignificant(4) : "-"
                            })]
                        }), (0,
                        _.jsxs)(q, {
                            children: [(0,
                            _.jsx)(f.xv, {
                                color: "#8990a5",
                                children: r("Your pool share:")
                            }), (0,
                            _.jsx)(T, {
                                children: V ? "".concat(V.toFixed(2), "%") : "-"
                            })]
                        }), (0,
                        _.jsxs)(C.m0, {
                            marginTop: "10px",
                            children: [(0,
                            _.jsx)(k.p, {
                                href: p.Z.addByMultiple((0,
                                o.D)(S), (0,
                                o.D)(A)),
                                children: (0,
                                _.jsx)(f.zx, {
                                    children: r("Add")
                                })
                            }), (0,
                            _.jsx)(k.p, {
                                href: p.Z.removeByMultiple((0,
                                o.D)(S), (0,
                                o.D)(A)),
                                children: (0,
                                _.jsx)(f.zx, {
                                    variant: "secondary",
                                    children: r("Remove")
                                })
                            })]
                        })]
                    })]
                })
            })
        }
        var q = (0,
        m.default)(C.m0).withConfig({
            displayName: "PositionCard__FixedHeightRow",
            componentId: "sc-1q1sxbh-0"
        })(["height:36px;", ""], (function(n) {
            return n.background && "\n    background: #F5F7FF;\n    border-radius: 6px;\n  "
        }
        ))
          , I = (0,
        m.default)(g.Zb).withConfig({
            displayName: "PositionCard__HoverCard",
            componentId: "sc-1q1sxbh-1"
        })(["border:1px solid ", ";border-radius:0;&:hover{border:1px solid ", ";}"], (function(n) {
            return n.theme.colors.invertedContrast
        }
        ), (function(n) {
            var e = n.theme;
            return (0,
            s._j)(.06, e.colors.invertedContrast)
        }
        ))
          , T = (0,
        m.default)(f.xv).withConfig({
            displayName: "PositionCard__StyledPoolText",
            componentId: "sc-1q1sxbh-2"
        })(["font-weight:700;color:#0b1359;"])
          , Z = (0,
        m.default)(f.hU).withConfig({
            displayName: "PositionCard__CopyButtonWrapper",
            componentId: "sc-1q1sxbh-3"
        })(["width:30px;height:30px;"])
          , D = (0,
        m.default)(f.Zb).withConfig({
            displayName: "PositionCard__StyledUIKitCard",
            componentId: "sc-1q1sxbh-4"
        })(["border-radius:6px;max-width:738px;"])
          , N = (0,
        m.default)(f.eW).withConfig({
            displayName: "PositionCard__StyledCardBody",
            componentId: "sc-1q1sxbh-5"
        })(["padding:24px;"])
    },
    99629: function(n, e, r) {
        r.d(e, {
            Z: function() {
                return d
            }
        });
        var i = r(62639)
          , t = r(93350)
          , o = r(85893)
          , a = (0,
        t.default)(i.Zb).withConfig({
            displayName: "SwapAppBody__BodyWrapper",
            componentId: "sc-161cb1m-0"
        })(["position:relative;width:100%;z-index:5;border-radius:16px;"]);
        function d(n) {
            var e = n.children;
            return (0,
            o.jsx)(a, {
                children: e
            })
        }
    },
    51260: function(n, e, r) {
        r.d(e, {
            Z: function() {
                return c
            }
        });
        var i = r(93350)
          , t = r(79308)
          , o = i.default.div.withConfig({
            displayName: "swapstyled__RootSwap",
            componentId: "sc-1p5mfq1-0"
        })(["display:flex;justify-content:center;width:100%;background:url('images/swap/left_arrow_swap.png'),url('images/swap/right_arrow_swap.png');background-position:left 60px,right 60px;background-repeat:no-repeat,no-repeat;@media ", "{background-position:left 66px,calc(100% + 104px) 66px;}@media ", "{background-position:left 43px,calc(100% + 155px) 43px;}@media ", "{background-position:calc(0% - 172px) 17px,calc(100% + 142px) 17px;background-size:319px 136px,258px 115px;}"], t.mq.down(t.AV.lg), t.mq.down(t.AV.lg), t.mq.down(t.AV.sm))
          , a = i.default.div.withConfig({
            displayName: "swapstyled__Container",
            componentId: "sc-1p5mfq1-1"
        })(["max-width:785px;width:100%;padding:40px;position:relative;@media ", "{max-width:780px;}@media ", "{max-width:780px;}@media ", "{max-width:770px;}@media ", "{padding:40px 10px 10px 10px;}"], t.mq.down(t.AV.xl), t.mq.down(t.AV.lg), t.mq.down(t.AV.md), t.mq.down(t.AV.sm))
          , d = r(85893)
          , s = function n(e) {
            var r = e.children;
            return (0,
            d.jsx)(d.Fragment, {
                children: (0,
                d.jsx)(n.Root, {
                    children: (0,
                    d.jsx)(n.Container, {
                        children: r
                    })
                })
            })
        };
        s.Root = (0,
        i.default)(o).withConfig({
            displayName: "SwapContainter__Root",
            componentId: "sc-f1q6m7-0"
        })(["@media (max-width:1021px){padding-bottom:87px;}"]),
        s.Container = (0,
        i.default)(a).withConfig({
            displayName: "SwapContainter__Container",
            componentId: "sc-f1q6m7-1"
        })([""]);
        var c = s
    }
}]);
