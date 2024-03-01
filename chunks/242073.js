function(e, t, a) {
    e.exports = function(e) {
        let t = e.regex;
        return {
            name: "GraphQL",
            aliases: ["gql"],
            case_insensitive: !0,
            disableAutodetect: !1,
            keywords: {
                keyword: ["query", "mutation", "subscription", "type", "input", "schema", "directive", "interface", "union", "scalar", "fragment", "enum", "on"],
                literal: ["true", "false", "null"]
            },
            contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
                scope: "punctuation",
                match: /[.]{3}/,
                relevance: 0
            }, {
                scope: "punctuation",
                begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
                relevance: 0
            }, {
                scope: "variable",
                begin: /\$/,
                end: /\W/,
                excludeEnd: !0,
                relevance: 0
            }, {
                scope: "meta",
                match: /@\w+/,
                excludeEnd: !0
            }, {
                scope: "symbol",
                begin: t.concat(/[_A-Za-z][_0-9A-Za-z]*/, t.lookahead(/\s*:/)),
                relevance: 0
            }],
            illegal: [/[;<']/, /BEGIN/]
        }
    }
}