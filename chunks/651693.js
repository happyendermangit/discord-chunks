function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        isImageFile: function() {
            return r
        },
        isAnimatedImageUrl: function() {
            return a
        },
        isVideoUrl: function() {
            return s
        },
        isVideoFile: function() {
            return T
        }
    }), E("222007");
    var t = E("773336");
    let o = (e, _) => {
            if (null == e) return !1;
            let [E, t] = e.split(/\?/, 1);
            return _.test(E)
        },
        n = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
        r = e => null != e && n.test(e),
        i = /\.(webp|gif)$/i,
        a = e => o(e, i),
        I = (0, t.isIOS)() ? /\.(mp4|mov)$/i : ((0, t.isAndroid)(), /\.(mp4|webm|mov)$/i),
        s = e => o(e, I),
        T = e => null != e && I.test(e)
}