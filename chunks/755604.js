function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007"), n("424973");
    var l = n("385887");

    function i(e, t) {
        if (l.EditorUtils.areStylesDisabled(e)) return [];
        let [n, i] = t, a = [];
        if (!l.TextUtils.isText(n)) return a;
        let [s] = l.EditorUtils.node(e, l.PathUtils.parent(i));
        return l.NodeUtils.isType(s, "applicationCommand") ? (n === s.children[0] && a.push({
            anchor: {
                path: i,
                offset: 0
            },
            focus: {
                path: i,
                offset: 0 + s.command.displayName.length + 1
            },
            commandName: !0
        }), a) : a
    }
}