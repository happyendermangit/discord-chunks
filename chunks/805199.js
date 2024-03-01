function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return C
        }
    });
    var t = E("446674"),
        o = E("913144"),
        n = E("697218"),
        r = E("599110"),
        i = E("719923"),
        a = E("513196"),
        I = E("49111"),
        s = E("994428"),
        T = E("646718");
    let S = {
            desktop: a.FreemiumAppIconIds.DEFAULT,
            coachmarkImpressions: 0
        },
        N = {
            client: S
        },
        O = !1,
        A = !0,
        R = () => {
            A = !i.default.canUsePremiumAppIcons(n.default.getCurrentUser())
        },
        l = e => {
            if (N.client.desktop = e, !A) {
                var _;
                r.default.track(I.AnalyticEvents.APP_ICON_UPDATED, {
                    icon_id: e,
                    user_premium_tier: null === (_ = n.default.getCurrentUser()) || void 0 === _ ? void 0 : _.premiumType,
                    icon_premium_tier: e !== a.FreemiumAppIconIds.DEFAULT ? T.PremiumTypes.TIER_2 : null
                })
            }
        };

    function u() {
        A && (N.client = {
            desktop: a.FreemiumAppIconIds.DEFAULT,
            coachmarkImpressions: 2
        }), O = !1
    }
    class L extends t.default.PersistedStore {
        initialize(e) {
            null != e && (N = e), this.waitFor(n.default), this.syncWith([n.default], R)
        }
        get isEditorOpen() {
            return O
        }
        get isUpsellPreview() {
            return A
        }
        getState() {
            return N
        }
        getCurrentDesktopIcon() {
            var e;
            return null == N ? void 0 : null === (e = N.client) || void 0 === e ? void 0 : e.desktop
        }
    }
    L.displayName = "AppIconPersistedStoreState", L.persistKey = "AppIconPersistedStoreState";
    var C = new L(o.default, {
        APP_ICON_UPDATED: function(e) {
            let {
                id: _
            } = e;
            null != _ && l(_)
        },
        APP_ICON_EDITOR_OPEN: function() {
            O = !0
        },
        APP_ICON_EDITOR_CLOSE: u,
        APP_ICON_TRACK_IMPRESSION: function(e) {
            let {
                markAsDismissed: _
            } = e;
            N.client.coachmarkImpressions += 1, N.client.coachmarkImpressions >= 2 && (null == _ || _(s.ContentDismissActionType.UNKNOWN), u())
        }
    })
}