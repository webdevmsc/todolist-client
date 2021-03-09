(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{177:function(e,t,a){},178:function(e,t,a){},301:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(13),o=a.n(r),s=(a(177),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,370)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),o(e),s(e)}))}),i=(a(178),a(159)),c=a(349),l=a(9),d=a(12),u=a.n(d),j=a(20),h=a(144),p=a.n(h).a.create({baseURL:"https://localhost:5001/",headers:{Authorization:"Bearer ".concat(localStorage.token)}});p.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}));var b=function(){return p.get("auth/me")},m=function(e,t){return p.post("https://localhost:5001/auth/login",{email:e,password:t})},g=function(e,t,a){return p.post("https://localhost:5001/auth/register",{email:e,password:t,passwordConfirm:a})},f=function(){return p.get("todo")},O=function(e){return p.patch("todo?Id=".concat(e))},x=function(e){return p.delete("todo?Id=".concat(e))},v=function(e){return p.post("todo",e)},y=function(e){return p.put("todo",e)},S=a(24),T="/todo/SET_TODOS",w="/todo/SET_EDIT_TODO",C="/todo/TOGGLE_DONE",E="/todo/DELETE_TODO",N="/todo/ADD_TODO",k={todos:null},I=function(e){return{type:T,payload:{todos:e}}},R=function(e,t){return{type:C,todo:{todoId:e,updated:t}}},P=function(e){return{type:E,todoId:e}},L=function(e){return{type:N,todo:e}},D=function(e){return{type:w,todo:e}},B=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:0===(a=e.sent).data.status&&(n=a.data.data,t(I(n)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:0===(n=t.sent).data.status&&a(R(e,n.data.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(l.a)(Object(l.a)({},e),t.payload);case C:return Object(l.a)(Object(l.a)({},e),{},{todos:e.todos.map((function(e){return e.id!==t.todo.todoId?e:Object(l.a)(Object(l.a)({},e),{},{status:!e.status,updated:t.todo.updated})}))});case N:return Object(l.a)(Object(l.a)({},e),{},{todos:[t.todo].concat(Object(S.a)(e.todos))});case E:return Object(l.a)(Object(l.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.todoId}))});case w:return Object(l.a)(Object(l.a)({},e),{},{todos:e.todos.map((function(e){return e.id===t.todo.id?Object.assign({},e,t.todo):e}))});default:return e}},q="/auth/SET_USER_DATA",F="/auth/SET_LOGIN_ERRORS",M="/auth/SET_REGISTER_ERRORS",z="/auth/SET_REGISTER_SUCCEEDED",W={login:null,isAuth:!1,loginErrors:null,registerErrors:null},H=function(e){return{type:F,payload:{loginErrors:e}}},G=function(e,t){return{type:q,payload:{login:e,isAuth:t}}},U=function(e){return{type:z,payload:{successMessage:e}}},J=function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:0===(a=e.sent).data.status&&null!=a.data.data?(n=a.data.data,t(G(n,!0)),t(B())):t(G(null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:case M:case F:case z:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},K=a(53),X=a(334),Y=a(345),Z=a(346),Q=a(347),$=a(63),ee=a(358),te=a(304),ae=a(14),ne=a(42),re=a(363),oe=a(337),se=a(338),ie=a(339),ce=a(364),le=a(344),de=a(18),ue=a(2),je=Object(X.a)((function(){return{loginForm:{display:"flex",flexDirection:"column"}}})),he=de.a({email:de.c("Enter your email").email("Enter a valid email").required("Email is required"),password:de.c("Enter your password").max(30,"Maximum length is 30 chars").required("Password is required")}),pe=function(e){var t=e.login,a=e.loginErrors,r=je(),o=Object(n.useState)(!1),s=Object(ae.a)(o,2),i=s[0],c=s[1],l=function(){c(!1)},d=Object(ne.a)({initialValues:{email:"",password:""},validationSchema:he,onSubmit:function(e){p(!0),t(e.email,e.password),p(!1),d.resetForm()}}),u=Object(n.useState)(!1),j=Object(ae.a)(u,2),h=j[0],p=j[1];return Object(ue.jsxs)(ee.a,{mr:3,children:[Object(ue.jsx)(te.a,{variant:"outlined",color:"inherit",onClick:function(){return c(!0)},children:"Login"}),Object(ue.jsxs)(re.a,{className:r.loginForm,open:i,onClose:l,maxWidth:"xs",children:[Object(ue.jsx)(oe.a,{children:"Login"}),Object(ue.jsxs)("form",{onSubmit:d.handleSubmit,children:[Object(ue.jsxs)(se.a,{children:[Object(ue.jsx)(ie.a,{children:"Log in to see videos"}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"email",name:"email",label:"Email",value:d.values.email,onChange:d.handleChange,error:d.touched.email&&Boolean(d.errors.email),helperText:d.touched.email&&d.errors.email}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:d.values.password,onChange:d.handleChange,error:d.touched.password&&Boolean(d.errors.password),helperText:d.touched.password&&d.errors.password}),a&&Object(ue.jsx)(ie.a,{children:a})]}),Object(ue.jsxs)(le.a,{children:[Object(ue.jsx)(te.a,{onClick:l,color:"primary",children:"Cancel"}),Object(ue.jsx)(te.a,{type:"submit",disabled:h,color:"primary",children:"Login"})]})]})]})]})},be=Object(X.a)((function(){return{registerForm:{display:"flex",flexDirection:"column"},success:{textAlign:"center"}}})),me=de.a({email:de.c("Enter your email").email("Enter a valid email").required("Email is required"),password:de.c("Enter your password").min(6,"Password should be of minimum 6 characters length").required("Password is required"),passwordConfirm:de.c("Enter password confirmation").min(6,"Password should be of minimum 6 characters length").oneOf([de.b("password"),null],"Passwords must match").required("Password is required")}),ge=function(e){var t=e.register,a=e.registerErrors,r=e.successMessage,o=Object(n.useState)(!1),s=Object(ae.a)(o,2),i=s[0],c=s[1],l=function(){return c(!1)},d=Object(ne.a)({initialValues:{email:"",password:"",passwordConfirm:""},validationSchema:me,onSubmit:function(){var e=Object(j.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d.resetForm(),m(!0),e.next=4,t(a.email,a.password,a.passwordConfirm);case 4:m(!1),setTimeout((function(){return c(!1)}),1e3);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),h=Object(n.useState)(!1),p=Object(ae.a)(h,2),b=p[0],m=p[1],g=be();return Object(ue.jsxs)(ee.a,{children:[Object(ue.jsx)(te.a,{variant:"contained",color:"secondary",onClick:function(){return c(!0)},onKeyDown:function(e){"Enter"===e.key&&e.preventDefault()},children:"Sign up"}),Object(ue.jsxs)(re.a,{className:g.registerForm,open:i,onClose:l,maxWidth:"xs",children:[Object(ue.jsx)(oe.a,{children:"Sign Up"}),Object(ue.jsxs)("form",{onSubmit:d.handleSubmit,onKeyDown:function(e){"Enter"===e.key&&e.preventDefault()},children:[Object(ue.jsxs)(se.a,{children:[Object(ue.jsx)(ie.a,{children:"Sign up to work with todolist"}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"email",name:"email",label:"Email",value:d.values.email,onChange:d.handleChange,error:d.touched.email&&Boolean(d.errors.email),helperText:d.touched.email&&d.errors.email}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"password",name:"password",label:"Password",type:"password",value:d.values.password,onChange:d.handleChange,error:d.touched.password&&Boolean(d.errors.password),helperText:d.touched.password&&d.errors.password}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"check",name:"passwordConfirm",label:"Password Confirmation",type:"password",value:d.values.passwordConfirm,onChange:d.handleChange,error:d.touched.passwordConfirm&&Boolean(d.errors.passwordConfirm),helperText:d.touched.passwordConfirm&&d.errors.passwordConfirm}),a&&Object(ue.jsx)(ie.a,{children:a}),r&&Object(ue.jsx)(ie.a,{className:g.success,children:r})]}),Object(ue.jsxs)(le.a,{children:[Object(ue.jsx)(te.a,{onClick:l,color:"primary",children:"Cancel"}),Object(ue.jsx)(te.a,{type:"submit",disabled:b,color:"primary",children:"Register"})]})]})]})]})},fe=function(e){var t=e.getTodos,a=e.login,n=e.register,r=e.loginErrors,o=e.registerErrors,s=e.successMessage,i=e.handleSucceeded;return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(pe,{handleSucceeded:i,login:a,loginErrors:r,getTodos:t}),Object(ue.jsx)(ge,{handleSucceeded:i,register:n,registerErrors:o,successMessage:s})]})},Oe=Object(X.a)((function(e){return{title:{flexGrow:1},logout:{marginLeft:e.spacing(2)}}})),xe=function(e){var t=e.handleSucceeded,a=e.login,n=e.register,r=e.logout,o=e.isAuth,s=e.userName,i=e.loginErrors,c=e.registerErrors,l=e.successMessage,d=e.getTodos,u=Oe();return Object(ue.jsx)(Y.a,{position:"fixed",children:Object(ue.jsx)(Z.a,{fixed:!0,children:Object(ue.jsxs)(Q.a,{children:[Object(ue.jsx)($.a,{variant:"h6",className:u.title,children:"Todo list web app"}),o?Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(ee.a,{children:Object(ue.jsx)($.a,{variant:"h6",children:s})}),Object(ue.jsx)(te.a,{className:u.logout,variant:"contained",color:"secondary",onClick:function(){r()},children:"Logout"})]}):Object(ue.jsx)(fe,{handleSucceeded:t,login:a,register:n,loginErrors:i,registerErrors:c,successMessage:l,getTodos:d})]})})})},ve=Object(K.b)((function(e){return{isAuth:e.auth.isAuth,userName:e.auth.login,loginErrors:e.auth.loginErrors,registerErrors:e.auth.registerErrors,successMessage:e.auth.successMessage}}),{login:function(e,t){return function(){var a=Object(j.a)(u.a.mark((function a(n){var r,o;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m(e,t);case 2:0===(r=a.sent).data.status?(localStorage.setItem("token",r.data.data),n(J())):(o=r.data.Message,n(H(o)),setTimeout((function(){return n(H(null))}),2e3));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logout:function(){return function(e){localStorage.removeItem("token"),e(G(null,null)),e(I(null))}},register:function(e,t,a){return function(){var n=Object(j.a)(u.a.mark((function n(r){var o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e,t,a);case 2:0!==(o=n.sent).data.status?r((s=o.data.errors,{type:M,payload:{registerErrors:s}})):(r(U(o.data.message)),setTimeout((function(){return r(U(null))}),1500));case 4:case"end":return n.stop()}var s}),n)})));return function(e){return n.apply(this,arguments)}}()},getTodos:B})((function(e){return Object(ue.jsx)(xe,Object(l.a)({},e))})),ye=a(357),Se=a(90),Te=a(91),we=a(54),Ce=a(155),Ee="INITIALIZED_SUCCESS",Ne="GLOBAL_ERROR",ke={initialized:!1,globalError:null},Ie=function(e){return{type:Ne,error:e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ee:return Object(l.a)(Object(l.a)({},e),{},{initialized:!0});case Ne:return Object(l.a)(Object(l.a)({},e),{},{globalError:t.error});default:return e}},Pe=Object(we.c)({auth:V,app:Re,todo:A}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,De=Object(we.e)(Pe,Le(Object(we.a)(Ce.a))),Be=a(352),_e=a(305),Ae=a(343),qe=a(306),Fe=a(353),Me=a(362),ze=a(355),We=a(356),He=a(360),Ge=a(158),Ue=a.n(Ge),Je=a(367),Ve=a(342),Ke=a(366),Xe=a(359),Ye=a(348),Ze=a(350),Qe=a(156),$e=a.n(Qe),et=["Idea","Infancy","Infatuation","Inflation","Insanity","Intelligence","Irritation","Joy","Justice","Kindness","Laughter","Law","Liberty","Lie","Life","Loneliness","Loss","Love","Luck","Luxury","Marriage","Mercy","Movement","Nap","Pain","Patience","Peace","Peculiarity","Perseverance","Philosophy","Pleasure","Poverty","Power","Pride","Principle","Reality","Relaxation","Relief","Religion","Restoration","Rhythm","Riches","Right","Rumour","Sacrifice","Sanity","Satisfaction","Self-control","Sensitivity","Service","Shock","Silliness","Skill","Slavery","Sleep","Solitude","Sorrow","Speed","Strength","Strictness","Stupidity","Success","Surprise","Talent","Thought","Thrill","Timing","Tiredness","Tolerance","Trend","Trust","Truth"],tt=Object(i.a)({palette:{primary:Te.a,secondary:Se.a}}),at=Object(X.a)((function(e){return{dialog:{display:"flex",flexDirection:"column"},secondaryIcon:{marginRight:e.spacing(.5),transition:"all 0.3s ease-out","&:hover":{cursor:"pointer",color:"purple"}},tags:{marginTop:"15px",display:"flex",justifyContent:"space-around"},formControl:{margin:e.spacing(1),minWidth:120},addButtons:{display:"flex",justifyContent:"center",margin:"15px auto",minWidth:"400px"},addButton:{flexGrow:1},done:{color:"white"}}})),nt=de.a({title:de.c("Enter tasks' title").required("Title is required"),content:de.c("Enter tasks' content").min(3,"Description should be of minimum 3 characters length").required("Task description is required")}),rt=function(e){var t=e.editTodo,a=e.editingTodo;Object(n.useEffect)((function(){R(a.status)}),[a]);var r=at(),o=Object(n.useState)(!1),s=Object(ae.a)(o,2),i=s[0],d=s[1],u=function(){d(!1)},j=Object(n.useState)(!1),h=Object(ae.a)(j,2),p=h[0],b=h[1],m=Object(n.useState)(a.tags[0]),g=Object(ae.a)(m,2),f=g[0],O=g[1],x=Object(n.useState)(a.tags[1]),v=Object(ae.a)(x,2),y=v[0],S=v[1],T=Object(n.useState)(a.tags[2]),w=Object(ae.a)(T,2),C=w[0],E=w[1],N=Object(n.useState)(1==a.status),k=Object(ae.a)(N,2),I=k[0],R=k[1],P=Object(ne.a)({initialValues:{title:a.title,content:a.content,status:1==a.status,tags:[f,y,C],id:a.id,added:a.added},validationSchema:nt,onSubmit:function(e){b(!0),t(Object(l.a)(Object(l.a)({},e),{},{tags:[f,y,C],status:1==I})),b(!1),P.resetForm(),u()}});return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)($e.a,{className:r.secondaryIcon,onClick:function(){d(!0)}}),Object(ue.jsxs)(re.a,{open:i,onClose:u,maxWidth:"sm",children:[Object(ue.jsx)(oe.a,{children:"Edit Task"}),Object(ue.jsxs)("form",{onSubmit:P.handleSubmit,children:[Object(ue.jsxs)(se.a,{className:r.dialog,children:[Object(ue.jsx)(ie.a,{children:"Edit todo"}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"title",name:"title",label:"Title",value:P.values.title,onChange:P.handleChange,error:P.touched.title&&Boolean(P.errors.title),helperText:P.touched.title&&P.errors.title}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"content",name:"content",label:"Content",value:P.values.content,onChange:P.handleChange,error:P.touched.content&&Boolean(P.errors.content),helperText:P.touched.content&&P.errors.content}),Object(ue.jsxs)(ee.a,{className:r.tags,children:[Object(ue.jsxs)(Ve.a,{variant:"outlined",className:r.formControl,children:[Object(ue.jsx)(Ke.a,{children:"Tag"}),Object(ue.jsxs)(Xe.a,{value:f,onChange:function(e){O(e.target.value)},label:"Tag",children:[Object(ue.jsx)(Ye.a,{value:"",children:Object(ue.jsx)("em",{children:"None"})}),et.map((function(e){return Object(ue.jsx)(Ye.a,{value:e,children:e},e)}))]})]}),Object(ue.jsxs)(Ve.a,{variant:"outlined",className:r.formControl,children:[Object(ue.jsx)(Ke.a,{children:"Tag"}),Object(ue.jsxs)(Xe.a,{value:y,onChange:function(e){S(e.target.value)},label:"Tag",children:[Object(ue.jsx)(Ye.a,{value:"",children:Object(ue.jsx)("em",{children:"None"})}),et.map((function(e){return Object(ue.jsx)(Ye.a,{value:e,children:e},e)}))]})]}),Object(ue.jsxs)(Ve.a,{variant:"outlined",className:r.formControl,children:[Object(ue.jsx)(Ke.a,{children:"Tag"}),Object(ue.jsxs)(Xe.a,{value:C,onChange:function(e){E(e.target.value)},label:"Tag",children:[Object(ue.jsx)(Ye.a,{value:"",children:Object(ue.jsx)("em",{children:"None"})}),et.map((function(e){return Object(ue.jsx)(Ye.a,{value:e,children:e},e)}))]})]})]}),Object(ue.jsx)(c.a,{theme:tt,children:Object(ue.jsxs)(Ze.a,{className:r.addButtons,size:"large",color:"primary",children:[Object(ue.jsx)(te.a,{className:"".concat(r.addButton," ").concat(I&&r.done),color:"primary",variant:I?"contained":"outlined",onClick:function(){return R(!0)},children:"Completed"}),Object(ue.jsx)(te.a,{className:r.addButton,color:"secondary",variant:I?"outlined":"contained",onClick:function(){return R(!1)},children:"In progress"})]})})]}),Object(ue.jsxs)(le.a,{children:[Object(ue.jsx)(te.a,{onClick:u,color:"primary",children:"Cancel"}),Object(ue.jsx)(te.a,{type:"submit",disabled:p,color:"primary",children:"Edit"})]})]})]})]})},ot=a(351),st=a(157),it=a.n(st),ct=["Idea","Infancy","Infatuation","Inflation","Insanity","Intelligence","Irritation","Joy","Justice","Kindness","Laughter","Law","Liberty","Lie","Life","Loneliness","Loss","Love","Luck","Luxury","Marriage","Mercy","Movement","Nap","Pain","Patience","Peace","Peculiarity","Perseverance","Philosophy","Pleasure","Poverty","Power","Pride","Principle","Reality","Relaxation","Relief","Religion","Restoration","Rhythm","Riches","Right","Rumour","Sacrifice","Sanity","Satisfaction","Self-control","Sensitivity","Service","Shock","Silliness","Skill","Slavery","Sleep","Solitude","Sorrow","Speed","Strength","Strictness","Stupidity","Success","Surprise","Talent","Thought","Thrill","Timing","Tiredness","Tolerance","Trend","Trust","Truth"],lt=Object(X.a)((function(e){return{addNew:{marginLeft:"auto",marginRight:e.spacing(2.5),marginTop:"10px"},tags:{marginTop:"15px",display:"flex",justifyContent:"space-around"},dialog:{display:"flex",flexDirection:"column"},formControl:{margin:e.spacing(1),minWidth:120}}})),dt=de.a({title:de.c("Enter tasks' title").required("Title is required"),content:de.c("Enter tasks' content").min(3,"Description should be of minimum 3 characters length").required("Task description is required")}),ut=function(e){var t=e.addTodo,a=lt(),r=Object(n.useState)(!1),o=Object(ae.a)(r,2),s=o[0],i=o[1],c=function(){y.resetForm(),h(""),g(""),v(""),i(!1)},d=Object(n.useState)(""),u=Object(ae.a)(d,2),j=u[0],h=u[1],p=Object(n.useState)(""),b=Object(ae.a)(p,2),m=b[0],g=b[1],f=Object(n.useState)(""),O=Object(ae.a)(f,2),x=O[0],v=O[1],y=Object(ne.a)({initialValues:{title:"",content:"",tags:[]},validationSchema:dt,onSubmit:function(e){C(!0),t(Object(l.a)(Object(l.a)({},e),{},{tags:[j,m,x]})),C(!1),h(""),g(""),v(""),y.resetForm(),c()}}),S=Object(n.useState)(!1),T=Object(ae.a)(S,2),w=T[0],C=T[1];return Object(ue.jsxs)(ue.Fragment,{children:[Object(ue.jsx)(ot.a,{color:"secondary",className:a.addNew,onClick:function(){return i(!0)},children:Object(ue.jsx)(it.a,{})}),Object(ue.jsxs)(re.a,{open:s,onClose:c,maxWidth:"sm",children:[Object(ue.jsx)(oe.a,{children:"New Task"}),Object(ue.jsxs)("form",{onSubmit:y.handleSubmit,children:[Object(ue.jsxs)(se.a,{className:a.dialog,children:[Object(ue.jsx)(ie.a,{children:"Fill in the gaps"}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"title",name:"title",label:"Title",value:y.values.title,onChange:y.handleChange,error:y.touched.title&&Boolean(y.errors.title),helperText:y.touched.title&&y.errors.title}),Object(ue.jsx)(ce.a,{fullWidth:!0,id:"content",name:"content",label:"Content",value:y.values.content,onChange:y.handleChange,error:y.touched.content&&Boolean(y.errors.content),helperText:y.touched.content&&y.errors.content}),Object(ue.jsxs)(ee.a,{className:a.tags,children:[Object(ue.jsxs)(Ve.a,{variant:"outlined",className:a.formControl,children:[Object(ue.jsx)(Ke.a,{children:"Tag"}),Object(ue.jsxs)(Xe.a,{value:j,onChange:function(e){h(e.target.value)},label:"Tag",children:[Object(ue.jsx)(Ye.a,{value:"",children:Object(ue.jsx)("em",{children:"None"})}),ct.map((function(e){return Object(ue.jsx)(Ye.a,{value:e,children:e},e)}))]})]}),Object(ue.jsxs)(Ve.a,{variant:"outlined",className:a.formControl,children:[Object(ue.jsx)(Ke.a,{children:"Tag"}),Object(ue.jsxs)(Xe.a,{value:m,onChange:function(e){g(e.target.value)},label:"Tag",children:[Object(ue.jsx)(Ye.a,{value:"",children:Object(ue.jsx)("em",{children:"None"})}),ct.map((function(e){return Object(ue.jsx)(Ye.a,{value:e,children:e},e)}))]})]}),Object(ue.jsxs)(Ve.a,{variant:"outlined",className:a.formControl,children:[Object(ue.jsx)(Ke.a,{children:"Tag"}),Object(ue.jsxs)(Xe.a,{value:x,onChange:function(e){v(e.target.value)},label:"Tag",children:[Object(ue.jsx)(Ye.a,{value:"",children:Object(ue.jsx)("em",{children:"None"})}),ct.map((function(e){return Object(ue.jsx)(Ye.a,{value:e,children:e},e)}))]})]})]})]}),Object(ue.jsxs)(le.a,{children:[Object(ue.jsx)(te.a,{onClick:c,color:"primary",children:"Cancel"}),Object(ue.jsx)(te.a,{type:"submit",disabled:w,color:"primary",children:"Add"})]})]})]})]})},jt=Object(X.a)((function(e){return{todos:{display:"flex",flexDirection:"column",position:"relative",backgroundColor:e.palette.background.paper,padding:0},listItem:{display:"flex",flexDirection:"row",alignItems:"center"},listItemText:{marginRight:"15px"},chip:{marginRight:"10px"},note:{transitionDuration:"0.3s","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.05)",cursor:"pointer"}},done:{color:"white"},doneNote:{transitionDuration:"0.3s",backgroundColor:"rgba(104, 62, 182, 0.30)",opacity:"50%","&:hover":{cursor:"pointer"}},dates:{marginLeft:"auto",marginRight:"30px"},date:{marginRight:"8px"},paper:{paddingBottom:e.spacing(21),borderRadius:"20px",minHeight:e.spacing(40),position:"relative",marginBottom:e.spacing(4)},todolist:{marginTop:e.spacing(12)},todolistHeader:{display:"flex",paddingTop:e.spacing(1),paddingBottom:e.spacing(1),backgroundColor:"#ff1744",color:"white",borderRadius:"20px 20px 0 0"},todolistHeaderDates:{display:"flex",marginLeft:"auto",marginRight:e.spacing(8),alignItems:"center"},todolistHeaderTitle:{marginLeft:e.spacing(8.8),fontSize:"18px"},todolistHeaderDatesItem:{fontSize:"18px",marginRight:e.spacing(7.5),marginLeft:e.spacing(4)},secondary:{marginRight:e.spacing(.3),paddingTop:"3px"},secondaryIcon:{marginRight:e.spacing(.5),transition:"all 0.3s ease-out","&:hover":{cursor:"pointer",color:"purple"}},tablePagination:{position:"absolute",bottom:0,right:0},addTodo:{position:"absolute",bottom:60,right:0},message:{padding:e.spacing(6),fontSize:"26px"},unAuthorized:{marginTop:e.spacing(12),fontSize:"28px"},progress:{marginTop:e.spacing(12)}}})),ht=function(e){var t,a=e.todos,r=e.toggleDone,o=e.deleteTodo,s=e.addTodo,i=e.editTodo,c=e.isAuth,l=jt(),d=function(e){return function(){o(e)}},u=function(e){return function(){_(e)}},j=Object(n.useState)(0),h=Object(ae.a)(j,2),p=h[0],b=h[1],m=Object(n.useState)(8),g=Object(ae.a)(m,2),f=g[0],O=g[1];return c?a?(t=f>0?a.slice(p*f,p*f+f):a,Object(ue.jsx)(Z.a,{className:l.todolist,children:Object(ue.jsxs)(_e.a,{className:l.paper,children:[Object(ue.jsxs)("div",{className:l.todolistHeader,children:[Object(ue.jsx)("div",{className:l.todolistHeaderTitle,children:"Task"}),Object(ue.jsxs)("div",{className:l.todolistHeaderDates,children:[Object(ue.jsx)("div",{className:l.todolistHeaderDatesItem,children:"Added"}),Object(ue.jsx)("div",{className:l.todolistHeaderDatesItem,children:"Updated"})]})]}),a.length>0?Object(ue.jsx)(Ae.a,{className:l.todos,children:t.map((function(e){return Object(ue.jsxs)(qe.a,{className:e.status?l.doneNote:l.note,onClick:(t=e.id,function(){r(t)}),children:[Object(ue.jsx)(Fe.a,{children:Object(ue.jsx)(Me.a,{checked:1==e.status,onClick:u(e.id)})}),Object(ue.jsxs)("div",{className:l.listItem,children:[Object(ue.jsx)(ze.a,{className:l.listItemText,primary:e.title,secondary:e.content}),e.tags&&e.tags.map((function(e){return e&&Object(ue.jsx)(Je.a,{variant:"outlined",className:l.chip,label:e},e.id)}))]}),Object(ue.jsxs)("div",{className:l.dates,children:[Object(ue.jsx)(Je.a,{variant:"outlined",className:l.date,label:new Date(Date.parse(e.added)).toLocaleString()},Date.parse(e.added)),Object(ue.jsx)(Je.a,{variant:"outlined",className:l.date,label:new Date(Date.parse(e.updated)).toLocaleString()},e.updated)]}),Object(ue.jsxs)(We.a,{className:l.secondary,children:[Object(ue.jsx)(rt,{editingTodo:e,editTodo:i}),Object(ue.jsx)(Ue.a,{className:l.secondaryIcon,onClick:d(e.id)})]})]},e.id);var t}))}):Object(ue.jsx)("div",{className:l.message,children:Object(ue.jsx)($.a,{variant:"inherit",children:"Your todolist is empty. Please add some tasks"})}),Object(ue.jsx)("div",{className:l.addTodo,children:Object(ue.jsx)(ut,{addTodo:s})}),Object(ue.jsx)(He.a,{className:l.tablePagination,rowsPerPageOptions:[8,16,25],component:"div",count:a.length,rowsPerPage:f,page:p,onChangePage:function(e,t){b(t)},onChangeRowsPerPage:function(e){O(parseInt(e.target.value,10)),b(0)}})]})})):Object(ue.jsx)(Be.a,{className:l.progress}):Object(ue.jsx)(Z.a,{className:l.unAuthorized,children:Object(ue.jsxs)($.a,{variant:"inherit",children:[Object(ue.jsx)("strong",{children:"Login:"})," demo@mail.ru",Object(ue.jsx)("br",{}),Object(ue.jsx)("strong",{children:"Password:"})," 123321dd"]})})},pt=Object(K.b)((function(e){return{isAuth:e.auth.isAuth,todos:e.todo.todos}}),{getTodos:B,toggleDone:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:0===(n=t.sent).data.status&&a(R(e,n.data.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},deleteTodo:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:0===t.sent.data.status&&a(P(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addTodo:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:0===(n=t.sent).data.status&&a(L(Object(l.a)(Object(l.a)({},e),{},{id:n.data.data.id,added:n.data.data.added,updated:n.data.data.added})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},editTodo:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e);case 2:0===(n=t.sent).data.status&&a(D(n.data.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},toggleDoneCheckBox:_})((function(e){return Object(ue.jsx)(ht,Object(l.a)({},e))})),bt=Object(i.a)({palette:{primary:ye.a,secondary:Se.a,success:Te.a}});var mt=Object(K.b)((function(e){return{initialized:e.app.initialized,globalError:e.app.globalError}}),{initializeApp:function(){return function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(J());case 2:t({type:Ee});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},handleError:function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(Ie(e.toString()));case 2:setTimeout((function(){return a(Ie(null))}),5e3);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.initializeApp,a=e.initialized;return Object(n.useEffect)((function(){t()})),a?Object(ue.jsx)(ue.Fragment,{children:Object(ue.jsxs)(c.a,{theme:bt,children:[Object(ue.jsx)(ve,{}),Object(ue.jsx)(pt,{})]})}):Object(ue.jsx)(Be.a,{})})),gt=function(){return Object(ue.jsx)(K.a,{store:De,children:Object(ue.jsx)(mt,{})})};o.a.render(Object(ue.jsx)(gt,{}),document.getElementById("root")),s()}},[[301,1,2]]]);
//# sourceMappingURL=main.00646036.chunk.js.map