function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, l = n("37983"),
        a = n("884691"),
        s = n("254490"),
        r = n("952368"),
        o = n("170113"),
        u = n("49111"),
        d = n("782340");
    i = class extends a.Component {
        render() {
            let {
                src: e,
                fileSize: t,
                className: n,
                mediaPlayerClassName: i,
                poster: a,
                fileName: c,
                naturalWidth: f,
                naturalHeight: p,
                playable: m,
                downloadable: h = !0,
                volume: x,
                autoPlay: E,
                autoMute: y,
                responsive: g,
                mediaLayoutType: S,
                mimeType: C,
                renderOverlayContent: _,
                renderLinkComponent: T,
                onClick: I,
                onPlay: v,
                onEnded: N,
                onVolumeChange: A,
                onMute: R,
                alt: O = d.default.Messages.VIDEO,
                ...M
            } = this.props;
            return (0, l.jsx)(r.default, {
                alt: O,
                className: n,
                src: a,
                ...M,
                minWidth: o.default.minWidth,
                minHeight: o.default.minHeight,
                shouldLink: !1,
                shouldAnimate: !1,
                mediaLayoutType: S,
                responsive: g,
                children: n => {
                    let {
                        src: a,
                        size: {
                            width: r,
                            height: d
                        }
                    } = n, O = !(f <= u.MAX_VIDEO_WIDTH && p <= u.MAX_VIDEO_HEIGHT || f <= u.MAX_VIDEO_HEIGHT && p <= u.MAX_VIDEO_WIDTH);
                    return (0, l.jsx)(o.default, {
                        className: i,
                        forceExternal: O,
                        src: e,
                        poster: a,
                        width: r,
                        height: d,
                        responsive: g,
                        volume: x,
                        autoPlay: null != E && E,
                        autoMute: null != y && y,
                        type: o.default.Types.VIDEO,
                        mediaLayoutType: S,
                        fileName: c,
                        fileSize: null == t ? void 0 : (0, s.sizeString)(t),
                        fileSizeBytes: null == t ? void 0 : t,
                        playable: m,
                        renderLinkComponent: T,
                        renderOverlayContent: _,
                        onClick: I,
                        onPlay: v,
                        onEnded: N,
                        onVolumeChange: A,
                        onMute: R,
                        mimeType: C,
                        downloadable: h
                    })
                }
            })
        }
    }
}