function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var l, i = n("37983"),
        a = n("884691"),
        s = n("254490"),
        r = n("952368"),
        o = n("170113"),
        u = n("49111"),
        d = n("782340");
    l = class extends a.Component {
        render() {
            let {
                src: e,
                fileSize: t,
                className: n,
                mediaPlayerClassName: l,
                poster: a,
                fileName: c,
                naturalWidth: f,
                naturalHeight: m,
                playable: p,
                downloadable: h = !0,
                volume: E,
                autoPlay: g,
                autoMute: C,
                responsive: S,
                mediaLayoutType: T,
                mimeType: I,
                renderOverlayContent: v,
                renderLinkComponent: _,
                onClick: N,
                onPlay: A,
                onEnded: x,
                onVolumeChange: y,
                onMute: O,
                alt: R = d.default.Messages.VIDEO,
                ...M
            } = this.props;
            return (0, i.jsx)(r.default, {
                alt: R,
                className: n,
                src: a,
                ...M,
                minWidth: o.default.minWidth,
                minHeight: o.default.minHeight,
                shouldLink: !1,
                shouldAnimate: !1,
                mediaLayoutType: T,
                responsive: S,
                children: n => {
                    let {
                        src: a,
                        size: {
                            width: r,
                            height: d
                        }
                    } = n, R = !(f <= u.MAX_VIDEO_WIDTH && m <= u.MAX_VIDEO_HEIGHT || f <= u.MAX_VIDEO_HEIGHT && m <= u.MAX_VIDEO_WIDTH);
                    return (0, i.jsx)(o.default, {
                        className: l,
                        forceExternal: R,
                        src: e,
                        poster: a,
                        width: r,
                        height: d,
                        responsive: S,
                        volume: E,
                        autoPlay: null != g && g,
                        autoMute: null != C && C,
                        type: o.default.Types.VIDEO,
                        mediaLayoutType: T,
                        fileName: c,
                        fileSize: null == t ? void 0 : (0, s.sizeString)(t),
                        playable: p,
                        renderLinkComponent: _,
                        renderOverlayContent: v,
                        onClick: N,
                        onPlay: A,
                        onEnded: x,
                        onVolumeChange: y,
                        onMute: O,
                        mimeType: I,
                        downloadable: h
                    })
                }
            })
        }
    }
}