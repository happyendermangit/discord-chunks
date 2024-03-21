function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l;
    n.r(t), n.d(t, {
        MOBILE_HEIGHT_RATIO: function() {
            return u
        },
        TYPING_WIDTH_RATIO: function() {
            return d
        },
        MOBILE_ICON_RADIUS: function() {
            return c
        },
        CUTOUT_BORDER_RADIUS: function() {
            return _
        },
        AvatarSizes: function() {
            return i
        },
        StatusBackdropColors: function() {
            return s
        },
        StatusBackdropOpacity: function() {
            return r
        },
        AvatarSizeSpecs: function() {
            return f
        },
        getAvatarSpecs: function() {
            return E
        },
        getAvatarSize: function() {
            return h
        }
    }), n("70102");
    let u = 1.5,
        d = 2.5,
        c = .125,
        _ = .2;
    (a = i || (i = {})).SIZE_16 = "SIZE_16", a.SIZE_20 = "SIZE_20", a.SIZE_24 = "SIZE_24", a.SIZE_32 = "SIZE_32", a.SIZE_40 = "SIZE_40", a.SIZE_48 = "SIZE_48", a.SIZE_56 = "SIZE_56", a.SIZE_80 = "SIZE_80", a.SIZE_120 = "SIZE_120", a.SIZE_152 = "SIZE_152", a.DEPRECATED_SIZE_30 = "DEPRECATED_SIZE_30", a.DEPRECATED_SIZE_60 = "DEPRECATED_SIZE_60", a.DEPRECATED_SIZE_100 = "DEPRECATED_SIZE_100", (o = s || (s = {})).BLACK = "black", o.WHITE = "white", (l = r || (r = {}))[l.HIGH = .7] = "HIGH", l[l.LOW = .45] = "LOW";
    let f = Object.freeze({
        SIZE_16: Object.freeze({
            size: 16,
            status: 6,
            stroke: 2,
            offset: 0
        }),
        SIZE_20: Object.freeze({
            size: 20,
            status: 6,
            stroke: 2,
            offset: 0
        }),
        SIZE_24: Object.freeze({
            size: 24,
            status: 8,
            stroke: 3,
            offset: 0
        }),
        SIZE_32: Object.freeze({
            size: 32,
            status: 10,
            stroke: 3,
            offset: 0
        }),
        SIZE_40: Object.freeze({
            size: 40,
            status: 12,
            stroke: 4,
            offset: 0
        }),
        SIZE_48: Object.freeze({
            size: 48,
            status: 12,
            stroke: 4,
            offset: 0
        }),
        SIZE_56: Object.freeze({
            size: 56,
            status: 14,
            stroke: 4,
            offset: 2
        }),
        SIZE_80: Object.freeze({
            size: 80,
            status: 16,
            stroke: 6,
            offset: 4
        }),
        SIZE_120: Object.freeze({
            size: 120,
            status: 24,
            stroke: 8,
            offset: 8
        }),
        SIZE_152: Object.freeze({
            size: 152,
            status: 30,
            stroke: 10,
            offset: 10
        }),
        DEPRECATED_SIZE_30: Object.freeze({
            size: 30,
            status: 0,
            stroke: 0,
            offset: 0
        }),
        DEPRECATED_SIZE_60: Object.freeze({
            size: 60,
            status: 0,
            stroke: 0,
            offset: 0
        }),
        DEPRECATED_SIZE_100: Object.freeze({
            size: 100,
            status: 0,
            stroke: 0,
            offset: 0
        })
    });

    function E(e) {
        return f[e]
    }

    function h(e) {
        if ("number" != typeof e) return f[e].size;
        return e
    }
}