function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEndCallLottie: function() {
            return l
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414235");
    let l = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            l = r.useCallback(() => {
                null != e.current && e.current.play("hover")
            }, []),
            i = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("hover")
            }, []),
            u = r.useCallback(t => (0, a.jsx)(s.LottieIcon, {
                ...t,
                src: n("122863"),
                ref: e
            }), []);
        return {
            events: {
                onMouseEnter: l,
                onMouseLeave: i
            },
            play: t,
            Component: u
        }
    }
}