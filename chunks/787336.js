function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAttachmentUrl: function() {
            return p
        },
        removeSignedUrlParameters: function() {
            return f
        },
        messageHasExpiredAttachmentUrl: function() {
            return T
        },
        maybeRefreshAttachmentUrl: function() {
            return E
        }
    }), n("222007");
    var i, l = n("872717"),
        a = n("718517"),
        o = n("253981"),
        r = n("519841"),
        s = n("49111");
    let u = new Set([window.GLOBAL_ENV.CDN_HOST, null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.substring(2)]),
        d = new Set(["/attachments/", "/ephemeral-attachments/"]),
        c = 1 * a.default.Millis.HOUR;

    function p(e) {
        return u.has(e.hostname) && Array.from(d).some(t => e.pathname.startsWith(t))
    }

    function f(e) {
        let t = o.default.toURLSafe(e);
        if (null == t) return e;
        for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
        return t
    }

    function m(e) {
        let t = function(e) {
            let t = e.searchParams.get("ex"),
                n = parseInt(null != t ? t : "", 16);
            return isNaN(n) ? void 0 : n * a.default.Millis.SECOND
        }(e);
        return null == t || t <= Date.now() + c
    }

    function _(e) {
        let t = o.default.toURLSafe(e.url);
        return null != t && m(t)
    }

    function I(e) {
        if (null == e) return !1;
        let t = o.default.toURLSafe(e.url);
        return !!(null != t && p(t)) && m(t)
    }

    function C(e) {
        var t;
        return I(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(I)) || I(e.video)
    }

    function T(e) {
        return e.attachments.some(_) || e.embeds.some(C)
    }
    async function A(e) {
        let t = await l.default.post({
            url: s.Endpoints.ATTACHMENTS_REFRESH_URLS,
            body: {
                attachment_urls: [e]
            }
        });
        return t.ok ? t.body.refreshed_urls[0].refreshed : void 0
    }
    async function E(e) {
        if (!r.AttachmentLinkRefreshExperiment.getCurrentConfig({
                location: "link_clicked"
            }).enabled) return e;
        let t = o.default.toURLSafe(e);
        if (null == t || !m(t)) return e;
        let n = await A(e);
        return null != n ? n : e
    }
}