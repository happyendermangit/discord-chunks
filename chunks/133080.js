function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getCountryCodeByAlpha2: function() {
            return o
        },
        getDefaultCountryCode: function() {
            return l
        },
        getI18NCountryName: function() {
            return d
        }
    });
    var i = n("512722"),
        r = n.n(i),
        s = n("217986"),
        a = n("689938");

    function o(e) {
        let t = s.default.find(t => t.alpha2 === e);
        if (null != t) return {
            name: t.name,
            code: t.phoneCountryCode,
            alpha2: t.alpha2
        }
    }

    function l() {
        let e = function(e) {
            let t = s.default.find(t => t.name === e);
            if (null != t) return {
                name: t.name,
                code: t.phoneCountryCode,
                alpha2: t.alpha2
            }
        }("United States");
        return r()(e, "Default country code cannot be missing."), e
    }
    let u = {
        AF: () => a.default.Messages.COUNTRY_NAME_AF,
        AX: () => a.default.Messages.COUNTRY_NAME_AX,
        AL: () => a.default.Messages.COUNTRY_NAME_AL,
        DZ: () => a.default.Messages.COUNTRY_NAME_DZ,
        AS: () => a.default.Messages.COUNTRY_NAME_AS,
        AD: () => a.default.Messages.COUNTRY_NAME_AD,
        AO: () => a.default.Messages.COUNTRY_NAME_AO,
        AI: () => a.default.Messages.COUNTRY_NAME_AI,
        AQ: () => a.default.Messages.COUNTRY_NAME_AQ,
        AG: () => a.default.Messages.COUNTRY_NAME_AG,
        AR: () => a.default.Messages.COUNTRY_NAME_AR,
        AM: () => a.default.Messages.COUNTRY_NAME_AM,
        AW: () => a.default.Messages.COUNTRY_NAME_AW,
        AC: () => a.default.Messages.COUNTRY_NAME_AC,
        AU: () => a.default.Messages.COUNTRY_NAME_AU,
        AT: () => a.default.Messages.COUNTRY_NAME_AT,
        AZ: () => a.default.Messages.COUNTRY_NAME_AZ,
        BS: () => a.default.Messages.COUNTRY_NAME_BS,
        BH: () => a.default.Messages.COUNTRY_NAME_BH,
        BD: () => a.default.Messages.COUNTRY_NAME_BD,
        BB: () => a.default.Messages.COUNTRY_NAME_BB,
        BY: () => a.default.Messages.COUNTRY_NAME_BY,
        BE: () => a.default.Messages.COUNTRY_NAME_BE,
        BZ: () => a.default.Messages.COUNTRY_NAME_BZ,
        BJ: () => a.default.Messages.COUNTRY_NAME_BJ,
        BM: () => a.default.Messages.COUNTRY_NAME_BM,
        BT: () => a.default.Messages.COUNTRY_NAME_BT,
        BO: () => a.default.Messages.COUNTRY_NAME_BO,
        BQ: () => a.default.Messages.COUNTRY_NAME_BQ,
        BA: () => a.default.Messages.COUNTRY_NAME_BA,
        BW: () => a.default.Messages.COUNTRY_NAME_BW,
        BV: () => a.default.Messages.COUNTRY_NAME_BV,
        BR: () => a.default.Messages.COUNTRY_NAME_BR,
        IO: () => a.default.Messages.COUNTRY_NAME_IO,
        BN: () => a.default.Messages.COUNTRY_NAME_BN,
        BG: () => a.default.Messages.COUNTRY_NAME_BG,
        BF: () => a.default.Messages.COUNTRY_NAME_BF,
        BI: () => a.default.Messages.COUNTRY_NAME_BI,
        KH: () => a.default.Messages.COUNTRY_NAME_KH,
        CM: () => a.default.Messages.COUNTRY_NAME_CM,
        CA: () => a.default.Messages.COUNTRY_NAME_CA,
        CV: () => a.default.Messages.COUNTRY_NAME_CV,
        KY: () => a.default.Messages.COUNTRY_NAME_KY,
        CF: () => a.default.Messages.COUNTRY_NAME_CF,
        TD: () => a.default.Messages.COUNTRY_NAME_TD,
        CL: () => a.default.Messages.COUNTRY_NAME_CL,
        CN: () => a.default.Messages.COUNTRY_NAME_CN,
        CX: () => a.default.Messages.COUNTRY_NAME_CX,
        CC: () => a.default.Messages.COUNTRY_NAME_CC,
        CO: () => a.default.Messages.COUNTRY_NAME_CO,
        KM: () => a.default.Messages.COUNTRY_NAME_KM,
        CG: () => a.default.Messages.COUNTRY_NAME_CG,
        CD: () => a.default.Messages.COUNTRY_NAME_CD,
        CK: () => a.default.Messages.COUNTRY_NAME_CK,
        CR: () => a.default.Messages.COUNTRY_NAME_CR,
        CI: () => a.default.Messages.COUNTRY_NAME_CI,
        HR: () => a.default.Messages.COUNTRY_NAME_HR,
        CU: () => a.default.Messages.COUNTRY_NAME_CU,
        CW: () => a.default.Messages.COUNTRY_NAME_CW,
        CY: () => a.default.Messages.COUNTRY_NAME_CY,
        CZ: () => a.default.Messages.COUNTRY_NAME_CZ,
        DK: () => a.default.Messages.COUNTRY_NAME_DK,
        DG: () => a.default.Messages.COUNTRY_NAME_DG,
        DJ: () => a.default.Messages.COUNTRY_NAME_DJ,
        DM: () => a.default.Messages.COUNTRY_NAME_DM,
        DO: () => a.default.Messages.COUNTRY_NAME_DO,
        TP: () => a.default.Messages.COUNTRY_NAME_TP,
        EC: () => a.default.Messages.COUNTRY_NAME_EC,
        EG: () => a.default.Messages.COUNTRY_NAME_EG,
        SV: () => a.default.Messages.COUNTRY_NAME_SV,
        GQ: () => a.default.Messages.COUNTRY_NAME_GQ,
        ER: () => a.default.Messages.COUNTRY_NAME_ER,
        EE: () => a.default.Messages.COUNTRY_NAME_EE,
        ET: () => a.default.Messages.COUNTRY_NAME_ET,
        FK: () => a.default.Messages.COUNTRY_NAME_FK,
        FO: () => a.default.Messages.COUNTRY_NAME_FO,
        FJ: () => a.default.Messages.COUNTRY_NAME_FJ,
        FI: () => a.default.Messages.COUNTRY_NAME_FI,
        FR: () => a.default.Messages.COUNTRY_NAME_FR,
        GF: () => a.default.Messages.COUNTRY_NAME_GF,
        PF: () => a.default.Messages.COUNTRY_NAME_PF,
        TF: () => a.default.Messages.COUNTRY_NAME_TF,
        GA: () => a.default.Messages.COUNTRY_NAME_GA,
        GM: () => a.default.Messages.COUNTRY_NAME_GM,
        GE: () => a.default.Messages.COUNTRY_NAME_GE,
        DE: () => a.default.Messages.COUNTRY_NAME_DE,
        GH: () => a.default.Messages.COUNTRY_NAME_GH,
        GI: () => a.default.Messages.COUNTRY_NAME_GI,
        GR: () => a.default.Messages.COUNTRY_NAME_GR,
        GL: () => a.default.Messages.COUNTRY_NAME_GL,
        GD: () => a.default.Messages.COUNTRY_NAME_GD,
        GP: () => a.default.Messages.COUNTRY_NAME_GP,
        GU: () => a.default.Messages.COUNTRY_NAME_GU,
        GT: () => a.default.Messages.COUNTRY_NAME_GT,
        GG: () => a.default.Messages.COUNTRY_NAME_GG,
        GN: () => a.default.Messages.COUNTRY_NAME_GN,
        GW: () => a.default.Messages.COUNTRY_NAME_GW,
        GY: () => a.default.Messages.COUNTRY_NAME_GY,
        HT: () => a.default.Messages.COUNTRY_NAME_HT,
        HM: () => a.default.Messages.COUNTRY_NAME_HM,
        VA: () => a.default.Messages.COUNTRY_NAME_VA,
        HN: () => a.default.Messages.COUNTRY_NAME_HN,
        HK: () => a.default.Messages.COUNTRY_NAME_HK,
        HU: () => a.default.Messages.COUNTRY_NAME_HU,
        IS: () => a.default.Messages.COUNTRY_NAME_IS,
        IN: () => a.default.Messages.COUNTRY_NAME_IN,
        ID: () => a.default.Messages.COUNTRY_NAME_ID,
        IR: () => a.default.Messages.COUNTRY_NAME_IR,
        IQ: () => a.default.Messages.COUNTRY_NAME_IQ,
        IE: () => a.default.Messages.COUNTRY_NAME_IE,
        IM: () => a.default.Messages.COUNTRY_NAME_IM,
        IL: () => a.default.Messages.COUNTRY_NAME_IL,
        IT: () => a.default.Messages.COUNTRY_NAME_IT,
        JM: () => a.default.Messages.COUNTRY_NAME_JM,
        JP: () => a.default.Messages.COUNTRY_NAME_JP,
        JE: () => a.default.Messages.COUNTRY_NAME_JE,
        JO: () => a.default.Messages.COUNTRY_NAME_JO,
        KZ: () => a.default.Messages.COUNTRY_NAME_KZ,
        KE: () => a.default.Messages.COUNTRY_NAME_KE,
        KI: () => a.default.Messages.COUNTRY_NAME_KI,
        XK: () => a.default.Messages.COUNTRY_NAME_XK,
        KP: () => a.default.Messages.COUNTRY_NAME_KP,
        KR: () => a.default.Messages.COUNTRY_NAME_KR,
        KW: () => a.default.Messages.COUNTRY_NAME_KW,
        KG: () => a.default.Messages.COUNTRY_NAME_KG,
        LA: () => a.default.Messages.COUNTRY_NAME_LA,
        LV: () => a.default.Messages.COUNTRY_NAME_LV,
        LB: () => a.default.Messages.COUNTRY_NAME_LB,
        LS: () => a.default.Messages.COUNTRY_NAME_LS,
        LR: () => a.default.Messages.COUNTRY_NAME_LR,
        LY: () => a.default.Messages.COUNTRY_NAME_LY,
        LI: () => a.default.Messages.COUNTRY_NAME_LI,
        LT: () => a.default.Messages.COUNTRY_NAME_LT,
        LU: () => a.default.Messages.COUNTRY_NAME_LU,
        MO: () => a.default.Messages.COUNTRY_NAME_MO,
        MK: () => a.default.Messages.COUNTRY_NAME_MK,
        MG: () => a.default.Messages.COUNTRY_NAME_MG,
        MW: () => a.default.Messages.COUNTRY_NAME_MW,
        MY: () => a.default.Messages.COUNTRY_NAME_MY,
        MV: () => a.default.Messages.COUNTRY_NAME_MV,
        ML: () => a.default.Messages.COUNTRY_NAME_ML,
        MT: () => a.default.Messages.COUNTRY_NAME_MT,
        MH: () => a.default.Messages.COUNTRY_NAME_MH,
        MQ: () => a.default.Messages.COUNTRY_NAME_MQ,
        MR: () => a.default.Messages.COUNTRY_NAME_MR,
        MU: () => a.default.Messages.COUNTRY_NAME_MU,
        YT: () => a.default.Messages.COUNTRY_NAME_YT,
        MX: () => a.default.Messages.COUNTRY_NAME_MX,
        FM: () => a.default.Messages.COUNTRY_NAME_FM,
        MI: () => a.default.Messages.COUNTRY_NAME_MI,
        MD: () => a.default.Messages.COUNTRY_NAME_MD,
        MC: () => a.default.Messages.COUNTRY_NAME_MC,
        MN: () => a.default.Messages.COUNTRY_NAME_MN,
        ME: () => a.default.Messages.COUNTRY_NAME_ME,
        MS: () => a.default.Messages.COUNTRY_NAME_MS,
        MA: () => a.default.Messages.COUNTRY_NAME_MA,
        MZ: () => a.default.Messages.COUNTRY_NAME_MZ,
        MM: () => a.default.Messages.COUNTRY_NAME_MM,
        NA: () => a.default.Messages.COUNTRY_NAME_NA,
        NR: () => a.default.Messages.COUNTRY_NAME_NR,
        NP: () => a.default.Messages.COUNTRY_NAME_NP,
        NL: () => a.default.Messages.COUNTRY_NAME_NL,
        AN: () => a.default.Messages.COUNTRY_NAME_AN,
        NC: () => a.default.Messages.COUNTRY_NAME_NC,
        NZ: () => a.default.Messages.COUNTRY_NAME_NZ,
        NI: () => a.default.Messages.COUNTRY_NAME_NI,
        NE: () => a.default.Messages.COUNTRY_NAME_NE,
        NG: () => a.default.Messages.COUNTRY_NAME_NG,
        NU: () => a.default.Messages.COUNTRY_NAME_NU,
        NF: () => a.default.Messages.COUNTRY_NAME_NF,
        MP: () => a.default.Messages.COUNTRY_NAME_MP,
        NO: () => a.default.Messages.COUNTRY_NAME_NO,
        OM: () => a.default.Messages.COUNTRY_NAME_OM,
        PK: () => a.default.Messages.COUNTRY_NAME_PK,
        PW: () => a.default.Messages.COUNTRY_NAME_PW,
        PS: () => a.default.Messages.COUNTRY_NAME_PS,
        PA: () => a.default.Messages.COUNTRY_NAME_PA,
        PG: () => a.default.Messages.COUNTRY_NAME_PG,
        PY: () => a.default.Messages.COUNTRY_NAME_PY,
        PE: () => a.default.Messages.COUNTRY_NAME_PE,
        PH: () => a.default.Messages.COUNTRY_NAME_PH,
        PN: () => a.default.Messages.COUNTRY_NAME_PN,
        PL: () => a.default.Messages.COUNTRY_NAME_PL,
        PT: () => a.default.Messages.COUNTRY_NAME_PT,
        PR: () => a.default.Messages.COUNTRY_NAME_PR,
        QA: () => a.default.Messages.COUNTRY_NAME_QA,
        RE: () => a.default.Messages.COUNTRY_NAME_RE,
        RO: () => a.default.Messages.COUNTRY_NAME_RO,
        RU: () => a.default.Messages.COUNTRY_NAME_RU,
        RW: () => a.default.Messages.COUNTRY_NAME_RW,
        BL: () => a.default.Messages.COUNTRY_NAME_BL,
        SH: () => a.default.Messages.COUNTRY_NAME_SH,
        KN: () => a.default.Messages.COUNTRY_NAME_KN,
        LC: () => a.default.Messages.COUNTRY_NAME_LC,
        MF: () => a.default.Messages.COUNTRY_NAME_MF,
        PM: () => a.default.Messages.COUNTRY_NAME_PM,
        VC: () => a.default.Messages.COUNTRY_NAME_VC,
        WS: () => a.default.Messages.COUNTRY_NAME_WS,
        SM: () => a.default.Messages.COUNTRY_NAME_SM,
        ST: () => a.default.Messages.COUNTRY_NAME_ST,
        SA: () => a.default.Messages.COUNTRY_NAME_SA,
        SN: () => a.default.Messages.COUNTRY_NAME_SN,
        RS: () => a.default.Messages.COUNTRY_NAME_RS,
        SC: () => a.default.Messages.COUNTRY_NAME_SC,
        SL: () => a.default.Messages.COUNTRY_NAME_SL,
        SG: () => a.default.Messages.COUNTRY_NAME_SG,
        SX: () => a.default.Messages.COUNTRY_NAME_SX,
        SK: () => a.default.Messages.COUNTRY_NAME_SK,
        SI: () => a.default.Messages.COUNTRY_NAME_SI,
        SB: () => a.default.Messages.COUNTRY_NAME_SB,
        SO: () => a.default.Messages.COUNTRY_NAME_SO,
        ZA: () => a.default.Messages.COUNTRY_NAME_ZA,
        GS: () => a.default.Messages.COUNTRY_NAME_GS,
        SS: () => a.default.Messages.COUNTRY_NAME_SS,
        ES: () => a.default.Messages.COUNTRY_NAME_ES,
        LK: () => a.default.Messages.COUNTRY_NAME_LK,
        SD: () => a.default.Messages.COUNTRY_NAME_SD,
        SR: () => a.default.Messages.COUNTRY_NAME_SR,
        SJ: () => a.default.Messages.COUNTRY_NAME_SJ,
        SZ: () => a.default.Messages.COUNTRY_NAME_SZ,
        SE: () => a.default.Messages.COUNTRY_NAME_SE,
        CH: () => a.default.Messages.COUNTRY_NAME_CH,
        SY: () => a.default.Messages.COUNTRY_NAME_SY,
        TW: () => a.default.Messages.COUNTRY_NAME_TW,
        TJ: () => a.default.Messages.COUNTRY_NAME_TJ,
        TZ: () => a.default.Messages.COUNTRY_NAME_TZ,
        TH: () => a.default.Messages.COUNTRY_NAME_TH,
        TL: () => a.default.Messages.COUNTRY_NAME_TL,
        TG: () => a.default.Messages.COUNTRY_NAME_TG,
        TK: () => a.default.Messages.COUNTRY_NAME_TK,
        TO: () => a.default.Messages.COUNTRY_NAME_TO,
        TT: () => a.default.Messages.COUNTRY_NAME_TT,
        TN: () => a.default.Messages.COUNTRY_NAME_TN,
        TR: () => a.default.Messages.COUNTRY_NAME_TR,
        TM: () => a.default.Messages.COUNTRY_NAME_TM,
        TC: () => a.default.Messages.COUNTRY_NAME_TC,
        TV: () => a.default.Messages.COUNTRY_NAME_TV,
        UG: () => a.default.Messages.COUNTRY_NAME_UG,
        UA: () => a.default.Messages.COUNTRY_NAME_UA,
        AE: () => a.default.Messages.COUNTRY_NAME_AE,
        GB: () => a.default.Messages.COUNTRY_NAME_GB,
        US: () => a.default.Messages.COUNTRY_NAME_US,
        UM: () => a.default.Messages.COUNTRY_NAME_UM,
        UY: () => a.default.Messages.COUNTRY_NAME_UY,
        UZ: () => a.default.Messages.COUNTRY_NAME_UZ,
        VU: () => a.default.Messages.COUNTRY_NAME_VU,
        VE: () => a.default.Messages.COUNTRY_NAME_VE,
        VN: () => a.default.Messages.COUNTRY_NAME_VN,
        VG: () => a.default.Messages.COUNTRY_NAME_VG,
        VI: () => a.default.Messages.COUNTRY_NAME_VI,
        WF: () => a.default.Messages.COUNTRY_NAME_WF,
        EH: () => a.default.Messages.COUNTRY_NAME_EH,
        YE: () => a.default.Messages.COUNTRY_NAME_YE,
        ZM: () => a.default.Messages.COUNTRY_NAME_ZM,
        ZW: () => a.default.Messages.COUNTRY_NAME_ZW
    };

    function d(e) {
        return u[e]()
    }
}