function(e, t, n) {
    "use strict";
    n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
    var r = n("187798"),
        a = n("478898"),
        i = n("48494"),
        o = n("682086");

    function s(e) {
        return e.call.bind(e)
    }
    var c = "undefined" != typeof BigInt,
        l = "undefined" != typeof Symbol,
        u = s(Object.prototype.toString),
        d = s(Number.prototype.valueOf),
        p = s(String.prototype.valueOf),
        f = s(Boolean.prototype.valueOf);
    if (c) var m = s(BigInt.prototype.valueOf);
    if (l) var h = s(Symbol.prototype.valueOf);

    function v(e, t) {
        if ("object" != typeof e) return !1;
        try {
            return t(e), !0
        } catch (e) {
            return !1
        }
    }
    t.isArgumentsObject = r, t.isGeneratorFunction = a, t.isTypedArray = o;
    t.isPromise = function(e) {
        return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
    };
    t.isArrayBufferView = function(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : o(e) || C(e)
    };
    t.isUint8Array = function(e) {
        return "Uint8Array" === i(e)
    };
    t.isUint8ClampedArray = function(e) {
        return "Uint8ClampedArray" === i(e)
    };
    t.isUint16Array = function(e) {
        return "Uint16Array" === i(e)
    };
    t.isUint32Array = function(e) {
        return "Uint32Array" === i(e)
    };
    t.isInt8Array = function(e) {
        return "Int8Array" === i(e)
    };
    t.isInt16Array = function(e) {
        return "Int16Array" === i(e)
    };
    t.isInt32Array = function(e) {
        return "Int32Array" === i(e)
    };
    t.isFloat32Array = function(e) {
        return "Float32Array" === i(e)
    };
    t.isFloat64Array = function(e) {
        return "Float64Array" === i(e)
    };
    t.isBigInt64Array = function(e) {
        return "BigInt64Array" === i(e)
    };

    function g(e) {
        return "[object Map]" === u(e)
    }
    t.isBigUint64Array = function(e) {
        return "BigUint64Array" === i(e)
    }, g.working = "undefined" != typeof Map && g(new Map);

    function y(e) {
        return "[object Set]" === u(e)
    }
    t.isMap = function(e) {
        return "undefined" != typeof Map && (g.working ? g(e) : e instanceof Map)
    }, y.working = "undefined" != typeof Set && y(new Set);

    function b(e) {
        return "[object WeakMap]" === u(e)
    }
    t.isSet = function(e) {
        return "undefined" != typeof Set && (y.working ? y(e) : e instanceof Set)
    }, b.working = "undefined" != typeof WeakMap && b(new WeakMap);

    function x(e) {
        return "[object WeakSet]" === u(e)
    }
    t.isWeakMap = function(e) {
        return "undefined" != typeof WeakMap && (b.working ? b(e) : e instanceof WeakMap)
    }, x.working = "undefined" != typeof WeakSet && x(new WeakSet);

    function S(e) {
        return "[object ArrayBuffer]" === u(e)
    }

    function w(e) {
        return "undefined" != typeof ArrayBuffer && (S.working ? S(e) : e instanceof ArrayBuffer)
    }

    function D(e) {
        return "[object DataView]" === u(e)
    }

    function C(e) {
        return "undefined" != typeof DataView && (D.working ? D(e) : e instanceof DataView)
    }
    t.isWeakSet = function(e) {
        return x(e)
    }, S.working = "undefined" != typeof ArrayBuffer && S(new ArrayBuffer), t.isArrayBuffer = w, D.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && D(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = C;
    var k = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

    function P(e) {
        return "[object SharedArrayBuffer]" === u(e)
    }

    function E(e) {
        return void 0 !== k && (void 0 === P.working && (P.working = P(new k)), P.working ? P(e) : e instanceof k)
    }
    t.isSharedArrayBuffer = E;
    t.isAsyncFunction = function(e) {
        return "[object AsyncFunction]" === u(e)
    };
    t.isMapIterator = function(e) {
        return "[object Map Iterator]" === u(e)
    };
    t.isSetIterator = function(e) {
        return "[object Set Iterator]" === u(e)
    };
    t.isGeneratorObject = function(e) {
        return "[object Generator]" === u(e)
    };

    function T(e) {
        return v(e, d)
    }

    function M(e) {
        return v(e, p)
    }

    function R(e) {
        return v(e, f)
    }

    function I(e) {
        return c && v(e, m)
    }

    function O(e) {
        return l && v(e, h)
    }
    t.isWebAssemblyCompiledModule = function(e) {
        return "[object WebAssembly.Module]" === u(e)
    }, t.isNumberObject = T, t.isStringObject = M, t.isBooleanObject = R, t.isBigIntObject = I, t.isSymbolObject = O;
    t.isBoxedPrimitive = function(e) {
        return T(e) || M(e) || R(e) || I(e) || O(e)
    };
    t.isAnyArrayBuffer = function(e) {
        return "undefined" != typeof Uint8Array && (w(e) || E(e))
    }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(e) {
        Object.defineProperty(t, e, {
            enumerable: !1,
            value: function() {
                throw Error(e + " is not supported in userland")
            }
        })
    })
}