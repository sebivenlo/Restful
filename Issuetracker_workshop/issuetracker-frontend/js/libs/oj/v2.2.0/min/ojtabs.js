/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojconveyorbelt","ojs/ojmenu","jqueryui-amd/widgets/sortable","ojs/ojtouchproxy"],function(a,g){(function(){var b={cut:"ojtabscut","paste-before":"ojtabspastebefore","paste-after":"ojtabspasteafter",remove:"ojtabsremove"},c={cut:"labelCut","paste-before":"labelPasteBefore","paste-after":"labelPasteAfter",remove:"labelRemove"};a.Pa("oj.ojTabs",g.oj.baseComponent,{widgetEventPrefix:"oj",delay:300,options:{selected:0,disabledTabs:null,truncation:"auto",
selectOn:"click",orientation:"horizontal",edge:"top",removable:!1,reorderable:!1,beforeSelect:null,select:null,beforeDeselect:null,deselect:null,beforeRemove:null,remove:null,beforeReorder:null,reorder:null,optionChange:null},_ComponentCreate:function(){var a=this.options;this._super();this.c_=!1;this.Uj=!0;this.xW(a.edge);this.z$=0==this.element.children("ul").length;this.Xra();this.$aa();this.Ja={};this.Ja.Fh=!1;this.Ja.yG=[];this.Ja.kf=null;this.Ja.vk=null;this.Ja.sl=null;this.Qs();this.Of();a=
this.L7(a.selected);void 0===a&&(a=0);this.UC(a);this.Uj=void 0},UC:function(a,b){this.tK(a)&&(a=this.wT(a));this.fC(void 0===a?void 0:g(this.Ub[a]),b)},qh:function(a,b,c){if(this.Tya(b.target)&&(!this.TW||!this.TW.yL)){var h="keyboard"===c;if("contextmenu"==b.type||h||"touch"==c){var k=g(b.target).closest("li");a={launcher:k};this.Ja.tab=h?this.bb:a.launcher;if(this.Ja.tab){if(this.Ja.xG){if(((h=k.hasClass("oj-disabled"))||0==this.Py(k).length)&&1==this.Ja.kf.children().length){b.preventDefault();
return}h||!this.WU(k)?this.Ja.xG.addClass("oj-disabled"):this.Ja.xG.removeClass("oj-disabled")}if(this.Ja.vk||this.Ja.sl)k=!this.Ja.iM,this.Ja.vk.hasClass("oj-disabled")!=k&&(k?(this.Ja.vk.addClass("oj-disabled"),this.Ja.sl.addClass("oj-disabled")):(this.Ja.vk.removeClass("oj-disabled"),this.Ja.sl.removeClass("oj-disabled")),this.Ja.kf.ojMenu("refresh"));this.rh(b,c,a)}else b.preventDefault()}}},pEa:function(a){if(!this.r9(a)){var b=g(this.document[0].activeElement).closest("li"),c=this.fD(),h=c.index(b),
k=c.length;switch(a.keyCode){case g.ui.keyCode.RIGHT:case g.ui.keyCode.DOWN:h=(h+1)%k;break;case g.ui.keyCode.UP:case g.ui.keyCode.LEFT:h=((0==h?k:h)-1)%k;break;case g.ui.keyCode.END:h=k-1;break;case g.ui.keyCode.HOME:h=0;break;case 46:(b=this.bb)&&0<this.Py(b).length&&(a.preventDefault(),this.ZK(b,null,a));return;default:return}a.preventDefault();clearTimeout(this.qFa);var l=g(c[h]);l.focus();if(!a.ctrlKey){b.attr("aria-selected","false");l.attr("aria-selected","true");var m=this;this.qFa=this._delay(function(){m&&
m.Ub&&m.fC(l,a)},this.delay)}}},AAa:function(a){g(a.target).closest(".oj-tabs-selected").attr("id")===this.element.children(".oj-tabs-selected").attr("id")&&!this.r9(a)&&a.ctrlKey&&a.keyCode===g.ui.keyCode.UP&&(a.preventDefault(),this.bb.focus())},r9:function(a){var b=this.CT();if(a.ctrlKey&&a.keyCode===g.ui.keyCode.PAGE_UP)return this.fC(this.X6(b,!1)),!0;if(a.ctrlKey&&a.keyCode===g.ui.keyCode.PAGE_DOWN)return this.fC(this.X6(b,!0)),!0},tK:function(a){return 0<=a&&a<this.Ub.length?g(this.Ub[a]).hasClass("oj-disabled"):
!1},X6:function(a,b){var c=this.fD(),h=c.index(this.Ub[a]),k=c.length,c=g(c[b?(h+1)%k:((0==h?k:h)-1)%k]);c.focus();return c},wT:function(a){for(var b=a+1,c=this.Ub.length-1;b<=c;){if(!this.tK(b))return b;b++}for(b=a-1;0<=b;){if(!this.tK(b))return b;b--}},vd:function(){return"top"==this.options.edge||"bottom"==this.options.edge},_setOption:function(a,b,c){"selected"===a?(b=this.IJ(b),void 0!==b&&this.fC(b)):"disabledTabs"===a?(null===b&&(b=[]),Array.isArray(b)&&(this.Kca(b),a=this.CT(),this.tK(a)&&
this.UC(a),this.refresh())):"removable"===a||"truncation"===a?b!=this.options[a]&&(this._super(a,b,c),this.refresh()):"reorderable"===a?b!==this.options.reorderable&&(this._super(a,b,c),this.refresh()):"orientation"===a?this.zS||(a=this.Faa(b))&&this.xW(a)&&this.refresh():"edge"===a?this.xW(b)&&(this.zS=!0,this._super(a,b,c),this.refresh()):"selectOn"===a?(this.Lz(!0),this._super(a,b,c),this.Bn()):("contextMenu"===a&&(this.hv(),b&&this.Qs(b)),this._super(a,b,c),"translations"===a&&c&&"removeCueText"===
c.subkey&&this.Sd&&this.Py(this.Sd).attr("aria-label",b?b.removeCueText:""))},refresh:function(){this._super();this.$aa();this.Of();if(!this.element.children(".oj-tabs-selected").length){var a=this.wT(-1);0<=a&&this.UC(a)}},Of:function(){var a=this.element.children(".oj-tabs-selected");this.bb=a.length?this.Sd.children(".oj-selected"):g();this.ora();this.Bn();this.Ub.not(this.bb).attr({"aria-selected":"false",tabIndex:"-1"});this.rl.not(this.Ks(this.bb)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
this.bb.length?(this.bb.addClass("oj-selected").attr({"aria-selected":"true",tabIndex:"0"}),a.show().attr("aria-expanded","true").removeAttr("aria-hidden")):g(this.Ub[0]).attr("tabIndex","0");this.vd()&&(0<this.Ub.length?(this.LEa(),this.Poa()):this.IT(),this.Toa());void 0===this.options.selected||0==this.CT()?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected");this.NDa()},Poa:function(){var a=this.Sd.uniqueId().attr("id");this.Tq=this.IT().parent().ojConveyorBelt({orientation:"horizontal",
contentParent:"#"+a});a=this.Tq.parent();if(a.hasClass("oj-tabs-conveyorbelt-wrapper")){var b="0 1 "+this.dua()+"px";a.css("flex",b);a.css("-webkit-flex",b);a.css("-ms-flex",b)}},$aa:function(){var a=this,b=this.options.edge;this.c6();this.Wra();this.Sd=this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role","tablist");var c=this.Sd.index(),h,k;this.element.children(".oj-tabs-facet").each(function(){var a=g(this);a.index()<c?(a.addClass("oj-start"),h=a):(k||(k=a),a.removeClass("oj-start"))});
this.element.children(".oj-tabs-panel");"start"==b||"top"==b?h?h.after(this.Sd):this.element.prepend(this.Sd):k?k.before(this.Sd):this.element.append(this.Sd);this.Ub=g();this.rl=g();this.Sd.children("li").each(function(){var b=g(this).addClass("oj-tabs-tab").attr({role:"tab",tabIndex:"-1"}).removeAttr("aria-hidden"),c=b.children();c.addClass("oj-tabs-tab-content");c=c.children();c.addClass("oj-tabs-anchor").attr({role:"presentation",tabIndex:"-1"});c.children().addClass("oj-tabs-title").removeAttr("aria-hidden");
a.Ub=a.Ub.add(b);var c=c.uniqueId().attr("id"),e=b.attr("data-content"),f=a.element.find(a.iw(e));b.attr({"aria-controls":e,"aria-labelledby":c});a.rl=a.rl.add(f);f.attr("aria-labelledby",c).attr("role","tabpanel")});"start"!=b&&"end"!=b||a.Sd.addClass("oj-tabs-nav-root");this.Uj&&this.Kca(this.options.disabledTabs)},Bn:function(){var b=this,c={keydown:this.pEa},f=this.options.selectOn,h=!1;f&&g.each(f.split(" "),function(f,g){"click"==g&&(h=!0);a.C.eN(g)&&(c[g]=b.QI)});var k=this.fD();this._on(k,
c);h||this._on(k,{click:function(a){a.preventDefault()}});this.rl.on("keydown"+this.eventNamespace,this.AAa.bind(this));if(this.options.removable){var f={click:this.$Ba},l=this.Py(k);this._on(l,f);this.We(l);this.Gk(l)}this._focusable({element:k,applyHighlight:!0});this.We(k);this.Gk({element:k,afterToggle:function(a){"mousedown"===a&&k.filter(".oj-focus-highlight").blur()}})},Lz:function(a){var b=this.fD();a||this.$u(this.Py(b));this.$u(b);this.rl&&this.rl.off("keydown"+this.eventNamespace)},QI:function(a,
b){var c=this.bb,h=g(a.currentTarget).closest("li"),k=c&&h[0]===c[0],l=this.Ks(h),m=c&&c.length?this.Ks(c):g(),c={fromTab:c,fromContent:m,toTab:h,toContent:l};a.preventDefault();var r=b?b:a;h.hasClass("oj-disabled")||this.c_||k||m&&m.length&&!1===this._trigger("beforeDeselect",r,c)||!this.Uj&&!1===this._trigger("beforeSelect",r,c)||(this.Uj?this.options.selected=this.JJ(h):this.option("selected",this.JJ(h),{_context:{originalEvent:r,nb:!0}}),this.bb=h,l.addClass("oj-tabs-selected"),m&&m.length&&m.removeClass("oj-tabs-selected"),
this.CEa(r,c))},CEa:function(b,c){var f=c.toTab.closest("li"),h=c.toContent,k=c.fromContent;this.c_=!0;var l=c.fromTab.closest("li").removeClass("oj-selected");k.hide();0<k.length&&a.Components.lu(k[0]);f.addClass("oj-selected");this.vd()&&0<this.Ub.length&&(0==f.index()?this.element.addClass("oj-first-child-selected"):this.element.removeClass("oj-first-child-selected"));h.show();0<h.length&&a.Components.Kr(h[0]);this.c_=!1;this.Uj||(this._trigger("deselect",b,c),this._trigger("select",b,c));k.attr({"aria-expanded":"false",
"aria-hidden":"true"});l.attr("aria-selected","false");h.length&&k.length?l.attr("tabIndex","-1"):h.length&&this.Ub.filter(function(){return"0"===g(this).attr("tabIndex")}).attr("tabIndex","-1");h.attr("aria-expanded","true").removeAttr("aria-hidden");f.attr({"aria-selected":"true",tabIndex:"0"})},fC:function(a,b){if(void 0!==a){var c;this.bb&&a[0]===this.bb[0]||(c=a.find(".oj-tabs-anchor")[0],this.QI({target:c,currentTarget:c,preventDefault:g.noop},b))}},ora:function(){if(this.options.removable&&
this.vd()){var a=this.F("removeCueText"),b=this;this.fD().each(function(c){if(b.WU(g(this))){var h=g(this).find("\x3e :first-child");h.addClass("oj-removable");c="ojtabs-id_rm_"+c;g(this).attr("aria-describedby",c);g("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:c,tabIndex:"-1","aria-label":a,role:"presentation"}).appendTo(h)}})}},fD:function(){return g(this.Ub.not(".oj-disabled"))},Py:function(a){return a.find(".oj-tabs-close-icon")},
c6:function(){this.Ub&&this.Lz();this.A9&&(a.C.zm(this.element[0],this.Pg),this.A9=!1,this.yV=void 0);this.HW&&(a.C.hf()&&this.Jda(),this.Sd.sortable("instance")&&this.Sd.sortable("destroy"),this.HW=void 0);var b=this.element.children(".oj-tabs-nav-root"),c=!b.hasClass("oj-tabs-nav");if(this.Ub&&(this.Py(this.Ub).remove(),b.length)){var f=b,h=!0,k=this.Sd;b.children().each(function(){var a=g(this);if(a.hasClass("oj-tabs-conveyorbelt-wrapper"))a=k;else if(!a.hasClass("oj-tabs-facet"))return;h=!1;f.after(a);
f=a});h&&c&&b.after(k)}this.Tq&&(this.Tq.ojConveyorBelt("destroy"),this.Tq.remove(),this.bb=this.Tq=null);c&&b.remove();this.Sd=this.Ub=null},_destroy:function(){this.hv();this.vd()?this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected"):this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");var a=this,b,c,h,k;this.Ub.each(function(l){b=g(this);b.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("aria-describedby").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display",
"");c=b.children("div").removeClass("oj-tabs-tab-content");h=c.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");k=h.children();k.removeClass("oj-tabs-title").removeAttr("aria-hidden");a.z$?k.prependTo(a.rl.get(l)):c.hasClass("oj-tabs-gen-div")&&h.hasClass("oj-tabs-gen-a")?(k.prependTo(b),c.remove()):h.hasClass("oj-tabs-gen-a")?(k.prependTo(c),h.remove()):c.hasClass("oj-tabs-gen-div")&&(h.prependTo(b),c.remove())});var l=this.Sd;this.c6();l.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();
this.z$&&l.remove();this.rl.each(function(){g(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display","")});this.element.children(".oj-tabs-facet").removeClass("oj-start")},WU:function(a){var b=this.options.removable;return b&&(!Array.isArray(b)||-1<b.indexOf(a.attr("id")))},ZK:function(a,b,c){if(this.WU(a)){var h=
this.Ks(a),k={tab:a,content:h};c=c?c:b?b:{target:a,currentTarget:a,preventDefault:g.noop};if(a&&!1!==this._trigger("beforeRemove",c,k)){b&&b.preventDefault();var l;a.hasClass("oj-selected")&&(b=this.wT(this.Ub.index(a)),void 0===b?(this.bb=void 0,l=-1):l=g(this.Ub[b]).attr("data-content"));this.Lz();this.Ub=this.Ub.not(a);a.remove();h.remove();this.qX();this.refresh();-1===l?this.option("selected",void 0,{_context:{originalEvent:c,nb:!0}}):l&&(a=this.IJ(l))&&(this.UC(this.Ub.index(a),c),this.option("selected",
this.JJ(a),{_context:{originalEvent:c,nb:!0}}));this._trigger("remove",c,k)}}},$Ba:function(a,b){this.ZK(g(a.currentTarget).closest("li"),a,b)},removeTab:function(a){if("string"!==typeof a)throw Error("'"+a+"' is not a tab id");this.ZK(this.IJ(a),null,null)},SL:function(a,b){var c;if("li"==a.prop("tagName").toLowerCase()){c=a;var g=c.children("div");1==g.length&&g.hasClass("oj-tabs-tab-content")?(g=g.children("a"),1!=g.length&&(c.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"),g.addClass("oj-tabs-gen-a"))):
(g=c.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(),g.addClass("oj-tabs-gen-div oj-tabs-tab-content"),g.children().addClass("oj-tabs-gen-a"))}else c=a.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(),c.addClass("oj-tabs-gen-li"),c.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");b&&c.attr("data-content",b);return c},addTab:function(a){var b,c,h=-1;a.tab&&a.content?(c=a.content,b=this.SL(a.tab,this.NJ(c)),
void 0!==a.index&&(h=a.index)):(c=a,b=this.SL(g(a).find("\x3e :first-child"),this.NJ(c)));a=this.element.children(".oj-tabs-nav-root");a=a.hasClass("oj-tabs-nav")?a:a.length?a.find(".oj-tabs-nav"):this.element.children(".oj-tabs-nav");var k=!1;a.length||(a=g("\x3cul\x3e"),k=!0);k&&a.prependTo(this.element);0<=h&&h<a.children().length?(h=a.children(":eq("+h+")"),a=this.element.children(this.iw(h.attr("aria-controls"))),h.before(b),a.before(c)):(b.appendTo(a),c.appendTo(this.element));this.refresh();
0==this.bb.length&&this.UC(0);b[0].scrollIntoView(!1)},QDa:function(){this.TW=a.Gg.rea(this.Sd)},Jda:function(){a.Gg.$ia(this.Sd)},NDa:function(){if(this.options.reorderable){var b=this;a.C.hf()&&this.QDa();this.Sd.sortable({axis:b.vd()?"x":"y",distance:10,stop:function(a,c){var g=c.item;b.n6(a,g,g.prev())||b.Sd.sortable("cancel")}});this.HW=!0}else this.Jda(),this.HW=!1},Yf:function(a,b){var c=b.edge;this.zS="top"==c||"bottom"==c||"start"==c||"end"==c;this._super(a,b)},Faa:function(a){return"horizontal"==
a?"top":"vertical"==a?"start":null},xW:function(a){if(this.Uj&&!this.zS||!a)a=this.Faa(this.options.orientation);var b=this.options.edge;this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");switch(a){case "top":case "bottom":!this.rl||"start"!=b&&"end"!=b||this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");"bottom"==a?this.element.addClass("oj-tabs-bottom"):this.element.addClass("oj-tabs-top");
this.Uj?this.options.orientation="horizontal":"horizontal"!=this.options.orientation&&this.option("orientation","horizontal",{_context:{nb:!0},changed:!0});break;case "start":case "end":!this.rl||"top"!=b&&"bottom"!=b||this.element.removeClass("oj-tabs-horizontal");this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");"end"==a?this.element.addClass("oj-tabs-end"):this.element.addClass("oj-tabs-start");this.Uj?this.options.orientation="vertical":"vertical"!=this.options.orientation&&
this.option("orientation","vertical",{_context:{nb:!0},changed:!0});break;default:return!1}this.Uj?this.options.edge=a:this.options.edge!=a&&this.option("edge",a,{_context:{nb:!0},changed:!0});return!0},IT:function(){var a=this.Sd.parent();a.hasClass("oj-tabs-conveyor")||(a=this.Sd.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"),(0<this.element.children(".oj-tabs-facet").length?a.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper"):a).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));
return a},ZLa:function(a){0>a.id.indexOf("ojtabs-id_")&&g(a).attr("id","ojtabs-id_"+a.id)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId;a=a.index;if("oj-conveyorbelt"!=b&&("number"!==typeof a||0>a||a>=this.rl.length))return null;switch(b){case "oj-conveyorbelt":return this.Tq?this.Tq[0]:null;case "oj-tabs-panel":return this.Ks(this.Ub[a])[0];case "oj-tabs-tab":return this.Ub[a];case "oj-tabs-title":return g(this.Ub[a]).find(".oj-tabs-title")[0];case "oj-tabs-close-icon":case "oj-tabs-close":return g(this.Ub[a]).find(".oj-tabs-close-icon")[0]}return null},
getSubIdByNode:function(a){for(var b=[],c=0;c<this.Ub.length;c++)b.push(this.Ks(this.Ub[c])[0]);for(var g=c=-1,k=a;k;){if(this.Tq&&k===this.Tq[0])return{subId:"oj-conveyorbelt"};c=Array.prototype.indexOf.call(this.Ub,k);if(-1!=c)break;g=b.indexOf(k);if(-1!=g)return{subId:"oj-tabs-panel",index:g};k=k.parentElement}if(-1!=c)for(b=this.getNodeBySubId({subId:"oj-tabs-title",index:c}),g=this.getNodeBySubId({subId:"oj-tabs-close",index:c}),k=a;k;){if(k===b)return{subId:"oj-tabs-title",index:c};if(k===g)return{subId:"oj-tabs-close",
index:c};if(k===this.Ub[c])return{subId:"oj-tabs-tab",index:c};k=k.parentElement}return null},dua:function(){return this.yV+10},D8:function(){var a=this.element.find(".oj-tabs-conveyorbelt-wrapper");return a.length?a[0].clientWidth:this.element[0].clientWidth},A$:function(){return this.yV>this.D8()},sva:function(){var a=Math.floor(this.D8()/this.Ub.length);this.options.removable&&(a-=28);return a},a4:function(){var a=this.sva();this.Sd.find(".oj-tabs-title").each(function(){g(this).css("max-width",
""+a+"px").addClass("oj-tabs-title-overflow")})},aCa:function(){this.Sd.find(".oj-tabs-title").each(function(){g(this).css("max-width","").removeClass("oj-tabs-title-overflow")})},GMa:function(){},Mg:function(){this.F$()&&(this.A$()?this.a4():this.aCa())},F$:function(){return"auto"==this.options.truncation||"progressive"==this.options.truncation},LEa:function(){this.vd()&&0<this.Ub.length&&(null==this.Pg&&(this.Pg=this.Mg.bind(this)),a.C.bl(this.element[0],this.Pg),this.A9=!0,this.yV=this.IT()[0].scrollWidth,
this.F$()&&this.A$()&&this.a4())},fq:function(){this._super();this.refresh()},dq:function(){this._super();this.refresh()},Lj:function(a){return g("\x3ca\x3e").text(this.F(c[a])).attr("href","#").wrap("\x3cli\x3e").parent().attr("id",b[a]).addClass("oj-menu-item")},Kza:function(a){if(!a||!a.length)return!1;this.Ja.iM=a},kaa:function(a,b,c){if(!b||!b.length||!this.Ja.iM)return!1;var g=this.Ja.iM;this.Ja.iM=!1;this.n6(a,g,b,c)},Lza:function(a,b){if(!b||!b.length)return!1;this.ZK(b,null,a)},Tk:function(a,
b){var c=b?b.item.attr("id"):void 0;"ojtabscut"===c?this.Kza(this.Ja.tab):"ojtabspastebefore"===c?this.kaa(a,this.Ja.tab,!0):"ojtabspasteafter"===c?this.kaa(a,this.Ja.tab,!1):"ojtabsremove"===c&&this.Lza(a,this.Ja.tab)},Qs:function(a){if(a=a||this.options.contextMenu){if("function"==g.type(a)){try{a=a()}catch(b){a=null}g.type(a)}a&&g(a).length&&(this.options.contextMenu=a)}this.Ja.Fh=!!a;this.ms()},WH:function(a,b,c){-1==b.indexOf(c)&&(b=this.Lj(c),a.append(b),this.Ja.yG.push(b))},ms:function(){var a=
g(this.options.contextMenu);if(0!=a.length||this.options.reorderable||this.options.removable){var b=this;if(0==a.length){var f=this.options.reorderable?"labelReorder":c.remove,h=this.element.uniqueId().attr("id")+"contextmenu",a=g("\x3cul\x3e");a.css("display","none").attr("id",h).attr("aria-label",this.F(f));g(document.body).append(a);a.ojMenu();this.options.contextMenu=this.iw(h)}var k=[];a.find("[data-oj-command]").each(function(){if(0===g(this).children("a").length){var a=g(this).attr("data-oj-command").slice(8);
g(this).replaceWith(b.Lj(a));g(this).addClass("oj-menu-item");k.push(a)}});this.options.reorderable&&(this.WH(a,k,"cut"),this.WH(a,k,"paste-before"),this.WH(a,k,"paste-after"),this.Ja.vk=a.find("#ojtabspastebefore"),this.Ja.sl=a.find("#ojtabspasteafter"));this.options.removable&&(this.WH(a,k,"remove"),this.Ja.xG=a.find("#ojtabsremove"));this.Ja.kf=a;a.ojMenu("refresh");a.on("ojselect",g.proxy(this.Tk,this))}},hv:function(){var a=this.Ja;if(a&&a.kf){a.kf.off("ojselect");a.Fh||(a.kf.ojMenu("destroy"),
a.kf.remove());if(a.yG)for(;0<a.yG.length;)a.yG.pop().remove();a.kf=null}a.vk=null;a.sl=null;a.xG=null},n6:function(a,b,c,g){var k=this.Ks(b),l={tab:b,content:k};if(!1===this._trigger("beforeReorder",a,l))return!1;var m=this.Ub.index(b);if(c.length){if(this.Ub.index(c)==m)return!0;m=this.Ks(c);g?(c.before(b),m.before(k)):(c.after(b),m.after(k))}else if(0<this.Ub.length){if(0==m)return!0;this.Ub.first().before(b);this.rl.first().before(k)}this.qX();this.refresh();c.blur();b.focus();this._trigger("reorder",
a,l);return!0},hca:function(a){return a?a.replace(/[#!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$\x26"):""},iw:function(a){return a?"#"+this.hca(a):""},Ks:function(a){return this.element.find(this.iw(g(a).attr("aria-controls")))},NJ:function(a){var b=a.attr("id");b||(b=a.uniqueId().attr("id"),a.addClass("oj-tabs-gen-id"));return b},IJ:function(a){a=this.L7(a);if(-1!==a)return g(this.Ub[a])},L7:function(b){var c=-1;"number"===typeof b?0<=b&&b<this.Ub.length&&(c=b):"string"===typeof b&&(b=this.hca(b),a.C.eN(b)&&
(b=this.element.find(this.iw(b)),b.length&&(c=this.Ub.index(b),-1==c&&(c=this.rl.index(b)))));return c},CT:function(){var a=this.options.selected;return"number"===typeof a?a:this.Ub.index(g(this.iw(a)))},JJ:function(a){if(a){var b=a.attr("id");return b?b:this.Ub.index(a)}},Kca:function(a){var b=(this.Sd?this.Sd:this.element.children("ul")).children("li");b.removeClass("oj-disabled").removeAttr("aria-disabled");var c=[];if(a&&0<a.length)for(var g,k,l=0;l<a.length;l++)if(k=this.IJ(a[l]))k.addClass("oj-disabled"),
k.attr("aria-disabled","true"),k.find(".oj-tabs-anchor").removeAttr("href"),g=k.attr("id"),c.push(g?g:b.index(k));this.qX(c)},qX:function(b){if(!b){b=[];var c=this;this.Sd.children().each(function(){var a=g(this);a.hasClass("oj-disabled")&&b.push(c.JJ(a))})}a.b.h5(this.options.disabledTabs,b)||(this.Uj?this.options.disabledTabs=b:this.option({disabledTabs:b},{_context:{nb:!0,Ed:!0},changed:!0}))},Tya:function(a){var b=!1;this.Ub.each(function(){if(this===a||g.contains(this,a))return b=!0,!1});return b},
Wra:function(){var a=this.l7(),b=this,c=this.element.children("ul");0<c.length&&c.children("li").each(function(c){b.SL(g(this),a[c])})},Xra:function(){var a=this.element.children("ul");if(0==a.length){var b=this,c=this.l7(),a=g("\x3cul\x3e");this.element.children().each(function(h){b.SL(g(this).find("\x3e :first-child"),c[h]).appendTo(a)});a.prependTo(this.element)}},Toa:function(){var a=this.element.children(".oj-tabs-nav-root"),b=this,c=a.children(".oj-tabs-conveyorbelt-wrapper");a.index();this.element.children(".oj-tabs-facet").each(function(){var h=
g(this),k=b.NJ(h);0==a.find(b.iw(k)).length&&(h.hasClass("oj-start")?c.before(h):h.appendTo(a))})},l7:function(){var a=[],b=this;this.element.children(":not(ul):not(.oj-tabs-facet)").each(function(){var c=g(this);c.addClass("oj-tabs-panel");a.push(b.NJ(c))});return a}})})();a.Components.Wa("ojTabs","baseComponent",{properties:{disabledTabs:{type:"Array"},edge:{type:"string"},orientation:{type:"string"},removable:{type:"boolean|Array"},reorderable:{type:"boolean"},selected:{type:"string|number"},selectOn:{type:"string"},
truncation:{type:"string"}},methods:{addTab:{},refresh:{},removeTab:{}},extension:{_widgetName:"ojTabs"}});a.Components.register("oj-tabs",a.Components.getMetadata("ojTabs"))});