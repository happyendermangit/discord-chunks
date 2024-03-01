function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return T
        }
    }), s("222007");
    var r = s("37983"),
        n = s("884691"),
        l = s("414456"),
        i = s.n(l),
        a = s("446674"),
        o = s("77078"),
        u = s("913144"),
        c = s("960476"),
        d = s("538282"),
        h = s("510849"),
        f = s("145131"),
        p = s("810567"),
        m = s("531470"),
        I = s("140331"),
        g = s("588155"),
        _ = s("762518"),
        E = s("49111"),
        R = s("115279"),
        y = s("782340"),
        S = s("901137");
    let F = e => e.stopPropagation();
    class v extends n.PureComponent {
        componentDidMount() {
            c.initializeSearch(), document.addEventListener("keydown", this.backToFrontPage), "" !== this.props.query && this.search(this.props.query, E.GIFPickerResultTypes.SEARCH)
        }
        componentWillUnmount() {
            u.default.wait(() => c.resetSearch()), document.removeEventListener("keydown", this.backToFrontPage)
        }
        search(e, t, s) {
            c.search(e, t, s), "" === e ? this.setState({
                resultType: null
            }) : this.state.resultType !== E.GIFPickerResultTypes.SEARCH && this.setState({
                resultType: E.GIFPickerResultTypes.SEARCH
            })
        }
        renderHeaderContent() {
            let {
                query: e
            } = this.props, {
                resultType: t
            } = this.state;
            switch (t) {
                case E.GIFPickerResultTypes.FAVORITES:
                    return (0, r.jsx)(o.FormTitle, {
                        tag: "h5",
                        className: S.searchHeader,
                        children: y.default.Messages.CATEGORY_FAVORITE
                    });
                case E.GIFPickerResultTypes.TRENDING_GIFS:
                    return (0, r.jsx)(o.FormTitle, {
                        tag: "h5",
                        className: S.searchHeader,
                        children: y.default.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                    });
                default:
                    return (0, r.jsx)(p.default, {
                        className: S.searchBar,
                        size: p.default.Sizes.MEDIUM,
                        query: e,
                        onChange: this.handleChangeQuery,
                        onClear: this.handleClearQuery,
                        placeholder: y.default.Messages.SEARCH_TENOR,
                        "aria-label": y.default.Messages.SEARCH_TENOR,
                        ref: this.searchBarRef,
                        autoFocus: !0
                    })
            }
        }
        renderHeader() {
            let {
                resultType: e
            } = this.state, t = null;
            return null != e && (t = (0, r.jsx)(o.Clickable, {
                onClick: this.handleClearQuery,
                className: S.backButton,
                "aria-label": y.default.Messages.BACK,
                children: (0, r.jsx)(m.default, {
                    title: y.default.Messages.BACK
                })
            })), (0, r.jsxs)(f.default, {
                align: f.default.Align.CENTER,
                children: [t, this.renderHeaderContent()]
            })
        }
        renderContent() {
            let {
                resultItems: e,
                resultQuery: t,
                query: s,
                favorites: n,
                searchOffset: l,
                searchLimit: i,
                searchTotalResults: a,
                suggestions: o,
                hideFavorites: u
            } = this.props, {
                resultType: c
            } = this.state;
            return null == c ? (0, r.jsx)(g.default, {
                hideFavoritesTile: u,
                onSelectItem: this.handleSelectItem
            }) : (0, r.jsx)(_.default, {
                data: c === E.GIFPickerResultTypes.FAVORITES ? n : e,
                onSelectGIF: this.handleSelectGIF,
                resultType: c,
                resultQuery: t,
                query: s,
                searchOffset: l,
                searchLimit: i,
                searchTotalResults: a,
                suggestions: o,
                onSelectSuggestion: this.handleSelectSuggestion
            })
        }
        render() {
            let {
                className: e,
                forwardedRef: t
            } = this.props;
            return (0, r.jsxs)("div", {
                id: R.GIF_PICKER_TAB_PANEL_ID,
                role: "tabpanel",
                "aria-labelledby": R.GIF_PICKER_TAB_ID,
                className: i(S.container, e),
                onClick: F,
                ref: t,
                children: [(0, r.jsx)("div", {
                    className: S.header,
                    children: this.renderHeader()
                }), (0, r.jsx)("div", {
                    className: S.content,
                    children: this.renderContent()
                })]
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                resultType: null
            }, this.searchBarRef = n.createRef(), this.backToFrontPage = e => {
                let {
                    resultType: t
                } = this.state;
                e.keyCode === E.KeyboardKeys.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery())
            }, this.handleChangeQuery = e => {
                (0, d.setSearchQuery)(e), this.search(e, E.GIFPickerResultTypes.SEARCH)
            }, this.handleSelectSuggestion = e => {
                (0, d.setSearchQuery)(""), c.resetSearch(), this.search(e, E.GIFPickerResultTypes.SEARCH_SUGGESTION, !0)
            }, this.handleClearQuery = () => {
                let {
                    current: e
                } = this.searchBarRef;
                (0, d.setSearchQuery)(""), c.resetSearch(), this.setState({
                    resultType: null
                }), null != e && e.focus()
            }, this.handleSelectGIF = e => {
                let {
                    onSelectGIF: t
                } = this.props;
                null != t && t(e)
            }, this.handleSelectItem = (e, t) => {
                let {
                    current: s
                } = this.searchBarRef;
                switch (e) {
                    case E.GIFPickerResultTypes.TRENDING_CATEGORY:
                        c.search(t, E.GIFPickerResultTypes.TRENDING_CATEGORY, !0), null != s && s.focus();
                        break;
                    case E.GIFPickerResultTypes.TRENDING_GIFS:
                        c.fetchTrendingGIFs()
                }
                this.setState({
                    resultType: e
                })
            }
        }
    }
    var T = n.forwardRef((e, t) => {
        !e.persistSearch && (0, d.setSearchQuery)("");
        let {
            query: s,
            resultQuery: n,
            resultItems: l,
            suggestions: i
        } = (0, a.useStateFromStoresObject)([h.default], () => ({
            query: h.default.getQuery(),
            resultQuery: h.default.getResultQuery(),
            resultItems: h.default.getResultItems(),
            suggestions: h.default.getSuggestions()
        })), o = (0, d.useExpressionPickerStore)(e => e.searchQuery), u = (0, I.useSortedFavoriteGIFs)();
        return (0, r.jsx)(v, {
            ...e,
            forwardedRef: t,
            query: null != o && "" !== o ? o : s,
            resultQuery: n,
            resultItems: l,
            suggestions: i,
            favorites: u,
            searchOffset: 0,
            searchTotalResults: h.default.getResultItems().length,
            searchLimit: null
        })
    })
}