function(e, t, n) {
    e = n.nmd(e), n("781738"), n("424973"), n("843762"), (function() {
        "use strict";
        var r = {
                function: !0,
                object: !0
            },
            a = r[typeof window] && window || this,
            i = r[typeof t] && t,
            o = r[typeof e] && e && !e.nodeType && e,
            s = i && o && "object" == typeof n.g && n.g;
        s && (s.global === s || s.window === s || s.self === s) && (a = s);
        var c = 9007199254740991,
            l = /\bOpera/,
            u = Object.prototype,
            d = u.hasOwnProperty,
            p = u.toString;

        function f(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
        }

        function m(e) {
            return e = b(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : f(e)
        }

        function h(e, t) {
            for (var n in e) d.call(e, n) && t(e[n], n, e)
        }

        function v(e) {
            return null == e ? f(e) : p.call(e).slice(8, -1)
        }

        function g(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?")
        }

        function y(e, t) {
            var n = null;
            return ! function(e, t) {
                var n = -1,
                    r = e ? e.length : 0;
                if ("number" == typeof r && r > -1 && r <= c)
                    for (; ++n < r;) t(e[n], n, e);
                else h(e, t)
            }(e, function(r, a) {
                n = t(n, r, a, e)
            }), n
        }

        function b(e) {
            return String(e).replace(/^ +| +$/g, "")
        }
        var x = function e(t) {
            var n, r, i, o, s, c = a,
                u = t && "object" == typeof t && "String" != v(t);
            u && (c = t, t = null);
            var d = c.navigator || {},
                f = d.userAgent || "";
            t || (t = f);
            var x = u ? !!d.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(p.toString()),
                S = "Object",
                w = u ? S : "ScriptBridgingProxyObject",
                D = u ? S : "Environment",
                C = u && c.java ? "JavaPackage" : v(c.java),
                k = u ? S : "RuntimeObject",
                P = /\bJava/.test(C) && c.java,
                E = P && v(c.environment) == D,
                T = c.document || {},
                M = c.operamini || c.opera,
                R = l.test(R = u && M ? M["[[Class]]"] : v(M)) ? R : M = null,
                I = t,
                O = [],
                A = null,
                L = t == f,
                N = L && M && "function" == typeof M.version && M.version(),
                F = function(e) {
                    return y(e, function(e, n) {
                        return e || RegExp("\\b" + (n.pattern || g(n)) + "\\b", "i").exec(t) && (n.label || n)
                    })
                }([{
                    label: "EdgeHTML",
                    pattern: "Edge"
                }, "Trident", {
                    label: "WebKit",
                    pattern: "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                j = function(e) {
                    return y(e, function(e, n) {
                        return e || RegExp("\\b" + (n.pattern || g(n)) + "\\b", "i").exec(t) && (n.label || n)
                    })
                }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "Edge"
                }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chrome", {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                }, {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"]),
                K = z([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"]),
                _ = function(e) {
                    return y(e, function(e, n, r) {
                        return e || (n[K] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(K)] || RegExp("\\b" + g(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
                    })
                }({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1
                    },
                    Archos: {},
                    Amazon: {
                        Kindle: 1,
                        "Kindle Fire": 1
                    },
                    Asus: {
                        Transformer: 1
                    },
                    "Barnes & Noble": {
                        Nook: 1
                    },
                    BlackBerry: {
                        PlayBook: 1
                    },
                    Google: {
                        "Google TV": 1,
                        Nexus: 1
                    },
                    HP: {
                        TouchPad: 1
                    },
                    HTC: {},
                    LG: {},
                    Microsoft: {
                        Xbox: 1,
                        "Xbox One": 1
                    },
                    Motorola: {
                        Xoom: 1
                    },
                    Nintendo: {
                        "Wii U": 1,
                        Wii: 1
                    },
                    Nokia: {
                        Lumia: 1
                    },
                    Samsung: {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1
                    },
                    Sony: {
                        PlayStation: 1,
                        "PlayStation Vita": 1
                    }
                }),
                V = function(e) {
                    return y(e, function(e, n) {
                        var r, a, i, o, s = n.pattern || g(n);
                        if (!e && (e = RegExp("\\b" + s + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t))) {
                            ;
                            r = e, a = s, i = n.label || n, o = {
                                "10.0": "10",
                                "6.4": "10 Technical Preview",
                                "6.3": "8.1",
                                "6.2": "8",
                                "6.1": "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                "5.2": "Server 2003 / XP 64-bit",
                                "5.1": "XP",
                                "5.01": "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            }, a && i && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (o = o[/[\d.]+$/.exec(r)]) && (r = "Windows " + o), r = String(r), a && i && (r = r.replace(RegExp(a, "i"), i)), e = r = m(r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                        }
                        return e
                    })
                }(["Windows Phone", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

            function z(e) {
                return y(e, function(e, n) {
                    var r = n.pattern || g(n);
                    return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), n = n.label || n, e = m(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                })
            }
            if (F && (F = [F]), _ && !K && (K = z([_])), (o = /\bGoogle TV\b/.exec(K)) && (K = o[0]), /\bSimulator\b/i.test(t) && (K = (K ? K + " " : "") + "Simulator"), "Opera Mini" == j && /\bOPiOS\b/.test(t) && O.push("running in Turbo/Uncompressed mode"), "IE" == j && /\blike iPhone OS\b/.test(t) ? (_ = (o = e(t.replace(/like iPhone OS/, ""))).manufacturer, K = o.product) : /^iP/.test(K) ? (j || (j = "Safari"), V = "iOS" + ((o = / OS ([\d_]+)/i.exec(t)) ? " " + o[1].replace(/_/g, ".") : "")) : "Konqueror" != j || /buntu/i.test(V) ? _ && "Google" != _ && (/Chrome/.test(j) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(K)) || /\bAndroid\b/.test(V) && /^Chrome/.test(j) && /\bVersion\//i.test(t) ? (j = "Android Browser", V = /\bAndroid\b/.test(V) ? V : "Android") : "Silk" == j ? (!/\bMobi/i.test(t) && (V = "Android", O.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && O.unshift("accelerated")) : "PaleMoon" == j && (o = /\bFirefox\/([\d.]+)\b/.exec(t)) ? O.push("identifying as Firefox " + o[1]) : "Firefox" == j && (o = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (V || (V = "Firefox OS"), K || (K = o[1])) : !j || (o = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(j)) ? (j && !K && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(o + "/") + 8)) && (j = null), (o = K || _ || V) && (K || _ || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) && (j = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(V) ? V : o) + " Browser")) : "Electron" == j && (o = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && O.push("Chromium " + o) : V = "Kubuntu", !N) N = y(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", g(j), "(?:Firefox|Minefield|NetFront)"], function(e, n) {
                return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
            });
            if ((o = "iCab" == F && parseFloat(N) > 3 && "WebKit" || /\bOpera\b/.test(j) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(F) && "WebKit" || !F && /\bMSIE\b/i.test(t) && ("Mac OS" == V ? "Tasman" : "Trident") || "WebKit" == F && /\bPlayStation\b(?! Vita\b)/i.test(j) && "NetFront") && (F = [o]), "IE" == j && (o = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (j += " Mobile", V = "Windows Phone " + (/\+$/.test(o) ? o : o + ".x"), O.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (j = "IE Mobile", V = "Windows Phone 8.x", O.unshift("desktop mode"), N || (N = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != j && "Trident" == F && (o = /\brv:([\d.]+)/.exec(t)) && (j && O.push("identifying as " + j + (N ? " " + N : "")), j = "IE", N = o[1]), L) {
                ;
                if (r = "global", i = null != (n = c) ? typeof n[r] : "number", /^(?:boolean|number|string|undefined)$/.test(i) || "object" == i && !n[r]) v(o = c.runtime) == w ? (j = "Adobe AIR", V = o.flash.system.Capabilities.os) : v(o = c.phantom) == k ? (j = "PhantomJS", N = (o = o.version || null) && o.major + "." + o.minor + "." + o.patch) : "number" == typeof T.documentMode && (o = /\bTrident\/(\d+)/i.exec(t)) ? (N = [N, T.documentMode], (o = +o[1] + 4) != N[1] && (O.push("IE " + N[1] + " mode"), F && (F[1] = ""), N[1] = o), N = "IE" == j ? String(N[1].toFixed(1)) : N[0]) : "number" == typeof T.documentMode && /^(?:Chrome|Firefox)\b/.test(j) && (O.push("masking as " + j + " " + N), j = "IE", N = "11.0", F = ["Trident"], V = "Windows");
                else if (P && (I = (o = P.lang.System).getProperty("os.arch"), V = V || o.getProperty("os.name") + " " + o.getProperty("os.version")), E) {
                    try {
                        N = c.require("ringo/engine").version.join("."), j = "RingoJS"
                    } catch (e) {
                        (o = c.system) && o.global.system == c.system && (j = "Narwhal", V || (V = o[0].os || null))
                    }!j && (j = "Rhino")
                } else "object" == typeof c.process && !c.process.browser && (o = c.process) && ("object" == typeof o.versions && ("string" == typeof o.versions.electron ? (O.push("Node " + o.versions.node), j = "Electron", N = o.versions.electron) : "string" == typeof o.versions.nw && (O.push("Chromium " + N, "Node " + o.versions.node), j = "NW.js", N = o.versions.nw)), !j && (j = "Node.js", I = o.arch, V = o.platform, N = (N = /[\d.]+/.exec(o.version)) ? N[0] : null));
                V = V && m(V)
            }
            if (N && (o = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(N) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (L && d.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (A = /b/i.test(o) ? "beta" : "alpha", N = N.replace(RegExp(o + "\\+?$"), "") + ("beta" == A ? P ? "b" : "β" : P ? "a" : "α") + (/\d+\+?/.exec(o) || "")), "Fennec" == j || "Firefox" == j && /\b(?:Android|Firefox OS)\b/.test(V)) j = "Firefox Mobile";
            else if ("Maxthon" == j && N) N = N.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(K)) "Xbox 360" == K && (V = null), "Xbox 360" == K && /\bIEMobile\b/.test(t) && O.unshift("mobile mode");
            else if ((/^(?:Chrome|IE|Opera)$/.test(j) || j && !K && !/Browser|Mobi/.test(j)) && ("Windows CE" == V || /Mobi/i.test(t))) j += " Mobile";
            else if ("IE" == j && L) try {
                null === c.external && O.unshift("platform preview")
            } catch (e) {
                O.unshift("embedded")
            } else(/\bBlackBerry\b/.test(K) || /\bBB10\b/.test(t)) && (o = (RegExp(K.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || N) ? (V = ((o = [o, /BB10/.test(t)])[1] ? (K = null, _ = "BlackBerry") : "Device Software") + " " + o[0], N = null) : this != h && "Wii" != K && (L && M || /Opera/.test(j) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == j && /\bOS X (?:\d+\.){2,}/.test(V) || "IE" == j && (V && !/^Win/.test(V) && N > 5.5 || /\bWindows XP\b/.test(V) && N > 8 || 8 == N && !/\bTrident\b/.test(t))) && !l.test(o = e.call(h, t.replace(l, "") + ";")) && o.name && (o = "ing as " + o.name + ((o = o.version) ? " " + o : ""), l.test(j) ? (/\bIE\b/.test(o) && "Mac OS" == V && (V = null), o = "identify" + o) : (o = "mask" + o, j = R ? m(R.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(o) && (V = null), !L && (N = null)), F = ["Presto"], O.push(o));
            (o = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (o = [parseFloat(o.replace(/\.(\d)$/, ".0$1")), o], "Safari" == j && "+" == o[1].slice(-1) ? (j = "WebKit Nightly", A = "alpha", N = o[1].slice(0, -1)) : (N == o[1] || N == (o[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1])) && (N = null), o[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == o[0] && 537.36 == o[2] && parseFloat(o[1]) >= 28 && "WebKit" == F && (F = ["Blink"]), L && (x || o[1]) ? (F && (F[1] = "like Chrome"), o = o[1] || ((o = o[0]) < 530 ? 1 : o < 532 ? 2 : o < 532.05 ? 3 : o < 533 ? 4 : o < 534.03 ? 5 : o < 534.07 ? 6 : o < 534.1 ? 7 : o < 534.13 ? 8 : o < 534.16 ? 9 : o < 534.24 ? 10 : o < 534.3 ? 11 : o < 535.01 ? 12 : o < 535.02 ? "13+" : o < 535.07 ? 15 : o < 535.11 ? 16 : o < 535.19 ? 17 : o < 536.05 ? 18 : o < 536.1 ? 19 : o < 537.01 ? 20 : o < 537.11 ? "21+" : o < 537.13 ? 23 : o < 537.18 ? 24 : o < 537.24 ? 25 : o < 537.36 ? 26 : "Blink" != F ? "27" : "28")) : (F && (F[1] = "like Safari"), o = (o = o[0]) < 400 ? 1 : o < 500 ? 2 : o < 526 ? 3 : o < 533 ? 4 : o < 534 ? "4+" : o < 535 ? 5 : o < 537 ? 6 : o < 538 ? 7 : o < 601 ? 8 : "8"), F && (F[1] += " " + (o += "number" == typeof o ? ".x" : /[.+]/.test(o) ? "" : "+")), "Safari" == j && (!N || parseInt(N) > 45) && (N = o)), "Opera" == j && (o = /\bzbov|zvav$/.exec(V)) ? (j += " ", O.unshift("desktop mode"), "zvav" == o ? (j += "Mini", N = null) : j += "Mobile", V = V.replace(RegExp(" *" + o + "$"), "")) : "Safari" == j && /\bChrome\b/.exec(F && F[1]) && (O.unshift("desktop mode"), j = "Chrome Mobile", N = null, /\bOS X\b/.test(V) ? (_ = "Apple", V = "iOS 4.3+") : V = null), N && 0 == N.indexOf(o = /[\d.]+$/.exec(V)) && t.indexOf("/" + o + "-") > -1 && (V = b(V.replace(o, ""))), F && !/\b(?:Avant|Nook)\b/.test(j) && (/Browser|Lunascape|Maxthon/.test(j) || "Safari" != j && /^iOS/.test(V) && /\bSafari\b/.test(F[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(j) && F[1]) && (o = F[F.length - 1]) && O.push(o), O.length && (O = ["(" + O.join("; ") + ")"]), _ && K && 0 > K.indexOf(_) && O.push("on " + _), K && O.push((/^on /.test(O[O.length - 1]) ? "" : "on ") + K), V && (s = (o = / ([\d.+]+)$/.exec(V)) && "/" == V.charAt(V.length - o[0].length - 1), V = {
                architecture: 32,
                family: o && !s ? V.replace(o[0], "") : V,
                version: o ? o[1] : null,
                toString: function() {
                    var e = this.version;
                    return this.family + (e && !s ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                }
            }), (o = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I) ? (V && (V.architecture = 64, V.family = V.family.replace(RegExp(" *" + o), "")), j && (/\bWOW64\b/i.test(t) || L && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(t)) && O.unshift("32-bit")) : V && /^OS X/.test(V.family) && "Chrome" == j && parseFloat(N) >= 39 && (V.architecture = 64), t || (t = null);
            var B = {};
            return B.description = t, B.layout = F && F[0], B.manufacturer = _, B.name = j, B.prerelease = A, B.product = K, B.ua = t, B.version = j && N, B.os = V || {
                architecture: null,
                family: null,
                version: null,
                toString: function() {
                    return "null"
                }
            }, B.parse = e, B.toString = function() {
                return this.description || ""
            }, B.version && O.unshift(N), B.name && O.unshift(j), V && j && !(V == String(V).split(" ")[0] && (V == j.split(" ")[0] || K)) && O.push(K ? "(" + V + ")" : "on " + V), O.length && (B.description = O.join(" ")), B
        }();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (a.platform = x, define(function() {
            return x
        })) : i && o ? h(x, function(e, t) {
            i[t] = e
        }) : a.platform = x
    }).call(this)
}