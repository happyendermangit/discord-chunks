function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("843762"), n("222007");
    var l = n("298386"),
        i = n("123225"),
        a = n("679653"),
        s = n("42203"),
        r = n("923959"),
        o = n("501536"),
        u = n("25292"),
        d = n("200294"),
        c = n("851745"),
        f = n("406291"),
        m = n("724210"),
        p = n("782340");
    let h = {
        sentinel: f.CHANNEL_SENTINEL,
        matches: (e, t, n, l, i) => i.mentions.channel !== c.ChannelMentionMode.DENY && !e.isPrivate(),
        queryResults(e, t, n, l, a) {
            let s, o, d = r.GUILD_SELECTABLE_CHANNELS_KEY;
            return n.charAt(0) === i.AutocompleterQuerySymbols.VOICE_CHANNEL && (d = r.GUILD_VOCAL_CHANNELS_KEY, n = n.substring(1)), l.forNonStringCommandOption ? s = u.default.queryApplicationCommandChannelResults({
                query: n,
                channel: e,
                channelTypes: l.allowedChannelTypes
            }) : (s = u.default.queryChannelResults({
                query: n,
                channel: e,
                type: d
            }), null != t && (o = u.default.queryStaticRouteChannels({
                query: n,
                guild: t
            }), s.channels.unshift(...o))), {
                results: s,
                staticRouteChannels: o
            }
        },
        renderResults(e) {
            let t, n, {
                    results: {
                        channels: l
                    },
                    selectedIndex: a,
                    query: r,
                    options: u,
                    onHover: c,
                    onClick: m
                } = e,
                h = r.charAt(0) === i.AutocompleterQuerySymbols.VOICE_CHANNEL;
            return h ? (t = p.default.Messages.VOICE_CHANNELS_MATCHING, n = p.default.Messages.VOICE_CHANNELS, r = r.substring(1)) : u.forNonStringCommandOption ? (t = p.default.Messages.CHANNELS_MATCHING, n = p.default.Messages.CHANNELS) : (t = p.default.Messages.TEXT_CHANNELS_MATCHING, n = p.default.Messages.TEXT_CHANNELS), (0, d.renderAutocompleteGroup)({
                query: r,
                selectedIndex: a,
                autocompletes: l,
                onHover: c,
                onClick: m,
                titleWithQuery: t,
                titleWithoutQuery: n,
                Component: o.default.Channel,
                getProps: e => ({
                    channel: e,
                    key: e.id,
                    category: s.default.getChannel(e.parent_id)
                }),
                getQuery: e => h ? "".concat(f.CHANNEL_SENTINEL).concat(i.AutocompleterQuerySymbols.VOICE_CHANNEL).concat(e) : "".concat(f.CHANNEL_SENTINEL).concat(e),
                key: "channels"
            })
        },
        onSelect(e) {
            let {
                results: {
                    channels: t
                },
                index: n,
                options: i
            } = e, s = t[n];
            return i.insertText(function(e) {
                switch (e.type) {
                    case l.ChannelTypes.PUBLIC_THREAD:
                    case l.ChannelTypes.PRIVATE_THREAD:
                    case l.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case l.ChannelTypes.GUILD_VOICE:
                    case l.ChannelTypes.GUILD_STAGE_VOICE:
                    case l.ChannelTypes.GUILD_CATEGORY:
                        return '#"'.concat((0, a.escapeChannelName)(e.name), '"');
                    default:
                        let t = r.default.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                        return "#".concat(null != t ? t.name : e.name)
                }
            }(s), function(e) {
                return m.StaticChannelIds.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
            }(s)), {
                type: c.AutocompleteSelectionTypes.CHANNEL
            }
        }
    };
    var E = h
}