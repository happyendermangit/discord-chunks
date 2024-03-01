function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    }), n("222007");
    var l = n("884691"),
        i = n("721698"),
        a = n("718517"),
        s = n("482626");

    function r(e) {
        let {
            sectionId: t,
            commandsByActiveSection: n
        } = e, [r, o] = l.useState(s.CommandListSortOrder.ALPHABETICAL), u = l.useMemo(() => {
            var e, l;
            return null !== (l = null === (e = n.find(e => e.section.id === t)) || void 0 === e ? void 0 : e.data) && void 0 !== l ? l : []
        }, [n, t]), {
            popularSortedCommands: d,
            canSort: c
        } = function(e) {
            let {
                alphabeticalSortedCommands: t
            } = e;
            return l.useMemo(() => {
                if (t.length <= 1) return {
                    popularSortedCommands: t,
                    canSort: !1
                };
                let e = !1,
                    n = t.map((t, n) => (e = e || null != t.global_popularity_rank, {
                        command: t,
                        alphabeticalSortIndex: n
                    }));
                return e ? (n.sort((e, t) => {
                    let n = e.command.global_popularity_rank,
                        l = t.command.global_popularity_rank;
                    if (null != n && null != l) {
                        if (n !== l) return n - l
                    } else if (null != n) return -1;
                    else if (null != l) return 1;
                    return e.alphabeticalSortIndex - t.alphabeticalSortIndex
                }), {
                    popularSortedCommands: n.map(e => {
                        let {
                            command: t
                        } = e;
                        return t
                    }),
                    canSort: !0
                }) : {
                    popularSortedCommands: t,
                    canSort: !1
                }
            }, [t])
        }({
            alphabeticalSortedCommands: u
        });
        l.useEffect(() => {
            i.getApplication(t, {
                dontRefetchMs: a.default.Millis.DAY
            })
        }, [t]), l.useEffect(() => {
            c && o(s.CommandListSortOrder.POPULAR)
        }, [c]);
        let f = u;
        switch (r) {
            case s.CommandListSortOrder.POPULAR:
                f = d;
                break;
            case s.CommandListSortOrder.ALPHABETICAL:
                f = u
        }
        return {
            sortOrder: r,
            setSortOrder: o,
            commands: f,
            canSort: c
        }
    }
}