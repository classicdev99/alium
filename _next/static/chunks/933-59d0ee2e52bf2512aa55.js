(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[933], {
    55553: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return r
            }
        });
        var i = n(85893)
          , r = function() {
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
    53976: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return f
            }
        });
        var i = n(92809)
          , r = n(41810)
          , o = n(67294)
          , a = n(93578)
          , c = n(30879)
          , s = n(29668)
          , d = n(94e3)
          , l = n(67224)
          , u = n(85754);
        function p(e, t) {
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
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function f() {
            var e = (0,
            o.useState)(null)
              , t = e[0]
              , n = e[1]
              , i = (0,
            o.useState)([])
              , p = i[0]
              , f = i[1]
              , v = (0,
            u.a)()
              , m = v.account
              , x = v.library
              , g = (0,
            r.$G)().t
              , C = (0,
            o.useMemo)((function() {
                return (0,
                l.G)(g)
            }
            ), [g]);
            (0,
            o.useEffect)((function() {
                if (x) {
                    var e = (0,
                    a.uN)(s.a2, s.JR, x);
                    n(e)
                }
            }
            ), [x]);
            var w = (0,
            o.useMemo)((function() {
                return [m || void 0]
            }
            ), [m])
              , b = (0,
            c.A)(t, "balanceOf", w).data;
            (0,
            o.useEffect)((function() {
                for (var e = null === b || void 0 === b ? void 0 : b.toNumber(), t = [], n = 0; n < e; n++)
                    t.push(n);
                f(t)
            }
            ), [b]);
            var j = (0,
            o.useMemo)((function() {
                return m ? p.map((function(e) {
                    return [m, e]
                }
                )) : []
            }
            ), [p, m])
              , k = (0,
            c.$)(t, "tokenOfOwnerByIndex", j).data
              , y = (0,
            o.useMemo)((function() {
                return null === k || void 0 === k ? void 0 : k.map((function(e) {
                    return null === e || void 0 === e ? void 0 : e.toString()
                }
                )).filter((function(e) {
                    return void 0 !== e
                }
                ))
            }
            ), [k])
              , P = (0,
            o.useMemo)((function() {
                return null === y || void 0 === y ? void 0 : y.map((function(e) {
                    return [parseInt(e, 10)]
                }
                ))
            }
            ), [y])
              , O = (0,
            c.$)(t, "getTokenType", P).data
              , M = (0,
            o.useMemo)((function() {
                return null === O || void 0 === O ? void 0 : O.map((function(e) {
                    return null === e || void 0 === e ? void 0 : e.toString()
                }
                ))
            }
            ), [O])
              , D = (0,
            o.useMemo)((function() {
                var e = {};
                return null === M || void 0 === M || M.forEach((function(t, n) {
                    var i;
                    e[parseInt(t, 10)] ? null === (i = e[parseInt(t, 10)]) || void 0 === i || i.push(y[n]) : e[parseInt(t, 10)] = [y[n]]
                }
                )),
                e
            }
            ), [y, M])
              , S = (0,
            o.useMemo)((function() {
                return C.map((function(e) {
                    return h(h({}, e), {}, {
                        cards: D[e.id] || []
                    })
                }
                ))
            }
            ), [D, C])
              , N = (0,
            o.useMemo)((function() {
                return d.T8.map((function(e) {
                    var t;
                    return h(h({}, e), {}, {
                        cardsCount: (null === (t = D[e.id]) || void 0 === t ? void 0 : t.length) || 0
                    })
                }
                ))
            }
            ), [D])
              , L = (0,
            o.useMemo)((function() {
                return d.Ex.map((function(e) {
                    var t;
                    return h(h({}, e), {}, {
                        cardsCount: (null === (t = D[e.id]) || void 0 === t ? void 0 : t.length) || 0
                    })
                }
                ))
            }
            ), [D])
              , A = (0,
            o.useMemo)((function() {
                return d.xH.map((function(e) {
                    var t;
                    return h(h({}, e), {}, {
                        cardsCount: (null === (t = D[e.id]) || void 0 === t ? void 0 : t.length) || 0
                    })
                }
                ))
            }
            ), [D]);
            return {
                tokenTypesWithTokenId: D,
                balanceAccount: b,
                privateCardsWithCount: A,
                publicCardsWithCount: N,
                strategicalCardsWithCount: L,
                poolsWithCards: S
            }
        }
    },
    30879: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return v
            },
            A: function() {
                return m
            }
        });
        var i = n(92809)
          , r = n(83789)
          , o = n(30266)
          , a = n(809)
          , c = n.n(a)
          , s = n(39529)
          , d = n(67294)
          , l = n(8503)
          , u = n(52503)
          , p = n(85754);
        function h(e, t) {
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
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function v(e, t, n) {
            var i = (0,
            p.a)()
              , a = i.library
              , h = i.chainId
              , f = (0,
            l.Ov)()
              , v = (0,
            d.useMemo)((function() {
                var e;
                return null !== n && void 0 !== n && n.length && null !== (e = n[0]) && void 0 !== e && e.length ? n : null
            }
            ), [n]);
            return (0,
            u.ZP)(h && f && a && !(null === e || void 0 === e || !e.address) && v && [h, null === e || void 0 === e ? void 0 : e.address, t, JSON.stringify(v), f], (0,
            o.Z)(c().mark((function i() {
                var o, d;
                return c().wrap((function(i) {
                    for (; ; )
                        switch (i.prev = i.next) {
                        case 0:
                            return i.prev = 0,
                            o = new s.Contract(e.address,e.interface,a),
                            i.next = 4,
                            Promise.all(n.map((function(e) {
                                return o[t].apply(o, (0,
                                r.Z)(e))
                            }
                            )));
                        case 4:
                            return d = i.sent,
                            i.abrupt("return", d);
                        case 8:
                            i.prev = 8,
                            i.t0 = i.catch(0),
                            console.error("useSingleContractMultipleDataV2 :: ", i.t0, e, t);
                        case 11:
                        case "end":
                            return i.stop()
                        }
                }
                ), i, null, [[0, 8]])
            }
            ))), {
                revalidateOnFocus: !1
            })
        }
        function m(e, t, n) {
            var i, r = (0,
            d.useMemo)((function() {
                return null !== n && void 0 !== n && n.length ? n : null
            }
            ), [n]), o = v(e, t, r && [r]);
            return f(f({}, o), {}, {
                data: null === o || void 0 === o || null === (i = o.data) || void 0 === i ? void 0 : i[0]
            })
        }
    },
    80072: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var i = n(62639)
          , r = n(93350)
          , o = n(85893);
        function a(e) {
            var t = e.children;
            return (0,
            o.jsx)(c, {
                children: t
            })
        }
        var c = (0,
        r.default)(i.Zb).withConfig({
            displayName: "AppInvestorsAccountBody__BodyWrapper",
            componentId: "sc-16a9ec9-0"
        })(["position:relative;width:100%;z-index:5;border-radius:6px;box-sizing:border-box;background:transparent;box-shadow:none;padding:0;@media screen and (max-width:790px){padding:16px 0;}"])
    },
    41220: function(e, t, n) {
        "use strict";
        n(577);
        var i = n(41810)
          , r = n(67294)
          , o = n(93350)
          , a = n(95218)
          , c = n(85893);
        t.Z = function(e) {
            var t = e.children
              , n = (0,
            i.$G)().t;
            return (0,
            r.useEffect)((function() {
                "ethereum"in window && (window.ethereum.autoRefreshOnNetworkChange = !1),
                window.addEventListener("error", (function() {
                    var e;
                    null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists")
                }
                ))
            }
            ), []),
            (0,
            c.jsx)(c.Fragment, {
                children: (0,
                c.jsx)(a.Z, {
                    title: n("Your NFT deck"),
                    children: (0,
                    c.jsx)(s, {
                        children: (0,
                        c.jsx)(d, {
                            children: t
                        })
                    })
                })
            })
        }
        ;
        var s = o.default.div.withConfig({
            displayName: "InvestorsAccountContainer__AppWrapper",
            componentId: "sc-1ikiq3v-0"
        })(["display:flex;flex-flow:column;align-items:flex-start;overflow-x:hidden;width:100%;"])
          , d = o.default.div.withConfig({
            displayName: "InvestorsAccountContainer__BodyWrapper",
            componentId: "sc-1ikiq3v-1"
        })(["display:flex;flex-direction:column;box-sizing:border-box;overflow-y:auto;overflow-x:hidden;z-index:1;justify-content:center;padding:42px 0;width:100%;height:auto;background:transparent;@media screen and (max-width:1170px){padding:0;}@media screen and (max-width:850px){padding:22px 0;}"])
    },
    95218: function(e, t, n) {
        "use strict";
        var i = n(82212)
          , r = n(47235)
          , o = n(47646)
          , a = n(10247)
          , c = (n(67294),
        n(24451))
          , s = n(93350)
          , d = n(85893)
          , l = function e(t) {
            var n = t.children
              , s = t.title
              , l = t.withBtn
              , u = void 0 === l || l
              , p = t.text
              , h = t.multipleChains
              , f = t.content
              , v = (0,
            c.$G)().t
              , m = (0,
            r.he)()
              , x = (0,
            o.x)()
              , g = x.updateChainId
              , C = x.chainId
              , w = h || [i.a_.MAINNET, i.a_.BSCTESTNET]
              , b = C && w.includes(C)
              , j = function(e, t) {
                var n = (0,
                c.$G)().t;
                if (e && t) {
                    var i, r = null === t || void 0 === t || null === (i = t.reduce((function(t, n) {
                        return e.includes(n.chainId) && (t += "".concat(null === n || void 0 === n ? void 0 : n.title, ",")),
                        t
                    }
                    ), "")) || void 0 === i ? void 0 : i.slice(0, -1);
                    return "".concat(n("This section is available on"), " ").concat(r, ".\n        \n ").concat(n("Please switch the network"))
                }
                return null
            }(h, m);
            return b ? (0,
            d.jsxs)(d.Fragment, {
                children: [" ", n || "", " "]
            }) : (0,
            d.jsx)(e.Wrapper, {
                children: (0,
                d.jsxs)(e.Message, {
                    children: [(0,
                    d.jsx)("h2", {
                        children: s
                    }), (0,
                    d.jsx)("p", {
                        children: j || p || v("This section is only available on Binance Smart Chain. Please switch the network")
                    }), u && (0,
                    d.jsxs)(e.Button, {
                        onClick: function() {
                            g(m[0].chainId)
                        },
                        children: [(0,
                        d.jsx)(a.Z, {}), (0,
                        d.jsx)("p", {
                            className: "text",
                            children: v("Connect Binance Smart Chain")
                        })]
                    }), f || ""]
                })
            })
        };
        l.Wrapper = s.default.div.withConfig({
            displayName: "AvailableChain__Wrapper",
            componentId: "sc-1jzq9hs-0"
        })(["width:100%;display:flex;justify-content:center;margin-top:153px;margin-bottom:153px;"]),
        l.Message = s.default.div.withConfig({
            displayName: "AvailableChain__Message",
            componentId: "sc-1jzq9hs-1"
        })(["width:738px;min-height:272px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#ffffff;border-radius:6px;h2{font-style:normal;font-weight:bold;font-size:32px;line-height:40px;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-bottom:8px;}p{font-weight:500;font-size:18px;line-height:24px;text-align:center;letter-spacing:0.3px;color:#8990a5;margin-bottom:32px;max-width:500px;}@media screen and (max-width:768px){padding:10px 24px;}@media screen and (max-width:480px){width:100%;p{font-size:14px;}}"]),
        l.Button = s.default.button.withConfig({
            displayName: "AvailableChain__Button",
            componentId: "sc-1jzq9hs-2"
        })(["border:1px solid #6c5dd3;box-sizing:border-box;border-radius:6px;padding:14px 24px 14px 24px;background:transparent;cursor:pointer;display:flex;align-items:center;max-width:303px;max-height:48px;p{margin:0;padding-left:16px;font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;white-space:nowrap;}transition:background-color 200ms ease-in-out,color 200ms ease-in-out;:hover{background-color:#6c5dd3;> *{color:white;}}@media screen and (max-width:480px){width:100%;p{font-size:12px;white-space:inherit;}}"]),
        t.Z = l
    },
    21852: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return h
            }
        });
        var i = n(55553)
          , r = n(85893)
          , o = function() {
            return (0,
            r.jsxs)("svg", {
                width: "16",
                height: "17",
                viewBox: "0 0 16 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                r.jsx)("path", {
                    d: "M10.4943 1.01343L13.3671 2.67204C15.7489 4.04718 16.0176 8.04096 13.9672 11.5924C11.9167 15.1438 8.32371 16.9081 5.94189 15.5329L3.06909 13.8743",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }), (0,
                r.jsx)("path", {
                    opacity: "0.5",
                    d: "M15.2603 6.1229L12.5305 4.54688",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }), (0,
                r.jsx)("path", {
                    opacity: "0.5",
                    d: "M13.1969 12.3913L10.4066 10.7803",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }), (0,
                r.jsx)("path", {
                    opacity: "0.5",
                    d: "M14.9966 8.45755L12.5599 7.05075",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }), (0,
                r.jsx)("path", {
                    opacity: "0.5",
                    d: "M11.7666 14.0517L9.32996 12.6449",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }), (0,
                r.jsx)("path", {
                    opacity: "0.5",
                    d: "M14.2735 10.5263L11.4833 8.91531",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }), (0,
                r.jsx)("path", {
                    opacity: "0.5",
                    d: "M9.87697 15.4471L7.14722 13.8711",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }), (0,
                r.jsx)("path", {
                    d: "M10.9573 9.85575C9.89954 11.6879 8.4564 13.0351 7.00589 13.7474C5.55119 14.4616 4.15688 14.5123 3.09484 13.8992C2.03281 13.286 1.37956 12.0532 1.2708 10.4362C1.16234 8.82391 1.60752 6.9005 2.66531 5.06835C3.7231 3.2362 5.16624 1.88896 6.61676 1.17674C8.07146 0.462457 9.46576 0.411757 10.5278 1.02493C11.5898 1.63809 12.2431 2.87095 12.3518 4.48789C12.4603 6.10019 12.0151 8.0236 10.9573 9.85575Z",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                }), (0,
                r.jsx)("path", {
                    opacity: "0.5",
                    d: "M9.08722 8.77454C8.38898 9.98392 7.4764 10.8833 6.59368 11.3738C5.69872 11.871 4.93783 11.9017 4.42046 11.603C3.90308 11.3043 3.54925 10.63 3.53238 9.60632C3.51573 8.59666 3.83836 7.35663 4.5366 6.14724C5.23484 4.93785 6.14742 4.03843 7.03014 3.54801C7.9251 3.0508 8.68599 3.02006 9.20336 3.31877C9.72074 3.61747 10.0746 4.29179 10.0914 5.31546C10.1081 6.32512 9.78546 7.56515 9.08722 8.77454Z",
                    stroke: "#6C5DD3",
                    strokeWidth: "1.2",
                    strokeLinecap: "round"
                })]
            })
        }
          , a = n(41810)
          , c = n(11163)
          , s = n(4536)
          , d = n(62639)
          , l = n(87654)
          , u = n(93350)
          , p = n(79308);
        var h = function() {
            var e = (0,
            a.$G)().t
              , t = (0,
            c.useRouter)();
            return (0,
            r.jsxs)(f, {
                children: [(0,
                r.jsx)(l.p, {
                    href: s.Z.tokenHolderArea,
                    children: (0,
                    r.jsxs)(v, {
                        fullwidth: !0,
                        variant: t.pathname === s.Z.tokenHolderArea ? "primary" : "tertiary",
                        children: [(0,
                        r.jsx)(m, {
                            active: t.pathname === s.Z.tokenHolderArea,
                            size: 16,
                            children: (0,
                            r.jsx)(i.G, {})
                        }), e("ALM token stats")]
                    })
                }), (0,
                r.jsx)(l.p, {
                    href: s.Z.collection,
                    children: (0,
                    r.jsxs)(v, {
                        fullwidth: !0,
                        variant: t.pathname === s.Z.collection ? "primary" : "tertiary",
                        children: [(0,
                        r.jsx)(m, {
                            active: t.pathname === s.Z.collection,
                            size: 16,
                            children: (0,
                            r.jsx)(o, {})
                        }), e("My collection")]
                    })
                })]
            })
        }
          , f = (0,
        u.default)(d.kC).withConfig({
            displayName: "NftNavTabs__NavWrap",
            componentId: "sc-ujjfkr-0"
        })(["max-width:482px;margin-top:56px;padding:8px;border:1px solid #d2d6e5;border-radius:6px;& > a{flex:1;&:first-child{margin-right:8px;}}@media ", "{max-width:100%;& > a:first-child{min-width:175px;}}"], p.mq.down(p.AV.sm))
          , v = (0,
        u.default)(d.zx).withConfig({
            displayName: "NftNavTabs__NftButton",
            componentId: "sc-ujjfkr-1"
        })(["@media (max-width:568px){padding:0 16px;}"])
          , m = u.default.div.withConfig({
            displayName: "NftNavTabs__IconWrapper",
            componentId: "sc-ujjfkr-2"
        })(["display:flex;flex-flow:column nowrap;align-items:center;justify-content:center;margin-right:8px;& > img,span{height:", ";width:", ";}svg{path{stroke:", ";}}", "{align-items:flex-end;}"], (function(e) {
            var t = e.size;
            return t ? "".concat(t, "px") : "32px"
        }
        ), (function(e) {
            var t = e.size;
            return t ? "".concat(t, "px") : "32px"
        }
        ), (function(e) {
            return e.active ? "#FFF" : "#6C5DD3"
        }
        ), (function(e) {
            return e.theme.mediaQueries.lg
        }
        ))
    },
    94e3: function(e, t, n) {
        "use strict";
        n.d(t, {
            T8: function() {
                return i
            },
            Ex: function() {
                return r
            },
            xH: function() {
                return o
            }
        });
        var i = [{
            id: 6,
            img: "/video/nft/common-necesse.mp4",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !1,
            cardsCount: 0
        }, {
            id: 7,
            img: "/video/nft/uncommon-regno.mp4",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !1,
            cardsCount: 0
        }, {
            id: 8,
            img: "/video/nft/rare-altum.mp4",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !1,
            cardsCount: 0
        }, {
            id: 9,
            img: "/video/nft/epic-castus.mp4",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !1,
            cardsCount: 0
        }, {
            id: 10,
            img: "/video/nft/legendary-illustris.mp4",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !1,
            cardsCount: 0
        }]
          , r = [{
            id: 5,
            img: "/images/nft/strategy-1.gif",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !0,
            cardsCount: 0
        }]
          , o = [{
            id: 1,
            img: "https://gateway.pinata.cloud/ipfs/QmNZuNGKW9oqx6dfVwV6X9jCCdUrGZfcZD4jBYXZxfMJjj",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !0,
            cardsCount: 0
        }, {
            id: 2,
            img: "/images/nft/private-2.gif",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !0,
            cardsCount: 0
        }, {
            id: 3,
            img: "/images/nft/private-3.gif",
            headline: "Strategical Partnership",
            cards: "0",
            cost: "100 000 BUSD",
            tokens: "575 000 ALM",
            price: 1e5,
            privateCall: !0,
            cardsCount: 0
        }]
    },
    67224: function(e, t, n) {
        "use strict";
        n.d(t, {
            G: function() {
                return i
            }
        });
        var i = function(e) {
            return [{
                id: 1,
                name: e("Private Pool One"),
                description: "",
                privateCall: !0
            }, {
                id: 2,
                name: e("Private Pool Two"),
                description: "",
                privateCall: !0
            }, {
                id: 3,
                name: e("Private Pool Three"),
                description: "",
                privateCall: !0
            }, {
                id: 5,
                name: e("Strategical Pool One"),
                description: "",
                privateCall: !0
            }, {
                id: 6,
                name: e("Public Pool Necesse"),
                description: "",
                privateCall: !1
            }, {
                id: 7,
                name: e("Public Pool Regno"),
                description: "",
                privateCall: !1
            }, {
                id: 8,
                name: e("Public Pool Altum"),
                description: "",
                privateCall: !1
            }, {
                id: 9,
                name: e("Public Pool Castus"),
                description: "",
                privateCall: !1
            }, {
                id: 10,
                name: e("Public Pool Illustris"),
                description: "",
                privateCall: !1
            }]
        }
    },
    577: function() {}
}]);
