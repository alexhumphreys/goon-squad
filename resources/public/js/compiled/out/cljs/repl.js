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
var seq__31043_31055 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31044_31056 = null;
var count__31045_31057 = (0);
var i__31046_31058 = (0);
while(true){
if((i__31046_31058 < count__31045_31057)){
var f_31059 = cljs.core._nth.call(null,chunk__31044_31056,i__31046_31058);
cljs.core.println.call(null,"  ",f_31059);

var G__31060 = seq__31043_31055;
var G__31061 = chunk__31044_31056;
var G__31062 = count__31045_31057;
var G__31063 = (i__31046_31058 + (1));
seq__31043_31055 = G__31060;
chunk__31044_31056 = G__31061;
count__31045_31057 = G__31062;
i__31046_31058 = G__31063;
continue;
} else {
var temp__4126__auto___31064 = cljs.core.seq.call(null,seq__31043_31055);
if(temp__4126__auto___31064){
var seq__31043_31065__$1 = temp__4126__auto___31064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31043_31065__$1)){
var c__18906__auto___31066 = cljs.core.chunk_first.call(null,seq__31043_31065__$1);
var G__31067 = cljs.core.chunk_rest.call(null,seq__31043_31065__$1);
var G__31068 = c__18906__auto___31066;
var G__31069 = cljs.core.count.call(null,c__18906__auto___31066);
var G__31070 = (0);
seq__31043_31055 = G__31067;
chunk__31044_31056 = G__31068;
count__31045_31057 = G__31069;
i__31046_31058 = G__31070;
continue;
} else {
var f_31071 = cljs.core.first.call(null,seq__31043_31065__$1);
cljs.core.println.call(null,"  ",f_31071);

var G__31072 = cljs.core.next.call(null,seq__31043_31065__$1);
var G__31073 = null;
var G__31074 = (0);
var G__31075 = (0);
seq__31043_31055 = G__31072;
chunk__31044_31056 = G__31073;
count__31045_31057 = G__31074;
i__31046_31058 = G__31075;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__18121__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
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
var seq__31047 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31048 = null;
var count__31049 = (0);
var i__31050 = (0);
while(true){
if((i__31050 < count__31049)){
var vec__31051 = cljs.core._nth.call(null,chunk__31048,i__31050);
var name = cljs.core.nth.call(null,vec__31051,(0),null);
var map__31052 = cljs.core.nth.call(null,vec__31051,(1),null);
var map__31052__$1 = ((cljs.core.seq_QMARK_.call(null,map__31052))?cljs.core.apply.call(null,cljs.core.hash_map,map__31052):map__31052);
var arglists = cljs.core.get.call(null,map__31052__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__31052__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31076 = seq__31047;
var G__31077 = chunk__31048;
var G__31078 = count__31049;
var G__31079 = (i__31050 + (1));
seq__31047 = G__31076;
chunk__31048 = G__31077;
count__31049 = G__31078;
i__31050 = G__31079;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31047);
if(temp__4126__auto__){
var seq__31047__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31047__$1)){
var c__18906__auto__ = cljs.core.chunk_first.call(null,seq__31047__$1);
var G__31080 = cljs.core.chunk_rest.call(null,seq__31047__$1);
var G__31081 = c__18906__auto__;
var G__31082 = cljs.core.count.call(null,c__18906__auto__);
var G__31083 = (0);
seq__31047 = G__31080;
chunk__31048 = G__31081;
count__31049 = G__31082;
i__31050 = G__31083;
continue;
} else {
var vec__31053 = cljs.core.first.call(null,seq__31047__$1);
var name = cljs.core.nth.call(null,vec__31053,(0),null);
var map__31054 = cljs.core.nth.call(null,vec__31053,(1),null);
var map__31054__$1 = ((cljs.core.seq_QMARK_.call(null,map__31054))?cljs.core.apply.call(null,cljs.core.hash_map,map__31054):map__31054);
var arglists = cljs.core.get.call(null,map__31054__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__31054__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31084 = cljs.core.next.call(null,seq__31047__$1);
var G__31085 = null;
var G__31086 = (0);
var G__31087 = (0);
seq__31047 = G__31084;
chunk__31048 = G__31085;
count__31049 = G__31086;
i__31050 = G__31087;
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

//# sourceMappingURL=repl.js.map?rel=1444936779333