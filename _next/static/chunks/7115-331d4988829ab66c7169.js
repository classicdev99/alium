"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7115], {
    44434: function(e, t, n) {
        n.d(t, {
            Y: function() {
                return r
            }
        });
        n(67294);
        var i = n(85893)
          , r = function() {
            return (0,
            i.jsxs)("svg", {
                width: "80",
                height: "80",
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                i.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "78",
                    height: "78",
                    rx: "39",
                    fill: "#1EA76D",
                    fillOpacity: "0.1"
                }), (0,
                i.jsx)("path", {
                    d: "M54.1544 29.2693L34.6928 48.7309L25.8467 39.8847",
                    stroke: "#1EA76D",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                i.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "78",
                    height: "78",
                    rx: "39",
                    stroke: "#1EA76D",
                    strokeWidth: "2"
                })]
            })
        }
    },
    76216: function(e, t, n) {
        n.d(t, {
            a: function() {
                return y
            }
        });
        var i = n(92809)
          , r = n(10219)
          , o = n(59168)
          , a = (n(95339),
        n(45896))
          , s = n(67294)
          , c = n(59359)
          , d = n(7863)
          , l = n(93350)
          , p = n(85893)
          , h = ["minHeight", "maxHeight", "mobile", "isOpen"];
        function x(e, t) {
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
        var u = (0,
        d.q)(o.t9)
          , m = (0,
        l.default)(u).withConfig({
            displayName: "ExternalModal__StyledDialogOverlay",
            componentId: "sc-1sr34r0-0"
        })(["&[data-reach-dialog-overlay]{z-index:21;background-color:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:rgba(11,19,89,0.9);}"])
          , f = (0,
        d.q)(o.cZ)
          , g = (0,
        l.default)((function(e) {
            e.minHeight,
            e.maxHeight,
            e.mobile,
            e.isOpen;
            var t = (0,
            r.Z)(e, h);
            return (0,
            p.jsx)(f, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0,
                        i.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, t))
        }
        )).attrs({
            "aria-label": "dialog"
        }).withConfig({
            displayName: "ExternalModal__StyledDialogContent",
            componentId: "sc-1sr34r0-1"
        })(["&[data-reach-dialog-content]{margin:0 0 2rem 0;border:1px solid ", ";background-color:", ";box-shadow:0 4px 8px 0 ", ";padding:0;width:100%;max-width:450px;@media screen and (max-width:768px){max-width:354px;}overflow:hidden;align-self:center;", " ", " display:flex;border-radius:16px;margin:0 10px;}"], (function(e) {
            return e.theme.colors.invertedContrast
        }
        ), (function(e) {
            return e.theme.colors.invertedContrast
        }
        ), (0,
        a.DZ)(.95, "#191326"), (function(e) {
            return e.maxHeight && (0,
            l.css)(["max-height:100vh;"])
        }
        ), (function(e) {
            var t = e.minHeight;
            return t && (0,
            l.css)(["min-height:", "vh;"], t)
        }
        ))
          , y = function e(t) {
            var n = t.isOpen
              , i = t.onDismiss
              , r = t.minHeight
              , o = void 0 !== r && r
              , a = t.maxHeight
              , l = void 0 === a ? 70 : a
              , h = t.initialFocusRef
              , x = t.children
              , u = t.className
              , m = (0,
            d.Yz)(n, null, {
                config: {
                    duration: 200
                },
                from: {
                    opacity: 0
                },
                enter: {
                    opacity: 1
                },
                leave: {
                    opacity: 0
                }
            });
            return (0,
            s.useEffect)((function() {}
            ), []),
            (0,
            p.jsx)(p.Fragment, {
                children: m.map((function(t) {
                    var n = t.item
                      , r = t.key
                      , a = t.props;
                    return n && (0,
                    p.jsx)(e.Root, {
                        style: a,
                        onDismiss: i,
                        initialFocusRef: h,
                        className: u || "",
                        children: (0,
                        p.jsxs)(e.Content, {
                            "aria-label": "dialog content",
                            minHeight: o,
                            maxHeight: l,
                            mobile: c.tq,
                            children: [!h && c.tq ? (0,
                            p.jsx)("div", {
                                tabIndex: 1
                            }) : null, x]
                        })
                    }, r)
                }
                ))
            })
        };
        y.Root = (0,
        l.default)(m).withConfig({
            displayName: "ExternalModal__Root",
            componentId: "sc-1sr34r0-2"
        })([""]),
        y.Content = (0,
        l.default)(g).withConfig({
            displayName: "ExternalModal__Content",
            componentId: "sc-1sr34r0-3"
        })([""])
    },
    12873: function(e, t, n) {
        n.d(t, {
            U: function() {
                return v
            },
            Z: function() {
                return k
            }
        });
        var i = n(10219)
          , r = n(92809)
          , o = n(87298)
          , a = n(41810)
          , s = n(67294)
          , c = n(62639)
          , d = n(93350)
          , l = n(85893)
          , p = function e(t) {
            var n = t.token
              , i = (0,
            a.$G)().t
              , r = (0,
            o.z)(n)
              , s = r.added
              , d = r.onAdd;
            return null !== n && void 0 !== n && n.address ? (0,
            l.jsxs)(e.Btn, {
                onClick: d,
                variant: "secondary",
                active: s,
                children: [s ? (0,
                l.jsx)(c.md, {}) : (0,
                l.jsx)(c.Ex, {}), (0,
                l.jsx)("p", {
                    className: "text",
                    children: i(s ? "Added" : "Add token to wallet")
                })]
            }) : (0,
            l.jsx)(l.Fragment, {})
        };
        p.Btn = (0,
        d.default)(c.zx).withConfig({
            displayName: "AddTokenWallet__Btn",
            componentId: "sc-s9z1sz-0"
        })(["margin-top:24px;svg{margin-right:20px;}", ""], (function(e) {
            return e.active && "\n    border: 1px solid #1EA76D !important;\n    color: #1EA76D !important; \n\t \n\t  &:hover,\n\t  &:active {\n\t   background: transparent !important;\n\t   color: #1EA76D !important; \n\t \n\t   p {\n\t    color: #1EA76D !important; \n\t   }\n\t  }\n  "
        }
        ));
        var h = p
          , x = n(47646)
          , u = n(44434)
          , m = n(80628)
          , f = n(93578)
          , g = n(83501)
          , y = ["cancel", "hiddenTokenSymbol", "amount", "token", "txHash"];
        function j(e, t) {
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
        function b(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? j(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var w = function(e) {
            var t = e.cancel
              , n = e.children
              , i = e.withoutHeader
              , r = e.withoutWrapper
              , o = r ? s.Fragment : g.tG
              , a = r ? {} : {
                id: "transaction_wrapper"
            };
            return (0,
            l.jsxs)(o, b(b({}, a), {}, {
                children: [!i && (0,
                l.jsx)(C, {
                    children: (0,
                    l.jsx)(g.p9, {
                        onClick: t
                    })
                }), (0,
                l.jsx)(_, {
                    children: (0,
                    l.jsx)(u.Y, {})
                }), n && n]
            }))
        }
          , v = function(e) {
            var t = e.cancel
              , n = e.hiddenTokenSymbol
              , r = e.amount
              , o = e.token
              , s = e.txHash
              , c = (0,
            i.Z)(e, y)
              , d = (0,
            x.x)().chainId
              , p = (0,
            f.E8)(d, s, "transaction")
              , u = (0,
            f.lc)(d).explorerName
              , g = (0,
            a.$G)().t;
            return (0,
            l.jsx)(w, b(b({
                cancel: t
            }, c), {}, {
                children: (0,
                l.jsxs)(D, {
                    children: [(0,
                    l.jsx)("h2", {
                        className: "title",
                        children: g("Transaction completed")
                    }), (0,
                    l.jsxs)("p", {
                        children: [g("Amount"), " ", (0,
                        l.jsxs)("b", {
                            children: [r, " ", !n && (null === o || void 0 === o ? void 0 : o.symbol)]
                        })]
                    }), s && (0,
                    l.jsx)(O, {
                        children: (0,
                        l.jsxs)("a", {
                            href: p,
                            target: "_blank",
                            children: [g("Transaction completed", {
                                explorerName: u
                            }), (0,
                            l.jsx)(m.Z, {})]
                        })
                    }), (0,
                    l.jsx)(h, {
                        token: o
                    })]
                })
            }))
        }
          , k = w
          , C = (0,
        d.default)(g.Fc).withConfig({
            displayName: "TransactionCompleted__Header",
            componentId: "sc-1muywtk-0"
        })(["min-height:64px;"])
          , O = d.default.div.withConfig({
            displayName: "TransactionCompleted__ViewOnWrapper",
            componentId: "sc-1muywtk-1"
        })(["cursor:pointer;margin-top:8px;font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;display:flex;justify-content:center;align-items:center;a{display:flex;align-items:center;justify-content:center;}svg{stroke:#6c5dd3;width:18px;height:16px;}"])
          , _ = d.default.div.withConfig({
            displayName: "TransactionCompleted__ContentWrapper",
            componentId: "sc-1muywtk-2"
        })(["display:flex;flex-direction:column;justify-content:center;align-items:center;"])
          , D = (0,
        d.default)(_).withConfig({
            displayName: "TransactionCompleted__Content",
            componentId: "sc-1muywtk-3"
        })(["width:100%;font-style:normal;font-weight:500;font-size:16px;line-height:22px;text-align:center;letter-spacing:0.3px;color:#0b1359;.title{margin-top:24px;}.amount{margin-top:4px;}b{color:#1ea86d;}"])
    },
    27115: function(e, t, n) {
        n.d(t, {
            pM: function() {
                return C
            },
            rD: function() {
                return f
            },
            df: function() {
                return A
            },
            ZP: function() {
                return R
            }
        });
        var i = n(85754)
          , r = n(76216)
          , o = n(41810)
          , a = n(62639)
          , s = n(61964)
          , c = n(76803)
          , d = n(85893)
          , l = function(e) {
            var t = e.onDismiss
              , n = e.pendingText
              , i = e.hash
              , r = (0,
            o.$G)().t;
            return (0,
            d.jsx)(c.Z, {
                onCancel: t,
                children: (0,
                d.jsxs)(s.Tz, {
                    gap: "12px",
                    justify: "center",
                    style: {
                        marginTop: 24
                    },
                    children: [(0,
                    d.jsx)(s.Tz, {
                        gap: "12px",
                        justify: "center",
                        children: (0,
                        d.jsx)(a.xv, {
                            fontSize: "14px",
                            children: (0,
                            d.jsx)("strong", {
                                children: n
                            })
                        })
                    }), !i && (0,
                    d.jsx)(a.xv, {
                        fontSize: "14px",
                        children: r("Confirm this transaction in your wallet")
                    })]
                })
            })
        }
          , p = n(93350)
          , h = n(64813)
          , x = (0,
        p.default)(h.Z).withConfig({
            displayName: "TransactionErrorContent__StyledTransferError",
            componentId: "sc-1dmpai0-0"
        })(["width:100%;min-height:363px;"])
          , u = function(e) {
            var t = e.isExchange
              , n = e.onDismiss
              , i = e.onRepeat;
            return (0,
            d.jsx)(x, {
                onRepeat: i,
                onClose: n,
                withoutWrapper: !0,
                isExchange: t
            })
        }
          , m = n(12873)
          , f = function(e) {
            var t = e.onDismiss
              , n = e.hash
              , i = e.token
              , r = e.amount
              , o = e.hiddenTokenSymbol;
            return (0,
            d.jsx)(m.U, {
                hiddenTokenSymbol: o,
                amount: r || "",
                txHash: n,
                cancel: t,
                token: i,
                withoutHeader: !1
            })
        }
          , g = function(e) {
            var t = e.isOpen
              , n = e.onDismiss
              , o = e.attemptingTxn
              , a = e.hash
              , s = e.pendingText
              , c = e.content
              , p = e.token
              , h = e.amount
              , x = e.hasError
              , m = e.onRepeat
              , g = e.hiddenTokenSymbol;
            return (0,
            i.a)().chainId ? (0,
            d.jsx)(r.a, {
                isOpen: t,
                onDismiss: n,
                children: x ? (0,
                d.jsx)(u, {
                    onRepeat: m,
                    onDismiss: n,
                    isExchange: !0
                }) : o ? (0,
                d.jsx)(l, {
                    onDismiss: n,
                    pendingText: s,
                    hash: a
                }) : a ? (0,
                d.jsx)(f, {
                    hiddenTokenSymbol: g,
                    amount: h,
                    token: p,
                    hash: a,
                    onDismiss: n
                }) : c
            }) : null
        }
          , y = n(83501)
          , j = function e(t) {
            var n = t.children
              , i = t.onDismiss;
            return (0,
            d.jsxs)(e.Root, {
                children: [(0,
                d.jsx)(a.X6, {
                    children: n
                }), (0,
                d.jsx)(y.p9, {
                    onClick: i
                })]
            })
        }
          , b = p.default.div.withConfig({
            displayName: "helpers__Wrapper",
            componentId: "sc-ctyogz-0"
        })(["width:100%;overflow-y:hidden;max-height:100vh;"])
          , w = (0,
        p.default)(s.Tz).withConfig({
            displayName: "helpers__Section",
            componentId: "sc-ctyogz-1"
        })(["padding:24px 24px 16px;"])
          , v = (0,
        p.default)(w).withConfig({
            displayName: "helpers__BottomSection",
            componentId: "sc-ctyogz-2"
        })(["background-color:", ";border-bottom-left-radius:20px;border-bottom-right-radius:20px;"], (function(e) {
            return e.theme.colors.invertedContrast
        }
        ));
        j.Root = p.default.div.withConfig({
            displayName: "helpers__Root",
            componentId: "sc-ctyogz-3"
        })(["position:relative;align-items:center;display:flex;padding:24px;height:72px;border-bottom:1px solid #f4f5fa;& > ", "{flex:1;font-size:18px;letter-spacing:-0.3px;font-weight:500;}"], a.X6);
        var k = p.default.div.withConfig({
            displayName: "ConfirmationModalContent__StyledBodyContainer",
            componentId: "sc-9dlax-0"
        })(["overflow-y:auto;max-height:80vh;> div:nth-child(2){padding:0px 24px 24px;}"])
          , C = function(e) {
            var t = e.title
              , n = e.bottomContent
              , i = e.onDismiss
              , r = e.topContent;
            return (0,
            d.jsxs)(b, {
                children: [(0,
                d.jsx)(j, {
                    onDismiss: i,
                    children: t
                }), (0,
                d.jsxs)(k, {
                    children: [(0,
                    d.jsx)(w, {
                        children: r()
                    }), (0,
                    d.jsx)(v, {
                        gap: "12px",
                        children: n()
                    })]
                })]
            })
        }
          , O = n(92809)
          , _ = n(67294)
          , D = n(49226)
          , N = n(29972);
        function T(e, t) {
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
        function E(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? T(Object(n), !0).forEach((function(t) {
                    (0,
                    O.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var S = function(e) {
            return (0,
            d.jsx)(a.xv, E({
                style: {
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.3px",
                    color: "#8990A5",
                    textAlign: "center"
                }
            }, e))
        }
          , P = function(e) {
            return (0,
            d.jsx)(a.xv, E({
                style: {
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.3px",
                    fontWeight: "bold",
                    color: "#6C5DD3",
                    textAlign: "center",
                    marginLeft: "4px"
                }
            }, e))
        }
          , I = p.default.div.withConfig({
            displayName: "TransactionSucceedContent__Content",
            componentId: "sc-966iey-0"
        })(["& .preview-image{margin:0 auto;display:block;}& .address-block{width:70%;margin-top:16px;margin:0 auto;background:transparent;border:none;outline:none;display:flex;flex-direction:column;align-items:center;justify-content:space-between;margin-top:20px;& .address-field{max-width:330px;margin:0 auto;margin-top:8px;padding:6px 10px;box-sizing:border-box;border:1px solid #d2d6e5;border-radius:6px;cursor:pointer;& .address{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}}}@media screen and (max-width:1024px){& .address-block{& .address-field{max-width:300px;}}}@media screen and (max-width:480px){& .address-block{width:100%;& .address-field{width:100%;max-width:250px;}}& .info-block{width:100%;& .exchange-info{display:flex;flex-direction:column;}}}@media screen and (max-width:400px){& .address-field{max-width:150px;}overflow:hidden;}"])
          , z = p.default.button.withConfig({
            displayName: "TransactionSucceedContent__CopyButton",
            componentId: "sc-966iey-1"
        })(["background:none;border:none;cursor:pointer;outline:none;padding:5px;border-radius:50%;display:flex;align-items:center;justify-content:center;svg *{stroke:#8990a5;transition:stroke 100ms ease-in-out;}&:hover{svg *{stroke:#6c5dd3;}}&:active{background-color:rgba(108,93,211,0.3);}"])
          , H = p.default.img.withConfig({
            displayName: "TransactionSucceedContent__ImgPreview",
            componentId: "sc-966iey-2"
        })(["width:345px;height:164px;@media (max-width:440px){width:300px;height:99px;}"])
          , A = function(e) {
            var t, n = e.onDismiss, i = e.hash, r = (0,
            D.v9)((function(e) {
                return e.toasts.popupList
            }
            )).filter((function(e) {
                return e.key === i
            }
            )), s = {
                count: 0,
                card: {},
                price: void 0
            };
            r[0] && (s = r[0].content.txn.additionalData);
            var c = (0,
            o.$G)().t
              , l = (0,
            _.useState)(!1)
              , p = l[0];
            l[1];
            return (0,
            d.jsx)(b, {
                style: {
                    maxWidth: "550px"
                },
                onClick: n,
                children: (0,
                d.jsx)(w, {
                    children: (0,
                    d.jsxs)(I, {
                        children: [(0,
                        d.jsxs)("div", {
                            className: "info-block",
                            children: [(0,
                            d.jsx)(H, {
                                className: "preview-image",
                                src: "/images/transaction-succeed-preview.svg",
                                alt: "transaction-succeed-preview"
                            }), (0,
                            d.jsxs)(a.X6, {
                                style: {
                                    textAlign: "center",
                                    marginTop: 20,
                                    marginBottom: 16
                                },
                                children: [c("congratulations"), "!"]
                            }), (0,
                            d.jsx)(P, {
                                children: null === (t = s) || void 0 === t ? void 0 : t.card.headline
                            }), (0,
                            d.jsx)(a.kC, {
                                alignItems: "center",
                                justifyContent: "center",
                                style: {
                                    marginTop: "4px"
                                },
                                children: (0,
                                d.jsx)(S, {
                                    children: c("successfullyBought")
                                })
                            }), s.price && (0,
                            d.jsxs)(a.kC, {
                                alignItems: "center",
                                justifyContent: "center",
                                className: "exchange-info",
                                style: {
                                    marginTop: "4px"
                                },
                                children: [(0,
                                d.jsx)(S, {
                                    children: c("laterExchange")
                                }), (0,
                                d.jsxs)(P, {
                                    children: [s.price, " ALM"]
                                })]
                            })]
                        }), (0,
                        d.jsxs)("button", {
                            className: "address-block",
                            onClick: function() {
                                navigator.clipboard.writeText(N.YL)
                            },
                            type: "button",
                            children: [(0,
                            d.jsx)(S, {
                                children: c("toSeeNftCards")
                            }), (0,
                            d.jsxs)(a.kC, {
                                className: "address-field",
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [(0,
                                d.jsx)(S, {
                                    className: "address",
                                    children: N.YL
                                }), (0,
                                d.jsx)(z, {
                                    type: "button",
                                    className: p ? "active" : "",
                                    children: (0,
                                    d.jsx)(a.Vp, {})
                                })]
                            })]
                        })]
                    })
                })
            })
        }
          , R = g
    }
}]);
