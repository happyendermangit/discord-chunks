function(e, t, n) {
    var l = {
        "./spritesheet-emoji-32.png": "61469",
        "./spritesheet-emoji-40.png": "642437",
        "./spritesheet-emoji-48.png": "958327"
    };

    function i(e) {
        return n(a(e))
    }

    function a(e) {
        if (!n.o(l, e)) {
            var t = Error("Cannot find module '" + e + "'");
            throw t.code = "MODULE_NOT_FOUND", t
        }
        return l[e]
    }
    i.id = '"996542"', i.keys = function() {
        return Object.keys(l)
    }, i.resolve = a, e.exports = i
}