function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        useFavoriteGIFs: function() {
            return o
        },
        useSortedFavoriteGIFs: function() {
            return u
        },
        useIsFavoriteGIF: function() {
            return c
        }
    });
    var r = s("884691"),
        n = s("917351"),
        l = s.n(n),
        i = s("42507");
    let a = {};

    function o() {
        var e, t;
        let s = (0, i.useFrecencySettings)();
        return null !== (t = null === (e = s.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : a
    }

    function u() {
        let e = o();
        return r.useMemo(() => l(e).map((e, t) => ({
            ...e,
            url: t
        })).sortBy("order").reverse().value(), [e])
    }

    function c(e) {
        let t = o();
        return null != t[e]
    }
}