(this.webpackJsonptoktok=this.webpackJsonptoktok||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/logoWhiteRed.9d2eda86.png"},20:function(e,a,t){},23:function(e,a,t){e.exports=t(34)},33:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),o=t(5),c=t(7),s=t(8),i=t(10),m=t(9),u=t(1),d=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,{to:"/"})}}]),t}(r.a.Component),h=t(11),p=(t(20),t(14)),g=t.n(p),E=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleLogin=function(e){e.preventDefault(),alert(n.state.email)},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.state={redirect:!1,email:"",password:""},n.handleEmailChange=n.handleEmailChange.bind(Object(h.a)(n)),n.handlePasswordChange=n.handlePasswordChange.bind(Object(h.a)(n)),n}return Object(s.a)(t,[{key:"render",value:function(){if(this.state.redirect)return r.a.createElement(u.a,{to:"/home"});var e=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"navbar-item clickable bottomBorder"},"Login"),r.a.createElement(o.b,{to:"/signup",className:"navbar-item clickable noBottomBorder",style:{textDecoration:"none"}},"Sign Up"))};return r.a.createElement("div",{className:"flexContainer"},r.a.createElement("div",{className:"halfColumn primaryColor centerColumnItems"},r.a.createElement("h1",{className:"logoTitle"},"TOKTOK"),r.a.createElement("h2",{className:"logoSubtitle"},"keep track of everything")),r.a.createElement("div",{className:"halfColumn"},r.a.createElement("div",{className:"loginFormContainer"},r.a.createElement(e,null),r.a.createElement("form",{onSubmit:this.handleLogin,className:"form"},r.a.createElement("input",{className:"emailInput",type:"email",placeholder:"Email",onChange:this.handleEmailChange}),r.a.createElement("input",{className:"passwordInput",type:"password",placeholder:"Password",onChange:this.handlePasswordChange}),r.a.createElement("input",{className:"loginBtn clickable",type:"submit",value:"SIGN IN"})),r.a.createElement("div",null,"New to TokTok? ",r.a.createElement(o.b,{to:"/signup",className:"clickable hyperlink",style:{textDecoration:"none"}},"Sign Up Here")))),r.a.createElement("img",{className:"logoImage",src:g.a,alt:"logo"}))}}]),t}(r.a.Component),b=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleSignUp=function(e){if(e.preventDefault(),n.state.password==n.state.confirmPassword){var a={};a.email=n.state.email.toLowerCase().trim(),a.password=n.state.password;var t=new XMLHttpRequest;t.open("POST","/signupRequest"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify(a)),t.onload=function(e){if(4===t.readyState)if(200===t.status){var a=JSON.parse(t.responseText);alert(a.message)}else console.error(t.statusText),console.log(2),alert("Error contacting server.")}}else alert("draw red text saying that the cpass and pass do not match")},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleConfirmPasswordChange=function(e){n.setState({confirmPassword:e.target.value})},n.showLoginPage=function(){return alert("redirect to login"),r.a.createElement(u.a,{to:"/"})},n.state={redirect:!1,email:"",password:"",confirmPassword:""},n.handleEmailChange=n.handleEmailChange.bind(Object(h.a)(n)),n}return Object(s.a)(t,[{key:"render",value:function(){if(this.state.redirect)return r.a.createElement(u.a,{to:"/home"});var e=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(o.b,{to:"/",className:"navbar-item clickable noBottomBorder",style:{textDecoration:"none"}},"Login"),r.a.createElement("div",{className:"navbar-item clickable bottomBorder"},"Sign Up"))};return r.a.createElement("div",{className:"flexContainer"},r.a.createElement("div",{className:"halfColumn primaryColor centerColumnItems"},r.a.createElement("h1",{className:"logoTitle"},"TOKTOK"),r.a.createElement("h2",{className:"logoSubtitle"},"keep track of everything")),r.a.createElement("div",{className:"halfColumn"},r.a.createElement("div",{className:"loginFormContainer"},r.a.createElement(e,null),r.a.createElement("form",{onSubmit:this.handleSignUp,className:"form"},r.a.createElement("input",{className:"emailInput",type:"email",placeholder:"Email",onChange:this.handleEmailChange}),r.a.createElement("input",{className:"passwordInput",type:"password",placeholder:"Password",onChange:this.handlePasswordChange}),r.a.createElement("input",{className:"passwordInput",type:"password",placeholder:"Confirm password",onChange:this.handleConfirmPasswordChange}),r.a.createElement("input",{className:"loginBtn clickable",type:"submit",value:"SIGN UP"})),r.a.createElement("div",null,"Already have an account? ",r.a.createElement(o.b,{to:"/",className:"clickable hyperlink",style:{textDecoration:"none"}},"Login Here")))),r.a.createElement("img",{className:"logoImage",src:g.a,alt:"logo"}))}}]),t}(r.a.Component),f=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={redirect:!1},e}return Object(s.a)(t,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(u.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,r.a.createElement(o.b,{to:"/"},"sign out")))}}]),t}(r.a.Component),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){document.title="TokTok"}},{key:"render",value:function(){return r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",component:E}),r.a.createElement(u.b,{exact:!0,path:"/signup",component:b}),r.a.createElement(u.b,{path:"/home",component:f}),r.a.createElement(u.b,{path:"*",component:d}))}}]),t}(r.a.Component);t(33);Object(l.render)(r.a.createElement(o.a,null,r.a.createElement(v,null)),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.fbfc6432.chunk.js.map