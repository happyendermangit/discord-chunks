function(e) {
    e.exports = function(e) {
        let t = {
                className: "string",
                begin: '"',
                end: '"',
                contains: [e.BACKSLASH_ESCAPE]
            },
            n = {
                className: "string",
                begin: "'",
                end: "'",
                contains: [e.BACKSLASH_ESCAPE],
                relevance: 0
            },
            r = {
                begin: e.IDENT_RE + "'",
                relevance: 0
            };
        return {
            name: "Pony",
            keywords: {
                keyword: "actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor",
                meta: "iso val tag trn box ref",
                literal: "this false true"
            },
            contains: [{
                className: "type",
                begin: "\\b_?[A-Z][\\w]*",
                relevance: 0
            }, {
                className: "string",
                begin: '"""',
                end: '"""',
                relevance: 10
            }, t, n, r, {
                className: "number",
                begin: "(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
                relevance: 0
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
        }
    }
}