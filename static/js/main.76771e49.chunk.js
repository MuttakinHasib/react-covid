(this["webpackJsonpcovid-react-app"]=this["webpackJsonpcovid-react-app"]||[]).push([[0],{160:function(e,a,t){e.exports=t(344)},166:function(e,a,t){},167:function(e,a,t){},24:function(e,a,t){e.exports=t.p+"static/media/deaths-large.b379f9d1.png"},344:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),s=t(3),o=t.n(s),i=t(7),m=t(134),d=t(135),u=t(157),v=t(159),f=(t(166),t(167),t(24)),p=t.n(f),E=function(){return r.a.createElement("div",{className:"navbar sticky-top bg-white border-bottom"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("img",{className:"logo",src:p.a,style:{width:"55px"},alt:"logo"}),r.a.createElement("h5",{className:"mb-0 font-weight-bold"},"COVID-19 ",r.a.createElement("br",null),r.a.createElement("small",{className:"text-muted font-weight-light"},"Corona Virus"))),r.a.createElement("ul",{className:"navbar-nav flex-row ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"https://facebook.com/hasibmolla28/",className:"nav-link icon facebook"},r.a.createElement("i",{className:"fab fa-facebook"}))),r.a.createElement("li",{className:"nav-item ml-3"},r.a.createElement("a",{href:"https://github.com/MuttakinHasib/",className:"nav-link icon github"},r.a.createElement("i",{className:"fab fa-github"}))))))},h=t(11),g=t.n(h),N=t(43),y=t.n(N),b=t(44),w=t.n(b),x=t(136),C=t.n(x),k=t(35),j=t(137),O=t(138),D=t.n(O),L=new j.NovelCovid,S=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n,r,l,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.all();case 3:return a=e.sent,t=a.cases,n=a.todayCases,r=a.recovered,l=a.deaths,c=a.todayDeaths,s=a.updated,i={cases:t,todayCases:n,recovered:r,todayDeaths:c,deaths:l,updated:s},e.abrupt("return",i);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(o.a.mark((function e(a){var t,n,r,l,c,s,i,m,d,u,v,f;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="Bangladesh",a&&(t=a),e.prev=2,e.next=5,L.countries(t);case 5:return n=e.sent,r=n.country,l=n.countryInfo,c=n.cases,s=n.todayCases,i=n.recovered,m=n.deaths,d=n.todayDeaths,u=n.critical,v=n.updated,f={country:r,flag:l.flag,cases:c,todayCases:s,recovered:i,todayDeaths:d,deaths:m,critical:u,updated:v},e.abrupt("return",f);case 19:e.prev=19,e.t0=e.catch(2),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(a){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.countries();case 3:return a=e.sent,e.abrupt("return",a.map((function(e){return{country:e.country,code:e.countryInfo.iso2,flag:e.countryInfo.flag}})));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(i.a)(o.a.mark((function e(){var a,t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(" https://covid19.mathdro.id/api","/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=t(62),T=function(){return r.a.createElement("svg",{className:"clock",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",version:"1.1",viewBox:"0 0 100 100",xmlSpace:"preserve"},r.a.createElement("circle",{cx:"50",cy:"50",r:"48",fill:"none",stroke:"#f36",strokeMiterlimit:"10",strokeWidth:"4"}),r.a.createElement("path",{fill:"none",stroke:"rgb(29, 209, 161)",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"4",d:"M50 50L85 50.5"},r.a.createElement("animateTransform",{attributeName:"transform",dur:"2s",from:"0 50 50",repeatCount:"indefinite",to:"360 50 50",type:"rotate"})),r.a.createElement("path",{fill:"none",stroke:"rgba(26, 16, 83, 0.603)",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"4",d:"M50 50L49.5 74"},r.a.createElement("animateTransform",{attributeName:"transform",dur:"15s",from:"0 50 50",repeatCount:"indefinite",to:"360 50 50",type:"rotate"})))},V=function(){var e=Object(n.useState)({}),a=Object(k.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),(null===t||void 0===t?void 0:t.cases)?(null===t||void 0===t?void 0:t.cases)?r.a.createElement(B.a,{data:{labels:["Confirmed","Deaths","Recovered"],datasets:[{label:"COVID-19",backgroundColor:["rgba(26, 16, 83, 0.603)","rgb(255, 99, 132)","rgb(29, 209, 161)"],borderColor:"#fff",data:[null===t||void 0===t?void 0:t.cases,null===t||void 0===t?void 0:t.deaths,null===t||void 0===t?void 0:t.recovered]}]}}):null:r.a.createElement(T,null)},W=function(e){var a=e.data;return r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row py-5 justify-content-between align-items-center global"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row justify-content-between align-items-center"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h3",null,"Global information : ")),r.a.createElement("div",{className:"col-sm-6 text-sm-right"},r.a.createElement("h5",null,(null===a||void 0===a?void 0:a.updated)?r.a.createElement("small",{className:"text-muted"},"Last updated ",r.a.createElement(C.a,{fromNow:!0},null===a||void 0===a?void 0:a.updated)):r.a.createElement("small",{className:"text-info"},"Updating . . ."))))),r.a.createElement("div",{className:"col-lg-8 text-center my-3"},r.a.createElement(V,null)),r.a.createElement("div",{className:"col-lg-4 my-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-12 my-3"},r.a.createElement("div",{className:"row cases shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:y.a,alt:"Cases",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-info"},(null===a||void 0===a?void 0:a.cases)?r.a.createElement(g.a,{start:0,end:null===a||void 0===a?void 0:a.cases,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Confirmed")))),r.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-12 my-3"},r.a.createElement("div",{className:"row deaths shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:p.a,alt:"Deaths",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-danger"},(null===a||void 0===a?void 0:a.deaths)?r.a.createElement(g.a,{start:0,end:null===a||void 0===a?void 0:a.deaths,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Deaths")))),r.a.createElement("div",{className:"col-md-6 col-sm-12 col-lg-12 my-3"},r.a.createElement("div",{className:"row recovered shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:w.a,alt:"Recovered",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-success"},(null===a||void 0===a?void 0:a.recovered)?r.a.createElement(g.a,{start:0,end:null===a||void 0===a?void 0:a.recovered,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Recovered")))))))))},z=function(){var e=Object(n.useState)([]),a=Object(k.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,R();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var c=(null===t||void 0===t?void 0:t.length)?r.a.createElement(B.b,{data:{labels:t.map((function(e){return e.date})),datasets:[{data:t.map((function(e){return e.confirmed})),label:"Confirmed",backgroundColor:"#ffaa0057",fill:!0},{data:t.map((function(e){return e.deaths})),label:"Deaths",backgroundColor:"rgba(255, 51, 102, 0.815)",fill:!0}]},options:{title:{display:!0,text:"Coronavirus around the world",fontSize:25}}}):null;return r.a.createElement("div",{className:"my-5"},c)},H=t(346),J=H.a.Option,U=function(e){var a=e.handleCountryChange,t=e.localData,l=Object(n.useState)([]),c=Object(k.a)(l,2),s=c[0],m=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),r.a.createElement("div",null,r.a.createElement("div",{className:"row justify-content-between align-items-center p-3"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",{className:"mb-5"},"Local Country's Information")),r.a.createElement("div",{className:"my-3 d-flex align-items-center"},r.a.createElement("h4",{className:"mb-0"},(null===t||void 0===t?void 0:t.country)?null===t||void 0===t?void 0:t.country:r.a.createElement("small",{className:"text-primary"},"Loading . . .")),"\xa0 \xa0",r.a.createElement("div",null,(null===t||void 0===t?void 0:t.flag)?r.a.createElement("img",{src:null===t||void 0===t?void 0:t.flag,style:{width:"35px"},alt:null===t||void 0===t?void 0:t.country}):null)),r.a.createElement("div",{className:"my-3"},r.a.createElement("div",{className:"form-row"},r.a.createElement(H.a,{onChange:function(e){return a(e)},showSearch:!0,size:"large",style:{width:200},placeholder:"Select a Country",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(J,{value:"bangladesh"},"Bangladesh"),null===s||void 0===s?void 0:s.map((function(e,a){return r.a.createElement(J,{key:a,value:e.code},e.country)})))))),r.a.createElement("div",{className:"row local"},r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row cases shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:y.a,alt:"Cases",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-info"},(null===t||void 0===t?void 0:t.cases)?r.a.createElement(g.a,{start:0,end:null===t||void 0===t?void 0:t.cases,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Confirmed")))),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row deaths shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:p.a,alt:"Deaths",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-danger"},(null===t||void 0===t?void 0:t.deaths)?r.a.createElement(g.a,{start:0,end:null===t||void 0===t?void 0:t.deaths,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Deaths")))),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row recovered shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:w.a,alt:"Recovered",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-success"},(null===t||void 0===t?void 0:t.recovered)?r.a.createElement(g.a,{start:0,end:null===t||void 0===t?void 0:t.recovered,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Recovered"))))),r.a.createElement("div",{className:"row local"},r.a.createElement("div",{className:"col-md-12 my-3 py-3 text-left"},r.a.createElement("h3",null,"Today's Last Updates :")),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row cases shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:y.a,alt:"Cases",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-info"},(null===t||void 0===t?void 0:t.todayCases)?r.a.createElement(g.a,{start:0,end:null===t||void 0===t?void 0:t.todayCases,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"New Cases")))),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row deaths shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:p.a,alt:"Deaths",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-danger"},(null===t||void 0===t?void 0:t.todayDeaths)?r.a.createElement(g.a,{start:0,end:null===t||void 0===t?void 0:t.todayDeaths,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"New Deaths")))),r.a.createElement("div",{className:"col-md-4 my-3"},r.a.createElement("div",{className:"row recovered shadow align-items-center justify-content-between no-gutters"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:w.a,alt:"Recovered",className:"img-fluid logo"})),r.a.createElement("div",{className:"col-8"},r.a.createElement("h2",{className:"text-warning"},(null===t||void 0===t?void 0:t.critical)?r.a.createElement(g.a,{start:0,end:null===t||void 0===t?void 0:t.critical,duration:2.3,separator:","}):r.a.createElement("small",{className:"text-primary"},"Loading . . .")),r.a.createElement("p",{className:"text-muted"},"Critical"))))))},q=t(156),A=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"lead text-center p-4"},"Made with ",r.a.createElement("i",{className:"fas heart fa-heart"})," by"," ",r.a.createElement(q.a,{href:"https://facebook.com/hasibmolla28/",target:"_blank"},"Hasib"))))},F=function(e){Object(v.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={data:{},localData:{},country:"",flag:""},e.handleCountryChange=function(){var a=Object(i.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,M(t);case 2:n=a.sent,e.setState({localData:n});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S();case 3:return a=e.sent,e.next=6,M();case 6:t=e.sent,this.setState({data:a,localData:t}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.localData;return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(W,{data:a}),r.a.createElement("div",{className:"container"},r.a.createElement(U,{localData:t,handleCountryChange:this.handleCountryChange}),r.a.createElement(z,null),r.a.createElement(A,null)))}}]),t}(n.Component);c.a.render(r.a.createElement(F,null),document.querySelector("#root"))},43:function(e,a,t){e.exports=t.p+"static/media/cases.feea5fb1.png"},44:function(e,a,t){e.exports=t.p+"static/media/recovered.66525ad4.png"}},[[160,1,2]]]);
//# sourceMappingURL=main.76771e49.chunk.js.map