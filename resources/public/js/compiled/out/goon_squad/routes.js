// Compiled by ClojureScript 0.0-3211 {}
goog.provide('goon_squad.routes');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.history.EventType');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('goog.History');
goon_squad.routes.hook_browser_navigation_BANG_ = (function goon_squad$routes$hook_browser_navigation_BANG_(){
var G__24467 = (new goog.History());
goog.events.listen(G__24467,goog.history.EventType.NAVIGATE,((function (G__24467){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__24467))
);

G__24467.setEnabled(true);

return G__24467;
});
goon_squad.routes.app_routes = (function goon_squad$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__24376__auto___24476 = (function (params__24377__auto__){
if(cljs.core.map_QMARK_.call(null,params__24377__auto__)){
var map__24472 = params__24377__auto__;
var map__24472__$1 = ((cljs.core.seq_QMARK_.call(null,map__24472))?cljs.core.apply.call(null,cljs.core.hash_map,map__24472):map__24472);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24377__auto__)){
var vec__24473 = params__24377__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24376__auto___24476);


var action__24376__auto___24477 = (function (params__24377__auto__){
if(cljs.core.map_QMARK_.call(null,params__24377__auto__)){
var map__24474 = params__24377__auto__;
var map__24474__$1 = ((cljs.core.seq_QMARK_.call(null,map__24474))?cljs.core.apply.call(null,cljs.core.hash_map,map__24474):map__24474);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24377__auto__)){
var vec__24475 = params__24377__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__24376__auto___24477);


return goon_squad.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1444936766903