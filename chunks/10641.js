function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isDismissibleContentDismissed: function() {
            return m
        },
        useIsDismissibleContentDismissed: function() {
            return T
        },
        requestMarkDismissibleContentAsShown: function() {
            return g
        },
        markDismissibleContentAsDismissed: function() {
            return I
        }
    }), n("222007");
    var i = n("446674"),
        r = n("151426"),
        s = n("193302"),
        a = n("872173"),
        o = n("374363"),
        l = n("599110"),
        u = n("674268"),
        c = n("495226"),
        d = n("585653"),
        f = n("989691"),
        E = n("127746"),
        p = n("862853"),
        h = n("846614"),
        _ = n("994428"),
        S = n("49111");

    function m(e) {
        var t;
        if ((0, h.disableNewUserDismissibleContent)(e)) return !0;
        let n = null === (t = o.default.settings.userContent) || void 0 === t ? void 0 : t.dismissedContents;
        return null != n && (0, u.hasBit)(n, e)
    }

    function T(e) {
        return (0, i.useStateFromStores)([o.default], () => m(e))
    }

    function g(e, t, n) {
        if ((0, p.isContentShown)(e) || f.default.hasUserHitDCCap(e)) return;
        let i = function(e) {
            let t = E.CONTENT_TYPES_WITH_BYPASS_HOLDOUT.has(e),
                {
                    enabled: n
                } = s.default.getCurrentConfig({
                    location: "isUserSubjectToDCFHoldout"
                }, {
                    autoTrackExposure: !t
                });
            return n && !t
        }(e);
        if (!i) !n && (0, p.addCandidateContent)({
            content: e,
            groupName: null == t ? void 0 : t.groupName,
            onAdded: () => {
                var n;
                let [i, s] = (0, p.getCurrentlyShownCounts)();
                (0, d.handleDCShownToUser)(e), l.default.track(S.AnalyticEvents.DISMISSIBLE_CONTENT_SHOWN, {
                    type: r.DismissibleContent[e],
                    content_count: i,
                    fatigable_content_count: s,
                    group_name: null == t ? void 0 : t.groupName,
                    bypass_fatigue: c.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
                    guild_id: null == t ? void 0 : t.guildId
                }), null == t || null === (n = t.onShown) || void 0 === n || n.call(t)
            }
        })
    }
    async function I(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ((0, p.isContentShown)(e) || t.forceTrack) && function(e, t) {
            var n;
            let [i] = (0, p.getCurrentlyShownCounts)(), s = f.default.getRenderedAtTimestamp(e), a = new Date, o = null == s ? null : a.getTime() - s;
            l.default.track(S.AnalyticEvents.DISMISSIBLE_CONTENT_DISMISSED, {
                type: r.DismissibleContent[e],
                action: null !== (n = null == t ? void 0 : t.dismissAction) && void 0 !== n ? n : _.ContentDismissActionType.UNKNOWN,
                content_count: i,
                group_name: null == t ? void 0 : t.groupName,
                bypass_fatigue: c.CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(e),
                guild_id: null == t ? void 0 : t.guildId,
                shown_duration: o
            })
        }(e, t), (0, d.handleDCDismissed)(e), await (0, a.addDismissedContent)(e);
        let n = !f.default.hasUserHitDCCap();
        (0, p.removeCandidateContent)({
            content: e,
            groupName: null == t ? void 0 : t.groupName
        }, n)
    }
}