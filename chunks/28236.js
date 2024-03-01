function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("65597"),
        o = n("77078"),
        u = n("430568"),
        d = n("277855"),
        c = n("305122"),
        f = n("462550"),
        m = n("235004"),
        p = n("520497"),
        h = n("812809"),
        E = n("948613"),
        g = n("368121"),
        C = n("706014"),
        S = function(e) {
            let {
                soundId: t,
                jumbo: n = !1
            } = e, {
                currentPreviewRef: a
            } = i.useContext(f.default), S = (0, r.default)([m.default], () => m.default.getSoundById(t)), T = (null == S ? void 0 : S.emojiId) != null || (null == S ? void 0 : S.emojiName) != null, [v, I] = i.useState(!1), _ = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), N = i.useCallback(() => {
                var e;
                null == S && (0, c.maybeFetchSoundboardSounds)();
                let n = new Audio((0, p.default)(t));
                null != a.current && a.current.pause(), a.current = n, n.currentTime = 0, n.volume = (0, h.default)(null !== (e = null == S ? void 0 : S.volume) && void 0 !== e ? e : .5), I(!0), n.play(), n.addEventListener("ended", () => {
                    I(!1)
                }, {
                    once: !0
                })
            }, [t, S, a, I]);
            return _ ? null == S ? (0, l.jsxs)(o.Clickable, {
                title: "Risky Click",
                tag: "span",
                onClick: N,
                className: C.container,
                children: [(0, l.jsx)(g.default, {
                    className: C.unknownSound
                }), (0, l.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "none",
                    className: C.text,
                    children: "Unknown"
                })]
            }) : n ? (0, l.jsxs)(o.Clickable, {
                onClick: N,
                className: C.jumboContainer,
                children: [(0, l.jsx)("div", {
                    className: s(C.jumboOverlay, {
                        [C.playing]: v
                    }),
                    children: (0, l.jsx)(E.default, {
                        className: C.jumboPlayIcon
                    })
                }), T && (0, l.jsx)(u.default, {
                    emojiId: null == S ? void 0 : S.emojiId,
                    emojiName: null == S ? void 0 : S.emojiName,
                    className: C.jumboEmoji
                }), (0, l.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "none",
                    className: C.text,
                    children: S.name
                })]
            }) : (0, l.jsxs)(o.Clickable, {
                tag: "span",
                onClick: N,
                className: C.container,
                children: [T && (0, l.jsx)(u.default, {
                    emojiId: null == S ? void 0 : S.emojiId,
                    emojiName: null == S ? void 0 : S.emojiName,
                    className: C.emoji
                }), (0, l.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "none",
                    className: C.text,
                    children: S.name
                })]
            }) : null
        }
}