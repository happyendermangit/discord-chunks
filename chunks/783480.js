function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return M
        }
    }), n("222007"), n("702976");
    var i = n("77078"),
        l = n("913144"),
        a = n("295426"),
        s = n("819689"),
        r = n("81594"),
        o = n("336522"),
        u = n("448993"),
        d = n("979911"),
        c = n("282928"),
        f = n("966724"),
        p = n("681736"),
        m = n("447435"),
        h = n("600798"),
        x = n("692038"),
        E = n("815297"),
        y = n("168730"),
        g = n("562228"),
        S = n("529805"),
        C = n("685841"),
        _ = n("804888"),
        T = n("474643"),
        I = n("585722"),
        v = n("568734"),
        A = n("305515"),
        N = n("49111"),
        R = n("782340");
    async function O(e) {
        var t, n, i;
        let c, {
                channelId: f,
                uploads: O,
                draftType: M,
                parsedMessage: k,
                options: L = {},
                raiseEndpointErrors: P = !1
            } = e,
            b = new p.default(N.Endpoints.MESSAGES(f)),
            j = new A.Future,
            U = {
                content: "",
                nonce: "",
                channel_id: f,
                type: N.MessageTypes.DEFAULT,
                sticker_ids: null == L ? void 0 : L.stickerIds,
                poll: null == L ? void 0 : L.poll
            };
        null != k && (U.content = null == k ? void 0 : k.content);
        let D = C.default.getPendingReply(f);
        null != D && (U.type = N.MessageTypes.REPLY, U.message_reference = L.messageReference, U.allowed_mentions = L.allowedMentions, (0, S.deletePendingReply)(f));
        let [w, F] = (0, _.default)(U.content);
        w && (U.content = F, U.flags = (0, v.addFlag)(null !== (t = U.flags) && void 0 !== t ? t : 0, N.MessageFlags.SUPPRESS_NOTIFICATIONS));
        let G = null !== (n = L.nonce) && void 0 !== n ? n : (0, E.createNonce)(),
            H = (0, E.default)({
                channelId: f,
                content: U.content,
                tts: null !== (i = null == k ? void 0 : k.tts) && void 0 !== i && i,
                type: U.type,
                messageReference: U.message_reference,
                flags: U.flags,
                nonce: G,
                poll: (0, g.createPollServerDataFromCreateRequest)(L.poll)
            });
        return (U.nonce = G, b.on("start", e => {
            c = (0, x.createMessageRecord)({
                ...H,
                id: e.id
            }), l.default.dispatch({
                type: "UPLOAD_START",
                channelId: f,
                file: e,
                message: c,
                uploader: b
            })
        }), b.on("progress", e => {
            l.default.dispatch({
                type: "UPLOAD_PROGRESS",
                channelId: f,
                file: e
            })
        })), b.on("error", (e, t, n, i) => {
            if (l.default.dispatch({
                    type: "UPLOAD_FAIL",
                    channelId: f,
                    file: e,
                    messageRecord: c
                }), (0, y.logMessageSendFailure)({
                    fileItems: e.items,
                    failureCode: t,
                    errorMessage: null == i ? void 0 : i.msg
                }), t === N.AbortCodes.EXPLICIT_CONTENT) {
                s.default.sendExplicitMediaClydeError(f, null == n ? void 0 : n.attachments, m.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                return
            }
            if (t === N.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
                let e = {
                        code: t,
                        message: null == n ? void 0 : n.message
                    },
                    i = null == c ? null : {
                        type: d.MessageDataType.SEND,
                        message: {
                            ...c,
                            channelId: f
                        }
                    };
                (0, o.openUploadError)({
                    title: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: (0, h.getAutomodErrorMessage)(i, e)
                });
                return
            }
            t !== N.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (P ? j.reject(new u.APIError({
                status: t,
                body: null != n ? n : {}
            }, t)) : (0, o.openUploadError)({
                title: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                help: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
            }), "" !== U.content && "" === T.default.getDraft(f, M) && a.default.saveDraft(f, U.content, M), 0 === I.default.getUploadCount(f, M) && r.default.setUploads({
                channelId: f,
                uploads: O,
                draftType: M
            }))
        }), b.on("complete", (e, t) => {
            l.default.dispatch({
                type: "UPLOAD_COMPLETE",
                channelId: f,
                file: e,
                aborted: b._aborted,
                messageRecord: t
            })
        }), await b.uploadFiles(O, U), j.resolve(), j.promise
    }
    var M = {
        instantBatchUpload: function(e) {
            let {
                channelId: t,
                files: n,
                draftType: i,
                isThumbnail: l = !1,
                filesMetadata: a = []
            } = e, s = Array.from(n).map((e, n) => {
                let i = null != a ? a[n] : {};
                return new c.CloudUpload({
                    file: e,
                    platform: f.UploadPlatform.WEB,
                    isThumbnail: l,
                    ...i
                }, t)
            });
            O({
                channelId: t,
                uploads: s,
                draftType: i
            })
        },
        upload: function e(t) {
            let {
                channelId: n,
                file: r,
                draftType: u,
                message: d,
                hasSpoiler: c,
                filename: f
            } = t, h = {
                content: "",
                tts: !1,
                hasSpoiler: c,
                filename: f
            };
            if (null != d) {
                h.content = d.content, h.tts = d.tts, h.channel_id = d.channel_id;
                let e = C.default.getPendingReply(n);
                if (null != e) {
                    let t = s.default.getSendMessageOptionsForReply(e);
                    h.type = N.MessageTypes.REPLY, h.message_reference = t.messageReference, h.allowed_mentions = t.allowedMentions, (0, S.deletePendingReply)(n)
                }
            }
            let x = new p.default(N.Endpoints.MESSAGES(n));
            x.on("start", e => {
                l.default.dispatch({
                    type: "UPLOAD_START",
                    channelId: n,
                    file: e,
                    uploader: x
                })
            }), x.on("progress", e => {
                l.default.dispatch({
                    type: "UPLOAD_PROGRESS",
                    channelId: n,
                    file: e
                })
            }), x.on("error", (t, c, f) => {
                if (l.default.dispatch({
                        type: "UPLOAD_FAIL",
                        channelId: n,
                        file: t
                    }), (0, y.logMessageSendFailure)({
                        fileItems: t.items,
                        failureCode: c
                    }), c === N.AbortCodes.EXPLICIT_CONTENT) {
                    s.default.sendExplicitMediaClydeError(n, null == f ? void 0 : f.attachments, m.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
                    return
                }(0, o.openUploadError)({
                    title: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
                    help: R.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
                        onClick: () => {
                            (0, i.closeModal)(o.UPLOAD_ERROR_MODAL_KEY), e({
                                channelId: n,
                                file: r,
                                draftType: u,
                                message: d
                            })
                        }
                    })
                }), "" !== h.content && "" === T.default.getDraft(n, u) && a.default.saveDraft(n, h.content, u)
            }), x.on("complete", e => {
                l.default.dispatch({
                    type: "UPLOAD_COMPLETE",
                    channelId: n,
                    file: e
                })
            }), x.upload(r, h)
        },
        uploadFiles: O,
        cancel(e) {
            if (l.default.dispatch({
                    type: "UPLOAD_CANCEL_REQUEST",
                    file: e
                }), null != e.draftContent && null != e.channelId) {
                let t = T.default.getDraft(e.channelId, T.DraftType.ChannelMessage);
                "" === t && l.default.dispatch({
                    type: "DRAFT_SAVE",
                    channelId: e.channelId,
                    draft: e.draftContent,
                    draftType: T.DraftType.ChannelMessage
                })
            }
        }
    }
}