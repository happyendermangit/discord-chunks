function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("222007");
    var l = n("884691"),
        i = n("760850");

    function a(e, t) {
        let [n, a] = l.useState();
        return l.useEffect(() => {
            if (null == e || null != t) {
                a(void 0);
                return
            }(0, i.default)().then(t => {
                null != t && t.identifyGame(e, (e, t) => {
                    0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name && a("data:image/png;base64,".concat(t.icon))
                })
            })
        }, [e, t]), null != t ? t : n
    }
}