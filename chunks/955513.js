function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getRandomDateShortcut: function() {
            return b
        },
        ComponentTypes: function() {
            return a
        },
        refreshSearchTokens: function() {
            return V
        },
        getFilterAutocompletions: function() {
            return z
        },
        default: function() {
            return Q
        }
    }), n("222007"), n("843762");
    var a, r, s = n("448105"),
        l = n.n(s),
        u = n("917351"),
        o = n.n(u),
        E = n("866227"),
        T = n.n(E),
        c = n("923959"),
        i = n("27618"),
        _ = n("744983"),
        S = n("18494"),
        R = n("162771"),
        f = n("102985"),
        d = n("697218"),
        h = n("25292"),
        p = n("655518"),
        A = n("158998"),
        g = n("49111"),
        y = n("782340");

    function I() {
        return new Set(T.months().map(e => e.toLowerCase()))
    }

    function N() {
        return new Set(T.weekdays().map(e => e.toLowerCase()))
    }

    function F() {
        let e = new Date().getFullYear();
        return new Set(o.range(2015, e + 1).map(e => e.toString()))
    }

    function L(e, t) {
        return [e, e.clone().add(1, t)]
    }

    function M(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = T().startOf(e).add(t, e);
        return L(n, e)
    }

    function k(e, t, n) {
        let a = T(e, t).local();
        return L(a, n)
    }

    function m() {
        return {
            [y.default.Messages.SEARCH_SHORTCUT_TODAY]: () => M("day"),
            [y.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => M("day", -1),
            [y.default.Messages.SEARCH_SHORTCUT_WEEK]: () => M("week"),
            [y.default.Messages.SEARCH_SHORTCUT_MONTH]: () => M("month"),
            [y.default.Messages.SEARCH_SHORTCUT_YEAR]: () => M("year")
        }
    }
    let C = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
        H = RegExp("\\s*(true|false)", "i");

    function O(e) {
        return "".concat(e, ":")
    }

    function W(e) {
        return RegExp(O(e), "i")
    }

    function v(e) {
        let t;
        let n = e.getMatch(1),
            a = e => null != e ? null == e ? void 0 : e.id : null;
        return null != (t = g.ID_REGEX.test(n) ? n : n === g.ME ? a(d.default.getCurrentUser()) : null != e.getMatch(4) ? a(d.default.findByTag(e.getMatch(4))) : a(d.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
    }

    function w(e, t) {
        let n, a;
        let r = e.getFullMatch().trim().toLowerCase(),
            s = m()[r];
        null != s ? [n, a] = s() : I().has(r) ? [n, a] = k(r, "MMMM", "month") : N().has(r) ? [n, a] = k(r, "dddd", "day") : F().has(r) ? [n, a] = k(r, "YYYY", "year") : [n, a] = k(r, g.SEARCH_DATE_FORMAT, "day");
        let l = n.isValid() && a.isValid();
        return !!l && ("before" === t ? (a = n, n = null) : "after" === t && (n = a, a = null), e.setData("start", n), e.setData("end", a), !0)
    }

    function x(e) {
        let t = e.getMatch(1),
            n = R.default.getGuildId(),
            a = c.default.getChannels(n)[c.GUILD_SELECTABLE_CHANNELS_KEY].concat(c.default.getChannels(n)[c.GUILD_VOCAL_CHANNELS_KEY]),
            r = c.default.getTextChannelNameDisambiguations(n),
            s = o.chain(a).map(e => {
                let {
                    channel: t
                } = e;
                return t
            }).find(e => {
                var n, a;
                return t === (null !== (a = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== a ? a : e.name)
            }).value();
        return null != s && (e.setData("channel", s), !0)
    }

    function D(e) {
        let t = {
            [y.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
            [y.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
            [y.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
            [y.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
            [y.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
            [y.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
            [y.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
        } [e.getMatch(1)];
        return null != t && "" !== t && (e.setData("has", t), !0)
    }

    function P() {
        return [...Array.from(I()), ...Array.from(N()), ...Array.from(F()), ...Object.keys(m())]
    }

    function b() {
        return o.sample(P())
    }

    function K(e, t, n) {
        return U(e, t, P()).map(e => ({
            ...e,
            group: n,
            key: "".concat(n, "-").concat(e.text)
        }))
    }

    function U(e, t, n) {
        let a = e.toLocaleLowerCase();
        return o(n).filter(e => l(a, e.toLocaleLowerCase())).take(t).map(e => ({
            text: e
        })).value()
    }

    function Y(e, t) {
        let n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = _.default.getSearchType(t);
        e = e.split("#")[0];
        let l = {
            query: e,
            limit: a,
            request: r
        };
        switch (s) {
            case g.SearchTypes.GUILD:
                n = h.default.queryGuildUsers({
                    ...l,
                    guildId: t
                });
                break;
            case g.SearchTypes.CHANNEL:
                n = h.default.queryChannelUsers({
                    ...l,
                    channelId: t
                });
                break;
            case g.SearchTypes.DMS:
                n = h.default.queryUsers(e, a, !0, r, () => !0);
                break;
            default:
                return []
        }
        return n.filter(e => {
            let {
                record: t
            } = e;
            return !i.default.isBlocked(t.id)
        }).map(e => {
            let {
                record: t
            } = e;
            return {
                text: A.default.getUserTag(t),
                user: t
            }
        })
    }

    function B() {
        return _.default.getSearchType() === g.SearchTypes.GUILD
    }

    function q() {
        return !f.default.hidePersonalInformation
    }
    let G = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
    (r = a || (a = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
    let j = {};

    function V() {
        Object.assign(j, function() {
            let e = [y.default.Messages.SEARCH_ANSWER_HAS_LINK, y.default.Messages.SEARCH_ANSWER_HAS_EMBED, y.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, y.default.Messages.SEARCH_ANSWER_HAS_VIDEO, y.default.Messages.SEARCH_ANSWER_HAS_IMAGE, y.default.Messages.SEARCH_ANSWER_HAS_SOUND, y.default.Messages.SEARCH_ANSWER_HAS_STICKER];
            return {
                [g.SearchTokenTypes.FILTER_FROM]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_FROM),
                    componentType: "FILTER",
                    key: O(y.default.Messages.SEARCH_FILTER_FROM),
                    plainText: y.default.Messages.SEARCH_FILTER_FROM,
                    validator: q,
                    getAutocompletions: Y
                },
                [g.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                    follows: [g.SearchTokenTypes.FILTER_FROM],
                    regex: G,
                    validator: v,
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "author_id"
                },
                [g.SearchTokenTypes.FILTER_MENTIONS]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_MENTIONS),
                    componentType: "FILTER",
                    key: O(y.default.Messages.SEARCH_FILTER_MENTIONS),
                    plainText: y.default.Messages.SEARCH_FILTER_MENTIONS,
                    validator: q,
                    getAutocompletions: Y
                },
                [g.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                    follows: [g.SearchTokenTypes.FILTER_MENTIONS],
                    regex: G,
                    validator: v,
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "mentions"
                },
                [g.SearchTokenTypes.FILTER_HAS]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_HAS),
                    componentType: "FILTER",
                    key: O(y.default.Messages.SEARCH_FILTER_HAS),
                    plainText: y.default.Messages.SEARCH_FILTER_HAS,
                    getAutocompletions: (t, n, a) => U(t, a, e)
                },
                [g.SearchTokenTypes.ANSWER_HAS]: {
                    regex: RegExp("(?:\\s*-?(".concat(e.map(e => p.default.escape(e)).join("|"), "))"), "i"),
                    follows: [g.SearchTokenTypes.FILTER_HAS],
                    validator: D,
                    componentType: "ANSWER",
                    queryKey: "has"
                },
                [g.SearchTokenTypes.FILTER_FILE_TYPE]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_FILE_TYPE),
                    key: O(y.default.Messages.SEARCH_FILTER_FILE_TYPE),
                    plainText: y.default.Messages.SEARCH_FILTER_FILE_TYPE,
                    componentType: "FILTER"
                },
                [g.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                    regex: /(?:\s*([^\s]+))/,
                    follows: [g.SearchTokenTypes.FILTER_FILE_TYPE],
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "attachment_extensions"
                },
                [g.SearchTokenTypes.FILTER_FILE_NAME]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_FILE_NAME),
                    key: O(y.default.Messages.SEARCH_FILTER_FILE_NAME),
                    plainText: y.default.Messages.SEARCH_FILTER_FILE_NAME,
                    componentType: "FILTER"
                },
                [g.SearchTokenTypes.ANSWER_FILE_NAME]: {
                    regex: /(?:\s*([^\s]+)(?=\s))/,
                    follows: [g.SearchTokenTypes.FILTER_FILE_NAME],
                    mutable: !0,
                    componentType: "ANSWER",
                    queryKey: "attachment_filename"
                },
                [g.SearchTokenTypes.FILTER_BEFORE]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_BEFORE),
                    componentType: "FILTER",
                    key: O(y.default.Messages.SEARCH_FILTER_BEFORE),
                    plainText: y.default.Messages.SEARCH_FILTER_BEFORE,
                    getAutocompletions: (e, t, n) => K(e, n, g.SearchTokenTypes.FILTER_BEFORE)
                },
                [g.SearchTokenTypes.FILTER_ON]: {
                    regex: W("(".concat(y.default.Messages.SEARCH_FILTER_ON, "|").concat(y.default.Messages.SEARCH_FILTER_DURING, ")")),
                    componentType: "FILTER",
                    key: O(y.default.Messages.SEARCH_FILTER_DURING),
                    plainText: y.default.Messages.SEARCH_FILTER_DURING,
                    getAutocompletions: (e, t, n) => K(e, n, g.SearchTokenTypes.FILTER_ON)
                },
                [g.SearchTokenTypes.FILTER_AFTER]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_AFTER),
                    componentType: "FILTER",
                    key: O(y.default.Messages.SEARCH_FILTER_AFTER),
                    plainText: y.default.Messages.SEARCH_FILTER_AFTER,
                    getAutocompletions: (e, t, n) => K(e, n, g.SearchTokenTypes.FILTER_AFTER)
                },
                [g.SearchTokenTypes.ANSWER_BEFORE]: {
                    regex: C,
                    follows: [g.SearchTokenTypes.FILTER_BEFORE],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => w(e, "before")
                },
                [g.SearchTokenTypes.ANSWER_ON]: {
                    regex: C,
                    follows: [g.SearchTokenTypes.FILTER_ON],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => w(e, "on")
                },
                [g.SearchTokenTypes.ANSWER_AFTER]: {
                    regex: C,
                    follows: [g.SearchTokenTypes.FILTER_AFTER],
                    componentType: "ANSWER",
                    mutable: !0,
                    validator: e => w(e, "after")
                },
                [g.SearchTokenTypes.FILTER_IN]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_IN),
                    componentType: "FILTER",
                    key: O(y.default.Messages.SEARCH_FILTER_IN),
                    plainText: y.default.Messages.SEARCH_FILTER_IN,
                    validator: B,
                    getAutocompletions(e, t, n) {
                        "#" === e[0] && (e = e.substring(1));
                        let a = h.default.queryChannels({
                            query: e,
                            type: c.GUILD_SELECTABLE_CHANNELS_KEY,
                            guildId: t,
                            limit: 1 / 0
                        }).concat(h.default.queryChannels({
                            query: e,
                            type: c.GUILD_VOCAL_CHANNELS_KEY,
                            guildId: t,
                            limit: 1 / 0
                        })).map(e => {
                            let {
                                record: t
                            } = e;
                            return t
                        }).filter(e => !e.isThread());
                        if ("" === e.trim()) {
                            let e = S.default.getChannelId(t),
                                n = a.find(t => t.id === e);
                            null != n && (a.splice(a.indexOf(n), 1), a.unshift(n))
                        }
                        let r = c.default.getTextChannelNameDisambiguations(t);
                        return o(a).take(n).map(e => {
                            var t, n;
                            return {
                                text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                channel: e
                            }
                        }).value()
                    }
                },
                [g.SearchTokenTypes.ANSWER_IN]: {
                    regex: /(?:\s*#?([^ ]+))/i,
                    mutable: !0,
                    follows: [g.SearchTokenTypes.FILTER_IN],
                    componentType: "ANSWER",
                    validator: x,
                    queryKey: "channel_id"
                },
                [g.SearchTokenTypes.FILTER_PINNED]: {
                    regex: W(y.default.Messages.SEARCH_FILTER_PINNED),
                    componentType: "FILTER",
                    key: O(y.default.Messages.SEARCH_FILTER_PINNED),
                    plainText: y.default.Messages.SEARCH_FILTER_PINNED,
                    getAutocompletions: () => [{
                        text: "true"
                    }, {
                        text: "false"
                    }]
                },
                [g.SearchTokenTypes.ANSWER_PINNED]: {
                    regex: H,
                    componentType: "ANSWER",
                    follows: [g.SearchTokenTypes.FILTER_PINNED],
                    queryKey: "pinned",
                    validator: e => {
                        let t = e.getMatch(1);
                        return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
                    }
                }
            }
        }())
    }

    function z(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(j).length;
        return o(j).keys().filter(e => g.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != j[e].key).map(e => ({
            token: e,
            text: j[e].key
        })).filter(t => {
            let {
                text: n
            } = t;
            return l(e.toLowerCase(), n)
        }).take(t).value()
    }
    var Q = j
}