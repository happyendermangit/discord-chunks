function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return B
        },
        retryCommandMessage: function() {
            return G
        }
    }), n("424973"), n("222007"), n("881410"), n("686130"), n("781738");
    var i = n("627445"),
        l = n.n(i),
        a = n("913144"),
        o = n("819689"),
        r = n("81594"),
        s = n("798609"),
        u = n("979911"),
        d = n("981112"),
        c = n("716241"),
        p = n("118851"),
        f = n("385976"),
        m = n("274800"),
        _ = n("752598"),
        I = n("815297"),
        C = n("263024"),
        T = n("915639"),
        A = n("305961"),
        E = n("585722"),
        N = n("697218"),
        g = n("254490"),
        h = n("449008"),
        S = n("980134"),
        O = n("507217"),
        M = n("246598"),
        v = n("118200"),
        y = n("240249"),
        D = n("524768"),
        R = n("389153"),
        L = n("317041"),
        P = n("49111"),
        U = n("894488"),
        F = n("782340");
    let b = (e, t) => {
            var n;
            return null == e ? void 0 : null === (n = e.find(e => e.displayName === t)) || void 0 === n ? void 0 : n.value
        },
        H = function(e, t, n) {
            var i, l;
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => e,
                o = e.name === (null === (i = n.autocomplete) || void 0 === i ? void 0 : i.name);
            if (o) return n.autocomplete.query;
            if ("" === t) return null;
            let r = M.default.getAutocompleteLastChoices(n.channel.id, e.name);
            return null != r ? null !== (l = b(r, t)) && void 0 !== l ? l : a(t) : a(t)
        },
        x = e => {
            let t = e.toLowerCase() === L.TRUE_OPTION_NAME.toLowerCase(),
                n = e.toLowerCase() === L.FALSE_OPTION_NAME.toLowerCase();
            return t || n ? t : null
        };
    async function B(e) {
        var t, n, i, o, u, d, f, m, _, I, A, N, g, h, S;
        let {
            command: M,
            optionValues: y,
            context: L,
            commandTargetId: U,
            maxSizeCallback: F,
            commandOrigin: B = D.CommandOrigin.CHAT
        } = e;
        null == L.autocomplete && a.default.dispatch({
            type: "APPLICATION_COMMAND_USED",
            context: L,
            command: M
        }), await C.default.unarchiveThreadIfNecessary(L.channel.id);
        let G = [],
            Y = [],
            W = (0, R.getCommandAttachmentDraftType)(B);
        if (null != M.options)
            for (let e of M.options) {
                if (e.type === s.ApplicationCommandOptionType.SUB_COMMAND || e.type === s.ApplicationCommandOptionType.SUB_COMMAND_GROUP || !(e.name in y)) continue;
                let t = (null === (i = L.autocomplete) || void 0 === i ? void 0 : i.name) === e.name || void 0,
                    n = null;
                if (e.type === s.ApplicationCommandOptionType.STRING) {
                    let i = null !== (u = null === (o = v.getOptionalString(y, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== u ? u : "";
                    n = null != e.choices ? b(e.choices, i) : e.autocomplete ? H(e, i, L) : i, l(null != L.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')), null != n && G.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
                    continue
                }
                if (e.type === s.ApplicationCommandOptionType.ATTACHMENT) {
                    if (null != L.autocomplete) continue;
                    let i = E.default.getUpload(L.channel.id, e.name, W);
                    if (null == i) continue;
                    let l = E.default.getUploads(L.channel.id, W).findIndex(e => i.id === e.id);
                    Y.push(i), n = l, G.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: t
                    });
                    continue
                }
                let a = v.filterEmpty(y[e.name]);
                if (l(null != L.autocomplete || 1 === a.length, 'Option "'.concat(e.name, '" expects a single option type')), null == a[0] && !t) continue;
                let r = null !== (d = a[0]) && void 0 !== d ? d : {
                    type: "text",
                    text: ""
                };
                switch (e.type) {
                    case s.ApplicationCommandOptionType.CHANNEL:
                        if ("channelMention" === r.type) n = r.channelId;
                        else if ("text" === r.type) {
                            if ((0, R.isSnowflake)(r.text)) n = r.text.trim();
                            else {
                                let e = (0, p.resolveApplicationCommandOption)(r.text, null === (f = L.guild) || void 0 === f ? void 0 : f.id, L.channel.id);
                                l((null == e ? void 0 : e.type) === "channelMention", "Failed to resolve ".concat(r.text)), n = e.channelId
                            }
                        }
                        break;
                    case s.ApplicationCommandOptionType.ROLE:
                        if ("roleMention" === r.type) n = r.roleId;
                        else if ("text" === r.type) {
                            if ((0, R.isSnowflake)(r.text)) n = r.text.trim();
                            else {
                                let e = (0, p.resolveApplicationCommandOption)(r.text, null === (m = L.guild) || void 0 === m ? void 0 : m.id, L.channel.id, {
                                    allowUsers: !1
                                });
                                l((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(r.text)), n = e.roleId
                            }
                        } else "textMention" === r.type && "@everyone" === r.text && (n = null === (_ = L.guild) || void 0 === _ ? void 0 : _.id);
                        break;
                    case s.ApplicationCommandOptionType.USER:
                        if ("userMention" === r.type) n = r.userId;
                        else if ("text" === r.type) {
                            if ((0, R.isSnowflake)(r.text)) n = r.text.trim();
                            else {
                                let e = (0, p.resolveApplicationCommandOption)(r.text, null === (I = L.guild) || void 0 === I ? void 0 : I.id, L.channel.id, {
                                    allowRoles: !1
                                });
                                l((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(r.text)), n = e.userId
                            }
                        }
                        break;
                    case s.ApplicationCommandOptionType.MENTIONABLE:
                        if ("userMention" === r.type) n = r.userId;
                        else if ("roleMention" === r.type) n = r.roleId;
                        else if ("textMention" === r.type && "@everyone" === r.text) n = null === (A = L.guild) || void 0 === A ? void 0 : A.id;
                        else if ("text" === r.type) {
                            if ((0, R.isSnowflake)(r.text)) n = r.text.trim();
                            else {
                                let e = (0, p.resolveApplicationCommandOption)(r.text, null === (N = L.guild) || void 0 === N ? void 0 : N.id, L.channel.id);
                                (null == e ? void 0 : e.type) === "userMention" ? n = e.userId: (null == e ? void 0 : e.type) === "roleMention" ? n = e.roleId : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text ? n = null === (g = L.guild) || void 0 === g ? void 0 : g.id : l(!1, "Failed to resolve ".concat(r.text))
                            }
                        }
                        break;
                    case s.ApplicationCommandOptionType.BOOLEAN:
                        "text" === r.type && (n = x(r.text.trim()));
                        break;
                    case s.ApplicationCommandOptionType.INTEGER:
                        if ("text" === r.type) {
                            let t = r.text.trim();
                            n = null != e.choices ? Number(b(e.choices, t)) : e.autocomplete ? H(e, t, L, Number) : Number(v.normalizeNumericString(T.default.locale, t))
                        }
                        break;
                    case s.ApplicationCommandOptionType.NUMBER:
                        if ("text" === r.type) {
                            let t = r.text.trim();
                            n = null != e.choices ? Number(b(e.choices, t)) : e.autocomplete ? H(e, t, L, Number) : Number(v.normalizeNumericString(T.default.locale, t))
                        }
                        break;
                    default:
                        l(!1, "Unsupported option type: ".concat(e.type));
                        continue
                }
                l(null != L.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')), null != n && G.push({
                    type: e.type,
                    name: e.name,
                    value: n,
                    focused: t
                })
            }
        if (null != M.subCommandPath)
            for (let e = M.subCommandPath.length - 1; e >= 0; e -= 1) {
                let {
                    name: t,
                    type: n
                } = M.subCommandPath[e];
                G = [{
                    type: n,
                    name: t,
                    options: G
                }]
            }
        if (null != M.execute) return c.default.trackWithMetadata(P.AnalyticEvents.APPLICATION_COMMAND_USED, {
            command_id: M.id,
            application_id: M.applicationId,
            command_type: M.type,
            location: B === D.CommandOrigin.APPLICATION_LAUNCHER ? D.ApplicationCommandTriggerLocations.APP_LAUNCHER : D.ApplicationCommandTriggerLocations.SLASH_UI
        }), M.execute(G, L);
        if (M.inputType === D.ApplicationCommandInputType.BUILT_IN || M.inputType === D.ApplicationCommandInputType.BUILT_IN_TEXT || M.inputType === D.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return;
        let V = {
            version: M.version,
            id: null !== (h = null === (t = M.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== h ? h : M.id,
            guild_id: M.guildId,
            name: null !== (S = null === (n = M.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== S ? S : M.name,
            type: M.type,
            options: G,
            application_command: M.rootCommand
        };
        null != U && (V.target_id = U), null != L.autocomplete ? (0, O.performAutocomplete)(M, L, V) : (r.default.clearAll(L.channel.id, W), k({
            applicationId: M.applicationId,
            data: V,
            context: L,
            attachments: Y,
            maxSizeCallback: F,
            onMessageSuccess: () => {
                w(y)
            },
            commandDisplayName: M.displayName,
            analytics_location: B === D.CommandOrigin.APPLICATION_LAUNCHER ? D.ApplicationCommandTriggerLocations.APP_LAUNCHER : D.ApplicationCommandTriggerLocations.SLASH_UI
        }))
    }
    let w = e => {
            let t = Object.values(e).flatMap(e => e.map(e => "emoji" === e.type ? {
                name: e.name.replaceAll(":", "")
            } : "customEmoji" === e.type ? f.default.getCustomEmojiById(e.emojiId) : null).filter(h.isNotNullish));
            t.length > 0 && a.default.dispatch({
                type: "EMOJI_TRACK_USAGE",
                emojiUsed: t
            })
        },
        G = (e, t, n) => {
            if (e.isCommandType()) {
                let i = t.guild_id;
                null != e.interactionData && k({
                    applicationId: n,
                    data: e.interactionData,
                    context: {
                        channel: t,
                        guild: null != i ? A.default.getGuild(i) : null
                    }
                })
            }
        },
        k = e => {
            let {
                applicationId: t,
                data: n,
                context: i,
                attachments: l,
                maxSizeCallback: r,
                onMessageSuccess: u,
                commandDisplayName: d,
                analytics_location: c
            } = e, {
                channel: p,
                guild: f
            } = i, _ = p.id, C = null == f ? void 0 : f.id, [T, A] = function(e, t, n) {
                let i = y.getCachedApplicationSection(e.channel, n, t);
                if (null != i) {
                    var l, o, r;
                    let e = null !== (o = null === (l = i.application) || void 0 === l ? void 0 : l.bot) && void 0 !== o ? o : {
                        id: i.id,
                        username: i.name,
                        discriminator: "0000",
                        avatar: null,
                        bot: !0
                    };
                    return a.default.dispatch({
                        type: "STORE_APPLICATION_INTERACTION_FAKE_USER",
                        user: e
                    }), [e, null !== (r = i.application) && void 0 !== r ? r : null]
                }
                return [null, null]
            }(i, t, n.type), E = n.type === s.ApplicationCommandType.CHAT ? P.MessageTypes.CHAT_INPUT_COMMAND : P.MessageTypes.CONTEXT_MENU_COMMAND, g = (0, I.default)({
                channelId: _,
                content: "",
                tts: !1,
                type: E,
                messageReference: void 0,
                allowedMentions: void 0,
                author: null != T ? T : void 0
            });
            g.application = null != A ? A : void 0, g.interaction = {
                id: n.id,
                name: n.name,
                name_localized: d,
                type: s.InteractionTypes.APPLICATION_COMMAND,
                user: (0, I.userRecordToServer)(N.default.getCurrentUser())
            }, g.interaction_data = n;
            let h = {
                    applicationId: t,
                    channelId: _,
                    guildId: C,
                    data: n,
                    nonce: g.id,
                    attachments: l,
                    maxSizeCallback: r,
                    analytics_location: c
                },
                S = (e, t) => {
                    null == t && null != e && o.default.sendClydeError(_, e), a.default.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: g.id,
                        channelId: _,
                        reason: t
                    })
                };
            o.default.receiveMessage(_, g, !0, {
                applicationId: t
            }), m.addQueued(h.nonce, {
                messageId: g.id,
                onCreate: e => {
                    null != g.interaction && (g.interaction.id = e)
                },
                onFailure: (e, t) => S(e, t),
                data: {
                    interactionType: s.InteractionTypes.APPLICATION_COMMAND,
                    channelId: _
                }
            }), null != l ? V(l, h.nonce, C, r).then(e => {
                e && Y(h, u)
            }) : Y(h, u)
        };

    function Y(e, t) {
        u.default.enqueue({
            type: u.MessageDataType.COMMAND,
            message: e
        }, n => {
            var i;
            (0, _.handleInteractionResponse)(e.nonce, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null, n), n.ok && null != t && t()
        })
    }
    async function W(e, t) {
        let n = 0,
            i = 0;
        for (let a of e) {
            var l;
            let e = t ? null !== (l = a.currentSize) && void 0 !== l ? l : 0 : await a.getSize();
            e > i && (i = e), n += e
        }
        return {
            totalSize: n,
            largestUploadedFileSize: i
        }
    }
    async function V(e, t, n, i) {
        let l = (0, g.maxFileSize)(n),
            a = e => {
                null == i || i(l, e), m.setFailed(t, P.AbortCodes.ENTITY_TOO_LARGE, F.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                    maxSize: (0, g.sizeString)(l)
                }))
            },
            {
                totalSize: o,
                largestUploadedFileSize: r
            } = await W(e, !1);
        if (r > Math.max(l, U.DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE) || o > S.MAX_TOTAL_ATTACHMENT_SIZE) return a(r), !1;
        try {
            await (0, d.stageAttachmentFiles)(e)
        } catch {
            m.setFailed(t, void 0, F.default.Messages.UPLOADING_FILES_FAILED.format({
                count: e.length
            }))
        }({
            totalSize: o,
            largestUploadedFileSize: r
        } = await W(e, !0));
        let s = e.some(e => e.error === P.AbortCodes.ENTITY_TOO_LARGE);
        return !s && !(o > S.MAX_TOTAL_ATTACHMENT_SIZE) || (a(r), !1)
    }
}