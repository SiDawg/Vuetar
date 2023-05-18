(function(){"use strict";var e={4847:function(e,t,n){var s=n(9242),i=n(3396),o=n(7139),r=n(4852),a=n(3369),l=n(6824);const h=["width","height"],c=["cx","cy","r","fill"];function d(e,t,n,d,u,g){const m=(0,i.up)("TopDashboard"),f=(0,i.up)("FretBoard");return(0,i.wg)(),(0,i.j4)(r.q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(a.K,{fluid:""},{default:(0,i.w5)((()=>[(0,i.Wm)(l.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{onScaleClicked:g.startDragging,onSettingsChanged:g.changeSettings,onMousedown:t[0]||(t[0]=(0,s.iM)((()=>{}),["prevent"]))},null,8,["onScaleClicked","onSettingsChanged"])])),_:1}),(0,i.Wm)(l.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(f,{ndX:u.ndX,ndY:u.ndY,ndScaleID:u.ndScaleID,isDragging:u.isDragging,isMobile:u.isMobile,scColor:u.scColors[u.colIndex],btSpacing:u.btSpacing,btLabels:u.btLabels},null,8,["ndX","ndY","ndScaleID","isDragging","isMobile","scColor","btSpacing","btLabels"])])),_:1})])),_:1}),u.isDragging?((0,i.wg)(),(0,i.iD)("svg",{key:0,width:2*u.noteCircles,height:2*u.noteCircles,style:(0,o.j5)(`pointer-events: none; position: absolute; z-index: 10; transform: translate(${u.ndX-u.noteCircles}px, ${u.ndY-u.noteCircles}px)`)},[(0,i._)("circle",{cx:u.noteCircles,cy:u.noteCircles,r:u.noteCircles,fill:u.scColors[u.colIndex]},null,8,c)],12,h)):(0,i.kq)("",!0)])),_:1})}var u=n(6372),g=n(6119),m=n(7681),f=n(1888),p=n(8521);const w=(0,i._)("br",null,null,-1),v=["width","height","viewBox"],b=["cx","cy","r","id","onMousedown","onTouchstart"],y=["x","y"],x={class:"d-flex align-center flex-column"},k=(0,i._)("div",{class:"mt-0 text-subtitle-2"},"Labels",-1),S={class:"d-flex align-center flex-column mt-5"},D=(0,i._)("div",{class:"mt-0 text-subtitle-2"},"Overlap",-1),T={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 20",width:"25",height:"20"},M={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 20",width:"30",height:"20"},_={class:"d-flex align-center flex-column"},j=(0,i._)("div",{class:"mt-0 text-subtitle-2"},"Spacing",-1),C={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 20",width:"30",height:"20"},G={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 20",width:"30",height:"20"},N={class:"d-flex align-center flex-column mt-5"},L={class:"d-flex align-center mt-2"},B=(0,i._)("svg",{viewBox:"0 0 500 500",width:"50",height:"50",x:"0",y:"0",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{style:{"stroke-linecap":"round","stroke-miterlimit":"1","stroke-linejoin":"round",stroke:"rgb(52, 73, 94)",fill:"rgb(52, 73, 94)","stroke-width":"0px"},d:"M 186.187 249.516 L 193.452 193.583 L 341.263 19.193 L 421.911 15.613 L 424.673 49.162 L 361.956 56.584 L 239.344 224.402 L 186.187 249.516 Z"}),(0,i._)("g",{transform:"matrix(1.542338, 1.120596, 1.120596, -1.542338, -303.13028, 417.528931)",style:{}},[(0,i._)("g",{transform:"translate(178.06 235.01)"},[(0,i._)("path",{d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z",fill:"#41b883"})]),(0,i._)("g",{transform:"translate(178.06 235.01)"},[(0,i._)("path",{d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z",fill:"#34495e"})])])],-1);function O(e,t,n,r,h,c){return(0,i.wg)(),(0,i.j4)(a.K,{class:"bg-background d-flex justify-center flex-shrink-0"},{default:(0,i.w5)((()=>[(0,i.Wm)(m._,{width:c.scaleBoxWidth,"min-width":c.scaleBoxWidth,height:h.dashboardHeight,elevation:"2",class:"rounded-lg mx-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(g.f,{modelValue:h.btScales,"onUpdate:modelValue":t[0]||(t[0]=e=>h.btScales=e),class:"rounded-t-lg rounded-b-0",divided:"",elevation:"2",density:"compact",mandatory:"force"},{default:(0,i.w5)((()=>[(0,i.Wm)(u.T,{width:c.scaleBoxWidth/3,value:"common"},{default:(0,i.w5)((()=>[(0,i.Uk)("Common")])),_:1},8,["width"]),(0,i.Wm)(u.T,{width:c.scaleBoxWidth/3,value:"modes"},{default:(0,i.w5)((()=>[(0,i.Uk)("Modes")])),_:1},8,["width"]),(0,i.Wm)(u.T,{width:c.scaleBoxWidth/3,value:"other"},{default:(0,i.w5)((()=>[(0,i.Uk)("Other")])),_:1},8,["width"])])),_:1},8,["modelValue"]),w,(0,i.Wm)(f.Z,{"no-gutters":"","justify-center":"","align-center":"",style:{padding:"0px 0px"}},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",{width:c.scaleBoxWidth,height:h.dashboardHeight,viewBox:`${-h.scStroke/2}, \n\t\t\t\t\t${-h.scStroke/2}, \n\t\t\t\t\t${c.scaleBoxWidth}, \n\t\t\t\t\t${h.dashboardHeight}`},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.scaleButtons.find((e=>e.group===h.btScales)).rows,((e,t)=>((0,i.wg)(),(0,i.iD)("g",{key:t},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e,((e,n)=>((0,i.wg)(),(0,i.iD)("g",{key:n},[(0,i._)("circle",{cx:`${n*(2*h.scaleCircles)+h.scaleCircles+h.scalePadding*(n+1)}`,cy:`${t*(2*h.scaleCircles)+h.scaleCircles+h.scalePadding*(t+1)}`,r:h.scaleCircles,class:"scaleCircle",id:e.sid,onMousedown:(0,s.iM)((t=>c.startDragging(t,e.sid)),["prevent"]),onTouchstart:(0,s.iM)((t=>c.startDragging(t,e.sid)),["prevent"])},[(0,i._)("title",null,(0,o.zw)(e.name),1)],40,b),(0,i._)("text",{x:`${n*(2*h.scaleCircles)+h.scaleCircles+h.scalePadding*(n+1)}`,y:`${t*(2*h.scaleCircles)+h.scaleCircles+h.scalePadding*(t+1)}`,class:"scaleText","pointer-events":"none"},(0,o.zw)(e.shortname),9,y)])))),128))])))),128))],8,v))])),_:1})])),_:1},8,["width","min-width","height"]),(0,i.Wm)(m._,{elevation:"2",height:h.dashboardHeight,class:"rounded-lg mx-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(l.o,{class:"ma-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(p.D,null,{default:(0,i.w5)((()=>[(0,i._)("div",x,[k,(0,i.Wm)(g.f,{modelValue:h.btLabels,"onUpdate:modelValue":t[1]||(t[1]=e=>h.btLabels=e),variant:"outlined",onClick:c.settingsChange,divided:"",mandatory:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u.T,{value:"abc",title:"Note Name"},{default:(0,i.w5)((()=>[(0,i.Uk)(" ABC ")])),_:1}),(0,i.Wm)(u.T,{value:"b3",title:"Note Number (standard: relative to root mode)",style:{"text-transform":"none"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" ♭3 ")])),_:1}),(0,i.Wm)(u.T,{value:"123",title:"Alternate Note Number (index)"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 123 ")])),_:1})])),_:1},8,["modelValue","onClick"])]),(0,i._)("div",S,[D,(0,i.Wm)(g.f,{modelValue:h.btOverlap,"onUpdate:modelValue":t[2]||(t[2]=e=>h.btOverlap=e),variant:"outlined",onClick:c.settingsChange,divided:"",mandatory:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u.T,{value:"overlap",title:"Overlapped"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",T,[(0,i._)("circle",{style:(0,o.j5)({fill:"none",stroke:"rgba(var(--v-theme-on-surface))","stroke-width":"2px"}),cx:"10",cy:"9",r:"7"},null,4),(0,i._)("circle",{style:(0,o.j5)({fill:"none",stroke:"rgba(var(--v-theme-on-surface))","stroke-width":"2px"}),cx:"17",cy:"9",r:"7"},null,4)]))])),_:1}),(0,i.Wm)(u.T,{value:"discrete",title:"Discrete"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",M,[(0,i._)("circle",{style:(0,o.j5)({fill:"none",stroke:"rgba(var(--v-theme-on-surface))","stroke-width":"2px"}),cx:"8",cy:"9",r:"6"},null,4),(0,i._)("circle",{style:(0,o.j5)({fill:"none",stroke:"rgba(var(--v-theme-on-surface))","stroke-width":"2px"}),cx:"23",cy:"9",r:"6"},null,4)]))])),_:1})])),_:1},8,["modelValue","onClick"])])])),_:1}),(0,i.Wm)(p.D,null,{default:(0,i.w5)((()=>[(0,i._)("div",_,[j,(0,i.Wm)(g.f,{modelValue:h.btSpacing,"onUpdate:modelValue":t[3]||(t[3]=e=>h.btSpacing=e),variant:"outlined",onClick:c.settingsChange,divided:"",mandatory:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u.T,{value:"20",title:"Comfortable"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",C,[(0,i._)("rect",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))",stroke:"none"}),x:"0",y:"0",width:"2",height:"20"},null,4),(0,i._)("circle",{style:(0,o.j5)({fill:"none",stroke:"rgba(var(--v-theme-on-surface))","stroke-width":"2px"}),cx:"15",cy:"9",r:"6"},null,4),(0,i._)("rect",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))",stroke:"none"}),x:"28",y:"0",width:"2",height:"20"},null,4)]))])),_:1}),(0,i.Wm)(u.T,{value:"5",title:"Tight"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",G,[(0,i._)("rect",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))",stroke:"none"}),x:"6",y:"0",width:"2",height:"20"},null,4),(0,i._)("circle",{style:(0,o.j5)({fill:"none",stroke:"rgba(var(--v-theme-on-surface))","stroke-width":"2px"}),cx:"15",cy:"9",r:"6"},null,4),(0,i._)("rect",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))",stroke:"none"}),x:"22",y:"0",width:"2",height:"20"},null,4)]))])),_:1})])),_:1},8,["modelValue","onClick"])]),(0,i._)("div",N,[(0,i._)("div",L,[B,(0,i._)("text",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))"})},"Vuetar",4)])])])),_:1})])),_:1})])),_:1},8,["height"])])),_:1})}n(7658);var P=JSON.parse('[{"group":"common","rows":[[{"name":"Major","shortname":"M","scaleType":"Major","mode":0,"scaleTheme":0,"sid":1},{"name":"Minor","shortname":"m","scaleType":"Major","mode":5,"scaleTheme":0,"sid":2},{"name":"Major Pentatonic","shortname":"M p","scaleType":"Major","mode":0,"scaleTheme":10,"sid":3},{"name":"Minor Pentatonic","shortname":"m p","scaleType":"Major","mode":5,"scaleTheme":11,"sid":4}],[{"name":"Major (highlight on 3 & 5)","shortname":"M+","scaleType":"Major","mode":0,"scaleTheme":1,"sid":5},{"name":"Minor (highlight on 3 & 5)","shortname":"m+","scaleType":"Major","mode":5,"scaleTheme":1,"sid":6},{"name":"Major (highlight on Pentatonic notes)","shortname":"M+p","scaleType":"Major","mode":0,"scaleTheme":2,"sid":7},{"name":"Minor (highlight on Pentatonic notes)","shortname":"m+p","scaleType":"Major","mode":5,"scaleTheme":3,"sid":8}]]},{"group":"modes","rows":[[{"name":"Ionian (Major)","shortname":"Io","scaleType":"Major","mode":0,"scaleTheme":0,"sid":9},{"name":"Dorian","shortname":"Do","scaleType":"Major","mode":1,"scaleTheme":0,"sid":10},{"name":"Phrygian","shortname":"Ph","scaleType":"Major","mode":2,"scaleTheme":0,"sid":11},{"name":"Lydian","shortname":"Ly","scaleType":"Major","mode":3,"scaleTheme":0,"sid":12},{"name":"Mixolydian","shortname":"Mi","scaleType":"Major","mode":4,"scaleTheme":0,"sid":13},{"name":"Aeolian (Natural Minor)","shortname":"Ae","scaleType":"Major","mode":5,"scaleTheme":0,"sid":14},{"name":"Locrian","shortname":"Lo","scaleType":"Major","mode":6,"scaleTheme":0,"sid":15}],[{"name":"Ionian (No colour notes, but highlights on 3 & 5)","shortname":"Io+","scaleType":"Major","mode":0,"scaleTheme":1,"sid":16},{"name":"Dorian (colour notes: ♭3, ♭7)","shortname":"Do+","scaleType":"Major","mode":1,"scaleTheme":4,"sid":17},{"name":"Phrygian (colour notes: ♭2, ♭3, ♭6, ♭7)","shortname":"Ph+","scaleType":"Major","mode":2,"scaleTheme":5,"sid":18},{"name":"Lydian (colour notes: ♯4)","shortname":"Ly+","scaleType":"Major","mode":3,"scaleTheme":6,"sid":19},{"name":"Mixolydian (colour notes: ♭7)","shortname":"Mi+","scaleType":"Major","mode":4,"scaleTheme":7,"sid":20},{"name":"Aeolian (colour notes: ♭3, ♭6, ♭7)","shortname":"Ae+","scaleType":"Major","mode":5,"scaleTheme":8,"sid":21},{"name":"Locrian (colour notes: ♭2, ♭3, ♭5, ♭6, ♭7)","shortname":"Lo+","scaleType":"Major","mode":6,"scaleTheme":9,"sid":22}]]},{"group":"other","rows":[[{"name":"Ionian (Major)","shortname":"Hi","scaleType":"Major","mode":1,"scaleTheme":0,"sid":23},{"name":"Dorian","shortname":"Po","scaleType":"Major","mode":2,"scaleTheme":0,"sid":24}],[{"name":"Ionian (No colour notes, but highlights on 3 & 5)","shortname":"St","scaleType":"Major","mode":1,"scaleTheme":4,"sid":25},{"name":"Dorian (colour notes: ♭3, ♭7)","shortname":"Ej","scaleType":"Major","mode":2,"scaleTheme":4,"sid":26}]]}]'),Y={name:"TopDashboard",data(){return{tickLabels:{0:"A B C",1:"1 2 3",2:"1 2 b3"},dashboardHeight:200,btScales:"common",btLabels:"abc",btSpacing:"5",btOverlap:"discrete",scaleButtons:P,scaleCircles:20,itemsPerGroup:7,scalePadding:15,scStroke:3}},methods:{startDragging(e,t){const{type:n,touches:s,clientX:i,clientY:o}=e,r=e.target.getBoundingClientRect().left,a=e.target.getBoundingClientRect().top;this.$emit("scale-clicked",{sid:t,scaleCircles:this.scaleCircles,scaleX:r,scaleY:a,clientX:i,clientY:o,type:n,touches:s})},settingsChange(){this.$emit("settings-changed",{btSpacing:this.btSpacing,btLabels:this.btLabels})}},computed:{scaleBoxWidth(){return 2*this.scaleCircles*this.itemsPerGroup+(this.scalePadding*(this.itemsPerGroup+1)+this.scStroke/2)},groupScales(){const e=[];for(let t=0;t<P.length;t++){t%this.itemsPerGroup===0&&e.push([]);const n=Math.floor(t/this.itemsPerGroup);e[n].push(this.scaleButtons[t])}return e}}},W=n(89);const X=(0,W.Z)(Y,[["render",O]]);var E=X;const R=["width","height"],F=["width","height"],z=["x1","x2","y2"],A=["x"],I=["y1","x2","y2"],V=["cx","cy","r","fill","fill-opacity","stroke","stroke-width","stroke-opacity"],H=["x","y","r"],$={key:0},U=["x","y"],K=["width","height"],q=["cx","cy","fill","r","onClick"],Z=["x","y"],J=["y","height","width"],Q=(0,i._)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),ee=(0,i._)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"},null,-1),te=[Q,ee];function ne(e,t,n,s,r,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a.K,{ref:"dropArea",onMouseup:l.handleNoteDrop,onTouchend:l.handleNoteDrop,onScroll:l.handleScroll,fluid:"",style:{"overflow-x":"auto"}},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",{width:this.width,height:r.stringGap*r.strings+40},[(0,i._)("rect",{width:this.width,height:r.stringGap*r.strings,x:"0",y:"40",style:(0,o.j5)({fill:"rgba(var(--v-theme-surface))"})},null,12,F),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.frets,((e,t)=>((0,i.wg)(),(0,i.iD)("g",{key:t},[(0,i._)("line",{x1:e*r.fretGap,y1:"40",x2:e*r.fretGap,y2:r.stringGap*r.strings+40,style:(0,o.j5)({stroke:0===t||12==t?"rgba(var(--v-theme-on-surface), 1)":"rgba(var(--v-border-color), var(--v-border-opacity))",strokeWidth:"5"})},null,12,z),[3,5,7,9,12,15,17,19].includes(t)?((0,i.wg)(),(0,i.iD)("text",{key:0,x:e*r.fretGap-2.5-r.fretGap/2,y:"30","text-anchor":"middle",fill:"white"},(0,o.zw)(t),9,A)):(0,i.kq)("",!0)])))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.strings,((e,t)=>((0,i.wg)(),(0,i.iD)("g",{key:t},[(0,i._)("line",{x1:"0",y1:t*r.stringGap+r.stringGap/2+40,x2:r.neckLength,y2:t*r.stringGap+r.stringGap/2+40,style:(0,o.j5)({stroke:"rgba(var(--v-border-color), var(--v-border-opacity))"})},null,12,I)])))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.fretboard,(e=>((0,i.wg)(),(0,i.iD)("g",{key:e},[e.note.ntShow?((0,i.wg)(),(0,i.iD)("circle",{key:0,cx:e.fret*this.fretGap+this.fretGap/2+this.noteR+e.scIndex*(this.noteDiameter+this.noteGapBetween)-(r.scales.length*this.noteDiameter+this.noteGapBetween*(r.scales.length-1))/2,cy:e.string*this.stringGap+55,r:this.noteR,fill:e.fillc,"fill-opacity":e.note.ntOpacity,stroke:e.note.ntStroke?e.fillc:"none","stroke-width":e.note.ntStroke?2:0,"stroke-opacity":e.note.ntStroke?1:0},null,8,V)):(0,i.kq)("",!0),e.note.ntShow?((0,i.wg)(),(0,i.iD)("text",{key:1,class:"scaleText",x:e.fret*this.fretGap+this.fretGap/2+this.noteR+e.scIndex*(this.noteDiameter+this.noteGapBetween)-(r.scales.length*this.noteDiameter+this.noteGapBetween*(r.scales.length-1))/2,y:e.string*this.stringGap+56,r:this.noteR,fill:"`rgba(var(--v-theme-surface))`"},["123"===this.btLabels?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,o.zw)(e.note.ntScaleNum)+" ",1)],64)):"b3"===this.btLabels?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,o.zw)(e.note.ntRootModeNum),1)],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[(0,i.Uk)((0,o.zw)(e.note.ntName),1)],64))],8,H)):(0,i.kq)("",!0)])))),128)),n.isDragging?((0,i.wg)(),(0,i.iD)("g",$,[(0,i._)("text",{x:l.hoverX,y:n.ndY-r.neckY-(n.isMobile?60:40),class:"scaleText"},(0,o.zw)(l.noteName(l.hoverNote)),9,U)])):(0,i.kq)("",!0)],8,R))])),_:1},8,["onMouseup","onTouchend","onScroll"]),(0,i.Wm)(a.K,{fluid:"",style:{padding:"15px"}},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",{width:this.width,height:this.scales.length*(this.noteDiameter+this.noteGapBetween)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.scales,((e,t)=>((0,i.wg)(),(0,i.iD)("g",{key:t},[(0,i._)("circle",{cx:this.noteR+this.noteGapBetween,cy:t*(2*this.noteR+this.noteGapBetween)+this.noteR,fill:e.scColor,"fill-opacity":"1",r:this.noteR,onClick:e=>l.removeScale(t)},null,8,q),(0,i._)("text",{"dominant-baseline":"middle","alignment-baseline":"middle",x:this.noteDiameter+10,y:t*(this.noteDiameter+this.noteGapBetween)+this.noteR,fill:"white"},(0,o.zw)(l.noteName(e.tonic)+" "+e.scName),9,Z),((0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",x:3,y:t*(this.noteDiameter+this.noteGapBetween),height:2*r.noteR,width:2*r.noteR,style:{"pointer-events":"none"},fill:"#FFFFFF"},te,8,J))])))),128))],8,K))])),_:1})],64)}var se=JSON.parse('[{"name":"Major","absSteps":[1,2,2,1,2,2,2]}]'),ie=JSON.parse("[[1,2,2,2,2,2,2],[1,2,3,2,3,2,2],[1,3,3,2,3,3,2],[1,2,3,3,3,2,3],[1,2,3,2,2,2,3],[1,3,3,2,2,3,3],[1,2,2,3,2,2,2],[1,2,2,2,2,2,3],[1,2,3,2,2,3,3],[1,3,3,2,3,3,3],[1,2,2,0,2,2,0],[1,0,2,2,2,0,2]]");const oe=["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];class re{constructor(e,t,n,s){switch(this.ntChromaNum=e,this.ntScaleNum=t,this.ntRootModeNum=n,this.ntStyle=s,this.ntName=oe[e],s){case 0:this.ntShow=!1,this.ntOpacity=0,this.ntStroke=!1;break;case 1:this.ntShow=!0,this.ntOpacity=1,this.ntStroke=!1;break;case 2:this.ntShow=!0,this.ntOpacity=.3,this.ntStroke=!1;break;case 3:this.ntShow=!0,this.ntOpacity=0,this.ntStroke=!0;break}}}class ae{constructor(e,t,n,s,i,o){this.scaleType=e,this.tonic="number"===typeof t?t:oe.indexOf(t),this.mode=n,this.scColor=s,this.scTheme=i,this.scName=o,this.notes=[],this.setNotes()}setNotes(){const e=se.find((e=>e.name===this.scaleType));if("undefined"===typeof e)console.log("scaleObj is undefined"+this.scaleType);else{var t=this.mode,n=0,s=this.tonic,i=this.tonic,o=this.tonic,r=this.tonic,a="",l="";do{0===n?this.notes.push(new re(this.tonic,1,1,ie[this.scTheme][0])):(i=s+e.absSteps[t],r=o+e.absSteps[n],a=this.getRootModeString(r,i),l=a+(n+1),this.notes.push(new re(i%12,n+1,l,ie[this.scTheme][n])),s=i,o=r),n++,t++,t>e.absSteps.length-1&&(t=0)}while(n<=e.absSteps.length-1)}}getRootModeString(e,t){var n=Math.abs(e-t);return e>t?"♭".repeat(n):"♯".repeat(n)}hasNote(e){return this.notes.some((t=>t.ntChromaNum===e))}getNote(e){return this.notes.find((t=>t.ntChromaNum===e))}}const le=P.flatMap((e=>e.rows)).flat(),he=["E","B","G","D","A","E"];var ce={name:"FretBoard",props:{ndScaleID:Number,ndX:Number,ndY:Number,isDragging:Boolean,isMobile:Boolean,scColor:String,btSpacing:String,btLabels:String},data(){return{width:300,height:150,frets:20,strings:6,fretGap:20,stringGap:30,noteR:14,noteGapBetween:2,neckLength:1200,dropX:0,dropY:0,neckX:0,neckY:0,scales:[],fretboard:[],scrollPos:0}},computed:{noteStart(){return this.noteR+this.noteGapSides},noteGapSides(){return Number(this.btSpacing)},noteDiameter(){return 2*this.noteR},minFretGap(){var e=this.scales.length;return 0===e&&(e=1),this.noteGapSides+e*this.noteDiameter+(e-1)*this.noteGapBetween+this.noteGapSides},hoverX(){return this.ndX-this.neckX-15+this.scrollPos},hoverFret(){return Math.floor(this.hoverX/this.fretGap)},hoverString(){return Math.floor((this.ndY-this.neckY-25)/this.stringGap)-1},hoverNote(){return this.hoverFret<0||this.hoverFret>this.frets-1||this.hoverString<0||this.hoverString>this.strings-1?void 0:this.noteAdd(this.noteNum(he[this.hoverString]),this.hoverFret)}},mounted(){window.addEventListener("resize",this.handleResize),window.addEventListener("touchend",this.handleNoteDrop),this.handleResize();const e=this.$refs.dropArea;this.neckX=e.$el.getBoundingClientRect().left,this.neckY=e.$el.getBoundingClientRect().top},updated(){this.setScrollPos(this.scrollPos),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{notePos(e){return e*(this.noteDiameter+this.noteGapBetween)},handleScroll(){const e=this.$refs.dropArea;this.scrollPos=e.$el.scrollLeft},handleResize(){var e=this.minFretGap*this.frets;document.documentElement.clientWidth-40<=e?this.width=e:this.width=document.documentElement.clientWidth-40,this.neckLength=this.width,this.fretGap=this.width/this.frets},handleNoteDrop(){this.dropX=this.ndX-this.neckX,this.dropY=this.ndY-this.neckY;const e=this.hoverFret,t=this.hoverNote;if(void 0===t||!this.isDragging)return;if(this.scales.length>=5)return;const n=le.find((e=>e.sid===this.ndScaleID));this.scales.push(new ae(n.scaleType,t,n.mode,this.scColor,n.scaleTheme,n.name)),this.buildFretboard(),this.handleResize();const s=this.noteStart+this.notePos(this.scales.length),i=e*this.fretGap,o=s+i;this.scrollPos=o-this.dropX-15,this.scrollPos<0&&(this.scrollPos=0)},buildFretboard(){this.fretboard.length=0;for(let e=0;e<this.frets;e++)for(let t=0;t<this.strings;t++){let n=this.noteAdd(this.noteNum(he[t]),e),s=this.scales.filter((e=>e.notes.some((e=>e.ntChromaNum===n)))).length,i=0;this.scales.forEach(((o,r)=>{let a=o.getNote(n);void 0!==a&&(this.fretboard.push({noteCount:s,ntIndex:i,scIndex:r,fret:e,string:t,note:a,fillc:o.scColor,desc:o.scName}),i++)}))}},setScrollPos(e){const t=this.$refs.dropArea;t.$el.scrollLeft=e},removeScale(e){const t=document.documentElement.clientWidth/2+this.scrollPos,n=Math.floor((t-20)/this.fretGap),s=t%this.fretGap,i=s/this.fretGap;this.scales.splice(e,1),this.buildFretboard(),this.handleResize();const o=n*this.fretGap+i*this.fretGap,r=o-document.documentElement.clientWidth/2;this.scrollPos=r,this.scrollPos<0&&(this.scrollPos=0),this.setScrollPos(r)},noteName(e){return oe[e]},noteNum(e){return oe.indexOf(e)},noteAdd(e,t){return(e+t)%12},testtouch(e){console.log(e)}}};const de=(0,W.Z)(ce,[["render",ne]]);var ue=de,ge={data(){return{noteCircles:15,ndX:40,ndY:40,isDragging:!1,ndScaleID:0,ndOffX:10,ndOffY:10,isMobile:!1,scColors:["#FF9F1C","#1A91FF","#8AC926","#E72AB2","#1BD9E5"],colIndex:0,btSpacing:"5",btLabels:"abc"}},components:{TopDashboard:E,FretBoard:ue},methods:{startDragging(e){this.isDragging=!0,this.ndOffX=this.clientX(e)-e.scaleCircles-e.scaleX,this.ndOffY=this.clientY(e)-e.scaleCircles-e.scaleY,this.ndX=this.clientX(e)-this.ndOffX,this.ndY=this.clientY(e)-this.ndOffY+window.scrollY,this.ndScaleID=e.sid},changeSettings(e){this.btSpacing=e.btSpacing,this.btLabels=e.btLabels},dragging(e){this.isDragging&&(this.ndX=this.clientX(e)-this.ndOffX,this.ndY=this.clientY(e)-this.ndOffY+window.scrollY)},stopDragging(){!0===this.isDragging&&(this.colIndex++,this.colIndex>=this.scColors.length&&(this.colIndex=0),this.isDragging=!1)},clientX(e){return e.type.startsWith("touch")?(this.isMobile=!0,e.touches[0].clientX):(this.isMobile=!1,e.clientX)},clientY(e){return e.type.startsWith("touch")?e.touches[0].clientY:e.clientY}},mounted(){window.addEventListener("mousemove",this.dragging,{passive:!0}),window.addEventListener("touchmove",this.dragging,{passive:!0}),window.addEventListener("mouseup",this.stopDragging,{passive:!0}),window.addEventListener("touchend",this.stopDragging,{passive:!0})},beforeUnmount(){window.removeEventListener("mousemove",this.dragging,{passive:!0}),window.removeEventListener("touchmove",this.dragging,{passive:!0}),window.removeEventListener("mouseup",this.stopDragging,{passive:!0}),window.removeEventListener("touchend",this.stopDragging,{passive:!0})}};const me=(0,W.Z)(ge,[["render",d]]);var fe=me,pe=(n(9773),n(8957)),we=(0,pe.Rd)({theme:{defaultTheme:"dark"}});async function ve(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}ve(),(0,s.ri)(fe).use(we).mount("#app")}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,o){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],i=e[c][1],o=e[c][2];for(var a=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(a=!1,o<r&&(r=o));if(a){e.splice(c--,1);var h=i();void 0!==h&&(t=h)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[s,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(s,i){if(1&i&&(s=this(s)),8&i)return s;if("object"===typeof s&&s){if(4&i&&s.__esModule)return s;if(16&i&&"function"===typeof s.then)return s}var o=Object.create(null);n.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var a=2&i&&s;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){r[e]=function(){return s[e]}}));return r["default"]=function(){return s},n.d(o,r),o}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.3b044e4c.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Vuetar:";n.l=function(s,i,o,r){if(e[s])e[s].push(i);else{var a,l;if(void 0!==o)for(var h=document.getElementsByTagName("script"),c=0;c<h.length;c++){var d=h[c];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+o){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+o),a.src=s),e[s]=[i];var u=function(t,n){a.onerror=a.onload=null,clearTimeout(g);var i=e[s];if(delete e[s],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(u.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=u.bind(null,a.onerror),a.onload=u.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/SVGExperiment/"}(),function(){var e={143:0};n.f.j=function(t,s){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var o=new Promise((function(n,s){i=e[t]=[n,s]}));s.push(i[2]=o);var r=n.p+n.u(t),a=new Error,l=function(s){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",a.name="ChunkLoadError",a.type=o,a.request=r,i[1](a)}};n.l(r,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,o,r=s[0],a=s[1],l=s[2],h=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(s);h<r.length;h++)o=r[h],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},s=self["webpackChunkVuetar"]=self["webpackChunkVuetar"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4847)}));s=n.O(s)})();
//# sourceMappingURL=app.ea9d2c81.js.map