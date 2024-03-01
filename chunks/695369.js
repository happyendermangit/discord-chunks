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
        r = n("16470"),
        o = n("446674"),
        u = n("876543"),
        d = n("77078"),
        c = n("538282"),
        f = n("374363"),
        m = n("551305"),
        p = n("378765"),
        h = n("49111"),
        E = n("13030"),
        g = n("782340"),
        C = n("350583"),
        S = i.memo(i.forwardRef(function(e, t) {
            let {
                disabled: n,
                type: a
            } = e, [S, T] = i.useState(!1), v = (0, o.useStateFromStores)([f.default], () => {
                var e, t;
                return S && Object.values(null !== (t = null === (e = f.default.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
            }), [I, _, N] = (0, c.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], r.default), A = i.useRef(0), x = i.useCallback(() => {
                T(!0), clearTimeout(A.current), A.current = setTimeout(() => {
                    T(!1)
                }, 1500)
            }, []);
            i.useEffect(() => () => {
                clearTimeout(A.current)
            }), (0, p.useComponentAction)({
                event: h.ComponentActions.FAVORITE_GIF,
                handler: x
            });
            let y = i.useCallback(() => {
                    (0, c.toggleExpressionPicker)(E.ExpressionPickerViewType.GIF, a)
                }, [a]),
                {
                    Component: O,
                    events: R
                } = (0, u.useGifLottie)();
            if (n) return null;
            let M = I === E.ExpressionPickerViewType.GIF && _ === a;
            return (0, l.jsx)(d.Tooltip, {
                text: v ? g.default.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
                forceOpen: !0,
                children: e => (0, l.jsx)("div", {
                    ref: t,
                    className: s(E.CHAT_INPUT_BUTTON_CLASSNAME, C.buttonContainer),
                    ...e,
                    children: (0, l.jsx)(m.default, {
                        innerClassName: C.button,
                        onMouseEnter: R.onMouseEnter,
                        onMouseLeave: R.onMouseLeave,
                        onClick: y,
                        isActive: M,
                        pulse: S,
                        "aria-label": g.default.Messages.GIF_BUTTON_LABEL,
                        "aria-expanded": M,
                        "aria-haspopup": "dialog",
                        "aria-controls": N,
                        children: (0, l.jsx)(O, {
                            color: "currentColor"
                        })
                    })
                })
            })
        }))
}