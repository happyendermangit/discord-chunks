function(e, t, n) {
    "use strict";
    async function l(e) {
        let t = new i,
            n = [];
        for (let l of Object.keys(e)) n.push(t.loadRemoteImage(l, e[l]));
        return await Promise.all(n), t
    }
    n.r(t), n.d(t, {
        loadAssetMap: function() {
            return l
        }
    }), n("424973"), n("222007");
    class i {
        async loadRemoteImage(e, t) {
            let n = new Image;
            n.src = t, n.crossOrigin = "anonymous", await n.decode(), this.assets[e] = n
        }
        get(e) {
            return this.assets[e]
        }
        has(e) {
            return null != this.assets[e]
        }
        constructor() {
            this.assets = {}
        }
    }
}