(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2353], {
    21232: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            __N_SSG: function() {
                return Ee
            },
            default: function() {
                return Ge
            }
        });
        var n, o = i(30266), r = i(80318), l = i(809), a = i.n(l), d = i(77985), s = i(73543), c = i(92809), p = i(52209), m = i(82909), u = i(50319);
        function f(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? f(Object(i), !0).forEach((function(t) {
                    (0,
                    c.Z)(e, t, i[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }
                ))
            }
            return e
        }
        var h = {}
          , g = (0,
        m.Ps)(n || (n = (0,
        p.Z)(["\n    mutation mintNft($chainId: Int!) {\n  withdraw {\n    mintBonusNft(chainId: $chainId)\n  }\n}\n    "])));
        var y = i(41810)
          , w = i(94829)
          , b = i(85754)
          , j = i(81190)
          , C = i(93578)
          , v = i(62639)
          , _ = i(93350)
          , N = i(79308)
          , A = i(46922)
          , I = i(85893)
          , k = _.default.div.withConfig({
            displayName: "Nftsstyled__Container",
            componentId: "sc-1a932cm-0"
        })(["position:relative;margin:auto;min-height:982px;background-image:url('images/alm-gb/bg-nft-page.svg');overflow:hidden;"])
          , O = _.default.div.withConfig({
            displayName: "Nftsstyled__Wrapper",
            componentId: "sc-1a932cm-1"
        })(["max-width:1200px;width:100%;margin:0 auto;padding:24px 0;margin-top:36px;display:flex;justify-content:space-between;@media ", "{gap:24px;max-width:960px;margin-top:84px;}@media ", "{max-width:720px;gap:0px;margin-top:48px;}@media ", "{justify-content:space-evenly;max-width:354px;flex-direction:column;}"], N.mq.down(N.AV.lg), N.mq.down(N.AV.md), N.mq.down(N.AV.sm))
          , F = _.default.div.withConfig({
            displayName: "Nftsstyled__LevelWrapper",
            componentId: "sc-1a932cm-2"
        })(["background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);border-radius:30px;min-height:32px;padding:4px;gap:1px;display:flex;align-items:center;margin:16px 0 10px 0;"])
          , M = _.default.div.withConfig({
            displayName: "Nftsstyled__LevelOneLine",
            componentId: "sc-1a932cm-3"
        })(["display:", ";background:linear-gradient(90deg,#29d98f 0%,#99c319 100.23%);max-width:74px;width:100%;height:22px;border-radius:30px 0 0 30px;@media ", "{max-width:66px;}@media ", "{max-width:68px;}"], (function(e) {
            return e.lvl ? "block" : "none"
        }
        ), N.mq.down(N.AV.md), N.mq.down(N.AV.sm))
          , S = _.default.div.withConfig({
            displayName: "Nftsstyled__LevelTwoLine",
            componentId: "sc-1a932cm-4"
        })(["display:", ";background:linear-gradient(90deg,#9ac218 0%,#dcac08 100.23%);max-width:74px;width:100%;height:22px;@media ", "{max-width:66px;}@media ", "{max-width:68px;}"], (function(e) {
            return e.lvl ? "block" : "none"
        }
        ), N.mq.down(N.AV.md), N.mq.down(N.AV.sm))
          , T = _.default.div.withConfig({
            displayName: "Nftsstyled__MaxLvlText",
            componentId: "sc-1a932cm-5"
        })(["", ";color:", ";"], N.cp.lA.medium, (function(e) {
            return e.theme.colors.shamrock
        }
        ))
          , P = _.default.div.withConfig({
            displayName: "Nftsstyled__LevelThreeLine",
            componentId: "sc-1a932cm-6"
        })(["display:", ";background:linear-gradient(90deg,#deac08 0%,#ff9001 100.23%);max-width:74px;width:100%;height:22px;@media ", "{max-width:66px;}@media ", "{max-width:68px;}"], (function(e) {
            return e.lvl ? "block" : "none"
        }
        ), N.mq.down(N.AV.md), N.mq.down(N.AV.sm))
          , q = _.default.div.withConfig({
            displayName: "Nftsstyled__LevelFourLine",
            componentId: "sc-1a932cm-7"
        })(["display:", ";background:linear-gradient(90deg,#ff8f01 0%,#ff6e01 100.23%);max-width:74px;width:100%;height:22px;@media ", "{max-width:66px;}@media ", "{max-width:68px;}"], (function(e) {
            return e.lvl ? "block" : "none"
        }
        ), N.mq.down(N.AV.md), N.mq.down(N.AV.sm))
          , L = _.default.div.withConfig({
            displayName: "Nftsstyled__LevelFiveLine",
            componentId: "sc-1a932cm-8"
        })(["display:", ";background:linear-gradient(90deg,#ff6d01 0%,#ff4d01 100.23%);width:100%;max-width:74px;height:22px;border-radius:0 30px 30px 0;@media ", "{max-width:66px;}@media ", "{max-width:68px;}"], (function(e) {
            return e.lvl ? "block" : "none"
        }
        ), N.mq.down(N.AV.md), N.mq.down(N.AV.sm))
          , U = _.default.div.withConfig({
            displayName: "Nftsstyled__LeftSideWrapper",
            componentId: "sc-1a932cm-9"
        })(["display:flex;flex-direction:column;"])
          , V = _.default.span.withConfig({
            displayName: "Nftsstyled__StyledInfoText",
            componentId: "sc-1a932cm-10"
        })(["", ";color:", ";"], N.cp.lA.medium, (function(e) {
            return e.theme.colors.default
        }
        ))
          , D = _.default.div.withConfig({
            displayName: "Nftsstyled__StyledInfoWrapper",
            componentId: "sc-1a932cm-11"
        })(["display:flex;justify-content:", ";"], (function(e) {
            return e.maxLvl ? "center" : "space-between"
        }
        ))
          , R = _.default.div.withConfig({
            displayName: "Nftsstyled__NewPerksInfo",
            componentId: "sc-1a932cm-12"
        })(["", ";color:", ";::before{content:'\u2022';color:white;display:inline-block;width:1em;}"], N.cp.lA.medium, (function(e) {
            return e.theme.colors.default
        }
        ))
          , Z = _.default.span.withConfig({
            displayName: "Nftsstyled__StyledInfoLevel",
            componentId: "sc-1a932cm-13"
        })(["", ";color:", ";"], N.cp.w_.medium, (function(e) {
            return e.theme.colors.default
        }
        ))
          , B = _.default.section.withConfig({
            displayName: "Nftsstyled__StyledBottomSection",
            componentId: "sc-1a932cm-14"
        })(["margin-top:24px;display:flex;align-items:center;@media ", "{flex-direction:column;}"], N.mq.down(N.AV.md))
          , G = (0,
        _.default)(N.zx).withConfig({
            displayName: "Nftsstyled__StyledButton",
            componentId: "sc-1a932cm-15"
        })(["@media ", "{width:100%;margin-bottom:8px;}"], N.mq.down(N.AV.md))
          , E = _.default.span.withConfig({
            displayName: "Nftsstyled__BottomInfoText",
            componentId: "sc-1a932cm-16"
        })(["margin-left:24px;", ";color:", ";@media ", "{text-align:center;margin:0;}"], N.cp.UR.regular, (function(e) {
            return e.theme.colors.blueHaze
        }
        ), N.mq.down(N.AV.md))
          , W = _.default.span.withConfig({
            displayName: "Nftsstyled__NftInGameInfo",
            componentId: "sc-1a932cm-17"
        })(["padding:9px 16px;text-align:center;background-color:", ";", ";color:", ";border-radius:16px;max-width:125px;"], (function(e) {
            return e.theme.colors.shamrock
        }
        ), N.cp.UR.demiBold, (function(e) {
            return e.theme.colors.default
        }
        ))
          , H = _.default.p.withConfig({
            displayName: "Nftsstyled__InfoText",
            componentId: "sc-1a932cm-18"
        })(["padding-top:16px;", ";color:", ";> span{color:", ";}@media ", "{", ";text-align:inherit;padding-bottom:8px;}@media ", "{max-width:325px;}"], N.cp.R0.demiBold, (function(e) {
            return e.theme.colors.default
        }
        ), (function(e) {
            return e.theme.colors.primary
        }
        ), N.mq.down(N.AV.lg), N.cp.AO.demiBold, N.mq.down(N.AV.md))
          , $ = _.default.div.withConfig({
            displayName: "Nftsstyled__DataWrapper",
            componentId: "sc-1a932cm-19"
        })(["padding:8px 0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,0.1);@media ", "{min-width:250px;}"], N.mq.up(N.AV.lg))
          , z = _.default.div.withConfig({
            displayName: "Nftsstyled__PopulationWrapper",
            componentId: "sc-1a932cm-20"
        })(["padding:4px 0;display:flex;justify-content:space-between;align-items:center;"])
          , X = _.default.div.withConfig({
            displayName: "Nftsstyled__ContentWrapper",
            componentId: "sc-1a932cm-21"
        })(["display:flex;justify-content:space-between;gap:24px;@media ", "{flex-direction:column;}@media ", "{gap:0;}"], N.mq.down(N.AV.lg), N.mq.down(N.AV.md))
          , Y = _.default.p.withConfig({
            displayName: "Nftsstyled__DataStyles",
            componentId: "sc-1a932cm-22"
        })(["", ";color:", ";"], N.cp.UR.regular, (function(e) {
            return e.theme.colors.blueHaze
        }
        ))
          , J = _.default.p.withConfig({
            displayName: "Nftsstyled__CompositionDataStyles",
            componentId: "sc-1a932cm-23"
        })(["", ";color:", ";margin-bottom:8px;"], N.cp.UR.regular, (function(e) {
            return e.theme.colors.blueHaze
        }
        ))
          , K = _.default.div.withConfig({
            displayName: "Nftsstyled__CompositionWrapper",
            componentId: "sc-1a932cm-24"
        })(["display:flex;flex-direction:column;"])
          , Q = _.default.div.withConfig({
            displayName: "Nftsstyled__Separator",
            componentId: "sc-1a932cm-25"
        })(["height:1px;width:100%;background:rgba(255,255,255,0.1);margin:24px 0;"])
          , ee = _.default.p.withConfig({
            displayName: "Nftsstyled__CompositionText",
            componentId: "sc-1a932cm-26"
        })(["", ";color:", ";margin-bottom:16px;"], N.cp.w_.demiBold, (function(e) {
            return e.theme.colors.primary
        }
        ))
          , te = _.default.p.withConfig({
            displayName: "Nftsstyled__CultureTextWrapper",
            componentId: "sc-1a932cm-27"
        })(["padding:8px 0;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;"])
          , ie = _.default.p.withConfig({
            displayName: "Nftsstyled__CultureText",
            componentId: "sc-1a932cm-28"
        })(["", ";color:", ";"], N.cp.UR.regular, (function(e) {
            return e.theme.colors.blueHaze
        }
        ))
          , ne = _.default.div.withConfig({
            displayName: "Nftsstyled__RightSideWrapper",
            componentId: "sc-1a932cm-29"
        })(["padding-top:9px;width:57%;@media ", "{margin-left:22px;}@media ", "{margin:0;width:100%;margin-top:24px;}"], N.mq.down(N.AV.md), N.mq.down(N.AV.sm))
          , oe = function(e) {
            var t, i = e.lvl;
            return 0 === i && (t = "images/alm-gb/NFT-card0.png"),
            1 === i && (t = "images/alm-gb/NFT-card.png"),
            2 === i && (t = "images/alm-gb/NFT-card2.png"),
            3 === i && (t = "images/alm-gb/NFT-card3.png"),
            4 === i && (t = "images/alm-gb/NFT-card4.png"),
            5 === i && (t = "images/alm-gb/NFT-card5.png"),
            (0,
            I.jsx)(re, {
                src: t
            })
        }
          , re = _.default.img.withConfig({
            displayName: "Nftsstyled__ImageComponent",
            componentId: "sc-1a932cm-30"
        })(["@media ", "{width:385px;}"], N.mq.down(N.AV.lg))
          , le = i(67294)
          , ae = _.default.div.withConfig({
            displayName: "Accordionstyled__StyledWrapper",
            componentId: "sc-y4frg9-0"
        })(["display:flex;flex-direction:column;background:rgba(11,19,89,0.8);border:1px solid rgba(255,255,255,0.2);border-radius:16px;padding:24px;"])
          , de = _.default.div.withConfig({
            displayName: "Accordionstyled__AccordionTitleWrapper",
            componentId: "sc-y4frg9-1"
        })(["transition:background-color 0.6s ease;display:flex;align-items:center;justify-content:space-between;"])
          , se = _.default.span.withConfig({
            displayName: "Accordionstyled__AccordionTitle",
            componentId: "sc-y4frg9-2"
        })(["", ";color:", ";"], N.cp.TM.demiBold, (function(e) {
            return e.theme.colors.default
        }
        ))
          , ce = (0,
        _.default)(v.v4).withConfig({
            displayName: "Accordionstyled__StyledChevronDownIcon",
            componentId: "sc-y4frg9-3"
        })(["transform:rotate(180deg);"])
          , pe = _.default.div.withConfig({
            displayName: "Accordionstyled__ButtonWrapper",
            componentId: "sc-y4frg9-4"
        })(["border:1px solid ", ";border-radius:8px;padding:5.5px 7px;"], (function(e) {
            return e.theme.colors.blueHaze
        }
        ))
          , me = _.default.div.withConfig({
            displayName: "Accordionstyled__AccordionContent",
            componentId: "sc-y4frg9-5"
        })(["overflow:auto;transition:max-height 0.6s ease;"])
          , ue = function(e) {
            var t = e.title
              , i = e.content
              , n = (0,
            le.useState)(!0)
              , o = n[0]
              , r = n[1];
            return (0,
            I.jsxs)(ae, {
                children: [(0,
                I.jsxs)(de, {
                    onClick: function() {
                        r((function(e) {
                            return !e
                        }
                        ))
                    },
                    children: [(0,
                    I.jsx)(se, {
                        children: t
                    }), (0,
                    I.jsx)(pe, {
                        children: o ? (0,
                        I.jsx)(ce, {
                            fill: "white",
                            width: 24,
                            height: 24
                        }) : (0,
                        I.jsx)(v.v4, {
                            fill: "white",
                            width: 24,
                            height: 24
                        })
                    })]
                }), o && (0,
                I.jsx)(me, {
                    children: i
                })]
            })
        }
          , fe = i(24451)
          , xe = i(71568)
          , he = i(7408);
        function ge(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                i.push.apply(i, n)
            }
            return i
        }
        function ye(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ge(Object(i), !0).forEach((function(t) {
                    (0,
                    c.Z)(e, t, i[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : ge(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }
                ))
            }
            return e
        }
        var we = function(e) {
            return (0,
            I.jsxs)("svg", ye(ye({
                width: "96",
                height: "96",
                viewBox: "0 0 96 96",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), {}, {
                children: [(0,
                I.jsx)("path", {
                    d: "M32.4573 27.6181C37.5622 18.8344 40.1147 14.4426 43.4417 12.9661C46.344 11.678 49.656 11.678 52.5583 12.9661C55.8853 14.4426 58.4378 18.8344 63.5427 27.618L80.6173 56.9971C85.7652 65.8547 88.3392 70.2834 87.9641 73.9192C87.637 77.0903 85.9777 79.9731 83.3997 81.8491C80.444 84 75.3209 84 65.0747 84H30.9253C20.6791 84 15.556 84 12.6003 81.8491C10.0223 79.9731 8.36295 77.0903 8.03586 73.9192C7.66085 70.2834 10.2348 65.8547 15.3827 56.9971L32.4573 27.6181Z",
                    fill: "url(#paint0_linear_22083_24973)"
                }), (0,
                I.jsx)("path", {
                    opacity: "0.4",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.5646 17.6247C38.996 17.3356 39.4333 17.0993 39.8848 16.9124C42.8233 15.6959 46.1767 15.6959 49.1152 16.9124C52.4839 18.3069 55.0682 22.4547 60.237 30.7504L77.525 58.4972C82.7373 66.8627 85.3434 71.0455 84.9637 74.4793C84.6325 77.4742 82.9525 80.1969 80.3422 81.9686C77.3496 84 72.1624 84 61.7881 84H65.0747C75.3209 84 80.444 84 83.3997 81.8491C85.9777 79.9731 87.637 77.0903 87.9641 73.9192C88.3391 70.2834 85.7652 65.8547 80.6173 56.9971L63.5427 27.618C58.4378 18.8344 55.8853 14.4426 52.5583 12.9661C49.656 11.678 46.344 11.678 43.4417 12.9661C41.7613 13.7118 40.2785 15.2013 38.5646 17.6247Z",
                    fill: "white"
                }), (0,
                I.jsx)("path", {
                    opacity: "0.4",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.21908 71.3359C8.01491 72.2629 7.95247 73.1107 8.03586 73.9193C8.36295 77.0904 10.0223 79.9732 12.6003 81.8492C15.556 84 20.6791 84 30.9253 84H65.0747C75.3209 84 80.444 84 83.3997 81.8492C85.9777 79.9732 87.637 77.0904 87.9641 73.9193C88.0475 73.1107 87.9851 72.2629 87.7809 71.3359C87.2098 73.9647 85.6569 76.312 83.3997 77.9089C80.444 80 75.3209 80 65.0747 80H30.9253C20.6791 80 15.556 80 12.6003 77.9089C10.3431 76.312 8.79018 73.9647 8.21908 71.3359Z",
                    fill: "#B1C4E9"
                }), (0,
                I.jsxs)("g", {
                    opacity: "0.5",
                    filter: "url(#filter0_f_22083_24973)",
                    children: [(0,
                    I.jsx)("path", {
                        d: "M43.171 35.6916C43.2276 33.6748 45.1051 31.9502 47.275 31.9218C49.4449 31.8934 51.0121 33.5729 50.7006 35.593L46.6733 61.7133C46.5121 62.7587 45.5094 63.5866 44.3864 63.6013C43.2634 63.616 42.4095 62.8125 42.4388 61.7687L43.171 35.6916Z",
                        fill: "url(#paint1_linear_22083_24973)"
                    }), (0,
                    I.jsx)("path", {
                        d: "M39.7071 71.1076C39.8948 69.0493 41.8376 67.3572 44.0466 67.3283C46.2555 67.2993 47.8941 68.9445 47.7064 71.0029C47.5187 73.0613 45.5758 74.7534 43.3669 74.7823C41.1579 74.8112 39.5194 73.166 39.7071 71.1076Z",
                        fill: "url(#paint2_linear_22083_24973)"
                    })]
                }), (0,
                I.jsx)("path", {
                    d: "M44.2349 30.9931C44.1075 28.8268 45.8299 27 48 27C50.1701 27 51.8925 28.8268 51.7651 30.9931L50.1174 59.0034C50.0515 60.1246 49.1231 61 48 61C46.8769 61 45.9485 60.1246 45.8826 59.0035L44.2349 30.9931Z",
                    fill: "url(#paint3_linear_22083_24973)"
                }), (0,
                I.jsx)("path", {
                    d: "M44 69C44 66.7909 45.7909 65 48 65C50.2091 65 52 66.7909 52 69C52 71.2091 50.2091 73 48 73C45.7909 73 44 71.2091 44 69Z",
                    fill: "url(#paint4_linear_22083_24973)"
                }), (0,
                I.jsx)("path", {
                    opacity: "0.3",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M44.2876 30.1011C44.9717 29.4236 45.9317 29 47.0002 29C49.1703 29 50.8927 30.7473 50.7653 32.8195L49.1176 59.612C49.0854 60.1358 48.8474 60.6036 48.4814 60.9451C49.3779 60.7369 50.0614 59.9595 50.1176 59.0034L51.7653 30.9931C51.8927 28.8268 50.1703 27 48.0002 27C46.1361 27 44.6023 28.3479 44.2876 30.1011ZM46.2084 65.4228C46.4644 65.3736 46.7291 65.3478 47.0002 65.3478C49.2093 65.3478 51.0002 67.0608 51.0002 69.1739C51.0002 71.1232 49.4762 72.732 47.5057 72.9697C47.6677 72.9897 47.8328 73 48.0002 73C50.2093 73 52.0002 71.2091 52.0002 69C52.0002 66.7909 50.2093 65 48.0002 65C47.356 65 46.7474 65.1523 46.2084 65.4228Z",
                    fill: "url(#paint5_linear_22083_24973)"
                }), (0,
                I.jsx)("path", {
                    opacity: "0.7",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M45.2917 28.1448C45.2368 28.4462 45.2164 28.7594 45.2349 29.08L46.8826 57.6993C46.9485 58.8448 47.8769 59.7392 49 59.7392C49.3761 59.7392 49.7303 59.6389 50.0377 59.4625C49.7832 60.3547 48.9624 61.0001 47.998 61.0001C46.875 61.0001 45.9466 60.1246 45.8806 59.0035L44.2329 30.9932C44.1681 29.8903 44.5826 28.8754 45.2917 28.1448ZM45.5575 65.8306C45.2033 66.4405 45 67.1525 45 67.9131C45 70.1703 46.7909 72.0001 49 72.0001C49.8568 72.0001 50.6506 71.7249 51.3015 71.2562C50.581 72.3092 49.3702 73.0001 47.998 73.0001C45.7889 73.0001 43.998 71.2092 43.998 69.0001C43.998 67.7097 44.609 66.562 45.5575 65.8306Z",
                    fill: "url(#paint6_linear_22083_24973)"
                }), (0,
                I.jsxs)("g", {
                    opacity: "0.3",
                    children: [(0,
                    I.jsx)("path", {
                        d: "M10.7151 65.2501C11.8997 62.9897 13.462 60.3016 15.3825 56.9971L21.9041 45.7759L53.68 14C54.1657 14.4662 54.7457 14.835 55.3894 15.0757C56.166 15.8937 56.9552 16.914 57.8064 18.1588L10.7151 65.2501Z",
                        fill: "url(#paint7_linear_22083_24973)"
                    }), (0,
                    I.jsx)("path", {
                        d: "M22.4064 83.9246C17.5572 83.7695 14.5883 83.2959 12.6001 81.8491C10.3995 80.2478 8.86827 77.9128 8.26367 75.2911L60.734 22.8208C61.5843 24.2488 62.5113 25.8438 63.5425 27.618L69.1185 37.2124L22.4064 83.9246Z",
                        fill: "url(#paint8_linear_22083_24973)"
                    })]
                }), (0,
                I.jsxs)("defs", {
                    children: [(0,
                    I.jsxs)("filter", {
                        id: "filter0_f_22083_24973",
                        x: "35.6924",
                        y: "27.9214",
                        width: "19.0479",
                        height: "50.8613",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0,
                        I.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }), (0,
                        I.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }), (0,
                        I.jsx)("feGaussianBlur", {
                            stdDeviation: "2",
                            result: "effect1_foregroundBlur_22083_24973"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint0_linear_22083_24973",
                        x1: "25",
                        y1: "78",
                        x2: "75.5222",
                        y2: "7.8374",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "#D3E0FA"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "#E8EFFF"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint1_linear_22083_24973",
                        x1: "32",
                        y1: "75",
                        x2: "41.3964",
                        y2: "31.5685",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "#FFA100"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFA100",
                            stopOpacity: "0"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint2_linear_22083_24973",
                        x1: "32",
                        y1: "75",
                        x2: "41.3964",
                        y2: "31.5685",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "#FFA100"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFA100",
                            stopOpacity: "0"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint3_linear_22083_24973",
                        x1: "44",
                        y1: "61",
                        x2: "59.5",
                        y2: "34",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "#FFA100"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FCDFAE"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint4_linear_22083_24973",
                        x1: "44",
                        y1: "61",
                        x2: "59.5",
                        y2: "34",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "#FFA100"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FCDFAE"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint5_linear_22083_24973",
                        x1: "63.4985",
                        y1: "46",
                        x2: "24.4985",
                        y2: "57",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "white"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "white",
                            stopOpacity: "0"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint6_linear_22083_24973",
                        x1: "53",
                        y1: "78.5",
                        x2: "50",
                        y2: "21",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "#B67300"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "white",
                            stopOpacity: "0"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "#B67300",
                            stopOpacity: "0"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint7_linear_22083_24973",
                        x1: "73",
                        y1: "32",
                        x2: "19.5004",
                        y2: "77.5005",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "white"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "white",
                            stopOpacity: "0"
                        })]
                    }), (0,
                    I.jsxs)("linearGradient", {
                        id: "paint8_linear_22083_24973",
                        x1: "73",
                        y1: "32",
                        x2: "19.5004",
                        y2: "77.5005",
                        gradientUnits: "userSpaceOnUse",
                        children: [(0,
                        I.jsx)("stop", {
                            stopColor: "white"
                        }), (0,
                        I.jsx)("stop", {
                            offset: "1",
                            stopColor: "white",
                            stopOpacity: "0"
                        })]
                    })]
                })]
            }))
        }
          , be = function(e) {
            var t = e.onDismiss
              , i = void 0 === t ? function() {}
            : t
              , n = e.onApprove
              , o = void 0 === n ? function() {}
            : n
              , r = e.variant
              , l = (0,
            fe.$G)().t
              , a = "loading" === r
              , d = (0,
            j.Z)((function() {
                o()
            }
            ));
            return (0,
            I.jsx)(je, {
                styleHeader: {
                    display: "none"
                },
                onDismiss: a ? null : i,
                children: (0,
                I.jsxs)(Ce, {
                    children: [(0,
                    I.jsx)(we, {
                        className: "icon"
                    }), (0,
                    I.jsx)(ve, {
                        children: l("Warning!")
                    }), (0,
                    I.jsx)(_e, {
                        children: l("If you mint your Planet now, you won\u2019t be able to upgrade it\u2019s evolution level via Rinance Green Button game, are you sure, you are ready to mint your NFT?")
                    }), (0,
                    I.jsx)(v.zx, {
                        fullwidth: !0,
                        onClick: d,
                        isloading: a,
                        children: l("Approve")
                    })]
                })
            })
        }
          , je = (0,
        _.default)(v.u_).withConfig({
            displayName: "ApproveMintModal__ModalContainer",
            componentId: "sc-wdk7qq-0"
        })(["width:100%;max-width:500px;box-shadow:0px 4px 8px rgba(24,39,75,0.04),0px 2px 6px rgba(24,39,75,0.02);border-radius:16px;background:#ffffff;"])
          , Ce = _.default.div.withConfig({
            displayName: "ApproveMintModal__ModalContent",
            componentId: "sc-wdk7qq-1"
        })(["display:flex;flex-direction:column;align-items:center;padding-top:96px;text-align:center;& > .icon{margin-bottom:62px;}"])
          , ve = _.default.h3.withConfig({
            displayName: "ApproveMintModal__Title",
            componentId: "sc-wdk7qq-2"
        })(["margin-bottom:8px;", " color:", ";"], he.TM.medium, xe.dw.violet100)
          , _e = _.default.span.withConfig({
            displayName: "ApproveMintModal__SubTitle",
            componentId: "sc-wdk7qq-3"
        })(["margin-bottom:80px;color:", ";", ";"], xe.dw.basic, he.UR.regular)
          , Ne = i(52481)
          , Ae = function(e) {
            var t = e.onDismiss
              , i = e.variant
              , n = void 0 === i ? "success" : i
              , o = (0,
            fe.$G)().t
              , r = (0,
            le.useMemo)((function() {
                switch (n) {
                case "success":
                    return (0,
                    I.jsx)(Ne.qw, {
                        className: "icon"
                    });
                case "error":
                    return (0,
                    I.jsx)(Ne.e6, {
                        className: "icon",
                        width: 96,
                        height: 96
                    })
                }
            }
            ), [n])
              , l = (0,
            le.useMemo)((function() {
                switch (n) {
                case "success":
                    return o("Success!");
                case "error":
                    return o("Error!")
                }
            }
            ), [o, n])
              , a = (0,
            le.useMemo)((function() {
                switch (n) {
                case "success":
                    return o("You minted your NFT");
                case "error":
                    return o("Try later")
                }
            }
            ), [o, n]);
            return (0,
            I.jsx)(Ie, {
                onDismiss: t,
                styleHeader: {
                    display: "none"
                },
                children: (0,
                I.jsxs)(ke, {
                    children: [r, (0,
                    I.jsx)(Oe, {
                        children: l
                    }), (0,
                    I.jsx)(Fe, {
                        children: a
                    })]
                })
            })
        }
          , Ie = (0,
        _.default)(v.u_).withConfig({
            displayName: "ResultMintNftModal__ModalContainer",
            componentId: "sc-aj66y5-0"
        })(["width:100%;max-width:500px;box-shadow:0px 4px 8px rgba(24,39,75,0.04),0px 2px 6px rgba(24,39,75,0.02);border-radius:16px;background:#ffffff;"])
          , ke = _.default.div.withConfig({
            displayName: "ResultMintNftModal__ModalContent",
            componentId: "sc-aj66y5-1"
        })(["display:flex;flex-direction:column;align-items:center;padding-top:96px;text-align:center;& > .icon{margin-bottom:62px;}"])
          , Oe = _.default.h3.withConfig({
            displayName: "ResultMintNftModal__Title",
            componentId: "sc-aj66y5-2"
        })(["margin-bottom:8px;", " color:", ";"], he.TM.medium, xe.dw.violet100)
          , Fe = _.default.span.withConfig({
            displayName: "ResultMintNftModal__SubTitle",
            componentId: "sc-aj66y5-3"
        })(["color:", ";", ";"], xe.dw.basic, he.UR.regular)
          , Me = (i(31431),
        i(52535),
        i(64764),
        i(6410))
          , Se = function(e) {
            var t = e.className
              , i = e.item;
            return (0,
            I.jsx)(Te, {
                className: t,
                children: i.image
            })
        }
          , Te = _.default.div.withConfig({
            displayName: "NftCard__NftCardComponent",
            componentId: "sc-46uhcy-0"
        })(["border-radius:24px;transition:border-radius 0.5s;border-radius:24px;background-repeat:no-repeat;position:relative;overflow:hidden;display:flex;flex-direction:column;background-repeat:no-repeat;background-size:cover;"])
          , Pe = _.default.section.withConfig({
            displayName: "Sliderstyled__MediaSectionContainer",
            componentId: "sc-1oq8qre-0"
        })(["margin-top:18px;"])
          , qe = _.default.div.withConfig({
            displayName: "Sliderstyled__SwiperW",
            componentId: "sc-1oq8qre-1"
        })(["position:relative;height:115px;"])
          , Le = _.default.div.withConfig({
            displayName: "Sliderstyled__SwiperContainer",
            componentId: "sc-1oq8qre-2"
        })(["position:absolute;top:0;left:0;width:100%;padding:16px 0 16px 16px;background:rgba(11,19,89,0.8);border:1px solid rgba(255,255,255,0.2);border-radius:16px;max-width:384px;@media ", "{max-width:339px;}@media ", "{max-width:355px;}"], N.mq.down(N.AV.md), N.mq.down(N.AV.sm))
          , Ue = function(e) {
            var t = e.className
              , i = (0,
            y.$G)().t
              , n = (0,
            le.useMemo)((function() {
                return [{
                    image: (0,
                    I.jsx)(Ve, {})
                }, {
                    image: (0,
                    I.jsx)(De, {})
                }, {
                    image: (0,
                    I.jsx)(Re, {})
                }, {
                    image: (0,
                    I.jsx)(Ze, {})
                }, {
                    image: (0,
                    I.jsx)(Be, {})
                }]
            }
            ), [i]);
            return (0,
            I.jsx)(Pe, {
                className: t,
                children: (0,
                I.jsx)(qe, {
                    children: (0,
                    I.jsx)(Le, {
                        children: (0,
                        I.jsx)(Me.tq, {
                            slidesPerView: 4.4,
                            spaceBetween: 16,
                            loop: !0,
                            children: n.map((function(e, t) {
                                return (0,
                                I.jsx)(Me.o5, {
                                    children: (0,
                                    I.jsx)(Se, {
                                        item: e
                                    })
                                }, t)
                            }
                            ))
                        })
                    })
                })
            })
        }
          , Ve = function() {
            return (0,
            I.jsx)("img", {
                src: "images/alm-gb/NFT-card.png"
            })
        }
          , De = function() {
            return (0,
            I.jsx)("img", {
                src: "images/alm-gb/NFT-card2.png"
            })
        }
          , Re = function() {
            return (0,
            I.jsx)("img", {
                src: "images/alm-gb/NFT-card3.png"
            })
        }
          , Ze = function() {
            return (0,
            I.jsx)("img", {
                src: "images/alm-gb/NFT-card4.png"
            })
        }
          , Be = function() {
            return (0,
            I.jsx)("img", {
                src: "images/alm-gb/NFT-card5.png"
            })
        }
          , Ge = function() {
            var e, t, i, n, l, c, p, m, f, re, le, ae, de = (0,
            y.$G)().t, se = (0,
            d.useWeb3React)().account, ce = (0,
            b.a)().chainId, pe = (0,
            _.useTheme)(), me = pe.isDark, fe = pe.toggleTheme, xe = (0,
            C.lc)(ce).explorerName, he = (0,
            C.E8)(ce, se, "address"), ge = (0,
            w.Z)(N.mq.down(N.AV.sm)), ye = (0,
            s.gv)(), we = (0,
            s.Lt)({
                client: ye,
                variables: {
                    chainId: ce
                }
            }), je = we.data, Ce = we.refetch, ve = function(e) {
                var t = x(x({}, h), e);
                return u.D(g, t)
            }({
                client: ye,
                variables: {
                    chainId: ce
                }
            }), _e = (0,
            r.Z)(ve, 1)[0], Ne = (0,
            v.dd)((0,
            I.jsx)(Ae, {
                variant: "success"
            })), Ie = (0,
            r.Z)(Ne, 1)[0], ke = (0,
            v.dd)((0,
            I.jsx)(Ae, {
                variant: "error"
            })), Oe = (0,
            r.Z)(ke, 1)[0], Fe = (0,
            v.dd)((0,
            I.jsx)(be, {
                variant: "loading"
            })), Me = (0,
            r.Z)(Fe, 1)[0], Se = (0,
            j.Z)((0,
            o.Z)(a().mark((function e() {
                var t, i, n;
                return a().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            Me(),
                            e.next = 4,
                            _e();
                        case 4:
                            if (n = e.sent,
                            !(null === n || void 0 === n || null === (t = n.data) || void 0 === t || null === (i = t.withdraw) || void 0 === i ? void 0 : i.mintBonusNft)) {
                                e.next = 12;
                                break
                            }
                            return e.next = 9,
                            Ce();
                        case 9:
                            Ie(),
                            e.next = 13;
                            break;
                        case 12:
                            Oe();
                        case 13:
                            e.next = 18;
                            break;
                        case 15:
                            e.prev = 15,
                            e.t0 = e.catch(0),
                            Oe();
                        case 18:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, null, [[0, 15]])
            }
            )))), Te = (0,
            v.dd)((0,
            I.jsx)(be, {
                onApprove: Se,
                variant: "default"
            })), Pe = (0,
            r.Z)(Te, 1)[0], qe = (null === je || void 0 === je || null === (e = je.me) || void 0 === e || null === (t = e.userAwards) || void 0 === t ? void 0 : t.nftRank) || 0, Le = (null === je || void 0 === je || null === (i = je.me) || void 0 === i || null === (n = i.userAwards) || void 0 === n ? void 0 : n.nftUpgrades) || 0, Ve = qe >= 3, De = [{
                title: de("Right ascension"),
                description: "11 47 44.3974"
            }, {
                title: de("Declination"),
                description: "+00 48 16.4049"
            }, {
                title: de("Distance [parsec]"),
                description: "3.381\xb10.006"
            }, {
                title: de("Distance [lightyears]"),
                description: "11.03\xb10.02"
            }, {
                title: de("Number of stars in system"),
                description: "2"
            }, {
                title: de("Number of planets in system"),
                description: "10"
            }, {
                title: de("Mass [Mearth]"),
                description: "1.2\xb10.2"
            }, {
                title: de("Orbital period [days]"),
                description: "4.734\xb10.009"
            }];
            qe === Number(1) && (re = [{
                title: de("Surface pressure"),
                description: "99.325 kPa (at MSL)"
            }, {
                title: de("Floral diversity"),
                description: de("No")
            }]),
            qe === Number(2) && (re = [{
                title: de("Surface pressure"),
                description: "100.325 kPa (at MSL)"
            }, {
                title: de("Floral diversity"),
                description: de("Very High")
            }]),
            qe === Number(3) && (re = [{
                title: de("Surface pressure"),
                description: "101.325 kPa (at MSL)"
            }, {
                title: de("Floral diversity"),
                description: de("High")
            }]),
            qe === Number(4) && (re = [{
                title: de("Surface pressure"),
                description: "102.325 kPa (at MSL)"
            }, {
                title: de("Floral diversity"),
                description: de("Normal")
            }]),
            qe === Number(5) && (re = [{
                title: de("Surface pressure"),
                description: "103.325 kPa (at MSL)"
            }, {
                title: de("Floral diversity"),
                description: de("Poor")
            }]),
            qe === Number(1) && (le = [{
                title: de("Population:"),
                description: ""
            }, {
                title: de("People"),
                description: 0
            }, {
                title: de("Animals"),
                description: 0
            }, {
                title: de("Artificial life"),
                description: 0
            }]),
            qe === Number(2) && (le = [{
                title: de("Population:"),
                description: ""
            }, {
                title: de("People"),
                description: de("30k+")
            }, {
                title: de("Animals"),
                description: de("4bln+")
            }, {
                title: de("Artificial life"),
                description: 0
            }]),
            qe === Number(3) && (le = [{
                title: de("Population:"),
                description: ""
            }, {
                title: de("People"),
                description: de("8bln+")
            }, {
                title: de("Animals"),
                description: de("6bln+")
            }, {
                title: de("Artificial life"),
                description: 0
            }]),
            qe === Number(4) && (le = [{
                title: de("Population:"),
                description: ""
            }, {
                title: de("People"),
                description: de("15bln+")
            }, {
                title: de("Animals"),
                description: de("3bln+")
            }, {
                title: de("Artificial life"),
                description: de("10mln+")
            }]),
            qe === Number(5) && (le = [{
                title: de("Population:"),
                description: ""
            }, {
                title: de("People"),
                description: de("18bln+")
            }, {
                title: de("Animals"),
                description: de("1bln+")
            }, {
                title: de("Artificial life"),
                description: de("1.5bln+")
            }]),
            qe === Number(1) && (ae = [{
                title: de("48.08% nitrogen (N2; dry air)")
            }, {
                title: de("2.95% oxygen (O2)")
            }, {
                title: de("~ 0.001% water vapor (climate variable)")
            }, {
                title: de("5.9340% argon")
            }, {
                title: de("23.023% carbon dioxide")
            }, {
                title: de("1.00182% neon")
            }, {
                title: de("5.00052% helium")
            }, {
                title: de("1.00019% methane")
            }, {
                title: de("2.00011% krypton")
            }, {
                title: de("1.00006% hydrogen")
            }]),
            qe === Number(2) && (ae = [{
                title: de("69.08% nitrogen (N2; dry air)")
            }, {
                title: de("28.95% oxygen (O2)")
            }, {
                title: de("~ 2% water vapor (climate variable)")
            }, {
                title: de("0.8340% argon")
            }, {
                title: de("0.1413% carbon dioxide")
            }, {
                title: de("0.00182% neon")
            }, {
                title: de("0.00052% helium")
            }, {
                title: de("0.00019% methane")
            }, {
                title: de("0.00011% krypton")
            }, {
                title: de("0.00006% hydrogen")
            }]),
            qe === Number(3) && (ae = [{
                title: de("78.08% nitrogen (N2; dry air)")
            }, {
                title: de("20.95% oxygen (O2)")
            }, {
                title: de("~ 1% water vapor (climate variable)")
            }, {
                title: de("0.9340% argon")
            }, {
                title: de("0.0413% carbon dioxide")
            }, {
                title: de("0.00182% neon")
            }, {
                title: de("0.00052% helium")
            }, {
                title: de("0.00019% methane")
            }, {
                title: de("0.00011% krypton")
            }, {
                title: de("0.00006% hydrogen")
            }]),
            qe === Number(4) && (ae = [{
                title: de("70.08% nitrogen (N2; dry air)")
            }, {
                title: de("19.95% oxygen (O2)")
            }, {
                title: de("~ 1% water vapor (climate variable)")
            }, {
                title: de("0.9340% argon")
            }, {
                title: de("0.0413% carbon dioxide")
            }, {
                title: de("0.00182% neon")
            }, {
                title: de("0.00052% helium")
            }, {
                title: de("0.00019% methane")
            }, {
                title: de("0.00011% krypton")
            }, {
                title: de("0.00006% hydrogen")
            }]),
            qe === Number(5) && (ae = [{
                title: de("65.08% nitrogen (N2; dry air)")
            }, {
                title: de("15.95% oxygen (O2)")
            }, {
                title: de("~ 1% water vapor (climate variable)")
            }, {
                title: de("3.9340% argon")
            }, {
                title: de("10.0413% carbon dioxide")
            }, {
                title: de("1.00182% neon")
            }, {
                title: de("2.00052% helium")
            }, {
                title: de("1.00019% methane")
            }, {
                title: de("0.50011% krypton")
            }, {
                title: de("0.50006% hydrogen")
            }]);
            var Re = [{
                title: de("New Perks for this evolution level:")
            }];
            qe === Number(1) && (Re = [{
                title: de("Additional perks:")
            }]),
            qe === Number(2) && (Re = [{
                title: de("Additional perks:")
            }]),
            qe === Number(3) && (Re = [{
                title: de("Additional perks:")
            }]),
            qe === Number(4) && (Re = [{
                title: de("Additional perks:")
            }]),
            qe === Number(5) && (Re = [{
                title: de("Additional perks:")
            }]);
            var Ze = [{
                title: de("Ability to grow-up a planet")
            }];
            qe === Number(1) && (Ze = [{
                title: de("Nothing")
            }]),
            qe === Number(2) && (Ze = [{
                title: de("Open of the NFT Battle-Royal [Coming Soon]")
            }, {
                title: de("70% of all commissions goes to ECO-related fund")
            }]),
            qe === Number(3) && (Ze = [{
                title: de("Minting NFT")
            }]),
            qe === Number(4) && (Ze = [{
                title: de("Staking of the NFTs")
            }]),
            qe === Number(5) && (Ze = [{
                title: de("Coming Soon")
            }]);
            var Be = [1, 4, 12, 20, 50]
              , Ge = Number((Le / Be[qe]).toFixed(1));
            return (0,
            I.jsxs)(I.Fragment, {
                children: [(0,
                I.jsx)(k, {
                    children: (0,
                    I.jsxs)(O, {
                        children: [(0,
                        I.jsxs)(U, {
                            children: [ge && (0,
                            I.jsxs)(I.Fragment, {
                                children: [qe >= 1 && (0,
                                I.jsx)(W, {
                                    children: de("NFT IN GAME")
                                }), (0,
                                I.jsx)(H, {
                                    children: (0,
                                    I.jsx)(y.cC, {
                                        defaults: de("Primary system name <span>ALM 0521</span>"),
                                        components: {
                                            span: (0,
                                            I.jsx)("span", {})
                                        }
                                    })
                                })]
                            }), (0,
                            I.jsx)(oe, {
                                lvl: qe
                            }), (0,
                            I.jsx)(F, {
                                children: qe >= Number(5) ? (0,
                                I.jsxs)(I.Fragment, {
                                    children: [(0,
                                    I.jsx)(M, {
                                        lvl: !0
                                    }), (0,
                                    I.jsx)(S, {
                                        lvl: !0
                                    }), (0,
                                    I.jsx)(P, {
                                        lvl: !0
                                    }), (0,
                                    I.jsx)(q, {
                                        lvl: !0
                                    }), (0,
                                    I.jsx)(L, {
                                        lvl: !0
                                    })]
                                }) : (0,
                                I.jsxs)(I.Fragment, {
                                    children: [(0,
                                    I.jsx)(M, {
                                        lvl: Ge >= .02
                                    }), (0,
                                    I.jsx)(S, {
                                        lvl: Ge >= .22
                                    }), (0,
                                    I.jsx)(P, {
                                        lvl: Ge >= .42
                                    }), (0,
                                    I.jsx)(q, {
                                        lvl: Ge >= .62
                                    }), (0,
                                    I.jsx)(L, {
                                        lvl: Ge >= .82
                                    })]
                                })
                            }), (0,
                            I.jsxs)(D, {
                                maxLvl: qe >= 5,
                                children: [qe >= 5 ? (0,
                                I.jsx)(T, {
                                    children: de("Maximum evolution level")
                                }) : (0,
                                I.jsx)(V, {
                                    children: de("Upgrades till the next level")
                                }), (0,
                                I.jsx)(Z, {
                                    children: qe < 5 && "".concat(Le, "/").concat(Be[qe])
                                })]
                            }), (0,
                            I.jsx)(Ue, {})]
                        }), (0,
                        I.jsxs)(ne, {
                            children: [!ge && (0,
                            I.jsxs)(I.Fragment, {
                                children: [qe >= 1 && (0,
                                I.jsx)(W, {
                                    children: de("NFT IN GAME")
                                }), (0,
                                I.jsx)(H, {
                                    children: (0,
                                    I.jsx)(y.cC, {
                                        defaults: de("Primary system name <span>ALM 0521</span>"),
                                        components: {
                                            span: (0,
                                            I.jsx)("span", {})
                                        }
                                    })
                                })]
                            }), (0,
                            I.jsx)(ue, {
                                title: de("Planet information"),
                                content: (0,
                                I.jsxs)(X, {
                                    children: [(0,
                                    I.jsxs)("div", {
                                        children: [null === De || void 0 === De ? void 0 : De.map((function(e) {
                                            return (0,
                                            I.jsxs)($, {
                                                children: [(0,
                                                I.jsx)(Y, {
                                                    children: e.title
                                                }), (0,
                                                I.jsx)(Y, {
                                                    children: e.description
                                                })]
                                            }, e.title)
                                        }
                                        )), null === (l = re) || void 0 === l ? void 0 : l.map((function(e) {
                                            return (0,
                                            I.jsxs)($, {
                                                children: [(0,
                                                I.jsx)(Y, {
                                                    children: e.title
                                                }), (0,
                                                I.jsx)(Y, {
                                                    children: e.description
                                                })]
                                            }, e.title)
                                        }
                                        )), null === (c = le) || void 0 === c ? void 0 : c.map((function(e) {
                                            return (0,
                                            I.jsxs)(z, {
                                                children: [(0,
                                                I.jsx)(Y, {
                                                    children: e.title
                                                }), (0,
                                                I.jsx)(Y, {
                                                    children: e.description
                                                })]
                                            }, e.title)
                                        }
                                        )), (0,
                                        I.jsxs)(te, {
                                            children: [(0,
                                            I.jsx)(ie, {
                                                children: de("Culture")
                                            }), qe <= Number(1) && (0,
                                            I.jsx)(ie, {
                                                children: de("No")
                                            }), qe === Number(2) && (0,
                                            I.jsx)(ie, {
                                                children: de("Tribal")
                                            }), qe === Number(3) && (0,
                                            I.jsx)(ie, {
                                                children: de("Modern Society")
                                            }), qe === Number(4) && (0,
                                            I.jsx)(ie, {
                                                children: de("Cosmos-oriented society")
                                            }), qe === Number(5) && (0,
                                            I.jsx)(ie, {
                                                children: de("Futuristic Society")
                                            })]
                                        })]
                                    }), (0,
                                    I.jsxs)(K, {
                                        children: [(0,
                                        I.jsx)(ee, {
                                            children: de("Composition by volume:")
                                        }), null === (p = ae) || void 0 === p ? void 0 : p.map((function(e) {
                                            return (0,
                                            I.jsx)(J, {
                                                children: e.title
                                            }, e.title)
                                        }
                                        )), (0,
                                        I.jsx)(Q, {}), null === (m = Re) || void 0 === m ? void 0 : m.map((function(e) {
                                            return (0,
                                            I.jsx)(ee, {
                                                children: e.title
                                            }, e.title)
                                        }
                                        )), null === (f = Ze) || void 0 === f ? void 0 : f.map((function(e) {
                                            return (0,
                                            I.jsx)(R, {
                                                children: e.title
                                            }, e.title)
                                        }
                                        ))]
                                    })]
                                })
                            }), (0,
                            I.jsxs)(B, {
                                children: [(0,
                                I.jsx)(G, {
                                    disabled: !Ve,
                                    onClick: Pe,
                                    children: de("Mint NFT")
                                }), (0,
                                I.jsx)(E, {
                                    children: de("*You will be able to mint your Planet at the 3rd evolution level")
                                })]
                            })]
                        })]
                    })
                }), (0,
                I.jsx)(A.$, {
                    account: se,
                    isDark: me,
                    toggleTheme: fe,
                    buttonTitle: de("Connect"),
                    explorerName: xe,
                    explorerLink: he
                })]
            })
        }
          , Ee = !0
    },
    46922: function(e, t, i) {
        "use strict";
        i.d(t, {
            $: function() {
                return n.$
            }
        });
        var n = i(87094)
    },
    83817: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/nfts", function() {
            return i(21232)
        }
        ])
    }
}, function(e) {
    e.O(0, [5497, 3271, 7094, 9774, 2888, 179], (function() {
        return t = 83817,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
