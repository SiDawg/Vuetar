(function(){"use strict";var e={4292:function(e,t,n){var s=n(9242),i=n(3396),o=n(7139),a=n(4852),r=n(3369),l=n(6824);const c=["width","height"],h=["cx","cy","r","fill"];function d(e,t,n,s,d,m){const u=(0,i.up)("TopDashboard"),g=(0,i.up)("FretBoard");return(0,i.wg)(),(0,i.j4)(a.q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r.K,{fluid:""},{default:(0,i.w5)((()=>[(0,i.Wm)(l.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{onScaleClicked:m.startDragging,onSettingsChanged:m.changeSettings},null,8,["onScaleClicked","onSettingsChanged"])])),_:1}),(0,i.Wm)(l.o,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,{ndX:d.ndX,ndY:d.ndY,ndScaleID:d.ndScaleID,isDragging:d.isDragging,isMobile:d.isMobile,scColor:d.scColors[d.colIndex],btSpacing:d.btSpacing,btLabels:d.btLabels,ndOther:d.ndOther},null,8,["ndX","ndY","ndScaleID","isDragging","isMobile","scColor","btSpacing","btLabels","ndOther"])])),_:1})])),_:1}),d.isDragging?((0,i.wg)(),(0,i.iD)("svg",{key:0,width:2*d.noteCircles,height:2*d.noteCircles,style:(0,o.j5)(`pointer-events: none; position: absolute; z-index: 10; transform: translate(${d.ndX-d.noteCircles}px, ${d.ndY-d.noteCircles}px)`)},[(0,i._)("circle",{cx:d.noteCircles,cy:d.noteCircles,r:d.noteCircles,fill:d.scColors[d.colIndex]},null,8,h)],12,c)):(0,i.kq)("",!0)])),_:1})}var m=n(6372),u=n(6119),g=n(3324),p=n(1888),f=n(8521),w=n(9062);const y=(0,i._)("br",null,null,-1),v={key:0},b=["width","height","viewBox"],M=["cx","cy","r","id","onMousedown","onTouchstart"],T=["x","y"],x={key:1,class:"mr-5",style:{display:"flex","align-items":"center","flex-grow":"1"}},D=["width","height","viewBox"],S=["cx","cy","r"],k=(0,i._)("title",null,"Other",-1),j=[k],C=["x","y"],_={class:"d-flex align-center flex-column"},O=(0,i._)("div",{class:"text-subtitle-2"},"Spacing",-1),N={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 20",width:"30",height:"20"},L={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 20",width:"30",height:"20"},P={class:"d-flex align-center flex-column mt-3"},G=(0,i._)("div",{class:"mt-0 text-subtitle-2"},"Labels",-1),H={class:"d-flex align-center flex-column mt-0"},B={class:"d-flex align-center mt-2"},W=(0,i._)("svg",{viewBox:"0 0 500 500",width:"50",height:"50",x:"0",y:"0",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{style:{"stroke-linecap":"round","stroke-miterlimit":"1","stroke-linejoin":"round",stroke:"rgb(52, 73, 94)",fill:"rgb(52, 73, 94)","stroke-width":"0px"},d:"M 186.187 249.516 L 193.452 193.583 L 341.263 19.193 L 421.911 15.613 L 424.673 49.162 L 361.956 56.584 L 239.344 224.402 L 186.187 249.516 Z"}),(0,i._)("g",{transform:"matrix(1.542338, 1.120596, 1.120596, -1.542338, -303.13028, 417.528931)",style:{}},[(0,i._)("g",{transform:"translate(178.06 235.01)"},[(0,i._)("path",{d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z",fill:"#41b883"})]),(0,i._)("g",{transform:"translate(178.06 235.01)"},[(0,i._)("path",{d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z",fill:"#34495e"})])])],-1);function Y(e,t,n,a,c,h){return(0,i.wg)(),(0,i.j4)(r.K,{class:"bg-background d-flex justify-center flex-shrink-0"},{default:(0,i.w5)((()=>[(0,i.Wm)(g._,{width:h.scaleBoxWidth,"min-width":h.scaleBoxWidth,height:c.dashboardHeight,elevation:"2",class:"rounded-lg mx-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(u.f,{modelValue:c.btScales,"onUpdate:modelValue":t[0]||(t[0]=e=>c.btScales=e),class:"rounded-t-lg rounded-b-0",divided:"",elevation:"2",density:"compact",mandatory:"force"},{default:(0,i.w5)((()=>[(0,i.Wm)(m.T,{style:{"text-transform":"none"},width:h.scaleBoxWidth/3,value:"common"},{default:(0,i.w5)((()=>[(0,i.Uk)("Common")])),_:1},8,["width"]),(0,i.Wm)(m.T,{style:{"text-transform":"none"},width:h.scaleBoxWidth/3,value:"modes"},{default:(0,i.w5)((()=>[(0,i.Uk)("Modes")])),_:1},8,["width"]),(0,i.Wm)(m.T,{style:{"text-transform":"none"},width:h.scaleBoxWidth/3,value:"other"},{default:(0,i.w5)((()=>[(0,i.Uk)("Other")])),_:1},8,["width"])])),_:1},8,["modelValue"]),y,(0,i.Wm)(p.Z,{"no-gutters":"","justify-center":"","align-center":"",style:{padding:"0px 0px",display:"flex","align-items":"center","justify-content":"center"}},{default:(0,i.w5)((()=>["other"!==c.btScales?((0,i.wg)(),(0,i.iD)("div",v,[((0,i.wg)(),(0,i.iD)("svg",{width:h.groupWidth,height:c.dashboardHeight,viewBox:`0, 0, ${h.groupWidth}, ${c.dashboardHeight}`,align:"center"},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.scaleSelections.buttons.find((e=>e.group===c.btScales)).rows,((e,t)=>((0,i.wg)(),(0,i.iD)("g",{key:t},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e,((e,n)=>((0,i.wg)(),(0,i.iD)("g",{key:n},[(0,i._)("circle",{cx:`${n*(2*c.scaleCircles)+c.scaleCircles+c.scalePadding*(n+1)}`,cy:`${t*(2*c.scaleCircles)+c.scaleCircles+c.scalePadding*(t+1)}`,r:c.scaleCircles,class:"scaleCircle",id:e.sid,onMousedown:(0,s.iM)((t=>h.startDragging(t,e.sid)),["prevent"]),onTouchstart:(0,s.iM)((t=>h.startDragging(t,e.sid)),["prevent"])},[(0,i._)("title",null,(0,o.zw)(e.name),1)],40,M),(0,i._)("text",{x:`${n*(2*c.scaleCircles)+c.scaleCircles+c.scalePadding*(n+1)}`,y:`${t*(2*c.scaleCircles)+c.scaleCircles+c.scalePadding*(t+1)}`,class:"scaleText","pointer-events":"none"},(0,o.zw)(e.shortname),9,T)])))),128))])))),128))],8,b))])):(0,i.kq)("",!0),"other"==c.btScales?((0,i.wg)(),(0,i.iD)("div",x,[((0,i.wg)(),(0,i.iD)("svg",{width:2*c.scaleCircles+2*c.scalePadding,height:2*c.scaleCircles+2*c.scalePadding,style:(0,o.j5)({"min-width":2*c.scaleCircles+2*c.scalePadding+"px","min-height":2*c.scaleCircles+2*c.scalePadding+"px"}),viewBox:`0, 0, ${2*c.scaleCircles+2*c.scalePadding}, ${2*c.scaleCircles+2*c.scalePadding}`},[(0,i._)("circle",{cx:c.scaleCircles+c.scalePadding,cy:c.scaleCircles+c.scalePadding,r:c.scaleCircles,class:"scaleCircle",onMousedown:t[1]||(t[1]=(0,s.iM)((e=>h.startDragging(e,0)),["prevent"])),onTouchstart:t[2]||(t[2]=(0,s.iM)((e=>h.startDragging(e,0)),["prevent"]))},j,40,S),(0,i._)("text",{x:c.scaleCircles+c.scalePadding,y:c.scaleCircles+c.scalePadding,class:"scaleText","pointer-events":"none"},(0,o.zw)(h.scaleByDropDownName(c.dropDownSelected).shortname),9,C)],12,D)),(0,i.Wm)(w.r,{class:"mt-5",density:"compact",items:c.dropDownOptions,modelValue:c.dropDownSelected,"onUpdate:modelValue":t[3]||(t[3]=e=>c.dropDownSelected=e),variant:"outlined"},null,8,["items","modelValue"])])):(0,i.kq)("",!0)])),_:1})])),_:1},8,["width","min-width","height"]),(0,i.Wm)(g._,{elevation:"2",height:c.dashboardHeight,class:"rounded-lg mx-1"},{default:(0,i.w5)((()=>[(0,i.Wm)(l.o,{class:"ma-2"},{default:(0,i.w5)((()=>[(0,i.Wm)(f.D,null,{default:(0,i.w5)((()=>[(0,i._)("div",_,[O,(0,i.Wm)(u.f,{modelValue:c.btSpacing,"onUpdate:modelValue":t[4]||(t[4]=e=>c.btSpacing=e),variant:"outlined",onClick:h.settingsChange,divided:"",mandatory:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m.T,{value:c.WIDE,title:"Comfortable"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",N,[(0,i._)("rect",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))",stroke:"none"}),x:"0",y:"0",width:"2",height:"20"},null,4),(0,i._)("circle",{style:(0,o.j5)({fill:"none",stroke:"rgba(var(--v-theme-on-surface))","stroke-width":"2px"}),cx:"15",cy:"9",r:"6"},null,4),(0,i._)("rect",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))",stroke:"none"}),x:"28",y:"0",width:"2",height:"20"},null,4)]))])),_:1},8,["value"]),(0,i.Wm)(m.T,{value:c.NARROW,title:"Tight"},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",L,[(0,i._)("rect",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))",stroke:"none"}),x:"6",y:"0",width:"2",height:"20"},null,4),(0,i._)("circle",{style:(0,o.j5)({fill:"none",stroke:"rgba(var(--v-theme-on-surface))","stroke-width":"2px"}),cx:"15",cy:"9",r:"6"},null,4),(0,i._)("rect",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))",stroke:"none"}),x:"22",y:"0",width:"2",height:"20"},null,4)]))])),_:1},8,["value"])])),_:1},8,["modelValue","onClick"])]),(0,i._)("div",P,[G,(0,i.Wm)(u.f,{modelValue:c.btLabels,"onUpdate:modelValue":t[5]||(t[5]=e=>c.btLabels=e),variant:"outlined",onClick:h.settingsChange,divided:"",mandatory:""},{default:(0,i.w5)((()=>[(0,i.Wm)(m.T,{value:"abc",title:"Note Name"},{default:(0,i.w5)((()=>[(0,i.Uk)(" ABC ")])),_:1}),(0,i.Wm)(m.T,{value:"b3",title:"Note Number (standard: relative to root mode)",style:{"text-transform":"none"}},{default:(0,i.w5)((()=>[(0,i.Uk)(" ♭3 ")])),_:1}),(0,i.Wm)(m.T,{value:"123",title:"Alternate Note Number (index)"},{default:(0,i.w5)((()=>[(0,i.Uk)(" 123 ")])),_:1})])),_:1},8,["modelValue","onClick"])])])),_:1}),(0,i.Wm)(f.D,null,{default:(0,i.w5)((()=>[(0,i._)("div",H,[(0,i._)("div",B,[W,(0,i._)("text",{style:(0,o.j5)({fill:"rgba(var(--v-theme-on-surface))"})},"Vuetar",4)])])])),_:1})])),_:1})])),_:1},8,["height"])])),_:1})}var R=JSON.parse('{"dropDown":[{"name":"Melodic Minor, Root Mode","shortname":"mm1","scaleType":"Melodic Minor","mode":0,"scaleTheme":0,"sid":23},{"name":"Melodic Minor, 2nd Mode (Dorian ♭2)","shortname":"mm2","scaleType":"Melodic Minor","mode":1,"scaleTheme":0,"sid":24},{"name":"Melodic Minor, 3rd Mode (Lydian Augmented)","shortname":"mm3","scaleType":"Melodic Minor","mode":2,"scaleTheme":0,"sid":25},{"name":"Melodic Minor, 4th Mode (Lydian Dominant)","shortname":"mm4","scaleType":"Melodic Minor","mode":3,"scaleTheme":0,"sid":26},{"name":"Melodic Minor, 5th Mode (Aeolian Dominant)","shortname":"mm5","scaleType":"Melodic Minor","mode":4,"scaleTheme":0,"sid":27},{"name":"Melodic Minor, 6th Mode (Half Diminished)","shortname":"mm6","scaleType":"Melodic Minor","mode":5,"scaleTheme":0,"sid":28},{"name":"Melodic Minor, 7th Mode (Altered)","shortname":"alt","scaleType":"Melodic Minor","mode":6,"scaleTheme":0,"sid":29},{"name":"Harmonic Minor, Root Mode","shortname":"hm1","scaleType":"Harmonic Minor","mode":0,"scaleTheme":0,"sid":30},{"name":"Harmonic Minor, 2nd Mode (Locrian ♮6)","shortname":"hm2","scaleType":"Harmonic Minor","mode":1,"scaleTheme":0,"sid":31},{"name":"Harmonic Minor, 3rd Mode (Major ♯5)","shortname":"hm3","scaleType":"Harmonic Minor","mode":2,"scaleTheme":0,"sid":32},{"name":"Harmonic Minor, 4th Mode (Dorian ♯4)","shortname":"hm4","scaleType":"Harmonic Minor","mode":3,"scaleTheme":0,"sid":33},{"name":"Harmonic Minor, 5th Mode (Phrygian Dominant)","shortname":"hm5","scaleType":"Harmonic Minor","mode":4,"scaleTheme":0,"sid":34},{"name":"Harmonic Minor, 6th Mode (Lydian ♯2)","shortname":"hm6","scaleType":"Harmonic Minor","mode":5,"scaleTheme":0,"sid":35},{"name":"Harmonic Minor, 7th Mode (Altered Dominant ♭♭7 )","shortname":"atd","scaleType":"Harmonic Minor","mode":6,"scaleTheme":0,"sid":36},{"name":"Harmonic Major, Root Mode","shortname":"hM1","scaleType":"Harmonic Major","mode":0,"scaleTheme":0,"sid":37},{"name":"Harmonic Major, 2nd Mode (Dorian ♭5)","shortname":"hM2","scaleType":"Harmonic Major","mode":1,"scaleTheme":0,"sid":38},{"name":"Harmonic Major, 3rd Mode (Phrygian ♭4)","shortname":"hM3","scaleType":"Harmonic Major","mode":2,"scaleTheme":0,"sid":39},{"name":"Harmonic Major, 4th Mode (Lydian ♭3)","shortname":"hM4","scaleType":"Harmonic Major","mode":3,"scaleTheme":0,"sid":40},{"name":"Harmonic Major, 5th Mode (Mixolydian ♭2)","shortname":"hM5","scaleType":"Harmonic Major","mode":4,"scaleTheme":0,"sid":41},{"name":"Harmonic Major, 6th Mode (Lydian Augmented ♯2)","shortname":"hM6","scaleType":"Harmonic Major","mode":5,"scaleTheme":0,"sid":42},{"name":"Harmonic Major, 7th Mode (Locrian ♭♭7 )","shortname":"hM7","scaleType":"Harmonic Major","mode":6,"scaleTheme":0,"sid":43},{"name":"Diminished","shortname":"dim","scaleType":"Diminished","mode":0,"scaleTheme":0,"sid":44},{"name":"Inverted Diminished","shortname":"invD","scaleType":"Diminished","mode":1,"scaleTheme":0,"sid":45},{"name":"Whole Tone","shortname":"H","scaleType":"Whole Tone","mode":0,"scaleTheme":0,"sid":46},{"name":"Augmented","shortname":"aug","scaleType":"Augmented","mode":0,"scaleTheme":0,"sid":47},{"name":"Inverted Augmented","shortname":"augD","scaleType":"Augmented","mode":1,"scaleTheme":0,"sid":48}],"buttons":[{"group":"common","rows":[[{"name":"Major","shortname":"M","scaleType":"Major","mode":0,"scaleTheme":0,"sid":1},{"name":"Minor","shortname":"m","scaleType":"Major","mode":5,"scaleTheme":0,"sid":2},{"name":"Major Pentatonic","shortname":"M p","scaleType":"Major","mode":0,"scaleTheme":10,"sid":3},{"name":"Minor Pentatonic","shortname":"m p","scaleType":"Major","mode":5,"scaleTheme":11,"sid":4},{"name":"Blues","shortname":"blu","scaleType":"Major","mode":5,"scaleTheme":11,"sid":49}],[{"name":"Major (highlight on 3 & 5)","shortname":"M+","scaleType":"Major","mode":0,"scaleTheme":1,"sid":5},{"name":"Minor (highlight on 3 & 5)","shortname":"m+","scaleType":"Major","mode":5,"scaleTheme":1,"sid":6},{"name":"Major (highlight on Pentatonic notes)","shortname":"M+p","scaleType":"Major","mode":0,"scaleTheme":2,"sid":7},{"name":"Minor (highlight on Pentatonic notes)","shortname":"m+p","scaleType":"Major","mode":5,"scaleTheme":3,"sid":8}]]},{"group":"modes","rows":[[{"name":"Ionian (Major)","shortname":"Io","scaleType":"Major","mode":0,"scaleTheme":0,"sid":9},{"name":"Dorian","shortname":"Do","scaleType":"Major","mode":1,"scaleTheme":0,"sid":10},{"name":"Phrygian","shortname":"Ph","scaleType":"Major","mode":2,"scaleTheme":0,"sid":11},{"name":"Lydian","shortname":"Ly","scaleType":"Major","mode":3,"scaleTheme":0,"sid":12},{"name":"Mixolydian","shortname":"Mi","scaleType":"Major","mode":4,"scaleTheme":0,"sid":13},{"name":"Aeolian (Natural Minor)","shortname":"Ae","scaleType":"Major","mode":5,"scaleTheme":0,"sid":14},{"name":"Locrian","shortname":"Lo","scaleType":"Major","mode":6,"scaleTheme":0,"sid":15}],[{"name":"Ionian (No colour notes, but highlights on 3 & 5)","shortname":"Io+","scaleType":"Major","mode":0,"scaleTheme":1,"sid":16},{"name":"Dorian (colour notes: ♭3, ♭7)","shortname":"Do+","scaleType":"Major","mode":1,"scaleTheme":4,"sid":17},{"name":"Phrygian (colour notes: ♭2, ♭3, ♭6, ♭7)","shortname":"Ph+","scaleType":"Major","mode":2,"scaleTheme":5,"sid":18},{"name":"Lydian (colour notes: ♯4)","shortname":"Ly+","scaleType":"Major","mode":3,"scaleTheme":6,"sid":19},{"name":"Mixolydian (colour notes: ♭7)","shortname":"Mi+","scaleType":"Major","mode":4,"scaleTheme":7,"sid":20},{"name":"Aeolian (colour notes: ♭3, ♭6, ♭7)","shortname":"Ae+","scaleType":"Major","mode":5,"scaleTheme":8,"sid":21},{"name":"Locrian (colour notes: ♭2, ♭3, ♭5, ♭6, ♭7)","shortname":"Lo+","scaleType":"Major","mode":6,"scaleTheme":9,"sid":22}]]},{"group":"other","rows":[[]]}]}');const A=R.dropDown.flatMap((e=>e.name)),E="20";var X={name:"TopDashboard",data(){return{WIDE:"20",NARROW:"5",tickLabels:{0:"A B C",1:"1 2 3",2:"1 2 b3"},dashboardHeight:200,btScales:"common",btLabels:"abc",btSpacing:E,btOverlap:"discrete",scaleSelections:R,scaleCircles:20,itemsPerGroup:7,scalePadding:15,scStroke:3,dropDownOptions:A,dropDownSelected:""}},methods:{startDragging(e,t){const{type:n,touches:s,clientX:i,clientY:o}=e,a=e.target.getBoundingClientRect().left,r=e.target.getBoundingClientRect().top;var l=0===t;if(0===t){if(""===this.dropDownSelected)return;t=this.scaleSelections.dropDown.find((e=>e.name===this.dropDownSelected))?.sid}t&&this.$emit("scale-clicked",{sid:t,blOther:l,scaleCircles:this.scaleCircles,scaleX:a,scaleY:r,clientX:i,clientY:o,type:n,touches:s})},settingsChange(){this.$emit("settings-changed",{btSpacing:this.btSpacing,btLabels:this.btLabels})},scaleByDropDownName(e){var t;return t=R.dropDown.find((t=>t.name===e)),t||{name:"",shortname:"",scaleType:"",mode:-1,scaleTheme:-1,sid:-1}}},mounted(){this.settingsChange()},updated(){},computed:{maxNumberOfButtons(){let e=0;return R.buttons.forEach((t=>{t.rows.forEach((t=>{t.length>e&&(e=t.length)}))})),e},groupWidth(){var e=0;return R.buttons.find((e=>e.group===this.btScales)).rows.forEach(((t,n)=>{t.length>e&&(e=t.length)})),2*this.scaleCircles*e+(this.scalePadding*(e+1)+this.scStroke/2)},scaleBoxWidth(){return 2*this.scaleCircles*this.maxNumberOfButtons+(this.scalePadding*(this.maxNumberOfButtons+1)+this.scStroke/2)}}},F=n(89);const I=(0,F.Z)(X,[["render",Y]]);var z=I;const V=["width","height"],$=["width","height"],U=["x1","x2","y2"],K=["x"],q=["y1","x2","y2"],Z=["cx","cy","r","fill","fill-opacity","stroke","stroke-width","stroke-opacity"],J=["x","y","r"],Q={key:0},ee=["x","y"],te=["width","height"],ne=["cx","cy","fill","r","onClick"],se=["x","y"],ie=["y","height","width"],oe=(0,i._)("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),ae=(0,i._)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"},null,-1),re=[oe,ae];function le(e,t,n,s,a,l){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r.K,{ref:"dropArea",onMouseup:l.handleNoteDrop,onTouchend:l.handleNoteDrop,onScroll:l.handleScroll,fluid:"",style:{"overflow-x":"auto"}},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",{width:this.width,height:a.stringGap*a.strings+40},[(0,i._)("rect",{width:this.width,height:a.stringGap*a.strings,x:"0",y:"40",style:(0,o.j5)({fill:"rgba(var(--v-theme-surface))"})},null,12,$),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.frets,((e,t)=>((0,i.wg)(),(0,i.iD)("g",{key:t},[(0,i._)("line",{x1:e*a.fretGap,y1:"40",x2:e*a.fretGap,y2:a.stringGap*a.strings+40,style:(0,o.j5)({stroke:0===t||12==t?"rgba(var(--v-theme-on-surface), 1)":"rgba(var(--v-border-color), var(--v-border-opacity))",strokeWidth:"5"})},null,12,U),[3,5,7,9,12,15,17,19].includes(t)?((0,i.wg)(),(0,i.iD)("text",{key:0,x:e*a.fretGap-2.5-a.fretGap/2,y:"30","text-anchor":"middle",fill:"white"},(0,o.zw)(t),9,K)):(0,i.kq)("",!0)])))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.strings,((e,t)=>((0,i.wg)(),(0,i.iD)("g",{key:t},[(0,i._)("line",{x1:"0",y1:t*a.stringGap+a.stringGap/2+40,x2:a.neckLength,y2:t*a.stringGap+a.stringGap/2+40,style:(0,o.j5)({stroke:"rgba(var(--v-border-color), var(--v-border-opacity))"})},null,12,q)])))),128)),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.fretboard,(e=>((0,i.wg)(),(0,i.iD)("g",{key:e},[e.note.ntShow?((0,i.wg)(),(0,i.iD)("circle",{key:0,cx:e.fret*this.fretGap+this.fretGap/2+this.noteR+e.scIndex*(this.noteDiameter+this.noteGapBetween)-(a.scales.length*this.noteDiameter+this.noteGapBetween*(a.scales.length-1))/2,cy:e.string*this.stringGap+55,r:this.noteR,fill:e.fillc,"fill-opacity":e.note.ntOpacity,stroke:e.note.ntStroke?e.fillc:"none","stroke-width":e.note.ntStroke?2:0,"stroke-opacity":e.note.ntStroke?1:0},null,8,Z)):(0,i.kq)("",!0),e.note.ntShow?((0,i.wg)(),(0,i.iD)("text",{key:1,class:"scaleText",x:e.fret*this.fretGap+this.fretGap/2+this.noteR+e.scIndex*(this.noteDiameter+this.noteGapBetween)-(a.scales.length*this.noteDiameter+this.noteGapBetween*(a.scales.length-1))/2,y:e.string*this.stringGap+56,r:this.noteR,fill:"`rgba(var(--v-theme-surface))`"},["123"===this.btLabels?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[(0,i.Uk)((0,o.zw)(e.note.ntScaleNum)+" ",1)],64)):"b3"===this.btLabels?((0,i.wg)(),(0,i.iD)(i.HY,{key:1},[(0,i.Uk)((0,o.zw)(e.note.ntMajorRelNum),1)],64)):((0,i.wg)(),(0,i.iD)(i.HY,{key:2},[(0,i.Uk)((0,o.zw)(e.note.ntName),1)],64))],8,J)):(0,i.kq)("",!0)])))),128)),n.isDragging?((0,i.wg)(),(0,i.iD)("g",Q,[(0,i._)("text",{x:l.hoverX,y:n.ndY-a.neckY-(n.isMobile?60:40),class:"scaleText"},(0,o.zw)(l.noteName(l.hoverNote)),9,ee)])):(0,i.kq)("",!0)],8,V))])),_:1},8,["onMouseup","onTouchend","onScroll"]),(0,i.Wm)(r.K,{fluid:"",style:{padding:"15px"}},{default:(0,i.w5)((()=>[((0,i.wg)(),(0,i.iD)("svg",{width:this.width,height:this.scales.length*(this.noteDiameter+this.noteGapBetween)},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.scales,((e,t)=>((0,i.wg)(),(0,i.iD)("g",{key:t},[(0,i._)("circle",{cx:this.noteR+this.noteGapBetween,cy:t*(2*this.noteR+this.noteGapBetween)+this.noteR,fill:e.scColor,"fill-opacity":"1",r:this.noteR,onClick:e=>l.removeScale(t)},null,8,ne),(0,i._)("text",{"dominant-baseline":"middle","alignment-baseline":"middle",x:this.noteDiameter+10,y:t*(this.noteDiameter+this.noteGapBetween)+this.noteR,fill:"white"},(0,o.zw)(l.noteName(e.tonic)+" "+e.scName),9,se),((0,i.wg)(),(0,i.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",x:4,y:t*(this.noteDiameter+this.noteGapBetween)+1,height:2*a.noteR,width:2*a.noteR,style:{"pointer-events":"none"},fill:"#FFFFFF"},re,8,ie))])))),128))],8,te))])),_:1})],64)}n(7658);var ce=JSON.parse('[{"name":"Major","absSteps":[1,2,2,1,2,2,2]},{"name":"Melodic Minor","absSteps":[1,2,1,2,2,2,2]},{"name":"Harmonic Minor","absSteps":[1,2,1,2,2,1,3]},{"name":"Harmonic Major","absSteps":[1,2,2,1,2,1,3]},{"name":"Diminished","absSteps":[1,2,1,2,1,2,1,2]},{"name":"Whole Tone","absSteps":[2,2,2,2,2,2]},{"name":"Augmented","absSteps":[1,3,1,3,1,3]}]'),he=JSON.parse("[[1,2,2,2,2,2,2,2],[1,2,3,2,3,2,2],[1,3,3,2,3,3,2],[1,2,3,3,3,2,3],[1,2,3,2,2,2,3],[1,3,3,2,2,3,3],[1,2,2,3,2,2,2],[1,2,2,2,2,2,3],[1,2,3,2,2,3,3],[1,3,3,2,3,3,3],[1,2,2,0,2,2,0],[1,0,2,2,2,0,2]]");const de=["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];class me{constructor(e,t,n,s){switch(this.ntChromaNum=e,this.ntScaleNum=t,this.ntMajorRelNum=n,this.ntStyle=s,this.ntName=de[e],s){case 0:this.ntShow=!1,this.ntOpacity=0,this.ntStroke=!1;break;case 1:this.ntShow=!0,this.ntOpacity=1,this.ntStroke=!1;break;case 2:this.ntShow=!0,this.ntOpacity=.3,this.ntStroke=!1;break;case 3:this.ntShow=!0,this.ntOpacity=0,this.ntStroke=!0;break}}}class ue{constructor(e,t,n,s,i,o){this.scaleType=e,this.tonic="number"===typeof t?t:de.indexOf(t),this.mode=n,this.scColor=s,this.scTheme=i,this.scName=o,this.notes=[],this.setNotes()}setNotes(){const e=ce.find((e=>e.name===this.scaleType)),t=ce.find((e=>"Major"===e.name));if("undefined"===typeof e)console.log('scaleObj is undefined "'+this.scaleType+'"');else{var n=this.mode,s=0,i=this.tonic,o=this.tonic,a=this.tonic,r=this.tonic,l="",c="";do{0===s?this.notes.push(new me(this.tonic,1,1,he[this.scTheme][0])):(o=i+e.absSteps[n],r=a+t.absSteps[s],l=this.getmajorRelChar(r,o),c=l+(s+1),this.notes.push(new me(o%12,s+1,c,he[this.scTheme][s])),i=o,a=r),s++,n++,n>e.absSteps.length-1&&(n=0)}while(s<=e.absSteps.length-1);"Blues"===this.scName&&this.notes.push(new me((this.tonic+6)%12,"","♭5",3))}}getmajorRelChar(e,t){var n=Math.abs(e-t);return e>t?"♭".repeat(n):"♯".repeat(n)}hasNote(e){return this.notes.some((t=>t.ntChromaNum===e))}getNote(e){return this.notes.find((t=>t.ntChromaNum===e))}}const ge=R.buttons.flatMap((e=>e.rows)).flat(),pe=["E","B","G","D","A","E"];var fe={name:"FretBoard",props:{ndScaleID:Number,ndX:Number,ndY:Number,ndOther:Boolean,isDragging:Boolean,isMobile:Boolean,scColor:String,btSpacing:String,btLabels:String},data(){return{width:300,height:150,frets:20,strings:6,fretGap:20,stringGap:30,noteR:14,noteGapBetween:2,neckLength:1200,dropX:0,dropY:0,neckX:0,neckY:0,scales:[],fretboard:[],scrollPos:0}},computed:{noteStart(){return this.noteR+this.noteGapSides},noteGapSides(){return Number(this.btSpacing)},noteDiameter(){return 2*this.noteR},minFretGap(){var e=this.scales.length;return 0===e&&(e=1),this.noteGapSides+e*this.noteDiameter+(e-1)*this.noteGapBetween+this.noteGapSides},hoverX(){return this.ndX-this.neckX-15+this.scrollPos},hoverFret(){return Math.floor(this.hoverX/this.fretGap)},hoverString(){return Math.floor((this.ndY-this.neckY-25)/this.stringGap)-1},hoverNote(){return this.hoverFret<0||this.hoverFret>this.frets-1||this.hoverString<0||this.hoverString>this.strings-1?void 0:this.noteAdd(this.noteNum(pe[this.hoverString]),this.hoverFret)}},mounted(){window.addEventListener("resize",this.handleResize),window.addEventListener("touchend",this.handleNoteDrop),this.handleResize();const e=this.$refs.dropArea;this.neckX=e.$el.getBoundingClientRect().left,this.neckY=e.$el.getBoundingClientRect().top},updated(){this.setScrollPos(this.scrollPos),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{notePos(e){return e*(this.noteDiameter+this.noteGapBetween)},handleScroll(){const e=this.$refs.dropArea;this.scrollPos=e.$el.scrollLeft},handleResize(){var e=this.minFretGap*this.frets;document.documentElement.clientWidth-40<=e?this.width=e:this.width=document.documentElement.clientWidth-40,this.neckLength=this.width,this.fretGap=this.width/this.frets},handleNoteDrop(){this.dropX=this.ndX-this.neckX,this.dropY=this.ndY-this.neckY;const e=this.hoverFret,t=this.hoverNote;var n;if(void 0!==t&&this.isDragging&&!(this.scales.length>=5))if(n=this.ndOther?R.dropDown.find((e=>e.sid===this.ndScaleID)):ge.find((e=>e.sid===this.ndScaleID)),n){this.scales.push(new ue(n.scaleType,t,n.mode,this.scColor,n.scaleTheme,n.name)),this.buildFretboard(),this.handleResize();const s=this.noteStart+this.notePos(this.scales.length),i=e*this.fretGap,o=s+i;this.scrollPos=o-this.dropX-15,this.scrollPos<0&&(this.scrollPos=0)}else console.log("Scale not found "+this.ndScaleID)},buildFretboard(){this.fretboard.length=0;for(let e=0;e<this.frets;e++)for(let t=0;t<this.strings;t++){let n=this.noteAdd(this.noteNum(pe[t]),e),s=this.scales.filter((e=>e.notes.some((e=>e.ntChromaNum===n)))).length,i=0;this.scales.forEach(((o,a)=>{let r=o.getNote(n);void 0!==r&&(this.fretboard.push({noteCount:s,ntIndex:i,scIndex:a,fret:e,string:t,note:r,fillc:o.scColor,desc:o.scName}),i++)}))}},setScrollPos(e){const t=this.$refs.dropArea;t.$el.scrollLeft=e},removeScale(e){const t=document.documentElement.clientWidth/2+this.scrollPos,n=Math.floor((t-20)/this.fretGap),s=t%this.fretGap,i=s/this.fretGap;this.scales.splice(e,1),this.buildFretboard(),this.handleResize();const o=n*this.fretGap+i*this.fretGap,a=o-document.documentElement.clientWidth/2;this.scrollPos=a,this.scrollPos<0&&(this.scrollPos=0),this.setScrollPos(a)},noteName(e){return de[e]},noteNum(e){return de.indexOf(e)},noteAdd(e,t){return(e+t)%12},testtouch(e){console.log(e)}}};const we=(0,F.Z)(fe,[["render",le]]);var ye=we,ve={data(){return{noteCircles:15,ndX:40,ndY:40,ndOther:!1,isDragging:!1,ndScaleID:0,ndOffX:10,ndOffY:10,isMobile:!1,scColors:["#FF9F1C","#1A91FF","#8AC926","#E72AB2","#1BD9E5"],colIndex:0,btSpacing:"",btLabels:""}},components:{TopDashboard:z,FretBoard:ye},methods:{startDragging(e){this.isDragging=!0,this.ndOffX=this.clientX(e)-e.scaleCircles-e.scaleX,this.ndOffY=this.clientY(e)-e.scaleCircles-e.scaleY,this.ndX=this.clientX(e)-this.ndOffX,this.ndY=this.clientY(e)-this.ndOffY+window.scrollY,this.ndScaleID=e.sid,this.ndOther=e.blOther},changeSettings(e){this.btSpacing=e.btSpacing,this.btLabels=e.btLabels},dragging(e){this.isDragging&&(this.ndX=this.clientX(e)-this.ndOffX,this.ndY=this.clientY(e)-this.ndOffY+window.scrollY)},stopDragging(){!0===this.isDragging&&(this.colIndex++,this.colIndex>=this.scColors.length&&(this.colIndex=0),this.isDragging=!1)},clientX(e){return e.type.startsWith("touch")?(this.isMobile=!0,e.touches[0].clientX):(this.isMobile=!1,e.clientX)},clientY(e){return e.type.startsWith("touch")?e.touches[0].clientY:e.clientY}},mounted(){window.addEventListener("mousemove",this.dragging,{passive:!0}),window.addEventListener("touchmove",this.dragging,{passive:!0}),window.addEventListener("mouseup",this.stopDragging,{passive:!0}),window.addEventListener("touchend",this.stopDragging,{passive:!0})},beforeUnmount(){window.removeEventListener("mousemove",this.dragging,{passive:!0}),window.removeEventListener("touchmove",this.dragging,{passive:!0}),window.removeEventListener("mouseup",this.stopDragging,{passive:!0}),window.removeEventListener("touchend",this.stopDragging,{passive:!0})}};const be=(0,F.Z)(ve,[["render",d]]);var Me=be,Te=(n(9773),n(8957)),xe=(0,Te.Rd)({theme:{defaultTheme:"dark"}});async function De(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}De(),(0,s.ri)(Me).use(xe).mount("#app")}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,o){if(!s){var a=1/0;for(h=0;h<e.length;h++){s=e[h][0],i=e[h][1],o=e[h][2];for(var r=!0,l=0;l<s.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(r=!1,o<a&&(a=o));if(r){e.splice(h--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[s,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(s,i){if(1&i&&(s=this(s)),8&i)return s;if("object"===typeof s&&s){if(4&i&&s.__esModule)return s;if(16&i&&"function"===typeof s.then)return s}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var r=2&i&&s;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){a[e]=function(){return s[e]}}));return a["default"]=function(){return s},n.d(o,a),o}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.3b044e4c.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Vuetar:";n.l=function(s,i,o,a){if(e[s])e[s].push(i);else{var r,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),h=0;h<c.length;h++){var d=c[h];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+o){r=d;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+o),r.src=s),e[s]=[i];var m=function(t,n){r.onerror=r.onload=null,clearTimeout(u);var i=e[s];if(delete e[s],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(e){return e(n)})),t)return t(n)},u=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/SVGExperiment/"}(),function(){var e={143:0};n.f.j=function(t,s){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)s.push(i[2]);else{var o=new Promise((function(n,s){i=e[t]=[n,s]}));s.push(i[2]=o);var a=n.p+n.u(t),r=new Error,l=function(s){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.src;r.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",r.name="ChunkLoadError",r.type=o,r.request=a,i[1](r)}};n.l(a,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,o,a=s[0],r=s[1],l=s[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(l)var h=l(n)}for(t&&t(s);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(h)},s=self["webpackChunkVuetar"]=self["webpackChunkVuetar"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(4292)}));s=n.O(s)})();
//# sourceMappingURL=app.129bf3ea.js.map