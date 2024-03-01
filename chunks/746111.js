function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useCalendar: function() {
            return X
        },
        useRangeCalendar: function() {
            return J
        },
        useCalendarGrid: function() {
            return $
        },
        useCalendarCell: function() {
            return Q
        }
    }), n("222007");
    var r = n("775586"),
        a = n("541138"),
        i = n("4489"),
        o = n("353014"),
        s = n("779084"),
        c = n("166716"),
        l = n("727584"),
        u = n("299489"),
        d = n("489366"),
        p = n("414924"),
        f = n("861179"),
        m = n("95889"),
        h = n("839005"),
        v = n("484298"),
        g = n("434548"),
        y = n("972271"),
        b = n("559228"),
        x = n("942700"),
        S = n("661976"),
        w = n("468444"),
        D = n("195519"),
        C = n("643847"),
        k = n("281531"),
        P = n("222538"),
        E = n("601039"),
        T = n("147284"),
        M = n("578909"),
        R = n("821039"),
        I = n("875111"),
        O = n("37337"),
        A = n("220391"),
        L = n("247645"),
        N = n("490832"),
        F = n("495480"),
        j = n("362561"),
        K = n("240849"),
        _ = n("564341"),
        V = n("884691"),
        z = n("24899"),
        B = n("388032");

    function U(e) {
        return e && e.__esModule ? e.default : e
    }
    var H = {};
    H = {
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
    let G = new WeakMap;

    function W(e) {
        return (null == e ? void 0 : e.calendar.identifier) === "gregory" && "BC" === e.era ? "short" : void 0
    }

    function q(e, t, n, r) {
        let a = (0, _.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"),
            i = W(e) || W(t),
            o = (0, _.useDateFormatter)({
                month: "long",
                year: "numeric",
                era: i,
                calendar: e.calendar.identifier,
                timeZone: n
            }),
            s = (0, _.useDateFormatter)({
                month: "long",
                year: "numeric",
                day: "numeric",
                era: i,
                calendar: e.calendar.identifier,
                timeZone: n
            });
        return (0, V.useMemo)(() => {
            if ((0, z.isSameDay)(e, (0, z.startOfMonth)(e))) {
                if ((0, z.isSameDay)(t, (0, z.endOfMonth)(e))) return o.format(e.toDate(n));
                if ((0, z.isSameDay)(t, (0, z.endOfMonth)(t))) return r ? Z(o, a, e, t, n) : o.formatRange(e.toDate(n), t.toDate(n))
            }
            return r ? Z(s, a, e, t, n) : s.formatRange(e.toDate(n), t.toDate(n))
        }, [e, t, o, s, a, n, r])
    }

    function Z(e, t, n, r, a) {
        let i = e.formatRangeToParts(n.toDate(a), r.toDate(a)),
            o = -1;
        for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if ("shared" === t.source && "literal" === t.type) o = e;
            else if ("endRange" === t.source) break
        }
        let s = "",
            c = "";
        for (let e = 0; e < i.length; e++) e < o ? s += i[e].value : e > o && (c += i[e].value);
        return t.format("dateRange", {
            startDate: s,
            endDate: c
        })
    }

    function Y(e, t) {
        var n;
        let r, a, i, o, s, c = (0, _.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"),
            l = (0, K.filterDOMProps)(e),
            u = q(t.visibleRange.start, t.visibleRange.end, t.timeZone, !1),
            d = q(t.visibleRange.start, t.visibleRange.end, t.timeZone, !0);
        (0, K.useUpdateEffect)(() => {
            !t.isFocused && (0, j.announce)(d)
        }, [d]);
        let p = (n = t, i = (0, _.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"), "highlightedRange" in n ? {
            start: r,
            end: a
        } = n.highlightedRange || {} : r = a = n.value, o = (0, _.useDateFormatter)({
            weekday: "long",
            month: "long",
            year: "numeric",
            day: "numeric",
            era: W(r) || W(a),
            timeZone: n.timeZone
        }), s = "anchorDate" in n ? n.anchorDate : null, (0, V.useMemo)(() => {
            if (!s && r && a) {
                if ((0, z.isSameDay)(r, a)) {
                    let e = o.format(r.toDate(n.timeZone));
                    return i.format("selectedDateDescription", {
                        date: e
                    })
                } {
                    let e = Z(o, i, r, a, n.timeZone);
                    return i.format("selectedRangeDescription", {
                        dateRange: e
                    })
                }
            }
            return ""
        }, [r, a, s, n.timeZone, i, o]));
        (0, K.useUpdateEffect)(() => {
            p && (0, j.announce)(p, "polite", 4e3)
        }, [p]);
        let f = (0, K.useSlotId)([!!e.errorMessage, e.isInvalid, e.validationState]);
        G.set(t, {
            ariaLabel: e["aria-label"],
            ariaLabelledBy: e["aria-labelledby"],
            errorMessageId: f,
            selectedDateDescription: p
        });
        let [m, h] = (0, V.useState)(!1), v = e.isDisabled || t.isNextVisibleRangeInvalid();
        v && m && (h(!1), t.setFocused(!0));
        let [g, y] = (0, V.useState)(!1), b = e.isDisabled || t.isPreviousVisibleRangeInvalid();
        b && g && (y(!1), t.setFocused(!0));
        let x = (0, K.useLabels)({
            id: e.id,
            "aria-label": [e["aria-label"], d].filter(Boolean).join(", "),
            "aria-labelledby": e["aria-labelledby"]
        });
        return {
            calendarProps: (0, K.mergeProps)(l, x, {
                role: "application",
                "aria-describedby": e["aria-describedby"] || void 0
            }),
            nextButtonProps: {
                onPress: () => t.focusNextPage(),
                "aria-label": c.format("next"),
                isDisabled: v,
                onFocusChange: h
            },
            prevButtonProps: {
                onPress: () => t.focusPreviousPage(),
                "aria-label": c.format("previous"),
                isDisabled: b,
                onFocusChange: y
            },
            errorMessageProps: {
                id: f
            },
            title: u
        }
    }

    function X(e, t) {
        return Y(e, t)
    }

    function J(e, t, n) {
        let r = Y(e, t),
            a = (0, V.useRef)(!1),
            i = (0, V.useRef)("undefined" != typeof window ? window : null);
        (0, K.useEvent)(i, "pointerdown", e => {
            a.current = 0 === e.width && 0 === e.height
        });
        let o = e => {
            if (a.current) {
                a.current = !1;
                return
            }
            if (t.setDragging(!1), !t.anchorDate) return;
            let n = e.target,
                i = document.getElementById(r.calendarProps.id);
            i && i.contains(document.activeElement) && (!i.contains(n) || !n.closest('button, [role="button"]')) && t.selectFocusedDate()
        };
        return (0, K.useEvent)(i, "pointerup", o), (0, K.useEvent)(i, "pointercancel", o), r.calendarProps.onBlur = e => {
            (!e.relatedTarget || !n.current.contains(e.relatedTarget)) && t.anchorDate && t.selectFocusedDate()
        }, (0, K.useEvent)(n, "touchmove", e => {
            t.isDragging && e.preventDefault()
        }, {
            passive: !1,
            capture: !0
        }), r
    }

    function $(e, t) {
        let {
            startDate: n = t.visibleRange.start,
            endDate: r = t.visibleRange.end
        } = e, {
            direction: a
        } = (0, _.useLocale)(), i = q(n, r, t.timeZone, !0), {
            ariaLabel: o,
            ariaLabelledBy: s
        } = G.get(t), c = (0, K.useLabels)({
            "aria-label": [o, i].filter(Boolean).join(", "),
            "aria-labelledby": s
        }), l = (0, _.useDateFormatter)({
            weekday: e.weekdayStyle || "narrow",
            timeZone: t.timeZone
        }), {
            locale: u
        } = (0, _.useLocale)(), d = (0, V.useMemo)(() => {
            let e = (0, z.startOfWeek)((0, z.today)(t.timeZone), u);
            return [...Array(7).keys()].map(n => {
                let r = e.add({
                    days: n
                }).toDate(t.timeZone);
                return l.format(r)
            })
        }, [u, t.timeZone, l]);
        return {
            gridProps: (0, K.mergeProps)(c, {
                role: "grid",
                "aria-readonly": t.isReadOnly || null,
                "aria-disabled": t.isDisabled || null,
                "aria-multiselectable": "highlightedRange" in t || void 0,
                onKeyDown: e => {
                    switch (e.key) {
                        case "Enter":
                        case " ":
                            e.preventDefault(), t.selectFocusedDate();
                            break;
                        case "PageUp":
                            e.preventDefault(), e.stopPropagation(), t.focusPreviousSection(e.shiftKey);
                            break;
                        case "PageDown":
                            e.preventDefault(), e.stopPropagation(), t.focusNextSection(e.shiftKey);
                            break;
                        case "End":
                            e.preventDefault(), e.stopPropagation(), t.focusSectionEnd();
                            break;
                        case "Home":
                            e.preventDefault(), e.stopPropagation(), t.focusSectionStart();
                            break;
                        case "ArrowLeft":
                            e.preventDefault(), e.stopPropagation(), "rtl" === a ? t.focusNextDay() : t.focusPreviousDay();
                            break;
                        case "ArrowUp":
                            e.preventDefault(), e.stopPropagation(), t.focusPreviousRow();
                            break;
                        case "ArrowRight":
                            e.preventDefault(), e.stopPropagation(), "rtl" === a ? t.focusPreviousDay() : t.focusNextDay();
                            break;
                        case "ArrowDown":
                            e.preventDefault(), e.stopPropagation(), t.focusNextRow();
                            break;
                        case "Escape":
                            "setAnchorDate" in t && (e.preventDefault(), t.setAnchorDate(null))
                    }
                },
                onFocus: () => t.setFocused(!0),
                onBlur: () => t.setFocused(!1)
            }),
            headerProps: {
                "aria-hidden": !0
            },
            weekDays: d
        }
    }

    function Q(e, t, n) {
        let {
            date: r,
            isDisabled: a
        } = e, {
            errorMessageId: i,
            selectedDateDescription: o
        } = G.get(t), s = (0, _.useLocalizedStringFormatter)(U(H), "@react-aria/calendar"), c = (0, _.useDateFormatter)({
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            era: W(r),
            timeZone: t.timeZone
        }), l = t.isSelected(r), u = t.isCellFocused(r);
        a = a || t.isCellDisabled(r);
        let d = t.isCellUnavailable(r),
            p = !a && !d,
            f = t.isValueInvalid && ("highlightedRange" in t ? !t.anchorDate && t.highlightedRange && r.compare(t.highlightedRange.start) >= 0 && 0 >= r.compare(t.highlightedRange.end) : t.value && (0, z.isSameDay)(t.value, r));
        f && (l = !0), r = (0, K.useDeepMemo)(r, z.isEqualDay);
        let m = (0, V.useMemo)(() => r.toDate(t.timeZone), [r, t.timeZone]),
            h = (0, z.isToday)(r, t.timeZone),
            v = (0, V.useMemo)(() => {
                let e = "";
                return "highlightedRange" in t && t.value && !t.anchorDate && ((0, z.isSameDay)(r, t.value.start) || (0, z.isSameDay)(r, t.value.end)) && (e = o + ", "), e += c.format(m), h ? e = s.format(l ? "todayDateSelected" : "todayDate", {
                    date: e
                }) : l && (e = s.format("dateSelected", {
                    date: e
                })), t.minValue && (0, z.isSameDay)(r, t.minValue) ? e += ", " + s.format("minimumDate") : t.maxValue && (0, z.isSameDay)(r, t.maxValue) && (e += ", " + s.format("maximumDate")), e
            }, [c, m, s, l, h, r, t, o]),
            g = "";
        "anchorDate" in t && u && !t.isReadOnly && p && (g = t.anchorDate ? s.format("finishRangeSelectionPrompt") : s.format("startRangeSelectionPrompt"));
        let y = (0, K.useDescription)(g),
            b = (0, V.useRef)(!1),
            x = (0, V.useRef)(!1),
            S = (0, V.useRef)(null),
            {
                pressProps: w,
                isPressed: D
            } = (0, B.usePress)({
                shouldCancelOnPointerExit: "anchorDate" in t && !!t.anchorDate,
                preventFocusOnPress: !0,
                isDisabled: !p || t.isReadOnly,
                onPressStart(e) {
                    if (t.isReadOnly) {
                        t.setFocusedDate(r);
                        return
                    }
                    if ("highlightedRange" in t && !t.anchorDate && ("mouse" === e.pointerType || "touch" === e.pointerType)) {
                        if (t.highlightedRange && !f) {
                            if ((0, z.isSameDay)(r, t.highlightedRange.start)) {
                                t.setAnchorDate(t.highlightedRange.end), t.setFocusedDate(r), t.setDragging(!0), x.current = !0;
                                return
                            }
                            if ((0, z.isSameDay)(r, t.highlightedRange.end)) {
                                t.setAnchorDate(t.highlightedRange.start), t.setFocusedDate(r), t.setDragging(!0), x.current = !0;
                                return
                            }
                        }
                        let n = () => {
                            t.setDragging(!0), S.current = null, t.selectDate(r), t.setFocusedDate(r), b.current = !0
                        };
                        "touch" === e.pointerType ? S.current = setTimeout(n, 200) : n()
                    }
                },
                onPressEnd() {
                    x.current = !1, b.current = !1, clearTimeout(S.current), S.current = null
                },
                onPress() {
                    !("anchorDate" in t) && !t.isReadOnly && (t.selectDate(r), t.setFocusedDate(r))
                },
                onPressUp(e) {
                    if (!t.isReadOnly && ("anchorDate" in t && S.current && (t.selectDate(r), t.setFocusedDate(r)), "anchorDate" in t)) {
                        if (x.current) t.setAnchorDate(r);
                        else if (t.anchorDate && !b.current) t.selectDate(r), t.setFocusedDate(r);
                        else if ("keyboard" !== e.pointerType || t.anchorDate) "virtual" === e.pointerType && (t.selectDate(r), t.setFocusedDate(r));
                        else {
                            t.selectDate(r);
                            let e = r.add({
                                days: 1
                            });
                            t.isInvalid(e) && (e = r.subtract({
                                days: 1
                            })), !t.isInvalid(e) && t.setFocusedDate(e)
                        }
                    }
                }
            }),
            C = null;
        !a && (C = (0, z.isSameDay)(r, t.focusedDate) ? 0 : -1), (0, V.useEffect)(() => {
            u && n.current && ((0, K.focusWithoutScrolling)(n.current), "pointer" !== (0, B.getInteractionModality)() && document.activeElement === n.current && (0, K.scrollIntoViewport)(n.current, {
                containingElement: (0, K.getScrollParent)(n.current)
            }))
        }, [u, n]);
        let k = (0, _.useDateFormatter)({
                day: "numeric",
                timeZone: t.timeZone,
                calendar: r.calendar.identifier
            }),
            P = (0, V.useMemo)(() => k.formatToParts(m).find(e => "day" === e.type).value, [k, m]);
        return {
            cellProps: {
                role: "gridcell",
                "aria-disabled": !p || null,
                "aria-selected": l || null,
                "aria-invalid": f || null
            },
            buttonProps: (0, K.mergeProps)(w, {
                onFocus() {
                    !a && t.setFocusedDate(r)
                },
                tabIndex: C,
                role: "button",
                "aria-disabled": !p || null,
                "aria-label": v,
                "aria-invalid": f || null,
                "aria-describedby": [f ? i : null, y["aria-describedby"]].filter(Boolean).join(" ") || void 0,
                onPointerEnter(e) {
                    "highlightDate" in t && ("touch" !== e.pointerType || t.isDragging) && p && t.highlightDate(r)
                },
                onPointerDown(e) {
                    "releasePointerCapture" in e.target && e.target.releasePointerCapture(e.pointerId)
                },
                onContextMenu(e) {
                    e.preventDefault()
                }
            }),
            isPressed: D,
            isFocused: u,
            isSelected: l,
            isDisabled: a,
            isUnavailable: d,
            isOutsideVisibleRange: 0 > r.compare(t.visibleRange.start) || r.compare(t.visibleRange.end) > 0,
            isInvalid: f,
            formattedDate: P
        }
    }
}