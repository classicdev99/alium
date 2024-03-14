(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    54290: function(e, t, n) {
        var i = n(6557);
        e.exports = function(e) {
            return "function" == typeof e ? e : i
        }
    },
    75472: function(e, t, n) {
        var i = n(82689)
          , a = n(1469);
        e.exports = function(e, t, n, l) {
            return null == e ? [] : (a(t) || (t = null == t ? [] : [t]),
            a(n = l ? void 0 : n) || (n = null == n ? [] : [n]),
            i(e, t, n))
        }
    },
    98913: function(e, t, n) {
        var i = n(22545)
          , a = n(54290)
          , l = n(40554)
          , r = 4294967295
          , o = Math.min;
        e.exports = function(e, t) {
            if ((e = l(e)) < 1 || e > 9007199254740991)
                return [];
            var n = r
              , s = o(e, r);
            t = a(t),
            e -= r;
            for (var c = i(s, t); ++n < e; )
                t(n);
            return c
        }
    },
    55553: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return a
            }
        });
        var i = n(85893)
          , a = function() {
            return (0,
            i.jsxs)("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                i.jsx)("path", {
                    d: "M9.00676 17.2H9.00672H9C4.47126 17.2 0.8 13.5287 0.8 9C0.8 4.47126 4.47126 0.8 9 0.8C13.5065 0.8 17.1642 4.43536 17.2 8.93326V16.5159C16.4403 16.1739 15.5858 15.9922 14.817 15.9922C14.3981 15.9922 13.9905 16.0454 13.601 16.1458C13.0996 16.275 12.5801 16.461 12.105 16.6312C11.9043 16.7031 11.7115 16.7722 11.5313 16.8329C10.8824 17.0516 10.3063 17.1995 9.73979 17.1995H9.11794V17.1995L9.10764 17.1996C9.07666 17.2 9.04475 17.2 9.00676 17.2Z",
                    stroke: "white",
                    strokeWidth: "1.6"
                }), (0,
                i.jsx)("path", {
                    opacity: "0.5",
                    d: "M8.99998 13.4683C6.53221 13.4683 4.53169 11.4678 4.53169 8.99998C4.53169 6.53221 6.53221 4.53169 8.99998 4.53169C11.4678 4.53169 13.4683 6.53221 13.4683 8.99998C13.4683 11.4678 11.4678 13.4683 8.99998 13.4683Z",
                    stroke: "white",
                    strokeWidth: "1.6"
                })]
            })
        }
    },
    88571: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return m
            }
        });
        var i = n(80318)
          , a = n(83789)
          , l = n(82212)
          , r = n(21891)
          , o = n(9279)
          , s = n(47646)
          , c = n(67294)
          , d = n(56120)
          , p = n(33754)
          , m = function(e, t) {
            var n = (0,
            s.x)().chainId
              , p = t || n
              , m = (null === e || void 0 === e ? void 0 : e.toLocaleUpperCase()) === (null === r.V || void 0 === r.V ? void 0 : r.V.defaultToken) || e === o.d
              , u = (0,
            d.e)().total
              , g = Object.keys(u).reduce((function(e, t) {
                var n = Object.values(u[t]);
                return e.push.apply(e, (0,
                a.Z)(n)),
                e
            }
            ), [])
              , h = g.find((function(t) {
                var n, i, a = (null === (n = t.symbol) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === (null === e || void 0 === e ? void 0 : e.toLocaleLowerCase()), l = (null === (i = t.address) || void 0 === i ? void 0 : i.toLocaleLowerCase()) === (null === e || void 0 === e ? void 0 : e.toLocaleLowerCase());
                return (a || l) && t.chainId === p
            }
            ))
              , x = (0,
            c.useMemo)((function() {
                return !(null !== g && void 0 !== g && g.length)
            }
            ), [null === g || void 0 === g ? void 0 : g.length])
              , v = f(e, p, x, h)
              , _ = (0,
            i.Z)(v, 2)
              , C = _[0]
              , E = _[1];
            return m ? [l.mX[p], x] : [h || C, x || E]
        }
          , f = function(e, t, n, i) {
            var a = (0,
            c.useMemo)((function() {
                return !n && !i
            }
            ), [n, i]);
            return (0,
            p.d)(a && e, a && t)
        }
    },
    83626: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return ps
            },
            default: function() {
                return ms
            }
        });
        var i = n(17949)
          , a = n(80318)
          , l = n(77985)
          , r = n(60813)
          , o = n(24451)
          , s = n(85754)
          , c = n(96440)
          , d = n(93578)
          , p = n(62639)
          , m = n(56617)
          , f = n(93350)
          , u = n(82212)
          , g = n(88571)
          , h = n(41810)
          , x = n(67294)
          , v = n(71317)
          , _ = n.n(v)
          , C = n(94829)
          , E = n(79308)
          , w = n(92911)
          , y = n(96015)
          , k = n(58132)
          , S = f.default.div.withConfig({
            displayName: "styled__LightChartsCard",
            componentId: "sc-xzmliu-0"
        })(["background:rgba(36,25,115,0.6);border:1px solid rgba(139,126,225,0.5);border-radius:24px;padding:24px 24px 16px 24px;position:relative;overflow:hidden;@media ", "{padding:24px 16px 16px;}"], E.mq.down(E.AV.lg))
          , A = f.default.div.withConfig({
            displayName: "styled__GradientCardOverlay",
            componentId: "sc-xzmliu-1"
        })([""])
          , b = f.default.div.withConfig({
            displayName: "styled__ChartLockedRoot",
            componentId: "sc-xzmliu-2"
        })(["height:68px;margin:16px 0px;"])
          , R = f.default.p.withConfig({
            displayName: "styled__Text",
            componentId: "sc-xzmliu-3"
        })(["", ""], E.cp.UR.regular)
          , j = f.default.p.withConfig({
            displayName: "styled__BolderText",
            componentId: "sc-xzmliu-4"
        })(["", ""], E.cp.w_.medium)
          , I = (0,
        f.default)(R).withConfig({
            displayName: "styled__SilverText",
            componentId: "sc-xzmliu-5"
        })(["color:", ";"], (function(e) {
            return e.theme.colors.desaturatedBlue
        }
        ))
          , B = n(85893)
          , J = function e(t) {
            t.token;
            var n = (0,
            h.$G)().t
              , i = (0,
            w.Ir)()
              , a = i.data
              , l = i.loading
              , r = (0,
            y.E)(null === a || void 0 === a ? void 0 : a.almCrossLiquidity, "date", "totalLiquidityUSD", !0)
              , o = r.charts
              , s = r.variant
              , c = r.lastData;
            return (0,
            B.jsxs)(e.Root, {
                children: [(0,
                B.jsx)(I, {
                    children: n("TVL - Rinance Finance")
                }), (0,
                B.jsx)(b, {
                    children: (0,
                    B.jsx)(p.wW, {
                        variant: s,
                        tooltip: (0,
                        B.jsx)(p.d5, {
                            variant: s
                        }),
                        data: o,
                        loading: l
                    })
                }), l ? (0,
                B.jsx)(p.Od, {
                    height: 10,
                    width: "100%"
                }) : (0,
                B.jsx)(j, {
                    children: (0,
                    k.I)(null === c || void 0 === c ? void 0 : c.value)
                }), (0,
                B.jsx)(A, {
                    variant: s
                })]
            })
        };
        J.Root = (0,
        f.default)(S).withConfig({
            displayName: "ChartLockedPlatfrom__Root",
            componentId: "sc-1qeelg3-0"
        })(["width:100%;"]);
        var O = n(88027)
          , F = n(99638)
          , M = function e(t) {
            var n, i, a = t.token, l = (0,
            h.$G)().t, r = (0,
            w.Ir)(), o = r.data, s = r.loading, c = (0,
            O.Z)(), d = (null === a || void 0 === a ? void 0 : a.symbol) || "-", m = (null === o || void 0 === o || null === (n = o.aliumTvl) || void 0 === n || n.staking[0],
            (0,
            y.E)(null === o || void 0 === o || null === (i = o.aliumTvl) || void 0 === i ? void 0 : i.staking, "date", "totalLiquidityUSD")), f = m.charts, u = m.variant, g = m.lastData, v = (0,
            x.useMemo)((function() {
                return (0,
                F.uf)(Number(null === g || void 0 === g ? void 0 : g.value) / Number(c))
            }
            ), [null === g || void 0 === g ? void 0 : g.value, c]);
            return (0,
            B.jsxs)(e.Root, {
                children: [(0,
                B.jsx)(I, {
                    children: l("TVL - Strong Holders Pools")
                }), (0,
                B.jsx)(b, {
                    children: (0,
                    B.jsx)(p.wW, {
                        variant: u,
                        tooltip: (0,
                        B.jsx)(p.d5, {
                            variant: u
                        }),
                        data: f,
                        loading: s
                    })
                }), (0,
                B.jsx)(e.Footer, {
                    children: s ? (0,
                    B.jsx)(p.Od, {
                        height: 10,
                        width: "100%"
                    }) : (0,
                    B.jsxs)(B.Fragment, {
                        children: [(0,
                        B.jsx)(j, {
                            children: (0,
                            k.I)(null === g || void 0 === g ? void 0 : g.value)
                        }), (0,
                        B.jsxs)(j, {
                            children: [d, " ", null === v || void 0 === v ? void 0 : v.toString()]
                        })]
                    })
                }), (0,
                B.jsx)(A, {
                    variant: u
                })]
            })
        };
        M.Root = (0,
        f.default)(S).withConfig({
            displayName: "ChartLockedShp__Root",
            componentId: "sc-1wnw4tk-0"
        })(["width:100%;"]),
        M.Footer = f.default.div.withConfig({
            displayName: "ChartLockedShp__Footer",
            componentId: "sc-1wnw4tk-1"
        })(["display:flex;gap:16px;flex-wrap:wrap;"]);
        var z, V = n(21891), U = n(55553), T = n(62268), L = n(92809), q = n(52209), N = n(82909), Q = n(64316);
        function H(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? H(Object(n), !0).forEach((function(t) {
                    (0,
                    L.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var P = {}
          , G = (0,
        N.Ps)(z || (z = (0,
        q.Z)(["\n    query getMarketCapByToken {\n  marketCapByToken {\n    id\n    totalMarketCap\n    almTrading24hVolume\n    priceChangePercent24hChange\n    trading24hVolume\n    trading24hVolumePercent\n    circulatingSupply\n    holdersCount\n    transfersCount\n  }\n}\n    "])));
        var Z, W = n(90982);
        function X() {
            return (X = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function K(e) {
            return x.createElement("svg", X({
                width: 8,
                height: 4,
                viewBox: "0 0 8 4",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Z || (Z = x.createElement("path", {
                d: "M4.285.283l3.032 3.035A.4.4 0 017.034 4H.965a.4.4 0 01-.282-.683L3.719.283a.4.4 0 01.566 0z",
                fill: "#24BA7B"
            })))
        }
        var Y = function e(t) {
            var n = t.percent
              , i = n > 0
              , a = null === n || void 0 === n ? void 0 : n.toFixed(0);
            return (0,
            B.jsxs)(e.BadgeStat, {
                isUpping: i,
                children: [i ? (0,
                B.jsx)(K, {
                    width: 7,
                    height: 4
                }) : "", a, "%"]
            })
        };
        Y.BadgeStat = f.default.span.withConfig({
            displayName: "PriceBadgeStat__BadgeStat",
            componentId: "sc-s2evqa-0"
        })(["display:flex;justify-content:center;align-items:center;gap:5px;background:", ";border-radius:4px;padding:2px 4px;", " color:", ";width:fit-content;svg{path{fill:", ";}}"], (function(e) {
            e.theme;
            return e.isUpping ? "rgba(36, 186, 123, 0.3)" : "#FF4D004D"
        }
        ), E.cp.lA.demiBold, (function(e) {
            var t = e.theme
              , n = e.isUpping;
            return (0,
            W.e)(t, n ? "positive" : "negative").color
        }
        ), (function(e) {
            var t = e.isUpping
              , n = e.theme;
            return (0,
            W.e)(n, t ? "positive" : "negative").color
        }
        ));
        var $ = function e(t) {
            var n = t.token
              , a = function(e) {
                var t = D(D({}, P), e);
                return Q.a(G, t)
            }()
              , l = a.data
              , r = a.loading
              , o = null === l || void 0 === l ? void 0 : l.marketCapByToken
              , s = (0,
            h.$G)().t
              , c = (null === n || void 0 === n ? void 0 : n.symbol) || "-"
              , d = [{
                title: s("24 Hour Trading Volume"),
                value: (0,
                k.I)(null === o || void 0 === o ? void 0 : o.almTrading24hVolume, {
                    maximumFractionDigits: 0
                })
            }, {
                title: s("Circulating Supply"),
                value: "".concat((0,
                F.uf)(null === o || void 0 === o ? void 0 : o.circulatingSupply), " ").concat(c)
            }, {
                title: s("Holders"),
                value: s("{{holdersCount}} addresses", {
                    holdersCount: null === o || void 0 === o ? void 0 : o.holdersCount
                })
            }, {
                title: s("Transfers"),
                value: "".concat((0,
                F.uf)(null === o || void 0 === o ? void 0 : o.transfersCount))
            }];
            return (0,
            B.jsxs)(e.Root, {
                children: [(0,
                B.jsxs)(e.Head, {
                    children: [(0,
                    B.jsx)(e.TokenLogo, {
                        currency: n
                    }), (0,
                    B.jsx)(R, {
                        children: s("{{symbol}} Token", {
                            symbol: c
                        })
                    })]
                }), (0,
                B.jsxs)(e.MarketCap, {
                    children: [(0,
                    B.jsx)(I, {
                        children: s("Market Cap")
                    }), (0,
                    B.jsx)(e.CapStatistic, {
                        children: r ? (0,
                        B.jsx)(p.Od, {
                            height: 20,
                            width: 100
                        }) : (0,
                        B.jsxs)(B.Fragment, {
                            children: [(0,
                            B.jsx)(e.CaptionLabel, {
                                children: (0,
                                k.I)(null === o || void 0 === o ? void 0 : o.totalMarketCap)
                            }), (0,
                            B.jsx)(Y, {
                                percent: null === o || void 0 === o ? void 0 : o.priceChangePercent24hChange
                            })]
                        })
                    })]
                }), (0,
                B.jsx)(e.List, {
                    children: null === d || void 0 === d ? void 0 : d.map((function(t, n) {
                        return (0,
                        B.jsxs)(e.Detail, {
                            children: [(0,
                            B.jsx)(I, {
                                children: null === t || void 0 === t ? void 0 : t.title
                            }), (0,
                            B.jsx)(j, {
                                children: r ? (0,
                                B.jsx)(p.Od, {}) : null === t || void 0 === t ? void 0 : t.value
                            })]
                        }, n)
                    }
                    ))
                }), (0,
                B.jsx)("a", {
                    href: "https://alium.finance/swap/".concat(V.V.defaultToken, "/0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11"),
                    target: "_blank",
                    onClick: function() {
                        i.m.events.buyAlmInMktCapByToken()
                    },
                    children: (0,
                    B.jsxs)(E.zx, {
                        children: [s("Buy {{symbol}}", {
                            symbol: c
                        }), (0,
                        B.jsx)(U.G, {})]
                    })
                }), (0,
                B.jsx)(A, {
                    variant: "positive"
                })]
            })
        };
        $.Root = (0,
        f.default)(S).withConfig({
            displayName: "MarketCapByToken__Root",
            componentId: "sc-1acfvxi-0"
        })(["max-width:486px;width:100%;height:100%;padding:19px 24px 24px 24px;@media ", "{max-width:350px;padding:19px 16px 24px 16px;}@media ", "{max-width:none;padding:16px;}@media ", "{}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm)),
        $.Head = f.default.div.withConfig({
            displayName: "MarketCapByToken__Head",
            componentId: "sc-1acfvxi-1"
        })(["display:flex;align-items:center;gap:16px;margin-bottom:40px;@media ", "{margin-bottom:24px;}"], E.mq.down(E.AV.md)),
        $.TokenLogo = (0,
        f.default)(T.Z).withConfig({
            displayName: "MarketCapByToken__TokenLogo",
            componentId: "sc-1acfvxi-2"
        })(["width:28px;height:28px;background:transparent;padding:0;box-shadow:none;"]),
        $.MarketCap = f.default.div.withConfig({
            displayName: "MarketCapByToken__MarketCap",
            componentId: "sc-1acfvxi-3"
        })(["margin-bottom:24px;@media ", "{margin-bottom:32px;}@media ", "{margin-bottom:24px;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md)),
        $.CapStatistic = f.default.div.withConfig({
            displayName: "MarketCapByToken__CapStatistic",
            componentId: "sc-1acfvxi-4"
        })(["display:flex;align-items:center;gap:8px;@media ", "{margin-top:16px;}"], E.mq.down(E.AV.lg)),
        $.List = f.default.div.withConfig({
            displayName: "MarketCapByToken__List",
            componentId: "sc-1acfvxi-5"
        })(["display:grid;grid-template-columns:max-content max-content;row-gap:32px;column-gap:24px;margin-bottom:44px;@media ", "{column-gap:8px;margin-bottom:34px;}@media ", "{grid-template-columns:repeat(4,max-content);row-gap:0px;column-gap:24px;margin-bottom:24px;}@media ", "{grid-template-columns:max-content max-content;row-gap:24px;column-gap:5px;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm)),
        $.Detail = f.default.div.withConfig({
            displayName: "MarketCapByToken__Detail",
            componentId: "sc-1acfvxi-6"
        })(["display:flex;flex-direction:column;gap:8px;"]),
        $.CaptionLabel = f.default.h3.withConfig({
            displayName: "MarketCapByToken__CaptionLabel",
            componentId: "sc-1acfvxi-7"
        })(["", " @media ", "{", "}"], E.cp.R0.demiBold, E.mq.down(E.AV.lg), E.cp.AO.demiBold);
        var ee, te = n(9462);
        function ne(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function ie(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ne(Object(n), !0).forEach((function(t) {
                    (0,
                    L.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ae = {}
          , le = (0,
        N.Ps)(ee || (ee = (0,
        q.Z)(["\n    query getMarketCapCurrencies {\n  marketCapCurrencies {\n    marketCap {\n      id\n      totalMarketCap\n      priceChangePercent24hChange\n      trading24hVolume\n      trading24hVolumePercent\n      circulatingSupply\n      holdersCount\n      transfersCount\n    }\n    tokens {\n      id\n      name\n      symbol\n      sparkline\n      tokenDayData {\n        dailyVolumeToken\n        dailyVolumeNative\n        dailyVolumeUSD\n        dailyTxns\n        totalLiquidityToken\n        totalLiquidityNative\n        totalLiquidityUSD\n        priceUSD\n        date\n      }\n    }\n  }\n}\n    "])));
        function re(e) {
            var t = ie(ie({}, ae), e);
            return Q.a(le, t)
        }
        var oe = n(22536)
          , se = n(39172);
        function ce() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0";
            return t ? null === (e = (0,
            k.I)(Number(t))) || void 0 === e ? void 0 : e.toString() : "0"
        }
        var de = n(11728)
          , pe = n(84356)
          , me = function e(t) {
            var n = t.items
              , i = t.height
              , a = t.getItemNumber
              , l = t.isAllowDisplay
              , r = (0,
            x.useMemo)((function() {
                return l("volume24H")
            }
            ), [l])
              , o = (0,
            x.useMemo)((function() {
                return l("circulatingSupply")
            }
            ), [l])
              , s = (0,
            x.useMemo)((function() {
                return l("mktCap")
            }
            ), [l])
              , c = (0,
            x.useMemo)((function() {
                return l("last7Days")
            }
            ), [l])
              , d = (0,
            x.useCallback)((function(t) {
                var n = t.data
                  , i = t.index
                  , l = t.style
                  , d = n[i]
                  , m = d.token
                  , f = d.price
                  , u = d.mktCap
                  , g = d.volume24H
                  , h = d.circulatingSupply
                  , x = d.id
                  , v = d.last7Days
                  , _ = d.chartVariant
                  , C = d.volumeTokens24H;
                return (0,
                B.jsx)("div", {
                    style: l,
                    className: "table-item",
                    children: (0,
                    B.jsxs)(te.ZP.ItemRow, {
                        children: [(0,
                        B.jsx)(te.ZP.ItemCell, {
                            children: (0,
                            B.jsx)(e.LightText, {
                                children: a(i)
                            })
                        }), (0,
                        B.jsx)(te.ZP.ItemCell, {
                            children: (0,
                            B.jsxs)(e.TokenInfo, {
                                children: [(0,
                                B.jsx)(T.Z, {
                                    currency: m,
                                    size: "24px",
                                    style: {
                                        minWidth: "24px",
                                        minHeight: "24px"
                                    }
                                }), (0,
                                B.jsxs)(e.TokenTickerInfo, {
                                    children: [(0,
                                    B.jsx)(e.TokenName, {
                                        children: null === m || void 0 === m ? void 0 : m.name
                                    }), (0,
                                    B.jsx)(e.TickerToken, {
                                        children: (0,
                                        F.Rr)(null === m || void 0 === m ? void 0 : m.symbol)
                                    })]
                                })]
                            })
                        }), (0,
                        B.jsx)(te.ZP.ItemCell, {
                            children: (0,
                            B.jsx)(e.LightText, {
                                children: f
                            })
                        }), r && (0,
                        B.jsx)(te.ZP.ItemCell, {
                            children: (0,
                            B.jsxs)(e.Volume24h, {
                                children: [(0,
                                B.jsx)(e.LightText, {
                                    children: g
                                }), (0,
                                B.jsx)(e.SilverText, {
                                    children: C
                                })]
                            })
                        }), o && (0,
                        B.jsx)(te.ZP.ItemCell, {
                            children: (0,
                            B.jsx)(e.LightText, {
                                children: h
                            })
                        }), s && (0,
                        B.jsx)(B.Fragment, {
                            children: (0,
                            B.jsx)(te.ZP.ItemCell, {
                                children: (0,
                                B.jsx)(e.LightText, {
                                    children: u
                                })
                            })
                        }), p.r8 && c && (0,
                        B.jsx)(te.ZP.ItemCell, {
                            children: (0,
                            B.jsx)(e.ChartRoot, {
                                children: (0,
                                B.jsx)(p.wW, {
                                    data: v,
                                    withGradient: !1,
                                    variant: _
                                })
                            })
                        })]
                    })
                }, x)
            }
            ), [a, r, o, s, c])
              , m = (0,
            x.useCallback)((function(e, t) {
                var n;
                return null === (n = t[e]) || void 0 === n ? void 0 : n.id
            }
            ), []);
            return null !== n && void 0 !== n && n.length ? (0,
            B.jsx)(e.VirtualRoot, {
                height: i,
                width: "100%",
                itemData: n,
                itemCount: n.length,
                itemSize: 56,
                itemKey: m,
                style: {
                    overflowY: "auto",
                    overflowX: "hidden"
                },
                children: d
            }) : (0,
            B.jsx)(te.ZP.ItemsLoader, {})
        };
        function fe() {
            var e = (0,
            h.$G)().t
              , t = (0,
            C.Z)(E.mq.down(E.AV.lg))
              , n = (0,
            C.Z)(E.mq.down(E.AV.md))
              , i = (0,
            C.Z)(E.mq.down(E.AV.sm))
              , a = function() {
                var e, t = (0,
                s.a)().chainId, n = re().data, i = null === n || void 0 === n || null === (e = n.marketCapCurrencies) || void 0 === e ? void 0 : e.tokens, a = (0,
                x.useMemo)((function() {
                    return null === i || void 0 === i ? void 0 : i.map((function(e, n) {
                        var i = e.id
                          , a = e.symbol
                          , l = e.sparkline
                          , r = e.tokenDayData
                          , o = null === l || void 0 === l ? void 0 : l.map((function(e) {
                            return (0,
                            oe.b)(0, e)
                        }
                        ))
                          , s = (0,
                        se.Q)(o)
                          , c = null === r || void 0 === r ? void 0 : r[0]
                          , d = ce(null === c || void 0 === c ? void 0 : c.priceUSD);
                        return {
                            id: i,
                            token: new u.WU(t,i,18,a),
                            price: d,
                            volume24Hrs: ce(0),
                            circulatingSupply: ce(null === c || void 0 === c ? void 0 : c.totalLiquidityUSD),
                            volume24H: ce(null === c || void 0 === c ? void 0 : c.dailyVolumeUSD),
                            volumeTokens24H: "".concat((0,
                            F.uf)(Number((null === c || void 0 === c ? void 0 : c.dailyVolumeToken) || "0")), " ").concat(a),
                            mktCap: "".concat((0,
                            F.uf)(Number((null === c || void 0 === c ? void 0 : c.totalLiquidityToken) || "0")), " ").concat(a),
                            last7Days: o,
                            chartVariant: s,
                            tokenDayData: r
                        }
                    }
                    ))
                }
                ), [t, i]);
                return (0,
                te.Z3)({
                    items: a,
                    sortingOptions: {
                        initialKey: "liquidity"
                    },
                    pageLimit: 2e3
                })
            }()
              , l = a.items
              , r = a.sorting
              , o = a.getItemNumber
              , c = null === l || void 0 === l ? void 0 : l.filter((function(e) {
                var t;
                return (null === e || void 0 === e || null === (t = e.tokenDayData) || void 0 === t ? void 0 : t.length) > 1
            }
            ))
              , d = (0,
            x.useMemo)((function() {
                return [{
                    title: "#",
                    sortKey: "id"
                }, {
                    title: e("Token"),
                    sortKey: "token"
                }, {
                    title: e("Price"),
                    sortKey: "price"
                }, !i && {
                    title: e("Volume\n(24 hrs)"),
                    sortKey: "volume24H"
                }, !i && {
                    title: e("Mkt Cap"),
                    sortKey: "mktCap"
                }, !n && {
                    title: e("Circulating Supply"),
                    sortKey: "circulatingSupply"
                }, p.r8 && !t && {
                    title: e("Last 7 Days"),
                    sortKey: "last7Days"
                }].filter(Boolean)
            }
            ), [t, n, i, e])
              , m = (0,
            x.useMemo)((function() {
                return d.map((function(e) {
                    return e.sortKey
                }
                ))
            }
            ), [d])
              , f = function(e) {
                return m.includes(e)
            };
            return (0,
            B.jsx)(fe.Root, {
                children: (0,
                B.jsx)(fe.Table, {
                    header: (0,
                    B.jsx)(fe.HeaderRow, {
                        children: d.map((function(e) {
                            return (0,
                            B.jsx)(te.ZP.SortableHeaderCell, {
                                sortKey: e.sortKey,
                                sorting: r,
                                style: e.style,
                                children: e.title
                            }, e.title)
                        }
                        ))
                    }),
                    children: (0,
                    B.jsx)(de.Z, {
                        disableWidth: !0,
                        children: function(e) {
                            var t = e.height;
                            return (0,
                            B.jsx)(me, {
                                isAllowDisplay: f,
                                items: c,
                                getItemNumber: o,
                                height: t
                            })
                        }
                    })
                })
            })
        }
        me.VirtualRoot = (0,
        f.default)(pe.t7).withConfig({
            displayName: "CapItems__VirtualRoot",
            componentId: "sc-kb9l1r-0"
        })(["&::-webkit-scrollbar{width:3px;}&::-webkit-scrollbar-track{background:transparent;}&::-webkit-scrollbar-thumb{background-color:transparent;border-radius:16px;background-color:", ";}"], (function(e) {
            return e.theme.colors.primaryBright
        }
        )),
        me.TokenName = f.default.p.withConfig({
            displayName: "CapItems__TokenName",
            componentId: "sc-kb9l1r-1"
        })(["", ";color:", ";margin-right:8px;"], E.cp.UR.regular, (function(e) {
            return e.theme.colors.grayish
        }
        )),
        me.TickerToken = f.default.p.withConfig({
            displayName: "CapItems__TickerToken",
            componentId: "sc-kb9l1r-2"
        })(["", ";color:white;opacity:0.4;"], E.cp.UR.regular),
        me.LightText = f.default.p.withConfig({
            displayName: "CapItems__LightText",
            componentId: "sc-kb9l1r-3"
        })(["", ";color:white;"], E.cp.UR.regular),
        me.SilverText = f.default.p.withConfig({
            displayName: "CapItems__SilverText",
            componentId: "sc-kb9l1r-4"
        })(["", ";color:", ";"], E.cp.UR.regular, (function(e) {
            return e.theme.colors.desaturatedBlue
        }
        )),
        me.TokenInfo = f.default.div.withConfig({
            displayName: "CapItems__TokenInfo",
            componentId: "sc-kb9l1r-5"
        })(["display:flex;align-items:center;gap:8px;"]),
        me.TokenTickerInfo = f.default.div.withConfig({
            displayName: "CapItems__TokenTickerInfo",
            componentId: "sc-kb9l1r-6"
        })(["flex-wrap:wrap;display:flex;align-items:center;"]),
        me.Volume24h = f.default.div.withConfig({
            displayName: "CapItems__Volume24h",
            componentId: "sc-kb9l1r-7"
        })([""]),
        me.ChartRoot = f.default.div.withConfig({
            displayName: "CapItems__ChartRoot",
            componentId: "sc-kb9l1r-8"
        })(["height:40px;width:100%;"]);
        var ue = (0,
        f.css)(["grid-template-columns:35px 190px repeat(6,140px);column-gap:12px;display:grid;@media ", "{grid-template-columns:35px 190px 90px repeat(4,120px);}@media ", "{grid-template-columns:35px 200px 100px repeat(2,130px);}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md));
        fe.Root = f.default.div.withConfig({
            displayName: "MarketCapCurrenciesTable__Root",
            componentId: "sc-15kpjka-0"
        })(["", "{box-shadow:none;background:transparent;}", "{padding:0;text-align:left;justify-content:start;}", "{", ";border-bottom:1px solid #302671;}"], te.ZP.Root, te.ZP.Cell, te.ZP.Row, ue),
        fe.Table = (0,
        f.default)(te.ZP).withConfig({
            displayName: "MarketCapCurrenciesTable__Table",
            componentId: "sc-15kpjka-1"
        })(["height:", "px;"], 240),
        fe.HeaderRow = f.default.div.withConfig({
            displayName: "MarketCapCurrenciesTable__HeaderRow",
            componentId: "sc-15kpjka-2"
        })(["", ";width:100%;button{text-transform:inherit;width:fit-content;background:transparent;", " color:", ";&:hover{background:transparent;}}"], ue, E.cp.lA.demiBold, (function(e) {
            return e.theme.colors.desaturatedBlue
        }
        ));
        var ge = function e() {
            var t, n = re(), i = n.data, a = n.loading, l = (0,
            o.$G)().t, r = null === i || void 0 === i || null === (t = i.marketCapCurrencies) || void 0 === t ? void 0 : t.marketCap, s = (0,
            x.useMemo)((function() {
                return [{
                    title: l("Market Capitalization"),
                    value: (0,
                    k.I)(null === r || void 0 === r ? void 0 : r.totalMarketCap),
                    percent: null === r || void 0 === r ? void 0 : r.priceChangePercent24hChange
                }, {
                    title: l("24h Trading Volume"),
                    value: (0,
                    k.I)(null === r || void 0 === r ? void 0 : r.trading24hVolume),
                    percent: null === r || void 0 === r ? void 0 : r.trading24hVolumePercent
                }]
            }
            ), [null === r || void 0 === r ? void 0 : r.priceChangePercent24hChange, null === r || void 0 === r ? void 0 : r.totalMarketCap, null === r || void 0 === r ? void 0 : r.trading24hVolume, null === r || void 0 === r ? void 0 : r.trading24hVolumePercent, l]), c = (0,
            F.uf)(null === r || void 0 === r ? void 0 : r.totalMarketCap, {
                notation: "compact"
            });
            return (0,
            B.jsxs)(e.Root, {
                children: [(0,
                B.jsxs)(e.Head, {
                    children: [(0,
                    B.jsx)("h3", {
                        children: l("Cryptocurrency Prices by Market Cap")
                    }), (0,
                    B.jsx)(e.TextWithBadge, {
                        children: a ? (0,
                        B.jsx)(p.Od, {
                            height: 22,
                            width: "40%"
                        }) : (0,
                        B.jsxs)(B.Fragment, {
                            children: [l("Market cap of Rinance Swap DEX Token - ALM today is {{marketCap}}, a", {
                                marketCap: c
                            }), (0,
                            B.jsx)(Y, {
                                percent: null === r || void 0 === r ? void 0 : r.priceChangePercent24hChange
                            }), l("change"), (0,
                            B.jsx)("p", {
                                children: l("in the last 24 hours")
                            })]
                        })
                    })]
                }), (0,
                B.jsx)(e.Summary, {
                    children: null === s || void 0 === s ? void 0 : s.map((function(t, n) {
                        return (0,
                        B.jsx)(e.Statistic, {
                            isUpping: (null === t || void 0 === t ? void 0 : t.percent) > 0,
                            children: (0,
                            B.jsxs)("div", {
                                children: [(0,
                                B.jsx)(I, {
                                    children: a ? (0,
                                    B.jsx)(p.Od, {
                                        width: 200,
                                        height: 22,
                                        marginBottom: "5px"
                                    }) : null === t || void 0 === t ? void 0 : t.title
                                }), (0,
                                B.jsxs)(e.StatisticWithBadge, {
                                    children: [(0,
                                    B.jsx)("h4", {
                                        children: a ? (0,
                                        B.jsx)(p.Od, {
                                            width: 165,
                                            height: 30
                                        }) : null === t || void 0 === t ? void 0 : t.value
                                    }), !a && (0,
                                    B.jsx)(Y, {
                                        percent: null === t || void 0 === t ? void 0 : t.percent
                                    })]
                                })]
                            })
                        }, n)
                    }
                    ))
                }), (0,
                B.jsx)(fe, {})]
            })
        };
        ge.Root = (0,
        f.default)(S).withConfig({
            displayName: "PricesByMarketCap__Root",
            componentId: "sc-im7x78-0"
        })(["padding:24px;background:transparent;@media ", "{padding:24px 16px 11px 16px;}"], E.mq.down(E.AV.sm)),
        ge.TextWithBadge = (0,
        f.default)(I).withConfig({
            displayName: "PricesByMarketCap__TextWithBadge",
            componentId: "sc-im7x78-1"
        })(["display:flex;gap:6px;align-items:center;flex-wrap:wrap;span{display:inline-flex;}@media ", "{display:block;max-width:320px;span{margin-left:6px;margin-right:6px;}}"], E.mq.down(E.AV.sm)),
        ge.Head = f.default.div.withConfig({
            displayName: "PricesByMarketCap__Head",
            componentId: "sc-im7x78-2"
        })(["display:flex;flex-direction:column;gap:16px;h3{", " color:white;text-align:left;}margin-bottom:32px;@media ", "{h3{", "}}@media ", "{gap:8px;margin-bottom:24px;h3{", "}}"], E.cp.AO.demiBold, E.mq.down(E.AV.md), E.cp.$z.demiBold, E.mq.down(E.AV.sm), E.cp.KG.demiBold),
        ge.Summary = f.default.div.withConfig({
            displayName: "PricesByMarketCap__Summary",
            componentId: "sc-im7x78-3"
        })(["display:flex;gap:48px;margin-bottom:32px;@media ", "{gap:16px;flex-direction:column;}"], E.mq.down(E.AV.sm)),
        ge.Statistic = f.default.div.withConfig({
            displayName: "PricesByMarketCap__Statistic",
            componentId: "sc-im7x78-4"
        })(["display:flex;gap:16px;&:before{display:block;content:'';width:2px;height:100%;background:", ";}@media ", "{height:60px;}"], (function(e) {
            var t = e.theme
              , n = e.isUpping;
            return (0,
            W.e)(t, n ? "positive" : "negative").color
        }
        ), E.mq.down(E.AV.sm)),
        ge.StatisticWithBadge = f.default.div.withConfig({
            displayName: "PricesByMarketCap__StatisticWithBadge",
            componentId: "sc-im7x78-5"
        })(["display:flex;align-items:center;gap:8px;h4{", " color:white;}"], E.cp.TM.demiBold);
        var he, xe = n(41664), ve = n(4536);
        function _e(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Ce(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? _e(Object(n), !0).forEach((function(t) {
                    (0,
                    L.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _e(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Ee = {}
          , we = (0,
        N.Ps)(he || (he = (0,
        q.Z)(["\n    query getUsdtChartByToken {\n  usdtChartByToken {\n    id\n    priceUSD\n    date\n    token {\n      id\n      name\n      symbol\n    }\n  }\n}\n    "])));
        var ye, ke = function e(t) {
            t.token;
            var n, i = t.className, a = (0,
            h.$G)().t, l = function(e) {
                var t = Ce(Ce({}, Ee), e);
                return Q.a(we, t)
            }(), r = l.data, o = l.loading, s = (0,
            y.E)(null === r || void 0 === r ? void 0 : r.usdtChartByToken, "date", "priceUSD", !0), c = s.charts, d = s.variant, m = null === c || void 0 === c || null === (n = c.slice) || void 0 === n ? void 0 : n.call(c, (null === c || void 0 === c ? void 0 : c.length) - 31);
            return (0,
            B.jsxs)(e.Root, {
                className: i || "token-chart-usdt",
                children: [(0,
                B.jsxs)(e.Head, {
                    children: [(0,
                    B.jsx)(I, {
                        children: a("Rinance Finance to USD Chart")
                    }), (0,
                    B.jsx)(xe.default, {
                        href: "".concat(ve.Z.infoTokens, "/0x7c38870e93a1f959cb6c533eb10bbc3e438aac11"),
                        passHref: !0,
                        children: (0,
                        B.jsxs)(e.Link, {
                            children: [a("Go to charts"), (0,
                            B.jsx)(p.xP, {
                                color: "white"
                            })]
                        })
                    })]
                }), (0,
                B.jsx)(e.ChartRoot, {
                    children: (0,
                    B.jsx)(p.wW, {
                        variant: d,
                        tooltip: (0,
                        B.jsx)(p.d5, {
                            variant: d,
                            numberFormat: {
                                maximumFractionDigits: 3
                            }
                        }),
                        data: m,
                        loading: o
                    })
                }), (0,
                B.jsx)(A, {
                    variant: d
                })]
            })
        };
        ke.Root = (0,
        f.default)(S).withConfig({
            displayName: "TokenChartToUsdt__Root",
            componentId: "sc-19b1uyl-0"
        })([""]),
        ke.ChartRoot = f.default.div.withConfig({
            displayName: "TokenChartToUsdt__ChartRoot",
            componentId: "sc-19b1uyl-1"
        })(["height:164px;width:100%;margin-top:28px;"]),
        ke.Head = f.default.div.withConfig({
            displayName: "TokenChartToUsdt__Head",
            componentId: "sc-19b1uyl-2"
        })(["display:flex;justify-content:space-between;"]),
        ke.Link = f.default.a.withConfig({
            displayName: "TokenChartToUsdt__Link",
            componentId: "sc-19b1uyl-3"
        })(["", " text-decoration-line:underline;display:flex;align-items:center;gap:6px;cursor:pointer;"], E.cp.UR.demiBold),
        function(e) {
            e[e.CHART_USDT = 0] = "CHART_USDT",
            e[e.CHART_LOCKED_SHP = 1] = "CHART_LOCKED_SHP",
            e[e.CHART_LOCKED_PLATFROM = 2] = "CHART_LOCKED_PLATFROM"
        }(ye || (ye = {}));
        var Se = function e() {
            var t = (0,
            x.useState)(ye.CHART_USDT)
              , n = t[0]
              , i = t[1]
              , l = (0,
            C.Z)(E.mq.down(E.AV.sm))
              , r = (0,
            h.$G)().t
              , o = (0,
            g.y)("0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11", u.a_.MAINNET)
              , s = (0,
            a.Z)(o, 1)[0]
              , c = [{
                title: r("USD Chart"),
                key: ye.CHART_USDT
            }, {
                title: r("Locked in SHP"),
                key: ye.CHART_LOCKED_SHP
            }, {
                title: r("Locked on Rinance"),
                key: ye.CHART_LOCKED_PLATFROM
            }]
              , d = (0,
            x.useCallback)((function(e, t) {
                if (n === e || !l)
                    return t
            }
            ), [n, l])
              , p = (0,
            x.useMemo)((function() {
                return {
                    chartUsdt: d(ye.CHART_USDT, (0,
                    B.jsx)(ke, {
                        token: s
                    })),
                    lockedShp: d(ye.CHART_LOCKED_SHP, (0,
                    B.jsx)(M, {
                        token: s
                    })),
                    lockedPlatfrom: d(ye.CHART_LOCKED_PLATFROM, (0,
                    B.jsx)(J, {
                        token: s
                    }))
                }
            }
            ), [d, s]);
            return (0,
            B.jsx)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: (0,
                B.jsx)(e.Wrapper, {
                    children: (0,
                    B.jsxs)(e.Root, {
                        children: [(0,
                        B.jsxs)(e.MarketWithCharts, {
                            children: [(0,
                            B.jsx)($, {
                                token: s
                            }), l && (0,
                            B.jsx)(e.Tabs, {
                                children: null === c || void 0 === c ? void 0 : c.map((function(t) {
                                    return (0,
                                    B.jsx)(e.Tab, {
                                        onClick: function() {
                                            return i(null === t || void 0 === t ? void 0 : t.key)
                                        },
                                        active: n === (null === t || void 0 === t ? void 0 : t.key),
                                        children: null === t || void 0 === t ? void 0 : t.title
                                    }, null === t || void 0 === t ? void 0 : t.key)
                                }
                                ))
                            }), (0,
                            B.jsxs)(e.GroupCharts, {
                                children: [p.chartUsdt, (0,
                                B.jsxs)(e.ValueLockedCharts, {
                                    children: [p.lockedShp, p.lockedPlatfrom]
                                })]
                            })]
                        }), (0,
                        B.jsx)(ge, {})]
                    })
                })
            })
        };
        Se.Wrapper = f.default.div.withConfig({
            displayName: "AnalyticsTotalCharts__Wrapper",
            componentId: "sc-1b3gd0v-0"
        })(["display:flex;justify-content:center;margin:120px 0px;@media ", "{margin:80px 0px;}@media ", "{margin:56px 0px 0px;}"], E.mq.down(E.AV.md), E.mq.down(E.AV.sm)),
        Se.Root = f.default.div.withConfig({
            displayName: "AnalyticsTotalCharts__Root",
            componentId: "sc-1b3gd0v-1"
        })(["background:", ";max-width:1280px;width:100%;border-radius:32px;color:white;gap:24px;padding:40px;display:flex;flex-direction:column;overflow:hidden;@media ", "{max-width:1024px;padding:32px;}@media ", "{max-width:768px;padding:24px;}@media ", "{padding:10px;max-width:none;}"], (function(e) {
            return e.theme.colors.veryDarkBlue
        }
        ), E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm)),
        Se.MarketWithCharts = f.default.div.withConfig({
            displayName: "AnalyticsTotalCharts__MarketWithCharts",
            componentId: "sc-1b3gd0v-2"
        })(["max-height:465px;display:flex;gap:24px;@media ", "{gap:16px;max-height:455px;}@media ", "{flex-direction:column;max-height:none;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md)),
        Se.Tabs = f.default.div.withConfig({
            displayName: "AnalyticsTotalCharts__Tabs",
            componentId: "sc-1b3gd0v-3"
        })(["justify-content:space-between;display:flex;"]),
        Se.Tab = (0,
        f.default)(p.zx).withConfig({
            displayName: "AnalyticsTotalCharts__Tab",
            componentId: "sc-1b3gd0v-4"
        })(["height:32px;", " width:100%;padding:6px;", ""], E.cp.lA.demiBold, (function(e) {
            var t = e.active
              , n = e.theme;
            return !t && (0,
            f.css)(["background:transparent;color:", ";"], n.colors.desaturatedBlue)
        }
        )),
        Se.GroupCharts = f.default.div.withConfig({
            displayName: "AnalyticsTotalCharts__GroupCharts",
            componentId: "sc-1b3gd0v-5"
        })(["gap:24px;display:flex;flex-direction:column;width:100%;@media ", "{gap:16px;}@media ", "{", ",", ",", "{height:254px;}", ",", "{height:76px;margin:79px 0px 16px 0px;}}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.sm), ke.Root, M.Root, J.Root, ke.ChartRoot, b),
        Se.ValueLockedCharts = f.default.div.withConfig({
            displayName: "AnalyticsTotalCharts__ValueLockedCharts",
            componentId: "sc-1b3gd0v-6"
        })(["gap:24px;display:flex;justify-content:space-between;@media ", "{gap:14px;}@media ", "{gap:16px;}@media ", "{flex-direction:column;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm));
        var Ae = Se
          , be = n(78231)
          , Re = (n(52535),
        n(64764),
        n(6410))
          , je = "/images/announcements-patterns"
          , Ie = {
            swap: "".concat(je, "/swap-pattern.png"),
            liquidity: "".concat(je, "/liquidity-pattern.png"),
            okc: "".concat(je, "/okc-integration.png"),
            teaser: "".concat(je, "/app-teaser.png"),
            incentive: "".concat(je, "/monthly-incentive-programs.png"),
            roadmap: "".concat(je, "/roadmap-pattern.png")
        }
          , Be = function(e) {
            var t = e.className
              , n = e.children
              , i = e.item;
            return (0,
            B.jsxs)(Je, {
                className: t,
                "data-pattern": i.pattern,
                children: [n, (0,
                B.jsx)(Oe, {
                    pattern: i.pattern
                })]
            })
        }
          , Je = f.default.div.withConfig({
            displayName: "AnnoncementSlide__AnnoncementSlideContainer",
            componentId: "sc-1nss3xz-0"
        })(["", ""], (function(e) {
            e.theme;
            return (0,
            f.css)(["width:282px;height:440px;overflow:hidden;border-radius:24px;position:relative;padding:24px;display:flex;flex-direction:column;align-items:flex-start;transition:border-radius 0.5s;border-radius:24px;&:hover{border-radius:32px;& ", "{z-index:-2;transform:scale(1.2);}}"], Oe)
        }
        ))
          , Oe = f.default.div.withConfig({
            displayName: "AnnoncementSlide__Background",
            componentId: "sc-1nss3xz-1"
        })(["width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;", " background-repeat:no-repeat;background-size:cover;background-image:url(", ");transition:all 1.5s;"], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["background-color:", ";"], t.colors.governorBay)
        }
        ), (function(e) {
            var t = e.pattern;
            return Ie[t]
        }
        ))
          , Fe = (f.default.span.withConfig({
            displayName: "AnnouncementSliderstyled__Rinance",
            componentId: "sc-1cayiln-0"
        })(["", ""], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.greenHaze)
        }
        )),
        f.default.section.withConfig({
            displayName: "AnnouncementSliderstyled__AnnouncementSliderSection",
            componentId: "sc-1cayiln-1"
        })(["max-width:1190px;width:100%;margin:0 auto;display:flex;align-items:flex-end;@media ", "{max-width:1200px;}@media ", "{padding:0 31px;display:block;}@media ", "{padding:0 24px;}@media ", "{padding:0 11px;}"], E.mq.down(E.AV.xl + 4), E.mq.down(E.AV.md + 4), E.mq.down(E.AV.sm + 4), E.mq.down(E.AV.esm + 4)))
          , Me = f.default.div.withConfig({
            displayName: "AnnouncementSliderstyled__Header",
            componentId: "sc-1cayiln-2"
        })(["width:", "px;min-height:321px;", " border-radius:32px;margin-bottom:-16px;margin-right:-138px;padding:113px ", "px 70px;position:relative;@media ", "{display:flex;width:100%;padding:48px 0;min-height:auto;margin:0;border:none;align-items:center;}@media ", "{display:flex;flex-direction:column;padding:15px 0;padding-top:0;}"], 546, (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["border:1px solid ", ";"], t.colors.blueHaze)
        }
        ), 32, E.mq.down(E.AV.md + 4), E.mq.down(500))
          , ze = f.default.ul.withConfig({
            displayName: "AnnouncementSliderstyled__SocialList",
            componentId: "sc-1cayiln-3"
        })(["width:calc(", "px - ", "px * 2);padding:33px 0;", " position:absolute;top:0;left:50%;transform:translateX(-50%);display:flex;list-style:none;gap:32px;@media ", "{position:static;border:none;order:2;transform:translateX(0);margin-left:30px;width:auto;margin-right:auto;}@media ", "{margin-left:auto;padding:25px 0;}"], 546, 32, (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["border-bottom:1px solid ", ";"], t.colors.blueHaze)
        }
        ), E.mq.down(E.AV.md + 4), E.mq.down(500))
          , Ve = f.default.li.withConfig({
            displayName: "AnnouncementSliderstyled__SocialItem",
            componentId: "sc-1cayiln-4"
        })(["&:hover{path{fill:#5c5f6b;}}"])
          , Ue = f.default.h3.withConfig({
            displayName: "AnnouncementSliderstyled__HeaderTitle",
            componentId: "sc-1cayiln-5"
        })(["font-family:'TT Fors Trial';font-style:normal;font-weight:600;font-size:33px;line-height:40px;letter-spacing:1px;", " max-width:328px;@media ", "{max-width:100%;order:1;}@media ", "{text-align:center;font-size:24px;}"], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.heading)
        }
        ), E.mq.down(E.AV.md + 4), E.mq.down(500))
          , Te = f.default.div.withConfig({
            displayName: "AnnouncementSliderstyled__ActionsContainer",
            componentId: "sc-1cayiln-6"
        })(["position:absolute;bottom:24px;left:33px;display:flex;align-items:center;@media ", "{position:static;order:3;}@media ", "{display:none;}& .progress-bar{width:40px;height:40px;margin-left:-40px;}"], E.mq.down(E.AV.md + 4), E.mq.down(E.AV.sm + 4))
          , Le = f.default.button.withConfig({
            displayName: "AnnouncementSliderstyled__PreviousBtn",
            componentId: "sc-1cayiln-7"
        })(["width:40px;height:20px;margin-right:10px;background-image:url(\"data:image/svg+xml,%3Csvg width='32' height='10' viewBox='0 0 32 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 1L1 5L5 9' stroke='%238990A5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1 5L31 5' stroke='%238990A5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\");&:hover{background-image:url(\"data:image/svg+xml,%3Csvg width='32' height='11' viewBox='0 0 32 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 1.65039L1 5.65039L5 9.65039' stroke='%236C5DD3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1 5.65039L31 5.65039' stroke='%236C5DD3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\");}background-repeat:no-repeat;background-position:center;cursor:pointer;border:none;background-color:transparent;"])
          , qe = (0,
        f.default)(Le).withConfig({
            displayName: "AnnouncementSliderstyled__NextBtn",
            componentId: "sc-1cayiln-8"
        })(["transform:rotate(180deg);"])
          , Ne = f.default.div.withConfig({
            displayName: "AnnouncementSliderstyled__SwiperWrapper",
            componentId: "sc-1cayiln-9"
        })(["position:relative;height:440px;"])
          , Qe = f.default.div.withConfig({
            displayName: "AnnouncementSliderstyled__SwiperContainer",
            componentId: "sc-1cayiln-10"
        })(["position:absolute;height:440px;top:0;left:0;width:1200px;"])
          , He = (f.default.div.withConfig({
            displayName: "AnnouncementSliderstyled__ComingLabel",
            componentId: "sc-1cayiln-11"
        })(["", " color:#24ba7b;padding:6px 10px;background:rgba(36,186,123,0.1);border:1px solid #24ba7b;display:inline-block;border-radius:8px;margin-bottom:16px;"], E.cp.lA.demiBold),
        f.default.div.withConfig({
            displayName: "AnnouncementSliderstyled__SlideTitle",
            componentId: "sc-1cayiln-12"
        })(["", " ", ""], E.cp.TM.demiBold, (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";margin-bottom:8px;"], t.colors.default)
        }
        )))
          , De = f.default.div.withConfig({
            displayName: "AnnouncementSliderstyled__SlideSubTitle",
            componentId: "sc-1cayiln-13"
        })(["", " max-width:224px;", " opacity:0.7;"], E.cp.UR.regular, (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.default)
        }
        ))
          , Pe = (f.default.p.withConfig({
            displayName: "AnnouncementSliderstyled__SlideSubNotable",
            componentId: "sc-1cayiln-14"
        })(["", " max-width:224px;", " opacity:0.7;"], E.cp.UR.demiBold, (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.shamrock)
        }
        )),
        [{
            href: p.NJ.telegram,
            Icon: be.YG
        }, {
            href: p.NJ.twitter,
            Icon: be.Zm
        }, {
            href: p.NJ.medium,
            Icon: be.OW
        }])
          , Ge = function(e) {
            var t = e.className
              , n = (0,
            x.useState)(null)
              , i = n[0]
              , a = n[1]
              , l = (0,
            h.$G)().t
              , r = (0,
            x.useCallback)((function() {
                i && (null === i || void 0 === i || i.slidePrev())
            }
            ), [i])
              , o = (0,
            x.useCallback)((function() {
                i && (null === i || void 0 === i || i.slideNext())
            }
            ), [i])
              , s = (0,
            x.useMemo)((function() {
                return [{
                    content: (0,
                    B.jsxs)(B.Fragment, {
                        children: [(0,
                        B.jsx)(He, {
                            children: l("Multi-Chain DEX for Your Android & iOS")
                        }), (0,
                        B.jsx)(De, {
                            children: l("Available on Play Market and Apple Store")
                        })]
                    }),
                    pattern: "teaser"
                }, {
                    content: (0,
                    B.jsxs)(B.Fragment, {
                        children: [(0,
                        B.jsx)(He, {
                            children: l("Roadmap Update")
                        }), (0,
                        B.jsx)(De, {
                            children: l("New features, events and incentives. Rinance is becoming a better place!")
                        })]
                    }),
                    pattern: "roadmap"
                }, {
                    content: (0,
                    B.jsxs)(B.Fragment, {
                        children: [(0,
                        B.jsx)(He, {
                            children: l("Break the chains!")
                        }), (0,
                        B.jsx)(De, {
                            children: l("Trade and swap tokens between chains with Rinance multi-chain DEX Fastest way to swap tokens between blockchains.")
                        })]
                    }),
                    pattern: "swap"
                }, {
                    content: (0,
                    B.jsxs)(B.Fragment, {
                        children: [(0,
                        B.jsx)(He, {
                            children: l("Monthly Incentive Programs")
                        }), (0,
                        B.jsx)(De, {
                            children: l("Participate in contests and challenges, and receive additional rewards")
                        })]
                    }),
                    pattern: "incentive"
                }, {
                    content: (0,
                    B.jsxs)(B.Fragment, {
                        children: [(0,
                        B.jsx)(He, {
                            children: l("Transfer Liquidity Instantly")
                        }), (0,
                        B.jsx)(De, {
                            children: l("Migrate with most profitable rates across various protocols and exchanges")
                        })]
                    }),
                    pattern: "liquidity"
                }, {
                    content: (0,
                    B.jsxs)(B.Fragment, {
                        children: [(0,
                        B.jsx)(He, {
                            children: l("OKC Integration")
                        }), (0,
                        B.jsx)(De, {
                            children: l("Rinance Finance rolled up on OKX Chain")
                        })]
                    }),
                    pattern: "okc"
                }]
            }
            ), [l]);
            return (0,
            B.jsx)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: (0,
                B.jsxs)(Fe, {
                    className: t,
                    children: [(0,
                    B.jsxs)(Me, {
                        children: [(0,
                        B.jsx)(ze, {
                            children: Pe.map((function(e, t) {
                                return (0,
                                B.jsx)(Ve, {
                                    children: (0,
                                    B.jsx)("a", {
                                        href: e.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: (0,
                                        B.jsx)(e.Icon, {})
                                    })
                                }, t)
                            }
                            ))
                        }), (0,
                        B.jsx)(Ue, {
                            children: l("Rinance announcements")
                        }), (0,
                        B.jsxs)(Te, {
                            children: [(0,
                            B.jsx)(Le, {
                                onClick: r
                            }), (0,
                            B.jsx)(qe, {
                                onClick: o
                            }), (0,
                            B.jsx)(p.D8, {
                                className: "progress-bar",
                                callBack: o
                            })]
                        })]
                    }), (0,
                    B.jsx)(Ne, {
                        children: (0,
                        B.jsx)(Qe, {
                            children: (0,
                            B.jsx)(Re.tq, {
                                slidesPerView: 4,
                                loop: !0,
                                spaceBetween: 24,
                                onSwiper: a,
                                children: s.map((function(e, t) {
                                    return (0,
                                    B.jsx)(Re.o5, {
                                        children: (0,
                                        B.jsx)(Be, {
                                            item: e,
                                            children: e.content
                                        })
                                    }, t)
                                }
                                ))
                            })
                        })
                    })]
                })
            })
        }
          , Ze = n(71568)
          , We = function() {
            return (0,
            B.jsx)(Xe, {
                src: "images/NewHomePage/IconGlobe.png",
                alt: "Globe"
            })
        }
          , Xe = f.default.img.withConfig({
            displayName: "IconGlobe__MainImage",
            componentId: "sc-7sf1d6-0"
        })(["width:56px;height:56px;"])
          , Ke = function e() {
            var t = (0,
            h.$G)().t
              , n = (0,
            C.Z)(E.mq.down(E.AV.sm));
            return (0,
            B.jsx)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: (0,
                B.jsxs)(e.Wrapper, {
                    children: []
                })
            })
        };
        Ke.Wrapper = f.default.div.withConfig({
            displayName: "JoinTheCommunityBanner__Wrapper",
            componentId: "sc-xtsvay-0"
        })(["max-width:1200px;margin:0 auto;position:relative;"]),
        Ke.Title = f.default.h3.withConfig({
            displayName: "JoinTheCommunityBanner__Title",
            componentId: "sc-xtsvay-1"
        })(["text-align:left;", ";color:", ";@media ", "{text-align:center;", ";}"], E.cp.h3, Ze.dw.default, E.mq.down(E.AV.sm), E.cp.h6),
        Ke.List = f.default.div.withConfig({
            displayName: "JoinTheCommunityBanner__List",
            componentId: "sc-xtsvay-2"
        })(["padding:84px 40px;border-radius:32px;background:#6c5dd3;background-image:radial-gradient(50% 50% at 50% 10%,#cbc4ff -90%,rgba(203,195,255,0) 150%);display:flex;justify-content:space-between;align-items:center;@media ", "{padding:84px 28px;}@media ", "{margin:80px 32px 0 32px;flex-direction:column;padding:40px 20px;}@media ", "{margin:80px 24px 0 24px;}@media ", "{margin:56px 10px 9px 10px;padding:39px 5px 30px 5px;}"], E.mq.down(E.AV.xl), E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm));
        var Ye, $e, et = f.default.div.withConfig({
            displayName: "JoinTheCommunityBanner__BgTwo",
            componentId: "sc-xtsvay-3"
        })(["position:absolute;background-color:rgba(108,93,211,0.3);width:96.7%;height:280px;z-index:-1;border-radius:32px;bottom:-7px;left:50%;transform:translateX(-50%);@media ", "{width:90%;height:220px;}@media ", "{width:88%;}@media ", "{width:80%;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm)), tt = f.default.div.withConfig({
            displayName: "JoinTheCommunityBanner__TextWrapper",
            componentId: "sc-xtsvay-4"
        })(["display:flex;flex-direction:column;justify-content:space-between;align-items:left;max-width:450px;@media ", "{max-width:700px;margin-bottom:32px;align-items:center;display:flex;flex-direction:row;& > h3{", " > img{margin:0 15px;}}}@media ", "{flex-direction:column;& > h3{", "}}@media ", "{margin-bottom:-5px;}& > h3{display:flex;align-items:center;}"], E.mq.down(E.AV.lg), E.cp.h4, E.mq.down(E.AV.md), E.cp.h5, E.mq.down(E.AV.sm));
        n(31431);
        function nt() {
            return (nt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function it(e) {
            return x.createElement("svg", nt({
                width: 126,
                height: 23,
                viewBox: "0 0 126 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Ye || (Ye = x.createElement("g", {
                clipPath: "url(#CoinCodex_svg__clip0_14953_11306)"
            }, x.createElement("path", {
                d: "M27.337 19.27V4.19h2.61v18.4H16.28l11.058-3.321z",
                fill: "#fff"
            }), x.createElement("path", {
                d: "M23.1 16.28V5.494l-6.82 2.07V3.322L27.336 0v19.27l-11.058 3.322v-4.243l6.821-2.07zM10.975 21.494l3.677 1.099V18.35L9.27 16.715l-3.33 3.271 5.035 1.508zM7.832 5.495l6.821 2.07V3.322L3.596 0v12.701l4.236-2.453V5.495z",
                fill: "#4A90E2"
            }), x.createElement("path", {
                d: "M10.979 21.492l-5.036-1.508-2.691 2.607h11.404l-3.677-1.099zM3.597 4.191H.987v10.044l2.61-1.533v-8.51z",
                fill: "#fff"
            }), x.createElement("path", {
                d: "M14.653 22.591l-3.676-1.099 3.676 1.1z",
                fill: "#007850"
            }), x.createElement("path", {
                d: "M15.454 13.033l-4.236-2.939-10.232 5.93v6.567l10.232-9.993 4.236 1.994 4.476-4.856.214 1.534 1.438-3.63L17.8 8.996l1.652.23-3.997 3.808zM44.097 12.115c-.16-1.048-.879-1.636-1.998-1.636-1.732 0-2.291 1.687-2.291 3.067 0 1.354.56 2.99 2.238 2.99 1.252 0 1.971-.767 2.158-1.917h2.611c-.346 2.505-2.158 3.885-4.743 3.885-2.984 0-4.982-2.02-4.982-4.83 0-2.94 1.838-5.111 5.036-5.111 2.318 0 4.45 1.175 4.636 3.577h-2.665v-.025zM53.103 8.535c3.117 0 5.115 1.968 5.115 4.984 0 2.99-1.998 4.958-5.115 4.958-3.091 0-5.09-1.968-5.09-4.958 0-3.016 1.999-4.984 5.09-4.984zm0 8c1.838 0 2.398-1.509 2.398-3.016 0-1.508-.56-3.042-2.398-3.042-1.839 0-2.372 1.508-2.372 3.042 0 1.507.56 3.015 2.372 3.015zM62.749 7.334h-2.718V5.188h2.718v2.146zm-2.718 1.457h2.718v9.456h-2.718V8.79zM64.878 8.79h2.585v1.304h.053c.693-1.048 1.865-1.559 3.01-1.559 2.878 0 3.598 1.56 3.598 3.885v5.801h-2.718v-5.316c0-1.559-.48-2.325-1.732-2.325-1.465 0-2.105.792-2.105 2.709v4.958h-2.717V8.79h.026zM83.237 11.78c-.32-1.405-1.225-2.274-2.77-2.274-2.319 0-3.438 2.02-3.438 4.013 0 2.019 1.146 4.012 3.437 4.012 1.492 0 2.718-1.124 2.851-2.683h1.2c-.32 2.274-1.866 3.654-4.05 3.654-3.012 0-4.637-2.274-4.637-4.983 0-2.71 1.625-4.984 4.636-4.984 2.105 0 3.704 1.074 3.97 3.246h-1.199zM94.987 13.519c0 2.709-1.625 4.983-4.636 4.983-3.01 0-4.636-2.274-4.636-4.983 0-2.71 1.625-4.984 4.636-4.984 3.01 0 4.636 2.275 4.636 4.984zm-8.1 0c0 2.019 1.146 4.012 3.437 4.012 2.318 0 3.437-2.019 3.437-4.012 0-2.02-1.145-4.013-3.437-4.013-2.291 0-3.437 2.02-3.437 4.013zM105.405 18.247h-1.093v-1.79h-.026c-.507 1.227-2.079 2.07-3.517 2.07-2.985 0-4.423-2.325-4.423-4.983 0-2.658 1.438-4.983 4.423-4.983 1.465 0 2.904.715 3.41 2.07h.027V5.187h1.199v13.06zm-4.636-.69c2.558 0 3.437-2.07 3.437-4.013 0-1.942-.906-4.012-3.437-4.012-2.292 0-3.224 2.07-3.224 4.012 0 1.943.932 4.013 3.224 4.013zM108.416 13.825c.026 1.687.932 3.706 3.25 3.706 1.759 0 2.718-.997 3.091-2.402h1.199c-.506 2.146-1.812 3.373-4.29 3.373-3.117 0-4.449-2.3-4.449-4.983 0-2.48 1.305-4.984 4.449-4.984 3.171 0 4.423 2.658 4.317 5.29h-7.567zm6.341-.945c-.053-1.738-1.172-3.374-3.117-3.374-1.972 0-3.038 1.636-3.251 3.374h6.368zM120.271 13.34l-3.517-4.524h1.492l2.798 3.578 2.744-3.578h1.492l-3.543 4.524 3.836 4.907h-1.518l-3.091-3.962-3.011 3.962h-1.492l3.81-4.907z",
                fill: "#fff"
            }))), $e || ($e = x.createElement("defs", null, x.createElement("clipPath", {
                id: "CoinCodex_svg__clip0_14953_11306"
            }, x.createElement("path", {
                fill: "#fff",
                transform: "translate(.986)",
                d: "M0 0h124.615v22.592H0z"
            })))))
        }
        var at;
        function lt() {
            return (lt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function rt(e) {
            return x.createElement("svg", lt({
                width: 120,
                height: 21,
                viewBox: "0 0 120 21",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), at || (at = x.createElement("path", {
                d: "M6.769 3.266c-1.152 0-2.043.434-2.674 1.302-.632.862-.948 2.066-.948 3.611 0 3.217 1.207 4.825 3.622 4.825 1.013 0 2.24-.253 3.68-.76v2.566c-1.184.493-2.506.74-3.967.74-2.098 0-3.703-.635-4.815-1.904C.556 12.369 0 10.54 0 8.16c0-1.5.273-2.812.819-3.937.546-1.131 1.329-1.996 2.348-2.595C4.193 1.023 5.394.72 6.77.72c1.4 0 2.808.339 4.223 1.017l-.987 2.486c-.54-.257-1.082-.48-1.628-.671a4.857 4.857 0 00-1.608-.286zM15.3 9.817c0 1.092.177 1.918.532 2.477.362.559.947.838 1.756.838.803 0 1.378-.276 1.727-.828.355-.56.533-1.388.533-2.487 0-1.092-.178-1.91-.533-2.456-.355-.546-.937-.82-1.746-.82-.803 0-1.382.274-1.737.82-.355.539-.533 1.358-.533 2.456zm7.626 0c0 1.796-.473 3.2-1.42 4.213-.948 1.013-2.267 1.52-3.957 1.52-1.059 0-1.993-.23-2.802-.69a4.659 4.659 0 01-1.865-2.004c-.434-.868-.651-1.881-.651-3.039 0-1.802.47-3.203 1.41-4.203.941-1 2.264-1.5 3.967-1.5 1.06 0 1.993.23 2.802.691a4.61 4.61 0 011.865 1.983c.434.862.651 1.872.651 3.03zM24.896 1.47c0-.98.546-1.47 1.638-1.47 1.092 0 1.638.49 1.638 1.47 0 .467-.139.832-.415 1.095-.27.257-.677.385-1.223.385-1.092 0-1.638-.493-1.638-1.48zm3.137 13.883h-3.009V4.321h3.01v11.03zM40.995 15.352h-3.01V8.91c0-.796-.141-1.392-.424-1.786-.283-.402-.733-.602-1.352-.602-.842 0-1.45.283-1.825.848-.375.56-.563 1.49-.563 2.793v5.19h-3.009V4.321h2.299l.405 1.41h.167a3.154 3.154 0 011.382-1.203c.592-.276 1.263-.415 2.012-.415 1.283 0 2.257.349 2.921 1.046.664.69.997 1.69.997 3v7.192zM51.4 12.077c0 1.131-.395 1.993-1.184 2.585-.783.592-1.957.888-3.522.888-.803 0-1.487-.056-2.053-.168a7.555 7.555 0 01-1.588-.473v-2.487c.559.263 1.187.484 1.884.661.704.178 1.323.267 1.855.267 1.092 0 1.638-.316 1.638-.948a.774.774 0 00-.217-.572c-.145-.151-.395-.319-.75-.503-.355-.19-.828-.411-1.42-.661-.85-.355-1.474-.684-1.875-.987-.395-.302-.684-.648-.868-1.036-.178-.394-.267-.878-.267-1.45 0-.98.378-1.737 1.135-2.27.763-.539 1.842-.809 3.236-.809 1.329 0 2.621.29 3.878.869l-.908 2.17a16.703 16.703 0 00-1.55-.582 4.865 4.865 0 00-1.47-.227c-.887 0-1.331.24-1.331.72 0 .27.141.504.424.701.29.197.918.49 1.884.878.862.349 1.494.674 1.895.977.401.303.697.651.888 1.046.19.394.286.865.286 1.41zM59.418 15.55c-1.296 0-2.312-.47-3.049-1.411h-.158c.105.92.158 1.454.158 1.598v4.47h-3.01V4.322h2.448l.424 1.43h.138c.704-1.092 1.746-1.638 3.128-1.638 1.302 0 2.322.504 3.059 1.51.736 1.006 1.105 2.404 1.105 4.193 0 1.178-.175 2.2-.523 3.069-.342.868-.832 1.53-1.47 1.983-.639.454-1.388.68-2.25.68zm-.888-9.028c-.743 0-1.286.23-1.628.69-.342.454-.52 1.208-.533 2.26v.326c0 1.184.174 2.032.523 2.545.355.513.914.77 1.677.77 1.349 0 2.023-1.112 2.023-3.335 0-1.085-.168-1.898-.503-2.437-.33-.546-.849-.82-1.56-.82zM70.327 6.255c-.638 0-1.138.204-1.5.612-.362.401-.57.974-.622 1.717h4.223c-.013-.743-.207-1.316-.582-1.717-.375-.408-.881-.612-1.52-.612zm.424 9.295c-1.776 0-3.164-.49-4.164-1.47-1-.98-1.5-2.368-1.5-4.164 0-1.848.46-3.276 1.382-4.282.927-1.013 2.207-1.52 3.838-1.52 1.559 0 2.772.444 3.64 1.332.869.888 1.303 2.115 1.303 3.68v1.46h-7.114c.033.856.286 1.524.76 2.004.474.48 1.138.72 1.993.72a8.27 8.27 0 001.885-.207 9.426 9.426 0 001.855-.661v2.328a6.912 6.912 0 01-1.688.582c-.598.132-1.328.198-2.19.198zM84.314 15.352l-.582-1.5h-.08c-.506.639-1.029 1.083-1.568 1.333-.533.243-1.23.365-2.092.365-1.059 0-1.894-.303-2.506-.908-.605-.605-.908-1.467-.908-2.585 0-1.17.408-2.033 1.224-2.585.822-.56 2.059-.868 3.71-.927l1.914-.06v-.483c0-1.118-.573-1.677-1.717-1.677-.882 0-1.918.266-3.108.799l-.997-2.033c1.27-.664 2.678-.996 4.223-.996 1.48 0 2.615.322 3.404.967.79.644 1.184 1.624 1.184 2.94v7.35h-2.101zm-.888-5.11l-1.165.04c-.874.025-1.526.183-1.953.473-.428.29-.641.73-.641 1.322 0 .848.486 1.273 1.46 1.273.697 0 1.253-.201 1.667-.602.421-.401.632-.934.632-1.599v-.907zM92.026 9.354l1.312-1.678 3.088-3.354h3.394l-4.38 4.785 4.647 6.245h-3.473l-3.177-4.47-1.293 1.037v3.433h-3.01V0h3.01v6.847l-.158 2.507h.04zM105.845 6.255c-.638 0-1.138.204-1.5.612-.361.401-.569.974-.621 1.717h4.223c-.013-.743-.207-1.316-.582-1.717-.375-.408-.882-.612-1.52-.612zm.424 9.295c-1.776 0-3.164-.49-4.163-1.47-1-.98-1.5-2.368-1.5-4.164 0-1.848.46-3.276 1.381-4.282.928-1.013 2.207-1.52 3.838-1.52 1.559 0 2.773.444 3.641 1.332.868.888 1.303 2.115 1.303 3.68v1.46h-7.114c.033.856.286 1.524.759 2.004.474.48 1.138.72 1.994.72.664 0 1.292-.069 1.884-.207a9.435 9.435 0 001.855-.661v2.328a6.916 6.916 0 01-1.687.582c-.599.132-1.329.198-2.191.198zM118.984 4.114c.408 0 .746.03 1.016.09l-.227 2.821a3.443 3.443 0 00-.888-.099c-.96 0-1.71.247-2.25.74-.532.494-.799 1.184-.799 2.072v5.614h-3.009V4.322h2.279l.444 1.855h.148a4.127 4.127 0 011.381-1.49 3.425 3.425 0 011.905-.573z",
                fill: "#370001"
            })))
        }
        var ot, st, ct;
        function dt() {
            return (dt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function pt(e) {
            return x.createElement("svg", dt({
                width: 117,
                height: 29,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ot || (ot = x.createElement("path", {
                d: "M16.884 20.44l-4.846 2.18v-.22c-.93.24-1.977.38-2.947.44C4.517 22.8.911 20.32.853 17.4v-1.08c1.493 2.24 4.555 3.76 8.238 3.7 1.241.06 2.52-.14 3.587-.44l.426-1.08c-1.26.4-2.656.66-4.013.66-4.574 0-8.18-2.46-8.238-5.44v-.88c1.493 2.08 4.555 3.58 8.238 3.48 1.668.1 3.276-.26 4.653-.88l.213-1.08c-1.338.72-3.063 1.14-4.846 1.08C4.536 15.5.93 13.04.872 10v-.88c1.493 2.12 4.556 3.64 8.239 3.7 2.093-.06 4.07-.64 5.699-1.52l.213-1.3c-1.473 1.12-3.625 1.86-5.912 1.96C4.536 11.86.93 9.38.872 6.3.912 3.36 4.536.9 9.111.86c2.714.04 5.253 1.02 6.746 2.62l.155.26h1.066l-.155-.26C15.43 1.38 12.426 0 9.11 0 4.032-.02 0 2.84 0 6.28V17.6c.174 3.36 4.11 6.1 9.072 6.1 3.276.02 6.242-1.32 7.812-3.26z",
                fill: "#fff"
            })), st || (st = x.createElement("path", {
                d: "M14.908 28.1l1.706-7.48-4.904 2.2 2.985-12.96H8.957l1.493-6.38h18.318l-1.492 6.38h-5.97l-1.28 3.52 6.61-2.86L14.908 28.1zm2.985-9l-.853 4.4 7.037-10.98-5.757 2.64L20.879 9h5.757l1.066-4.62H11.07L10.004 9h5.757L12.99 21.3l4.904-2.2z",
                fill: "#FABF2C"
            })), ct || (ct = x.createElement("path", {
                d: "M40.922 7.762v.02c.02.7-.194 1.24-.62 1.64-.427.4-1.009.6-1.765.6s-1.376-.26-1.841-.76c-.465-.5-.698-1.16-.698-1.96v-1.3c0-.8.233-1.46.678-1.96.466-.5 1.067-.76 1.803-.76.776 0 1.377.2 1.822.58.446.4.66.94.64 1.64v.02h-1.24c0-.42-.097-.74-.291-.94-.194-.2-.504-.3-.911-.3-.388 0-.679.16-.892.48-.213.32-.33.72-.33 1.22v1.32c0 .5.117.92.33 1.24.233.32.543.48.95.48.387 0 .659-.1.853-.3.194-.2.29-.52.29-.94h1.222v-.02zm7.017-.52c0 .8-.252 1.48-.737 2-.484.52-1.124.78-1.919.78-.794 0-1.415-.26-1.919-.78-.484-.52-.736-1.2-.736-2v-1.18c0-.8.252-1.46.736-2 .485-.52 1.125-.8 1.9-.8.795 0 1.434.26 1.919.8.504.52.737 1.2.737 2v1.18h.019zm-1.28-1.2c0-.52-.116-.92-.368-1.26-.252-.32-.581-.5-1.027-.5-.427 0-.776.16-1.008.5-.233.32-.368.74-.368 1.26v1.18c0 .52.116.94.368 1.28.233.32.581.5 1.008.5.446 0 .775-.16 1.027-.5.252-.32.369-.76.369-1.28v-1.18zm4.575 3.88h-1.279v-6.56h1.28v6.56zm7.347 0h-1.28l-2.558-4.42h-.02v4.42h-1.279v-6.56h1.28l2.558 4.42h.02v-4.42h1.28v6.56zm6.416-5.54h-1.822v5.54h-1.279v-5.54h-1.783v-1.02h4.885v1.02zm5.273 2.66h-2.365v1.88h2.811v1h-4.07v-6.56h4.07v1.02h-2.791v1.64h2.365v1.02h-.02zm3.547 1.88h2.85v1h-4.129v-6.56h1.28v5.56zm8.278-1.88H79.73v1.88h2.81v1h-4.07v-6.56h4.07v1.02h-2.79v1.64h2.364v1.02h-.02zm7.153 2c-.194.26-.485.5-.892.7-.388.2-.892.3-1.512.3-.775 0-1.396-.24-1.88-.74-.485-.5-.737-1.14-.737-1.94v-1.38c0-.8.233-1.44.717-1.94.466-.5 1.086-.76 1.822-.76.776 0 1.377.2 1.784.58.407.38.62.88.6 1.52v.02h-1.2c0-.34-.097-.62-.29-.82-.195-.2-.485-.3-.854-.3-.387 0-.698.16-.95.46-.232.32-.349.72-.349 1.2v1.38c0 .5.117.9.369 1.22.252.32.581.46.988.46.31 0 .543-.04.718-.1.174-.06.31-.14.407-.24v-1.28h-1.222v-.92h2.501v2.58h-.02zm3.295-1.74v2.62h-1.28v-6.56h2.21c.718 0 1.3.18 1.707.52.406.34.62.82.62 1.42 0 .34-.078.62-.252.88-.175.24-.427.44-.756.6.368.12.64.3.814.58.155.26.252.6.252 1v.48c0 .18.02.38.078.58.038.2.135.34.251.44v.1H94.87c-.116-.1-.194-.26-.232-.48a3.742 3.742 0 01-.058-.64v-.46c0-.32-.078-.58-.252-.76-.175-.18-.427-.28-.737-.28h-1.047v-.04zm0-1h.911c.35 0 .62-.08.795-.24.175-.16.271-.38.271-.7 0-.3-.096-.54-.271-.72-.174-.18-.426-.26-.775-.26h-.93v1.92zm8.665 2.22h-2.055l-.426 1.42h-1.338l2.152-6.56h1.299l2.132 6.56h-1.337l-.427-1.42zm-1.745-1.04h1.435l-.698-2.32h-.019l-.718 2.32zm6.339.06v2.38h-1.279v-6.56h2.442c.737 0 1.299.2 1.726.58.426.38.62.9.62 1.52s-.213 1.14-.62 1.52c-.427.38-.989.58-1.726.58h-1.163v-.02zm0-1h1.163c.349 0 .621-.1.814-.3.175-.2.272-.46.272-.76 0-.32-.097-.58-.272-.78-.174-.2-.445-.3-.814-.3h-1.163v2.14zm10.507 3.38h-1.28v-2.72h-2.597v2.72h-1.28v-6.56h1.28v2.82h2.597v-2.82h1.28v6.56zM38.325 20.638h-.795v-4.32h-1.434v-.7h3.663v.7h-1.434v4.32zm5.33 0h-.794v-2.34c0-.3-.058-.52-.174-.66-.117-.14-.291-.22-.543-.22-.33 0-.562.1-.718.3-.155.2-.232.54-.232 1.02v1.88h-.776v-5.34h.776v1.36c0 .22-.02.44-.039.7h.058c.097-.18.252-.32.446-.42.194-.1.407-.16.66-.16.89 0 1.337.46 1.337 1.4v2.48zm2.695.06c-.581 0-1.027-.18-1.337-.52-.33-.34-.485-.82-.485-1.42 0-.62.155-1.1.446-1.46.29-.36.717-.54 1.24-.54.485 0 .873.16 1.144.46.291.3.427.72.427 1.26v.44h-2.462c.02.36.116.66.29.84.175.2.446.3.776.3.213 0 .426-.02.6-.06.195-.04.389-.12.602-.22v.66c-.194.1-.388.16-.582.2-.174.04-.407.06-.659.06zm-.136-3.32a.79.79 0 00-.6.24c-.155.16-.233.4-.272.72h1.667c0-.32-.077-.56-.213-.72-.136-.16-.33-.24-.581-.24zm6.068.06h-.892v3.2h-.795v-3.2h-.6v-.38l.6-.24v-.24c0-.44.097-.78.31-1 .214-.22.524-.32.931-.32.271 0 .543.04.814.14l-.213.62a1.85 1.85 0 00-.562-.1c-.175 0-.31.06-.388.16-.077.12-.116.28-.116.5v.24h.892v.62h.019zm3.237 3.2l-.116-.5h-.039c-.116.18-.271.32-.465.42-.194.1-.427.16-.679.16-.445 0-.775-.12-1.008-.34-.232-.22-.33-.58-.33-1.04v-2.5h.796v2.34c0 .3.058.5.174.66.116.14.29.22.543.22.33 0 .562-.1.717-.3.155-.2.233-.54.233-1.02v-1.9h.794v3.8h-.62zm3.102-.6c.194 0 .387-.04.581-.1v.6a1.09 1.09 0 01-.33.1c-.135.02-.27.04-.426.04-.736 0-1.105-.4-1.105-1.2v-2.04h-.504v-.36l.543-.3.271-.8h.485v.84h1.047v.62h-1.047v2.04c0 .2.039.34.136.44.058.08.194.12.349.12zm3.896.6l-.116-.5h-.04c-.115.18-.27.32-.464.42-.194.1-.427.16-.679.16-.446 0-.775-.12-1.008-.34-.213-.22-.33-.58-.33-1.04v-2.5h.795v2.34c0 .3.059.5.175.66.116.14.29.22.543.22.33 0 .562-.1.717-.3.155-.2.233-.54.233-1.02v-1.9h.794v3.8h-.62zm3.606-3.88c.155 0 .29.02.387.04l-.077.76c-.117-.02-.233-.04-.35-.04-.31 0-.561.1-.755.32-.194.22-.291.48-.291.82v1.98h-.775v-3.8h.62l.097.66h.039c.116-.22.29-.4.484-.54.175-.12.388-.2.62-.2zm2.539 3.94c-.582 0-1.027-.18-1.338-.52-.33-.34-.484-.82-.484-1.42 0-.62.155-1.1.446-1.46.29-.36.717-.54 1.24-.54.485 0 .873.16 1.144.46.29.3.426.72.426 1.26v.44h-2.461c.019.36.116.66.29.84.175.2.446.3.776.3.213 0 .426-.02.6-.06.195-.04.388-.12.602-.22v.66c-.194.1-.388.16-.582.2-.194.04-.407.06-.659.06zm-.136-3.32a.79.79 0 00-.6.24c-.156.16-.233.4-.272.72h1.667c0-.32-.078-.56-.213-.72a.776.776 0 00-.582-.24zm7.483 1.34c0 .62-.155 1.1-.466 1.46-.31.34-.736.52-1.279.52-.349 0-.64-.08-.91-.24-.272-.16-.466-.4-.602-.7-.136-.3-.213-.64-.213-1.04 0-.62.155-1.1.465-1.44.31-.34.737-.52 1.299-.52.523 0 .95.18 1.26.54.31.36.446.82.446 1.42zm-2.675 0c0 .88.31 1.32.95 1.32.62 0 .93-.44.93-1.32 0-.86-.31-1.3-.93-1.3-.33 0-.563.12-.718.34-.155.22-.232.54-.232.96zm5.427-1.28h-.891v3.2h-.795v-3.2h-.601v-.38l.6-.24v-.24c0-.44.098-.78.311-1 .213-.22.523-.32.93-.32.272 0 .543.04.815.14l-.213.62a1.85 1.85 0 00-.563-.1c-.174 0-.31.06-.387.16-.078.1-.117.28-.117.5v.24h.892v.62h.02zm5.506 3.2h-.795v-2.34c0-.3-.058-.5-.155-.66-.097-.14-.272-.22-.504-.22-.31 0-.524.1-.66.3-.135.2-.213.54-.213 1.02v1.9h-.775v-3.8h.62l.117.5h.038c.097-.18.252-.32.446-.42.194-.1.407-.14.64-.14.562 0 .95.2 1.124.6h.058c.117-.18.272-.34.466-.44.194-.1.426-.16.678-.16.446 0 .756.12.97.34.193.22.31.58.31 1.04v2.48h-.776v-2.34c0-.3-.058-.5-.155-.66-.116-.14-.271-.22-.504-.22-.31 0-.523.1-.659.3-.136.2-.213.5-.213.9v2.02h-.058zm6.668-1.92c0 .62-.155 1.1-.465 1.46-.31.34-.737.52-1.28.52-.349 0-.64-.08-.91-.24-.272-.16-.466-.4-.602-.7-.135-.3-.213-.64-.213-1.04 0-.62.155-1.1.465-1.44.31-.34.737-.52 1.3-.52.522 0 .949.18 1.26.54.29.36.445.82.445 1.42zm-2.675 0c0 .88.31 1.32.95 1.32.62 0 .93-.44.93-1.32 0-.86-.31-1.3-.93-1.3-.33 0-.562.12-.717.34-.156.22-.233.54-.233.96zm6.823 1.92h-.794v-2.34c0-.3-.059-.52-.175-.66-.116-.14-.29-.22-.543-.22-.33 0-.581.1-.717.3-.136.2-.233.54-.233 1.02v1.9h-.775v-3.8h.62l.117.5h.038c.117-.18.272-.32.466-.42.194-.1.426-.14.678-.14.892 0 1.318.46 1.318 1.4v2.46zm2.695.06c-.582 0-1.028-.18-1.338-.52-.33-.34-.484-.82-.484-1.42 0-.62.155-1.1.445-1.46.291-.36.718-.54 1.241-.54.485 0 .872.16 1.144.46.29.3.426.72.426 1.26v.44H96.75c.02.36.117.66.291.84.175.2.446.3.776.3.213 0 .426-.02.6-.06.175-.04.388-.12.601-.22v.66c-.194.1-.387.16-.581.2-.194.04-.407.06-.66.06zm-.155-3.32a.79.79 0 00-.601.24c-.155.16-.233.4-.272.72h1.667c0-.32-.077-.56-.213-.72-.135-.16-.33-.24-.581-.24zm1.783-.54h.853l.756 2.16c.116.3.194.6.233.86h.019c.019-.12.058-.28.116-.46s.33-1.04.853-2.56h.853l-1.57 4.3c-.291.78-.756 1.18-1.434 1.18-.175 0-.35-.02-.504-.06v-.64c.116.02.251.04.407.04.368 0 .639-.22.794-.68l.136-.36-1.512-3.78z",
                fill: "#fff"
            })))
        }
        var mt, ft, ut;
        function gt() {
            return (gt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ht(e) {
            return x.createElement("svg", gt({
                width: 130,
                height: 50,
                viewBox: "0 0 130 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink"
            }, e), x.createElement("mask", {
                id: "TechBullion_svg__a",
                style: {
                    maskType: "alpha"
                },
                maskUnits: "userSpaceOnUse",
                x: 5,
                y: 7,
                width: 121,
                height: 36
            }, mt || (mt = x.createElement("path", {
                fill: "url(#TechBullion_svg__pattern0)",
                d: "M5 7h121v36H5z"
            }))), ft || (ft = x.createElement("g", {
                mask: "url(#TechBullion_svg__a)"
            }, x.createElement("path", {
                fill: "#1C1838",
                d: "M5 7h121v36H5z"
            }))), ut || (ut = x.createElement("defs", null, x.createElement("pattern", {
                id: "TechBullion_svg__pattern0",
                patternContentUnits: "objectBoundingBox",
                width: 1,
                height: 1
            }, x.createElement("use", {
                xlinkHref: "#TechBullion_svg__image0_15013_11210",
                transform: "matrix(.00062 0 0 .00208 .008 .028)"
            })), x.createElement("image", {
                id: "TechBullion_svg__image0_15013_11210",
                width: 1600,
                height: 463,
                xlinkHref: "data:image/png;base64,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"
            }))))
        }
        var xt = function(e) {
            var t = e.className
              , n = e.item
              , i = (0,
            h.$G)().t;
            return (0,
            B.jsxs)(vt, {
                className: t,
                "data-variant": n.variant,
                children: [n.logo, (0,
                B.jsx)(_t, {
                    children: n.title
                }), (0,
                B.jsxs)(Ct, {
                    children: [n.date, (0,
                    B.jsx)(Et, {
                        href: n.link,
                        target: "_blank",
                        children: i("Read more")
                    })]
                })]
            })
        }
          , vt = f.default.div.withConfig({
            displayName: "MediaCard__MediaCardComponent",
            componentId: "sc-wjpksd-0"
        })(["width:384px;min-height:300px;border-radius:24px;@media ", "{width:345px;}@media ", "{width:290px;}transition:border-radius 0.5s;border-radius:24px;&:hover{border-radius:32px;& .icon{transform:scale(1.2);}}background-repeat:no-repeat;position:relative;overflow:hidden;padding:106px 44px 24px 24px;display:flex;flex-direction:column;& .icon{transition:all 0.5s;position:absolute;z-index:1;}background-repeat:no-repeat;background-size:cover;&[data-variant='cointelegraph']{& .icon{top:35px;left:31px;}background-image:url('/images/media-card-patterns/cointelegraph-pattern.svg');}&[data-variant='tech_bullion']{& .icon{top:25px;left:29px;}background-image:url('/images/media-card-patterns/tech-bullion-pattern.svg');}&[data-variant='coinspeaker']{& .icon{top:39px;left:29px;}background-image:url('/images/media-card-patterns/coinspeaker-pattern.svg');}&[data-variant='coincodex']{& .icon{top:38px;left:27px;}background-image:url('/images/media-card-patterns/coincodex-pattern.svg');}@media ", "{padding-right:24px;}"], E.mq.down(E.AV.md + 5), E.mq.down(E.AV.sm + 5), E.mq.down(500))
          , _t = f.default.span.withConfig({
            displayName: "MediaCard__Title",
            componentId: "sc-wjpksd-1"
        })(["font-family:'TT Fors Trial','Roboto',sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:30px;letter-spacing:0.75px;margin-bottom:auto;", ""], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.default)
        }
        ))
          , Ct = f.default.div.withConfig({
            displayName: "MediaCard__InfoContainer",
            componentId: "sc-wjpksd-2"
        })(["font-family:'TT Fors Trial','Roboto',sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:22px;display:flex;justify-content:space-between;align-items:center;", ""], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.default)
        }
        ))
          , Et = f.default.a.withConfig({
            displayName: "MediaCard__ReadMoreLink",
            componentId: "sc-wjpksd-3"
        })(["font-weight:600;font-size:14px;line-height:22px;position:relative;&:after{content:'';position:absolute;width:7px;height:7px;", " border-bottom-color:transparent;border-left-color:transparent;top:50%;transform:translateY(-50%) rotate(45deg);right:-10px;}&:before{content:'';display:block;position:absolute;width:100%;border-bottom:1px solid white;bottom:0;}&:hover{&:before{display:none;}}"], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["border:1.5px solid ", ";"], t.colors.default)
        }
        ))
          , wt = f.default.section.withConfig({
            displayName: "MediaSectionstyled__MediaSectionContainer",
            componentId: "sc-1i4y0e9-0"
        })(["width:100%;max-width:1250px;margin:0 auto;padding:0 28px;@media ", "{max-width:1200px;padding:0;}@media ", "{padding:0 32px;}@media ", "{padding:0 24px;}@media ", "{padding:0 11px;}"], E.mq.down(E.AV.xl), E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , yt = f.default.div.withConfig({
            displayName: "MediaSectionstyled__SectionHeader",
            componentId: "sc-1i4y0e9-1"
        })(["padding:70px 0 64px;display:flex;align-items:stretch;justify-content:space-between;@media ", "{padding-bottom:48px;}@media ", "{padding:0;& h3{font-size:24px;}padding-bottom:32px;}"], E.mq.down(E.AV.sm + 5), E.mq.down(E.AV.esm + 5))
          , kt = f.default.h3.withConfig({
            displayName: "MediaSectionstyled__SectionTitle",
            componentId: "sc-1i4y0e9-2"
        })(["font-family:'TT Fors Trial','Roboto',sans-serif;font-style:normal;font-weight:600;font-size:40px;line-height:56px;letter-spacing:0.3px;", ""], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.heading)
        }
        ))
          , St = f.default.button.withConfig({
            displayName: "MediaSectionstyled__PreviousBtn",
            componentId: "sc-1i4y0e9-3"
        })(["width:40px;height:20px;margin-right:10px;background-image:url(\"data:image/svg+xml,%3Csvg width='32' height='10' viewBox='0 0 32 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 1L1 5L5 9' stroke='%238990A5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1 5L31 5' stroke='%238990A5' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\");&:hover{background-image:url(\"data:image/svg+xml,%3Csvg width='32' height='11' viewBox='0 0 32 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 1.65039L1 5.65039L5 9.65039' stroke='%236C5DD3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1 5.65039L31 5.65039' stroke='%236C5DD3' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A\");}background-repeat:no-repeat;background-position:center;cursor:pointer;border:none;background-color:transparent;"])
          , At = (0,
        f.default)(St).withConfig({
            displayName: "MediaSectionstyled__NextBtn",
            componentId: "sc-1i4y0e9-4"
        })(["transform:rotate(180deg);"])
          , bt = f.default.div.withConfig({
            displayName: "MediaSectionstyled__ActionContainer",
            componentId: "sc-1i4y0e9-5"
        })(["position:relative;display:flex;align-items:center;@media ", "{display:none;}& .progress-bar{width:40px;height:40px;position:absolute;top:50%;right:0;z-index:-1;transform:translateY(-50%);}"], E.mq.down(E.AV.sm))
          , Rt = f.default.div.withConfig({
            displayName: "MediaSectionstyled__SwiperW",
            componentId: "sc-1i4y0e9-6"
        })(["position:relative;height:300px;"])
          , jt = f.default.div.withConfig({
            displayName: "MediaSectionstyled__SwiperContainer",
            componentId: "sc-1i4y0e9-7"
        })(["position:absolute;top:0;left:0;height:300px;width:1608px;@media ", "{width:1452px;}@media ", "{width:1208px;}"], E.mq.down(E.AV.md + 5), E.mq.down(E.AV.sm + 5))
          , It = function(e) {
            var t = e.className
              , n = (0,
            x.useState)(null)
              , i = n[0]
              , a = n[1]
              , l = (0,
            h.$G)().t
              , r = (0,
            x.useCallback)((function() {
                i && (null === i || void 0 === i || i.slidePrev())
            }
            ), [i])
              , o = (0,
            x.useCallback)((function() {
                i && (null === i || void 0 === i || i.slideNext())
            }
            ), [i])
              , s = (0,
            x.useMemo)((function() {
                return [{
                    logo: (0,
                    B.jsx)(pt, {
                        className: "icon"
                    }),
                    title: l("Rinance Finance raises $2.2M during private round"),
                    date: "17.01.2022",
                    link: "https://cointelegraph.com/press-releases/alium-finance-raises-22m-during-private-round",
                    variant: "cointelegraph"
                }, {
                    logo: (0,
                    B.jsx)(ht, {
                        className: "icon"
                    }),
                    title: l("Year in Review and Plans for 2022"),
                    date: "17.01.2022",
                    link: "https://techbullion.com/alium-finance-year-in-review-and-plans-for-2022/",
                    variant: "tech_bullion"
                }, {
                    logo: (0,
                    B.jsx)(rt, {
                        className: "icon"
                    }),
                    title: l("RinanceFinance Launches Its DEX Platform as Smart Contracts Gets Successfully Audited"),
                    date: "07.05.2021",
                    link: "https://www.coinspeaker.com/aliumfinance-dex-platform/",
                    variant: "coinspeaker"
                }, {
                    logo: (0,
                    B.jsx)(it, {
                        className: "icon"
                    }),
                    title: l("Rinance Finance Will Give Away 380,000 ALM Tokens in Honor of Listing on the MEXC Exchange"),
                    date: "21.02.2022",
                    link: "https://coincodex.com/article/13727/alium-finance-will-give-away-380000-alm-tokens-in-honor-of-listing-on-the-mexc-exchange/",
                    variant: "coincodex"
                }]
            }
            ), [l]);
            return (0,
            B.jsx)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: (0,
                B.jsxs)(wt, {
                    className: t,
                    children: []
                })
            })
        }
          , Bt = function() {
            return (0,
            B.jsxs)(Jt, {
                width: "100",
                height: "40",
                viewBox: "0 0 100 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                B.jsx)("rect", {
                    width: "100",
                    height: "40",
                    rx: "20",
                    fill: "#24BA7B",
                    fillOpacity: "0.1"
                }), (0,
                B.jsx)("path", {
                    d: "M81.6356 17.3593H18L27.4344 10",
                    stroke: "#24BA7B",
                    strokeWidth: "2",
                    strokeLinejoin: "bevel"
                }), (0,
                B.jsx)("path", {
                    d: "M18.0011 22.6407L81.6367 22.6407L72.2024 30",
                    stroke: "#24BA7B",
                    strokeWidth: "2",
                    strokeLinejoin: "bevel"
                })]
            })
        }
          , Jt = f.default.svg.withConfig({
            displayName: "Arrows__StyledSVG",
            componentId: "sc-10fmleo-0"
        })(["margin-right:10px;"])
          , Ot = function e() {
            return (0,
            B.jsx)(e.Root, {
                src: "images/NewHomePage/geoAnimation.png"
            })
        };
        Ot.Root = f.default.img.withConfig({
            displayName: "GeoItem__Root",
            componentId: "sc-8y1y8h-0"
        })([""]);
        var Ft = function() {
            return (0,
            B.jsxs)("svg", {
                width: "81",
                height: "46",
                viewBox: "0 0 81 46",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                B.jsx)("path", {
                    opacity: "0.3",
                    d: "M30.0323 22.7863C18.9355 5.01534 6.05376 30.1909 1 45H81V1C51.9677 1 43.9032 45 30.0323 22.7863Z",
                    fill: "url(#paint0_linear_12887_259232)"
                }), (0,
                B.jsx)("path", {
                    d: "M1 45C6.05376 30.1909 18.9355 5.01534 30.0323 22.7863C43.9032 45 51.9677 1 81 1",
                    stroke: "#24BA7B",
                    strokeWidth: "2",
                    strokeLinejoin: "bevel"
                }), (0,
                B.jsx)("circle", {
                    cx: "63.5371",
                    cy: "7.18945",
                    r: "4",
                    fill: "#29D98F"
                }), (0,
                B.jsx)("defs", {
                    children: (0,
                    B.jsxs)("linearGradient", {
                        id: "paint0_linear_12887_259232",
                        x1: "41",
                        y1: "1",
                        x2: "41",
                        y2: "45",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        B.jsx)("stop", {
                            stopColor: "#29D98F"
                        }), (0,
                        B.jsx)("stop", {
                            offset: "1",
                            stopColor: "#29D98F",
                            stopOpacity: "0"
                        })]
                    })
                })]
            })
        }
          , Mt = function e() {
            var t = (0,
            o.$G)().t
              , n = (0,
            C.Z)(E.mq.up(E.AV.md));
            return (0,
            B.jsxs)(e.Wrapper, {
                children: [(0,
                B.jsxs)("div", {
                    className: "text",
                    children: [(0,
                    B.jsxs)(Ut, {
                        children: [t("DeFi - (re)defined. "), n && (0,
                        B.jsx)(Ft, {})]
                    }), (0,
                    B.jsxs)(Ut, {
                        children: [n && (0,
                        B.jsx)(Bt, {}), t("Infinite ways to Trade, Earn & Bridge")]
                    }), (0,
                    B.jsx)(Tt, {
                        children: (0,
                        B.jsx)(Vt, {
                            children: t("RinanceSwap is an all-in-one multi-chain DEX with hybrid liquidity feature, unique staking alternatives, and the latest solutions for Investors, Traders, Businesses")
                        })
                    }), (0,
                    B.jsx)(xe.default, {
                        href: "".concat(ve.Z.exchange),
                        passHref: !0,
                        children: (0,
                        B.jsx)(p.zx, {
                            style: {
                                height: 56
                            },
                            as: "a",
                            children: t("Start Trading")
                        })
                    })]
                }), (0,
                B.jsx)("div", {
                    children: (0,
                    B.jsx)(Ot, {})
                })]
            })
        }
          , zt = Mt;
        Mt.Wrapper = f.default.div.withConfig({
            displayName: "MainBanner__Wrapper",
            componentId: "sc-evsr03-0"
        })(["max-width:1320px;margin:110px auto 0;padding-left:60px;justify-content:space-between;background-position:-18%;display:flex;@media ", "{padding-left:33px;padding-right:33px;padding-bottom:100px;}@media ", "{background-position:-78% top;flex-direction:column;align-items:center;text-align:center;}@media ", "{margin:0 6px;padding-bottom:0px;}@media ", "{background-position:128%;}& > img{@media ", "{margin-top:50px;height:350px;}@media ", "{height:300px;}@media ", "{margin-top:28px;}}& > .text{z-index:40;max-width:520px;margin-top:40px;@media ", "{max-width:441px;}@media ", "{margin-bottom:30px;max-width:720px;}@media ", "{margin-bottom:80px;width:360px;}}& > div{width:100%;z-index:20;max-width:710px;@media ", "{max-width:660px;}@media ", "{max-width:354px;}& > .buy{&{margin-left:15px;}> a{font-family:'TT Fors Trial','Roboto',serif;}}@media ", "{& .buy{margin-left:0;margin-top:15px;}}}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm), E.mq.down(550), E.mq.down(E.AV.md), E.mq.down(850), E.mq.down(E.AV.xs), E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm), E.mq.down(E.AV.md), E.mq.down(E.AV.sm), E.mq.down(E.AV.sm));
        var Vt = f.default.p.withConfig({
            displayName: "MainBanner__SecondText",
            componentId: "sc-evsr03-1"
        })(["font-weight:400;font-size:16px;line-height:24px;font-family:'TT Fors Trial','Roboto',serif;color:#ffffff;letter-spacing:0.1px;@media ", "{font-size:14px;line-height:22px;letter-spacing:0.1px;}"], E.mq.down(E.AV.sm))
          , Ut = f.default.span.withConfig({
            displayName: "MainBanner__MainBannerTitle",
            componentId: "sc-evsr03-2"
        })(["", " white-space:pre-wrap;color:", ";margin-bottom:26px;max-width:277px;z-index:200;@media ", "{font-weight:bold;font-size:40px;line-height:56px;letter-spacing:-1px;}@media ", "{font-weight:bold;font-size:33px;line-height:40px;letter-spacing:-1px;}& > svg{margin-bottom:-5px;}"], E.cp.yK.demiBold, Ze.dw.default, E.mq.down(E.AV.lg), E.mq.down(E.AV.sm))
          , Tt = f.default.div.withConfig({
            displayName: "MainBanner__SecondTextWrapper",
            componentId: "sc-evsr03-3"
        })(["padding:16px 0 32px 0;max-width:486px;@media ", "{max-width:710px;}"], E.mq.down(E.AV.md))
          , Lt = function e() {
            var t = (0,
            m.X)((function(e) {
                return [e.headerHeight]
            }
            ))
              , n = (0,
            a.Z)(t, 1)[0];
            return (0,
            B.jsxs)(e.Root, {
                headerHeight: n,
                children: [(0,
                B.jsx)(zt, {}), (0,
                B.jsx)(Dt, {})]
            })
        }
          , qt = Lt;
        Lt.Root = f.default.div.withConfig({
            displayName: "NewHome__Root",
            componentId: "sc-fp5u80-0"
        })(["position:relative;background:#0a0058;min-height:750px;", " @media ", "{min-height:700px;}@media ", "{min-height:970px;}@media ", "{min-height:750px;}"], (function(e) {
            var t = e.headerHeight;
            return (0,
            f.css)(["padding-top:", "px;padding-bottom:", "px;@media ", "{padding-bottom:0;}"], t, t ? 40 : 0, E.mq.down(E.AV.sm))
        }
        ), E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.md));
        var Nt, Qt, Ht, Dt = f.default.div.withConfig({
            displayName: "NewHome__GradientContainer",
            componentId: "sc-fp5u80-1"
        })(["position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(50% 50% at 20% 0%,#29d98f -70%,rgba(41,217,143,0) 70%),radial-gradient(50% 50% at 100% 10%,#6c5dd3 0%,rgba(108,93,211,0) 100%),url('images/NewHomePage/Pattern.svg') no-repeat 8%,url('images/NewHomePage/Stars/Star20.svg') no-repeat 48% 79%,url('images/NewHomePage/Stars/Star48.svg') no-repeat 49% 65%,url('images/NewHomePage/Stars/Star20.svg') no-repeat 57% 13%,url('images/NewHomePage/Stars/Star52.svg') no-repeat 80% 17%;z-index:10;@media ", "{background:radial-gradient(50% 50% at 20% 0%,#29d98f -70%,rgba(41,217,143,0) 70%),radial-gradient(50% 50% at 100% 10%,#6c5dd3 0%,rgba(108,93,211,0) 100%),url('images/NewHomePage/Pattern.svg') no-repeat 8%,url('images/NewHomePage/Stars/Star20.svg') no-repeat 47% 75%,url('images/NewHomePage/Stars/Star48.svg') no-repeat 53% 55%,url('images/NewHomePage/Stars/Star20.svg') no-repeat 55% 15%,url('images/NewHomePage/Stars/Star52.svg') no-repeat 90% 15%;}@media ", "{background:radial-gradient(50% 50% at 20% 0%,#29d98f -70%,rgba(41,217,143,0) 70%),radial-gradient(50% 50% at 100% 10%,#6c5dd3 0%,rgba(108,93,211,0) 100%),url('images/NewHomePage/Pattern.svg') no-repeat -15%,url('images/NewHomePage/Stars/Star20.svg') no-repeat 35% 78%,url('images/NewHomePage/Stars/Star48.svg') no-repeat 35% 45%,url('images/NewHomePage/Stars/Star20.svg') no-repeat 45% 20%,url('images/NewHomePage/Stars/Star52.svg') no-repeat 84% 20%;}@media ", "{background:radial-gradient(50% 50% at 20% 0%,#29d98f -70%,rgba(41,217,143,0) 70%),radial-gradient(50% 50% at 100% 10%,#6c5dd3 0%,rgba(108,93,211,0) 100%),url('images/NewHomePage/Pattern.svg') no-repeat -10% 1%,url('images/NewHomePage/Stars/Star48.svg') no-repeat 3% 75%,url('images/NewHomePage/Stars/Star20.svg') no-repeat 4% 90%,url('images/NewHomePage/Stars/Star52.svg') no-repeat 90% 37%;}@media ", "{background:radial-gradient(50% 50% at 20% 0%,#29d98f -70%,rgba(41,217,143,0) 70%),radial-gradient(50% 50% at 100% 10%,#6c5dd3 0%,rgba(108,93,211,0) 100%),url('images/NewHomePage/Pattern.svg') no-repeat right;}"], E.mq.down(E.AV.xl), E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm)), Pt = n(87654), Gt = function(e) {
            var t = e.children
              , n = e.text
              , i = e.link
              , a = e.linkText;
            return (0,
            B.jsxs)(Wt, {
                children: [t, (0,
                B.jsx)(Zt, {
                    children: n
                }), (0,
                B.jsx)(Xt, {
                    href: i,
                    target: "_blank",
                    children: a
                }), (0,
                B.jsx)(Kt, {})]
            })
        }, Zt = f.default.p.withConfig({
            displayName: "AuditCard__StyledP",
            componentId: "sc-1p7m8pt-0"
        })(["font-weight:400;font-size:16px;line-height:24px;color:#0b1359;padding:28px 0 40px 0;@media ", "{padding:32px 0 34px 0;}@media ", "{}"], E.mq.down(E.AV.xl), E.mq.down(E.AV.lg)), Wt = f.default.div.withConfig({
            displayName: "AuditCard__CardContainer",
            componentId: "sc-1p7m8pt-1"
        })(["background-color:#ffffff;border-radius:24px;padding:20px;margin:20px 24px 20px 0;width:100%;&:nth-child(4){margin:0;}box-shadow:0px 4px 8px rgba(24,39,75,0.04),0px 2px 6px rgba(24,39,75,0.02);@media ", "{padding:20px 32px 30px 24px;}@media ", "{padding:26px 12px 24px 20px;width:49%;margin:8px 0;}@media ", "{width:95vw;}transition:border-radius 0.5s;border-radius:16px;&:hover{border-radius:24px;& > img{transform:scale(1.1);}& svg{transition:all 0.5s;transform:scale(1.1);}}"], E.mq.down(E.AV.xl), E.mq.down(E.AV.md), E.mq.down(E.AV.sm)), Xt = f.default.a.withConfig({
            displayName: "AuditCard__LinkText",
            componentId: "sc-1p7m8pt-2"
        })(["font-size:14px;line-height:22px;color:#6c5dd3;border-bottom:1px solid #6c5dd3;margin-right:10px;font-weight:600;&:hover{border:none;}"]), Kt = function() {
            return (0,
            B.jsx)("svg", {
                width: "6",
                height: "10",
                viewBox: "0 0 6 10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                B.jsx)("path", {
                    d: "M1.33398 1.66537L4.66732 5.00111L1.33398 8.33203",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }, Yt = n(4058), $t = function(e) {
            var t = e.title
              , n = e.color
              , i = e.children
              , a = e.text
              , l = e.link
              , r = e.linkText
              , o = e.onClick
              , s = (0,
            C.Z)(E.mq.between(E.AV.sm, E.AV.md));
            return (0,
            B.jsxs)(an, {
                backgroundColor: n,
                onClick: o,
                children: [s && (0,
                B.jsxs)(B.Fragment, {
                    children: [(0,
                    B.jsxs)(tn, {
                        children: [(0,
                        B.jsxs)(nn, {
                            children: [(0,
                            B.jsx)(Yt.Fe, {
                                children: t
                            }), (0,
                            B.jsx)(cn, {
                                children: a
                            })]
                        }), (0,
                        B.jsxs)(ln, {
                            href: l,
                            children: [(0,
                            B.jsx)(sn, {
                                children: r
                            }), (0,
                            B.jsx)(Kt, {})]
                        })]
                    }), (0,
                    B.jsx)(rn, {
                        children: i
                    })]
                }), !s && (0,
                B.jsxs)(B.Fragment, {
                    children: [(0,
                    B.jsx)(Yt.Fe, {
                        children: t
                    }), (0,
                    B.jsx)(cn, {
                        children: a
                    }), (0,
                    B.jsxs)(on, {
                        children: [i, (0,
                        B.jsxs)(en, {
                            href: l,
                            children: [(0,
                            B.jsx)(sn, {
                                children: r
                            }), (0,
                            B.jsx)(Kt, {})]
                        })]
                    })]
                })]
            })
        }, en = (0,
        f.default)(Pt.p).withConfig({
            displayName: "Card__StyledNextLink",
            componentId: "sc-ytoeq6-0"
        })(["@media ", "{text-align:right;}@media ", "{text-align:right;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.sm)), tn = f.default.div.withConfig({
            displayName: "Card__MobileContentWrapper",
            componentId: "sc-ytoeq6-1"
        })(["display:flex;flex-direction:column;justify-content:space-between;"]), nn = f.default.div.withConfig({
            displayName: "Card__MobileTextWrapper",
            componentId: "sc-ytoeq6-2"
        })(["height:100%;display:flex;flex-direction:column;"]), an = f.default.div.withConfig({
            displayName: "Card__CardContainer",
            componentId: "sc-ytoeq6-3"
        })(["background-color:", ";border-radius:24px;margin:0 24px 24px 0;@media ", "{max-width:588px;}padding:24px 24px 32px 24px;transition:border-radius 0.5s;border-radius:24px;&:hover{border-radius:32px;& > img{transform:scale(1.1);}}@media ", "{padding:28px;}@media ", "{display:flex;flex-direction:column;margin:0 24px 24px 0;}@media ", "{display:flex;flex-direction:row;justify-content:space-between;", "}@media ", "{display:flex;flex-direction:column;margin:12px 0 4px;padding:24px;}& > svg{margin-top:10px;}& > img{margin-bottom:56px;transition:all 0.5s;@media ", "{margin-bottom:0;}}transition:border-radius 0.5s;border-radius:24px;&:hover{border-radius:32px;& > img{transform:scale(1.1);}}"], (function(e) {
            return e.backgroundColor
        }
        ), E.mq.up(E.AV.md), E.mq.down(E.AV.xl), E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.cp.h6, E.mq.down(E.AV.sm), E.mq.down(E.AV.md)), ln = (0,
        f.default)(Pt.p).withConfig({
            displayName: "Card__StyledNextLinkMobile",
            componentId: "sc-ytoeq6-4"
        })(["margin-bottom:20px;"]), rn = f.default.div.withConfig({
            displayName: "Card__ImgWrapperMobile",
            componentId: "sc-ytoeq6-5"
        })(["justify-content:space-between;display:flex;flex-direction:row-reverse;align-items:self-end;max-width:230px;"]), on = f.default.div.withConfig({
            displayName: "Card__ImgWrapper",
            componentId: "sc-ytoeq6-6"
        })(["display:flex;align-items:end;flex-direction:column;> img{margin-right:160px;margin-bottom:26px;@media ", "{margin-right:30px;margin-bottom:16px;}@media ", "{margin-right:0;}}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.sm)), sn = f.default.a.withConfig({
            displayName: "Card__LinkText",
            componentId: "sc-ytoeq6-7"
        })(["font-size:14px;line-height:22px;color:#6c5dd3;font-family:'TT Fors Trial','Roboto',serif;border-bottom:1px solid #6c5dd3;margin:10px 5px 5px 50px;font-weight:600;&:hover{border:none;}@media ", "{margin:10px 5px 5px 10px;}@media ", "{margin-bottom:20px;}"], E.mq.down(E.AV.lg), E.mq.between(E.AV.sm, E.AV.md)), cn = f.default.p.withConfig({
            displayName: "Card__StyledP",
            componentId: "sc-ytoeq6-8"
        })(["", " max-width:410px;margin:8px 0 16px 0;color:#8990a5;margin-bottom:30px;white-space:break-spaces;@media ", "{margin-bottom:16px;}@media ", "{margin-bottom:25px;max-width:100vw;width:100%;text-wrap:inherit;white-space:normal;}"], E.cp.w_.regular, E.mq.down(E.AV.lg), E.mq.down(E.AV.sm)), dn = function() {
            return (0,
            B.jsx)(pn, {
                src: "images/NewHomePage/Liquidity.png",
                alt: "Liquidity"
            })
        }, pn = f.default.img.withConfig({
            displayName: "Liquidity__MainImage",
            componentId: "sc-qym9lo-0"
        })([""]), mn = function() {
            return (0,
            B.jsx)(fn, {
                src: "images/NewHomePage/Migrate.png",
                alt: "Migrate"
            })
        }, fn = f.default.img.withConfig({
            displayName: "Migrate__MainImage",
            componentId: "sc-8in525-0"
        })([""]), un = function() {
            return (0,
            B.jsx)(gn, {
                src: "images/NewHomePage/SHP.png",
                alt: "SHP"
            })
        }, gn = f.default.img.withConfig({
            displayName: "SHP__MainImage",
            componentId: "sc-1kmcmjt-0"
        })([""]);
        function hn() {
            return (hn = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function xn(e) {
            return x.createElement("svg", hn({
                width: 40,
                height: 30,
                viewBox: "0 0 40 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Nt || (Nt = x.createElement("path", {
                d: "M11.724 2.094h4.138v27.905h-4.138V2.094z",
                fill: "#6C5DD3"
            })), Qt || (Qt = x.createElement("path", {
                d: "M27.586 13.954v4.185H0v-4.185h27.586z",
                fill: "#6C5DD3"
            })), Ht || (Ht = x.createElement("path", {
                fill: "#E65FA0",
                d: "M40 0v4.186H26.207V0z"
            })))
        }
        var vn = function() {
            return (0,
            B.jsx)(_n, {
                src: "images/NewHomePage/Trade.png",
                alt: "trade"
            })
        }
          , _n = f.default.img.withConfig({
            displayName: "Trade__MainImage",
            componentId: "sc-ifavhd-0"
        })([""])
          , Cn = function() {
            var e = (0,
            o.$G)().t;
            return (0,
            B.jsxs)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: [(0,
                B.jsxs)(kn, {
                    children: [(0,
                    B.jsx)(yn, {
                        children: e("Rinance products")
                    }), (0,
                    B.jsx)(xn, {})]
                }), (0,
                B.jsx)(wn, {
                    children: (0,
                    B.jsxs)(En, {
                        children: [(0,
                        B.jsxs)("div", {
                            children: [(0,
                            B.jsx)($t, {
                                title: e("Trade"),
                                color: "#E3E3FC",
                                linkText: e("Start trading"),
                                text: e("Swap tokens at the best rates\nacross multiple networks"),
                                link: ve.Z.exchange,
                                onClick: function() {
                                    i.m.events.startTrading()
                                },
                                children: (0,
                                B.jsx)(vn, {})
                            }), (0,
                            B.jsx)($t, {
                                title: e("Strong Holders Pools"),
                                color: "#FEF2F3",
                                linkText: e("Join pools"),
                                text: e("Join staking pools alternative to earn\nALM at expense of Flippers"),
                                link: ve.Z.shp,
                                children: (0,
                                B.jsx)(un, {})
                            })]
                        }), (0,
                        B.jsxs)("div", {
                            children: [(0,
                            B.jsx)($t, {
                                title: e("Liquidity"),
                                color: "#E3F3FC",
                                linkText: e("Add liquidity"),
                                text: e("Add liquidity and earn fees\non every swap"),
                                link: ve.Z.add,
                                children: (0,
                                B.jsx)(dn, {})
                            }), (0,
                            B.jsx)($t, {
                                title: e("Migrate"),
                                color: "#EBE3FC",
                                linkText: e("Migrate liquidity"),
                                text: e("Transfer liquidity from one exchange\nto another within the same chain"),
                                link: ve.Z.migrate,
                                children: (0,
                                B.jsx)(mn, {})
                            })]
                        })]
                    })
                })]
            })
        }
          , En = f.default.div.withConfig({
            displayName: "RinanceProducts__CardWrapper",
            componentId: "sc-6qk5h-0"
        })(["display:flex;align-items:center;flex-direction:row;flex-wrap:wrap;align-items:baseline;@media ", "{margin-left:0;padding:0;justify-content:center;& > div{width:100%;}}@media ", "{& > div{margin:0 12px;}}"], E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , wn = f.default.div.withConfig({
            displayName: "RinanceProducts__ProductsContainer",
            componentId: "sc-6qk5h-1"
        })(["display:flex;align-items:center;justify-content:center;flex-direction:column;margin:0 0 96px 20px;@media ", "{margin-bottom:96px;}@media ", "{margin-bottom:56px;}@media ", "{margin-left:0;margin-bottom:46px;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , yn = f.default.span.withConfig({
            displayName: "RinanceProducts__MainText",
            componentId: "sc-6qk5h-2"
        })(["font-weight:600;font-size:40px;line-height:56px;color:#0b1359;font-family:'TT Fors Trial','Roboto',serif;@media ", "{", "}@media ", "{", " margin-right:0px;}"], E.mq.down(E.AV.md), E.cp.h4, E.mq.down(E.AV.sm), E.cp.h5)
          , kn = f.default.div.withConfig({
            displayName: "RinanceProducts__TextWrapper",
            componentId: "sc-6qk5h-3"
        })(["display:flex;justify-content:space-between;align-items:center;margin:120px auto 40px auto;max-width:1200px;position:relative;@media ", "{margin:120px 32px 40px 32px;}@media ", "{margin:56px 12px 20px 12px;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.sm))
          , Sn = function() {
            return (0,
            B.jsxs)("svg", {
                width: "120",
                height: "37",
                viewBox: "0 0 120 37",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.7092 9.2937L24.8595 10.1844C24.978 11.0131 25.0329 11.8493 25.0237 12.686C25.0227 14.5349 24.7952 16.3771 24.3458 18.1728C23.7382 20.6126 22.6797 22.9226 21.223 24.9885C19.5397 27.3613 17.1057 29.695 13.5578 31.5701L13.1237 31.7994L12.6897 31.5701C9.14187 29.695 6.70889 27.3613 5.02454 24.9885C3.5678 22.9226 2.50941 20.6126 1.90172 18.1728C1.45248 16.3774 1.22487 14.5356 1.22379 12.6869C1.21462 11.8502 1.26953 11.014 1.38805 10.1854L1.53837 9.29467C1.55119 9.22203 1.54923 9.14762 1.53259 9.07572C1.51594 9.00383 1.48494 8.93587 1.44137 8.87577C1.39781 8.81567 1.34254 8.76461 1.27874 8.72554C1.21495 8.68647 1.1439 8.66016 1.06969 8.64812C0.995472 8.63608 0.919565 8.63856 0.846329 8.65541C0.773094 8.67225 0.703989 8.70314 0.642989 8.74629C0.58199 8.78943 0.530306 8.84397 0.490914 8.90677C0.451523 8.96959 0.425203 9.03941 0.413472 9.11223L0.263155 10.003C0.133861 10.8919 0.0736272 11.7891 0.0829729 12.6869C0.0836893 14.6266 0.322326 16.5592 0.793744 18.4431C1.43546 21.0158 2.55257 23.4514 4.08978 25.6295C5.86672 28.1359 8.44402 30.6004 12.1532 32.5564L12.8579 32.9281C12.941 32.9722 13.0339 32.9952 13.1282 32.9952C13.2226 32.9952 13.3155 32.9722 13.3985 32.9281L14.1023 32.5564C17.8075 30.5994 20.3858 28.1359 22.1657 25.6295C23.7022 23.4515 24.8186 21.0162 25.4597 18.4441C25.9312 16.5602 26.1698 14.6276 26.1705 12.6879C26.1799 11.7901 26.1196 10.8928 25.9904 10.004L25.84 9.11321C25.8283 9.04038 25.8019 8.97056 25.7626 8.90775C25.7232 8.84494 25.6715 8.7904 25.6105 8.74726C25.5495 8.70412 25.4804 8.67323 25.4072 8.65638C25.3339 8.63954 25.258 8.63706 25.1838 8.6491C25.1096 8.66114 25.0385 8.68744 24.9747 8.72652C24.9109 8.76558 24.8557 8.81664 24.8122 8.87674C24.7686 8.93685 24.7376 9.0048 24.7209 9.0767C24.7043 9.1486 24.7023 9.22301 24.7152 9.29565L24.7092 9.2937Z",
                    fill: "#D55145"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.65392 8.68784L13.1257 6.15124L21.7866 8.74248C21.9316 8.78496 22.0879 8.76942 22.2213 8.69926C22.3546 8.6291 22.4541 8.51004 22.4981 8.36812C22.5421 8.2262 22.5269 8.073 22.4559 7.94203C22.3849 7.81106 22.2638 7.713 22.1191 7.6693L13.2919 5.02831C13.1836 4.99577 13.0678 4.99577 12.9594 5.02831L4.32042 7.61272C4.24822 7.63387 4.18101 7.66878 4.12262 7.71546C4.06423 7.76214 4.01583 7.81966 3.98018 7.88472C3.94454 7.94978 3.92236 8.0211 3.91491 8.09458C3.90747 8.16807 3.9149 8.24227 3.93679 8.31292C3.95869 8.38359 3.9946 8.44931 4.04248 8.50633C4.09036 8.56336 4.14926 8.61054 4.2158 8.6452C4.28234 8.67985 4.35521 8.70129 4.43022 8.70827C4.50523 8.71525 4.58092 8.70765 4.65292 8.68589L4.65392 8.68784Z",
                    fill: "#D55145"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0.470062 9.45768L12.6157 32.6892C12.6631 32.78 12.7349 32.8564 12.8234 32.9099C12.9119 32.9636 13.0137 32.9924 13.1178 32.9933C13.2218 32.9942 13.3241 32.9672 13.4136 32.9151C13.503 32.863 13.5762 32.7879 13.6252 32.698L21.0321 19.1222L21.043 19.1008L25.7839 9.44207C25.8481 9.30878 25.8561 9.15601 25.806 9.01699C25.756 8.87797 25.652 8.76392 25.5166 8.69965C25.3812 8.63538 25.2254 8.62606 25.0831 8.67374C24.9407 8.72141 24.8234 8.82223 24.7564 8.95425L20.0236 18.6051L13.1404 31.2297L1.48452 8.94645C1.45093 8.88029 1.40428 8.82132 1.34726 8.77295C1.29024 8.72459 1.224 8.68779 1.15237 8.6647C1.08074 8.6416 1.00514 8.63267 0.929958 8.63841C0.85478 8.64415 0.781508 8.66446 0.714394 8.69815C0.647277 8.73184 0.587652 8.77825 0.53897 8.83469C0.490289 8.89113 0.453521 8.95647 0.430795 9.02693C0.408069 9.0974 0.399838 9.17158 0.406578 9.24519C0.413319 9.31879 0.434897 9.39035 0.470062 9.45573V9.45768Z",
                    fill: "#D55145"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.28478 19.8066H19.791C19.9422 19.8066 20.0871 19.7478 20.194 19.6431C20.3009 19.5383 20.361 19.3963 20.361 19.2481C20.361 19.1 20.3009 18.958 20.194 18.8532C20.0871 18.7485 19.9422 18.6896 19.791 18.6896H6.28478C6.13362 18.6896 5.98866 18.7485 5.88177 18.8532C5.77489 18.958 5.71484 19.1 5.71484 19.2481C5.71484 19.3963 5.77489 19.5383 5.88177 19.6431C5.98866 19.7478 6.13362 19.8066 6.28478 19.8066ZM43.9573 14.9871H35.1708C35.019 14.9879 34.8735 15.0474 34.7662 15.1526C34.6588 15.2578 34.5982 15.4003 34.5974 15.5491V22.4603C34.5984 22.609 34.6592 22.7514 34.7665 22.8565C34.8738 22.9618 35.019 23.0213 35.1708 23.0223H43.9573V24.193H35.1708C34.939 24.194 34.7093 24.1501 34.4948 24.0636C34.2805 23.9771 34.0857 23.8499 33.9218 23.6893C33.7578 23.5286 33.628 23.3377 33.5398 23.1277C33.4515 22.9175 33.4067 22.6924 33.4078 22.4652V15.554C33.4067 15.3268 33.4515 15.1017 33.5398 14.8916C33.628 14.6815 33.7578 14.4906 33.9218 14.3299C34.0857 14.1693 34.2805 14.0421 34.4948 13.9556C34.7093 13.8691 34.939 13.8251 35.1708 13.8262H43.9573V14.9871ZM60.456 13.8203V14.9911H51.9941V18.4125H58.7955V19.593H51.9931V23.0203H60.455V24.1911H50.7985V13.8203H60.456Z",
                    fill: "#D55145"
                }), (0,
                B.jsx)("path", {
                    d: "M77.8802 15.5599V18.5979C77.8816 18.8251 77.8366 19.0501 77.748 19.2602C77.6595 19.4702 77.5302 19.6611 77.3659 19.8217C77.2023 19.9823 77.0073 20.1095 76.793 20.196C76.5788 20.2825 76.3488 20.3266 76.1173 20.3257H74.5016L77.8216 24.1843H76.2495L72.9438 20.3257H69.061C68.869 20.3161 68.6776 20.297 68.4876 20.2682V24.1843H67.293V13.832H76.108C76.3402 13.8311 76.5695 13.8752 76.7838 13.9618C76.9988 14.0483 77.193 14.1755 77.3573 14.3361C77.5209 14.4968 77.6509 14.6876 77.7388 14.8976C77.8273 15.1077 77.8723 15.3327 77.8716 15.5599H77.8802ZM69.065 19.1453H76.1173C76.1909 19.1462 76.2638 19.1327 76.3323 19.1054C76.4002 19.0783 76.4623 19.038 76.5145 18.987C76.5666 18.936 76.6073 18.8753 76.6352 18.8085C76.663 18.7416 76.6766 18.67 76.6759 18.5979V15.5599C76.6766 15.4867 76.663 15.414 76.6359 15.346C76.608 15.278 76.5666 15.2161 76.5145 15.1638C76.4638 15.1102 76.4023 15.0678 76.3337 15.0392C76.2652 15.0106 76.1909 14.9966 76.1166 14.9979H69.064C68.9122 14.9987 68.7668 15.0582 68.6594 15.1634C68.552 15.2686 68.4914 15.4111 68.4906 15.5599V18.5979C68.489 18.671 68.5033 18.7435 68.5325 18.8108C68.5617 18.8781 68.6051 18.9385 68.6598 18.9882C68.7133 19.0394 68.7767 19.0797 68.8463 19.1067C68.9158 19.1337 68.9902 19.1468 69.065 19.1453Z",
                    fill: "#D55145"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M84.1992 13.8203H94.7735V14.9911H90.0949V24.192H88.8999V14.9911H84.1992V13.8203ZM101.183 24.1872V13.8203H102.378V24.1872H101.183ZM118.255 13.8203H119.784L115.361 19.0037L119.798 24.1872H118.255L114.318 19.594H110.909V24.1872H109.706V13.8203H110.911V18.4125H114.32L118.255 13.8203Z",
                    fill: "#D55145"
                })]
            })
        }
          , An = function() {
            return (0,
            B.jsxs)("svg", {
                width: "120",
                height: "37",
                viewBox: "0 0 120 37",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.0235 11.5977V16.3403H4.17336V11.5989H0V25.5109H4.17336V20.5969H10.0235V25.5084H14.1972V11.5977H10.0235Z",
                    fill: "#6CDEB6"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M42.3128 11.5977V11.5989H40.2246V25.5109H44.4458V25.5097H55.6049V21.5591H44.4458V15.5482H55.602V11.5977H42.3128Z",
                    fill: "#6CDEB6"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M115.311 11.5977V17.5795L109.488 11.5977L109.476 11.607V11.5977H105.295V25.5109H109.476V19.3316L115.311 25.5109H119.492V11.5977H115.311Z",
                    fill: "#6CDEB6"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M74.8715 11.5977V16.3328H68.2812V11.6001H63.8867V25.5099H68.2812V20.5877H74.868V25.5109H79.2625V20.4526H75.1641L79.267 16.3328V11.5977H74.8715Z",
                    fill: "#6CDEB6"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.5379 11.5989V11.5977H33.5758V11.5989H34.3105V25.5097H30.1693V22.4977H24.2547V25.5109H20.1133V11.5989H20.5379ZM30.1693 18.3874H24.2547V15.5482H30.1693V18.3874Z",
                    fill: "#6CDEB6"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M86.3416 11.5977V11.5986H85.1836V25.5072H86.3161V25.5109H99.3548V21.5648H89.3256V20.5277H99.3567V16.5814H89.3256V15.544H99.3808V11.5977H86.3416Z",
                    fill: "#6CDEB6"
                })]
            })
        }
          , bn = function() {
            return (0,
            B.jsxs)("svg", {
                width: "120",
                height: "37",
                viewBox: "0 0 120 37",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                B.jsx)("path", {
                    d: "M25.1181 9.37482C19.9205 9.37482 15.7071 13.504 15.7071 18.5976C15.7071 23.6912 19.9205 27.8204 25.1181 27.8204C27.6533 27.8204 29.9538 26.8388 31.6468 25.2402L30.4232 24.2043C29.0318 25.4692 27.1669 26.2439 25.1181 26.2439C20.809 26.2439 17.3158 22.8205 17.3158 18.5976C17.3158 14.3747 20.809 10.9514 25.1181 10.9514C26.0531 10.9514 26.9516 11.1129 27.7848 11.4099C28.1824 11.5516 28.5649 11.724 28.9291 11.9242L27.4421 13.14C27.3557 13.1046 27.2683 13.0711 27.18 13.0397C26.5378 12.8108 25.8439 12.6856 25.1181 12.6856C21.7863 12.6856 19.0854 15.3325 19.0854 18.5976C19.0854 21.8627 21.7863 24.5097 25.1181 24.5097C26.9493 24.5097 28.5892 23.7111 29.6969 22.447L30.275 21.7873L34.1715 25.0858L33.5954 25.7419C31.5463 28.075 28.508 29.5546 25.1181 29.5546C18.9432 29.5546 13.9375 24.649 13.9375 18.5976C13.9375 12.5462 18.9432 7.64062 25.1181 7.64062C28.4012 7.64062 31.3549 9.02857 33.3991 11.2357L34.0112 11.8967L27.4421 17.4081L26.8631 16.8521C26.4125 16.4194 25.7978 16.154 25.1181 16.154C23.7409 16.154 22.6246 17.248 22.6246 18.5976C22.6246 19.9472 23.7409 21.0413 25.1181 21.0413C25.7978 21.0413 26.4125 20.7759 26.8631 20.3431C27.0878 20.1273 27.2707 19.8708 27.3993 19.5864L28.6868 20.8836C28.5176 21.1369 28.3211 21.371 28.1017 21.5817C27.3337 22.3193 26.2793 22.7755 25.1181 22.7755C22.7636 22.7755 20.855 20.905 20.855 18.5976C20.855 16.2903 22.7636 14.4198 25.1181 14.4198C25.9838 14.4198 26.7901 14.6733 27.4626 15.1079L31.4431 11.7683C29.7715 10.2803 27.5532 9.37482 25.1181 9.37482Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.4322 34.8047L0 18.7012L16.4322 2.59766L22.5453 8.58853C20.025 9.3768 14.92 12.5772 14.6626 19.0725C14.5632 21.5819 15.3089 23.5255 16.4192 24.9973L13.2952 28.0589L16.4322 31.1331L19.5692 28.0589L18.5007 27.0117C19.9199 28.0312 21.4477 28.5969 22.5453 28.8139L16.4322 34.8047ZM19.5692 9.29797L16.4322 6.22371L13.2952 9.29797L16.4322 12.3722L19.5692 9.29797ZM6.86031 21.7527L9.99731 18.6784L6.86031 15.6042L3.7233 18.6784L6.86031 21.7527ZM14.765 14.0061L11.6861 17.0234L8.54908 13.9491L11.628 10.9318L14.765 14.0061ZM11.6861 26.325L14.765 23.3077L11.628 20.2334L8.54908 23.2508L11.6861 26.325Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M40.3504 15.91C41.3213 15.91 42.106 16.2143 42.7044 16.8228C43.3027 17.4313 43.6019 18.2667 43.6019 19.3288V24.4239H41.7729V19.5114C41.7729 18.8918 41.6036 18.416 41.2649 18.0841C40.9262 17.7522 40.4633 17.5862 39.8762 17.5862C39.2327 17.5862 38.7133 17.7854 38.3182 18.1837C37.923 18.5709 37.7255 19.1684 37.7255 19.9761V24.4239H35.8965V12.8065H37.7255V17.1879C38.2787 16.336 39.1537 15.91 40.3504 15.91Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M52.3029 16.1257H54.1319V24.4239H52.3029V23.229C51.6143 24.1694 50.6264 24.6397 49.3393 24.6397C48.1764 24.6397 47.1829 24.2192 46.3588 23.3783C45.5346 22.5264 45.1225 21.4919 45.1225 20.2748C45.1225 19.0467 45.5346 18.0122 46.3588 17.1713C47.1829 16.3304 48.1764 15.91 49.3393 15.91C50.6264 15.91 51.6143 16.3747 52.3029 17.3041V16.1257ZM47.7136 22.1834C48.2216 22.6813 48.8595 22.9302 49.6272 22.9302C50.3949 22.9302 51.0328 22.6813 51.5409 22.1834C52.0489 21.6744 52.3029 21.0383 52.3029 20.2748C52.3029 19.5114 52.0489 18.8807 51.5409 18.3828C51.0328 17.8739 50.3949 17.6194 49.6272 17.6194C48.8595 17.6194 48.2216 17.8739 47.7136 18.3828C47.2055 18.8807 46.9515 19.5114 46.9515 20.2748C46.9515 21.0383 47.2055 21.6744 47.7136 22.1834Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M58.0165 14.5491C57.7907 14.7704 57.5198 14.881 57.2036 14.881C56.8875 14.881 56.6109 14.7704 56.3738 14.5491C56.148 14.3167 56.0351 14.0457 56.0351 13.7359C56.0351 13.4261 56.148 13.1605 56.3738 12.9393C56.5996 12.7069 56.8762 12.5907 57.2036 12.5907C57.5311 12.5907 57.8077 12.7069 58.0335 12.9393C58.2593 13.1605 58.3722 13.4261 58.3722 13.7359C58.3722 14.0457 58.2536 14.3167 58.0165 14.5491ZM56.2892 24.4239V16.1257H58.1181V24.4239H56.2892Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M64.7211 15.91C65.692 15.91 66.4767 16.2143 67.0751 16.8228C67.6734 17.4313 67.9726 18.2667 67.9726 19.3288V24.4239H66.1436V19.5114C66.1436 18.8918 65.9743 18.416 65.6356 18.0841C65.2969 17.7522 64.834 17.5862 64.2469 17.5862C63.6034 17.5862 63.084 17.7854 62.6889 18.1837C62.2937 18.5709 62.0962 19.1684 62.0962 19.9761V24.4239H60.2672V16.1257H62.0962V17.1879C62.6494 16.336 63.5243 15.91 64.7211 15.91Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M71.6101 18.416C71.6101 18.6926 71.7625 18.9139 72.0673 19.0799C72.3834 19.2348 72.7616 19.3731 73.202 19.4948C73.6536 19.6054 74.1052 19.7382 74.5568 19.8931C75.0084 20.048 75.3866 20.3136 75.6914 20.6897C76.0075 21.0549 76.1656 21.5196 76.1656 22.0838C76.1656 22.8804 75.8495 23.5056 75.2172 23.9592C74.5963 24.4128 73.8116 24.6397 72.8633 24.6397C72.0278 24.6397 71.3109 24.4682 70.7125 24.1252C70.1141 23.7822 69.6795 23.3064 69.4085 22.6979L70.9835 21.8017C71.277 22.5983 71.9036 22.9966 72.8633 22.9966C73.8229 22.9966 74.3027 22.6868 74.3027 22.0672C74.3027 21.8017 74.1447 21.5859 73.8285 21.42C73.5237 21.254 73.1455 21.1157 72.6939 21.0051C72.2536 20.8834 71.8076 20.7451 71.356 20.5902C70.9044 20.4353 70.5206 20.1808 70.2045 19.8267C69.8996 19.4616 69.7472 19.0024 69.7472 18.4492C69.7472 17.6858 70.0407 17.0717 70.6278 16.607C71.2262 16.1423 71.9657 15.91 72.8463 15.91C73.5463 15.91 74.1673 16.0649 74.7092 16.3747C75.2624 16.6734 75.6858 17.0939 75.9793 17.636L74.4382 18.4824C74.1447 17.8518 73.614 17.5364 72.8463 17.5364C72.4963 17.5364 72.2028 17.6139 71.9657 17.7688C71.7286 17.9126 71.6101 18.1284 71.6101 18.416Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M83.4066 16.1257H85.2356V24.4239H83.4066V23.3617C82.8534 24.2137 81.9784 24.6397 80.7817 24.6397C79.8108 24.6397 79.0261 24.3354 78.4277 23.7269C77.8294 23.1183 77.5302 22.283 77.5302 21.2208V16.1257H79.3592V21.0383C79.3592 21.6579 79.5285 22.1336 79.8672 22.4655C80.2059 22.7975 80.6688 22.9634 81.2559 22.9634C81.8994 22.9634 82.4187 22.7698 82.8139 22.3826C83.209 21.9842 83.4066 21.3812 83.4066 20.5736V16.1257Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M87.3997 24.4239V12.3086H89.2287V24.4239H87.3997Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M96.1026 17.8518H94.0027V21.8349C94.0027 22.1779 94.0817 22.4268 94.2397 22.5817C94.3978 22.7255 94.6293 22.8085 94.9341 22.8307C95.2502 22.8417 95.6397 22.8362 96.1026 22.8141V24.4239C94.7026 24.5899 93.6978 24.4737 93.0882 24.0754C92.4785 23.666 92.1737 22.9192 92.1737 21.8349V17.8518H90.6157V16.1257H92.1737V14.3333L94.0027 13.8023V16.1257H96.1026V17.8518Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M99.5142 14.5491C99.2884 14.7704 99.0175 14.881 98.7013 14.881C98.3852 14.881 98.1086 14.7704 97.8715 14.5491C97.6457 14.3167 97.5328 14.0457 97.5328 13.7359C97.5328 13.4261 97.6457 13.1605 97.8715 12.9393C98.0973 12.7069 98.3739 12.5907 98.7013 12.5907C99.0287 12.5907 99.3053 12.7069 99.5311 12.9393C99.757 13.1605 99.8698 13.4261 99.8698 13.7359C99.8698 14.0457 99.7513 14.3167 99.5142 14.5491ZM97.7868 24.4239V16.1257H99.6158V24.4239H97.7868Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M106.219 15.91C107.19 15.91 107.974 16.2143 108.573 16.8228C109.171 17.4313 109.47 18.2667 109.47 19.3288V24.4239H107.641V19.5114C107.641 18.8918 107.472 18.416 107.133 18.0841C106.795 17.7522 106.332 17.5862 105.745 17.5862C105.101 17.5862 104.582 17.7854 104.187 18.1837C103.791 18.5709 103.594 19.1684 103.594 19.9761V24.4239H101.765V16.1257H103.594V17.1879C104.147 16.336 105.022 15.91 106.219 15.91Z",
                    fill: "#274584"
                }), (0,
                B.jsx)("path", {
                    d: "M118.205 16.1257H120V24.0422C120 25.3035 119.577 26.2716 118.73 26.9465C117.883 27.6215 116.856 27.9589 115.648 27.9589C113.695 27.9589 112.357 27.2895 111.634 25.9508L113.209 25.0546C113.65 25.9065 114.474 26.3325 115.682 26.3325C116.472 26.3325 117.087 26.1278 117.528 25.7184C117.979 25.3201 118.205 24.7614 118.205 24.0422V23.0298C117.516 23.9924 116.534 24.4737 115.258 24.4737C114.062 24.4737 113.051 24.0588 112.227 23.229C111.403 22.3881 110.991 21.3757 110.991 20.1918C110.991 19.008 111.403 18.0011 112.227 17.1713C113.051 16.3304 114.062 15.91 115.258 15.91C116.534 15.91 117.516 16.3913 118.205 17.3539V16.1257ZM113.582 22.0506C114.101 22.5485 114.745 22.7975 115.513 22.7975C116.28 22.7975 116.918 22.5485 117.426 22.0506C117.946 21.5527 118.205 20.9331 118.205 20.1918C118.205 19.4505 117.946 18.8309 117.426 18.3331C116.918 17.8352 116.28 17.5862 115.513 17.5862C114.745 17.5862 114.101 17.8352 113.582 18.3331C113.074 18.8309 112.82 19.4505 112.82 20.1918C112.82 20.9331 113.074 21.5527 113.582 22.0506Z",
                    fill: "#274584"
                })]
            })
        }
          , Rn = function() {
            return (0,
            B.jsxs)("svg", {
                width: "120",
                height: "37",
                viewBox: "0 0 120 37",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                B.jsx)("path", {
                    opacity: "0.98",
                    d: "M0.53973 17.1789L13.7621 4.40625L14.9319 6.20523L2.42857 18.663V18.708L12.143 28.4674L11.4238 30.4913L0 18.798L0.53973 17.1789Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M22.3071 15.022C22.3071 15.067 22.3521 15.067 22.3521 15.112C22.3488 15.0774 22.3328 15.0454 22.3071 15.022ZM18.5742 12.9083L18.6642 12.8633C18.6408 12.8889 18.6088 12.905 18.5742 12.9083Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M30.5831 20.4628L17.3612 33.1905L16.1914 31.3915L28.6942 18.9787V18.9337L19.0248 9.1293L19.744 7.10547L31.1678 18.8438L30.5831 20.4629V20.4628Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.98446 24.4643C10.122 24.0343 10.2873 23.6137 10.4791 23.205C11.2437 21.6309 12.2781 20.2367 13.4025 18.9325C14.8867 17.2684 16.5507 15.7839 18.4396 14.5699C19.2465 14.0203 20.1238 13.5816 21.0477 13.2657C21.0926 13.2208 21.1826 13.2208 21.273 13.1758L20.7332 13.8504C20.1485 14.5696 19.5189 15.2896 19.0242 16.0991C18.9792 16.189 18.9342 16.189 18.8443 16.189C18.4631 16.2962 18.0703 16.3566 17.6746 16.3689C17.8095 16.5488 18.0343 16.6388 18.2143 16.7287C18.3042 16.7737 18.4841 16.7737 18.5291 16.9086C18.5291 16.9985 18.3942 17.1339 18.3492 17.2234C18.3087 17.3278 18.2419 17.42 18.1552 17.4909C18.0685 17.5619 17.9649 17.6091 17.8545 17.6281C17.4888 17.7352 17.111 17.7956 16.7302 17.808C16.7302 17.8979 16.7751 17.8979 16.8201 17.9429C17.0495 18.1212 17.3083 18.2582 17.5847 18.3476C17.6746 18.3926 17.6746 18.4376 17.6297 18.5275C17.5397 18.7528 17.3598 18.8423 17.135 18.8873C16.5654 19.0716 15.9771 19.1922 15.381 19.247H15.336C15.4598 19.3657 15.5956 19.4712 15.7412 19.5617C16.0154 19.6937 16.3015 19.7992 16.5957 19.877C16.6407 19.877 16.6856 19.9219 16.6407 19.9669C16.4154 20.2817 16.191 20.5966 15.8761 20.8214C15.6508 21.0467 15.3814 21.0467 15.0665 21.0467H14.0321C13.7615 21.0393 13.4907 21.0543 13.2226 21.0917C13.0087 21.1227 12.8152 21.2356 12.6829 21.4065C12.2331 21.9011 11.9637 22.5308 11.6484 23.1155L11.5135 23.3853C11.4236 23.7451 11.1987 23.9251 10.8839 24.06C10.614 24.1049 10.2992 24.2853 9.98438 24.4647L9.98446 24.4643Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M39.5954 20.7649H41.2677L42.6694 22.6094L43.0383 23.1012L45.1287 25.8802H43.4564L42.0792 24.0357L41.7349 23.5685L39.5954 20.7649ZM45.6452 18.404C45.6452 19.732 45.4054 20.8797 44.9258 21.847C44.4463 22.8143 43.7884 23.5603 42.9523 24.0849C42.1161 24.6096 41.1611 24.8719 40.0872 24.8719C39.0133 24.8719 38.0583 24.6096 37.2222 24.0849C36.386 23.5603 35.7282 22.8143 35.2486 21.847C34.7691 20.8797 34.5293 19.732 34.5293 18.404C34.5293 17.076 34.7691 15.9284 35.2486 14.9611C35.7282 13.9938 36.386 13.2478 37.2222 12.7231C38.0583 12.1985 39.0133 11.9362 40.0872 11.9362C41.1611 11.9362 42.1161 12.1985 42.9523 12.7231C43.7884 13.2478 44.4463 13.9938 44.9258 14.9611C45.4054 15.9284 45.6452 17.076 45.6452 18.404ZM44.1696 18.404C44.1696 17.3138 43.9872 16.3936 43.6224 15.6435C43.2617 14.8934 42.7719 14.3258 42.153 13.9405C41.5382 13.5552 40.8496 13.3625 40.0872 13.3625C39.3249 13.3625 38.6342 13.5552 38.0153 13.9405C37.4005 14.3258 36.9107 14.8934 36.5459 15.6435C36.1852 16.3936 36.0049 17.3138 36.0049 18.404C36.0049 19.4943 36.1852 20.4145 36.5459 21.1646C36.9107 21.9146 37.4005 22.4823 38.0153 22.8676C38.6342 23.2529 39.3249 23.4455 40.0872 23.4455C40.8496 23.4455 41.5382 23.2529 42.153 22.8676C42.7719 22.4823 43.2617 21.9146 43.6224 21.1646C43.9872 20.4145 44.1696 19.4943 44.1696 18.404Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M53.9636 20.8387V15.2562H55.4146V24.6997H53.9636V23.1012H53.8652C53.6439 23.5808 53.2996 23.9886 52.8323 24.3247C52.3651 24.6567 51.7749 24.8227 51.0617 24.8227C50.4715 24.8227 49.9468 24.6936 49.4877 24.4354C49.0287 24.173 48.668 23.7796 48.4057 23.2549C48.1434 22.7262 48.0122 22.0601 48.0122 21.2568V15.2562H49.4632V21.1584C49.4632 21.847 49.6558 22.3962 50.0411 22.8061C50.4305 23.216 50.9264 23.4209 51.5289 23.4209C51.8896 23.4209 52.2565 23.3287 52.6295 23.1443C53.0065 22.9598 53.3221 22.677 53.5763 22.2958C53.8345 21.9146 53.9636 21.4289 53.9636 20.8387Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M58.0721 24.6997V15.2562H59.5231V24.6997H58.0721ZM58.8099 13.6823C58.5271 13.6823 58.2832 13.5859 58.0783 13.3933C57.8774 13.2006 57.777 12.9691 57.777 12.6985C57.777 12.428 57.8774 12.1964 58.0783 12.0038C58.2832 11.8112 58.5271 11.7148 58.8099 11.7148C59.0927 11.7148 59.3345 11.8112 59.5354 12.0038C59.7403 12.1964 59.8428 12.428 59.8428 12.6985C59.8428 12.9691 59.7403 13.2006 59.5354 13.3933C59.3345 13.5859 59.0927 13.6823 58.8099 13.6823Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M63.6316 12.1083V24.6997H62.1806V12.1083H63.6316Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M67.7401 12.1083V24.6997H66.2891V12.1083H67.7401Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M71.1108 24.6997H69.5123L74.1357 12.1083H75.7096L80.333 24.6997H78.7345L74.9718 14.1003H74.8735L71.1108 24.6997ZM71.701 19.7812H78.1443V21.1338H71.701V19.7812Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M88.049 20.8387V15.2562H89.4999V24.6997H88.049V23.1012H87.9506C87.7292 23.5808 87.3849 23.9886 86.9177 24.3247C86.4504 24.6567 85.8602 24.8227 85.147 24.8227C84.5568 24.8227 84.0322 24.6936 83.5731 24.4354C83.114 24.173 82.7533 23.7796 82.491 23.2549C82.2287 22.7262 82.0975 22.0601 82.0975 21.2568V15.2562H83.5485V21.1584C83.5485 21.847 83.7411 22.3962 84.1264 22.8061C84.5158 23.216 85.0118 23.4209 85.6143 23.4209C85.975 23.4209 86.3418 23.3287 86.7148 23.1443C87.0919 22.9598 87.4075 22.677 87.6616 22.2958C87.9198 21.9146 88.049 21.4289 88.049 20.8387Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M95.7234 24.8965C94.9364 24.8965 94.2417 24.6977 93.6392 24.3001C93.0366 23.8984 92.5653 23.3328 92.2251 22.6032C91.8849 21.8695 91.7148 21.0026 91.7148 20.0026C91.7148 19.0106 91.8849 18.1499 92.2251 17.4203C92.5653 16.6907 93.0387 16.1272 93.6453 15.7296C94.2519 15.332 94.9528 15.1332 95.748 15.1332C96.3628 15.1332 96.8485 15.2357 97.2051 15.4406C97.5658 15.6415 97.8404 15.871 98.0289 16.1292C98.2216 16.3833 98.3712 16.5924 98.4777 16.7563H98.6007V12.1083H100.052V24.6997H98.6499V23.2488H98.4777C98.3712 23.4209 98.2195 23.6382 98.0228 23.9005C97.826 24.1587 97.5453 24.3903 97.1805 24.5952C96.8157 24.7961 96.33 24.8965 95.7234 24.8965ZM95.9201 23.5931C96.5021 23.5931 96.994 23.4414 97.3957 23.1381C97.7974 22.8307 98.1027 22.4065 98.3118 21.8654C98.5208 21.3203 98.6253 20.6911 98.6253 19.978C98.6253 19.273 98.5228 18.6561 98.3179 18.1274C98.113 17.5945 97.8097 17.1805 97.408 16.8854C97.0063 16.5862 96.5103 16.4366 95.9201 16.4366C95.3053 16.4366 94.793 16.5944 94.3831 16.91C93.9773 17.2215 93.6719 17.6458 93.467 18.1827C93.2662 18.7155 93.1658 19.314 93.1658 19.978C93.1658 20.6502 93.2682 21.2609 93.4732 21.8101C93.6822 22.3552 93.9896 22.7897 94.3954 23.1135C94.8053 23.4332 95.3135 23.5931 95.9201 23.5931Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M102.911 24.6997V15.2562H104.362V24.6997H102.911ZM103.648 13.6823C103.366 13.6823 103.122 13.5859 102.917 13.3933C102.716 13.2006 102.615 12.9691 102.615 12.6985C102.615 12.428 102.716 12.1964 102.917 12.0038C103.122 11.8112 103.366 11.7148 103.648 11.7148C103.931 11.7148 104.173 11.8112 104.374 12.0038C104.579 12.1964 104.681 12.428 104.681 12.6985C104.681 12.9691 104.579 13.2006 104.374 13.3933C104.173 13.5859 103.931 13.6823 103.648 13.6823Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M111.126 15.2562V16.4858H106.232V15.2562H111.126ZM107.658 12.9937H109.109V21.9946C109.109 22.4044 109.169 22.7118 109.288 22.9168C109.411 23.1176 109.566 23.2529 109.755 23.3226C109.948 23.3881 110.151 23.4209 110.364 23.4209C110.524 23.4209 110.655 23.4127 110.757 23.3963C110.86 23.3758 110.942 23.3594 111.003 23.3471L111.298 24.6506C111.2 24.6874 111.062 24.7243 110.886 24.7612C110.71 24.8022 110.487 24.8227 110.216 24.8227C109.806 24.8227 109.405 24.7346 109.011 24.5583C108.622 24.3821 108.298 24.1136 108.04 23.7529C107.786 23.3922 107.658 22.9373 107.658 22.388V12.9937Z",
                    fill: "#1367D7"
                }), (0,
                B.jsx)("path", {
                    d: "M119.829 17.3711L118.525 17.74C118.443 17.5228 118.322 17.3117 118.163 17.1068C118.007 16.8977 117.794 16.7256 117.523 16.5903C117.253 16.4551 116.906 16.3874 116.484 16.3874C115.906 16.3874 115.425 16.5206 115.039 16.7871C114.658 17.0494 114.468 17.3834 114.468 17.7892C114.468 18.1499 114.599 18.4348 114.861 18.6438C115.123 18.8528 115.533 19.027 116.091 19.1664L117.492 19.5107C118.337 19.7156 118.966 20.0292 119.38 20.4514C119.794 20.8694 120.001 21.4084 120.001 22.0683C120.001 22.6094 119.845 23.093 119.534 23.5193C119.226 23.9456 118.796 24.2817 118.243 24.5276C117.689 24.7735 117.046 24.8965 116.312 24.8965C115.349 24.8965 114.552 24.6874 113.92 24.2694C113.289 23.8513 112.89 23.2406 112.721 22.4372L114.099 22.0929C114.23 22.6012 114.478 22.9824 114.843 23.2365C115.211 23.4906 115.693 23.6177 116.287 23.6177C116.964 23.6177 117.501 23.4742 117.898 23.1873C118.3 22.8963 118.501 22.5479 118.501 22.1421C118.501 21.8142 118.386 21.5396 118.156 21.3183C117.927 21.0928 117.574 20.9248 117.099 20.8141L115.525 20.4452C114.66 20.2403 114.025 19.9226 113.619 19.4923C113.217 19.0578 113.017 18.5147 113.017 17.863C113.017 17.3302 113.166 16.8588 113.465 16.4489C113.769 16.039 114.181 15.7173 114.701 15.4837C115.226 15.25 115.82 15.1332 116.484 15.1332C117.419 15.1332 118.152 15.3382 118.685 15.748C119.222 16.1579 119.603 16.6989 119.829 17.3711Z",
                    fill: "#1367D7"
                })]
            })
        }
          , jn = function() {
            return (0,
            B.jsx)(In, {
                src: "images/NewHomePage/Shield.png",
                alt: "shield"
            })
        }
          , In = f.default.img.withConfig({
            displayName: "Shield__MainImage",
            componentId: "sc-50hts5-0"
        })([""])
          , Bn = function() {
            var e = (0,
            o.$G)().t;
            return (0,
            B.jsx)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: (0,
                B.jsx)(Jn, {
                    id: "audits",
                    children: (0,
                    B.jsxs)(Vn, {
                        children: []
                    })
                })
            })
        }
          , Jn = f.default.div.withConfig({
            displayName: "Audits__AuditsRoot",
            componentId: "sc-5t372x-0"
        })(["display:flex;max-width:1200px;justify-content:space-between;background:url('images/NewHomePage/Map.png') no-repeat left;background-position:50% -110%;padding-bottom:20px;margin:0 auto;@media ", "{background-position:50% -250%;}@media ", "{background-position:50% -40%;}@media ", "{justify-content:center;background-position:50% 20%;margin-right:0;}@media ", "{margin-right:0;}"], E.mq.down(E.AV.xl), E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , On = f.default.p.withConfig({
            displayName: "Audits__AuditsSecondText",
            componentId: "sc-5t372x-1"
        })(["color:#0b1359;font-family:'TT Fors Trial','Roboto',serif;@media ", "{text-align:inherit;max-width:637px;}@media ", "{margin-left:0;max-width:350px;text-align:inherit;font-weight:400;font-size:16px;line-height:24px;letter-spacing:0.75px;}"], E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , Fn = f.default.p.withConfig({
            displayName: "Audits__HomeTitle",
            componentId: "sc-5t372x-2"
        })(["display:flex;align-items:center;font-size:50px;line-height:64px;font-weight:bold;font-family:'TT Fors Trial','Roboto',serif;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-right:40px;@media ", "{", " margin-right:27px;}@media ", "{", " margin:0 0 16px 0;}"], E.mq.down(E.AV.md), E.cp.h3, E.mq.down(E.AV.sm), E.cp.h4)
          , Mn = f.default.div.withConfig({
            displayName: "Audits__TextWrapper",
            componentId: "sc-5t372x-3"
        })(["display:flex;align-items:center;margin:80px 0 25px;> img{margin-right:10px;}@media ", "{margin:118px 0 63px;width:95vw;}@media ", "{margin:80px 24px 25px;width:95%;justify-content:space-between;> img{margin-right:6px;}}@media ", "{margin:66px 12px 25px;flex-direction:column;align-items:flex-start;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , zn = f.default.div.withConfig({
            displayName: "Audits__CardsWrapper",
            componentId: "sc-5t372x-4"
        })(["display:flex;justify-content:center;align-items:center;width:100%;@media ", "{justify-content:space-between;padding:0 4px;}@media ", "{padding:0 12px;flex-wrap:wrap;}@media ", "{padding:0 8px;width:100%;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , Vn = f.default.div.withConfig({
            displayName: "Audits__AuditsContainer",
            componentId: "sc-5t372x-5"
        })(["display:flex;justify-content:center;align-items:center;flex-direction:column;align-items:baseline;width:100%;@media ", "{margin:0 24px;}@media ", "{margin:0 12px;align-items:space-between;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md))
          , Un = n(87094)
          , Tn = n(30266)
          , Ln = n(809)
          , qn = n.n(Ln)
          , Nn = n(9669)
          , Qn = n.n(Nn)
          , Hn = n(52503)
          , Dn = n(83789)
          , Pn = function(e) {
            var t = e.split(",")[1]
              , n = atob(t)
              , i = (new window.DOMParser).parseFromString(n, "application/xml")
              , a = new DOMParser
              , l = i.getElementsByTagName("item");
            return (0,
            Dn.Z)(l).map((function(e) {
                var t, n;
                return {
                    link: e.querySelector("link").innerHTML,
                    title: e.querySelector("title").innerHTML,
                    pubDate: null === (t = e.querySelector("pubDate")) || void 0 === t ? void 0 : t.innerHTML,
                    readingTimeMin: e.querySelector("readingTimeMin").innerHTML,
                    img: null === (n = a.parseFromString(e.innerHTML, "text/html").querySelector("img")) || void 0 === n ? void 0 : n.src
                }
            }
            ))
        }
          , Gn = n(59168)
          , Zn = (n(95339),
        function(e) {
            var t = e.onClose
              , n = void 0 === t ? function() {}
            : t
              , i = e.open
              , a = void 0 !== i && i
              , l = e.type
              , r = void 0 === l ? "success" : l
              , o = (0,
            h.$G)().t
              , s = (0,
            f.useTheme)()
              , c = (0,
            x.useMemo)((function() {
                switch (r) {
                case "error":
                    return {
                        icon: (0,
                        B.jsx)(p.Pz, {
                            width: "80px",
                            height: "80px",
                            className: "icon",
                            color: s.colors.pureRed
                        }),
                        title: o("Subscribe error"),
                        subTitle: o("Try lates")
                    };
                case "success":
                    return {
                        icon: (0,
                        B.jsx)(p.tm, {
                            width: "80px",
                            height: "80px",
                            className: "icon"
                        }),
                        title: o("Thanks for subscribing"),
                        subTitle: o("The best news in the cryptoworld awaits you")
                    }
                }
            }
            ), [o, s.colors.pureRed, r]);
            return (0,
            B.jsx)(Wn, {
                isOpen: a,
                onDismiss: n,
                children: (0,
                B.jsxs)(Xn, {
                    "data-type": r,
                    children: [(0,
                    B.jsx)(Kn, {
                        onClick: n,
                        children: (0,
                        B.jsx)(p.Tw, {})
                    }), null === c || void 0 === c ? void 0 : c.icon, (0,
                    B.jsx)(Yn, {
                        "data-type": r,
                        children: null === c || void 0 === c ? void 0 : c.title
                    }), (0,
                    B.jsx)($n, {
                        children: null === c || void 0 === c ? void 0 : c.subTitle
                    })]
                })
            })
        }
        )
          , Wn = (0,
        f.default)(Gn.t9).withConfig({
            displayName: "SubscribeResultModal__DialogConteainer",
            componentId: "sc-klramg-0"
        })(["&[data-reach-dialog-overlay]{z-index:21;background-color:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:rgba(11,19,89,0.9);}"])
          , Xn = (0,
        f.default)(Gn.cZ).withConfig({
            displayName: "SubscribeResultModal__Content",
            componentId: "sc-klramg-1"
        })(["&[data-reach-dialog-content]{width:100%;max-width:345px;position:relative;display:flex;flex-direction:column;align-items:center;padding:80px 72px 72px;border-radius:6px;text-align:center;& .icon{margin-bottom:24px;}}&[data-type='error']{", "}"], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["border:2px solid ", ";"], t.colors.pureRed)
        }
        ))
          , Kn = f.default.button.withConfig({
            displayName: "SubscribeResultModal__CloseBtn",
            componentId: "sc-klramg-2"
        })(["position:absolute;width:40px;height:40px;", " background-color:transparent;border-radius:8px;cursor:pointer;top:16px;right:16px;"], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["border:1px solid ", ";"], t.colors.blueHaze)
        }
        ))
          , Yn = f.default.h3.withConfig({
            displayName: "SubscribeResultModal__Title",
            componentId: "sc-klramg-3"
        })(["font-family:'TT Fors Trial',sans-serif;font-style:normal;font-weight:500;font-size:24px;line-height:30px;letter-spacing:0.3px;", " margin-bottom:16px;&[data-type='error']{", "}"], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.text)
        }
        ), (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.pureRed)
        }
        ))
          , $n = f.default.span.withConfig({
            displayName: "SubscribeResultModal__SubTitle",
            componentId: "sc-klramg-4"
        })(["font-family:'TT Fors Trial',sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:20px;letter-spacing:0.3px;", ""], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.basic)
        }
        ))
          , ei = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
          , ti = function e() {
            var t = (0,
            o.$G)().t
              , n = (0,
            x.useState)("")
              , a = n[0]
              , l = n[1]
              , r = (0,
            x.useState)("")
              , s = r[0]
              , c = r[1]
              , d = (0,
            C.Z)(E.mq.between(E.AV.sm, E.AV.md))
              , p = ei.test(s)
              , m = function() {
                var e = (0,
                Tn.Z)(qn().mark((function e() {
                    return qn().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (!p) {
                                    e.next = 13;
                                    break
                                }
                                return e.prev = 1,
                                e.next = 4,
                                Qn().post("/api/subscribe_email", {
                                    emails: [s]
                                });
                            case 4:
                                i.m.events.subscribe(),
                                l("success"),
                                c(""),
                                e.next = 13;
                                break;
                            case 9:
                                e.prev = 9,
                                e.t0 = e.catch(1),
                                l("error"),
                                c("");
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 9]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            B.jsxs)(e.Root, {
                children: [a && (0,
                B.jsx)(Zn, {
                    open: !0,
                    type: a,
                    onClose: function() {
                        l("")
                    }
                }), d ? (0,
                B.jsxs)(B.Fragment, {
                    children: [(0,
                    B.jsxs)(ri, {
                        children: [(0,
                        B.jsxs)("div", {
                            children: [(0,
                            B.jsx)(e.Caption, {
                                children: t("Subscribe to stay tuned")
                            }), (0,
                            B.jsx)(e.P, {
                                children: t("Feature updates, crypto & blockchain news and hints to get the most out of Rinance Finance")
                            })]
                        }), (0,
                        B.jsx)(e.FlyIcon, {})]
                    }), (0,
                    B.jsxs)(oi, {
                        children: [(0,
                        B.jsx)(e.Input, {
                            type: "email",
                            placeholder: t("Type your email"),
                            value: s,
                            onChange: function(e) {
                                c(e.target.value)
                            }
                        }), (0,
                        B.jsx)(e.Button, {
                            disabled: !p && !!s,
                            onClick: m,
                            children: t("Subscribe")
                        })]
                    }), (0,
                    B.jsxs)(e.PrivacyPolicy, {
                        children: [t("We'll send you our news digest once a month. By clicking \u201cSubscribe\u201d, you agree to our"), (0,
                        B.jsxs)("a", {
                            href: "https://docs.alium.finance/legal/privacy-policy",
                            target: "_blank",
                            children: [t("Privacy Policy"), "."]
                        })]
                    })]
                }) : (0,
                B.jsxs)(B.Fragment, {
                    children: [(0,
                    B.jsx)(e.FlyIcon, {}), (0,
                    B.jsx)(e.Caption, {
                        children: t("Subscribe to stay tuned")
                    }), (0,
                    B.jsx)(e.P, {
                        children: t("Feature updates, crypto & blockchain news and hints to get the most out of Rinance Finance")
                    }), (0,
                    B.jsx)(e.Input, {
                        type: "email",
                        value: s,
                        placeholder: t("Type your email"),
                        onChange: function(e) {
                            c(e.target.value)
                        }
                    }), (0,
                    B.jsx)(e.Button, {
                        disabled: !p && !!s,
                        onClick: m,
                        children: t("Subscribe")
                    }), (0,
                    B.jsxs)(e.PrivacyPolicy, {
                        children: [t("We'll send you our news digest once a month. By clicking \u201cSubscribe\u201d, you agree to our"), (0,
                        B.jsxs)("a", {
                            href: "https://docs.alium.finance/legal/privacy-policy",
                            target: "_blank",
                            children: [t("Privacy Policy"), "."]
                        })]
                    })]
                })]
            })
        };
        ti.Button = (0,
        f.default)(p.zx).withConfig({
            displayName: "Form__Button",
            componentId: "sc-65r2mv-0"
        })(["width:100%;padding:17px 24px;", ";height:56px;"], E.cp.UR.demiBold),
        ti.Input = (0,
        f.default)(p.II).withConfig({
            displayName: "Form__Input",
            componentId: "sc-65r2mv-1"
        })(["", ";display:flex;height:56px;padding:20px 16px 20px 12px;align-items:center;&::placeholder{color:", ";}"], E.cp.UR.regular, (function(e) {
            return e.theme.colors.basic
        }
        )),
        ti.Caption = (0,
        f.default)(Yt.Fe).withConfig({
            displayName: "Form__Caption",
            componentId: "sc-65r2mv-2"
        })(["@media ", "{text-align:center;}"], E.mq.down(E.AV.lg)),
        ti.FlyIcon = f.default.img.attrs({
            src: "images/NewHomePage/FlyIcon.png"
        }).withConfig({
            displayName: "Form__FlyIcon",
            componentId: "sc-65r2mv-3"
        })(["width:95.513px;height:59.308px;object-fit:cover;"]),
        ti.P = f.default.p.withConfig({
            displayName: "Form__P",
            componentId: "sc-65r2mv-4"
        })(["", ";max-width:360px;color:", ";text-align:center;@media ", "{text-align:left;width:100%;max-width:380px;}@media ", "{max-width:300px;text-align:center;}"], E.cp.UR.regular, Ze.dw.basic, E.mq.down(E.AV.md), E.mq.down(E.AV.sm));
        var ni, ii, ai, li = f.default.div.withConfig({
            displayName: "Form__FlexBetween",
            componentId: "sc-65r2mv-5"
        })(["display:flex;flex-direction:row;width:100%;justify-content:space-between;align-items:center;"]), ri = (0,
        f.default)(li).withConfig({
            displayName: "Form__ResponsiveHead",
            componentId: "sc-65r2mv-6"
        })(["> div{display:flex;flex-direction:column;align-items:baseline;gap:16px;}margin-bottom:32px;"]), oi = (0,
        f.default)(li).withConfig({
            displayName: "Form__FormBottom",
            componentId: "sc-65r2mv-7"
        })(["gap:16px;margin-bottom:16px;"]);
        function si() {
            return (si = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ci(e) {
            return x.createElement("svg", si({
                width: 20,
                height: 22,
                viewBox: "0 0 20 22",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ni || (ni = x.createElement("rect", {
                x: .75,
                y: 5.375,
                width: 18.5,
                height: 15.5,
                rx: 3.25,
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })), ii || (ii = x.createElement("path", {
                opacity: .5,
                d: "M1 9.625h18",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })), ai || (ai = x.createElement("path", {
                d: "M16 4.625v-3M4 4.625v-3",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        ti.Root = f.default.div.withConfig({
            displayName: "Form__Root",
            componentId: "sc-65r2mv-8"
        })(["background-color:#ffffff;box-shadow:0px 4px 8px rgba(24,39,75,0.04),0px 2px 6px rgba(24,39,75,0.02);border-radius:32px;max-width:486px;width:100%;display:flex;flex-direction:column;align-items:center;padding:44px 63px 40px 63px;", "{margin-bottom:44px;}", ",", ",", "{margin-bottom:16px;}", "{margin-bottom:24px;}@media ", "{padding:44px 24px 24px 24px;max-width:345px;}@media ", "{margin-top:56px;max-width:none;padding:37px 24px 33px 24px;", ",", ",", ",", ",", "{margin:0;}}@media ", "{padding:35px 24px 32px 24px;", "{margin-bottom:35px;}", "{margin-bottom:24px;}", ",", "{margin-bottom:16px;}}"], ti.FlyIcon, ti.Caption, ti.Input, ti.Button, ti.P, E.mq.down(E.AV.lg), E.mq.down(E.AV.md), ti.FlyIcon, ti.Caption, ti.Input, ti.Button, ti.P, E.mq.down(E.AV.sm), ti.FlyIcon, ti.P, ti.Input, ti.Button),
        ti.PrivacyPolicy = f.default.p.withConfig({
            displayName: "Form__PrivacyPolicy",
            componentId: "sc-65r2mv-9"
        })(["", " text-align:center;max-width:360px;color:", ";a{margin-left:4px;}@media ", "{text-align:left;width:100%;max-width:none;}@media ", "{max-width:320px;text-align:center;}"], E.cp.lA.regular, Ze.dw.basic, E.mq.down(E.AV.md), E.mq.down(E.AV.sm));
        var di, pi;
        function mi() {
            return (mi = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function fi(e) {
            return x.createElement("svg", mi({
                width: 20,
                height: 23,
                viewBox: "0 0 20 23",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), di || (di = x.createElement("path", {
                d: "M8.031 1.625h3.536M1 6.078l2.5-2.5M18.781 13.11a8.75 8.75 0 11-8.75-8.75",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })), pi || (pi = x.createElement("path", {
                opacity: .5,
                d: "M14.626 8.012h0l-2.466 3.17-.01.012-.008.012-1.48 2.072h0a.933.933 0 11-1.302-1.303h0l2.071-1.48.013-.008.012-.01 3.17-2.465h0z",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })))
        }
        var ui = function(e) {
            var t = e.img;
            return (0,
            B.jsx)(gi, {
                src: t
            })
        }
          , gi = f.default.img.withConfig({
            displayName: "PreviewComponent__PreviewRoot",
            componentId: "sc-z5hj19-0"
        })(["width:200px;height:120px;overflow:hidden;border-radius:16px;@media ", "{width:120px;height:120px;object-fit:cover;}"], E.mq.down(E.AV.sm))
          , hi = function(e) {
            var t = e.img
              , n = e.timeRead
              , i = e.link
              , a = e.text
              , l = e.date
              , r = (0,
            o.$G)().t;
            return (0,
            B.jsx)("a", {
                href: i,
                target: "_blank",
                children: (0,
                B.jsxs)(xi, {
                    children: [(0,
                    B.jsx)("div", {
                        className: "image-container",
                        children: (0,
                        B.jsx)(ui, {
                            img: t
                        })
                    }), (0,
                    B.jsxs)(vi, {
                        children: [(0,
                        B.jsx)(_i, {
                            children: a
                        }), (0,
                        B.jsxs)(Ci, {
                            children: [(0,
                            B.jsxs)(Ei, {
                                children: [(0,
                                B.jsx)(ci, {}), l]
                            }), n && (0,
                            B.jsxs)(Ei, {
                                children: [(0,
                                B.jsx)(fi, {}), n, r("m")]
                            })]
                        })]
                    })]
                })
            })
        }
          , xi = f.default.div.withConfig({
            displayName: "LatestHighlightsCard__CardWrapper",
            componentId: "sc-kwb6f0-0"
        })(["display:flex;& .image-container{width:200px;height:120px;position:relative;overflow:hidden;transition:all 0.5s;@media ", "{width:120px;}& > img{transition:all 0.5s;position:absolute;transform:scale(1);}}&:hover{> div > p{color:#6c5dd3;}}&:hover .image-container{transition:all 0.5s;border-radius:24px;& > img{transition:all 0.5s;transform:scale(1.1);}}"], E.mq.down(E.AV.sm))
          , vi = f.default.div.withConfig({
            displayName: "LatestHighlightsCard__TextWrapper",
            componentId: "sc-kwb6f0-1"
        })(["margin-left:24px;display:flex;flex-direction:column;justify-content:space-around;max-width:300px;@media ", "{max-width:450px;margin-left:12px;}@media ", "{max-width:200px;}"], E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , _i = f.default.p.withConfig({
            displayName: "LatestHighlightsCard__MainText",
            componentId: "sc-kwb6f0-2"
        })(["font-weight:400;font-size:18px;line-height:30px;color:#0b1359;font-family:'TT Fors Trial','Roboto',serif;@media ", "{", "}"], E.mq.down(E.AV.sm), E.cp.A6.regular)
          , Ci = f.default.div.withConfig({
            displayName: "LatestHighlightsCard__TimeWrapper",
            componentId: "sc-kwb6f0-3"
        })(["display:flex;& > span{&:last-child{margin-left:28px;}}"])
          , Ei = f.default.span.withConfig({
            displayName: "LatestHighlightsCard__Time",
            componentId: "sc-kwb6f0-4"
        })(["font-weight:400;font-size:14px;line-height:22px;color:#8990a5;display:flex;align-items:center;& > svg{margin-right:10px;}"])
          , wi = function() {
            var e = (0,
            o.$G)().t
              , t = (0,
            Hn.ZP)("useFeets", (0,
            Tn.Z)(qn().mark((function e() {
                var t, n, i;
                return qn().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Qn().get("https://api.allorigins.win/get?url=https://blog.alium.finance/feed");
                        case 2:
                            return t = e.sent,
                            e.next = 5,
                            t.data;
                        case 5:
                            return n = e.sent,
                            i = n.contents,
                            e.abrupt("return", Pn(i));
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).data;
            return (0,
            B.jsx)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: (0,
                B.jsxs)(Si, {
                    children: []
                })
            })
        }
          , yi = f.default.a.withConfig({
            displayName: "LatestHighlights__LinkText",
            componentId: "sc-hvjqrt-0"
        })(["font-size:14px;line-height:22px;color:#6c5dd3;font-family:'TT Fors Trial','Roboto',serif;margin-right:10px;font-weight:600;margin-left:32px;> a{border-bottom:1px solid #6c5dd3;}@media ", "{margin-left:0px;padding-top:16px;}"], E.mq.down(E.AV.sm))
          , ki = f.default.div.withConfig({
            displayName: "LatestHighlights__TextWrapper",
            componentId: "sc-hvjqrt-1"
        })(["display:flex;align-items:center;padding-bottom:39px;@media ", "{width:93vw;justify-content:space-between;padding-bottom:48px;}@media ", "{width:95vw;justify-content:space-between;padding-bottom:32px;flex-direction:column;align-items:start;}> a > svg{margin-left:10px;}"], E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , Si = f.default.div.withConfig({
            displayName: "LatestHighlights__Root",
            componentId: "sc-hvjqrt-2"
        })(["max-width:1200px;margin:120px auto;@media ", "{margin:150px auto 0;}@media ", "{margin:150px 32px 0;}@media ", "{margin:80px 24px 0 24px;flex-direction:column;}@media ", "{margin:50px 12px 0 12px;flex-direction:column;}"], E.mq.down(E.AV.lg), E.mq.down(1200), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , Ai = f.default.div.withConfig({
            displayName: "LatestHighlights__Wrapper",
            componentId: "sc-hvjqrt-3"
        })(["display:flex;justify-content:space-between;@media ", "{flex-direction:column;}@media ", "{flex-direction:column;}"], E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , bi = f.default.div.withConfig({
            displayName: "LatestHighlights__HighlightsList",
            componentId: "sc-hvjqrt-4"
        })(["a > div:nth-of-type(1){margin-top:32px;@media ", "{margin-top:0px;}}a:not(:last-child) > div:nth-of-type(1){@media ", "{margin-top:0;margin-bottom:32px;}@media ", "{margin-top:0;margin-bottom:16px;}}"], E.mq.down(E.AV.md), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , Ri = f.default.h5.withConfig({
            displayName: "LatestHighlights__Title",
            componentId: "sc-hvjqrt-5"
        })(["font-size:50px;line-height:64px;font-weight:bold;text-align:center;letter-spacing:0.3px;color:#0b1359;font-family:'TT Fors Trial','Roboto',serif;@media ", "{", "}@media ", "{", "}@media ", "{", " font-weight:600;}"], E.mq.down(E.AV.lg), E.cp.h3, E.mq.down(E.AV.md), E.cp.h4, E.mq.down(E.AV.sm), E.cp.h6)
          , ji = function(e) {
            var t = e.children
              , n = e.backgroundColor
              , i = e.title
              , a = e.smBottomPadding
              , l = void 0 !== a && a;
            return (0,
            B.jsxs)(Bi, {
                smBottomPadding: l,
                children: [(0,
                B.jsx)(Ii, {
                    backgroundColor: n,
                    children: t
                }), (0,
                B.jsx)(Ji, {
                    children: i
                })]
            })
        }
          , Ii = f.default.div.withConfig({
            displayName: "Logo__LogoImage",
            componentId: "sc-o769lv-0"
        })(["border-radius:16px;padding:10.5px 12px;background-color:", ";"], (function(e) {
            return e.backgroundColor
        }
        ))
          , Bi = f.default.div.withConfig({
            displayName: "Logo__LogoWrapper",
            componentId: "sc-o769lv-1"
        })(["display:flex;flex-direction:column;align-items:center;font-weight:bold;@media ", "{margin:", ";width:33%;justify-content:center;}"], E.mq.down(E.AV.sm), (function(e) {
            return e.smBottomPadding ? "16px 0 8px 0" : "16px 0 0 0"
        }
        ))
          , Ji = f.default.p.withConfig({
            displayName: "Logo__LogoText",
            componentId: "sc-o769lv-2"
        })(["", ";margin-top:16px;color:", ";"], E.cp.UR.regular, Ze.dw.basic)
          , Oi = function() {
            var e = (0,
            o.$G)().t;
            return (0,
            B.jsx)(Fi, {
                children: (0,
                B.jsx)(Mi, {
                    children: e("More upcoming ...")
                })
            })
        }
          , Fi = f.default.div.withConfig({
            displayName: "MoreUpcoming__LogoWrapper",
            componentId: "sc-1a7voka-0"
        })(["display:flex;align-items:center;background-color:#ebeffa;border-radius:16px;max-width:100px;@media ", "{margin:16px 0 0 3vh;width:33%;}"], E.mq.down(E.AV.sm))
          , Mi = f.default.h6.withConfig({
            displayName: "MoreUpcoming__LogoText",
            componentId: "sc-1a7voka-1"
        })(["color:", ";", ";text-align:center;margin:0 15px;"], Ze.dw.basic, E.cp.A6.small);
        function zi(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function Vi(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? zi(Object(n), !0).forEach((function(t) {
                    (0,
                    L.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zi(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Ui, Ti = function(e) {
            return (0,
            B.jsxs)("svg", Vi(Vi({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), {}, {
                children: [(0,
                B.jsx)("path", {
                    d: "M8.11547 10.4042L11.9995 6.52031L15.8856 10.4062L18.1456 8.14624L11.9995 2L5.85547 8.14419L8.11547 10.4042Z",
                    fill: "#F3BA2F"
                }), (0,
                B.jsx)("path", {
                    d: "M6.51972 12.0002L4.25977 9.74023L1.99969 12.0003L4.25965 14.2603L6.51972 12.0002Z",
                    fill: "#F3BA2F"
                }), (0,
                B.jsx)("path", {
                    d: "M8.11683 13.5956L12.0009 17.4795L15.8868 13.5938L18.1481 15.8525L18.1469 15.8537L12.0009 21.9998L5.85667 15.8558L5.85352 15.8526L8.11683 13.5956Z",
                    fill: "#F3BA2F"
                }), (0,
                B.jsx)("path", {
                    d: "M19.7399 14.2601L22 12L19.74 9.74004L17.48 12.0001L19.7399 14.2601Z",
                    fill: "#F3BA2F"
                }), (0,
                B.jsx)("path", {
                    d: "M14.2919 11.9984H14.2928L11.9995 9.70508L10.3047 11.3999H10.3046L10.1099 11.5946L9.70824 11.9964L9.70508 11.9995L9.70824 12.0028L11.9995 14.2941L14.2928 12.0008L14.2939 11.9995L14.2919 11.9984Z",
                    fill: "#F3BA2F"
                })]
            }))
        };
        function Li() {
            return (Li = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function qi(e) {
            return x.createElement("svg", Li({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Ui || (Ui = x.createElement("path", {
                d: "M11.99 3.533c.844 0 1.61.477 1.99 1.232l6.24 12.494a2.22 2.22 0 01-1.988 3.209H5.75c-1.222 0-2.221-1-2.221-2.22 0-.346.077-.69.233-.99l6.24-12.493a2.181 2.181 0 011.989-1.232zm0-1.533c-1.421 0-2.72.8-3.353 2.076L2.396 16.57A3.752 3.752 0 005.75 22h12.494a3.754 3.754 0 003.752-3.742c0-.577-.133-1.155-.4-1.676L15.345 4.076A3.736 3.736 0 0011.991 2z",
                fill: "#fff"
            })))
        }
        var Ni, Qi, Hi, Di, Pi, Gi;
        function Zi() {
            return (Zi = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Wi(e) {
            return x.createElement("svg", Zi({
                width: 24,
                height: 24,
                viewBox: "0 0 16 25",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Ni || (Ni = x.createElement("path", {
                d: "M7.498 0v8.871l7.498 3.35L7.498 0z",
                fill: "#fff",
                fillOpacity: .602
            })), Qi || (Qi = x.createElement("path", {
                d: "M7.5 0L0 12.222l7.5-3.35V0z",
                fill: "#fff"
            })), Hi || (Hi = x.createElement("path", {
                d: "M7.498 17.974v6.028l7.503-10.38-7.503 4.352z",
                fill: "#fff",
                fillOpacity: .602
            })), Di || (Di = x.createElement("path", {
                d: "M7.5 24.002v-6.03L0 13.623l7.5 10.38z",
                fill: "#fff"
            })), Pi || (Pi = x.createElement("path", {
                d: "M7.498 16.573l7.498-4.353L7.498 8.87v7.702z",
                fill: "#fff",
                fillOpacity: .2
            })), Gi || (Gi = x.createElement("path", {
                d: "M0 12.22l7.5 4.353V8.871L0 12.22z",
                fill: "#fff",
                fillOpacity: .602
            })))
        }
        var Xi, Ki;
        function Yi() {
            return (Yi = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function $i(e) {
            return x.createElement("svg", Yi({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Xi || (Xi = x.createElement("path", {
                fill: "#1969FF",
                d: "M0 0h24v24H0z"
            })), Ki || (Ki = x.createElement("path", {
                d: "M10.965 2.192c.485-.256 1.222-.256 1.706 0l4.945 2.606c.291.154.452.383.48.62h.005V18.52c-.006.258-.168.515-.485.682l-4.945 2.606c-.484.256-1.221.256-1.706 0l-4.944-2.606c-.316-.167-.468-.425-.475-.682V5.418h.002c.022-.24.175-.463.473-.62l4.944-2.606zm6.35 10.51L12.67 15.16c-.484.256-1.22.256-1.704 0L6.33 12.708v5.772l4.635 2.438c.274.146.559.289.836.295h.016c.277.001.545-.14.818-.273l4.679-2.482v-5.756zM4.77 18.236c0 .502.058.832.173 1.065.095.193.238.34.499.52l.015.01c.057.038.12.08.197.127l.09.056.278.17-.398.664-.311-.19-.053-.032a6.673 6.673 0 01-.234-.151c-.743-.506-1.02-1.057-1.026-2.204v-.035h.77zm6.674-9.017a.702.702 0 00-.1.043l-4.937 2.615a.413.413 0 00-.015.008l-.004.003.007.004.012.006 4.936 2.615c.031.017.065.03.1.043V9.22zm.786 0v5.337a.703.703 0 00.1-.043l4.937-2.615c.006-.002.01-.005.015-.008l.005-.002-.008-.005-.012-.006-4.936-2.615a.703.703 0 00-.1-.043zm5.085-2.865l-4.439 2.331 4.439 2.332V6.354zm-10.984 0v4.663l4.439-2.332L6.33 6.354zm5.995-3.466c-.257-.135-.721-.135-.978 0L6.407 5.501a.51.51 0 00-.015.008l-.004.002.007.005.012.006 4.94 2.612c.258.136.723.136.98 0l4.94-2.612a.53.53 0 00.015-.008l.005-.003-.008-.004-.012-.006-4.94-2.613zm5.724.264l.311.19.053.032c.09.056.164.104.234.151.743.506 1.02 1.057 1.026 2.204v.035h-.77c0-.502-.058-.832-.173-1.065-.095-.193-.238-.34-.499-.52l-.015-.01a5.988 5.988 0 00-.197-.127l-.09-.056-.278-.17.398-.664z",
                fill: "#fff"
            })))
        }
        var ea, ta, na;
        function ia() {
            return (ia = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function aa(e) {
            return x.createElement("svg", ia({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ea || (ea = x.createElement("path", {
                d: "M7.388 6.156a7.494 7.494 0 01.491-.213V2.98A.978.978 0 006.904 2H2.861v8.511a9.75 9.75 0 014.527-4.355z",
                fill: "#fff"
            })), ta || (ta = x.createElement("path", {
                d: "M11.505 11.338h.901a2.367 2.367 0 002.368-2.368V6.435c-.487-.085-2.716-.132-3.233-.132a8.7 8.7 0 00-8.683 9.31v5.41a.975.975 0 00.975.975h4.043v-7.042a3.625 3.625 0 013.63-3.617l-.001-.001zM16.618 17.84a7.556 7.556 0 01-.491.212v2.966a.978.978 0 00.975.98h4.04v-8.512a9.759 9.759 0 01-4.524 4.355z",
                fill: "#fff"
            })), na || (na = x.createElement("path", {
                d: "M21.141 8.385v-5.41A.973.973 0 0020.166 2h-4.043v7.041a3.624 3.624 0 01-3.625 3.617h-.905a2.366 2.366 0 00-2.368 2.368v2.535c.487.084 2.716.132 3.232.132.06 0 .112 0 .173-.004a8.62 8.62 0 003.504-.81l.023-.01a8.688 8.688 0 005.01-7.879c0-.205-.011-.403-.026-.605z",
                fill: "#fff"
            })))
        }
        var la, ra, oa, sa, ca, da;
        function pa() {
            return (pa = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ma(e) {
            return x.createElement("svg", pa({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), la || (la = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.459 22C18.793 20.887 22 16.901 22 12.155 22 6.546 17.523 2 12 2S2 6.546 2 12.155c0 4.041 2.325 7.532 5.692 9.166.505-.767 1.503-2.472 1.561-3.327-.342-.099-1.084-.372-1.319-.669-.216.057-.625-.044-1.013-.634-.152-.23-.323-.446-.493-.661-.362-.458-.72-.91-.871-1.476-.072-.269-.277-.805-.512-.953-.373-.235-.765-.685-.774-1.435a.086.086 0 00-.085-.086c-.036 0-.069-.024-.074-.06-.025-.167.011-.479.283-.803.052-.062.022-.162-.057-.176a.098.098 0 01-.043-.174l.015-.012a.107.107 0 00-.026-.183l-.013-.005c-.058-.27.067-.971.979-1.702.067-.054.054-.163-.026-.195h-.147c.113-.229.46-.472.7-.639l.082-.058a2.005 2.005 0 00.338-.283c.066-.063.13-.126.197-.18a.344.344 0 01.258-.068c.403.038.843-.372 1.429-1.078.586-.707 2.344-1.749 3.7-1.6.155.017.356.033.59.05 1.322.1 3.658.277 4.281 1.29.304.493.545.993.764 1.449.094.194.184.38.273.555.307.601.385 1.415.319 2.087-.041.412.481.745.967 1.054.39.249.758.483.79.731.029.215-.106.387-.29.515a.898.898 0 00-.369.899c.011.055-.018.119-.066.182-.131.172-.188.412-.057.584a.248.248 0 01-.013.316l-.053.06a.563.563 0 00-.13.457c.068.475.074 1.129-.267 1.228-.24.07-.782.082-1.326.095-.622.014-1.245.029-1.42.128-.175.098-.247.427-.352.907-.094.426-.214.973-.455 1.585-.186.474-.388.859-.557 1.184-.297.568-.498.953-.358 1.308.12.306.282.431.407.472z",
                fill: "#fff"
            })), ra || (ra = x.createElement("path", {
                d: "M12.089 15.93c-.313-.444-1.823.37-2.54.833l-.117.278c.782.278 3.047-.556 2.657-1.11z",
                fill: "#fff"
            })), oa || (oa = x.createElement("path", {
                d: "M8.284 14.42c.525-.116 1.105 1.518 1.33 2.35l-.098.285c-.762-.327-1.89-2.49-1.232-2.635zM9.978 11.939c.46.094.407 2.362.374 3.223l-.178.243c-.629-.546-.703-3.57-.196-3.466zM11.694 9.826c.442.16.065 2.397-.092 3.244l-.21.214c-.544-.633-.185-3.636.302-3.458zM14.44 8.059c.425.288-.954 2.443-1.468 3.227l-.22.152c-.268-.88 1.173-3.729 1.688-3.38z",
                fill: "#fff"
            })), sa || (sa = x.createElement("path", {
                d: "M16.777 8.542c.217.545-2.688 2.063-3.634 2.579h-.078c.258-1.048 3.56-2.961 3.712-2.579zM13.143 14.532c-.128-.277-2.187.252-2.864.45l-.222.264c.558.407 3.295-.264 3.086-.714zM14.475 12.335c-.166-.259-2.24.428-2.918.677l-.2.276c.625.347 3.386-.535 3.118-.953z",
                fill: "#fff"
            })), ca || (ca = x.createElement("path", {
                d: "M15.905 10.662c-.144-.272-2.266.237-2.963.429l-.222.258c.595.398 3.419-.248 3.185-.688z",
                fill: "#fff"
            })), da || (da = x.createElement("path", {
                d: "M8.963 18.698c.407-3.84 2.996-6.744 4.22-7.696l.117.119c-2.766 2.777-3.962 6.172-4.258 7.577-.012.055-.07-.05-.079 0z",
                fill: "#fff"
            })))
        }
        var fa, ua;
        function ga() {
            return (ga = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ha(e) {
            return x.createElement("svg", ga({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), fa || (fa = x.createElement("path", {
                d: "M13.93 3c-3.682 0-6.666 3.125-6.666 6.98h13.333c0-3.855-2.985-6.98-6.667-6.98z",
                fill: "#53CBC8"
            })), ua || (ua = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.63 11.45a.36.36 0 01.352-.368h.526a.36.36 0 01.35.367.36.36 0 01-.35.368h-.526a.36.36 0 01-.351-.368zm1.93 0a.36.36 0 01.352-.368h14.386a.36.36 0 01.35.367.36.36 0 01-.35.368H6.912a.36.36 0 01-.351-.368zM3.579 13.287a.36.36 0 01.35-.367h10.352a.36.36 0 01.35.367.36.36 0 01-.35.368H3.93a.36.36 0 01-.351-.368zm-1.579 0a.36.36 0 01.35-.367h.386a.36.36 0 01.35.367.36.36 0 01-.35.368H2.35A.36.36 0 012 13.287zM6.407 15.123a.36.36 0 01.351-.367h12.787a.36.36 0 01.35.367.36.36 0 01-.35.368H6.758a.36.36 0 01-.35-.368zm-1.95 0a.36.36 0 01.35-.367h.476a.36.36 0 01.351.367.36.36 0 01-.35.368h-.476a.36.36 0 01-.351-.368zM2.701 16.96a.36.36 0 01.351-.368h.475a.36.36 0 01.351.367.36.36 0 01-.35.367h-.476a.36.36 0 01-.35-.367zm1.58 0a.36.36 0 01.35-.368h4.737a.36.36 0 01.35.367.36.36 0 01-.35.367H4.63a.36.36 0 01-.35-.367zm6.49 0a.36.36 0 01.351-.368h10.526a.36.36 0 01.351.367.36.36 0 01-.35.367H11.121a.36.36 0 01-.35-.367zM11.123 18.797a.36.36 0 01.35-.367h.476a.36.36 0 01.351.367.36.36 0 01-.35.367h-.476a.36.36 0 01-.351-.367zm1.754 0a.36.36 0 01.351-.367h6.316a.36.36 0 01.351.367.36.36 0 01-.35.367h-6.317a.36.36 0 01-.35-.367zM7.264 20.633a.36.36 0 01.35-.367h.476a.36.36 0 01.35.367.36.36 0 01-.35.367h-.475a.36.36 0 01-.351-.367zm1.754 0a.36.36 0 01.35-.367h6.317a.36.36 0 01.35.367.36.36 0 01-.35.367H9.369a.36.36 0 01-.35-.367z",
                fill: "#E32182"
            })))
        }
        var xa, va, _a;
        function Ca() {
            return (Ca = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ea(e) {
            return x.createElement("svg", Ca({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), xa || (xa = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.103 11.47a8.442 8.442 0 00-2.54 1.225.357.357 0 01-.494-.074.346.346 0 01.075-.488 9.152 9.152 0 012.762-1.332c1.094-.314 2.327-.425 3.479-.052 1.098.356 1.947.9 2.693 1.379.161.104.318.204.471.299.87.538 1.652.912 2.715.83 1.15-.088 2.34-.671 3.177-1.26a.357.357 0 01.493.08.346.346 0 01-.082.487c-.893.63-2.206 1.287-3.533 1.389-1.294.099-2.238-.374-3.146-.935a38.34 38.34 0 01-.504-.32c-.743-.475-1.502-.961-2.505-1.286-.971-.315-2.05-.231-3.061.059zM5.35 13.268c.195 0 .353.156.353.348v3.48a.351.351 0 01-.353.35.351.351 0 01-.354-.35v-3.48c0-.192.158-.348.354-.348z",
                fill: "#53CBC8"
            })), va || (va = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.22 12.35c.196 0 .354.156.354.348v4.614a.351.351 0 01-.353.349.351.351 0 01-.354-.349v-4.614c0-.192.159-.348.354-.348zM9.092 12.35c.195 0 .354.156.354.348v8.953a.351.351 0 01-.354.349.351.351 0 01-.354-.349v-8.953c0-.192.159-.348.354-.348zM10.963 12.86c.195 0 .354.155.354.348v3.632a.351.351 0 01-.354.349.351.351 0 01-.354-.349v-3.632c0-.193.159-.349.354-.349zM12.836 15.953a.351.351 0 01-.354-.349v-1.276c0-.192.159-.349.354-.349.195 0 .354.157.354.35v1.275a.351.351 0 01-.354.35zM14.705 20.313a.351.351 0 01-.354-.35v-4.937c0-.192.159-.349.354-.349.195 0 .354.157.354.35v4.937a.351.351 0 01-.354.349zM16.576 19.762a.351.351 0 01-.354-.35v-4.056c0-.192.159-.349.354-.349.195 0 .354.157.354.35v4.056a.351.351 0 01-.354.349zM18.447 17.19a.351.351 0 01-.354-.35v-2.028c0-.192.159-.348.354-.348.195 0 .354.156.354.348v2.029a.351.351 0 01-.354.348z",
                fill: "#53CBC8"
            })), _a || (_a = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19.156 11.204c.139-.565.213-1.155.213-1.762C19.369 5.332 15.99 2 11.824 2S4.279 5.332 4.279 9.442c0 .52.054 1.027.157 1.517 1.319-.928 3.76-1.948 5.838-1.275 1.05.34 1.854.856 2.599 1.333 1.074.689 2.026 1.299 3.418 1.192 1.02-.078 2.05-.514 2.865-1.005z",
                fill: "#F2B705"
            })))
        }
        var wa, ya;
        function ka() {
            return (ka = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Sa(e) {
            return x.createElement("svg", ka({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), wa || (wa = x.createElement("circle", {
                cx: 12,
                cy: 12,
                r: 12,
                fill: "#000"
            })), ya || (ya = x.createElement("path", {
                d: "M5 5.233C5 5.104 5.104 5 5.233 5h4.2c.13 0 .234.104.234.233v4.2a.233.233 0 01-.234.234h-4.2A.233.233 0 015 9.433v-4.2zM5 14.567c0-.129.104-.233.233-.233h4.2c.13 0 .234.104.234.233v4.2a.233.233 0 01-.234.234h-4.2A.233.233 0 015 18.767v-4.2zM14.334 5.233c0-.129.104-.233.233-.233h4.2c.13 0 .234.104.234.233v4.2a.233.233 0 01-.234.234h-4.2a.233.233 0 01-.233-.234v-4.2zM14.334 14.567c0-.129.104-.233.233-.233h4.2c.13 0 .234.104.234.233v4.2a.233.233 0 01-.234.234h-4.2a.233.233 0 01-.233-.234v-4.2zM9.666 9.9c0-.13.104-.234.233-.234h4.2c.13 0 .234.104.234.233v4.2a.233.233 0 01-.234.234H9.9a.233.233 0 01-.233-.234V9.9z",
                fill: "#fff"
            })))
        }
        var Aa;
        function ba() {
            return (ba = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ra(e) {
            return x.createElement("svg", ba({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Aa || (Aa = x.createElement("path", {
                d: "M17.143 8.58c-.365-.21-.835-.21-1.253 0l-2.924 1.723-1.984 1.096-2.873 1.724c-.365.208-.835.208-1.253 0l-2.245-1.358a1.273 1.273 0 01-.627-1.097v-2.61c0-.418.21-.836.627-1.097l2.245-1.306c.366-.208.836-.208 1.253 0l2.246 1.358c.365.209.627.627.627 1.097v1.723l1.984-1.149V6.909c0-.418-.21-.836-.627-1.097L8.162 3.358c-.366-.209-.836-.209-1.254 0L2.627 5.864A1.149 1.149 0 002 6.91v4.908c0 .418.209.836.627 1.097l4.23 2.454c.365.209.835.209 1.252 0l2.873-1.671 1.984-1.149 2.872-1.67c.365-.21.835-.21 1.253 0l2.245 1.305c.366.209.627.626.627 1.096v2.611c0 .418-.209.836-.627 1.097l-2.193 1.305c-.365.209-.835.209-1.253 0l-2.245-1.305a1.273 1.273 0 01-.627-1.097v-1.67l-1.984 1.148v1.723c0 .418.208.836.626 1.097l4.23 2.454c.365.209.835.209 1.253 0l4.23-2.454c.365-.21.626-.627.626-1.097v-4.96c0-.418-.208-.836-.626-1.097l-4.23-2.454z",
                fill: "#fff"
            })))
        }
        var ja, Ia, Ba, Ja, Oa, Fa, Ma, za, Va, Ua, Ta, La, qa, Na, Qa, Ha, Da, Pa, Ga, Za, Wa, Xa, Ka, Ya, $a, el, tl, nl, il, al, ll, rl, ol, sl, cl, dl, pl, ml, fl, ul, gl, hl, xl, vl, _l, Cl, El, wl, yl, kl, Sl, Al, bl, Rl, jl, Il, Bl, Jl, Ol, Fl, Ml, zl, Vl, Ul, Tl, Ll, ql, Nl, Ql, Hl, Dl, Pl, Gl, Zl, Wl, Xl, Kl, Yl, $l, er, tr, nr, ir, ar, lr, rr, or, sr, cr, dr = [{
            color: Ze.dw.robinsEggBlue,
            icon: (0,
            B.jsx)(ma, {}),
            title: "Metis"
        }, {
            color: Ze.dw.black,
            icon: (0,
            B.jsx)(Ti, {}),
            title: "BNB Chain"
        }, {
            color: Ze.dw.snuff,
            icon: (0,
            B.jsx)(ha, {}),
            title: "Moonbeam"
        }, {
            color: Ze.dw.mediumPurple,
            icon: (0,
            B.jsx)(Ra, {}),
            title: "Polygon"
        }, {
            color: Ze.dw.atlantis,
            icon: (0,
            B.jsx)(qi, {}),
            title: "Aurora"
        }, {
            color: Ze.dw.cornfloweBlue,
            icon: (0,
            B.jsx)(Wi, {}),
            title: "Ethereum"
        }, {
            color: Ze.dw.blueRibbon,
            icon: (0,
            B.jsx)($i, {}),
            title: "Fantom"
        }, {
            color: Ze.dw.greenHaze,
            icon: (0,
            B.jsx)(aa, {}),
            title: "Huobi ECO Chain"
        }, {
            color: Ze.dw.cararra,
            icon: (0,
            B.jsx)(Ea, {}),
            title: "Moonriver"
        }, {
            color: Ze.dw.black,
            icon: (0,
            B.jsx)(Sa, {}),
            title: "OKC"
        }], pr = [{
            color: Ze.dw.robinsEggBlue,
            icon: (0,
            B.jsx)(ma, {}),
            title: "Metis"
        }, {
            color: Ze.dw.black,
            icon: (0,
            B.jsx)(Ti, {}),
            title: "BNB Chain"
        }, {
            color: Ze.dw.snuff,
            icon: (0,
            B.jsx)(ha, {}),
            title: "Moonbeam"
        }, {
            color: Ze.dw.mediumPurple,
            icon: (0,
            B.jsx)(Ra, {}),
            title: "Polygon"
        }, {
            color: Ze.dw.atlantis,
            icon: (0,
            B.jsx)(qi, {}),
            title: "Aurora"
        }, {
            color: Ze.dw.cornfloweBlue,
            icon: (0,
            B.jsx)(Wi, {}),
            title: "Ethereum"
        }], mr = [{
            color: Ze.dw.blueRibbon,
            icon: (0,
            B.jsx)($i, {}),
            title: "Fantom"
        }, {
            color: Ze.dw.greenHaze,
            icon: (0,
            B.jsx)(aa, {}),
            title: "Huobi ECO Chain"
        }, {
            color: Ze.dw.cararra,
            icon: (0,
            B.jsx)(Ea, {}),
            title: "Moonriver"
        }, {
            color: Ze.dw.black,
            icon: (0,
            B.jsx)(Sa, {}),
            title: "OKC"
        }], fr = [{
            color: Ze.dw.robinsEggBlue,
            icon: (0,
            B.jsx)(ma, {}),
            title: "Metis"
        }, {
            color: Ze.dw.black,
            icon: (0,
            B.jsx)(Ti, {}),
            title: "BNB Chain"
        }, {
            color: Ze.dw.snuff,
            icon: (0,
            B.jsx)(ha, {}),
            title: "Moonbeam"
        }, {
            color: Ze.dw.mediumPurple,
            icon: (0,
            B.jsx)(Ra, {}),
            title: "Polygon"
        }, {
            color: Ze.dw.atlantis,
            icon: (0,
            B.jsx)(qi, {}),
            title: "Aurora"
        }], ur = [{
            color: Ze.dw.cornfloweBlue,
            icon: (0,
            B.jsx)(Wi, {}),
            title: "Ethereum"
        }, {
            color: Ze.dw.blueRibbon,
            icon: (0,
            B.jsx)($i, {}),
            title: "Fantom"
        }, {
            color: Ze.dw.greenHaze,
            icon: (0,
            B.jsx)(aa, {}),
            title: "Huobi ECO Chain"
        }, {
            color: Ze.dw.cararra,
            icon: (0,
            B.jsx)(Ea, {}),
            title: "Moonriver"
        }, {
            color: Ze.dw.black,
            icon: (0,
            B.jsx)(Sa, {}),
            title: "OKC"
        }], gr = function() {
            var e = (0,
            C.Z)(E.mq.between(E.AV.md, E.AV.lg))
              , t = (0,
            C.Z)(E.mq.between(E.AV.sm, E.AV.md));
            return (0,
            B.jsxs)(hr, {
                children: [!e && !t && (0,
                B.jsxs)(B.Fragment, {
                    children: [dr.map((function(e) {
                        return (0,
                        B.jsx)(ji, {
                            backgroundColor: e.color,
                            title: e.title,
                            smBottomPadding: !0,
                            children: e.icon
                        }, e.title)
                    }
                    )), (0,
                    B.jsx)(Oi, {}), (0,
                    B.jsx)(vr, {})]
                }), e && (0,
                B.jsxs)(xr, {
                    children: [(0,
                    B.jsx)(_r, {
                        children: (0,
                        B.jsx)(Cr, {
                            children: pr.map((function(e) {
                                return (0,
                                B.jsx)(ji, {
                                    backgroundColor: e.color,
                                    title: e.title,
                                    children: e.icon
                                }, e.title)
                            }
                            ))
                        })
                    }), (0,
                    B.jsx)(Er, {
                        children: (0,
                        B.jsxs)(wr, {
                            children: [mr.map((function(e) {
                                return (0,
                                B.jsx)(ji, {
                                    backgroundColor: e.color,
                                    title: e.title,
                                    children: e.icon
                                }, e.title)
                            }
                            )), (0,
                            B.jsx)(Oi, {})]
                        })
                    })]
                }), t && (0,
                B.jsxs)(yr, {
                    children: [(0,
                    B.jsx)(kr, {
                        children: (0,
                        B.jsx)(Sr, {
                            children: fr.map((function(e) {
                                return (0,
                                B.jsx)(ji, {
                                    backgroundColor: e.color,
                                    title: e.title,
                                    children: e.icon
                                }, e.title)
                            }
                            ))
                        })
                    }), (0,
                    B.jsx)(Ar, {
                        children: (0,
                        B.jsxs)(br, {
                            children: [ur.map((function(e) {
                                return (0,
                                B.jsx)(ji, {
                                    backgroundColor: e.color,
                                    title: e.title,
                                    children: e.icon
                                }, e.title)
                            }
                            )), (0,
                            B.jsx)(Oi, {})]
                        })
                    })]
                })]
            })
        }, hr = f.default.div.withConfig({
            displayName: "Logos__LogosWrapper",
            componentId: "sc-blh5y1-0"
        })(["display:flex;flex-wrap:wrap;justify-content:space-between;width:100%;@media ", "{justify-content:center;}@media ", "{justify-content:space-between;}@media ", "{justify-content:flex-start;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.sm), E.mq.down(E.AV.esm)), xr = f.default.div.withConfig({
            displayName: "Logos__LaptopWrapper",
            componentId: "sc-blh5y1-1"
        })(["width:100%;max-width:760px;"]), vr = f.default.div.withConfig({
            displayName: "Logos__EmptyBlock",
            componentId: "sc-blh5y1-2"
        })(["display:none;@media ", "{display:block;width:34%;}@media ", "{display:none;}"], E.mq.down(E.AV.sm), E.mq.down(E.AV.esm)), _r = f.default.div.withConfig({
            displayName: "Logos__MdTopWrapper",
            componentId: "sc-blh5y1-3"
        })(["width:100%;display:flex;justify-content:center;@media ", "{justify-content:space-between;width:760px;}"], E.mq.down(E.AV.lg)), Cr = f.default.div.withConfig({
            displayName: "Logos__LaptopTopWrapper",
            componentId: "sc-blh5y1-4"
        })(["display:flex;width:100%;justify-content:space-between;"]), Er = f.default.div.withConfig({
            displayName: "Logos__MdBottomWrapper",
            componentId: "sc-blh5y1-5"
        })(["width:100%;display:flex;justify-content:center;"]), wr = f.default.div.withConfig({
            displayName: "Logos__LaptopBottomWrapper",
            componentId: "sc-blh5y1-6"
        })(["display:flex;width:100%;justify-content:space-evenly;margin-top:32px;@media ", "{justify-content:space-between;width:628px;}"], E.mq.down(E.AV.lg)), yr = f.default.div.withConfig({
            displayName: "Logos__TabletWrapper",
            componentId: "sc-blh5y1-7"
        })(["width:100%;padding:0 34px;"]), kr = f.default.div.withConfig({
            displayName: "Logos__SmTopWrapper",
            componentId: "sc-blh5y1-8"
        })(["width:100%;display:flex;justify-content:center;"]), Sr = f.default.div.withConfig({
            displayName: "Logos__TabletTopWrapper",
            componentId: "sc-blh5y1-9"
        })(["display:flex;width:100%;justify-content:space-evenly;@media ", "{justify-content:space-between;width:596px;}"], E.mq.down(E.AV.md)), Ar = f.default.div.withConfig({
            displayName: "Logos__SmBottomWrapper",
            componentId: "sc-blh5y1-10"
        })(["width:100%;display:flex;justify-content:center;"]), br = f.default.div.withConfig({
            displayName: "Logos__TabletBootomWrapper",
            componentId: "sc-blh5y1-11"
        })(["display:flex;width:100%;justify-content:space-between;margin-top:32px;@media ", "{width:700px;}"], E.mq.down(E.AV.md)), Rr = function() {
            var e = (0,
            o.$G)().t;
            return (0,
            B.jsx)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: (0,
                B.jsxs)(Br, {
                    children: [(0,
                    B.jsxs)(jr, {
                        children: [e("Upgrade your trades with"), (0,
                        B.jsx)(Ir, {
                            children: e(" \ncross-chain ")
                        }), e("swaps on various networks")]
                    }), (0,
                    B.jsx)(gr, {})]
                })
            })
        }, jr = f.default.p.withConfig({
            displayName: "MultiChainLiquidity__HomeTitle",
            componentId: "sc-so6bpt-0"
        })(["max-width:1100px;", " text-align:center;color:", ";margin-bottom:64px;white-space:pre-wrap;@media ", "{", "}@media ", "{font-weight:600;margin-bottom:48px;}@media ", "{", " letter-spacing:0;max-width:354px;margin-bottom:16px;}"], E.cp.yK.demiBold, Ze.dw.darkBlue, E.mq.down(E.AV.lg), E.cp.h4, E.mq.down(E.AV.md), E.mq.down(E.AV.sm), E.cp.$z.demiBold), Ir = f.default.span.withConfig({
            displayName: "MultiChainLiquidity__PurpleText",
            componentId: "sc-so6bpt-1"
        })(["color:#6c5dd3;"]), Br = f.default.div.withConfig({
            displayName: "MultiChainLiquidity__MultiChainContainer",
            componentId: "sc-so6bpt-2"
        })(["max-width:1200px;margin:120px auto 120px auto;display:flex;flex-direction:column;align-items:center;justify-content:center;@media ", "{margin:80px auto 34px;}@media ", "{margin:56px auto;}"], E.mq.down(E.AV.md), E.mq.down(E.AV.sm));
        function Jr() {
            return (Jr = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Or(e) {
            return x.createElement("svg", Jr({
                width: 120,
                height: 120,
                viewBox: "0 0 120 120",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), ja || (ja = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter0_b_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M54.27 12.276l-.012-.056c-.694-3.04-3.504-3.694-6.277-1.463-2.773 2.232-4.46 6.505-3.766 9.544l.005.02-5.232 4.188 4.778 20.94 16.768-13.493c1.291-1.039 2.039-3.19 1.67-4.805l-.465-2.038c-2.772 2.23-5.582 1.575-6.276-1.464-.676-2.965.912-7.104 3.565-9.377l-.634-2.102c-.438-1.452-1.72-1.818-2.942-.84l-1.182.946z",
                fill: "#A3B7DE",
                fillOpacity: .7
            }))), Ia || (Ia = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M44.934 9.387c-2.5 1.778-4.248 5.65-4.264 8.634L36.6 21.445c-1.26 1.06-1.976 3.172-1.613 4.76l4.026 17.62c.227.99.839 1.591 1.627 1.595l3.141.015 1.34-1.364c-.933.22-1.752-.345-2.026-1.55l-3.442-15.086c-.369-1.617.38-3.771 1.674-4.808l2.889-2.318-.003-.011c-.693-3.04.993-7.313 3.766-9.544 2.773-2.232 5.584-1.577 6.277 1.463l.007.032 1.19-.955c.423-.339.852-.517 1.252-.545l-4.335-1.49a1.587 1.587 0 00-1.01.011c-3.884-1.478-4.12-1.523-6.425.117zm11.718 16.375c1.24 1.043 3.17.879 5.081-.658l.006.024.008-.02-1.247-.328-1.251-.354a9.737 9.737 0 01-.102.084c-.849.683-1.701 1.095-2.495 1.252z",
                fill: "url(#Q1Release_svg__paint0_linear_20389_333480)"
            })), Ba || (Ba = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M87.376 14.661c-.274-.524-.691-.872-1.186-.988l-4.968-1.17-11.504 15.613-1.774 1.43-1.061 1.354 1.575.63 2.707 1.141c2.353-1.393 4.082-2.135 5.274.202 1.357 2.66.591 6.785-1.71 9.21a6.644 6.644 0 01-.782.707l.484 1.955 4.422 1.32c.704.21 1.513-.078 2.175-.776L93.36 32.294c1.149-1.21 1.524-3.27.836-4.586l-6.82-13.047z",
                fill: "#5748BE"
            })), Ja || (Ja = x.createElement("path", {
                d: "M72.094 33.055l-1.42-.593 2.381-2.225c1.743.327 4.852 1.034 3.346 1.243-1.506.21-3.529 1.146-4.307 1.575zM79.921 14.025l-5.506-1.063 1.46 4.73 4.046-3.667z",
                fill: "#5748BE"
            })), Oa || (Oa = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M79.125 13.319c1.14-1.202 2.61-1.108 3.282.21l6.916 13.56c.672 1.318.292 3.36-.848 4.563l-11.73 12.36c-1.14 1.201-2.61 1.107-3.282-.211l-1.036-2.032c.178-.157.355-.326.528-.508 2.605-2.746 3.472-7.413 1.936-10.425-1.536-3.012-4.894-3.228-7.5-.482a8.59 8.59 0 00-.495.571l-.348-.683c-.672-1.318-.293-3.361.847-4.563l1.697-1.788c-1.357-2.661-.591-6.785 1.71-9.21 2.303-2.427 5.27-2.236 6.626.425l1.697-1.787z",
                fill: "url(#Q1Release_svg__paint1_linear_20389_333480)"
            })), Fa || (Fa = x.createElement("path", {
                d: "M23.886 28.456l62.15 33.332c3.196 1.714 5.718 5.802 5.677 9.2l-.396 32.919c-.02 1.707-.698 3.003-1.874 3.585l-2.181 1.081c-.791.392-1.982-.094-2.887-1.177L20.51 30.902l2.776-2.478c.141-.126.37-.114.6.032z",
                fill: "#D1E0FF"
            })), Ma || (Ma = x.createElement("path", {
                d: "M22.406 28.75l62.127 33.32c3.205 1.72 5.73 5.824 5.677 9.227l-.538 33.623c-.045 2.852-1.97 4.336-4.611 3.554-.578-.172-1.177-.598-1.669-1.188L20.128 31.322l2.278-2.571z",
                fill: "#9A98FE"
            })), za || (za = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter1_b_20389_333480)"
            }, x.createElement("path", {
                d: "M23.15 24.766c.011-1.38 1.072-1.955 2.37-1.283L82.88 53.19c1.299.672 2.342 2.337 2.332 3.718l-.097 12.253c-.011 1.38-1.072 1.955-2.37 1.283l-57.36-29.707c-1.299-.672-2.342-2.337-2.331-3.718l.096-12.253z",
                fill: "#A3B7DE",
                fillOpacity: .6
            }))), Va || (Va = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.533 23.204c.3.008.633.099.983.28l57.36 29.707c1.298.672 2.342 2.337 2.331 3.718l-.096 12.253c-.006.714-.293 1.213-.748 1.435l1.569.812.116-14.753c.01-1.381-1.033-3.046-2.331-3.718L26.357 23.23c-.732-.379-1.388-.362-1.824-.027z",
                fill: "url(#Q1Release_svg__paint2_linear_20389_333480)"
            })), Ua || (Ua = x.createElement("path", {
                d: "M23.107 29.766L85.17 61.907l-.074 9.308-62.061-32.141.073-9.308z",
                fill: "#00095E"
            })), Ta || (Ta = x.createElement("path", {
                d: "M100.866 61.404c2.057-7.68-1.218-15.229-7.316-16.863l-4.557-1.22-.331 1.235c-4.41 1.161-8.369 5.299-9.878 10.93-1.592 5.943.01 11.808 3.64 14.914l.016.969 3.66.98c6.097 1.634 12.708-3.267 14.766-10.945z",
                fill: "url(#Q1Release_svg__paint3_linear_20389_333480)"
            })), La || (La = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M100.515 62.507l-7.262-1.946-.166.62 7.211 1.933c.076-.2.148-.403.217-.607zm-1.313 2.971l-6.938-1.859-.166.62 6.768 1.814c.115-.189.227-.38.336-.575zm-1.848 2.662l-7.457-1.999-.166.62 7.142 1.914c.164-.173.324-.352.481-.535zm-2.337 2.198l-8.194-2.196-.166.62 7.672 2.056c.232-.151.462-.312.688-.48zm-3.047 1.676l-6.56-1.758-.165.62 5.572 1.493a10.67 10.67 0 001.153-.355zm9.275-12.468a20.45 20.45 0 01-.113.634l-7.256-1.944.166-.62 7.203 1.93zm.215-3.1c.005.221.005.443.001.666l-7.585-2.033.166-.62 7.418 1.988zm-.399-3.263c.054.232.102.466.145.703l-8.435-2.26.166-.62 8.124 2.177zm-1.11-3.122c.124.247.24.5.349.758l-8.717-2.336.166-.62 8.203 2.198zm-2.208-3.084c.28.276.545.569.796.878l-7.28-1.95.166-.62 6.318 1.692z",
                fill: "url(#Q1Release_svg__paint4_linear_20389_333480)",
                opacity: .5
            })), qa || (qa = x.createElement("ellipse", {
                cx: 85.973,
                cy: 57.41,
                rx: 14.394,
                ry: 11.43,
                transform: "rotate(-75 85.973 57.41)",
                fill: "url(#Q1Release_svg__paint5_linear_20389_333480)"
            })), Na || (Na = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M89.206 58.221c-.601 2.243-2.52 3.678-4.284 3.206-1.765-.473-2.708-2.675-2.107-4.918.6-2.243 2.519-3.678 4.284-3.205 1.764.473 2.708 2.674 2.107 4.917z",
                fill: "url(#Q1Release_svg__paint6_radial_20389_333480)"
            })), Qa || (Qa = x.createElement("path", {
                d: "M95.29 61.952l-5.41 2.682c-.783.47-1.628.76-2.487.839 1.13-.475 3.648-1.962 4.684-4.111 1.295-2.687.11-8.167 3.564-9.477l.963 3.11-1.314 6.957z",
                fill: "url(#Q1Release_svg__paint7_linear_20389_333480)"
            })), Ha || (Ha = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M89.607 50.264c-3.292-.848-6.845 1.796-7.953 5.93-.916 3.418.125 6.79 2.365 8.37l-.081.303 1.685.451c3.305.886 6.886-1.763 8-5.917v-.005c.01-.031.017-.062.025-.094l.14-.52c.206-.768.193-1.559.18-2.35a16.4 16.4 0 01.011-1.235 4.38 4.38 0 01.143-.872c.253-.945.855-1.962 1.515-2.445l-6.03-1.616zm-3.059 11.591c1.765.473 3.683-.962 4.284-3.205.601-2.243-.342-4.445-2.107-4.918-1.765-.472-3.683.963-4.284 3.206s.342 4.444 2.107 4.917z",
                fill: "url(#Q1Release_svg__paint8_linear_20389_333480)"
            })), Da || (Da = x.createElement("path", {
                d: "M88.73 53.738c-1.766-.472-3.684.962-4.285 3.206-.6 2.242.343 4.444 2.108 4.917l-3.39 1.952c-1.632-1.76-2.295-4.671-1.506-7.617.789-2.945 2.82-5.134 5.112-5.843l1.96 3.385z",
                fill: "url(#Q1Release_svg__paint9_linear_20389_333480)"
            })), Pa || (Pa = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M83.996 64.889c-3.305-.886-5.082-4.971-3.97-9.125 1.109-4.134 4.662-6.778 7.954-5.93l6.03 1.617c-.66.482-1.262 1.5-1.515 2.444a4.38 4.38 0 00-.142.872c-.025.41-.018.823-.012 1.236.013.79.026 1.581-.18 2.35l-.14.52-.024.093-.001.005c-1.114 4.154-4.695 6.803-8 5.918zm5.21-6.665c-.6 2.243-2.518 3.678-4.283 3.205-1.765-.473-2.708-2.674-2.107-4.917.6-2.243 2.519-3.678 4.283-3.206 1.765.473 2.709 2.675 2.108 4.918z",
                fill: "url(#Q1Release_svg__paint10_linear_20389_333480)"
            })), Ga || (Ga = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter2_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M80.03 55.764c-1.112 4.154.665 8.24 3.97 9.125l.134.034c-3.227-.953-4.947-4.988-3.848-9.09 1.105-4.124 4.643-6.765 7.928-5.937l-.23-.061c-3.292-.849-6.846 1.795-7.953 5.93zm5.028 5.697c1.728.37 3.566-1.05 4.153-3.237.586-2.19-.3-4.34-1.984-4.881.044.01.088.02.132.032 1.765.472 2.708 2.674 2.107 4.917s-2.519 3.678-4.284 3.205a2.522 2.522 0 01-.124-.036z",
                fill: "#9B8EF9"
            }))), Za || (Za = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter3_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M83.737 64.81h.003c3.305.886 6.887-1.764 8-5.917l.001-.005.025-.094.14-.52c.205-.768.192-1.559.18-2.35-.007-.413-.013-.825.01-1.235a4.38 4.38 0 01.143-.872c.252-.941.85-1.955 1.508-2.44l.265.072c-.66.482-1.262 1.5-1.515 2.444a4.372 4.372 0 00-.142.873c-.025.41-.018.822-.012 1.235.013.79.026 1.581-.18 2.35l-.14.52-.024.093-.002.005c-1.113 4.154-4.694 6.803-8 5.918a4.988 4.988 0 01-.26-.078zm3.304-11.52c-1.748-.426-3.63 1.002-4.223 3.22-.579 2.157.273 4.277 1.91 4.856l-.06-.015c-1.766-.473-2.709-2.675-2.108-4.918.601-2.243 2.519-3.678 4.284-3.205.067.018.133.038.197.061z",
                fill: "#9B8EF9"
            }))), Wa || (Wa = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M95.473 59.956c1.932-7.21-1.265-13.616-6.18-14.933-4.916-1.317-10.888 2.631-12.82 9.841-1.932 7.21 1.266 13.616 6.181 14.933 4.915 1.317 10.888-2.631 12.82-9.841zm1.541.412c2.058-7.678-1.218-15.228-7.315-16.862-6.098-1.634-12.709 3.267-14.766 10.946-2.058 7.678 1.217 15.228 7.315 16.862 6.097 1.634 12.709-3.267 14.766-10.946z",
                fill: "url(#Q1Release_svg__paint11_linear_20389_333480)"
            })), Xa || (Xa = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter4_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M82.552 69.772c-4.855-1.38-7.993-7.746-6.075-14.904 1.912-7.136 7.782-11.077 12.667-9.88l-.105-.03c-4.916-1.316-10.888 2.632-12.82 9.842-1.931 7.21 1.266 13.616 6.181 14.933l.152.039zm6.992-26.303c6.034 1.69 9.263 9.198 7.216 16.835-2.04 7.613-8.554 12.495-14.608 10.986l.1.028c6.097 1.633 12.708-3.267 14.766-10.946 2.057-7.679-1.218-15.228-7.315-16.862a9.648 9.648 0 00-.159-.04z",
                fill: "#fff"
            }))), Ka || (Ka = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M83.436 69.96c-4.477-1.743-7.252-7.852-5.422-14.684 1.83-6.832 7.289-10.735 12.038-10.006a7.28 7.28 0 00-.76-.248c-4.915-1.317-10.887 2.631-12.819 9.841-1.931 7.21 1.266 13.615 6.181 14.933.258.069.52.123.782.164z",
                fill: "url(#Q1Release_svg__paint12_linear_20389_333480)"
            })), Ya || (Ya = x.createElement("path", {
                opacity: .4,
                d: "M77.946 55.267c-1.837 6.853.943 13.005 5.463 14.764l.048-.126c-4.435-1.726-7.206-7.793-5.381-14.603l-.13-.035zm12.113-10.055c-4.794-.736-10.277 3.201-12.113 10.055l.13.035c1.825-6.81 7.258-10.68 11.962-9.957l.02-.133z",
                fill: "url(#Q1Release_svg__paint13_linear_20389_333480)"
            })), $a || ($a = x.createElement("path", {
                d: "M19.941 30.77l61.616 33.565c2.543 1.385 4.54 4.642 4.504 7.347l-.445 33.472c-.046 3.492-2.777 4.918-6.062 3.165L19.941 76.518V30.77z",
                fill: "url(#Q1Release_svg__paint14_linear_20389_333480)"
            })), el || (el = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M81.773 109.121c2.156.178 3.7-1.275 3.74-3.882l.515-32.178c.055-3.444-2.532-7.598-5.778-9.28l-59.027-30.57c-1.292-1.063-1.781-3.18-.654-3.668l2.56-1.11-.031 1.557-.626.324c-.609.315-.21 1.61.63 2.045l59.23 30.67c3.228 1.671 5.808 5.792 5.779 9.23l-.282 33.109c-.022 2.508-1.447 4.057-3.621 3.938l-2.002-.11a1.999 1.999 0 01-.433-.075z",
                fill: "url(#Q1Release_svg__paint15_linear_20389_333480)"
            })), tl || (tl = x.createElement("path", {
                d: "M81.911 78.264c2.597 1.425 5.89 1.13 9.314-.832l1.42-.815-1-4.408v-.25c1.476.594 2.344 2.395 2.344 4.861v16.347c0 1.128-.707 2.45-1.55 2.898l-1.582.842c-3.198 1.702-6.257 1.933-8.713.66l-8.343-4.325V73.816l8.11 4.448z",
                fill: "url(#Q1Release_svg__paint16_linear_20389_333480)"
            })), nl || (nl = x.createElement("path", {
                d: "M73.925 73.83l9.176 5.081v19.112l-9.84-5.069.664-19.124z",
                fill: "url(#Q1Release_svg__paint17_linear_20389_333480)"
            })), il || (il = x.createElement("path", {
                d: "M91.658 72.379l-.065 4.873 1.072-.62.146-.137c.416-.388.656-1.114.522-1.578l-.268-.932c-.15-.52-.408-.917-.754-1.155l-.653-.451z",
                fill: "#4C3FA5"
            })), al || (al = x.createElement("circle", {
                r: 9.699,
                transform: "matrix(.93518 .49771 -.00787 .99764 73.752 83.516)",
                fill: "url(#Q1Release_svg__paint18_linear_20389_333480)"
            })), ll || (ll = x.createElement("circle", {
                r: 5.48,
                transform: "matrix(.93518 .49771 -.00787 .99764 73.74 83.5)",
                fill: "#9FB7E8"
            })), rl || (rl = x.createElement("circle", {
                r: 5.48,
                transform: "matrix(.93518 .49771 -.00787 .99764 73.262 83.73)",
                fill: "url(#Q1Release_svg__paint19_linear_20389_333480)"
            })), ol || (ol = x.createElement("path", {
                d: "M23.756 105.074c7.598 0 13.757-4.891 13.757-10.924v-4.509H36.29c-2.162-3.783-6.961-6.414-12.534-6.414-5.88 0-10.897 2.928-12.866 7.05l-.89.253v3.62c0 6.033 6.159 10.924 13.756 10.924z",
                fill: "url(#Q1Release_svg__paint20_linear_20389_333480)"
            })), sl || (sl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.653 105.022v-7.185h-.613v7.136c.203.02.408.036.613.049zm-3.067-.476v-6.865h-.614v6.697c.203.06.407.115.614.168zm-2.914-1.048v-7.379h-.614v7.068c.201.108.406.212.614.311zm-2.607-1.614v-8.107h-.614v7.591c.197.177.402.349.614.516zm-2.301-2.398v-6.49h-.614v5.514c.185.335.39.66.614.976zm13.803 5.477c-.203.022-.407.039-.613.053v-7.179h.613v7.126zm2.914-.567c-.202.059-.406.114-.613.165v-7.505h.613v7.34zm2.914-1.176c-.2.107-.405.209-.613.308v-8.346h.613v8.038zm2.608-1.796c-.198.175-.402.345-.614.509v-8.625h.614v8.116zm2.3-2.803c-.185.327-.39.644-.613.952v-7.202h.613v6.25z",
                fill: "url(#Q1Release_svg__paint21_linear_20389_333480)",
                opacity: .5
            })), cl || (cl = x.createElement("ellipse", {
                cx: 23.756,
                cy: 90.334,
                rx: 13.756,
                ry: 10.924,
                fill: "url(#Q1Release_svg__paint22_linear_20389_333480)"
            })), dl || (dl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.815 93.53c-2.22 0-4.018-1.415-4.018-3.161s1.799-3.162 4.018-3.162c2.22 0 4.018 1.416 4.018 3.162s-1.799 3.161-4.018 3.161z",
                fill: "url(#Q1Release_svg__paint23_radial_20389_333480)"
            })), pl || (pl = x.createElement("path", {
                d: "M21.878 100.06l-3.815-4.33a5.635 5.635 0 01-1.39-2.09c.719.926 2.714 2.883 4.954 3.308 2.8.531 7.566-1.919 9.63.946l-2.632 1.658-6.747.508z",
                fill: "url(#Q1Release_svg__paint24_linear_20389_333480)"
            })), ml || (ml = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M31.257 91.926c-.031-3.25-3.35-5.875-7.441-5.875-3.382 0-6.237 1.795-7.142 4.254h-.299v1.667c0 3.27 3.331 5.92 7.441 5.92h.612c.76 0 1.487-.207 2.214-.415.38-.108.759-.216 1.143-.295.269-.055.55-.084.84-.084.935 0 2.023.304 2.632.794v-5.966zm-11.46.046c0 1.746 1.799 3.161 4.018 3.161 2.22 0 4.018-1.415 4.018-3.161 0-1.747-1.799-3.162-4.018-3.162-2.22 0-4.018 1.415-4.018 3.162z",
                fill: "url(#Q1Release_svg__paint25_linear_20389_333480)"
            })), fl || (fl = x.createElement("path", {
                d: "M27.835 91.972c0-1.746-1.8-3.162-4.019-3.162-2.219 0-4.018 1.415-4.018 3.162l-2.64-2.647c1.221-1.941 3.744-3.274 6.658-3.274s5.437 1.333 6.659 3.274l-2.64 2.647z",
                fill: "url(#Q1Release_svg__paint26_linear_20389_333480)"
            })), ul || (ul = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.375 90.362c0-3.27 3.331-5.92 7.441-5.92 4.09 0 7.41 2.625 7.44 5.874v5.967c-.608-.49-1.696-.794-2.63-.794-.29 0-.572.029-.841.084-.384.079-.764.187-1.143.295-.727.207-1.454.415-2.214.415h-.612c-4.11 0-7.441-2.65-7.441-5.92zm7.441 3.162c-2.22 0-4.018-1.416-4.018-3.162s1.799-3.161 4.018-3.161c2.22 0 4.018 1.415 4.018 3.161s-1.799 3.162-4.018 3.162z",
                fill: "url(#Q1Release_svg__paint27_linear_20389_333480)"
            })), gl || (gl = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter5_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.816 84.441c-4.11 0-7.441 2.651-7.441 5.921 0 .043 0 .086.002.128.085-3.21 3.383-5.793 7.439-5.793 4.09 0 7.41 2.626 7.44 5.875v-.256c-.03-3.249-3.35-5.875-7.44-5.875zm-4.015 6.05c.085 1.686 1.85 3.033 4.015 3.033 2.165 0 3.93-1.347 4.015-3.034.002.043.003.085.003.128 0 1.746-1.799 3.162-4.018 3.162-2.22 0-4.018-1.416-4.018-3.162 0-.043 0-.085.003-.128z",
                fill: "#9B8EF9"
            }))), hl || (hl = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter6_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.377 90.237a4.67 4.67 0 00-.002.13c0 3.27 3.331 5.92 7.441 5.92h.612c.76 0 1.487-.207 2.214-.415.38-.108.759-.216 1.143-.295a4.19 4.19 0 01.84-.084c.935 0 2.023.304 2.632.794v-.26c-.609-.49-1.697-.794-2.632-.794-.29 0-.571.03-.84.084-.384.08-.764.188-1.143.296-.727.207-1.454.414-2.214.414h-.612c-4.055 0-7.352-2.58-7.44-5.79zm11.454 0c-.087-1.686-1.851-3.032-4.015-3.032-2.164 0-3.928 1.346-4.015 3.032a2.548 2.548 0 01-.003-.13c0-1.746 1.799-3.162 4.018-3.162 2.22 0 4.018 1.416 4.018 3.162 0 .043 0 .087-.003.13z",
                fill: "#9B8EF9"
            }))), xl || (xl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.756 99.733c7.134 0 12.256-4.536 12.256-9.4 0-4.862-5.122-9.399-12.256-9.399-7.133 0-12.255 4.537-12.255 9.4s5.122 9.4 12.255 9.4zm0 1.524c7.598 0 13.757-4.89 13.757-10.923S31.353 79.41 23.756 79.41C16.16 79.41 10 84.3 10 90.334c0 6.033 6.159 10.923 13.756 10.923z",
                fill: "url(#Q1Release_svg__paint28_linear_20389_333480)"
            })), vl || (vl = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter7_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.5 90.215c.086-4.816 5.182-9.275 12.254-9.275 7.073 0 12.168 4.46 12.255 9.275l.001-.124c0-4.863-5.122-9.4-12.256-9.4-7.133 0-12.255 4.537-12.255 9.4v.124zm26.01 0c-.084 5.976-6.21 10.799-13.756 10.799-7.545 0-13.671-4.823-13.755-10.799l-.001.124c0 6.033 6.159 10.924 13.756 10.924 7.598 0 13.757-4.89 13.757-10.924l-.001-.124z",
                fill: "#fff"
            }))), _l || (_l = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.54 91.103c.501-4.564 5.454-8.637 12.214-8.637 6.759 0 11.712 4.073 12.213 8.637.028-.253.042-.507.042-.762 0-4.863-5.122-9.4-12.255-9.4-7.134 0-12.256 4.537-12.256 9.4 0 .255.014.51.042.762z",
                fill: "url(#Q1Release_svg__paint29_linear_20389_333480)"
            })), Cl || (Cl = x.createElement("path", {
                opacity: .4,
                d: "M23.755 82.399c-6.783 0-11.777 4.088-12.283 8.7l.138.015c.497-4.519 5.409-8.575 12.145-8.575v-.14zm12.283 8.7c-.506-4.612-5.5-8.7-12.283-8.7v.14c6.736 0 11.648 4.056 12.144 8.575l.139-.016z",
                fill: "url(#Q1Release_svg__paint30_linear_20389_333480)"
            })), El || (El = x.createElement("path", {
                d: "M23.756 99.664c7.598 0 13.757-4.891 13.757-10.924v-4.51H36.29c-2.162-3.782-6.961-6.414-12.534-6.414-5.88 0-10.897 2.93-12.866 7.05l-.89.254v3.62c0 6.033 6.159 10.924 13.756 10.924z",
                fill: "url(#Q1Release_svg__paint31_linear_20389_333480)"
            })), wl || (wl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.651 99.608v-7.185h-.613v7.136c.203.02.407.036.613.05zm-3.067-.476v-6.865h-.614v6.697c.203.06.407.115.614.168zm-2.914-1.048v-7.379h-.614v7.068c.201.108.406.212.614.311zm-2.608-1.614v-8.107h-.613v7.591c.197.177.402.35.614.516zm-2.3-2.398v-6.49h-.614v5.514c.185.335.39.66.614.976zm13.803 5.477a17.05 17.05 0 01-.613.053v-7.179h.613v7.126zm2.915-.567c-.203.059-.407.114-.614.165v-7.505h.614v7.34zm2.914-1.176c-.201.107-.406.21-.614.308v-8.346h.614v8.038zM34 96.01c-.198.175-.402.344-.614.509v-8.625h.614v8.116zm2.3-2.803c-.185.327-.39.644-.613.952v-7.202h.613v6.25z",
                fill: "url(#Q1Release_svg__paint32_linear_20389_333480)",
                opacity: .5
            })), yl || (yl = x.createElement("ellipse", {
                cx: 23.756,
                cy: 84.927,
                rx: 13.756,
                ry: 10.924,
                fill: "url(#Q1Release_svg__paint33_linear_20389_333480)"
            })), kl || (kl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.817 88.116c-2.22 0-4.018-1.415-4.018-3.161s1.799-3.162 4.018-3.162c2.22 0 4.018 1.415 4.018 3.162 0 1.746-1.799 3.161-4.018 3.161z",
                fill: "url(#Q1Release_svg__paint34_radial_20389_333480)"
            })), Sl || (Sl = x.createElement("path", {
                d: "M21.878 94.65l-3.815-4.33a5.634 5.634 0 01-1.39-2.09c.719.926 2.714 2.883 4.954 3.308 2.8.531 7.566-1.919 9.63.946l-2.632 1.658-6.747.508z",
                fill: "url(#Q1Release_svg__paint35_linear_20389_333480)"
            })), Al || (Al = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M31.257 86.52c-.031-3.25-3.35-5.876-7.441-5.876-3.382 0-6.237 1.796-7.142 4.254h-.299v1.667c0 3.27 3.331 5.921 7.441 5.921h.612c.76 0 1.487-.208 2.214-.415.38-.108.759-.216 1.143-.295a4.19 4.19 0 01.84-.084c.935 0 2.023.304 2.632.794v-5.967zm-11.46.045c0 1.746 1.799 3.162 4.018 3.162 2.22 0 4.018-1.416 4.018-3.162s-1.799-3.161-4.018-3.161c-2.22 0-4.018 1.415-4.018 3.161z",
                fill: "url(#Q1Release_svg__paint36_linear_20389_333480)"
            })), bl || (bl = x.createElement("path", {
                d: "M27.835 86.565c0-1.746-1.8-3.161-4.019-3.161-2.219 0-4.018 1.415-4.018 3.161l-2.64-2.646c1.221-1.942 3.744-3.275 6.658-3.275s5.437 1.333 6.659 3.275l-2.64 2.646z",
                fill: "url(#Q1Release_svg__paint37_linear_20389_333480)"
            })), Rl || (Rl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.375 84.952c0-3.27 3.331-5.92 7.441-5.92 4.09 0 7.41 2.625 7.44 5.874v5.967c-.608-.49-1.696-.795-2.63-.795-.29 0-.572.03-.841.085-.384.079-.764.187-1.143.295-.727.207-1.454.415-2.214.415h-.612c-4.11 0-7.441-2.651-7.441-5.92zm7.441 3.162c-2.22 0-4.018-1.416-4.018-3.162s1.799-3.162 4.018-3.162c2.22 0 4.018 1.416 4.018 3.162s-1.799 3.162-4.018 3.162z",
                fill: "url(#Q1Release_svg__paint38_linear_20389_333480)"
            })), jl || (jl = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter8_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.816 79.031c-4.11 0-7.441 2.651-7.441 5.921 0 .043 0 .085.002.128.085-3.21 3.383-5.793 7.439-5.793 4.09 0 7.41 2.626 7.44 5.875v-.256c-.03-3.249-3.35-5.875-7.44-5.875zm-4.015 6.049c.085 1.687 1.85 3.034 4.015 3.034 2.165 0 3.93-1.347 4.015-3.034.002.043.003.085.003.128 0 1.746-1.799 3.162-4.018 3.162-2.22 0-4.018-1.416-4.018-3.162 0-.043 0-.085.003-.128z",
                fill: "#9B8EF9"
            }))), Il || (Il = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter9_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.377 84.834a4.678 4.678 0 00-.002.13c0 3.27 3.331 5.921 7.441 5.921h.612c.76 0 1.487-.208 2.214-.415.38-.108.759-.216 1.143-.295.269-.055.55-.084.84-.084.935 0 2.023.303 2.632.794v-.26c-.609-.49-1.697-.794-2.632-.794-.29 0-.571.03-.84.084-.384.079-.764.187-1.143.295-.727.208-1.454.415-2.214.415h-.612c-4.055 0-7.352-2.58-7.44-5.79zm11.454 0c-.087-1.686-1.851-3.031-4.015-3.031-2.164 0-3.928 1.346-4.015 3.031a2.54 2.54 0 01-.003-.13c0-1.745 1.799-3.161 4.018-3.161 2.22 0 4.018 1.415 4.018 3.162 0 .043 0 .086-.003.13z",
                fill: "#9B8EF9"
            }))), Bl || (Bl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.756 94.327c7.134 0 12.256-4.536 12.256-9.4 0-4.863-5.122-9.399-12.256-9.399-7.133 0-12.255 4.536-12.255 9.4 0 4.863 5.122 9.399 12.255 9.399zm0 1.524c7.598 0 13.757-4.89 13.757-10.924 0-6.032-6.16-10.923-13.757-10.923C16.16 74.004 10 78.894 10 84.927s6.159 10.924 13.756 10.924z",
                fill: "url(#Q1Release_svg__paint39_linear_20389_333480)"
            })), Jl || (Jl = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter10_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.5 84.801c.086-4.816 5.182-9.275 12.254-9.275 7.073 0 12.168 4.46 12.255 9.275l.001-.124c0-4.863-5.122-9.4-12.256-9.4-7.133 0-12.255 4.537-12.255 9.4v.124zm26.01 0c-.084 5.976-6.21 10.8-13.756 10.8-7.545 0-13.671-4.824-13.755-10.8l-.001.124c0 6.033 6.159 10.924 13.756 10.924 7.598 0 13.757-4.89 13.757-10.924l-.001-.124z",
                fill: "#fff"
            }))), Ol || (Ol = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.54 85.693c.501-4.565 5.454-8.637 12.214-8.637 6.759 0 11.712 4.072 12.213 8.637.028-.253.042-.507.042-.762 0-4.864-5.122-9.4-12.255-9.4-7.134 0-12.256 4.536-12.256 9.4 0 .255.014.51.042.762z",
                fill: "url(#Q1Release_svg__paint40_linear_20389_333480)"
            })), Fl || (Fl = x.createElement("path", {
                opacity: .4,
                d: "M23.755 76.977c-6.783 0-11.777 4.089-12.283 8.7l.138.015c.497-4.518 5.409-8.575 12.145-8.575v-.14zm12.283 8.7c-.506-4.611-5.5-8.7-12.283-8.7v.14c6.736 0 11.648 4.057 12.144 8.575l.139-.015z",
                fill: "url(#Q1Release_svg__paint41_linear_20389_333480)"
            })), Ml || (Ml = x.createElement("path", {
                d: "M23.756 93.796c7.598 0 13.757-4.89 13.757-10.923v-4.51H36.29c-2.162-3.783-6.961-6.414-12.534-6.414-5.88 0-10.897 2.93-12.866 7.05l-.89.254v3.62c0 6.033 6.159 10.923 13.756 10.923z",
                fill: "url(#Q1Release_svg__paint42_linear_20389_333480)"
            })), zl || (zl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M22.653 93.741v-7.185h-.613v7.136c.203.02.408.036.613.05zm-3.067-.477V86.4h-.614v6.697c.203.06.407.115.614.167zm-2.914-1.047v-7.38h-.614v7.069c.201.108.406.211.614.31zm-2.607-1.614v-8.108h-.614v7.592c.197.177.402.35.614.516zm-2.301-2.398v-6.49h-.614v5.514c.185.334.39.66.614.976zm13.803 5.477c-.203.021-.407.04-.613.053v-7.18h.613v7.127zm2.914-.567c-.202.059-.406.114-.613.165v-7.505h.613v7.34zm2.914-1.176c-.2.107-.405.21-.613.308V83.9h.613v8.038zm2.608-1.797c-.198.175-.402.345-.614.51v-8.625h.614v8.115zm2.3-2.802c-.185.326-.39.644-.613.952V81.09h.613v6.25z",
                fill: "url(#Q1Release_svg__paint43_linear_20389_333480)",
                opacity: .5
            })), Vl || (Vl = x.createElement("ellipse", {
                cx: 23.756,
                cy: 79.052,
                rx: 13.756,
                ry: 10.924,
                fill: "url(#Q1Release_svg__paint44_linear_20389_333480)"
            })), Ul || (Ul = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.817 82.245c-2.22 0-4.018-1.415-4.018-3.162 0-1.746 1.799-3.161 4.018-3.161 2.22 0 4.018 1.415 4.018 3.162 0 1.746-1.799 3.161-4.018 3.161z",
                fill: "url(#Q1Release_svg__paint45_radial_20389_333480)"
            })), Tl || (Tl = x.createElement("path", {
                d: "M21.878 88.787l-3.815-4.331a5.634 5.634 0 01-1.39-2.089c.719.926 2.714 2.883 4.954 3.308 2.8.531 7.566-1.92 9.63.946l-2.632 1.658-6.747.508z",
                fill: "url(#Q1Release_svg__paint46_linear_20389_333480)"
            })), Ll || (Ll = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M31.257 80.652c-.031-3.249-3.35-5.875-7.441-5.875-3.382 0-6.237 1.796-7.142 4.254h-.299v1.667c0 3.27 3.331 5.921 7.441 5.921h.612c.76 0 1.487-.208 2.214-.415.38-.108.759-.216 1.143-.295a4.19 4.19 0 01.84-.085c.935 0 2.023.304 2.632.795v-5.967zm-11.46.046c0 1.746 1.799 3.162 4.018 3.162 2.22 0 4.018-1.416 4.018-3.162s-1.799-3.161-4.018-3.161c-2.22 0-4.018 1.415-4.018 3.161z",
                fill: "url(#Q1Release_svg__paint47_linear_20389_333480)"
            })), ql || (ql = x.createElement("path", {
                d: "M27.835 80.694c0-1.746-1.8-3.161-4.019-3.161-2.219 0-4.018 1.415-4.018 3.161l-2.64-2.646c1.221-1.942 3.744-3.275 6.658-3.275s5.437 1.333 6.659 3.275l-2.64 2.646z",
                fill: "url(#Q1Release_svg__paint48_linear_20389_333480)"
            })), Nl || (Nl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.375 79.085c0-3.27 3.331-5.92 7.441-5.92 4.09 0 7.41 2.625 7.44 5.874v5.966c-.608-.49-1.696-.794-2.63-.794-.29 0-.572.03-.841.085-.384.078-.764.186-1.143.295-.727.207-1.454.414-2.214.414h-.612c-4.11 0-7.441-2.65-7.441-5.92zm7.441 3.162c-2.22 0-4.018-1.416-4.018-3.162s1.799-3.162 4.018-3.162c2.22 0 4.018 1.416 4.018 3.162s-1.799 3.162-4.018 3.162z",
                fill: "url(#Q1Release_svg__paint49_linear_20389_333480)"
            })), Ql || (Ql = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter11_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.816 73.164c-4.11 0-7.441 2.65-7.441 5.92 0 .044 0 .086.002.129.085-3.211 3.383-5.793 7.439-5.793 4.09 0 7.41 2.626 7.44 5.875v-.256c-.03-3.249-3.35-5.875-7.44-5.875zm-4.015 6.049c.085 1.687 1.85 3.034 4.015 3.034 2.165 0 3.93-1.347 4.015-3.034.002.042.003.085.003.128 0 1.746-1.799 3.161-4.018 3.161-2.22 0-4.018-1.415-4.018-3.161 0-.043 0-.086.003-.128z",
                fill: "#9B8EF9"
            }))), Hl || (Hl = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter12_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M16.377 78.963a4.678 4.678 0 00-.002.13c0 3.27 3.331 5.921 7.441 5.921h.612c.76 0 1.487-.208 2.214-.415.38-.108.759-.216 1.143-.295.269-.055.55-.085.84-.085.935 0 2.023.304 2.632.795v-.26c-.609-.49-1.697-.794-2.632-.794-.29 0-.571.029-.84.084-.384.079-.764.187-1.143.295-.727.208-1.454.415-2.214.415h-.612c-4.055 0-7.352-2.58-7.44-5.79zm11.454 0c-.087-1.686-1.851-3.031-4.015-3.031-2.164 0-3.928 1.345-4.015 3.031a2.54 2.54 0 01-.003-.13c0-1.746 1.799-3.161 4.018-3.161 2.22 0 4.018 1.415 4.018 3.162 0 .043 0 .086-.003.13z",
                fill: "#9B8EF9"
            }))), Dl || (Dl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M23.756 88.452c7.134 0 12.256-4.536 12.256-9.4 0-4.863-5.122-9.399-12.256-9.399-7.133 0-12.255 4.536-12.255 9.4 0 4.863 5.122 9.399 12.255 9.399zm0 1.524c7.598 0 13.757-4.89 13.757-10.924 0-6.032-6.16-10.923-13.757-10.923C16.16 68.129 10 73.019 10 79.052s6.159 10.924 13.756 10.924z",
                fill: "url(#Q1Release_svg__paint50_linear_20389_333480)"
            })), Pl || (Pl = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter13_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.5 78.934c.086-4.816 5.182-9.275 12.254-9.275 7.073 0 12.168 4.459 12.255 9.275l.001-.124c0-4.864-5.122-9.4-12.256-9.4-7.133 0-12.255 4.536-12.255 9.4v.124zm26.01 0c-.084 5.975-6.21 10.8-13.756 10.8-7.545 0-13.671-4.825-13.755-10.8l-.001.124c0 6.033 6.159 10.924 13.756 10.924 7.598 0 13.757-4.891 13.757-10.924l-.001-.124z",
                fill: "#fff"
            }))), Gl || (Gl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.54 79.818c.501-4.565 5.454-8.637 12.214-8.637 6.759 0 11.712 4.072 12.213 8.637.028-.253.042-.507.042-.762 0-4.864-5.122-9.4-12.255-9.4-7.134 0-12.256 4.536-12.256 9.4 0 .255.014.51.042.762z",
                fill: "url(#Q1Release_svg__paint51_linear_20389_333480)"
            })), Zl || (Zl = x.createElement("path", {
                opacity: .4,
                d: "M23.755 71.114c-6.783 0-11.777 4.088-12.283 8.7l.138.015c.497-4.519 5.409-8.576 12.145-8.576v-.14zm12.283 8.7c-.506-4.612-5.5-8.7-12.283-8.7v.14c6.736 0 11.648 4.056 12.144 8.575l.139-.016z",
                fill: "url(#Q1Release_svg__paint52_linear_20389_333480)"
            })), Wl || (Wl = x.createElement("path", {
                d: "M48.108 113.074c7.597 0 13.756-4.891 13.756-10.924v-4.509h-1.223c-2.162-3.783-6.96-6.414-12.533-6.414-5.88 0-10.897 2.928-12.866 7.05l-.89.253v3.62c0 6.033 6.159 10.924 13.756 10.924z",
                fill: "url(#Q1Release_svg__paint53_linear_20389_333480)"
            })), Xl || (Xl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M47.009 113.011v-7.186h-.614v7.136c.203.02.408.037.614.05zm-3.068-.477v-6.865h-.613v6.697c.202.06.407.116.613.168zm-2.914-1.048v-7.379h-.613v7.068c.2.108.405.212.613.311zm-2.607-1.614v-8.107h-.614v7.591c.198.178.403.35.614.516zm-2.3-2.397v-6.491h-.614v5.514c.184.335.39.661.613.977zm13.803 5.477c-.203.021-.408.039-.614.053v-7.18h.614v7.127zm2.914-.568c-.202.059-.407.114-.614.166v-7.506h.614v7.34zm2.914-1.175c-.2.106-.405.209-.613.307v-8.346h.613v8.039zm2.607-1.797c-.197.175-.402.345-.613.509v-8.625h.613v8.116zm2.3-2.802c-.184.326-.39.644-.613.952v-7.203h.614v6.251z",
                fill: "url(#Q1Release_svg__paint54_linear_20389_333480)",
                opacity: .5
            })), Kl || (Kl = x.createElement("ellipse", {
                cx: 48.108,
                cy: 98.342,
                rx: 13.756,
                ry: 10.924,
                fill: "url(#Q1Release_svg__paint55_linear_20389_333480)"
            })), Yl || (Yl = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M48.173 101.522c-2.22 0-4.019-1.415-4.019-3.161s1.8-3.162 4.019-3.162c2.219 0 4.018 1.416 4.018 3.162s-1.8 3.161-4.018 3.161z",
                fill: "url(#Q1Release_svg__paint56_radial_20389_333480)"
            })), $l || ($l = x.createElement("path", {
                d: "M46.233 108.06l-3.814-4.331a5.637 5.637 0 01-1.39-2.088c.718.925 2.714 2.882 4.954 3.307 2.8.531 7.566-1.919 9.63.946l-2.632 1.658-6.748.508z",
                fill: "url(#Q1Release_svg__paint57_linear_20389_333480)"
            })), er || (er = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M55.612 99.926c-.03-3.25-3.35-5.875-7.44-5.875-3.383 0-6.238 1.795-7.142 4.254h-.3v1.667c0 3.27 3.332 5.92 7.442 5.92h.611c.76 0 1.487-.207 2.215-.415.379-.108.758-.216 1.143-.295a4.19 4.19 0 01.84-.084c.934 0 2.023.304 2.631.794v-5.966zm-11.46.046c0 1.746 1.8 3.161 4.018 3.161 2.22 0 4.019-1.415 4.019-3.161 0-1.747-1.8-3.162-4.019-3.162-2.219 0-4.018 1.415-4.018 3.162z",
                fill: "url(#Q1Release_svg__paint58_linear_20389_333480)"
            })), tr || (tr = x.createElement("path", {
                d: "M52.19 99.968c0-1.746-1.799-3.162-4.018-3.162-2.22 0-4.018 1.416-4.018 3.162l-2.64-2.647c1.22-1.941 3.744-3.274 6.658-3.274s5.437 1.333 6.658 3.274l-2.64 2.647z",
                fill: "url(#Q1Release_svg__paint59_linear_20389_333480)"
            })), nr || (nr = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M40.73 98.362c0-3.27 3.332-5.92 7.442-5.92 4.09 0 7.41 2.625 7.44 5.874v5.967c-.608-.491-1.697-.795-2.631-.795-.29 0-.572.03-.84.085-.385.079-.764.187-1.143.295-.727.207-1.454.415-2.215.415h-.612c-4.11 0-7.44-2.651-7.44-5.92zm7.442 3.162c-2.22 0-4.019-1.416-4.019-3.162s1.8-3.161 4.019-3.161c2.219 0 4.018 1.415 4.018 3.161s-1.8 3.162-4.018 3.162z",
                fill: "url(#Q1Release_svg__paint60_linear_20389_333480)"
            })), ir || (ir = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter14_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M48.172 92.441c-4.11 0-7.441 2.651-7.441 5.921l.001.128c.086-3.21 3.384-5.793 7.44-5.793 4.09 0 7.41 2.626 7.44 5.875v-.256c-.03-3.249-3.35-5.875-7.44-5.875zm-4.016 6.05c.086 1.686 1.85 3.033 4.016 3.033 2.164 0 3.93-1.347 4.015-3.034.002.043.003.085.003.128 0 1.746-1.8 3.162-4.018 3.162-2.22 0-4.019-1.416-4.019-3.162 0-.043.001-.085.003-.128z",
                fill: "#9B8EF9"
            }))), ar || (ar = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter15_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M40.732 98.24a5.095 5.095 0 00-.002.13c0 3.271 3.332 5.921 7.442 5.921h.611c.76 0 1.487-.207 2.215-.415.379-.108.758-.216 1.143-.295a4.19 4.19 0 01.84-.084c.934 0 2.023.304 2.631.794v-.26c-.608-.49-1.697-.794-2.631-.794-.29 0-.572.029-.84.084-.385.079-.764.187-1.143.296-.727.207-1.454.414-2.215.414h-.514l-.093.001h-.005c-4.054 0-7.352-2.581-7.439-5.791zm11.454 0c-.086-1.685-1.85-3.031-4.014-3.031s-3.929 1.346-4.015 3.032a2.548 2.548 0 01-.004-.13c0-1.746 1.8-3.162 4.019-3.162 2.219 0 4.018 1.416 4.018 3.162 0 .043-.001.087-.004.13z",
                fill: "#9B8EF9"
            }))), lr || (lr = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M48.108 107.741c7.133 0 12.256-4.536 12.256-9.4 0-4.862-5.123-9.399-12.256-9.399-7.134 0-12.256 4.537-12.256 9.4s5.122 9.399 12.256 9.399zm0 1.524c7.597 0 13.756-4.89 13.756-10.923s-6.159-10.924-13.756-10.924-13.756 4.89-13.756 10.924c0 6.033 6.159 10.923 13.756 10.923z",
                fill: "url(#Q1Release_svg__paint61_linear_20389_333480)"
            })), rr || (rr = x.createElement("g", {
                filter: "url(#Q1Release_svg__filter16_f_20389_333480)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M35.855 98.211c.087-4.816 5.182-9.275 12.255-9.275 7.072 0 12.168 4.46 12.254 9.275l.001-.124c0-4.863-5.122-9.4-12.255-9.4-7.134 0-12.256 4.537-12.256 9.4l.001.124zm26.01 0c-.084 5.976-6.21 10.8-13.755 10.8-7.545 0-13.672-4.824-13.756-10.8v.124c0 6.033 6.158 10.924 13.756 10.924 7.597 0 13.756-4.891 13.756-10.924v-.124z",
                fill: "#fff"
            }))), or || (or = x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M35.892 99.1c.5-4.565 5.454-8.638 12.213-8.638 6.76 0 11.713 4.073 12.214 8.637.028-.253.042-.507.042-.762 0-4.863-5.122-9.4-12.256-9.4-7.133 0-12.255 4.537-12.255 9.4 0 .255.014.51.041.762z",
                fill: "url(#Q1Release_svg__paint62_linear_20389_333480)"
            })), sr || (sr = x.createElement("path", {
                opacity: .4,
                d: "M48.108 90.395c-6.782 0-11.777 4.089-12.283 8.7l.139.015c.496-4.518 5.408-8.575 12.144-8.575v-.14zm12.284 8.7c-.507-4.611-5.501-8.7-12.284-8.7v.14c6.736 0 11.649 4.057 12.145 8.575l.139-.016z",
                fill: "url(#Q1Release_svg__paint63_linear_20389_333480)"
            })), cr || (cr = x.createElement("defs", null, x.createElement("linearGradient", {
                id: "Q1Release_svg__paint0_linear_20389_333480",
                x1: 66.584,
                y1: 22.145,
                x2: 53.447,
                y2: 21.976,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B3DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint1_linear_20389_333480",
                x1: 84.636,
                y1: 17.9,
                x2: 65.286,
                y2: 27.769,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#6C5DD3"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#8F7EFE"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint2_linear_20389_333480",
                x1: 63.799,
                y1: 63.585,
                x2: 85.687,
                y2: 58.806,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B3DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint3_linear_20389_333480",
                x1: 90.278,
                y1: 74.214,
                x2: 98.186,
                y2: 44.7,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E0E8FA"
            }), x.createElement("stop", {
                offset: .188,
                stopColor: "#FCFDFF"
            }), x.createElement("stop", {
                offset: .354,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .515,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .762,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: .9,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FCFDFF"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint4_linear_20389_333480",
                x1: 99.171,
                y1: 46.587,
                x2: 91.568,
                y2: 74.96,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: .567,
                stopColor: "#0B1359",
                stopOpacity: 0
            }), x.createElement("stop", {
                offset: .827,
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#0B1359",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint5_linear_20389_333480",
                x1: 77.729,
                y1: 65.65,
                x2: 94.432,
                y2: 61.046,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#EBF2FF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#CCD8F0"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint7_linear_20389_333480",
                x1: 89.367,
                y1: 58.103,
                x2: 95.856,
                y2: 59.842,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint8_linear_20389_333480",
                x1: 91.607,
                y1: 66.922,
                x2: 95.638,
                y2: 51.88,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#5849BD"
            }), x.createElement("stop", {
                offset: .212,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .425,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .809,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint9_linear_20389_333480",
                x1: 86.269,
                y1: 62.919,
                x2: 89.444,
                y2: 51.07,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .583,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint10_linear_20389_333480",
                x1: 80.027,
                y1: 55.764,
                x2: 91.996,
                y2: 58.971,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#6C5DD3"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#8F7EFE"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint11_linear_20389_333480",
                x1: 91.799,
                y1: 67.506,
                x2: 89.483,
                y2: 46.855,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint12_linear_20389_333480",
                x1: 83.374,
                y1: 48.109,
                x2: 87.379,
                y2: 68.47,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#ADBEDF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#D7E0FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint13_linear_20389_333480",
                x1: 78.011,
                y1: 55.284,
                x2: 86.741,
                y2: 57.623,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#fff"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint14_linear_20389_333480",
                x1: 19.958,
                y1: 89.583,
                x2: 57.279,
                y2: 56.462,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                offset: .089,
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EFF4FF"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint15_linear_20389_333480",
                x1: 80.028,
                y1: 104.51,
                x2: 4.835,
                y2: 48.073,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#BECFF1"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#B8D0FF"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint16_linear_20389_333480",
                x1: 85.706,
                y1: 79.814,
                x2: 102.909,
                y2: 79.974,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#8776FF"
            }), x.createElement("stop", {
                offset: .157,
                stopColor: "#5646C7"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint17_linear_20389_333480",
                x1: 83.101,
                y1: 83.184,
                x2: 70.982,
                y2: 82.49,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#8776FF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#8F7EFE"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint18_linear_20389_333480",
                x1: 21.681,
                y1: 2.322,
                x2: -4.398,
                y2: 1.382,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                offset: .072,
                stopColor: "#8776FF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#8F7EFE"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint19_linear_20389_333480",
                x1: 9.644,
                y1: 10.258,
                x2: 3.627,
                y2: 5.01,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EFF4FF"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint20_linear_20389_333480",
                x1: 9.312,
                y1: 98.469,
                x2: 38.513,
                y2: 98.469,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E0E8FA"
            }), x.createElement("stop", {
                offset: .188,
                stopColor: "#FCFDFF"
            }), x.createElement("stop", {
                offset: .354,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .515,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .762,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: .9,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FCFDFF"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint21_linear_20389_333480",
                x1: 37.016,
                y1: 99.844,
                x2: 8.945,
                y2: 99.844,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: .567,
                stopColor: "#0B1359",
                stopOpacity: 0
            }), x.createElement("stop", {
                offset: .827,
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#0B1359",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint22_linear_20389_333480",
                x1: 15.878,
                y1: 98.209,
                x2: 31.84,
                y2: 93.808,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#EBF2FF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#CCD8F0"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint24_linear_20389_333480",
                x1: 23.965,
                y1: 93.641,
                x2: 23.965,
                y2: 100.06,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint25_linear_20389_333480",
                x1: 16.375,
                y1: 97.892,
                x2: 31.257,
                y2: 97.892,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#5849BD"
            }), x.createElement("stop", {
                offset: .212,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .425,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .809,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint26_linear_20389_333480",
                x1: 18.752,
                y1: 91.972,
                x2: 30.475,
                y2: 91.972,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .583,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint27_linear_20389_333480",
                x1: 23.816,
                y1: 84.441,
                x2: 23.816,
                y2: 96.283,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#6C5DD3"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#8F7EFE"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint28_linear_20389_333480",
                x1: 15.878,
                y1: 98.209,
                x2: 34.368,
                y2: 90.963,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint29_linear_20389_333480",
                x1: 31.695,
                y1: 85.641,
                x2: 13.891,
                y2: 94.375,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#ADBEDF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#D7E0FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint30_linear_20389_333480",
                x1: 23.755,
                y1: 82.469,
                x2: 23.755,
                y2: 91.106,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#fff"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint31_linear_20389_333480",
                x1: 9.312,
                y1: 93.059,
                x2: 38.513,
                y2: 93.059,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E0E8FA"
            }), x.createElement("stop", {
                offset: .188,
                stopColor: "#FCFDFF"
            }), x.createElement("stop", {
                offset: .354,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .515,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .762,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: .9,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FCFDFF"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint32_linear_20389_333480",
                x1: 37.014,
                y1: 94.43,
                x2: 8.943,
                y2: 94.43,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: .567,
                stopColor: "#0B1359",
                stopOpacity: 0
            }), x.createElement("stop", {
                offset: .827,
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#0B1359",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint33_linear_20389_333480",
                x1: 15.878,
                y1: 92.803,
                x2: 31.84,
                y2: 88.402,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#EBF2FF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#CCD8F0"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint35_linear_20389_333480",
                x1: 23.965,
                y1: 88.231,
                x2: 23.965,
                y2: 94.65,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint36_linear_20389_333480",
                x1: 16.375,
                y1: 92.486,
                x2: 31.257,
                y2: 92.486,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#5849BD"
            }), x.createElement("stop", {
                offset: .212,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .425,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .809,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint37_linear_20389_333480",
                x1: 18.752,
                y1: 86.565,
                x2: 30.475,
                y2: 86.565,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .583,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint38_linear_20389_333480",
                x1: 23.816,
                y1: 79.031,
                x2: 23.816,
                y2: 90.873,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#6C5DD3"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#8F7EFE"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint39_linear_20389_333480",
                x1: 15.878,
                y1: 92.803,
                x2: 34.368,
                y2: 85.557,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint40_linear_20389_333480",
                x1: 31.695,
                y1: 80.231,
                x2: 13.891,
                y2: 88.965,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#ADBEDF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#D7E0FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint41_linear_20389_333480",
                x1: 23.755,
                y1: 77.047,
                x2: 23.755,
                y2: 85.684,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#fff"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint42_linear_20389_333480",
                x1: 9.312,
                y1: 87.192,
                x2: 38.513,
                y2: 87.192,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E0E8FA"
            }), x.createElement("stop", {
                offset: .188,
                stopColor: "#FCFDFF"
            }), x.createElement("stop", {
                offset: .354,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .515,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .762,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: .9,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FCFDFF"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint43_linear_20389_333480",
                x1: 37.016,
                y1: 88.562,
                x2: 8.945,
                y2: 88.562,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: .567,
                stopColor: "#0B1359",
                stopOpacity: 0
            }), x.createElement("stop", {
                offset: .827,
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#0B1359",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint44_linear_20389_333480",
                x1: 15.878,
                y1: 86.928,
                x2: 31.84,
                y2: 82.527,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#EBF2FF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#CCD8F0"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint46_linear_20389_333480",
                x1: 23.965,
                y1: 82.367,
                x2: 23.965,
                y2: 88.787,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint47_linear_20389_333480",
                x1: 16.375,
                y1: 86.619,
                x2: 31.257,
                y2: 86.619,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#5849BD"
            }), x.createElement("stop", {
                offset: .212,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .425,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .809,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint48_linear_20389_333480",
                x1: 18.752,
                y1: 80.694,
                x2: 30.475,
                y2: 80.694,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .583,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint49_linear_20389_333480",
                x1: 23.816,
                y1: 73.164,
                x2: 23.816,
                y2: 85.006,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#6C5DD3"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#8F7EFE"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint50_linear_20389_333480",
                x1: 15.878,
                y1: 86.928,
                x2: 34.368,
                y2: 79.682,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint51_linear_20389_333480",
                x1: 31.695,
                y1: 74.356,
                x2: 13.891,
                y2: 83.09,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#ADBEDF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#D7E0FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint52_linear_20389_333480",
                x1: 23.755,
                y1: 71.184,
                x2: 23.755,
                y2: 79.821,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#fff"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint53_linear_20389_333480",
                x1: 33.664,
                y1: 106.469,
                x2: 62.865,
                y2: 106.469,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E0E8FA"
            }), x.createElement("stop", {
                offset: .188,
                stopColor: "#FCFDFF"
            }), x.createElement("stop", {
                offset: .354,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .515,
                stopColor: "#E7EEFB"
            }), x.createElement("stop", {
                offset: .762,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: .9,
                stopColor: "#B4C3E1"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FCFDFF"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint54_linear_20389_333480",
                x1: 61.372,
                y1: 107.832,
                x2: 33.3,
                y2: 107.832,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: .567,
                stopColor: "#0B1359",
                stopOpacity: 0
            }), x.createElement("stop", {
                offset: .827,
                stopColor: "#0B1359"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#0B1359",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint55_linear_20389_333480",
                x1: 40.229,
                y1: 106.217,
                x2: 56.192,
                y2: 101.816,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#EBF2FF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#CCD8F0"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint57_linear_20389_333480",
                x1: 48.321,
                y1: 101.641,
                x2: 48.321,
                y2: 108.06,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint58_linear_20389_333480",
                x1: 40.731,
                y1: 105.892,
                x2: 55.612,
                y2: 105.892,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#5849BD"
            }), x.createElement("stop", {
                offset: .212,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .425,
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .809,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint59_linear_20389_333480",
                x1: 43.107,
                y1: 99.968,
                x2: 54.83,
                y2: 99.968,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#9385F4"
            }), x.createElement("stop", {
                offset: .583,
                stopColor: "#4E40B0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#5849BD"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint60_linear_20389_333480",
                x1: 48.171,
                y1: 92.441,
                x2: 48.171,
                y2: 104.283,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#6C5DD3"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#8F7EFE"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint61_linear_20389_333480",
                x1: 40.229,
                y1: 106.217,
                x2: 58.719,
                y2: 98.971,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint62_linear_20389_333480",
                x1: 56.046,
                y1: 93.637,
                x2: 38.242,
                y2: 102.371,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#ADBEDF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#D7E0FA"
            })), x.createElement("linearGradient", {
                id: "Q1Release_svg__paint63_linear_20389_333480",
                x1: 48.108,
                y1: 90.465,
                x2: 48.108,
                y2: 99.102,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#fff"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter0_b_20389_333480",
                x: 36.688,
                y: 7.134,
                width: 27.911,
                height: 40.616,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feGaussianBlur", {
                in: "BackgroundImageFix",
                stdDeviation: 1.15
            }), x.createElement("feComposite", {
                in2: "SourceAlpha",
                operator: "in",
                result: "effect1_backgroundBlur_20389_333480"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect1_backgroundBlur_20389_333480",
                result: "shape"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter1_b_20389_333480",
                x: 21.053,
                y: 21.203,
                width: 66.158,
                height: 51.523,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feGaussianBlur", {
                in: "BackgroundImageFix",
                stdDeviation: 1
            }), x.createElement("feComposite", {
                in2: "SourceAlpha",
                operator: "in",
                result: "effect1_backgroundBlur_20389_333480"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect1_backgroundBlur_20389_333480",
                result: "shape"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter2_f_20389_333480",
                x: 79.564,
                y: 49.541,
                width: 10.217,
                height: 15.516,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .067,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter3_f_20389_333480",
                x: 82.244,
                y: 51.244,
                width: 11.902,
                height: 13.949,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .067,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter4_f_20389_333480",
                x: 75.379,
                y: 43.199,
                width: 22.523,
                height: 28.703,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .135,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter5_f_20389_333480",
                x: 16.235,
                y: 84.302,
                width: 15.162,
                height: 9.619,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .07,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter6_f_20389_333480",
                x: 16.235,
                y: 86.806,
                width: 15.162,
                height: 9.623,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .07,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter7_f_20389_333480",
                x: 9.719,
                y: 80.412,
                width: 28.07,
                height: 21.129,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .14,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter8_f_20389_333480",
                x: 16.235,
                y: 78.892,
                width: 15.162,
                height: 9.619,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .07,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter9_f_20389_333480",
                x: 16.235,
                y: 81.403,
                width: 15.162,
                height: 9.623,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .07,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter10_f_20389_333480",
                x: 9.719,
                y: 74.998,
                width: 28.07,
                height: 21.129,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .14,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter11_f_20389_333480",
                x: 16.235,
                y: 73.024,
                width: 15.162,
                height: 9.619,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .07,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter12_f_20389_333480",
                x: 16.235,
                y: 75.532,
                width: 15.162,
                height: 9.623,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .07,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter13_f_20389_333480",
                x: 9.719,
                y: 69.131,
                width: 28.07,
                height: 21.129,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .14,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter14_f_20389_333480",
                x: 40.591,
                y: 92.302,
                width: 15.162,
                height: 9.619,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .07,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter15_f_20389_333480",
                x: 40.591,
                y: 94.81,
                width: 15.162,
                height: 9.623,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .07,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("filter", {
                id: "Q1Release_svg__filter16_f_20389_333480",
                x: 34.074,
                y: 88.408,
                width: 28.07,
                height: 21.129,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .14,
                result: "effect1_foregroundBlur_20389_333480"
            })), x.createElement("radialGradient", {
                id: "Q1Release_svg__paint6_radial_20389_333480",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(4.83824 1.2287 -1.56164 6.1493 84.368 56.993)"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q1Release_svg__paint23_radial_20389_333480",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(.0625 4.77018 -6.0628 .07944 23.753 88.76)"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q1Release_svg__paint34_radial_20389_333480",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(.0625 4.77018 -6.0628 .07944 23.755 83.346)"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q1Release_svg__paint45_radial_20389_333480",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(.0625 4.77018 -6.0628 .07944 23.755 77.475)"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q1Release_svg__paint56_radial_20389_333480",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(.0625 4.77018 -6.0628 .07944 48.11 96.752)"
            }, x.createElement("stop", {
                stopColor: "#A9B8DA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#A9B8DA",
                stopOpacity: 0
            })))))
        }
        var Fr, Mr;
        function zr() {
            return (zr = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Vr(e) {
            return x.createElement("svg", zr({
                width: 120,
                height: 120,
                viewBox: "0 0 120 120",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Fr || (Fr = x.createElement("g", {
                clipPath: "url(#Q3Release_svg__clip0_16146_261067)"
            }, x.createElement("path", {
                d: "M77.956 90.308L97.18 18.57c.493-1.84.213-3.315-.64-4.226l-3.194-3.194-2.023 2.648-38.43 10.297c-3.774 1.011-7.652 4.89-8.663 8.663L26.507 98.896l-3.92 6.769 3.125 3.126c.906.905 2.409 1.212 4.296.707l39.285-10.527c3.774-1.011 7.652-4.89 8.663-8.663z",
                fill: "url(#Q3Release_svg__paint0_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M41.1 29.632c1.01-3.773 4.89-7.652 8.663-8.663l39.285-10.526c3.774-1.011 6.013 1.228 5.002 5.001l-19.222 71.74c-1.011 3.773-4.89 7.651-8.663 8.662l-39.286 10.527c-3.773 1.011-6.013-1.229-5.002-5.002L41.1 29.632z",
                fill: "url(#Q3Release_svg__paint1_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M60.349 22.887c.253-.943-.307-1.503-1.25-1.25L48.85 24.383c-1.886.506-3.826 2.445-4.331 4.331l-19.223 71.739c-.505 1.887.614 3.007 2.501 2.501l39.286-10.526c1.886-.506 3.826-2.445 4.331-4.332l19.223-71.739c.505-1.886-.615-3.006-2.501-2.5l-10.249 2.745c-.943.253-1.913 1.223-2.165 2.166-.253.944-1.223 1.913-2.166 2.166l-11.957 3.204c-.943.252-1.503-.307-1.25-1.25z",
                fill: "url(#Q3Release_svg__paint2_linear_16146_261067)"
            }), x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M61.293 24.193c-.066.755.47 1.17 1.306.945l11.956-3.204c.944-.252 1.913-1.222 2.166-2.165.253-.943 1.222-1.913 2.166-2.166l10.248-2.746c.593-.159 1.11-.157 1.524-.022-.294-.907-1.228-1.326-2.523-.979l-10.249 2.746c-.943.253-1.913 1.223-2.165 2.166-.253.944-1.223 1.913-2.166 2.166l-11.957 3.204c-.107.028-.21.047-.306.055zm-35.02 78.783c-.905-.295-1.323-1.228-.977-2.523L44.52 28.714c.505-1.886 2.445-3.825 4.331-4.331L59.1 21.637c.836-.224 1.371.19 1.305.945a1.777 1.777 0 00-.306.055L49.85 25.384c-1.887.505-3.826 2.444-4.332 4.331l-19.222 71.739c-.159.592-.157 1.108-.023 1.522z",
                fill: "url(#Q3Release_svg__paint3_linear_16146_261067)"
            }), x.createElement("g", {
                opacity: .4,
                filter: "url(#Q3Release_svg__filter0_f_16146_261067)"
            }, x.createElement("rect", {
                width: 10.61,
                height: 10.61,
                rx: 5.305,
                transform: "matrix(.96593 -.25882 -.25882 .96593 42.984 58.457)",
                fill: "url(#Q3Release_svg__paint4_radial_16146_261067)"
            }), x.createElement("rect", {
                width: 10.61,
                height: 10.61,
                rx: 5.305,
                transform: "matrix(.96593 -.25882 -.25882 .96593 38.867 73.828)",
                fill: "url(#Q3Release_svg__paint5_radial_16146_261067)"
            }), x.createElement("rect", {
                width: 10.61,
                height: 10.61,
                rx: 5.305,
                transform: "matrix(.96593 -.25882 -.25882 .96593 34.746 89.203)",
                fill: "url(#Q3Release_svg__paint6_radial_16146_261067)"
            }), x.createElement("rect", {
                width: 21.22,
                height: 3.537,
                rx: 1.768,
                transform: "matrix(.96593 -.25882 -.25882 .96593 57.443 57.754)",
                fill: "url(#Q3Release_svg__paint7_radial_16146_261067)"
            }), x.createElement("rect", {
                width: 21.22,
                height: 3.537,
                rx: 1.768,
                transform: "matrix(.96593 -.25882 -.25882 .96593 53.326 73.125)",
                fill: "url(#Q3Release_svg__paint8_radial_16146_261067)"
            }), x.createElement("rect", {
                width: 21.22,
                height: 3.537,
                rx: 1.768,
                transform: "matrix(.96593 -.25882 -.25882 .96593 49.205 88.492)",
                fill: "url(#Q3Release_svg__paint9_radial_16146_261067)"
            })), x.createElement("rect", {
                width: 10.61,
                height: 10.61,
                rx: 5.305,
                transform: "matrix(.96593 -.25882 -.25882 .96593 40.984 55.457)",
                fill: "#24BA7B"
            }), x.createElement("rect", {
                width: 10.61,
                height: 10.61,
                rx: 5.305,
                transform: "matrix(.96593 -.25882 -.25882 .96593 36.867 70.828)",
                fill: "#24BA7B"
            }), x.createElement("rect", {
                width: 10.61,
                height: 10.61,
                rx: 5.305,
                transform: "matrix(.96593 -.25882 -.25882 .96593 32.746 86.203)",
                fill: "#24BA7B"
            }), x.createElement("rect", {
                width: 21.22,
                height: 3.537,
                rx: 1.768,
                transform: "matrix(.96593 -.25882 -.25882 .96593 55.443 54.754)",
                fill: "#24BA7B"
            }), x.createElement("rect", {
                width: 21.22,
                height: 3.537,
                rx: 1.768,
                transform: "matrix(.96593 -.25882 -.25882 .96593 51.326 70.125)",
                fill: "#24BA7B"
            }), x.createElement("rect", {
                width: 21.22,
                height: 3.537,
                rx: 1.768,
                transform: "matrix(.96593 -.25882 -.25882 .96593 47.205 85.492)",
                fill: "#24BA7B"
            }), x.createElement("path", {
                d: "M77.963 45.909l4.119-15.373c.252-.944.099-1.695-.354-2.148l-1.843-1.908-1.303 1.823L36.88 39.477c-1.887.506-3.826 2.445-4.331 4.332l-3.94 14.702-1.702.942 1.876 1.875c.452.453 1.204.607 2.147.354L73.631 50.24c1.887-.505 3.826-2.445 4.332-4.331z",
                fill: "url(#Q3Release_svg__paint10_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M30.672 41.927c.505-1.887 2.445-3.826 4.331-4.332L77.716 26.15c1.887-.505 3.006.614 2.5 2.501l-4.121 15.384c-.506 1.886-2.445 3.826-4.332 4.331L29.05 59.811c-1.886.506-3.006-.614-2.5-2.5l4.122-15.384z",
                fill: "url(#Q3Release_svg__paint11_linear_16146_261067)"
            }), x.createElement("g", {
                opacity: .4,
                filter: "url(#Q3Release_svg__filter1_f_16146_261067)"
            }, x.createElement("path", {
                d: "M26.935 55.597l4.687-1.276a4.513 4.513 0 001.209-.549l2.237-1.414c.28-.177.565-.322.845-.43l3.069-1.179c.364-.14.717-.216 1.04-.224l2.699-.066c.543-.013 1.166-.22 1.782-.59l.83-.5c.797-.479 1.598-.679 2.223-.554l1.014.203c.811.163 1.998-.533 2.669-1.564v0c.556-.855 1.488-1.503 2.273-1.58l2.665-.259c.965-.094 2.095-.746 2.97-1.712l1.042-1.151c.72-.797 1.624-1.388 2.471-1.619l2.016-.548c.372-.102.76-.274 1.14-.507l1.26-.77c1-.613 1.989-.724 2.56-.288v0c.464.353 1.208.351 2.023-.006l1.244-.544a4.949 4.949 0 001.418-.97v0c.661-.637 1.44-1.072 2.14-1.196l2.424-.43c.19-.033.388-.087.589-.16l1.617-.594c1.159-.425 2.316-1.453 2.96-2.629l.694-1.264",
                stroke: "url(#Q3Release_svg__paint12_linear_16146_261067)"
            })), x.createElement("path", {
                d: "M26.934 55.596l3.94-1.072c.716-.195 1.476-.648 2.134-1.273l1.802-1.71a5.79 5.79 0 011.381-.98l2.117-1.056c.741-.369 1.454-.486 2.002-.328l1.588.458c.674.194 1.649-.162 2.479-.907l.206-.185c.923-.827 2.012-1.09 2.55-.614v0c.831.735 2.786-.315 3.508-1.883l.096-.208c.6-1.303 2.078-2.355 3.138-2.235l.715.082c1.282.146 3.054-.983 4-2.549l1.406-2.328c.732-1.212 1.98-2.214 3.156-2.534l.89-.242c.585-.16 1.207-.521 1.754-1.022l.513-.47c1.192-1.09 2.604-1.222 2.93-.274v0c.26.753 1.228.848 2.269.222l.514-.309a5.38 5.38 0 001.628-1.543v0c.78-1.141 2.04-1.979 3.08-2.049l1.206-.081c.376-.026.788-.14 1.21-.335l1.082-.504c1.23-.571 2.367-1.755 2.866-2.984l1.65-4.064",
                stroke: "url(#Q3Release_svg__paint13_linear_16146_261067)"
            }), x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M88.752 68.727l14.618 8.08c4.404 2.434 6.552 8.23 4.798 12.946-1.182 3.18-3.838 5.057-6.792 5.195l-4.005.12c2.783-.289 5.243-2.135 6.37-5.163 1.753-4.716-.395-10.512-4.798-12.946l-14.618-8.08c-1.298-.717-2.646-1.062-3.948-1.072l4.146-.149c1.388-.041 2.838.3 4.23 1.07z",
                fill: "url(#Q3Release_svg__paint14_linear_16146_261067)"
            }), x.createElement("g", {
                filter: "url(#Q3Release_svg__filter2_b_16146_261067)"
            }, x.createElement("path", {
                d: "M73.176 73.011c1.754-4.715 6.745-6.565 11.149-4.131l14.618 8.08c4.403 2.433 6.551 8.23 4.798 12.945-1.754 4.716-6.746 6.566-11.15 4.132l-14.617-8.08c-4.404-2.433-6.552-8.23-4.798-12.945z",
                fill: "url(#Q3Release_svg__paint15_linear_16146_261067)",
                fillOpacity: .2
            })), x.createElement("g", {
                opacity: .8,
                filter: "url(#Q3Release_svg__filter3_f_16146_261067)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M84.323 68.88c-4.404-2.434-9.395-.584-11.149 4.132a10.03 10.03 0 00-.6 3.97 9.858 9.858 0 01.6-2.97c1.754-4.716 6.745-6.566 11.149-4.132l14.618 8.08c3.214 1.776 5.226 5.343 5.397 8.975.189-3.962-1.888-8.036-5.397-9.976l-14.618-8.08z",
                fill: "#fff"
            })), x.createElement("path", {
                d: "M89.705 81.986c-1.335 3.588.34 8.02 3.74 9.9a6.74 6.74 0 001.962.724l-.007.111 1.273.002a5.77 5.77 0 00.767-.064c2.013-.307 3.762-1.677 4.577-3.868 1.335-3.589-.34-8.02-3.74-9.9-1.073-.593-2.19-.861-3.257-.837l-1.043-.002.011.118c-1.888.39-3.508 1.731-4.283 3.816z",
                fill: "url(#Q3Release_svg__paint16_linear_16146_261067)"
            }), x.createElement("ellipse", {
                rx: 7.034,
                ry: 6.932,
                transform: "matrix(.87521 .48374 -.34857 .93728 94.59 85.388)",
                fill: "url(#Q3Release_svg__paint17_linear_16146_261067)"
            }), x.createElement("g", {
                opacity: .7,
                filter: "url(#Q3Release_svg__filter4_f_16146_261067)"
            }, x.createElement("path", {
                d: "M51.983 42.093C49.11 48.77 40.93 54.871 33.71 55.721c-7.219.85-10.741-3.874-7.868-10.55 2.874-6.677 11.055-12.778 18.273-13.628 7.219-.85 10.741 3.874 7.868 10.55z",
                fill: "url(#Q3Release_svg__paint18_radial_16146_261067)"
            })), x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.197 44.243c9.319-1.097 19.88-8.973 23.59-17.592 1.83-4.251 1.65-7.889-.12-10.352l1.905 2.553c1.77 2.464 1.949 6.102.12 10.353-3.71 8.619-14.272 16.495-23.59 17.592-4.651.548-8.113-.696-9.954-3.151l-1.905-2.554c1.841 2.455 5.303 3.699 9.954 3.151zm-9.975-3.18c-.041-.055-.08-.11-.12-.167l-.002.004.122.163zm33.296-24.965l-.133-.179-.007.003c.047.058.094.116.14.176z",
                fill: "url(#Q3Release_svg__paint19_linear_16146_261067)"
            }), x.createElement("g", {
                filter: "url(#Q3Release_svg__filter5_b_16146_261067)"
            }, x.createElement("path", {
                d: "M47.786 26.649c-3.709 8.619-14.27 16.495-23.59 17.593-9.319 1.097-13.866-5.001-10.157-13.62 3.71-8.62 14.271-16.496 23.59-17.593 9.32-1.097 13.867 5 10.157 13.62z",
                fill: "url(#Q3Release_svg__paint20_linear_16146_261067)",
                fillOpacity: .2
            })), x.createElement("g", {
                opacity: .4,
                filter: "url(#Q3Release_svg__filter6_f_16146_261067)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M49.066 21.526c-.255-5.177-4.539-8.308-11.438-7.496-9.319 1.097-19.88 8.974-23.59 17.593-.79 1.837-1.206 3.56-1.28 5.123-.09-1.816.317-3.885 1.28-6.123 3.71-8.62 14.271-16.496 23.59-17.593 7.333-.863 11.711 2.728 11.438 8.496z",
                fill: "#fff"
            })), x.createElement("path", {
                d: "M26.655 29.35l-1.354-3.644a.619.619 0 00-.075-.143l-1.348-1.807-.146.29-5.64 4.796 1.325 1.778c.116.18.324.302.582.272l6.157-.725a.609.609 0 00.5-.817z",
                fill: "url(#Q3Release_svg__paint21_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M34.222 36.606c-2.17 1.315-4.521 2.214-6.756 2.477-2.835.334-4.949-.42-6.08-1.91l-1.35-1.81.01-.804 3.483.12c.17.369.4.696.689.977l2.037.025 6.851-2.181 1.353 1.814a.886.886 0 01-.237 1.292z",
                fill: "url(#Q3Release_svg__paint22_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M21.626 27.544l2.164 2.902c-.72 1.67-.766 3.136-.26 4.236l-4.118-.972.049-3.554 2.165-2.612z",
                fill: "url(#Q3Release_svg__paint23_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M41.912 28.304l-2.544.3-.714.005.784-4.493-1.973-4.899 3.019.935 1.415 1.898c1.027 1.507 1.112 3.7.013 6.254z",
                fill: "url(#Q3Release_svg__paint24_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M29.978 23.956c1.524-.864 3.148-1.453 4.697-1.635 1.799-.212 3.213.157 4.123.949l-1.337-4.048-5.996-.08-4.063 2.78 1.335 1.79a.957.957 0 001.241.244z",
                fill: "url(#Q3Release_svg__paint25_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M38.823 33.57l4.803-4.37a.603.603 0 00.083-.81l-1.304-1.748-.029.022-5.756 5.068 1.296 1.739a.61.61 0 00.907.098z",
                fill: "url(#Q3Release_svg__paint26_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M26.148 37.319c-5.707.672-8.491-3.062-6.22-8.34l2.544-.3c-1.713 3.979.387 6.794 4.689 6.288 1.563-.185 3.203-.782 4.738-1.66a.956.956 0 011.243.243.886.886 0 01-.238 1.292c-2.17 1.314-4.521 2.214-6.756 2.477z",
                fill: "url(#Q3Release_svg__paint27_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M23.001 23.702a.609.609 0 01.98.238l1.355 3.645a.609.609 0 01-.5.816l-6.157.725c-.588.07-.919-.657-.48-1.055L23 23.701z",
                fill: "url(#Q3Release_svg__paint28_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M33.364 20.56c4.302-.507 6.401 2.308 4.689 6.287l2.543-.299c2.272-5.278-.513-9.013-6.22-8.34-2.219.26-4.553 1.15-6.71 2.449a.887.887 0 00-.24 1.294.957.957 0 001.24.244c1.524-.864 3.148-1.453 4.698-1.635z",
                fill: "url(#Q3Release_svg__paint29_linear_16146_261067)"
            }), x.createElement("path", {
                d: "M37.523 31.825a.609.609 0 01-.98-.239l-1.354-3.644a.609.609 0 01.5-.817l6.156-.725c.588-.07.92.657.481 1.055l-4.803 4.37z",
                fill: "url(#Q3Release_svg__paint30_linear_16146_261067)"
            }), x.createElement("circle", {
                opacity: .3,
                cx: 60,
                cy: 60,
                r: 45,
                fill: "url(#Q3Release_svg__paint31_radial_16146_261067)"
            }))), Mr || (Mr = x.createElement("defs", null, x.createElement("linearGradient", {
                id: "Q3Release_svg__paint0_linear_16146_261067",
                x1: 42.269,
                y1: 91.24,
                x2: 150.176,
                y2: 78.56,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint1_linear_16146_261067",
                x1: 67.545,
                y1: 15.318,
                x2: 57.964,
                y2: 98.522,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#F3F7FF"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint2_linear_16146_261067",
                x1: 50.209,
                y1: 89.526,
                x2: 50.535,
                y2: 23.196,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#29D98F"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#24BA7B"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint3_linear_16146_261067",
                x1: 50.209,
                y1: 89.526,
                x2: 50.535,
                y2: 23.196,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#17BF79"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#14A86A"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint10_linear_16146_261067",
                x1: 68.005,
                y1: 50.657,
                x2: 83.662,
                y2: 34.769,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: .447,
                stopColor: "#DAE5FA"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#E6EEFF"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint11_linear_16146_261067",
                x1: 36.618,
                y1: 39.66,
                x2: 49.388,
                y2: 54.625,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#F3F7FF"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint12_linear_16146_261067",
                x1: 65.278,
                y1: 44.437,
                x2: 77.153,
                y2: 34.933,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#1EA76D"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#1EA76D",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint13_linear_16146_261067",
                x1: 39.073,
                y1: 49.827,
                x2: 59.983,
                y2: 10.549,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#1EA76D"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#29D98F"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint14_linear_16146_261067",
                x1: 106.381,
                y1: 89.694,
                x2: 105.77,
                y2: 79.793,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B3DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint15_linear_16146_261067",
                x1: 79.514,
                y1: 85.682,
                x2: 96.582,
                y2: 75.464,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#B7FFE1"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#BEFFE4"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint16_linear_16146_261067",
                x1: 99.669,
                y1: 82.962,
                x2: 100.567,
                y2: 90.916,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#29D98F"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#1EA76D"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint17_linear_16146_261067",
                x1: 3.132,
                y1: 1.703,
                x2: 8.071,
                y2: 10.337,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#29D98F"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#57FEB8"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint19_linear_16146_261067",
                x1: 44.228,
                y1: 36.864,
                x2: 53.545,
                y2: 24.054,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B3DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint20_linear_16146_261067",
                x1: 18.179,
                y1: 43.328,
                x2: 50.649,
                y2: 27.184,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#fff"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EBF1FF"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint21_linear_16146_261067",
                x1: 22.727,
                y1: 30.305,
                x2: 25.563,
                y2: 28.444,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#B9C7E4"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint22_linear_16146_261067",
                x1: 32.993,
                y1: 37.043,
                x2: 25.974,
                y2: 39.702,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#B9C7E4"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint23_linear_16146_261067",
                x1: 22.323,
                y1: 29.443,
                x2: 19.292,
                y2: 32.243,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#B9C7E4"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint24_linear_16146_261067",
                x1: 41.431,
                y1: 25.34,
                x2: 42.244,
                y2: 22.202,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#B9C7E4"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint25_linear_16146_261067",
                x1: 32.384,
                y1: 21.534,
                x2: 27.138,
                y2: 23.679,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#B9C7E4"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint26_linear_16146_261067",
                x1: 37.613,
                y1: 32.217,
                x2: 43.359,
                y2: 27.555,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#B9C7E4"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint27_linear_16146_261067",
                x1: 16.973,
                y1: 26.674,
                x2: 29.127,
                y2: 35.842,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#F3F7FF"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint28_linear_16146_261067",
                x1: 16.973,
                y1: 26.674,
                x2: 29.127,
                y2: 35.842,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#F3F7FF"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint29_linear_16146_261067",
                x1: 29.365,
                y1: 16.298,
                x2: 36.848,
                y2: 27.812,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#F3F7FF"
            })), x.createElement("linearGradient", {
                id: "Q3Release_svg__paint30_linear_16146_261067",
                x1: 29.365,
                y1: 16.298,
                x2: 36.848,
                y2: 27.812,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#DDE8FC"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#F3F7FF"
            })), x.createElement("radialGradient", {
                id: "Q3Release_svg__paint4_radial_16146_261067",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "rotate(90 0 5.305) scale(5.30497)"
            }, x.createElement("stop", {
                stopColor: "#16A367"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#139C63",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q3Release_svg__paint5_radial_16146_261067",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "rotate(90 0 5.305) scale(5.30497)"
            }, x.createElement("stop", {
                stopColor: "#16A367"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#139C63",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q3Release_svg__paint6_radial_16146_261067",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "rotate(90 0 5.305) scale(5.30497)"
            }, x.createElement("stop", {
                stopColor: "#16A367"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#139C63",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q3Release_svg__paint7_radial_16146_261067",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(0 1.76832 -10.6099 0 10.61 1.768)"
            }, x.createElement("stop", {
                stopColor: "#16A367"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#139C63",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q3Release_svg__paint8_radial_16146_261067",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(0 1.76832 -10.6099 0 10.61 1.768)"
            }, x.createElement("stop", {
                stopColor: "#16A367"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#139C63",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q3Release_svg__paint9_radial_16146_261067",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(0 1.76832 -10.6099 0 10.61 1.768)"
            }, x.createElement("stop", {
                stopColor: "#16A367"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#139C63",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q3Release_svg__paint18_radial_16146_261067",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "rotate(-50.256 65.494 -19.827) scale(15.3518 8.85169)"
            }, x.createElement("stop", {
                stopColor: "#6E85AF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#6E85AF",
                stopOpacity: 0
            })), x.createElement("radialGradient", {
                id: "Q3Release_svg__paint31_radial_16146_261067",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(0 45 -45 0 60 60)"
            }, x.createElement("stop", {
                stopColor: "#fff"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
            })), x.createElement("filter", {
                id: "Q3Release_svg__filter0_f_16146_261067",
                x: 31.191,
                y: 50.66,
                width: 48.352,
                height: 49.602,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: 1,
                result: "effect1_foregroundBlur_16146_261067"
            })), x.createElement("filter", {
                id: "Q3Release_svg__filter1_f_16146_261067",
                x: 25.807,
                y: 30.199,
                width: 60.355,
                height: 26.883,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .5,
                result: "effect1_foregroundBlur_16146_261067"
            })), x.createElement("filter", {
                id: "Q3Release_svg__filter2_b_16146_261067",
                x: 69.564,
                y: 64.809,
                width: 37.787,
                height: 33.301,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feGaussianBlur", {
                in: "BackgroundImage",
                stdDeviation: 1.5
            }), x.createElement("feComposite", {
                in2: "SourceAlpha",
                operator: "in",
                result: "effect1_backgroundBlur_16146_261067"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect1_backgroundBlur_16146_261067",
                result: "shape"
            })), x.createElement("filter", {
                id: "Q3Release_svg__filter3_f_16146_261067",
                x: 71.563,
                y: 66.809,
                width: 33.787,
                height: 21.125,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .5,
                result: "effect1_foregroundBlur_16146_261067"
            })), x.createElement("filter", {
                id: "Q3Release_svg__filter4_f_16146_261067",
                x: 14.842,
                y: 21.445,
                width: 48.143,
                height: 44.375,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: 5,
                result: "effect1_foregroundBlur_16146_261067"
            })), x.createElement("filter", {
                id: "Q3Release_svg__filter5_b_16146_261067",
                x: 9.746,
                y: 9.902,
                width: 42.332,
                height: 37.465,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feGaussianBlur", {
                in: "BackgroundImage",
                stdDeviation: 1.5
            }), x.createElement("feComposite", {
                in2: "SourceAlpha",
                operator: "in",
                result: "effect1_backgroundBlur_16146_261067"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect1_backgroundBlur_16146_261067",
                result: "shape"
            })), x.createElement("filter", {
                id: "Q3Release_svg__filter6_f_16146_261067",
                x: 11.746,
                y: 11.902,
                width: 38.332,
                height: 25.844,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .5,
                result: "effect1_foregroundBlur_16146_261067"
            })), x.createElement("clipPath", {
                id: "Q3Release_svg__clip0_16146_261067"
            }, x.createElement("path", {
                fill: "#fff",
                d: "M0 0h120v120H0z"
            })))))
        }
        var Ur, Tr, Lr, qr, Nr, Qr, Hr, Dr, Pr, Gr, Zr, Wr, Xr, Kr, Yr, $r, eo, to, no, io, ao, lo, ro, oo, so, co, po, mo, fo, uo, go, ho, xo, vo, _o, Co, Eo, wo, yo, ko, So, Ao, bo, Ro, jo;
        function Io() {
            return (Io = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Bo(e) {
            return x.createElement("svg", Io({
                width: 120,
                height: 120,
                viewBox: "0 0 120 120",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Ur || (Ur = x.createElement("path", {
                d: "M48.849 50.51l11.467 6.62c2.481 1.433 4.86 1.668 6.614.656l.779-.45-.984-6.477c-.347-.753-.534-1.526-.534-2.21v-1.897c0-.596.142-1.098.411-1.451l3.207-6.835c.42-.55.258-1.673-.375-2.612-.537-.796-1.284-1.261-1.852-1.155l-6.716 1.255c-.46.086-.998-.038-1.549-.355l-7.053-4.073c-1.55-.894-2.806-3.07-2.806-4.86v-.705l-.677.392c-1.753 1.013-2.738 3.19-2.738 6.053V45.65c0 1.79 1.256 3.965 2.806 4.86z",
                fill: "url(#Q4Release_svg__paint0_linear_16146_261008)"
            })), Tr || (Tr = x.createElement("path", {
                d: "M78.465 25.698l-11.468-6.62c-1.55-.895-4.062-.895-5.611 0L48.85 26.314c-1.55.895-1.55 2.345 0 3.24l12.536 7.238c1.55.894 4.062.894 5.611 0l8.71-5.029c1.782-1.029 4.751-.85 6.128.368l.504.446v-1.48c0-2.025-1.393-3.968-3.874-5.4z",
                fill: "url(#Q4Release_svg__paint1_linear_16146_261008)"
            })), Lr || (Lr = x.createElement("path", {
                d: "M64.203 41.649c0-1.79 1.256-3.965 2.806-4.86l12.536-7.238c1.55-.894 2.806-.17 2.806 1.62v14.476c0 1.789-1.256 3.965-2.806 4.86l-12.536 7.237c-1.55.895-2.806.17-2.806-1.62V41.65z",
                fill: "url(#Q4Release_svg__paint2_linear_16146_261008)"
            })), qr || (qr = x.createElement("path", {
                d: "M17.526 98.076l11.468 6.621c2.48 1.432 4.86 1.668 6.614.655l.779-.45-.984-6.476c-.348-.754-.535-1.527-.535-2.21v-1.897c0-.596.143-1.099.412-1.452l3.207-6.834c.42-.551.258-1.674-.375-2.613-.538-.796-1.284-1.26-1.853-1.154l-6.715 1.255c-.46.086-.998-.038-1.55-.356l-7.052-4.072c-1.55-.895-2.806-3.07-2.806-4.86v-.706l-.678.392c-1.753 1.013-2.737 3.19-2.737 6.054v13.243c0 1.79 1.256 3.966 2.805 4.86z",
                fill: "url(#Q4Release_svg__paint3_linear_16146_261008)"
            })), Nr || (Nr = x.createElement("path", {
                d: "M47.143 73.265l-11.468-6.621c-1.55-.895-4.062-.895-5.611 0L17.526 73.88c-1.55.895-1.55 2.346 0 3.24l12.537 7.238c1.55.895 4.062.895 5.611 0l8.71-5.028c1.781-1.03 4.75-.85 6.128.367l.504.446v-1.48c0-2.025-1.393-3.967-3.874-5.4z",
                fill: "url(#Q4Release_svg__paint4_linear_16146_261008)"
            })), Qr || (Qr = x.createElement("path", {
                d: "M32.88 89.215c0-1.79 1.257-3.965 2.807-4.86l12.536-7.237c1.55-.895 2.806-.17 2.806 1.62v14.475c0 1.79-1.257 3.965-2.806 4.86l-12.536 7.238c-1.55.894-2.806.169-2.806-1.62V89.215z",
                fill: "url(#Q4Release_svg__paint5_linear_16146_261008)"
            })), Hr || (Hr = x.createElement("path", {
                d: "M99.803 91.95l-1.33 2.305c-.288.498-.335.976-.132 1.329l.09.156 1.302-.197c.152-.07.307-.108.444-.108h.381a.48.48 0 01.292.083l1.373.644c.111.085.337.052.525-.075.16-.108.254-.258.232-.372l-.252-1.35a.465.465 0 01.072-.31l.818-1.418c.18-.312.617-.564.977-.564h.141l-.078-.136c-.204-.352-.641-.55-1.217-.55h-2.661c-.36 0-.797.252-.977.564z",
                fill: "url(#Q4Release_svg__paint6_linear_16146_261008)"
            })), Dr || (Dr = x.createElement("path", {
                d: "M104.789 97.9l1.33-2.305c.18-.311.18-.816 0-1.128l-1.454-2.519c-.18-.311-.472-.311-.651 0l-1.455 2.52c-.179.31-.179.816 0 1.127l1.011 1.75c.206.358.171.955-.074 1.232l-.09.1h.298c.407 0 .797-.28 1.085-.778z",
                fill: "url(#Q4Release_svg__paint7_linear_16146_261008)"
            })), Pr || (Pr = x.createElement("path", {
                d: "M101.584 95.035c.359 0 .797.253.976.564l1.455 2.519c.18.311.034.564-.326.564h-2.908c-.36 0-.797-.253-.977-.564l-1.454-2.519c-.18-.311-.034-.564.325-.564h2.909z",
                fill: "url(#Q4Release_svg__paint8_linear_16146_261008)"
            })), Gr || (Gr = x.createElement("path", {
                d: "M31.68 70.967l11.468 6.62c2.481 1.433 4.86 1.668 6.614.656l.779-.45-.984-6.477c-.347-.753-.534-1.526-.534-2.21V67.21c0-.597.142-1.099.411-1.452l3.207-6.835c.42-.55.258-1.673-.375-2.612-.537-.796-1.283-1.261-1.852-1.155l-6.716 1.255c-.46.086-.998-.038-1.549-.355l-7.053-4.073c-1.55-.894-2.806-3.07-2.806-4.86v-.705l-.677.392c-1.753 1.013-2.738 3.19-2.738 6.053v13.244c0 1.79 1.256 3.965 2.806 4.86z",
                fill: "url(#Q4Release_svg__paint9_linear_16146_261008)"
            })), Zr || (Zr = x.createElement("path", {
                d: "M61.297 46.155l-11.467-6.62c-1.55-.895-4.063-.895-5.612 0l-12.536 7.237c-1.55.895-1.55 2.345 0 3.24l12.536 7.238c1.55.894 4.062.894 5.611 0l8.71-5.029c1.782-1.028 4.751-.85 6.128.368l.504.446v-1.48c0-2.025-1.393-3.968-3.874-5.4z",
                fill: "url(#Q4Release_svg__paint10_linear_16146_261008)"
            })), Wr || (Wr = x.createElement("path", {
                d: "M47.035 62.106c0-1.79 1.256-3.965 2.806-4.86l12.536-7.238c1.55-.895 2.806-.17 2.806 1.62v14.476c0 1.789-1.256 3.965-2.806 4.86L49.841 78.2c-1.55.895-2.806.17-2.806-1.62V62.106z",
                fill: "url(#Q4Release_svg__paint11_linear_16146_261008)"
            })), Xr || (Xr = x.createElement("path", {
                d: "M57.966 97.65l11.468 6.621c2.48 1.433 4.86 1.668 6.613.655l.78-.449L75.841 98c-.347-.754-.534-1.527-.534-2.21v-1.897c0-.596.142-1.098.411-1.451l3.207-6.835c.42-.55.259-1.674-.375-2.612-.537-.796-1.283-1.262-1.852-1.155l-6.716 1.255c-.46.086-.998-.038-1.549-.356l-7.053-4.072c-1.55-.895-2.806-3.07-2.806-4.86v-.705l-.677.391c-1.753 1.013-2.738 3.19-2.738 6.054v13.244c0 1.789 1.256 3.965 2.806 4.86z",
                fill: "url(#Q4Release_svg__paint12_linear_16146_261008)"
            })), Kr || (Kr = x.createElement("path", {
                d: "M87.582 72.839l-11.467-6.621c-1.55-.895-4.062-.895-5.612 0l-12.536 7.238c-1.55.894-1.55 2.345 0 3.24l12.536 7.237c1.55.895 4.062.895 5.612 0l8.709-5.028c1.782-1.029 4.751-.85 6.129.367l.504.446v-1.48c0-2.025-1.394-3.967-3.874-5.4z",
                fill: "url(#Q4Release_svg__paint13_linear_16146_261008)"
            })), Yr || (Yr = x.createElement("path", {
                d: "M73.32 88.79c0-1.79 1.257-3.966 2.806-4.86l12.536-7.238c1.55-.895 2.806-.17 2.806 1.62v14.475c0 1.79-1.256 3.965-2.806 4.86l-12.536 7.238c-1.55.894-2.806.169-2.806-1.62V88.789z",
                fill: "url(#Q4Release_svg__paint14_linear_16146_261008)"
            })), $r || ($r = x.createElement("path", {
                d: "M14.109 21.094h3.972c.86 0 1.513-.296 1.817-.822l.135-.234-1.228-1.535a1.625 1.625 0 01-.47-.494l-.284-.493a.715.715 0 01-.111-.438l-.192-2.257c.026-.206-.184-.474-.49-.623-.258-.126-.522-.135-.654-.022l-1.556 1.334c-.107.09-.265.14-.456.14h-2.444c-.537 0-1.19-.377-1.458-.842l-.105-.184-.118.204c-.303.526-.232 1.24.197 1.983l1.987 3.441c.268.465.92.842 1.458.842z",
                fill: "url(#Q4Release_svg__paint15_linear_16146_261008)"
            })), eo || (eo = x.createElement("path", {
                d: "M18.082 10.207H14.11c-.537 0-1.19.377-1.458.842L10.48 14.81c-.269.465-.051.842.486.842h4.342c.537 0 1.19-.377 1.458-.842l1.509-2.613c.308-.534 1.107-.933 1.647-.823l.198.04-.222-.385c-.304-.526-.957-.822-1.817-.822z",
                fill: "url(#Q4Release_svg__paint16_linear_16146_261008)"
            })), to || (to = x.createElement("path", {
                d: "M16.769 16.493c-.269-.465-.269-1.219 0-1.684l2.171-3.76c.268-.466.704-.466.972 0l2.171 3.76c.269.465.269 1.219 0 1.684l-2.171 3.76c-.268.465-.704.465-.972 0l-2.171-3.76z",
                fill: "url(#Q4Release_svg__paint17_linear_16146_261008)"
            })), no || (no = x.createElement("path", {
                d: "M76.11 66.275l11.468 6.621c2.48 1.433 4.86 1.668 6.614.655l.779-.45-.984-6.476c-.348-.754-.535-1.527-.535-2.21v-1.897c0-.596.143-1.098.412-1.452l3.207-6.834c.42-.55.258-1.674-.375-2.612-.537-.796-1.284-1.262-1.853-1.155l-6.716 1.255c-.459.086-.997-.038-1.548-.356l-7.053-4.072c-1.55-.895-2.806-3.07-2.806-4.86v-.705l-.678.391c-1.753 1.013-2.737 3.19-2.737 6.054v13.244c0 1.789 1.256 3.965 2.805 4.86z",
                fill: "url(#Q4Release_svg__paint18_linear_16146_261008)"
            })), io || (io = x.createElement("path", {
                d: "M105.727 41.464l-11.468-6.621c-1.55-.895-4.062-.895-5.612 0L76.111 42.08c-1.55.894-1.55 2.345 0 3.24l12.536 7.237c1.55.895 4.063.895 5.612 0l8.71-5.028c1.781-1.029 4.751-.85 6.128.367l.504.446v-1.48c0-2.025-1.393-3.967-3.874-5.4z",
                fill: "url(#Q4Release_svg__paint19_linear_16146_261008)"
            })), ao || (ao = x.createElement("path", {
                d: "M91.465 57.414c0-1.789 1.256-3.965 2.806-4.86l12.536-7.237c1.549-.895 2.806-.17 2.806 1.62v14.475c0 1.79-1.257 3.965-2.806 4.86L94.271 73.51c-1.55.894-2.806.17-2.806-1.62V57.414z",
                fill: "url(#Q4Release_svg__paint20_linear_16146_261008)"
            })), lo || (lo = x.createElement("path", {
                d: "M66.503 78.746l4.332 2.5c.937.541 1.836.63 2.498.248l.294-.17-.371-2.446a2.046 2.046 0 01-.202-.835v-.717c0-.225.054-.414.155-.548l1.212-2.582c.158-.208.097-.632-.142-.986-.203-.301-.485-.477-.7-.437l-2.537.475c-.173.032-.377-.015-.585-.135l-2.664-1.538c-.585-.338-1.06-1.16-1.06-1.836v-.266l-.256.148c-.662.382-1.034 1.205-1.034 2.286v5.003c0 .676.475 1.498 1.06 1.836z",
                fill: "url(#Q4Release_svg__paint21_linear_16146_261008)"
            })), ro || (ro = x.createElement("path", {
                d: "M77.69 69.372L73.36 66.87c-.586-.338-1.535-.338-2.12 0l-4.736 2.734c-.585.337-.585.885 0 1.223l4.736 2.734c.585.338 1.534.338 2.12 0l3.29-1.9c.672-.388 1.794-.32 2.314.14l.19.168v-.559c0-.765-.526-1.498-1.463-2.04z",
                fill: "url(#Q4Release_svg__paint22_linear_16146_261008)"
            })), oo || (oo = x.createElement("path", {
                d: "M72.303 75.398c0-.676.474-1.498 1.06-1.836l4.735-2.734c.585-.338 1.06-.064 1.06.612v5.468c0 .676-.475 1.498-1.06 1.836l-4.735 2.734c-.586.338-1.06.064-1.06-.612v-5.468z",
                fill: "url(#Q4Release_svg__paint23_linear_16146_261008)"
            })), so || (so = x.createElement("path", {
                d: "M86.454 41.227V50.2c0 1.061-.385 1.785-1.013 2.123l-8.684 5.018c.627-.338.965-1.062.965-2.123v-8.974c0-2.268-1.69-5.018-3.667-5.887l-.58-.29-10.47-4.776c-2.026-.917-4.052-2.123-6.078-3.522L45.78 24.002c-.965-.675-1.93-.82-2.605-.53.482-.29 8.54-4.922 8.54-4.922l.193-.097c.53-.24 1.315-.29 2.087.096C63.598 32.975 82.16 35.05 82.16 35.05l.676.29c1.93.868 3.618 3.618 3.618 5.886z",
                fill: "#ACBCDD"
            })), co || (co = x.createElement("path", {
                d: "M86.458 42.191v7.961c0 1.062-.386 1.786-1.013 2.123l-8.685 5.018c.627-.338.965-1.061.965-2.123v-7.864l8.733-5.115z",
                fill: "#333"
            })), po || (po = x.createElement("path", {
                d: "M86.457 41.224v1.013l-8.733 5.066v-1.061c0-2.268-1.688-5.018-3.666-5.886l-.58-.29L82.163 35l.676.29c1.93.916 3.618 3.666 3.618 5.934z",
                fill: "#9CB0D7"
            })), mo || (mo = x.createElement("path", {
                d: "M77.724 46.247v8.975c0 1.061-.386 1.785-.965 2.122-.53.29-1.206.29-1.978-.048L62.96 51.941c-2.026-.917-4.053-2.123-6.08-3.523L45.06 40.12c-1.689-1.158-2.992-3.57-2.992-5.5v-8.975c0-1.11.386-1.833 1.062-2.17.675-.339 1.592-.194 2.605.53l11.097 7.768c2.027 1.4 4.053 2.605 6.08 3.522l11.097 5.066c2.026.869 3.715 3.619 3.715 5.886z",
                fill: "#E8E0DD"
            })), fo || (fo = x.createElement("path", {
                d: "M86.46 42.527v9.94c0 1.157-.435 1.977-1.11 2.363L75.7 60.38c.676-.386 1.062-1.206 1.062-2.364v-9.891c0-2.509-1.882-5.549-4.101-6.562l-.628-.338-11.627-5.307a38.72 38.72 0 01-6.755-3.908l-12.352-8.588c-1.11-.772-2.123-.917-2.895-.58.58-.337 9.505-5.451 9.505-5.5l.193-.096c.441-.204.954-.24 1.522-.093.507.132.898.521 1.198.95 10.783 15.461 30.861 17.526 30.861 17.526l.724.337c2.17 1.013 4.053 4.053 4.053 6.562z",
                fill: "url(#Q4Release_svg__paint24_linear_16146_261008)"
            })), uo || (uo = x.createElement("path", {
                opacity: .3,
                d: "M86.46 43.637v8.83c0 1.157-.434 1.977-1.11 2.363l-9.649 5.549c.676-.386 1.062-1.206 1.062-2.364v-8.733l9.698-5.645z",
                fill: "#7890BE"
            })), go || (go = x.createElement("path", {
                opacity: .3,
                d: "M86.457 42.52v1.11l-9.65 5.645v-1.158c0-2.508-1.88-5.548-4.1-6.561l-.676-.338 9.65-5.597.724.338c2.17 1.013 4.052 4.053 4.052 6.562z",
                fill: "#F1F6FF"
            })), ho || (ho = x.createElement("path", {
                d: "M76.806 48.126v9.939c0 1.158-.434 1.978-1.062 2.364-.579.338-1.35.338-2.22-.048l-13.123-5.983a38.718 38.718 0 01-6.754-3.908l-13.124-9.168c-1.882-1.302-3.28-3.956-3.28-6.127v-9.94c0-1.205.433-2.074 1.157-2.412.772-.337 1.785-.193 2.895.58l12.303 8.636c2.268 1.592 4.536 2.895 6.755 3.908l12.303 5.597c2.22.965 4.15 4.053 4.15 6.562z",
                fill: "#E8E0DD"
            })), xo || (xo = x.createElement("path", {
                d: "M76.808 48.124v9.94c0 1.157-.434 1.977-1.11 2.364l-5.21 2.943c.675-.386 1.06-1.207 1.06-2.364v-9.891c0-2.51-1.88-5.549-4.1-6.562l-.676-.29-11.628-5.307a38.721 38.721 0 01-6.754-3.908l-12.304-8.637c-1.11-.771-2.123-.916-2.895-.579.58-.337 5.018-2.846 5.018-2.846l.193-.097c.724-.337 1.785-.193 2.847.58l12.303 8.636c2.268 1.592 4.535 2.895 6.755 3.908l11.58 5.259.723.338c2.268.916 4.198 4.004 4.198 6.513z",
                fill: "url(#Q4Release_svg__paint25_linear_16146_261008)"
            })), vo || (vo = x.createElement("path", {
                opacity: .4,
                d: "M76.809 49.227v8.829c0 1.158-.434 1.978-1.11 2.364l-5.21 2.943c.675-.386 1.06-1.206 1.06-2.364v-8.733l5.26-3.04z",
                fill: "#CD3B81"
            })), _o || (_o = x.createElement("path", {
                opacity: .6,
                d: "M76.807 48.12v1.11l-5.259 3.04v-1.158c0-2.509-1.882-5.548-4.101-6.562l-.675-.29 5.162-2.99.724.337c2.22.917 4.15 4.005 4.15 6.514z",
                fill: "#FFA8D2"
            })), Co || (Co = x.createElement("g", {
                filter: "url(#Q4Release_svg__filter0_b_16146_261008)"
            }, x.createElement("path", {
                d: "M71.548 51.112v9.939c0 1.158-.434 1.978-1.061 2.364-.58.338-1.351.338-2.22-.048l-13.123-5.983a38.718 38.718 0 01-6.755-3.908l-13.124-9.167c-1.881-1.303-3.28-3.956-3.28-6.128v-9.939c0-1.206.434-2.075 1.157-2.412.772-.386 1.834-.193 2.944.579l12.303 8.636c2.267 1.592 4.535 2.895 6.755 3.908l12.303 5.597c2.22.965 4.101 4.005 4.101 6.562z",
                fill: "url(#Q4Release_svg__paint26_linear_16146_261008)",
                fillOpacity: .6
            }))), Eo || (Eo = x.createElement("g", {
                opacity: .7,
                filter: "url(#Q4Release_svg__filter1_f_16146_261008)"
            }, x.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M32.7 41.13a6.001 6.001 0 01-.152-1.3v-9.858c0-1.197.43-2.058 1.149-2.393.765-.383 1.818-.191 2.919.574l12.203 8.566c2.249 1.58 4.498 2.872 6.7 3.877l12.202 5.55c1.73.752 3.252 2.774 3.825 4.836-.062-2.53-1.917-5.483-4.1-6.432l-12.302-5.597c-2.22-1.013-4.487-2.316-6.755-3.908L36.086 26.41c-1.11-.772-2.172-.965-2.944-.58-.723.338-1.158 1.207-1.158 2.413v9.94c0 .941.264 1.974.716 2.948z",
                fill: "url(#Q4Release_svg__paint27_linear_16146_261008)"
            }))), wo || (wo = x.createElement("path", {
                d: "M99.583 24.72c.917 1.159 1.544 2.413 1.882 3.716l.434-2.799.338-1.061c-.338-3.136-2.075-5.838-5.115-8.202-1.64-1.255-3.667-2.413-6.079-3.426-15.729-6.658-28.804-.82-37.055 5.742.048.048.097.048.145.096.096.097.193.241.29.386.675 1.013 1.447 1.93 2.219 2.847 3.86-2.268 8.83-4.005 8.83-4.005 7.14-2.653 15.825-3.377 25.523.724 1.93.82 3.618 1.737 5.018 2.702 1.447 1.013 2.653 2.123 3.57 3.28z",
                fill: "url(#Q4Release_svg__paint28_linear_16146_261008)"
            })), yo || (yo = x.createElement("path", {
                d: "M102.283 25.297V30.7c0 10.663-15.295 21.422-15.97 21.904v-5.017l4.052-3.715 6.61-6.61 2.461-3.62 2.075-4.149.337-1.785.435-2.412z",
                fill: "url(#Q4Release_svg__paint29_linear_16146_261008)"
            })), ko || (ko = x.createElement("path", {
                d: "M102.283 25.779V25.344c0-.289 0-.53-.049-.771-.289-2.847-1.785-5.404-4.39-7.624l-.145-.144c-.724-.628-1.544-1.158-2.46-1.737a33.563 33.563 0 00-3.233-1.689c-.29-.145-.628-.29-.965-.434-15.73-6.658-28.805-.82-37.248 5.597.048.048.096.048.145.096.096.097.193.241.29.386.192-.145.433-.29.626-.434 8.3-6.08 20.892-11.387 35.897-5.114l1.013.434c2.123.965 3.909 2.074 5.356 3.232 2.654 2.172 4.149 4.68 4.439 7.43a8.22 8.22 0 010 2.172c-.048.338-.097.627-.145.965l-.096.482c-1.062 4.536-4.584 9.023-8.01 12.448a63.994 63.994 0 01-1.881 1.785 57.318 57.318 0 01-4.97 4.15l-.579.386.386.579.58-.386a61.219 61.219 0 004.727-3.86 60.84 60.84 0 001.882-1.785c3.233-3.185 6.658-7.334 8.106-11.676.145-.531.338-1.062.434-1.593.193-.82.29-1.64.29-2.46z",
                fill: "url(#Q4Release_svg__paint30_linear_16146_261008)"
            })), So || (So = x.createElement("path", {
                d: "M84.574 47.532l.869.483 1.544-.917-.869-.434-1.544.868z",
                fill: "#BFD1F5"
            })), Ao || (Ao = x.createElement("path", {
                d: "M85.445 48.01v5.067l1.544-.917v-5.066l-1.544.916z",
                fill: "#8AA2D2"
            })), bo || (bo = x.createElement("path", {
                d: "M85.443 48.014v5.066l-.82-.434-.049-.049v-5.066l.869.483z",
                fill: "#738BBC"
            })), Ro || (Ro = x.createElement("circle", {
                opacity: .3,
                cx: 60,
                cy: 60,
                r: 45,
                fill: "url(#Q4Release_svg__paint31_radial_16146_261008)"
            })), jo || (jo = x.createElement("defs", null, x.createElement("linearGradient", {
                id: "Q4Release_svg__paint0_linear_16146_261008",
                x1: 57.389,
                y1: 62.745,
                x2: 57.123,
                y2: 35.948,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EFF4FF"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint1_linear_16146_261008",
                x1: 76.2,
                y1: 19.09,
                x2: 57.212,
                y2: 30.181,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint2_linear_16146_261008",
                x1: 67.948,
                y1: 46.951,
                x2: 87.824,
                y2: 52.63,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint3_linear_16146_261008",
                x1: 26.067,
                y1: 110.311,
                x2: 25.801,
                y2: 83.515,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#FF93C7"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FFCEE5"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint4_linear_16146_261008",
                x1: 44.878,
                y1: 66.656,
                x2: 25.89,
                y2: 77.747,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E65FA0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FF96C8"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint5_linear_16146_261008",
                x1: 36.626,
                y1: 94.517,
                x2: 56.502,
                y2: 100.196,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E65FA0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FF93C7"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint6_linear_16146_261008",
                x1: 97.345,
                y1: 93.667,
                x2: 102.729,
                y2: 93.613,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#FF93C7"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FFCEE5"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint7_linear_16146_261008",
                x1: 106.117,
                y1: 97.444,
                x2: 103.888,
                y2: 93.629,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E65FA0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FF96C8"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint8_linear_16146_261008",
                x1: 100.518,
                y1: 95.788,
                x2: 99.377,
                y2: 99.781,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E65FA0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FF93C7"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint9_linear_16146_261008",
                x1: 40.221,
                y1: 83.202,
                x2: 39.955,
                y2: 56.405,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EFF4FF"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint10_linear_16146_261008",
                x1: 59.032,
                y1: 39.547,
                x2: 40.044,
                y2: 50.638,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint11_linear_16146_261008",
                x1: 50.78,
                y1: 67.408,
                x2: 70.656,
                y2: 73.087,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint12_linear_16146_261008",
                x1: 66.507,
                y1: 109.885,
                x2: 66.24,
                y2: 83.089,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EFF4FF"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint13_linear_16146_261008",
                x1: 85.317,
                y1: 66.23,
                x2: 66.329,
                y2: 77.322,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint14_linear_16146_261008",
                x1: 77.065,
                y1: 94.091,
                x2: 96.941,
                y2: 99.77,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint15_linear_16146_261008",
                x1: 18.163,
                y1: 22.992,
                x2: 14.074,
                y2: 16.07,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EFF4FF"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint16_linear_16146_261008",
                x1: 16.503,
                y1: 8.83,
                x2: 13.233,
                y2: 14.56,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint17_linear_16146_261008",
                x1: 18.537,
                y1: 17.308,
                x2: 24.553,
                y2: 15.803,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint18_linear_16146_261008",
                x1: 84.651,
                y1: 78.51,
                x2: 84.385,
                y2: 51.714,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EFF4FF"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint19_linear_16146_261008",
                x1: 103.462,
                y1: 34.855,
                x2: 84.474,
                y2: 45.947,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint20_linear_16146_261008",
                x1: 95.21,
                y1: 62.717,
                x2: 115.085,
                y2: 68.395,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint21_linear_16146_261008",
                x1: 69.729,
                y1: 83.367,
                x2: 69.629,
                y2: 73.245,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#FF93C7"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FFCEE5"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint22_linear_16146_261008",
                x1: 76.835,
                y1: 66.875,
                x2: 69.662,
                y2: 71.065,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E65FA0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FF96C8"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint23_linear_16146_261008",
                x1: 73.717,
                y1: 77.401,
                x2: 81.225,
                y2: 79.546,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E65FA0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FF93C7"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint24_linear_16146_261008",
                x1: 80.219,
                y1: 58.226,
                x2: 54.678,
                y2: 31.21,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint25_linear_16146_261008",
                x1: 39.233,
                y1: 25.019,
                x2: 65.674,
                y2: 44.37,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#E65FA0"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FF7ABA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint26_linear_16146_261008",
                x1: 27.563,
                y1: 34.843,
                x2: 45.215,
                y2: 51.904,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#F979B7"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FFB0D6"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint27_linear_16146_261008",
                x1: 34.551,
                y1: 26.723,
                x2: 60.055,
                y2: 49.972,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#FFE0EF"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#FFE0EF",
                stopOpacity: 0
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint28_linear_16146_261008",
                x1: 75.278,
                y1: 15.472,
                x2: 86.073,
                y2: 48.62,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint29_linear_16146_261008",
                x1: 90.326,
                y1: 44.586,
                x2: 106.023,
                y2: 26.324,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#B9C7E4"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#DAE5FA"
            })), x.createElement("linearGradient", {
                id: "Q4Release_svg__paint30_linear_16146_261008",
                x1: 76.718,
                y1: 52.56,
                x2: 86.838,
                y2: 37.607,
                gradientUnits: "userSpaceOnUse"
            }, x.createElement("stop", {
                stopColor: "#A3B7DE"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#EFF4FF"
            })), x.createElement("filter", {
                id: "Q4Release_svg__filter0_b_16146_261008",
                x: 26.984,
                y: 20.637,
                width: 49.565,
                height: 48.027,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feGaussianBlur", {
                in: "BackgroundImage",
                stdDeviation: 2.5
            }), x.createElement("feComposite", {
                in2: "SourceAlpha",
                operator: "in",
                result: "effect1_backgroundBlur_16146_261008"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect1_backgroundBlur_16146_261008",
                result: "shape"
            })), x.createElement("filter", {
                id: "Q4Release_svg__filter1_f_16146_261008",
                x: 30.984,
                y: 24.637,
                width: 41.563,
                height: 27.344,
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB"
            }, x.createElement("feFlood", {
                floodOpacity: 0,
                result: "BackgroundImageFix"
            }), x.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "BackgroundImageFix",
                result: "shape"
            }), x.createElement("feGaussianBlur", {
                stdDeviation: .5,
                result: "effect1_foregroundBlur_16146_261008"
            })), x.createElement("radialGradient", {
                id: "Q4Release_svg__paint31_radial_16146_261008",
                cx: 0,
                cy: 0,
                r: 1,
                gradientUnits: "userSpaceOnUse",
                gradientTransform: "matrix(0 45 -45 0 60 60)"
            }, x.createElement("stop", {
                stopColor: "#fff"
            }), x.createElement("stop", {
                offset: 1,
                stopColor: "#fff",
                stopOpacity: 0
            })))))
        }
        var Jo, Oo, Fo = f.default.div.withConfig({
            displayName: "RoadMapstyled__RoadMapWrapper",
            componentId: "sc-oqfqrv-0"
        })(["position:relative;max-width:1200px;width:100%;margin:0 auto;@media ", "{padding:0 32px;}@media ", "{padding:0 24px;}@media ", "{padding:0 12px;}@media ", "{padding:0 11px;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm), E.mq.down(500)), Mo = f.default.div.withConfig({
            displayName: "RoadMapstyled__RoadMapContainer",
            componentId: "sc-oqfqrv-1"
        })(["position:relative;background-color:#0b1359;overflow:hidden;padding:96px 48px;border-radius:32px;&:before,&:after{content:'';position:absolute;display:block;width:100%;height:100%;}&:before{background-image:radial-gradient(50% 50% at 50% 50%,#29d98f 0%,rgba(41,217,143,0) 100%);opacity:0.7;top:-50%;left:-50%;filter:blur(120px);}&:after{background-image:radial-gradient(50% 50% at 50% 50%,#6c5dd3 0%,rgba(108,93,211,0) 100%);filter:blur(120px);top:-50%;left:50%;}@media ", "{padding:80px 48px;}@media ", "{padding:64px 32px;}@media ", "{padding:36px 24px;&:before{top:-60%;}}"], E.mq.down(E.AV.md), E.mq.down(E.AV.sm), E.mq.down(500)), zo = f.default.div.withConfig({
            displayName: "RoadMapstyled__BgTwo",
            componentId: "sc-oqfqrv-2"
        })(["position:absolute;background-color:#6c5dd3;width:96%;height:30px;border-radius:120px;bottom:-7px;left:50%;transform:translateX(-50%);@media ", "{width:90%;}@media ", "{width:80%;}@media ", "{width:80%;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(500)), Vo = f.default.div.withConfig({
            displayName: "RoadMapstyled__Header",
            componentId: "sc-oqfqrv-3"
        })(["position:relative;z-index:2;padding-right:120px;margin-bottom:69px;&:after{content:'';display:block;position:absolute;width:120px;height:40px;background-repeat:no-repeat;background-position:center;border:1px solid rgba(255,255,255,0.2);border-radius:30px;background-image:url(\"data:image/svg+xml,%3Csvg width='82' height='18' viewBox='0 0 82 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.01425 8.2313C0.910704 5.72136 1.32486 0.762944 3.80986 1.00882C6.91612 1.31616 12.5074 16.5295 16.3902 16.9905C20.273 17.4515 14.9923 1.00882 19.3411 1.00882C23.6898 1.00882 27.8833 16.9905 32.232 16.9905C36.5807 16.9905 30.8342 1.00882 34.717 1.00882C38.5998 1.00882 44.191 16.9905 47.4526 16.9905C50.7141 16.9905 46.5207 1.93083 50.4035 1.93083C54.2863 1.93083 57.5479 16.9905 63.1391 16.9905C68.7303 16.9905 60.4988 2.85284 65.3135 1.93083C70.1282 1.00882 72.6131 16.9905 77.8938 16.9905C83.1744 16.9905 76.8066 1.93083 81 1.93083' stroke='url(%23paint0_linear_15635_260637)' stroke-width='2'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_15635_260637' x1='1' y1='17' x2='81' y2='17' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%236C5DD3'/%3E%3Cstop offset='1' stop-color='%23E65FA0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A\");right:0;top:50%;transform:translateY(-50%);}"]), Uo = f.default.h3.withConfig({
            displayName: "RoadMapstyled__Title",
            componentId: "sc-oqfqrv-4"
        })(["", " ", " @media ", "{", "}@media ", "{", "}@media ", "{", "}"], E.cp.yK.demiBold, (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.default)
        }
        ), E.mq.down(E.AV.md), E.cp.R0.demiBold, E.mq.down(E.AV.sm), E.cp.AO.demiBold, E.mq.down(500), E.cp.$z.demiBold), To = f.default.ul.withConfig({
            displayName: "RoadMapstyled__MonthList",
            componentId: "sc-oqfqrv-5"
        })(["list-style:none;display:flex;", " @media ", "{flex-direction:column;}"], (function(e) {
            var t = e.theme;
            return (0,
            f.css)(["color:", ";"], t.colors.default)
        }
        ), E.mq.down(500)), Lo = f.default.li.withConfig({
            displayName: "RoadMapstyled__MonthItem",
            componentId: "sc-oqfqrv-6"
        })(["width:calc(33.333333333% - 11px);border-top:1px solid #ffffff14;padding-top:29px;position:relative;margin-left:11px;padding:133px 23px 0 152px;&:before{content:'';display:block;position:absolute;top:-5px;left:-12px;width:11px;height:11px;background-image:url('/icons/dot-icon.svg');background-repeat:no-repeat;background-position:center;}@media ", "{padding:245px 0 0 0;}@media ", "{width:100%;margin:0;border-top:none;border-left:1px solid #ffffff14;padding-left:35px;padding-bottom:20px;margin-bottom:11px;padding-top:165px;&:before{top:-10px;left:-6px;}}&:last-child{border:none;}"], E.mq.down(E.AV.lg), E.mq.down(500)), qo = f.default.div.withConfig({
            displayName: "RoadMapstyled__MonthHeader",
            componentId: "sc-oqfqrv-7"
        })(["position:absolute;left:0;top:29px;margin-left:-11px;display:flex;flex-direction:column;align-items:flex-start;& .icon{width:120px;height:120px;}@media ", "{margin-left:0;top:-19px;left:10px;}"], E.mq.down(500)), No = f.default.div.withConfig({
            displayName: "RoadMapstyled__MonthName",
            componentId: "sc-oqfqrv-8"
        })(["", " @media ", "{", "}@media ", "{display:flex;margin-bottom:18px;}"], E.cp.$z.demiBold, E.mq.down(500), E.cp.KG.demiBold, E.mq.down(500)), Qo = f.default.div.withConfig({
            displayName: "RoadMapstyled__MonthYear",
            componentId: "sc-oqfqrv-9"
        })(["margin-bottom:18px;color:rgba(255,255,255,0.4);", " @media ", "{margin-bottom:0;margin-left:8px;margin-top:10px;}"], E.cp.lA.demiBold, E.mq.down(500)), Ho = f.default.ul.withConfig({
            displayName: "RoadMapstyled__EventsList",
            componentId: "sc-oqfqrv-10"
        })(["margin:0;padding:0;list-style:none;"]), Do = f.default.li.withConfig({
            displayName: "RoadMapstyled__EventItem",
            componentId: "sc-oqfqrv-11"
        })(["font-family:'TT Fors Trial',sans-serif;font-style:normal;font-weight:400;font-size:14px;line-height:22px;letter-spacing:0.25px;margin-bottom:8px;position:relative;max-width:170px;white-space:pre-line;&:before{content:'';width:6px;height:6px;border-radius:50%;position:absolute;left:-15px;top:8px;", "}@media ", "{max-width:270px;}"], (function(e) {
            var t = e.variant
              , n = e.theme;
            switch (t) {
            case "green":
                return (0,
                f.css)(["background:", ";"], n.colors.shamrock);
            case "primary":
                return (0,
                f.css)(["background:", ";"], n.colors.primaryBright);
            default:
                return (0,
                f.css)(["background:#ffffff;opacity:0.3;"])
            }
        }
        ), E.mq.down(500)), Po = function(e) {
            var t = e.className
              , n = (0,
            h.$G)().t
              , i = [{
                name: n("Q1"),
                year: n("2024"),
                icon: Vr,
                events: [{
                    title: n("Rinance App"),
                    status: "done"
                }, {
                    title: n("Cross-chain Swaps"),
                    status: "done"
                }, {
                    title: n("Rinance Green Button\nGame Announced"),
                    status: "done"
                }, {
                    title: n("Crew3 quests"),
                    status: "done"
                }, {
                    title: n("More Incentives"),
                    status: "done"
                }]
            }, {
                name: n("Q2"),
                year: n("2024"),
                icon: Or,
                events: [{
                    title: n("Rinance Green Button - \nRelease"),
                    status: "progress"
                }, {
                    title: n("Wallet integration")
                }, {
                    title: n("New Blockchain\nintegration ")
                }, {
                    title: n("Widgets for mobile app")
                }, {
                    title: n("More Incentives")
                }]
            }, {
                name: n("Q3"),
                year: n("2024"),
                icon: Bo,
                events: [{
                    title: n("Interplanetary Cross-\nChain Battle\nAnnouncement")
                }, {
                    title: n("NFT Battle Royale\nRelease ")
                }, {
                    title: n("Smart Limit Orders\nAnnouncement ")
                }, {
                    title: n("DAO Integration")
                }, {
                    title: n("New Blockchains for DEX")
                }, {
                    title: n("New AMAs and Round\nTables")
                }, {
                    title: n("Educational Programs\nfor Newcomers")
                }]
            }];
            return (0,
            B.jsxs)(Fo, {
                className: t,
                children: [(0,
                B.jsx)(zo, {}), (0,
                B.jsxs)(Mo, {
                    children: [(0,
                    B.jsx)(Vo, {
                        children: (0,
                        B.jsx)(Uo, {
                            children: n("Roadmap")
                        })
                    }), (0,
                    B.jsx)(To, {
                        children: i.map((function(e, t) {
                            return (0,
                            B.jsxs)(Lo, {
                                children: [(0,
                                B.jsxs)(qo, {
                                    children: [(0,
                                    B.jsxs)(No, {
                                        children: [e.name, (0,
                                        B.jsx)(Qo, {
                                            children: e.year
                                        })]
                                    }), (0,
                                    B.jsx)(e.icon, {
                                        className: "icon"
                                    })]
                                }), (0,
                                B.jsx)(Ho, {
                                    children: e.events.map((function(e, t) {
                                        var n = "done" === e.status ? "green" : "progress" === e.status ? "primary" : "default";
                                        return (0,
                                        B.jsx)(Do, {
                                            variant: n,
                                            children: e.title
                                        }, t)
                                    }
                                    ))
                                })]
                            }, t)
                        }
                        ))
                    })]
                })]
            })
        };
        function Go() {
            return (Go = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Zo(e) {
            return x.createElement("svg", Go({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Jo || (Jo = x.createElement("path", {
                d: "M15.937 1.5c-1.12.077-2.428.794-3.19 1.727-.697.847-1.269 2.104-1.046 3.326 1.224.038 2.487-.696 3.22-1.644.685-.884 1.203-2.133 1.016-3.409z",
                fill: "#6C5DD3"
            })), Oo || (Oo = x.createElement("path", {
                d: "M20.36 8.544c-1.074-1.348-2.585-2.13-4.011-2.13-1.884 0-2.68.902-3.99.902-1.348 0-2.373-.9-4.002-.9-1.6 0-3.304.978-4.384 2.65-1.518 2.355-1.259 6.782 1.202 10.553.881 1.35 2.057 2.866 3.595 2.88 1.37.013 1.755-.878 3.61-.888 1.854-.01 2.206.9 3.572.885 1.54-.012 2.78-1.693 3.66-3.042.632-.968.867-1.455 1.356-2.547-3.56-1.355-4.131-6.419-.607-8.363z",
                fill: "#6C5DD3"
            })))
        }
        var Wo;
        function Xo() {
            return (Xo = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ko(e) {
            return x.createElement("svg", Xo({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Wo || (Wo = x.createElement("path", {
                d: "M17.397 15.356l-2.507-2.465-9.206 9.078 11.713-6.613zM17.397 8.648L5.684 2.035l9.206 9.078 2.507-2.465zM21.069 13.248c.75-.587.75-1.908-.05-2.494l-2.457-1.399-2.742 2.646 2.742 2.647 2.507-1.4zM3.28 22.5l10.705-10.502L3.28 1.501V1.5c-.542.28-.905.788-.905 1.448v18.104c0 .66.363 1.169.905 1.448z",
                fill: "#6C5DD3"
            })))
        }
        var Yo = n(7408)
          , $o = function() {
            return (0,
            B.jsx)(es, {
                src: "images/NewHomePage/ArrowsSocial.png",
                alt: "Arrow Social"
            })
        }
          , es = f.default.img.withConfig({
            displayName: "ArrowSocial__MainImage",
            componentId: "sc-uu38nr-0"
        })(["width:64px;height:64px;"])
          , ts = function() {
            return (0,
            B.jsx)(ns, {
                src: "images/NewHomePage/ImgApp.png",
                alt: "App"
            })
        }
          , ns = f.default.img.withConfig({
            displayName: "ImgApp__MainImage",
            componentId: "sc-1r2oqsb-0"
        })([""])
          , is = function e() {
            var t = (0,
            h.$G)().t
              , n = (0,
            C.Z)(E.mq.down(E.AV.sm));
            return (0,
            B.jsx)(_(), {
                animateIn: "fadeInUp",
                animateOnce: !0,
                children: (0,
                B.jsx)(e.Wrapper, {
                    id: "banner",
                    children: (0,
                    B.jsx)(e.List, {
                        children: (0,
                        B.jsxs)(os, {
                            children: [(0,
                            B.jsxs)(ss, {
                                children: [!n && (0,
                                B.jsx)($o, {}), (0,
                                B.jsxs)("div", {
                                    children: [(0,
                                    B.jsx)(e.Title, {
                                        children: t("Rinance Swap\n is always\n at hand")
                                    }), (0,
                                    B.jsxs)(rs, {
                                        children: [(0,
                                        B.jsxs)(as, {
                                            //href: "https://play.google.com/store/apps/details?id=com.alium.finance",
                                            target: "_blank",
                                            onClick: function() {
                                              //  i.m.events.googlePlay()
                                            },
                                            children: [(0,
                                            B.jsx)("div", {
                                                className: "icon",
                                                children: (0,
                                                B.jsx)(Ko, {})
                                            }), (0,
                                            B.jsx)("div", {
                                                className: "info",
                                                children: (0,
                                                B.jsx)("p", {
                                                    className: "social",
                                                    children: t("Coming soon")
                                                })
                                            })]
                                        }), (0,
                                        B.jsxs)(as, {
                                            //href: "https://apps.apple.com/ru/app/aliumswap-dex/id1585963586",
                                            target: "_blank",
                                            onClick: function() {
                                             //   i.m.events.appstore()
                                            },
                                            children: [(0,
                                            B.jsx)("div", {
                                                className: "icon",
                                                children: (0,
                                                B.jsx)(Zo, {})
                                            }), (0,
                                            B.jsx)("div", {
                                                className: "info",
                                                children: (0,
                                                B.jsx)("p", {
                                                    className: "social",
                                                    children: t("Coming soon")
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), (0,
                            B.jsx)(ls, {
                                children: (0,
                                B.jsx)(ts, {})
                            })]
                        })
                    })
                })
            })
        }
          , as = f.default.a.withConfig({
            displayName: "NewSocalsBanner__SocalsBanner",
            componentId: "sc-1qrx7bt-0"
        })(["background:rgba(67,52,166,0.3);padding:13.5px 22px;display:flex;align-items:center;justify-content:center;transition:background-color 200ms;border:1px solid #6c5dd3;border-radius:8px;@media ", "{width:50%;}@media ", "{width:200px;}> div > p{}&:hover{background:rgba(11,19,89,0.5);> div{> svg > path{fill:#ffffff;}> p{color:#ffffff;}}}&:active{background:rgba(11,19,89,0.5);box-shadow:inset 0 3px 0 rgba(11,19,89,0.5);}.icon{margin-right:8px;}.title{", " color:#6C5DD3;}.social{", " font-weight:600;color:#6c5dd3;}"], E.mq.down(E.AV.sm), E.mq.down(E.AV.sm), Yo.Vz.regular, Yo.A6.regular)
          , ls = f.default.div.withConfig({
            displayName: "NewSocalsBanner__ImgWrapper",
            componentId: "sc-1qrx7bt-1"
        })(["margin-bottom:-3px;@media ", "{width:450px;}@media ", "{width:438px;}@media ", "{max-width:300px;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , rs = f.default.div.withConfig({
            displayName: "NewSocalsBanner__SocalsBanners",
            componentId: "sc-1qrx7bt-2"
        })(["display:flex;gap:8px 7px;@media ", "{flex-direction:column;align-items:center;}"], E.mq.down(E.AV.sm));
        is.Wrapper = f.default.div.withConfig({
            displayName: "NewSocalsBanner__Wrapper",
            componentId: "sc-1qrx7bt-3"
        })(["display:flex;align-items:center;justify-content:center;padding-top:120px;@media ", "{padding-top:80px;}"], E.mq.down(E.AV.md)),
        is.Title = f.default.p.withConfig({
            displayName: "NewSocalsBanner__Title",
            componentId: "sc-1qrx7bt-4"
        })(["text-align:left;font-family:'TT Fors Trial','Roboto',serif;", ";max-width:235px;color:", ";margin-bottom:32px;@media ", "{max-width:320px;}@media ", "{text-align:left;", ";margin-right:24px;}@media ", "{margin-bottom:24px;max-width:230px;margin-bottom:24px;text-align:center;", ";margin-left:24px;}"], E.cp.h3, Ze.dw.default, E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.cp.h4, E.mq.down(E.AV.sm), E.cp.h6),
        is.Component = f.default.div.withConfig({
            displayName: "NewSocalsBanner__Component",
            componentId: "sc-1qrx7bt-5"
        })(["display:flex;justify-content:space-between;flex-wrap:wrap;align-items:self-start;"]);
        var os = f.default.div.withConfig({
            displayName: "NewSocalsBanner__Wave",
            componentId: "sc-1qrx7bt-6"
        })(["background:url('images/NewHomePage/Wave.svg') no-repeat left;background-position:115%;display:flex;position:relative;&:after{background:url('images/NewHomePage/Wave.svg') no-repeat left;content:'';position:absolute;width:100%;top:0;bottom:-0.5%;right:-35%;z-index:-1;@media ", "{right:-35%;bottom:-0.5%;}}@media ", "{width:83vw;background-position:125% 150%;background-size:80%;&:after{background:none;}}@media ", "{width:100%;}@media ", "{width:93.8vw;background-position:103% 35%;background-size:55%;justify-content:space-between;padding:0 0 0 0;}@media ", "{height:600px;min-width:354px;background-size:95%;flex-direction:column;align-items:center;background-position:5px 300px;}"], E.mq.down(E.AV.xl), E.mq.down(E.AV.lg), E.mq.down(1150), E.mq.down(E.AV.md), E.mq.down(E.AV.sm));
        is.List = f.default.div.withConfig({
            displayName: "NewSocalsBanner__List",
            componentId: "sc-1qrx7bt-7"
        })(["border-radius:32px;background:#0b1359;background-image:radial-gradient(50% 50% at -10% -15%,#6c5dd3 0%,rgba(108,93,211,0) 100%),radial-gradient(50% 50% at 100% 5%,#e360a3 -70%,rgba(227,96,163,0) 100%);"]),
        is.Item = f.default.div.withConfig({
            displayName: "NewSocalsBanner__Item",
            componentId: "sc-1qrx7bt-8"
        })(["display:flex;flex-direction:column;align-items:self-start;@media ", "{flex-direction:column;}@media ", "{flex-direction:row;margin-bottom:36px;width:100%;justify-content:center;max-width:330px;&:last-child{margin:0;}}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.sm)),
        is.Content = f.default.div.withConfig({
            displayName: "NewSocalsBanner__Content",
            componentId: "sc-1qrx7bt-9"
        })(["display:flex;justify-content:space-between;margin-right:34px;"]),
        is.Marker = f.default.li.withConfig({
            displayName: "NewSocalsBanner__Marker",
            componentId: "sc-1qrx7bt-10"
        })(["list-style-type:none;margin-top:8px;&::before{background:", ";content:'';height:6px;width:6px;border-radius:100%;display:inline-block;margin-right:8px;}span{", ";color:", ";}"], Ze.dw.primary, Yo.A6.regular, Ze.dw.default),
        is.ItemIcon = f.default.div.withConfig({
            displayName: "NewSocalsBanner__ItemIcon",
            componentId: "sc-1qrx7bt-11"
        })(["&:first-child{margin:0 34px 0 0;}margin:0 34px;@media ", "{margin:0;margin-bottom:24px;}@media ", "{margin:0;margin-right:24px;}"], E.mq.down(E.AV.lg), E.mq.down(E.AV.sm));
        var ss = f.default.div.withConfig({
            displayName: "NewSocalsBanner__TitleWrapper",
            componentId: "sc-1qrx7bt-12"
        })(["display:flex;flex-direction:column;max-width:320px;margin:0 235px 0 44px;@media ", "{margin:0 140px 0 48px;}@media ", "{margin-right:0px;padding:20px 0 40px;margin-left:24px;}@media ", "{margin-right:10px;margin-left:0;padding-top:56px;}justify-content:space-between;padding:40px 0;"], E.mq.down(E.AV.lg), E.mq.down(E.AV.md), E.mq.down(E.AV.sm))
          , cs = function e() {
            var t = (0,
            l.useWeb3React)().account
              , n = (0,
            o.$G)().t
              , i = (0,
            m.X)((function(e) {
                return [e.headerHeight]
            }
            ))
              , f = (0,
            a.Z)(i, 1)[0]
              , u = (0,
            s.a)().chainId
              , g = (0,
            c.Z)()
              , h = g.isDark
              , x = g.toggleTheme
              , v = (0,
            d.lc)(u).explorerName
              , _ = (0,
            d.E8)(u, t, "address")
              , C = (0,
            p.dd)((0,
            B.jsx)(r.y, {}))
              , E = (0,
            a.Z)(C, 1)[0];
            return (0,
            B.jsxs)(e.PageWrap, {
                headerHeight: f,
                children: [(0,
                B.jsx)(qt, {}), (0,
                B.jsx)(Rr, {}), (0,
                B.jsx)(Ge, {}), (0,
                B.jsx)(Ae, {}), (0,
                B.jsx)(Yt.S3, {}), (0,
                B.jsx)(Cn, {}), (0,
                B.jsx)(Po, {}), (0,
                B.jsx)(Bn, {}), (0,
                B.jsx)(It, {}), (0,
                B.jsx)(is, {}), (0,
                B.jsx)(wi, {}), (0,
                B.jsx)(Ke, {}), (0,
                B.jsx)(Un.$, {
                    account: t,
                    isDark: h,
                    toggleTheme: x,
                    buttonTitle: n("Connect"),
                    explorerName: v,
                    explorerLink: _,
                    onTransactionHistoryHandler: E
                })]
            })
        };
        cs.PageWrap = f.default.div.withConfig({
            displayName: "NewHome__PageWrap",
            componentId: "sc-115tqvg-0"
        })(["", ""], (function(e) {
            var t = e.headerHeight;
            return (0,
            f.css)(["min-height:100vh;width:100%;margin-top:-", "px;display:flex;flex-direction:column;justify-content:center;overflow:hidden;font-family:'TT Fors Trial','Roboto',serif;"], t)
        }
        )),
        cs.Wrapper = f.default.div.withConfig({
            displayName: "NewHome__Wrapper",
            componentId: "sc-115tqvg-1"
        })(["background-color:#0b1359;display:fiex;justify-content:center;width:100%;"]);
        var ds = cs
          , ps = !0
          , ms = function() {
            return (0,
            i.n)("homePageView"),
            (0,
            B.jsx)(B.Fragment, {
                children: (0,
                B.jsx)(ds, {})
            })
        }
    },
    84325: function(e, t, n) {
        "use strict";
        n.d(t, {
            BY: function() {
                return a
            },
            om: function() {
                return l
            },
            pg: function() {
                return r
            },
            WS: function() {
                return o
            },
            f_: function() {
                return s
            }
        });
        var i = n(82212)
          , a = .0017
          , l = .0025
          , r = 10
          , o = [{
            chainIds: [i.a_.MAINNET, i.a_.BSCTESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-bsc-exchange-2",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/bsc-blocks"
        }, {
            chainIds: [i.a_.ETHER_MAINNET, i.a_.ETHER_TESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-mainnet",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/mainnet-blocks"
        }, {
            chainIds: [i.a_.MATIC_MAINNET, i.a_.MATIC_TESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-polygon",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/matic-blocks"
        }, {
            chainIds: [i.a_.FANTOM, i.a_.FANTOM_TESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-fantom",
            blocklytics: "https://api.thegraph.com/subgraphs/name/ducquangkstn/fantom-blocks"
        }, {
            chainIds: [i.a_.MOONRIVER, i.a_.MOONBASE_ALPHA],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-moonriver",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/moonriver-blocks"
        }, {
            chainIds: [i.a_.AURORA, i.a_.AURORA_TESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-aurora",
            blocklytics: "https://api.thegraph.com/subgraphs/name/ducquangkstn/aurora-blocks"
        }, {
            chainIds: [i.a_.MOONBEAM],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-moonbeam",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/moonbeam-blocks"
        }].filter((function(e) {
            return !!e
        }
        ));
        function s(e) {
            return o.find((function(t) {
                return t.chainIds.includes(e)
            }
            ))
        }
    },
    62268: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return q
            }
        });
        var i, a = n(30266), l = n(809), r = n.n(l), o = n(82212), s = n(9669), c = n.n(s), d = n(47646), p = n(67294), m = n(85754), f = n(92809);
        function u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    f.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var h = g(g({}, (0,
        n(82343).L)().reduce((function(e, t) {
            return g(g({}, e), {}, (0,
            f.Z)({}, t, ""))
        }
        ), {})), {}, (i = {},
        (0,
        f.Z)(i, o.a_.BSCTESTNET, "smartchain"),
        (0,
        f.Z)(i, o.a_.MAINNET, "smartchain"),
        i))
          , x = "https://raw.githubusercontent.com/Rinance-Finance/tokens-list/main"
          , v = "".concat(x, "/common")
          , _ = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/"
          , C = "".concat(x, "/polygon/images/")
          , E = "".concat(x, "/fantom/images/")
          , w = "".concat(x, "/metis/images/")
          , y = "".concat(x, "/moonriver/images/")
          , k = "".concat(x, "/moonbeam/images/")
          , S = "".concat(x, "/aurora/images/")
          , A = "".concat(x, "/okc/images/")
          , b = {
            ALM: "".concat(v, "/images/alm.png"),
            BNB: "".concat(v, "/core/binance-logo.png"),
            WBNB: "".concat(v, "/core/binance-logo.png"),
            ETH: "".concat(v, "/core/eth.png"),
            WETH: "".concat(v, "/core/eth.png"),
            HT: "".concat(v, "/core/heco-logo.png"),
            WHT: "".concat(v, "/core/heco-logo.png"),
            FTM: "".concat(v, "/core/ftm-logo.png"),
            WFTM: "".concat(v, "/core/ftm-logo.png"),
            METIS: "".concat(v, "/core/Metis.png"),
            WMETIS: "".concat(v, "/core/Metis.png"),
            AETH: "".concat(v, "/core/eth.png"),
            GLMR: "".concat(v, "/core/Glmr.png"),
            MOVR: "".concat(v, "/core/Movr.png"),
            OKT: "".concat(v, "/core/Okt.svg"),
            WOKT: "".concat(v, "/core/Okt.svg")
        }
          , R = function(e, t, n) {
            if (b[null === t || void 0 === t ? void 0 : t.toLocaleUpperCase()])
                return b[null === t || void 0 === t ? void 0 : t.toLocaleUpperCase()];
            var i = h[n];
            if (!e)
                return "";
            switch (n) {
            case o.a_.FANTOM:
            case o.a_.FANTOM_TESTNET:
                return "".concat(E).concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), ".png");
            case o.a_.METIS:
            case o.a_.METIC_TESTNET:
                return "".concat(w).concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), "/logo.png");
            case o.a_.MATIC_MAINNET:
            case o.a_.MATIC_TESTNET:
                return "".concat(C).concat(e, "/logo.png");
            case o.a_.HECOMAINNET:
            case o.a_.HECOTESTNET:
                return "".concat("https://mdex.com/token-icons/heco/").concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), ".png");
            case o.a_.MOONBASE_ALPHA:
            case o.a_.MOONRIVER:
                return "".concat(y).concat(e, "/logo.png");
            case o.a_.MOONBEAM:
                return "".concat(k).concat(e, "/logo.png");
            case o.a_.AURORA:
            case o.a_.AURORA_TESTNET:
                return "".concat(S).concat(e, "/logo.png");
            case o.a_.ETHER_MAINNET:
            case o.a_.ETHER_TESTNET:
                return "".concat("https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/").concat(e, "/logo.png");
            case o.a_.OKC:
            case o.a_.OKC_TESTNET:
                return "".concat(A).concat(e, ".png");
            default:
                return function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "smartchain";
                    return "".concat(_).concat(t, "/assets/").concat(e, "/logo.png")
                }(e, i)
            }
        }
          , j = n(95268)
          , I = n(93350)
          , B = n(52503)
          , J = n(10219)
          , O = n(62639)
          , F = n(85893)
          , M = ["srcs", "alt", "style", "isPlatformToken"];
        function z(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function V(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? z(Object(n), !0).forEach((function(t) {
                    (0,
                    f.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var U = {};
        var T = I.default.div.withConfig({
            displayName: "Logo__LogoWrapper",
            componentId: "sc-1dr6t85-0"
        })(["background:", ";box-shadow:", ";border-radius:50%;padding:", ";display:flex;align-items:center;svg,img{object-fit:contain;border-radius:50%;}"], (function(e) {
            return e.isPlatformToken && "#ffffff"
        }
        ), (function(e) {
            return e.isPlatformToken && "0px 6px 12px rgba(185, 189, 208, 0.4)"
        }
        ), (function(e) {
            return e.isPlatformToken && "4px"
        }
        ))
          , L = (0,
        I.default)((function(e) {
            var t = e.srcs
              , n = e.alt
              , i = e.style
              , a = e.isPlatformToken
              , l = (0,
            J.Z)(e, M)
              , r = (0,
            p.useState)(0)[1]
              , o = null === t || void 0 === t ? void 0 : t.find((function(e) {
                return !U[e]
            }
            ));
            return o ? (0,
            F.jsx)(T, {
                isPlatformToken: a,
                style: i || {},
                className: "".concat((null === l || void 0 === l ? void 0 : l.className) || "", " logo-wrapper'"),
                children: (0,
                F.jsx)("img", V(V({}, l), {}, {
                    alt: n,
                    src: o,
                    onError: function() {
                        o && (U[o] = !0),
                        r((function(e) {
                            return e + 1
                        }
                        ))
                    }
                }))
            }) : (0,
            F.jsx)(T, {
                style: i || {},
                className: "logo-wrapper",
                children: (0,
                F.jsx)(O.Ex, V({}, l))
            })
        }
        )).withConfig({
            displayName: "CurrencyLogo__CoinLogo",
            componentId: "sc-1as2nqa-0"
        })(["width:", ";height:", ";"], (function(e) {
            return e.size
        }
        ), (function(e) {
            return e.size
        }
        ))
          , q = (0,
        p.memo)((function(e) {
            var t, n, i, l, s = e.currency, p = e.size, f = void 0 === p ? "24px" : p, u = e.style, g = e.className, h = (0,
            j.l)(), x = h.providerParams.nativeCurrency, v = (0,
            m.a)().chainId, _ = (0,
            d.x)().chainId;
            _ && (v = _);
            var C = null === s || void 0 === s ? void 0 : s.symbol
              , E = null === s || void 0 === s ? void 0 : s.address
              , w = null === s || void 0 === s ? void 0 : s.logoURI
              , y = (null === (t = o.au[h.id]) || void 0 === t || null === (n = t.address) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === (null === E || void 0 === E ? void 0 : E.toLocaleLowerCase()) || "alm" === (null === s || void 0 === s || null === (i = s.symbol) || void 0 === i ? void 0 : i.toLocaleLowerCase())
              , k = (0,
            B.ZP)("/api/tokenLogo/".concat(C, "/").concat(E), (0,
            a.Z)(r().mark((function e() {
                var t, n, i, a, l;
                return r().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(t = k)) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", t);
                        case 3:
                            if (!(n = s === x && R(E, C, v))) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", [n]);
                        case 6:
                            return e.next = 8,
                            c().get("/api/tokenLogo", {
                                params: {
                                    symbol: C,
                                    address: E,
                                    chainId: v
                                }
                            });
                        case 8:
                            return i = e.sent,
                            a = i.data,
                            l = [a.url],
                            w && l.push(w),
                            e.abrupt("return", l);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).data
              , S = null !== k && void 0 !== k && k.length ? null === k || void 0 === k ? void 0 : k.filter((function(e) {
                return !(null === e || void 0 === e || !e.length)
            }
            )) : [];
            return (0,
            F.jsx)(L, {
                isPlatformToken: y,
                size: f,
                srcs: S,
                alt: "".concat(null !== (l = null === s || void 0 === s ? void 0 : s.symbol) && void 0 !== l ? l : "token", " logo"),
                style: u,
                className: g
            })
        }
        ))
    },
    14190: function(e, t, n) {
        "use strict";
        n.d(t, {
            u: function() {
                return l
            }
        });
        var i = n(96486)
          , a = n(67294);
        function l(e) {
            var t = e.items
              , n = e.pageLimit
              , l = void 0 === n ? 30 : n
              , r = e.maxPages
              , o = (0,
            a.useMemo)((function() {
                return t
            }
            ), [t])
              , s = (0,
            a.useCallback)((function(e) {
                var t = (e - 1) * l;
                return null !== o && void 0 !== o && o.length ? o.slice(t, t + l) : []
            }
            ), [o, l])
              , c = (0,
            a.useState)(1)
              , d = c[0]
              , p = c[1]
              , m = (0,
            a.useState)(s(1))
              , f = m[0]
              , u = m[1];
            (0,
            a.useEffect)((function() {
                var e = s(d);
                f && e && !(0,
                i.isEqual)(f, e) && u(e)
            }
            ), [o, f, d, s]);
            var g = (null === o || void 0 === o ? void 0 : o.length) || 0;
            return {
                totalPages: r || Math.ceil(g / l),
                currentPage: d,
                onPageChanged: function(e) {
                    p(e),
                    u(s(e))
                },
                items: f
            }
        }
    },
    92691: function(e, t, n) {
        "use strict";
        var i = n(41810)
          , a = (n(67294),
        n(92528))
          , l = n(80628)
          , r = n(93350)
          , o = n(85893)
          , s = function e(t) {
            var n = t.currentPage
              , r = t.totalPages
              , s = t.onPageChanged
              , p = (0,
            i.$G)().t
              , m = 1 !== n
              , f = n !== r
              , u = n - 1
              , g = n + 1;
            return r <= 1 ? (0,
            o.jsx)(o.Fragment, {}) : (0,
            o.jsxs)(e.Root, {
                className: "pagination",
                children: [(0,
                o.jsx)(c, {
                    onClick: function() {
                        return m && s(u)
                    },
                    children: (0,
                    o.jsx)(a.Z, {})
                }), (0,
                o.jsx)("li", {
                    children: (0,
                    o.jsx)(d, {
                        children: p("Page {{currentPage}} of {{totalPages}}", {
                            currentPage: n,
                            totalPages: r
                        })
                    })
                }), (0,
                o.jsx)(c, {
                    onClick: function() {
                        return f && s(g)
                    },
                    children: (0,
                    o.jsx)(l.Z, {})
                })]
            })
        };
        t.Z = s,
        s.Root = r.default.ul.withConfig({
            displayName: "Pagination__Root",
            componentId: "sc-o8u034-0"
        })(["padding-top:24px;display:flex;width:100%;justify-content:center;align-items:center;li{list-style-type:none;}"]);
        var c = r.default.li.withConfig({
            displayName: "Pagination__Control",
            componentId: "sc-o8u034-1"
        })(["border:1px solid #e9e9eb;box-sizing:border-box;border-radius:6px;width:40px;height:40px;display:flex;justify-content:center;align-items:center;cursor:pointer;svg{stroke:#8990a5;}&:hover{opacity:0.7;}"])
          , d = r.default.div.withConfig({
            displayName: "Pagination__Content",
            componentId: "sc-o8u034-2"
        })(["margin-left:16px;margin-right:16px;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#8990a5;"])
    },
    95268: function(e, t, n) {
        "use strict";
        n.d(t, {
            l: function() {
                return s
            }
        });
        var i = n(47235)
          , a = n(47646)
          , l = n(67294)
          , r = n(87662)
          , o = n(7580)
          , s = function() {
            var e = (0,
            a.x)().chainId;
            return (0,
            l.useMemo)((function() {
                var t = (0,
                i.Hy)(e)
                  , n = (0,
                o.Q)();
                return (0,
                r.t)(t ? e : n)
            }
            ), [e])
        }
    },
    9462: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZP: function() {
                return y
            },
            Z3: function() {
                return k
            }
        });
        var i, a = n(10219), l = n(92809), r = n(75472), o = n.n(r), s = n(98913), c = n.n(s), d = n(67294), p = n(84325), m = n(62639), f = n(92691), u = n(14190), g = n(93350), h = n(79308);
        function x() {
            return (x = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function v(e) {
            return d.createElement("svg", x({
                width: 14,
                height: 14,
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), i || (i = d.createElement("path", {
                d: "M7.355 8.646l2.792-2.793A.5.5 0 009.793 5H4.207a.5.5 0 00-.353.854l2.794 2.792a.5.5 0 00.707 0z",
                fill: "#8990A5"
            })))
        }
        var _ = n(85893)
          , C = ["items"];
        function E(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? E(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function y(e) {
            var t = e.header
              , n = e.children
              , i = e.paginate
              , a = e.className
              , l = e.style;
            return (0,
            _.jsxs)(y.Root, {
                style: l || {},
                className: a || "table-root",
                children: [t, n, i && (0,
                _.jsx)(f.Z, w({}, i))]
            })
        }
        function k(e) {
            var t = e.items
              , n = e.sortFn
              , i = void 0 === n ? o() : n
              , l = e.pageLimit
              , r = void 0 === l ? p.pg : l
              , s = e.sortingOptions
              , c = e.maxPages
              , m = function(e) {
                var t = (0,
                d.useState)((null === e || void 0 === e ? void 0 : e.initialDirection) || "desc")
                  , n = t[0]
                  , i = t[1]
                  , a = (0,
                d.useState)(null === e || void 0 === e ? void 0 : e.initialKey)
                  , l = a[0]
                  , r = a[1]
                  , o = (0,
                d.useCallback)((function() {
                    return i((function(e) {
                        return "desc" === e ? "asc" : "desc"
                    }
                    ))
                }
                ), []);
                return {
                    direction: n,
                    key: l,
                    setKey: r,
                    setDirection: i,
                    toggleDirection: o
                }
            }(s)
              , f = (0,
            d.useMemo)((function() {
                return m.key && t && i ? i(t, m.key, m.direction) : t
            }
            ), [t, i, m.direction, m.key])
              , g = (0,
            u.u)({
                items: f,
                pageLimit: r,
                maxPages: c
            })
              , h = g.items
              , x = (0,
            a.Z)(g, C)
              , v = (0,
            d.useCallback)((function(e) {
                return r * (x.currentPage - 1) + e + 1
            }
            ), [r, x.currentPage])
              , _ = x.onPageChanged;
            return (0,
            d.useEffect)((function() {
                _(1)
            }
            ), [m.key, m.direction]),
            {
                items: t && h,
                sorting: m,
                paginate: x,
                getItemNumber: v
            }
        }
        y.Row = g.default.div.withConfig({
            displayName: "Table__Row",
            componentId: "sc-1lurxq7-0"
        })(["display:grid;min-height:56px;& > *{padding:0 16px;&:last-child{text-align:right;justify-content:flex-end;}}@media ", "{& > *{padding:0 8px;}}"], h.mq.down(h.AV.sm)),
        y.HeaderRow = (0,
        g.default)(y.Row).withConfig({
            displayName: "Table__HeaderRow",
            componentId: "sc-1lurxq7-1"
        })(["border-radius:6px;overflow:hidden;"]),
        y.ItemRow = (0,
        g.default)(y.Row).withConfig({
            displayName: "Table__ItemRow",
            componentId: "sc-1lurxq7-2"
        })(["border-bottom:1px solid #ebedf9;a&{&:hover{background:rgb(247,248,253);}}"]),
        y.Cell = g.default.div.withConfig({
            displayName: "Table__Cell",
            componentId: "sc-1lurxq7-3"
        })(["display:inline-flex;align-items:center;"]),
        y.HeaderCell = (0,
        g.default)(y.Cell).withConfig({
            displayName: "Table__HeaderCell",
            componentId: "sc-1lurxq7-4"
        })(["font-weight:bold;font-size:12px;line-height:14px;letter-spacing:0.8px;text-transform:uppercase;color:#0b1359;overflow-x:auto;background:#ebedf9;"]),
        y.ItemCell = (0,
        g.default)(y.Cell).withConfig({
            displayName: "Table__ItemCell",
            componentId: "sc-1lurxq7-5"
        })(["font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.001em;color:#0b1359;@media ", "{", ";}"], h.mq.down(h.AV.sm), h.cp.Vz.regular),
        y.Root = (0,
        g.default)(h.Zb).withConfig({
            displayName: "Table__Root",
            componentId: "sc-1lurxq7-6"
        })(["box-shadow:0px 6px 12px rgba(185,189,208,0.4);padding:8px;& > .pagination{margin-bottom:24px;}"]),
        y.SortableHeaderCell = (0,
        g.default)((function(e) {
            var t = e.sortKey === e.sorting.key;
            return (0,
            _.jsxs)(y.HeaderCell, {
                onClick: function() {
                    t ? e.sorting.toggleDirection() : e.sorting.setKey(e.sortKey)
                },
                as: "button",
                className: e.className,
                "data-direction": t ? e.sorting.direction : void 0,
                style: e.style || {},
                children: [e.children, t && (0,
                _.jsx)(v, {})]
            })
        }
        )).withConfig({
            displayName: "Table__SortableHeaderCell",
            componentId: "sc-1lurxq7-7"
        })(["text-align:left;cursor:pointer;border:none;&:hover{background:rgb(228,230,247);}&[data-direction='asc']{svg{transform:rotate(180deg);}}& > svg{margin-left:4px;}"]),
        y.ItemsLoader = (0,
        g.default)((function(e) {
            var t = e.className;
            return (0,
            _.jsx)(_.Fragment, {
                children: c()(3).map((function(e) {
                    return (0,
                    _.jsx)(y.ItemRow, {
                        className: t,
                        children: (0,
                        _.jsx)(m.Od, {
                            animation: "waves"
                        })
                    }, e)
                }
                ))
            })
        }
        )).withConfig({
            displayName: "Table__ItemsLoader",
            componentId: "sc-1lurxq7-8"
        })(["position:relative;& > *{position:absolute;left:0;top:0;bottom:0;right:0;}"])
    },
    92911: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ir: function() {
                return m
            }
        });
        var i, a = n(92809), l = n(52209), r = n(82909), o = n(64316);
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var d = {}
          , p = (0,
        r.Ps)(i || (i = (0,
        l.Z)(["\n    query getRinanceTvl {\n  almCrossLiquidity {\n    date\n    totalLiquidityUSD\n  }\n  aliumTvl {\n    bsc {\n      date\n      totalLiquidityUSD\n    }\n    bscStaking {\n      date\n      totalLiquidityUSD\n    }\n    staking {\n      date\n      totalLiquidityUSD\n    }\n  }\n}\n    "])));
        function m(e) {
            var t = c(c({}, d), e);
            return o.a(p, t)
        }
    },
    96015: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return r
            }
        });
        var i = n(67294)
          , a = n(22536)
          , l = n(39172)
          , r = function(e, t, n, r) {
            return (0,
            i.useMemo)((function() {
                var i = null === e || void 0 === e ? void 0 : e.map((function(e) {
                    return (0,
                    a.b)(e[t], e[n])
                }
                ))
                  , o = r ? null === i || void 0 === i ? void 0 : i.reverse() : i;
                return {
                    charts: o,
                    variant: (0,
                    l.Q)(o),
                    lastData: null === o || void 0 === o ? void 0 : o[o.length - 1]
                }
            }
            ), [e, t, n, r])
        }
    },
    22536: function(e, t, n) {
        "use strict";
        n.d(t, {
            b: function() {
                return r
            }
        });
        var i = n(93022)
          , a = n(42227);
        function l(e) {
            return (0,
            i.Z)((0,
            a.Z)(Number(e)), "yyyy.MM.dd")
        }
        var r = function(e, t, n) {
            return {
                date: l(e),
                value: Number(t),
                title: n || "??"
            }
        }
    },
    39172: function(e, t, n) {
        "use strict";
        n.d(t, {
            Q: function() {
                return i
            }
        });
        var i = function(e) {
            if (null === e || void 0 === e || !e.length)
                return "negative";
            var t = null === e || void 0 === e ? void 0 : e[e.length - 1]
              , n = null === e || void 0 === e ? void 0 : e[e.length - 2];
            return (null === t || void 0 === t ? void 0 : t.value) >= (null === n || void 0 === n ? void 0 : n.value) ? "positive" : "negative"
        }
    },
    45301: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return n(83626)
        }
        ])
    }
}, function(e) {
    e.O(0, [4343, 4408, 5497, 3271, 7094, 9774, 2888, 179], (function() {
        return t = 45301,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
