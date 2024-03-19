function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        default: function() {
            return j
        }
    }), t("222007"), t("70102");
    var d = t("147369"),
        s = t("803182"),
        n = t("619443"),
        i = t("21121"),
        c = t("99317"),
        r = t("693051"),
        o = t("607542"),
        f = t("153498"),
        l = t("934306"),
        u = t("742171"),
        p = t("393027"),
        b = t("393414"),
        h = t("49111"),
        j = new class e {
            initialize() {
                this.cleanup(), this.unlistenHistory = (0, b.getHistory)().listen(this.handleRouteChange);
                let {
                    pathname: e
                } = (0, b.getHistory)().location;
                p.default.getState().resetPath(e), this.unlistenKeyboardChange = p.default.subscribe(this.handleKeybindRouteChange), n.default.addChangeListener(this.handleConnectionChange)
            }
            convertRouteToNavigation(e, a) {
                var t, d, n;
                let {
                    pathname: p
                } = e, b = (0, r.getRootNavigationRef)(), j = (0, i.isInMainTabsExperiment)(), {
                    showYouBar: m
                } = (0, c.getNavYouBarExperiment)({
                    location: "convertRouteToNavigation"
                });
                if (null == b || !b.isReady()) return;
                let _ = e.navigationReplace,
                    E = null !== (t = e.useScreen) && void 0 !== t && t;
                if (j && (0, l.isSplitMessagesTab)() && p === h.Routes.ME) {
                    (0, f.navigateToRootTab)({
                        screen: "messages",
                        resetRoot: _
                    });
                    return
                }
                if (j && p === h.Routes.NOTIFICATIONS) {
                    (0, f.navigateToRootTab)({
                        screen: "notifications",
                        resetRoot: _
                    });
                    return
                }
                if (p.startsWith("/channels/")) {
                    let e = (0, s.matchPath)(p, {
                            path: h.Routes.CHANNEL(":guildId", ":channelId?", ":messageId?")
                        }),
                        a = (0, s.matchPath)(p, {
                            path: "".concat(h.Routes.CHANNEL(":guildId", ":channelId?")).concat(h.Routes.VOICE_CHAT_CHANNEL_PARTIAL(":voiceGuildId", ":voiceChannelId", ":voiceMessageId?"))
                        });
                    if (!j) {
                        let e = b.getRootState();
                        (null == e ? void 0 : null === (n = e.routes) || void 0 === n ? void 0 : null === (d = n[0]) || void 0 === d ? void 0 : d.name) !== "panels" && (0, f.resetToPanelsUI)();
                        return
                    }
                    if (null != a) {
                        let {
                            voiceGuildId: e,
                            voiceChannelId: t,
                            voiceMessageId: d
                        } = a.params;
                        (0, u.isOldVoiceUIEnabled)() && (0, f.navigateToChannel)({
                            channelId: t,
                            guildId: e,
                            messageId: d,
                            replaceChannelAndFixRoot: _,
                            useScreen: E
                        });
                        return
                    }
                    if (null != e) {
                        let {
                            channelId: a,
                            guildId: t,
                            messageId: d
                        } = e.params;
                        if (!(0, l.isSplitMessagesTab)() && !m) {
                            (0, f.navigateToRootTab)({
                                screen: "guilds",
                                guildId: t,
                                resetRoot: _
                            });
                            return
                        }
                        if ((0, l.isOnNewPanels)()) {
                            let [e, d] = (0, o.default)(b.getCurrentRoute());
                            if (e === t && d === a) return
                        }
                        null == a || (0, l.shouldHandleNewPanelsRoute)(t) && !1 !== _ ? t !== h.ME || m ? (0, f.navigateToRootTab)({
                            screen: "guilds",
                            guildId: t,
                            channelId: (0, l.isOnNewPanels)() ? a : void 0,
                            resetRoot: _
                        }) : (0, f.navigateToRootTab)({
                            screen: "messages",
                            resetRoot: _
                        }) : null != t && (0, f.navigateToChannel)({
                            channelId: a,
                            guildId: t,
                            messageId: d,
                            replaceChannelAndFixRoot: _,
                            useScreen: E
                        })
                    }
                    return
                }
                if (p.startsWith("/member-verification/")) {
                    let e = (0, s.matchPath)(p, {
                        path: h.Routes.GUILD_MEMBER_VERIFICATION(":guildId", ":inviteCode?")
                    });
                    null != e && (0, f.navigateToMemberVerification)(e.params.guildId, e.params.inviteCode);
                    return
                }
                if (p.startsWith("/login") || p.startsWith("/register")) {
                    (0, f.resetToAuthRoute)();
                    return
                }
                if (p.startsWith("/account-standing")) {
                    b.navigate({
                        name: "account-standing",
                        params: void 0
                    });
                    return
                }
                j && (0, f.navigateToRootTab)({
                    screen: "messages",
                    resetRoot: _
                })
            }
            executeRouteRewrites(e, a) {
                if (this.routeChangeCount += 1, this.routeChangeCount < 10)
                    for (let t of this.rewrites) {
                        let s = (0, b.getHistory)().location.pathname,
                            n = t(e, a);
                        if (null != n) return (0, d.addBreadcrumb)({
                            message: "RouteManager.handleRouteChange: A route rewrite is replacing the current route",
                            data: {
                                replacePath: n.path,
                                previousPath: s
                            }
                        }), (0, b.replaceWith)(n.path, n.state), !0
                    } else throw Error("RouteManager: Something has gone horribly wrong with rewrites");
                return !1
            }
            cleanup() {
                var e, a;
                null === (e = this.unlistenHistory) || void 0 === e || e.call(this), this.unlistenHistory = void 0, null === (a = this.unlistenKeyboardChange) || void 0 === a || a.call(this), this.unlistenKeyboardChange = void 0, n.default.removeChangeListener(this.handleConnectionChange)
            }
            addRouteChangeListener(e) {
                return null != this.unlistenHistory && e((0, b.getHistory)().location, "REPLACE"), this.listeners.add(e), () => this.removeRouteChangeListener(e)
            }
            addRouteRewriter(e) {
                if (null != this.unlistenHistory) {
                    let a = e((0, b.getHistory)().location, (0, b.getHistory)().action);
                    null != a && (0, b.replaceWith)(a.path, a.state)
                }
                return this.rewrites.add(e), () => this.removeRouteRewriter(e)
            }
            removeRouteChangeListener(e) {
                this.listeners.delete(e)
            }
            removeRouteRewriter(e) {
                this.rewrites.delete(e)
            }
            getHistory() {
                return (0, b.getHistory)()
            }
            constructor() {
                this.rewrites = new Set, this.listeners = new Set, this.routeChangeCount = 0, this.timer = -1, this.connected = !1, this.handleConnectionChange = () => {
                    let e = n.default.isConnected(),
                        a = e && !this.connected;
                    this.connected = e, a && (this.routeChangeCount = 0, this.executeRouteRewrites((0, b.getHistory)().location, "REPLACE"))
                }, this.handleRouteChange = (e, a) => {
                    if (this.executeRouteRewrites(e, a)) return;
                    let t = p.default.getState();
                    for (let d of (t.basePath !== e.pathname && t.resetPath(e.pathname), this.listeners)) try {
                        d(e, a)
                    } catch (e) {
                        console.warn("RouteManager.listen: A route listener has caused an error", e.message)
                    }
                    this.convertRouteToNavigation(e, a), this.routeChangeCount = 0
                }, this.handleKeybindRouteChange = e => {
                    let {
                        path: a
                    } = e;
                    null != a ? (clearTimeout(this.timer), this.timer = setTimeout(this.flushRoute, 200)) : null == a && clearTimeout(this.timer)
                }, this.flushRoute = () => {
                    clearTimeout(this.timer);
                    let e = p.default.getState();
                    null != e.path && (0, b.transitionTo)(e.path)
                }
            }
        }
}