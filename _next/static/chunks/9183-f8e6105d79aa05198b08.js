"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9183], {
    33652: function(r, n, e) {
        e.d(n, {
            A: function() {
                return a
            },
            j: function() {
                return u
            }
        });
        var t = e(11163)
          , o = e(20293)
          , a = function() {
            return (0,
            t.useRouter)().pathname.includes("/add") ? o.s.ADD : o.s.SWAP
        }
          , u = function() {
            return window.location.pathname.includes("/add") ? o.s.ADD : o.s.SWAP
        }
    },
    62511: function(r, n, e) {
        e.d(n, {
            R: function() {
                return l
            }
        });
        var t = e(92809)
          , o = e(30266)
          , a = e(809)
          , u = e.n(a)
          , c = e(11163)
          , i = e(1001);
        function d(r, n) {
            var e = Object.keys(r);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(r);
                n && (t = t.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(r, n).enumerable
                }
                ))),
                e.push.apply(e, t)
            }
            return e
        }
        function s(r) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {};
                n % 2 ? d(Object(e), !0).forEach((function(n) {
                    (0,
                    t.Z)(r, n, e[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : d(Object(e)).forEach((function(n) {
                    Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n))
                }
                ))
            }
            return r
        }
        var l = function() {
            var r = (0,
            c.useRouter)()
              , n = function() {
                var n = (0,
                o.Z)(u().mark((function n(e) {
                    return u().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                r.push({
                                    pathname: r.pathname,
                                    query: s(s(s({}, r.query), e), {}, {
                                        fromChainId: r.query.fromChainId
                                    })
                                });
                            case 2:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(r) {
                    return n.apply(this, arguments)
                }
            }()
              , e = function() {
                var n = (0,
                o.Z)(u().mark((function n(e) {
                    var t, o, a, c;
                    return u().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return t = (0,
                                i.e)(),
                                o = (0,
                                i.K)(t),
                                a = o.data,
                                c = s(s({}, a), {}, {
                                    fromChainId: e.fromChainId
                                }),
                                n.next = 5,
                                r.replace({
                                    pathname: r.pathname,
                                    query: s(s({}, r.query), c)
                                });
                            case 5:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )));
                return function(r) {
                    return n.apply(this, arguments)
                }
            }();
            return {
                history: r,
                redirect: n,
                syncChain: e
            }
        }
    },
    2737: function(r, n, e) {
        e.d(n, {
            Z: function() {
                return i
            },
            B: function() {
                return d
            }
        });
        var t = e(55304)
          , o = e(4536)
          , a = e(21891)
          , u = e(33652)
          , c = e(20293)
          , i = function(r, n, e) {
            var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
              , s = (0,
            u.j)()
              , l = s === c.s.ADD ? o.Z.addByMultiple : o.Z.exchangeByMultiple
              , f = s === c.s.ADD ? o.Z.addByOne : o.Z.exchangeByOne
              , p = r && (0,
            t.D)(r)
              , v = n && (0,
            t.D)(n)
              , h = !!p && !!v;
            if (h)
                return (null === p || void 0 === p ? void 0 : p.toLocaleLowerCase()) !== (null === v || void 0 === v ? void 0 : v.toLocaleLowerCase()) || i ? l(p, v, e.fromChainId, e.toChainId) : d(e);
            var m = !!v && !p;
            if (m)
                return l(a.V.defaultToken, v, e.fromChainId, e.toChainId);
            var y = !!p && !v;
            return y ? l(p, a.V.defaultToken, e.fromChainId, e.toChainId) : f(p || v || a.V.defaultToken, e.fromChainId, e.toChainId)
        }
          , d = function(r) {
            return ((0,
            u.j)() === c.s.ADD ? o.Z.addByMultiple : o.Z.exchangeByMultiple)(r.currencyIdB, r.currencyIdA, r.fromChainId, r.toChainId)
        }
    },
    20293: function(r, n, e) {
        e.d(n, {
            s: function() {
                return t
            },
            m: function() {
                return b
            }
        });
        var t, o = e(92809), a = e(67294), u = e(33652), c = e(47646), i = e(18259), d = e(62511), s = e(82212), l = e(11163), f = e(4536), p = e(1001), v = function(r) {
            var n = (0,
            l.useRouter)()
              , e = n.replace
              , o = r === t.ADD;
            function u(r) {
                var n, t = (0,
                p.K)(r).data, a = r.includes(f.Z.exchange), u = t.currencyIdA, c = t.currencyIdB, i = t.fromChainId, d = t.toChainId, l = i === d, v = null === (n = s.au[d]) || void 0 === n ? void 0 : n.address, h = [s.a_.MAINNET, s.a_.BSCTESTNET].includes(i), m = o ? f.Z.addByMultiple : f.Z.exchangeByMultiple;
                l && a && !c && d && v && h && function(r, n) {
                    r !== n && e(r)
                }(m(u, v, i, d), r)
            }
            (0,
            a.useEffect)((function() {
                return n.events.on("routeChangeComplete", u),
                function() {
                    n.events.off("routeChangeComplete", u)
                }
            }
            ), [])
        }, h = e(85893);
        function m(r, n) {
            var e = Object.keys(r);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(r);
                n && (t = t.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(r, n).enumerable
                }
                ))),
                e.push.apply(e, t)
            }
            return e
        }
        function y(r) {
            for (var n = 1; n < arguments.length; n++) {
                var e = null != arguments[n] ? arguments[n] : {};
                n % 2 ? m(Object(e), !0).forEach((function(n) {
                    (0,
                    o.Z)(r, n, e[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : m(Object(e)).forEach((function(n) {
                    Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n))
                }
                ))
            }
            return r
        }
        !function(r) {
            r[r.SWAP = 0] = "SWAP",
            r[r.ADD = 1] = "ADD"
        }(t || (t = {}));
        var b = function(r) {
            return function(n) {
                var e = (0,
                u.A)();
                return v(e),
                function() {
                    var r = (0,
                    d.R)().syncChain
                      , n = (0,
                    i.J)().fromChainId
                      , e = (0,
                    c.x)().chainId;
                    (0,
                    a.useEffect)((function() {
                        n && e && n !== e && r({
                            fromChainId: e
                        })
                    }
                    ), [e, n])
                }(),
                (0,
                h.jsx)("div", {
                    children: (0,
                    h.jsx)(r, y({}, n))
                })
            }
        }
    },
    3882: function(r, n, e) {
        e.d(n, {
            UK: function() {
                return t
            },
            qL: function() {
                return m
            }
        });
        var t, o = e(30266), a = e(809), u = e.n(a), c = e(82212), i = e(26510), d = e(67294), s = e(24451), l = e(52956), f = e(42675), p = e(52503), v = e(85754), h = e(17409);
        !function(r) {
            r[r.UNKNOWN = 0] = "UNKNOWN",
            r[r.NOT_APPROVED = 1] = "NOT_APPROVED",
            r[r.PENDING = 2] = "PENDING",
            r[r.APPROVED = 3] = "APPROVED"
        }(t || (t = {}));
        var m = function(r, n) {
            var e = (0,
            s.$G)().t
              , a = (0,
            v.a)().account
              , m = (0,
            d.useState)(!1)
              , y = m[0]
              , b = m[1]
              , C = (0,
            d.useMemo)((function() {
                var n, e, t = null === r || void 0 === r ? void 0 : r.token, o = null === r || void 0 === r ? void 0 : r.currency;
                return null !== t && void 0 !== t && null !== (n = t.address) && void 0 !== n && n.length ? t : null !== o && void 0 !== o && null !== (e = o.address) && void 0 !== e && e.length ? o : void 0
            }
            ), [r])
              , g = function(r, n, e) {
                var t = (0,
                h.Ib)(null === r || void 0 === r ? void 0 : r.address, !1)
                  , a = (0,
                d.useMemo)((function() {
                    return t && n && e && (null === r || void 0 === r ? void 0 : r.chainId) && "useTokenAllowance/".concat(n, "/").concat(e, "/").concat((null === r || void 0 === r ? void 0 : r.address) || "native", "/").concat(null === r || void 0 === r ? void 0 : r.chainId)
                }
                ), [t, n, e, null === r || void 0 === r ? void 0 : r.address, null === r || void 0 === r ? void 0 : r.chainId])
                  , i = (0,
                p.ZP)(a, (0,
                o.Z)(u().mark((function r() {
                    var o;
                    return u().wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2,
                                t.allowance(n, e);
                            case 2:
                                return o = r.sent,
                                r.abrupt("return", o.toString());
                            case 4:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r)
                }
                ))), {
                    revalidateOnFocus: !1,
                    refreshInterval: a ? 1e3 : null
                })
                  , s = i.data
                  , l = i.mutate
                  , f = (0,
                d.useMemo)((function() {
                    return r && s ? new c.dt(r,s) : void 0
                }
                ), [r, s])
                  , v = (0,
                d.useCallback)((function() {
                    return l(null)
                }
                ), [l]);
                return {
                    tokenAmount: f,
                    reset: v
                }
            }(C, null !== a && void 0 !== a ? a : void 0, n)
              , O = g.tokenAmount
              , w = g.reset
              , P = (0,
            f.wB)(null === C || void 0 === C ? void 0 : C.address, n)
              , I = (0,
            h.Ib)(null === C || void 0 === C ? void 0 : C.address)
              , D = (0,
            f.h7)()
              , N = (0,
            d.useMemo)((function() {
                return y ? t.PENDING : r && n ? (0,
                l.t$)(null === r || void 0 === r ? void 0 : r.currency) ? t.APPROVED : O ? O.lessThan(r) ? P ? t.PENDING : t.NOT_APPROVED : t.APPROVED : t.UNKNOWN : t.UNKNOWN
            }
            ), [r, O, y, P, n])
              , k = (0,
            d.useCallback)((0,
            o.Z)(u().mark((function o() {
                var a, d, s, l;
                return u().wrap((function(o) {
                    for (; ; )
                        switch (o.prev = o.next) {
                        case 0:
                            if (N === t.NOT_APPROVED) {
                                o.next = 3;
                                break
                            }
                            return console.error("approve was called unnecessarily"),
                            o.abrupt("return");
                        case 3:
                            if (C) {
                                o.next = 6;
                                break
                            }
                            return console.error("no token"),
                            o.abrupt("return");
                        case 6:
                            if (I) {
                                o.next = 9;
                                break
                            }
                            return console.error("tokenContract is null"),
                            o.abrupt("return");
                        case 9:
                            if (r) {
                                o.next = 12;
                                break
                            }
                            return console.error("missing amount to approve"),
                            o.abrupt("return");
                        case 12:
                            if (n) {
                                o.next = 15;
                                break
                            }
                            return console.error("no spender"),
                            o.abrupt("return");
                        case 15:
                            return o.prev = 15,
                            b(!0),
                            a = !1,
                            o.next = 20,
                            I.estimateGas.approve(n, i.Bz).catch((function() {
                                return a = !0,
                                I.estimateGas.approve(n, r.raw.toString())
                            }
                            ));
                        case 20:
                            return d = o.sent,
                            o.next = 23,
                            (0,
                            c.Qt)(I.provider);
                        case 23:
                            return s = o.sent,
                            o.next = 26,
                            I.approve(n, a ? r.raw.toString() : i.Bz, {
                                gasLimit: (0,
                                c.yC)(d),
                                gasPrice: s
                            });
                        case 26:
                            return l = o.sent,
                            o.next = 29,
                            l.wait();
                        case 29:
                            return o.next = 31,
                            w();
                        case 31:
                            D(l, {
                                summary: e("Approve {{currencySymbol}}", {
                                    currencySymbol: r.currency.symbol
                                }),
                                approval: {
                                    tokenAddress: C.address,
                                    spender: n
                                }
                            }),
                            o.next = 38;
                            break;
                        case 34:
                            throw o.prev = 34,
                            o.t0 = o.catch(15),
                            console.error("Failed to approve token", o.t0),
                            o.t0;
                        case 38:
                            return o.prev = 38,
                            b(!1),
                            o.finish(38);
                        case 41:
                        case "end":
                            return o.stop()
                        }
                }
                ), o, null, [[15, 34, 38, 41]])
            }
            ))), [N, C, I, r, n, w, D, e]);
            return [N, k, y, {
                approvalSubmitted: N === t.PENDING,
                approvalSuccess: N === t.APPROVED,
                showApproveFlow: N === t.NOT_APPROVED || N === t.PENDING
            }]
        }
    },
    20800: function(r, n, e) {
        e.d(n, {
            e: function() {
                return u
            }
        });
        var t = e(82212)
          , o = e(588)
          , a = e(63472);
        function u(r, n, e) {
            if (n && e)
                try {
                    var u = (0,
                    o.parseUnits)(n, e.decimals).toString();
                    if ("0" !== u) {
                        var c = (0,
                        a.G)(r).calcAmount;
                        return e instanceof t.WU ? new t.dt(e,t.QA.BigInt(u)) : c(u)
                    }
                } catch (i) {}
        }
    },
    63472: function(r, n, e) {
        e.d(n, {
            G: function() {
                return o
            }
        });
        var t = e(82212)
          , o = function(r) {
            return {
                calcAmount: function(n) {
                    return t.ih.ether(n, r)
                }
            }
        }
    },
    20623: function(r, n, e) {
        e.d(n, {
            hl: function() {
                return a
            },
            h2: function() {
                return u
            }
        });
        var t = e(93350);
        e(85012),
        e(85893);
        var o = t.default.div.withConfig({
            displayName: "CommonCard",
            componentId: "sc-5gra09-0"
        })(["width:100%;padding:", ";border:", ";border-radius:", ";"], (function(r) {
            return r.padding
        }
        ), (function(r) {
            return r.border
        }
        ), (function(r) {
            return r.borderRadius
        }
        ))
          , a = (0,
        t.default)(o).withConfig({
            displayName: "CommonCard__LightCard",
            componentId: "sc-5gra09-1"
        })(["border:1px solid ", ";background-color:", ";"], (function(r) {
            return r.theme.colors.invertedContrast
        }
        ), (function(r) {
            return r.theme.colors.invertedContrast
        }
        ))
          , u = (0,
        t.default)(o).withConfig({
            displayName: "CommonCard__GreyCard",
            componentId: "sc-5gra09-2"
        })(["background-color:", ";padding:8px;border-radius:6px;"], (function(r) {
            return r.theme.colors.tertiary
        }
        ));
        (0,
        t.default)(o).withConfig({
            displayName: "CommonCard__OutlineCard",
            componentId: "sc-5gra09-3"
        })(["border:1px solid ", ";"], (function(r) {
            return r.theme.colors.tertiary
        }
        )),
        (0,
        t.default)(o).withConfig({
            displayName: "CommonCard__YellowCard",
            componentId: "sc-5gra09-4"
        })(["background-color:rgba(243,132,30,0.05);color:", ";font-weight:500;"], (function(r) {
            return r.theme.colors.binance
        }
        )),
        (0,
        t.default)(o).withConfig({
            displayName: "CommonCard__PinkCard",
            componentId: "sc-5gra09-5"
        })(["background-color:rgba(255,0,122,0.03);color:", ";font-weight:500;"], (function(r) {
            return r.theme.colors.primary
        }
        )),
        (0,
        t.default)(o).withConfig({
            displayName: "CommonCard__BlueCardStyled",
            componentId: "sc-5gra09-6"
        })(["background-color:", ";color:", ";border-radius:12px;width:fit-content;"], (function(r) {
            return r.theme.colors.primaryDark
        }
        ), (function(r) {
            return r.theme.colors.primary
        }
        ))
    }
}]);
