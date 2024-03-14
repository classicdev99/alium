(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8687], {
    54098: function(t, e) {
        var r = "undefined" !== typeof self ? self : this
          , n = function() {
            function t() {
                this.fetch = !1,
                this.DOMException = r.DOMException
            }
            return t.prototype = r,
            new t
        }();
        !function(t) {
            !function(e) {
                var r = "URLSearchParams"in t
                  , n = "Symbol"in t && "iterator"in Symbol
                  , o = "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (t) {
                        return !1
                    }
                }()
                  , i = "FormData"in t
                  , s = "ArrayBuffer"in t;
                if (s)
                    var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                      , u = ArrayBuffer.isView || function(t) {
                        return t && a.indexOf(Object.prototype.toString.call(t)) > -1
                    }
                    ;
                function c(t) {
                    if ("string" !== typeof t && (t = String(t)),
                    /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))
                        throw new TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }
                function f(t) {
                    return "string" !== typeof t && (t = String(t)),
                    t
                }
                function h(t) {
                    var e = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return n && (e[Symbol.iterator] = function() {
                        return e
                    }
                    ),
                    e
                }
                function l(t) {
                    this.map = {},
                    t instanceof l ? t.forEach((function(t, e) {
                        this.append(e, t)
                    }
                    ), this) : Array.isArray(t) ? t.forEach((function(t) {
                        this.append(t[0], t[1])
                    }
                    ), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                        this.append(e, t[e])
                    }
                    ), this)
                }
                function p(t) {
                    if (t.bodyUsed)
                        return Promise.reject(new TypeError("Already read"));
                    t.bodyUsed = !0
                }
                function d(t) {
                    return new Promise((function(e, r) {
                        t.onload = function() {
                            e(t.result)
                        }
                        ,
                        t.onerror = function() {
                            r(t.error)
                        }
                    }
                    ))
                }
                function y(t) {
                    var e = new FileReader
                      , r = d(e);
                    return e.readAsArrayBuffer(t),
                    r
                }
                function b(t) {
                    if (t.slice)
                        return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)),
                    e.buffer
                }
                function v() {
                    return this.bodyUsed = !1,
                    this._initBody = function(t) {
                        var e;
                        this._bodyInit = t,
                        t ? "string" === typeof t ? this._bodyText = t : o && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && o && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = b(t.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || u(t)) ? this._bodyArrayBuffer = b(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "",
                        this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }
                    ,
                    o && (this.blob = function() {
                        var t = p(this);
                        if (t)
                            return t;
                        if (this._bodyBlob)
                            return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }
                    ,
                    this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y)
                    }
                    ),
                    this.text = function() {
                        var t = p(this);
                        if (t)
                            return t;
                        if (this._bodyBlob)
                            return function(t) {
                                var e = new FileReader
                                  , r = d(e);
                                return e.readAsText(t),
                                r
                            }(this._bodyBlob);
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(function(t) {
                                for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++)
                                    r[n] = String.fromCharCode(e[n]);
                                return r.join("")
                            }(this._bodyArrayBuffer));
                        if (this._bodyFormData)
                            throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }
                    ,
                    i && (this.formData = function() {
                        return this.text().then(_)
                    }
                    ),
                    this.json = function() {
                        return this.text().then(JSON.parse)
                    }
                    ,
                    this
                }
                l.prototype.append = function(t, e) {
                    t = c(t),
                    e = f(e);
                    var r = this.map[t];
                    this.map[t] = r ? r + ", " + e : e
                }
                ,
                l.prototype.delete = function(t) {
                    delete this.map[c(t)]
                }
                ,
                l.prototype.get = function(t) {
                    return t = c(t),
                    this.has(t) ? this.map[t] : null
                }
                ,
                l.prototype.has = function(t) {
                    return this.map.hasOwnProperty(c(t))
                }
                ,
                l.prototype.set = function(t, e) {
                    this.map[c(t)] = f(e)
                }
                ,
                l.prototype.forEach = function(t, e) {
                    for (var r in this.map)
                        this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
                }
                ,
                l.prototype.keys = function() {
                    var t = [];
                    return this.forEach((function(e, r) {
                        t.push(r)
                    }
                    )),
                    h(t)
                }
                ,
                l.prototype.values = function() {
                    var t = [];
                    return this.forEach((function(e) {
                        t.push(e)
                    }
                    )),
                    h(t)
                }
                ,
                l.prototype.entries = function() {
                    var t = [];
                    return this.forEach((function(e, r) {
                        t.push([r, e])
                    }
                    )),
                    h(t)
                }
                ,
                n && (l.prototype[Symbol.iterator] = l.prototype.entries);
                var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
                function w(t, e) {
                    var r = (e = e || {}).body;
                    if (t instanceof w) {
                        if (t.bodyUsed)
                            throw new TypeError("Already read");
                        this.url = t.url,
                        this.credentials = t.credentials,
                        e.headers || (this.headers = new l(t.headers)),
                        this.method = t.method,
                        this.mode = t.mode,
                        this.signal = t.signal,
                        r || null == t._bodyInit || (r = t._bodyInit,
                        t.bodyUsed = !0)
                    } else
                        this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "same-origin",
                    !e.headers && this.headers || (this.headers = new l(e.headers)),
                    this.method = function(t) {
                        var e = t.toUpperCase();
                        return m.indexOf(e) > -1 ? e : t
                    }(e.method || this.method || "GET"),
                    this.mode = e.mode || this.mode || null,
                    this.signal = e.signal || this.signal,
                    this.referrer = null,
                    ("GET" === this.method || "HEAD" === this.method) && r)
                        throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(r)
                }
                function _(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach((function(t) {
                        if (t) {
                            var r = t.split("=")
                              , n = r.shift().replace(/\+/g, " ")
                              , o = r.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(n), decodeURIComponent(o))
                        }
                    }
                    )),
                    e
                }
                function O(t) {
                    var e = new l;
                    return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                        var r = t.split(":")
                          , n = r.shift().trim();
                        if (n) {
                            var o = r.join(":").trim();
                            e.append(n, o)
                        }
                    }
                    )),
                    e
                }
                function E(t, e) {
                    e || (e = {}),
                    this.type = "default",
                    this.status = void 0 === e.status ? 200 : e.status,
                    this.ok = this.status >= 200 && this.status < 300,
                    this.statusText = "statusText"in e ? e.statusText : "OK",
                    this.headers = new l(e.headers),
                    this.url = e.url || "",
                    this._initBody(t)
                }
                w.prototype.clone = function() {
                    return new w(this,{
                        body: this._bodyInit
                    })
                }
                ,
                v.call(w.prototype),
                v.call(E.prototype),
                E.prototype.clone = function() {
                    return new E(this._bodyInit,{
                        status: this.status,
                        statusText: this.statusText,
                        headers: new l(this.headers),
                        url: this.url
                    })
                }
                ,
                E.error = function() {
                    var t = new E(null,{
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error",
                    t
                }
                ;
                var g = [301, 302, 303, 307, 308];
                E.redirect = function(t, e) {
                    if (-1 === g.indexOf(e))
                        throw new RangeError("Invalid status code");
                    return new E(null,{
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                }
                ,
                e.DOMException = t.DOMException;
                try {
                    new e.DOMException
                } catch (A) {
                    e.DOMException = function(t, e) {
                        this.message = t,
                        this.name = e;
                        var r = Error(t);
                        this.stack = r.stack
                    }
                    ,
                    e.DOMException.prototype = Object.create(Error.prototype),
                    e.DOMException.prototype.constructor = e.DOMException
                }
                function x(t, r) {
                    return new Promise((function(n, i) {
                        var s = new w(t,r);
                        if (s.signal && s.signal.aborted)
                            return i(new e.DOMException("Aborted","AbortError"));
                        var a = new XMLHttpRequest;
                        function u() {
                            a.abort()
                        }
                        a.onload = function() {
                            var t = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: O(a.getAllResponseHeaders() || "")
                            };
                            t.url = "responseURL"in a ? a.responseURL : t.headers.get("X-Request-URL");
                            var e = "response"in a ? a.response : a.responseText;
                            n(new E(e,t))
                        }
                        ,
                        a.onerror = function() {
                            i(new TypeError("Network request failed"))
                        }
                        ,
                        a.ontimeout = function() {
                            i(new TypeError("Network request failed"))
                        }
                        ,
                        a.onabort = function() {
                            i(new e.DOMException("Aborted","AbortError"))
                        }
                        ,
                        a.open(s.method, s.url, !0),
                        "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1),
                        "responseType"in a && o && (a.responseType = "blob"),
                        s.headers.forEach((function(t, e) {
                            a.setRequestHeader(e, t)
                        }
                        )),
                        s.signal && (s.signal.addEventListener("abort", u),
                        a.onreadystatechange = function() {
                            4 === a.readyState && s.signal.removeEventListener("abort", u)
                        }
                        ),
                        a.send("undefined" === typeof s._bodyInit ? null : s._bodyInit)
                    }
                    ))
                }
                x.polyfill = !0,
                t.fetch || (t.fetch = x,
                t.Headers = l,
                t.Request = w,
                t.Response = E),
                e.Headers = l,
                e.Request = w,
                e.Response = E,
                e.fetch = x,
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }({})
        }(n),
        n.fetch.ponyfill = !0,
        delete n.fetch.polyfill;
        var o = n;
        (e = o.fetch).default = o.fetch,
        e.fetch = o.fetch,
        e.Headers = o.Headers,
        e.Request = o.Request,
        e.Response = o.Response,
        t.exports = e
    },
    72445: function(t) {
        "use strict";
        t.exports = function(t) {
            var e = t.uri
              , r = t.name
              , n = t.type;
            this.uri = e,
            this.name = r,
            this.type = n
        }
    },
    40804: function(t, e, r) {
        "use strict";
        var n = r(51268);
        t.exports = function t(e, r, o) {
            var i;
            void 0 === r && (r = ""),
            void 0 === o && (o = n);
            var s = new Map;
            function a(t, e) {
                var r = s.get(e);
                r ? r.push.apply(r, t) : s.set(e, t)
            }
            if (o(e))
                i = null,
                a([r], e);
            else {
                var u = r ? r + "." : "";
                if ("undefined" !== typeof FileList && e instanceof FileList)
                    i = Array.prototype.map.call(e, (function(t, e) {
                        return a(["" + u + e], t),
                        null
                    }
                    ));
                else if (Array.isArray(e))
                    i = e.map((function(e, r) {
                        var n = t(e, "" + u + r, o);
                        return n.files.forEach(a),
                        n.clone
                    }
                    ));
                else if (e && e.constructor === Object)
                    for (var c in i = {},
                    e) {
                        var f = t(e[c], "" + u + c, o);
                        f.files.forEach(a),
                        i[c] = f.clone
                    }
                else
                    i = e
            }
            return {
                clone: i,
                files: s
            }
        }
    },
    34823: function(t, e, r) {
        "use strict";
        e.ReactNativeFile = r(72445),
        e.extractFiles = r(40804),
        e.isExtractableFile = r(51268)
    },
    51268: function(t, e, r) {
        "use strict";
        var n = r(72445);
        t.exports = function(t) {
            return "undefined" !== typeof File && t instanceof File || "undefined" !== typeof Blob && t instanceof Blob || t instanceof n
        }
    },
    6230: function(t) {
        t.exports = "object" == typeof self ? self.FormData : window.FormData
    },
    78458: function(t, e, r) {
        "use strict";
        var n = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = r(34823)
          , i = n(r(6230))
          , s = function(t) {
            return o.isExtractableFile(t) || null !== t && "object" === typeof t && "function" === typeof t.pipe
        };
        e.default = function(t, e, r) {
            var n = o.extractFiles({
                query: t,
                variables: e,
                operationName: r
            }, "", s)
              , a = n.clone
              , u = n.files;
            if (0 === u.size)
                return JSON.stringify(a);
            var c = new ("undefined" === typeof FormData ? i.default : FormData);
            c.append("operations", JSON.stringify(a));
            var f = {}
              , h = 0;
            return u.forEach((function(t) {
                f[++h] = t
            }
            )),
            c.append("map", JSON.stringify(f)),
            h = 0,
            u.forEach((function(t, e) {
                c.append("" + ++h, e)
            }
            )),
            c
        }
    },
    28687: function(t, e, r) {
        "use strict";
        var n = this && this.__assign || function() {
            return (n = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r])
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }
            ).apply(this, arguments)
        }
          , o = this && this.__createBinding || (Object.create ? function(t, e, r, n) {
            void 0 === n && (n = r),
            Object.defineProperty(t, n, {
                enumerable: !0,
                get: function() {
                    return e[r]
                }
            })
        }
        : function(t, e, r, n) {
            void 0 === n && (n = r),
            t[n] = e[r]
        }
        )
          , i = this && this.__setModuleDefault || (Object.create ? function(t, e) {
            Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            })
        }
        : function(t, e) {
            t.default = e
        }
        )
          , s = this && this.__importStar || function(t) {
            if (t && t.__esModule)
                return t;
            var e = {};
            if (null != t)
                for (var r in t)
                    "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && o(e, t, r);
            return i(e, t),
            e
        }
          , a = this && this.__awaiter || function(t, e, r, n) {
            return new (r || (r = Promise))((function(o, i) {
                function s(t) {
                    try {
                        u(n.next(t))
                    } catch (e) {
                        i(e)
                    }
                }
                function a(t) {
                    try {
                        u(n.throw(t))
                    } catch (e) {
                        i(e)
                    }
                }
                function u(t) {
                    var e;
                    t.done ? o(t.value) : (e = t.value,
                    e instanceof r ? e : new r((function(t) {
                        t(e)
                    }
                    ))).then(s, a)
                }
                u((n = n.apply(t, e || [])).next())
            }
            ))
        }
          , u = this && this.__generator || function(t, e) {
            var r, n, o, i, s = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (r)
                            throw new TypeError("Generator is already executing.");
                        for (; s; )
                            try {
                                if (r = 1,
                                n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n),
                                0) : n.next) && !(o = o.call(n, i[1])).done)
                                    return o;
                                switch (n = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return s.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    s.label++,
                                    n = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = s.ops.pop(),
                                    s.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        s = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        s.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && s.label < o[1]) {
                                        s.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && s.label < o[2]) {
                                        s.label = o[2],
                                        s.ops.push(i);
                                        break
                                    }
                                    o[2] && s.ops.pop(),
                                    s.trys.pop();
                                    continue
                                }
                                i = e.call(t, s)
                            } catch (a) {
                                i = [6, a],
                                n = 0
                            } finally {
                                r = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }
          , c = this && this.__rest || function(t, e) {
            var r = {};
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
            if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(t); o < n.length; o++)
                    e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]])
            }
            return r
        }
          , f = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        ;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.gql = e.request = e.rawRequest = e.GraphQLClient = e.ClientError = void 0;
        var h = s(r(54098))
          , l = h
          , p = r(73486)
          , d = f(r(78458))
          , y = r(8308)
          , b = r(8308);
        Object.defineProperty(e, "ClientError", {
            enumerable: !0,
            get: function() {
                return b.ClientError
            }
        });
        var v = function(t) {
            var e = {};
            return t && ("undefined" !== typeof Headers && t instanceof Headers || t instanceof l.Headers ? e = function(t) {
                var e = {};
                return t.forEach((function(t, r) {
                    e[r] = t
                }
                )),
                e
            }(t) : Array.isArray(t) ? t.forEach((function(t) {
                var r = t[0]
                  , n = t[1];
                e[r] = n
            }
            )) : e = t),
            e
        }
          , m = function(t) {
            var e = t.url
              , r = t.query
              , o = t.variables
              , i = t.operationName
              , s = t.headers
              , c = t.fetch
              , f = t.fetchOptions;
            return a(void 0, void 0, void 0, (function() {
                var t;
                return u(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return t = d.default(r, o, i),
                        [4, c(e, n({
                            method: "POST",
                            headers: n(n({}, "string" === typeof t ? {
                                "Content-Type": "application/json"
                            } : {}), s),
                            body: t
                        }, f))];
                    case 1:
                        return [2, a.sent()]
                    }
                }
                ))
            }
            ))
        }
          , w = function(t) {
            var e = t.url
              , r = t.query
              , o = t.variables
              , i = t.operationName
              , s = t.headers
              , c = t.fetch
              , f = t.fetchOptions;
            return a(void 0, void 0, void 0, (function() {
                var t;
                return u(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return t = ["query=" + encodeURIComponent(r.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim())],
                        o && t.push("variables=" + encodeURIComponent(JSON.stringify(o))),
                        i && t.push("operationName=" + encodeURIComponent(i)),
                        [4, c(e + "?" + t.join("&"), n({
                            method: "GET",
                            headers: s
                        }, f))];
                    case 1:
                        return [2, a.sent()]
                    }
                }
                ))
            }
            ))
        }
          , _ = function() {
            function t(t, e) {
                this.url = t,
                this.options = e || {}
            }
            return t.prototype.rawRequest = function(t, e, r) {
                var o = this.options
                  , i = o.headers
                  , s = o.fetch
                  , a = void 0 === s ? h.default : s
                  , u = o.method
                  , f = void 0 === u ? "POST" : u
                  , l = c(o, ["headers", "fetch", "method"]);
                return O({
                    url: this.url,
                    query: t,
                    variables: e,
                    headers: n(n({}, v(i)), v(r)),
                    operationName: void 0,
                    fetch: a,
                    method: f,
                    fetchOptions: l
                })
            }
            ,
            t.prototype.request = function(t, e, r) {
                return a(this, void 0, void 0, (function() {
                    var o, i, s, a, f, l, d, y, b, m, w;
                    return u(this, (function(u) {
                        switch (u.label) {
                        case 0:
                            return o = this.options,
                            i = o.headers,
                            s = o.fetch,
                            a = void 0 === s ? h.default : s,
                            f = o.method,
                            l = void 0 === f ? "POST" : f,
                            d = c(o, ["headers", "fetch", "method"]),
                            y = this.url,
                            b = function(t) {
                                var e;
                                if ("string" === typeof t)
                                    return {
                                        query: t
                                    };
                                var r = void 0
                                  , n = t.definitions.filter((function(t) {
                                    return "OperationDefinition" === t.kind
                                }
                                ));
                                1 === n.length && (r = null === (e = n[0].name) || void 0 === e ? void 0 : e.value);
                                return {
                                    query: p.print(t),
                                    operationName: r
                                }
                            }(t),
                            m = b.query,
                            w = b.operationName,
                            [4, O({
                                url: y,
                                query: m,
                                variables: e,
                                headers: n(n({}, v(i)), v(r)),
                                operationName: w,
                                fetch: a,
                                method: l,
                                fetchOptions: d
                            })];
                        case 1:
                            return [2, u.sent().data]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            t.prototype.setHeaders = function(t) {
                return this.options.headers = t,
                this
            }
            ,
            t.prototype.setHeader = function(t, e) {
                var r, n = this.options.headers;
                return n ? n[t] = e : this.options.headers = ((r = {})[t] = e,
                r),
                this
            }
            ,
            t
        }();
        function O(t) {
            var e = t.url
              , r = t.query
              , o = t.variables
              , i = t.headers
              , s = t.operationName
              , c = t.fetch
              , f = t.method
              , h = void 0 === f ? "POST" : f
              , l = t.fetchOptions;
            return a(this, void 0, void 0, (function() {
                var t, a, f, p, d;
                return u(this, (function(u) {
                    switch (u.label) {
                    case 0:
                        return [4, ("POST" === h.toUpperCase() ? m : w)({
                            url: e,
                            query: r,
                            variables: o,
                            operationName: s,
                            headers: i,
                            fetch: c,
                            fetchOptions: l
                        })];
                    case 1:
                        return [4, g(t = u.sent())];
                    case 2:
                        if (a = u.sent(),
                        t.ok && !a.errors && a.data)
                            return f = t.headers,
                            p = t.status,
                            [2, n(n({}, a), {
                                headers: f,
                                status: p
                            })];
                        throw d = "string" === typeof a ? {
                            error: a
                        } : a,
                        new y.ClientError(n(n({}, d), {
                            status: t.status,
                            headers: t.headers
                        }),{
                            query: r,
                            variables: o
                        })
                    }
                }
                ))
            }
            ))
        }
        function E(t, e, r, n) {
            return a(this, void 0, void 0, (function() {
                return u(this, (function(o) {
                    return [2, new _(t).request(e, r, n)]
                }
                ))
            }
            ))
        }
        function g(t) {
            var e = t.headers.get("Content-Type");
            return e && e.startsWith("application/json") ? t.json() : t.text()
        }
        e.GraphQLClient = _,
        e.rawRequest = function(t, e, r, n) {
            return a(this, void 0, void 0, (function() {
                return u(this, (function(o) {
                    return [2, new _(t).rawRequest(e, r, n)]
                }
                ))
            }
            ))
        }
        ,
        e.request = E,
        e.default = E,
        e.gql = function(t) {
            for (var e = [], r = 1; r < arguments.length; r++)
                e[r - 1] = arguments[r];
            return t.reduce((function(t, r, n) {
                return "" + t + r + (n in e ? e[n] : "")
            }
            ), "")
        }
    },
    8308: function(t, e) {
        "use strict";
        var r = this && this.__extends || function() {
            var t = function(e, r) {
                return (t = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(t, e) {
                    t.__proto__ = e
                }
                || function(t, e) {
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                }
                )(e, r)
            };
            return function(e, r) {
                if ("function" !== typeof r && null !== r)
                    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                function n() {
                    this.constructor = e
                }
                t(e, r),
                e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype,
                new n)
            }
        }();
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        e.ClientError = void 0;
        var n = function(t) {
            function e(r, n) {
                var o = this
                  , i = e.extractMessage(r) + ": " + JSON.stringify({
                    response: r,
                    request: n
                });
                return o = t.call(this, i) || this,
                Object.setPrototypeOf(o, e.prototype),
                o.response = r,
                o.request = n,
                "function" === typeof Error.captureStackTrace && Error.captureStackTrace(o, e),
                o
            }
            return r(e, t),
            e.extractMessage = function(t) {
                try {
                    return t.errors[0].message
                } catch (e) {
                    return "GraphQL Error (Code: " + t.status + ")"
                }
            }
            ,
            e
        }(Error);
        e.ClientError = n
    }
}]);
