function(e, _, E) {
    var t, o, n, r, a, i, I;
    E("424973"), E("70102"), t = E.g, o = Date.now ? Date.now() : +new Date, n = t.performance || {}, r = [], a = {}, i = function(e, _) {
        for (var E = 0, t = r.length, o = []; E < t; E++) r[E][e] == _ && o.push(r[E]);
        return o
    }, I = function(e, _) {
        for (var E, t = r.length; t--;)(E = r[t]).entryType == e && (void 0 === _ || E.name == _) && r.splice(t, 1)
    }, n.now || (n.now = n.webkitNow || n.mozNow || n.msNow || function() {
        return (Date.now ? Date.now() : +new Date) - o
    }), n.mark || (n.mark = n.webkitMark || function(e) {
        var _ = {
            name: e,
            entryType: "mark",
            startTime: n.now(),
            duration: 0
        };
        r.push(_), a[e] = _
    }), n.measure || (n.measure = n.webkitMeasure || function(e, _, E) {
        var t, o;
        if (void 0 !== E && void 0 === a[E]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + E + "' does not exist.");
        if (void 0 !== _ && void 0 === a[_]) throw SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + _ + "' does not exist.");
        t = a[_] ? a[_].startTime : 0, o = a[E] ? a[E].startTime : n.now(), r.push({
            name: e,
            entryType: "measure",
            startTime: t,
            duration: o - t
        })
    }), n.getEntriesByType || (n.getEntriesByType = n.webkitGetEntriesByType || function(e) {
        return i("entryType", e)
    }), n.getEntriesByName || (n.getEntriesByName = n.webkitGetEntriesByName || function(e) {
        return i("name", e)
    }), n.clearMarks || (n.clearMarks = n.webkitClearMarks || function(e) {
        I("mark", e)
    }), n.clearMeasures || (n.clearMeasures = n.webkitClearMeasures || function(e) {
        I("measure", e)
    }), t.performance = n, "function" == typeof define && (define.amd || define.ajs) && define("performance", [], function() {
        return n
    })
}