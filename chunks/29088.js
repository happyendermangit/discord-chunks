function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("222007");
    var i = n("808742"),
        l = n("204947"),
        a = n("152311"),
        s = n("502651"),
        r = n("49111"),
        o = n("782340");

    function u(e) {
        return {
            [r.ActivityTypes.STREAMING]: e ? o.default.Messages.UNFORMATTED_STREAMING : o.default.Messages.STREAMING,
            [r.ActivityTypes.LISTENING]: e ? o.default.Messages.UNFORMATTED_LISTENING_TO : o.default.Messages.LISTENING_TO,
            [r.ActivityTypes.WATCHING]: e ? o.default.Messages.UNFORMATTED_WATCHING : o.default.Messages.WATCHING,
            [r.ActivityTypes.COMPETING]: e ? o.default.Messages.UNFORMATTED_COMPETING : o.default.Messages.COMPETING
        }
    }

    function d(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            d = arguments.length > 3 ? arguments[3] : void 0;
        if (null != e && e.type === r.ActivityTypes.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
        if (null != t) return null == e || e.type !== r.ActivityTypes.PLAYING ? o.default.Messages.SHARING_SCREEN : u(n)[r.ActivityTypes.STREAMING].format({
            name: e.name
        });
        if (d && null != e && e.type === r.ActivityTypes.HANG_STATUS) return (0, i.getHangStatusText)(e);
        if (null == e || null == e.name) return null;
        if ((0, s.default)(e)) {
            let t = null != e.details && "" !== e.details ? e.details : e.name;
            return u(n)[r.ActivityTypes.STREAMING].format({
                name: t
            })
        }
        return (0, a.default)(e) ? (0, l.default)(e.name) : function(e, t, n) {
            let i = u(n);
            switch (e) {
                case r.ActivityTypes.LISTENING:
                case r.ActivityTypes.WATCHING:
                case r.ActivityTypes.COMPETING:
                    return i[e].format({
                        name: t
                    });
                case r.ActivityTypes.CUSTOM_STATUS:
                case r.ActivityTypes.HANG_STATUS:
                    return null;
                case r.ActivityTypes.PLAYING:
                default:
                    return n ? o.default.Messages.UNFORMATTED_PLAYING_GAME.format({
                        game: t
                    }) : o.default.Messages.PLAYING_GAME.format({
                        game: t
                    })
            }
        }(e.type, e.name, n)
    }

    function c(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 ? arguments[3] : void 0;
        if (Array.isArray(e)) {
            let l = e;
            null != t && (l = [...l, null]);
            let a = null;
            for (let e of l) {
                let l = d(e, t, n, i);
                if (null != l) return {
                    activity: e,
                    activityText: l
                };
                (null == e ? void 0 : e.type) === r.ActivityTypes.CUSTOM_STATUS && null != e.emoji && (a = e)
            }
            return (null == a ? void 0 : a.emoji) != null ? {
                activity: a,
                activityText: null
            } : null
        }
        return d(e, t, n, i)
    }
}