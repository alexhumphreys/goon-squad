// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7165_7177 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7166_7178 = null;
var count__7167_7179 = (0);
var i__7168_7180 = (0);
while(true){
if((i__7168_7180 < count__7167_7179)){
var f_7181 = cljs.core._nth.call(null,chunk__7166_7178,i__7168_7180);
cljs.core.println.call(null,"  ",f_7181);

var G__7182 = seq__7165_7177;
var G__7183 = chunk__7166_7178;
var G__7184 = count__7167_7179;
var G__7185 = (i__7168_7180 + (1));
seq__7165_7177 = G__7182;
chunk__7166_7178 = G__7183;
count__7167_7179 = G__7184;
i__7168_7180 = G__7185;
continue;
} else {
var temp__4126__auto___7186 = cljs.core.seq.call(null,seq__7165_7177);
if(temp__4126__auto___7186){
var seq__7165_7187__$1 = temp__4126__auto___7186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7165_7187__$1)){
var c__6838__auto___7188 = cljs.core.chunk_first.call(null,seq__7165_7187__$1);
var G__7189 = cljs.core.chunk_rest.call(null,seq__7165_7187__$1);
var G__7190 = c__6838__auto___7188;
var G__7191 = cljs.core.count.call(null,c__6838__auto___7188);
var G__7192 = (0);
seq__7165_7177 = G__7189;
chunk__7166_7178 = G__7190;
count__7167_7179 = G__7191;
i__7168_7180 = G__7192;
continue;
} else {
var f_7193 = cljs.core.first.call(null,seq__7165_7187__$1);
cljs.core.println.call(null,"  ",f_7193);

var G__7194 = cljs.core.next.call(null,seq__7165_7187__$1);
var G__7195 = null;
var G__7196 = (0);
var G__7197 = (0);
seq__7165_7177 = G__7194;
chunk__7166_7178 = G__7195;
count__7167_7179 = G__7196;
i__7168_7180 = G__7197;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__6053__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6053__auto__)){
return or__6053__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__7169 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__7170 = null;
var count__7171 = (0);
var i__7172 = (0);
while(true){
if((i__7172 < count__7171)){
var vec__7173 = cljs.core._nth.call(null,chunk__7170,i__7172);
var name = cljs.core.nth.call(null,vec__7173,(0),null);
var map__7174 = cljs.core.nth.call(null,vec__7173,(1),null);
var map__7174__$1 = ((cljs.core.seq_QMARK_.call(null,map__7174))?cljs.core.apply.call(null,cljs.core.hash_map,map__7174):map__7174);
var arglists = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__7174__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7198 = seq__7169;
var G__7199 = chunk__7170;
var G__7200 = count__7171;
var G__7201 = (i__7172 + (1));
seq__7169 = G__7198;
chunk__7170 = G__7199;
count__7171 = G__7200;
i__7172 = G__7201;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7169);
if(temp__4126__auto__){
var seq__7169__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7169__$1)){
var c__6838__auto__ = cljs.core.chunk_first.call(null,seq__7169__$1);
var G__7202 = cljs.core.chunk_rest.call(null,seq__7169__$1);
var G__7203 = c__6838__auto__;
var G__7204 = cljs.core.count.call(null,c__6838__auto__);
var G__7205 = (0);
seq__7169 = G__7202;
chunk__7170 = G__7203;
count__7171 = G__7204;
i__7172 = G__7205;
continue;
} else {
var vec__7175 = cljs.core.first.call(null,seq__7169__$1);
var name = cljs.core.nth.call(null,vec__7175,(0),null);
var map__7176 = cljs.core.nth.call(null,vec__7175,(1),null);
var map__7176__$1 = ((cljs.core.seq_QMARK_.call(null,map__7176))?cljs.core.apply.call(null,cljs.core.hash_map,map__7176):map__7176);
var arglists = cljs.core.get.call(null,map__7176__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__7176__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__7206 = cljs.core.next.call(null,seq__7169__$1);
var G__7207 = null;
var G__7208 = (0);
var G__7209 = (0);
seq__7169 = G__7206;
chunk__7170 = G__7207;
count__7171 = G__7208;
i__7172 = G__7209;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map