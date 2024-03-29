function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        deletePrivateChannelIntegration: function() {
            return d
        },
        fetchApplicationsShelf: function() {
            return l
        },
        fetchPrivateChannelIntegrations: function() {
            return u
        }
    }), n("411104"), n("729594");
    var i = n("261470"),
        r = n("544891"),
        s = n("570140");
    n("591759");
    var a = n("628566"),
        o = n("981631");
    n("231338"), n("689938");

    function l() {
        a.default.getApplicationsShelfFetchState() === a.FetchState.NOT_FETCHED && (s.default.dispatch({
            type: "APPLICATIONS_SHELF_FETCH_START"
        }), r.HTTP.get(o.Endpoints.APPLICATIONS_SHELF).then(e => s.default.dispatch({
            type: "APPLICATIONS_SHELF_FETCH_SUCCESS",
            applications: e.body.applications
        })).catch(e => s.default.dispatch({
            type: "APPLICATIONS_SHELF_FETCH_FAIL"
        })))
    }

    function u(e) {
        let t = new i.default(1e3, 5e3);
        s.default.dispatch({
            type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_START",
            channelId: e
        }), r.HTTP.get({
            url: o.Endpoints.CHANNEL_INTEGRATIONS(e),
            backoff: t,
            retries: 10
        }).then(t => {
            s.default.dispatch({
                type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_SUCCESS",
                channelId: e,
                integrations: t.body
            })
        }).catch(() => {
            s.default.dispatch({
                type: "FETCH_PRIVATE_CHANNEL_INTEGRATIONS_FAIL",
                channelId: e
            })
        })
    }

    function d(e, t) {
        return r.HTTP.del(o.Endpoints.CHANNEL_INTEGRATION(e, t)).then(e => {
            var t;
            if (null === (t = e.body) || void 0 === t ? void 0 : t.message) throw Error(e.body.message)
        })
    }
}