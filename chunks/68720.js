function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        getMyContentInventory: function() {
            return r
        }
    });
    var t = E("872717"),
        o = E("448993"),
        n = E("49111");
    let r = async () => {
        try {
            let e = await t.default.get({
                url: n.Endpoints.MY_CONTENT_INVENTORY
            });
            return e.body
        } catch (e) {
            throw new o.APIError(e)
        }
    }
}