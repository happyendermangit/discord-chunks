function(e, t, a) {
    e.exports = function(e) {
        return {
            name: "JBoss CLI",
            aliases: ["wildfly-cli"],
            keywords: {
                $pattern: "[a-z-]+",
                keyword: "alias batch cd clear command connect connection-factory connection-info data-source deploy deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias undeploy unset version xa-data-source",
                literal: "true false"
            },
            contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, {
                className: "params",
                begin: /--[\w\-=\/]+/
            }, {
                className: "function",
                begin: /:[\w\-.]+/,
                relevance: 0
            }, {
                className: "string",
                begin: /\B([\/.])[\w\-.\/=]+/
            }, {
                className: "params",
                begin: /\(/,
                end: /\)/,
                contains: [{
                    begin: /[\w-]+ *=/,
                    returnBegin: !0,
                    relevance: 0,
                    contains: [{
                        className: "attr",
                        begin: /[\w-]+/
                    }]
                }],
                relevance: 0
            }]
        }
    }
}