function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return r
        }
    });
    var n = l("579033");

    function r(e) {
        var t;
        return {
            code: e.code,
            state: n.GuildTemplateStates.RESOLVED,
            name: e.name,
            description: null !== (t = e.description) && void 0 !== t ? t : "",
            creatorId: e.creator_id,
            creator: e.creator,
            createdAt: e.created_at,
            updatedAt: e.updated_at,
            sourceGuildId: e.source_guild_id,
            serializedSourceGuild: e.serialized_source_guild,
            usageCount: e.usage_count,
            isDirty: e.is_dirty
        }
    }
}