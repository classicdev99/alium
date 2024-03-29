(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1211], {
    20640: function(e, t, n) {
        "use strict";
        var o = n(11742)
          , i = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
        e.exports = function(e, t) {
            var n, r, a, l, s, d, c = !1;
            t || (t = {}),
            n = t.debug || !1;
            try {
                if (a = o(),
                l = document.createRange(),
                s = document.getSelection(),
                (d = document.createElement("span")).textContent = e,
                d.style.all = "unset",
                d.style.position = "fixed",
                d.style.top = 0,
                d.style.clip = "rect(0, 0, 0, 0)",
                d.style.whiteSpace = "pre",
                d.style.webkitUserSelect = "text",
                d.style.MozUserSelect = "text",
                d.style.msUserSelect = "text",
                d.style.userSelect = "text",
                d.addEventListener("copy", (function(o) {
                    if (o.stopPropagation(),
                    t.format)
                        if (o.preventDefault(),
                        "undefined" === typeof o.clipboardData) {
                            n && console.warn("unable to use e.clipboardData"),
                            n && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                            var r = i[t.format] || i.default;
                            window.clipboardData.setData(r, e)
                        } else
                            o.clipboardData.clearData(),
                            o.clipboardData.setData(t.format, e);
                    t.onCopy && (o.preventDefault(),
                    t.onCopy(o.clipboardData))
                }
                )),
                document.body.appendChild(d),
                l.selectNodeContents(d),
                s.addRange(l),
                !document.execCommand("copy"))
                    throw new Error("copy command was unsuccessful");
                c = !0
            } catch (u) {
                n && console.error("unable to copy using execCommand: ", u),
                n && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(t.format || "text", e),
                    t.onCopy && t.onCopy(window.clipboardData),
                    c = !0
                } catch (u) {
                    n && console.error("unable to copy using clipboardData: ", u),
                    n && console.error("falling back to prompt"),
                    r = function(e) {
                        var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                        return e.replace(/#{\s*key\s*}/g, t)
                    }("message"in t ? t.message : "Copy to clipboard: #{key}, Enter"),
                    window.prompt(r, e)
                }
            } finally {
                s && ("function" == typeof s.removeRange ? s.removeRange(l) : s.removeAllRanges()),
                d && document.body.removeChild(d),
                a()
            }
            return c
        }
    },
    29418: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSP: function() {
                return J
            },
            default: function() {
                return X
            }
        });
        var o = n(86377)
          , i = n(41810)
          , r = n(11163)
          , a = n(75347)
          , l = n(55141)
          , s = n(93350)
          , d = n(79308)
          , c = n(84378)
          , u = n(55547)
          , p = n(57141)
          , m = n(14820)
          , f = n(99638)
          , h = n(75472)
          , v = n.n(h)
          , x = n(67294)
          , g = n(68472)
          , y = n(27420)
          , b = n(85893);
        function j(e) {
            var t = e.token
              , n = (0,
            i.$G)().t
              , o = (0,
            a.p9)({
                variables: {
                    token: t
                }
            }).data
              , r = (0,
            y.J)(o, t)
              , l = (0,
            x.useMemo)((function() {
                var e = []
                  , t = []
                  , n = [];
                return v()(r, "date").forEach((function(o) {
                    e.push({
                        date: o.date,
                        value: Number(o.dailyVolumeUSD)
                    }),
                    t.push({
                        date: o.date,
                        value: Number(o.totalLiquidityUSD)
                    }),
                    n.push({
                        date: o.date,
                        value: Number(o.priceUSD)
                    })
                }
                )),
                {
                    volume: e,
                    liquidity: t,
                    price: n
                }
            }
            ), [r]);
            return (0,
            b.jsx)(j.Root, {
                charts: [{
                    title: n("Volume"),
                    data: l.volume,
                    type: "bar"
                }, {
                    title: n("Liquidity"),
                    data: l.liquidity,
                    type: "line"
                }, {
                    title: n("Price"),
                    data: l.price,
                    type: "line"
                }]
            })
        }
        j.Root = (0,
        s.default)(g.Z).withConfig({
            displayName: "TokenCharts__Root",
            componentId: "sc-myhqf1-0"
        })(["min-height:382px;"]);
        var w = n(62639)
          , k = n(76780)
          , C = n(44141)
          , Z = n(70487);
        function _(e) {
            var t = e.token
              , n = (0,
            i.$G)().t
              , o = (0,
            Z.Z)()
              , r = (0,
            C.Z)(o.h24)
              , l = (0,
            C.Z)(o.h48)
              , s = (0,
            a.Rb)({
                variables: {
                    id: t,
                    block24h: r,
                    block48h: l
                },
                skip: !r || !l,
                fetchPolicy: "no-cache"
            }).data;
            if (!s)
                return (0,
                b.jsx)(w.Od, {
                    minHeight: 128
                });
            var d = s.now
              , c = s.h24
              , u = s.h48
              , p = Number(null === d || void 0 === d ? void 0 : d.totalLiquidity) * Number(null === d || void 0 === d ? void 0 : d.derivedUSD) || 0
              , m = Number(null === c || void 0 === c ? void 0 : c.totalLiquidity) * Number(null === c || void 0 === c ? void 0 : c.derivedUSD) || 0
              , h = (0,
            f.Yu)(m, p)
              , v = (0,
            f.Kt)(Number(null === c || void 0 === c ? void 0 : c.tradeVolumeUSD), Number(null === d || void 0 === d ? void 0 : d.tradeVolumeUSD))
              , x = (0,
            f.Kt)(Number(null === u || void 0 === u ? void 0 : u.tradeVolumeUSD), Number(null === c || void 0 === c ? void 0 : c.tradeVolumeUSD))
              , g = (0,
            f.Yu)(x, v)
              , y = (0,
            f.Kt)(Number(null === c || void 0 === c ? void 0 : c.totalTransactions), Number(null === d || void 0 === d ? void 0 : d.totalTransactions))
              , j = (0,
            f.Kt)(Number(null === u || void 0 === u ? void 0 : u.totalTransactions), Number(null === c || void 0 === c ? void 0 : c.totalTransactions))
              , N = (0,
            f.Yu)(j, y);
            return (0,
            b.jsxs)(_.Root, {
                children: [(0,
                b.jsx)(k.Z, {
                    title: n("Total Liquidity"),
                    value: "$" + (0,
                    f.uf)(p, {
                        notation: "compact"
                    }),
                    percent: h
                }), (0,
                b.jsx)(k.Z, {
                    title: n("Volume (24 hrs)"),
                    value: "$" + (0,
                    f.uf)(v, {
                        notation: "compact"
                    }),
                    percent: g
                }), (0,
                b.jsx)(k.Z, {
                    title: n("Transaction (24 hrs)"),
                    value: (0,
                    f.uf)(y),
                    percent: N
                })]
            })
        }
        _.Root = s.default.div.withConfig({
            displayName: "TokenCounters__Root",
            componentId: "sc-3cxwm0-0"
        })(["display:grid;gap:22px;@media ", "{grid-auto-flow:column;gap:24px;}@media ", "{grid-auto-flow:row;gap:8px;}"], d.mq.down(d.AV.md), d.mq.down(d.AV.sm));
        var N = n(47646)
          , R = n(93578)
          , P = n(35141)
          , D = n(63280)
          , I = n(9462);
        function O(e) {
            var t = e.token
              , n = (0,
            i.$G)().t
              , o = (0,
            N.x)().chainId
              , r = (0,
            R.lc)(o, !0).explorerName;
            return (0,
            b.jsx)(O.Root, {
                title: n("Token Information"),
                items: [{
                    title: n("Symbol"),
                    value: (0,
                    b.jsx)(O.TokenSymbol, {
                        children: (0,
                        f.Rr)(t.symbol)
                    })
                }, {
                    title: n("Name"),
                    value: t.name
                }, {
                    title: n("Address"),
                    value: (0,
                    b.jsx)(P.Z, {
                        address: t.id
                    })
                }],
                actions: (0,
                b.jsx)(d.zx, {
                    as: "a",
                    href: (0,
                    R.E8)(o, t.id, "token"),
                    target: "_blank",
                    rel: "noreferrer noopener",
                    variant: "outlined",
                    size: "small",
                    children: n("View on {{explorerName}}", {
                        explorerName: r
                    })
                })
            })
        }
        O.TokenSymbol = s.default.div.withConfig({
            displayName: "TokenInformation__TokenSymbol",
            componentId: "sc-1xa43lh-0"
        })(["", " color:#6C5DD3;"], d.cp.A6.medium),
        O.Root = (0,
        s.default)(D.Z).withConfig({
            displayName: "TokenInformation__Root",
            componentId: "sc-1xa43lh-1"
        })(["", "{grid-template-columns:repeat(2,1fr) 4fr;}"], I.ZP.Row);
        var A = n(92809)
          , T = n(10219)
          , S = n(94829)
          , q = n(10429)
          , E = n(91935)
          , V = n(3033)
          , U = n(82613)
          , L = n(67619)
          , M = n(87692)
          , z = n(77370)
          , B = n(45089)
          , H = n(46230)
          , K = n(21385)
          , $ = n(78984)
          , G = ["token"];
        function Y(e, t) {
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
        function F(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Y(Object(n), !0).forEach((function(t) {
                    (0,
                    A.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function W(e) {
            var t, n, o = e.token, i = (0,
            T.Z)(e, G), r = $.x.useContainer().tokens, a = r.isBookmarked(o.id), l = (0,
            S.Z)(d.mq.down(d.AV.lg)), s = (0,
            S.Z)(d.mq.down(d.AV.sm)), c = Number(null === (t = o.tokenDayData[0]) || void 0 === t ? void 0 : t.priceUSD) || 0, u = (0,
            f.Yu)(Number(null === (n = o.tokenDayData[1]) || void 0 === n ? void 0 : n.priceUSD) || 0, c), p = (0,
            b.jsxs)(W.Price, {
                children: [(0,
                b.jsxs)("span", {
                    children: ["$", (0,
                    q.uf)(c)]
                }), (0,
                b.jsx)(L.Z, {
                    value: u
                })]
            });
            return (0,
            b.jsxs)(M.Z, F(F({}, i), {}, {
                children: [(0,
                b.jsxs)(B.Z, {
                    children: [(0,
                    b.jsxs)(W.Main, {
                        children: [(0,
                        b.jsx)(V._, {
                            address: o.id,
                            symbol: o.symbol
                        }), (0,
                        b.jsxs)(H.Z, {
                            children: [o.name, " (", (0,
                            f.Rr)(o.symbol), ")"]
                        }), !s && p]
                    }), !l && (0,
                    b.jsx)(z.Z, {})]
                }), s && (0,
                b.jsx)(B.Z, {
                    children: p
                }), (0,
                b.jsxs)(B.Z, {
                    children: [(0,
                    b.jsxs)(W.Actions, {
                        children: [(0,
                        b.jsx)(K.Z, {
                            token0: o.id
                        }), (0,
                        b.jsx)(E.Z, {
                            token0: o.id
                        }), (0,
                        b.jsx)(U.Z, {
                            isActive: a,
                            onToggle: function() {
                                return a ? r.remove(o.id) : r.add(o.id)
                            }
                        })]
                    }), l && (0,
                    b.jsx)(z.Z, {})]
                })]
            }))
        }
        function X() {
            var e = (0,
            i.$G)().t
              , t = (0,
            r.useRouter)().query.id
              , n = (0,
            a.rS)({
                variables: {
                    id: t
                }
            }).data;
            return n ? n.token ? (0,
            b.jsxs)(X.Root, {
                children: [(0,
                b.jsx)(c.Z, {
                    items: [{
                        title: e("Tokens"),
                        href: "/info/tokens"
                    }, {
                        title: (0,
                        b.jsxs)(b.Fragment, {
                            children: [(0,
                            f.Rr)(n.token.symbol), "\xa0", (0,
                            b.jsxs)("span", {
                                style: {
                                    color: "#6C5DD3"
                                },
                                children: ["(", (0,
                                o.Tg)(n.token.id, 8, 6), ")"]
                            })]
                        }),
                        href: "/info/tokens/".concat(n.token.id)
                    }]
                }), (0,
                b.jsx)(W, {
                    token: n.token
                }), (0,
                b.jsxs)(X.Content, {
                    children: [(0,
                    b.jsxs)(X.Main, {
                        children: [(0,
                        b.jsx)(_, {
                            token: n.token.id
                        }), (0,
                        b.jsx)(j, {
                            token: n.token.id
                        })]
                    }), (0,
                    b.jsx)(u.Z, {
                        token: n.token.id
                    }), (0,
                    b.jsx)(p.Z, {
                        token: n.token.id
                    }), (0,
                    b.jsx)(O, {
                        token: n.token
                    })]
                })]
            }) : (0,
            b.jsx)(b.Fragment, {
                children: "Not found"
            }) : (0,
            b.jsx)(l.Z, {
                load: !0
            })
        }
        W.Main = s.default.div.withConfig({
            displayName: "TokenToolbar__Main",
            componentId: "sc-1kr980j-0"
        })(["display:flex;align-items:center;", "{--logo-size:48px;}", "{margin:0 16px;}@media ", "{", "{margin-left:8px;}}@media ", "{", "{--logo-size:32px;}}@media ", "{", "{--logo-size:40px;}}"], V._.Root, H.Z, d.mq.down(d.AV.lg), H.Z, d.mq.down(d.AV.md), V._.Root, d.mq.down(d.AV.sm), V._.Root),
        W.Price = s.default.div.withConfig({
            displayName: "TokenToolbar__Price",
            componentId: "sc-1kr980j-1"
        })(["& > span:first-child{font-weight:500;font-size:24px;line-height:20px;letter-spacing:0.1px;color:#0b1359;margin-right:8px;}"]),
        W.Actions = s.default.div.withConfig({
            displayName: "TokenToolbar__Actions",
            componentId: "sc-1kr980j-2"
        })(["display:grid;grid-auto-flow:column;align-items:center;gap:8px;"]),
        X.Main = s.default.div.withConfig({
            displayName: "token__Main",
            componentId: "sc-tih1de-0"
        })(["display:grid;grid-template-columns:309px 1fr;gap:30px;"]),
        X.Content = s.default.div.withConfig({
            displayName: "token__Content",
            componentId: "sc-tih1de-1"
        })(["display:grid;gap:40px;"]),
        X.Root = s.default.div.withConfig({
            displayName: "token__Root",
            componentId: "sc-tih1de-2"
        })(["@media ", "{", "{gap:24px;}}@media ", "{", "{grid-template-columns:1fr;gap:32px;}", "{gap:32px;}}"], d.mq.down(d.AV.lg), X.Main, d.mq.down(d.AV.md), X.Main, X.Content),
        X.getLayout = m.b;
        var J = !0
    },
    18407: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return l
            }
        });
        var o = n(75347)
          , i = n(44141)
          , r = n(70487)
          , a = n(35519)
          , l = function(e) {
            var t = (0,
            r.Z)()
              , n = (0,
            i.Z)(t.h24)
              , l = (0,
            i.Z)(t.d7)
              , s = (0,
            o.k_)({
                variables: {
                    block24h: n,
                    block7d: l
                },
                fetchPolicy: "no-cache",
                skip: !n || !l || !!e
            }).data
              , d = (0,
            a.Z)(e)
              , c = (0,
            o.Yf)({
                variables: {
                    block24h: n,
                    block7d: l,
                    ids: d
                },
                fetchPolicy: "no-cache",
                skip: !n || !l || !e || !d
            }).data;
            return e ? c : s
        }
    },
    91935: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return m
            }
        });
        var o, i, r = n(41810), a = n(41664), l = n(93350), s = n(79308), d = n(67294);
        function c() {
            return (c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function u(e) {
            return d.createElement("svg", c({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), o || (o = d.createElement("path", {
                opacity: .5,
                d: "M12 8.327v7.326M15.666 11.99H8.333",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), i || (i = d.createElement("path", {
                clipRule: "evenodd",
                d: "M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2z",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var p = n(85893);
        function m(e) {
            var t = e.token0
              , n = e.token1
              , o = (0,
            r.$G)().t;
            return (0,
            p.jsx)(a.default, {
                passHref: !0,
                href: ["/add/".concat(t), n].filter(Boolean).join("/"),
                children: (0,
                p.jsxs)(m.Button, {
                    forwardedAs: "a",
                    variant: "outlined",
                    children: [(0,
                    p.jsx)(u, {}), (0,
                    p.jsx)("span", {
                        children: o("Add Liquidity")
                    })]
                })
            })
        }
        m.Button = (0,
        l.default)(s.zx).withConfig({
            displayName: "AddLiquidity__Button",
            componentId: "sc-83ykba-0"
        })(["& > span{text-overflow:ellipsis;overflow:hidden;}@media ", "{max-width:183px;}"], s.mq.down(s.AV.sm))
    },
    82613: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var o = n(93350)
          , i = n(79308)
          , r = n(56123)
          , a = n(85893);
        function l(e) {
            var t = e.isActive
              , n = e.onToggle;
            return (0,
            a.jsx)(l.Root, {
                "data-active": t || void 0,
                onClick: n,
                children: (0,
                a.jsx)(r.Z, {})
            })
        }
        l.Root = (0,
        o.default)(i.hU).withConfig({
            displayName: "BookmarkButton__Root",
            componentId: "sc-1ggipbp-0"
        })(["padding:4px;color:#8990a5;border:1px solid #cbc8ee;border-radius:6px;&[data-active]{background:#6c5dd3;color:#fff;}"])
    },
    84378: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return c
            }
        });
        var o, i = n(41664), r = n(67294), a = n(93350);
        function l() {
            return (l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function s(e) {
            return r.createElement("svg", l({
                width: 18,
                height: 18,
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), o || (o = r.createElement("path", {
                d: "M7.125 5.25l3.75 3.753-3.75 3.747",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var d = n(85893);
        function c(e) {
            var t = e.items;
            return (0,
            d.jsx)(c.Root, {
                children: t.map((function(e, n) {
                    return (0,
                    d.jsxs)(r.Fragment, {
                        children: [(0,
                        d.jsx)(i.default, {
                            passHref: !0,
                            href: e.href,
                            children: (0,
                            d.jsx)(c.Item, {
                                children: e.title
                            })
                        }), n + 1 !== t.length && (0,
                        d.jsx)(s, {})]
                    }, e.href)
                }
                ))
            })
        }
        c.Item = a.default.a.withConfig({
            displayName: "Breadcrumbs__Item",
            componentId: "sc-jnb34-0"
        })(["background:rgba(108,93,211,0.1);border-radius:6px;font-weight:500;font-size:12px;line-height:14px;letter-spacing:0.1px;color:#8990a5;padding:4px 8px;"]),
        c.Root = a.default.div.withConfig({
            displayName: "Breadcrumbs__Root",
            componentId: "sc-jnb34-1"
        })(["display:flex;align-items:center;margin-bottom:24px;& > * + *{margin-left:4px;}"])
    },
    35141: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return v
            }
        });
        var o = n(86377)
          , i = n(93350)
          , r = n(80318)
          , a = n(20640)
          , l = n.n(a)
          , s = n(67294);
        var d, c, u = n(79308);
        function p() {
            return (p = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function m(e) {
            return s.createElement("svg", p({
                width: 24,
                height: 25,
                viewBox: "0 0 24 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), d || (d = s.createElement("path", {
                d: "M20 9.002h-9a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2z",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), c || (c = s.createElement("path", {
                opacity: .5,
                d: "M5 15.002H4a2 2 0 01-2-2v-9a2 2 0 012-2h9a2 2 0 012 2v1",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var f = n(85893);
        function h(e) {
            var t = e.text
              , n = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500
                  , t = (0,
                s.useState)(!1)
                  , n = t[0]
                  , o = t[1]
                  , i = (0,
                s.useCallback)((function(e) {
                    var t = l()(e);
                    o(t)
                }
                ), []);
                return (0,
                s.useEffect)((function() {
                    if (n) {
                        var t = setTimeout((function() {
                            o(!1)
                        }
                        ), e);
                        return function() {
                            clearTimeout(t)
                        }
                    }
                }
                ), [n, o, e]),
                [n, i]
            }()
              , o = (0,
            r.Z)(n, 2)
              , i = (o[0],
            o[1]);
            return (0,
            f.jsx)(u.hU, {
                onClick: function() {
                    return i(t)
                },
                children: (0,
                f.jsx)(m, {})
            })
        }
        function v(e) {
            var t = e.address;
            return (0,
            f.jsxs)(v.Root, {
                children: [(0,
                o.Tg)(t, 8, 6), (0,
                f.jsx)(h, {
                    text: t
                })]
            })
        }
        v.Root = i.default.div.withConfig({
            displayName: "CopyableAddress__Root",
            componentId: "sc-1n5xzqf-0"
        })(["display:grid;grid-auto-flow:column;align-items:center;gap:16px;"])
    },
    76780: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var o = n(93350)
          , i = n(79308)
          , r = n(67619)
          , a = n(85893);
        function l(e) {
            var t = e.title
              , n = e.value
              , o = e.percent;
            return (0,
            a.jsxs)(l.Root, {
                children: [(0,
                a.jsx)(l.Title, {
                    children: t
                }), "string" === typeof n ? (0,
                a.jsx)(l.Value, {
                    children: n
                }) : n, void 0 !== o && (0,
                a.jsx)(l.Percent, {
                    value: o
                })]
            })
        }
        l.Value = o.default.div.withConfig({
            displayName: "CounterCard__Value",
            componentId: "sc-ee5f97-0"
        })(["", " color:#0B1359;"], i.cp.h6),
        l.Title = o.default.div.withConfig({
            displayName: "CounterCard__Title",
            componentId: "sc-ee5f97-1"
        })(["", " color:#8990A5;white-space:nowrap;"], i.cp.A6.medium),
        l.Percent = (0,
        o.default)(r.Z).withConfig({
            displayName: "CounterCard__Percent",
            componentId: "sc-ee5f97-2"
        })(["", ""], i.cp.A6.regular),
        l.Root = (0,
        o.default)(i.Zb).withConfig({
            displayName: "CounterCard__Root",
            componentId: "sc-ee5f97-3"
        })(["box-shadow:0px 6px 12px rgba(185,189,208,0.4);padding:16px;display:grid;gap:8px;@media ", "{align-items:end;justify-content:space-between;", "{grid-column:2;grid-row:1 / span 2;}}"], i.mq.down(i.AV.sm), l.Percent)
    },
    63280: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return f
            }
        });
        var o = n(92809)
          , i = n(10219)
          , r = n(94829)
          , a = n(93350)
          , l = n(79308)
          , s = n(9462)
          , d = n(67061)
          , c = n(85893)
          , u = ["items", "actions", "title"];
        function p(e, t) {
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
        function m(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                    (0,
                    o.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function f(e) {
            var t = e.items
              , n = e.actions
              , o = e.title
              , a = (0,
            i.Z)(e, u)
              , p = (0,
            r.Z)(l.mq.down(l.AV.sm));
            return (0,
            c.jsxs)(f.Root, m(m({}, a), {}, {
                children: [(0,
                c.jsx)(d.Z, {
                    children: o
                }), p ? (0,
                c.jsxs)(f.MobileCard, {
                    children: [t.map((function(e, t) {
                        return (0,
                        c.jsxs)("div", {
                            children: [(0,
                            c.jsx)("span", {
                                children: e.title
                            }), (0,
                            c.jsx)("span", {
                                children: e.value
                            })]
                        }, t)
                    }
                    )), n && (0,
                    c.jsx)(f.Actions, {
                        children: n
                    })]
                }) : (0,
                c.jsx)(s.ZP, {
                    header: (0,
                    c.jsx)(s.ZP.HeaderRow, {
                        children: t.map((function(e, t) {
                            return (0,
                            c.jsx)(s.ZP.HeaderCell, {
                                children: e.title
                            }, t)
                        }
                        ))
                    }),
                    children: (0,
                    c.jsx)(s.ZP.ItemRow, {
                        children: t.map((function(e, o) {
                            return (0,
                            c.jsxs)(s.ZP.ItemCell, {
                                children: [e.value, o + 1 === t.length && n && (0,
                                c.jsx)(f.Actions, {
                                    children: n
                                })]
                            }, o)
                        }
                        ))
                    })
                })]
            }))
        }
        f.Actions = a.default.div.withConfig({
            displayName: "InformationTable__Actions",
            componentId: "sc-1tzwdbw-0"
        })([""]),
        f.MobileCard = (0,
        a.default)(l.Zb).withConfig({
            displayName: "InformationTable__MobileCard",
            componentId: "sc-1tzwdbw-1"
        })(["padding:16px;box-shadow:0px 6px 12px rgba(185,189,208,0.4);display:grid;gap:8px;& > div{display:grid;grid-auto-flow:column;justify-content:space-between;align-items:center;& > span{color:#0b1359;&:nth-of-type(1){", "}&:nth-of-type(2){", "}}}", "{margin-top:16px;}"], l.cp.YH.miniheader, l.cp.Vz.regular, f.Actions),
        f.Root = a.default.div.withConfig({
            displayName: "InformationTable__Root",
            componentId: "sc-1tzwdbw-2"
        })(["", "{& > *:last-child{text-align:inherit;justify-content:space-between;}}"], s.ZP.Row)
    },
    55547: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return y
            }
        });
        var o = n(80318)
          , i = n(41810)
          , r = n(41664)
          , a = n(67294)
          , l = n(94829)
          , s = n(84325)
          , d = n(18407)
          , c = n(79308)
          , u = n(99638)
          , p = n(27123)
          , m = n(55792)
          , f = n(67619)
          , h = n(9462)
          , v = n(67061)
          , x = n(61047)
          , g = n(85893);
        function y(e) {
            var t = e.hiddenTitle
              , n = e.token
              , b = e.seeAllHref
              , j = (0,
            i.$G)().t
              , w = (0,
            l.Z)(c.mq.down(c.AV.lg))
              , k = (0,
            l.Z)(c.mq.down(c.AV.sm))
              , C = function(e) {
                var t = (0,
                d.x)(e)
                  , n = (0,
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
                          , n = (0,
                        o.Z)(e, 2)
                          , i = n[0]
                          , r = n[1];
                        return t.now.map((function(e) {
                            var t = i[e.id]
                              , n = r[e.id]
                              , o = Number(e.reserveUSD) || 0
                              , a = Number(e.volumeUSD) || 0
                              , l = (0,
                            u.Kt)(Number(null === t || void 0 === t ? void 0 : t.volumeUSD) || 0, a)
                              , d = (0,
                            u.Kt)(Number(null === n || void 0 === n ? void 0 : n.volumeUSD) || 0, a)
                              , c = l * s.om
                              , m = o > 0 ? l * s.BY * 365 / o * 100 : 0;
                            return {
                                id: e.id,
                                name: (0,
                                p.X)(e.token0.symbol, e.token1.symbol),
                                liquidity: o,
                                volume24h: l,
                                volume7d: d,
                                fees24h: c,
                                apy: m,
                                token0: e.token0,
                                token1: e.token1
                            }
                        }
                        ))
                    }
                }
                ), [t]);
                return (0,
                h.Z3)({
                    items: n,
                    sortingOptions: {
                        initialKey: "liquidity"
                    }
                })
            }(n)
              , Z = C.items
              , _ = C.sorting
              , N = C.paginate
              , R = C.getItemNumber
              , P = [{
                title: j("Name"),
                sortKey: "name"
            }, {
                title: j("Liquidity"),
                sortKey: "liquidity"
            }, {
                title: j("Volume\n(24 hrs)"),
                sortKey: "volume24h",
                style: k && {
                    whiteSpace: "break-spaces"
                }
            }, !k && {
                title: j("Volume (7 d)"),
                sortKey: "volume7d"
            }, !w && {
                title: j("Fees (24 hr)"),
                sortKey: "fees24h"
            }, !w && {
                title: j("1y Fees/\nLiquidity"),
                sortKey: "apy"
            }];
            return (0,
            g.jsxs)(y.Root, {
                children: [!t && (0,
                g.jsx)(v.Z, {
                    seeAllHref: b,
                    children: j("Top Pairs")
                }), (0,
                g.jsx)(h.ZP, {
                    paginate: N,
                    header: (0,
                    g.jsx)(h.ZP.HeaderRow, {
                        children: P.filter(Boolean).map((function(e) {
                            return (0,
                            g.jsx)(h.ZP.SortableHeaderCell, {
                                sortKey: e.sortKey,
                                sorting: _,
                                style: e.style,
                                children: e.title
                            }, e.title)
                        }
                        ))
                    }),
                    children: Z ? Z.map((function(e, t) {
                        return (0,
                        g.jsx)(r.default, {
                            passHref: !0,
                            href: "/info/pairs/".concat(e.token0.id, "/").concat(e.token1.id),
                            children: (0,
                            g.jsxs)(h.ZP.ItemRow, {
                                as: "a",
                                children: [(0,
                                g.jsxs)(h.ZP.ItemCell, {
                                    children: [!k && (0,
                                    g.jsx)(x.Z.ItemNumber, {
                                        children: R(t)
                                    }), (0,
                                    g.jsx)(m.Z, {
                                        address0: e.token0.id,
                                        address1: e.token1.id,
                                        symbol0: e.token0.symbol,
                                        symbol1: e.token1.symbol
                                    }), (0,
                                    g.jsx)(x.Z.TokenName, {
                                        children: e.name
                                    })]
                                }), (0,
                                g.jsxs)(h.ZP.ItemCell, {
                                    children: ["$", (0,
                                    u.uf)(e.liquidity)]
                                }), (0,
                                g.jsxs)(h.ZP.ItemCell, {
                                    children: ["$", (0,
                                    u.uf)(e.volume24h)]
                                }), !k && (0,
                                g.jsxs)(h.ZP.ItemCell, {
                                    children: ["$", (0,
                                    u.uf)(e.volume7d)]
                                }), !w && (0,
                                g.jsxs)(h.ZP.ItemCell, {
                                    children: ["$", (0,
                                    u.uf)(e.fees24h)]
                                }), !w && (0,
                                g.jsx)(h.ZP.ItemCell, {
                                    children: (0,
                                    g.jsx)(f.Z, {
                                        value: e.apy
                                    })
                                })]
                            })
                        }, e.id)
                    }
                    )) : (0,
                    g.jsx)(h.ZP.ItemsLoader, {})
                })]
            })
        }
        y.Root = x.Z.Root
    },
    21385: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return l
            }
        });
        var o = n(41810)
          , i = n(41664)
          , r = n(79308)
          , a = n(85893);
        function l(e) {
            var t = e.token0
              , n = e.token1
              , l = (0,
            o.$G)().t;
            return (0,
            a.jsx)(i.default, {
                passHref: !0,
                href: ["/swap/".concat(t), n].filter(Boolean).join("/"),
                children: (0,
                a.jsx)(r.zx, {
                    as: "a",
                    children: l("Trade")
                })
            })
        }
    },
    16074: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/info/tokens/[id]", function() {
            return n(29418)
        }
        ])
    },
    11742: function(e) {
        e.exports = function() {
            var e = document.getSelection();
            if (!e.rangeCount)
                return function() {}
                ;
            for (var t = document.activeElement, n = [], o = 0; o < e.rangeCount; o++)
                n.push(e.getRangeAt(o));
            switch (t.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                t.blur();
                break;
            default:
                t = null
            }
            return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount || n.forEach((function(t) {
                    e.addRange(t)
                }
                )),
                t && t.focus()
            }
        }
    }
}, function(e) {
    e.O(0, [4408, 2178, 9744, 3597, 5092, 9774, 2888, 179], (function() {
        return t = 16074,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
