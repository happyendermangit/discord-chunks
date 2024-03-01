function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("186188"),
        r = n("785217"),
        o = n("165555"),
        u = n("919163");

    function d(e, t, n) {
        let {
            attributes: i,
            children: o,
            element: d
        } = e;
        switch (d.type) {
            case "line":
                var f;
                if (null === (f = d.codeBlockState) || void 0 === f ? void 0 : f.isInCodeBlock) return (0, l.jsx)("div", {
                    className: r.codeLine,
                    spellCheck: null == d.codeBlockState || null == d.codeBlockState.lang,
                    ...i,
                    children: o
                });
                return (0, l.jsx)("div", {
                    ...i,
                    children: o
                });
            case "blockQuote": {
                let e = a(u.blockquoteContainer, u.slateBlockquoteContainer);
                return (0, l.jsxs)("div", {
                    ...i,
                    className: e,
                    children: [(0, l.jsx)("span", {
                        contentEditable: !1,
                        className: u.blockquoteDivider
                    }), (0, l.jsx)("blockquote", {
                        children: o
                    })]
                })
            }
            case "emoji":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.Emoji, {
                        emoji: d.emoji
                    }), o]
                });
            case "customEmoji":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.CustomEmoji, {
                        emoji: d.emoji
                    }), o]
                });
            case "textMention":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.TextMention, {
                        text: d.name,
                        channelId: n,
                        guildId: t
                    }), o]
                });
            case "userMention":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.UserMention, {
                        id: d.userId,
                        channelId: n,
                        guildId: t
                    }), o]
                });
            case "roleMention":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.RoleMention, {
                        id: d.roleId,
                        guildId: t
                    }), o]
                });
            case "channelMention":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.ChannelMention, {
                        id: d.channelId
                    }), o]
                });
            case "staticRouteLink":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.StaticRouteMention, {
                        id: d.channelId
                    }), o]
                });
            case "soundboard":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.SoundboardMention, {
                        id: d.soundId
                    }), o]
                });
            case "commandMention":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.CommandMention, {
                        text: d.commandName,
                        id: d.commandId
                    }), o]
                });
            case "timestamp":
                return (0, l.jsxs)(c, {
                    attributes: i,
                    children: [(0, l.jsx)(s.Timestamp, {
                        timestamp: d.parsed
                    }), o]
                });
            default:
                return null
        }
    }
    let c = e => {
        let {
            className: t,
            attributes: n,
            children: i
        } = e, s = a(o.inlineElement, o.inlineVoid, t);
        return (0, l.jsx)("span", {
            ...n,
            className: s,
            contentEditable: !1,
            children: i
        })
    }
}