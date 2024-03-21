function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Avatar: function() {
            return N
        },
        AnimatedAvatar: function() {
            return O
        }
    }), n("70102"), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("146606"),
        l = n("227645"),
        u = n("709749"),
        d = n("391010"),
        c = n("414055"),
        _ = n("587974"),
        f = n("158998"),
        E = n("52904"),
        h = n("49111"),
        g = n("573135"),
        m = n("782340"),
        p = n("579910");
    let S = {
        tension: 1200,
        friction: 70
    };

    function T(e) {
        let {
            size: t,
            isMobile: n,
            isTyping: s,
            ...r
        } = e, a = (0, E.getAvatarSpecs)(t), o = a.status * (n && !s ? E.MOBILE_HEIGHT_RATIO : 1), l = a.status * (s ? E.TYPING_WIDTH_RATIO : 1), u = s ? (a.status * E.TYPING_WIDTH_RATIO - a.status) / 2 : 0, d = a.size - a.status - u - a.offset, c = a.size - o - a.offset;
        return (0, i.jsx)("rect", {
            x: d,
            y: c,
            width: l,
            height: o,
            fill: "transparent",
            "aria-hidden": !0,
            ...r
        })
    }

    function v(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = (0, d.getStatusSize)(e.status, t, n, i),
            r = (i ? e.size - (s.width / 2 + e.status / 2) : e.size - s.width) - e.offset;
        return {
            ...s,
            x: r,
            y: e.size - s.height - e.offset
        }
    }

    function I(e, t, n, s) {
        let r = v(n, s, t, !1),
            a = (0, d.getStatusBackdropOpacity)(s, e);
        if (!t) {
            let t = r.height / 2 + n.stroke,
                s = r.x + n.status / 2;
            return (0, i.jsx)("circle", {
                style: {
                    opacity: a
                },
                fill: e,
                r: t,
                cx: s,
                cy: s
            })
        }
        let o = r.height + 2 * n.stroke,
            l = r.width + 2 * n.stroke,
            u = r.x - n.stroke,
            c = r.y - n.stroke;
        return (0, i.jsx)("rect", {
            fill: e,
            height: o,
            width: l,
            style: {
                opacity: a
            },
            x: u,
            y: c,
            rx: n.stroke
        })
    }

    function A(e) {
        let {
            status: t,
            isMobile: n,
            isTyping: i,
            size: s
        } = e, r = n && !i && t === h.StatusTypes.ONLINE, a = (0, E.getAvatarSpecs)(s);
        return {
            ... function(e, t, n) {
                let {
                    size: i,
                    status: s,
                    stroke: r,
                    offset: a
                } = e, o = n ? s * E.TYPING_WIDTH_RATIO : s, l = t ? s * E.MOBILE_HEIGHT_RATIO : s;
                return {
                    avatarCutoutX: i - o + (o - s) / 2 - r - a,
                    avatarCutoutY: i - l - r - a,
                    avatarCutoutWidth: o + 2 * r,
                    avatarCutoutHeight: l + 2 * r,
                    avatarCutoutRadius: t ? (l + 2 * r) * E.CUTOUT_BORDER_RADIUS : (s + 2 * r) / 2
                }
            }(a, r, i),
            ...(0, d.getStatusValues)({
                status: t,
                size: a.status,
                isMobile: r,
                isTyping: i,
                topOffset: 2,
                leftOffset: 6
            })
        }
    }

    function C(e) {
        let {
            children: t,
            size: n,
            onClick: s,
            onMouseDown: r,
            onKeyDown: o,
            onContextMenu: u,
            onMouseEnter: d,
            onMouseLeave: c,
            className: h,
            tabIndex: S,
            ariaLabel: T,
            ariaHidden: v,
            status: I,
            isMobile: A = !1,
            isTyping: C = !1,
            avatarDecoration: y,
            typingOffset: N,
            specs: R
        } = e, O = {
            width: (0, E.getAvatarSize)(n),
            height: (0, E.getAvatarSize)(n)
        }, D = null == T || v ? void 0 : function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return null != t ? m.default.Messages.LABEL_WITH_ONLINE_STATUS.format({
                label: e,
                status: (0, f.humanizeStatus)(t, n)
            }) : e
        }(T, I, A), P = R.size * g.DECORATION_TO_AVATAR_RATIO, L = function(e, t, n, i) {
            if (null == e) return null;
            if (i) switch (t) {
                case E.AvatarSizes.SIZE_16:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_16;
                case E.AvatarSizes.SIZE_20:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_20;
                case E.AvatarSizes.SIZE_24:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_24;
                case E.AvatarSizes.SIZE_32:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_32;
                case E.AvatarSizes.SIZE_40:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_40;
                case E.AvatarSizes.SIZE_56:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_56;
                case E.AvatarSizes.SIZE_80:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_80;
                case E.AvatarSizes.SIZE_120:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_TYPING_120
            }
            if (n) switch (t) {
                case E.AvatarSizes.SIZE_16:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_16;
                case E.AvatarSizes.SIZE_20:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_20;
                case E.AvatarSizes.SIZE_24:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_24;
                case E.AvatarSizes.SIZE_32:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_32;
                case E.AvatarSizes.SIZE_40:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_40;
                case E.AvatarSizes.SIZE_56:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_56;
                case E.AvatarSizes.SIZE_80:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_80;
                case E.AvatarSizes.SIZE_120:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_MOBILE_120
            }
            switch (t) {
                case E.AvatarSizes.SIZE_16:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_16;
                case E.AvatarSizes.SIZE_20:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_20;
                case E.AvatarSizes.SIZE_24:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_24;
                case E.AvatarSizes.SIZE_32:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_32;
                case E.AvatarSizes.SIZE_40:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_40;
                case E.AvatarSizes.SIZE_56:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_56;
                case E.AvatarSizes.SIZE_80:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_80;
                case E.AvatarSizes.SIZE_120:
                    return _.MaskIDs.AVATAR_DECORATION_STATUS_ROUND_120
            }
            return null
        }(I, n, A, C), M = null != y && (0, i.jsx)("svg", {
            width: P + N,
            height: P,
            viewBox: "0 0 ".concat(P + N, " ").concat(P),
            className: p.avatarDecoration,
            "aria-hidden": !0,
            children: (0, i.jsx)("foreignObject", {
                x: 0,
                y: 0,
                width: P,
                height: P,
                mask: null != L ? "url(#".concat(L, ")") : void 0,
                children: (0, i.jsx)("div", {
                    className: p.avatarStack,
                    children: (0, i.jsx)("img", {
                        className: p.avatar,
                        src: y,
                        alt: " ",
                        "aria-hidden": !0
                    })
                })
            })
        });
        return null != s || null != r ? (0, i.jsxs)(l.Clickable, {
            className: a(p.wrapper, p.pointer, h),
            style: O,
            onClick: s,
            tabIndex: S,
            onContextMenu: u,
            onMouseDown: r,
            onKeyDown: o,
            onMouseEnter: null != d ? d : void 0,
            onMouseLeave: null != c ? c : void 0,
            "aria-label": D,
            "aria-hidden": v,
            children: [t, M]
        }) : (0, i.jsxs)("div", {
            className: a(p.wrapper, h),
            style: O,
            onContextMenu: null != u ? u : void 0,
            onMouseEnter: null != d ? d : void 0,
            onMouseLeave: null != c ? c : void 0,
            role: "img",
            "aria-label": D,
            "aria-hidden": v,
            children: [t, M]
        })
    }

    function y(e) {
        let {
            src: t,
            isSpeaking: n
        } = e;
        return (0, i.jsxs)("div", {
            className: p.avatarStack,
            children: [(0, i.jsx)("img", {
                src: null != t ? t : void 0,
                alt: " ",
                className: p.avatar,
                "aria-hidden": !0
            }), n && (0, i.jsx)("div", {
                className: p.avatarSpeaking
            })]
        })
    }

    function N(e) {
        let {
            src: t,
            status: n,
            size: s,
            statusColor: r,
            isMobile: o = !1,
            isTyping: l = !1,
            typingIndicatorRef: g,
            isSpeaking: m = !1,
            statusTooltip: S = !1,
            statusBackdropColor: T,
            "aria-hidden": A = !1,
            "aria-label": N
        } = e, R = n !== h.StatusTypes.UNKNOWN ? n : null, O = (0, E.getAvatarSpecs)(s), D = null != R ? Math.ceil((O.status * E.TYPING_WIDTH_RATIO - O.status) / 2) : 0, P = O.size + D, L = (0, d.useStatusFillColor)(R, r);
        return (0, i.jsx)(C, {
            ...e,
            ariaLabel: N,
            ariaHidden: A,
            status: R,
            specs: O,
            typingOffset: D,
            children: (0, i.jsxs)("svg", {
                width: P,
                height: P,
                viewBox: "0 0 ".concat(P, " ").concat(P),
                className: a(p.mask, p.svg),
                "aria-hidden": !0,
                children: [(0, i.jsx)("foreignObject", {
                    x: 0,
                    y: 0,
                    width: O.size,
                    height: O.size,
                    mask: "url(#".concat(function(e, t, n, i) {
                        if (null == e) return _.MaskIDs.AVATAR_DEFAULT;
                        if (i) switch (t) {
                            case E.AvatarSizes.SIZE_16:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_16;
                            case E.AvatarSizes.SIZE_20:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_20;
                            case E.AvatarSizes.SIZE_24:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_24;
                            case E.AvatarSizes.SIZE_32:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_32;
                            case E.AvatarSizes.SIZE_40:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_40;
                            case E.AvatarSizes.SIZE_48:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_48;
                            case E.AvatarSizes.SIZE_56:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_56;
                            case E.AvatarSizes.SIZE_80:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_80;
                            case E.AvatarSizes.SIZE_120:
                                return _.MaskIDs.AVATAR_STATUS_TYPING_120
                        }
                        if (e === h.StatusTypes.ONLINE && n) switch (t) {
                            case E.AvatarSizes.SIZE_16:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_16;
                            case E.AvatarSizes.SIZE_20:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_20;
                            case E.AvatarSizes.SIZE_24:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_24;
                            case E.AvatarSizes.SIZE_32:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_32;
                            case E.AvatarSizes.SIZE_40:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_40;
                            case E.AvatarSizes.SIZE_48:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_48;
                            case E.AvatarSizes.SIZE_56:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_56;
                            case E.AvatarSizes.SIZE_80:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_80;
                            case E.AvatarSizes.SIZE_120:
                                return _.MaskIDs.AVATAR_STATUS_MOBILE_120
                        }
                        switch (t) {
                            case E.AvatarSizes.SIZE_16:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_16;
                            case E.AvatarSizes.SIZE_20:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_20;
                            case E.AvatarSizes.SIZE_24:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_24;
                            case E.AvatarSizes.SIZE_32:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_32;
                            case E.AvatarSizes.SIZE_40:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_40;
                            case E.AvatarSizes.SIZE_48:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_48;
                            case E.AvatarSizes.SIZE_56:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_56;
                            case E.AvatarSizes.SIZE_80:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_80;
                            case E.AvatarSizes.SIZE_120:
                                return _.MaskIDs.AVATAR_STATUS_ROUND_120
                        }
                        throw Error("getMaskId(): Unsupported type, size: ".concat(t, ", status: ").concat(e, ", isMobile: ").concat(n ? "true" : "false"))
                    }(R, s, o, l), ")"),
                    children: (0, i.jsx)(y, {
                        src: t,
                        isSpeaking: m
                    })
                }), null != R ? (0, i.jsx)(c.Tooltip, {
                    text: S ? (0, f.humanizeStatus)(R) : null,
                    "aria-label": !1,
                    position: "top",
                    spacing: 5 + 1.5 * O.stroke,
                    children: e => (0, i.jsxs)(i.Fragment, {
                        children: [null != T && I(T, o, O, R), (0, i.jsx)("rect", {
                            ...e,
                            ...v(O, R, o, l),
                            fill: L,
                            mask: "url(#".concat((0, d.getStatusMask)(R, o, l), ")"),
                            className: p.pointerEvents
                        }), l ? (0, i.jsx)(u.Dots, {
                            ref: g,
                            dotRadius: O.status / 4,
                            x: O.size - 1.375 * O.status - O.offset,
                            y: O.size - O.status / 1.333 - O.offset
                        }) : null]
                    })
                }) : null]
            })
        })
    }

    function R(e) {
        let {
            fromIsMobile: t = !0,
            fromStatus: n,
            fromColor: r,
            isMobile: l = !1,
            isTyping: _ = !1,
            typingIndicatorRef: h,
            isSpeaking: g = !1,
            size: m,
            src: v,
            status: N,
            statusColor: R,
            statusTooltip: O = !1,
            statusBackdropColor: D,
            "aria-hidden": P = !1,
            "aria-label": L
        } = e, M = (0, d.useStatusFillColor)(N, R), b = s.useId(), U = s.useId(), [w] = s.useState(() => ({
            fill: r,
            ...A({
                size: m,
                status: n,
                isMobile: t,
                isTyping: !1
            })
        })), k = s.useMemo(() => ({
            fill: M,
            ...A({
                size: m,
                status: N,
                isMobile: l,
                isTyping: _
            })
        }), [M, m, N, l, _]), {
            avatarCutoutX: V,
            avatarCutoutY: G,
            avatarCutoutWidth: F,
            avatarCutoutHeight: x,
            avatarCutoutRadius: B,
            fill: H,
            ...Y
        } = (0, o.useSpring)({
            immediate: !document.hasFocus(),
            config: S,
            from: w,
            to: k
        }), K = (0, E.getAvatarSize)(m), j = (0, E.getAvatarSpecs)(m), W = j.status * E.TYPING_WIDTH_RATIO, z = j.status * E.MOBILE_HEIGHT_RATIO, q = null != N ? (j.status * E.TYPING_WIDTH_RATIO - j.status) / 2 : 0, X = j.size - j.status - q - j.offset, Q = j.size - z - j.offset, Z = j.size + Math.ceil(q);
        return (0, i.jsx)(C, {
            ...e,
            ariaLabel: L,
            ariaHidden: P,
            typingOffset: q,
            specs: j,
            children: (0, i.jsxs)("svg", {
                width: Z,
                height: Z,
                viewBox: "0 0 ".concat(Z, " ").concat(Z),
                className: a(p.mask, p.svg),
                "aria-hidden": !0,
                children: [(0, i.jsxs)("mask", {
                    id: b,
                    width: K,
                    height: K,
                    children: [(0, i.jsx)("circle", {
                        cx: K / 2,
                        cy: K / 2,
                        r: K / 2,
                        fill: "white"
                    }), (0, i.jsx)(o.animated.rect, {
                        color: "black",
                        x: V,
                        y: G,
                        width: F,
                        height: x,
                        rx: B,
                        ry: B
                    })]
                }), (0, i.jsx)("foreignObject", {
                    className: p.foreignObject,
                    x: 0,
                    y: 0,
                    width: K,
                    height: K,
                    mask: "url(#".concat(b, ")"),
                    children: (0, i.jsx)(y, {
                        src: v,
                        isSpeaking: g
                    })
                }), (0, i.jsx)(c.Tooltip, {
                    text: O ? (0, f.humanizeStatus)(N) : null,
                    "aria-label": !1,
                    position: "top",
                    spacing: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        return 5 - (n && !i ? 0 : .5 * e) + 1.5 * t
                    }(j.status, j.stroke, l, _),
                    children: e => (0, i.jsxs)(i.Fragment, {
                        children: [null != D && I(D, l, j, N), (0, i.jsxs)("svg", {
                            x: X,
                            y: Q,
                            width: W,
                            height: z,
                            viewBox: "0 0 ".concat(W, " ").concat(z),
                            className: O ? p.cursorDefault : void 0,
                            children: [(0, d.renderStatusMask)(Y, j.status, U), (0, i.jsx)(o.animated.rect, {
                                fill: H,
                                width: W,
                                height: z,
                                mask: "url(#".concat(U, ")")
                            }), (0, i.jsx)(u.Dots, {
                                ref: h,
                                dotRadius: j.status / 4,
                                x: .15 * W,
                                y: .5 * z,
                                hide: !_
                            })]
                        }), (0, i.jsx)(T, {
                            size: m,
                            isMobile: l,
                            isTyping: _,
                            className: p.pointerEvents,
                            ...e
                        })]
                    })
                })]
            })
        })
    }
    let O = s.memo(function(e) {
        var t, n, r, a, o;
        let {
            statusColor: l,
            status: u,
            ...c
        } = e, {
            isMobile: _ = !1,
            isTyping: f = !1
        } = c, E = s.useRef(u), g = s.useRef(_), m = (0, d.useStatusFillColor)(u, l), p = s.useRef(m), S = s.useRef(!1);
        let T = S.current || (t = f, n = u, r = E.current, a = _, o = g.current, null != r && null != n && (!!t || n !== r || n === h.StatusTypes.ONLINE && a !== o || !1));
        return s.useLayoutEffect(() => {
            S.current = T, E.current = u, g.current = _, p.current = m
        }, [u, _, m, T]), null != u && null != E.current && T ? (0, i.jsx)(R, {
            ...c,
            status: u,
            statusColor: m,
            fromStatus: E.current,
            fromIsMobile: g.current,
            fromColor: p.current
        }) : (0, i.jsx)(N, {
            ...c,
            status: u,
            statusColor: m
        })
    })
}