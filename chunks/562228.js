function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        generateEmptyPollAnswer: function() {
            return v
        },
        filterOutUUID: function() {
            return T
        },
        hasNonVoteReactions: function() {
            return I
        },
        useCanPostPollsInChannel: function() {
            return C
        },
        useCanPostImagePolls: function() {
            return A
        },
        isPollCreationEmpty: function() {
            return y
        },
        isAnswerFilled: function() {
            return N
        },
        isIncompleteAnswer: function() {
            return R
        },
        createPollServerDataFromCreateRequest: function() {
            return O
        },
        getTotalVotes: function() {
            return D
        },
        getPollAnswerVotesTooltipText: function() {
            return P
        }
    }), n("781738"), n("222007"), n("808653");
    var i = n("917351"),
        s = n.n(i),
        r = n("748820"),
        a = n("418009"),
        o = n("446674"),
        l = n("875978"),
        u = n("42203"),
        d = n("486996"),
        c = n("377253"),
        f = n("957255"),
        _ = n("27618"),
        h = n("718517"),
        E = n("387111"),
        g = n("83995"),
        m = n("491096"),
        p = n("49111"),
        S = n("782340");

    function v() {
        return {
            text: void 0,
            image: void 0,
            localCreationAnswerId: function() {
                return (0, r.v4)()
            }()
        }
    }

    function T(e) {
        return e.replace(/\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i, "")
    }

    function I(e) {
        for (let t of e.reactions)
            if (null == t.me_vote) return !0;
        return !1
    }

    function C(e) {
        let t = p.ChannelTypesSets.POLLS.has(null == e ? void 0 : e.type),
            n = (0, o.useStateFromStores)([f.default], () => f.default.can(p.Permissions.SEND_MESSAGES, e)),
            {
                enabled: i
            } = g.CreateGuildPollsExperiment.useExperiment({
                guildId: null == e ? void 0 : e.guild_id,
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || (null == e ? void 0 : e.isPrivate()) || !n
            }),
            {
                enabled: s
            } = g.CreateGDMPollsExperiment.useExperiment({
                location: "useCanPostPollsInChannel"
            }, {
                autoTrackExposure: !0,
                disable: !t || !(null == e ? void 0 : e.isPrivate())
            });
        return i || s
    }

    function A() {
        return !1
    }

    function y(e, t, n) {
        return 0 === e.length && null == t.find(e => N(e, n))
    }

    function N(e, t) {
        if (t === a.PollLayoutTypes.IMAGE_ONLY_ANSWERS) return null != e.image;
        {
            var n;
            let t = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
            return null != t && t.length > 0
        }
    }

    function R(e, t) {
        var n;
        let i = null === (n = e.text) || void 0 === n ? void 0 : n.trim();
        return t === a.PollLayoutTypes.DEFAULT && null != e.image && (null == i || 0 === i.length)
    }

    function O(e) {
        var t, n;
        if (null == e) return;
        let i = null == e ? void 0 : null === (t = e.answers) || void 0 === t ? void 0 : t.map((e, t) => {
            var n, i;
            let s = null === (n = e.poll_media) || void 0 === n ? void 0 : n.emoji,
                r = {
                    ...e.poll_media,
                    emoji: null != s ? {
                        id: s.id,
                        name: null !== (i = s.name) && void 0 !== i ? i : ""
                    } : void 0
                };
            return {
                ...e,
                answer_id: t + 1,
                poll_media: r
            }
        });
        let s = (null == e ? void 0 : e.duration) != null ? (n = e.duration, new Date(Date.now() + n * h.default.Millis.HOUR).toISOString()) : "0";
        return {
            ...e,
            expiry: s,
            answers: i
        }
    }

    function D(e) {
        return e.reduce((e, t) => {
            var n, i;
            return e + (null !== (i = null === (n = t.count_details) || void 0 === n ? void 0 : n.vote) && void 0 !== i ? i : 0)
        }, 0)
    }

    function P(e, t, n) {
        var i, r;
        let a = c.default.getMessage(t, e);
        if (null == a) return "";
        let o = a.getReaction({
                id: n,
                name: "",
                animated: !1
            }),
            f = null !== (r = null == o ? void 0 : null === (i = o.count_details) || void 0 === i ? void 0 : i.vote) && void 0 !== r ? r : 0,
            h = function(e, t) {
                let n = e.getChannelId(),
                    i = d.default.getReactions(n, e.id, {
                        id: t,
                        name: "",
                        animated: !1
                    }, m.VOTES_TOOLTIP_MAX_USERS, l.ReactionTypes.VOTE),
                    r = u.default.getChannel(n),
                    a = null == r || r.isPrivate() ? null : r.getGuildId();
                return s(i).reject(e => _.default.isBlocked(e.id)).take(m.VOTES_TOOLTIP_MAX_USERS).map(e => E.default.getName(a, null == r ? void 0 : r.id, e)).value()
            }(a, n);
        return 0 === h.length ? "" : function(e, t) {
            let n = Math.max(0, t - e.length);
            if (1 === e.length) return n > 0 ? S.default.Messages.POLL_VOTES_TOOLTIP_1_N.format({
                a: e[0],
                n: n
            }) : e[0];
            if (2 === e.length) return n > 0 ? S.default.Messages.POLL_VOTES_TOOLTIP_2_N.format({
                a: e[0],
                b: e[1],
                n: n
            }) : S.default.Messages.POLL_VOTES_TOOLTIP_2.format({
                a: e[0],
                b: e[1]
            });
            if (3 !== e.length) return S.default.Messages.POLL_VOTES_TOOLTIP_N.format({
                n: n
            });
            else return n > 0 ? S.default.Messages.POLL_VOTES_TOOLTIP_3_N.format({
                a: e[0],
                b: e[1],
                c: e[2],
                n: n
            }) : S.default.Messages.POLL_VOTES_TOOLTIP_3.format({
                a: e[0],
                b: e[1],
                c: e[2]
            })
        }(h, f)
    }
}