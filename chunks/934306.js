function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isOnNewPanels: function() {
            return o
        },
        isSplitMessagesTab: function() {
            return l
        },
        isSplitMessagesTabAndOnMessagesTab: function() {
            return u
        },
        shouldHandleNewPanelsRoute: function() {
            return d
        }
    });
    var i = n("21121"),
        s = n("99317"),
        r = n("491246"),
        a = n("49111");

    function o() {
        return (0, i.isInMainTabsExperiment)()
    }

    function l() {
        return (0, i.isInMainTabsExperiment)() && !(0, s.getNavYouBarExperiment)({
            location: "isSplitMessagesTab"
        }).showYouBar
    }

    function u() {
        if (!l()) return !1;
        let e = (0, r.default)();
        return (null == e ? void 0 : e.name) === "messages"
    }

    function d(e) {
        return !!o() && (!l() || null != e && e !== a.ME)
    }
}