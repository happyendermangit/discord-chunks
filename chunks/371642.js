function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("424973");
    var i = n("37983"),
        s = n("884691"),
        r = n("997921"),
        a = n("49671"),
        o = n("254490"),
        l = n("773336"),
        u = n("980134");

    function d(e) {
        let t = ["openFile"];
        e.multiple && t.push("multiSelections");
        let n = e.filters;
        a.default.fileManager.openFiles({
            properties: t,
            filters: n
        }, u.MAX_TOTAL_ATTACHMENT_SIZE).then(t => {
            let n = t.map(e => o.transformNativeFile(e));
            null != n && e.onChange({
                stopPropagation: () => null,
                preventDefault: () => null,
                currentTarget: {
                    files: n
                }
            })
        }).catch(t => {
            e.onChange({
                stopPropagation: () => null,
                preventDefault: () => null,
                currentTarget: {
                    files: null,
                    err: t
                }
            })
        })
    }
    class c extends s.Component {
        activateUploadDialogue() {
            if (null != this._ref) return this._ref.activateUploadDialogue()
        }
        setRef(e) {
            this._ref = e
        }
        render() {
            return (0, i.jsx)(r.default, {
                ref: this.setRef,
                handleNativeClick: d,
                embedded: (0, l.isDesktop)(),
                ...this.props
            })
        }
        constructor(e) {
            super(e), this._ref = s.createRef(), this.setRef = this.setRef.bind(this)
        }
    }
    var f = c
}