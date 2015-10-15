// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31090_SHARP_,p2__31091_SHARP_){
var and__18109__auto__ = p1__31090_SHARP_;
if(cljs.core.truth_(and__18109__auto__)){
return p2__31091_SHARP_;
} else {
return and__18109__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18121__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18121__auto__){
return or__18121__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18121__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18121__auto__){
return or__18121__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18121__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31092){
var map__31093 = p__31092;
var map__31093__$1 = ((cljs.core.seq_QMARK_.call(null,map__31093))?cljs.core.apply.call(null,cljs.core.hash_map,map__31093):map__31093);
var file = cljs.core.get.call(null,map__31093__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31094){
var map__31095 = p__31094;
var map__31095__$1 = ((cljs.core.seq_QMARK_.call(null,map__31095))?cljs.core.apply.call(null,cljs.core.hash_map,map__31095):map__31095);
var namespace = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__19016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19017__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19018__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19019__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19020__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19020__auto__,method_table__19016__auto__,prefer_table__19017__auto__,method_cache__19018__auto__,cached_hierarchy__19019__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31096){if((e31096 instanceof Error)){
var e = e31096;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31096;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__31098 = arguments.length;
switch (G__31098) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31100,callback){
var map__31102 = p__31100;
var map__31102__$1 = ((cljs.core.seq_QMARK_.call(null,map__31102))?cljs.core.apply.call(null,cljs.core.hash_map,map__31102):map__31102);
var file_msg = map__31102__$1;
var request_url = cljs.core.get.call(null,map__31102__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31102,map__31102__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31102,map__31102__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31103){
var map__31105 = p__31103;
var map__31105__$1 = ((cljs.core.seq_QMARK_.call(null,map__31105))?cljs.core.apply.call(null,cljs.core.hash_map,map__31105):map__31105);
var file_msg = map__31105__$1;
var meta_data = cljs.core.get.call(null,map__31105__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__31105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__18121__auto__ = meta_data;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18109__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18109__auto__){
var or__18121__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18121__auto____$1)){
return or__18121__auto____$1;
} else {
var and__18109__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18109__auto____$1){
var or__18121__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18121__auto____$2){
return or__18121__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18109__auto____$1;
}
}
}
} else {
return and__18109__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31106,callback){
var map__31108 = p__31106;
var map__31108__$1 = ((cljs.core.seq_QMARK_.call(null,map__31108))?cljs.core.apply.call(null,cljs.core.hash_map,map__31108):map__31108);
var file_msg = map__31108__$1;
var namespace = cljs.core.get.call(null,map__31108__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31108__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22032__auto___31195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___31195,out){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___31195,out){
return (function (state_31177){
var state_val_31178 = (state_31177[(1)]);
if((state_val_31178 === (7))){
var inst_31161 = (state_31177[(7)]);
var inst_31167 = (state_31177[(2)]);
var inst_31168 = cljs.core.async.put_BANG_.call(null,out,inst_31167);
var inst_31157 = inst_31161;
var state_31177__$1 = (function (){var statearr_31179 = state_31177;
(statearr_31179[(8)] = inst_31157);

(statearr_31179[(9)] = inst_31168);

return statearr_31179;
})();
var statearr_31180_31196 = state_31177__$1;
(statearr_31180_31196[(2)] = null);

(statearr_31180_31196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (6))){
var inst_31173 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
var statearr_31181_31197 = state_31177__$1;
(statearr_31181_31197[(2)] = inst_31173);

(statearr_31181_31197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (5))){
var inst_31171 = cljs.core.async.close_BANG_.call(null,out);
var state_31177__$1 = state_31177;
var statearr_31182_31198 = state_31177__$1;
(statearr_31182_31198[(2)] = inst_31171);

(statearr_31182_31198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (4))){
var inst_31160 = (state_31177[(10)]);
var inst_31165 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31160);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31177__$1,(7),inst_31165);
} else {
if((state_val_31178 === (3))){
var inst_31175 = (state_31177[(2)]);
var state_31177__$1 = state_31177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31177__$1,inst_31175);
} else {
if((state_val_31178 === (2))){
var inst_31160 = (state_31177[(10)]);
var inst_31157 = (state_31177[(8)]);
var inst_31160__$1 = cljs.core.nth.call(null,inst_31157,(0),null);
var inst_31161 = cljs.core.nthnext.call(null,inst_31157,(1));
var inst_31162 = (inst_31160__$1 == null);
var inst_31163 = cljs.core.not.call(null,inst_31162);
var state_31177__$1 = (function (){var statearr_31183 = state_31177;
(statearr_31183[(10)] = inst_31160__$1);

(statearr_31183[(7)] = inst_31161);

return statearr_31183;
})();
if(inst_31163){
var statearr_31184_31199 = state_31177__$1;
(statearr_31184_31199[(1)] = (4));

} else {
var statearr_31185_31200 = state_31177__$1;
(statearr_31185_31200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31178 === (1))){
var inst_31155 = cljs.core.nth.call(null,files,(0),null);
var inst_31156 = cljs.core.nthnext.call(null,files,(1));
var inst_31157 = files;
var state_31177__$1 = (function (){var statearr_31186 = state_31177;
(statearr_31186[(8)] = inst_31157);

(statearr_31186[(11)] = inst_31155);

(statearr_31186[(12)] = inst_31156);

return statearr_31186;
})();
var statearr_31187_31201 = state_31177__$1;
(statearr_31187_31201[(2)] = null);

(statearr_31187_31201[(1)] = (2));


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
});})(c__22032__auto___31195,out))
;
return ((function (switch__21970__auto__,c__22032__auto___31195,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto____0 = (function (){
var statearr_31191 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31191[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto__);

(statearr_31191[(1)] = (1));

return statearr_31191;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto____1 = (function (state_31177){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_31177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e31192){if((e31192 instanceof Object)){
var ex__21974__auto__ = e31192;
var statearr_31193_31202 = state_31177;
(statearr_31193_31202[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31203 = state_31177;
state_31177 = G__31203;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto__ = function(state_31177){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto____1.call(this,state_31177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___31195,out))
})();
var state__22034__auto__ = (function (){var statearr_31194 = f__22033__auto__.call(null);
(statearr_31194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___31195);

return statearr_31194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___31195,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31204,p__31205){
var map__31208 = p__31204;
var map__31208__$1 = ((cljs.core.seq_QMARK_.call(null,map__31208))?cljs.core.apply.call(null,cljs.core.hash_map,map__31208):map__31208);
var opts = map__31208__$1;
var url_rewriter = cljs.core.get.call(null,map__31208__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31209 = p__31205;
var map__31209__$1 = ((cljs.core.seq_QMARK_.call(null,map__31209))?cljs.core.apply.call(null,cljs.core.hash_map,map__31209):map__31209);
var file_msg = map__31209__$1;
var file = cljs.core.get.call(null,map__31209__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31210){
var map__31213 = p__31210;
var map__31213__$1 = ((cljs.core.seq_QMARK_.call(null,map__31213))?cljs.core.apply.call(null,cljs.core.hash_map,map__31213):map__31213);
var file = cljs.core.get.call(null,map__31213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__31213__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__18109__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18109__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18109__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e31214){var e = e31214;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31219,p__31220){
var map__31422 = p__31219;
var map__31422__$1 = ((cljs.core.seq_QMARK_.call(null,map__31422))?cljs.core.apply.call(null,cljs.core.hash_map,map__31422):map__31422);
var opts = map__31422__$1;
var load_unchanged_files = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31422__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31423 = p__31220;
var map__31423__$1 = ((cljs.core.seq_QMARK_.call(null,map__31423))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);
var msg = map__31423__$1;
var files = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (state_31548){
var state_val_31549 = (state_31548[(1)]);
if((state_val_31549 === (7))){
var inst_31435 = (state_31548[(7)]);
var inst_31437 = (state_31548[(8)]);
var inst_31438 = (state_31548[(9)]);
var inst_31436 = (state_31548[(10)]);
var inst_31443 = cljs.core._nth.call(null,inst_31436,inst_31438);
var inst_31444 = figwheel.client.file_reloading.eval_body.call(null,inst_31443);
var inst_31445 = (inst_31438 + (1));
var tmp31550 = inst_31435;
var tmp31551 = inst_31437;
var tmp31552 = inst_31436;
var inst_31435__$1 = tmp31550;
var inst_31436__$1 = tmp31552;
var inst_31437__$1 = tmp31551;
var inst_31438__$1 = inst_31445;
var state_31548__$1 = (function (){var statearr_31553 = state_31548;
(statearr_31553[(7)] = inst_31435__$1);

(statearr_31553[(11)] = inst_31444);

(statearr_31553[(8)] = inst_31437__$1);

(statearr_31553[(9)] = inst_31438__$1);

(statearr_31553[(10)] = inst_31436__$1);

return statearr_31553;
})();
var statearr_31554_31623 = state_31548__$1;
(statearr_31554_31623[(2)] = null);

(statearr_31554_31623[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (20))){
var inst_31485 = (state_31548[(12)]);
var inst_31484 = (state_31548[(13)]);
var inst_31487 = (state_31548[(14)]);
var inst_31480 = (state_31548[(15)]);
var inst_31481 = (state_31548[(16)]);
var inst_31490 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31492 = (function (){var files_not_loaded = inst_31487;
var res = inst_31485;
var res_SINGLEQUOTE_ = inst_31484;
var files_SINGLEQUOTE_ = inst_31481;
var all_files = inst_31480;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31485,inst_31484,inst_31487,inst_31480,inst_31481,inst_31490,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (p__31491){
var map__31555 = p__31491;
var map__31555__$1 = ((cljs.core.seq_QMARK_.call(null,map__31555))?cljs.core.apply.call(null,cljs.core.hash_map,map__31555):map__31555);
var file = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__31555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31485,inst_31484,inst_31487,inst_31480,inst_31481,inst_31490,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
})();
var inst_31493 = cljs.core.map.call(null,inst_31492,inst_31485);
var inst_31494 = cljs.core.pr_str.call(null,inst_31493);
var inst_31495 = figwheel.client.utils.log.call(null,inst_31494);
var inst_31496 = (function (){var files_not_loaded = inst_31487;
var res = inst_31485;
var res_SINGLEQUOTE_ = inst_31484;
var files_SINGLEQUOTE_ = inst_31481;
var all_files = inst_31480;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31485,inst_31484,inst_31487,inst_31480,inst_31481,inst_31490,inst_31492,inst_31493,inst_31494,inst_31495,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31485,inst_31484,inst_31487,inst_31480,inst_31481,inst_31490,inst_31492,inst_31493,inst_31494,inst_31495,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
})();
var inst_31497 = setTimeout(inst_31496,(10));
var state_31548__$1 = (function (){var statearr_31556 = state_31548;
(statearr_31556[(17)] = inst_31495);

(statearr_31556[(18)] = inst_31490);

return statearr_31556;
})();
var statearr_31557_31624 = state_31548__$1;
(statearr_31557_31624[(2)] = inst_31497);

(statearr_31557_31624[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (27))){
var inst_31507 = (state_31548[(19)]);
var state_31548__$1 = state_31548;
var statearr_31558_31625 = state_31548__$1;
(statearr_31558_31625[(2)] = inst_31507);

(statearr_31558_31625[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (1))){
var inst_31427 = (state_31548[(20)]);
var inst_31424 = before_jsload.call(null,files);
var inst_31425 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31426 = (function (){return ((function (inst_31427,inst_31424,inst_31425,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (p1__31215_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31215_SHARP_);
});
;})(inst_31427,inst_31424,inst_31425,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
})();
var inst_31427__$1 = cljs.core.filter.call(null,inst_31426,files);
var inst_31428 = cljs.core.not_empty.call(null,inst_31427__$1);
var state_31548__$1 = (function (){var statearr_31559 = state_31548;
(statearr_31559[(21)] = inst_31424);

(statearr_31559[(22)] = inst_31425);

(statearr_31559[(20)] = inst_31427__$1);

return statearr_31559;
})();
if(cljs.core.truth_(inst_31428)){
var statearr_31560_31626 = state_31548__$1;
(statearr_31560_31626[(1)] = (2));

} else {
var statearr_31561_31627 = state_31548__$1;
(statearr_31561_31627[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (24))){
var state_31548__$1 = state_31548;
var statearr_31562_31628 = state_31548__$1;
(statearr_31562_31628[(2)] = null);

(statearr_31562_31628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (4))){
var inst_31472 = (state_31548[(2)]);
var inst_31473 = (function (){return ((function (inst_31472,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (p1__31216_SHARP_){
var and__18109__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31216_SHARP_);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31216_SHARP_));
} else {
return and__18109__auto__;
}
});
;})(inst_31472,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
})();
var inst_31474 = cljs.core.filter.call(null,inst_31473,files);
var state_31548__$1 = (function (){var statearr_31563 = state_31548;
(statearr_31563[(23)] = inst_31474);

(statearr_31563[(24)] = inst_31472);

return statearr_31563;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_31564_31629 = state_31548__$1;
(statearr_31564_31629[(1)] = (16));

} else {
var statearr_31565_31630 = state_31548__$1;
(statearr_31565_31630[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (15))){
var inst_31462 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31566_31631 = state_31548__$1;
(statearr_31566_31631[(2)] = inst_31462);

(statearr_31566_31631[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (21))){
var state_31548__$1 = state_31548;
var statearr_31567_31632 = state_31548__$1;
(statearr_31567_31632[(2)] = null);

(statearr_31567_31632[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (31))){
var inst_31515 = (state_31548[(25)]);
var inst_31525 = (state_31548[(2)]);
var inst_31526 = cljs.core.not_empty.call(null,inst_31515);
var state_31548__$1 = (function (){var statearr_31568 = state_31548;
(statearr_31568[(26)] = inst_31525);

return statearr_31568;
})();
if(cljs.core.truth_(inst_31526)){
var statearr_31569_31633 = state_31548__$1;
(statearr_31569_31633[(1)] = (32));

} else {
var statearr_31570_31634 = state_31548__$1;
(statearr_31570_31634[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (32))){
var inst_31515 = (state_31548[(25)]);
var inst_31528 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31515);
var inst_31529 = cljs.core.pr_str.call(null,inst_31528);
var inst_31530 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_31529)].join('');
var inst_31531 = figwheel.client.utils.log.call(null,inst_31530);
var state_31548__$1 = state_31548;
var statearr_31571_31635 = state_31548__$1;
(statearr_31571_31635[(2)] = inst_31531);

(statearr_31571_31635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (33))){
var state_31548__$1 = state_31548;
var statearr_31572_31636 = state_31548__$1;
(statearr_31572_31636[(2)] = null);

(statearr_31572_31636[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (13))){
var inst_31448 = (state_31548[(27)]);
var inst_31452 = cljs.core.chunk_first.call(null,inst_31448);
var inst_31453 = cljs.core.chunk_rest.call(null,inst_31448);
var inst_31454 = cljs.core.count.call(null,inst_31452);
var inst_31435 = inst_31453;
var inst_31436 = inst_31452;
var inst_31437 = inst_31454;
var inst_31438 = (0);
var state_31548__$1 = (function (){var statearr_31573 = state_31548;
(statearr_31573[(7)] = inst_31435);

(statearr_31573[(8)] = inst_31437);

(statearr_31573[(9)] = inst_31438);

(statearr_31573[(10)] = inst_31436);

return statearr_31573;
})();
var statearr_31574_31637 = state_31548__$1;
(statearr_31574_31637[(2)] = null);

(statearr_31574_31637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (22))){
var inst_31487 = (state_31548[(14)]);
var inst_31500 = (state_31548[(2)]);
var inst_31501 = cljs.core.not_empty.call(null,inst_31487);
var state_31548__$1 = (function (){var statearr_31575 = state_31548;
(statearr_31575[(28)] = inst_31500);

return statearr_31575;
})();
if(cljs.core.truth_(inst_31501)){
var statearr_31576_31638 = state_31548__$1;
(statearr_31576_31638[(1)] = (23));

} else {
var statearr_31577_31639 = state_31548__$1;
(statearr_31577_31639[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (36))){
var state_31548__$1 = state_31548;
var statearr_31578_31640 = state_31548__$1;
(statearr_31578_31640[(2)] = null);

(statearr_31578_31640[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (29))){
var inst_31516 = (state_31548[(29)]);
var inst_31519 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31516);
var inst_31520 = cljs.core.pr_str.call(null,inst_31519);
var inst_31521 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31520)].join('');
var inst_31522 = figwheel.client.utils.log.call(null,inst_31521);
var state_31548__$1 = state_31548;
var statearr_31579_31641 = state_31548__$1;
(statearr_31579_31641[(2)] = inst_31522);

(statearr_31579_31641[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (6))){
var inst_31469 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31580_31642 = state_31548__$1;
(statearr_31580_31642[(2)] = inst_31469);

(statearr_31580_31642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (28))){
var inst_31516 = (state_31548[(29)]);
var inst_31513 = (state_31548[(2)]);
var inst_31514 = cljs.core.get.call(null,inst_31513,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31515 = cljs.core.get.call(null,inst_31513,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_31516__$1 = cljs.core.get.call(null,inst_31513,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31517 = cljs.core.not_empty.call(null,inst_31516__$1);
var state_31548__$1 = (function (){var statearr_31581 = state_31548;
(statearr_31581[(29)] = inst_31516__$1);

(statearr_31581[(25)] = inst_31515);

(statearr_31581[(30)] = inst_31514);

return statearr_31581;
})();
if(cljs.core.truth_(inst_31517)){
var statearr_31582_31643 = state_31548__$1;
(statearr_31582_31643[(1)] = (29));

} else {
var statearr_31583_31644 = state_31548__$1;
(statearr_31583_31644[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (25))){
var inst_31546 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31548__$1,inst_31546);
} else {
if((state_val_31549 === (34))){
var inst_31514 = (state_31548[(30)]);
var inst_31534 = (state_31548[(2)]);
var inst_31535 = cljs.core.not_empty.call(null,inst_31514);
var state_31548__$1 = (function (){var statearr_31584 = state_31548;
(statearr_31584[(31)] = inst_31534);

return statearr_31584;
})();
if(cljs.core.truth_(inst_31535)){
var statearr_31585_31645 = state_31548__$1;
(statearr_31585_31645[(1)] = (35));

} else {
var statearr_31586_31646 = state_31548__$1;
(statearr_31586_31646[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (17))){
var inst_31474 = (state_31548[(23)]);
var state_31548__$1 = state_31548;
var statearr_31587_31647 = state_31548__$1;
(statearr_31587_31647[(2)] = inst_31474);

(statearr_31587_31647[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (3))){
var state_31548__$1 = state_31548;
var statearr_31588_31648 = state_31548__$1;
(statearr_31588_31648[(2)] = null);

(statearr_31588_31648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (12))){
var inst_31465 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31589_31649 = state_31548__$1;
(statearr_31589_31649[(2)] = inst_31465);

(statearr_31589_31649[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (2))){
var inst_31427 = (state_31548[(20)]);
var inst_31434 = cljs.core.seq.call(null,inst_31427);
var inst_31435 = inst_31434;
var inst_31436 = null;
var inst_31437 = (0);
var inst_31438 = (0);
var state_31548__$1 = (function (){var statearr_31590 = state_31548;
(statearr_31590[(7)] = inst_31435);

(statearr_31590[(8)] = inst_31437);

(statearr_31590[(9)] = inst_31438);

(statearr_31590[(10)] = inst_31436);

return statearr_31590;
})();
var statearr_31591_31650 = state_31548__$1;
(statearr_31591_31650[(2)] = null);

(statearr_31591_31650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (23))){
var inst_31485 = (state_31548[(12)]);
var inst_31484 = (state_31548[(13)]);
var inst_31507 = (state_31548[(19)]);
var inst_31487 = (state_31548[(14)]);
var inst_31480 = (state_31548[(15)]);
var inst_31481 = (state_31548[(16)]);
var inst_31503 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31506 = (function (){var files_not_loaded = inst_31487;
var res = inst_31485;
var res_SINGLEQUOTE_ = inst_31484;
var files_SINGLEQUOTE_ = inst_31481;
var all_files = inst_31480;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31485,inst_31484,inst_31507,inst_31487,inst_31480,inst_31481,inst_31503,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (p__31505){
var map__31592 = p__31505;
var map__31592__$1 = ((cljs.core.seq_QMARK_.call(null,map__31592))?cljs.core.apply.call(null,cljs.core.hash_map,map__31592):map__31592);
var meta_data = cljs.core.get.call(null,map__31592__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31485,inst_31484,inst_31507,inst_31487,inst_31480,inst_31481,inst_31503,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
})();
var inst_31507__$1 = cljs.core.group_by.call(null,inst_31506,inst_31487);
var inst_31508 = cljs.core.seq_QMARK_.call(null,inst_31507__$1);
var state_31548__$1 = (function (){var statearr_31593 = state_31548;
(statearr_31593[(19)] = inst_31507__$1);

(statearr_31593[(32)] = inst_31503);

return statearr_31593;
})();
if(inst_31508){
var statearr_31594_31651 = state_31548__$1;
(statearr_31594_31651[(1)] = (26));

} else {
var statearr_31595_31652 = state_31548__$1;
(statearr_31595_31652[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (35))){
var inst_31514 = (state_31548[(30)]);
var inst_31537 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31514);
var inst_31538 = cljs.core.pr_str.call(null,inst_31537);
var inst_31539 = [cljs.core.str("not required: "),cljs.core.str(inst_31538)].join('');
var inst_31540 = figwheel.client.utils.log.call(null,inst_31539);
var state_31548__$1 = state_31548;
var statearr_31596_31653 = state_31548__$1;
(statearr_31596_31653[(2)] = inst_31540);

(statearr_31596_31653[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (19))){
var inst_31485 = (state_31548[(12)]);
var inst_31484 = (state_31548[(13)]);
var inst_31480 = (state_31548[(15)]);
var inst_31481 = (state_31548[(16)]);
var inst_31484__$1 = (state_31548[(2)]);
var inst_31485__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31484__$1);
var inst_31486 = (function (){var res = inst_31485__$1;
var res_SINGLEQUOTE_ = inst_31484__$1;
var files_SINGLEQUOTE_ = inst_31481;
var all_files = inst_31480;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31485,inst_31484,inst_31480,inst_31481,inst_31484__$1,inst_31485__$1,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (p1__31218_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31218_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_31485,inst_31484,inst_31480,inst_31481,inst_31484__$1,inst_31485__$1,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
})();
var inst_31487 = cljs.core.filter.call(null,inst_31486,inst_31484__$1);
var inst_31488 = cljs.core.not_empty.call(null,inst_31485__$1);
var state_31548__$1 = (function (){var statearr_31597 = state_31548;
(statearr_31597[(12)] = inst_31485__$1);

(statearr_31597[(13)] = inst_31484__$1);

(statearr_31597[(14)] = inst_31487);

return statearr_31597;
})();
if(cljs.core.truth_(inst_31488)){
var statearr_31598_31654 = state_31548__$1;
(statearr_31598_31654[(1)] = (20));

} else {
var statearr_31599_31655 = state_31548__$1;
(statearr_31599_31655[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (11))){
var state_31548__$1 = state_31548;
var statearr_31600_31656 = state_31548__$1;
(statearr_31600_31656[(2)] = null);

(statearr_31600_31656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (9))){
var inst_31467 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31601_31657 = state_31548__$1;
(statearr_31601_31657[(2)] = inst_31467);

(statearr_31601_31657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (5))){
var inst_31437 = (state_31548[(8)]);
var inst_31438 = (state_31548[(9)]);
var inst_31440 = (inst_31438 < inst_31437);
var inst_31441 = inst_31440;
var state_31548__$1 = state_31548;
if(cljs.core.truth_(inst_31441)){
var statearr_31602_31658 = state_31548__$1;
(statearr_31602_31658[(1)] = (7));

} else {
var statearr_31603_31659 = state_31548__$1;
(statearr_31603_31659[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (14))){
var inst_31448 = (state_31548[(27)]);
var inst_31457 = cljs.core.first.call(null,inst_31448);
var inst_31458 = figwheel.client.file_reloading.eval_body.call(null,inst_31457);
var inst_31459 = cljs.core.next.call(null,inst_31448);
var inst_31435 = inst_31459;
var inst_31436 = null;
var inst_31437 = (0);
var inst_31438 = (0);
var state_31548__$1 = (function (){var statearr_31604 = state_31548;
(statearr_31604[(7)] = inst_31435);

(statearr_31604[(8)] = inst_31437);

(statearr_31604[(33)] = inst_31458);

(statearr_31604[(9)] = inst_31438);

(statearr_31604[(10)] = inst_31436);

return statearr_31604;
})();
var statearr_31605_31660 = state_31548__$1;
(statearr_31605_31660[(2)] = null);

(statearr_31605_31660[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (26))){
var inst_31507 = (state_31548[(19)]);
var inst_31510 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31507);
var state_31548__$1 = state_31548;
var statearr_31606_31661 = state_31548__$1;
(statearr_31606_31661[(2)] = inst_31510);

(statearr_31606_31661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (16))){
var inst_31474 = (state_31548[(23)]);
var inst_31476 = (function (){var all_files = inst_31474;
return ((function (all_files,inst_31474,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function (p1__31217_SHARP_){
return cljs.core.update_in.call(null,p1__31217_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31474,state_val_31549,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
})();
var inst_31477 = cljs.core.map.call(null,inst_31476,inst_31474);
var state_31548__$1 = state_31548;
var statearr_31607_31662 = state_31548__$1;
(statearr_31607_31662[(2)] = inst_31477);

(statearr_31607_31662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (30))){
var state_31548__$1 = state_31548;
var statearr_31608_31663 = state_31548__$1;
(statearr_31608_31663[(2)] = null);

(statearr_31608_31663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (10))){
var inst_31448 = (state_31548[(27)]);
var inst_31450 = cljs.core.chunked_seq_QMARK_.call(null,inst_31448);
var state_31548__$1 = state_31548;
if(inst_31450){
var statearr_31609_31664 = state_31548__$1;
(statearr_31609_31664[(1)] = (13));

} else {
var statearr_31610_31665 = state_31548__$1;
(statearr_31610_31665[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (18))){
var inst_31480 = (state_31548[(15)]);
var inst_31481 = (state_31548[(16)]);
var inst_31480__$1 = (state_31548[(2)]);
var inst_31481__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_31480__$1);
var inst_31482 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31481__$1);
var state_31548__$1 = (function (){var statearr_31611 = state_31548;
(statearr_31611[(15)] = inst_31480__$1);

(statearr_31611[(16)] = inst_31481__$1);

return statearr_31611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31548__$1,(19),inst_31482);
} else {
if((state_val_31549 === (37))){
var inst_31543 = (state_31548[(2)]);
var state_31548__$1 = state_31548;
var statearr_31612_31666 = state_31548__$1;
(statearr_31612_31666[(2)] = inst_31543);

(statearr_31612_31666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31549 === (8))){
var inst_31435 = (state_31548[(7)]);
var inst_31448 = (state_31548[(27)]);
var inst_31448__$1 = cljs.core.seq.call(null,inst_31435);
var state_31548__$1 = (function (){var statearr_31613 = state_31548;
(statearr_31613[(27)] = inst_31448__$1);

return statearr_31613;
})();
if(inst_31448__$1){
var statearr_31614_31667 = state_31548__$1;
(statearr_31614_31667[(1)] = (10));

} else {
var statearr_31615_31668 = state_31548__$1;
(statearr_31615_31668[(1)] = (11));

}

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
}
}
}
});})(c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
;
return ((function (switch__21970__auto__,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto____0 = (function (){
var statearr_31619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31619[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto__);

(statearr_31619[(1)] = (1));

return statearr_31619;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto____1 = (function (state_31548){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_31548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e31620){if((e31620 instanceof Object)){
var ex__21974__auto__ = e31620;
var statearr_31621_31669 = state_31548;
(statearr_31621_31669[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31670 = state_31548;
state_31548 = G__31670;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto__ = function(state_31548){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto____1.call(this,state_31548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
})();
var state__22034__auto__ = (function (){var statearr_31622 = f__22033__auto__.call(null);
(statearr_31622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_31622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__,map__31422,map__31422__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__31423,map__31423__$1,msg,files))
);

return c__22032__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31673,link){
var map__31675 = p__31673;
var map__31675__$1 = ((cljs.core.seq_QMARK_.call(null,map__31675))?cljs.core.apply.call(null,cljs.core.hash_map,map__31675):map__31675);
var file = cljs.core.get.call(null,map__31675__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__31675,map__31675__$1,file){
return (function (p1__31671_SHARP_,p2__31672_SHARP_){
if(cljs.core._EQ_.call(null,p1__31671_SHARP_,p2__31672_SHARP_)){
return p1__31671_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__31675,map__31675__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31679){
var map__31680 = p__31679;
var map__31680__$1 = ((cljs.core.seq_QMARK_.call(null,map__31680))?cljs.core.apply.call(null,cljs.core.hash_map,map__31680):map__31680);
var current_url_length = cljs.core.get.call(null,map__31680__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__31680__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31676_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31676_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__31682 = arguments.length;
switch (G__31682) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31684){
var map__31686 = p__31684;
var map__31686__$1 = ((cljs.core.seq_QMARK_.call(null,map__31686))?cljs.core.apply.call(null,cljs.core.hash_map,map__31686):map__31686);
var f_data = map__31686__$1;
var request_url = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31686__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18121__auto__ = request_url;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31687,files_msg){
var map__31709 = p__31687;
var map__31709__$1 = ((cljs.core.seq_QMARK_.call(null,map__31709))?cljs.core.apply.call(null,cljs.core.hash_map,map__31709):map__31709);
var opts = map__31709__$1;
var on_cssload = cljs.core.get.call(null,map__31709__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31710_31730 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31711_31731 = null;
var count__31712_31732 = (0);
var i__31713_31733 = (0);
while(true){
if((i__31713_31733 < count__31712_31732)){
var f_31734 = cljs.core._nth.call(null,chunk__31711_31731,i__31713_31733);
figwheel.client.file_reloading.reload_css_file.call(null,f_31734);

var G__31735 = seq__31710_31730;
var G__31736 = chunk__31711_31731;
var G__31737 = count__31712_31732;
var G__31738 = (i__31713_31733 + (1));
seq__31710_31730 = G__31735;
chunk__31711_31731 = G__31736;
count__31712_31732 = G__31737;
i__31713_31733 = G__31738;
continue;
} else {
var temp__4126__auto___31739 = cljs.core.seq.call(null,seq__31710_31730);
if(temp__4126__auto___31739){
var seq__31710_31740__$1 = temp__4126__auto___31739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31710_31740__$1)){
var c__18906__auto___31741 = cljs.core.chunk_first.call(null,seq__31710_31740__$1);
var G__31742 = cljs.core.chunk_rest.call(null,seq__31710_31740__$1);
var G__31743 = c__18906__auto___31741;
var G__31744 = cljs.core.count.call(null,c__18906__auto___31741);
var G__31745 = (0);
seq__31710_31730 = G__31742;
chunk__31711_31731 = G__31743;
count__31712_31732 = G__31744;
i__31713_31733 = G__31745;
continue;
} else {
var f_31746 = cljs.core.first.call(null,seq__31710_31740__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31746);

var G__31747 = cljs.core.next.call(null,seq__31710_31740__$1);
var G__31748 = null;
var G__31749 = (0);
var G__31750 = (0);
seq__31710_31730 = G__31747;
chunk__31711_31731 = G__31748;
count__31712_31732 = G__31749;
i__31713_31733 = G__31750;
continue;
}
} else {
}
}
break;
}

var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__,map__31709,map__31709__$1,opts,on_cssload){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__,map__31709,map__31709__$1,opts,on_cssload){
return (function (state_31720){
var state_val_31721 = (state_31720[(1)]);
if((state_val_31721 === (2))){
var inst_31716 = (state_31720[(2)]);
var inst_31717 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31718 = on_cssload.call(null,inst_31717);
var state_31720__$1 = (function (){var statearr_31722 = state_31720;
(statearr_31722[(7)] = inst_31716);

return statearr_31722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31720__$1,inst_31718);
} else {
if((state_val_31721 === (1))){
var inst_31714 = cljs.core.async.timeout.call(null,(100));
var state_31720__$1 = state_31720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31720__$1,(2),inst_31714);
} else {
return null;
}
}
});})(c__22032__auto__,map__31709,map__31709__$1,opts,on_cssload))
;
return ((function (switch__21970__auto__,c__22032__auto__,map__31709,map__31709__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto____0 = (function (){
var statearr_31726 = [null,null,null,null,null,null,null,null];
(statearr_31726[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto__);

(statearr_31726[(1)] = (1));

return statearr_31726;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto____1 = (function (state_31720){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_31720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e31727){if((e31727 instanceof Object)){
var ex__21974__auto__ = e31727;
var statearr_31728_31751 = state_31720;
(statearr_31728_31751[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31752 = state_31720;
state_31720 = G__31752;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto__ = function(state_31720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto____1.call(this,state_31720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__,map__31709,map__31709__$1,opts,on_cssload))
})();
var state__22034__auto__ = (function (){var statearr_31729 = f__22033__auto__.call(null);
(statearr_31729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_31729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__,map__31709,map__31709__$1,opts,on_cssload))
);

return c__22032__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1444936779773