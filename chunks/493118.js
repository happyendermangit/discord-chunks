function(e, t, r) {
    var n = r("954873"),
        u = r("203080"),
        a = r("738279"),
        o = r("840132"),
        i = r("569787");
    e.exports = function(e, t, r) {
        var s = e.constructor;
        switch (t) {
            case "[object ArrayBuffer]":
                return n(e);
            case "[object Boolean]":
            case "[object Date]":
                return new s(+e);
            case "[object DataView]":
                return u(e, r);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return i(e, r);
            case "[object Map]":
            case "[object Set]":
                return new s;
            case "[object Number]":
            case "[object String]":
                return new s(e);
            case "[object RegExp]":
                return a(e);
            case "[object Symbol]":
                return o(e)
        }
    }
}