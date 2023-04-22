"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{8677:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var r,a,i,d,s,c,o=t(5984),l=t(168),u=t(6444),p=u.ZP.div(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n"]))),m=(u.ZP.div(a||(a=(0,l.Z)(["\n  max-width: 1200px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 15px;\n  margin: 0 auto;\n"]))),u.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: solid 1px gray;\n  border-radius: 5px;\n  width: 400px;\n  margin: 0 auto;\n  background-color: #f0f0f0;\n"]))),u.ZP.ul(d||(d=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  align-items: 'center';\n  padding: 0px;\n"])))),x=u.ZP.li(s||(s=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: space-between;\n  outline: solid 1px gray;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding: 10px;\n"]))),f=u.ZP.button(c||(c=(0,l.Z)(["\n  height: 20px;\n  background-color: #c0c0c0;\n"]))),h=t(9434),g=t(6916),b=function(n){return n.contacts.items},j=function(n){return n.filter},v=(0,g.P1)([b,j],(function(n,e){return n.filter((function(n){return n.name.toUpperCase().includes(e.toUpperCase())}))})),y=t(1131),Z=t(4074),C=t(5705),w=t(6727),k=t(3329),P=(0,w.Ry)({name:(0,w.Z_)().required()}),A=function(){var n=(0,h.v9)(b),e=(0,h.I0)();return(0,k.jsx)("div",{children:(0,k.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:P,onSubmit:function(t,r){var a=r.resetForm,i={id:(0,o.x0)(),name:t.name,number:t.number};n.map((function(n){return n.name})).includes(i.name)?alert("Contact ".concat(i.name," already exists.")):(e((0,y.el)(t)),a())},children:(0,k.jsxs)(C.l0,{autoComplete:"off",children:[(0,k.jsx)(C.Bc,{name:"name",component:"div"}),(0,k.jsxs)(p,{children:["Name",(0,k.jsx)(C.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)(p,{children:["Number",(0,k.jsx)(C.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)("button",{type:"submit",children:"Add contact"})]})})})},_=(t(2791),function(){var n=(0,h.I0)(),e=(0,h.v9)(j);return(0,k.jsx)("div",{children:(0,k.jsxs)("label",{children:["Search",(0,k.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){n((0,Z.T)(e.target.value.toLowerCase()))}})]})})}),N=function(){var n=(0,h.v9)(v),e=(0,h.I0)();return(0,k.jsxs)(k.Fragment,{children:[" ",(0,k.jsx)(A,{}),(0,k.jsx)(m,{children:n.map((function(n){return(0,k.jsxs)(x,{children:[(0,k.jsxs)("p",{children:[n.name,":"]}),(0,k.jsx)("p",{children:n.number}),(0,k.jsx)(f,{onClick:function(){return t=n.id,e((0,y._f)(t)),void e((0,Z.T)(""));var t},children:"delete contact"})]},(0,o.x0)())}))}),(0,k.jsx)(_,{})]})}}}]);
//# sourceMappingURL=677.324c3d06.chunk.js.map