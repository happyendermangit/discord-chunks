"function(e,t,n){\"use strict\";let i,r,s,a,o,l,u;n.r(t),n.d(t,{findFirstVoiceChannelId:function(){return k},default:function(){return H}}),n(\"222007\"),n(\"808653\");var c=n(\"917351\"),d=n.n(c),f=n(\"446674\"),E=n(\"95410\"),p=n(\"913144\"),h=n(\"21121\"),_=n(\"934306\"),S=n(\"393414\"),m=n(\"233069\"),T=n(\"449008\"),g=n(\"271938\"),I=n(\"42203\"),C=n(\"923959\"),v=n(\"305961\"),A=n(\"42887\"),R=n(\"162771\"),N=n(\"49111\"),O=n(\"724210\");let D=\"SelectedChannelStore\",y={},P={},L={},b=new Set;function M(e){return String(e)}function U(){!__OVERLAY__&&E.default.set(D,{selectedChannelId:s,selectedVoiceChannelId:o,lastChannelFollowingDestination:a,lastConnectedTime:l,selectedChannelIds:y,mostRecentSelectedTextChannelIds:L,knownThreadIds:d(y).values().concat(d.values(L)).filter(T.isNotNullish).uniq().filter(e=>{let t=I.default.getBasicChannel(e);return b.has(e)||null!=t&&m.THREAD_CHANNEL_TYPES.has(t.type)}).value()})}function G(e){if(null!=e){let t=C.default.getDefaultChannel(e);if(null!=t)return t.id}}function w(e,t){if(null==e||null==t||L[e]===t)return!1;let n=I.default.getChannel(t),i=null!=n&&(0,m.isGuildTextChannelType)(n.type),r=(null==n?void 0:n.getGuildId())===e;return!!i&&!!r&&(L[e]=t,!0)}function k(e){let t=I.default.getMutableBasicGuildChannelsForGuild(e),n=d.find(t,e=>e.type===N.ChannelTypes.GUILD_VOICE);return null==n?void 0:n.id}function x(){let e=!1,t=v.default.getGuilds();return d.each(y,(t,n)=>{(null==t||!I.default.hasChannel(t)&&t!==s&&!b.has(t)&&!(0,O.isGuildHomeChannel)(t))&&(delete y[n],delete P[n],e=!0)}),d.each(L,(t,n)=>{(null==t||!I.default.hasChannel(t)&&!b.has(t))&&(delete L[n],e=!0)}),d.each(t,e=>{let t=y[e.id];null==L[e.id]&&w(e.id,t)}),null!=l&&Date.now()-l>=3e5&&(o=null,e=!0),e}function F(e,t){if(b.delete(e),null==t){let n=R.default.getGuildId();y[M(n)]===e&&(t=n)}let n=null!=v.default.getGuild(t)?t:null,i=!1;o===e&&(o=null,i=!0),!(0,h.isInMainTabsExperiment)()&&(y[M(n)]===e&&(y[M(n)]=G(M(n)),R.default.getGuildId()===n&&(0,S.replaceWith)(N.Routes.CHANNEL(t,y[M(n)])),i=!0),null!=n&&L[n]===e&&(delete L[n],i=!0)),i&&U()}function V(e){let{channel:{id:t,guild_id:n}}=e;F(t,n)}class B extends f.default.Store{initialize(){if(!__OVERLAY__){var e,t;let n=null!==(e=E.default.get(D))&&void 0!==e?e:{selectedChannelId:s,selectedVoiceChannelId:o,lastChannelFollowingDestination:a,lastConnectedTime:l,selectedChannelIds:y,mostRecentSelectedTextChannelIds:L};null!=n.knownThreadIds&&(b=new Set(n.knownThreadIds)),o=n.selectedVoiceChannelId,a=n.lastChannelFollowingDestination,l=n.lastConnectedTime,L=null!==(t=n.mostRecentSelectedTextChannelIds)&&void 0!==t?t:{},null!=n.selectedChannelIds&&(y={...n.selectedChannelIds,null:null})}this.mustEmitChanges(e=>\"CONNECTION_OPEN\"!==e.type&&\"VOICE_STATE_UPDATES\"!==e.type),this.waitFor(v.default,I.default,R.default,C.default,A.default)}getChannelId(e){var t,n;let i=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=M(e===N.ME?null:null!==(t=null!=e?e:R.default.getGuildId())&&void 0!==t?t:null);return i?null!==(n=y[r])&&void 0!==n?n:G(r):y[r]}getVoiceChannelId(){return A.default.isSupported()?o:null}getMostRecentSelectedTextChannelId(e){var t;return null==e?null:null!==(t=L[e])&&void 0!==t?t:null}getCurrentlySelectedChannelId(e){return null!=e?y[e]:s}getLastSelectedChannelId(e){return null!=e?P[e]:r}getLastSelectedChannels(e){return P[e]}getLastChannelFollowingDestination(){return a}}B.displayName=\"SelectedChannelStore\";var H=new B(p.default,{CONNECTION_OPEN:function(e){i=e.sessionId,null!=o&&null==I.default.getChannel(o)&&(o=null);let t=x();t&&U()},OVERLAY_INITIALIZE:function(e){i=e.sessionId,o=e.selectedVoiceChannelId,y={},P={},s=e.selectedChannelId,y[e.selectedGuildId]=e.selectedChannelId,w(e.selectedGuildId,s),x()},CONNECTION_CLOSED:function(){i=null},CHANNEL_SELECT:function(e){let{guildId:t,channelId:n}=e;if(void 0===t)return!1;null==n&&(!(0,h.isInMainTabsExperiment)()||(0,_.shouldHandleNewPanelsRoute)(t))&&(n=G(t)),null!=s&&n!==s&&(r=s),s=n,w(t,n),y[M(t)]!==n&&(P[M(t)]=y[M(t)],y[M(t)]=s),U()},CHANNEL_CREATE:function(e){let{channel:t}=e;switch(t.type){case N.ChannelTypes.GUILD_ANNOUNCEMENT:case N.ChannelTypes.GUILD_TEXT:let n=t.guild_id;if(null!=n&&null==L[n]&&(L[n]=t.id),null!=n&&null==y[n])return y[n]=G(n),!0}return!1},CHANNEL_DELETE:V,CHANNEL_UPDATES:function(e){let{channels:t}=e;for(let e of t)e.isScheduledForDeletion()&&F(e.id,e.guild_id)},THREAD_DELETE:V,GUILD_CREATE:function(e){let{guild:t}=e;if(null==y[t.id]){let e=G(t.id);y[t.id]=e,w(t.id,e),U()}},GUILD_DELETE:function(e){let{guild:{id:t,unavailable:n}}=e;if(o===y[t]&&(o=null),n)return!1;delete L[t],delete y[t],U()},VOICE_CHANNEL_SELECT:function(e){let{channelId:t}=e;if(null==t){let e=I.default.getChannel(o),t=null==e?void 0:e.guild_id;null!=t&&t!==R.default.getGuildId()&&y[t]===o&&(y[t]=G(t))}o=t,U()},VOICE_STATE_UPDATES:function(e){let{voiceStates:t}=e;return t.reduce((e,t)=>{var n,r,s;if(t.sessionId===i){clearInterval(u);let e=null===(n=I.default.getChannel(o))||void 0===n?void 0:n.getGuildId();t.guildId!==e&&null==t.channelId||(o=t.channelId),l=Date.now(),null!=o&&(u=setInterval(()=>{l=Date.now(),U()},6e4)),U()}else{if(t.userId!==g.default.getId())return e;clearInterval(u),u=void 0,l=0;let n=null===(r=I.default.getChannel(o))||void 0===r?void 0:r.getGuildId(),i=null===(s=I.default.getChannel(t.channelId))||void 0===s?void 0:s.getGuildId();null!=n&&i===n&&(o=null),U()}return!0},!1)},CHANNEL_FOLLOWER_CREATED:function(e){let{channelId:t,guildId:n}=e;(null==a||t!==a.channelId)&&(a={channelId:t,guildId:n},U())},LOGOUT:function(){y={},s=null,r=void 0,L={},a={},o=null,E.default.remove(D)}})}"