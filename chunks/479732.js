function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return o
        }
    }), E("222007");
    var t = E("802493"),
        o = new class e {
            async getAll() {
                let e = t.default.guildsRequiringDeletedIdsSync();
                if (null == e) return new Set;
                let _ = await e.getMany();
                return new Set(_.map(e => e.id))
            }
            handleConnectionOpen(e, _) {
                let {
                    guilds: E
                } = e, o = E.filter(e => e.unableToSyncDeletes).map(e => ({
                    id: e.id
                }));
                o.length > 0 && t.default.guildsRequiringDeletedIdsSyncTransaction(_).putAll(o)
            }
            handleBackgroundSync(e, _) {
                let {
                    guilds: E
                } = e, o = E.filter(e => "partial" === e.data_mode && e.unableToSyncDeletes).map(e => ({
                    id: e.id
                }));
                o.length > 0 && t.default.guildsRequiringDeletedIdsSyncTransaction(_).putAll(o)
            }
            handleGuildCreate(e, _) {
                let {
                    guild: E
                } = e;
                E.unableToSyncDeletes && t.default.guildsRequiringDeletedIdsSyncTransaction(_).put({
                    id: E.id
                })
            }
            handleDeletedEntityIds(e, _) {
                t.default.guildsRequiringDeletedIdsSyncTransaction(_).delete(e.guild_id)
            }
            resetInMemoryState() {}
            constructor() {
                this.actions = {
                    BACKGROUND_SYNC: (e, _) => this.handleBackgroundSync(e, _),
                    CONNECTION_OPEN: (e, _) => this.handleConnectionOpen(e, _),
                    GUILD_CREATE: (e, _) => this.handleGuildCreate(e, _),
                    DELETED_ENTITY_IDS: (e, _) => this.handleDeletedEntityIds(e, _)
                }
            }
        }
}