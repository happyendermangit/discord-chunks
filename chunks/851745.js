function(e, t, n) {
    "use strict";
    var l, i, a, s, r, o, u, d, c, f, m, p, h, E, g, S, C, T, v, I;
    n.r(t), n.d(t, {
        MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS: function() {
            return _
        },
        MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY: function() {
            return N
        },
        MAX_COMMAND_AUTOCOMPLETE_RESULTS: function() {
            return A
        },
        GlobalMentionMode: function() {
            return l
        },
        UserMentionMode: function() {
            return i
        },
        RoleMentionMode: function() {
            return a
        },
        ChannelMentionMode: function() {
            return s
        },
        ClydeMentionMode: function() {
            return r
        },
        CommandMode: function() {
            return o
        },
        SelectType: function() {
            return u
        },
        AutocompleteOptionTypes: function() {
            return d
        },
        AutocompleteSelectionTypes: function() {
            return c
        },
        FocusMode: function() {
            return f
        }
    });
    let _ = 3,
        N = 7,
        A = 20;
    (m = l || (l = {}))[m.DENY = 0] = "DENY", m[m.ALLOW_EVERYONE = 1] = "ALLOW_EVERYONE", m[m.ALLOW_EVERYONE_OR_HERE = 2] = "ALLOW_EVERYONE_OR_HERE", (p = i || (i = {}))[p.DENY = 0] = "DENY", p[p.ALLOW_CHANNEL = 1] = "ALLOW_CHANNEL", p[p.ALLOW_GUILD = 2] = "ALLOW_GUILD", (h = a || (a = {}))[h.DENY = 0] = "DENY", h[h.ALLOW_MENTIONABLE = 1] = "ALLOW_MENTIONABLE", h[h.ALLOW_ALL = 2] = "ALLOW_ALL", (E = s || (s = {}))[E.DENY = 0] = "DENY", E[E.ALLOW_SELECTABLE = 1] = "ALLOW_SELECTABLE", (g = r || (r = {}))[g.DENY = 0] = "DENY", g[g.ALLOW = 1] = "ALLOW", (S = o || (o = {}))[S.DISABLED = 0] = "DISABLED", S[S.OLD_BUILT_INS = 1] = "OLD_BUILT_INS", S[S.NEW_TEXT_ONLY = 2] = "NEW_TEXT_ONLY", S[S.NEW = 3] = "NEW", (C = u || (u = {}))[C.INSERT = 0] = "INSERT", C[C.SEND = 1] = "SEND", (T = d || (d = {})).MENTIONS = "MENTIONS", T.CHANNELS = "CHANNELS", T.EMOJIS_AND_STICKERS = "EMOJIS_AND_STICKERS", T.REACTIONS = "REACTIONS", T.GIFS = "GIFS", T.LEGACY_COMMANDS = "LEGACY_COMMANDS", T.COMMANDS = "COMMANDS", T.COMMAND_OPTIONS = "COMMAND_OPTIONS", T.CHOICES = "CHOICES", (v = c || (c = {})).MENTION = "MENTION", v.CHANNEL = "CHANNEL", v.EMOJI = "EMOJI", v.STICKER = "STICKER", v.REACTION = "REACTION", v.GIF = "GIF", v.COMMAND = "COMMAND", v.COMMAND_OPTION = "COMMAND_OPTION", v.COMMAND_SUGGESTION = "COMMAND_SUGGESTION", v.CHOICE = "CHOICE", v.EMOJI_UPSELL = "EMOJI_UPSELL", (I = f || (f = {}))[I.AUTO = 0] = "AUTO", I[I.AUTO_WHEN_FILTERED = 1] = "AUTO_WHEN_FILTERED", I[I.MANUAL = 2] = "MANUAL"
}