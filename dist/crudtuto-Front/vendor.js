"use strict";(self.webpackChunkcrudtuto_Front=self.webpackChunkcrudtuto_Front||[]).push([["vendor"],{4505:(Qe,De,F)=>{F.d(De,{X:()=>Q});var a=F(7806),L=F(9086);class Q extends a.xQ{constructor(ve){super(),this._value=ve}get value(){return this.getValue()}_subscribe(ve){const ie=super._subscribe(ve);return ie&&!ie.closed&&ve.next(this._value),ie}getValue(){if(this.hasError)throw this.thrownError;if(this.closed)throw new L.N;return this._value}next(ve){super.next(this._value=ve)}}},7473:(Qe,De,F)=>{F.d(De,{y:()=>X});var a=F(14),Q=F(1482),ge=F(9957),ie=F(6831),ye=F(6800),le=F(146);let X=(()=>{class U{constructor(ue){this._isScalar=!1,ue&&(this._subscribe=ue)}lift(ue){const fe=new U;return fe.source=this,fe.operator=ue,fe}subscribe(ue,fe,He){const{operator:be}=this,Te=function ve(U,Z,ue){if(U){if(U instanceof a.L)return U;if(U[Q.b])return U[Q.b]()}return U||Z||ue?new a.L(U,Z,ue):new a.L(ge.c)}(ue,fe,He);if(Te.add(be?be.call(Te,this.source):this.source||le.v.useDeprecatedSynchronousErrorHandling&&!Te.syncErrorThrowable?this._subscribe(Te):this._trySubscribe(Te)),le.v.useDeprecatedSynchronousErrorHandling&&Te.syncErrorThrowable&&(Te.syncErrorThrowable=!1,Te.syncErrorThrown))throw Te.syncErrorValue;return Te}_trySubscribe(ue){try{return this._subscribe(ue)}catch(fe){le.v.useDeprecatedSynchronousErrorHandling&&(ue.syncErrorThrown=!0,ue.syncErrorValue=fe),function L(U){for(;U;){const{closed:Z,destination:ue,isStopped:fe}=U;if(Z||fe)return!1;U=ue&&ue instanceof a.L?ue:null}return!0}(ue)?ue.error(fe):console.warn(fe)}}forEach(ue,fe){return new(fe=G(fe))((He,be)=>{let Te;Te=this.subscribe(Xe=>{try{ue(Xe)}catch(ut){be(ut),Te&&Te.unsubscribe()}},be,He)})}_subscribe(ue){const{source:fe}=this;return fe&&fe.subscribe(ue)}[ie.L](){return this}pipe(...ue){return 0===ue.length?this:(0,ye.U)(ue)(this)}toPromise(ue){return new(ue=G(ue))((fe,He)=>{let be;this.subscribe(Te=>be=Te,Te=>He(Te),()=>fe(be))})}}return U.create=Z=>new U(Z),U})();function G(U){if(U||(U=le.v.Promise||Promise),!U)throw new Error("no Promise impl found");return U}},9957:(Qe,De,F)=>{F.d(De,{c:()=>Q});var a=F(146),L=F(8897);const Q={closed:!0,next(ge){},error(ge){if(a.v.useDeprecatedSynchronousErrorHandling)throw ge;(0,L.z)(ge)},complete(){}}},5266:(Qe,De,F)=>{F.d(De,{L:()=>L});var a=F(14);class L extends a.L{notifyNext(ge,ve,ie,ye,le){this.destination.next(ve)}notifyError(ge,ve){this.destination.error(ge)}notifyComplete(ge){this.destination.complete()}}},7806:(Qe,De,F)=>{F.d(De,{xQ:()=>le,Yc:()=>ye});var a=F(7473),L=F(14),Q=F(6957),ge=F(9086);class ve extends Q.w{constructor(U,Z){super(),this.subject=U,this.subscriber=Z,this.closed=!1}unsubscribe(){if(this.closed)return;this.closed=!0;const U=this.subject,Z=U.observers;if(this.subject=null,!Z||0===Z.length||U.isStopped||U.closed)return;const ue=Z.indexOf(this.subscriber);-1!==ue&&Z.splice(ue,1)}}var ie=F(1482);class ye extends L.L{constructor(U){super(U),this.destination=U}}let le=(()=>{class G extends a.y{constructor(){super(),this.observers=[],this.closed=!1,this.isStopped=!1,this.hasError=!1,this.thrownError=null}[ie.b](){return new ye(this)}lift(Z){const ue=new X(this,this);return ue.operator=Z,ue}next(Z){if(this.closed)throw new ge.N;if(!this.isStopped){const{observers:ue}=this,fe=ue.length,He=ue.slice();for(let be=0;be<fe;be++)He[be].next(Z)}}error(Z){if(this.closed)throw new ge.N;this.hasError=!0,this.thrownError=Z,this.isStopped=!0;const{observers:ue}=this,fe=ue.length,He=ue.slice();for(let be=0;be<fe;be++)He[be].error(Z);this.observers.length=0}complete(){if(this.closed)throw new ge.N;this.isStopped=!0;const{observers:Z}=this,ue=Z.length,fe=Z.slice();for(let He=0;He<ue;He++)fe[He].complete();this.observers.length=0}unsubscribe(){this.isStopped=!0,this.closed=!0,this.observers=null}_trySubscribe(Z){if(this.closed)throw new ge.N;return super._trySubscribe(Z)}_subscribe(Z){if(this.closed)throw new ge.N;return this.hasError?(Z.error(this.thrownError),Q.w.EMPTY):this.isStopped?(Z.complete(),Q.w.EMPTY):(this.observers.push(Z),new ve(this,Z))}asObservable(){const Z=new a.y;return Z.source=this,Z}}return G.create=(U,Z)=>new X(U,Z),G})();class X extends le{constructor(U,Z){super(),this.destination=U,this.source=Z}next(U){const{destination:Z}=this;Z&&Z.next&&Z.next(U)}error(U){const{destination:Z}=this;Z&&Z.error&&this.destination.error(U)}complete(){const{destination:U}=this;U&&U.complete&&this.destination.complete()}_subscribe(U){const{source:Z}=this;return Z?this.source.subscribe(U):Q.w.EMPTY}}},14:(Qe,De,F)=>{F.d(De,{L:()=>ye});var a=F(1900),L=F(9957),Q=F(6957),ge=F(1482),ve=F(146),ie=F(8897);class ye extends Q.w{constructor(G,U,Z){switch(super(),this.syncErrorValue=null,this.syncErrorThrown=!1,this.syncErrorThrowable=!1,this.isStopped=!1,arguments.length){case 0:this.destination=L.c;break;case 1:if(!G){this.destination=L.c;break}if("object"==typeof G){G instanceof ye?(this.syncErrorThrowable=G.syncErrorThrowable,this.destination=G,G.add(this)):(this.syncErrorThrowable=!0,this.destination=new le(this,G));break}default:this.syncErrorThrowable=!0,this.destination=new le(this,G,U,Z)}}[ge.b](){return this}static create(G,U,Z){const ue=new ye(G,U,Z);return ue.syncErrorThrowable=!1,ue}next(G){this.isStopped||this._next(G)}error(G){this.isStopped||(this.isStopped=!0,this._error(G))}complete(){this.isStopped||(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe())}_next(G){this.destination.next(G)}_error(G){this.destination.error(G),this.unsubscribe()}_complete(){this.destination.complete(),this.unsubscribe()}_unsubscribeAndRecycle(){const{_parentOrParents:G}=this;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=G,this}}class le extends ye{constructor(G,U,Z,ue){super(),this._parentSubscriber=G;let fe,He=this;(0,a.m)(U)?fe=U:U&&(fe=U.next,Z=U.error,ue=U.complete,U!==L.c&&(He=Object.create(U),(0,a.m)(He.unsubscribe)&&this.add(He.unsubscribe.bind(He)),He.unsubscribe=this.unsubscribe.bind(this))),this._context=He,this._next=fe,this._error=Z,this._complete=ue}next(G){if(!this.isStopped&&this._next){const{_parentSubscriber:U}=this;ve.v.useDeprecatedSynchronousErrorHandling&&U.syncErrorThrowable?this.__tryOrSetError(U,this._next,G)&&this.unsubscribe():this.__tryOrUnsub(this._next,G)}}error(G){if(!this.isStopped){const{_parentSubscriber:U}=this,{useDeprecatedSynchronousErrorHandling:Z}=ve.v;if(this._error)Z&&U.syncErrorThrowable?(this.__tryOrSetError(U,this._error,G),this.unsubscribe()):(this.__tryOrUnsub(this._error,G),this.unsubscribe());else if(U.syncErrorThrowable)Z?(U.syncErrorValue=G,U.syncErrorThrown=!0):(0,ie.z)(G),this.unsubscribe();else{if(this.unsubscribe(),Z)throw G;(0,ie.z)(G)}}}complete(){if(!this.isStopped){const{_parentSubscriber:G}=this;if(this._complete){const U=()=>this._complete.call(this._context);ve.v.useDeprecatedSynchronousErrorHandling&&G.syncErrorThrowable?(this.__tryOrSetError(G,U),this.unsubscribe()):(this.__tryOrUnsub(U),this.unsubscribe())}else this.unsubscribe()}}__tryOrUnsub(G,U){try{G.call(this._context,U)}catch(Z){if(this.unsubscribe(),ve.v.useDeprecatedSynchronousErrorHandling)throw Z;(0,ie.z)(Z)}}__tryOrSetError(G,U,Z){if(!ve.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{U.call(this._context,Z)}catch(ue){return ve.v.useDeprecatedSynchronousErrorHandling?(G.syncErrorValue=ue,G.syncErrorThrown=!0,!0):((0,ie.z)(ue),!0)}return!1}_unsubscribe(){const{_parentSubscriber:G}=this;this._context=null,this._parentSubscriber=null,G.unsubscribe()}}},6957:(Qe,De,F)=>{F.d(De,{w:()=>ie});var a=F(4327),L=F(6549),Q=F(1900);const ve=(()=>{function le(X){return Error.call(this),this.message=X?`${X.length} errors occurred during unsubscription:\n${X.map((G,U)=>`${U+1}) ${G.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=X,this}return le.prototype=Object.create(Error.prototype),le})();class ie{constructor(X){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,X&&(this._ctorUnsubscribe=!0,this._unsubscribe=X)}unsubscribe(){let X;if(this.closed)return;let{_parentOrParents:G,_ctorUnsubscribe:U,_unsubscribe:Z,_subscriptions:ue}=this;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,G instanceof ie)G.remove(this);else if(null!==G)for(let fe=0;fe<G.length;++fe)G[fe].remove(this);if((0,Q.m)(Z)){U&&(this._unsubscribe=void 0);try{Z.call(this)}catch(fe){X=fe instanceof ve?ye(fe.errors):[fe]}}if((0,a.k)(ue)){let fe=-1,He=ue.length;for(;++fe<He;){const be=ue[fe];if((0,L.K)(be))try{be.unsubscribe()}catch(Te){X=X||[],Te instanceof ve?X=X.concat(ye(Te.errors)):X.push(Te)}}}if(X)throw new ve(X)}add(X){let G=X;if(!X)return ie.EMPTY;switch(typeof X){case"function":G=new ie(X);case"object":if(G===this||G.closed||"function"!=typeof G.unsubscribe)return G;if(this.closed)return G.unsubscribe(),G;if(!(G instanceof ie)){const ue=G;G=new ie,G._subscriptions=[ue]}break;default:throw new Error("unrecognized teardown "+X+" added to Subscription.")}let{_parentOrParents:U}=G;if(null===U)G._parentOrParents=this;else if(U instanceof ie){if(U===this)return G;G._parentOrParents=[U,this]}else{if(-1!==U.indexOf(this))return G;U.push(this)}const Z=this._subscriptions;return null===Z?this._subscriptions=[G]:Z.push(G),G}remove(X){const G=this._subscriptions;if(G){const U=G.indexOf(X);-1!==U&&G.splice(U,1)}}}var le;function ye(le){return le.reduce((X,G)=>X.concat(G instanceof ve?G.errors:G),[])}ie.EMPTY=((le=new ie).closed=!0,le)},146:(Qe,De,F)=>{F.d(De,{v:()=>L});let a=!1;const L={Promise:void 0,set useDeprecatedSynchronousErrorHandling(Q){if(Q){const ge=new Error;console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n"+ge.stack)}else a&&console.log("RxJS: Back to a better error behavior. Thank you. <3");a=Q},get useDeprecatedSynchronousErrorHandling(){return a}}},2831:(Qe,De,F)=>{F.d(De,{Ds:()=>ie,IY:()=>ge,ft:()=>le});var a=F(14),L=F(7473),Q=F(3956);class ge extends a.L{constructor(G){super(),this.parent=G}_next(G){this.parent.notifyNext(G)}_error(G){this.parent.notifyError(G),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class ie extends a.L{notifyNext(G){this.destination.next(G)}notifyError(G){this.destination.error(G)}notifyComplete(){this.destination.complete()}}function le(X,G){if(G.closed)return;if(X instanceof L.y)return X.subscribe(G);let U;try{U=(0,Q.s)(X)(G)}catch(Z){G.error(Z)}return U}},4483:(Qe,De,F)=>{F.d(De,{N:()=>ie,c:()=>ve});var a=F(7806),L=F(7473),Q=F(6957),ge=F(8331);class ve extends L.y{constructor(U,Z){super(),this.source=U,this.subjectFactory=Z,this._refCount=0,this._isComplete=!1}_subscribe(U){return this.getSubject().subscribe(U)}getSubject(){const U=this._subject;return(!U||U.isStopped)&&(this._subject=this.subjectFactory()),this._subject}connect(){let U=this._connection;return U||(this._isComplete=!1,U=this._connection=new Q.w,U.add(this.source.subscribe(new ye(this.getSubject(),this))),U.closed&&(this._connection=null,U=Q.w.EMPTY)),U}refCount(){return(0,ge.x)()(this)}}const ie=(()=>{const G=ve.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:G._subscribe},_isComplete:{value:G._isComplete,writable:!0},getSubject:{value:G.getSubject},connect:{value:G.connect},refCount:{value:G.refCount}}})();class ye extends a.Yc{constructor(U,Z){super(U),this.connectable=Z}_error(U){this._unsubscribe(),super._error(U)}_complete(){this.connectable._isComplete=!0,this._unsubscribe(),super._complete()}_unsubscribe(){const U=this.connectable;if(U){this.connectable=null;const Z=U._connection;U._refCount=0,U._subject=null,U._connection=null,Z&&Z.unsubscribe()}}}},9193:(Qe,De,F)=>{F.d(De,{aj:()=>ye});var a=F(7507),L=F(4327),Q=F(5266),ge=F(8774),ve=F(8005);const ie={};function ye(...G){let U,Z;return(0,a.K)(G[G.length-1])&&(Z=G.pop()),"function"==typeof G[G.length-1]&&(U=G.pop()),1===G.length&&(0,L.k)(G[0])&&(G=G[0]),(0,ve.n)(G,Z).lift(new le(U))}class le{constructor(U){this.resultSelector=U}call(U,Z){return Z.subscribe(new X(U,this.resultSelector))}}class X extends Q.L{constructor(U,Z){super(U),this.resultSelector=Z,this.active=0,this.values=[],this.observables=[]}_next(U){this.values.push(ie),this.observables.push(U)}_complete(){const U=this.observables,Z=U.length;if(0===Z)this.destination.complete();else{this.active=Z,this.toRespond=Z;for(let ue=0;ue<Z;ue++)this.add((0,ge.D)(this,U[ue],void 0,ue))}}notifyComplete(U){0==(this.active-=1)&&this.destination.complete()}notifyNext(U,Z,ue){const fe=this.values,be=this.toRespond?fe[ue]===ie?--this.toRespond:this.toRespond:0;fe[ue]=Z,0===be&&(this.resultSelector?this._tryResultSelector(fe):this.destination.next(fe.slice()))}_tryResultSelector(U){let Z;try{Z=this.resultSelector.apply(this,U)}catch(ue){return void this.destination.error(ue)}this.destination.next(Z)}}},7283:(Qe,De,F)=>{F.d(De,{z:()=>ge});var a=F(4139),L=F(6675);function ge(...ve){return function Q(){return(0,L.J)(1)}()((0,a.of)(...ve))}},6439:(Qe,De,F)=>{F.d(De,{E:()=>L,c:()=>Q});var a=F(7473);const L=new a.y(ve=>ve.complete());function Q(ve){return ve?function ge(ve){return new a.y(ie=>ve.schedule(()=>ie.complete()))}(ve):L}},4858:(Qe,De,F)=>{F.d(De,{D:()=>He});var a=F(7473),L=F(3956),Q=F(6957),ge=F(6831),ye=F(8403),le=F(2803),U=F(5192),Z=F(5122);function He(be,Te){return Te?function fe(be,Te){if(null!=be){if(function G(be){return be&&"function"==typeof be[ge.L]}(be))return function ve(be,Te){return new a.y(Xe=>{const ut=new Q.w;return ut.add(Te.schedule(()=>{const Me=be[ge.L]();ut.add(Me.subscribe({next(Kt){ut.add(Te.schedule(()=>Xe.next(Kt)))},error(Kt){ut.add(Te.schedule(()=>Xe.error(Kt)))},complete(){ut.add(Te.schedule(()=>Xe.complete()))}}))})),ut})}(be,Te);if((0,U.t)(be))return function ie(be,Te){return new a.y(Xe=>{const ut=new Q.w;return ut.add(Te.schedule(()=>be.then(Me=>{ut.add(Te.schedule(()=>{Xe.next(Me),ut.add(Te.schedule(()=>Xe.complete()))}))},Me=>{ut.add(Te.schedule(()=>Xe.error(Me)))}))),ut})}(be,Te);if((0,Z.z)(be))return(0,ye.r)(be,Te);if(function ue(be){return be&&"function"==typeof be[le.hZ]}(be)||"string"==typeof be)return function X(be,Te){if(!be)throw new Error("Iterable cannot be null");return new a.y(Xe=>{const ut=new Q.w;let Me;return ut.add(()=>{Me&&"function"==typeof Me.return&&Me.return()}),ut.add(Te.schedule(()=>{Me=be[le.hZ](),ut.add(Te.schedule(function(){if(Xe.closed)return;let Kt,it;try{const Rt=Me.next();Kt=Rt.value,it=Rt.done}catch(Rt){return void Xe.error(Rt)}it?Xe.complete():(Xe.next(Kt),this.schedule())}))})),ut})}(be,Te)}throw new TypeError((null!==be&&typeof be||be)+" is not observable")}(be,Te):be instanceof a.y?be:new a.y((0,L.s)(be))}},8005:(Qe,De,F)=>{F.d(De,{n:()=>ge});var a=F(7473),L=F(5414),Q=F(8403);function ge(ve,ie){return ie?(0,Q.r)(ve,ie):new a.y((0,L.V)(ve))}},4139:(Qe,De,F)=>{F.d(De,{of:()=>ge});var a=F(7507),L=F(8005),Q=F(8403);function ge(...ve){let ie=ve[ve.length-1];return(0,a.K)(ie)?(ve.pop(),(0,Q.r)(ve,ie)):(0,L.n)(ve)}},6587:(Qe,De,F)=>{F.d(De,{_:()=>L});var a=F(7473);function L(ge,ve){return new a.y(ve?ie=>ve.schedule(Q,0,{error:ge,subscriber:ie}):ie=>ie.error(ge))}function Q({error:ge,subscriber:ve}){ve.error(ge)}},1133:(Qe,De,F)=>{F.d(De,{b:()=>L});var a=F(522);function L(Q,ge){return(0,a.zg)(Q,ge,1)}},9151:(Qe,De,F)=>{F.d(De,{h:()=>L});var a=F(14);function L(ve,ie){return function(le){return le.lift(new Q(ve,ie))}}class Q{constructor(ie,ye){this.predicate=ie,this.thisArg=ye}call(ie,ye){return ye.subscribe(new ge(ie,this.predicate,this.thisArg))}}class ge extends a.L{constructor(ie,ye,le){super(ie),this.predicate=ye,this.thisArg=le,this.count=0}_next(ie){let ye;try{ye=this.predicate.call(this.thisArg,ie,this.count++)}catch(le){return void this.destination.error(le)}ye&&this.destination.next(ie)}}},6942:(Qe,De,F)=>{F.d(De,{U:()=>L});var a=F(14);function L(ve,ie){return function(le){if("function"!=typeof ve)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return le.lift(new Q(ve,ie))}}class Q{constructor(ie,ye){this.project=ie,this.thisArg=ye}call(ie,ye){return ye.subscribe(new ge(ie,this.project,this.thisArg))}}class ge extends a.L{constructor(ie,ye,le){super(ie),this.project=ye,this.count=0,this.thisArg=le||this}_next(ie){let ye;try{ye=this.project.call(this.thisArg,ie,this.count++)}catch(le){return void this.destination.error(le)}this.destination.next(ye)}}},6675:(Qe,De,F)=>{F.d(De,{J:()=>Q});var a=F(522),L=F(1356);function Q(ge=Number.POSITIVE_INFINITY){return(0,a.zg)(L.y,ge)}},522:(Qe,De,F)=>{F.d(De,{zg:()=>ge});var a=F(6942),L=F(4858),Q=F(2831);function ge(le,X,G=Number.POSITIVE_INFINITY){return"function"==typeof X?U=>U.pipe(ge((Z,ue)=>(0,L.D)(le(Z,ue)).pipe((0,a.U)((fe,He)=>X(Z,fe,ue,He))),G)):("number"==typeof X&&(G=X),U=>U.lift(new ve(le,G)))}class ve{constructor(X,G=Number.POSITIVE_INFINITY){this.project=X,this.concurrent=G}call(X,G){return G.subscribe(new ie(X,this.project,this.concurrent))}}class ie extends Q.Ds{constructor(X,G,U=Number.POSITIVE_INFINITY){super(X),this.project=G,this.concurrent=U,this.hasCompleted=!1,this.buffer=[],this.active=0,this.index=0}_next(X){this.active<this.concurrent?this._tryNext(X):this.buffer.push(X)}_tryNext(X){let G;const U=this.index++;try{G=this.project(X,U)}catch(Z){return void this.destination.error(Z)}this.active++,this._innerSub(G)}_innerSub(X){const G=new Q.IY(this),U=this.destination;U.add(G);const Z=(0,Q.ft)(X,G);Z!==G&&U.add(Z)}_complete(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()}notifyNext(X){this.destination.next(X)}notifyComplete(){const X=this.buffer;this.active--,X.length>0?this._next(X.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()}}},8331:(Qe,De,F)=>{F.d(De,{x:()=>L});var a=F(14);function L(){return function(ie){return ie.lift(new Q(ie))}}class Q{constructor(ie){this.connectable=ie}call(ie,ye){const{connectable:le}=this;le._refCount++;const X=new ge(ie,le),G=ye.subscribe(X);return X.closed||(X.connection=le.connect()),G}}class ge extends a.L{constructor(ie,ye){super(ie),this.connectable=ye}_unsubscribe(){const{connectable:ie}=this;if(!ie)return void(this.connection=null);this.connectable=null;const ye=ie._refCount;if(ye<=0)return void(this.connection=null);if(ie._refCount=ye-1,ye>1)return void(this.connection=null);const{connection:le}=this,X=ie._connection;this.connection=null,X&&(!le||X===le)&&X.unsubscribe()}}},5722:(Qe,De,F)=>{F.d(De,{O:()=>Q});var a=F(7283),L=F(7507);function Q(...ge){const ve=ge[ge.length-1];return(0,L.K)(ve)?(ge.pop(),ie=>(0,a.z)(ge,ie,ve)):ie=>(0,a.z)(ge,ie)}},9095:(Qe,De,F)=>{F.d(De,{w:()=>ge});var a=F(6942),L=F(4858),Q=F(2831);function ge(ye,le){return"function"==typeof le?X=>X.pipe(ge((G,U)=>(0,L.D)(ye(G,U)).pipe((0,a.U)((Z,ue)=>le(G,Z,U,ue))))):X=>X.lift(new ve(ye))}class ve{constructor(le){this.project=le}call(le,X){return X.subscribe(new ie(le,this.project))}}class ie extends Q.Ds{constructor(le,X){super(le),this.project=X,this.index=0}_next(le){let X;const G=this.index++;try{X=this.project(le,G)}catch(U){return void this.destination.error(U)}this._innerSub(X)}_innerSub(le){const X=this.innerSubscription;X&&X.unsubscribe();const G=new Q.IY(this),U=this.destination;U.add(G),this.innerSubscription=(0,Q.ft)(le,G),this.innerSubscription!==G&&U.add(this.innerSubscription)}_complete(){const{innerSubscription:le}=this;(!le||le.closed)&&super._complete(),this.unsubscribe()}_unsubscribe(){this.innerSubscription=void 0}notifyComplete(){this.innerSubscription=void 0,this.isStopped&&super._complete()}notifyNext(le){this.destination.next(le)}}},3910:(Qe,De,F)=>{F.d(De,{q:()=>ge});var a=F(14),L=F(2846),Q=F(6439);function ge(ye){return le=>0===ye?(0,Q.c)():le.lift(new ve(ye))}class ve{constructor(le){if(this.total=le,this.total<0)throw new L.W}call(le,X){return X.subscribe(new ie(le,this.total))}}class ie extends a.L{constructor(le,X){super(le),this.total=X,this.count=0}_next(le){const X=this.total,G=++this.count;G<=X&&(this.destination.next(le),G===X&&(this.destination.complete(),this.unsubscribe()))}}},8759:(Qe,De,F)=>{F.d(De,{b:()=>ge});var a=F(14),L=F(6882),Q=F(1900);function ge(ye,le,X){return function(U){return U.lift(new ve(ye,le,X))}}class ve{constructor(le,X,G){this.nextOrObserver=le,this.error=X,this.complete=G}call(le,X){return X.subscribe(new ie(le,this.nextOrObserver,this.error,this.complete))}}class ie extends a.L{constructor(le,X,G,U){super(le),this._tapNext=L.Z,this._tapError=L.Z,this._tapComplete=L.Z,this._tapError=G||L.Z,this._tapComplete=U||L.Z,(0,Q.m)(X)?(this._context=this,this._tapNext=X):X&&(this._context=X,this._tapNext=X.next||L.Z,this._tapError=X.error||L.Z,this._tapComplete=X.complete||L.Z)}_next(le){try{this._tapNext.call(this._context,le)}catch(X){return void this.destination.error(X)}this.destination.next(le)}_error(le){try{this._tapError.call(this._context,le)}catch(X){return void this.destination.error(X)}this.destination.error(le)}_complete(){try{this._tapComplete.call(this._context)}catch(le){return void this.destination.error(le)}return this.destination.complete()}}},8403:(Qe,De,F)=>{F.d(De,{r:()=>Q});var a=F(7473),L=F(6957);function Q(ge,ve){return new a.y(ie=>{const ye=new L.w;let le=0;return ye.add(ve.schedule(function(){le!==ge.length?(ie.next(ge[le++]),ie.closed||ye.add(this.schedule())):ie.complete()})),ye})}},2803:(Qe,De,F)=>{F.d(De,{hZ:()=>L});const L=function a(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},6831:(Qe,De,F)=>{F.d(De,{L:()=>a});const a="function"==typeof Symbol&&Symbol.observable||"@@observable"},1482:(Qe,De,F)=>{F.d(De,{b:()=>a});const a="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()},2846:(Qe,De,F)=>{F.d(De,{W:()=>L});const L=(()=>{function Q(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return Q.prototype=Object.create(Error.prototype),Q})()},9086:(Qe,De,F)=>{F.d(De,{N:()=>L});const L=(()=>{function Q(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return Q.prototype=Object.create(Error.prototype),Q})()},8897:(Qe,De,F)=>{function a(L){setTimeout(()=>{throw L},0)}F.d(De,{z:()=>a})},1356:(Qe,De,F)=>{function a(L){return L}F.d(De,{y:()=>a})},4327:(Qe,De,F)=>{F.d(De,{k:()=>a});const a=Array.isArray||(L=>L&&"number"==typeof L.length)},5122:(Qe,De,F)=>{F.d(De,{z:()=>a});const a=L=>L&&"number"==typeof L.length&&"function"!=typeof L},1900:(Qe,De,F)=>{function a(L){return"function"==typeof L}F.d(De,{m:()=>a})},6549:(Qe,De,F)=>{function a(L){return null!==L&&"object"==typeof L}F.d(De,{K:()=>a})},5192:(Qe,De,F)=>{function a(L){return!!L&&"function"!=typeof L.subscribe&&"function"==typeof L.then}F.d(De,{t:()=>a})},7507:(Qe,De,F)=>{function a(L){return L&&"function"==typeof L.schedule}F.d(De,{K:()=>a})},6882:(Qe,De,F)=>{function a(){}F.d(De,{Z:()=>a})},6800:(Qe,De,F)=>{F.d(De,{U:()=>Q,z:()=>L});var a=F(1356);function L(...ge){return Q(ge)}function Q(ge){return 0===ge.length?a.y:1===ge.length?ge[0]:function(ie){return ge.reduce((ye,le)=>le(ye),ie)}}},3956:(Qe,De,F)=>{F.d(De,{s:()=>U});var a=F(5414),L=F(8897),ge=F(2803),ie=F(6831),le=F(5122),X=F(5192),G=F(6549);const U=Z=>{if(Z&&"function"==typeof Z[ie.L])return(Z=>ue=>{const fe=Z[ie.L]();if("function"!=typeof fe.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return fe.subscribe(ue)})(Z);if((0,le.z)(Z))return(0,a.V)(Z);if((0,X.t)(Z))return(Z=>ue=>(Z.then(fe=>{ue.closed||(ue.next(fe),ue.complete())},fe=>ue.error(fe)).then(null,L.z),ue))(Z);if(Z&&"function"==typeof Z[ge.hZ])return(Z=>ue=>{const fe=Z[ge.hZ]();for(;;){let He;try{He=fe.next()}catch(be){return ue.error(be),ue}if(He.done){ue.complete();break}if(ue.next(He.value),ue.closed)break}return"function"==typeof fe.return&&ue.add(()=>{fe.return&&fe.return()}),ue})(Z);{const fe=`You provided ${(0,G.K)(Z)?"an invalid object":`'${Z}'`} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;throw new TypeError(fe)}}},5414:(Qe,De,F)=>{F.d(De,{V:()=>a});const a=L=>Q=>{for(let ge=0,ve=L.length;ge<ve&&!Q.closed;ge++)Q.next(L[ge]);Q.complete()}},8774:(Qe,De,F)=>{F.d(De,{D:()=>ve});var a=F(14);class L extends a.L{constructor(ye,le,X){super(),this.parent=ye,this.outerValue=le,this.outerIndex=X,this.index=0}_next(ye){this.parent.notifyNext(this.outerValue,ye,this.outerIndex,this.index++,this)}_error(ye){this.parent.notifyError(ye,this),this.unsubscribe()}_complete(){this.parent.notifyComplete(this),this.unsubscribe()}}var Q=F(3956),ge=F(7473);function ve(ie,ye,le,X,G=new L(ie,le,X)){if(!G.closed)return ye instanceof ge.y?ye.subscribe(G):(0,Q.s)(ye)(G)}},4666:(Qe,De,F)=>{F.d(De,{Do:()=>ut,EM:()=>ro,HT:()=>ge,JF:()=>Nr,K0:()=>ie,Mx:()=>Er,NF:()=>Ki,O5:()=>cn,S$:()=>be,V_:()=>X,Ye:()=>Me,b0:()=>Xe,bD:()=>fr,ez:()=>Mi,q:()=>Q,sg:()=>Ft,tP:()=>nt,w_:()=>ve});var a=F(2135);
/**
     * @license Angular v15.0.4
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let L=null;function Q(){return L}function ge(_){L||(L=_)}class ve{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ie=new a.OlP("DocumentToken");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ye=(()=>{class _{historyGo(b){throw new Error("Not implemented")}}return _.\u0275fac=function(b){return new(b||_)},_.\u0275prov=a.Yz7({token:_,factory:function(){return function le(){return(0,a.LFG)(G)}()},providedIn:"platform"}),_})();const X=new a.OlP("Location Initialized");let G=(()=>{class _ extends ye{constructor(b){super(),this._doc=b,this._init()}_init(){this.location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Q().getBaseHref(this._doc)}onPopState(b){const O=Q().getGlobalEventTarget(this._doc,"window");return O.addEventListener("popstate",b,!1),()=>O.removeEventListener("popstate",b)}onHashChange(b){const O=Q().getGlobalEventTarget(this._doc,"window");return O.addEventListener("hashchange",b,!1),()=>O.removeEventListener("hashchange",b)}get href(){return this.location.href}get protocol(){return this.location.protocol}get hostname(){return this.location.hostname}get port(){return this.location.port}get pathname(){return this.location.pathname}get search(){return this.location.search}get hash(){return this.location.hash}set pathname(b){this.location.pathname=b}pushState(b,O,B){U()?this._history.pushState(b,O,B):this.location.hash=B}replaceState(b,O,B){U()?this._history.replaceState(b,O,B):this.location.hash=B}forward(){this._history.forward()}back(){this._history.back()}historyGo(b=0){this._history.go(b)}getState(){return this._history.state}}return _.\u0275fac=function(b){return new(b||_)(a.LFG(ie))},_.\u0275prov=a.Yz7({token:_,factory:function(){return function Z(){return new G((0,a.LFG)(ie))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()},providedIn:"platform"}),_})();function U(){return!!window.history.pushState}function ue(_,M){if(0==_.length)return M;if(0==M.length)return _;let b=0;return _.endsWith("/")&&b++,M.startsWith("/")&&b++,2==b?_+M.substring(1):1==b?_+M:_+"/"+M}function fe(_){const M=_.match(/#|\?|$/),b=M&&M.index||_.length;return _.slice(0,b-("/"===_[b-1]?1:0))+_.slice(b)}function He(_){return _&&"?"!==_[0]?"?"+_:_}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let be=(()=>{class _{historyGo(b){throw new Error("Not implemented")}}return _.\u0275fac=function(b){return new(b||_)},_.\u0275prov=a.Yz7({token:_,factory:function(){return(0,a.f3M)(Xe)},providedIn:"root"}),_})();const Te=new a.OlP("appBaseHref");let Xe=(()=>{class _ extends be{constructor(b,O){super(),this._platformLocation=b,this._removeListenerFns=[],this._baseHref=O??this._platformLocation.getBaseHrefFromDOM()??(0,a.f3M)(ie).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(b){this._removeListenerFns.push(this._platformLocation.onPopState(b),this._platformLocation.onHashChange(b))}getBaseHref(){return this._baseHref}prepareExternalUrl(b){return ue(this._baseHref,b)}path(b=!1){const O=this._platformLocation.pathname+He(this._platformLocation.search),B=this._platformLocation.hash;return B&&b?`${O}${B}`:O}pushState(b,O,B,ee){const ce=this.prepareExternalUrl(B+He(ee));this._platformLocation.pushState(b,O,ce)}replaceState(b,O,B,ee){const ce=this.prepareExternalUrl(B+He(ee));this._platformLocation.replaceState(b,O,ce)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(b=0){this._platformLocation.historyGo?.(b)}}return _.\u0275fac=function(b){return new(b||_)(a.LFG(ye),a.LFG(Te,8))},_.\u0275prov=a.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})(),ut=(()=>{class _ extends be{constructor(b,O){super(),this._platformLocation=b,this._baseHref="",this._removeListenerFns=[],null!=O&&(this._baseHref=O)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(b){this._removeListenerFns.push(this._platformLocation.onPopState(b),this._platformLocation.onHashChange(b))}getBaseHref(){return this._baseHref}path(b=!1){let O=this._platformLocation.hash;return null==O&&(O="#"),O.length>0?O.substring(1):O}prepareExternalUrl(b){const O=ue(this._baseHref,b);return O.length>0?"#"+O:O}pushState(b,O,B,ee){let ce=this.prepareExternalUrl(B+He(ee));0==ce.length&&(ce=this._platformLocation.pathname),this._platformLocation.pushState(b,O,ce)}replaceState(b,O,B,ee){let ce=this.prepareExternalUrl(B+He(ee));0==ce.length&&(ce=this._platformLocation.pathname),this._platformLocation.replaceState(b,O,ce)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(b=0){this._platformLocation.historyGo?.(b)}}return _.\u0275fac=function(b){return new(b||_)(a.LFG(ye),a.LFG(Te,8))},_.\u0275prov=a.Yz7({token:_,factory:_.\u0275fac}),_})(),Me=(()=>{class _{constructor(b){this._subject=new a.vpe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=b;const O=this._locationStrategy.getBaseHref();this._basePath=function Kn(_){if(new RegExp("^(https?:)?//").test(_)){const[,b]=_.split(/\/\/[^\/]+/);return b}return _}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(fe(Rt(O))),this._locationStrategy.onPopState(B=>{this._subject.emit({url:this.path(!0),pop:!0,state:B.state,type:B.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(b=!1){return this.normalize(this._locationStrategy.path(b))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(b,O=""){return this.path()==this.normalize(b+He(O))}normalize(b){return _.stripTrailingSlash(function it(_,M){return _&&M.startsWith(_)?M.substring(_.length):M}(this._basePath,Rt(b)))}prepareExternalUrl(b){return b&&"/"!==b[0]&&(b="/"+b),this._locationStrategy.prepareExternalUrl(b)}go(b,O="",B=null){this._locationStrategy.pushState(B,"",b,O),this._notifyUrlChangeListeners(this.prepareExternalUrl(b+He(O)),B)}replaceState(b,O="",B=null){this._locationStrategy.replaceState(B,"",b,O),this._notifyUrlChangeListeners(this.prepareExternalUrl(b+He(O)),B)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(b=0){this._locationStrategy.historyGo?.(b)}onUrlChange(b){return this._urlChangeListeners.push(b),this._urlChangeSubscription||(this._urlChangeSubscription=this.subscribe(O=>{this._notifyUrlChangeListeners(O.url,O.state)})),()=>{const O=this._urlChangeListeners.indexOf(b);this._urlChangeListeners.splice(O,1),0===this._urlChangeListeners.length&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(b="",O){this._urlChangeListeners.forEach(B=>B(b,O))}subscribe(b,O,B){return this._subject.subscribe({next:b,error:O,complete:B})}}return _.normalizeQueryParams=He,_.joinWithSlash=ue,_.stripTrailingSlash=fe,_.\u0275fac=function(b){return new(b||_)(a.LFG(be))},_.\u0275prov=a.Yz7({token:_,factory:function(){return function Kt(){return new Me((0,a.LFG)(be))}()},providedIn:"root"}),_})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Rt(_){return _.replace(/\/index.html$/,"")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Er(_,M){M=encodeURIComponent(M);for(const b of _.split(";")){const O=b.indexOf("="),[B,ee]=-1==O?[b,""]:[b.slice(0,O),b.slice(O+1)];if(B.trim()===M)return decodeURIComponent(ee)}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class fn{constructor(M,b,O,B){this.$implicit=M,this.ngForOf=b,this.index=O,this.count=B}get first(){return 0===this.index}get last(){return this.index===this.count-1}get even(){return this.index%2==0}get odd(){return!this.even}}let Ft=(()=>{class _{constructor(b,O,B){this._viewContainer=b,this._template=O,this._differs=B,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForOf(b){this._ngForOf=b,this._ngForOfDirty=!0}set ngForTrackBy(b){this._trackByFn=b}get ngForTrackBy(){return this._trackByFn}set ngForTemplate(b){b&&(this._template=b)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;const b=this._ngForOf;!this._differ&&b&&(this._differ=this._differs.find(b).create(this.ngForTrackBy))}if(this._differ){const b=this._differ.diff(this._ngForOf);b&&this._applyChanges(b)}}_applyChanges(b){const O=this._viewContainer;b.forEachOperation((B,ee,ce)=>{if(null==B.previousIndex)O.createEmbeddedView(this._template,new fn(B.item,this._ngForOf,-1,-1),null===ce?void 0:ce);else if(null==ce)O.remove(null===ee?void 0:ee);else if(null!==ee){const Fe=O.get(ee);O.move(Fe,ce),ti(Fe,B)}});for(let B=0,ee=O.length;B<ee;B++){const Fe=O.get(B).context;Fe.index=B,Fe.count=ee,Fe.ngForOf=this._ngForOf}b.forEachIdentityChange(B=>{ti(O.get(B.currentIndex),B)})}static ngTemplateContextGuard(b,O){return!0}}return _.\u0275fac=function(b){return new(b||_)(a.Y36(a.s_b),a.Y36(a.Rgc),a.Y36(a.ZZ4))},_.\u0275dir=a.lG2({type:_,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0}),_})();function ti(_,M){_.context.$implicit=M.item}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let cn=(()=>{class _{constructor(b,O){this._viewContainer=b,this._context=new Oe,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=O}set ngIf(b){this._context.$implicit=this._context.ngIf=b,this._updateView()}set ngIfThen(b){Je("ngIfThen",b),this._thenTemplateRef=b,this._thenViewRef=null,this._updateView()}set ngIfElse(b){Je("ngIfElse",b),this._elseTemplateRef=b,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(b,O){return!0}}return _.\u0275fac=function(b){return new(b||_)(a.Y36(a.s_b),a.Y36(a.Rgc))},_.\u0275dir=a.lG2({type:_,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0}),_})();class Oe{constructor(){this.$implicit=null,this.ngIf=null}}function Je(_,M){if(M&&!M.createEmbeddedView)throw new Error(`${_} must be a TemplateRef, but received '${(0,a.AaK)(M)}'.`)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let nt=(()=>{class _{constructor(b){this._viewContainerRef=b,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(b){if(b.ngTemplateOutlet||b.ngTemplateOutletInjector){const O=this._viewContainerRef;if(this._viewRef&&O.remove(O.indexOf(this._viewRef)),this.ngTemplateOutlet){const{ngTemplateOutlet:B,ngTemplateOutletContext:ee,ngTemplateOutletInjector:ce}=this;this._viewRef=O.createEmbeddedView(B,ee,ce?{injector:ce}:void 0)}else this._viewRef=null}else this._viewRef&&b.ngTemplateOutletContext&&this.ngTemplateOutletContext&&(this._viewRef.context=this.ngTemplateOutletContext)}}return _.\u0275fac=function(b){return new(b||_)(a.Y36(a.s_b))},_.\u0275dir=a.lG2({type:_,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[a.TTD]}),_})(),Mi=(()=>{class _{}return _.\u0275fac=function(b){return new(b||_)},_.\u0275mod=a.oAB({type:_}),_.\u0275inj=a.cJS({}),_})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const fr="browser";function Ki(_){return _===fr}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let ro=(()=>{class _{}return _.\u0275prov=(0,a.Yz7)({token:_,providedIn:"root",factory:()=>new vo((0,a.LFG)(ie),window)}),_})();class vo{constructor(M,b){this.document=M,this.window=b,this.offset=()=>[0,0]}setOffset(M){this.offset=Array.isArray(M)?()=>M:M}getScrollPosition(){return this.supportsScrolling()?[this.window.pageXOffset,this.window.pageYOffset]:[0,0]}scrollToPosition(M){this.supportsScrolling()&&this.window.scrollTo(M[0],M[1])}scrollToAnchor(M){if(!this.supportsScrolling())return;const b=function Br(_,M){const b=_.getElementById(M)||_.getElementsByName(M)[0];if(b)return b;if("function"==typeof _.createTreeWalker&&_.body&&(_.body.createShadowRoot||_.body.attachShadow)){const O=_.createTreeWalker(_.body,NodeFilter.SHOW_ELEMENT);let B=O.currentNode;for(;B;){const ee=B.shadowRoot;if(ee){const ce=ee.getElementById(M)||ee.querySelector(`[name="${M}"]`);if(ce)return ce}B=O.nextNode()}}return null}(this.document,M);b&&(this.scrollToElement(b),b.focus())}setHistoryScrollRestoration(M){if(this.supportScrollRestoration()){const b=this.window.history;b&&b.scrollRestoration&&(b.scrollRestoration=M)}}scrollToElement(M){const b=M.getBoundingClientRect(),O=b.left+this.window.pageXOffset,B=b.top+this.window.pageYOffset,ee=this.offset();this.window.scrollTo(O-ee[0],B-ee[1])}supportScrollRestoration(){try{if(!this.supportsScrolling())return!1;const M=ni(this.window.history)||ni(Object.getPrototypeOf(this.window.history));return!(!M||!M.writable&&!M.set)}catch{return!1}}supportsScrolling(){try{return!!this.window&&!!this.window.scrollTo&&"pageXOffset"in this.window}catch{return!1}}}function ni(_){return Object.getOwnPropertyDescriptor(_,"scrollRestoration")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Nr{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,8987:(Qe,De,F)=>{F.d(De,{JF:()=>Zn,eN:()=>gt});var a=F(4666),L=F(2135),Q=F(4139),ge=F(7473),ve=F(1133),ie=F(9151),ye=F(6942);
/**
     * @license Angular v15.0.4
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class le{}class X{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class G{constructor(V){this.normalizedNames=new Map,this.lazyUpdate=null,V?this.lazyInit="string"==typeof V?()=>{this.headers=new Map,V.split("\n").forEach(j=>{const de=j.indexOf(":");if(de>0){const oe=j.slice(0,de),Ae=oe.toLowerCase(),Ee=j.slice(de+1).trim();this.maybeSetNormalizedName(oe,Ae),this.headers.has(Ae)?this.headers.get(Ae).push(Ee):this.headers.set(Ae,[Ee])}})}:()=>{this.headers=new Map,Object.keys(V).forEach(j=>{let de=V[j];const oe=j.toLowerCase();"string"==typeof de&&(de=[de]),de.length>0&&(this.headers.set(oe,de),this.maybeSetNormalizedName(j,oe))})}:this.headers=new Map}has(V){return this.init(),this.headers.has(V.toLowerCase())}get(V){this.init();const j=this.headers.get(V.toLowerCase());return j&&j.length>0?j[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(V){return this.init(),this.headers.get(V.toLowerCase())||null}append(V,j){return this.clone({name:V,value:j,op:"a"})}set(V,j){return this.clone({name:V,value:j,op:"s"})}delete(V,j){return this.clone({name:V,value:j,op:"d"})}maybeSetNormalizedName(V,j){this.normalizedNames.has(j)||this.normalizedNames.set(j,V)}init(){this.lazyInit&&(this.lazyInit instanceof G?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(V=>this.applyUpdate(V)),this.lazyUpdate=null))}copyFrom(V){V.init(),Array.from(V.headers.keys()).forEach(j=>{this.headers.set(j,V.headers.get(j)),this.normalizedNames.set(j,V.normalizedNames.get(j))})}clone(V){const j=new G;return j.lazyInit=this.lazyInit&&this.lazyInit instanceof G?this.lazyInit:this,j.lazyUpdate=(this.lazyUpdate||[]).concat([V]),j}applyUpdate(V){const j=V.name.toLowerCase();switch(V.op){case"a":case"s":let de=V.value;if("string"==typeof de&&(de=[de]),0===de.length)return;this.maybeSetNormalizedName(V.name,j);const oe=("a"===V.op?this.headers.get(j):void 0)||[];oe.push(...de),this.headers.set(j,oe);break;case"d":const Ae=V.value;if(Ae){let Ee=this.headers.get(j);if(!Ee)return;Ee=Ee.filter(vt=>-1===Ae.indexOf(vt)),0===Ee.length?(this.headers.delete(j),this.normalizedNames.delete(j)):this.headers.set(j,Ee)}else this.headers.delete(j),this.normalizedNames.delete(j)}}forEach(V){this.init(),Array.from(this.normalizedNames.keys()).forEach(j=>V(this.normalizedNames.get(j),this.headers.get(j)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Z{encodeKey(V){return be(V)}encodeValue(V){return be(V)}decodeKey(V){return decodeURIComponent(V)}decodeValue(V){return decodeURIComponent(V)}}const fe=/%(\d[a-f0-9])/gi,He={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function be(se){return encodeURIComponent(se).replace(fe,(V,j)=>He[j]??V)}function Te(se){return`${se}`}class Xe{constructor(V={}){if(this.updates=null,this.cloneFrom=null,this.encoder=V.encoder||new Z,V.fromString){if(V.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ue(se,V){const j=new Map;return se.length>0&&se.replace(/^\?/,"").split("&").forEach(oe=>{const Ae=oe.indexOf("="),[Ee,vt]=-1==Ae?[V.decodeKey(oe),""]:[V.decodeKey(oe.slice(0,Ae)),V.decodeValue(oe.slice(Ae+1))],Ze=j.get(Ee)||[];Ze.push(vt),j.set(Ee,Ze)}),j}(V.fromString,this.encoder)}else V.fromObject?(this.map=new Map,Object.keys(V.fromObject).forEach(j=>{const de=V.fromObject[j],oe=Array.isArray(de)?de.map(Te):[Te(de)];this.map.set(j,oe)})):this.map=null}has(V){return this.init(),this.map.has(V)}get(V){this.init();const j=this.map.get(V);return j?j[0]:null}getAll(V){return this.init(),this.map.get(V)||null}keys(){return this.init(),Array.from(this.map.keys())}append(V,j){return this.clone({param:V,value:j,op:"a"})}appendAll(V){const j=[];return Object.keys(V).forEach(de=>{const oe=V[de];Array.isArray(oe)?oe.forEach(Ae=>{j.push({param:de,value:Ae,op:"a"})}):j.push({param:de,value:oe,op:"a"})}),this.clone(j)}set(V,j){return this.clone({param:V,value:j,op:"s"})}delete(V,j){return this.clone({param:V,value:j,op:"d"})}toString(){return this.init(),this.keys().map(V=>{const j=this.encoder.encodeKey(V);return this.map.get(V).map(de=>j+"="+this.encoder.encodeValue(de)).join("&")}).filter(V=>""!==V).join("&")}clone(V){const j=new Xe({encoder:this.encoder});return j.cloneFrom=this.cloneFrom||this,j.updates=(this.updates||[]).concat(V),j}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(V=>this.map.set(V,this.cloneFrom.map.get(V))),this.updates.forEach(V=>{switch(V.op){case"a":case"s":const j=("a"===V.op?this.map.get(V.param):void 0)||[];j.push(Te(V.value)),this.map.set(V.param,j);break;case"d":if(void 0===V.value){this.map.delete(V.param);break}{let de=this.map.get(V.param)||[];const oe=de.indexOf(Te(V.value));-1!==oe&&de.splice(oe,1),de.length>0?this.map.set(V.param,de):this.map.delete(V.param)}}}),this.cloneFrom=this.updates=null)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Me{constructor(){this.map=new Map}set(V,j){return this.map.set(V,j),this}get(V){return this.map.has(V)||this.map.set(V,V.defaultValue()),this.map.get(V)}delete(V){return this.map.delete(V),this}has(V){return this.map.has(V)}keys(){return this.map.keys()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function it(se){return typeof ArrayBuffer<"u"&&se instanceof ArrayBuffer}function Rt(se){return typeof Blob<"u"&&se instanceof Blob}function Kn(se){return typeof FormData<"u"&&se instanceof FormData}class xt{constructor(V,j,de,oe){let Ae;if(this.url=j,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=V.toUpperCase(),function Kt(se){switch(se){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||oe?(this.body=void 0!==de?de:null,Ae=oe):Ae=de,Ae&&(this.reportProgress=!!Ae.reportProgress,this.withCredentials=!!Ae.withCredentials,Ae.responseType&&(this.responseType=Ae.responseType),Ae.headers&&(this.headers=Ae.headers),Ae.context&&(this.context=Ae.context),Ae.params&&(this.params=Ae.params)),this.headers||(this.headers=new G),this.context||(this.context=new Me),this.params){const Ee=this.params.toString();if(0===Ee.length)this.urlWithParams=j;else{const vt=j.indexOf("?");this.urlWithParams=j+(-1===vt?"?":vt<j.length-1?"&":"")+Ee}}else this.params=new Xe,this.urlWithParams=j}serializeBody(){return null===this.body?null:it(this.body)||Rt(this.body)||Kn(this.body)||function je(se){return typeof URLSearchParams<"u"&&se instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof Xe?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||Kn(this.body)?null:Rt(this.body)?this.body.type||null:it(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof Xe?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(V={}){const j=V.method||this.method,de=V.url||this.url,oe=V.responseType||this.responseType,Ae=void 0!==V.body?V.body:this.body,Ee=void 0!==V.withCredentials?V.withCredentials:this.withCredentials,vt=void 0!==V.reportProgress?V.reportProgress:this.reportProgress;let Ze=V.headers||this.headers,pt=V.params||this.params;const Qn=V.context??this.context;return void 0!==V.setHeaders&&(Ze=Object.keys(V.setHeaders).reduce((Xt,Jt)=>Xt.set(Jt,V.setHeaders[Jt]),Ze)),V.setParams&&(pt=Object.keys(V.setParams).reduce((Xt,Jt)=>Xt.set(Jt,V.setParams[Jt]),pt)),new xt(j,de,Ae,{params:pt,headers:Ze,context:Qn,reportProgress:vt,responseType:oe,withCredentials:Ee})}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var we=(()=>((we=we||{})[we.Sent=0]="Sent",we[we.UploadProgress=1]="UploadProgress",we[we.ResponseHeader=2]="ResponseHeader",we[we.DownloadProgress=3]="DownloadProgress",we[we.Response=4]="Response",we[we.User=5]="User",we))();class Le{constructor(V,j=200,de="OK"){this.headers=V.headers||new G,this.status=void 0!==V.status?V.status:j,this.statusText=V.statusText||de,this.url=V.url||null,this.ok=this.status>=200&&this.status<300}}class qe extends Le{constructor(V={}){super(V),this.type=we.ResponseHeader}clone(V={}){return new qe({headers:V.headers||this.headers,status:void 0!==V.status?V.status:this.status,statusText:V.statusText||this.statusText,url:V.url||this.url||void 0})}}class Ct extends Le{constructor(V={}){super(V),this.type=we.Response,this.body=void 0!==V.body?V.body:null}clone(V={}){return new Ct({body:void 0!==V.body?V.body:this.body,headers:V.headers||this.headers,status:void 0!==V.status?V.status:this.status,statusText:V.statusText||this.statusText,url:V.url||this.url||void 0})}}class Be extends Le{constructor(V){super(V,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${V.url||"(unknown url)"}`:`Http failure response for ${V.url||"(unknown url)"}: ${V.status} ${V.statusText}`,this.error=V.error||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function rn(se,V){return{body:V,headers:se.headers,context:se.context,observe:se.observe,params:se.params,reportProgress:se.reportProgress,responseType:se.responseType,withCredentials:se.withCredentials}}let gt=(()=>{class se{constructor(j){this.handler=j}request(j,de,oe={}){let Ae;if(j instanceof xt)Ae=j;else{let Ze,pt;Ze=oe.headers instanceof G?oe.headers:new G(oe.headers),oe.params&&(pt=oe.params instanceof Xe?oe.params:new Xe({fromObject:oe.params})),Ae=new xt(j,de,void 0!==oe.body?oe.body:null,{headers:Ze,context:oe.context,params:pt,reportProgress:oe.reportProgress,responseType:oe.responseType||"json",withCredentials:oe.withCredentials})}const Ee=(0,Q.of)(Ae).pipe((0,ve.b)(Ze=>this.handler.handle(Ze)));if(j instanceof xt||"events"===oe.observe)return Ee;const vt=Ee.pipe((0,ie.h)(Ze=>Ze instanceof Ct));switch(oe.observe||"body"){case"body":switch(Ae.responseType){case"arraybuffer":return vt.pipe((0,ye.U)(Ze=>{if(null!==Ze.body&&!(Ze.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return Ze.body}));case"blob":return vt.pipe((0,ye.U)(Ze=>{if(null!==Ze.body&&!(Ze.body instanceof Blob))throw new Error("Response is not a Blob.");return Ze.body}));case"text":return vt.pipe((0,ye.U)(Ze=>{if(null!==Ze.body&&"string"!=typeof Ze.body)throw new Error("Response is not a string.");return Ze.body}));default:return vt.pipe((0,ye.U)(Ze=>Ze.body))}case"response":return vt;default:throw new Error(`Unreachable: unhandled observe type ${oe.observe}}`)}}delete(j,de={}){return this.request("DELETE",j,de)}get(j,de={}){return this.request("GET",j,de)}head(j,de={}){return this.request("HEAD",j,de)}jsonp(j,de){return this.request("JSONP",j,{params:(new Xe).append(de,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(j,de={}){return this.request("OPTIONS",j,de)}patch(j,de,oe={}){return this.request("PATCH",j,rn(oe,de))}post(j,de,oe={}){return this.request("POST",j,rn(oe,de))}put(j,de,oe={}){return this.request("PUT",j,rn(oe,de))}}return se.\u0275fac=function(j){return new(j||se)(L.LFG(le))},se.\u0275prov=L.Yz7({token:se,factory:se.\u0275fac}),se})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Lt(se,V){return V(se)}function _i(se,V){return(j,de)=>V.intercept(j,{handle:oe=>se(oe,de)})}const zn=new L.OlP("HTTP_INTERCEPTORS"),Jn=new L.OlP("HTTP_INTERCEPTOR_FNS");function Fi(){let se=null;return(V,j)=>(null===se&&(se=((0,L.f3M)(zn,{optional:!0})??[]).reduceRight(_i,Lt)),se(V,j))}let Nn=(()=>{class se extends le{constructor(j,de){super(),this.backend=j,this.injector=de,this.chain=null}handle(j){if(null===this.chain){const de=Array.from(new Set(this.injector.get(Jn)));this.chain=de.reduceRight((oe,Ae)=>function Gn(se,V,j){return(de,oe)=>j.runInContext(()=>V(de,Ae=>se(Ae,oe)))}(oe,Ae,this.injector),Lt)}return this.chain(j,de=>this.backend.handle(de))}}return se.\u0275fac=function(j){return new(j||se)(L.LFG(X),L.LFG(L.lqb))},se.\u0275prov=L.Yz7({token:se,factory:se.\u0275fac}),se})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ai=/^\)\]\}',?\n/;let ht=(()=>{class se{constructor(j){this.xhrFactory=j}handle(j){if("JSONP"===j.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new ge.y(de=>{const oe=this.xhrFactory.build();if(oe.open(j.method,j.urlWithParams),j.withCredentials&&(oe.withCredentials=!0),j.headers.forEach((Bt,K)=>oe.setRequestHeader(Bt,K.join(","))),j.headers.has("Accept")||oe.setRequestHeader("Accept","application/json, text/plain, */*"),!j.headers.has("Content-Type")){const Bt=j.detectContentTypeHeader();null!==Bt&&oe.setRequestHeader("Content-Type",Bt)}if(j.responseType){const Bt=j.responseType.toLowerCase();oe.responseType="json"!==Bt?Bt:"text"}const Ae=j.serializeBody();let Ee=null;const vt=()=>{if(null!==Ee)return Ee;const Bt=oe.statusText||"OK",K=new G(oe.getAllResponseHeaders()),H=function mt(se){return"responseURL"in se&&se.responseURL?se.responseURL:/^X-Request-URL:/m.test(se.getAllResponseHeaders())?se.getResponseHeader("X-Request-URL"):null}(oe)||j.url;return Ee=new qe({headers:K,status:oe.status,statusText:Bt,url:H}),Ee},Ze=()=>{let{headers:Bt,status:K,statusText:H,url:k}=vt(),J=null;204!==K&&(J=typeof oe.response>"u"?oe.responseText:oe.response),0===K&&(K=J?200:0);let me=K>=200&&K<300;if("json"===j.responseType&&"string"==typeof J){const Re=J;J=J.replace(ai,"");try{J=""!==J?JSON.parse(J):null}catch(We){J=Re,me&&(me=!1,J={error:We,text:J})}}me?(de.next(new Ct({body:J,headers:Bt,status:K,statusText:H,url:k||void 0})),de.complete()):de.error(new Be({error:J,headers:Bt,status:K,statusText:H,url:k||void 0}))},pt=Bt=>{const{url:K}=vt(),H=new Be({error:Bt,status:oe.status||0,statusText:oe.statusText||"Unknown Error",url:K||void 0});de.error(H)};let Qn=!1;const Xt=Bt=>{Qn||(de.next(vt()),Qn=!0);let K={type:we.DownloadProgress,loaded:Bt.loaded};Bt.lengthComputable&&(K.total=Bt.total),"text"===j.responseType&&!!oe.responseText&&(K.partialText=oe.responseText),de.next(K)},Jt=Bt=>{let K={type:we.UploadProgress,loaded:Bt.loaded};Bt.lengthComputable&&(K.total=Bt.total),de.next(K)};return oe.addEventListener("load",Ze),oe.addEventListener("error",pt),oe.addEventListener("timeout",pt),oe.addEventListener("abort",pt),j.reportProgress&&(oe.addEventListener("progress",Xt),null!==Ae&&oe.upload&&oe.upload.addEventListener("progress",Jt)),oe.send(Ae),de.next({type:we.Sent}),()=>{oe.removeEventListener("error",pt),oe.removeEventListener("abort",pt),oe.removeEventListener("load",Ze),oe.removeEventListener("timeout",pt),j.reportProgress&&(oe.removeEventListener("progress",Xt),null!==Ae&&oe.upload&&oe.upload.removeEventListener("progress",Jt)),oe.readyState!==oe.DONE&&oe.abort()}})}}return se.\u0275fac=function(j){return new(j||se)(L.LFG(a.JF))},se.\u0275prov=L.Yz7({token:se,factory:se.\u0275fac}),se})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Pn=new L.OlP("XSRF_ENABLED"),ar="XSRF-TOKEN",wr=new L.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>ar}),qn="X-XSRF-TOKEN",ki=new L.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>qn});class Ge{}let yn=(()=>{class se{constructor(j,de,oe){this.doc=j,this.platform=de,this.cookieName=oe,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const j=this.doc.cookie||"";return j!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,a.Mx)(j,this.cookieName),this.lastCookieString=j),this.lastToken}}return se.\u0275fac=function(j){return new(j||se)(L.LFG(a.K0),L.LFG(L.Lbi),L.LFG(wr))},se.\u0275prov=L.Yz7({token:se,factory:se.\u0275fac}),se})();function Ht(se,V){const j=se.url.toLowerCase();if(!(0,L.f3M)(Pn)||"GET"===se.method||"HEAD"===se.method||j.startsWith("http://")||j.startsWith("https://"))return V(se);const de=(0,L.f3M)(Ge).getToken(),oe=(0,L.f3M)(ki);return null!=de&&!se.headers.has(oe)&&(se=se.clone({headers:se.headers.set(oe,de)})),V(se)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var he=(()=>((he=he||{})[he.Interceptors=0]="Interceptors",he[he.LegacyInterceptors=1]="LegacyInterceptors",he[he.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",he[he.NoXsrfProtection=3]="NoXsrfProtection",he[he.JsonpSupport=4]="JsonpSupport",he[he.RequestsMadeViaParent=5]="RequestsMadeViaParent",he))();function yi(se,V){return{\u0275kind:se,\u0275providers:V}}function It(...se){const V=[gt,ht,Nn,{provide:le,useExisting:Nn},{provide:X,useExisting:ht},{provide:Jn,useValue:Ht,multi:!0},{provide:Pn,useValue:!0},{provide:Ge,useClass:yn}];for(const j of se)V.push(...j.\u0275providers);return(0,L.MR2)(V)}const li=new L.OlP("LEGACY_INTERCEPTOR_FN");function jt({cookieName:se,headerName:V}){const j=[];return void 0!==se&&j.push({provide:wr,useValue:se}),void 0!==V&&j.push({provide:ki,useValue:V}),yi(he.CustomXsrfConfiguration,j)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Zn=(()=>{class se{}return se.\u0275fac=function(j){return new(j||se)},se.\u0275mod=L.oAB({type:se}),se.\u0275inj=L.cJS({providers:[It(yi(he.LegacyInterceptors,[{provide:li,useFactory:Fi},{provide:Jn,useExisting:li,multi:!0}]),jt({cookieName:ar,headerName:qn}))]}),se})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,2135:(Qe,De,F)=>{F.d(De,{tb:()=>k_,AFp:()=>x_,ip1:()=>R_,CZH:()=>nd,hGG:()=>c1,z2F:()=>rd,sBO:()=>YD,Sil:()=>SD,_Vd:()=>re,EJc:()=>ND,Xts:()=>bu,SBq:()=>xe,lqb:()=>Gs,qLn:()=>pn,vpe:()=>Jo,XFs:()=>he,OlP:()=>Wt,zs3:()=>ga,ZZ4:()=>Oh,aQg:()=>Ih,soG:()=>id,YKP:()=>Lm,h0i:()=>wl,PXZ:()=>jD,R0b:()=>Qr,FiY:()=>Dr,Lbi:()=>wD,g9A:()=>F_,Qsj:()=>lt,FYo:()=>Ke,JOm:()=>Jr,tp0:()=>gs,Rgc:()=>Rc,dDg:()=>LD,eoX:()=>$_,GfV:()=>tn,s_b:()=>Xu,ifc:()=>Re,MMx:()=>rh,Lck:()=>Db,eFA:()=>W_,G48:()=>WD,Gpc:()=>ut,f3M:()=>Ze,MR2:()=>mp,_c5:()=>l1,c2e:()=>ED,zSh:()=>nl,wAp:()=>et,vHH:()=>je,lri:()=>j_,rWj:()=>U_,D6c:()=>u1,cg1:()=>Jf,kL8:()=>am,dqk:()=>jt,Z0I:()=>Pn,sIi:()=>Cc,CqO:()=>fg,QGY:()=>Bf,QP$:()=>ti,F4k:()=>dg,RDi:()=>zd,AaK:()=>be,qOj:()=>Of,TTD:()=>hr,_Bn:()=>km,jDz:()=>Vm,xp6:()=>mc,uIk:()=>Rf,Tol:()=>Fg,ekj:()=>zf,Suo:()=>l_,Xpm:()=>zi,lG2:()=>Vi,Yz7:()=>Qt,cJS:()=>mt,oAB:()=>ui,Yjl:()=>ur,Y36:()=>cl,_UZ:()=>Ff,qZA:()=>$u,TgZ:()=>Uu,EpF:()=>ug,n5z:()=>ri,Ikx:()=>Kf,SDv:()=>xm,QtT:()=>Pm,pQV:()=>Qf,LFG:()=>Ee,$8M:()=>co,$Z:()=>Ap,NdJ:()=>Vf,CRH:()=>c_,oxw:()=>_g,Hsn:()=>yg,F$t:()=>vg,Q6J:()=>xf,s9C:()=>Hf,MGl:()=>Gu,DdM:()=>Wm,VKq:()=>Ym,WLB:()=>Km,kEZ:()=>Jm,iGM:()=>s_,MAs:()=>lg,KtG:()=>Zs,CHM:()=>qs,P3R:()=>lc,Udp:()=>Gf,YNc:()=>ag,W1O:()=>h_,_uU:()=>Ug,Oqu:()=>Yf,hij:()=>Yu,Gf:()=>a_});var a=F(7806),L=F(6957),Q=F(7473),ge=F(7507),ve=F(6675),ie=F(8005),le=F(4483);class G{constructor(t,n){this.subjectFactory=t,this.selector=n}call(t,n){const{selector:i}=this,o=this.subjectFactory(),c=i(o).subscribe(t);return c.add(n.subscribe(o)),c}}var U=F(8331);function Z(){return new a.xQ}
/**
     * @license Angular v15.0.4
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function fe(e){for(let t in e)if(e[t]===fe)return t;throw Error("Could not find renamed property on target object.")}function He(e,t){for(const n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function be(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(be).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return`${e.overriddenName}`;if(e.name)return`${e.name}`;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function Te(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Xe=fe({__forward_ref__:fe});function ut(e){return e.__forward_ref__=ut,e.toString=function(){return be(this())},e}function Me(e){return Kt(e)?e():e}function Kt(e){return"function"==typeof e&&e.hasOwnProperty(Xe)&&e.__forward_ref__===ut}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function it(e){return e&&!!e.\u0275providers}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Kn="https://g.co/ng/security#xss";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class je extends Error{constructor(t,n){super(function xt(e,t){return`NG0${Math.abs(e)}${t?": "+t.trim():""}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,n)),this.code=t}}function we(e){return"string"==typeof e?e:null==e?"":String(e)}function rn(e,t){throw new je(-201,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function dt(e,t,n,i){throw new Error(`ASSERTION ERROR: ${e}`+(null==i?"":` [Expected=> ${n} ${i} ${t} <=Actual]`))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Qt(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function mt(e){return{providers:e.providers||[],imports:e.imports||[]}}function ht(e){return ar(e,Ge)||ar(e,Ht)}function Pn(e){return null!==ht(e)}function ar(e,t){return e.hasOwnProperty(t)?e[t]:null}function ki(e){return e&&(e.hasOwnProperty(yn)||e.hasOwnProperty(Ve))?e[yn]:null}const Ge=fe({\u0275prov:fe}),yn=fe({\u0275inj:fe}),Ht=fe({ngInjectableDef:fe}),Ve=fe({ngInjectorDef:fe});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var he=(()=>((he=he||{})[he.Default=0]="Default",he[he.Host=1]="Host",he[he.Self=2]="Self",he[he.SkipSelf=4]="SkipSelf",he[he.Optional=8]="Optional",he))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let yi;function wt(e){const t=yi;return yi=e,t}function li(e,t,n){const i=ht(e);return i&&"root"==i.providedIn?void 0===i.value?i.value=i.factory():i.value:n&he.Optional?null:void 0!==t?t:void rn(be(e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const jt=(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)(),Di={},Zn="__NG_DI_FLAG__",ci="ngTempTokenPath",se=/\n/gm,j="__source";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let de;function oe(e){const t=de;return de=e,t}function Ae(e,t=he.Default){if(void 0===de)throw new je(-203,!1);return null===de?li(e,void 0,t):de.get(e,t&he.Optional?null:void 0,t)}function Ee(e,t=he.Default){return(function It(){return yi}()||Ae)(Me(e),t)}function Ze(e,t=he.Default){return Ee(e,pt(t))}function pt(e){return typeof e>"u"||"number"==typeof e?e:0|(e.optional&&8)|(e.host&&1)|(e.self&&2)|(e.skipSelf&&4)}function Qn(e){const t=[];for(let n=0;n<e.length;n++){const i=Me(e[n]);if(Array.isArray(i)){if(0===i.length)throw new je(900,!1);let o,c=he.Default;for(let f=0;f<i.length;f++){const m=i[f],D=Jt(m);"number"==typeof D?-1===D?o=m.token:c|=D:o=m}t.push(Ee(o,c))}else t.push(Ee(i))}return t}function Xt(e,t){return e[Zn]=t,e.prototype[Zn]=t,e}function Jt(e){return e[Zn]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function H(e){return{toString:e}.toString()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */var k=(()=>((k=k||{})[k.OnPush=0]="OnPush",k[k.Default=1]="Default",k))(),Re=(()=>{return(e=Re||(Re={}))[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom",Re;var e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const We={},Ye=[],en=fe({\u0275cmp:fe}),lr=fe({\u0275dir:fe}),Li=fe({\u0275pipe:fe}),Gi=fe({\u0275mod:fe}),qt=fe({\u0275fac:fe}),Xn=fe({__NG_ELEMENT_ID__:fe});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Fn=0;function zi(e){return H(()=>{const n=!0===e.standalone,i={},o={type:e.type,providersResolver:null,decls:e.decls,vars:e.vars,factory:null,template:e.template||null,consts:e.consts||null,ngContentSelectors:e.ngContentSelectors,hostBindings:e.hostBindings||null,hostVars:e.hostVars||0,hostAttrs:e.hostAttrs||null,contentQueries:e.contentQueries||null,declaredInputs:i,inputs:null,outputs:null,exportAs:e.exportAs||null,onPush:e.changeDetection===k.OnPush,directiveDefs:null,pipeDefs:null,standalone:n,dependencies:n&&e.dependencies||null,getStandaloneInjector:null,selectors:e.selectors||Ye,viewQuery:e.viewQuery||null,features:e.features||null,data:e.data||{},encapsulation:e.encapsulation||Re.Emulated,id:"c"+Fn++,styles:e.styles||Ye,_:null,setInput:null,schemas:e.schemas||null,tView:null,findHostDirectiveDefs:null,hostDirectives:null},c=e.dependencies,f=e.features;return o.inputs=Bi(e.inputs,i),o.outputs=Bi(e.outputs),f&&f.forEach(m=>m(o)),o.directiveDefs=c?()=>("function"==typeof c?c():c).map(Ci).filter(cr):null,o.pipeDefs=c?()=>("function"==typeof c?c():c).map(Ft).filter(cr):null,o})}function Ci(e){return ft(e)||fn(e)}function cr(e){return null!==e}function ui(e){return H(()=>({type:e.type,bootstrap:e.bootstrap||Ye,declarations:e.declarations||Ye,imports:e.imports||Ye,exports:e.exports||Ye,transitiveCompileScopes:null,schemas:e.schemas||null,id:e.id||null}))}function Bi(e,t){if(null==e)return We;const n={};for(const i in e)if(e.hasOwnProperty(i)){let o=e[i],c=o;Array.isArray(o)&&(c=o[1],o=o[0]),n[o]=i,t&&(t[o]=c)}return n}const Vi=zi;function ur(e){return{type:e.type,name:e.name,factory:null,pure:!1!==e.pure,standalone:!0===e.standalone,onDestroy:e.type.prototype.ngOnDestroy||null}}function ft(e){return e[en]||null}function fn(e){return e[lr]||null}function Ft(e){return e[Li]||null}function ti(e){const t=ft(e)||fn(e)||Ft(e);return null!==t&&t.standalone}function Vt(e,t){const n=e[Gi]||null;if(!n&&!0===t)throw new Error(`Type ${be(e)} does not have '\u0275mod' property.`);return n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function kn(e){return Array.isArray(e)&&"object"==typeof e[1]}function On(e){return Array.isArray(e)&&!0===e[1]}function Pr(e){return 0!=(4&e.flags)}function dr(e){return e.componentOffset>-1}function Fr(e){return 1==(1&e.flags)}function Wn(e){return null!==e.template}function kr(e){return 0!=(256&e[2])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Si(e,t){return e.hasOwnProperty(qt)?e[qt]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class yo{constructor(t,n,i){this.previousValue=t,this.currentValue=n,this.firstChange=i}isFirstChange(){return this.firstChange}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function hr(){return oo}function oo(e){return e.type.prototype.ngOnChanges&&(e.setInput=Vr),bo}function bo(){const e=pi(this),t=e?.current;if(t){const n=e.previous;if(n===We)e.previous=t;else for(let i in t)n[i]=t[i];e.current=null,this.ngOnChanges(t)}}function Vr(e,t,n,i){const o=this.declaredInputs[n],c=pi(e)||function Hr(e,t){return e[Do]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,{previous:We,current:null}),f=c.current||(c.current={}),m=c.previous,D=m[o];f[o]=new yo(D&&D.currentValue,t,m===We),e[i]=t}hr.ngInherit=!0;const Do="__ngSimpleChanges__";function pi(e){return e[Do]||null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function wn(e){for(;Array.isArray(e);)e=e[0];return e}function wo(e,t){return wn(t[e])}function ii(e,t){return wn(t[e.index])}function ts(e,t){return e.data[t]}function Yn(e,t){const n=t[e];return kn(n)?n:n[0]}function Bn(e){return 64==(64&e[2])}function Oi(e,t){return null==t?null:e[t]}function T(e){e[18]=0}function C(e,t){e[5]+=t;let n=e,i=e[3];for(;null!==i&&(1===t&&1===n[5]||-1===t&&0===n[5]);)i[5]+=t,n=i,i=i[3]
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}const y={lFrame:na(null),bindingsEnabled:!0};function gr(){return y.bindingsEnabled}function pe(){return y.lFrame.lView}function ct(){return y.lFrame.tView}function qs(e){return y.lFrame.contextLView=e,e[8]}function Zs(e){return y.lFrame.contextLView=null,e}function _n(){let e=Ur();for(;null!==e&&64===e.type;)e=e.parent;return e}function Ur(){return y.lFrame.currentTNode}function To(){const e=y.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function Sr(e,t){const n=y.lFrame;n.currentTNode=e,n.isParent=t}function No(){return y.lFrame.isParent}function $r(){y.lFrame.isParent=!1}function Vn(){const e=y.lFrame;let t=e.bindingRootIndex;return-1===t&&(t=e.bindingRootIndex=e.tView.bindingStartIndex),t}function lo(){return y.lFrame.bindingIndex++}function _r(e){const t=y.lFrame,n=t.bindingIndex;return t.bindingIndex=t.bindingIndex+e,n}function Xs(e){y.lFrame.inI18n=e}function Ca(e,t){const n=y.lFrame;n.bindingIndex=n.bindingRootIndex=e,Os(t)}function Os(e){y.lFrame.currentDirectiveIndex=e}function is(){return y.lFrame.currentQueryIndex}function Oo(e){y.lFrame.currentQueryIndex=e}function Io(e){const t=e[1];return 2===t.type?t.declTNode:1===t.type?e[6]:null}function Is(e,t,n){if(n&he.SkipSelf){let o=t,c=e;for(;!(o=o.parent,null!==o||n&he.Host||(o=Io(c),null===o||(c=c[15],10&o.type))););if(null===o)return!1;t=o,e=c}const i=y.lFrame=ta();return i.currentTNode=t,i.lView=e,!0}function As(e){const t=ta(),n=e[1];y.lFrame=t,t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function ta(){const e=y.lFrame,t=null===e?null:e.child;return null===t?na(e):t}function na(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function Ao(){const e=y.lFrame;return y.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const Rs=Ao;function rs(){const e=Ao();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function _(){return y.lFrame.selectedIndex}function M(e){y.lFrame.selectedIndex=e}function b(){const e=y.lFrame;return ts(e.tView,e.selectedIndex)}function yt(e,t){for(let n=t.directiveStart,i=t.directiveEnd;n<i;n++){const c=e.data[n].type.prototype,{ngAfterContentInit:f,ngAfterContentChecked:m,ngAfterViewInit:D,ngAfterViewChecked:N,ngOnDestroy:I}=c;f&&(e.contentHooks||(e.contentHooks=[])).push(-n,f),m&&((e.contentHooks||(e.contentHooks=[])).push(n,m),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,m)),D&&(e.viewHooks||(e.viewHooks=[])).push(-n,D),N&&((e.viewHooks||(e.viewHooks=[])).push(n,N),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,N)),null!=I&&(e.destroyHooks||(e.destroyHooks=[])).push(n,I)}}function Tt(e,t,n){zt(e,t,3,n)}function at(e,t,n,i){(3&e[2])===n&&zt(e,t,n,i)}function an(e,t){let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function zt(e,t,n,i){const c=i??-1,f=t.length-1;let m=0;for(let D=void 0!==i?65535&e[18]:0;D<f;D++)if("number"==typeof t[D+1]){if(m=t[D],null!=i&&m>=i)break}else t[D]<0&&(e[18]+=65536),(m<c||-1==c)&&(In(e,n,t,D),e[18]=(4294901760&e[18])+D+2),D++}function In(e,t,n,i){const o=n[i]<0,c=n[i+1],m=e[o?-n[i]:n[i]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048;try{c.call(m)}finally{}}}else try{c.call(m)}finally{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Hn{constructor(t,n,i){this.factory=t,this.resolving=!1,this.canSeeViewProviders=n,this.injectImpl=i}}function Ea(e,t,n){let i=0;for(;i<n.length;){const o=n[i];if("number"==typeof o){if(0!==o)break;i++;const c=n[i++],f=n[i++],m=n[i++];e.setAttribute(t,f,m,c)}else{const c=o,f=n[++i];Ta(c)?e.setProperty(t,c,f):e.setAttribute(t,c,f),i++}}return i}function Sl(e){return 3===e||4===e||6===e}function Ta(e){return 64===e.charCodeAt(0)}function as(e,t){if(null!==t&&0!==t.length)if(null===e||0===e.length)e=t.slice();else{let n=-1;for(let i=0;i<t.length;i++){const o=t[i];"number"==typeof o?n=o:0===n||Na(e,n,o,null,-1===n||2===n?t[++i]:null)}}return e}function Na(e,t,n,i,o){let c=0,f=e.length;if(-1===t)f=-1;else for(;c<e.length;){const m=e[c++];if("number"==typeof m){if(m===t){f=-1;break}if(m>t){f=c-1;break}}}for(;c<e.length;){const m=e[c];if("number"==typeof m)break;if(m===n){if(null===i)return void(null!==o&&(e[c+1]=o));if(i===e[c+1])return void(e[c+2]=o)}c++,null!==i&&c++,null!==o&&c++}-1!==f&&(e.splice(f,0,t),c=f+1),e.splice(c++,0,n),null!==i&&e.splice(c++,0,i),null!==o&&e.splice(c++,0,o)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ia(e){return-1!==e}function Ps(e){return 32767&e}function Ir(e,t){let n=function Ol(e){return e>>16}(e),i=t;for(;n>0;)i=i[15],n--;return i}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ls=!0;function ra(e){const t=ls;return ls=e,t}let Il=0;const gi={};function ks(e,t){const n=vr(e,t);if(-1!==n)return n;const i=t[1];i.firstCreatePass&&(e.injectorIndex=t.length,cs(i.data,e),cs(t,null),cs(i.blueprint,null));const o=us(e,t),c=e.injectorIndex;if(ia(o)){const f=Ps(o),m=Ir(o,t),D=m[1].data;for(let N=0;N<8;N++)t[c+N]=m[f+N]|D[f+N]}return t[c+8]=o,c}function cs(e,t){e.push(0,0,0,0,0,0,0,0,t)}function vr(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:e.injectorIndex}function us(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,i=null,o=t;for(;null!==o;){if(i=ds(o),null===i)return-1;if(n++,o=o[15],-1!==i.injectorIndex)return i.injectorIndex|n<<16}return-1}function ji(e,t,n){!function Lc(e,t,n){let i;"string"==typeof n?i=n.charCodeAt(0)||0:n.hasOwnProperty(Xn)&&(i=n[Xn]),null==i&&(i=n[Xn]=Il++);const o=255&i;t.data[e+(o>>5)]|=1<<o}(e,t,n)}function Al(e,t,n){if(n&he.Optional||void 0!==e)return e;rn()}function Sa(e,t,n,i){if(n&he.Optional&&void 0===i&&(i=null),0==(n&(he.Self|he.Host))){const o=e[9],c=wt(void 0);try{return o?o.get(t,i,n&he.Optional):li(t,i,n&he.Optional)}finally{wt(c)}}return Al(i,0,n)}function Rl(e,t,n,i=he.Default,o){if(null!==e){if(1024&t[2]){const f=function Pl(e,t,n,i,o){let c=e,f=t;for(;null!==c&&null!==f&&1024&f[2]&&!(256&f[2]);){const m=Oa(c,f,n,i|he.Self,gi);if(m!==gi)return m;let D=c.parent;if(!D){const N=f[21];if(N){const I=N.get(n,gi,i);if(I!==gi)return I}D=ds(f),f=f[15]}c=D}return o}(e,t,n,i,gi);if(f!==gi)return f}const c=Oa(e,t,n,i,gi);if(c!==gi)return c}return Sa(t,n,i,o)}function Oa(e,t,n,i,o){const c=function xl(e){if("string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(Xn)?e[Xn]:void 0;return"number"==typeof t?t>=0?255&t:Fo:t}(n);if("function"==typeof c){if(!Is(t,e,i))return i&he.Host?Al(o,0,i):Sa(t,n,i,o);try{const f=c(i);if(null!=f||i&he.Optional)return f;rn()}finally{Rs()}}else if("number"==typeof c){let f=null,m=vr(e,t),D=-1,N=i&he.Host?t[16][6]:null;for((-1===m||i&he.SkipSelf)&&(D=-1===m?us(e,t):t[m+8],-1!==D&&Ia(i,!1)?(f=t[1],m=Ps(D),t=Ir(D,t)):m=-1);-1!==m;){const I=t[1];if(xo(c,m,I.data)){const P=Ro(m,t,n,f,i,N);if(P!==gi)return P}D=t[m+8],-1!==D&&Ia(i,t[1].data[m+8]===N)&&xo(c,m,t)?(f=I,m=Ps(D),t=Ir(D,t)):m=-1}}return o}function Ro(e,t,n,i,o,c){const f=t[1],m=f.data[e+8],I=Ls(m,f,n,null==i?dr(m)&&ls:i!=f&&0!=(3&m.type),o&he.Host&&c===m);return null!==I?An(t,f,I,m):gi}function Ls(e,t,n,i,o){const c=e.providerIndexes,f=t.data,m=1048575&c,D=e.directiveStart,I=c>>20,W=o?m+I:e.directiveEnd;for(let q=i?m:m+I;q<W;q++){const ae=f[q];if(q<D&&n===ae||q>=D&&ae.type===n)return q}if(o){const q=f[D];if(q&&Wn(q)&&q.type===n)return D}return null}function An(e,t,n,i){let o=e[n];const c=t.data;if(function Gr(e){return e instanceof Hn}(o)){const f=o;f.resolving&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function qe(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new je(-200,`Circular dependency in DI detected for ${e}${n}`)}(function Le(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():we(e)}(c[n]));const m=ra(f.canSeeViewProviders);f.resolving=!0;const D=f.injectImpl?wt(f.injectImpl):null;Is(e,i,he.Default);try{o=e[n]=f.factory(void 0,c,e,i),t.firstCreatePass&&n>=i.directiveStart&&
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Nt(e,t,n){const{ngOnChanges:i,ngOnInit:o,ngDoCheck:c}=t.type.prototype;if(i){const f=oo(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,f),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,f)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),c&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,c),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,c))}(n,c[n],t)}finally{null!==D&&wt(D),ra(m),f.resolving=!1,Rs()}}return o}function xo(e,t,n){return!!(n[t+(e>>5)]&1<<e)}function Ia(e,t){return!(e&he.Self||e&he.Host&&t)}class Po{constructor(t,n){this._tNode=t,this._lView=n}get(t,n,i){return Rl(this._tNode,this._lView,t,pt(i),n)}}function Fo(){return new Po(_n(),pe())}function ri(e){return H(()=>{const t=e.prototype.constructor,n=t[qt]||Aa(t),i=Object.prototype;let o=Object.getPrototypeOf(e.prototype).constructor;for(;o&&o!==i;){const c=o[qt]||Aa(o);if(c&&c!==n)return c;o=Object.getPrototypeOf(o)}return c=>new c})}function Aa(e){return Kt(e)?()=>{const t=Aa(Me(e));return t&&t()}:Si(e)}function ds(e){const t=e[1],n=t.type;return 2===n?t.declTNode:1===n?e[6]:null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function co(e){return function Ma(e,t){if("class"===t)return e.classes;if("style"===t)return e.styles;const n=e.attrs;if(n){const i=n.length;let o=0;for(;o<i;){const c=n[o];if(Sl(c))break;if(0===c)o+=2;else if("number"==typeof c)for(o++;o<i&&"string"==typeof n[o];)o++;else{if(c===t)return n[o+1];o+=2}}}return null}(_n(),e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const fs="__parameters__";function Yr(e,t,n){return H(()=>{const i=function ko(e){return function(...n){if(e){const i=e(...n);for(const o in i)this[o]=i[o]}}}(t);function o(...c){if(this instanceof o)return i.apply(this,c),this;const f=new o(...c);return m.annotation=f,m;function m(D,N,I){const P=D.hasOwnProperty(fs)?D[fs]:Object.defineProperty(D,fs,{value:[]})[fs];for(;P.length<=I;)P.push(null);return(P[I]=P[I]||[]).push(f),D}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Wt{constructor(t,n){this._desc=t,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,"number"==typeof n?this.__NG_ELEMENT_ID__=n:void 0!==n&&(this.\u0275prov=Qt({token:this,providedIn:n.providedIn||"root",factory:n.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Zi(e,t){e.forEach(n=>Array.isArray(n)?Zi(n,t):t(n))}function hs(e,t,n){t>=e.length?e.push(n):e.splice(t,0,n)}function Hs(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function ps(e,t){const n=[];for(let i=0;i<e;i++)n.push(t);return n}function h(e,t,n){let i=v(e,t);return i>=0?e[1|i]=n:(i=~i,function kl(e,t,n,i){let o=e.length;if(o==t)e.push(n,i);else if(1===o)e.push(i,e[0]),e[0]=n;else{for(o--,e.push(e[o-1],e[o]);o>t;)e[o]=e[o-2],o--;e[t]=n,e[t+1]=i}}(e,i,t,n)),i}function d(e,t){const n=v(e,t);if(n>=0)return e[1|n]}function v(e,t){return function S(e,t,n){let i=0,o=e.length>>n;for(;o!==i;){const c=i+(o-i>>1),f=e[c<<n];if(t===f)return c<<n;f>t?o=c:i=c+1}return~(o<<n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e,t,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Dr=Xt(Yr("Optional"),8),gs=Xt(Yr("SkipSelf"),4);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var Jr=(()=>((Jr=Jr||{})[Jr.Important=1]="Important",Jr[Jr.DashCase=2]="DashCase",Jr))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const bd=/^>|^->|<!--|-->|--!>|<!-$/g,Dd=/(<|>)/;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ja=new Map;let wd=0;const Wc="__ngContext__";function xi(e,t){kn(t)?(e[Wc]=t[20],function Ed(e){ja.set(e[20],e)}(t)):e[Wc]=t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Yc;function Kc(e,t){return Yc(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function $a(e){const t=e[3];return On(t)?t[3]:t}function qc(e){return ln(e[13])}function er(e){return ln(e[4])}function ln(e){for(;null!==e&&!On(e);)e=e[4];return e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Bo(e,t,n,i,o){if(null!=i){let c,f=!1;On(i)?c=i:kn(i)&&(f=!0,i=i[0]);const m=wn(i);0===e&&null!==n?null==o?Ho(t,n,m):qr(t,n,m,o||null,!0):1===e&&null!==n?qr(t,n,m,o||null,!0):2===e?nu(t,m,f):3===e&&t.destroyNode(m),null!=c&&function ru(e,t,n,i,o){const c=n[7];c!==wn(n)&&Bo(t,e,i,c,o);for(let m=10;m<n.length;m++){const D=n[m];Us(D[1],D,e,t,i,c)}}(t,e,c,n,o)}}function Ga(e,t){return e.createText(t)}function za(e,t,n){e.setValue(t,n)}function Pd(e,t){return e.createComment(function jl(e){return e.replace(bd,t=>t.replace(Dd,"\u200b$1\u200b"))}(t))}function Ul(e,t,n){return e.createElement(t,n)}function Qc(e,t){const n=e[9],i=n.indexOf(t),o=t[3];512&t[2]&&(t[2]&=-513,C(o,-1)),n.splice(i,1)}function Gl(e,t){if(e.length<=10)return;const n=10+t,i=e[n];if(i){const o=i[17];null!==o&&o!==e&&Qc(o,i),t>0&&(e[n-1][4]=i[4]);const c=Hs(e,10+t);!function $l(e,t){Us(e,t,t[11],2,null,null),t[0]=null,t[6]=null}(i[1],i);const f=c[19];null!==f&&f.detachView(c[1]),i[3]=null,i[4]=null,i[2]&=-65}return i}function Xc(e,t){if(!(128&t[2])){const n=t[11];n.destroyNode&&Us(e,t,n,3,null,null),function Wa(e){let t=e[13];if(!t)return Vo(e[1],e);for(;t;){let n=null;if(kn(t))n=t[13];else{const i=t[10];i&&(n=i)}if(!n){for(;t&&!t[4]&&t!==e;)kn(t)&&Vo(t[1],t),t=t[3];null===t&&(t=e),kn(t)&&Vo(t[1],t),n=t&&t[4]}t=n}}(t)}}function Vo(e,t){if(!(128&t[2])){t[2]&=-65,t[2]|=128,function ca(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let i=0;i<n.length;i+=2){const o=t[n[i]];if(!(o instanceof Hn)){const c=n[i+1];if(Array.isArray(c))for(let f=0;f<c.length;f+=2){const m=o[c[f]],D=c[f+1];try{D.call(m)}finally{}}else try{c.call(o)}finally{}}}}(e,t),function ms(e,t){const n=e.cleanup,i=t[7];let o=-1;if(null!==n)for(let c=0;c<n.length-1;c+=2)if("string"==typeof n[c]){const f=n[c+3];f>=0?i[o=f]():i[o=-f].unsubscribe(),c+=2}else{const f=i[o=n[c+1]];n[c].call(f)}if(null!==i){for(let c=o+1;c<i.length;c++)(0,i[c])();t[7]=null}}(e,t),1===t[1].type&&t[11].destroy();const n=t[17];if(null!==n&&On(t[3])){n!==t[3]&&Qc(n,t);const i=t[19];null!==i&&i.detachView(e)}!function Wh(e){ja.delete(e[20])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)}}function ua(e,t,n){return zl(e,t.parent,n)}function zl(e,t,n){let i=t;for(;null!==i&&40&i.type;)i=(t=i).parent;if(null===i)return n[0];{const{componentOffset:o}=i;if(o>-1){const{encapsulation:c}=e.data[i.directiveStart+o];if(c===Re.None||c===Re.Emulated)return null}return ii(i,n)}}function qr(e,t,n,i,o){e.insertBefore(t,n,i,o)}function Ho(e,t,n){e.appendChild(t,n)}function Wl(e,t,n,i,o){null!==i?qr(e,t,n,i,o):Ho(e,t,n)}function Yl(e,t){return e.parentNode(t)}function kd(e,t,n){return Bd(e,t,n)}function Ld(e,t,n){return 40&e.type?ii(e,n):null}let eu,ql,jo,qa,Bd=Ld;function Vd(e,t){Bd=e,eu=t}function Kl(e,t,n,i){const o=ua(e,i,t),c=t[11],m=kd(i.parent||t[6],i,t);if(null!=o)if(Array.isArray(n))for(let D=0;D<n.length;D++)Wl(c,o,n[D],m,!1);else Wl(c,o,n,m,!1);void 0!==eu&&eu(c,i,t,n,o)}function Jl(e,t){if(null!==t){const n=t.type;if(3&n)return ii(t,e);if(4&n)return tu(-1,e[t.index]);if(8&n){const i=t.child;if(null!==i)return Jl(e,i);{const o=e[t.index];return On(o)?tu(-1,o):wn(o)}}if(32&n)return Kc(t,e)()||wn(e[t.index]);{const i=Hd(e,t);return null!==i?Array.isArray(i)?i[0]:Jl($a(e[16]),i):Jl(e,t.next)}}return null}function Hd(e,t){return null!==t?e[16][6].projection[t.projection]:null}function tu(e,t){const n=10+e+1;if(n<t.length){const i=t[n],o=i[1].firstChild;if(null!==o)return Jl(i,o)}return t[7]}function nu(e,t,n){const i=Yl(e,t);i&&function ep(e,t,n,i){e.removeChild(t,n,i)}(e,i,t,n)}function iu(e,t,n,i,o,c,f){for(;null!=n;){const m=i[n.index],D=n.type;if(f&&0===t&&(m&&xi(wn(m),i),n.flags|=2),32!=(32&n.flags))if(8&D)iu(e,t,n.child,i,o,c,!1),Bo(t,e,o,m,c);else if(32&D){const N=Kc(n,i);let I;for(;I=N();)Bo(t,e,o,I,c);Bo(t,e,o,m,c)}else 16&D?Ya(e,t,i,n,o,c):Bo(t,e,o,m,c);n=f?n.projectionNext:n.next}}function Us(e,t,n,i,o,c){iu(n,i,e.firstChild,t,o,c,!1)}function Ya(e,t,n,i,o,c){const f=n[16],D=f[6].projection[i.projection];if(Array.isArray(D))for(let N=0;N<D.length;N++)Bo(t,e,o,D[N],c);else iu(e,t,D,f[3],o,c,!0)}function su(e,t,n){""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n)}function da(e,t,n){const{mergedAttrs:i,classes:o,styles:c}=n;null!==i&&Ea(e,t,i),null!==o&&su(e,t,o),null!==c&&function Ka(e,t,n){e.setAttribute(t,"style",n)}(e,t,c)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function tr(e){return function Ja(){if(void 0===ql&&(ql=null,jt.trustedTypes))try{ql=jt.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return ql}()?.createHTML(e)||e}function zd(e){jo=e}function lu(e){return function Zl(){if(void 0===qa&&(qa=null,jt.trustedTypes))try{qa=jt.trustedTypes.createPolicy("angular#unsafe-bypass",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch{}return qa}()?.createScriptURL(e)||e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Xl{constructor(t){this.changingThisBreaksApplicationSecurity=t}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Kn})`}}function Uo(e){return e instanceof Xl?e.changingThisBreaksApplicationSecurity:e}function fa(e,t){const n=function nc(e){return e instanceof Xl&&e.getTypeName()||null}(e);if(null!=n&&n!==t){if("ResourceURL"===n&&"URL"===t)return!0;throw new Error(`Required a safe ${t}, got a ${n} (see ${Kn})`)}return n===t}class du{constructor(t){this.inertDocumentHelper=t}getInertBodyElement(t){t="<body><remove></remove>"+t;try{const n=(new window.DOMParser).parseFromString(tr(t),"text/html").body;return null===n?this.inertDocumentHelper.getInertBodyElement(t):(n.removeChild(n.firstChild),n)}catch{return null}}}class fu{constructor(t){if(this.defaultDoc=t,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"),null==this.inertDocument.body){const n=this.inertDocument.createElement("html");this.inertDocument.appendChild(n);const i=this.inertDocument.createElement("body");n.appendChild(i)}}getInertBodyElement(t){const n=this.inertDocument.createElement("template");if("content"in n)return n.innerHTML=tr(t),n;const i=this.inertDocument.createElement("body");return i.innerHTML=tr(t),this.defaultDoc.documentMode&&this.stripCustomNsAttrs(i),i}stripCustomNsAttrs(t){const n=t.attributes;for(let o=n.length-1;0<o;o--){const f=n.item(o).name;("xmlns:ns1"===f||0===f.indexOf("ns1:"))&&t.removeAttribute(f)}let i=t.firstChild;for(;i;)i.nodeType===Node.ELEMENT_NODE&&this.stripCustomNsAttrs(i),i=i.nextSibling}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const pu=/^(?:(?:https?|mailto|data|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi;function Qa(e){return(e=String(e)).match(pu)?e:"unsafe:"+e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function $o(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function Xa(...e){const t={};for(const n of e)for(const i in n)n.hasOwnProperty(i)&&(t[i]=!0);return t}const rc=$o("area,br,col,hr,img,wbr"),gu=$o("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),mu=$o("rp,rt"),oc=Xa(rc,Xa(gu,$o("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Xa(mu,$o("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Xa(mu,gu)),_u=$o("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),qd=Xa(_u,$o("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),$o("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"));
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
var jn=(()=>((jn=jn||{})[jn.NONE=0]="NONE",jn[jn.HTML=1]="HTML",jn[jn.STYLE=2]="STYLE",jn[jn.SCRIPT=3]="SCRIPT",jn[jn.URL=4]="URL",jn[jn.RESOURCE_URL=5]="RESOURCE_URL",jn))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function yu(e){const t=tl();return t?t.sanitize(jn.URL,e)||"":fa(e,"URL")?Uo(e):Qa(we(e))}function Zd(e){const t=tl();if(t)return lu(t.sanitize(jn.RESOURCE_URL,e)||"");if(fa(e,"ResourceURL"))return lu(Uo(e));throw new je(904,!1)}function lc(e,t,n){return function gp(e,t){return"src"===t&&("embed"===e||"frame"===e||"iframe"===e||"media"===e||"script"===e)||"href"===t&&("base"===e||"link"===e)?Zd:yu}(t,n)(e)}function tl(){const e=pe();return e&&e[12]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const bu=new Wt("ENVIRONMENT_INITIALIZER"),Xd=new Wt("INJECTOR",-1),cc=new Wt("INJECTOR_DEF_TYPES");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class ef{get(t,n=Di){if(n===Di){const i=new Error(`NullInjectorError: No provider for ${be(t)}!`);throw i.name="NullInjectorError",i}return n}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function mp(e){return{\u0275providers:e}}function _p(...e){return{\u0275providers:tf(0,e),\u0275fromNgModule:!0}}function tf(e,...t){const n=[],i=new Set;let o;return Zi(t,c=>{const f=c;Du(f,n,[],i)&&(o||(o=[]),o.push(f))}),void 0!==o&&uc(o,n),n}function uc(e,t){for(let n=0;n<e.length;n++){const{providers:o}=e[n];Cu(o,c=>{t.push(c)})}}function Du(e,t,n,i){if(!(e=Me(e)))return!1;let o=null,c=ki(e);const f=!c&&ft(e);if(c||f){if(f&&!f.standalone)return!1;o=e}else{const D=e.ngModule;if(c=ki(D),!c)return!1;o=D}const m=i.has(o);if(f){if(m)return!1;if(i.add(o),f.dependencies){const D="function"==typeof f.dependencies?f.dependencies():f.dependencies;for(const N of D)Du(N,t,n,i)}}else{if(!c)return!1;{if(null!=c.imports&&!m){let N;i.add(o);try{Zi(c.imports,I=>{Du(I,t,n,i)&&(N||(N=[]),N.push(I))})}finally{}void 0!==N&&uc(N,t)}if(!m){const N=Si(o)||(()=>new o);t.push({provide:o,useFactory:N,deps:Ye},{provide:cc,useValue:o,multi:!0},{provide:bu,useValue:()=>Ee(o),multi:!0})}const D=c.providers;null==D||m||Cu(D,I=>{t.push(I)})}}return o!==e&&void 0!==e.providers}function Cu(e,t){for(let n of e)it(n)&&(n=n.\u0275providers),Array.isArray(n)?Cu(n,t):t(n)}const vp=fe({provide:String,useValue:fe});function dc(e){return null!==e&&"object"==typeof e&&vp in e}function $s(e){return"function"==typeof e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const nl=new Wt("Set Injector scope."),fc={},bp={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let wu;function hc(){return void 0===wu&&(wu=new ef),wu}class Gs{}class sf extends Gs{constructor(t,n,i,o){super(),this.parent=n,this.source=i,this.scopes=o,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,u(t,f=>this.processProvider(f)),this.records.set(Xd,zs(void 0,this)),o.has("environment")&&this.records.set(Gs,zs(void 0,this));const c=this.records.get(nl);null!=c&&"string"==typeof c.value&&this.scopes.add(c.value),this.injectorDefTypes=new Set(this.get(cc.multi,Ye,he.Self))}get destroyed(){return this._destroyed}destroy(){this.assertNotDestroyed(),this._destroyed=!0;try{for(const t of this._ngOnDestroyHooks)t.ngOnDestroy();for(const t of this._onDestroyHooks)t()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),this._onDestroyHooks.length=0}}onDestroy(t){this._onDestroyHooks.push(t)}runInContext(t){this.assertNotDestroyed();const n=oe(this),i=wt(void 0);try{return t()}finally{oe(n),wt(i)}}get(t,n=Di,i=he.Default){this.assertNotDestroyed(),i=pt(i);const o=oe(this),c=wt(void 0);try{if(!(i&he.SkipSelf)){let m=this.records.get(t);if(void 0===m){const D=function r(e){return"function"==typeof e||"object"==typeof e&&e instanceof Wt}(t)&&ht(t);m=D&&this.injectableDefInScope(D)?zs(Eu(t),fc):null,this.records.set(t,m)}if(null!=m)return this.hydrate(t,m)}return(i&he.Self?hc():this.parent).get(t,n=i&he.Optional&&n===Di?null:n)}catch(f){if("NullInjectorError"===f.name){if((f[ci]=f[ci]||[]).unshift(be(t)),o)throw f;return function Bt(e,t,n,i){const o=e[ci];throw t[j]&&o.unshift(t[j]),e.message=function K(e,t,n,i=null){e=e&&"\n"===e.charAt(0)&&"\u0275"==e.charAt(1)?e.slice(2):e;let o=be(t);if(Array.isArray(t))o=t.map(be).join(" -> ");else if("object"==typeof t){let c=[];for(let f in t)if(t.hasOwnProperty(f)){let m=t[f];c.push(f+":"+("string"==typeof m?JSON.stringify(m):be(m)))}o=`{${c.join(", ")}}`}return`${n}${i?"("+i+")":""}[${o}]: ${e.replace(se,"\n  ")}`}("\n"+e.message,o,n,i),e.ngTokenPath=o,e[ci]=null,e}(f,t,"R3InjectorError",this.source)}throw f}finally{wt(c),oe(o)}}resolveInjectorInitializers(){const t=oe(this),n=wt(void 0);try{const i=this.get(bu.multi,Ye,he.Self);for(const o of i)o()}finally{oe(t),wt(n)}}toString(){const t=[],n=this.records;for(const i of n.keys())t.push(be(i));return`R3Injector[${t.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new je(205,!1)}processProvider(t){let n=$s(t=Me(t))?t:Me(t&&t.provide);const i=function Tu(e){return dc(e)?zs(void 0,e.useValue):zs(Nu(e),fc)}(t);if($s(t)||!0!==t.multi)this.records.get(n);else{let o=this.records.get(n);o||(o=zs(void 0,fc,!0),o.factory=()=>Qn(o.multi),this.records.set(n,o)),n=t,o.multi.push(t)}this.records.set(n,i)}hydrate(t,n){return n.value===fc&&(n.value=bp,n.value=n.factory()),"object"==typeof n.value&&n.value&&function l(e){return null!==e&&"object"==typeof e&&"function"==typeof e.ngOnDestroy}(n.value)&&this._ngOnDestroyHooks.add(n.value),n.value}injectableDefInScope(t){if(!t.providedIn)return!1;const n=Me(t.providedIn);return"string"==typeof n?"any"===n||this.scopes.has(n):this.injectorDefTypes.has(n)}}function Eu(e){const t=ht(e),n=null!==t?t.factory:Si(e);if(null!==n)return n;if(e instanceof Wt)throw new je(204,!1);if(e instanceof Function)return function Dp(e){const t=e.length;if(t>0)throw ps(t,"?"),new je(204,!1);const n=function wr(e){const t=e&&(e[Ge]||e[Ht]);if(t){const n=function qn(e){if(e.hasOwnProperty("name"))return e.name;const t=(""+e).match(/^function\s*([^\s(]+)/);return null===t?"":t[1]}(e);return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`),t}return null}(e);return null!==n?()=>n.factory(e):()=>new e}(e);throw new je(204,!1)}function Nu(e,t,n){let i;if($s(e)){const o=Me(e);return Si(o)||Eu(o)}if(dc(e))i=()=>Me(e.useValue);else if(function rf(e){return!(!e||!e.useFactory)}(e))i=()=>e.useFactory(...Qn(e.deps||[]));else if(function nf(e){return!(!e||!e.useExisting)}(e))i=()=>Ee(Me(e.useExisting));else{const o=Me(e&&(e.useClass||e.provide));if(!function s(e){return!!e.deps}(e))return Si(o)||Eu(o);i=()=>new o(...Qn(e.deps))}return i}function zs(e,t,n=!1){return{factory:e,value:t,multi:n?[]:void 0}}function u(e,t){for(const n of e)Array.isArray(n)?u(n,t):n&&it(n)?u(n.\u0275providers,t):t(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class g{}class w{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ne{resolveComponentFactory(t){throw function x(e){const t=Error(`No component factory found for ${be(e)}. Did you add it to @NgModule.entryComponents?`);return t.ngComponent=e,t}(t)}}let re=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.NULL=new ne,e})();function Pe(){return Se(_n(),pe())}function Se(e,t){return new xe(ii(e,t))}let xe=(()=>{class e{constructor(n){this.nativeElement=n}}return e.__NG_ELEMENT_ID__=Pe,e})();function At(e){return e instanceof xe?e.nativeElement:e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Ke{}let lt=(()=>{class e{}return e.__NG_ELEMENT_ID__=()=>function Mt(){const e=pe(),n=Yn(_n().index,e);return(kn(n)?n:e)[11]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(),e})(),bt=(()=>{class e{}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=Qt({token:e,providedIn:"root",factory:()=>null}),e})();class tn{constructor(t){this.full=t,this.major=t.split(".")[0],this.minor=t.split(".")[1],this.patch=t.split(".").slice(2).join(".")}}const Ot=new tn("15.0.4"),Dt={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Yt(e){return e.ngOriginalError}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class pn{constructor(){this._console=console}handleError(t){const n=this._findOriginalError(t);this._console.error("ERROR",t),n&&this._console.error("ORIGINAL ERROR",n)}_findOriginalError(t){let n=t&&Yt(t);for(;n&&Yt(n);)n=Yt(n);return n||null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Cr(e){return e instanceof Function?e():e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function uo(e,t,n){let i=e.length;for(;;){const o=e.indexOf(t,n);if(-1===o)return o;if(0===o||e.charCodeAt(o-1)<=32){const c=t.length;if(o+c===i||e.charCodeAt(o+c)<=32)return o}n=o+1}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ws="ng-template";function ol(e,t,n){let i=0;for(;i<e.length;){let o=e[i++];if(n&&"class"===o){if(o=e[i],-1!==uo(o.toLowerCase(),t,0))return!0}else if(1===o){for(;i<e.length&&"string"==typeof(o=e[i++]);)if(o.toLowerCase()===t)return!0;return!1}}return!1}function Go(e){return 4===e.type&&e.value!==Ws}function pc(e,t,n){return t===(4!==e.type||n?e.value:Ws)}function af(e,t,n){let i=4;const o=e.attrs||[],c=function uf(e){for(let t=0;t<e.length;t++)if(Sl(e[t]))return t;return e.length}(o);let f=!1;for(let m=0;m<t.length;m++){const D=t[m];if("number"!=typeof D){if(!f)if(4&i){if(i=2|1&i,""!==D&&!pc(e,D,n)||""===D&&1===t.length){if(ir(i))return!1;f=!0}}else{const N=8&i?D:t[++m];if(8&i&&null!==e.attrs){if(!ol(e.attrs,N,n)){if(ir(i))return!1;f=!0}continue}const P=lf(8&i?"class":D,o,Go(e),n);if(-1===P){if(ir(i))return!1;f=!0;continue}if(""!==N){let W;W=P>c?"":o[P+1].toLowerCase();const q=8&i?W:null;if(q&&-1!==uo(q,N,0)||2&i&&N!==W){if(ir(i))return!1;f=!0}}}}else{if(!f&&!ir(i)&&!ir(D))return!1;if(f&&ir(D))continue;f=!1,i=D|1&i}}return ir(i)||f}function ir(e){return 0==(1&e)}function lf(e,t,n,i){if(null===t)return-1;let o=0;if(i||!n){let c=!1;for(;o<t.length;){const f=t[o];if(f===e)return o;if(3===f||6===f)c=!0;else{if(1===f||2===f){let m=t[++o];for(;"string"==typeof m;)m=t[++o];continue}if(4===f)break;if(0===f){o+=4;continue}}o+=c?1:2}return-1}return function Su(e,t){let n=e.indexOf(4);if(n>-1)for(n++;n<e.length;){const i=e[n];if("number"==typeof i)return-1;if(i===t)return n;n++}return-1}(t,e)}function gc(e,t,n=!1){for(let i=0;i<t.length;i++)if(af(e,t[i],n))return!0;return!1}function Ou(e,t){e:for(let n=0;n<t.length;n++){const i=t[n];if(e.length===i.length){for(let o=0;o<e.length;o++)if(e[o]!==i[o])continue e;return!0}}return!1}function Iu(e,t){return e?":not("+t.trim()+")":t}function df(e){let t=e[0],n=1,i=2,o="",c=!1;for(;n<e.length;){let f=e[n];if("string"==typeof f)if(2&i){const m=e[++n];o+="["+f+(m.length>0?'="'+m+'"':"")+"]"}else 8&i?o+="."+f:4&i&&(o+=" "+f);else""!==o&&!ir(f)&&(t+=Iu(c,o),o=""),i=f,c=c||!ir(i);n++}return""!==o&&(t+=Iu(c,o)),t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const rt={};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function mc(e){al(ct(),pe(),_()+e,!1)}function al(e,t,n,i){if(!i)if(3==(3&t[2])){const c=e.preOrderCheckHooks;null!==c&&Tt(t,c,n)}else{const c=e.preOrderHooks;null!==c&&at(t,c,0,n)}M(n)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function wp(e,t=null,n=null,i){const o=Ep(e,t,n,i);return o.resolveInjectorInitializers(),o}function Ep(e,t=null,n=null,i,o=new Set){const c=[n||Ye,_p(e)];return i=i||("object"==typeof e?void 0:be(e)),new sf(c,t||hc(),i||null,o)
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}let ga=(()=>{class e{static create(n,i){if(Array.isArray(n))return wp({name:""},i,n,"");{const o=n.name??"";return wp({name:o},n.parent,n.providers,o)}}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.THROW_IF_NOT_FOUND=Di,e.NULL=new ef,e.\u0275prov=Qt({token:e,providedIn:"any",factory:()=>Ee(Xd)}),e.__NG_ELEMENT_ID__=-1,e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function cl(e,t=he.Default){const n=pe();return null===n?Ee(e,t):Rl(_n(),n,Me(e),t)}function Ap(){throw new Error("invalid")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Rp(e,t){const n=e.contentQueries;if(null!==n)for(let i=0;i<n.length;i+=2){const o=n[i],c=n[i+1];if(-1!==c){const f=e.data[c];Oo(o),f.contentQueries(2,t[c],c)}}}function Pu(e,t,n,i,o,c,f,m,D,N,I){const P=t.blueprint.slice();return P[0]=o,P[2]=76|i,(null!==I||e&&1024&e[2])&&(P[2]|=1024),T(P),P[3]=P[15]=e,P[8]=n,P[10]=f||e&&e[10],P[11]=m||e&&e[11],P[12]=D||e&&e[12]||null,P[9]=N||e&&e[9]||null,P[6]=c,P[20]=function zh(){return wd++}(),P[21]=I,P[16]=2==t.type?e[16]:P,P}function ul(e,t,n,i,o){let c=e.data[t];if(null===c)c=mf(e,t,n,i,o),function Da(){return y.lFrame.inI18n}()&&(c.flags|=32);else if(64&c.type){c.type=n,c.value=i,c.attrs=o;const f=To();c.injectorIndex=null===f?-1:f.injectorIndex}return Sr(c,!0),c}function mf(e,t,n,i,o){const c=Ur(),f=No(),D=e.data[t]=function jv(e,t,n,i,o,c){return{type:n,index:i,insertBeforeIndex:null,injectorIndex:t?t.injectorIndex:-1,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:c,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}(0,f?c:c&&c.parent,n,t,i,o);return null===e.firstChild&&(e.firstChild=D),null!==c&&(f?null==c.child&&null!==D.parent&&(c.child=D):null===c.next&&(c.next=D)),D}function yc(e,t,n,i){if(0===n)return-1;const o=t.length;for(let c=0;c<n;c++)t.push(i),e.blueprint.push(i),e.data.push(null);return o}function _f(e,t,n){As(t);try{const i=e.viewQuery;null!==i&&Mf(1,i,n);const o=e.template;null!==o&&xp(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&Rp(e,t),e.staticViewQueries&&Mf(2,e.viewQuery,n);const c=e.components;null!==c&&function Bv(e,t){for(let n=0;n<t.length;n++)sy(e,t[n])}(t,c)}catch(i){throw e.firstCreatePass&&(e.incompleteFirstPass=!0,e.firstCreatePass=!1),i}finally{t[2]&=-5,rs()}}function Fu(e,t,n,i){const o=t[2];if(128!=(128&o)){As(t);try{T(t),function Qs(e){return y.lFrame.bindingIndex=e}(e.bindingStartIndex),null!==n&&xp(e,t,n,2,i);const f=3==(3&o);if(f){const N=e.preOrderCheckHooks;null!==N&&Tt(t,N,null)}else{const N=e.preOrderHooks;null!==N&&at(t,N,0,null),an(t,0)}if(function ry(e){for(let t=qc(e);null!==t;t=er(t)){if(!t[2])continue;const n=t[9];for(let i=0;i<n.length;i++){const o=n[i],c=o[3];0==(512&o[2])&&C(c,1),o[2]|=512}}}(t),function iy(e){for(let t=qc(e);null!==t;t=er(t))for(let n=10;n<t.length;n++){const i=t[n],o=i[1];Bn(i)&&Fu(o,i,o.template,i[8])}}(t),null!==e.contentQueries&&Rp(e,t),f){const N=e.contentCheckHooks;null!==N&&Tt(t,N)}else{const N=e.contentHooks;null!==N&&at(t,N,1),an(t,1)}!function kv(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let i=0;i<n.length;i++){const o=n[i];if(o<0)M(~o);else{const c=o,f=n[++i],m=n[++i];Ca(f,c),m(2,t[c])}}}finally{M(-1)}}(e,t);const m=e.components;null!==m&&function Lv(e,t){for(let n=0;n<t.length;n++)oy(e,t[n])}(t,m);const D=e.viewQuery;if(null!==D&&Mf(2,D,i),f){const N=e.viewCheckHooks;null!==N&&Tt(t,N)}else{const N=e.viewHooks;null!==N&&at(t,N,2),an(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),t[2]&=-41,512&t[2]&&(t[2]&=-513,C(t[3],-1))}finally{rs()}}}function xp(e,t,n,i,o){const c=_(),f=2&i;try{M(-1),f&&t.length>22&&al(e,t,22,!1),n(i,o)}finally{M(c)}}function vf(e,t,n){if(Pr(t)){const o=t.directiveEnd;for(let c=t.directiveStart;c<o;c++){const f=e.data[c];f.contentQueries&&f.contentQueries(1,n[c],c)}}}function yf(e,t,n){!gr()||(function Yv(e,t,n,i){const o=n.directiveStart,c=n.directiveEnd;dr(n)&&function ey(e,t,n){const i=ii(t,e),o=Pp(n),c=e[10],f=ku(e,Pu(e,o,null,n.onPush?32:16,i,t,c,c.createRenderer(i,n),null,null,null));e[t.index]=f}(t,n,e.data[o+n.componentOffset]),e.firstCreatePass||ks(n,t),xi(i,t);const f=n.initialInputs;for(let m=o;m<c;m++){const D=e.data[m],N=An(t,e,m,n);xi(N,t),null!==f&&ty(0,m-o,N,D,0,f),Wn(D)&&(Yn(n.index,t)[8]=An(t,e,m,n))}}(e,t,n,ii(n,t)),64==(64&n.flags)&&Hp(e,t,n))}function bf(e,t,n=ii){const i=t.localNames;if(null!==i){let o=t.index+1;for(let c=0;c<i.length;c+=2){const f=i[c+1],m=-1===f?n(t,e):e[f];e[o++]=m}}}function Pp(e){const t=e.tView;return null===t||t.incompleteFirstPass?e.tView=Df(1,null,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts):t}function Df(e,t,n,i,o,c,f,m,D,N){const I=22+i,P=I+o,W=function Vv(e,t){const n=[];for(let i=0;i<t;i++)n.push(i<e?null:rt);return n}(I,P),q="function"==typeof N?N():N;return W[1]={type:e,blueprint:W,template:n,queries:null,viewQuery:m,declTNode:t,data:W.slice().fill(null,I),bindingStartIndex:I,expandoStartIndex:P,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof c?c():c,pipeRegistry:"function"==typeof f?f():f,firstChild:null,schemas:D,consts:q,incompleteFirstPass:!1}}function Fp(e,t,n,i){const o=Up(t);null===n?o.push(i):(o.push(n),e.firstCreatePass&&$p(e).push(i,o.length-1))}function kp(e,t,n,i){for(let o in e)if(e.hasOwnProperty(o)){n=null===n?{}:n;const c=e[o];null===i?Lp(n,t,o,c):i.hasOwnProperty(o)&&Lp(n,t,i[o],c)}return n}function Lp(e,t,n,i){e.hasOwnProperty(n)?e[n].push(t,i):e[n]=[t,i]}function xr(e,t,n,i,o,c,f,m){const D=ii(t,n);let I,N=t.inputs;!m&&null!=N&&(I=N[i])?(Sf(e,n,I,i,o),dr(t)&&Bp(n,t.index)):3&t.type&&(i=function $v(e){return"class"===e?"className":"for"===e?"htmlFor":"formaction"===e?"formAction":"innerHtml"===e?"innerHTML":"readonly"===e?"readOnly":"tabindex"===e?"tabIndex":e}(i),o=null!=f?f(o,t.value||"",i):o,c.setProperty(D,i,o))}function Bp(e,t){const n=Yn(t,e);16&n[2]||(n[2]|=32)}function Cf(e,t,n,i){let o=!1;if(gr()){const c=null===i?null:{"":-1},f=function Jv(e,t){const n=e.directiveRegistry;let i=null,o=null;if(n)for(let c=0;c<n.length;c++){const f=n[c];if(gc(t,f.selectors,!1))if(i||(i=[]),Wn(f))if(null!==f.findHostDirectiveDefs){const m=[];o=o||new Map,f.findHostDirectiveDefs(f,m,o),i.unshift(...m,f),wf(e,t,m.length)}else i.unshift(f),wf(e,t,0);else o=o||new Map,f.findHostDirectiveDefs?.(f,i,o),i.push(f)}return null===i?null:[i,o]}(e,n);let m,D;null===f?m=D=null:[m,D]=f,null!==m&&(o=!0,Vp(e,t,n,m,c,D)),c&&function qv(e,t,n){if(t){const i=e.localNames=[];for(let o=0;o<t.length;o+=2){const c=n[t[o+1]];if(null==c)throw new je(-301,!1);i.push(t[o],c)}}}(n,i,c)}return n.mergedAttrs=as(n.mergedAttrs,n.attrs),o}function Vp(e,t,n,i,o,c){for(let N=0;N<i.length;N++)ji(ks(n,t),e,i[N].type);!function Qv(e,t,n){e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}(n,e.data.length,i.length);for(let N=0;N<i.length;N++){const I=i[N];I.providersResolver&&I.providersResolver(I)}let f=!1,m=!1,D=yc(e,t,i.length,null);for(let N=0;N<i.length;N++){const I=i[N];n.mergedAttrs=as(n.mergedAttrs,I.hostAttrs),Xv(e,n,t,D,I),Zv(D,I,o),null!==I.contentQueries&&(n.flags|=4),(null!==I.hostBindings||null!==I.hostAttrs||0!==I.hostVars)&&(n.flags|=64);const P=I.type.prototype;!f&&(P.ngOnChanges||P.ngOnInit||P.ngDoCheck)&&((e.preOrderHooks||(e.preOrderHooks=[])).push(n.index),f=!0),!m&&(P.ngOnChanges||P.ngDoCheck)&&((e.preOrderCheckHooks||(e.preOrderCheckHooks=[])).push(n.index),m=!0),D++}!function Uv(e,t,n){const o=t.directiveEnd,c=e.data,f=t.attrs,m=[];let D=null,N=null;for(let I=t.directiveStart;I<o;I++){const P=c[I],W=n?n.get(P):null,ae=W?W.outputs:null;D=kp(P.inputs,I,D,W?W.inputs:null),N=kp(P.outputs,I,N,ae);const Ne=null===D||null===f||Go(t)?null:ny(D,I,f);m.push(Ne)}null!==D&&(D.hasOwnProperty("class")&&(t.flags|=8),D.hasOwnProperty("style")&&(t.flags|=16)),t.initialInputs=m,t.inputs=D,t.outputs=N}(e,n,c)}function Hp(e,t,n){const i=n.directiveStart,o=n.directiveEnd,c=n.index,f=function ea(){return y.lFrame.currentDirectiveIndex}();try{M(c);for(let m=i;m<o;m++){const D=e.data[m],N=t[m];Os(m),(null!==D.hostBindings||0!==D.hostVars||null!==D.hostAttrs)&&Kv(D,N)}}finally{M(-1),Os(f)}}function Kv(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function wf(e,t,n){t.componentOffset=n,(e.components||(e.components=[])).push(t.index)}function Zv(e,t,n){if(n){if(t.exportAs)for(let i=0;i<t.exportAs.length;i++)n[t.exportAs[i]]=e;Wn(t)&&(n[""]=e)}}function Xv(e,t,n,i,o){e.data[i]=o;const c=o.factory||(o.factory=Si(o.type)),f=new Hn(c,Wn(o),cl);e.blueprint[i]=f,n[i]=f,function zv(e,t,n,i,o){const c=o.hostBindings;if(c){let f=e.hostBindingOpCodes;null===f&&(f=e.hostBindingOpCodes=[]);const m=~t.index;(function Wv(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(f)!=m&&f.push(m),f.push(n,i,c)}}(e,t,i,yc(e,n,o.hostVars,rt),o)}function Ef(e,t,n,i,o,c,f){if(null==c)e.removeAttribute(t,o,n);else{const m=null==f?we(c):f(c,i||"",o);e.setAttribute(t,o,m,n)}}function ty(e,t,n,i,o,c){const f=c[t];if(null!==f){const m=i.setInput;for(let D=0;D<f.length;){const N=f[D++],I=f[D++],P=f[D++];null!==m?i.setInput(n,P,N,I):n[I]=P}}}function ny(e,t,n){let i=null,o=0;for(;o<n.length;){const c=n[o];if(0!==c)if(5!==c){if("number"==typeof c)break;if(e.hasOwnProperty(c)){null===i&&(i=[]);const f=e[c];for(let m=0;m<f.length;m+=2)if(f[m]===t){i.push(c,f[m+1],n[o+1]);break}}o+=2}else o+=2;else o+=4}return i}function jp(e,t,n,i){return[e,!0,!1,t,null,0,i,n,null,null]}function oy(e,t){const n=Yn(t,e);if(Bn(n)){const i=n[1];48&n[2]?Fu(i,n,i.template,n[8]):n[5]>0&&Tf(n)}}function Tf(e){for(let i=qc(e);null!==i;i=er(i))for(let o=10;o<i.length;o++){const c=i[o];if(Bn(c))if(512&c[2]){const f=c[1];Fu(f,c,f.template,c[8])}else c[5]>0&&Tf(c)}const n=e[1].components;if(null!==n)for(let i=0;i<n.length;i++){const o=Yn(n[i],e);Bn(o)&&o[5]>0&&Tf(o)}}function sy(e,t){const n=Yn(t,e),i=n[1];(function ay(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])})(i,n),_f(i,n,n[8])}function ku(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function Nf(e){for(;e;){e[2]|=32;const t=$a(e);if(kr(e)&&!t)return e;e=t}return null}function Lu(e,t,n,i=!0){const o=t[10];o.begin&&o.begin();try{Fu(e,t,e.template,n)}catch(f){throw i&&zp(t,f),f}finally{o.end&&o.end()}}function Mf(e,t,n){Oo(0),t(e,n)}function Up(e){return e[7]||(e[7]=[])}function $p(e){return e.cleanup||(e.cleanup=[])}function zp(e,t){const n=e[9],i=n?n.get(pn,null):null;i&&i.handleError(t)}function Sf(e,t,n,i,o){for(let c=0;c<n.length;){const f=n[c++],m=n[c++],D=t[f],N=e.data[f];null!==N.setInput?N.setInput(D,o,i,m):D[m]=o}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Bu(e,t,n){let i=n?e.styles:null,o=n?e.classes:null,c=0;if(null!==t)for(let f=0;f<t.length;f++){const m=t[f];"number"==typeof m?c=m:1==c?o=Te(o,m):2==c&&(i=Te(i,m+": "+t[++f]+";"))}n?e.styles=i:e.stylesWithoutHost=i,n?e.classes=o:e.classesWithoutHost=o}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Vu(e,t,n,i,o=!1){for(;null!==n;){const c=t[n.index];if(null!==c&&i.push(wn(c)),On(c))for(let m=10;m<c.length;m++){const D=c[m],N=D[1].firstChild;null!==N&&Vu(D[1],D,N,i)}const f=n.type;if(8&f)Vu(e,t,n.child,i);else if(32&f){const m=Kc(n,t);let D;for(;D=m();)i.push(D)}else if(16&f){const m=Hd(t,n);if(Array.isArray(m))i.push(...m);else{const D=$a(t[16]);Vu(D[1],D,m,i,!0)}}n=o?n.projectionNext:n.next}return i}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class bc{constructor(t,n){this._lView=t,this._cdRefInjectingView=n,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const t=this._lView,n=t[1];return Vu(n,t,n.firstChild,[])}get context(){return this._lView[8]}set context(t){this._lView[8]=t}get destroyed(){return 128==(128&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const t=this._lView[3];if(On(t)){const n=t[8],i=n?n.indexOf(this):-1;i>-1&&(Gl(t,i),Hs(n,i))}this._attachedToViewContainer=!1}Xc(this._lView[1],this._lView)}onDestroy(t){Fp(this._lView[1],this._lView,null,t)}markForCheck(){Nf(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-65}reattach(){this._lView[2]|=64}detectChanges(){Lu(this._lView[1],this._lView,this.context)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new je(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,function la(e,t){Us(e,t,t[11],2,null,null)}(this._lView[1],this._lView)}attachToAppRef(t){if(this._attachedToViewContainer)throw new je(902,!1);this._appRef=t}}class ly extends bc{constructor(t){super(t),this._view=t}detectChanges(){const t=this._view;Lu(t[1],t,t[8],!1)}checkNoChanges(){}get context(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Wp extends re{constructor(t){super(),this.ngModule=t}resolveComponentFactory(t){const n=ft(t);return new Dc(n,this.ngModule)}}function Yp(e){const t=[];for(let n in e)e.hasOwnProperty(n)&&t.push({propName:e[n],templateName:n});return t}class uy{constructor(t,n){this.injector=t,this.parentInjector=n}get(t,n,i){i=pt(i);const o=this.injector.get(t,Dt,i);return o!==Dt||n===Dt?o:this.parentInjector.get(t,n,i)}}class Dc extends w{constructor(t,n){super(),this.componentDef=t,this.ngModule=n,this.componentType=t.type,this.selector=function bs(e){return e.map(df).join(",")}(t.selectors),this.ngContentSelectors=t.ngContentSelectors?t.ngContentSelectors:[],this.isBoundToModule=!!n}get inputs(){return Yp(this.componentDef.inputs)}get outputs(){return Yp(this.componentDef.outputs)}create(t,n,i,o){let c=(o=o||this.ngModule)instanceof Gs?o:o?.injector;c&&null!==this.componentDef.getStandaloneInjector&&(c=this.componentDef.getStandaloneInjector(c)||c);const f=c?new uy(t,c):t,m=f.get(Ke,null);if(null===m)throw new je(407,!1);const D=f.get(bt,null),N=m.createRenderer(null,this.componentDef),I=this.componentDef.selectors[0][0]||"div",P=i?function Hv(e,t,n){return e.selectRootElement(t,n===Re.ShadowDom)}(N,i,this.componentDef.encapsulation):Ul(N,I,function cy(e){const t=e.toLowerCase();return"svg"===t?"svg":"math"===t?"math":null}(I)),W=this.componentDef.onPush?288:272,q=Df(0,null,null,1,0,null,null,null,null,null),ae=Pu(null,q,null,W,null,null,m,N,D,f,null);let Ne,Ie;As(ae);try{const $e=this.componentDef;let tt,Ce=null;$e.findHostDirectiveDefs?(tt=[],Ce=new Map,$e.findHostDirectiveDefs($e,tt,Ce),tt.push($e)):tt=[$e];const st=function fy(e,t){const n=e[1];return e[22]=t,ul(n,22,2,"#host",null)}(ae,P),vn=function hy(e,t,n,i,o,c,f,m){const D=o[1];!function py(e,t,n,i){for(const o of e)t.mergedAttrs=as(t.mergedAttrs,o.hostAttrs);null!==t.mergedAttrs&&(Bu(t,t.mergedAttrs,!0),null!==n&&da(i,n,t))}(i,e,t,f);const N=c.createRenderer(t,n),I=Pu(o,Pp(n),null,n.onPush?32:16,o[e.index],e,c,N,m||null,null,null);return D.firstCreatePass&&wf(D,e,i.length-1),ku(o,I),o[e.index]=I}(st,P,$e,tt,ae,m,N);Ie=ts(q,22),P&&function my(e,t,n,i){if(i)Ea(e,n,["ng-version",Ot.full]);else{const{attrs:o,classes:c}=function sl(e){const t=[],n=[];let i=1,o=2;for(;i<e.length;){let c=e[i];if("string"==typeof c)2===o?""!==c&&t.push(c,e[++i]):8===o&&n.push(c);else{if(!ir(o))break;o=c}i++}return{attrs:t,classes:n}}(t.selectors[0]);o&&Ea(e,n,o),c&&c.length>0&&su(e,n,c.join(" "))}}(N,$e,P,i),void 0!==n&&function _y(e,t,n){const i=e.projection=[];for(let o=0;o<t.length;o++){const c=n[o];i.push(null!=c?Array.from(c):null)}}(Ie,this.ngContentSelectors,n),Ne=function gy(e,t,n,i,o,c){const f=_n(),m=o[1],D=ii(f,o);Vp(m,o,f,n,null,i);for(let I=0;I<n.length;I++)xi(An(o,m,f.directiveStart+I,f),o);Hp(m,o,f),D&&xi(D,o);const N=An(o,m,f.directiveStart+f.componentOffset,f);if(e[8]=o[8]=N,null!==c)for(const I of c)I(N,t);return vf(m,f,e),N}(vn,$e,tt,Ce,ae,[vy]),_f(q,ae,null)}finally{rs()}return new dy(this.componentType,Ne,Se(Ie,ae),ae,Ie)}}class dy extends g{constructor(t,n,i,o,c){super(),this.location=i,this._rootLView=o,this._tNode=c,this.instance=n,this.hostView=this.changeDetectorRef=new ly(o),this.componentType=t}setInput(t,n){const i=this._tNode.inputs;let o;if(null!==i&&(o=i[t])){const c=this._rootLView;Sf(c[1],c,o,t,n),Bp(c,this._tNode.index)}}get injector(){return new Po(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(t){this.hostView.onDestroy(t)}}function vy(){const e=_n();yt(pe()[1],e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Of(e){let t=function Kp(e){return Object.getPrototypeOf(e.prototype).constructor}(e.type),n=!0;const i=[e];for(;t;){let o;if(Wn(e))o=t.\u0275cmp||t.\u0275dir;else{if(t.\u0275cmp)throw new je(903,!1);o=t.\u0275dir}if(o){if(n){i.push(o);const f=e;f.inputs=If(e.inputs),f.declaredInputs=If(e.declaredInputs),f.outputs=If(e.outputs);const m=o.hostBindings;m&&Cy(e,m);const D=o.viewQuery,N=o.contentQueries;if(D&&by(e,D),N&&Dy(e,N),He(e.inputs,o.inputs),He(e.declaredInputs,o.declaredInputs),He(e.outputs,o.outputs),Wn(o)&&o.data.animation){const I=e.data;I.animation=(I.animation||[]).concat(o.data.animation)}}const c=o.features;if(c)for(let f=0;f<c.length;f++){const m=c[f];m&&m.ngInherit&&m(e),m===Of&&(n=!1)}}t=Object.getPrototypeOf(t)}!function yy(e){let t=0,n=null;for(let i=e.length-1;i>=0;i--){const o=e[i];o.hostVars=t+=o.hostVars,o.hostAttrs=as(o.hostAttrs,n=as(n,o.hostAttrs))}}(i)}function If(e){return e===We?{}:e===Ye?[]:e}function by(e,t){const n=e.viewQuery;e.viewQuery=n?(i,o)=>{t(i,o),n(i,o)}:t}function Dy(e,t){const n=e.contentQueries;e.contentQueries=n?(i,o,c)=>{t(i,o,c),n(i,o,c)}:t}function Cy(e,t){const n=e.hostBindings;e.hostBindings=n?(i,o)=>{t(i,o),n(i,o)}:t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Hu=null;function ma(){if(!Hu){const e=jt.Symbol;if(e&&e.iterator)Hu=e.iterator;else{const t=Object.getOwnPropertyNames(Map.prototype);for(let n=0;n<t.length;++n){const i=t[n];"entries"!==i&&"size"!==i&&Map.prototype[i]===Map.prototype.entries&&(Hu=i)}}}return Hu}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Cc(e){return!!Af(e)&&(Array.isArray(e)||!(e instanceof Map)&&ma()in e)}function Af(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Wo(e,t,n){return e[t]=n}function Ui(e,t,n){return!Object.is(e[t],n)&&(e[t]=n,!0)}function _a(e,t,n,i){const o=Ui(e,t,n);return Ui(e,t+1,i)||o}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Rf(e,t,n,i){const o=pe();return Ui(o,lo(),t)&&(ct(),function zo(e,t,n,i,o,c){const f=ii(e,t);Ef(t[11],f,c,e.value,n,i,o)}(b(),o,e,t,n,i)),Rf}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function fl(e,t,n,i){return Ui(e,lo(),n)?t+we(n)+i:rt}function ag(e,t,n,i,o,c,f,m){const D=pe(),N=ct(),I=e+22,P=N.firstCreatePass?
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ry(e,t,n,i,o,c,f,m,D){const N=t.consts,I=ul(t,e,4,f||null,Oi(N,m));Cf(t,n,I,Oi(N,D)),yt(t,I);const P=I.tViews=Df(2,I,i,o,c,t.directiveRegistry,t.pipeRegistry,null,t.schemas,N);return null!==t.queries&&(t.queries.template(t,I),P.queries=t.queries.embeddedTView(I)),I}(I,N,D,t,n,i,o,c,f):N.data[I];Sr(P,!1);const W=D[11].createComment("");Kl(N,D,W,P),xi(W,D),ku(D,D[I]=jp(W,D,W,P)),Fr(P)&&yf(N,D,P),null!=f&&bf(D,P,m)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function lg(e){return function jr(e,t){return e[t]}(function ns(){return y.lFrame.contextLView}(),22+e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function xf(e,t,n){const i=pe();return Ui(i,lo(),t)&&xr(ct(),b(),i,e,t,i[11],n,!1),xf}function Pf(e,t,n,i,o){const f=o?"class":"style";Sf(e,n,t.inputs[f],f,i)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Uu(e,t,n,i){const o=pe(),c=ct(),f=22+e,m=o[11],D=o[f]=Ul(m,t,function Fe(){return y.lFrame.currentNamespace}()),N=c.firstCreatePass?function Py(e,t,n,i,o,c,f){const m=t.consts,N=ul(t,e,2,o,Oi(m,c));return Cf(t,n,N,Oi(m,f)),null!==N.attrs&&Bu(N,N.attrs,!1),null!==N.mergedAttrs&&Bu(N,N.mergedAttrs,!0),null!==t.queries&&t.queries.elementStart(t,N),N}(f,c,o,0,t,n,i):c.data[f];return Sr(N,!0),da(m,D,N),32!=(32&N.flags)&&Kl(c,o,D,N),0===function ze(){return y.lFrame.elementDepthCount}()&&xi(D,o),function Gt(){y.lFrame.elementDepthCount++}(),Fr(N)&&(yf(c,o,N),vf(c,N,o)),null!==i&&bf(o,N),Uu}function $u(){let e=_n();No()?$r():(e=e.parent,Sr(e,!1));const t=e;!function mn(){y.lFrame.elementDepthCount--}();const n=ct();return n.firstCreatePass&&(yt(n,e),Pr(e)&&n.queries.elementEnd(e)),null!=t.classesWithoutHost&&function xs(e){return 0!=(8&e.flags)}(t)&&Pf(n,t,pe(),t.classesWithoutHost,!0),null!=t.stylesWithoutHost&&function Ml(e){return 0!=(16&e.flags)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t)&&Pf(n,t,pe(),t.stylesWithoutHost,!1),$u}function Ff(e,t,n,i){return Uu(e,t,n,i),$u(),Ff
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}function ug(){return pe()}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Bf(e){return!!e&&"function"==typeof e.then}function dg(e){return!!e&&"function"==typeof e.subscribe}const fg=dg;
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Vf(e,t,n,i){const o=pe(),c=ct(),f=_n();return function pg(e,t,n,i,o,c,f){const m=Fr(i),N=e.firstCreatePass&&$p(e),I=t[8],P=Up(t);let W=!0;if(3&i.type||f){const Ne=ii(i,t),Ie=f?f(Ne):Ne,$e=P.length,tt=f?st=>f(wn(st[i.index])):i.index;let Ce=null;if(!f&&m&&(Ce=function ky(e,t,n,i){const o=e.cleanup;if(null!=o)for(let c=0;c<o.length-1;c+=2){const f=o[c];if(f===n&&o[c+1]===i){const m=t[7],D=o[c+2];return m.length>D?m[D]:null}"string"==typeof f&&(c+=2)}return null}(e,t,o,i.index)),null!==Ce)(Ce.__ngLastListenerFn__||Ce).__ngNextListenerFn__=c,Ce.__ngLastListenerFn__=c,W=!1;else{c=mg(i,t,I,c,!1);const st=n.listen(Ie,o,c);P.push(c,st),N&&N.push(o,tt,$e,$e+1)}}else c=mg(i,t,I,c,!1);const q=i.outputs;let ae;if(W&&null!==q&&(ae=q[o])){const Ne=ae.length;if(Ne)for(let Ie=0;Ie<Ne;Ie+=2){const vn=t[ae[Ie]][ae[Ie+1]].subscribe(c),$n=P.length;P.push(c,vn),N&&N.push(o,i.index,$n,-($n+1))}}}(c,o,o[11],f,e,t,i),Vf}function gg(e,t,n,i){try{return!1!==n(i)}catch(o){return zp(e,o),!1}}function mg(e,t,n,i,o){return function c(f){if(f===Function)return i;Nf(e.componentOffset>-1?Yn(e.index,t):t);let D=gg(t,0,i,f),N=c.__ngNextListenerFn__;for(;N;)D=gg(t,0,N,f)&&D,N=N.__ngNextListenerFn__;return o&&!1===D&&(f.preventDefault(),f.returnValue=!1),D}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function _g(e=1){return function os(e){return(y.lFrame.contextLView=function ss(e,t){for(;e>0;)t=t[15],e--;return t}(e,y.lFrame.contextLView))[8]}(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ly(e,t){let n=null;const i=function cf(e){const t=e.attrs;if(null!=t){const n=t.indexOf(5);if(0==(1&n))return t[n+1]}return null}(e);for(let o=0;o<t.length;o++){const c=t[o];if("*"!==c){if(null===i?gc(e,c,!0):Ou(i,c))return o}else n=o}return n}function vg(e){const t=pe()[16][6];if(!t.projection){const i=t.projection=ps(e?e.length:1,null),o=i.slice();let c=t.child;for(;null!==c;){const f=e?Ly(c,e):0;null!==f&&(o[f]?o[f].projectionNext=c:i[f]=c,o[f]=c),c=c.next}}}function yg(e,t=0,n){const i=pe(),o=ct(),c=ul(o,22+e,16,null,n||null);null===c.projection&&(c.projection=t),$r(),32!=(32&c.flags)&&function jd(e,t,n){Ya(t[11],0,t,n,ua(e,n,t),kd(n.parent||t[6],n,t))}(o,i,c)}function Hf(e,t,n){return Gu(e,"",t,"",n),Hf}function Gu(e,t,n,i,o){const c=pe(),f=fl(c,t,n,i);return f!==rt&&xr(ct(),b(),c,e,f,c[11],o,!1),Gu}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function zu(e,t){return e<<17|t<<2}function Ys(e){return e>>17&32767}function jf(e){return 2|e}function va(e){return(131068&e)>>2}function Uf(e,t){return-131069&e|t<<2}function $f(e){return 1|e}function Sg(e,t,n,i,o){const c=e[n+1],f=null===t;let m=i?Ys(c):va(c),D=!1;for(;0!==m&&(!1===D||f);){const I=e[m+1];$y(e[m],t)&&(D=!0,e[m+1]=i?$f(I):jf(I)),m=i?Ys(I):va(I)}D&&(e[n+1]=i?jf(c):$f(c))}function $y(e,t){return null===e||null==t||(Array.isArray(e)?e[1]:e)===t||!(!Array.isArray(e)||"string"!=typeof t)&&v(e,t)>=0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const oi={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function Og(e){return e.substring(oi.key,oi.keyEnd)}function Ig(e,t){const n=oi.textEnd;return n===t?-1:(t=oi.keyEnd=function Yy(e,t,n){for(;t<n&&e.charCodeAt(t)>32;)t++;return t}(e,oi.key=t,n),bl(e,t,n))}function bl(e,t,n){for(;t<n&&e.charCodeAt(t)<=32;)t++;return t}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Gf(e,t,n){return fo(e,t,n,!1),Gf}function zf(e,t){return fo(e,t,null,!0),zf}function Fg(e){!function ho(e,t,n,i){const o=ct(),c=_r(2);o.firstUpdatePass&&Lg(o,null,c,i);const f=pe();if(n!==rt&&Ui(f,c,n)){const m=o.data[_()];if(jg(m,i)&&!kg(o,c)){let D=i?m.classesWithoutHost:m.stylesWithoutHost;null!==D&&(n=Te(D,n||"")),Pf(o,m,f,n,i)}else!function n0(e,t,n,i,o,c,f,m){o===rt&&(o=Ye);let D=0,N=0,I=0<o.length?o[0]:null,P=0<c.length?c[0]:null;for(;null!==I||null!==P;){const W=D<o.length?o[D+1]:void 0,q=N<c.length?c[N+1]:void 0;let Ne,ae=null;I===P?(D+=2,N+=2,W!==q&&(ae=P,Ne=q)):null===P||null!==I&&I<P?(D+=2,ae=I):(N+=2,ae=P,Ne=q),null!==ae&&Vg(e,t,n,i,ae,Ne,f,m),I=D<o.length?o[D]:null,P=N<c.length?c[N]:null}}(o,m,f,f[11],f[c+1],f[c+1]=function t0(e,t,n){if(null==n||""===n)return Ye;const i=[],o=Uo(n);if(Array.isArray(o))for(let c=0;c<o.length;c++)e(i,o[c],!0);else if("object"==typeof o)for(const c in o)o.hasOwnProperty(c)&&e(i,c,o[c]);else"string"==typeof o&&t(i,o);return i}(e,t,n),i,c)}}(h,Ko,e,!0)}function Ko(e,t){for(let n=function zy(e){return function Rg(e){oi.key=0,oi.keyEnd=0,oi.value=0,oi.valueEnd=0,oi.textEnd=e.length}(e),Ig(e,bl(e,0,oi.textEnd))}(t);n>=0;n=Ig(t,n))h(e,Og(t),!0)}function fo(e,t,n,i){const o=pe(),c=ct(),f=_r(2);c.firstUpdatePass&&Lg(c,e,f,i),t!==rt&&Ui(o,f,t)&&Vg(c,c.data[_()],o,o[11],e,o[f+1]=function r0(e,t){return null==e||("string"==typeof t?e+=t:"object"==typeof e&&(e=be(Uo(e)))),e}(t,n),i,f)}function kg(e,t){return t>=e.expandoStartIndex}function Lg(e,t,n,i){const o=e.data;if(null===o[n+1]){const c=o[_()],f=kg(e,n);jg(c,i)&&null===t&&!f&&(t=!1),t=function Zy(e,t,n,i){const o=function So(e){const t=y.lFrame.currentDirectiveIndex;return-1===t?null:e[t]}(e);let c=i?t.residualClasses:t.residualStyles;if(null===o)0===(i?t.classBindings:t.styleBindings)&&(n=Ec(n=Wf(null,e,t,n,i),t.attrs,i),c=null);else{const f=t.directiveStylingLast;if(-1===f||e[f]!==o)if(n=Wf(o,e,t,n,i),null===c){let D=function Qy(e,t,n){const i=n?t.classBindings:t.styleBindings;if(0!==va(i))return e[Ys(i)]}(e,t,i);void 0!==D&&Array.isArray(D)&&(D=Wf(null,e,t,D[1],i),D=Ec(D,t.attrs,i),function Xy(e,t,n,i){e[Ys(n?t.classBindings:t.styleBindings)]=i}(e,t,i,D))}else c=function e0(e,t,n){let i;const o=t.directiveEnd;for(let c=1+t.directiveStylingLast;c<o;c++)i=Ec(i,e[c].hostAttrs,n);return Ec(i,t.attrs,n)}(e,t,i)}return void 0!==c&&(i?t.residualClasses=c:t.residualStyles=c),n}(o,c,t,i),function jy(e,t,n,i,o,c){let f=c?t.classBindings:t.styleBindings,m=Ys(f),D=va(f);e[i]=n;let I,N=!1;if(Array.isArray(n)){const P=n;I=P[1],(null===I||v(P,I)>0)&&(N=!0)}else I=n;if(o)if(0!==D){const W=Ys(e[m+1]);e[i+1]=zu(W,m),0!==W&&(e[W+1]=Uf(e[W+1],i)),e[m+1]=function Vy(e,t){return 131071&e|t<<17}(e[m+1],i)}else e[i+1]=zu(m,0),0!==m&&(e[m+1]=Uf(e[m+1],i)),m=i;else e[i+1]=zu(D,0),0===m?m=i:e[D+1]=Uf(e[D+1],i),D=i;N&&(e[i+1]=jf(e[i+1])),Sg(e,I,i,!0),Sg(e,I,i,!1),function Uy(e,t,n,i,o){const c=o?e.residualClasses:e.residualStyles;null!=c&&"string"==typeof t&&v(c,t)>=0&&(n[i+1]=$f(n[i+1]))}(t,I,e,i,c),f=zu(m,D),c?t.classBindings=f:t.styleBindings=f}(o,c,t,n,f,i)}}function Wf(e,t,n,i,o){let c=null;const f=n.directiveEnd;let m=n.directiveStylingLast;for(-1===m?m=n.directiveStart:m++;m<f&&(c=t[m],i=Ec(i,c.hostAttrs,o),c!==e);)m++;return null!==e&&(n.directiveStylingLast=m),i}function Ec(e,t,n){const i=n?1:2;let o=-1;if(null!==t)for(let c=0;c<t.length;c++){const f=t[c];"number"==typeof f?o=f:o===i&&(Array.isArray(e)||(e=void 0===e?[]:["",e]),h(e,f,!!n||t[++c]))}return void 0===e?null:e}function Vg(e,t,n,i,o,c,f,m){if(!(3&t.type))return;const D=e.data,N=D[m+1],I=function Hy(e){return 1==(1&e)}(N)?Hg(D,t,n,o,va(N),f):void 0;Wu(I)||(Wu(c)||function By(e){return 2==(2&e)}(N)&&(c=Hg(D,null,n,o,m,f)),function ou(e,t,n,i,o){if(t)o?e.addClass(n,i):e.removeClass(n,i);else{let c=-1===i.indexOf("-")?void 0:Jr.DashCase;null==o?e.removeStyle(n,i,c):("string"==typeof o&&o.endsWith("!important")&&(o=o.slice(0,-10),c|=Jr.Important),e.setStyle(n,i,o,c))}}(i,f,wo(_(),n),o,c))}function Hg(e,t,n,i,o,c){const f=null===t;let m;for(;o>0;){const D=e[o],N=Array.isArray(D),I=N?D[1]:D,P=null===I;let W=n[o+1];W===rt&&(W=P?Ye:void 0);let q=P?d(W,i):I===i?W:void 0;if(N&&!Wu(q)&&(q=d(D,i)),Wu(q)&&(m=q,f))return m;const ae=e[o+1];o=f?Ys(ae):va(ae)}if(null!==t){let D=c?t.residualClasses:t.residualStyles;null!=D&&(m=d(D,i))}return m}function Wu(e){return void 0!==e}function jg(e,t){return 0!=(e.flags&(t?8:16))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ug(e,t=""){const n=pe(),i=ct(),o=e+22,c=i.firstCreatePass?ul(i,o,1,t,null):i.data[o],f=n[o]=Ga(n[11],t);Kl(i,n,f,c),Sr(c,!1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Yf(e){return Yu("",e,""),Yf}function Yu(e,t,n){const i=pe(),o=fl(i,e,t,n);return o!==rt&&function Ds(e,t,n){const i=wo(t,e);za(e[11],i,n)}(i,_(),o),Yu}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Kf(e,t,n){const i=pe();return Ui(i,lo(),t)&&xr(ct(),b(),i,e,t,i[11],n,!0),Kf}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const ya=void 0;var E0=["en",[["a","p"],["AM","PM"],ya],[["AM","PM"],ya,ya],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],ya,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],ya,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",ya,"{1} 'at' {0}",ya],[".",",",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0%","\xa4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",function w0(e){const n=Math.floor(Math.abs(e)),i=e.toString().replace(/^[^.]*\.?/,"").length;return 1===n&&0===i?1:5}];
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Dl={};function Jf(e){const t=function T0(e){return e.toLowerCase().replace(/_/g,"-")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(e);let n=lm(t);if(n)return n;const i=t.split("-")[0];if(n=lm(i),n)return n;if("en"===i)return E0;throw new je(701,!1)}function am(e){return Jf(e)[et.PluralCase]}function lm(e){return e in Dl||(Dl[e]=jt.ng&&jt.ng.common&&jt.ng.common.locales&&jt.ng.common.locales[e]),Dl[e]}var et=(()=>((et=et||{})[et.LocaleId=0]="LocaleId",et[et.DayPeriodsFormat=1]="DayPeriodsFormat",et[et.DayPeriodsStandalone=2]="DayPeriodsStandalone",et[et.DaysFormat=3]="DaysFormat",et[et.DaysStandalone=4]="DaysStandalone",et[et.MonthsFormat=5]="MonthsFormat",et[et.MonthsStandalone=6]="MonthsStandalone",et[et.Eras=7]="Eras",et[et.FirstDayOfWeek=8]="FirstDayOfWeek",et[et.WeekendRange=9]="WeekendRange",et[et.DateFormat=10]="DateFormat",et[et.TimeFormat=11]="TimeFormat",et[et.DateTimeFormat=12]="DateTimeFormat",et[et.NumberSymbols=13]="NumberSymbols",et[et.NumberFormats=14]="NumberFormats",et[et.CurrencyCode=15]="CurrencyCode",et[et.CurrencySymbol=16]="CurrencySymbol",et[et.CurrencyName=17]="CurrencyName",et[et.Currencies=18]="Currencies",et[et.Directionality=19]="Directionality",et[et.PluralCase=20]="PluralCase",et[et.ExtraData=21]="ExtraData",et))();const N0=["zero","one","two","few","many"],Cl="en-US",Ku={marker:"element"},Ju={marker:"ICU"};var xn=(()=>((xn=xn||{})[xn.SHIFT=2]="SHIFT",xn[xn.APPEND_EAGERLY=1]="APPEND_EAGERLY",xn[xn.COMMENT=2]="COMMENT",xn))();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let cm=Cl;function um(e){(function un(e,t){null==e&&dt(t,e,null,"!=")})(e,"Expected localeId to be defined"),"string"==typeof e&&(cm=e.toLowerCase().replace(/_/g,"-"))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function dm(e,t,n){const i=t.insertBeforeIndex,o=Array.isArray(i)?i[0]:i;return null===o?Ld(e,0,n):wn(n[o])}function fm(e,t,n,i,o){const c=t.insertBeforeIndex;if(Array.isArray(c)){let f=i,m=null;if(3&t.type||(m=f,f=o),null!==f&&-1===t.componentOffset)for(let D=1;D<c.length;D++)qr(e,f,n[c[D]],m,!1)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function hm(e,t){if(e.push(t),e.length>1)for(let n=e.length-2;n>=0;n--){const i=e[n];pm(i)||I0(i,t)&&null===A0(i)&&R0(i,t.index)}}function pm(e){return!(64&e.type)}function I0(e,t){return pm(t)||e.index>t.index}function A0(e){const t=e.insertBeforeIndex;return Array.isArray(t)?t[0]:t}function R0(e,t){const n=e.insertBeforeIndex;Array.isArray(n)?n[0]=t:(Vd(dm,fm),e.insertBeforeIndex=t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Tc(e,t){const n=e.data[t];return null===n||"string"==typeof n?null:n.hasOwnProperty("currentCaseLViewIndex")?n:n.value}function F0(e,t,n){const i=mf(e,n,64,null,null);return hm(t,i),i}function qu(e,t){const n=t[e.currentCaseLViewIndex];return null===n?n:n<0?~n:n}function gm(e){return e>>>17}function mm(e){return(131070&e)>>>1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let Nc=0,Mc=0;function vm(e,t,n,i){const o=n[11];let f,c=null;for(let m=0;m<t.length;m++){const D=t[m];if("string"==typeof D){const N=t[++m];null===n[N]&&(n[N]=Ga(o,D))}else if("number"==typeof D)switch(1&D){case 0:const N=gm(D);let I,P;if(null===c&&(c=N,f=Yl(o,i)),N===c?(I=i,P=f):(I=null,P=wn(n[N])),null!==P){const Ne=mm(D);qr(o,P,n[Ne],I,!1);const $e=Tc(e,Ne);if(null!==$e&&"object"==typeof $e){const tt=qu($e,n);null!==tt&&vm(e,$e.create[tt],n,n[$e.anchorIdx])}}break;case 1:const q=t[++m],ae=t[++m];Ef(o,wo(D>>>1,n),null,null,q,ae,null)}else switch(D){case Ju:const N=t[++m],I=t[++m];null===n[I]&&xi(n[I]=Pd(o,N),n);break;case Ku:const P=t[++m],W=t[++m];null===n[W]&&xi(n[W]=Ul(o,P,null),n)}}}function ym(e,t,n,i,o){for(let c=0;c<n.length;c++){const f=n[c],m=n[++c];if(f&o){let D="";for(let N=c+1;N<=c+m;N++){const I=n[N];if("string"==typeof I)D+=I;else if("number"==typeof I)if(I<0)D+=we(t[i-I]);else{const P=I>>>2;switch(3&I){case 1:const W=n[++N],q=n[++N],ae=e.data[P];"string"==typeof ae?Ef(t[11],t[P],null,ae,W,D,q):xr(e,ae,t,W,D,t[11],q,!1);break;case 0:const Ne=t[P];null!==Ne&&za(t[11],Ne,D);break;case 2:H0(e,Tc(e,P),t,D);break;case 3:bm(e,Tc(e,P),i,t)}}}}else{const D=n[c+1];if(D>0&&3==(3&D)){const I=Tc(e,D>>>2);t[I.currentCaseLViewIndex]<0&&bm(e,I,i,t)}}c+=m}}function bm(e,t,n,i){let o=i[t.currentCaseLViewIndex];if(null!==o){let c=Nc;o<0&&(o=i[t.currentCaseLViewIndex]=~o,c=-1),ym(e,i,t.update[o],n,c)}}function H0(e,t,n,i){const o=function j0(e,t){let n=e.cases.indexOf(t);if(-1===n)switch(e.type){case 1:{const i=function M0(e,t){const n=am(t)(parseInt(e,10)),i=N0[n];return void 0!==i?i:"other"}(t,function O0(){return cm}());n=e.cases.indexOf(i),-1===n&&"other"!==i&&(n=e.cases.indexOf("other"));break}case 0:n=e.cases.indexOf("other")}return-1===n?null:n}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(t,i);if(qu(t,n)!==o&&(Dm(e,t,n),n[t.currentCaseLViewIndex]=null===o?null:~o,null!==o)){const f=n[t.anchorIdx];f&&vm(e,t.create[o],n,f)}}function Dm(e,t,n){let i=qu(t,n);if(null!==i){const o=t.remove[i];for(let c=0;c<o.length;c++){const f=o[c];if(f>0){const m=wo(f,n);null!==m&&nu(n[11],m)}else Dm(e,Tc(e,~f),n)}}}function U0(){const e=[];let n,i,t=-1;function c(m,D){t=0;const N=qu(m,D);i=null!==N?m.remove[N]:Ye}function f(){if(t<i.length){const m=i[t++];return m>0?n[m]:(e.push(t,i),c(n[1].data[~m],n),f())}return 0===e.length?null:(i=e.pop(),t=e.pop(),f())}return function o(m,D){for(n=D;e.length;)e.pop();return c(m.value,D),f}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Zu=/\ufffd(\d+):?\d*\ufffd/gi,G0=/\ufffd(\d+)\ufffd/,wm=/^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/,z0=/\ufffd\/?\*(\d+:\d+)\ufffd/gi,W0=/\ufffd(\/?[#*]\d+):?\d*\ufffd/gi,Y0=/\uE500/g;function Em(e,t,n,i,o,c,f){const m=yc(e,i,1,null);let D=m<<xn.SHIFT,N=To();t===N&&(N=null),null===N&&(D|=xn.APPEND_EAGERLY),f&&(D|=xn.COMMENT,function Zh(e){void 0===Yc&&(Yc=e())}(U0)),o.push(D,null===c?"":c);const I=mf(e,m,f?32:1,null===c?"":c,null);hm(n,I);const P=I.index;return Sr(I,!1),null!==N&&t!==N&&function P0(e,t){let n=e.insertBeforeIndex;null===n?(Vd(dm,fm),n=e.insertBeforeIndex=[null,t]):(function zn(e,t,n){e!=t&&dt(n,e,t,"==")}(Array.isArray(n),!0,"Expecting array here"),n.push(t))}(N,P),I}function q0(e,t,n,i,o,c,f){const m=f.match(Zu),D=Em(e,t,n,c,i,m?null:f,!1);m&&Oc(o,f,D.index,null,0,null)}function Oc(e,t,n,i,o,c){const f=e.length,m=f+1;e.push(null,null);const D=f+2,N=t.split(Zu);let I=0;for(let P=0;P<N.length;P++){const W=N[P];if(1&P){const q=o+parseInt(W,10);e.push(-1-q),I|=Tm(q)}else""!==W&&e.push(W)}return e.push(n<<2|(i?1:0)),i&&e.push(i,c),e[f]=I,e[m]=e.length-D,I}function Tm(e){return 1<<Math.min(e,31)}function Nm(e){let t,c,n="",i=0,o=!1;for(;null!==(t=z0.exec(e));)o?t[0]===`\ufffd/*${c}\ufffd`&&(i=t.index,o=!1):(n+=e.substring(i,t.index+t[0].length),c=t[1],o=!0);return n+=e.slice(i),n}function Mm(e,t,n,i,o,c){let f=0;const m={type:o.type,currentCaseLViewIndex:yc(e,t,1,null),anchorIdx:c,cases:[],create:[],remove:[],update:[]};(function rb(e,t,n){e.push(Tm(t.mainBinding),2,-1-t.mainBinding,n<<2|2)})(n,o,c),function x0(e,t,n){const i=e.data[t];null===i?e.data[t]=n:i.value=n}(e,c,m);const D=o.values;for(let N=0;N<D.length;N++){const I=D[N],P=[];for(let W=0;W<I.length;W++){const q=I[W];if("string"!=typeof q){const ae=P.push(q)-1;I[W]=`\x3c!--\ufffd${ae}\ufffd--\x3e`}}f=nb(e,m,t,n,i,o.cases[N],I.join(""),P)|f}f&&function ob(e,t,n){e.push(t,1,n<<2|3)}(n,f,c)}function tb(e){const t=[],n=[];let i=1,o=0;const c=qf(e=e.replace(wm,function(f,m,D){return i="select"===D?0:1,o=parseInt(m.slice(1),10),""}));for(let f=0;f<c.length;){let m=c[f++].trim();1===i&&(m=m.replace(/\s*(?:=)?(\w+)\s*/,"$1")),m.length&&t.push(m);const D=qf(c[f++]);t.length>n.length&&n.push(D)}return{type:i,mainBinding:o,cases:t,values:n}}function qf(e){if(!e)return[];let t=0;const n=[],i=[],o=/[{}]/g;let c;for(o.lastIndex=0;c=o.exec(e);){const m=c.index;if("}"==c[0]){if(n.pop(),0==n.length){const D=e.substring(t,m);wm.test(D)?i.push(tb(D)):i.push(D),t=m+1}}else{if(0==n.length){const D=e.substring(t,m);i.push(D),t=m+1}n.push("{")}}const f=e.substring(t);return i.push(f),i}function nb(e,t,n,i,o,c,f,m){const D=[],N=[],I=[];t.cases.push(c),t.create.push(D),t.remove.push(N),t.update.push(I);const W=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function ic(e){const t=new fu(e);return function hu(){try{return!!(new window.DOMParser).parseFromString(tr(""),"text/html")}catch{return!1}}()?new du(t):t}(function au(){return void 0!==jo?jo:typeof document<"u"?document:void 0}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */()).getInertBodyElement(f),q=function el(e){return"content"in e&&function up(e){return e.nodeType===Node.ELEMENT_NODE&&"TEMPLATE"===e.nodeName}(e)?e.content:null}(W)||W;return q?Sm(e,t,n,i,D,N,I,q,o,m,0):0}function Sm(e,t,n,i,o,c,f,m,D,N,I){let P=0,W=m.firstChild;for(;W;){const q=yc(e,n,1,null);switch(W.nodeType){case Node.ELEMENT_NODE:const ae=W,Ne=ae.tagName.toLowerCase();if(oc.hasOwnProperty(Ne)){Zf(o,Ku,Ne,D,q),e.data[q]=Ne;const Ce=ae.attributes;for(let st=0;st<Ce.length;st++){const vn=Ce.item(st),$n=vn.name.toLowerCase();vn.value.match(Zu)?qd.hasOwnProperty($n)&&Oc(f,vn.value,q,vn.name,0,_u[$n]?Qa:null):sb(o,q,vn)}P=Sm(e,t,n,i,o,c,f,W,q,N,I+1)|P,Om(c,q,I)}break;case Node.TEXT_NODE:const Ie=W.textContent||"",$e=Ie.match(Zu);Zf(o,null,$e?"":Ie,D,q),Om(c,q,I),$e&&(P=Oc(f,Ie,q,null,0,null)|P);break;case Node.COMMENT_NODE:const tt=G0.exec(W.textContent||"");if(tt){const st=N[parseInt(tt[1],10)];Zf(o,Ju,"",D,q),Mm(e,n,i,D,st,q),ib(c,q,I)}}W=W.nextSibling}return P}function Om(e,t,n){0===n&&e.push(t)}function ib(e,t,n){0===n&&(e.push(~t),e.push(t))}function Zf(e,t,n,i,o){null!==t&&e.push(t),e.push(n,o,function k0(e,t,n){return e|t<<17|n<<1}(0,i,o))}function sb(e,t,n){e.push(t<<1|1,n.name,n.value)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Am(e,t,n=-1){const i=ct(),o=pe(),c=22+e,f=Oi(i.consts,t),m=To();i.firstCreatePass&&function J0(e,t,n,i,o,c){const f=To(),m=[],D=[],N=[[]];o=function eb(e,t){if(function X0(e){return-1===e}(t))return Nm(e);{const n=e.indexOf(`:${t}\ufffd`)+2+t.toString().length,i=e.search(new RegExp(`\ufffd\\/\\*\\d+:${t}\ufffd`));return Nm(e.substring(n,i))}}(o,c);const I=function K0(e){return e.replace(Y0," ")}(o).split(W0);for(let P=0;P<I.length;P++){let W=I[P];if(0==(1&P)){const q=qf(W);for(let ae=0;ae<q.length;ae++){let Ne=q[ae];if(0==(1&ae)){const Ie=Ne;""!==Ie&&q0(e,f,N[0],m,D,n,Ie)}else{const Ie=Ne;if("object"!=typeof Ie)throw new Error(`Unable to parse ICU expression in "${o}" message.`);Mm(e,n,D,t,Ie,Em(e,f,N[0],n,m,"",!0).index)}}}else{const q=47===W.charCodeAt(0),Ne=(W.charCodeAt(q?1:0),22+Number.parseInt(W.substring(q?2:1)));if(q)N.shift(),Sr(To(),!1);else{const Ie=F0(e,N[0],Ne);N.unshift([]),Sr(Ie,!0)}}}e.data[i]={create:m,update:D}}(i,null===m?0:m.index,o,c,f,n);const D=i.data[c],I=zl(i,m===o[6]?null:m,o);(function V0(e,t,n,i){const o=e[11];for(let c=0;c<t.length;c++){const f=t[c++],m=t[c],D=(f&xn.COMMENT)===xn.COMMENT,N=(f&xn.APPEND_EAGERLY)===xn.APPEND_EAGERLY,I=f>>>xn.SHIFT;let P=e[I];null===P&&(P=e[I]=D?o.createComment(m):Ga(o,m)),N&&null!==n&&qr(o,n,P,i,!1)}})(o,D.create,I,m&&8&m.type?o[m.index]:null),Xs(!0)}function xm(e,t,n){Am(e,t,n),function Rm(){Xs(!1)}()}function Qf(e){return function L0(e){e&&(Nc|=1<<Math.min(Mc,31)),Mc++}(Ui(pe(),lo(),e)),Qf}function Pm(e){!function B0(e,t,n){if(Mc>0){const i=e.data[n];ym(e,t,Array.isArray(i)?i:i.update,function mr(){return y.lFrame.bindingIndex}()-Mc-1,Nc)}Nc=0,Mc=0}(ct(),pe(),e+22)}function Xf(e,t,n,i,o){if(e=Me(e),Array.isArray(e))for(let c=0;c<e.length;c++)Xf(e[c],t,n,i,o);else{const c=ct(),f=pe();let m=$s(e)?e:Me(e.provide),D=Nu(e);const N=_n(),I=1048575&N.providerIndexes,P=N.directiveStart,W=N.providerIndexes>>20;if($s(e)||!e.multi){const q=new Hn(D,o,cl),ae=th(m,t,o?I:I+W,P);-1===ae?(ji(ks(N,f),c,m),eh(c,e,t.length),t.push(m),N.directiveStart++,N.directiveEnd++,o&&(N.providerIndexes+=1048576),n.push(q),f.push(q)):(n[ae]=q,f[ae]=q)}else{const q=th(m,t,I+W,P),ae=th(m,t,I,I+W),Ne=q>=0&&n[q],Ie=ae>=0&&n[ae];if(o&&!Ie||!o&&!Ne){ji(ks(N,f),c,m);const $e=function bb(e,t,n,i,o){const c=new Hn(e,n,cl);return c.multi=[],c.index=t,c.componentProviders=0,Fm(c,o,i&&!n),c}(o?yb:vb,n.length,o,i,D);!o&&Ie&&(n[ae].providerFactory=$e),eh(c,e,t.length,0),t.push(m),N.directiveStart++,N.directiveEnd++,o&&(N.providerIndexes+=1048576),n.push($e),f.push($e)}else eh(c,e,q>-1?q:ae,Fm(n[o?ae:q],D,!o&&i));!o&&i&&Ie&&n[ae].componentProviders++}}}function eh(e,t,n,i){const o=$s(t),c=function yp(e){return!!e.useClass}(t);if(o||c){const D=(c?Me(t.useClass):t).prototype.ngOnDestroy;if(D){const N=e.destroyHooks||(e.destroyHooks=[]);if(!o&&t.multi){const I=N.indexOf(n);-1===I?N.push(n,[i,D]):N[I+1].push(i,D)}else N.push(n,D)}}}function Fm(e,t,n){return n&&e.componentProviders++,e.multi.push(t)-1}function th(e,t,n,i){for(let o=n;o<i;o++)if(t[o]===e)return o;return-1}function vb(e,t,n,i){return nh(this.multi,[])}function yb(e,t,n,i){const o=this.multi;let c;if(this.providerFactory){const f=this.providerFactory.componentProviders,m=An(n,n[1],this.providerFactory.index,i);c=m.slice(0,f),nh(o,c);for(let D=f;D<m.length;D++)c.push(m[D])}else c=[],nh(o,c);return c}function nh(e,t){for(let n=0;n<e.length;n++)t.push((0,e[n])());return t}function km(e,t=[]){return n=>{n.providersResolver=(i,o)=>
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function _b(e,t,n){const i=ct();if(i.firstCreatePass){const o=Wn(e);Xf(n,i.data,i.blueprint,o,!0),Xf(t,i.data,i.blueprint,o,!1)}}(i,o?o(e):e,t)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class wl{}class Lm{}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Db(e,t){return new Bm(e,t??null)}class Bm extends wl{constructor(t,n){super(),this._parent=n,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Wp(this);const i=Vt(t);this._bootstrapComponents=Cr(i.bootstrap),this._r3Injector=Ep(t,n,[{provide:wl,useValue:this},{provide:re,useValue:this.componentFactoryResolver}],be(t),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(t)}get injector(){return this._r3Injector}destroy(){const t=this._r3Injector;!t.destroyed&&t.destroy(),this.destroyCbs.forEach(n=>n()),this.destroyCbs=null}onDestroy(t){this.destroyCbs.push(t)}}class ih extends Lm{constructor(t){super(),this.moduleType=t}create(t){return new Bm(this.moduleType,t)}}class Cb extends wl{constructor(t,n,i){super(),this.componentFactoryResolver=new Wp(this),this.instance=null;const o=new sf([...t,{provide:wl,useValue:this},{provide:re,useValue:this.componentFactoryResolver}],n||hc(),i,new Set(["environment"]));this.injector=o,o.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(t){this.injector.onDestroy(t)}}function rh(e,t,n=null){return new Cb(e,t,n).injector}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let wb=(()=>{class e{constructor(n){this._injector=n,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(n){if(!n.standalone)return null;if(!this.cachedInjectors.has(n.id)){const i=tf(0,n.type),o=i.length>0?rh([i],this._injector,`Standalone[${n.type.name}]`):null;this.cachedInjectors.set(n.id,o)}return this.cachedInjectors.get(n.id)}ngOnDestroy(){try{for(const n of this.cachedInjectors.values())null!==n&&n.destroy()}finally{this.cachedInjectors.clear()}}}return e.\u0275prov=Qt({token:e,providedIn:"environment",factory:()=>new e(Ee(Gs))}),e})();function Vm(e){e.getStandaloneInjector=t=>t.get(wb).getOrCreateStandaloneInjector(e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Wm(e,t,n){const i=Vn()+e,o=pe();return o[i]===rt?Wo(o,i,n?t.call(n):t()):function wc(e,t){return e[t]}(o,i)}function Ym(e,t,n,i){return function qm(e,t,n,i,o,c){const f=t+n;return Ui(e,f,o)?Wo(e,f+1,c?i.call(c,o):i(o)):Ic(e,f+1)}(pe(),Vn(),e,t,n,i)}function Km(e,t,n,i,o){return function Zm(e,t,n,i,o,c,f){const m=t+n;return _a(e,m,o,c)?Wo(e,m+2,f?i.call(f,o,c):i(o,c)):Ic(e,m+2)}(pe(),Vn(),e,t,n,i,o)}function Jm(e,t,n,i,o,c){return function Qm(e,t,n,i,o,c,f,m){const D=t+n;return function ju(e,t,n,i,o){const c=_a(e,t,n,i);return Ui(e,t+2,o)||c}(e,D,o,c,f)?Wo(e,D+3,m?i.call(m,o,c,f):i(o,c,f)):Ic(e,D+3)}(pe(),Vn(),e,t,n,i,o,c)}function Ic(e,t){const n=e[t];return n===rt?void 0:n}function sh(e){return t=>{setTimeout(e,void 0,t)}}const Jo=
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class zb extends a.xQ{constructor(t=!1){super(),this.__isAsync=t}emit(t){super.next(t)}subscribe(t,n,i){let o=t,c=n||(()=>null),f=i;if(t&&"object"==typeof t){const D=t;o=D.next?.bind(D),c=D.error?.bind(D),f=D.complete?.bind(D)}this.__isAsync&&(c=sh(c),o&&(o=sh(o)),f&&(f=sh(f)));const m=super.subscribe({next:o,error:c,complete:f});return t instanceof L.w&&t.add(m),m}};
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Wb(){return this._results[ma()]()}class ah{constructor(t=!1){this._emitDistinctChangesOnly=t,this.dirty=!0,this._results=[],this._changesDetected=!1,this._changes=null,this.length=0,this.first=void 0,this.last=void 0;const n=ma(),i=ah.prototype;i[n]||(i[n]=Wb)}get changes(){return this._changes||(this._changes=new Jo)}get(t){return this._results[t]}map(t){return this._results.map(t)}filter(t){return this._results.filter(t)}find(t){return this._results.find(t)}reduce(t,n){return this._results.reduce(t,n)}forEach(t){this._results.forEach(t)}some(t){return this._results.some(t)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(t,n){const i=this;i.dirty=!1;const o=function Ri(e){return e.flat(Number.POSITIVE_INFINITY)}(t);(this._changesDetected=!
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Kr(e,t,n){if(e.length!==t.length)return!1;for(let i=0;i<e.length;i++){let o=e[i],c=t[i];if(n&&(o=n(o),c=n(c)),c!==o)return!1}return!0}(i._results,o,n))&&(i._results=o,i.length=o.length,i.last=o[this.length-1],i.first=o[0])}notifyOnChanges(){this._changes&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.emit(this)}setDirty(){this.dirty=!0}destroy(){this.changes.complete(),this.changes.unsubscribe()}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Rc=(()=>{class e{}return e.__NG_ELEMENT_ID__=Jb,e})();const Yb=Rc,Kb=class extends Yb{constructor(t,n,i){super(),this._declarationLView=t,this._declarationTContainer=n,this.elementRef=i}createEmbeddedView(t,n){const i=this._declarationTContainer.tViews,o=Pu(this._declarationLView,i,t,16,null,i.declTNode,null,null,null,null,n||null);o[17]=this._declarationLView[this._declarationTContainer.index];const f=this._declarationLView[19];return null!==f&&(o[19]=f.createEmbeddedView(i)),_f(i,o,t),new bc(o)}};function Jb(){return Qu(_n(),pe())}function Qu(e,t){return 4&e.type?new Kb(t,e,Se(e,t)):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Xu=(()=>{class e{}return e.__NG_ELEMENT_ID__=qb,e})();function qb(){return i_(_n(),pe())}const Zb=Xu,t_=class extends Zb{constructor(t,n,i){super(),this._lContainer=t,this._hostTNode=n,this._hostLView=i}get element(){return Se(this._hostTNode,this._hostLView)}get injector(){return new Po(this._hostTNode,this._hostLView)}get parentInjector(){const t=us(this._hostTNode,this._hostLView);if(ia(t)){const n=Ir(t,this._hostLView),i=Ps(t);return new Po(n[1].data[i+8],n)}return new Po(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(t){const n=n_(this._lContainer);return null!==n&&n[t]||null}get length(){return this._lContainer.length-10}createEmbeddedView(t,n,i){let o,c;"number"==typeof i?o=i:null!=i&&(o=i.index,c=i.injector);const f=t.createEmbeddedView(n||{},c);return this.insert(f,o),f}createComponent(t,n,i,o,c){const f=t&&!function Lo(e){return"function"==typeof e}(t);let m;if(f)m=n;else{const P=n||{};m=P.index,i=P.injector,o=P.projectableNodes,c=P.environmentInjector||P.ngModuleRef}const D=f?t:new Dc(ft(t)),N=i||this.parentInjector;if(!c&&null==D.ngModule){const W=(f?N:this.parentInjector).get(Gs,null);W&&(c=W)}const I=D.create(N,o,void 0,c);return this.insert(I.hostView,m),I}insert(t,n){const i=t._lView,o=i[1];if(function Ms(e){return On(e[3])}(i)){const I=this.indexOf(t);if(-1!==I)this.detach(I);else{const P=i[3],W=new t_(P,P[6],P[3]);W.detach(W.indexOf(t))}}const c=this._adjustIndex(n),f=this._lContainer;!function Zc(e,t,n,i){const o=10+i,c=n.length;i>0&&(n[o-1][4]=t),i<c-10?(t[4]=n[o],hs(n,10+i,t)):(n.push(t),t[4]=null),t[3]=n;const f=t[17];null!==f&&n!==f&&function Fd(e,t){const n=e[9];t[16]!==t[3][3][16]&&(e[2]=!0),null===n?e[9]=[t]:n.push(t)}(f,t);const m=t[19];null!==m&&m.insertView(e),t[2]|=64}(o,i,f,c);const m=tu(c,f),D=i[11],N=Yl(D,f[7]);return null!==N&&function Xh(e,t,n,i,o,c){i[0]=o,i[6]=t,Us(e,i,n,1,o,c)}(o,f[6],D,i,N,m),t.attachToViewContainerRef(),hs(lh(f),c,t),t}move(t,n){return this.insert(t,n)}indexOf(t){const n=n_(this._lContainer);return null!==n?n.indexOf(t):-1}remove(t){const n=this._adjustIndex(t,-1),i=Gl(this._lContainer,n);i&&(Hs(lh(this._lContainer),n),Xc(i[1],i))}detach(t){const n=this._adjustIndex(t,-1),i=Gl(this._lContainer,n);return i&&null!=Hs(lh(this._lContainer),n)?new bc(i):null}_adjustIndex(t,n=0){return t??this.length+n}};function n_(e){return e[8]}function lh(e){return e[8]||(e[8]=[])}function i_(e,t){let n;const i=t[e.index];if(On(i))n=i;else{let o;if(8&e.type)o=wn(i);else{const c=t[11];o=c.createComment("");const f=ii(e,t);qr(c,Yl(c,f),o,function tp(e,t){return e.nextSibling(t)}(c,f),!1)}t[e.index]=n=jp(i,t,o,e),ku(t,n)}return new t_(n,e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ch{constructor(t){this.queryList=t,this.matches=null}clone(){return new ch(this.queryList)}setDirty(){this.queryList.setDirty()}}class uh{constructor(t=[]){this.queries=t}createEmbeddedView(t){const n=t.queries;if(null!==n){const i=null!==t.contentQueries?t.contentQueries[0]:n.length,o=[];for(let c=0;c<i;c++){const f=n.getByIndex(c);o.push(this.queries[f.indexInDeclarationView].clone())}return new uh(o)}return null}insertView(t){this.dirtyQueriesWithMatches(t)}detachView(t){this.dirtyQueriesWithMatches(t)}dirtyQueriesWithMatches(t){for(let n=0;n<this.queries.length;n++)null!==f_(t,n).matches&&this.queries[n].setDirty()}}class r_{constructor(t,n,i=null){this.predicate=t,this.flags=n,this.read=i}}class dh{constructor(t=[]){this.queries=t}elementStart(t,n){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(t,n)}elementEnd(t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementEnd(t)}embeddedTView(t){let n=null;for(let i=0;i<this.length;i++){const o=null!==n?n.length:0,c=this.getByIndex(i).embeddedTView(t,o);c&&(c.indexInDeclarationView=i,null!==n?n.push(c):n=[c])}return null!==n?new dh(n):null}template(t,n){for(let i=0;i<this.queries.length;i++)this.queries[i].template(t,n)}getByIndex(t){return this.queries[t]}get length(){return this.queries.length}track(t){this.queries.push(t)}}class fh{constructor(t,n=-1){this.metadata=t,this.matches=null,this.indexInDeclarationView=-1,this.crossesNgTemplate=!1,this._appliesToNextNode=!0,this._declarationNodeIndex=n}elementStart(t,n){this.isApplyingToNode(n)&&this.matchTNode(t,n)}elementEnd(t){this._declarationNodeIndex===t.index&&(this._appliesToNextNode=!1)}template(t,n){this.elementStart(t,n)}embeddedTView(t,n){return this.isApplyingToNode(t)?(this.crossesNgTemplate=!0,this.addMatch(-t.index,n),new fh(this.metadata)):null}isApplyingToNode(t){if(this._appliesToNextNode&&1!=(1&this.metadata.flags)){const n=this._declarationNodeIndex;let i=t.parent;for(;null!==i&&8&i.type&&i.index!==n;)i=i.parent;return n===(null!==i?i.index:-1)}return this._appliesToNextNode}matchTNode(t,n){const i=this.metadata.predicate;if(Array.isArray(i))for(let o=0;o<i.length;o++){const c=i[o];this.matchTNodeWithReadOption(t,n,Qb(n,c)),this.matchTNodeWithReadOption(t,n,Ls(n,t,c,!1,!1))}else i===Rc?4&n.type&&this.matchTNodeWithReadOption(t,n,-1):this.matchTNodeWithReadOption(t,n,Ls(n,t,i,!1,!1))}matchTNodeWithReadOption(t,n,i){if(null!==i){const o=this.metadata.read;if(null!==o)if(o===xe||o===Xu||o===Rc&&4&n.type)this.addMatch(n.index,-2);else{const c=Ls(n,t,o,!1,!1);null!==c&&this.addMatch(n.index,c)}else this.addMatch(n.index,i)}}addMatch(t,n){null===this.matches?this.matches=[t,n]:this.matches.push(t,n)}}function Qb(e,t){const n=e.localNames;if(null!==n)for(let i=0;i<n.length;i+=2)if(n[i]===t)return n[i+1];return null}function eD(e,t,n,i){return-1===n?function Xb(e,t){return 11&e.type?Se(e,t):4&e.type?Qu(e,t):null}(t,e):-2===n?function tD(e,t,n){return n===xe?Se(t,e):n===Rc?Qu(t,e):n===Xu?i_(t,e):void 0}(e,t,i):An(e,e[1],n,t)}function o_(e,t,n,i){const o=t[19].queries[i];if(null===o.matches){const c=e.data,f=n.matches,m=[];for(let D=0;D<f.length;D+=2){const N=f[D];m.push(N<0?null:eD(t,c[N],f[D+1],n.metadata.read))}o.matches=m}return o.matches}function hh(e,t,n,i){const o=e.queries.getByIndex(n),c=o.matches;if(null!==c){const f=o_(e,t,o,n);for(let m=0;m<c.length;m+=2){const D=c[m];if(D>0)i.push(f[m/2]);else{const N=c[m+1],I=t[-D];for(let P=10;P<I.length;P++){const W=I[P];W[17]===W[3]&&hh(W[1],W,N,i)}if(null!==I[9]){const P=I[9];for(let W=0;W<P.length;W++){const q=P[W];hh(q[1],q,N,i)}}}}}return i}function s_(e){const t=pe(),n=ct(),i=is();Oo(i+1);const o=f_(n,i);if(e.dirty&&function Eo(e){return 4==(4&e[2])}(t)===(2==(2&o.metadata.flags))){if(null===o.matches)e.reset([]);else{const c=o.crossesNgTemplate?hh(n,t,i,[]):o_(n,t,o,i);e.reset(c,At),e.notifyOnChanges()}return!0}return!1}function a_(e,t,n){const i=ct();i.firstCreatePass&&(d_(i,new r_(e,t,n),-1),2==(2&t)&&(i.staticViewQueries=!0)),u_(i,pe(),t)}function l_(e,t,n,i){const o=ct();if(o.firstCreatePass){const c=_n();d_(o,new r_(t,n,i),c.index),function iD(e,t){const n=e.contentQueries||(e.contentQueries=[]);t!==(n.length?n[n.length-1]:-1)&&n.push(e.queries.length-1,t)}(o,e),2==(2&n)&&(o.staticContentQueries=!0)}u_(o,pe(),n)}function c_(){return function nD(e,t){return e[19].queries[t].queryList}(pe(),is())}function u_(e,t,n){const i=new ah(4==(4&n));Fp(e,t,i,i.destroy),null===t[19]&&(t[19]=new uh),t[19].queries.push(new ch(i))}function d_(e,t,n){null===e.queries&&(e.queries=new dh),e.queries.track(new fh(t,n))}function f_(e,t){return e.queries.getByIndex(t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function h_(e,t){return Qu(e,t)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function td(...e){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const R_=new Wt("Application Initializer");let nd=(()=>{class e{constructor(n){this.appInits=n,this.resolve=td,this.reject=td,this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,o)=>{this.resolve=i,this.reject=o})}runInitializers(){if(this.initialized)return;const n=[],i=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let o=0;o<this.appInits.length;o++){const c=this.appInits[o]();if(Bf(c))n.push(c);else if(fg(c)){const f=new Promise((m,D)=>{c.subscribe({complete:m,error:D})});n.push(f)}}Promise.all(n).then(()=>{i()}).catch(o=>{this.reject(o)}),0===n.length&&i(),this.initialized=!0}}return e.\u0275fac=function(n){return new(n||e)(Ee(R_,8))},e.\u0275prov=Qt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const x_=new Wt("AppId",{providedIn:"root",factory:function P_(){return`${vh()}${vh()}${vh()}`}});function vh(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const F_=new Wt("Platform Initializer"),wD=new Wt("Platform ID",{providedIn:"platform",factory:()=>"unknown"}),k_=new Wt("appBootstrapListener");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let ED=(()=>{class e{log(n){console.log(n)}warn(n){console.warn(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Qt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const id=new Wt("LocaleId",{providedIn:"root",factory:()=>Ze(id,he.Optional|he.SkipSelf)||function TD(){return typeof $localize<"u"&&$localize.locale||Cl}()}),ND=new Wt("DefaultCurrencyCode",{providedIn:"root",factory:()=>"USD"});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class MD{constructor(t,n){this.ngModuleFactory=t,this.componentFactories=n}}let SD=(()=>{class e{compileModuleSync(n){return new ih(n)}compileModuleAsync(n){return Promise.resolve(this.compileModuleSync(n))}compileModuleAndAllComponentsSync(n){const i=this.compileModuleSync(n),c=Cr(Vt(n).declarations).reduce((f,m)=>{const D=ft(m);return D&&f.push(new Dc(D)),f},[]);return new MD(i,c)}compileModuleAndAllComponentsAsync(n){return Promise.resolve(this.compileModuleAndAllComponentsSync(n))}clearCache(){}clearCacheFor(n){}getModuleId(n){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Qt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const AD=(()=>Promise.resolve(0))();function yh(e){typeof Zone>"u"?AD.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Qr{constructor({enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Jo(!1),this.onMicrotaskEmpty=new Jo(!1),this.onStable=new Jo(!1),this.onError=new Jo(!1),typeof Zone>"u")throw new je(908,!1);Zone.assertZonePatched();const o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!i&&n,o.shouldCoalesceRunChangeDetection=i,o.lastRequestAnimationFrameId=-1,o.nativeRequestAnimationFrame=function RD(){let e=jt.requestAnimationFrame,t=jt.cancelAnimationFrame;if(typeof Zone<"u"&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const i=t[Zone.__symbol__("OriginalDelegate")];i&&(t=i)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */().nativeRequestAnimationFrame,function FD(e){const t=()=>{!function PD(e){e.isCheckStableRunning||-1!==e.lastRequestAnimationFrameId||(e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(jt,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,Dh(e),e.isCheckStableRunning=!0,bh(e),e.isCheckStableRunning=!1},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),Dh(e))}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,i,o,c,f,m)=>{try{return V_(e),n.invokeTask(o,c,f,m)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===c.type||e.shouldCoalesceRunChangeDetection)&&t(),H_(e)}},onInvoke:(n,i,o,c,f,m,D)=>{try{return V_(e),n.invoke(o,c,f,m,D)}finally{e.shouldCoalesceRunChangeDetection&&t(),H_(e)}},onHasTask:(n,i,o,c)=>{n.hasTask(o,c),i===o&&("microTask"==c.change?(e._hasPendingMicrotasks=c.microTask,Dh(e),bh(e)):"macroTask"==c.change&&(e.hasPendingMacrotasks=c.macroTask))},onHandleError:(n,i,o,c)=>(n.handleError(o,c),e.runOutsideAngular(()=>e.onError.emit(c)),!1)})}(o)}static isInAngularZone(){return typeof Zone<"u"&&!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!Qr.isInAngularZone())throw new je(909,!1)}static assertNotInAngularZone(){if(Qr.isInAngularZone())throw new je(909,!1)}run(t,n,i){return this._inner.run(t,n,i)}runTask(t,n,i,o){const c=this._inner,f=c.scheduleEventTask("NgZoneEvent: "+o,t,xD,td,td);try{return c.runTask(f,n,i)}finally{c.cancelTask(f)}}runGuarded(t,n,i){return this._inner.runGuarded(t,n,i)}runOutsideAngular(t){return this._outer.run(t)}}const xD={};function bh(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function Dh(e){e.hasPendingMicrotasks=!!(e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId)}function V_(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function H_(e){e._nesting--,bh(e)}class kD{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Jo,this.onMicrotaskEmpty=new Jo,this.onStable=new Jo,this.onError=new Jo}run(t,n,i){return t.apply(n,i)}runGuarded(t,n,i){return t.apply(n,i)}runOutsideAngular(t){return t()}runTask(t,n,i,o){return t.apply(n,i)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const j_=new Wt(""),U_=new Wt("");let Ch,LD=(()=>{class e{constructor(n,i,o){this._ngZone=n,this.registry=i,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,Ch||(function BD(e){Ch=e}(o),o.addToWindow(i)),this._watchAngularEvents(),n.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Qr.assertNotInAngularZone(),yh(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())yh(()=>{for(;0!==this._callbacks.length;){let n=this._callbacks.pop();clearTimeout(n.timeoutId),n.doneCb(this._didWork)}this._didWork=!1});else{let n=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>!i.updateCb||!i.updateCb(n)||(clearTimeout(i.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(n=>({source:n.source,creationLocation:n.creationLocation,data:n.data})):[]}addCallback(n,i,o){let c=-1;i&&i>0&&(c=setTimeout(()=>{this._callbacks=this._callbacks.filter(f=>f.timeoutId!==c),n(this._didWork,this.getPendingTasks())},i)),this._callbacks.push({doneCb:n,timeoutId:c,updateCb:o})}whenStable(n,i,o){if(o&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(n,i,o),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(n){this.registry.registerApplication(n,this)}unregisterApplication(n){this.registry.unregisterApplication(n)}findProviders(n,i,o){return[]}}return e.\u0275fac=function(n){return new(n||e)(Ee(Qr),Ee($_),Ee(U_))},e.\u0275prov=Qt({token:e,factory:e.\u0275fac}),e})(),$_=(()=>{class e{constructor(){this._applications=new Map}registerApplication(n,i){this._applications.set(n,i)}unregisterApplication(n){this._applications.delete(n)}unregisterAllApplications(){this._applications.clear()}getTestability(n){return this._applications.get(n)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(n,i=!0){return Ch?.findTestabilityInTree(this,n,i)??null}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=Qt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})(),Ks=null;const G_=new Wt("AllowMultipleToken"),wh=new Wt("PlatformDestroyListeners");class jD{constructor(t,n){this.name=t,this.token=n}}function W_(e,t,n=[]){const i=`Platform: ${t}`,o=new Wt(i);return(c=[])=>{let f=Eh();if(!f||f.injector.get(G_,!1)){const m=[...n,...c,{provide:o,useValue:!0}];e?e(m):function UD(e){if(Ks&&!Ks.get(G_,!1))throw new je(400,!1);Ks=e;const t=e.get(K_);(function z_(e){const t=e.get(F_,null);t&&t.forEach(n=>n())})(e)}(function Y_(e=[],t){return ga.create({name:t,providers:[{provide:nl,useValue:"platform"},{provide:wh,useValue:new Set([()=>Ks=null])},...e]})}(m,i))}return function GD(e){const t=Eh();if(!t)throw new je(401,!1);return t}()}}function Eh(){return Ks?.get(K_)??null}let K_=(()=>{class e{constructor(n){this._injector=n,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(n,i){const o=function q_(e,t){let n;return n="noop"===e?new kD:("zone.js"===e?void 0:e)||new Qr(t),n}(i?.ngZone,function J_(e){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:!(!e||!e.ngZoneEventCoalescing)||!1,shouldCoalesceRunChangeDetection:!(!e||!e.ngZoneRunCoalescing)||!1}}(i)),c=[{provide:Qr,useValue:o}];return o.run(()=>{const f=ga.create({providers:c,parent:this.injector,name:n.moduleType.name}),m=n.create(f),D=m.injector.get(pn,null);if(!D)throw new je(402,!1);return o.runOutsideAngular(()=>{const N=o.onError.subscribe({next:I=>{D.handleError(I)}});m.onDestroy(()=>{od(this._modules,m),N.unsubscribe()})}),function Z_(e,t,n){try{const i=n();return Bf(i)?i.catch(o=>{throw t.runOutsideAngular(()=>e.handleError(o)),o}):i}catch(i){throw t.runOutsideAngular(()=>e.handleError(i)),i}}(D,o,()=>{const N=m.injector.get(nd);return N.runInitializers(),N.donePromise.then(()=>(um(m.injector.get(id,Cl)||Cl),this._moduleDoBootstrap(m),m))})})}bootstrapModule(n,i=[]){const o=Q_({},i);return function VD(e,t,n){const i=new ih(n);return Promise.resolve(i)}(0,0,n).then(c=>this.bootstrapModuleFactory(c,o))}_moduleDoBootstrap(n){const i=n.injector.get(rd);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(o=>i.bootstrap(o));else{if(!n.instance.ngDoBootstrap)throw new je(403,!1);n.instance.ngDoBootstrap(i)}this._modules.push(n)}onDestroy(n){this._destroyListeners.push(n)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new je(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());const n=this._injector.get(wh,null);n&&(n.forEach(i=>i()),n.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}}return e.\u0275fac=function(n){return new(n||e)(Ee(ga))},e.\u0275prov=Qt({token:e,factory:e.\u0275fac,providedIn:"platform"}),e})();function Q_(e,t){return Array.isArray(t)?t.reduce(Q_,e):{...e,...t}}let rd=(()=>{class e{constructor(n,i,o){this._zone=n,this._injector=i,this._exceptionHandler=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this._destroyed=!1,this._destroyListeners=[],this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const c=new Q.y(m=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{m.next(this._stable),m.complete()})}),f=new Q.y(m=>{let D;this._zone.runOutsideAngular(()=>{D=this._zone.onStable.subscribe(()=>{Qr.assertNotInAngularZone(),yh(()=>{!this._stable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks&&(this._stable=!0,m.next(!0))})})});const N=this._zone.onUnstable.subscribe(()=>{Qr.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{m.next(!1)}))});return()=>{D.unsubscribe(),N.unsubscribe()}});this.isStable=function ye(...e){let t=Number.POSITIVE_INFINITY,n=null,i=e[e.length-1];return(0,ge.K)(i)?(n=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(t=e.pop())):"number"==typeof i&&(t=e.pop()),null===n&&1===e.length&&e[0]instanceof Q.y?e[0]:(0,ve.J)(t)((0,ie.n)(e,n))}(c,f.pipe(function ue(){return e=>(0,U.x)()(function X(e,t){return function(i){let o;if(o="function"==typeof e?e:function(){return e},"function"==typeof t)return i.lift(new G(o,t));const c=Object.create(i,le.N);return c.source=i,c.subjectFactory=o,c}}(Z)(e))}()))}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(n,i){const o=n instanceof w;if(!this._injector.get(nd).done)throw!o&&ti(n),new je(405,false);let f;f=o?n:this._injector.get(re).resolveComponentFactory(n),this.componentTypes.push(f.componentType);const m=function HD(e){return e.isBoundToModule}(f)?void 0:this._injector.get(wl),N=f.create(ga.NULL,[],i||f.selector,m),I=N.location.nativeElement,P=N.injector.get(j_,null);return P?.registerApplication(I),N.onDestroy(()=>{this.detachView(N.hostView),od(this.components,N),P?.unregisterApplication(I)}),this._loadComponent(N),N}tick(){if(this._runningTick)throw new je(101,!1);try{this._runningTick=!0;for(let n of this._views)n.detectChanges()}catch(n){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(n))}finally{this._runningTick=!1}}attachView(n){const i=n;this._views.push(i),i.attachToAppRef(this)}detachView(n){const i=n;od(this._views,i),i.detachFromAppRef()}_loadComponent(n){this.attachView(n.hostView),this.tick(),this.components.push(n);const i=this._injector.get(k_,[]);i.push(...this._bootstrapListeners),i.forEach(o=>o(n))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(n=>n()),this._views.slice().forEach(n=>n.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(n){return this._destroyListeners.push(n),()=>od(this._destroyListeners,n)}destroy(){if(this._destroyed)throw new je(406,!1);const n=this._injector;n.destroy&&!n.destroyed&&n.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}}return e.\u0275fac=function(n){return new(n||e)(Ee(Qr),Ee(Gs),Ee(pn))},e.\u0275prov=Qt({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function od(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}function WD(){}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let YD=(()=>{class e{}return e.__NG_ELEMENT_ID__=KD,e})();function KD(e){return function JD(e,t,n){if(dr(e)&&!n){const i=Yn(e.index,t);return new bc(i,i)}return 47&e.type?new bc(t[16],t):null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(_n(),pe(),16==(16&e))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class iv{constructor(){}supports(t){return Cc(t)}create(t){return new t1(t)}}const e1=(e,t)=>t;class t1{constructor(t){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=t||e1}forEachItem(t){let n;for(n=this._itHead;null!==n;n=n._next)t(n)}forEachOperation(t){let n=this._itHead,i=this._removalsHead,o=0,c=null;for(;n||i;){const f=!i||n&&n.currentIndex<ov(i,o,c)?n:i,m=ov(f,o,c),D=f.currentIndex;if(f===i)o--,i=i._nextRemoved;else if(n=n._next,null==f.previousIndex)o++;else{c||(c=[]);const N=m-o,I=D-o;if(N!=I){for(let W=0;W<N;W++){const q=W<c.length?c[W]:c[W]=0,ae=q+W;I<=ae&&ae<N&&(c[W]=q+1)}c[f.previousIndex]=I-N}}m!==D&&t(f,m,D)}}forEachPreviousItem(t){let n;for(n=this._previousItHead;null!==n;n=n._nextPrevious)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachMovedItem(t){let n;for(n=this._movesHead;null!==n;n=n._nextMoved)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}forEachIdentityChange(t){let n;for(n=this._identityChangesHead;null!==n;n=n._nextIdentityChange)t(n)}diff(t){if(null==t&&(t=[]),!Cc(t))throw new je(900,!1);return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let o,c,f,n=this._itHead,i=!1;if(Array.isArray(t)){this.length=t.length;for(let m=0;m<this.length;m++)c=t[m],f=this._trackByFn(m,c),null!==n&&Object.is(n.trackById,f)?(i&&(n=this._verifyReinsertion(n,c,f,m)),Object.is(n.item,c)||this._addIdentityChange(n,c)):(n=this._mismatch(n,c,f,m),i=!0),n=n._next}else o=0,function Oy(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ma()]();let i;for(;!(i=n.next()).done;)t(i.value)}}(t,m=>{f=this._trackByFn(o,m),null!==n&&Object.is(n.trackById,f)?(i&&(n=this._verifyReinsertion(n,m,f,o)),Object.is(n.item,m)||this._addIdentityChange(n,m)):(n=this._mismatch(n,m,f,o),i=!0),n=n._next,o++}),this.length=o;return this._truncate(n),this.collection=t,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let t;for(t=this._previousItHead=this._itHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._additionsHead;null!==t;t=t._nextAdded)t.previousIndex=t.currentIndex;for(this._additionsHead=this._additionsTail=null,t=this._movesHead;null!==t;t=t._nextMoved)t.previousIndex=t.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(t,n,i,o){let c;return null===t?c=this._itTail:(c=t._prev,this._remove(t)),null!==(t=null===this._unlinkedRecords?null:this._unlinkedRecords.get(i,null))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._reinsertAfter(t,c,o)):null!==(t=null===this._linkedRecords?null:this._linkedRecords.get(i,o))?(Object.is(t.item,n)||this._addIdentityChange(t,n),this._moveAfter(t,c,o)):t=this._addAfter(new n1(n,i),c,o),t}_verifyReinsertion(t,n,i,o){let c=null===this._unlinkedRecords?null:this._unlinkedRecords.get(i,null);return null!==c?t=this._reinsertAfter(c,t._prev,o):t.currentIndex!=o&&(t.currentIndex=o,this._addToMoves(t,o)),t}_truncate(t){for(;null!==t;){const n=t._next;this._addToRemovals(this._unlink(t)),t=n}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(t,n,i){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(t);const o=t._prevRemoved,c=t._nextRemoved;return null===o?this._removalsHead=c:o._nextRemoved=c,null===c?this._removalsTail=o:c._prevRemoved=o,this._insertAfter(t,n,i),this._addToMoves(t,i),t}_moveAfter(t,n,i){return this._unlink(t),this._insertAfter(t,n,i),this._addToMoves(t,i),t}_addAfter(t,n,i){return this._insertAfter(t,n,i),this._additionsTail=null===this._additionsTail?this._additionsHead=t:this._additionsTail._nextAdded=t,t}_insertAfter(t,n,i){const o=null===n?this._itHead:n._next;return t._next=o,t._prev=n,null===o?this._itTail=t:o._prev=t,null===n?this._itHead=t:n._next=t,null===this._linkedRecords&&(this._linkedRecords=new rv),this._linkedRecords.put(t),t.currentIndex=i,t}_remove(t){return this._addToRemovals(this._unlink(t))}_unlink(t){null!==this._linkedRecords&&this._linkedRecords.remove(t);const n=t._prev,i=t._next;return null===n?this._itHead=i:n._next=i,null===i?this._itTail=n:i._prev=n,t}_addToMoves(t,n){return t.previousIndex===n||(this._movesTail=null===this._movesTail?this._movesHead=t:this._movesTail._nextMoved=t),t}_addToRemovals(t){return null===this._unlinkedRecords&&(this._unlinkedRecords=new rv),this._unlinkedRecords.put(t),t.currentIndex=null,t._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=t,t._prevRemoved=null):(t._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=t),t}_addIdentityChange(t,n){return t.item=n,this._identityChangesTail=null===this._identityChangesTail?this._identityChangesHead=t:this._identityChangesTail._nextIdentityChange=t,t}}class n1{constructor(t,n){this.item=t,this.trackById=n,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class i1{constructor(){this._head=null,this._tail=null}add(t){null===this._head?(this._head=this._tail=t,t._nextDup=null,t._prevDup=null):(this._tail._nextDup=t,t._prevDup=this._tail,t._nextDup=null,this._tail=t)}get(t,n){let i;for(i=this._head;null!==i;i=i._nextDup)if((null===n||n<=i.currentIndex)&&Object.is(i.trackById,t))return i;return null}remove(t){const n=t._prevDup,i=t._nextDup;return null===n?this._head=i:n._nextDup=i,null===i?this._tail=n:i._prevDup=n,null===this._head}}class rv{constructor(){this.map=new Map}put(t){const n=t.trackById;let i=this.map.get(n);i||(i=new i1,this.map.set(n,i)),i.add(t)}get(t,n){const o=this.map.get(t);return o?o.get(t,n):null}remove(t){const n=t.trackById;return this.map.get(n).remove(t)&&this.map.delete(n),t}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function ov(e,t,n){const i=e.previousIndex;if(null===i)return i;let o=0;return n&&i<n.length&&(o=n[i]),i+t+o
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class sv{constructor(){}supports(t){return t instanceof Map||Af(t)}create(){return new r1}}class r1{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(t){let n;for(n=this._mapHead;null!==n;n=n._next)t(n)}forEachPreviousItem(t){let n;for(n=this._previousMapHead;null!==n;n=n._nextPrevious)t(n)}forEachChangedItem(t){let n;for(n=this._changesHead;null!==n;n=n._nextChanged)t(n)}forEachAddedItem(t){let n;for(n=this._additionsHead;null!==n;n=n._nextAdded)t(n)}forEachRemovedItem(t){let n;for(n=this._removalsHead;null!==n;n=n._nextRemoved)t(n)}diff(t){if(t){if(!(t instanceof Map||Af(t)))throw new je(900,!1)}else t=new Map;return this.check(t)?this:null}onDestroy(){}check(t){this._reset();let n=this._mapHead;if(this._appendAfter=null,this._forEach(t,(i,o)=>{if(n&&n.key===o)this._maybeAddToChanges(n,i),this._appendAfter=n,n=n._next;else{const c=this._getOrCreateRecordForKey(o,i);n=this._insertBeforeOrAppend(n,c)}}),n){n._prev&&(n._prev._next=null),this._removalsHead=n;for(let i=n;null!==i;i=i._nextRemoved)i===this._mapHead&&(this._mapHead=null),this._records.delete(i.key),i._nextRemoved=i._next,i.previousValue=i.currentValue,i.currentValue=null,i._prev=null,i._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(t,n){if(t){const i=t._prev;return n._next=t,n._prev=i,t._prev=n,i&&(i._next=n),t===this._mapHead&&(this._mapHead=n),this._appendAfter=t,t}return this._appendAfter?(this._appendAfter._next=n,n._prev=this._appendAfter):this._mapHead=n,this._appendAfter=n,null}_getOrCreateRecordForKey(t,n){if(this._records.has(t)){const o=this._records.get(t);this._maybeAddToChanges(o,n);const c=o._prev,f=o._next;return c&&(c._next=f),f&&(f._prev=c),o._next=null,o._prev=null,o}const i=new o1(t);return this._records.set(t,i),i.currentValue=n,this._addToAdditions(i),i}_reset(){if(this.isDirty){let t;for(this._previousMapHead=this._mapHead,t=this._previousMapHead;null!==t;t=t._next)t._nextPrevious=t._next;for(t=this._changesHead;null!==t;t=t._nextChanged)t.previousValue=t.currentValue;for(t=this._additionsHead;null!=t;t=t._nextAdded)t.previousValue=t.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(t,n){Object.is(n,t.currentValue)||(t.previousValue=t.currentValue,t.currentValue=n,this._addToChanges(t))}_addToAdditions(t){null===this._additionsHead?this._additionsHead=this._additionsTail=t:(this._additionsTail._nextAdded=t,this._additionsTail=t)}_addToChanges(t){null===this._changesHead?this._changesHead=this._changesTail=t:(this._changesTail._nextChanged=t,this._changesTail=t)}_forEach(t,n){t instanceof Map?t.forEach(n):Object.keys(t).forEach(i=>n(t[i],i))}}class o1{constructor(t){this.key=t,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function av(){return new Oh([new iv])}let Oh=(()=>{class e{constructor(n){this.factories=n}static create(n,i){if(null!=i){const o=i.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:i=>e.create(n,i||av()),deps:[[e,new gs,new Dr]]}}find(n){const i=this.factories.find(o=>o.supports(n));if(null!=i)return i;throw new je(901,!1)}}return e.\u0275prov=Qt({token:e,providedIn:"root",factory:av}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function lv(){return new Ih([new sv])}let Ih=(()=>{class e{constructor(n){this.factories=n}static create(n,i){if(i){const o=i.factories.slice();n=n.concat(o)}return new e(n)}static extend(n){return{provide:e,useFactory:i=>e.create(n,i||lv()),deps:[[e,new gs,new Dr]]}}find(n){const i=this.factories.find(o=>o.supports(n));if(i)return i;throw new je(901,!1)}}
/**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
return e.\u0275prov=Qt({token:e,providedIn:"root",factory:lv}),e})();const l1=W_(null,"core",[]);
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
let c1=(()=>{class e{constructor(n){}}return e.\u0275fac=function(n){return new(n||e)(Ee(rd))},e.\u0275mod=ui({type:e}),e.\u0275inj=mt({}),e})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function u1(e){return"boolean"==typeof e?e:null!=e&&"false"!==e}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,609:(Qe,De,F)=>{F.d(De,{Fj:()=>Xe,u5:()=>wo,JU:()=>Z,JJ:()=>qn,JL:()=>ki,F:()=>Je,On:()=>fi,YN:()=>Qo,wV:()=>hi,EJ:()=>io,_Y:()=>Mn,Kr:()=>es});var a=F(2135),L=F(4666),Q=F(4858),ge=F(7473),ve=F(4327),ie=F(6942),ye=F(6549);function X(T,C){return new ge.y(y=>{const A=T.length;if(0===A)return void y.complete();const te=new Array(A);let ze=0,Gt=0;for(let mn=0;mn<A;mn++){const gr=(0,Q.D)(T[mn]);let Mr=!1;y.add(gr.subscribe({next:Ii=>{Mr||(Mr=!0,Gt++),te[mn]=Ii},error:Ii=>y.error(Ii),complete:()=>{ze++,(ze===A||!Mr)&&(Gt===A&&y.next(C?C.reduce((Ii,pe,ct)=>(Ii[pe]=te[ct],Ii),{}):te),y.complete())}}))}})}
/**
     * @license Angular v15.0.4
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let G=(()=>{class T{constructor(y,A){this._renderer=y,this._elementRef=A,this.onChange=te=>{},this.onTouched=()=>{}}setProperty(y,A){this._renderer.setProperty(this._elementRef.nativeElement,y,A)}registerOnTouched(y){this.onTouched=y}registerOnChange(y){this.onChange=y}setDisabledState(y){this.setProperty("disabled",y)}}return T.\u0275fac=function(y){return new(y||T)(a.Y36(a.Qsj),a.Y36(a.SBq))},T.\u0275dir=a.lG2({type:T}),T})(),U=(()=>{class T extends G{}return T.\u0275fac=function(){let C;return function(A){return(C||(C=a.n5z(T)))(A||T)}}(),T.\u0275dir=a.lG2({type:T,features:[a.qOj]}),T})();const Z=new a.OlP("NgValueAccessor"),He={provide:Z,useExisting:(0,a.Gpc)(()=>Xe),multi:!0},Te=new a.OlP("CompositionEventMode");
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Xe=(()=>{class T extends G{constructor(y,A,te){super(y,A),this._compositionMode=te,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function be(){const T=(0,L.q)()?(0,L.q)().getUserAgent():"";return/android (\d+)/.test(T.toLowerCase())}())}writeValue(y){this.setProperty("value",y??"")}_handleInput(y){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(y)}_compositionStart(){this._composing=!0}_compositionEnd(y){this._composing=!1,this._compositionMode&&this.onChange(y)}}return T.\u0275fac=function(y){return new(y||T)(a.Y36(a.Qsj),a.Y36(a.SBq),a.Y36(Te,8))},T.\u0275dir=a.lG2({type:T,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(y,A){1&y&&a.NdJ("input",function(ze){return A._handleInput(ze.target.value)})("blur",function(){return A.onTouched()})("compositionstart",function(){return A._compositionStart()})("compositionend",function(ze){return A._compositionEnd(ze.target.value)})},features:[a._Bn([He]),a.qOj]}),T})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const it=new a.OlP("NgValidators"),Rt=new a.OlP("NgAsyncValidators");function _i(T){return null!=T}function Gn(T){return(0,a.QGY)(T)?(0,Q.D)(T):T}function zn(T){let C={};return T.forEach(y=>{C=null!=y?{...C,...y}:C}),0===Object.keys(C).length?null:C}function Jn(T,C){return C.map(y=>y(T))}function Nn(T){return T.map(C=>function Fi(T){return!T.validate}(C)?C:y=>C.validate(y))}function vi(T){return null!=T?function si(T){if(!T)return null;const C=T.filter(_i);return 0==C.length?null:function(y){return zn(Jn(y,C))}}(Nn(T)):null}function $i(T){return null!=T?function on(T){if(!T)return null;const C=T.filter(_i);return 0==C.length?null:function(y){return function le(...T){if(1===T.length){const C=T[0];if((0,ve.k)(C))return X(C,null);if((0,ye.K)(C)&&Object.getPrototypeOf(C)===Object.prototype){const y=Object.keys(C);return X(y.map(A=>C[A]),y)}}if("function"==typeof T[T.length-1]){const C=T.pop();return X(T=1===T.length&&(0,ve.k)(T[0])?T[0]:T,null).pipe((0,ie.U)(y=>C(...y)))}return X(T,null)}(Jn(y,C).map(Gn)).pipe((0,ie.U)(zn))}}(Nn(T)):null}function go(T,C){return null===T?[C]:Array.isArray(T)?[...T,C]:[T,C]}function or(T){return T?Array.isArray(T)?T:[T]:[]}function Pt(T,C){return Array.isArray(T)?T.includes(C):T===C}function sr(T,C){const y=or(C);return or(T).forEach(te=>{Pt(y,te)||y.push(te)}),y}function Qt(T,C){return or(C).filter(y=>!Pt(T,y))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ai{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(C){this._rawValidators=C||[],this._composedValidatorFn=vi(this._rawValidators)}_setAsyncValidators(C){this._rawAsyncValidators=C||[],this._composedAsyncValidatorFn=$i(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(C){this._onDestroyCallbacks.push(C)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(C=>C()),this._onDestroyCallbacks=[]}reset(C){this.control&&this.control.reset(C)}hasError(C,y){return!!this.control&&this.control.hasError(C,y)}getError(C,y){return this.control?this.control.getError(C,y):null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class mt extends ai{get formDirective(){return null}get path(){return null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ht extends ai{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Pn{constructor(C){this._cd=C}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let qn=(()=>{class T extends Pn{constructor(y){super(y)}}return T.\u0275fac=function(y){return new(y||T)(a.Y36(ht,2))},T.\u0275dir=a.lG2({type:T,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(y,A){2&y&&a.ekj("ng-untouched",A.isUntouched)("ng-touched",A.isTouched)("ng-pristine",A.isPristine)("ng-dirty",A.isDirty)("ng-valid",A.isValid)("ng-invalid",A.isInvalid)("ng-pending",A.isPending)},features:[a.qOj]}),T})(),ki=(()=>{class T extends Pn{constructor(y){super(y)}}return T.\u0275fac=function(y){return new(y||T)(a.Y36(mt,10))},T.\u0275dir=a.lG2({type:T,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(y,A){2&y&&a.ekj("ng-untouched",A.isUntouched)("ng-touched",A.isTouched)("ng-pristine",A.isPristine)("ng-dirty",A.isDirty)("ng-valid",A.isValid)("ng-invalid",A.isInvalid)("ng-pending",A.isPending)("ng-submitted",A.isSubmitted)},features:[a.qOj]}),T})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const se="VALID",V="INVALID",j="PENDING",de="DISABLED";function oe(T){return(Ze(T)?T.validators:T)||null}function Ee(T,C){return(Ze(C)?C.asyncValidators:T)||null}function Ze(T){return null!=T&&!Array.isArray(T)&&"object"==typeof T}class Xt{constructor(C,y){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(C),this._assignAsyncValidators(y)}get validator(){return this._composedValidatorFn}set validator(C){this._rawValidators=this._composedValidatorFn=C}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(C){this._rawAsyncValidators=this._composedAsyncValidatorFn=C}get parent(){return this._parent}get valid(){return this.status===se}get invalid(){return this.status===V}get pending(){return this.status==j}get disabled(){return this.status===de}get enabled(){return this.status!==de}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(C){this._assignValidators(C)}setAsyncValidators(C){this._assignAsyncValidators(C)}addValidators(C){this.setValidators(sr(C,this._rawValidators))}addAsyncValidators(C){this.setAsyncValidators(sr(C,this._rawAsyncValidators))}removeValidators(C){this.setValidators(Qt(C,this._rawValidators))}removeAsyncValidators(C){this.setAsyncValidators(Qt(C,this._rawAsyncValidators))}hasValidator(C){return Pt(this._rawValidators,C)}hasAsyncValidator(C){return Pt(this._rawAsyncValidators,C)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(C={}){this.touched=!0,this._parent&&!C.onlySelf&&this._parent.markAsTouched(C)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(C=>C.markAllAsTouched())}markAsUntouched(C={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(y=>{y.markAsUntouched({onlySelf:!0})}),this._parent&&!C.onlySelf&&this._parent._updateTouched(C)}markAsDirty(C={}){this.pristine=!1,this._parent&&!C.onlySelf&&this._parent.markAsDirty(C)}markAsPristine(C={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(y=>{y.markAsPristine({onlySelf:!0})}),this._parent&&!C.onlySelf&&this._parent._updatePristine(C)}markAsPending(C={}){this.status=j,!1!==C.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!C.onlySelf&&this._parent.markAsPending(C)}disable(C={}){const y=this._parentMarkedDirty(C.onlySelf);this.status=de,this.errors=null,this._forEachChild(A=>{A.disable({...C,onlySelf:!0})}),this._updateValue(),!1!==C.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...C,skipPristineCheck:y}),this._onDisabledChange.forEach(A=>A(!0))}enable(C={}){const y=this._parentMarkedDirty(C.onlySelf);this.status=se,this._forEachChild(A=>{A.enable({...C,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:C.emitEvent}),this._updateAncestors({...C,skipPristineCheck:y}),this._onDisabledChange.forEach(A=>A(!1))}_updateAncestors(C){this._parent&&!C.onlySelf&&(this._parent.updateValueAndValidity(C),C.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(C){this._parent=C}getRawValue(){return this.value}updateValueAndValidity(C={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===se||this.status===j)&&this._runAsyncValidator(C.emitEvent)),!1!==C.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!C.onlySelf&&this._parent.updateValueAndValidity(C)}_updateTreeValidity(C={emitEvent:!0}){this._forEachChild(y=>y._updateTreeValidity(C)),this.updateValueAndValidity({onlySelf:!0,emitEvent:C.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?de:se}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(C){if(this.asyncValidator){this.status=j,this._hasOwnPendingAsyncValidator=!0;const y=Gn(this.asyncValidator(this));this._asyncValidationSubscription=y.subscribe(A=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(A,{emitEvent:C})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(C,y={}){this.errors=C,this._updateControlsErrors(!1!==y.emitEvent)}get(C){let y=C;return null==y||(Array.isArray(y)||(y=y.split(".")),0===y.length)?null:y.reduce((A,te)=>A&&A._find(te),this)}getError(C,y){const A=y?this.get(y):this;return A&&A.errors?A.errors[C]:null}hasError(C,y){return!!this.getError(C,y)}get root(){let C=this;for(;C._parent;)C=C._parent;return C}_updateControlsErrors(C){this.status=this._calculateStatus(),C&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(C)}_initObservables(){this.valueChanges=new a.vpe,this.statusChanges=new a.vpe}_calculateStatus(){return this._allControlsDisabled()?de:this.errors?V:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(j)?j:this._anyControlsHaveStatus(V)?V:se}_anyControlsHaveStatus(C){return this._anyControls(y=>y.status===C)}_anyControlsDirty(){return this._anyControls(C=>C.dirty)}_anyControlsTouched(){return this._anyControls(C=>C.touched)}_updatePristine(C={}){this.pristine=!this._anyControlsDirty(),this._parent&&!C.onlySelf&&this._parent._updatePristine(C)}_updateTouched(C={}){this.touched=this._anyControlsTouched(),this._parent&&!C.onlySelf&&this._parent._updateTouched(C)}_registerOnCollectionChange(C){this._onCollectionChange=C}_setUpdateStrategy(C){Ze(C)&&null!=C.updateOn&&(this._updateOn=C.updateOn)}_parentMarkedDirty(C){return!C&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(C){return null}_assignValidators(C){this._rawValidators=Array.isArray(C)?C.slice():C,this._composedValidatorFn=function Ae(T){return Array.isArray(T)?vi(T):T||null}(this._rawValidators)}_assignAsyncValidators(C){this._rawAsyncValidators=Array.isArray(C)?C.slice():C,this._composedAsyncValidatorFn=function vt(T){return Array.isArray(T)?$i(T):T||null}(this._rawAsyncValidators)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Jt extends Xt{constructor(C,y,A){super(oe(y),Ee(A,y)),this.controls=C,this._initObservables(),this._setUpdateStrategy(y),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(C,y){return this.controls[C]?this.controls[C]:(this.controls[C]=y,y.setParent(this),y._registerOnCollectionChange(this._onCollectionChange),y)}addControl(C,y,A={}){this.registerControl(C,y),this.updateValueAndValidity({emitEvent:A.emitEvent}),this._onCollectionChange()}removeControl(C,y={}){this.controls[C]&&this.controls[C]._registerOnCollectionChange(()=>{}),delete this.controls[C],this.updateValueAndValidity({emitEvent:y.emitEvent}),this._onCollectionChange()}setControl(C,y,A={}){this.controls[C]&&this.controls[C]._registerOnCollectionChange(()=>{}),delete this.controls[C],y&&this.registerControl(C,y),this.updateValueAndValidity({emitEvent:A.emitEvent}),this._onCollectionChange()}contains(C){return this.controls.hasOwnProperty(C)&&this.controls[C].enabled}setValue(C,y={}){(function Qn(T,C,y){T._forEachChild((A,te)=>{if(void 0===y[te])throw new a.vHH(1002,"")})})(this,0,C),Object.keys(C).forEach(A=>{(function pt(T,C,y){const A=T.controls;if(!(C?Object.keys(A):A).length)throw new a.vHH(1e3,"");if(!A[y])throw new a.vHH(1001,"")})(this,!0,A),this.controls[A].setValue(C[A],{onlySelf:!0,emitEvent:y.emitEvent})}),this.updateValueAndValidity(y)}patchValue(C,y={}){null!=C&&(Object.keys(C).forEach(A=>{const te=this.controls[A];te&&te.patchValue(C[A],{onlySelf:!0,emitEvent:y.emitEvent})}),this.updateValueAndValidity(y))}reset(C={},y={}){this._forEachChild((A,te)=>{A.reset(C[te],{onlySelf:!0,emitEvent:y.emitEvent})}),this._updatePristine(y),this._updateTouched(y),this.updateValueAndValidity(y)}getRawValue(){return this._reduceChildren({},(C,y,A)=>(C[A]=y.getRawValue(),C))}_syncPendingControls(){let C=this._reduceChildren(!1,(y,A)=>!!A._syncPendingControls()||y);return C&&this.updateValueAndValidity({onlySelf:!0}),C}_forEachChild(C){Object.keys(this.controls).forEach(y=>{const A=this.controls[y];A&&C(A,y)})}_setUpControls(){this._forEachChild(C=>{C.setParent(this),C._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(C){for(const[y,A]of Object.entries(this.controls))if(this.contains(y)&&C(A))return!0;return!1}_reduceValue(){return this._reduceChildren({},(y,A,te)=>((A.enabled||this.disabled)&&(y[te]=A.value),y))}_reduceChildren(C,y){let A=C;return this._forEachChild((te,ze)=>{A=y(A,te,ze)}),A}_allControlsDisabled(){for(const C of Object.keys(this.controls))if(this.controls[C].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(C){return this.controls.hasOwnProperty(C)?this.controls[C]:null}}const J=new a.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>me}),me="always";
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function We(T,C,y=me){Li(T,C),C.valueAccessor.writeValue(T.value),(T.disabled||"always"===y)&&C.valueAccessor.setDisabledState?.(T.disabled),function qt(T,C){C.valueAccessor.registerOnChange(y=>{T._pendingValue=y,T._pendingChange=!0,T._pendingDirty=!0,"change"===T.updateOn&&Fn(T,C)})}(T,C),function zi(T,C){const y=(A,te)=>{C.valueAccessor.writeValue(A),te&&C.viewToModelUpdate(A)};T.registerOnChange(y),C._registerOnDestroy(()=>{T._unregisterOnChange(y)})}(T,C),function Xn(T,C){C.valueAccessor.registerOnTouched(()=>{T._pendingTouched=!0,"blur"===T.updateOn&&T._pendingChange&&Fn(T,C),"submit"!==T.updateOn&&T.markAsTouched()})}(T,C),function lr(T,C){if(C.valueAccessor.setDisabledState){const y=A=>{C.valueAccessor.setDisabledState(A)};T.registerOnDisabledChange(y),C._registerOnDestroy(()=>{T._unregisterOnDisabledChange(y)})}}(T,C)}function en(T,C){T.forEach(y=>{y.registerOnValidatorChange&&y.registerOnValidatorChange(C)})}function Li(T,C){const y=function un(T){return T._rawValidators}(T);null!==C.validator?T.setValidators(go(y,C.validator)):"function"==typeof y&&T.setValidators([y]);const A=function dt(T){return T._rawAsyncValidators}(T);null!==C.asyncValidator?T.setAsyncValidators(go(A,C.asyncValidator)):"function"==typeof A&&T.setAsyncValidators([A]);const te=()=>T.updateValueAndValidity();en(C._rawValidators,te),en(C._rawAsyncValidators,te)}function Fn(T,C){T._pendingDirty&&T.markAsDirty(),T.setValue(T._pendingValue,{emitModelToViewChange:!1}),C.viewToModelUpdate(T._pendingValue),T._pendingChange=!1}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const cn={provide:mt,useExisting:(0,a.Gpc)(()=>Je)},Oe=(()=>Promise.resolve())();let Je=(()=>{class T extends mt{constructor(y,A,te){super(),this.callSetDisabledState=te,this.submitted=!1,this._directives=new Set,this.ngSubmit=new a.vpe,this.form=new Jt({},vi(y),$i(A))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(y){Oe.then(()=>{const A=this._findContainer(y.path);y.control=A.registerControl(y.name,y.control),We(y.control,y,this.callSetDisabledState),y.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(y)})}getControl(y){return this.form.get(y.path)}removeControl(y){Oe.then(()=>{const A=this._findContainer(y.path);A&&A.removeControl(y.name),this._directives.delete(y)})}addFormGroup(y){Oe.then(()=>{const A=this._findContainer(y.path),te=new Jt({});(function ei(T,C){Li(T,C)})(te,y),A.registerControl(y.name,te),te.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(y){Oe.then(()=>{const A=this._findContainer(y.path);A&&A.removeControl(y.name)})}getFormGroup(y){return this.form.get(y.path)}updateModel(y,A){Oe.then(()=>{this.form.get(y.path).setValue(A)})}setValue(y){this.control.setValue(y)}onSubmit(y){return this.submitted=!0,function fn(T,C){T._syncPendingControls(),C.forEach(y=>{const A=y.control;"submit"===A.updateOn&&A._pendingChange&&(y.viewToModelUpdate(A._pendingValue),A._pendingChange=!1)})}(this.form,this._directives),this.ngSubmit.emit(y),"dialog"===y?.target?.method}onReset(){this.resetForm()}resetForm(y){this.form.reset(y),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(y){return y.pop(),y.length?this.form.get(y):this.form}}return T.\u0275fac=function(y){return new(y||T)(a.Y36(it,10),a.Y36(Rt,10),a.Y36(J,8))},T.\u0275dir=a.lG2({type:T,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(y,A){1&y&&a.NdJ("submit",function(ze){return A.onSubmit(ze)})("reset",function(){return A.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[a._Bn([cn]),a.qOj]}),T})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Et(T,C){const y=T.indexOf(C);y>-1&&T.splice(y,1)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function sn(T){return"object"==typeof T&&null!==T&&2===Object.keys(T).length&&"value"in T&&"disabled"in T}const wi=class extends Xt{constructor(C=null,y,A){super(oe(y),Ee(A,y)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(C),this._setUpdateStrategy(y),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ze(y)&&(y.nonNullable||y.initialValueIsDefault)&&(this.defaultValue=sn(C)?C.value:C)}setValue(C,y={}){this.value=this._pendingValue=C,this._onChange.length&&!1!==y.emitModelToViewChange&&this._onChange.forEach(A=>A(this.value,!1!==y.emitViewToModelChange)),this.updateValueAndValidity(y)}patchValue(C,y={}){this.setValue(C,y)}reset(C=this.defaultValue,y={}){this._applyFormState(C),this.markAsPristine(y),this.markAsUntouched(y),this.setValue(this.value,y),this._pendingChange=!1}_updateValue(){}_anyControls(C){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(C){this._onChange.push(C)}_unregisterOnChange(C){Et(this._onChange,C)}registerOnDisabledChange(C){this._onDisabledChange.push(C)}_unregisterOnDisabledChange(C){Et(this._onDisabledChange,C)}_forEachChild(C){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(C){sn(C)?(this.value=this._pendingValue=C.value,C.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=C}},Ti={provide:ht,useExisting:(0,a.Gpc)(()=>fi)},kt=(()=>Promise.resolve())();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let fi=(()=>{class T extends ht{constructor(y,A,te,ze,Gt,mn){super(),this._changeDetectorRef=Gt,this.callSetDisabledState=mn,this.control=new wi,this._registered=!1,this.update=new a.vpe,this._parent=y,this._setValidators(A),this._setAsyncValidators(te),this.valueAccessor=function Ft(T,C){if(!C)return null;let y,A,te;return Array.isArray(C),C.forEach(ze=>{ze.constructor===Xe?y=ze:function ft(T){return Object.getPrototypeOf(T.constructor)===U}(ze)?A=ze:te=ze}),te||A||y||null}(0,ze)}ngOnChanges(y){if(this._checkForErrors(),!this._registered||"name"in y){if(this._registered&&(this._checkName(),this.formDirective)){const A=y.name.previousValue;this.formDirective.removeControl({name:A,path:this._getPath(A)})}this._setUpControl()}"isDisabled"in y&&this._updateDisabled(y),function ur(T,C){if(!T.hasOwnProperty("model"))return!1;const y=T.model;return!!y.isFirstChange()||!Object.is(C,y.currentValue)}(y,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(y){this.viewModel=y,this.update.emit(y)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){We(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(y){kt.then(()=>{this.control.setValue(y,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(y){const A=y.isDisabled.currentValue,te=0!==A&&(0,a.D6c)(A);kt.then(()=>{te&&!this.control.disabled?this.control.disable():!te&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(y){return this._parent?function Re(T,C){return[...C.path,T]}(y,this._parent):[y]}}return T.\u0275fac=function(y){return new(y||T)(a.Y36(mt,9),a.Y36(it,10),a.Y36(Rt,10),a.Y36(Z,10),a.Y36(a.sBO,8),a.Y36(J,8))},T.\u0275dir=a.lG2({type:T,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[a._Bn([Ti]),a.qOj,a.TTD]}),T})(),Mn=(()=>{class T{}return T.\u0275fac=function(y){return new(y||T)},T.\u0275dir=a.lG2({type:T,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),T})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Sn={provide:Z,useExisting:(0,a.Gpc)(()=>hi),multi:!0};let hi=(()=>{class T extends U{writeValue(y){this.setProperty("value",y??"")}registerOnChange(y){this.onChange=A=>{y(""==A?null:parseFloat(A))}}}return T.\u0275fac=function(){let C;return function(A){return(C||(C=a.n5z(T)))(A||T)}}(),T.\u0275dir=a.lG2({type:T,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(y,A){1&y&&a.NdJ("input",function(ze){return A.onChange(ze.target.value)})("blur",function(){return A.onTouched()})},features:[a._Bn([Sn]),a.qOj]}),T})(),qo=(()=>{class T{}return T.\u0275fac=function(y){return new(y||T)},T.\u0275mod=a.oAB({type:T}),T.\u0275inj=a.cJS({}),T})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const _o={provide:Z,useExisting:(0,a.Gpc)(()=>io),multi:!0};function Mi(T,C){return null==T?`${C}`:(C&&"object"==typeof C&&(C="Object"),`${T}: ${C}`.slice(0,50))}let io=(()=>{class T extends U{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(y){this._compareWith=y}writeValue(y){this.value=y;const te=Mi(this._getOptionId(y),y);this.setProperty("value",te)}registerOnChange(y){this.onChange=A=>{this.value=this._getOptionValue(A),y(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(y){for(const A of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(A),y))return A;return null}_getOptionValue(y){const A=function fr(T){return T.split(":")[0]}(y);return this._optionMap.has(A)?this._optionMap.get(A):y}}return T.\u0275fac=function(){let C;return function(A){return(C||(C=a.n5z(T)))(A||T)}}(),T.\u0275dir=a.lG2({type:T,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(y,A){1&y&&a.NdJ("change",function(ze){return A.onChange(ze.target.value)})("blur",function(){return A.onTouched()})},inputs:{compareWith:"compareWith"},features:[a._Bn([_o]),a.qOj]}),T})(),Qo=(()=>{class T{constructor(y,A,te){this._element=y,this._renderer=A,this._select=te,this._select&&(this.id=this._select._registerOption())}set ngValue(y){null!=this._select&&(this._select._optionMap.set(this.id,y),this._setElementValue(Mi(this.id,y)),this._select.writeValue(this._select.value))}set value(y){this._setElementValue(y),this._select&&this._select.writeValue(this._select.value)}_setElementValue(y){this._renderer.setProperty(this._element.nativeElement,"value",y)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return T.\u0275fac=function(y){return new(y||T)(a.Y36(a.SBq),a.Y36(a.Qsj),a.Y36(io,9))},T.\u0275dir=a.lG2({type:T,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),T})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Xo={provide:Z,useExisting:(0,a.Gpc)(()=>Ji),multi:!0};function Ki(T,C){return null==T?`${C}`:("string"==typeof C&&(C=`'${C}'`),C&&"object"==typeof C&&(C="Object"),`${T}: ${C}`.slice(0,50))}let Ji=(()=>{class T extends U{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(y){this._compareWith=y}writeValue(y){let A;if(this.value=y,Array.isArray(y)){const te=y.map(ze=>this._getOptionId(ze));A=(ze,Gt)=>{ze._setSelected(te.indexOf(Gt.toString())>-1)}}else A=(te,ze)=>{te._setSelected(!1)};this._optionMap.forEach(A)}registerOnChange(y){this.onChange=A=>{const te=[],ze=A.selectedOptions;if(void 0!==ze){const Gt=ze;for(let mn=0;mn<Gt.length;mn++){const Mr=this._getOptionValue(Gt[mn].value);te.push(Mr)}}else{const Gt=A.options;for(let mn=0;mn<Gt.length;mn++){const gr=Gt[mn];if(gr.selected){const Mr=this._getOptionValue(gr.value);te.push(Mr)}}}this.value=te,y(te)}}_registerOption(y){const A=(this._idCounter++).toString();return this._optionMap.set(A,y),A}_getOptionId(y){for(const A of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(A)._value,y))return A;return null}_getOptionValue(y){const A=function ws(T){return T.split(":")[0]}(y);return this._optionMap.has(A)?this._optionMap.get(A)._value:y}}return T.\u0275fac=function(){let C;return function(A){return(C||(C=a.n5z(T)))(A||T)}}(),T.\u0275dir=a.lG2({type:T,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(y,A){1&y&&a.NdJ("change",function(ze){return A.onChange(ze.target)})("blur",function(){return A.onTouched()})},inputs:{compareWith:"compareWith"},features:[a._Bn([Xo]),a.qOj]}),T})(),es=(()=>{class T{constructor(y,A,te){this._element=y,this._renderer=A,this._select=te,this._select&&(this.id=this._select._registerOption(this))}set ngValue(y){null!=this._select&&(this._value=y,this._setElementValue(Ki(this.id,y)),this._select.writeValue(this._select.value))}set value(y){this._select?(this._value=y,this._setElementValue(Ki(this.id,y)),this._select.writeValue(this._select.value)):this._setElementValue(y)}_setElementValue(y){this._renderer.setProperty(this._element.nativeElement,"value",y)}_setSelected(y){this._renderer.setProperty(this._element.nativeElement,"selected",y)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return T.\u0275fac=function(y){return new(y||T)(a.Y36(a.SBq),a.Y36(a.Qsj),a.Y36(Ji,9))},T.\u0275dir=a.lG2({type:T,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),T})(),Js=(()=>{class T{}return T.\u0275fac=function(y){return new(y||T)},T.\u0275mod=a.oAB({type:T}),T.\u0275inj=a.cJS({imports:[qo]}),T})(),wo=(()=>{class T{static withConfig(y){return{ngModule:T,providers:[{provide:J,useValue:y.callSetDisabledState??me}]}}}return T.\u0275fac=function(y){return new(y||T)},T.\u0275mod=a.oAB({type:T}),T.\u0275inj=a.cJS({imports:[Js]}),T})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4497:(Qe,De,F)=>{F.d(De,{Dx:()=>yn,b2:()=>ar,q6:()=>ai});var a=F(4666),L=F(2135);
/**
     * @license Angular v15.0.4
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Q extends a.w_{constructor(){super(...arguments),this.supportsDOMEvents=!0}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class ge extends Q{static makeCurrent(){(0,a.HT)(new ge)}onAndCancel(H,k,J){return H.addEventListener(k,J,!1),()=>{H.removeEventListener(k,J,!1)}}dispatchEvent(H,k){H.dispatchEvent(k)}remove(H){H.parentNode&&H.parentNode.removeChild(H)}createElement(H,k){return(k=k||this.getDefaultDocument()).createElement(H)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(H){return H.nodeType===Node.ELEMENT_NODE}isShadowRoot(H){return H instanceof DocumentFragment}getGlobalEventTarget(H,k){return"window"===k?window:"document"===k?H:"body"===k?H.body:null}getBaseHref(H){const k=function ie(){return ve=ve||document.querySelector("base"),ve?ve.getAttribute("href"):null}();return null==k?null:function le(K){ye=ye||document.createElement("a"),ye.setAttribute("href",K);const H=ye.pathname;return"/"===H.charAt(0)?H:`/${H}`}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(k)}resetBaseElement(){ve=null}getUserAgent(){return window.navigator.userAgent}getCookie(H){return(0,a.Mx)(document.cookie,H)}}let ye,ve=null;const X=new L.OlP("TRANSITION_ID"),U=[{provide:L.ip1,useFactory:function G(K,H,k){return()=>{k.get(L.CZH).donePromise.then(()=>{const J=(0,a.q)(),me=H.querySelectorAll(`style[ng-transition="${K}"]`);for(let Re=0;Re<me.length;Re++)J.remove(me[Re])})}},deps:[X,a.K0,L.zs3],multi:!0}];let ue=(()=>{class K{build(){return new XMLHttpRequest}}return K.\u0275fac=function(k){return new(k||K)},K.\u0275prov=L.Yz7({token:K,factory:K.\u0275fac}),K})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const fe=new L.OlP("EventManagerPlugins");let He=(()=>{class K{constructor(k,J){this._zone=J,this._eventNameToPlugin=new Map,k.forEach(me=>me.manager=this),this._plugins=k.slice().reverse()}addEventListener(k,J,me){return this._findPluginFor(J).addEventListener(k,J,me)}addGlobalEventListener(k,J,me){return this._findPluginFor(J).addGlobalEventListener(k,J,me)}getZone(){return this._zone}_findPluginFor(k){const J=this._eventNameToPlugin.get(k);if(J)return J;const me=this._plugins;for(let Re=0;Re<me.length;Re++){const We=me[Re];if(We.supports(k))return this._eventNameToPlugin.set(k,We),We}throw new Error(`No event manager plugin found for event ${k}`)}}return K.\u0275fac=function(k){return new(k||K)(L.LFG(fe),L.LFG(L.R0b))},K.\u0275prov=L.Yz7({token:K,factory:K.\u0275fac}),K})();class be{constructor(H){this._doc=H}addGlobalEventListener(H,k,J){const me=(0,a.q)().getGlobalEventTarget(this._doc,H);if(!me)throw new Error(`Unsupported event target ${me} for event ${k}`);return this.addEventListener(me,k,J)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Te=(()=>{class K{constructor(){this._stylesSet=new Set}addStyles(k){const J=new Set;k.forEach(me=>{this._stylesSet.has(me)||(this._stylesSet.add(me),J.add(me))}),this.onStylesAdded(J)}onStylesAdded(k){}getAllStyles(){return Array.from(this._stylesSet)}}return K.\u0275fac=function(k){return new(k||K)},K.\u0275prov=L.Yz7({token:K,factory:K.\u0275fac}),K})(),Xe=(()=>{class K extends Te{constructor(k){super(),this._doc=k,this._hostNodes=new Map,this._hostNodes.set(k.head,[])}_addStylesToHost(k,J,me){k.forEach(Re=>{const We=this._doc.createElement("style");We.textContent=Re,me.push(J.appendChild(We))})}addHost(k){const J=[];this._addStylesToHost(this._stylesSet,k,J),this._hostNodes.set(k,J)}removeHost(k){const J=this._hostNodes.get(k);J&&J.forEach(ut),this._hostNodes.delete(k)}onStylesAdded(k){this._hostNodes.forEach((J,me)=>{this._addStylesToHost(k,me,J)})}ngOnDestroy(){this._hostNodes.forEach(k=>k.forEach(ut))}}return K.\u0275fac=function(k){return new(k||K)(L.LFG(a.K0))},K.\u0275prov=L.Yz7({token:K,factory:K.\u0275fac}),K})();function ut(K){(0,a.q)().remove(K)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Me={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},Kt=/%COMP%/g;function Le(K,H){return H.flat(100).map(k=>k.replace(Kt,K))}function qe(K){return H=>{if("__ngUnwrap__"===H)return K;!1===K(H)&&(H.preventDefault(),H.returnValue=!1)}}let Be=(()=>{class K{constructor(k,J,me){this.eventManager=k,this.sharedStylesHost=J,this.appId=me,this.rendererByCompId=new Map,this.defaultRenderer=new rn(k)}createRenderer(k,J){if(!k||!J)return this.defaultRenderer;switch(J.encapsulation){case L.ifc.Emulated:{let me=this.rendererByCompId.get(J.id);return me||(me=new Gn(this.eventManager,this.sharedStylesHost,J,this.appId),this.rendererByCompId.set(J.id,me)),me.applyToHost(k),me}case 1:case L.ifc.ShadowDom:return new zn(this.eventManager,this.sharedStylesHost,k,J);default:if(!this.rendererByCompId.has(J.id)){const me=Le(J.id,J.styles);this.sharedStylesHost.addStyles(me),this.rendererByCompId.set(J.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return K.\u0275fac=function(k){return new(k||K)(L.LFG(He),L.LFG(Xe),L.LFG(L.AFp))},K.\u0275prov=L.Yz7({token:K,factory:K.\u0275fac}),K})();class rn{constructor(H){this.eventManager=H,this.data=Object.create(null),this.destroyNode=null}destroy(){}createElement(H,k){return k?document.createElementNS(Me[k]||k,H):document.createElement(H)}createComment(H){return document.createComment(H)}createText(H){return document.createTextNode(H)}appendChild(H,k){(_i(H)?H.content:H).appendChild(k)}insertBefore(H,k,J){H&&(_i(H)?H.content:H).insertBefore(k,J)}removeChild(H,k){H&&H.removeChild(k)}selectRootElement(H,k){let J="string"==typeof H?document.querySelector(H):H;if(!J)throw new Error(`The selector "${H}" did not match any elements`);return k||(J.textContent=""),J}parentNode(H){return H.parentNode}nextSibling(H){return H.nextSibling}setAttribute(H,k,J,me){if(me){k=me+":"+k;const Re=Me[me];Re?H.setAttributeNS(Re,k,J):H.setAttribute(k,J)}else H.setAttribute(k,J)}removeAttribute(H,k,J){if(J){const me=Me[J];me?H.removeAttributeNS(me,k):H.removeAttribute(`${J}:${k}`)}else H.removeAttribute(k)}addClass(H,k){H.classList.add(k)}removeClass(H,k){H.classList.remove(k)}setStyle(H,k,J,me){me&(L.JOm.DashCase|L.JOm.Important)?H.style.setProperty(k,J,me&L.JOm.Important?"important":""):H.style[k]=J}removeStyle(H,k,J){J&L.JOm.DashCase?H.style.removeProperty(k):H.style[k]=""}setProperty(H,k,J){H[k]=J}setValue(H,k){H.nodeValue=k}listen(H,k,J){return"string"==typeof H?this.eventManager.addGlobalEventListener(H,k,qe(J)):this.eventManager.addEventListener(H,k,qe(J))}}function _i(K){return"TEMPLATE"===K.tagName&&void 0!==K.content}class Gn extends rn{constructor(H,k,J,me){super(H),this.component=J;const Re=Le(me+"-"+J.id,J.styles);k.addStyles(Re),this.contentAttr=function xt(K){return"_ngcontent-%COMP%".replace(Kt,K)}(me+"-"+J.id),this.hostAttr=function we(K){return"_nghost-%COMP%".replace(Kt,K)}(me+"-"+J.id)}applyToHost(H){super.setAttribute(H,this.hostAttr,"")}createElement(H,k){const J=super.createElement(H,k);return super.setAttribute(J,this.contentAttr,""),J}}class zn extends rn{constructor(H,k,J,me){super(H),this.sharedStylesHost=k,this.hostEl=J,this.shadowRoot=J.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const Re=Le(me.id,me.styles);for(let We=0;We<Re.length;We++){const Ye=document.createElement("style");Ye.textContent=Re[We],this.shadowRoot.appendChild(Ye)}}nodeOrShadowRoot(H){return H===this.hostEl?this.shadowRoot:H}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(H,k){return super.appendChild(this.nodeOrShadowRoot(H),k)}insertBefore(H,k,J){return super.insertBefore(this.nodeOrShadowRoot(H),k,J)}removeChild(H,k){return super.removeChild(this.nodeOrShadowRoot(H),k)}parentNode(H){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(H)))}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Jn=(()=>{class K extends be{constructor(k){super(k)}supports(k){return!0}addEventListener(k,J,me){return k.addEventListener(J,me,!1),()=>this.removeEventListener(k,J,me)}removeEventListener(k,J,me){return k.removeEventListener(J,me)}}return K.\u0275fac=function(k){return new(k||K)(L.LFG(a.K0))},K.\u0275prov=L.Yz7({token:K,factory:K.\u0275fac}),K})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Fi=["alt","control","meta","shift"],Nn={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},si={alt:K=>K.altKey,control:K=>K.ctrlKey,meta:K=>K.metaKey,shift:K=>K.shiftKey};let vi=(()=>{class K extends be{constructor(k){super(k)}supports(k){return null!=K.parseEventName(k)}addEventListener(k,J,me){const Re=K.parseEventName(J),We=K.eventCallback(Re.fullKey,me,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,a.q)().onAndCancel(k,Re.domEventName,We))}static parseEventName(k){const J=k.toLowerCase().split("."),me=J.shift();if(0===J.length||"keydown"!==me&&"keyup"!==me)return null;const Re=K._normalizeKey(J.pop());let We="",Ye=J.indexOf("code");if(Ye>-1&&(J.splice(Ye,1),We="code."),Fi.forEach(lr=>{const Li=J.indexOf(lr);Li>-1&&(J.splice(Li,1),We+=lr+".")}),We+=Re,0!=J.length||0===Re.length)return null;const en={};return en.domEventName=me,en.fullKey=We,en}static matchEventFullKeyCode(k,J){let me=Nn[k.key]||k.key,Re="";return J.indexOf("code.")>-1&&(me=k.code,Re="code."),!(null==me||!me)&&(me=me.toLowerCase()," "===me?me="space":"."===me&&(me="dot"),Fi.forEach(We=>{We!==me&&(0,si[We])(k)&&(Re+=We+".")}),Re+=me,Re===J)}static eventCallback(k,J,me){return Re=>{K.matchEventFullKeyCode(Re,k)&&me.runGuarded(()=>J(Re))}}static _normalizeKey(k){return"esc"===k?"escape":k}}return K.\u0275fac=function(k){return new(k||K)(L.LFG(a.K0))},K.\u0275prov=L.Yz7({token:K,factory:K.\u0275fac}),K})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ai=(0,L.eFA)(L._c5,"browser",[{provide:L.Lbi,useValue:a.bD},{provide:L.g9A,useValue:function or(){ge.makeCurrent()},multi:!0},{provide:a.K0,useFactory:function sr(){return(0,L.RDi)(document),document},deps:[]}]),mt=new L.OlP(""),ht=[{provide:L.rWj,useClass:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Z{addToWindow(H){L.dqk.getAngularTestability=(J,me=!0)=>{const Re=H.findTestabilityInTree(J,me);if(null==Re)throw new Error("Could not find testability for element.");return Re},L.dqk.getAllAngularTestabilities=()=>H.getAllTestabilities(),L.dqk.getAllAngularRootElements=()=>H.getAllRootElements(),L.dqk.frameworkStabilizers||(L.dqk.frameworkStabilizers=[]),L.dqk.frameworkStabilizers.push(J=>{const me=L.dqk.getAllAngularTestabilities();let Re=me.length,We=!1;const Ye=function(en){We=We||en,Re--,0==Re&&J(We)};me.forEach(function(en){en.whenStable(Ye)})})}findTestabilityInTree(H,k,J){return null==k?null:H.getTestability(k)??(J?(0,a.q)().isShadowRoot(k)?this.findTestabilityInTree(H,k.host,!0):this.findTestabilityInTree(H,k.parentElement,!0):null)}},deps:[]},{provide:L.lri,useClass:L.dDg,deps:[L.R0b,L.eoX,L.rWj]},{provide:L.dDg,useClass:L.dDg,deps:[L.R0b,L.eoX,L.rWj]}],Pn=[{provide:L.zSh,useValue:"root"},{provide:L.qLn,useFactory:function Pt(){return new L.qLn},deps:[]},{provide:fe,useClass:Jn,multi:!0,deps:[a.K0,L.R0b,L.Lbi]},{provide:fe,useClass:vi,multi:!0,deps:[a.K0]},{provide:Be,useClass:Be,deps:[He,Xe,L.AFp]},{provide:L.FYo,useExisting:Be},{provide:Te,useExisting:Xe},{provide:Xe,useClass:Xe,deps:[a.K0]},{provide:He,useClass:He,deps:[fe,L.R0b]},{provide:a.JF,useClass:ue,deps:[]},[]];let ar=(()=>{class K{constructor(k){}static withServerTransition(k){return{ngModule:K,providers:[{provide:L.AFp,useValue:k.appId},{provide:X,useExisting:L.AFp},U]}}}return K.\u0275fac=function(k){return new(k||K)(L.LFG(mt,12))},K.\u0275mod=L.oAB({type:K}),K.\u0275inj=L.cJS({providers:[...Pn,...ht],imports:[a.ez,L.hGG]}),K})(),yn=(()=>{class K{constructor(k){this._doc=k}getTitle(){return this._doc.title}setTitle(k){this._doc.title=k||""}}return K.\u0275fac=function(k){return new(k||K)(L.LFG(a.K0))},K.\u0275prov=L.Yz7({token:K,factory:function(k){let J=null;return J=k?new k:
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
function Ge(){return new yn((0,L.LFG)(a.K0))}(),J},providedIn:"root"}),K})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */typeof window<"u"&&window}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,4326:(Qe,De,F)=>{F.d(De,{rH:()=>xo,Bz:()=>Kr,lC:()=>pr});var a=F(2135),L=F(4858),Q=F(4139),ge=F(4505);const ie=(()=>{function p(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return p.prototype=Object.create(Error.prototype),p})();var ye=F(9193),le=F(7283),X=F(7473),G=F(6439);function U(p){return new X.y(h=>{let d;try{d=p()}catch(E){return void h.error(E)}return(d?(0,L.D)(d):(0,G.c)()).subscribe(h)})}var Z=F(6800),ue=F(6587),fe=F(4483),He=F(7806),be=F(4666),Te=F(6942),Xe=F(9095),ut=F(3910),Me=F(5722),Kt=F(9151),it=F(522),Rt=F(14);function Kn(p=null){return h=>h.lift(new je(p))}class je{constructor(h){this.defaultValue=h}call(h,d){return d.subscribe(new xt(h,this.defaultValue))}}class xt extends Rt.L{constructor(h,d){super(h),this.defaultValue=d,this.isEmpty=!0}_next(h){this.isEmpty=!1,this.destination.next(h)}_complete(){this.isEmpty&&this.destination.next(this.defaultValue),this.destination.complete()}}function we(p=Ct){return h=>h.lift(new Le(p))}class Le{constructor(h){this.errorFactory=h}call(h,d){return d.subscribe(new qe(h,this.errorFactory))}}class qe extends Rt.L{constructor(h,d){super(h),this.errorFactory=d,this.hasValue=!1}_next(h){this.hasValue=!0,this.destination.next(h)}_complete(){if(this.hasValue)return this.destination.complete();{let h;try{h=this.errorFactory()}catch(d){h=d}this.destination.error(h)}}}function Ct(){return new ie}var Be=F(1356);function rn(p,h){const d=arguments.length>=2;return v=>v.pipe(p?(0,Kt.h)((E,S)=>p(E,S,v)):Be.y,(0,ut.q)(1),d?Kn(h):we(()=>new ie))}var gt=F(1133),Lt=F(8759),_i=F(2831);function Gn(p){return function(d){const v=new zn(p),E=d.lift(v);return v.caught=E}}class zn{constructor(h){this.selector=h}call(h,d){return d.subscribe(new Jn(h,this.selector,this.caught))}}class Jn extends _i.Ds{constructor(h,d,v){super(h),this.selector=d,this.caught=v}error(h){if(!this.isStopped){let d;try{d=this.selector(h,this.caught)}catch(S){return void super.error(S)}this._unsubscribeAndRecycle();const v=new _i.IY(this);this.add(v);const E=(0,_i.ft)(d,v);E!==v&&this.add(E)}}}function Fi(p,h){let d=!1;return arguments.length>=2&&(d=!0),function(E){return E.lift(new Nn(p,h,d))}}class Nn{constructor(h,d,v=!1){this.accumulator=h,this.seed=d,this.hasSeed=v}call(h,d){return d.subscribe(new si(h,this.accumulator,this.seed,this.hasSeed))}}class si extends Rt.L{constructor(h,d,v,E){super(h),this.accumulator=d,this._seed=v,this.hasSeed=E,this.index=0}get seed(){return this._seed}set seed(h){this.hasSeed=!0,this._seed=h}_next(h){if(this.hasSeed)return this._tryNext(h);this.seed=h,this.destination.next(h)}_tryNext(h){const d=this.index++;let v;try{v=this.accumulator(this.seed,h,d)}catch(E){this.destination.error(E)}this.seed=v,this.destination.next(v)}}var vi=F(2846);function on(p){return function(d){return 0===p?(0,G.c)():d.lift(new $i(p))}}class $i{constructor(h){if(this.total=h,this.total<0)throw new vi.W}call(h,d){return d.subscribe(new go(h,this.total))}}class go extends Rt.L{constructor(h,d){super(h),this.total=d,this.ring=new Array,this.count=0}_next(h){const d=this.ring,v=this.total,E=this.count++;d.length<v?d.push(h):d[E%v]=h}_complete(){const h=this.destination;let d=this.count;if(d>0){const v=this.count>=this.total?this.total:this.count,E=this.ring;for(let S=0;S<v;S++){const R=d++%v;h.next(E[R])}}h.complete()}}function un(p,h){const d=arguments.length>=2;return v=>v.pipe(p?(0,Kt.h)((E,S)=>p(E,S,v)):Be.y,on(1),d?Kn(h):we(()=>new ie))}class or{constructor(h,d){this.predicate=h,this.inclusive=d}call(h,d){return d.subscribe(new Pt(h,this.predicate,this.inclusive))}}class Pt extends Rt.L{constructor(h,d,v){super(h),this.predicate=d,this.inclusive=v,this.index=0}_next(h){const d=this.destination;let v;try{v=this.predicate(h,this.index++)}catch(E){return void d.error(E)}this.nextOrComplete(h,v)}nextOrComplete(h,d){const v=this.destination;Boolean(d)?v.next(h):(this.inclusive&&v.next(h),v.complete())}}class Qt{constructor(h){this.value=h}call(h,d){return d.subscribe(new ai(h,this.value))}}class ai extends Rt.L{constructor(h,d){super(h),this.value=d}_next(h){this.destination.next(this.value)}}var mt=F(6957);function ht(p){return h=>h.lift(new Pn(p))}class Pn{constructor(h){this.callback=h}call(h,d){return d.subscribe(new ar(h,this.callback))}}class ar extends Rt.L{constructor(h,d){super(h),this.add(new mt.w(d))}}var wr=F(8331),qn=F(6675),ki=F(4497);
/**
     * @license Angular v15.0.4
     * (c) 2010-2022 Google LLC. https://angular.io/
     * License: MIT
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Ge="primary",yn=Symbol("RouteTitle");class Ht{constructor(h){this.params=h||{}}has(h){return Object.prototype.hasOwnProperty.call(this.params,h)}get(h){if(this.has(h)){const d=this.params[h];return Array.isArray(d)?d[0]:d}return null}getAll(h){if(this.has(h)){const d=this.params[h];return Array.isArray(d)?d:[d]}return[]}get keys(){return Object.keys(this.params)}}function Ve(p){return new Ht(p)}function he(p,h,d){const v=d.path.split("/");if(v.length>p.length||"full"===d.pathMatch&&(h.hasChildren()||v.length<p.length))return null;const E={};for(let S=0;S<v.length;S++){const R=v[S],Y=p[S];if(R.startsWith(":"))E[R.substring(1)]=Y;else if(R!==Y.path)return null}return{consumed:p.slice(0,v.length),posParams:E}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function It(p,h){const d=p?Object.keys(p):void 0,v=h?Object.keys(h):void 0;if(!d||!v||d.length!=v.length)return!1;let E;for(let S=0;S<d.length;S++)if(E=d[S],!wt(p[E],h[E]))return!1;return!0}function wt(p,h){if(Array.isArray(p)&&Array.isArray(h)){if(p.length!==h.length)return!1;const d=[...p].sort(),v=[...h].sort();return d.every((E,S)=>v[S]===E)}return p===h}function li(p){return Array.prototype.concat.apply([],p)}function gn(p){return p.length>0?p[p.length-1]:null}function ot(p,h){for(const d in p)p.hasOwnProperty(d)&&h(p[d],d)}function bi(p){return(0,a.CqO)(p)?p:(0,a.QGY)(p)?(0,L.D)(Promise.resolve(p)):(0,Q.of)(p)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const _t=!1,Di={exact:function se(p,h,d){if(!pt(p.segments,h.segments)||!oe(p.segments,h.segments,d)||p.numberOfChildren!==h.numberOfChildren)return!1;for(const v in h.children)if(!p.children[v]||!se(p.children[v],h.children[v],d))return!1;return!0},subset:j},Zn={exact:function dn(p,h){return It(p,h)},subset:function V(p,h){return Object.keys(h).length<=Object.keys(p).length&&Object.keys(h).every(d=>wt(p[d],h[d]))},ignored:()=>!0};function ci(p,h,d){return Di[d.paths](p.root,h.root,d.matrixParams)&&Zn[d.queryParams](p.queryParams,h.queryParams)&&!("exact"===d.fragment&&p.fragment!==h.fragment)}function j(p,h,d){return de(p,h,h.segments,d)}function de(p,h,d,v){if(p.segments.length>d.length){const E=p.segments.slice(0,d.length);return!(!pt(E,d)||h.hasChildren()||!oe(E,d,v))}if(p.segments.length===d.length){if(!pt(p.segments,d)||!oe(p.segments,d,v))return!1;for(const E in h.children)if(!p.children[E]||!j(p.children[E],h.children[E],v))return!1;return!0}{const E=d.slice(0,p.segments.length),S=d.slice(p.segments.length);return!!(pt(p.segments,E)&&oe(p.segments,E,v)&&p.children[Ge])&&de(p.children[Ge],h,S,v)}}function oe(p,h,d){return h.every((v,E)=>Zn[d](p[E].parameters,v.parameters))}class Ae{constructor(h=new Ee([],{}),d={},v=null){this.root=h,this.queryParams=d,this.fragment=v}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Ve(this.queryParams)),this._queryParamMap}toString(){return Bt.serialize(this)}}class Ee{constructor(h,d){this.segments=h,this.children=d,this.parent=null,ot(d,(v,E)=>v.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return K(this)}}class vt{constructor(h,d){this.path=h,this.parameters=d}get parameterMap(){return this._parameterMap||(this._parameterMap=Ve(this.parameters)),this._parameterMap}toString(){return en(this)}}function pt(p,h){return p.length===h.length&&p.every((d,v)=>d.path===h[v].path)}let Xt=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:function(){return new Jt},providedIn:"root"}),p})();class Jt{parse(h){const d=new Ci(h);return new Ae(d.parseRootSegment(),d.parseQueryParams(),d.parseFragment())}serialize(h){const d=`/${H(h.root,!0)}`,v=function Li(p){const h=Object.keys(p).map(d=>{const v=p[d];return Array.isArray(v)?v.map(E=>`${J(d)}=${J(E)}`).join("&"):`${J(d)}=${J(v)}`}).filter(d=>!!d);return h.length?`?${h.join("&")}`:""}(h.queryParams);return`${d}${v}${"string"==typeof h.fragment?`#${function me(p){return encodeURI(p)}(h.fragment)}`:""}`}}const Bt=new Jt;function K(p){return p.segments.map(h=>en(h)).join("/")}function H(p,h){if(!p.hasChildren())return K(p);if(h){const d=p.children[Ge]?H(p.children[Ge],!1):"",v=[];return ot(p.children,(E,S)=>{S!==Ge&&v.push(`${S}:${H(E,!1)}`)}),v.length>0?`${d}(${v.join("//")})`:d}{const d=function Qn(p,h){let d=[];return ot(p.children,(v,E)=>{E===Ge&&(d=d.concat(h(v,E)))}),ot(p.children,(v,E)=>{E!==Ge&&(d=d.concat(h(v,E)))}),d}(p,(v,E)=>E===Ge?[H(p.children[Ge],!1)]:[`${E}:${H(v,!1)}`]);return 1===Object.keys(p.children).length&&null!=p.children[Ge]?`${K(p)}/${d[0]}`:`${K(p)}/(${d.join("//")})`}}function k(p){return encodeURIComponent(p).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function J(p){return k(p).replace(/%3B/gi,";")}function Re(p){return k(p).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function We(p){return decodeURIComponent(p)}function Ye(p){return We(p.replace(/\+/g,"%20"))}function en(p){return`${Re(p.path)}${function lr(p){return Object.keys(p).map(h=>`;${Re(h)}=${Re(p[h])}`).join("")}(p.parameters)}`}const Gi=/^[^\/()?;=#]+/;function qt(p){const h=p.match(Gi);return h?h[0]:""}const Xn=/^[^=?&#]+/,zi=/^[^&#]+/;class Ci{constructor(h){this.url=h,this.remaining=h}parseRootSegment(){return this.consumeOptional("/"),""===this.remaining||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ee([],{}):new Ee([],this.parseChildren())}parseQueryParams(){const h={};if(this.consumeOptional("?"))do{this.parseQueryParam(h)}while(this.consumeOptional("&"));return h}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(""===this.remaining)return{};this.consumeOptional("/");const h=[];for(this.peekStartsWith("(")||h.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),h.push(this.parseSegment());let d={};this.peekStartsWith("/(")&&(this.capture("/"),d=this.parseParens(!0));let v={};return this.peekStartsWith("(")&&(v=this.parseParens(!1)),(h.length>0||Object.keys(d).length>0)&&(v[Ge]=new Ee(h,d)),v}parseSegment(){const h=qt(this.remaining);if(""===h&&this.peekStartsWith(";"))throw new a.vHH(4009,_t);return this.capture(h),new vt(We(h),this.parseMatrixParams())}parseMatrixParams(){const h={};for(;this.consumeOptional(";");)this.parseParam(h);return h}parseParam(h){const d=qt(this.remaining);if(!d)return;this.capture(d);let v="";if(this.consumeOptional("=")){const E=qt(this.remaining);E&&(v=E,this.capture(v))}h[We(d)]=We(v)}parseQueryParam(h){const d=function Fn(p){const h=p.match(Xn);return h?h[0]:""}(this.remaining);if(!d)return;this.capture(d);let v="";if(this.consumeOptional("=")){const R=function ei(p){const h=p.match(zi);return h?h[0]:""}(this.remaining);R&&(v=R,this.capture(v))}const E=Ye(d),S=Ye(v);if(h.hasOwnProperty(E)){let R=h[E];Array.isArray(R)||(R=[R],h[E]=R),R.push(S)}else h[E]=S}parseParens(h){const d={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const v=qt(this.remaining),E=this.remaining[v.length];if("/"!==E&&")"!==E&&";"!==E)throw new a.vHH(4010,_t);let S;v.indexOf(":")>-1?(S=v.slice(0,v.indexOf(":")),this.capture(S),this.capture(":")):h&&(S=Ge);const R=this.parseChildren();d[S]=1===Object.keys(R).length?R[Ge]:new Ee([],R),this.consumeOptional("//")}return d}peekStartsWith(h){return this.remaining.startsWith(h)}consumeOptional(h){return!!this.peekStartsWith(h)&&(this.remaining=this.remaining.substring(h.length),!0)}capture(h){if(!this.consumeOptional(h))throw new a.vHH(4011,_t)}}function cr(p){return p.segments.length>0?new Ee([],{[Ge]:p}):p}function ui(p){const h={};for(const v of Object.keys(p.children)){const S=ui(p.children[v]);(S.segments.length>0||S.hasChildren())&&(h[v]=S)}return function Er(p){if(1===p.numberOfChildren&&p.children[Ge]){const h=p.children[Ge];return new Ee(p.segments.concat(h.segments),h.children)}return p}(new Ee(p.segments,h))}function Bi(p){return p instanceof Ae}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Ft(p,h,d,v,E){if(0===d.length)return cn(h.root,h.root,h.root,v,E);const S=function Et(p){if("string"==typeof p[0]&&1===p.length&&"/"===p[0])return new Je(!0,0,p);let h=0,d=!1;const v=p.reduce((E,S,R)=>{if("object"==typeof S&&null!=S){if(S.outlets){const Y={};return ot(S.outlets,(_e,ke)=>{Y[ke]="string"==typeof _e?_e.split("/"):_e}),[...E,{outlets:Y}]}if(S.segmentPath)return[...E,S.segmentPath]}return"string"!=typeof S?[...E,S]:0===R?(S.split("/").forEach((Y,_e)=>{0==_e&&"."===Y||(0==_e&&""===Y?d=!0:".."===Y?h++:""!=Y&&E.push(Y))}),E):[...E,S]},[]);return new Je(d,h,v)}(d);return S.toRoot()?cn(h.root,h.root,new Ee([],{}),v,E):function R(_e){const ke=function bn(p,h,d,v){if(p.isAbsolute)return new sn(h.root,!0,0);if(-1===v)return new sn(d,d===h.root,0);return function di(p,h,d){let v=p,E=h,S=d;for(;S>E;){if(S-=E,v=v.parent,!v)throw new a.vHH(4005,!1);E=v.segments.length}return new sn(v,!1,E-S)}(d,v+(ti(p.commands[0])?0:1),p.numberOfDoubleDots)}(S,h,p.snapshot?._urlSegment,_e),Ue=ke.processChildren?Yi(ke.segmentGroup,ke.index,S.commands):Wi(ke.segmentGroup,ke.index,S.commands);return cn(h.root,ke.segmentGroup,Ue,v,E)}(p.snapshot?._lastPathIndex)}function ti(p){return"object"==typeof p&&null!=p&&!p.outlets&&!p.segmentPath}function Vt(p){return"object"==typeof p&&null!=p&&p.outlets}function cn(p,h,d,v,E){let R,S={};v&&ot(v,(_e,ke)=>{S[ke]=Array.isArray(_e)?_e.map(Ue=>`${Ue}`):`${_e}`}),R=p===h?d:Oe(p,h,d);const Y=cr(ui(R));return new Ae(Y,S,E)}function Oe(p,h,d){const v={};return ot(p.children,(E,S)=>{v[S]=E===h?d:Oe(E,h,d)}),new Ee(p.segments,v)}class Je{constructor(h,d,v){if(this.isAbsolute=h,this.numberOfDoubleDots=d,this.commands=v,h&&v.length>0&&ti(v[0]))throw new a.vHH(4003,!1);const E=v.find(Vt);if(E&&E!==gn(v))throw new a.vHH(4004,!1)}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class sn{constructor(h,d,v){this.segmentGroup=h,this.processChildren=d,this.index=v}}function Wi(p,h,d){if(p||(p=new Ee([],{})),0===p.segments.length&&p.hasChildren())return Yi(p,h,d);const v=function nt(p,h,d){let v=0,E=h;const S={match:!1,pathIndex:0,commandIndex:0};for(;E<p.segments.length;){if(v>=d.length)return S;const R=p.segments[E],Y=d[v];if(Vt(Y))break;const _e=`${Y}`,ke=v<d.length-1?d[v+1]:null;if(E>0&&void 0===_e)break;if(_e&&ke&&"object"==typeof ke&&void 0===ke.outlets){if(!Ti(_e,ke,R))return S;v+=2}else{if(!Ti(_e,{},R))return S;v++}E++}return{match:!0,pathIndex:E,commandIndex:v}}(p,h,d),E=d.slice(v.commandIndex);if(v.match&&v.pathIndex<p.segments.length){const S=new Ee(p.segments.slice(0,v.pathIndex),{});return S.children[Ge]=new Ee(p.segments.slice(v.pathIndex),p.children),Yi(S,0,E)}return v.match&&0===E.length?new Ee(p.segments,{}):v.match&&!p.hasChildren()?Xr(p,h,d):v.match?Yi(p,0,E):Xr(p,h,d)}function Yi(p,h,d){if(0===d.length)return new Ee(p.segments,{});{const v=function Ut(p){return Vt(p[0])?p[0].outlets:{[Ge]:p}}(d),E={};return ot(v,(S,R)=>{"string"==typeof S&&(S=[S]),null!==S&&(E[R]=Wi(p.children[R],h,S))}),ot(p.children,(S,R)=>{void 0===v[R]&&(E[R]=S)}),new Ee(p.segments,E)}}function Xr(p,h,d){const v=p.segments.slice(0,h);let E=0;for(;E<d.length;){const S=d[E];if(Vt(S)){const _e=Dn(S.outlets);return new Ee(v,_e)}if(0===E&&ti(d[0])){v.push(new vt(p.segments[h].path,Ei(d[0]))),E++;continue}const R=Vt(S)?S.outlets[Ge]:`${S}`,Y=E<d.length-1?d[E+1]:null;R&&Y&&ti(Y)?(v.push(new vt(R,Ei(Y))),E+=2):(v.push(new vt(R,{})),E++)}return new Ee(v,{})}function Dn(p){const h={};return ot(p,(d,v)=>{"string"==typeof d&&(d=[d]),null!==d&&(h[v]=Xr(new Ee([],{}),0,d))}),h}function Ei(p){const h={};return ot(p,(d,v)=>h[v]=`${d}`),h}function Ti(p,h,d){return p==d.path&&It(h,d.parameters)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class kt{constructor(h,d){this.id=h,this.url=d}}class fi extends kt{constructor(h,d,v="imperative",E=null){super(h,d),this.type=0,this.navigationTrigger=v,this.restoredState=E}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}}class Mn extends kt{constructor(h,d,v){super(h,d),this.urlAfterRedirects=v,this.type=1}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}}class Sn extends kt{constructor(h,d,v,E){super(h,d),this.reason=v,this.code=E,this.type=2}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}}class hi extends kt{constructor(h,d,v,E){super(h,d),this.error=v,this.target=E,this.type=3}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}}class mo extends kt{constructor(h,d,v,E){super(h,d),this.urlAfterRedirects=v,this.state=E,this.type=4}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class $t extends kt{constructor(h,d,v,E){super(h,d),this.urlAfterRedirects=v,this.state=E,this.type=7}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class qo extends kt{constructor(h,d,v,E,S){super(h,d),this.urlAfterRedirects=v,this.state=E,this.shouldActivate=S,this.type=8}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}}class eo extends kt{constructor(h,d,v,E){super(h,d),this.urlAfterRedirects=v,this.state=E,this.type=5}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class to extends kt{constructor(h,d,v,E){super(h,d),this.urlAfterRedirects=v,this.state=E,this.type=6}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}}class Hi{constructor(h){this.route=h,this.type=9}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}}class Tr{constructor(h){this.route=h,this.type=10}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}}class Ni{constructor(h){this.snapshot=h,this.type=11}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Cn{constructor(h){this.snapshot=h,this.type=12}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class Zo{constructor(h){this.snapshot=h,this.type=13}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class kn{constructor(h){this.snapshot=h,this.type=14}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}}class On{constructor(h,d,v){this.routerEvent=h,this.position=d,this.anchor=v,this.type=15}toString(){return`Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`}}let Fr=(()=>{class p{createUrlTree(d,v,E,S,R,Y){return Ft(d||v.root,E,S,R,Y)}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac}),p})(),kr=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:function(h){return Fr.\u0275fac(h)},providedIn:"root"}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class no{constructor(h){this._root=h}get root(){return this._root.value}parent(h){const d=this.pathFromRoot(h);return d.length>1?d[d.length-2]:null}children(h){const d=Lr(h,this._root);return d?d.children.map(v=>v.value):[]}firstChild(h){const d=Lr(h,this._root);return d&&d.children.length>0?d.children[0].value:null}siblings(h){const d=_o(h,this._root);return d.length<2?[]:d[d.length-2].children.map(E=>E.value).filter(E=>E!==h)}pathFromRoot(h){return _o(h,this._root).map(d=>d.value)}}function Lr(p,h){if(p===h.value)return h;for(const d of h.children){const v=Lr(p,d);if(v)return v}return null}function _o(p,h){if(p===h.value)return[h];for(const d of h.children){const v=_o(p,d);if(v.length)return v.unshift(h),v}return[]}class Mi{constructor(h,d){this.value=h,this.children=d}toString(){return`TreeNode(${this.value})`}}function fr(p){const h={};return p&&p.children.forEach(d=>h[d.value.outlet]=d),h
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */}class io extends no{constructor(h,d){super(h),this.snapshot=d,ro(this,h)}toString(){return this.snapshot.toString()}}function Qo(p,h){const d=function Xo(p,h){const R=new Ji([],{},{},"",{},Ge,h,null,p.root,-1,{});return new es("",new Mi(R,[]))}(p,h),v=new ge.X([new vt("",{})]),E=new ge.X({}),S=new ge.X({}),R=new ge.X({}),Y=new ge.X(""),_e=new Ki(v,E,R,Y,S,Ge,h,d.root);return _e.snapshot=d.root,new io(new Mi(_e,[]),d)}class Ki{constructor(h,d,v,E,S,R,Y,_e){this.url=h,this.params=d,this.queryParams=v,this.fragment=E,this.data=S,this.outlet=R,this.component=Y,this.title=this.data?.pipe((0,Te.U)(ke=>ke[yn]))??(0,Q.of)(void 0),this._futureSnapshot=_e}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe((0,Te.U)(h=>Ve(h)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe((0,Te.U)(h=>Ve(h)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function ws(p,h="emptyOnly"){const d=p.pathFromRoot;let v=0;if("always"!==h)for(v=d.length-1;v>=1;){const E=d[v],S=d[v-1];if(E.routeConfig&&""===E.routeConfig.path)v--;else{if(S.component)break;v--}}return function Nl(p){return p.reduce((h,d)=>({params:{...h.params,...d.params},data:{...h.data,...d.data},resolve:{...d.data,...h.resolve,...d.routeConfig?.data,...d._resolvedData}}),{params:{},data:{},resolve:{}})}(d.slice(v))}class Ji{constructor(h,d,v,E,S,R,Y,_e,ke,Ue,Zt){this.url=h,this.params=d,this.queryParams=v,this.fragment=E,this.data=S,this.outlet=R,this.component=Y,this.routeConfig=_e,this._urlSegment=ke,this._lastPathIndex=Ue,this._resolve=Zt}get title(){return this.data?.[yn]}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Ve(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Ve(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(v=>v.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class es extends no{constructor(h,d){super(d),this.url=h,ro(this,d)}toString(){return vo(this._root)}}function ro(p,h){h.value._routerState=p,h.children.forEach(d=>ro(p,d))}function vo(p){const h=p.children.length>0?` { ${p.children.map(vo).join(", ")} } `:"";return`${p.value}${h}`}function ni(p){if(p.snapshot){const h=p.snapshot,d=p._futureSnapshot;p.snapshot=d,It(h.queryParams,d.queryParams)||p.queryParams.next(d.queryParams),h.fragment!==d.fragment&&p.fragment.next(d.fragment),It(h.params,d.params)||p.params.next(d.params),function yi(p,h){if(p.length!==h.length)return!1;for(let d=0;d<p.length;++d)if(!It(p[d],h[d]))return!1;return!0}(h.url,d.url)||p.url.next(d.url),It(h.data,d.data)||p.data.next(d.data)}else p.snapshot=p._futureSnapshot,p.data.next(p._futureSnapshot.data)}function Br(p,h){const d=It(p.params,h.params)&&function Ze(p,h){return pt(p,h)&&p.every((d,v)=>It(d.parameters,h[v].parameters))}(p.url,h.url);return d&&!(!p.parent!=!h.parent)&&(!p.parent||Br(p.parent,h.parent))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Nr(p,h,d){if(d&&p.shouldReuseRoute(h.value,d.value.snapshot)){const v=d.value;v._futureSnapshot=h.value;const E=function Ts(p,h,d){return h.children.map(v=>{for(const E of d.children)if(p.shouldReuseRoute(v.value,E.value.snapshot))return Nr(p,v,E);return Nr(p,v)})}(p,h,d);return new Mi(v,E)}{if(p.shouldAttach(h.value)){const S=p.retrieve(h.value);if(null!==S){const R=S.route;return R.value._futureSnapshot=h.value,R.children=h.children.map(Y=>Nr(p,Y)),R}}const v=function Si(p){return new Ki(new ge.X(p.url),new ge.X(p.params),new ge.X(p.queryParams),new ge.X(p.fragment),new ge.X(p.data),p.outlet,p.component,p)}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(h.value),E=h.children.map(S=>Nr(p,S));return new Mi(v,E)}}const yo="ngNavigationCancelingError";function hr(p,h){const{redirectTo:d,navigationBehaviorOptions:v}=Bi(h)?{redirectTo:h,navigationBehaviorOptions:void 0}:h,E=oo(!1,0,h);return E.url=d,E.navigationBehaviorOptions=v,E}function oo(p,h,d){const v=new Error("NavigationCancelingError: "+(p||""));return v[yo]=!0,v.cancellationCode=h,d&&(v.url=d),v}function bo(p){return Vr(p)&&Bi(p.url)}function Vr(p){return p&&p[yo]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class Do{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.injector=null,this.children=new pi,this.attachRef=null}}let pi=(()=>{class p{constructor(){this.contexts=new Map}onChildOutletCreated(d,v){const E=this.getOrCreateContext(d);E.outlet=v,this.contexts.set(d,E)}onChildOutletDestroyed(d){const v=this.getContext(d);v&&(v.outlet=null,v.attachRef=null)}onOutletDeactivated(){const d=this.contexts;return this.contexts=new Map,d}onOutletReAttached(d){this.contexts=d}getOrCreateContext(d){let v=this.getContext(d);return v||(v=new Do,this.contexts.set(d,v)),v}getContext(d){return this.contexts.get(d)||null}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const Hr=!1;let pr=(()=>{class p{constructor(){this.activated=null,this._activatedRoute=null,this.name=Ge,this.activateEvents=new a.vpe,this.deactivateEvents=new a.vpe,this.attachEvents=new a.vpe,this.detachEvents=new a.vpe,this.parentContexts=(0,a.f3M)(pi),this.location=(0,a.f3M)(a.s_b),this.changeDetector=(0,a.f3M)(a.sBO),this.environmentInjector=(0,a.f3M)(a.lqb)}ngOnChanges(d){if(d.name){const{firstChange:v,previousValue:E}=d.name;if(v)return;this.isTrackedInParentContexts(E)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(E)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name)}isTrackedInParentContexts(d){return this.parentContexts.getContext(d)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;const d=this.parentContexts.getContext(this.name);d?.route&&(d.attachRef?this.attach(d.attachRef,d.route):this.activateWith(d.route,d.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new a.vHH(4012,Hr);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new a.vHH(4012,Hr);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new a.vHH(4012,Hr);this.location.detach();const d=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(d.instance),d}attach(d,v){this.activated=d,this._activatedRoute=v,this.location.insert(d.hostView),this.attachEvents.emit(d.instance)}deactivate(){if(this.activated){const d=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(d)}}activateWith(d,v){if(this.isActivated)throw new a.vHH(4013,Hr);this._activatedRoute=d;const E=this.location,R=d.snapshot.component,Y=this.parentContexts.getOrCreateContext(this.name).children,_e=new Ns(d,Y,E.injector);if(v&&function Ln(p){return!!p.resolveComponentFactory}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(v)){const ke=v.resolveComponentFactory(R);this.activated=E.createComponent(ke,E.length,_e)}else this.activated=E.createComponent(R,{index:E.length,injector:_e,environmentInjector:v??this.environmentInjector});this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275dir=a.lG2({type:p,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[a.TTD]}),p})();class Ns{constructor(h,d,v){this.route=h,this.childContexts=d,this.parent=v}get(h,d){return h===Ki?this.route:h===pi?this.childContexts:this.parent.get(h,d)}}let so=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275cmp=a.Xpm({type:p,selectors:[["ng-component"]],standalone:!0,features:[a.jDz],decls:1,vars:0,template:function(d,v){1&d&&a._UZ(0,"router-outlet")},dependencies:[pr],encapsulation:2}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Co(p,h){return p.providers&&!p._injector&&(p._injector=(0,a.MMx)(p.providers,h,`Route: ${p.path}`)),p._injector??h}function Eo(p){const h=p.children&&p.children.map(Eo),d=h?{...p,children:h}:{...p};return!d.component&&!d.loadComponent&&(h||d.loadChildren)&&d.outlet&&d.outlet!==Ge&&(d.component=so),d}function Bn(p){return p.outlet||Ge}function Ms(p,h){const d=p.filter(v=>Bn(v)===h);return d.push(...p.filter(v=>Bn(v)!==h)),d}function Oi(p){if(!p)return null;if(p.routeConfig?._injector)return p.routeConfig._injector;for(let h=p.parent;h;h=h.parent){const d=h.routeConfig;if(d?._loadedInjector)return d._loadedInjector;if(d?._injector)return d._injector}return null}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class C{constructor(h,d,v,E){this.routeReuseStrategy=h,this.futureState=d,this.currState=v,this.forwardEvent=E}activate(h){const d=this.futureState._root,v=this.currState?this.currState._root:null;this.deactivateChildRoutes(d,v,h),ni(this.futureState.root),this.activateChildRoutes(d,v,h)}deactivateChildRoutes(h,d,v){const E=fr(d);h.children.forEach(S=>{const R=S.value.outlet;this.deactivateRoutes(S,E[R],v),delete E[R]}),ot(E,(S,R)=>{this.deactivateRouteAndItsChildren(S,v)})}deactivateRoutes(h,d,v){const E=h.value,S=d?d.value:null;if(E===S)if(E.component){const R=v.getContext(E.outlet);R&&this.deactivateChildRoutes(h,d,R.children)}else this.deactivateChildRoutes(h,d,v);else S&&this.deactivateRouteAndItsChildren(d,v)}deactivateRouteAndItsChildren(h,d){h.value.component&&this.routeReuseStrategy.shouldDetach(h.value.snapshot)?this.detachAndStoreRouteSubtree(h,d):this.deactivateRouteAndOutlet(h,d)}detachAndStoreRouteSubtree(h,d){const v=d.getContext(h.value.outlet),E=v&&h.value.component?v.children:d,S=fr(h);for(const R of Object.keys(S))this.deactivateRouteAndItsChildren(S[R],E);if(v&&v.outlet){const R=v.outlet.detach(),Y=v.children.onOutletDeactivated();this.routeReuseStrategy.store(h.value.snapshot,{componentRef:R,route:h,contexts:Y})}}deactivateRouteAndOutlet(h,d){const v=d.getContext(h.value.outlet),E=v&&h.value.component?v.children:d,S=fr(h);for(const R of Object.keys(S))this.deactivateRouteAndItsChildren(S[R],E);v&&v.outlet&&(v.outlet.deactivate(),v.children.onOutletDeactivated(),v.attachRef=null,v.resolver=null,v.route=null)}activateChildRoutes(h,d,v){const E=fr(d);h.children.forEach(S=>{this.activateRoutes(S,E[S.value.outlet],v),this.forwardEvent(new kn(S.value.snapshot))}),h.children.length&&this.forwardEvent(new Cn(h.value.snapshot))}activateRoutes(h,d,v){const E=h.value,S=d?d.value:null;if(ni(E),E===S)if(E.component){const R=v.getOrCreateContext(E.outlet);this.activateChildRoutes(h,d,R.children)}else this.activateChildRoutes(h,d,v);else if(E.component){const R=v.getOrCreateContext(E.outlet);if(this.routeReuseStrategy.shouldAttach(E.snapshot)){const Y=this.routeReuseStrategy.retrieve(E.snapshot);this.routeReuseStrategy.store(E.snapshot,null),R.children.onOutletReAttached(Y.contexts),R.attachRef=Y.componentRef,R.route=Y.route.value,R.outlet&&R.outlet.attach(Y.componentRef,Y.route.value),ni(Y.route.value),this.activateChildRoutes(h,null,R.children)}else{const Y=Oi(E.snapshot),_e=Y?.get(a._Vd)??null;R.attachRef=null,R.route=E,R.resolver=_e,R.injector=Y,R.outlet&&R.outlet.activateWith(E,R.injector),this.activateChildRoutes(h,null,R.children)}}else this.activateChildRoutes(h,null,v)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class y{constructor(h){this.path=h,this.route=this.path[this.path.length-1]}}class A{constructor(h,d){this.component=h,this.route=d}}function te(p,h,d){const v=p._root;return mn(v,h?h._root:null,d,[v.value])}function Gt(p,h){const d=Symbol(),v=h.get(p,d);return v===d?"function"!=typeof p||(0,a.Z0I)(p)?h.get(p):p:v}function mn(p,h,d,v,E={canDeactivateChecks:[],canActivateChecks:[]}){const S=fr(h);return p.children.forEach(R=>{(function gr(p,h,d,v,E={canDeactivateChecks:[],canActivateChecks:[]}){const S=p.value,R=h?h.value:null,Y=d?d.getContext(p.value.outlet):null;if(R&&S.routeConfig===R.routeConfig){const _e=function Mr(p,h,d){if("function"==typeof d)return d(p,h);switch(d){case"pathParamsChange":return!pt(p.url,h.url);case"pathParamsOrQueryParamsChange":return!pt(p.url,h.url)||!It(p.queryParams,h.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Br(p,h)||!It(p.queryParams,h.queryParams);default:return!Br(p,h)}}(R,S,S.routeConfig.runGuardsAndResolvers);_e?E.canActivateChecks.push(new y(v)):(S.data=R.data,S._resolvedData=R._resolvedData),mn(p,h,S.component?Y?Y.children:null:d,v,E),_e&&Y&&Y.outlet&&Y.outlet.isActivated&&E.canDeactivateChecks.push(new A(Y.outlet.component,R))}else R&&Ii(h,Y,E),E.canActivateChecks.push(new y(v)),mn(p,null,S.component?Y?Y.children:null:d,v,E)})(R,S[R.value.outlet],d,v.concat([R.value]),E),delete S[R.value.outlet]}),ot(S,(R,Y)=>Ii(R,d.getContext(Y),E)),E}function Ii(p,h,d){const v=fr(p),E=p.value;ot(v,(S,R)=>{Ii(S,E.component?h?h.children.getContext(R):null:h,d)}),d.canDeactivateChecks.push(new A(E.component&&h&&h.outlet&&h.outlet.isActivated?h.outlet.component:null,E))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function pe(p){return"function"==typeof p}function $r(p){return p instanceof ie||"EmptyError"===p?.name}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ns=Symbol("INITIAL_VALUE");function Mo(){return(0,Xe.w)(p=>(0,ye.aj)(p.map(h=>h.pipe((0,ut.q)(1),(0,Me.O)(ns)))).pipe((0,Te.U)(h=>{for(const d of h)if(!0!==d){if(d===ns)return ns;if(!1===d||d instanceof Ae)return d}return!0}),(0,Kt.h)(h=>h!==ns),(0,ut.q)(1)))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ea(p){return(0,Z.z)((0,Lt.b)(h=>{if(Bi(h))throw hr(0,h)}),(0,Te.U)(h=>!0===h))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const So={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function is(p,h,d,v,E){const S=Oo(p,h,d);return S.matched?function Os(p,h,d,v){const E=h.canMatch;if(!E||0===E.length)return(0,Q.of)(!0);const S=E.map(R=>{const Y=Gt(R,p);return bi(function To(p){return p&&pe(p.canMatch)}(Y)?Y.canMatch(h,d):p.runInContext(()=>Y(h,d)))});return(0,Q.of)(S).pipe(Mo(),ea())}(v=Co(h,v),h,d).pipe((0,Te.U)(R=>!0===R?S:{...So})):(0,Q.of)(S)}function Oo(p,h,d){if(""===h.path)return"full"===h.pathMatch&&(p.hasChildren()||d.length>0)?{...So}:{matched:!0,consumedSegments:[],remainingSegments:d,parameters:{},positionalParamSegments:{}};const E=(h.matcher||he)(d,p,h);if(!E)return{...So};const S={};ot(E.posParams,(Y,_e)=>{S[_e]=Y.path});const R=E.consumed.length>0?{...S,...E.consumed[E.consumed.length-1].parameters}:S;return{matched:!0,consumedSegments:E.consumed,remainingSegments:d.slice(E.consumed.length),parameters:R,positionalParamSegments:E.posParams??{}}}function Io(p,h,d,v){if(d.length>0&&function ta(p,h,d){return d.some(v=>Ao(p,h,v)&&Bn(v)!==Ge)}(p,d,v)){const S=new Ee(h,function As(p,h,d,v){const E={};E[Ge]=v,v._sourceSegment=p,v._segmentIndexShift=h.length;for(const S of d)if(""===S.path&&Bn(S)!==Ge){const R=new Ee([],{});R._sourceSegment=p,R._segmentIndexShift=h.length,E[Bn(S)]=R}return E}(p,h,v,new Ee(d,p.children)));return S._sourceSegment=p,S._segmentIndexShift=h.length,{segmentGroup:S,slicedSegments:[]}}if(0===d.length&&function na(p,h,d){return d.some(v=>Ao(p,h,v))}(p,d,v)){const S=new Ee(p.segments,function Is(p,h,d,v,E){const S={};for(const R of v)if(Ao(p,d,R)&&!E[Bn(R)]){const Y=new Ee([],{});Y._sourceSegment=p,Y._segmentIndexShift=h.length,S[Bn(R)]=Y}return{...E,...S}}(p,h,d,v,p.children));return S._sourceSegment=p,S._segmentIndexShift=h.length,{segmentGroup:S,slicedSegments:d}}const E=new Ee(p.segments,p.children);return E._sourceSegment=p,E._segmentIndexShift=h.length,{segmentGroup:E,slicedSegments:d}}function Ao(p,h,d){return(!(p.hasChildren()||h.length>0)||"full"!==d.pathMatch)&&""===d.path}function Rs(p,h,d,v){return!!(Bn(p)===v||v!==Ge&&Ao(h,d,p))&&("**"===p.path||Oo(h,p,d).matched)}function rs(p,h,d){return 0===h.length&&!p.children[d]}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const os=!1;class ss{constructor(h){this.segmentGroup=h||null}}class _{constructor(h){this.urlTree=h}}function M(p){return(0,ue._)(new ss(p))}function b(p){return(0,ue._)(new _(p))}class ce{constructor(h,d,v,E,S){this.injector=h,this.configLoader=d,this.urlSerializer=v,this.urlTree=E,this.config=S,this.allowRedirects=!0}apply(){const h=Io(this.urlTree.root,[],[],this.config).segmentGroup,d=new Ee(h.segments,h.children);return this.expandSegmentGroup(this.injector,this.config,d,Ge).pipe((0,Te.U)(S=>this.createUrlTree(ui(S),this.urlTree.queryParams,this.urlTree.fragment))).pipe(Gn(S=>{if(S instanceof _)return this.allowRedirects=!1,this.match(S.urlTree);throw S instanceof ss?this.noMatchError(S):S}))}match(h){return this.expandSegmentGroup(this.injector,this.config,h.root,Ge).pipe((0,Te.U)(E=>this.createUrlTree(ui(E),h.queryParams,h.fragment))).pipe(Gn(E=>{throw E instanceof ss?this.noMatchError(E):E}))}noMatchError(h){return new a.vHH(4002,os)}createUrlTree(h,d,v){const E=cr(h);return new Ae(E,d,v)}expandSegmentGroup(h,d,v,E){return 0===v.segments.length&&v.hasChildren()?this.expandChildren(h,d,v).pipe((0,Te.U)(S=>new Ee([],S))):this.expandSegment(h,v,d,v.segments,E,!0)}expandChildren(h,d,v){const E=[];for(const S of Object.keys(v.children))"primary"===S?E.unshift(S):E.push(S);return(0,L.D)(E).pipe((0,gt.b)(S=>{const R=v.children[S],Y=Ms(d,S);return this.expandSegmentGroup(h,Y,R,S).pipe((0,Te.U)(_e=>({segment:_e,outlet:S})))}),Fi((S,R)=>(S[R.outlet]=R.segment,S),{}),un())}expandSegment(h,d,v,E,S,R){return(0,L.D)(v).pipe((0,gt.b)(Y=>this.expandSegmentAgainstRoute(h,d,v,Y,E,S,R).pipe(Gn(ke=>{if(ke instanceof ss)return(0,Q.of)(null);throw ke}))),rn(Y=>!!Y),Gn((Y,_e)=>{if($r(Y))return rs(d,E,S)?(0,Q.of)(new Ee([],{})):M(d);throw Y}))}expandSegmentAgainstRoute(h,d,v,E,S,R,Y){return Rs(E,d,S,R)?void 0===E.redirectTo?this.matchSegmentAgainstRoute(h,d,E,S,R):Y&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(h,d,v,E,S,R):M(d):M(d)}expandSegmentAgainstRouteUsingRedirect(h,d,v,E,S,R){return"**"===E.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(h,v,E,R):this.expandRegularSegmentAgainstRouteUsingRedirect(h,d,v,E,S,R)}expandWildCardWithParamsAgainstRouteUsingRedirect(h,d,v,E){const S=this.applyRedirectCommands([],v.redirectTo,{});return v.redirectTo.startsWith("/")?b(S):this.lineralizeSegments(v,S).pipe((0,it.zg)(R=>{const Y=new Ee(R,{});return this.expandSegment(h,Y,d,R,E,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(h,d,v,E,S,R){const{matched:Y,consumedSegments:_e,remainingSegments:ke,positionalParamSegments:Ue}=Oo(d,E,S);if(!Y)return M(d);const Zt=this.applyRedirectCommands(_e,E.redirectTo,Ue);return E.redirectTo.startsWith("/")?b(Zt):this.lineralizeSegments(E,Zt).pipe((0,it.zg)(hn=>this.expandSegment(h,d,v,hn.concat(ke),R,!1)))}matchSegmentAgainstRoute(h,d,v,E,S){return"**"===v.path?(h=Co(v,h),v.loadChildren?(v._loadedRoutes?(0,Q.of)({routes:v._loadedRoutes,injector:v._loadedInjector}):this.configLoader.loadChildren(h,v)).pipe((0,Te.U)(Y=>(v._loadedRoutes=Y.routes,v._loadedInjector=Y.injector,new Ee(E,{})))):(0,Q.of)(new Ee(E,{}))):is(d,v,E,h).pipe((0,Xe.w)(({matched:R,consumedSegments:Y,remainingSegments:_e})=>R?this.getChildConfig(h=v._injector??h,v,E).pipe((0,it.zg)(Ue=>{const Zt=Ue.injector??h,hn=Ue.routes,{segmentGroup:yr,slicedSegments:br}=Io(d,Y,_e,hn),Dr=new Ee(yr.segments,yr.children);if(0===br.length&&Dr.hasChildren())return this.expandChildren(Zt,hn,Dr).pipe((0,Te.U)(La=>new Ee(Y,La)));if(0===hn.length&&0===br.length)return(0,Q.of)(new Ee(Y,{}));const Qi=Bn(v)===S;return this.expandSegment(Zt,Dr,hn,br,Qi?Ge:S,!0).pipe((0,Te.U)(ka=>new Ee(Y.concat(ka.segments),ka.children)))})):M(d)))}getChildConfig(h,d,v){return d.children?(0,Q.of)({routes:d.children,injector:h}):d.loadChildren?void 0!==d._loadedRoutes?(0,Q.of)({routes:d._loadedRoutes,injector:d._loadedInjector}):function Ca(p,h,d,v){const E=h.canLoad;if(void 0===E||0===E.length)return(0,Q.of)(!0);const S=E.map(R=>{const Y=Gt(R,p);return bi(function qs(p){return p&&pe(p.canLoad)}(Y)?Y.canLoad(h,d):p.runInContext(()=>Y(h,d)))});return(0,Q.of)(S).pipe(Mo(),ea())}(h,d,v).pipe((0,it.zg)(E=>E?this.configLoader.loadChildren(h,d).pipe((0,Lt.b)(S=>{d._loadedRoutes=S.routes,d._loadedInjector=S.injector})):function B(p){return(0,ue._)(oo(os,3))}())):(0,Q.of)({routes:[],injector:h})}lineralizeSegments(h,d){let v=[],E=d.root;for(;;){if(v=v.concat(E.segments),0===E.numberOfChildren)return(0,Q.of)(v);if(E.numberOfChildren>1||!E.children[Ge])return(0,ue._)(new a.vHH(4e3,os));E=E.children[Ge]}}applyRedirectCommands(h,d,v){return this.applyRedirectCreateUrlTree(d,this.urlSerializer.parse(d),h,v)}applyRedirectCreateUrlTree(h,d,v,E){const S=this.createSegmentGroup(h,d.root,v,E);return new Ae(S,this.createQueryParams(d.queryParams,this.urlTree.queryParams),d.fragment)}createQueryParams(h,d){const v={};return ot(h,(E,S)=>{if("string"==typeof E&&E.startsWith(":")){const Y=E.substring(1);v[S]=d[Y]}else v[S]=E}),v}createSegmentGroup(h,d,v,E){const S=this.createSegments(h,d.segments,v,E);let R={};return ot(d.children,(Y,_e)=>{R[_e]=this.createSegmentGroup(h,Y,v,E)}),new Ee(S,R)}createSegments(h,d,v,E){return d.map(S=>S.path.startsWith(":")?this.findPosParam(h,S,E):this.findOrReturn(S,v))}findPosParam(h,d,v){const E=v[d.path.substring(1)];if(!E)throw new a.vHH(4001,os);return E}findOrReturn(h,d){let v=0;for(const E of d){if(E.path===h.path)return d.splice(v),E;v++}return h}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class yt{}class an{constructor(h,d,v,E,S,R,Y){this.injector=h,this.rootComponentType=d,this.config=v,this.urlTree=E,this.url=S,this.paramsInheritanceStrategy=R,this.urlSerializer=Y}recognize(){const h=Io(this.urlTree.root,[],[],this.config.filter(d=>void 0===d.redirectTo)).segmentGroup;return this.processSegmentGroup(this.injector,this.config,h,Ge).pipe((0,Te.U)(d=>{if(null===d)return null;const v=new Ji([],Object.freeze({}),Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,{},Ge,this.rootComponentType,null,this.urlTree.root,-1,{}),E=new Mi(v,d),S=new es(this.url,E);return this.inheritParamsAndData(S._root),S}))}inheritParamsAndData(h){const d=h.value,v=ws(d,this.paramsInheritanceStrategy);d.params=Object.freeze(v.params),d.data=Object.freeze(v.data),h.children.forEach(E=>this.inheritParamsAndData(E))}processSegmentGroup(h,d,v,E){return 0===v.segments.length&&v.hasChildren()?this.processChildren(h,d,v):this.processSegment(h,d,v,v.segments,E)}processChildren(h,d,v){return(0,L.D)(Object.keys(v.children)).pipe((0,gt.b)(E=>{const S=v.children[E],R=Ms(d,E);return this.processSegmentGroup(h,R,S,E)}),Fi((E,S)=>E&&S?(E.push(...S),E):null),function dt(p,h=!1){return d=>d.lift(new or(p,h))}(E=>null!==E),Kn(null),un(),(0,Te.U)(E=>{if(null===E)return null;const S=Hn(E);return function zt(p){p.sort((h,d)=>h.value.outlet===Ge?-1:d.value.outlet===Ge?1:h.value.outlet.localeCompare(d.value.outlet))}(S),S}))}processSegment(h,d,v,E,S){return(0,L.D)(d).pipe((0,gt.b)(R=>this.processSegmentAgainstRoute(R._injector??h,R,v,E,S)),rn(R=>!!R),Gn(R=>{if($r(R))return rs(v,E,S)?(0,Q.of)([]):(0,Q.of)(null);throw R}))}processSegmentAgainstRoute(h,d,v,E,S){if(d.redirectTo||!Rs(d,v,E,S))return(0,Q.of)(null);let R;if("**"===d.path){const Y=E.length>0?gn(E).parameters:{},_e=zr(v)+E.length,ke=new Ji(E,Y,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,xs(d),Bn(d),d.component??d._loadedComponent??null,d,Or(v),_e,Ml(d));R=(0,Q.of)({snapshot:ke,consumedSegments:[],remainingSegments:[]})}else R=is(v,d,E,h).pipe((0,Te.U)(({matched:Y,consumedSegments:_e,remainingSegments:ke,parameters:Ue})=>{if(!Y)return null;const Zt=zr(v)+_e.length;return{snapshot:new Ji(_e,Ue,Object.freeze({...this.urlTree.queryParams}),this.urlTree.fragment,xs(d),Bn(d),d.component??d._loadedComponent??null,d,Or(v),Zt,Ml(d)),consumedSegments:_e,remainingSegments:ke}}));return R.pipe((0,Xe.w)(Y=>{if(null===Y)return(0,Q.of)(null);const{snapshot:_e,consumedSegments:ke,remainingSegments:Ue}=Y;h=d._injector??h;const Zt=d._loadedInjector??h,hn=function In(p){return p.children?p.children:p.loadChildren?p._loadedRoutes:[]}(d),{segmentGroup:yr,slicedSegments:br}=Io(v,ke,Ue,hn.filter(Qi=>void 0===Qi.redirectTo));if(0===br.length&&yr.hasChildren())return this.processChildren(Zt,hn,yr).pipe((0,Te.U)(Qi=>null===Qi?null:[new Mi(_e,Qi)]));if(0===hn.length&&0===br.length)return(0,Q.of)([new Mi(_e,[])]);const Dr=Bn(d)===S;return this.processSegment(Zt,hn,yr,br,Dr?Ge:S).pipe((0,Te.U)(Qi=>null===Qi?null:[new Mi(_e,Qi)]))}))}}function Ai(p){const h=p.value.routeConfig;return h&&""===h.path&&void 0===h.redirectTo}function Hn(p){const h=[],d=new Set;for(const v of p){if(!Ai(v)){h.push(v);continue}const E=h.find(S=>v.value.routeConfig===S.value.routeConfig);void 0!==E?(E.children.push(...v.children),d.add(E)):h.push(v)}for(const v of d){const E=Hn(v.children);h.push(new Mi(v.value,E))}return h.filter(v=>!d.has(v))}function Or(p){let h=p;for(;h._sourceSegment;)h=h._sourceSegment;return h}function zr(p){let h=p,d=h._segmentIndexShift??0;for(;h._sourceSegment;)h=h._sourceSegment,d+=h._segmentIndexShift??0;return d-1}function xs(p){return p.data||{}}function Ml(p){return p.resolve||{}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Na(p){return"string"==typeof p.title||null===p.title}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function ia(p){return(0,Xe.w)(h=>{const d=p(h);return d?(0,L.D)(d).pipe((0,Te.U)(()=>h)):(0,Q.of)(h)})}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const Ir=new a.OlP("ROUTES");let ls=(()=>{class p{constructor(d,v){this.injector=d,this.compiler=v,this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap}loadComponent(d){if(this.componentLoaders.get(d))return this.componentLoaders.get(d);if(d._loadedComponent)return(0,Q.of)(d._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(d);const v=bi(d.loadComponent()).pipe((0,Te.U)(kc),(0,Lt.b)(S=>{this.onLoadEndListener&&this.onLoadEndListener(d),d._loadedComponent=S}),ht(()=>{this.componentLoaders.delete(d)})),E=new fe.c(v,()=>new He.xQ).pipe((0,wr.x)());return this.componentLoaders.set(d,E),E}loadChildren(d,v){if(this.childrenLoaders.get(v))return this.childrenLoaders.get(v);if(v._loadedRoutes)return(0,Q.of)({routes:v._loadedRoutes,injector:v._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(v);const S=this.loadModuleFactoryOrRoutes(v.loadChildren).pipe((0,Te.U)(Y=>{this.onLoadEndListener&&this.onLoadEndListener(v);let _e,ke,Ue=!1;Array.isArray(Y)?ke=Y:(_e=Y.create(d).injector,ke=li(_e.get(Ir,[],a.XFs.Self|a.XFs.Optional)));return{routes:ke.map(Eo),injector:_e}}),ht(()=>{this.childrenLoaders.delete(v)})),R=new fe.c(S,()=>new He.xQ).pipe((0,wr.x)());return this.childrenLoaders.set(v,R),R}loadModuleFactoryOrRoutes(d){return bi(d()).pipe((0,Te.U)(kc),(0,it.zg)(E=>E instanceof a.YKP||Array.isArray(E)?(0,Q.of)(E):(0,L.D)(this.compiler.compileModuleAsync(E))))}}return p.\u0275fac=function(d){return new(d||p)(a.LFG(a.zs3),a.LFG(a.Sil))},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();function kc(p){return function ra(p){return p&&"object"==typeof p&&"default"in p}(p)?p.default:p}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Fs=(()=>{class p{constructor(){this.currentNavigation=null,this.lastSuccessfulNavigation=null,this.events=new He.xQ,this.configLoader=(0,a.f3M)(ls),this.environmentInjector=(0,a.f3M)(a.lqb),this.urlSerializer=(0,a.f3M)(Xt),this.rootContexts=(0,a.f3M)(pi),this.navigationId=0,this.configLoader.onLoadEndListener=E=>this.events.next(new Tr(E)),this.configLoader.onLoadStartListener=E=>this.events.next(new Hi(E))}get hasRequestedNavigation(){return 0!==this.navigationId}complete(){this.transitions?.complete()}handleNavigationRequest(d){const v=++this.navigationId;this.transitions?.next({...this.transitions.value,...d,id:v})}setupNavigations(d){return this.transitions=new ge.X({id:0,targetPageId:0,currentUrlTree:d.currentUrlTree,currentRawUrl:d.currentUrlTree,extractedUrl:d.urlHandlingStrategy.extract(d.currentUrlTree),urlAfterRedirects:d.urlHandlingStrategy.extract(d.currentUrlTree),rawUrl:d.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:d.routerState.snapshot,targetSnapshot:null,currentRouterState:d.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe((0,Kt.h)(v=>0!==v.id),(0,Te.U)(v=>({...v,extractedUrl:d.urlHandlingStrategy.extract(v.rawUrl)})),(0,Xe.w)(v=>{let E=!1,S=!1;return(0,Q.of)(v).pipe((0,Lt.b)(R=>{this.currentNavigation={id:R.id,initialUrl:R.rawUrl,extractedUrl:R.extractedUrl,trigger:R.source,extras:R.extras,previousNavigation:this.lastSuccessfulNavigation?{...this.lastSuccessfulNavigation,previousNavigation:null}:null}}),(0,Xe.w)(R=>{const Y=d.browserUrlTree.toString(),_e=!d.navigated||R.extractedUrl.toString()!==Y||Y!==d.currentUrlTree.toString();if(("reload"===d.onSameUrlNavigation||_e)&&d.urlHandlingStrategy.shouldProcessUrl(R.rawUrl))return Il(R.source)&&(d.browserUrlTree=R.extractedUrl),(0,Q.of)(R).pipe((0,Xe.w)(Ue=>{const Zt=this.transitions?.getValue();return this.events.next(new fi(Ue.id,this.urlSerializer.serialize(Ue.extractedUrl),Ue.source,Ue.restoredState)),Zt!==this.transitions?.getValue()?G.E:Promise.resolve(Ue)}),function Fe(p,h,d,v){return(0,Xe.w)(E=>function ee(p,h,d,v,E){return new ce(p,h,d,v,E).apply()}(p,h,d,E.extractedUrl,v).pipe((0,Te.U)(S=>({...E,urlAfterRedirects:S}))))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(this.environmentInjector,this.configLoader,this.urlSerializer,d.config),(0,Lt.b)(Ue=>{this.currentNavigation={...this.currentNavigation,finalUrl:Ue.urlAfterRedirects},v.urlAfterRedirects=Ue.urlAfterRedirects}),function Pc(p,h,d,v,E){return(0,it.zg)(S=>function at(p,h,d,v,E,S,R="emptyOnly"){return new an(p,h,d,v,E,R,S).recognize().pipe((0,Xe.w)(Y=>null===Y?function Tt(p){return new X.y(h=>h.error(p))}(new yt):(0,Q.of)(Y)))}(p,h,d,S.urlAfterRedirects,v.serialize(S.urlAfterRedirects),v,E).pipe((0,Te.U)(R=>({...S,targetSnapshot:R}))))}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(this.environmentInjector,d.rootComponentType,d.config,this.urlSerializer,d.paramsInheritanceStrategy),(0,Lt.b)(Ue=>{if(v.targetSnapshot=Ue.targetSnapshot,"eager"===d.urlUpdateStrategy){if(!Ue.extras.skipLocationChange){const hn=d.urlHandlingStrategy.merge(Ue.urlAfterRedirects,Ue.rawUrl);d.setBrowserUrl(hn,Ue)}d.browserUrlTree=Ue.urlAfterRedirects}const Zt=new mo(Ue.id,this.urlSerializer.serialize(Ue.extractedUrl),this.urlSerializer.serialize(Ue.urlAfterRedirects),Ue.targetSnapshot);this.events.next(Zt)}));if(_e&&d.rawUrlTree&&d.urlHandlingStrategy.shouldProcessUrl(d.rawUrlTree)){const{id:Zt,extractedUrl:hn,source:yr,restoredState:br,extras:Dr}=R,Qi=new fi(Zt,this.urlSerializer.serialize(hn),yr,br);this.events.next(Qi);const gs=Qo(hn,d.rootComponentType).snapshot;return v={...R,targetSnapshot:gs,urlAfterRedirects:hn,extras:{...Dr,skipLocationChange:!1,replaceUrl:!1}},(0,Q.of)(v)}return d.rawUrlTree=R.rawUrl,R.resolve(null),G.E}),(0,Lt.b)(R=>{const Y=new $t(R.id,this.urlSerializer.serialize(R.extractedUrl),this.urlSerializer.serialize(R.urlAfterRedirects),R.targetSnapshot);this.events.next(Y)}),(0,Te.U)(R=>v={...R,guards:te(R.targetSnapshot,R.currentSnapshot,this.rootContexts)}),function Ss(p,h){return(0,it.zg)(d=>{const{targetSnapshot:v,currentSnapshot:E,guards:{canActivateChecks:S,canDeactivateChecks:R}}=d;return 0===R.length&&0===S.length?(0,Q.of)({...d,guardsResult:!0}):function Vn(p,h,d,v){return(0,L.D)(p).pipe((0,it.zg)(E=>function Xs(p,h,d,v,E){const S=h&&h.routeConfig?h.routeConfig.canDeactivate:null;if(!S||0===S.length)return(0,Q.of)(!0);const R=S.map(Y=>{const _e=Oi(h)??E,ke=Gt(Y,_e);return bi(function Ur(p){return p&&pe(p.canDeactivate)}(ke)?ke.canDeactivate(p,h,d,v):_e.runInContext(()=>ke(p,h,d,v))).pipe(rn())});return(0,Q.of)(R).pipe(Mo())}(E.component,E.route,d,h,v)),rn(E=>!0!==E,!0))}(R,v,E,p).pipe((0,it.zg)(Y=>Y&&function ct(p){return"boolean"==typeof p}(Y)?function mr(p,h,d,v){return(0,L.D)(h).pipe((0,gt.b)(E=>(0,le.z)(function lo(p,h){return null!==p&&h&&h(new Ni(p)),(0,Q.of)(!0)}(E.route.parent,v),function Qs(p,h){return null!==p&&h&&h(new Zo(p)),(0,Q.of)(!0)}(E.route,v),function Da(p,h,d){const v=h[h.length-1],S=h.slice(0,h.length-1).reverse().map(R=>function ze(p){const h=p.routeConfig?p.routeConfig.canActivateChild:null;return h&&0!==h.length?{node:p,guards:h}:null}(R)).filter(R=>null!==R).map(R=>U(()=>{const Y=R.guards.map(_e=>{const ke=Oi(R.node)??d,Ue=Gt(_e,ke);return bi(function _n(p){return p&&pe(p.canActivateChild)}(Ue)?Ue.canActivateChild(v,p):ke.runInContext(()=>Ue(v,p))).pipe(rn())});return(0,Q.of)(Y).pipe(Mo())}));return(0,Q.of)(S).pipe(Mo())}(p,E.path,d),function _r(p,h,d){const v=h.routeConfig?h.routeConfig.canActivate:null;if(!v||0===v.length)return(0,Q.of)(!0);const E=v.map(S=>U(()=>{const R=Oi(h)??d,Y=Gt(S,R);return bi(function Zs(p){return p&&pe(p.canActivate)}(Y)?Y.canActivate(h,p):R.runInContext(()=>Y(h,p))).pipe(rn())}));return(0,Q.of)(E).pipe(Mo())}(p,E.route,d))),rn(E=>!0!==E,!0))}(v,S,p,h):(0,Q.of)(Y)),(0,Te.U)(Y=>({...d,guardsResult:Y})))})}(this.environmentInjector,R=>this.events.next(R)),(0,Lt.b)(R=>{if(v.guardsResult=R.guardsResult,Bi(R.guardsResult))throw hr(0,R.guardsResult);const Y=new qo(R.id,this.urlSerializer.serialize(R.extractedUrl),this.urlSerializer.serialize(R.urlAfterRedirects),R.targetSnapshot,!!R.guardsResult);this.events.next(Y)}),(0,Kt.h)(R=>!!R.guardsResult||(d.restoreHistory(R),this.cancelNavigationTransition(R,"",3,d),!1)),ia(R=>{if(R.guards.canActivateChecks.length)return(0,Q.of)(R).pipe((0,Lt.b)(Y=>{const _e=new eo(Y.id,this.urlSerializer.serialize(Y.extractedUrl),this.urlSerializer.serialize(Y.urlAfterRedirects),Y.targetSnapshot);this.events.next(_e)}),(0,Xe.w)(Y=>{let _e=!1;return(0,Q.of)(Y).pipe(function Fc(p,h){return(0,it.zg)(d=>{const{targetSnapshot:v,guards:{canActivateChecks:E}}=d;if(!E.length)return(0,Q.of)(d);let S=0;return(0,L.D)(E).pipe((0,gt.b)(R=>function Ea(p,h,d,v){const E=p.routeConfig,S=p._resolve;return void 0!==E?.title&&!Na(E)&&(S[yn]=E.title),function Sl(p,h,d,v){const E=function Ta(p){return[...Object.keys(p),...Object.getOwnPropertySymbols(p)]}(p);if(0===E.length)return(0,Q.of)({});const S={};return(0,L.D)(E).pipe((0,it.zg)(R=>function as(p,h,d,v){const E=Oi(h)??v,S=Gt(p,E);return bi(S.resolve?S.resolve(h,d):E.runInContext(()=>S(h,d)))}(p[R],h,d,v).pipe(rn(),(0,Lt.b)(Y=>{S[R]=Y}))),on(1),function sr(p){return h=>h.lift(new Qt(p))}(S),Gn(R=>$r(R)?G.E:(0,ue._)(R)))}(S,p,h,v).pipe((0,Te.U)(R=>(p._resolvedData=R,p.data=ws(p,d).resolve,E&&Na(E)&&(p.data[yn]=E.title),null)))}(R.route,v,p,h)),(0,Lt.b)(()=>S++),on(1),(0,it.zg)(R=>S===E.length?(0,Q.of)(d):G.E))})}(d.paramsInheritanceStrategy,this.environmentInjector),(0,Lt.b)({next:()=>_e=!0,complete:()=>{_e||(d.restoreHistory(Y),this.cancelNavigationTransition(Y,"",2,d))}}))}),(0,Lt.b)(Y=>{const _e=new to(Y.id,this.urlSerializer.serialize(Y.extractedUrl),this.urlSerializer.serialize(Y.urlAfterRedirects),Y.targetSnapshot);this.events.next(_e)}))}),ia(R=>{const Y=_e=>{const ke=[];_e.routeConfig?.loadComponent&&!_e.routeConfig._loadedComponent&&ke.push(this.configLoader.loadComponent(_e.routeConfig).pipe((0,Lt.b)(Ue=>{_e.component=Ue}),(0,Te.U)(()=>{})));for(const Ue of _e.children)ke.push(...Y(Ue));return ke};return(0,ye.aj)(Y(R.targetSnapshot.root)).pipe(Kn(),(0,ut.q)(1))}),ia(()=>d.afterPreactivation()),(0,Te.U)(R=>{const Y=function Es(p,h,d){const v=Nr(p,h._root,d?d._root:void 0);return new io(v,h)}(d.routeReuseStrategy,R.targetSnapshot,R.currentRouterState);return v={...R,targetRouterState:Y}}),(0,Lt.b)(R=>{d.currentUrlTree=R.urlAfterRedirects,d.rawUrlTree=d.urlHandlingStrategy.merge(R.urlAfterRedirects,R.rawUrl),d.routerState=R.targetRouterState,"deferred"===d.urlUpdateStrategy&&(R.extras.skipLocationChange||d.setBrowserUrl(d.rawUrlTree,R),d.browserUrlTree=R.urlAfterRedirects)}),((p,h,d)=>(0,Te.U)(v=>(new C(h,v.targetRouterState,v.currentRouterState,d).activate(p),v)))(this.rootContexts,d.routeReuseStrategy,R=>this.events.next(R)),(0,Lt.b)({next:R=>{E=!0,this.lastSuccessfulNavigation=this.currentNavigation,d.navigated=!0,this.events.next(new Mn(R.id,this.urlSerializer.serialize(R.extractedUrl),this.urlSerializer.serialize(d.currentUrlTree))),d.titleStrategy?.updateTitle(R.targetRouterState.snapshot),R.resolve(!0)},complete:()=>{E=!0}}),ht(()=>{E||S||this.cancelNavigationTransition(v,"",1,d),this.currentNavigation?.id===v.id&&(this.currentNavigation=null)}),Gn(R=>{if(S=!0,Vr(R)){bo(R)||(d.navigated=!0,d.restoreHistory(v,!0));const Y=new Sn(v.id,this.urlSerializer.serialize(v.extractedUrl),R.message,R.cancellationCode);if(this.events.next(Y),bo(R)){const _e=d.urlHandlingStrategy.merge(R.url,d.rawUrlTree),ke={skipLocationChange:v.extras.skipLocationChange,replaceUrl:"eager"===d.urlUpdateStrategy||Il(v.source)};d.scheduleNavigation(_e,"imperative",null,ke,{resolve:v.resolve,reject:v.reject,promise:v.promise})}else v.resolve(!1)}else{d.restoreHistory(v,!0);const Y=new hi(v.id,this.urlSerializer.serialize(v.extractedUrl),R,v.targetSnapshot??void 0);this.events.next(Y);try{v.resolve(d.errorHandler(R))}catch(_e){v.reject(_e)}}return G.E}))}))}cancelNavigationTransition(d,v,E,S){const R=new Sn(d.id,this.urlSerializer.serialize(d.extractedUrl),v,E);this.events.next(R),d.resolve(!1)}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();function Il(p){return"imperative"!==p}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let gi=(()=>{class p{buildTitle(d){let v,E=d.root;for(;void 0!==E;)v=this.getResolvedTitleForRoute(E)??v,E=E.children.find(S=>S.outlet===Ge);return v}getResolvedTitleForRoute(d){return d.data[yn]}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:function(){return(0,a.f3M)(Lc)},providedIn:"root"}),p})(),Lc=(()=>{class p extends gi{constructor(d){super(),this.title=d}updateTitle(d){const v=this.buildTitle(d);void 0!==v&&this.title.setTitle(v)}}return p.\u0275fac=function(d){return new(d||p)(a.LFG(ki.Dx))},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})(),ks=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:function(){return(0,a.f3M)(vr)},providedIn:"root"}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */class cs{shouldDetach(h){return!1}store(h,d){}shouldAttach(h){return!1}retrieve(h){return null}shouldReuseRoute(h,d){return h.routeConfig===d.routeConfig}}let vr=(()=>{class p extends cs{}return p.\u0275fac=function(){let h;return function(v){return(h||(h=a.n5z(p)))(v||p)}}(),p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ji=new a.OlP("",{providedIn:"root",factory:()=>({})});
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */let Ma=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:function(){return(0,a.f3M)(Al)},providedIn:"root"}),p})(),Al=(()=>{class p{shouldProcessUrl(d){return!0}extract(d){return d}merge(d,v){return d}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Rl(p){throw p}function Oa(p,h,d){return h.parse("/")}const Ro={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ls={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};let An=(()=>{class p{constructor(){this.disposed=!1,this.currentPageId=0,this.console=(0,a.f3M)(a.c2e),this.isNgZoneEnabled=!1,this.options=(0,a.f3M)(ji,{optional:!0})||{},this.errorHandler=this.options.errorHandler||Rl,this.malformedUriErrorHandler=this.options.malformedUriErrorHandler||Oa,this.navigated=!1,this.lastSuccessfulId=-1,this.afterPreactivation=()=>(0,Q.of)(void 0),this.urlHandlingStrategy=(0,a.f3M)(Ma),this.routeReuseStrategy=(0,a.f3M)(ks),this.urlCreationStrategy=(0,a.f3M)(kr),this.titleStrategy=(0,a.f3M)(gi),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.config=li((0,a.f3M)(Ir,{optional:!0})??[]),this.navigationTransitions=(0,a.f3M)(Fs),this.urlSerializer=(0,a.f3M)(Xt),this.location=(0,a.f3M)(be.Ye),this.rootComponentType=null,this.isNgZoneEnabled=(0,a.f3M)(a.R0b)instanceof a.R0b&&a.R0b.isInAngularZone(),this.resetConfig(this.config),this.currentUrlTree=new Ae,this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.routerState=Qo(this.currentUrlTree,this.rootComponentType),this.navigationTransitions.setupNavigations(this).subscribe(d=>{this.lastSuccessfulId=d.id,this.currentPageId=d.targetPageId},d=>{this.console.warn(`Unhandled Navigation Error: ${d}`)})}get navigationId(){return this.navigationTransitions.navigationId}get browserPageId(){return this.location.getState()?.\u0275routerPageId}get events(){return this.navigationTransitions.events}resetRootComponentType(d){this.rootComponentType=d,this.routerState.root.component=this.rootComponentType}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(d=>{const v="popstate"===d.type?"popstate":"hashchange";"popstate"===v&&setTimeout(()=>{const E={replaceUrl:!0},S=d.state?.navigationId?d.state:null;if(d.state){const Y={...d.state};delete Y.navigationId,delete Y.\u0275routerPageId,0!==Object.keys(Y).length&&(E.state=Y)}const R=this.parseUrl(d.url);this.scheduleNavigation(R,v,S,E)},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}resetConfig(d){this.config=d.map(Eo),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=void 0),this.disposed=!0}createUrlTree(d,v={}){const{relativeTo:E,queryParams:S,fragment:R,queryParamsHandling:Y,preserveFragment:_e}=v,ke=_e?this.currentUrlTree.fragment:R;let Ue=null;switch(Y){case"merge":Ue={...this.currentUrlTree.queryParams,...S};break;case"preserve":Ue=this.currentUrlTree.queryParams;break;default:Ue=S||null}return null!==Ue&&(Ue=this.removeEmptyProps(Ue)),this.urlCreationStrategy.createUrlTree(E,this.routerState,this.currentUrlTree,d,Ue,ke??null)}navigateByUrl(d,v={skipLocationChange:!1}){const E=Bi(d)?d:this.parseUrl(d),S=this.urlHandlingStrategy.merge(E,this.rawUrlTree);return this.scheduleNavigation(S,"imperative",null,v)}navigate(d,v={skipLocationChange:!1}){return function xl(p){for(let h=0;h<p.length;h++){if(null==p[h])throw new a.vHH(4008,!1)}}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */(d),this.navigateByUrl(this.createUrlTree(d,v),v)}serializeUrl(d){return this.urlSerializer.serialize(d)}parseUrl(d){let v;try{v=this.urlSerializer.parse(d)}catch(E){v=this.malformedUriErrorHandler(E,this.urlSerializer,d)}return v}isActive(d,v){let E;if(E=!0===v?{...Ro}:!1===v?{...Ls}:v,Bi(d))return ci(this.currentUrlTree,d,E);const S=this.parseUrl(d);return ci(this.currentUrlTree,S,E)}removeEmptyProps(d){return Object.keys(d).reduce((v,E)=>{const S=d[E];return null!=S&&(v[E]=S),v},{})}scheduleNavigation(d,v,E,S,R){if(this.disposed)return Promise.resolve(!1);let Y,_e,ke,Ue;return R?(Y=R.resolve,_e=R.reject,ke=R.promise):ke=new Promise((Zt,hn)=>{Y=Zt,_e=hn}),"computed"===this.canceledNavigationResolution?(0===this.currentPageId&&(E=this.location.getState()),Ue=E&&E.\u0275routerPageId?E.\u0275routerPageId:S.replaceUrl||S.skipLocationChange?this.browserPageId??0:(this.browserPageId??0)+1):Ue=0,this.navigationTransitions.handleNavigationRequest({targetPageId:Ue,source:v,restoredState:E,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:d,extras:S,resolve:Y,reject:_e,promise:ke,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),ke.catch(Zt=>Promise.reject(Zt))}setBrowserUrl(d,v){const E=this.urlSerializer.serialize(d),S={...v.extras.state,...this.generateNgRouterState(v.id,v.targetPageId)};this.location.isCurrentPathEqualTo(E)||v.extras.replaceUrl?this.location.replaceState(E,"",S):this.location.go(E,"",S)}restoreHistory(d,v=!1){if("computed"===this.canceledNavigationResolution){const E=this.currentPageId-d.targetPageId;"popstate"!==d.source&&"eager"!==this.urlUpdateStrategy&&this.currentUrlTree!==this.getCurrentNavigation()?.finalUrl||0===E?this.currentUrlTree===this.getCurrentNavigation()?.finalUrl&&0===E&&(this.resetState(d),this.browserUrlTree=d.currentUrlTree,this.resetUrlToCurrentUrlTree()):this.location.historyGo(E)}else"replace"===this.canceledNavigationResolution&&(v&&this.resetState(d),this.resetUrlToCurrentUrlTree())}resetState(d){this.routerState=d.currentRouterState,this.currentUrlTree=d.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,d.rawUrl)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(d,v){return"computed"===this.canceledNavigationResolution?{navigationId:d,\u0275routerPageId:v}:{navigationId:d}}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})(),xo=(()=>{class p{constructor(d,v,E,S,R,Y){this.router=d,this.route=v,this.tabIndexAttribute=E,this.renderer=S,this.el=R,this.locationStrategy=Y,this._preserveFragment=!1,this._skipLocationChange=!1,this._replaceUrl=!1,this.href=null,this.commands=null,this.onChanges=new He.xQ;const _e=R.nativeElement.tagName;this.isAnchorElement="A"===_e||"AREA"===_e,this.isAnchorElement?this.subscription=d.events.subscribe(ke=>{ke instanceof Mn&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}set preserveFragment(d){this._preserveFragment=(0,a.D6c)(d)}get preserveFragment(){return this._preserveFragment}set skipLocationChange(d){this._skipLocationChange=(0,a.D6c)(d)}get skipLocationChange(){return this._skipLocationChange}set replaceUrl(d){this._replaceUrl=(0,a.D6c)(d)}get replaceUrl(){return this._replaceUrl}setTabIndexIfNotOnNativeEl(d){null!=this.tabIndexAttribute||this.isAnchorElement||this.applyAttributeValue("tabindex",d)}ngOnChanges(d){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}set routerLink(d){null!=d?(this.commands=Array.isArray(d)?d:[d],this.setTabIndexIfNotOnNativeEl("0")):(this.commands=null,this.setTabIndexIfNotOnNativeEl(null))}onClick(d,v,E,S,R){return!!(null===this.urlTree||this.isAnchorElement&&(0!==d||v||E||S||R||"string"==typeof this.target&&"_self"!=this.target))||(this.router.navigateByUrl(this.urlTree,{skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state}),!this.isAnchorElement)}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){this.href=null!==this.urlTree&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)):null;const d=null===this.href?null:(0,a.P3R)(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",d)}applyAttributeValue(d,v){const E=this.renderer,S=this.el.nativeElement;null!==v?E.setAttribute(S,d,v):E.removeAttribute(S,d)}get urlTree(){return null===this.commands?null:this.router.createUrlTree(this.commands,{relativeTo:void 0!==this.relativeTo?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}}return p.\u0275fac=function(d){return new(d||p)(a.Y36(An),a.Y36(Ki),a.$8M("tabindex"),a.Y36(a.Qsj),a.Y36(a.SBq),a.Y36(be.S$))},p.\u0275dir=a.lG2({type:p,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(d,v){1&d&&a.NdJ("click",function(S){return v.onClick(S.button,S.ctrlKey,S.shiftKey,S.altKey,S.metaKey)}),2&d&&a.uIk("target",v.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",relativeTo:"relativeTo",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",routerLink:"routerLink"},standalone:!0,features:[a.TTD]}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
class Fo{}let Pl=(()=>{class p{constructor(d,v,E,S,R){this.router=d,this.injector=E,this.preloadingStrategy=S,this.loader=R}setUpPreloading(){this.subscription=this.router.events.pipe((0,Kt.h)(d=>d instanceof Mn),(0,gt.b)(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(d,v){const E=[];for(const S of v){S.providers&&!S._injector&&(S._injector=(0,a.MMx)(S.providers,d,`Route: ${S.path}`));const R=S._injector??d,Y=S._loadedInjector??R;S.loadChildren&&!S._loadedRoutes&&void 0===S.canLoad||S.loadComponent&&!S._loadedComponent?E.push(this.preloadConfig(R,S)):(S.children||S._loadedRoutes)&&E.push(this.processRoutes(Y,S.children??S._loadedRoutes))}return(0,L.D)(E).pipe((0,qn.J)())}preloadConfig(d,v){return this.preloadingStrategy.preload(v,()=>{let E;E=v.loadChildren&&void 0===v.canLoad?this.loader.loadChildren(d,v):(0,Q.of)(null);const S=E.pipe((0,it.zg)(R=>null===R?(0,Q.of)(void 0):(v._loadedRoutes=R.routes,v._loadedInjector=R.injector,this.processRoutes(R.injector??d,R.routes))));if(v.loadComponent&&!v._loadedComponent){const R=this.loader.loadComponent(v);return(0,L.D)([S,R]).pipe((0,qn.J)())}return S})}}return p.\u0275fac=function(d){return new(d||p)(a.LFG(An),a.LFG(a.Sil),a.LFG(a.lqb),a.LFG(Fo),a.LFG(ls))},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */const ds=new a.OlP("");let co=(()=>{class p{constructor(d,v,E,S,R={}){this.urlSerializer=d,this.transitions=v,this.viewportScroller=E,this.zone=S,this.options=R,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},R.scrollPositionRestoration=R.scrollPositionRestoration||"disabled",R.anchorScrolling=R.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(d=>{d instanceof fi?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=d.navigationTrigger,this.restoredId=d.restoredState?d.restoredState.navigationId:0):d instanceof Mn&&(this.lastId=d.id,this.scheduleScrollEvent(d,this.urlSerializer.parse(d.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(d=>{d instanceof On&&(d.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(d.position):d.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(d.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(d,v){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new On(d,"popstate"===this.lastSource?this.store[this.restoredId]:null,v))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}}return p.\u0275fac=function(d){a.$Z()},p.\u0275prov=a.Yz7({token:p,factory:p.\u0275fac}),p})();
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */function Wr(p,h){return{\u0275kind:p,\u0275providers:h}}function Wt(){const p=(0,a.f3M)(a.zs3);return h=>{const d=p.get(a.z2F);if(h!==d.components[0])return;const v=p.get(An),E=p.get(Bc);1===p.get(sa)&&v.initialNavigation(),p.get(Ra,null,a.XFs.Optional)?.setUpPreloading(),p.get(ds,null,a.XFs.Optional)?.init(),v.resetRootComponentType(d.componentTypes[0]),E.closed||(E.next(),E.unsubscribe())}}const Bc=new a.OlP("",{factory:()=>new He.xQ}),sa=new a.OlP("",{providedIn:"root",factory:()=>1});const Ra=new a.OlP("");function xa(p){return Wr(0,[{provide:Ra,useExisting:Pl},{provide:Fo,useExisting:p}])}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
const En=new a.OlP("ROUTER_FORROOT_GUARD"),Pa=[be.Ye,{provide:Xt,useClass:Jt},An,pi,{provide:Ki,useFactory:function Ar(p){return p.routerState.root},deps:[An]},ls,[]];function Lo(){return new a.PXZ("Router",An)}let Kr=(()=>{class p{constructor(d){}static forRoot(d,v){return{ngModule:p,providers:[Pa,[],{provide:Ir,multi:!0,useValue:d},{provide:En,useFactory:Hs,deps:[[An,new a.FiY,new a.tp0]]},{provide:ji,useValue:v||{}},v?.useHash?{provide:be.S$,useClass:be.Do}:{provide:be.S$,useClass:be.b0},{provide:ds,useFactory:()=>{const p=(0,a.f3M)(be.EM),h=(0,a.f3M)(a.R0b),d=(0,a.f3M)(ji),v=(0,a.f3M)(Fs),E=(0,a.f3M)(Xt);return d.scrollOffset&&p.setOffset(d.scrollOffset),new co(E,v,p,h,d)}},v?.preloadingStrategy?xa(v.preloadingStrategy).\u0275providers:[],{provide:a.PXZ,multi:!0,useFactory:Lo},v?.initialNavigation?ps(v):[],[{provide:Fa,useFactory:Wt},{provide:a.tb,multi:!0,useExisting:Fa}]]}}static forChild(d){return{ngModule:p,providers:[{provide:Ir,multi:!0,useValue:d}]}}}return p.\u0275fac=function(d){return new(d||p)(a.LFG(En,8))},p.\u0275mod=a.oAB({type:p}),p.\u0275inj=a.cJS({imports:[so]}),p})();function Hs(p){return"guarded"}function ps(p){return["disabled"===p.initialNavigation?Wr(3,[{provide:a.ip1,multi:!0,useFactory:()=>{const h=(0,a.f3M)(An);return()=>{h.setUpLocationChangeListener()}}},{provide:sa,useValue:2}]).\u0275providers:[],"enabledBlocking"===p.initialNavigation?Wr(2,[{provide:sa,useValue:0},{provide:a.ip1,multi:!0,deps:[a.zs3],useFactory:h=>{const d=h.get(be.V_,Promise.resolve());return()=>d.then(()=>new Promise(E=>{const S=h.get(An),R=h.get(Bc);(function v(E){h.get(An).events.pipe((0,Kt.h)(R=>R instanceof Mn||R instanceof Sn||R instanceof hi),(0,Te.U)(R=>R instanceof Mn||R instanceof Sn&&(0===R.code||1===R.code)&&null),(0,Kt.h)(R=>null!==R),(0,ut.q)(1)).subscribe(()=>{E()})})(()=>{E(!0)}),S.afterPreactivation=()=>(E(!0),R.closed?(0,Q.of)(void 0):R),S.initialNavigation()}))}}]).\u0275providers:[]]}const Fa=new a.OlP("")}
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
/**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */,2457:(Qe,De,F)=>{F.d(De,{If:()=>jo,FF:()=>Ql,bz:()=>Za,IJ:()=>zs,M2:()=>Ya});var a=F(2135),L=F(4666),Q=F(7473),ge=F(6439),ve=F(4139),ie=F(7806),ye=F(4327),le=F(1900),X=F(6942);function U(s,l,r,u){return(0,le.m)(r)&&(u=r,r=void 0),u?U(s,l,r).pipe((0,X.U)(g=>(0,ye.k)(g)?u(...g):u(g))):new Q.y(g=>{Z(s,l,function w(x){g.next(arguments.length>1?Array.prototype.slice.call(arguments):x)},g,r)})}function Z(s,l,r,u,g){let w;if(function He(s){return s&&"function"==typeof s.addEventListener&&"function"==typeof s.removeEventListener}(s)){const x=s;s.addEventListener(l,r,g),w=()=>x.removeEventListener(l,r,g)}else if(function fe(s){return s&&"function"==typeof s.on&&"function"==typeof s.off}(s)){const x=s;s.on(l,r),w=()=>x.off(l,r)}else if(function ue(s){return s&&"function"==typeof s.addListener&&"function"==typeof s.removeListener}(s)){const x=s;s.addListener(l,r),w=()=>x.removeListener(l,r)}else{if(!s||!s.length)throw new TypeError("Invalid event target");for(let x=0,$=s.length;x<$;x++)Z(s[x],l,r,u,g)}u.add(w)}var be=F(6957);class Te extends be.w{constructor(l,r){super()}schedule(l,r=0){return this}}let ut=(()=>{class s{constructor(r,u=s.now){this.SchedulerAction=r,this.now=u}schedule(r,u=0,g){return new this.SchedulerAction(this,r).schedule(g,u)}}return s.now=()=>Date.now(),s})();class Me extends ut{constructor(l,r=ut.now){super(l,()=>Me.delegate&&Me.delegate!==this?Me.delegate.now():r()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(l,r=0,u){return Me.delegate&&Me.delegate!==this?Me.delegate.schedule(l,r,u):super.schedule(l,r,u)}flush(l){const{actions:r}=this;if(this.active)return void r.push(l);let u;this.active=!0;do{if(u=l.execute(l.state,l.delay))break}while(l=r.shift());if(this.active=!1,u){for(;l=r.shift();)l.unsubscribe();throw u}}}const it=new Me(class Xe extends Te{constructor(l,r){super(l,r),this.scheduler=l,this.work=r,this.pending=!1}schedule(l,r=0){if(this.closed)return this;this.state=l;const u=this.id,g=this.scheduler;return null!=u&&(this.id=this.recycleAsyncId(g,u,r)),this.pending=!0,this.delay=r,this.id=this.id||this.requestAsyncId(g,this.id,r),this}requestAsyncId(l,r,u=0){return setInterval(l.flush.bind(l,this),u)}recycleAsyncId(l,r,u=0){if(null!==u&&this.delay===u&&!1===this.pending)return r;clearInterval(r)}execute(l,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const u=this._execute(l,r);if(u)return u;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(l,r){let g,u=!1;try{this.work(l)}catch(w){u=!0,g=!!w&&w||new Error(w)}if(u)return this.unsubscribe(),g}_unsubscribe(){const l=this.id,r=this.scheduler,u=r.actions,g=u.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==g&&u.splice(g,1),null!=l&&(this.id=this.recycleAsyncId(r,l,null)),this.delay=null}});function Rt(s){return!(0,ye.k)(s)&&s-parseFloat(s)+1>=0}var Kn=F(7507);function xt(s){const{index:l,period:r,subscriber:u}=s;if(u.next(l),!u.closed){if(-1===r)return u.complete();s.index=l+1,this.schedule(s,r)}}var we=F(8005),Le=F(5266),qe=F(8774);class Be{call(l,r){return r.subscribe(new rn(l))}}class rn extends Le.L{constructor(l){super(l),this.hasFirst=!1,this.observables=[],this.subscriptions=[]}_next(l){this.observables.push(l)}_complete(){const l=this.observables,r=l.length;if(0===r)this.destination.complete();else{for(let u=0;u<r&&!this.hasFirst;u++){const w=(0,qe.D)(this,l[u],void 0,u);this.subscriptions&&this.subscriptions.push(w),this.add(w)}this.observables=null}}notifyNext(l,r,u){if(!this.hasFirst){this.hasFirst=!0;for(let g=0;g<this.subscriptions.length;g++)if(g!==u){let w=this.subscriptions[g];w.unsubscribe(),this.remove(w)}this.subscriptions=null}this.destination.next(r)}}F(4505),F(9193);var _i=F(6882);new Q.y(_i.Z);var Jn=F(14),Fi=F(2803),Nn=F(2831);function si(...s){const l=s[s.length-1];return"function"==typeof l&&s.pop(),(0,we.n)(s,void 0).lift(new vi(l))}class vi{constructor(l){this.resultSelector=l}call(l,r){return r.subscribe(new on(l,this.resultSelector))}}class on extends Jn.L{constructor(l,r,u=Object.create(null)){super(l),this.resultSelector=r,this.iterators=[],this.active=0,this.resultSelector="function"==typeof r?r:void 0}_next(l){const r=this.iterators;(0,ye.k)(l)?r.push(new go(l)):r.push("function"==typeof l[Fi.hZ]?new $i(l[Fi.hZ]()):new un(this.destination,this,l))}_complete(){const l=this.iterators,r=l.length;if(this.unsubscribe(),0!==r){this.active=r;for(let u=0;u<r;u++){let g=l[u];g.stillUnsubscribed?this.destination.add(g.subscribe()):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const l=this.iterators,r=l.length,u=this.destination;for(let x=0;x<r;x++){let $=l[x];if("function"==typeof $.hasValue&&!$.hasValue())return}let g=!1;const w=[];for(let x=0;x<r;x++){let $=l[x],z=$.next();if($.hasCompleted()&&(g=!0),z.done)return void u.complete();w.push(z.value)}this.resultSelector?this._tryresultSelector(w):u.next(w),g&&u.complete()}_tryresultSelector(l){let r;try{r=this.resultSelector.apply(this,l)}catch(u){return void this.destination.error(u)}this.destination.next(r)}}class $i{constructor(l){this.iterator=l,this.nextResult=l.next()}hasValue(){return!0}next(){const l=this.nextResult;return this.nextResult=this.iterator.next(),l}hasCompleted(){const l=this.nextResult;return Boolean(l&&l.done)}}class go{constructor(l){this.array=l,this.index=0,this.length=0,this.length=l.length}[Fi.hZ](){return this}next(l){const r=this.index++;return r<this.length?{value:this.array[r],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class un extends Nn.Ds{constructor(l,r,u){super(l),this.parent=r,this.observable=u,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[Fi.hZ](){return this}next(){const l=this.buffer;return 0===l.length&&this.isComplete?{value:null,done:!0}:{value:l.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(l){this.buffer.push(l),this.parent.checkIterators()}subscribe(){return(0,Nn.ft)(this.observable,new Nn.IY(this))}}var dt=F(7283);function Pt(s){return l=>l.lift(new sr(s))}class sr{constructor(l){this.notifier=l}call(l,r){const u=new Qt(l),g=(0,Nn.ft)(this.notifier,new Nn.IY(u));return g&&!u.seenValue?(u.add(g),r.subscribe(u)):u}}class Qt extends Nn.Ds{constructor(l){super(l),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}var ai=F(9151),mt=F(3910);F(5722);var qn=F(9095),ki=F(8759);function Ge(...s){return l=>{let r;return"function"==typeof s[s.length-1]&&(r=s.pop()),l.lift(new yn(s,r))}}class yn{constructor(l,r){this.observables=l,this.project=r}call(l,r){return r.subscribe(new Ht(l,this.observables,this.project))}}class Ht extends Le.L{constructor(l,r,u){super(l),this.observables=r,this.project=u,this.toRespond=[];const g=r.length;this.values=new Array(g);for(let w=0;w<g;w++)this.toRespond.push(w);for(let w=0;w<g;w++)this.add((0,qe.D)(this,r[w],void 0,w))}notifyNext(l,r,u){this.values[u]=r;const g=this.toRespond;if(g.length>0){const w=g.indexOf(u);-1!==w&&g.splice(w,1)}}notifyComplete(){}_next(l){if(0===this.toRespond.length){const r=[l,...this.values];this.project?this._tryProject(r):this.destination.next(r)}}_tryProject(l){let r;try{r=this.project.apply(this,l)}catch(u){return void this.destination.error(u)}this.destination.next(r)}}var he=F(6587);class It{constructor(l,r,u){this.kind=l,this.value=r,this.error=u,this.hasValue="N"===l}observe(l){switch(this.kind){case"N":return l.next&&l.next(this.value);case"E":return l.error&&l.error(this.error);case"C":return l.complete&&l.complete()}}do(l,r,u){switch(this.kind){case"N":return l&&l(this.value);case"E":return r&&r(this.error);case"C":return u&&u()}}accept(l,r,u){return l&&"function"==typeof l.next?this.observe(l):this.do(l,r,u)}toObservable(){switch(this.kind){case"N":return(0,ve.of)(this.value);case"E":return(0,he._)(this.error);case"C":return(0,ge.c)()}throw new Error("unexpected notification kind value")}static createNext(l){return typeof l<"u"?new It("N",l):It.undefinedValueNotification}static createError(l){return new It("E",void 0,l)}static createComplete(){return It.completeNotification}}It.completeNotification=new It("C"),It.undefinedValueNotification=new It("N",void 0);var Di=F(609);Math,Math,Math;const ii=["*"],mr=["dialog"];function cs(s){return"string"==typeof s}function ji(s){return null!=s}function Ro(s){return(s||document.body).getBoundingClientRect()}const xo={animation:!0,transitionTimerDelayMs:5},Ia=()=>{},{transitionTimerDelayMs:Po}=xo,Fo=new Map,ri=(s,l,r,u)=>{let g=u.context||{};const w=Fo.get(l);if(w)switch(u.runningTransition){case"continue":return ge.E;case"stop":s.run(()=>w.transition$.complete()),g=Object.assign(w.context,g),Fo.delete(l)}const x=r(l,u.animation,g)||Ia;if(!u.animation||"none"===window.getComputedStyle(l).transitionProperty)return s.run(()=>x()),(0,ve.of)(void 0).pipe(function Ls(s){return l=>new Q.y(r=>l.subscribe({next:x=>s.run(()=>r.next(x)),error:x=>s.run(()=>r.error(x)),complete:()=>s.run(()=>r.complete())}))}(s));const $=new ie.xQ,z=new ie.xQ,ne=$.pipe(function or(...s){return l=>(0,dt.z)(l,(0,ve.of)(...s))}(!0));Fo.set(l,{transition$:$,complete:()=>{z.next(),z.complete()},context:g});const re=function xl(s){const{transitionDelay:l,transitionDuration:r}=window.getComputedStyle(s);return 1e3*(parseFloat(l)+parseFloat(r))}(l);return s.runOutsideAngular(()=>{const Pe=U(l,"transitionend").pipe(Pt(ne),(0,ai.h)(({target:xe})=>xe===l));(function Ct(...s){if(1===s.length){if(!(0,ye.k)(s[0]))return s[0];s=s[0]}return(0,we.n)(s,void 0).lift(new Be)})(function je(s=0,l,r){let u=-1;return Rt(l)?u=Number(l)<1?1:Number(l):(0,Kn.K)(l)&&(r=l),(0,Kn.K)(r)||(r=it),new Q.y(g=>{const w=Rt(s)?s:+s-r.now();return r.schedule(xt,w,{index:0,period:u,subscriber:g})})}(re+Po).pipe(Pt(ne)),Pe,z).pipe(Pt(ne)).subscribe(()=>{Fo.delete(l),s.run(()=>{x(),$.next(),$.complete()})})}),$.asObservable()};let co=(()=>{class s{constructor(){this.animation=xo.animation}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),sa=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),Ra=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),Lo=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({}),s})(),v=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),R=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({}),s})();var Rn=(()=>{return(s=Rn||(Rn={}))[s.Tab=9]="Tab",s[s.Enter=13]="Enter",s[s.Escape=27]="Escape",s[s.Space=32]="Space",s[s.PageUp=33]="PageUp",s[s.PageDown=34]="PageDown",s[s.End=35]="End",s[s.Home=36]="Home",s[s.ArrowLeft=37]="ArrowLeft",s[s.ArrowUp=38]="ArrowUp",s[s.ArrowRight=39]="ArrowRight",s[s.ArrowDown=40]="ArrowDown",Rn;var s})();typeof navigator<"u"&&navigator.userAgent&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2||/Android/.test(navigator.userAgent));const _d=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");function vd(s){const l=Array.from(s.querySelectorAll(_d)).filter(r=>-1!==r.tabIndex);return[l[0],l[l.length-1]]}new Date(1882,10,12),new Date(2174,10,25);let Us=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez,Di.u5]]}),s})(),Ya=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275dir=a.lG2({type:s,selectors:[["",8,"navbar"]]}),s})(),Ja=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({}),s})();class tr{constructor(l,r,u){this.nodes=l,this.viewRef=r,this.componentRef=u}}let Ud=(()=>{class s{constructor(r,u){this._el=r,this._zone=u}ngOnInit(){this._zone.onStable.asObservable().pipe((0,mt.q)(1)).subscribe(()=>{ri(this._zone,this._el.nativeElement,(r,u)=>{u&&Ro(r),r.classList.add("show")},{animation:this.animation,runningTransition:"continue"})})}hide(){return ri(this._zone,this._el.nativeElement,({classList:r})=>r.remove("show"),{animation:this.animation,runningTransition:"stop"})}}return s.\u0275fac=function(r){return new(r||s)(a.Y36(a.SBq),a.Y36(a.R0b))},s.\u0275cmp=a.Xpm({type:s,selectors:[["ngb-modal-backdrop"]],hostAttrs:[2,"z-index","1055"],hostVars:6,hostBindings:function(r,u){2&r&&(a.Tol("modal-backdrop"+(u.backdropClass?" "+u.backdropClass:"")),a.ekj("show",!u.animation)("fade",u.animation))},inputs:{animation:"animation",backdropClass:"backdropClass"},decls:0,vars:0,template:function(r,u){},encapsulation:2}),s})();class $d{close(l){}dismiss(l){}}class Gd{constructor(l,r,u,g){this._windowCmptRef=l,this._contentRef=r,this._backdropCmptRef=u,this._beforeDismiss=g,this._closed=new ie.xQ,this._dismissed=new ie.xQ,this._hidden=new ie.xQ,l.instance.dismissEvent.subscribe(w=>{this.dismiss(w)}),this.result=new Promise((w,x)=>{this._resolve=w,this._reject=x}),this.result.then(null,()=>{})}get componentInstance(){if(this._contentRef&&this._contentRef.componentRef)return this._contentRef.componentRef.instance}get closed(){return this._closed.asObservable().pipe(Pt(this._hidden))}get dismissed(){return this._dismissed.asObservable().pipe(Pt(this._hidden))}get hidden(){return this._hidden.asObservable()}get shown(){return this._windowCmptRef.instance.shown.asObservable()}close(l){this._windowCmptRef&&(this._closed.next(l),this._resolve(l),this._removeModalElements())}_dismiss(l){this._dismissed.next(l),this._reject(l),this._removeModalElements()}dismiss(l){if(this._windowCmptRef)if(this._beforeDismiss){const r=this._beforeDismiss();!function Ma(s){return s&&s.then}(r)?!1!==r&&this._dismiss(l):r.then(u=>{!1!==u&&this._dismiss(l)},()=>{})}else this._dismiss(l)}_removeModalElements(){const l=this._windowCmptRef.instance.hide(),r=this._backdropCmptRef?this._backdropCmptRef.instance.hide():(0,ve.of)(void 0);l.subscribe(()=>{const{nativeElement:u}=this._windowCmptRef.location;u.parentNode.removeChild(u),this._windowCmptRef.destroy(),this._contentRef&&this._contentRef.viewRef&&this._contentRef.viewRef.destroy(),this._windowCmptRef=null,this._contentRef=null}),r.subscribe(()=>{if(this._backdropCmptRef){const{nativeElement:u}=this._backdropCmptRef.location;u.parentNode.removeChild(u),this._backdropCmptRef.destroy(),this._backdropCmptRef=null}}),si(l,r).subscribe(()=>{this._hidden.next(),this._hidden.complete()})}}var jo=(()=>{return(s=jo||(jo={}))[s.BACKDROP_CLICK=0]="BACKDROP_CLICK",s[s.ESC=1]="ESC",jo;var s})();let zd=(()=>{class s{constructor(r,u,g){this._document=r,this._elRef=u,this._zone=g,this._closed$=new ie.xQ,this._elWithFocus=null,this.backdrop=!0,this.keyboard=!0,this.dismissEvent=new a.vpe,this.shown=new ie.xQ,this.hidden=new ie.xQ}get fullscreenClass(){return!0===this.fullscreen?" modal-fullscreen":cs(this.fullscreen)?` modal-fullscreen-${this.fullscreen}-down`:""}dismiss(r){this.dismissEvent.emit(r)}ngOnInit(){this._elWithFocus=this._document.activeElement,this._zone.onStable.asObservable().pipe((0,mt.q)(1)).subscribe(()=>{this._show()})}ngOnDestroy(){this._disableEventHandling()}hide(){const{nativeElement:r}=this._elRef,u={animation:this.animation,runningTransition:"stop"},x=si(ri(this._zone,r,()=>r.classList.remove("show"),u),ri(this._zone,this._dialogEl.nativeElement,()=>{},u));return x.subscribe(()=>{this.hidden.next(),this.hidden.complete()}),this._disableEventHandling(),this._restoreFocus(),x}_show(){const r={animation:this.animation,runningTransition:"continue"};si(ri(this._zone,this._elRef.nativeElement,(w,x)=>{x&&Ro(w),w.classList.add("show")},r),ri(this._zone,this._dialogEl.nativeElement,()=>{},r)).subscribe(()=>{this.shown.next(),this.shown.complete()}),this._enableEventHandling(),this._setFocus()}_enableEventHandling(){const{nativeElement:r}=this._elRef;this._zone.runOutsideAngular(()=>{U(r,"keydown").pipe(Pt(this._closed$),(0,ai.h)(g=>g.which===Rn.Escape)).subscribe(g=>{this.keyboard?requestAnimationFrame(()=>{g.defaultPrevented||this._zone.run(()=>this.dismiss(jo.ESC))}):"static"===this.backdrop&&this._bumpBackdrop()});let u=!1;U(this._dialogEl.nativeElement,"mousedown").pipe(Pt(this._closed$),(0,ki.b)(()=>u=!1),(0,qn.w)(()=>U(r,"mouseup").pipe(Pt(this._closed$),(0,mt.q)(1))),(0,ai.h)(({target:g})=>r===g)).subscribe(()=>{u=!0}),U(r,"click").pipe(Pt(this._closed$)).subscribe(({target:g})=>{r===g&&("static"===this.backdrop?this._bumpBackdrop():!0===this.backdrop&&!u&&this._zone.run(()=>this.dismiss(jo.BACKDROP_CLICK))),u=!1})})}_disableEventHandling(){this._closed$.next()}_setFocus(){const{nativeElement:r}=this._elRef;if(!r.contains(document.activeElement)){const u=r.querySelector("[ngbAutofocus]"),g=vd(r)[0];(u||g||r).focus()}}_restoreFocus(){const r=this._document.body,u=this._elWithFocus;let g;g=u&&u.focus&&r.contains(u)?u:r,this._zone.runOutsideAngular(()=>{setTimeout(()=>g.focus()),this._elWithFocus=null})}_bumpBackdrop(){"static"===this.backdrop&&ri(this._zone,this._elRef.nativeElement,({classList:r})=>(r.add("modal-static"),()=>r.remove("modal-static")),{animation:this.animation,runningTransition:"continue"})}}return s.\u0275fac=function(r){return new(r||s)(a.Y36(L.K0),a.Y36(a.SBq),a.Y36(a.R0b))},s.\u0275cmp=a.Xpm({type:s,selectors:[["ngb-modal-window"]],viewQuery:function(r,u){if(1&r&&a.Gf(mr,7),2&r){let g;a.iGM(g=a.CRH())&&(u._dialogEl=g.first)}},hostAttrs:["role","dialog","tabindex","-1"],hostVars:7,hostBindings:function(r,u){2&r&&(a.uIk("aria-modal",!0)("aria-labelledby",u.ariaLabelledBy)("aria-describedby",u.ariaDescribedBy),a.Tol("modal d-block"+(u.windowClass?" "+u.windowClass:"")),a.ekj("fade",u.animation))},inputs:{animation:"animation",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",backdrop:"backdrop",centered:"centered",fullscreen:"fullscreen",keyboard:"keyboard",scrollable:"scrollable",size:"size",windowClass:"windowClass",modalDialogClass:"modalDialogClass"},outputs:{dismissEvent:"dismiss"},ngContentSelectors:ii,decls:4,vars:2,consts:[["role","document"],["dialog",""],[1,"modal-content"]],template:function(r,u){1&r&&(a.F$t(),a.TgZ(0,"div",0,1)(2,"div",2),a.Hsn(3),a.qZA()()),2&r&&a.Tol("modal-dialog"+(u.size?" modal-"+u.size:"")+(u.centered?" modal-dialog-centered":"")+u.fullscreenClass+(u.scrollable?" modal-dialog-scrollable":"")+(u.modalDialogClass?" "+u.modalDialogClass:""))},styles:["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],encapsulation:2}),s})(),au=(()=>{class s{constructor(r){this._document=r}hide(){const r=Math.abs(window.innerWidth-this._document.documentElement.clientWidth),u=this._document.body,g=u.style,{overflow:w,paddingRight:x}=g;if(r>0){const $=parseFloat(window.getComputedStyle(u).paddingRight);g.paddingRight=`${$+r}px`}return g.overflow="hidden",()=>{r>0&&(g.paddingRight=x),g.overflow=w}}}return s.\u0275fac=function(r){return new(r||s)(a.LFG(L.K0))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),qa=(()=>{class s{constructor(r,u,g,w,x,$){this._applicationRef=r,this._injector=u,this._document=g,this._scrollBar=w,this._rendererFactory=x,this._ngZone=$,this._activeWindowCmptHasChanged=new ie.xQ,this._ariaHiddenValues=new Map,this._scrollBarRestoreFn=null,this._backdropAttributes=["animation","backdropClass"],this._modalRefs=[],this._windowAttributes=["animation","ariaLabelledBy","ariaDescribedBy","backdrop","centered","fullscreen","keyboard","scrollable","size","windowClass","modalDialogClass"],this._windowCmpts=[],this._activeInstances=new a.vpe,this._activeWindowCmptHasChanged.subscribe(()=>{if(this._windowCmpts.length){const z=this._windowCmpts[this._windowCmpts.length-1];((s,l,r,u=!1)=>{this._ngZone.runOutsideAngular(()=>{const g=U(l,"focusin").pipe(Pt(r),(0,X.U)(w=>w.target));U(l,"keydown").pipe(Pt(r),(0,ai.h)(w=>w.which===Rn.Tab),Ge(g)).subscribe(([w,x])=>{const[$,z]=vd(l);(x===$||x===l)&&w.shiftKey&&(z.focus(),w.preventDefault()),x===z&&!w.shiftKey&&($.focus(),w.preventDefault())}),u&&U(l,"click").pipe(Pt(r),Ge(g),(0,X.U)(w=>w[1])).subscribe(w=>w.focus())})})(0,z.location.nativeElement,this._activeWindowCmptHasChanged),this._revertAriaHidden(),this._setAriaHidden(z.location.nativeElement)}})}_restoreScrollBar(){const r=this._scrollBarRestoreFn;r&&(this._scrollBarRestoreFn=null,r())}_hideScrollBar(){this._scrollBarRestoreFn||(this._scrollBarRestoreFn=this._scrollBar.hide())}open(r,u,g,w){const x=w.container instanceof HTMLElement?w.container:ji(w.container)?this._document.querySelector(w.container):this._document.body,$=this._rendererFactory.createRenderer(null,null);if(!x)throw new Error(`The specified modal container "${w.container||"body"}" was not found in the DOM.`);this._hideScrollBar();const z=new $d,ne=this._getContentRef(r,w.injector||u,g,z,w);let re=!1!==w.backdrop?this._attachBackdrop(r,x):void 0,Pe=this._attachWindowComponent(r,x,ne),Se=new Gd(Pe,ne,re,w.beforeDismiss);return this._registerModalRef(Se),this._registerWindowCmpt(Pe),Se.hidden.pipe((0,mt.q)(1)).subscribe(()=>Promise.resolve(!0).then(()=>{this._modalRefs.length||($.removeClass(this._document.body,"modal-open"),this._restoreScrollBar(),this._revertAriaHidden())})),z.close=xe=>{Se.close(xe)},z.dismiss=xe=>{Se.dismiss(xe)},this._applyWindowOptions(Pe.instance,w),1===this._modalRefs.length&&$.addClass(this._document.body,"modal-open"),re&&re.instance&&(this._applyBackdropOptions(re.instance,w),re.changeDetectorRef.detectChanges()),Pe.changeDetectorRef.detectChanges(),Se}get activeInstances(){return this._activeInstances}dismissAll(r){this._modalRefs.forEach(u=>u.dismiss(r))}hasOpenModals(){return this._modalRefs.length>0}_attachBackdrop(r,u){let w=r.resolveComponentFactory(Ud).create(this._injector);return this._applicationRef.attachView(w.hostView),u.appendChild(w.location.nativeElement),w}_attachWindowComponent(r,u,g){let x=r.resolveComponentFactory(zd).create(this._injector,g.nodes);return this._applicationRef.attachView(x.hostView),u.appendChild(x.location.nativeElement),x}_applyWindowOptions(r,u){this._windowAttributes.forEach(g=>{ji(u[g])&&(r[g]=u[g])})}_applyBackdropOptions(r,u){this._backdropAttributes.forEach(g=>{ji(u[g])&&(r[g]=u[g])})}_getContentRef(r,u,g,w,x){return g?g instanceof a.Rgc?this._createFromTemplateRef(g,w):cs(g)?this._createFromString(g):this._createFromComponent(r,u,g,w,x):new tr([])}_createFromTemplateRef(r,u){const w=r.createEmbeddedView({$implicit:u,close(x){u.close(x)},dismiss(x){u.dismiss(x)}});return this._applicationRef.attachView(w),new tr([w.rootNodes],w)}_createFromString(r){const u=this._document.createTextNode(`${r}`);return new tr([[u]])}_createFromComponent(r,u,g,w,x){const $=r.resolveComponentFactory(g),z=a.zs3.create({providers:[{provide:$d,useValue:w}],parent:u}),ne=$.create(z),re=ne.location.nativeElement;return x.scrollable&&re.classList.add("component-host-scrollable"),this._applicationRef.attachView(ne.hostView),new tr([[re]],ne.hostView,ne)}_setAriaHidden(r){const u=r.parentElement;u&&r!==this._document.body&&(Array.from(u.children).forEach(g=>{g!==r&&"SCRIPT"!==g.nodeName&&(this._ariaHiddenValues.set(g,g.getAttribute("aria-hidden")),g.setAttribute("aria-hidden","true"))}),this._setAriaHidden(u))}_revertAriaHidden(){this._ariaHiddenValues.forEach((r,u)=>{r?u.setAttribute("aria-hidden",r):u.removeAttribute("aria-hidden")}),this._ariaHiddenValues.clear()}_registerModalRef(r){const u=()=>{const g=this._modalRefs.indexOf(r);g>-1&&(this._modalRefs.splice(g,1),this._activeInstances.emit(this._modalRefs))};this._modalRefs.push(r),this._activeInstances.emit(this._modalRefs),r.result.then(u,u)}_registerWindowCmpt(r){this._windowCmpts.push(r),this._activeWindowCmptHasChanged.next(),r.onDestroy(()=>{const u=this._windowCmpts.indexOf(r);u>-1&&(this._windowCmpts.splice(u,1),this._activeWindowCmptHasChanged.next())})}}return s.\u0275fac=function(r){return new(r||s)(a.LFG(a.z2F),a.LFG(a.zs3),a.LFG(L.K0),a.LFG(au),a.LFG(a.FYo),a.LFG(a.R0b))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),Zl=(()=>{class s{constructor(r){this._ngbConfig=r,this.backdrop=!0,this.fullscreen=!1,this.keyboard=!0}get animation(){return void 0===this._animation?this._ngbConfig.animation:this._animation}set animation(r){this._animation=r}}return s.\u0275fac=function(r){return new(r||s)(a.LFG(co))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),Ql=(()=>{class s{constructor(r,u,g,w){this._moduleCFR=r,this._injector=u,this._modalStack=g,this._config=w}open(r,u={}){const g={...this._config,animation:this._config.animation,...u};return this._modalStack.open(this._moduleCFR,this._injector,r,g)}get activeInstances(){return this._modalStack.activeInstances}dismissAll(r){this._modalStack.dismissAll(r)}hasOpenModals(){return this._modalStack.hasOpenModals()}}return s.\u0275fac=function(r){return new(r||s)(a.LFG(a._Vd),a.LFG(a.zs3),a.LFG(qa),a.LFG(Zl))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),Za=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({providers:[Ql]}),s})(),Yd=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),rc=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),vu=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),sc=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),el=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),lc=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),cc=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),uc=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({}),s})();new a.OlP("live announcer delay",{providedIn:"root",factory:function dc(){return 100}});let nl=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[[L.ez]]}),s})(),Tu=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({}),s})();const Nu=[sa,Ra,Lo,v,R,Us,Ja,Za,Yd,Tu,rc,vu,sc,el,lc,cc,uc,nl];let zs=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[Nu,sa,Ra,Lo,v,R,Us,Ja,Za,Yd,Tu,rc,vu,sc,el,lc,cc,uc,nl]}),s})()}}]);
//# sourceMappingURL=vendor.js.map