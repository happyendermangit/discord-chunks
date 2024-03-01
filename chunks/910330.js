function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("817736"),
        s = n.n(a),
        r = n("446674"),
        o = n("77078"),
        u = n("890674"),
        d = n("349649"),
        c = n("102985"),
        f = n("49111"),
        m = n("782340"),
        p = n("380571");
    class h extends i.PureComponent {
        componentDidMount() {
            if (this.props.autoFocus && !this.props.hideNote) {
                let e = s.findDOMNode(this.noteRef.current);
                null != e && null != e.selectionStart && (e.focus(), e.selectionStart = e.selectionEnd = e.value.length)
            }
        }
        render() {
            let {
                className: e,
                loading: t,
                note: n,
                hideNote: i
            } = this.props;
            return i ? null : (0, l.jsx)("div", {
                className: e,
                children: (0, l.jsx)(o.TextAreaAutosize, {
                    ref: this.noteRef,
                    className: p.textarea,
                    disabled: t,
                    placeholder: t ? m.default.Messages.LOADING_NOTE : m.default.Messages.NOTE_PLACEHOLDER,
                    "aria-label": m.default.Messages.NOTE,
                    onBlur: this.handleBlur,
                    onKeyPress: this.handleKeyPress,
                    defaultValue: null != n ? n : void 0,
                    maxLength: f.NOTE_MAX_LENGTH
                })
            })
        }
        constructor(...e) {
            super(...e), this.noteRef = i.createRef(), this.handleBlur = e => {
                let t = e.currentTarget.value,
                    {
                        note: n
                    } = this.props;
                n !== t && u.default.updateNote(this.props.userId, t)
            }, this.handleKeyPress = e => {
                if (13 === e.which) {
                    if (e.shiftKey) {
                        var t;
                        (null !== (t = e.currentTarget.value.match(/\n/g)) && void 0 !== t ? t : []).length >= 5 && e.preventDefault()
                    } else e.preventDefault(), e.currentTarget.blur()
                } else e.which === f.KeyboardKeys.SPACE && e.stopPropagation()
            }
        }
    }

    function E(e) {
        let t = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation),
            n = (0, d.default)(e.userId);
        return (0, l.jsx)(h, {
            ...e,
            ...n,
            hideNote: t
        })
    }
    h.defaultProps = {
        autoFocus: !1
    }
}