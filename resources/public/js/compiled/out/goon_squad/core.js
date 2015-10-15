// Compiled by ClojureScript 0.0-3211 {}
goog.provide('goon_squad.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goon_squad.routes');
goog.require('goon_squad.views');
goog.require('goon_squad.handlers');
goog.require('goon_squad.subs');
goog.require('re_frame.core');
goon_squad.core.mount_root = (function goon_squad$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goon_squad.views.main_panel], null),document.getElementById("app"));
});
goon_squad.core.init = (function goon_squad$core$init(){
goon_squad.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return goon_squad.core.mount_root.call(null);
});
goog.exportSymbol('goon_squad.core.init', goon_squad.core.init);

//# sourceMappingURL=core.js.map?rel=1444936767034