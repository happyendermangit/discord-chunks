function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    }), n("222007");
    var s = n("37983"),
        i = n("884691"),
        r = n("414456"),
        a = n.n(r),
        o = n("77078"),
        d = n("782340"),
        u = n("708914");
    class l extends i.PureComponent {
        render() {
            var e;
            let {
                title: t,
                actionText: n,
                children: r,
                error: l,
                isLoading: f,
                maxLength: _,
                transitionState: c,
                helpMessage: g,
                retryPrompt: m,
                retrySuccessMessage: h
            } = this.props, {
                code: v,
                errorMessage: E,
                retrySuccess: p
            } = this.state, y = i.Children.count(r) > 0 ? (0, s.jsx)(o.Card, {
                type: o.Card.Types.WARNING,
                className: u.card,
                children: (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: r
                })
            }) : null, T = null != m ? (0, s.jsxs)(o.Text, {
                className: a(u.submitText, u.spacing),
                variant: "text-sm/normal",
                children: [(0, s.jsx)("br", {}), (0, s.jsx)(o.Clickable, {
                    className: a(u.spacing, u.link),
                    onClick: this.handleRetry,
                    children: (0, s.jsx)(o.Anchor, {
                        children: m
                    })
                })]
            }) : null, C = p ? (0, s.jsx)(o.Card, {
                type: o.Card.Types.SUCCESS,
                className: u.card,
                children: (0, s.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: h
                })
            }) : null;
            return (0, s.jsx)(o.ModalRoot, {
                transitionState: c,
                children: (0, s.jsxs)("form", {
                    onSubmit: this.handleSubmit,
                    children: [(0, s.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, s.jsx)(o.Heading, {
                            variant: "heading-lg/semibold",
                            children: t
                        })
                    }), (0, s.jsxs)(o.ModalContent, {
                        children: [null != g ? (0, s.jsx)(o.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            className: u.spacing,
                            children: g
                        }) : null, y, C, (0, s.jsxs)(o.FormItem, {
                            title: this.getLabelText(),
                            className: u.spacing,
                            children: [(0, s.jsx)(o.TextInput, {
                                inputRef: this.setRef,
                                onChange: this.handleCodeChange,
                                placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                maxLength: null != _ ? _ : 10,
                                value: v,
                                autoComplete: "one-time-code",
                                autoFocus: !0
                            }), this.errorPresent() ? (0, s.jsx)(o.Text, {
                                color: "text-danger",
                                variant: "text-xs/normal",
                                className: u.error,
                                children: null != l ? l : E
                            }) : null, T]
                        })]
                    }), (0, s.jsxs)(o.ModalFooter, {
                        children: [(0, s.jsx)(o.Button, {
                            type: "submit",
                            disabled: f || 0 === v.length,
                            children: null != n ? n : d.default.Messages.CONFIRM
                        }), (0, s.jsx)(o.Button, {
                            onClick: this.handleCancel,
                            disabled: f,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: d.default.Messages.CANCEL
                        })]
                    })]
                })
            })
        }
        constructor(...e) {
            super(...e), this.state = {
                code: "",
                errorMessage: "",
                retrySuccess: !1
            }, this.setRef = e => {
                this._input = e
            }, this.getLabelText = () => {
                var e;
                return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? d.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : d.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
            }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? d.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : d.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                var e;
                return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
            }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                let {
                    onRetry: e
                } = this.props;
                null == e || e().then(() => this.setState({
                    retrySuccess: !0
                }))
            }, this.handleSubmit = e => {
                e.preventDefault();
                let {
                    handleSubmit: t,
                    onError: n
                } = this.props;
                t(this.state.code).catch(e => {
                    null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                        errorMessage: e.body.message
                    }))
                })
            }, this.handleCancel = () => {
                let {
                    onClose: e,
                    handleEarlyClose: t
                } = this.props;
                e(), null == t || t()
            }, this.handleCodeChange = e => {
                this.setState({
                    code: e
                })
            }
        }
    }
    l.defaultProps = {
        btnClass: "",
        isLoading: !1,
        disallowBackupCodes: !1,
        error: null,
        forceNoPlaceholder: !1
    };
    var f = l
}