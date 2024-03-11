function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        Types: function() {
            return i
        },
        default: function() {
            return Y
        }
    }), n("702976"), n("222007");
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("627445"),
        d = n.n(u),
        c = n("819855"),
        f = n("77078"),
        p = n("832627"),
        m = n("841098"),
        h = n("376556"),
        x = n("609030"),
        E = n("309570"),
        y = n("985677"),
        g = n("429928"),
        S = n("36539"),
        C = n("502651"),
        I = n("419830"),
        T = n("808742"),
        _ = n("342845"),
        v = n("239380"),
        N = n("118033"),
        A = n("315102"),
        O = n("568734"),
        M = n("474293"),
        k = n("339521"),
        R = n("145131"),
        L = n("953109"),
        b = n("98292"),
        P = n("280174"),
        j = n("963422"),
        U = n("587974"),
        D = n("49111"),
        w = n("954016"),
        F = n("782340"),
        B = n("542371");
    (l = i || (i = {})).USER_POPOUT = "UserPopout", l.USER_POPOUT_V2 = "UserPopoutV2", l.ACTIVITY_FEED = "ActivityFeed", l.PROFILE = "Profile", l.PROFILE_V2 = "ProfileV2", l.STREAM_PREVIEW = "StreamPreview", l.VOICE_CHANNEL = "VoiceChannel";
    let G = {
            StreamPreview: [108, 60],
            UserPopout: [108, 60],
            UserPopoutV2: [108, 60],
            VoiceChannel: [108, 60],
            Profile: [162, 90],
            ProfileV2: [162, 90],
            ActivityFeed: [900, 500]
        },
        {
            getAssetImage: H
        } = n("550368"),
        V = (0, p.default)(class extends s.PureComponent {
            render() {
                return (0, a.jsx)("div", {
                    className: B.timestamp,
                    children: this.props.message
                })
            }
        });

    function K(e) {
        let t, {
                activity: n
            } = e,
            i = (0, m.default)();
        if ((0, g.default)(n) && (t = D.PlatformTypes.SPOTIFY), null != n.platform && [D.ActivityGamePlatforms.PS4, D.ActivityGamePlatforms.PS5].includes(n.platform) && (t = D.PlatformTypes.PLAYSTATION), null == t) return null;
        let l = h.default.get(t);
        return (0, a.jsx)("img", {
            alt: "",
            src: (0, c.isThemeLight)(i) ? l.icon.lightSVG : l.icon.darkSVG,
            className: B.platformIcon
        })
    }
    class W extends s.PureComponent {
        get activity() {
            let {
                activity: e,
                activityGuild: t
            } = this.props;
            return null != t && (null == e ? void 0 : e.type) !== D.ActivityTypes.PLAYING && (null == e ? void 0 : e.type) !== D.ActivityTypes.WATCHING && (null == e ? void 0 : e.type) !== D.ActivityTypes.HANG_STATUS ? {
                type: D.ActivityTypes.PLAYING,
                name: F.default.Messages.SHARING_SCREEN
            } : e
        }
        getTypeClass(e, t) {
            return (0, M.getClass)(B, e, this.props.type, t)
        }
        isStreamerOnTypeProfile() {
            return (0, C.default)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
        }
        isStreamerOnTypeActivityFeed() {
            return (0, C.default)(this.activity) && "ActivityFeed" === this.props.type
        }
        renderHeader(e) {
            let t;
            let {
                hideHeader: n,
                activityGuild: i,
                channel: l,
                renderHeaderAccessory: s,
                type: r
            } = this.props, u = this.activity;
            if (n || null == u) return null;
            let {
                name: d
            } = u;
            switch (u.type) {
                case D.ActivityTypes.STREAMING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                        platform: [D.PlatformTypes.TWITCH, D.PlatformTypes.YOUTUBE].includes(d.toLowerCase()) ? d : h.default.get(D.PlatformTypes.TWITCH).name
                    });
                    break;
                case D.ActivityTypes.LISTENING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
                        name: d
                    });
                    break;
                case D.ActivityTypes.WATCHING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
                        name: d
                    });
                    break;
                case D.ActivityTypes.PLAYING:
                    t = (0, x.default)(u);
                    break;
                case D.ActivityTypes.COMPETING:
                    t = F.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
                        name: d
                    })
            }
            if (null != i) {
                var c;
                t = (0, O.hasFlag)(null !== (c = null == u ? void 0 : u.flags) && void 0 !== c ? c : 0, D.ActivityFlags.EMBEDDED) ? u.type === D.ActivityTypes.WATCHING ? F.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
                    guildName: i.name
                }) : F.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
                    guildName: i.name
                }) : F.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
                    server: i.name
                })
            }(null == u ? void 0 : u.type) === D.ActivityTypes.HANG_STATUS && (t = F.default.Messages.STATUS_LEAD_IN_JUST);
            let p = (0, I.getChannelIconComponent)(l, i);
            return null != l && (t = l.name), (0, a.jsxs)("div", {
                className: B.headerContainer,
                children: [null != l && null !== p ? (0, a.jsx)(p, {
                    className: o(B.icon)
                }) : null, (0, a.jsx)(f.Heading, {
                    className: (0, M.getClass)(B, "headerText", e ? "EmptyBody" : "Normal"),
                    variant: "heading-deprecated-12/semibold",
                    color: "ProfileV2" === r ? "header-primary" : void 0,
                    children: (0, a.jsx)(b.default, {
                        children: t
                    })
                }), null == s ? void 0 : s()]
            })
        }
        renderXboxImage() {
            return (0, a.jsx)("div", {
                className: B.assets,
                children: (0, a.jsx)("img", {
                    alt: "",
                    src: h.default.get(D.PlatformTypes.XBOX).icon.customPNG,
                    className: o(this.getTypeClass("assetsLargeImage", "Xbox"))
                })
            })
        }
        renderImage(e) {
            var t, n, i;
            let l, r;
            if (e.type === D.ActivityTypes.HANG_STATUS) return (0, a.jsx)("div", {
                className: B.assets,
                children: (0, a.jsx)(_.default, {
                    hangStatusActivity: e,
                    className: o(B.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
                })
            });
            let {
                type: u
            } = this.props, {
                assets: d,
                application_id: c
            } = e;
            if (null == d || null == d.large_image && null == d.small_image) return null;
            (0, C.default)(e) && (l = G[u]);
            let p = (0, g.default)(e),
                m = null != d.large_image ? (0, a.jsx)("img", {
                    alt: null !== (t = d.large_text) && void 0 !== t ? t : "",
                    src: H(c, d.large_image, null != l ? l : [w.ImageSizes.LARGE, w.ImageSizes.LARGE]),
                    className: o(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? D.PlatformTypes.TWITCH : ""), {
                        [null !== (n = this.getTypeClass("assetsLargeMask")) && void 0 !== n ? n : ""]: null != d.small_image
                    }, {
                        [B.assetsLargeImageSpotify]: p
                    })
                }) : null;
            if (p) m = (0, a.jsx)(f.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: m
            });
            else if ((0, N.isStageActivity)(e)) {
                let t = (0, N.unpackStageChannelParty)(e);
                if (null == t) return null;
                m = (0, a.jsx)(U.default, {
                    mask: U.default.Masks.SQUIRCLE,
                    width: w.ImageSizes.SMALL,
                    height: w.ImageSizes.SMALL,
                    children: (0, a.jsx)("img", {
                        src: null !== (i = A.default.getGuildIconURL({
                            id: t.guildId,
                            icon: d.small_image,
                            size: w.ImageSizes.SMALL
                        })) && void 0 !== i ? i : void 0,
                        className: B.assetsLargeImageVoiceChannel,
                        alt: ""
                    })
                })
            }
            return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (m = (0, a.jsxs)("div", {
                className: B.twitchImageContainer,
                children: [(0, a.jsxs)("div", {
                    className: B.twitchImageOverlay,
                    children: [(0, a.jsx)(f.H, {
                        className: B.streamName,
                        children: e.name
                    }), (0, a.jsx)("div", {
                        className: B.streamGame,
                        children: F.default.Messages.STREAMER_PLAYING.format({
                            game: e.details
                        })
                    })]
                }), (0, a.jsx)(f.Anchor, {
                    className: B.twitchBackgroundImage,
                    href: e.url,
                    children: m
                })]
            })), !(0, N.isStageActivity)(e) && null != d.small_image && (r = (0, a.jsx)(f.Tooltip, {
                text: "" !== d.small_text ? d.small_text : null,
                position: "top",
                children: e => {
                    var t;
                    return (0, a.jsx)("img", {
                        alt: null !== (t = d.small_text) && void 0 !== t ? t : "",
                        src: H(c, d.small_image, [w.ImageSizes.SMALL, w.ImageSizes.SMALL]),
                        className: this.getTypeClass("assetsSmallImage", null == m ? "WithoutLargeImage" : void 0),
                        ...e
                    })
                }
            })), null == m) ? (0, a.jsx)("div", {
                className: B.assets,
                children: r
            }) : (0, a.jsxs)("div", {
                className: B.assets,
                children: [(0, a.jsx)(f.Tooltip, {
                    text: null != d.large_text ? d.large_text : null,
                    position: "top",
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: n
                        } = e;
                        return null != m ? s.cloneElement(m, {
                            onMouseEnter: t,
                            onMouseLeave: n
                        }) : null
                    }
                }), r]
            })
        }
        renderGameImage(e) {
            let {
                user: t,
                type: n,
                application: i,
                activityGuild: l
            } = this.props;
            return null != e.assets || (0, E.default)(e) || e.type !== D.ActivityTypes.PLAYING || "ActivityFeed" === n || t.bot ? null : null == i && null != l ? (0, a.jsx)("div", {
                className: o(B.gameIcon, B.screenshareIcon)
            }) : (0, a.jsx)(L.default, {
                className: B.gameIcon,
                game: i
            })
        }
        renderName(e) {
            let {
                user: t,
                application: n,
                hideName: i
            } = this.props;
            if (i) return null;
            let {
                details: l,
                type: s
            } = e;
            if (s === D.ActivityTypes.CUSTOM_STATUS) return null;
            let r = (0, y.default)(e),
                o = e.name,
                u = o;
            return (s === D.ActivityTypes.HANG_STATUS ? u = (0, T.getHangStatusText)(e) : r && null != n ? u = (0, a.jsx)("span", {
                className: B.activityName,
                children: u
            }) : !r && (o = l, u = l, (0, g.default)(e) && null != e.sync_id && null != l ? u = (0, a.jsx)(f.Anchor, {
                className: B.bodyLink,
                onClick: this.handleOpenSpotifyTrack,
                children: l
            }) : (0, N.isStageActivity)(e) && (u = e.name)), null == u) ? null : (0, a.jsx)(f.Text, {
                title: o,
                variant: "text-sm/semibold",
                className: (0, M.getClass)(B, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"),
                children: u
            })
        }
        renderDetails(e) {
            let t;
            let {
                details: n,
                state: i
            } = e, {
                activityGuild: l
            } = this.props, s = n, r = n;
            if (e.type === D.ActivityTypes.CUSTOM_STATUS) s = i;
            else if (e.type === D.ActivityTypes.HANG_STATUS) s = null != l ? F.default.Messages.HANG_STATUS_LOCATION.format({
                guildName: l.name
            }) : null, t = null != l ? () => {
                (0, v.transitionToGuild)(l.id)
            } : void 0;
            else if (!(0, y.default)(e)) {
                if (r = s = i, (0, g.default)(e) && null != i) s = F.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                    artists: r,
                    artistsHook: (t, n) => (0, a.jsx)(j.default, {
                        artists: i,
                        linkClassName: B.bodyLink,
                        canOpen: null != e.sync_id,
                        onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                    }, n)
                });
                else if ((0, N.isStageActivity)(e)) {
                    var o;
                    s = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text
                }
            }
            return null == s || 0 === s.length ? null : ((0, C.default)(e) && (s = F.default.Messages.STREAMER_PLAYING.format({
                game: s
            })), null != t) ? (0, a.jsx)(f.Clickable, {
                onClick: t,
                title: null != r ? r : void 0,
                className: B.clickableDetails,
                children: s
            }) : (0, a.jsx)("div", {
                title: null != r ? r : void 0,
                className: (0, C.default)(e) || (0, g.default)(e) ? B.detailsWrap : B.details,
                children: s
            })
        }
        renderTimePlayed(e) {
            let {
                activityGuild: t
            } = this.props;
            if (!(0, y.default)(e) || (0, g.default)(e)) return null;
            let {
                timestamps: n
            } = e;
            return null == n ? null : (0, E.default)(e) ? (0, a.jsx)(V, {
                timestamps: n
            }) : (0, a.jsx)(P.default, {
                start: n.start,
                location: P.default.Locations.USER_ACTIVITY,
                className: B.playTime,
                isApplicationStreaming: null != t
            })
        }
        renderTimeBar(e) {
            if (!(0, g.default)(e)) return null;
            let {
                timestamps: t
            } = e;
            if (null == t) return null;
            let {
                start: n,
                end: i
            } = t;
            return null == n || null == i ? null : (0, a.jsx)(k.default, {
                start: n,
                end: i,
                className: this.getTypeClass("timeBar"),
                themed: "VoiceChannel" === this.props.type || "UserPopout" === this.props.type || "UserPopoutV2" === this.props.type || "ProfileV2" === this.props.type
            })
        }
        renderState(e, t) {
            var n, i;
            let l;
            let {
                state: s,
                party: r,
                assets: o
            } = e, u = s, d = u;
            return (!(0, y.default)(e) && (d = u = null == o ? void 0 : o.large_text, (0, g.default)(e) && null != u && (u = F.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
                album: d,
                albumHook: (t, n) => null != e.sync_id && null != d ? (0, a.jsx)(f.Anchor, {
                    className: B.bodyLink,
                    onClick: this.handleOpenSpotifyAlbum,
                    children: d
                }, n) : d
            }))), null != u && 0 !== u.length && e.type !== D.ActivityTypes.CUSTOM_STATUS || (0, N.isStageActivity)(e)) ? ((null == r ? void 0 : r.size) == null && [(0, w.POKER_NIGHT_APPLICATION_ID)].includes(null !== (n = e.application_id) && void 0 !== n ? n : "") ? l = F.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                count: "0",
                max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
            }) : (0, N.isStageActivity)(e) && (null == r ? void 0 : r.size) != null ? l = F.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
                numSpeakers: r.size[0],
                numListeners: r.size[1] - r.size[0]
            }) : (null == r ? void 0 : r.size) != null && r.size.length >= 2 && (l = F.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                count: r.size[0],
                max: r.size[1]
            })), (0, a.jsxs)("div", {
                className: B.state,
                children: [(0, a.jsx)("span", {
                    title: d,
                    children: u
                }), null != l ? (0, a.jsxs)("span", {
                    children: [" ", l]
                }) : null]
            })) : null
        }
        render() {
            let e;
            let {
                type: t,
                renderActions: n,
                className: i,
                application: l,
                showReactions: s
            } = this.props, r = this.activity;
            if (null == r || r.type === D.ActivityTypes.CUSTOM_STATUS) return null;
            let u = "UserPopout" === t || "UserPopoutV2" === t,
                d = "Profile" === t || "ProfileV2" === t,
                c = "ActivityFeed" === t,
                f = "StreamPreview" === t,
                p = !1;
            (0, S.default)(r) ? (e = this.renderXboxImage(), p = !0) : null == (e = this.renderImage(r)) && (p = null != (e = this.renderGameImage(r)));
            let m = this.renderName(r),
                h = this.renderDetails(r),
                x = this.renderState(r, l),
                E = this.renderTimePlayed(r),
                y = null != n ? n() : null,
                g = this.renderTimeBar(r),
                C = ![e, m, h, x, E, g, y].some(e => null != e);
            return (0, a.jsxs)("div", {
                className: o(this.getTypeClass("activity"), i),
                children: [this.renderHeader(C), (0, a.jsxs)("div", {
                    className: o(p ? B.bodyAlignCenter : B.bodyNormal, s && !u && !f && B.wrap),
                    children: [(0, a.jsxs)("div", {
                        className: B.activityDetails,
                        children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, a.jsxs)(R.default.Child, {
                            className: o((0, M.getClass)(B, "content", p ? "GameImage" : null != e ? "Images" : "NoImages", t)),
                            children: [m, h, x, E, u || f ? null : g, c ? y : null]
                        })]
                    }), d ? y : null]
                }), u ? g : null, u || f ? y : null, (0, a.jsx)(K, {
                    activity: r
                })]
            })
        }
        constructor(...e) {
            super(...e), this.handleOpenSpotifyTrack = () => {
                let {
                    activity: e,
                    onOpenSpotifyTrack: t
                } = this.props;
                d(null != e, "Spotify activity was null"), null == t || t(e)
            }, this.handleOpenSpotifyArtist = e => {
                let {
                    activity: t,
                    onOpenSpotifyArtist: n,
                    user: i
                } = this.props;
                d(null != t, "Spotify activity was null"), null == n || n(t, i.id, e)
            }, this.handleOpenSpotifyAlbum = () => {
                let {
                    activity: e,
                    onOpenSpotifyAlbum: t,
                    user: n
                } = this.props;
                d(null != e, "Spotify activity was null"), null == t || t(e, n.id)
            }
        }
    }
    W.Types = i;
    var Y = W
}