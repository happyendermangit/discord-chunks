function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createMasonryListScroller: function() {
            return c
        }
    }), n("222007");
    var i = n("37983"),
        s = n("884691"),
        r = n.n(s),
        a = n("414456"),
        o = n.n(a),
        l = n("718776"),
        u = n("462977"),
        d = n("38879");

    function c(e, t, n) {
        let a = (0, u.getScrollbarSpecs)(e),
            c = new Map,
            f = new n(e => {
                e.forEach(e => {
                    var t;
                    let {
                        target: n
                    } = e;
                    null === (t = c.get(n)) || void 0 === t || t(e)
                })
            });
        return (0, s.forwardRef)(function(n, _) {
            let {
                onScroll: E,
                dir: h = "ltr",
                sections: g,
                columns: m,
                getItemKey: p,
                getItemHeight: S,
                getSectionHeight: v,
                chunkSize: T,
                renderSection: I,
                renderItem: A,
                getSectionProps: C,
                itemGutter: y,
                removeEdgeItemGutters: N,
                sectionGutter: R,
                padding: O,
                paddingVertical: D,
                paddingHorizontal: P,
                fade: L = !1,
                className: M,
                style: b,
                ...U
            } = n, w = r.useRef(null), k = r.useRef(null), [V, G] = r.useState(!1), {
                scrollerRef: F,
                scrollerState: x,
                getScrollerState: B
            } = (0, u.useCachedScrollerState)();
            (0, u.usePaddingFixes)({
                scrollerRef: F,
                className: M,
                specs: a,
                orientation: "vertical",
                dir: h
            });
            let {
                forceUpdateOnChunkChange: H,
                coordsMap: Y,
                gridData: K,
                visibleSections: j,
                totalHeight: W,
                forceUpdate: z,
                masonryComputer: q
            } = (0, u.useVirtualizedMasonryState)({
                sections: g,
                columns: m,
                getItemKey: p,
                getItemHeight: S,
                getSectionHeight: v,
                chunkSize: T,
                itemGutter: y,
                removeEdgeItemGutters: N,
                sectionGutter: R,
                padding: O,
                paddingVertical: D,
                paddingHorizontal: P,
                getScrollerState: B,
                dir: h
            }), X = (0, s.useCallback)(function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                e > x.current.dirty && (x.current.dirty = e, 2 === e ? z() : H(1))
            }, [H, x, z]), Q = (0, u.useScrollSpring)(F), Z = (0, s.useCallback)(() => q.itemGrid, [q]), J = (0, s.useCallback)(() => q.coordsMap, [q]), $ = r.useCallback(() => X(), [X]);
            (0, u.useResizeObserverSubscription)({
                ref: F,
                key: "container",
                onUpdate: $,
                resizeObserver: f,
                listenerMap: c
            }), (0, s.useImperativeHandle)(_, () => ({
                getScrollerNode: () => F.current,
                getItemGrid: Z,
                getCoordsMap: J,
                getScrollerState: B,
                ...(0, u.getAnimatedScrollHelpers)(F, B, Q)
            }), [F, B, Z, Q, J]);
            let ee = (0, s.useCallback)(e => {
                X(1), null == w.current ? G(!0) : clearTimeout(w.current), w.current = setTimeout(() => {
                    w.current = null, G(!1)
                }, 200), null != E && E(e)
            }, [E, X]);
            return (0, i.jsx)("div", {
                ref: F,
                onScroll: ee,
                className: o(M, {
                    [e]: !0,
                    [t]: L,
                    [d.scrolling]: V
                }),
                style: (0, u.getMergedOrientationStyles)(b),
                ...U,
                children: (0, s.useMemo)(() => (0, i.jsx)(l.FocusRingScope, {
                    containerRef: k,
                    children: (0, i.jsx)("div", {
                        style: {
                            height: W
                        },
                        className: d.content,
                        ref: k,
                        children: Object.keys(j).map(e => {
                            let t = (0, u.getMasonryListSectionIndex)(e),
                                n = Y[e],
                                s = j[e],
                                r = Y[(0, u.getMasonryListSectionHeaderKey)(t)],
                                a = null == C ? void 0 : C(t);
                            return null != n && null != s ? (0, i.jsxs)("div", {
                                style: n,
                                ...a,
                                children: [null != I && null != r && I(t, r, e), s.map(e => {
                                    let [t, n, i] = e, s = Y[t];
                                    return null != s ? A(n, i, s, t, K) : null
                                })]
                            }, e) : null
                        })
                    })
                }), [j, A, I, Y, W, C, K])
            })
        })
    }
}