function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDatePicker: function() {
            return en
        },
        useDateSegment: function() {
            return ea
        },
        useDateField: function() {
            return ee
        },
        useTimeField: function() {
            return et
        },
        useDateRangePicker: function() {
            return ei
        }
    }), n("222007");
    var r = n("572825"),
        a = n("456479"),
        i = n("614857"),
        o = n("795649"),
        s = n("630658"),
        c = n("81765"),
        l = n("538821"),
        u = n("562166"),
        d = n("267212"),
        p = n("696951"),
        f = n("98168"),
        m = n("266477"),
        h = n("339798"),
        v = n("443161"),
        g = n("919807"),
        y = n("611111"),
        b = n("79489"),
        x = n("232932"),
        S = n("582210"),
        w = n("937881"),
        D = n("476139"),
        C = n("945184"),
        k = n("836692"),
        P = n("244917"),
        E = n("876405"),
        T = n("482983"),
        M = n("712769"),
        R = n("153264"),
        I = n("4081"),
        O = n("507827"),
        A = n("964759"),
        L = n("182468"),
        N = n("367710"),
        F = n("340606"),
        j = n("447259"),
        K = n("240849"),
        _ = n("444324"),
        V = n("884691"),
        z = n("113581"),
        B = n("388032"),
        U = n("564341"),
        H = n("759840"),
        G = n("24899"),
        W = n("546262"),
        q = n("277184");

    function Z(e) {
        return e && e.__esModule ? e.default : e
    }
    var Y = {};

    function X(e, t, n) {
        let {
            direction: r
        } = (0, U.useLocale)(), a = (0, V.useMemo)(() => (0, j.createFocusManager)(t), [t]), i = () => {
            var e;
            let n = null === (e = window.event) || void 0 === e ? void 0 : e.target,
                r = (0, j.getFocusableTreeWalker)(t.current, {
                    tabbable: !0
                });
            if (n && (r.currentNode = n, n = r.previousNode()), !n) {
                let e;
                do(e = r.lastChild()) && (n = e); while (e)
            }
            for (; null == n ? void 0 : n.hasAttribute("data-placeholder");) {
                let e = r.previousNode();
                if (e && e.hasAttribute("data-placeholder")) n = e;
                else break
            }
            n && n.focus()
        }, {
            pressProps: o
        } = (0, B.usePress)({
            preventFocusOnPress: !0,
            allowTextSelectionOnPress: !0,
            onPressStart(e) {
                "mouse" === e.pointerType && i()
            },
            onPress(e) {
                "mouse" !== e.pointerType && i()
            }
        });
        return (0, K.mergeProps)(o, {
            onKeyDown: t => {
                if (!!t.currentTarget.contains(t.target)) {
                    if (t.altKey && ("ArrowDown" === t.key || "ArrowUp" === t.key) && "setOpen" in e && (t.preventDefault(), t.stopPropagation(), e.setOpen(!0)), !n) switch (t.key) {
                        case "ArrowLeft":
                            t.preventDefault(), t.stopPropagation(), "rtl" === r ? a.focusNext() : a.focusPrevious();
                            break;
                        case "ArrowRight":
                            t.preventDefault(), t.stopPropagation(), "rtl" === r ? a.focusPrevious() : a.focusNext()
                    }
                }
            }
        })
    }
    Y = {
        "ar-AE": r.default,
        "bg-BG": a.default,
        "cs-CZ": i.default,
        "da-DK": o.default,
        "de-DE": s.default,
        "el-GR": c.default,
        "en-US": l.default,
        "es-ES": u.default,
        "et-EE": d.default,
        "fi-FI": p.default,
        "fr-FR": f.default,
        "he-IL": m.default,
        "hr-HR": h.default,
        "hu-HU": v.default,
        "it-IT": g.default,
        "ja-JP": y.default,
        "ko-KR": b.default,
        "lt-LT": x.default,
        "lv-LV": S.default,
        "nb-NO": w.default,
        "nl-NL": D.default,
        "pl-PL": C.default,
        "pt-BR": k.default,
        "pt-PT": P.default,
        "ro-RO": E.default,
        "ru-RU": T.default,
        "sk-SK": M.default,
        "sl-SI": R.default,
        "sr-SP": I.default,
        "sv-SE": O.default,
        "tr-TR": A.default,
        "uk-UA": L.default,
        "zh-CN": N.default,
        "zh-TW": F.default
    };
    let J = new WeakMap,
        $ = "__role_" + Date.now(),
        Q = "__focusManager_" + Date.now();

    function ee(e, t, n) {
        var r;
        let a;
        let {
            isInvalid: i,
            validationErrors: o,
            validationDetails: s
        } = t.displayValidation, {
            labelProps: c,
            fieldProps: l,
            descriptionProps: u,
            errorMessageProps: d
        } = (0, z.useField)({
            ...e,
            labelElementType: "span",
            isInvalid: i,
            errorMessage: e.errorMessage || o
        }), p = (0, V.useRef)(null), {
            focusWithinProps: f
        } = (0, B.useFocusWithin)({
            ...e,
            onFocusWithin(n) {
                var r;
                p.current = t.value, null === (r = e.onFocus) || void 0 === r || r.call(e, n)
            },
            onBlurWithin: n => {
                var r;
                t.confirmPlaceholder(), t.value !== p.current && t.commitValidation(), null === (r = e.onBlur) || void 0 === r || r.call(e, n)
            },
            onFocusWithinChange: e.onFocusChange
        }), m = (0, U.useLocalizedStringFormatter)(Z(Y), "@react-aria/datepicker"), h = "hour" === t.maxGranularity ? "selectedTimeDescription" : "selectedDateDescription", v = "hour" === t.maxGranularity ? "time" : "date", g = t.value ? m.format(h, {
            [v]: t.formatValue({
                month: "long"
            })
        }) : "", y = (0, K.useDescription)(g), b = "presentation" === e[$] ? l["aria-describedby"] : [y["aria-describedby"], l["aria-describedby"]].filter(Boolean).join(" ") || void 0, x = e[Q], S = (0, V.useMemo)(() => x || (0, j.createFocusManager)(n), [x, n]), w = X(t, n, "presentation" === e[$]);
        J.set(t, {
            ariaLabel: e["aria-label"],
            ariaLabelledBy: [c.id, e["aria-labelledby"]].filter(Boolean).join(" ") || void 0,
            ariaDescribedBy: b,
            focusManager: S
        });
        let D = (0, V.useRef)(e.autoFocus);
        a = "presentation" === e[$] ? {
            role: "presentation"
        } : (0, K.mergeProps)(l, {
            role: "group",
            "aria-disabled": e.isDisabled || void 0,
            "aria-describedby": b
        }), (0, V.useEffect)(() => {
            D.current && S.focusFirst(), D.current = !1
        }, [S]), (0, K.useFormReset)(e.inputRef, t.value, t.setValue), (0, H.useFormValidation)({
            ...e,
            focus() {
                S.focusFirst()
            }
        }, t, e.inputRef);
        let C = {
            type: "hidden",
            name: e.name,
            value: (null === (r = t.value) || void 0 === r ? void 0 : r.toString()) || ""
        };
        "native" === e.validationBehavior && (C.type = "text", C.hidden = !0, C.required = e.isRequired, C.onChange = () => {});
        let k = (0, K.filterDOMProps)(e);
        return {
            labelProps: {
                ...c,
                onClick: () => {
                    S.focusFirst()
                }
            },
            fieldProps: (0, K.mergeProps)(k, a, w, f, {
                onKeyDown(t) {
                    e.onKeyDown && e.onKeyDown(t)
                },
                onKeyUp(t) {
                    e.onKeyUp && e.onKeyUp(t)
                }
            }),
            inputProps: C,
            descriptionProps: u,
            errorMessageProps: d,
            isInvalid: i,
            validationErrors: o,
            validationDetails: s
        }
    }

    function et(e, t, n) {
        var r;
        let a = ee(e, t, n);
        return a.inputProps.value = (null === (r = t.timeValue) || void 0 === r ? void 0 : r.toString()) || "", a
    }

    function en(e, t, n) {
        let r = (0, K.useId)(),
            a = (0, K.useId)(),
            i = (0, K.useId)(),
            o = (0, U.useLocalizedStringFormatter)(Z(Y), "@react-aria/datepicker"),
            {
                isInvalid: s,
                validationErrors: c,
                validationDetails: l
            } = t.displayValidation,
            {
                labelProps: u,
                fieldProps: d,
                descriptionProps: p,
                errorMessageProps: f
            } = (0, z.useField)({
                ...e,
                labelElementType: "span",
                isInvalid: s,
                errorMessage: e.errorMessage || c
            }),
            m = X(t, n),
            h = d["aria-labelledby"] || d.id,
            {
                locale: v
            } = (0, U.useLocale)(),
            g = t.formatValue(v, {
                month: "long"
            }),
            y = g ? o.format("selectedDateDescription", {
                date: g
            }) : "",
            b = (0, K.useDescription)(y),
            x = [b["aria-describedby"], d["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            S = (0, K.filterDOMProps)(e),
            w = (0, V.useMemo)(() => (0, j.createFocusManager)(n), [n]),
            {
                focusWithinProps: D
            } = (0, B.useFocusWithin)({
                ...e,
                isDisabled: t.isOpen,
                onBlurWithin: e.onBlur,
                onFocusWithin: e.onFocus,
                onFocusWithinChange: e.onFocusChange
            });
        return {
            groupProps: (0, K.mergeProps)(S, m, d, b, D, {
                role: "group",
                "aria-disabled": e.isDisabled || null,
                "aria-labelledby": h,
                "aria-describedby": x,
                onKeyDown(n) {
                    !t.isOpen && e.onKeyDown && e.onKeyDown(n)
                },
                onKeyUp(n) {
                    !t.isOpen && e.onKeyUp && e.onKeyUp(n)
                }
            }),
            labelProps: {
                ...u,
                onClick: () => {
                    w.focusFirst()
                }
            },
            fieldProps: {
                ...d,
                id: i,
                [$]: "presentation",
                "aria-describedby": x,
                value: t.value,
                onChange: t.setValue,
                placeholderValue: e.placeholderValue,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                granularity: e.granularity,
                isDisabled: e.isDisabled,
                isReadOnly: e.isReadOnly,
                isRequired: e.isRequired,
                validationBehavior: e.validationBehavior,
                [_.privateValidationStateProp]: t,
                autoFocus: e.autoFocus,
                name: e.name
            },
            descriptionProps: p,
            errorMessageProps: f,
            buttonProps: {
                ...b,
                id: r,
                "aria-haspopup": "dialog",
                "aria-label": o.format("calendar"),
                "aria-labelledby": "".concat(r, " ").concat(h),
                "aria-describedby": x,
                "aria-expanded": t.isOpen,
                isDisabled: e.isDisabled || e.isReadOnly,
                onPress: () => t.setOpen(!0)
            },
            dialogProps: {
                id: a,
                "aria-labelledby": "".concat(r, " ").concat(h)
            },
            calendarProps: {
                autoFocus: !0,
                value: t.dateValue,
                onChange: t.setDateValue,
                minValue: e.minValue,
                maxValue: e.maxValue,
                isDisabled: e.isDisabled,
                isReadOnly: e.isReadOnly,
                isDateUnavailable: e.isDateUnavailable,
                defaultFocusedValue: t.dateValue ? void 0 : e.placeholderValue,
                isInvalid: t.isInvalid,
                errorMessage: "function" == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" ")
            },
            isInvalid: s,
            validationErrors: c,
            validationDetails: l
        }
    }
    class er {
        of(e) {
            return this.dictionary.getStringForLocale(e, this.locale)
        }
        constructor(e, t) {
            this.locale = e, this.dictionary = t
        }
    }

    function ea(e, t, n) {
        let r = (0, V.useRef)(""),
            {
                locale: a
            } = (0, U.useLocale)(),
            i = function() {
                let {
                    locale: e
                } = (0, U.useLocale)(), t = (0, U.useLocalizedStringDictionary)(Z(Y), "@react-aria/datepicker");
                return (0, V.useMemo)(() => {
                    try {
                        return new Intl.DisplayNames(e, {
                            type: "dateTimeField"
                        })
                    } catch (n) {
                        return new er(e, t)
                    }
                }, [e, t])
            }(),
            {
                ariaLabel: o,
                ariaLabelledBy: s,
                ariaDescribedBy: c,
                focusManager: l
            } = J.get(t),
            u = e.isPlaceholder ? "" : e.text,
            d = (0, V.useMemo)(() => t.dateFormatter.resolvedOptions(), [t.dateFormatter]),
            p = (0, U.useDateFormatter)({
                month: "long",
                timeZone: d.timeZone
            }),
            f = (0, U.useDateFormatter)({
                hour: "numeric",
                hour12: d.hour12,
                timeZone: d.timeZone
            });
        if ("month" !== e.type || e.isPlaceholder) "hour" === e.type && !e.isPlaceholder && (u = f.format(t.dateValue));
        else {
            let e = p.format(t.dateValue);
            u = e !== u ? "".concat(u, " – ").concat(e) : e
        }
        let {
            spinButtonProps: m
        } = (0, q.useSpinButton)({
            value: e.value,
            textValue: u,
            minValue: e.minValue,
            maxValue: e.maxValue,
            isDisabled: t.isDisabled,
            isReadOnly: t.isReadOnly || !e.isEditable,
            isRequired: t.isRequired,
            onIncrement: () => {
                r.current = "", t.increment(e.type)
            },
            onDecrement: () => {
                r.current = "", t.decrement(e.type)
            },
            onIncrementPage: () => {
                r.current = "", t.incrementPage(e.type)
            },
            onDecrementPage: () => {
                r.current = "", t.decrementPage(e.type)
            },
            onIncrementToMax: () => {
                r.current = "", t.setSegment(e.type, e.maxValue)
            },
            onDecrementToMin: () => {
                r.current = "", t.setSegment(e.type, e.minValue)
            }
        }), h = (0, V.useMemo)(() => new W.NumberParser(a, {
            maximumFractionDigits: 0
        }), [a]), v = () => {
            if (!h.isValidPartialNumber(e.text) || t.isReadOnly || e.isPlaceholder) "dayPeriod" === e.type && t.clearSegment(e.type);
            else {
                let n = e.text.slice(0, -1),
                    a = h.parse(n);
                0 === n.length || 0 === a ? t.clearSegment(e.type) : t.setSegment(e.type, a), r.current = n
            }
        }, {
            startsWith: g
        } = (0, U.useFilter)({
            sensitivity: "base"
        }), y = (0, U.useDateFormatter)({
            hour: "numeric",
            hour12: !0
        }), b = (0, V.useMemo)(() => {
            let e = new Date;
            return e.setHours(0), y.formatToParts(e).find(e => "dayPeriod" === e.type).value
        }, [y]), x = (0, V.useMemo)(() => {
            let e = new Date;
            return e.setHours(12), y.formatToParts(e).find(e => "dayPeriod" === e.type).value
        }, [y]), S = (0, U.useDateFormatter)({
            year: "numeric",
            era: "narrow",
            timeZone: "UTC"
        }), w = (0, V.useMemo)(() => {
            if ("era" !== e.type) return [];
            let n = (0, G.toCalendar)(new G.CalendarDate(1, 1, 1), t.calendar),
                r = t.calendar.getEras().map(e => {
                    let t = n.set({
                        year: 1,
                        month: 1,
                        day: 1,
                        era: e
                    }).toDate("UTC");
                    return {
                        era: e,
                        formatted: S.formatToParts(t).find(e => "era" === e.type).value
                    }
                }),
                a = function(e) {
                    e.sort();
                    let t = e[0],
                        n = e[e.length - 1];
                    for (let e = 0; e < t.length; e++)
                        if (t[e] !== n[e]) return e;
                    return 0
                }(r.map(e => e.formatted));
            if (a)
                for (let e of r) e.formatted = e.formatted.slice(a);
            return r
        }, [S, t.calendar, e.type]), D = n => {
            if (t.isDisabled || t.isReadOnly) return;
            let a = r.current + n;
            switch (e.type) {
                case "dayPeriod":
                    if (g(b, n)) t.setSegment("dayPeriod", 0);
                    else if (g(x, n)) t.setSegment("dayPeriod", 12);
                    else break;
                    l.focusNext();
                    break;
                case "era": {
                    let e = w.find(e => g(e.formatted, n));
                    e && (t.setSegment("era", e.era), l.focusNext());
                    break
                }
                case "day":
                case "hour":
                case "minute":
                case "second":
                case "month":
                case "year": {
                    if (!h.isValidPartialNumber(a)) return;
                    let i = h.parse(a),
                        o = i,
                        s = 0 === e.minValue;
                    if ("hour" === e.type && t.dateFormatter.resolvedOptions().hour12) {
                        switch (t.dateFormatter.resolvedOptions().hourCycle) {
                            case "h11":
                                i > 11 && (o = h.parse(n));
                                break;
                            case "h12":
                                s = !1, i > 12 && (o = h.parse(n))
                        }
                        e.value >= 12 && i > 1 && (i += 12)
                    } else i > e.maxValue && (o = h.parse(n));
                    if (isNaN(i)) return;
                    let c = 0 !== o || s;
                    c && t.setSegment(e.type, o), Number(i + "0") > e.maxValue || a.length >= String(e.maxValue).length ? (r.current = "", c && l.focusNext()) : r.current = a
                }
            }
        }, C = (0, V.useRef)("");
        (0, K.useEvent)(n, "beforeinput", r => {
            switch (r.preventDefault(), r.inputType) {
                case "deleteContentBackward":
                case "deleteContentForward":
                    h.isValidPartialNumber(e.text) && !t.isReadOnly && v();
                    break;
                case "insertCompositionText":
                    C.current = n.current.textContent, n.current.textContent = n.current.textContent;
                    break;
                default:
                    null != r.data && D(r.data)
            }
        }), (0, K.useEvent)(n, "input", e => {
            let {
                inputType: t,
                data: r
            } = e;
            if ("insertCompositionText" === t) n.current.textContent = C.current, (g(b, r) || g(x, r)) && D(r)
        }), (0, K.useLayoutEffect)(() => {
            let e = n.current;
            return () => {
                document.activeElement === e && !l.focusPrevious() && l.focusNext()
            }
        }, [n, l]);
        let k = (0, K.isIOS)() || "timeZoneName" === e.type ? {
            role: "textbox",
            "aria-valuemax": null,
            "aria-valuemin": null,
            "aria-valuetext": null,
            "aria-valuenow": null
        } : {};
        e !== (0, V.useMemo)(() => t.segments.find(e => e.isEditable), [t.segments]) && !t.isInvalid && (c = void 0);
        let P = (0, K.useId)(),
            E = !t.isDisabled && !t.isReadOnly && e.isEditable,
            T = "literal" === e.type ? "" : i.of(e.type),
            M = (0, K.useLabels)({
                "aria-label": "".concat(T).concat(o ? ", ".concat(o) : "").concat(s ? ", " : ""),
                "aria-labelledby": s
            });
        return "literal" === e.type ? {
            segmentProps: {
                "aria-hidden": !0
            }
        } : {
            segmentProps: (0, K.mergeProps)(m, M, {
                id: P,
                ...k,
                "aria-invalid": t.isInvalid ? "true" : void 0,
                "aria-describedby": c,
                "aria-readonly": t.isReadOnly || !e.isEditable ? "true" : void 0,
                "data-placeholder": e.isPlaceholder || void 0,
                contentEditable: E,
                suppressContentEditableWarning: E,
                spellCheck: E ? "false" : void 0,
                autoCapitalize: E ? "off" : void 0,
                autoCorrect: E ? "off" : void 0,
                [parseInt(V.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: E ? "next" : void 0,
                inputMode: t.isDisabled || "dayPeriod" === e.type || "era" === e.type || !E ? void 0 : "numeric",
                tabIndex: t.isDisabled ? void 0 : 0,
                onKeyDown: e => {
                    if ("a" === e.key && ((0, K.isMac)() ? e.metaKey : e.ctrlKey) && e.preventDefault(), !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) switch (e.key) {
                        case "Backspace":
                        case "Delete":
                            e.preventDefault(), e.stopPropagation(), v()
                    }
                },
                onFocus: () => {
                    r.current = "", (0, K.scrollIntoViewport)(n.current, {
                        containingElement: (0, K.getScrollParent)(n.current)
                    }), window.getSelection().collapse(n.current)
                },
                style: {
                    caretColor: "transparent"
                },
                onPointerDown(e) {
                    e.stopPropagation()
                },
                onMouseDown(e) {
                    e.stopPropagation()
                }
            })
        }
    }

    function ei(e, t, n) {
        var r, a;
        let i = (0, U.useLocalizedStringFormatter)(Z(Y), "@react-aria/datepicker"),
            {
                isInvalid: o,
                validationErrors: s,
                validationDetails: c
            } = t.displayValidation,
            {
                labelProps: l,
                fieldProps: u,
                descriptionProps: d,
                errorMessageProps: p
            } = (0, z.useField)({
                ...e,
                labelElementType: "span",
                isInvalid: o,
                errorMessage: e.errorMessage || s
            }),
            f = u["aria-labelledby"] || u.id,
            {
                locale: m
            } = (0, U.useLocale)(),
            h = t.formatValue(m, {
                month: "long"
            }),
            v = h ? i.format("selectedRangeDescription", {
                startDate: h.start,
                endDate: h.end
            }) : "",
            g = (0, K.useDescription)(v),
            y = {
                "aria-label": i.format("startDate"),
                "aria-labelledby": f
            },
            b = {
                "aria-label": i.format("endDate"),
                "aria-labelledby": f
            },
            x = (0, K.useId)(),
            S = (0, K.useId)(),
            w = X(t, n),
            D = [g["aria-describedby"], u["aria-describedby"]].filter(Boolean).join(" ") || void 0,
            C = (0, V.useMemo)(() => (0, j.createFocusManager)(n, {
                accept: e => e.id !== x
            }), [n, x]),
            k = {
                [Q]: C,
                [$]: "presentation",
                "aria-describedby": D,
                placeholderValue: e.placeholderValue,
                hideTimeZone: e.hideTimeZone,
                hourCycle: e.hourCycle,
                granularity: e.granularity,
                shouldForceLeadingZeros: e.shouldForceLeadingZeros,
                isDisabled: e.isDisabled,
                isReadOnly: e.isReadOnly,
                isRequired: e.isRequired,
                validationBehavior: e.validationBehavior
            },
            P = (0, K.filterDOMProps)(e),
            {
                focusWithinProps: E
            } = (0, B.useFocusWithin)({
                ...e,
                isDisabled: t.isOpen,
                onBlurWithin: e.onBlur,
                onFocusWithin: e.onFocus,
                onFocusWithinChange: e.onFocusChange
            }),
            T = (0, V.useRef)(_.DEFAULT_VALIDATION_RESULT),
            M = (0, V.useRef)(_.DEFAULT_VALIDATION_RESULT);
        return {
            groupProps: (0, K.mergeProps)(P, w, u, g, E, {
                role: "group",
                "aria-disabled": e.isDisabled || null,
                "aria-describedby": D,
                onKeyDown(n) {
                    !t.isOpen && e.onKeyDown && e.onKeyDown(n)
                },
                onKeyUp(n) {
                    !t.isOpen && e.onKeyUp && e.onKeyUp(n)
                }
            }),
            labelProps: {
                ...l,
                onClick: () => {
                    C.focusFirst()
                }
            },
            buttonProps: {
                ...g,
                id: x,
                "aria-haspopup": "dialog",
                "aria-label": i.format("calendar"),
                "aria-labelledby": "".concat(x, " ").concat(f),
                "aria-describedby": D,
                "aria-expanded": t.isOpen,
                isDisabled: e.isDisabled || e.isReadOnly,
                onPress: () => t.setOpen(!0)
            },
            dialogProps: {
                id: S,
                "aria-labelledby": "".concat(x, " ").concat(f)
            },
            startFieldProps: {
                ...y,
                ...k,
                value: null === (r = t.value) || void 0 === r ? void 0 : r.start,
                onChange: e => t.setDateTime("start", e),
                autoFocus: e.autoFocus,
                name: e.startName,
                [_.privateValidationStateProp]: {
                    realtimeValidation: t.realtimeValidation,
                    displayValidation: t.displayValidation,
                    updateValidation(e) {
                        T.current = e, t.updateValidation((0, _.mergeValidation)(e, M.current))
                    },
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation
                }
            },
            endFieldProps: {
                ...b,
                ...k,
                value: null === (a = t.value) || void 0 === a ? void 0 : a.end,
                onChange: e => t.setDateTime("end", e),
                name: e.endName,
                [_.privateValidationStateProp]: {
                    realtimeValidation: t.realtimeValidation,
                    displayValidation: t.displayValidation,
                    updateValidation(e) {
                        M.current = e, t.updateValidation((0, _.mergeValidation)(T.current, e))
                    },
                    resetValidation: t.resetValidation,
                    commitValidation: t.commitValidation
                }
            },
            descriptionProps: d,
            errorMessageProps: p,
            calendarProps: {
                autoFocus: !0,
                value: t.dateRange,
                onChange: t.setDateRange,
                minValue: e.minValue,
                maxValue: e.maxValue,
                isDisabled: e.isDisabled,
                isReadOnly: e.isReadOnly,
                isDateUnavailable: e.isDateUnavailable,
                allowsNonContiguousRanges: e.allowsNonContiguousRanges,
                defaultFocusedValue: t.dateRange ? void 0 : e.placeholderValue,
                isInvalid: t.isInvalid,
                errorMessage: "function" == typeof e.errorMessage ? e.errorMessage(t.displayValidation) : e.errorMessage || t.displayValidation.validationErrors.join(" ")
            },
            isInvalid: o,
            validationErrors: s,
            validationDetails: c
        }
    }
}