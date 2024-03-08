function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getUserAvatarURLForPomelo: function() {
            return E
        },
        getDefaultPomelo: function() {
            return _
        },
        shouldSkipToEditUsername: function() {
            return m
        },
        formatPomeloForEditing: function() {
            return C
        },
        getMemberSince: function() {
            return p
        },
        formatUsernameLiveCheckValidation: function() {
            return I
        },
        getLocalizedForcedUUDate: function() {
            return g
        }
    }), n("781738"), n("222007"), n("794252");
    var i = n("866227"),
        l = n.n(i),
        s = n("506838"),
        r = n("315102"),
        a = n("299039"),
        u = n("159885"),
        d = n("644417"),
        o = n("935583"),
        c = n("782340");

    function E(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return r.default.getUserAvatarURL({
            id: e.id,
            avatar: e.avatar,
            bot: e.bot,
            discriminator: "0000"
        }, t, 80)
    }

    function _(e) {
        let t = (0, u.stripDiacritics)(e.username).replace(o.dirtyChars, "").replace(o.coalescePeriods, ".").toLowerCase();
        return "".concat(t).concat(e.discriminator).substring(0, 32)
    }
    let f = ["@", "#", ":"],
        h = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
        S = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

    function m(e) {
        var t, n;
        let i = e.username.toLowerCase();
        if ((t = i, n = o.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !n.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
        for (let e of f)
            if (i.includes(e)) return !0;
        for (let e of S)
            if (i === e.toLowerCase()) return !0;
        for (let e of h)
            if (i.includes(e.toLowerCase())) return !0;
        return !1
    }

    function C(e) {
        return e.toLowerCase().replace(/\s/g, "").replace("@", "")
    }

    function p(e) {
        let t = a.default.extractTimestamp(e);
        try {
            return l(new Date(t)).format("MMM DD, YYYY")
        } catch (e) {}
        return null
    }

    function I(e) {
        return (0, s.match)(e).with({
            rateLimited: !0
        }, () => ({
            type: d.NameValidationState.RATE_LIMIT,
            message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
        })).with({
            error: s.P.not(s.P.nullish)
        }, e => {
            let {
                error: t
            } = e;
            return {
                type: d.NameValidationState.ERROR,
                message: t
            }
        }).with({
            taken: !1
        }, () => ({
            type: d.NameValidationState.AVAILABLE,
            message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
        })).with({
            taken: !0
        }, () => ({
            type: d.NameValidationState.ERROR,
            message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
        })).with({
            error: s.P.nullish
        }, () => ({
            type: d.NameValidationState.INTERNAL_ERROR,
            message: ""
        })).otherwise(() => void 0)
    }

    function g(e) {
        let t = new Date(2024, 2, 4);
        return t.toLocaleDateString(e, {
            month: "long",
            day: "numeric",
            year: "numeric"
        })
    }
}