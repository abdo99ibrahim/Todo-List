"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[505],{505:(y,d,i)=>{i.r(d),i.d(d,{TaskModule:()=>q});var a=i(9808),c=i(1196);class p{constructor(){this.ID=0,this.Title="",this.IsDone=!1,this.CreatedDate=new Date}}var t=i(1223),h=i(520);let Z=(()=>{class s{constructor(e,n){this._activatedRoute=e,this._httpClient=n,this.task=new p}ngOnInit(){this._activatedRoute.paramMap.subscribe(e=>{let n=e.get("id");this._httpClient.get(`https://api.mohamed-sadek.com/Task/GetByID?id=${n}`).subscribe(r=>{this.task=r.Data},r=>{})})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(c.gz),t.Y36(h.eN))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-details"]],decls:9,vars:2,consts:[["routerLink","task/details/2"]],template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"details works!"),t.qZA(),t.TgZ(2,"h1"),t._uU(3),t.qZA(),t.TgZ(4,"h1"),t._uU(5),t.qZA(),t.TgZ(6,"h2"),t.TgZ(7,"a",0),t._uU(8,"go to another task"),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.hij(" Task ID: ",n.task.ID,"\n"),t.xp6(2),t.hij(" Task Title: ",n.task.Title,"\n"))},directives:[c.yS],styles:[""]}),s})();var g=i(3071);let T=(()=>{class s{constructor(e,n){this._userService=e,this._router=n}canActivate(e,n){let r=this._userService.isLoggedIn();return r||this._router.navigateByUrl("/user/login"),r}}return s.\u0275fac=function(e){return new(e||s)(t.LFG(g.K),t.LFG(c.F0))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var k=i(8571);const m=function(s){return{"done-task":s}},A=function(s){return["/task/details",s]};function _(s,o){if(1&s){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"th",13),t._uU(2),t.qZA(),t.TgZ(3,"td",14),t.TgZ(4,"a",15),t._uU(5),t.ALo(6,"uppercase"),t.ALo(7,"lowercase"),t.qZA(),t.qZA(),t.TgZ(8,"td"),t.TgZ(9,"input",16),t.NdJ("change",function(){const u=t.CHM(e).$implicit;return t.oxw().update(u)}),t.qZA(),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t.TgZ(14,"button",17),t.NdJ("click",function(){const u=t.CHM(e).index;return t.oxw().delete(u)}),t._uU(15,"DELETE"),t.qZA(),t.qZA(),t.qZA()}if(2&s){const e=o.$implicit,n=o.index;t.xp6(2),t.Oqu(n+1),t.xp6(1),t.Q6J("ngClass",t.VKq(13,m,e.IsDone)),t.xp6(1),t.Q6J("routerLink",t.VKq(15,A,e.ID)),t.xp6(1),t.Oqu(t.lcZ(6,6,t.lcZ(7,8,e.Title))),t.xp6(4),t.Q6J("checked",e.IsDone),t.xp6(2),t.hij(" ",t.xi3(12,10,e.CreatedDate,"dd-MM-yyyy HH:ss")," ")}}let v=(()=>{class s{constructor(e,n,r){this._taskService=e,this._userService=n,this._router=r,this.tasks=[],this.name="Abdelrahman Ibrahim",this.id=1e6}ngOnInit(){this._userService.isLoggedIn()||this._router.navigateByUrl("/user/login"),this._taskService.get().subscribe(e=>{console.log(JSON.stringify(e)),this.tasks=e.Data},e=>{})}add(e){let n=new p;n.Title=e,this._taskService.post(n).subscribe(r=>{this.tasks.push(n)},r=>{console.log("Error")})}update(e){e.IsDone=!e.IsDone,this._taskService.put(e).subscribe(n=>{},n=>{})}delete(e){this._taskService.delete(this.tasks[e].ID).subscribe(r=>{this.tasks.splice(e,1)},r=>{})}getPendingTasksCount(){return this.tasks.filter(e=>!e.IsDone).length}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(k.M),t.Y36(g.K),t.Y36(c.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-tasks"]],decls:31,vars:8,consts:[[1,"container"],[1,"card"],[1,"card-header"],[1,"bg-warning","text-dark"],[1,"row"],[1,"col-md-8"],["type","text",1,"form-control",3,"keyup.enter"],["inputTitle",""],[1,"col-md-4"],["type","button",1,"btn","btn-primary",3,"click"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],[3,"ngClass"],[3,"routerLink"],["type","checkbox",3,"checked","change"],[1,"btn","btn-danger",3,"click"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.ALo(4,"number"),t.ALo(5,"uppercase"),t.TgZ(6,"span",3),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"div",4),t.TgZ(9,"div",5),t.TgZ(10,"input",6,7),t.NdJ("keyup.enter",function(){t.CHM(r);const l=t.MAs(11);return n.add(l.value)}),t.qZA(),t.qZA(),t.TgZ(12,"div",8),t.TgZ(13,"button",9),t.NdJ("click",function(){t.CHM(r);const l=t.MAs(11);return n.add(l.value)}),t._uU(14,"Add"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",4),t.TgZ(16,"table",10),t.TgZ(17,"thead"),t.TgZ(18,"tr"),t.TgZ(19,"th",11),t._uU(20,"#"),t.qZA(),t.TgZ(21,"th",11),t._uU(22,"Task"),t.qZA(),t.TgZ(23,"th",11),t._uU(24,"Status"),t.qZA(),t.TgZ(25,"th",11),t._uU(26,"Created At"),t.qZA(),t.TgZ(27,"th",11),t._uU(28,"Delete"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"tbody"),t.YNc(30,_,16,17,"tr",12),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}2&e&&(t.xp6(3),t.AsE(" ",t.lcZ(4,4,n.id)," Hello ",t.lcZ(5,6,n.name)," , your panding tasks is "),t.xp6(4),t.Oqu(n.getPendingTasksCount()),t.xp6(23),t.Q6J("ngForOf",n.tasks))},directives:[a.sg,a.mk,c.yS],pipes:[a.JJ,a.gd,a.i8,a.uU],styles:[""]}),s})();var f=i(4065);const C=[{path:"details/:id",component:Z},{path:"",component:v,canActivate:[T]}];let q=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[a.ez,c.Bz.forChild(C),f.m]]}),s})()}}]);