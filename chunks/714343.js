function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    }), n("424973");
    var l = n("37983");
    n("884691");
    var i = n("383018"),
        a = n("501536"),
        s = n("200294"),
        r = n("851745"),
        o = n("782340");
    let u = {
            results: {
                commandOptions: []
            }
        },
        d = {
            stores: [i.default],
            focusMode: r.FocusMode.AUTO_WHEN_FILTERED,
            matches: (e, t, n, l, a) => !(l || null == i.default.getActiveCommand(e.id) || null != i.default.getActiveOption(e.id)),
            queryResults(e, t, n, l, a) {
                let s = i.default.getActiveCommand(e.id);
                if ((null == s ? void 0 : s.options) == null) return u;
                let r = i.default.getOptionStates(e.id),
                    o = s.options.filter(e => {
                        var t;
                        return e.displayName.startsWith(n) && !(null === (t = r[e.name]) || void 0 === t ? void 0 : t.hasValue)
                    });
                return 0 === o.length ? u : {
                    results: {
                        commandOptions: o
                    }
                }
            },
            renderResults(e) {
                let {
                    results: {
                        commandOptions: t
                    },
                    selectedIndex: n,
                    query: i,
                    onHover: r,
                    onClick: u
                } = e, d = [], c = [];
                t.forEach(e => {
                    (e.required ? d : c).push(e)
                });
                let f = d.length > 0 ? (0, s.renderAutocompleteGroup)({
                        query: i,
                        selectedIndex: n,
                        autocompletes: d,
                        onHover: r,
                        onClick: u,
                        titleWithQuery: o.default.Messages.REQUIRED_OPTIONS_MATCHING,
                        titleWithoutQuery: o.default.Messages.REQUIRED_OPTIONS,
                        Component: a.default.Generic,
                        getProps: (e, t) => ({
                            key: t.toString(),
                            text: e.displayName,
                            description: e.displayDescription
                        }),
                        getQuery: e => e,
                        key: "required-options"
                    }) : null,
                    m = c.length > 0 ? (0, s.renderAutocompleteGroup)({
                        query: i,
                        selectedIndex: n,
                        autocompletes: c,
                        onHover: r,
                        onClick: u,
                        titleWithQuery: o.default.Messages.OPTIONS_MATCHING,
                        titleWithoutQuery: d.length > 0 ? o.default.Messages.OTHER_OPTIONS : o.default.Messages.OPTIONS,
                        Component: a.default.Generic,
                        getProps: (e, t) => ({
                            key: t.toString(),
                            text: e.displayName,
                            description: e.displayDescription
                        }),
                        getQuery: e => e,
                        key: "optional-options",
                        indexOffset: d.length
                    }) : null;
                return (0, l.jsxs)(l.Fragment, {
                    children: [f, m]
                })
            },
            onSelect(e) {
                let {
                    results: {
                        commandOptions: t
                    },
                    index: n,
                    options: l
                } = e, i = t[n];
                return l.insertText(function(e) {
                    return "".concat(e.displayName, ":")
                }(i)), {
                    type: r.AutocompleteSelectionTypes.COMMAND_OPTION
                }
            }
        };
    var c = d
}