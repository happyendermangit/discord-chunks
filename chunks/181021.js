function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("65597"),
        a = n("151426"),
        s = n("77078"),
        r = n("430568"),
        o = n("206230"),
        u = n("10641"),
        d = n("917764"),
        c = n("538282"),
        f = n("562323"),
        p = n("305961"),
        m = n("227602"),
        h = n("471671"),
        x = n("945330"),
        E = n("95689"),
        y = n("423487"),
        g = n("773336"),
        S = n("13798"),
        C = n("235004"),
        _ = n("49111"),
        T = n("782340"),
        I = n("870477");

    function v(e) {
        let {
            soundboardSound: t,
            closePicker: v
        } = e, N = (0, c.useExpressionPickerStore)(e => e.searchQuery), A = (0, l.useStateFromStores)([C.default], () => null != t && C.default.isFavoriteSound(t.soundId)), R = (0, l.useStateFromStores)([p.default], () => p.default.getGuild(null == t ? void 0 : t.guildId)), O = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion, []), M = (0, l.useStateFromStores)([h.default], () => h.default.isFocused()), k = (0, l.useStateFromStores)([m.default], () => m.default.getKeybindForAction(_.GlobalKeybindActions.SOUNDBOARD_HOLD));
        if (null != t && N.length > 0) return (0, i.jsx)(f.default, {
            graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, i.jsx)(r.default, {
                emojiId: t.emojiId,
                emojiName: t.emojiName,
                className: I.emoji
            }) : (0, i.jsx)(E.default, {
                className: I.emoji
            }),
            graphicSecondary: null != R ? (0, i.jsx)(d.default, {
                guild: R,
                shouldAnimate: !O && M
            }) : null,
            titlePrimary: t.name,
            titleSecondary: null == R ? void 0 : R.name,
            isFavorite: A
        });
        let L = () => {
                v(), (0, s.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("644926").then(n.bind(n, "644926"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                })
            },
            P = (0, u.isDismissibleContentDismissed)(a.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
            b = null != k && (0, g.isWindows)() && !P ? T.default.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
                keybind: (0, S.toString)(k.shortcut, !0),
                openSettingsHook: (e, t) => (0, i.jsx)(s.Anchor, {
                    onClick: L,
                    children: e
                }, t)
            }) : null;
        return null == b ? null : (0, i.jsxs)("div", {
            className: I.keybindHint,
            children: [(0, i.jsx)(y.default, {
                className: I.warningIcon
            }), (0, i.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-normal",
                className: I.keybindHintText,
                children: b
            }), (0, i.jsx)(s.Clickable, {
                className: I.closeButton,
                onClick: () => (0, u.markDismissibleContentAsDismissed)(a.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
                children: (0, i.jsx)(x.default, {
                    width: 16,
                    height: 16
                })
            })]
        })
    }
}