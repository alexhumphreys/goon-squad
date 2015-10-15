// Compiled by ClojureScript 0.0-3211 {}
goog.provide('goon_squad.handlers');
goog.require('cljs.core');
goog.require('goon_squad.db');
goog.require('re_frame.core');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return goon_squad.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__24482){
var vec__24483 = p__24482;
var _ = cljs.core.nth.call(null,vec__24483,(0),null);
var active_panel = cljs.core.nth.call(null,vec__24483,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
}));

//# sourceMappingURL=handlers.js.map?rel=1444936766949