"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5892], {
    62268: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return z
            }
        });
        var o, r = n(30266), c = n(809), a = n.n(c), i = n(82212), s = n(9669), l = n.n(s), u = n(47646), p = n(67294), d = n(85754), f = n(92809);
        function g(e, t) {
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
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(n), !0).forEach((function(t) {
                    (0,
                    f.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var m = b(b({}, (0,
        n(82343).L)().reduce((function(e, t) {
            return b(b({}, e), {}, (0,
            f.Z)({}, t, ""))
        }
        ), {})), {}, (o = {},
        (0,
        f.Z)(o, i.a_.BSCTESTNET, "smartchain"),
        (0,
        f.Z)(o, i.a_.MAINNET, "smartchain"),
        o))
          , v = "https://raw.githubusercontent.com/Rinance-Finance/tokens-list/main"
          , h = "".concat(v, "/common")
          , y = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/"
          , O = "".concat(v, "/polygon/images/")
          , w = "".concat(v, "/fantom/images/")
          , x = "".concat(v, "/metis/images/")
          , j = "".concat(v, "/moonriver/images/")
          , E = "".concat(v, "/moonbeam/images/")
          , T = "".concat(v, "/aurora/images/")
          , _ = "".concat(v, "/okc/images/")
          , C = {
            ALM: "".concat(h, "/images/alm.png"),
            BNB: "".concat(h, "/core/binance-logo.png"),
            WBNB: "".concat(h, "/core/binance-logo.png"),
            ETH: "".concat(h, "/core/eth.png"),
            WETH: "".concat(h, "/core/eth.png"),
            HT: "".concat(h, "/core/heco-logo.png"),
            WHT: "".concat(h, "/core/heco-logo.png"),
            FTM: "".concat(h, "/core/ftm-logo.png"),
            WFTM: "".concat(h, "/core/ftm-logo.png"),
            METIS: "".concat(h, "/core/Metis.png"),
            WMETIS: "".concat(h, "/core/Metis.png"),
            AETH: "".concat(h, "/core/eth.png"),
            GLMR: "".concat(h, "/core/Glmr.png"),
            MOVR: "".concat(h, "/core/Movr.png"),
            OKT: "".concat(h, "/core/Okt.svg"),
            WOKT: "".concat(h, "/core/Okt.svg")
        }
          , N = function(e, t, n) {
            if (C[null === t || void 0 === t ? void 0 : t.toLocaleUpperCase()])
                return C[null === t || void 0 === t ? void 0 : t.toLocaleUpperCase()];
            var o = m[n];
            if (!e)
                return "";
            switch (n) {
            case i.a_.FANTOM:
            case i.a_.FANTOM_TESTNET:
                return "".concat(w).concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), ".png");
            case i.a_.METIS:
            case i.a_.METIC_TESTNET:
                return "".concat(x).concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), "/logo.png");
            case i.a_.MATIC_MAINNET:
            case i.a_.MATIC_TESTNET:
                return "".concat(O).concat(e, "/logo.png");
            case i.a_.HECOMAINNET:
            case i.a_.HECOTESTNET:
                return "".concat("https://mdex.com/token-icons/heco/").concat(null === e || void 0 === e ? void 0 : e.toLocaleLowerCase(), ".png");
            case i.a_.MOONBASE_ALPHA:
            case i.a_.MOONRIVER:
                return "".concat(j).concat(e, "/logo.png");
            case i.a_.MOONBEAM:
                return "".concat(E).concat(e, "/logo.png");
            case i.a_.AURORA:
            case i.a_.AURORA_TESTNET:
                return "".concat(T).concat(e, "/logo.png");
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
          , k = n(93350)
          , S = n(52503)
          , M = n(10219)
          , L = n(62639)
          , I = n(85893)
          , A = ["srcs", "alt", "style", "isPlatformToken"];
        function D(e, t) {
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
                t % 2 ? D(Object(n), !0).forEach((function(t) {
                    (0,
                    f.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Z = {};
        var H = k.default.div.withConfig({
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
          , W = (0,
        k.default)((function(e) {
            var t = e.srcs
              , n = e.alt
              , o = e.style
              , r = e.isPlatformToken
              , c = (0,
            M.Z)(e, A)
              , a = (0,
            p.useState)(0)[1]
              , i = null === t || void 0 === t ? void 0 : t.find((function(e) {
                return !Z[e]
            }
            ));
            return i ? (0,
            I.jsx)(H, {
                isPlatformToken: r,
                style: o || {},
                className: "".concat((null === c || void 0 === c ? void 0 : c.className) || "", " logo-wrapper'"),
                children: (0,
                I.jsx)("img", R(R({}, c), {}, {
                    alt: n,
                    src: i,
                    onError: function() {
                        i && (Z[i] = !0),
                        a((function(e) {
                            return e + 1
                        }
                        ))
                    }
                }))
            }) : (0,
            I.jsx)(H, {
                style: o || {},
                className: "logo-wrapper",
                children: (0,
                I.jsx)(L.Ex, R({}, c))
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
          , z = (0,
        p.memo)((function(e) {
            var t, n, o, c, s = e.currency, p = e.size, f = void 0 === p ? "24px" : p, g = e.style, b = e.className, m = (0,
            P.l)(), v = m.providerParams.nativeCurrency, h = (0,
            d.a)().chainId, y = (0,
            u.x)().chainId;
            y && (h = y);
            var O = null === s || void 0 === s ? void 0 : s.symbol
              , w = null === s || void 0 === s ? void 0 : s.address
              , x = null === s || void 0 === s ? void 0 : s.logoURI
              , j = (null === (t = i.au[m.id]) || void 0 === t || null === (n = t.address) || void 0 === n ? void 0 : n.toLocaleLowerCase()) === (null === w || void 0 === w ? void 0 : w.toLocaleLowerCase()) || "alm" === (null === s || void 0 === s || null === (o = s.symbol) || void 0 === o ? void 0 : o.toLocaleLowerCase())
              , E = (0,
            S.ZP)("/api/tokenLogo/".concat(O, "/").concat(w), (0,
            r.Z)(a().mark((function e() {
                var t, n, o, r, c;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(t = E)) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", t);
                        case 3:
                            if (!(n = s === v && N(w, O, h))) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", [n]);
                        case 6:
                            return e.next = 8,
                            l().get("/api/tokenLogo", {
                                params: {
                                    symbol: O,
                                    address: w,
                                    chainId: h
                                }
                            });
                        case 8:
                            return o = e.sent,
                            r = o.data,
                            c = [r.url],
                            x && c.push(x),
                            e.abrupt("return", c);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).data
              , T = null !== E && void 0 !== E && E.length ? null === E || void 0 === E ? void 0 : E.filter((function(e) {
                return !(null === e || void 0 === e || !e.length)
            }
            )) : [];
            return (0,
            I.jsx)(W, {
                isPlatformToken: j,
                size: f,
                srcs: T,
                alt: "".concat(null !== (c = null === s || void 0 === s ? void 0 : s.symbol) && void 0 !== c ? c : "token", " logo"),
                style: g,
                className: b
            })
        }
        ))
    },
    41954: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var o = n(67294)
          , r = n(62639)
          , c = n(93350)
          , a = n(88093)
          , i = n(85893);
        function s(e) {
            var t = e.text
              , n = e.bordered
              , c = e.className
              , l = e.style
              , u = (0,
            o.useState)(!1)
              , p = u[0]
              , d = u[1]
              , f = (0,
            o.useCallback)((function() {
                return d(!0)
            }
            ), [d])
              , g = (0,
            o.useCallback)((function() {
                return d(!1)
            }
            ), [d]);
            return (0,
            i.jsx)(s.Root, {
                className: c,
                style: l || {
                    marginLeft: 4
                },
                children: (0,
                i.jsx)(a.Z, {
                    classNameContainer: "".concat(c, "__tooltip"),
                    text: t,
                    show: p,
                    children: (0,
                    i.jsx)(s.Wrapper, {
                        onClick: f,
                        onMouseEnter: f,
                        onMouseLeave: g,
                        bordered: n,
                        children: (0,
                        i.jsx)(r.by, {})
                    })
                })
            })
        }
        s.Root = c.default.span.withConfig({
            displayName: "QuestionHelper__Root",
            componentId: "sc-105kldx-0"
        })(["display:flex;"]),
        s.Wrapper = c.default.div.withConfig({
            displayName: "QuestionHelper__Wrapper",
            componentId: "sc-105kldx-1"
        })(["display:flex;align-items:center;justify-content:center;padding:0.2rem;border:none;background:none;outline:none;cursor:default;border-radius:36px;color:", ";", ";:hover,:focus{opacity:0.7;}"], (function(e) {
            return e.theme.colors.textSubtle
        }
        ), (function(e) {
            return e.bordered && "\n      border: 1px solid #d2d6e5;\n      box-sizing: border-box;\n      border-radius: 6px;\n      width: 40px;\n      height: 40px;\n    "
        }
        ))
    },
    88093: function(e, t, n) {
        n.d(t, {
            u: function() {
                return y
            },
            Z: function() {
                return h
            }
        });
        var o = n(92809)
          , r = n(10219)
          , c = n(67294)
          , a = n(93350)
          , i = n(2239)
          , s = n(45896)
          , l = n(77294);
        var u = n(85893);
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
        function d(e) {
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
            var t, n, o = e.content, r = e.show, a = e.children, s = e.placement, p = void 0 === s ? "auto" : s, g = e.popoverClassName, b = void 0 === g ? "" : g, m = e.popperStyles, v = (0,
            c.useState)(null), h = v[0], y = v[1], O = (0,
            c.useState)(null), w = O[0], x = O[1], j = (0,
            c.useState)(null), E = j[0], T = j[1], _ = (0,
            l.D)(h, w, {
                placement: p,
                strategy: "fixed",
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: [8, 8]
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: E
                    }
                }]
            }), C = _.styles, N = _.update, P = _.attributes;
            return function(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                  , o = (0,
                c.useRef)();
                (0,
                c.useEffect)((function() {
                    o.current = e
                }
                ), [e]),
                (0,
                c.useEffect)((function() {
                    function e() {
                        var e = o.current;
                        e && e()
                    }
                    if (null !== t) {
                        n && e();
                        var r = setInterval(e, t);
                        return function() {
                            return clearInterval(r)
                        }
                    }
                }
                ), [t, n])
            }((0,
            c.useCallback)((function() {
                N && N()
            }
            ), [N]), r ? 100 : null),
            (0,
            u.jsxs)(u.Fragment, {
                children: [(0,
                u.jsx)(f.ReferenceElement, {
                    ref: y,
                    children: a
                }), (0,
                u.jsx)(i.Z, {
                    children: (0,
                    u.jsxs)(f.Container, d(d({
                        className: b,
                        show: r,
                        ref: x,
                        style: d(d({}, C.popper), (null === m || void 0 === m ? void 0 : m.popper) || {})
                    }, P.popper), {}, {
                        children: [o, (0,
                        u.jsx)(f.Arrow, d({
                            className: "arrow-".concat(null !== (t = null === (n = P.popper) || void 0 === n ? void 0 : n["data-popper-placement"]) && void 0 !== t ? t : ""),
                            ref: T,
                            style: d(d({}, C.arrow), (null === m || void 0 === m ? void 0 : m.arrow) || {})
                        }, P.arrow))]
                    }))
                })]
            })
        }
        f.Container = a.default.div.withConfig({
            displayName: "Popover__Container",
            componentId: "sc-18glau2-0"
        })(["z-index:9999;visibility:", ";opacity:", ";transition:visibility 150ms linear,opacity 150ms linear;background:", ";border:1px solid ", ";box-shadow:0 4px 8px 0 ", ";color:", ";border-radius:8px;"], (function(e) {
            return e.show ? "visible" : "hidden"
        }
        ), (function(e) {
            return e.show ? 1 : 0
        }
        ), (function(e) {
            return e.theme.colors.invertedContrast
        }
        ), (function(e) {
            return e.theme.colors.tertiary
        }
        ), (0,
        s.DZ)(.9, "#2F80ED"), (function(e) {
            return e.theme.colors.textSubtle
        }
        )),
        f.ReferenceElement = a.default.div.withConfig({
            displayName: "Popover__ReferenceElement",
            componentId: "sc-18glau2-1"
        })(["display:inline-block;"]),
        f.Arrow = a.default.div.withConfig({
            displayName: "Popover__Arrow",
            componentId: "sc-18glau2-2"
        })(["width:8px;height:8px;z-index:9998;::before{position:absolute;width:8px;height:8px;z-index:9998;content:'';border:1px solid ", ";transform:rotate(45deg);background:", ";}&.arrow-top{bottom:-5px;::before{border-top:none;border-left:none;}}&.arrow-bottom{top:-5px;::before{border-bottom:none;border-right:none;}}&.arrow-left{right:-5px;::before{border-bottom:none;border-left:none;}}&.arrow-right{left:-5px;::before{border-right:none;border-top:none;}}"], (function(e) {
            return e.theme.colors.tertiary
        }
        ), (function(e) {
            return e.theme.colors.invertedContrast
        }
        ));
        var g = ["text"]
          , b = ["children"];
        function m(e, t) {
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
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(n), !0).forEach((function(t) {
                    (0,
                    o.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function h(e) {
            var t = e.text
              , n = (0,
            r.Z)(e, g);
            return (0,
            u.jsx)(f, v({
                content: (0,
                u.jsx)(h.Container, {
                    className: (null === n || void 0 === n ? void 0 : n.classNameContainer) || "",
                    style: (null === n || void 0 === n ? void 0 : n.cssContainer) || {},
                    children: t
                })
            }, n))
        }
        function y(e) {
            var t = e.children
              , n = (0,
            r.Z)(e, b)
              , o = (0,
            c.useState)(!1)
              , a = o[0]
              , i = o[1]
              , s = (0,
            c.useCallback)((function() {
                return i(!0)
            }
            ), [i])
              , l = (0,
            c.useCallback)((function() {
                return i(!1)
            }
            ), [i]);
            return (0,
            u.jsx)(h, v(v({}, n), {}, {
                show: a,
                children: (0,
                u.jsx)("div", {
                    onMouseEnter: s,
                    onMouseLeave: l,
                    children: t
                })
            }))
        }
        h.Container = a.default.div.withConfig({
            displayName: "Tooltip__Container",
            componentId: "sc-1ypuqld-0"
        })(["width:228px;padding:0.6rem 1rem;line-height:150%;font-size:11px;font-weight:400;color:#8990a5;box-shadow:0 2px 16px rgba(185,189,208,0.48);border-radius:6px;"])
    },
    95268: function(e, t, n) {
        n.d(t, {
            l: function() {
                return s
            }
        });
        var o = n(47235)
          , r = n(47646)
          , c = n(67294)
          , a = n(87662)
          , i = n(7580)
          , s = function() {
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
    }
}]);
