"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1445], {
    22474: function(e, n, o) {
        o.d(n, {
            m: function() {
                return i.m
            }
        });
        var i = o(20293)
    },
    12374: function(e, n, o) {
        o.d(n, {
            j: function() {
                return d
            }
        });
        var i = o(47646)
          , t = o(67294)
          , r = o(73549)
          , l = o(20181)
          , d = function(e, n) {
            var o = function(e) {
                var n = (0,
                l.uB)();
                return function() {
                    e ? n(e) : console.error("CANT ADD PAIR!")
                }
            }(n)
              , d = (0,
            i.x)().chainId
              , s = (0,
            t.useCallback)((function() {
                var i = (0,
                r.j)() && localStorage.getItem("redux_localstorage_simple_user")
                  , t = JSON.parse(i);
                if (null !== t && void 0 !== t && t.pairs && e && n) {
                    var l = t.pairs[d] ? Object.values(t.pairs[d]) : [];
                    (null === l || void 0 === l ? void 0 : l.length) && l.find((function(n) {
                        return a(n, null === e || void 0 === e ? void 0 : e.addressA, null === e || void 0 === e ? void 0 : e.addressB)
                    }
                    )) || o()
                }
            }
            ), [d, e, o, n]);
            (0,
            t.useEffect)((function() {
                s()
            }
            ), [e, n, s])
        }
          , a = function(e, n, o) {
            var i, t, r, l, d, a, s, u;
            return Boolean((null === e || void 0 === e || null === (i = e.token0) || void 0 === i || null === (t = i.address) || void 0 === t ? void 0 : t.toLowerCase()) === (null === n || void 0 === n ? void 0 : n.toLowerCase()) && (null === e || void 0 === e || null === (r = e.token1) || void 0 === r || null === (l = r.address) || void 0 === l ? void 0 : l.toLowerCase()) === (null === o || void 0 === o ? void 0 : o.toLowerCase()) || (null === e || void 0 === e || null === (d = e.token0) || void 0 === d || null === (a = d.address) || void 0 === a ? void 0 : a.toLowerCase()) === (null === o || void 0 === o ? void 0 : o.toLowerCase()) && (null === e || void 0 === e || null === (s = e.token1) || void 0 === s || null === (u = s.address) || void 0 === u ? void 0 : u.toLowerCase()) === (null === n || void 0 === n ? void 0 : n.toLowerCase()))
        }
    },
    36947: function(e, n, o) {
        o.d(n, {
            U: function() {
                return a
            }
        });
        var i = o(80318)
          , t = o(82212)
          , r = o(21891)
          , l = o(95268)
          , d = o(33754);
        function a(e) {
            var n, o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = (null === e || void 0 === e ? void 0 : e.toUpperCase()) === (null === r.V || void 0 === r.V ? void 0 : r.V.defaultToken), s = (0,
            l.l)(), u = null === s || void 0 === s || null === (n = s.providerParams) || void 0 === n ? void 0 : n.nativeCurrency, c = u instanceof t.WU && a ? null === u || void 0 === u ? void 0 : u.address : null, p = (0,
            d.d)(a ? c : e), v = (0,
            i.Z)(p, 1), f = v[0];
            return o && a || a && !c ? u : f
        }
    },
    96624: function(e, n, o) {
        o.d(n, {
            q: function() {
                return c
            },
            w: function() {
                return p
            }
        });
        var i = o(41810)
          , t = (o(67294),
        o(4536))
          , r = o(62639)
          , l = o(93350)
          , d = o(87654)
          , a = o(41954)
          , s = o(42)
          , u = o(85893);
        function c() {
            var e = (0,
            i.$G)().t;
            return (0,
            u.jsx)(v, {
                children: (0,
                u.jsx)(g, {
                    style: {
                        borderBottom: "1px solid #f4f5fa"
                    },
                    children: (0,
                    u.jsxs)(r.kC, {
                        alignItems: "center",
                        children: [(0,
                        u.jsx)(d.p, {
                            href: t.Z.pool,
                            children: (0,
                            u.jsx)(r.Rp, {
                                width: "24px",
                                height: "24px"
                            })
                        }), (0,
                        u.jsx)(f, {
                            children: e("Import Pool")
                        }), (0,
                        u.jsx)(a.Z, {
                            text: e("Use this tool to find pairs that don't automatically appear in the interface")
                        })]
                    })
                })
            })
        }
        function p(e) {
            var n = e.adding
              , o = (0,
            i.$G)().t;
            return (0,
            u.jsx)(v, {
                children: (0,
                u.jsxs)(g, {
                    style: {
                        borderBottom: "1px solid #f4f5fa"
                    },
                    children: [(0,
                    u.jsxs)(r.kC, {
                        alignItems: "center",
                        children: [(0,
                        u.jsx)(d.p, {
                            href: t.Z.pool,
                            children: (0,
                            u.jsx)(r.Rp, {
                                width: "24px",
                                height: "24px"
                            })
                        }), (0,
                        u.jsxs)(f, {
                            children: [o(n ? "Add" : "Remove"), " ", o("Liquidity")]
                        })]
                    }), (0,
                    u.jsx)(a.Z, {
                        text: o(n ? "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time." : "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive."),
                        bordered: !0
                    })]
                })
            })
        }
        var v = l.default.div.withConfig({
            displayName: "SwapNavigationTabs__Tabs",
            componentId: "sc-x4rolr-0"
        })(["display:flex;flex-flow:row nowrap;align-items:center;border-radius:3rem;justify-content:space-evenly;"])
          , f = l.default.div.withConfig({
            displayName: "SwapNavigationTabs__ActiveText",
            componentId: "sc-x4rolr-1"
        })(["font-weight:600;font-size:18px;margin-left:16px;letter-spacing:-0.3px;"])
          , g = (0,
        l.default)(s.m0).withConfig({
            displayName: "SwapNavigationTabs__StyledRowBetween",
            componentId: "sc-x4rolr-2"
        })(["padding:32px 32px 22px;@media screen and (max-width:500px){padding:24px 32px 20px;}"])
    },
    33725: function(e, n, o) {
        o.d(n, {
            Z: function() {
                return je
            }
        });
        var i = o(83789)
          , t = o(30266)
          , r = o(92809)
          , l = o(80318)
          , d = o(809)
          , a = o.n(d)
          , s = o(82212)
          , u = o(17949)
          , c = o(13757)
          , p = o(18259)
          , v = o(2737)
          , f = o(94904)
          , g = o(2593)
          , m = o(81731)
          , C = o(31266)
          , x = o(58924)
          , y = o(47646)
          , N = o(10530)
          , h = o(20800)
          , R = o(68084)
          , b = o(67294)
          , A = o(24451)
          , E = o(49226)
          , j = o(85754)
          , _ = o(86355)
          , U = o(63472)
          , w = o(52956)
          , S = o(3045)
          , Y = s.QA.BigInt(0);
        function k() {
            return (0,
            E.v9)((function(e) {
                return e.mint
            }
            ))
        }
        var B = o(12374)
          , P = o(85893)
          , T = function() {
            return (0,
            P.jsxs)("svg", {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                P.jsx)("path", {
                    d: "M7.00012 1V13",
                    stroke: "#8990A5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                P.jsx)("path", {
                    d: "M13 7.00015H1",
                    stroke: "#8990A5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , I = o(41810)
          , L = o(61964)
          , O = o(90006)
          , q = o(93350)
          , z = (0,
        b.memo)((function(e) {
            var n = e.formattedAmounts
              , o = e.onFieldAInput
              , i = (e.maxAmounts,
            e.atMaxAmounts)
              , t = e.handleCurrencyASelect
              , r = e.currencies
              , l = e.onFieldBInput
              , d = e.handleCurrencyBSelect
              , a = e.poolTokenPercentage
              , s = (0,
            I.$G)().t
              , u = (0,
            b.useState)({
                a: "",
                b: ""
            })
              , c = u[0]
              , p = u[1]
              , v = function() {
                p({
                    a: "",
                    b: ""
                })
            }
              , f = function(e) {
                o(e),
                v()
            }
              , g = function(e) {
                l(e),
                v()
            };
            return (0,
            P.jsxs)(P.Fragment, {
                children: [(0,
                P.jsx)(O.Z, {
                    checkMax: !0,
                    label: s("From"),
                    value: c.a || n[S.gN.CURRENCY_A],
                    onUserInput: f,
                    onMax: function(e) {
                        f(e)
                    },
                    onCurrencySelect: t,
                    showMaxButton: !i[S.gN.CURRENCY_A],
                    currency: r[S.gN.CURRENCY_A],
                    id: "add-liquidity-input-tokena",
                    showCommonBases: !1,
                    poolTokenPercentage: a
                }), (0,
                P.jsx)(L.lg, {
                    children: (0,
                    P.jsx)(Z, {
                        onClick: function() {},
                        children: (0,
                        P.jsx)(T, {})
                    })
                }), (0,
                P.jsx)(O.Z, {
                    checkMax: !0,
                    label: s("To (estimated)"),
                    value: c.b || n[S.gN.CURRENCY_B],
                    onUserInput: g,
                    onCurrencySelect: d,
                    onMax: function(e) {
                        g(e)
                    },
                    showMaxButton: !i[S.gN.CURRENCY_B],
                    currency: r[S.gN.CURRENCY_B],
                    id: "add-liquidity-input-tokenb",
                    showCommonBases: !1
                })]
            })
        }
        ))
          , Z = q.default.div.withConfig({
            displayName: "AddLiqudityInputs__StyledAddIcon",
            componentId: "sc-ib7fo2-0"
        })(["border:none;outline:none;display:flex;align-items:center;margin-bottom:7px;justify-content:center;padding:4px;border-radius:12px;background:#fff;transition:0.4s;svg{outline:none;}"])
          , D = o(60963)
          , M = o(62639)
          , V = o(20623)
          , F = o(99270)
          , G = o(42)
          , W = o(27115)
          , K = o(62268)
          , $ = o(76483).wD.body;
        function H(e) {
            var n, o, i, t, r, l, d = e.noLiquidity, a = e.price, s = e.currencies, c = e.parsedAmounts, p = e.poolTokenPercentage, v = e.onAdd, f = (0,
            I.$G)().t;
            return (0,
            P.jsxs)(P.Fragment, {
                children: [(0,
                P.jsxs)(G.m0, {
                    children: [(0,
                    P.jsx)($, {
                        style: {
                            color: "#8990A5",
                            padding: "8px",
                            fontSize: "11px"
                        },
                        children: f("{{symbol}} Deposited", {
                            symbol: null === (n = s[S.gN.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol
                        })
                    }), (0,
                    P.jsxs)(G.DA, {
                        style: {
                            padding: "8px"
                        },
                        children: [(0,
                        P.jsx)(K.Z, {
                            currency: s[S.gN.CURRENCY_A],
                            style: {
                                marginRight: "8px"
                            }
                        }), (0,
                        P.jsx)($, {
                            style: {
                                fontWeight: "500",
                                fontSize: "11px"
                            },
                            children: (0,
                            D.E)(c[S.gN.CURRENCY_A])
                        })]
                    })]
                }), (0,
                P.jsxs)(G.m0, {
                    style: {
                        backgroundColor: "#F4F5FA",
                        borderRadius: "6px",
                        padding: "8px"
                    },
                    children: [(0,
                    P.jsx)($, {
                        style: {
                            color: "#8990A5",
                            fontSize: "11px"
                        },
                        children: f("{{symbol}} Deposited", {
                            symbol: null === (o = s[S.gN.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol
                        })
                    }), (0,
                    P.jsxs)(G.DA, {
                        children: [(0,
                        P.jsx)(K.Z, {
                            currency: s[S.gN.CURRENCY_B],
                            style: {
                                marginRight: "8px"
                            }
                        }), (0,
                        P.jsx)($, {
                            style: {
                                fontWeight: "500",
                                fontSize: "11px"
                            },
                            children: (0,
                            D.E)(c[S.gN.CURRENCY_B])
                        })]
                    })]
                }), (0,
                P.jsxs)(G.m0, {
                    style: {
                        paddingRight: "8px"
                    },
                    children: [(0,
                    P.jsx)($, {
                        style: {
                            color: "#8990A5",
                            padding: "0 8px",
                            fontSize: "11px"
                        },
                        children: f("Rates")
                    }), (0,
                    P.jsx)($, {
                        style: {
                            fontWeight: "500",
                            fontSize: "11px"
                        },
                        children: "1 ".concat(null === (i = s[S.gN.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol, " = ").concat(null === a || void 0 === a ? void 0 : a.toSignificant(4), " ").concat(null === (t = s[S.gN.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol)
                    })]
                }), (0,
                P.jsx)(G.m0, {
                    style: {
                        justifyContent: "flex-end",
                        paddingRight: "8px"
                    },
                    children: (0,
                    P.jsx)($, {
                        style: {
                            fontWeight: "500",
                            fontSize: "11px"
                        },
                        children: "1 ".concat(null === (r = s[S.gN.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol, " = ").concat(null === a || void 0 === a ? void 0 : a.invert().toSignificant(4), " ").concat(null === (l = s[S.gN.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol)
                    })
                }), (0,
                P.jsxs)(G.m0, {
                    style: {
                        backgroundColor: "#F4F5FA",
                        borderRadius: "6px",
                        padding: "8px"
                    },
                    children: [(0,
                    P.jsxs)($, {
                        style: {
                            color: "#8990A5",
                            fontSize: "11px"
                        },
                        children: [f("Share of Pool"), ":"]
                    }), (0,
                    P.jsxs)($, {
                        style: {
                            fontWeight: "500",
                            fontSize: "11px"
                        },
                        children: [d ? "100" : null === p || void 0 === p ? void 0 : p.toSignificant(4), "%"]
                    })]
                }), (0,
                P.jsx)(M.zx, {
                    mt: "10px",
                    mb: "20px",
                    onClick: function() {
                        v(),
                        u.m.events.approveLiquidityFinal()
                    },
                    fullwidth: !0,
                    children: f(d ? "Create Pool & Supply" : "Confirm Supply")
                })]
            })
        }
        var Q = (0,
        b.memo)((function(e) {
            var n = e.noLiquidity
              , o = e.handleDismissConfirmation
              , i = e.currencies
              , t = e.liquidityMinted
              , r = e.allowedSlippage
              , l = e.price
              , d = e.parsedAmounts
              , a = e.onAdd
              , s = e.poolTokenPercentage
              , u = (0,
            A.$G)().t;
            return (0,
            P.jsx)(W.pM, {
                title: u(n ? "You are creating a pool" : "You will receive"),
                onDismiss: o,
                topContent: function() {
                    return (0,
                    P.jsx)(X, {
                        noLiquidity: n,
                        currencies: i,
                        liquidityMinted: t,
                        allowedSlippage: r
                    })
                },
                bottomContent: function() {
                    return (0,
                    P.jsx)(J, {
                        price: l,
                        currencies: i,
                        parsedAmounts: d,
                        noLiquidity: n,
                        onAdd: a,
                        poolTokenPercentage: s
                    })
                }
            })
        }
        ))
          , X = (0,
        b.memo)((function(e) {
            var n, o, i, t, r = e.noLiquidity, l = e.currencies, d = e.liquidityMinted, a = e.allowedSlippage, s = (0,
            A.$G)().t;
            return r ? (0,
            P.jsx)(L.Tz, {
                gap: "20px",
                children: (0,
                P.jsx)(V.hl, {
                    mt: "20px",
                    borderRadius: "20px",
                    padding: "0",
                    children: (0,
                    P.jsxs)(G.v3, {
                        children: [(0,
                        P.jsx)(M.xv, {
                            fontSize: "24px",
                            mr: "8px",
                            children: "".concat(null === (n = l[S.gN.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, "/").concat(null === (o = l[S.gN.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol)
                        }), (0,
                        P.jsx)(F.Z, {
                            currency0: l[S.gN.CURRENCY_A],
                            currency1: l[S.gN.CURRENCY_B],
                            size: 24
                        })]
                    })
                })
            }) : (0,
            P.jsxs)(L.Tz, {
                gap: "10px",
                children: [(0,
                P.jsxs)(G.v3, {
                    children: [(0,
                    P.jsx)(M.xv, {
                        fontSize: "24px",
                        mr: "8px",
                        children: (0,
                        D.E)(d)
                    }), (0,
                    P.jsx)(F.Z, {
                        currency0: l[S.gN.CURRENCY_A],
                        currency1: l[S.gN.CURRENCY_B],
                        size: 24
                    })]
                }), (0,
                P.jsx)(G.ZP, {
                    children: (0,
                    P.jsx)(M.xv, {
                        fontSize: "22px",
                        children: s("{{aSymbol}}/{{bSymbol}} Pool Tokens", {
                            aSymbol: null === (i = l[S.gN.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol,
                            bSymbol: null === (t = l[S.gN.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol
                        })
                    })
                }), (0,
                P.jsx)(M.xv, {
                    fontSize: "14px",
                    color: "#8990A5",
                    children: (0,
                    P.jsx)(I.cC, {
                        i18nKey: "Output is estimated. If the price changes by more than <t>{{percent}}</t>% your transaction will revert.",
                        values: {
                            percent: a / 100
                        },
                        components: {
                            t: (0,
                            P.jsx)(M.xv, {
                                style: {
                                    display: "inline-block"
                                },
                                fontSize: "14px",
                                color: "#6C5DD3"
                            })
                        }
                    })
                })]
            })
        }
        ))
          , J = (0,
        b.memo)((function(e) {
            var n = e.price
              , o = e.currencies
              , i = e.parsedAmounts
              , t = e.noLiquidity
              , r = e.onAdd
              , l = e.poolTokenPercentage;
            return (0,
            P.jsx)(H, {
                price: n,
                currencies: o,
                parsedAmounts: i,
                noLiquidity: t,
                onAdd: r,
                poolTokenPercentage: l
            })
        }
        ))
          , ee = o(3882)
          , ne = o(16062)
          , oe = (0,
        b.memo)((function(e) {
            var n, o, i, t, r = e.user, l = e.approvalA, d = e.approvalB, a = e.isValid, s = e.expertMode, u = e.currencies, c = e.approveACallback, p = e.approvalSubmittedA, v = e.approveBCallback, f = e.approvalSubmittedB, g = e.setShowConfirm, m = e.parsedAmounts, C = e.onAdd, x = e.approveLoading, y = e.poolTokenPercentage, N = (0,
            I.$G)().t;
            return r ? (0,
            P.jsxs)(L.Tz, {
                gap: "md",
                children: [(l === ee.UK.NOT_APPROVED || l === ee.UK.PENDING || d === ee.UK.NOT_APPROVED || d === ee.UK.PENDING) && a && (0,
                P.jsxs)(G.m0, {
                    children: [l !== ee.UK.APPROVED && (null === (n = u[S.gN.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol) && (0,
                    P.jsx)(M.zx, {
                        onClick: function() {
                            c()
                        },
                        disabled: l !== ee.UK.NOT_APPROVED || p || x,
                        style: {
                            width: d !== ee.UK.APPROVED ? "48%" : "100%"
                        },
                        isloading: l === ee.UK.PENDING || p || x,
                        children: N("Approve {{currencySymbol}}", {
                            currencySymbol: null === (o = u[S.gN.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol
                        })
                    }), d !== ee.UK.APPROVED && (null === (i = u[S.gN.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol) && (0,
                    P.jsx)(M.zx, {
                        onClick: function() {
                            v()
                        },
                        disabled: d !== ee.UK.NOT_APPROVED || f || x,
                        style: {
                            width: l !== ee.UK.APPROVED ? "48%" : "100%"
                        },
                        isloading: d === ee.UK.PENDING || f || x,
                        children: N("Approve {{currencySymbol}}", {
                            currencySymbol: null === (t = u[S.gN.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol
                        })
                    })]
                }), (0,
                P.jsx)(ie, {
                    onClick: function() {
                        s ? C() : g(!0)
                    },
                    disabled: !a || l !== ee.UK.APPROVED || d !== ee.UK.APPROVED || x || y,
                    variant: !a && m[S.gN.CURRENCY_A] && m[S.gN.CURRENCY_B] ? "danger" : "primary",
                    children: N("Supply")
                })]
            }) : (0,
            P.jsx)(ne.Z, {
                fullwidth: !0
            })
        }
        ))
          , ie = (0,
        q.default)(M.zx).withConfig({
            displayName: "AddLiquditySupply__StyledButton",
            componentId: "sc-1pci7p1-0"
        })(["@media screen and (max-width:600px){width:100%;}"])
          , te = q.default.div.withConfig({
            displayName: "Pane",
            componentId: "sc-25f49r-0"
        })(["border-radius:6px;padding:16px;background:#f5f7ff;margin-top:8px;"])
          , re = o(53322);
        function le(e) {
            var n, o, i, t, r, l, d, a, u = e.currencies, c = e.noLiquidity, p = e.poolTokenPercentage, v = e.price, f = (0,
            I.$G)().t;
            return (0,
            P.jsx)(de, {
                children: (0,
                P.jsx)(L.Tz, {
                    gap: "md",
                    children: (0,
                    P.jsxs)(G.BA, {
                        justify: "space-around",
                        gap: "4px",
                        children: [(0,
                        P.jsxs)(L.Tz, {
                            justify: "center",
                            children: [(0,
                            P.jsx)(M.xv, {
                                color: "#6c5dd3",
                                fontSize: "14px",
                                style: {
                                    fontWeight: 500
                                },
                                children: null !== (n = null === v || void 0 === v ? void 0 : v.toSignificant(6)) && void 0 !== n ? n : "\u2014"
                            }), (0,
                            P.jsxs)(M.xv, {
                                fontSize: "14px",
                                color: "#8990a5",
                                pt: 1,
                                children: [null === (o = u[S.gN.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol, " ", f("per"), " ", null === (i = u[S.gN.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol]
                            })]
                        }), (0,
                        P.jsxs)(L.Tz, {
                            justify: "center",
                            children: [(0,
                            P.jsx)(M.xv, {
                                color: "#6c5dd3",
                                fontSize: "14px",
                                style: {
                                    fontWeight: 500
                                },
                                children: null !== (t = null === v || void 0 === v || null === (r = v.invert()) || void 0 === r ? void 0 : r.toSignificant(6)) && void 0 !== t ? t : "\u2014"
                            }), (0,
                            P.jsxs)(M.xv, {
                                fontSize: "14px",
                                color: "#8990a5",
                                pt: 1,
                                children: [null === (l = u[S.gN.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol, " ", f("per"), " ", null === (d = u[S.gN.CURRENCY_B]) || void 0 === d ? void 0 : d.symbol]
                            })]
                        }), (0,
                        P.jsxs)(L.Tz, {
                            justify: "center",
                            children: [(0,
                            P.jsxs)(M.xv, {
                                color: "#6c5dd3",
                                fontSize: "14px",
                                style: {
                                    fontWeight: 500
                                },
                                children: [c && v ? "100" : null !== (a = null !== p && void 0 !== p && p.lessThan(s.IS) ? "<0.01" : null === p || void 0 === p ? void 0 : p.toFixed(2)) && void 0 !== a ? a : "0", "%"]
                            }), (0,
                            P.jsx)(M.xv, {
                                fontSize: "14px",
                                color: "#8990a5",
                                pt: 1,
                                children: f("Share of Pool")
                            })]
                        })]
                    })
                })
            })
        }
        var de = q.default.div.withConfig({
            displayName: "PoolPriceBar__StyledPoolPriceBar",
            componentId: "sc-d97hyj-0"
        })(["@media screen and (max-width:600px){& > div > div{flex-direction:column;}& > div > div > div:not(:last-child){margin-bottom:6px !important;}}"])
          , ae = function(e) {
            var n = e.pair
              , o = e.noLiquidity
              , i = e.pairState
              , t = e.oneCurrencyIsWETH;
            return n && !o && i !== x._.INVALID ? (0,
            P.jsx)(L.Tz, {
                style: {
                    minWidth: "20rem",
                    marginTop: "1rem"
                },
                children: (0,
                P.jsx)(re.WP, {
                    showUnwrapped: t,
                    pair: n
                })
            }) : null
        }
          , se = function(e) {
            var n = e.currencies
              , o = e.pairState
              , i = e.noLiquidity
              , t = e.poolTokenPercentage
              , r = e.price
              , l = (0,
            I.$G)().t;
            return n[S.gN.CURRENCY_A] && n[S.gN.CURRENCY_B] && o !== x._.INVALID ? (0,
            P.jsxs)("div", {
                children: [(0,
                P.jsx)(ue, {
                    style: {
                        textTransform: "uppercase",
                        fontWeight: 600
                    },
                    color: "textSubtle",
                    fontSize: "12px",
                    mb: "2px",
                    children: l(i ? "Initial prices and pool share" : "Prices and pool share")
                }), (0,
                P.jsx)(te, {
                    children: (0,
                    P.jsx)(le, {
                        currencies: n,
                        poolTokenPercentage: t,
                        noLiquidity: i,
                        price: r
                    })
                })]
            }) : null
        }
          , ue = (0,
        q.default)(M.xv).withConfig({
            displayName: "InvalidPair__StyledUIKitText",
            componentId: "sc-1snuaeh-0"
        })(["@media screen and (max-width:600px){text-align:center;}"])
          , ce = function() {
            var e = (0,
            I.$G)().t;
            return (0,
            P.jsx)(L.lg, {
                children: (0,
                P.jsxs)(L.Tz, {
                    style: {
                        marginTop: "-15px",
                        marginBottom: "10px"
                    },
                    children: [(0,
                    P.jsx)(M.xv, {
                        style: {
                            fontSize: "14px",
                            color: "#8990A5",
                            textAlign: "center"
                        },
                        children: e("You are the first liquidity provider.")
                    }), (0,
                    P.jsx)(M.xv, {
                        style: {
                            fontSize: "14px",
                            color: "#8990A5",
                            textAlign: "center"
                        },
                        children: e("The ratio of tokens you add will set the price of this pool.")
                    }), (0,
                    P.jsx)(M.xv, {
                        style: {
                            fontSize: "14px",
                            color: "#8990A5",
                            textAlign: "center"
                        },
                        children: e("Once you are happy with the rate click supply to review.")
                    })]
                })
            })
        }
          , pe = o(36947)
          , ve = o(96624)
          , fe = o(11163)
          , ge = o(93578);
        var me = function(e, n, o) {
            if (e) {
                if (e.currency === n) {
                    var i = (0,
                    U.G)(o).calcAmount;
                    try {
                        return i(s.QA.subtract(e.raw, s.HP))
                    } catch (t) {
                        return e
                    }
                }
                return e
            }
        }
          , Ce = o(42675)
          , xe = o(20181)
          , ye = o(95268)
          , Ne = o(26884)
          , he = o(99629)
          , Re = o(51260);
        function be(e, n) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n && (i = i.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }
                ))),
                o.push.apply(o, i)
            }
            return o
        }
        function Ae(e) {
            for (var n = 1; n < arguments.length; n++) {
                var o = null != arguments[n] ? arguments[n] : {};
                n % 2 ? be(Object(o), !0).forEach((function(n) {
                    (0,
                    r.Z)(e, n, o[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : be(Object(o)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(o, n))
                }
                ))
            }
            return e
        }
        var Ee = q.default.div.withConfig({
            displayName: "AddLiquidity__CardWrapper",
            componentId: "sc-v7j393-0"
        })(["width:100%;"])
          , je = (0,
        b.memo)((function() {
            var e, n, o, d, T, O, q, Z, V = (0,
            p.J)(), F = V.currencyIdA, G = V.currencyIdB, K = (0,
            ye.l)(), $ = (0,
            N.Aq)(), H = K.providerParams.nativeCurrency, X = (0,
            fe.useRouter)(), J = (0,
            pe.U)(F), ne = (0,
            pe.U)(G), ie = (0,
            j.a)(), te = ie.account, re = ie.chainId, le = ie.library, de = (0,
            b.useMemo)((function() {
                return te
            }
            ), [te]), ue = Boolean(re && (J && (0,
            s.KA)(J, s.DX[re]) || ne && (0,
            s.KA)(ne, s.DX[re]))), be = (0,
            xe.LO)(), je = k(), _e = je.independentField, Ue = je.typedValue, we = je.otherTypedValue, Se = function(e, n) {
                var o, i, t, d, a, u, c = (0,
                A.$G)().t, p = (0,
                j.a)().account, v = (0,
                y.x)().chainId, f = k(), g = f.independentField, m = f.typedValue, E = f.otherTypedValue, B = g === S.gN.CURRENCY_A ? S.gN.CURRENCY_B : S.gN.CURRENCY_A, P = (0,
                b.useMemo)((function() {
                    var o;
                    return o = {},
                    (0,
                    r.Z)(o, S.gN.CURRENCY_A, null !== e && void 0 !== e ? e : void 0),
                    (0,
                    r.Z)(o, S.gN.CURRENCY_B, null !== n && void 0 !== n ? n : void 0),
                    o
                }
                ), [e, n]), T = (0,
                N.Aq)(), I = (0,
                C.y)(T, null === P || void 0 === P ? void 0 : P[S.gN.CURRENCY_A], null === P || void 0 === P ? void 0 : P[S.gN.CURRENCY_B]), L = (0,
                l.Z)(I, 2), O = L[0], q = L[1], z = (0,
                _.Z)(null === q || void 0 === q ? void 0 : q.liquidityToken), Z = O === x._.NOT_EXISTS || Boolean(z && s.QA.equal(z.raw, Y)), D = (0,
                R.K5)(null !== p && void 0 !== p ? p : void 0, [P[S.gN.CURRENCY_A], P[S.gN.CURRENCY_B]]), M = (o = {},
                (0,
                r.Z)(o, S.gN.CURRENCY_A, D[0]),
                (0,
                r.Z)(o, S.gN.CURRENCY_B, D[1]),
                o), V = (0,
                h.e)(v, m, P[g]), F = (0,
                b.useMemo)((function() {
                    if (Z)
                        return E && P[B] ? (0,
                        h.e)(v, E, P[B]) : void 0;
                    if (V) {
                        var o = (0,
                        w.N)(V, v)
                          , i = [(0,
                        w.pu)(e, v), (0,
                        w.pu)(n, v)]
                          , t = i[0]
                          , r = i[1];
                        if (t && r && o && q) {
                            var l, d, a, s, u, c, p = (0,
                            U.G)(v).calcAmount, f = B === S.gN.CURRENCY_B ? n : e, g = B === S.gN.CURRENCY_B ? null === q || void 0 === q || null === (l = q.priceOf) || void 0 === l || null === (d = l.call(q, t)) || void 0 === d || null === (a = d.quote) || void 0 === a ? void 0 : a.call(d, v, o) : null === q || void 0 === q || null === (s = q.priceOf) || void 0 === s || null === (u = s.call(q, r)) || void 0 === u || null === (c = u.quote) || void 0 === c ? void 0 : c.call(u, v, o);
                            return (0,
                            w.t$)(f) ? p(g.raw) : g
                        }
                    }
                }
                ), [Z, V, E, P, B, e, n, q, v]), G = (0,
                b.useMemo)((function() {
                    var e;
                    return e = {},
                    (0,
                    r.Z)(e, S.gN.CURRENCY_A, g === S.gN.CURRENCY_A ? V : F),
                    (0,
                    r.Z)(e, S.gN.CURRENCY_B, g === S.gN.CURRENCY_A ? F : V),
                    e
                }
                ), [F, V, g]), W = (0,
                b.useMemo)((function() {
                    if (Z) {
                        var n = G[S.gN.CURRENCY_A]
                          , o = G[S.gN.CURRENCY_B];
                        return n && o ? new s.tA(n.currency,o.currency,n.raw,o.raw) : void 0
                    }
                    var i = (0,
                    w.pu)(e, v);
                    return q && i ? q.priceOf(i) : void 0
                }
                ), [v, e, Z, q, G]), K = (0,
                b.useMemo)((function() {
                    var e = G[S.gN.CURRENCY_A]
                      , n = G[S.gN.CURRENCY_B]
                      , o = [(0,
                    w.N)(e, v), (0,
                    w.N)(n, v)]
                      , i = o[0]
                      , t = o[1];
                    if (q && z && i && t)
                        try {
                            return q.getLiquidityMinted(z, i, t)
                        } catch (d) {
                            return void console.error(d)
                        }
                }
                ), [G, v, q, z]), $ = (0,
                b.useMemo)((function() {
                    if (K && z)
                        return new s.gG(K.raw,z.add(K).raw)
                }
                ), [K, z]);
                p || (d = c("Connect Wallet")),
                O === x._.INVALID && (d = null !== (a = d) && void 0 !== a ? a : c("Invalid pair")),
                G[S.gN.CURRENCY_A] && G[S.gN.CURRENCY_B] || (d = null !== (u = d) && void 0 !== u ? u : c("Enter an amount"));
                var H, Q, X = G[S.gN.CURRENCY_A], J = G[S.gN.CURRENCY_B];
                return X && null !== M && void 0 !== M && null !== (i = M[S.gN.CURRENCY_A]) && void 0 !== i && i.lessThan(X) && (d = c("Insufficient {{symbol}} balance", {
                    symbol: null === (H = P[S.gN.CURRENCY_A]) || void 0 === H ? void 0 : H.symbol
                })),
                J && null !== M && void 0 !== M && null !== (t = M[S.gN.CURRENCY_B]) && void 0 !== t && t.lessThan(J) && (d = c("Insufficient {{symbol}} balance", {
                    symbol: null === (Q = P[S.gN.CURRENCY_B]) || void 0 === Q ? void 0 : Q.symbol
                })),
                {
                    dependentField: B,
                    currencies: P,
                    pair: q,
                    pairState: O,
                    currencyBalances: M,
                    parsedAmounts: G,
                    price: W,
                    noLiquidity: Z,
                    liquidityMinted: K,
                    poolTokenPercentage: $,
                    error: d
                }
            }(null !== J && void 0 !== J ? J : void 0, null !== ne && void 0 !== ne ? ne : void 0), Ye = Se.dependentField, ke = Se.currencies, Be = Se.pair, Pe = Se.pairState, Te = Se.currencyBalances, Ie = Se.parsedAmounts, Le = Se.price, Oe = Se.noLiquidity, qe = Se.liquidityMinted, ze = Se.poolTokenPercentage, Ze = Se.error, De = function(e) {
                var n = (0,
                E.I0)();
                return {
                    onFieldAInput: (0,
                    b.useCallback)((function(o) {
                        n((0,
                        S.LC)({
                            field: S.gN.CURRENCY_A,
                            typedValue: o,
                            noLiquidity: !0 === e
                        }))
                    }
                    ), [n, e]),
                    onFieldBInput: (0,
                    b.useCallback)((function(o) {
                        n((0,
                        S.LC)({
                            field: S.gN.CURRENCY_B,
                            typedValue: o,
                            noLiquidity: !0 === e
                        }))
                    }
                    ), [n, e])
                }
            }(Oe), Me = De.onFieldAInput, Ve = De.onFieldBInput, Fe = !Ze, Ge = (0,
            b.useState)(!1), We = Ge[0], Ke = Ge[1], $e = (0,
            b.useState)(!1), He = $e[0], Qe = $e[1], Xe = (0,
            xe.Td)(), Je = (0,
            l.Z)(Xe, 1)[0], en = (0,
            xe.$2)(), nn = (0,
            l.Z)(en, 1)[0], on = (0,
            b.useState)(""), tn = on[0], rn = on[1], ln = (0,
            b.useState)(!1), dn = ln[0], an = ln[1], sn = (0,
            I.$G)().t, un = (n = {},
            (0,
            r.Z)(n, _e, Ue),
            (0,
            r.Z)(n, Ye, Oe ? we : null !== (e = (0,
            D.E)(Ie[Ye], "0.0")) && void 0 !== e ? e : ""),
            n), cn = [S.gN.CURRENCY_A, S.gN.CURRENCY_B].reduce((function(e, n) {
                return Ae(Ae({}, e), {}, (0,
                r.Z)({}, n, me(Te[n], K.providerParams.nativeCurrency, K.id)))
            }
            ), {}), pn = [S.gN.CURRENCY_A, S.gN.CURRENCY_B].reduce((function(e, n) {
                var o, i;
                return Ae(Ae({}, e), {}, (0,
                r.Z)({}, n, null === (o = cn[n]) || void 0 === o ? void 0 : o.equalTo(null !== (i = Ie[n]) && void 0 !== i ? i : "0")))
            }
            ), {}), vn = (0,
            ee.qL)(Ie[S.gN.CURRENCY_A], $.router), fn = (0,
            l.Z)(vn, 3), gn = fn[0], mn = fn[1], Cn = fn[2], xn = (0,
            ee.qL)(Ie[S.gN.CURRENCY_B], $.router), yn = (0,
            l.Z)(xn, 3), Nn = yn[0], hn = yn[1], Rn = yn[2], bn = (0,
            b.useState)(!1), An = bn[0], En = bn[1], jn = (0,
            b.useState)(!1), _n = jn[0], Un = jn[1];
            (0,
            b.useEffect)((function() {
                gn === ee.UK.PENDING ? En(!0) : En(!1)
            }
            ), [gn, An]),
            (0,
            b.useEffect)((function() {
                Nn === ee.UK.PENDING ? Un(!0) : Un(!1)
            }
            ), [Nn, _n]);
            var wn = (0,
            Ce.h7)()
              , Sn = (0,
            f.PN)()
              , Yn = Be && {
                addressA: null === Be || void 0 === Be || null === (o = Be.token0) || void 0 === o ? void 0 : o.address,
                addressB: null === Be || void 0 === Be || null === (d = Be.token1) || void 0 === d ? void 0 : d.address
            };
            (0,
            B.j)(Yn, Be);
            var kn = function() {
                var e = (0,
                t.Z)(a().mark((function e() {
                    var n, o, t, l, d, u, p, v, f, m, C, x, y, N, h, R, b, A, E, j, _, U, Y, k, B;
                    return a().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (re && le && de) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (o = (0,
                                ge.iY)($.router, le, de),
                                t = Ie[S.gN.CURRENCY_A],
                                l = Ie[S.gN.CURRENCY_B],
                                t && l && J && ne) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                return n = {},
                                (0,
                                r.Z)(n, S.gN.CURRENCY_A, (0,
                                ge.uc)(t, Oe ? 0 : nn)[0]),
                                (0,
                                r.Z)(n, S.gN.CURRENCY_B, (0,
                                ge.uc)(l, Oe ? 0 : nn)[0]),
                                d = n,
                                u = Math.ceil(Date.now() / 1e3) + Je,
                                J === H || ne === H ? (y = ne === H,
                                p = o.estimateGas.addLiquidityETH,
                                v = o.addLiquidityETH,
                                f = [null !== (C = null === (x = (0,
                                w.pu)(y ? J : ne, re)) || void 0 === x ? void 0 : x.address) && void 0 !== C ? C : "", (y ? t : l).raw.toString(), d[y ? S.gN.CURRENCY_A : S.gN.CURRENCY_B].toString(), d[y ? S.gN.CURRENCY_B : S.gN.CURRENCY_A].toString(), de, u],
                                m = g.O$.from((y ? l : t).raw.toString())) : (p = o.estimateGas.addLiquidity,
                                v = o.addLiquidity,
                                f = [null !== (N = null === (h = (0,
                                w.pu)(J, re)) || void 0 === h ? void 0 : h.address) && void 0 !== N ? N : "", null !== (R = null === (b = (0,
                                w.pu)(ne, re)) || void 0 === b ? void 0 : b.address) && void 0 !== R ? R : "", t.raw.toString(), l.raw.toString(), d[S.gN.CURRENCY_A].toString(), d[S.gN.CURRENCY_B].toString(), de, u],
                                m = null),
                                e.next = 11,
                                (0,
                                s.Qt)(o.provider);
                            case 11:
                                return A = e.sent,
                                e.prev = 12,
                                Qe(!0),
                                e.next = 16,
                                p.apply(void 0, (0,
                                i.Z)(f).concat([m ? {
                                    value: m
                                } : {}]));
                            case 16:
                                return Y = e.sent,
                                e.next = 19,
                                v.apply(void 0, (0,
                                i.Z)(f).concat([Ae(Ae({}, m ? {
                                    value: m
                                } : {}), {}, {
                                    gasLimit: (0,
                                    s.yC)(Y),
                                    gasPrice: A
                                })]));
                            case 19:
                                return k = e.sent,
                                c.Z.addLiquidity(Sn, {
                                    formattedAmounts: un,
                                    currencies: ke
                                }),
                                wn(k, {
                                    summary: I.ag.t("Add {{val1}} {{val2}} and {{val3}} {{val4}}", {
                                        val1: null === (E = Ie[S.gN.CURRENCY_A]) || void 0 === E ? void 0 : E.toSignificant(4),
                                        val2: null === (j = ke[S.gN.CURRENCY_A]) || void 0 === j ? void 0 : j.symbol,
                                        val3: null === (_ = Ie[S.gN.CURRENCY_B]) || void 0 === _ ? void 0 : _.toSignificant(4),
                                        val4: null === (U = ke[S.gN.CURRENCY_B]) || void 0 === U ? void 0 : U.symbol
                                    })
                                }),
                                rn(k.hash),
                                e.next = 25,
                                k.wait();
                            case 25:
                                e.next = 34;
                                break;
                            case 27:
                                e.prev = 27,
                                e.t0 = e.catch(12),
                                "execution reverted: ds-math-sub-underflow" === (null === e.t0 || void 0 === e.t0 || null === (B = e.t0.data) || void 0 === B ? void 0 : B.message) && an(!0),
                                console.error("-----Error when adding liqudity-----", e.t0),
                                4001 !== (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code) && console.error(e.t0),
                                an(!0);
                            case 34:
                                return e.prev = 34,
                                Qe(!1),
                                e.finish(34);
                            case 37:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[12, 27, 34, 37]])
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }()
              , Bn = sn("Supplying {{amountA}} {{symbolA}} and {{amountB}} {{symbolB}}", {
                amountA: (0,
                D.E)(Ie[S.gN.CURRENCY_A]),
                symbolA: null === (T = ke[S.gN.CURRENCY_A]) || void 0 === T ? void 0 : T.symbol,
                amountB: (0,
                D.E)(Ie[S.gN.CURRENCY_B]),
                symbolB: null === (O = ke[S.gN.CURRENCY_B]) || void 0 === O ? void 0 : O.symbol
            })
              , Pn = "".concat((0,
            D.E)(Ie[S.gN.CURRENCY_A]), " ").concat(null === (q = ke[S.gN.CURRENCY_A]) || void 0 === q ? void 0 : q.symbol, " - ").concat((0,
            D.E)(Ie[S.gN.CURRENCY_B]), " ").concat(null === (Z = ke[S.gN.CURRENCY_B]) || void 0 === Z ? void 0 : Z.symbol)
              , Tn = (0,
            b.useCallback)((function(e) {
                En(!1),
                X.push((0,
                v.Z)(e, ne, V))
            }
            ), [G, X, F, V])
              , In = (0,
            b.useCallback)((function(e) {
                Un(!1),
                X.push((0,
                v.Z)(J, e, V))
            }
            ), [F, X, G, V])
              , Ln = (0,
            b.useCallback)((function() {
                Ke(!1),
                an(!1),
                tn && Me(""),
                rn("")
            }
            ), [Me, tn])
              , On = (0,
            b.useMemo)((function() {
                return (0,
                P.jsx)(Q, {
                    noLiquidity: Oe,
                    handleDismissConfirmation: function() {
                        Ln()
                    },
                    currencies: ke,
                    liquidityMinted: qe,
                    allowedSlippage: nn,
                    price: Le,
                    parsedAmounts: Ie,
                    onAdd: kn,
                    poolTokenPercentage: ze
                })
            }
            ), [nn, ke, Ln, dn, qe, Oe, kn, Ie, ze, Le])
              , qn = null === ze || void 0 === ze ? void 0 : ze.toFixed(2)
              , zn = Number(qn) < .02 && void 0 !== qn;
            return (0,
            P.jsx)(Re.Z, {
                children: (0,
                P.jsxs)(Ee, {
                    children: [(0,
                    P.jsx)(m.I, {
                        activeIndex: 1
                    }), (0,
                    P.jsxs)(he.Z, {
                        children: [(0,
                        P.jsx)(ve.w, {
                            adding: !0
                        }), (0,
                        P.jsxs)(Ne.im, {
                            children: [(0,
                            P.jsx)(W.ZP, {
                                hasError: dn,
                                onRepeat: function() {
                                    Ln(),
                                    Ke(!0)
                                },
                                amount: Pn,
                                isOpen: We,
                                onDismiss: Ln,
                                attemptingTxn: He,
                                hash: tn,
                                content: On,
                                pendingText: Bn
                            }), (0,
                            P.jsx)(M.eW, {
                                children: (0,
                                P.jsxs)(L.Tz, {
                                    gap: "20px",
                                    children: [Oe && (0,
                                    P.jsx)(ce, {}), (0,
                                    P.jsx)(z, {
                                        formattedAmounts: un,
                                        onFieldAInput: Me,
                                        maxAmounts: cn,
                                        atMaxAmounts: pn,
                                        handleCurrencyASelect: Tn,
                                        currencies: ke,
                                        onFieldBInput: Ve,
                                        handleCurrencyBSelect: In,
                                        poolTokenPercentage: zn
                                    }), (0,
                                    P.jsx)(se, {
                                        currencies: ke,
                                        pairState: Pe,
                                        noLiquidity: Oe,
                                        poolTokenPercentage: ze,
                                        price: Le
                                    }), (0,
                                    P.jsx)(oe, {
                                        user: de,
                                        approvalA: gn,
                                        approvalB: Nn,
                                        approveLoading: Cn || Rn,
                                        isValid: Fe,
                                        expertMode: be,
                                        currencies: ke,
                                        approveACallback: function() {
                                            return u.m.events.approveLiquidity(),
                                            mn()
                                        },
                                        approvalSubmittedA: An,
                                        approveBCallback: function() {
                                            return u.m.events.approveLiquidity(),
                                            hn()
                                        },
                                        approvalSubmittedB: _n,
                                        setShowConfirm: Ke,
                                        parsedAmounts: Ie,
                                        onAdd: kn,
                                        error: Ze,
                                        poolTokenPercentage: zn
                                    })]
                                })
                            })]
                        })]
                    }), (0,
                    P.jsx)(ae, {
                        pair: Be,
                        noLiquidity: Oe,
                        pairState: Pe,
                        oneCurrencyIsWETH: ue
                    })]
                })
            })
        }
        ))
    },
    26884: function(e, n, o) {
        o.d(n, {
            im: function() {
                return r
            },
            DC: function() {
                return l
            },
            bb: function() {
                return d
            }
        });
        var i = o(62639)
          , t = o(93350)
          , r = t.default.div.withConfig({
            displayName: "styleds__Wrapper",
            componentId: "sc-s19dnf-0"
        })(["position:relative;margin-top:16px;"])
          , l = (0,
        t.default)(i.xv).withConfig({
            displayName: "styleds__ClickableText",
            componentId: "sc-s19dnf-1"
        })([":hover{cursor:pointer;}color:", ";"], (function(e) {
            return e.theme.colors.primary
        }
        ))
          , d = (t.default.button.withConfig({
            displayName: "styleds__MaxButton",
            componentId: "sc-s19dnf-2"
        })(["padding:0.5rem 1rem;background-color:", ";border:1px solid ", ";border-radius:0.5rem;font-size:1rem;", "{padding:0.25rem 0.5rem;}font-weight:500;cursor:pointer;margin:0.25rem;overflow:hidden;color:", ";:hover{border:1px solid ", ";}:focus{border:1px solid ", ";outline:none;}"], (function(e) {
            return e.theme.colors.primaryDark
        }
        ), (function(e) {
            return e.theme.colors.primaryDark
        }
        ), (function(e) {
            return e.theme.mediaQueries.sm
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        )),
        t.default.span.withConfig({
            displayName: "styleds__Dots",
            componentId: "sc-s19dnf-3"
        })(["&::after{display:inline-block;animation:ellipsis 1.25s infinite;content:'.';width:1em;text-align:left;}@keyframes ellipsis{0%{content:'.';}33%{content:'..';}66%{content:'...';}}"]))
    },
    46445: function(e, n, o) {
        var i = o(67294)
          , t = o(45697)
          , r = o.n(t);
        function l() {
            return (l = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var o = arguments[n];
                    for (var i in o)
                        Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function d(e, n) {
            if (null == e)
                return {};
            var o, i, t = function(e, n) {
                if (null == e)
                    return {};
                var o, i, t = {}, r = Object.keys(e);
                for (i = 0; i < r.length; i++)
                    o = r[i],
                    n.indexOf(o) >= 0 || (t[o] = e[o]);
                return t
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    o = r[i],
                    n.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (t[o] = e[o])
            }
            return t
        }
        var a = (0,
        i.forwardRef)((function(e, n) {
            var o = e.color
              , t = void 0 === o ? "currentColor" : o
              , r = e.size
              , a = void 0 === r ? 24 : r
              , s = d(e, ["color", "size"]);
            return i.createElement("svg", l({
                ref: n,
                xmlns: "http://www.w3.org/2000/svg",
                width: a,
                height: a,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: t,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, s), i.createElement("polyline", {
                points: "20 6 9 17 4 12"
            }))
        }
        ));
        a.propTypes = {
            color: r().string,
            size: r().oneOfType([r().string, r().number])
        },
        a.displayName = "Check",
        n.Z = a
    },
    69293: function(e, n, o) {
        var i = o(67294)
          , t = o(76362)
          , r = ["mousedown", "touchstart"];
        n.Z = function(e, n, o) {
            void 0 === o && (o = r);
            var l = (0,
            i.useRef)(n);
            (0,
            i.useEffect)((function() {
                l.current = n
            }
            ), [n]),
            (0,
            i.useEffect)((function() {
                for (var n = function(n) {
                    var o = e.current;
                    o && !o.contains(n.target) && l.current(n)
                }, i = 0, r = o; i < r.length; i++) {
                    var d = r[i];
                    (0,
                    t.on)(document, d, n)
                }
                return function() {
                    for (var e = 0, i = o; e < i.length; e++) {
                        var r = i[e];
                        (0,
                        t.S1)(document, r, n)
                    }
                }
            }
            ), [o, e])
        }
    }
}]);
