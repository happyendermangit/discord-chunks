function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var l = n("884691"),
        i = n("714617"),
        a = n.n(i),
        s = n("995008"),
        r = n.n(s),
        o = n("759843"),
        u = n("913144"),
        d = n("42203"),
        c = n("18494"),
        f = n("162771"),
        m = n("599110"),
        p = n("716241"),
        h = n("939011");
    let E = (0, o.trackMaker)({
        analyticEventConfigs: m.AnalyticEventConfigs,
        dispatcher: u.default,
        TRACK_ACTION_NAME: "TRACK"
    });

    function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                disableTrack: !1,
                trackOnInitialLoad: !1
            },
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = l.useRef(),
            s = l.useRef();
        l.useEffect(() => {
            let l = !a(i.current, e);
            l && (i.current = e);
            let u = !a(s.current, n);
            if (u && (s.current = n), !l && !u) return;
            let g = {
                ...e,
                sequenceId: r("impression_")
            };
            return ! function(e) {
                var t, n;
                let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        name: i,
                        type: a,
                        properties: s
                    } = e;
                if (e.type === o.ImpressionTypes.MODAL && null == e.name && (0, h.getImpressionStack)().some(e => {
                        var t;
                        return null === (t = e._stackContext) || void 0 === t ? void 0 : t.isSlide
                    })) return;
                (0, h.setCurrentImpression)(e);
                let r = null !== (t = null == s ? void 0 : s.guild_id) && void 0 !== t ? t : f.default.getGuildId(),
                    u = null !== (n = null == s ? void 0 : s.channel_id) && void 0 !== n ? n : c.default.getChannelId(r),
                    g = (0, m.expandEventProperties)({
                        impression_type: a,
                        location: (0, h.getLocation)(),
                        ...(0, p.collectGuildAnalyticsMetadata)(r),
                        ...(0, p.collectChannelAnalyticsMetadata)(d.default.getChannel(u)),
                        ...s
                    });
                if (l) {
                    (0, h.setDebugTrackedData)(null, null);
                    return
                }
                null != i && null != a && ((0, m.debugLogEvent)(i, g), E(i, g)), (0, h.setDebugTrackedData)(i, g)
            }(g, t.disableTrack), () => {
                null != g && (0, h.cleanupImpression)(g)
            }
        }, t.trackOnInitialLoad ? [] : void 0)
    }
}