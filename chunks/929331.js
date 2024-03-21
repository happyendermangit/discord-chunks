function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    }), n("781738"), n("424973"), n("222007");
    var i = n("917351"),
        a = n.n(i),
        s = n("102053"),
        l = n("487269");

    function o(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return s.default.logGroups.map(i => {
            var s, o;
            let {
                index: u,
                timestamp: d,
                logs: c,
                nativeLogs: f,
                serverTrace: g
            } = i, m = 0 === u ? null !== (o = null === (s = a.find(c, e => e.log.indexOf("Logger loaded") >= 0)) || void 0 === s ? void 0 : s.timestamp) && void 0 !== o ? o : e : d, h = function(e, t) {
                var n, i;
                let s = (function(e) {
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                            let i = e[n],
                                a = e[n + 1];
                            null != a && a.log === i.log.replace("Start ", "Finish ") ? (a.log = a.log.replace("Finish ", ""), t.push(a), n++) : t.push(i)
                        }
                        return t
                    })(e).map(e => {
                        let n = null == e.timestamp ? "" : ((e.timestamp - t) / 1e3).toFixed(3),
                            i = null == e.delta ? "" : String(Math.round(e.delta));
                        return {
                            totalTime: n,
                            deltaTime: i,
                            log: "".concat(e.emoji.length > 0 ? "".concat(e.emoji, " ") : "").concat(e.prefix).concat(e.log, "\n")
                        }
                    }),
                    l = null !== (n = a.max(s.map(e => e.totalTime.length))) && void 0 !== n ? n : 0,
                    o = null !== (i = a.max(s.map(e => e.deltaTime.length))) && void 0 !== i ? i : 0;
                return s.map(e => {
                    let {
                        totalTime: t,
                        deltaTime: n,
                        log: i
                    } = e;
                    return "".concat(a.padStart(t, l), " ").concat(a.padStart(n, o), " ").concat(i)
                }).join("")
            }(function(e, t, n, i) {
                e = e.slice();
                let a = new Set(t.map(r)),
                    s = "",
                    l = [];
                t.forEach(t => {
                    let i = r(t),
                        o = 0,
                        u = n || !t.autoGenerated,
                        d = i.startsWith("Start ") && !i.includes("RUN_JS_BUNDLE") && a.has(i.replace("Start ", "Finish ")),
                        c = i.startsWith("Finish ") && !i.includes("RUN_JS_BUNDLE") && a.has(i.replace("Finish ", "Start "));
                    if (c) {
                        s = s.substring(2);
                        let e = l.pop();
                        null != e && (o = t.timestamp - e.timestamp, u = u || o > 5 && ! function(e) {
                            return ["GET_CONSTANTS", "CONVERT_CONSTANTS"].some(t => e.includes(t))
                        }(i), e.shouldKeep = e.shouldKeep || u)
                    }
                    let f = {
                        emoji: "☕",
                        timestamp: t.timestamp,
                        delta: o > 0 ? o : void 0,
                        prefix: s,
                        log: i,
                        shouldKeep: u
                    };
                    (function(e, t) {
                        let n = 0;
                        for (; n < e.length; n++) {
                            let {
                                timestamp: i
                            } = e[n];
                            if (null != i && i > t.timestamp) break
                        }
                        e.splice(n, 0, t)
                    })(e, f), d && (s += "| ", l.push(f))
                });
                let o = !1;
                return e.filter(e => !(o && e.log.includes("↪")) && !(o = !i && "\uD83C\uDFA8" === e.emoji || !1 === e.shouldKeep))
            }(c, f, t, n), m), _ = "Trace #".concat(u + 1, " started ").concat((0, l.getTimestampString)(d), "\n").concat(h);
            return null != g && (_ += "\n Server trace for trace #".concat(u + 1).concat(g)), _
        }).join("\n\n")
    }

    function r(e) {
        let t = null == e.tag ? e.label : "".concat(e.label, " ").concat(e.tag);
        return t.includes("_START") && (t = "Start " + t.replace("_START", "")), t.includes("_END") && (t = "Finish " + t.replace("_END", "")), t
    }
}