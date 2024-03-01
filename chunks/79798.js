function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var s = n("37983");
    n("884691");
    var i = n("414456"),
        r = n.n(i),
        a = n("414055"),
        o = n("996554"),
        d = n("486952"),
        u = n("988268"),
        l = n("782340"),
        f = n("639670");
    let _ = e => {
        let t, {
                invertColor: n = !1,
                type: i = u.BotTagTypes.BOT,
                className: _,
                verified: c,
                hideIcon: g = !1,
                useRemSizes: m = !1,
                children: h = []
            } = e,
            v = null,
            E = l.default.Messages.VERIFIED_BOT_TOOLTIP,
            {
                enabled: p
            } = o.AppLauncherOnboardingExperiment.useExperiment({
                location: "Bot Tag"
            }, {
                autoTrackExposure: !1
            });
        switch (i) {
            case u.BotTagTypes.SYSTEM_DM:
            case u.BotTagTypes.OFFICIAL:
                c = !0, E = l.default.Messages.DISCORD_SYSTEM_MESSAGE_BOT_TAG_TOOLTIP, v = l.default.Messages.SYSTEM_DM_TAG_SYSTEM;
                break;
            case u.BotTagTypes.SERVER:
                v = l.default.Messages.BOT_TAG_SERVER;
                break;
            case u.BotTagTypes.ORIGINAL_POSTER:
                v = l.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER;
                break;
            case u.BotTagTypes.STAFF_ONLY_DM:
                v = l.default.Messages.STAFF_BADGE_TOOLTIP;
                break;
            case u.BotTagTypes.AI:
                c = !0, E = l.default.Messages.AI_GENERATED_TOOLTIP, v = l.default.Messages.AI_TAG;
                break;
            case u.BotTagTypes.REMIX:
                c = !1, v = l.default.Messages.REMIXING_TAG;
                break;
            case u.BotTagTypes.BOT:
            default:
                v = p ? l.default.Messages.APP_TAG : l.default.Messages.BOT_TAG_BOT
        }
        let y = i === u.BotTagTypes.ORIGINAL_POSTER,
            T = i === u.BotTagTypes.REMIX,
            C = null;
        c && (C = (0, s.jsx)(a.Tooltip, {
            text: E,
            align: "center",
            position: "top",
            children: e => (0, s.jsx)(d.default, {
                ...e,
                className: f.botTagVerified
            })
        })), t = i === u.BotTagTypes.AI ? f.botTagAI : n ? f.botTagInvert : f.botTagRegular;
        let I = e => (0, s.jsxs)("span", {
            ...e,
            className: r(_, t, m ? f.rem : f.px, {
                [f.botTagOP]: y,
                [f.botTagRemix]: T
            }),
            children: [g ? null : C, h, (0, s.jsx)("span", {
                className: f.botText,
                children: v
            })]
        });
        switch (i) {
            case u.BotTagTypes.REMIX:
                return (0, s.jsx)(a.Tooltip, {
                    text: l.default.Messages.REMIXING_DOWNLOAD_APP,
                    position: "top",
                    children: e => I(e)
                });
            case u.BotTagTypes.ORIGINAL_POSTER:
                return (0, s.jsx)(a.Tooltip, {
                    text: l.default.Messages.BOT_TAG_FORUM_ORIGINAL_POSTER_TOOLTIP,
                    position: "top",
                    children: e => I(e)
                });
            default:
                return I()
        }
    };
    _.Types = u.BotTagTypes;
    var c = _
}