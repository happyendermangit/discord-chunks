function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("880114"),
        a = n("777003"),
        s = n("862939");

    function r(e) {
        let {
            userId: t,
            guild: n,
            guildMember: r
        } = e;
        return (0, l.jsx)(a.default, {
            children: (0, l.jsx)(i.default, {
                userId: t,
                guild: n,
                guildMember: r,
                headingClassName: s.title,
                textClassName: s.body
            })
        })
    }
}