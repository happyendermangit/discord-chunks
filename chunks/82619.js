function(e, t, n) {
    "use strict";
    e.exports = {
        name: "elliptic",
        version: "6.5.4",
        description: "EC cryptography",
        main: "lib/elliptic.js",
        files: ["lib"],
        scripts: {
            lint: "eslint lib test",
            "lint:fix": "npm run lint -- --fix",
            unit: "istanbul test _mocha --reporter=spec test/index.js",
            test: "npm run lint && npm run unit",
            version: "grunt dist && git add dist/"
        },
        repository: {
            type: "git",
            url: "git@github.com:indutny/elliptic"
        },
        keywords: ["EC", "Elliptic", "curve", "Cryptography"],
        author: "Fedor Indutny <fedor@indutny.com>",
        license: "MIT",
        bugs: {
            url: "https://github.com/indutny/elliptic/issues"
        },
        homepage: "https://github.com/indutny/elliptic",
        devDependencies: {
            brfs: "^2.0.2",
            coveralls: "^3.1.0",
            eslint: "^7.6.0",
            grunt: "^1.2.1",
            "grunt-browserify": "^5.3.0",
            "grunt-cli": "^1.3.2",
            "grunt-contrib-connect": "^3.0.0",
            "grunt-contrib-copy": "^1.0.0",
            "grunt-contrib-uglify": "^5.0.0",
            "grunt-mocha-istanbul": "^5.0.2",
            "grunt-saucelabs": "^9.0.1",
            istanbul: "^0.4.5",
            mocha: "^8.0.1"
        },
        dependencies: {
            "bn.js": "^4.11.9",
            brorand: "^1.1.0",
            "hash.js": "^1.0.0",
            "hmac-drbg": "^1.0.1",
            inherits: "^2.0.4",
            "minimalistic-assert": "^1.0.1",
            "minimalistic-crypto-utils": "^1.0.1"
        }
    }
}