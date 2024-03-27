function(e) {
    e.exports = function(e) {
        let t = e.inherit(e.C_NUMBER_MODE, {
            begin: "([-+]?((\\.\\d+)|(\\d+)(\\.\\d*)?))|" + e.C_NUMBER_RE
        });
        return {
            name: "G-code (ISO 6983)",
            aliases: ["nc"],
            case_insensitive: !0,
            keywords: {
                $pattern: "[A-Z_][A-Z0-9_.]*",
                keyword: "IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT EQ LT GT NE GE LE OR XOR"
            },
            contains: [{
                className: "meta",
                begin: "%"
            }, {
                className: "meta",
                begin: "([O])([0-9]+)"
            }].concat([e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.COMMENT(/\(/, /\)/), t, e.inherit(e.APOS_STRING_MODE, {
                illegal: null
            }), e.inherit(e.QUOTE_STRING_MODE, {
                illegal: null
            }), {
                className: "name",
                begin: "([G])([0-9]+\\.?[0-9]?)"
            }, {
                className: "name",
                begin: "([M])([0-9]+\\.?[0-9]?)"
            }, {
                className: "attr",
                begin: "(VC|VS|#)",
                end: "(\\d+)"
            }, {
                className: "attr",
                begin: "(VZOFX|VZOFY|VZOFZ)"
            }, {
                className: "built_in",
                begin: "(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)",
                contains: [t],
                end: "\\]"
            }, {
                className: "symbol",
                variants: [{
                    begin: "N",
                    end: "\\d+",
                    illegal: "\\W"
                }]
            }])
        }
    }
}