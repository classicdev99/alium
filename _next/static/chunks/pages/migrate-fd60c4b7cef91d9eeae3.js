(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6722], {
    20640: function(e, a, n) {
        "use strict";
        var r = n(11742)
          , t = {
            "text/plain": "Text",
            "text/html": "Url",
            default: "Text"
        };
        e.exports = function(e, a) {
            var n, d, s, c, i, o, x = !1;
            a || (a = {}),
            n = a.debug || !1;
            try {
                if (s = r(),
                c = document.createRange(),
                i = document.getSelection(),
                (o = document.createElement("span")).textContent = e,
                o.style.all = "unset",
                o.style.position = "fixed",
                o.style.top = 0,
                o.style.clip = "rect(0, 0, 0, 0)",
                o.style.whiteSpace = "pre",
                o.style.webkitUserSelect = "text",
                o.style.MozUserSelect = "text",
                o.style.msUserSelect = "text",
                o.style.userSelect = "text",
                o.addEventListener("copy", (function(r) {
                    if (r.stopPropagation(),
                    a.format)
                        if (r.preventDefault(),
                        "undefined" === typeof r.clipboardData) {
                            n && console.warn("unable to use e.clipboardData"),
                            n && console.warn("trying IE specific stuff"),
                            window.clipboardData.clearData();
                            var d = t[a.format] || t.default;
                            window.clipboardData.setData(d, e)
                        } else
                            r.clipboardData.clearData(),
                            r.clipboardData.setData(a.format, e);
                    a.onCopy && (r.preventDefault(),
                    a.onCopy(r.clipboardData))
                }
                )),
                document.body.appendChild(o),
                c.selectNodeContents(o),
                i.addRange(c),
                !document.execCommand("copy"))
                    throw new Error("copy command was unsuccessful");
                x = !0
            } catch (l) {
                n && console.error("unable to copy using execCommand: ", l),
                n && console.warn("trying IE specific stuff");
                try {
                    window.clipboardData.setData(a.format || "text", e),
                    a.onCopy && a.onCopy(window.clipboardData),
                    x = !0
                } catch (l) {
                    n && console.error("unable to copy using clipboardData: ", l),
                    n && console.error("falling back to prompt"),
                    d = function(e) {
                        var a = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                        return e.replace(/#{\s*key\s*}/g, a)
                    }("message"in a ? a.message : "Copy to clipboard: #{key}, Enter"),
                    window.prompt(d, e)
                }
            } finally {
                i && ("function" == typeof i.removeRange ? i.removeRange(c) : i.removeAllRanges()),
                o && document.body.removeChild(o),
                s()
            }
            return x
        }
    },
    12374: function(e, a, n) {
        "use strict";
        n.d(a, {
            j: function() {
                return c
            }
        });
        var r = n(47646)
          , t = n(67294)
          , d = n(73549)
          , s = n(20181)
          , c = function(e, a) {
            var n = function(e) {
                var a = (0,
                s.uB)();
                return function() {
                    e ? a(e) : console.error("CANT ADD PAIR!")
                }
            }(a)
              , c = (0,
            r.x)().chainId
              , o = (0,
            t.useCallback)((function() {
                var r = (0,
                d.j)() && localStorage.getItem("redux_localstorage_simple_user")
                  , t = JSON.parse(r);
                if (null !== t && void 0 !== t && t.pairs && e && a) {
                    var s = t.pairs[c] ? Object.values(t.pairs[c]) : [];
                    (null === s || void 0 === s ? void 0 : s.length) && s.find((function(a) {
                        return i(a, null === e || void 0 === e ? void 0 : e.addressA, null === e || void 0 === e ? void 0 : e.addressB)
                    }
                    )) || n()
                }
            }
            ), [c, e, n, a]);
            (0,
            t.useEffect)((function() {
                o()
            }
            ), [e, a, o])
        }
          , i = function(e, a, n) {
            var r, t, d, s, c, i, o, x;
            return Boolean((null === e || void 0 === e || null === (r = e.token0) || void 0 === r || null === (t = r.address) || void 0 === t ? void 0 : t.toLowerCase()) === (null === a || void 0 === a ? void 0 : a.toLowerCase()) && (null === e || void 0 === e || null === (d = e.token1) || void 0 === d || null === (s = d.address) || void 0 === s ? void 0 : s.toLowerCase()) === (null === n || void 0 === n ? void 0 : n.toLowerCase()) || (null === e || void 0 === e || null === (c = e.token0) || void 0 === c || null === (i = c.address) || void 0 === i ? void 0 : i.toLowerCase()) === (null === n || void 0 === n ? void 0 : n.toLowerCase()) && (null === e || void 0 === e || null === (o = e.token1) || void 0 === o || null === (x = o.address) || void 0 === x ? void 0 : x.toLowerCase()) === (null === a || void 0 === a ? void 0 : a.toLowerCase()))
        }
    },
    31266: function(e, a, n) {
        "use strict";
        n.d(a, {
            y: function() {
                return g
            },
            z: function() {
                return h
            }
        });
        var r = n(80318)
          , t = n(82212)
          , d = n(67294)
          , s = n(85754)
          , c = n(52956)
          , i = n(58924)
          , o = n(30266)
          , x = n(809)
          , l = n.n(x)
          , f = n(206)
          , p = n(21340)
          , u = n(52503);
        function h(e, a) {
            var n = (0,
            s.a)().chainId
              , x = null === a || void 0 === a ? void 0 : a.factory
              , h = null === a || void 0 === a ? void 0 : a.initCodeHash
              , g = (0,
            d.useMemo)((function() {
                return e.map((function(e) {
                    var a = (0,
                    r.Z)(e, 2)
                      , t = a[0]
                      , d = a[1];
                    return [(0,
                    c.pu)(t, n), (0,
                    c.pu)(d, n)]
                }
                ))
            }
            ), [n, e])
              , b = function(e) {
                var a = (0,
                s.a)().chainId
                  , n = (0,
                d.useMemo)((function() {
                    return null === e || void 0 === e ? void 0 : e.reduce((function(e, a) {
                        return e + a
                    }
                    ), "")
                }
                ), [e])
                  , r = (0,
                d.useMemo)((function() {
                    return (null === e || void 0 === e ? void 0 : e.length) && !!a && "useReservesOfPairs/".concat(a, "/").concat(n)
                }
                ), [a, null === e || void 0 === e ? void 0 : e.length, n]);
                return (0,
                u.ZP)(r, (0,
                o.Z)(l().mark((function a() {
                    return l().wrap((function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0,
                                a.abrupt("return", (0,
                                p.i)(f.yM, e.map((function(e) {
                                    return {
                                        address: e,
                                        name: "getReserves"
                                    }
                                }
                                ))));
                            case 4:
                                a.prev = 4,
                                a.t0 = a.catch(0),
                                console.error(a.t0);
                            case 7:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a, null, [[0, 4]])
                }
                ))))
            }((0,
            d.useMemo)((function() {
                var e;
                return null === (e = g.map((function(e) {
                    var a = (0,
                    r.Z)(e, 2)
                      , n = a[0]
                      , d = a[1];
                    try {
                        return n && d && !n.equals(d) ? t.sO.getAddress(n, d, x, h) : void 0
                    } catch (s) {
                        return void console.error(s)
                    }
                }
                ))) || void 0 === e ? void 0 : e.filter((function(e) {
                    return !!e
                }
                ))
            }
            ), [x, g, h]))
              , m = b.data
              , w = void 0 === m ? [] : m
              , v = b.isValidating;
            return {
                pairs: (0,
                d.useMemo)((function() {
                    return null === w || void 0 === w ? void 0 : w.map((function(e, a) {
                        var n = g[a][0]
                          , d = g[a][1];
                        if (v)
                            return [i._.LOADING, null];
                        if (!e)
                            return [i._.NOT_EXISTS, null];
                        if (!n || !d || n.equals(d))
                            return [i._.INVALID, null];
                        var s = e.reserve0
                          , c = e.reserve1
                          , o = null !== n && void 0 !== n && n.sortsBefore(d) ? [n, d] : [d, n]
                          , l = (0,
                        r.Z)(o, 2)
                          , f = l[0]
                          , p = l[1];
                        return [i._.EXISTS, new t.sO(new t.dt(f,s.toString()),new t.dt(p,c.toString()),x,h)]
                    }
                    ))
                }
                ), [w, g, v, x, h]),
                loading: v
            }
        }
        function g(e, a, n) {
            var r = h([[a, n]], e).pairs;
            return (null === r || void 0 === r ? void 0 : r[0]) || []
        }
    },
    58924: function(e, a, n) {
        "use strict";
        var r;
        n.d(a, {
            _: function() {
                return r
            }
        }),
        function(e) {
            e[e.LOADING = 0] = "LOADING",
            e[e.NOT_EXISTS = 1] = "NOT_EXISTS",
            e[e.EXISTS = 2] = "EXISTS",
            e[e.INVALID = 3] = "INVALID"
        }(r || (r = {}))
    },
    10530: function(e, a, n) {
        "use strict";
        n.d(a, {
            Aq: function() {
                return d
            }
        });
        var r = n(22906)
          , t = n(47646)
          , d = function(e) {
            var a = (0,
            t.x)().chainId;
            return (0,
            r.getExchangeConfig)(e || a, "alium")
        }
    },
    18480: function(e, a, n) {
        "use strict";
        n.r(a),
        n.d(a, {
            __N_SSG: function() {
                return ge
            },
            default: function() {
                return be
            }
        });
        var r, t = n(30266), d = n(809), s = n.n(d), c = n(82212), i = n(17949), o = n(13757), x = n(94904), l = n(26510), f = n(588), p = n(81731), u = n(10530), h = n(41810), g = n(67294), b = n(85754), m = n(17409), w = n(80118), v = n(42675), A = n(95268), C = n(93350), E = n(52503), y = n(99629), B = n(80318), D = n(31266), F = n(12374), k = n(47646), S = n(83789), j = n(13672), N = n(21340), P = function() {
            var e = (0,
            t.Z)(s().mark((function e(a, n) {
                var r, t, d, c, i, o;
                return s().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            a.lpTokensInfoLength();
                        case 2:
                            return r = e.sent,
                            t = Number(r.toString()),
                            d = (0,
                            S.Z)(Array(t).keys()),
                            c = d.map((function(e) {
                                return {
                                    address: a.address,
                                    name: "lpTokensInfo",
                                    params: [e]
                                }
                            }
                            )),
                            e.next = 8,
                            (0,
                            N.i)(j.Z, c);
                        case 8:
                            return i = e.sent,
                            o = (null === i || void 0 === i ? void 0 : i.length) && Object.keys(i).find((function(e) {
                                var a = i[Number(e)][0];
                                return (null === a || void 0 === a ? void 0 : a.toLocaleLowerCase()) === n.addressLP.toLocaleLowerCase()
                            }
                            )),
                            e.abrupt("return", o);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(a, n) {
                return e.apply(this, arguments)
            }
        }(), O = n(11783), I = n(96486), _ = n(206), T = n(92809);
        function L(e, a) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                a && (r = r.filter((function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function M(e) {
            for (var a = 1; a < arguments.length; a++) {
                var n = null != arguments[a] ? arguments[a] : {};
                a % 2 ? L(Object(n), !0).forEach((function(a) {
                    (0,
                    T.Z)(e, a, n[a])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(Object(n)).forEach((function(a) {
                    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a))
                }
                ))
            }
            return e
        }
        var Z = M(M({}, (0,
        n(82343).L)().reduce((function(e, a) {
            return M(M({}, e), {}, (0,
            T.Z)({}, a, []))
        }
        ), {})), {}, (r = {},
        (0,
        T.Z)(r, c.a_.MAINNET, [{
            address: "0x65E9CfDBC579856B6354d369AFBFbA2B2a3C7856",
            exchange: "Bakeryswap"
        }, {
            address: "0x559e3D9611E9cB8a77c11335Bdac49621382188B",
            exchange: "Bakeryswap"
        }, {
            address: "0xbcF3278098417E23d941613ce36a7cE9428724A5",
            exchange: "Bakeryswap"
        }, {
            address: "0x9Ec271C041a18aA7beF070A1F196eea1D06Ab7cb",
            exchange: "Bakeryswap"
        }, {
            address: "0xa50b9c5DB61C855D5939aa1a66B26Df77745809b",
            exchange: "Bakeryswap"
        }, {
            address: "0x56CDE265aaD310e623C8f8994a5143582659aBfC",
            exchange: "Bakeryswap"
        }, {
            address: "0x58521373474810915b02FE968D1BCBe35Fc61E09",
            exchange: "Bakeryswap"
        }, {
            address: "0x087a49F79CAB8cc13F8A44f9d6E0B2487a9D28e3",
            exchange: "Bakeryswap"
        }, {
            address: "0x0ed7e52944161450477ee417de9cd3a859b14fd0",
            exchange: "Pancakeswap"
        }, {
            address: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
            exchange: "Pancakeswap"
        }, {
            address: "0x7EFaEf62fDdCCa950418312c6C91Aef321375A00",
            exchange: "Pancakeswap"
        }, {
            address: "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE",
            exchange: "Pancakeswap"
        }, {
            address: "0x74E4716E431f45807DCF19f284c7aA99F18a4fbc",
            exchange: "Pancakeswap"
        }, {
            address: "0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1",
            exchange: "Pancakeswap"
        }, {
            address: "0xD171B26E4484402de70e3Ea256bE5A2630d7e88D",
            exchange: "Pancakeswap"
        }, {
            address: "0xF45cd219aEF8618A92BAa7aD848364a158a24F33",
            exchange: "Pancakeswap"
        }, {
            address: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082",
            exchange: "Pancakeswap"
        }, {
            address: "0xEc6557348085Aa57C72514D67070dC863C0a5A8c",
            exchange: "Pancakeswap"
        }, {
            address: "0x3d94d03eb9ea2D4726886aB8Ac9fc0F18355Fd13",
            exchange: "Biswap"
        }, {
            address: "0xaCAac9311b0096E04Dfe96b6D87dec867d3883Dc",
            exchange: "Biswap"
        }, {
            address: "0xDA8ceb724A06819c0A5cDb4304ea0cB27F8304cF",
            exchange: "Biswap"
        }, {
            address: "0x8840C6252e2e86e545deFb6da98B2a0E26d8C1BA",
            exchange: "Biswap"
        }, {
            address: "0x5bf6941f029424674bb93A43b79fc46bF4A67c21",
            exchange: "Biswap"
        }, {
            address: "0x6f2829B3061211C24a34583647e222f72Ff2e962",
            exchange: "Biswap"
        }, {
            address: "0x6216E04cd40DB2c6FBEd64f1B5830A98D3A91740",
            exchange: "Biswap"
        }, {
            address: "0x15B868fB4b0358F26ACfdb11f20309593bf2fE72",
            exchange: "Biswap"
        }, {
            address: "0xC7e9d76ba11099AF3F330ff829c5F442d571e057",
            exchange: "Biswap"
        }, {
            address: "0x1483767E665B3591677Fd49F724bf7430C18Bf83",
            exchange: "Biswap"
        }, {
            address: "0xA13aFe2DF0fA0bb11F2aeAAAF98aC1D591E108d1",
            exchange: "MDEX"
        }, {
            address: "0x340192D37d95fB609874B1db6145ED26d1e47744",
            exchange: "MDEX"
        }, {
            address: "0x62c1dEC1fF328DCdC157Ae0068Bb21aF3967aCd9",
            exchange: "MDEX"
        }, {
            address: "0x09CB618bf5eF305FadfD2C8fc0C26EeCf8c6D5fd",
            exchange: "MDEX"
        }, {
            address: "0x82E8F9e7624fA038DfF4a39960F5197A43fa76aa",
            exchange: "MDEX"
        }, {
            address: "0x2045c12aa02b7551E430a1fE47b4b795Bf84e72F",
            exchange: "MDEX"
        }, {
            address: "0x577d005912C49B1679B4c21E334FdB650E92C077",
            exchange: "MDEX"
        }, {
            address: "0x4fb8253432FB3e92109c91E3Ff2b85FfA0f6A1F4",
            exchange: "MDEX"
        }, {
            address: "0x969f2556F786a576F32AeF6c1D6618f0221Ec70e",
            exchange: "MDEX"
        }, {
            address: "0x9f4Da89774570E27170873BefD139a79CB1A3da2",
            exchange: "MDEX"
        }, {
            address: "0xBe63F8cdcF2c7CC509EBb18742d3866F0C3bc2b4",
            exchange: "Pantherswap"
        }, {
            address: "0x6AF4C4433474B2F8BA385AD62B23299c82846783",
            exchange: "Pantherswap"
        }, {
            address: "0x7EC7702d1e65C84470720563175A20c2fc03a72d",
            exchange: "Pantherswap"
        }, {
            address: "0x26782a2669d32bE87C892AdA10Aa630d0834B3c4",
            exchange: "Pantherswap"
        }, {
            address: "0x542B077f6a06b488A31B8C8b31E456F2B3984989",
            exchange: "Pantherswap"
        }, {
            address: "0x9C58fdabd7E41E1A2bfC5b7b8b8B6fF248D8aa66",
            exchange: "Pantherswap"
        }, {
            address: "0x1ffd9f2190B82537E4e0e0C5AC55588e24485889",
            exchange: "Pantherswap"
        }, {
            address: "0x9E78cEa62cD4DF80520912A137C0778Fe8a34186",
            exchange: "Pantherswap"
        }, {
            address: "0xb69C2518b9c4433f82EEa0D61bCE97875575BE22",
            exchange: "Pantherswap"
        }, {
            address: "0x60593Abea55e9Ea9d31c1b6473191cD2475a720D",
            exchange: "Ape"
        }, {
            address: "0x51e6D27FA57373d8d4C256231241053a70Cb1d93",
            exchange: "Ape"
        }, {
            address: "0x2e707261d086687470B515B320478Eb1C88D49bb",
            exchange: "Ape"
        }, {
            address: "0x83C5b5b309EE8E232Fe9dB217d394e262a71bCC0",
            exchange: "Ape"
        }, {
            address: "0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11",
            exchange: "Ape"
        }, {
            address: "0xC087C78AbaC4A0E900a327444193dBF9BA69058E",
            exchange: "Ape"
        }, {
            address: "0xc6EA23E8aDAf03E700be3AA50bE30ECd39B7bF49",
            exchange: "Ape"
        }, {
            address: "0xd296aF3aeF3aB6C599065e7c0b564C176bF0816C",
            exchange: "Ape"
        }, {
            address: "0x1E1aFE9D9c5f290d8F6996dDB190bd111908A43D",
            exchange: "Ape"
        }, {
            address: "0xcd1e0B85B72EA3Ecdf8A4B79c7bf9bCFf5113829",
            exchange: "Ape"
        }, {
            address: "0xB55d67AA2d57861c81487b29A578aE1CdF272795",
            exchange: "RinanceOldV1"
        }, {
            address: "0x92f12720733C626E3bEa3A35A9Bd6151ED12ff92",
            exchange: "RinanceOldV1"
        }, {
            address: "0xf1Cac46EFf9A6BE6A1183375631a9fF6d0c38176",
            exchange: "RinanceOldV1"
        }, {
            address: "0xDB9BA54E30B6e444960B8b7B2E0834DD8896A333",
            exchange: "RinanceOldV1"
        }, {
            address: "0x4AfCB08A78FEeF566C6A62bB9856A3971C5317c6",
            exchange: "RinanceOldV1"
        }]),
        (0,
        T.Z)(r, c.a_.BSCTESTNET, [{
            address: "0x9cfd6f19c06880e38c4fc6cb2c1d3af54c88372b",
            exchange: "Pancakeswap"
        }, {
            address: "0x17e0f07be0fe740408a5780d5aac636a2868896f",
            exchange: "Biswap"
        }, {
            address: "0x7f222F999e39F85079732D728034F93F3a5757a4",
            exchange: "Uniswap"
        }, {
            address: "0xAC7CFdE1a1a2930d90721EFA23e6aA2A34e18Fa3",
            exchange: "RinanceOldV1"
        }, {
            address: "0x11e7AFd1ff91012d306A03C5228Ce9Aa33b6a4B4",
            exchange: "RinanceOldV1"
        }, {
            address: "0xEe0969a3f65c8FDEb0F628B6Da8e2fc71DAb5d8E",
            exchange: "RinanceOldV1"
        }, {
            address: "0xc445Baf474467dB69775b9b7455C8b85F38e5E94",
            exchange: "RinanceOldV1"
        }]),
        (0,
        T.Z)(r, c.a_.HECOMAINNET, [{
            address: "0x85c5316C7C7D88dA9337fCcdEEF4A9891fCD5e6F",
            exchange: "MDEX"
        }, {
            address: "0xf37DE9f4E1a0A58F839DbA868e76B5779109c2a4",
            exchange: "MDEX"
        }, {
            address: "0x53E458aD1CFEB9582736db6BdE9aF89948e3bc3d",
            exchange: "MDEX"
        }, {
            address: "0x2d6884276dAD0d20755Df8857eBfBb30726488ee",
            exchange: "MDEX"
        }, {
            address: "0x499B6E03749B4bAF95F9E70EeD5355b138EA6C31",
            exchange: "MDEX"
        }]),
        (0,
        T.Z)(r, c.a_.ETHER_MAINNET, [{
            address: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
            exchange: "Uniswap"
        }, {
            address: "0x3041CbD36888bECc7bbCBc0045E3B1f144466f5f",
            exchange: "Uniswap"
        }, {
            address: "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
            exchange: "Uniswap"
        }, {
            address: "0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5",
            exchange: "Uniswap"
        }, {
            address: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
            exchange: "Uniswap"
        }, {
            address: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
            exchange: "Uniswap"
        }, {
            address: "0xd3d2E2692501A5c9Ca623199D38826e513033a17",
            exchange: "Uniswap"
        }, {
            address: "0xC2aDdA861F89bBB333c90c492cB837741916A225",
            exchange: "Uniswap"
        }, {
            address: "0x004375Dff511095CC5A197A54140a24eFEF3A416",
            exchange: "Uniswap"
        }, {
            address: "0xB20bd5D04BE54f870D5C0d3cA85d82b34B836405",
            exchange: "Uniswap"
        }, {
            address: "0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58",
            exchange: "Sushiswap"
        }, {
            address: "0x397FF1542f962076d0BFE58eA045FfA2d347ACa0",
            exchange: "Sushiswap"
        }, {
            address: "0x795065dCc9f64b5614C407a6EFDC400DA6221FB0",
            exchange: "Sushiswap"
        }, {
            address: "0x06da0fd433C1A5d7a4faa01111c044910A184553",
            exchange: "Sushiswap"
        }, {
            address: "0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f",
            exchange: "Sushiswap"
        }, {
            address: "0x088ee5007C98a9677165D78dD2109AE4a3D04d0C",
            exchange: "Sushiswap"
        }, {
            address: "0xD75EA151a61d06868E31F8988D28DFE5E9df57B4",
            exchange: "Sushiswap"
        }, {
            address: "0xC40D16476380e4037e6b1A2594cAF6a6cc8Da967",
            exchange: "Sushiswap"
        }, {
            address: "0x18d98D452072Ac2EB7b74ce3DB723374360539f1",
            exchange: "Sushiswap"
        }, {
            address: "0xBa13afEcda9beB75De5c56BbAF696b880a5A50dD",
            exchange: "Sushiswap"
        }, {
            address: "0x795065dCc9f64b5614C407a6EFDC400DA6221FB0",
            exchange: "Sushiswap"
        }]),
        (0,
        T.Z)(r, c.a_.MATIC_MAINNET, [{
            address: "0xD862dB749534d539713B2c392421Fe5a8e43E19E",
            exchange: "Honey"
        }, {
            address: "0x6D3842ab227A0436A6e8c459E93c74bD8c16fb34",
            exchange: "Honey"
        }, {
            address: "0x3F24E142FBF05D16AB1cf79e6df3473f515b16E0",
            exchange: "Honey"
        }, {
            address: "0xEAE495187472B8DB83cF9dC738ba3869FDe5b1D3",
            exchange: "Honey"
        }, {
            address: "0x1013ba833071Fd8AcA8Bf2AC83E5515c5fB9E76F",
            exchange: "Honey"
        }, {
            address: "0xE49fea624d480A5233b5dfC4969a27319873e6f0",
            exchange: "Honey"
        }, {
            address: "0x0c787944946d22922C9f41C477CC539700d35bB2",
            exchange: "Honey"
        }, {
            address: "0xcF863d14b6C3551Cad42E4B7F0a2b4B6A72ce122",
            exchange: "Honey"
        }, {
            address: "0x86b7249272fabb82Ef36550eF898Ea539225E7F0",
            exchange: "Honey"
        }, {
            address: "0x39D736D2b254eE30796f43Ec665143010b558F82",
            exchange: "FireBird"
        }, {
            address: "0x10F525CFbCe668815Da5142460af0fCfb5163C81",
            exchange: "FireBird"
        }, {
            address: "0x7887a048a2E5995CcFC3B1F2E9c23Ab2EcA40BCF",
            exchange: "FireBird"
        }, {
            address: "0x273c39ebd4e0c49f8Cc6E5A2B3c0e4ca355B5352",
            exchange: "Polycat"
        }, {
            address: "0xbbBd54c1CD649288d2e584917778eEccD8D8254d",
            exchange: "Polycat"
        }, {
            address: "0x97B4f2797cC903D76F9b8ff41A94286F0B16198e",
            exchange: "Polycat"
        }, {
            address: "0xC4e90AE0298E0e7BE0102Cce64089231e1E2D67C",
            exchange: "Polycat"
        }, {
            address: "0xC8174d091c288FF78De98303c2973140Cbcf3B23",
            exchange: "Polycat"
        }, {
            address: "0x8A4CEb4DffA238539C5d62Ce424980e8fdb21EBc",
            exchange: "Polycat"
        }, {
            address: "0x160532D2536175d65C03B97b0630A9802c274daD",
            exchange: "Quickswap"
        }, {
            address: "0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d",
            exchange: "Quickswap"
        }, {
            address: "0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D",
            exchange: "Quickswap"
        }, {
            address: "0x2cF7252e74036d1Da831d11089D326296e64a728",
            exchange: "Quickswap"
        }, {
            address: "0xadbF1854e5883eB8aa7BAf50705338739e558E5b",
            exchange: "Quickswap"
        }, {
            address: "0xF6422B997c7F54D1c6a6e103bcb1499EeA0a7046",
            exchange: "Quickswap"
        }, {
            address: "0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd",
            exchange: "Quickswap"
        }, {
            address: "0x90bc3E68Ba8393a3Bf2D79309365089975341a43",
            exchange: "Quickswap"
        }, {
            address: "0x5cA6CA6c3709E1E6CFe74a50Cf6B2B6BA2Dadd67",
            exchange: "Quickswap"
        }, {
            address: "0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827",
            exchange: "Quickswap"
        }, {
            address: "0xBe40F7Fff5A2235aF9a8cb79A17373162eFeFA9C",
            exchange: "Dfyn Exchange"
        }, {
            address: "0xb7bd6d48C9b1aF7E126d0389C6970F157D974f33",
            exchange: "Dfyn Exchange"
        }, {
            address: "0xdd228fdC8A41A02BDEa72060F53C1f88A2FD48B6",
            exchange: "Dfyn Exchange"
        }, {
            address: "0x39eAA90a70E8FdC04E1f63Db04e1c62c9aCe0641",
            exchange: "Dfyn Exchange"
        }, {
            address: "0x7D51bAd48d253dae37cC82cad07f73849286Deec",
            exchange: "Dfyn Exchange"
        }, {
            address: "0x2FE46369b1C261Be62F9fD327ff5A9B17Ab0F451",
            exchange: "Dfyn Exchange"
        }, {
            address: "0xb5E1a07c9b6aB3BEe8d9Bf4066D324c5da89C07F",
            exchange: "Dfyn Exchange"
        }, {
            address: "0xB1Eda2fbCb02da970C1aAcd26eCF434BfeE5B674",
            exchange: "Dfyn Exchange"
        }, {
            address: "0x7162c0AcF32820920a741D8fA466b8e6D60D530D",
            exchange: "Dfyn Exchange"
        }]),
        (0,
        T.Z)(r, c.a_.FANTOM, [{
            address: "0x9606d683d03f012dda296ef0ae9261207c4a5847",
            exchange: "spiritSwap"
        }, {
            address: "0xe7e90f5a767406eff87fdad7eb07ef407922ec1d",
            exchange: "spiritSwap"
        }, {
            address: "0xe7f86cef8fef60ce5050899d1f8e465c00d04a79",
            exchange: "spiritSwap"
        }, {
            address: "0x613bf4e46b4817015c01c6bb31c7ae9edaadc26e",
            exchange: "spiritSwap"
        }, {
            address: "0x279b2c897737a50405ed2091694f225d83f2d3ba",
            exchange: "spiritSwap"
        }, {
            address: "0xd061c6586670792331e14a80f3b3bb267189c681",
            exchange: "spiritSwap"
        }, {
            address: "0x51eb93ecfeffbb2f6fe6106c4491b5a0b944e8bd",
            exchange: "spiritSwap"
        }, {
            address: "0x9fe4c0ce5f533e96c2b72d852f190961ad5a7bb3",
            exchange: "spiritSwap"
        }, {
            address: "0x374c8acb146407ef0ae8f82baafcf8f4ec1708cf",
            exchange: "spiritSwap"
        }, {
            address: "0x74fe5ddc4c27f91a1898ccd5ac62dfeb2d3df726",
            exchange: "spiritSwap"
        }, {
            address: "0x2b4c76d0dc16be1c31d4c1dc53bf9b45987fc75c",
            exchange: "Spookyswap"
        }, {
            address: "0xec7178f4c41f346b2721907f5cf7628e388a7a58",
            exchange: "Spookyswap"
        }, {
            address: "0xf0702249f4d3a25cd3ded7859a165693685ab577",
            exchange: "Spookyswap"
        }, {
            address: "0xec454eda10accdd66209c57af8c12924556f3abd",
            exchange: "Spookyswap"
        }, {
            address: "0xe120ffbda0d14f3bb6d6053e90e63c572a66a428",
            exchange: "Spookyswap"
        }, {
            address: "0x5965e53aa80a0bcf1cd6dbdd72e6a9b2aa047410",
            exchange: "Spookyswap"
        }, {
            address: "0xfdb9ab8b9513ad9e419cf19530fee49d412c3ee3",
            exchange: "Spookyswap"
        }, {
            address: "0x4de9f0ed95de2461b6db1660f908348c42893b1a",
            exchange: "Spookyswap"
        }, {
            address: "0x956de13ea0fa5b577e4097be837bf4ac80005820",
            exchange: "Spookyswap"
        }, {
            address: "0xf84e313b36e86315af7a06ff26c8b20e9eb443c3",
            exchange: "Spookyswap"
        }]),
        (0,
        T.Z)(r, c.a_.METIS, [{
            address: "0x1cad5f8f5d4c0ad49646b2565cc0ca725e4280ea",
            exchange: "Netswap"
        }, {
            address: "0xf5988809ac97c65121e2c34f5d49558e3d12c253",
            exchange: "Netswap"
        }, {
            address: "0x4db4ce7f5b43a6b455d3c3057b63a083b09b8376",
            exchange: "Netswap"
        }, {
            address: "0x59051b5f5172b69e66869048dc69d35db0b3610d",
            exchange: "Netswap"
        }, {
            address: "0x5ae3ee7fbb3cb28c17e7adc3a6ae605ae2465091",
            exchange: "Netswap"
        }, {
            address: "0x3d60afecf67e6ba950b499137a72478b2ca7c5a1",
            exchange: "Netswap"
        }, {
            address: "0xd8ff1c29204256c506098470143896ba2f54cfad",
            exchange: "Netswap"
        }, {
            address: "0x89d433e8ccc871b3f12ea17b651ff3633dfb5dc0",
            exchange: "Netswap"
        }, {
            address: "0x845a5646a42cc77bbd0595fcaab9db7af56de119",
            exchange: "Netswap"
        }, {
            address: "0x77b3ebea2852fb761b7fb10dee5738b28ae78e9f",
            exchange: "Netswap"
        }, {
            address: "0xdd7df3522a49e6e1127bf1a1d3baea3bc100583b",
            exchange: "TethysFinance"
        }, {
            address: "0xc294087e4a8d046af842364880ab819c0b77c2bc",
            exchange: "TethysFinance"
        }, {
            address: "0xee5adb5b0dfc51029aca5ad4bc684ad676b307f7",
            exchange: "TethysFinance"
        }, {
            address: "0x8121113eb9952086dec3113690af0538bb5506fd",
            exchange: "TethysFinance"
        }, {
            address: "0x586f616bb811f1b0dfa953fbf6de3569e7919752",
            exchange: "TethysFinance"
        }, {
            address: "0xcd1cc85dc7b4deef34247ccb5d7c42a58039b1ba",
            exchange: "TethysFinance"
        }, {
            address: "0xa41dca7fc984686acfd4b02da49b6f318814135b",
            exchange: "TethysFinance"
        }, {
            address: "0x1200d571e98f5ad37ed8da5f81bd5d36f730d27d",
            exchange: "TethysFinance"
        }, {
            address: "0xa6e29245e92652e0d934f4f98824069b9fd52576",
            exchange: "TethysFinance"
        }, {
            address: "0x6c4768d4b3acd4a3ff01f179faffdaebe084d12d",
            exchange: "TethysFinance"
        }]),
        (0,
        T.Z)(r, c.a_.AURORA, [{
            exchange: "Wannaswap",
            address: "0x256d03607eeE0156b8A2aB84da1D5B283219Fe97"
        }, {
            address: "0xbf9Eef63139b67fd0ABf22bD5504ACB0519a4212",
            exchange: "Wannaswap"
        }, {
            address: "0x2e02Bea8e9118f7d2ccadA1d402286Cc6d54bd67",
            exchange: "Wannaswap"
        }, {
            address: "0xBf560771B6002a58477EFBCDD6774A5a1947587B",
            exchange: "Wannaswap"
        }, {
            address: "0x3502eaC6Fa27bEebDC5cd3615B7CB0784B0Ce48f",
            exchange: "Wannaswap"
        }, {
            address: "0x4BAd8241B1f3B132AdCBbf64421Db07EeAba9B01",
            exchange: "Wannaswap"
        }, {
            address: "0x436C525D536adC447c7775575f88D357634734C1",
            exchange: "Wannaswap"
        }, {
            address: "0x7E9EA10E5984a09D19D05F31ca3cB65BB7df359d",
            exchange: "Wannaswap"
        }, {
            address: "0x6443532841a5279cb04420E61Cf855cBEb70dc8C",
            exchange: "Wannaswap"
        }, {
            address: "0x523faE29D7ff6FD38842c8F271eDf2ebd3150435",
            exchange: "Wannaswap"
        }]),
        (0,
        T.Z)(r, c.a_.MOONBEAM, [{
            address: "0xa0799832fb2b9f18acf44b92fbbedcfd6442dd5e",
            exchange: "beamswap"
        }, {
            address: "0xa35b2c07cb123ea5e1b9c7530d0812e7e03ec3c1",
            exchange: "beamswap"
        }, {
            address: "0x7ef9491774a81f6db7bb759fe2f645c334dcf5b1",
            exchange: "beamswap"
        }, {
            address: "0x6ba3071760d46040fb4dc7b627c9f68efaca3000",
            exchange: "beamswap"
        }, {
            address: "0xb929914b89584b4081c7966ac6287636f7efd053",
            exchange: "beamswap"
        }, {
            address: "0x34a1f4ab3548a92c6b32cd778eed310fcd9a340d",
            exchange: "beamswap"
        }, {
            address: "0x99588867e817023162f4d4829995299054a5fc57",
            exchange: "beamswap"
        }, {
            address: "0xa135de8e019447da28f15eb480aea0a242af5335",
            exchange: "beamswap"
        }, {
            address: "0x321e45b7134b5ed52129027f1743c8e71da0a339",
            exchange: "beamswap"
        }, {
            address: "0xe6bc36c2f0c0883c2f7eacb1fe1ae53472201d99",
            exchange: "beamswap"
        }, {
            address: "0x555B74dAFC4Ef3A5A1640041e3244460Dc7610d1",
            exchange: "StellaSwap"
        }, {
            address: "0x6775ff3828a19EB5926C0C4D572183cA15Aa4C08",
            exchange: "StellaSwap"
        }, {
            address: "0x367c36dAE9ba198A4FEe295c22bC98cB72f77Fe1",
            exchange: "StellaSwap"
        }, {
            address: "0x81e11a9374033d11Cc7e7485A7192AE37D0795D6",
            exchange: "StellaSwap"
        }, {
            address: "0x02CE5D1E6D3e346FC6eE10045a9995188FE50aF0",
            exchange: "StellaSwap"
        }, {
            address: "0xAc2657ba28768FE5F09052f07A9B7ea867A4608f",
            exchange: "StellaSwap"
        }, {
            address: "0x8A2f167F307D633Ba6999A3fB177cAf05F719176",
            exchange: "StellaSwap"
        }, {
            address: "0x2F412C140080039eaF9dE01c95e84cFb1c8D98aD",
            exchange: "StellaSwap"
        }, {
            address: "0x98DfAE1ECAc911bf718C9D1e62D68EB3b4f17f8a",
            exchange: "StellaSwap"
        }, {
            address: "0x2f6F833fAb26Bf7F81827064f67ea4844BdEa03F",
            exchange: "StellaSwap"
        }]),
        (0,
        T.Z)(r, c.a_.MOONRIVER, [{
            address: "0x85657487978d65bb7881e9dad3aa119e6e6705ce",
            exchange: "Sushiswap"
        }, {
            address: "0x756057872d1ad41c703b68e12701d27874fbe533",
            exchange: "Sushiswap"
        }, {
            address: "0xd4ce5671b842573eda99164971afaa034245f4d8",
            exchange: "Sushiswap"
        }, {
            address: "0xb0a594e76a876de40a7fda9819e5c4ec6d9fd222",
            exchange: "Sushiswap"
        }, {
            address: "0xc5147a6e773343afe527249a26ef16afc6a0013f",
            exchange: "Sushiswap"
        }, {
            address: "0x930b0464411de2296e3fd3eee30ab989f635645e",
            exchange: "Sushiswap"
        }, {
            address: "0x310c4d18640af4878567c4a31cb9cbde7cd234a3",
            exchange: "Sushiswap"
        }, {
            address: "0xc6ca9c83c07a7a3a5461c817ea5210723508a9fd",
            exchange: "Sushiswap"
        }, {
            address: "0x6dc6d33331e9d5deef449c8cab9e34d687bea80e",
            exchange: "Sushiswap"
        }, {
            address: "0x2caa640c7c1a7eab6af12634024125a69fcf37a6",
            exchange: "Sushiswap"
        }]),
        (0,
        T.Z)(r, c.a_.OKC, [{
            address: "0x67faa182851635e417218f5ce2b70e01a4c77e51",
            exchange: "Cherryswap"
        }, {
            address: "0xf3098211d012ff5380a03d80f150ac6e5753caa8",
            exchange: "Cherryswap"
        }, {
            address: "0xf193f0bb30a4ba945dd8d23fada8f2f32c45eb9a",
            exchange: "Cherryswap"
        }, {
            address: "0xc606a9c809e56276056f9aa79fd2cec633b69cbd",
            exchange: "Cherryswap"
        }, {
            address: "0xc606a9c809e56276056f9aa79fd2cec633b69cbd",
            exchange: "Cherryswap"
        }, {
            address: "0xcc6d70b44811b4b3346967340647e9c5fdc53ba6",
            exchange: "Cherryswap"
        }, {
            address: "0x826fb5ae4400bc55848c5673b1d46f4e91185c35",
            exchange: "Cherryswap"
        }, {
            address: "0x94e01843825ef85ee183a711fa7ae0c5701a731a",
            exchange: "Cherryswap"
        }, {
            address: "0xb6fcc8ce3389aa239b2a5450283ae9ea5df9d1a9",
            exchange: "Cherryswap"
        }, {
            address: "0x84ee6a98990010fe87d2c79822763fca584418e9",
            exchange: "Kswap"
        }, {
            address: "0xb996245431877d24c32cf3b77d49c70a4bea599c",
            exchange: "Kswap"
        }]),
        r))
          , R = function() {
            var e = (0,
            t.Z)(s().mark((function e(a, n) {
                var r, t, d, c, i, o, x, l, p;
                return s().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (r = Z[n],
                            a && n) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", []);
                        case 3:
                            return t = {
                                pair: {
                                    balanceOf: V(r, "balanceOf", [a]),
                                    token0: V(r, "token0"),
                                    token1: V(r, "token1")
                                },
                                token: {
                                    symbol: function(e) {
                                        return z(e)
                                    }
                                }
                            },
                            e.prev = 4,
                            e.next = 7,
                            (0,
                            N.i)(_.yM, [].concat((0,
                            S.Z)(t.pair.balanceOf), (0,
                            S.Z)(t.pair.token0), (0,
                            S.Z)(t.pair.token1)));
                        case 7:
                            return d = e.sent,
                            c = null === r || void 0 === r ? void 0 : r.length,
                            i = (0,
                            I.cloneDeep)(d).splice(0, c),
                            o = (0,
                            I.cloneDeep)(d).splice(c, c),
                            x = (0,
                            I.cloneDeep)(d).splice(2 * c, c),
                            e.next = 14,
                            q(o, n);
                        case 14:
                            return l = e.sent,
                            e.next = 17,
                            q(x, n);
                        case 17:
                            return p = e.sent,
                            e.abrupt("return", null === i || void 0 === i ? void 0 : i.reduce((function(e, a, n) {
                                var t;
                                if (null !== a && void 0 !== a && null !== (t = a[0]) && void 0 !== t && t.gt(0)) {
                                    var d = l[n]
                                      , s = p[n];
                                    e.push({
                                        title: "".concat(d.toUpperCase(), "/").concat(s.toUpperCase()),
                                        symbolA: d,
                                        symbolB: s,
                                        addressA: o[n][0],
                                        addressB: x[n][0],
                                        addressLP: r[n].address,
                                        exchange: r[n].exchange,
                                        balance: (0,
                                        f.formatEther)(null === a || void 0 === a ? void 0 : a[0])
                                    })
                                }
                                return e
                            }
                            ), []));
                        case 21:
                            return e.prev = 21,
                            e.t0 = e.catch(4),
                            console.error("getReadyToMigrateTokens/multicall:", e.t0),
                            e.abrupt("return", []);
                        case 25:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[4, 21]])
            }
            )));
            return function(a, n) {
                return e.apply(this, arguments)
            }
        }()
          , V = function(e, a, n) {
            return e.map((function(e) {
                return {
                    address: e.address,
                    name: a,
                    params: n || []
                }
            }
            ))
        }
          , z = function(e) {
            return e.map((function(e) {
                return {
                    address: (0,
                    B.Z)(e, 1)[0],
                    name: "symbol"
                }
            }
            ))
        }
          , q = function(e, a) {
            return Promise.all(e.map(function() {
                var e = (0,
                t.Z)(s().mark((function e(n) {
                    var r, t;
                    return s().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", "-");
                            case 2:
                                return e.prev = 2,
                                r = null === n || void 0 === n ? void 0 : n[0],
                                e.next = 6,
                                (0,
                                O.v7)({
                                    address: r,
                                    chainId: a
                                });
                            case 6:
                                return t = e.sent,
                                e.abrupt("return", t.symbol);
                            case 10:
                                return e.prev = 10,
                                e.t0 = e.catch(2),
                                e.abrupt("return", "-");
                            case 13:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 10]])
                }
                )));
                return function(a) {
                    return e.apply(this, arguments)
                }
            }()))
        }
          , U = n(16062)
          , X = n(79308)
          , W = n(85893)
          , H = function e() {
            var a = (0,
            h.$G)().t;
            return (0,
            W.jsxs)(e.StepOne, {
                children: [(0,
                W.jsxs)(e.Captions, {
                    children: [(0,
                    W.jsx)("div", {
                        className: "title",
                        children: a("Migrate Rinance Liquidity")
                    }), (0,
                    W.jsx)("div", {
                        className: "sub-title",
                        children: a("Connect to a wallet to view your liquidity")
                    })]
                }), (0,
                W.jsx)(e.Connect, {
                    children: (0,
                    W.jsx)(U.Z, {
                        title: a("Connect wallet")
                    })
                })]
            })
        };
        H.StepOne = C.default.div.withConfig({
            displayName: "Step1Connect__StepOne",
            componentId: "sc-hw2t7-0"
        })(["display:flex;flex-direction:row-reverse;justify-content:flex-end;align-items:center;margin:24px;@media ", "{margin:16px;flex-direction:column;}"], X.mq.down(X.AV.sm)),
        H.Captions = C.default.div.withConfig({
            displayName: "Step1Connect__Captions",
            componentId: "sc-hw2t7-1"
        })(["display:flex;flex-direction:column;align-items:center;.title{", "}.sub-title{", " text-align:center;color:#8990a5;margin-top:8px;}"], X.cp.w_.medium, X.cp.UR.regular),
        H.Connect = C.default.div.withConfig({
            displayName: "Step1Connect__Connect",
            componentId: "sc-hw2t7-2"
        })(["margin-right:104px;@media ", "{margin-right:80px;}@media ", "{margin-right:0px;}"], X.mq.down(X.AV.lg), X.mq.down(X.AV.sm));
        var G = n(56413)
          , Q = n(31607)
          , K = n(99270)
          , Y = function(e) {
            return e.inverted ? (0,
            W.jsx)("svg", {
                width: "12",
                height: "8",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                W.jsx)("path", {
                    d: "M1 6.5L6.00362 1.5L11 6.5",
                    stroke: "#8990A5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            }) : (0,
            W.jsx)("svg", {
                width: "12",
                height: "8",
                viewBox: "0 0 12 8",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                W.jsx)("path", {
                    d: "M11 1.5L5.99638 6.5L1 1.5",
                    stroke: "#8990A5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        }
          , $ = function(e) {
            var a, n = e.pairs, r = e.selectedPairKey, t = e.setSelectedPairKey, d = e.tokensAmount, s = e.setTokensAmount, i = e.handleMigrate, o = e.isLoadingPairs, x = (0,
            h.$G)().t, l = (0,
            g.useState)(!1), f = l[0], p = l[1], u = null !== (a = n[r]) && void 0 !== a ? a : {
                title: x("Token not selected"),
                exchange: "",
                balance: 0,
                symbolA: "",
                symbolB: ""
            }, b = u.title, m = u.exchange, w = u.balance, v = w >= Number(d) && Number(d) > 0;
            return (0,
            W.jsxs)(J, {
                children: [(0,
                W.jsxs)("header", {
                    children: [(0,
                    W.jsx)("div", {
                        className: "title",
                        children: x("Your Liquidity")
                    }), (0,
                    W.jsx)("div", {
                        className: "title2",
                        children: x("Click on a pool below, input the amount you wish to migrate or select max, and click migrate")
                    })]
                }), (0,
                W.jsxs)("main", {
                    children: [(0,
                    W.jsxs)("div", {
                        className: "tokens",
                        onClick: function() {
                            return p((function(e) {
                                return !e
                            }
                            ))
                        },
                        style: {
                            minHeight: "54px"
                        },
                        children: [(0,
                        W.jsx)("div", {
                            className: "label",
                            children: x("Tokens")
                        }), (0,
                        W.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "100%"
                            },
                            children: [(0,
                            W.jsx)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: o ? (0,
                                W.jsx)("div", {
                                    style: {
                                        position: "absolute",
                                        margin: "5px 16px 0px 0px"
                                    },
                                    children: (0,
                                    W.jsx)(Q.Z, {
                                        width: "24px",
                                        type: "TailSpin",
                                        color: "#6C5DD3"
                                    })
                                }) : (0,
                                W.jsxs)(W.Fragment, {
                                    children: [(0,
                                    W.jsx)(K.Z, {
                                        size: 24,
                                        currency0: new c.F(18,u.symbolA),
                                        currency1: new c.F(18,u.symbolB)
                                    }), b, (0,
                                    W.jsx)("div", {
                                        style: {
                                            margin: "0 0 0 8px",
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: m && (0,
                                        W.jsx)("img", {
                                            src: "/images/exchanges/".concat(m, ".png"),
                                            alt: ""
                                        })
                                    })]
                                })
                            }), (0,
                            W.jsx)(Y, {
                                inverted: f
                            })]
                        })]
                    }), f && (0,
                    W.jsxs)("div", {
                        className: "tokens-list",
                        children: [!n.length && (0,
                        W.jsx)("div", {
                            className: "title2",
                            style: {
                                padding: "12px 16px"
                            },
                            children: x("You do not have liquidity available for migration")
                        }), n.map((function(e, a) {
                            return (0,
                            W.jsx)("div", {
                                className: "tokens-list-item",
                                onClick: function() {
                                    t(a),
                                    p(!1)
                                },
                                children: (0,
                                W.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [(0,
                                    W.jsx)(K.Z, {
                                        size: 24,
                                        currency0: new c.F(18,e.symbolA),
                                        currency1: new c.F(18,e.symbolB)
                                    }), e.title, (0,
                                    W.jsx)("div", {
                                        style: {
                                            margin: "0 0 0 8px",
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        children: e.exchange && (0,
                                        W.jsx)("img", {
                                            src: "/images/exchanges/".concat(e.exchange, ".png"),
                                            alt: ""
                                        })
                                    })]
                                })
                            }, a)
                        }
                        ))]
                    }), (0,
                    W.jsxs)("div", {
                        className: "tokens-amount ".concat(-1 !== r),
                        children: [(0,
                        W.jsx)("div", {
                            className: "label",
                            children: x("Amount of Tokens")
                        }), (0,
                        W.jsx)(G.y.Input, {
                            value: d,
                            onUserInput: function(e) {
                                !function(e) {
                                    var a = e
                                      , n = (a = a.replace(/[^0-9.]/g, "")).split(".");
                                    n.length > 2 && n[1].length > 1 && (a = "".concat(n[0], ".").concat(n[1])),
                                    (n = a.split(".")).length > 1 && (a = "".concat(Number(n[0]), ".").concat(n[1].slice(0, 18))),
                                    isNaN(Number(a)) ? s("0") : s(a)
                                }(e)
                            },
                            placeholder: "0.0",
                            disabled: -1 === r,
                            style: {
                                textAlign: "left"
                            }
                        }), d !== w && (0,
                        W.jsx)("div", {
                            className: "max",
                            onClick: function() {
                                s(w)
                            },
                            children: x("MAX")
                        })]
                    }), (0,
                    W.jsx)("div", {
                        className: "balance",
                        children: (0,
                        W.jsxs)("div", {
                            children: [x("Balance:"), " ", (0,
                            W.jsx)("span", {
                                children: w
                            })]
                        })
                    }), (0,
                    W.jsxs)("div", {
                        className: "action",
                        children: [v ? (0,
                        W.jsx)("div", {
                            className: "button ".concat(v),
                            onClick: i,
                            children: x("Migrate")
                        }) : (0,
                        W.jsx)("div", {
                            className: "button false",
                            children: x("Migrate")
                        }), -1 !== r && (0,
                        W.jsx)("div", {
                            className: "title2",
                            children: x("Your {{exchange}} {{title}} liquidity will become RinanceSwap {{title}} liquidity", {
                                exchange: m,
                                title: b
                            })
                        })]
                    })]
                })]
            })
        }
          , J = C.default.div.withConfig({
            displayName: "Step2YourLiquidity__Root",
            componentId: "sc-g8vss3-0"
        })(["display:flex;flex-direction:column;.title{", " color:", ";margin:0 0 8px 0;}.title2{", " color:", ";}header{padding:24px;border-bottom:1px solid #f4f5fa;}main{padding:24px;}.tokens{user-select:none;width:100%;margin:16px 0;position:relative;padding:16px;display:flex;align-items:center;font-size:14px;line-height:16px;letter-spacing:0.1px;color:#0b1359;border:1px solid #d2d6e5;border-radius:6px;cursor:pointer;}.tokens-list{margin:-16px 0 16px 0;width:100%;padding:2px;border-radius:6px;background:#ffffff;box-shadow:0 6px 12px rgba(185,189,208,0.4);}.tokens-list-item{user-select:none;cursor:pointer;height:48px;border-radius:6px;display:flex;align-items:center;padding-left:16px;font-size:14px;line-height:16px;letter-spacing:0.1px;color:#0b1359;}.tokens-list-item:hover{background:#f5f7ff;}.tokens-amount{margin-top:24px;width:100%;position:relative;padding:0 8px 0 16px;display:flex;align-items:center;border:1px solid #d2d6e5;border-radius:6px;&:focus-within{border-color:#6c5dd3;}}.tokens-amount input{padding:16px 0;}.tokens-amount .max{padding:10px 8px;background:#e6e6f6;border-radius:6px;font-weight:bold;font-size:10px;line-height:10px;letter-spacing:1px;color:#6c5dd3;cursor:pointer;}.tokens-amount .max:hover{background:#6c5cd1;color:white;}.label{background:white;padding:0 4px;position:absolute;top:-7px;left:12px;font-weight:500;font-size:11px;line-height:14px;color:#6c5dd3;}.action{display:flex;flex-direction:column;}@media screen and (min-width:768px){.action{flex-direction:row;align-items:center;}}.button{margin:16px 24px 16px 0;width:fit-content;display:flex;justify-content:center;align-items:center;padding:14px 24px;border-radius:6px;background:#6c5dd3;color:#ffffff;cursor:pointer;font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;user-select:none;}.button:hover{background:#8677f0;}.button.false{cursor:default;background:#cbc8ee;}.button.false:hover{background:#cbc8ee;}.balance{display:flex;flex-direction:column;justify-content:space-between;font-size:14px;line-height:20px;letter-spacing:0.3px;color:#8990a5;font-weight:bold;@media screen and (min-width:1024px){flex-direction:row;}}.balance > div{margin:20px 0 4px 0;}.balance span{color:#6c5dd3;}img{max-width:24px;max-height:24px;}"], X.cp.w_.medium, (function(e) {
            return e.theme.colors.darkBlue
        }
        ), X.cp.lA.medium, (function(e) {
            return e.theme.colors.basic
        }
        ))
          , ee = function() {
            var e = (0,
            h.$G)().t;
            return (0,
            W.jsxs)(ae, {
                children: [(0,
                W.jsx)("div", {
                    className: "loading"
                }), (0,
                W.jsx)("div", {
                    className: "title",
                    children: e("Migrating")
                })]
            })
        }
          , ae = C.default.div.withConfig({
            displayName: "Step3Migrating__Root",
            componentId: "sc-1yaivgc-0"
        })(["display:flex;flex-direction:column;align-items:center;margin:40px 0;.loading{display:inline-block;width:80px;height:80px;}.loading:after{content:' ';display:block;width:80px;height:80px;border-radius:50%;border-width:4px;border-style:solid;border-color:#6c5dd3 #6c5dd3 transparent transparent;animation:loading 2s linear infinite;}.title{font-size:16px;line-height:22px;letter-spacing:0.3px;color:#0b1359;margin-top:24px;}@media screen and (min-width:768px){margin:160px 0;}@keyframes loading{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"])
          , ne = n(20640)
          , re = n.n(ne)
          , te = n(41664)
          , de = n(93578)
          , se = n(62639)
          , ce = n(82738)
          , ie = function() {
            return (0,
            W.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                W.jsx)("path", {
                    d: "M20 9H11C9.89543 9 9 9.89543 9 11V20C9 21.1046 9.89543 22 11 22H20C21.1046 22 22 21.1046 22 20V11C22 9.89543 21.1046 9 20 9Z",
                    stroke: "#8990A5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                W.jsx)("path", {
                    opacity: "0.5",
                    d: "M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5",
                    stroke: "#8990A5",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
          , oe = function() {
            return (0,
            W.jsxs)("svg", {
                width: "80",
                height: "80",
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                W.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "78",
                    height: "78",
                    rx: "39",
                    fill: "#FF4D00",
                    fillOpacity: "0.1"
                }), (0,
                W.jsx)("path", {
                    d: "M31.5156 48.4852L48.4862 31.5147M31.5156 31.5146L48.4862 48.4852",
                    stroke: "#FF4D00",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                W.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "78",
                    height: "78",
                    rx: "39",
                    stroke: "#FF4D00",
                    strokeWidth: "2"
                })]
            })
        }
          , xe = function() {
            return (0,
            W.jsxs)("svg", {
                width: "80",
                height: "80",
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                W.jsx)("rect", {
                    x: "1",
                    y: "1",
                    width: "78",
                    height: "78",
                    rx: "39",
                    fill: "#1EA76D",
                    fillOpacity: "0.1"
                }), (0,
                W.jsx)("path", {
                    d: "M54.1553 29.2695L34.6938 48.7311L25.8477 39.8849",
                    stroke: "#1EA76D",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                W.jsx)("rect", {
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
          , le = function(e) {
            var a = e.pair
              , n = void 0 === a ? {} : a
              , r = e.isSuccessful
              , t = e.trx
              , d = void 0 === t ? "" : t
              , s = e.aliumLPTokenForPair
              , c = void 0 === s ? "" : s
              , i = e.setStep1
              , o = e.handleTryAgain
              , x = e.error
              , l = (0,
            se.aQ)().chainId
              , f = (0,
            h.$G)().t
              , p = (0,
            g.useState)(!1)
              , u = p[0]
              , b = p[1];
            (0,
            g.useEffect)((function() {
                if (u) {
                    var e = setTimeout((function() {
                        return b(!1)
                    }
                    ), 1500);
                    return function() {
                        clearTimeout(e)
                    }
                }
            }
            ), [u]);
            var m = u ? f("Copied") : c
              , w = (0,
            de.E8)(l, d, "transaction");
            return (0,
            W.jsxs)(fe, {
                children: [(0,
                W.jsx)("div", {
                    className: "close",
                    onClick: i,
                    children: (0,
                    W.jsx)(ce.b, {})
                }), r ? (0,
                W.jsxs)(W.Fragment, {
                    children: [(0,
                    W.jsx)(xe, {}), (0,
                    W.jsx)("div", {
                        className: "title",
                        children: f("Migrate {{pairExchange}} {{pairTitle}} liquidity to RinanceSwap", {
                            pairExchange: n.exchange,
                            pairTitle: n.title
                        })
                    }), (0,
                    W.jsxs)("div", {
                        style: {
                            display: "flex",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "8px 0",
                            padding: "0 16px"
                        },
                        children: [(0,
                        W.jsx)("div", {
                            style: {
                                marginRight: "12px"
                            },
                            children: f("Rinance-LP Token:")
                        }), (0,
                        W.jsxs)("div", {
                            className: "copy",
                            children: [(0,
                            W.jsx)("input", {
                                type: "text",
                                value: m
                            }), (0,
                            W.jsx)("div", {
                                onClick: function() {
                                    return e = c,
                                    void b(re()(e));
                                    var e
                                },
                                children: (0,
                                W.jsx)(ie, {})
                            })]
                        })]
                    }), (0,
                    W.jsx)(te.default, {
                        href: "".concat(w),
                        children: (0,
                        W.jsx)("a", {
                            className: "view-on-explorer",
                            target: "_blank",
                            children: f("View on explorer >")
                        })
                    })]
                }) : (0,
                W.jsxs)(W.Fragment, {
                    children: [(0,
                    W.jsx)(oe, {}), (0,
                    W.jsxs)("div", {
                        className: "title error",
                        children: [(0,
                        W.jsx)("p", {
                            children: f("Migration failed")
                        }), (0,
                        W.jsx)("p", {
                            children: x || f("Too small amount. Please increase the amount and try again")
                        })]
                    }), (0,
                    W.jsx)(se.zx, {
                        onClick: o,
                        children: f("Try again")
                    })]
                })]
            })
        }
          , fe = C.default.div.withConfig({
            displayName: "Step4MigrationResult__Root",
            componentId: "sc-1aomjac-0"
        })(["display:flex;flex-direction:column;align-items:center;padding:40px 0;position:relative;.close{position:absolute;right:0;top:0;padding:12px 15px;margin:4px;cursor:pointer;border-radius:6px;&:hover{background:#eeeeee;}}.title{font-size:16px;line-height:22px;letter-spacing:0.3px;color:#0b1359;margin:24px 8px 10px 8px;text-align:center;&.error{margin:24px 0 36px 0;color:#ff4d00;}}.copy{padding:12px 16px;width:100%;max-width:354px;display:flex;justify-content:center;align-items:center;font-size:14px;line-height:16px;letter-spacing:0.1px;color:#0b1359;border:1px solid #d2d6e5;border-radius:6px;& input{border:none;outline:none;width:100%;font-size:14px;line-height:16px;letter-spacing:0.1px;color:#8990a5;}& svg{cursor:pointer;}}.view-on-explorer{padding:12px;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;}@media screen and (min-width:768px){padding:90px 0;}"])
          , pe = C.default.div.withConfig({
            displayName: "Migrate__Root",
            componentId: "sc-rrg8wk-0"
        })([""])
          , ue = function() {
            var e = (0,
            A.l)()
              , a = (0,
            u.Aq)()
              , n = (0,
            g.useState)(2)
              , r = n[0]
              , d = n[1]
              , C = (0,
            g.useState)(-1)
              , S = C[0]
              , j = C[1]
              , N = (0,
            g.useState)("")
              , O = N[0]
              , I = N[1]
              , _ = (0,
            g.useState)("")
              , T = _[0]
              , L = _[1]
              , M = (0,
            g.useState)("")
              , Z = M[0]
              , V = M[1]
              , z = (0,
            g.useState)(!1)
              , q = z[0]
              , U = z[1]
              , X = (0,
            g.useState)("")
              , G = X[0]
              , Q = X[1]
              , K = (0,
            x.PN)()
              , Y = (0,
            b.a)()
              , J = Y.account
              , ae = Y.chainId
              , ne = (0,
            v.h7)()
              , re = (0,
            m.kY)(e.address.vampiring)
              , te = (0,
            m.MQ)(a.factory)
              , de = (0,
            E.ZP)(J && ae && "".concat(ae, "/").concat(J), (function() {
                return R(J, ae)
            }
            ))
              , se = de.data
              , ce = void 0 === se ? [] : se
              , ie = de.mutate
              , oe = de.isValidating
              , xe = ce[S]
              , fe = (0,
            m.Ey)(null === xe || void 0 === xe ? void 0 : xe.addressLP);
            !function(e) {
                var a = (0,
                k.x)().chainId
                  , n = (0,
                g.useMemo)((function() {
                    return e && new c.WU(a,e.addressA,18,e.symbolA,e.title)
                }
                ), [a, e])
                  , r = (0,
                g.useMemo)((function() {
                    return e && new c.WU(a,e.addressB,18,e.symbolB,e.title)
                }
                ), [a, e])
                  , t = (0,
                u.Aq)()
                  , d = (0,
                D.y)(t, n, r)
                  , s = (0,
                B.Z)(d, 2)[1]
                  , i = (0,
                g.useMemo)((function() {
                    return s
                }
                ), [s]);
                (0,
                F.j)(e, i)
            }(xe);
            var ue = function() {
                var e = (0,
                t.Z)(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                d(J ? 2 : 1),
                                ie([]),
                                j(-1),
                                I(""),
                                L(""),
                                V(""),
                                U(!1),
                                Q("");
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            (0,
            g.useEffect)((function() {
                (0,
                t.Z)(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                ue();
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            }
            ), [J]);
            var he = function() {
                var a = (0,
                t.Z)(s().mark((function a() {
                    var n, r, t, i, x, l, p, u;
                    return s().wrap((function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                if (Q(""),
                                !(-1 === S || Number(xe.balance) < Number(O))) {
                                    a.next = 3;
                                    break
                                }
                                return a.abrupt("return");
                            case 3:
                                return d(3),
                                a.next = 6,
                                P(re, xe);
                            case 6:
                                if (null !== (n = a.sent) && void 0 !== n && n.toString()) {
                                    a.next = 10;
                                    break
                                }
                                return d(2),
                                a.abrupt("return");
                            case 10:
                                return a.prev = 10,
                                a.next = 13,
                                te.getPair(null === xe || void 0 === xe ? void 0 : xe.addressA, null === xe || void 0 === xe ? void 0 : xe.addressB);
                            case 13:
                                r = a.sent,
                                a.next = 22;
                                break;
                            case 16:
                                return a.prev = 16,
                                a.t0 = a.catch(10),
                                U(!1),
                                d(4),
                                console.error("!!! GET PAIR:", a.t0),
                                a.abrupt("return");
                            case 22:
                                return t = (0,
                                f.parseEther)(String(O)),
                                a.next = 25,
                                fe.allowance(J, e.address.vampiring);
                            case 25:
                                if (i = a.sent,
                                !t.gte(i)) {
                                    a.next = 35;
                                    break
                                }
                                return a.next = 30,
                                ge();
                            case 30:
                                if (a.sent) {
                                    a.next = 35;
                                    break
                                }
                                return U(!1),
                                d(4),
                                a.abrupt("return");
                            case 35:
                                return a.prev = 35,
                                a.next = 38,
                                re.estimateGas.deposit(n, t, {
                                    from: J
                                });
                            case 38:
                                x = a.sent,
                                a.next = 47;
                                break;
                            case 41:
                                return a.prev = 41,
                                a.t1 = a.catch(35),
                                U(!1),
                                d(4),
                                console.error("!!! DEPOSIT: GAS ESTIMATE:", a.t1, {
                                    pairId: n,
                                    tokensAmountWei: t
                                }),
                                a.abrupt("return");
                            case 47:
                                return a.next = 49,
                                (0,
                                c.yC)(x);
                            case 49:
                                return l = a.sent,
                                a.next = 52,
                                (0,
                                c.Qt)(re.provider);
                            case 52:
                                return p = a.sent,
                                a.prev = 53,
                                a.next = 56,
                                re.deposit(n, t, {
                                    gasLimit: l,
                                    gasPrice: p,
                                    from: J
                                });
                            case 56:
                                return u = a.sent,
                                a.next = 59,
                                u.wait();
                            case 59:
                                a.sent,
                                o.Z.migrate(K, xe.title, String(O)),
                                a.next = 70;
                                break;
                            case 63:
                                return a.prev = 63,
                                a.t2 = a.catch(53),
                                Q((0,
                                w.S)(a.t2)),
                                U(!1),
                                d(4),
                                console.error("!!! DEPOSIT: CALL:", a.t2, {
                                    pairId: n,
                                    tokensAmountWei: t
                                }),
                                a.abrupt("return");
                            case 70:
                                V(r),
                                L(u.hash),
                                U(!0),
                                d(4);
                            case 74:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a, null, [[10, 16], [35, 41], [53, 63]])
                }
                )));
                return function() {
                    return a.apply(this, arguments)
                }
            }()
              , ge = function() {
                var a = (0,
                t.Z)(s().mark((function a() {
                    var n, r, t, d;
                    return s().wrap((function(a) {
                        for (; ; )
                            switch (a.prev = a.next) {
                            case 0:
                                return a.prev = 0,
                                a.next = 3,
                                fe.estimateGas.approve(e.address.vampiring, l.Bz);
                            case 3:
                                n = a.sent,
                                a.next = 10;
                                break;
                            case 6:
                                return a.prev = 6,
                                a.t0 = a.catch(0),
                                console.error("!!! APPROVE: GAS ESTIMATE:", a.t0),
                                a.abrupt("return", !1);
                            case 10:
                                return a.prev = 10,
                                a.next = 13,
                                (0,
                                c.yC)(n);
                            case 13:
                                r = a.sent,
                                a.next = 20;
                                break;
                            case 16:
                                return a.prev = 16,
                                a.t1 = a.catch(10),
                                console.error("!!! APPROVE: CALC GAS LIMIT:", a.t1),
                                a.abrupt("return", !1);
                            case 20:
                                return a.prev = 20,
                                a.next = 23,
                                (0,
                                c.Qt)(fe.provider);
                            case 23:
                                t = a.sent,
                                a.next = 30;
                                break;
                            case 26:
                                return a.prev = 26,
                                a.t2 = a.catch(20),
                                console.error("!!! APPROVE: CALC GAS PRICE:", a.t2),
                                a.abrupt("return", !1);
                            case 30:
                                return a.prev = 30,
                                a.next = 33,
                                fe.approve(e.address.vampiring, l.Bz, {
                                    gasLimit: r,
                                    gasPrice: t,
                                    from: J
                                });
                            case 33:
                                d = a.sent,
                                a.next = 40;
                                break;
                            case 36:
                                return a.prev = 36,
                                a.t3 = a.catch(30),
                                console.error("!!! APPROVE: CALL:", a.t3),
                                a.abrupt("return", !1);
                            case 40:
                                return a.prev = 40,
                                a.next = 43,
                                d.wait();
                            case 43:
                                a.sent,
                                a.next = 50;
                                break;
                            case 46:
                                return a.prev = 46,
                                a.t4 = a.catch(40),
                                console.error("!!! APPROVE: RESULT:", a.t4),
                                a.abrupt("return", !1);
                            case 50:
                                return a.prev = 50,
                                i.m.events.approveMigrate(),
                                a.next = 54,
                                ne(d, {
                                    summary: h.ag.t("Approve {{title}} from {{exchange}}", {
                                        title: xe.title,
                                        exchange: xe.exchange
                                    }),
                                    approval: {
                                        tokenAddress: xe.addressLP,
                                        spender: J
                                    }
                                });
                            case 54:
                                a.next = 60;
                                break;
                            case 56:
                                return a.prev = 56,
                                a.t5 = a.catch(50),
                                console.error("!!! APPROVE: VIEW TRANSACTION:", a.t5),
                                a.abrupt("return", !1);
                            case 60:
                                return a.abrupt("return", !0);
                            case 61:
                            case "end":
                                return a.stop()
                            }
                    }
                    ), a, null, [[0, 6], [10, 16], [20, 26], [30, 36], [40, 46], [50, 56]])
                }
                )));
                return function() {
                    return a.apply(this, arguments)
                }
            }();
            return (0,
            W.jsxs)(pe, {
                children: [(0,
                W.jsx)(p.I, {
                    activeIndex: 2
                }), (0,
                W.jsxs)(y.Z, {
                    children: [1 === r && (0,
                    W.jsx)(H, {}), 2 === r && (0,
                    W.jsx)($, {
                        pairs: ce,
                        selectedPairKey: S,
                        setSelectedPairKey: j,
                        tokensAmount: O,
                        setTokensAmount: I,
                        handleMigrate: he,
                        isLoadingPairs: oe
                    }), 3 === r && (0,
                    W.jsx)(ee, {}), 4 === r && (0,
                    W.jsx)(le, {
                        error: G,
                        pair: xe,
                        isSuccessful: q,
                        trx: T,
                        aliumLPTokenForPair: Z,
                        setStep1: function() {
                            d(J ? 2 : 1)
                        },
                        handleTryAgain: he
                    })]
                })]
            })
        }
          , he = n(51260)
          , ge = !0
          , be = function() {
            return (0,
            W.jsx)(he.Z, {
                children: (0,
                W.jsx)(ue, {})
            })
        }
    },
    21340: function(e, a, n) {
        "use strict";
        n.d(a, {
            i: function() {
                return p
            }
        });
        var r = n(30266)
          , t = n(809)
          , d = n.n(t)
          , s = n(82212)
          , c = n(8198)
          , i = n(87660)
          , o = n(39529)
          , x = n(206)
          , l = function() {
            var e = (0,
            r.Z)(d().mark((function e(a, n, r) {
                var t, l, f, p, u, h;
                return d().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            (0,
                            i.V)(r);
                        case 3:
                            if (t = e.sent) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return", null);
                        case 6:
                            return l = new o.Contract(s.nU[r],x.jr,t),
                            f = new c.vU(a),
                            p = n.map((function(e) {
                                return [e.address.toLowerCase(), f.encodeFunctionData(e.name, e.params)]
                            }
                            )),
                            e.next = 11,
                            l.tryAggregate(!1, p);
                        case 11:
                            return u = e.sent,
                            h = u.map((function(e, a) {
                                return e.success ? f.decodeFunctionResult(n[a].name, e.returnData) : null
                            }
                            )),
                            e.abrupt("return", h);
                        case 16:
                            throw e.prev = 16,
                            e.t0 = e.catch(0),
                            new Error(e.t0);
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 16]])
            }
            )));
            return function(a, n, r) {
                return e.apply(this, arguments)
            }
        }()
          , f = n(3019)
          , p = function() {
            var e = (0,
            r.Z)(d().mark((function e(a, n) {
                var r, t, s;
                return d().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return r = f.g.getState(),
                            t = r._currentChainId,
                            s = t,
                            e.abrupt("return", l(a, n, s));
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(a, n) {
                return e.apply(this, arguments)
            }
        }()
    },
    80118: function(e, a, n) {
        "use strict";
        n.d(a, {
            S: function() {
                return s
            }
        });
        var r = n(79826)
          , t = n(92662)
          , d = n(41810)
          , s = function(e, a) {
            var n, s = (0,
            r.Xy)(e);
            if ((null === s || void 0 === s ? void 0 : s.code) === t.errorCodes.provider.userRejectedRequest)
                return d.ag.t("User rejected request");
            if (function(a) {
                try {
                    var n, r, t = (null === a || void 0 === a || null === (n = a.data) || void 0 === n ? void 0 : n.message) || (null === a || void 0 === a || null === (r = a.data) || void 0 === r ? void 0 : r.originalError) || a.message;
                    return !(null === t || void 0 === t || !t.includes("insufficient funds for transfer")) || !(null === t || void 0 === t || !t.includes("insufficient funds for gas * price + value"))
                } catch (e) {
                    return !1
                }
            }(s))
                return d.ag.t("Not enough {{symbol}} on wallet to complete transaction", a);
            var c = (null === e || void 0 === e ? void 0 : e.message) || (null === e || void 0 === e || null === (n = e.data) || void 0 === n ? void 0 : n.message) || (null === e || void 0 === e ? void 0 : e.toString());
            try {
                return null === c || void 0 === c ? void 0 : c.toString()
            } catch (e) {
                return "Error"
            }
        }
    },
    99270: function(e, a, n) {
        "use strict";
        n.d(a, {
            Z: function() {
                return s
            }
        });
        var r = n(93350)
          , t = n(62268)
          , d = n(85893);
        function s(e) {
            var a, n, r = e.currency0, c = e.currency1, i = e.size, o = void 0 === i ? 16 : i, x = e.margin, l = void 0 !== x && x, f = e.sizes, p = f || {
                sizeA: o,
                sizeB: o
            };
            return (0,
            d.jsxs)(s.Root, {
                sizeraw: o,
                margin: l,
                children: [r && (0,
                d.jsx)(t.Z, {
                    currency: r,
                    size: "".concat(null === p || void 0 === p || null === (a = p.sizeA) || void 0 === a ? void 0 : a.toString(), "px")
                }), c && (0,
                d.jsx)(t.Z, {
                    currency: c,
                    size: "".concat(null === p || void 0 === p || null === (n = p.sizeB) || void 0 === n ? void 0 : n.toString(), "px")
                })]
            })
        }
        s.Root = r.default.div.withConfig({
            displayName: "DoubleLogo__Root",
            componentId: "sc-boxkii-0"
        })(["position:relative;display:flex;flex-direction:row;min-width:48px;margin-right:8px;> *:last-child{position:absolute;left:20px;z-index:2;padding:4px !important;}> *:first-child{padding:4px !important;z-index:4;}"])
    },
    99629: function(e, a, n) {
        "use strict";
        n.d(a, {
            Z: function() {
                return c
            }
        });
        var r = n(62639)
          , t = n(93350)
          , d = n(85893)
          , s = (0,
        t.default)(r.Zb).withConfig({
            displayName: "SwapAppBody__BodyWrapper",
            componentId: "sc-161cb1m-0"
        })(["position:relative;width:100%;z-index:5;border-radius:16px;"]);
        function c(e) {
            var a = e.children;
            return (0,
            d.jsx)(s, {
                children: a
            })
        }
    },
    51260: function(e, a, n) {
        "use strict";
        n.d(a, {
            Z: function() {
                return o
            }
        });
        var r = n(93350)
          , t = n(79308)
          , d = r.default.div.withConfig({
            displayName: "swapstyled__RootSwap",
            componentId: "sc-1p5mfq1-0"
        })(["display:flex;justify-content:center;width:100%;background:url('images/swap/left_arrow_swap.png'),url('images/swap/right_arrow_swap.png');background-position:left 60px,right 60px;background-repeat:no-repeat,no-repeat;@media ", "{background-position:left 66px,calc(100% + 104px) 66px;}@media ", "{background-position:left 43px,calc(100% + 155px) 43px;}@media ", "{background-position:calc(0% - 172px) 17px,calc(100% + 142px) 17px;background-size:319px 136px,258px 115px;}"], t.mq.down(t.AV.lg), t.mq.down(t.AV.lg), t.mq.down(t.AV.sm))
          , s = r.default.div.withConfig({
            displayName: "swapstyled__Container",
            componentId: "sc-1p5mfq1-1"
        })(["max-width:785px;width:100%;padding:40px;position:relative;@media ", "{max-width:780px;}@media ", "{max-width:780px;}@media ", "{max-width:770px;}@media ", "{padding:40px 10px 10px 10px;}"], t.mq.down(t.AV.xl), t.mq.down(t.AV.lg), t.mq.down(t.AV.md), t.mq.down(t.AV.sm))
          , c = n(85893)
          , i = function e(a) {
            var n = a.children;
            return (0,
            c.jsx)(c.Fragment, {
                children: (0,
                c.jsx)(e.Root, {
                    children: (0,
                    c.jsx)(e.Container, {
                        children: n
                    })
                })
            })
        };
        i.Root = (0,
        r.default)(d).withConfig({
            displayName: "SwapContainter__Root",
            componentId: "sc-f1q6m7-0"
        })(["@media (max-width:1021px){padding-bottom:87px;}"]),
        i.Container = (0,
        r.default)(s).withConfig({
            displayName: "SwapContainter__Container",
            componentId: "sc-f1q6m7-1"
        })([""]);
        var o = i
    },
    56447: function(e, a, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/migrate", function() {
            return n(18480)
        }
        ])
    },
    46445: function(e, a, n) {
        "use strict";
        var r = n(67294)
          , t = n(45697)
          , d = n.n(t);
        function s() {
            return (s = Object.assign || function(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var n = arguments[a];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function c(e, a) {
            if (null == e)
                return {};
            var n, r, t = function(e, a) {
                if (null == e)
                    return {};
                var n, r, t = {}, d = Object.keys(e);
                for (r = 0; r < d.length; r++)
                    n = d[r],
                    a.indexOf(n) >= 0 || (t[n] = e[n]);
                return t
            }(e, a);
            if (Object.getOwnPropertySymbols) {
                var d = Object.getOwnPropertySymbols(e);
                for (r = 0; r < d.length; r++)
                    n = d[r],
                    a.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n])
            }
            return t
        }
        var i = (0,
        r.forwardRef)((function(e, a) {
            var n = e.color
              , t = void 0 === n ? "currentColor" : n
              , d = e.size
              , i = void 0 === d ? 24 : d
              , o = c(e, ["color", "size"]);
            return r.createElement("svg", s({
                ref: a,
                xmlns: "http://www.w3.org/2000/svg",
                width: i,
                height: i,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: t,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, o), r.createElement("polyline", {
                points: "20 6 9 17 4 12"
            }))
        }
        ));
        i.propTypes = {
            color: d().string,
            size: d().oneOfType([d().string, d().number])
        },
        i.displayName = "Check",
        a.Z = i
    },
    69293: function(e, a, n) {
        "use strict";
        var r = n(67294)
          , t = n(76362)
          , d = ["mousedown", "touchstart"];
        a.Z = function(e, a, n) {
            void 0 === n && (n = d);
            var s = (0,
            r.useRef)(a);
            (0,
            r.useEffect)((function() {
                s.current = a
            }
            ), [a]),
            (0,
            r.useEffect)((function() {
                for (var a = function(a) {
                    var n = e.current;
                    n && !n.contains(a.target) && s.current(a)
                }, r = 0, d = n; r < d.length; r++) {
                    var c = d[r];
                    (0,
                    t.on)(document, c, a)
                }
                return function() {
                    for (var e = 0, r = n; e < r.length; e++) {
                        var d = r[e];
                        (0,
                        t.S1)(document, d, a)
                    }
                }
            }
            ), [n, e])
        }
    },
    11742: function(e) {
        e.exports = function() {
            var e = document.getSelection();
            if (!e.rangeCount)
                return function() {}
                ;
            for (var a = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
                n.push(e.getRangeAt(r));
            switch (a.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
                a.blur();
                break;
            default:
                a = null
            }
            return e.removeAllRanges(),
            function() {
                "Caret" === e.type && e.removeAllRanges(),
                e.rangeCount || n.forEach((function(a) {
                    e.addRange(a)
                }
                )),
                a && a.focus()
            }
        }
    }
}, function(e) {
    e.O(0, [588, 4343, 7676, 8912, 2906, 7409, 5892, 8752, 4035, 1731, 9774, 2888, 179], (function() {
        return a = 56447,
        e(e.s = a);
        var a
    }
    ));
    var a = e.O();
    _N_E = a
}
]);
