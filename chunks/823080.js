function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useSelectState: function() {
            return o
        }
    }), n("222007");
    var r = n("356319"),
        a = n("880523"),
        i = n("884691");

    function o(e) {
        let t = (0, r.useMenuTriggerState)(e),
            n = (0, a.useSingleSelectListState)({
                ...e,
                onSelectionChange: n => {
                    null != e.onSelectionChange && e.onSelectionChange(n), t.close()
                }
            }),
            [o, s] = (0, i.useState)(!1);
        return {
            ...n,
            ...t,
            open() {
                0 !== n.collection.size && t.open()
            },
            toggle(e) {
                0 !== n.collection.size && t.toggle(e)
            },
            isFocused: o,
            setFocused: s
        }
    }
}