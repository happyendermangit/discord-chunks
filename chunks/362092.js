function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        caseInsensitiveLangRegex: function() {
            return o
        },
        findBackticks: function() {
            return u
        },
        isKnownLang: function() {
            return l
        }
    }), n("47120"), n("411104"), n("653041");
    var i = n("920478");
    n("364964");
    let r = i.default.listLanguages(),
        s = {};
    for (let e of r) {
        e = e.toLowerCase();
        let t = i.default.getLanguage(e);
        if (null == t) continue;
        let n = t.aliases;
        if (s[e] = e, null != n)
            for (let t of n) s[t.toLowerCase()] = e
    }
    let a = /^[a-z0-9_+\-.#]+$/,
        o = /^[a-z0-9_+\-.#]+$/i;
    for (let e in s)
        if (null == e.match(a)) throw Error("Language name does not match regex: ".concat(e));

    function l(e) {
        return e.toLowerCase() in s
    }

    function u(e) {
        let t;
        let n = [],
            i = /\\|```/g;
        for (; null != (t = i.exec(e));) {
            if ("\\" === t[0]) {
                i.lastIndex += 1;
                continue
            }
            n.push(t.index)
        }
        return n
    }
}