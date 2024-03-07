function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CommandClickable: function() {
            return A
        },
        default: function() {
            return x
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("77078"),
        r = n("507217"),
        o = n("240249"),
        u = n("524768"),
        d = n("300322"),
        c = n("845579"),
        f = n("42203"),
        m = n("474643"),
        p = n("957255"),
        h = n("18494"),
        E = n("666897"),
        g = n("659500"),
        S = n("49111"),
        C = n("317041"),
        T = n("406291"),
        v = n("782340"),
        I = n("816411");

    function _(e, t, n, i) {
        if (null == e) return;
        let a = () => {
            let l = f.default.getChannel(e);
            if (null == l) return;
            let {
                command: a,
                application: s
            } = o.getCachedCommand(l, n);
            if (null != a && a.name === t) {
                var d, c;
                g.ComponentDispatch.dispatch(S.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: e
                });
                let t = null != s ? {
                    type: u.ApplicationCommandSectionType.APPLICATION,
                    id: s.id,
                    icon: null !== (c = null == s ? void 0 : null === (d = s.bot) || void 0 === d ? void 0 : d.username) && void 0 !== c ? c : s.icon,
                    name: s.name,
                    application: s
                } : null;
                r.setActiveCommand({
                    channelId: e,
                    command: null,
                    section: null
                }), r.setActiveCommand({
                    channelId: e,
                    command: a,
                    section: t,
                    location: i
                })
            }
        };
        "" !== m.default.getDraft(e, m.DraftType.ChannelMessage) ? (0, s.openModal)(t => (0, l.jsx)(s.ConfirmModal, {
            header: v.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
            confirmText: v.default.Messages.CLEAR,
            cancelText: v.default.Messages.CANCEL,
            onConfirm: () => a(),
            confirmButtonColor: s.Button.Colors.BRAND,
            onCloseCallback: () => {
                g.ComponentDispatch.dispatch(S.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                    channelId: e
                })
            },
            ...t,
            children: (0, l.jsx)(s.Text, {
                variant: "text-md/normal",
                children: v.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
            })
        })) : a()
    }

    function N(e) {
        var t;
        let {
            node: n,
            output: r,
            state: m
        } = e, g = (0, a.useStateFromStores)([f.default, h.default], () => {
            var e;
            return f.default.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : h.default.getChannelId())
        }, [n.channelId]), {
            hasSendMessagePerm: v,
            hasUseAppCommandsPerm: I
        } = (0, a.useStateFromStoresObject)([p.default], () => {
            let e = p.default.can(S.Permissions.SEND_MESSAGES, g),
                t = p.default.can(S.Permissions.USE_APPLICATION_COMMANDS, g);
            return {
                hasSendMessagePerm: e,
                hasUseAppCommandsPerm: t
            }
        }), {
            command: N
        } = o.useCommand(g, null !== (t = n.commandKey) && void 0 !== t ? t : ""), A = c.UseLegacyChatInput.useSetting(), x = i.useMemo(() => {
            if (null == N || null == g || N.name !== n.commandName || A) return !1;
            let e = g.isPrivate(),
                t = (0, d.computeIsReadOnlyThread)(g);
            if (t || !e && !v) return !1;
            let l = (null == N ? void 0 : N.applicationId) === C.BuiltInSectionId.BUILT_IN;
            return !!e || !!l || !!I || !1
        }, [g, N, v, I, n.commandName, A]), y = i.useCallback(e => {
            null == e || e.stopPropagation(), null != g && null != n.commandName && null != n.commandKey && _(g.id, n.commandName, n.commandKey, u.ApplicationCommandTriggerLocations.MENTION)
        }, [g, n.commandKey, n.commandName]);
        return x ? (0, l.jsx)(s.Tooltip, {
            text: n.output,
            position: "top",
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: i
                } = e;
                return (0, l.jsxs)(E.default, {
                    role: "link",
                    onClick: y,
                    onMouseEnter: t,
                    onMouseLeave: i,
                    children: [T.COMMAND_SENTINEL, r(n.content, m)]
                }, m.key)
            }
        }, m.key) : (0, l.jsxs)("span", {
            children: [T.COMMAND_SENTINEL, r(n.content, m)]
        })
    }

    function A(e) {
        let {
            commandId: t,
            commandName: n,
            commandDescription: i,
            onClick: r
        } = e, o = (0, a.useStateFromStores)([h.default], () => h.default.getChannelId()), d = e => {
            null == e || e.stopPropagation(), _(o, n, t, u.ApplicationCommandTriggerLocations.POPULAR_COMMANDS), null == r || r(t)
        };
        return (0, l.jsx)(s.Tooltip, {
            text: i,
            position: "top",
            tooltipContentClassName: I.tooltip,
            children: e => {
                let {
                    onMouseEnter: t,
                    onMouseLeave: i
                } = e;
                return (0, l.jsxs)(s.Button, {
                    color: s.ButtonColors.PRIMARY,
                    size: s.ButtonSizes.ICON,
                    onClick: d,
                    onMouseEnter: t,
                    onMouseLeave: i,
                    children: ["/", n]
                })
            }
        })
    }

    function x(e) {
        return {
            react: (e, t, n) => (0, l.jsx)(N, {
                node: e,
                output: t,
                state: n
            })
        }
    }
}