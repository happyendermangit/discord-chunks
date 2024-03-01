function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FetchState: function() {
            return i
        },
        default: function() {
            return m
        }
    });
    var l, i, a = n("693566"),
        s = n.n(a),
        r = n("446674"),
        o = n("913144");

    function u(e) {
        let {
            query: t,
            guildId: n,
            page: l,
            categoryId: i
        } = e;
        return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(l, " categoryId:").concat(i)
    }(l = i || (i = {}))[l.FETCHING = 0] = "FETCHING", l[l.FETCHED = 1] = "FETCHED", l[l.ERROR = 2] = "ERROR";
    let d = new s({
            max: 20
        }),
        c = {};
    class f extends r.default.Store {
        getSearchResults(e) {
            let {
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            } = e, a = u({
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            });
            return d.get(a)
        }
        getFetchState(e) {
            let {
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            } = e, a = u({
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            });
            return c[a]
        }
    }
    f.displayName = "ApplicationDirectorySearchStore";
    var m = new f(o.default, {
        APPLICATION_DIRECTORY_FETCH_SEARCH: function(e) {
            let {
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            } = e, a = u({
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            });
            c = {
                ...c,
                [a]: 0
            }
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: function(e) {
            let {
                query: t,
                guildId: n,
                page: l,
                categoryId: i,
                result: a
            } = e, s = u({
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            });
            d.set(s, {
                lastFetchTimeMs: Date.now(),
                ...a
            }), c = {
                ...c,
                [s]: 1
            }
        },
        APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: function(e) {
            let {
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            } = e, a = u({
                query: t,
                guildId: n,
                page: l,
                categoryId: i
            });
            c = {
                ...c,
                [a]: 2
            }
        }
    })
}