function(t, r, n) {
    "use strict";
    var e = n("626544").match(/AppleWebKit\/(\d+)\./);
    t.exports = !!e && +e[1]
}