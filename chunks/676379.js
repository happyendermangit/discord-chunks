function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        setCanPlayWowMoment: function() {
            return s
        }
    });
    var i = n("913144");
    let s = e => {
        i.default.dispatch({
            type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
            value: e
        })
    }
}