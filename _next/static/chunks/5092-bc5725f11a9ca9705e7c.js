"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5092], {
    68472: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return P
            }
        });
        var o = n(92809)
          , r = n(10219)
          , a = n(62639)
          , i = n(67294)
          , s = n(93350)
          , l = n(79308)
          , u = n(93022)
          , c = n(42227)
          , d = n(3023)
          , p = n(75358)
          , m = n(99307)
          , f = n(4965)
          , h = n(94831)
          , x = n(39185)
          , b = n(46888)
          , v = n(86108)
          , g = n(99638)
          , y = n(41810)
          , k = n(67619)
          , j = n(85893);
        function w(e) {
            var t = e.hovered
              , n = e.data
              , o = e.title
              , r = (0,
            y.$G)().t
              , a = null !== t && void 0 !== t ? t : n.length - 1
              , i = n[a]
              , s = n[a - 1];
            return (0,
            j.jsxs)(w.Root, {
                children: [o && (0,
                j.jsx)(w.Title, {
                    children: o
                }), i && (0,
                j.jsxs)(j.Fragment, {
                    children: [(0,
                    j.jsxs)(w.Value, {
                        children: [(0,
                        j.jsxs)("span", {
                            children: ["$", (0,
                            g.uf)(i.value, {
                                notation: "compact"
                            })]
                        }), s && (0,
                        j.jsx)(k.Z, {
                            value: (0,
                            g.Yu)(s.value, i.value)
                        })]
                    }), (0,
                    j.jsxs)(w.Date, {
                        children: [r("since "), (0,
                        u.Z)((0,
                        c.Z)(i.date), "MMM d, yyyy")]
                    })]
                })]
            })
        }
        function Z(e) {
            var t = e.data
              , n = e.onHover
              , o = e.payload;
            return (0,
            i.useEffect)((function() {
                null === n || void 0 === n || n(t.indexOf(o))
            }
            ), [t, n, o]),
            null
        }
        function C(e) {
            var t = e.data
              , n = e.type
              , o = e.title
              , r = (0,
            i.useState)()
              , a = r[0]
              , s = r[1]
              , l = (0,
            j.jsx)(d.K, {
                dataKey: "date",
                axisLine: !1,
                tickLine: !1,
                tickFormatter: function(e) {
                    return "number" === typeof e ? (0,
                    u.Z)((0,
                    c.Z)(e), "dd") : e
                },
                minTickGap: 10,
                fontSize: "11px",
                fontWeight: "500",
                letterSpacing: "0.1px",
                tickMargin: 8
            })
              , y = (0,
            j.jsx)(p.B, {
                dataKey: "value",
                tickCount: 6,
                scale: "linear",
                axisLine: !1,
                tickLine: !1,
                color: "#8990A5",
                fontSize: "11px",
                fontWeight: "500",
                letterSpacing: "0.1px",
                tickFormatter: function(e) {
                    return "$" + (0,
                    g.uf)(e, {
                        notation: "compact"
                    })
                },
                orientation: "right",
                tick: {
                    stroke: "#8990A5",
                    strokeWidth: 0
                },
                tickMargin: 8
            })
              , k = (0,
            j.jsx)(m.u, {
                contentStyle: {
                    display: "none"
                },
                formatter: function(e, n, o) {
                    var r = o.payload;
                    return (0,
                    j.jsx)(Z, {
                        payload: r,
                        data: t,
                        onHover: s
                    })
                }
            })
              , N = function() {
                return s(void 0)
            };
            return (0,
            j.jsxs)(C.Root, {
                children: [(0,
                j.jsx)(w, {
                    data: t,
                    hovered: a,
                    title: o
                }), (0,
                j.jsx)(f.h, {
                    className: "chart-container",
                    width: "99%",
                    children: "bar" === n ? (0,
                    j.jsxs)(h.v, {
                        data: t,
                        onMouseLeave: N,
                        children: [l, y, k, (0,
                        j.jsx)(x.$, {
                            barSize: 2,
                            dataKey: "value",
                            fill: "#6C5DD3"
                        })]
                    }) : (0,
                    j.jsxs)(b.T, {
                        data: t,
                        onMouseLeave: N,
                        children: [l, y, k, (0,
                        j.jsx)("defs", {
                            children: (0,
                            j.jsxs)("linearGradient", {
                                id: "Gradient",
                                x1: "0",
                                x2: "0",
                                y1: "0",
                                y2: "1",
                                children: [(0,
                                j.jsx)("stop", {
                                    offset: "0%",
                                    stopColor: "#B9B2EA"
                                }), (0,
                                j.jsx)("stop", {
                                    offset: "100%",
                                    stopColor: "#B9B2EA",
                                    stopOpacity: "0"
                                })]
                            })
                        }), (0,
                        j.jsx)(v.u, {
                            type: "monotone",
                            dataKey: "value",
                            stroke: "#6C5DD3",
                            strokeWidth: "2",
                            fill: "url(#Gradient)"
                        })]
                    })
                })]
            })
        }
        w.Root = s.default.div.withConfig({
            displayName: "ChartInfo__Root",
            componentId: "sc-1b1beiz-0"
        })(["display:grid;gap:6px;color:#0b1359;"]),
        w.Title = s.default.div.withConfig({
            displayName: "ChartInfo__Title",
            componentId: "sc-1b1beiz-1"
        })(["font-weight:500;font-size:18px;line-height:20px;letter-spacing:0.1px;"]),
        w.Value = s.default.div.withConfig({
            displayName: "ChartInfo__Value",
            componentId: "sc-1b1beiz-2"
        })(["& > span:first-child{font-weight:500;font-size:24px;line-height:20px;letter-spacing:0.1px;}", "{margin-left:8px;font-weight:normal;font-size:16px;line-height:19px;letter-spacing:0.1px;}"], k.Z.Root),
        w.Date = s.default.div.withConfig({
            displayName: "ChartInfo__Date",
            componentId: "sc-1b1beiz-3"
        })(["", ""], l.cp.yG.regular),
        C.Root = s.default.div.withConfig({
            displayName: "Chart__Root",
            componentId: "sc-19w1j7e-0"
        })(["position:relative;display:flex;flex-direction:column;& > *{flex-shrink:0;}& > .chart-container{flex:1;}"]);
        var N = n(10240)
          , S = ["charts", "responsiveTabs"];
        function O(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function T(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? O(Object(n), !0).forEach((function(t) {
                    (0,
                    o.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function P(e) {
            var t = e.charts
              , n = e.responsiveTabs
              , o = (0,
            r.Z)(e, S)
              , s = (0,
            i.useState)("0")
              , l = s[0]
              , u = s[1]
              , c = Number(l)
              , d = (0,
            i.useMemo)((function() {
                return t.map((function(e, t) {
                    return {
                        title: e.title,
                        value: t.toString()
                    }
                }
                ))
            }
            ), [t])
              , p = t[c]
              , m = t.length > 1;
            return (0,
            j.jsxs)(P.Root, T(T({}, o), {}, {
                children: [m && (0,
                j.jsx)(N.Z, {
                    responsive: n,
                    value: l,
                    options: d,
                    onChange: u
                }), (null === p || void 0 === p ? void 0 : p.data.length) > 0 ? (0,
                j.jsx)(C, T(T({}, p), {}, {
                    title: m ? void 0 : p.title
                })) : (0,
                j.jsx)(a.Od, {
                    height: "100%"
                })]
            }))
        }
        P.Root = (0,
        s.default)(l.Zb).withConfig({
            displayName: "ChartsCard__Root",
            componentId: "sc-sfoyzz-0"
        })(["box-shadow:0px 6px 12px rgba(185,189,208,0.4);padding:24px;display:flex;flex-direction:column;", "{margin-bottom:17px;}", "{max-width:160px;}", "{flex:1;}@media ", "{padding:16px;}"], N.Z.Root, N.Z.Select, C.Root, l.mq.down(l.AV.sm))
    },
    10240: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var o = n(94829)
          , r = n(93350)
          , a = n(79308);
        n(67294);
        var i = n(85893);
        function s(e) {
            var t = e.options
              , n = e.value
              , r = e.responsive
              , l = void 0 === r || r
              , u = e.onChange
              , c = (0,
            o.Z)(a.mq.down(a.AV.sm));
            return (0,
            i.jsx)(s.Root, {
                children: c && l ? (0,
                i.jsx)(s.Select, {
                    onChange: function(e) {
                        return null === u || void 0 === u ? void 0 : u(e.target.value)
                    },
                    value: n,
                    children: t.map((function(e) {
                        return (0,
                        i.jsx)("option", {
                            value: e.value,
                            children: e.title
                        }, e.value)
                    }
                    ))
                }) : t.map((function(e) {
                    return (0,
                    i.jsx)(a.zx, {
                        size: "small",
                        variant: e.value === n ? "contained" : "text",
                        onClick: function() {
                            return null === u || void 0 === u ? void 0 : u(e.value)
                        },
                        children: e.title
                    }, e.value)
                }
                ))
            })
        }
        s.Root = r.default.div.withConfig({
            displayName: "ResponsiveTabs__Root",
            componentId: "sc-1u4s2id-0"
        })(["display:flex;width:100%;", "{padding:0 10px;}"], a.zx.Root),
        s.Select = r.default.select.withConfig({
            displayName: "ResponsiveTabs__Select",
            componentId: "sc-1u4s2id-1"
        })(["", " background-image:url(", ");background-repeat:no-repeat;background-position:center right 10px;appearance:none;color:#8990a5;border:1px solid #d2d6e5;border-radius:6px;padding:6px 8px;background-color:transparent;outline:none;width:100%;"], a.cp.A6.regular, "/_next/static/files/arrow_cca19b46f671dca27c0ae58e0fadde1b.svg")
    },
    57141: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return P
            }
        });
        var o, r = n(92809), a = n(83789), i = n(41810), s = n(67294), l = n(94829), u = n(75347), c = n(93350), d = n(79308), p = n(35519);
        function m(e) {
            return {
                hash: e.id.split("-")[0],
                type: o.SWAP,
                timestamp: Number(e.timestamp),
                sender: e.from,
                token0Symbol: e.pair.token0.symbol,
                token1Symbol: e.pair.token1.symbol,
                token0Address: e.pair.token0.id,
                token1Address: e.pair.token1.id,
                amountUSD: Number(e.amountUSD),
                amountToken0: Number(e.amount0In) - Number(e.amount0Out),
                amountToken1: Number(e.amount1In) - Number(e.amount1Out)
            }
        }
        function f(e) {
            return {
                type: o.MINT,
                hash: e.id.split("-")[0],
                timestamp: Number(e.timestamp),
                sender: e.to,
                token0Symbol: e.pair.token0.symbol,
                token1Symbol: e.pair.token1.symbol,
                token0Address: e.pair.token0.id,
                token1Address: e.pair.token1.id,
                amountUSD: Number(e.amountUSD),
                amountToken0: Number(e.amount0),
                amountToken1: Number(e.amount1)
            }
        }
        function h(e) {
            return {
                type: o.BURN,
                hash: e.id.split("-")[0],
                timestamp: Number(e.timestamp),
                sender: e.sender,
                token0Symbol: e.pair.token0.symbol,
                token1Symbol: e.pair.token1.symbol,
                token0Address: e.pair.token0.id,
                token1Address: e.pair.token1.id,
                amountUSD: Number(e.amountUSD),
                amountToken0: Number(e.amount0),
                amountToken1: Number(e.amount1)
            }
        }
        !function(e) {
            e.ALL = "all",
            e.SWAP = "swap",
            e.MINT = "mint",
            e.BURN = "burn"
        }(o || (o = {}));
        var x = n(10240)
          , b = n(9462)
          , v = n(67061)
          , g = n(78020)
          , y = n(42227)
          , k = n(47646)
          , j = n(86377)
          , w = n(93578)
          , Z = n(99638)
          , C = n(85893);
        function N(e) {
            var t, n = e.transaction, r = (0,
            i.$G)().t, a = (0,
            l.Z)(d.mq.down(d.AV.lg)), s = (0,
            Z.Rr)(n.token0Symbol), u = (0,
            Z.Rr)(n.token1Symbol);
            n.type === o.MINT ? t = r("Add {{token0}} and {{token1}}", {
                token0: s,
                token1: u
            }) : n.type === o.SWAP ? t = r("Swap {{token0}} for {{token1}}", {
                token0: n.amountToken1 < 0 ? s : u,
                token1: n.amountToken0 < 0 ? s : u
            }) : n.type === o.BURN && (t = r("Remove {{token0}} and {{token1}}", {
                token0: s,
                token1: u
            }));
            var c = (0,
            k.x)().chainId;
            return (0,
            C.jsxs)(b.ZP.ItemRow, {
                as: "a",
                target: "_blank",
                rel: "noreferrer noopener",
                href: (0,
                w.E8)(c, n.hash, "transaction"),
                children: [(0,
                C.jsx)(b.ZP.ItemCell, {
                    children: (0,
                    C.jsx)(N.Name, {
                        children: t
                    })
                }), (0,
                C.jsxs)(b.ZP.ItemCell, {
                    children: ["$", (0,
                    Z.uf)(n.amountUSD)]
                }), !a && (0,
                C.jsxs)(C.Fragment, {
                    children: [(0,
                    C.jsxs)(b.ZP.ItemCell, {
                        children: [(0,
                        Z.uf)(Math.abs(n.amountToken0)), " ", s]
                    }), (0,
                    C.jsxs)(b.ZP.ItemCell, {
                        children: [(0,
                        Z.uf)(Math.abs(n.amountToken1)), " ", u]
                    }), (0,
                    C.jsx)(b.ZP.ItemCell, {
                        children: (0,
                        C.jsx)(N.Account, {
                            children: (0,
                            j.Tg)(n.sender, 6, 4)
                        })
                    })]
                }), (0,
                C.jsx)(b.ZP.ItemCell, {
                    children: (0,
                    g.Z)((0,
                    y.Z)(n.timestamp), {
                        addSuffix: !0
                    })
                })]
            })
        }
        function S(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, o)
            }
            return n
        }
        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function T(e) {
            var t = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.token
                  , n = e.pair
                  , o = (0,
                u.sI)({
                    skip: !!t || !!n
                }).data
                  , r = (0,
                p.Z)(t)
                  , a = (0,
                u.xg)({
                    variables: {
                        pairs: r
                    },
                    skip: !t || !r
                }).data
                  , i = (0,
                u.xg)({
                    variables: {
                        pairs: [n]
                    },
                    skip: !n
                }).data;
                return t ? a : n ? i : o
            }(e)
              , n = (0,
            i.$G)().t
              , r = (0,
            s.useState)(o.ALL)
              , l = r[0]
              , c = r[1]
              , d = (0,
            s.useMemo)((function() {
                if (t)
                    return [].concat((0,
                    a.Z)(l === o.ALL || l === o.MINT ? t.mints.map(f) : []), (0,
                    a.Z)(l === o.ALL || l === o.SWAP ? t.swaps.map(m) : []), (0,
                    a.Z)(l === o.ALL || l === o.BURN ? t.burns.map(h) : []))
            }
            ), [t, l])
              , x = (0,
            b.Z3)({
                items: d,
                sortingOptions: {
                    initialKey: "timestamp"
                },
                maxPages: 10
            })
              , v = (0,
            s.useMemo)((function() {
                return [{
                    title: n("All"),
                    value: o.ALL
                }, {
                    title: n("Swaps"),
                    value: o.SWAP
                }, {
                    title: n("Adds"),
                    value: o.MINT
                }, {
                    title: n("Removes"),
                    value: o.BURN
                }]
            }
            ), [n])
              , g = (0,
            s.useCallback)((function(e) {
                c(e),
                x.paginate.onPageChanged(1)
            }
            ), [x.paginate]);
            return O(O({}, x), {}, {
                type: l,
                typeOptions: v,
                onChangeType: g
            })
        }
        function P(e) {
            var t = e.token
              , n = e.pair
              , o = (0,
            i.$G)().t
              , r = (0,
            l.Z)(d.mq.down(d.AV.lg))
              , a = T({
                token: t,
                pair: n
            })
              , s = a.items
              , u = a.sorting
              , c = a.paginate
              , p = a.type
              , m = a.typeOptions
              , f = a.onChangeType;
            return (0,
            C.jsxs)(P.Root, {
                children: [(0,
                C.jsx)(v.Z, {
                    children: o("Transactions")
                }), (0,
                C.jsx)(b.ZP, {
                    paginate: c,
                    header: (0,
                    C.jsxs)(b.ZP.HeaderRow, {
                        children: [(0,
                        C.jsx)(b.ZP.HeaderCell, {
                            children: (0,
                            C.jsx)(x.Z, {
                                options: m,
                                value: p,
                                onChange: f
                            })
                        }), [{
                            title: o("Total value"),
                            sortKey: "amountUSD"
                        }, !r && {
                            title: o("Token amount"),
                            sortKey: "amountToken0"
                        }, !r && {
                            title: o("Token amount"),
                            sortKey: "amountToken1"
                        }, !r && {
                            title: o("Transaction account"),
                            sortKey: "sender"
                        }, {
                            title: o("Time"),
                            sortKey: "timestamp"
                        }].filter(Boolean).map((function(e) {
                            return (0,
                            C.jsx)(b.ZP.SortableHeaderCell, {
                                sortKey: e.sortKey,
                                sorting: u,
                                children: e.title
                            }, e.sortKey)
                        }
                        ))]
                    }),
                    children: s ? s.map((function(e, t) {
                        return (0,
                        C.jsx)(N, {
                            transaction: e
                        }, t)
                    }
                    )) : (0,
                    C.jsx)(b.ZP.ItemsLoader, {})
                })]
            })
        }
        N.Name = c.default.div.withConfig({
            displayName: "TransactionRow__Name",
            componentId: "sc-vxwad4-0"
        })(["", " color:#6C5DD3;"], d.cp.A6.medium),
        N.Account = c.default.div.withConfig({
            displayName: "TransactionRow__Account",
            componentId: "sc-vxwad4-1"
        })(["color:#6c5dd3;"]),
        P.Root = c.default.div.withConfig({
            displayName: "TransactionsTable__Root",
            componentId: "sc-93seko-0"
        })(["", "{grid-template-columns:1.7fr repeat(5,0.8fr);}@media ", "{", "{grid-template-columns:2.6fr repeat(2,1fr);}}@media ", "{", "{grid-template-columns:1.6fr repeat(2,1fr);}}"], b.ZP.Row, d.mq.down(d.AV.lg), b.ZP.Row, d.mq.down(d.AV.sm), b.ZP.Row)
    },
    44141: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return r
            }
        });
        var o = n(75347);
        function r(e) {
            var t, n = (0,
            o.MK)({
                variables: {
                    timestamp: e
                },
                context: {
                    blocklytics: !0
                }
            }).data;
            return Number(null === n || void 0 === n || null === (t = n.blocks[0]) || void 0 === t ? void 0 : t.number)
        }
    },
    70487: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var o = n(42902)
          , r = n(32370)
          , a = n(67294)
          , i = new Date;
        function s() {
            return (0,
            a.useMemo)((function() {
                return {
                    h24: (0,
                    o.Z)((0,
                    r.Z)(i, 1)),
                    h48: (0,
                    o.Z)((0,
                    r.Z)(i, 2)),
                    d7: (0,
                    o.Z)((0,
                    r.Z)(i, 7))
                }
            }
            ), [])
        }
    },
    35519: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var o = n(83789)
          , r = n(67294)
          , a = n(75347);
        function i(e) {
            var t = (0,
            a.uJ)({
                variables: {
                    token: e
                },
                skip: !e
            }).data;
            return (0,
            r.useMemo)((function() {
                return t && [].concat((0,
                o.Z)(t.asToken0), (0,
                o.Z)(t.asToken1)).map((function(e) {
                    return e.id
                }
                ))
            }
            ), [t])
        }
    }
}]);
