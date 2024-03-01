function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StageChannelParticipantNamedIndex: function() {
            return r
        },
        StageChannelParticipantTypes: function() {
            return i
        },
        default: function() {
            return l
        }
    }), n("424973"), n("222007");
    var r, i, l, u, a, o = n("407846"),
        s = n("246846"),
        d = n("374014"),
        E = n("373469"),
        _ = n("42203"),
        c = n("124948"),
        I = n("26989"),
        S = n("27618"),
        T = n("697218"),
        f = n("800762"),
        p = n("387111"),
        N = n("325861"),
        A = n("834052"),
        R = n("808422"),
        C = n("922673"),
        L = n("49111");

    function O(e) {
        var t;
        let {
            speaker: n,
            role: r,
            user: i,
            userNick: l,
            connectedOn: u,
            voiceState: a,
            type: o
        } = e, d = a.selfMute ? "\x01" : "\x00", E = a.selfVideo ? "\x00" : "\x01", _ = "".concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, "0");
        return "".concat(n ? "\x00" : "\x01").concat("STREAM" === o ? "\x00" : "\x01").concat(d).concat(E).concat(_).concat(u).concat((0, s.default)(l, i))
    }

    function h(e) {
        let {
            user: t,
            voiceState: n
        } = e, r = n.requestToSpeakTimestamp;
        return null == r ? t.id : "".concat(Date.parse(r)).concat(t.id)
    }

    function P(e) {
        return e === R.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === R.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
    }

    function g(e) {
        let {
            speaker: t,
            role: n,
            rtsState: r,
            blocked: i,
            isFriend: l
        } = e, u = [];
        return P(r) && u.push("ALL_REQUESTED_TO_SPEAK"), r === R.RequestToSpeakStates.REQUESTED_TO_SPEAK && u.push("REQUESTED_TO_SPEAK_ONLY"), t ? u.push("SPEAKER") : (null != n ? u.push(n.id) : u.push("NO_ROLE"), u.push("AUDIENCE")), i && u.push("BLOCKED"), l && u.push("FRIEND"), u
    }(u = r || (r = {})).SPEAKER = "SPEAKER", u.AUDIENCE = "AUDIENCE", u.NO_ROLE = "NO_ROLE", u.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", u.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", u.BLOCKED = "BLOCKED", u.FRIEND = "FRIEND", u.SELECTED = "SELECTED", u.MEDIA = "MEDIA", (a = i || (i = {})).VOICE = "VOICE", a.STREAM = "STREAM", l = class {
        _getParticipantsForUser(e, t) {
            var n, r;
            let i;
            let l = [],
                u = f.default.getVoiceStateForChannel(this.channelId, e);
            if (null == u) return l;
            let a = T.default.getUser(e);
            if (null == a) return null != this.guildId && A.default.isPublic(this.channelId) && c.default.requestMember(this.guildId, e), l;
            let o = null != t ? t[0] : null,
                s = {
                    user: a,
                    userNick: p.default.getName(this.guildId, this.channelId, a),
                    voiceState: u,
                    role: (0, C.getHighestHoistedRole)(this.guildId, e),
                    speaker: N.default.isSpeaker(e, this.channelId),
                    member: null != this.guildId ? I.default.getMember(this.guildId, e) : null,
                    blocked: S.default.getRelationships()[a.id] === L.RelationshipTypes.BLOCKED,
                    isFriend: S.default.isFriend(a.id),
                    connectedOn: null !== (n = null == o ? void 0 : o.connectedOn) && void 0 !== n ? n : Date.now()
                },
                _ = {
                    ...s,
                    type: "VOICE",
                    id: a.id,
                    rtsState: (0, R.getAudienceRequestToSpeakState)(u)
                };
            l.push(_);
            let O = null !== (r = E.default.getStreamForUser(e, this.guildId)) && void 0 !== r ? r : E.default.getActiveStreamForUser(e, this.guildId);
            if (null != O && O.channelId === this.channelId) {
                let e = (0, d.encodeStreamKey)(O);
                i = {
                    ...s,
                    id: e,
                    type: "STREAM",
                    rtsState: R.RequestToSpeakStates.NONE
                }, l.push(i)
            }
            return l
        }
        updateParticipant(e) {
            let t = this.participants[e],
                n = this._getParticipantsForUser(e, t);
            return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id)
            }), n.forEach(t => {
                this._participantsIndex.set(t.id, t), t.id === e && P(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
            }), this.participants[e] = n, !0)
        }
        rebuild() {
            let e = _.default.getChannel(this.channelId);
            if (null == e || !e.isGuildStageVoice()) return !1;
            let t = new Set(Object.keys(f.default.getVoiceStatesForChannel(e.id)));
            return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), !0
        }
        get version() {
            return this._participantsIndex.version
        }
        size(e) {
            return this._participantsIndex.size(e)
        }
        toArray(e) {
            return this._participantsIndex.values(e, !0)
        }
        getParticipant(e) {
            var t;
            return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
        }
        get requestToSpeakVersion() {
            return this._requestToSpeakIndex.version
        }
        getRequestToSpeakParticipants() {
            return this._requestToSpeakIndex.values(void 0, !0)
        }
        constructor(e) {
            var t;
            this.participants = {}, this._participantsIndex = new o.default(g, O), this._requestToSpeakIndex = new o.default(() => [], h), this.channelId = e, this.guildId = null === (t = _.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
        }
    }
}