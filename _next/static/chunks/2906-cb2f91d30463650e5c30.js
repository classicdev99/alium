"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2906], {
    22906: function(e, t, n) {
        e.exports = n(39719)
    },
    39719: function(e, t, n) {
        function a(e) {
            return e && "object" == typeof e && "default"in e ? e.default : e
        }
        var r, i, o, u, s, c, d, l, p, f, T, y, m, E, b, h = a(n(39499)), A = a(n(26018)), v = n(90584), _ = a(n(93302)), g = a(n(12447)), N = a(n(29887)), C = n(89721), O = n(588), M = n(96486), x = n(39529), w = n(79861), F = n(92026), I = a(n(18618)), S = a(n(78661)), D = a(n(2221)), B = n(83893), P = n(67887);
        (m = t.a_ || (t.a_ = {}))[m.GOERLI = 5] = "GOERLI",
        m[m.MAINNET = 56] = "MAINNET",
        m[m.BSCTESTNET = 97] = "BSCTESTNET",
        m[m.HECOMAINNET = 128] = "HECOMAINNET",
        m[m.HECOTESTNET = 256] = "HECOTESTNET",
        m[m.ETHER_MAINNET = 1] = "ETHER_MAINNET",
        m[m.ETHER_TESTNET = 4] = "ETHER_TESTNET",
        m[m.MATIC_MAINNET = 137] = "MATIC_MAINNET",
        m[m.MATIC_TESTNET = 80001] = "MATIC_TESTNET",
        m[m.METIS = 1088] = "METIS",
        m[m.METIC_TESTNET = 588] = "METIC_TESTNET",
        m[m.FANTOM = 250] = "FANTOM",
        m[m.FANTOM_TESTNET = 4002] = "FANTOM_TESTNET",
        m[m.MOONRIVER = 1285] = "MOONRIVER",
        m[m.MOONBASE_ALPHA = 1287] = "MOONBASE_ALPHA",
        m[m.MOONBEAM = 1284] = "MOONBEAM",
        m[m.AURORA = 1313161554] = "AURORA",
        m[m.AURORA_TESTNET = 1313161555] = "AURORA_TESTNET",
        m[m.OKC = 66] = "OKC",
        m[m.OKC_TESTNET = 65] = "OKC_TESTNET",
        (E = t.YL || (t.YL = {}))[E.EXACT_INPUT = 0] = "EXACT_INPUT",
        E[E.EXACT_OUTPUT = 1] = "EXACT_OUTPUT",
        (b = t.mL || (t.mL = {}))[b.ROUND_DOWN = 0] = "ROUND_DOWN",
        b[b.ROUND_HALF_UP = 1] = "ROUND_HALF_UP",
        b[b.ROUND_UP = 2] = "ROUND_UP";
        var k, R = {
            aliumOldV1: {
                router: (r = {},
                r[t.a_.MAINNET] = "0xB0e28C53B7C84741085EFE2e16CFF1d04149848f",
                r[t.a_.BSCTESTNET] = "0x9F337DC10F14402287449De5444428A98aC63fc9",
                r[t.a_.HECOMAINNET] = "0x1b1CD5E15C1d0E84cbffF8F7Df514e4f90031FdC",
                r[t.a_.HECOTESTNET] = "0x9C55b05b03bFDC000F20Ff108516959711d906c4",
                r[t.a_.ETHER_MAINNET] = "0x9D35B7afFf83Fd7EA2c9ed16E1C08af27aC07D18",
                r[t.a_.ETHER_TESTNET] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                r[t.a_.MATIC_MAINNET] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                r[t.a_.MATIC_TESTNET] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                r[t.a_.FANTOM] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                r[t.a_.FANTOM_TESTNET] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
                r[t.a_.METIS] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                r[t.a_.METIC_TESTNET] = "0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11",
                r[t.a_.MOONRIVER] = "0x4D3D711853a4A25AE1D17347a97253A66Ed63D18",
                r[t.a_.MOONBASE_ALPHA] = "0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11",
                r[t.a_.MOONBEAM] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                r[t.a_.AURORA] = "0x9D35B7afFf83Fd7EA2c9ed16E1C08af27aC07D18",
                r[t.a_.AURORA_TESTNET] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
                r[t.a_.OKC] = "0xF92dC46c2F373480cbC7Dacb0A003C4a2c23ea78",
                r[t.a_.OKC_TESTNET] = "0xF92dC46c2F373480cbC7Dacb0A003C4a2c23ea78",
                r[t.a_.GOERLI] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                r),
                factory: (i = {},
                i[t.a_.MAINNET] = "0xbEAC7e750728e865A3cb39D5ED6E3A3044ae4B98",
                i[t.a_.BSCTESTNET] = "0x0Da3335f7F9B0f78c965046b8CF124a51548001E",
                i[t.a_.HECOMAINNET] = "0xec6982843Cb5f9625Fe81483fAA4dB022D900a45",
                i[t.a_.HECOTESTNET] = "0x45434b2c51D270BDa028c152DdDDBC1e71B7c199",
                i[t.a_.ETHER_MAINNET] = "0x4D3D711853a4A25AE1D17347a97253A66Ed63D18",
                i[t.a_.ETHER_TESTNET] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                i[t.a_.MATIC_MAINNET] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                i[t.a_.MATIC_TESTNET] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                i[t.a_.FANTOM] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                i[t.a_.FANTOM_TESTNET] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                i[t.a_.METIS] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                i[t.a_.METIC_TESTNET] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
                i[t.a_.MOONRIVER] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                i[t.a_.MOONBASE_ALPHA] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
                i[t.a_.MOONBEAM] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                i[t.a_.AURORA] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                i[t.a_.AURORA_TESTNET] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                i[t.a_.OKC] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                i[t.a_.OKC_TESTNET] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                i[t.a_.GOERLI] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                i),
                initCodeHash: (o = {},
                o[t.a_.MAINNET] = "0x25c1427c313ae5ef5f43f21b21e260f4e278e19616bb3c570e41c050d5b1202a",
                o[t.a_.BSCTESTNET] = "0xa3613311aca267922aeb6751f2832294f511676a5828b307f1b58249a11ea33c",
                o[t.a_.HECOMAINNET] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                o[t.a_.HECOTESTNET] = "0x26aeaa7c5cd0c5b4696efa6a748e93b2cfa3d3213a34d60caf9c3aa537fff8c2",
                o[t.a_.ETHER_MAINNET] = "0xdd99d07028f84ee171febb84ed2cae17b5de5c666e44f5ddc82ddb80596bb266",
                o[t.a_.ETHER_TESTNET] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                o[t.a_.MATIC_MAINNET] = "0xb7bada1da8d86431fed71fb759b0b9cdb841ec842f119c986fbdf10289e83584",
                o[t.a_.MATIC_TESTNET] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                o[t.a_.FANTOM] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                o[t.a_.FANTOM_TESTNET] = "0x4c973f128ac0da381d093ea6b96b13de76b671a930ea4e5bdb93495d635a1416",
                o[t.a_.METIS] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                o[t.a_.METIC_TESTNET] = "0x4c973f128ac0da381d093ea6b96b13de76b671a930ea4e5bdb93495d635a1416",
                o[t.a_.MOONRIVER] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                o[t.a_.MOONBASE_ALPHA] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                o[t.a_.MOONBEAM] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                o[t.a_.AURORA] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                o[t.a_.AURORA_TESTNET] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                o[t.a_.OKC] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                o[t.a_.OKC_TESTNET] = "0x49f163f603c6e7ad015244b682cc0ff6dc637e12aaa0062897293ca0bff1d51f",
                o[t.a_.GOERLI] = "0x0b4449168965ab97c5bbb1bbb7b924245af2c9c6d39cbf4cad7b9d3151881804",
                o)
            },
            alium: {
                router: (u = {},
                u[t.a_.MAINNET] = "0xd646E168D59B317036D97971183a35223d31f7ef",
                u[t.a_.BSCTESTNET] = "0xab81930baA3679551A9c3A219ADd23e38058faBC",
                u[t.a_.HECOMAINNET] = "0x1b1CD5E15C1d0E84cbffF8F7Df514e4f90031FdC",
                u[t.a_.HECOTESTNET] = "0x9C55b05b03bFDC000F20Ff108516959711d906c4",
                u[t.a_.ETHER_MAINNET] = "0x9D35B7afFf83Fd7EA2c9ed16E1C08af27aC07D18",
                u[t.a_.ETHER_TESTNET] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                u[t.a_.MATIC_MAINNET] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                u[t.a_.MATIC_TESTNET] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                u[t.a_.FANTOM] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                u[t.a_.FANTOM_TESTNET] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
                u[t.a_.METIS] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                u[t.a_.METIC_TESTNET] = "0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11",
                u[t.a_.MOONRIVER] = "0x4D3D711853a4A25AE1D17347a97253A66Ed63D18",
                u[t.a_.MOONBASE_ALPHA] = "0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11",
                u[t.a_.MOONBEAM] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                u[t.a_.AURORA] = "0x9D35B7afFf83Fd7EA2c9ed16E1C08af27aC07D18",
                u[t.a_.AURORA_TESTNET] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
                u[t.a_.OKC] = "0xF92dC46c2F373480cbC7Dacb0A003C4a2c23ea78",
                u[t.a_.OKC_TESTNET] = "0xF92dC46c2F373480cbC7Dacb0A003C4a2c23ea78",
                u[t.a_.GOERLI] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                u),
                factory: (s = {},
                s[t.a_.MAINNET] = "0x89Aab5f151D9f6568EACB218824ACc3431b752Ee",
                s[t.a_.BSCTESTNET] = "0xA198B424AFDa626BCf040b20022A392E53149d79",
                s[t.a_.HECOMAINNET] = "0xec6982843Cb5f9625Fe81483fAA4dB022D900a45",
                s[t.a_.HECOTESTNET] = "0x45434b2c51D270BDa028c152DdDDBC1e71B7c199",
                s[t.a_.ETHER_MAINNET] = "0x4D3D711853a4A25AE1D17347a97253A66Ed63D18",
                s[t.a_.ETHER_TESTNET] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                s[t.a_.MATIC_MAINNET] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                s[t.a_.MATIC_TESTNET] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                s[t.a_.FANTOM] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                s[t.a_.FANTOM_TESTNET] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                s[t.a_.METIS] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                s[t.a_.METIC_TESTNET] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
                s[t.a_.MOONRIVER] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                s[t.a_.MOONBASE_ALPHA] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
                s[t.a_.MOONBEAM] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                s[t.a_.AURORA] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                s[t.a_.AURORA_TESTNET] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                s[t.a_.OKC] = "0x1041738e7c7696AFc08E3C05401aD504eE647aE4",
                s[t.a_.OKC_TESTNET] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
                s[t.a_.GOERLI] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                s),
                initCodeHash: (c = {},
                c[t.a_.MAINNET] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                c[t.a_.BSCTESTNET] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                c[t.a_.HECOMAINNET] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                c[t.a_.HECOTESTNET] = "0x26aeaa7c5cd0c5b4696efa6a748e93b2cfa3d3213a34d60caf9c3aa537fff8c2",
                c[t.a_.ETHER_MAINNET] = "0xdd99d07028f84ee171febb84ed2cae17b5de5c666e44f5ddc82ddb80596bb266",
                c[t.a_.ETHER_TESTNET] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                c[t.a_.MATIC_MAINNET] = "0xb7bada1da8d86431fed71fb759b0b9cdb841ec842f119c986fbdf10289e83584",
                c[t.a_.MATIC_TESTNET] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                c[t.a_.FANTOM] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                c[t.a_.FANTOM_TESTNET] = "0x4c973f128ac0da381d093ea6b96b13de76b671a930ea4e5bdb93495d635a1416",
                c[t.a_.METIS] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                c[t.a_.METIC_TESTNET] = "0x4c973f128ac0da381d093ea6b96b13de76b671a930ea4e5bdb93495d635a1416",
                c[t.a_.MOONRIVER] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                c[t.a_.MOONBASE_ALPHA] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                c[t.a_.MOONBEAM] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                c[t.a_.AURORA] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                c[t.a_.AURORA_TESTNET] = "0x7be43cecea0ffc554436d7b8693e86fa02fa1b05137a23b3ef0970dadad16055",
                c[t.a_.OKC] = "0x269cb292c20aa4bea94050b94eab191ae63069a6defc99ff3fd4229fd77faf92",
                c[t.a_.OKC_TESTNET] = "0x49f163f603c6e7ad015244b682cc0ff6dc637e12aaa0062897293ca0bff1d51f",
                c[t.a_.GOERLI] = "0x0b4449168965ab97c5bbb1bbb7b924245af2c9c6d39cbf4cad7b9d3151881804",
                c)
            },
            side: {
                router: (d = {},
                d[t.a_.MAINNET] = "0x591575579D607c8BDC5E1F15f1aa443FD5e5510a",
                d[t.a_.BSCTESTNET] = "0x367a7567Dcca0944795BdE06Ab2a970b7139368A",
                d[t.a_.HECOMAINNET] = "0x9D35B7afFf83Fd7EA2c9ed16E1C08af27aC07D18",
                d[t.a_.HECOTESTNET] = "",
                d[t.a_.ETHER_MAINNET] = "0x49e267f8C1151aD3E5F696c7B393F82E32a6C881",
                d[t.a_.ETHER_TESTNET] = "",
                d[t.a_.MATIC_MAINNET] = "0xF677c11F16D60dc69819cb02A0A951FBaA06c5C2",
                d[t.a_.MATIC_TESTNET] = "",
                d[t.a_.FANTOM] = "0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",
                d[t.a_.FANTOM_TESTNET] = "",
                d[t.a_.METIS] = "0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11",
                d[t.a_.METIC_TESTNET] = "",
                d[t.a_.MOONRIVER] = "0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11",
                d[t.a_.MOONBASE_ALPHA] = "",
                d[t.a_.MOONBEAM] = "0x7C38870e93A1f959cB6c533eB10bBc3e438AaC11",
                d[t.a_.AURORA] = "0x49e267f8C1151aD3E5F696c7B393F82E32a6C881",
                d[t.a_.AURORA_TESTNET] = "",
                d[t.a_.OKC] = "0xc3364A27f56b95f4bEB0742a7325D67a04D80942",
                d[t.a_.OKC_TESTNET] = "",
                d[t.a_.GOERLI] = "",
                d),
                factory: (l = {},
                l[t.a_.MAINNET] = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
                l[t.a_.BSCTESTNET] = "0x0Da3335f7F9B0f78c965046b8CF124a51548001E",
                l[t.a_.HECOMAINNET] = "0xb0b670fc1f7724119963018db0bfa86adb22d941",
                l[t.a_.HECOTESTNET] = "",
                l[t.a_.ETHER_MAINNET] = "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
                l[t.a_.ETHER_TESTNET] = "",
                l[t.a_.MATIC_MAINNET] = "0x5757371414417b8c6caad45baef941abc7d3ab32",
                l[t.a_.MATIC_TESTNET] = "",
                l[t.a_.FANTOM] = "0x152ee697f2e276fa89e96742e9bb9ab1f2e61be3",
                l[t.a_.FANTOM_TESTNET] = "",
                l[t.a_.METIS] = "0x70f51d68D16e8f9e418441280342BD43AC9Dff9f",
                l[t.a_.METIC_TESTNET] = "",
                l[t.a_.MOONRIVER] = "0xc35dadb65012ec5796536bd9864ed8773abc74c4",
                l[t.a_.MOONBASE_ALPHA] = "",
                l[t.a_.MOONBEAM] = "0x985bca32293a7a496300a48081947321177a86fd",
                l[t.a_.AURORA] = "0x7928d4fea7b2c90c732c10aff59cf403f0c38246",
                l[t.a_.AURORA_TESTNET] = "",
                l[t.a_.OKC] = "0x60DCD4a2406Be12dbe3Bb2AaDa12cFb762A418c1",
                l[t.a_.OKC_TESTNET] = "",
                l[t.a_.GOERLI] = "",
                l),
                initCodeHash: (p = {},
                p[t.a_.MAINNET] = "0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5",
                p[t.a_.BSCTESTNET] = "0xa3613311aca267922aeb6751f2832294f511676a5828b307f1b58249a11ea33c",
                p[t.a_.HECOMAINNET] = "0x2ad889f82040abccb2649ea6a874796c1601fb67f91a747a80e08860c73ddf24",
                p[t.a_.HECOTESTNET] = "",
                p[t.a_.ETHER_MAINNET] = "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303",
                p[t.a_.ETHER_TESTNET] = "",
                p[t.a_.MATIC_MAINNET] = "0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f",
                p[t.a_.MATIC_TESTNET] = "",
                p[t.a_.FANTOM] = "0xcdf2deca40a0bd56de8e3ce5c7df6727e5b1bf2ac96f283fa9c4b3e6b42ea9d2",
                p[t.a_.FANTOM_TESTNET] = "",
                p[t.a_.METIS] = "0x966d65068a6a30f10fd1fa814258637a34e059081d79daa94f3e2b6cec48e810",
                p[t.a_.METIC_TESTNET] = "",
                p[t.a_.MOONRIVER] = "0xe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303",
                p[t.a_.MOONBASE_ALPHA] = "",
                p[t.a_.MOONBEAM] = "0xe31da4209ffcce713230a74b5287fa8ec84797c9e77e1f7cfeccea015cdc97ea",
                p[t.a_.AURORA] = "0xa06b8b0642cf6a9298322d0c8ac3c68c291ca24dc66245cf23aa2abc33b57e21",
                p[t.a_.AURORA_TESTNET] = "",
                p[t.a_.OKC] = "0x73fce53e0c877f17bc03bb34eead12c2c3f30d3493cff1259744d0c0dfcb3a92",
                p[t.a_.OKC_TESTNET] = "",
                p[t.a_.GOERLI] = "",
                p)
            }
        }, H = ((f = {})[t.a_.MAINNET] = "0x603bC4530ad41153859Bd4c0AE1FBa4D10660299",
        f[t.a_.BSCTESTNET] = "0x1f12Df344B63F1eb20ED661Ac160208266179C49",
        f[t.a_.HECOMAINNET] = "0x33d1cE5C23eaBCf9fC24b06dc29693Cba1ef02fE",
        f[t.a_.HECOTESTNET] = "0x626413137d565852B498b776B49739D00B2345A8",
        f[t.a_.ETHER_MAINNET] = "0x1f8559Ea0c917a79f8Ab475E78cF7F390C94F22d",
        f[t.a_.ETHER_TESTNET] = "0xa951e5085a6F9508cC58065EC59845A5DEaE4cB3",
        f[t.a_.MATIC_MAINNET] = "0x983b4625630ae1aaa7648f4cad68b9c0a52b8ae8",
        f[t.a_.MATIC_TESTNET] = "0x9ca69E6168e0a87b75053CA0847838A9e73AFCBD",
        f[t.a_.FANTOM] = "0x737EAd42CE0859C1CB056d162D1DE6dEBB41b4A6",
        f[t.a_.FANTOM_TESTNET] = "0x9ED79c3A9221303a7B2Ee4C5617e1ea4688a12dA",
        f[t.a_.METIS] = "0xF74B88DED057f7013A972F4caC2d31Cb70e0F7a2",
        f[t.a_.METIC_TESTNET] = "0x2613047BfEEa744eEc08fD72864FB2Feb654Eb05",
        f[t.a_.MOONRIVER] = "0xe762b3e74f04C9FbF1DAB800Fbd44e799089F024",
        f[t.a_.MOONBASE_ALPHA] = "0x2613047BfEEa744eEc08fD72864FB2Feb654Eb05",
        f[t.a_.MOONBEAM] = "0x1C259099C089E2C31d7FDF0A57f525dcAD82f670",
        f[t.a_.AURORA] = "0x763FA754b3048F1B027eD7f5297FF9882c3e21df",
        f[t.a_.AURORA_TESTNET] = "0x8613ecdbd50EFD649EE1D7837E78Fb71ee405240",
        f[t.a_.OKC] = "0x4D3D711853a4A25AE1D17347a97253A66Ed63D18",
        f[t.a_.OKC_TESTNET] = "0x849A4780B4A292B6Ce1e0fA07eAb533D8d78a009",
        f[t.a_.GOERLI] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
        f), L = ((T = {})[t.a_.MAINNET] = "0xe4E690ce68f531EcCe6D78f8339184032D6D0957",
        T[t.a_.BSCTESTNET] = "0x2d375598D831202E043220C84D5fFB78a252dfb2",
        T[t.a_.HECOMAINNET] = "0x4D3D711853a4A25AE1D17347a97253A66Ed63D18",
        T[t.a_.HECOTESTNET] = "",
        T[t.a_.ETHER_MAINNET] = "0x8613ecdbd50efd649ee1d7837e78fb71ee405240",
        T[t.a_.ETHER_TESTNET] = "",
        T[t.a_.MATIC_MAINNET] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
        T[t.a_.MATIC_TESTNET] = "",
        T[t.a_.FANTOM] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
        T[t.a_.FANTOM_TESTNET] = "0xF92dC46c2F373480cbC7Dacb0A003C4a2c23ea78",
        T[t.a_.METIS] = "0x54a472C96b01f8639326D49Ef3eD4B9a78C3ba63",
        T[t.a_.METIC_TESTNET] = "0x4D3D711853a4A25AE1D17347a97253A66Ed63D18",
        T[t.a_.MOONRIVER] = "0xF92dC46c2F373480cbC7Dacb0A003C4a2c23ea78",
        T[t.a_.MOONBASE_ALPHA] = "0xF92dC46c2F373480cbC7Dacb0A003C4a2c23ea78",
        T[t.a_.MOONBEAM] = "0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",
        T[t.a_.AURORA] = "0x8613ecdbd50EFD649EE1D7837E78Fb71ee405240",
        T[t.a_.AURORA_TESTNET] = "0x4D3D711853a4A25AE1D17347a97253A66Ed63D18",
        T[t.a_.OKC] = "0x9D35B7afFf83Fd7EA2c9ed16E1C08af27aC07D18",
        T[t.a_.OKC_TESTNET] = "0x9D35B7afFf83Fd7EA2c9ed16E1C08af27aC07D18",
        T[t.a_.GOERLI] = "",
        T), U = h.BigInt(1e3), q = h.BigInt(0), G = h.BigInt(1), W = h.BigInt(2), K = h.BigInt(3), V = h.BigInt(5), j = h.BigInt(10), X = h.BigInt(100), Y = h.BigInt(9975), $ = h.BigInt(1e4);
        !function(e) {
            e.uint8 = "uint8",
            e.uint256 = "uint256"
        }(k || (k = {}));
        var Z = ((y = {})[k.uint8] = h.BigInt("0xff"),
        y[k.uint256] = h.BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
        y)
          , z = [{
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Approval",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "Burn",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }],
            name: "Mint",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "sender",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0In",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1In",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "Swap",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !1,
                internalType: "uint112",
                name: "reserve0",
                type: "uint112"
            }, {
                indexed: !1,
                internalType: "uint112",
                name: "reserve1",
                type: "uint112"
            }],
            name: "Sync",
            type: "event"
        }, {
            anonymous: !1,
            inputs: [{
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "Transfer",
            type: "event"
        }, {
            constant: !0,
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "MINIMUM_LIQUIDITY",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "PERMIT_TYPEHASH",
            outputs: [{
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }],
            name: "allowance",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "approve",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "burn",
            outputs: [{
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{
                internalType: "uint8",
                name: "",
                type: "uint8"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "factory",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "getReserves",
            outputs: [{
                internalType: "uint112",
                name: "reserve0",
                type: "uint112"
            }, {
                internalType: "uint112",
                name: "reserve1",
                type: "uint112"
            }, {
                internalType: "uint32",
                name: "blockTimestampLast",
                type: "uint32"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }, {
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "initialize",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "kLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "mint",
            outputs: [{
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "name",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }],
            name: "nonces",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "owner",
                type: "address"
            }, {
                internalType: "address",
                name: "spender",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }, {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            }, {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            }, {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }],
            name: "permit",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "price0CumulativeLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "price1CumulativeLast",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }],
            name: "skim",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }],
            name: "swap",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "symbol",
            outputs: [{
                internalType: "string",
                name: "",
                type: "string"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [],
            name: "sync",
            outputs: [],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "token0",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "token1",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [],
            name: "totalSupply",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "transfer",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }, {
            constant: !1,
            inputs: [{
                internalType: "address",
                name: "from",
                type: "address"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }],
            name: "transferFrom",
            outputs: [{
                internalType: "bool",
                name: "",
                type: "bool"
            }],
            payable: !1,
            stateMutability: "nonpayable",
            type: "function"
        }]
          , J = [{
            inputs: [{
                components: [{
                    internalType: "address",
                    name: "target",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "callData",
                    type: "bytes"
                }],
                internalType: "struct Multicall2.Call[]",
                name: "_calls",
                type: "tuple[]"
            }],
            name: "aggregate",
            outputs: [{
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256"
            }, {
                internalType: "bytes[]",
                name: "returnData",
                type: "bytes[]"
            }],
            constant: !0,
            stateMutability: "view",
            payable: !1,
            type: "function"
        }, {
            inputs: [{
                components: [{
                    internalType: "address",
                    name: "target",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "callData",
                    type: "bytes"
                }],
                internalType: "struct Multicall2.Call[]",
                name: "_calls",
                type: "tuple[]"
            }],
            name: "blockAndAggregate",
            outputs: [{
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256"
            }, {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32"
            }, {
                components: [{
                    internalType: "bool",
                    name: "success",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "returnData",
                    type: "bytes"
                }],
                internalType: "struct Multicall2.Result[]",
                name: "returnData",
                type: "tuple[]"
            }],
            constant: !0,
            stateMutability: "view",
            payable: !1,
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256"
            }],
            name: "getBlockHash",
            outputs: [{
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getBlockNumber",
            outputs: [{
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getCurrentBlockCoinbase",
            outputs: [{
                internalType: "address",
                name: "coinbase",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getCurrentBlockDifficulty",
            outputs: [{
                internalType: "uint256",
                name: "difficulty",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getCurrentBlockGasLimit",
            outputs: [{
                internalType: "uint256",
                name: "gaslimit",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getCurrentBlockTimestamp",
            outputs: [{
                internalType: "uint256",
                name: "timestamp",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "addr",
                type: "address"
            }],
            name: "getEthBalance",
            outputs: [{
                internalType: "uint256",
                name: "balance",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "getLastBlockHash",
            outputs: [{
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "requireSuccess",
                type: "bool"
            }, {
                components: [{
                    internalType: "address",
                    name: "target",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "callData",
                    type: "bytes"
                }],
                internalType: "struct Multicall2.Call[]",
                name: "_calls",
                type: "tuple[]"
            }],
            name: "tryAggregate",
            outputs: [{
                components: [{
                    internalType: "bool",
                    name: "success",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "returnData",
                    type: "bytes"
                }],
                internalType: "struct Multicall2.Result[]",
                name: "returnData",
                type: "tuple[]"
            }],
            constant: !0,
            stateMutability: "view",
            payable: !1,
            type: "function"
        }, {
            inputs: [{
                internalType: "bool",
                name: "requireSuccess",
                type: "bool"
            }, {
                components: [{
                    internalType: "address",
                    name: "target",
                    type: "address"
                }, {
                    internalType: "bytes",
                    name: "callData",
                    type: "bytes"
                }],
                internalType: "struct Multicall2.Call[]",
                name: "_calls",
                type: "tuple[]"
            }],
            name: "tryBlockAndAggregate",
            outputs: [{
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256"
            }, {
                internalType: "bytes32",
                name: "blockHash",
                type: "bytes32"
            }, {
                components: [{
                    internalType: "bool",
                    name: "success",
                    type: "bool"
                }, {
                    internalType: "bytes",
                    name: "returnData",
                    type: "bytes"
                }],
                internalType: "struct Multicall2.Result[]",
                name: "returnData",
                type: "tuple[]"
            }],
            constant: !0,
            stateMutability: "view",
            payable: !1,
            type: "function"
        }]
          , Q = [{
            inputs: [{
                internalType: "address",
                name: "tokenA",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenB",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amountADesired",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountBDesired",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountAMin",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountBMin",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "addLiquidity",
            outputs: [{
                internalType: "uint256",
                name: "amountA",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountB",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                internalType: "uint256",
                name: "amountTokenDesired",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "addLiquidityETH",
            outputs: [{
                internalType: "uint256",
                name: "amountToken",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "tokenA",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenB",
                type: "address"
            }, {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountAMin",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountBMin",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "removeLiquidity",
            outputs: [{
                internalType: "uint256",
                name: "amountA",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountB",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "removeLiquidityETH",
            outputs: [{
                internalType: "uint256",
                name: "amountToken",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "removeLiquidityETHSupportingFeeOnTransferTokens",
            outputs: [{
                internalType: "uint256",
                name: "amountETH",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "approveMax",
                type: "bool"
            }, {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            }, {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            }, {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }],
            name: "removeLiquidityETHWithPermit",
            outputs: [{
                internalType: "uint256",
                name: "amountToken",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "token",
                type: "address"
            }, {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "approveMax",
                type: "bool"
            }, {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            }, {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            }, {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }],
            name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            outputs: [{
                internalType: "uint256",
                name: "amountETH",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "tokenA",
                type: "address"
            }, {
                internalType: "address",
                name: "tokenB",
                type: "address"
            }, {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountAMin",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountBMin",
                type: "uint256"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }, {
                internalType: "bool",
                name: "approveMax",
                type: "bool"
            }, {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            }, {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            }, {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }],
            name: "removeLiquidityWithPermit",
            outputs: [{
                internalType: "uint256",
                name: "amountA",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountB",
                type: "uint256"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapETHForExactTokens",
            outputs: [{
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapExactETHForTokens",
            outputs: [{
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapExactTokensForETH",
            outputs: [{
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapExactTokensForTokens",
            outputs: [{
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountInMax",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapTokensForExactETH",
            outputs: [{
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "amountInMax",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }, {
                internalType: "address",
                name: "to",
                type: "address"
            }, {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }],
            name: "swapTokensForExactTokens",
            outputs: [{
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "_factory",
                type: "address"
            }, {
                internalType: "address",
                name: "_WETH",
                type: "address"
            }],
            stateMutability: "nonpayable",
            type: "constructor"
        }, {
            stateMutability: "payable",
            type: "receive"
        }, {
            inputs: [],
            name: "factory",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "reserveIn",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "reserveOut",
                type: "uint256"
            }],
            name: "getAmountIn",
            outputs: [{
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "reserveIn",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "reserveOut",
                type: "uint256"
            }],
            name: "getAmountOut",
            outputs: [{
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }],
            name: "getAmountsIn",
            outputs: [{
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }, {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }],
            name: "getAmountsOut",
            outputs: [{
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "uint256",
                name: "amountA",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "reserveA",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "reserveB",
                type: "uint256"
            }],
            name: "quote",
            outputs: [{
                internalType: "uint256",
                name: "amountB",
                type: "uint256"
            }],
            stateMutability: "pure",
            type: "function"
        }, {
            inputs: [],
            name: "WETH",
            outputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            stateMutability: "view",
            type: "function"
        }]
          , ee = [{
            constant: !0,
            inputs: [],
            name: "decimals",
            outputs: [{
                name: "",
                type: "uint8"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }, {
            constant: !0,
            inputs: [{
                name: "",
                type: "address"
            }],
            name: "balanceOf",
            outputs: [{
                name: "",
                type: "uint256"
            }],
            payable: !1,
            stateMutability: "view",
            type: "function"
        }];
        function te(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function ne(e, t, n) {
            return t && te(e.prototype, t),
            n && te(e, n),
            e
        }
        function ae() {
            return (ae = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function re(e, t) {
            e.prototype = Object.create(t.prototype),
            e.prototype.constructor = e,
            e.__proto__ = t
        }
        function ie(e) {
            return (ie = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function oe(e, t) {
            return (oe = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function ue() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                ))),
                !0
            } catch (a) {
                return !1
            }
        }
        function se(e, t, n) {
            return (se = ue() ? Reflect.construct : function(e, t, n) {
                var a = [null];
                a.push.apply(a, t);
                var r = new (Function.bind.apply(e, a));
                return n && oe(r, n.prototype),
                r
            }
            ).apply(null, arguments)
        }
        function ce(e) {
            var t = "function" == typeof Map ? new Map : void 0;
            return (ce = function(e) {
                if (null === e || -1 === Function.toString.call(e).indexOf("[native code]"))
                    return e;
                if ("function" != typeof e)
                    throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== t) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, n)
                }
                function n() {
                    return se(e, arguments, ie(this).constructor)
                }
                return n.prototype = Object.create(e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                oe(n, e)
            }
            )(e)
        }
        function de(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function le(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        function pe(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (e) {
                        if ("string" == typeof e)
                            return le(e, void 0);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? le(e, void 0) : void 0
                    }
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var a = 0;
                    return function() {
                        return a >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[a++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (n = e[Symbol.iterator]()).next.bind(n)
        }
        function fe(e, t) {
            h.greaterThanOrEqual(e, q) || A(!1),
            h.lessThanOrEqual(e, Z[t]) || A(!1)
        }
        function Te(e) {
            try {
                return v.getAddress(e)
            } catch (e) {
                A(!1)
            }
        }
        function ye(e) {
            return e instanceof h ? e : h.BigInt("bigint" == typeof e ? e.toString() : e)
        }
        function me(e) {
            fe(e, k.uint256);
            var t, n = q;
            if (h.greaterThan(e, K))
                for (n = e,
                t = h.add(h.divide(e, W), G); h.lessThan(t, n); )
                    n = t,
                    t = h.divide(h.add(h.divide(e, t), t), W);
            else
                h.notEqual(e, q) && (n = G);
            return n
        }
        function Ee(e, t, n, a) {
            if (n > 0 || A(!1),
            e.length <= n || A(!1),
            0 === e.length)
                return e.push(t),
                null;
            var r = e.length === n;
            if (r && a(e[e.length - 1], t) <= 0)
                return t;
            for (var i = 0, o = e.length; i < o; ) {
                var u = i + o >>> 1;
                a(e[u], t) <= 0 ? i = u + 1 : o = u
            }
            return e.splice(i, 0, t),
            r ? e.pop() : null
        }
        var be, he, Ae = function() {
            return Object.keys(t.a_).filter((function(e) {
                return !!Number(e)
            }
            ))
        }, ve = function(e, t, n) {
            fe(h.BigInt(e), k.uint8),
            this.decimals = e,
            this.symbol = t,
            this.name = n
        }, _e = function(e) {
            function t(t, n, a, r, i) {
                var o;
                return (o = e.call(this, a, r, i) || this).chainId = t,
                o.address = Te(n),
                o
            }
            re(t, e);
            var n = t.prototype;
            return n.equals = function(e) {
                return this === e || this.chainId === e.chainId && this.address === e.address
            }
            ,
            n.sortsBefore = function(e) {
                return this.chainId !== e.chainId && A(!1),
                this.address === e.address && A(!1),
                this.address.toLowerCase() < e.address.toLowerCase()
            }
            ,
            t
        }(ve);
        function ge(e, t) {
            return e instanceof _e && t instanceof _e ? e.equals(t) : !(e instanceof _e || t instanceof _e || (null == e ? void 0 : e.decimals) !== (null == t ? void 0 : t.decimals) || (null == e ? void 0 : e.name) !== (null == t ? void 0 : t.name) || (null == e ? void 0 : e.symbol) !== (null == t ? void 0 : t.symbol))
        }
        var Ne, Ce, Oe, Me = ((be = {})[t.a_.MAINNET] = new _e(t.a_.MAINNET,"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",18,"WBNB","Wrapped BNB"),
        be[t.a_.BSCTESTNET] = new _e(t.a_.BSCTESTNET,"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",18,"WBNB","Wrapped BNB"),
        be[t.a_.HECOMAINNET] = new _e(t.a_.HECOMAINNET,"0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",18,"WHT","Wrapped HT"),
        be[t.a_.HECOTESTNET] = new _e(t.a_.HECOTESTNET,"0x7aF326B6351C8A9b8fb8CD205CBe11d4Ac5FA836",18,"WHT","Wrapped HT"),
        be[t.a_.MATIC_MAINNET] = new _e(t.a_.MATIC_MAINNET,"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",18,"WMATIC","Wrapped Matic"),
        be[t.a_.MATIC_TESTNET] = new _e(t.a_.MATIC_TESTNET,"0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",18,"WMATIC","Wrapped Matic"),
        be[t.a_.ETHER_MAINNET] = new _e(t.a_.ETHER_MAINNET,"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",18,"WETH","Wrapped Ether"),
        be[t.a_.ETHER_TESTNET] = new _e(t.a_.ETHER_TESTNET,"0xc778417E063141139Fce010982780140Aa0cD5Ab",18,"WETH","Wrapped Ether"),
        be[t.a_.FANTOM] = new _e(t.a_.FANTOM,"0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",18,"WFTM","Wrapped FTM"),
        be[t.a_.FANTOM_TESTNET] = new _e(t.a_.FANTOM_TESTNET,"0x6cFe00906a2074F41788b8Dc4fa66a4c13C2A3a3",18,"WFTM","Wrapped FTM"),
        be[t.a_.METIS] = new _e(t.a_.METIS,"0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481",18,"WMETIS","Wrapped METIS"),
        be[t.a_.METIC_TESTNET] = new _e(t.a_.METIC_TESTNET,"0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",18,"WMETIS","Wrapped METIS"),
        be[t.a_.MOONRIVER] = new _e(t.a_.MOONRIVER,"0xf50225a84382c74cbdea10b0c176f71fc3de0c4d",18,"WMOVR","Wrapped MOVR"),
        be[t.a_.MOONBASE_ALPHA] = new _e(t.a_.MOONBASE_ALPHA,"0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",18,"WMOVR","Wrapped MOVR"),
        be[t.a_.MOONBEAM] = new _e(t.a_.MOONBEAM,"0xAcc15dC74880C9944775448304B263D191c6077F",18,"WGLMR","Wrapped GLMR"),
        be[t.a_.AURORA] = new _e(t.a_.AURORA,"0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",18,"WaETH","Wrapped aETH"),
        be[t.a_.AURORA_TESTNET] = new _e(t.a_.AURORA_TESTNET,"0x1041738e7c7696AFc08E3C05401aD504eE647aE4",18,"WaETH","Wrapped aETH"),
        be[t.a_.OKC] = new _e(t.a_.OKC,"0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15",18,"WOKT","Wrapped OKT"),
        be[t.a_.OKC_TESTNET] = new _e(t.a_.OKC_TESTNET,"0x3379b4a4Fc0E1614c0687C9F613024E83FE0E8b5",18,"WOKT","Wrapped OKT"),
        be[t.a_.GOERLI] = new _e(t.a_.GOERLI,"0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",18,"wgrl","wgrl"),
        be), xe = ((he = {})[t.a_.MAINNET] = new _e(t.a_.MAINNET,"0x7c38870e93a1f959cb6c533eb10bbc3e438aac11",18,"ALM","RinanceToken"),
        he[t.a_.BSCTESTNET] = new _e(t.a_.BSCTESTNET,"0x6f58aCfaEB1BfDC9c4959c43aDdE7a3b63BF019f",18,"ALM","RinanceToken"),
        he[t.a_.HECOMAINNET] = new _e(t.a_.HECOMAINNET,"0x1581929770be3275a82068c1135b6dd59c5334ed",18,"ALM","RinanceToken on HECO"),
        he[t.a_.HECOTESTNET] = new _e(t.a_.HECOTESTNET,"0xfe681ad91bbb8b531623a7cb8c658e4afe500fd9",18,"ALM","RinanceToken on HECO testnet"),
        he[t.a_.MATIC_MAINNET] = new _e(t.a_.MATIC_MAINNET,"0x1581929770be3275a82068c1135b6dd59c5334ed",18,"ALM","RinanceToken on Polygon"),
        he[t.a_.MATIC_TESTNET] = new _e(t.a_.MATIC_TESTNET,"0x58b06772603ad67223bef63ab578f7cb3215771b",18,"ALM","RinanceToken on Polygon"),
        he[t.a_.ETHER_MAINNET] = new _e(t.a_.ETHER_MAINNET,"0x1581929770be3275a82068c1135b6dd59c5334ed",18,"ALM","RinanceToken on Ethereum"),
        he[t.a_.ETHER_TESTNET] = new _e(t.a_.ETHER_TESTNET,"0x05418f9e8a71a96d9bb58fa6d71533033dc23ac6",18,"ALM","RinanceToken on RINKEBY testnet"),
        he[t.a_.FANTOM] = new _e(t.a_.FANTOM,"0x38540b4613d2e57ecf190d3486ae6f74591eb8a9",18,"ALM","RinanceToken on Fantom"),
        he[t.a_.FANTOM_TESTNET] = new _e(t.a_.FANTOM_TESTNET,"0x91dc5712460550849a7664a6177b407eeb833d9d",18,"ALM","RinanceToken on FANTOM testnet"),
        he[t.a_.METIS] = new _e(t.a_.METIS,"0x1581929770bE3275a82068c1135b6dD59c5334Ed",18,"ALM","RinanceToken on METIS"),
        he[t.a_.METIC_TESTNET] = new _e(t.a_.METIC_TESTNET,"0x9aB518232d32A0711ecB39F940D107d61e37c5d0",18,"ALM","RinanceToken on METIS testnet"),
        he[t.a_.MOONRIVER] = new _e(t.a_.MOONRIVER,"0x1581929770be3275a82068c1135b6dd59c5334ed",18,"ALM","RinanceToken on Moonriver"),
        he[t.a_.MOONBASE_ALPHA] = new _e(t.a_.MOONBASE_ALPHA,"0x8ab7a1fc6bc09e04837f2aa4786cc8cbfc281481",18,"ALM","RinanceToken on Moonriver testnet"),
        he[t.a_.MOONBEAM] = new _e(t.a_.MOONBEAM,"0x1581929770be3275a82068c1135b6dd59c5334ed",18,"ALM","RinanceToken on Moonbeam"),
        he[t.a_.AURORA] = new _e(t.a_.AURORA,"0xe8532E5514d9F80C7d0B1F29948873ee59Fb5B06",18,"ALM","RinanceToken on Aurora testnet"),
        he[t.a_.AURORA_TESTNET] = new _e(t.a_.AURORA_TESTNET,"0x05418f9e8A71A96D9Bb58Fa6D71533033DC23aC6",18,"ALM","RinanceToken on Aurora"),
        he[t.a_.OKC] = new _e(t.a_.OKC,"0x5252d84f12942a997387168df6da55ebf827378e",18,"ALM","RinanceToken on OKX"),
        he[t.a_.OKC_TESTNET] = new _e(t.a_.OKC_TESTNET,"0x1581929770be3275a82068c1135b6dd59c5334ed",18,"ALM","RinanceToken on OKEx"),
        he[t.a_.GOERLI] = new _e(t.a_.GOERLI,"0x0000000000000000000000000000000000000000",18,"ALM","RinanceToken"),
        he), we = g(N), Fe = g(_), Ie = ((Ne = {})[t.mL.ROUND_DOWN] = we.ROUND_DOWN,
        Ne[t.mL.ROUND_HALF_UP] = we.ROUND_HALF_UP,
        Ne[t.mL.ROUND_UP] = we.ROUND_UP,
        Ne), Se = ((Ce = {})[t.mL.ROUND_DOWN] = 0,
        Ce[t.mL.ROUND_HALF_UP] = 1,
        Ce[t.mL.ROUND_UP] = 3,
        Ce), De = function() {
            function e(e, t) {
                void 0 === t && (t = G),
                this.numerator = ye(e),
                this.denominator = ye(t)
            }
            var n = e.prototype;
            return n.invert = function() {
                return new e(this.denominator,this.numerator)
            }
            ,
            n.add = function(t) {
                var n = t instanceof e ? t : new e(ye(t));
                return h.equal(this.denominator, n.denominator) ? new e(h.add(this.numerator, n.numerator),this.denominator) : new e(h.add(h.multiply(this.numerator, n.denominator), h.multiply(n.numerator, this.denominator)),h.multiply(this.denominator, n.denominator))
            }
            ,
            n.subtract = function(t) {
                var n = t instanceof e ? t : new e(ye(t));
                return h.equal(this.denominator, n.denominator) ? new e(h.subtract(this.numerator, n.numerator),this.denominator) : new e(h.subtract(h.multiply(this.numerator, n.denominator), h.multiply(n.numerator, this.denominator)),h.multiply(this.denominator, n.denominator))
            }
            ,
            n.lessThan = function(t) {
                var n = t instanceof e ? t : new e(ye(t));
                return h.lessThan(h.multiply(this.numerator, n.denominator), h.multiply(n.numerator, this.denominator))
            }
            ,
            n.equalTo = function(t) {
                var n = t instanceof e ? t : new e(ye(t));
                return h.equal(h.multiply(this.numerator, n.denominator), h.multiply(n.numerator, this.denominator))
            }
            ,
            n.greaterThan = function(t) {
                var n = t instanceof e ? t : new e(ye(t));
                return h.greaterThan(h.multiply(this.numerator, n.denominator), h.multiply(n.numerator, this.denominator))
            }
            ,
            n.multiply = function(t) {
                var n = t instanceof e ? t : new e(ye(t));
                return new e(h.multiply(this.numerator, n.numerator),h.multiply(this.denominator, n.denominator))
            }
            ,
            n.divide = function(t) {
                var n = t instanceof e ? t : new e(ye(t));
                return new e(h.multiply(this.numerator, n.denominator),h.multiply(this.denominator, n.numerator))
            }
            ,
            n.toSignificant = function(e, n, a) {
                void 0 === n && (n = {
                    groupSeparator: ""
                }),
                void 0 === a && (a = t.mL.ROUND_HALF_UP),
                Number.isInteger(e) || A(!1),
                e > 0 || A(!1),
                we.set({
                    precision: e + 1,
                    rounding: Ie[a]
                });
                var r = new we(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(e);
                return r.toFormat(r.decimalPlaces(), n)
            }
            ,
            n.toFixed = function(e, n, a) {
                return void 0 === n && (n = {
                    groupSeparator: ""
                }),
                void 0 === a && (a = t.mL.ROUND_HALF_UP),
                Number.isInteger(e) || A(!1),
                e >= 0 || A(!1),
                Fe.DP = e,
                Fe.RM = Se[a],
                new Fe(this.numerator.toString()).div(this.denominator.toString()).toFormat(e, n)
            }
            ,
            ne(e, [{
                key: "quotient",
                get: function() {
                    return h.divide(this.numerator, this.denominator)
                }
            }, {
                key: "remainder",
                get: function() {
                    return new e(h.remainder(this.numerator, this.denominator),this.denominator)
                }
            }]),
            e
        }(), Be = g(_), Pe = function(e) {
            function n(t, n) {
                var a, r = ye(n);
                return fe(r, k.uint256),
                (a = e.call(this, r, h.exponentiate(j, h.BigInt(t.decimals))) || this).currency = t,
                a
            }
            re(n, e),
            n.ether = function(e, t) {
                return new n(Ve(t),e)
            }
            ,
            n.anotherEther = function(e, t) {
                return new n(e,t)
            }
            ;
            var a = n.prototype;
            return a.add = function(e) {
                return ge(this.currency, e.currency) || A(!1),
                new n(this.currency,h.add(this.raw, e.raw))
            }
            ,
            a.subtract = function(e) {
                return ge(this.currency, e.currency) || A(!1),
                new n(this.currency,h.subtract(this.raw, e.raw))
            }
            ,
            a.toSignificant = function(n, a, r) {
                return void 0 === n && (n = 6),
                void 0 === r && (r = t.mL.ROUND_DOWN),
                e.prototype.toSignificant.call(this, n, a, r)
            }
            ,
            a.toFixed = function(n, a, r) {
                return void 0 === n && (n = this.currency.decimals),
                void 0 === r && (r = t.mL.ROUND_DOWN),
                n <= this.currency.decimals || A(!1),
                e.prototype.toFixed.call(this, n, a, r)
            }
            ,
            a.toExact = function(e) {
                return void 0 === e && (e = {
                    groupSeparator: ""
                }),
                Be.DP = this.currency.decimals,
                new Be(this.numerator.toString()).div(this.denominator.toString()).toFormat(e)
            }
            ,
            ne(n, [{
                key: "raw",
                get: function() {
                    return this.numerator
                }
            }]),
            n
        }(De), ke = function(e) {
            function t(t, n) {
                var a;
                return (a = e.call(this, t, n) || this).token = t,
                a
            }
            re(t, e);
            var n = t.prototype;
            return n.add = function(e) {
                return this.token.equals(e.token) || A(!1),
                new t(this.token,h.add(this.raw, e.raw))
            }
            ,
            n.subtract = function(e) {
                return this.token.equals(e.token) || A(!1),
                new t(this.token,h.subtract(this.raw, e.raw))
            }
            ,
            t
        }(Pe), Re = function(e) {
            function t(t, n, a, r) {
                var i;
                return (i = e.call(this, r, a) || this).baseCurrency = t,
                i.quoteCurrency = n,
                i.scalar = new De(h.exponentiate(j, h.BigInt(t.decimals)),h.exponentiate(j, h.BigInt(n.decimals))),
                i
            }
            re(t, e),
            t.fromRoute = function(e) {
                for (var n, a = [], r = pe(e.pairs.entries()); !(n = r()).done; ) {
                    var i = n.value
                      , o = i[1];
                    a.push(e.path[i[0]].equals(o.token0) ? new t(o.reserve0.currency,o.reserve1.currency,o.reserve0.raw,o.reserve1.raw) : new t(o.reserve1.currency,o.reserve0.currency,o.reserve1.raw,o.reserve0.raw))
                }
                return a.slice(1).reduce((function(e, t) {
                    return e.multiply(t)
                }
                ), a[0])
            }
            ;
            var n = t.prototype;
            return n.invert = function() {
                return new t(this.quoteCurrency,this.baseCurrency,this.numerator,this.denominator)
            }
            ,
            n.multiply = function(n) {
                ge(this.quoteCurrency, n.baseCurrency) || A(!1);
                var a = e.prototype.multiply.call(this, n);
                return new t(this.baseCurrency,n.quoteCurrency,a.denominator,a.numerator)
            }
            ,
            n.quote = function(t, n) {
                return ge(n.currency, this.baseCurrency) || A(!1),
                this.quoteCurrency instanceof _e ? new ke(this.quoteCurrency,e.prototype.multiply.call(this, n.raw).quotient) : Pe.ether(e.prototype.multiply.call(this, n.raw).quotient, t)
            }
            ,
            n.toSignificant = function(e, t, n) {
                return void 0 === e && (e = 6),
                this.adjusted.toSignificant(e, t, n)
            }
            ,
            n.toFixed = function(e, t, n) {
                return void 0 === e && (e = 4),
                this.adjusted.toFixed(e, t, n)
            }
            ,
            ne(t, [{
                key: "raw",
                get: function() {
                    return new De(this.numerator,this.denominator)
                }
            }, {
                key: "adjusted",
                get: function() {
                    return e.prototype.multiply.call(this, this.scalar)
                }
            }]),
            t
        }(De), He = "setPrototypeOf"in Object, Le = function(e) {
            function t() {
                var n;
                return (n = e.call(this) || this).isInsufficientReservesError = !0,
                n.name = n.constructor.name,
                He && Object.setPrototypeOf(de(n), (this instanceof t ? this.constructor : void 0).prototype),
                n
            }
            return re(t, e),
            t
        }(ce(Error)), Ue = function(e) {
            function t() {
                var n;
                return (n = e.call(this) || this).isInsufficientInputAmountError = !0,
                n.name = n.constructor.name,
                He && Object.setPrototypeOf(de(n), (this instanceof t ? this.constructor : void 0).prototype),
                n
            }
            return re(t, e),
            t
        }(ce(Error)), qe = {}, Ge = function() {
            function e(t, n, a, r) {
                var i = t.token.sortsBefore(n.token) ? [t, n] : [n, t]
                  , o = i[0].token
                  , u = i[1].token
                  , s = (null == o ? void 0 : o.symbol) + "-" + (null == u ? void 0 : u.symbol);
                this.liquidityToken = new _e(i[0].token.chainId,e.getAddress(o, u, a, r),18,s,s),
                this.tokenAmounts = i
            }
            e.getAddress = function(e, t, n, a) {
                var r, i, o, u, s, c, d = e.sortsBefore(t) ? [e, t] : [t, e];
                return void 0 === (null === (r = qe[n]) || void 0 === r || null === (i = r[d[0].address]) || void 0 === i ? void 0 : i[d[1].address]) && (qe = ae({}, qe, ((c = {})[n] = ((s = {})[d[0].address] = ae({}, null === (o = qe[n]) || void 0 === o ? void 0 : o[d[0].address], ((u = {})[d[1].address] = v.getCreate2Address(n, C.keccak256(["bytes"], [C.pack(["address", "address"], [d[0].address, d[1].address])]), a),
                u)),
                s),
                c))),
                qe[n][d[0].address][d[1].address]
            }
            ;
            var t = e.prototype;
            return t.involvesToken = function(e) {
                return e.equals(this.token0) || e.equals(this.token1)
            }
            ,
            t.priceOf = function(e) {
                return this.involvesToken(e) || A(!1),
                e.equals(this.token0) ? this.token0Price : this.token1Price
            }
            ,
            t.reserveOf = function(e) {
                return this.involvesToken(e) || A(!1),
                e.equals(this.token0) ? this.reserve0 : this.reserve1
            }
            ,
            t.getOutputAmount = function(t, n, a) {
                if (this.involvesToken(t.token) || A(!1),
                h.equal(this.reserve0.raw, q) || h.equal(this.reserve1.raw, q))
                    throw new Le;
                var r = this.reserveOf(t.token)
                  , i = this.reserveOf(t.token.equals(this.token0) ? this.token1 : this.token0)
                  , o = h.multiply(t.raw, Y)
                  , u = h.multiply(o, i.raw)
                  , s = h.add(h.multiply(r.raw, $), o)
                  , c = new ke(t.token.equals(this.token0) ? this.token1 : this.token0,h.divide(u, s));
                if (h.equal(c.raw, q))
                    throw new Ue;
                return [c, new e(r.add(t),i.subtract(c),n,a)]
            }
            ,
            t.getInputAmount = function(t, n, a) {
                if (this.involvesToken(t.token) || A(!1),
                h.equal(this.reserve0.raw, q) || h.equal(this.reserve1.raw, q) || h.greaterThanOrEqual(t.raw, this.reserveOf(t.token).raw))
                    throw new Le;
                var r = this.reserveOf(t.token)
                  , i = this.reserveOf(t.token.equals(this.token0) ? this.token1 : this.token0)
                  , o = h.multiply(h.multiply(i.raw, t.raw), $)
                  , u = h.multiply(h.subtract(r.raw, t.raw), Y)
                  , s = new ke(t.token.equals(this.token0) ? this.token1 : this.token0,h.add(h.divide(o, u), G));
                return [s, new e(i.add(s),r.subtract(t),n,a)]
            }
            ,
            t.getLiquidityMinted = function(e, t, n) {
                e.token.equals(this.liquidityToken) || A(!1);
                var a, r = t.token.sortsBefore(n.token) ? [t, n] : [n, t];
                if (r[0].token.equals(this.token0) && r[1].token.equals(this.token1) || A(!1),
                h.equal(e.raw, q))
                    a = h.subtract(me(h.multiply(r[0].raw, r[1].raw)), U);
                else {
                    var i = h.divide(h.multiply(r[0].raw, e.raw), this.reserve0.raw)
                      , o = h.divide(h.multiply(r[1].raw, e.raw), this.reserve1.raw);
                    a = h.lessThanOrEqual(i, o) ? i : o
                }
                if (!h.greaterThan(a, q))
                    throw new Ue;
                return new ke(this.liquidityToken,a)
            }
            ,
            t.getLiquidityValue = function(e, t, n, a, r) {
                var i;
                if (void 0 === a && (a = !1),
                this.involvesToken(e) || A(!1),
                t.token.equals(this.liquidityToken) || A(!1),
                n.token.equals(this.liquidityToken) || A(!1),
                h.lessThanOrEqual(n.raw, t.raw) || A(!1),
                a) {
                    r || A(!1);
                    var o = ye(r);
                    if (h.equal(o, q))
                        i = t;
                    else {
                        var u = me(h.multiply(this.reserve0.raw, this.reserve1.raw))
                          , s = me(o);
                        if (h.greaterThan(u, s)) {
                            var c = h.multiply(t.raw, h.subtract(u, s))
                              , d = h.add(h.multiply(u, V), s)
                              , l = h.divide(c, d);
                            i = t.add(new ke(this.liquidityToken,l))
                        } else
                            i = t
                    }
                } else
                    i = t;
                return new ke(e,h.divide(h.multiply(n.raw, this.reserveOf(e).raw), i.raw))
            }
            ,
            ne(e, [{
                key: "token0Price",
                get: function() {
                    return new Re(this.token0,this.token1,this.tokenAmounts[0].raw,this.tokenAmounts[1].raw)
                }
            }, {
                key: "token1Price",
                get: function() {
                    return new Re(this.token1,this.token0,this.tokenAmounts[1].raw,this.tokenAmounts[0].raw)
                }
            }, {
                key: "chainId",
                get: function() {
                    return this.token0.chainId
                }
            }, {
                key: "token0",
                get: function() {
                    return this.tokenAmounts[0].token
                }
            }, {
                key: "token1",
                get: function() {
                    return this.tokenAmounts[1].token
                }
            }, {
                key: "reserve0",
                get: function() {
                    return this.tokenAmounts[0]
                }
            }, {
                key: "reserve1",
                get: function() {
                    return this.tokenAmounts[1]
                }
            }]),
            e
        }(), We = function() {
            function e(e, t, n, a) {
                t.length > 0 || A(!1),
                t.every((function(e) {
                    return e.chainId === t[0].chainId
                }
                )) || A(!1),
                n instanceof _e && t[0].involvesToken(n) || n === Ve(e) && t[0].involvesToken(Me[t[0].chainId]) || A(!1),
                void 0 === a || a instanceof _e && t[t.length - 1].involvesToken(a) || a === Ve(e) && t[t.length - 1].involvesToken(Me[t[0].chainId]) || A(!1);
                for (var r, i = [n instanceof _e ? n : Me[t[0].chainId]], o = pe(t.entries()); !(r = o()).done; ) {
                    var u = r.value
                      , s = u[1]
                      , c = i[u[0]];
                    c.equals(s.token0) || c.equals(s.token1) || A(!1);
                    var d = c.equals(s.token0) ? s.token1 : s.token0;
                    i.push(d)
                }
                this.pairs = t,
                this.path = i,
                this.midPrice = Re.fromRoute(this),
                this.input = n,
                this.output = null != a ? a : i[i.length - 1]
            }
            return ne(e, [{
                key: "chainId",
                get: function() {
                    return this.pairs[0].chainId
                }
            }]),
            e
        }(), Ke = ((Oe = {})[t.a_.MAINNET] = new ve(18,"BNB","Binance"),
        Oe[t.a_.BSCTESTNET] = new ve(18,"BNB","Binance"),
        Oe[t.a_.HECOMAINNET] = new ve(18,"HT","Huobi"),
        Oe[t.a_.HECOTESTNET] = new ve(18,"HT","Huobi"),
        Oe[t.a_.ETHER_MAINNET] = new ve(18,"ETH","Ether"),
        Oe[t.a_.ETHER_TESTNET] = new ve(18,"ETH","Ether"),
        Oe[t.a_.MATIC_MAINNET] = new ve(18,"MATIC","Polygon"),
        Oe[t.a_.MATIC_TESTNET] = new ve(18,"MATIC","Polygon"),
        Oe[t.a_.FANTOM] = new ve(18,"FTM","Fantom"),
        Oe[t.a_.FANTOM_TESTNET] = new ve(18,"FTM","Fantom"),
        Oe[t.a_.METIS] = new _e(t.a_.METIS,"0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",18,"METIS","METIS"),
        Oe[t.a_.METIC_TESTNET] = new ve(18,"METIS","METIS"),
        Oe[t.a_.MOONRIVER] = new ve(18,"MOVR","MOVR"),
        Oe[t.a_.MOONBASE_ALPHA] = new ve(18,"MOVR","MOVR"),
        Oe[t.a_.MOONBEAM] = new ve(18,"GLMR","GLMR"),
        Oe[t.a_.AURORA] = new ve(18,"aETH","aETH"),
        Oe[t.a_.AURORA_TESTNET] = new ve(18,"aETH","aETH"),
        Oe[t.a_.OKC] = new ve(18,"OKT","OKT"),
        Oe[t.a_.OKC_TESTNET] = new ve(18,"OKT","OKT"),
        Oe[t.a_.GOERLI] = new ve(18,"grl","grl"),
        Oe), Ve = function(e) {
            return Ke[e]
        }, je = new De(X), Xe = function(e) {
            function t() {
                return e.apply(this, arguments) || this
            }
            re(t, e);
            var n = t.prototype;
            return n.toSignificant = function(e, t, n) {
                return void 0 === e && (e = 5),
                this.multiply(je).toSignificant(e, t, n)
            }
            ,
            n.toFixed = function(e, t, n) {
                return void 0 === e && (e = 2),
                this.multiply(je).toFixed(e, t, n)
            }
            ,
            t
        }(De);
        function Ye(e, t) {
            return ge(e.inputAmount.currency, t.inputAmount.currency) || A(!1),
            ge(e.outputAmount.currency, t.outputAmount.currency) || A(!1),
            e.outputAmount.equalTo(t.outputAmount) ? e.inputAmount.equalTo(t.inputAmount) ? 0 : e.inputAmount.lessThan(t.inputAmount) ? -1 : 1 : e.outputAmount.lessThan(t.outputAmount) ? 1 : -1
        }
        function $e(e, t) {
            if (e && t) {
                var n = e.outputAmount
                  , a = e.priceImpact
                  , r = t.outputAmount
                  , i = t.priceImpact
                  , o = !(null == a ? void 0 : a.lessThan(st))
                  , u = !(null == i ? void 0 : i.lessThan(st))
                  , s = n.greaterThan(r) || n.equalTo(r);
                return console.info("COMPARATOR :: can be receive: tradeA - " + (null == n ? void 0 : n.toSignificant(4)) + ", tradeB - " + (null == r ? void 0 : r.toSignificant(4)) + " :: priceImpactA - " + (null == a ? void 0 : a.toSignificant(4)) + ", priceImpactB - " + i.toSignificant(4)),
                s ? o ? t : e : u ? e : t
            }
            return console.info("COMPARATOR ::  chose trade: " + ((e ? "tradeA" : !!t && "tradeB") || "null")),
            e || t
        }
        function Ze(e, t) {
            var n = Ye(e, t);
            return 0 !== n ? n : e.priceImpact.lessThan(t.priceImpact) ? -1 : e.priceImpact.greaterThan(t.priceImpact) ? 1 : e.route.path.length - t.route.path.length
        }
        function ze(e, t) {
            return e instanceof ke ? e : e.currency === Ve(t) ? new ke(Me[t],e.raw) : void A(!1)
        }
        function Je(e, t) {
            var n = t && Ke[t]
              , a = Boolean((null == e ? void 0 : e.symbol) === (null == n ? void 0 : n.symbol)) || Boolean(e === n);
            return t && a ? Me[t] : new _e(t,(null == e ? void 0 : e.address) || "",e.decimals,(null == e ? void 0 : e.symbol) || "unnamed")
        }
        var Qe = function() {
            function e(e, n, a, r, i) {
                var o, u, s, c = new Array(n.path.length), d = new Array(n.pairs.length);
                if (r === t.YL.EXACT_INPUT) {
                    ge(a.currency, n.input) || A(!1),
                    c[0] = ze(a, n.chainId);
                    for (var l = 0; l < n.path.length - 1; l++) {
                        var p = n.pairs[l].getOutputAmount(c[l], i.factory, i.initCodeHash)
                          , f = p[1];
                        c[l + 1] = p[0],
                        d[l] = f
                    }
                } else {
                    ge(a.currency, n.output) || A(!1),
                    c[c.length - 1] = ze(a, n.chainId);
                    for (var T = n.path.length - 1; T > 0; T--) {
                        var y = n.pairs[T - 1].getInputAmount(c[T], i.factory, i.initCodeHash)
                          , m = y[1];
                        c[T - 1] = y[0],
                        d[T - 1] = m
                    }
                }
                this.route = n,
                this.tradeType = r,
                this.inputAmount = r === t.YL.EXACT_INPUT ? a : n.input === Ve(e) ? Pe.ether(c[0].raw, e) : c[0],
                this.outputAmount = r === t.YL.EXACT_OUTPUT ? a : n.output === Ve(e) ? Pe.ether(c[c.length - 1].raw, e) : c[c.length - 1],
                this.executionPrice = new Re(this.inputAmount.currency,this.outputAmount.currency,this.inputAmount.raw,this.outputAmount.raw),
                this.nextMidPrice = Re.fromRoute(new We(e,d,n.input)),
                this.priceImpact = (o = this.outputAmount,
                s = (u = n.midPrice.raw.multiply(this.inputAmount.raw)).subtract(o.raw).divide(u),
                new Xe(s.numerator,s.denominator)),
                this.config = i
            }
            e.exactIn = function(n, a, r, i) {
                return new e(n,a,r,t.YL.EXACT_INPUT,i)
            }
            ,
            e.exactOut = function(n, a, r, i) {
                return new e(n,a,r,t.YL.EXACT_OUTPUT,i)
            }
            ;
            var n = e.prototype;
            return n.minimumAmountOut = function(e, n, a) {
                if (void 0 === a && (a = !1),
                n.lessThan(q) && A(!1),
                this.tradeType === t.YL.EXACT_OUTPUT)
                    return this.outputAmount;
                var r = h.BigInt(100)
                  , i = h.BigInt(100 - (a ? 2 : 0))
                  , o = new De(G).add(n).invert().multiply(this.outputAmount.raw).divide(r).multiply(i).quotient;
                return this.outputAmount instanceof ke ? new ke(this.outputAmount.token,o) : Pe.ether(o, e)
            }
            ,
            n.maximumAmountIn = function(e, n, a) {
                if (n.lessThan(q) && A(!1),
                this.tradeType === t.YL.EXACT_INPUT)
                    return this.inputAmount;
                var r = new De(G).add(n).multiply(this.inputAmount.raw).quotient;
                return this.inputAmount instanceof ke ? new ke(this.inputAmount.token,r) : Pe.ether(r, e)
            }
            ,
            e.bestTradeExactIn = function(n, a, r, i, o, u, s, c) {
                var d = void 0 === i ? {} : i
                  , l = d.maxNumResults
                  , p = void 0 === l ? 3 : l
                  , f = d.maxHops
                  , T = void 0 === f ? 3 : f;
                void 0 === o && (o = []),
                void 0 === u && (u = r),
                void 0 === s && (s = []),
                n.length > 0 || A(!1),
                T > 0 || A(!1),
                u === r || o.length > 0 || A(!1);
                var y = r instanceof ke ? r.token.chainId : a instanceof _e ? a.chainId : void 0;
                void 0 === y && A(!1);
                for (var m = ze(r, y), E = Je(a, y), b = 0; b < n.length; b++) {
                    var h = n[b];
                    if ((h.token0.equals(m.token) || h.token1.equals(m.token)) && !h.reserve0.equalTo(q) && !h.reserve1.equalTo(q)) {
                        var v = void 0;
                        try {
                            v = h.getOutputAmount(m, c.factory, c.initCodeHash)[0]
                        } catch (e) {
                            if (e.isInsufficientInputAmountError)
                                continue;
                            throw e
                        }
                        if (E && v.token.equals(E))
                            Ee(s, new e(y,new We(y,[].concat(o, [h]),u.currency,a),u,t.YL.EXACT_INPUT,c), p, Ze);
                        else if (T > 1 && n.length > 1) {
                            var _ = n.slice(0, b).concat(n.slice(b + 1, n.length));
                            e.bestTradeExactIn(_, a, v, {
                                maxNumResults: p,
                                maxHops: T - 1
                            }, [].concat(o, [h]), u, s, c)
                        }
                    }
                }
                return s
            }
            ,
            e.bestTradeExactOut = function(n, a, r, i, o, u, s, c) {
                var d = void 0 === i ? {} : i
                  , l = d.maxNumResults
                  , p = void 0 === l ? 3 : l
                  , f = d.maxHops
                  , T = void 0 === f ? 3 : f;
                void 0 === o && (o = []),
                void 0 === u && (u = r),
                void 0 === s && (s = []),
                n.length > 0 || A(!1),
                T > 0 || A(!1),
                u === r || o.length > 0 || A(!1);
                var y = r instanceof ke ? r.token.chainId : a instanceof _e ? a.chainId : void 0;
                void 0 === y && A(!1);
                for (var m = ze(r, y), E = Je(a, y), b = 0; b < n.length; b++) {
                    var h = n[b];
                    if ((h.token0.equals(m.token) || h.token1.equals(m.token)) && !h.reserve0.equalTo(q) && !h.reserve1.equalTo(q)) {
                        var v = void 0;
                        try {
                            v = h.getInputAmount(m, c.factory, c.initCodeHash)[0]
                        } catch (e) {
                            if (e.isInsufficientReservesError)
                                continue;
                            throw e
                        }
                        if (E && v.token.equals(E))
                            Ee(s, new e(y,new We(y,[h].concat(o),a,u.currency),u,t.YL.EXACT_OUTPUT,c), p, Ze);
                        else if (T > 1 && n.length > 1) {
                            var _ = n.slice(0, b).concat(n.slice(b + 1, n.length));
                            e.bestTradeExactOut(_, a, v, {
                                maxNumResults: p,
                                maxHops: T - 1
                            }, [h].concat(o), u, s, c)
                        }
                    }
                }
                return s
            }
            ,
            e
        }()
          , et = function() {
            function e(e, t) {
                this.foreignProvider = e,
                this.foreignChainId = t
            }
            var t = e.prototype;
            return t.rateForeignChain = function(e, t) {
                try {
                    var n, a, r = e.currencyB, i = new mt(this.foreignProvider,this.foreignChainId), o = this.getStable(), u = xe[this.foreignChainId];
                    return r && (null === (n = Je(r, this.foreignChainId)) || void 0 === n || null === (a = n.equals) || void 0 === a ? void 0 : a.call(n, o)) ? Promise.resolve(i.swapExactIn(ae({}, e, {
                        currencyA: null == e ? void 0 : e.currencyB,
                        currencyB: u,
                        comparator: "hybrid"
                    }))).then((function(e) {
                        return {
                            tradeToStable: null,
                            tradeToErc20: e,
                            targetStable: null
                        }
                    }
                    )) : Promise.resolve(i.swapExactIn(ae({}, e, {
                        account: t,
                        currencyA: o,
                        currencyB: u,
                        comparator: "onlyA"
                    }))).then((function(t) {
                        var n, a;
                        return Promise.resolve(i.swapExactIn(ae({}, e, {
                            currencyA: r,
                            currencyB: o,
                            amount: (null == t || null === (n = t.trade) || void 0 === n || null === (a = n.outputAmount) || void 0 === a ? void 0 : a.toSignificant(6)) || "0",
                            comparator: "hybrid"
                        }))).then((function(e) {
                            return {
                                tradeToStable: t,
                                tradeToErc20: e,
                                targetStable: o
                            }
                        }
                        ))
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            t.getStable = function() {
                return Me[this.foreignChainId]
            }
            ,
            e
        }();
        function tt(e, t) {
            try {
                var n = e()
            } catch (e) {
                return t(e)
            }
            return n && n.then ? n.then(void 0, t) : n
        }
        "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
        var nt = new Xe(h.BigInt(1),h.BigInt(1e4))
          , at = h.BigInt(1e4)
          , rt = new Xe(h.BigInt(100),at)
          , it = new Xe(h.BigInt(300),at)
          , ot = new Xe(h.BigInt(500),at)
          , ut = new Xe(h.BigInt(1e3),at)
          , st = new Xe(h.BigInt(1500),at)
          , ct = h.exponentiate(h.BigInt(10), h.BigInt(16))
          , dt = new Xe(h.BigInt(75),h.BigInt(1e4))
          , lt = Ae().reduce((function(e, t) {
            var n;
            return ae({}, e, ((n = {})[t] = [Me[t]],
            n))
        }
        ), {})
          , pt = function(e) {
            return Ae().reduce((function(t, n) {
                var a, r, i, o = null === (a = e[n]) || void 0 === a || null === (r = a.tokens) || void 0 === r ? void 0 : r.map((function(e) {
                    return new _e(e.chainId,e.address,e.decimals,e.symbol,e.name)
                }
                ));
                return ae({}, t, ((i = {})[n] = [].concat(lt[n], o),
                i))
            }
            ), {})
        }
          , ft = ae({}, Ae().reduce((function(e, t) {
            var n;
            return ae({}, e, ((n = {})[t] = {},
            n))
        }
        ), {}));
        function Tt(e) {
            var n, a, r = e.trade, i = e.chainId, o = e.recipient, u = e.allowedSlippage, s = void 0 === u ? 80 : u, c = e.deadline, d = void 0 === c ? 1200 : c, l = e.provider;
            if (!(r && o && i && l))
                return [];
            var p, f = It({
                address: null == r || null === (n = r.config) || void 0 === n ? void 0 : n.router,
                provider: l
            }), T = [];
            return T.push(Ot.swapCallParameters(i, r, {
                feeOnTransfer: !1,
                allowedSlippage: new Xe(h.BigInt(Math.floor(s)),at),
                recipient: o,
                ttl: d
            }, null == r || null === (a = r.config) || void 0 === a ? void 0 : a.type)),
            r.tradeType === t.YL.EXACT_INPUT && T.push(Ot.swapCallParameters(i, r, {
                feeOnTransfer: !0,
                allowedSlippage: new Xe(h.BigInt(Math.floor(s)),at),
                recipient: o,
                ttl: d
            }, null == r || null === (p = r.config) || void 0 === p ? void 0 : p.type)),
            T.map((function(e) {
                return {
                    parameters: e,
                    contract: f
                }
            }
            ))
        }
        var yt, mt = function() {
            function e(e, t) {
                this.provider = e,
                this.chainId = t
            }
            var t = e.prototype;
            return t.swapExactIn = function(e) {
                return this.swapFactory(e, "bestTradeExactIn")
            }
            ,
            t.swapExactOut = function(e) {
                return this.swapFactory(e, "bestTradeExactOut")
            }
            ,
            t.swapFactory = function(t, n) {
                try {
                    var a = this
                      , r = new _t(a.provider,a.chainId);
                    return Promise.resolve(r.getPairs(ae({}, t))).then((function(r) {
                        if (r) {
                            var i = r.pairsData
                              , o = i.chainId
                              , u = i.account
                              , s = r.aliumPairs
                              , c = r.sidePairs
                              , d = e.findBestTrade(n, i.currencyA, i.currencyB, i.amount, s, c, o, t.comparator);
                            return {
                                aliumPairs: s,
                                sidePairs: c,
                                trade: d,
                                callData: e.getCallArgument({
                                    chainId: o,
                                    recipient: u,
                                    trade: d,
                                    provider: a.provider,
                                    allowedSlippage: null == t ? void 0 : t.allowedSlippage,
                                    deadline: null == t ? void 0 : t.deadline
                                })
                            }
                        }
                        return null
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            e.findBestTrade = function(e, t, n, a, r, i, o, u) {
                void 0 === u && (u = "hybrid");
                var s = vt(o, "alium")
                  , c = vt(o, "side")
                  , d = xt(o, a, n)
                  , l = (null == r ? void 0 : r.length) && d && Qe[e](r, t, d, {
                    maxHops: 3,
                    maxNumResults: 1
                }, void 0, void 0, void 0, s)[0] || null
                  , p = (null == i ? void 0 : i.length) && d && Qe[e](i, t, d, {
                    maxHops: 3,
                    maxNumResults: 1
                }, void 0, void 0, void 0, c)[0] || null;
                switch (u) {
                case "hybrid":
                    return $e(l, p);
                case "onlyA":
                    return l;
                case "onlyB":
                    return p
                }
            }
            ,
            e.getCallArgument = function(e) {
                return Tt(e)
            }
            ,
            e.estimateCalc = function(e, t, n, a) {
                if (!n || !t || !a)
                    return null;
                var r = It({
                    address: n,
                    provider: t,
                    account: a
                });
                return (null == e ? void 0 : e.length) && r ? function() {
                    try {
                        return Promise.resolve(Promise.all(e.map((function(e) {
                            try {
                                var t = e.parameters
                                  , n = t.methodName
                                  , a = t.args
                                  , i = t.value
                                  , o = !i || wt(i) ? {} : {
                                    value: i
                                };
                                return Promise.resolve(tt((function() {
                                    var t;
                                    return Promise.resolve((t = r.estimateGas)[n].apply(t, a.concat([o]))).then((function(t) {
                                        return {
                                            call: e,
                                            gasEstimate: t
                                        }
                                    }
                                    ))
                                }
                                ), (function(t) {
                                    return console.info("Gas estimate failed, trying eth_call to extract error", e),
                                    tt((function() {
                                        var i;
                                        return Promise.resolve((i = r.callStatic)[n].apply(i, a.concat([o]))).then((function(n) {
                                            return console.info("Unexpected successful call after failed estimate gas", e, t, n),
                                            {
                                                call: e,
                                                error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                            }
                                        }
                                        ))
                                    }
                                    ), (function(t) {
                                        var n;
                                        switch (console.info("Call threw error", e, t),
                                        null == t ? void 0 : t.reason) {
                                        case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                        case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                            return void (n = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");
                                        default:
                                            n = "The transaction cannot succeed. This is probably caused by overrunning the slippage tolerance or expiring timeout.\n                        Please try again or change these settings in the Settings menu."
                                        }
                                        return {
                                            call: e,
                                            error: new Error(n)
                                        }
                                    }
                                    ))
                                }
                                )))
                            } catch (e) {
                                return Promise.reject(e)
                            }
                        }
                        )))).then((function(e) {
                            var t = e.find((function(e, t, n) {
                                return "gasEstimate"in e && (t === n.length - 1 || "gasEstimate"in n[t + 1])
                            }
                            ));
                            if (!t) {
                                var n = e.filter((function(e) {
                                    return "error"in e
                                }
                                ));
                                if (n.length > 0)
                                    throw n[n.length - 1].error;
                                throw new Error("Unexpected error. Please contact support: none of the calls threw an error")
                            }
                            return Promise.resolve(St(r.provider)).then((function(e) {
                                var n = O.formatEther(e.mul(Dt(t.gasEstimate)));
                                return {
                                    successfulEstimation: t,
                                    transactionFee: n,
                                    gasPrice: e
                                }
                            }
                            ))
                        }
                        ))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                : null
            }
            ,
            e
        }(), Et = function() {
            function e(e, t) {
                this.provider = e,
                this.chainId = t
            }
            return e.prototype.calculate = function(t) {
                try {
                    var n = this
                      , a = new _t(n.provider,n.chainId);
                    return Promise.resolve(a.getPairsRoutes(t)).then((function(a) {
                        var r;
                        return (null === (r = Object.values(a)) || void 0 === r ? void 0 : r.length) ? e.rateRoutes(t, a, n.chainId, n.provider) : null
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            e.rateRoutes = function(t, n, a, r) {
                var i, o, u, s, c, d, l = t.account, p = t.currencyA, f = t.method, T = xt(a, t.amount, t.currencyB), y = Object.keys(n).map((function(i) {
                    var o, u, s = n[i];
                    if (!(null == s || null === (o = s.pairs) || void 0 === o ? void 0 : o.length) || !T)
                        return null;
                    var c = null === (u = Qe[f](s.pairs, p, T, {
                        maxHops: 3,
                        maxNumResults: 1
                    }, void 0, void 0, void 0, s.config)) || void 0 === u ? void 0 : u[0]
                      , d = e.getCallArgument({
                        chainId: a,
                        recipient: l,
                        trade: c,
                        provider: r,
                        allowedSlippage: null == t ? void 0 : t.allowedSlippage,
                        deadline: null == t ? void 0 : t.deadline
                    });
                    return c ? {
                        trade: c,
                        calldata: d,
                        config: s.config
                    } : null
                }
                )).filter((function(e) {
                    return !!e
                }
                ));
                return c = !(null == (s = M.maxBy(i = y, (function(e) {
                    var t, n;
                    return null == e || null === (t = e.trade) || void 0 === t || null === (n = t.outputAmount) || void 0 === n ? void 0 : n.raw
                }
                ))) || null === (o = s.trade) || void 0 === o || null === (u = o.priceImpact) || void 0 === u ? void 0 : u.lessThan(st)),
                d = M.minBy(i, (function(e) {
                    var t, n;
                    return null == e || null === (t = e.trade) || void 0 === t || null === (n = t.priceImpact) || void 0 === n ? void 0 : n.numerator
                }
                )),
                {
                    bestTrade: c ? d : s,
                    all: i
                }
            }
            ,
            e.getCallArgument = function(e) {
                try {
                    return Tt(e)
                } catch (e) {
                    return console.error(e),
                    []
                }
            }
            ,
            e
        }(), bt = ((yt = {})[t.a_.MAINNET] = {
            "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A": 9
        },
        yt), ht = function() {
            function e() {}
            return e.fetchTokenData = function(e, t, n, a, r) {
                try {
                    var i, o, u = function(n) {
                        return new _e(e,t,n,a,r)
                    };
                    void 0 === n && (n = F.getDefaultProvider(w.getNetwork(e)));
                    var s = "number" == typeof (null === (i = bt) || void 0 === i || null === (o = i[e]) || void 0 === o ? void 0 : o[t]);
                    return Promise.resolve(s ? u(bt[e][t]) : Promise.resolve(new x.Contract(t,ee,n).decimals().then((function(n) {
                        var a, r, i;
                        return bt = ae({}, bt, ((i = {})[e] = ae({}, null === (a = bt) || void 0 === a ? void 0 : a[e], ((r = {})[t] = n,
                        r)),
                        i)),
                        n
                    }
                    ))).then(u))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            e.fetchPairData = function(e, t, n, a, r) {
                try {
                    void 0 === n && (n = F.getDefaultProvider(w.getNetwork(e.chainId))),
                    e.chainId !== t.chainId && A(!1);
                    var i = Ge.getAddress(e, t, a, r);
                    return Promise.resolve(new x.Contract(i,z,n).getReserves()).then((function(n) {
                        var i = n[0]
                          , o = n[1]
                          , u = e.sortsBefore(t) ? [i, o] : [o, i];
                        return new Ge(new ke(e,u[0]),new ke(t,u[1]),a,r)
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            e
        }(), At = function() {
            function e(e, t) {
                this.provider = e,
                this.chainId = t,
                this.tokensService = new Nt
            }
            var t = e.prototype;
            return t.findPairs = function(e, t, n) {
                try {
                    var a = this;
                    return Promise.resolve(a.tokensService.getTokens()).then((function(r) {
                        var i = function(e, t, n, a, r) {
                            var i = pt(r)[a]
                              , o = S(i, (function(e) {
                                return i.map((function(t) {
                                    return [e, t]
                                }
                                ))
                            }
                            )).filter((function(e) {
                                var t = e[0]
                                  , n = e[1];
                                return (null == t ? void 0 : t.address) !== (null == n ? void 0 : n.address)
                            }
                            ))
                              , u = a ? [Je(e, a), Je(t, a)] : [void 0, void 0]
                              , s = u[0]
                              , c = u[1]
                              , d = s && c ? [[s, c]].concat(i.map((function(e) {
                                return [s, e]
                            }
                            )), i.map((function(e) {
                                return [c, e]
                            }
                            )), o).filter((function(e) {
                                return Boolean(e[0] && e[1])
                            }
                            )).filter((function(e) {
                                return e[0].address !== e[1].address
                            }
                            )).filter((function(e) {
                                var t = e[0]
                                  , n = e[1];
                                if (!a)
                                    return !0;
                                var r = ft[a];
                                if (!r)
                                    return !0;
                                var i = r[t.address]
                                  , o = r[n.address];
                                return !((i || o) && (i && !i.find((function(e) {
                                    return n.equals(e)
                                }
                                )) || o && !o.find((function(e) {
                                    return t.equals(e)
                                }
                                ))))
                            }
                            )).filter((function(e) {
                                var t = e[0]
                                  , n = e[1];
                                return (null == t ? void 0 : t.equals(s)) || (null == t ? void 0 : t.equals(c)) || (null == n ? void 0 : n.equals(s)) || (null == n ? void 0 : n.equals(c))
                            }
                            )) : [];
                            return I(function(e, t, n) {
                                var a = null == t ? void 0 : t.factory
                                  , r = null == t ? void 0 : t.initCodeHash;
                                return e.map((function(e) {
                                    var t = e[1];
                                    return [Je(e[0], n), Je(t, n)]
                                }
                                )).map((function(e) {
                                    var t = e[0]
                                      , n = e[1];
                                    try {
                                        return {
                                            address: t && n && !t.equals(n) ? Ge.getAddress(t, n, a, r) : void 0,
                                            tokenA: t,
                                            tokenB: n
                                        }
                                    } catch (e) {
                                        return void console.error(e)
                                    }
                                }
                                )).filter((function(e) {
                                    return !!e
                                }
                                ))
                            }(d, n, a), "address")
                        }(e, t, n, a.chainId, r);
                        return Promise.resolve(a.getPairs(i, n)).then((function(e) {
                            return e.pairs
                        }
                        ))
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            t.getPairs = function(e, t) {
                try {
                    var n = null == t ? void 0 : t.factory
                      , a = null == t ? void 0 : t.initCodeHash;
                    return Promise.resolve(this.fetchReserves(e)).then((function(e) {
                        return {
                            pairs: null == e ? void 0 : e.map((function(e) {
                                var t = e.reserves
                                  , r = e.pair
                                  , i = r.tokenA
                                  , o = r.tokenB;
                                if (!i || !o || i.equals(o))
                                    return null;
                                if (!t)
                                    return null;
                                var u = t.reserve0
                                  , s = t.reserve1
                                  , c = (null == i ? void 0 : i.sortsBefore(o)) ? [i, o] : [o, i]
                                  , d = c[1];
                                return new Ge(new ke(c[0],null == u ? void 0 : u.toString()),new ke(d,null == s ? void 0 : s.toString()),n,a)
                            }
                            )).filter((function(e) {
                                return !!e
                            }
                            ))
                        }
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            t.fetchReserves = function(e) {
                try {
                    return Promise.resolve(Mt(z, null == e ? void 0 : e.map((function(e) {
                        return {
                            address: e.address,
                            name: "getReserves"
                        }
                    }
                    )), this.provider, this.chainId)).then((function(t) {
                        return e.map((function(e, n) {
                            return {
                                reserves: t[n],
                                pair: e
                            }
                        }
                        ))
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            e
        }(), vt = function(e, t) {
            return {
                router: R[t].router[e] || R.alium.router[e],
                initCodeHash: R[t].initCodeHash[e] || R.alium.initCodeHash[e],
                factory: R[t].factory[e] || R.alium.factory[e],
                type: t
            }
        }, _t = function() {
            function e(e, t) {
                this.provider = e,
                this.chainId = t
            }
            var t = e.prototype;
            return t.getPairsRoutes = function(e) {
                var t = e.routes
                  , n = e.currencyA
                  , a = e.currencyB
                  , r = new At(this.provider,this.chainId);
                return null == t ? void 0 : t.reduce((function(e, t) {
                    try {
                        return Promise.resolve(e).then((function(e) {
                            function i() {
                                return Promise.resolve(e)
                            }
                            var o = tt((function() {
                                return Promise.resolve(r.findPairs(n, a, t)).then((function(n) {
                                    var a;
                                    e[t.router] = {
                                        pairs: [].concat((null === (a = e[t.router]) || void 0 === a ? void 0 : a.pairs) || [], (null == n ? void 0 : n.length) ? n : []),
                                        config: t
                                    }
                                }
                                ))
                            }
                            ), (function() {
                                e[t.router] = {
                                    pairs: [],
                                    config: t
                                }
                            }
                            ));
                            return o && o.then ? o.then(i) : i()
                        }
                        ))
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                ), Promise.resolve({}))
            }
            ,
            t.getPairs = function(e) {
                try {
                    var t = this
                      , n = e.currencyA
                      , a = e.currencyB
                      , r = new At(t.provider,t.chainId)
                      , i = e.account
                      , o = e.amount
                      , u = vt(t.chainId, "alium")
                      , s = vt(t.chainId, "side");
                    return Promise.resolve(r.findPairs(n, a, u)).then((function(e) {
                        return Promise.resolve(r.findPairs(n, a, s)).then((function(r) {
                            return {
                                aliumPairs: e,
                                sidePairs: r,
                                pairsData: {
                                    currencyA: n,
                                    currencyB: a,
                                    amount: o,
                                    chainId: t.chainId,
                                    account: i
                                }
                            }
                        }
                        ))
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            e
        }(), gt = null, Nt = function() {
            function e() {}
            var t = e.prototype;
            return t.getTokens = function() {
                try {
                    var e = this
                      , t = e.getCache();
                    return t ? Promise.resolve(t) : Promise.resolve(function() {
                        try {
                            return Promise.resolve(function() {
                                try {
                                    return Promise.resolve(D.get("https://api.github.com/repos/Rinance-Finance/tokens-list/git/trees/main?recursive=1")).then((function(e) {
                                        var t;
                                        return null == e || null === (t = e.data) || void 0 === t ? void 0 : t.tree.filter((function(e) {
                                            var t;
                                            return null == e || null === (t = e.path) || void 0 === t ? void 0 : t.startsWith("lists/")
                                        }
                                        )).map((function(e) {
                                            return e.path.replace("lists/", "")
                                        }
                                        )).map((function(e) {
                                            return "https://raw.githubusercontent.com/Rinance-Finance/tokens-list/main/lists/" + e
                                        }
                                        ))
                                    }
                                    ))
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                            }()).then((function(e) {
                                return Promise.resolve(null == e ? void 0 : e.reduce((function(e, t) {
                                    try {
                                        return Promise.resolve(e).then((function(e) {
                                            var n = e.push;
                                            return Promise.resolve(D.get(t)).then((function(t) {
                                                return n.call(e, t),
                                                e
                                            }
                                            ))
                                        }
                                        ))
                                    } catch (e) {
                                        return Promise.reject(e)
                                    }
                                }
                                ), Promise.resolve([]))).then((function(e) {
                                    return e.reduce((function(e, t) {
                                        var n, a = t.data;
                                        return ae({}, e, ((n = {})[null == a ? void 0 : a.tokens[0].chainId] = a,
                                        n))
                                    }
                                    ), {})
                                }
                                ))
                            }
                            ))
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }()).then((function(t) {
                        return e.setCache(t),
                        t
                    }
                    ))
                } catch (e) {
                    return Promise.reject(e)
                }
            }
            ,
            t.setCache = function(e) {
                gt = e
            }
            ,
            t.getCache = function() {
                return gt
            }
            ,
            e
        }();
        function Ct(e) {
            return "0x" + e.raw.toString(16)
        }
        var Ot = function() {
            function e() {}
            return e.swapCallParameters = function(e, n, a, r) {
                var i = n.inputAmount.currency === Ve(e)
                  , o = n.outputAmount.currency === Ve(e);
                i && o && A(!1),
                a.ttl > 0 || A(!1);
                var u, s, c, d = "alium" !== r, l = Te(a.recipient), p = Ct(n.maximumAmountIn(e, a.allowedSlippage, d)), f = Ct(n.minimumAmountOut(e, a.allowedSlippage, d)), T = n.route.path.map((function(e) {
                    var t;
                    return null !== (t = e.address) && void 0 !== t ? t : ""
                }
                )), y = "0x" + (Math.floor((new Date).getTime() / 1e3) + a.ttl).toString(16), m = Boolean(a.feeOnTransfer);
                switch (n.tradeType) {
                case t.YL.EXACT_INPUT:
                    i ? (u = m ? "swapExactETHForTokensSupportingFeeOnTransferTokens" : "swapExactETHForTokens",
                    s = [f, T, l, y],
                    c = p) : o ? (u = m ? "swapExactTokensForETHSupportingFeeOnTransferTokens" : "swapExactTokensForETH",
                    s = [p, f, T, l, y],
                    c = "0x0") : (u = m ? "swapExactTokensForTokensSupportingFeeOnTransferTokens" : "swapExactTokensForTokens",
                    s = [p, f, T, l, y],
                    c = "0x0");
                    break;
                case t.YL.EXACT_OUTPUT:
                    m && A(!1),
                    i ? (u = "swapETHForExactTokens",
                    s = [f, T, l, y],
                    c = p) : o ? (u = "swapTokensForExactETH",
                    s = [f, p, T, l, y],
                    c = "0x0") : (u = "swapTokensForExactTokens",
                    s = [f, p, T, l, y],
                    c = "0x0")
                }
                return {
                    methodName: u,
                    args: s,
                    value: c
                }
            }
            ,
            e
        }()
          , Mt = function(e, t, n, a) {
            try {
                return Promise.resolve(tt((function() {
                    var r = new P.Contract(H[a],J,n)
                      , i = new B.Interface(e)
                      , o = t.map((function(e) {
                        return [e.address.toLowerCase(), i.encodeFunctionData(e.name, e.params)]
                    }
                    ));
                    return Promise.resolve(r.tryAggregate(!1, o)).then((function(e) {
                        return e.map((function(e, n) {
                            return e.success ? i.decodeFunctionResult(t[n].name, e.returnData) : null
                        }
                        ))
                    }
                    ))
                }
                ), (function(e) {
                    throw new Error((null == e ? void 0 : e.message) || "unknown multicall error")
                }
                )))
            } catch (e) {
                return Promise.reject(e)
            }
        };
        function xt(e, t, n) {
            if (t && n)
                try {
                    var a = O.parseUnits(t, n.decimals).toString();
                    if ("0" !== a) {
                        var r = function(e) {
                            var t = e;
                            return {
                                Ether: Ke[e],
                                calcAmount: function(e) {
                                    return Pe.ether(e, t)
                                }
                            }
                        }(e).calcAmount;
                        return n instanceof _e ? new ke(n,h.BigInt(a)) : r(a)
                    }
                } catch (e) {
                    console.info('Failed to parse input amount: "' + t + '"', e)
                }
        }
        function wt(e) {
            return /^0x0*$/.test(e)
        }
        var Ft = function(e) {
            var t = e.address
              , n = e.abi
              , a = e.provider
              , r = e.account;
            if (!v.isAddress(t))
                return console.error(t, "cannot be create in getContract, bad address"),
                null;
            if (!a)
                return console.error(t, "cannot be create in getContract, bad provider"),
                null;
            var i = r ? a.getSigner(r).connectUnchecked() : a;
            return new P.Contract(t,n,i)
        }
          , It = function(e) {
            return Ft(ae({}, e, {
                abi: Q
            }))
        }
          , St = function(e) {
            try {
                return Promise.resolve(e.getGasPrice()).then((function(e) {
                    return e.mul(P.BigNumber.from(1e4).add(P.BigNumber.from(3e3))).div(P.BigNumber.from(1e4))
                }
                ))
            } catch (e) {
                return Promise.reject(e)
            }
        };
        function Dt(e) {
            return e.mul(P.BigNumber.from(1e4).add(P.BigNumber.from(1e3))).div(P.BigNumber.from(1e4))
        }
        function Bt(e) {
            var t = (null == e ? void 0 : e.length) ? null == e ? void 0 : e.reduce((function(e, t) {
                var n, a = null == t || null === (n = t.interface) || void 0 === n ? void 0 : n.fragments;
                return a && e.push.apply(e, a),
                e
            }
            ), []) : [];
            return new B.Interface(t)
        }
        t.getExchangeConfig = vt
    },
    67887: function(e, t, n) {
        n.r(t),
        n.d(t, {
            BaseContract: function() {
                return i.BaseContract
            },
            BigNumber: function() {
                return o.O$
            },
            Contract: function() {
                return i.Contract
            },
            ContractFactory: function() {
                return i.ContractFactory
            },
            FixedNumber: function() {
                return A
            },
            Signer: function() {
                return x
            },
            VoidSigner: function() {
                return w
            },
            Wallet: function() {
                return F.Wallet
            },
            Wordlist: function() {
                return B.D
            },
            constants: function() {
                return I
            },
            errors: function() {
                return s.ErrorCode
            },
            ethers: function() {
                return r
            },
            getDefaultProvider: function() {
                return S.getDefaultProvider
            },
            logger: function() {
                return ce
            },
            providers: function() {
                return S
            },
            utils: function() {
                return a
            },
            version: function() {
                return se
            },
            wordlists: function() {
                return D.E
            }
        });
        var a = {};
        n.r(a),
        n.d(a, {
            AbiCoder: function() {
                return P.R
            },
            ConstructorFragment: function() {
                return k.Xg
            },
            ErrorFragment: function() {
                return k.IC
            },
            EventFragment: function() {
                return k.QV
            },
            FormatTypes: function() {
                return k.pc
            },
            Fragment: function() {
                return k.HY
            },
            FunctionFragment: function() {
                return k.YW
            },
            HDNode: function() {
                return j.HDNode
            },
            Indexed: function() {
                return H.Hk
            },
            Interface: function() {
                return H.vU
            },
            LogDescription: function() {
                return H.CC
            },
            Logger: function() {
                return s.Logger
            },
            ParamType: function() {
                return k._R
            },
            RLP: function() {
                return Q
            },
            SigningKey: function() {
                return ee.SigningKey
            },
            SupportedAlgorithm: function() {
                return ue.p
            },
            TransactionDescription: function() {
                return H.vk
            },
            TransactionTypes: function() {
                return re.TransactionTypes
            },
            UnicodeNormalizationForm: function() {
                return ne.Uj
            },
            Utf8ErrorFuncs: function() {
                return ne.te
            },
            Utf8ErrorReason: function() {
                return ne.Uw
            },
            _TypedDataEncoder: function() {
                return V.E
            },
            _fetchData: function() {
                return oe._fetchData
            },
            _toEscapedUtf8String: function() {
                return ne.U$
            },
            accessListify: function() {
                return re.accessListify
            },
            arrayify: function() {
                return u.arrayify
            },
            base58: function() {
                return q.Base58
            },
            base64: function() {
                return U
            },
            checkProperties: function() {
                return g.checkProperties
            },
            checkResultErrors: function() {
                return R.BR
            },
            commify: function() {
                return ie.commify
            },
            computeAddress: function() {
                return re.computeAddress
            },
            computeHmac: function() {
                return $.Gy
            },
            computePublicKey: function() {
                return ee.computePublicKey
            },
            concat: function() {
                return u.concat
            },
            deepCopy: function() {
                return g.deepCopy
            },
            defaultAbiCoder: function() {
                return P.$
            },
            defaultPath: function() {
                return j.defaultPath
            },
            defineReadOnly: function() {
                return g.defineReadOnly
            },
            entropyToMnemonic: function() {
                return j.entropyToMnemonic
            },
            fetchJson: function() {
                return oe.fetchJson
            },
            formatBytes32String: function() {
                return ae.s
            },
            formatEther: function() {
                return ie.formatEther
            },
            formatUnits: function() {
                return ie.formatUnits
            },
            getAccountPath: function() {
                return j.getAccountPath
            },
            getAddress: function() {
                return L.getAddress
            },
            getContractAddress: function() {
                return L.getContractAddress
            },
            getCreate2Address: function() {
                return L.getCreate2Address
            },
            getIcapAddress: function() {
                return L.getIcapAddress
            },
            getJsonWalletAddress: function() {
                return X.Rb
            },
            getStatic: function() {
                return g.getStatic
            },
            hashMessage: function() {
                return G.r
            },
            hexConcat: function() {
                return u.hexConcat
            },
            hexDataLength: function() {
                return u.hexDataLength
            },
            hexDataSlice: function() {
                return u.hexDataSlice
            },
            hexStripZeros: function() {
                return u.hexStripZeros
            },
            hexValue: function() {
                return u.hexValue
            },
            hexZeroPad: function() {
                return u.hexZeroPad
            },
            hexlify: function() {
                return u.hexlify
            },
            id: function() {
                return K.id
            },
            isAddress: function() {
                return L.isAddress
            },
            isBytes: function() {
                return u.isBytes
            },
            isBytesLike: function() {
                return u.isBytesLike
            },
            isHexString: function() {
                return u.isHexString
            },
            isValidMnemonic: function() {
                return j.isValidMnemonic
            },
            isValidName: function() {
                return W.r
            },
            joinSignature: function() {
                return u.joinSignature
            },
            keccak256: function() {
                return Y.keccak256
            },
            mnemonicToEntropy: function() {
                return j.mnemonicToEntropy
            },
            mnemonicToSeed: function() {
                return j.mnemonicToSeed
            },
            namehash: function() {
                return W.V
            },
            nameprep: function() {
                return te.Ll
            },
            parseBytes32String: function() {
                return ae.F
            },
            parseEther: function() {
                return ie.parseEther
            },
            parseTransaction: function() {
                return re.parse
            },
            parseUnits: function() {
                return ie.parseUnits
            },
            poll: function() {
                return oe.poll
            },
            randomBytes: function() {
                return z.O
            },
            recoverAddress: function() {
                return re.recoverAddress
            },
            recoverPublicKey: function() {
                return ee.recoverPublicKey
            },
            resolveProperties: function() {
                return g.resolveProperties
            },
            ripemd160: function() {
                return $.bP
            },
            serializeTransaction: function() {
                return re.serialize
            },
            sha256: function() {
                return $.JQ
            },
            sha512: function() {
                return $.o
            },
            shallowCopy: function() {
                return g.shallowCopy
            },
            shuffled: function() {
                return J.y
            },
            solidityKeccak256: function() {
                return Z.keccak256
            },
            solidityPack: function() {
                return Z.pack
            },
            soliditySha256: function() {
                return Z.sha256
            },
            splitSignature: function() {
                return u.splitSignature
            },
            stripZeros: function() {
                return u.stripZeros
            },
            toUtf8Bytes: function() {
                return ne.Y0
            },
            toUtf8CodePoints: function() {
                return ne.XL
            },
            toUtf8String: function() {
                return ne.ZN
            },
            verifyMessage: function() {
                return F.verifyMessage
            },
            verifyTypedData: function() {
                return F.verifyTypedData
            },
            zeroPad: function() {
                return u.zeroPad
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            BaseContract: function() {
                return i.BaseContract
            },
            BigNumber: function() {
                return o.O$
            },
            Contract: function() {
                return i.Contract
            },
            ContractFactory: function() {
                return i.ContractFactory
            },
            FixedNumber: function() {
                return A
            },
            Signer: function() {
                return x
            },
            VoidSigner: function() {
                return w
            },
            Wallet: function() {
                return F.Wallet
            },
            Wordlist: function() {
                return B.D
            },
            constants: function() {
                return I
            },
            errors: function() {
                return s.ErrorCode
            },
            getDefaultProvider: function() {
                return S.getDefaultProvider
            },
            logger: function() {
                return ce
            },
            providers: function() {
                return S
            },
            utils: function() {
                return a
            },
            version: function() {
                return se
            },
            wordlists: function() {
                return D.E
            }
        });
        var i = n(39529)
          , o = n(2593)
          , u = n(93286)
          , s = n(80711)
          , c = n(48794);
        const d = new s.Logger(c.i)
          , l = {}
          , p = o.O$.from(0)
          , f = o.O$.from(-1);
        function T(e, t, n, a) {
            const r = {
                fault: t,
                operation: n
            };
            return void 0 !== a && (r.value = a),
            d.throwError(e, s.Logger.errors.NUMERIC_FAULT, r)
        }
        let y = "0";
        for (; y.length < 256; )
            y += y;
        function m(e) {
            if ("number" !== typeof e)
                try {
                    e = o.O$.from(e).toNumber()
                } catch (t) {}
            return "number" === typeof e && e >= 0 && e <= 256 && !(e % 1) ? "1" + y.substring(0, e) : d.throwArgumentError("invalid decimal size", "decimals", e)
        }
        function E(e, t) {
            null == t && (t = 0);
            const n = m(t)
              , a = (e = o.O$.from(e)).lt(p);
            a && (e = e.mul(f));
            let r = e.mod(n).toString();
            for (; r.length < n.length - 1; )
                r = "0" + r;
            r = r.match(/^([0-9]*[1-9]|0)(0*)/)[1];
            const i = e.div(n).toString();
            return e = 1 === n.length ? i : i + "." + r,
            a && (e = "-" + e),
            e
        }
        function b(e, t) {
            null == t && (t = 0);
            const n = m(t);
            "string" === typeof e && e.match(/^-?[0-9.,]+$/) || d.throwArgumentError("invalid decimal value", "value", e);
            const a = "-" === e.substring(0, 1);
            a && (e = e.substring(1)),
            "." === e && d.throwArgumentError("missing value", "value", e);
            const r = e.split(".");
            r.length > 2 && d.throwArgumentError("too many decimal points", "value", e);
            let i = r[0]
              , u = r[1];
            i || (i = "0"),
            u || (u = "0");
            u.replace(/^([0-9]*?)(0*)$/, ((e,t,n)=>t)).length > n.length - 1 && T("fractional component exceeds decimals", "underflow", "parseFixed");
            for (; u.length < n.length - 1; )
                u += "0";
            const s = o.O$.from(i)
              , c = o.O$.from(u);
            let l = s.mul(n).add(c);
            return a && (l = l.mul(f)),
            l
        }
        class h {
            constructor(e, t, n, a) {
                e !== l && d.throwError("cannot use FixedFormat constructor; use FixedFormat.from", s.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new FixedFormat"
                }),
                this.signed = t,
                this.width = n,
                this.decimals = a,
                this.name = (t ? "" : "u") + "fixed" + String(n) + "x" + String(a),
                this._multiplier = m(a),
                Object.freeze(this)
            }
            static from(e) {
                if (e instanceof h)
                    return e;
                "number" === typeof e && (e = `fixed128x${e}`);
                let t = !0
                  , n = 128
                  , a = 18;
                if ("string" === typeof e)
                    if ("fixed" === e)
                        ;
                    else if ("ufixed" === e)
                        t = !1;
                    else {
                        const r = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        r || d.throwArgumentError("invalid fixed format", "format", e),
                        t = "u" !== r[1],
                        n = parseInt(r[2]),
                        a = parseInt(r[3])
                    }
                else if (e) {
                    const r = (t,n,a)=>null == e[t] ? a : (typeof e[t] !== n && d.throwArgumentError("invalid fixed format (" + t + " not " + n + ")", "format." + t, e[t]),
                    e[t]);
                    t = r("signed", "boolean", t),
                    n = r("width", "number", n),
                    a = r("decimals", "number", a)
                }
                return n % 8 && d.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", n),
                a > 80 && d.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", a),
                new h(l,t,n,a)
            }
        }
        class A {
            constructor(e, t, n, a) {
                d.checkNew(new.target, A),
                e !== l && d.throwError("cannot use FixedNumber constructor; use FixedNumber.from", s.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new FixedFormat"
                }),
                this.format = a,
                this._hex = t,
                this._value = n,
                this._isFixedNumber = !0,
                Object.freeze(this)
            }
            _checkFormat(e) {
                this.format.name !== e.format.name && d.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", e)
            }
            addUnsafe(e) {
                this._checkFormat(e);
                const t = b(this._value, this.format.decimals)
                  , n = b(e._value, e.format.decimals);
                return A.fromValue(t.add(n), this.format.decimals, this.format)
            }
            subUnsafe(e) {
                this._checkFormat(e);
                const t = b(this._value, this.format.decimals)
                  , n = b(e._value, e.format.decimals);
                return A.fromValue(t.sub(n), this.format.decimals, this.format)
            }
            mulUnsafe(e) {
                this._checkFormat(e);
                const t = b(this._value, this.format.decimals)
                  , n = b(e._value, e.format.decimals);
                return A.fromValue(t.mul(n).div(this.format._multiplier), this.format.decimals, this.format)
            }
            divUnsafe(e) {
                this._checkFormat(e);
                const t = b(this._value, this.format.decimals)
                  , n = b(e._value, e.format.decimals);
                return A.fromValue(t.mul(this.format._multiplier).div(n), this.format.decimals, this.format)
            }
            floor() {
                const e = this.toString().split(".");
                1 === e.length && e.push("0");
                let t = A.from(e[0], this.format);
                const n = !e[1].match(/^(0*)$/);
                return this.isNegative() && n && (t = t.subUnsafe(v.toFormat(t.format))),
                t
            }
            ceiling() {
                const e = this.toString().split(".");
                1 === e.length && e.push("0");
                let t = A.from(e[0], this.format);
                const n = !e[1].match(/^(0*)$/);
                return !this.isNegative() && n && (t = t.addUnsafe(v.toFormat(t.format))),
                t
            }
            round(e) {
                null == e && (e = 0);
                const t = this.toString().split(".");
                if (1 === t.length && t.push("0"),
                (e < 0 || e > 80 || e % 1) && d.throwArgumentError("invalid decimal count", "decimals", e),
                t[1].length <= e)
                    return this;
                const n = A.from("1" + y.substring(0, e), this.format)
                  , a = _.toFormat(this.format);
                return this.mulUnsafe(n).addUnsafe(a).floor().divUnsafe(n)
            }
            isZero() {
                return "0.0" === this._value || "0" === this._value
            }
            isNegative() {
                return "-" === this._value[0]
            }
            toString() {
                return this._value
            }
            toHexString(e) {
                if (null == e)
                    return this._hex;
                e % 8 && d.throwArgumentError("invalid byte width", "width", e);
                const t = o.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();
                return (0,
                u.hexZeroPad)(t, e / 8)
            }
            toUnsafeFloat() {
                return parseFloat(this.toString())
            }
            toFormat(e) {
                return A.fromString(this._value, e)
            }
            static fromValue(e, t, n) {
                return null != n || null == t || (0,
                o.Zm)(t) || (n = t,
                t = null),
                null == t && (t = 0),
                null == n && (n = "fixed"),
                A.fromString(E(e, t), h.from(n))
            }
            static fromString(e, t) {
                null == t && (t = "fixed");
                const n = h.from(t)
                  , a = b(e, n.decimals);
                !n.signed && a.lt(p) && T("unsigned value cannot be negative", "overflow", "value", e);
                let r = null;
                n.signed ? r = a.toTwos(n.width).toHexString() : (r = a.toHexString(),
                r = (0,
                u.hexZeroPad)(r, n.width / 8));
                const i = E(a, n.decimals);
                return new A(l,r,i,n)
            }
            static fromBytes(e, t) {
                null == t && (t = "fixed");
                const n = h.from(t);
                if ((0,
                u.arrayify)(e).length > n.width / 8)
                    throw new Error("overflow");
                let a = o.O$.from(e);
                n.signed && (a = a.fromTwos(n.width));
                const r = a.toTwos((n.signed ? 0 : 1) + n.width).toHexString()
                  , i = E(a, n.decimals);
                return new A(l,r,i,n)
            }
            static from(e, t) {
                if ("string" === typeof e)
                    return A.fromString(e, t);
                if ((0,
                u.isBytes)(e))
                    return A.fromBytes(e, t);
                try {
                    return A.fromValue(e, 0, t)
                } catch (n) {
                    if (n.code !== s.Logger.errors.INVALID_ARGUMENT)
                        throw n
                }
                return d.throwArgumentError("invalid FixedNumber value", "value", e)
            }
            static isFixedNumber(e) {
                return !(!e || !e._isFixedNumber)
            }
        }
        const v = A.from(1)
          , _ = A.from("0.5");
        var g = n(53587);
        var N = function(e, t, n, a) {
            return new (n || (n = Promise))((function(r, i) {
                function o(e) {
                    try {
                        s(a.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function u(e) {
                    try {
                        s(a.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    var t;
                    e.done ? r(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(o, u)
                }
                s((a = a.apply(e, t || [])).next())
            }
            ))
        };
        const C = new s.Logger("abstract-signer/5.4.1")
          , O = ["accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"]
          , M = [s.Logger.errors.INSUFFICIENT_FUNDS, s.Logger.errors.NONCE_EXPIRED, s.Logger.errors.REPLACEMENT_UNDERPRICED];
        class x {
            constructor() {
                C.checkAbstract(new.target, x),
                (0,
                g.defineReadOnly)(this, "_isSigner", !0)
            }
            getBalance(e) {
                return N(this, void 0, void 0, (function*() {
                    return this._checkProvider("getBalance"),
                    yield this.provider.getBalance(this.getAddress(), e)
                }
                ))
            }
            getTransactionCount(e) {
                return N(this, void 0, void 0, (function*() {
                    return this._checkProvider("getTransactionCount"),
                    yield this.provider.getTransactionCount(this.getAddress(), e)
                }
                ))
            }
            estimateGas(e) {
                return N(this, void 0, void 0, (function*() {
                    this._checkProvider("estimateGas");
                    const t = yield(0,
                    g.resolveProperties)(this.checkTransaction(e));
                    return yield this.provider.estimateGas(t)
                }
                ))
            }
            call(e, t) {
                return N(this, void 0, void 0, (function*() {
                    this._checkProvider("call");
                    const n = yield(0,
                    g.resolveProperties)(this.checkTransaction(e));
                    return yield this.provider.call(n, t)
                }
                ))
            }
            sendTransaction(e) {
                return N(this, void 0, void 0, (function*() {
                    this._checkProvider("sendTransaction");
                    const t = yield this.populateTransaction(e)
                      , n = yield this.signTransaction(t);
                    return yield this.provider.sendTransaction(n)
                }
                ))
            }
            getChainId() {
                return N(this, void 0, void 0, (function*() {
                    this._checkProvider("getChainId");
                    return (yield this.provider.getNetwork()).chainId
                }
                ))
            }
            getGasPrice() {
                return N(this, void 0, void 0, (function*() {
                    return this._checkProvider("getGasPrice"),
                    yield this.provider.getGasPrice()
                }
                ))
            }
            getFeeData() {
                return N(this, void 0, void 0, (function*() {
                    return this._checkProvider("getFeeData"),
                    yield this.provider.getFeeData()
                }
                ))
            }
            resolveName(e) {
                return N(this, void 0, void 0, (function*() {
                    return this._checkProvider("resolveName"),
                    yield this.provider.resolveName(e)
                }
                ))
            }
            checkTransaction(e) {
                for (const n in e)
                    -1 === O.indexOf(n) && C.throwArgumentError("invalid transaction key: " + n, "transaction", e);
                const t = (0,
                g.shallowCopy)(e);
                return null == t.from ? t.from = this.getAddress() : t.from = Promise.all([Promise.resolve(t.from), this.getAddress()]).then((t=>(t[0].toLowerCase() !== t[1].toLowerCase() && C.throwArgumentError("from address mismatch", "transaction", e),
                t[0]))),
                t
            }
            populateTransaction(e) {
                return N(this, void 0, void 0, (function*() {
                    const t = yield(0,
                    g.resolveProperties)(this.checkTransaction(e));
                    null != t.to && (t.to = Promise.resolve(t.to).then((e=>N(this, void 0, void 0, (function*() {
                        if (null == e)
                            return null;
                        const t = yield this.resolveName(e);
                        return null == t && C.throwArgumentError("provided ENS name resolves to null", "tx.to", e),
                        t
                    }
                    )))),
                    t.to.catch((e=>{}
                    )));
                    const n = null != t.maxFeePerGas || null != t.maxPriorityFeePerGas;
                    if (null == t.gasPrice || 2 !== t.type && !n ? 0 !== t.type && 1 !== t.type || !n || C.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", e) : C.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", e),
                    2 !== t.type && null != t.type || null == t.maxFeePerGas || null == t.maxPriorityFeePerGas)
                        if (0 === t.type || 1 === t.type)
                            null == t.gasPrice && (t.gasPrice = this.getGasPrice());
                        else {
                            const e = yield this.getFeeData();
                            if (null == t.type)
                                if (null != e.maxFeePerGas && null != e.maxPriorityFeePerGas)
                                    if (t.type = 2,
                                    null != t.gasPrice) {
                                        const e = t.gasPrice;
                                        delete t.gasPrice,
                                        t.maxFeePerGas = e,
                                        t.maxPriorityFeePerGas = e
                                    } else
                                        null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas),
                                        null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas);
                                else
                                    null != e.gasPrice ? (n && C.throwError("network does not support EIP-1559", s.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "populateTransaction"
                                    }),
                                    null == t.gasPrice && (t.gasPrice = e.gasPrice),
                                    t.type = 0) : C.throwError("failed to get consistent fee data", s.Logger.errors.UNSUPPORTED_OPERATION, {
                                        operation: "signer.getFeeData"
                                    });
                            else
                                2 === t.type && (null == t.maxFeePerGas && (t.maxFeePerGas = e.maxFeePerGas),
                                null == t.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = e.maxPriorityFeePerGas))
                        }
                    else
                        t.type = 2;
                    return null == t.nonce && (t.nonce = this.getTransactionCount("pending")),
                    null == t.gasLimit && (t.gasLimit = this.estimateGas(t).catch((e=>{
                        if (M.indexOf(e.code) >= 0)
                            throw e;
                        return C.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", s.Logger.errors.UNPREDICTABLE_GAS_LIMIT, {
                            error: e,
                            tx: t
                        })
                    }
                    ))),
                    null == t.chainId ? t.chainId = this.getChainId() : t.chainId = Promise.all([Promise.resolve(t.chainId), this.getChainId()]).then((t=>(0 !== t[1] && t[0] !== t[1] && C.throwArgumentError("chainId address mismatch", "transaction", e),
                    t[0]))),
                    yield(0,
                    g.resolveProperties)(t)
                }
                ))
            }
            _checkProvider(e) {
                this.provider || C.throwError("missing provider", s.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: e || "_checkProvider"
                })
            }
            static isSigner(e) {
                return !(!e || !e._isSigner)
            }
        }
        class w extends x {
            constructor(e, t) {
                C.checkNew(new.target, w),
                super(),
                (0,
                g.defineReadOnly)(this, "address", e),
                (0,
                g.defineReadOnly)(this, "provider", t || null)
            }
            getAddress() {
                return Promise.resolve(this.address)
            }
            _fail(e, t) {
                return Promise.resolve().then((()=>{
                    C.throwError(e, s.Logger.errors.UNSUPPORTED_OPERATION, {
                        operation: t
                    })
                }
                ))
            }
            signMessage(e) {
                return this._fail("VoidSigner cannot sign messages", "signMessage")
            }
            signTransaction(e) {
                return this._fail("VoidSigner cannot sign transactions", "signTransaction")
            }
            _signTypedData(e, t, n) {
                return this._fail("VoidSigner cannot sign typed data", "signTypedData")
            }
            connect(e) {
                return new w(this.address,e)
            }
        }
        var F = n(57340)
          , I = n(44328)
          , S = n(92026)
          , D = n(13813)
          , B = n(48659)
          , P = n(72734)
          , k = n(11388)
          , R = n(61184)
          , H = n(8198)
          , L = n(90584)
          , U = n(4089)
          , q = n(57727)
          , G = n(93684)
          , W = n(84706)
          , K = n(32046)
          , V = n(24994)
          , j = n(11697)
          , X = n(67949)
          , Y = n(38197)
          , $ = n(23951)
          , Z = n(89721)
          , z = n(44478)
          , J = n(52472)
          , Q = n(61843)
          , ee = n(62768)
          , te = n(35637)
          , ne = n(44242)
          , ae = n(86237)
          , re = n(1480)
          , ie = n(588)
          , oe = n(58341)
          , ue = n(21261);
        const se = "ethers/5.4.4"
          , ce = new s.Logger(se);
        try {
            const e = window;
            null == e._ethers && (e._ethers = r)
        } catch (de) {}
    },
    26018: function(e) {
        var t = "Invariant failed";
        e.exports = function(e, n) {
            if (!e)
                throw new Error(t)
        }
    }
}]);
