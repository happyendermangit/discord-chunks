function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MenuSliderControl: function() {
            return l
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("561779"),
        a = n("291720");
    let o = e => "".concat(e.toFixed(0), "%"),
        l = r.forwardRef(function(e, t) {
            let {
                value: n,
                minValue: l = 0,
                maxValue: u = 100,
                onChange: d,
                renderValue: _ = o,
                "aria-label": c
            } = e, E = r.useRef(null);
            return r.useImperativeHandle(t, () => ({
                focus: () => {
                    var e;
                    return null === (e = E.current) || void 0 === e ? void 0 : e.focus()
                },
                blur: () => {
                    var e;
                    return null === (e = E.current) || void 0 === e ? void 0 : e.blur()
                },
                activate: () => !1
            }), []), (0, i.jsx)("div", {
                className: a.sliderContainer,
                children: (0, i.jsx)(s.Slider, {
                    ref: E,
                    mini: !0,
                    handleSize: 16,
                    className: a.slider,
                    initialValue: n,
                    minValue: l,
                    maxValue: u,
                    onValueChange: d,
                    asValueChanges: d,
                    onValueRender: _,
                    orientation: "horizontal",
                    "aria-label": c
                })
            })
        })
}