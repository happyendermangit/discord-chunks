function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("70102");
    var r = n("386242"),
        a = n("559610"),
        o = n("567703"),
        i = n("475319");

    function s(e, t, n) {
        (0, a.default)(2, arguments);
        var s, u, l, c, d, f, p, h, m = (0, i.getDefaultOptions)(),
            y = (0, o.default)(null !== (s = null !== (u = null !== (l = null !== (c = null == n ? void 0 : n.weekStartsOn) && void 0 !== c ? c : null == n ? void 0 : null === (d = n.locale) || void 0 === d ? void 0 : null === (f = d.options) || void 0 === f ? void 0 : f.weekStartsOn) && void 0 !== l ? l : m.weekStartsOn) && void 0 !== u ? u : null === (p = m.locale) || void 0 === p ? void 0 : null === (h = p.options) || void 0 === h ? void 0 : h.weekStartsOn) && void 0 !== s ? s : 0);
        if (!(y >= 0 && y <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
        var _ = (0, r.default)(e),
            g = (0, o.default)(t),
            v = _.getUTCDay();
        return _.setUTCDate(_.getUTCDate() + (((g % 7 + 7) % 7 < y ? 7 : 0) + g - v)), _
    }
}