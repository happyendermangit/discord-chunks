function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return I
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("273481"),
        o = n("77078"),
        u = n("841098"),
        d = n("850391"),
        c = n("149022"),
        f = n("681060"),
        m = n("219013"),
        p = n("233069"),
        h = n("882641"),
        E = n("964261"),
        g = n("49111"),
        C = n("782340"),
        S = n("789215");
    let T = (0, p.createChannelRecord)({
            id: "1",
            type: g.ChannelTypes.DM
        }),
        v = i.forwardRef(function(e, t) {
            let {
                replyPlaceholder: n,
                replyHeaderText: a,
                onEnter: r,
                showPopout: m,
                children: p,
                hide: h
            } = e, [g, v] = i.useState(""), [I, _] = i.useState((0, c.toRichValue)("")), N = (0, u.default)();
            return i.useEffect(() => {
                v(""), _((0, c.toRichValue)(""))
            }, [m]), (0, l.jsx)(o.Popout, {
                align: "right",
                position: "bottom",
                shouldShow: m,
                disablePointerEvents: !1,
                renderPopout: () => (0, l.jsx)("div", {
                    className: s([S.reply, "theme-".concat(N)]),
                    ref: t,
                    children: (0, l.jsx)(o.FocusLock, {
                        containerRef: t,
                        children: (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(o.Text, {
                                variant: "text-xs/bold",
                                className: S.replyHeader,
                                children: null != a ? a : C.default.Messages.CHAT
                            }), (0, l.jsx)(f.default, {
                                placeholder: null != n ? n : C.default.Messages.CHAT,
                                className: S.replyInput,
                                showRemainingCharsAfterCount: -1,
                                allowNewLines: !1,
                                maxCharacterCount: E.MAX_CHAR_COUNT,
                                channel: T,
                                onChange: (e, t, n) => {
                                    v(t), _(n)
                                },
                                type: d.ChatInputTypes.ATOMIC_REACTOR_REPLY_INPUT,
                                textValue: g,
                                richValue: I,
                                onSubmit: e => {
                                    let {
                                        value: t
                                    } = e;
                                    return t.length > E.MAX_CHAR_COUNT ? Promise.resolve({
                                        shouldClear: !1,
                                        shouldRefocus: !0
                                    }) : (r(t), h(), Promise.resolve({
                                        shouldClear: !0,
                                        shouldRefocus: !1
                                    }))
                                },
                                focused: !0,
                                disableThemedBackground: !0,
                                emojiPickerCloseOnModalOuterClick: !0,
                                disabled: !1
                            })]
                        })
                    })
                }),
                children: () => p
            })
        });
    var I = e => {
        let {
            onInteraction: t,
            replyHeaderText: n,
            replyPlaceholder: a,
            showReact: d = !0,
            showReply: c = !0
        } = e, f = (0, u.default)(), [p, I] = i.useState(!1), [_, N] = i.useState(!1), A = i.useRef(null), x = i.useRef(null);

        function y(e) {
            var t, n;
            null != e.target && (!(null == A ? void 0 : null === (t = A.current) || void 0 === t ? void 0 : t.contains(null == e ? void 0 : e.target)) && I(!1), !(null == x ? void 0 : null === (n = x.current) || void 0 === n ? void 0 : n.contains(null == e ? void 0 : e.target)) && N(!1))
        }
        return i.useEffect(() => {
            let e = e => {
                "Escape" === e.key && (N(!1), I(!1))
            };
            return document.addEventListener("keydown", e), document.addEventListener("mousedown", y), () => {
                document.removeEventListener("keydown", e), document.removeEventListener("mousedown", y)
            }
        }, []), (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)("div", {
                className: S.reactions,
                children: [d && (0, l.jsx)(o.Popout, {
                    align: "right",
                    position: "top",
                    shouldShow: p,
                    disablePointerEvents: !1,
                    renderPopout: () => (0, l.jsx)("div", {
                        className: "theme-".concat(f),
                        ref: A,
                        children: (0, l.jsx)(m.ReactionPicker, {
                            messageId: g.EMPTY_STRING_SNOWFLAKE_ID,
                            channel: T,
                            closePopout: () => {
                                I(!1)
                            },
                            onSelectEmoji: e => {
                                null != e && (t({
                                    interactionType: E.AtomicReactorInteractionTypes.ReactSubmit,
                                    emoji: e,
                                    reply: null
                                }), I(!1))
                            }
                        })
                    }),
                    children: () => (0, l.jsx)(o.Tooltip, {
                        text: C.default.Messages.ADD_REACTION,
                        children: e => (0, l.jsx)("div", {
                            ...e,
                            className: S.reaction,
                            children: (0, l.jsx)(h.default, {
                                active: !1,
                                tabIndex: 0,
                                onClick: () => {
                                    t({
                                        interactionType: E.AtomicReactorInteractionTypes.ReactBegin,
                                        emoji: null,
                                        reply: null
                                    }), I(!0), N(!1)
                                }
                            })
                        })
                    })
                }), c && (0, l.jsx)(v, {
                    hide: () => N(!1),
                    ref: x,
                    replyHeaderText: n,
                    replyPlaceholder: a,
                    showPopout: _,
                    onEnter: e => {
                        t({
                            interactionType: E.AtomicReactorInteractionTypes.ReplySubmit,
                            emoji: null,
                            reply: e
                        })
                    },
                    children: (0, l.jsx)(o.Tooltip, {
                        text: C.default.Messages.MESSAGE_ACTION_REPLY,
                        children: e => (0, l.jsx)("button", {
                            ...e,
                            className: s(S.reaction, S.emojiButton),
                            onClick: () => {
                                t({
                                    interactionType: E.AtomicReactorInteractionTypes.ReplyBegin,
                                    emoji: null,
                                    reply: null
                                }), N(!0)
                            },
                            children: (0, l.jsx)(r.ArrowAngleLeftUpIcon, {})
                        })
                    })
                })]
            })
        })
    }
}