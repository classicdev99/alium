"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[588], {
    588: function(t, r, e) {
        e.r(r),
        e.d(r, {
            commify: function() {
                return k
            },
            formatEther: function() {
                return H
            },
            formatUnits: function() {
                return P
            },
            parseEther: function() {
                return I
            },
            parseUnits: function() {
                return L
            }
        });
        var n = e(93286)
          , i = e(80711);
        const o = "bignumber/5.4.0";
        var s = e(13550)
          , u = e.n(s)().BN;
        const a = new i.Logger(o)
          , l = {}
          , m = 9007199254740991;
        let h = !1;
        class f {
            constructor(t, r) {
                a.checkNew(new.target, f),
                t !== l && a.throwError("cannot call constructor directly; use BigNumber.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new (BigNumber)"
                }),
                this._hex = r,
                this._isBigNumber = !0,
                Object.freeze(this)
            }
            fromTwos(t) {
                return c(d(this).fromTwos(t))
            }
            toTwos(t) {
                return c(d(this).toTwos(t))
            }
            abs() {
                return "-" === this._hex[0] ? f.from(this._hex.substring(1)) : this
            }
            add(t) {
                return c(d(this).add(d(t)))
            }
            sub(t) {
                return c(d(this).sub(d(t)))
            }
            div(t) {
                return f.from(t).isZero() && v("division by zero", "div"),
                c(d(this).div(d(t)))
            }
            mul(t) {
                return c(d(this).mul(d(t)))
            }
            mod(t) {
                const r = d(t);
                return r.isNeg() && v("cannot modulo negative values", "mod"),
                c(d(this).umod(r))
            }
            pow(t) {
                const r = d(t);
                return r.isNeg() && v("cannot raise to negative values", "pow"),
                c(d(this).pow(r))
            }
            and(t) {
                const r = d(t);
                return (this.isNegative() || r.isNeg()) && v("cannot 'and' negative values", "and"),
                c(d(this).and(r))
            }
            or(t) {
                const r = d(t);
                return (this.isNegative() || r.isNeg()) && v("cannot 'or' negative values", "or"),
                c(d(this).or(r))
            }
            xor(t) {
                const r = d(t);
                return (this.isNegative() || r.isNeg()) && v("cannot 'xor' negative values", "xor"),
                c(d(this).xor(r))
            }
            mask(t) {
                return (this.isNegative() || t < 0) && v("cannot mask negative values", "mask"),
                c(d(this).maskn(t))
            }
            shl(t) {
                return (this.isNegative() || t < 0) && v("cannot shift negative values", "shl"),
                c(d(this).shln(t))
            }
            shr(t) {
                return (this.isNegative() || t < 0) && v("cannot shift negative values", "shr"),
                c(d(this).shrn(t))
            }
            eq(t) {
                return d(this).eq(d(t))
            }
            lt(t) {
                return d(this).lt(d(t))
            }
            lte(t) {
                return d(this).lte(d(t))
            }
            gt(t) {
                return d(this).gt(d(t))
            }
            gte(t) {
                return d(this).gte(d(t))
            }
            isNegative() {
                return "-" === this._hex[0]
            }
            isZero() {
                return d(this).isZero()
            }
            toNumber() {
                try {
                    return d(this).toNumber()
                } catch (t) {
                    v("overflow", "toNumber", this.toString())
                }
                return null
            }
            toBigInt() {
                try {
                    return BigInt(this.toString())
                } catch (t) {}
                return a.throwError("this platform does not support BigInt", i.Logger.errors.UNSUPPORTED_OPERATION, {
                    value: this.toString()
                })
            }
            toString() {
                return arguments.length > 0 && (10 === arguments[0] ? h || (h = !0,
                a.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : 16 === arguments[0] ? a.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", i.Logger.errors.UNEXPECTED_ARGUMENT, {}) : a.throwError("BigNumber.toString does not accept parameters", i.Logger.errors.UNEXPECTED_ARGUMENT, {})),
                d(this).toString(10)
            }
            toHexString() {
                return this._hex
            }
            toJSON(t) {
                return {
                    type: "BigNumber",
                    hex: this.toHexString()
                }
            }
            static from(t) {
                if (t instanceof f)
                    return t;
                if ("string" === typeof t)
                    return t.match(/^-?0x[0-9a-f]+$/i) ? new f(l,g(t)) : t.match(/^-?[0-9]+$/) ? new f(l,g(new u(t))) : a.throwArgumentError("invalid BigNumber string", "value", t);
                if ("number" === typeof t)
                    return t % 1 && v("underflow", "BigNumber.from", t),
                    (t >= m || t <= -m) && v("overflow", "BigNumber.from", t),
                    f.from(String(t));
                const r = t;
                if ("bigint" === typeof r)
                    return f.from(r.toString());
                if ((0,
                n.isBytes)(r))
                    return f.from((0,
                    n.hexlify)(r));
                if (r)
                    if (r.toHexString) {
                        const t = r.toHexString();
                        if ("string" === typeof t)
                            return f.from(t)
                    } else {
                        let t = r._hex;
                        if (null == t && "BigNumber" === r.type && (t = r.hex),
                        "string" === typeof t && ((0,
                        n.isHexString)(t) || "-" === t[0] && (0,
                        n.isHexString)(t.substring(1))))
                            return f.from(t)
                    }
                return a.throwArgumentError("invalid BigNumber value", "value", t)
            }
            static isBigNumber(t) {
                return !(!t || !t._isBigNumber)
            }
        }
        function g(t) {
            if ("string" !== typeof t)
                return g(t.toString(16));
            if ("-" === t[0])
                return "-" === (t = t.substring(1))[0] && a.throwArgumentError("invalid hex", "value", t),
                "0x00" === (t = g(t)) ? t : "-" + t;
            if ("0x" !== t.substring(0, 2) && (t = "0x" + t),
            "0x" === t)
                return "0x00";
            for (t.length % 2 && (t = "0x0" + t.substring(2)); t.length > 4 && "0x00" === t.substring(0, 4); )
                t = "0x" + t.substring(4);
            return t
        }
        function c(t) {
            return f.from(g(t))
        }
        function d(t) {
            const r = f.from(t).toHexString();
            return "-" === r[0] ? new u("-" + r.substring(3),16) : new u(r.substring(2),16)
        }
        function v(t, r, e) {
            const n = {
                fault: t,
                operation: r
            };
            return null != e && (n.value = e),
            a.throwError(t, i.Logger.errors.NUMERIC_FAULT, n)
        }
        const w = new i.Logger(o)
          , b = {}
          , x = f.from(0)
          , N = f.from(-1);
        function p(t, r, e, n) {
            const o = {
                fault: r,
                operation: e
            };
            return void 0 !== n && (o.value = n),
            w.throwError(t, i.Logger.errors.NUMERIC_FAULT, o)
        }
        let E = "0";
        for (; E.length < 256; )
            E += E;
        function _(t) {
            if ("number" !== typeof t)
                try {
                    t = f.from(t).toNumber()
                } catch (r) {}
            return "number" === typeof t && t >= 0 && t <= 256 && !(t % 1) ? "1" + E.substring(0, t) : w.throwArgumentError("invalid decimal size", "decimals", t)
        }
        function S(t, r) {
            null == r && (r = 0);
            const e = _(r)
              , n = (t = f.from(t)).lt(x);
            n && (t = t.mul(N));
            let i = t.mod(e).toString();
            for (; i.length < e.length - 1; )
                i = "0" + i;
            i = i.match(/^([0-9]*[1-9]|0)(0*)/)[1];
            const o = t.div(e).toString();
            return t = 1 === e.length ? o : o + "." + i,
            n && (t = "-" + t),
            t
        }
        function y(t, r) {
            null == r && (r = 0);
            const e = _(r);
            "string" === typeof t && t.match(/^-?[0-9.,]+$/) || w.throwArgumentError("invalid decimal value", "value", t);
            const n = "-" === t.substring(0, 1);
            n && (t = t.substring(1)),
            "." === t && w.throwArgumentError("missing value", "value", t);
            const i = t.split(".");
            i.length > 2 && w.throwArgumentError("too many decimal points", "value", t);
            let o = i[0]
              , s = i[1];
            o || (o = "0"),
            s || (s = "0");
            s.replace(/^([0-9]*?)(0*)$/, ((t,r,e)=>r)).length > e.length - 1 && p("fractional component exceeds decimals", "underflow", "parseFixed");
            for (; s.length < e.length - 1; )
                s += "0";
            const u = f.from(o)
              , a = f.from(s);
            let l = u.mul(e).add(a);
            return n && (l = l.mul(N)),
            l
        }
        class U {
            constructor(t, r, e, n) {
                t !== b && w.throwError("cannot use FixedFormat constructor; use FixedFormat.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new FixedFormat"
                }),
                this.signed = r,
                this.width = e,
                this.decimals = n,
                this.name = (r ? "" : "u") + "fixed" + String(e) + "x" + String(n),
                this._multiplier = _(n),
                Object.freeze(this)
            }
            static from(t) {
                if (t instanceof U)
                    return t;
                "number" === typeof t && (t = `fixed128x${t}`);
                let r = !0
                  , e = 128
                  , n = 18;
                if ("string" === typeof t)
                    if ("fixed" === t)
                        ;
                    else if ("ufixed" === t)
                        r = !1;
                    else {
                        const i = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                        i || w.throwArgumentError("invalid fixed format", "format", t),
                        r = "u" !== i[1],
                        e = parseInt(i[2]),
                        n = parseInt(i[3])
                    }
                else if (t) {
                    const i = (r,e,n)=>null == t[r] ? n : (typeof t[r] !== e && w.throwArgumentError("invalid fixed format (" + r + " not " + e + ")", "format." + r, t[r]),
                    t[r]);
                    r = i("signed", "boolean", r),
                    e = i("width", "number", e),
                    n = i("decimals", "number", n)
                }
                return e % 8 && w.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", e),
                n > 80 && w.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n),
                new U(b,r,e,n)
            }
        }
        class A {
            constructor(t, r, e, n) {
                w.checkNew(new.target, A),
                t !== b && w.throwError("cannot use FixedNumber constructor; use FixedNumber.from", i.Logger.errors.UNSUPPORTED_OPERATION, {
                    operation: "new FixedFormat"
                }),
                this.format = n,
                this._hex = r,
                this._value = e,
                this._isFixedNumber = !0,
                Object.freeze(this)
            }
            _checkFormat(t) {
                this.format.name !== t.format.name && w.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t)
            }
            addUnsafe(t) {
                this._checkFormat(t);
                const r = y(this._value, this.format.decimals)
                  , e = y(t._value, t.format.decimals);
                return A.fromValue(r.add(e), this.format.decimals, this.format)
            }
            subUnsafe(t) {
                this._checkFormat(t);
                const r = y(this._value, this.format.decimals)
                  , e = y(t._value, t.format.decimals);
                return A.fromValue(r.sub(e), this.format.decimals, this.format)
            }
            mulUnsafe(t) {
                this._checkFormat(t);
                const r = y(this._value, this.format.decimals)
                  , e = y(t._value, t.format.decimals);
                return A.fromValue(r.mul(e).div(this.format._multiplier), this.format.decimals, this.format)
            }
            divUnsafe(t) {
                this._checkFormat(t);
                const r = y(this._value, this.format.decimals)
                  , e = y(t._value, t.format.decimals);
                return A.fromValue(r.mul(this.format._multiplier).div(e), this.format.decimals, this.format)
            }
            floor() {
                const t = this.toString().split(".");
                1 === t.length && t.push("0");
                let r = A.from(t[0], this.format);
                const e = !t[1].match(/^(0*)$/);
                return this.isNegative() && e && (r = r.subUnsafe(F)),
                r
            }
            ceiling() {
                const t = this.toString().split(".");
                1 === t.length && t.push("0");
                let r = A.from(t[0], this.format);
                const e = !t[1].match(/^(0*)$/);
                return !this.isNegative() && e && (r = r.addUnsafe(F)),
                r
            }
            round(t) {
                null == t && (t = 0);
                const r = this.toString().split(".");
                if (1 === r.length && r.push("0"),
                (t < 0 || t > 80 || t % 1) && w.throwArgumentError("invalid decimal count", "decimals", t),
                r[1].length <= t)
                    return this;
                const e = A.from("1" + E.substring(0, t), this.format)
                  , n = B.toFormat(this.format);
                return this.mulUnsafe(e).addUnsafe(n).floor().divUnsafe(e)
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
            toHexString(t) {
                if (null == t)
                    return this._hex;
                t % 8 && w.throwArgumentError("invalid byte width", "width", t);
                const r = f.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
                return (0,
                n.hexZeroPad)(r, t / 8)
            }
            toUnsafeFloat() {
                return parseFloat(this.toString())
            }
            toFormat(t) {
                return A.fromString(this._value, t)
            }
            static fromValue(t, r, e) {
                return null != e || null == r || function(t) {
                    return null != t && (f.isBigNumber(t) || "number" === typeof t && t % 1 === 0 || "string" === typeof t && !!t.match(/^-?[0-9]+$/) || (0,
                    n.isHexString)(t) || "bigint" === typeof t || (0,
                    n.isBytes)(t))
                }(r) || (e = r,
                r = null),
                null == r && (r = 0),
                null == e && (e = "fixed"),
                A.fromString(S(t, r), U.from(e))
            }
            static fromString(t, r) {
                null == r && (r = "fixed");
                const e = U.from(r)
                  , i = y(t, e.decimals);
                !e.signed && i.lt(x) && p("unsigned value cannot be negative", "overflow", "value", t);
                let o = null;
                e.signed ? o = i.toTwos(e.width).toHexString() : (o = i.toHexString(),
                o = (0,
                n.hexZeroPad)(o, e.width / 8));
                const s = S(i, e.decimals);
                return new A(b,o,s,e)
            }
            static fromBytes(t, r) {
                null == r && (r = "fixed");
                const e = U.from(r);
                if ((0,
                n.arrayify)(t).length > e.width / 8)
                    throw new Error("overflow");
                let i = f.from(t);
                e.signed && (i = i.fromTwos(e.width));
                const o = i.toTwos((e.signed ? 0 : 1) + e.width).toHexString()
                  , s = S(i, e.decimals);
                return new A(b,o,s,e)
            }
            static from(t, r) {
                if ("string" === typeof t)
                    return A.fromString(t, r);
                if ((0,
                n.isBytes)(t))
                    return A.fromBytes(t, r);
                try {
                    return A.fromValue(t, 0, r)
                } catch (e) {
                    if (e.code !== i.Logger.errors.INVALID_ARGUMENT)
                        throw e
                }
                return w.throwArgumentError("invalid FixedNumber value", "value", t)
            }
            static isFixedNumber(t) {
                return !(!t || !t._isFixedNumber)
            }
        }
        const F = A.from(1)
          , B = A.from("0.5")
          , T = new i.Logger("units/5.4.0")
          , O = ["wei", "kwei", "mwei", "gwei", "szabo", "finney", "ether"];
        function k(t) {
            const r = String(t).split(".");
            (r.length > 2 || !r[0].match(/^-?[0-9]*$/) || r[1] && !r[1].match(/^[0-9]*$/) || "." === t || "-." === t) && T.throwArgumentError("invalid value", "value", t);
            let e = r[0]
              , n = "";
            for ("-" === e.substring(0, 1) && (n = "-",
            e = e.substring(1)); "0" === e.substring(0, 1); )
                e = e.substring(1);
            "" === e && (e = "0");
            let i = "";
            for (2 === r.length && (i = "." + (r[1] || "0")); i.length > 2 && "0" === i[i.length - 1]; )
                i = i.substring(0, i.length - 1);
            const o = [];
            for (; e.length; ) {
                if (e.length <= 3) {
                    o.unshift(e);
                    break
                }
                {
                    const t = e.length - 3;
                    o.unshift(e.substring(t)),
                    e = e.substring(0, t)
                }
            }
            return n + o.join(",") + i
        }
        function P(t, r) {
            if ("string" === typeof r) {
                const t = O.indexOf(r);
                -1 !== t && (r = 3 * t)
            }
            return S(t, null != r ? r : 18)
        }
        function L(t, r) {
            if ("string" !== typeof t && T.throwArgumentError("value must be a string", "value", t),
            "string" === typeof r) {
                const t = O.indexOf(r);
                -1 !== t && (r = 3 * t)
            }
            return y(t, null != r ? r : 18)
        }
        function H(t) {
            return P(t, 18)
        }
        function I(t) {
            return L(t, 18)
        }
    }
}]);
