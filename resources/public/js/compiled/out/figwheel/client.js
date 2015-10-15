// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30036__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30037__i = 0, G__30037__a = new Array(arguments.length -  0);
while (G__30037__i < G__30037__a.length) {G__30037__a[G__30037__i] = arguments[G__30037__i + 0]; ++G__30037__i;}
  args = new cljs.core.IndexedSeq(G__30037__a,0);
} 
return G__30036__delegate.call(this,args);};
G__30036.cljs$lang$maxFixedArity = 0;
G__30036.cljs$lang$applyTo = (function (arglist__30038){
var args = cljs.core.seq(arglist__30038);
return G__30036__delegate(args);
});
G__30036.cljs$core$IFn$_invoke$arity$variadic = G__30036__delegate;
return G__30036;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30039){
var map__30041 = p__30039;
var map__30041__$1 = ((cljs.core.seq_QMARK_.call(null,map__30041))?cljs.core.apply.call(null,cljs.core.hash_map,map__30041):map__30041);
var class$ = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30041__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18121__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18109__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18109__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18109__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22032__auto___30170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___30170,ch){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___30170,ch){
return (function (state_30144){
var state_val_30145 = (state_30144[(1)]);
if((state_val_30145 === (7))){
var inst_30140 = (state_30144[(2)]);
var state_30144__$1 = state_30144;
var statearr_30146_30171 = state_30144__$1;
(statearr_30146_30171[(2)] = inst_30140);

(statearr_30146_30171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (1))){
var state_30144__$1 = state_30144;
var statearr_30147_30172 = state_30144__$1;
(statearr_30147_30172[(2)] = null);

(statearr_30147_30172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (4))){
var inst_30108 = (state_30144[(7)]);
var inst_30108__$1 = (state_30144[(2)]);
var state_30144__$1 = (function (){var statearr_30148 = state_30144;
(statearr_30148[(7)] = inst_30108__$1);

return statearr_30148;
})();
if(cljs.core.truth_(inst_30108__$1)){
var statearr_30149_30173 = state_30144__$1;
(statearr_30149_30173[(1)] = (5));

} else {
var statearr_30150_30174 = state_30144__$1;
(statearr_30150_30174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (13))){
var state_30144__$1 = state_30144;
var statearr_30151_30175 = state_30144__$1;
(statearr_30151_30175[(2)] = null);

(statearr_30151_30175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (6))){
var state_30144__$1 = state_30144;
var statearr_30152_30176 = state_30144__$1;
(statearr_30152_30176[(2)] = null);

(statearr_30152_30176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (3))){
var inst_30142 = (state_30144[(2)]);
var state_30144__$1 = state_30144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30144__$1,inst_30142);
} else {
if((state_val_30145 === (12))){
var inst_30115 = (state_30144[(8)]);
var inst_30128 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30115);
var inst_30129 = cljs.core.first.call(null,inst_30128);
var inst_30130 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30129);
var inst_30131 = console.warn("Figwheel: Not loading code with warnings - ",inst_30130);
var state_30144__$1 = state_30144;
var statearr_30153_30177 = state_30144__$1;
(statearr_30153_30177[(2)] = inst_30131);

(statearr_30153_30177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (2))){
var state_30144__$1 = state_30144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30144__$1,(4),ch);
} else {
if((state_val_30145 === (11))){
var inst_30124 = (state_30144[(2)]);
var state_30144__$1 = state_30144;
var statearr_30154_30178 = state_30144__$1;
(statearr_30154_30178[(2)] = inst_30124);

(statearr_30154_30178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (9))){
var inst_30114 = (state_30144[(9)]);
var inst_30126 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30114,opts);
var state_30144__$1 = state_30144;
if(cljs.core.truth_(inst_30126)){
var statearr_30155_30179 = state_30144__$1;
(statearr_30155_30179[(1)] = (12));

} else {
var statearr_30156_30180 = state_30144__$1;
(statearr_30156_30180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (5))){
var inst_30114 = (state_30144[(9)]);
var inst_30108 = (state_30144[(7)]);
var inst_30110 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30111 = (new cljs.core.PersistentArrayMap(null,2,inst_30110,null));
var inst_30112 = (new cljs.core.PersistentHashSet(null,inst_30111,null));
var inst_30113 = figwheel.client.focus_msgs.call(null,inst_30112,inst_30108);
var inst_30114__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30113);
var inst_30115 = cljs.core.first.call(null,inst_30113);
var inst_30116 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30114__$1,opts);
var state_30144__$1 = (function (){var statearr_30157 = state_30144;
(statearr_30157[(9)] = inst_30114__$1);

(statearr_30157[(8)] = inst_30115);

return statearr_30157;
})();
if(cljs.core.truth_(inst_30116)){
var statearr_30158_30181 = state_30144__$1;
(statearr_30158_30181[(1)] = (8));

} else {
var statearr_30159_30182 = state_30144__$1;
(statearr_30159_30182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (14))){
var inst_30134 = (state_30144[(2)]);
var state_30144__$1 = state_30144;
var statearr_30160_30183 = state_30144__$1;
(statearr_30160_30183[(2)] = inst_30134);

(statearr_30160_30183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (10))){
var inst_30136 = (state_30144[(2)]);
var state_30144__$1 = (function (){var statearr_30161 = state_30144;
(statearr_30161[(10)] = inst_30136);

return statearr_30161;
})();
var statearr_30162_30184 = state_30144__$1;
(statearr_30162_30184[(2)] = null);

(statearr_30162_30184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30145 === (8))){
var inst_30115 = (state_30144[(8)]);
var inst_30118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30119 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30115);
var inst_30120 = cljs.core.async.timeout.call(null,(1000));
var inst_30121 = [inst_30119,inst_30120];
var inst_30122 = (new cljs.core.PersistentVector(null,2,(5),inst_30118,inst_30121,null));
var state_30144__$1 = state_30144;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30144__$1,(11),inst_30122);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22032__auto___30170,ch))
;
return ((function (switch__21970__auto__,c__22032__auto___30170,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21971__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21971__auto____0 = (function (){
var statearr_30166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30166[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21971__auto__);

(statearr_30166[(1)] = (1));

return statearr_30166;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21971__auto____1 = (function (state_30144){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_30144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e30167){if((e30167 instanceof Object)){
var ex__21974__auto__ = e30167;
var statearr_30168_30185 = state_30144;
(statearr_30168_30185[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30186 = state_30144;
state_30144 = G__30186;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21971__auto__ = function(state_30144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21971__auto____1.call(this,state_30144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21971__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21971__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___30170,ch))
})();
var state__22034__auto__ = (function (){var statearr_30169 = f__22033__auto__.call(null);
(statearr_30169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___30170);

return statearr_30169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___30170,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30187_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30187_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30194 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30194){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_30192 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30193 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30192,_STAR_print_newline_STAR_30193,base_path_30194){
return (function() { 
var G__30195__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30195 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30196__i = 0, G__30196__a = new Array(arguments.length -  0);
while (G__30196__i < G__30196__a.length) {G__30196__a[G__30196__i] = arguments[G__30196__i + 0]; ++G__30196__i;}
  args = new cljs.core.IndexedSeq(G__30196__a,0);
} 
return G__30195__delegate.call(this,args);};
G__30195.cljs$lang$maxFixedArity = 0;
G__30195.cljs$lang$applyTo = (function (arglist__30197){
var args = cljs.core.seq(arglist__30197);
return G__30195__delegate(args);
});
G__30195.cljs$core$IFn$_invoke$arity$variadic = G__30195__delegate;
return G__30195;
})()
;})(_STAR_print_fn_STAR_30192,_STAR_print_newline_STAR_30193,base_path_30194))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30193;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30192;
}}catch (e30191){if((e30191 instanceof Error)){
var e = e30191;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30194], null));
} else {
var e = e30191;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30194))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30198){
var map__30203 = p__30198;
var map__30203__$1 = ((cljs.core.seq_QMARK_.call(null,map__30203))?cljs.core.apply.call(null,cljs.core.hash_map,map__30203):map__30203);
var opts = map__30203__$1;
var build_id = cljs.core.get.call(null,map__30203__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30203,map__30203__$1,opts,build_id){
return (function (p__30204){
var vec__30205 = p__30204;
var map__30206 = cljs.core.nth.call(null,vec__30205,(0),null);
var map__30206__$1 = ((cljs.core.seq_QMARK_.call(null,map__30206))?cljs.core.apply.call(null,cljs.core.hash_map,map__30206):map__30206);
var msg = map__30206__$1;
var msg_name = cljs.core.get.call(null,map__30206__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30205,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__30205,map__30206,map__30206__$1,msg,msg_name,_,map__30203,map__30203__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30205,map__30206,map__30206__$1,msg,msg_name,_,map__30203,map__30203__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30203,map__30203__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30210){
var vec__30211 = p__30210;
var map__30212 = cljs.core.nth.call(null,vec__30211,(0),null);
var map__30212__$1 = ((cljs.core.seq_QMARK_.call(null,map__30212))?cljs.core.apply.call(null,cljs.core.hash_map,map__30212):map__30212);
var msg = map__30212__$1;
var msg_name = cljs.core.get.call(null,map__30212__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30211,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30213){
var map__30221 = p__30213;
var map__30221__$1 = ((cljs.core.seq_QMARK_.call(null,map__30221))?cljs.core.apply.call(null,cljs.core.hash_map,map__30221):map__30221);
var on_compile_fail = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30221__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30221,map__30221__$1,on_compile_fail,on_compile_warning){
return (function (p__30222){
var vec__30223 = p__30222;
var map__30224 = cljs.core.nth.call(null,vec__30223,(0),null);
var map__30224__$1 = ((cljs.core.seq_QMARK_.call(null,map__30224))?cljs.core.apply.call(null,cljs.core.hash_map,map__30224):map__30224);
var msg = map__30224__$1;
var msg_name = cljs.core.get.call(null,map__30224__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30223,(1));
var pred__30225 = cljs.core._EQ_;
var expr__30226 = msg_name;
if(cljs.core.truth_(pred__30225.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30226))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30225.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30226))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30221,map__30221__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__,msg_hist,msg_names,msg){
return (function (state_30427){
var state_val_30428 = (state_30427[(1)]);
if((state_val_30428 === (7))){
var inst_30361 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30429_30470 = state_30427__$1;
(statearr_30429_30470[(2)] = inst_30361);

(statearr_30429_30470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (20))){
var inst_30389 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30389)){
var statearr_30430_30471 = state_30427__$1;
(statearr_30430_30471[(1)] = (22));

} else {
var statearr_30431_30472 = state_30427__$1;
(statearr_30431_30472[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (27))){
var inst_30401 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30402 = figwheel.client.heads_up.display_warning.call(null,inst_30401);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(30),inst_30402);
} else {
if((state_val_30428 === (1))){
var inst_30349 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30349)){
var statearr_30432_30473 = state_30427__$1;
(statearr_30432_30473[(1)] = (2));

} else {
var statearr_30433_30474 = state_30427__$1;
(statearr_30433_30474[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (24))){
var inst_30417 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30434_30475 = state_30427__$1;
(statearr_30434_30475[(2)] = inst_30417);

(statearr_30434_30475[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (4))){
var inst_30425 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30427__$1,inst_30425);
} else {
if((state_val_30428 === (15))){
var inst_30377 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30378 = figwheel.client.format_messages.call(null,inst_30377);
var inst_30379 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30380 = figwheel.client.heads_up.display_error.call(null,inst_30378,inst_30379);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(18),inst_30380);
} else {
if((state_val_30428 === (21))){
var inst_30419 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30435_30476 = state_30427__$1;
(statearr_30435_30476[(2)] = inst_30419);

(statearr_30435_30476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (31))){
var inst_30408 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(34),inst_30408);
} else {
if((state_val_30428 === (32))){
var state_30427__$1 = state_30427;
var statearr_30436_30477 = state_30427__$1;
(statearr_30436_30477[(2)] = null);

(statearr_30436_30477[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (33))){
var inst_30413 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30437_30478 = state_30427__$1;
(statearr_30437_30478[(2)] = inst_30413);

(statearr_30437_30478[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (13))){
var inst_30367 = (state_30427[(2)]);
var inst_30368 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30369 = figwheel.client.format_messages.call(null,inst_30368);
var inst_30370 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30371 = figwheel.client.heads_up.display_error.call(null,inst_30369,inst_30370);
var state_30427__$1 = (function (){var statearr_30438 = state_30427;
(statearr_30438[(7)] = inst_30367);

return statearr_30438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(14),inst_30371);
} else {
if((state_val_30428 === (22))){
var inst_30391 = figwheel.client.heads_up.clear.call(null);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(25),inst_30391);
} else {
if((state_val_30428 === (29))){
var inst_30415 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30439_30479 = state_30427__$1;
(statearr_30439_30479[(2)] = inst_30415);

(statearr_30439_30479[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (6))){
var inst_30357 = figwheel.client.heads_up.clear.call(null);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(9),inst_30357);
} else {
if((state_val_30428 === (28))){
var inst_30406 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30406)){
var statearr_30440_30480 = state_30427__$1;
(statearr_30440_30480[(1)] = (31));

} else {
var statearr_30441_30481 = state_30427__$1;
(statearr_30441_30481[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (25))){
var inst_30393 = (state_30427[(2)]);
var inst_30394 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30395 = figwheel.client.heads_up.display_warning.call(null,inst_30394);
var state_30427__$1 = (function (){var statearr_30442 = state_30427;
(statearr_30442[(8)] = inst_30393);

return statearr_30442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(26),inst_30395);
} else {
if((state_val_30428 === (34))){
var inst_30410 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30443_30482 = state_30427__$1;
(statearr_30443_30482[(2)] = inst_30410);

(statearr_30443_30482[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (17))){
var inst_30421 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30444_30483 = state_30427__$1;
(statearr_30444_30483[(2)] = inst_30421);

(statearr_30444_30483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (3))){
var inst_30363 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30363)){
var statearr_30445_30484 = state_30427__$1;
(statearr_30445_30484[(1)] = (10));

} else {
var statearr_30446_30485 = state_30427__$1;
(statearr_30446_30485[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (12))){
var inst_30423 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30447_30486 = state_30427__$1;
(statearr_30447_30486[(2)] = inst_30423);

(statearr_30447_30486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (2))){
var inst_30351 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30351)){
var statearr_30448_30487 = state_30427__$1;
(statearr_30448_30487[(1)] = (5));

} else {
var statearr_30449_30488 = state_30427__$1;
(statearr_30449_30488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (23))){
var inst_30399 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30399)){
var statearr_30450_30489 = state_30427__$1;
(statearr_30450_30489[(1)] = (27));

} else {
var statearr_30451_30490 = state_30427__$1;
(statearr_30451_30490[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (19))){
var inst_30386 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30387 = figwheel.client.heads_up.append_message.call(null,inst_30386);
var state_30427__$1 = state_30427;
var statearr_30452_30491 = state_30427__$1;
(statearr_30452_30491[(2)] = inst_30387);

(statearr_30452_30491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (11))){
var inst_30375 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30375)){
var statearr_30453_30492 = state_30427__$1;
(statearr_30453_30492[(1)] = (15));

} else {
var statearr_30454_30493 = state_30427__$1;
(statearr_30454_30493[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (9))){
var inst_30359 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30455_30494 = state_30427__$1;
(statearr_30455_30494[(2)] = inst_30359);

(statearr_30455_30494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (5))){
var inst_30353 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(8),inst_30353);
} else {
if((state_val_30428 === (14))){
var inst_30373 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30456_30495 = state_30427__$1;
(statearr_30456_30495[(2)] = inst_30373);

(statearr_30456_30495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (26))){
var inst_30397 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30457_30496 = state_30427__$1;
(statearr_30457_30496[(2)] = inst_30397);

(statearr_30457_30496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (16))){
var inst_30384 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30427__$1 = state_30427;
if(cljs.core.truth_(inst_30384)){
var statearr_30458_30497 = state_30427__$1;
(statearr_30458_30497[(1)] = (19));

} else {
var statearr_30459_30498 = state_30427__$1;
(statearr_30459_30498[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (30))){
var inst_30404 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30460_30499 = state_30427__$1;
(statearr_30460_30499[(2)] = inst_30404);

(statearr_30460_30499[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (10))){
var inst_30365 = figwheel.client.heads_up.clear.call(null);
var state_30427__$1 = state_30427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30427__$1,(13),inst_30365);
} else {
if((state_val_30428 === (18))){
var inst_30382 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30461_30500 = state_30427__$1;
(statearr_30461_30500[(2)] = inst_30382);

(statearr_30461_30500[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30428 === (8))){
var inst_30355 = (state_30427[(2)]);
var state_30427__$1 = state_30427;
var statearr_30462_30501 = state_30427__$1;
(statearr_30462_30501[(2)] = inst_30355);

(statearr_30462_30501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22032__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21970__auto__,c__22032__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto____0 = (function (){
var statearr_30466 = [null,null,null,null,null,null,null,null,null];
(statearr_30466[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto__);

(statearr_30466[(1)] = (1));

return statearr_30466;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto____1 = (function (state_30427){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_30427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e30467){if((e30467 instanceof Object)){
var ex__21974__auto__ = e30467;
var statearr_30468_30502 = state_30427;
(statearr_30468_30502[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30503 = state_30427;
state_30427 = G__30503;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto__ = function(state_30427){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto____1.call(this,state_30427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__,msg_hist,msg_names,msg))
})();
var state__22034__auto__ = (function (){var statearr_30469 = f__22033__auto__.call(null);
(statearr_30469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_30469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__,msg_hist,msg_names,msg))
);

return c__22032__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22032__auto___30566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___30566,ch){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___30566,ch){
return (function (state_30549){
var state_val_30550 = (state_30549[(1)]);
if((state_val_30550 === (8))){
var inst_30541 = (state_30549[(2)]);
var state_30549__$1 = (function (){var statearr_30551 = state_30549;
(statearr_30551[(7)] = inst_30541);

return statearr_30551;
})();
var statearr_30552_30567 = state_30549__$1;
(statearr_30552_30567[(2)] = null);

(statearr_30552_30567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (7))){
var inst_30545 = (state_30549[(2)]);
var state_30549__$1 = state_30549;
var statearr_30553_30568 = state_30549__$1;
(statearr_30553_30568[(2)] = inst_30545);

(statearr_30553_30568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (6))){
var state_30549__$1 = state_30549;
var statearr_30554_30569 = state_30549__$1;
(statearr_30554_30569[(2)] = null);

(statearr_30554_30569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (5))){
var inst_30537 = (state_30549[(8)]);
var inst_30539 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30537);
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30549__$1,(8),inst_30539);
} else {
if((state_val_30550 === (4))){
var inst_30537 = (state_30549[(8)]);
var inst_30537__$1 = (state_30549[(2)]);
var state_30549__$1 = (function (){var statearr_30555 = state_30549;
(statearr_30555[(8)] = inst_30537__$1);

return statearr_30555;
})();
if(cljs.core.truth_(inst_30537__$1)){
var statearr_30556_30570 = state_30549__$1;
(statearr_30556_30570[(1)] = (5));

} else {
var statearr_30557_30571 = state_30549__$1;
(statearr_30557_30571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30550 === (3))){
var inst_30547 = (state_30549[(2)]);
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30549__$1,inst_30547);
} else {
if((state_val_30550 === (2))){
var state_30549__$1 = state_30549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30549__$1,(4),ch);
} else {
if((state_val_30550 === (1))){
var state_30549__$1 = state_30549;
var statearr_30558_30572 = state_30549__$1;
(statearr_30558_30572[(2)] = null);

(statearr_30558_30572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22032__auto___30566,ch))
;
return ((function (switch__21970__auto__,c__22032__auto___30566,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21971__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21971__auto____0 = (function (){
var statearr_30562 = [null,null,null,null,null,null,null,null,null];
(statearr_30562[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21971__auto__);

(statearr_30562[(1)] = (1));

return statearr_30562;
});
var figwheel$client$heads_up_plugin_$_state_machine__21971__auto____1 = (function (state_30549){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_30549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e30563){if((e30563 instanceof Object)){
var ex__21974__auto__ = e30563;
var statearr_30564_30573 = state_30549;
(statearr_30564_30573[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30574 = state_30549;
state_30549 = G__30574;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21971__auto__ = function(state_30549){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21971__auto____1.call(this,state_30549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21971__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21971__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___30566,ch))
})();
var state__22034__auto__ = (function (){var statearr_30565 = f__22033__auto__.call(null);
(statearr_30565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___30566);

return statearr_30565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___30566,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__){
return (function (state_30595){
var state_val_30596 = (state_30595[(1)]);
if((state_val_30596 === (2))){
var inst_30592 = (state_30595[(2)]);
var inst_30593 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30595__$1 = (function (){var statearr_30597 = state_30595;
(statearr_30597[(7)] = inst_30592);

return statearr_30597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30595__$1,inst_30593);
} else {
if((state_val_30596 === (1))){
var inst_30590 = cljs.core.async.timeout.call(null,(3000));
var state_30595__$1 = state_30595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30595__$1,(2),inst_30590);
} else {
return null;
}
}
});})(c__22032__auto__))
;
return ((function (switch__21970__auto__,c__22032__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21971__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21971__auto____0 = (function (){
var statearr_30601 = [null,null,null,null,null,null,null,null];
(statearr_30601[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21971__auto__);

(statearr_30601[(1)] = (1));

return statearr_30601;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21971__auto____1 = (function (state_30595){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_30595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e30602){if((e30602 instanceof Object)){
var ex__21974__auto__ = e30602;
var statearr_30603_30605 = state_30595;
(statearr_30603_30605[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30606 = state_30595;
state_30595 = G__30606;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21971__auto__ = function(state_30595){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21971__auto____1.call(this,state_30595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21971__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21971__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__))
})();
var state__22034__auto__ = (function (){var statearr_30604 = f__22033__auto__.call(null);
(statearr_30604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_30604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__))
);

return c__22032__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30607){
var map__30613 = p__30607;
var map__30613__$1 = ((cljs.core.seq_QMARK_.call(null,map__30613))?cljs.core.apply.call(null,cljs.core.hash_map,map__30613):map__30613);
var ed = map__30613__$1;
var cause = cljs.core.get.call(null,map__30613__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__30613__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__30613__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30614_30618 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30615_30619 = null;
var count__30616_30620 = (0);
var i__30617_30621 = (0);
while(true){
if((i__30617_30621 < count__30616_30620)){
var msg_30622 = cljs.core._nth.call(null,chunk__30615_30619,i__30617_30621);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30622);

var G__30623 = seq__30614_30618;
var G__30624 = chunk__30615_30619;
var G__30625 = count__30616_30620;
var G__30626 = (i__30617_30621 + (1));
seq__30614_30618 = G__30623;
chunk__30615_30619 = G__30624;
count__30616_30620 = G__30625;
i__30617_30621 = G__30626;
continue;
} else {
var temp__4126__auto___30627 = cljs.core.seq.call(null,seq__30614_30618);
if(temp__4126__auto___30627){
var seq__30614_30628__$1 = temp__4126__auto___30627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30614_30628__$1)){
var c__18906__auto___30629 = cljs.core.chunk_first.call(null,seq__30614_30628__$1);
var G__30630 = cljs.core.chunk_rest.call(null,seq__30614_30628__$1);
var G__30631 = c__18906__auto___30629;
var G__30632 = cljs.core.count.call(null,c__18906__auto___30629);
var G__30633 = (0);
seq__30614_30618 = G__30630;
chunk__30615_30619 = G__30631;
count__30616_30620 = G__30632;
i__30617_30621 = G__30633;
continue;
} else {
var msg_30634 = cljs.core.first.call(null,seq__30614_30628__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30634);

var G__30635 = cljs.core.next.call(null,seq__30614_30628__$1);
var G__30636 = null;
var G__30637 = (0);
var G__30638 = (0);
seq__30614_30618 = G__30635;
chunk__30615_30619 = G__30636;
count__30616_30620 = G__30637;
i__30617_30621 = G__30638;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30639){
var map__30641 = p__30639;
var map__30641__$1 = ((cljs.core.seq_QMARK_.call(null,map__30641))?cljs.core.apply.call(null,cljs.core.hash_map,map__30641):map__30641);
var w = map__30641__$1;
var message = cljs.core.get.call(null,map__30641__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18109__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18109__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18109__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30648 = cljs.core.seq.call(null,plugins);
var chunk__30649 = null;
var count__30650 = (0);
var i__30651 = (0);
while(true){
if((i__30651 < count__30650)){
var vec__30652 = cljs.core._nth.call(null,chunk__30649,i__30651);
var k = cljs.core.nth.call(null,vec__30652,(0),null);
var plugin = cljs.core.nth.call(null,vec__30652,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30654 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30648,chunk__30649,count__30650,i__30651,pl_30654,vec__30652,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30654.call(null,msg_hist);
});})(seq__30648,chunk__30649,count__30650,i__30651,pl_30654,vec__30652,k,plugin))
);
} else {
}

var G__30655 = seq__30648;
var G__30656 = chunk__30649;
var G__30657 = count__30650;
var G__30658 = (i__30651 + (1));
seq__30648 = G__30655;
chunk__30649 = G__30656;
count__30650 = G__30657;
i__30651 = G__30658;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__30648);
if(temp__4126__auto__){
var seq__30648__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30648__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__30648__$1);
var G__30659 = cljs.core.chunk_rest.call(null,seq__30648__$1);
var G__30660 = c__18906__auto__;
var G__30661 = cljs.core.count.call(null,c__18906__auto__);
var G__30662 = (0);
seq__30648 = G__30659;
chunk__30649 = G__30660;
count__30650 = G__30661;
i__30651 = G__30662;
continue;
} else {
var vec__30653 = cljs.core.first.call(null,seq__30648__$1);
var k = cljs.core.nth.call(null,vec__30653,(0),null);
var plugin = cljs.core.nth.call(null,vec__30653,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30663 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30648,chunk__30649,count__30650,i__30651,pl_30663,vec__30653,k,plugin,seq__30648__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30663.call(null,msg_hist);
});})(seq__30648,chunk__30649,count__30650,i__30651,pl_30663,vec__30653,k,plugin,seq__30648__$1,temp__4126__auto__))
);
} else {
}

var G__30664 = cljs.core.next.call(null,seq__30648__$1);
var G__30665 = null;
var G__30666 = (0);
var G__30667 = (0);
seq__30648 = G__30664;
chunk__30649 = G__30665;
count__30650 = G__30666;
i__30651 = G__30667;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__30669 = arguments.length;
switch (G__30669) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__19161__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19161__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30672){
var map__30673 = p__30672;
var map__30673__$1 = ((cljs.core.seq_QMARK_.call(null,map__30673))?cljs.core.apply.call(null,cljs.core.hash_map,map__30673):map__30673);
var opts = map__30673__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30671){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30671));
});

//# sourceMappingURL=client.js.map?rel=1444936778617