function(i, x, t) {
    "use strict";
    t.r(x), t.d(x, {
        CUSTOM_CALL_SOUND_ANIMATION_RANGE: function() {
            return L
        },
        AnimationTypeToAnimations: function() {
            return U
        },
        getResizedEmojiData: function() {
            return B
        },
        sampleAnimationId: function() {
            return D
        },
        getEffectUrl: function() {
            return j
        },
        getEffectAnnouncement: function() {
            return P
        }
    });
    var s = t("917351"),
        a = t.n(s),
        o = t("440540"),
        y = t("811217"),
        d = t("504936"),
        k = t("988078"),
        r = t("939118"),
        e = t("101559"),
        p = t("326209"),
        n = t("610237"),
        m = t("733261"),
        c = t("596926"),
        l = t("761999"),
        f = t("189580"),
        _ = t("679126"),
        u = t("101593"),
        h = t("414668"),
        I = t("97656"),
        b = t("812007"),
        w = t("721336"),
        E = t("954877"),
        g = t("662151"),
        A = t("155232"),
        R = t("843093"),
        O = t("867805"),
        v = t("407063"),
        T = t("697218"),
        M = t("315102"),
        N = t("402671"),
        S = t("626334"),
        C = t("782340");
    let L = {
            start: 10,
            end: 15
        },
        F = {
            BASIC: [o],
            PREMIUM: [y, d, k, r, e, p, n, m, c, l, f, _, u, h, I, b, w, E, g, A, R]
        },
        U = {
            [S.VoiceChannelEffectAnimationType.BASIC]: F.BASIC,
            [S.VoiceChannelEffectAnimationType.PREMIUM]: F.PREMIUM
        },
        B = a.memoize(i => new Promise(x => {
            let t = new Image;
            t.src = i, t.crossOrigin = "Anonymous", t.onload = () => {
                let s = S.EMOJI_SIZE * (0, v.getDevicePixelRatio)();
                if (t.width === s && t.height === s) x(i);
                else {
                    var a;
                    let i = document.createElement("canvas");
                    i.width = s, i.height = s, null === (a = i.getContext("2d")) || void 0 === a || a.drawImage(t, 0, 0), x(i.toDataURL("image/png"))
                }
            }
        })),
        D = (i, x) => {
            let t = U[i];
            if (null != x && i === S.VoiceChannelEffectAnimationType.PREMIUM) {
                let i = x.end + 1;
                return Math.floor(Math.random() * (x.start - i) + i)
            }
            return Math.floor(Math.random() * t.length)
        };

    function j(i) {
        let x = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.EMOJI_SIZE;
        if (null != i.id) {
            var t;
            return M.default.getEmojiURL({
                id: i.id,
                animated: null !== (t = i.animated) && void 0 !== t && t,
                size: x
            })
        }
        let s = O.default.convertSurrogateToName(i.name, !1),
            a = O.default.getByName(s);
        return null != a ? N.default.getURL(a.surrogates) : ""
    }

    function V(i, x) {
        return a(i).map(i => {
            var t;
            return null !== (t = i[x]) && void 0 !== t ? t : null
        }).filter(i => null != i).uniq().value()
    }

    function P(i) {
        var x, t, s, a, o, y;
        if (i.length < 1) return "";
        let d = V(i, "userId"),
            k = V(i, "emojiName"),
            r = k.length < 2 ? null !== (x = null == k ? void 0 : k[0]) && void 0 !== x ? x : "" : k.join(", ");
        if (d.length < 1) return "";
        if (1 === d.length) return C.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_SINGLE.format({
            firstUsername: null === (t = T.default.getUser(d[0])) || void 0 === t ? void 0 : t.username,
            emojiNames: r
        });
        if (2 === d.length) return C.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_DOUBLE.format({
            firstUsername: null === (s = T.default.getUser(d[0])) || void 0 === s ? void 0 : s.username,
            secondUsername: null === (a = T.default.getUser(d[1])) || void 0 === a ? void 0 : a.username,
            emojiNames: r
        });
        else return C.default.Messages.A11Y_ANNOUNCEMENT_VOICE_CHANNEL_EFFECTS_MULTIPLE.format({
            firstUsername: null === (o = T.default.getUser(d[0])) || void 0 === o ? void 0 : o.username,
            secondUsername: null === (y = T.default.getUser(d[1])) || void 0 === y ? void 0 : y.username,
            count: d.length - 2,
            emojiNames: r
        })
    }
}