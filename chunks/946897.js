function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("404828"),
        r = n.n(l),
        a = n("862205");
    let i = /^https:\/\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\/(?:attachments|ephemeral-attachments)\/\d+\/\d+\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/,
        u = (0, a.createExperiment)({
            kind: "user",
            id: "2023-11_attachment_link_markup",
            label: "Attachment Link Config User Experiment",
            defaultConfig: {
                enabled: !1
            },
            treatments: [{
                id: 1,
                label: "Shows links to attachments as regular links",
                config: {
                    enabled: !1
                }
            }, {
                id: 2,
                label: 'Shows links to attachments as "mentions" of the filename',
                config: {
                    enabled: !0
                }
            }]
        }),
        o = {
            order: r.defaultRules.url.order - .5,
            requiredFirstCharacters: ["h"],
            match(e) {
                let t = i.exec(e);
                if (null !== t) {
                    let {
                        enabled: e
                    } = u.getCurrentConfig({
                        location: "markup"
                    });
                    if (!e) return null
                }
                return t
            },
            parse(e, t, n) {
                var l;
                let r = e[0],
                    a = e[1];
                return {
                    type: "attachmentLink",
                    content: [{
                        type: "text",
                        content: l = a
                    }],
                    attachmentUrl: r,
                    attachmentName: l
                }
            }
        };
    var s = {
        attachmentLink: o
    }
}