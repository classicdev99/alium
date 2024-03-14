"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4035], {
    33497: function(e, n, t) {
        t.d(n, {
            P: function() {
                return p
            }
        });
        var o = t(80318)
          , r = t(41810)
          , i = t(71568)
          , a = t(62639)
          , c = t(62268)
          , l = t(59476)
          , d = t(93350)
          , s = t(79308)
          , u = t(85893)
          , p = function e(n) {
            var t = n.currencyInfo
              , d = n.onCurrencySelect
              , s = n.currencyList
              , p = n.selectedNetwork
              , f = n.onSelectNetwork
              , h = n.networks
              , g = (0,
            r.$G)().t
              , m = t || {
                currency: null,
                loading: !1
            }
              , x = m.currency
              , w = m.loading
              , y = null !== x && void 0 !== x && x.symbol ? function(e) {
                return null !== e && void 0 !== e && e.symbol && e.symbol.length > 20 ? "".concat(e.symbol.slice(0, 4), "...").concat(e.symbol.slice(e.symbol.length - 5, e.symbol.length)) : null === e || void 0 === e ? void 0 : e.symbol
            }(x) : g("Select a token")
              , v = (0,
            a.dd)((0,
            u.jsx)(l.n, {
                selectedNetwork: p,
                onSelectNetwork: f,
                onCurrencySelect: d,
                selectedCurrency: x,
                currencyList: s,
                networks: h
            }))
              , b = (0,
            o.Z)(v, 1)[0];
            return w ? (0,
            u.jsx)(a.Od, {
                height: 40,
                width: 100
            }) : (0,
            u.jsx)(e.Root, {
                onClick: b,
                children: (0,
                u.jsxs)(e.Select, {
                    children: [(0,
                    u.jsx)(c.Z, {
                        currency: x,
                        size: "24px",
                        style: {
                            background: "".concat(i.dw.harp)
                        }
                    }), (0,
                    u.jsx)(e.Symbol, {
                        children: y
                    }), (0,
                    u.jsx)(a.ch, {})]
                })
            })
        };
        p.Root = d.default.div.withConfig({
            displayName: "MultiCurrencySelect__Root",
            componentId: "sc-roskjt-0"
        })(["background:", ";border-radius:8px;padding:8px;width:fit-content;cursor:pointer;"], i.dw.gray),
        p.Select = d.default.div.withConfig({
            displayName: "MultiCurrencySelect__Select",
            componentId: "sc-roskjt-1"
        })(["display:flex;align-items:center;> svg{width:16px;height:16px;&:last-child{padding-left:7px;}}"]),
        p.Symbol = d.default.p.withConfig({
            displayName: "MultiCurrencySelect__Symbol",
            componentId: "sc-roskjt-2"
        })(["margin-left:8px;margin-right:10px;", ";color:", ";white-space:nowrap;"], s.cp.UR.medium, i.dw.heading)
    },
    56413: function(e, n, t) {
        t.d(n, {
            y: function() {
                return N
            }
        });
        var o = t(44431)
          , r = t.n(o)
          , i = t(68084)
          , a = t(41810)
          , c = t(67294)
          , l = t(85754)
          , d = t(74080)
          , s = t(60963)
          , u = t(62840)
          , p = t(45049)
          , f = t(51246)
          , h = t(93350)
          , g = t(79308)
          , m = t(62639)
          , x = t(49729)
          , w = t(85893)
          , y = function e(n) {
            var t = n.loading
              , o = n.balance
              , r = n.showMax
              , i = n.onMax
              , c = n.currency
              , l = (0,
            a.$G)().t
              , d = (0,
            m.aQ)().account;
            return (0,
            w.jsx)(e.Root, {
                children: d && c && (0,
                w.jsxs)(w.Fragment, {
                    children: [(0,
                    w.jsx)(e.Balance, {
                        children: t ? (0,
                        w.jsx)(x.Z, {
                            children: l("Balance loading")
                        }) : l("Balance {{balance}}", {
                            balance: (0,
                            s.E)(o)
                        })
                    }), (0,
                    w.jsx)(e.Max, {
                        children: r && (0,
                        w.jsx)(m.zx, {
                            onClick: i,
                            size: "sm",
                            variant: "text",
                            buttonType: "max",
                            children: l("MAX")
                        })
                    })]
                })
            })
        };
        y.Root = h.default.div.withConfig({
            displayName: "MultiCurrencyBalance__Root",
            componentId: "sc-1v68h8a-0"
        })(["display:flex;flex-direction:column;align-items:flex-end;"]),
        y.Balance = h.default.div.withConfig({
            displayName: "MultiCurrencyBalance__Balance",
            componentId: "sc-1v68h8a-1"
        })(["", " color:", ";"], g.cp.Vz.medium, (function(e) {
            return e.theme.colors.basic
        }
        )),
        y.Max = h.default.div.withConfig({
            displayName: "MultiCurrencyBalance__Max",
            componentId: "sc-1v68h8a-2"
        })(["padding-top:9px;"]);
        var v, b = t(33497);
        !function(e) {
            e[e.NO_ERROR = 0] = "NO_ERROR",
            e[e.HAS_ERROR = 1] = "HAS_ERROR",
            e[e.HAS_WARNING = 2] = "HAS_WARNING"
        }(v || (v = {}));
        var C = function e(n) {
            var t = n.warningType
              , o = n.message;
            return t === v.NO_ERROR ? (0,
            w.jsx)(w.Fragment, {}) : (0,
            w.jsxs)(e.Root, {
                children: [t === v.HAS_WARNING && (0,
                w.jsxs)(e.Warning, {
                    children: [(0,
                    w.jsx)(m.aN, {}), (0,
                    w.jsx)("p", {
                        children: o
                    })]
                }), t === v.HAS_ERROR && (0,
                w.jsx)(e.Error, {
                    children: o
                })]
            })
        };
        C.Root = h.default.div.withConfig({
            displayName: "MultiCurrencyWarning__Root",
            componentId: "sc-1sfb73y-0"
        })(["", ""], g.cp.Vz.medium),
        C.Warning = h.default.div.withConfig({
            displayName: "MultiCurrencyWarning__Warning",
            componentId: "sc-1sfb73y-1"
        })(["display:flex;align-items:end;gap:5px;color:", ";svg{width:14px;height:14px;}"], (function(e) {
            return e.theme.colors.failure
        }
        )),
        C.Error = h.default.div.withConfig({
            displayName: "MultiCurrencyWarning__Error",
            componentId: "sc-1sfb73y-2"
        })(["color:", ";"], (function(e) {
            return e.theme.colors.pureRed
        }
        ));
        var j = t(47235)
          , k = t(69293)
          , _ = function e(n) {
            var t = n.selectedNetwork
              , o = n.onSelectNetwork
              , r = n.networks
              , i = (0,
            c.useState)(!1)
              , a = i[0]
              , l = i[1]
              , d = (0,
            c.useMemo)((function() {
                return !r.length
            }
            ), [r])
              , s = (0,
            c.useMemo)((function() {
                return (0,
                j.Hy)(t)
            }
            ), [t])
              , u = (0,
            c.useRef)();
            (0,
            k.Z)(u, (function() {
                l(!1)
            }
            ));
            var p = (null === s || void 0 === s ? void 0 : s.icon) || e.UnknownChainLogo;
            return (0,
            w.jsxs)(e.Wrapper, {
                children: [(0,
                w.jsxs)(e.Label, {
                    disabled: d,
                    onClick: function() {
                        d || l(!0)
                    },
                    children: [!!p && (0,
                    w.jsx)(p, {}), null === s || void 0 === s ? void 0 : s.title, d ? (0,
                    w.jsx)("div", {}) : (0,
                    w.jsx)(m.ch, {})]
                }), a && (0,
                w.jsx)(e.Dropdown, {
                    ref: u,
                    children: null === r || void 0 === r ? void 0 : r.map((function(n) {
                        var r = n.icon
                          , i = n.title
                          , a = n.chainId;
                        return (0,
                        w.jsxs)(e.DropdownItem, {
                            active: a === t,
                            onClick: function() {
                                null === o || void 0 === o || o(a),
                                l(!1)
                            },
                            children: [r && (0,
                            w.jsx)(r, {
                                className: "network-icon"
                            }), (0,
                            w.jsx)("p", {
                                children: i
                            })]
                        }, a)
                    }
                    ))
                })]
            })
        };
        function N(e) {
            var n, t = e.value, o = e.onUserInput, c = e.onMax, f = e.showMaxButton, h = e.checkMax, g = e.label, m = void 0 === g ? (0,
            u.V)(132, "Input") : g, x = e.onCurrencySelect, j = e.currencyInfo, k = e.disabled, I = e.currencyList, R = e.selectedNetwork, O = e.onSelectNetwork, S = e.error, M = e.networks, P = e.warning, E = e.loading, A = (0,
            a.$G)().t, W = (0,
            l.a)().account, L = (0,
            i._h)(null !== W && void 0 !== W ? W : void 0, null !== (n = null === j || void 0 === j ? void 0 : j.currency) && void 0 !== n ? n : void 0), D = !!W && !(null === j || void 0 === j || !j.currency) && f, Z = L && new (r())((0,
            d.C)(L)), B = new (r())(t), H = h && B.gt(Z);
            var z = (H || !!P) && v.HAS_WARNING
              , U = S && v.HAS_ERROR || z || v.NO_ERROR
              , G = H ? A("Insufficient funds") : P || (S || "");
            return (0,
            w.jsxs)(N.Root, {
                warningType: U,
                children: [(0,
                w.jsxs)(N.Row, {
                    children: [(0,
                    w.jsxs)(N.SettingCol, {
                        children: [(0,
                        w.jsx)(N.Label, {
                            children: m
                        }), (0,
                        w.jsx)(_, {
                            selectedNetwork: R,
                            onSelectNetwork: O,
                            networks: M
                        }), (0,
                        w.jsx)(b.P, {
                            selectedNetwork: R,
                            onSelectNetwork: O,
                            currencyInfo: j,
                            onCurrencySelect: x,
                            currencyList: I,
                            networks: M
                        })]
                    }), (0,
                    w.jsxs)(N.InputRow, {
                        children: [(0,
                        w.jsx)(y, {
                            loading: !Z,
                            balance: L,
                            showMax: D,
                            onMax: function() {
                                c((0,
                                s.E)(L, null))
                            },
                            currency: null === j || void 0 === j ? void 0 : j.currency
                        }), E ? (0,
                        w.jsx)(N.LoaderContainer, {
                            children: (0,
                            w.jsx)(p.a, {})
                        }) : (0,
                        w.jsx)(N.Input, {
                            value: t,
                            onUserInput: function(e) {
                                o(e)
                            },
                            disabled: k
                        })]
                    })]
                }), (0,
                w.jsx)(N.Warning, {
                    children: (0,
                    w.jsx)(C, {
                        warningType: U,
                        message: G
                    })
                })]
            })
        }
        _.Wrapper = h.default.div.withConfig({
            displayName: "MultiNetworksSelect__Wrapper",
            componentId: "sc-1rkeybg-0"
        })(["position:relative;margin-bottom:8px;"]),
        _.Label = h.default.div.withConfig({
            displayName: "MultiNetworksSelect__Label",
            componentId: "sc-1rkeybg-1"
        })(["", " transition:0.3s all ease;display:flex;align-items:center;width:fit-content;color:", ";gap:4px;&:hover{opacity:0.7;}", " > svg{width:16px;margin:1px 0;height:16px;&:last-child{padding-left:7px;}}"], (function(e) {
            return !e.disabled && "cursor: pointer;"
        }
        ), (function(e) {
            return e.theme.colors.darkBlue
        }
        ), g.cp.Vz.bolder),
        _.UnknownChainLogo = h.default.div.withConfig({
            displayName: "MultiNetworksSelect__UnknownChainLogo",
            componentId: "sc-1rkeybg-2"
        })(["background:silver;border-radius:50%;width:16px;height:16px;"]),
        _.DropdownChevron = (0,
        h.default)(_.Label).withConfig({
            displayName: "MultiNetworksSelect__DropdownChevron",
            componentId: "sc-1rkeybg-3"
        })(["width:100%;display:flex;justify-content:flex-end;svg{transform:rotate(180deg);}"]),
        _.Dropdown = h.default.div.withConfig({
            displayName: "MultiNetworksSelect__Dropdown",
            componentId: "sc-1rkeybg-4"
        })(["position:absolute;height:auto;background:#ffffff;box-shadow:0 6px 12px rgba(185,189,208,0.4);border-radius:8px;padding:2px;z-index:99;@media ", "{max-height:205px;overflow-y:scroll;}"], g.mq.down(g.AV.sm)),
        _.DropdownItem = h.default.div.withConfig({
            displayName: "MultiNetworksSelect__DropdownItem",
            componentId: "sc-1rkeybg-5"
        })(["padding:9px 8px 9px 28px;min-width:150px;display:flex;align-items:center;cursor:pointer;transition:0.3s all ease;position:relative;& .network-icon{position:absolute;left:6px;top:50%;width:16px;height:16px;transform:translateY(-50%);}", ""], (function(e) {
            var n = e.theme
              , t = e.active;
            return (0,
            h.css)(["&:hover{background:", ";border-radius:6px;}p{", ";color:", ";}&:hover{& p{color:", ";}}"], n.colors.grayTwo, g.cp.YH.regular, t ? "#0b1359" : "#8990A5", n.colors.primary)
        }
        )),
        N.Root = h.default.div.withConfig({
            displayName: "MultiCurrencyInputPanel__Root",
            componentId: "sc-1n9u8d7-0"
        })(["background:#f4f5fa;border:1px solid ", ";border-radius:16px;padding:10px 12px 6px;"], (function(e) {
            switch (e.warningType) {
            case v.HAS_ERROR:
                return "#FF4D00";
            case v.HAS_WARNING:
                return "#FFA100";
            default:
                return "transparent"
            }
        }
        )),
        N.Row = h.default.div.withConfig({
            displayName: "MultiCurrencyInputPanel__Row",
            componentId: "sc-1n9u8d7-1"
        })(["display:flex;"]),
        N.Label = h.default.div.withConfig({
            displayName: "MultiCurrencyInputPanel__Label",
            componentId: "sc-1n9u8d7-2"
        })(["", " padding-bottom:10px;color:", ";"], g.cp.A6.medium, (function(e) {
            return e.theme.colors.heading
        }
        )),
        N.SettingCol = h.default.div.withConfig({
            displayName: "MultiCurrencyInputPanel__SettingCol",
            componentId: "sc-1n9u8d7-3"
        })(["width:-webkit-fill-available;min-width:160px;"]),
        N.InputRow = h.default.div.withConfig({
            displayName: "MultiCurrencyInputPanel__InputRow",
            componentId: "sc-1n9u8d7-4"
        })(["width:100%;display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;"]),
        N.Input = (0,
        h.default)(f.Z).withConfig({
            displayName: "MultiCurrencyInputPanel__Input",
            componentId: "sc-1n9u8d7-5"
        })(["width:100%;text-align:right;max-height:40px;", " font-weight:600;caret-color:", ";&::placeholder{color:", ";}color:", ";caret-color:", ";"], g.cp.Eb.regular, (function(e) {
            return e.theme.colors.heading
        }
        ), (function(e) {
            return e.theme.colors.basic
        }
        ), (function(e) {
            return e.theme.colors.heading
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        )),
        N.Warning = h.default.div.withConfig({
            displayName: "MultiCurrencyInputPanel__Warning",
            componentId: "sc-1n9u8d7-6"
        })(["margin-top:9px;"]),
        N.LoaderContainer = h.default.div.withConfig({
            displayName: "MultiCurrencyInputPanel__LoaderContainer",
            componentId: "sc-1n9u8d7-7"
        })(["height:40px;display:flex;align-items:center;"])
    },
    38434: function(e, n, t) {
        t.d(n, {
            y: function() {
                return r
            }
        });
        var o = {
            translations: [],
            setTranslations: function() {}
        }
          , r = (0,
        t(67294).createContext)(o)
    },
    74080: function(e, n, t) {
        t.d(n, {
            C: function() {
                return o
            }
        });
        var o = function(e) {
            return null === e || void 0 === e ? void 0 : e.toExact()
        }
    },
    62840: function(e, n, t) {
        t.d(n, {
            i: function() {
                return a
            },
            V: function() {
                return c
            }
        });
        var o = t(38434)
          , r = t(67294)
          , i = /%(.*?)%/
          , a = function(e, n, t) {
            var o = e.find((function(e) {
                return e.data.stringId === n
            }
            ));
            if (o) {
                var r = o.data.text;
                return r.includes("%") ? function(e, n) {
                    var t = i.exec(e)[0]
                      , o = e.split(" ").indexOf(t)
                      , r = n.split(" ")[o];
                    return e.replace(t, r)
                }(r, t) : r
            }
            return t
        }
          , c = function(e, n) {
            var t = (0,
            r.useContext)(o.y).translations;
            return "error" === t[0] ? n : t.length > 0 ? a(t, e, n) : null
        }
    },
    16062: function(e, n, t) {
        var o = t(92809)
          , r = t(10219)
          , i = t(58551)
          , a = t(23075)
          , c = t(41810)
          , l = (t(67294),
        t(62639))
          , d = t(93350)
          , s = t(13580)
          , u = t(85893)
          , p = ["title", "containerCss", "onClick"];
        function f(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n && (o = o.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, o)
            }
            return t
        }
        function h(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? f(Object(t), !0).forEach((function(n) {
                    (0,
                    o.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        n.Z = function(e) {
            var n = e.title
              , t = e.containerCss
              , o = e.onClick
              , d = void 0 === o ? function() {}
            : o
              , f = (0,
            r.Z)(e, p)
              , m = (0,
            c.$G)().t
              , x = (0,
            i.Z)()
              , w = x.login
              , y = x.logout
              , v = (0,
            a.Z)(w, y).onPresentConnectModal;
            return (0,
            u.jsx)(g, {
                style: t || {},
                children: (0,
                u.jsx)(l.zx, h(h({
                    onClick: function() {
                        d(),
                        v()
                    }
                }, f), {}, {
                    children: f.alt ? (0,
                    u.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        children: [(0,
                        u.jsx)("div", {
                            className: "icon",
                            children: (0,
                            u.jsx)(s.r, {})
                        }), m("Connect")]
                    }) : (0,
                    u.jsx)("div", {
                        children: n || m("Unlock Wallet")
                    })
                }))
            })
        }
        ;
        var g = d.default.div.withConfig({
            displayName: "ConnectWalletButton__StyledButtonUnlockWallet",
            componentId: "sc-1tw5t7p-0"
        })(["button{width:100%;margin-top:10px;}.icon{margin-right:18px;}"])
    },
    49729: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return i
            }
        });
        var o = t(93350)
          , r = (0,
        o.keyframes)(["0%,20%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0);}40%{color:white;text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0);}60%{text-shadow:0.25em 0 0 white,0.5em 0 0 rgba(0,0,0,0);}80%,100%{text-shadow:0.25em 0 0 white,0.5em 0 0 white;}"])
          , i = o.default.div.withConfig({
            displayName: "DotsAnimate",
            componentId: "sc-18dv9ju-0"
        })(["&:after{content:'...';animation:", " 1s steps(5,end) infinite;}"], r)
    },
    51246: function(e, n, t) {
        var o = t(92809)
          , r = t(10219)
          , i = t(67294)
          , a = t(93578)
          , c = t(93350)
          , l = t(85893)
          , d = ["value", "onUserInput", "placeholder"];
        function s(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n && (o = o.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                t.push.apply(t, o)
            }
            return t
        }
        function u(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? s(Object(t), !0).forEach((function(n) {
                    (0,
                    o.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var p = c.default.input.withConfig({
            displayName: "NumericalInput__StyledInput",
            componentId: "sc-p4cey4-0"
        })(["color:", ";width:0;position:relative;font-weight:500;outline:none;border:none;flex:1 1 auto;background-color:transparent;font-size:16px;text-align:", ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0;-webkit-appearance:textfield;::-webkit-search-decoration{-webkit-appearance:none;}[type='number']{-moz-appearance:textfield;}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;}::placeholder{color:#8990a5;}"], (function(e) {
            var n = e.error
              , t = e.theme;
            return n ? t.colors.failure : t.colors.text
        }
        ), (function(e) {
            var n = e.align;
            return n && n
        }
        ))
          , f = RegExp("^\\d*(?:\\\\[.])?\\d*$")
          , h = (0,
        i.memo)((function(e) {
            var n = e.value
              , t = e.onUserInput
              , o = e.placeholder
              , i = (0,
            r.Z)(e, d);
            return (0,
            l.jsx)(p, u(u({}, i), {}, {
                value: n,
                onChange: function(e) {
                    var n;
                    ("" === (n = e.target.value.replace(/,/g, ".")) || f.test((0,
                    a.hr)(n))) && t(n)
                },
                inputMode: "decimal",
                title: "Token Amount",
                autoComplete: "off",
                autoCorrect: "off",
                type: "text",
                pattern: "^[0-9]*[.,]?[0-9]*$",
                placeholder: o || "0.0",
                minLength: 1,
                maxLength: 79,
                spellCheck: "false"
            }))
        }
        ));
        n.Z = h
    }
}]);
