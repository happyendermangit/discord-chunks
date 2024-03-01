function(e, t, n) {
    "use strict";
    n("424973"), e.exports.parse = function(e) {
        var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
        if (!t) return null;
        t.shift();
        var n = null,
            r = [];
        t[2] && (n = (i = t[2].split("-")).shift(), r = i);
        var a = [];
        t[5] && (a = t[5].split("-")).shift();
        var o = [];
        if (t[6]) {
            (i = t[6].split("-")).shift();
            for (var i, s, u = []; i.length;) {
                var l = i.shift();
                1 === l.length ? s ? (o.push({
                    singleton: s,
                    extension: u
                }), s = l, u = []) : s = l : u.push(l)
            }
            o.push({
                singleton: s,
                extension: u
            })
        }
        var c = [];
        t[7] && ((c = t[7].split("-")).shift(), c.shift());
        var d = [];
        return t[8] && (d = t[8].split("-")).shift(), {
            langtag: {
                language: {
                    language: n,
                    extlang: r
                },
                script: t[3] || null,
                region: t[4] || null,
                variant: a,
                extension: o,
                privateuse: c
            },
            privateuse: d,
            grandfathered: {
                irregular: t[0] || null,
                regular: t[1] || null
            }
        }
    }
}