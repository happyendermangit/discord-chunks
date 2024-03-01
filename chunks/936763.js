function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        getDefaultSearchState: function() {
            return d
        },
        GuildMemberSafetySearch: function() {
            return m
        }
    }), r("222007");
    var i = r("969176"),
        n = r.n(i),
        s = r("681937"),
        u = r("509"),
        a = r("299039"),
        l = r("770115");

    function d() {
        return {
            query: "",
            requireUnusualDmActivity: !1,
            requireCommunicationDisabled: !1,
            requireUnusualAccountActivity: !1,
            requireUsernameQuarantined: !1,
            selectedRoleIds: new Set,
            selectedJoinDateOption: {
                optionId: 0,
                afterDate: null,
                beforeDate: null
            },
            selectedAccountAgeOption: {
                optionId: 0,
                afterDate: null,
                beforeDate: null
            },
            selectedJoinSourceType: void 0,
            selectedSourceInviteCode: void 0,
            selectedSort: void 0
        }
    }
    let h = Object.freeze(d());

    function o(e, t) {
        return null != e && (!!e.toLowerCase().includes(t.toLowerCase()) || !1)
    }
    class m {
        get requiresUsernameMatch() {
            return this._searchState.query.trim().length > 0
        }
        reset() {
            this._searchState = d(), this.hasDefaultQuery = !0
        }
        updateSearchState(e) {
            return this._searchState = {
                ...this._searchState,
                ...e
            }, this.hasDefaultQuery = n(this._searchState, h), !0
        }
        resetSearchState() {
            return !this.hasDefaultQuery && (this._searchState = d(), this.hasDefaultQuery = !0, !0)
        }
        getSearchState() {
            return this._searchState
        }
        isMemberIncludedInSearchResults(e) {
            let {
                query: t,
                requireUnusualDmActivity: r,
                requireCommunicationDisabled: i,
                requireUnusualAccountActivity: n,
                requireUsernameQuarantined: d,
                selectedRoleIds: h,
                selectedJoinDateOption: m,
                selectedAccountAgeOption: _,
                selectedSourceInviteCode: c,
                selectedJoinSourceType: M
            } = this._searchState;
            if (t.length > 0 && ! function(e, t) {
                    if ("" === t.trim()) return !1;
                    let [r, i] = (0, l.splitQuery)(t);
                    for (let t of i)
                        if (e.userId === t) return !0;
                    for (let t of r)
                        if (o(e.nick, t)) return !0;
                    if (null == e.user) return !1;
                    let {
                        globalName: n,
                        username: s
                    } = e.user;
                    for (let e of r)
                        if (o(s, e)) return !0;
                    for (let e of r)
                        if (o(n, e)) return !0;
                    return !1
                }(e, t)) return !1;
            if (h.size > 0) {
                var S, I;
                if (S = e, !(0 !== (I = h).size && Array.from(I).every(e => S.roles.includes(e)))) return !1
            }
            if (null != m.afterDate && e.joinedAtTimestamp < m.afterDate || null != m.beforeDate && e.joinedAtTimestamp > m.beforeDate || null != _.afterDate && a.default.extractTimestamp(e.userId) < _.afterDate || null != _.beforeDate && a.default.extractTimestamp(e.userId) > _.beforeDate || null != c && e.sourceInviteCode !== c || null != M && e.joinSourceType !== M) return !1;
            if (r || i || n || d) return !!(r && e.hasUnusualDmActivity || i && (0, u.isMemberCommunicationDisabled)(e) || n && e.hasUnusualAccountActivity || d && (0, s.hasAutomodQuarantinedProfile)(e)) || !1;
            return !0
        }
        constructor(e) {
            this.guildId = e, this._searchState = d(), this.hasDefaultQuery = !0
        }
    }
}