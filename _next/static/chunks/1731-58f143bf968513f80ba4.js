(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1731], {
    81731: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return B
            },
            I: function() {
                return pe
            }
        });
        var i, o, r = n(80318), a = n(17949), s = n(92809), l = n(52209), c = n(82909), d = (0,
        c.Ps)(i || (i = (0,
        l.Z)(["\n    fragment SwapStatus on SwapStatusInfo {\n  id\n  createdAt\n  status\n  refund\n  routeTxHashFirst\n  clientTxHash\n  routeTxHashSecond\n  refundTxHash\n  refundChainId\n  failMessage\n  type\n  details {\n    amount\n    toReceive\n    toChainId\n    fromChainId\n    fromTokenAddress\n    toTokenAddress\n  }\n}\n    "]))), u = n(64316);
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
                    s.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var f = {}
          , m = (0,
        c.Ps)(o || (o = (0,
        l.Z)(["\n    query getClientSwaps($account: String!) {\n  clientSwaps(account: $account) {\n    ...SwapStatus\n  }\n}\n    ", ""])), d);
        var x = n(27517)
          , g = n(85754)
          , v = n(81578)
          , b = [v.OT.AggregatorCompleted, v.OT.AggregatorWaiting, v.OT.Repeated, v.OT.RouteWaitingFirst, v.OT.RouteWaitingSecond]
          , j = [v.OT.Comleted]
          , y = [v.OT.Failed]
          , w = [v.HI.Pending, v.HI.Requested]
          , C = [v.HI.Comleted]
          , O = [v.HI.Failed]
          , _ = function() {
            var e = (0,
            g.a)().account
              , t = function(e) {
                var t = h(h({}, f), e);
                return u.a(m, t)
            }({
                client: (0,
                x.j)(),
                variables: {
                    account: e || ""
                },
                skip: !e
            })
              , n = t.data
              , i = t.refetch;
            setTimeout((function() {
                i()
            }
            ), 8e3);
            var o = (null === n || void 0 === n ? void 0 : n.clientSwaps) || [];
            var r = !!o.find((function(e) {
                return !j.includes(e.status) && (!C.includes(e.refund) && (!!y.includes(e.status) || !!O.includes(e.refund)))
            }
            ))
              , a = o.filter((function(e) {
                return !!b.includes(e.status) || !!w.includes(e.refund)
            }
            ));
            return {
                processTransactions: a,
                isProcessTransactions: !!a.length,
                isErrorTransactions: r,
                refetch: i
            }
        }
          , k = n(62391)
          , L = n(87294)
          , P = n(41810)
          , S = n(67294)
          , N = n(62639)
          , I = n(93350)
          , T = n(79308)
          , D = n(60813)
          , Z = n(85893)
          , M = function() {
            return (0,
            Z.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                Z.jsx)("path", {
                    opacity: "0.5",
                    d: "M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z",
                    stroke: "#8990A5",
                    strokeWidth: "1.5"
                }), (0,
                Z.jsx)("path", {
                    d: "M4.62272 7.15465C4.50647 6.97641 4.53097 6.7411 4.68144 6.59063L6.59063 4.68144C6.7411 4.53097 6.97641 4.50647 7.15465 4.62272L8.14511 5.26867C8.47132 5.48141 8.88414 5.49566 9.24388 5.34648V5.34648C9.60345 5.19738 9.88588 4.8952 9.96607 4.51429L10.2097 3.3573C10.2535 3.14906 10.4372 3 10.65 3H13.35C13.5628 3 13.7465 3.14906 13.7903 3.3573L14.0339 4.51429C14.1141 4.8952 14.3965 5.19738 14.7561 5.34648V5.34648C15.1159 5.49566 15.5287 5.48141 15.8549 5.26867L16.8453 4.62272C17.0236 4.50647 17.2589 4.53097 17.4094 4.68144L19.3186 6.59063C19.469 6.7411 19.4935 6.97641 19.3773 7.15465L18.7313 8.14511C18.5186 8.47132 18.5043 8.88414 18.6535 9.24388V9.24388C18.8026 9.60345 19.1048 9.88588 19.4857 9.96607L20.6427 10.2097C20.8509 10.2535 21 10.4372 21 10.65V13.35C21 13.5628 20.8509 13.7465 20.6427 13.7903L19.4857 14.0339C19.1048 14.1141 18.8026 14.3965 18.6535 14.7561V14.7561C18.5043 15.1159 18.5186 15.5287 18.7313 15.8549L19.3773 16.8453C19.4935 17.0236 19.469 17.2589 19.3186 17.4094L17.4094 19.3186C17.2589 19.469 17.0236 19.4935 16.8453 19.3773L15.8549 18.7313C15.5287 18.5186 15.1159 18.5043 14.7561 18.6535V18.6535C14.3965 18.8026 14.1141 19.1048 14.0339 19.4857L13.7903 20.6427C13.7465 20.8509 13.5628 21 13.35 21H10.65C10.4372 21 10.2535 20.8509 10.2097 20.6427L9.96607 19.4857C9.88588 19.1048 9.60345 18.8026 9.24388 18.6535V18.6535C8.88414 18.5043 8.47132 18.5186 8.14511 18.7313L7.15465 19.3773C6.97641 19.4935 6.7411 19.469 6.59063 19.3186L4.68144 17.4094C4.53097 17.2589 4.50647 17.0236 4.62272 16.8453L5.26867 15.8549C5.48141 15.5287 5.49566 15.1159 5.34648 14.7561V14.7561C5.19738 14.3965 4.8952 14.1141 4.51429 14.0339L3.3573 13.7903C3.14906 13.7465 3 13.5628 3 13.35L3 10.65C3 10.4372 3.14906 10.2535 3.3573 10.2097L4.51429 9.96607C4.8952 9.88588 5.19738 9.60345 5.34648 9.24388V9.24388C5.49566 8.88414 5.48141 8.47132 5.26867 8.14511L4.62272 7.15465Z",
                    stroke: "#8990A5",
                    strokeWidth: "1.5"
                })]
            })
        }
          , E = function() {
            return (0,
            Z.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                Z.jsx)("path", {
                    d: "M3 5V9C3 9.55228 3.44772 10 4 10H8",
                    stroke: "#8990A5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }), (0,
                Z.jsx)("path", {
                    d: "M5.96556 14.4064C5.82638 14.0162 5.39729 13.8128 5.00716 13.952C4.61703 14.0911 4.41359 14.5202 4.55276 14.9104L5.96556 14.4064ZM7.1763 6.33837L7.68646 6.88813L7.69477 6.88041L7.70285 6.87245L7.1763 6.33837ZM4.55276 14.9104C5.19159 16.7011 6.40172 18.2364 7.99889 19.2863L8.82285 18.0329C7.49605 17.1607 6.49393 15.8874 5.96556 14.4064L4.55276 14.9104ZM7.99889 19.2863C9.59592 20.3361 11.4941 20.8443 13.4074 20.7356L13.3223 19.238C11.729 19.3286 10.1498 18.9052 8.82285 18.0329L7.99889 19.2863ZM13.4074 20.7356C15.3208 20.6268 17.1478 19.9069 18.6129 18.6825L17.6511 17.5315C16.4348 18.5479 14.9156 19.1474 13.3223 19.238L13.4074 20.7356ZM18.6129 18.6825C20.0781 17.4581 21.1022 15.7952 21.5289 13.9435L20.0672 13.6067C19.7145 15.1375 18.8672 16.5152 17.6511 17.5315L18.6129 18.6825ZM21.5289 13.9435C21.9556 12.0918 21.7612 10.1533 20.9756 8.42074L19.6095 9.04018C20.2595 10.4736 20.4199 12.0761 20.0672 13.6067L21.5289 13.9435ZM20.9756 8.42074C20.1901 6.68833 18.8566 5.25682 17.1779 4.34032L16.4591 5.65689C17.8545 6.41867 18.9595 7.60663 19.6095 9.04018L20.9756 8.42074ZM17.1779 4.34032C15.4993 3.42391 13.5656 3.07145 11.6676 3.33517L11.874 4.8209C13.4544 4.60132 15.0637 4.89504 16.4591 5.65689L17.1779 4.34032ZM11.6676 3.33517C9.76961 3.59889 8.00835 4.46482 6.64974 5.80429L7.70285 6.87245C8.83006 5.76112 10.2938 5.04047 11.874 4.8209L11.6676 3.33517ZM6.66613 5.78862L2.48983 9.66417L3.51017 10.7637L7.68646 6.88813L6.66613 5.78862Z",
                    fill: "#8990A5"
                })]
            })
        }
          , A = I.default.div.withConfig({
            displayName: "ExchangeCardHeader__StyledIcon",
            componentId: "sc-mwkktq-0"
        })(["border:1px solid #d2d6e5;box-sizing:border-box;border-radius:6px;margin-right:", "px;> button{width:40px;height:40px;}"], (function(e) {
            return e.margin ? e.margin : 0
        }
        ))
          , q = I.default.div.withConfig({
            displayName: "ExchangeCardHeader__Details",
            componentId: "sc-mwkktq-1"
        })(["flex:1;"])
          , R = function e(t) {
            var n = t.title
              , i = t.description
              , o = t.settingsModalTitle
              , s = t.children
              , l = _()
              , c = l.isErrorTransactions
              , d = l.isProcessTransactions
              , u = (l.processTransactions,
            l.refetch)
              , p = (0,
            I.useTheme)()
              , h = (0,
            P.$G)().t
              , f = (0,
            N.dd)((0,
            Z.jsx)(k.T, {
                title: o
            }))
              , m = (0,
            r.Z)(f, 1)[0]
              , x = (0,
            N.dd)((0,
            Z.jsx)(D.y, {}))
              , g = (0,
            r.Z)(x, 1)[0]
              , v = (0,
            S.useMemo)((function() {
                return c ? "error" : d ? "success" : !1 === c && !1 === d ? "none" : void 0
            }
            ), [c, d])
              , b = (0,
            S.useMemo)((function() {
                switch (v) {
                case "none":
                    return null;
                case "error":
                    return (0,
                    Z.jsx)(z, {
                        color: "red"
                    });
                case "success":
                    return (0,
                    Z.jsx)(z, {});
                default:
                    return null
                }
            }
            ), [v]);
            return (0,
            Z.jsxs)(Z.Fragment, {
                children: [(0,
                Z.jsxs)(N.kC, {
                    alignItems: "center",
                    children: [(0,
                    Z.jsxs)(q, {
                        children: [(0,
                        Z.jsx)(N.X6, {
                            mb: "8px",
                            fontSize: "16px !important",
                            children: n
                        }), i && (0,
                        Z.jsx)(e.Description, {
                            color: p.colors.basic,
                            fontSize: "12px",
                            children: i
                        })]
                    }), (0,
                    Z.jsx)(A, {
                        margin: 6,
                        title: h("settings?"),
                        children: (0,
                        Z.jsx)(N.hU, {
                            variant: "text",
                            onClick: function() {
                                m(),
                                a.m.events.settingsTrade()
                            },
                            children: (0,
                            Z.jsx)(M, {})
                        })
                    }), (0,
                    Z.jsx)(A, {
                        title: h("recentTransactions?"),
                        children: (0,
                        Z.jsxs)(N.hU, {
                            variant: "text",
                            onClick: function() {
                                a.m.events.recentTrxs(),
                                g(),
                                u()
                            },
                            children: [b, (0,
                            Z.jsx)(E, {})]
                        })
                    })]
                }), s && (0,
                Z.jsx)(N.xv, {
                    mt: "16px",
                    children: s
                })]
            })
        };
        R.Description = (0,
        I.default)(N.xv).withConfig({
            displayName: "ExchangeCardHeader__Description",
            componentId: "sc-mwkktq-2"
        })(["@media ", "{display:none;}"], T.mq.down(T.AV.sm));
        var z = (0,
        I.default)(L.B).withConfig({
            displayName: "ExchangeCardHeader__StyledDot",
            componentId: "sc-mwkktq-3"
        })(["position:absolute;height:20px;width:20px;margin-left:42px;margin-bottom:32px;"])
          , B = R
          , F = n(94415)
          , W = n(24451)
          , V = n(4536)
          , H = function() {
            var e = (0,
            F.k)().history
              , t = (0,
            S.useMemo)((function() {
                var t, n, i;
                return (null === e || void 0 === e || null === (t = e.filter((function(e) {
                    var t;
                    return null === e || void 0 === e || null === (t = e.path) || void 0 === t ? void 0 : t.includes(V.Z.exchange)
                }
                ))) || void 0 === t || null === (n = t.sort((function(e, t) {
                    return t.date - e.date
                }
                ))) || void 0 === n || null === (i = n[0]) || void 0 === i ? void 0 : i.path) || V.Z.exchange
            }
            ), [e])
              , n = (0,
            W.$G)().t;
            return (0,
            S.useMemo)((function() {
                return [{
                    href: t,
                    title: n("Cross-Chain"),
                    className: "Cross-Chain",
                    onClick: function() {
                        a.m.events.swapTabTrade()
                    }
                }, {
                    href: V.Z.pool,
                    title: n("Liquidity"),
                    className: "Liquidity",
                    anotherPaths: [V.Z.add],
                    onClick: function() {
                        a.m.events.tabLiquidity()
                    }
                }, {
                    href: V.Z.migrate,
                    title: n("Migrate"),
                    className: "Migrate",
                    onClick: function() {
                        a.m.events.tabMigrate()
                    }
                }]
            }
            ), [n, t])
        }
          , G = n(73543)
          , $ = n(41664)
          , Y = n(11163)
          , K = n(84748)
          , U = n(86366)
          , J = n(46253)
          , Q = n(82738)
          , X = n(69381);
        function ee(e, t) {
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
        function te(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ee(Object(n), !0).forEach((function(t) {
                    (0,
                    s.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ne = function(e) {
            var t = e.isLastStep
              , n = e.primaryProps
              , i = e.step
              , o = e.tooltipProps
              , r = e.skipProps;
            return (0,
            Z.jsxs)("div", {
                children: [(0,
                Z.jsx)("div", te(te({}, r), {}, {
                    children: (0,
                    Z.jsx)(le, {})
                })), (0,
                Z.jsxs)(ie, {
                    children: [t ? (0,
                    Z.jsx)(ce, {}) : (0,
                    Z.jsx)(X.Pr, {}), (0,
                    Z.jsx)("div", te(te({}, o), {}, {
                        children: i.content && (0,
                        Z.jsx)(re, {
                            children: i.content
                        })
                    })), !t && (0,
                    Z.jsxs)(oe, {
                        children: [i.title, "/3", (0,
                        Z.jsx)(se, te(te({}, n), {}, {
                            children: (0,
                            Z.jsx)(ae, {
                                onClick: function() {
                                    var e;
                                    return null === i || void 0 === i || null === (e = i.onNext) || void 0 === e ? void 0 : e.call(i)
                                }
                            })
                        }))]
                    }), t && (0,
                    Z.jsxs)(oe, {
                        children: [i.title, "/3", (0,
                        Z.jsx)(se, te(te({}, n), {}, {
                            children: (0,
                            Z.jsx)(ae, {
                                onClick: function() {
                                    var e;
                                    return null === i || void 0 === i || null === (e = i.onNext) || void 0 === e ? void 0 : e.call(i)
                                }
                            })
                        }))]
                    })]
                })]
            })
        }
          , ie = I.default.div.withConfig({
            displayName: "Tooltip__StyledWrapper",
            componentId: "sc-1tjr0ts-0"
        })(["width:232px;height:196px;background:#ffffff;padding:16px;box-shadow:0px 4px 6px -4px rgba(24,39,75,0.12),0px 8px 8px -4px rgba(24,39,75,0.04);border-radius:16px;&& ::before{content:'';position:absolute;display:block;width:0;top:0;right:auto;bottom:auto;left:40px;border-width:0 12px 17px;border-style:solid;border-color:", " transparent;z-index:-1;@media ", "{left:60px;}}"], (function(e) {
            return e.theme.colors.default
        }
        ), T.mq.down(T.AV.sm))
          , oe = I.default.div.withConfig({
            displayName: "Tooltip__InfoPart",
            componentId: "sc-1tjr0ts-1"
        })(["display:flex;justify-content:space-between;align-items:center;margin-top:20px;"])
          , re = I.default.span.withConfig({
            displayName: "Tooltip__StyledText",
            componentId: "sc-1tjr0ts-2"
        })(["", ";color:", ";> a{white-space:break-spaces;color:", ";text-decoration:underline;&:hover{text-decoration:none;}}"], T.cp.UR.medium, (function(e) {
            return e.theme.colors.darkBlue
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        ))
          , ae = (0,
        I.default)(N.Rp).withConfig({
            displayName: "Tooltip__NextBtn",
            componentId: "sc-1tjr0ts-3"
        })(["transform:rotate(180deg);"])
          , se = I.default.div.withConfig({
            displayName: "Tooltip__IconWrapper",
            componentId: "sc-1tjr0ts-4"
        })(["border:1px solid ", ";padding:8px;border-radius:12px;"], (function(e) {
            return e.theme.colors.blueHaze
        }
        ))
          , le = function e(t) {
            return (0,
            Z.jsx)(e.Close, te(te({}, t), {}, {
                children: (0,
                Z.jsx)(Q.b, {})
            }))
        };
        le.Close = I.default.div.withConfig({
            displayName: "Tooltip__Close",
            componentId: "sc-1tjr0ts-5"
        })(["box-sizing:border-box;position:absolute;right:8px;top:24px;width:24px;height:24px;cursor:pointer;display:flex;justify-content:center;align-items:center;border-radius:16px;transition:0.3s all ease;"]);
        var ce = function() {
            return (0,
            Z.jsxs)("svg", {
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                Z.jsx)("rect", {
                    width: "40",
                    height: "40",
                    rx: "8",
                    fill: "#6C5DD3",
                    fillOpacity: "0.1"
                }), (0,
                Z.jsxs)("g", {
                    clipPath: "url(#clip0_21775_6720)",
                    children: [(0,
                    Z.jsx)("path", {
                        opacity: "0.5",
                        d: "M20 30.75C25.9371 30.75 30.75 25.9371 30.75 20C30.75 14.0629 25.9371 9.25 20 9.25C14.0629 9.25 9.25 14.0629 9.25 20C9.25 25.9371 14.0629 30.75 20 30.75Z",
                        stroke: "#6C5DD3",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }), (0,
                    Z.jsx)("path", {
                        d: "M19.9941 24.5V19.5",
                        stroke: "#6C5DD3",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }), (0,
                    Z.jsx)("path", {
                        d: "M19.9941 15.5H20.0041",
                        stroke: "#6C5DD3",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    })]
                }), (0,
                Z.jsx)("defs", {
                    children: (0,
                    Z.jsx)("clipPath", {
                        id: "clip0_21775_6720",
                        children: (0,
                        Z.jsx)("rect", {
                            width: "24",
                            height: "24",
                            fill: "white",
                            transform: "translate(8 8)"
                        })
                    })
                })]
            })
        }
          , de = function e(t) {
            var n = t.activeIndex
              , i = void 0 === n ? 0 : n
              , o = (0,
            P.$G)()
              , s = o.t
              , l = o.i18n
              , c = l.language
              , d = (0,
            Y.useRouter)()
              , u = (0,
            G.w1)((function(e) {
                return [e.show, e.setShow, e.setOnboardingState]
            }
            ))
              , p = (0,
            r.Z)(u, 3)
              , h = p[0]
              , f = p[1]
              , m = p[2]
              , x = H()
              , g = [{
                target: ".Cross-Chain",
                disableBeacon: !0,
                content: s("You can get 1 ticket for every 5 swaps"),
                placement: "bottom",
                title: "1",
                onNext: function() {
                    a.m.events.gb_onboarding1()
                }
            }, {
                target: ".Liquidity",
                disableBeacon: !0,
                title: "2",
                content: s("Also you get 1 ticket every day for each 10$ of liquidity"),
                placement: "bottom",
                onNext: function() {
                    a.m.events.gb_onboarding2()
                }
            }, {
                target: ".Cross-Chain",
                disableBeacon: !0,
                content: (0,
                Z.jsx)(P.cC, {
                    i18nKey: "To read the full contest rules, go to the corresponding <a>blog article</a>",
                    components: {
                        a: (0,
                        Z.jsx)("a", {
                            href: U.NJ.almGB,
                            target: "_blank"
                        })
                    }
                }),
                title: "3",
                placement: "bottom",
                onNext: function() {
                    a.m.events.gb_onboarding3()
                }
            }];
            return (0,
            Z.jsxs)(Z.Fragment, {
                children: [(0,
                Z.jsx)(K.ZP, {
                    steps: g,
                    callback: function(e) {
                        "skip" === (null === e || void 0 === e ? void 0 : e.action) && f(!1),
                        "start" === (null === e || void 0 === e ? void 0 : e.action) && m(!0),
                        "reset" === (null === e || void 0 === e ? void 0 : e.action) && m(!1),
                        "finished" === (null === e || void 0 === e ? void 0 : e.status) && f(!1)
                    },
                    showProgress: !0,
                    run: h,
                    debug: !1,
                    disableScrolling: !0,
                    disableOverlay: !1,
                    disableScrollParentFix: !0,
                    showSkipButton: !0,
                    spotlightClicks: !0,
                    tooltipComponent: ne,
                    spotlightPadding: 3,
                    styles: {
                        options: {
                            arrowColor: "none"
                        },
                        spotlight: {
                            padding: 0,
                            marginTop: "1px"
                        }
                    }
                }), (0,
                Z.jsxs)(e.Root, {
                    "data-lang": l.language,
                    children: [(0,
                    Z.jsx)(e.Label, {
                        "data-lang": l.language,
                        children: s("Trade")
                    }), (0,
                    Z.jsx)(e.ButtonsGroup, {
                        size: "md",
                        variant: "primary",
                        activeIndex: i,
                        children: x.map((function(e) {
                            var t = e.href
                              , n = e.title
                              , i = e.anotherPaths
                              , o = void 0 === i ? [] : i
                              , r = e.onClick
                              , a = void 0 === r ? function() {}
                            : r
                              , s = e.className
                              , l = d.pathname.startsWith(t) || !!o.find((function(e) {
                                return d.pathname.startsWith(e)
                            }
                            ));
                            return (0,
                            Z.jsx)($.default, {
                                href: t,
                                passHref: !0,
                                children: (0,
                                Z.jsx)("a", {
                                    onClick: a,
                                    className: s,
                                    children: (0,
                                    Z.jsx)(ue, {
                                        "data-lang": c,
                                        isActive: l,
                                        children: n
                                    })
                                })
                            }, t)
                        }
                        ))
                    })]
                })]
            })
        };
        de.Root = I.default.div.withConfig({
            displayName: "ExchangeTopBar__Root",
            componentId: "sc-17pzybj-0"
        })(["display:flex;position:relative;justify-content:space-between;width:100%;margin-bottom:24px;@media ", "{margin-bottom:16px;flex-direction:column;}"], T.mq.down(T.AV.sm)),
        de.Label = I.default.h3.withConfig({
            displayName: "ExchangeTopBar__Label",
            componentId: "sc-17pzybj-1"
        })(["", " @media(max-width:376px ){font-size:33px;}color:", ";@media ", "{margin-bottom:16px;text-align:center;}"], T.cp.h3, (function(e) {
            return e.theme.colors.darkBlue
        }
        ), T.mq.down(T.AV.sm)),
        de.ButtonsGroup = (0,
        I.default)(J.q).withConfig({
            displayName: "ExchangeTopBar__ButtonsGroup",
            componentId: "sc-17pzybj-2"
        })(["overflow:hidden;overflow-x:auto;height:56px;padding:8px;display:flex;& a{flex:1;}@media ", "{overflow-x:hidden;}@media ", "{overflow-x:auto;}& button{height:auto;width:140px;height:40px;text-align:center;@media ", "{width:100%;}}"], T.mq.down(T.AV.sm), T.mq.down(T.AV.esm), T.mq.down(T.AV.sm));
        var ue = (0,
        I.default)(J.q.Item).withConfig({
            displayName: "ExchangeTopBar__ButtonsGroupItemStyled",
            componentId: "sc-17pzybj-3"
        })(["&[data-lang='ru']{padding-left:12px;padding-right:12px;}@media ", "{&:first-child{padding:0px;}}"], T.mq.down(T.AV.sm))
          , pe = de
    },
    62391: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return R
            }
        });
        var i = n(62639)
          , o = n(93350)
          , r = n(80318)
          , a = n(41810)
          , s = n(67294)
          , l = n(46253)
          , c = n(41954)
          , d = n(20181)
          , u = n(79308)
          , p = n(92809)
          , h = n(10219)
          , f = n(159)
          , m = n(34109)
          , x = n.n(m);
        var g = n(50996)
          , v = n(14450)
          , b = n(85893)
          , j = function() {
            return (0,
            b.jsx)("svg", {
                width: "7",
                height: "4",
                viewBox: "0 0 7 4",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                b.jsx)("path", {
                    d: "M3.14538 0.353603L0.353265 3.14649C0.0383502 3.4615 0.261449 4 0.706868 4L6.29265 4C6.73814 4 6.96121 3.46136 6.64616 3.1464L3.85248 0.353504C3.65719 0.158269 3.34061 0.158313 3.14538 0.353603Z",
                    fill: "#8990A5"
                })
            })
        }
          , y = n(15502)
          , w = n.n(y);
        function C(e, t) {
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
        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? C(Object(n), !0).forEach((function(t) {
                    (0,
                    p.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var _ = (0,
        o.default)(x()).withConfig({
            displayName: "Numeric__NumericStyled",
            componentId: "sc-1pgxoym-0"
        })(["background-color:", ";border:1px solid #d2d6e5;border-radius:6px;box-shadow:", ";color:", ";display:block;font-size:16px !important;outline:0;padding:0 16px !important;width:100%;height:inherit !important;&::placeholder{color:", ";}&:disabled{background-color:", ";box-shadow:none;color:", ";cursor:not-allowed;}&:focus:not(:disabled){box-shadow:", ";}"], (function(e) {
            return e.theme.colors.input
        }
        ), g.Ke, (function(e) {
            return e.theme.colors.text
        }
        ), (function(e) {
            return e.theme.colors.textSubtle
        }
        ), (function(e) {
            return e.theme.colors.backgroundDisabled
        }
        ), (function(e) {
            return e.theme.colors.textDisabled
        }
        ), (function(e) {
            return e.theme.shadows.focus
        }
        ))
          , k = o.default.div.withConfig({
            displayName: "Numeric__Controls",
            componentId: "sc-1pgxoym-1"
        })(["position:absolute;top:10px;right:16px;width:14px;height:28px;border-radius:3px;display:flex;flex-direction:column;align-items:center;overflow:hidden;svg{background:#e6e6f6;height:14px;cursor:pointer;padding:4px;width:14px;transition:0.1s all ease;outline:none;box-shadow:none;&:active{opacity:0.5;outline:none;box-shadow:none;}&:hover{outline:none;box-shadow:none;}}b:first-of-type{}div{outline:none;display:flex;&:active{outline:none;box-shadow:none;}&:hover{outline:none;box-shadow:none;}}div:last-of-type{svg{transform:rotate(-180deg);-ms-transform:rotate(-1800deg);-webkit-transform:rotate(-180deg);}}"])
          , L = o.default.div.withConfig({
            displayName: "Numeric__InputWrapper",
            componentId: "sc-1pgxoym-2"
        })(["position:relative;"])
          , P = function(e) {
            var t = (0,
            f.Z)({}, e)
              , n = Number(null === t || void 0 === t ? void 0 : t.step) || 1
              , i = function(e) {
                var n, i, o, r = null !== e && void 0 !== e && e.target ? null === e || void 0 === e || null === (n = e.target) || void 0 === n ? void 0 : n.value : e;
                (null === (o = r) || void 0 === o ? void 0 : o.toString().match(/^[0-9]*\.?[0-9]*$/)) || (null === e || void 0 === e || null === (i = e.currentTarget) || void 0 === i || i.blur());
                if (null !== e && void 0 !== e && e.target)
                    null === t || void 0 === t || t.onChange(e);
                else {
                    var a = {
                        target: {
                            value: e
                        }
                    };
                    null === t || void 0 === t || t.onChange(a)
                }
            };
            return (0,
            b.jsxs)(L, {
                style: null !== t && void 0 !== t && t.style ? O({}, null === t || void 0 === t ? void 0 : t.style) : {},
                className: "".concat(w().numeric, " ").concat(w().hidecontrols),
                children: [(0,
                b.jsx)(_, O(O({
                    className: "form-control"
                }, t), {}, {
                    step: n,
                    onChange: i,
                    onKeyDown: i,
                    onKeyPress: i,
                    onKeyUp: i
                })), (0,
                b.jsxs)(k, {
                    children: [(0,
                    b.jsx)("div", {
                        onClick: function() {
                            var e = Number(null === t || void 0 === t ? void 0 : t.value) + n;
                            return i(e.toFixed(2))
                        },
                        children: (0,
                        b.jsx)(j, {})
                    }), (0,
                    b.jsx)("div", {
                        onClick: function() {
                            var e = Number(null === t || void 0 === t ? void 0 : t.value) - n;
                            if (!(e < 0))
                                return i(e.toFixed(1))
                        },
                        children: (0,
                        b.jsx)(j, {})
                    })]
                })]
            })
        };
        P.defaultProps = {
            scale: v.Q.MD,
            isSuccess: !1,
            isWarning: !1
        };
        var S = P
          , N = ["children", "error"];
        function I(e, t) {
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
        function T(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? I(Object(n), !0).forEach((function(t) {
                    (0,
                    p.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var D = function e(t) {
            var n = t.children
              , r = t.error
              , a = (0,
            h.Z)(t, N)
              , s = (0,
            o.useTheme)();
            return (0,
            b.jsxs)(b.Fragment, {
                children: [(0,
                b.jsxs)(e.Field, {
                    children: [(0,
                    b.jsx)(S, T({
                        type: "number",
                        scale: "lg",
                        isWarning: null !== r,
                        style: {
                            width: "100%",
                            maxWidth: "274px",
                            height: "48px"
                        }
                    }, a)), (0,
                    b.jsx)(i.xv, {
                        color: s.colors.textSubtle,
                        children: n
                    })]
                }), (0,
                b.jsx)(i.xv, {
                    mt: "8px",
                    color: "failure",
                    children: r
                })]
            })
        };
        D.Field = o.default.div.withConfig({
            displayName: "SettingInputField__Field",
            componentId: "sc-fdv3hp-0"
        })(["display:flex;align-items:center;gap:8px;"]);
        var Z = o.default.div.withConfig({
            displayName: "styled__SwapSettingsLabel",
            componentId: "sc-1xayc7n-0"
        })(["margin-bottom:16px;p{", ";color:", ";}"], u.cp.A6.medium, (function(e) {
            return e.theme.colors.heading
        }
        ))
          , M = [{
            label: "0,1%",
            value: .1
        }, {
            label: "0,5%",
            value: .5
        }, {
            label: "1%",
            value: 1
        }]
          , E = function e() {
            var t = (0,
            a.$G)().t
              , n = (0,
            d.$2)()
              , i = (0,
            r.Z)(n, 2)
              , o = i[0]
              , l = i[1]
              , u = (0,
            s.useState)(o / 100)
              , p = u[0]
              , h = u[1]
              , f = (0,
            s.useState)(null)
              , m = f[0]
              , x = f[1];
            (0,
            s.useEffect)((function() {
                try {
                    var e = 100 * p;
                    !Number.isNaN(e) && e > 0 && e < 5e3 ? (l(e),
                    x(null)) : x(t("Enter a valid slippage"))
                } catch (n) {
                    x(t("Enter a valid slippage"))
                }
            }
            ), [t, p, x, l]),
            (0,
            s.useEffect)((function() {
                o < 50 ? x(t("Your transaction may fail")) : o > 500 && x(t("Your transaction may be frontrun"))
            }
            ), [o, x, t]);
            var g = M.map((function(e) {
                return e.value
            }
            )).indexOf(p);
            return (0,
            b.jsxs)(e.Root, {
                children: [(0,
                b.jsxs)(e.Label, {
                    children: [(0,
                    b.jsx)("p", {
                        children: t("Slippage tolerance")
                    }), (0,
                    b.jsx)(c.Z, {
                        text: t("Your transaction will revert if the price changes unfavorably by more than this percentage.")
                    })]
                }), (0,
                b.jsx)(e.Group, {
                    size: "sm",
                    variant: "primary",
                    activeIndex: g,
                    onClick: function(e) {
                        h(M[e].value)
                    },
                    children: M.map((function(t) {
                        return (0,
                        b.jsx)(e.Item, {
                            variant: p === t.value ? "primary" : "tertiary",
                            children: t.label
                        }, t.value)
                    }
                    ))
                }), (0,
                b.jsx)(e.Field, {
                    children: (0,
                    b.jsx)(D, {
                        step: .1,
                        min: .1,
                        placeholder: "0.1",
                        value: p,
                        onChange: function(e) {
                            var t = e.target.value;
                            h(parseFloat(t))
                        },
                        error: m,
                        children: (0,
                        b.jsx)(b.Fragment, {
                            children: "%"
                        })
                    })
                })]
            })
        };
        E.Root = o.default.div.withConfig({
            displayName: "SlippageToleranceSetting__Root",
            componentId: "sc-1ufjd45-0"
        })([""]),
        E.Label = (0,
        o.default)(Z).withConfig({
            displayName: "SlippageToleranceSetting__Label",
            componentId: "sc-1ufjd45-1"
        })(["display:flex;align-items:center;"]),
        E.Group = (0,
        o.default)(l.q).withConfig({
            displayName: "SlippageToleranceSetting__Group",
            componentId: "sc-1ufjd45-2"
        })([""]),
        E.Item = (0,
        o.default)(l.q.Item).withConfig({
            displayName: "SlippageToleranceSetting__Item",
            componentId: "sc-1ufjd45-3"
        })(["", ";height:40px;width:96px;"], u.cp.A6.bolder),
        E.Field = o.default.div.withConfig({
            displayName: "SlippageToleranceSetting__Field",
            componentId: "sc-1ufjd45-4"
        })(["margin-top:16px;"]);
        var A = function e() {
            var t = (0,
            a.$G)().t
              , n = (0,
            d.Td)()
              , i = (0,
            r.Z)(n, 2)
              , o = i[0]
              , l = i[1]
              , u = (0,
            s.useState)(o / 60)
              , p = u[0]
              , h = u[1]
              , f = (0,
            s.useState)(null)
              , m = f[0]
              , x = f[1];
            return (0,
            s.useEffect)((function() {
                try {
                    var e = 60 * p;
                    !Number.isNaN(e) && e > 0 ? (l(e),
                    x(null)) : x(t("Enter a valid deadline"))
                } catch (n) {
                    x(t("Enter a valid deadline"))
                }
            }
            ), [t, p, x, l]),
            (0,
            b.jsxs)(e.Root, {
                children: [(0,
                b.jsxs)(e.Label, {
                    children: [(0,
                    b.jsx)("p", {
                        children: t("Transaction deadline")
                    }), (0,
                    b.jsx)(c.Z, {
                        text: t("Your transaction will revert if it is pending for more than this long.")
                    })]
                }), (0,
                b.jsx)(D, {
                    step: "1",
                    min: "1",
                    placeholder: "1",
                    value: p,
                    onChange: function(e) {
                        var t = e.target.value;
                        h(parseInt(t, 10))
                    },
                    error: m,
                    children: (0,
                    b.jsx)(b.Fragment, {
                        children: t("Min")
                    })
                })]
            })
        };
        A.Root = o.default.div.withConfig({
            displayName: "TransactionDeadlineSetting__Root",
            componentId: "sc-tyn73z-0"
        })([""]),
        A.Label = (0,
        o.default)(Z).withConfig({
            displayName: "TransactionDeadlineSetting__Label",
            componentId: "sc-tyn73z-1"
        })(["align-items:center;display:flex;margin-top:34px;"]),
        A.Field = o.default.div.withConfig({
            displayName: "TransactionDeadlineSetting__Field",
            componentId: "sc-tyn73z-2"
        })([""]);
        var q = function e(t) {
            var n = t.onDismiss
              , i = t.title;
            return (0,
            b.jsxs)(e.Modal, {
                title: i,
                onDismiss: n,
                bodyPadding: "24px",
                children: [(0,
                b.jsx)(E, {}), (0,
                b.jsx)(A, {})]
            })
        };
        q.Modal = (0,
        o.default)(i.u_).withConfig({
            displayName: "SwapSettings__Modal",
            componentId: "sc-1qdxga7-0"
        })(["max-width:354px;min-width:auto;width:100%;z-index:inherit;"]);
        var R = q
    },
    46253: function(e, t, n) {
        "use strict";
        n.d(t, {
            q: function() {
                return h
            }
        });
        var i = n(92809)
          , o = n(10219)
          , r = n(67294)
          , a = n(93350)
          , s = n(14063)
          , l = n(40253)
          , c = n(85893)
          , d = ["isActive", "size", "variant", "as"];
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
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var h = function e(t) {
            var n = t.activeIndex
              , i = void 0 === n ? 0 : n
              , o = t.size
              , a = void 0 === o ? l.J7.MD : o
              , s = t.variant
              , d = void 0 === s ? l.oW.PRIMARY : s
              , u = t.onClick
              , p = t.children
              , h = t.className;
            return (0,
            c.jsx)(e.Root, {
                variant: d,
                className: h,
                children: r.Children.map(p, (function(e, t) {
                    return (0,
                    r.cloneElement)(e, {
                        isActive: i === t,
                        onClick: u ? function() {
                            return u(t)
                        }
                        : void 0,
                        size: a,
                        variant: d
                    })
                }
                ))
            })
        };
        h.Root = a.default.div.withConfig({
            displayName: "ButtonsGroup__Root",
            componentId: "sc-1j9mdxm-0"
        })(["background:rgba(244,245,250,0.1);backdrop-filter:blur(20px);padding:8px;border:1px solid #d2d6e5;border-radius:14px;display:flex;gap:8px;height:56px;"]);
        var f = (0,
        a.default)(s.Z).withConfig({
            displayName: "ButtonsGroup__InactiveButton",
            componentId: "sc-1j9mdxm-1"
        })(["color:", ";&:hover:not(:disabled):not(:active){background-color:transparent;}"], (function(e) {
            var t = e.theme
              , n = e.colorkey;
            return t.colors[n]
        }
        ));
        h.Item = function(e) {
            var t = e.isActive
              , n = void 0 !== t && t
              , i = e.size
              , r = void 0 === i ? l.J7.MD : i
              , a = e.variant
              , u = void 0 === a ? l.oW.PRIMARY : a
              , h = e.as
              , m = (0,
            o.Z)(e, d);
            return n ? (0,
            c.jsx)(s.Z, p({
                as: h,
                size: r,
                variant: u
            }, m)) : (0,
            c.jsx)(f, p({
                forwardedAs: h,
                size: r,
                variant: "tertiary",
                colorkey: u === l.oW.PRIMARY ? "primary" : "textSubtle"
            }, m))
        }
    },
    15502: function(e) {
        e.exports = {
            numeric: "Numeric_numeric__3tPY8",
            hidecontrols: "Numeric_hidecontrols__3Zs-q"
        }
    }
}]);
