(this["webpackJsonpintro-react"]=this["webpackJsonpintro-react"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),o=c.n(s),r=(c(12),c(7)),i=c(2),l=c(0),d=a.a.createContext();function u(e){var t=[],c="TODOS_V1";null===localStorage.getItem(c)?localStorage.setItem(c,"[]"):(t=localStorage.getItem(c),t=JSON.parse(t));var n=a.a.useState(t),s=Object(i.a)(n,2),o=s[0],u=s[1],j=a.a.useState(!1),O=Object(i.a)(j,2),m=O[0],h=O[1],b=a.a.useState(""),p=Object(i.a)(b,2),x=p[0],f=p[1],k=o.filter((function(e){return e.description.toLowerCase().includes(x.toLowerCase())})),T=o.filter((function(e){return e.completed})).length,v=o.length;return Object(l.jsx)(d.Provider,{value:{completedTodos:T,totalTodos:v,openModal:m,setOpenModal:h,todos:o,setTodos:u,checkTask:function(e){var t=o.findIndex((function(t){return t.description===e})),n=o[t].completed,a=Object(r.a)(o);a[t].completed=!n,u(a),localStorage.setItem(c,JSON.stringify(a))},deleteTask:function(e){var t=o.filter((function(t){return t.description!==e}));u(t),localStorage.setItem(c,JSON.stringify(t))},searchText:x,setSearchText:f,searchedTodos:k,addTask:function(e){var t={description:e,completed:!1},n=[].concat(Object(r.a)(o),[t]);u(n),localStorage.setItem(c,JSON.stringify(n))}},children:e.children})}c(14);function j(){var e=a.a.useContext(d),t=e.totalTodos,c=e.completedTodos;return Object(l.jsxs)("h1",{class:"Title",children:["Haz completado ",c," de ",t," tareas "]})}c(15);function O(){var e=a.a.useContext(d),t=e.setOpenModal,c=e.setSearchText;return Object(l.jsxs)("div",{className:"Search",id:"test",children:[Object(l.jsxs)("div",{className:"Search__Form",children:[Object(l.jsx)("img",{src:"/intro-react/searchIcon.svg",alt:"",className:"Search__Icon"}),Object(l.jsx)("input",{type:"search",id:"SearchForm",className:"Search__Input",placeholder:"Busca tu tarea aqu\xed",onChange:function(e){c(e.target.value)}})]}),Object(l.jsx)("img",{src:"/intro-react/plusIcon.svg",alt:"",className:"Search__PlusButton",id:"AddButton",onClick:function(){t((function(e){return!e}))}})]})}c(16);function m(e){var t=a.a.useContext(d).addTask,c=a.a.useState(""),n=Object(i.a)(c,2),s=n[0],o=n[1],r=function(){e.setOpenModal((function(e){return!e}))};return Object(l.jsx)("div",{className:"Modal",id:"modal",children:Object(l.jsxs)("div",{className:"Modal__Content",children:[Object(l.jsx)("img",{src:"/intro-react/closeButton.svg",alt:"",onClick:r,className:"Modal__CloseButtonIcon"}),Object(l.jsxs)("div",{className:"CreateTodo",children:[Object(l.jsx)("p",{className:"CreateTodo__Title",children:"Escribe un nuevo To-Do"}),Object(l.jsxs)("form",{onSubmit:t,children:[Object(l.jsx)("textarea",{className:"CreateTodo__TextArea",name:"todoDescription",onChange:function(e){o(e.target.value)}}),Object(l.jsxs)("div",{className:"CreateTodo__Buttons",children:[Object(l.jsx)("button",{className:"CreateTodo__Cancel",type:"button",onClick:r,children:"Cancelar"}),Object(l.jsx)("button",{className:"CreateTodo__Accept",type:"button",onClick:function(c){t(s),e.setOpenModal((function(e){return!e}))},children:" Agregar tarea "})]})]})]})]})})}function h(e){return o.a.createPortal(Object(l.jsx)(m,{setOpenModal:e.setOpenModal}),document.getElementById("Modal"))}c(17);function b(e){var t=a.a.useContext(d),c=t.checkTask,n=t.deleteTask;return Object(l.jsxs)("div",{className:"Task",children:[Object(l.jsx)("img",{src:"/intro-react/checkIcon.svg",alt:"",className:"Task__CheckIcon",onClick:function(){return c(e.taskDescription)}}),Object(l.jsx)("input",{class:"Task__Check",type:"checkbox",value:"",checked:e.isDone}),Object(l.jsx)("div",{className:"Task__Description",children:Object(l.jsx)("p",{children:e.taskDescription})}),Object(l.jsx)("img",{src:"/intro-react/deleteIcon.svg",alt:"",width:"10px",className:"Task__DeleteIcon",onClick:function(){return n(e.taskDescription)}})]})}c(18);function p(e){return Object(l.jsx)("div",{className:"TasksContainer",children:Object(l.jsx)(b,{taskDescription:e.todoTask.description,isDone:e.todoTask.completed,markTaskAsDone:e.markTaskAsDone})})}function x(){var e=a.a.useContext(d),t=e.openModal,c=e.setOpenModal,n=e.searchedTodos,s=e.checkTask;return Object(l.jsxs)("div",{children:[Object(l.jsx)(j,{}),Object(l.jsx)(O,{}),n.map((function(e){return Object(l.jsx)(p,{todoTask:e,markTaskAsDone:s})})),t&&Object(l.jsx)(h,{setOpenModal:c})]})}function f(){return Object(l.jsx)(u,{children:Object(l.jsx)(x,{})})}o.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.d2474c1a.chunk.js.map