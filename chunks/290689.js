function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        textMarkupPatternWithExclusions: function() {
            return a
        },
        default: function() {
            return u
        }
    });
    var l = n("404828"),
        r = n.n(l);
    let a = e => new RegExp("^[\\s\\S]+?(?=".concat(e, "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)")),
        i = {
            ...r.defaultRules.text,
            match: (0, l.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
        };
    var u = i
}