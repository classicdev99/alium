"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3597], {
    62268: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return q
            }
        });
        var o, r = n(30266), c = n(809), a = n.n(c), i = n(82212), l = n(9669), s = n.n(l), u = n(47646), d = n(67294), m = n(85754), p = n(92809);
        function f(e, t) {
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
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(n), !0).forEach((function(t) {
                    (0,
                    p.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var v = g(g({}, (0,
        n(82343).L)().reduce((function(e, t) {
            return g(g({}, e), {}, (0,
            p.Z)({}, t, ""))
        }
        ), {})), {}, (o = {},
        (0,
        p.Z)(o, i.a_.BSCTESTNET, "smartchain"),
        (0,
        p.Z)(o, i.a_.MAINNET, "smartchain"),
        o))
          , h = "https://raw.githubusercontent.com/Rinance-Finance/tokens-list/main"
          , b = "".concat(h, "/common")
          , y = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/"
          , T = "".concat(h, "/polygon/images/")
          , O = "".concat(h, "/fantom/images/")
          , w = "".concat(h, "/metis/images/")
          , N = "".concat(h, "/moonriver/images/")
          , j = "".concat(h, "/moonbeam/images/")
          , E = "".concat(h, "/aurora/images/")
          , _ = "".concat(h, "/okc/images/")
          , k = {
            ALM: "".concat(b, "/images/alm.png"),
            BNB: "".concat(b, "/core/binance-logo.png"),
            WBNB: "".concat(b, "/core/binance-logo.png"),
            ETH: "".concat(b, "/core/eth.png"),
            WETH: "".concat(b, "/core/eth.png"),
            HT: "".concat(b, "/core/heco-logo.png"),
            WHT: "".concat(b, "/core/heco-logo.png"),
            FTM: "".concat(b, "/core/ftm-logo.png"),
            WFTM: "".concat(b, "/core/ftm-logo.png"),
            METIS: "".concat(b, "/core/Metis.png"),
            WMETIS: "".concat(b, "/core/Metis.png"),
            AETH: "".concat(b, "/core/eth.png"),
            GLMR: "".concat(b, "/core/Glmr.png"),
            MOVR: "".concat(b, "/core/Movr.png"),
            OKT: "".concat(b, "/core/Okt.svg"),
            WOKT: "".concat(b, "/core/Okt.svg")
        }
          , x = function(e, t, n) {
            if (k[null === t || void 0 === t ? void 0 : t.toLocaleUpperCase()])
                return k[null === t || void 0 === t ? void 0 : t.toLocaleUpperCase()];
            var o = v[n];
            if (!e)
                return "";
            switch (n) {
            case i.a_.FANTOM:
            case i.a_.FANTOM_TESTNET:
                return "".concat(O).concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), ".png");
            case i.a_.METIS:
            case i.a_.METIC_TESTNET:
                return "".concat(w).concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), "/logo.png");
            case i.a_.MATIC_MAINNET:
            case i.a_.MATIC_TESTNET:
                return "".concat(T).concat(e, "/logo.png");
            case i.a_.HECOMAINNET:
            case i.a_.HECOTESTNET:
                return "".concat("https://mdex.com/token-icons/heco/").concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), ".png");
            case i.a_.MOONBASE_ALPHA:
            case i.a_.MOONRIVER:
                return "".concat(N).concat(e, "/logo.png");
            case i.a_.MOONBEAM:
                return "".concat(j).concat(e, "/logo.png");
            case i.a_.AURORA:
            case i.a_.AURORA_TESTNET:
                return "".concat(E).concat(e, "/logo.png");
            case i.a_.ETHER_MAINNET:
            case i.a_.ETHER_TESTNET:
                return "".concat("https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/ethereum/assets/").concat(e, "/logo.png");
            case i.a_.OKC:
            case i.a_.OKC_TESTNET:
                return "".concat(_).concat(e, ".png");
            default:
                return function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "smartchain";
                    return "".concat(y).concat(t, "/assets/").concat(e, "/logo.png")
                }(e, o)
            }
        }
          , P = n(95268)
          , C = n(93350)
          , I = n(52503)
          , Z = n(10219)
          , L = n(62639)
          , A = n(85893)
          , M = ["srcs", "alt", "style", "isPlatformToken"];
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
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? S(Object(n), !0).forEach((function(t) {
                    (0,
                    p.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var D = {};
        var H = C.default.div.withConfig({
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
          , K = (0,
        C.default)((function(e) {
            var t = e.srcs
              , n = e.alt
              , o = e.style
              , r = e.isPlatformToken
              , c = (0,
            Z.Z)(e, M)
              , a = (0,
            d.useState)(0)[1]
              , i = null === t || void 0 === t ? void 0 : t.find((function(e) {
                return !D[e]
            }
            ));
            return i ? (0,
            A.jsx)(H, {
                isPlatformToken: r,
                style: o || {},
                className: "".concat((null === c || void 0 === c ? void 0 : c.className) || "", " logo-wrapper'"),
                children: (0,
                A.jsx)("img", R(R({}, c), {}, {
                    alt: n,
                    src: i,
                    onError: function() {
                        i && (D[i] = !0),
                        a((function(e) {
                            return e + 1
                        }
                        ))
                    }
                }))
            }) : (0,
            A.jsx)(H, {
                style: o || {},
                className: "logo-wrapper",
                children: (0,
                A.jsx)(L.Ex, R({}, c))
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
        d.memo)((function(e) {
            var t, n, o, c, l = e.currency, d = e.size, p = void 0 === d ? "24px" : d, f = e.style, g = e.className, v = (0,
            P.l)(), h = v.providerParams.nativeCurrency, b = (0,
            m.a)().chainId, y = (0,
            u.x)().chainId;
            y && (b = y);
            var T = null === l || void 0 === l ? void 0 : l.symbol
              , O = null === l || void 0 === l ? void 0 : l.address
              , w = null === l || void 0 === l ? void 0 : l.logoURI
              , N = (null === (t = i.au[v.id]) || void 0 === t || null === (n = t.address) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === (null === O || void 0 === O ? void 0 : O.toLocaleLowerCase()) || "alm" === (null === l || void 0 === l || null === (o = l.symbol) || void 0 === o ? void 0 : o.toLocaleLowerCase())
              , j = (0,
            I.ZP)("/api/tokenLogo/".concat(T, "/").concat(O), (0,
            r.Z)(a().mark((function e() {
                var t, n, o, r, c;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(t = j)) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", t);
                        case 3:
                            if (!(n = l === h && x(O, T, b))) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", [n]);
                        case 6:
                            return e.next = 8,
                            s().get("/api/tokenLogo", {
                                params: {
                                    symbol: T,
                                    address: O,
                                    chainId: b
                                }
                            });
                        case 8:
                            return o = e.sent,
                            r = o.data,
                            c = [r.url],
                            w && c.push(w),
                            e.abrupt("return", c);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).data
              , E = null !== j && void 0 !== j && j.length ? null === j || void 0 === j ? void 0 : j.filter((function(e) {
                return !(null === e || void 0 === e || !e.length)
            }
            )) : [];
            return (0,
            A.jsx)(K, {
                isPlatformToken: N,
                size: p,
                srcs: E,
                alt: "".concat(null !== (c = null === l || void 0 === l ? void 0 : l.symbol) && void 0 !== c ? c : "token", " logo"),
                style: f,
                className: g
            })
        }
        ))
    },
    95268: function(e, t, n) {
        n.d(t, {
            l: function() {
                return l
            }
        });
        var o = n(47235)
          , r = n(47646)
          , c = n(67294)
          , a = n(87662)
          , i = n(7580)
          , l = function() {
            var e = (0,
            r.x)().chainId;
            return (0,
            c.useMemo)((function() {
                var t = (0,
                o.Hy)(e)
                  , n = (0,
                i.Q)();
                return (0,
                a.t)(t ? e : n)
            }
            ), [e])
        }
    },
    61047: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return b
            }
        });
        var o = n(41810)
          , r = n(41664)
          , c = n(67294)
          , a = n(94829)
          , i = n(75347)
          , l = n(10429)
          , s = n(93350)
          , u = n(79308)
          , d = n(99638)
          , m = n(27420)
          , p = n(3033)
          , f = n(67619)
          , g = n(9462)
          , v = n(67061)
          , h = n(85893);
        function b(e) {
            var t = e.hiddenTitle
              , n = e.seeAllHref
              , s = (0,
            o.$G)().t
              , y = function() {
                var e = (0,
                i.w0)().data
                  , t = (0,
                c.useMemo)((function() {
                    if (e)
                        return e.tokens.filter((function(e) {
                            return e.tokenDayData.length > 1
                        }
                        )).map((function(e) {
                            var t, n, o, r, c = (0,
                            m.e)(null === e || void 0 === e ? void 0 : e.tokenDayData, null === e || void 0 === e ? void 0 : e.id), a = Number(null === c || void 0 === c || null === (t = c[0]) || void 0 === t ? void 0 : t.priceUSD) || 0, i = Number(null === c || void 0 === c || null === (n = c[1]) || void 0 === n ? void 0 : n.priceUSD) || 0;
                            return {
                                id: e.id,
                                name: e.name,
                                symbol: e.symbol,
                                liquidity: Number(null === c || void 0 === c || null === (o = c[0]) || void 0 === o ? void 0 : o.totalLiquidityUSD) || 0,
                                volume24h: Number(null === c || void 0 === c || null === (r = c[0]) || void 0 === r ? void 0 : r.dailyVolumeUSD) || 0,
                                price: a,
                                priceChange: (0,
                                d.Yu)(i, a)
                            }
                        }
                        ))
                }
                ), [e]);
                return (0,
                g.Z3)({
                    items: t,
                    sortingOptions: {
                        initialKey: "liquidity"
                    }
                })
            }()
              , T = y.items
              , O = y.paginate
              , w = y.sorting
              , N = y.getItemNumber
              , j = (0,
            a.Z)(u.mq.down(u.AV.lg))
              , E = (0,
            a.Z)(u.mq.down(u.AV.sm))
              , _ = [{
                title: s("Name"),
                sortKey: "name"
            }, !E && {
                title: s("Symbol Ticker"),
                sortKey: "symbol"
            }, {
                title: s("Liquidity"),
                sortKey: "liquidity"
            }, {
                title: s("Volume\n(24 hrs)"),
                sortKey: "volume24h",
                style: E && {
                    whiteSpace: "break-spaces"
                }
            }, !j && {
                title: s("Price"),
                sortKey: "price"
            }, !j && {
                title: s("Price Change\n(24 Hrs)"),
                sortKey: "priceChange",
                style: {
                    whiteSpace: "break-spaces"
                }
            }];
            return (0,
            h.jsxs)(b.Root, {
                children: [!t && (0,
                h.jsx)(v.Z, {
                    seeAllHref: n,
                    children: s("Top Tokens")
                }), (0,
                h.jsx)(g.ZP, {
                    paginate: O,
                    header: (0,
                    h.jsx)(g.ZP.HeaderRow, {
                        children: _.filter(Boolean).map((function(e) {
                            return (0,
                            h.jsx)(g.ZP.SortableHeaderCell, {
                                sortKey: e.sortKey,
                                sorting: w,
                                style: e.style,
                                children: e.title
                            }, e.title)
                        }
                        ))
                    }),
                    children: T ? T.map((function(e, t) {
                        return (0,
                        h.jsx)(r.default, {
                            passHref: !0,
                            href: "/info/tokens/".concat(e.id),
                            children: (0,
                            h.jsxs)(g.ZP.ItemRow, {
                                as: "a",
                                children: [(0,
                                h.jsxs)(g.ZP.ItemCell, {
                                    children: [!E && (0,
                                    h.jsx)(b.ItemNumber, {
                                        children: N(t)
                                    }), (0,
                                    h.jsx)(p._, {
                                        address: e.id,
                                        symbol: e.symbol
                                    }), (0,
                                    h.jsx)(b.TokenName, {
                                        children: E ? (0,
                                        d.Rr)(e.symbol) : e.name
                                    })]
                                }), !E && (0,
                                h.jsx)(g.ZP.ItemCell, {
                                    children: (0,
                                    d.Rr)(e.symbol)
                                }), (0,
                                h.jsxs)(g.ZP.ItemCell, {
                                    children: ["$", (0,
                                    l.uf)(e.liquidity)]
                                }), (0,
                                h.jsxs)(g.ZP.ItemCell, {
                                    children: ["$", (0,
                                    l.uf)(e.volume24h)]
                                }), !j && (0,
                                h.jsxs)(g.ZP.ItemCell, {
                                    children: ["$", (0,
                                    l.uf)(e.price)]
                                }), !j && (0,
                                h.jsx)(g.ZP.ItemCell, {
                                    children: (0,
                                    h.jsx)(f.Z, {
                                        value: e.priceChange
                                    })
                                })]
                            })
                        }, e.id)
                    }
                    )) : (0,
                    h.jsx)(g.ZP.ItemsLoader, {})
                })]
            })
        }
        b.Root = s.default.div.withConfig({
            displayName: "TopTokensTable__Root",
            componentId: "sc-1p0iy77-0"
        })(["", "{grid-template-columns:1.6fr repeat(5,1fr);}@media ", "{", "{grid-template-columns:1.6fr repeat(3,1fr);}}@media ", "{", "{grid-template-columns:1.6fr repeat(2,1fr);}}"], g.ZP.Row, u.mq.down(u.AV.lg), g.ZP.Row, u.mq.down(u.AV.sm), g.ZP.Row),
        b.ItemNumber = s.default.div.withConfig({
            displayName: "TopTokensTable__ItemNumber",
            componentId: "sc-1p0iy77-1"
        })(["margin-right:8px;min-width:16px;"]),
        b.TokenName = s.default.div.withConfig({
            displayName: "TopTokensTable__TokenName",
            componentId: "sc-1p0iy77-2"
        })(["", " color:#6C5DD3;margin-left:8px;"], u.cp.A6.medium)
    },
    27420: function(e, t, n) {
        n.d(t, {
            J: function() {
                return c
            },
            e: function() {
                return a
            }
        });
        var o = ["0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"]
          , r = [1653004800]
          , c = function(e, t) {
            var n;
            return null === e || void 0 === e || null === (n = e.tokenDayDatas) || void 0 === n ? void 0 : n.filter((function(e) {
                return i(e, t)
            }
            ))
        }
          , a = function(e, t) {
            return null === e || void 0 === e ? void 0 : e.filter((function(e) {
                return i(e, t)
            }
            ))
        };
        function i(e, t) {
            return !o.includes(t) || !r.includes(e.date)
        }
    }
}]);
