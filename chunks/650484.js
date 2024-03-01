function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return h
        },
        PaymentPortalBody: function() {
            return m
        },
        PaymentPortalFooter: function() {
            return E
        }
    });
    var r = i("37983"),
        n = i("884691"),
        s = i("414456"),
        l = i.n(s),
        a = i("627445"),
        u = i.n(a),
        c = i("817736"),
        d = i.n(c),
        o = i("77078"),
        f = i("642906"),
        S = i("304006");

    function h(e) {
        var t, i, s, a, c, d;
        let {
            header: h,
            isLargeModal: m,
            stepProps: E
        } = function(e) {
            let {
                header: t,
                isLargeModal: i,
                ...r
            } = e;
            return {
                header: t,
                isLargeModal: i,
                stepProps: r
            }
        }(e), {
            step: p,
            stepConfigs: I,
            setBodyNode: k,
            setFooterNode: C,
            setModalOverlayNode: v,
            setReadySlideId: g
        } = (0, f.usePaymentContext)(), y = I.find(e => e.key === p);
        n.useEffect(() => {
            v(null)
        }, [p, v]), u(null != y, "Unknown step for current payment flow.");
        let _ = null !== (c = null == y ? void 0 : null === (t = y.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== c && c,
            R = null == y ? void 0 : null === (i = y.options) || void 0 === i ? void 0 : i.bodyClassName,
            T = void 0 !== m && m ? S.sliderBodyLarge : null == y ? void 0 : null === (s = y.options) || void 0 === s ? void 0 : s.sliderBodyClassName;
        return (0, r.jsxs)(r.Fragment, {
            children: [null === (d = null == y ? void 0 : null === (a = y.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === d || d ? h : null, y.renderStep(E), null == p || _ ? null : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(o.ModalContent, {
                    className: l(S.body, R),
                    children: (0, r.jsx)(o.Slides, {
                        activeSlide: p,
                        centered: !1,
                        onSlideReady: e => g(e),
                        children: I.filter(e => null != e.key).map(e => (0, r.jsx)(o.Slide, {
                            id: e.key,
                            children: (0, r.jsx)("form", {
                                className: l(S.sliderBody, T),
                                ref: e => k(e),
                                onSubmit: e => e.preventDefault()
                            })
                        }, e.key))
                    })
                }), (0, r.jsx)("div", {
                    ref: e => C(e)
                }), (0, r.jsx)("div", {
                    ref: e => v(e)
                })]
            })]
        })
    }

    function m(e) {
        let {
            children: t
        } = e, {
            bodyNode: i
        } = (0, f.usePaymentContext)();
        return null == i ? null : d.createPortal(t, i)
    }

    function E(e) {
        let {
            children: t
        } = e, {
            footerNode: i
        } = (0, f.usePaymentContext)();
        return null == i ? null : d.createPortal(t, i)
    }
}