"function(t,e,s){\"use strict\";var r=s(\"555671\"),i=s(\"256385\"),n=s(\"463483\"),c=r.rotr64_hi,o=r.rotr64_lo,f=r.shr64_hi,u=r.shr64_lo,a=r.sum64,d=r.sum64_hi,p=r.sum64_lo,b=r.sum64_4_hi,h=r.sum64_4_lo,l=r.sum64_5_hi,g=r.sum64_5_lo,v=i.BlockHash,x=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function m(){if(!(this instanceof m))return new m;v.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=x,this.W=Array(160)}r.inherits(m,v),t.exports=m,m.blockSize=1024,m.outSize=512,m.hmacStrength=192,m.padLength=128,m.prototype._prepareBlock=function(t,e){for(var s=this.W,r=0;r<32;r++)s[r]=t[e+r];for(;r<s.length;r+=2){var i=function(t,e){var s=c(t,e,19)^c(e,t,29)^f(t,e,6);return s<0&&(s+=4294967296),s}(s[r-4],s[r-3]),n=function(t,e){var s=o(t,e,19)^o(e,t,29)^u(t,e,6);return s<0&&(s+=4294967296),s}(s[r-4],s[r-3]),a=s[r-14],d=s[r-13],p=function(t,e){var s=c(t,e,1)^c(t,e,8)^f(t,e,7);return s<0&&(s+=4294967296),s}(s[r-30],s[r-29]),l=function(t,e){var s=o(t,e,1)^o(t,e,8)^u(t,e,7);return s<0&&(s+=4294967296),s}(s[r-30],s[r-29]),g=s[r-32],v=s[r-31];s[r]=b(i,n,a,d,p,l,g,v),s[r+1]=h(i,n,a,d,p,l,g,v)}},m.prototype._update=function(t,e){this._prepareBlock(t,e);var s=this.W,r=this.h[0],i=this.h[1],f=this.h[2],u=this.h[3],b=this.h[4],h=this.h[5],v=this.h[6],x=this.h[7],m=this.h[8],y=this.h[9],_=this.h[10],w=this.h[11],M=this.h[12],S=this.h[13],k=this.h[14],A=this.h[15];n(this.k.length===s.length);for(var E=0;E<s.length;E+=2){var B=k,I=A,R=function(t,e){var s=c(t,e,14)^c(t,e,18)^c(e,t,9);return s<0&&(s+=4294967296),s}(m,y),P=function(t,e){var s=o(t,e,14)^o(t,e,18)^o(e,t,9);return s<0&&(s+=4294967296),s}(m,y),j=function(t,e,s,r,i){var n=t&s^~t&i;return n<0&&(n+=4294967296),n}(m,y,_,w,M,S),C=function(t,e,s,r,i,n){var c=e&r^~e&n;return c<0&&(c+=4294967296),c}(m,y,_,w,M,S),O=this.k[E],T=this.k[E+1],D=s[E],z=s[E+1],N=l(B,I,R,P,j,C,O,T,D,z),L=g(B,I,R,P,j,C,O,T,D,z);B=function(t,e){var s=c(t,e,28)^c(e,t,2)^c(e,t,7);return s<0&&(s+=4294967296),s}(r,i),I=function(t,e){var s=o(t,e,28)^o(e,t,2)^o(e,t,7);return s<0&&(s+=4294967296),s}(r,i),R=function(t,e,s,r,i){var n=t&s^t&i^s&i;return n<0&&(n+=4294967296),n}(r,i,f,u,b,h);var U=d(B,I,R,P=function(t,e,s,r,i,n){var c=e&r^e&n^r&n;return c<0&&(c+=4294967296),c}(r,i,f,u,b,h)),q=p(B,I,R,P);k=M,A=S,M=_,S=w,_=m,w=y,m=d(v,x,N,L),y=p(x,x,N,L),v=b,x=h,b=f,h=u,f=r,u=i,r=d(N,L,U,q),i=p(N,L,U,q)}a(this.h,0,r,i),a(this.h,2,f,u),a(this.h,4,b,h),a(this.h,6,v,x),a(this.h,8,m,y),a(this.h,10,_,w),a(this.h,12,M,S),a(this.h,14,k,A)},m.prototype._digest=function(t){return\"hex\"===t?r.toHex32(this.h,\"big\"):r.split32(this.h,\"big\")}}"