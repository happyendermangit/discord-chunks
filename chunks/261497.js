"function(e,t,r){var n=r(\"306551\"),i=r(\"952133\"),o=r(\"543066\"),a=0/0,u=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if(\"number\"==typeof e)return e;if(o(e))return a;if(i(e)){var t=\"function\"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+\"\":t}if(\"string\"!=typeof e)return 0===e?e:+e;e=n(e);var r=s.test(e);return r||l.test(e)?c(e.slice(2),r?2:8):u.test(e)?a:+e}}"