function(t, e, n) {
    "use strict";
    let r, i, a, o, s;
    n.r(e), n.d(e, {
        Replay: function() {
            return eQ
        }
    });
    var u, c, l, d, f, p, h, _, g, m, y, v, b, E, S, w, T = n("91320"),
        k = n("648238"),
        x = n("444675");
    let R = k.GLOBAL_OBJ,
        N = "sentryReplaySession",
        D = "Unable to send Replay";
    (u = g || (g = {}))[u.Document = 0] = "Document", u[u.DocumentType = 1] = "DocumentType", u[u.Element = 2] = "Element", u[u.Text = 3] = "Text", u[u.CDATA = 4] = "CDATA", u[u.Comment = 5] = "Comment";

    function I(t) {
        let e = null == t ? void 0 : t.host;
        return !!(e && e.shadowRoot && e.shadowRoot === t)
    }

    function O({
        maskInputOptions: t,
        tagName: e,
        type: n
    }) {
        "option" === e.toLowerCase() && (e = "select");
        let r = "string" == typeof n ? n.toLowerCase() : void 0;
        return t[e.toLowerCase()] || r && t[r] || "password" === r || "input" === e && !n && t.text
    }

    function C({
        input: t,
        maskInputSelector: e,
        unmaskInputSelector: n,
        maskInputOptions: r,
        tagName: i,
        type: a,
        value: o,
        maskInputFn: s
    }) {
        let u = o || "";
        return n && t.matches(n) ? u : (t.hasAttribute("data-rr-is-password") && (a = "password"), (O({
            maskInputOptions: r,
            tagName: i,
            type: a
        }) || e && t.matches(e)) && (u = s ? s(u) : "*".repeat(u.length)), u)
    }
    let A = "__rrweb_original__";

    function B(t) {
        let e = t.type;
        return t.hasAttribute("data-rr-is-password") ? "password" : e ? e.toLowerCase() : null
    }

    function U(t, e, n) {
        return ("string" == typeof n && n.toLowerCase(), "INPUT" === e && ("radio" === n || "checkbox" === n)) ? t.getAttribute("value") || "" : t.value
    }
    let M = 1,
        L = RegExp("[^a-z0-9-_:]");

    function P(t) {
        return t ? t.replace(/[\S]/g, "*") : ""
    }

    function G(t) {
        try {
            let e = t.rules || t.cssRules;
            return e ? Array.from(e).map(z).join("") : null
        } catch (t) {
            return null
        }
    }

    function z(t) {
        let e = t.cssText;
        if (function(t) {
                return "styleSheet" in t
            }(t)) try {
            e = G(t.styleSheet) || e
        } catch (t) {}
        return F(e)
    }

    function F(t) {
        return t.indexOf(":") > -1 ? t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2") : t
    }
    let Y = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        j = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/,
        H = /^(data:)([^,]*),(.*)/i;

    function $(t, e) {
        return (t || "").replace(Y, (t, n, r, i, a, o) => {
            let s = r || a || o,
                u = n || i || "";
            if (!s) return t;
            if (!j.test(s) || H.test(s)) return `url(${u}${s}${u})`;
            if ("/" === s[0]) {
                var c;
                let t;
                return `url(${u}${t="",(t=(t=(c=e).indexOf("//")>-1?c.split("/").slice(0,3).join("/"):c.split("/")[0]).split("?")[0])+s}${u})`
            }
            let l = e.split("/"),
                d = s.split("/");
            for (let t of (l.pop(), d)) {
                if ("." !== t) ".." === t ? l.pop() : l.push(t)
            }
            return `url(${u}${l.join("/")}${u})`
        })
    }
    let W = /^[^ \t\n\r\u000c]+/,
        q = /^[, \t\n\r\u000c]+/;

    function Z(t, e) {
        if (!e || "" === e.trim()) return e;
        let n = t.createElement("a");
        return n.href = e, n.href
    }

    function V() {
        let t = document.createElement("a");
        return t.href = "", t.href
    }

    function J(t, e, n, r, i, a, o, s) {
        if (!i) return i;
        let u = r.toLowerCase(),
            c = n.toLowerCase();
        if ("src" === u || "href" === u) return Z(t, i);
        if ("xlink:href" === u && "#" !== i[0]) return Z(t, i);
        if ("background" === u && ("table" === c || "td" === c || "th" === c)) return Z(t, i);
        else if ("srcset" === u) return function(t, e) {
            if ("" === e.trim()) return e;
            let n = 0;

            function r(t) {
                let r;
                let i = t.exec(e.substring(n));
                return i ? (r = i[0], n += r.length, r) : ""
            }
            let i = [];
            for (; r(q), !(n >= e.length);) {
                ;
                let a = r(W);
                if ("," === a.slice(-1)) a = Z(t, a.substring(0, a.length - 1)), i.push(a);
                else {
                    let r = "";
                    a = Z(t, a);
                    let o = !1;
                    for (;;) {
                        let t = e.charAt(n);
                        if ("" === t) {
                            i.push((a + r).trim());
                            break
                        }
                        if (o) ")" === t && (o = !1);
                        else {
                            if ("," === t) {
                                n += 1, i.push((a + r).trim());
                                break
                            }
                            "(" === t && (o = !0)
                        }
                        r += t, n += 1
                    }
                }
            }
            return i.join(", ")
        }(t, i);
        else if ("style" === u) return $(i, V());
        else if ("object" === c && "data" === u) return Z(t, i);
        else if (a && function(t, e, n, r) {
                return !(r && t.matches(r)) && (["placeholder", "title", "aria-label"].indexOf(e) > -1 || "input" === n && "value" === e && t.hasAttribute("type") && ["submit", "button"].indexOf(t.getAttribute("type").toLowerCase()) > -1)
            }(e, u, c, o)) return s ? s(i) : P(i);
        return i
    }

    function K(t, e, n, r, i) {
        if (!t) return !1;
        if (t.nodeType !== t.ELEMENT_NODE) return K(t.parentNode, e, n, r, i);
        if (r && (t.matches(r) || t.closest(r))) return !1;
        if (i) return !0;
        if ("string" == typeof e) {
            if (t.classList.contains(e)) return !0
        } else
            for (let n = 0; n < t.classList.length; n++) {
                let r = t.classList[n];
                if (e.test(r)) return !0
            }
        return !!(n && t.matches(n)) || K(t.parentNode, e, n, r, i)
    }

    function X(t) {
        return null == t ? "" : t.toLowerCase()
    }

    function Q(t, e) {
        let n;
        let {
            doc: a,
            map: o,
            blockClass: s,
            blockSelector: u,
            unblockSelector: c,
            maskTextClass: l,
            maskTextSelector: d,
            unmaskTextSelector: f,
            skipChild: p = !1,
            inlineStylesheet: h = !0,
            maskInputSelector: _,
            unmaskInputSelector: m,
            maskAllText: y,
            maskInputOptions: v = {},
            maskTextFn: b,
            maskInputFn: E,
            slimDOMOptions: S,
            dataURLOptions: w = {},
            inlineImages: T = !1,
            recordCanvas: k = !1,
            onSerialize: x,
            onIframeLoad: R,
            iframeLoadTimeout: N = 5e3,
            keepIframeSrcFn: D = () => !1
        } = e, {
            preserveWhiteSpace: O = !0
        } = e, z = function(t, e) {
            var n, a, o;
            let s;
            let {
                doc: u,
                blockClass: c,
                blockSelector: l,
                unblockSelector: d,
                maskTextClass: f,
                maskTextSelector: p,
                unmaskTextSelector: h,
                inlineStylesheet: _,
                maskInputSelector: m,
                unmaskInputSelector: y,
                maskAllText: v,
                maskInputOptions: b = {},
                maskTextFn: E,
                maskInputFn: S,
                dataURLOptions: w = {},
                inlineImages: T,
                recordCanvas: k,
                keepIframeSrcFn: x
            } = e;
            if (u.__sn) {
                let t = u.__sn.id;
                s = 1 === t ? void 0 : t
            }
            switch (t.nodeType) {
                case t.DOCUMENT_NODE:
                    if ("CSS1Compat" !== t.compatMode) return {
                        type: g.Document,
                        childNodes: [],
                        compatMode: t.compatMode,
                        rootId: s
                    };
                    return {
                        type: g.Document, childNodes: [], rootId: s
                    };
                case t.DOCUMENT_TYPE_NODE:
                    return {
                        type: g.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: s
                    };
                case t.ELEMENT_NODE:
                    ;
                    let R = function(t, e, n, r) {
                            if (r && t.matches(r)) return !1;
                            if ("string" == typeof e) {
                                if (t.classList.contains(e)) return !0
                            } else
                                for (let n = 0; n < t.classList.length; n++) {
                                    let r = t.classList[n];
                                    if (e.test(r)) return !0
                                }
                            return !!n && t.matches(n)
                        }(t, c, l, d),
                        N = function(t) {
                            if (t instanceof HTMLFormElement) return "form";
                            let e = t.tagName.toLowerCase().trim();
                            return L.test(e) ? "div" : e
                        }(t),
                        D = {};
                    for (let {
                            name: e,
                            value: n
                        }
                        of Array.from(t.attributes)) ! function(t, e, n) {
                        return ("video" === t || "audio" === t) && "autoplay" === e
                    }(N, e) && (D[e] = J(u, t, N, e, n, v, h, E));
                    if ("link" === N && _) {
                        let e = Array.from(u.styleSheets).find(e => e.href === t.href),
                            n = null;
                        e && (n = G(e)), n && (delete D.rel, delete D.href, D._cssText = $(n, e.href))
                    }
                    if ("style" === N && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                        let e = G(t.sheet);
                        e && (D._cssText = $(e, V()))
                    }
                    if ("input" === N || "textarea" === N || "select" === N || "option" === N) {
                        let e = B(t),
                            n = U(t, N.toUpperCase(), e),
                            r = t.checked;
                        "submit" !== e && "button" !== e && n && (D.value = C({
                            input: t,
                            type: e,
                            tagName: N,
                            value: n,
                            maskInputSelector: m,
                            unmaskInputSelector: y,
                            maskInputOptions: b,
                            maskInputFn: S
                        })), r && (D.checked = r)
                    }
                    if ("option" === N && (t.selected && !b.select ? D.selected = !0 : delete D.selected), "canvas" === N && k) {
                        if ("2d" === t.__context) ! function(t) {
                            let e = t.getContext("2d");
                            if (!e) return !0;
                            for (let n = 0; n < t.width; n += 50)
                                for (let r = 0; r < t.height; r += 50) {
                                    let i = e.getImageData,
                                        a = A in i ? i[A] : i;
                                    if (new Uint32Array(a.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some(t => 0 !== t)) return !1
                                }
                            return !0
                        }(t) && (D.rr_dataURL = t.toDataURL(w.type, w.quality));
                        else if (!("__context" in t)) {
                            let e = t.toDataURL(w.type, w.quality),
                                n = document.createElement("canvas");
                            n.width = t.width, n.height = t.height, e !== n.toDataURL(w.type, w.quality) && (D.rr_dataURL = e)
                        }
                    }
                    if ("img" === N && T) {
                        !r && (i = (r = u.createElement("canvas")).getContext("2d"));
                        let e = t.crossOrigin;
                        t.crossOrigin = "anonymous";
                        let n = () => {
                            try {
                                r.width = t.naturalWidth, r.height = t.naturalHeight, i.drawImage(t, 0, 0), D.rr_dataURL = r.toDataURL(w.type, w.quality)
                            } catch (e) {
                                console.warn(`Cannot inline img src=${t.currentSrc}! Error: ${e}`)
                            }
                            e ? D.crossOrigin = e : delete D.crossOrigin
                        };
                        t.complete && 0 !== t.naturalWidth ? n() : t.onload = n
                    }
                    if (("audio" === N || "video" === N) && (D.rr_mediaState = t.paused ? "paused" : "played", D.rr_mediaCurrentTime = t.currentTime), t.scrollLeft && (D.rr_scrollLeft = t.scrollLeft), t.scrollTop && (D.rr_scrollTop = t.scrollTop), R) {
                        let {
                            width: e,
                            height: n
                        } = t.getBoundingClientRect();
                        D = {
                            class: D.class,
                            rr_width: `${e}px`,
                            rr_height: `${n}px`
                        }
                    }
                    return "iframe" === N && !x(D.src) && (!t.contentDocument && (D.rr_src = D.src), delete D.src), {
                        type: g.Element,
                        tagName: N,
                        attributes: D,
                        childNodes: [],
                        isSVG: !!("svg" === (a = t).tagName || a.ownerSVGElement) || void 0,
                        needBlock: R,
                        rootId: s
                    };
                case t.TEXT_NODE:
                    let I = t.parentNode && t.parentNode.tagName,
                        O = t.textContent,
                        M = "STYLE" === I || void 0,
                        z = "SCRIPT" === I || void 0;
                    if (M && O) {
                        try {
                            if (t.nextSibling || t.previousSibling);
                            else if (null === (n = t.parentNode.sheet) || void 0 === n ? void 0 : n.cssRules) {
                                ;
                                O = (o = t.parentNode.sheet).cssRules ? Array.from(o.cssRules).map(t => t.cssText ? F(t.cssText) : "").join("") : ""
                            }
                        } catch (e) {
                            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t)
                        }
                        O = $(O, V())
                    }
                    return z && (O = "SCRIPT_PLACEHOLDER"), "TEXTAREA" === I && O ? O = "" : "OPTION" === I && O ? O = C({
                        input: t.parentNode,
                        type: null,
                        tagName: I,
                        value: O,
                        maskInputSelector: m,
                        unmaskInputSelector: y,
                        maskInputOptions: b,
                        maskInputFn: S
                    }) : !M && !z && K(t, f, p, h, v) && O && (O = E ? E(O) : P(O)), {
                        type: g.Text,
                        textContent: O || "",
                        isStyle: M,
                        rootId: s
                    };
                case t.CDATA_SECTION_NODE:
                    return {
                        type: g.CDATA, textContent: "", rootId: s
                    };
                case t.COMMENT_NODE:
                    return {
                        type: g.Comment, textContent: t.textContent || "", rootId: s
                    };
                default:
                    return !1
            }
        }(t, {
            doc: a,
            blockClass: s,
            blockSelector: u,
            unblockSelector: c,
            maskTextClass: l,
            maskTextSelector: d,
            unmaskTextSelector: f,
            inlineStylesheet: h,
            maskInputSelector: _,
            unmaskInputSelector: m,
            maskAllText: y,
            maskInputOptions: v,
            maskTextFn: b,
            maskInputFn: E,
            dataURLOptions: w,
            inlineImages: T,
            recordCanvas: k,
            keepIframeSrcFn: D
        });
        if (!z) return console.warn(t, "not serialized"), null;
        n = "__sn" in t ? t.__sn.id : ! function(t, e) {
            if (e.comment && t.type === g.Comment) return !0;
            if (t.type === g.Element) {
                if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (X(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === X(t.attributes.name) || "icon" === X(t.attributes.rel) || "apple-touch-icon" === X(t.attributes.rel) || "shortcut icon" === X(t.attributes.rel)))) return !0;
                else if ("meta" === t.tagName) {
                    if (e.headMetaDescKeywords && X(t.attributes.name).match(/^description|keywords$/)) return !0;
                    if (e.headMetaSocial && (X(t.attributes.property).match(/^(og|twitter|fb):/) || X(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === X(t.attributes.name))) return !0;
                    else if (e.headMetaRobots && ("robots" === X(t.attributes.name) || "googlebot" === X(t.attributes.name) || "bingbot" === X(t.attributes.name))) return !0;
                    else if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                    else if (e.headMetaAuthorship && ("author" === X(t.attributes.name) || "generator" === X(t.attributes.name) || "framework" === X(t.attributes.name) || "publisher" === X(t.attributes.name) || "progid" === X(t.attributes.name) || X(t.attributes.property).match(/^article:/) || X(t.attributes.property).match(/^product:/))) return !0;
                    else if (e.headMetaVerification && ("google-site-verification" === X(t.attributes.name) || "yandex-verification" === X(t.attributes.name) || "csrf-token" === X(t.attributes.name) || "p:domain_verify" === X(t.attributes.name) || "verify-v1" === X(t.attributes.name) || "verification" === X(t.attributes.name) || "shopify-checkout-api-token" === X(t.attributes.name))) return !0
                }
            }
            return !1
        }(z, S) && (O || z.type !== g.Text || z.isStyle || z.textContent.replace(/^\s+|\s+$/gm, "").length) ? M++ : -2;
        let Y = Object.assign(z, {
            id: n
        });
        if (t.__sn = Y, -2 === n) return null;
        o[n] = t, x && x(t);
        let j = !p;
        if (Y.type === g.Element && (j = j && !Y.needBlock, delete Y.needBlock, t.shadowRoot && (Y.isShadowHost = !0)), (Y.type === g.Document || Y.type === g.Element) && j) {
            var H;
            S.headWhitespace && z.type === g.Element && "head" === z.tagName && (O = !1);
            let e = {
                doc: a,
                map: o,
                blockClass: s,
                blockSelector: u,
                unblockSelector: c,
                maskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: f,
                skipChild: p,
                inlineStylesheet: h,
                maskInputSelector: _,
                unmaskInputSelector: m,
                maskAllText: y,
                maskInputOptions: v,
                maskTextFn: b,
                maskInputFn: E,
                slimDOMOptions: S,
                dataURLOptions: w,
                inlineImages: T,
                recordCanvas: k,
                preserveWhiteSpace: O,
                onSerialize: x,
                onIframeLoad: R,
                iframeLoadTimeout: N,
                keepIframeSrcFn: D
            };
            for (let n of Array.from(t.childNodes)) {
                let t = Q(n, e);
                t && Y.childNodes.push(t)
            }
            if ((H = t).nodeType === H.ELEMENT_NODE && t.shadowRoot)
                for (let n of Array.from(t.shadowRoot.childNodes)) {
                    let t = Q(n, e);
                    t && (t.isShadow = !0, Y.childNodes.push(t))
                }
        }
        return t.parentNode && I(t.parentNode) && (Y.isShadow = !0), Y.type === g.Element && "iframe" === Y.tagName && ! function(t, e, n) {
            let r;
            let i = t.contentWindow;
            if (!i) return;
            let a = !1;
            try {
                r = i.document.readyState
            } catch (t) {
                return
            }
            if ("complete" !== r) {
                let r = setTimeout(() => {
                    !a && (e(), a = !0)
                }, n);
                t.addEventListener("load", () => {
                    clearTimeout(r), a = !0, e()
                });
                return
            }
            let o = "about:blank";
            if (i.location.href !== o || t.src === o || "" === t.src) {
                setTimeout(e, 0);
                return
            }
            t.addEventListener("load", e)
        }(t, () => {
            let e = t.contentDocument;
            if (e && R) {
                let n = Q(e, {
                    doc: e,
                    map: o,
                    blockClass: s,
                    blockSelector: u,
                    unblockSelector: c,
                    maskTextClass: l,
                    maskTextSelector: d,
                    unmaskTextSelector: f,
                    skipChild: !1,
                    inlineStylesheet: h,
                    maskInputSelector: _,
                    unmaskInputSelector: m,
                    maskAllText: y,
                    maskInputOptions: v,
                    maskTextFn: b,
                    maskInputFn: E,
                    slimDOMOptions: S,
                    dataURLOptions: w,
                    inlineImages: T,
                    recordCanvas: k,
                    preserveWhiteSpace: O,
                    onSerialize: x,
                    onIframeLoad: R,
                    iframeLoadTimeout: N,
                    keepIframeSrcFn: D
                });
                n && R(t, n)
            }
        }, N), Y
    }

    function tt(t, e, n = document) {
        let r = {
            capture: !0,
            passive: !0
        };
        return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
    }(c = m || (m = {}))[c.DomContentLoaded = 0] = "DomContentLoaded", c[c.Load = 1] = "Load", c[c.FullSnapshot = 2] = "FullSnapshot", c[c.IncrementalSnapshot = 3] = "IncrementalSnapshot", c[c.Meta = 4] = "Meta", c[c.Custom = 5] = "Custom", c[c.Plugin = 6] = "Plugin", (l = y || (y = {}))[l.Mutation = 0] = "Mutation", l[l.MouseMove = 1] = "MouseMove", l[l.MouseInteraction = 2] = "MouseInteraction", l[l.Scroll = 3] = "Scroll", l[l.ViewportResize = 4] = "ViewportResize", l[l.Input = 5] = "Input", l[l.TouchMove = 6] = "TouchMove", l[l.MediaInteraction = 7] = "MediaInteraction", l[l.StyleSheetRule = 8] = "StyleSheetRule", l[l.CanvasMutation = 9] = "CanvasMutation", l[l.Font = 10] = "Font", l[l.Log = 11] = "Log", l[l.Drag = 12] = "Drag", l[l.StyleDeclaration = 13] = "StyleDeclaration", (d = v || (v = {}))[d.MouseUp = 0] = "MouseUp", d[d.MouseDown = 1] = "MouseDown", d[d.Click = 2] = "Click", d[d.ContextMenu = 3] = "ContextMenu", d[d.DblClick = 4] = "DblClick", d[d.Focus = 5] = "Focus", d[d.Blur = 6] = "Blur", d[d.TouchStart = 7] = "TouchStart", d[d.TouchMove_Departed = 8] = "TouchMove_Departed", d[d.TouchEnd = 9] = "TouchEnd", d[d.TouchCancel = 10] = "TouchCancel", (f = b || (b = {}))[f["2D"] = 0] = "2D", f[f.WebGL = 1] = "WebGL", f[f.WebGL2 = 2] = "WebGL2", (p = E || (E = {}))[p.Play = 0] = "Play", p[p.Pause = 1] = "Pause", p[p.Seeked = 2] = "Seeked", p[p.VolumeChange = 3] = "VolumeChange", (h = S || (S = {})).Start = "start", h.Pause = "pause", h.Resume = "resume", h.Resize = "resize", h.Finish = "finish", h.FullsnapshotRebuilded = "fullsnapshot-rebuilded", h.LoadStylesheetStart = "load-stylesheet-start", h.LoadStylesheetEnd = "load-stylesheet-end", h.SkipStart = "skip-start", h.SkipEnd = "skip-end", h.MouseInteraction = "mouse-interaction", h.EventCast = "event-cast", h.CustomEvent = "custom-event", h.Flush = "flush", h.StateChange = "state-change", h.PlayBack = "play-back";
    let te = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        tn = {
            map: {},
            getId: () => (console.error(te), -1),
            getNode: () => (console.error(te), null),
            removeNodeFromMap() {
                console.error(te)
            },
            has: () => (console.error(te), !1),
            reset() {
                console.error(te)
            }
        };

    function tr(t, e, n = {}) {
        let r = null,
            i = 0;
        return function(a) {
            let o = Date.now();
            !i && !1 === n.leading && (i = o);
            let s = e - (o - i),
                u = this,
                c = arguments;
            s <= 0 || s > e ? (r && (clearTimeout(r), r = null), i = o, t.apply(u, c)) : !r && !1 !== n.trailing && (r = setTimeout(() => {
                i = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(u, c)
            }, s))
        }
    }

    function ti(t, e, n, r, i = window) {
        let a = i.Object.getOwnPropertyDescriptor(t, e);
        return i.Object.defineProperty(t, e, r ? n : {
            set(t) {
                setTimeout(() => {
                    n.set.call(this, t)
                }, 0), a && a.set && a.set.call(this, t)
            }
        }), () => ti(t, e, a || {}, !0)
    }

    function ta(t, e, n) {
        try {
            if (!(e in t)) return () => {};
            let r = t[e],
                i = n(r);
            return "function" == typeof i && (i.prototype = i.prototype || {}, Object.defineProperties(i, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: r
                }
            })), t[e] = i, () => {
                t[e] = r
            }
        } catch (t) {
            return () => {}
        }
    }

    function to() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function ts() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function tu(t, e, n, r) {
        if (!t) return !1;
        if (t.nodeType === t.ELEMENT_NODE) {
            let i = !1,
                a = r && t.matches(r);
            return "string" == typeof e ? i = void 0 !== t.closest ? !a && null !== t.closest("." + e) : !a && t.classList.contains(e) : a || t.classList.forEach(t => {
                e.test(t) && (i = !0)
            }), !i && n && (i = t.matches(n)), !a && i || tu(t.parentNode, e, n, r)
        }
        return t.nodeType, t.TEXT_NODE, tu(t.parentNode, e, n, r)
    }

    function tc(t) {
        return "__sn" in t && -2 === t.__sn.id
    }
    "undefined" != typeof window && window.Proxy && window.Reflect && (tn = new Proxy(tn, {
        get: (t, e, n) => ("map" === e && console.error(te), Reflect.get(t, e, n))
    }));

    function tl(t) {
        return !!t.changedTouches
    }

    function td(t) {
        return "__sn" in t && t.__sn.type === g.Element && "iframe" === t.__sn.tagName
    }

    function tf(t) {
        return !!(null == t ? void 0 : t.shadowRoot)
    }

    function tp(t) {
        return "__ln" in t
    }
    class th {
        constructor() {
            this.length = 0, this.head = null
        }
        get(t) {
            if (t >= this.length) throw Error("Position outside of list range");
            let e = this.head;
            for (let n = 0; n < t; n++) e = (null == e ? void 0 : e.next) || null;
            return e
        }
        addNode(t) {
            let e = {
                value: t,
                previous: null,
                next: null
            };
            if (t.__ln = e, t.previousSibling && "__ln" in t.previousSibling) {
                let n = t.previousSibling.__ln.next;
                e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
            } else if (t.nextSibling && "__ln" in t.nextSibling && t.nextSibling.__ln.previous) {
                let n = t.nextSibling.__ln.previous;
                e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e)
            } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
            this.length++
        }
        removeNode(t) {
            let e = t.__ln;
            this.head && (e.previous ? (e.previous.next = e.next, e.next && (e.next.previous = e.previous)) : (this.head = e.next, this.head && (this.head.previous = null)), t.__ln && delete t.__ln, this.length--)
        }
    }
    let t_ = (t, e) => `${t}@${e}`;

    function tg(t) {
        return "__sn" in t
    }
    class tm {
        constructor() {
            this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
                t.forEach(this.processMutation), this.emit()
            }, this.emit = () => {
                if (this.frozen || this.locked) return;
                let t = [],
                    e = new th,
                    n = t => {
                        let e = t,
                            n = -2;
                        for (; - 2 === n;) n = (e = e && e.nextSibling) && this.mirror.getId(e);
                        return n
                    },
                    r = r => {
                        var i, a, o, s, u;
                        let c = r.getRootNode ? null === (i = r.getRootNode()) || void 0 === i ? void 0 : i.host : null,
                            l = c;
                        for (; null === (o = null === (a = null == l ? void 0 : l.getRootNode) || void 0 === a ? void 0 : a.call(l)) || void 0 === o ? void 0 : o.host;) l = (null === (u = null === (s = null == l ? void 0 : l.getRootNode) || void 0 === s ? void 0 : s.call(l)) || void 0 === u ? void 0 : u.host) || null;
                        let d = !this.doc.contains(r) && (!l || !this.doc.contains(l));
                        if (!r.parentNode || d) return;
                        let f = I(r.parentNode) ? this.mirror.getId(c) : this.mirror.getId(r.parentNode),
                            p = n(r);
                        if (-1 === f || -1 === p) return e.addNode(r);
                        let h = Q(r, {
                            doc: this.doc,
                            map: this.mirror.map,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            maskInputSelector: this.maskInputSelector,
                            unmaskInputSelector: this.unmaskInputSelector,
                            skipChild: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskAllText: this.maskAllText,
                            maskInputOptions: this.maskInputOptions,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: t => {
                                td(t) && this.iframeManager.addIframe(t), tf(r) && this.shadowDomManager.addShadowRoot(r.shadowRoot, document)
                            },
                            onIframeLoad: (t, e) => {
                                this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
                            }
                        });
                        h && t.push({
                            parentId: f,
                            nextId: p,
                            node: h
                        })
                    };
                for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                for (let t of this.movedSet)(!tv(this.removes, t, this.mirror) || this.movedSet.has(t.parentNode)) && r(t);
                for (let t of this.addedSet) tb(this.droppedSet, t) || tv(this.removes, t, this.mirror) ? tb(this.movedSet, t) ? r(t) : this.droppedSet.add(t) : r(t);
                let i = null;
                for (; e.length;) {
                    let t = null;
                    if (i) {
                        let e = this.mirror.getId(i.value.parentNode),
                            r = n(i.value); - 1 !== e && -1 !== r && (t = i)
                    }
                    if (!t)
                        for (let r = e.length - 1; r >= 0; r--) {
                            let i = e.get(r);
                            if (i) {
                                let e = this.mirror.getId(i.value.parentNode),
                                    r = n(i.value);
                                if (-1 !== e && -1 !== r) {
                                    t = i;
                                    break
                                }
                            }
                        }
                    if (!t) {
                        for (; e.head;) e.removeNode(e.head.value);
                        break
                    }
                    i = t.previous, e.removeNode(t.value), r(t.value)
                }
                let a = {
                    texts: this.texts.map(t => ({
                        id: this.mirror.getId(t.node),
                        value: t.value
                    })).filter(t => this.mirror.has(t.id)),
                    attributes: this.attributes.map(t => ({
                        id: this.mirror.getId(t.node),
                        attributes: t.attributes
                    })).filter(t => this.mirror.has(t.id)),
                    removes: this.removes,
                    adds: t
                };
                (a.texts.length || a.attributes.length || a.removes.length || a.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(a))
            }, this.processMutation = t => {
                if (!tc(t.target)) switch (t.type) {
                    case "characterData": {
                        let e = t.target.textContent;
                        !tu(t.target, this.blockClass, this.blockSelector, this.unblockSelector) && e !== t.oldValue && this.texts.push({
                            value: K(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, "*") : e,
                            node: t.target
                        });
                        break
                    }
                    case "attributes": {
                        let e = t.target,
                            n = e.getAttribute(t.attributeName);
                        if ("value" === t.attributeName && (n = C({
                                input: e,
                                maskInputSelector: this.maskInputSelector,
                                unmaskInputSelector: this.unmaskInputSelector,
                                maskInputOptions: this.maskInputOptions,
                                tagName: e.tagName,
                                type: e.getAttribute("type"),
                                value: n,
                                maskInputFn: this.maskInputFn
                            })), tu(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || n === t.oldValue) return;
                        let r = this.attributes.find(e => e.node === t.target);
                        if (!r && (r = {
                                node: t.target,
                                attributes: {}
                            }, this.attributes.push(r)), "type" === t.attributeName && "INPUT" === e.tagName && "password" === (t.oldValue || "").toLowerCase() && e.setAttribute("data-rr-is-password", "true"), "style" === t.attributeName) {
                            let n = this.doc.createElement("span");
                            t.oldValue && n.setAttribute("style", t.oldValue), (void 0 === r.attributes.style || null === r.attributes.style) && (r.attributes.style = {});
                            try {
                                let t = r.attributes.style;
                                for (let r of Array.from(e.style)) {
                                    let i = e.style.getPropertyValue(r),
                                        a = e.style.getPropertyPriority(r);
                                    (i !== n.style.getPropertyValue(r) || a !== n.style.getPropertyPriority(r)) && ("" === a ? t[r] = i : t[r] = [i, a])
                                }
                                for (let r of Array.from(n.style)) "" === e.style.getPropertyValue(r) && (t[r] = !1)
                            } catch (t) {
                                console.warn("[rrweb] Error when parsing update to style attribute:", t)
                            }
                        } else {
                            let e = t.target;
                            r.attributes[t.attributeName] = J(this.doc, e, e.tagName, t.attributeName, n, this.maskAllText, this.unmaskTextSelector, this.maskTextFn)
                        }
                        break
                    }
                    case "childList":
                        t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
                            let n = this.mirror.getId(e),
                                r = I(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                            !(tu(t.target, this.blockClass, this.blockSelector, this.unblockSelector) || tc(e)) && (this.addedSet.has(e) ? (ty(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || function t(e, n) {
                                if (I(e)) return !1;
                                let r = n.getId(e);
                                return !n.has(r) || (!e.parentNode || e.parentNode.nodeType !== e.DOCUMENT_NODE) && (!e.parentNode || t(e.parentNode, n))
                            }(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[t_(n, r)] ? ty(this.movedSet, e) : this.removes.push({
                                parentId: r,
                                id: n,
                                isShadow: !!I(t.target) || void 0
                            })), this.mapRemoves.push(e))
                        })
                }
            }, this.genAdds = (t, e) => {
                if (!(e && tu(e, this.blockClass, this.blockSelector, this.unblockSelector))) {
                    if ("__sn" in t) {
                        if (tc(t)) return;
                        this.movedSet.add(t);
                        let n = null;
                        if (e && "__sn" in e) n = e.__sn.id;
                        n && (this.movedMap[t_(t.__sn.id, n)] = !0)
                    } else this.addedSet.add(t), this.droppedSet.delete(t);
                    !tu(t, this.blockClass, this.blockSelector, this.unblockSelector) && t.childNodes.forEach(t => this.genAdds(t))
                }
            }
        }
        init(t) {
            ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskTextClass", "maskTextSelector", "unmaskTextSelector", "maskInputSelector", "unmaskInputSelector", "inlineStylesheet", "maskAllText", "maskInputOptions", "maskTextFn", "maskInputFn", "recordCanvas", "inlineImages", "slimDOMOptions", "doc", "mirror", "iframeManager", "shadowDomManager", "canvasManager"].forEach(e => {
                this[e] = t[e]
            })
        }
        freeze() {
            this.frozen = !0, this.canvasManager.freeze()
        }
        unfreeze() {
            this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
        }
        isFrozen() {
            return this.frozen
        }
        lock() {
            this.locked = !0, this.canvasManager.lock()
        }
        unlock() {
            this.locked = !1, this.canvasManager.unlock(), this.emit()
        }
        reset() {
            this.shadowDomManager.reset(), this.canvasManager.reset()
        }
    }

    function ty(t, e) {
        t.delete(e), e.childNodes.forEach(e => ty(t, e))
    }

    function tv(t, e, n) {
        let {
            parentNode: r
        } = e;
        if (!r) return !1;
        let i = n.getId(r);
        return !!t.some(t => t.id === i) || tv(t, r, n)
    }

    function tb(t, e) {
        let {
            parentNode: n
        } = e;
        return !!n && (!!t.has(n) || tb(t, n))
    }
    let tE = t => (...e) => {
            try {
                return t(...e)
            } catch (t) {
                try {
                    t.__rrweb__ = !0
                } catch (t) {}
                throw t
            }
        },
        tS = [];

    function tw(t) {
        try {
            if ("composedPath" in t) {
                let e = t.composedPath();
                if (e.length) return e[0]
            } else if ("path" in t && t.path.length) return t.path[0]
        } catch (t) {}
        return t && t.target
    }

    function tT(t, e) {
        var n, r;
        let i = new tm;
        tS.push(i), i.init(t);
        let a = window.MutationObserver || window.__rrMutationObserver,
            o = null === (r = null === (n = null == window ? void 0 : window.Zone) || void 0 === n ? void 0 : n.__symbol__) || void 0 === r ? void 0 : r.call(n, "MutationObserver");
        o && window[o] && (a = window[o]);
        let s = new a(tE(e => {
            (!t.onMutation || !1 !== t.onMutation(e)) && i.processMutations(e)
        }));
        return s.observe(e, {
            attributes: !0,
            attributeOldValue: !0,
            characterData: !0,
            characterDataOldValue: !0,
            childList: !0,
            subtree: !0
        }), s
    }

    function tk({
        scrollCb: t,
        doc: e,
        mirror: n,
        blockClass: r,
        blockSelector: i,
        unblockSelector: a,
        sampling: o
    }) {
        let s = tr(o => {
            let s = tw(o);
            if (!s || tu(s, r, i, a)) return;
            let u = n.getId(s);
            if (s === e) {
                let n = e.scrollingElement || e.documentElement;
                tE(t)({
                    id: u,
                    x: n.scrollLeft,
                    y: n.scrollTop
                })
            } else tE(t)({
                id: u,
                x: s.scrollLeft,
                y: s.scrollTop
            })
        }, o.scroll || 100);
        return tt("scroll", tE(s), e)
    }

    function tx(t, e) {
        let n = Object.assign({}, t);
        return !e && delete n.userTriggered, n
    }
    let tR = ["INPUT", "TEXTAREA", "SELECT"],
        tN = new WeakMap;

    function tD(t) {
        return function(t, e) {
            if (tO("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || tO("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || tO("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || tO("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                let n = Array.from(t.parentRule.cssRules).indexOf(t);
                e.unshift(n)
            } else {
                let n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
                e.unshift(n)
            }
            return e
        }(t, [])
    }

    function tI(t, e = {}) {
        let n = t.doc.defaultView;
        if (!n) return () => {};
        ! function(t, e) {
            let {
                mutationCb: n,
                mousemoveCb: r,
                mouseInteractionCb: i,
                scrollCb: a,
                viewportResizeCb: o,
                inputCb: s,
                mediaInteractionCb: u,
                styleSheetRuleCb: c,
                styleDeclarationCb: l,
                canvasMutationCb: d,
                fontCb: f
            } = t;
            t.mutationCb = (...t) => {
                e.mutation && e.mutation(...t), n(...t)
            }, t.mousemoveCb = (...t) => {
                e.mousemove && e.mousemove(...t), r(...t)
            }, t.mouseInteractionCb = (...t) => {
                e.mouseInteraction && e.mouseInteraction(...t), i(...t)
            }, t.scrollCb = (...t) => {
                e.scroll && e.scroll(...t), a(...t)
            }, t.viewportResizeCb = (...t) => {
                e.viewportResize && e.viewportResize(...t), o(...t)
            }, t.inputCb = (...t) => {
                e.input && e.input(...t), s(...t)
            }, t.mediaInteractionCb = (...t) => {
                e.mediaInteaction && e.mediaInteaction(...t), u(...t)
            }, t.styleSheetRuleCb = (...t) => {
                e.styleSheetRule && e.styleSheetRule(...t), c(...t)
            }, t.styleDeclarationCb = (...t) => {
                e.styleDeclaration && e.styleDeclaration(...t), l(...t)
            }, t.canvasMutationCb = (...t) => {
                e.canvasMutation && e.canvasMutation(...t), d(...t)
            }, t.fontCb = (...t) => {
                e.font && e.font(...t), f(...t)
            }
        }(t, e);
        let r = tT(t, t.doc),
            i = function({
                mousemoveCb: t,
                sampling: e,
                doc: n,
                mirror: r
            }) {
                let i;
                if (!1 === e.mousemove) return () => {};
                let a = "number" == typeof e.mousemove ? e.mousemove : 50,
                    o = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500,
                    s = [],
                    u = tr(e => {
                        let n = Date.now() - i;
                        tE(t)(s.map(t => (t.timeOffset -= n, t)), e), s = [], i = null
                    }, o),
                    c = tr(t => {
                        let e = tw(t),
                            {
                                clientX: n,
                                clientY: a
                            } = tl(t) ? t.changedTouches[0] : t;
                        !i && (i = Date.now()), s.push({
                            x: n,
                            y: a,
                            id: r.getId(e),
                            timeOffset: Date.now() - i
                        }), u("undefined" != typeof DragEvent && t instanceof DragEvent ? y.Drag : t instanceof MouseEvent ? y.MouseMove : y.TouchMove)
                    }, a, {
                        trailing: !1
                    }),
                    l = [tt("mousemove", tE(c), n), tt("touchmove", tE(c), n), tt("drag", tE(c), n)];
                return tE(() => {
                    l.forEach(t => t())
                })
            }(t),
            a = function({
                mouseInteractionCb: t,
                doc: e,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: a,
                sampling: o
            }) {
                if (!1 === o.mouseInteraction) return () => {};
                let s = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                    u = [],
                    c = e => o => {
                        let s = tw(o);
                        if (tu(s, r, i, a)) return;
                        let u = tl(o) ? o.changedTouches[0] : o;
                        if (!u) return;
                        let c = n.getId(s),
                            {
                                clientX: l,
                                clientY: d
                            } = u;
                        tE(t)({
                            type: v[e],
                            id: c,
                            x: l,
                            y: d
                        })
                    };
                return Object.keys(v).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== s[t]).forEach(t => {
                    let n = t.toLowerCase(),
                        r = tE(c(t));
                    u.push(tt(n, r, e))
                }), tE(() => {
                    u.forEach(t => t())
                })
            }(t),
            o = tk(t),
            s = function({
                viewportResizeCb: t
            }) {
                let e = -1,
                    n = -1,
                    r = tr(() => {
                        let r = to(),
                            i = ts();
                        (e !== r || n !== i) && (tE(t)({
                            width: Number(i),
                            height: Number(r)
                        }), e = r, n = i)
                    }, 200);
                return tt("resize", tE(r), window)
            }(t),
            u = function({
                inputCb: t,
                doc: e,
                mirror: n,
                blockClass: r,
                blockSelector: i,
                unblockSelector: a,
                ignoreClass: o,
                ignoreSelector: s,
                maskInputSelector: u,
                unmaskInputSelector: c,
                maskInputOptions: l,
                maskInputFn: d,
                sampling: f,
                userTriggeredOnInput: p
            }) {
                function h(t) {
                    let n = tw(t),
                        f = n && n.tagName,
                        h = t.isTrusted;
                    if ("OPTION" === f && (n = n.parentElement), !n || !f || 0 > tR.indexOf(f) || tu(n, r, i, a)) return;
                    let g = n,
                        m = B(g);
                    if (g.classList.contains(o) || s && g.matches(s)) return;
                    let y = U(g, f, m),
                        v = !1;
                    ("radio" === m || "checkbox" === m) && (v = n.checked),
                    function({
                        tagName: t,
                        type: e,
                        maskInputOptions: n,
                        maskInputSelector: r
                    }) {
                        return r || O({
                            maskInputOptions: n,
                            tagName: t,
                            type: e
                        })
                    }({
                        maskInputOptions: l,
                        maskInputSelector: u,
                        tagName: f,
                        type: m
                    }) && (y = C({
                        input: g,
                        maskInputOptions: l,
                        maskInputSelector: u,
                        unmaskInputSelector: c,
                        tagName: f,
                        type: m,
                        value: y,
                        maskInputFn: d
                    })), _(n, tE(tx)({
                        text: y,
                        isChecked: v,
                        userTriggered: h
                    }, p));
                    let b = n.name;
                    "radio" === m && b && v && e.querySelectorAll(`input[type="radio"][name="${b}"]`).forEach(t => {
                        if (t !== n) {
                            let e = C({
                                input: t,
                                maskInputOptions: l,
                                maskInputSelector: u,
                                unmaskInputSelector: c,
                                tagName: f,
                                type: m,
                                value: U(t, f, m),
                                maskInputFn: d
                            });
                            _(t, tE(tx)({
                                text: e,
                                isChecked: !v,
                                userTriggered: !1
                            }, p))
                        }
                    })
                }

                function _(e, r) {
                    let i = tN.get(e);
                    if (!i || i.text !== r.text || i.isChecked !== r.isChecked) {
                        tN.set(e, r);
                        let i = n.getId(e);
                        t(Object.assign(Object.assign({}, r), {
                            id: i
                        }))
                    }
                }
                let g = ("last" === f.input ? ["change"] : ["input", "change"]).map(t => tt(t, tE(h), e)),
                    m = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value"),
                    y = [
                        [HTMLInputElement.prototype, "value"],
                        [HTMLInputElement.prototype, "checked"],
                        [HTMLSelectElement.prototype, "value"],
                        [HTMLTextAreaElement.prototype, "value"],
                        [HTMLSelectElement.prototype, "selectedIndex"],
                        [HTMLOptionElement.prototype, "selected"]
                    ];
                return m && m.set && g.push(...y.map(t => ti(t[0], t[1], {
                    set() {
                        tE(h)({
                            target: this
                        })
                    }
                }))), tE(() => {
                    g.forEach(t => t())
                })
            }(t),
            c = function({
                mediaInteractionCb: t,
                blockClass: e,
                blockSelector: n,
                unblockSelector: r,
                mirror: i,
                sampling: a
            }) {
                let o = o => tr(tE(a => {
                        let s = tw(a);
                        if (!s || tu(s, e, n, r)) return;
                        let {
                            currentTime: u,
                            volume: c,
                            muted: l
                        } = s;
                        t({
                            type: o,
                            id: i.getId(s),
                            currentTime: u,
                            volume: c,
                            muted: l
                        })
                    }), a.media || 500),
                    s = [tt("play", o(0)), tt("pause", o(1)), tt("seeked", o(2)), tt("volumechange", o(3))];
                return tE(() => {
                    s.forEach(t => t())
                })
            }(t),
            l = function({
                styleSheetRuleCb: t,
                mirror: e
            }, {
                win: n
            }) {
                if (!n.CSSStyleSheet || !n.CSSStyleSheet.prototype) return () => {};
                let r = n.CSSStyleSheet.prototype.insertRule;
                n.CSSStyleSheet.prototype.insertRule = new Proxy(r, {
                    apply: tE((n, r, i) => {
                        let [a, o] = i, s = e.getId(r.ownerNode);
                        return -1 !== s && t({
                            id: s,
                            adds: [{
                                rule: a,
                                index: o
                            }]
                        }), n.apply(r, i)
                    })
                });
                let i = n.CSSStyleSheet.prototype.deleteRule;
                n.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                    apply: tE((n, r, i) => {
                        let [a] = i, o = e.getId(r.ownerNode);
                        return -1 !== o && t({
                            id: o,
                            removes: [{
                                index: a
                            }]
                        }), n.apply(r, i)
                    })
                });
                let a = {};
                tC("CSSGroupingRule") ? a.CSSGroupingRule = n.CSSGroupingRule : (tC("CSSMediaRule") && (a.CSSMediaRule = n.CSSMediaRule), tC("CSSConditionRule") && (a.CSSConditionRule = n.CSSConditionRule), tC("CSSSupportsRule") && (a.CSSSupportsRule = n.CSSSupportsRule));
                let o = {};
                return Object.entries(a).forEach(([n, r]) => {
                    o[n] = {
                        insertRule: r.prototype.insertRule,
                        deleteRule: r.prototype.deleteRule
                    }, r.prototype.insertRule = new Proxy(o[n].insertRule, {
                        apply: tE((n, r, i) => {
                            let [a, o] = i, s = e.getId(r.parentStyleSheet.ownerNode);
                            return -1 !== s && t({
                                id: s,
                                adds: [{
                                    rule: a,
                                    index: [...tD(r), o || 0]
                                }]
                            }), n.apply(r, i)
                        })
                    }), r.prototype.deleteRule = new Proxy(o[n].deleteRule, {
                        apply: tE((n, r, i) => {
                            let [a] = i, o = e.getId(r.parentStyleSheet.ownerNode);
                            return -1 !== o && t({
                                id: o,
                                removes: [{
                                    index: [...tD(r), a]
                                }]
                            }), n.apply(r, i)
                        })
                    })
                }), tE(() => {
                    n.CSSStyleSheet.prototype.insertRule = r, n.CSSStyleSheet.prototype.deleteRule = i, Object.entries(a).forEach(([t, e]) => {
                        e.prototype.insertRule = o[t].insertRule, e.prototype.deleteRule = o[t].deleteRule
                    })
                })
            }(t, {
                win: n
            }),
            d = function({
                styleDeclarationCb: t,
                mirror: e
            }, {
                win: n
            }) {
                let r = n.CSSStyleDeclaration.prototype.setProperty;
                n.CSSStyleDeclaration.prototype.setProperty = new Proxy(r, {
                    apply: tE((n, r, i) => {
                        var a, o;
                        let [s, u, c] = i, l = e.getId(null === (o = null === (a = r.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                        return -1 !== l && t({
                            id: l,
                            set: {
                                property: s,
                                value: u,
                                priority: c
                            },
                            index: tD(r.parentRule)
                        }), n.apply(r, i)
                    })
                });
                let i = n.CSSStyleDeclaration.prototype.removeProperty;
                return n.CSSStyleDeclaration.prototype.removeProperty = new Proxy(i, {
                    apply: tE((n, r, i) => {
                        var a, o;
                        let [s] = i, u = e.getId(null === (o = null === (a = r.parentRule) || void 0 === a ? void 0 : a.parentStyleSheet) || void 0 === o ? void 0 : o.ownerNode);
                        return -1 !== u && t({
                            id: u,
                            remove: {
                                property: s
                            },
                            index: tD(r.parentRule)
                        }), n.apply(r, i)
                    })
                }), tE(() => {
                    n.CSSStyleDeclaration.prototype.setProperty = r, n.CSSStyleDeclaration.prototype.removeProperty = i
                })
            }(t, {
                win: n
            }),
            f = t.collectFonts ? function({
                fontCb: t,
                doc: e
            }) {
                let n = e.defaultView;
                if (!n) return () => {};
                let r = [],
                    i = new WeakMap,
                    a = n.FontFace;
                n.FontFace = function(t, e, n) {
                    let r = new a(t, e, n);
                    return i.set(r, {
                        family: t,
                        buffer: "string" != typeof e,
                        descriptors: n,
                        fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                    }), r
                };
                let o = ta(e.fonts, "add", function(e) {
                    return function(n) {
                        return setTimeout(() => {
                            let e = i.get(n);
                            e && (t(e), i.delete(n))
                        }, 0), e.apply(this, [n])
                    }
                });
                return r.push(() => {
                    n.FontFace = a
                }), r.push(o), tE(() => {
                    r.forEach(t => t())
                })
            }(t) : () => {},
            p = [];
        for (let e of t.plugins) p.push(e.observer(e.callback, n, e.options));
        return tE(() => {
            tS.forEach(t => t.reset()), r.disconnect(), i(), a(), o(), s(), u(), c();
            try {
                l(), d()
            } catch (t) {}
            f(), p.forEach(t => t())
        })
    }

    function tO(t) {
        return void 0 !== window[t]
    }

    function tC(t) {
        return !!(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
    }
    class tA {
        constructor(t) {
            this.iframes = new WeakMap, this.mutationCb = t.mutationCb
        }
        addIframe(t) {
            this.iframes.set(t, !0)
        }
        addLoadListener(t) {
            this.loadListener = t
        }
        attachIframe(t, e) {
            var n;
            this.mutationCb({
                adds: [{
                    parentId: t.__sn.id,
                    nextId: null,
                    node: e
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
            }), null === (n = this.loadListener) || void 0 === n || n.call(this, t)
        }
    }
    class tB {
        constructor(t) {
            this.restorePatches = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror;
            let e = this;
            this.restorePatches.push(ta(HTMLElement.prototype, "attachShadow", function(t) {
                return function() {
                    let n = t.apply(this, arguments);
                    return this.shadowRoot && e.addShadowRoot(this.shadowRoot, this.ownerDocument), n
                }
            }))
        }
        addShadowRoot(t, e) {
            tT(Object.assign(Object.assign({}, this.bypassOptions), {
                doc: e,
                mutationCb: this.mutationCb,
                mirror: this.mirror,
                shadowDomManager: this
            }), t), tk(Object.assign(Object.assign({}, this.bypassOptions), {
                scrollCb: this.scrollCb,
                doc: t,
                mirror: this.mirror
            }))
        }
        observeAttachShadow(t) {
            if (t.contentWindow) {
                let e = this;
                this.restorePatches.push(ta(t.contentWindow.HTMLElement.prototype, "attachShadow", function(n) {
                    return function() {
                        let r = n.apply(this, arguments);
                        return this.shadowRoot && e.addShadowRoot(this.shadowRoot, t.contentDocument), r
                    }
                }))
            }
        }
        reset() {
            this.restorePatches.forEach(t => t())
        }
    }
    for (var tU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tM = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), tL = 0; tL < tU.length; tL++) tM[tU.charCodeAt(tL)] = tL;
    var tP = function(t) {
        var e, n = new Uint8Array(t),
            r = n.length,
            i = "";
        for (e = 0; e < r; e += 3) i += tU[n[e] >> 2] + tU[(3 & n[e]) << 4 | n[e + 1] >> 4] + tU[(15 & n[e + 1]) << 2 | n[e + 2] >> 6] + tU[63 & n[e + 2]];
        return r % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : r % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
    };
    let tG = new Map,
        tz = (t, e, n) => {
            var r, i;
            let a;
            if (!t || !(tY(t, e) || "object" == typeof t)) return;
            let o = t.constructor.name;
            let s = (r = n, i = o, !(a = tG.get(r)) && (a = new Map, tG.set(r, a)), !a.has(i) && a.set(i, []), a.get(i)),
                u = s.indexOf(t);
            return -1 === u && (u = s.length, s.push(t)), u
        },
        tF = (t, e, n) => [...t].map(t => (function t(e, n, r) {
            if (e instanceof Array) return e.map(e => t(e, n, r));
            if (null === e);
            else if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray) return {
                rr_type: e.constructor.name,
                args: [Object.values(e)]
            };
            else if (e instanceof ArrayBuffer) {
                let t = e.constructor.name;
                return {
                    rr_type: t,
                    base64: tP(e)
                }
            } else if (e instanceof DataView) return {
                rr_type: e.constructor.name,
                args: [t(e.buffer, n, r), e.byteOffset, e.byteLength]
            };
            else if (e instanceof HTMLImageElement) {
                let t = e.constructor.name,
                    {
                        src: n
                    } = e;
                return {
                    rr_type: t,
                    src: n
                }
            } else if (e instanceof ImageData) return {
                rr_type: e.constructor.name,
                args: [t(e.data, n, r), e.width, e.height]
            };
            else if (tY(e, n) || "object" == typeof e) {
                let t = e.constructor.name;
                return {
                    rr_type: t,
                    index: tz(e, n, r)
                }
            }
            return e
        })(t, e, n)),
        tY = (t, e) => !!["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(t => "function" == typeof e[t]).find(n => t instanceof e[n]);

    function tj(t, e, n, r, i, a, o, s) {
        let u = [];
        for (let c of Object.getOwnPropertyNames(t)) try {
            if ("function" != typeof t[c]) continue;
            let l = ta(t, c, function(u) {
                return function(...l) {
                    let d = u.apply(this, l);
                    if (tz(d, s, t), !tu(this.canvas, r, a, i)) {
                        o.getId(this.canvas);
                        let r = tF([...l], s, t),
                            i = {
                                type: e,
                                property: c,
                                args: r
                            };
                        n(this.canvas, i)
                    }
                    return d
                }
            });
            u.push(l)
        } catch (i) {
            let r = ti(t, c, {
                set(t) {
                    n(this.canvas, {
                        type: e,
                        property: c,
                        args: [t],
                        setter: !0
                    })
                }
            });
            u.push(r)
        }
        return u
    }
    class tH {
        reset() {
            this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        constructor(t) {
            this.pendingCanvasMutations = new Map, this.rafStamps = {
                latestId: 0,
                invokeId: null
            }, this.frozen = !1, this.locked = !1, this.processMutation = function(t, e) {
                (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), !this.pendingCanvasMutations.has(t) && this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
            }, this.mutationCb = t.mutationCb, this.mirror = t.mirror, !0 === t.recordCanvas && this.initCanvasMutationObserver(t.win, t.blockClass, t.blockSelector, t.unblockSelector)
        }
        initCanvasMutationObserver(t, e, n, r) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            let i = function(t, e, n, r) {
                    let i = [];
                    try {
                        let a = ta(t.HTMLCanvasElement.prototype, "getContext", function(t) {
                            return function(i, ...a) {
                                return !tu(this, e, n, r) && !("__context" in this) && (this.__context = i), t.apply(this, [i, ...a])
                            }
                        });
                        i.push(a)
                    } catch (t) {
                        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
                    }
                    return () => {
                        i.forEach(t => t())
                    }
                }(t, e, r, n),
                a = function(t, e, n, r, i, a) {
                    let o = [];
                    for (let a of Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype)) try {
                        if ("function" != typeof e.CanvasRenderingContext2D.prototype[a]) continue;
                        let s = ta(e.CanvasRenderingContext2D.prototype, a, function(e) {
                            return function(...o) {
                                return !tu(this.canvas, n, i, r) && setTimeout(() => {
                                    let e = [...o];
                                    if ("drawImage" === a && e[0] && e[0] instanceof HTMLCanvasElement) {
                                        let t = e[0],
                                            n = t.getContext("2d"),
                                            r = null == n ? void 0 : n.getImageData(0, 0, t.width, t.height),
                                            i = null == r ? void 0 : r.data;
                                        e[0] = JSON.stringify(i)
                                    }
                                    t(this.canvas, {
                                        type: b["2D"],
                                        property: a,
                                        args: e
                                    })
                                }, 0), e.apply(this, o)
                            }
                        });
                        o.push(s)
                    } catch (r) {
                        let n = ti(e.CanvasRenderingContext2D.prototype, a, {
                            set(e) {
                                t(this.canvas, {
                                    type: b["2D"],
                                    property: a,
                                    args: [e],
                                    setter: !0
                                })
                            }
                        });
                        o.push(n)
                    }
                    return () => {
                        o.forEach(t => t())
                    }
                }(this.processMutation.bind(this), t, e, r, n, this.mirror),
                o = function(t, e, n, r, i, a) {
                    let o = [];
                    return o.push(...tj(e.WebGLRenderingContext.prototype, b.WebGL, t, n, r, i, a, e)), void 0 !== e.WebGL2RenderingContext && o.push(...tj(e.WebGL2RenderingContext.prototype, b.WebGL2, t, n, r, i, a, e)), () => {
                        o.forEach(t => t())
                    }
                }(this.processMutation.bind(this), t, e, r, n, this.mirror);
            this.resetObservers = () => {
                i(), a(), o()
            }
        }
        startPendingCanvasMutationFlusher() {
            requestAnimationFrame(() => this.flushPendingCanvasMutations())
        }
        startRAFTimestamping() {
            let t = e => {
                this.rafStamps.latestId = e, requestAnimationFrame(t)
            };
            requestAnimationFrame(t)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((t, e) => {
                let n = this.mirror.getId(e);
                this.flushPendingCanvasMutationFor(e, n)
            }), requestAnimationFrame(() => this.flushPendingCanvasMutations())
        }
        flushPendingCanvasMutationFor(t, e) {
            if (this.frozen || this.locked) return;
            let n = this.pendingCanvasMutations.get(t);
            if (!n || -1 === e) return;
            let r = n.map(t => (function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                        for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
                    return n
                })(t, ["type"])),
                {
                    type: i
                } = n[0];
            this.mutationCb({
                id: e,
                type: i,
                commands: r
            }), this.pendingCanvasMutations.delete(t)
        }
    }

    function t$(t) {
        return Object.assign(Object.assign({}, t), {
            timestamp: Date.now()
        })
    }
    let tW = {
        map: {},
        getId: t => t && t.__sn ? t.__sn.id : -1,
        getNode(t) {
            return this.map[t] || null
        },
        removeNodeFromMap(t) {
            let e = t.__sn && t.__sn.id;
            delete this.map[e], t.childNodes && t.childNodes.forEach(t => this.removeNodeFromMap(t))
        },
        has(t) {
            return this.map.hasOwnProperty(t)
        },
        reset() {
            this.map = {}
        }
    };

    function tq(t = {}) {
        let e;
        let {
            emit: n,
            checkoutEveryNms: r,
            checkoutEveryNth: i,
            blockClass: s = "rr-block",
            blockSelector: u = null,
            unblockSelector: c = null,
            ignoreClass: l = "rr-ignore",
            ignoreSelector: d = null,
            maskTextClass: f = "rr-mask",
            maskTextSelector: p = null,
            maskInputSelector: h = null,
            unmaskTextSelector: _ = null,
            unmaskInputSelector: g = null,
            inlineStylesheet: v = !0,
            maskAllText: b = !1,
            maskAllInputs: E,
            maskInputOptions: S,
            slimDOMOptions: w,
            maskInputFn: T,
            maskTextFn: k,
            hooks: x,
            packFn: R,
            sampling: N = {},
            mousemoveWait: D,
            recordCanvas: I = !1,
            userTriggeredOnInput: O = !1,
            collectFonts: C = !1,
            inlineImages: A = !1,
            plugins: B,
            keepIframeSrcFn: U = () => !1,
            onMutation: M
        } = t;
        if (!n) throw Error("emit function is required");
        void 0 !== D && void 0 === N.mousemove && (N.mousemove = D);
        let L = !0 === E ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== S ? S : {},
            P = !0 === w || "all" === w ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === w,
                headMetaDescKeywords: "all" === w
            } : w || {};
        ! function(t = window) {
            "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), !Node.prototype.contains && (Node.prototype.contains = function(t) {
                if (!(0 in arguments)) throw TypeError("1 argument is required");
                do
                    if (this === t) return !0; while (t = t && t.parentNode);
                return !1
            })
        }();
        let G = 0,
            z = t => {
                for (let e of B || []) e.eventProcessor && (t = e.eventProcessor(t));
                return R && (t = R(t)), t
            };
        a = (t, a) => {
            var s;
            if ((null === (s = tS[0]) || void 0 === s ? void 0 : s.isFrozen()) && t.type !== m.FullSnapshot && !(t.type === m.IncrementalSnapshot && t.data.source === y.Mutation) && tS.forEach(t => t.unfreeze()), n(z(t), a), t.type === m.FullSnapshot) e = t, G = 0;
            else if (t.type === m.IncrementalSnapshot) {
                if (t.data.source === y.Mutation && t.data.isAttachIframe) return;
                G++;
                let n = i && G >= i,
                    a = r && t.timestamp - e.timestamp > r;
                (n || a) && o(!0)
            }
        };
        let F = t => {
                a(t$({
                    type: m.IncrementalSnapshot,
                    data: Object.assign({
                        source: y.Mutation
                    }, t)
                }))
            },
            Y = t => a(t$({
                type: m.IncrementalSnapshot,
                data: Object.assign({
                    source: y.Scroll
                }, t)
            })),
            j = t => a(t$({
                type: m.IncrementalSnapshot,
                data: Object.assign({
                    source: y.CanvasMutation
                }, t)
            })),
            H = new tA({
                mutationCb: F
            }),
            $ = new tH({
                recordCanvas: I,
                mutationCb: j,
                win: window,
                blockClass: s,
                blockSelector: u,
                unblockSelector: c,
                mirror: tW
            }),
            W = new tB({
                mutationCb: F,
                scrollCb: Y,
                bypassOptions: {
                    onMutation: M,
                    blockClass: s,
                    blockSelector: u,
                    unblockSelector: c,
                    maskTextClass: f,
                    maskTextSelector: p,
                    unmaskTextSelector: _,
                    maskInputSelector: h,
                    unmaskInputSelector: g,
                    inlineStylesheet: v,
                    maskAllText: b,
                    maskInputOptions: L,
                    maskTextFn: k,
                    maskInputFn: T,
                    recordCanvas: I,
                    inlineImages: A,
                    sampling: N,
                    slimDOMOptions: P,
                    iframeManager: H,
                    canvasManager: $
                },
                mirror: tW
            });
        o = (t = !1) => {
            var e, n, r, i;
            a(t$({
                type: m.Meta,
                data: {
                    href: window.location.href,
                    width: ts(),
                    height: to()
                }
            }), t), tS.forEach(t => t.lock());
            let [o, l] = function(t, e) {
                let {
                    blockClass: n = "rr-block",
                    blockSelector: r = null,
                    unblockSelector: i = null,
                    maskTextClass: a = "rr-mask",
                    maskTextSelector: o = null,
                    unmaskTextSelector: s = null,
                    inlineStylesheet: u = !0,
                    inlineImages: c = !1,
                    recordCanvas: l = !1,
                    maskInputSelector: d = null,
                    unmaskInputSelector: f = null,
                    maskAllText: p = !1,
                    maskAllInputs: h = !1,
                    maskTextFn: _,
                    maskInputFn: g,
                    slimDOM: m = !1,
                    dataURLOptions: y,
                    preserveWhiteSpace: v,
                    onSerialize: b,
                    onIframeLoad: E,
                    iframeLoadTimeout: S,
                    keepIframeSrcFn: w = () => !1
                } = e || {}, T = {};
                return [Q(t, {
                    doc: t,
                    map: T,
                    blockClass: n,
                    blockSelector: r,
                    unblockSelector: i,
                    maskTextClass: a,
                    maskTextSelector: o,
                    unmaskTextSelector: s,
                    skipChild: !1,
                    inlineStylesheet: u,
                    maskInputSelector: d,
                    unmaskInputSelector: f,
                    maskAllText: p,
                    maskInputOptions: !0 === h ? {
                        color: !0,
                        date: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0,
                        textarea: !0,
                        select: !0
                    } : !1 === h ? {} : h,
                    maskTextFn: _,
                    maskInputFn: g,
                    slimDOMOptions: !0 === m || "all" === m ? {
                        script: !0,
                        comment: !0,
                        headFavicon: !0,
                        headWhitespace: !0,
                        headMetaDescKeywords: "all" === m,
                        headMetaSocial: !0,
                        headMetaRobots: !0,
                        headMetaHttpEquiv: !0,
                        headMetaAuthorship: !0,
                        headMetaVerification: !0
                    } : !1 === m ? {} : m,
                    dataURLOptions: y,
                    inlineImages: c,
                    recordCanvas: l,
                    preserveWhiteSpace: v,
                    onSerialize: b,
                    onIframeLoad: E,
                    iframeLoadTimeout: S,
                    keepIframeSrcFn: w
                }), T]
            }(document, {
                blockClass: s,
                blockSelector: u,
                unblockSelector: c,
                maskTextClass: f,
                maskTextSelector: p,
                unmaskTextSelector: _,
                maskInputSelector: h,
                unmaskInputSelector: g,
                inlineStylesheet: v,
                maskAllText: b,
                maskAllInputs: L,
                maskTextFn: k,
                slimDOM: P,
                recordCanvas: I,
                inlineImages: A,
                onSerialize: t => {
                    td(t) && H.addIframe(t), tf(t) && W.addShadowRoot(t.shadowRoot, document)
                },
                onIframeLoad: (t, e) => {
                    H.attachIframe(t, e), W.observeAttachShadow(t)
                },
                keepIframeSrcFn: U
            });
            if (!o) return console.warn("Failed to snapshot the document");
            tW.map = l, a(t$({
                type: m.FullSnapshot,
                data: {
                    node: o,
                    initialOffset: {
                        left: void 0 !== window.pageXOffset ? window.pageXOffset : (null == document ? void 0 : document.documentElement.scrollLeft) || (null === (n = null === (e = null == document ? void 0 : document.body) || void 0 === e ? void 0 : e.parentElement) || void 0 === n ? void 0 : n.scrollLeft) || (null == document ? void 0 : document.body.scrollLeft) || 0,
                        top: void 0 !== window.pageYOffset ? window.pageYOffset : (null == document ? void 0 : document.documentElement.scrollTop) || (null === (i = null === (r = null == document ? void 0 : document.body) || void 0 === r ? void 0 : r.parentElement) || void 0 === i ? void 0 : i.scrollTop) || (null == document ? void 0 : document.body.scrollTop) || 0
                    }
                }
            })), tS.forEach(t => t.unlock())
        };
        try {
            let t = [];
            t.push(tt("DOMContentLoaded", () => {
                a(t$({
                    type: m.DomContentLoaded,
                    data: {}
                }))
            }));
            let e = t => {
                var e;
                return tE(tI)({
                    onMutation: M,
                    mutationCb: F,
                    mousemoveCb: (t, e) => a(t$({
                        type: m.IncrementalSnapshot,
                        data: {
                            source: e,
                            positions: t
                        }
                    })),
                    mouseInteractionCb: t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.MouseInteraction
                        }, t)
                    })),
                    scrollCb: Y,
                    viewportResizeCb: t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.ViewportResize
                        }, t)
                    })),
                    inputCb: t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.Input
                        }, t)
                    })),
                    mediaInteractionCb: t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.MediaInteraction
                        }, t)
                    })),
                    styleSheetRuleCb: t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.StyleSheetRule
                        }, t)
                    })),
                    styleDeclarationCb: t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.StyleDeclaration
                        }, t)
                    })),
                    canvasMutationCb: j,
                    fontCb: t => a(t$({
                        type: m.IncrementalSnapshot,
                        data: Object.assign({
                            source: y.Font
                        }, t)
                    })),
                    blockClass: s,
                    ignoreClass: l,
                    ignoreSelector: d,
                    maskTextClass: f,
                    maskTextSelector: p,
                    unmaskTextSelector: _,
                    maskInputSelector: h,
                    unmaskInputSelector: g,
                    maskInputOptions: L,
                    inlineStylesheet: v,
                    sampling: N,
                    recordCanvas: I,
                    inlineImages: A,
                    userTriggeredOnInput: O,
                    collectFonts: C,
                    doc: t,
                    maskAllText: b,
                    maskInputFn: T,
                    maskTextFn: k,
                    blockSelector: u,
                    unblockSelector: c,
                    slimDOMOptions: P,
                    mirror: tW,
                    iframeManager: H,
                    shadowDomManager: W,
                    canvasManager: $,
                    plugins: (null === (e = null == B ? void 0 : B.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
                        observer: t.observer,
                        options: t.options,
                        callback: e => a(t$({
                            type: m.Plugin,
                            data: {
                                plugin: t.name,
                                payload: e
                            }
                        }))
                    }))) || []
                }, x)
            };
            H.addLoadListener(n => {
                try {
                    t.push(e(n.contentDocument))
                } catch (t) {
                    console.warn(t)
                }
            });
            let n = () => {
                o(), t.push(e(document))
            };
            return "interactive" === document.readyState || "complete" === document.readyState ? n() : t.push(tt("load", () => {
                a(t$({
                    type: m.Load,
                    data: {}
                })), n()
            }, window)), () => {
                t.forEach(t => t())
            }
        } catch (t) {
            console.warn(t)
        }
    }

    function tZ(t) {
        return t > 9999999999 ? t : 1e3 * t
    }
    tq.addCustomEvent = (t, e) => {
        if (!a) throw Error("please add custom event after start recording");
        a(t$({
            type: m.Custom,
            data: {
                tag: t,
                payload: e
            }
        }))
    }, tq.freezePage = () => {
        tS.forEach(t => t.freeze())
    }, tq.takeFullSnapshot = t => {
        if (!o) throw Error("please take full snapshot after start recording");
        o(t)
    }, tq.mirror = tW;

    function tV(t, e) {
        "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate(() => (t.throttledAddEvent({
            type: m.Custom,
            timestamp: 1e3 * (e.timestamp || 0),
            data: {
                tag: "breadcrumb",
                payload: (0, k.normalize)(e, 10, 1e3)
            }
        }), "console" === e.category)))
    }

    function tJ(t) {
        let e = tK(t);
        return e && e instanceof Element && e.closest("button,a") || e
    }

    function tK(t) {
        return function(t) {
            return "object" == typeof t && !!t && "target" in t
        }(t) ? t.target : t
    }
    class tX {
        __init() {
            this._lastMutation = 0
        }
        __init2() {
            this._lastScroll = 0
        }
        __init3() {
            this._clicks = []
        }
        constructor(t, e, n = tV) {
            tX.prototype.__init.call(this), tX.prototype.__init2.call(this), tX.prototype.__init3.call(this), this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
        }
        addListeners() {
            var t;
            let e = () => {
                this._lastScroll = t0()
            };
            let n = (t = () => {
                    this._lastMutation = t0()
                }, !s && (s = [], function() {
                    (0, k.fill)(R, "open", function(t) {
                        return function(...e) {
                            if (s) try {
                                s.forEach(t => t())
                            } catch (t) {}
                            return t.apply(R, e)
                        }
                    })
                }()), s.push(t), () => {
                    let e = s ? s.indexOf(t) : -1;
                    e > -1 && s.splice(e, 1)
                }),
                r = t => {
                    if (!t.target) return;
                    let e = tJ(t);
                    e && this._handleMultiClick(e)
                },
                i = new MutationObserver(() => {
                    this._lastMutation = t0()
                });
            i.observe(R.document.documentElement, {
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0
            }), R.addEventListener("scroll", e, {
                passive: !0
            }), R.addEventListener("click", r, {
                passive: !0
            }), this._teardown = () => {
                R.removeEventListener("scroll", e), R.removeEventListener("click", r), n(), i.disconnect(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
            }
        }
        removeListeners() {
            this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
        }
        handleClick(t, e) {
            var n;
            if (function(t, e) {
                    return !!(!tQ.includes(t.tagName) || "INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "") || "A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target")) || e && t.matches(e)) || !1
                }(e, this._ignoreSelector) || ! function(t) {
                    return !!(t.data && "number" == typeof t.data.nodeId && t.timestamp)
                }(t)) return;
            let r = {
                timestamp: (n = t.timestamp) > 9999999999 ? n / 1e3 : n,
                clickBreadcrumb: t,
                clickCount: 0,
                node: e
            };
            this._clicks.push(r), 1 === this._clicks.length && this._scheduleCheckClicks()
        }
        _handleMultiClick(t) {
            this._getClicks(t).forEach(t => {
                t.clickCount++
            })
        }
        _getClicks(t) {
            return this._clicks.filter(e => e.node === t)
        }
        _checkClicks() {
            let t = [],
                e = t0();
            for (let n of (this._clicks.forEach(n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= e && t.push(n)
                }), t)) {
                let t = this._clicks.indexOf(n);
                t > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(t, 1))
            }
            this._clicks.length && this._scheduleCheckClicks()
        }
        _generateBreadcrumbs(t) {
            let e = this._replay,
                n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
                r = t.mutationAfter && t.mutationAfter <= this._threshold,
                {
                    clickCount: i,
                    clickBreadcrumb: a
                } = t;
            if (!n && !r) {
                let n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                    r = n < 1e3 * this._timeout ? "mutation" : "timeout",
                    o = {
                        type: "default",
                        message: a.message,
                        timestamp: a.timestamp,
                        category: "ui.slowClickDetected",
                        data: {
                            ...a.data,
                            url: R.location.href,
                            route: e.getCurrentRoute(),
                            timeAfterClickMs: n,
                            endReason: r,
                            clickCount: i || 1
                        }
                    };
                this._addBreadcrumbEvent(e, o);
                return
            }
            if (i > 1) {
                let t = {
                    type: "default",
                    message: a.message,
                    timestamp: a.timestamp,
                    category: "ui.multiClick",
                    data: {
                        ...a.data,
                        url: R.location.href,
                        route: e.getCurrentRoute(),
                        clickCount: i,
                        metric: !0
                    }
                };
                this._addBreadcrumbEvent(e, t)
            }
        }
        _scheduleCheckClicks() {
            this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout(() => this._checkClicks(), 1e3)
        }
    }
    let tQ = ["A", "BUTTON", "INPUT"];

    function t0() {
        return Date.now() / 1e3
    }

    function t1(t) {
        return {
            timestamp: Date.now() / 1e3,
            type: "default",
            ...t
        }
    }(_ = w || (w = {}))[_.Document = 0] = "Document", _[_.DocumentType = 1] = "DocumentType", _[_.Element = 2] = "Element", _[_.Text = 3] = "Text", _[_.CDATA = 4] = "CDATA", _[_.Comment = 5] = "Comment";
    let t2 = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled"]),
        t5 = t => e => {
            if (!t.isEnabled()) return;
            let n = function(t) {
                let {
                    target: e,
                    message: n
                } = function(t) {
                    let e;
                    let n = "click" === t.name,
                        r = null;
                    try {
                        r = n ? tJ(t.event) : tK(t.event), e = (0, k.htmlTreeAsString)(r, {
                            maxStringLength: 200
                        }) || "<unknown>"
                    } catch (t) {
                        e = "<unknown>"
                    }
                    return {
                        target: r,
                        message: e
                    }
                }(t);
                return t1({
                    category: `ui.${t.name}`,
                    ...t3(e, n)
                })
            }(e);
            if (!n) return;
            let r = "click" === e.name,
                i = r && e.event;
            r && t.clickDetector && i && !i.altKey && !i.metaKey && !i.ctrlKey && !i.shiftKey && ! function(t, e, n) {
                t.handleClick(e, n)
            }(t.clickDetector, n, tJ(e.event)), tV(t, n)
        };

    function t3(t, e) {
        let n = t && function(t) {
            return "__sn" in t
        }(t) && t.__sn.type === w.Element ? t.__sn : null;
        return {
            message: e,
            data: n ? {
                nodeId: n.id,
                node: {
                    id: n.id,
                    tagName: n.tagName,
                    textContent: t ? Array.from(t.childNodes).map(t => "__sn" in t && t.__sn.type === w.Text && t.__sn.textContent).filter(Boolean).map(t => t.trim()).join("") : "",
                    attributes: function(t) {
                        let e = {};
                        for (let n in t)
                            if (t2.has(n)) {
                                let r = n;
                                ("data-testid" === n || "data-test-id" === n) && (r = "testId"), e[r] = t[n]
                            } return e
                    }(n.attributes)
                }
            } : {}
        }
    }
    let t6 = ["name", "type", "startTime", "transferSize", "duration"];

    function t4(t) {
        return function(e) {
            return t6.every(n => t[n] === e[n])
        }
    }
    let t8 = `/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function t(t){let e=t.length;for(;--e>=0;)t[e]=0}const e=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),a=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),i=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),n=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=new Array(576);t(s);const r=new Array(60);t(r);const o=new Array(512);t(o);const l=new Array(256);t(l);const h=new Array(29);t(h);const d=new Array(30);function _(t,e,a,i,n){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=i,this.max_length=n,this.has_stree=t&&t.length}let f,c,u;function w(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}t(d);const m=t=>t<256?o[t]:o[256+(t>>>7)],b=(t,e)=>{t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255},g=(t,e,a)=>{t.bi_valid>16-a?(t.bi_buf|=e<<t.bi_valid&65535,b(t,t.bi_buf),t.bi_buf=e>>16-t.bi_valid,t.bi_valid+=a-16):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)},p=(t,e,a)=>{g(t,a[2*e],a[2*e+1])},k=(t,e)=>{let a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1},v=(t,e,a)=>{const i=new Array(16);let n,s,r=0;for(n=1;n<=15;n++)r=r+a[n-1]<<1,i[n]=r;for(s=0;s<=e;s++){let e=t[2*s+1];0!==e&&(t[2*s]=k(i[e]++,e))}},y=t=>{let e;for(e=0;e<286;e++)t.dyn_ltree[2*e]=0;for(e=0;e<30;e++)t.dyn_dtree[2*e]=0;for(e=0;e<19;e++)t.bl_tree[2*e]=0;t.dyn_ltree[512]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},x=t=>{t.bi_valid>8?b(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},z=(t,e,a,i)=>{const n=2*e,s=2*a;return t[n]<t[s]||t[n]===t[s]&&i[e]<=i[a]},A=(t,e,a)=>{const i=t.heap[a];let n=a<<1;for(;n<=t.heap_len&&(n<t.heap_len&&z(e,t.heap[n+1],t.heap[n],t.depth)&&n++,!z(e,i,t.heap[n],t.depth));)t.heap[a]=t.heap[n],a=n,n<<=1;t.heap[a]=i},E=(t,i,n)=>{let s,r,o,_,f=0;if(0!==t.sym_next)do{s=255&t.pending_buf[t.sym_buf+f++],s+=(255&t.pending_buf[t.sym_buf+f++])<<8,r=t.pending_buf[t.sym_buf+f++],0===s?p(t,r,i):(o=l[r],p(t,o+256+1,i),_=e[o],0!==_&&(r-=h[o],g(t,r,_)),s--,o=m(s),p(t,o,n),_=a[o],0!==_&&(s-=d[o],g(t,s,_)))}while(f<t.sym_next);p(t,256,i)},R=(t,e)=>{const a=e.dyn_tree,i=e.stat_desc.static_tree,n=e.stat_desc.has_stree,s=e.stat_desc.elems;let r,o,l,h=-1;for(t.heap_len=0,t.heap_max=573,r=0;r<s;r++)0!==a[2*r]?(t.heap[++t.heap_len]=h=r,t.depth[r]=0):a[2*r+1]=0;for(;t.heap_len<2;)l=t.heap[++t.heap_len]=h<2?++h:0,a[2*l]=1,t.depth[l]=0,t.opt_len--,n&&(t.static_len-=i[2*l+1]);for(e.max_code=h,r=t.heap_len>>1;r>=1;r--)A(t,a,r);l=s;do{r=t.heap[1],t.heap[1]=t.heap[t.heap_len--],A(t,a,1),o=t.heap[1],t.heap[--t.heap_max]=r,t.heap[--t.heap_max]=o,a[2*l]=a[2*r]+a[2*o],t.depth[l]=(t.depth[r]>=t.depth[o]?t.depth[r]:t.depth[o])+1,a[2*r+1]=a[2*o+1]=l,t.heap[1]=l++,A(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],((t,e)=>{const a=e.dyn_tree,i=e.max_code,n=e.stat_desc.static_tree,s=e.stat_desc.has_stree,r=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let h,d,_,f,c,u,w=0;for(f=0;f<=15;f++)t.bl_count[f]=0;for(a[2*t.heap[t.heap_max]+1]=0,h=t.heap_max+1;h<573;h++)d=t.heap[h],f=a[2*a[2*d+1]+1]+1,f>l&&(f=l,w++),a[2*d+1]=f,d>i||(t.bl_count[f]++,c=0,d>=o&&(c=r[d-o]),u=a[2*d],t.opt_len+=u*(f+c),s&&(t.static_len+=u*(n[2*d+1]+c)));if(0!==w){do{for(f=l-1;0===t.bl_count[f];)f--;t.bl_count[f]--,t.bl_count[f+1]+=2,t.bl_count[l]--,w-=2}while(w>0);for(f=l;0!==f;f--)for(d=t.bl_count[f];0!==d;)_=t.heap[--h],_>i||(a[2*_+1]!==f&&(t.opt_len+=(f-a[2*_+1])*a[2*_],a[2*_+1]=f),d--)}})(t,e),v(a,h,t.bl_count)},Z=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),e[2*(a+1)+1]=65535,i=0;i<=a;i++)n=r,r=e[2*(i+1)+1],++o<l&&n===r||(o<h?t.bl_tree[2*n]+=o:0!==n?(n!==s&&t.bl_tree[2*n]++,t.bl_tree[32]++):o<=10?t.bl_tree[34]++:t.bl_tree[36]++,o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4))},U=(t,e,a)=>{let i,n,s=-1,r=e[1],o=0,l=7,h=4;for(0===r&&(l=138,h=3),i=0;i<=a;i++)if(n=r,r=e[2*(i+1)+1],!(++o<l&&n===r)){if(o<h)do{p(t,n,t.bl_tree)}while(0!=--o);else 0!==n?(n!==s&&(p(t,n,t.bl_tree),o--),p(t,16,t.bl_tree),g(t,o-3,2)):o<=10?(p(t,17,t.bl_tree),g(t,o-3,3)):(p(t,18,t.bl_tree),g(t,o-11,7));o=0,s=n,0===r?(l=138,h=3):n===r?(l=6,h=3):(l=7,h=4)}};let S=!1;const D=(t,e,a,i)=>{g(t,0+(i?1:0),3),x(t),b(t,a),b(t,~a),a&&t.pending_buf.set(t.window.subarray(e,e+a),t.pending),t.pending+=a};var T=(t,e,a,i)=>{let o,l,h=0;t.level>0?(2===t.strm.data_type&&(t.strm.data_type=(t=>{let e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return 0;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return 1;for(e=32;e<256;e++)if(0!==t.dyn_ltree[2*e])return 1;return 0})(t)),R(t,t.l_desc),R(t,t.d_desc),h=(t=>{let e;for(Z(t,t.dyn_ltree,t.l_desc.max_code),Z(t,t.dyn_dtree,t.d_desc.max_code),R(t,t.bl_desc),e=18;e>=3&&0===t.bl_tree[2*n[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e})(t),o=t.opt_len+3+7>>>3,l=t.static_len+3+7>>>3,l<=o&&(o=l)):o=l=a+5,a+4<=o&&-1!==e?D(t,e,a,i):4===t.strategy||l===o?(g(t,2+(i?1:0),3),E(t,s,r)):(g(t,4+(i?1:0),3),((t,e,a,i)=>{let s;for(g(t,e-257,5),g(t,a-1,5),g(t,i-4,4),s=0;s<i;s++)g(t,t.bl_tree[2*n[s]+1],3);U(t,t.dyn_ltree,e-1),U(t,t.dyn_dtree,a-1)})(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),E(t,t.dyn_ltree,t.dyn_dtree)),y(t),i&&x(t)},O={_tr_init:t=>{S||((()=>{let t,n,w,m,b;const g=new Array(16);for(w=0,m=0;m<28;m++)for(h[m]=w,t=0;t<1<<e[m];t++)l[w++]=m;for(l[w-1]=m,b=0,m=0;m<16;m++)for(d[m]=b,t=0;t<1<<a[m];t++)o[b++]=m;for(b>>=7;m<30;m++)for(d[m]=b<<7,t=0;t<1<<a[m]-7;t++)o[256+b++]=m;for(n=0;n<=15;n++)g[n]=0;for(t=0;t<=143;)s[2*t+1]=8,t++,g[8]++;for(;t<=255;)s[2*t+1]=9,t++,g[9]++;for(;t<=279;)s[2*t+1]=7,t++,g[7]++;for(;t<=287;)s[2*t+1]=8,t++,g[8]++;for(v(s,287,g),t=0;t<30;t++)r[2*t+1]=5,r[2*t]=k(t,5);f=new _(s,e,257,286,15),c=new _(r,a,0,30,15),u=new _(new Array(0),i,0,19,7)})(),S=!0),t.l_desc=new w(t.dyn_ltree,f),t.d_desc=new w(t.dyn_dtree,c),t.bl_desc=new w(t.bl_tree,u),t.bi_buf=0,t.bi_valid=0,y(t)},_tr_stored_block:D,_tr_flush_block:T,_tr_tally:(t,e,a)=>(t.pending_buf[t.sym_buf+t.sym_next++]=e,t.pending_buf[t.sym_buf+t.sym_next++]=e>>8,t.pending_buf[t.sym_buf+t.sym_next++]=a,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(l[a]+256+1)]++,t.dyn_dtree[2*m(e)]++),t.sym_next===t.sym_end),_tr_align:t=>{g(t,2,3),p(t,256,s),(t=>{16===t.bi_valid?(b(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)})(t)}};var F=(t,e,a,i)=>{let n=65535&t|0,s=t>>>16&65535|0,r=0;for(;0!==a;){r=a>2e3?2e3:a,a-=r;do{n=n+e[i++]|0,s=s+n|0}while(--r);n%=65521,s%=65521}return n|s<<16|0};const L=new Uint32Array((()=>{let t,e=[];for(var a=0;a<256;a++){t=a;for(var i=0;i<8;i++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e})());var N=(t,e,a,i)=>{const n=L,s=i+a;t^=-1;for(let a=i;a<s;a++)t=t>>>8^n[255&(t^e[a])];return-1^t},I={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},B={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:C,_tr_stored_block:H,_tr_flush_block:M,_tr_tally:j,_tr_align:K}=O,{Z_NO_FLUSH:P,Z_PARTIAL_FLUSH:Y,Z_FULL_FLUSH:G,Z_FINISH:X,Z_BLOCK:W,Z_OK:q,Z_STREAM_END:J,Z_STREAM_ERROR:Q,Z_DATA_ERROR:V,Z_BUF_ERROR:$,Z_DEFAULT_COMPRESSION:tt,Z_FILTERED:et,Z_HUFFMAN_ONLY:at,Z_RLE:it,Z_FIXED:nt,Z_DEFAULT_STRATEGY:st,Z_UNKNOWN:rt,Z_DEFLATED:ot}=B,lt=(t,e)=>(t.msg=I[e],e),ht=t=>2*t-(t>4?9:0),dt=t=>{let e=t.length;for(;--e>=0;)t[e]=0},_t=t=>{let e,a,i,n=t.w_size;e=t.hash_size,i=e;do{a=t.head[--i],t.head[i]=a>=n?a-n:0}while(--e);e=n,i=e;do{a=t.prev[--i],t.prev[i]=a>=n?a-n:0}while(--e)};let ft=(t,e,a)=>(e<<t.hash_shift^a)&t.hash_mask;const ct=t=>{const e=t.state;let a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(t.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+a),t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))},ut=(t,e)=>{M(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,ct(t.strm)},wt=(t,e)=>{t.pending_buf[t.pending++]=e},mt=(t,e)=>{t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e},bt=(t,e,a,i)=>{let n=t.avail_in;return n>i&&(n=i),0===n?0:(t.avail_in-=n,e.set(t.input.subarray(t.next_in,t.next_in+n),a),1===t.state.wrap?t.adler=F(t.adler,e,n,a):2===t.state.wrap&&(t.adler=N(t.adler,e,n,a)),t.next_in+=n,t.total_in+=n,n)},gt=(t,e)=>{let a,i,n=t.max_chain_length,s=t.strstart,r=t.prev_length,o=t.nice_match;const l=t.strstart>t.w_size-262?t.strstart-(t.w_size-262):0,h=t.window,d=t.w_mask,_=t.prev,f=t.strstart+258;let c=h[s+r-1],u=h[s+r];t.prev_length>=t.good_match&&(n>>=2),o>t.lookahead&&(o=t.lookahead);do{if(a=e,h[a+r]===u&&h[a+r-1]===c&&h[a]===h[s]&&h[++a]===h[s+1]){s+=2,a++;do{}while(h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&h[++s]===h[++a]&&s<f);if(i=258-(f-s),s=f-258,i>r){if(t.match_start=e,r=i,i>=o)break;c=h[s+r-1],u=h[s+r]}}}while((e=_[e&d])>l&&0!=--n);return r<=t.lookahead?r:t.lookahead},pt=t=>{const e=t.w_size;let a,i,n;do{if(i=t.window_size-t.lookahead-t.strstart,t.strstart>=e+(e-262)&&(t.window.set(t.window.subarray(e,e+e-i),0),t.match_start-=e,t.strstart-=e,t.block_start-=e,t.insert>t.strstart&&(t.insert=t.strstart),_t(t),i+=e),0===t.strm.avail_in)break;if(a=bt(t.strm,t.window,t.strstart+t.lookahead,i),t.lookahead+=a,t.lookahead+t.insert>=3)for(n=t.strstart-t.insert,t.ins_h=t.window[n],t.ins_h=ft(t,t.ins_h,t.window[n+1]);t.insert&&(t.ins_h=ft(t,t.ins_h,t.window[n+3-1]),t.prev[n&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=n,n++,t.insert--,!(t.lookahead+t.insert<3)););}while(t.lookahead<262&&0!==t.strm.avail_in)},kt=(t,e)=>{let a,i,n,s=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,r=0,o=t.strm.avail_in;do{if(a=65535,n=t.bi_valid+42>>3,t.strm.avail_out<n)break;if(n=t.strm.avail_out-n,i=t.strstart-t.block_start,a>i+t.strm.avail_in&&(a=i+t.strm.avail_in),a>n&&(a=n),a<s&&(0===a&&e!==X||e===P||a!==i+t.strm.avail_in))break;r=e===X&&a===i+t.strm.avail_in?1:0,H(t,0,0,r),t.pending_buf[t.pending-4]=a,t.pending_buf[t.pending-3]=a>>8,t.pending_buf[t.pending-2]=~a,t.pending_buf[t.pending-1]=~a>>8,ct(t.strm),i&&(i>a&&(i=a),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+i),t.strm.next_out),t.strm.next_out+=i,t.strm.avail_out-=i,t.strm.total_out+=i,t.block_start+=i,a-=i),a&&(bt(t.strm,t.strm.output,t.strm.next_out,a),t.strm.next_out+=a,t.strm.avail_out-=a,t.strm.total_out+=a)}while(0===r);return o-=t.strm.avail_in,o&&(o>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=o&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-o,t.strm.next_in),t.strstart),t.strstart+=o,t.insert+=o>t.w_size-t.insert?t.w_size-t.insert:o),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),r?4:e!==P&&e!==X&&0===t.strm.avail_in&&t.strstart===t.block_start?2:(n=t.window_size-t.strstart,t.strm.avail_in>n&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,n+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),n>t.strm.avail_in&&(n=t.strm.avail_in),n&&(bt(t.strm,t.window,t.strstart,n),t.strstart+=n,t.insert+=n>t.w_size-t.insert?t.w_size-t.insert:n),t.high_water<t.strstart&&(t.high_water=t.strstart),n=t.bi_valid+42>>3,n=t.pending_buf_size-n>65535?65535:t.pending_buf_size-n,s=n>t.w_size?t.w_size:n,i=t.strstart-t.block_start,(i>=s||(i||e===X)&&e!==P&&0===t.strm.avail_in&&i<=n)&&(a=i>n?n:i,r=e===X&&0===t.strm.avail_in&&a===i?1:0,H(t,t.block_start,a,r),t.block_start+=a,ct(t.strm)),r?3:1)},vt=(t,e)=>{let a,i;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a)),t.match_length>=3)if(i=j(t,t.strstart-t.match_start,t.match_length-3),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=3){t.match_length--;do{t.strstart++,t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=ft(t,t.ins_h,t.window[t.strstart+1]);else i=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(i&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2},yt=(t,e)=>{let a,i,n;for(;;){if(t.lookahead<262){if(pt(t),t.lookahead<262&&e===P)return 1;if(0===t.lookahead)break}if(a=0,t.lookahead>=3&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=2,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-262&&(t.match_length=gt(t,a),t.match_length<=5&&(t.strategy===et||3===t.match_length&&t.strstart-t.match_start>4096)&&(t.match_length=2)),t.prev_length>=3&&t.match_length<=t.prev_length){n=t.strstart+t.lookahead-3,i=j(t,t.strstart-1-t.prev_match,t.prev_length-3),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=n&&(t.ins_h=ft(t,t.ins_h,t.window[t.strstart+3-1]),a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=2,t.strstart++,i&&(ut(t,!1),0===t.strm.avail_out))return 1}else if(t.match_available){if(i=j(t,0,t.window[t.strstart-1]),i&&ut(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return 1}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(i=j(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<2?t.strstart:2,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2};function xt(t,e,a,i,n){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=i,this.func=n}const zt=[new xt(0,0,0,0,kt),new xt(4,4,8,4,vt),new xt(4,5,16,8,vt),new xt(4,6,32,32,vt),new xt(4,4,16,16,yt),new xt(8,16,32,32,yt),new xt(8,16,128,128,yt),new xt(8,32,128,256,yt),new xt(32,128,258,1024,yt),new xt(32,258,258,4096,yt)];function At(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ot,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),dt(this.dyn_ltree),dt(this.dyn_dtree),dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Et=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||42!==e.status&&57!==e.status&&69!==e.status&&73!==e.status&&91!==e.status&&103!==e.status&&113!==e.status&&666!==e.status?1:0},Rt=t=>{if(Et(t))return lt(t,Q);t.total_in=t.total_out=0,t.data_type=rt;const e=t.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=2===e.wrap?57:e.wrap?42:113,t.adler=2===e.wrap?0:1,e.last_flush=-2,C(e),q},Zt=t=>{const e=Rt(t);var a;return e===q&&((a=t.state).window_size=2*a.w_size,dt(a.head),a.max_lazy_match=zt[a.level].max_lazy,a.good_match=zt[a.level].good_length,a.nice_match=zt[a.level].nice_length,a.max_chain_length=zt[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=2,a.match_available=0,a.ins_h=0),e},Ut=(t,e,a,i,n,s)=>{if(!t)return Q;let r=1;if(e===tt&&(e=6),i<0?(r=0,i=-i):i>15&&(r=2,i-=16),n<1||n>9||a!==ot||i<8||i>15||e<0||e>9||s<0||s>nt||8===i&&1!==r)return lt(t,Q);8===i&&(i=9);const o=new At;return t.state=o,o.strm=t,o.status=42,o.wrap=r,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=n+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+3-1)/3),o.window=new Uint8Array(2*o.w_size),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<n+6,o.pending_buf_size=4*o.lit_bufsize,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=3*(o.lit_bufsize-1),o.level=e,o.strategy=s,o.method=a,Zt(t)};var St={deflateInit:(t,e)=>Ut(t,e,ot,15,8,st),deflateInit2:Ut,deflateReset:Zt,deflateResetKeep:Rt,deflateSetHeader:(t,e)=>Et(t)||2!==t.state.wrap?Q:(t.state.gzhead=e,q),deflate:(t,e)=>{if(Et(t)||e>W||e<0)return t?lt(t,Q):Q;const a=t.state;if(!t.output||0!==t.avail_in&&!t.input||666===a.status&&e!==X)return lt(t,0===t.avail_out?$:Q);const i=a.last_flush;if(a.last_flush=e,0!==a.pending){if(ct(t),0===t.avail_out)return a.last_flush=-1,q}else if(0===t.avail_in&&ht(e)<=ht(i)&&e!==X)return lt(t,$);if(666===a.status&&0!==t.avail_in)return lt(t,$);if(42===a.status&&0===a.wrap&&(a.status=113),42===a.status){let e=ot+(a.w_bits-8<<4)<<8,i=-1;if(i=a.strategy>=at||a.level<2?0:a.level<6?1:6===a.level?2:3,e|=i<<6,0!==a.strstart&&(e|=32),e+=31-e%31,mt(a,e),0!==a.strstart&&(mt(a,t.adler>>>16),mt(a,65535&t.adler)),t.adler=1,a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(57===a.status)if(t.adler=0,wt(a,31),wt(a,139),wt(a,8),a.gzhead)wt(a,(a.gzhead.text?1:0)+(a.gzhead.hcrc?2:0)+(a.gzhead.extra?4:0)+(a.gzhead.name?8:0)+(a.gzhead.comment?16:0)),wt(a,255&a.gzhead.time),wt(a,a.gzhead.time>>8&255),wt(a,a.gzhead.time>>16&255),wt(a,a.gzhead.time>>24&255),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,255&a.gzhead.os),a.gzhead.extra&&a.gzhead.extra.length&&(wt(a,255&a.gzhead.extra.length),wt(a,a.gzhead.extra.length>>8&255)),a.gzhead.hcrc&&(t.adler=N(t.adler,a.pending_buf,a.pending,0)),a.gzindex=0,a.status=69;else if(wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,0),wt(a,9===a.level?2:a.strategy>=at||a.level<2?4:0),wt(a,3),a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q;if(69===a.status){if(a.gzhead.extra){let e=a.pending,i=(65535&a.gzhead.extra.length)-a.gzindex;for(;a.pending+i>a.pending_buf_size;){let n=a.pending_buf_size-a.pending;if(a.pending_buf.set(a.gzhead.extra.subarray(a.gzindex,a.gzindex+n),a.pending),a.pending=a.pending_buf_size,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex+=n,ct(t),0!==a.pending)return a.last_flush=-1,q;e=0,i-=n}let n=new Uint8Array(a.gzhead.extra);a.pending_buf.set(n.subarray(a.gzindex,a.gzindex+i),a.pending),a.pending+=i,a.gzhead.hcrc&&a.pending>e&&(t.adler=N(t.adler,a.pending_buf,a.pending-e,e)),a.gzindex=0}a.status=73}if(73===a.status){if(a.gzhead.name){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.name.length?255&a.gzhead.name.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),a.gzindex=0}a.status=91}if(91===a.status){if(a.gzhead.comment){let e,i=a.pending;do{if(a.pending===a.pending_buf_size){if(a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i)),ct(t),0!==a.pending)return a.last_flush=-1,q;i=0}e=a.gzindex<a.gzhead.comment.length?255&a.gzhead.comment.charCodeAt(a.gzindex++):0,wt(a,e)}while(0!==e);a.gzhead.hcrc&&a.pending>i&&(t.adler=N(t.adler,a.pending_buf,a.pending-i,i))}a.status=103}if(103===a.status){if(a.gzhead.hcrc){if(a.pending+2>a.pending_buf_size&&(ct(t),0!==a.pending))return a.last_flush=-1,q;wt(a,255&t.adler),wt(a,t.adler>>8&255),t.adler=0}if(a.status=113,ct(t),0!==a.pending)return a.last_flush=-1,q}if(0!==t.avail_in||0!==a.lookahead||e!==P&&666!==a.status){let i=0===a.level?kt(a,e):a.strategy===at?((t,e)=>{let a;for(;;){if(0===t.lookahead&&(pt(t),0===t.lookahead)){if(e===P)return 1;break}if(t.match_length=0,a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):a.strategy===it?((t,e)=>{let a,i,n,s;const r=t.window;for(;;){if(t.lookahead<=258){if(pt(t),t.lookahead<=258&&e===P)return 1;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=3&&t.strstart>0&&(n=t.strstart-1,i=r[n],i===r[++n]&&i===r[++n]&&i===r[++n])){s=t.strstart+258;do{}while(i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&i===r[++n]&&n<s);t.match_length=258-(s-n),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=3?(a=j(t,1,t.match_length-3),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=j(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(ut(t,!1),0===t.strm.avail_out))return 1}return t.insert=0,e===X?(ut(t,!0),0===t.strm.avail_out?3:4):t.sym_next&&(ut(t,!1),0===t.strm.avail_out)?1:2})(a,e):zt[a.level].func(a,e);if(3!==i&&4!==i||(a.status=666),1===i||3===i)return 0===t.avail_out&&(a.last_flush=-1),q;if(2===i&&(e===Y?K(a):e!==W&&(H(a,0,0,!1),e===G&&(dt(a.head),0===a.lookahead&&(a.strstart=0,a.block_start=0,a.insert=0))),ct(t),0===t.avail_out))return a.last_flush=-1,q}return e!==X?q:a.wrap<=0?J:(2===a.wrap?(wt(a,255&t.adler),wt(a,t.adler>>8&255),wt(a,t.adler>>16&255),wt(a,t.adler>>24&255),wt(a,255&t.total_in),wt(a,t.total_in>>8&255),wt(a,t.total_in>>16&255),wt(a,t.total_in>>24&255)):(mt(a,t.adler>>>16),mt(a,65535&t.adler)),ct(t),a.wrap>0&&(a.wrap=-a.wrap),0!==a.pending?q:J)},deflateEnd:t=>{if(Et(t))return Q;const e=t.state.status;return t.state=null,113===e?lt(t,V):q},deflateSetDictionary:(t,e)=>{let a=e.length;if(Et(t))return Q;const i=t.state,n=i.wrap;if(2===n||1===n&&42!==i.status||i.lookahead)return Q;if(1===n&&(t.adler=F(t.adler,e,a,0)),i.wrap=0,a>=i.w_size){0===n&&(dt(i.head),i.strstart=0,i.block_start=0,i.insert=0);let t=new Uint8Array(i.w_size);t.set(e.subarray(a-i.w_size,a),0),e=t,a=i.w_size}const s=t.avail_in,r=t.next_in,o=t.input;for(t.avail_in=a,t.next_in=0,t.input=e,pt(i);i.lookahead>=3;){let t=i.strstart,e=i.lookahead-2;do{i.ins_h=ft(i,i.ins_h,i.window[t+3-1]),i.prev[t&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=t,t++}while(--e);i.strstart=t,i.lookahead=2,pt(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=2,i.match_available=0,t.next_in=r,t.input=o,t.avail_in=s,i.wrap=n,q},deflateInfo:"pako deflate (from Nodeca project)"};const Dt=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var Tt=function(t){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const a=e.shift();if(a){if("object"!=typeof a)throw new TypeError(a+"must be non-object");for(const e in a)Dt(a,e)&&(t[e]=a[e])}}return t},Ot=t=>{let e=0;for(let a=0,i=t.length;a<i;a++)e+=t[a].length;const a=new Uint8Array(e);for(let e=0,i=0,n=t.length;e<n;e++){let n=t[e];a.set(n,i),i+=n.length}return a};let Ft=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){Ft=!1}const Lt=new Uint8Array(256);for(let t=0;t<256;t++)Lt[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Lt[254]=Lt[254]=1;var Nt=t=>{if("function"==typeof TextEncoder&&TextEncoder.prototype.encode)return(new TextEncoder).encode(t);let e,a,i,n,s,r=t.length,o=0;for(n=0;n<r;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),o+=a<128?1:a<2048?2:a<65536?3:4;for(e=new Uint8Array(o),s=0,n=0;s<o;n++)a=t.charCodeAt(n),55296==(64512&a)&&n+1<r&&(i=t.charCodeAt(n+1),56320==(64512&i)&&(a=65536+(a-55296<<10)+(i-56320),n++)),a<128?e[s++]=a:a<2048?(e[s++]=192|a>>>6,e[s++]=128|63&a):a<65536?(e[s++]=224|a>>>12,e[s++]=128|a>>>6&63,e[s++]=128|63&a):(e[s++]=240|a>>>18,e[s++]=128|a>>>12&63,e[s++]=128|a>>>6&63,e[s++]=128|63&a);return e},It=(t,e)=>{const a=e||t.length;if("function"==typeof TextDecoder&&TextDecoder.prototype.decode)return(new TextDecoder).decode(t.subarray(0,e));let i,n;const s=new Array(2*a);for(n=0,i=0;i<a;){let e=t[i++];if(e<128){s[n++]=e;continue}let r=Lt[e];if(r>4)s[n++]=65533,i+=r-1;else{for(e&=2===r?31:3===r?15:7;r>1&&i<a;)e=e<<6|63&t[i++],r--;r>1?s[n++]=65533:e<65536?s[n++]=e:(e-=65536,s[n++]=55296|e>>10&1023,s[n++]=56320|1023&e)}}return((t,e)=>{if(e<65534&&t.subarray&&Ft)return String.fromCharCode.apply(null,t.length===e?t:t.subarray(0,e));let a="";for(let i=0;i<e;i++)a+=String.fromCharCode(t[i]);return a})(s,n)},Bt=(t,e)=>{(e=e||t.length)>t.length&&(e=t.length);let a=e-1;for(;a>=0&&128==(192&t[a]);)a--;return a<0||0===a?e:a+Lt[t[a]]>e?a:e};var Ct=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0};const Ht=Object.prototype.toString,{Z_NO_FLUSH:Mt,Z_SYNC_FLUSH:jt,Z_FULL_FLUSH:Kt,Z_FINISH:Pt,Z_OK:Yt,Z_STREAM_END:Gt,Z_DEFAULT_COMPRESSION:Xt,Z_DEFAULT_STRATEGY:Wt,Z_DEFLATED:qt}=B;function Jt(t){this.options=Tt({level:Xt,method:qt,chunkSize:16384,windowBits:15,memLevel:8,strategy:Wt},t||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=St.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Yt)throw new Error(I[a]);if(e.header&&St.deflateSetHeader(this.strm,e.header),e.dictionary){let t;if(t="string"==typeof e.dictionary?Nt(e.dictionary):"[object ArrayBuffer]"===Ht.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,a=St.deflateSetDictionary(this.strm,t),a!==Yt)throw new Error(I[a]);this._dict_set=!0}}function Qt(t,e){const a=new Jt(e);if(a.push(t,!0),a.err)throw a.msg||I[a.err];return a.result}Jt.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize;let n,s;if(this.ended)return!1;for(s=e===~~e?e:!0===e?Pt:Mt,"string"==typeof t?a.input=Nt(t):"[object ArrayBuffer]"===Ht.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;)if(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),(s===jt||s===Kt)&&a.avail_out<=6)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else{if(n=St.deflate(a,s),n===Gt)return a.next_out>0&&this.onData(a.output.subarray(0,a.next_out)),n=St.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===Yt;if(0!==a.avail_out){if(s>0&&a.next_out>0)this.onData(a.output.subarray(0,a.next_out)),a.avail_out=0;else if(0===a.avail_in)break}else this.onData(a.output)}return!0},Jt.prototype.onData=function(t){this.chunks.push(t)},Jt.prototype.onEnd=function(t){t===Yt&&(this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Vt={Deflate:Jt,deflate:Qt,deflateRaw:function(t,e){return(e=e||{}).raw=!0,Qt(t,e)},gzip:function(t,e){return(e=e||{}).gzip=!0,Qt(t,e)},constants:B};var $t=function(t,e){let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z,A;const E=t.state;a=t.next_in,z=t.input,i=a+(t.avail_in-5),n=t.next_out,A=t.output,s=n-(e-t.avail_out),r=n+(t.avail_out-257),o=E.dmax,l=E.wsize,h=E.whave,d=E.wnext,_=E.window,f=E.hold,c=E.bits,u=E.lencode,w=E.distcode,m=(1<<E.lenbits)-1,b=(1<<E.distbits)-1;t:do{c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=u[f&m];e:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,0===p)A[n++]=65535&g;else{if(!(16&p)){if(0==(64&p)){g=u[(65535&g)+(f&(1<<p)-1)];continue e}if(32&p){E.mode=16191;break t}t.msg="invalid literal/length code",E.mode=16209;break t}k=65535&g,p&=15,p&&(c<p&&(f+=z[a++]<<c,c+=8),k+=f&(1<<p)-1,f>>>=p,c-=p),c<15&&(f+=z[a++]<<c,c+=8,f+=z[a++]<<c,c+=8),g=w[f&b];a:for(;;){if(p=g>>>24,f>>>=p,c-=p,p=g>>>16&255,!(16&p)){if(0==(64&p)){g=w[(65535&g)+(f&(1<<p)-1)];continue a}t.msg="invalid distance code",E.mode=16209;break t}if(v=65535&g,p&=15,c<p&&(f+=z[a++]<<c,c+=8,c<p&&(f+=z[a++]<<c,c+=8)),v+=f&(1<<p)-1,v>o){t.msg="invalid distance too far back",E.mode=16209;break t}if(f>>>=p,c-=p,p=n-s,v>p){if(p=v-p,p>h&&E.sane){t.msg="invalid distance too far back",E.mode=16209;break t}if(y=0,x=_,0===d){if(y+=l-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}else if(d<p){if(y+=l+d-p,p-=d,p<k){k-=p;do{A[n++]=_[y++]}while(--p);if(y=0,d<k){p=d,k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}}}else if(y+=d-p,p<k){k-=p;do{A[n++]=_[y++]}while(--p);y=n-v,x=A}for(;k>2;)A[n++]=x[y++],A[n++]=x[y++],A[n++]=x[y++],k-=3;k&&(A[n++]=x[y++],k>1&&(A[n++]=x[y++]))}else{y=n-v;do{A[n++]=A[y++],A[n++]=A[y++],A[n++]=A[y++],k-=3}while(k>2);k&&(A[n++]=A[y++],k>1&&(A[n++]=A[y++]))}break}}break}}while(a<i&&n<r);k=c>>3,a-=k,c-=k<<3,f&=(1<<c)-1,t.next_in=a,t.next_out=n,t.avail_in=a<i?i-a+5:5-(a-i),t.avail_out=n<r?r-n+257:257-(n-r),E.hold=f,E.bits=c};const te=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),ee=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ae=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ie=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var ne=(t,e,a,i,n,s,r,o)=>{const l=o.bits;let h,d,_,f,c,u,w=0,m=0,b=0,g=0,p=0,k=0,v=0,y=0,x=0,z=0,A=null;const E=new Uint16Array(16),R=new Uint16Array(16);let Z,U,S,D=null;for(w=0;w<=15;w++)E[w]=0;for(m=0;m<i;m++)E[e[a+m]]++;for(p=l,g=15;g>=1&&0===E[g];g--);if(p>g&&(p=g),0===g)return n[s++]=20971520,n[s++]=20971520,o.bits=1,0;for(b=1;b<g&&0===E[b];b++);for(p<b&&(p=b),y=1,w=1;w<=15;w++)if(y<<=1,y-=E[w],y<0)return-1;if(y>0&&(0===t||1!==g))return-1;for(R[1]=0,w=1;w<15;w++)R[w+1]=R[w]+E[w];for(m=0;m<i;m++)0!==e[a+m]&&(r[R[e[a+m]]++]=m);if(0===t?(A=D=r,u=20):1===t?(A=te,D=ee,u=257):(A=ae,D=ie,u=0),z=0,m=0,w=b,c=s,k=p,v=0,_=-1,x=1<<p,f=x-1,1===t&&x>852||2===t&&x>592)return 1;for(;;){Z=w-v,r[m]+1<u?(U=0,S=r[m]):r[m]>=u?(U=D[r[m]-u],S=A[r[m]-u]):(U=96,S=0),h=1<<w-v,d=1<<k,b=d;do{d-=h,n[c+(z>>v)+d]=Z<<24|U<<16|S|0}while(0!==d);for(h=1<<w-1;z&h;)h>>=1;if(0!==h?(z&=h-1,z+=h):z=0,m++,0==--E[w]){if(w===g)break;w=e[a+r[m]]}if(w>p&&(z&f)!==_){for(0===v&&(v=p),c+=b,k=w-v,y=1<<k;k+v<g&&(y-=E[k+v],!(y<=0));)k++,y<<=1;if(x+=1<<k,1===t&&x>852||2===t&&x>592)return 1;_=z&f,n[_]=p<<24|k<<16|c-s|0}}return 0!==z&&(n[c+z]=w-v<<24|64<<16|0),o.bits=p,0};const{Z_FINISH:se,Z_BLOCK:re,Z_TREES:oe,Z_OK:le,Z_STREAM_END:he,Z_NEED_DICT:de,Z_STREAM_ERROR:_e,Z_DATA_ERROR:fe,Z_MEM_ERROR:ce,Z_BUF_ERROR:ue,Z_DEFLATED:we}=B,me=16209,be=t=>(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24);function ge(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const pe=t=>{if(!t)return 1;const e=t.state;return!e||e.strm!==t||e.mode<16180||e.mode>16211?1:0},ke=t=>{if(pe(t))return _e;const e=t.state;return t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=16180,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(852),e.distcode=e.distdyn=new Int32Array(592),e.sane=1,e.back=-1,le},ve=t=>{if(pe(t))return _e;const e=t.state;return e.wsize=0,e.whave=0,e.wnext=0,ke(t)},ye=(t,e)=>{let a;if(pe(t))return _e;const i=t.state;return e<0?(a=0,e=-e):(a=5+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?_e:(null!==i.window&&i.wbits!==e&&(i.window=null),i.wrap=a,i.wbits=e,ve(t))},xe=(t,e)=>{if(!t)return _e;const a=new ge;t.state=a,a.strm=t,a.window=null,a.mode=16180;const i=ye(t,e);return i!==le&&(t.state=null),i};let ze,Ae,Ee=!0;const Re=t=>{if(Ee){ze=new Int32Array(512),Ae=new Int32Array(32);let e=0;for(;e<144;)t.lens[e++]=8;for(;e<256;)t.lens[e++]=9;for(;e<280;)t.lens[e++]=7;for(;e<288;)t.lens[e++]=8;for(ne(1,t.lens,0,288,ze,0,t.work,{bits:9}),e=0;e<32;)t.lens[e++]=5;ne(2,t.lens,0,32,Ae,0,t.work,{bits:5}),Ee=!1}t.lencode=ze,t.lenbits=9,t.distcode=Ae,t.distbits=5},Ze=(t,e,a,i)=>{let n;const s=t.state;return null===s.window&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(a-s.wsize,a),0),s.wnext=0,s.whave=s.wsize):(n=s.wsize-s.wnext,n>i&&(n=i),s.window.set(e.subarray(a-i,a-i+n),s.wnext),(i-=n)?(s.window.set(e.subarray(a-i,a),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=n,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=n))),0};var Ue={inflateReset:ve,inflateReset2:ye,inflateResetKeep:ke,inflateInit:t=>xe(t,15),inflateInit2:xe,inflate:(t,e)=>{let a,i,n,s,r,o,l,h,d,_,f,c,u,w,m,b,g,p,k,v,y,x,z=0;const A=new Uint8Array(4);let E,R;const Z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(pe(t)||!t.output||!t.input&&0!==t.avail_in)return _e;a=t.state,16191===a.mode&&(a.mode=16192),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,_=o,f=l,x=le;t:for(;;)switch(a.mode){case 16180:if(0===a.wrap){a.mode=16192;break}for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(2&a.wrap&&35615===h){0===a.wbits&&(a.wbits=15),a.check=0,A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0),h=0,d=0,a.mode=16181;break}if(a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&h)<<8)+(h>>8))%31){t.msg="incorrect header check",a.mode=me;break}if((15&h)!==we){t.msg="unknown compression method",a.mode=me;break}if(h>>>=4,d-=4,y=8+(15&h),0===a.wbits&&(a.wbits=y),y>15||y>a.wbits){t.msg="invalid window size",a.mode=me;break}a.dmax=1<<a.wbits,a.flags=0,t.adler=a.check=1,a.mode=512&h?16189:16191,h=0,d=0;break;case 16181:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.flags=h,(255&a.flags)!==we){t.msg="unknown compression method",a.mode=me;break}if(57344&a.flags){t.msg="unknown header flags set",a.mode=me;break}a.head&&(a.head.text=h>>8&1),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16182;case 16182:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.time=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,A[2]=h>>>16&255,A[3]=h>>>24&255,a.check=N(a.check,A,4,0)),h=0,d=0,a.mode=16183;case 16183:for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.head&&(a.head.xflags=255&h,a.head.os=h>>8),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0,a.mode=16184;case 16184:if(1024&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length=h,a.head&&(a.head.extra_len=h),512&a.flags&&4&a.wrap&&(A[0]=255&h,A[1]=h>>>8&255,a.check=N(a.check,A,2,0)),h=0,d=0}else a.head&&(a.head.extra=null);a.mode=16185;case 16185:if(1024&a.flags&&(c=a.length,c>o&&(c=o),c&&(a.head&&(y=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Uint8Array(a.head.extra_len)),a.head.extra.set(i.subarray(s,s+c),y)),512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,a.length-=c),a.length))break t;a.length=0,a.mode=16186;case 16186:if(2048&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.name+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=16187;case 16187:if(4096&a.flags){if(0===o)break t;c=0;do{y=i[s+c++],a.head&&y&&a.length<65536&&(a.head.comment+=String.fromCharCode(y))}while(y&&c<o);if(512&a.flags&&4&a.wrap&&(a.check=N(a.check,i,c,s)),o-=c,s+=c,y)break t}else a.head&&(a.head.comment=null);a.mode=16188;case 16188:if(512&a.flags){for(;d<16;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(65535&a.check)){t.msg="header crc mismatch",a.mode=me;break}h=0,d=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),t.adler=a.check=0,a.mode=16191;break;case 16189:for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}t.adler=a.check=be(h),h=0,d=0,a.mode=16190;case 16190:if(0===a.havedict)return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,de;t.adler=a.check=1,a.mode=16191;case 16191:if(e===re||e===oe)break t;case 16192:if(a.last){h>>>=7&d,d-=7&d,a.mode=16206;break}for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}switch(a.last=1&h,h>>>=1,d-=1,3&h){case 0:a.mode=16193;break;case 1:if(Re(a),a.mode=16199,e===oe){h>>>=2,d-=2;break t}break;case 2:a.mode=16196;break;case 3:t.msg="invalid block type",a.mode=me}h>>>=2,d-=2;break;case 16193:for(h>>>=7&d,d-=7&d;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if((65535&h)!=(h>>>16^65535)){t.msg="invalid stored block lengths",a.mode=me;break}if(a.length=65535&h,h=0,d=0,a.mode=16194,e===oe)break t;case 16194:a.mode=16195;case 16195:if(c=a.length,c){if(c>o&&(c=o),c>l&&(c=l),0===c)break t;n.set(i.subarray(s,s+c),r),o-=c,s+=c,l-=c,r+=c,a.length-=c;break}a.mode=16191;break;case 16196:for(;d<14;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(a.nlen=257+(31&h),h>>>=5,d-=5,a.ndist=1+(31&h),h>>>=5,d-=5,a.ncode=4+(15&h),h>>>=4,d-=4,a.nlen>286||a.ndist>30){t.msg="too many length or distance symbols",a.mode=me;break}a.have=0,a.mode=16197;case 16197:for(;a.have<a.ncode;){for(;d<3;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.lens[Z[a.have++]]=7&h,h>>>=3,d-=3}for(;a.have<19;)a.lens[Z[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,E={bits:a.lenbits},x=ne(0,a.lens,0,19,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid code lengths set",a.mode=me;break}a.have=0,a.mode=16198;case 16198:for(;a.have<a.nlen+a.ndist;){for(;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(g<16)h>>>=m,d-=m,a.lens[a.have++]=g;else{if(16===g){for(R=m+2;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(h>>>=m,d-=m,0===a.have){t.msg="invalid bit length repeat",a.mode=me;break}y=a.lens[a.have-1],c=3+(3&h),h>>>=2,d-=2}else if(17===g){for(R=m+3;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=3+(7&h),h>>>=3,d-=3}else{for(R=m+7;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=m,d-=m,y=0,c=11+(127&h),h>>>=7,d-=7}if(a.have+c>a.nlen+a.ndist){t.msg="invalid bit length repeat",a.mode=me;break}for(;c--;)a.lens[a.have++]=y}}if(a.mode===me)break;if(0===a.lens[256]){t.msg="invalid code -- missing end-of-block",a.mode=me;break}if(a.lenbits=9,E={bits:a.lenbits},x=ne(1,a.lens,0,a.nlen,a.lencode,0,a.work,E),a.lenbits=E.bits,x){t.msg="invalid literal/lengths set",a.mode=me;break}if(a.distbits=6,a.distcode=a.distdyn,E={bits:a.distbits},x=ne(2,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,E),a.distbits=E.bits,x){t.msg="invalid distances set",a.mode=me;break}if(a.mode=16199,e===oe)break t;case 16199:a.mode=16200;case 16200:if(o>=6&&l>=258){t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,$t(t,f),r=t.next_out,n=t.output,l=t.avail_out,s=t.next_in,i=t.input,o=t.avail_in,h=a.hold,d=a.bits,16191===a.mode&&(a.back=-1);break}for(a.back=0;z=a.lencode[h&(1<<a.lenbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(b&&0==(240&b)){for(p=m,k=b,v=g;z=a.lencode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,a.length=g,0===b){a.mode=16205;break}if(32&b){a.back=-1,a.mode=16191;break}if(64&b){t.msg="invalid literal/length code",a.mode=me;break}a.extra=15&b,a.mode=16201;case 16201:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.length+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=16202;case 16202:for(;z=a.distcode[h&(1<<a.distbits)-1],m=z>>>24,b=z>>>16&255,g=65535&z,!(m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(0==(240&b)){for(p=m,k=b,v=g;z=a.distcode[v+((h&(1<<p+k)-1)>>p)],m=z>>>24,b=z>>>16&255,g=65535&z,!(p+m<=d);){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}h>>>=p,d-=p,a.back+=p}if(h>>>=m,d-=m,a.back+=m,64&b){t.msg="invalid distance code",a.mode=me;break}a.offset=g,a.extra=15&b,a.mode=16203;case 16203:if(a.extra){for(R=a.extra;d<R;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}a.offset+=h&(1<<a.extra)-1,h>>>=a.extra,d-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){t.msg="invalid distance too far back",a.mode=me;break}a.mode=16204;case 16204:if(0===l)break t;if(c=f-l,a.offset>c){if(c=a.offset-c,c>a.whave&&a.sane){t.msg="invalid distance too far back",a.mode=me;break}c>a.wnext?(c-=a.wnext,u=a.wsize-c):u=a.wnext-c,c>a.length&&(c=a.length),w=a.window}else w=n,u=r-a.offset,c=a.length;c>l&&(c=l),l-=c,a.length-=c;do{n[r++]=w[u++]}while(--c);0===a.length&&(a.mode=16200);break;case 16205:if(0===l)break t;n[r++]=a.length,l--,a.mode=16200;break;case 16206:if(a.wrap){for(;d<32;){if(0===o)break t;o--,h|=i[s++]<<d,d+=8}if(f-=l,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,r-f):F(a.check,n,f,r-f)),f=l,4&a.wrap&&(a.flags?h:be(h))!==a.check){t.msg="incorrect data check",a.mode=me;break}h=0,d=0}a.mode=16207;case 16207:if(a.wrap&&a.flags){for(;d<32;){if(0===o)break t;o--,h+=i[s++]<<d,d+=8}if(4&a.wrap&&h!==(4294967295&a.total)){t.msg="incorrect length check",a.mode=me;break}h=0,d=0}a.mode=16208;case 16208:x=he;break t;case me:x=fe;break t;case 16210:return ce;default:return _e}return t.next_out=r,t.avail_out=l,t.next_in=s,t.avail_in=o,a.hold=h,a.bits=d,(a.wsize||f!==t.avail_out&&a.mode<me&&(a.mode<16206||e!==se))&&Ze(t,t.output,t.next_out,f-t.avail_out),_-=t.avail_in,f-=t.avail_out,t.total_in+=_,t.total_out+=f,a.total+=f,4&a.wrap&&f&&(t.adler=a.check=a.flags?N(a.check,n,f,t.next_out-f):F(a.check,n,f,t.next_out-f)),t.data_type=a.bits+(a.last?64:0)+(16191===a.mode?128:0)+(16199===a.mode||16194===a.mode?256:0),(0===_&&0===f||e===se)&&x===le&&(x=ue),x},inflateEnd:t=>{if(pe(t))return _e;let e=t.state;return e.window&&(e.window=null),t.state=null,le},inflateGetHeader:(t,e)=>{if(pe(t))return _e;const a=t.state;return 0==(2&a.wrap)?_e:(a.head=e,e.done=!1,le)},inflateSetDictionary:(t,e)=>{const a=e.length;let i,n,s;return pe(t)?_e:(i=t.state,0!==i.wrap&&16190!==i.mode?_e:16190===i.mode&&(n=1,n=F(n,e,a,0),n!==i.check)?fe:(s=Ze(t,e,a,a),s?(i.mode=16210,ce):(i.havedict=1,le)))},inflateInfo:"pako inflate (from Nodeca project)"};var Se=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1};const De=Object.prototype.toString,{Z_NO_FLUSH:Te,Z_FINISH:Oe,Z_OK:Fe,Z_STREAM_END:Le,Z_NEED_DICT:Ne,Z_STREAM_ERROR:Ie,Z_DATA_ERROR:Be,Z_MEM_ERROR:Ce}=B;function He(t){this.options=Tt({chunkSize:65536,windowBits:15,to:""},t||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0==(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ct,this.strm.avail_out=0;let a=Ue.inflateInit2(this.strm,e.windowBits);if(a!==Fe)throw new Error(I[a]);if(this.header=new Se,Ue.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"==typeof e.dictionary?e.dictionary=Nt(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(a=Ue.inflateSetDictionary(this.strm,e.dictionary),a!==Fe)))throw new Error(I[a])}He.prototype.push=function(t,e){const a=this.strm,i=this.options.chunkSize,n=this.options.dictionary;let s,r,o;if(this.ended)return!1;for(r=e===~~e?e:!0===e?Oe:Te,"[object ArrayBuffer]"===De.call(t)?a.input=new Uint8Array(t):a.input=t,a.next_in=0,a.avail_in=a.input.length;;){for(0===a.avail_out&&(a.output=new Uint8Array(i),a.next_out=0,a.avail_out=i),s=Ue.inflate(a,r),s===Ne&&n&&(s=Ue.inflateSetDictionary(a,n),s===Fe?s=Ue.inflate(a,r):s===Be&&(s=Ne));a.avail_in>0&&s===Le&&a.state.wrap>0&&0!==t[a.next_in];)Ue.inflateReset(a),s=Ue.inflate(a,r);switch(s){case Ie:case Be:case Ne:case Ce:return this.onEnd(s),this.ended=!0,!1}if(o=a.avail_out,a.next_out&&(0===a.avail_out||s===Le))if("string"===this.options.to){let t=Bt(a.output,a.next_out),e=a.next_out-t,n=It(a.output,t);a.next_out=e,a.avail_out=i-e,e&&a.output.set(a.output.subarray(t,t+e),0),this.onData(n)}else this.onData(a.output.length===a.next_out?a.output:a.output.subarray(0,a.next_out));if(s!==Fe||0!==o){if(s===Le)return s=Ue.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(0===a.avail_in)break}}return!0},He.prototype.onData=function(t){this.chunks.push(t)},He.prototype.onEnd=function(t){t===Fe&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=Ot(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};const{Deflate:Me,deflate:je,deflateRaw:Ke,gzip:Pe}=Vt;var Ye=Me,Ge=je,Xe=B;const We=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const e=this._hasEvents?",":"";this.deflate.push(e+t,Xe.Z_SYNC_FLUSH),this._hasEvents=!0}finish(){if(this.deflate.push("]",Xe.Z_FINISH),this.deflate.err)throw this.deflate.err;const t=this.deflate.result;return this._init(),t}_init(){this._hasEvents=!1,this.deflate=new Ye,this.deflate.push("[",Xe.Z_NO_FLUSH)}},qe={clear:()=>{We.clear()},addEvent:t=>We.addEvent(t),finish:()=>We.finish(),compress:t=>function(t){return Ge(t)}(t)};addEventListener("message",(function(t){const e=t.data.method,a=t.data.id,i=t.data.arg;if(e in qe&&"function"==typeof qe[e])try{const t=qe[e](i);postMessage({id:a,method:e,success:!0,response:t})}catch(t){postMessage({id:a,method:e,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});`;
    class t7 extends Error {
        constructor() {
            super("Event buffer exceeded maximum size of 20000000.")
        }
    }
    class t9 {
        __init() {
            this._totalSize = 0
        }
        constructor() {
            t9.prototype.__init.call(this), this.events = []
        }
        get hasEvents() {
            return this.events.length > 0
        }
        get type() {
            return "sync"
        }
        destroy() {
            this.events = []
        }
        async addEvent(t) {
            let e = JSON.stringify(t).length;
            if (this._totalSize += e, this._totalSize > 2e7) throw new t7;
            this.events.push(t)
        }
        finish() {
            return new Promise(t => {
                let e = this.events;
                this.clear(), t(JSON.stringify(e))
            })
        }
        clear() {
            this.events = [], this._totalSize = 0
        }
        getEarliestTimestamp() {
            let t = this.events.map(t => t.timestamp).sort()[0];
            return t ? tZ(t) : null
        }
    }
    class et {
        constructor(t) {
            this._worker = t, this._id = 0
        }
        ensureReady() {
            return this._ensureReadyPromise ? this._ensureReadyPromise : (this._ensureReadyPromise = new Promise((t, e) => {
                this._worker.addEventListener("message", ({
                    data: n
                }) => {
                    n.success ? t() : e()
                }, {
                    once: !0
                }), this._worker.addEventListener("error", t => {
                    e(t)
                }, {
                    once: !0
                })
            }), this._ensureReadyPromise)
        }
        destroy() {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Destroying compression worker"), this._worker.terminate()
        }
        postMessage(t, e) {
            let n = this._getAndIncrementId();
            return new Promise((r, i) => {
                let a = ({
                    data: e
                }) => {
                    if (e.method === t) {
                        if (e.id === n) {
                            if (this._worker.removeEventListener("message", a), !e.success) {
                                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay]", e.response), i(Error("Error in compression worker"));
                                return
                            }
                            r(e.response)
                        }
                    }
                };
                this._worker.addEventListener("message", a), this._worker.postMessage({
                    id: n,
                    method: t,
                    arg: e
                })
            })
        }
        _getAndIncrementId() {
            return this._id++
        }
    }
    class ee {
        __init() {
            this._totalSize = 0
        }
        constructor(t) {
            ee.prototype.__init.call(this), this._worker = new et(t), this._earliestTimestamp = null
        }
        get hasEvents() {
            return !!this._earliestTimestamp
        }
        get type() {
            return "worker"
        }
        ensureReady() {
            return this._worker.ensureReady()
        }
        destroy() {
            this._worker.destroy()
        }
        addEvent(t) {
            let e = tZ(t.timestamp);
            (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
            let n = JSON.stringify(t);
            return (this._totalSize += n.length, this._totalSize > 2e7) ? Promise.reject(new t7) : this._sendEventToWorker(n)
        }
        finish() {
            return this._finishRequest()
        }
        clear() {
            this._earliestTimestamp = null, this._totalSize = 0, this._worker.postMessage("clear")
        }
        getEarliestTimestamp() {
            return this._earliestTimestamp
        }
        _sendEventToWorker(t) {
            return this._worker.postMessage("addEvent", t)
        }
        async _finishRequest() {
            let t = await this._worker.postMessage("finish");
            return this._earliestTimestamp = null, this._totalSize = 0, t
        }
    }
    class en {
        constructor(t) {
            this._fallback = new t9, this._compression = new ee(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
        }
        get type() {
            return this._used.type
        }
        get hasEvents() {
            return this._used.hasEvents
        }
        destroy() {
            this._fallback.destroy(), this._compression.destroy()
        }
        clear() {
            return this._used.clear()
        }
        getEarliestTimestamp() {
            return this._used.getEarliestTimestamp()
        }
        addEvent(t) {
            return this._used.addEvent(t)
        }
        async finish() {
            return await this.ensureWorkerIsLoaded(), this._used.finish()
        }
        ensureWorkerIsLoaded() {
            return this._ensureWorkerIsLoadedPromise
        }
        async _ensureWorkerIsLoaded() {
            try {
                await this._compression.ensureReady()
            } catch (t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Failed to load the compression worker, falling back to simple buffer");
                return
            }
            await this._switchToCompressionWorker()
        }
        async _switchToCompressionWorker() {
            let {
                events: t
            } = this._fallback, e = [];
            for (let n of t) e.push(this._compression.addEvent(n));
            this._used = this._compression;
            try {
                await Promise.all(e)
            } catch (t) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("[Replay] Failed to add events when switching buffers.", t)
            }
        }
    }

    function er() {
        try {
            return "sessionStorage" in R && !!R.sessionStorage
        } catch (t) {
            return !1
        }
    }

    function ei(t, e, n = +new Date) {
        return null === t || void 0 === e || !!(e < 0) || 0 !== e && t + e <= n
    }

    function ea(t, e, n = +new Date) {
        return ei(t.started, e.maxSessionLife, n) || ei(t.lastActivity, e.sessionIdleExpire, n)
    }

    function eo(t) {
        return void 0 !== t && Math.random() < t
    }

    function es(t) {
        if (er()) try {
            R.sessionStorage.setItem(N, JSON.stringify(t))
        } catch (t) {}
    }

    function eu(t) {
        let e = Date.now(),
            n = t.id || (0, k.uuid4)(),
            r = t.started || e,
            i = t.lastActivity || e,
            a = t.segmentId || 0;
        return {
            id: n,
            started: r,
            lastActivity: i,
            segmentId: a,
            sampled: t.sampled,
            shouldRefresh: !0
        }
    }

    function ec({
        timeouts: t,
        currentSession: e,
        stickySession: n,
        sessionSampleRate: r,
        allowBuffering: i
    }) {
        let a = e || n && function() {
            if (!er()) return null;
            try {
                let t = R.sessionStorage.getItem(N);
                if (!t) return null;
                let e = JSON.parse(t);
                return eu(e)
            } catch (t) {
                return null
            }
        }();
        if (a) {
            if (!ea(a, t) || i && a.shouldRefresh) return {
                type: "saved",
                session: a
            };
            if (!a.shouldRefresh) return {
                type: "new",
                session: eu({
                    sampled: !1
                })
            };
            else("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Session has expired")
        }
        return {
            type: "new",
            session: function({
                sessionSampleRate: t,
                allowBuffering: e,
                stickySession: n = !1
            }) {
                var r, i;
                let a = eu({
                    sampled: (r = t, i = e, eo(r) ? "session" : !!i && "buffer")
                });
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log(`[Replay] Creating new session: ${a.id}`), n && es(a), a
            }({
                stickySession: n,
                sessionSampleRate: r,
                allowBuffering: i
            })
        }
    }
    async function el(t, e, n) {
        if (!t.eventBuffer || t.isPaused() || tZ(e.timestamp) + t.timeouts.sessionIdlePause < Date.now()) return null;
        try {
            n && t.eventBuffer.clear();
            let r = t.getOptions(),
                i = function(t, e) {
                    try {
                        if ("function" == typeof e && t.type === m.Custom) return e(t)
                    } catch (t) {
                        return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", t), null
                    }
                    return t
                }(e, r.beforeAddRecordingEvent);
            if (!i) return;
            return await t.eventBuffer.addEvent(i)
        } catch (r) {
            let e = r && r instanceof t7 ? "addEventSizeExceeded" : "addEvent";
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error(r), await t.stop(e);
            let n = (0, T.getCurrentHub)().getClient();
            n && n.recordDroppedEvent("internal_sdk_error", "replay")
        }
    }

    function ed(t) {
        return !t.type
    }

    function ef(t) {
        return "transaction" === t.type
    }

    function ep(t) {
        let e = function() {
            let t = (0, T.getCurrentHub)().getClient();
            if (!t) return !1;
            let e = t.getTransport();
            return !!e && (e.send.__sentry__baseTransport__ || !1)
        }();
        return (n, r) => {
            if (n.type && !ef(n)) return;
            let i = r && r.statusCode;
            if (!e || !!i && !(i < 200) && !(i >= 300)) {
                if (ef(n) && n.contexts && n.contexts.trace && n.contexts.trace.trace_id) {
                    t.getContext().traceIds.add(n.contexts.trace.trace_id);
                    return
                }
                if (!n.type) n.event_id && t.getContext().errorIds.add(n.event_id), "buffer" === t.recordingMode && n.tags && n.tags.replayId && setTimeout(() => {
                    t.sendBufferedReplayOrFlush()
                })
            }
        }
    }

    function eh(t, e) {
        return e.map(({
            type: e,
            start: n,
            end: r,
            name: i,
            data: a
        }) => {
            let o = t.throttledAddEvent({
                type: m.Custom,
                timestamp: n,
                data: {
                    tag: "performanceSpan",
                    payload: {
                        op: e,
                        description: i,
                        startTimestamp: n,
                        endTimestamp: r,
                        data: a
                    }
                }
            });
            return "string" == typeof o ? Promise.resolve(null) : o
        })
    }

    function e_(t, e) {
        var n, r;
        if (!!t.isEnabled() && null !== e) {
            if (n = t, r = e.name, !((!("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) || !n.getOptions()._experiments.traceInternals) && function(t) {
                    let e = (0, T.getCurrentHub)().getClient(),
                        n = e && e.getDsn();
                    return !!n && t.includes(n.host)
                }(r))) t.addUpdate(() => (eh(t, [e]), !0))
        }
    }
    let eg = ["true", "false", "null"];

    function em(t) {
        let e = function(t) {
            let e = [];
            for (let n = 0; n < t.length; n++)(function(t, e, n) {
                let r = t[t.length - 1],
                    i = e[n];
                if (!/\s/.test(i)) {
                    if ('"' === i && ! function t(e, n) {
                            return "\\" === e[n - 1] && !t(e, n - 1)
                        }(e, n)) {
                        (function(t, e) {
                            if (14 === e) {
                                t.pop(), t.push(15);
                                return
                            }
                            if (22 === e) {
                                t.pop(), t.push(23);
                                return
                            }
                            if (13 === e) {
                                t.push(14);
                                return
                            }
                            if (21 === e) {
                                t.push(22);
                                return
                            }
                            if (10 === e) {
                                t.push(12);
                                return
                            }
                            if (12 === e) {
                                t.pop(), t.push(11);
                            }
                        })(t, r);
                        return
                    }
                    switch (i) {
                        case "{":
                            (function(t, e) {
                                if (!e || 13 === e) {
                                    t.push(10);
                                    return
                                }
                                if (21 === e && t.push(10), 20 === e) {
                                    t.push(10);
                                }
                            })(t, r);
                            break;
                        case "[":
                            (function(t, e) {
                                if (!e || 13 === e) {
                                    t.push(20), t.push(21);
                                    return
                                }
                                if (21 === e && (t.push(20), t.push(21)), 20 === e) {
                                    t.push(20), t.push(21);
                                }
                            })(t, r);
                            break;
                        case ":":
                            (function(t, e) {
                                11 === e && (t.pop(), t.push(13))
                            })(t, r);
                            break;
                        case ",":
                            (function(t, e) {
                                if (13 === e) {
                                    t.pop();
                                    return
                                }
                                if (15 === e) {
                                    t.pop(), t.pop();
                                    return
                                }
                                if (21 !== e && 23 === e) {
                                    t.pop();
                                }
                            })(t, r);
                            break;
                        case "}":
                            (function(t, e) {
                                10 === e && t.pop(), 13 === e && (t.pop(), t.pop()), 15 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23)
                            })(t, r);
                            break;
                        case "]":
                            (function(t, e) {
                                20 === e && t.pop(), 21 === e && (t.pop(), t.pop()), 23 === e && (t.pop(), t.pop(), t.pop()), 13 === t[t.length - 1] && t.push(15), 21 === t[t.length - 1] && t.push(23)
                            })(t, r)
                    }
                }
            })(e, t, n);
            return e
        }(t);
        return function(t, e) {
            if (!e.length) return t;
            let n = t,
                r = e.length - 1;
            n = function(t, e) {
                switch (e) {
                    case 10:
                        return `${t}"~~":"~~"`;
                    case 11:
                        return `${t}:"~~"`;
                    case 12:
                        return `${t}~~":"~~"`;
                    case 13:
                        return function(t) {
                            let e = t.lastIndexOf(":"),
                                n = t.slice(e + 1);
                            return eg.includes(n.trim()) ? `${t},"~~":"~~"` : `${t.slice(0,e+1)}"~~"`
                        }(t);
                    case 14:
                    case 22:
                        return `${t}~~"`;
                    case 15:
                        return `${t},"~~":"~~"`;
                    case 20:
                        return `${t}"~~"`;
                    case 21:
                        return function(t) {
                            let e = function(t) {
                                for (let e = t.length - 1; e >= 0; e--) {
                                    let n = t[e];
                                    if ("," === n || "[" === n) return e
                                }
                                return -1
                            }(t);
                            if (e > -1) {
                                let n = t.slice(e + 1);
                                return eg.includes(n.trim()) ? `${t},"~~"` : `${t.slice(0,e+1)}"~~"`
                            }
                            return t
                        }(t);
                    case 23:
                        return `${t},"~~"`
                }
                return t
            }(n, e[r]);
            for (let t = r; t >= 0; t--) switch (e[t]) {
                case 10:
                    n = `${n}}`;
                    break;
                case 20:
                    n = `${n}]`
            }
            return n
        }(t, e)
    }

    function ey(t, e) {
        if (t) try {
            if ("string" == typeof t) return e.encode(t).length;
            if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
            if (t instanceof FormData) {
                let n = ek(t);
                return e.encode(n).length
            }
            if (t instanceof Blob) return t.size;
            if (t instanceof ArrayBuffer) return t.byteLength
        } catch (t) {}
    }

    function ev(t) {
        if (!t) return;
        let e = parseInt(t, 10);
        return isNaN(e) ? void 0 : e
    }

    function eb(t) {
        return "string" == typeof t ? t : t instanceof URLSearchParams ? t.toString() : t instanceof FormData ? ek(t) : void 0
    }

    function eE(t, e) {
        if (!e) return null;
        let {
            startTimestamp: n,
            endTimestamp: r,
            url: i,
            method: a,
            statusCode: o,
            request: s,
            response: u
        } = e;
        return {
            type: t,
            start: n / 1e3,
            end: r / 1e3,
            name: i,
            data: (0, k.dropUndefinedKeys)({
                method: a,
                statusCode: o,
                request: s,
                response: u
            })
        }
    }

    function eS(t) {
        return {
            headers: {},
            size: t,
            _meta: {
                warnings: ["URL_SKIPPED"]
            }
        }
    }

    function ew(t, e, n) {
        if (!e && 0 === Object.keys(t).length) return;
        if (!e) return {
            headers: t
        };
        if (!n) return {
            headers: t,
            size: e
        };
        let r = {
                headers: t,
                size: e
            },
            {
                body: i,
                warnings: a
            } = function(t) {
                if (!t || "string" != typeof t) return {
                    body: t,
                    warnings: []
                };
                let e = t.length > 15e4;
                if (function(t) {
                        let e = t[0],
                            n = t[t.length - 1];
                        return "[" === e && "]" === n || "{" === e && "}" === n
                    }(t)) try {
                    let n = e ? em(t.slice(0, 15e4)) : t;
                    return {
                        body: JSON.parse(n),
                        warnings: e ? ["JSON_TRUNCATED"] : []
                    }
                } catch (n) {
                    return {
                        body: e ? `${t.slice(0,15e4)}…` : t,
                        warnings: e ? ["INVALID_JSON", "TEXT_TRUNCATED"] : ["INVALID_JSON"]
                    }
                }
                return {
                    body: e ? `${t.slice(0,15e4)}…` : t,
                    warnings: e ? ["TEXT_TRUNCATED"] : []
                }
            }(n);
        return r.body = i, a.length > 0 && (r._meta = {
            warnings: a
        }), r
    }

    function eT(t, e) {
        return Object.keys(t).reduce((n, r) => {
            let i = r.toLowerCase();
            return e.includes(i) && t[r] && (n[i] = t[r]), n
        }, {})
    }

    function ek(t) {
        return new URLSearchParams(t).toString()
    }

    function ex(t, e) {
        let n = function(t, e = R.document.baseURI) {
            if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(R.location.origin)) return t;
            let n = new URL(t, e);
            if (n.origin !== new URL(e).origin) return t;
            let r = n.href;
            return !t.endsWith("/") && r.endsWith("/") ? r.slice(0, -1) : r
        }(t);
        return (0, k.stringMatchesSomePattern)(n, e)
    }
    async function eR(t, e, n) {
        try {
            let r = await eN(t, e, n),
                i = eE("resource.fetch", r);
            e_(n.replay, i)
        } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
        }
    }
    async function eN(t, e, n) {
        let {
            startTimestamp: r,
            endTimestamp: i
        } = e, {
            url: a,
            method: o,
            status_code: s = 0,
            request_body_size: u,
            response_body_size: c
        } = t.data, l = ex(a, n.networkDetailAllowUrls) && !ex(a, n.networkDetailDenyUrls), d = l ? function({
            networkCaptureBodies: t,
            networkRequestHeaders: e
        }, n, r) {
            let i = function(t, e) {
                return 1 === t.length && "string" != typeof t[0] ? eA(t[0], e) : 2 === t.length ? eA(t[1], e) : {}
            }(n, e);
            return t ? ew(i, r, eb(eO(n))) : ew(i, r, void 0)
        }(n, e.input, u) : eS(u);
        return {
            startTimestamp: r,
            endTimestamp: i,
            url: a,
            method: o,
            statusCode: s,
            request: d,
            response: await eD(l, n, e.response, c)
        }
    }
    async function eD(t, {
        networkCaptureBodies: e,
        textEncoder: n,
        networkResponseHeaders: r
    }, i, a) {
        if (!t && void 0 !== a) return eS(a);
        let o = eC(i.headers, r);
        if (!e && void 0 !== a) return ew(o, a, void 0);
        try {
            let r = i.clone(),
                s = await eI(r),
                u = s && s.length && void 0 === a ? ey(s, n) : a;
            if (!t) return eS(u);
            if (e) return ew(o, u, s);
            return ew(o, u, void 0)
        } catch (t) {
            return ew(o, a, void 0)
        }
    }
    async function eI(t) {
        try {
            return await t.text()
        } catch (t) {
            return
        }
    }

    function eO(t = []) {
        if (2 === t.length && "object" == typeof t[1]) return t[1].body
    }

    function eC(t, e) {
        let n = {};
        return e.forEach(e => {
            t.get(e) && (n[e] = t.get(e))
        }), n
    }

    function eA(t, e) {
        if (!t) return {};
        let n = t.headers;
        return n ? n instanceof Headers ? eC(n, e) : Array.isArray(n) ? {} : eT(n, e) : {}
    }
    async function eB(t, e, n) {
        try {
            let r = function(t, e, n) {
                    let {
                        startTimestamp: r,
                        endTimestamp: i,
                        input: a,
                        xhr: o
                    } = e, {
                        url: s,
                        method: u,
                        status_code: c = 0,
                        request_body_size: l,
                        response_body_size: d
                    } = t.data;
                    if (!s) return null;
                    if (!ex(s, n.networkDetailAllowUrls) || ex(s, n.networkDetailDenyUrls)) {
                        let t = eS(l);
                        return {
                            startTimestamp: r,
                            endTimestamp: i,
                            url: s,
                            method: u,
                            statusCode: c,
                            request: t,
                            response: eS(d)
                        }
                    }
                    let f = o[k.SENTRY_XHR_DATA_KEY],
                        p = f ? eT(f.request_headers, n.networkRequestHeaders) : {},
                        h = eT(function(t) {
                            let e = t.getAllResponseHeaders();
                            return e ? e.split("\r\n").reduce((t, e) => {
                                let [n, r] = e.split(": ");
                                return t[n.toLowerCase()] = r, t
                            }, {}) : {}
                        }(o), n.networkResponseHeaders),
                        _ = ew(p, l, n.networkCaptureBodies ? eb(a) : void 0);
                    return {
                        startTimestamp: r,
                        endTimestamp: i,
                        url: s,
                        method: u,
                        statusCode: c,
                        request: _,
                        response: ew(h, d, n.networkCaptureBodies ? e.xhr.responseText : void 0)
                    }
                }(t, e, n),
                i = eE("resource.xhr", r);
            e_(n.replay, i)
        } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Failed to capture fetch breadcrumb", t)
        }
    }
    let eU = null,
        eM = t => e => {
            if (!t.isEnabled()) return;
            let n = function(t) {
                let e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                if (eU === e || !e) return null;
                return (eU = e, !e.category || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) ? null : "console" === e.category ? function(t) {
                    let e = t.data && t.data.arguments;
                    if (!Array.isArray(e) || 0 === e.length) return t1(t);
                    let n = !1,
                        r = e.map(t => {
                            if (!t) return t;
                            if ("string" == typeof t) return t.length > 5e3 ? (n = !0, `${t.slice(0,5e3)}…`) : t;
                            if ("object" == typeof t) try {
                                let e = (0, k.normalize)(t, 7),
                                    r = JSON.stringify(e);
                                if (r.length > 5e3) {
                                    let t = em(r.slice(0, 5e3)),
                                        e = JSON.parse(t);
                                    return n = !0, e
                                }
                                return e
                            } catch (t) {}
                            return t
                        });
                    return t1({
                        ...t,
                        data: {
                            ...t.data,
                            arguments: r,
                            ...n ? {
                                _meta: {
                                    warnings: ["CONSOLE_ARG_TRUNCATED"]
                                }
                            } : {}
                        }
                    })
                }(e) : t1(e)
            }(e);
            n && tV(t, n)
        };

    function eL(t) {
        return !!(t && t.on)
    }
    async function eP(t) {
        try {
            return Promise.all(eh(t, [function(t) {
                let {
                    jsHeapSizeLimit: e,
                    totalJSHeapSize: n,
                    usedJSHeapSize: r
                } = t, i = Date.now() / 1e3;
                return {
                    type: "memory",
                    name: "memory",
                    start: i,
                    end: i,
                    data: {
                        memory: {
                            jsHeapSizeLimit: e,
                            totalJSHeapSize: n,
                            usedJSHeapSize: r
                        }
                    }
                }
            }(R.performance.memory)]))
        } catch (t) {
            return []
        }
    }
    let eG = {
        resource: function(t) {
            let {
                entryType: e,
                initiatorType: n,
                name: r,
                responseEnd: i,
                startTime: a,
                decodedBodySize: o,
                encodedBodySize: s,
                responseStatus: u,
                transferSize: c
            } = t;
            return ["fetch", "xmlhttprequest"].includes(n) ? null : {
                type: `${e}.${n}`,
                start: eF(a),
                end: eF(i),
                name: r,
                data: {
                    size: c,
                    statusCode: u,
                    decodedBodySize: o,
                    encodedBodySize: s
                }
            }
        },
        paint: function(t) {
            let {
                duration: e,
                entryType: n,
                name: r,
                startTime: i
            } = t, a = eF(i);
            return {
                type: n,
                name: r,
                start: a,
                end: a + e,
                data: void 0
            }
        },
        navigation: function(t) {
            let {
                entryType: e,
                name: n,
                decodedBodySize: r,
                duration: i,
                domComplete: a,
                encodedBodySize: o,
                domContentLoadedEventStart: s,
                domContentLoadedEventEnd: u,
                domInteractive: c,
                loadEventStart: l,
                loadEventEnd: d,
                redirectCount: f,
                startTime: p,
                transferSize: h,
                type: _
            } = t;
            return 0 === i ? null : {
                type: `${e}.${_}`,
                start: eF(p),
                end: eF(a),
                name: n,
                data: {
                    size: h,
                    decodedBodySize: r,
                    encodedBodySize: o,
                    duration: i,
                    domInteractive: c,
                    domContentLoadedEventStart: s,
                    domContentLoadedEventEnd: u,
                    loadEventStart: l,
                    loadEventEnd: d,
                    domComplete: a,
                    redirectCount: f
                }
            }
        },
        "largest-contentful-paint": function(t) {
            let {
                entryType: e,
                startTime: n,
                size: r
            } = t, i = 0;
            if (R.performance) {
                let t = R.performance.getEntriesByType("navigation")[0];
                i = t && t.activationStart || 0
            }
            let a = Math.max(n - i, 0),
                o = eF(i) + a / 1e3;
            return {
                type: e,
                name: e,
                start: o,
                end: o,
                data: {
                    value: a,
                    size: r,
                    nodeId: tq.mirror.getId(t.element)
                }
            }
        }
    };

    function ez(t) {
        return void 0 === eG[t.entryType] ? null : eG[t.entryType](t)
    }

    function eF(t) {
        return ((k.browserPerformanceTimeOrigin || R.performance.timeOrigin) + t) / 1e3
    }
    async function eY({
        client: t,
        scope: e,
        replayId: n,
        event: r
    }) {
        let i = "object" != typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations),
            a = await (0, T.prepareEvent)(t.getOptions(), r, {
                event_id: n,
                integrations: i
            }, e);
        if (!a) return null;
        a.platform = a.platform || "javascript";
        let o = t.getSdkMetadata && t.getSdkMetadata(),
            {
                name: s,
                version: u
            } = o && o.sdk || {};
        return a.sdk = {
            ...a.sdk,
            name: s || "sentry.javascript.unknown",
            version: u || "0.0.0"
        }, a
    }
    async function ej({
        recordingData: t,
        replayId: e,
        segmentId: n,
        eventContext: r,
        timestamp: i,
        session: a
    }) {
        var o, s, u, c;
        let l;
        let d = function({
                recordingData: t,
                headers: e
            }) {
                let n;
                let r = `${JSON.stringify(e)}
`;
                if ("string" == typeof t) n = `${r}${t}`;
                else {
                    let e = new TextEncoder().encode(r);
                    (n = new Uint8Array(e.length + t.length)).set(e), n.set(t, e.length)
                }
                return n
            }({
                recordingData: t,
                headers: {
                    segment_id: n
                }
            }),
            {
                urls: f,
                errorIds: p,
                traceIds: h,
                initialTimestamp: _
            } = r,
            g = (0, T.getCurrentHub)(),
            m = g.getClient(),
            y = g.getScope(),
            v = m && m.getTransport(),
            b = m && m.getDsn();
        if (!m || !v || !b || !a.sampled) return;
        let E = {
                type: "replay_event",
                replay_start_timestamp: _ / 1e3,
                timestamp: i / 1e3,
                error_ids: p,
                trace_ids: h,
                urls: f,
                replay_id: e,
                segment_id: n,
                replay_type: a.sampled
            },
            S = await eY({
                scope: y,
                client: m,
                replayId: e,
                event: E
            });
        if (!S) {
            m.recordDroppedEvent("event_processor", "replay", E), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("An event processor returned `null`, will not send event.");
            return
        }
        delete S.sdkProcessingMetadata;
        let w = (o = S, s = d, u = b, c = m.getOptions().tunnel, (0, k.createEnvelope)((0, k.createEventEnvelopeHeaders)(o, (0, k.getSdkMetadataForEnvelopeHeader)(o), c, u), [
            [{
                type: "replay_event"
            }, o],
            [{
                type: "replay_recording",
                length: "string" == typeof s ? new TextEncoder().encode(s).length : s.length
            }, s]
        ]));
        try {
            l = await v.send(w)
        } catch (e) {
            let t = Error(D);
            try {
                t.cause = e
            } catch (t) {}
            throw t
        }
        if (!l) return l;
        if ("number" == typeof l.statusCode && (l.statusCode < 200 || l.statusCode >= 300)) throw new eH(l.statusCode);
        return l
    }
    class eH extends Error {
        constructor(t) {
            super(`Transport returned status code ${t}`)
        }
    }
    async function e$(t, e = {
        count: 0,
        interval: 5e3
    }) {
        let {
            recordingData: n,
            options: r
        } = t;
        if (n.length) try {
            return await ej(t), !0
        } catch (n) {
            if (n instanceof eH) throw n;
            if ((0, T.setContext)("Replays", {
                    _retryCount: e.count
                }), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r._experiments && r._experiments.captureExceptions && (0, T.captureException)(n), e.count >= 3) {
                let t = Error(`${D} - max retries exceeded`);
                try {
                    t.cause = n
                } catch (t) {}
                throw t
            }
            return e.interval *= ++e.count, new Promise((n, r) => {
                setTimeout(async () => {
                    try {
                        await e$(t, e), n(!0)
                    } catch (t) {
                        r(t)
                    }
                }, e.interval)
            })
        }
    }
    let eW = "__THROTTLED";
    class eq {
        __init() {
            this.eventBuffer = null
        }
        __init2() {
            this.performanceEvents = []
        }
        __init3() {
            this.recordingMode = "session"
        }
        __init4() {
            this.timeouts = {
                sessionIdlePause: 3e5,
                sessionIdleExpire: 9e5,
                maxSessionLife: 36e5
            }
        }
        __init5() {
            this._performanceObserver = null
        }
        __init6() {
            this._flushLock = null
        }
        __init7() {
            this._lastActivity = Date.now()
        }
        __init8() {
            this._isEnabled = !1
        }
        __init9() {
            this._isPaused = !1
        }
        __init10() {
            this._hasInitializedCoreListeners = !1
        }
        __init11() {
            this._stopRecording = null
        }
        __init12() {
            this._context = {
                errorIds: new Set,
                traceIds: new Set,
                urls: [],
                initialTimestamp: Date.now(),
                initialUrl: ""
            }
        }
        constructor({
            options: t,
            recordingOptions: e
        }) {
            eq.prototype.__init.call(this), eq.prototype.__init2.call(this), eq.prototype.__init3.call(this), eq.prototype.__init4.call(this), eq.prototype.__init5.call(this), eq.prototype.__init6.call(this), eq.prototype.__init7.call(this), eq.prototype.__init8.call(this), eq.prototype.__init9.call(this), eq.prototype.__init10.call(this), eq.prototype.__init11.call(this), eq.prototype.__init12.call(this), eq.prototype.__init13.call(this), eq.prototype.__init14.call(this), eq.prototype.__init15.call(this), eq.prototype.__init16.call(this), eq.prototype.__init17.call(this), eq.prototype.__init18.call(this), this._recordingOptions = e, this._options = t, this._debouncedFlush = function(t, e, n) {
                let r, i, a;
                let o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

                function s() {
                    return u(), r = t()
                }

                function u() {
                    void 0 !== i && clearTimeout(i), void 0 !== a && clearTimeout(a), i = a = void 0
                }

                function c() {
                    return i && clearTimeout(i), i = setTimeout(s, e), o && void 0 === a && (a = setTimeout(s, o)), r
                }
                return c.cancel = u, c.flush = function() {
                    return void 0 !== i || void 0 !== a ? s() : r
                }, c
            }(() => this._flush(), this._options.flushMinDelay, {
                maxWait: this._options.flushMaxDelay
            }), this._throttledAddEvent = function(t, e, n) {
                let r = new Map,
                    i = t => {
                        let e = t - 5;
                        r.forEach((t, n) => {
                            n < e && r.delete(n)
                        })
                    },
                    a = () => [...r.values()].reduce((t, e) => t + e, 0),
                    o = !1;
                return (...e) => {
                    let n = Math.floor(Date.now() / 1e3);
                    if (i(n), a() >= 300) {
                        let t = o;
                        return o = !0, t ? "__SKIPPED" : eW
                    }
                    o = !1;
                    let s = r.get(n) || 0;
                    return r.set(n, s + 1), t(...e)
                }
            }((t, e) => el(this, t, e), 300, 5);
            let {
                slowClickTimeout: n,
                slowClickIgnoreSelectors: r
            } = this.getOptions(), i = n ? {
                threshold: Math.min(3e3, n),
                timeout: n,
                scrollTimeout: 300,
                ignoreSelector: r ? r.join(",") : ""
            } : void 0;
            i && (this.clickDetector = new tX(this, i))
        }
        getContext() {
            return this._context
        }
        isEnabled() {
            return this._isEnabled
        }
        isPaused() {
            return this._isPaused
        }
        getOptions() {
            return this._options
        }
        initializeSampling() {
            let {
                errorSampleRate: t,
                sessionSampleRate: e
            } = this._options;
            if (!(t <= 0) || !(e <= 0)) {
                if (this._loadAndCheckSession()) {
                    if (!this.session) {
                        this._handleException(Error("Unable to initialize and create session"));
                        return
                    }
                    this.session.sampled && "session" !== this.session.sampled && (this.recordingMode = "buffer"), this._initializeRecording()
                }
            }
        }
        start() {
            if (this._isEnabled && "session" === this.recordingMode) throw Error("Replay recording is already in progress");
            if (this._isEnabled && "buffer" === this.recordingMode) throw Error("Replay buffering is in progress, call `flush()` to save the replay");
            let t = this.session && this.session.id,
                {
                    session: e
                } = ec({
                    timeouts: this.timeouts,
                    stickySession: !!this._options.stickySession,
                    currentSession: this.session,
                    sessionSampleRate: 1,
                    allowBuffering: !1
                });
            e.previousSessionId = t, this.session = e, this._initializeRecording()
        }
        startBuffering() {
            if (this._isEnabled) throw Error("Replay recording is already in progress");
            let t = this.session && this.session.id,
                {
                    session: e
                } = ec({
                    timeouts: this.timeouts,
                    stickySession: !!this._options.stickySession,
                    currentSession: this.session,
                    sessionSampleRate: 0,
                    allowBuffering: !0
                });
            e.previousSessionId = t, this.session = e, this.recordingMode = "buffer", this._initializeRecording()
        }
        startRecording() {
            try {
                var t;
                let e;
                this._stopRecording = tq({
                    ...this._recordingOptions,
                    ..."buffer" === this.recordingMode && {
                        checkoutEveryNms: 6e4
                    },
                    emit: (t = this, e = !1, (n, r) => {
                        if (!t.checkAndHandleExpiredSession()) {
                            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("[Replay] Received replay event after session expired.");
                            return
                        }
                        let i = r || !e;
                        e = !0, t.addUpdate(() => {
                            if ("buffer" === t.recordingMode && i && t.setInitialState(), el(t, n, i), !i) return !1;
                            if (function(t, e) {
                                    e && t.session && 0 === t.session.segmentId ? el(t, function(t) {
                                        let e = t.getOptions();
                                        return {
                                            type: m.Custom,
                                            timestamp: Date.now(),
                                            data: {
                                                tag: "options",
                                                payload: {
                                                    sessionSampleRate: e.sessionSampleRate,
                                                    errorSampleRate: e.errorSampleRate,
                                                    useCompressionOption: e.useCompression,
                                                    blockAllMedia: e.blockAllMedia,
                                                    maskAllText: e.maskAllText,
                                                    maskAllInputs: e.maskAllInputs,
                                                    useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                                                    networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                                                    networkCaptureBodies: e.networkCaptureBodies,
                                                    networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                                                    networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                                                }
                                            }
                                        }
                                    }(t), !1) : Promise.resolve(null)
                                }(t, i), t.session && t.session.previousSessionId) return !0;
                            if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
                                let e = t.eventBuffer.getEarliestTimestamp();
                                if (e) {
                                    let n = t.getOptions()._experiments.traceInternals ? console.info : k.logger.info;
                                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n(`[Replay] Updating session start time to earliest event in buffer at ${e}`), t.session.started = e, t.getOptions().stickySession && es(t.session)
                                }
                            }
                            return "session" === t.recordingMode && t.flush(), !0
                        })
                    }),
                    onMutation: this._onMutationHandler
                })
            } catch (t) {
                this._handleException(t)
            }
        }
        stopRecording() {
            try {
                return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
            } catch (t) {
                return this._handleException(t), !1
            }
        }
        async stop(t) {
            if (this._isEnabled) try {
                var e;
                if ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) {
                    let e = `[Replay] Stopping Replay${t?` triggered by ${t}`:""}`;
                    (this.getOptions()._experiments.traceInternals ? console.warn : k.logger.log)(e)
                }
                this._isEnabled = !1, this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), "session" === this.recordingMode && await this._flush({
                        force: !0
                    }), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, e = this,
                    function() {
                        if (er()) try {
                            R.sessionStorage.removeItem(N)
                        } catch (t) {}
                    }(), e.session = void 0
            } catch (t) {
                this._handleException(t)
            }
        }
        pause() {
            this._isPaused = !0, this.stopRecording()
        }
        resume() {
            this._loadAndCheckSession() && (this._isPaused = !1, this.startRecording())
        }
        async sendBufferedReplayOrFlush({
            continueRecording: t = !0
        } = {}) {
            if ("session" === this.recordingMode) return this.flushImmediate();
            let e = Date.now(),
                n = this.getOptions()._experiments.traceInternals ? console.info : k.logger.info;
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n(`[Replay] Converting buffer to session, starting at ${e}`), await this.flushImmediate();
            let r = this.stopRecording();
            t && r && (this.recordingMode = "session", this.session && (this.session.shouldRefresh = !1, this._updateUserActivity(e), this._updateSessionActivity(e), this.session.started = e, this._maybeSaveSession()), this.startRecording())
        }
        addUpdate(t) {
            let e = t();
            if ("buffer" !== this.recordingMode) !0 !== e && this._debouncedFlush()
        }
        triggerUserActivity() {
            if (this._updateUserActivity(), !this._stopRecording) {
                if (!this._loadAndCheckSession()) return;
                this.resume();
                return
            }
            this.checkAndHandleExpiredSession(), this._updateSessionActivity()
        }
        updateUserActivity() {
            this._updateUserActivity(), this._updateSessionActivity()
        }
        conditionalFlush() {
            return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
        }
        flush() {
            return this._debouncedFlush()
        }
        flushImmediate() {
            return this._debouncedFlush(), this._debouncedFlush.flush()
        }
        cancelFlush() {
            this._debouncedFlush.cancel()
        }
        getSessionId() {
            return this.session && this.session.id
        }
        checkAndHandleExpiredSession() {
            let t = this.getSessionId();
            if (this._lastActivity && ei(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled) {
                this.pause();
                return
            }
            return this._loadAndCheckSession() ? t === this.getSessionId() || (this._triggerFullSnapshot(), !1) : void 0
        }
        setInitialState() {
            let t = `${R.location.pathname}${R.location.hash}${R.location.search}`,
                e = `${R.location.origin}${t}`;
            this.performanceEvents = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
        }
        throttledAddEvent(t, e) {
            let n = this._throttledAddEvent(t, e);
            if (n === eW) {
                let t = t1({
                    category: "replay.throttled"
                });
                this.addUpdate(() => {
                    el(this, {
                        type: m.Custom,
                        timestamp: t.timestamp || 0,
                        data: {
                            tag: "breadcrumb",
                            payload: t,
                            metric: !0
                        }
                    })
                })
            }
            return n
        }
        getCurrentRoute() {
            let t = this.lastTransaction || (0, T.getCurrentHub)().getScope().getTransaction();
            if (t && ["route", "custom"].includes(t.metadata.source)) return t.name
        }
        _initializeRecording() {
            this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = function({
                useCompression: t
            }) {
                if (t && window.Worker) try {
                    let t = function() {
                        let t = new Blob([t8]);
                        return URL.createObjectURL(t)
                    }();
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Using compression worker");
                    let e = new Worker(t);
                    return new en(e)
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Failed to create compression worker")
                }
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Using simple buffer"), new t9
            }({
                useCompression: this._options.useCompression
            }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this.startRecording()
        }
        _handleException(t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay]", t), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._options._experiments && this._options._experiments.captureExceptions && (0, T.captureException)(t)
        }
        _loadAndCheckSession() {
            let {
                type: t,
                session: e
            } = ec({
                timeouts: this.timeouts,
                stickySession: !!this._options.stickySession,
                currentSession: this.session,
                sessionSampleRate: this._options.sessionSampleRate,
                allowBuffering: this._options.errorSampleRate > 0 || "buffer" === this.recordingMode
            });
            "new" === t && this.setInitialState();
            let n = this.getSessionId();
            return e.id !== n && (e.previousSessionId = n), this.session = e, !!this.session.sampled || (this.stop("session unsampled"), !1)
        }
        _addListeners() {
            try {
                R.document.addEventListener("visibilitychange", this._handleVisibilityChange), R.addEventListener("blur", this._handleWindowBlur), R.addEventListener("focus", this._handleWindowFocus), R.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), !this._hasInitializedCoreListeners && (! function(t) {
                    var e;
                    let n = (0, T.getCurrentHub)().getScope(),
                        r = (0, T.getCurrentHub)().getClient();
                    n && n.addScopeListener(eM(t)), (0, k.addInstrumentationHandler)("dom", t5(t)), (0, k.addInstrumentationHandler)("history", (e = t, t => {
                            if (!e.isEnabled()) return;
                            let n = function(t) {
                                let {
                                    from: e,
                                    to: n
                                } = t, r = Date.now() / 1e3;
                                return {
                                    type: "navigation.push",
                                    start: r,
                                    end: r,
                                    name: n,
                                    data: {
                                        previous: e
                                    }
                                }
                            }(t);
                            null !== n && (e.getContext().urls.push(n.name), e.triggerUserActivity(), e.addUpdate(() => (eh(e, [n]), !1)))
                        })), ! function(t) {
                            let e = (0, T.getCurrentHub)().getClient();
                            try {
                                let i = new TextEncoder,
                                    {
                                        networkDetailAllowUrls: a,
                                        networkDetailDenyUrls: o,
                                        networkCaptureBodies: s,
                                        networkRequestHeaders: u,
                                        networkResponseHeaders: c
                                    } = t.getOptions(),
                                    l = {
                                        replay: t,
                                        textEncoder: i,
                                        networkDetailAllowUrls: a,
                                        networkDetailDenyUrls: o,
                                        networkCaptureBodies: s,
                                        networkRequestHeaders: u,
                                        networkResponseHeaders: c
                                    };
                                if (e && e.on) e.on("beforeAddBreadcrumb", (t, e) => (function(t, e, n) {
                                    if (e.data) try {
                                        (function(t) {
                                            return "xhr" === t.category
                                        })(e) && function(t) {
                                            return t && t.xhr
                                        }(n) && (! function(t, e, n) {
                                            let {
                                                xhr: r,
                                                input: i
                                            } = e, a = ey(i, n.textEncoder), o = r.getResponseHeader("content-length") ? ev(r.getResponseHeader("content-length")) : ey(r.response, n.textEncoder);
                                            void 0 !== a && (t.data.request_body_size = a), void 0 !== o && (t.data.response_body_size = o)
                                        }(e, n, t), eB(e, n, t)),
                                        function(t) {
                                            return "fetch" === t.category
                                        }(e) && function(t) {
                                            return t && t.response
                                        }(n) && (! function(t, e, n) {
                                            let {
                                                input: r,
                                                response: i
                                            } = e, a = ey(eO(r), n.textEncoder), o = i ? ev(i.headers.get("content-length")) : void 0;
                                            void 0 !== a && (t.data.request_body_size = a), void 0 !== o && (t.data.response_body_size = o)
                                        }(e, n, t), eR(e, n, t))
                                    } catch (t) {
                                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.warn("Error when enriching network breadcrumb")
                                    }
                                })(l, t, e));
                                else {
                                    var n, r;
                                    (0, k.addInstrumentationHandler)("fetch", (n = t, t => {
                                        if (!!n.isEnabled()) e_(n, function(t) {
                                            let {
                                                startTimestamp: e,
                                                endTimestamp: n,
                                                fetchData: r,
                                                response: i
                                            } = t;
                                            if (!n) return null;
                                            let {
                                                method: a,
                                                url: o
                                            } = r;
                                            return {
                                                type: "resource.fetch",
                                                start: e / 1e3,
                                                end: n / 1e3,
                                                name: o,
                                                data: {
                                                    method: a,
                                                    statusCode: i ? i.status : void 0
                                                }
                                            }
                                        }(t))
                                    })), (0, k.addInstrumentationHandler)("xhr", (r = t, t => {
                                        if (!!r.isEnabled()) e_(r, function(t) {
                                            let {
                                                startTimestamp: e,
                                                endTimestamp: n,
                                                xhr: r
                                            } = t, i = r[k.SENTRY_XHR_DATA_KEY];
                                            if (!e || !n || !i) return null;
                                            let {
                                                method: a,
                                                url: o,
                                                status_code: s
                                            } = i;
                                            return void 0 === o ? null : {
                                                type: "resource.xhr",
                                                name: o,
                                                start: e / 1e3,
                                                end: n / 1e3,
                                                data: {
                                                    method: a,
                                                    statusCode: s
                                                }
                                            }
                                        }(t))
                                    }))
                                }
                            } catch (t) {}
                        }(t), (0, T.addGlobalEventProcessor)(function(t, e = !1) {
                            let n = e ? ep(t) : void 0;
                            return (e, r) => {
                                var i, a, o, s;
                                if ("replay_event" === e.type) return delete e.breadcrumbs, e;
                                if (e.type && !ef(e)) return e;
                                if (i = e, a = r, !i.type && i.exception && i.exception.values && i.exception.values.length && (a.originalException && a.originalException.__rrweb__ || i.exception.values.some(t => !!t.stacktrace && !!t.stacktrace.frames && !!t.stacktrace.frames.length && t.stacktrace.frames.some(t => t.filename && t.filename.includes("/rrweb/src/")))) && !t.getOptions()._experiments.captureExceptions) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Ignoring error from rrweb internals", e), null;
                                return o = t, s = e, ("buffer" === o.recordingMode && s.message !== D && s.exception && !s.type && eo(o.getOptions().errorSampleRate) || "session" === t.recordingMode) && (e.tags = {
                                    ...e.tags,
                                    replayId: t.getSessionId()
                                }), n && n(e, {
                                    statusCode: 200
                                }), e
                            }
                        }(t, ! function(t) {
                            return !!(t && t.on)
                        }(r))),
                        function(t) {
                            return !!(t && t.on)
                        }(r) && (r.on("afterSendEvent", ep(t)), r.on("createDsc", e => {
                            let n = t.getSessionId();
                            n && t.isEnabled() && "session" === t.recordingMode && (e.replay_id = n)
                        }), r.on("startTransaction", e => {
                            t.lastTransaction = e
                        }), r.on("finishTransaction", e => {
                            t.lastTransaction = e
                        }))
                }(this), this._hasInitializedCoreListeners = !0)
            } catch (t) {
                this._handleException(t)
            }
            "PerformanceObserver" in R && (this._performanceObserver = function(t) {
                let e = new PerformanceObserver(e => {
                    let n = function(t, e) {
                        let [n, r, i] = t.reduce((t, e) => ("navigation" === e.entryType ? t[0].push(e) : "largest-contentful-paint" === e.entryType ? t[1].push(e) : t[2].push(e), t), [
                            [],
                            [],
                            []
                        ]), a = [], o = [], s = r.length ? r[r.length - 1] : void 0;
                        return e.forEach(t => {
                            if ("largest-contentful-paint" === t.entryType) {
                                (!s || s.startTime < t.startTime) && (s = t);
                                return
                            }
                            if ("navigation" === t.entryType) {
                                t.duration > 0 && !n.find(t4(t)) && !o.find(t4(t)) && o.push(t);
                                return
                            }
                            a.push(t)
                        }), [...s ? [s] : [], ...n, ...i, ...a, ...o].sort((t, e) => t.startTime - e.startTime)
                    }(t.performanceEvents, e.getEntries());
                    t.performanceEvents = n
                });
                return ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "navigation", "paint", "resource"].forEach(t => {
                    try {
                        e.observe({
                            type: t,
                            buffered: !0
                        })
                    } catch (t) {}
                }), e
            }(this))
        }
        _removeListeners() {
            try {
                R.document.removeEventListener("visibilitychange", this._handleVisibilityChange), R.removeEventListener("blur", this._handleWindowBlur), R.removeEventListener("focus", this._handleWindowFocus), R.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceObserver && (this._performanceObserver.disconnect(), this._performanceObserver = null)
            } catch (t) {
                this._handleException(t)
            }
        }
        __init13() {
            this._handleVisibilityChange = () => {
                "visible" === R.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
            }
        }
        __init14() {
            this._handleWindowBlur = () => {
                let t = t1({
                    category: "ui.blur"
                });
                this._doChangeToBackgroundTasks(t)
            }
        }
        __init15() {
            this._handleWindowFocus = () => {
                let t = t1({
                    category: "ui.focus"
                });
                this._doChangeToForegroundTasks(t)
            }
        }
        __init16() {
            this._handleKeyboardEvent = t => {
                ! function(t, e) {
                    if (!t.isEnabled()) return;
                    t.updateUserActivity();
                    let n = function(t) {
                        let {
                            metaKey: e,
                            shiftKey: n,
                            ctrlKey: r,
                            altKey: i,
                            key: a,
                            target: o
                        } = t;
                        if (!o || function(t) {
                                return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
                            }(o) || !a) return null;
                        let s = e || r || i,
                            u = 1 === a.length;
                        if (!s && u) return null;
                        let c = (0, k.htmlTreeAsString)(o, {
                                maxStringLength: 200
                            }) || "<unknown>",
                            l = t3(o, c);
                        return t1({
                            category: "ui.keyDown",
                            message: c,
                            data: {
                                ...l.data,
                                metaKey: e,
                                shiftKey: n,
                                ctrlKey: r,
                                altKey: i,
                                key: a
                            }
                        })
                    }(e);
                    n && tV(t, n)
                }(this, t)
            }
        }
        _doChangeToBackgroundTasks(t) {
            if (!this.session) return;
            let e = ea(this.session, this.timeouts);
            t && !e && this._createCustomBreadcrumb(t), this.conditionalFlush()
        }
        _doChangeToForegroundTasks(t) {
            if (!!this.session) {
                if (!this.checkAndHandleExpiredSession()) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Document has become active, but session has expired");
                    return
                }
                t && this._createCustomBreadcrumb(t)
            }
        }
        _triggerFullSnapshot(t = !0) {
            try {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.log("[Replay] Taking full rrweb snapshot"), tq.takeFullSnapshot(t)
            } catch (t) {
                this._handleException(t)
            }
        }
        _updateUserActivity(t = Date.now()) {
            this._lastActivity = t
        }
        _updateSessionActivity(t = Date.now()) {
            this.session && (this.session.lastActivity = t, this._maybeSaveSession())
        }
        _createCustomBreadcrumb(t) {
            this.addUpdate(() => {
                this.throttledAddEvent({
                    type: m.Custom,
                    timestamp: t.timestamp || 0,
                    data: {
                        tag: "breadcrumb",
                        payload: t
                    }
                })
            })
        }
        _addPerformanceEntries() {
            let t = [...this.performanceEvents];
            return this.performanceEvents = [], Promise.all(eh(this, t.map(ez).filter(Boolean)))
        }
        _clearContext() {
            this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
        }
        _updateInitialTimestampFromEventBuffer() {
            let {
                session: t,
                eventBuffer: e
            } = this;
            if (!t || !e || t.segmentId) return;
            let n = e.getEarliestTimestamp();
            n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
        }
        _popEventContext() {
            let t = {
                initialTimestamp: this._context.initialTimestamp,
                initialUrl: this._context.initialUrl,
                errorIds: Array.from(this._context.errorIds),
                traceIds: Array.from(this._context.traceIds),
                urls: this._context.urls
            };
            return this._clearContext(), t
        }
        async _runFlush() {
            if (!this.session || !this.eventBuffer) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] No session or eventBuffer found to flush.");
                return
            }
            if (await this._addPerformanceEntries(), !!this.eventBuffer && !!this.eventBuffer.hasEvents) {
                if (await eP(this), this.eventBuffer) try {
                    this._updateInitialTimestampFromEventBuffer();
                    let t = await this.eventBuffer.finish(),
                        e = this.session.id,
                        n = this._popEventContext(),
                        r = this.session.segmentId++;
                    this._maybeSaveSession(), await e$({
                        replayId: e,
                        recordingData: t,
                        segmentId: r,
                        eventContext: n,
                        session: this.session,
                        options: this.getOptions(),
                        timestamp: Date.now()
                    })
                } catch (e) {
                    this._handleException(e), this.stop("sendReplay");
                    let t = (0, T.getCurrentHub)().getClient();
                    t && t.recordDroppedEvent("send_error", "replay")
                }
            }
        }
        __init17() {
            this._flush = async ({
                force: t = !1
            } = {}) => {
                if (!this._isEnabled && !t) return;
                if (!this.checkAndHandleExpiredSession()) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] Attempting to finish replay event after session expired.");
                    return
                }
                if (!this.session) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error("[Replay] No session found to flush.");
                    return
                }
                let e = this.session.started,
                    n = Date.now() - e;
                if (n < this._options.minReplayDuration || n > this.timeouts.maxSessionLife + 5e3) {
                    let t = this.getOptions()._experiments.traceInternals ? console.warn : k.logger.warn;
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && t(`[Replay] Session duration (${Math.floor(n/1e3)}s) is too short or too long, not sending replay.`);
                    return
                }
                if (this._debouncedFlush.cancel(), !this._flushLock) {
                    this._flushLock = this._runFlush(), await this._flushLock, this._flushLock = null;
                    return
                }
                try {
                    await this._flushLock
                } catch (t) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && k.logger.error(t)
                } finally {
                    this._debouncedFlush()
                }
            }
        }
        _maybeSaveSession() {
            this.session && this._options.stickySession && es(this.session)
        }
        __init18() {
            this._onMutationHandler = t => {
                let e = t.length,
                    n = this._options.mutationLimit,
                    r = this._options.mutationBreadcrumbLimit,
                    i = n && e > n;
                if (e > r || i) {
                    let t = t1({
                        category: "replay.mutations",
                        data: {
                            count: e,
                            limit: i
                        }
                    });
                    this._createCustomBreadcrumb(t)
                }
                return !i || (this.stop("mutationLimit"), !1)
            }
        }
    }

    function eZ(t, e, n, r) {
        let i = [...t, ..."string" == typeof r ? r.split(",") : [], ...e];
        return void 0 !== n && ("string" == typeof n && i.push(`.${n}`), console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")), i.join(",")
    }

    function eV() {
        return "undefined" != typeof window && (!(0, k.isNodeEnv)() || function() {
            return void 0 !== x && "renderer" === x.type
        }())
    }
    let eJ = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
        eK = ["content-length", "content-type", "accept"],
        eX = !1;
    class eQ {
        static __initStatic() {
            this.id = "Replay"
        }
        __init() {
            this.name = eQ.id
        }
        constructor({
            flushMinDelay: t = 5e3,
            flushMaxDelay: e = 5500,
            minReplayDuration: n = 4999,
            stickySession: r = !0,
            useCompression: i = !0,
            _experiments: a = {},
            sessionSampleRate: o,
            errorSampleRate: s,
            maskAllText: u = !0,
            maskAllInputs: c = !0,
            blockAllMedia: l = !0,
            mutationBreadcrumbLimit: d = 750,
            mutationLimit: f = 1e4,
            slowClickTimeout: p = 7e3,
            slowClickIgnoreSelectors: h = [],
            networkDetailAllowUrls: _ = [],
            networkDetailDenyUrls: g = [],
            networkCaptureBodies: m = !0,
            networkRequestHeaders: y = [],
            networkResponseHeaders: v = [],
            mask: b = [],
            unmask: E = [],
            block: S = [],
            unblock: w = [],
            ignore: T = [],
            maskFn: k,
            beforeAddRecordingEvent: x,
            blockClass: R,
            blockSelector: N,
            maskInputOptions: D,
            maskTextClass: I,
            maskTextSelector: O,
            ignoreClass: C
        } = {}) {
            if (eQ.prototype.__init.call(this), this._recordingOptions = {
                    maskAllInputs: c,
                    maskAllText: u,
                    maskInputOptions: {
                        ...D || {},
                        password: !0
                    },
                    maskTextFn: k,
                    maskInputFn: k,
                    ... function({
                        mask: t,
                        unmask: e,
                        block: n,
                        unblock: r,
                        ignore: i,
                        blockClass: a,
                        blockSelector: o,
                        maskTextClass: s,
                        maskTextSelector: u,
                        ignoreClass: c
                    }) {
                        let l = eZ(t, [".sentry-mask", "[data-sentry-mask]"], s, u),
                            d = eZ(e, [".sentry-unmask", "[data-sentry-unmask]"]),
                            f = {
                                maskTextSelector: l,
                                unmaskTextSelector: d,
                                maskInputSelector: l,
                                unmaskInputSelector: d,
                                blockSelector: eZ(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], a, o),
                                unblockSelector: eZ(r, [".sentry-unblock", "[data-sentry-unblock]"]),
                                ignoreSelector: eZ(i, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], c)
                            };
                        return a instanceof RegExp && (f.blockClass = a), s instanceof RegExp && (f.maskTextClass = s), f
                    }({
                        mask: b,
                        unmask: E,
                        block: S,
                        unblock: w,
                        ignore: T,
                        blockClass: R,
                        blockSelector: N,
                        maskTextClass: I,
                        maskTextSelector: O,
                        ignoreClass: C
                    }),
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0
                }, this._initialOptions = {
                    flushMinDelay: t,
                    flushMaxDelay: e,
                    minReplayDuration: Math.min(n, 15e3),
                    stickySession: r,
                    sessionSampleRate: o,
                    errorSampleRate: s,
                    useCompression: i,
                    blockAllMedia: l,
                    maskAllInputs: c,
                    maskAllText: u,
                    mutationBreadcrumbLimit: d,
                    mutationLimit: f,
                    slowClickTimeout: p,
                    slowClickIgnoreSelectors: h,
                    networkDetailAllowUrls: _,
                    networkDetailDenyUrls: g,
                    networkCaptureBodies: m,
                    networkRequestHeaders: e0(y),
                    networkResponseHeaders: e0(v),
                    beforeAddRecordingEvent: x,
                    _experiments: a
                }, "number" == typeof o && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysSessionSampleRate: ${o} })`), this._initialOptions.sessionSampleRate = o), "number" == typeof s && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.
This option is deprecated and will be removed soon.
Instead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:
Sentry.init({ replaysOnErrorSampleRate: ${s} })`), this._initialOptions.errorSampleRate = s), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${eJ}` : eJ), this._isInitialized && eV()) throw Error("Multiple Sentry Session Replay instances are not supported");
            this._isInitialized = !0
        }
        get _isInitialized() {
            return eX
        }
        set _isInitialized(t) {
            eX = t
        }
        setupOnce() {
            eV() && (this._setup(), setTimeout(() => this._initialize()))
        }
        start() {
            this._replay && this._replay.start()
        }
        startBuffering() {
            this._replay && this._replay.startBuffering()
        }
        stop() {
            return this._replay ? this._replay.stop() : Promise.resolve()
        }
        flush(t) {
            return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
        }
        getReplayId() {
            if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
        }
        _initialize() {
            this._replay && this._replay.initializeSampling()
        }
        _setup() {
            let t = function(t) {
                let e = (0, T.getCurrentHub)().getClient(),
                    n = e && e.getOptions(),
                    r = {
                        sessionSampleRate: 0,
                        errorSampleRate: 0,
                        ...(0, k.dropUndefinedKeys)(t)
                    };
                return n ? (null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set."), "number" == typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate), "number" == typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate), r) : (console.warn("SDK client is not available."), r)
            }(this._initialOptions);
            this._replay = new eq({
                options: t,
                recordingOptions: this._recordingOptions
            })
        }
    }
    eQ.__initStatic();

    function e0(t) {
        return [...eK, ...t.map(t => t.toLowerCase())]
    }
}