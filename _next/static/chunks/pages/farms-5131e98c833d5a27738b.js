(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7669], {
    44434: function(e, t, n) {
        "use strict";
        n.d(t, {
            Y: function() {
                return i
            }
        });
        n(67294);
        var r = n(85893)
          , i = function() {
            return (0,
            r.jsxs)("svg", {
                width: "80",
                height: "80",
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                r.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "78",
                    height: "78",
                    rx: "39",
                    fill: "#1EA76D",
                    fillOpacity: "0.1"
                }), (0,
                r.jsx)("path", {
                    d: "M54.1544 29.2693L34.6928 48.7309L25.8467 39.8847",
                    stroke: "#1EA76D",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                r.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "78",
                    height: "78",
                    rx: "39",
                    stroke: "#1EA76D",
                    strokeWidth: "2"
                })]
            })
        }
    },
    63114: function(e, t, n) {
        "use strict";
        var r = n(62639)
          , i = n(93350)
          , a = n(79308)
          , o = n(85893)
          , s = function e(t) {
            var n = t.text;
            return (0,
            o.jsxs)(e.Root, {
                children: [(0,
                o.jsx)(r.LT, {}), (0,
                o.jsx)(e.Text, {
                    children: n
                })]
            })
        };
        s.Text = i.default.div.withConfig({
            displayName: "EmptyShpPools__Text",
            componentId: "sc-jtjbzd-0"
        })(["", " text-align:center;color:#0b1359;margin-top:16px;"], a.cp.h6),
        s.Root = (0,
        i.default)(r.Zb).withConfig({
            displayName: "EmptyShpPools__Root",
            componentId: "sc-jtjbzd-1"
        })(["padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:366px;@media ", "{min-height:248px;", "{", "}}"], a.mq.down(a.AV.sm), s.Text, a.cp.oN.medium),
        t.Z = s
    },
    5305: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return br
            },
            default: function() {
                return jr
            }
        });
        var r = n(10219)
          , i = n(92809)
          , a = n(77985)
          , o = n(44431)
          , s = n.n(o)
          , c = n(96486)
          , d = n(11163)
          , l = n(67294)
          , p = n(24451)
          , u = {
            latin_map: {
                "\u03c4": "t",
                "\u03a4": "T"
            }
        }
          , f = function(e) {
            return e.replace(/[^A-Za-z0-9[\] ]/g, (function(e) {
                return u.latin_map[e] || e
            }
            ))
        }
          , m = n(41810)
          , x = n(62639)
          , h = n(93350)
          , g = n(79308)
          , w = n(92691)
          , y = n(85893);
        function v(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function j(e) {
            var t = (0,
            m.$G)().t;
            return e.totalPages <= 1 ? null : (0,
            y.jsxs)(j.Root, {
                children: [(0,
                y.jsxs)(j.More, {
                    onClick: function() {
                        return e.onPageChanged(e.currentPage + 1)
                    },
                    disabled: e.currentPage === e.totalPages,
                    variant: "secondary",
                    children: [(0,
                    y.jsx)(x.Vk, {
                        color: "inherit"
                    }), t("Show more")]
                }), (0,
                y.jsx)(w.Z, b({}, e))]
            })
        }
        j.More = (0,
        h.default)(x.zx).withConfig({
            displayName: "PaginateWithMore__More",
            componentId: "sc-1mt0vs8-0"
        })(["& > svg{margin-right:16px;}"]),
        j.Root = h.default.div.withConfig({
            displayName: "PaginateWithMore__Root",
            componentId: "sc-1mt0vs8-1"
        })(["display:flex;align-items:center;justify-content:space-between;margin-top:32px;.pagination{padding:0;width:auto;}@media ", "{margin-top:24px;}@media ", "{flex-direction:column;align-items:stretch;margin-top:16px;", "{width:100%;margin-bottom:8px;}.pagination{justify-content:space-between;}}"], g.mq.down(g.AV.md), g.mq.down(g.AV.sm), j.More);
        var k, C, _, N, F, S, I, A = n(14190), O = n(30266), D = n(809), T = n.n(D), E = n(82212), B = n(3019), P = n(65463), L = [{
            pid: 0,
            lpSymbol: "ALM-BNB LP",
            lpAddresses: (k = {},
            (0,
            i.Z)(k, E.a_.BSCTESTNET, ""),
            (0,
            i.Z)(k, E.a_.MAINNET, "0x92f12720733C626E3bEa3A35A9Bd6151ED12ff92"),
            k),
            token: P.E0,
            quoteToken: P.$v
        }, {
            pid: 1,
            lpSymbol: "ALM-USDT LP",
            lpAddresses: (C = {},
            (0,
            i.Z)(C, E.a_.BSCTESTNET, ""),
            (0,
            i.Z)(C, E.a_.MAINNET, "0xf1Cac46EFf9A6BE6A1183375631a9fF6d0c38176"),
            C),
            token: P.E0,
            quoteToken: P.AA
        }, {
            pid: 2,
            lpSymbol: "ALM-CAKE LP",
            lpAddresses: (_ = {},
            (0,
            i.Z)(_, E.a_.BSCTESTNET, ""),
            (0,
            i.Z)(_, E.a_.MAINNET, "0x4AfCB08A78FEeF566C6A62bB9856A3971C5317c6"),
            _),
            token: P.E0,
            quoteToken: P.jM
        }, {
            pid: 3,
            lpSymbol: "CAKE-BNB LP",
            lpAddresses: (N = {},
            (0,
            i.Z)(N, E.a_.BSCTESTNET, ""),
            (0,
            i.Z)(N, E.a_.MAINNET, "0x32c804c3640650ED8013E7c4627db5a2a9AD190a"),
            N),
            token: P.jM,
            quoteToken: P.$v
        }, {
            pid: 4,
            lpSymbol: "BNB-USDT LP",
            lpAddresses: (F = {},
            (0,
            i.Z)(F, E.a_.BSCTESTNET, ""),
            (0,
            i.Z)(F, E.a_.MAINNET, "0xB55d67AA2d57861c81487b29A578aE1CdF272795"),
            F),
            token: P.$v,
            quoteToken: P.AA
        }];
        function M(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? M(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Z, q, W, R = [{
            pid: 0,
            lpSymbol: "ALM-BNB LP",
            lpAddresses: (S = {},
            (0,
            i.Z)(S, E.a_.BSCTESTNET, "0xdcf05c93b4940192cc244c92330566b1211a028d"),
            (0,
            i.Z)(S, E.a_.MAINNET, ""),
            S),
            token: P.Nb,
            quoteToken: P.K4
        }, {
            pid: 1,
            lpSymbol: "USDT-ETH LP",
            lpAddresses: (I = {},
            (0,
            i.Z)(I, E.a_.BSCTESTNET, "0xdC9747Fda30F57E6665345358342bB12316F0F27"),
            (0,
            i.Z)(I, E.a_.MAINNET, ""),
            I),
            token: P.Vn,
            quoteToken: P.h9
        }], V = (R.map((function(e) {
            return z(z({}, e), {}, {
                pid: 2,
                lpSymbol: "MOCKED TEST" + e.lpSymbol
            })
        }
        )),
        function() {
            return B.g.getState()._currentChainId === E.a_.BSCTESTNET ? R : L
        }
        );
        !function(e) {
            e.TABLE = "TABLE",
            e.CARD = "CARD"
        }(Z || (Z = {})),
        function(e) {
            e.live = "live",
            e.finished = "finished"
        }(q || (q = {})),
        function(e) {
            e.APR = "APR",
            e.Multiplier = "Multiplier",
            e.Earned = "Earned",
            e.Liquidity = "Liquidity",
            e.Hot = "Hot"
        }(W || (W = {}));
        var H = n(14671)
          , G = n(38597)
          , U = n(59148);
        function $(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function X(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var K = V().map((function(e) {
            return X(X({}, e), {}, {
                userData: {
                    allowance: "0",
                    tokenBalance: "0",
                    stakedBalance: "0",
                    earnings: "0"
                }
            })
        }
        ))
          , Y = (0,
        U.Z)((0,
        G.tJ)((0,
        G.mW)((function(e, t) {
            return {
                hasTicket: !1,
                ticketLoader: !0,
                farmsLoading: !1,
                viewMode: Z.CARD,
                farmsUserDataLoading: !1,
                slowUpdate: !1,
                farms: K,
                query: "",
                sortOption: W.Hot,
                stakedOnly: !1,
                activeTab: q.live,
                toggleTicketLoader: function(t) {
                    e({
                        ticketLoader: t
                    })
                },
                checkHasTicket: function() {
                    var n = (0,
                    O.Z)(T().mark((function n(r, i) {
                        var a, o;
                        return T().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return a = t().toggleTicketLoader,
                                    i || (a(!1),
                                    e({
                                        hasTicket: !1
                                    })),
                                    n.prev = 2,
                                    a(!0),
                                    n.next = 6,
                                    r.hasTicket(i);
                                case 6:
                                    return o = n.sent,
                                    e({
                                        hasTicket: o
                                    }),
                                    n.abrupt("return", o);
                                case 11:
                                    return n.prev = 11,
                                    n.t0 = n.catch(2),
                                    n.abrupt("return", !1);
                                case 14:
                                    return n.prev = 14,
                                    a(!1),
                                    n.finish(14);
                                case 17:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, null, [[2, 11, 14, 17]])
                    }
                    )));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                setActiveTab: function(t) {
                    e({
                        activeTab: t
                    })
                },
                setStakedOnly: function(t) {
                    e({
                        stakedOnly: t
                    })
                },
                setSortOption: function(t) {
                    e({
                        sortOption: t
                    })
                },
                setQuery: function(t) {
                    e({
                        query: t
                    })
                },
                setViewMode: function(t) {
                    e({
                        viewMode: t
                    })
                },
                toggleFarmsFetched: function(t) {
                    e({
                        farmsLoading: t
                    })
                },
                toggleUserDataFarmsFetched: function(t) {
                    e({
                        farmsUserDataLoading: t
                    })
                },
                toggleSlowUpdate: function(t) {
                    e({
                        slowUpdate: t
                    })
                },
                setFarms: function(n) {
                    var r = t().farms.map((function(e) {
                        var t = n.find((function(t) {
                            return t.pid === e.pid
                        }
                        ));
                        return X(X({}, e), t)
                    }
                    ));
                    e({
                        farms: r
                    })
                },
                setFarmsUserData: function(n) {
                    var r = t().farms;
                    n.forEach((function(e) {
                        var t = e.pid
                          , n = r.findIndex((function(e) {
                            return e.pid === t
                        }
                        ));
                        r[n] = X(X({}, r[n]), {}, {
                            userData: e
                        })
                    }
                    )),
                    e({
                        farms: r
                    })
                },
                clearFarms: function() {
                    var n = t().farms.map((function(e) {
                        return X(X({}, e), {}, {
                            allowance: "0",
                            earnings: "0",
                            pid: e.pid,
                            stakedBalance: "0",
                            tokenBalance: "0"
                        })
                    }
                    ));
                    e({
                        farms: n
                    })
                },
                fetchBlockReward: function(t) {
                    return (0,
                    O.Z)(T().mark((function n() {
                        var r;
                        return T().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    t.blockReward();
                                case 2:
                                    return r = n.sent,
                                    e({
                                        blockReward: r
                                    }),
                                    n.abrupt("return", r);
                                case 5:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )))()
                }
            }
        }
        ), "farm-store"), {
            name: "farms-storage",
            blacklist: ["farmsLoading", "farmsUserDataLoading", "slowUpdate", "farms", "hasTicket", "ticketLoader", "query"]
        }))
          , J = (0,
        H.Z)(Y)
          , Q = n(95218)
          , ee = h.default.div.withConfig({
            displayName: "FarmBanner__Wrapper",
            componentId: "sc-ldym4-0"
        })(["background-color:#dfe4ff;background-image:url(/images/farms/banners/farm-banner.png);background-position:right;background-size:cover;background-repeat:no-repeat;border-radius:6px;height:360px;position:relative;overflow:hidden;@media ", "{height:250px;}@media ", "{height:320px;background-position:top;background-image:url(/images/farms/banners/farm-banner-small.png);}"], g.mq.down(g.AV.lg), g.mq.down(g.AV.sm))
          , te = h.default.div.withConfig({
            displayName: "FarmBanner__Labels",
            componentId: "sc-ldym4-1"
        })(["height:100%;display:flex;flex-direction:column;justify-content:center;padding-left:30px;width:320px;h1{font-style:normal;font-weight:bold;font-size:64px;line-height:72px;letter-spacing:0.3px;color:#0b1359;padding-bottom:16px;}h3{font-style:normal;font-weight:500;font-size:18px;line-height:24px;letter-spacing:0.3px;color:#8990a5;}@media ", "{width:100%;padding:0;justify-content:center;align-items:center;height:fit-content;padding-top:24px;h1{font-size:32px;line-height:40px;}h3{font-size:16px;line-height:22px;}}"], g.mq.down(g.AV.sm))
          , ne = function() {
            var e = (0,
            p.$G)().t;
            return (0,
            y.jsx)(ee, {
                children: (0,
                y.jsxs)(te, {
                    children: [(0,
                    y.jsx)("h1", {
                        children: e("Farms")
                    }), (0,
                    y.jsx)("h3", {
                        children: e("Stake LP tokens to earn")
                    })]
                })
            })
        }
          , re = n(63114)
          , ie = {
            0: "\n  \tbackground: url(/images/farms/cards/farm_card_default.png), linear-gradient(180deg, #6c5dd3 0%, #8677f0 100%);\n\t",
            1: "\n\tbackground: url(/images/farms/cards/farm_card_1.png), linear-gradient(180deg, #4334a6 -3.7%, #8677f0 103.7%);\n\t",
            2: "\n  background: url(/images/farms/cards/farm_card_2.png), linear-gradient(180deg, #4334a6 0%, #9e00ff 100%); \n  ",
            3: "\n  background: url(/images/farms/cards/farm_card_3.png), linear-gradient(180deg, #4334a6 0%, #2468ee 100%); \n  "
        }
          , ae = function(e, t) {
            return "\n\t&:nth-child(".concat(e, ") {\n\t\t.farm__head {\n\t\t  ").concat(ie[t || e], "\n\t\t}\n\t  }\n\t")
        }
          , oe = n(47646)
          , se = n(86366)
          , ce = n(32621)
          , de = n(50543)
          , le = n(59083)
          , pe = n(91162)
          , ue = n(21340)
          , fe = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n) {
                var r, i, a, o;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = (0,
                            pe.Oc)(),
                            i = n.map((function(e) {
                                return {
                                    address: (0,
                                    pe.Kn)(e.lpAddresses),
                                    name: "allowance",
                                    params: [t, r]
                                }
                            }
                            )),
                            e.next = 4,
                            (0,
                            ue.i)(de, i);
                        case 4:
                            return a = e.sent,
                            o = a.map((function(e) {
                                return new (s())(e).toJSON()
                            }
                            )),
                            e.abrupt("return", o);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , me = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n) {
                var r, i, a;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = n.map((function(e) {
                                return {
                                    address: (0,
                                    pe.Kn)(e.lpAddresses),
                                    name: "balanceOf",
                                    params: [t]
                                }
                            }
                            )),
                            e.next = 3,
                            (0,
                            ue.i)(de, r);
                        case 3:
                            return i = e.sent,
                            a = i.map((function(e) {
                                return new (s())(e).toJSON()
                            }
                            )),
                            e.abrupt("return", a);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , xe = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n) {
                var r, i, a, o;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = (0,
                            pe.Oc)(),
                            i = n.map((function(e) {
                                return {
                                    address: r,
                                    name: "userInfo",
                                    params: [e.pid, t]
                                }
                            }
                            )),
                            e.next = 4,
                            (0,
                            ue.i)(le, i);
                        case 4:
                            return a = e.sent,
                            o = a.map((function(e) {
                                return new (s())(e[0]._hex).toJSON()
                            }
                            )),
                            e.abrupt("return", o);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , he = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n) {
                var r, i, a, o;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = (0,
                            pe.Oc)(),
                            i = n.map((function(e) {
                                return {
                                    address: r,
                                    name: "pendingRinance",
                                    params: [e.pid, t]
                                }
                            }
                            )),
                            e.next = 4,
                            (0,
                            ue.i)(le, i);
                        case 4:
                            return a = e.sent,
                            o = a.map((function(e) {
                                return new (s())(e).toJSON()
                            }
                            )),
                            e.abrupt("return", o);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , ge = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n) {
                var r, i, a, o, s, c, d, l;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = Y.getState().farms,
                            i = V(),
                            a = n || i.map((function(e) {
                                return e.pid
                            }
                            )),
                            o = r.filter((function(e) {
                                return a.includes(e.pid)
                            }
                            )),
                            e.next = 6,
                            fe(t, o);
                        case 6:
                            return s = e.sent,
                            e.next = 9,
                            me(t, o);
                        case 9:
                            return c = e.sent,
                            e.next = 12,
                            xe(t, o);
                        case 12:
                            return d = e.sent,
                            e.next = 15,
                            he(t, o);
                        case 15:
                            return l = e.sent,
                            e.abrupt("return", s.map((function(e, t) {
                                return {
                                    pid: o[t].pid,
                                    allowance: s[t],
                                    tokenBalance: c[t],
                                    stakedBalance: d[t],
                                    earnings: l[t]
                                }
                            }
                            )));
                        case 17:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , we = n(80318)
          , ye = n(588)
          , ve = function(e, t, n, r) {
            var i = se.M5
              , a = Number((0,
            ye.formatEther)(String(n)))
              , o = t / 100
              , s = Number(i.times(o)) * Number(e) / (a * r)
              , c = Number(s.toFixed(2));
            return c && c !== 1 / 0 ? c : 0
        }
          , be = function(e, t) {
            var n = Number((0,
            ye.formatEther)(String(t))) * e;
            return new (s())(n)
        }
          , je = n(65158)
          , ke = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n, r, i, a) {
                var o, s, c;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            Ce(null === t || void 0 === t ? void 0 : t.symbol);
                        case 3:
                            return o = e.sent,
                            e.next = 6,
                            Ce(null === n || void 0 === n ? void 0 : n.symbol);
                        case 6:
                            return s = e.sent,
                            d = Number(o),
                            l = r,
                            p = Number(s),
                            u = i,
                            f = a,
                            c = (d * Number((0,
                            ye.formatEther)(String(l))) + p * Number((0,
                            ye.formatEther)(String(u)))) / Number((0,
                            ye.formatEther)(String(f))),
                            e.abrupt("return", c);
                        case 11:
                            return e.prev = 11,
                            e.t0 = e.catch(0),
                            console.error("Failure calc lptokenPrice!", e.t0),
                            e.abrupt("return", 0);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                    var d, l, p, u, f
                }
                ), e, null, [[0, 11]])
            }
            )));
            return function(t, n, r, i, a) {
                return e.apply(this, arguments)
            }
        }()
          , Ce = function() {
            var e = (0,
            O.Z)(T().mark((function e(t) {
                var n, r, i, a;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (n = (0,
                            ce.j)(),
                            r = {
                                ALM: "alium-swap",
                                ETH: "ethereum",
                                WBNB: "wbnb",
                                CAKE: "pancakeswap-token"
                            },
                            !(i = {
                                USDT: "1",
                                ALM: n || 0
                            })[t]) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", i[t]);
                        case 5:
                            if (!r[t]) {
                                e.next = 10;
                                break
                            }
                            return e.next = 8,
                            (new je.Y).fetchTokenPriceFromCoingecko(r[t]);
                        case 8:
                            return a = e.sent,
                            e.abrupt("return", a);
                        case 10:
                            return e.abrupt("return", "0");
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , _e = function() {
            var e = (0,
            O.Z)(T().mark((function e(t) {
                var n, r, i, a, o, c, d, l, p, u, f, m, x, h, g, w, y, v, b, j, k, C, _, N, F, S;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            r = t.pid,
                            i = t.lpAddresses,
                            a = t.token,
                            o = t.quoteToken,
                            c = (0,
                            pe.Kn)(i),
                            d = [{
                                address: a.address,
                                name: "balanceOf",
                                params: [c]
                            }, {
                                address: o.address,
                                name: "balanceOf",
                                params: [c]
                            }, {
                                address: c,
                                name: "balanceOf",
                                params: [(0,
                                pe.Oc)()]
                            }, {
                                address: c,
                                name: "totalSupply"
                            }, {
                                address: o.address,
                                name: "decimals"
                            }],
                            e.next = 6,
                            (0,
                            ue.i)(de, d);
                        case 6:
                            if (l = e.sent,
                            p = (0,
                            we.Z)(l, 5),
                            u = p[0],
                            f = p[1],
                            m = p[2],
                            x = p[3],
                            p[4],
                            h = new (s())(m),
                            !r && 0 !== r) {
                                e.next = 20;
                                break
                            }
                            return e.next = 17,
                            (0,
                            ue.i)(le, [{
                                address: (0,
                                pe.Oc)(),
                                name: "poolInfo",
                                params: [r]
                            }, {
                                address: (0,
                                pe.Oc)(),
                                name: "totalAllocPoint"
                            }]);
                        case 17:
                            e.t0 = e.sent,
                            e.next = 21;
                            break;
                        case 20:
                            e.t0 = [null, null];
                        case 21:
                            return g = e.t0,
                            w = (0,
                            we.Z)(g, 2),
                            y = w[0],
                            v = w[1],
                            b = y ? new (s())(null === (n = y.allocPoint) || void 0 === n ? void 0 : n._hex) : se.HW,
                            j = v ? b.div(new (s())(v)).times(100) : se.HW,
                            k = 0 === Number(null === y || void 0 === y ? void 0 : y.depositFee) ? 0 : 1e5 / (100 * (null === y || void 0 === y ? void 0 : y.depositFee)) / 100,
                            e.next = 30,
                            ke(a, o, u, f, x);
                        case 30:
                            return C = e.sent,
                            _ = ve(Number((0,
                            ce.j)()), Number(j), h, C),
                            N = be(C, h),
                            F = new (s())(C),
                            S = null !== N && void 0 !== N && N.gt(0) ? N.precision(6).toNumber() : 0,
                            e.abrupt("return", {
                                multiplier: "".concat(b.div(100).toString(), "X"),
                                depositFee: k,
                                apy: _,
                                liqudity: S,
                                lpPrice: F,
                                farmLpBalance: Number((0,
                                ye.formatEther)(String(h))),
                                allocPoint: b
                            });
                        case 38:
                            return e.prev = 38,
                            e.t1 = e.catch(0),
                            e.abrupt("return", {
                                multiplier: "".concat(0, "X"),
                                depositFee: 0,
                                apy: 0,
                                liqudity: 0,
                                lpPrice: se.HW,
                                farmLpBalance: 0,
                                allocPoint: se.HW
                            });
                        case 41:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 38]])
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        function Ne(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Fe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ne(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Se = function() {
            var e = (0,
            O.Z)(T().mark((function e(t) {
                var n;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            _e(t);
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", Fe(Fe({}, t), n));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Ie = function() {
            var e = (0,
            O.Z)(T().mark((function e(t) {
                var n;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.all(t.map(function() {
                                var e = (0,
                                O.Z)(T().mark((function e(t) {
                                    var n;
                                    return T().wrap((function(e) {
                                        for (; ; )
                                            switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2,
                                                Se(t);
                                            case 2:
                                                return n = e.sent,
                                                e.abrupt("return", n);
                                            case 4:
                                            case "end":
                                                return e.stop()
                                            }
                                    }
                                    ), e)
                                }
                                )));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }()));
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", n);
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }()
          , Ae = function() {
            var e = J((function(e) {
                return e.setFarms
            }
            ))
              , t = J((function(e) {
                return e.farmsLoading
            }
            ))
              , n = J((function(e) {
                return e.toggleFarmsFetched
            }
            ))
              , r = De()
              , i = Oe();
            return (0,
            l.useEffect)((function() {
                (0,
                O.Z)(T().mark((function r() {
                    var a, o;
                    return T().wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                if (!t && i) {
                                    r.next = 2;
                                    break
                                }
                                return r.abrupt("return");
                            case 2:
                                return n(!0),
                                a = V(),
                                r.prev = 4,
                                r.next = 7,
                                Ie(a);
                            case 7:
                                o = r.sent,
                                e(o),
                                r.next = 14;
                                break;
                            case 11:
                                r.prev = 11,
                                r.t0 = r.catch(4),
                                console.error(r.t0);
                            case 14:
                                return r.prev = 14,
                                n(!1),
                                r.finish(14);
                            case 17:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r, null, [[4, 11, 14, 17]])
                }
                )))()
            }
            ), [i]),
            r
        }
          , Oe = function() {
            var e = (0,
            oe.x)().chainId;
            return (0,
            l.useMemo)((function() {
                return [E.a_.BSCTESTNET, E.a_.MAINNET].includes(e)
            }
            ), [e])
        }
          , De = function() {
            return J((function(e) {
                return e.farms
            }
            ))
        }
          , Te = function() {
            var e = J((function(e) {
                return e.farmsLoading
            }
            ))
              , t = J((function(e) {
                return e.farmsUserDataLoading
            }
            ));
            return e || t
        }
          , Ee = function() {
            var e = (0,
            ce.j)();
            return (0,
            l.useMemo)((function() {
                return new (s())(e)
            }
            ), [e])
        }
          , Be = function(e) {
            var t, n = (t = e,
            J((function(e) {
                return e.farms.find((function(e) {
                    return e.lpSymbol === t
                }
                ))
            }
            )));
            return (null === n || void 0 === n ? void 0 : n.lpPrice) || se.HW
        }
          , Pe = n(13757)
          , Le = n(94904)
          , Me = n(17409)
          , ze = n(93578)
          , Ze = n(10429)
          , qe = n(16062)
          , We = n(41954)
          , Re = n(93334)
          , Ve = function(e, t, n, r) {
            return e.reduce((function(e, i) {
                var a, o = t / 100, s = i / 365, c = r / n.toNumber(), d = c * Math.pow(1 + o / 365, 365 * s), l = (a = d - c,
                Math.round(100 * a) / 100);
                return e.push({
                    earned: l,
                    date: i
                }),
                e
            }
            ), [])
        }
          , He = function(e) {
            return (e.amountEarned / e.amountInvested * 100).toFixed(2)
        }
          , Ge = function(e) {
            var t, n, r = null === (t = Number(e)) || void 0 === t || null === (n = t.toLocaleString("ru", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })) || void 0 === n ? void 0 : n.substring(0, 14);
            return "," === r[r.length - 1] && (r = r.slice(0, -1)),
            r
        }
          , Ue = n(90006)
          , $e = n(44434)
          , Xe = n(72059)
          , Ke = n(31607)
          , Ye = n(18284)
          , Je = h.default.div.withConfig({
            displayName: "modalsstyled__ModalFarmBaseWrap",
            componentId: "sc-8de98h-0"
        })(["width:450px;min-height:224px;@media screen and (max-width:576px){width:100%;}"])
          , Qe = function e(t) {
            var n = t.loading
              , r = t.success
              , i = t.error
              , a = t.children
              , o = t.type
              , s = t.onRepeat
              , c = (0,
            m.$G)().t
              , d = n || r || i;
            return (0,
            y.jsxs)(e.Wrapper, {
                children: [n && (0,
                y.jsx)(e.ActionFarmLoader, {
                    t: c
                }), r && (0,
                y.jsx)(e.ActionFarmSuccess, {
                    t: c,
                    type: o
                }), i && (0,
                y.jsx)(e.ActionFarmError, {
                    t: c,
                    onRepeat: s
                }), (0,
                y.jsx)(Ye._, {
                    hide: d,
                    style: {
                        width: "100%"
                    },
                    children: a
                })]
            })
        };
        Qe.ActionFarmLoader = function(e) {
            var t = e.t;
            return (0,
            y.jsxs)(Qe.Wrapper, {
                children: [(0,
                y.jsx)(Qe.Loading, {
                    type: "TailSpin",
                    color: "#6C5DD3"
                }), (0,
                y.jsx)("h3", {
                    className: "wait",
                    children: t("Wait a moment please")
                })]
            })
        }
        ,
        Qe.ActionFarmSuccess = function(e) {
            var t = e.type
              , n = e.t
              , r = "stake" === t
              , i = n(r ? "Staked" : "Unstaked");
            return (0,
            y.jsxs)(Qe.Wrapper, {
                children: [(0,
                y.jsx)($e.Y, {}), (0,
                y.jsx)("h2", {
                    children: i
                }), (0,
                y.jsx)("p", {
                    children: n(r ? "Your funds have been staked in the farm" : "Your funds have been unstaked in the farm")
                })]
            })
        }
        ,
        Qe.ActionFarmError = function(e) {
            var t = e.t
              , n = e.onRepeat;
            return (0,
            y.jsxs)(Qe.Wrapper, {
                children: [(0,
                y.jsx)(Qe.IconWrap, {
                    children: (0,
                    y.jsx)(Xe.g, {})
                }), (0,
                y.jsx)("h2", {
                    className: "error-text",
                    children: t("Transaction failed")
                }), (0,
                y.jsx)(x.zx, {
                    onClick: n,
                    className: "repeat",
                    children: t("Repeat")
                })]
            })
        }
        ,
        Qe.IconWrap = h.default.div.withConfig({
            displayName: "FarmModalStatuses__IconWrap",
            componentId: "sc-14pz17j-0"
        })(["width:80px;height:80px;display:flex;justify-content:center;align-items:center;background:rgba(255,77,0,0.1);border-radius:50px;"]),
        Qe.Wrapper = (0,
        h.default)(Je).withConfig({
            displayName: "FarmModalStatuses__Wrapper",
            componentId: "sc-14pz17j-1"
        })(["min-height:277px;display:flex;justify-content:center;align-items:center;flex-direction:column;.wait{margin-top:34px;font-style:normal;font-weight:normal;font-size:16px;line-height:22px;text-align:center;letter-spacing:0.3px;color:#0b1359;}h2{font-style:normal;font-weight:500;font-size:18px;line-height:24px;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-top:24px;}p{margin-top:8px;font-style:normal;font-weight:500;font-size:14px;line-height:20px;text-align:center;letter-spacing:0.3px;color:#8990a5;}.error-text{width:70%;text-align:center;}.repeat{margin-top:24px;}"]),
        Qe.Loading = (0,
        h.default)(Ke.Z).withConfig({
            displayName: "FarmModalStatuses__Loading",
            componentId: "sc-14pz17j-2"
        })(["width:80px;height:80px;"]);
        var et = h.default.div.withConfig({
            displayName: "RoiModal__Wrapper",
            componentId: "sc-fdwpkq-0"
        })(["width:486px;height:auto;@media ", "{width:auto;max-width:360px;}"], g.mq.down(g.AV.sm))
          , tt = h.default.div.withConfig({
            displayName: "RoiModal__Main",
            componentId: "sc-fdwpkq-1"
        })(["background:url(/images/farms/bg/roibg.png);height:208px;width:100%;background-repeat:no-repeat;padding:32px 24px;"])
          , nt = h.default.div.withConfig({
            displayName: "RoiModal__StyleRoiTable",
            componentId: "sc-fdwpkq-2"
        })(["display:flex;justify-content:space-between;"])
          , rt = h.default.div.withConfig({
            displayName: "RoiModal__Footer",
            componentId: "sc-fdwpkq-3"
        })(["padding:16px 22px 24px 22px;p{font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#8990a5;}"])
          , it = (0,
        h.default)(x.zx).withConfig({
            displayName: "RoiModal__StyledButton",
            componentId: "sc-fdwpkq-4"
        })(["margin-top:16px;svg{margin-right:16px;height:24px;width:24px;}&:hover{svg{path{fill:transparent;}stroke:white;}}"])
          , at = h.default.div.withConfig({
            displayName: "RoiModal__Row",
            componentId: "sc-fdwpkq-5"
        })(["h2{font-style:normal;font-weight:bold;font-size:12px;line-height:16px;letter-spacing:0.3px;text-transform:uppercase;color:#cbc8ee;margin-bottom:16px;}.item-roi{font-style:normal;font-weight:500;font-size:16px;line-height:22px;letter-spacing:0.3px;color:#ffffff;margin-bottom:8px;}"])
          , ot = function(e) {
            var t = e.table
              , n = e.type
              , r = e.title;
            return (0,
            y.jsxs)(at, {
                children: [(0,
                y.jsx)("h2", {
                    className: "title-roi",
                    children: r
                }), t.map((function(e, t) {
                    return (0,
                    y.jsx)("div", {
                        className: "item-roi",
                        children: e[n]
                    }, t)
                }
                ))]
            })
        }
          , st = function(e) {
            var t = e.farm
              , n = e.onDismiss
              , r = e.almPrice
              , i = (0,
            p.$G)().t
              , a = t.apr
              , o = function() {
                var e = Ve([1, 7, 30, 365], a, r, 1e3)
                  , t = function(e, t, n) {
                    return e.map((function(e) {
                        var r = e.earned * t.toNumber();
                        return He({
                            amountEarned: r,
                            amountInvested: n
                        })
                    }
                    ))
                }(e, r, 1e3);
                return e.map((function(e, n) {
                    var r = e.earned
                      , i = e.date
                      , a = Ge(t[n])
                      , o = 365 === i ? "365 d (APY)" : "".concat(i, " d")
                      , s = Ge(r);
                    return {
                        day: o,
                        roi: "".concat(a, "%"),
                        per: s
                    }
                }
                ))
            }()
              , s = (0,
            oe.x)().chainId
              , c = (0,
            ze.E8)(s, Ut(t), "address")
              , d = t.lpSymbol;
            return (0,
            y.jsx)(x.u_, {
                title: i("ROI"),
                withoutContentWrapper: !0,
                onDismiss: n,
                children: (0,
                y.jsxs)(et, {
                    children: [(0,
                    y.jsx)(tt, {
                        children: (0,
                        y.jsxs)(nt, {
                            children: [(0,
                            y.jsx)(ot, {
                                table: o,
                                type: "day",
                                title: i("Timeframe")
                            }), (0,
                            y.jsx)(ot, {
                                table: o,
                                type: "roi",
                                title: i("ROI")
                            }), (0,
                            y.jsx)(ot, {
                                table: o,
                                type: "per",
                                title: i("Rinance per $1000")
                            })]
                        })
                    }), (0,
                    y.jsxs)(rt, {
                        children: [(0,
                        y.jsx)("p", {
                            children: i("Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")
                        }), (0,
                        y.jsx)("a", {
                            href: c,
                            target: "_blank",
                            children: (0,
                            y.jsxs)(it, {
                                variant: "secondary",
                                children: [(0,
                                y.jsx)(x.xP, {}), (0,
                                y.jsx)("h3", {
                                    children: i("Get {{tokenName}}", {
                                        tokenName: d
                                    })
                                })]
                            })
                        })]
                    })]
                })
            })
        }
          , ct = 1e6
          , dt = function e(t) {
            var n = t.max
              , r = t.onConfirm
              , i = t.onDismiss
              , a = t.tokenName
              , o = void 0 === a ? "" : a
              , s = t.farm
              , c = t.almPrice
              , d = t.title
              , u = t.withoutRoi
              , f = t.type
              , m = (0,
            p.$G)().t
              , h = (0,
            l.useState)({
                roiDayPercentage: 0,
                roiDayBusd: 0
            })
              , g = h[0]
              , w = h[1]
              , v = (0,
            l.useState)("")
              , b = v[0]
              , j = v[1]
              , k = (0,
            l.useState)(!1)
              , C = k[0]
              , _ = k[1]
              , N = (0,
            l.useState)(!1)
              , F = N[0]
              , S = N[1]
              , I = (0,
            l.useState)(!1)
              , A = I[0]
              , D = I[1]
              , E = (0,
            l.useMemo)((function() {
                return (0,
                Ze.NJ)(n)
            }
            ), [n])
              , B = J((function(e) {
                return e.activeTab
            }
            ))
              , P = q.finished === B
              , L = Be(null === s || void 0 === s ? void 0 : s.lpSymbol)
              , M = s.apr
              , z = s.farmLpBalance
              , Z = {
                token0: s.token,
                token1: s.quoteToken,
                pairName: o
            }
              , W = (0,
            oe.x)().chainId
              , R = (0,
            ze.E8)(W, Ut(s), "address")
              , V = g.roiDayBusd.toLocaleString("en", {
                minimumFractionDigits: g.roiDayBusd > ct ? 0 : 2,
                maximumFractionDigits: g.roiDayBusd > ct ? 0 : 2
            })
              , H = (0,
            l.useCallback)((function(e) {
                var t, n, r, i, a = (t = M,
                n = z,
                r = e,
                i = Number(L),
                {
                    roiDayPercentage: t,
                    roiDayBusd: t * (i * n * (100 * r / n) / 100) / 100
                });
                w(a)
            }
            ), [M, z, L])
              , G = (0,
            l.useCallback)((function(e) {
                j(e),
                H(Number(e))
            }
            ), [H])
              , U = (0,
            l.useCallback)((function(e) {
                j(e),
                H(Number(e))
            }
            ), [H])
              , $ = function() {
                var e = (0,
                O.Z)(T().mark((function e() {
                    return T().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                _(!0),
                                e.next = 4,
                                r(b);
                            case 4:
                                S(!0),
                                e.next = 10;
                                break;
                            case 7:
                                e.prev = 7,
                                e.t0 = e.catch(0),
                                D(!0);
                            case 10:
                                return e.prev = 10,
                                _(!1),
                                e.finish(10);
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 7, 10, 13]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , X = function() {
                var e = (0,
                O.Z)(T().mark((function e() {
                    return T().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return D(!1),
                                e.next = 3,
                                $();
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , K = (0,
            x.dd)((0,
            y.jsx)(st, {
                almPrice: c,
                farm: s
            }))
              , Y = (0,
            we.Z)(K, 1)[0]
              , Q = !b || Number(b) <= 0 || Number(b) > Number(E)
              , ee = C || Q
              , te = m("stake" === f ? "Stake" : "Unstake");
            return (0,
            y.jsx)(x.u_, {
                title: d,
                onDismiss: i,
                withoutContentWrapper: !0,
                children: (0,
                y.jsx)(Qe, {
                    loading: C,
                    success: F,
                    error: A,
                    type: f,
                    onRepeat: X,
                    children: (0,
                    y.jsxs)(e.ModalWrapper, {
                        children: [(0,
                        y.jsx)(Ue.Z, {
                            label: te,
                            value: b,
                            onUserInput: G,
                            onMax: U,
                            onCurrencySelect: function() {},
                            showMaxButton: !0,
                            currency: null,
                            id: "farm-action-input",
                            showCommonBases: !1,
                            balance: E,
                            disableCurrencySelect: !0,
                            pair: Z
                        }), !u && (0,
                        y.jsxs)(e.Roi, {
                            children: [(0,
                            y.jsxs)("h3", {
                                children: [" ", m("Annual ROI at current rates"), ":"]
                            }), (0,
                            y.jsxs)("div", {
                                className: "price",
                                children: [(0,
                                y.jsxs)("p", {
                                    title: V,
                                    children: ["$", V]
                                }), (0,
                                y.jsx)(e.IconCalculateWrap, {
                                    $isFinished: P,
                                    onClick: P ? function() {}
                                    : Y,
                                    children: (0,
                                    y.jsx)(x.qO, {})
                                })]
                            })]
                        }), (0,
                        y.jsxs)(e.ModalActions, {
                            children: [(0,
                            y.jsx)(x.zx, {
                                fullwidth: !0,
                                variant: "secondary",
                                onClick: i,
                                children: m("Cancel")
                            }), (0,
                            y.jsx)(x.zx, {
                                fullwidth: !0,
                                disabled: ee,
                                onClick: $,
                                children: m(C ? "Pending Confirmation" : "Confirm")
                            })]
                        }), (0,
                        y.jsx)(e.ModalFooter, {
                            children: (0,
                            y.jsxs)("a", {
                                className: "link",
                                href: R,
                                target: "_blank",
                                children: [(0,
                                y.jsx)("h3", {
                                    children: m("Get {{tokenName}}", {
                                        tokenName: o
                                    })
                                }), (0,
                                y.jsx)(x.xP, {})]
                            })
                        })]
                    })
                })
            })
        };
        dt.ModalWrapper = (0,
        h.default)(Je).withConfig({
            displayName: "FarmActionModal__ModalWrapper",
            componentId: "sc-k4dau5-0"
        })(["padding:24px;.symbol-title{font-style:normal;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#6c5dd3;}"]),
        dt.Roi = h.default.div.withConfig({
            displayName: "FarmActionModal__Roi",
            componentId: "sc-k4dau5-1"
        })(["display:flex;justify-content:space-between;align-items:center;margin-top:16px;h3{font-style:normal;font-weight:500;font-size:11px;line-height:14px;letter-spacing:0.3px;color:#8990a5;}.price{display:flex;align-items:center;p{display:block;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:normal;font-style:normal;font-weight:500;font-size:11px;line-height:14px;letter-spacing:0.3px;color:#0b1359;}svg{margin-left:10px;}}"]),
        dt.ModalActions = h.default.div.withConfig({
            displayName: "FarmActionModal__ModalActions",
            componentId: "sc-k4dau5-2"
        })(["display:flex;justify-content:space-between;margin-top:16px;button{&:first-child{margin-right:16px;}}"]),
        dt.ModalFooter = h.default.div.withConfig({
            displayName: "FarmActionModal__ModalFooter",
            componentId: "sc-k4dau5-3"
        })(["padding:24px 24px 0px 24px;border-top:1px solid #f4f5fa;margin-top:24px;display:flex;justify-content:center;align-items:center;width:100%;.link{display:flex;cursor:pointer;h3{font-style:normal;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#6c5dd3;}svg{margin-left:8px;}}"]),
        dt.IconCalculateWrap = h.default.div.withConfig({
            displayName: "FarmActionModal__IconCalculateWrap",
            componentId: "sc-k4dau5-4"
        })(["display:flex;justify-content:center;align-items:center;width:fit-content;cursor:pointer;", ""], (function(e) {
            return e.$isFinished && (0,
            h.css)(["opacity:0.5;pointer-events:none;"])
        }
        ));
        var lt, pt = dt, ut = function(e) {
            var t = e.max
              , n = e.onConfirm
              , r = e.onDismiss
              , i = e.tokenName
              , a = void 0 === i ? "" : i
              , o = e.farm
              , s = e.almPrice
              , c = (0,
            (0,
            p.$G)().t)("Stake LP tokens");
            return (0,
            y.jsx)(pt, {
                max: t,
                onConfirm: n,
                onDismiss: r,
                tokenName: a,
                farm: o,
                almPrice: s,
                title: c,
                type: "stake"
            })
        }, ft = n(83789), mt = n(44328);
        !function(e) {
            e.default = "5",
            e.fast = "6",
            e.instant = "7",
            e.testnet = "10"
        }(lt || (lt = {}));
        var xt = {
            default: (0,
            ye.parseUnits)(lt.default, "gwei").toString(),
            fast: (0,
            ye.parseUnits)(lt.fast, "gwei").toString(),
            instant: (0,
            ye.parseUnits)(lt.instant, "gwei").toString(),
            testnet: (0,
            ye.parseUnits)(lt.testnet, "gwei").toString()
        };
        function ht() {
            var e = xt.default;
            return {
                callWithGasPrice: (0,
                l.useCallback)(function() {
                    var e = (0,
                    O.Z)(T().mark((function e(t, n) {
                        var r, i, a, o, s = arguments;
                        return T().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return r = s.length > 2 && void 0 !== s[2] ? s[2] : [],
                                    i = s.length > 3 && void 0 !== s[3] ? s[3] : null,
                                    a = (0,
                                    c.get)(t, n),
                                    null === i || void 0 === i ? void 0 : i.gasPrice,
                                    e.next = 6,
                                    a.apply(void 0, (0,
                                    ft.Z)(r));
                                case 6:
                                    return o = e.sent,
                                    e.abrupt("return", o);
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(), [e])
            }
        }
        var gt = function(e) {
            var t = (0,
            Me.y8)()
              , n = ht().callWithGasPrice;
            return {
                onApprove: (0,
                l.useCallback)((0,
                O.Z)(T().mark((function r() {
                    var i, a;
                    return T().wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                return r.prev = 0,
                                r.next = 3,
                                n(e, "approve", [t.address, mt.MaxUint256]);
                            case 3:
                                return i = r.sent,
                                r.next = 6,
                                i.wait();
                            case 6:
                                return a = r.sent,
                                r.abrupt("return", a.status);
                            case 10:
                                return r.prev = 10,
                                r.t0 = r.catch(0),
                                console.error("APPROVE FARM : ", r.t0),
                                r.abrupt("return", !1);
                            case 14:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r, null, [[0, 10]])
                }
                ))), [e, t, n])
            }
        }
          , wt = n(91521)
          , yt = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n, r) {
                var i, a;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.deposit(n, (0,
                            wt.r0)(new (s())(r || "0")).toString());
                        case 2:
                            return i = e.sent,
                            e.next = 5,
                            i.wait();
                        case 5:
                            if ((a = e.sent).status) {
                                e.next = 8;
                                break
                            }
                            throw new Error("transaction was failed");
                        case 8:
                            return e.abrupt("return", null === a || void 0 === a ? void 0 : a.transactionHash);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , vt = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n, r) {
                var i, a;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            bt(t, n);
                        case 2:
                            return e.next = 4,
                            t.withdraw(n, (0,
                            wt.r0)(new (s())(r)).toString());
                        case 4:
                            return i = e.sent,
                            e.next = 7,
                            i.wait();
                        case 7:
                            if ((a = e.sent).status) {
                                e.next = 10;
                                break
                            }
                            throw new Error("transaction was failed");
                        case 10:
                            return e.abrupt("return", a.status);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , bt = function() {
            var e = (0,
            O.Z)(T().mark((function e(t, n) {
                var r, i;
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            t.deposit(n, "0");
                        case 2:
                            return r = e.sent,
                            e.next = 5,
                            r.wait();
                        case 5:
                            if ((i = e.sent).status) {
                                e.next = 8;
                                break
                            }
                            throw new Error("transaction was failed");
                        case 8:
                            return e.abrupt("return", i.status);
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , jt = function(e) {
            var t = (0,
            Me.y8)();
            return {
                onReward: (0,
                l.useCallback)((0,
                O.Z)(T().mark((function n() {
                    return T().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2,
                                bt(t, e);
                            case 2:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                ))), [e, t])
            }
        }
          , kt = function(e) {
            var t = (0,
            Me.y8)();
            return {
                onStake: (0,
                l.useCallback)(function() {
                    var n = (0,
                    O.Z)(T().mark((function n(r) {
                        var i;
                        return T().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    yt(t, e, r);
                                case 2:
                                    return i = n.sent,
                                    n.abrupt("return", i);
                                case 4:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(), [t, e])
            }
        }
          , Ct = function(e) {
            var t = (0,
            Me.y8)();
            return {
                onUnstake: (0,
                l.useCallback)(function() {
                    var n = (0,
                    O.Z)(T().mark((function n(r) {
                        return T().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2,
                                    vt(t, e, r);
                                case 2:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }(), [t, e])
            }
        }
          , _t = n(17857)
          , Nt = (0,
        h.default)(x.xv).withConfig({
            displayName: "FarmBalanceCounter__StyledText",
            componentId: "sc-18jjtsk-0"
        })(["color:", ";"], (function(e) {
            var t = e.isDisabled
              , n = e.color
              , r = e.theme;
            return t ? r.colors.textDisabled : n
        }
        ))
          , Ft = function(e) {
            var t = e.value
              , n = e.fontSize
              , r = e.color
              , i = e.decimals
              , a = e.isDisabled
              , o = e.unit
              , s = e.before
              , c = (0,
            l.useRef)(0);
            return (0,
            l.useEffect)((function() {
                c.current = t
            }
            ), [t]),
            (0,
            y.jsxs)(Nt, {
                bold: !0,
                color: r,
                fontSize: n,
                isDisabled: a,
                className: "balance",
                children: [s || "", (0,
                y.jsx)(_t.ZP, {
                    start: c.current,
                    end: t,
                    decimals: i,
                    duration: 1,
                    separator: ","
                }), t && o && (0,
                y.jsx)("span", {
                    children: o
                })]
            })
        };
        Ft.defaultProps = {
            fontSize: "32px",
            isDisabled: !1,
            color: "text",
            decimals: 3
        };
        var St = function(e) {
            var t = e.max
              , n = e.onConfirm
              , r = e.onDismiss
              , i = e.tokenName
              , a = void 0 === i ? "" : i
              , o = e.farm
              , s = e.almPrice
              , c = (0,
            (0,
            p.$G)().t)("Unstake LP tokens");
            return (0,
            y.jsx)(pt, {
                max: t,
                onConfirm: n,
                onDismiss: r,
                tokenName: a,
                farm: o,
                almPrice: s,
                title: c,
                withoutRoi: !0,
                type: "unstake"
            })
        }
          , It = (0,
        h.default)(qe.Z).withConfig({
            displayName: "Info__StyledConnectBtn",
            componentId: "sc-16xb4oa-0"
        })(["max-width:300px;width:auto !important;"])
          , At = h.default.div.withConfig({
            displayName: "Info__InfoRow",
            componentId: "sc-16xb4oa-1"
        })(["border-radius:6px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:10px 12px;", ""], (function(e) {
            return e.withBg && "background: #f4f5fa;"
        }
        ))
          , Ot = h.default.div.withConfig({
            displayName: "Info__InfoTitle",
            componentId: "sc-16xb4oa-2"
        })(["font-style:normal;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#8990a5;& > a{font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;border-bottom:1px solid #6c5dd3;padding-bottom:4px;}"])
          , Dt = h.default.div.withConfig({
            displayName: "Info__EarnsFarm",
            componentId: "sc-16xb4oa-3"
        })(["display:flex;flex-wrap:wrap;align-items:center;word-break:break-all;.balance{font-style:normal;font-weight:500;font-size:10px;line-height:10px;letter-spacing:1px;color:#8990a5;margin-left:4px;}"])
          , Tt = h.default.div.withConfig({
            displayName: "Info__InfoValue",
            componentId: "sc-16xb4oa-4"
        })(["font-style:normal;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#0b1359;"])
          , Et = h.default.div.withConfig({
            displayName: "Info__ColoredPrice",
            componentId: "sc-16xb4oa-5"
        })(["color:", ";font-style:normal;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.3px;"], (function(e) {
            return "textDisabled" === e.color ? "#8990a5" : "#6c5dd3"
        }
        ))
          , Bt = (0,
        h.default)(x.hU).withConfig({
            displayName: "Info__StakeCounter",
            componentId: "sc-16xb4oa-6"
        })(["background:#6c5dd3;&:hover{opacity:0.75;}svg{path{stroke:#fff;}}@media ", "{", "}"], g.mq.down(g.AV.sm), (function(e) {
            return e.viewMode === Z.TABLE && "\n      height: 28px;\n      width: 28px;\n    "
        }
        ))
          , Pt = (0,
        h.default)(x.zx).withConfig({
            displayName: "Info__HarvestButton",
            componentId: "sc-16xb4oa-7"
        })(["width:81px;height:32px;font-size:12px;"])
          , Lt = h.default.div.withConfig({
            displayName: "Info__AprItem",
            componentId: "sc-16xb4oa-8"
        })(["display:flex;align-items:center;svg{margin-right:10px;}"])
          , Mt = h.default.div.withConfig({
            displayName: "Info__IconCalculateWrap",
            componentId: "sc-16xb4oa-9"
        })(["display:flex;justify-content:center;align-items:center;width:fit-content;cursor:pointer;", ""], (function(e) {
            return e.$isFinished && (0,
            h.css)(["opacity:0.5;pointer-events:none;"])
        }
        ));
        function zt(e) {
            var t = e.isFinished
              , n = e.farm
              , r = e.almPrice
              , i = (0,
            m.$G)().t
              , a = Te()
              , o = (0,
            x.dd)((0,
            y.jsx)(st, {
                almPrice: r,
                farm: n
            }))
              , s = (0,
            we.Z)(o, 1)[0];
            return (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsxs)(Ot, {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    },
                    children: [i("APR"), (0,
                    y.jsx)(zt.Question, {
                        style: {
                            marginLeft: 11
                        },
                        text: i("Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.")
                    })]
                }), (0,
                y.jsx)(Tt, {
                    children: (0,
                    y.jsx)(Lt, {
                        children: a ? (0,
                        y.jsx)(x.Od, {
                            width: "75px"
                        }) : (0,
                        y.jsxs)(y.Fragment, {
                            children: [(0,
                            y.jsx)(Mt, {
                                $isFinished: t,
                                onClick: t ? function() {}
                                : s,
                                children: (0,
                                y.jsx)(x.qO, {})
                            }), n.apr || 0, "%"]
                        })
                    })
                })]
            })
        }
        function Zt(e) {
            var t = e.farm
              , n = (0,
            m.$G)().t;
            return (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsxs)(Ot, {
                    children: [" ", n("earn")]
                }), (0,
                y.jsx)(Tt, {
                    children: t.dual ? t.dual.earnLabel : n("ALM + Fees")
                })]
            })
        }
        function qt(e) {
            var t;
            return null === (t = e.lpSymbol) || void 0 === t ? void 0 : t.toUpperCase().replace("PANCAKE", "")
        }
        function Wt(e) {
            var t = (0,
            m.$G)().t
              , n = function(e) {
                var t = (e.userData || {}).earnings
                  , n = void 0 === t ? 0 : t;
                return new (s())(n)
            }(e)
              , r = (0,
            a.useWeb3React)().account
              , i = (0,
            l.useState)(!1)
              , o = i[0]
              , c = i[1]
              , d = jt(e.pid).onReward
              , p = (0,
            Re.Z)()
              , u = p.toastSuccess
              , f = p.toastError
              , h = Ee()
              , g = r ? (0,
            Ze.U4)(n) : se.HW
              , w = g.toFixed(3, s().ROUND_DOWN)
              , v = g ? g.multipliedBy(h).toNumber() : 0
              , b = Te();
            return {
                earnings: n,
                rawEarningsBalance: g,
                displayBalance: w,
                earningsBusd: v,
                titleNode: t("ALM earned"),
                displayBalanceNode: b ? (0,
                y.jsx)(x.Od, {
                    width: "50px"
                }) : (0,
                y.jsx)(Et, {
                    color: g.eq(0) ? "textDisabled" : "text",
                    children: w
                }),
                earningsBusdNode: v > 0 ? (0,
                y.jsx)(Ft, {
                    before: "~",
                    fontSize: "12px",
                    color: "textSubtle",
                    decimals: 2,
                    value: v,
                    unit: " USD"
                }) : null,
                harvestButtonNode: (0,
                y.jsx)(Pt, {
                    disabled: g.eq(0) || o || b,
                    variant: "secondary",
                    onClick: (0,
                    O.Z)(T().mark((function e() {
                        return T().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return c(!0),
                                    e.prev = 1,
                                    e.next = 4,
                                    d();
                                case 4:
                                    u("".concat(t("Harvested"), "!"), t("Your ALM earnings have been sent to your wallet!")),
                                    e.next = 11;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e.catch(1),
                                    f(t("Error"), t("Please try again. Confirm the transaction and make sure you are paying enough gas!")),
                                    console.error(e.t0);
                                case 11:
                                    return e.prev = 11,
                                    c(!1),
                                    e.finish(11);
                                case 14:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[1, 7, 11, 14]])
                    }
                    ))),
                    children: t("harvest")
                })
            }
        }
        zt.Question = (0,
        h.default)(We.Z).withConfig({
            displayName: "Info__Question",
            componentId: "sc-16xb4oa-10"
        })(["vertical-align:middle;", "{padding:0;}display:flex;"], We.Z.Wrapper);
        var Rt = (0,
        h.default)(Tt).withConfig({
            displayName: "Info__LpLink",
            componentId: "sc-16xb4oa-11"
        })(["a{display:flex;align-items:center;cursor:pointer;}svg{margin-left:8px;}"]);
        function Vt(e) {
            var t = e.farm
              , n = (0,
            m.$G)().t
              , r = (0,
            oe.x)().chainId
              , i = (0,
            ze.E8)(r, t.lpAddresses[r], "address");
            return (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsxs)(Ot, {
                    children: [n("Deposit"), ":"]
                }), (0,
                y.jsx)(Rt, {
                    children: (0,
                    y.jsxs)("a", {
                        href: i,
                        target: "_blank",
                        children: [qt(t), " ", (0,
                        y.jsx)(x.xP, {})]
                    })
                })]
            })
        }
        function Ht(e) {
            var t = e.depositFee
              , n = (0,
            m.$G)().t
              , r = Te();
            return (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsx)(Ot, {
                    children: n("Deposit fee")
                }), (0,
                y.jsx)(Tt, {
                    children: r ? (0,
                    y.jsx)(x.Od, {
                        width: 75,
                        height: 25
                    }) : "".concat(t || 0, "%")
                })]
            })
        }
        function Gt() {
            var e = (0,
            m.$G)().t;
            return (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsx)(Ot, {
                    children: e("LP Type")
                }), (0,
                y.jsx)(Tt, {
                    children: "Rinance LP"
                })]
            })
        }
        function Ut(e) {
            return (0,
            pe.Kn)(e.lpAddresses)
        }
        function $t(e) {
            var t = e.farm
              , n = (0,
            m.$G)().t
              , r = (0,
            oe.x)().chainId
              , i = Ut(t);
            return Te() ? (0,
            y.jsx)(x.Od, {
                width: 75,
                height: 25
            }) : (0,
            y.jsx)(Ot, {
                children: (0,
                y.jsx)("a", {
                    href: (0,
                    ze.E8)(r, i, "address"),
                    target: "_blank",
                    style: {
                        whiteSpace: "nowrap"
                    },
                    children: n("View on {{explorerName}}", {
                        explorerName: "BscScan"
                    })
                })
            })
        }
        function Xt(e) {
            var t = e.farm
              , n = (0,
            m.$G)().t
              , r = Te()
              , i = t.liqudity + "$";
            return (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsx)(Ot, {
                    children: n("Total Liquidity")
                }), (0,
                y.jsx)(Tt, {
                    children: r ? (0,
                    y.jsx)(x.Od, {
                        width: 75,
                        height: 25
                    }) : (0,
                    y.jsx)("p", {
                        children: i
                    })
                })]
            })
        }
        var Kt = h.default.div.withConfig({
            displayName: "Info__IconButtonWrapper",
            componentId: "sc-16xb4oa-12"
        })(["display:flex;svg{width:20px;}"]);
        function Yt(e) {
            var t = e.farm
              , n = (0,
            l.useState)(!1)
              , r = n[0]
              , i = n[1]
              , o = (0,
            m.$G)().t
              , c = (0,
            Le.PN)()
              , p = (0,
            a.useWeb3React)().account
              , u = Te()
              , f = J((function(e) {
                return e.viewMode
            }
            ))
              , h = t.userData || {}
              , g = h.tokenBalance
              , w = void 0 === g ? 0 : g
              , v = h.stakedBalance
              , b = void 0 === v ? 0 : v
              , j = h.allowance
              , k = void 0 === j ? 0 : j
              , C = t.pid
              , _ = t.lpSymbol
              , N = t.apr
              , F = t.lpAddresses
              , S = new (s())(k)
              , I = (0,
            pe.Kn)(F)
              , A = p && S && S.isGreaterThan(0)
              , D = new (s())(w)
              , E = (0,
            Me.Ib)(I)
              , B = gt(E).onApprove
              , P = (0,
            l.useMemo)((function() {
                return new (s())(b)
            }
            ), [b])
              , L = kt(C).onStake
              , M = Ct(C).onUnstake
              , z = (0,
            d.useRouter)()
              , Z = J((function(e) {
                return e.hasTicket
            }
            ))
              , q = Be(_)
              , W = Ee()
              , R = !!p && !P.eq(0)
              , V = p && !A
              , H = A && !R
              , G = !Z
              , U = !G && !V && !H
              , $ = function() {
                var e = (0,
                O.Z)(T().mark((function e(n) {
                    return T().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                L(n);
                            case 2:
                                Pe.Z.stakeFarms(c, t, n);
                            case 3:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , X = function() {
                var e = (0,
                O.Z)(T().mark((function e(t) {
                    return T().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                M(t);
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , K = (0,
            x.dd)((0,
            y.jsx)(ut, {
                max: D,
                onConfirm: $,
                tokenName: _,
                apr: N,
                farm: t,
                almPrice: W
            }))
              , Y = (0,
            we.Z)(K, 1)[0]
              , Q = (0,
            x.dd)((0,
            y.jsx)(St, {
                farm: t,
                max: P,
                onConfirm: X,
                tokenName: _
            }))
              , ee = (0,
            we.Z)(Q, 1)[0]
              , te = (0,
            l.useCallback)((0,
            O.Z)(T().mark((function e() {
                return T().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            i(!0),
                            e.next = 4,
                            B();
                        case 4:
                            i(!1),
                            e.next = 10;
                            break;
                        case 7:
                            e.prev = 7,
                            e.t0 = e.catch(0),
                            console.error(e.t0);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 7]])
            }
            ))), [B, p, C])
              , ne = (0,
            l.useCallback)((function() {
                if (V || G)
                    return "";
                if (!p)
                    return "0.000";
                var e = (0,
                Ze.U4)(P);
                return e.gt(0) && e.lt(1e-7) ? "<0.0000001" : e.gt(0) ? e.toFixed(8, s().ROUND_DOWN) : e.toFixed(3, s().ROUND_DOWN)
            }
            ), [V, G, p, P])
              , re = (0,
            Ze.mW)(q.times(P));
            return {
                titleNode: o("{{tokenName}} Staked", {
                    tokenName: _
                }),
                displayBalanceNode: V || G ? null : u ? (0,
                y.jsx)(x.Od, {
                    width: "50px"
                }) : (0,
                y.jsx)(Et, {
                    color: "text",
                    children: ne()
                }),
                balanceNode: !u && p && P.gt(0) && q.gt(0) && (0,
                y.jsx)(Ft, {
                    before: "~",
                    fontSize: "12px",
                    color: "textSubtle",
                    decimals: 2,
                    value: re,
                    unit: " USD"
                }),
                stakedBalanceNotZero: R,
                stakingButtonsNode: !u && p && R ? (0,
                y.jsxs)(Kt, {
                    children: [(0,
                    y.jsx)(Bt, {
                        size: "sm",
                        variant: "tertiary",
                        onClick: ee,
                        mr: "6px",
                        viewMode: f,
                        children: (0,
                        y.jsx)(x.V_, {})
                    }), (0,
                    y.jsx)(Bt, {
                        size: "sm",
                        viewMode: f,
                        variant: "tertiary",
                        onClick: Y,
                        disabled: ["history", "archived"].some((function(e) {
                            return z.pathname.includes(e)
                        }
                        )),
                        children: (0,
                        y.jsx)(x.dt.Small, {})
                    })]
                }) : (0,
                y.jsx)("div", {
                    children: "-"
                }),
                actionsNode: p ? U ? null : (0,
                y.jsxs)(y.Fragment, {
                    children: [G ? (0,
                    y.jsx)("div", {}) : V && (0,
                    y.jsx)(x.zx, {
                        mt: "8px",
                        disabled: r || u,
                        onClick: te,
                        children: o("Enable Farm")
                    }), H && (0,
                    y.jsx)(x.zx, {
                        onClick: Y,
                        disabled: ["history", "archived"].some((function(e) {
                            return z.pathname.includes(e)
                        }
                        )),
                        children: o("Stake LP")
                    })]
                }) : (0,
                y.jsx)(It, {
                    title: o("Connect Wallet")
                }),
                onPresentDeposit: Y
            }
        }
        var Jt = h.default.div.withConfig({
            displayName: "DetailsSection__Wrapper",
            componentId: "sc-168p1q7-0"
        })(["padding:0 16px 24px 16px;position:absolute;width:100%;left:0;background:#ffffff;box-shadow:0px 6px 12px rgba(185,189,208,0.4);border-radius:6px;z-index:9;.hide{width:fit-content;margin-top:8px;float:right;cursor:pointer;}height:", ";bottom:", ";opacity:", ";transition:0.3s all ease;overflow:hidden;"], (function(e) {
            return e.open ? "204px" : "0px"
        }
        ), (function(e) {
            return e.open ? "-194px;" : "0"
        }
        ), (function(e) {
            return e.open ? "1" : "0"
        }
        ))
          , Qt = h.default.div.withConfig({
            displayName: "DetailsSection__Info",
            componentId: "sc-168p1q7-1"
        })(["display:flex;justify-content:space-between;min-height:32px;align-items:center;.title{font-style:normal;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#8990a5;}.field{font-style:normal;font-weight:500;font-size:14px;line-height:20px;text-align:right;letter-spacing:0.3px;color:#0b1359;}.scan-link{font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;border-bottom:1px solid #6c5dd3;padding-bottom:4px;}"])
          , en = h.default.div.withConfig({
            displayName: "DetailsSection__DetailsLabel",
            componentId: "sc-168p1q7-2"
        })(["display:flex;align-items:center;cursor:pointer;"])
          , tn = function(e) {
            e.bscScanAddress,
            e.lpLabel;
            var t = e.farm
              , n = (0,
            p.$G)().t
              , r = Te()
              , i = (0,
            l.useState)(!1)
              , a = i[0]
              , o = i[1]
              , s = t.liqudity + "$";
            return (0,
            y.jsxs)(y.Fragment, {
                children: [!a && (0,
                y.jsx)(en, {
                    onClick: function() {
                        o(!a)
                    }
                }), (0,
                y.jsx)(Jt, {
                    open: a,
                    children: a && (0,
                    y.jsxs)(y.Fragment, {
                        children: [(0,
                        y.jsx)(Qt, {
                            children: (0,
                            y.jsx)(Vt, {
                                farm: t
                            })
                        }), (0,
                        y.jsxs)(Qt, {
                            children: [(0,
                            y.jsx)("div", {
                                className: "title",
                                children: n("Total Liquidity")
                            }), (0,
                            y.jsx)("div", {
                                className: "field",
                                children: r ? (0,
                                y.jsx)(x.Od, {
                                    width: 75,
                                    height: 25
                                }) : (0,
                                y.jsx)("p", {
                                    children: s
                                })
                            })]
                        }), (0,
                        y.jsxs)(Qt, {
                            children: [(0,
                            y.jsx)("div", {
                                className: "title",
                                children: n("Deposit fee")
                            }), (0,
                            y.jsx)("div", {
                                className: "field",
                                children: r ? (0,
                                y.jsx)(x.Od, {
                                    width: 75,
                                    height: 25
                                }) : "".concat((null === t || void 0 === t ? void 0 : t.depositFee) || 0, "%")
                            })]
                        }), (0,
                        y.jsx)(Qt, {
                            children: (0,
                            y.jsx)(Gt, {})
                        }), (0,
                        y.jsx)(Qt, {
                            children: (0,
                            y.jsx)($t, {
                                farm: t
                            })
                        })]
                    })
                })]
            })
        }
          , nn = n(62268)
          , rn = h.default.div.withConfig({
            displayName: "CardHeading__Wrapper",
            componentId: "sc-193j7fs-0"
        })(["border-radius:6px;width:100%;height:116px;display:flex;justify-content:space-between;flex-direction:row;padding:0px 24px 0px 20px;align-items:center;"])
          , an = h.default.div.withConfig({
            displayName: "CardHeading__Info",
            componentId: "sc-193j7fs-1"
        })([".label{text-align:right;font-style:normal;font-weight:500;font-size:24px;line-height:30px;letter-spacing:0.3px;margin-bottom:8px;color:#ffffff;}@media ", "{", "}"], g.mq.down(g.AV.sm), (function(e) {
            return e.type === Z.TABLE && "\n      display: flex;\n      align-items: center;\n      .label{\n        font-size: 18px;\n        margin-right: 8px;\n        margin-bottom: 0px;\n      }\n    "
        }
        ))
          , on = h.default.div.withConfig({
            displayName: "CardHeading__Tags",
            componentId: "sc-193j7fs-2"
        })(["display:flex;justify-content:flex-end;"])
          , sn = h.default.div.withConfig({
            displayName: "CardHeading__Core",
            componentId: "sc-193j7fs-3"
        })(["margin-right:4px;background:rgba(41,217,143,0.3);border:1px solid #29d98f;box-sizing:border-box;border-radius:16px;font-style:normal;font-weight:500;font-size:11px;line-height:14px;letter-spacing:0.3px;color:#29d98f;width:fit-content;display:flex;align-items:center;padding:3px 8px 3px 3px;span{margin-right:6px;width:24px;height:24px;left:3px;top:3px;background:#29d98f;border-radius:14px;display:block;}@media ", "{", "}"], g.mq.down(g.AV.sm), (function(e) {
            return e.type === Z.TABLE && "\n      padding: 0;\n      padding-left: 1px;\n      width: 58px;\n      height: 22px;\n      span{\n        height: 18px;\n        width: 18px;\n      }\n    "
        }
        ))
          , cn = h.default.div.withConfig({
            displayName: "CardHeading__Multiplier",
            componentId: "sc-193j7fs-4"
        })(["background:rgba(255,161,0,0.3);border:1px solid #ffa100;box-sizing:border-box;border-radius:16px;font-style:normal;font-weight:500;font-size:11px;line-height:14px;letter-spacing:0.3px;color:#ffa100;padding:8px 10px 8px 10px;width:fit-content;min-width:41px;display:flex;justify-content:center;align-items:center;@media ", "{", "}"], g.mq.down(g.AV.sm), (function(e) {
            return e.type === Z.TABLE && "\n      height: 22px;\n      padding: 0;\n      margin: 0;\n      width: fit-content;\n      min-width: 31px;\n    "
        }
        ))
          , dn = h.default.div.withConfig({
            displayName: "CardHeading__DoubleLogo",
            componentId: "sc-193j7fs-5"
        })(["display:flex;@media ", "{", "}"], g.mq.down(g.AV.sm), (function(e) {
            return e.type === Z.TABLE && "\n      img {\n        width: 35px;\n        height: 35px;\n      }\n    "
        }
        ))
          , ln = h.default.div.withConfig({
            displayName: "CardHeading__WrapMainLogo",
            componentId: "sc-193j7fs-6"
        })(["position:relative;z-index:1;"])
          , pn = h.default.div.withConfig({
            displayName: "CardHeading__WrapSecondLogo",
            componentId: "sc-193j7fs-7"
        })(["position:relative;z-index:0;right:20px;@media ", "{", "}"], g.mq.down(g.AV.sm), (function(e) {
            return e.type === Z.TABLE && "\n      right: 13px;\n    "
        }
        ))
          , un = (0,
        h.default)(x.Od).withConfig({
            displayName: "CardHeading__MultiplierSkeleton",
            componentId: "sc-193j7fs-8"
        })(["border-radius:16px;"])
          , fn = function(e) {
            var t = e.farm
              , n = e.type
              , r = Te();
            return (0,
            y.jsxs)(rn, {
                className: "farm__head",
                children: [(0,
                y.jsx)("div", {
                    className: "icons",
                    children: (0,
                    y.jsxs)(dn, {
                        type: n,
                        children: [(0,
                        y.jsx)(ln, {
                            children: (0,
                            y.jsx)(nn.Z, {
                                size: "48px",
                                currency: t.token
                            })
                        }), (0,
                        y.jsx)(pn, {
                            type: n,
                            children: (0,
                            y.jsx)(nn.Z, {
                                size: "48px",
                                currency: t.quoteToken
                            })
                        })]
                    })
                }), (0,
                y.jsxs)(an, {
                    type: n,
                    children: [(0,
                    y.jsx)("div", {
                        className: "label",
                        children: qt(t).split(" ")[0]
                    }), (0,
                    y.jsxs)(on, {
                        children: [(0,
                        y.jsxs)(sn, {
                            type: n,
                            children: [(0,
                            y.jsx)("span", {}), t.isCommunity ? "Community" : "Core"]
                        }), r ? (0,
                        y.jsx)(un, {
                            width: "41px",
                            height: "32px"
                        }) : (0,
                        y.jsx)(cn, {
                            type: n,
                            children: t.multiplier
                        })]
                    })]
                })]
            })
        }
          , mn = h.default.div.withConfig({
            displayName: "FarmCard__StyledCard",
            componentId: "sc-1gslngd-0"
        })(["height:100%;background:#ffffff;border-radius:6px;padding:4px 4px 24px 4px;position:relative;@media ", "{width:100%;}"], g.mq.down(g.AV.sm))
          , xn = h.default.div.withConfig({
            displayName: "FarmCard__ContentCard",
            componentId: "sc-1gslngd-1"
        })(["padding:0px 16px 0px 16px;"])
          , hn = h.default.div.withConfig({
            displayName: "FarmCard__FooterCard",
            componentId: "sc-1gslngd-2"
        })(["margin-top:16px;display:flex;justify-content:", ";"], (function(e) {
            return e.isSingle ? "flex-end" : "space-between"
        }
        ))
          , gn = function(e) {
            var t = e.isFinished
              , n = e.farm
              , r = e.almPrice
              , i = (e.removed,
            Wt(n))
              , a = Yt({
                farm: n
            });
            return (0,
            y.jsxs)(mn, {
                className: "farm__card",
                children: [(0,
                y.jsx)(fn, {
                    farm: n,
                    type: Z.CARD
                }), (0,
                y.jsxs)(xn, {
                    children: [(0,
                    y.jsx)(At, {
                        children: (0,
                        y.jsx)(zt, {
                            isFinished: t,
                            farm: n,
                            almPrice: r
                        })
                    }), (0,
                    y.jsx)(At, {
                        withBg: !0,
                        children: (0,
                        y.jsx)(Zt, {
                            farm: n
                        })
                    }), (0,
                    y.jsxs)(At, {
                        style: {
                            minHeight: "70px"
                        },
                        children: [(0,
                        y.jsxs)(Ot, {
                            children: [i.titleNode, (0,
                            y.jsxs)(Dt, {
                                children: [i.displayBalanceNode, i.earningsBusdNode]
                            })]
                        }), (0,
                        y.jsx)(Tt, {
                            children: i.harvestButtonNode
                        })]
                    }), (0,
                    y.jsxs)(At, {
                        withBg: !0,
                        children: [(0,
                        y.jsxs)(Ot, {
                            children: [(0,
                            y.jsx)("p", {
                                children: a.titleNode
                            }), (0,
                            y.jsxs)(Dt, {
                                children: [(0,
                                y.jsx)("p", {
                                    children: a.displayBalanceNode
                                }), (0,
                                y.jsxs)("p", {
                                    children: [" ", a.balanceNode]
                                })]
                            })]
                        }), (0,
                        y.jsx)(Tt, {
                            children: a.stakingButtonsNode
                        })]
                    }), (0,
                    y.jsxs)(hn, {
                        isSingle: !a.actionsNode,
                        children: [a.actionsNode, (0,
                        y.jsx)(tn, {
                            farm: n
                        })]
                    })]
                })]
            })
        }
          , wn = n(71568)
          , yn = n(7408)
          , vn = function e() {
            var t = (0,
            m.$G)().t;
            return (0,
            y.jsxs)(e.Wrapper, {
                children: [(0,
                y.jsx)(e.Card, {
                    children: (0,
                    y.jsx)(x.Wh, {})
                }), (0,
                y.jsxs)(e.Row, {
                    children: [(0,
                    y.jsxs)(e.Label, {
                        children: [t("Remaining until completion"), ":"]
                    }), (0,
                    y.jsx)(e.Amount, {
                        children: t("{{blocks}} blocks", {
                            blocks: "907 200"
                        })
                    })]
                })]
            })
        };
        vn.Wrapper = h.default.div.withConfig({
            displayName: "FarmRemainingBlocks__Wrapper",
            componentId: "sc-1nali9r-0"
        })(["display:flex;align-items:center;margin-bottom:32px;"]),
        vn.Card = h.default.div.withConfig({
            displayName: "FarmRemainingBlocks__Card",
            componentId: "sc-1nali9r-1"
        })(["background:rgba(108,93,211,0.1);border-radius:16px;height:48px;width:48px;display:flex;justify-content:center;align-items:center;svg{fill:transparent;}margin-right:16px;"]),
        vn.Row = h.default.div.withConfig({
            displayName: "FarmRemainingBlocks__Row",
            componentId: "sc-1nali9r-2"
        })(["display:flex;align-items:center;@media ", "{flex-direction:column;align-items:baseline;}"], g.mq.down(g.AV.sm)),
        vn.Label = h.default.h2.withConfig({
            displayName: "FarmRemainingBlocks__Label",
            componentId: "sc-1nali9r-3"
        })(["", ";color:", ";margin-right:10px;@media ", "{", "}"], yn.Eb.regular, wn.dw.basic, g.mq.down(g.AV.sm), yn.A6.medium),
        vn.Amount = h.default.p.withConfig({
            displayName: "FarmRemainingBlocks__Amount",
            componentId: "sc-1nali9r-4"
        })(["", ";color:", ";@media ", "{", "}"], yn.Eb.regular, wn.dw.primary, g.mq.down(g.AV.sm), yn.A6.medium);
        var bn = vn
          , jn = n(89211)
          , kn = n(94829)
          , Cn = function e(t) {
            var n = t.cells
              , r = t.farmClassname
              , i = t.isOpen
              , a = t.earned
              , o = t.farm
              , s = t.media
              , c = s.isXlMedia
              , d = s.isLGMedia
              , p = (0,
            l.useCallback)((function() {
                var t = [(0,
                y.jsx)(e.DepositWithLiqudity, {
                    farm: o
                }, 1), n.depositFee, n.lpType, n.earned, (0,
                y.jsx)(e.HarvestWithBsc, {
                    withBsc: c,
                    earned: a,
                    farm: o
                }, 4)];
                return d ? [] : (c ? t.push([n.bscScanEnd, n.empty]) : t.push([n.empty, n.empty]),
                t)
            }
            ), [n.bscScanEnd, n.depositFee, n.earned, n.empty, n.lpType, a, o, d, c])
              , u = (0,
            l.useCallback)((function() {
                return {
                    firstCell: [(0,
                    y.jsx)(e.DepositWithLiqudity, {
                        farm: o
                    }, 1), n.earned, n.harvest, n.stakedButtonsOrActionsNode],
                    secondCell: [(0,
                    y.jsx)(e.LpTypeWithDepositFee, {
                        withDeposit: d,
                        cells: n,
                        farm: o
                    }, 1), n.staked, n.empty, n.bscScanEnd, n.empty]
                }
            }
            ), [n, o, d])
              , f = p()
              , m = u()
              , x = m.firstCell
              , h = m.secondCell;
            return (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsx)(Fn.Summary, {
                    className: r,
                    children: d ? [n.heading, n.apr, n.earn, n.earned, n.indicator] : [n.heading, n.apr, n.earn, n.earned, n.staked, n.stakedButtonsOrActionsNode, n.indicator]
                }), i && (0,
                y.jsx)(y.Fragment, {
                    children: d ? (0,
                    y.jsx)(Fn.Details, {
                        children: (0,
                        y.jsx)("td", {
                            colSpan: 100,
                            children: (0,
                            y.jsx)("table", {
                                style: {
                                    width: "100%"
                                },
                                children: (0,
                                y.jsxs)("tbody", {
                                    children: [(0,
                                    y.jsx)("tr", {
                                        children: x
                                    }), (0,
                                    y.jsx)("tr", {
                                        children: h
                                    })]
                                })
                            })
                        })
                    }) : (0,
                    y.jsx)(Fn.Details, {
                        children: f
                    })
                }), (0,
                y.jsx)(Fn.Separator, {})]
            })
        };
        Cn.DepositWithLiqudity = function(e) {
            var t = e.farm;
            return (0,
            y.jsx)(Fn.Cell, {
                children: (0,
                y.jsxs)(Fn.MultipleField, {
                    children: [(0,
                    y.jsx)(Fn.Field, {
                        children: (0,
                        y.jsx)(Vt, {
                            farm: t
                        })
                    }), (0,
                    y.jsx)(Fn.Field, {
                        children: (0,
                        y.jsx)(Xt, {
                            farm: t
                        })
                    })]
                })
            })
        }
        ,
        Cn.LpTypeWithDepositFee = function(e) {
            var t = e.withDeposit
              , n = e.cells
              , r = e.farm;
            return (0,
            y.jsx)(Fn.Cell, {
                children: t ? (0,
                y.jsxs)(Fn.MultipleField, {
                    children: [(0,
                    y.jsx)(Fn.Field, {
                        children: (0,
                        y.jsx)(Gt, {})
                    }), (0,
                    y.jsx)(Fn.Field, {
                        children: (0,
                        y.jsx)(Ht, {
                            depositFee: null === r || void 0 === r ? void 0 : r.depositFee
                        })
                    })]
                }) : (0,
                y.jsx)(y.Fragment, {
                    children: n.lpType
                })
            })
        }
        ,
        Cn.HarvestWithBsc = function(e) {
            var t = e.withBsc
              , n = e.earned
              , r = e.farm;
            return (0,
            y.jsx)(Fn.Cell, {
                children: t ? (0,
                y.jsx)(y.Fragment, {
                    children: n.harvestButtonNode
                }) : (0,
                y.jsxs)(Fn.MultipleField, {
                    children: [(0,
                    y.jsx)(Fn.Field, {
                        children: n.harvestButtonNode
                    }), (0,
                    y.jsx)(Fn.Field, {
                        children: (0,
                        y.jsx)($t, {
                            farm: r
                        })
                    })]
                })
            })
        }
        ;
        var _n = Cn
          , Nn = function(e) {
            var t = e.cells
              , n = e.farmClassname
              , r = e.isOpen;
            return (0,
            y.jsxs)(y.Fragment, {
                children: [(0,
                y.jsxs)(Fn.MobileView, {
                    className: n,
                    children: [(0,
                    y.jsx)("tr", {
                        children: t.heading
                    }), (0,
                    y.jsx)("tr", {
                        children: [t.apr, t.earn, !r && t.indicator]
                    }), r && (0,
                    y.jsxs)(y.Fragment, {
                        children: [(0,
                        y.jsx)("tr", {
                            children: [t.totalLiquidity, t.deposit]
                        }), (0,
                        y.jsx)("tr", {
                            children: [t.lpType, t.depositFee]
                        }), (0,
                        y.jsx)("tr", {
                            children: [t.earned, t.harvest]
                        }), (0,
                        y.jsx)("tr", {
                            children: [t.staked, t.stakedButtonsOrActionsNode]
                        }), (0,
                        y.jsx)("tr", {
                            children: [t.bscScan]
                        }), (0,
                        y.jsx)("tr", {
                            children: [t.stakedActions, t.indicator]
                        })]
                    })]
                }), (0,
                y.jsx)(Fn.Separator, {})]
            })
        };
        function Fn(e) {
            var t = e.isFinished
              , n = e.farm
              , r = e.farmNum
              , i = e.almPrice
              , a = Wt(n)
              , o = Yt({
                farm: n
            })
              , s = (0,
            jn.Z)(!1)
              , c = (0,
            we.Z)(s, 2)
              , d = c[0]
              , p = c[1]
              , u = (0,
            kn.Z)("screen and (max-width: 678px)")
              , f = (0,
            kn.Z)("screen and ".concat(g.mq.down(g.AV.lg)))
              , m = (0,
            kn.Z)("screen and ".concat(g.mq.down(g.AV.xl)))
              , h = {
                isMobile: u,
                isLGMedia: f,
                isXlMedia: m
            }
              , w = r < 3 ? "farm__row".concat(r) : "farm__row"
              , v = (0,
            l.useMemo)((function() {
                return {
                    heading: (0,
                    y.jsx)(Fn.HeadingCell, {
                        children: (0,
                        y.jsx)(fn, {
                            farm: n,
                            type: Z.TABLE
                        })
                    }),
                    apr: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsx)(Fn.Field, {
                            children: (0,
                            y.jsx)(zt, {
                                isFinished: t,
                                farm: n,
                                almPrice: i
                            })
                        })
                    }),
                    earn: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsx)(Fn.Field, {
                            children: (0,
                            y.jsx)(Zt, {
                                farm: n
                            })
                        })
                    }),
                    earned: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsxs)(Fn.Field, {
                            children: [(0,
                            y.jsx)(Fn.StyledInfoTitle, {
                                children: a.titleNode
                            }), (0,
                            y.jsxs)(Dt, {
                                children: [a.displayBalanceNode, a.earningsBusdNode]
                            })]
                        })
                    }),
                    staked: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsxs)(Fn.Field, {
                            children: [(0,
                            y.jsx)(Fn.StyledInfoTitle, {
                                children: o.titleNode
                            }), (0,
                            y.jsxs)(Dt, {
                                children: [o.displayBalanceNode || "-", o.balanceNode]
                            })]
                        })
                    }),
                    stakedButtonsOrActionsNode: (0,
                    y.jsx)(Fn.CellEnd, {
                        children: u ? o.stakedBalanceNotZero && o.stakingButtonsNode : o.stakedBalanceNotZero ? o.stakingButtonsNode : o.actionsNode
                    }),
                    stakedActions: (0,
                    y.jsx)(Fn.Cell, {
                        children: o.actionsNode
                    }),
                    indicator: (0,
                    y.jsx)(Fn.IndicatorCell, {
                        onClick: p,
                        children: d ? (0,
                        y.jsx)(x.g8, {}) : (0,
                        y.jsx)(x.v4, {})
                    }),
                    deposit: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsx)(Fn.Field, {
                            children: (0,
                            y.jsx)(Vt, {
                                farm: n
                            })
                        })
                    }),
                    totalLiquidity: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsx)(Fn.Field, {
                            children: (0,
                            y.jsx)(Xt, {
                                farm: n
                            })
                        })
                    }),
                    depositFee: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsx)(Fn.Field, {
                            children: (0,
                            y.jsx)(Ht, {
                                depositFee: null === n || void 0 === n ? void 0 : n.depositFee
                            })
                        })
                    }),
                    lpType: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsx)(Fn.Field, {
                            children: (0,
                            y.jsx)(Gt, {})
                        })
                    }),
                    bscScan: (0,
                    y.jsx)(Fn.Cell, {
                        children: (0,
                        y.jsx)($t, {
                            farm: n
                        })
                    }),
                    bscScanEnd: (0,
                    y.jsx)(Fn.CellEnd, {
                        children: (0,
                        y.jsx)($t, {
                            farm: n
                        })
                    }),
                    harvest: (0,
                    y.jsx)(Fn.Cell, {
                        children: a.harvestButtonNode
                    }),
                    empty: (0,
                    y.jsx)(Fn.Cell, {})
                }
            }
            ), [i, a.displayBalanceNode, a.earningsBusdNode, a.harvestButtonNode, a.titleNode, n, u, d, o.actionsNode, o.balanceNode, o.displayBalanceNode, o.stakedBalanceNotZero, o.stakingButtonsNode, o.titleNode, p]);
            return u ? (0,
            y.jsx)(Nn, {
                cells: v,
                farmClassname: w,
                isOpen: d
            }) : (0,
            y.jsx)(_n, {
                cells: v,
                farmClassname: w,
                isOpen: d,
                earned: a,
                farm: n,
                media: h
            })
        }
        function Sn(e) {
            var t = e.viewMode
              , n = e.farms
              , r = e.almPrice
              , i = (0,
            m.$G)().t
              , a = J((function(e) {
                return e.activeTab
            }
            ))
              , o = q.finished === a;
            if ((null === n || void 0 === n || !n.length) && !o)
                return (0,
                y.jsxs)(Sn.Empty, {
                    children: [(0,
                    y.jsx)(x.LT, {}), (0,
                    y.jsx)(re.Z.Text, {
                        children: i("No active pools")
                    })]
                });
            switch (t) {
            case Z.CARD:
                return (0,
                y.jsxs)(y.Fragment, {
                    children: [!o && (0,
                    y.jsx)(bn, {}), (0,
                    y.jsx)(Sn.Grid, {
                        children: null !== n && void 0 !== n && n.length ? n.map((function(e, t) {
                            return (0,
                            y.jsx)(gn, {
                                isFinished: o,
                                farm: e,
                                almPrice: r
                            }, t)
                        }
                        )) : ""
                    })]
                });
            case Z.TABLE:
                return (0,
                y.jsxs)(y.Fragment, {
                    children: [!o && (0,
                    y.jsx)(bn, {}), (0,
                    y.jsx)(Sn.Table, {
                        children: (0,
                        y.jsx)("tbody", {
                            children: null !== n && void 0 !== n && n.length ? n.map((function(e, t) {
                                return (0,
                                y.jsx)(Fn, {
                                    isFinished: o,
                                    farmNum: t,
                                    farm: e,
                                    almPrice: r
                                }, t)
                            }
                            )) : ""
                        })
                    })]
                })
            }
        }
        Fn.Paper = h.default.tr.withConfig({
            displayName: "FarmRow__Paper",
            componentId: "sc-16aeug-0"
        })(["width:100%;border-radius:6px;background:#fff;"]),
        Fn.Cell = h.default.td.withConfig({
            displayName: "FarmRow__Cell",
            componentId: "sc-16aeug-1"
        })(["vertical-align:middle;padding:0 12px;"]),
        Fn.CellEnd = (0,
        h.default)(Fn.Cell).withConfig({
            displayName: "FarmRow__CellEnd",
            componentId: "sc-16aeug-2"
        })(["text-align:end;"]),
        Fn.HeadingCell = (0,
        h.default)(Fn.Cell).withConfig({
            displayName: "FarmRow__HeadingCell",
            componentId: "sc-16aeug-3"
        })(["min-width:292px;max-width:292px;width:292px;padding:4px;@media ", "{width:268px;max-width:none;}& > *{height:90px;}@media ", "{& > *{height:64px;}}"], g.mq.down(g.AV.md), g.mq.down(375)),
        Fn.Separator = h.default.div.withConfig({
            displayName: "FarmRow__Separator",
            componentId: "sc-16aeug-4"
        })(["height:4px;"]),
        Fn.IndicatorCell = (0,
        h.default)(Fn.Cell).withConfig({
            displayName: "FarmRow__IndicatorCell",
            componentId: "sc-16aeug-5"
        })(["cursor:pointer;text-align:center;"]),
        Fn.Summary = (0,
        h.default)(Fn.Paper).withConfig({
            displayName: "FarmRow__Summary",
            componentId: "sc-16aeug-6"
        })([""]),
        Fn.MobileView = (0,
        h.default)(Fn.Summary).withConfig({
            displayName: "FarmRow__MobileView",
            componentId: "sc-16aeug-7"
        })(["display:flex;flex-direction:column;", "{width:100%;}& > tr{padding:18px 0;width:100%;display:flex;align-items:center;&:first-child{@media ", "{padding:0;}}& > *{flex:1;}}", "{margin-left:auto;text-align:right;}"], Fn.HeadingCell, g.mq.down(375), Fn.IndicatorCell),
        Fn.Details = (0,
        h.default)(Fn.Paper).withConfig({
            displayName: "FarmRow__Details",
            componentId: "sc-16aeug-8"
        })(["", "{padding-top:22px;padding-bottom:22px;}"], Fn.Cell),
        Fn.DetailsTable = h.default.table.withConfig({
            displayName: "FarmRow__DetailsTable",
            componentId: "sc-16aeug-9"
        })(["width:100%;"]),
        Fn.Field = h.default.div.withConfig({
            displayName: "FarmRow__Field",
            componentId: "sc-16aeug-10"
        })(["display:grid;grid-template-columns:1fr;grid-template-rows:24px 24px;align-items:center;gap:8px;width:100%;"]),
        Fn.MultipleField = h.default.div.withConfig({
            displayName: "FarmRow__MultipleField",
            componentId: "sc-16aeug-11"
        })(["display:flex;justify-content:space-between;"]),
        Fn.StyledInfoTitle = (0,
        h.default)(Ot).withConfig({
            displayName: "FarmRow__StyledInfoTitle",
            componentId: "sc-16aeug-12"
        })(["&{white-space:nowrap;}"]),
        Sn.Container = h.default.div.withConfig({
            displayName: "FarmContent__Container",
            componentId: "sc-1k6jzza-0"
        })([".farm__row,.farm__card{.farm__head{background-size:contain;", " background-repeat:no-repeat;}}.farm__card{", ";", ";", ";}.farm__row{.farm__head{", ";}}.farm__row0{.farm__head{", ";}}.farm__row1{.farm__head{", ";}}.farm__row2{.farm__head{", ";}}"], ie[0], ae(1), ae(2), ae(3), ie[0], ie[1], ie[2], ie[3]);
        Sn.Grid = h.default.div.withConfig({
            displayName: "FarmContent__Grid",
            componentId: "sc-1k6jzza-1"
        })(["display:grid;gap:34px 30px;grid-template-columns:repeat(4,378px);justify-content:center;@media ", "{grid-template-columns:repeat(3,354px);}@media ", "{gap:24px 16px;grid-template-columns:repeat(2,354px);}@media ", "{gap:16px;grid-template-columns:repeat(1,354px);}"], g.mq.down(g.AV.xl), g.mq.down(g.AV.lg), g.mq.down(g.AV.sm)),
        Sn.Table = h.default.table.withConfig({
            displayName: "FarmContent__Table",
            componentId: "sc-1k6jzza-2"
        })(["width:100%;"]),
        Sn.Empty = h.default.div.withConfig({
            displayName: "FarmContent__Empty",
            componentId: "sc-1k6jzza-3"
        })(["display:flex;flex-direction:column;align-items:center;margin-top:48px;@media ", "{margin-top:8px;}"], g.mq.down(g.AV.sm));
        var In = function() {
            return (0,
            y.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                y.jsx)("path", {
                    d: "M5 2.75H9C9.69036 2.75 10.25 3.30964 10.25 4V9C10.25 9.69036 9.69036 10.25 9 10.25H5C4.30964 10.25 3.75 9.69036 3.75 9V4C3.75 3.30964 4.30964 2.75 5 2.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                y.jsx)("path", {
                    d: "M15 2.75H19C19.6904 2.75 20.25 3.30964 20.25 4V9C20.25 9.69036 19.6904 10.25 19 10.25H15C14.3096 10.25 13.75 9.69036 13.75 9V4C13.75 3.30964 14.3096 2.75 15 2.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                y.jsx)("path", {
                    d: "M15 13.75H19C19.6904 13.75 20.25 14.3096 20.25 15V20C20.25 20.6904 19.6904 21.25 19 21.25H15C14.3096 21.25 13.75 20.6904 13.75 20V15C13.75 14.3096 14.3096 13.75 15 13.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                y.jsx)("path", {
                    d: "M5 13.75H9C9.69036 13.75 10.25 14.3096 10.25 15V20C10.25 20.6904 9.69036 21.25 9 21.25H5C4.30964 21.25 3.75 20.6904 3.75 20V15C3.75 14.3096 4.30964 13.75 5 13.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , An = function() {
            return (0,
            y.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                y.jsx)("path", {
                    d: "M3 3.75H5C5.13807 3.75 5.25 3.86193 5.25 4V6C5.25 6.13807 5.13807 6.25 5 6.25H3C2.86193 6.25 2.75 6.13807 2.75 6V4C2.75 3.86193 2.86193 3.75 3 3.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                y.jsx)("path", {
                    d: "M3 10.75H5C5.13807 10.75 5.25 10.8619 5.25 11V13C5.25 13.1381 5.13807 13.25 5 13.25H3C2.86193 13.25 2.75 13.1381 2.75 13V11C2.75 10.8619 2.86193 10.75 3 10.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                y.jsx)("path", {
                    d: "M9 3.75H21C21.1381 3.75 21.25 3.86193 21.25 4V6C21.25 6.13807 21.1381 6.25 21 6.25H9C8.86193 6.25 8.75 6.13807 8.75 6V4C8.75 3.86193 8.86193 3.75 9 3.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                y.jsx)("path", {
                    d: "M9 10.75H21C21.1381 10.75 21.25 10.8619 21.25 11V13C21.25 13.1381 21.1381 13.25 21 13.25H9C8.86193 13.25 8.75 13.1381 8.75 13V11C8.75 10.8619 8.86193 10.75 9 10.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                y.jsx)("path", {
                    d: "M3 17.75H5C5.13807 17.75 5.25 17.8619 5.25 18V20C5.25 20.1381 5.13807 20.25 5 20.25H3C2.86193 20.25 2.75 20.1381 2.75 20V18C2.75 17.8619 2.86193 17.75 3 17.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                y.jsx)("path", {
                    d: "M9 17.75H21C21.1381 17.75 21.25 17.8619 21.25 18V20C21.25 20.1381 21.1381 20.25 21 20.25H9C8.86193 20.25 8.75 20.1381 8.75 20V18C8.75 17.8619 8.86193 17.75 9 17.75Z",
                    stroke: "#D2D6E5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , On = h.default.div.withConfig({
            displayName: "FarmGridSort__ClickableIcon",
            componentId: "sc-1gi3w9a-0"
        })(["cursor:pointer;svg{path{", "}}"], (function(e) {
            return e.active && "stroke: #6C5DD3;"
        }
        ))
          , Dn = function() {
            var e = J((function(e) {
                return e.viewMode
            }
            ))
              , t = J((function(e) {
                return e.setViewMode
            }
            ))
              , n = function(e) {
                t(e)
            }
              , r = Z.CARD === e
              , i = Z.TABLE === e;
            return (0,
            y.jsxs)(Tn, {
                children: [(0,
                y.jsx)(On, {
                    onClick: function() {
                        return n(Z.CARD)
                    },
                    active: r,
                    children: (0,
                    y.jsx)(In, {})
                }), (0,
                y.jsx)(On, {
                    active: i,
                    onClick: function() {
                        return n(Z.TABLE)
                    },
                    children: (0,
                    y.jsx)(An, {})
                })]
            })
        }
          , Tn = h.default.div.withConfig({
            displayName: "FarmGridSort__Wrapper",
            componentId: "sc-1gi3w9a-1"
        })(["display:flex;justify-content:center;align-items:center;margin-right:auto;@media ", "{margin:0px;}"], g.mq.down(g.AV.sm))
          , En = function() {
            var e = (0,
            p.$G)().t
              , t = J((function(e) {
                return e.query
            }
            ))
              , n = J((function(e) {
                return e.setQuery
            }
            ));
            return (0,
            y.jsx)(x.Uy, {
                value: t,
                setValue: n,
                placeholder: e("Search Farms")
            })
        }
          , Bn = n(11912)
          , Pn = n(87909)
          , Ln = ["active", "list", "style", "select", "disabled"];
        function Mn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function zn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Mn(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Zn = h.default.div.withConfig({
            displayName: "DropdownList__DefaultDropdown",
            componentId: "sc-124ejhr-0"
        })(["position:relative;width:220px;height:48px;background:white;border:1px solid #d2d6e5;box-sizing:border-box;border-radius:6px;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#0b1359;user-select:none;opacity:", ";cursor:", ";svg{transform:", ";}"], (function(e) {
            return e.disabled ? "0.7" : "1"
        }
        ), (function(e) {
            return e.disabled ? "no-drop" : "auto"
        }
        ), (function(e) {
            return e.toggled ? "rotate(180deg)" : "rotate(0deg)"
        }
        ))
          , qn = h.default.div.withConfig({
            displayName: "DropdownList__HeadDropdown",
            componentId: "sc-124ejhr-1"
        })(["width:100%;display:flex;justify-content:space-between;align-items:center;cursor:", ";padding:14px 16px 14px 16px;&:hover{opacity:0.7;}"], (function(e) {
            return e.disabled ? "no-drop" : "auto"
        }
        ))
          , Wn = h.default.div.withConfig({
            displayName: "DropdownList__StyledDropdownList",
            componentId: "sc-124ejhr-2"
        })(["position:absolute;z-index:999999;width:", ";left:0;background:white;box-shadow:0 6px 12px rgb(185 189 208 / 40%);border-radius:6px;opacity:", ";height:", ";box-sizing:border-box;"], (function(e) {
            return e.toggled ? "100%" : "0px !important"
        }
        ), (function(e) {
            return e.toggled ? "1" : "0 !important"
        }
        ), (function(e) {
            return e.toggled ? "auto" : "0px !important"
        }
        ))
          , Rn = h.default.div.withConfig({
            displayName: "DropdownList__Item",
            componentId: "sc-124ejhr-3"
        })(["cursor:", ";display:inline-block;font-style:normal;font-weight:normal;font-size:14px;line-height:22px;display:flex;align-items:center;background:", ";color:", ";padding:14px 18px 12px 18px;width:100%;"], (function(e) {
            return e.disabled ? "no-drop" : "pointer"
        }
        ), (function(e) {
            return e.active ? "#F5F7FF" : "transparent"
        }
        ), (function(e) {
            return e.active ? "#0B1359" : "#8990A5"
        }
        ))
          , Vn = h.default.div.withConfig({
            displayName: "FarmSortBy__Wrapper",
            componentId: "sc-19nw4vj-0"
        })(["display:flex;align-items:center;justify-content:flex-end;margin-right:24px;h2{font-style:normal;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#8990a5;margin-right:16px;}@media ", "{margin-right:64px;h2{display:none;}}@media ", "{margin-left:16px;}@media ", "{margin:0px;}"], g.mq.down(g.AV.lg), g.mq.down(g.AV.md), g.mq.down(g.AV.sm))
          , Hn = (0,
        h.default)((function(e) {
            var t = e.active
              , n = e.list
              , i = e.style
              , a = e.select
              , o = e.disabled
              , s = (0,
            r.Z)(e, Ln)
              , c = l.useRef(null)
              , d = (0,
            l.useState)(!1)
              , p = d[0]
              , u = d[1];
            return (0,
            Bn.Z)(c, (function() {
                p && !o && u(!1)
            }
            )),
            (0,
            y.jsxs)(Zn, zn(zn({}, s), {}, {
                style: i,
                toggled: p,
                ref: c,
                disabled: o,
                children: [(0,
                y.jsxs)(qn, {
                    onClick: function() {
                        !o && u(!p)
                    },
                    disabled: o,
                    children: [t || "-", (0,
                    y.jsx)(Pn.v4, {})]
                }), (0,
                y.jsx)(Wn, {
                    toggled: p,
                    children: p && (null === n || void 0 === n ? void 0 : n.length) && n.map((function(e, n) {
                        return (0,
                        y.jsx)(Rn, {
                            disabled: o,
                            onClick: function() {
                                return a ? a(e) : null
                            },
                            active: e === t,
                            children: e
                        }, n.toString())
                    }
                    ))
                })]
            }))
        }
        )).withConfig({
            displayName: "FarmSortBy__StyledDropdown",
            componentId: "sc-19nw4vj-1"
        })(["width:220px;@media ", "{width:192px;}@media ", "{width:170px;}"], g.mq.down(g.AV.lg), g.mq.down(g.AV.md))
          , Gn = function() {
            var e = (0,
            p.$G)().t
              , t = J((function(t) {
                return e(t.sortOption)
            }
            ))
              , n = J((function(e) {
                return e.setSortOption
            }
            ))
              , r = Object.values(W).map((function(t) {
                return e(t)
            }
            ));
            return (0,
            y.jsxs)(Vn, {
                children: [(0,
                y.jsx)("h2", {
                    children: e("Sort by")
                }), (0,
                y.jsx)(Hn, {
                    list: r,
                    active: t,
                    select: function(e) {
                        return n(e)
                    }
                })]
            })
        }
          , Un = function e() {
            var t = (0,
            p.$G)().t
              , n = J((function(e) {
                return e.stakedOnly
            }
            ))
              , r = J((function(e) {
                return e.setStakedOnly
            }
            ));
            return (0,
            y.jsxs)(e.Wrapper, {
                children: [(0,
                y.jsx)(e.Switch, {
                    align: n ? "end" : "start",
                    active: n,
                    onClick: function() {
                        return r(!n)
                    },
                    children: (0,
                    y.jsx)("span", {})
                }), (0,
                y.jsx)("h3", {
                    children: t("Staked only")
                })]
            })
        };
        Un.Wrapper = h.default.div.withConfig({
            displayName: "FarmStakedSwitcher__Wrapper",
            componentId: "sc-kfv8t3-0"
        })(["display:flex;align-items:center;justify-content:center;margin-right:24px;@media ", "{margin-right:16px;}@media ", "{margin-right:0;}h3{font-style:normal;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#8990a5;}"], g.mq.down(g.AV.lg), g.mq.down(g.AV.sm)),
        Un.Switch = h.default.div.withConfig({
            displayName: "FarmStakedSwitcher__Switch",
            componentId: "sc-kfv8t3-1"
        })(["background:", ";border:1px solid ", ";box-sizing:border-box;border-radius:50px;width:46px;height:24px;padding:3px;cursor:pointer;display:flex;justify-content:flex-", ";margin-right:16px;@media ", "{margin-right:8px;}span{height:16px;width:16px;background:#ffffff;box-shadow:0px 6px 12px rgba(185,189,208,0.4);border-radius:50%;display:block;}"], (function(e) {
            return e.active ? "#B9E4D2" : "#f4f5fa"
        }
        ), (function(e) {
            return e.active ? "#24BA7B" : "#D2D6E5"
        }
        ), (function(e) {
            return e.align
        }
        ), g.mq.down(g.AV.lg));
        var $n = function() {
            var e = (0,
            p.$G)().t
              , t = J((function(e) {
                return e.setActiveTab
            }
            ))
              , n = J((function(e) {
                return e.activeTab
            }
            ))
              , r = function(e) {
                t(e)
            };
            return (0,
            y.jsxs)(Xn, {
                children: [(0,
                y.jsx)(Kn, {
                    onClick: function() {
                        r(q.live)
                    },
                    active: q.live === n,
                    children: e("Live")
                }), (0,
                y.jsx)(Kn, {
                    onClick: function() {
                        r(q.finished)
                    },
                    active: q.finished === n,
                    children: e("Finished")
                })]
            })
        }
          , Xn = h.default.div.withConfig({
            displayName: "FarmTabs__Tabs",
            componentId: "sc-s9cnc9-0"
        })(["display:flex;width:fit-content;height:fit-content;border-radius:6px;background:#ebedf9;margin-right:24px;@media ", "{margin-right:16px;}@media ", "{justify-content:flex-start;width:100%;}"], g.mq.down(g.AV.lg), g.mq.down(g.AV.sm))
          , Kn = h.default.div.withConfig({
            displayName: "FarmTabs__Tab",
            componentId: "sc-s9cnc9-1"
        })(["background:", ";border-radius:6px;padding:14px 24px 14px 24px;width:fit-content;font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:", ";cursor:pointer;transition:0.2s all ease;@media ", "{width:50%;height:40px;padding:10px 16px 10px 16px;text-align:center;}"], (function(e) {
            return e.active ? "#6C5DD3" : "#EBEDF9"
        }
        ), (function(e) {
            return e.active ? "#FFFFFF" : "#6C5DD3"
        }
        ), g.mq.down(g.AV.sm))
          , Yn = h.default.div.withConfig({
            displayName: "FarmFilters__Container",
            componentId: "sc-te0e1m-0"
        })(["position:relative;bottom:40px;margin-left:16px;margin-right:16px;padding:16px;background:#ffffff;box-shadow:0px 6px 8px rgba(220,224,244,0.56);border-radius:6px;@media ", "{margin-left:8px;margin-right:8px;}"], g.mq.down(g.AV.sm))
          , Jn = h.default.div.withConfig({
            displayName: "FarmFilters__Wrapper",
            componentId: "sc-te0e1m-1"
        })(["width:100%;display:flex;align-items:center;@media ", "{flex-direction:column;}"], g.mq.down(g.AV.sm))
          , Qn = h.default.div.withConfig({
            displayName: "FarmFilters__LeftPart",
            componentId: "sc-te0e1m-2"
        })(["display:flex;align-items:center;align-self:flex-start;@media ", "{flex-direction:column;align-items:flex-start;margin-bottom:16px;width:100%;", "{margin-top:16px;}}"], g.mq.down(g.AV.sm), Un.Wrapper)
          , er = h.default.div.withConfig({
            displayName: "FarmFilters__RightPart",
            componentId: "sc-te0e1m-3"
        })(["display:flex;flex:1;align-items:center;align-self:flex-end;@media ", "{justify-content:space-between;width:100%;}"], g.mq.down(g.AV.sm))
          , tr = function() {
            return (0,
            y.jsx)(Yn, {
                children: (0,
                y.jsxs)(Jn, {
                    children: [(0,
                    y.jsxs)(Qn, {
                        children: [(0,
                        y.jsx)($n, {}), (0,
                        y.jsx)(Un, {})]
                    }), (0,
                    y.jsxs)(er, {
                        children: [(0,
                        y.jsx)(Dn, {}), (0,
                        y.jsx)(Gn, {}), (0,
                        y.jsx)(En, {})]
                    })]
                })
            })
        }
          , nr = n(45049)
          , rr = h.default.div.withConfig({
            displayName: "FarmLoader__LoadWrapper",
            componentId: "sc-8rafos-0"
        })(["display:flex;justify-content:center;svg{height:35px;width:35px;}"])
          , ir = function(e) {
            var t = e.loading
              , n = e.children;
            return (0,
            y.jsxs)(y.Fragment, {
                children: [t && (0,
                y.jsx)(rr, {
                    children: (0,
                    y.jsx)(nr.a, {})
                }), (0,
                y.jsx)(Ye._, {
                    hide: t,
                    children: (0,
                    y.jsx)(y.Fragment, {
                        children: n
                    })
                })]
            })
        }
          , ar = n(85754)
          , or = n(11783)
          , sr = function(e, t, n, r, i) {
            var a = (0,
            or.ZG)(e, t, n, r)
              , o = a.tokenContract
              , s = a.approve
              , c = a.callData
              , d = function() {
                var e = (0,
                O.Z)(T().mark((function e() {
                    var t, a;
                    return T().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                o.allowance(i, r);
                            case 3:
                                return t = e.sent,
                                a = n.gt(t),
                                e.abrupt("return", a);
                            case 8:
                                return e.prev = 8,
                                e.t0 = e.catch(0),
                                console.error(e.t0),
                                e.abrupt("return", !1);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , l = function() {
                var e = (0,
                O.Z)(T().mark((function e() {
                    var t, n;
                    return T().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                d();
                            case 2:
                                if (e.sent) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return", !0);
                            case 5:
                                return e.prev = 5,
                                e.next = 8,
                                s();
                            case 8:
                                return t = e.sent,
                                e.next = 11,
                                t.wait();
                            case 11:
                                return n = e.sent,
                                e.abrupt("return", n);
                            case 15:
                                throw e.prev = 15,
                                e.t0 = e.catch(5),
                                new Error("transaction failed or denied");
                            case 18:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[5, 15]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return {
                allowance: d,
                approve: l,
                callData: c
            }
        }
          , cr = function() {
            var e = (0,
            Me.E4)()
              , t = lr().hasTicket
              , n = dr(null === e || void 0 === e ? void 0 : e.address);
            return {
                hasTicket: t,
                buyTicket: function() {
                    var t = (0,
                    O.Z)(T().mark((function t() {
                        return T().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    e.buyTicket();
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                approve: n
            }
        }
          , dr = function(e) {
            var t = (0,
            oe.x)().chainId === E.a_.BSCTESTNET ? P.Nb : P.E0
              , n = (0,
            ar.a)()
              , r = n.account
              , i = n.library
              , a = ye.parseEther("1500");
            return sr(i, null === t || void 0 === t ? void 0 : t.address, a, e, r).approve
        }
          , lr = function() {
            var e = J((function(e) {
                return e.ticketLoader
            }
            ))
              , t = J((function(e) {
                return e.hasTicket
            }
            ))
              , n = J((function(e) {
                return e.checkHasTicket
            }
            ))
              , r = (0,
            ar.a)().account
              , i = (0,
            Me.E4)()
              , a = (0,
            l.useMemo)((function() {
                return i && r || !r
            }
            ), [r, i])
              , o = function() {
                var e = (0,
                O.Z)(T().mark((function e() {
                    return T().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                n(i, r);
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            l.useEffect)((function() {
                a && o()
            }
            ), [a]),
            {
                hasTicket: t,
                onCheckHasTicket: o,
                loading: e
            }
        }
          , pr = (n(83501),
        n(64813),
        n(76803),
        h.default.div.withConfig({
            displayName: "BuyTicketApproveStep__WrapperApprove",
            componentId: "sc-1i7kwh4-0"
        })(["display:flex;justify-content:center;align-items:center;flex-direction:column;padding:24px;p{font-style:normal;font-weight:500;font-size:16px;line-height:22px;text-align:center;letter-spacing:0.3px;color:#8990a5;margin-bottom:16px;}h3{font-style:normal;font-weight:500;font-size:24px;line-height:30px;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-bottom:32px;}"]),
        n(12873),
        h.default.div.withConfig({
            displayName: "BuyTicketBuyStep__CompletedWrapper",
            componentId: "sc-1br7sfc-0"
        })(["display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:24px;p{margin:0;margin-bottom:24px;}h2{font-style:normal;font-weight:500;font-size:24px;line-height:30px;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-bottom:8px;}"]),
        h.default.p.withConfig({
            displayName: "BuyTicketBuyStep__Amount",
            componentId: "sc-1br7sfc-1"
        })(["font-style:normal;font-weight:500;font-size:16px;line-height:22px;text-align:center;letter-spacing:0.3px;color:#0b1359;b{color:#1ea86d;}margin-bottom:24px;"]),
        (0,
        h.default)(x.zx).withConfig({
            displayName: "BuyTicketBuyStep__ViewOn",
            componentId: "sc-1br7sfc-2"
        })([""]),
        h.default.div.withConfig({
            displayName: "BuyTicketModal__Wrapper",
            componentId: "sc-1gw9ksn-0"
        })(["width:354px;margin-bottom:63px;"]),
        h.default.div.withConfig({
            displayName: "BuyTicketModal__Header",
            componentId: "sc-1gw9ksn-1"
        })(["padding:16px;display:flex;justify-content:end;align-items:center;width:100%;position:relative;"]),
        h.default.p.withConfig({
            displayName: "BuyTicketModal__TicketLoadingText",
            componentId: "sc-1gw9ksn-2"
        })(["font-style:normal;font-weight:500;font-size:16px;line-height:22px;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-top:24px;"]),
        (0,
        h.default)(x.zx).withConfig({
            displayName: "BuyTicketBtn__BuyButton",
            componentId: "sc-efdvol-0"
        })(["background:#1ea76d;&:hover{background:#3c9c73 !important;}"]),
        {
            XL: g.mq.down(g.AV.xl - 150),
            MID_LG: g.mq.down(g.AV.lg - 20),
            PRE_LG: g.mq.down(g.AV.lg - 100),
            MD: g.mq.down(g.AV.md),
            SM: g.mq.down(g.AV.sm - 80)
        })
          , ur = h.default.div.withConfig({
            displayName: "TicketBanner__FlexCenter",
            componentId: "sc-12zgznt-0"
        })(["display:flex;justify-content:center;align-items:center;"])
          , fr = (h.default.div.withConfig({
            displayName: "TicketBanner__FlexEnd",
            componentId: "sc-12zgznt-1"
        })(["display:flex;justify-content:end;align-items:center;@media ", "{justify-content:flex-start;flex-direction:column;align-items:baseline;}"], pr.SM),
        h.default.div.withConfig({
            displayName: "TicketBanner__Wrapper",
            componentId: "sc-12zgznt-2"
        })(["position:relative;background:#6c5dd3;border-radius:6px;max-height:96px;margin-bottom:36px;display:grid;grid-template-columns:48px 440px 4fr auto;grid-gap:16px;align-items:center;padding-right:24px;@media ", "{grid-template-columns:48px 326px 4fr auto;}@media ", "{grid-template-columns:48px 277px 4fr auto;}@media ", "{grid-template-columns:repeat(auto-fit);}@media ", "{max-height:none;height:auto;grid-template-columns:1fr;padding:16px 16px 16px 56px;grid-gap:8px;}overflow:hidden;"], pr.XL, pr.PRE_LG, pr.MD, pr.SM),
        (0,
        h.default)(ur).withConfig({
            displayName: "TicketBanner__Warning",
            componentId: "sc-12zgznt-3"
        })(["background:#5849bd;border-radius:6px 0px 0px 6px;width:48px;height:96px;padding:0 10px;svg{fill:none;}@media ", "{width:40px;}@media ", "{position:absolute;left:0;height:100%;}"], pr.XL, pr.SM),
        h.default.div.withConfig({
            displayName: "TicketBanner__Info",
            componentId: "sc-12zgznt-4"
        })(["font-style:normal;font-weight:500;font-size:24px;line-height:30px;letter-spacing:0.3px;color:#ffffff;max-width:440px;@media ", "{max-width:326px;font-size:18px;line-height:24px;}@media ", "{font-size:14px;line-height:20px;max-width:261px;}@media ", "{max-width:none;width:100%;}"], pr.XL, pr.MD, pr.SM),
        h.default.img.withConfig({
            displayName: "TicketBanner__Illustration",
            componentId: "sc-12zgznt-5"
        })(["max-width:400px;width:100%;height:96px;@media ", "{max-width:234px;object-fit:contain;max-height:96px;}@media ", "{transform:translateX(0%) translateY(15%);}@media ", "{display:none;}"], pr.XL, pr.MID_LG, pr.PRE_LG),
        h.default.div.withConfig({
            displayName: "TicketBanner__TicketInfo",
            componentId: "sc-12zgznt-6"
        })(["display:flex;align-items:center;p{font-style:normal;font-weight:bold;font-size:12px;line-height:16px;letter-spacing:0.3px;text-transform:uppercase;color:#cbc8ee;max-width:69px;@media ", "{max-width:none;}}h2{font-style:normal;font-weight:bold;font-size:40px;line-height:48px;letter-spacing:0.3px;margin-left:16px;color:#ffffff;@media ", "{font-size:24px;line-height:30px;}}margin-right:40px;@media ", "{margin-right:24px;}@media ", "{margin-bottom:8px;}"], pr.SM, pr.MD, pr.XL, pr.SM),
        (0,
        h.default)(qe.Z).withConfig({
            displayName: "TicketBanner__StyledConnectWallet",
            componentId: "sc-12zgznt-7"
        })(["max-width:340px;width:100% !important;background:#1ea76d;&:hover{background:#3c9c73 !important;}"]),
        function() {
            (0,
            p.$G)().t,
            (0,
            ar.a)().account,
            (0,
            kn.Z)(pr.XL),
            (0,
            kn.Z)(pr.SM);
            return cr().hasTicket ? (0,
            y.jsx)(y.Fragment, {}) : (0,
            y.jsx)("div", {})
        }
        )
          , mr = h.default.div.withConfig({
            displayName: "FarmContainer__AppWrapper",
            componentId: "sc-lmezm9-0"
        })(["display:flex;flex-flow:column;align-items:flex-start;overflow-x:hidden;max-width:1664px;margin:0 auto;"])
          , xr = h.default.div.withConfig({
            displayName: "FarmContainer__BodyWrapper",
            componentId: "sc-lmezm9-1"
        })(["width:100%;overflow:hidden;z-index:1;min-height:100vh;padding:32px 33px 210px 29px;@media ", "{padding:24px 24px 210px 24px;}@media ", "{padding:16px 10px 210px 10px;}"], g.mq.down(g.AV.lg), g.mq.down(g.AV.sm))
          , hr = function(e) {
            var t = e.children
              , n = e.className;
            return (0,
            y.jsx)(mr, {
                children: (0,
                y.jsx)(xr, {
                    className: n,
                    children: t
                })
            })
        };
        var gr = n(52503)
          , wr = ["items"];
        function yr(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function vr(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? yr(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yr(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var br = !0
          , jr = function() {
            var e = (0,
            p.$G)().t
              , t = (0,
            d.useRouter)().pathname
              , n = De()
              , i = Ee()
              , o = J((function(e) {
                return e.query
            }
            ))
              , u = J((function(e) {
                return e.viewMode
            }
            ))
              , m = J((function(e) {
                return e.sortOption
            }
            ))
              , x = J((function(e) {
                return e.stakedOnly
            }
            ))
              , h = J((function(e) {
                return e.activeTab
            }
            ))
              , g = function() {
                var e = (0,
                Me.y8)()
                  , t = J((function(e) {
                    return e.fetchBlockReward
                }
                ));
                return (0,
                l.useEffect)((function() {
                    t(e)
                }
                ), [t, e]),
                J((function(e) {
                    return e.blockReward
                }
                ))
            }();
            !function(e) {
                var t = Y.getState().setFarmsUserData
                  , n = Y.getState().toggleSlowUpdate
                  , r = Y.getState().clearFarms;
                (0,
                l.useEffect)((function() {
                    r()
                }
                ), [e]),
                (0,
                gr.ZP)(e ? ["farms/pooling", e] : null, (0,
                O.Z)(T().mark((function r() {
                    var i;
                    return T().wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                return n(!0),
                                r.next = 3,
                                ge(e);
                            case 3:
                                i = r.sent,
                                t(i),
                                n(!1);
                            case 6:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r)
                }
                ))), {
                    refreshInterval: 6e3
                })
            }((0,
            a.useWeb3React)().account);
            var w = (0,
            l.useRef)(0)
              , v = t.includes("archived")
              , b = h === q.finished
              , k = !b && !v
              , C = function() {
                var e = (0,
                a.useWeb3React)().account
                  , t = J((function(e) {
                    return e.setFarmsUserData
                }
                ))
                  , n = J((function(e) {
                    return e.farmsLoading
                }
                ))
                  , r = J((function(e) {
                    return e.farmsUserDataLoading
                }
                ))
                  , i = J((function(e) {
                    return e.toggleUserDataFarmsFetched
                }
                ))
                  , o = Ae()
                  , s = (0,
                l.useMemo)((function() {
                    return !e || n
                }
                ), [e, n]);
                return (0,
                l.useEffect)((function() {
                    (0,
                    O.Z)(T().mark((function n() {
                        var a, o, c;
                        return T().wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if (!s && !r) {
                                        n.next = 2;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 2:
                                    return i(!0),
                                    a = V(),
                                    o = a.map((function(e) {
                                        return e.pid
                                    }
                                    )),
                                    n.prev = 5,
                                    n.next = 8,
                                    ge(e, o);
                                case 8:
                                    c = n.sent,
                                    t(c),
                                    n.next = 15;
                                    break;
                                case 12:
                                    n.prev = 12,
                                    n.t0 = n.catch(5),
                                    console.error(n.t0);
                                case 15:
                                    return n.prev = 15,
                                    i(!1),
                                    n.finish(15);
                                case 18:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n, null, [[5, 12, 15, 18]])
                    }
                    )))()
                }
                ), [s, e]),
                {
                    farmsList: o,
                    farmsUserDataLoading: r
                }
            }().farmsUserDataLoading
              , _ = J((function(e) {
                return e.ticketLoader
            }
            ))
              , N = J((function(e) {
                return e.slowUpdate
            }
            ))
              , F = (0,
            l.useMemo)((function() {
                var e = []
                  , t = [];
                return n.forEach((function(n) {
                    n.multiplier && n.allocPoint && g && ("0X" === n.multiplier || n.allocPoint.eq(0) || g.eq(0) ? t.push(n) : e.push(n))
                }
                )),
                {
                    activeFarms: e,
                    inactiveFarms: t
                }
            }
            ), [g, n, N, C])
              , S = F.activeFarms
              , I = F.inactiveFarms
              , D = S.filter((function(e) {
                return e.userData && new (s())(e.userData.stakedBalance).isGreaterThan(0)
            }
            ))
              , E = I.filter((function(e) {
                return e.userData && new (s())(e.userData.stakedBalance).isGreaterThan(0)
            }
            ))
              , B = (0,
            l.useCallback)((function(e) {
                var t = e.map((function(e) {
                    return e.farmLpBalance ? vr(vr({}, e), {}, {
                        apr: null === e || void 0 === e ? void 0 : e.apy
                    }) : e
                }
                ));
                if (o) {
                    var n = f(o.toLowerCase());
                    t = t.filter((function(e) {
                        return f(e.lpSymbol.toLowerCase()).includes(n)
                    }
                    ))
                }
                return t
            }
            ), [i, o, k])
              , P = (0,
            l.useState)(12)[0]
              , L = (0,
            l.useMemo)((function() {
                var e = [];
                return k && (e = B(x ? D : S)),
                b && (e = B(x ? E : I)),
                function(e) {
                    switch (m) {
                    case "Hot":
                        return (0,
                        c.orderBy)(e, (function(e) {
                            return e.apr
                        }
                        ), "desc");
                    case "Multiplier":
                        return (0,
                        c.orderBy)(e, (function(e) {
                            return e.multiplier ? Number(e.multiplier.slice(0, -1)) : 0
                        }
                        ), "desc");
                    case "Earned":
                        return (0,
                        c.orderBy)(e, (function(e) {
                            return e.userData ? Number(e.userData.earnings) : 0
                        }
                        ), "desc");
                    case "Liquidity":
                        return (0,
                        c.orderBy)(e, (function(e) {
                            return Number(e.liqudity)
                        }
                        ), "desc");
                    default:
                        return e
                    }
                }(e).slice(0, P)
            }
            ), [m, S, B, I, k, b, E, x, D, P, C, N]);
            w.current = L.length;
            var M = (0,
            A.u)({
                items: L,
                pageLimit: 10
            })
              , z = M.items
              , Z = (0,
            r.Z)(M, wr);
            return (0,
            y.jsx)(Q.Z, {
                title: e("Farms"),
                children: (0,
                y.jsxs)(hr, {
                    children: [(0,
                    y.jsxs)("div", {
                        children: [(0,
                        y.jsx)(ne, {}), (0,
                        y.jsx)(tr, {})]
                    }), (0,
                    y.jsx)(Sn.Container, {
                        children: (0,
                        y.jsxs)(ir, {
                            loading: _,
                            children: [(0,
                            y.jsx)(fr, {}), (0,
                            y.jsx)(Sn, {
                                viewMode: u,
                                farms: z,
                                almPrice: i
                            }), (0,
                            y.jsx)(j, vr({}, Z))]
                        })
                    })]
                })
            })
        }
    },
    12873: function(e, t, n) {
        "use strict";
        n.d(t, {
            U: function() {
                return j
            },
            Z: function() {
                return k
            }
        });
        var r = n(10219)
          , i = n(92809)
          , a = n(87298)
          , o = n(41810)
          , s = n(67294)
          , c = n(62639)
          , d = n(93350)
          , l = n(85893)
          , p = function e(t) {
            var n = t.token
              , r = (0,
            o.$G)().t
              , i = (0,
            a.z)(n)
              , s = i.added
              , d = i.onAdd;
            return null !== n && void 0 !== n && n.address ? (0,
            l.jsxs)(e.Btn, {
                onClick: d,
                variant: "secondary",
                active: s,
                children: [s ? (0,
                l.jsx)(c.md, {}) : (0,
                l.jsx)(c.Ex, {}), (0,
                l.jsx)("p", {
                    className: "text",
                    children: r(s ? "Added" : "Add token to wallet")
                })]
            }) : (0,
            l.jsx)(l.Fragment, {})
        };
        p.Btn = (0,
        d.default)(c.zx).withConfig({
            displayName: "AddTokenWallet__Btn",
            componentId: "sc-s9z1sz-0"
        })(["margin-top:24px;svg{margin-right:20px;}", ""], (function(e) {
            return e.active && "\n    border: 1px solid #1EA76D !important;\n    color: #1EA76D !important; \n\t \n\t  &:hover,\n\t  &:active {\n\t   background: transparent !important;\n\t   color: #1EA76D !important; \n\t \n\t   p {\n\t    color: #1EA76D !important; \n\t   }\n\t  }\n  "
        }
        ));
        var u = p
          , f = n(47646)
          , m = n(44434)
          , x = n(80628)
          , h = n(93578)
          , g = n(83501)
          , w = ["cancel", "hiddenTokenSymbol", "amount", "token", "txHash"];
        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var b = function(e) {
            var t = e.cancel
              , n = e.children
              , r = e.withoutHeader
              , i = e.withoutWrapper
              , a = i ? s.Fragment : g.tG
              , o = i ? {} : {
                id: "transaction_wrapper"
            };
            return (0,
            l.jsxs)(a, v(v({}, o), {}, {
                children: [!r && (0,
                l.jsx)(C, {
                    children: (0,
                    l.jsx)(g.p9, {
                        onClick: t
                    })
                }), (0,
                l.jsx)(N, {
                    children: (0,
                    l.jsx)(m.Y, {})
                }), n && n]
            }))
        }
          , j = function(e) {
            var t = e.cancel
              , n = e.hiddenTokenSymbol
              , i = e.amount
              , a = e.token
              , s = e.txHash
              , c = (0,
            r.Z)(e, w)
              , d = (0,
            f.x)().chainId
              , p = (0,
            h.E8)(d, s, "transaction")
              , m = (0,
            h.lc)(d).explorerName
              , g = (0,
            o.$G)().t;
            return (0,
            l.jsx)(b, v(v({
                cancel: t
            }, c), {}, {
                children: (0,
                l.jsxs)(F, {
                    children: [(0,
                    l.jsx)("h2", {
                        className: "title",
                        children: g("Transaction completed")
                    }), (0,
                    l.jsxs)("p", {
                        children: [g("Amount"), " ", (0,
                        l.jsxs)("b", {
                            children: [i, " ", !n && (null === a || void 0 === a ? void 0 : a.symbol)]
                        })]
                    }), s && (0,
                    l.jsx)(_, {
                        children: (0,
                        l.jsxs)("a", {
                            href: p,
                            target: "_blank",
                            children: [g("Transaction completed", {
                                explorerName: m
                            }), (0,
                            l.jsx)(x.Z, {})]
                        })
                    }), (0,
                    l.jsx)(u, {
                        token: a
                    })]
                })
            }))
        }
          , k = b
          , C = (0,
        d.default)(g.Fc).withConfig({
            displayName: "TransactionCompleted__Header",
            componentId: "sc-1muywtk-0"
        })(["min-height:64px;"])
          , _ = d.default.div.withConfig({
            displayName: "TransactionCompleted__ViewOnWrapper",
            componentId: "sc-1muywtk-1"
        })(["cursor:pointer;margin-top:8px;font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;display:flex;justify-content:center;align-items:center;a{display:flex;align-items:center;justify-content:center;}svg{stroke:#6c5dd3;width:18px;height:16px;}"])
          , N = d.default.div.withConfig({
            displayName: "TransactionCompleted__ContentWrapper",
            componentId: "sc-1muywtk-2"
        })(["display:flex;flex-direction:column;justify-content:center;align-items:center;"])
          , F = (0,
        d.default)(N).withConfig({
            displayName: "TransactionCompleted__Content",
            componentId: "sc-1muywtk-3"
        })(["width:100%;font-style:normal;font-weight:500;font-size:16px;line-height:22px;text-align:center;letter-spacing:0.3px;color:#0b1359;.title{margin-top:24px;}.amount{margin-top:4px;}b{color:#1ea86d;}"])
    },
    18284: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return o
            }
        });
        n(67294);
        var r = n(93350)
          , i = n(85893)
          , a = r.default.div.withConfig({
            displayName: "ShadowComponent__Shadow",
            componentId: "sc-vuqiok-0"
        })(["", ""], (function(e) {
            return e.hide && "display: none;"
        }
        ))
          , o = function(e) {
            var t = e.hide
              , n = e.children
              , r = e.style;
            return (0,
            i.jsx)(a, {
                hide: t,
                className: "shadow__component",
                style: r || {},
                children: n
            })
        }
    },
    14190: function(e, t, n) {
        "use strict";
        n.d(t, {
            u: function() {
                return a
            }
        });
        var r = n(96486)
          , i = n(67294);
        function a(e) {
            var t = e.items
              , n = e.pageLimit
              , a = void 0 === n ? 30 : n
              , o = e.maxPages
              , s = (0,
            i.useMemo)((function() {
                return t
            }
            ), [t])
              , c = (0,
            i.useCallback)((function(e) {
                var t = (e - 1) * a;
                return null !== s && void 0 !== s && s.length ? s.slice(t, t + a) : []
            }
            ), [s, a])
              , d = (0,
            i.useState)(1)
              , l = d[0]
              , p = d[1]
              , u = (0,
            i.useState)(c(1))
              , f = u[0]
              , m = u[1];
            (0,
            i.useEffect)((function() {
                var e = c(l);
                f && e && !(0,
                r.isEqual)(f, e) && m(e)
            }
            ), [s, f, l, c]);
            var x = (null === s || void 0 === s ? void 0 : s.length) || 0;
            return {
                totalPages: o || Math.ceil(x / a),
                currentPage: l,
                onPageChanged: function(e) {
                    p(e),
                    m(c(e))
                },
                items: f
            }
        }
    },
    92691: function(e, t, n) {
        "use strict";
        var r = n(41810)
          , i = (n(67294),
        n(92528))
          , a = n(80628)
          , o = n(93350)
          , s = n(85893)
          , c = function e(t) {
            var n = t.currentPage
              , o = t.totalPages
              , c = t.onPageChanged
              , p = (0,
            r.$G)().t
              , u = 1 !== n
              , f = n !== o
              , m = n - 1
              , x = n + 1;
            return o <= 1 ? (0,
            s.jsx)(s.Fragment, {}) : (0,
            s.jsxs)(e.Root, {
                className: "pagination",
                children: [(0,
                s.jsx)(d, {
                    onClick: function() {
                        return u && c(m)
                    },
                    children: (0,
                    s.jsx)(i.Z, {})
                }), (0,
                s.jsx)("li", {
                    children: (0,
                    s.jsx)(l, {
                        children: p("Page {{currentPage}} of {{totalPages}}", {
                            currentPage: n,
                            totalPages: o
                        })
                    })
                }), (0,
                s.jsx)(d, {
                    onClick: function() {
                        return f && c(x)
                    },
                    children: (0,
                    s.jsx)(a.Z, {})
                })]
            })
        };
        t.Z = c,
        c.Root = o.default.ul.withConfig({
            displayName: "Pagination__Root",
            componentId: "sc-o8u034-0"
        })(["padding-top:24px;display:flex;width:100%;justify-content:center;align-items:center;li{list-style-type:none;}"]);
        var d = o.default.li.withConfig({
            displayName: "Pagination__Control",
            componentId: "sc-o8u034-1"
        })(["border:1px solid #e9e9eb;box-sizing:border-box;border-radius:6px;width:40px;height:40px;display:flex;justify-content:center;align-items:center;cursor:pointer;svg{stroke:#8990a5;}&:hover{opacity:0.7;}"])
          , l = o.default.div.withConfig({
            displayName: "Pagination__Content",
            componentId: "sc-o8u034-2"
        })(["margin-left:16px;margin-right:16px;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#8990a5;"])
    },
    95218: function(e, t, n) {
        "use strict";
        var r = n(82212)
          , i = n(47235)
          , a = n(47646)
          , o = n(10247)
          , s = (n(67294),
        n(24451))
          , c = n(93350)
          , d = n(85893)
          , l = function e(t) {
            var n = t.children
              , c = t.title
              , l = t.withBtn
              , p = void 0 === l || l
              , u = t.text
              , f = t.multipleChains
              , m = t.content
              , x = (0,
            s.$G)().t
              , h = (0,
            i.he)()
              , g = (0,
            a.x)()
              , w = g.updateChainId
              , y = g.chainId
              , v = f || [r.a_.MAINNET, r.a_.BSCTESTNET]
              , b = y && v.includes(y)
              , j = function(e, t) {
                var n = (0,
                s.$G)().t;
                if (e && t) {
                    var r, i = null === t || void 0 === t || null === (r = t.reduce((function(t, n) {
                        return e.includes(n.chainId) && (t += "".concat(null === n || void 0 === n ? void 0 : n.title, ",")),
                        t
                    }
                    ), "")) || void 0 === r ? void 0 : r.slice(0, -1);
                    return "".concat(n("This section is available on"), " ").concat(i, ".\n        \n ").concat(n("Please switch the network"))
                }
                return null
            }(f, h);
            return b ? (0,
            d.jsxs)(d.Fragment, {
                children: [" ", n || "", " "]
            }) : (0,
            d.jsx)(e.Wrapper, {
                children: (0,
                d.jsxs)(e.Message, {
                    children: [(0,
                    d.jsx)("h2", {
                        children: c
                    }), (0,
                    d.jsx)("p", {
                        children: j || u || x("This section is only available on Binance Smart Chain. Please switch the network")
                    }), p && (0,
                    d.jsxs)(e.Button, {
                        onClick: function() {
                            w(h[0].chainId)
                        },
                        children: [(0,
                        d.jsx)(o.Z, {}), (0,
                        d.jsx)("p", {
                            className: "text",
                            children: x("Connect Binance Smart Chain")
                        })]
                    }), m || ""]
                })
            })
        };
        l.Wrapper = c.default.div.withConfig({
            displayName: "AvailableChain__Wrapper",
            componentId: "sc-1jzq9hs-0"
        })(["width:100%;display:flex;justify-content:center;margin-top:153px;margin-bottom:153px;"]),
        l.Message = c.default.div.withConfig({
            displayName: "AvailableChain__Message",
            componentId: "sc-1jzq9hs-1"
        })(["width:738px;min-height:272px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#ffffff;border-radius:6px;h2{font-style:normal;font-weight:bold;font-size:32px;line-height:40px;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-bottom:8px;}p{font-weight:500;font-size:18px;line-height:24px;text-align:center;letter-spacing:0.3px;color:#8990a5;margin-bottom:32px;max-width:500px;}@media screen and (max-width:768px){padding:10px 24px;}@media screen and (max-width:480px){width:100%;p{font-size:14px;}}"]),
        l.Button = c.default.button.withConfig({
            displayName: "AvailableChain__Button",
            componentId: "sc-1jzq9hs-2"
        })(["border:1px solid #6c5dd3;box-sizing:border-box;border-radius:6px;padding:14px 24px 14px 24px;background:transparent;cursor:pointer;display:flex;align-items:center;max-width:303px;max-height:48px;p{margin:0;padding-left:16px;font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;white-space:nowrap;}transition:background-color 200ms ease-in-out,color 200ms ease-in-out;:hover{background-color:#6c5dd3;> *{color:white;}}@media screen and (max-width:480px){width:100%;p{font-size:12px;white-space:inherit;}}"]),
        t.Z = l
    },
    70685: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/farms", function() {
            return n(5305)
        }
        ])
    }
}, function(e) {
    e.O(0, [588, 4343, 105, 7409, 5892, 8752, 4035, 7521, 9774, 2888, 179], (function() {
        return t = 70685,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
