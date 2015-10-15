// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('goon_squad.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21381__delegate = function (x){
if(cljs.core.truth_(goon_squad.core.mount_root)){
return cljs.core.apply.call(null,goon_squad.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'goon-squad.core/mount-root' is missing");
}
};
var G__21381 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21382__i = 0, G__21382__a = new Array(arguments.length -  0);
while (G__21382__i < G__21382__a.length) {G__21382__a[G__21382__i] = arguments[G__21382__i + 0]; ++G__21382__i;}
  x = new cljs.core.IndexedSeq(G__21382__a,0);
} 
return G__21381__delegate.call(this,x);};
G__21381.cljs$lang$maxFixedArity = 0;
G__21381.cljs$lang$applyTo = (function (arglist__21383){
var x = cljs.core.seq(arglist__21383);
return G__21381__delegate(x);
});
G__21381.cljs$core$IFn$_invoke$arity$variadic = G__21381__delegate;
return G__21381;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev"], null));

//# sourceMappingURL=connect.js.map?rel=1444942635577