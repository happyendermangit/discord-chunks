function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("718745"),
        a = n("981631");
    t.default = {
        search(e, t) {
            null == s.default.getResults(e, t) && (r.default.dispatch({
                type: "INTEGRATION_QUERY",
                integration: e,
                query: t
            }), i.HTTP.get({
                url: a.Endpoints.INTEGRATION_SEARCH("tenor"),
                query: {
                    q: t
                },
                oldFormErrors: !0
            }).then(n => {
                r.default.dispatch({
                    type: "INTEGRATION_QUERY_SUCCESS",
                    integration: e,
                    query: t,
                    results: n.body
                })
            }, () => r.default.dispatch({
                type: "INTEGRATION_QUERY_FAILURE",
                integration: e,
                query: t
            })))
        }
    }
}