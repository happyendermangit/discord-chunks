"function(e,t,n){\"use strict\";n.r(t),n.d(t,{fetchMemberCounts:function(){return c},requestMembersForRole:function(){return m}});var l=n(\"693566\"),i=n.n(l),a=n(\"872717\"),s=n(\"913144\"),r=n(\"851387\"),o=n(\"36402\"),u=n(\"49111\");async function d(e){try{s.default.dispatch({type:\"GUILD_ROLE_MEMBER_COUNT_FETCH_START\",guildId:e});let t=await a.default.get({url:u.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)}),n=t.body;s.default.dispatch({type:\"GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS\",guildId:e,roleMemberCount:n})}catch(t){s.default.dispatch({type:\"GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE\",guildId:e})}}async function c(e){o.default.shouldFetch(e)&&await d(e)}let f=new i({maxAge:1e4});function m(e,t){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],l=\"\".concat(e,\"-\").concat(t);if(!n||null==f.get(l)){var i,s;return f.set(l,!0),i=e,s=t,a.default.get({url:u.Endpoints.GUILD_ROLE_MEMBER_IDS(i,s)}).then(e=>(r.default.requestMembersById(i,e.body,!1),e.body.length))}return Promise.resolve(null)}}"