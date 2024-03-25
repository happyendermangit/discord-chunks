function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useVideoLottie: function() {
            return i
        }
    });
    var a = n("37983"),
        r = n("884691"),
        s = n("414235");
    let l = {
            disable: {
                name: "disable",
                start: 0,
                duration: 70
            },
            enable: {
                name: "enable",
                start: 100,
                duration: 70
            },
            hover_enabled: {
                name: "hover_enabled",
                start: 180,
                duration: 70
            },
            hover_disabled: {
                name: "hover_disabled",
                start: 280,
                duration: 70
            }
        },
        i = e => {
            let t = r.useRef(null),
                i = r.useRef(e),
                u = r.useMemo(() => () => {
                    null != t.current && t.current.play(e)
                }, [e]),
                o = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                    t.current.play(n)
                }, [e]),
                d = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                    t.current.stopIfPlaying(n)
                }, [e]),
                c = r.useCallback(e => (0, a.jsx)(s.LottieIcon, {
                    ...e,
                    src: () => n.el("326773").then(n.t.bind(n, "326773", 19)),
                    ref: t,
                    initialAnimation: i.current,
                    markers: l
                }), []);
            return {
                events: {
                    onClick: u,
                    onMouseEnter: o,
                    onMouseLeave: d
                },
                play: u,
                Component: c
            }
        }
}