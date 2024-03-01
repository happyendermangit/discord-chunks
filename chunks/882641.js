function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EMOJI_BUTTON_SPRING_CONFIG: function() {
            return p
        },
        default: function() {
            return h
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("907002"),
        o = n("77078"),
        u = n("558986"),
        d = n("474293"),
        c = n("958706"),
        f = n("782340"),
        m = n("321573");
    let p = {
        tension: 800,
        friction: 24
    };
    var h = function(e) {
        var t;
        let {
            tabIndex: n,
            className: a,
            renderButtonContents: h,
            active: E,
            onClick: g,
            "aria-controls": C,
            focusProps: S
        } = e, [T, v] = i.useState(!1), [I, _] = i.useState(50), N = T || E, A = (0, d.getClass)(m, "emojiButton", N ? "Hovered" : "Normal");
        let x = (t = I, {
                "--custom-emoji-sprite-size": "".concat(24, "px"),
                "--custom-emoji-sprite-row": Math.floor(t / 20),
                "--custom-emoji-sprite-col": t % 20
            }),
            y = i.useCallback(() => {
                if (!N) v(!0), _(Math.floor(77 * Math.random())), (0, u.initiateEmojiInteraction)(c.EmojiInteractionPoint.EmojiButtonMouseEntered)
            }, [N, v, _]),
            O = i.useCallback(() => {
                v(!1)
            }, [v]),
            R = i.useCallback(() => (0, u.initiateEmojiInteraction)(c.EmojiInteractionPoint.EmojiButtonFocused), []);
        return (0, l.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            tabIndex: n,
            className: s(A, a),
            onMouseEnter: y,
            onMouseOver: y,
            onMouseLeave: O,
            onFocus: R,
            onClick: g,
            "aria-label": f.default.Messages.SELECT_EMOJI,
            "aria-controls": C,
            "aria-expanded": E,
            "aria-haspopup": "dialog",
            focusProps: S,
            children: null != h ? h() : (0, l.jsx)(r.Spring, {
                config: p,
                to: {
                    value: N ? 1 : 0
                },
                children: e => {
                    let {
                        value: t
                    } = e;
                    return (0, l.jsxs)(r.animated.div, {
                        className: m.spriteContainer,
                        style: {
                            ...x,
                            transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
                        },
                        children: [(0, l.jsx)("div", {
                            className: s(m.sprite, m.spriteColored, N ? m.active : m.inactive)
                        }), (0, l.jsx)("div", {
                            className: s(m.sprite, m.spriteGreyscale, N ? m.inactive : m.active)
                        })]
                    })
                }
            })
        })
    }
}