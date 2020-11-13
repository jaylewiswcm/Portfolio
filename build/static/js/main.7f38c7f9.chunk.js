(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{47:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var c,i=s(0),n=s(1),a=s.n(n),l=s(17),r=s.n(l),o=(s(47),s.p,s(2)),j=s(4),u=s(5),d=s(11),b=s(35),m=s(36),h=s(12),O="CHANGE_SERVICES",x="CHANGE_PROJECT",p={type:"development"},g={type:"all"},v=Object(d.combineReducers)({service:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload;switch(s){case O:return Object(h.a)(Object(h.a)({},e),{},{type:c});default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload;switch(s){case x:return Object(h.a)(Object(h.a)({},e),{},{type:c});default:return e}}}),f=[m.a],N=Object(d.createStore)(v,{},Object(d.compose)(Object(b.composeWithDevTools)(d.applyMiddleware.apply(void 0,f)))),y=s(16),k=function(){var e=Object(n.useState)("0px"),t=Object(y.a)(e,2),s=t[0],a=t[1],l=Object(n.useState)("/assets/icons/burger.svg"),r=Object(y.a)(l,2),j=r[0],u=r[1],d=Object(n.useState)("100%"),b=Object(y.a)(d,2),m=b[0],h=b[1],O=Object(n.useState)("flex"),x=Object(y.a)(O,2),p=x[0],g=x[1];Object(n.useEffect)((function(){window.addEventListener("resize",(function(){window.innerWidth>768&&(a("80px"),g("flex"),u("/assets/icons/burger.svg"),c=0),window.innerWidth<=768&&(a("0px"),u("/assets/icons/burger.svg"),c=0)}))}));return Object(i.jsxs)("header",{children:[Object(i.jsx)("span",{className:"logo",children:Object(i.jsx)(o.b,{to:"/",children:Object(i.jsx)("h2",{children:"Jay Lewis"})})}),Object(i.jsx)("span",{className:"burger-con",children:Object(i.jsx)("img",{src:j,alt:"Burger Menu - Open Navigation",className:"burger-menu",onClick:function(e){void 0===c||0===c?(a("300px"),g("flex"),u("/assets/icons/cross.svg"),h("80%"),c=1):1===c&&(a("0px"),u("/assets/icons/burger.svg"),h("100%"),c=0)},style:{width:m}})}),Object(i.jsx)("nav",{style:{height:s,display:p},children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(o.c,{to:"/",activeClassName:"active-link",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.c,{to:"/services",activeClassName:"active-link",children:"Services"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.c,{to:"/portfolio",activeClassName:"active-link",children:"Portfolio"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.c,{to:"/about",activeClassName:"active-link",children:"About"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.c,{to:"/contact",id:"contact-button",children:"Contact"})})]})})]})},C=function(){return Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsxs)("div",{className:"footer-nav",children:[Object(i.jsx)("h6",{children:"Site Navigation"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/",children:"Home"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/services",children:"Services"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/portfolio",children:"Portfolio"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/about",children:"About me"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/contact",children:"Contact me"})})]})]}),Object(i.jsxs)("div",{className:"footer-services",children:[Object(i.jsx)("h6",{children:"Services"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/services",children:"Web Devlopement"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/services",children:"Web Design"})}),Object(i.jsx)("li",{children:Object(i.jsx)(o.b,{to:"/services",children:"CMS"})})]})]}),Object(i.jsx)("div",{className:"footer-about",children:Object(i.jsx)("p",{children:" We\u2019re an independent design agency based in the Bristol area. Our main focus is you the client, we try to make every want and need of yours met to the best of our ability. Along the way we focus on stunning design with functionality which creates a memorable experience for the user."})})]})},w=function(e){return function(t){t({type:O,payload:e})}},L=Object(u.b)(null,{changeServiceType:w})(Object(j.g)((function(e){var t=e.changeServiceType,s=Object(j.f)(),c=function(e){var c=e.target.value;console.log(c),t(c),s.push("/services")};return Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"yellow-background",children:Object(i.jsx)("img",{src:"/assets/illustrations/page-background-yellow.svg",alt:"Background Bubble Yellow"})}),Object(i.jsx)("div",{className:"red-background",children:Object(i.jsx)("img",{src:"/assets/illustrations/page-background-red.svg",alt:"Background Bubble Red"})}),Object(i.jsx)("div",{className:"home-hero-container",children:Object(i.jsxs)("div",{className:"title-container",children:[Object(i.jsx)("h3",{children:"I Create fast modern websites for business and personal use"}),Object(i.jsx)("h5",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend"}),Object(i.jsxs)("span",{className:"button-container",children:[Object(i.jsx)(o.b,{to:"/contact",className:"get-quote",children:"Get a quote"}),Object(i.jsxs)("span",{onClick:function(){document.getElementById("findOutMoreJump").scrollIntoView({behavior:"smooth",block:"center",inline:"center"})},children:[Object(i.jsx)("p",{children:"Find out more"}),Object(i.jsx)("img",{src:"/assets/icons/arrow-down.svg",alt:"arrow down"})]})]})]})}),Object(i.jsxs)("div",{className:"wwd-container",id:"findOutMoreJump",children:[Object(i.jsxs)("div",{className:"info-container",children:[Object(i.jsx)("img",{src:"/assets/illustrations/development-background.svg",alt:"Background Bubble",className:"development-background"}),Object(i.jsx)("img",{src:"/assets/illustrations/development.svg",alt:"Developement Laptop"}),Object(i.jsx)("h5",{children:"Development"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, conctetur adipis Cras eleifend, risus ac "}),Object(i.jsx)("button",{value:"development",onClick:function(e){return c(e)},children:"Learn More"})]}),Object(i.jsxs)("div",{className:"info-container",children:[Object(i.jsx)("img",{src:"/assets/illustrations/design-background.svg",alt:"Background Bubble",className:"design-background"}),Object(i.jsx)("img",{src:"/assets/illustrations/design.svg",alt:"Design Laptop"}),Object(i.jsx)("h5",{children:"Design"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, conctetur adipis Cras eleifend, risus ac "}),Object(i.jsx)("button",{value:"design",onClick:function(e){return c(e)},children:"Learn More"})]}),Object(i.jsxs)("div",{className:"info-container",id:"bottom-info",children:[Object(i.jsx)("img",{src:"/assets/illustrations/cms-background.svg",alt:"Background Bubble",className:"cms-background"}),Object(i.jsx)("img",{src:"/assets/illustrations/cms.svg",alt:"CMS Laptop"}),Object(i.jsx)("h5",{children:"CMS"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, conctetur adipis Cras eleifend, risus ac "}),Object(i.jsx)("button",{value:"cms",onClick:function(e){return c(e)},children:"Learn More"})]})]}),Object(i.jsxs)("div",{className:"home-projects",children:[Object(i.jsx)("h4",{children:"Heres what I've done"}),Object(i.jsxs)("div",{className:"projects-home-grid",children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("img",{src:"/assets/projects/logic/logic-display@2x.png",alt:"Project one - Logic"}),Object(i.jsx)("h6",{children:"Logic Trades"}),Object(i.jsx)("a",{href:"/",children:"See the site"})]}),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("img",{src:"/assets/projects/dirt/dirt-display@2x.png",alt:"Project one - Logic"}),Object(i.jsx)("h6",{children:"DIRT"}),Object(i.jsx)("a",{href:"/",children:"See the site"})]})]})]}),Object(i.jsxs)("div",{className:"get-in-contact",children:[Object(i.jsx)("h4",{children:"Get in contact"}),Object(i.jsxs)("span",{children:[Object(i.jsx)(o.b,{to:"/services",children:" Learn more"}),Object(i.jsx)(o.b,{to:"/contact",className:"contact-link",children:"Contact"})]})]})]})}))),S=function(){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("div",{className:"left-con",children:Object(i.jsx)("img",{src:"/assets/illustrations/development.svg",alt:"Service Illustration"})}),Object(i.jsxs)("div",{className:"right-con",children:[Object(i.jsx)("h5",{children:"Development"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi."}),Object(i.jsx)(o.b,{to:"/contact",className:"get-qoute",children:"Get a quote"})]})]})},D=function(){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("div",{className:"left-con",children:Object(i.jsx)("img",{src:"/assets/illustrations/design.svg",alt:"Service Illustration"})}),Object(i.jsxs)("div",{className:"right-con",children:[Object(i.jsx)("h5",{children:"Design"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi."}),Object(i.jsx)(o.b,{to:"/contact",className:"get-qoute",children:"Get a quote"})]})]})},q=function(){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)("div",{className:"left-con",children:Object(i.jsx)("img",{src:"/assets/illustrations/cms.svg",alt:"Service Illustration"})}),Object(i.jsxs)("div",{className:"right-con",children:[Object(i.jsx)("h5",{children:"Cms"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi."}),Object(i.jsx)(o.b,{to:"/contact",className:"get-qoute",children:"Get a quote"})]})]})},B=Object(u.b)((function(e){return{serviceType:e.service}}),{changeServiceType:w})((function(e){var t=e.serviceType,s=e.changeServiceType,c=Object(n.useRef)(null);Object(n.useEffect)((function(){document.title="Services - Jay Lewis"}));var a=function(e){var t=e.target.value;s(t),c.current.scrollIntoView()};switch(t.type){case"development":var l="active-service";break;case"design":var r="active-service";break;case"cms":var o="active-service"}return Object(i.jsxs)("div",{className:"services-container",children:[Object(i.jsx)("div",{className:"yellow-background",children:Object(i.jsx)("img",{src:"/assets/illustrations/page-background-yellow.svg",alt:"Background Bubble Yellow"})}),Object(i.jsx)("div",{className:"red-background",children:Object(i.jsx)("img",{src:"/assets/illustrations/page-background-red.svg",alt:"Background Bubble Red"})}),Object(i.jsx)("h4",{className:"page-title",children:"My Services"}),Object(i.jsxs)("div",{className:"services-info-grid",children:[Object(i.jsxs)("div",{className:"info-con",children:[Object(i.jsx)("img",{src:"/assets/illustrations/development.svg",alt:"Development Illustration"}),Object(i.jsx)("h4",{children:"Development"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac "}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"})]}),Object(i.jsx)("button",{value:"development",id:"development-btn",onClick:function(e){return a(e)},children:"Learn More"})]}),Object(i.jsxs)("div",{className:"info-con",children:[Object(i.jsx)("img",{src:"/assets/illustrations/design.svg",alt:"Design Illustration"}),Object(i.jsx)("h4",{children:"Design"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac "}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"})]}),Object(i.jsx)("button",{value:"design",id:"design-btn",onClick:function(e){return a(e)},children:"Learn More"})]}),Object(i.jsxs)("div",{className:"info-con",children:[Object(i.jsx)("img",{src:"/assets/illustrations/cms.svg",alt:"CMS Illustration"}),Object(i.jsx)("h4",{children:"CMS"}),Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet,conctetur adipis Cras eleifend, risus ac "}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"}),Object(i.jsx)("li",{children:"Lorem ipsum"})]}),Object(i.jsx)("button",{value:"cms",id:"cms-btn",onClick:function(e){return a(e)},children:"Learn More"})]})]}),Object(i.jsxs)("div",{className:"service-button-con",children:[Object(i.jsx)("button",{className:l,value:"development",onClick:function(e){return a(e)},children:"Development"}),Object(i.jsx)("button",{className:r,value:"design",onClick:function(e){return a(e)},children:"Design"}),Object(i.jsx)("button",{className:o,value:"cms",onClick:function(e){return a(e)},children:"CMS"})]}),Object(i.jsxs)("div",{className:"services-display",ref:c,children:["development"===t.type&&Object(i.jsx)(S,{}),"design"===t.type&&Object(i.jsx)(D,{}),"cms"===t.type&&Object(i.jsx)(q,{})]})]})})),M=function(e){return function(t){t({type:x,payload:e})}},I=Object(u.b)(null,{changeProject:M})((function(e){var t=e.changeProject;return Object(i.jsx)("div",{className:"project-img-con",onClick:function(e){return function(e){var s=e.target.parentNode.getAttribute("data-value");t(s),document.body.scrollTop=80,document.documentElement.scrollTop=80}(e)},"data-value":"dirt",children:Object(i.jsx)("img",{src:"/assets/projects/dirt/dirt-site@2x.png",alt:"Dirt Home Page"})})})),P=Object(u.b)(null,{changeProject:M})((function(e){var t=e.changeProject;return Object(i.jsx)("div",{className:"project-img-con",onClick:function(e){return function(e){var s=e.target.parentNode.getAttribute("data-value");t(s),console.log(s),document.body.scrollTop=80,document.documentElement.scrollTop=80}(e)},"data-value":"logic",children:Object(i.jsx)("img",{src:"/assets/projects/logic/logic-site@2x.png",alt:"Logic Home Page"})})})),T=Object(u.b)(null,{changeProject:M})((function(e){var t=e.changeProject;return Object(i.jsxs)("div",{className:"project-info-con",children:[Object(i.jsx)("button",{onClick:function(){return t("all")},className:"back-btn",children:"Back to projects"}),Object(i.jsx)("h4",{className:"project-title",children:"Dirt"}),Object(i.jsx)("p",{className:"project-info",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi."}),Object(i.jsx)("a",{href:"/",children:"See the site"})]})})),E=Object(u.b)(null,{changeProject:M})((function(e){var t=e.changeProject;return Object(i.jsxs)("div",{className:"project-info-con",children:[Object(i.jsx)("button",{onClick:function(){return t("all")},className:"back-btn",children:"Back to projects"}),Object(i.jsx)("h4",{className:"project-title",children:"Logic"}),Object(i.jsx)("p",{className:"project-info",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend, risus ac ullamcorper scelerisque, libero ipsum aliquam turpis, ac dapibus velit nisl eu magna. Duis sit amet magna ac risus gravida vehicula eget vel nibh. Morbi diam nisl, placerat et consequat eu, volutpat at velit. Curabitur lacus felis, tempus eget mauris vel, eleifend tempus nibh. Nulla in fringilla diam, sed luctus ligula. Duis maximus nisl risus, id elementum mi convallis eget. Aliquam ac blandit urna, in eleifend ex. Nulla facilisi."}),Object(i.jsx)("a",{href:"/",children:"See the site"})]})})),A=Object(u.b)((function(e){return{project:e.project}}),{changeProject:M})((function(e){var t=e.project;e.changeProject;Object(n.useEffect)((function(){window.scrollTo(0,0),document.title="Portfolio - Jay Lewis"}));var s,c=[];switch("all"!==t.type&&"dirt"!==t.type||c.push(Object(i.jsx)(I,{})),"all"!==t.type&&"logic"!==t.type||c.push(Object(i.jsx)(P,{})),t.type){case"dirt":c.push(Object(i.jsx)(T,{}));break;case"logic":c.push(Object(i.jsx)(E,{}))}return s="all"!==t.type?"100%":"260px",Object(i.jsxs)("div",{className:"portfolio-container",children:[Object(i.jsx)("div",{className:"yellow-background",children:Object(i.jsx)("img",{src:"/assets/illustrations/page-background-yellow.svg",alt:"Background Bubble Yellow"})}),Object(i.jsx)("div",{className:"red-background",children:Object(i.jsx)("img",{src:"/assets/illustrations/page-background-red.svg",alt:"Background Bubble Red"})}),Object(i.jsx)("h4",{className:"page-title",children:"Pervious Work"}),Object(i.jsx)("div",{className:"portfolio-grid",children:c.map((function(e){return Object(i.jsx)("li",{style:{height:s},children:e},c.indexOf(e))}))})]})})),J=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"This is The About Page"})})},F=s(18),R=s(37),G=s(38),H=s(15),W=s(41),Y=s(40),V=s(39),_=s.n(V),z=function(e){Object(W.a)(s,e);var t=Object(Y.a)(s);function s(e){var c;return Object(R.a)(this,s),(c=t.call(this,e)).state={name:"",email:"",company:"",message:""},c.onChange.bind(Object(H.a)(c)),c.onSubmit.bind(Object(H.a)(c)),c}return Object(G.a)(s,[{key:"onChange",value:function(e){this.setState(Object(h.a)(Object(h.a)({},this.state),{},Object(F.a)({},e.target.name,e.target.value)))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state);_()({method:"POST",url:"/contact",data:this.state}).then((function(e){"success"===e.data.msg?(alert("Email sent, awesome!"),t.resetForm()):"fail"===e.data.msg&&alert("Oops, something went wrong. Try again")}))}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"contact-container",children:[Object(i.jsx)("div",{className:"yellow-background",children:Object(i.jsx)("img",{src:"/assets/illustrations/page-background-yellow.svg",alt:"Background Bubble Yellow"})}),Object(i.jsx)("div",{className:"red-background",children:Object(i.jsx)("img",{src:"/assets/illustrations/page-background-red.svg",alt:"Background Bubble Red"})}),Object(i.jsx)("h4",{className:"page-title",children:"Contact Me"}),Object(i.jsxs)("div",{className:"contact-flex",children:[Object(i.jsx)("div",{className:"contact-left",children:Object(i.jsxs)("form",{onSubmit:function(t){return e.onSubmit(t)},children:[Object(i.jsx)("h5",{children:"Get In Contact"}),Object(i.jsxs)("span",{children:[Object(i.jsx)("label",{htmlFor:"name",children:"Name"}),Object(i.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"John Smith",onChange:function(t){return e.onChange(t)}})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("label",{htmlFor:"email",children:"Email"}),Object(i.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"Johnsmtih@example.com",onChange:function(t){return e.onChange(t)}})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("label",{htmlFor:"company",children:"Company"}),Object(i.jsx)("input",{type:"text",id:"company",name:"company",placeholder:"JohnSmithLTD",onChange:function(t){return e.onChange(t)}})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("label",{htmlFor:"message",children:"Message"}),Object(i.jsx)("textarea",{name:"message",id:"message",placeholder:"Hey I was wondering how much a static website would be?",onChange:function(t){return e.onChange(t)}})]}),Object(i.jsx)("input",{type:"submit",value:"Send Message",id:"submit"})]})}),Object(i.jsx)("div",{className:"contact-right",children:Object(i.jsxs)("div",{className:"contact-info",children:[Object(i.jsx)("h5",{children:"My Contact Infomation"}),Object(i.jsxs)("div",{className:"info-wrapper",children:[Object(i.jsxs)("span",{children:[Object(i.jsx)("img",{src:"/assets/icons/email.svg",alt:"Email Icon"}),Object(i.jsx)("p",{children:"Jr_lewis@outlook.com"})]}),Object(i.jsxs)("span",{children:[Object(i.jsx)("img",{src:"/assets/icons/phone.svg",alt:"Phone Icon"}),Object(i.jsx)("p",{children:"07592831246"})]})]}),Object(i.jsx)("h5",{children:"My Socials"}),Object(i.jsxs)("span",{className:"social-wrapper",children:[Object(i.jsx)("a",{href:"/",children:Object(i.jsx)("img",{src:"/assets/icons/facebook.svg",alt:"Facebook Icon"})}),Object(i.jsx)("a",{href:"/",children:Object(i.jsx)("img",{src:"/assets/icons/linkedin.svg",alt:"LinkedIn Icon"})})]})]})})]})]})}}]),s}(n.Component);var K=function(){return Object(i.jsx)(u.a,{store:N,children:Object(i.jsx)(o.a,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("div",{className:"app-container",children:[Object(i.jsx)(k,{}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{path:"/services",children:Object(i.jsx)(B,{})}),Object(i.jsx)(j.a,{path:"/portfolio",children:Object(i.jsx)(A,{})}),Object(i.jsx)(j.a,{path:"/about",children:Object(i.jsx)(J,{})}),Object(i.jsx)(j.a,{path:"/contact",children:Object(i.jsx)(z,{})}),Object(i.jsx)(j.a,{path:"/",children:Object(i.jsx)(L,{})})]}),Object(i.jsx)(C,{})]})})})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(K,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.7f38c7f9.chunk.js.map