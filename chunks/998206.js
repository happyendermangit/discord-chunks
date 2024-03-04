function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("446674"),
        o = n("151426"),
        u = n("77078"),
        d = n("244201"),
        c = n("206230"),
        f = n("427953"),
        m = n("550766"),
        p = n("292655"),
        h = n("478272"),
        E = n("685665"),
        g = n("384997"),
        C = n("128295"),
        S = n("414868"),
        T = n("49111"),
        v = n("994428"),
        I = n("13030"),
        _ = n("782340"),
        N = n("868387");

    function A(e) {
        let {
            disabled: t,
            channel: n,
            markAsDismissed: a,
            visibleContent: g,
            innerRef: A
        } = e, x = (0, d.useAppContext)(), {
            analyticsLocations: y
        } = (0, E.default)(), O = x === T.AppContext.POPOUT, R = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion), M = (0, f.useIsActivitiesInTextEnabled)(n.id, "ChannelActivityPickerButton"), L = i.useCallback(() => {
            a(v.ContentDismissActionType.UNKNOWN), (0, h.default)({
                channel: M ? n : void 0,
                guildId: n.guild_id,
                locationObject: {
                    page: T.AnalyticsPages.GUILD_CHANNEL,
                    section: T.AnalyticsSections.CHANNEL_TEXT_AREA,
                    object: T.AnalyticsObjects.BUTTON_ICON,
                    objectType: T.AnalyticsObjectTypes.ACTIVITY
                },
                openInPopout: O,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: y
            }), (0, m.fetchShelf)({
                guildId: n.guild_id
            })
        }, [y, n, M, a, O]), P = () => {
            if (g === o.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES) return (0, l.jsxs)("div", {
                className: N.sparkleContainer,
                children: [(0, l.jsx)(S.default, {
                    className: s(N.sparkleStar, {
                        [N.noAnimation]: R
                    })
                }), (0, l.jsx)(C.default, {
                    className: s(N.sparklePlus, {
                        [N.noAnimation]: R
                    })
                })]
            });
            return null
        };
        return t ? null : (0, l.jsx)(u.Tooltip, {
            text: _.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
            children: e => (0, l.jsxs)("div", {
                ...e,
                className: s(I.CHAT_INPUT_BUTTON_CLASSNAME, N.buttonContainer),
                ref: A,
                children: [(0, l.jsx)(p.default, {
                    onClick: L,
                    tabIndex: 0,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: -4,
                            right: -4
                        }
                    }
                }), P()]
            })
        })
    }
    let x = [o.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES];
    var y = i.memo(i.forwardRef(function(e, t) {
        return (0, l.jsx)(g.default, {
            contentTypes: x,
            children: n => {
                let {
                    visibleContent: i,
                    markAsDismissed: a
                } = n;
                return (0, l.jsx)(A, {
                    ...e,
                    innerRef: t,
                    visibleContent: i,
                    markAsDismissed: () => a(v.ContentDismissActionType.UNKNOWN)
                })
            }
        })
    }))
}