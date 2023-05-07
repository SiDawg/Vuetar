(function(){"use strict";var e={7768:function(e,t,n){var i=n(9242),o=n(3396),s=n(4852),r=n(3369),a=n(6824);const c={key:0,style:{"pointer-events":"none",position:"absolute",top:"0",left:"0","z-index":"10",height:"100%",width:"100%"}},l=["cx","cy","r","fill"],d=(0,o._)("div",{style:{"pointer-events":"none",position:"absolute",top:"0",left:"0","z-index":"10",height:"100%",width:"100%"}},null,-1);function h(e,t,n,h,u,g){const m=(0,o.up)("TopDashboard"),p=(0,o.up)("FretBoard");return(0,o.wg)(),(0,o.j4)(s.q,null,{default:(0,o.w5)((()=>[(0,o.Wm)(r.K,{fluid:""},{default:(0,o.w5)((()=>[(0,o.Wm)(a.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{onScaleClicked:g.startDragging,onMousedown:t[0]||(t[0]=(0,i.iM)((()=>{}),["prevent"]))},null,8,["onScaleClicked"])])),_:1}),(0,o.Wm)(a.o,null,{default:(0,o.w5)((()=>[(0,o.Wm)(p,{ndX:u.ndX,ndY:u.ndY,ndScaleID:u.ndScaleID,isDragging:u.isDragging},null,8,["ndX","ndY","ndScaleID","isDragging"])])),_:1}),u.isDragging?((0,o.wg)(),(0,o.iD)("svg",c,[(0,o._)("circle",{cx:u.ndX,cy:u.ndY,r:u.noteCircles,fill:u.ndFill},null,8,l)])):(0,o.kq)("",!0),d])),_:1})])),_:1})}var u=n(7139),g=n(6372),m=n(6119),p=n(7681),f=n(1888);const v=(0,o._)("br",null,null,-1),y=["width","height","viewBox"],w=["cx","cy","r","id","onMousedown","onTouchstart"],b=["x","y"];function D(e,t,n,s,a,c){return(0,o.wg)(),(0,o.j4)(r.K,{class:"bg-background d-flex justify-center flex-shrink-0"},{default:(0,o.w5)((()=>[(0,o.Wm)(p._,{width:c.scaleBoxWidth,"min-width":c.scaleBoxWidth,height:a.dashboardHeight,elevation:"2",class:"rounded-lg mx-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(m.f,{modelValue:a.toggle,"onUpdate:modelValue":t[3]||(t[3]=e=>a.toggle=e),class:"rounded-t-lg rounded-b-0",divided:"",elevation:"2",density:"compact",mandatory:"force"},{default:(0,o.w5)((()=>[(0,o.Wm)(g.T,{width:c.scaleBoxWidth/3,onClick:t[0]||(t[0]=e=>a.activeGroup="Common")},{default:(0,o.w5)((()=>[(0,o.Uk)("Common")])),_:1},8,["width"]),(0,o.Wm)(g.T,{width:c.scaleBoxWidth/3,onClick:t[1]||(t[1]=e=>a.activeGroup="Modes")},{default:(0,o.w5)((()=>[(0,o.Uk)("Modes")])),_:1},8,["width"]),(0,o.Wm)(g.T,{width:c.scaleBoxWidth/3,onClick:t[2]||(t[2]=e=>a.activeGroup="Other")},{default:(0,o.w5)((()=>[(0,o.Uk)("Other")])),_:1},8,["width"])])),_:1},8,["modelValue"]),v,(0,o.Wm)(f.Z,{"no-gutters":"","justify-center":"","align-center":"",style:{padding:"0px 0px"}},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)("svg",{width:c.scaleBoxWidth,height:a.dashboardHeight,viewBox:`${-a.scStroke/2}, \n                      ${-a.scStroke/2}, \n                      ${c.scaleBoxWidth}, \n                      ${a.dashboardHeight}`},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.scaleButtons.find((e=>e.group===a.activeGroup)).rows,((e,t)=>((0,o.wg)(),(0,o.iD)("g",{key:t},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e,((e,n)=>((0,o.wg)(),(0,o.iD)("g",{key:n},[(0,o._)("circle",{cx:`${n*(2*a.scaleCircles)+a.scaleCircles+a.scalePadding*(n+1)}`,cy:`${t*(2*a.scaleCircles)+a.scaleCircles+a.scalePadding*(t+1)}`,r:a.scaleCircles,class:"scaleCircle",id:e.sid,onMousedown:(0,i.iM)((t=>c.startDragging(t,e.sid)),["prevent"]),onTouchstart:(0,i.iM)((t=>c.startDragging(t,e.sid)),["prevent"])},[(0,o._)("title",null,(0,u.zw)(e.name),1)],40,w),(0,o._)("text",{x:`${n*(2*a.scaleCircles)+a.scaleCircles+a.scalePadding*(n+1)}`,y:`${t*(2*a.scaleCircles)+a.scaleCircles+a.scalePadding*(t+1)}`,class:"scaleText","pointer-events":"none"},(0,u.zw)(e.shortname),9,b)])))),128))])))),128))],8,y))])),_:1})])),_:1},8,["width","min-width","height"]),(0,o.Wm)(p._,{width:"330",elevation:"2",class:"rounded-lg mx-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(f.Z)])),_:1})])),_:1})}n(7658);var T=JSON.parse('[{"group":"Common","rows":[[{"name":"Major","shortname":"M","scaleType":"Diatonic","mode":0,"scaleTheme":0,"sid":1},{"name":"Minor","shortname":"m","scaleType":"Diatonic","mode":5,"scaleTheme":0,"sid":2},{"name":"Major Pentatonic","shortname":"M p","scaleType":"Pentatonic","mode":0,"scaleTheme":0,"sid":3},{"name":"Minor Pentatonic","shortname":"m p","scaleType":"Pentatonic","mode":4,"scaleTheme":0,"sid":4}],[{"name":"Major (highlight on 3 & 5)","shortname":"M+","scaleType":"Diatonic","mode":0,"scaleTheme":1,"sid":5},{"name":"Minor (highlight on 3 & 5)","shortname":"m+","scaleType":"Diatonic","mode":5,"scaleTheme":1,"sid":6},{"name":"Major (highlight on pentatonic notes)","shortname":"M+p","scaleType":"Diatonic","mode":0,"scaleTheme":2,"sid":7},{"name":"Minor (highlight on pentatonic notes)","shortname":"m+p","scaleType":"Diatonic","mode":4,"scaleTheme":3,"sid":8}]]},{"group":"Modes","rows":[[{"name":"Ionian (Major)","shortname":"Io","scaleType":"Diatonic","mode":0,"scaleTheme":0,"sid":9},{"name":"Dorian","shortname":"Do","scaleType":"Diatonic","mode":1,"scaleTheme":0,"sid":10},{"name":"Phrygian","shortname":"Ph","scaleType":"Diatonic","mode":2,"scaleTheme":0,"sid":11},{"name":"Lydian","shortname":"Ly","scaleType":"Diatonic","mode":3,"scaleTheme":0,"sid":12},{"name":"Mixolydian","shortname":"Mi","scaleType":"Diatonic","mode":4,"scaleTheme":0,"sid":13},{"name":"Aeolian (Natural Minor)","shortname":"Ae","scaleType":"Diatonic","mode":5,"scaleTheme":0,"sid":14},{"name":"Locrian","shortname":"Lo","scaleType":"Diatonic","mode":6,"scaleTheme":0,"sid":15}],[{"name":"Ionian (No colour notes, but highlights on 3 & 5)","shortname":"Io+","scaleType":"Diatonic","mode":0,"scaleTheme":1,"sid":16},{"name":"Dorian (colour notes: ♭3, ♭7)","shortname":"Do+","scaleType":"Diatonic","mode":1,"scaleTheme":4,"sid":17},{"name":"Phrygian (colour notes: ♭2, ♭3, ♭6, ♭7)","shortname":"Ph+","scaleType":"Diatonic","mode":2,"scaleTheme":5,"sid":18},{"name":"Lydian (colour notes: ♯4)","shortname":"Ly+","scaleType":"Diatonic","mode":3,"scaleTheme":6,"sid":19},{"name":"Mixolydian (colour notes: ♭7)","shortname":"Mi+","scaleType":"Diatonic","mode":4,"scaleTheme":7,"sid":20},{"name":"Aeolian (colour notes: ♭3, ♭6, ♭7)","shortname":"Ae+","scaleType":"Diatonic","mode":5,"scaleTheme":8,"sid":21},{"name":"Locrian (colour notes: ♭2, ♭3, ♭5, ♭6, ♭7)","shortname":"Lo+","scaleType":"Diatonic","mode":6,"scaleTheme":9,"sid":22}]]},{"group":"Other","rows":[[{"name":"Ionian (Major)","shortname":"Hi","scaleType":"Diatonic","mode":1,"scaleTheme":0,"sid":23},{"name":"Dorian","shortname":"Po","scaleType":"Diatonic","mode":2,"scaleTheme":0,"sid":24}],[{"name":"Ionian (No colour notes, but highlights on 3 & 5)","shortname":"St","scaleType":"Diatonic","mode":1,"scaleTheme":4,"sid":25},{"name":"Dorian (colour notes: ♭3, ♭7)","shortname":"Ej","scaleType":"Diatonic","mode":2,"scaleTheme":4,"sid":26}]]}]'),k={name:"TopDashboard",data(){return{dashboardHeight:200,activeGroup:"Common",toggle:!0,scaleButtons:T,scaleCircles:20,itemsPerGroup:7,scalePadding:15,scStroke:3}},methods:{startDragging(e,t){const{type:n,touches:i,clientX:o,clientY:s}=e,r=e.target.getBoundingClientRect().left,a=e.target.getBoundingClientRect().top;e.stopPropagation(),this.$emit("scale-clicked",{sid:t,scaleCircles:this.scaleCircles,scaleX:r,scaleY:a,clientX:o,clientY:s,type:n,touches:i})}},computed:{scaleBoxWidth(){return 2*this.scaleCircles*this.itemsPerGroup+(this.scalePadding*(this.itemsPerGroup+1)+this.scStroke/2)},groupScales(){const e=[];for(let t=0;t<T.length;t++){t%this.itemsPerGroup===0&&e.push([]);const n=Math.floor(t/this.itemsPerGroup);e[n].push(this.scaleButtons[t])}return e}}},x=n(89);const O=(0,x.Z)(k,[["render",D]]);var C=O;const Y=["width","height"],_=["x1","x2","y2"],M=["y1","x2","y2"],j={key:0},S=["x","y"],X=["cx","cy","fill","fill-opacity","stroke","stroke-width","stroke-opacity"],N=["x","y"],W=(0,o._)("br",null,null,-1);function P(e,t,n,i,s,a){return(0,o.wg)(),(0,o.j4)(r.K,{ref:"dropArea",onMouseup:a.handleNoteDrop,onTouchend:a.handleNoteDrop,fluid:"",style:{"overflow-x":"auto",padding:"15px"}},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.iD)("svg",{width:this.width,height:s.stringGap*s.strings,style:(0,u.j5)({background:"rgba(var(--v-theme-surface))"})},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.frets,((e,t)=>((0,o.wg)(),(0,o.iD)("g",{key:t},[(0,o._)("line",{x1:e*s.colWidth-2.5,y1:"0",x2:e*s.colWidth-2.5,y2:s.stringGap*s.strings,style:(0,u.j5)({stroke:"rgba(var(--v-border-color), var(--v-border-opacity))",strokeWidth:"5"})},null,12,_)])))),128)),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.strings,((e,t)=>((0,o.wg)(),(0,o.iD)("g",{key:t},[(0,o._)("line",{x1:"0",y1:t*s.stringGap+s.stringGap/2,x2:s.neckLength,y2:t*s.stringGap+s.stringGap/2,style:(0,u.j5)({stroke:"rgba(var(--v-border-color), var(--v-border-opacity))"})},null,12,M)])))),128)),n.isDragging?((0,o.wg)(),(0,o.iD)("g",j,[(0,o._)("text",{x:n.ndX-s.neckX-15,y:n.ndY-s.neckY-40,class:"scaleText"},(0,u.zw)(a.noteName(a.hoverNote)),9,S)])):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(this.fretboard,(e=>((0,o.wg)(),(0,o.iD)("g",{key:e},[(0,o._)("circle",{cx:e.fret*this.colWidth+30,cy:e.string*this.stringGap+15,r:"14",fill:e.fillc,"fill-opacity":e.note.ntOpacity,stroke:e.note.ntStroke?e.fillc:"none","stroke-width":e.note.ntStroke?2:0,"stroke-opacity":e.note.ntStroke?1:0},null,8,X),(0,o._)("text",{class:"scaleText",x:e.fret*this.colWidth+30,y:e.string*this.stringGap+16,fill:"white"},(0,u.zw)(e.note.ntName),9,N),W])))),128))],12,Y))])),_:1},8,["onMouseup","onTouchend"])}var L=JSON.parse('[{"name":"Diatonic","absSteps":[1,2,2,1,2,2,2]},{"name":"Pentatonic","absSteps":[3,2,2,3,2]}]'),B=JSON.parse("[[0,1,1,1,1,1,1],[0,1,2,1,2,1,1],[0,2,2,1,2,2,1],[0,1,2,2,2,1,2],[0,1,2,1,1,1,2],[0,2,2,1,1,2,2],[0,1,1,2,1,1,1],[0,1,1,1,1,1,2],[0,1,2,1,1,2,2],[0,2,2,1,2,2,2]]");const E=["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];class G{constructor(e,t){switch(this.ntNum=e,this.ntStyle=t,this.ntName=E[e],t){case 0:this.ntOpacity=1,this.ntStroke=!1;break;case 1:this.ntOpacity=.3,this.ntStroke=!1;break;case 2:this.ntOpacity=0,this.ntStroke=!0;break}}}class A{constructor(e,t,n,i,o){this.scaleType=e,this.tonic="number"===typeof t?t:E.indexOf(t),this.mode=n,this.scColor=i,this.scTheme=o,this.notes=[],this.setNotes()}setNotes(){const e=L.find((e=>e.name===this.scaleType));if("undefined"===typeof e)console.log("scaleObj is undefined");else{var t=this.mode,n=0,i=this.tonic,o=this.tonic;do{0===n?this.notes.push(new G(this.tonic,B[this.scTheme][0])):(o=(i+e.absSteps[t])%12,this.notes.push(new G(o,B[this.scTheme][n])),i=o),n++,t++,t>e.absSteps.length-1&&(t=0)}while(n<=e.absSteps.length-1)}}hasNote(e){return this.notes.some((t=>t.ntNum===e))}getNote(e){return this.notes.find((t=>t.ntNum===e))}}const I=T.flatMap((e=>e.rows)).flat(),z=["E","B","G","D","A","E"];var $={name:"FretBoard",props:{ndScaleID:Number,ndX:Number,ndY:Number,isDragging:Boolean},data(){return{width:300,colWidth:20,height:150,stringGap:30,frets:20,strings:6,minLength:1200,neckLength:1200,dropX:0,dropY:0,neckX:0,neckY:0,scales:[],fretboard:[]}},computed:{hoverX(){return Math.floor((this.ndX-this.neckX-15)/this.colWidth)},hoverY(){return Math.floor((this.ndY-this.neckY+15)/this.stringGap)-1},hoverNote(){return this.hoverX<0||this.hoverX>this.frets||this.hoverY<0||this.hoverY>this.strings?void 0:this.noteAdd(this.noteNum(z[this.hoverY]),this.hoverX)}},mounted(){window.addEventListener("resize",this.handleResize),window.addEventListener("touchend",this.handleNoteDrop),this.handleResize();const e=this.$refs.dropArea;this.neckX=e.$el.getBoundingClientRect().left,this.neckY=e.$el.getBoundingClientRect().top},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){window.innerWidth-60<=this.minLength?this.width=this.minLength:this.width=window.innerWidth-60,this.neckLength=this.width,this.colWidth=this.neckLength/this.frets},handleNoteDrop(){this.dropX=this.ndX-this.neckX,this.dropY=this.ndY-this.neckY,console.log(event);const e=this.hoverNote;if(void 0===e||!this.isDragging)return;const t=I.find((e=>e.sid===this.ndScaleID));this.scales.push(new A(t.scaleType,e,t.mode,"#7777AA",t.scaleTheme)),this.buildFretboard(),console.log(this.scales)},buildFretboard(){this.fretboard.length=0;for(let e=0;e<this.frets;e++)for(let t=0;t<this.strings;t++){let n=this.noteAdd(this.noteNum(z[t]),e);for(let i of this.scales){let o=i.getNote(n);void 0!==o&&this.fretboard.push({fret:e,string:t,note:o,fillc:i.scColor})}}},noteName(e){return E[e]},noteNum(e){return E.indexOf(e)},noteAdd(e,t){return(e+t)%12},testtouch(e){console.log(e)}}};const F=(0,x.Z)($,[["render",P]]);var H=F,R={data(){return{noteCircles:15,ndX:40,ndY:40,ndFill:"#8789C0",isDragging:!1,ndScaleID:0,ndOffX:10,ndOffY:10}},components:{TopDashboard:C,FretBoard:H},methods:{startDragging(e){console.log(e),this.isDragging=!0,this.ndOffX=this.clientX(e)-e.scaleCircles-e.scaleX,this.ndOffY=this.clientY(e)-e.scaleCircles-e.scaleY,this.ndX=this.clientX(e)-this.ndOffX,this.ndY=this.clientY(e)-this.ndOffY,this.ndScaleID=e.sid},dragging(e){this.isDragging&&(this.ndX=this.clientX(e)-this.ndOffX,this.ndY=this.clientY(e)-this.ndOffY)},stopDragging(){this.isDragging=!1},clientX(e){return e.type.startsWith("touch")?e.touches[0].clientX:e.clientX},clientY(e){return e.type.startsWith("touch")?e.touches[0].clientY:e.clientY}},mounted(){window.addEventListener("mousemove",this.dragging,{passive:!0}),window.addEventListener("touchmove",this.dragging,{passive:!0}),window.addEventListener("mouseup",this.stopDragging,{passive:!0}),window.addEventListener("touchend",this.stopDragging,{passive:!0})},beforeUnmount(){window.removeEventListener("mousemove",this.dragging,{passive:!0}),window.removeEventListener("touchmove",this.dragging,{passive:!0}),window.removeEventListener("mouseup",this.stopDragging,{passive:!0}),window.removeEventListener("touchend",this.stopDragging,{passive:!0})}};const K=(0,x.Z)(R,[["render",h]]);var U=K,Z=(n(9773),n(8957)),q=(0,Z.Rd)({theme:{defaultTheme:"dark"}});async function V(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}V(),(0,i.ri)(U).use(q).mount("#app")}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,s){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],s=e[d][2];for(var a=!0,c=0;c<i.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(a=!1,s<r&&(r=s));if(a){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,o,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(i,o){if(1&o&&(i=this(i)),8&o)return i;if("object"===typeof i&&i){if(4&o&&i.__esModule)return i;if(16&o&&"function"===typeof i.then)return i}var s=Object.create(null);n.r(s);var r={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&i;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){r[e]=function(){return i[e]}}));return r["default"]=function(){return i},n.d(s,r),s}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,i){return n.f[i](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.2f8db6c0.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-project:";n.l=function(i,o,s,r){if(e[i])e[i].push(o);else{var a,c;if(void 0!==s)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var h=l[d];if(h.getAttribute("src")==i||h.getAttribute("data-webpack")==t+s){a=h;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+s),a.src=i),e[i]=[o];var u=function(t,n){a.onerror=a.onload=null,clearTimeout(g);var o=e[i];if(delete e[i],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/SVGExperiment/"}(),function(){var e={143:0};n.f.j=function(t,i){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)i.push(o[2]);else{var s=new Promise((function(n,i){o=e[t]=[n,i]}));i.push(o[2]=s);var r=n.p+n.u(t),a=new Error,c=function(i){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var s=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;a.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",a.name="ChunkLoadError",a.type=s,a.request=r,o[1](a)}};n.l(r,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,r=i[0],a=i[1],c=i[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(i);l<r.length;l++)s=r[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},i=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7768)}));i=n.O(i)})();
//# sourceMappingURL=app.f73a8cef.js.map