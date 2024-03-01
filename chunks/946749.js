function(e, t, n) {
    "use strict";
    let l;
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("917351"),
        a = n.n(r),
        i = n("446674"),
        u = n("95410"),
        o = n("913144"),
        s = n("49111");
    let c = "GameLibraryViewStore",
        d = s.TableSortDirections.ASCENDING,
        f = s.GameTableListKeys.LAST_PLAYED,
        p = !1,
        h = a.debounce(() => {
            p = !1, g.emitChange()
        }, 200);
    class m extends i.default.Store {
        initialize() {
            var e;
            let t = null !== (e = u.default.get(c)) && void 0 !== e ? e : {};
            null != t.sortDirection && null != t.sortKey && (d = t.sortDirection, f = t.sortKey)
        }
        get sortDirection() {
            return d
        }
        get sortKey() {
            return f
        }
        get activeRowKey() {
            return l
        }
        get isNavigatingByKeyboard() {
            return p
        }
    }
    m.displayName = "GameLibraryViewStore";
    let g = new m(o.default, {
        LIBRARY_TABLE_SORT_UPDATE: function(e) {
            let {
                direction: t,
                key: n
            } = e;
            d = t, f = n, u.default.set(c, {
                sortDirection: d,
                sortKey: f
            })
        },
        LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE: function(e) {
            let {
                key: t,
                isKeyboardEvent: n
            } = e;
            n && (p = !0, h()), l = t
        }
    });
    var E = g
}