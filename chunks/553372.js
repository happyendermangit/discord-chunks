function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SecondaryActionButton: function() {
            return M
        },
        PreviewButton: function() {
            return L
        },
        default: function() {
            return P
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("974667"),
        o = n("446674"),
        u = n("862337"),
        d = n("669491"),
        c = n("77078"),
        f = n("430568"),
        m = n("206230"),
        p = n("526887"),
        h = n("697218"),
        E = n("118849"),
        g = n("671434"),
        C = n("132755"),
        S = n("151185"),
        T = n("368121"),
        v = n("305122"),
        I = n("235004"),
        _ = n("389480"),
        N = n("78581"),
        A = n("23106"),
        x = n("796864"),
        y = n("172858"),
        O = n("782340"),
        R = n("802501");

    function M(e) {
        let {
            disabled: t = !1,
            onClick: n,
            text: i,
            children: a,
            tooltipPosition: r = "top"
        } = e;
        return (0, l.jsx)(c.Tooltip, {
            text: i,
            position: r,
            children: e => (0, l.jsx)(c.Clickable, {
                ...e,
                "aria-label": i,
                className: s(R.secondaryButton, {
                    [R.buttonDisabled]: t
                }),
                onClick: n,
                children: a
            })
        })
    }

    function L(e) {
        let {
            sound: t,
            previewSound: n,
            disabled: i = !1,
            tooltipPosition: a = "top"
        } = e;
        return (0, l.jsx)(M, {
            tooltipPosition: a,
            disabled: i,
            onClick: function(e) {
                e.stopPropagation(), e.currentTarget.blur(), n()
            },
            text: O.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                emojiName: t.emojiName,
                soundName: t.name
            }),
            children: (0, l.jsx)(T.default, {
                className: R.secondaryIcon
            })
        })
    }
    var P = i.forwardRef(function(e, t) {
        var n, a, T;
        let {
            sound: P,
            channel: b,
            className: j,
            focused: U,
            forceSecondaryActions: D = !1,
            interactive: k = !0,
            enableSecondaryActions: w = !1,
            suppressPlaySound: F,
            onMouseEnter: G,
            onSelectItem: B,
            analyticsLocations: H,
            buttonOverlay: V = _.SoundButtonOverlay.PLAY,
            ...K
        } = e, {
            soundId: W,
            name: Y,
            emojiId: z,
            emojiName: Z
        } = P, J = (0, o.useStateFromStores)([h.default], () => h.default.getCurrentUser()), q = (0, x.useSoundButtonContextMenu)(P, null == b ? void 0 : b.guild_id), {
            playSoundboardSound: X,
            previewSound: Q,
            isPlayingSound: $
        } = (0, A.default)(P, null !== (n = null == b ? void 0 : b.id) && void 0 !== n ? n : null), {
            createMultipleConfettiAt: ee
        } = i.useContext(p.ConfettiCannonContext), et = i.useRef(null);
        let en = (a = P.soundId, T = et.current, i.useMemo(() => {
                if (null == T || "1" !== a) return {
                    x: 0,
                    y: 0
                };
                let e = T.getBoundingClientRect();
                return {
                    x: e.left + e.width / 2,
                    y: e.top + e.height / 2
                }
            }, [T, a])),
            el = (0, o.useStateFromStores)([m.default], () => m.default.useReducedMotion),
            ei = i.useRef(.01),
            ea = i.useRef(new u.Interval),
            es = "1" === P.soundId,
            er = (0, o.useStateFromStores)([I.default], () => I.default.isFavoriteSound(W), [W]),
            eo = "sound-".concat(P.soundId),
            eu = (0, r.useListItem)(eo),
            ed = null != z || null != Z,
            ec = !(0, N.canUseSoundboardSound)(J, P, b),
            ef = D || w && !ec;

        function em(e) {
            e.stopPropagation(), e.currentTarget.blur(), er ? (0, v.removeFavoriteSound)(W) : (0, v.addFavoriteSound)(W)
        }

        function ep() {
            return (0, l.jsx)(M, {
                disabled: !k && !D,
                onClick: em,
                text: O.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                    emojiName: P.emojiName,
                    soundName: P.name
                }),
                children: er ? (0, l.jsx)(g.default, {
                    className: s(R.secondaryIcon, R.favoriteIconFavorite),
                    color: d.default.unsafe_rawColors.GOLD.css
                }) : (0, l.jsx)(E.default, {
                    className: R.secondaryIcon
                })
            })
        }
        let eh = L({
                sound: P,
                previewSound: Q,
                disabled: ec
            }),
            eE = () => (0, l.jsxs)("div", {
                className: R.buttonOverlay,
                children: [(0, l.jsx)("div", {
                    className: s({
                        [R.buttonOverlayBackground]: !F
                    })
                }), (0, l.jsxs)("div", {
                    className: R.buttonOverlayActions,
                    children: [ef && eh, !F && !ec && (0, l.jsx)(C.default, {
                        className: R.playIcon
                    }), ef && ep()]
                })]
            });
        return i.useEffect(() => {
            let e = ea.current;
            return es && e.start(1e3, () => {
                ei.current = Math.max(ei.current - .01, .01)
            }), () => e.stop()
        }, [es]), (0, l.jsxs)("li", {
            ref: t,
            className: R.soundButtonWrapper,
            onMouseEnter: G,
            children: [(0, l.jsxs)(c.ClickableContainer, {
                ...K,
                buttonProps: {
                    ...eu,
                    id: eo,
                    role: "button"
                },
                "aria-label": O.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                    emojiName: P.emojiName,
                    soundName: P.name
                }),
                className: s(j, R.soundButton, {
                    [R.playing]: $,
                    [R.hoverActiveBackground]: F,
                    [R.soundButtonInteractive]: k,
                    [R.buttonDisabled]: !k && !D,
                    [R.premiumDisabled]: ec && !D,
                    [R.buttonDisabledSecondaryActionsEnabled]: !k && D,
                    [R.focused]: k && U
                }),
                onClick: function() {
                    if (es && !el && (ei.current = Math.min(ei.current + .01, .1), Math.random() < ei.current && ee(en.x, en.y, void 0, void 0, {
                            sprite: y.DUCK_CONFETTI_SPRITE
                        })), null != B) {
                        B();
                        return
                    }
                    F || X(H)
                },
                onContextMenu: w && !ec ? q : void 0,
                children: [(0, l.jsxs)("div", {
                    className: R.soundInfo,
                    "aria-hidden": !0,
                    ref: et,
                    children: [ed && (0, l.jsx)(f.default, {
                        emojiId: z,
                        emojiName: Z,
                        className: R.emoji
                    }), (0, l.jsx)(c.Text, {
                        variant: "text-xs/medium",
                        color: k ? "header-primary" : "text-muted",
                        className: s(R.soundName, {
                            [R.hasEmoji]: ed
                        }),
                        children: Y
                    })]
                }), function() {
                    switch (V) {
                        case _.SoundButtonOverlay.ADD:
                            return (0, l.jsxs)("div", {
                                className: R.addButtonOverlay,
                                children: [(0, l.jsx)("div", {
                                    className: R.buttonOverlayBackground
                                }), (0, l.jsxs)("div", {
                                    className: R.buttonOverlayActions,
                                    children: [eh, (0, l.jsxs)("div", {
                                        className: R.addButton,
                                        children: [(0, l.jsx)(S.default, {
                                            className: R.plusSign
                                        }), (0, l.jsx)(c.Text, {
                                            variant: "text-xs/medium",
                                            color: "header-primary",
                                            children: O.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                        })]
                                    }), ef && ep()]
                                })]
                            });
                        case _.SoundButtonOverlay.PLAY:
                        default:
                            return eE()
                    }
                }()]
            }), !P.available && (0, l.jsx)(c.Tooltip, {
                text: O.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                children: e => (0, l.jsx)("div", {
                    className: R.unavailableTooltip,
                    ...e
                })
            })]
        })
    })
}