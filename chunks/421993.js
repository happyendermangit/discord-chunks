function(e) {
    e.exports = function(e) {
        let t = {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE],
                variants: [e.inherit(e.APOS_STRING_MODE, {
                    illegal: null
                }), e.inherit(e.QUOTE_STRING_MODE, {
                    illegal: null
                })]
            },
            n = e.UNDERSCORE_TITLE_MODE,
            r = {
                variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
            },
            i = "namespace class interface use extends function return abstract final public protected private static deprecated throw try catch Exception echo empty isset instanceof unset let var new const self require if else elseif switch case default do while loop for continue break likely unlikely __LINE__ __FILE__ __DIR__ __FUNCTION__ __CLASS__ __TRAIT__ __METHOD__ __NAMESPACE__ array boolean float double integer object resource string char long unsigned bool int uint ulong uchar true false null undefined";
        return {
            name: "Zephir",
            aliases: ["zep"],
            keywords: i,
            contains: [e.C_LINE_COMMENT_MODE, e.COMMENT(/\/\*/, /\*\//, {
                contains: [{
                    className: "doctag",
                    begin: /@[A-Za-z]+/
                }]
            }), {
                className: "string",
                begin: /<<<['"]?\w+['"]?$/,
                end: /^\w+;/,
                contains: [e.BACKSLASH_ESCAPE]
            }, {
                begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                className: "function",
                beginKeywords: "function fn",
                end: /[;{]/,
                excludeEnd: !0,
                illegal: /\$|\[|%/,
                contains: [n, {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    keywords: i,
                    contains: ["self", e.C_BLOCK_COMMENT_MODE, t, r]
                }]
            }, {
                className: "class",
                beginKeywords: "class interface",
                end: /\{/,
                excludeEnd: !0,
                illegal: /[:($"]/,
                contains: [{
                    beginKeywords: "extends implements"
                }, n]
            }, {
                beginKeywords: "namespace",
                end: /;/,
                illegal: /[.']/,
                contains: [n]
            }, {
                beginKeywords: "use",
                end: /;/,
                contains: [n]
            }, {
                begin: /=>/
            }, t, r]
        }
    }
}