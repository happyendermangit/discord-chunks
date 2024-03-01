function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        guessGuildModeWithRemoteData: function() {
            return c
        },
        guessGuildModeWithLocalData: function() {
            return m
        }
    }), n("808653");
    var i = n("917351"),
        a = n.n(i),
        s = n("233069"),
        l = n("42203"),
        r = n("319781"),
        o = n("525065"),
        u = n("718517"),
        d = n("380353");

    function c(e, t, n, i, a) {
        var s, r, u, c;
        let m = l.default.getMutableGuildChannelsForGuild(e.id),
            h = i.filter(e => e.channel_id in m),
            g = null !== (s = n.filter(t => t.guild_id === e.id)[0]) && void 0 !== s ? s : {},
            _ = o.default.getMemberCount(e.id),
            S = f("year", i, h, e => {
                var t;
                return Number(null !== (t = e.num_year_opens) && void 0 !== t ? t : 0)
            }),
            p = f("one month", i, h, e => {
                var t;
                return Number(null !== (t = e.num_month_opens) && void 0 !== t ? t : 0)
            }),
            T = f("three month", i, h, e => {
                var t;
                return Number(null !== (t = e.num_three_month_opens) && void 0 !== t ? t : 0)
            }),
            E = f("six month", i, h, e => {
                var t;
                return Number(null !== (t = e.num_six_month_opens) && void 0 !== t ? t : 0)
            }),
            v = [p, T, E, S],
            I = 0,
            N = 0;
        h.forEach(e => {
            var t;
            I++, N += null !== (t = Number(e.num_messages)) && void 0 !== t ? t : 0
        });
        let y = "\n**Pain**:\n- Everyones: ".concat(d.PainLevel[null !== (r = g.everyones) && void 0 !== r ? r : 0], "\n- Messages: ").concat(d.PainLevel[null !== (u = g.messages) && void 0 !== u ? u : 0], "\n- Size: ").concat(_, "\n**Remote**:\n- Channels: ").concat(I, "\n- AllVisits: ").concat(v.map(e => e.totalOpensAcrossAllServers).join(" / "), "\n- GuildVisits: ").concat(v.map(e => e.guildOpens).join(" / "), "\n- Biggest Channel (abs): ").concat(v.map(e => e.biggestChannel).join(" / "), "\n- Biggest Channel (%): ").concat(v.map(e => e.biggestChannelFormatted).join(" / "), "\n- Sent Msgs: ").concat(N, "\n"),
            C = T.guildOpens >= .02 * T.totalOpensAcrossAllServers,
            O = (null !== (c = S.guildOpens) && void 0 !== c ? c : 0) > 0;
        if (g.messages === d.PainLevel.High) {
            if (!a) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y];
            if (!C && O) return [d.Mode.UseGreyDot, C, "UseGreyDot" + y]
        }
        return [d.Mode.KeepAsIs, C, "KeepAsIs" + y]
    }

    function f(e, t, n, i) {
        let s = t.reduce((e, t) => e + i(t), 0),
            l = n.reduce((e, t) => e + i(t), 0),
            r = a.sortBy(n, i).reverse()[0],
            o = null == r ? 0 : i(r),
            u = (o / l * 100).toFixed(1);
        return {
            label: e,
            totalOpensAcrossAllServers: s,
            guildOpens: l,
            biggestChannel: o,
            biggestChannelFormatted: u
        }
    }

    function m(e, t) {
        var n, i;
        let a = null !== (n = t.filter(t => t.guild_id === e.id)[0]) && void 0 !== n ? n : {},
            l = null !== (i = o.default.getMemberCount(e.id)) && void 0 !== i ? i : 0,
            c = Date.now() - u.default.Millis.DAYS_30,
            f = r.default.getFrequentlyWithoutFetchingLatest().filter(t => t instanceof s.ChannelRecordBase && t.guild_id === e.id),
            m = f.filter(e => {
                var t, n;
                let i = null !== (n = null === (t = r.default.frecencyWithoutFetchingLatest.usageHistory[e.id]) || void 0 === t ? void 0 : t.recentUses) && void 0 !== n ? n : [];
                return 0 !== i.length && i[i.length - 1] >= c
            }),
            h = m.length >= 5,
            g = f.reduce((e, t) => {
                var n, i;
                return e + (null !== (i = null === (n = r.default.frecencyWithoutFetchingLatest.usageHistory[t.id]) || void 0 === n ? void 0 : n.totalUses) && void 0 !== i ? i : 0)
            }, 0),
            _ = "\n- **Local**:\n    - Guild Visits: ".concat(g, "\n    - Channels: ").concat(f.length, "\n    - Recent Channels: ").concat(m.length, "\n");
        return a.messages === d.PainLevel.High || l > 1e3 ? [d.Mode.UseGreyDot, h, "SuggestGreyDot" + _] : [d.Mode.KeepAsIs, h, "KeepAsIs" + _]
    }
}