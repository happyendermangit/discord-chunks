function(t, e, s) {
    "use strict";
    s("70102"), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341"), s("115278"), s("222007"), s("370692"), s("667500"), s("453061"), s("477315"), s("527135"), s("426094"), s("332822"), s("659510"), s("990131"), s("781738");
    var r = SyntaxError,
        i = Function,
        n = TypeError,
        c = function(t) {
            try {
                return i('"use strict"; return (' + t + ").constructor;")()
            } catch (t) {}
        },
        o = Object.getOwnPropertyDescriptor;
    if (o) try {
        o({}, "")
    } catch (t) {
        o = null
    }
    var f = function() {
            throw new n
        },
        u = o ? function() {
            try {
                return arguments.callee, f
            } catch (t) {
                try {
                    return o(arguments, "callee").get
                } catch (t) {
                    return f
                }
            }
        }() : f,
        a = s("923771")(),
        d = s("29364")(),
        p = Object.getPrototypeOf || (d ? function(t) {
            return t.__proto__
        } : null),
        b = {},
        h = "undefined" != typeof Uint8Array && p ? p(Uint8Array) : void 0,
        l = {
            "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayIteratorPrototype%": a && p ? p([][Symbol.iterator]()) : void 0,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": b,
            "%AsyncGenerator%": b,
            "%AsyncGeneratorFunction%": b,
            "%AsyncIteratorPrototype%": b,
            "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt,
            "%BigInt64Array%": "undefined" == typeof BigInt64Array ? void 0 : BigInt64Array,
            "%BigUint64Array%": "undefined" == typeof BigUint64Array ? void 0 : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry,
            "%Function%": i,
            "%GeneratorFunction%": b,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": a && p ? p(p([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && a && p ? p(new Map()[Symbol.iterator]()) : void 0,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && a && p ? p(new Set()[Symbol.iterator]()) : void 0,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": a && p ? p("" [Symbol.iterator]()) : void 0,
            "%Symbol%": a ? Symbol : void 0,
            "%SyntaxError%": r,
            "%ThrowTypeError%": u,
            "%TypedArray%": h,
            "%TypeError%": n,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet
        };
    if (p) try {
        null.error
    } catch (t) {
        var g = p(p(t));
        l["%Error.prototype%"] = g
    }
    var v = function t(e) {
            var s;
            if ("%AsyncFunction%" === e) s = c("async function () {}");
            else if ("%GeneratorFunction%" === e) s = c("function* () {}");
            else if ("%AsyncGeneratorFunction%" === e) s = c("async function* () {}");
            else if ("%AsyncGenerator%" === e) {
                var r = t("%AsyncGeneratorFunction%");
                r && (s = r.prototype)
            } else if ("%AsyncIteratorPrototype%" === e) {
                var i = t("%AsyncGenerator%");
                i && p && (s = p(i.prototype))
            }
            return l[e] = s, s
        },
        x = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        m = s("459078"),
        y = s("537778"),
        _ = m.call(Function.call, Array.prototype.concat),
        w = m.call(Function.apply, Array.prototype.splice),
        M = m.call(Function.call, String.prototype.replace),
        S = m.call(Function.call, String.prototype.slice),
        k = m.call(Function.call, RegExp.prototype.exec),
        A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        E = /\\(\\)?/g,
        B = function(t) {
            var e = S(t, 0, 1),
                s = S(t, -1);
            if ("%" === e && "%" !== s) throw new r("invalid intrinsic syntax, expected closing `%`");
            if ("%" === s && "%" !== e) throw new r("invalid intrinsic syntax, expected opening `%`");
            var i = [];
            return M(t, A, function(t, e, s, r) {
                i[i.length] = s ? M(r, E, "$1") : e || t
            }), i
        },
        I = function(t, e) {
            var s, i = t;
            if (y(x, i) && (i = "%" + (s = x[i])[0] + "%"), y(l, i)) {
                var c = l[i];
                if (c === b && (c = v(i)), void 0 === c && !e) throw new n("intrinsic " + t + " exists, but is not available. Please file an issue!");
                return {
                    alias: s,
                    name: i,
                    value: c
                }
            }
            throw new r("intrinsic " + t + " does not exist!")
        };
    t.exports = function(t, e) {
        if ("string" != typeof t || 0 === t.length) throw new n("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof e) throw new n('"allowMissing" argument must be a boolean');
        if (null === k(/^%?[^%]*%?$/, t)) throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var s = B(t),
            i = s.length > 0 ? s[0] : "",
            c = I("%" + i + "%", e),
            f = c.name,
            u = c.value,
            a = !1,
            d = c.alias;
        d && (i = d[0], w(s, _([0, 1], d)));
        for (var p = 1, b = !0; p < s.length; p += 1) {
            var h = s[p],
                g = S(h, 0, 1),
                v = S(h, -1);
            if (('"' === g || "'" === g || "`" === g || '"' === v || "'" === v || "`" === v) && g !== v) throw new r("property names with quotes must have matching quotes");
            if (("constructor" === h || !b) && (a = !0), i += "." + h, y(l, f = "%" + i + "%")) u = l[f];
            else if (null != u) {
                if (!(h in u)) {
                    if (!e) throw new n("base intrinsic for " + t + " exists, but the property is not available.");
                    return
                }
                if (o && p + 1 >= s.length) {
                    var x = o(u, h);
                    u = (b = !!x) && "get" in x && !("originalValue" in x.get) ? x.get : u[h]
                } else b = y(u, h), u = u[h];
                b && !a && (l[f] = u)
            }
        }
        return u
    }
}