function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useGiftLottie: function() {
            return s
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414235");
    let s = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play("all")
            }, []),
            s = i.useCallback(() => {
                null != e.current && e.current.play("hover")
            }, []),
            r = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("hover")
            }, []),
            o = i.useCallback(t => (0, l.jsx)(a.LottieIcon, {
                ...t,
                src: n("879955"),
                ref: e
            }), []);
        return {
            events: {
                onMouseEnter: s,
                onMouseLeave: r
            },
            play: t,
            Component: o
        }
    }
}