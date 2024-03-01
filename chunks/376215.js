function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("222007"), n("424973");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("974667"),
        o = n("942367"),
        u = n("446674"),
        d = n("913144"),
        c = n("81594"),
        f = n("798609"),
        m = n("206230"),
        p = n("302437"),
        h = n("383018"),
        E = n("474643"),
        g = n("585722"),
        C = n("898260"),
        S = n("378765"),
        T = n("393377"),
        v = n("761354"),
        I = n("49111"),
        _ = n("986548"),
        N = n("356410");
    let A = [];

    function x(e) {
        let {
            channelId: t,
            type: n
        } = e, a = (0, u.useStateFromStores)([m.default], () => m.default.keyboardModeEnabled), x = (0, p.default)("attachments", o.Orientations.HORIZONTAL), y = (0, u.useStateFromStores)([g.default], () => g.default.getUploads(t, n.drafts.type)), {
            isApplicationCommand: O,
            commandOptions: R,
            commandOptionStates: M
        } = (0, u.useStateFromStoresObject)([h.default], () => {
            let e = h.default.getActiveCommand(t);
            if (null == e) return {
                isApplicationCommand: !1,
                commandOptions: A,
                commandOptionStates: null
            };
            let n = h.default.getOptionStates(t);
            return {
                isApplicationCommand: !0,
                commandOptions: e.options,
                commandOptionStates: n
            }
        }), L = i.useMemo(() => {
            var e;
            return null !== (e = null == R ? void 0 : R.filter(e => {
                var t;
                return e.type === f.ApplicationCommandOptionType.ATTACHMENT && (null == M ? void 0 : null === (t = M[e.name]) || void 0 === t ? void 0 : t.hasValue)
            })) && void 0 !== e ? e : []
        }, [R, M]), [P, b] = i.useState([]);
        i.useEffect(() => {
            let e = () => {
                c.default.clearAll(t, n.drafts.type)
            };
            return d.default.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e), () => d.default.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        }, [t, n]);
        let j = i.useCallback(() => {
            x.focusFirstVisibleItem()
        }, [x]);
        return ((0, S.useComponentAction)({
            event: I.ComponentActions.FOCUS_ATTACHMENT_AREA,
            handler: j
        }), i.useEffect(() => {
            if (O) {
                let e = [];
                P.forEach(t => {
                    !L.some(e => t.name === e.name) && e.push(t)
                }), e.forEach(e => {
                    c.default.remove(t, e.name, n.drafts.type)
                }), b(L)
            }
        }, [t, L.length, n]), !O && 0 === y.length || O && 0 === L.length) ? null : (0, l.jsxs)(i.Fragment, {
            children: [(0, l.jsx)(r.ListNavigatorProvider, {
                navigator: x,
                children: (0, l.jsx)(r.ListNavigatorContainer, {
                    children: e => {
                        let {
                            ref: i,
                            ...r
                        } = e;
                        return (0, l.jsx)("ul", {
                            ref: i,
                            ...r,
                            className: s(_.channelAttachmentArea, N.scrollbarGhost),
                            children: O ? L.map(e => (0, l.jsx)(T.default, {
                                channelId: t,
                                keyboardModeEnabled: a,
                                option: e
                            }, e.name)) : y.map(e => (0, l.jsx)(v.default, {
                                channelId: t,
                                draftType: n.drafts.type,
                                upload: e,
                                keyboardModeEnabled: a,
                                clip: e.clip
                            }, e.id))
                        })
                    }
                })
            }), n.drafts.type === E.DraftType.FirstThreadMessage ? null : (0, l.jsx)(C.default, {})]
        })
    }
    var y = i.memo(function(e) {
        let {
            channelId: t,
            type: n,
            canAttachFiles: i
        } = e;
        return i ? (0, l.jsx)(x, {
            channelId: t,
            type: n
        }) : null
    })
}