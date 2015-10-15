// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19161__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19161__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__30800_30808 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__30801_30809 = null;
var count__30802_30810 = (0);
var i__30803_30811 = (0);
while(true){
if((i__30803_30811 < count__30802_30810)){
var k_30812 = cljs.core._nth.call(null,chunk__30801_30809,i__30803_30811);
e.setAttribute(cljs.core.name.call(null,k_30812),cljs.core.get.call(null,attrs,k_30812));

var G__30813 = seq__30800_30808;
var G__30814 = chunk__30801_30809;
var G__30815 = count__30802_30810;
var G__30816 = (i__30803_30811 + (1));
seq__30800_30808 = G__30813;
chunk__30801_30809 = G__30814;
count__30802_30810 = G__30815;
i__30803_30811 = G__30816;
continue;
} else {
var temp__4126__auto___30817 = cljs.core.seq.call(null,seq__30800_30808);
if(temp__4126__auto___30817){
var seq__30800_30818__$1 = temp__4126__auto___30817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30800_30818__$1)){
var c__18906__auto___30819 = cljs.core.chunk_first.call(null,seq__30800_30818__$1);
var G__30820 = cljs.core.chunk_rest.call(null,seq__30800_30818__$1);
var G__30821 = c__18906__auto___30819;
var G__30822 = cljs.core.count.call(null,c__18906__auto___30819);
var G__30823 = (0);
seq__30800_30808 = G__30820;
chunk__30801_30809 = G__30821;
count__30802_30810 = G__30822;
i__30803_30811 = G__30823;
continue;
} else {
var k_30824 = cljs.core.first.call(null,seq__30800_30818__$1);
e.setAttribute(cljs.core.name.call(null,k_30824),cljs.core.get.call(null,attrs,k_30824));

var G__30825 = cljs.core.next.call(null,seq__30800_30818__$1);
var G__30826 = null;
var G__30827 = (0);
var G__30828 = (0);
seq__30800_30808 = G__30825;
chunk__30801_30809 = G__30826;
count__30802_30810 = G__30827;
i__30803_30811 = G__30828;
continue;
}
} else {
}
}
break;
}

var seq__30804_30829 = cljs.core.seq.call(null,children);
var chunk__30805_30830 = null;
var count__30806_30831 = (0);
var i__30807_30832 = (0);
while(true){
if((i__30807_30832 < count__30806_30831)){
var ch_30833 = cljs.core._nth.call(null,chunk__30805_30830,i__30807_30832);
e.appendChild(ch_30833);

var G__30834 = seq__30804_30829;
var G__30835 = chunk__30805_30830;
var G__30836 = count__30806_30831;
var G__30837 = (i__30807_30832 + (1));
seq__30804_30829 = G__30834;
chunk__30805_30830 = G__30835;
count__30806_30831 = G__30836;
i__30807_30832 = G__30837;
continue;
} else {
var temp__4126__auto___30838 = cljs.core.seq.call(null,seq__30804_30829);
if(temp__4126__auto___30838){
var seq__30804_30839__$1 = temp__4126__auto___30838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30804_30839__$1)){
var c__18906__auto___30840 = cljs.core.chunk_first.call(null,seq__30804_30839__$1);
var G__30841 = cljs.core.chunk_rest.call(null,seq__30804_30839__$1);
var G__30842 = c__18906__auto___30840;
var G__30843 = cljs.core.count.call(null,c__18906__auto___30840);
var G__30844 = (0);
seq__30804_30829 = G__30841;
chunk__30805_30830 = G__30842;
count__30806_30831 = G__30843;
i__30807_30832 = G__30844;
continue;
} else {
var ch_30845 = cljs.core.first.call(null,seq__30804_30839__$1);
e.appendChild(ch_30845);

var G__30846 = cljs.core.next.call(null,seq__30804_30839__$1);
var G__30847 = null;
var G__30848 = (0);
var G__30849 = (0);
seq__30804_30829 = G__30846;
chunk__30805_30830 = G__30847;
count__30806_30831 = G__30848;
i__30807_30832 = G__30849;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq30797){
var G__30798 = cljs.core.first.call(null,seq30797);
var seq30797__$1 = cljs.core.next.call(null,seq30797);
var G__30799 = cljs.core.first.call(null,seq30797__$1);
var seq30797__$2 = cljs.core.next.call(null,seq30797__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__30798,G__30799,seq30797__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__,hierarchy__19020__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__,hierarchy__19020__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_30850 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_30850.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_30850.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_30850.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_30850);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__30851,st_map){
var map__30855 = p__30851;
var map__30855__$1 = ((cljs.core.seq_QMARK_.call(null,map__30855))?cljs.core.apply.call(null,cljs.core.hash_map,map__30855):map__30855);
var container_el = cljs.core.get.call(null,map__30855__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__30855,map__30855__$1,container_el){
return (function (p__30856){
var vec__30857 = p__30856;
var k = cljs.core.nth.call(null,vec__30857,(0),null);
var v = cljs.core.nth.call(null,vec__30857,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__30855,map__30855__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__30858,dom_str){
var map__30860 = p__30858;
var map__30860__$1 = ((cljs.core.seq_QMARK_.call(null,map__30860))?cljs.core.apply.call(null,cljs.core.hash_map,map__30860):map__30860);
var c = map__30860__$1;
var content_area_el = cljs.core.get.call(null,map__30860__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__30861){
var map__30863 = p__30861;
var map__30863__$1 = ((cljs.core.seq_QMARK_.call(null,map__30863))?cljs.core.apply.call(null,cljs.core.hash_map,map__30863):map__30863);
var content_area_el = cljs.core.get.call(null,map__30863__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__){
return (function (state_30905){
var state_val_30906 = (state_30905[(1)]);
if((state_val_30906 === (2))){
var inst_30890 = (state_30905[(7)]);
var inst_30899 = (state_30905[(2)]);
var inst_30900 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_30901 = ["auto"];
var inst_30902 = cljs.core.PersistentHashMap.fromArrays(inst_30900,inst_30901);
var inst_30903 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30890,inst_30902);
var state_30905__$1 = (function (){var statearr_30907 = state_30905;
(statearr_30907[(8)] = inst_30899);

return statearr_30907;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30905__$1,inst_30903);
} else {
if((state_val_30906 === (1))){
var inst_30890 = (state_30905[(7)]);
var inst_30890__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30891 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30892 = ["10px","10px","100%","68px","1.0"];
var inst_30893 = cljs.core.PersistentHashMap.fromArrays(inst_30891,inst_30892);
var inst_30894 = cljs.core.merge.call(null,inst_30893,style);
var inst_30895 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30890__$1,inst_30894);
var inst_30896 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30890__$1,msg);
var inst_30897 = cljs.core.async.timeout.call(null,(300));
var state_30905__$1 = (function (){var statearr_30908 = state_30905;
(statearr_30908[(9)] = inst_30895);

(statearr_30908[(7)] = inst_30890__$1);

(statearr_30908[(10)] = inst_30896);

return statearr_30908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30905__$1,(2),inst_30897);
} else {
return null;
}
}
});})(c__22032__auto__))
;
return ((function (switch__21970__auto__,c__22032__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto____0 = (function (){
var statearr_30912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30912[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto__);

(statearr_30912[(1)] = (1));

return statearr_30912;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto____1 = (function (state_30905){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_30905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e30913){if((e30913 instanceof Object)){
var ex__21974__auto__ = e30913;
var statearr_30914_30916 = state_30905;
(statearr_30914_30916[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30917 = state_30905;
state_30905 = G__30917;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto__ = function(state_30905){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto____1.call(this,state_30905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__))
})();
var state__22034__auto__ = (function (){var statearr_30915 = f__22033__auto__.call(null);
(statearr_30915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_30915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__))
);

return c__22032__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__30919 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__30919,(0),null);
var ln = cljs.core.nth.call(null,vec__30919,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__30922 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__30922,(0),null);
var file_line = cljs.core.nth.call(null,vec__30922,(1),null);
var file_column = cljs.core.nth.call(null,vec__30922,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30922,file_name,file_line,file_column){
return (function (p1__30920_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__30920_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__30922,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18121__auto__ = file_line;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var and__18109__auto__ = cause;
if(cljs.core.truth_(and__18109__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18109__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__30924 = figwheel.client.heads_up.ensure_container.call(null);
var map__30924__$1 = ((cljs.core.seq_QMARK_.call(null,map__30924))?cljs.core.apply.call(null,cljs.core.hash_map,map__30924):map__30924);
var content_area_el = cljs.core.get.call(null,map__30924__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__){
return (function (state_30971){
var state_val_30972 = (state_30971[(1)]);
if((state_val_30972 === (3))){
var inst_30954 = (state_30971[(7)]);
var inst_30968 = (state_30971[(2)]);
var inst_30969 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_30954,"");
var state_30971__$1 = (function (){var statearr_30973 = state_30971;
(statearr_30973[(8)] = inst_30968);

return statearr_30973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30971__$1,inst_30969);
} else {
if((state_val_30972 === (2))){
var inst_30954 = (state_30971[(7)]);
var inst_30961 = (state_30971[(2)]);
var inst_30962 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_30963 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_30964 = cljs.core.PersistentHashMap.fromArrays(inst_30962,inst_30963);
var inst_30965 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30954,inst_30964);
var inst_30966 = cljs.core.async.timeout.call(null,(200));
var state_30971__$1 = (function (){var statearr_30974 = state_30971;
(statearr_30974[(9)] = inst_30965);

(statearr_30974[(10)] = inst_30961);

return statearr_30974;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30971__$1,(3),inst_30966);
} else {
if((state_val_30972 === (1))){
var inst_30954 = (state_30971[(7)]);
var inst_30954__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_30955 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_30956 = ["0.0"];
var inst_30957 = cljs.core.PersistentHashMap.fromArrays(inst_30955,inst_30956);
var inst_30958 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_30954__$1,inst_30957);
var inst_30959 = cljs.core.async.timeout.call(null,(300));
var state_30971__$1 = (function (){var statearr_30975 = state_30971;
(statearr_30975[(7)] = inst_30954__$1);

(statearr_30975[(11)] = inst_30958);

return statearr_30975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30971__$1,(2),inst_30959);
} else {
return null;
}
}
}
});})(c__22032__auto__))
;
return ((function (switch__21970__auto__,c__22032__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21971__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21971__auto____0 = (function (){
var statearr_30979 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30979[(0)] = figwheel$client$heads_up$clear_$_state_machine__21971__auto__);

(statearr_30979[(1)] = (1));

return statearr_30979;
});
var figwheel$client$heads_up$clear_$_state_machine__21971__auto____1 = (function (state_30971){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_30971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e30980){if((e30980 instanceof Object)){
var ex__21974__auto__ = e30980;
var statearr_30981_30983 = state_30971;
(statearr_30981_30983[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30984 = state_30971;
state_30971 = G__30984;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21971__auto__ = function(state_30971){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21971__auto____1.call(this,state_30971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21971__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21971__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__))
})();
var state__22034__auto__ = (function (){var statearr_30982 = f__22033__auto__.call(null);
(statearr_30982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_30982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__))
);

return c__22032__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__){
return (function (state_31016){
var state_val_31017 = (state_31016[(1)]);
if((state_val_31017 === (4))){
var inst_31014 = (state_31016[(2)]);
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31016__$1,inst_31014);
} else {
if((state_val_31017 === (3))){
var inst_31011 = (state_31016[(2)]);
var inst_31012 = figwheel.client.heads_up.clear.call(null);
var state_31016__$1 = (function (){var statearr_31018 = state_31016;
(statearr_31018[(7)] = inst_31011);

return statearr_31018;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31016__$1,(4),inst_31012);
} else {
if((state_val_31017 === (2))){
var inst_31008 = (state_31016[(2)]);
var inst_31009 = cljs.core.async.timeout.call(null,(400));
var state_31016__$1 = (function (){var statearr_31019 = state_31016;
(statearr_31019[(8)] = inst_31008);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31016__$1,(3),inst_31009);
} else {
if((state_val_31017 === (1))){
var inst_31006 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31016__$1 = state_31016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31016__$1,(2),inst_31006);
} else {
return null;
}
}
}
}
});})(c__22032__auto__))
;
return ((function (switch__21970__auto__,c__22032__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto____0 = (function (){
var statearr_31023 = [null,null,null,null,null,null,null,null,null];
(statearr_31023[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto__);

(statearr_31023[(1)] = (1));

return statearr_31023;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto____1 = (function (state_31016){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_31016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e31024){if((e31024 instanceof Object)){
var ex__21974__auto__ = e31024;
var statearr_31025_31027 = state_31016;
(statearr_31025_31027[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31028 = state_31016;
state_31016 = G__31028;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto__ = function(state_31016){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto____1.call(this,state_31016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__))
})();
var state__22034__auto__ = (function (){var statearr_31026 = f__22033__auto__.call(null);
(statearr_31026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_31026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__))
);

return c__22032__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1444936779261