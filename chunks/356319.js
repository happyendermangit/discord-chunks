function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useMenuTriggerState: function() {
            return i
        }
    }), n("222007");
    var r = n("561291"),
        a = n("884691");

    function i(e) {
        let t = (0, r.useOverlayTriggerState)(e),
            [n, i] = (0, a.useState)(null),
            [o, s] = (0, a.useState)([]),
            c = () => {
                s([]), t.close()
            };
        return {
            focusStrategy: n,
            ...t,
            open() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                i(e), t.open()
            },
            toggle() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                i(e), t.toggle()
            },
            close() {
                c()
            },
            UNSTABLE_expandedKeysStack: o,
            UNSTABLE_openSubmenu: (e, t) => {
                s(n => t > n.length ? n : [...n.slice(0, t), e])
            },
            UNSTABLE_closeSubmenu: (e, t) => {
                s(n => n[t] === e ? n.slice(0, t) : n)
            }
        }
    }
}