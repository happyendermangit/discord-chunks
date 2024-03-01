function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var l = n("798609"),
        i = n("118851"),
        a = n("915639"),
        s = n("585722"),
        r = n("246598"),
        o = n("118200"),
        u = n("389153"),
        d = n("317041"),
        c = n("782340");
    let f = {
            [l.ApplicationCommandOptionType.SUB_COMMAND]: () => ({
                success: !1
            }),
            [l.ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({
                success: !1
            }),
            [l.ApplicationCommandOptionType.STRING]: (e, t, n) => {
                var i, a, s;
                let o = null === (i = function(e) {
                    switch (e.type) {
                        case "emoji":
                            return e.surrogate;
                        case "text":
                            return e.text
                    }
                }(e)) || void 0 === i ? void 0 : i.trim();
                if (t.autocomplete) {
                    let e = r.default.getAutocompleteLastChoices(n, t.name);
                    null != e && (o = String(null !== (s = null === (a = e.find(e => e.name === o)) || void 0 === a ? void 0 : a.value) && void 0 !== s ? s : o))
                }
                return null == t.choices || null != o && t.choices.map(e => e.displayName).includes(o) ? t.type === l.ApplicationCommandOptionType.STRING && (void 0 !== t.minLength || void 0 !== t.maxLength) ? void 0 !== o ? function(e, t, n) {
                    if (void 0 !== t.minLength && e.length < t.minLength || void 0 !== t.maxLength && e.length > t.maxLength) {
                        if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength) return {
                            success: !1,
                            error: n.exactRangeErrorMessage.format({
                                value: h(t.minLength)
                            })
                        };
                        if (void 0 !== t.maxLength && void 0 !== t.minLength) return {
                            success: !1,
                            error: n.rangeErrorMessage.format({
                                minimum: h(t.minLength),
                                maximum: h(t.maxLength)
                            })
                        };
                        else if (void 0 !== t.minLength) return {
                            success: !1,
                            error: n.minErrorMessage.format({
                                minimum: h(t.minLength)
                            })
                        };
                        else if (void 0 !== t.maxLength) return {
                            success: !1,
                            error: n.maxErrorMessage.format({
                                maximum: h(t.maxLength)
                            })
                        }
                    }
                    return {
                        success: !0
                    }
                }(o, t, {
                    exactRangeErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_EXACT_RANGE_ERROR,
                    rangeErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_RANGE_ERROR,
                    minErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_MINIMUM_ERROR,
                    maxErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_MAXIMUM_ERROR
                }) : {
                    success: !0
                } : {
                    success: !0
                } : {
                    success: !1
                }
            },
            [l.ApplicationCommandOptionType.BOOLEAN]: e => {
                if ("text" !== e.type) return {
                    success: !1
                };
                let t = e.text.trim();
                return {
                    success: d.BOOLEAN_CHOICES.map(e => e.displayName.toLowerCase()).includes(t.toLowerCase())
                }
            },
            [l.ApplicationCommandOptionType.INTEGER]: (e, t, n) => {
                if ("text" !== e.type || t.type !== l.ApplicationCommandOptionType.INTEGER) return {
                    success: !1
                };
                let i = e.text.trim();
                if (0 === i.length) return {
                    success: !1
                };
                if (null != t.choices) return t.choices.map(e => e.displayName).includes(i) ? {
                    success: !0
                } : {
                    success: !1
                };
                let s = r.default.getAutocompleteLastChoices(n, t.name);
                if (null != s && s.map(e => e.displayName).includes(i)) return {
                    success: !0
                };
                let u = Number(o.normalizeNumericString(a.default.locale, i));
                return !isNaN(u) && Number.isInteger(u) && Number.isSafeInteger(u) ? p(u, t, c.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR) : {
                    success: !1
                }
            },
            [l.ApplicationCommandOptionType.NUMBER]: (e, t, n) => {
                if ("text" !== e.type || t.type !== l.ApplicationCommandOptionType.NUMBER) return {
                    success: !1
                };
                let i = e.text.trim();
                if (0 === i.length) return {
                    success: !1
                };
                if (null != t.choices) return t.choices.map(e => e.displayName).includes(i) ? {
                    success: !0
                } : {
                    success: !1
                };
                let s = r.default.getAutocompleteLastChoices(n, t.name);
                if (null != s && s.map(e => e.displayName).includes(i)) return {
                    success: !0
                };
                let u = Number(o.normalizeNumericString(a.default.locale, i));
                return isNaN(u) || u > Number.MAX_SAFE_INTEGER || u < Number.MIN_SAFE_INTEGER ? {
                    success: !1
                } : p(u, t, c.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR)
            },
            [l.ApplicationCommandOptionType.USER]: (e, t, n, l) => {
                if ("text" !== e.type) return {
                    success: "userMention" === e.type
                };
                {
                    if ((0, u.isSnowflake)(e.text)) return {
                        success: !0
                    };
                    let t = (0, i.resolveApplicationCommandOption)(e.text, l, n, {
                        allowRoles: !1
                    });
                    return {
                        success: (null == t ? void 0 : t.type) === "userMention"
                    }
                }
            },
            [l.ApplicationCommandOptionType.CHANNEL]: (e, t, n, l) => {
                if ("text" !== e.type) return {
                    success: "channelMention" === e.type
                };
                {
                    if ((0, u.isSnowflake)(e.text)) return {
                        success: !0
                    };
                    let t = (0, i.resolveApplicationCommandOption)(e.text, l, n);
                    return {
                        success: (null == t ? void 0 : t.type) === "channelMention"
                    }
                }
            },
            [l.ApplicationCommandOptionType.ROLE]: (e, t, n, l) => {
                if ("text" !== e.type) return {
                    success: m(e)
                };
                {
                    if ((0, u.isSnowflake)(e.text)) return {
                        success: !0
                    };
                    let t = (0, i.resolveApplicationCommandOption)(e.text, l, n, {
                        allowUsers: !1
                    });
                    return {
                        success: (null == t ? void 0 : t.type) === "roleMention"
                    }
                }
            },
            [l.ApplicationCommandOptionType.MENTIONABLE]: (e, t, n, l) => {
                if ("text" !== e.type) return {
                    success: "userMention" === e.type || m(e)
                };
                {
                    if ((0, u.isSnowflake)(e.text)) return {
                        success: !0
                    };
                    let t = (0, i.resolveApplicationCommandOption)(e.text, l, n);
                    return {
                        success: null != t && ("userMention" === t.type || m(t))
                    }
                }
            },
            [l.ApplicationCommandOptionType.ATTACHMENT]: (e, t, n, l, i) => {
                if ("text" !== e.type) return {
                    success: !1
                };
                let a = s.default.getUpload(n, t.name, (0, u.getCommandAttachmentDraftType)(i));
                return {
                    success: null != a && a.filename === e.text
                }
            }
        },
        m = e => "roleMention" === e.type || "textMention" === e.type && "@everyone" === e.text;

    function p(e, t, n, l, i) {
        if (null != t.minValue && e < t.minValue || null != t.maxValue && e > t.maxValue) {
            if (null != t.maxValue && null != t.minValue) return {
                success: !1,
                error: n.format({
                    minimum: h(t.minValue),
                    maximum: h(t.maxValue)
                })
            };
            if (null != t.minValue) return {
                success: !1,
                error: l.format({
                    minimum: h(t.minValue)
                })
            };
            else if (null != t.maxValue) return {
                success: !1,
                error: i.format({
                    maximum: h(t.maxValue)
                })
            }
        }
        return {
            success: !0
        }
    }

    function h(e) {
        return e.toLocaleString(c.default.getLocale(), {
            useGrouping: !1
        })
    }
    var E = f
}