function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return i
        }
    }), s("222007");
    var r, n = s("884691");

    function l(e, t, s) {
        return Math.min(Math.max(Math.floor(e / t), 1), s)
    }
    var i = (0, s("737960").default)(((r = class extends n.Component {
        static getDerivedStateFromProps(e, t) {
            let {
                width: s,
                desiredItemWidth: r,
                maxColumns: n
            } = e, i = l(s, r, n);
            return i !== t.columns ? {
                columns: i
            } : null
        }
        render() {
            let {
                width: e,
                height: t,
                children: s
            } = this.props, {
                columns: r
            } = this.state;
            return s(r, e, t)
        }
        constructor(...e) {
            super(...e), this.state = {
                columns: l(this.props.width, this.props.desiredItemWidth, this.props.maxColumns)
            }
        }
    }).defaultProps = {
        desiredItemWidth: 200
    }, r))
}