function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("442837"),
        l = n("481060"),
        u = n("232567"),
        d = n("79712"),
        _ = n("478758"),
        c = n("594174"),
        E = n("621853"),
        I = n("689938"),
        T = n("735619");
    t.default = r.memo(function(e) {
        var t, n;
        let {
            user: s,
            isLastSection: f
        } = e, S = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()), h = (0, o.useStateFromStores)([E.default], () => E.default.getMutualFriends(s.id));
        r.useEffect(() => {
            null == h && (0, u.fetchMutualFriends)(s.id)
        }, [h, s.id]);
        let A = r.useMemo(() => {
                var e;
                return null !== (e = null == h ? void 0 : h.slice(0, 3).map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                })) && void 0 !== e ? e : []
            }, [h]),
            m = (0, o.useStateFromStores)([E.default], () => E.default.getMutualGuilds(s.id)),
            [N, O] = (0, o.useStateFromStoresArray)([E.default], () => [E.default.isFetchingFriends(s.id), E.default.isFetchingProfile(s.id)]);
        return s.id === (null == S ? void 0 : S.id) || (null == h ? void 0 : h.length) === 0 && (null == m ? void 0 : m.length) === 0 ? null : N || O ? (0, i.jsx)("div", {
            className: a()(T.spinnerContainer),
            children: (0, i.jsx)(l.Spinner, {
                className: T.spinner
            })
        }) : (0, i.jsxs)("div", {
            className: a()(T.container, f ? T.bottomPadding : null),
            children: [(0, i.jsx)(_.default, {
                partySize: {
                    knownSize: A.length,
                    totalSize: Math.min(A.length, 3)
                },
                maxAvatarsShown: 3,
                members: A
            }), (0, i.jsx)(l.Text, {
                className: (null == h ? void 0 : h.length) === 0 ? void 0 : T.mutualFriendsText,
                variant: "text-xs/normal",
                children: I.default.Messages.MUTUAL_FRIENDS_COUNT.format({
                    count: "".concat(null !== (t = null == h ? void 0 : h.length) && void 0 !== t ? t : 0)
                })
            }), (0, i.jsx)(d.default, {
                height: 4,
                width: 4,
                "aria-hidden": "true",
                className: T.dotSpacer
            }), (0, i.jsx)(l.Text, {
                variant: "text-xs/normal",
                children: I.default.Messages.MUTUAL_GUILDS_COUNT.format({
                    count: "".concat(null !== (n = null == m ? void 0 : m.length) && void 0 !== n ? n : 0)
                })
            })]
        })
    })
}