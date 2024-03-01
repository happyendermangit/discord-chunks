function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var a = n("446674"),
        l = n("913144"),
        s = n("149022"),
        i = n("884351"),
        r = n("845579"),
        u = n("377253");
    let d = {},
        o = {};
    class c extends a.default.Store {
        isEditing(e, t) {
            var n;
            return (null === (n = d[e]) || void 0 === n ? void 0 : n.messageId) === t
        }
        isEditingAny(e) {
            return null != d[e]
        }
        getEditingTextValue(e) {
            var t;
            return null === (t = d[e]) || void 0 === t ? void 0 : t.textValue
        }
        getEditingRichValue(e) {
            var t;
            return null === (t = d[e]) || void 0 === t ? void 0 : t.richValue
        }
        getEditingMessageId(e) {
            var t;
            return null === (t = d[e]) || void 0 === t ? void 0 : t.messageId
        }
        getEditingMessage(e) {
            let t = d[e];
            return null != t && null != t.messageId ? u.default.getMessage(e, t.messageId) : null
        }
        getEditActionSource(e) {
            return o[e]
        }
    }
    c.displayName = "EditMessageStore";
    var E = new c(l.default, {
        MESSAGE_START_EDIT: function(e) {
            let {
                channelId: t,
                messageId: n,
                content: a,
                source: l
            } = e, u = r.UseLegacyChatInput.getSetting(), c = i.default.unparse(a, t);
            d[t] = {
                channelId: t,
                messageId: n,
                textValue: c,
                richValue: (0, s.toRichValue)(u ? c : a)
            }, o[t] = l
        },
        MESSAGE_UPDATE_EDIT: function(e) {
            let {
                channelId: t,
                textValue: n,
                richValue: a
            } = e, l = d[t];
            if (null == l) return !1;
            d[t] = {
                ...l,
                textValue: n,
                richValue: a
            }
        },
        MESSAGE_END_EDIT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t || null == d[t]) return !1;
            delete d[t], delete o[t]
        }
    })
}