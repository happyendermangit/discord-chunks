function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var s = n("605250"),
        i = n("802493"),
        r = n("791109");
    let a = new s.default("KvCacheVersion");
    var o = new class e {
        async okAsync(e) {
            let t = await i.default.cache(e).get(r.VERSION_TO_SKIP_READING_THE_DATABASE_KEY);
            return null == t ? null : t === r.VERSION_TO_SKIP_READING_THE_DATABASE
        }
        canUseGuildVersions() {
            return this.hasSuccessfullyConnected ? Promise.resolve(!0) : this.doesDatabaseVersionMatchJsConstants()
        }
        async doesDatabaseVersionMatchJsConstants() {
            let e = i.default.forceResyncVersion();
            if (null == e) return !1;
            let t = await e.get(r.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY),
                n = null == t ? void 0 : t.version;
            return n === r.VERSION_TO_FORCE_RESYNCING_ALL_DATA || (a.info("KVStore version mismatch: ".concat(n, " vs ").concat(r.VERSION_TO_FORCE_RESYNCING_ALL_DATA)), !1)
        }
        handleClear() {
            this.hasSuccessfullyConnected = !1
        }
        handleConnectionOpen() {
            this.hasSuccessfullyConnected = !0
        }
        handleWrite(e) {
            this.hasSuccessfullyConnected = !0, i.default.cacheTransaction(e).put(r.HELLO_KEY, "\uD83D\uDC4B"), i.default.cacheTransaction(e).put(r.VERSION_TO_SKIP_READING_THE_DATABASE_KEY, r.VERSION_TO_SKIP_READING_THE_DATABASE), i.default.forceResyncVersionTransaction(e).put(r.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY, {
                version: r.VERSION_TO_FORCE_RESYNCING_ALL_DATA
            })
        }
        resetInMemoryState() {
            this.hasSuccessfullyConnected = !1
        }
        constructor() {
            this.hasSuccessfullyConnected = !1, this.actions = {
                BACKGROUND_SYNC: (e, t) => this.handleWrite(t),
                CONNECTION_OPEN: () => this.handleConnectionOpen(),
                WRITE_CACHES: (e, t) => this.handleWrite(t)
            }
        }
    }
}