function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        usePreview: function() {
            return s
        }
    });
    var r = n("884691"),
        a = n("476042"),
        i = n("947990");
    let o = e => {
            let t = "translate(".concat(e.x.toFixed(1), "px, ").concat(e.y.toFixed(1), "px)");
            return {
                pointerEvents: "none",
                position: "fixed",
                top: 0,
                left: 0,
                transform: t,
                WebkitTransform: t
            }
        },
        s = () => {
            let e = (0, r.useRef)(null),
                t = (0, a.useDragLayer)(t => ({
                    currentOffset: (0, i.calculatePointerPosition)(t, e),
                    isDragging: t.isDragging(),
                    itemType: t.getItemType(),
                    item: t.getItem(),
                    monitor: t
                }));
            return t.isDragging && null !== t.currentOffset ? {
                display: !0,
                itemType: t.itemType,
                item: t.item,
                style: o(t.currentOffset),
                monitor: t.monitor,
                ref: e
            } : {
                display: !1
            }
        }
}