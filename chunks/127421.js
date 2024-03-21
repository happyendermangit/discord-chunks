function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        searchAllGuildMembers: function() {
            return s
        }
    }), r("70102");
    var n = r("872717"),
        u = r("913144"),
        l = r("448993"),
        a = r("718517"),
        i = r("828434"),
        o = r("49111");
    async function s(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        if (d > 3) throw Error("Unable to search guild members after max retries");
        let {
            autoRetry: c = !0,
            signal: _
        } = r;
        try {
            var E;
            let l = await n.HTTP.post({
                url: o.Endpoints.GUILD_MEMBER_SEARCH(e),
                body: t,
                signal: _
            });
            if (l.status === i.INDEXING_RESPONSE_CODE) {
                if (null == l.body.retry_after) throw Error("Indexing response did not include retry_after");
                if (!c) throw Error("Indexing response received but autoRetry is disabled");
                return await u.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                    guildId: e
                }), await new Promise(e => setTimeout(e, l.body.retry_after * a.default.Millis.SECOND)), s(e, t, r, d + 1)
            }
            return {
                type: i.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                body: {
                    guild_id: (E = l.body).guild_id,
                    members: E.members,
                    page_result_count: E.page_result_count,
                    total_result_count: E.total_result_count
                }
            }
        } catch (t) {
            let e = new l.APIError(t);
            return {
                type: i.GuildMemberSearchResponseType.ERROR,
                body: e
            }
        }
    }
}