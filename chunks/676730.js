function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        __extends: function() {
            return a
        },
        __assign: function() {
            return i
        },
        __spreadArray: function() {
            return o
        }
    });
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(e, t)
    };

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }
    var i = function() {
        return (i = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e
        }).apply(this, arguments)
    };

    function o(e, t, n) {
        if (n || 2 == arguments.length)
            for (var r, a = 0, i = t.length; a < i; a++)(r || !(a in t)) && (!r && (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]);
        return e.concat(r || Array.prototype.slice.call(t))
    }
    "function" == typeof SuppressedError && SuppressedError
}