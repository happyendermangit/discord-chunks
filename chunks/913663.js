function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a = n("445346"),
        o = n("570140"),
        l = n("703558");
    let u = {},
        d = {};
    class _ extends a.Store {
        getStickerPreview(e, t) {
            return (t === l.DraftType.FirstThreadMessage ? d : u)[e]
        }
    }
    s = "StickerMessagePreviewStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s;
    let c = new _(o.default, {
        ADD_STICKER_PREVIEW: function(e) {
            let {
                channelId: t,
                sticker: n,
                draftType: i
            } = e;
            (i === l.DraftType.FirstThreadMessage ? d : u)[t] = [n]
        },
        CLEAR_STICKER_PREVIEW: function(e) {
            let {
                channelId: t,
                draftType: n
            } = e, i = n === l.DraftType.FirstThreadMessage ? d : u;
            null != i[t] && delete i[t]
        },
        LOGOUT: function() {
            u = {}, d = {}
        }
    });
    t.default = c
}