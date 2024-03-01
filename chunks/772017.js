function(t, e, o) {
    "use strict";
    o.r(e), o.d(e, {
        default: function() {
            return E
        }
    }), o("424973");
    var n = o("995008"),
        d = o.n(n),
        r = o("913144"),
        l = o("693051"),
        i = o("153498"),
        a = o("76493"),
        s = o("91731"),
        u = o("49111"),
        E = {
            push(t, e) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d("modal"),
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : u.AppContext.APP;
                return (0, i.pushModal)({
                    key: o,
                    modal: (0, s.default)(t, {}, e, o),
                    ...n
                }), r.default.dispatch({
                    type: "MODAL_PUSH",
                    modal: t,
                    props: e,
                    key: o,
                    appContext: l
                }), o
            },
            pushLazy(t, e) {
                let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d("modal"),
                    n = arguments.length > 3 ? arguments[3] : void 0,
                    r = (0, l.getRootNavigationRef)();
                return null != r && r.isReady() ? (t instanceof Promise ? t.then(t => {
                    let {
                        default: e
                    } = t;
                    return e
                }) : t()).then(t => this.push(t, e, o, n)) : new Promise(d => a.default.enqueue(() => d(this.pushLazy(t, e, o, n))))
            },
            updateAnimation(t, e) {
                r.default.dispatch({
                    type: "MODAL_UPDATE",
                    key: t,
                    props: {},
                    partial: !0,
                    animation: e
                })
            },
            pop() {
                (0, i.popModal)(), r.default.dispatch({
                    type: "MODAL_POP"
                })
            },
            popWithKey(t, e) {
                (0, i.popModal)(t, e), r.default.dispatch({
                    type: "MODAL_POP",
                    key: t,
                    onExited: e
                })
            },
            popAll() {
                (0, i.popAllModals)(), r.default.dispatch({
                    type: "MODAL_POP_ALL"
                }), r.default.dispatch({
                    type: "CHANNEL_SETTINGS_CLOSE"
                }), r.default.dispatch({
                    type: "EMAIL_VERIFICATION_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "GUILD_SETTINGS_CLOSE"
                }), r.default.dispatch({
                    type: "HIDE_ACTION_SHEET"
                }), r.default.dispatch({
                    type: "DISPLAYED_INVITE_CLEAR"
                }), r.default.dispatch({
                    type: "DRAWER_CLOSE",
                    animated: !0
                }), r.default.dispatch({
                    type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "QUICKSWITCHER_HIDE"
                }), r.default.dispatch({
                    type: "MENTION_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "USER_SETTINGS_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "SEARCH_MODAL_CLOSE"
                }), r.default.dispatch({
                    type: "CONNECTIONS_GRID_MODAL_HIDE"
                })
            }
        }
}