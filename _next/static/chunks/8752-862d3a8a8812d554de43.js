"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8752], {
    13580: function(e, n, t) {
        t.d(n, {
            r: function() {
                return c
            }
        });
        var r, o, i = t(67294);
        function a() {
            return (a = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function c(e) {
            return i.createElement("svg", a({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = i.createElement("path", {
                opacity: .5,
                d: "M12 8.327v7.326M15.666 11.99H8.333",
                stroke: "#fff",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), o || (o = i.createElement("path", {
                clipRule: "evenodd",
                d: "M16.686 2H7.314C4.048 2 2 4.312 2 7.585v8.83C2 19.688 4.038 22 7.314 22h9.372C19.962 22 22 19.688 22 16.415v-8.83C22 4.312 19.962 2 16.686 2z",
                stroke: "#fff",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
    },
    67978: function(e, n, t) {
        t.d(n, {
            U: function() {
                return o
            }
        });
        var r = t(82212)
          , o = function(e) {
            var n = Object.values(r.mX);
            return !!(null === n || void 0 === n ? void 0 : n.find((function(n) {
                var t, r;
                return (null === (t = n.symbol) || void 0 === t ? void 0 : t.toLocaleLowerCase()) === (null === e || void 0 === e || null === (r = e.symbol) || void 0 === r ? void 0 : r.toLocaleLowerCase())
            }
            )))
        }
    },
    87298: function(e, n, t) {
        t.d(n, {
            z: function() {
                return u
            }
        });
        var r = t(30266)
          , o = t(809)
          , i = t.n(o)
          , a = t(9669)
          , c = t.n(a)
          , d = function() {
            var e = (0,
            r.Z)(i().mark((function e(n, t, r, o) {
                var a, c, d;
                return i().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (a = window.ethereum,
                            c = (null === t || void 0 === t ? void 0 : t.length) >= 11 ? null === t || void 0 === t ? void 0 : t.slice(0, 11) : t,
                            !a) {
                                e.next = 6;
                                break
                            }
                            return e.next = 5,
                            a.request({
                                method: "wallet_watchAsset",
                                params: {
                                    type: "ERC20",
                                    options: {
                                        address: n,
                                        symbol: c,
                                        decimals: r,
                                        image: o
                                    }
                                }
                            });
                        case 5:
                            d = e.sent;
                        case 6:
                            return e.abrupt("return", d);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(n, t, r, o) {
                return e.apply(this, arguments)
            }
        }()
          , l = t(47646)
          , s = t(67294)
          , u = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , t = arguments.length > 2 ? arguments[2] : void 0
              , o = (0,
            s.useState)(!1)
              , a = o[0]
              , u = o[1]
              , f = (0,
            l.x)()
              , p = f.updateChainId
              , m = f.chainId
              , h = function() {
                var o = (0,
                r.Z)(i().mark((function r() {
                    var o, l, s;
                    return i().wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                if (o = !(null === e || void 0 === e || !e.address) && e,
                                !(!a && o || n && o)) {
                                    r.next = 19;
                                    break
                                }
                                if (null === o || void 0 === o || !o.chainId || !t || m === (null === o || void 0 === o ? void 0 : o.chainId)) {
                                    r.next = 5;
                                    break
                                }
                                return r.next = 5,
                                p(null === o || void 0 === o ? void 0 : o.chainId);
                            case 5:
                                return r.prev = 5,
                                r.next = 8,
                                c().get("/api/tokenLogo", {
                                    params: {
                                        symbol: null === o || void 0 === o ? void 0 : o.symbol,
                                        address: null === o || void 0 === o ? void 0 : o.address,
                                        chainId: (null === o || void 0 === o ? void 0 : o.chainId) || m
                                    }
                                });
                            case 8:
                                return l = r.sent,
                                s = l.data,
                                r.next = 12,
                                d(o.address, o.symbol, o.decimals, (null === s || void 0 === s ? void 0 : s.url) || "");
                            case 12:
                                u(!0),
                                r.next = 17;
                                break;
                            case 15:
                                r.prev = 15,
                                r.t0 = r.catch(5);
                            case 17:
                                r.next = 20;
                                break;
                            case 19:
                                u(!0);
                            case 20:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r, null, [[5, 15]])
                }
                )));
                return function() {
                    return o.apply(this, arguments)
                }
            }();
            return {
                added: a,
                onAdd: h
            }
        }
    },
    61964: function(e, n, t) {
        t.d(n, {
            lg: function() {
                return i
            },
            Tz: function() {
                return a
            }
        });
        var r = t(93350)
          , o = r.default.div.withConfig({
            displayName: "Column",
            componentId: "sc-1x4hx4s-0"
        })(["display:flex;flex-direction:column;justify-content:flex-start;"])
          , i = (0,
        r.default)(o).withConfig({
            displayName: "Column__ColumnCenter",
            componentId: "sc-1x4hx4s-1"
        })(["width:100%;align-items:center;"])
          , a = r.default.div.withConfig({
            displayName: "Column__AutoColumn",
            componentId: "sc-1x4hx4s-2"
        })(["display:grid;grid-auto-rows:auto;grid-row-gap:", ";justify-items:", ";", ""], (function(e) {
            var n = e.gap;
            return ("sm" === n ? "8px" : "md" === n && "12px") || "lg" === n && "24px" || n
        }
        ), (function(e) {
            var n = e.justify;
            return n && n
        }
        ), (function(e) {
            return e.triggerMobile && "\n    @media screen and (max-width: 576px){\n        padding: 0 !important;\n        > div > div {\n          font-size: 11px;\n        }\n         > div > div > div{\n          font-size: 11px;\n        }\n    }\n  "
        }
        ));
        n.ZP = o
    },
    42: function(e, n, t) {
        t.d(n, {
            m0: function() {
                return a
            },
            v3: function() {
                return c
            },
            BA: function() {
                return d
            },
            DA: function() {
                return l
            }
        });
        var r = t(60419)
          , o = t(93350)
          , i = (0,
        o.default)(r.xu).withConfig({
            displayName: "Row",
            componentId: "sc-1gm39fw-0"
        })(["width:100%;display:flex;padding:0;align-items:", ";padding:", ";border:", ";border-radius:", ";"], (function(e) {
            return e.align || "center"
        }
        ), (function(e) {
            return e.padding
        }
        ), (function(e) {
            return e.border
        }
        ), (function(e) {
            return e.borderRadius
        }
        ))
          , a = (0,
        o.default)(i).withConfig({
            displayName: "Row__RowBetween",
            componentId: "sc-1gm39fw-1"
        })(["justify-content:space-between;"])
          , c = o.default.div.withConfig({
            displayName: "Row__RowFlat",
            componentId: "sc-1gm39fw-2"
        })(["display:flex;align-items:center;"])
          , d = (0,
        o.default)(i).withConfig({
            displayName: "Row__AutoRow",
            componentId: "sc-1gm39fw-3"
        })(["flex-wrap:wrap;margin:", ";justify-content:", ";& > *{margin:", " !important;}"], (function(e) {
            var n = e.gap;
            return n && "-".concat(n)
        }
        ), (function(e) {
            var n = e.justify;
            return n && n
        }
        ), (function(e) {
            return e.gap
        }
        ))
          , l = (0,
        o.default)(i).withConfig({
            displayName: "Row__RowFixed",
            componentId: "sc-1gm39fw-4"
        })(["width:fit-content;margin:", ";"], (function(e) {
            var n = e.gap;
            return n && "-".concat(n)
        }
        ));
        n.ZP = i
    },
    59476: function(e, n, t) {
        t.d(n, {
            n: function() {
                return de
            }
        });
        var r = t(41810)
          , o = t(67294)
          , i = t(62639)
          , a = t(93350)
          , c = t(79308)
          , d = t(41954)
          , l = t(80318)
          , s = t(83789)
          , u = t(47646)
          , f = t(56120)
          , p = t(33754)
          , m = t(82212)
          , h = t(87662)
          , x = function(e, n) {
            var t, r = (0,
            h.t)(n);
            return e instanceof m.WU ? null === e || void 0 === e ? void 0 : e.address : e === (null === r || void 0 === r || null === (t = r.providerParams) || void 0 === t ? void 0 : t.nativeCurrency) ? "ETHER" : ""
        }
          , v = t(84356)
          , g = t(68084)
          , y = t(85754)
          , w = t(60963)
          , C = t(71568)
          , b = t(61964)
          , j = t(62268)
          , k = t(45049)
          , _ = t(42)
          , N = t(20181);
        var I = t(67978);
        a.default.div.withConfig({
            displayName: "styleds__ModalInfo",
            componentId: "sc-16p9vda-0"
        })(["display:flex;flex-flow:row nowrap;align-items:center;padding:1rem 1rem;margin:0.25rem 0.5rem;justify-content:center;flex:1;user-select:none;"]);
        var S = (0,
        a.default)(_.DA).withConfig({
            displayName: "styleds__FadedSpan",
            componentId: "sc-16p9vda-1"
        })(["color:", ";font-size:14px;"], (function(e) {
            return e.theme.colors.primary
        }
        ))
          , R = ((0,
        a.default)(b.Tz).withConfig({
            displayName: "styleds__PaddedColumn",
            componentId: "sc-16p9vda-2"
        })(["> div:first-child{padding:16px 22px 2px 22px;}"]),
        a.default.div.withConfig({
            displayName: "styleds__Separator",
            componentId: "sc-16p9vda-3"
        })(["width:100%;height:1px;background-color:#f4f5fa;"]),
        a.default.div.withConfig({
            displayName: "styleds__SeparatorDark",
            componentId: "sc-16p9vda-4"
        })(["width:100%;height:1px;background-color:", ";"], (function(e) {
            return e.theme.colors.tertiary
        }
        )),
        t(76483))
          , L = t(85893)
          , z = R.wD.main
          , O = function(e) {
            var n = e.currency
              , t = null === n || void 0 === n ? void 0 : n.chainId
              , o = function(e, n) {
                var t;
                return !!(0,
                I.U)(n) || Boolean(n instanceof m.WU && (null === e || void 0 === e || null === (t = e[n.chainId]) || void 0 === t ? void 0 : t[n.address]))
            }((0,
            f.e)().allTokens, n)
              , i = function(e) {
                var n, t = (0,
                N.em)();
                return e instanceof m.WU && !(null === (n = t[null === e || void 0 === e ? void 0 : e.chainId]) || void 0 === n || !n[null === e || void 0 === e ? void 0 : e.address])
            }(n)
              , a = (0,
            N.QG)()
              , c = (0,
            N._E)()
              , d = (0,
            r.$G)().t;
            return (0,
            L.jsxs)(S, {
                children: [i ? (0,
                L.jsx)(z, {
                    fontWeight: 500,
                    children: (0,
                    L.jsx)(R.W1, {
                        onClick: function(e) {
                            e.stopPropagation(),
                            t && n instanceof m.WU && a(t, n.address)
                        },
                        children: d("Remove")
                    })
                }) : null, o || i ? null : (0,
                L.jsx)(z, {
                    fontWeight: 500,
                    children: (0,
                    L.jsx)(R.W1, {
                        onClick: function(e) {
                            e.stopPropagation(),
                            n instanceof m.WU && c(n)
                        },
                        children: d("Add")
                    })
                })]
            })
        }
          , M = t(87298)
          , W = t(46445)
          , D = t(52956)
          , T = t(88093)
          , Z = t(7408)
          , A = function e(n) {
            var t = n.currency
              , r = (0,
            i.aQ)().account
              , o = (0,
            M.z)(t, !0)
              , a = o.onAdd
              , c = o.added
              , d = (0,
            D.t$)(t);
            return r && !d && t ? (0,
            L.jsx)(e.Root, {
                children: (0,
                L.jsx)(T.u, {
                    text: (0,
                    L.jsx)(i.xv, {
                        typography: Z.Vz.medium,
                        children: "Display in wallet"
                    }),
                    placement: "right",
                    cssContainer: {
                        width: "auto",
                        padding: 8,
                        display: c ? "none" : "block"
                    },
                    popperStyles: {
                        popper: {
                            top: "-10px"
                        },
                        arrow: {
                            top: "9px"
                        }
                    },
                    children: (0,
                    L.jsx)(e.Border, {
                        onClick: function(e) {
                            e.stopPropagation(),
                            c || a()
                        },
                        added: c,
                        children: c ? (0,
                        L.jsx)(W.Z, {
                            height: 18,
                            width: 18,
                            stroke: C.dw.limeGreen
                        }) : (0,
                        L.jsx)(i.dt, {
                            fill: C.dw.basic
                        })
                    })
                })
            }) : null
        };
        A.Root = a.default.div.withConfig({
            displayName: "CurrencyManageWallet__Root",
            componentId: "sc-1bizhpi-0"
        })([""]),
        A.Border = a.default.div.withConfig({
            displayName: "CurrencyManageWallet__Border",
            componentId: "sc-1bizhpi-1"
        })(["background:#f4f5fa;border-radius:40px;height:24px;width:24px;display:flex;justify-content:center;align-items:center;cursor:pointer;&:hover{background:#e6e6f6;svg{fill:", ";}}"], (function(e) {
            return !e.added && C.dw.primary
        }
        ));
        var B = A
          , P = t(49318)
          , E = function e(n) {
            var t = n.currency;
            if (!(t instanceof P.D))
                return (0,
                L.jsx)("span", {});
            var r = t.tags;
            if (!r || 0 === r.length)
                return (0,
                L.jsx)("span", {});
            var o = r[0];
            return (0,
            L.jsxs)(e.Wrapper, {
                children: [(0,
                L.jsx)(T.u, {
                    text: o.description,
                    children: (0,
                    L.jsx)(e.Tag, {
                        children: o.name
                    }, o.id)
                }), r.length > 1 ? (0,
                L.jsx)(T.u, {
                    text: r.slice(1).map((function(e) {
                        var n = e.name
                          , t = e.description;
                        return "".concat(n, ": ").concat(t)
                    }
                    )).join("; \n"),
                    children: (0,
                    L.jsx)(e.Tag, {
                        children: "..."
                    })
                }) : null]
            })
        };
        E.Tag = a.default.div.withConfig({
            displayName: "TokenTags__Tag",
            componentId: "sc-1qecjac-0"
        })(["background-color:", ";color:", ";font-size:14px;border-radius:4px;padding:0.25rem 0.3rem 0.25rem 0.3rem;max-width:6rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;justify-self:flex-end;margin-right:4px;"], (function(e) {
            return e.theme.colors.tertiary
        }
        ), (function(e) {
            return e.theme.colors.textSubtle
        }
        )),
        E.Wrapper = a.default.div.withConfig({
            displayName: "TokenTags__Wrapper",
            componentId: "sc-1qecjac-1"
        })(["display:flex;justify-content:flex-end;"]);
        var U = E
          , F = function e(n) {
            var t = n.currency
              , r = n.onSelect
              , o = n.isSelected
              , i = n.otherSelected
              , a = n.style
              , c = n.chainId
              , d = (0,
            y.a)().account
              , l = x(t, c)
              , s = (0,
            g._h)(null !== d && void 0 !== d ? d : void 0, t);
            return (0,
            L.jsxs)(e.Wrapper, {
                style: a,
                className: "token-item-".concat(l),
                onClick: function() {
                    return !t || o ? null : r()
                },
                disabled: o || !t,
                selected: i,
                children: [(0,
                L.jsx)(j.Z, {
                    currency: t,
                    size: "24px"
                }), (0,
                L.jsxs)(b.ZP, {
                    children: [(0,
                    L.jsxs)(e.Flex, {
                        children: [(0,
                        L.jsx)(e.CurrencyName, {
                            title: null === t || void 0 === t ? void 0 : t.name,
                            children: null === t || void 0 === t ? void 0 : t.symbol
                        }), (0,
                        L.jsx)(B, {
                            currency: t
                        })]
                    }), t && (0,
                    L.jsx)(O, {
                        currency: t
                    })]
                }), (0,
                L.jsx)(U, {
                    currency: t
                }), (0,
                L.jsx)(_.DA, {
                    style: {
                        justifySelf: "flex-end"
                    },
                    children: s ? (0,
                    L.jsx)(e.Balance, {
                        title: null === s || void 0 === s ? void 0 : s.toExact(),
                        children: (0,
                        w.E)(s)
                    }) : d ? (0,
                    L.jsx)(k.a, {}) : null
                })]
            })
        };
        F.Wrapper = (0,
        a.default)(_.m0).withConfig({
            displayName: "CurrencyRow__Wrapper",
            componentId: "sc-ziay94-0"
        })(["padding:0 8px;height:48px !important;max-width:calc(100% - 16px);display:grid;grid-template-columns:auto minmax(auto,1fr) auto minmax(0,72px);grid-gap:8px;cursor:", ";border-radius:6px;background-color:", ";:hover{background-color:", ";}"], (function(e) {
            return !e.disabled && "pointer"
        }
        ), (function(e) {
            e.theme;
            return e.disabled && C.dw.grayish
        }
        ), (function(e) {
            e.theme;
            return !e.disabled && C.dw.grayish
        }
        )),
        F.CurrencyName = a.default.p.withConfig({
            displayName: "CurrencyRow__CurrencyName",
            componentId: "sc-ziay94-1"
        })(["", " color:", ";"], c.cp.UR.medium, (function(e) {
            return e.theme.colors.heading
        }
        )),
        F.Flex = a.default.div.withConfig({
            displayName: "CurrencyRow__Flex",
            componentId: "sc-ziay94-2"
        })(["display:flex;gap:8px;align-items:center;"]),
        F.Balance = a.default.p.withConfig({
            displayName: "CurrencyRow__Balance",
            componentId: "sc-ziay94-3"
        })(["white-space:nowrap;overflow:hidden;max-width:141px;text-overflow:ellipsis;", ";color:", ";"], c.cp.UR.regular, (function(e) {
            return e.theme.colors.heading
        }
        ));
        var G = F;
        function $(e) {
            var n = e.height
              , t = e.currencies
              , r = e.selectedCurrency
              , i = e.onCurrencySelect
              , a = e.otherCurrency
              , c = e.fixedListRef
              , d = (0,
            o.useMemo)((function() {
                return null === t || void 0 === t ? void 0 : t.reduce((function(e, n) {
                    var t = n;
                    return null !== t && void 0 !== t && t.chainId && (e = t.chainId),
                    e
                }
                ), null)
            }
            ), [t])
              , l = m.mX[d]
              , u = (0,
            o.useMemo)((function() {
                return [l].concat((0,
                s.Z)(t))
            }
            ), [t, l])
              , f = (0,
            o.useCallback)((function(e) {
                var n = e.data
                  , t = e.index
                  , o = e.style
                  , c = n[t]
                  , l = Boolean(r && (0,
                m.KA)(r, c))
                  , s = Boolean(a && (0,
                m.KA)(a, c));
                return (0,
                L.jsx)(G, {
                    style: o,
                    currency: c,
                    isSelected: l,
                    onSelect: function() {
                        return i(c)
                    },
                    otherSelected: s,
                    chainId: d
                })
            }
            ), [i, a, r, d])
              , p = (0,
            o.useCallback)((function(e, n) {
                return x(n[e], d)
            }
            ), [d]);
            return (0,
            L.jsx)(v.t7, {
                height: n,
                ref: c,
                width: "100%",
                itemData: u,
                itemCount: u.length,
                itemSize: 56,
                itemKey: p,
                children: f
            })
        }
        var q = t(11728)
          , H = t(93578)
          , V = t(61018);
        function K(e, n) {
            if (0 === n.length)
                return e;
            var t = (0,
            H.UJ)(n);
            if (t)
                return e.filter((function(e) {
                    return e.address === t
                }
                ));
            var r = n.toLowerCase().split(/\s+/).filter((function(e) {
                return e.length > 0
            }
            ));
            if (0 === r.length)
                return e;
            var o = function(e) {
                var n = e.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }
                ));
                return r.every((function(e) {
                    return 0 === e.length || n.some((function(n) {
                        return n.startsWith(e) || n.endsWith(e)
                    }
                    ))
                }
                ))
            };
            return e.filter((function(e) {
                var n = e.symbol
                  , t = e.name;
                return n && o(n) || t && o(t)
            }
            ))
        }
        var Y = t(64638)
          , J = t(87909)
          , Q = a.default.div.withConfig({
            displayName: "NetworkSelectstyle__NetworkSelectContainer",
            componentId: "sc-zf49af-0"
        })(["position:relative;border:1px solid #d2d6e5;border-radius:8px;padding:12px 14px;&[data-show='true']{", " & .drop-down{transform:rotate(180deg) translateY(50%);}}"], (function(e) {
            var n = e.theme;
            return (0,
            a.css)(["border-color:", ";"], n.colors.primary)
        }
        ))
          , X = a.default.div.withConfig({
            displayName: "NetworkSelectstyle__Label",
            componentId: "sc-zf49af-1"
        })(["cursor:pointer;position:relative;transition:0.3s all ease;width:100%;padding:0 50px 0 40px;font-weight:500;font-size:14px;line-height:20px;", " & .icon{position:absolute;left:0;top:50%;transform:translateY(-50%);}& .drop-down{position:absolute;right:0;top:50%;transform:translateY(-50%);}"], (function(e) {
            var n = e.theme;
            return (0,
            a.css)(["color:", ";"], n.colors.text)
        }
        ))
          , ee = a.default.div.withConfig({
            displayName: "NetworkSelectstyle__Dropdown",
            componentId: "sc-zf49af-2"
        })(["position:absolute;width:100%;height:auto;background:#ffffff;box-shadow:0 6px 12px rgba(185,189,208,0.4);border-radius:8px;padding:2px;z-index:99;left:0;top:calc(100% + 2px);"])
          , ne = a.default.div.withConfig({
            displayName: "NetworkSelectstyle__DropdownItem",
            componentId: "sc-zf49af-3"
        })(["padding:14px 8px 14px 46px;width:100%;display:flex;align-items:center;cursor:pointer;transition:0.3s all ease;position:relative;& .network-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);}", ""], (function(e) {
            var n = e.theme
              , t = e.active;
            return (0,
            a.css)(["&:hover{background:", ";border-radius:6px;}p{font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:0.3px;color:", ";padding-left:13px;}&:hover{& p{color:", ";}}"], n.colors.grayTwo, t ? "#0b1359" : "#8990A5", n.colors.primary)
        }
        ))
          , te = function(e) {
            var n = e.style
              , t = e.selectedNetwork
              , i = e.onSelectNetwork
              , a = e.networks
              , c = (0,
            r.$G)().t
              , d = (0,
            o.useState)(!1)
              , l = d[0]
              , s = d[1]
              , u = (0,
            o.useMemo)((function() {
                return null === a || void 0 === a ? void 0 : a.find((function(e) {
                    return (null === e || void 0 === e ? void 0 : e.chainId) === t
                }
                ))
            }
            ), [a, t])
              , f = (0,
            o.useRef)();
            (0,
            Y.Z)(f, (function() {
                s(!1)
            }
            ));
            var p = null === u || void 0 === u ? void 0 : u.icon;
            return (null === a || void 0 === a ? void 0 : a.length) < 1 ? null : (0,
            L.jsxs)(re, {
                "data-show": l,
                ref: f,
                $_css: n,
                children: [(0,
                L.jsxs)(X, {
                    onClick: function() {
                        s((function(e) {
                            return !e
                        }
                        ))
                    },
                    children: [!!p && (0,
                    L.jsx)(p, {
                        className: "icon"
                    }), (null === u || void 0 === u ? void 0 : u.title) || c("Choose Network"), (0,
                    L.jsx)(J.ch, {
                        className: "drop-down"
                    })]
                }), l && (0,
                L.jsx)(ee, {
                    children: a.map((function(e) {
                        var n = e.icon
                          , r = e.title
                          , o = e.chainId;
                        return (0,
                        L.jsxs)(ne, {
                            active: o === t,
                            onClick: function() {
                                null === i || void 0 === i || i(o)
                            },
                            children: [n && (0,
                            L.jsx)(n, {
                                className: "network-icon"
                            }), (0,
                            L.jsx)("p", {
                                children: c(r)
                            })]
                        }, o)
                    }
                    ))
                })]
            })
        }
          , re = (0,
        a.default)(Q).withConfig({
            displayName: "NetworkSelect___StyledSNetworkSelectContainer",
            componentId: "sc-18t4gj8-0"
        })(["", ""], (function(e) {
            return e.$_css
        }
        ))
          , oe = a.default.div.withConfig({
            displayName: "SortButton__StyledAscendingButton",
            componentId: "sc-1smjsd8-0"
        })(["line-height:0;transition:transform 200ms ease-in-out;", ""], (function(e) {
            return e.reversed && "transform: rotate(180deg)"
        }
        ));
        function ie(e) {
            var n = e.toggleSortOrder
              , t = e.ascending;
            return (0,
            L.jsx)(ie.Root, {
                onClick: n,
                children: t ? (0,
                L.jsx)(oe, {
                    reversed: !0,
                    children: (0,
                    L.jsx)(i.yF, {})
                }) : (0,
                L.jsx)(oe, {
                    children: (0,
                    L.jsx)(i.yF, {})
                })
            })
        }
        function ae(e, n) {
            var t = (0,
            g.uD)(n)
              , r = (0,
            o.useMemo)((function() {
                return function(e) {
                    return function(n, t) {
                        var r, o, i = (r = e[n.address],
                        o = e[t.address],
                        r && o ? r.greaterThan(o) ? -1 : r.equalTo(o) ? 0 : 1 : null !== r && void 0 !== r && r.greaterThan("0") ? -1 : null !== o && void 0 !== o && o.greaterThan("0") ? 1 : 0);
                        return 0 !== i ? i : n.symbol && t.symbol ? n.symbol.toLowerCase() < t.symbol.toLowerCase() ? -1 : 1 : n.symbol || t.symbol ? -1 : 0
                    }
                }(null !== t && void 0 !== t ? t : {})
            }
            ), [t]);
            return (0,
            o.useMemo)((function() {
                return e ? function(e, n) {
                    return -1 * r(e, n)
                }
                : r
            }
            ), [e, r])
        }
        ie.Root = (0,
        a.default)(_.DA).withConfig({
            displayName: "SortButton__Root",
            componentId: "sc-1smjsd8-1"
        })(["& > *{user-select:none;}:hover{cursor:pointer;}"]);
        function ce(e) {
            var n = e.selectedCurrency
              , t = e.onCurrencySelect
              , i = e.otherSelectedCurrency
              , c = e.onDismiss
              , d = e.isOpen
              , m = e.currencyList
              , h = e.selectedNetwork
              , x = e.onSelectNetwork
              , v = e.networks
              , g = (0,
            r.$G)().t
              , y = (0,
            u.x)().chainId
              , w = (0,
            o.useRef)()
              , C = (0,
            o.useState)("")
              , b = C[0]
              , j = C[1]
              , k = (0,
            o.useState)(!1)
              , _ = k[0]
              , N = k[1]
              , I = (0,
            f.e)().total[y]
              , S = (0,
            o.useMemo)((function() {
                return m || I && Object.keys(I).map((function(e) {
                    return I[e]
                }
                )) || []
            }
            ), [m, I])
              , R = (0,
            H.UJ)(b)
              , z = (0,
            p.d)(b)
              , O = (0,
            l.Z)(z, 1)[0]
              , M = ae(_, h)
              , W = (0,
            o.useMemo)((function() {
                return R ? O ? [O] : [] : K(S, b)
            }
            ), [R, O, S, b])
              , D = (0,
            o.useMemo)((function() {
                if (O)
                    return [O];
                var e = W.sort(M)
                  , n = b.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }
                ));
                if (n.length > 1)
                    return e;
                return function(e, n) {
                    try {
                        var t = n.findIndex((function(n) {
                            return e(n)
                        }
                        ));
                        return -1 === t ? n : [n[t]].concat((0,
                        s.Z)(n.slice(0, t)), (0,
                        s.Z)(n.slice(t + 1)))
                    } catch (r) {
                        return n
                    }
                }((function(e) {
                    return "ALM" === e.symbol
                }
                ), [].concat((0,
                s.Z)(O ? [O] : []), (0,
                s.Z)(e.filter((function(e) {
                    var t;
                    return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) === n[0]
                }
                ))), (0,
                s.Z)(e.filter((function(e) {
                    var t;
                    return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== n[0]
                }
                )))))
            }
            ), [W, b, O, M])
              , T = (0,
            o.useCallback)((function(e) {
                t(e),
                c()
            }
            ), [c, t]);
            (0,
            o.useEffect)((function() {
                d && j("")
            }
            ), [d]);
            var Z = (0,
            o.useCallback)((function(e) {
                var n;
                j(e),
                null === (n = w.current) || void 0 === n || n.scrollTo(0)
            }
            ), [])
              , A = (0,
            o.useCallback)((function(e) {
                if ("Enter" === e.key) {
                    var n;
                    b.toLowerCase().trim();
                    if (D.length > 0)
                        (null === (n = D[0].symbol) || void 0 === n ? void 0 : n.toLowerCase()) !== b.trim().toLowerCase() && 1 !== D.length || T(D[0])
                }
            }
            ), [D, T, b])
              , B = (0,
            o.useCallback)((function(e) {
                x(e),
                c()
            }
            ), [x, c]);
            return (0,
            L.jsxs)(ce.Root, {
                children: [x && (0,
                L.jsx)(ce.Row, {
                    children: (0,
                    L.jsx)(te, {
                        selectedNetwork: h,
                        onSelectNetwork: B,
                        networks: v
                    })
                }), (0,
                L.jsx)(ce.Row, {
                    children: (0,
                    L.jsx)(V.Z, {
                        onKeyDown: A,
                        wrapperCss: (0,
                        a.css)(["width:100%;opacity:1;margin:0 !important;max-width:none !important;flex-direction:row-reverse;right:0;input{padding:0;}"]),
                        iconCss: (0,
                        a.css)(["order:-1;margin:0 16px;"]),
                        placeholder: g("Search name or paste address"),
                        value: b,
                        setValue: Z
                    })
                }), (0,
                L.jsxs)(ce.Row, {
                    children: [(0,
                    L.jsxs)(ce.Label, {
                        children: [(0,
                        L.jsx)("p", {
                            children: g("Token name")
                        }), (0,
                        L.jsx)(ie, {
                            ascending: _,
                            toggleSortOrder: function() {
                                return N((function(e) {
                                    return !e
                                }
                                ))
                            }
                        })]
                    }), (0,
                    L.jsx)("div", {
                        children: (0,
                        L.jsx)(ce.VirtualList, {
                            disableWidth: !0,
                            children: function(e) {
                                var t = e.height;
                                return (0,
                                L.jsx)($, {
                                    height: t,
                                    currencies: D,
                                    onCurrencySelect: T,
                                    otherCurrency: i,
                                    selectedCurrency: n,
                                    fixedListRef: w
                                })
                            }
                        })
                    })]
                })]
            })
        }
        ce.Root = a.default.div.withConfig({
            displayName: "CurrencySearch__Root",
            componentId: "sc-r3cw9f-0"
        })(["display:flex;flex-direction:column;gap:16px;"]),
        ce.Row = a.default.div.withConfig({
            displayName: "CurrencySearch__Row",
            componentId: "sc-r3cw9f-1"
        })([""]),
        ce.VirtualList = (0,
        a.default)(q.Z).withConfig({
            displayName: "CurrencySearch__VirtualList",
            componentId: "sc-r3cw9f-2"
        })(["min-height:402px;width:calc(100% + 24px);"]),
        ce.Label = (0,
        a.default)(_.m0).withConfig({
            displayName: "CurrencySearch__Label",
            componentId: "sc-r3cw9f-3"
        })(["height:24px;margin-bottom:8px;p{", ";color:", ";}"], c.cp.UR.medium, (function(e) {
            return e.theme.colors.basic
        }
        ));
        var de = function e(n) {
            var t = n.onDismiss
              , i = n.onCurrencySelect
              , a = n.selectedCurrency
              , c = n.currencyList
              , l = n.selectedNetwork
              , s = n.onSelectNetwork
              , u = n.networks
              , f = (0,
            r.$G)().t
              , p = (0,
            o.useCallback)((function(e) {
                i(e),
                t()
            }
            ), [t, i])
              , m = (0,
            o.useMemo)((function() {
                return (0,
                L.jsxs)(e.Text, {
                    children: [f("Select a token"), (0,
                    L.jsx)(d.Z, {
                        text: f("Find a token by searching for its name or symbol or by pasting its address below.")
                    })]
                })
            }
            ), [f]);
            return (0,
            L.jsx)(e.Modal, {
                headerRender: m,
                onDismiss: t,
                children: (0,
                L.jsx)(ce, {
                    selectedNetwork: l,
                    onSelectNetwork: s,
                    onDismiss: t,
                    onCurrencySelect: p,
                    selectedCurrency: a,
                    currencyList: c,
                    isOpen: !0,
                    networks: u
                })
            })
        };
        de.Modal = (0,
        a.default)(i.u_).withConfig({
            displayName: "CurrencySearchModal__Modal",
            componentId: "sc-1que2hr-0"
        })(["max-width:450px;min-width:auto;width:100%;z-index:inherit;"]),
        de.Text = a.default.p.withConfig({
            displayName: "CurrencySearchModal__Text",
            componentId: "sc-1que2hr-1"
        })(["", ";display:flex;align-items:center;color:", ";"], c.cp.w_.medium, (function(e) {
            return e.theme.colors.heading
        }
        ))
    },
    76483: function(e, n, t) {
        t.d(n, {
            W1: function() {
                return c
            },
            m_: function() {
                return d
            },
            wD: function() {
                return m
            }
        });
        t(67294);
        var r = t(78268)
          , o = t(93350)
          , i = t(87654)
          , a = t(85893);
        (0,
        o.default)(r.Z).withConfig({
            displayName: "Common__CloseIcon",
            componentId: "sc-k9xj6s-0"
        })(["cursor:pointer;"]);
        var c = o.default.button.withConfig({
            displayName: "Common__LinkStyledButton",
            componentId: "sc-k9xj6s-1"
        })(["border:none;text-decoration:none;background:none;cursor:", ";color:", ";font-weight:500;:hover{text-decoration:", ";}:focus{outline:none;text-decoration:", ";}:active{text-decoration:none;}"], (function(e) {
            return e.disabled ? "default" : "pointer"
        }
        ), (function(e) {
            var n = e.theme;
            return e.disabled ? n.colors.textSubtle : n.colors.primary
        }
        ), (function(e) {
            return e.disabled ? null : "underline"
        }
        ), (function(e) {
            return e.disabled ? null : "underline"
        }
        ))
          , d = (0,
        o.default)(i.p).withConfig({
            displayName: "Common__StyledInternalLink",
            componentId: "sc-k9xj6s-2"
        })(["text-decoration:none;cursor:pointer;color:", ";font-weight:500;:hover{text-decoration:underline;}:focus{outline:none;text-decoration:underline;}:active{text-decoration:none;}"], (function(e) {
            return e.theme.colors.primary
        }
        ));
        (0,
        o.default)(i.p.Multiple).withConfig({
            displayName: "Common__StyledLink",
            componentId: "sc-k9xj6s-3"
        })(["text-decoration:none;cursor:pointer;color:", ";font-weight:500;:hover{text-decoration:underline;}:focus{outline:none;text-decoration:underline;}:active{text-decoration:none;}"], (function(e) {
            return e.theme.colors.primary
        }
        ));
        var l = (0,
        o.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
        o.default.img.withConfig({
            displayName: "Common__Spinner",
            componentId: "sc-k9xj6s-4"
        })(["animation:2s ", " linear infinite;width:16px;height:16px;"], l),
        (0,
        o.default)(d).withConfig({
            displayName: "Common__BackArrowLink",
            componentId: "sc-k9xj6s-5"
        })(["color:", ";"], (function(e) {
            return e.theme.colors.text
        }
        ));
        var s = t(92809)
          , u = t(62639);
        function f(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function p(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? f(Object(t), !0).forEach((function(n) {
                    (0,
                    s.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var m = {
            main: function(e) {
                return (0,
                a.jsx)(u.xv, p({}, e))
            },
            link: function(e) {
                return (0,
                a.jsx)(u.xv, p({}, e))
            },
            black: function(e) {
                return (0,
                a.jsx)(u.xv, p({}, e))
            },
            body: function(e) {
                return (0,
                a.jsx)(u.xv, p({}, e))
            },
            largeHeader: function(e) {
                return (0,
                a.jsx)(u.xv, p({
                    bold: !0,
                    fontSize: "24px"
                }, e))
            },
            mediumHeader: function(e) {
                return (0,
                a.jsx)(u.xv, p({
                    bold: !0,
                    fontSize: "20px"
                }, e))
            },
            subHeader: function(e) {
                return (0,
                a.jsx)(u.xv, p({
                    fontSize: "14px"
                }, e))
            },
            blue: function(e) {
                return (0,
                a.jsx)(u.xv, p({}, e))
            },
            darkGray: function(e) {
                return (0,
                a.jsx)(u.xv, p({}, e))
            },
            italic: function(e) {
                return (0,
                a.jsx)(u.xv, p({
                    fontSize: "12px",
                    style: {
                        fontStyle: "italic"
                    }
                }, e))
            },
            error: function(e) {
                return (0,
                a.jsx)(u.xv, p({
                    color: "failure"
                }, e))
            }
        }
    }
}]);
