function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return O
        }
    }), E("222007");
    var t = E("37983"),
        o = E("884691"),
        n = E("446674"),
        r = E("318696"),
        a = E("915639"),
        i = E("787910"),
        I = E("90404"),
        T = E("782340"),
        s = E("386161");

    function S(e) {
        let {
            locale: _,
            children: E
        } = e, [o, r] = (0, n.useStateFromStoresArray)([i.default], () => [i.default.isLoading(), i.default.getError()]);
        return null != r ? (0, t.jsx)(I.default, {
            title: T.default.Messages.I18N_LOCALE_LOADING_ERROR.format({
                locale: _
            }),
            note: (0, t.jsx)("span", {
                children: r.message
            })
        }) : o ? __OVERLAY__ ? null : (0, t.jsx)("div", {
            className: s.loading
        }) : E
    }
    class N extends o.Component {
        render() {
            let {
                locale: e,
                children: _
            } = this.props;
            return (0, t.jsx)(S, {
                locale: e,
                children: _
            })
        }
        constructor(e) {
            super(e), r.updateLocaleLoadingStatus(e.locale, !0)
        }
    }
    var O = n.default.connectStores([a.default], () => ({
        locale: a.default.locale
    }))(N)
}