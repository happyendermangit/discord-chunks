function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var l = n("446674"),
        i = n("913144");
    let a = [],
        s = null;
    class r extends l.default.Store {
        getLastFetchTimeMs() {
            return s
        }
        getCategories() {
            return a
        }
    }
    r.displayName = "ApplicationDirectoryCategoriesStore";
    var o = new r(i.default, {
        APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: function(e) {
            let {
                categories: t
            } = e;
            a = t, s = Date.now()
        }
    })
}