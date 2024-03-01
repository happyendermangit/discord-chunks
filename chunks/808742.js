function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getHangStatusOptions: function() {
            return f
        },
        getHangStatusDetails: function() {
            return m
        },
        getHangStatusText: function() {
            return p
        }
    });
    var l = n("49111"),
        i = n("782340"),
        a = n("65833"),
        s = n("270664"),
        r = n("763388"),
        o = n("708206"),
        u = n("787795"),
        d = n("908332"),
        c = n("850390");
    let f = () => ({
            [l.HangStatusTypes.CHILLING]: {
                title: i.default.Messages.STATUS_CHILLING,
                icon: s,
                color: "#567C7E"
            },
            [l.HangStatusTypes.GAMING]: {
                title: i.default.Messages.STATUS_GAMING,
                icon: r,
                color: "#685F8C"
            },
            [l.HangStatusTypes.FOCUSING]: {
                title: i.default.Messages.STATUS_FOCUSING,
                icon: u,
                color: "#7F6956"
            },
            [l.HangStatusTypes.BRB]: {
                title: i.default.Messages.STATUS_BRB,
                icon: a,
                color: "#76567E"
            },
            [l.HangStatusTypes.EATING]: {
                title: i.default.Messages.STATUS_EATING,
                icon: o,
                color: "#717B54"
            },
            [l.HangStatusTypes.IN_TRANSIT]: {
                title: i.default.Messages.STATUS_IN_TRANSIT,
                icon: d,
                color: "#56697F"
            },
            [l.HangStatusTypes.WATCHING]: {
                title: i.default.Messages.STATUS_WATCHING,
                icon: c,
                color: "#7C5571"
            }
        }),
        m = e => {
            if ((null == e ? void 0 : e.type) !== l.ActivityTypes.HANG_STATUS || (null == e ? void 0 : e.state) == null) return null;
            let t = e.state;
            return t === l.HangStatusTypes.CUSTOM ? null : f()[t]
        },
        p = e => {
            var t;
            let n = (null == e ? void 0 : e.state) != null ? e.state : null;
            return n === l.HangStatusTypes.CUSTOM ? null == e ? void 0 : e.details : null === (t = m(e)) || void 0 === t ? void 0 : t.title
        }
}