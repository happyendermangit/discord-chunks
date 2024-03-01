function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("781738"), n("222007");
    var l = n("37983");
    n("884691");
    var i = n("77078"),
        a = n("646630"),
        s = n("925442");

    function r(e, t) {
        if (!("type" in e)) return null;
        if ("timestamp" === e.type) return (0, l.jsx)(o, {
            ...t,
            timestamp: e.parsed
        });
        return null
    }

    function o(e) {
        var t;
        let {
            timestamp: n,
            replace: r
        } = e, o = e => {
            let {
                timestamp: t,
                format: l
            } = e, i = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, s = null != l ? l : n.format, o = (0, a.unparseTimestamp)(i, s);
            r(o)
        };
        return (0, l.jsxs)("div", {
            className: s.container,
            children: [(0, l.jsx)(i.DateInput, {
                value: n.parsed,
                onSelect: e => {
                    o({
                        timestamp: e.toDate()
                    })
                }
            }), (0, l.jsx)(i.TimeInput, {
                value: n.parsed,
                onChange: e => {
                    o({
                        timestamp: e.toDate()
                    })
                }
            }), (0, l.jsx)(i.RadioGroup, {
                options: Object.entries(a.TIMESTAMP_FORMATS).map(e => {
                    let [t, l] = e;
                    return {
                        name: l(n.parsed),
                        value: t
                    }
                }),
                value: null !== (t = n.format) && void 0 !== t ? t : a.DEFAULT_TIMESTAMP_FORMAT,
                size: i.RadioGroup.Sizes.SMALL,
                onChange: e => {
                    let {
                        value: t
                    } = e;
                    o({
                        format: t
                    })
                }
            })]
        })
    }
}