function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("724458"), n("653041");
    var i = n("470079");
    t.default = (e, t) => {
        let [n, r] = i.useState(-1), s = i.useRef(-1);
        return i.useEffect(() => {
            let t = e.reduce((e, t) => (!e.includes(t.src) && e.push(t.src), e), []);
            r(t.length), s.current = t.length
        }, [e, s, r]), i.useEffect(() => {
            0 === n && t()
        }, [n, t]), {
            pending: n,
            pendingRef: s,
            setPending: r
        }
    }
}