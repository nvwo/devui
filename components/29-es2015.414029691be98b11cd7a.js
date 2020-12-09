(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"1sFX":function(e,t,n){"use strict";n.d(t,"a",(function(){return o.a}));var o=n("8EcV")},"8+6a":function(e,t){e.exports='<h3 id="d-popover-\u53c2\u6570">d-popover \u53c2\u6570</h3> <table> <thead> <tr> <th align="center">\u53c2\u6570</th> <th align="center">\u7c7b\u578b</th> <th align="center">\u9ed8\u8ba4</th> <th align="left">\u8bf4\u660e</th> <th>\u8df3\u8f6c Demo</th> </tr> </thead> <tbody><tr> <td align="center">content</td> <td align="center"><code>string|HTMLElement|TemplateRef</code></td> <td align="center">--</td> <td align="left">\u5fc5\u9009\uff0c\u5f39\u51fa\u6846\u7684\u663e\u793a\u5185\u5bb9\u6216\u6a21\u677f\u5f15\u7528</td> <td><a href="/components/popover/demo#basic-usage">\u57fa\u672c\u7528\u6cd5</a></td> </tr> <tr> <td align="center">visible</td> <td align="center"><code>boolean</code></td> <td align="center">false</td> <td align="left">\u53ef\u9009\uff0c\u5f39\u6846\u7684\u521d\u59cb\u5316\u5f39\u51fa\u72b6\u6001</td> <td><a href="/components/popover/demo#manual-control-display">\u624b\u52a8\u63a7\u5236\u663e\u793a</a></td> </tr> <tr> <td align="center">trigger</td> <td align="center"><code>&#39;hover&#39;|&#39;click&#39;</code></td> <td align="center">&#39;click&#39;</td> <td align="left">\u5f39\u6846\u89e6\u53d1\u65b9\u5f0f</td> <td><a href="/components/popover/demo#mouse-can-move-in-content">\u9f20\u6807\u53ef\u79fb\u5165\u5185\u5bb9</a></td> </tr> <tr> <td align="center">controlled</td> <td align="center"><code>boolean</code></td> <td align="center">false</td> <td align="left">\u53ef\u9009\uff0c\u662f\u5426\u901a\u8fc7<code>trigger</code>\u65b9\u5f0f\u89e6\u53d1\u5f39\u6846</td> <td><a href="/components/popover/demo#basic-usage">\u57fa\u672c\u7528\u6cd5</a></td> </tr> <tr> <td align="center">position</td> <td align="center"><code>&#39;top&#39;|&#39;right&#39;|&#39;bottom&#39;|&#39;left&#39; or (&#39;top&#39;|&#39;right&#39;|&#39;bottom&#39;|&#39;left&#39;)[]</code></td> <td align="center">[&#39;top&#39;, &#39;right&#39;, &#39;bottom&#39;, &#39;left&#39;]</td> <td align="left">\u53ef\u9009\uff0c\u5185\u5bb9\u5f39\u51fa\u65b9\u5411\uff0c\u5982\u679c\u4f20\u5165\u6570\u7ec4\u5f62\u5f0f\uff0c\u5219\u5f53\u524d\u5c06\u6309\u7167\u4f20\u5165\u6570\u7ec4\u6b21\u5e8f\uff0c\u81ea\u9002\u5e94\u9009\u53d6\u4e00\u4e2a\u65b9\u5411</td> <td><a href="/components/popover/demo#basic-usage">\u57fa\u672c\u7528\u6cd5</a></td> </tr> <tr> <td align="center">popType</td> <td align="center"><code>&#39;success&#39; | &#39;error&#39; | &#39;warning&#39; | &#39;info&#39; | &#39;default&#39;</code></td> <td align="center">&#39;default&#39;</td> <td align="left">\u53ef\u9009\uff0c\u5f39\u51fa\u6846\u7c7b\u578b\uff0c\u6837\u5f0f\u4e0d\u540c</td> <td><a href="/components/popover/demo#basic-usage">\u57fa\u672c\u7528\u6cd5</a></td> </tr> <tr> <td align="center">popMaxWidth</td> <td align="center"><code>number</code></td> <td align="center">--</td> <td align="left">\u53ef\u9009\uff0c\u9650\u5236\u5f39\u51fa\u6846\u6700\u5927\u5bbd\u5ea6\uff08<code>px</code>\uff09</td> <td><a href="/components/popover/demo#custom-prompt-content">\u81ea\u5b9a\u4e49\u63d0\u793a\u5185\u5bb9</a></td> </tr> <tr> <td align="center">showAnimate</td> <td align="center"><code>boolean</code></td> <td align="center">false</td> <td align="left">\u53ef\u9009\uff0c\u662f\u5426\u663e\u793a\u52a8\u753b</td> <td><a href="/components/popover/demo#basic-usage">\u57fa\u672c\u7528\u6cd5</a></td> </tr> <tr> <td align="center">appendToBody</td> <td align="center"><code>boolean</code></td> <td align="center">true</td> <td align="left">\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a true\uff0c\u4ec5\u5f53 popover \u7ed1\u5b9a\u5143\u7d20\u5916\u5c42\u5bbd\u9ad8\u4e0d\u591f\u65f6\uff0coverflow \u4e3a hidden\uff0cpopover \u7684\u5f39\u51fa\u6846\u4e0d\u4f1a\u88ab\u4e00\u5e76\u9690\u85cf\u6389\u3002</td> <td><a href="/components/popover/demo#basic-usage">\u57fa\u672c\u7528\u6cd5</a></td> </tr> <tr> <td align="center">zIndex</td> <td align="center"><code>number</code></td> <td align="center">1060</td> <td align="left">\u53ef\u9009\uff0cz-index \u503c\uff0c\u7528\u4e8e\u624b\u52a8\u63a7\u5236\u5c42\u9ad8</td> <td><a href="/components/popover/demo#custom-prompt-content">\u81ea\u5b9a\u4e49\u63d0\u793a\u5185\u5bb9</a></td> </tr> <tr> <td align="center">scrollElement</td> <td align="center"><code>Element</code></td> <td align="center">window</td> <td align="left">\u53ef\u9009\uff0c\u5728\u8fd9\u91cc\u9ed8\u8ba4\u662f<code>window</code> , \u53ea\u6709\u5f53\u9875\u9762\u7684\u6eda\u52a8\u4e0d\u5728<code>window</code>\u4e0a\u4e14<code>appendToBody</code>\u7684\u5c5e\u6027\u4e3a<code>true</code>\u65f6\u5019\u624d\u9700\u8981\u4f20\u503c</td> <td><a href="/components/popover/demo#parent-container-settings">\u7236\u5bb9\u5668\u8bbe\u7f6e</a></td> </tr> <tr> <td align="center">hoverToContent(\u5e9f\u5f03)</td> <td align="center"><code>boolean</code></td> <td align="center">false</td> <td align="left">\u53ef\u9009\uff0c\u662f\u5426\u5141\u8bb8\u9f20\u6807\u4ece\u5bbf\u4e3b\u79fb\u52a8\u5230\u5185\u5bb9\u4e0a\uff0c\u4ec5\u9700\u8981\u5728 trigger \u4e3a hover \u7684\u65f6\u5019\u8bbe\u7f6e</td> <td><a href="/components/popover/demo#mouse-can-move-in-content">\u9f20\u6807\u53ef\u79fb\u5165\u5185\u5bb9</a></td> </tr> <tr> <td align="center">hoverDelayTime</td> <td align="center"><code>number</code></td> <td align="center">0</td> <td align="left">\u53ef\u9009\uff0c\u4ec5\u9700\u8981\u5728 trigger \u4e3a hover \u7684\u65f6\u5019\u8bbe\u7f6e\u9f20\u6807\u4ece\u5bbf\u4e3b\u79fb\u5f00\u540e\u5230\u9690\u85cfpopover\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u4ee5\u4fbf\u9f20\u6807\u79fb\u52a8\u5230\u5185\u5bb9\u4e0a\uff0c\u5355\u4f4d\u6beb\u79d2(ms)</td> <td><a href="/components/popover/demo#mouse-can-move-in-content">\u9f20\u6807\u53ef\u79fb\u5165\u5185\u5bb9</a></td> </tr> </tbody></table> '},"91sW":function(e,t,n){"use strict";n.r(t),n.d(t,"PopoverDemoModule",(function(){return F}));var o=n("tyNb"),i=n("ofXK"),r=n("V15z"),c=n("02kp"),s=n("fXoL");let d=(()=>{class e{}return e.\u0275mod=s.Mb({type:e}),e.\u0275inj=s.Lb({factory:function(t){return new(t||e)},imports:[[i.c,r.b,c.a]]}),e})();var a=n("3Pt+"),l=n("GyeE"),p=n("Wxmp"),u=n("E2zr"),g=n("zfO9"),m=n("R0Ic"),h=n("quSY"),v=n("xgIS"),b=n("Kj3r");function f(e,t){1&e&&(s.fc(),s.Ub(0,"svg",10),s.Ub(1,"g",11),s.Pb(2,"circle",12),s.Pb(3,"path",13),s.Pb(4,"polygon",14),s.Tb(),s.Tb())}function w(e,t){1&e&&(s.fc(),s.Ub(0,"svg",15),s.Ub(1,"g",11),s.Pb(2,"polygon",16),s.Pb(3,"path",17),s.Tb(),s.Tb())}function x(e,t){1&e&&(s.fc(),s.Ub(0,"svg",18),s.Ub(1,"g",11),s.Pb(2,"circle",12),s.Ub(3,"g",19),s.Pb(4,"path",20),s.Tb(),s.Tb(),s.Tb())}function y(e,t){1&e&&(s.fc(),s.Ub(0,"svg",21),s.Ub(1,"g",11),s.Pb(2,"circle",12),s.Pb(3,"path",22),s.Tb(),s.Tb())}function T(e,t){if(1&e&&(s.Ub(0,"span",5),s.Lc(1,f,5,0,"svg",6),s.Lc(2,w,4,0,"svg",7),s.Lc(3,x,5,0,"svg",8),s.Lc(4,y,4,0,"svg",9),s.Tb()),2&e){const e=s.gc();s.zb(1),s.nc("ngIf","success"===e.popType),s.zb(1),s.nc("ngIf","warning"===e.popType),s.zb(1),s.nc("ngIf","info"===e.popType),s.zb(1),s.nc("ngIf","error"===e.popType)}}function C(e,t){}const P=function(e){return{"with-icon":e}};function O(e,t){if(1&e&&s.Pb(0,"div",23),2&e){const e=s.gc();s.nc("ngClass",s.rc(2,P,e.popType&&"default"!==e.popType))("innerHTML",e.content,s.Dc)}}let M=(()=>{class e{constructor(e,t,n,o){this.renderer=e,this.positionService=t,this.elementRef=n,this.cdr=o,this.showAnimate=!1,this.zIndex=1060,this.animateState=this.showAnimate?"void":"",this.subs=new h.a,this.SCROLL_REFRESH_INTERVAL=100}get display(){return this.content?"block":"none"}get class(){return"devui-popover "+this.currentPosition+" devui-popover-"+this.popType}get state(){return this.animateState}get template(){return this.content instanceof s.L?this.content:null}ngOnInit(){this.elementRef.nativeElement.style.zIndex=this.zIndex}ngAfterViewInit(){this.updatePosition(),this.appendToBody&&(this.scrollElement||(this.scrollElement=this.positionService.getScrollParent(this.triggerElementRef.nativeElement)),this.subs.add(Object(v.a)(this.scrollElement||window,"scroll").pipe(Object(b.a)(this.SCROLL_REFRESH_INTERVAL)).subscribe(()=>{this.updatePosition()})),this.subs.add(Object(v.a)(window,"resize").pipe(Object(b.a)(this.SCROLL_REFRESH_INTERVAL)).subscribe(()=>{this.updatePosition()})))}ngAfterContentChecked(){this.updatePosition()}show(){this.animateState="visible"}hide(){this.animateState="void"}onHidden(){}onAnimationEnd(e){"void"===e.toState&&this.onHidden()}ngOnDestroy(){this.subs&&this.subs.unsubscribe()}updatePosition(){const e=this.positionService.positionElements(this.triggerElementRef.nativeElement,this.elementRef.nativeElement,this.position,this.appendToBody);this.currentPosition=e.placementPrimary,this.renderer.setStyle(this.elementRef.nativeElement,"left",e.left+"px"),this.renderer.setStyle(this.elementRef.nativeElement,"top",e.top+"px")}updatePositionAndDetectChange(){this.updatePosition(),this.cdr.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(s.Ob(s.E),s.Ob(r.a),s.Ob(s.l),s.Ob(s.h))},e.\u0275cmp=s.Ib({type:e,selectors:[["d-popover"]],hostVars:5,hostBindings:function(e,t){1&e&&s.Jc("@state.done",(function(e){return t.onAnimationEnd(e)})),2&e&&(s.Kc("@state",t.state),s.Bb(t.class),s.Ic("display",t.display))},inputs:{triggerElementRef:"triggerElementRef",position:"position",content:"content",showAnimate:"showAnimate",scrollElement:"scrollElement",appendToBody:"appendToBody",zIndex:"zIndex",popType:"popType",popMaxWidth:"popMaxWidth"},decls:6,vars:4,consts:[[1,"arrow"],[1,"devui-popover-content"],["class","devui-popover-icon",4,"ngIf"],[3,"ngTemplateOutlet"],["defaultTemplate",""],[1,"devui-popover-icon"],["class","devui-icon devui-icon-success","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",4,"ngIf"],["class","devui-icon devui-icon-warning","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",4,"ngIf"],["class","devui-icon devui-icon-info","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",4,"ngIf"],["class","devui-icon devui-icon-error","width","16px","height","16px","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",4,"ngIf"],["viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"devui-icon","devui-icon-success"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["cx","8","cy","8","r","7"],["d","M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z","fill-rule","nonzero"],["stroke-width","0.4","fill-rule","nonzero","points","8.16 10.48 7.32 11.32 6.48 10.48 6.48 10.48 3.6 7.68 4.44 6.84 7.28 9.68 11.52 5.44 12.36 6.28"],["viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"devui-icon","devui-icon-warning"],["points","7.5 1.74501946 1.39184847 13.5954649 7.08947368 14.2207621 13.9973698 13.5954649 10.9383683 5.61273879 8.40084114 1.27624313"],["d","M8.51325441,0.127397589 C8.70423071,0.228333932 8.8605922,0.383286648 8.96244623,0.57254229 L15.8714442,13.4101975 C16.1549662,13.9370117 15.9538562,14.5918482 15.4222523,14.8728158 C15.2642579,14.9563203 15.0879506,15 14.9088903,15 L1.09089441,15 C0.488410063,15 0,14.5159904 0,13.9189343 C0,13.7414873 0.0440768395,13.5667684 0.128340519,13.4101975 L7.03733844,0.57254229 C7.32086049,0.0457280838 7.98165058,-0.153569987 8.51325441,0.127397589 Z M8.87894737,11.2105263 L7.08947368,11.2105263 L7.08947368,13 L8.87894737,13 L8.87894737,11.2105263 Z M8.96842105,4.5 L7,4.5 L7.08947368,9.86842105 L8.87894737,9.86842105 L8.96842105,4.5 Z"],["viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"devui-icon","devui-icon-info"],["stroke-width","1"],["d","M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M9,5 L7,5 L7,3 L9,3 L9,5 Z M9,12.6 L7,12.6 L7,6.6 L9,6.6 L9,12.6 Z"],["width","16px","height","16px","viewBox","0 0 16 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink",1,"devui-icon","devui-icon-error"],["d","M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M9,12.6 L7,12.6 L7,10.6 L9,10.6 L9,12.6 Z M9,9.1 L7,9.1 L6.9,3.1 L9.1,3.1 L9,9.1 Z","fill-rule","nonzero"],[1,"devui-popover-main-content",3,"ngClass","innerHTML"]],template:function(e,t){if(1&e&&(s.Pb(0,"div",0),s.Ub(1,"div",1),s.Lc(2,T,5,4,"span",2),s.Lc(3,C,0,0,"ng-template",3),s.Lc(4,O,1,4,"ng-template",null,4,s.Mc),s.Tb()),2&e){const e=s.zc(5);s.zb(1),s.Ic("max-width",t.popMaxWidth,"px"),s.zb(1),s.nc("ngIf",t.popType&&"default"!==t.popType),s.zb(1),s.nc("ngTemplateOutlet",t.template||e)}},directives:[i.t,i.A,i.q],styles:['.devui-font-base[_ngcontent-%COMP%], .devui-font-size-base[_ngcontent-%COMP%]{font-size:12px;font-size:var(--devui-font-size,12px)}.devui-font-base[_ngcontent-%COMP%]{font-weight:400;line-height:1.5}.devui-font-modal-title[_ngcontent-%COMP%], .devui-font-size-modal-title[_ngcontent-%COMP%]{font-size:18px;font-size:var(--devui-font-size-modal-title,18px)}.devui-font-modal-title[_ngcontent-%COMP%]{font-weight:700;line-height:1.5}.devui-font-page-title[_ngcontent-%COMP%], .devui-font-size-page-title[_ngcontent-%COMP%]{font-size:16px;font-size:var(--devui-font-size-page-title,16px)}.devui-font-page-title[_ngcontent-%COMP%]{font-weight:700;line-height:1.5}.devui-font-secondary-title[_ngcontent-%COMP%], .devui-font-size-secondary-title[_ngcontent-%COMP%]{font-size:14px;font-size:var(--devui-font-size-card-title,14px)}.devui-font-secondary-title[_ngcontent-%COMP%]{font-weight:700;line-height:1.5}.devui-popover[_nghost-%COMP%]{font-size:12px;font-size:var(--devui-font-size,12px);position:absolute;top:0;left:0;line-height:1.5;border:none;border-radius:4px;z-index:1060;background-color:#464d6e;background-color:var(--devui-feedback-overlay-bg,#464d6e);color:#dfe1e6;color:var(--devui-feedback-overlay-text,#dfe1e6);overflow-wrap:break-word}.devui-popover[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{border-width:8px}.devui-popover[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%], .devui-popover[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.devui-popover[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]:after{content:""}.devui-popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{left:50%;margin-left:-7px;border-bottom-width:0;border-top-color:#464d6e;border-top-color:var(--devui-feedback-overlay-bg,#464d6e);bottom:-8px}.devui-popover.right[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{top:50%;left:-8px;margin-top:-8px;border-left-width:0;border-right-color:#464d6e;border-right-color:var(--devui-feedback-overlay-bg,#464d6e)}.devui-popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{left:50%;margin-left:-7px;border-top-width:0;border-bottom-color:#464d6e;border-bottom-color:var(--devui-feedback-overlay-bg,#464d6e);top:-8px}.devui-popover.left[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{top:50%;right:-8px;margin-top:-8px;border-right-width:0;border-left-color:#464d6e;border-left-color:var(--devui-feedback-overlay-bg,#464d6e)}.devui-popover.top[_nghost-%COMP%]{margin-top:-10px;box-shadow:-5px 5px 20px 0 rgba(0,0,0,.2);box-shadow:-5px 5px 20px 0 var(--devui-shadow,rgba(0,0,0,.2))}.devui-popover.bottom[_nghost-%COMP%]{margin-top:10px}.devui-popover.bottom[_nghost-%COMP%], .devui-popover.left[_nghost-%COMP%]{box-shadow:5px -5px 20px 0 rgba(0,0,0,.2);box-shadow:5px -5px 20px 0 var(--devui-shadow,rgba(0,0,0,.2))}.devui-popover.left[_nghost-%COMP%]{margin-left:-10px}.devui-popover.right[_nghost-%COMP%]{margin-left:10px;box-shadow:-5px 5px 20px 0 rgba(0,0,0,.2);box-shadow:-5px 5px 20px 0 var(--devui-shadow,rgba(0,0,0,.2))}.devui-popover-icon[_ngcontent-%COMP%]{display:block;position:absolute;left:10px;top:6px}.devui-popover-icon[_ngcontent-%COMP%]   svg.devui-icon[_ngcontent-%COMP%]{width:16px;height:16px}.devui-popover-main-content.with-icon[_ngcontent-%COMP%]{text-indent:20px}.devui-icon.devui-icon-success[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > path[_ngcontent-%COMP%]{fill:#50d4ab;fill:var(--devui-success,#50d4ab)}.devui-icon.devui-icon-success[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > circle[_ngcontent-%COMP%], .devui-icon.devui-icon-success[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > polygon[_ngcontent-%COMP%], .devui-icon.devui-icon-warning[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > polygon[_ngcontent-%COMP%]{fill:#fff;fill:var(--devui-light-text,#fff)}.devui-icon.devui-icon-warning[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > path[_ngcontent-%COMP%]{fill:#fac20a;fill:var(--devui-warning,#fac20a)}.devui-icon.devui-icon-info[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > g[_ngcontent-%COMP%]{fill:#5e7ce0;fill:var(--devui-info,#5e7ce0)}.devui-icon.devui-icon-info[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > circle[_ngcontent-%COMP%]{fill:#fff;fill:var(--devui-light-text,#fff)}.devui-icon.devui-icon-error[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > path[_ngcontent-%COMP%]{fill:#f66f6a;fill:var(--devui-danger,#f66f6a)}.devui-icon.devui-icon-error[_ngcontent-%COMP%] > g[_ngcontent-%COMP%] > circle[_ngcontent-%COMP%]{fill:#fff;fill:var(--devui-light-text,#fff)}.devui-popover-content[_ngcontent-%COMP%]{padding:5px 14px}'],data:{animation:[Object(m.j)("state",[Object(m.g)("void",Object(m.h)({opacity:0})),Object(m.g)("visible",Object(m.h)({opacity:1})),Object(m.i)("* => visible",Object(m.e)("150ms cubic-bezier(0.0, 0.0, 0.2, 1)")),Object(m.i)("visible => *",Object(m.e)("150ms cubic-bezier(0.4, 0.0, 1, 1)"))])]}}),e})();var z=n("VRyK");let _=(()=>{class e{constructor(e,t,n,o,i){this.triggerElementRef=e,this.overlayContainerRef=t,this.viewContainerRef=n,this.injector=o,this.componentFactoryResolver=i,this.subscription=new h.a,this.blurSub=new h.a,this.blurSubscription=new h.a,this.position=["top","right","bottom","left"],this.appendToBody=!0,this.zIndex=1060,this.popType="default",this.trigger="click",this.hoverToContent=!1,this.hoverDelayTime=0,this.onDocumentClick=e=>{e.stopPropagation(),!this.controlled||this.triggerElementRef.nativeElement.contains(e.target)||this.popoverComponentRef&&this.popoverComponentRef.instance.elementRef.nativeElement.contains(e.target)||this.hide()}}set content(e){this._content=e,this.popoverComponentRef&&(this.popoverComponentRef.instance.content=e,setTimeout(()=>{this.popoverComponentRef&&this.popoverComponentRef.instance.updatePosition()}))}set visible(e){e?setTimeout(()=>this.show(),0):this.hide()}get eleAppendToBody(){return this.appendToBody||"fixed"===this.triggerElementRef.nativeElement.style.position}createPopover(){this.popoverComponentRef=this.eleAppendToBody?this.overlayContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(M)):this.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(M),this.viewContainerRef.length,this.injector),Object.assign(this.popoverComponentRef.instance,{content:this._content,triggerElementRef:this.triggerElementRef,position:this.position,popType:this.popType,popMaxWidth:this.popMaxWidth,scrollElement:this.scrollElement,appendToBody:this.eleAppendToBody,zIndex:this.zIndex})}show(){this.hide(),this.popoverComponentRef||this.createPopover(),this.showAnimate&&this.popoverComponentRef.instance.show(),document.addEventListener("click",this.onDocumentClick),"hover"===this.trigger&&this.hoverDelayTime&&(this.blurSubscription=Object(v.a)(this.popoverComponentRef.instance.elementRef.nativeElement,"mouseleave").subscribe(e=>{"mouseleave"===e.type&&this.controlled&&this.hide()}),this.blurSub.add(this.blurSubscription))}destroy(){this.popoverComponentRef&&(this.popoverComponentRef.destroy(),this.popoverComponentRef=null),document.removeEventListener("click",this.onDocumentClick)}ngOnInit(){const e=this.triggerElementRef.nativeElement;"click"===this.trigger?this.subscription.add(Object(v.a)(e,"click").subscribe(e=>{this.controlled&&this.show()})):"hover"===this.trigger&&this.subscription.add(Object(z.a)(Object(v.a)(e,"mouseenter"),Object(v.a)(e,"mouseleave")).subscribe(e=>{"mouseenter"===e.type&&this.controlled&&this.show(),"mouseleave"===e.type&&this.controlled&&(this.hoverDelayTime?(clearTimeout(this.hideTimer),this.hideTimer=setTimeout(()=>{const t=e.relatedTarget;this.triggerElementRef.nativeElement.contains(t)||this.popoverComponentRef&&this.popoverComponentRef.instance.elementRef.nativeElement.contains(t)||this.hide()},this.hoverDelayTime)):this.hide())}))}ngOnDestroy(){this.destroy(),this.subscription.unsubscribe(),this.blurSub&&this.blurSub.unsubscribe()}hide(){if(this.blurSubscription&&(this.blurSubscription.unsubscribe(),this.blurSub.remove(this.blurSubscription)),this.popoverComponentRef){if(!this.showAnimate)return void this.destroy();this.popoverComponentRef.instance.hide(),this.popoverComponentRef.instance.onHidden=()=>{this.destroy()}}}}return e.\u0275fac=function(t){return new(t||e)(s.Ob(s.l),s.Ob(c.b),s.Ob(s.P),s.Ob(s.r),s.Ob(s.j))},e.\u0275dir=s.Jb({type:e,selectors:[["","dPopover",""]],inputs:{content:"content",controlled:"controlled",position:"position",showAnimate:"showAnimate",scrollElement:"scrollElement",appendToBody:"appendToBody",zIndex:"zIndex",popType:"popType",popMaxWidth:"popMaxWidth",trigger:"trigger",hoverToContent:"hoverToContent",hoverDelayTime:"hoverDelayTime",visible:"visible"},exportAs:["dPopover"]}),e})();const E=function(){return["top","right","bottom","left"]},L=function(){return["bottom","right","top","left"]};let k=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["d-basic"]],decls:12,vars:32,consts:[[1,"btn-group"],["dPopover","",3,"popType","content","position","controlled","showAnimate","appendToBody"],["dPopover","",3,"content","popType","position","controlled","showAnimate","appendToBody"]],template:function(e,t){1&e&&(s.Ub(0,"section"),s.Ub(1,"div",0),s.Ub(2,"d-button",1),s.Nc(3," default "),s.Tb(),s.Ub(4,"d-button",1),s.Nc(5," info "),s.Tb(),s.Ub(6,"d-button",2),s.Nc(7," error "),s.Tb(),s.Ub(8,"d-button",2),s.Nc(9," warning "),s.Tb(),s.Ub(10,"d-button",1),s.Nc(11," success "),s.Tb(),s.Tb(),s.Tb()),2&e&&(s.zb(2),s.nc("popType","default")("content","default!")("position","left")("controlled",!0)("showAnimate",!0)("appendToBody",!1),s.zb(2),s.nc("popType","info")("content","info!")("position",s.qc(30,E))("controlled",!0)("showAnimate",!0)("appendToBody",!1),s.zb(2),s.nc("content","error!")("popType","error")("position","top")("controlled",!0)("showAnimate",!0)("appendToBody",!1),s.zb(2),s.nc("content","warning!")("popType","warning")("position","bottom")("controlled",!0)("showAnimate",!0)("appendToBody",!1),s.zb(2),s.nc("popType","success")("content","success!")("position",s.qc(31,L))("controlled",!0)("showAnimate",!0)("appendToBody",!0))},directives:[g.a,_],styles:[".btn-group[_ngcontent-%COMP%] > d-button[_ngcontent-%COMP%]{margin-right:5px;margin-bottom:5px}"]}),e})(),S=(()=>{class e{constructor(){this.nameErrMsg="\u8f93\u5165\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e4\u4e2a\u5b57\u7b26!"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["d-manual"]],decls:2,vars:4,consts:[["dTextInput","","type","text","dPopover","","id","name","name","name","required","","minlength","4","autocomplete","false",1,"devui-form-group","devui-input",2,"width","300px",3,"ngModel","content","position","visible","ngModelChange"],["nameValid","ngModel"]],template:function(e,t){if(1&e&&(s.Ub(0,"input",0,1),s.cc("ngModelChange",(function(e){return t.name=e})),s.Tb()),2&e){const e=s.zc(1);s.nc("ngModel",t.name)("content",t.nameErrMsg)("position","top")("visible",e.errors&&(e.dirty||e.touched)||!1)}},directives:[a.c,_,a.v,a.k,a.n,a.q],encapsulation:2}),e})();var I=n("jhN1");function R(e,t){1&e&&(s.Ub(0,"h1"),s.Nc(1,"\u81ea\u5b9a\u4e49\u63d0\u793a"),s.Tb(),s.Ub(2,"p"),s.Nc(3,"\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63d0\u793a"),s.Tb())}let U=(()=>{class e{constructor(e){this.domSanitizer=e,this.content=this.domSanitizer.bypassSecurityTrustHtml('<p>\u81ea\u5b9a\u4e49\u63d0\u793a\uff0c\u5e26\u94fe\u63a5</p>\n     <p><a class="devui-link" href="https://devui.design" target="_blank">\u5b66\u4e60\u66f4\u591a</a></p>\n     <p><a class="devui-link-light" href="https://devui.design" target="_blank">\u5b66\u4e60\u66f4\u591a</a></p>')}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(s.Ob(I.b))},e.\u0275cmp=s.Ib({type:e,selectors:[["d-customize"]],decls:6,vars:9,consts:[["dPopover","",2,"margin-right","4px",3,"content","popMaxWidth","zIndex","position","controlled"],["dPopover","",3,"content","position","trigger","controlled"],["customTemplate",""]],template:function(e,t){if(1&e&&(s.Ub(0,"d-button",0),s.Nc(1," click me!\n"),s.Tb(),s.Ub(2,"d-button",1),s.Nc(3," hover me!\n"),s.Tb(),s.Lc(4,R,4,0,"ng-template",null,2,s.Mc)),2&e){const e=s.zc(5);s.nc("content",t.content)("popMaxWidth",100)("zIndex",100)("position","right")("controlled",!0),s.zb(2),s.nc("content",e)("position","right")("trigger","hover")("controlled",!0)}},directives:[g.a,_],encapsulation:2}),e})(),A=(()=>{class e{constructor(){this.scrollElement=document.querySelector(".doc-viewer-container")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["d-scroll-element"]],decls:4,vars:4,consts:[["dPopover","",3,"content","position","controlled","scrollElement"]],template:function(e,t){1&e&&(s.Ub(0,"section"),s.Ub(1,"div"),s.Ub(2,"d-button",0),s.Nc(3," Right "),s.Tb(),s.Tb(),s.Tb()),2&e&&(s.zb(2),s.nc("content","I am a popover!")("position","right")("controlled",!0)("scrollElement",t.scrollElement))},directives:[g.a,_],encapsulation:2}),e})(),B=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["d-hover-delay-time"]],decls:4,vars:8,consts:[[1,"btn-group"],["dPopover","",3,"popType","content","position","controlled","showAnimate","appendToBody","trigger","hoverDelayTime"]],template:function(e,t){1&e&&(s.Ub(0,"section"),s.Ub(1,"div",0),s.Ub(2,"d-button",1),s.Nc(3," hoverDelayTime "),s.Tb(),s.Tb(),s.Tb()),2&e&&(s.zb(2),s.nc("popType","default")("content","hoverDelayTime")("position","top")("controlled",!0)("showAnimate",!0)("appendToBody",!1)("trigger","hover")("hoverDelayTime",5e3))},directives:[g.a,_],styles:[".btn-group[_ngcontent-%COMP%] > d-button[_ngcontent-%COMP%]{margin-right:5px;margin-bottom:5px}"]}),e})();const D=function(){return{top:60,bottom:0}};let N=(()=>{class e{constructor(){this.basicSource=[{title:"HTML",language:"xml",code:n("SzkW")},{title:"TS",language:"typescript",code:n("YoqH")},{title:"SCSS",language:"css",code:n("Ct3S")}],this.manualSource=[{title:"HTML",language:"xml",code:n("Ygog")},{title:"TS",language:"typescript",code:n("Elbd")}],this.customizeSource=[{title:"HTML",language:"xml",code:n("hGYx")},{title:"TS",language:"typescript",code:n("VJ21")}],this.scrollElementSource=[{title:"HTML",language:"xml",code:n("brvn")},{title:"TS",language:"typescript",code:n("mJWC")}],this.hoverDelayTimeSource=[{title:"HTML",language:"xml",code:n("eaiX")},{title:"TS",language:"typescript",code:n("xB7w")}],this.navItems=[{dAnchorLink:"basic-usage",value:"\u57fa\u672c\u7528\u6cd5"},{dAnchorLink:"manual-control-display",value:"\u624b\u52a8\u63a7\u5236\u663e\u793a"},{dAnchorLink:"custom-prompt-content",value:"\u81ea\u5b9a\u4e49\u63d0\u793a\u5185\u5bb9"},{dAnchorLink:"parent-container-settings",value:"\u7236\u5bb9\u5668\u8bbe\u7f6e"},{dAnchorLink:"hover-delay-time",value:"\u9f20\u6807\u79fb\u51fa\u5bbf\u4e3b\u5ef6\u8fdf\u65f6\u95f4"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Ib({type:e,selectors:[["ng-component"]],decls:36,vars:13,consts:[["dAnchorBox","","dAnchorHashSupport","",1,"demo-container",3,"view"],[3,"navItems"],[1,"demo-example",3,"dAnchor"],[1,"demo-title"],[1,"demo-text"],["id","basic",3,"sourceData"],["demo",""],["id","manual",3,"sourceData"],["id","customize",3,"sourceData"],["id","scroll-element",3,"sourceData"],["id","hover-delay-time",3,"sourceData"]],template:function(e,t){1&e&&(s.Ub(0,"div",0),s.Pb(1,"d-demo-nav",1),s.Ub(2,"div",2),s.Ub(3,"div",3),s.Nc(4,"\u57fa\u672c\u7528\u6cd5"),s.Tb(),s.Pb(5,"div",4),s.Ub(6,"d-codebox",5),s.Pb(7,"d-basic",6),s.Tb(),s.Tb(),s.Ub(8,"div",2),s.Ub(9,"div",3),s.Nc(10,"\u624b\u52a8\u63a7\u5236\u663e\u793a"),s.Tb(),s.Ub(11,"div",4),s.Nc(12," \u901a\u8fc7visible\u63a7\u5236\u5f39\u6846\u663e\u793a\u5b9e\u73b0\u8868\u5355\u9a8c\u8bc1 "),s.Tb(),s.Ub(13,"d-codebox",7),s.Pb(14,"d-manual",6),s.Tb(),s.Tb(),s.Ub(15,"div",2),s.Ub(16,"div",3),s.Nc(17,"\u81ea\u5b9a\u4e49\u63d0\u793a\u5185\u5bb9"),s.Tb(),s.Ub(18,"div",4),s.Nc(19,"\u652f\u6301\u4f20\u5165HTMLElement\u6216TemplateRef\u7c7b\u578b"),s.Tb(),s.Ub(20,"d-codebox",8),s.Pb(21,"d-customize",6),s.Tb(),s.Tb(),s.Ub(22,"div",2),s.Ub(23,"div",3),s.Nc(24,"\u7236\u5bb9\u5668\u8bbe\u7f6e"),s.Tb(),s.Ub(25,"div",4),s.Nc(26,"scrollElement\u914d\u7f6e\uff0c\u8fd9\u91cc\u9ed8\u8ba4\u662f window\uff0c\u9ed8\u8ba4\u53ef\u4ee5\u4e0d\u4f20\uff0c\u53ea\u6709\u5f53\u9875\u9762\u7684\u6eda\u52a8\u4e0d\u5728 window \u4e0a\u7684\u65f6\u5019\u624d\u9700\u8981\u4f20\u9012"),s.Tb(),s.Ub(27,"d-codebox",9),s.Pb(28,"d-scroll-element",6),s.Tb(),s.Tb(),s.Ub(29,"div",2),s.Ub(30,"div",3),s.Nc(31,"\u9f20\u6807\u79fb\u51fa\u5bbf\u4e3b\u5ef6\u8fdf\u65f6\u95f4"),s.Tb(),s.Ub(32,"div",4),s.Nc(33,"hoverDelayTime\u8bbe\u7f6e"),s.Tb(),s.Ub(34,"d-codebox",10),s.Pb(35,"d-hover-delay-time",6),s.Tb(),s.Tb(),s.Tb()),2&e&&(s.nc("view",s.qc(12,D)),s.zb(1),s.nc("navItems",t.navItems),s.zb(1),s.nc("dAnchor","basic-usage"),s.zb(4),s.nc("sourceData",t.basicSource),s.zb(2),s.nc("dAnchor","manual-control-display"),s.zb(5),s.nc("sourceData",t.manualSource),s.zb(2),s.nc("dAnchor","custom-prompt-content"),s.zb(5),s.nc("sourceData",t.customizeSource),s.zb(2),s.nc("dAnchor","parent-container-settings"),s.zb(5),s.nc("sourceData",t.scrollElementSource),s.zb(2),s.nc("dAnchor","hover-delay-time"),s.zb(5),s.nc("sourceData",t.hoverDelayTimeSource))},directives:[l.a,l.b,p.a,l.c,u.a,k,S,U,A,B],encapsulation:2}),e})();var j=n("1sFX"),H=n("GeQP"),W=n("YZy5"),V=n("JG5r");let F=(()=>{class e{}return e.\u0275mod=s.Mb({type:e}),e.\u0275inj=s.Lb({factory:function(t){return new(t||e)},imports:[[i.c,d,a.i,j.a,W.a,g.b,V.a,o.g.forChild([{path:"",redirectTo:"demo"},{path:"demo",component:N},{path:"api",component:H.a,data:{api:n("8+6a")}}])]]}),e})()},Ct3S:function(e,t,n){"use strict";n.r(t),t.default=".btn-group > d-button {\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n"},Elbd:function(e,t,n){"use strict";n.r(t),t.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'd-manual',\n  templateUrl: './manual.component.html'\n})\nexport class ManualComponent implements OnInit {\n  name;\n  nameErrMsg = '\u8f93\u5165\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e4\u4e2a\u5b57\u7b26!';\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"},JG5r:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("ofXK"),i=n("N/fn"),r=n("GyeE"),c=n("fXoL");let s=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[o.c,i.b,r.e],i.b,r.e]}),e})()},SzkW:function(e,t,n){"use strict";n.r(t),t.default='<section>\n  <div class="btn-group">\n    <d-button\n      dPopover\n      [popType]="\'default\'"\n      [content]="\'default!\'"\n      [position]="\'left\'"\n      [controlled]="true"\n      [showAnimate]="true"\n      [appendToBody]="false"\n    >\n      default\n    </d-button>\n    <d-button\n      dPopover\n      [popType]="\'info\'"\n      [content]="\'info!\'"\n      [position]="[\'top\', \'right\', \'bottom\', \'left\']"\n      [controlled]="true"\n      [showAnimate]="true"\n      [appendToBody]="false"\n    >\n      info\n    </d-button>\n    <d-button\n      dPopover\n      [content]="\'error!\'"\n      [popType]="\'error\'"\n      [position]="\'top\'"\n      [controlled]="true"\n      [showAnimate]="true"\n      [appendToBody]="false"\n    >\n      error\n    </d-button>\n    <d-button\n      dPopover\n      [content]="\'warning!\'"\n      [popType]="\'warning\'"\n      [position]="\'bottom\'"\n      [controlled]="true"\n      [showAnimate]="true"\n      [appendToBody]="false"\n    >\n      warning\n    </d-button>\n    <d-button\n      dPopover\n      [popType]="\'success\'"\n      [content]="\'success!\'"\n      [position]="[\'bottom\', \'right\', \'top\', \'left\']"\n      [controlled]="true"\n      [showAnimate]="true"\n      [appendToBody]="true"\n    >\n      success\n    </d-button>\n  </div>\n</section>\n'},VJ21:function(e,t,n){"use strict";n.r(t),t.default='import { Component, OnInit } from \'@angular/core\';\nimport { DomSanitizer } from \'@angular/platform-browser\';\n\n@Component({\n  selector: \'d-customize\',\n  templateUrl: \'./customize.component.html\',\n})\nexport class CustomizeTmpComponent implements OnInit {\n  content = this.domSanitizer.bypassSecurityTrustHtml(\n    `<p>\u81ea\u5b9a\u4e49\u63d0\u793a\uff0c\u5e26\u94fe\u63a5</p>\n     <p><a class="devui-link" href="https://devui.design" target="_blank">\u5b66\u4e60\u66f4\u591a</a></p>\n     <p><a class="devui-link-light" href="https://devui.design" target="_blank">\u5b66\u4e60\u66f4\u591a</a></p>`\n    );\n  constructor(private domSanitizer: DomSanitizer) { }\n\n  ngOnInit() {\n  }\n\n}\n'},Wxmp:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("fXoL"),i=n("N/fn"),r=n("ofXK"),c=n("GyeE");function s(e,t){if(1&e&&(o.Ub(0,"li",5),o.Nc(1),o.Tb()),2&e){const e=t.$implicit;o.oc("dAnchorLink",e.dAnchorLink),o.zb(1),o.Pc(" ",e.value," ")}}let d=(()=>{class e{constructor(){}ngOnInit(){this.demoDocViewerMain=document.querySelector(".doc-viewer-container .main")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["d-demo-nav"]],inputs:{navItems:"navItems"},decls:7,vars:2,consts:[[1,"demo-nav"],[3,"container"],[1,"fast-forward"],[1,"step-nav"],["anchorActive","active",3,"dAnchorLink",4,"ngFor","ngForOf"],["anchorActive","active",3,"dAnchorLink"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"d-sticky",1),o.Ub(2,"div"),o.Ub(3,"div",2),o.Nc(4,"\u5feb\u901f\u524d\u5f80"),o.Tb(),o.Ub(5,"ul",3),o.Lc(6,s,2,2,"li",4),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.zb(1),o.nc("container",t.demoDocViewerMain),o.zb(5),o.nc("ngForOf",t.navItems))},directives:[i.a,r.s,c.d],styles:[".demo-nav[_ngcontent-%COMP%]{width:240px;position:fixed;top:100px;right:0;height:100%;z-index:1}.demo-nav[_ngcontent-%COMP%]   .fast-forward[_ngcontent-%COMP%]{font-family:PingFangSC-Semibold;width:130px;font-size:14px;font-size:var(--devui-font-size-card-title,14px);color:#252b3a;color:var(--devui-text,#252b3a);line-height:24px;font-weight:700;padding-bottom:10px;margin-left:20px;border-bottom:1px solid #dfe1e6;border-bottom:1px solid var(--devui-dividing-line,#dfe1e6)}.demo-nav[_ngcontent-%COMP%]   .step-nav[_ngcontent-%COMP%]{margin-top:10px}.demo-nav[_ngcontent-%COMP%]   .step-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none;padding-left:20px;cursor:pointer;height:25px;line-height:25px;font-size:12px;font-size:var(--devui-font-size,12px);color:#252b3a;color:var(--devui-text,#252b3a);position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.demo-nav[_ngcontent-%COMP%]   .step-nav[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]{color:#526ecc;color:var(--devui-link,#526ecc)}"]}),e})()},Ygog:function(e,t,n){"use strict";n.r(t),t.default='<input\n  dTextInput\n  class="devui-form-group devui-input"\n  style="width: 300px;"\n  type="text"\n  dPopover\n  id="name"\n  name="name"\n  required\n  minlength="4"\n  [(ngModel)]="name"\n  #nameValid="ngModel"\n  autocomplete="false"\n  [content]="nameErrMsg"\n  [position]="\'top\'"\n  [visible]="(nameValid.errors && (nameValid.dirty || nameValid.touched)) || false"\n/>\n'},YoqH:function(e,t,n){"use strict";n.r(t),t.default="import { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'd-basic',\n  templateUrl: './basic.component.html',\n  styleUrls: ['./basic.component.css']\n})\nexport class BasicComponent implements OnInit {\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n"},brvn:function(e,t,n){"use strict";n.r(t),t.default='<section>\n  <div>\n    \x3c!--\u6ce8\uff1ascrollElement \u5728\u8fd9\u91cc\u9ed8\u8ba4\u662f window , \u9ed8\u8ba4\u53ef\u4ee5\u4e0d\u4f20\uff0c\u53ea\u6709\u5f53\u9875\u9762\u7684\u6eda\u52a8\u4e0d\u5728 window \u4e0a\u7684\u65f6\u5019\u624d\u9700\u8981\u4f20\u9012--\x3e\n    <d-button dPopover [content]="\'I am a popover!\'" [position]="\'right\'" [controlled]="true" [scrollElement]="scrollElement">\n      Right\n    </d-button>\n  </div>\n</section>\n'},eaiX:function(e,t,n){"use strict";n.r(t),t.default='<section>\n  <div class="btn-group">\n    <d-button\n      dPopover\n      [popType]="\'default\'"\n      [content]="\'hoverDelayTime\'"\n      [position]="\'top\'"\n      [controlled]="true"\n      [showAnimate]="true"\n      [appendToBody]="false"\n      [trigger]="\'hover\'"\n      [hoverDelayTime]="5000"\n    >\n      hoverDelayTime\n    </d-button>\n  </div>\n</section>\n'},hGYx:function(e,t,n){"use strict";n.r(t),t.default='<d-button\n  dPopover\n  [content]="content"\n  [popMaxWidth]="100"\n  [zIndex]="100"\n  [position]="\'right\'"\n  [controlled]="true"\n  style="margin-right: 4px;"\n>\n  click me!\n</d-button>\n<d-button dPopover [content]="customTemplate" [position]="\'right\'" [trigger]="\'hover\'" [controlled]="true">\n  hover me!\n</d-button>\n\n<ng-template #customTemplate>\n  <h1>\u81ea\u5b9a\u4e49\u63d0\u793a</h1>\n  <p>\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u63d0\u793a</p>\n</ng-template>\n'},mJWC:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n@Component({\n    selector: 'd-scroll-element',\n    templateUrl: './scroll-element.component.html'\n})\nexport class ScrollElementComponent {\n    scrollElement: Element = document.querySelector('.doc-viewer-container');\n    constructor() {\n    }\n}\n"},xB7w:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'd-hover-delay-time',\n  templateUrl: './hover-delay-time.component.html',\n  styleUrls: ['./hover-delay-time.component.css']\n})\nexport class HoverDelayTimeComponent {\n  constructor() { }\n}\n"}}]);