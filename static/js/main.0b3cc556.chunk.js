(this.webpackJsonpgorila=this.webpackJsonpgorila||[]).push([[0],{34:function(e,a,t){e.exports=t(75)},57:function(e,a,t){},63:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(13),l=t.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(4),i=t(12),s=t(5),u=(t(16),t(6)),m=t.n(u),p=t(11),d=t(2),f=t(3),g=t.n(f),E=t(9);t(57);function h(){var e=Object(i.f)(),a=Object(n.useState)(""),t=Object(d.a)(a,2),o=t[0],l=t[1],u=Object(n.useState)(!1),f=Object(d.a)(u,2),h=f[0],v=f[1];function b(){return(b=Object(p.a)(m.a.mark((function a(t){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:v(!0),t.preventDefault(),o&&g.a.post("http://wmonitor.tk:50124/cliente/".concat(o)).then((function(a){e.push("/megahack-gorila/escolha"),l(""),localStorage.setItem("gorilaEmail",a.data.result._id.$oid)})).catch((function(){s.a.error("Ops, ocorreu um erro ao tentar fazer o login.")})).finally((function(){v(!1)}));case 3:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement("section",{className:"login-register-container",onSubmit:function(e){return b.apply(this,arguments)}},r.a.createElement("div",null,r.a.createElement("h1",{className:"login-register-text"},"BEM-VINDO AO GORILA!!")),r.a.createElement("form",{className:"login-register-form"},r.a.createElement("input",{value:o,onChange:function(e){return l(e.target.value)},className:"input-default",placeholder:"email",type:"email"}),r.a.createElement("div",{className:"form-actions"},r.a.createElement(c.b,{to:"/megahack-gorila/cadastro",className:"button-secondary"},"Cadastre-se"),r.a.createElement("button",{type:"submit",className:"button-default"},h?r.a.createElement(E.e,{className:"spin"}):"Entrar"))))}t(63);function v(){var e=Object(i.f)(),a=Object(n.useState)(""),t=Object(d.a)(a,2),o=t[0],l=t[1],s=Object(n.useState)(""),u=Object(d.a)(s,2),f=u[0],E=u[1],h=Object(n.useState)(""),v=Object(d.a)(h,2),b=v[0],C=v[1],O=Object(n.useState)(""),N=Object(d.a)(O,2),j=N[0],k=N[1],y=Object(n.useState)(""),q=Object(d.a)(y,2),S=q[0],w=q[1];function x(){return(x=Object(p.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,g.a.post("http://wmonitor.tk:50124/cliente/create?nome=".concat(o,"&idade=").concat(b,"&sexo=").concat(S,"&localidade=''&telefone=").concat(j,"&email=").concat(f,"&path_image='&perfil=''"));case 3:return a.next=5,g.a.post("http://wmonitor.tk:50124/cliente/".concat(f));case 5:n=a.sent,localStorage.setItem("gorilaEmail",n.data.result._id.$oid),e.push("/megahack-gorila/escolha"),l(""),E(""),C(""),w("");case 12:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return r.a.createElement("section",{className:"login-register-container",onSubmit:function(e){return x.apply(this,arguments)}},r.a.createElement("div",null,r.a.createElement("h1",{className:"login-register-text"},"COMECE A INVESTIR J\xc1!")),r.a.createElement("form",{className:"login-register-form register-form"},r.a.createElement("input",{value:o,onChange:function(e){return l(e.target.value)},className:"input-default",placeholder:"name",type:"text"}),r.a.createElement("input",{value:f,onChange:function(e){return E(e.target.value)},className:"input-default",placeholder:"email",type:"text"}),r.a.createElement("div",{className:"form-age-gender-container"},r.a.createElement("input",{value:b,onChange:function(e){return C(e.target.value)},className:"input-default age-input",placeholder:"age",type:"number",min:"1"}),r.a.createElement("input",{value:S,onChange:function(e){return w(e.target.value)},className:"input-default gender-input",placeholder:"gender",type:"text"})),r.a.createElement("input",{value:j,onChange:function(e){return k(e.target.value)},className:"input-default",placeholder:"telefone",type:"text"}),r.a.createElement("div",{className:"form-actions"},r.a.createElement(c.b,{to:"/",className:"button-secondary"},"Fazer Login"),r.a.createElement("button",{type:"submit",className:"button-default"},"Cadastra-se"))))}var b=t(32),C=t.n(b),O=t(33);t(29),t(66);function N(e){var a=localStorage.getItem("gorilaEmail"),t=Object(i.f)(),n="https://randomuser.me/api/portraits/".concat(e.info.photo,".jpg");console.log(e.info);return r.a.createElement("div",{className:"professionalCard"},r.a.createElement("div",{className:"professionalPhoto",style:{backgroundImage:"url(".concat(n,")")}},r.a.createElement("div",{className:"professionalActions"},r.a.createElement("button",{className:"plusButton",onClick:function(){return Object(O.confirmAlert)({title:"Confirmar?",message:"Voc\xea deseja confirmar a escolha de ".concat(e.info.name,", com especialidade em ").concat(e.info.skils.map((function(e){return e})).join(", ")),buttons:[{label:"Sim",onClick:function(){var n=e.info.id;g.a.post("http://wmonitor.tk:50124/cliente/".concat(a,"/adicionar/profissional/").concat(n)).then((function(e){s.a.success("Profissional vinculado com sucesso!"),localStorage.setItem("profissionalVinculadoId",n),t.push("/gorila")})).catch((function(){return s.a.error("Ops, ocorreu um problema ao tentar carregar a lista de profissionais.")}))}},{label:"N\xe3o"}]})}},r.a.createElement(E.f,null)),r.a.createElement("button",{className:"infoButton"},r.a.createElement(E.d,null)))),r.a.createElement("div",{className:"professional-info"},r.a.createElement("h2",{className:"professional-name"},e.info.name),r.a.createElement("div",null,r.a.createElement(C.a,{rating:e.info.rating,starRatedColor:"#FEF753",numberOfStars:5,name:"rating",starDimension:"20px",starSpacing:"2px"}),r.a.createElement("span",{className:"professionalRating"},e.info.rating)),r.a.createElement("span",{className:"totalOfClients"},e.info.totalOfClients," clientes"),r.a.createElement("div",{className:"skils"},r.a.createElement("h4",null,"Especialidades"),r.a.createElement("ul",null,e.info.skils.map((function(e){return r.a.createElement("li",null,e)}))))))}t(67);function j(){var e=localStorage.getItem("gorilaEmail"),a=Object(n.useState)([]),t=Object(d.a)(a,2),o=t[0],l=t[1],i=Object(n.useCallback)(Object(p.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.post("http://wmonitor.tk:50124/cliente/mentores/".concat(e)).then((function(e){l(e.data.result[0].perfil_compativel.map((function(e,a){return{id:e._id,name:e.nome,rating:Math.round(5*Math.random()),totalOfClients:Math.round(a+1*Math.random()),photo:"men/21",skils:[e.especialidade]}})))})).catch((function(){return s.a.error("Ops, ocorreu um problema ao tentar carregar a lista de profissionais.")}));case 2:case"end":return a.stop()}}),a)}))),[e]);return Object(n.useEffect)((function(){i()}),[i]),r.a.createElement("section",{className:"professionalsListContainer"},r.a.createElement("header",{className:"professionalsListHeader"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:"https://gorila.com.br/assets/img/logo.svg",alt:"Gorila"}))),r.a.createElement("h1",null,"Profissionais"),r.a.createElement("span",{className:"resultInfo"},o.length," profissionais compat\xedveis com seu perfil"),r.a.createElement("div",{className:"listContainer"},o.map((function(e){return r.a.createElement(N,{key:e._id,info:e})}))))}t(68);function k(){var e=Object(i.f)(),a=localStorage.getItem("gorilaEmail"),t=Object(n.useState)("a"),o=Object(d.a)(t,2),l=o[0],u=o[1],f=Object(n.useState)("a"),E=Object(d.a)(f,2),h=E[0],v=E[1],b=Object(n.useState)("a"),C=Object(d.a)(b,2),O=C[0],N=C[1],j=Object(n.useState)("a"),k=Object(d.a)(j,2),y=k[0],q=k[1],S=Object(n.useState)("a"),w=Object(d.a)(S,2),x=w[0],I=w[1],A=Object(n.useState)("a"),P=Object(d.a)(A,2),z=P[0],M=P[1],B=Object(n.useState)("a"),D=Object(d.a)(B,2),L=D[0],_=D[1],G=Object(n.useState)("a"),R=Object(d.a)(G,2),V=R[0],F=R[1];function J(){return(J=Object(p.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,g.a.post("http://wmonitor.tk:50123/?&q=".concat(l,"&q=").concat(h,"&q=").concat(O,"&q=").concat(y,"&q=").concat(x,"&q=").concat(z,"&q=").concat(L,"&q=").concat(V,"&id=").concat(a)).then((function(e){return s.a.info("Seu perfil \xe9: ".concat(e.data.Perfil))}));case 3:e.push("/megahack-gorila/lista-de-profissionais");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("form",{className:"profileForm"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:"https://gorila.com.br/assets/img/logo.svg",alt:"Gorila"})),r.a.createElement("h1",null,"Antes de prosseguir, precisamos saber qual o seu perfil de investimeto."),r.a.createElement("p",null,"Por quanto tempo voc\xea pretende deixar seu dinheiro investido?",r.a.createElement("label",null,r.a.createElement("input",{value:"a",defaultChecked:!0,onChange:function(e){return u(e.currentTarget.value)},type:"radio",name:"q1"}),"a - Menos de 6 meses"),r.a.createElement("label",null,r.a.createElement("input",{value:"b",onChange:function(e){return u(e.target.value)},type:"radio",name:"q1"}),"b - Entre 6 meses a 1 ano"),r.a.createElement("label",null,r.a.createElement("input",{value:"c",onChange:function(e){return u(e.target.value)},type:"radio",name:"q1"}),"c - Entre 1 ano a 3 anos"),r.a.createElement("label",null,r.a.createElement("input",{value:"d",onChange:function(e){return u(e.target.value)},type:"radio",name:"q1"}),"d - Acima de 3 anos")),r.a.createElement("p",null,"Qual o objetivo desse investimento?",r.a.createElement("label",null,r.a.createElement("input",{value:"a",defaultChecked:!0,onChange:function(e){return v(e.target.value)},type:"radio",name:"q2"}),"a - Preserva\xe7\xe3o do capital para n\xe3o perder valor ao longo do tempo, assumindo baixos riscos de perdas"),r.a.createElement("label",null,r.a.createElement("input",{value:"b",onChange:function(e){return v(e.target.value)},type:"radio",name:"q2"}),"b - Aumento gradual do capital ao longo do tempo, assumindo riscos moderados"),r.a.createElement("label",null,r.a.createElement("input",{value:"c",onChange:function(e){return v(e.target.value)},type:"radio",name:"q2"}),"c - Aumento do capital acima da taxa de retorno m\xe9dia do mercado, mesmo que isso implique assumir riscos de perdas elevadas"),r.a.createElement("label",null,r.a.createElement("input",{value:"d",onChange:function(e){return v(e.target.value)},type:"radio",name:"q2"}),"d - Obter no curto prazo retornos elevados e signifcativamente acima da taxa de retorno m\xe9dia do mercado, assumindo riscos elevados")),r.a.createElement("p",null,"Quais as aplica\xe7\xf5es fnanceiras realizadas nos \xfaltimos 24 meses?",r.a.createElement("label",null,r.a.createElement("input",{value:"a",defaultChecked:!0,onChange:function(e){return N(e.target.value)},type:"radio",name:"q3"}),"a - N\xe3o realizei aplica\xe7\xf5es fnanceiras ou realizei apenas com produtos e/ou fundos de renda fxa"),r.a.createElement("label",null,r.a.createElement("input",{value:"b",onChange:function(e){return N(e.target.value)},type:"radio",name:"q3"}),"b - Apliquei em produtos ou fundos de renda fxa e/ou renda vari\xe1vel e/ou derivativos com fnalidade de hedge (prote\xe7\xe3o)"),r.a.createElement("label",null,r.a.createElement("input",{value:"c",onChange:function(e){return N(e.target.value)},type:"radio",name:"q3"}),"c - Apliquei em produtos ou fundos de renda fxa e/ou renda vari\xe1vel e/ou derivativos com fnalidade especula\xe7\xe3o ou alavancagem")),r.a.createElement("p",null,"Qual das alternativas melhor classifca sua forma\xe7\xe3o e experi\xeancia com o mercado fnanceiro?",r.a.createElement("label",null,r.a.createElement("input",{value:"a",defaultChecked:!0,onChange:function(e){return q(e.target.value)},type:"radio",name:"q4"}),"a - N\xe3o possuo forma\xe7\xe3o acad\xeamica ou conhecimento do mercado fnanceiro"),r.a.createElement("label",null,r.a.createElement("input",{value:"b",onChange:function(e){return q(e.target.value)},type:"radio",name:"q4"}),"b - Possuo forma\xe7\xe3o acad\xeamica na \xe1rea fnanceira, mas n\xe3o tenho experi\xeancia com o mercado fnanceiro"),r.a.createElement("label",null,r.a.createElement("input",{value:"c",onChange:function(e){return q(e.target.value)},type:"radio",name:"q4"}),"c - Possuo forma\xe7\xe3o acad\xeamica em outra \xe1rea, mas possuo conhecimento do mercado fnanceiro"),r.a.createElement("label",null,r.a.createElement("input",{value:"d",onChange:function(e){return q(e.target.value)},type:"radio",name:"q4"}),"d - Possuo forma\xe7\xe3o acad\xeamica na \xe1rea fnanceira ou pleno conhecimento do mercado fnanceiro")),r.a.createElement("p",null,"Considerando seus rendimentos regulares, qual a porcentagem voc\xea pretende reservar para aplica\xe7\xf5es fnanceiras?",r.a.createElement("label",null,r.a.createElement("input",{value:"a",defaultChecked:!0,onChange:function(e){return I(e.target.value)},type:"radio",name:"q5"}),"a - No m\xe1ximo 25%"),r.a.createElement("label",null,r.a.createElement("input",{value:"b",onChange:function(e){return I(e.target.value)},type:"radio",name:"q5"}),"b - Entre 25,01 e 50%"),r.a.createElement("label",null,r.a.createElement("input",{value:"c",onChange:function(e){return I(e.target.value)},type:"radio",name:"q5"}),"c - Acima de 50%")),r.a.createElement("p",null,"Caso as suas aplica\xe7\xf5es sofressem uma queda superior a 30%, o que voc\xea faria?",r.a.createElement("label",null,r.a.createElement("input",{value:"a",defaultChecked:!0,onChange:function(e){return M(e.target.value)},type:"radio",name:"q6"}),"a - Resgataria toda a aplica\xe7\xe3o e aplicaria na poupan\xe7a"),r.a.createElement("label",null,r.a.createElement("input",{value:"b",onChange:function(e){return M(e.target.value)},type:"radio",name:"q6"}),"b - Manteria aplica\xe7\xe3o aguardando uma melhora do mercado"),r.a.createElement("label",null,r.a.createElement("input",{value:"c",onChange:function(e){return M(e.target.value)},type:"radio",name:"q6"}),"c - Aumentaria a aplica\xe7\xe3o para aproveitar as oportunidades do mercado")),r.a.createElement("p",null,"Como est\xe1 distribu\xeddo o seu patrim\xf4nio?",r.a.createElement("label",null,r.a.createElement("input",{value:"a",defaultChecked:!0,onChange:function(e){return _(e.target.value)},type:"radio",name:"q7"}),"a - Meu patrim\xf4nio n\xe3o est\xe1 aplicado ou est\xe1 todo aplicado em renda fxa e/ou im\xf3veis"),r.a.createElement("label",null,r.a.createElement("input",{value:"b",onChange:function(e){return _(e.target.value)},type:"radio",name:"q7"}),"b - Menos de 25% em renda vari\xe1vel e o restante em renda fxa e/ou im\xf3veis"),r.a.createElement("label",null,r.a.createElement("input",{value:"c",onChange:function(e){return _(e.target.value)},type:"radio",name:"q7"}),"c - Entre 25,01 e 50% aplicado em renda vari\xe1vel e o restante em renda fxa e/ou im\xf3veis"),r.a.createElement("label",null,r.a.createElement("input",{value:"d",onChange:function(e){return _(e.target.value)},type:"radio",name:"q7"}),"d - Acima de 50% em renda vari\xe1vel")),r.a.createElement("p",null,"Em rela\xe7\xe3o as aplica\xe7\xf5es e rendimentos, em qual dessas situa\xe7\xf5es voc\xea se enquadra?",r.a.createElement("label",null,r.a.createElement("input",{value:"a",defaultChecked:!0,onChange:function(e){return F(e.target.value)},type:"radio",name:"q8"}),"a - Conto com o rendimento dessas aplica\xe7\xf5es para complementar minha renda mensal"),r.a.createElement("label",null,r.a.createElement("input",{value:"b",onChange:function(e){return F(e.target.value)},type:"radio",name:"q8"}),"b - Eventualmente posso resgatar parte das aplica\xe7\xf5es para fazer frente aos meus gastos. Contudo, n\xe3o tenho inten\xe7\xe3o de resgatar no curto prazo e pretendo fazer aplica\xe7\xf5es regulares"),r.a.createElement("label",null,r.a.createElement("input",{value:"c",onChange:function(e){return F(e.target.value)},type:"radio",name:"q8"}),"c - N\xe3o tenho inten\xe7\xe3o de resgatar no curto prazo e ainda pretendo fazer aplica\xe7\xf5es regulares"),r.a.createElement("label",null,r.a.createElement("input",{value:"d",onChange:function(e){return F(e.target.value)},type:"radio",name:"q8"}),"d - N\xe3o tenho inten\xe7\xe3o de resgatar no curto prazo, mas n\xe3o pretendo realizar novas aplica\xe7\xf5es")),r.a.createElement("button",{type:"submit",className:"button-default",onClick:function(e){return J.apply(this,arguments)}},"Continuar"))}t(69);function y(e){var a=localStorage.getItem("gorilaEmail"),t=localStorage.getItem("profissionalVinculadoId"),o=Object(n.useState)(!1),l=Object(d.a)(o,2),c=l[0],i=l[1],s=Object(n.useState)(!1),u=Object(d.a)(s,2),m=u[0],p=u[1];return r.a.createElement("div",{className:"client-card"},r.a.createElement("button",{className:"client-card-action ".concat(c?"client-card-action-checked":""),onClick:function(){p(!0),g.a.post("http://wmonitor.tk:50124/solicitacao/nova?idProfissional=".concat(t,"&idCliente=").concat(a,"&status=ativo")).then((function(e){i(!c)})).finally((function(){p(!1)}))}},m?r.a.createElement(E.e,{className:"spin"}):r.a.createElement("span",null,c?r.a.createElement(E.b,null):r.a.createElement(E.f,null))),r.a.createElement("h2",{className:"client-name"},e.info.name),r.a.createElement("span",{className:"client-type"},e.info.type),r.a.createElement("div",{className:"preferences"},r.a.createElement("h4",null,"Telefone"),e.info.telefone),r.a.createElement("div",{className:"preferences"},r.a.createElement("h4",null,"Email"),e.info.email))}t(70);function q(){Object(n.useEffect)((function(){g.a.post("http://wmonitor.tk:50124/clients").then((function(e){o(e.data.result.map((function(e){return{id:e.id,name:e.nome,type:e.perfil_investimento,telefone:e.telefone,email:e.email}})))}))}),[]);var e=Object(n.useState)([]),a=Object(d.a)(e,2),t=a[0],o=a[1];return r.a.createElement("section",{className:"clientsListContainer"},r.a.createElement("header",{className:"clientsListHeader"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:"https://gorila.com.br/assets/img/logo.svg",alt:"Gorila"}))),r.a.createElement("h1",null,"Clientes"),r.a.createElement("span",{className:"resultInfo"},t.length," clientes compat\xedveis com seu perfil"),r.a.createElement("div",{className:"listContainer"},t.map((function(e){return r.a.createElement(y,{key:e.id,info:e})}))))}t(71);function S(){var e=Object(i.f)(),a=localStorage.getItem("profissionalVinculadoId");return r.a.createElement("div",{className:"gorilaPage"},r.a.createElement("h1",null,"Agora voc\xea j\xe1 possue um profissional para te acompanhar! Bastar iniciar lan\xe7ar seus investimentos no ",r.a.createElement("a",{href:"https://gorila.com.br/"},"Gorila"),"!"),r.a.createElement("button",{className:"button-default",onClick:function(){console.log("http://wmonitor.tk:50124/cliente/remover/profissional/".concat(a)),g.a.post("http://wmonitor.tk:50124/cliente/remover/profissional/".concat(a)).then((function(){s.a.success("Profissional desvinculado com sucesso!"),e.push("/megahack-gorila/lista-de-profissionais")}))}},"Desvincular"))}t(72);function w(){var e=localStorage.getItem("gorilaEmail"),a=Object(i.f)(),t=Object(n.useCallback)(Object(p.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("http://wmonitor.tk:50124/solicitacao/findByActives/".concat(e)),g.a.get("http://wmonitor.tk:50124/solicitacao/findByActives/".concat(e)).then((function(e){console.log(e.data)})).catch((function(){return s.a.error("Ops, ocorreu um problema.")}));case 2:case"end":return a.stop()}}),a)}))),[e]);Object(n.useEffect)((function(){t()}),[t]);var o=Object(n.useState)([{name:"Jo\xe3o",id:"1"},{name:"Marcos",id:"2"},{name:"Pedro",id:"3"}]),l=Object(d.a)(o,2),u=l[0],f=l[1];return r.a.createElement("section",{className:"pendentsRequests"},r.a.createElement("header",{className:"professionalsListHeader"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{src:"https://gorila.com.br/assets/img/logo.svg",alt:"Gorila"}))),r.a.createElement("h1",null,"Pendentes"),r.a.createElement("span",{className:"resultInfo"},u.length," profissionais que querem te acompanhar."),r.a.createElement("ul",null,u.map((function(e){return r.a.createElement("li",{key:e.id},e.name,r.a.createElement("button",{className:"acept",onClick:function(){return t=e.id,void g.a.post("http://wmonitor.tk:50124/solicitacao/aceitar/".concat(t)).then((function(e){console.log(e.data),a.push("/gorila")})).catch((function(){return s.a.error("Ops, ocorreu um problema.")}));var t}},r.a.createElement(E.a,null)),r.a.createElement("button",{className:"reject",onClick:function(){return a=e.id,f(u.filter((function(e){return e.id!==a}))),void g.a.post("http://wmonitor.tk:50124/solicitacao/rejeitar/".concat(a)).then((function(e){console.log(e.data)})).catch((function(){return s.a.error("Ops, ocorreu um problema.")}));var a}},r.a.createElement(E.c,null)))}))))}t(73);function x(){return r.a.createElement("div",{className:"escolha"},r.a.createElement("h1",null,"Deseja descobrir seu perfil de investimento e escolher um profissional que combine com seu perfil?"),r.a.createElement("div",{className:"acoes"},r.a.createElement(c.b,{to:"/megahack-gorila/definicao-de-perfil"},"Sim"),r.a.createElement(c.b,{to:"/megahack-gorila/requisicoes-pendentes"},"N\xe3o")))}t(74);function I(){return r.a.createElement("div",{className:"app"},r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/gorila",component:S}),r.a.createElement(i.a,{path:"/megahack-gorila/escolha",component:x}),r.a.createElement(i.a,{path:"/megahack-gorila/requisicoes-pendentes",component:w}),r.a.createElement(i.a,{path:"/megahack-gorila/lista-de-clientes",component:q}),r.a.createElement(i.a,{path:"/megahack-gorila/lista-de-profissionais",component:j}),r.a.createElement(i.a,{path:"/megahack-gorila/definicao-de-perfil",component:k}),r.a.createElement(i.a,{path:"/megahack-gorila/cadastro",component:v}),r.a.createElement(i.a,{path:"/",component:h}))))}s.a.configure(),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.0b3cc556.chunk.js.map