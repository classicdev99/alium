(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9776], {
    95534: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            __N_SSG: function() {
                return D
            },
            default: function() {
                return C
            }
        });
        var n = i(41810)
          , o = i(93350)
          , l = i(80318)
          , a = i(82212)
          , r = i(47646)
          , s = i(67294)
          , d = i(84325)
          , u = i(75347)
          , c = i(18407)
          , m = i(45049)
          , f = i(99638)
          , h = i(85893);
        function v() {
            var e = (0,
            c.x)()
              , t = (0,
            r.x)().chainId
              , i = a.mX[t]
              , o = null === e || void 0 === e ? void 0 : e.now.length
              , p = null === e || void 0 === e ? void 0 : e.h24.length
              , x = (0,
            n.$G)().t
              , y = function() {
                var e = (0,
                u.eO)().data;
                return (0,
                s.useMemo)((function() {
                    var t, i, n, o, l, a, r;
                    if (e)
                        return {
                            nativePrice: Number((null === e || void 0 === e || null === (t = e.bundles) || void 0 === t || null === (i = t[0]) || void 0 === i ? void 0 : i.nativePrice) || 0),
                            transactions24h: (0,
                            f.Kt)(Number(null === (n = e.aliumDayDatas[1]) || void 0 === n ? void 0 : n.totalTransactions) || 0, Number(null === (o = e.aliumDayDatas[0]) || void 0 === o ? void 0 : o.totalTransactions) || 0),
                            totalPairs: Number((null === e || void 0 === e || null === (l = e.aliumFactories) || void 0 === l || null === (a = l[0]) || void 0 === a ? void 0 : a.totalPairs) || 0),
                            fees24h: (Number(null === (r = e.aliumDayDatas[0]) || void 0 === r ? void 0 : r.dailyVolumeUSD) || 0) * d.om
                        }
                }
                ), [e])
            }();
            return (0,
            h.jsx)(v.Root, {
                children: y ? [[x("{{token}} Price:", {
                    token: null === i || void 0 === i ? void 0 : i.symbol
                }), "$" + (0,
                f.uf)(y.nativePrice)], [x("Transactions (24H):"), (0,
                f.uf)(p)], [x("Pairs:"), (0,
                f.uf)(o)], [x("Fees (24H):"), "$" + (0,
                f.uf)(y.fees24h)]].map((function(e, t) {
                    var i = (0,
                    l.Z)(e, 2)
                      , n = i[0]
                      , o = i[1];
                    return (0,
                    h.jsxs)(v.Item, {
                        children: [(0,
                        h.jsx)("span", {
                            children: n
                        }), (0,
                        h.jsx)("span", {
                            children: o
                        })]
                    }, t)
                }
                )) : (0,
                h.jsx)(m.a, {})
            })
        }
        v.Item = o.default.div.withConfig({
            displayName: "InfoHeadline__Item",
            componentId: "sc-1rclnq-0"
        })(["display:flex;align-items:center;& > * + *{margin-left:4px;}& > span{&:nth-of-type(1){font-size:14px;line-height:20px;letter-spacing:0.1px;color:#8990a5;}&:nth-of-type(2){font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#6c5dd3;}}"]),
        v.Root = o.default.div.withConfig({
            displayName: "InfoHeadline__Root",
            componentId: "sc-1rclnq-1"
        })(["display:flex;align-items:center;flex-wrap:wrap;& > *{margin-right:24px;}"]);
        var p = i(75472)
          , x = i.n(p)
          , y = i(94829)
          , j = i(79308)
          , Z = i(68472);
        function b() {
            var e = (0,
            y.Z)(j.mq.down(j.AV.lg))
              , t = (0,
            n.$G)().t
              , i = (0,
            u.kK)().data
              , o = (0,
            s.useMemo)((function() {
                var e = []
                  , t = [];
                return x()(null === i || void 0 === i ? void 0 : i.aliumDayDatas, "date").forEach((function(i) {
                    e.push({
                        date: i.date,
                        value: Number(i.dailyVolumeUSD)
                    }),
                    t.push({
                        date: i.date,
                        value: Number(i.totalLiquidityUSD)
                    })
                }
                ), []),
                {
                    volume: e,
                    liquidity: t
                }
            }
            ), [null === i || void 0 === i ? void 0 : i.aliumDayDatas]);
            return (0,
            h.jsx)(b.Root, {
                children: e ? (0,
                h.jsx)(Z.Z, {
                    responsiveTabs: !1,
                    charts: [{
                        title: t("Liquidity"),
                        data: o.liquidity,
                        type: "line"
                    }, {
                        title: t("Volume"),
                        data: o.volume,
                        type: "bar"
                    }]
                }) : (0,
                h.jsxs)(h.Fragment, {
                    children: [(0,
                    h.jsx)(Z.Z, {
                        charts: [{
                            title: t("Liquidity"),
                            data: o.liquidity,
                            type: "line"
                        }]
                    }), (0,
                    h.jsx)(Z.Z, {
                        charts: [{
                            title: t("Volume"),
                            data: o.volume,
                            type: "bar"
                        }]
                    })]
                })
            })
        }
        b.Root = o.default.div.withConfig({
            displayName: "OverviewCharts__Root",
            componentId: "sc-1cru8jb-0"
        })(["display:flex;min-height:342px;& > *{flex:1;}& > * + *{margin-left:30px;}@media ", "{min-height:394px;}@media ", "{min-height:372px;}"], j.mq.down(j.AV.lg), j.mq.down(j.AV.sm));
        var g = i(87692)
          , k = i(77370)
          , N = i(45089)
          , _ = i(46230)
          , w = i(55547)
          , I = i(61047)
          , P = i(57141)
          , q = i(14820);
        function C() {
            var e = (0,
            n.$G)().t;
            return (0,
            h.jsxs)(C.Root, {
                children: [(0,
                h.jsxs)(g.Z, {
                    children: [(0,
                    h.jsxs)(N.Z, {
                        children: [(0,
                        h.jsx)(_.Z, {
                            children: e("Analytics")
                        }), (0,
                        h.jsx)(k.Z, {})]
                    }), (0,
                    h.jsx)(N.Z, {
                        children: (0,
                        h.jsx)(v, {})
                    })]
                }), (0,
                h.jsxs)(C.Content, {
                    children: [(0,
                    h.jsx)(b, {}), (0,
                    h.jsx)(I.Z, {
                        seeAllHref: "/info/tokens"
                    }), (0,
                    h.jsx)(w.Z, {
                        seeAllHref: "/info/pairs"
                    }), (0,
                    h.jsx)(P.Z, {})]
                })]
            })
        }
        C.Content = o.default.div.withConfig({
            displayName: "Info__Content",
            componentId: "sc-1etetjj-0"
        })(["display:grid;gap:40px;"]),
        C.Root = o.default.div.withConfig({
            displayName: "Info__Root",
            componentId: "sc-1etetjj-1"
        })([""]),
        C.getLayout = q.b;
        var D = !0
    },
    18407: function(e, t, i) {
        "use strict";
        i.d(t, {
            x: function() {
                return r
            }
        });
        var n = i(75347)
          , o = i(44141)
          , l = i(70487)
          , a = i(35519)
          , r = function(e) {
            var t = (0,
            l.Z)()
              , i = (0,
            o.Z)(t.h24)
              , r = (0,
            o.Z)(t.d7)
              , s = (0,
            n.k_)({
                variables: {
                    block24h: i,
                    block7d: r
                },
                fetchPolicy: "no-cache",
                skip: !i || !r || !!e
            }).data
              , d = (0,
            a.Z)(e)
              , u = (0,
            n.Yf)({
                variables: {
                    block24h: i,
                    block7d: r,
                    ids: d
                },
                fetchPolicy: "no-cache",
                skip: !i || !r || !e || !d
            }).data;
            return e ? u : s
        }
    },
    55547: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return j
            }
        });
        var n = i(80318)
          , o = i(41810)
          , l = i(41664)
          , a = i(67294)
          , r = i(94829)
          , s = i(84325)
          , d = i(18407)
          , u = i(79308)
          , c = i(99638)
          , m = i(27123)
          , f = i(55792)
          , h = i(67619)
          , v = i(9462)
          , p = i(67061)
          , x = i(61047)
          , y = i(85893);
        function j(e) {
            var t = e.hiddenTitle
              , i = e.token
              , Z = e.seeAllHref
              , b = (0,
            o.$G)().t
              , g = (0,
            r.Z)(u.mq.down(u.AV.lg))
              , k = (0,
            r.Z)(u.mq.down(u.AV.sm))
              , N = function(e) {
                var t = (0,
                d.x)(e)
                  , i = (0,
                a.useMemo)((function() {
                    if (t) {
                        var e = [t.h24, t.d7].map((function(e) {
                            return e.reduce((function(e, t) {
                                return e[t.id] = t,
                                e
                            }
                            ), {})
                        }
                        ))
                          , i = (0,
                        n.Z)(e, 2)
                          , o = i[0]
                          , l = i[1];
                        return t.now.map((function(e) {
                            var t = o[e.id]
                              , i = l[e.id]
                              , n = Number(e.reserveUSD) || 0
                              , a = Number(e.volumeUSD) || 0
                              , r = (0,
                            c.Kt)(Number(null === t || void 0 === t ? void 0 : t.volumeUSD) || 0, a)
                              , d = (0,
                            c.Kt)(Number(null === i || void 0 === i ? void 0 : i.volumeUSD) || 0, a)
                              , u = r * s.om
                              , f = n > 0 ? r * s.BY * 365 / n * 100 : 0;
                            return {
                                id: e.id,
                                name: (0,
                                m.X)(e.token0.symbol, e.token1.symbol),
                                liquidity: n,
                                volume24h: r,
                                volume7d: d,
                                fees24h: u,
                                apy: f,
                                token0: e.token0,
                                token1: e.token1
                            }
                        }
                        ))
                    }
                }
                ), [t]);
                return (0,
                v.Z3)({
                    items: i,
                    sortingOptions: {
                        initialKey: "liquidity"
                    }
                })
            }(i)
              , _ = N.items
              , w = N.sorting
              , I = N.paginate
              , P = N.getItemNumber
              , q = [{
                title: b("Name"),
                sortKey: "name"
            }, {
                title: b("Liquidity"),
                sortKey: "liquidity"
            }, {
                title: b("Volume\n(24 hrs)"),
                sortKey: "volume24h",
                style: k && {
                    whiteSpace: "break-spaces"
                }
            }, !k && {
                title: b("Volume (7 d)"),
                sortKey: "volume7d"
            }, !g && {
                title: b("Fees (24 hr)"),
                sortKey: "fees24h"
            }, !g && {
                title: b("1y Fees/\nLiquidity"),
                sortKey: "apy"
            }];
            return (0,
            y.jsxs)(j.Root, {
                children: [!t && (0,
                y.jsx)(p.Z, {
                    seeAllHref: Z,
                    children: b("Top Pairs")
                }), (0,
                y.jsx)(v.ZP, {
                    paginate: I,
                    header: (0,
                    y.jsx)(v.ZP.HeaderRow, {
                        children: q.filter(Boolean).map((function(e) {
                            return (0,
                            y.jsx)(v.ZP.SortableHeaderCell, {
                                sortKey: e.sortKey,
                                sorting: w,
                                style: e.style,
                                children: e.title
                            }, e.title)
                        }
                        ))
                    }),
                    children: _ ? _.map((function(e, t) {
                        return (0,
                        y.jsx)(l.default, {
                            passHref: !0,
                            href: "/info/pairs/".concat(e.token0.id, "/").concat(e.token1.id),
                            children: (0,
                            y.jsxs)(v.ZP.ItemRow, {
                                as: "a",
                                children: [(0,
                                y.jsxs)(v.ZP.ItemCell, {
                                    children: [!k && (0,
                                    y.jsx)(x.Z.ItemNumber, {
                                        children: P(t)
                                    }), (0,
                                    y.jsx)(f.Z, {
                                        address0: e.token0.id,
                                        address1: e.token1.id,
                                        symbol0: e.token0.symbol,
                                        symbol1: e.token1.symbol
                                    }), (0,
                                    y.jsx)(x.Z.TokenName, {
                                        children: e.name
                                    })]
                                }), (0,
                                y.jsxs)(v.ZP.ItemCell, {
                                    children: ["$", (0,
                                    c.uf)(e.liquidity)]
                                }), (0,
                                y.jsxs)(v.ZP.ItemCell, {
                                    children: ["$", (0,
                                    c.uf)(e.volume24h)]
                                }), !k && (0,
                                y.jsxs)(v.ZP.ItemCell, {
                                    children: ["$", (0,
                                    c.uf)(e.volume7d)]
                                }), !g && (0,
                                y.jsxs)(v.ZP.ItemCell, {
                                    children: ["$", (0,
                                    c.uf)(e.fees24h)]
                                }), !g && (0,
                                y.jsx)(v.ZP.ItemCell, {
                                    children: (0,
                                    y.jsx)(h.Z, {
                                        value: e.apy
                                    })
                                })]
                            })
                        }, e.id)
                    }
                    )) : (0,
                    y.jsx)(v.ZP.ItemsLoader, {})
                })]
            })
        }
        j.Root = x.Z.Root
    },
    7777: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/info", function() {
            return i(95534)
        }
        ])
    }
}, function(e) {
    e.O(0, [4408, 2178, 9744, 3597, 5092, 9774, 2888, 179], (function() {
        return t = 7777,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
