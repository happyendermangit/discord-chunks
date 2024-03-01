"function(e,t,r){\"use strict\";r.r(t),r.d(t,{MemberSafetySecondaryIndex:function(){return i},GuildMemberSafetyMembers:function(){return E}}),r(\"424973\"),r(\"222007\");var i,n,s=r(\"969176\"),u=r.n(s),a=r(\"407846\"),l=r(\"654017\"),d=r(\"697218\"),h=r(\"64905\"),o=r(\"490931\"),m=r(\"159132\"),_=r(\"165958\");let c=Date.now();function M(e){let t=!e.isCurrentGuildMemberByTimestamp,r=[t?\"NEW_GUILD_MEMBER\":\"CURRENT_GUILD_MEMBER\"];return e.isIncludedInSearchResults&&r.push(\"INCLUDED_IN_SEARCH_RESULTS\"),r}function S(e){return e.sort}function I(){return new a.default(M,S)}(n=i||(i={})).NEW_GUILD_MEMBER=\"NEW_GUILD_MEMBER\",n.CURRENT_GUILD_MEMBER=\"CURRENT_GUILD_MEMBER\",n.INCLUDED_IN_SEARCH_RESULTS=\"INCLUDED_IN_SEARCH_RESULTS\";class E{reset(){this._membersMap.clear(),this._membersMap=I(),this.resetNewMemberTimestamp()}resetNewMemberTimestamp(){this.newMemberTimestamp=Date.now()}enhanceNewMember(e,t){var r;let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=(0,h.getJoinedAtTimestamp)(e.joinedAt),{hasUnusualDmActivity:s,hasUnusualAccountActivity:u,sourceInviteCode:a,joinSourceType:l,inviterId:m,integrationType:c}=this._computeMemberSupplementals(e.userId,e.unusualDMActivityUntil),M=d.default.getUser(e.userId),S={hasUnusualDmActivity:s,hasUnusualAccountActivity:u,sourceInviteCode:a,joinSourceType:l,inviterId:m,integrationType:c,...e,isCurrentGuildMemberByTimestamp:n<=this.newMemberTimestamp,isIncludedInSearchResults:!1,user:M,sort:(0,_.getSortValueForMember)(e,null!==(r=t.selectedSort)&&void 0!==r?r:o.OrderBy.ORDER_BY_UNSPECIFIED),joinedAtTimestamp:n,...i};return S}_computeMemberSupplementals(e,t){var r;let i=(0,m.getMemberSupplementalByGuildId)(this.guildId),{sourceInviteCode:n,joinSourceType:s,inviterId:u,integrationType:a}=null!==(r=i[e])&&void 0!==r?r:{};return{sourceInviteCode:null!=n?n:null,joinSourceType:null!=s?s:null,inviterId:null!=u?u:null,integrationType:null!=a?a:null,hasUnusualDmActivity:function(e){if(null==e)return!1;let t=new Date(e).getTime();return t>=c-o.UNUSUAL_DM_COMPARISON_DELTA}(t),hasUnusualAccountActivity:(0,l.isSpammer)(e)}}createMember(e){return this._membersMap.set(e.userId,e)}updateMember(e,t){var r;if(null==t)return this._membersMap.set(e.userId,e);let i={...e},n={...t},s=!1,{sourceInviteCode:a,hasUnusualDmActivity:l,hasUnusualAccountActivity:d,joinSourceType:h,inviterId:o,integrationType:m}=this._computeMemberSupplementals(i.userId,null!==(r=n.unusualDMActivityUntil)&&void 0!==r?r:i.unusualDMActivityUntil);for(let e in i.sourceInviteCode!==a&&(n.sourceInviteCode=a),i.hasUnusualDmActivity!==l&&(n.hasUnusualDmActivity=l),i.hasUnusualAccountActivity!==d&&(n.hasUnusualAccountActivity=d),i.joinSourceType!==h&&(n.joinSourceType=h),i.inviterId!==o&&(n.inviterId=o),i.integrationType!==m&&(n.integrationType=m),n){let t=n[e],r=i[e];!u(t,r)&&(i[e]=t,s=!0)}return this._membersMap.set(i.userId,i)||s}removeMember(e){return this._membersMap.delete(e)}getMemberByUserId(e){return this._membersMap.get(e)}values(e){return this._membersMap.values(e,!0)}count(e){return this._membersMap.size(e)}get version(){return this._membersMap.version}constructor(e){this.newMemberTimestamp=Date.now(),this.guildId=e,this._membersMap=I()}}}"