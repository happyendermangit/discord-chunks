function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        DSN: function() {
            return i
        },
        default: function() {
            return I
        }
    }), E("222007"), E("70102");
    var t = E("303167"),
        o = E("423670"),
        n = E("773336"),
        r = E("50885");
    let i = "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984";

    function a() {
        var e, _, E, t, o, i;
        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        n.isPlatformEmbedded && r.default.updateCrashReporter({
            user_id: null !== (e = a.id) && void 0 !== e ? e : "",
            username: null !== (_ = a.username) && void 0 !== _ ? _ : "",
            email: null !== (E = a.email) && void 0 !== E ? E : "",
            sentry: {
                user: {
                    id: null !== (t = a.id) && void 0 !== t ? t : "",
                    username: null !== (o = a.username) && void 0 !== o ? o : "",
                    email: null !== (i = a.email) && void 0 !== i ? i : ""
                }
            }
        })
    }
    var I = {
        setUser(e, _, E, t) {
            let o = {
                id: e,
                username: _,
                email: E,
                staff: t
            };
            null != window.DiscordSentry && window.DiscordSentry.configureScope(e => {
                e.setUser(o)
            }), a(o)
        },
        clearUser() {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(e => {
                e.setUser(null)
            }), a()
        },
        setTags(e) {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(_ => {
                _.setTags(e)
            })
        },
        setExtra(e) {
            null != window.DiscordSentry && window.DiscordSentry.configureScope(_ => {
                _.setExtras(e)
            })
        },
        captureException(e, _) {
            let E = (0, o.getUpdatedOptions)(_);
            null != window.DiscordSentry && window.DiscordSentry.withScope(_ => {
                null != E.tags && _.setTags(E.tags), _.setExtras(E.extra), window.DiscordSentry.captureException(e)
            })
        },
        captureCrash(e, _) {
            let E;
            let t = (0, o.getUpdatedOptions)(_);
            return null != window.DiscordSentry && window.DiscordSentry.withScope(_ => {
                _.setExtras(t.extra), _.setTag("crash", "true"), _.setLevel("fatal"), _.addEventProcessor(e => {
                    var _, E;
                    let t = null === (E = e.exception) || void 0 === E ? void 0 : null === (_ = E.values) || void 0 === _ ? void 0 : _[0];
                    return null != t && (t.mechanism = {
                        ...t.mechanism,
                        handled: !1
                    }), e
                }), E = window.DiscordSentry.captureException(e)
            }), E
        },
        captureMessage(e, _) {
            let E = (0, o.getUpdatedOptions)(_);
            null != window.DiscordSentry && window.DiscordSentry.withScope(_ => {
                null != E.tags && _.setTags(E.tags), _.setExtras(E.extra), window.DiscordSentry.captureMessage(e)
            })
        },
        addBreadcrumb(e) {
            (0, t.default)(e)
        },
        profiledRootComponent: e => e,
        crash() {
            throw Error("crash")
        }
    }
}