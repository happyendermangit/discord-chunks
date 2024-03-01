function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmbedIFrameWithLoadingBackground: function() {
            return S
        }
    }), n("222007"), n("313619"), n("654714"), n("287168"), n("956660");
    var a = n("37983"),
        l = n("884691"),
        i = n("414456"),
        o = n.n(i),
        r = n("841076"),
        s = n("748820"),
        d = n("446674"),
        u = n("292687"),
        c = n("614818"),
        p = n("161778"),
        f = n("659500"),
        m = n("157945"),
        h = n("828466"),
        v = n("954016"),
        I = n("49111"),
        P = n("406796");

    function C(e) {
        let {
            url: t,
            className: n,
            style: i,
            onLoad: o,
            shouldRefocus: P,
            queryParams: C,
            allowPopups: S = !1,
            referrerPolicy: g = "origin"
        } = e, y = (0, d.useStateFromStores)([u.default], () => u.default.getWindow(I.PopoutWindowKeys.CHANNEL_CALL_POPOUT)), E = (0, r.useMemoOne)(() => (0, s.v4)(), [t]), T = l.useRef(null), A = (0, m.default)(T, P, null == y ? window : y), x = {
            ...C,
            frame_id: E,
            platform: v.ActivityPlatform.DESKTOP
        }, [N, M] = l.useState(!1), j = p.default.theme, _ = {
            ...i
        };
        return j === I.ThemeTypes.LIGHT ? _.colorScheme = "light" : _.colorScheme = "dark", l.useEffect(() => (f.ComponentDispatch.dispatch(I.ComponentActions.IFRAME_MOUNT, {
            id: E
        }), () => {
            f.ComponentDispatch.dispatch(I.ComponentActions.IFRAME_UNMOUNT, {
                id: E
            })
        }), [E]), f.ComponentDispatch.subscribe(I.ComponentActions.MANUAL_IFRAME_RESIZING, e => {
            let {
                resizing: t
            } = e;
            M(t)
        }), N && (_.pointerEvents = "none"), null != t ? (0, a.jsx)("iframe", {
            style: _,
            allow: "autoplay; encrypted-media",
            referrerPolicy: g,
            onLoad: function(e) {
                var n;
                null == o || o(e.target), T.current = e.target, A(!0), null === (n = e.target.contentWindow) || void 0 === n || n.postMessage([c.default.HELLO, x], null != t ? t : "")
            },
            sandbox: (0, h.default)({
                allowPopups: S
            }),
            className: n,
            src: "".concat(t, "?").concat(new URLSearchParams(x))
        }) : null
    }

    function S(e) {
        let {
            onLoad: t
        } = e, [n, i] = l.useState(!1), r = l.useCallback(e => {
            i(!0), null == t || t(e)
        }, [t]);
        return (0, a.jsxs)("div", {
            className: P.fillParent,
            children: [!n && (0, a.jsx)("div", {
                className: o(P.fillParent, P.iframePlaceholder)
            }), (0, a.jsx)("div", {
                className: o(P.fillParent, n ? void 0 : P.hiddenIframeContainer),
                children: (0, a.jsx)(C, {
                    ...e,
                    onLoad: r
                })
            })]
        })
    }
}