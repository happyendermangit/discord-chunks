function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getInteractionTimeoutTimestamp: function() {
            return _
        },
        executeMessageComponentInteraction: function() {
            return T
        },
        executePrimaryEntryPointInteraction: function() {
            return C
        },
        handleInteractionResponse: function() {
            return h
        },
        InteractionStatusViewState: function() {
            return a
        },
        getInteractionStatusViewState: function() {
            return N
        },
        canRetryInteractionData: function() {
            return D
        }
    }), n("222007");
    var a, i, l = n("872717"),
        r = n("913144"),
        u = n("819689"),
        d = n("798609"),
        o = n("263024"),
        c = n("271938"),
        s = n("299039"),
        E = n("274800"),
        p = n("809810"),
        I = n("3765"),
        f = n("606981"),
        A = n("49111");

    function _(t) {
        return null == t || "" === t || Number.isNaN(t) ? Date.now() : s.default.extractTimestamp(t) + 9e5
    }
    let T = async t => {
        let {
            componentType: e,
            messageId: n,
            messageFlags: a,
            customId: i,
            indices: r,
            applicationId: u,
            channelId: I,
            guildId: f,
            localState: _
        } = t, T = s.default.fromTimestamp(Date.now());
        if (!p.default.canQueueInteraction(n, T)) return;
        await o.default.unarchiveThreadIfNecessary(I), (0, E.addQueued)(T, {
            messageId: n,
            data: {
                interactionType: d.InteractionTypes.MESSAGE_COMPONENT,
                customId: i,
                indices: r
            },
            onFailure: (t, e) => y(I, t, e)
        }), null != _ && (0, E.queueInteractionComponentState)(n, T, _, r);
        let C = {
            type: d.InteractionTypes.MESSAGE_COMPONENT,
            nonce: T,
            guild_id: f,
            channel_id: I,
            message_flags: a,
            message_id: n,
            application_id: u,
            session_id: c.default.getSessionId(),
            data: {
                component_type: e,
                custom_id: i,
                ... function(t) {
                    if (null == t) return null;
                    if (t.type === d.ComponentType.STRING_SELECT || t.type === d.ComponentType.INPUT_TEXT) return t;
                    let e = t.selectedOptions.map(t => t.value);
                    return {
                        type: t.type,
                        values: e
                    }
                }(_)
            }
        };
        await l.default.post({
            url: A.Endpoints.INTERACTIONS,
            body: C,
            timeout: 3e3
        }, t => {
            h(T, I, f, t)
        })
    }, C = async t => {
        let {
            applicationId: e,
            channelId: n,
            guildId: a
        } = t, i = s.default.fromTimestamp(Date.now()), r = {
            type: d.InteractionTypes.APPLICATION_COMMAND,
            nonce: i,
            guild_id: a,
            channel_id: n,
            application_id: e,
            session_id: c.default.getSessionId(),
            data: {
                type: d.ApplicationCommandType.PRIMARY_ENTRY_POINT
            }
        };
        await l.default.post({
            url: A.Endpoints.INTERACTIONS,
            body: r,
            timeout: 3e3
        }, t => {
            h(i, n, null != a ? a : null, t)
        })
    }, y = (t, e, n) => {
        null == n && null != e && u.default.sendClydeError(t, e)
    }, h = (t, e, n, a) => {
        if (!a.ok) {
            if (!a.hasErr) {
                var i;
                if (a.status >= 400 && a.status < 500 && a.body) {
                    if (a.body.code === A.AbortCodes.INVALID_FORM_BODY && a.body.errors) {
                        let i = (0, f.getFirstSkemaError)(a.body.errors);
                        null != i && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === i.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === i.code) && r.default.dispatch({
                            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
                            channelId: e,
                            guildId: n
                        }), (0, E.setFailed)(t, void 0, null == i ? void 0 : i.message);
                        return
                    }(0, E.setFailed)(t, void 0, a.body.message);
                    return
                }(0, E.setFailed)(t, null === (i = a.body) || void 0 === i ? void 0 : i.code);
                return
            }(0, E.setFailed)(t)
        }
    };
    (i = a || (a = {}))[i.SENDING = 0] = "SENDING", i[i.CREATED = 1] = "CREATED", i[i.FAILED = 2] = "FAILED", i[i.TIMED_OUT = 3] = "TIMED_OUT";
    let N = (t, e) => {
        var n;
        let a = null == e ? void 0 : e.state,
            i = t.state === A.MessageStates.SENT && _(t.id) < Date.now();
        let l = t.state === A.MessageStates.SEND_FAILED && (null == (n = t.id) || "" === n || Number.isNaN(n) ? Date.now() : s.default.extractTimestamp(n) + 3e3) < Date.now(),
            r = (null == e ? void 0 : e.data.interactionType) === d.InteractionTypes.APPLICATION_COMMAND,
            u = t.isCommandType();
        if (r && a === I.InteractionState.QUEUED || u && t.state === A.MessageStates.SENDING && null != e) return 0;
        if (r && a === I.InteractionState.CREATED || t.hasFlag(A.MessageFlags.LOADING) && !i) return 1;
        if (null != t.interaction && t.hasFlag(A.MessageFlags.LOADING) && i) return 3;
        else if (null != t.interaction && !t.hasFlag(A.MessageFlags.LOADING) && l) return 3;
        else if (u && t.state === A.MessageStates.SEND_FAILED) return 2
    };

    function D(t) {
        let e = t.options;
        for (;
            (null == e ? void 0 : e.length) === 1 && (e[0].type === d.ApplicationCommandOptionType.SUB_COMMAND_GROUP || e[0].type === d.ApplicationCommandOptionType.SUB_COMMAND);) e = e[0].options;
        for (let t of null != e ? e : [])
            if (t.type === d.ApplicationCommandOptionType.ATTACHMENT) return !1;
        return !0
    }
}