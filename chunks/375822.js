function(e, t, n) {
    "use strict";
    var l, r, a, i, u, o;
    n.r(t), n.d(t, {
        HeaderRecord: function() {
            return s
        },
        FindResultDirections: function() {
            return l
        },
        AutocompleterResultTypes: function() {
            return r
        },
        AutocompleterQuerySymbols: function() {
            return a
        }
    });
    class s {
        constructor(e) {
            this.id = e, this.text = e
        }
    }(i = l || (l = {})).UP = "UP", i.DOWN = "DOWN", (u = r || (r = {})).GUILD = "GUILD", u.TEXT_CHANNEL = "TEXT_CHANNEL", u.GROUP_DM = "GROUP_DM", u.VOICE_CHANNEL = "VOICE_CHANNEL", u.USER = "USER", u.HEADER = "HEADER", u.APPLICATION = "APPLICATION", u.SKU = "SKU", u.LINK = "LINK", (o = a || (a = {})).USER = "@", o.TEXT_CHANNEL = "#", o.VOICE_CHANNEL = "!", o.GUILD = "*", o.APPLICATION = "$"
}