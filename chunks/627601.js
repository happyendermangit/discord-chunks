function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserPopoutUpsellSource: function() {
            return i
        },
        useUserPopoutCollectiblesUpsellStore: function() {
            return r
        }
    });
    var l, i, a = n("308503");
    (l = i || (i = {})).PROFILE_PANEL = "profile panel", l.USER_POPOUT = "user popout";
    let s = {
            upsellSource: null
        },
        r = (0, a.default)(e => ({
            ...s,
            setUpsellSource: t => e({
                upsellSource: t
            }),
            reset: () => {
                e({
                    ...s
                })
            }
        }))
}