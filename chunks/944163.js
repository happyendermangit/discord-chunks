function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NO_MEMBER_VERIFICATION_FORM: function() {
            return c
        }
    });
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("246364");
    let c = {
            version: "",
            description: "",
            formFields: []
        },
        E = {};
    class I extends(a = u.default.Store) {
        get(e) {
            if (null != e) return E[e]
        }
        getRulesPrompt(e) {
            var t;
            return l().find(null === (t = E[e]) || void 0 === t ? void 0 : t.formFields, _.isTermsFormField)
        }
    }
    s = "MemberVerificationFormStore", (r = "displayName") in(i = I) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new I(d.default, {
        INVITE_ACCEPT_SUCCESS: function(e) {
            let {
                invite: t
            } = e, {
                member_verification_form: n
            } = t, {
                guild: i
            } = t;
            if (null != i && null != n) {
                var r;
                return E[i.id] = {
                    version: n.version,
                    description: null !== (r = n.description) && void 0 !== r ? r : "",
                    formFields: n.form_fields,
                    guild: i
                }, !0
            }
            return !1
        },
        MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
            let {
                form: t,
                guildId: n
            } = e;
            E[n] = null != t ? t : c
        },
        MEMBER_VERIFICATION_FORM_FETCH_FAIL: function(e) {
            var t;
            let {
                guildId: n
            } = e;
            E[n] = null !== (t = E[n]) && void 0 !== t ? t : c
        },
        GUILD_DELETE: function(e) {
            let {
                guild: t
            } = e;
            delete E[null == t ? void 0 : t.id]
        }
    })
}