function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("145079"),
        o = n("618927"),
        u = n("158998"),
        d = n("777003"),
        c = n("782340"),
        f = n("918829");

    function m(e) {
        let {
            user: t,
            shouldCopyOnClick: n,
            nickname: i,
            pronouns: m,
            usernameIcon: p,
            identityCTA: h,
            className: E,
            isTryItOut: g = !1,
            lastSection: C
        } = e;
        return (0, l.jsx)(d.default, {
            className: a(f.container, E),
            lastSection: C,
            children: (0, l.jsxs)("div", {
                className: n ? f.copiableNameTag : void 0,
                children: [(0, l.jsx)(o.CopiableField, {
                    className: f.copiableField,
                    copyMetaData: "User Tag",
                    copyTooltip: c.default.Messages.ACCOUNT_CLICK_TO_COPY,
                    copyValue: u.default.getUserTag(t, {
                        decoration: "never",
                        identifiable: "always"
                    }),
                    showCopyIcon: !0,
                    disableCopy: !n,
                    children: (0, l.jsxs)("div", {
                        className: f.userText,
                        children: [null != i ? (0, l.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            className: f.nickname,
                            children: i
                        }) : null, (0, l.jsx)(r.default, {
                            usernameIcon: p,
                            user: t,
                            forceUsername: !0,
                            forcePomelo: g,
                            className: null == i ? f.userTagNoNickname : f.userTagWithNickname,
                            usernameClass: null == i ? f.userTagUsernameNoNickname : f.userTagUsernameBase,
                            discriminatorClass: null == i ? f.userTagDiscriminatorNoNickname : f.discrimBase,
                            botClass: null == i ? f.headerBotTag : f.headerBotTagWithNickname
                        }), h]
                    })
                }), null != m && "" !== m && (0, l.jsx)(s.Tooltip, {
                    text: c.default.Messages.USER_PROFILE_PRONOUNS,
                    children: e => (0, l.jsx)(s.Text, {
                        ...e,
                        variant: "text-sm/normal",
                        className: f.pronouns,
                        children: m
                    })
                })]
            })
        })
    }
}