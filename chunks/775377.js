function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("943722"),
        r = n("157384");

    function o(e) {
        let {
            activity: t,
            className: n,
            emojiClassName: i,
            textClassName: o,
            placeholderText: u,
            soloEmojiClassName: d,
            animate: c = !0,
            hideTooltip: f = !1,
            hideEmoji: m = !1,
            children: p
        } = e;
        if (null == t) return null;
        let {
            emoji: h
        } = t, E = null != t.state && "" !== t.state ? t.state : u;
        return (0, l.jsxs)("div", {
            className: a(r.container, n),
            children: [m || null == h ? null : (0, l.jsx)(s.ActivityEmoji, {
                emoji: h,
                className: a(r.emoji, i, null != d ? {
                    [d]: null == E || "" === E
                } : null),
                animate: c,
                hideTooltip: f
            }), null != E && E.length > 0 ? (0, l.jsx)("span", {
                className: o,
                children: E
            }) : null, p]
        })
    }
}