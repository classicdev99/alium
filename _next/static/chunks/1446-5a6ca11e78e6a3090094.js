"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1446], {
    63114: function(e, t, n) {
        var i = n(62639)
          , a = n(93350)
          , r = n(79308)
          , o = n(85893)
          , s = function e(t) {
            var n = t.text;
            return (0,
            o.jsxs)(e.Root, {
                children: [(0,
                o.jsx)(i.LT, {}), (0,
                o.jsx)(e.Text, {
                    children: n
                })]
            })
        };
        s.Text = a.default.div.withConfig({
            displayName: "EmptyShpPools__Text",
            componentId: "sc-jtjbzd-0"
        })(["", " text-align:center;color:#0b1359;margin-top:16px;"], r.cp.h6),
        s.Root = (0,
        a.default)(i.Zb).withConfig({
            displayName: "EmptyShpPools__Root",
            componentId: "sc-jtjbzd-1"
        })(["padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:366px;@media ", "{min-height:248px;", "{", "}}"], r.mq.down(r.AV.sm), s.Text, r.cp.oN.medium),
        t.Z = s
    },
    91446: function(e, t, n) {
        n.r(t),
        n.d(t, {
            __N_SSG: function() {
                return Ji
            },
            default: function() {
                return Ui
            }
        });
        var i, a = n(77985), r = n(41810), o = n(83789), s = n(30266), u = n(809), l = n.n(u), d = n(2593), c = n(80318), p = n(52209);
        !function(e) {
            e.IN_POOL = "IN_POOL",
            e.NOT_JOIN = "NOT_JOIN",
            e.LEFT_THE_POOL = "LEFT_THE_POOL"
        }(i || (i = {}));
        var m, f, y = function(e, t) {
            return e && t ? i.LEFT_THE_POOL : e ? i.IN_POOL : i.NOT_JOIN
        }, h = n(28687), v = n(96486), x = JSON.parse('[{"inputs":[{"internalType":"address","name":"_aliumToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Bonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"MinDepositSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"PoolCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"rewardPool","type":"address"}],"name":"RewardPoolSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"position","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withheld","type":"event"},{"inputs":[],"name":"MAX_POOL_LENGTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"countReward","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPoolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentPoolId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"getPoolWithdrawPosition","outputs":[{"internalType":"uint256","name":"position","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftRewardPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_percent","type":"uint256"},{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"percentFrom","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"poolWithheld","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"uint256","name":"leftTracker","type":"uint256"},{"internalType":"uint256","name":"withheldFunds","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minDeposit","type":"uint256"}],"name":"setMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardPool","type":"address"}],"name":"setNftRewardPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"totalLockedPoolTokens","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"},{"internalType":"uint256","name":"_leftPosition","type":"uint256"}],"name":"totalLockedPoolTokensFrom","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"userLockedPoolTokens","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"users","outputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"bool","name":"paid","type":"bool"},{"internalType":"uint256","name":"leftId","type":"uint256"}],"internalType":"struct StrongHolderPool.User[]","name":"_users","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]'), g = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Bonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"MinDepositSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"PoolCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"rewardPool","type":"address"}],"name":"RewardPoolSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"WithdrawPending","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Withdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"poolId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"position","type":"uint256"},{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withheld","type":"event"},{"inputs":[],"name":"MAX_POOL_LENGTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"countReward","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentPoolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentPoolId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getPendingWithdrawal","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"getPoolWithdrawPosition","outputs":[{"internalType":"uint256","name":"position","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"lock","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"minDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftRewardPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_percent","type":"uint256"},{"internalType":"uint256","name":"_num","type":"uint256"}],"name":"percentFrom","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"poolWithheld","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"uint256","name":"leftTracker","type":"uint256"},{"internalType":"uint256","name":"withheldFunds","type":"uint256"},{"internalType":"uint256","name":"withdrawn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_minDeposit","type":"uint256"}],"name":"setMinDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewardPool","type":"address"}],"name":"setNftRewardPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"totalLocked","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"},{"internalType":"uint256","name":"_leftPosition","type":"uint256"}],"name":"totalLockedPoolTokensFrom","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"},{"internalType":"address","name":"_account","type":"address"}],"name":"userLockedBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"users","outputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"bool","name":"paid","type":"bool"},{"internalType":"uint256","name":"leftId","type":"uint256"}],"internalType":"struct StrongETHHolderPool.User[]","name":"_users","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_poolId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawPending","outputs":[],"stateMutability":"nonpayable","type":"function"}]'), w = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"","type":"bytes"}],"name":"ErrorLog","type":"event"},{"anonymous":false,"inputs":[],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"Logged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolId","type":"uint256"}],"name":"RewardUpdated","type":"event"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"uint256","name":"_withdrawPosition","type":"uint256"}],"name":"getLog","outputs":[{"internalType":"uint256","name":"res","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"getLogs","outputs":[{"internalType":"uint256[101]","name":"res","type":"uint256[101]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawPosition","type":"uint256"}],"name":"getReward","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct NFTRewardPool.Reward[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IRinanceGaming1155","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_shp","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_caller","type":"address"},{"internalType":"uint256","name":"_withdrawPosition","type":"uint256"}],"name":"log","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IRinanceGaming1155","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_position","type":"uint256"},{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct NFTRewardPool.Reward[]","name":"_rewardsList","type":"tuple[]"}],"name":"setReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_positions","type":"uint256[]"},{"components":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct NFTRewardPool.Reward[]","name":"rewards","type":"tuple[]"}],"internalType":"struct NFTRewardPool.InputReward[]","name":"_rewardsLists","type":"tuple[]"}],"name":"setRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"status","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_tokenAmount","type":"uint256"}],"name":"withdrawTo","outputs":[],"stateMutability":"nonpayable","type":"function"}]'), b = n(21340), j = n(86377);
        function T(e) {
            return e.contractV1.MAX_POOL_LENGTH()
        }
        function k(e) {
            return e.contractV1.getCurrentPoolId()
        }
        function _(e) {
            return e.rewardToken()
        }
        function P(e, t) {
            return (0,
            b.i)(x, t.map((function(t) {
                return {
                    address: e,
                    name: "pools",
                    params: [t]
                }
            }
            )))
        }
        function C(e, t, n) {
            return I.apply(this, arguments)
        }
        function I() {
            return (I = (0,
            s.Z)(l().mark((function e(t, n, i) {
                var a, r;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            b.i)(x, n.map((function(e) {
                                return {
                                    address: t,
                                    name: "users",
                                    params: [e]
                                }
                            }
                            )));
                        case 2:
                            return a = e.sent,
                            r = a.reduce((function(e, t, a) {
                                var r = (0,
                                c.Z)(t, 1)[0];
                                if ((0,
                                j.Vw)(r, i)) {
                                    var o = null === r || void 0 === r ? void 0 : r.find((function(e) {
                                        return e.account === i
                                    }
                                    ))
                                      , s = o && (0,
                                    j.Vc)(o)
                                      , u = y(o, s);
                                    e.push({
                                        poolId: n[a],
                                        status: u
                                    })
                                }
                                return e
                            }
                            ), []),
                            e.abrupt("return", r);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        function M(e, t) {
            return e.contractV1.withdraw(t)
        }
        function O(e) {
            return e.claim()
        }
        function N(e, t) {
            return e.getLogs(t)
        }
        function A() {
            return (A = (0,
            s.Z)(l().mark((function e(t, n) {
                var i, a;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return i = {},
                            a = (0,
                            v.times)(n.toNumber(), (function(e) {
                                return e + 1
                            }
                            )),
                            e.next = 4,
                            (0,
                            b.i)(w, a.map((function(e) {
                                return {
                                    address: t.address,
                                    name: "getReward",
                                    params: [e]
                                }
                            }
                            )));
                        case 4:
                            return e.sent.forEach((function(e, t) {
                                var n = (0,
                                c.Z)(e, 1)[0].filter((function(e) {
                                    return e.amount.gt(0)
                                }
                                ));
                                n.length > 0 && (i[a[t]] = n)
                            }
                            )),
                            e.abrupt("return", i);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var L = (0,
        h.gql)(m || (m = (0,
        p.Z)(["\n  query getPoolCreatedAt($id: ID!) {\n    pool(id: $id) {\n      createdAt\n    }\n  }\n"])));
        function S() {
            return (S = (0,
            s.Z)(l().mark((function e(t, n) {
                var i;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (null !== n && void 0 !== n && n.subgraphUrl) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", void 0);
                        case 2:
                            return e.next = 4,
                            (0,
                            h.request)(n.subgraphUrl, L, {
                                id: t.toString()
                            });
                        case 4:
                            return i = e.sent,
                            e.abrupt("return", i.pool ? d.O$.from(i.pool.createdAt) : void 0);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var E = (0,
        h.gql)(f || (f = (0,
        p.Z)(["\n  query getPoolWithdrawals($id: ID!) {\n    pool(id: $id) {\n      withdrawals {\n        account\n        amount\n      }\n    }\n  }\n"])));
        function Z() {
            return (Z = (0,
            s.Z)(l().mark((function e(t, n) {
                var i;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (null !== n && void 0 !== n && n.subgraphUrl) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", []);
                        case 2:
                            return e.next = 4,
                            (0,
                            h.request)(n.subgraphUrl, E, {
                                id: t.toString()
                            });
                        case 4:
                            return i = e.sent,
                            e.abrupt("return", i.pool ? i.pool.withdrawals.map((function(e) {
                                return {
                                    account: e.account,
                                    amount: d.O$.from(e.amount)
                                }
                            }
                            )) : []);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).apply(this, arguments)
        }
        var R, V = n(82212), D = n(11783), W = n(52503), F = n(3019), q = n(87660), H = n(47646), B = n(85754), z = n(17409), G = n(93578), $ = n(86264), U = n(68216), J = n(25997), Y = n(92809), X = n(39529), Q = n(56371);
        !function(e) {
            e[e.V1 = 0] = "V1",
            e[e.V3 = 1] = "V3"
        }(R || (R = {}));
        var K = function() {
            function e(t, n) {
                (0,
                U.Z)(this, e),
                this.config = n,
                (0,
                Y.Z)(this, "contractV1", void 0),
                (0,
                Y.Z)(this, "contractV3", void 0),
                this.contractV1 = new X.Contract(this.config.address,x,t),
                this.contractV3 = new X.Contract(this.config.address,g,t)
            }
            return (0,
            J.Z)(e, [{
                key: "rewardToken",
                value: function() {
                    var e = (0,
                    s.Z)(l().mark((function e() {
                        return l().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getVersion();
                                case 2:
                                    if (e.sent !== R.V1) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", this.contractV1.rewardToken());
                                case 5:
                                    return e.abrupt("return", this.config.tokens[0]);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "totalLockedPoolTokens",
                value: function() {
                    var e = (0,
                    s.Z)(l().mark((function e(t) {
                        return l().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getVersion();
                                case 2:
                                    if (e.sent !== R.V1) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", this.contractV1.totalLockedPoolTokens(t));
                                case 5:
                                    return e.abrupt("return", this.contractV3.totalLocked(t));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "totalLpMultiCalldata",
                value: function() {
                    var e = (0,
                    s.Z)(l().mark((function e(t) {
                        var n, i = this;
                        return l().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getVersion();
                                case 2:
                                    return n = e.sent,
                                    e.abrupt("return", {
                                        callData: t.map((function(e) {
                                            return {
                                                address: i.config.address,
                                                name: n === R.V1 ? "totalLockedPoolTokens" : "totalLocked",
                                                params: [e]
                                            }
                                        }
                                        )),
                                        abi: n === R.V1 ? x : g
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "lock",
                value: function() {
                    var e = (0,
                    s.Z)(l().mark((function e(t, n) {
                        return l().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.getVersion();
                                case 2:
                                    if (e.sent !== R.V1) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", this.contractV1.lock(t, n));
                                case 5:
                                    return e.abrupt("return", this.contractV3.lock(t, {
                                        value: n
                                    }));
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getVersion",
                value: function() {
                    var e = (0,
                    s.Z)(l().mark((function e() {
                        var t;
                        return l().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.contractV3.version();
                                case 3:
                                    if (t = e.sent,
                                    (0,
                                    Q.keccak256)((0,
                                    Q.toUtf8Bytes)("{support:ETH,reward_pool:true}")) !== t) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", R.V3);
                                case 6:
                                    throw new Error("unknown version");
                                case 9:
                                    return e.prev = 9,
                                    e.t0 = e.catch(0),
                                    e.abrupt("return", R.V1);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 9]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }]),
            e
        }()
          , ee = function() {
            var e = (0,
            s.Z)(l().mark((function e(t, n) {
                var i;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            (0,
                            q.V)(t);
                        case 2:
                            return i = e.sent,
                            e.abrupt("return", i && (null === n || void 0 === n ? void 0 : n.address) && new K(i,n));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }();
        function te(e) {
            var t = (0,
            H.x)().chainId
              , n = (0,
            B.a)().account
              , i = (0,
            $.D)();
            return (0,
            W.ZP)(i && (null === e || void 0 === e ? void 0 : e.address) && t && "useShpContract/".concat(n || "offline", "/").concat(e.address, "/").concat(t), (function() {
                return new K((0,
                G.TY)(i, n),e)
            }
            )).data
        }
        var ne = function() {
            var e = (0,
            s.Z)(l().mark((function e(t) {
                var n, i, a, r, o;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = F.g.getState()._currentChainId,
                            e.next = 3,
                            ee(n, t);
                        case 3:
                            return i = e.sent,
                            e.next = 6,
                            k(i);
                        case 6:
                            return a = e.sent,
                            e.next = 9,
                            _(i);
                        case 9:
                            return r = e.sent,
                            e.next = 12,
                            ae(r, n);
                        case 12:
                            return o = e.sent,
                            e.abrupt("return", {
                                poolId: a,
                                config: t,
                                token: o
                            });
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        function ie(e) {
            var t, n = (0,
            W.ZP)(e && "shp/useCurrentPoolId/".concat(null === e || void 0 === e ? void 0 : e.address), (0,
            s.Z)(l().mark((function t() {
                return l().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", ne(e));
                        case 1:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            )))), i = n.data, a = n.isValidating, r = n.error, o = null === i || void 0 === i ? void 0 : i.token;
            return {
                data: i && null !== o && void 0 !== o && o.symbol ? {
                    poolId: i.poolId,
                    contractAddress: null === (t = i.config) || void 0 === t ? void 0 : t.address,
                    symbol: (null === o || void 0 === o ? void 0 : o.symbol) || "",
                    config: e
                } : null,
                isValidating: a,
                error: r,
                token: o
            }
        }
        var ae = function() {
            var e = (0,
            s.Z)(l().mark((function e(t, n) {
                var i;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ("string" !== typeof t) {
                                e.next = 5;
                                break
                            }
                            return e.next = 3,
                            (0,
                            D._Q)({
                                address: t,
                                chainId: n
                            });
                        case 3:
                            return i = e.sent,
                            e.abrupt("return", new V.WU(n,t,i.decimals,i.symbol,null === i || void 0 === i ? void 0 : i.name));
                        case 5:
                            return e.abrupt("return", t);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }()
          , re = function() {
            var e = (0,
            s.Z)(l().mark((function e(t) {
                var n, i;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = F.g.getState()._currentChainId,
                            e.next = 3,
                            ee(n, t);
                        case 3:
                            return i = e.sent,
                            e.abrupt("return", T(i));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        function oe(e) {
            return (0,
            W.ZP)(e && "shp/useMaxPoolLength/".concat(null === e || void 0 === e ? void 0 : e.address), (0,
            s.Z)(l().mark((function t() {
                var n;
                return l().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            re(e);
                        case 2:
                            return n = t.sent,
                            t.abrupt("return", n);
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), {
                revalidateIfStale: !1
            })
        }
        var se, ue = n(47235), le = n(86366);
        function de(e, t) {
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
        function ce(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? de(Object(n), !0).forEach((function(t) {
                    (0,
                    Y.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var pe, me = (se = {},
        (0,
        Y.Z)(se, V.a_.BSCTESTNET, {
            alium: {
                address: "0x202468d2625e41Bb38B72B3ca79b06e57125500B",
                tokens: [],
                poolsImage: "/images/shp/pools/aliumPool.png",
                withNft: !0,
                subgraphUrl: ""
            },
            oldRinance: {
                address: "0xCFb05Ec4d07Ca682C6462266aA6c8159c4435921",
                tokens: [],
                poolsImage: "/images/shp/pools/aliumPool.png",
                withNft: !0,
                subgraphUrl: ""
            },
            ethShp: {
                address: "0x59a742A2369B791E4180CA2Bd00C378E24a3eeBf",
                tokens: [V.mX[V.a_.BSCTESTNET]],
                poolsImage: "/images/shp/pools/metisPool.png",
                subgraphUrl: "/api/subgraphs/metis/alium-shp-metis"
            }
        }),
        (0,
        Y.Z)(se, V.a_.MAINNET, {
            alium: {
                address: "0x95CDf618b6aF0ec1812290A777955D3609B0508d",
                tokens: [],
                poolsImage: "/images/shp/pools/aliumPool.png",
                withNft: !0,
                subgraphUrl: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-shp"
            },
            oldRinance: {
                address: "0x4f388167F8B52F89C87A4E46706b9C1408F2c137",
                tokens: [],
                poolsImage: "/images/shp/pools/aliumPool.png",
                subgraphUrl: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-shp"
            }
        }),
        se), fe = (0,
        Y.Z)({}, V.a_.METIS, {
            ethShp: {
                address: "0x8613ecdbd50EFD649EE1D7837E78Fb71ee405240",
                tokens: [V.mX[V.a_.METIS]],
                poolsImage: "/images/shp/pools/metisPool.png",
                subgraphUrl: "/api/subgraphs/metis/alium-shp-metis"
            }
        }), ye = le.r8 ? ce(ce({}, me), fe) : me, he = function() {
            var e = (0,
            H.x)().chainId;
            return {
                config: ye[e],
                chainId: e
            }
        }, ve = n(67294), xe = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.filter((function(e) {
                return !(null === e || void 0 === e || !e.length)
            }
            )).reduce((function(e, t) {
                return e = [].concat((0,
                o.Z)(e), (0,
                o.Z)(t))
            }
            ), [])
        }, ge = function(e) {
            return null === e || void 0 === e ? void 0 : e.reduce((function(e, t) {
                return e += null === t || void 0 === t ? void 0 : t.address
            }
            ), "")
        }, we = function() {
            var e = (0,
            s.Z)(l().mark((function e(t) {
                var n, i, a, r, o, s, u, c;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            ne(t);
                        case 2:
                            return n = e.sent,
                            i = n.poolId,
                            a = n.token,
                            r = i,
                            e.next = 8,
                            re(t);
                        case 8:
                            return o = e.sent,
                            s = (0,
                            j.kc)(r),
                            e.next = 12,
                            P(null === t || void 0 === t ? void 0 : t.address, s);
                        case 12:
                            return u = e.sent,
                            c = u.reduce((function(e, n, i) {
                                return n.leftTracker.lt(o) && e.push({
                                    poolId: d.O$.from(i),
                                    contractAddress: null === t || void 0 === t ? void 0 : t.address,
                                    symbol: null === a || void 0 === a ? void 0 : a.symbol,
                                    config: t
                                }),
                                e
                            }
                            ), []),
                            e.abrupt("return", c);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        !function(e) {
            e.NEW = "NEW",
            e.YOUR = "YOUR",
            e.ALL = "ALL"
        }(pe || (pe = {}));
        var be = n(85893);
        function je() {
            (0,
            a.useWeb3React)().account,
            (0,
            r.$G)().t;
            var e = function() {
                var e, t = he().config, n = null === (e = [null === t || void 0 === t ? void 0 : t.alium, null === t || void 0 === t ? void 0 : t.oldRinance, null === t || void 0 === t ? void 0 : t.ethShp]) || void 0 === e ? void 0 : e.filter((function(e) {
                    return !(null === e || void 0 === e || !e.address)
                }
                )), i = ge(n), a = (0,
                W.ZP)(i && (null === n || void 0 === n ? void 0 : n.length) && "shp/useAllPools/".concat(i), (0,
                s.Z)(l().mark((function e() {
                    return l().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Promise.all(n.map((function(e) {
                                    return we(e)
                                }
                                ))));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))), r = a.data, u = a.isValidating, d = a.error;
                return {
                    data: (0,
                    ve.useMemo)((function() {
                        return (null === r || void 0 === r ? void 0 : r.length) && xe.apply(void 0, (0,
                        o.Z)(r))
                    }
                    ), [r]),
                    loading: u,
                    error: d
                }
            }()
              , t = e.data;
            e.loading,
            e.error;
            return (0,
            be.jsx)(Qn, {
                data: t,
                type: pe.ALL
            })
        }
        var Te = function() {
            var e = (0,
            s.Z)(l().mark((function e(t) {
                var n;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            ne(t);
                        case 2:
                            return n = e.sent,
                            e.abrupt("return", {
                                config: t,
                                contractAddress: t.address,
                                poolId: n.poolId,
                                symbol: n.token.symbol
                            });
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        function ke() {
            var e, t = he().config, n = null === (e = [null === t || void 0 === t ? void 0 : t.alium, null === t || void 0 === t ? void 0 : t.ethShp]) || void 0 === e ? void 0 : e.filter((function(e) {
                return !(null === e || void 0 === e || !e.address)
            }
            )), i = ge(n), a = (0,
            W.ZP)(i && "shp/useNewShpPools/".concat(i), (0,
            s.Z)(l().mark((function e() {
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Promise.all(n.map((function(e) {
                                return Te(e)
                            }
                            ))));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))), r = a.data, o = a.isValidating, u = a.error, d = a.mutate;
            return {
                data: (0,
                ve.useMemo)((function() {
                    return (null === r || void 0 === r ? void 0 : r.length) && xe(r)
                }
                ), [r]),
                loading: o,
                error: u,
                mutate: d
            }
        }
        function _e() {
            var e = ke()
              , t = e.data;
            e.error,
            e.loading,
            (0,
            r.$G)().t;
            return (0,
            be.jsx)(Qn, {
                data: t,
                type: pe.NEW
            })
        }
        var Pe = n(10219)
          , Ce = n(14671)
          , Ie = n(38597)
          , Me = (0,
        n(59148).Z)((0,
        Ie.mW)((function(e, t) {
            return {
                query: "",
                setQuery: function(t) {
                    e({
                        query: t
                    })
                }
            }
        }
        ), "shp-store"))
          , Oe = (0,
        Ce.Z)(Me)
          , Ne = n(62639)
          , Ae = n(93350)
          , Le = n(79308)
          , Se = n(9279)
          , Ee = n(44431)
          , Ze = n.n(Ee)
          , Re = n(44328)
          , Ve = n(588);
        function De(e, t) {
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
        function We(e, t) {
            var n = te(t);
            return (0,
            W.ZP)(n && e ? ["shp/usePoolLocked/".concat(null === t || void 0 === t ? void 0 : t.address), e] : null, (function() {
                return function(e, t) {
                    return e.totalLockedPoolTokens(t)
                }(n, e)
            }
            ))
        }
        function Fe(e, t, n) {
            var i = te(t);
            return (0,
            W.ZP)(i && e && null !== t && void 0 !== t && t.address ? "shp/usePoolUsers/".concat(null === t || void 0 === t ? void 0 : t.address, "/").concat(null === e || void 0 === e ? void 0 : e.toString()) : null, (function() {
                return function(e, t) {
                    return e.contractV1.users(t)
                }(i, e)
            }
            ), n)
        }
        function qe(e, t, n) {
            var i = te(t);
            return (0,
            W.ZP)(i && e ? "shp/usePool/".concat(null === t || void 0 === t ? void 0 : t.address, "/").concat(null === e || void 0 === e ? void 0 : e.toString()) : null, (function() {
                return function(e, t) {
                    return e.contractV1.pools(t)
                }(i, e)
            }
            ), n)
        }
        function He(e) {
            return ie(e).token
        }
        function Be(e) {
            var t = ie(e).token;
            return (0,
            z.Ib)(t instanceof V.WU ? null === t || void 0 === t ? void 0 : t.address : "")
        }
        function ze(e, t) {
            var n = Fe(e, t).data
              , i = (0,
            ve.useMemo)((function() {
                return null === n || void 0 === n ? void 0 : n.filter(j.Vc)
            }
            ), [n])
              , a = "shp/usePoolWithdrawals/".concat(null === e || void 0 === e ? void 0 : e.toString(), "/").concat(null === i || void 0 === i ? void 0 : i.length, "/").concat(null === t || void 0 === t ? void 0 : t.address);
            return (0,
            W.ZP)(e && i ? a : null, (function() {
                return function(e, t) {
                    return Z.apply(this, arguments)
                }(e, t)
            }
            ))
        }
        function Ge(e, t, n) {
            var i = te(t)
              , r = (0,
            a.useWeb3React)().account;
            return (0,
            W.ZP)(te && e && r ? ["shp/useCountReward/".concat(null === t || void 0 === t ? void 0 : t.address), e, r] : null, (function() {
                return function(e, t, n) {
                    return e.contractV1.countReward(t, n)
                }(i, e, r)
            }
            ), n)
        }
        function $e(e, t) {
            var n = Fe(e, t)
              , i = n.data
              , a = n.isValidating
              , r = oe(t)
              , o = r.data
              , s = r.isValidating;
            return {
                isFull: (0,
                ve.useMemo)((function() {
                    return i && o && (0,
                    j.Fh)(i, o)
                }
                ), [o, i]),
                loading: a || s
            }
        }
        function Ue(e, t) {
            var n = Fe(e, t).data
              , i = qe(e, t).data;
            return (0,
            ve.useMemo)((function() {
                return n && i && d.O$.from(n.length).sub(i.leftTracker)
            }
            ), [i, n])
        }
        function Je(e, t) {
            var n = Fe(e, t)
              , i = n.data
              , r = n.isValidating
              , o = (0,
            a.useWeb3React)().account;
            return {
                accountUser: (0,
                ve.useMemo)((function() {
                    return i && (0,
                    j.Vw)(i, o)
                }
                ), [o, i]),
                isValidating: r
            }
        }
        function Ye(e, t) {
            var n = Ge(e, t)
              , i = n.data
              , a = n.isValidating
              , r = Je(e, t)
              , o = r.accountUser
              , s = r.isValidating
              , u = (0,
            ve.useMemo)((function() {
                return o && i && new V.gG(i.sub(o.balance).toString(),o.balance.toString())
            }
            ), [o, i])
              , l = (0,
            ve.useMemo)((function() {
                return null === u || void 0 === u ? void 0 : u.lessThan("0")
            }
            ), [u]);
            return {
                countRewardProfit: u,
                isLoss: l,
                loading: a || s
            }
        }
        function Xe(e, t) {
            var n = Fe(e, t).data
              , i = (0,
            a.useWeb3React)().account;
            return (0,
            ve.useMemo)((function() {
                if (i && n) {
                    var e = n.findIndex((function(e) {
                        return e.account === i
                    }
                    ));
                    return -1 === e ? new (Ze())(n.length + 1) : new (Ze())(e + 1)
                }
            }
            ), [i, n])
        }
        function Qe(e, t, n) {
            return (0,
            W.ZP)(e && null !== t && void 0 !== t && t.address ? ["shp/usePoolCreatedAt/".concat(null === t || void 0 === t ? void 0 : t.address), e] : null, (function() {
                return function(e, t) {
                    return S.apply(this, arguments)
                }(e, t)
            }
            ), function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? De(Object(n), !0).forEach((function(t) {
                        (0,
                        Y.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                revalidateIfStale: !1
            }, n))
        }
        function Ke(e) {
            var t, n = function(e) {
                var t = te(e);
                return (0,
                W.ZP)(t && "shp/useNftRewardPool/".concat(null === e || void 0 === e ? void 0 : e.address), (function() {
                    return function(e) {
                        return e.contractV1.nftRewardPool()
                    }(t)
                }
                ), {
                    revalidateIfStale: !1
                })
            }(e).data;
            return t = n === Se.d ? null : n,
            (0,
            z.cq)(t, w)
        }
        function et(e) {
            var t = Ke(e)
              , n = oe(e).data;
            return (0,
            W.ZP)(t && n ? ["shp/useNftAllRewards/".concat(null === e || void 0 === e ? void 0 : e.address)] : null, (function() {
                return function(e, t) {
                    return A.apply(this, arguments)
                }(t, n)
            }
            ))
        }
        var tt = function(e, t) {
            var n = function(e, t) {
                var n = qe(e, t)
                  , i = n.data
                  , a = n.isValidating
                  , r = We(e, t)
                  , o = r.data
                  , s = r.isValidating;
                return {
                    poolAmount: (0,
                    ve.useMemo)((function() {
                        return i && o && (0,
                        j.cv)(i.withdrawn, o)
                    }
                    ), [i, o]),
                    loading: a || s
                }
            }(t, e)
              , a = n.poolAmount
              , r = n.loading
              , o = Je(t, e)
              , s = o.accountUser
              , u = o.isValidating
              , l = s && (0,
            j.Vc)(s)
              , d = Ue(t, e)
              , c = y(s, l);
            return {
                poolStatus: c,
                isLeftThePool: c === i.LEFT_THE_POOL,
                withdrawPosition: d,
                poolAmount: a,
                accountUser: s,
                poolAccountLoading: u,
                loading: r || u
            }
        }
          , nt = n(71568)
          , it = n(7408)
          , at = d.O$.from(8);
        function rt() {
            return (0,
            be.jsx)(rt.Root, {
                src: "/images/shp/nft.png"
            })
        }
        rt.Root = Ae.default.img.withConfig({
            displayName: "NftItem__Root",
            componentId: "sc-1jojq49-0"
        })(["width:35px;height:40px;"]);
        var ot = Ae.default.p.withConfig({
            displayName: "ShpPoolCardstyled__ShpTypographyLabel",
            componentId: "sc-1k1otod-0"
        })(["", ";color:", ";margin-bottom:4px;"], it.A6.medium, nt.dw.basic)
          , st = Ae.default.b.withConfig({
            displayName: "ShpPoolCardstyled__ShpTypographyBolder",
            componentId: "sc-1k1otod-1"
        })(["", ";color:", ";"], it.A6.medium, nt.dw.heading)
          , ut = Ae.default.p.withConfig({
            displayName: "ShpPoolCardstyled__ShpTypographyPercent",
            componentId: "sc-1k1otod-2"
        })(["", ";color:", ";"], it.Vz.medium, nt.dw.limeGreen)
          , lt = Ae.default.p.withConfig({
            displayName: "ShpPoolCardstyled__ShpTypographyCurrency",
            componentId: "sc-1k1otod-3"
        })(["", ";color:", ";"], it.h6, nt.dw.limeGreen)
          , dt = Ae.default.div.withConfig({
            displayName: "ShpPoolCardstyled__ShpCol",
            componentId: "sc-1k1otod-4"
        })(["display:flex;justify-content:space-between;padding-bottom:12px;border-bottom:1px solid ", ";margin-bottom:8px;"], nt.dw.grayish)
          , ct = Ae.default.div.withConfig({
            displayName: "ShpPoolCardstyled__ShpBadge",
            componentId: "sc-1k1otod-5"
        })(["background:", ";border-radius:6px;padding:2px 8px;display:flex;align-items:center;justify-content:center;", ";color:", ";"], (function(e) {
            return e.lose ? "#FFF6F2" : "rgba(30, 167, 109, 0.1)"
        }
        ), it.A6.medium, (function(e) {
            return e.lose ? nt.dw.pureRed : nt.dw.limeGreen
        }
        ))
          , pt = (0,
        Ae.css)(["opacity:0.3;cursor:no-drop;"])
          , mt = Ae.default.p.withConfig({
            displayName: "CardBonusNft__Counter",
            componentId: "sc-1m2mr7g-0"
        })(["", ";color:", ";text-transform:uppercase;"], it.A6.medium, nt.dw.limeGreen)
          , ft = Ae.default.div.withConfig({
            displayName: "CardBonusNft__NftWrapper",
            componentId: "sc-1m2mr7g-1"
        })(["display:flex;justify-content:center;align-items:center;", "{margin-right:8px;}"], mt)
          , yt = function(e) {
            var t = e.poolId
              , n = e.config
              , i = e.type
              , a = (0,
            r.$G)().t
              , o = function(e, t, n) {
                var i = tt(t, e)
                  , a = i.isLeftThePool
                  , r = i.withdrawPosition
                  , o = i.loading;
                return {
                    count: (0,
                    ve.useMemo)((function() {
                        if (!a)
                            return n === pe.NEW ? null === at || void 0 === at ? void 0 : at.toNumber() : r ? (r.gte(at) ? at : r).toNumber() : void 0
                    }
                    ), [a, n, r]),
                    loading: o
                }
            }(t, n, i)
              , s = o.count
              , u = o.loading;
            return (s || u) && n.withNft ? (0,
            be.jsxs)(dt, {
                children: [(0,
                be.jsx)("div", {
                    children: (0,
                    be.jsx)(ot, {
                        children: a("Bonus NFT")
                    })
                }), (0,
                be.jsx)(ft, {
                    children: u ? (0,
                    be.jsx)(Ne.Od, {
                        animation: "waves",
                        height: 40,
                        width: 65
                    }) : (0,
                    be.jsxs)(be.Fragment, {
                        children: [(0,
                        be.jsxs)(mt, {
                            children: ["X", s]
                        }), (0,
                        be.jsx)(rt, {})]
                    })
                })]
            }) : null
        }
          , ht = n(91521)
          , vt = n(93022)
          , xt = n(42227);
        function gt(e) {
            var t = e.participantNumber
              , n = e.createdAt
              , i = e.poolShare
              , a = (0,
            r.$G)().t
              , o = (0,
            ve.useMemo)((function() {
                return n && (0,
                vt.Z)((0,
                xt.Z)(n.toNumber()), "dd/MM/yyyy, HH:mm:ss")
            }
            ), [n]);
            return (0,
            be.jsxs)(gt.Root, {
                children: [i && (0,
                be.jsxs)(gt.Field, {
                    children: [(0,
                    be.jsx)("span", {
                        children: a("Pool share")
                    }), (0,
                    be.jsxs)("span", {
                        children: [i.toFixed(2), "%"]
                    })]
                }), t && (0,
                be.jsxs)(gt.Field, {
                    children: [(0,
                    be.jsx)("span", {
                        children: a("Participant number")
                    }), (0,
                    be.jsx)("span", {
                        children: t.toString()
                    })]
                }), o && (0,
                be.jsxs)(gt.Field, {
                    children: [(0,
                    be.jsx)("span", {
                        children: a("Pool creation date")
                    }), (0,
                    be.jsx)("span", {
                        children: o
                    })]
                })]
            })
        }
        function wt(e) {
            var t = e.poolId
              , n = e.onDismiss
              , i = (e.contractAddress,
            e.symbol)
              , a = e.config
              , o = (0,
            r.$G)().t
              , s = We(t, a).data
              , u = ze(t, a)
              , l = u.data
              , d = u.isValidating
              , c = Fe(t, a).data
              , p = Qe(t, a).data
              , m = Xe(t, a)
              , f = Je(t, a).accountUser
              , y = (0,
            ve.useMemo)((function() {
                return f && s && new V.gG(f.balance.toString(),s.toString())
            }
            ), [f, s])
              , h = (0,
            ve.useMemo)((function() {
                var e = {};
                return null === l || void 0 === l || l.forEach((function(t) {
                    e[t.account.toLowerCase()] = t
                }
                )),
                e
            }
            ), [l]);
            return (0,
            be.jsx)(Ne.u_, {
                withoutContentWrapper: !0,
                title: o("Pool detail info"),
                onDismiss: n,
                children: (0,
                be.jsxs)(wt.Root, {
                    children: [(0,
                    be.jsx)(gt, {
                        participantNumber: m,
                        poolShare: y,
                        createdAt: p && (0,
                        ht.Jd)(p)
                    }), (0,
                    be.jsx)(wt.HistoryTitle, {
                        children: o("History")
                    }), (0,
                    be.jsxs)(wt.HistoryTable, {
                        children: [(0,
                        be.jsx)("thead", {
                            children: (0,
                            be.jsxs)("tr", {
                                children: [(0,
                                be.jsx)("th", {
                                    children: o("Wallet")
                                }), (0,
                                be.jsx)("th", {
                                    children: o("Added")
                                }), (0,
                                be.jsx)("th", {
                                    children: o("Withdraw")
                                })]
                            })
                        }), (0,
                        be.jsx)("tbody", {
                            children: null === c || void 0 === c ? void 0 : c.map((function(e) {
                                var t = null === h || void 0 === h ? void 0 : h[e.account.toLowerCase()]
                                  , n = "".concat(t ? (0,
                                ht.dp)((0,
                                ht.n9)((0,
                                ht.Jd)(t.amount))) : "-", " ").concat(i);
                                return (0,
                                be.jsxs)("tr", {
                                    children: [(0,
                                    be.jsx)("td", {
                                        children: (0,
                                        j.Tg)(e.account)
                                    }), (0,
                                    be.jsx)("td", {
                                        children: (0,
                                        ht.dp)((0,
                                        ht.n9)((0,
                                        ht.Jd)(e.balance))) + " " + i
                                    }), (0,
                                    j.Vc)(e) ? (0,
                                    be.jsx)("td", {
                                        children: d ? (0,
                                        be.jsx)(Ne.Od, {
                                            animation: "waves"
                                        }) : n
                                    }) : (0,
                                    be.jsx)("td", {
                                        children: "-"
                                    })]
                                }, e.account)
                            }
                            ))
                        })]
                    })]
                })
            })
        }
        gt.Root = Ae.default.div.withConfig({
            displayName: "PoolDetailsInfo__Root",
            componentId: "sc-47ub7r-0"
        })([""]),
        gt.Field = Ae.default.div.withConfig({
            displayName: "PoolDetailsInfo__Field",
            componentId: "sc-47ub7r-1"
        })(["display:flex;align-items:center;justify-content:space-between;padding:6px 8px;border-radius:6px;&:nth-child(even){background:#f4f5fa;}& > span{", " &:nth-child(1){color:#8990a5;}&:nth-child(2){color:#0b1359;}}"], Le.cp.A6.medium),
        wt.Root = Ae.default.div.withConfig({
            displayName: "Details__Root",
            componentId: "sc-kdmbv2-0"
        })(["max-width:450px;max-height:434px;padding:30px 32px 48px 32px;box-sizing:content-box;@media ", "{padding:30px 16px 24px 16px;}"], Le.mq.down(Le.AV.sm)),
        wt.HistoryTitle = Ae.default.div.withConfig({
            displayName: "Details__HistoryTitle",
            componentId: "sc-kdmbv2-1"
        })(["", ";color:#6c5dd3;margin:24px 0 16px;"], Le.cp.yG.medium),
        wt.HistoryTable = Ae.default.table.withConfig({
            displayName: "Details__HistoryTable",
            componentId: "sc-kdmbv2-2"
        })(["width:100%;max-height:139px;overflow:hidden;overflow-y:auto;display:block;@media ", "{overflow-x:auto;}thead{border-bottom:1px solid #f4f5fa;}th{font-weight:bold;font-size:12px;line-height:14px;letter-spacing:0.8px;text-transform:uppercase;color:#0b1359;text-align:left;}td,th{&:last-child{text-align:right;}}td{", " color:#8990a5;vertical-align:middle;&:first-child{word-wrap:break-word;border-top-left-radius:6px;border-bottom-left-radius:6px;}&:last-child{border-top-right-radius:6px;border-bottom-right-radius:6px;}}tr{display:grid;grid-template-columns:130px 100px 100px;gap:28px;padding:8px;border-radius:6px;&:nth-child(even){background:#f4f5fa;}@media ", "{grid-template-columns:repeat(3,90px);gap:18px;}}"], Le.mq.down(Le.AV.sm), Le.cp.A6.medium, Le.mq.down(Le.AV.sm));
        var bt = Ae.default.div.withConfig({
            displayName: "DetailsButton__Label",
            componentId: "sc-1akiigd-0"
        })(["", ";color:", ";display:flex;align-items:center;cursor:pointer;svg{margin-left:4px;}"], it.A6.bolder, nt.dw.primary)
          , jt = function(e) {
            var t = e.toggleDetails
              , n = e.isOpen
              , i = (0,
            r.$G)().t;
            return (0,
            be.jsxs)(bt, {
                onClick: t,
                children: [i(n ? "Hide" : "Details"), n ? (0,
                be.jsx)(Ne.g8, {
                    color: "currentColor"
                }) : (0,
                be.jsx)(Ne.v4, {
                    color: "currentColor"
                })]
            })
        }
          , Tt = Ae.default.a.withConfig({
            displayName: "ShpLink__Link",
            componentId: "sc-1tilnd2-0"
        })(["", ";color:", ";display:flex;align-items:center;cursor:pointer;svg{margin-left:4px;}"], it.A6.bolder, nt.dw.primary)
          , kt = function() {
            var e = (0,
            r.$G)().t;
            return (0,
            be.jsxs)(Tt, {
                href: "#",
                children: [e("SHP page "), (0,
                be.jsx)(Ne.xP, {
                    height: 16,
                    width: 16
                })]
            })
        }
          , _t = Ae.default.div.withConfig({
            displayName: "CardDetails__Actions",
            componentId: "sc-cw10n1-0"
        })(["display:flex;width:100%;"])
          , Pt = function(e) {
            var t = e.poolId
              , n = e.contractAddress
              , i = e.symbol
              , a = e.type
              , o = e.config
              , s = ((0,
            r.$G)().t,
            (0,
            Ne.dd)((0,
            be.jsx)(wt, {
                config: o,
                symbol: i,
                poolId: t,
                contractAddress: n
            }), !1))
              , u = (0,
            c.Z)(s, 1)[0]
              , l = a === pe.NEW;
            return (0,
            be.jsx)(be.Fragment, {
                children: (0,
                be.jsxs)(_t, {
                    style: {
                        justifyContent: l ? "center" : "space-between",
                        flexWrap: "wrap"
                    },
                    children: [!l && (0,
                    be.jsx)(jt, {
                        isOpen: !1,
                        toggleDetails: u
                    }), (0,
                    be.jsx)(kt, {})]
                })
            })
        }
          , Ct = n(99270)
          , It = function e(t) {
            var n = t.currency0
              , i = t.currency1;
            return (0,
            be.jsx)(e.Root, {
                children: (0,
                be.jsx)(Ct.Z, {
                    currency0: n,
                    currency1: i,
                    sizes: {
                        sizeA: 30,
                        sizeB: 16
                    }
                })
            })
        };
        It.Root = Ae.default.div.withConfig({
            displayName: "EarnStakeLogo__Root",
            componentId: "sc-2rs83f-0"
        })(["display:flex;align-items:center;position:relative;", "{> *:last-child{z-index:1;position:absolute;right:0;bottom:0;width:24px;height:24px;left:24px;}> *:first-child{z-index:0;padding:9px !important;}}"], Ct.Z.Root);
        var Mt = It
          , Ot = function(e) {
            var t = e.config
              , n = (0,
            r.$G)().t
              , i = He(t);
            return (0,
            be.jsxs)(dt, {
                children: [(0,
                be.jsxs)("div", {
                    children: [(0,
                    be.jsx)(ot, {
                        children: n("Earn {{symbol}}", {
                            symbol: null === i || void 0 === i ? void 0 : i.symbol
                        })
                    }), (0,
                    be.jsx)(st, {
                        children: n("Stake {{symbol}}", {
                            symbol: null === i || void 0 === i ? void 0 : i.symbol
                        })
                    })]
                }), (0,
                be.jsx)("div", {
                    children: (0,
                    be.jsx)(Mt, {
                        currency0: i,
                        currency1: i
                    })
                })]
            })
        }
          , Nt = n(13757)
          , At = n(94904)
          , Lt = n(90006)
          , St = n(93334);
        function Et(e) {
            var t = e.onDismiss
              , n = e.poolId
              , i = (e.contractAddress,
            e.symbol)
              , o = e.config
              , u = (0,
            r.$G)().t
              , d = (0,
            At.PN)()
              , c = We(n, o)
              , p = c.data
              , m = c.mutate
              , f = Xe(n, o)
              , y = Fe(n, o, {
                revalidateOnMount: !1
            }).mutate
              , h = function(e) {
                var t = Be(e)
                  , n = (0,
                ve.useState)(!1)
                  , i = n[0]
                  , a = n[1];
                return {
                    loading: i,
                    approve: (0,
                    ve.useMemo)((function() {
                        return t && (0,
                        s.Z)(l().mark((function n() {
                            var i;
                            return l().wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0,
                                        a(!0),
                                        n.next = 4,
                                        t.approve(null === e || void 0 === e ? void 0 : e.address, Re.MaxUint256);
                                    case 4:
                                        return i = n.sent,
                                        n.next = 7,
                                        i.wait();
                                    case 7:
                                        return n.prev = 7,
                                        a(!1),
                                        n.finish(7);
                                    case 10:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n, null, [[0, , 7, 10]])
                        }
                        )))
                    }
                    ), [null === e || void 0 === e ? void 0 : e.address, t])
                }
            }(o)
              , v = h.approve
              , x = h.loading
              , g = function(e) {
                var t = te(e)
                  , n = (0,
                ve.useState)(!1)
                  , i = n[0]
                  , r = n[1]
                  , o = (0,
                a.useWeb3React)().account;
                return {
                    loading: i,
                    lock: (0,
                    ve.useCallback)(function() {
                        var e = (0,
                        s.Z)(l().mark((function e(n) {
                            var i;
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        r(!0),
                                        e.next = 4,
                                        t.lock(o, n.toString());
                                    case 4:
                                        return i = e.sent,
                                        e.next = 7,
                                        i.wait();
                                    case 7:
                                        return e.prev = 7,
                                        r(!1),
                                        e.finish(7);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, , 7, 10]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [o, t])
                }
            }(o)
              , w = g.lock
              , b = g.loading
              , j = b || x
              , T = He(o)
              , k = function(e) {
                var t = Be(e)
                  , n = (0,
                a.useWeb3React)().account;
                return (0,
                W.ZP)(t && n ? ["shp/useRewardTokenAllowance/".concat(null === e || void 0 === e ? void 0 : e.address), n] : null, (function() {
                    return t.allowance(n, null === e || void 0 === e ? void 0 : e.address)
                }
                ))
            }(o)
              , _ = k.data
              , P = k.mutate
              , C = function(e) {
                var t = Be(e)
                  , n = (0,
                a.useWeb3React)().account;
                return (0,
                W.ZP)(t && n ? ["shp/useRewardTokenBalance/".concat(null === e || void 0 === e ? void 0 : e.address), n] : null, (function() {
                    return t.balanceOf(n)
                }
                ))
            }(o)
              , I = C.data
              , M = C.mutate
              , O = ke().mutate
              , N = Ue(n, o)
              , A = N && Number((0,
            ht.dp)((0,
            ht.Jd)(N)))
              , L = function(e) {
                var t = te(e)
                  , n = (0,
                W.ZP)(t ? ["shp/usePoolMinDeposit/".concat(null === e || void 0 === e ? void 0 : e.address)] : null, (function() {
                    return function(e) {
                        return e.contractV1.minDeposit()
                    }(t)
                }
                ))
                  , i = n.data;
                return n.error ? Ve.parseEther("0.0000000000001") : i
            }(o)
              , S = L && (0,
            ht.n9)((0,
            ht.Jd)(L))
              , E = (0,
            ve.useMemo)((function() {
                return I && (0,
                ht.n9)((0,
                ht.Jd)(I))
            }
            ), [I])
              , Z = (0,
            ve.useState)("")
              , R = Z[0]
              , D = Z[1]
              , F = (0,
            ve.useMemo)((function() {
                return new (Ze())(R)
            }
            ), [R])
              , q = F.gt(0)
              , H = (0,
            ve.useMemo)((function() {
                return q && (0,
                ht.r0)(F)
            }
            ), [F, q])
              , B = (0,
            ve.useMemo)((function() {
                return _ && H && (0,
                ht.Jd)(_).minus(H).lt(0)
            }
            ), [H, _])
              , z = null === E || void 0 === E ? void 0 : E.lt(F)
              , G = null === F || void 0 === F ? void 0 : F.gte(null === S || void 0 === S ? void 0 : S.toString())
              , $ = (0,
            ve.useMemo)((function() {
                return p && H ? new V.gG(H.toFixed(0),(0,
                ht.Jd)(p).plus(H).toFixed(0)) : new V.gG("0")
            }
            ), [H, p])
              , U = (0,
            St.Z)()
              , J = U.toastError
              , Y = U.toastSuccess
              , X = (0,
            ve.useCallback)((function(e) {
                return !j && D(e)
            }
            ), [j])
              , Q = (0,
            ve.useMemo)((function() {
                return v && !x && q && !z && B && G ? (0,
                s.Z)(l().mark((function e() {
                    var t;
                    return l().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                v();
                            case 3:
                                return e.next = 5,
                                P();
                            case 5:
                                Y(u("Approved")),
                                e.next = 12;
                                break;
                            case 8:
                                e.prev = 8,
                                e.t0 = e.catch(0),
                                console.error(e.t0),
                                J((null === (t = e.t0.data) || void 0 === t ? void 0 : t.message) || e.t0.message);
                            case 12:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 8]])
                }
                ))) : void 0
            }
            ), [v, x, q, G, z, P, B, u, J, Y])
              , K = (0,
            ve.useMemo)((function() {
                return !b && q && !z && !B && G && A >= 0 ? (0,
                s.Z)(l().mark((function e() {
                    var n;
                    return l().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                w(H);
                            case 3:
                                Nt.Z.joinShp(d, F.toString()),
                                Y(u("{{amount}} {{rewardTokenSymbol}} added to the pool", {
                                    amount: (0,
                                    ht.dp)(F),
                                    rewardTokenSymbol: i
                                })),
                                M(),
                                P(),
                                y(),
                                m(),
                                O(null),
                                t(),
                                e.next = 17;
                                break;
                            case 13:
                                e.prev = 13,
                                e.t0 = e.catch(0),
                                console.error(e.t0),
                                J((null === (n = e.t0.data) || void 0 === n ? void 0 : n.message) || e.t0.message);
                            case 17:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 13]])
                }
                ))) : void 0
            }
            ), [F, H, d, q, G, z, w, b, M, O, m, y, P, B, t, i, u, J, Y, A])
              , ee = (0,
            ve.useMemo)((function() {
                return null !== F && void 0 !== F && F.gt(0) ? G ? "" : u("Minimum Amount ".concat(null === S || void 0 === S ? void 0 : S.toString(), " ALM")) : ""
            }
            ), [F, G, S, u]);
            return (0,
            be.jsx)(be.Fragment, {
                children: (0,
                be.jsx)(Ne.u_, {
                    withoutContentWrapper: !0,
                    hideCloseButton: j,
                    title: u("Add {{token}}\u2019s to the pool", {
                        token: i
                    }),
                    onDismiss: t,
                    children: (0,
                    be.jsxs)(Et.Content, {
                        children: [(0,
                        be.jsxs)(Et.Data, {
                            children: [(0,
                            be.jsx)(Lt.Z, {
                                disableCurrencySelect: !0,
                                id: "join-pool-modal-amount",
                                checkMax: !0,
                                showMaxButton: !0,
                                value: R,
                                onUserInput: X,
                                onMax: function(e) {
                                    X(e)
                                },
                                currency: T,
                                label: u("Amount"),
                                warningMessage: ee
                            }), (0,
                            be.jsxs)(Et.Actions, {
                                children: [(0,
                                be.jsx)(Ne.zx, {
                                    isloading: x,
                                    onClick: Q,
                                    disabled: !Q,
                                    children: u("Approve")
                                }), (0,
                                be.jsx)(Ne.zx, {
                                    isloading: b,
                                    onClick: K,
                                    disabled: !K,
                                    children: u("Join")
                                })]
                            })]
                        }), (0,
                        be.jsx)(Et.Details, {
                            children: (0,
                            be.jsx)(gt, {
                                poolShare: $,
                                participantNumber: f
                            })
                        })]
                    })
                })
            })
        }
        Et.Content = Ae.default.div.withConfig({
            displayName: "JoinPoolModal__Content",
            componentId: "sc-rczbar-0"
        })(["width:450px;max-width:100%;@media ", "{width:354px;}"], Le.mq.down(Le.AV.sm)),
        Et.Data = Ae.default.div.withConfig({
            displayName: "JoinPoolModal__Data",
            componentId: "sc-rczbar-1"
        })(["padding:24px 16px;border-bottom:1px solid #e9eaeb;display:flex;flex-direction:column;& > * + *{margin-top:24px;}"]),
        Et.Actions = Ae.default.div.withConfig({
            displayName: "JoinPoolModal__Actions",
            componentId: "sc-rczbar-2"
        })(["display:flex;align-items:center;justify-content:space-between;"]),
        Et.Details = Ae.default.div.withConfig({
            displayName: "JoinPoolModal__Details",
            componentId: "sc-rczbar-3"
        })(["padding:16px;"]);
        var Zt, Rt = function(e) {
            var t = e.isLeftThePool
              , n = e.poolId
              , i = e.symbol
              , a = e.contractAddress
              , r = e.text
              , o = e.config
              , s = (0,
            Ne.dd)((0,
            be.jsx)(Et, {
                config: o,
                symbol: i,
                poolId: n,
                contractAddress: a
            }), !1)
              , u = (0,
            c.Z)(s, 1)[0];
            return (0,
            be.jsx)(Ne.zx, {
                style: {
                    width: "100%"
                },
                onClick: u,
                disabled: t,
                children: r
            })
        }, Vt = n(83501), Dt = n(64813), Wt = n(76803);
        !function(e) {
            e.START = "START",
            e.WITHDRAW = "WITHDRAW",
            e.CLAIM = "CLAIM",
            e.END = "END"
        }(Zt || (Zt = {}));
        var Ft, qt, Ht, Bt, zt, Gt, $t = function(e, t) {
            var n = (0,
            ve.useRef)(Zt.START)
              , i = (0,
            ve.useState)(!1)
              , o = i[0]
              , u = i[1]
              , d = (0,
            ve.useState)("")
              , c = d[0]
              , p = d[1]
              , m = (0,
            ve.useState)(!1)
              , f = m[0]
              , y = m[1]
              , h = (0,
            r.$G)().t
              , v = $e(e, t).isFull
              , x = Je(e, t).accountUser
              , g = x && (0,
            j.Vc)(x)
              , w = function(e) {
                var t = (0,
                ve.useState)(!1)
                  , n = t[0]
                  , i = t[1]
                  , a = te(e);
                return {
                    loading: n,
                    withdraw: (0,
                    ve.useCallback)(function() {
                        var e = (0,
                        s.Z)(l().mark((function e(t) {
                            var n;
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        i(!0),
                                        e.next = 4,
                                        M(a, t);
                                    case 4:
                                        return n = e.sent,
                                        e.next = 7,
                                        n.wait();
                                    case 7:
                                        return e.prev = 7,
                                        i(!1),
                                        e.finish(7);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, , 7, 10]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [a])
                }
            }(t)
              , b = w.withdraw
              , T = w.loading
              , k = function(e) {
                var t = (0,
                ve.useState)(!1)
                  , n = t[0]
                  , i = t[1]
                  , r = Ke(e)
                  , o = (0,
                a.useWeb3React)().account
                  , u = et(e).data;
                return {
                    loading: n,
                    claim: (0,
                    ve.useMemo)((function() {
                        return r && o && u && null !== e && void 0 !== e && e.withNft ? (0,
                        s.Z)(l().mark((function e() {
                            var t, n, a;
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0,
                                        i(!0),
                                        e.next = 4,
                                        N(r, o);
                                    case 4:
                                        if (t = e.sent,
                                        !(n = t.some((function(e, t) {
                                            return e.gt(0) && u[t]
                                        }
                                        )))) {
                                            e.next = 12;
                                            break
                                        }
                                        return e.next = 9,
                                        O(r);
                                    case 9:
                                        return a = e.sent,
                                        e.next = 12,
                                        a.wait();
                                    case 12:
                                        return e.abrupt("return", n);
                                    case 13:
                                        return e.prev = 13,
                                        i(!1),
                                        e.finish(13);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[0, , 13, 16]])
                        }
                        ))) : (0,
                        s.Z)(l().mark((function e() {
                            return l().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", !1);
                                    case 1:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))
                    }
                    ), [o, null === e || void 0 === e ? void 0 : e.withNft, u, r])
                }
            }(t)
              , _ = k.claim
              , P = k.loading
              , C = (0,
            St.Z)()
              , I = C.toastError
              , A = C.toastSuccess
              , L = qe(e, t, {
                revalidateOnMount: !1
            }).mutate
              , S = Fe(e, t, {
                revalidateOnMount: !1
            }).mutate
              , E = Ge(e, t, {
                revalidateOnMount: !1
            }).mutate
              , Z = (0,
            ve.useCallback)((0,
            s.Z)(l().mark((function t() {
                return l().wrap((function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            b(e);
                        case 2:
                            return A(h("Funds withdrawn!")),
                            t.next = 5,
                            L();
                        case 5:
                            return t.next = 7,
                            S();
                        case 7:
                            return t.next = 9,
                            E();
                        case 9:
                        case "end":
                            return t.stop()
                        }
                }
                ), t)
            }
            ))), [E, L, S, e, h, A, b])
              , R = (0,
            ve.useCallback)((0,
            s.Z)(l().mark((function e() {
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            _();
                        case 2:
                            if (!e.sent) {
                                e.next = 4;
                                break
                            }
                            A(h("NFT claimed!"));
                        case 4:
                            y(!0);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))), [_, h, A])
              , V = (0,
            ve.useMemo)((function() {
                return (0,
                s.Z)(l().mark((function e() {
                    var t, i;
                    return l().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0,
                                u(!0),
                                !v || g || T || n.current === Zt.CLAIM) {
                                    e.next = 7;
                                    break
                                }
                                return n.current = Zt.WITHDRAW,
                                e.next = 6,
                                Z();
                            case 6:
                                n.current = Zt.CLAIM;
                            case 7:
                                if (n.current !== Zt.CLAIM || P) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 10,
                                R();
                            case 10:
                                n.current = Zt.END,
                                e.next = 18;
                                break;
                            case 13:
                                e.prev = 13,
                                e.t0 = e.catch(0),
                                console.error(e.t0),
                                I((null === (t = e.t0.data) || void 0 === t ? void 0 : t.message) || e.t0.message),
                                p((null === (i = e.t0.data) || void 0 === i ? void 0 : i.message) || e.t0.message);
                            case 18:
                                return e.prev = 18,
                                u(!1),
                                e.finish(18);
                            case 21:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 13, 18, 21]])
                }
                )))
            }
            ), [P, v, g, R, Z, I, T])
              , D = function() {
                var e = (0,
                s.Z)(l().mark((function e() {
                    return l().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return u(!1),
                                p(""),
                                y(!1),
                                e.next = 5,
                                V();
                            case 5:
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
            return {
                onLeavePool: V,
                onRepeat: D,
                loading: o,
                error: c,
                success: f
            }
        };
        function Ut() {
            return (Ut = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Jt(e) {
            return ve.createElement("svg", Ut({
                width: 81,
                height: 80,
                viewBox: "0 0 81 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Ft || (Ft = ve.createElement("rect", {
                x: .5,
                width: 80,
                height: 80,
                rx: 40,
                fill: "#E6E6F6"
            })), qt || (qt = ve.createElement("path", {
                d: "M20.5 49c0-7.732 6.268-14 14-14h16c7.732 0 14 6.268 14 14s-6.268 14-14 14h-16c-7.732 0-14-6.268-14-14z",
                fill: "#DDDBF2"
            })), Ht || (Ht = ve.createElement("path", {
                d: "M47.5 31h1c8.837 0 16 7.163 16 16v0c0 8.837-7.163 16-16 16h-16c-8.837 0-16-7.163-16-16v0c0-8.837 7.163-16 16-16h1",
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), Bt || (Bt = ve.createElement("path", {
                opacity: .5,
                d: "M26.5 42.302l2.333-1.586a4.161 4.161 0 014.667 0 4.162 4.162 0 004.667 0 4.162 4.162 0 014.666 0 4.161 4.161 0 004.667 0 4.162 4.162 0 014.667 0l2.333 1.586M26.5 53l2.333-1.586a4.162 4.162 0 014.667 0 4.162 4.162 0 004.667 0 4.162 4.162 0 014.666 0 4.161 4.161 0 004.667 0 4.162 4.162 0 014.667 0l2.333 1.585m-28-5l2.333-1.585a4.162 4.162 0 014.667 0 4.162 4.162 0 004.667 0 4.162 4.162 0 014.666 0 4.161 4.161 0 004.667 0 4.162 4.162 0 014.667 0l2.333 1.585",
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), zt || (zt = ve.createElement("path", {
                d: "M39.215 29.292c0-.39-.355-.708-.792-.708-.907 0-1.726-.623-2.044-1.472-.255-.68-.133-1.457.347-2.001l5.152-5.841a.852.852 0 011.244 0l4.972 5.636a.96.96 0 01-.719 1.594h-.953A2.421 2.421 0 0044 28.922v3.685a2.393 2.393 0 01-4.785 0v-3.315z",
                fill: "#DDDBF2"
            })), Gt || (Gt = ve.createElement("path", {
                d: "M37.214 35v-7.708c0-.39-.354-.708-.792-.708h-3.129c-.66 0-1.03-.68-.622-1.145l7.207-8.17a.852.852 0 011.244 0l7.207 8.17c.409.464.039 1.145-.622 1.145h-3.13c-.437 0-.791.317-.791.708V35",
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var Yt = Ae.default.p.withConfig({
            displayName: "LeavePoolModalstyled__Label",
            componentId: "sc-1gil413-0"
        })(["", ""], it.Eb.medium)
          , Xt = Ae.default.p.withConfig({
            displayName: "LeavePoolModalstyled__Text",
            componentId: "sc-1gil413-1"
        })(["", " margin-top:24px;"], it.yG.medium)
          , Qt = Ae.default.p.withConfig({
            displayName: "LeavePoolModalstyled__TextLight",
            componentId: "sc-1gil413-2"
        })(["", " color:", ";"], it.A6.medium, nt.dw.basic)
          , Kt = (0,
        Ae.default)(Qt).withConfig({
            displayName: "LeavePoolModalstyled__TextCurrency",
            componentId: "sc-1gil413-3"
        })(["color:", ";"], nt.dw.limeGreen)
          , en = n(18284)
          , tn = Ae.default.div.withConfig({
            displayName: "LeavePoolModalContent__FlexCenter",
            componentId: "sc-5u2fcv-0"
        })(["display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;"])
          , nn = Ae.default.div.withConfig({
            displayName: "LeavePoolModalContent__GroupBtns",
            componentId: "sc-5u2fcv-1"
        })(["display:flex;width:100%;justify-content:space-between;gap:16px;button{width:100%;}"])
          , an = function(e) {
            var t = e.hideOn
              , n = e.onLeavePool
              , i = e.onDismiss
              , a = e.pickupFunds
              , o = e.symbol
              , s = (0,
            r.$G)().t;
            return (0,
            be.jsx)(en._, {
                hide: t,
                style: {
                    width: "100%"
                },
                children: (0,
                be.jsx)(tn, {
                    children: (0,
                    be.jsxs)("div", {
                        style: {
                            maxWidth: 243
                        },
                        children: [(0,
                        be.jsx)(Yt, {
                            style: {
                                marginBottom: 8
                            },
                            children: s("Are you sure you want to exit the pool?")
                        }), (0,
                        be.jsxs)(Qt, {
                            style: {
                                marginBottom: 24
                            },
                            children: [s("When you exit the pool, you will receive"), " ", (0,
                            be.jsxs)(Kt, {
                                as: "span",
                                children: [a, " ", o]
                            })]
                        }), (0,
                        be.jsxs)(nn, {
                            children: [(0,
                            be.jsx)(Ne.zx, {
                                variant: "secondary",
                                onClick: i,
                                children: s("Cancel")
                            }), (0,
                            be.jsx)(Ne.zx, {
                                onClick: n,
                                children: s("Approve")
                            })]
                        })]
                    })
                })
            })
        }
          , rn = function e(t) {
            var n = t.onDismiss
              , i = t.poolId
              , a = (t.contractAddress,
            t.symbol)
              , o = t.config
              , s = (0,
            r.$G)().t
              , u = $t(i, o)
              , l = u.onLeavePool
              , d = u.success
              , c = u.error
              , p = u.loading
              , m = u.onRepeat
              , f = Ge(i, o).data
              , y = f && (0,
            ht.dp)((0,
            ht.n9)((0,
            ht.Jd)(f)))
              , h = p || d || !!c;
            return (0,
            be.jsx)(Ne.u_, {
                title: "",
                onDismiss: n,
                withoutContentWrapper: !0,
                styleHeader: {
                    border: 0,
                    position: "absolute",
                    right: 0
                },
                children: (0,
                be.jsxs)(e.Wrapper, {
                    children: [p && (0,
                    be.jsx)(Wt.Z, {
                        withoutWrapper: !0,
                        withoutHeader: !0,
                        children: (0,
                        be.jsx)(Xt, {
                            children: s("Wait a moment please")
                        })
                    }), d && (0,
                    be.jsx)(e.Success, {
                        t: s
                    }), c && (0,
                    be.jsx)(Dt.Z, {
                        withoutWrapper: !0,
                        withoutHeader: !0,
                        onRepeat: m
                    }), (0,
                    be.jsx)(an, {
                        hideOn: h,
                        onLeavePool: l,
                        onDismiss: n,
                        symbol: a,
                        pickupFunds: y
                    })]
                })
            })
        };
        rn.Success = function(e) {
            var t = e.t;
            return (0,
            be.jsxs)(un, {
                children: [(0,
                be.jsx)(Jt, {}), (0,
                be.jsxs)(Xt, {
                    children: [" ", t("You left the pool")]
                })]
            })
        }
        ,
        rn.Wrapper = Ae.default.div.withConfig({
            displayName: "LeavePoolModal__Wrapper",
            componentId: "sc-1rq1wyz-0"
        })(["min-width:300px;min-height:288px;width:100%;display:flex;justify-content:center;align-items:center;margin-top:24px;", "{margin:0;}"], Vt.rN);
        var on, sn, un = Ae.default.div.withConfig({
            displayName: "LeavePoolModal__FlexCenter",
            componentId: "sc-1rq1wyz-1"
        })(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]), ln = rn, dn = (0,
        Ae.default)(Ne.zx).withConfig({
            displayName: "LeavePool__LeaveBtn",
            componentId: "sc-6a2ogk-0"
        })(["width:100%;"]), cn = function(e) {
            var t = e.poolId
              , n = e.config
              , i = e.isLeftThePool
              , a = e.contractAddress
              , o = e.symbol
              , s = (0,
            r.$G)().t
              , u = (0,
            Ne.dd)((0,
            be.jsx)(ln, {
                config: n,
                symbol: o,
                poolId: t,
                contractAddress: a
            }))
              , l = (0,
            c.Z)(u, 1)[0];
            return (0,
            be.jsx)(dn, {
                onClick: function() {
                    i || l()
                },
                children: s("Leave the pool")
            })
        }, pn = n(16062), mn = function(e) {
            var t = e.value
              , n = e.symbol
              , i = t && (0,
            ht.dp)((0,
            ht.n9)((0,
            ht.Jd)(t)));
            return (0,
            be.jsxs)(be.Fragment, {
                children: [i || "", " ", n || ""]
            })
        };
        function fn() {
            return (fn = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function yn(e) {
            return ve.createElement("svg", fn({
                width: 14,
                height: 14,
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), on || (on = ve.createElement("path", {
                d: "M5.25 8.75l3.5-3.5m-3.5 0l3.5 3.5",
                stroke: "#E7EDFF",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })), sn || (sn = ve.createElement("circle", {
                opacity: .5,
                cx: 7,
                cy: 7,
                r: 5.25,
                stroke: "#E7EDFF",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var hn, vn, xn, gn, wn;
        function bn() {
            return (bn = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function jn(e) {
            return ve.createElement("svg", bn({
                width: 18,
                height: 18,
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), hn || (hn = ve.createElement("path", {
                d: "M3.43 7.993v6.424c0 .736.598 1.333 1.334 1.333h8.472c.736 0 1.333-.597 1.333-1.333V7.993",
                stroke: "#1EA76D",
                strokeWidth: 1.067
            })), vn || (vn = ve.createElement("path", {
                opacity: .5,
                d: "M7.5 8.25v7.5m3-7.5v7.5",
                stroke: "#1EA76D",
                strokeWidth: 1.067
            })), xn || (xn = ve.createElement("mask", {
                id: "gift_svg__a",
                fill: "#fff"
            }, ve.createElement("rect", {
                x: 1.5,
                y: 5.25,
                width: 15,
                height: 3,
                rx: .667
            }))), gn || (gn = ve.createElement("rect", {
                x: 1.5,
                y: 5.25,
                width: 15,
                height: 3,
                rx: .667,
                stroke: "#1EA76D",
                strokeWidth: 2.133,
                mask: "url(#gift_svg__a)"
            })), wn || (wn = ve.createElement("path", {
                d: "M9 5.423c.23-.979.618-2.351 1.056-2.79a1.81 1.81 0 112.561 2.561c-.127.127-.333.25-.585.367-.203.093-1.936.182-2.182.265M9 5.423c-.23-.979-.618-2.351-1.056-2.79a1.81 1.81 0 00-2.561 2.561c.127.127.333.25.585.367.203.093 1.936.182 2.182.265",
                stroke: "#1EA76D",
                strokeWidth: 1.067
            })))
        }
        var Tn, kn;
        function _n() {
            return (_n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Pn(e) {
            return ve.createElement("svg", _n({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Tn || (Tn = ve.createElement("path", {
                opacity: .5,
                d: "M16 10V7a4 4 0 00-4-4v0a4 4 0 00-4 4v3",
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), kn || (kn = ve.createElement("rect", {
                x: 3.75,
                y: 10.75,
                width: 16.5,
                height: 10.5,
                rx: 2.25,
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var Cn, In, Mn;
        function On() {
            return (On = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Nn(e) {
            return ve.createElement("svg", On({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Cn || (Cn = ve.createElement("rect", {
                x: 3,
                y: 7.931,
                width: 18,
                height: 12.069,
                rx: 6.034,
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), In || (In = ve.createElement("path", {
                d: "M9.5 4v6.075M14.5 4v6.075M14.5 5.394h-5",
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), Mn || (Mn = ve.createElement("path", {
                opacity: .5,
                d: "M6 12.88l1-.638a1.88 1.88 0 012 0 1.88 1.88 0 002 0 1.88 1.88 0 012 0 1.88 1.88 0 002 0 1.88 1.88 0 012 0l1 .638M6 15.977l1-.638a1.88 1.88 0 012 0 1.88 1.88 0 002 0 1.88 1.88 0 012 0 1.88 1.88 0 002 0 1.88 1.88 0 012 0l1 .638",
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var An = Ae.default.div.withConfig({
            displayName: "CardGiftNft__NftWrapper",
            componentId: "sc-m9il6a-0"
        })(["display:flex;justify-content:center;align-items:center;svg{margin-right:8px;}"])
          , Ln = function(e) {
            var t = e.poolId;
            return function(e, t) {
                var n = tt(e, t).isLeftThePool
                  , i = Fe(t, e).data
                  , a = (0,
                ve.useMemo)((function() {
                    var e;
                    if (null === i || void 0 === i || !i.length || n)
                        return !1;
                    var t = null === i || void 0 === i ? void 0 : i.length
                      , a = null === i || void 0 === i || null === (e = i.filter((function(e) {
                        return (0,
                        j.Vc)(e)
                    }
                    ))) || void 0 === e ? void 0 : e.length;
                    return Number(t - a) <= 8
                }
                ), [n, i]);
                return !(null === e || void 0 === e || !e.withNft) && a
            }(e.config, t) ? (0,
            be.jsxs)(An, {
                children: [(0,
                be.jsx)(jn, {
                    style: {
                        minHeight: 18,
                        minWidth: 18
                    }
                }), (0,
                be.jsx)(rt, {})]
            }) : null
        }
          , Sn = Ae.default.div.withConfig({
            displayName: "CardFunds__Flex",
            componentId: "sc-p5x66w-0"
        })(["display:flex;justify-content:space-between;width:100%;margin-bottom:24px;", ""], (function(e) {
            return e.isLoss && (0,
            Ae.css)(["", ",", "{color:", ";}"], lt, ut, nt.dw.pureRed)
        }
        ))
          , En = function(e) {
            var t = e.poolId
              , n = e.contractAddress
              , i = e.symbol
              , a = e.config
              , o = (0,
            r.$G)().t
              , s = Ge(t, a).data
              , u = Ye(t, a)
              , l = u.countRewardProfit
              , d = u.isLoss
              , c = l && "".concat(d ? "" : "+").concat(null === l || void 0 === l ? void 0 : l.toFixed(), "%");
            return (0,
            be.jsxs)(Sn, {
                isLoss: d,
                children: [(0,
                be.jsxs)("div", {
                    children: [(0,
                    be.jsx)("div", {
                        children: (0,
                        be.jsx)(ot, {
                            children: o("Pick up funds")
                        })
                    }), (0,
                    be.jsxs)("div", {
                        children: [(0,
                        be.jsx)(lt, {
                            children: (0,
                            be.jsx)(mn, {
                                value: s,
                                symbol: i
                            })
                        }), (0,
                        be.jsx)(ut, {
                            children: c
                        })]
                    })]
                }), (0,
                be.jsx)(Ln, {
                    poolId: t,
                    contractAddress: n,
                    config: a
                })]
            })
        }
          , Zn = Ae.default.div.withConfig({
            displayName: "CardFooter__Wrapper",
            componentId: "sc-1gamicb-0"
        })(["background:", ";border-radius:6px;padding:8px;display:block;display:flex;flex-direction:column;height:100%;width:100%;align-items:center;", ";justify-content:", ";"], (function(e) {
            var t = e.active;
            return e.isLoss ? "#FFF6F2" : t ? "#eff9f5" : ""
        }
        ), (function(e) {
            return e.disabled && pt
        }
        ), (function(e) {
            return e.between ? "space-between" : "flex-end"
        }
        ))
          , Rn = function(e) {
            var t = e.poolId
              , n = e.status
              , o = e.isLeftThePool
              , s = e.contractAddress
              , u = e.type
              , l = e.symbol
              , d = e.config
              , c = (0,
            r.$G)().t
              , p = Ye(t, d)
              , m = p.isLoss
              , f = p.loading
              , y = (0,
            a.useWeb3React)().account
              , h = function(e) {
                var t = e.poolId
                  , n = ie(e.config)
                  , i = n.data
                  , a = n.isValidating;
                return {
                    isNewPool: null === i || void 0 === i ? void 0 : i.poolId.eq(t),
                    loading: a
                }
            }({
                poolId: t,
                config: d
            })
              , v = h.isNewPool
              , x = h.loading
              , g = $e(t, d)
              , w = g.isFull
              , b = g.loading
              , j = u === pe.NEW
              , T = x || b || f
              , k = !y
              , _ = n === i.NOT_JOIN
              , P = j && !w && v;
            return u === pe.ALL ? (0,
            be.jsx)(Zn, {}) : T ? (0,
            be.jsx)(Zn, {
                children: (0,
                be.jsx)(Ne.zx, {
                    isloading: !0,
                    style: {
                        width: "100%"
                    }
                })
            }) : k ? (0,
            be.jsx)(Zn, {
                disabled: o,
                isLoss: m,
                children: (0,
                be.jsx)(pn.Z, {
                    containerCss: {
                        width: "100%"
                    },
                    title: c("Connect Wallet")
                })
            }) : _ ? (0,
            be.jsx)(Zn, {
                children: (0,
                be.jsx)(Rt, {
                    text: c("Join the pool"),
                    poolId: t,
                    isLeftThePool: o,
                    contractAddress: s,
                    symbol: l,
                    config: d
                })
            }) : P ? (0,
            be.jsx)(Zn, {
                children: (0,
                be.jsx)(Rt, {
                    text: c("Add {{symbol}}s", {
                        symbol: l
                    }),
                    poolId: t,
                    isLeftThePool: o,
                    contractAddress: s,
                    symbol: l,
                    config: d
                })
            }) : (0,
            be.jsxs)(Zn, {
                active: !0,
                disabled: o,
                isLoss: m,
                between: !0,
                children: [(0,
                be.jsx)(En, {
                    poolId: t,
                    contractAddress: s,
                    symbol: l,
                    config: d
                }), !j && w && !v && (0,
                be.jsx)(cn, {
                    symbol: l,
                    poolId: t,
                    isLeftThePool: o,
                    contractAddress: s,
                    config: d
                })]
            })
        }
          , Vn = n(46445)
          , Dn = Ae.default.div.withConfig({
            displayName: "CardHeader__Header",
            componentId: "sc-1udbbei-0"
        })(["background-image:url(", ");height:80px;background-repeat:no-repeat;background-size:cover;padding:4px;background-position:center;"], (function(e) {
            return e.headerImg
        }
        ))
          , Wn = Ae.default.div.withConfig({
            displayName: "CardHeader__Status",
            componentId: "sc-1udbbei-1"
        })(["background:", ";backdrop-filter:blur(20px);width:fit-content;padding:3px 6px;border-radius:4px;", " display:flex;align-items:center;color:white;text-transform:uppercase;svg{margin-right:6px;}"], (function(e) {
            return e.error ? "rgba(255, 77, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"
        }
        ), it.Vz.regular)
          , Fn = function(e) {
            var t = e.headerImg
              , n = e.status
              , a = (0,
            r.$G)().t;
            return (0,
            be.jsxs)(Dn, {
                headerImg: t,
                children: [n === i.IN_POOL && (0,
                be.jsxs)(Wn, {
                    children: [(0,
                    be.jsx)(Vn.Z, {
                        width: 14,
                        height: 14
                    }), a("in the pool")]
                }), n === i.LEFT_THE_POOL && (0,
                be.jsxs)(Wn, {
                    error: !0,
                    children: [(0,
                    be.jsx)(yn, {
                        width: 14,
                        height: 14
                    }), a("left the pool")]
                })]
            })
        }
          , qn = function(e) {
            var t = e.withdrawPosition
              , n = $e(e.poolId, e.config)
              , i = n.isFull
              , a = n.loading
              , r = t && (0,
            ht.dp)((0,
            ht.Jd)(t))
              , o = i && r && Number(r) >= 30;
            return (0,
            be.jsx)("div", {
                children: !r || a ? (0,
                be.jsx)(Ne.Od, {
                    animation: "waves",
                    height: 24,
                    width: 41
                }) : (0,
                be.jsx)(ct, {
                    lose: o,
                    children: r
                })
            })
        }
          , Hn = function e(t) {
            var n = t.poolId
              , i = t.contractAddress
              , a = t.type
              , o = t.symbol
              , s = t.config
              , u = (0,
            r.$G)().t
              , l = tt(s, n)
              , c = l.poolStatus
              , p = l.isLeftThePool
              , m = l.withdrawPosition
              , f = l.poolAmount
              , y = l.accountUser
              , h = l.poolAccountLoading;
            return (0,
            be.jsxs)(e.Wrapper, {
                children: [(0,
                be.jsx)(Fn, {
                    headerImg: null === s || void 0 === s ? void 0 : s.poolsImage,
                    status: c
                }), (0,
                be.jsxs)(e.Content, {
                    children: [(0,
                    be.jsxs)(e.Row, {
                        disabled: p,
                        children: [(0,
                        be.jsx)(Ot, {
                            config: s
                        }), (0,
                        be.jsxs)(dt, {
                            children: [(0,
                            be.jsx)("div", {
                                children: (0,
                                be.jsx)(ot, {
                                    children: u("Users in the pool")
                                })
                            }), (0,
                            be.jsx)(qn, {
                                withdrawPosition: m,
                                poolId: n,
                                config: s
                            })]
                        }), (0,
                        be.jsxs)(dt, {
                            children: [(0,
                            be.jsx)("div", {
                                children: (0,
                                be.jsx)(ot, {
                                    children: u("Pool amount")
                                })
                            }), (0,
                            be.jsx)("div", {
                                children: f && o ? (0,
                                be.jsx)(st, {
                                    children: (0,
                                    be.jsx)(mn, {
                                        value: f,
                                        symbol: o
                                    })
                                }) : (0,
                                be.jsx)(Ne.Od, {
                                    animation: "waves",
                                    height: 20,
                                    width: 100
                                })
                            })]
                        }), a !== pe.ALL && (0,
                        be.jsxs)(dt, {
                            children: [(0,
                            be.jsx)("div", {
                                children: (0,
                                be.jsx)(ot, {
                                    children: u("Your contribution")
                                })
                            }), (0,
                            be.jsx)("div", {
                                children: null !== y && void 0 !== y && y.balance && o || !h ? (0,
                                be.jsx)(st, {
                                    children: (0,
                                    be.jsx)(mn, {
                                        value: (null === y || void 0 === y ? void 0 : y.balance) || d.O$.from(0),
                                        symbol: o
                                    })
                                }) : (0,
                                be.jsx)(Ne.Od, {
                                    animation: "waves",
                                    height: 20,
                                    width: 100
                                })
                            })]
                        }), (0,
                        be.jsx)(yt, {
                            config: s,
                            poolId: n,
                            contractAddress: i,
                            symbol: o,
                            type: a
                        })]
                    }), (0,
                    be.jsx)(Rn, {
                        contractAddress: i,
                        isLeftThePool: p,
                        poolId: n,
                        status: c,
                        type: a,
                        symbol: o,
                        config: s
                    }), (0,
                    be.jsx)(e.Bottom, {
                        children: (0,
                        be.jsx)(Pt, {
                            config: s,
                            poolId: n,
                            contractAddress: i,
                            symbol: o,
                            type: a
                        })
                    })]
                })]
            })
        };
        Hn.Wrapper = Ae.default.div.withConfig({
            displayName: "Card__Wrapper",
            componentId: "sc-1mc7sty-0"
        })(["overflow:hidden;background:#ffffff;border-radius:6px;width:100%;height:100%;display:flex;flex-direction:column;@media ", "{max-width:100%;}"], Le.mq.down(Le.AV.sm)),
        Hn.Content = Ae.default.div.withConfig({
            displayName: "Card__Content",
            componentId: "sc-1mc7sty-1"
        })(["padding:8px 8px 24px 8px;height:100%;display:flex;flex-direction:column;", ":last-of-type{border-bottom:1px solid transparent;padding:0px;}"], dt),
        Hn.Row = Ae.default.div.withConfig({
            displayName: "Card__Row",
            componentId: "sc-1mc7sty-2"
        })(["padding:8px 8px 0px 8px;", ";"], (function(e) {
            return e.disabled && pt
        }
        )),
        Hn.Bottom = (0,
        Ae.default)(Hn.Row).withConfig({
            displayName: "Card__Bottom",
            componentId: "sc-1mc7sty-3"
        })(["padding-top:16px;display:flex;height:fit-content;align-items:end;"]);
        var Bn = Hn
          , zn = n(98913)
          , Gn = n.n(zn)
          , $n = n(92691)
          , Un = n(14190)
          , Jn = ["items"];
        function Yn(e, t) {
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
        function Xn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Yn(Object(n), !0).forEach((function(t) {
                    (0,
                    Y.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yn(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function Qn(e) {
            var t = e.data
              , n = e.pageLimit
              , i = void 0 === n ? 8 : n
              , a = e.type
              , r = Oe((function(e) {
                return e.query
            }
            ))
              , o = !r || !(null !== r && void 0 !== r && r.length)
              , s = null === t || void 0 === t ? void 0 : t.filter((function(e) {
                var t;
                return !!o || (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase().includes(null === r || void 0 === r ? void 0 : r.toLowerCase()))
            }
            ))
              , u = (0,
            Un.u)({
                items: s || [],
                pageLimit: i
            })
              , l = u.items
              , d = (0,
            Pe.Z)(u, Jn);
            return (0,
            be.jsxs)(Qn.Root, {
                children: [(0,
                be.jsx)(Qn.Pools, {
                    children: null !== l && void 0 !== l && l.length ? l.map((function(e, t) {
                        return (0,
                        be.jsx)(Bn, Xn(Xn({}, e), {}, {
                            type: a
                        }), null === t || void 0 === t ? void 0 : t.toString())
                    }
                    )) : o && Gn()(4, (function(e) {
                        return (0,
                        be.jsx)(Qn.Skeleton, {
                            animation: "waves",
                            height: 400
                        }, e)
                    }
                    ))
                }), (0,
                be.jsx)(Qn.Paginate, {
                    children: (0,
                    be.jsx)($n.Z, Xn({}, d))
                })]
            })
        }
        Qn.Pools = Ae.default.div.withConfig({
            displayName: "ShpPools__Pools",
            componentId: "sc-j4xx3w-0"
        })(["display:grid;align-items:flex-start;grid-template-columns:repeat(auto-fit,378px);gap:32px 30px;"]),
        Qn.Root = Ae.default.div.withConfig({
            displayName: "ShpPools__Root",
            componentId: "sc-j4xx3w-1"
        })(["@media ", "{", "{grid-template-columns:258px 258px 258px 258px;justify-content:space-between;}}@media ", "{", "{grid-template-columns:236px 236px 236px;gap:32px 16px;}}@media ", "{", "{grid-template-columns:230px 230px 230px;gap:16px 16px;}}@media ", "{padding-top:24px;", "{display:flex;flex-direction:column;align-items:center;justify-content:center;grid-template-columns:100%;width:100%;}}"], Le.mq.down(Le.AV.xl), Qn.Pools, Le.mq.down(Le.AV.lg), Qn.Pools, Le.mq.down(Le.AV.md), Qn.Pools, Le.mq.down(Le.AV.sm), Qn.Pools),
        Qn.Skeleton = (0,
        Ae.default)(Ne.Od).withConfig({
            displayName: "ShpPools__Skeleton",
            componentId: "sc-j4xx3w-2"
        })(["@media ", "{max-width:100%;width:inherit;}"], Le.mq.down(Le.AV.sm)),
        Qn.Paginate = Ae.default.div.withConfig({
            displayName: "ShpPools__Paginate",
            componentId: "sc-j4xx3w-3"
        })(["", "{justify-content:flex-end;@media ", "{justify-content:space-between;}}"], $n.Z.Root, Le.mq.down(Le.AV.sm));
        var Kn, ei, ti = n(63114), ni = n(58551), ii = n(23075);
        function ai() {
            return (ai = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ri(e) {
            return ve.createElement("svg", ai({
                width: 25,
                height: 24,
                viewBox: "0 0 25 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), Kn || (Kn = ve.createElement("path", {
                opacity: .5,
                d: "M12.5 8.327v7.326M16.166 11.99H8.833",
                stroke: "#fff",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })), ei || (ei = ve.createElement("path", {
                clipRule: "evenodd",
                d: "M17.186 2H7.814C4.548 2 2.5 4.312 2.5 7.585v8.83C2.5 19.688 4.538 22 7.814 22h9.372c3.276 0 5.314-2.312 5.314-5.585v-8.83C22.5 4.312 20.462 2 17.186 2z",
                stroke: "#fff",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var oi, si, ui, li, di, ci;
        function pi() {
            return (pi = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function mi(e) {
            return ve.createElement("svg", pi({
                width: 80,
                height: 80,
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), oi || (oi = ve.createElement("rect", {
                width: 80,
                height: 80,
                rx: 40,
                fill: "#FF4D00",
                fillOpacity: .1
            })), si || (si = ve.createElement("path", {
                d: "M16.787 31.76a9.25 9.25 0 019.25-9.25h26a9.25 9.25 0 019.25 9.25v18a9.25 9.25 0 01-9.25 9.25h-26a9.25 9.25 0 01-9.25-9.25v-18z",
                stroke: "#FF4D00",
                strokeWidth: 1.5
            })), ui || (ui = ve.createElement("path", {
                d: "M16.787 35.76a9.25 9.25 0 019.25-9.25h28a9.25 9.25 0 019.25 9.25v18a9.25 9.25 0 01-9.25 9.25h-28a9.25 9.25 0 01-9.25-9.25v-18z",
                fill: "#FFEDE5",
                stroke: "#FF4D00",
                strokeWidth: 1.5
            })), li || (li = ve.createElement("path", {
                d: "M20.696 38.047c0-4.75 3.907-8.6 8.726-8.6h24.431c4.82 0 8.726 3.85 8.726 8.6v15.48c0 4.748-3.907 8.599-8.726 8.599H29.422c-4.82 0-8.726-3.85-8.726-8.6V38.047z",
                fill: "#FCDCCE"
            })), di || (di = ve.createElement("path", {
                d: "M62.58 39.76h-15a5 5 0 00-5 5v0a5 5 0 005 5h15",
                stroke: "#FF4D00",
                strokeWidth: 1.5
            })), ci || (ci = ve.createElement("circle", {
                cx: 47.579,
                cy: 44.759,
                r: 2.25,
                stroke: "#FF4D00",
                strokeWidth: 1.5
            })))
        }
        function fi() {
            var e = (0,
            r.$G)().t
              , t = (0,
            ni.Z)()
              , n = t.login
              , i = t.logout
              , a = (0,
            ii.Z)(n, i).onPresentConnectModal;
            return (0,
            be.jsxs)(fi.Root, {
                children: [(0,
                be.jsx)(mi, {}), (0,
                be.jsx)(fi.Text, {
                    children: e("Please connect to your wallet first")
                }), (0,
                be.jsxs)(fi.Button, {
                    onClick: a,
                    children: [(0,
                    be.jsx)(ri, {}), e("Connect Wallet")]
                })]
            })
        }
        fi.Button = (0,
        Ae.default)(Ne.zx).withConfig({
            displayName: "ShpConnectWallet__Button",
            componentId: "sc-1ynnguh-0"
        })(["letter-spacing:1px;& > svg{margin-right:16px;}"]),
        fi.Text = Ae.default.div.withConfig({
            displayName: "ShpConnectWallet__Text",
            componentId: "sc-1ynnguh-1"
        })(["", " text-align:center;color:#0b1359;margin:16px 0 24px;"], Le.cp.h6),
        fi.Root = (0,
        Ae.default)(Le.Zb).withConfig({
            displayName: "ShpConnectWallet__Root",
            componentId: "sc-1ynnguh-2"
        })(["padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:438px;@media ", "{min-height:320px;", "{", "}}"], Le.mq.down(Le.AV.sm), fi.Text, Le.cp.oN.medium);
        var yi = ["status"]
          , hi = function() {
            var e = (0,
            s.Z)(l().mark((function e(t, n) {
                var i, a, r, o, s, u, d;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            ne(t);
                        case 2:
                            return i = e.sent,
                            a = i.poolId,
                            r = i.token,
                            o = a,
                            s = (0,
                            j.kc)(o).filter((function(e) {
                                return o !== e
                            }
                            )),
                            e.next = 9,
                            C(t.address, s, n);
                        case 9:
                            return u = e.sent,
                            d = null === u || void 0 === u ? void 0 : u.map((function(e) {
                                var n = e.poolId
                                  , i = e.status;
                                return {
                                    config: t,
                                    contractAddress: t.address,
                                    symbol: r.symbol,
                                    poolId: n,
                                    status: i
                                }
                            }
                            )),
                            e.abrupt("return", d);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t, n) {
                return e.apply(this, arguments)
            }
        }();
        function vi() {
            var e = (0,
            a.useWeb3React)().account
              , t = (0,
            r.$G)().t
              , n = function() {
                var e, t = (0,
                B.a)().account, n = he().config, a = null === (e = [null === n || void 0 === n ? void 0 : n.alium, null === n || void 0 === n ? void 0 : n.oldRinance, null === n || void 0 === n ? void 0 : n.ethShp]) || void 0 === e ? void 0 : e.filter((function(e) {
                    return !(null === e || void 0 === e || !e.address)
                }
                )), r = ge(a), u = (0,
                W.ZP)(r && t && (null === a || void 0 === a ? void 0 : a.length) && "shp/useYourPools/".concat(r, "/").concat(t), (0,
                s.Z)(l().mark((function e() {
                    return l().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Promise.all(a.map((function(e) {
                                    return hi(e, t)
                                }
                                ))));
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))), d = u.data, c = u.isValidating, p = u.error;
                return {
                    data: (0,
                    ve.useMemo)((function() {
                        var e;
                        return (null === d || void 0 === d ? void 0 : d.length) && (null === (e = xe.apply(void 0, (0,
                        o.Z)(d))) || void 0 === e ? void 0 : e.sort((function(e) {
                            return e.status === i.IN_POOL ? -1 : e.status === i.LEFT_THE_POOL ? 0 : 1
                        }
                        )).map((function(e) {
                            return e.status,
                            (0,
                            Pe.Z)(e, yi)
                        }
                        )))
                    }
                    ), [d]),
                    loading: c,
                    error: p
                }
            }()
              , u = n.data
              , d = n.loading
              , c = n.error;
            return e ? !d && 0 === (null === u || void 0 === u ? void 0 : u.length) || c ? (0,
            be.jsx)(ti.Z, {
                text: t("You don't have active pools yet")
            }) : (0,
            be.jsx)(Qn, {
                data: u,
                type: pe.YOUR
            }) : (0,
            be.jsx)(Qn.Root, {
                children: (0,
                be.jsx)(fi, {})
            })
        }
        var xi = n(92911)
          , gi = n(96015)
          , wi = n(58132);
        function bi(e) {
            var t = e.value
              , n = e.tokenSymbol
              , i = e.text
              , a = e.className;
            return (0,
            be.jsxs)(bi.Root, {
                className: a,
                children: [i || "", t && (0,
                ht.dp)(t), n && (0,
                be.jsxs)(bi.TokenSymbol, {
                    children: [" ", n]
                })]
            })
        }
        function ji(e) {
            var t = e.title
              , n = e.icon
              , i = e.content
              , a = e.className;
            return (0,
            be.jsxs)(ji.Root, {
                className: a,
                children: [(0,
                be.jsxs)(ji.Header, {
                    children: [(0,
                    be.jsx)(ji.Top, {
                        children: n
                    }), (0,
                    be.jsx)("div", {
                        children: t
                    })]
                }), (0,
                be.jsx)(ji.Content, {
                    children: i
                })]
            })
        }
        bi.Root = Ae.default.div.withConfig({
            displayName: "FormattedValue__Root",
            componentId: "sc-fdcpdb-0"
        })([""]),
        bi.TokenSymbol = Ae.default.span.withConfig({
            displayName: "FormattedValue__TokenSymbol",
            componentId: "sc-fdcpdb-1"
        })(["", ""], Le.cp.A6.medium),
        ji.Header = Ae.default.div.withConfig({
            displayName: "StatsCard__Header",
            componentId: "sc-1bs9vj5-0"
        })(["display:flex;flex-direction:column;align-items:baseline;"]),
        ji.Top = Ae.default.div.withConfig({
            displayName: "StatsCard__Top",
            componentId: "sc-1bs9vj5-1"
        })(["background:rgba(108,93,211,0.1);border-radius:16px;min-height:48px;min-width:48px;display:flex;justify-content:center;align-items:center;margin-bottom:16px;"]),
        ji.Content = Ae.default.div.withConfig({
            displayName: "StatsCard__Content",
            componentId: "sc-1bs9vj5-2"
        })(["flex:1;margin-top:4px;"]),
        ji.Value = (0,
        Ae.default)(bi).withConfig({
            displayName: "StatsCard__Value",
            componentId: "sc-1bs9vj5-3"
        })(["", " color:#6c5dd3;"], Le.cp.Eb.regular),
        ji.Root = Ae.default.div.withConfig({
            displayName: "StatsCard__Root",
            componentId: "sc-1bs9vj5-4"
        })(["display:flex;flex-direction:column;@media ", "{&,", "{flex-direction:row;align-items:center;}", "{margin:0;margin-right:8px;min-height:40px;min-width:40px;}", "{display:flex;justify-content:flex-end;}", "{", "}justify-content:space-between;width:100%;padding:0;padding-bottom:8px;}"], Le.mq.down(Le.AV.sm), ji.Header, ji.Top, ji.Content, ji.Value, Le.cp.A6.medium);
        var Ti = Ae.default.div.withConfig({
            displayName: "Title",
            componentId: "sc-1osm3lq-0"
        })(["", " color:#8990a5;"], Le.cp.YH.miniheader);
        function ki() {
            var e, t = (0,
            r.$G)().t, n = (0,
            xi.Ir)().data, i = (0,
            gi.E)(null === n || void 0 === n || null === (e = n.aliumTvl) || void 0 === e ? void 0 : e.staking, "date", "totalLiquidityUSD").lastData;
            return (0,
            be.jsx)(be.Fragment, {
                children: (0,
                be.jsx)(ji, {
                    icon: (0,
                    be.jsx)(Pn, {}),
                    title: (0,
                    be.jsx)(Ti, {
                        children: t("Locked in pools")
                    }),
                    content: null !== i && void 0 !== i && i.value ? (0,
                    be.jsx)(ji.Value, {
                        text: (0,
                        wi.I)(null === i || void 0 === i ? void 0 : i.value)
                    }) : (0,
                    be.jsx)(Ne.Od, {
                        height: "100%"
                    })
                })
            })
        }
        var _i = function() {
            var e, t = he().config, n = null === (e = [null === t || void 0 === t ? void 0 : t.alium, null === t || void 0 === t ? void 0 : t.oldRinance, null === t || void 0 === t ? void 0 : t.ethShp]) || void 0 === e ? void 0 : e.filter((function(e) {
                return !(null === e || void 0 === e || !e.address)
            }
            )), i = ge(n), a = (0,
            W.ZP)(i && "shp/useOpenedPools/".concat(i), (0,
            s.Z)(l().mark((function e() {
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.abrupt("return", Promise.all(n.map((function(e) {
                                return Pi(e)
                            }
                            ))));
                        case 1:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )))).data;
            return (0,
            ve.useMemo)((function() {
                return (null === a || void 0 === a ? void 0 : a.length) && Ci.apply(void 0, (0,
                o.Z)(a))
            }
            ), [a])
        }
          , Pi = function() {
            var e = (0,
            s.Z)(l().mark((function e(t) {
                var n, i, a, r, o;
                return l().wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            re(t);
                        case 2:
                            return n = e.sent,
                            e.next = 5,
                            ne(t);
                        case 5:
                            return i = e.sent,
                            a = null === i || void 0 === i ? void 0 : i.poolId,
                            r = (0,
                            j.kc)(a),
                            o = d.O$.from(0),
                            e.next = 11,
                            P(null === t || void 0 === t ? void 0 : t.address, r);
                        case 11:
                            return e.sent.forEach((function(e) {
                                e.leftTracker.lt(n) && (o = o.add(1))
                            }
                            )),
                            e.abrupt("return", o);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            )));
            return function(t) {
                return e.apply(this, arguments)
            }
        }();
        function Ci() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return t.reduce((function(e, t) {
                return t && (e = d.O$.from(e || "0").add(t)),
                e
            }
            ), null)
        }
        function Ii() {
            var e = (0,
            r.$G)().t
              , t = _i();
            return (0,
            be.jsx)(ji, {
                icon: (0,
                be.jsx)(Nn, {}),
                title: (0,
                be.jsx)(Ti, {
                    children: e("Filled Pools")
                }),
                content: t ? (0,
                be.jsx)(ji.Value, {
                    value: (0,
                    ht.Jd)(t)
                }) : (0,
                be.jsx)(Ne.Od, {
                    height: "100%"
                })
            })
        }
        var Mi = function() {
            return (0,
            be.jsxs)(be.Fragment, {
                children: [(0,
                be.jsx)(Ii, {}), (0,
                be.jsx)(ki, {})]
            })
        }
          , Oi = n(94829)
          , Ni = function e(t) {
            var n = t.onToggle
              , i = (0,
            r.$G)().t
              , a = Oe((function(e) {
                return e.query
            }
            ))
              , o = Oe((function(e) {
                return e.setQuery
            }
            ))
              , s = (0,
            Oi.Z)(Le.mq.down(Le.AV.sm))
              , u = (0,
            Oi.Z)(Le.mq.down(Le.AV.lg));
            return (0,
            be.jsx)(e.Root, {
                children: (0,
                be.jsx)(Ne.Uy, {
                    value: a,
                    setValue: o,
                    placeholder: i("Search Pool"),
                    onToggle: n,
                    isOpenable: !s && u
                })
            })
        };
        Ni.Root = Ae.default.div.withConfig({
            displayName: "ui__Root",
            componentId: "sc-vlq7ut-0"
        })(["display:flex;justify-content:flex-end;margin-right:16px;height:48px;position:relative;width:100%;@media ", "{margin-right:0;}", "{max-width:240px;@media ", "{max-width:none;}}@media ", "{width:100%;margin-bottom:8px;", "{max-width:none;margin:0;width:100%;right:0;}}"], Le.mq.down(Le.AV.lg), Ne.Uy.SearchWrapper, Le.mq.down(Le.AV.lg), Le.mq.down(Le.AV.sm), Ne.Uy.SearchWrapper);
        var Ai = Ni
          , Li = n(41664)
          , Si = n(11163)
          , Ei = n(4536)
          , Zi = Ae.default.div.withConfig({
            displayName: "HeaderTabPanel__Container",
            componentId: "sc-nw88db-0"
        })(["width:100%;position:relative;padding:16px;background:#ffffff;box-shadow:0px 6px 8px rgba(220,224,244,0.56);border-radius:6px;@media ", "{margin-left:0px;margin-right:0px;}margin-bottom:32px;"], Le.mq.down(Le.AV.sm))
          , Ri = Ae.default.div.withConfig({
            displayName: "HeaderTabPanel__Wrapper",
            componentId: "sc-nw88db-1"
        })(["width:100%;display:flex;align-items:center;@media ", "{flex-direction:column;position:relative;overflow:hidden;}"], Le.mq.down(Le.AV.sm))
          , Vi = Ae.default.div.withConfig({
            displayName: "HeaderTabPanel__LeftPart",
            componentId: "sc-nw88db-2"
        })(["display:flex;align-items:center;align-self:flex-start;@media ", "{", "}@media ", "{margin-bottom:16px;display:grid !important;grid-template-columns:repeat(3,100px);overflow-x:scroll;width:100%;&::-webkit-scrollbar{display:none;}}"], Le.mq.down(Le.AV.lg), (function(e) {
            return e.panelActive && "display: none;"
        }
        ), Le.mq.down(Le.AV.sm))
          , Di = Ae.default.div.withConfig({
            displayName: "HeaderTabPanel__RightPart",
            componentId: "sc-nw88db-3"
        })(["display:flex;flex:1;align-items:center;align-self:flex-end;justify-content:end;@media ", "{flex-direction:column;width:100%;}"], Le.mq.down(Le.AV.sm))
          , Wi = (0,
        Ae.default)(Ne.zx).withConfig({
            displayName: "HeaderTabPanel__Tab",
            componentId: "sc-nw88db-4"
        })(["width:fit-content;height:48px;max-width:123px;white-space:pre;@media ", "{max-width:110px;}@media ", "{max-width:none;width:100%;}"], Le.mq.down(Le.AV.lg), Le.mq.down(Le.AV.sm))
          , Fi = (0,
        Ae.default)(Ne.zx).withConfig({
            displayName: "HeaderTabPanel__ShpYourTokenBtn",
            componentId: "sc-nw88db-5"
        })(["min-width:214px;@media ", "{width:100%;}"], Le.mq.down(Le.AV.sm))
          , qi = function() {
            var e = (0,
            ve.useState)(!1)
              , t = e[0]
              , n = e[1]
              , i = (0,
            r.$G)().t
              , a = (0,
            Si.useRouter)()
              , o = (0,
            ve.useMemo)((function() {
                return [{
                    title: i("New Pools"),
                    href: Ei.Z.shp
                }, {
                    title: i("Your Pools"),
                    href: Ei.Z.shpYour
                }, {
                    title: i("All Pools"),
                    href: Ei.Z.shpAllPools
                }]
            }
            ), [i]);
            return (0,
            be.jsx)(Zi, {
                children: (0,
                be.jsxs)(Ri, {
                    children: [(0,
                    be.jsx)(Vi, {
                        panelActive: t,
                        children: o.map((function(e) {
                            return (0,
                            be.jsx)(Li.default, {
                                href: e.href,
                                passHref: !0,
                                children: (0,
                                be.jsx)(Wi, {
                                    forwardedAs: "a",
                                    variant: e.href === a.pathname ? "tertiarySecondary" : "clearText",
                                    children: e.title
                                })
                            }, e.href)
                        }
                        ))
                    }), (0,
                    be.jsxs)(Di, {
                        children: [(0,
                        be.jsx)(Ai, {
                            onToggle: function(e) {
                                n(e)
                            }
                        }), (0,
                        be.jsx)(Fi, {
                            children: (0,
                            be.jsx)("a", {
                                href: "https://shp.alium.finance/",
                                target: "_blank",
                                children: i("Get SHP for your token")
                            })
                        })]
                    })]
                })
            })
        };
        function Hi() {
            var e = (0,
            r.$G)().t;
            return (0,
            be.jsxs)(be.Fragment, {
                children: [(0,
                be.jsx)(Hi.Root, {
                    children: (0,
                    be.jsxs)(Hi.Main, {
                        children: [(0,
                        be.jsx)(Hi.Title, {
                            children: e("Strong Holders Pool")
                        }), (0,
                        be.jsx)(Hi.Cards, {
                            children: (0,
                            be.jsx)(Mi, {})
                        })]
                    })
                }), (0,
                be.jsx)(qi, {})]
            })
        }
        Hi.Main = Ae.default.div.withConfig({
            displayName: "ShpHeader__Main",
            componentId: "sc-cnyk4i-0"
        })(["display:flex;flex-direction:column;align-items:flex-start;flex:1;"]),
        Hi.Title = Ae.default.h2.withConfig({
            displayName: "ShpHeader__Title",
            componentId: "sc-cnyk4i-1"
        })(["", " color:#0b1359;margin-bottom:32px;"], Le.cp.h2),
        Hi.Cards = Ae.default.div.withConfig({
            displayName: "ShpHeader__Cards",
            componentId: "sc-cnyk4i-2"
        })(["display:flex;margin-bottom:32px;", ":not(:last-child){margin-right:56px;}@media ", "{margin-bottom:24px;", ":not(:last-child){margin-right:16px;}}@media ", "{flex-direction:column;", ":not(:last-child){margin-right:0px;}}"], ji.Root, Le.mq.down(Le.AV.md), ji.Root, Le.mq.down(Le.AV.sm), ji.Root),
        Hi.Root = Ae.default.div.withConfig({
            displayName: "ShpHeader__Root",
            componentId: "sc-cnyk4i-3"
        })(["display:flex;align-items:center;@media ", "{", "{", "}}@media ", "{", "{", " margin-bottom:24px;}}@media ", "{flex-direction:column-reverse;align-items:inherit;", "{margin:0;margin-left:10px;text-align:right;}", "{align-items:stretch;}}"], Le.mq.down(Le.AV.lg), Hi.Title, Le.cp.h3, Le.mq.down(Le.AV.md), Hi.Title, Le.cp.h5, Le.mq.down(Le.AV.sm), ji.Content, Hi.Main);
        var Bi = n(13360)
          , zi = n(95218)
          , Gi = function e(t) {
            var n = t.chains
              , i = (0,
            r.$G)().t
              , a = (0,
            H.x)().updateChainId
              , o = (0,
            ue.he)();
            return (0,
            be.jsx)(e.Root, {
                children: null === n || void 0 === n ? void 0 : n.map((function(e) {
                    var t = o.find((function(t) {
                        return t.chainId === e
                    }
                    ))
                      , n = null === t || void 0 === t ? void 0 : t.icon;
                    return (0,
                    be.jsxs)(zi.Z.Button, {
                        onClick: function() {
                            a(e)
                        },
                        children: [n && (0,
                        be.jsx)(n, {}), (0,
                        be.jsxs)("p", {
                            className: "text",
                            children: [i("Connect to"), " ", null === t || void 0 === t ? void 0 : t.title]
                        })]
                    }, e)
                }
                ))
            })
        };
        Gi.Root = Ae.default.div.withConfig({
            displayName: "AvailableChainShp__Root",
            componentId: "sc-tgb06j-0"
        })(["display:flex;gap:10px;flex-direction:column;"]);
        var $i = function(e) {
            var t = e.children
              , n = (0,
            r.$G)().t
              , i = function() {
                var e, t = null === (e = (0,
                ue.he)()) || void 0 === e ? void 0 : e.map((function(e) {
                    return e.chainId
                }
                ));
                return Object.keys(ye).map((function(e) {
                    return t.includes(Number(e)) ? Number(e) : null
                }
                )).filter((function(e) {
                    return !!e
                }
                ))
            }();
            return (0,
            be.jsx)(zi.Z, {
                title: n("Strong Holders Pool"),
                multipleChains: i,
                withBtn: !1,
                content: (0,
                be.jsx)(Gi, {
                    chains: i
                }),
                children: t
            })
        };
        function Ui() {
            var e = (0,
            Si.useRouter)();
            return (0,
            be.jsxs)($i, {
                children: [(0,
                be.jsx)(Ui.Overlay, {
                    children: (0,
                    be.jsx)("img", {
                        src: "/images/shp/header-bg.png"
                    })
                }), (0,
                be.jsxs)(Ui.Root, {
                    children: [(0,
                    be.jsx)(Hi, {}), e.pathname === Ei.Z.shp && (0,
                    be.jsx)(_e, {}), e.pathname === Ei.Z.shpYour && (0,
                    be.jsx)(vi, {}), e.pathname === Ei.Z.shpAllPools && (0,
                    be.jsx)(je, {})]
                })]
            })
        }
        Ui.Root = Ae.default.div.withConfig({
            displayName: "StrongHoldersPool__Root",
            componentId: "sc-19naprv-0"
        })(["margin:0 auto;box-sizing:content-box;padding:40px 33px 40px 29px;max-width:1602px;min-height:calc(100vh - ", "px);position:relative;@media ", "{padding:40px 24px;}@media ", "{padding:32px 24px 40px 24px;}@media ", "{padding:10px;}"], Bi.d, Le.mq.down(Le.AV.lg), Le.mq.down(Le.AV.md), Le.mq.down(Le.AV.sm)),
        Ui.Overlay = Ae.default.div.withConfig({
            displayName: "StrongHoldersPool__Overlay",
            componentId: "sc-19naprv-1"
        })(["position:absolute;right:33px;z-index:-1;display:flex;justify-content:flex-end;width:50%;img{width:100%;max-height:304px;object-fit:contain;}@media ", "{right:24px;img{max-width:361px;max-height:200px;}}@media ", "{width:100%;img{max-width:345px;max-height:192px;}}@media ", "{position:relative;right:0;display:flex;justify-content:center;align-items:center;margin-bottom:16px;img{max-width:95%;}}"], Le.mq.down(Le.AV.lg), Le.mq.down(Le.AV.md), Le.mq.down(Le.AV.sm));
        var Ji = !0
    },
    18284: function(e, t, n) {
        n.d(t, {
            _: function() {
                return o
            }
        });
        n(67294);
        var i = n(93350)
          , a = n(85893)
          , r = i.default.div.withConfig({
            displayName: "ShadowComponent__Shadow",
            componentId: "sc-vuqiok-0"
        })(["", ""], (function(e) {
            return e.hide && "display: none;"
        }
        ))
          , o = function(e) {
            var t = e.hide
              , n = e.children
              , i = e.style;
            return (0,
            a.jsx)(r, {
                hide: t,
                className: "shadow__component",
                style: i || {},
                children: n
            })
        }
    },
    14190: function(e, t, n) {
        n.d(t, {
            u: function() {
                return r
            }
        });
        var i = n(96486)
          , a = n(67294);
        function r(e) {
            var t = e.items
              , n = e.pageLimit
              , r = void 0 === n ? 30 : n
              , o = e.maxPages
              , s = (0,
            a.useMemo)((function() {
                return t
            }
            ), [t])
              , u = (0,
            a.useCallback)((function(e) {
                var t = (e - 1) * r;
                return null !== s && void 0 !== s && s.length ? s.slice(t, t + r) : []
            }
            ), [s, r])
              , l = (0,
            a.useState)(1)
              , d = l[0]
              , c = l[1]
              , p = (0,
            a.useState)(u(1))
              , m = p[0]
              , f = p[1];
            (0,
            a.useEffect)((function() {
                var e = u(d);
                m && e && !(0,
                i.isEqual)(m, e) && f(e)
            }
            ), [s, m, d, u]);
            var y = (null === s || void 0 === s ? void 0 : s.length) || 0;
            return {
                totalPages: o || Math.ceil(y / r),
                currentPage: d,
                onPageChanged: function(e) {
                    c(e),
                    f(u(e))
                },
                items: m
            }
        }
    },
    92691: function(e, t, n) {
        var i = n(41810)
          , a = (n(67294),
        n(92528))
          , r = n(80628)
          , o = n(93350)
          , s = n(85893)
          , u = function e(t) {
            var n = t.currentPage
              , o = t.totalPages
              , u = t.onPageChanged
              , c = (0,
            i.$G)().t
              , p = 1 !== n
              , m = n !== o
              , f = n - 1
              , y = n + 1;
            return o <= 1 ? (0,
            s.jsx)(s.Fragment, {}) : (0,
            s.jsxs)(e.Root, {
                className: "pagination",
                children: [(0,
                s.jsx)(l, {
                    onClick: function() {
                        return p && u(f)
                    },
                    children: (0,
                    s.jsx)(a.Z, {})
                }), (0,
                s.jsx)("li", {
                    children: (0,
                    s.jsx)(d, {
                        children: c("Page {{currentPage}} of {{totalPages}}", {
                            currentPage: n,
                            totalPages: o
                        })
                    })
                }), (0,
                s.jsx)(l, {
                    onClick: function() {
                        return m && u(y)
                    },
                    children: (0,
                    s.jsx)(r.Z, {})
                })]
            })
        };
        t.Z = u,
        u.Root = o.default.ul.withConfig({
            displayName: "Pagination__Root",
            componentId: "sc-o8u034-0"
        })(["padding-top:24px;display:flex;width:100%;justify-content:center;align-items:center;li{list-style-type:none;}"]);
        var l = o.default.li.withConfig({
            displayName: "Pagination__Control",
            componentId: "sc-o8u034-1"
        })(["border:1px solid #e9e9eb;box-sizing:border-box;border-radius:6px;width:40px;height:40px;display:flex;justify-content:center;align-items:center;cursor:pointer;svg{stroke:#8990a5;}&:hover{opacity:0.7;}"])
          , d = o.default.div.withConfig({
            displayName: "Pagination__Content",
            componentId: "sc-o8u034-2"
        })(["margin-left:16px;margin-right:16px;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#8990a5;"])
    },
    95218: function(e, t, n) {
        var i = n(82212)
          , a = n(47235)
          , r = n(47646)
          , o = n(10247)
          , s = (n(67294),
        n(24451))
          , u = n(93350)
          , l = n(85893)
          , d = function e(t) {
            var n = t.children
              , u = t.title
              , d = t.withBtn
              , c = void 0 === d || d
              , p = t.text
              , m = t.multipleChains
              , f = t.content
              , y = (0,
            s.$G)().t
              , h = (0,
            a.he)()
              , v = (0,
            r.x)()
              , x = v.updateChainId
              , g = v.chainId
              , w = m || [i.a_.MAINNET, i.a_.BSCTESTNET]
              , b = g && w.includes(g)
              , j = function(e, t) {
                var n = (0,
                s.$G)().t;
                if (e && t) {
                    var i, a = null === t || void 0 === t || null === (i = t.reduce((function(t, n) {
                        return e.includes(n.chainId) && (t += "".concat(null === n || void 0 === n ? void 0 : n.title, ",")),
                        t
                    }
                    ), "")) || void 0 === i ? void 0 : i.slice(0, -1);
                    return "".concat(n("This section is available on"), " ").concat(a, ".\n        \n ").concat(n("Please switch the network"))
                }
                return null
            }(m, h);
            return b ? (0,
            l.jsxs)(l.Fragment, {
                children: [" ", n || "", " "]
            }) : (0,
            l.jsx)(e.Wrapper, {
                children: (0,
                l.jsxs)(e.Message, {
                    children: [(0,
                    l.jsx)("h2", {
                        children: u
                    }), (0,
                    l.jsx)("p", {
                        children: j || p || y("This section is only available on Binance Smart Chain. Please switch the network")
                    }), c && (0,
                    l.jsxs)(e.Button, {
                        onClick: function() {
                            x(h[0].chainId)
                        },
                        children: [(0,
                        l.jsx)(o.Z, {}), (0,
                        l.jsx)("p", {
                            className: "text",
                            children: y("Connect Binance Smart Chain")
                        })]
                    }), f || ""]
                })
            })
        };
        d.Wrapper = u.default.div.withConfig({
            displayName: "AvailableChain__Wrapper",
            componentId: "sc-1jzq9hs-0"
        })(["width:100%;display:flex;justify-content:center;margin-top:153px;margin-bottom:153px;"]),
        d.Message = u.default.div.withConfig({
            displayName: "AvailableChain__Message",
            componentId: "sc-1jzq9hs-1"
        })(["width:738px;min-height:272px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#ffffff;border-radius:6px;h2{font-style:normal;font-weight:bold;font-size:32px;line-height:40px;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-bottom:8px;}p{font-weight:500;font-size:18px;line-height:24px;text-align:center;letter-spacing:0.3px;color:#8990a5;margin-bottom:32px;max-width:500px;}@media screen and (max-width:768px){padding:10px 24px;}@media screen and (max-width:480px){width:100%;p{font-size:14px;}}"]),
        d.Button = u.default.button.withConfig({
            displayName: "AvailableChain__Button",
            componentId: "sc-1jzq9hs-2"
        })(["border:1px solid #6c5dd3;box-sizing:border-box;border-radius:6px;padding:14px 24px 14px 24px;background:transparent;cursor:pointer;display:flex;align-items:center;max-width:303px;max-height:48px;p{margin:0;padding-left:16px;font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;white-space:nowrap;}transition:background-color 200ms ease-in-out,color 200ms ease-in-out;:hover{background-color:#6c5dd3;> *{color:white;}}@media screen and (max-width:480px){width:100%;p{font-size:12px;white-space:inherit;}}"]),
        t.Z = d
    },
    92911: function(e, t, n) {
        n.d(t, {
            Ir: function() {
                return p
            }
        });
        var i, a = n(92809), r = n(52209), o = n(82909), s = n(64316);
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
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(n), !0).forEach((function(t) {
                    (0,
                    a.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var d = {}
          , c = (0,
        o.Ps)(i || (i = (0,
        r.Z)(["\n    query getRinanceTvl {\n  almCrossLiquidity {\n    date\n    totalLiquidityUSD\n  }\n  aliumTvl {\n    bsc {\n      date\n      totalLiquidityUSD\n    }\n    bscStaking {\n      date\n      totalLiquidityUSD\n    }\n    staking {\n      date\n      totalLiquidityUSD\n    }\n  }\n}\n    "])));
        function p(e) {
            var t = l(l({}, d), e);
            return s.a(c, t)
        }
    },
    96015: function(e, t, n) {
        n.d(t, {
            E: function() {
                return o
            }
        });
        var i = n(67294)
          , a = n(22536)
          , r = n(39172)
          , o = function(e, t, n, o) {
            return (0,
            i.useMemo)((function() {
                var i = null === e || void 0 === e ? void 0 : e.map((function(e) {
                    return (0,
                    a.b)(e[t], e[n])
                }
                ))
                  , s = o ? null === i || void 0 === i ? void 0 : i.reverse() : i;
                return {
                    charts: s,
                    variant: (0,
                    r.Q)(s),
                    lastData: null === s || void 0 === s ? void 0 : s[s.length - 1]
                }
            }
            ), [e, t, n, o])
        }
    },
    22536: function(e, t, n) {
        n.d(t, {
            b: function() {
                return o
            }
        });
        var i = n(93022)
          , a = n(42227);
        function r(e) {
            return (0,
            i.Z)((0,
            a.Z)(Number(e)), "yyyy.MM.dd")
        }
        var o = function(e, t, n) {
            return {
                date: r(e),
                value: Number(t),
                title: n || "??"
            }
        }
    },
    39172: function(e, t, n) {
        n.d(t, {
            Q: function() {
                return i
            }
        });
        var i = function(e) {
            if (null === e || void 0 === e || !e.length)
                return "negative";
            var t = null === e || void 0 === e ? void 0 : e[e.length - 1]
              , n = null === e || void 0 === e ? void 0 : e[e.length - 2];
            return (null === t || void 0 === t ? void 0 : t.value) >= (null === n || void 0 === n ? void 0 : n.value) ? "positive" : "negative"
        }
    }
}]);
