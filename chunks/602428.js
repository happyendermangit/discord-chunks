function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getFailedContent: function() {
            return C
        },
        InteractionStatusMessage: function() {
            return _
        },
        default: function() {
            return N
        }
    });
    var l = n("37983"),
        a = n("884691"),
        u = n("414456"),
        i = n.n(u),
        o = n("775560"),
        s = n("446674"),
        r = n("77078"),
        d = n("812684"),
        c = n("809810"),
        E = n("752598"),
        p = n("423487"),
        m = n("49111"),
        T = n("782340"),
        f = n("52544");

    function S(e) {
        return {
            text: e,
            icon: (0, l.jsx)(r.Dots, {
                className: f.icon,
                dotRadius: 3.5,
                themed: !0
            })
        }
    }

    function C(e) {
        return {
            text: null != e ? e : T.default.Messages.APPLICATION_COMMAND_FAILED,
            color: "text-danger",
            icon: (0, l.jsx)(p.default, {
                width: 16,
                height: 16,
                className: i(f.icon, f.errorIcon)
            })
        }
    }

    function _(e) {
        let {
            className: t,
            icon: n,
            text: a,
            color: u
        } = e;
        return (0, l.jsxs)("div", {
            className: i(f.wrapper, t),
            children: [n, (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: u,
                scaleFontToUserSetting: !0,
                children: a
            })]
        })
    }
    var N = a.memo(function(e) {
        let {
            message: t,
            className: n,
            component: u
        } = e, i = (0, o.useForceUpdate)(), r = (0, s.useStateFromStores)([c.default], () => c.default.getInteraction(t), [t]);
        a.useEffect(() => {
            let e = null;
            if (t.hasFlag(m.MessageFlags.LOADING) && null != r) {
                let n = (0, E.getInteractionTimeoutTimestamp)(t.id) - Date.now();
                n > 0 && (e = setTimeout(() => i(), 1e3 + n))
            }
            return () => {
                clearTimeout(e)
            }
        }, [i, r, t]);
        let p = null;
        if (null == u) p = function(e, t) {
            let n = (0, E.getInteractionStatusViewState)(t, e);
            switch (n) {
                case E.InteractionStatusViewState.SENDING:
                    return S(T.default.Messages.APPLICATION_COMMAND_SENDING);
                case E.InteractionStatusViewState.CREATED:
                    return S(T.default.Messages.APPLICATION_COMMAND_WAITING.format({
                        applicationName: t.author.username
                    }));
                case E.InteractionStatusViewState.TIMED_OUT:
                    return C(T.default.Messages.APPLICATION_COMMAND_TIMED_OUT);
                case E.InteractionStatusViewState.FAILED:
                    return C(t.interactionError)
            }
        }(r, t);
        else {
            let e = (0, d.getActionRowErrorText)(r, t, u);
            null != e && (p = C(e))
        }
        if (null == p) return null;
        let {
            text: f,
            icon: N,
            color: L
        } = p;
        return (0, l.jsx)(_, {
            icon: N,
            text: f,
            className: n,
            color: L
        })
    })
}