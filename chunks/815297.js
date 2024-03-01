function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createNonce: function() {
            return o
        },
        userRecordToServer: function() {
            return c
        },
        default: function() {
            return E
        },
        createBotMessage: function() {
            return _
        }
    }), n("702976"), n("424973");
    var a = n("627445"),
        l = n.n(a),
        s = n("256572"),
        i = n("766274"),
        r = n("697218"),
        u = n("299039"),
        d = n("49111");

    function o() {
        return u.default.fromTimestamp(Date.now())
    }

    function c(e) {
        let {
            id: t,
            username: n,
            avatar: a,
            discriminator: l,
            bot: s,
            globalName: i
        } = e;
        return {
            id: t,
            username: n,
            avatar: a,
            discriminator: l,
            bot: s,
            global_name: i
        }
    }

    function E(e) {
        let {
            channelId: t,
            content: n,
            tts: a = !1,
            type: u = d.MessageTypes.DEFAULT,
            messageReference: E,
            allowedMentions: _,
            author: f,
            flags: g,
            nonce: S,
            poll: h
        } = e, m = [];
        if (u === d.MessageTypes.REPLY && (l(null != E, "Replies must have a message reference"), null == _ || _.replied_user)) {
            let e = s.default.getMessageByReference(E);
            (null == e ? void 0 : e.state) === s.ReferencedMessageState.LOADED && m.push(c(e.message.author))
        }
        return null == f && (f = r.default.getCurrentUser()), f instanceof i.default && (f = c(f)), l(null != f, "createMessage: author cannot be undefined"), {
            id: null != S ? S : o(),
            type: u,
            content: n,
            channel_id: t,
            author: f,
            attachments: [],
            embeds: [],
            pinned: !1,
            mentions: m,
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: d.MessageStates.SENDING,
            tts: a,
            message_reference: E,
            flags: g,
            nonce: S,
            poll: h
        }
    }

    function _(e) {
        let {
            messageId: t,
            channelId: n,
            content: a,
            embeds: l,
            loggingName: s
        } = e;
        return {
            id: null != t ? t : o(),
            type: d.MessageTypes.DEFAULT,
            flags: d.MessageFlags.EPHEMERAL,
            content: a,
            channel_id: n,
            author: {
                id: d.LOCAL_BOT_ID,
                username: "Clyde",
                discriminator: d.NON_USER_BOT_DISCRIMINATOR,
                avatar: "clyde",
                bot: !0
            },
            attachments: [],
            embeds: null != l ? l : [],
            pinned: !1,
            mentions: [],
            mention_channels: [],
            mention_roles: [],
            mention_everyone: !1,
            timestamp: new Date().toISOString(),
            state: d.MessageStates.SENT,
            tts: !1,
            loggingName: s
        }
    }
}