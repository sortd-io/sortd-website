(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),o=a.n(n),r=a(302),i=a(202),l=a(362),p=a.n(l),s=(a(529),a(658)),c=a.n(s),m=(a(531),a(301)),u=a(256),d=(a(206),a(200)),h=a(544),f=a.n(h),g=a(545),v=a.n(g),b=a(546),E=a.n(b),y=a(547),w=a.n(y),x=(a(33),a(26),a(368)),C=a.n(x),k=(a(369),a(549),a(655)),S=a.n(k),N=(a(240),a(232)),j=a.n(N),M=(a(287),a(385)),A=a.n(M),F=(a(214),a(191)),O=a.n(F),_=(a(57),a(370),a(377)),z=a.n(_),D=(a(553),a(560)),I=a.n(D),q=a(371),P=a.n(q),L=a(303);function R(e,t,a,n,o,r,i){try{var l=e[r](i),p=l.value}catch(s){return void a(s)}l.done?t(p):Promise.resolve(p).then(n,o)}function B(e){return function(){var t=this,a=arguments;return new Promise(function(n,o){var r=e.apply(t,a);function i(e){R(r,n,o,i,l,"next",e)}function l(e){R(r,n,o,i,l,"throw",e)}i(void 0)})}}I.a.Text;var T=z.a.create({name:"global_state",onFieldsChange:function(e,t){e.onChange(t)},mapPropsToFields:function(e){return{email:z.a.createFormField(Object.assign({},e.email,{value:e.email.value})),name:z.a.createFormField(Object.assign({},e.name,{value:e.name.value}))}},onValuesChange:function(e,t){console.log(t)}})(function(e){var t=e.form.getFieldDecorator,a=e.status,n=e.message;return console.log(a),console.log(e),o.a.createElement(z.a,{layout:"inline"},o.a.createElement(z.a.Item,{style:{marginRight:0}},t("email",{rules:[{required:!0,message:"Email Address is required!"}]})(o.a.createElement(A.a,{className:"mainInput",prefix:o.a.createElement(O.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email Address"}))),o.a.createElement(z.a.Item,null,o.a.createElement(j.a,{loading:e.submitting,type:"primary",onClick:function(){return e.onSubmit({props:e})}},"Get Early Access")),"error"===a&&o.a.createElement(S.a,{style:{marginTop:"12px"},color:"volcano"},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})),"success"===a&&o.a.createElement(S.a,{style:{marginTop:"12px"},color:"geekblue"},"Thanks! We'll be in touch shortly."))}),V=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={fields:{email:{value:""},name:{value:""}}},t.handleFormChange=function(e){t.setState(function(t){var a=t.fields;return{fields:Object.assign({},a,{},e)}})},t._handleSubmit=function(){var e=B(C.a.mark(function e(a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t.props.form.validateFields(function(){var e=B(C.a.mark(function e(t,a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,P()(a.email);case 4:e.sent;case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=(this.props.form.getFieldDecorator,this.props.form,this.state.fields);return o.a.createElement(L.a,{url:"https://rockt.us17.list-manage.com/subscribe/post?u=f11728abdca6d9c4e72f748bf&amp;id=3e22517e03",render:function(a){var n=a.subscribe,r=a.status,i=a.message;return o.a.createElement("div",null,o.a.createElement(T,Object.assign({},t,{submitting:"sending"===r,onChange:e.handleFormChange,onSubmit:function(){return n({EMAIL:t.email.value,NAME:t.name.value||""})},status:r,message:i})))}})},n}(o.a.Component),H=z.a.create({name:"signup_form"})(V);a(657);var U=function(e){var t=e.isMobile;return e.location,o.a.createElement("div",{className:"banner-wrapper"},t&&o.a.createElement(u.default,{animation:{opacity:1},height:"100%",className:"banner-image-wrapper"},o.a.createElement("div",{className:"device-wrapper",style:{maxWidth:"100%"}},o.a.createElement("div",{className:"device","data-device":"MacbookPro","data-orientation":"portrait","data-color":"black"},o.a.createElement("div",{className:"screen"},o.a.createElement(c.a,{className:"home-banner-anim",autoplay:!0},o.a.createElement("div",{padding:"12px"},o.a.createElement("img",{width:"100%",height:"100%",alt:"Change Snapshot",src:f.a})),o.a.createElement("div",{padding:"12px"},o.a.createElement("img",{width:"100%",height:"100%",alt:"Readiness Assessment",src:v.a})),o.a.createElement("div",{padding:"12px"},o.a.createElement("img",{width:"100%",height:"100%",alt:"Project Sizing",src:E.a}))))))),o.a.createElement(m.a,{className:"banner-title-wrapper",type:t?"bottom":"right"},o.a.createElement("div",{key:"line",className:"title-line-wrapper"},o.a.createElement("div",{className:"title-line",style:{transform:"translateX(-64px)"}})),o.a.createElement("h1",{key:"h1"},o.a.createElement("img",{src:w.a,width:160})),o.a.createElement("p",{key:"content"},o.a.createElement(i.a,{id:"app.home.slogan"})),o.a.createElement("div",{className:"signupLabel"},"Be one of the first to try it - sign up now for early access"),o.a.createElement("div",{key:"button",className:"button-wrapper"},o.a.createElement(H,null))),!t&&o.a.createElement(u.default,{animation:{opacity:1},height:"100%",className:"banner-image-wrapper"},o.a.createElement("div",{className:"device-wrapper",style:{maxWidth:"100%"}},o.a.createElement("div",{className:"device","data-device":"MacbookPro","data-orientation":"portrait","data-color":"black"},o.a.createElement("div",{className:"screen"},o.a.createElement(c.a,{className:"home-banner-anim",autoplay:!0},o.a.createElement("div",{padding:"12px"},o.a.createElement("img",{width:"100%",height:"100%",alt:"Change Snapshot",src:f.a})),o.a.createElement("div",{padding:"12px"},o.a.createElement("img",{width:"100%",height:"100%",alt:"Readiness Assessment",src:v.a})),o.a.createElement("div",{padding:"12px"},o.a.createElement("img",{width:"100%",height:"100%",alt:"Project Sizing",src:E.a}))))))))},W=(a(123),a(386)),G=a.n(W),Y=a(673),K=a.n(Y);var X=u.default.TweenOneGroup,Q=[{title:"优雅美观",content:"基于 Ant Design 体系精心设计",src:"https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg",color:"#13C2C2",shadowColor:"rgba(19,194,194,.12)"},{title:"常见设计模式",content:"提炼自中后台应用的典型页面和场景",src:"https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg",color:"#2F54EB",shadowColor:"rgba(47,84,235,.12)"},{title:"最新技术栈",content:"使用 React/dva/antd 等前端前沿技术开发",src:"https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg",color:"#F5222D",shadowColor:"rgba(245,34,45,.12)"},{title:"响应式",content:"针对不同屏幕大小设计",src:"https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg",color:"#1AC44D",shadowColor:"rgba(26,196,77,.12)"},{title:"主题",content:"可配置的主题满足多样化的品牌诉求",src:"https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg",color:"#FAAD14",shadowColor:"rgba(250,173,20,.12)"},{title:"国际化",content:"内建业界通用的国际化方案",src:"https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg",color:"#722ED1",shadowColor:"rgba(114,46,209,.12)"}],J=[{title:"Increase Collaboration",content:"Employee involvement is one of the greatest contributors to change success",src:"https://gw.alipayobjects.com/zos/rmsportal/VriUmzNjDnjoFoFFZvuh.svg",color:"#13C2C2",shadowColor:"rgba(19,194,194,.12)"},{title:"Centralise Change Management",content:"No more storing change documents in a drawer under your desk",src:"https://gw.alipayobjects.com/zos/rmsportal/smwQOoxCjXVbNAKMqvWk.svg",color:"#2F54EB",shadowColor:"rgba(47,84,235,.12)"},{title:"Leverage Data",content:"Interactive reporting on change initiatives enables increased business value",src:"https://gw.alipayobjects.com/zos/rmsportal/hBbIHzUsSbSxrhoRFYzi.svg",color:"#F5222D",shadowColor:"rgba(245,34,45,.12)"},{title:"Be Best Practice",content:"Built on best practice change principals, Sortd ensures your doing the right thing at each step",src:"https://gw.alipayobjects.com/zos/rmsportal/BISfzKcCNCYFmTYcUygW.svg",color:"#1AC44D",shadowColor:"rgba(26,196,77,.12)"},{title:"Control Documentation",content:"Ensure everyone in your organisation is using the same change tools",src:"https://gw.alipayobjects.com/zos/rmsportal/XxqEexmShHOofjMYOCHi.svg",color:"#FAAD14",shadowColor:"rgba(250,173,20,.12)"},{title:"Save Time",content:"Spend less time planning and more time changing",src:"https://gw.alipayobjects.com/zos/rmsportal/JsixxWSViARJnQbAAPkI.svg",color:"#722ED1",shadowColor:"rgba(114,46,209,.12)"}],Z=[{x:-30,y:-10},{x:20,y:-20},{x:-65,y:15},{x:-45,y:80},{x:35,y:5},{x:50,y:50,opacity:.2}],$=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).onMouseOver=function(e){a.setState({hoverNum:e})},a.onMouseOut=function(){a.setState({hoverNum:null})},a.getEnter=function(e){var t=e.index,a=2*Math.random()-1,n=10*Math.random()+5,o=Math.round(Math.random()*(50*t));return[Object.assign({delay:o,opacity:.4},Z[e.index],{ease:"easeOutBack",duration:300}),{y:a>0?"+="+n:"-="+n,duration:1e3*Math.random()+2e3,yoyo:!0,repeat:-1}]},a.state={hoverNum:null},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.state.hoverNum,a=this.props,n=a.intl,r=a.isMobile,i=[[],[],[]];return("zh-CN"===n.locale?Q:J).forEach(function(a,n){var l=t===n,p=["point-0 left","point-0 right","point-ring","point-1","point-2","point-3"].map(function(e){return o.a.createElement(u.default,{component:"i",className:e,key:e,style:{background:a.color,borderColor:a.color}})}),s=o.a.createElement("li",{key:n.toString()},o.a.createElement("div",{className:"page1-box",onMouseEnter:function(){e.onMouseOver(n)},onMouseLeave:e.onMouseOut},o.a.createElement(X,{className:"page1-point-wrapper",enter:e.getEnter,leave:{x:0,y:30,opacity:0,duration:300,ease:"easeInBack"},resetStyle:!1,exclusive:!0},(r||l)&&p),o.a.createElement("div",{className:"page1-image",style:{boxShadow:(l?"0 12px 24px":"0 6px 12px")+" "+a.shadowColor}},o.a.createElement("img",{src:a.src,alt:"img",style:4===n?{marginLeft:-15}:{}})),o.a.createElement("h3",null,a.title),o.a.createElement("p",null,a.content)));i[Math.floor(n/3)].push(s)}),i=i.map(function(e,t){return o.a.createElement(m.a,{className:"page1-box-wrapper",key:t.toString(),type:"bottom",leaveReverse:!0,delay:[100*t,100*(i.length-1-t)],component:"ul"},e)}),o.a.createElement("div",{className:"home-page page1"},o.a.createElement("div",{className:"home-page-wrapper",id:"page1-wrapper"},!r&&o.a.createElement(K.a,{className:"page1-bg",animation:{translateY:200,ease:"linear",playScale:[0,1.65]},location:"page1-wrapper"},"Benefits"),o.a.createElement("h2",null,"What can ",o.a.createElement("span",null,"Sortd")," do for you"," "),o.a.createElement("div",{className:"title-line-wrapper page1-line"},o.a.createElement("div",{className:"title-line"})),o.a.createElement(G.a,null,i)))},n}(o.a.PureComponent),ee=Object(i.d)($),te=(a(675),a(677)),ae=a.n(te);function ne(e,t,a,n,o,r,i){try{var l=e[r](i),p=l.value}catch(s){return void a(s)}l.done?t(p):Promise.resolve(p).then(n,o)}function oe(e){return function(){var t=this,a=arguments;return new Promise(function(n,o){var r=e.apply(t,a);function i(e){ne(r,n,o,i,l,"next",e)}function l(e){ne(r,n,o,i,l,"throw",e)}i(void 0)})}}var re=z.a.create({name:"global_state",onFieldsChange:function(e,t){e.onChange(t)},mapPropsToFields:function(e){return{email:z.a.createFormField(Object.assign({},e.email,{value:e.email.value})),name:z.a.createFormField(Object.assign({},e.name,{value:e.name.value}))}},onValuesChange:function(e,t){console.log(t)}})(function(e){var t=e.form.getFieldDecorator;return console.log(e),o.a.createElement(z.a,{layout:"horizontal"},o.a.createElement(z.a.Item,null,t("email",{rules:[{required:!0,message:"Email Address is required!"}]})(o.a.createElement(A.a,{prefix:o.a.createElement(O.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),type:"email",placeholder:"Email Address"}))),o.a.createElement(z.a.Item,null,t("name")(o.a.createElement(A.a,{prefix:o.a.createElement(O.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),type:"name",placeholder:"Name"}))),o.a.createElement(z.a.Item,null,o.a.createElement(j.a,{loading:e.submitting,type:"primary",onClick:function(){return e.onSubmit({props:e})}},"Sign Up")))}),ie=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={fields:{email:{value:""},name:{value:""}}},t.handleFormChange=function(e){t.setState(function(t){var a=t.fields;return{fields:Object.assign({},a,{},e)}})},t._handleSubmit=function(){var e=oe(C.a.mark(function e(a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t.props.form.validateFields(function(){var e=oe(C.a.mark(function e(t,a){return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,P()(a.email);case 4:e.sent;case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=(this.props.form.getFieldDecorator,this.props.form,this.state.fields);return o.a.createElement(L.a,{url:"https://rockt.us17.list-manage.com/subscribe/post?u=f11728abdca6d9c4e72f748bf&amp;id=3e22517e03",render:function(a){var n=a.subscribe,r=a.status,i=a.message;return o.a.createElement("div",null,"error"!==r&&"success"!==r&&o.a.createElement(re,Object.assign({},t,{submitting:"sending"===r,onChange:e.handleFormChange,onSubmit:function(){return n({EMAIL:t.email.value,NAME:t.name.value||""})}})),"error"===r&&o.a.createElement(ae.a,{status:"error",title:"Error signing up",subTitle:i,extra:o.a.createElement(j.a,{onClick:function(){return r=null}},"Try Again")}),"success"===r&&o.a.createElement(ae.a,{status:"success",title:"We'll be in touch shortly!",extra:o.a.createElement(j.a,{type:"primary"},"Back")}))}})},n}(o.a.Component),le=z.a.create({name:"signup_form"})(ie);var pe=function(e){var t=e.location;return d.d(t.pathname),o.a.createElement("div",{className:"home-page page2"},o.a.createElement("div",{className:"home-page-wrapper"},o.a.createElement("div",{className:"title-line-wrapper page2-line"},o.a.createElement("div",{className:"title-line"})),o.a.createElement("h2",null,"Let’s get ",o.a.createElement("span",null,"Sortd")),o.a.createElement(G.a,null,o.a.createElement(m.a,{key:"queue",type:"bottom",leaveReverse:!0,className:"page2-content"},o.a.createElement("div",{key:"code1",className:"subscribe"},o.a.createElement("p",{key:"p",className:"page-content"},o.a.createElement(i.a,{id:"app.home.letspro"})),o.a.createElement(le,null))))))};var se=Object(i.d)(function(e){var t=e.intl;return o.a.createElement(p.a,{title:"Sortd - "+t.formatMessage({id:"app.home.slogan"})},o.a.createElement("div",{className:"home-wrapper"},o.a.createElement(U,e),o.a.createElement(ee,e),o.a.createElement(pe,e)))}),ce=a(300);t.default=function(e){var t="undefined"==typeof window;return o.a.createElement(ce.a,e,o.a.createElement(r.a,{query:"(max-width: 599px)"},function(a){return o.a.createElement(se,Object.assign({},e,{isMobile:a&&!t}))}))}},200:function(e,t,a){"use strict";a.d(t,"d",function(){return n}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"e",function(){return l});a(28),a(129),a(132),a(12),a(238);function n(e){return"/"===e?"undefined"!=typeof window&&"zh-CN"===(localStorage?localStorage.getItem("locale"):"en-US"):/-cn/.test(e)}function o(e,t){var a=e.startsWith("/")?e:"/"+e;return"/"===(a=a.replace("-cn",""))||"/index"===a?t?"/index-cn":"/":t?a.endsWith("/")?a.substring(0,a.length-1)+"-cn":a+"-cn":""+a}function r(e,t){var a=e.map(function(e){return e.meta}),n={topLevel:{}};return a.sort(function(e,t){return(e.order||0)-(t.order||0)}).forEach(function(e){var a=e.category&&e.category[t]||e.category||"topLevel";n[a]||(n[a]={});var o=e.type||"topLevel";n[a][o]||(n[a][o]=[]),n[a][o].push(e)}),n}function i(){var e=window.localStorage;try{return e.setItem("test","1"),e.removeItem("test"),!0}catch(t){return!1}}var l=function(e){var t=e.title;return Object.assign({},e,{title:{"zh-CN":t.zh_CN,"en-US":t.en_US}})}},206:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(60),i=a.n(r);a.d(t,"a",function(){return i.a});a(224),a(7).default.enqueue,o.a.createContext({})},224:function(e,t,a){var n;e.exports=(n=a(259))&&n.default||n},259:function(e,t,a){"use strict";a.r(t);a(28);var n=a(0),o=a.n(n),r=a(96);t.default=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},260:function(e,t,a){e.exports=a.p+"static/full-logo-2493686f19cb222ed1486649dc1e4777.png"},300:function(e,t,a){"use strict";a(53),a(54),a(26),a(121),a(304);var n=a(281),o=a.n(n),r=(a(28),a(0)),i=a.n(r),l=a(202),p=a(361),s=a.n(p),c=a(302),m=a(315),u={locale:"en-US",data:a.n(m).a,messages:{"app.header.search":"Search...","app.header.search.all":"Search in Google: ","app.header.search.doc":"Docs","app.header.search.component":"Components","app.header.menu.home":"Home","app.header.menu.docs":"Docs","app.header.menu.components":"Components","app.header.menu.resource":"Resources","app.header.lang":"中文","app.content.edit-page":"Edit this page on GitHub!","app.content.modifiedTime":"Last updated on ","app.content.edit-demo":"Edit this demo on GitHub!","app.component.examples":"Examples","app.component.refer.title":"Usage:","app.component.refer.desc":"Learning more to visit: ","app.component.refer.link":"Using Pro Components Alone","app.demo.copy":"Copy code","app.demo.copied":"Copied!","app.demo.codepen":"Open in CodePen","app.demo.riddle":"Open in Riddle","app.demo.codesandbox":"Open in CodeSandbox","app.home.slogan":"Collaborative Organisational Change Management Platform","app.home.preview":"Preview","app.home.start":"Getting Started","app.home.download":"Download","app.home.letspro":"Being the first to know always feels great! Sign up below to get early access to our platform.","app.home.selectpro":"Select Ant Design Pro","app.home.selectlanguage":"Select language you use","app.home.openbrowser":"open browser and visit","app.home.needhelp":"Need help? You can see {docs} and {faq} first, and {ask} in GitHub if they don't help.","app.home.docs":"documentation","app.home.faq":"faq","app.home.ask":"ask questions","app.footer.repo":"GitHub Repository","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"China Mirror 🇨🇳","app.footer.primary-color-changed":"Change primary color successfully!","app.footer.scaffold":"Scaffold","app.footer.kitchen":"Sketch Toolkit","app.footer.landing":"Landing Templates","app.footer.scaffolds":"Scaffold Market","app.footer.dev-tools":"Developer Tools","app.footer.dva":"Framework","app.footer.resources":"Resources","app.footer.data-vis":"Data Visualization","app.footer.eggjs":"Enterprise Node Framework","app.footer.motion":"Motion Solution","app.footer.antd-library":"Axure library","app.footer.design-platform":"Ant Financial Design Platform","app.footer.antux":"Sitemap Template","app.footer.community":"Community","app.footer.help":"Help","app.footer.change-log":"Change Log","app.footer.faq":"FAQ","app.footer.feedback":"Feedback","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"Chat Room (English)","app.footer.discuss-cn":"Chat Room (中文)","app.footer.bug-report":"Bug Report","app.footer.issues":"Issues","app.footer.version":"Version: ","app.footer.author":"Created by AFX","app.footer.work_with_us":"Work with Us","app.footer.more-product":"More Products","app.footer.company":"Sortd","app.footer.quicklinks":"Quick Links","app.footer.aboutus":"About Us","app.footer.ant-design":"UI Design Language","app.footer.yuque":"YuQue","app.footer.yuque.slogan":"Write your document as a team","app.footer.fengdie":"FengDie","app.footer.fengdie.slogan":"Mobile web app builder","app.footer.zhihu":"Zhihu","app.footer.zhihu.xtech":"Experience Cloud Blog","app.footer.seeconf":"Seeking Experience & Engineering Conference","app.footer.xcloud":"Ant Experience Cloud","app.publish.title":"Ant Desgin Pro@2.0.0 has been released! 🎉 🎉 🎉","app.publish.greeting":"Hello, ","app.publish.intro":"has been released","app.publish.tips":", welcome to upgrade and experience. ","app.publish.url":"https://medium.com/ant-design/beautiful-and-powerful-ant-design-pro-2-0-release-51358da5af95","app.publish.old-version-guide":"If you need documentation of older version, please visit ","app.publish.old-version-tips":",It can also be viewed by clicking on the v1 menu in the top right corner of the page."}},d=a(316),h={locale:"zh-CN",data:a.n(d).a,messages:{"app.header.search":"搜索...","app.header.search.all":"全文本搜索：","app.header.search.doc":"文档","app.header.search.component":"组件","app.header.menu.home":"首页","app.header.menu.docs":"文档","app.header.menu.components":"组件","app.header.menu.resource":"资源","app.header.lang":"English","app.content.edit-page":"在 Github 上编辑此页！","app.content.modifiedTime":"上次修改时间：","app.content.edit-demo":"在 Github 上编辑此示例！","app.component.examples":"代码演示","app.component.refer.title":"引用方式：","app.component.refer.desc":"详细使用方式请参照：","app.component.refer.link":"独立使用 pro 组件","app.demo.copy":"复制代码","app.demo.copied":"复制成功","app.demo.codepen":"在 CodePen 中打开","app.demo.riddle":"在 Riddle 中打开","app.demo.codesandbox":"在 CodeSandbox 中打开","app.home.slogan":"开箱即用的中台前端/设计解决方案","app.home.preview":"预览","app.home.start":"开始使用","app.home.download":"下载","app.home.letspro":"命令行运行下列命令，快速启动开发服务：","app.home.selectpro":"选择 Ant Design Pro","app.home.selectlanguage":"选择你使用的语言","app.home.openbrowser":"打开浏览器访问","app.home.needhelp":"需要帮助？请先阅读 {docs} 和 {faq}， 如果未能解决，可以到 GitHub 上 {ask}。","app.home.docs":"开发文档","app.home.faq":"常见问题","app.home.ask":"进行提问","app.footer.repo":"GitHub 仓库","app.footer.awesome":"Awesome Ant Design","app.footer.chinamirror":"国内镜像站点 🇨🇳","app.footer.primary-color-changed":"修改主题色成功！","app.footer.kitchen":"Sketch 工具集","app.footer.landing":"Landing 模板集","app.footer.scaffold":"脚手架","app.footer.scaffolds":"脚手架市场","app.footer.dev-tools":"开发工具","app.footer.dva":"应用框架","app.footer.resources":"相关资源","app.footer.data-vis":"数据可视化","app.footer.eggjs":"企业级 Node 开发框架","app.footer.motion":"设计动效","app.footer.antd-library":"Axure 部件库","app.footer.design-platform":"蚂蚁金服设计平台","app.footer.antux":"页面逻辑素材","app.footer.community":"社区","app.footer.help":"帮助","app.footer.change-log":"更新记录","app.footer.faq":"常见问题","app.footer.feedback":"反馈和建议","app.footer.stackoverflow":"StackOverflow","app.footer.segmentfault":"SegmentFault","app.footer.discuss-en":"在线讨论 (English)","app.footer.discuss-cn":"在线讨论 (中文)","app.footer.bug-report":"报告 Bug","app.footer.issues":"讨论列表","app.footer.version":"文档版本：","app.footer.author":"蚂蚁金服体验技术部出品 @ AFX","app.footer.work_with_us":"加入我们","app.footer.more-product":"更多产品","app.footer.company":"AFX","app.footer.ant-design":"蚂蚁 UI 体系","app.footer.yuque":"语雀","app.footer.yuque.slogan":"知识创作·协作平台","app.footer.fengdie":"云凤蝶","app.footer.fengdie.slogan":"移动建站平台","app.footer.zhihu":"知乎专栏","app.footer.zhihu.xtech":"体验科技专栏","app.footer.seeconf":"蚂蚁体验科技大会","app.footer.xcloud":"蚂蚁体验云","app.publish.title":"Ant Desgin Pro@2.0.0 发布！🎉 🎉 🎉","app.publish.greeting":"你好，","app.publish.intro":" 已正式发布","app.publish.tips":"，欢迎升级和体验。","app.publish.url":"https://www.yuque.com/ant-design/ant-design-pro/gg1e9a","app.publish.old-version-guide":"如果您还需要使用旧版，请查阅 ","app.publish.old-version-tips":"，也可通过点击页面右上角的 v1 菜单查看。"}},f=a(200),g=(a(317),a(318),a(319),a(320),a(222),a(234)),v=a.n(g),b=(a(223),a(235)),E=a.n(b),y=(a(321),a(354)),w=a.n(y),x=(a(214),a(191)),C=a.n(x),k=(a(258),a(284)),S=a.n(k),N=(a(59),a(12),a(322),a(349)),j=a.n(N),M=(a(323),a(324)),A=a.n(M),F=a(206),O=a(260),_=a.n(O);A.a.Option;var z="antd-pro@2.0.0-notification-sent",D=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={menuVisible:!1,menuMode:"horizontal"},t.setMenuMode=function(e){t.setState({menuMode:e?"inline":"horizontal"})},t.handleHideMenu=function(){t.setState({menuVisible:!1})},t.handleShowMenu=function(){t.setState({menuVisible:!0})},t.onMenuVisibleChange=function(e){t.setState({menuVisible:e})},t.handleSelect=function(e){window.location.href=e},t.infoNewVersion=function(){var e=t.props.intl.formatMessage;j.a.info({title:e({id:"app.publish.title"}),content:i.a.createElement("div",null,i.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",alt:"Ant Design"}),i.a.createElement("p",null,e({id:"app.publish.greeting"}),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e({id:"app.publish.url"})},"Ant Desgin Pro ",e({id:"app.publish.intro"})),e({id:"app.publish.tips"}),e({id:"app.publish.old-version-guide"}),i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://v1.pro.ant.design"},"v1.pro.ant.design"),e({id:"app.publish.old-version-tips"}))),okText:"OK",onOk:function(){return localStorage.setItem(z,"true")},className:"new-version-info-modal",width:470})},t.handleLangChange=function(){var e=t.props.location.pathname,a=window.location.protocol+"//",n=window.location.href.substr(a.length);f.c()&&localStorage.setItem("locale",f.d(e)?"en-US":"zh-CN"),window.location.href=a+n.replace(window.location.pathname,f.a(e,!f.d(e)))},t.onVersionChange=function(e){"v1"===e&&window.open("https://v1.pro.ant.design/"),"v2"===e&&window.open("https://v2-pro.ant.design/")},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var e=this.searchInput;this.props.intl;document.addEventListener("keyup",function(t){83===t.keyCode&&t.target===document.body&&e&&e.focus()}),"true"!==localStorage.getItem(z)&&Date.now()<new Date("2018/9/5").getTime()&&this.infoNewVersion();this.props.intl.locale},o.componentDidUpdate=function(e){var t=this.props.isMobile;t!==e.isMobile&&this.setMenuMode(t)},o.render=function(){var e=this.state,t=e.menuMode,a=e.menuVisible,n=this.props,o=n.location,r=n.intl,p=o.pathname,s=o.pathname.replace(/(^\/|\/$)/g,"").split("/").slice(0,-1).join("/")||"home";/^blog/.test(p)?s="blog":/docs/.test(p)?s="docs":"/"===p&&(s="home");var c="zh-CN"===r.locale,m=[i.a.createElement(S.a,{mode:t,selectedKeys:[s],id:"nav",key:"nav"},i.a.createElement(S.a.Item,{key:"home"},i.a.createElement(F.a,{to:f.a("/",c)},i.a.createElement(l.a,{id:"app.header.menu.home"}))),i.a.createElement(S.a.Item,{key:"docs"},i.a.createElement(F.a,{to:f.a("/docs/introduction",c)},i.a.createElement(l.a,{id:"app.header.menu.docs"}))),i.a.createElement(S.a.Item,{key:"blog"},i.a.createElement(F.a,{to:f.a("/blog/",c)},"Blog")),"inline"===t&&i.a.createElement(S.a.Item,{key:"preview"},i.a.createElement("a",{target:"_blank",href:"http://preview.pro.ant.design/",rel:"noopener noreferrer"},i.a.createElement(l.a,{id:"app.home.preview"}))))];return i.a.createElement("div",{id:"header",className:"header"},"inline"===t?i.a.createElement(w.a,{overlayClassName:"popover-menu",placement:"bottomRight",content:m,trigger:"click",visible:a,arrowPointAtCenter:!0,onVisibleChange:this.onMenuVisibleChange},i.a.createElement(C.a,{className:"nav-phone-icon",type:"menu",onClick:this.handleShowMenu})):null,i.a.createElement(v.a,null,i.a.createElement(E.a,{xxl:4,xl:5,lg:8,md:8,sm:24,xs:24},i.a.createElement(F.a,{id:"logo",to:"/"},i.a.createElement("img",{src:_.a,alt:"Sortd"}))),i.a.createElement(E.a,{xxl:20,xl:19,lg:16,md:16,sm:0,xs:0},i.a.createElement("div",{className:"header-meta"},i.a.createElement("div",{className:"right-header"}),"horizontal"===t?i.a.createElement("div",{id:"menu"},m):null))))},n}(i.a.Component),I=Object(l.d)(D);var q=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).handleLangChange=function(){var e=t.props.location.pathname,a=window.location.protocol+"//",n=window.location.href.substr(a.length);f.c()&&localStorage.setItem("locale",f.d(e)?"en-US":"zh-CN"),window.location.href=a+n.replace(window.location.pathname,f.a(e,!f.d(e)))},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"footer-wrap"},i.a.createElement(v.a,null,i.a.createElement(E.a,{md:6,sm:24,xs:24},i.a.createElement("div",{className:"footer-center"},i.a.createElement("h2",null,i.a.createElement(l.a,{id:"app.footer.quicklinks"})),i.a.createElement("div",null,i.a.createElement(F.a,{to:"/"},"Home")),i.a.createElement("div",null,i.a.createElement(F.a,{to:"/docs"},"Documentation")),i.a.createElement("div",null,i.a.createElement(F.a,{to:"/blog"},"Blog")),i.a.createElement("div",null,i.a.createElement("a",{target:"_blank",href:"https://www.linkedin.com/company/sortdio"},i.a.createElement("span",null,i.a.createElement("img",{width:14,src:"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"})),"  LinkedIn")))),i.a.createElement(E.a,{md:6,sm:24,xs:24},i.a.createElement("div",{className:"footer-center"},i.a.createElement("h2",null,i.a.createElement(l.a,{id:"app.footer.aboutus"})),i.a.createElement("div",null,i.a.createElement("b",null,"Sortd.io")," (ABN: 18633413313)",i.a.createElement("br",null),"2/397 Riley Street ",i.a.createElement("br",null),"Surry Hills 2010",i.a.createElement("br",null),"NSW",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:info@sortd.io"},"info@sortd.io")))))),i.a.createElement("div",{className:"bottom-bar"},"Made for you with ",i.a.createElement("span",{className:"heart"},"❤")," by",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://yuque.com/afx/blog"},i.a.createElement(l.a,{id:"app.footer.company"}))))},n}(i.a.Component);var P=function(e){var t,a;function n(t){var a;a=e.call(this,t)||this;var n=t.location.pathname,o=f.d(n)?h:u;return Object(l.c)(o.data),a.state={appLocale:o},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.children,a=e.location,n=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["children","location"]),r=a.pathname,p=this.state.appLocale;return i.a.createElement(l.b,{locale:p.locale,messages:p.messages},i.a.createElement(o.a,{locale:s.a},i.a.createElement("div",{className:"page-wrapper "+(("/"===r||"index-cn"===r)&&"index-page-wrapper")},i.a.createElement(I,Object.assign({},n,{location:a})),i.a.cloneElement(t,Object.assign({},t.props,{isMobile:n.isMobile})),i.a.createElement(q,Object.assign({},n,{location:a})))))},n}(i.a.Component);t.a=function(e){return i.a.createElement(c.a,{query:"(max-width: 996px)"},function(t){var a="undefined"==typeof window;return i.a.createElement(P,Object.assign({},e,{isMobile:t&&!a}))})}},307:function(e,t){},311:function(e,t){},312:function(e,t){},544:function(e,t,a){e.exports=a.p+"static/Snapshot-04809ce68a3da392f9c51379bcdc939f.png"},545:function(e,t,a){e.exports=a.p+"static/Readiness-da71d83bbcefc2a63e9f62bf6345c979.png"},546:function(e,t,a){e.exports=a.p+"static/Sizing Wizard-84a8d2393d79ce482ec0f88a9ffebe45.png"},547:function(e,t,a){e.exports=a.p+"static/half-logo-4540b7eab29af7cc26c580d900945ad6.png"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a76aeacd59dff8701469.js.map