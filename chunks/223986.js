function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useToggleState: function() {
            return a
        }
    }), n("222007");
    var r = n("708966");

    function a() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
                isReadOnly: t
            } = e,
            [n, a] = (0, r.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
            isSelected: n,
            setSelected: function(e) {
                !t && a(e)
            },
            toggle: function() {
                !t && a(!n)
            }
        }
    }
}