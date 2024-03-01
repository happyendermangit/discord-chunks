function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return l
        }
    }), s("808653"), s("222007"), s("781738"), s("506083"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("424973");
    var l, u = s("917351"),
        i = s.n(u),
        n = s("404828"),
        r = s.n(n),
        a = s("872173"),
        o = s("233069"),
        h = s("813006"),
        d = s("741347"),
        c = s("42203"),
        p = s("319781"),
        _ = s("923959"),
        f = s("27618"),
        R = s("697218"),
        y = s("25292"),
        E = s("651879"),
        C = s("253981"),
        g = s("447909"),
        T = s("195547"),
        m = s("375822"),
        A = s("49111");
    let U = Object.freeze({});

    function I(e, t) {
        var s, l;
        if (!t.frecencyBoosters) return {};
        let u = p.default.getFrequentlyWithoutFetchingLatest(),
            i = u.reduce((e, t) => {
                let {
                    id: s
                } = t, l = p.default.getScoreWithoutFetchingLatest(s);
                return l > e ? l : e
            }, 0),
            n = [];
        switch (e) {
            case m.AutocompleterResultTypes.GUILD:
                n = u.filter(e => e instanceof h.default);
                break;
            case m.AutocompleterResultTypes.USER:
                n = u.filter(e => e instanceof o.ChannelRecordBase && e.type === A.ChannelTypes.DM);
                break;
            case m.AutocompleterResultTypes.GROUP_DM:
                n = u.filter(e => e instanceof o.ChannelRecordBase && e.isMultiUserDM());
                break;
            case m.AutocompleterResultTypes.TEXT_CHANNEL:
                n = u.filter(e => e instanceof o.ChannelRecordBase && (0, o.isGuildSelectableChannelType)(e.type));
                break;
            case m.AutocompleterResultTypes.VOICE_CHANNEL:
                n = u.filter(e => e instanceof o.ChannelRecordBase && e.isGuildVocal())
        }
        let r = {};
        for (let t of n) {
            let {
                id: s
            } = t, l = p.default.getScoreWithoutFetchingLatest(s);
            if (e === m.AutocompleterResultTypes.USER && t instanceof o.PrivateChannelRecord) {
                if (t.type === A.ChannelTypes.DM) r[s = t.getRecipientId()] = 1 + l / i;
                else if (t.type === A.ChannelTypes.GROUP_DM) {
                    let e = t.recipients.length;
                    for (let s of t.recipients) r[s] = 1 + l / i * (1 / e)
                }
            } else r[s] = 1 + l / i
        }
        let a = f.default.getFriendIDs();
        for (let e of a) r[e] = (null !== (s = r[e]) && void 0 !== s ? s : 1) + .2;
        let d = c.default.getDMUserIds();
        for (let e of d) r[e] = (null !== (l = r[e]) && void 0 !== l ? l : 1) + .1;
        return r
    }
    l = class {
        createSearchContext() {
            null == this.userSearchContext && (this.userSearchContext = g.default.getSearchContext(this.parseUserResults, this._limit))
        }
        setLimit(e) {
            let {
                userSearchContext: t
            } = this;
            this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
        }
        setResultTypes(e) {
            this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(m.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(m.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(m.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(m.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(m.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(m.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(m.AutocompleterResultTypes.LINK) ? this._linkResults : []
        }
        _include(e) {
            return null == this.resultTypes || this.resultTypes.has(e)
        }
        _isAsyncSearch() {
            return this._include(m.AutocompleterResultTypes.USER)
        }
        setOptions(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t ? this.options = {
                ...this.options,
                ...e
            } : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith("user:") ? e.replace("user:", "") : "").filter(e => "" !== e) : this._userBlacklist = null
        }
        search(e, t) {
            if (this.query = e, "" === e.trim()) {
                this.clear(), this.updateAllResults();
                return
            }
            let s = this.options.frecencyBoosters ? a.FrecencyUserSettingsActionCreators.loadIfNecessary() : Promise.resolve();
            s.finally(() => {
                this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit), this._linkResults = this.queryLink(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, 300)) : this.updateAllResults()
            })
        }
        clear() {
            let {
                userSearchContext: e
            } = this;
            null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = []
        }
        clean() {
            this.clear(), this.destroy(), this.query = "", this.updateAllResults()
        }
        pause() {
            var e, t;
            null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
        }
        resume() {
            var e, t;
            null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
        }
        destroy() {
            let {
                userSearchContext: e
            } = this;
            null != e && (e.destroy(), this.userSearchContext = null)
        }
        queryTextChannels(e, t) {
            if (!this._include(m.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
            let s = I(m.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
                {
                    blacklist: l
                } = this.options;
            return y.default.queryChannels({
                query: e,
                guildId: null,
                limit: t,
                fuzzy: !0,
                filter: null != l ? e => !l.has("channel:".concat(e.id)) : void 0,
                boosters: s
            })
        }
        queryVoiceChannels(e, t) {
            if (!this._include(m.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
            let {
                voiceChannelGuildFilter: s
            } = this.options, l = I(m.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
            return y.default.queryChannels({
                query: e,
                guildId: s,
                limit: t,
                fuzzy: !0,
                type: _.GUILD_VOCAL_CHANNELS_KEY,
                boosters: l
            })
        }
        queryGuilds(e, t) {
            if (!this._include(m.AutocompleterResultTypes.GUILD)) return [];
            let s = I(m.AutocompleterResultTypes.GUILD, this.options),
                {
                    blacklist: l
                } = this.options;
            return y.default.queryGuilds({
                query: e,
                limit: t,
                fuzzy: !0,
                filter: null != l ? e => !l.has("guild:".concat(e.id)) : void 0,
                boosters: s
            })
        }
        queryUsers(e, t, s) {
            let {
                userSearchContext: l
            } = this;
            if (null == l || !this._include(m.AutocompleterResultTypes.USER)) return;
            let {
                userFilters: u
            } = this.options;
            void 0 !== t && E.default.requestMembers(t, e, 100), l.setLimit(s), l.setQuery(e, u, this._userBlacklist, I(m.AutocompleterResultTypes.USER, this.options))
        }
        queryGroupDMs(e, t) {
            if (!this._include(m.AutocompleterResultTypes.GROUP_DM)) return [];
            let {
                blacklist: s
            } = this.options, l = I(m.AutocompleterResultTypes.GROUP_DM, this.options);
            return y.default.queryGroupDMs({
                query: e,
                limit: t,
                fuzzy: !0,
                filter: null != s ? e => !s.has("channel:".concat(e.id)) : void 0,
                boosters: l
            })
        }
        queryApplications(e, t) {
            return this._include(m.AutocompleterResultTypes.APPLICATION) ? y.default.queryApplications({
                query: e,
                limit: t,
                fuzzy: !0
            }) : []
        }
        queryLink(e, t) {
            let s;
            if (!this._include(m.AutocompleterResultTypes.LINK)) return [];
            let l = r.sanitizeUrl(e);
            try {
                s = new URL(l)
            } catch (e) {
                return []
            }
            let {
                pathname: u,
                hostname: i = "",
                host: n
            } = s, a = C.default.isDiscordHostname(i) || window.location.host === n;
            return null !== u && a && C.default.isAppRoute(u) ? [{
                type: m.AutocompleterResultTypes.LINK,
                record: d.default.fromPath(u),
                score: 1
            }] : []
        }
        constructor(e, t, s = 100, l = U) {
            this.query = "", this.options = U, this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = [], this._userBlacklist = null, this.parseUserResults = e => {
                let {
                    results: t
                } = e;
                if (this._include(m.AutocompleterResultTypes.USER)) {
                    for (let {
                            id: e,
                            score: s,
                            comparator: l
                        }
                        of(this._userResults = [], t)) {
                        let t = R.default.getUser(e);
                        null != t && this._userResults.push({
                            type: m.AutocompleterResultTypes.USER,
                            record: t,
                            score: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    t = arguments.length > 1 ? arguments[1] : void 0;
                                return 1e3 * e * (null != t ? t : 1)
                            }(s),
                            comparator: null != l ? l : void 0
                        })
                    }
                    this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults()
                }
            }, this.updateAllResults = () => {
                clearTimeout(this._asyncTimeout), this.results = i([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(T.default).value(), this.onResultsChange(this.results, this.query)
            }, this.onResultsChange = e, this.setOptions(l, !0), this._limit = s, this.createSearchContext(), this.setResultTypes(t)
        }
    }
}