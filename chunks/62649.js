function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return a
        }
    }), E("222007");
    var t = E("689988"),
        o = E("42203"),
        n = E("612278"),
        r = E("724210");
    class i extends t.default {
        handleChannelPreload(e) {
            let {
                channelId: _
            } = e;
            if ((0, r.isStaticChannelRoute)(_)) return;
            let E = o.default.getChannel(_);
            null != E && E.isForumLikeChannel() && (0, n.preloadForumThreads)(E)
        }
        constructor(...e) {
            super(...e), this.actions = {
                CHANNEL_PRELOAD: this.handleChannelPreload
            }
        }
    }
    var a = new i
}