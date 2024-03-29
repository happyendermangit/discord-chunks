function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        overrideBucket: function() {
            return u
        },
        registerGuildExperiment: function() {
            return l
        },
        registerUserExperiment: function() {
            return o
        },
        trackExposureToExperiment: function() {
            return a
        }
    });
    var i = n("570140"),
        r = n("353926"),
        s = n("987338");

    function a(e, t, n) {
        var i, s;
        r.default.trackExposure({
            experimentId: e,
            descriptor: t,
            location: null == n ? void 0 : n.location,
            location_stack: null == n ? void 0 : n.analyticsLocations,
            fingerprint: null == n ? void 0 : n.fingerprint,
            excluded: null == n ? void 0 : n.excluded,
            exposureType: null == n ? void 0 : n.exposureType
        })
    }

    function o(e) {
        let {
            id: t,
            title: n,
            description: i,
            buckets: a
        } = e;
        return (0, r.registerExperiment)({
            experimentId: t,
            experimentType: s.ExperimentTypes.USER,
            title: n,
            description: i,
            buckets: a
        }), {
            id: t
        }
    }

    function l(e) {
        let {
            id: t,
            title: n,
            description: i,
            buckets: a
        } = e;
        return (0, r.registerExperiment)({
            experimentId: t,
            experimentType: s.ExperimentTypes.GUILD,
            title: n,
            description: i,
            buckets: a
        }), {
            id: t
        }
    }

    function u(e, t) {
        i.default.dispatch({
            type: "EXPERIMENT_OVERRIDE_BUCKET",
            experimentId: e,
            experimentBucket: t
        })
    }
}