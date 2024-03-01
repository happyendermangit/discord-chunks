function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007");
    var i, r = n("605250"),
        s = n("802493");
    let a = new r.default("ChannelReader");
    i = class {
        static getSync(e, t) {
            let n = performance.now(),
                i = s.default.channels(e).getManySyncUnsafe(t),
                r = performance.now() - n;
            return a.log("synchronously loaded in ".concat(r, "ms (guild: ").concat(t, ", channels: ").concat(i.length, ")")), [i, r]
        }
        static async getAsync(e, t) {
            let n = performance.now(),
                i = await s.default.channels(e).getMany(t),
                r = performance.now() - n;
            return a.verbose("loaded in ".concat(r, "ms (guild: ").concat(t, ", channels: ").concat(i.length, ")")), i
        }
        static async getGuildIds() {
            try {
                var e;
                let t = s.default.channels();
                if (null == t) return new Set;
                let n = null !== (e = await t.getGuildIds()) && void 0 !== e ? e : [],
                    i = n.filter(e => null !== e && "string" == typeof e);
                return new Set(i)
            } catch (e) {
                return a.warn("couldn't get guild ids", e), new Set
            }
        }
    }
}