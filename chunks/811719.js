function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useOverlayTriggerState: function() {
            return i
        }
    }), n("222007");
    var r = n("884691"),
        a = n("679750");

    function i(e) {
        let [t, n] = (0, a.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), i = (0, r.useCallback)(() => {
            n(!0)
        }, [n]), o = (0, r.useCallback)(() => {
            n(!1)
        }, [n]), s = (0, r.useCallback)(() => {
            n(!t)
        }, [n, t]);
        return {
            isOpen: t,
            setOpen: n,
            open: i,
            close: o,
            toggle: s
        }
    }
}