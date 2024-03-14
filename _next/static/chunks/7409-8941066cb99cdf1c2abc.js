"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7409], {
    13672: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var a = [{
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address"
            }],
            name: "AllowedTokenAdded",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address"
            }],
            name: "AllowedTokenRemoved",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "user",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "Deposit",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "tokenType",
                type: "uint256"
            }],
            name: "LPTokenAdded",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "oldToken",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newToken",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "oldType",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "newType",
                type: "uint256"
            }],
            name: "LPTokenChanged",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "OwnershipTransferred",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "oldRouter",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "newRouter",
                type: "address"
            }],
            name: "RouterChanged",
            type: "event"
        }, {
            inputs: [{
                internalType: "address",
                name: "_token",
                type: "address"
            }],
            name: "addAllowedToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_token",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_tokenType",
                type: "uint16"
            }],
            name: "addLPToken",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_idx",
                type: "uint256"
            }, {
                internalType: "address",
                name: "_token",
                type: "address"
            }, {
                internalType: "uint16",
                name: "_tokenType",
                type: "uint16"
            }],
            name: "changeLPToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_newRouter",
                type: "address"
            }],
            name: "changeRouter",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_pid",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            }],
            name: "deposit",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_idx",
                type: "uint256"
            }],
            name: "removeAllowedToken",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "tokenAddress",
                type: "address"
            }, {
                internalType: "address",
                name: "beneficiary",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }],
            name: "transferAnyERC20Token",
            outputs: [{
                internalType: "bool",
                name: "success",
                type: "bool"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "newOwner",
                type: "address"
            }],
            name: "transferOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address[]",
                name: "_lptokens",
                type: "address[]"
            }, {
                internalType: "uint8[]",
                name: "_types",
                type: "uint8[]"
            }, {
                internalType: "address",
                name: "_ourrouter",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "allowedTokens",
            outputs: [{
                internalType: "contract IERC20",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getAllowedTokensLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_token0",
                type: "address"
            }, {
                internalType: "address",
                name: "_token1",
                type: "address"
            }],
            name: "isPairAvailable",
            outputs: [{
                internalType: "uint16",
                name: "",
                type: "uint16"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "_pid",
                type: "uint256"
            }],
            name: "lpTokenDetailedInfo",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            name: "lpTokensInfo",
            outputs: [{
                internalType: "address",
                name: "lpToken",
                type: "address"
            }, {
                internalType: "uint16",
                name: "tokenType",
                type: "uint16"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "lpTokensInfoLength",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "ourRouter",
            outputs: [{
                internalType: "contract IUniswapV2Router01",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "owner",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }]
    },
    29972: function(e, t, n) {
        n.d(t, {
            gY: function() {
                return a
            },
            YL: function() {
                return i
            },
            k: function() {
                return s
            }
        });
        var a = JSON.parse('[{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"addMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_members","type":"address[]"}],"name":"addMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stablecoin","type":"address"},{"internalType":"uint256","name":"_type","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nft","type":"address"},{"internalType":"address","name":"_founderDetails","type":"address"},{"internalType":"uint256[]","name":"_nftTypes","type":"uint256[]"},{"internalType":"address[]","name":"_stablecoins","type":"address[]"},{"internalType":"address[]","name":"_whitelist","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"nftType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"items","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Bought","type":"event"},{"inputs":[{"internalType":"address","name":"_newFounder","type":"address"}],"name":"changeFounder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"}],"name":"MemberAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"member","type":"address"}],"name":"MemberRemoved","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"removeMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stablecoin","type":"address"}],"name":"repairToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bought","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"founderDetails","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_member","type":"address"}],"name":"isMember","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"resolvedNFTs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"resolvedStablecoins","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')
          , s = "0xF92dC46c2F373480cbC7Dacb0A003C4a2c23ea78"
          , i = "0x2991cc4aB9286416b7925916aE6bD2Dc5AF7bAcb"
    },
    17409: function(e, t, n) {
        n.d(t, {
            cq: function() {
                return C
            },
            MQ: function() {
                return S
            },
            E4: function() {
                return Z
            },
            Ey: function() {
                return I
            },
            y8: function() {
                return P
            },
            lL: function() {
                return O
            },
            t0: function() {
                return F
            },
            Ib: function() {
                return B
            },
            kY: function() {
                return N
            },
            Hj: function() {
                return D
            }
        });
        var a, s = n(82212), i = (n(85633),
        n(67294)), u = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'), p = JSON.parse('[{"inputs":[{"internalType":"address","name":"_almToken","type":"address"},{"internalType":"address","name":"_nft","type":"address"},{"internalType":"address","name":"_founderWallet","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"EntranceAllowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"FounderSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"TicketBought","type":"event"},{"inputs":[],"name":"TICKET_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"alm","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"founder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasTicket","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyTicket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"}],"name":"passFree","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_accounts","type":"address[]"}],"name":"passFreeBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_founder","type":"address"}],"name":"setFounder","outputs":[],"stateMutability":"nonpayable","type":"function"}]'), y = n(59083), r = n(206), d = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'), o = n(13672), l = n(8198), m = n(50543), f = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'), c = new l.vU(m), T = (new l.vU(f),
        c), b = n(29972), _ = n(92809), v = n(82343), w = JSON.parse('[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"outA"},{"type":"uint256","name":"outB"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function"},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function"},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'), M = JSON.parse('[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function"},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function"},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function"},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function"},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]');
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(n), !0).forEach((function(t) {
                    (0,
                    _.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        k(k({}, (0,
        v.L)().reduce((function(e, t) {
            return k(k({}, e), {}, (0,
            _.Z)({}, t, ""))
        }
        ), {})), {}, (a = {},
        (0,
        _.Z)(a, s.a_.MAINNET, "0xC07d4604400139108BbdB3076636365A385879eF"),
        (0,
        _.Z)(a, s.a_.BSCTESTNET, "0x07899d5bE4B700Db9bf345530fF849a530EF79c3"),
        a)),
        new l.vU(M),
        new l.vU(w);
        var h = n(93578)
          , E = n(91162)
          , g = n(86264)
          , A = n(85754);
        function C(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
              , a = (0,
            A.a)()
              , s = a.account
              , u = (0,
            g.D)();
            return (0,
            i.useMemo)((function() {
                if (!e || !t)
                    return null;
                try {
                    return (0,
                    h.uN)(e, t, u, n && s ? s : void 0)
                } catch (a) {
                    return console.error("Failed to get contract", a),
                    null
                }
            }
            ), [t, s, e, u, n])
        }
        function S(e) {
            return C(e, u)
        }
        function N(e) {
            return C(e, o.Z, !0)
        }
        function O() {
            return C(b.k, b.gY, !0)
        }
        function B(e, t) {
            return C(e, T, t)
        }
        function I(e, t) {
            return C(e, d, t)
        }
        function D(e) {
            var t = (0,
            A.a)().chainId;
            return C(t ? s.DX[t].address : void 0, r.Kx, e)
        }
        function F(e, t) {
            return C(e, r.yM, t)
        }
        var P = function() {
            var e = C((0,
            E.Oc)(), y);
            return (0,
            i.useMemo)((function() {
                return e
            }
            ), [e])
        }
          , Z = function() {
            var e = C((0,
            E.Ng)(), p);
            return (0,
            i.useMemo)((function() {
                return e
            }
            ), [e])
        }
    },
    91162: function(e, t, n) {
        n.d(t, {
            Kn: function() {
                return h
            },
            Ng: function() {
                return g
            },
            Oc: function() {
                return E
            }
        });
        var a, s, i, u, p, y, r, d, o, l, m, f, c, T, b, _, v, w = n(82212), M = n(92809), x = {
            cake: (a = {},
            (0,
            M.Z)(a, w.a_.BSCTESTNET, "0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe"),
            (0,
            M.Z)(a, w.a_.MAINNET, "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"),
            a),
            syrup: (s = {},
            (0,
            M.Z)(s, w.a_.BSCTESTNET, "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9"),
            (0,
            M.Z)(s, w.a_.MAINNET, "0x009cF7bC57584b7998236eff51b98A168DceA9B0"),
            s),
            masterChef: (i = {},
            (0,
            M.Z)(i, w.a_.BSCTESTNET, "0x13400440c93e31FBaD38daAA9638Af82df5A7e86"),
            (0,
            M.Z)(i, w.a_.MAINNET, "0x2ff14D02002C1eD2b1fBf8987D1f7B1d9904a922"),
            i),
            farmingTicketWindow: (u = {},
            (0,
            M.Z)(u, w.a_.BSCTESTNET, "0x3Ac855483A34C5B563625DA65D9bae3DE72EcaC7"),
            (0,
            M.Z)(u, w.a_.MAINNET, "0x2B563A32F11365902CceacE27F4fe6253B09fb3a"),
            u),
            sousChef: (p = {},
            (0,
            M.Z)(p, w.a_.BSCTESTNET, "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a"),
            (0,
            M.Z)(p, w.a_.MAINNET, "0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95"),
            p),
            wbnb: (y = {},
            (0,
            M.Z)(y, w.a_.BSCTESTNET, "0xae13d989dac2f0debff460ac112a837c89baa7cd"),
            (0,
            M.Z)(y, w.a_.MAINNET, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"),
            y),
            lottery: (r = {},
            (0,
            M.Z)(r, w.a_.BSCTESTNET, "0x99c2EcD51d52c036B00130d882Bc65f20Fdecf9f"),
            (0,
            M.Z)(r, w.a_.MAINNET, "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91"),
            r),
            lotteryNFT: (d = {},
            (0,
            M.Z)(d, w.a_.BSCTESTNET, "0x8175c10383511b3a1C68f9dB222dc14A19CC950e"),
            (0,
            M.Z)(d, w.a_.MAINNET, "0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1"),
            d),
            mulltiCall: (o = {},
            (0,
            M.Z)(o, w.a_.MAINNET, "0x1ee38d535d541c55c9dae27b12edf090c608e6fb"),
            (0,
            M.Z)(o, w.a_.BSCTESTNET, "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412"),
            o),
            busd: (l = {},
            (0,
            M.Z)(l, w.a_.MAINNET, "0xe9e7cea3dedca5984780bafc599bd69add087d56"),
            (0,
            M.Z)(l, w.a_.BSCTESTNET, ""),
            l),
            ust: (m = {},
            (0,
            M.Z)(m, w.a_.MAINNET, "0x23396cF899Ca06c4472205fC903bDB4de249D6fC"),
            (0,
            M.Z)(m, w.a_.BSCTESTNET, ""),
            m),
            pancakeProfile: (f = {},
            (0,
            M.Z)(f, w.a_.MAINNET, "0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a"),
            (0,
            M.Z)(f, w.a_.BSCTESTNET, "0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A"),
            f),
            pancakeRabbits: (c = {},
            (0,
            M.Z)(c, w.a_.MAINNET, "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07"),
            (0,
            M.Z)(c, w.a_.BSCTESTNET, "0x60935F36e4631F73f0f407e68642144e07aC7f5E"),
            c),
            rabbitMintingFarm: (T = {},
            (0,
            M.Z)(T, w.a_.MAINNET, "0x1C99222F857C1d72234703eC5b9Ed88089Bd7091"),
            (0,
            M.Z)(T, w.a_.BSCTESTNET, "0x8f4739a48883Fdd89b65DC245dD5774fC8f44a67"),
            T),
            eth: (b = {},
            (0,
            M.Z)(b, w.a_.MAINNET, "0x2170ed0880ac9a755fd29b2688956bd959f933f8"),
            (0,
            M.Z)(b, w.a_.BSCTESTNET, ""),
            b),
            claimRefund: (_ = {},
            (0,
            M.Z)(_, w.a_.MAINNET, "0xE7e53A7e9E3Cf6b840f167eF69519175c497e149"),
            (0,
            M.Z)(_, w.a_.BSCTESTNET, ""),
            _),
            pointCenterIfo: (v = {},
            (0,
            M.Z)(v, w.a_.MAINNET, "0x3C6919b132462C1FEc572c6300E83191f4F0012a"),
            (0,
            M.Z)(v, w.a_.BSCTESTNET, "0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A2997e3"),
            v)
        }, k = n(3019), h = function(e) {
            var t = w.a_.MAINNET
              , n = k.g.getState()._currentChainId;
            return e[n] ? e[n] : e[t]
        }, E = function() {
            return h(x.masterChef)
        }, g = function() {
            return h(x.farmingTicketWindow)
        }
    },
    86264: function(e, t, n) {
        n.d(t, {
            D: function() {
                return o
            }
        });
        var a = n(30266)
          , s = n(809)
          , i = n.n(s)
          , u = n(87660)
          , p = n(47646)
          , y = n(67294)
          , r = n(85754)
          , d = n(52503)
          , o = function() {
            var e = (0,
            r.a)().library
              , t = function() {
                var e = (0,
                p.x)().chainId;
                return (0,
                d.ZP)("getNetworkLibrary/".concat(e), (0,
                a.Z)(i().mark((function t() {
                    var n;
                    return i().wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2,
                                (0,
                                u.V)(e);
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
                ))))
            }();
            return (0,
            y.useMemo)((function() {
                return e || (null === t || void 0 === t ? void 0 : t.data)
            }
            ), [null === t || void 0 === t ? void 0 : t.data, e])
        }
    },
    59083: function(e) {
        e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IRinanceToken","name":"_alm","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"_shp","type":"address"},{"internalType":"address","name":"_farmingTicketWindow","type":"address"},{"internalType":"address","name":"_cashbox","type":"address"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"blocks","type":"uint256"}],"internalType":"struct MasterChef.BlockRewardConstructor[]","name":"_rewards","type":"tuple[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"DevUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"MultiplierUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"state","type":"bool"}],"name":"SHPChangedStatusTo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"SHPUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"alm","outputs":[{"internalType":"contract IRinanceToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cashbox","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accALMPerShare","type":"uint256"},{"internalType":"uint256","name":"tokenlockShare","type":"uint256"},{"internalType":"uint256","name":"depositFee","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"shp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"shpStatus","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ticketWindow","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enable","type":"bool"}],"name":"setShpStatus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint256","name":"_tokenLockShare","type":"uint256"},{"internalType":"uint256","name":"_depositFee","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"addPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint256","name":"_tokenLockShare","type":"uint256"},{"internalType":"uint256","name":"_depositFee","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"setPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_shp","type":"address"}],"name":"setSHP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingRinance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blockReward","outputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"transferRinanceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
    }
}]);
