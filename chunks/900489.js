function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMessagesFromGuildFeedFetch: function() {
            return a
        },
        getThreadsFromGuildFeedFetch: function() {
            return o
        }
    }), n("47120"), n("536091"), n("390547"), n("653041");
    var i = n("536402"),
        r = n("823379");

    function s(e) {
        let t = e.children.map(e => s(e));
        return [e.messages.map(e => e.message), ...t].flat()
    }

    function a(e) {
        return e.results.items.flatMap(e => {
            switch (e.type) {
                case i.GuildFeedItemTypes.MESSAGE:
                case i.GuildFeedItemTypes.FORUM_POST:
                    return [e.message];
                case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    return e.messages.map(e => e.message);
                case i.GuildFeedItemTypes.CONVERSATION:
                    return s(e.root);
                default:
                    (0, r.assertNever)(e)
            }
        }).filter(r.isNotNullish)
    }

    function o(e) {
        return e.results.items.flatMap(e => {
            let t = [];
            switch (e.type) {
                case i.GuildFeedItemTypes.MESSAGE:
                    t.push(e.message.thread);
                    break;
                case i.GuildFeedItemTypes.FORUM_POST:
                    t.push(e.message.thread, e.thread);
                    break;
                case i.GuildFeedItemTypes.MESSAGE_BUNDLE:
                    t.push(...e.messages.map(e => e.message.thread));
                    break;
                case i.GuildFeedItemTypes.CONVERSATION:
                    t.push(...s(e.root).map(e => e.thread));
                    break;
                default:
                    (0, r.assertNever)(e)
            }
            return t
        }).filter(r.isNotNullish)
    }
}