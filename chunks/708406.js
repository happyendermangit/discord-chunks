function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        calculateAnalyticsMetadata: function() {
            return r
        }
    });
    var i = n("981631");

    function r(e, t, n) {
        let r = null != t ? {
                [t]: 1
            } : {},
            {
                offset: s,
                limit: a,
                results: o,
                totalResults: l
            } = null != n ? n : {};
        return {
            search_type: i.SearchTypes.GIF,
            load_id: e,
            limit: a,
            offset: s,
            page: null != a && null != s ? Math.floor(s / a) + 1 : 1,
            total_results: l,
            page_results: null != o ? o.length : null,
            num_modifiers: Object.keys(r).length,
            modifiers: r
        }
    }
}