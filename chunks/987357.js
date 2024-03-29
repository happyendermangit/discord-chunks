function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("735250"),
        r = n("470079");

    function s(e) {
        let {
            paddingFix: t = !0,
            orientation: n = "vertical",
            dir: s,
            className: a,
            scrollerRef: o,
            specs: l
        } = e, u = (0, r.useRef)(null);
        return (0, r.useLayoutEffect)(() => {
            var e;
            let {
                current: i
            } = o;
            if (null == i || "auto" === n || !t) return;
            let r = null === (e = i.ownerDocument) || void 0 === e ? void 0 : e.defaultView;
            if (null == r) return;
            i.style.paddingTop = "", i.style.paddingBottom = "", i.style.paddingLeft = "", i.style.paddingRight = "";
            let a = r.getComputedStyle(i);
            if ("vertical" === n) {
                if ("rtl" === s) {
                    let e = parseInt(a.getPropertyValue("padding-left"), 10);
                    i.style.paddingLeft = "".concat(Math.max(0, e - l.width), "px"), i.style.paddingRight = ""
                } else {
                    let e = parseInt(a.getPropertyValue("padding-right"), 10);
                    i.style.paddingRight = "".concat(Math.max(0, e - l.width), "px"), i.style.paddingLeft = ""
                }
                let {
                    current: e
                } = u;
                null != e && (e.style.height = a.getPropertyValue("padding-bottom"))
            } else {
                let e = parseInt(a.getPropertyValue("padding-bottom"), 10);
                i.style.paddingBottom = "".concat(Math.max(0, e - l.height), "px");
                let {
                    current: t
                } = u;
                null != t && (t.style.width = a.getPropertyValue("padding-left"))
            }
        }, [n, s, a, o, t, l]), (0, r.useMemo)(() => {
            var e;
            return "auto" !== n ? (0, i.jsx)("div", {
                "aria-hidden": !0,
                style: {
                    position: "vertical" === (e = n) ? "absolute" : "relative",
                    pointerEvents: "none",
                    minHeight: "vertical" === e ? 0 : 1,
                    minWidth: "horizontal" === e ? 0 : 1,
                    flex: "0 0 auto"
                },
                ref: u
            }) : null
        }, [n])
    }
}