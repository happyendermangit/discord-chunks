function(e, t, n) {
    "use strict";
    var l, i, a, s, r, o, u, d, c, f, m, p, h, E;

    function g(e, t) {
        let {
            sound_id: n,
            emoji_id: l,
            emoji_name: i,
            user_id: a,
            available: s,
            ...r
        } = e;
        return {
            ...r,
            soundId: n,
            guildId: t,
            emojiId: l,
            emojiName: i,
            userId: a,
            available: null == s || s
        }
    }

    function C(e) {
        let {
            soundId: t,
            guildId: n,
            emojiId: l,
            emojiName: i,
            userId: a,
            ...s
        } = e;
        return {
            ...s,
            sound_id: t,
            guild_id: n,
            emoji_id: l,
            emoji_name: i,
            user_id: a
        }
    }
    n.r(t), n.d(t, {
        SoundButtonOverlay: function() {
            return l
        },
        AnalyticsSoundType: function() {
            return i
        },
        AnalyticsChangeType: function() {
            return a
        },
        AnalyticsSoundSource: function() {
            return s
        },
        soundboardSoundFromAPI: function() {
            return g
        },
        soundboardSoundToAPI: function() {
            return C
        },
        SoundboardSoundGridSectionType: function() {
            return r
        },
        SoundboardSoundItemType: function() {
            return o
        },
        LocalSoundTrigger: function() {
            return u
        }
    }), (d = l || (l = {}))[d.PLAY = 0] = "PLAY", d[d.ADD = 1] = "ADD", (c = i || (i = {})).ENTRY = "entry_sound", c.EXIT = "exit_sound", c.DEFAULT = "default", (f = a || (a = {})).ADDED = "added", f.UPDATED = "updated", f.REMOVED = "removed", (m = s || (s = {})).DEFAULT = "default", m.CUSTOM = "custom", (p = r || (r = {}))[p.FAVORITES = 0] = "FAVORITES", p[p.RECENTLY_HEARD = 1] = "RECENTLY_HEARD", p[p.FREQUENTLY_USED = 2] = "FREQUENTLY_USED", p[p.GUILD = 3] = "GUILD", p[p.DEFAULTS = 4] = "DEFAULTS", p[p.SEARCH = 5] = "SEARCH", (h = o || (o = {}))[h.SOUND = 0] = "SOUND", h[h.ADD_SOUND = 1] = "ADD_SOUND", (E = u || (u = {}))[E.GIFT_CODE = 0] = "GIFT_CODE", E[E.SOUNDBOARD = 1] = "SOUNDBOARD", E[E.JOINED_VOICE_CHANNEL = 2] = "JOINED_VOICE_CHANNEL"
}