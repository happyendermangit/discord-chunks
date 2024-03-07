function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("798609"),
        u = n("240249"),
        d = n("776007"),
        c = n("810567"),
        f = n("113713"),
        m = n("968918"),
        p = n("317041"),
        h = n("627862");

    function E(e) {
        var t, n;
        let {
            channel: a,
            isAppDetailPresent: E
        } = e, [g, S] = i.useState(""), C = i.useCallback(() => S(""), [S]), {
            commandsByActiveSection: T,
            sectionDescriptors: v,
            filterSection: I
        } = u.useDiscovery(a, {
            commandType: o.ApplicationCommandType.CHAT
        }, {
            placeholderCount: 0,
            limit: p.DISCOVERY_COMMANDS_QUERY_LIMIT,
            includeFrecency: !0
        });
        i.useEffect(() => {
            I(p.BuiltInSectionId.FRECENCY)
        }, [I]);
        let _ = null !== (n = null === (t = T[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
            N = v.filter(e => e.id !== p.BuiltInSectionId.FRECENCY && e.id !== p.BuiltInSectionId.BUILT_IN),
            A = (0, d.useSortApplicationsViaFrecency)(N);
        return (0, l.jsxs)("div", {
            className: s(h.container, {
                [h.appDetailVisible]: E
            }),
            children: [(0, l.jsx)("div", {
                className: h.searchBarContainer,
                children: (0, l.jsx)(c.default, {
                    placeholder: "Search Apps & Commands",
                    onChange: S,
                    query: g,
                    onClear: C,
                    size: c.default.Sizes.MEDIUM
                })
            }), (0, l.jsxs)(r.Scroller, {
                className: h.scrollableContent,
                fade: !0,
                children: [(0, l.jsx)(f.default, {
                    channel: a,
                    commands: _,
                    sectionDescriptors: v
                }), (0, l.jsx)(m.default, {
                    channel: a,
                    applications: A
                })]
            })]
        })
    }
}