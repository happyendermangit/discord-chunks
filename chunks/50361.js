function(e, a, t) {
    "use strict";
    t.r(a), t.d(a, {
        migrate: function() {
            return d
        },
        failMigration: function() {
            return n
        },
        finishMigration: function() {
            return i
        }
    });
    var s = t("913144");

    function d() {
        s.default.wait(() => s.default.dispatch({
            type: "DOMAIN_MIGRATION_START"
        }))
    }

    function n() {
        s.default.dispatch({
            type: "DOMAIN_MIGRATION_FAILURE"
        })
    }

    function i() {
        window.location.reload()
    }
}