function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        GUEST_INVITE_KEY: function() {
            return T
        },
        default: function() {
            return S
        }
    }), E("222007");
    var t = E("444095"),
        o = E("913144"),
        n = E("970728"),
        r = E("689988"),
        a = E("271938"),
        i = E("773336"),
        I = E("49111");
    let T = "guestInviteToAccept";
    class s extends r.default {
        constructor(...e) {
            super(...e), this.actions = {
                POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
            }, this.handleConnectionOpen = async () => {
                if ((0, i.isWeb)()) {
                    let e = t.default.get(T);
                    if (null != e && "string" == typeof e && a.default.isAuthenticated()) {
                        let {
                            invite: _
                        } = await n.default.resolveInvite(e, "Desktop Modal");
                        null != _ && (o.default.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: _,
                            code: e,
                            context: I.AppContext.APP
                        }), t.default.remove(T))
                    }
                }
            }
        }
    }
    var S = new s
}