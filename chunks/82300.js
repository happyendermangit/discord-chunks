function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isChannelTypeMentionable: function() {
            return r
        }
    });
    var l = n("233069");

    function r(e) {
        return (0, l.isGuildSelectableChannelType)(e) || (0, l.isGuildVocalChannelType)(e)
    }
}