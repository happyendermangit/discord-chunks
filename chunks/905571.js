function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("577427"),
        r = n("782340"),
        a = {
            MENTION_EVERYONE: () => ({
                test: "everyone",
                text: "@everyone",
                description: r.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION
            }),
            MENTION_HERE: () => ({
                test: "here",
                text: "@here",
                description: r.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION
            }),
            LAUNCHABLE_APPLICATIONS: () => l.default.launchableApplicationViewItems
        }
}