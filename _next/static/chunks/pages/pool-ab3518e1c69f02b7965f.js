(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3393], {
    67978: function(n, t, e) {
        "use strict";
        e.d(t, {
            U: function() {
                return r
            }
        });
        var o = e(82212)
          , r = function(n) {
            var t = Object.values(o.mX);
            return !!(null === t || void 0 === t ? void 0 : t.find((function(t) {
                var e, o;
                return (null === (e = t.symbol) || void 0 === e ? void 0 : e.toLocaleLowerCase()) === (null === n || void 0 === n || null === (o = n.symbol) || void 0 === o ? void 0 : o.toLocaleLowerCase())
            }
            )))
        }
    },
    41822: function(n, t, e) {
        "use strict";
        e.r(t),
        e.d(t, {
            __N_SSG: function() {
                return Y
            },
            default: function() {
                return V
            }
        });
        var o = e(21891)
          , r = e(81731)
          , i = e(80318)
          , d = e(31266)
          , a = e(10530)
          , u = e(68084)
          , c = e(67294)
          , l = e(85754)
          , s = e(20181)
          , f = e(41810)
          , p = e(11163)
          , x = e(4536)
          , m = e(62639)
          , g = e(20623)
          , h = e(98846)
          , y = e(53322)
          , v = e(41954)
          , w = e(76483)
          , b = e(92809)
          , j = e(58551)
          , C = e(23075)
          , _ = e(38434)
          , k = e(62840)
          , N = function() {
            var n = (0,
            c.useContext)(_.y).translations;
            return function(t, e) {
                return "error" === n[0] ? e : n.length > 0 ? (0,
                k.i)(n, t, e) : e
            }
        }
          , O = e(85893);
        function I(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }
                ))),
                e.push.apply(e, o)
            }
            return e
        }
        function P(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(e), !0).forEach((function(t) {
                    (0,
                    b.Z)(n, t, e[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : I(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }
                ))
            }
            return n
        }
        var S = function(n) {
            var t = N()
              , e = (0,
            j.Z)()
              , o = e.login
              , r = e.logout
              , i = (0,
            C.Z)(o, r).onPresentConnectModal;
            return (0,
            O.jsx)(m.zx, P(P({
                onClick: i
            }, n), {}, {
                children: t(292, "Unlock Wallet")
            }))
        }
          , z = e(93350)
          , L = e(99629)
          , q = w.wD.body
          , Z = c.memo((function() {
            var n = function() {
                var n = (0,
                l.a)().account
                  , t = (0,
                s.B3)()
                  , e = (0,
                a.Aq)()
                  , o = e.factory
                  , r = e.initCodeHash
                  , f = (0,
                c.useMemo)((function() {
                    return t.map((function(n) {
                        return {
                            liquidityToken: (0,
                            s.Ce)(n, o, r),
                            tokens: n
                        }
                    }
                    ))
                }
                ), [o, t, r])
                  , p = (0,
                c.useMemo)((function() {
                    return f.map((function(n) {
                        return n.liquidityToken
                    }
                    ))
                }
                ), [f])
                  , x = (0,
                u.v2)(null !== n && void 0 !== n ? n : void 0, p)
                  , m = (0,
                i.Z)(x, 2)
                  , g = m[0]
                  , h = m[1]
                  , y = (0,
                c.useMemo)((function() {
                    return f.filter((function(n) {
                        var t, e = n.liquidityToken;
                        return null === (t = g[e.address]) || void 0 === t ? void 0 : t.greaterThan("0")
                    }
                    ))
                }
                ), [f, g])
                  , v = (0,
                d.z)(y.map((function(n) {
                    return n.tokens
                }
                )), e).pairs
                  , w = h || (null === v || void 0 === v ? void 0 : v.length) < y.length || (null === v || void 0 === v ? void 0 : v.some((function(n) {
                    return !n
                }
                )));
                return {
                    data: v.map((function(n) {
                        return (0,
                        i.Z)(n, 2)[1]
                    }
                    )).filter((function(n) {
                        return Boolean(n)
                    }
                    )),
                    loading: w
                }
            }()
              , t = n.data
              , e = n.loading
              , m = (0,
            p.useRouter)()
              , b = (0,
            c.useContext)(z.ThemeContext)
              , j = (0,
            l.a)().account
              , C = (0,
            f.$G)().t;
            return (0,
            O.jsxs)(D, {
                children: [(0,
                O.jsx)(r.I, {
                    activeIndex: 1
                }), (0,
                O.jsxs)(L.Z, {
                    children: [(0,
                    O.jsx)(W, {
                        children: (0,
                        O.jsx)(r.w, {
                            title: C("Liquidity"),
                            description: C("Add liquidity to receive LP tokens"),
                            settingsModalTitle: C("Liquidity Creation Settings")
                        })
                    }), (0,
                    O.jsxs)(A, {
                        singleBlock: (null === t || void 0 === t ? void 0 : t.length) > 0,
                        children: [j ? (0,
                        O.jsx)(M, {
                            id: "join-pool-button",
                            onClick: function() {
                                m.push(x.Z.addByOne(o.V.defaultToken))
                            },
                            children: C("Add Liquidity")
                        }) : (0,
                        O.jsx)(S, {
                            style: {
                                whiteSpace: "nowrap"
                            }
                        }), (0,
                        O.jsx)("div", {
                            children: 0 === (null === t || void 0 === t ? void 0 : t.length) && (0,
                            O.jsxs)(O.Fragment, {
                                children: [(0,
                                O.jsxs)(R, {
                                    children: [(0,
                                    O.jsx)(T, {
                                        color: b.colors.text,
                                        children: C("Your Liquidity")
                                    }), (0,
                                    O.jsx)(v.Z, {
                                        text: C("When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.")
                                    })]
                                }), j ? e ? (0,
                                O.jsx)(g.hl, {
                                    children: (0,
                                    O.jsx)(q, {
                                        color: b.colors.textDisabled,
                                        textAlign: "center",
                                        children: (0,
                                        O.jsx)(h.b, {
                                            children: C("Loading")
                                        })
                                    })
                                }) : (null === t || void 0 === t ? void 0 : t.length) > 0 ? (0,
                                O.jsx)(O.Fragment, {
                                    children: t.map((function(n) {
                                        return (0,
                                        O.jsx)(y.ZP, {
                                            pair: n
                                        }, n.liquidityToken.address)
                                    }
                                    ))
                                }) : (0,
                                O.jsx)(g.hl, {
                                    children: (0,
                                    O.jsx)(q, {
                                        color: b.colors.textDisabled,
                                        textAlign: "center",
                                        children: C("No liquidity found.")
                                    })
                                }) : (0,
                                O.jsx)(g.hl, {
                                    children: (0,
                                    O.jsx)(q, {
                                        color: b.colors.textDisabled,
                                        textAlign: "center",
                                        style: {
                                            fontSize: "14px"
                                        },
                                        children: C("Connect to a wallet to view your liquidity.")
                                    })
                                })]
                            })
                        })]
                    }), (null === t || void 0 === t ? void 0 : t.length) > 0 && (0,
                    O.jsxs)(B, {
                        children: [(0,
                        O.jsxs)(R, {
                            found: !0,
                            children: [(0,
                            O.jsx)(T, {
                                color: b.colors.text,
                                children: C("Your Liquidity")
                            }), (0,
                            O.jsx)(v.Z, {
                                text: C("When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.")
                            })]
                        }), (0,
                        O.jsx)(F, {
                            children: t.map((function(n) {
                                return (0,
                                O.jsx)(E, {
                                    children: (0,
                                    O.jsx)(y.ZP, {
                                        pair: n
                                    }, n.liquidityToken.address)
                                }, n.liquidityToken.address)
                            }
                            ))
                        })]
                    }), (0,
                    O.jsxs)(H, {
                        small: !0,
                        children: [C("Don't see a pool you joined?"), "\xa0", (0,
                        O.jsx)(w.m_, {
                            id: "import-pool-link",
                            href: "/find",
                            children: C("Import it.")
                        })]
                    })]
                })]
            })
        }
        ))
          , D = z.default.div.withConfig({
            displayName: "Pool__CardWrapper",
            componentId: "sc-1f10loj-0"
        })(["width:100%;"])
          , T = (0,
        z.default)(m.xv).withConfig({
            displayName: "Pool__StyledText",
            componentId: "sc-1f10loj-1"
        })(["font-weight:500;"])
          , A = z.default.div.withConfig({
            displayName: "Pool__StyledCardBody",
            componentId: "sc-1f10loj-2"
        })(["display:flex;justify-content:space-between;padding:34px 24px 32px 24px;align-items:center;height:114px;border-bottom:1px solid #f4f5fa;& > div{text-align:center;&:last-child{flex-basis:80%;}&:first-child{display:flex;> button{margin-top:0;}}}& > a{width:173px;}@media screen and (max-width:461px){flex-direction:column-reverse;height:196px;padding:32px 16px;", " > div{flex-basis:60%;}> button{width:100%;}}"], (function(n) {
            return n.singleBlock && (0,
            z.css)(["height:96px;flex-direction:row;padding-left:16px;& > div{flex-basis:0 !important;}"])
        }
        ))
          , R = z.default.div.withConfig({
            displayName: "Pool__StyledLiquidity",
            componentId: "sc-1f10loj-3"
        })(["display:flex;align-items:center;justify-content:center;margin-bottom:5px;@media screen and (max-width:414px){padding-left:24px;}", ""], (function(n) {
            return n.found && "\n    justify-content: flex-start;\n    border-bottom: 1px solid #F4F5FA;\n    padding: 16px;\n  "
        }
        ))
          , B = z.default.div.withConfig({
            displayName: "Pool__StyledYourLiquidity",
            componentId: "sc-1f10loj-4"
        })(["margin:24px;border:1px solid #f4f5fa;box-sizing:border-box;border-radius:6px;@media screen and (max-width:376px){margin:16px;}"])
          , F = z.default.div.withConfig({
            displayName: "Pool__StyledFoundLiquidity",
            componentId: "sc-1f10loj-5"
        })(["padding:8px 0px;overflow-y:auto;> div:not(:last-child){border-bottom:1px solid #f4f5fa;}"])
          , E = z.default.div.withConfig({
            displayName: "Pool__StyledFullPositionCard",
            componentId: "sc-1f10loj-6"
        })(["div{padding:6px 6px 6px 2px;border:none;&:hover{border:none;}}> a{width:auto !important;}> div > div > div div{&:last-child{justify-content:flex-start;}&:last-child a{margin-right:20px;}}&:last-child{> div{border:none;}}@media screen and (max-width:576px){div{}}"])
          , M = (0,
        z.default)(m.zx).withConfig({
            displayName: "Pool__AddLiquidityBtn",
            componentId: "sc-1f10loj-7"
        })(["width:143px;padding:0 21px;flex-shrink:0;"])
          , H = (0,
        z.default)(m.xv).withConfig({
            displayName: "Pool__NoJoinedPoolText",
            componentId: "sc-1f10loj-8"
        })(["width:fit-content;margin:16px auto;@media screen and (min-width:", "){margin:16px 24px;}"], "768px")
          , W = z.default.div.withConfig({
            displayName: "Pool__StyledPageHeader",
            componentId: "sc-1f10loj-9"
        })(["border-bottom:1px solid #f4f5fa;padding:26px 24px 26px 24px;> div h2{font-size:18px;}@media screen and (max-width:376px){padding:20px 16px;}"])
          , G = Z
          , U = e(51260)
          , Y = !0
          , V = function() {
            return (0,
            O.jsx)(U.Z, {
                children: (0,
                O.jsx)(G, {})
            })
        }
    },
    38434: function(n, t, e) {
        "use strict";
        e.d(t, {
            y: function() {
                return r
            }
        });
        var o = {
            translations: [],
            setTranslations: function() {}
        }
          , r = (0,
        e(67294).createContext)(o)
    },
    21340: function(n, t, e) {
        "use strict";
        e.d(t, {
            i: function() {
                return p
            }
        });
        var o = e(30266)
          , r = e(809)
          , i = e.n(r)
          , d = e(82212)
          , a = e(8198)
          , u = e(87660)
          , c = e(39529)
          , l = e(206)
          , s = function() {
            var n = (0,
            o.Z)(i().mark((function n(t, e, o) {
                var r, s, f, p, x, m;
                return i().wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0,
                            n.next = 3,
                            (0,
                            u.V)(o);
                        case 3:
                            if (r = n.sent) {
                                n.next = 6;
                                break
                            }
                            return n.abrupt("return", null);
                        case 6:
                            return s = new c.Contract(d.nU[o],l.jr,r),
                            f = new a.vU(t),
                            p = e.map((function(n) {
                                return [n.address.toLowerCase(), f.encodeFunctionData(n.name, n.params)]
                            }
                            )),
                            n.next = 11,
                            s.tryAggregate(!1, p);
                        case 11:
                            return x = n.sent,
                            m = x.map((function(n, t) {
                                return n.success ? f.decodeFunctionResult(e[t].name, n.returnData) : null
                            }
                            )),
                            n.abrupt("return", m);
                        case 16:
                            throw n.prev = 16,
                            n.t0 = n.catch(0),
                            new Error(n.t0);
                        case 19:
                        case "end":
                            return n.stop()
                        }
                }
                ), n, null, [[0, 16]])
            }
            )));
            return function(t, e, o) {
                return n.apply(this, arguments)
            }
        }()
          , f = e(3019)
          , p = function() {
            var n = (0,
            o.Z)(i().mark((function n(t, e) {
                var o, r, d;
                return i().wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return o = f.g.getState(),
                            r = o._currentChainId,
                            d = r,
                            n.abrupt("return", s(t, e, d));
                        case 3:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )));
            return function(t, e) {
                return n.apply(this, arguments)
            }
        }()
    },
    62840: function(n, t, e) {
        "use strict";
        e.d(t, {
            i: function() {
                return d
            },
            V: function() {
                return a
            }
        });
        var o = e(38434)
          , r = e(67294)
          , i = /%(.*?)%/
          , d = function(n, t, e) {
            var o = n.find((function(n) {
                return n.data.stringId === t
            }
            ));
            if (o) {
                var r = o.data.text;
                return r.includes("%") ? function(n, t) {
                    var e = i.exec(n)[0]
                      , o = n.split(" ").indexOf(e)
                      , r = t.split(" ")[o];
                    return n.replace(e, r)
                }(r, e) : r
            }
            return e
        }
          , a = function(n, t) {
            var e = (0,
            r.useContext)(o.y).translations;
            return "error" === e[0] ? t : e.length > 0 ? d(e, n, t) : null
        }
    },
    61964: function(n, t, e) {
        "use strict";
        e.d(t, {
            lg: function() {
                return i
            },
            Tz: function() {
                return d
            }
        });
        var o = e(93350)
          , r = o.default.div.withConfig({
            displayName: "Column",
            componentId: "sc-1x4hx4s-0"
        })(["display:flex;flex-direction:column;justify-content:flex-start;"])
          , i = (0,
        o.default)(r).withConfig({
            displayName: "Column__ColumnCenter",
            componentId: "sc-1x4hx4s-1"
        })(["width:100%;align-items:center;"])
          , d = o.default.div.withConfig({
            displayName: "Column__AutoColumn",
            componentId: "sc-1x4hx4s-2"
        })(["display:grid;grid-auto-rows:auto;grid-row-gap:", ";justify-items:", ";", ""], (function(n) {
            var t = n.gap;
            return ("sm" === t ? "8px" : "md" === t && "12px") || "lg" === t && "24px" || t
        }
        ), (function(n) {
            var t = n.justify;
            return t && t
        }
        ), (function(n) {
            return n.triggerMobile && "\n    @media screen and (max-width: 576px){\n        padding: 0 !important;\n        > div > div {\n          font-size: 11px;\n        }\n         > div > div > div{\n          font-size: 11px;\n        }\n    }\n  "
        }
        ));
        t.ZP = r
    },
    20623: function(n, t, e) {
        "use strict";
        e.d(t, {
            hl: function() {
                return i
            },
            h2: function() {
                return d
            }
        });
        var o = e(93350);
        e(85012),
        e(85893);
        var r = o.default.div.withConfig({
            displayName: "CommonCard",
            componentId: "sc-5gra09-0"
        })(["width:100%;padding:", ";border:", ";border-radius:", ";"], (function(n) {
            return n.padding
        }
        ), (function(n) {
            return n.border
        }
        ), (function(n) {
            return n.borderRadius
        }
        ))
          , i = (0,
        o.default)(r).withConfig({
            displayName: "CommonCard__LightCard",
            componentId: "sc-5gra09-1"
        })(["border:1px solid ", ";background-color:", ";"], (function(n) {
            return n.theme.colors.invertedContrast
        }
        ), (function(n) {
            return n.theme.colors.invertedContrast
        }
        ))
          , d = (0,
        o.default)(r).withConfig({
            displayName: "CommonCard__GreyCard",
            componentId: "sc-5gra09-2"
        })(["background-color:", ";padding:8px;border-radius:6px;"], (function(n) {
            return n.theme.colors.tertiary
        }
        ));
        (0,
        o.default)(r).withConfig({
            displayName: "CommonCard__OutlineCard",
            componentId: "sc-5gra09-3"
        })(["border:1px solid ", ";"], (function(n) {
            return n.theme.colors.tertiary
        }
        )),
        (0,
        o.default)(r).withConfig({
            displayName: "CommonCard__YellowCard",
            componentId: "sc-5gra09-4"
        })(["background-color:rgba(243,132,30,0.05);color:", ";font-weight:500;"], (function(n) {
            return n.theme.colors.binance
        }
        )),
        (0,
        o.default)(r).withConfig({
            displayName: "CommonCard__PinkCard",
            componentId: "sc-5gra09-5"
        })(["background-color:rgba(255,0,122,0.03);color:", ";font-weight:500;"], (function(n) {
            return n.theme.colors.primary
        }
        )),
        (0,
        o.default)(r).withConfig({
            displayName: "CommonCard__BlueCardStyled",
            componentId: "sc-5gra09-6"
        })(["background-color:", ";color:", ";border-radius:12px;width:fit-content;"], (function(n) {
            return n.theme.colors.primaryDark
        }
        ), (function(n) {
            return n.theme.colors.primary
        }
        ))
    },
    99270: function(n, t, e) {
        "use strict";
        e.d(t, {
            Z: function() {
                return d
            }
        });
        var o = e(93350)
          , r = e(62268)
          , i = e(85893);
        function d(n) {
            var t, e, o = n.currency0, a = n.currency1, u = n.size, c = void 0 === u ? 16 : u, l = n.margin, s = void 0 !== l && l, f = n.sizes, p = f || {
                sizeA: c,
                sizeB: c
            };
            return (0,
            i.jsxs)(d.Root, {
                sizeraw: c,
                margin: s,
                children: [o && (0,
                i.jsx)(r.Z, {
                    currency: o,
                    size: "".concat(null === p || void 0 === p || null === (t = p.sizeA) || void 0 === t ? void 0 : t.toString(), "px")
                }), a && (0,
                i.jsx)(r.Z, {
                    currency: a,
                    size: "".concat(null === p || void 0 === p || null === (e = p.sizeB) || void 0 === e ? void 0 : e.toString(), "px")
                })]
            })
        }
        d.Root = o.default.div.withConfig({
            displayName: "DoubleLogo__Root",
            componentId: "sc-boxkii-0"
        })(["position:relative;display:flex;flex-direction:row;min-width:48px;margin-right:8px;> *:last-child{position:absolute;left:20px;z-index:2;padding:4px !important;}> *:first-child{padding:4px !important;z-index:4;}"])
    },
    42: function(n, t, e) {
        "use strict";
        e.d(t, {
            m0: function() {
                return d
            },
            v3: function() {
                return a
            },
            BA: function() {
                return u
            },
            DA: function() {
                return c
            }
        });
        var o = e(60419)
          , r = e(93350)
          , i = (0,
        r.default)(o.xu).withConfig({
            displayName: "Row",
            componentId: "sc-1gm39fw-0"
        })(["width:100%;display:flex;padding:0;align-items:", ";padding:", ";border:", ";border-radius:", ";"], (function(n) {
            return n.align || "center"
        }
        ), (function(n) {
            return n.padding
        }
        ), (function(n) {
            return n.border
        }
        ), (function(n) {
            return n.borderRadius
        }
        ))
          , d = (0,
        r.default)(i).withConfig({
            displayName: "Row__RowBetween",
            componentId: "sc-1gm39fw-1"
        })(["justify-content:space-between;"])
          , a = r.default.div.withConfig({
            displayName: "Row__RowFlat",
            componentId: "sc-1gm39fw-2"
        })(["display:flex;align-items:center;"])
          , u = (0,
        r.default)(i).withConfig({
            displayName: "Row__AutoRow",
            componentId: "sc-1gm39fw-3"
        })(["flex-wrap:wrap;margin:", ";justify-content:", ";& > *{margin:", " !important;}"], (function(n) {
            var t = n.gap;
            return t && "-".concat(t)
        }
        ), (function(n) {
            var t = n.justify;
            return t && t
        }
        ), (function(n) {
            return n.gap
        }
        ))
          , c = (0,
        r.default)(i).withConfig({
            displayName: "Row__RowFixed",
            componentId: "sc-1gm39fw-4"
        })(["width:fit-content;margin:", ";"], (function(n) {
            var t = n.gap;
            return t && "-".concat(t)
        }
        ));
        t.ZP = i
    },
    76483: function(n, t, e) {
        "use strict";
        e.d(t, {
            W1: function() {
                return a
            },
            m_: function() {
                return u
            },
            wD: function() {
                return x
            }
        });
        e(67294);
        var o = e(78268)
          , r = e(93350)
          , i = e(87654)
          , d = e(85893);
        (0,
        r.default)(o.Z).withConfig({
            displayName: "Common__CloseIcon",
            componentId: "sc-k9xj6s-0"
        })(["cursor:pointer;"]);
        var a = r.default.button.withConfig({
            displayName: "Common__LinkStyledButton",
            componentId: "sc-k9xj6s-1"
        })(["border:none;text-decoration:none;background:none;cursor:", ";color:", ";font-weight:500;:hover{text-decoration:", ";}:focus{outline:none;text-decoration:", ";}:active{text-decoration:none;}"], (function(n) {
            return n.disabled ? "default" : "pointer"
        }
        ), (function(n) {
            var t = n.theme;
            return n.disabled ? t.colors.textSubtle : t.colors.primary
        }
        ), (function(n) {
            return n.disabled ? null : "underline"
        }
        ), (function(n) {
            return n.disabled ? null : "underline"
        }
        ))
          , u = (0,
        r.default)(i.p).withConfig({
            displayName: "Common__StyledInternalLink",
            componentId: "sc-k9xj6s-2"
        })(["text-decoration:none;cursor:pointer;color:", ";font-weight:500;:hover{text-decoration:underline;}:focus{outline:none;text-decoration:underline;}:active{text-decoration:none;}"], (function(n) {
            return n.theme.colors.primary
        }
        ));
        (0,
        r.default)(i.p.Multiple).withConfig({
            displayName: "Common__StyledLink",
            componentId: "sc-k9xj6s-3"
        })(["text-decoration:none;cursor:pointer;color:", ";font-weight:500;:hover{text-decoration:underline;}:focus{outline:none;text-decoration:underline;}:active{text-decoration:none;}"], (function(n) {
            return n.theme.colors.primary
        }
        ));
        var c = (0,
        r.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
        r.default.img.withConfig({
            displayName: "Common__Spinner",
            componentId: "sc-k9xj6s-4"
        })(["animation:2s ", " linear infinite;width:16px;height:16px;"], c),
        (0,
        r.default)(u).withConfig({
            displayName: "Common__BackArrowLink",
            componentId: "sc-k9xj6s-5"
        })(["color:", ";"], (function(n) {
            return n.theme.colors.text
        }
        ));
        var l = e(92809)
          , s = e(62639);
        function f(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }
                ))),
                e.push.apply(e, o)
            }
            return e
        }
        function p(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(e), !0).forEach((function(t) {
                    (0,
                    l.Z)(n, t, e[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : f(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }
                ))
            }
            return n
        }
        var x = {
            main: function(n) {
                return (0,
                d.jsx)(s.xv, p({}, n))
            },
            link: function(n) {
                return (0,
                d.jsx)(s.xv, p({}, n))
            },
            black: function(n) {
                return (0,
                d.jsx)(s.xv, p({}, n))
            },
            body: function(n) {
                return (0,
                d.jsx)(s.xv, p({}, n))
            },
            largeHeader: function(n) {
                return (0,
                d.jsx)(s.xv, p({
                    bold: !0,
                    fontSize: "24px"
                }, n))
            },
            mediumHeader: function(n) {
                return (0,
                d.jsx)(s.xv, p({
                    bold: !0,
                    fontSize: "20px"
                }, n))
            },
            subHeader: function(n) {
                return (0,
                d.jsx)(s.xv, p({
                    fontSize: "14px"
                }, n))
            },
            blue: function(n) {
                return (0,
                d.jsx)(s.xv, p({}, n))
            },
            darkGray: function(n) {
                return (0,
                d.jsx)(s.xv, p({}, n))
            },
            italic: function(n) {
                return (0,
                d.jsx)(s.xv, p({
                    fontSize: "12px",
                    style: {
                        fontStyle: "italic"
                    }
                }, n))
            },
            error: function(n) {
                return (0,
                d.jsx)(s.xv, p({
                    color: "failure"
                }, n))
            }
        }
    },
    36657: function(n, t, e) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/pool", function() {
            return e(41822)
        }
        ])
    }
}, function(n) {
    n.O(0, [588, 7676, 8912, 2906, 7409, 5892, 1731, 3735, 9774, 2888, 179], (function() {
        return t = 36657,
        n(n.s = t);
        var t
    }
    ));
    var t = n.O();
    _N_E = t
}
]);
