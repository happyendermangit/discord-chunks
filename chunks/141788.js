"function(e,t,n){\"use strict\";n.r(t),n.d(t,{useProgressBar:function(){return o}});var r=n(\"240849\"),a=n(\"113581\"),i=n(\"564341\");function o(e){let{value:t=0,minValue:n=0,maxValue:o=100,valueLabel:s,isIndeterminate:c,formatOptions:l={style:\"percent\"}}=e,u=(0,r.filterDOMProps)(e,{labelable:!0}),{labelProps:d,fieldProps:p}=(0,a.useLabel)({...e,labelElementType:\"span\"}),f=((t=(0,r.clamp)(t,n,o))-n)/(o-n),m=(0,i.useNumberFormatter)(l);if(!c&&!s){let e=\"percent\"===l.style?f:t;s=m.format(e)}return{progressBarProps:(0,r.mergeProps)(u,{...p,\"aria-valuenow\":c?void 0:t,\"aria-valuemin\":n,\"aria-valuemax\":o,\"aria-valuetext\":c?void 0:s,role:\"progressbar\"}),labelProps:d}}}"