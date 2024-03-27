function(e) {
    e.exports = function(e) {
        e.regex;
        let t = e.COMMENT(/\(;/, /;\)/);
        t.contains.push("self");
        let n = e.COMMENT(/;;/, /$/);
        return {
            name: "WebAssembly",
            keywords: {
                $pattern: /[\w.]+/,
                keyword: ["anyfunc", "block", "br", "br_if", "br_table", "call", "call_indirect", "data", "drop", "elem", "else", "end", "export", "func", "global.get", "global.set", "local.get", "local.set", "local.tee", "get_global", "get_local", "global", "if", "import", "local", "loop", "memory", "memory.grow", "memory.size", "module", "mut", "nop", "offset", "param", "result", "return", "select", "set_global", "set_local", "start", "table", "tee_local", "then", "type", "unreachable"]
            },
            contains: [n, t, {
                match: [/(?:offset|align)/, /\s*/, /=/],
                className: {
                    1: "keyword",
                    3: "operator"
                }
            }, {
                className: "variable",
                begin: /\$[\w_]+/
            }, {
                match: /(\((?!;)|\))+/,
                className: "punctuation",
                relevance: 0
            }, {
                begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
                className: {
                    1: "keyword",
                    3: "title.function"
                }
            }, e.QUOTE_STRING_MODE, {
                match: /(i32|i64|f32|f64)(?!\.)/,
                className: "type"
            }, {
                className: "keyword",
                match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
            }, {
                className: "number",
                relevance: 0,
                match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
            }]
        }
    }
}