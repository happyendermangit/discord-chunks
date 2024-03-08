function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackViewedEvent: function() {
            return d
        },
        ViewNameTypes: function() {
            return i
        },
        trackNamedViewEvent: function() {
            return E
        },
        CtaEventTypes: function() {
            return r
        },
        trackCtaEvent: function() {
            return f
        },
        getUserIsTeen: function() {
            return c
        }
    });
    var a, l, i, r, s = n("697218"),
        _ = n("599110"),
        u = n("499799"),
        o = n("49111");

    function d(e, t) {
        let {
            channelId: n,
            warningId: a,
            senderId: l,
            warningType: i
        } = t;
        _.default.track(e, {
            channel_id: n,
            warning_id: null != a ? parseInt(a) : void 0,
            warning_type: i,
            other_user_id: l
        })
    }

    function E(e) {
        let {
            channelId: t,
            warningId: n,
            senderId: a,
            warningType: l,
            viewName: i,
            isNudgeWarning: r
        } = e;
        _.default.track(o.AnalyticEvents.SAFETY_WARNING_VIEWED, {
            channel_id: t,
            warning_id: null != n ? parseInt(n) : void 0,
            warning_type: l,
            other_user_id: a,
            view_name: i,
            is_nudge_warning: r
        })
    }

    function f(e) {
        let {
            channelId: t,
            warningId: n,
            senderId: a,
            warningType: l,
            cta: i,
            isNudgeWarning: r
        } = e;
        _.default.track(o.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
            channel_id: t,
            warning_id: null != n ? parseInt(n) : void 0,
            warning_type: l,
            other_user_id: a,
            cta: i,
            is_nudge_warning: r
        })
    }

    function c(e) {
        var t;
        let n = null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed,
            a = (0, u.isStaffTeenSafetyAssistAgeBypass)(e);
        return !1 === n || a
    }(a = i || (i = {})).SAFETY_WARNING_BANNER = "safety_warning_banner", a.SAFETY_TAKEOVER_MODAL = "safety_takeover_modal", a.SAFETY_TOOLS_NUDGE_TOOLTIP = "safety_tools_nudge_tooltip", a.SAFETY_TOOLS_BUTTON = "safety_tools_button", (l = r || (r = {})).OPEN_MORE_TIPS = "open_more_tips", l.USER_BANNER_DISMISS = "user_banner_dismiss", l.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", l.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm", l.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", l.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools", l.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", l.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", l.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss", l.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action", l.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips", l.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block", l.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock", l.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report", l.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr", l.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl", l.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click", l.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", l.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm", l.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", l.USER_SAFETY_TOOLS_UNBLOCK = "user_safety_tools_unblock", l.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report", l.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr", l.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl", l.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus", l.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips", l.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts", l.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss", l.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss", l.USER_MODAL_MUTE = "user_modal_mute", l.USER_MODAL_UNMUTE = "user_modal_unmute", l.FEEDBACK_UPVOTE = "feedback_upvote", l.FEEDBACK_DOWNVOTE = "feedback_downvote"
}