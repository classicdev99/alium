"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9744], {
    84325: function(e, n, t) {
        t.d(n, {
            BY: function() {
                return i
            },
            om: function() {
                return o
            },
            pg: function() {
                return a
            },
            WS: function() {
                return s
            },
            f_: function() {
                return l
            }
        });
        var r = t(82212)
          , i = .0017
          , o = .0025
          , a = 10
          , s = [{
            chainIds: [r.a_.MAINNET, r.a_.BSCTESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-bsc-exchange-2",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/bsc-blocks"
        }, {
            chainIds: [r.a_.ETHER_MAINNET, r.a_.ETHER_TESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-mainnet",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/mainnet-blocks"
        }, {
            chainIds: [r.a_.MATIC_MAINNET, r.a_.MATIC_TESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-polygon",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/matic-blocks"
        }, {
            chainIds: [r.a_.FANTOM, r.a_.FANTOM_TESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-fantom",
            blocklytics: "https://api.thegraph.com/subgraphs/name/ducquangkstn/fantom-blocks"
        }, {
            chainIds: [r.a_.MOONRIVER, r.a_.MOONBASE_ALPHA],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-moonriver",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/moonriver-blocks"
        }, {
            chainIds: [r.a_.AURORA, r.a_.AURORA_TESTNET],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-aurora",
            blocklytics: "https://api.thegraph.com/subgraphs/name/ducquangkstn/aurora-blocks"
        }, {
            chainIds: [r.a_.MOONBEAM],
            url: "https://api.thegraph.com/subgraphs/name/alium-finance/alium-exchange-moonbeam",
            blocklytics: "https://api.thegraph.com/subgraphs/name/alium-finance/moonbeam-blocks"
        }].filter((function(e) {
            return !!e
        }
        ));
        function l(e) {
            return s.find((function(n) {
                return n.chainIds.includes(e)
            }
            ))
        }
    },
    75347: function(e, n, t) {
        t.d(n, {
            MK: function() {
                return ie
            },
            eO: function() {
                return ae
            },
            kK: function() {
                return le
            },
            tP: function() {
                return ce
            },
            JM: function() {
                return pe
            },
            Y3: function() {
                return fe
            },
            h5: function() {
                return ve
            },
            $F: function() {
                return ke
            },
            Hq: function() {
                return _e
            },
            rS: function() {
                return xe
            },
            p9: function() {
                return we
            },
            Rb: function() {
                return De
            },
            uJ: function() {
                return je
            },
            bu: function() {
                return Oe
            },
            k_: function() {
                return Ne
            },
            Yf: function() {
                return Ve
            },
            w0: function() {
                return qe
            },
            sI: function() {
                return Be
            },
            xg: function() {
                return Ze
            }
        });
        var r, i, o, a, s, l, d, c, u, p, m, f, h, v, g, k, y, _, b, x, T, w, P, D, S, j = t(92809), U = t(52209), O = t(82909), C = t(64316), N = t(73359);
        function I(e, n) {
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
        function V(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? I(Object(t), !0).forEach((function(n) {
                    (0,
                    j.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        var R, q, $, B, A, Z, L, E, z, M, H, F, W, G, K, Y = {};
        !function(e) {
            e.DailyVolumeNative = "dailyVolumeNative",
            e.DailyVolumeUsd = "dailyVolumeUSD",
            e.DailyVolumeUntracked = "dailyVolumeUntracked",
            e.Date = "date",
            e.Id = "id",
            e.TotalLiquidityNative = "totalLiquidityNative",
            e.TotalLiquidityUsd = "totalLiquidityUSD",
            e.TotalTransactions = "totalTransactions",
            e.TotalVolumeNative = "totalVolumeNative",
            e.TotalVolumeUsd = "totalVolumeUSD"
        }(R || (R = {})),
        function(e) {
            e.Id = "id",
            e.TotalLiquidityNative = "totalLiquidityNative",
            e.TotalLiquidityUsd = "totalLiquidityUSD",
            e.TotalPairs = "totalPairs",
            e.TotalTransactions = "totalTransactions",
            e.TotalVolumeNative = "totalVolumeNative",
            e.TotalVolumeUsd = "totalVolumeUSD",
            e.UntrackedVolumeUsd = "untrackedVolumeUSD"
        }(q || (q = {})),
        function(e) {
            e.Author = "author",
            e.Difficulty = "difficulty",
            e.GasLimit = "gasLimit",
            e.GasUsed = "gasUsed",
            e.Id = "id",
            e.Number = "number",
            e.ParentHash = "parentHash",
            e.ReceiptsRoot = "receiptsRoot",
            e.Size = "size",
            e.StateRoot = "stateRoot",
            e.Timestamp = "timestamp",
            e.TotalDifficulty = "totalDifficulty",
            e.TransactionsRoot = "transactionsRoot",
            e.UnclesHash = "unclesHash"
        }($ || ($ = {})),
        function(e) {
            e.Id = "id",
            e.NativePrice = "nativePrice"
        }(B || (B = {})),
        function(e) {
            e.Amount0 = "amount0",
            e.Amount1 = "amount1",
            e.AmountUsd = "amountUSD",
            e.FeeLiquidity = "feeLiquidity",
            e.FeeTo = "feeTo",
            e.Id = "id",
            e.Liquidity = "liquidity",
            e.LogIndex = "logIndex",
            e.NeedsComplete = "needsComplete",
            e.Pair = "pair",
            e.PairBlock = "pair__block",
            e.PairId = "pair__id",
            e.PairName = "pair__name",
            e.PairReserve0 = "pair__reserve0",
            e.PairReserve1 = "pair__reserve1",
            e.PairReserveNative = "pair__reserveNative",
            e.PairReserveUsd = "pair__reserveUSD",
            e.PairTimestamp = "pair__timestamp",
            e.PairToken0Price = "pair__token0Price",
            e.PairToken1Price = "pair__token1Price",
            e.PairTotalSupply = "pair__totalSupply",
            e.PairTotalTransactions = "pair__totalTransactions",
            e.PairTrackedReserveNative = "pair__trackedReserveNative",
            e.PairUntrackedVolumeUsd = "pair__untrackedVolumeUSD",
            e.PairVolumeToken0 = "pair__volumeToken0",
            e.PairVolumeToken1 = "pair__volumeToken1",
            e.PairVolumeUsd = "pair__volumeUSD",
            e.Sender = "sender",
            e.Timestamp = "timestamp",
            e.To = "to",
            e.Transaction = "transaction",
            e.TransactionBlock = "transaction__block",
            e.TransactionId = "transaction__id",
            e.TransactionTimestamp = "transaction__timestamp"
        }(A || (A = {})),
        function(e) {
            e.Amount0 = "amount0",
            e.Amount1 = "amount1",
            e.AmountUsd = "amountUSD",
            e.FeeLiquidity = "feeLiquidity",
            e.FeeTo = "feeTo",
            e.Id = "id",
            e.Liquidity = "liquidity",
            e.LogIndex = "logIndex",
            e.Pair = "pair",
            e.PairBlock = "pair__block",
            e.PairId = "pair__id",
            e.PairName = "pair__name",
            e.PairReserve0 = "pair__reserve0",
            e.PairReserve1 = "pair__reserve1",
            e.PairReserveNative = "pair__reserveNative",
            e.PairReserveUsd = "pair__reserveUSD",
            e.PairTimestamp = "pair__timestamp",
            e.PairToken0Price = "pair__token0Price",
            e.PairToken1Price = "pair__token1Price",
            e.PairTotalSupply = "pair__totalSupply",
            e.PairTotalTransactions = "pair__totalTransactions",
            e.PairTrackedReserveNative = "pair__trackedReserveNative",
            e.PairUntrackedVolumeUsd = "pair__untrackedVolumeUSD",
            e.PairVolumeToken0 = "pair__volumeToken0",
            e.PairVolumeToken1 = "pair__volumeToken1",
            e.PairVolumeUsd = "pair__volumeUSD",
            e.Sender = "sender",
            e.Timestamp = "timestamp",
            e.To = "to",
            e.Transaction = "transaction",
            e.TransactionBlock = "transaction__block",
            e.TransactionId = "transaction__id",
            e.TransactionTimestamp = "transaction__timestamp"
        }(Z || (Z = {})),
        function(e) {
            e.Asc = "asc",
            e.Desc = "desc"
        }(L || (L = {})),
        function(e) {
            e.DailyTxns = "dailyTxns",
            e.DailyVolumeToken0 = "dailyVolumeToken0",
            e.DailyVolumeToken1 = "dailyVolumeToken1",
            e.DailyVolumeUsd = "dailyVolumeUSD",
            e.Date = "date",
            e.Id = "id",
            e.PairAddress = "pairAddress",
            e.Reserve0 = "reserve0",
            e.Reserve1 = "reserve1",
            e.ReserveUsd = "reserveUSD",
            e.Token0 = "token0",
            e.Token0Decimals = "token0__decimals",
            e.Token0DerivedNative = "token0__derivedNative",
            e.Token0DerivedUsd = "token0__derivedUSD",
            e.Token0Id = "token0__id",
            e.Token0Name = "token0__name",
            e.Token0Symbol = "token0__symbol",
            e.Token0TotalLiquidity = "token0__totalLiquidity",
            e.Token0TotalTransactions = "token0__totalTransactions",
            e.Token0TradeVolume = "token0__tradeVolume",
            e.Token0TradeVolumeUsd = "token0__tradeVolumeUSD",
            e.Token0UntrackedVolumeUsd = "token0__untrackedVolumeUSD",
            e.Token1 = "token1",
            e.Token1Decimals = "token1__decimals",
            e.Token1DerivedNative = "token1__derivedNative",
            e.Token1DerivedUsd = "token1__derivedUSD",
            e.Token1Id = "token1__id",
            e.Token1Name = "token1__name",
            e.Token1Symbol = "token1__symbol",
            e.Token1TotalLiquidity = "token1__totalLiquidity",
            e.Token1TotalTransactions = "token1__totalTransactions",
            e.Token1TradeVolume = "token1__tradeVolume",
            e.Token1TradeVolumeUsd = "token1__tradeVolumeUSD",
            e.Token1UntrackedVolumeUsd = "token1__untrackedVolumeUSD",
            e.TotalSupply = "totalSupply"
        }(E || (E = {})),
        function(e) {
            e.HourStartUnix = "hourStartUnix",
            e.HourlyTxns = "hourlyTxns",
            e.HourlyVolumeToken0 = "hourlyVolumeToken0",
            e.HourlyVolumeToken1 = "hourlyVolumeToken1",
            e.HourlyVolumeUsd = "hourlyVolumeUSD",
            e.Id = "id",
            e.Pair = "pair",
            e.PairBlock = "pair__block",
            e.PairId = "pair__id",
            e.PairName = "pair__name",
            e.PairReserve0 = "pair__reserve0",
            e.PairReserve1 = "pair__reserve1",
            e.PairReserveNative = "pair__reserveNative",
            e.PairReserveUsd = "pair__reserveUSD",
            e.PairTimestamp = "pair__timestamp",
            e.PairToken0Price = "pair__token0Price",
            e.PairToken1Price = "pair__token1Price",
            e.PairTotalSupply = "pair__totalSupply",
            e.PairTotalTransactions = "pair__totalTransactions",
            e.PairTrackedReserveNative = "pair__trackedReserveNative",
            e.PairUntrackedVolumeUsd = "pair__untrackedVolumeUSD",
            e.PairVolumeToken0 = "pair__volumeToken0",
            e.PairVolumeToken1 = "pair__volumeToken1",
            e.PairVolumeUsd = "pair__volumeUSD",
            e.Reserve0 = "reserve0",
            e.Reserve1 = "reserve1",
            e.ReserveUsd = "reserveUSD",
            e.TotalSupply = "totalSupply"
        }(z || (z = {})),
        function(e) {
            e.Block = "block",
            e.Burns = "burns",
            e.Id = "id",
            e.Mints = "mints",
            e.Name = "name",
            e.PairHourData = "pairHourData",
            e.Reserve0 = "reserve0",
            e.Reserve1 = "reserve1",
            e.ReserveNative = "reserveNative",
            e.ReserveUsd = "reserveUSD",
            e.Swaps = "swaps",
            e.Timestamp = "timestamp",
            e.Token0 = "token0",
            e.Token0Price = "token0Price",
            e.Token0Decimals = "token0__decimals",
            e.Token0DerivedNative = "token0__derivedNative",
            e.Token0DerivedUsd = "token0__derivedUSD",
            e.Token0Id = "token0__id",
            e.Token0Name = "token0__name",
            e.Token0Symbol = "token0__symbol",
            e.Token0TotalLiquidity = "token0__totalLiquidity",
            e.Token0TotalTransactions = "token0__totalTransactions",
            e.Token0TradeVolume = "token0__tradeVolume",
            e.Token0TradeVolumeUsd = "token0__tradeVolumeUSD",
            e.Token0UntrackedVolumeUsd = "token0__untrackedVolumeUSD",
            e.Token1 = "token1",
            e.Token1Price = "token1Price",
            e.Token1Decimals = "token1__decimals",
            e.Token1DerivedNative = "token1__derivedNative",
            e.Token1DerivedUsd = "token1__derivedUSD",
            e.Token1Id = "token1__id",
            e.Token1Name = "token1__name",
            e.Token1Symbol = "token1__symbol",
            e.Token1TotalLiquidity = "token1__totalLiquidity",
            e.Token1TotalTransactions = "token1__totalTransactions",
            e.Token1TradeVolume = "token1__tradeVolume",
            e.Token1TradeVolumeUsd = "token1__tradeVolumeUSD",
            e.Token1UntrackedVolumeUsd = "token1__untrackedVolumeUSD",
            e.TotalSupply = "totalSupply",
            e.TotalTransactions = "totalTransactions",
            e.TrackedReserveNative = "trackedReserveNative",
            e.UntrackedVolumeUsd = "untrackedVolumeUSD",
            e.VolumeToken0 = "volumeToken0",
            e.VolumeToken1 = "volumeToken1",
            e.VolumeUsd = "volumeUSD"
        }(M || (M = {})),
        function(e) {
            e.Amount0In = "amount0In",
            e.Amount0Out = "amount0Out",
            e.Amount1In = "amount1In",
            e.Amount1Out = "amount1Out",
            e.AmountUsd = "amountUSD",
            e.From = "from",
            e.Id = "id",
            e.LogIndex = "logIndex",
            e.Pair = "pair",
            e.PairBlock = "pair__block",
            e.PairId = "pair__id",
            e.PairName = "pair__name",
            e.PairReserve0 = "pair__reserve0",
            e.PairReserve1 = "pair__reserve1",
            e.PairReserveNative = "pair__reserveNative",
            e.PairReserveUsd = "pair__reserveUSD",
            e.PairTimestamp = "pair__timestamp",
            e.PairToken0Price = "pair__token0Price",
            e.PairToken1Price = "pair__token1Price",
            e.PairTotalSupply = "pair__totalSupply",
            e.PairTotalTransactions = "pair__totalTransactions",
            e.PairTrackedReserveNative = "pair__trackedReserveNative",
            e.PairUntrackedVolumeUsd = "pair__untrackedVolumeUSD",
            e.PairVolumeToken0 = "pair__volumeToken0",
            e.PairVolumeToken1 = "pair__volumeToken1",
            e.PairVolumeUsd = "pair__volumeUSD",
            e.Sender = "sender",
            e.Timestamp = "timestamp",
            e.To = "to",
            e.Transaction = "transaction",
            e.TransactionBlock = "transaction__block",
            e.TransactionId = "transaction__id",
            e.TransactionTimestamp = "transaction__timestamp"
        }(H || (H = {})),
        function(e) {
            e.DailyTxns = "dailyTxns",
            e.DailyVolumeNative = "dailyVolumeNative",
            e.DailyVolumeToken = "dailyVolumeToken",
            e.DailyVolumeUsd = "dailyVolumeUSD",
            e.Date = "date",
            e.Id = "id",
            e.PriceUsd = "priceUSD",
            e.Token = "token",
            e.TokenDecimals = "token__decimals",
            e.TokenDerivedNative = "token__derivedNative",
            e.TokenDerivedUsd = "token__derivedUSD",
            e.TokenId = "token__id",
            e.TokenName = "token__name",
            e.TokenSymbol = "token__symbol",
            e.TokenTotalLiquidity = "token__totalLiquidity",
            e.TokenTotalTransactions = "token__totalTransactions",
            e.TokenTradeVolume = "token__tradeVolume",
            e.TokenTradeVolumeUsd = "token__tradeVolumeUSD",
            e.TokenUntrackedVolumeUsd = "token__untrackedVolumeUSD",
            e.TotalLiquidityNative = "totalLiquidityNative",
            e.TotalLiquidityToken = "totalLiquidityToken",
            e.TotalLiquidityUsd = "totalLiquidityUSD"
        }(F || (F = {})),
        function(e) {
            e.Decimals = "decimals",
            e.DerivedNative = "derivedNative",
            e.DerivedUsd = "derivedUSD",
            e.Id = "id",
            e.Name = "name",
            e.PairBase = "pairBase",
            e.PairDayDataBase = "pairDayDataBase",
            e.PairDayDataQuote = "pairDayDataQuote",
            e.PairQuote = "pairQuote",
            e.Symbol = "symbol",
            e.TokenDayData = "tokenDayData",
            e.TotalLiquidity = "totalLiquidity",
            e.TotalTransactions = "totalTransactions",
            e.TradeVolume = "tradeVolume",
            e.TradeVolumeUsd = "tradeVolumeUSD",
            e.UntrackedVolumeUsd = "untrackedVolumeUSD"
        }(W || (W = {})),
        function(e) {
            e.Block = "block",
            e.Burns = "burns",
            e.Id = "id",
            e.Mints = "mints",
            e.Swaps = "swaps",
            e.Timestamp = "timestamp"
        }(G || (G = {})),
        function(e) {
            e.Allow = "allow",
            e.Deny = "deny"
        }(K || (K = {}));
        var J = (0,
        O.Ps)(r || (r = (0,
        U.Z)(["\n    fragment BurnData on Burn {\n  id\n  timestamp\n  pair {\n    token0 {\n      id\n      symbol\n    }\n    token1 {\n      id\n      symbol\n    }\n  }\n  sender\n  amount0\n  amount1\n  amountUSD\n}\n    "])))
          , Q = (0,
        O.Ps)(i || (i = (0,
        U.Z)(["\n    fragment MintData on Mint {\n  id\n  timestamp\n  pair {\n    token0 {\n      id\n      symbol\n    }\n    token1 {\n      id\n      symbol\n    }\n  }\n  to\n  amount0\n  amount1\n  amountUSD\n}\n    "])))
          , X = (0,
        O.Ps)(o || (o = (0,
        U.Z)(["\n    fragment PairSearch on Pair {\n  id\n  name\n  token0 {\n    id\n    symbol\n  }\n  token1 {\n    id\n    symbol\n  }\n}\n    "])))
          , ee = (0,
        O.Ps)(a || (a = (0,
        U.Z)(["\n    fragment PairTableData on Pair {\n  id\n  name\n  token0 {\n    id\n    symbol\n  }\n  token1 {\n    id\n    symbol\n  }\n  reserveUSD\n  volumeUSD\n  block\n}\n    "])))
          , ne = (0,
        O.Ps)(s || (s = (0,
        U.Z)(["\n    fragment SwapData on Swap {\n  id\n  timestamp\n  pair {\n    token0 {\n      id\n      symbol\n    }\n    token1 {\n      id\n      symbol\n    }\n  }\n  from\n  amount0In\n  amount1In\n  amount0Out\n  amount1Out\n  amountUSD\n}\n    "])))
          , te = (0,
        O.Ps)(l || (l = (0,
        U.Z)(["\n    fragment TokenSearch on Token {\n  id\n  name\n  symbol\n}\n    "])))
          , re = (0,
        O.Ps)(d || (d = (0,
        U.Z)(["\n    query block($timestamp: BigInt!) {\n  blocks(\n    first: 1\n    orderBy: timestamp\n    orderDirection: desc\n    where: {timestamp_lte: $timestamp}\n  ) {\n    number\n  }\n}\n    "])));
        function ie(e) {
            var n = V(V({}, Y), e);
            return C.a(re, n)
        }
        var oe = (0,
        O.Ps)(c || (c = (0,
        U.Z)(["\n    query infoHeadline {\n  bundles(first: 1) {\n    nativePrice\n  }\n  aliumFactories(first: 1) {\n    totalPairs\n  }\n  aliumDayDatas(first: 2, orderBy: date, orderDirection: desc) {\n    totalTransactions\n    dailyVolumeUSD\n  }\n}\n    "])));
        function ae(e) {
            var n = V(V({}, Y), e);
            return C.a(oe, n)
        }
        var se = (0,
        O.Ps)(u || (u = (0,
        U.Z)(["\n    query overviewCharts {\n  aliumDayDatas(\n    first: 1000\n    orderBy: date\n    orderDirection: desc\n    where: {date_not: 1653004800}\n  ) {\n    date\n    dailyVolumeUSD\n    totalLiquidityUSD\n  }\n}\n    "])));
        function le(e) {
            var n = V(V({}, Y), e);
            return C.a(se, n)
        }
        var de = (0,
        O.Ps)(p || (p = (0,
        U.Z)(["\n    query pairByTokens($token0: String!, $token1: String!) {\n  pairs(first: 1, where: {token0: $token0, token1: $token1}) {\n    id\n    token0 {\n      id\n      symbol\n      derivedUSD\n    }\n    token0Price\n    token1 {\n      id\n      symbol\n      derivedUSD\n    }\n    token1Price\n  }\n}\n    "])));
        function ce(e) {
            var n = V(V({}, Y), e);
            return C.a(de, n)
        }
        var ue = (0,
        O.Ps)(m || (m = (0,
        U.Z)(["\n    query pairCharts($pairAddress: Bytes!) {\n  pairDayDatas(\n    first: 1000\n    orderBy: date\n    orderDirection: desc\n    where: {pairAddress: $pairAddress}\n  ) {\n    dailyVolumeUSD\n    reserveUSD\n    date\n  }\n}\n    "])));
        function pe(e) {
            var n = V(V({}, Y), e);
            return C.a(ue, n)
        }
        var me = (0,
        O.Ps)(f || (f = (0,
        U.Z)(["\n    query pairCounters($id: ID!, $block24h: Int!, $block48h: Int!) {\n  now: pair(id: $id) {\n    volumeUSD\n    reserveUSD\n    reserve0\n    reserve1\n    totalTransactions\n  }\n  h24: pair(id: $id, block: {number: $block24h}) {\n    volumeUSD\n    reserveUSD\n    reserve0\n    reserve1\n    totalTransactions\n  }\n  h48: pair(id: $id, block: {number: $block48h}) {\n    volumeUSD\n    reserveUSD\n    reserve0\n    reserve1\n    totalTransactions\n  }\n}\n    "])));
        function fe(e) {
            var n = V(V({}, Y), e);
            return C.a(me, n)
        }
        var he = (0,
        O.Ps)(h || (h = (0,
        U.Z)(["\n    query pairs($ids: [ID!]!) {\n  pairs(where: {id_in: $ids}) {\n    id\n    token0 {\n      id\n      symbol\n    }\n    token1 {\n      id\n      symbol\n    }\n  }\n}\n    "])));
        function ve(e) {
            var n = V(V({}, Y), e);
            return C.a(he, n)
        }
        var ge = (0,
        O.Ps)(v || (v = (0,
        U.Z)(["\n    query searchPairs($tokens: [String!]!, $id: ID) {\n  as0: pairs(first: 10, where: {token0_in: $tokens}) {\n    ...PairSearch\n  }\n  as1: pairs(first: 10, where: {token1_in: $tokens}) {\n    ...PairSearch\n  }\n  asAddress: pairs(first: 1, where: {id: $id}) {\n    ...PairSearch\n  }\n}\n    ", ""])), X);
        function ke(e) {
            var n = V(V({}, Y), e);
            return N.t(ge, n)
        }
        var ye = (0,
        O.Ps)(g || (g = (0,
        U.Z)(["\n    query searchTokens($symbol: String, $name: String, $id: ID) {\n  asSymbol: tokens(\n    first: 10\n    where: {symbol_contains: $symbol}\n    orderBy: tradeVolumeUSD\n    orderDirection: desc\n  ) {\n    ...TokenSearch\n  }\n  asName: tokens(\n    first: 10\n    where: {name_contains: $name}\n    orderBy: tradeVolumeUSD\n    orderDirection: desc\n  ) {\n    ...TokenSearch\n  }\n  asAddress: tokens(\n    first: 1\n    where: {id: $id}\n    orderBy: tradeVolumeUSD\n    orderDirection: desc\n  ) {\n    ...TokenSearch\n  }\n}\n    ", ""])), te);
        function _e(e) {
            var n = V(V({}, Y), e);
            return N.t(ye, n)
        }
        var be = (0,
        O.Ps)(k || (k = (0,
        U.Z)(["\n    query token($id: ID!) {\n  token(id: $id) {\n    id\n    symbol\n    name\n    derivedNative\n    derivedUSD\n    tradeVolumeUSD\n    totalTransactions\n    totalLiquidity\n    tokenDayData(first: 2, orderBy: date, orderDirection: desc) {\n      priceUSD\n      dailyVolumeUSD\n      totalLiquidityUSD\n      dailyTxns\n    }\n  }\n}\n    "])));
        function xe(e) {
            var n = V(V({}, Y), e);
            return C.a(be, n)
        }
        var Te = (0,
        O.Ps)(y || (y = (0,
        U.Z)(["\n    query tokenCharts($token: String!) {\n  tokenDayDatas(\n    first: 1000\n    orderBy: date\n    orderDirection: desc\n    where: {token: $token}\n  ) {\n    priceUSD\n    dailyVolumeUSD\n    totalLiquidityUSD\n    date\n  }\n}\n    "])));
        function we(e) {
            var n = V(V({}, Y), e);
            return C.a(Te, n)
        }
        var Pe = (0,
        O.Ps)(_ || (_ = (0,
        U.Z)(["\n    query tokenCounters($id: ID!, $block24h: Int!, $block48h: Int!) {\n  now: token(id: $id) {\n    tradeVolumeUSD\n    totalTransactions\n    totalLiquidity\n    derivedUSD\n  }\n  h24: token(id: $id, block: {number: $block24h}) {\n    tradeVolumeUSD\n    totalTransactions\n    totalLiquidity\n    derivedUSD\n  }\n  h48: token(id: $id, block: {number: $block48h}) {\n    tradeVolumeUSD\n    totalTransactions\n    totalLiquidity\n    derivedUSD\n  }\n}\n    "])));
        function De(e) {
            var n = V(V({}, Y), e);
            return C.a(Pe, n)
        }
        var Se = (0,
        O.Ps)(b || (b = (0,
        U.Z)(["\n    query tokenPairs($token: String!) {\n  asToken0: pairs(first: 100, where: {token0: $token, reserveUSD_gt: 0.005}) {\n    id\n  }\n  asToken1: pairs(first: 100, where: {token1: $token, reserveUSD_gt: 0.005}) {\n    id\n  }\n}\n    "])));
        function je(e) {
            var n = V(V({}, Y), e);
            return C.a(Se, n)
        }
        var Ue = (0,
        O.Ps)(x || (x = (0,
        U.Z)(["\n    query tokens($ids: [ID!]!) {\n  tokens(where: {id_in: $ids}) {\n    id\n    name\n    symbol\n  }\n}\n    "])));
        function Oe(e) {
            var n = V(V({}, Y), e);
            return C.a(Ue, n)
        }
        var Ce = (0,
        O.Ps)(T || (T = (0,
        U.Z)(["\n    query topPairs($first: Int = 500, $block24h: Int!, $block7d: Int!) {\n  now: pairs(first: $first, where: {reserveUSD_gt: 0.005}) {\n    ...PairTableData\n  }\n  h24: pairs(first: $first, block: {number: $block24h}) {\n    ...PairTableData\n  }\n  d7: pairs(first: $first, block: {number: $block7d}) {\n    ...PairTableData\n  }\n}\n    ", ""])), ee);
        function Ne(e) {
            var n = V(V({}, Y), e);
            return C.a(Ce, n)
        }
        var Ie = (0,
        O.Ps)(w || (w = (0,
        U.Z)(["\n    query topPairsByIds($first: Int = 500, $block24h: Int!, $block7d: Int!, $ids: [ID!]!) {\n  now: pairs(first: $first, where: {id_in: $ids, reserveUSD_gt: 0.005}) {\n    ...PairTableData\n  }\n  h24: pairs(first: $first, block: {number: $block24h}, where: {id_in: $ids}) {\n    ...PairTableData\n  }\n  d7: pairs(first: $first, block: {number: $block7d}, where: {id_in: $ids}) {\n    ...PairTableData\n  }\n}\n    ", ""])), ee);
        function Ve(e) {
            var n = V(V({}, Y), e);
            return C.a(Ie, n)
        }
        var Re = (0,
        O.Ps)(P || (P = (0,
        U.Z)(["\n    query topTokens {\n  tokens(\n    first: 500\n    orderBy: totalLiquidity\n    orderDirection: desc\n    where: {totalLiquidity_gt: 0.005, tradeVolumeUSD_gt: 0.005}\n  ) {\n    id\n    name\n    symbol\n    tokenDayData(\n      first: 2\n      orderBy: date\n      orderDirection: desc\n      where: {totalLiquidityUSD_gt: 0.005, dailyVolumeUSD_gt: 0.005}\n    ) {\n      priceUSD\n      dailyVolumeUSD\n      totalLiquidityUSD\n      date\n    }\n  }\n}\n    "])));
        function qe(e) {
            var n = V(V({}, Y), e);
            return C.a(Re, n)
        }
        var $e = (0,
        O.Ps)(D || (D = (0,
        U.Z)(["\n    query transactions($first: Int = 1000) {\n  mints(first: $first, orderBy: timestamp, orderDirection: desc) {\n    ...MintData\n  }\n  swaps(first: $first, orderBy: timestamp, orderDirection: desc) {\n    ...SwapData\n  }\n  burns(first: $first, orderBy: timestamp, orderDirection: desc) {\n    ...BurnData\n  }\n}\n    ", "\n", "\n", ""])), Q, ne, J);
        function Be(e) {
            var n = V(V({}, Y), e);
            return C.a($e, n)
        }
        var Ae = (0,
        O.Ps)(S || (S = (0,
        U.Z)(["\n    query transactionsByPairs($first: Int = 100, $pairs: [String!]) {\n  mints(\n    first: $first\n    orderBy: timestamp\n    orderDirection: desc\n    where: {pair_in: $pairs}\n  ) {\n    ...MintData\n  }\n  swaps(\n    first: $first\n    orderBy: timestamp\n    orderDirection: desc\n    where: {pair_in: $pairs}\n  ) {\n    ...SwapData\n  }\n  burns(\n    first: $first\n    orderBy: timestamp\n    orderDirection: desc\n    where: {pair_in: $pairs}\n  ) {\n    ...BurnData\n  }\n}\n    ", "\n", "\n", ""])), Q, ne, J);
        function Ze(e) {
            var n = V(V({}, Y), e);
            return C.a(Ae, n)
        }
    },
    14190: function(e, n, t) {
        t.d(n, {
            u: function() {
                return o
            }
        });
        var r = t(96486)
          , i = t(67294);
        function o(e) {
            var n = e.items
              , t = e.pageLimit
              , o = void 0 === t ? 30 : t
              , a = e.maxPages
              , s = (0,
            i.useMemo)((function() {
                return n
            }
            ), [n])
              , l = (0,
            i.useCallback)((function(e) {
                var n = (e - 1) * o;
                return null !== s && void 0 !== s && s.length ? s.slice(n, n + o) : []
            }
            ), [s, o])
              , d = (0,
            i.useState)(1)
              , c = d[0]
              , u = d[1]
              , p = (0,
            i.useState)(l(1))
              , m = p[0]
              , f = p[1];
            (0,
            i.useEffect)((function() {
                var e = l(c);
                m && e && !(0,
                r.isEqual)(m, e) && f(e)
            }
            ), [s, m, c, l]);
            var h = (null === s || void 0 === s ? void 0 : s.length) || 0;
            return {
                totalPages: a || Math.ceil(h / o),
                currentPage: c,
                onPageChanged: function(e) {
                    u(e),
                    f(l(e))
                },
                items: m
            }
        }
    },
    92691: function(e, n, t) {
        var r = t(41810)
          , i = (t(67294),
        t(92528))
          , o = t(80628)
          , a = t(93350)
          , s = t(85893)
          , l = function e(n) {
            var t = n.currentPage
              , a = n.totalPages
              , l = n.onPageChanged
              , u = (0,
            r.$G)().t
              , p = 1 !== t
              , m = t !== a
              , f = t - 1
              , h = t + 1;
            return a <= 1 ? (0,
            s.jsx)(s.Fragment, {}) : (0,
            s.jsxs)(e.Root, {
                className: "pagination",
                children: [(0,
                s.jsx)(d, {
                    onClick: function() {
                        return p && l(f)
                    },
                    children: (0,
                    s.jsx)(i.Z, {})
                }), (0,
                s.jsx)("li", {
                    children: (0,
                    s.jsx)(c, {
                        children: u("Page {{currentPage}} of {{totalPages}}", {
                            currentPage: t,
                            totalPages: a
                        })
                    })
                }), (0,
                s.jsx)(d, {
                    onClick: function() {
                        return m && l(h)
                    },
                    children: (0,
                    s.jsx)(o.Z, {})
                })]
            })
        };
        n.Z = l,
        l.Root = a.default.ul.withConfig({
            displayName: "Pagination__Root",
            componentId: "sc-o8u034-0"
        })(["padding-top:24px;display:flex;width:100%;justify-content:center;align-items:center;li{list-style-type:none;}"]);
        var d = a.default.li.withConfig({
            displayName: "Pagination__Control",
            componentId: "sc-o8u034-1"
        })(["border:1px solid #e9e9eb;box-sizing:border-box;border-radius:6px;width:40px;height:40px;display:flex;justify-content:center;align-items:center;cursor:pointer;svg{stroke:#8990a5;}&:hover{opacity:0.7;}"])
          , c = a.default.div.withConfig({
            displayName: "Pagination__Content",
            componentId: "sc-o8u034-2"
        })(["margin-left:16px;margin-right:16px;font-style:normal;font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#8990a5;"])
    },
    14820: function(e, n, t) {
        t.d(n, {
            b: function() {
                return X
            }
        });
        var r = t(83789)
          , i = t(53768)
          , o = t(47235)
          , a = t(47646)
          , s = t(41810)
          , l = t(67294)
          , d = t(75611)
          , c = t(9810)
          , u = t(93581)
          , p = t(2198);
        var m, f = t(95218), h = t(84325), v = t(2239), g = t(11163), k = t(62639), y = t(13360), _ = t(93350), b = t(79308), x = t(78984), T = t(56123);
        function w() {
            return (w = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function P(e) {
            return l.createElement("svg", w({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), m || (m = l.createElement("path", {
                d: "M14 8l4 4-4 4M18 12H7.67",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
        var D, S = t(92809), j = t(41664), U = t(75347), O = t(27123), C = t(55792), N = t(10219);
        function I() {
            return (I = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function V(e) {
            return l.createElement("svg", I({
                width: 18,
                height: 18,
                viewBox: "0 0 18 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), D || (D = l.createElement("path", {
                d: "M5.818 12.182l6.364-6.364m-6.364 0l6.364 6.364",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })))
        }
        var R = t(85893)
          , q = ["children", "onRemove"];
        function $(e, n) {
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
        function B(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? $(Object(t), !0).forEach((function(n) {
                    (0,
                    S.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : $(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function A(e) {
            var n = e.children
              , t = e.onRemove
              , r = (0,
            N.Z)(e, q);
            return (0,
            R.jsxs)(A.Root, B(B({}, r), {}, {
                children: [(0,
                R.jsx)(A.Content, {
                    children: n
                }), (0,
                R.jsx)(b.hU, {
                    onClick: function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        null === t || void 0 === t || t()
                    },
                    children: (0,
                    R.jsx)(V, {})
                })]
            }))
        }
        function Z(e) {
            var n = e.title
              , t = e.children;
            return (0,
            R.jsxs)(Z.Root, {
                children: [(0,
                R.jsx)(Z.Title, {
                    children: n
                }), (0,
                R.jsx)(Z.Content, {
                    children: t
                })]
            })
        }
        function L(e, n) {
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
        function E(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? L(Object(t), !0).forEach((function(n) {
                    (0,
                    S.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function z() {
            var e = (0,
            s.$G)().t
              , n = x.x.useContainer().pairs
              , t = (0,
            U.h5)({
                variables: {
                    ids: n.values
                }
            }).data
              , r = (0,
            l.useState)({})
              , i = r[0]
              , o = r[1];
            return (0,
            l.useEffect)((function() {
                o((function(e) {
                    return E(E({}, e), null === t || void 0 === t ? void 0 : t.pairs.reduce((function(e, n) {
                        return e[n.id] = n,
                        e
                    }
                    ), {}))
                }
                ))
            }
            ), [null === t || void 0 === t ? void 0 : t.pairs]),
            (0,
            R.jsx)(Z, {
                title: e("Pinned Pairs"),
                children: n.values.length > 0 ? n.values.map((function(e) {
                    var t = i[e]
                      , r = function() {
                        return n.remove(e)
                    };
                    return t ? (0,
                    R.jsx)(j.default, {
                        passHref: !0,
                        href: "/info/pairs/".concat(t.token0.id, "/").concat(t.token1.id),
                        children: (0,
                        R.jsxs)(z.Badge, {
                            forwardedAs: "a",
                            onRemove: r,
                            children: [(0,
                            R.jsx)(C.Z, {
                                address0: t.token0.id,
                                address1: t.token1.id,
                                symbol0: t.token0.symbol,
                                symbol1: t.token1.symbol
                            }), (0,
                            O.X)(t.token0.symbol, t.token1.symbol)]
                        })
                    }, e) : (0,
                    R.jsx)(z.Badge, {
                        onRemove: r,
                        children: (0,
                        R.jsx)(k.Od, {
                            animation: "waves",
                            width: "100%"
                        })
                    }, e)
                }
                )) : e("Pinned pairs will appear here.")
            })
        }
        A.Content = _.default.div.withConfig({
            displayName: "Badge__Content",
            componentId: "sc-1ihqy6q-0"
        })(["display:flex;align-items:center;flex:1;"]),
        A.Root = _.default.div.withConfig({
            displayName: "Badge__Root",
            componentId: "sc-1ihqy6q-1"
        })(["min-height:40px;background:#e6e6f6;border-radius:6px;display:flex;padding:0 8px;& > *:last-child{margin-left:8px;}"]),
        Z.Content = _.default.div.withConfig({
            displayName: "Section__Content",
            componentId: "sc-81sdv1-0"
        })(["", " color:#8990A5;display:grid;gap:16px;"], b.cp.Vz.regular),
        Z.Title = _.default.div.withConfig({
            displayName: "Section__Title",
            componentId: "sc-81sdv1-1"
        })(["", " color:#0B1359;"], b.cp.A6.medium),
        Z.Root = _.default.div.withConfig({
            displayName: "Section__Root",
            componentId: "sc-81sdv1-2"
        })(["display:grid;gap:8px;"]),
        z.Badge = (0,
        _.default)(A).withConfig({
            displayName: "PairsSection__Badge",
            componentId: "sc-18ffgde-0"
        })(["", "{font-weight:bold;font-size:10px;line-height:10px;letter-spacing:1px;color:#6c5dd3;}", "{margin-right:8px;}"], A.Content, C.Z.Root);
        var M = t(99638)
          , H = t(3033);
        function F(e, n) {
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
        function W(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? F(Object(t), !0).forEach((function(n) {
                    (0,
                    S.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function G() {
            var e = (0,
            s.$G)().t
              , n = x.x.useContainer().tokens
              , t = (0,
            U.bu)({
                variables: {
                    ids: n.values
                }
            }).data
              , r = (0,
            l.useState)({})
              , i = r[0]
              , o = r[1];
            return (0,
            l.useEffect)((function() {
                o((function(e) {
                    return W(W({}, e), null === t || void 0 === t ? void 0 : t.tokens.reduce((function(e, n) {
                        return e[n.id] = n,
                        e
                    }
                    ), {}))
                }
                ))
            }
            ), [null === t || void 0 === t ? void 0 : t.tokens]),
            (0,
            R.jsx)(Z, {
                title: e("Pinned Tokens"),
                children: n.values.length > 0 ? n.values.map((function(e) {
                    var t = i[e].symbol;
                    return (0,
                    R.jsx)(j.default, {
                        href: "/info/tokens/".concat(e),
                        passHref: !0,
                        children: (0,
                        R.jsxs)(G.Badge, {
                            forwardedAs: "a",
                            onRemove: function() {
                                return n.remove(e)
                            },
                            children: [(0,
                            R.jsx)(H._, {
                                address: e,
                                symbol: t
                            }), i[e] ? (0,
                            M.Rr)(t) : (0,
                            R.jsx)(k.Od, {
                                animation: "waves",
                                width: "40px"
                            })]
                        })
                    }, e)
                }
                )) : e("Pinned tokens will appear here.")
            })
        }
        function K() {
            var e = (0,
            s.$G)().t
              , n = x.x.useContainer()
              , t = n.setOpen
              , r = n.isOpen
              , i = (0,
            g.useRouter)();
            return (0,
            l.useEffect)((function() {
                return r ? document.body.style.setProperty("overflow", "hidden") : document.body.style.removeProperty("overflow"),
                function() {
                    document.body.style.removeProperty("overflow")
                }
            }
            ), [r]),
            (0,
            l.useEffect)((function() {
                var e = function() {
                    return t(!1)
                };
                return i.events.on("routeChangeComplete", e),
                function() {
                    return i.events.off("routeChangeComplete", e)
                }
            }
            ), [i.events, t]),
            r ? (0,
            R.jsx)(v.Z, {
                children: (0,
                R.jsxs)(K.Root, {
                    children: [(0,
                    R.jsx)(k.aV, {
                        show: !0,
                        zIndex: 0
                    }), (0,
                    R.jsxs)(K.Card, {
                        children: [(0,
                        R.jsxs)(K.Toolbar, {
                            children: [(0,
                            R.jsxs)(K.Title, {
                                children: [(0,
                                R.jsx)(T.Z, {
                                    color: "#6C5DD3"
                                }), e("Saved")]
                            }), (0,
                            R.jsx)(b.hU, {
                                onClick: function() {
                                    return t(!1)
                                },
                                children: (0,
                                R.jsx)(P, {})
                            })]
                        }), (0,
                        R.jsxs)(K.Content, {
                            children: [(0,
                            R.jsx)(z, {}), (0,
                            R.jsx)(G, {})]
                        })]
                    })]
                })
            }) : null
        }
        G.Badge = (0,
        _.default)(A).withConfig({
            displayName: "TokensSection__Badge",
            componentId: "sc-pvpap9-0"
        })(["", "{font-weight:bold;font-size:10px;line-height:10px;letter-spacing:1px;color:#6c5dd3;}", "{margin-right:8px;}"], A.Content, H._.Root),
        K.Content = _.default.div.withConfig({
            displayName: "BookmarksDrawer__Content",
            componentId: "sc-ukdn4s-0"
        })(["display:grid;gap:32px;overflow-y:auto;"]),
        K.Title = _.default.div.withConfig({
            displayName: "BookmarksDrawer__Title",
            componentId: "sc-ukdn4s-1"
        })(["display:grid;grid-auto-flow:column;align-items:center;justify-content:start;gap:8px;font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#0b1359;"]),
        K.Toolbar = _.default.div.withConfig({
            displayName: "BookmarksDrawer__Toolbar",
            componentId: "sc-ukdn4s-2"
        })(["display:flex;align-items:center;justify-content:space-between;"]),
        K.Card = _.default.div.withConfig({
            displayName: "BookmarksDrawer__Card",
            componentId: "sc-ukdn4s-3"
        })(["background:#ffffff;box-shadow:-4px 0px 12px rgba(185,189,208,0.4);position:fixed;width:203px;top:0;bottom:0;right:0;padding:36px 16px;display:grid;align-content:start;gap:40px;[data-show-nav='true'] &{top:", "px;}"], y.d);
        var Y = (0,
        _.keyframes)(["from{opacity:0;}to{opacity:1;}"]);
        K.Root = _.default.div.withConfig({
            displayName: "BookmarksDrawer__Root",
            componentId: "sc-ukdn4s-4"
        })(["animation:", " 400ms ease-in-out;"], Y);
        var J = _.default.div.withConfig({
            displayName: "Container",
            componentId: "sc-vzqz4-0"
        })(["padding:40px 0;margin:0 auto;max-width:1122px;width:100%;overflow-x:hidden;@media ", "{max-width:none;padding:32px 24px;}@media ", "{padding:24px;}@media ", "{padding:24px;}@media ", "{padding:24px 10px;}"], b.mq.down(b.AV.lg), b.mq.down(b.AV.md), b.mq.down(b.AV.md), b.mq.down(b.AV.sm));
        function Q(e) {
            var n = e.children
              , t = (0,
            s.$G)().t
              , m = (0,
            a.x)().chainId
              , v = (0,
            l.useMemo)((function() {
                return (0,
                h.f_)(m)
            }
            ), [m])
              , g = (0,
            l.useMemo)((function() {
                return v && function(e) {
                    var n = new d.u({
                        uri: e.url
                    })
                      , t = new d.u({
                        uri: e.blocklytics
                    });
                    return new c.f({
                        link: u.i.split((function(e) {
                            return e.getContext().blocklytics
                        }
                        ), t, n),
                        cache: new p.h({})
                    })
                }(v)
            }
            ), [v])
              , k = ((0,
            o.he)(),
            h.WS.reduce((function(e, n) {
                return e = [].concat((0,
                r.Z)(e), (0,
                r.Z)(n.chainIds))
            }
            ), []));
            return g ? (0,
            R.jsx)(x.x.Provider, {
                children: (0,
                R.jsxs)(i.e, {
                    client: g,
                    children: [(0,
                    R.jsx)(J, {
                        children: n
                    }), (0,
                    R.jsx)(K, {})]
                })
            }) : (0,
            R.jsx)(f.Z, {
                title: t("Analytics"),
                withBtn: !1,
                multipleChains: k
            })
        }
        var X = function(e) {
            return (0,
            R.jsx)(Q, {
                children: e
            })
        }
    },
    3033: function(e, n, t) {
        t.d(n, {
            _: function() {
                return c
            }
        });
        var r = t(10219)
          , i = t(47646)
          , o = t(92713)
          , a = t(62268)
          , s = t(93350)
          , l = t(85893)
          , d = ["address", "symbol", "size"];
        function c(e) {
            var n = e.address
              , t = e.symbol
              , s = e.size
              , u = ((0,
            r.Z)(e, d),
            (0,
            i.x)().chainId);
            return (0,
            l.jsx)(c.Root, {
                children: (0,
                l.jsx)(a.Z, {
                    size: s || "32px",
                    currency: (0,
                    o.z)(u, n, 0, t, "")
                })
            })
        }
        c.Root = s.default.div.withConfig({
            displayName: "AnalyticsCurrencyLogo__Root",
            componentId: "sc-q6i0nw-0"
        })(["--logo-size:32px;width:var(--logo-size);height:var(--logo-size);svg,img{object-fit:contain;width:100%;height:100%;border-radius:50%;}"])
    },
    56123: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r, i = t(67294);
        function o() {
            return (o = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function a(e) {
            return i.createElement("svg", o({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = i.createElement("path", {
                d: "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16zM15.5 12V3",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })))
        }
    },
    55792: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var r = t(93350)
          , i = t(3033)
          , o = t(85893);
        function a(e) {
            var n = e.address0
              , t = e.address1
              , r = e.symbol0
              , s = e.symbol1;
            return (0,
            o.jsxs)(a.Root, {
                children: [(0,
                o.jsx)(i._, {
                    address: n,
                    symbol: r
                }), (0,
                o.jsx)(i._, {
                    address: t,
                    symbol: s
                })]
            })
        }
        a.Root = r.default.div.withConfig({
            displayName: "PairCurrencyLogo__Root",
            componentId: "sc-9904y1-0"
        })(["display:flex;align-items:center;", "{&:nth-of-type(1){z-index:1;}&:nth-of-type(2){margin-left:calc(var(--logo-size) / -2.5);}}"], i._.Root)
    },
    67619: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return u
            }
        });
        var r = t(92809)
          , i = t(10219)
          , o = t(93350)
          , a = t(99638)
          , s = t(85893)
          , l = ["value"];
        function d(e, n) {
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
        function c(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? d(Object(t), !0).forEach((function(n) {
                    (0,
                    r.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function u(e) {
            var n = e.value
              , t = (0,
            i.Z)(e, l);
            return (0,
            s.jsx)(u.Root, c(c({
                "data-negative": n < 0 || void 0
            }, t), {}, {
                children: (0,
                a.T3)(n)
            }))
        }
        u.Root = o.default.span.withConfig({
            displayName: "Percent__Root",
            componentId: "sc-zjhp4v-0"
        })(["color:#24ba7b;&[data-negative]{color:#f04628;}"])
    },
    9462: function(e, n, t) {
        t.d(n, {
            ZP: function() {
                return T
            },
            Z3: function() {
                return w
            }
        });
        var r, i = t(10219), o = t(92809), a = t(75472), s = t.n(a), l = t(98913), d = t.n(l), c = t(67294), u = t(84325), p = t(62639), m = t(92691), f = t(14190), h = t(93350), v = t(79308);
        function g() {
            return (g = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function k(e) {
            return c.createElement("svg", g({
                width: 14,
                height: 14,
                viewBox: "0 0 14 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), r || (r = c.createElement("path", {
                d: "M7.355 8.646l2.792-2.793A.5.5 0 009.793 5H4.207a.5.5 0 00-.353.854l2.794 2.792a.5.5 0 00.707 0z",
                fill: "#8990A5"
            })))
        }
        var y = t(85893)
          , _ = ["items"];
        function b(e, n) {
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
        function x(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? b(Object(t), !0).forEach((function(n) {
                    (0,
                    o.Z)(e, n, t[n])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }
                ))
            }
            return e
        }
        function T(e) {
            var n = e.header
              , t = e.children
              , r = e.paginate
              , i = e.className
              , o = e.style;
            return (0,
            y.jsxs)(T.Root, {
                style: o || {},
                className: i || "table-root",
                children: [n, t, r && (0,
                y.jsx)(m.Z, x({}, r))]
            })
        }
        function w(e) {
            var n = e.items
              , t = e.sortFn
              , r = void 0 === t ? s() : t
              , o = e.pageLimit
              , a = void 0 === o ? u.pg : o
              , l = e.sortingOptions
              , d = e.maxPages
              , p = function(e) {
                var n = (0,
                c.useState)((null === e || void 0 === e ? void 0 : e.initialDirection) || "desc")
                  , t = n[0]
                  , r = n[1]
                  , i = (0,
                c.useState)(null === e || void 0 === e ? void 0 : e.initialKey)
                  , o = i[0]
                  , a = i[1]
                  , s = (0,
                c.useCallback)((function() {
                    return r((function(e) {
                        return "desc" === e ? "asc" : "desc"
                    }
                    ))
                }
                ), []);
                return {
                    direction: t,
                    key: o,
                    setKey: a,
                    setDirection: r,
                    toggleDirection: s
                }
            }(l)
              , m = (0,
            c.useMemo)((function() {
                return p.key && n && r ? r(n, p.key, p.direction) : n
            }
            ), [n, r, p.direction, p.key])
              , h = (0,
            f.u)({
                items: m,
                pageLimit: a,
                maxPages: d
            })
              , v = h.items
              , g = (0,
            i.Z)(h, _)
              , k = (0,
            c.useCallback)((function(e) {
                return a * (g.currentPage - 1) + e + 1
            }
            ), [a, g.currentPage])
              , y = g.onPageChanged;
            return (0,
            c.useEffect)((function() {
                y(1)
            }
            ), [p.key, p.direction]),
            {
                items: n && v,
                sorting: p,
                paginate: g,
                getItemNumber: k
            }
        }
        T.Row = h.default.div.withConfig({
            displayName: "Table__Row",
            componentId: "sc-1lurxq7-0"
        })(["display:grid;min-height:56px;& > *{padding:0 16px;&:last-child{text-align:right;justify-content:flex-end;}}@media ", "{& > *{padding:0 8px;}}"], v.mq.down(v.AV.sm)),
        T.HeaderRow = (0,
        h.default)(T.Row).withConfig({
            displayName: "Table__HeaderRow",
            componentId: "sc-1lurxq7-1"
        })(["border-radius:6px;overflow:hidden;"]),
        T.ItemRow = (0,
        h.default)(T.Row).withConfig({
            displayName: "Table__ItemRow",
            componentId: "sc-1lurxq7-2"
        })(["border-bottom:1px solid #ebedf9;a&{&:hover{background:rgb(247,248,253);}}"]),
        T.Cell = h.default.div.withConfig({
            displayName: "Table__Cell",
            componentId: "sc-1lurxq7-3"
        })(["display:inline-flex;align-items:center;"]),
        T.HeaderCell = (0,
        h.default)(T.Cell).withConfig({
            displayName: "Table__HeaderCell",
            componentId: "sc-1lurxq7-4"
        })(["font-weight:bold;font-size:12px;line-height:14px;letter-spacing:0.8px;text-transform:uppercase;color:#0b1359;overflow-x:auto;background:#ebedf9;"]),
        T.ItemCell = (0,
        h.default)(T.Cell).withConfig({
            displayName: "Table__ItemCell",
            componentId: "sc-1lurxq7-5"
        })(["font-weight:normal;font-size:14px;line-height:20px;letter-spacing:0.001em;color:#0b1359;@media ", "{", ";}"], v.mq.down(v.AV.sm), v.cp.Vz.regular),
        T.Root = (0,
        h.default)(v.Zb).withConfig({
            displayName: "Table__Root",
            componentId: "sc-1lurxq7-6"
        })(["box-shadow:0px 6px 12px rgba(185,189,208,0.4);padding:8px;& > .pagination{margin-bottom:24px;}"]),
        T.SortableHeaderCell = (0,
        h.default)((function(e) {
            var n = e.sortKey === e.sorting.key;
            return (0,
            y.jsxs)(T.HeaderCell, {
                onClick: function() {
                    n ? e.sorting.toggleDirection() : e.sorting.setKey(e.sortKey)
                },
                as: "button",
                className: e.className,
                "data-direction": n ? e.sorting.direction : void 0,
                style: e.style || {},
                children: [e.children, n && (0,
                y.jsx)(k, {})]
            })
        }
        )).withConfig({
            displayName: "Table__SortableHeaderCell",
            componentId: "sc-1lurxq7-7"
        })(["text-align:left;cursor:pointer;border:none;&:hover{background:rgb(228,230,247);}&[data-direction='asc']{svg{transform:rotate(180deg);}}& > svg{margin-left:4px;}"]),
        T.ItemsLoader = (0,
        h.default)((function(e) {
            var n = e.className;
            return (0,
            y.jsx)(y.Fragment, {
                children: d()(3).map((function(e) {
                    return (0,
                    y.jsx)(T.ItemRow, {
                        className: n,
                        children: (0,
                        y.jsx)(p.Od, {
                            animation: "waves"
                        })
                    }, e)
                }
                ))
            })
        }
        )).withConfig({
            displayName: "Table__ItemsLoader",
            componentId: "sc-1lurxq7-8"
        })(["position:relative;& > *{position:absolute;left:0;top:0;bottom:0;right:0;}"])
    },
    67061: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return l
            }
        });
        var r = t(41810)
          , i = t(41664)
          , o = t(93350)
          , a = t(79308)
          , s = t(85893);
        function l(e) {
            var n = e.children
              , t = e.seeAllHref
              , o = (0,
            r.$G)().t;
            return (0,
            s.jsxs)(l.Root, {
                children: [(0,
                s.jsx)(l.Title, {
                    children: n
                }), t && (0,
                s.jsx)(i.default, {
                    passHref: !0,
                    href: t,
                    children: (0,
                    s.jsx)(a.zx, {
                        as: "a",
                        variant: "outlined",
                        size: "small",
                        children: o("See all")
                    })
                })]
            })
        }
        l.Title = o.default.div.withConfig({
            displayName: "TableTitle__Title",
            componentId: "sc-dvjp96-0"
        })(["font-weight:500;font-size:24px;line-height:30px;letter-spacing:0.1px;color:#0b1359;"]),
        l.Root = o.default.div.withConfig({
            displayName: "TableTitle__Root",
            componentId: "sc-dvjp96-1"
        })(["display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;"])
    },
    87692: function(e, n, t) {
        var r = t(93350)
          , i = t(79308)
          , o = r.default.div.withConfig({
            displayName: "Toolbar",
            componentId: "sc-du10op-0"
        })(["display:grid;gap:24px;margin-bottom:40px;@media ", "{margin-bottom:32px;}@media ", "{gap:16px;}@media ", "{margin-bottom:24px;}"], i.mq.down(i.AV.lg), i.mq.down(i.AV.md), i.mq.down(i.AV.sm));
        n.Z = o
    },
    77370: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return $
            }
        });
        var r = t(93350)
          , i = t(79308)
          , o = t(78984)
          , a = t(56123)
          , s = r.default.button.withConfig({
            displayName: "ToolbarAction",
            componentId: "sc-16d341e-0"
        })(["padding:12px;background:none;border:none;border-radius:6px;cursor:pointer;display:inline-flex;align-items:center;@media ", "{padding:8px;}"], i.mq.down(i.AV.sm))
          , l = t(85893);
        function d() {
            var e = o.x.useContainer().setOpen;
            return (0,
            l.jsx)(s, {
                onClick: function() {
                    return e(!0)
                },
                children: (0,
                l.jsx)(a.Z, {
                    color: "#8990A5"
                })
            })
        }
        var c, u, p = t(67294);
        function m() {
            return (m = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function f(e) {
            return p.createElement("svg", m({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), c || (c = p.createElement("g", {
                clipPath: "url(#search_svg__clip0_8680_2151)",
                stroke: "#6C5DD3",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            }, p.createElement("path", {
                d: "M18.25 11a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0zM21 21l-4.35-4.35"
            }))), u || (u = p.createElement("defs", null, p.createElement("clipPath", {
                id: "search_svg__clip0_8680_2151"
            }, p.createElement("path", {
                fill: "#fff",
                d: "M0 0h24v24H0z"
            })))))
        }
        var h = t(41810)
          , v = t(41664)
          , g = t(62639)
          , k = t(83789)
          , y = t(30266)
          , _ = t(80318)
          , b = t(809)
          , x = t.n(b)
          , T = t(96486)
          , w = t(48403)
          , P = t.n(w);
        var D = t(75347);
        function S(e) {
            var n = (0,
            D.Hq)()
              , t = (0,
            _.Z)(n, 2)
              , r = t[0]
              , i = t[1].data
              , o = (0,
            D.$F)()
              , a = (0,
            _.Z)(o, 2)
              , s = a[0]
              , l = a[1].data
              , d = (0,
            p.useCallback)(function() {
                var e = (0,
                y.Z)(x().mark((function e(n) {
                    var t, i, o, a, l, d;
                    return x().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return t = n.toUpperCase(),
                                i = P()(n),
                                o = n.toLowerCase(),
                                e.next = 5,
                                r({
                                    variables: {
                                        symbol: t,
                                        name: i,
                                        id: o
                                    }
                                });
                            case 5:
                                return a = e.sent,
                                l = a.data,
                                d = (0,
                                T.uniq)([].concat((0,
                                k.Z)(l.asAddress), (0,
                                k.Z)(l.asSymbol), (0,
                                k.Z)(l.asName)).map((function(e) {
                                    return e.id
                                }
                                ))),
                                e.next = 10,
                                s({
                                    variables: {
                                        tokens: d,
                                        id: o
                                    }
                                });
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }(), [s, r])
              , c = function(e, n) {
                var t = (0,
                p.useState)(e)
                  , r = t[0]
                  , i = t[1];
                return (0,
                p.useEffect)((function() {
                    var t = setTimeout((function() {
                        i(e)
                    }
                    ), n);
                    return function() {
                        clearTimeout(t)
                    }
                }
                ), [e, n]),
                r
            }(e, 400);
            return (0,
            p.useEffect)((function() {
                c && d(c)
            }
            ), [c, d]),
            (0,
            p.useMemo)((function() {
                return {
                    tokens: i && (0,
                    T.uniqBy)([].concat((0,
                    k.Z)(i.asAddress), (0,
                    k.Z)(i.asSymbol), (0,
                    k.Z)(i.asName)), "id"),
                    pairs: l && (0,
                    T.uniqBy)([].concat((0,
                    k.Z)(l.asAddress), (0,
                    k.Z)(l.as0), (0,
                    k.Z)(l.as1)), "id")
                }
            }
            ), [l, i])
        }
        var j, U = t(27123), O = t(3033), C = t(55792);
        function N() {
            return (N = Object.assign || function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t)
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function I(e) {
            return p.createElement("svg", N({
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, e), j || (j = p.createElement("path", {
                d: "M7.758 16.243l8.485-8.486m-8.485 0l8.485 8.486",
                stroke: "#8990A5",
                strokeWidth: 1.5,
                strokeLinecap: "round"
            })))
        }
        function V(e) {
            var n = e.href
              , t = (0,
            h.$G)().t;
            return (0,
            l.jsx)(v.default, {
                passHref: !0,
                href: n,
                children: (0,
                l.jsx)(V.Root, {
                    children: t("See more...")
                })
            })
        }
        function R(e) {
            var n = e.isOpen
              , t = e.onClose
              , r = (0,
            h.$G)().t
              , o = (0,
            p.useState)("")
              , a = o[0]
              , s = o[1]
              , d = (0,
            p.useRef)(null)
              , c = S(a)
              , u = c.pairs
              , m = c.tokens
              , k = (0,
            p.useMemo)((function() {
                return a ? u && m ? 0 === u.length && 0 === m.length ? (0,
                l.jsx)(R.Fallback, {
                    children: r("No result")
                }) : (0,
                l.jsxs)(l.Fragment, {
                    children: [u.length > 0 && (0,
                    l.jsxs)("div", {
                        children: [(0,
                        l.jsx)(R.ListTitle, {
                            children: r("Pairs")
                        }), (0,
                        l.jsxs)(R.List, {
                            children: [u.slice(0, 3).map((function(e) {
                                return (0,
                                l.jsx)("li", {
                                    children: (0,
                                    l.jsx)(v.default, {
                                        passHref: !0,
                                        href: "/info/pairs/".concat(e.token0.id, "/").concat(e.token1.id),
                                        children: (0,
                                        l.jsxs)("a", {
                                            children: [(0,
                                            l.jsx)(C.Z, {
                                                address0: e.token0.id,
                                                address1: e.token1.id,
                                                symbol0: e.token0.symbol,
                                                symbol1: e.token1.symbol
                                            }), (0,
                                            U.X)(e.token0.symbol, e.token1.symbol)]
                                        })
                                    })
                                }, e.id)
                            }
                            )), (0,
                            l.jsx)(V, {
                                href: "/info/pairs"
                            })]
                        })]
                    }), m.length > 0 && (0,
                    l.jsxs)("div", {
                        children: [(0,
                        l.jsx)(R.ListTitle, {
                            children: r("Tokens")
                        }), (0,
                        l.jsxs)(R.List, {
                            children: [m.slice(0, 3).map((function(e) {
                                return (0,
                                l.jsx)("li", {
                                    children: (0,
                                    l.jsx)(v.default, {
                                        passHref: !0,
                                        href: "/info/tokens/".concat(e.id),
                                        children: (0,
                                        l.jsxs)("a", {
                                            children: [(0,
                                            l.jsx)(O._, {
                                                address: e.id,
                                                symbol: e.symbol
                                            }), e.name]
                                        })
                                    })
                                }, e.id)
                            }
                            )), (0,
                            l.jsx)(V, {
                                href: "/info/tokens"
                            })]
                        })]
                    })]
                }) : (0,
                l.jsx)(g.Od, {
                    height: 100
                }) : null
            }
            ), [u, a, r, m]);
            return (0,
            p.useEffect)((function() {
                var e;
                n && (null === (e = d.current) || void 0 === e || e.focus())
            }
            ), [n]),
            (0,
            l.jsxs)(R.Root, {
                "data-open": n,
                children: [(0,
                l.jsxs)(R.InputWrapper, {
                    children: [(0,
                    l.jsx)(f, {}), (0,
                    l.jsx)("input", {
                        ref: d,
                        value: a,
                        onChange: function(e) {
                            return s(e.target.value)
                        },
                        placeholder: r("Search pairs and tokens...")
                    }), (0,
                    l.jsx)(i.hU, {
                        onClick: t,
                        children: (0,
                        l.jsx)(I, {})
                    })]
                }), k && (0,
                l.jsx)(R.Content, {
                    children: k
                })]
            })
        }
        function q() {
            var e = (0,
            p.useState)(!1)
              , n = e[0]
              , t = e[1];
            return (0,
            l.jsxs)(q.Root, {
                children: [(0,
                l.jsx)(q.Action, {
                    onClick: function() {
                        return t(!0)
                    },
                    children: (0,
                    l.jsx)(f, {})
                }), (0,
                l.jsx)(R, {
                    isOpen: n,
                    onClose: function() {
                        return t(!1)
                    }
                })]
            })
        }
        function $() {
            return (0,
            l.jsxs)($.Root, {
                children: [(0,
                l.jsx)(q, {}), (0,
                l.jsx)(d, {})]
            })
        }
        V.Root = r.default.a.withConfig({
            displayName: "SeeMore__Root",
            componentId: "sc-17yi7mq-0"
        })(["background:#e6e6f6;border-radius:6px;padding:7px 8px;display:inline-flex;font-weight:bold;font-size:12px;line-height:10px;letter-spacing:0.01em;color:#6c5dd3;"]),
        R.Fallback = r.default.div.withConfig({
            displayName: "ToolbarSearchCard__Fallback",
            componentId: "sc-1cy8vhs-0"
        })(["font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#8990a5;"]),
        R.ListTitle = r.default.div.withConfig({
            displayName: "ToolbarSearchCard__ListTitle",
            componentId: "sc-1cy8vhs-1"
        })(["font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#8990a5;padding-bottom:9px;border-bottom:1px solid #ebedf9;"]),
        R.List = r.default.ul.withConfig({
            displayName: "ToolbarSearchCard__List",
            componentId: "sc-1cy8vhs-2"
        })(["padding:16px 0;& > li{list-style-type:none;", " color:#0B1359;margin-bottom:16px;& > a{display:grid;grid-auto-flow:column;justify-content:start;align-items:center;gap:8px;}}"], i.cp.A6.medium),
        R.ListTitle = r.default.div.withConfig({
            displayName: "ToolbarSearchCard__ListTitle",
            componentId: "sc-1cy8vhs-3"
        })(["font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#8990a5;padding-bottom:9px;border-bottom:1px solid #ebedf9;"]),
        R.Content = r.default.div.withConfig({
            displayName: "ToolbarSearchCard__Content",
            componentId: "sc-1cy8vhs-4"
        })(["padding:32px 24px;display:grid;gap:24px;"]),
        R.InputWrapper = (0,
        r.default)(i.Zb).withConfig({
            displayName: "ToolbarSearchCard__InputWrapper",
            componentId: "sc-1cy8vhs-5"
        })(["height:56px;box-shadow:0px 6px 12px rgba(185,189,208,0.4);position:relative;input{font-weight:500;font-size:14px;line-height:20px;letter-spacing:0.1px;color:#0b1359;height:100%;border:none;outline:none;width:100%;height:100%;padding:0 56px;}& > *{&:first-child{position:absolute;top:50%;left:12px;transform:translateY(-50%);z-index:1;}&:last-child{position:absolute;top:50%;right:16px;transform:translateY(-50%);z-index:1;}}"]),
        R.Root = (0,
        r.default)(i.Zb).withConfig({
            displayName: "ToolbarSearchCard__Root",
            componentId: "sc-1cy8vhs-6"
        })(["position:absolute;top:0;right:0;width:0;box-shadow:0px 6px 12px rgba(185,189,208,0.4);z-index:10;overflow:hidden;transition:width 180ms ease-in-out;&[data-open='true']{width:100%;}"]),
        q.Action = (0,
        r.default)(s).withConfig({
            displayName: "ToolbarSearch__Action",
            componentId: "sc-1ggtnoq-0"
        })(["background:#e6e6f6;"]),
        q.Root = r.default.div.withConfig({
            displayName: "ToolbarSearch__Root",
            componentId: "sc-1ggtnoq-1"
        })([""]),
        $.Root = r.default.div.withConfig({
            displayName: "ToolbarActions__Root",
            componentId: "sc-wlwx61-0"
        })(["display:flex;align-items:center;& > * + *{margin-left:16px;}@media ", "{& > * + *{margin-left:8px;}}"], i.mq.down(i.AV.sm))
    },
    45089: function(e, n, t) {
        var r = t(93350).default.div.withConfig({
            displayName: "ToolbarRow",
            componentId: "sc-ooxnt1-0"
        })(["display:grid;grid-auto-flow:column;justify-content:space-between;align-items:center;position:relative;gap:8px;"]);
        n.Z = r
    },
    46230: function(e, n, t) {
        var r = t(93350)
          , i = t(79308)
          , o = r.default.div.withConfig({
            displayName: "ToolbarTitle",
            componentId: "sc-vo52h6-0"
        })(["", " color:#0B1359;@media ", "{", "}@media ", "{", "}"], i.cp.h2, i.mq.down(i.AV.md), i.cp.h4, i.mq.down(i.AV.sm), i.cp.h5);
        n.Z = o
    },
    78984: function(e, n, t) {
        t.d(n, {
            x: function() {
                return d
            }
        });
        var r = t(83789)
          , i = t(96486)
          , o = t(82569)
          , a = t.n(o)
          , s = t(67294)
          , l = t(73549);
        var d = (0,
        t(88305).f)((function() {
            var e = (0,
            s.useState)(!1);
            return {
                isOpen: e[0],
                setOpen: e[1],
                tokens: c("tokens"),
                pairs: c("pairs")
            }
        }
        ));
        function c(e) {
            var n = "bookmarks:".concat(e)
              , t = (0,
            s.useState)(function(e) {
                if (!(0,
                l.j)())
                    return [];
                var n = localStorage.getItem(e);
                try {
                    var t = JSON.parse(n);
                    return Array.isArray(t) ? t : []
                } catch (r) {
                    return []
                }
            }(n))
              , o = t[0]
              , d = t[1]
              , c = (0,
            s.useCallback)((function(e) {
                return o.includes(e)
            }
            ), [o])
              , u = (0,
            s.useCallback)((function(e) {
                return d((function(n) {
                    return a()(n, e)
                }
                ))
            }
            ), [d])
              , p = (0,
            s.useCallback)((function(e) {
                return d((function(n) {
                    return (0,
                    i.uniq)([].concat((0,
                    r.Z)(n), [e]))
                }
                ))
            }
            ), [d]);
            return (0,
            s.useEffect)((function() {
                localStorage.setItem(n, JSON.stringify(o))
            }
            ), [n, o]),
            {
                values: o,
                isBookmarked: c,
                remove: u,
                add: p
            }
        }
    },
    27123: function(e, n, t) {
        t.d(n, {
            X: function() {
                return i
            }
        });
        var r = t(99638);
        function i(e, n) {
            return (0,
            r.Rr)(e) + "-" + (0,
            r.Rr)(n)
        }
    },
    95218: function(e, n, t) {
        var r = t(82212)
          , i = t(47235)
          , o = t(47646)
          , a = t(10247)
          , s = (t(67294),
        t(24451))
          , l = t(93350)
          , d = t(85893)
          , c = function e(n) {
            var t = n.children
              , l = n.title
              , c = n.withBtn
              , u = void 0 === c || c
              , p = n.text
              , m = n.multipleChains
              , f = n.content
              , h = (0,
            s.$G)().t
              , v = (0,
            i.he)()
              , g = (0,
            o.x)()
              , k = g.updateChainId
              , y = g.chainId
              , _ = m || [r.a_.MAINNET, r.a_.BSCTESTNET]
              , b = y && _.includes(y)
              , x = function(e, n) {
                var t = (0,
                s.$G)().t;
                if (e && n) {
                    var r, i = null === n || void 0 === n || null === (r = n.reduce((function(n, t) {
                        return e.includes(t.chainId) && (n += "".concat(null === t || void 0 === t ? void 0 : t.title, ",")),
                        n
                    }
                    ), "")) || void 0 === r ? void 0 : r.slice(0, -1);
                    return "".concat(t("This section is available on"), " ").concat(i, ".\n        \n ").concat(t("Please switch the network"))
                }
                return null
            }(m, v);
            return b ? (0,
            d.jsxs)(d.Fragment, {
                children: [" ", t || "", " "]
            }) : (0,
            d.jsx)(e.Wrapper, {
                children: (0,
                d.jsxs)(e.Message, {
                    children: [(0,
                    d.jsx)("h2", {
                        children: l
                    }), (0,
                    d.jsx)("p", {
                        children: x || p || h("This section is only available on Binance Smart Chain. Please switch the network")
                    }), u && (0,
                    d.jsxs)(e.Button, {
                        onClick: function() {
                            k(v[0].chainId)
                        },
                        children: [(0,
                        d.jsx)(a.Z, {}), (0,
                        d.jsx)("p", {
                            className: "text",
                            children: h("Connect Binance Smart Chain")
                        })]
                    }), f || ""]
                })
            })
        };
        c.Wrapper = l.default.div.withConfig({
            displayName: "AvailableChain__Wrapper",
            componentId: "sc-1jzq9hs-0"
        })(["width:100%;display:flex;justify-content:center;margin-top:153px;margin-bottom:153px;"]),
        c.Message = l.default.div.withConfig({
            displayName: "AvailableChain__Message",
            componentId: "sc-1jzq9hs-1"
        })(["width:738px;min-height:272px;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#ffffff;border-radius:6px;h2{font-style:normal;font-weight:bold;font-size:32px;line-height:40px;text-align:center;letter-spacing:0.3px;color:#0b1359;margin-bottom:8px;}p{font-weight:500;font-size:18px;line-height:24px;text-align:center;letter-spacing:0.3px;color:#8990a5;margin-bottom:32px;max-width:500px;}@media screen and (max-width:768px){padding:10px 24px;}@media screen and (max-width:480px){width:100%;p{font-size:14px;}}"]),
        c.Button = l.default.button.withConfig({
            displayName: "AvailableChain__Button",
            componentId: "sc-1jzq9hs-2"
        })(["border:1px solid #6c5dd3;box-sizing:border-box;border-radius:6px;padding:14px 24px 14px 24px;background:transparent;cursor:pointer;display:flex;align-items:center;max-width:303px;max-height:48px;p{margin:0;padding-left:16px;font-style:normal;font-weight:bold;font-size:14px;line-height:20px;letter-spacing:1px;color:#6c5dd3;white-space:nowrap;}transition:background-color 200ms ease-in-out,color 200ms ease-in-out;:hover{background-color:#6c5dd3;> *{color:white;}}@media screen and (max-width:480px){width:100%;p{font-size:12px;white-space:inherit;}}"]),
        n.Z = c
    }
}]);
