(this.webpackJsonptoktok=this.webpackJsonptoktok||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/logoWhiteRed.9d2eda86.png"},31:function(e,t,a){},34:function(e,t,a){e.exports=a(82)},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(32),o=a(12),s=a(8),i=a(9),c=a(11),m=a(10),d=a(2),u=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,{to:"/"})}}]),a}(r.a.Component),g=a(14),h=a(16),p=a.n(h),f=a(13),v=a.n(f),E=(a(31),a(17)),b=a.n(E),C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).signOut=function(){localStorage.setItem("email",null),localStorage.setItem("secretKey",null)},n.handleLogin=function(e){e.preventDefault(),n.setState({loading:!0}),n.state.email.toLowerCase().trim().length<=0||n.state.password.length<=0?n.setState({loading:!1,error:"fields cannot be blank"}):v.a.post("/loginRequest",{email:n.state.email.toLowerCase().trim(),password:n.state.password}).then((function(e){if("success"===e.data.message){var t=e.data.secret;localStorage.setItem("secretKey",t),localStorage.setItem("email",n.state.email.toLowerCase().trim()),n.setState({redirect:!0})}else n.setState({error:e.data.message});n.setState({loading:!1})}),(function(e){n.setState({loading:!1,error:e})}))},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.state={loading:!1,redirect:!1,email:"",password:"",error:""},n.handleEmailChange=n.handleEmailChange.bind(Object(g.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.signOut()}},{key:"render",value:function(){var e=this.state,t=e.redirect;if(e.loading)return r.a.createElement("div",{className:"flexContainer primaryColor"},r.a.createElement("div",{className:"loader"},r.a.createElement(p.a,{type:"Bars",color:"white",height:100,width:100})));if(t)return r.a.createElement(d.a,{to:"/"});var a=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-item clickable bottomBorder"},"Login"),r.a.createElement(o.b,{to:"/signup",className:"navbar-item clickable noBottomBorder",style:{textDecoration:"none"}},"Sign Up"))};return r.a.createElement("div",{className:"flexContainer"},r.a.createElement("div",{className:"halfColumn primaryColor centerColumnItems"},r.a.createElement("h1",{className:"logoTitle"},"TOKTOK"),r.a.createElement("h2",{className:"logoSubtitle"},"keep track of everything")),r.a.createElement("div",{className:"halfColumn"},r.a.createElement("div",{className:"loginFormContainer"},r.a.createElement(a,null),r.a.createElement("form",{onSubmit:this.handleLogin,className:"form"},r.a.createElement("input",{className:"emailInput",type:"email",placeholder:"Email",onChange:this.handleEmailChange}),r.a.createElement("input",{className:"passwordInput",type:"password",placeholder:"Password",onChange:this.handlePasswordChange}),r.a.createElement("div",{className:"error"},this.state.error),r.a.createElement("input",{className:"loginBtn clickable",type:"submit",value:"SIGN IN"})))),r.a.createElement("img",{className:"logoImage",src:b.a,alt:"logo"}))}}]),a}(r.a.Component),w=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).signOut=function(){localStorage.setItem("email",null),localStorage.setItem("secretKey",null)},n.handleSignUp=function(e){e.preventDefault(),n.setState({loading:!0}),n.state.email.toLowerCase().trim().length<=0||n.state.password.length<=0?n.setState({loading:!1,error:"fields cannot be blank"}):n.state.password.length<=5?n.setState({loading:!1,error:"password must be at least 6 characters long"}):n.state.password!==n.state.confirmPassword?n.setState({loading:!1,error:"passwords do not match"}):v.a.post("/signupRequest",{email:n.state.email.toLowerCase().trim(),password:n.state.password}).then((function(e){if("success"===e.data.message){var t=e.data.secret;localStorage.setItem("secretKey",t),localStorage.setItem("email",n.state.email.toLowerCase().trim()),n.setState({redirect:!0})}else n.setState({error:e.data.message});n.setState({loading:!1})}),(function(e){n.setState({loading:!1,error:e})}))},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleConfirmPasswordChange=function(e){n.setState({confirmPassword:e.target.value})},n.state={loading:!1,redirect:!1,email:"",password:"",confirmPassword:"",error:""},n.handleEmailChange=n.handleEmailChange.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.signOut()}},{key:"render",value:function(){var e=this.state,t=e.redirect;if(e.loading)return r.a.createElement("div",{className:"flexContainer primaryColor"},r.a.createElement("div",{className:"loader"},r.a.createElement(p.a,{type:"Bars",color:"white",height:100,width:100})));if(t)return r.a.createElement(d.a,{to:"/"});var a=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(o.b,{to:"/login",className:"navbar-item clickable noBottomBorder",style:{textDecoration:"none"}},"Login"),r.a.createElement("div",{className:"navbar-item clickable bottomBorder"},"Sign Up"))};return r.a.createElement("div",{className:"flexContainer"},r.a.createElement("div",{className:"halfColumn primaryColor centerColumnItems"},r.a.createElement("h1",{className:"logoTitle"},"TOKTOK"),r.a.createElement("h2",{className:"logoSubtitle"},"keep track of everything")),r.a.createElement("div",{className:"halfColumn"},r.a.createElement("div",{className:"loginFormContainer"},r.a.createElement(a,null),r.a.createElement("form",{onSubmit:this.handleSignUp,className:"form"},r.a.createElement("input",{className:"emailInput",type:"email",placeholder:"Email",onChange:this.handleEmailChange}),r.a.createElement("input",{className:"passwordInput",type:"password",placeholder:"Password",onChange:this.handlePasswordChange}),r.a.createElement("input",{className:"passwordInput",type:"password",placeholder:"Confirm password",onChange:this.handleConfirmPasswordChange}),r.a.createElement("div",{className:"error"},this.state.error),r.a.createElement("input",{className:"loginBtn clickable",type:"submit",value:"SIGN UP"})))),r.a.createElement("img",{className:"logoImage",src:b.a,alt:"logo"}))}}]),a}(r.a.Component),S=(a(80),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={redirect:!1,loading:!0,timers:[]},e.updateTimers=function(){e.setState({})},e.getTimers=function(){void 0!==localStorage.getItem("email")?v.a.post("/getTimers",{email:localStorage.getItem("email")}).then((function(t){"success"===t.data.message?e.setState({timers:t.data.timers,loading:!1}):(alert("failure!"),e.setState({loading:!1}))}),(function(t){e.setState({loading:!1}),alert(t)})):e.setState({redirect:!0,loading:!1})},e.createTimer=function(){e.setState({loading:!0}),v.a.post("/createTimer",{email:localStorage.getItem("email"),timerTitle:"example timer",timerDate:new Date}).then((function(t){"success"===t.data.message?window.location.reload(!1):(alert(t.data.message),e.setState({loading:!1}))}),(function(t){e.setState({loading:!1})}))},e.autoLogin=function(){v.a.post("/verifyCredentials",{email:localStorage.getItem("email"),secretKey:localStorage.getItem("secretKey")}).then((function(t){"success"!==t.data.message?e.setState({loading:!1,redirect:!0}):(e.getTimers(),e.interval=setInterval(e.updateTimers,1e3))}),(function(t){e.setState({loading:!1})}))},e.signOut=function(){localStorage.setItem("email",null),localStorage.setItem("secretKey",null),e.setState({redirect:!0})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.autoLogin()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.redirect;return e.loading?r.a.createElement("div",{className:"flexContainer primaryColor"},r.a.createElement("div",{className:"loader"},r.a.createElement(p.a,{type:"Bars",color:"white",height:100,width:100}))):t?r.a.createElement(d.a,{to:"/login"}):r.a.createElement("div",{className:"flexContainer centerFlex primaryColor topOffset"},r.a.createElement("button",{className:"addCounterBtn",onClick:this.createTimer},"Add New Counter"),this.state.timers.map((function(e){var t=new Date,a=new Date(e.timerDate),n=e.timerTitle,l=Math.abs(t-a)/1e3,o=Math.floor(l/86400);l-=86400*o;var s=Math.floor(l/3600)%24;l-=3600*s;var i=Math.floor(l/60)%60;l-=60*i;var c=Math.round(l%60);return r.a.createElement("div",{className:"timerBox"},r.a.createElement("h2",null,n),r.a.createElement("h1",null,o),r.a.createElement("p",null,"days"),r.a.createElement("div",{className:"timerBoxCountdowns"},r.a.createElement("div",{className:"countdown"},r.a.createElement("h1",null,s),r.a.createElement("p",null,"hours")),r.a.createElement("div",{className:"countdown"},r.a.createElement("h1",null,i),r.a.createElement("p",null,"minutes")),r.a.createElement("div",{className:"countdown"},r.a.createElement("h1",null,c),r.a.createElement("p",null,"seconds"))))})))}}]),a}(r.a.Component)),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.title="TokTok"}},{key:"render",value:function(){return r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/login",component:C}),r.a.createElement(d.b,{exact:!0,path:"/signup",component:w}),r.a.createElement(d.b,{exact:!0,path:"/",component:S}),r.a.createElement(d.b,{path:"*",component:u}))}}]),a}(r.a.Component);a(81);Object(l.render)(r.a.createElement(o.a,null,r.a.createElement(N,null)),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.b227453c.chunk.js.map