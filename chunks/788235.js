function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("424973");
    var i = n("49111");
    let s = [],
        r = !1;

    function a() {
        let e = window.navigator.connection;
        return null == e ? {
            type: i.NetworkConnectionTypes.UNKNOWN,
            effectiveSpeed: i.NetworkConnectionSpeeds.UNKNOWN
        } : {
            type: null != e.type ? e.type : i.NetworkConnectionTypes.UNKNOWN,
            effectiveSpeed: e.effectiveType
        }
    }

    function o() {
        let e = a();
        s.forEach(t => t(e))
    }
    var l = {
        addOnlineCallback(e) {
            window.addEventListener("online", e)
        },
        removeOnlineCallback(e) {
            window.removeEventListener("online", e)
        },
        addOfflineCallback(e) {
            window.addEventListener("offline", e)
        },
        removeOfflineCallback(e) {
            window.removeEventListener("offline", e)
        },
        addChangeCallback(e) {
            var t;
            t = e, s.push(t),
                function() {
                    if (!0 === r) return;
                    let e = window.navigator.connection;
                    null != e && (r = !0, e.addEventListener("change", o))
                }()
        },
        removeChangeCallback(e) {
            ! function(e) {
                let t = s.indexOf(e); - 1 !== t && (s.splice(t, 1), ! function() {
                    if (!1 === r) return;
                    let e = window.navigator.connection;
                    null != e && 0 === s.length && null != e && (e.removeEventListener("change", o), r = !1)
                }())
            }(e)
        },
        getNetworkInformation: () => Promise.resolve(a()),
        isOnline() {
            let e = navigator.onLine;
            return void 0 === e || e
        }
    }
}