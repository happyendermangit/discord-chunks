function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        nativeTypesConfig: function() {
            return s
        }
    });
    var r, a = n("726764"),
        i = n("337675");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = (o(r = {}, a.FILE, {
        exposeProperties: {
            files: function(e) {
                return Array.prototype.slice.call(e.files)
            },
            items: function(e) {
                return e.items
            }
        },
        matchesTypes: ["Files"]
    }), o(r, a.HTML, {
        exposeProperties: {
            html: function(e, t) {
                return (0, i.getDataFromDataTransfer)(e, t, "")
            }
        },
        matchesTypes: ["Html", "text/html"]
    }), o(r, a.URL, {
        exposeProperties: {
            urls: function(e, t) {
                return (0, i.getDataFromDataTransfer)(e, t, "").split("\n")
            }
        },
        matchesTypes: ["Url", "text/uri-list"]
    }), o(r, a.TEXT, {
        exposeProperties: {
            text: function(e, t) {
                return (0, i.getDataFromDataTransfer)(e, t, "")
            }
        },
        matchesTypes: ["Text", "text/plain"]
    }), r)
}