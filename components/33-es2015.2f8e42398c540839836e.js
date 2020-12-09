(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"1sFX":function(e,n,t){"use strict";t.d(n,"a",(function(){return o.a}));var o=t("8EcV")},"5Ra8":function(e,n,t){"use strict";t.r(n),n.default="import { Component } from '@angular/core';\n@Component({\n  selector: 'd-basic',\n  templateUrl: './basic.component.html'\n})\nexport class BasicComponent {\n  source = [{ title: 'DevUI', showMenu: false, link: '/components/get-start' },\n  {\n    title: '\u9762\u5305\u5c51', showMenu: true, link: '/components/breadcrumb/demo', noNavigation: true,\n    menuList: [\n      { name: '\u951a\u70b9', link: '/components/anchor/demo', target: '_blank' },\n      { name: '\u6309\u94ae', link: '/components/button/demo#\u4e3b\u8981\u6309\u94ae', linkType: 'routerLink' }\n    ]\n  }];\n  constructor() {\n  }\n}\n"},"5bOu":function(e,n,t){"use strict";t.r(n),n.default='<section>\n  <d-breadcrumb [separatorIcon]="separatorIcon">\n    <d-breadcrumb-item>\n      <a routerLink="/components/get-start">DevUI</a>\n    </d-breadcrumb-item>\n    <d-breadcrumb-item [showMenu]="true" [customMenuTemplate]="menuTpl">\n      <span>\u9762\u5305\u5c51</span>\n    </d-breadcrumb-item>\n  </d-breadcrumb>\n  <ng-template #menuTpl>\n    <div class="breadcrumb-dropdown-menu">\n      <li>\n        <span class="icon-arrow-right"></span>\n        <a href="/components/anchor/demo">\u951a\u70b9</a>\n      </li>\n      <li>\n        <span class="icon-arrow-right"></span>\n        <a href="/components/button/demo">\u6309\u94ae</a>\n      </li>\n    </div>\n  </ng-template>\n  <ng-template #separatorIcon>\n    <span class="icon-arrow-right"></span>\n  </ng-template>\n</section>\n'},"9eQg":function(e,n,t){"use strict";t.r(n),n.default="import { Component } from '@angular/core';\n@Component({\n  selector: 'd-custom',\n  templateUrl: './custom.component.html',\n  styleUrls: ['./custom.component.scss']\n})\nexport class CustomComponent {\n  constructor() {\n  }\n}\n"},Aq17:function(e,n){e.exports='<h2 id="d-breadcrumb-item-\u53c2\u6570">d-breadcrumb-item \u53c2\u6570</h2> <table> <thead> <tr> <th align="center">\u53c2\u6570</th> <th align="center">\u7c7b\u578b</th> <th align="center">\u9ed8\u8ba4</th> <th align="left">\u8bf4\u660e</th> <th>\u8df3\u8f6c Demo</th> </tr> </thead> <tbody><tr> <td align="center">showMenu</td> <td align="center"><code>boolean</code></td> <td align="center">false</td> <td align="left">\u53ef\u9009\uff0c\u662f\u5426\u9700\u8981\u663e\u793a\u4e0b\u62c9\u7bad\u5934\u53ca\u4e0b\u62c9\u5217\u8868\u5185\u5bb9</td> <td><a href="/components/breadcrumb/demo#drop-down-breadcrumbs">\u53ef\u4e0b\u62c9\u7684\u9762\u5305\u5c51</a></td> </tr> <tr> <td align="center">menuList</td> <td align="center"><code>Array&lt;MenuConfig&gt;</code></td> <td align="center">--</td> <td align="left">\u53ef\u9009\uff0cshowMenu \u4e3a true \u65f6\u4f20\u5165\uff0c\u4e0b\u62c9\u5217\u8868\u7684\u663e\u793a\u5185\u5bb9</td> <td><a href="/components/breadcrumb/demo#drop-down-breadcrumbs">\u53ef\u4e0b\u62c9\u7684\u9762\u5305\u5c51</a></td> </tr> <tr> <td align="center">isSearch</td> <td align="center"><code>boolean</code></td> <td align="center">false</td> <td align="left">\u53ef\u9009\uff0cshowMenu \u4e3a true \u65f6\u4f20\u5165\uff0c\u4e0b\u62c9\u5217\u8868\u662f\u5426\u9700\u8981\u641c\u7d22\u529f\u80fd</td> <td><a href="/components/breadcrumb/demo#with-search-drop-down-breadcrumbs">\u5e26\u641c\u7d22\u4e0b\u62c9\u7684\u9762\u5305\u5c51</a></td> </tr> <tr> <td align="center">customMenuTemplate</td> <td align="center"><code>TemplateRef&lt;any&gt;</code></td> <td align="center">--</td> <td align="left">\u53ef\u9009\uff0cshowMenu \u4e3a true \u65f6\u4f20\u5165\uff0c\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5217\u8868</td> <td><a href="/components/breadcrumb/demo#self-defined-breadcrumbs">\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5217\u8868\u548c\u5206\u9694\u7b26\u7684\u9762\u5305\u5c51</a></td> </tr> </tbody></table> <h2 id="d-breadcrumb-item-\u4e8b\u4ef6">d-breadcrumb-item \u4e8b\u4ef6</h2> <table> <thead> <tr> <th align="center">\u4e8b\u4ef6</th> <th align="center">\u7c7b\u578b</th> <th align="center">\u8bf4\u660e</th> <th>\u8df3\u8f6c Demo</th> </tr> </thead> <tbody><tr> <td align="center">toggleEvent</td> <td align="center"><code>EventEmitter&lt;any&gt;</code></td> <td align="center">dropdown \u83dc\u5355\u5c55\u5f00\u548c\u6536\u8d77\u7684\u4e8b\u4ef6\uff0c\u8fd4\u56de\u503c\u4e3a\u5f53\u524d\u83dc\u5355\u662f\u5426\u6253\u5f00</td> <td><a href="/components/breadcrumb/demo#drop-down-breadcrumbs">\u53ef\u4e0b\u62c9\u7684\u9762\u5305\u5c51</a></td> </tr> </tbody></table> <h2 id="d-breadcrumb">d-breadcrumb</h2> <table> <thead> <tr> <th align="center">\u53c2\u6570</th> <th align="center">\u7c7b\u578b</th> <th align="center">\u9ed8\u8ba4</th> <th align="left">\u8bf4\u660e</th> <th>\u8df3\u8f6c Demo</th> </tr> </thead> <tbody><tr> <td align="center">separatorIcon</td> <td align="center"><code>TemplateRef&lt;any&gt;</code></td> <td align="center">&#39; / &#39;</td> <td align="left">\u53ef\u9009\uff0c\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\u6837\u5f0f</td> <td><a href="/components/breadcrumb/demo#self-defined-breadcrumbs">\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5217\u8868\u548c\u5206\u9694\u7b26\u7684\u9762\u5305\u5c51</a></td> </tr> <tr> <td align="center">source</td> <td align="center"><code>Array&lt;SourceConfig&gt;</code></td> <td align="center">[]</td> <td align="left">\u53ef\u9009\uff0c\u9762\u5305\u5c51\u6839\u636e\u914d\u7f6e\u7684 source \u6309\u7167\u9ed8\u8ba4\u6e32\u67d3\u65b9\u5f0f\u663e\u793a</td> <td><a href="/components/breadcrumb/demo#basic-breadcrumbs">\u57fa\u7840\u9762\u5305\u5c51</a></td> </tr> </tbody></table> <pre><code class="language-javascript">MenuConfig {\n    name: string;\n    link: string;\n    linkType?: &#39;hrefLink&#39; | &#39;routerLink&#39;;\n    target?: string;\n}</code></pre> <p>name\uff1a\u663e\u793a\u7684\u540d\u79f0</p> <p>link\uff1a\u8df3\u8f6c\u7684\u8def\u5f84\uff0c\u53ef\u4e3a\u7edd\u5bf9\u8def\u5f84\u4e0e\u76f8\u5bf9\u8def\u5f84\uff0c\u6ce8\u610f\u9700\u8981\u4e0e\u8def\u7531\u7684\u914d\u7f6e\u4e00\u81f4</p> <p>linkType: \u94fe\u63a5\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a&#39;hrefLink&#39;\u65b9\u5f0f\uff0c\u53ef\u9009&#39;hrefLink&#39; \u6216 &#39;routerLink&#39;</p> <p>target: target \u5c5e\u6027\u89c4\u5b9a\u5728\u4f55\u5904\u6253\u5f00\u94fe\u63a5\u6587\u6863</p> <p>\u4f20\u5165\u7684 source \u683c\u5f0f\uff1a</p> <pre><code class="language-javascript">SourceConfig {\n    title: string;\n    link?: string;\n    showMenu?: boolean;\n    isSearch?: boolean;\n    menuList?: Array&lt;MenuConfig&gt;;\n    customMenuTemplate?:TemplateRef&lt;any&gt;;\n    noNavigation?: boolean;\n    target?:string;\n    linkType?: &#39;hrefLink&#39; | &#39;routerLink&#39;;\n}</code></pre> <p>title: \u663e\u793a\u7684\u540d\u79f0</p> <p>link: \u8df3\u8f6c\u7684\u8def\u5f84</p> <p>showMenu: \u662f\u5426\u663e\u793a\u4e0b\u62c9\u5217\u8868</p> <p>isSearch: \u4e0b\u62c9\u5217\u8868\u662f\u5426\u53ef\u641c\u7d22</p> <p>menuList: \u4e0b\u62c9\u5217\u8868\u7684\u6570\u636e\uff0c\u914d\u7f6e\u53c2\u8003\u4e0a\u65b9 MenuConfig</p> <p>customMenuTemplate: \u81ea\u5b9a\u4e49\u4e0b\u62c9\u5217\u8868</p> <p>noNavigation: \u94fe\u63a5\u662f\u5426\u4e0d\u53ef\u8df3\u8f6c,\u4e00\u822c\u7528\u4e8e\u5f53\u524d\u6240\u5904\u4f4d\u7f6e\u4e0d\u53ef\u8df3\u8f6c\u7684\u914d\u7f6e</p> <p>linkType: \u94fe\u63a5\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a&#39;hrefLink&#39;\u65b9\u5f0f\uff0c\u53ef\u9009&#39;hrefLink&#39; \u6216 &#39;routerLink&#39;</p> <p>target: target \u5c5e\u6027\u89c4\u5b9a\u5728\u4f55\u5904\u6253\u5f00\u94fe\u63a5\u6587\u6863</p> <p>\u5907\u6ce8\uff1asource \u6570\u636e\u6539\u53d8\u4f7f\u7528<code>Object.assign</code>\u65b9\u5f0f\u89e6\u53d1\u53d8\u66f4\u68c0\u6d4b</p> '},Ep4f:function(e,n,t){"use strict";t.r(n),n.default="import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'd-search-menu',\ntemplateUrl: './search-menu.component.html'\n})\nexport class SearchMenuComponent implements OnInit {\n\n  breadData = [{ label: 'DevUI', showMenu: false, link: '/components/get-start' },\n  {\n    label: '\u9762\u5305\u5c51', showMenu: true, isSearch: true,\n    menuList: [\n      { name: '\u951a\u70b9', link: '/components/anchor/demo' },\n      { name: '\u6309\u94ae', link: '/components/button/demo' }\n    ]\n  }];\n  constructor() {\n  }\n  ngOnInit(): void {\n\n  }\n}\n"},"JDO/":function(e,n,t){"use strict";t.r(n),n.default="@import '~ng-devui/styles-var/devui-var.scss';\n\n.breadcrumb-dropdown-menu {\n  padding: 10px 0;\n  width: 160px;\n}\n\nli {\n  padding: 0 15px;\n  font-size: $devui-font-size;\n  line-height: 36px;\n  cursor: pointer;\n}\n\nli a {\n  color: $devui-text;\n  margin-left: 10px;\n}\n\nli:hover {\n  background: $devui-list-item-hover-bg;\n}\n\nli:hover a {\n  text-decoration: none;\n}\n"},JG5r:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var o=t("ofXK"),r=t("N/fn"),c=t("GyeE"),i=t("fXoL");let a=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(n){return new(n||e)},imports:[[o.c,r.b,c.e],r.b,c.e]}),e})()},MsGF:function(e,n,t){"use strict";t.r(n),n.default='<section>\n  <d-breadcrumb>\n    <ng-container *ngFor="let item of breadData">\n      <d-breadcrumb-item [showMenu]="item.showMenu" [menuList]="item.menuList" [isSearch]="item.isSearch">\n        <a [href]="item.link">{{ item.label }}</a>\n      </d-breadcrumb-item>\n    </ng-container>\n  </d-breadcrumb>\n</section>\n'},"QpV/":function(e,n,t){"use strict";t.r(n),n.default='<section>\n  <d-breadcrumb>\n    <ng-container *ngFor="let item of breadData">\n      <d-breadcrumb-item [showMenu]="item.showMenu" [menuList]="item.menuList" (toggleEvent)="toggleEvent($event)">\n        <a [href]="item.link">{{ item.label }}</a>\n      </d-breadcrumb-item>\n    </ng-container>\n  </d-breadcrumb>\n</section>\n'},Wxmp:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t("fXoL"),r=t("N/fn"),c=t("ofXK"),i=t("GyeE");function a(e,n){if(1&e&&(o.Ub(0,"li",5),o.Nc(1),o.Tb()),2&e){const e=n.$implicit;o.oc("dAnchorLink",e.dAnchorLink),o.zb(1),o.Pc(" ",e.value," ")}}let s=(()=>{class e{constructor(){}ngOnInit(){this.demoDocViewerMain=document.querySelector(".doc-viewer-container .main")}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["d-demo-nav"]],inputs:{navItems:"navItems"},decls:7,vars:2,consts:[[1,"demo-nav"],[3,"container"],[1,"fast-forward"],[1,"step-nav"],["anchorActive","active",3,"dAnchorLink",4,"ngFor","ngForOf"],["anchorActive","active",3,"dAnchorLink"]],template:function(e,n){1&e&&(o.Ub(0,"div",0),o.Ub(1,"d-sticky",1),o.Ub(2,"div"),o.Ub(3,"div",2),o.Nc(4,"\u5feb\u901f\u524d\u5f80"),o.Tb(),o.Ub(5,"ul",3),o.Lc(6,a,2,2,"li",4),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.zb(1),o.nc("container",n.demoDocViewerMain),o.zb(5),o.nc("ngForOf",n.navItems))},directives:[r.a,c.s,i.d],styles:[".demo-nav[_ngcontent-%COMP%]{width:240px;position:fixed;top:100px;right:0;height:100%;z-index:1}.demo-nav[_ngcontent-%COMP%]   .fast-forward[_ngcontent-%COMP%]{font-family:PingFangSC-Semibold;width:130px;font-size:14px;font-size:var(--devui-font-size-card-title,14px);color:#252b3a;color:var(--devui-text,#252b3a);line-height:24px;font-weight:700;padding-bottom:10px;margin-left:20px;border-bottom:1px solid #dfe1e6;border-bottom:1px solid var(--devui-dividing-line,#dfe1e6)}.demo-nav[_ngcontent-%COMP%]   .step-nav[_ngcontent-%COMP%]{margin-top:10px}.demo-nav[_ngcontent-%COMP%]   .step-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none;padding-left:20px;cursor:pointer;height:25px;line-height:25px;font-size:12px;font-size:var(--devui-font-size,12px);color:#252b3a;color:var(--devui-text,#252b3a);position:relative;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.demo-nav[_ngcontent-%COMP%]   .step-nav[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]{color:#526ecc;color:var(--devui-link,#526ecc)}"]}),e})()},bucA:function(e,n,t){"use strict";t.r(n),n.default='<section>\n  <h5>\u901a\u8fc7d-breadcrumb-item\u5b9a\u4e49\u663e\u793a\u5185\u5bb9</h5>\n  <d-breadcrumb>\n    <d-breadcrumb-item>\n      <a routerLink="/components/get-start">DevUI</a>\n    </d-breadcrumb-item>\n    <d-breadcrumb-item>\n      <span>\u9762\u5305\u5c51</span>\n    </d-breadcrumb-item>\n  </d-breadcrumb>\n  <h5>\u901a\u8fc7\u4f20\u5165source\u663e\u793a\u9ed8\u8ba4\u9762\u5305\u5c51</h5>\n  <d-breadcrumb [source]="source"></d-breadcrumb>\n</section>\n'},ck9A:function(e,n,t){"use strict";t.r(n),t.d(n,"BreadCrumbDemoModule",(function(){return W}));var o=t("tyNb"),r=t("3Pt+"),c=t("ofXK"),i=t("fXoL");let a=(()=>{class e{constructor(e){this.router=e}navigateTo(e,n){0!==e.button||e.ctrlKey||e.metaKey||e.shiftKey||"string"==typeof n.target&&"_self"!==n.target||(e.preventDefault(),this.router.navigateByUrl(n.link))}}return e.\u0275fac=function(n){return new(n||e)(i.Yb(o.c))},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})();function s(e,n){if(1&e&&(i.Ub(0,"a",5),i.Nc(1),i.Tb()),2&e){const e=i.gc().$implicit;i.nc("href",e.link,i.Ec)("target",e.target?e.target:"_self"),i.zb(1),i.Oc(e.title)}}function d(e,n){if(1&e){const e=i.Vb();i.Ub(0,"a",6),i.cc("click",(function(n){i.Cc(e);const t=i.gc().$implicit;return i.gc(2).navigateTo(n,t)})),i.Nc(1),i.Tb()}if(2&e){const e=i.gc().$implicit;i.nc("target",e.target)("href",e.link,i.Ec),i.zb(1),i.Oc(e.title)}}function u(e,n){if(1&e&&(i.Ub(0,"span"),i.Nc(1),i.Tb()),2&e){const e=i.gc().$implicit;i.zb(1),i.Oc(e.title)}}function b(e,n){if(1&e&&(i.Ub(0,"d-breadcrumb-item",2),i.Lc(1,s,2,3,"a",3),i.Lc(2,d,2,3,"a",4),i.Lc(3,u,2,1,"span",0),i.Tb()),2&e){const e=n.$implicit;i.nc("showMenu",e.showMenu)("isSearch",e.isSearch)("menuList",e.menuList)("customMenuTemplate",e.customMenuTemplate),i.zb(1),i.nc("ngIf",!(e.noNavigation||e.linkType&&"hrefLink"!==e.linkType)),i.zb(1),i.nc("ngIf",!e.noNavigation&&"routerLink"===e.linkType),i.zb(1),i.nc("ngIf",e.noNavigation)}}function l(e,n){if(1&e&&(i.Sb(0),i.Lc(1,b,4,7,"d-breadcrumb-item",1),i.Rb()),2&e){const e=i.gc();i.zb(1),i.nc("ngForOf",e.source)}}function m(e,n){1&e&&(i.Sb(0),i.lc(1),i.Rb())}const p=["*"];let g=(()=>{class e{constructor(e){this.breadCrumbService=e,this.source=[]}navigateTo(e,n){this.breadCrumbService.navigateTo(e,n)}}return e.\u0275fac=function(n){return new(n||e)(i.Ob(a))},e.\u0275cmp=i.Ib({type:e,selectors:[["d-breadcrumb"]],inputs:{separatorIcon:"separatorIcon",source:"source"},exportAs:["dBreadcrumb"],ngContentSelectors:p,decls:2,vars:2,consts:[[4,"ngIf"],[3,"showMenu","isSearch","menuList","customMenuTemplate",4,"ngFor","ngForOf"],[3,"showMenu","isSearch","menuList","customMenuTemplate"],["rel","noopener",3,"href","target",4,"ngIf"],["rel","noopener",3,"target","href","click",4,"ngIf"],["rel","noopener",3,"href","target"],["rel","noopener",3,"target","href","click"]],template:function(e,n){1&e&&(i.mc(),i.Lc(0,l,2,1,"ng-container",0),i.Lc(1,m,2,0,"ng-container",0)),2&e&&(i.nc("ngIf",n.source&&n.source.length),i.zb(1),i.nc("ngIf",!(n.source&&n.source.length)))},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]     d-breadcrumb-item:last-child .devui-breadcrumb-separator{display:none}"]}),e})();var h=t("WV7o"),f=t("34UD");function v(e,n){}function M(e,n){}const w=function(e){return{"devui-breadcrumb-item-active":e}},T=function(e){return{$implicit:e}};function C(e,n){if(1&e){const e=i.Vb();i.Sb(0),i.Ub(1,"span",6),i.cc("toggleEvent",(function(n){return i.Cc(e),i.gc().onToggle(n)})),i.Lc(2,v,0,0,"ng-template",7),i.Ub(3,"i",8),i.fc(),i.Ub(4,"svg",9),i.Ub(5,"g",10),i.Pb(6,"polygon",11),i.Tb(),i.Tb(),i.Tb(),i.ec(),i.Ub(7,"div",12),i.Lc(8,M,0,0,"ng-template",4),i.Tb(),i.Tb(),i.Rb()}if(2&e){const e=i.gc(),n=i.zc(2),t=i.zc(4);i.zb(1),i.nc("ngClass",i.rc(4,w,e.isOpen)),i.zb(1),i.nc("ngTemplateOutlet",n),i.zb(6),i.nc("ngTemplateOutlet",e.customMenuTemplate?e.customMenuTemplate:t)("ngTemplateOutletContext",i.rc(6,T,e))}}function O(e,n){1&e&&(i.Ub(0,"span",13),i.lc(1),i.Tb())}function k(e,n){if(1&e){const e=i.Vb();i.Ub(0,"div",17),i.Ub(1,"d-search",18),i.cc("searchFn",(function(n){return i.Cc(e),i.gc(2).searchEvent(n)})),i.Tb(),i.Tb()}2&e&&(i.zb(1),i.nc("size","sm")("cssClass","devui-search-in-dropdown"))}function x(e,n){if(1&e&&(i.Ub(0,"a",22),i.Nc(1),i.Tb()),2&e){const e=i.gc().$implicit;i.nc("href",e.link,i.Ec)("target",e.target?e.target:"_self"),i.zb(1),i.Oc(e.name)}}function L(e,n){if(1&e){const e=i.Vb();i.Ub(0,"a",23),i.cc("click",(function(n){i.Cc(e);const t=i.gc().$implicit;return i.gc(2).navigateTo(n,t)})),i.Nc(1),i.Tb()}if(2&e){const e=i.gc().$implicit;i.nc("target",e.target)("href",e.link,i.Ec),i.zb(1),i.Oc(e.name)}}function y(e,n){if(1&e&&(i.Ub(0,"li",19),i.Lc(1,x,2,3,"a",20),i.Lc(2,L,2,3,"a",21),i.Tb()),2&e){const e=n.$implicit;i.oc("title",e.name),i.zb(1),i.nc("ngIf",!e.linkType||"hrefLink"===e.linkType),i.zb(1),i.nc("ngIf","routerLink"===e.linkType)}}function U(e,n){if(1&e&&(i.Lc(0,k,2,2,"div",14),i.Ub(1,"ul",15),i.Lc(2,y,3,3,"li",16),i.Tb()),2&e){const e=i.gc();i.nc("ngIf",e.isSearch),i.zb(2),i.nc("ngForOf",e.menuListDisplay)}}function P(e,n){}function z(e,n){1&e&&(i.Ub(0,"span",3),i.Nc(1," / "),i.Tb())}const _=["*"];let I=(()=>{class e{constructor(e,n){this.breadCrumbComponent=e,this.breadCrumbService=n,this.showMenu=!1,this.isSearch=!1,this.toggleEvent=new i.n}ngOnInit(){this.menuListDisplay=this.menuList}onToggle(e){this.isOpen=e,this.toggleEvent.emit(e)}searchEvent(e){this.menuList&&(this.menuListDisplay=this.menuList.filter(n=>n.name.toLowerCase().includes(e.toLowerCase())))}navigateTo(e,n){this.breadCrumbService.navigateTo(e,n)}}return e.\u0275fac=function(n){return new(n||e)(i.Ob(g),i.Ob(a))},e.\u0275cmp=i.Ib({type:e,selectors:[["d-breadcrumb-item"]],inputs:{showMenu:"showMenu",customMenuTemplate:"customMenuTemplate",menuList:"menuList",isSearch:"isSearch"},outputs:{toggleEvent:"toggleEvent"},exportAs:["dBreadcrumbItem"],ngContentSelectors:_,decls:9,vars:6,consts:[[4,"ngIf","ngIfElse"],["breadcrumbContentTpl",""],["dropDownMenuTpl",""],[1,"devui-breadcrumb-separator"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["defaultSeparator",""],["dDropDown","","dDropDownToggle","","appendToBody","","trigger","hover",1,"devui-breadcrumb-item-with-menu","devui-dropdown-no-border","devui-dropdown-origin","devui-breadcrumb-dropdown-origin",3,"ngClass","toggleEvent"],[3,"ngTemplateOutlet"],[1,"devui-breadcrumb-down-icon"],["width","5px","height","16px","viewBox","0 0 5 16","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["id","Triangle-Copy-2","fill","#959EB2","transform","translate(2.500000, 7.500000) scale(1, -1) translate(-2.500000, -7.500000) ","points","2.5 6 5 9 0 9"],["dDropDownMenu","",1,"devui-dropdown-menu","devui-dropdown-overlay"],[1,"devui-breadcrumb-item"],["class","devui-search-container",4,"ngIf"],[1,"devui-breadcrumb-dropdown-menu"],[3,"title",4,"ngFor","ngForOf"],[1,"devui-search-container"],[3,"size","cssClass","searchFn"],[3,"title"],["rel","noopener",3,"href","target",4,"ngIf"],["rel","noopener",3,"target","href","click",4,"ngIf"],["rel","noopener",3,"href","target"],["rel","noopener",3,"target","href","click"]],template:function(e,n){if(1&e&&(i.mc(),i.Lc(0,C,9,8,"ng-container",0),i.Lc(1,O,2,0,"ng-template",null,1,i.Mc),i.Lc(3,U,3,2,"ng-template",null,2,i.Mc),i.Ub(5,"span",3),i.Lc(6,P,0,0,"ng-template",4),i.Tb(),i.Lc(7,z,2,0,"ng-template",null,5,i.Mc)),2&e){const e=i.zc(2),t=i.zc(8);i.nc("ngIf",n.showMenu)("ngIfElse",e),i.zb(6),i.nc("ngTemplateOutlet",n.breadCrumbComponent.separatorIcon?n.breadCrumbComponent.separatorIcon:t)("ngTemplateOutletContext",i.rc(4,T,n))}},directives:[c.t,c.A,h.b,h.a,h.e,c.q,h.c,c.s,f.a],styles:[".devui-breadcrumb-font-style[_ngcontent-%COMP%], .devui-breadcrumb-item[_ngcontent-%COMP%], .devui-breadcrumb-item[_ngcontent-%COMP%]     a, .devui-breadcrumb-separator[_ngcontent-%COMP%]{font-size:12px;font-size:var(--devui-font-size,12px);color:#8a8e99;color:var(--devui-aide-text,#8a8e99);line-height:20px}.devui-breadcrumb-item[_ngcontent-%COMP%]{cursor:auto}.devui-breadcrumb-item[_ngcontent-%COMP%]     a:hover{color:#252b3a;color:var(--devui-text,#252b3a);text-decoration:none}.devui-breadcrumb-item[_ngcontent-%COMP%]     a{cursor:pointer}.devui-breadcrumb-item[_ngcontent-%COMP%]     a:focus{text-decoration:none}.devui-breadcrumb-down-icon[_ngcontent-%COMP%]{vertical-align:middle;display:inline-block;cursor:pointer;width:16px;height:16px;margin-right:-5px;text-align:center;outline:none}.devui-breadcrumb-down-icon[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#252b3a;fill:var(--devui-icon-text,#252b3a)}.devui-breadcrumb-item-active[_ngcontent-%COMP%], .devui-breadcrumb-item-active[_ngcontent-%COMP%]     a{color:#252b3a;color:var(--devui-text,#252b3a)}.devui-breadcrumb-item-active[_ngcontent-%COMP%]     a{text-decoration:none}.devui-breadcrumb-item-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%]{fill:#252b3a;fill:var(--devui-icon-text,#252b3a)}.devui-breadcrumb-item-active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#252b3a;color:var(--devui-text,#252b3a)}.devui-breadcrumb-separator[_ngcontent-%COMP%]{margin:0 3px}.devui-breadcrumb-dropdown-menu[_ngcontent-%COMP%]{padding:10px 0;max-width:200px}.devui-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 15px;font-size:12px;font-size:var(--devui-font-size,12px);line-height:36px;width:200px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer}.devui-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#252b3a;color:var(--devui-text,#252b3a);line-height:36px;width:170px;display:inline-block}.devui-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{text-decoration:none}.devui-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background:#f2f5fc;background:var(--devui-list-item-hover-bg,#f2f5fc)}.devui-breadcrumb-dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{text-decoration:none}.devui-search-container[_ngcontent-%COMP%]{max-width:200px}span.devui-breadcrumb-dropdown-origin[_ngcontent-%COMP%]{min-width:unset;display:inline-flex;padding:0}d-search[_ngcontent-%COMP%]{width:100%}.devui-breadcrumb-item-with-menu[_ngcontent-%COMP%]   .devui-breadcrumb-item[_ngcontent-%COMP%]{cursor:pointer}"],changeDetection:0}),e})(),S=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(n){return new(n||e)},providers:[a],imports:[[c.c,o.g,h.d,f.b]]}),e})();i.Fc(g,[c.q,c.r,c.s,c.t,c.A,c.w,c.x,c.y,c.z,c.u,c.v,o.h,o.d,o.f,o.e,o.i,h.b,h.c,h.e,h.a,f.a,g,I],[c.b,c.G,c.p,c.k,c.E,c.g,c.C,c.F,c.d,c.f,c.i,c.j,c.l]);var D=t("1sFX"),E=t("YZy5"),N=t("GeQP"),A=t("GyeE"),F=t("Wxmp"),$=t("E2zr");let B=(()=>{class e{constructor(){this.source=[{title:"DevUI",showMenu:!1,link:"/components/get-start"},{title:"\u9762\u5305\u5c51",showMenu:!0,link:"/components/breadcrumb/demo",noNavigation:!0,menuList:[{name:"\u951a\u70b9",link:"/components/anchor/demo",target:"_blank"},{name:"\u6309\u94ae",link:"/components/button/demo#\u4e3b\u8981\u6309\u94ae",linkType:"routerLink"}]}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["d-basic"]],decls:13,vars:1,consts:[["routerLink","/components/get-start"],[3,"source"]],template:function(e,n){1&e&&(i.Ub(0,"section"),i.Ub(1,"h5"),i.Nc(2,"\u901a\u8fc7d-breadcrumb-item\u5b9a\u4e49\u663e\u793a\u5185\u5bb9"),i.Tb(),i.Ub(3,"d-breadcrumb"),i.Ub(4,"d-breadcrumb-item"),i.Ub(5,"a",0),i.Nc(6,"DevUI"),i.Tb(),i.Tb(),i.Ub(7,"d-breadcrumb-item"),i.Ub(8,"span"),i.Nc(9,"\u9762\u5305\u5c51"),i.Tb(),i.Tb(),i.Tb(),i.Ub(10,"h5"),i.Nc(11,"\u901a\u8fc7\u4f20\u5165source\u663e\u793a\u9ed8\u8ba4\u9762\u5305\u5c51"),i.Tb(),i.Pb(12,"d-breadcrumb",1),i.Tb()),2&e&&(i.zb(12),i.nc("source",n.source))},directives:[g,I,o.f],encapsulation:2}),e})();function V(e,n){if(1&e){const e=i.Vb();i.Sb(0),i.Ub(1,"d-breadcrumb-item",1),i.cc("toggleEvent",(function(n){return i.Cc(e),i.gc().toggleEvent(n)})),i.Ub(2,"a",2),i.Nc(3),i.Tb(),i.Tb(),i.Rb()}if(2&e){const e=n.$implicit;i.zb(1),i.nc("showMenu",e.showMenu)("menuList",e.menuList),i.zb(1),i.nc("href",e.link,i.Ec),i.zb(1),i.Oc(e.label)}}let R=(()=>{class e{constructor(){this.breadData=[{label:"DevUI",showMenu:!1,link:"/components/get-start"},{label:"\u9762\u5305\u5c51",showMenu:!0,link:"/components/breadcrumb/demo",menuList:[{name:"\u951a\u70b9",link:"/components/anchor/demo"},{name:"\u6309\u94ae",link:"/components/button/demo"}]}]}ngOnInit(){}toggleEvent(e){console.log(e)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["d-menu"]],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"showMenu","menuList","toggleEvent"],[3,"href"]],template:function(e,n){1&e&&(i.Ub(0,"section"),i.Ub(1,"d-breadcrumb"),i.Lc(2,V,4,4,"ng-container",0),i.Tb(),i.Tb()),2&e&&(i.zb(2),i.nc("ngForOf",n.breadData))},directives:[g,c.s,I],encapsulation:2}),e})();function G(e,n){if(1&e&&(i.Sb(0),i.Ub(1,"d-breadcrumb-item",1),i.Ub(2,"a",2),i.Nc(3),i.Tb(),i.Tb(),i.Rb()),2&e){const e=n.$implicit;i.zb(1),i.nc("showMenu",e.showMenu)("menuList",e.menuList)("isSearch",e.isSearch),i.zb(1),i.nc("href",e.link,i.Ec),i.zb(1),i.Oc(e.label)}}let X=(()=>{class e{constructor(){this.breadData=[{label:"DevUI",showMenu:!1,link:"/components/get-start"},{label:"\u9762\u5305\u5c51",showMenu:!0,isSearch:!0,menuList:[{name:"\u951a\u70b9",link:"/components/anchor/demo"},{name:"\u6309\u94ae",link:"/components/button/demo"}]}]}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["d-search-menu"]],decls:3,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"showMenu","menuList","isSearch"],[3,"href"]],template:function(e,n){1&e&&(i.Ub(0,"section"),i.Ub(1,"d-breadcrumb"),i.Lc(2,G,4,5,"ng-container",0),i.Tb(),i.Tb()),2&e&&(i.zb(2),i.nc("ngForOf",n.breadData))},directives:[g,c.s,I],encapsulation:2}),e})();function j(e,n){1&e&&(i.Ub(0,"div",5),i.Ub(1,"li"),i.Pb(2,"span",6),i.Ub(3,"a",7),i.Nc(4,"\u951a\u70b9"),i.Tb(),i.Tb(),i.Ub(5,"li"),i.Pb(6,"span",6),i.Ub(7,"a",8),i.Nc(8,"\u6309\u94ae"),i.Tb(),i.Tb(),i.Tb())}function K(e,n){1&e&&i.Pb(0,"span",6)}let q=(()=>{class e{constructor(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["d-custom"]],decls:12,vars:3,consts:[[3,"separatorIcon"],["routerLink","/components/get-start"],[3,"showMenu","customMenuTemplate"],["menuTpl",""],["separatorIcon",""],[1,"breadcrumb-dropdown-menu"],[1,"icon-arrow-right"],["href","/components/anchor/demo"],["href","/components/button/demo"]],template:function(e,n){if(1&e&&(i.Ub(0,"section"),i.Ub(1,"d-breadcrumb",0),i.Ub(2,"d-breadcrumb-item"),i.Ub(3,"a",1),i.Nc(4,"DevUI"),i.Tb(),i.Tb(),i.Ub(5,"d-breadcrumb-item",2),i.Ub(6,"span"),i.Nc(7,"\u9762\u5305\u5c51"),i.Tb(),i.Tb(),i.Tb(),i.Lc(8,j,9,0,"ng-template",null,3,i.Mc),i.Lc(10,K,1,0,"ng-template",null,4,i.Mc),i.Tb()),2&e){const e=i.zc(9),n=i.zc(11);i.zb(1),i.nc("separatorIcon",n),i.zb(4),i.nc("showMenu",!0)("customMenuTemplate",e)}},directives:[g,I,o.f],styles:[".breadcrumb-dropdown-menu[_ngcontent-%COMP%]{padding:10px 0;width:160px}li[_ngcontent-%COMP%]{padding:0 15px;font-size:12px;font-size:var(--devui-font-size,12px);line-height:36px;cursor:pointer}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#252b3a;color:var(--devui-text,#252b3a);margin-left:10px}li[_ngcontent-%COMP%]:hover{background:#f2f5fc;background:var(--devui-list-item-hover-bg,#f2f5fc)}li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})();const J=function(){return{top:60,bottom:0}};let H=(()=>{class e{constructor(){this.BasicSource=[{title:"HTML",language:"xml",code:t("bucA")},{title:"TS",language:"typescript",code:t("5Ra8")}],this.CustomSource=[{title:"HTML",language:"xml",code:t("5bOu")},{title:"TS",language:"typescript",code:t("9eQg")},{title:"SCSS",language:"css",code:t("JDO/")}],this.MenuSource=[{title:"HTML",language:"xml",code:t("QpV/")},{title:"TS",language:"typescript",code:t("oy3A")}],this.SearchMenuSource=[{title:"HTML",language:"xml",code:t("MsGF")},{title:"TS",language:"typescript",code:t("Ep4f")}],this.navItems=[{dAnchorLink:"basic-breadcrumbs",value:"\u57fa\u7840\u9762\u5305\u5c51"},{dAnchorLink:"drop-down-breadcrumbs",value:"\u53ef\u4e0b\u62c9\u7684\u9762\u5305\u5c51"},{dAnchorLink:"with-search-drop-down-breadcrumbs",value:"\u5e26\u641c\u7d22\u4e0b\u62c9\u7684\u9762\u5305\u5c51"},{dAnchorLink:"self-defined-breadcrumbs",value:"\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5217\u8868\u548c\u5206\u9694\u7b26\u7684\u9762\u5305\u5c51"}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["d-demo-breadcrumb"]],decls:26,vars:11,consts:[["dAnchorBox","","dAnchorHashSupport","",1,"demo-container",3,"view"],[3,"navItems"],[1,"demo-example",3,"dAnchor"],[1,"demo-title"],[1,"demo-text"],["id","components-breadcrumb-basic",3,"sourceData"],["demo",""],["id","components-breadcrumb-menu",3,"sourceData"],["id","components-breadcrumb-search-menu",3,"sourceData"],["id","components-breadcrumb-custom",3,"sourceData"]],template:function(e,n){1&e&&(i.Ub(0,"div",0),i.Pb(1,"d-demo-nav",1),i.Ub(2,"div",2),i.Ub(3,"div",3),i.Nc(4,"\u57fa\u7840\u9762\u5305\u5c51"),i.Tb(),i.Pb(5,"div",4),i.Ub(6,"d-codebox",5),i.Pb(7,"d-basic",6),i.Tb(),i.Tb(),i.Ub(8,"div",2),i.Ub(9,"div",3),i.Nc(10,"\u53ef\u4e0b\u62c9\u7684\u9762\u5305\u5c51"),i.Tb(),i.Pb(11,"div",4),i.Ub(12,"d-codebox",7),i.Pb(13,"d-menu",6),i.Tb(),i.Tb(),i.Ub(14,"div",2),i.Ub(15,"div",3),i.Nc(16,"\u5e26\u641c\u7d22\u4e0b\u62c9\u7684\u9762\u5305\u5c51"),i.Tb(),i.Pb(17,"div",4),i.Ub(18,"d-codebox",8),i.Pb(19,"d-search-menu",6),i.Tb(),i.Tb(),i.Ub(20,"div",2),i.Ub(21,"div",3),i.Nc(22,"\u81ea\u5b9a\u4e49\u4e0b\u62c9\u5217\u8868\u548c\u5206\u9694\u7b26\u7684\u9762\u5305\u5c51"),i.Tb(),i.Pb(23,"div",4),i.Ub(24,"d-codebox",9),i.Pb(25,"d-custom",6),i.Tb(),i.Tb(),i.Tb()),2&e&&(i.nc("view",i.qc(10,J)),i.zb(1),i.nc("navItems",n.navItems),i.zb(1),i.nc("dAnchor","basic-breadcrumbs"),i.zb(4),i.nc("sourceData",n.BasicSource),i.zb(2),i.nc("dAnchor","drop-down-breadcrumbs"),i.zb(4),i.nc("sourceData",n.MenuSource),i.zb(2),i.nc("dAnchor","with-search-drop-down-breadcrumbs"),i.zb(4),i.nc("sourceData",n.SearchMenuSource),i.zb(2),i.nc("dAnchor","self-defined-breadcrumbs"),i.zb(4),i.nc("sourceData",n.CustomSource))},directives:[A.a,A.b,F.a,A.c,$.a,B,R,X,q],encapsulation:2}),e})();var Q=t("JG5r");let W=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(n){return new(n||e)},imports:[[c.c,r.i,S,D.a,E.a,Q.a,o.g.forChild([{path:"",redirectTo:"demo"},{path:"demo",component:H},{path:"api",component:N.a,data:{api:t("Aq17")}}])]]}),e})()},oy3A:function(e,n,t){"use strict";t.r(n),n.default="import { Component, OnInit } from '@angular/core';\n@Component({\n  selector: 'd-menu',\n  templateUrl: './menu.component.html'\n})\nexport class MenuComponent implements OnInit {\n\n  breadData = [{ label: 'DevUI', showMenu: false, link: '/components/get-start' },\n  {\n    label: '\u9762\u5305\u5c51', showMenu: true, link: '/components/breadcrumb/demo',\n    menuList: [\n      { name: '\u951a\u70b9', link: '/components/anchor/demo' },\n      { name: '\u6309\u94ae', link: '/components/button/demo' }\n    ]\n  }];\n  constructor() {\n  }\n  ngOnInit(): void {\n\n  }\n\n  toggleEvent(event) {\n    console.log(event);\n  }\n}\n"}}]);