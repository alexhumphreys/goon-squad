// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t26568 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26568 = (function (f,fn_handler,meta26569){
this.f = f;
this.fn_handler = fn_handler;
this.meta26569 = meta26569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26568.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26570){
var self__ = this;
var _26570__$1 = this;
return self__.meta26569;
});

cljs.core.async.t26568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26570,meta26569__$1){
var self__ = this;
var _26570__$1 = this;
return (new cljs.core.async.t26568(self__.f,self__.fn_handler,meta26569__$1));
});

cljs.core.async.t26568.cljs$lang$type = true;

cljs.core.async.t26568.cljs$lang$ctorStr = "cljs.core.async/t26568";

cljs.core.async.t26568.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26568");
});

cljs.core.async.__GT_t26568 = (function cljs$core$async$fn_handler_$___GT_t26568(f__$1,fn_handler__$1,meta26569){
return (new cljs.core.async.t26568(f__$1,fn_handler__$1,meta26569));
});

}

return (new cljs.core.async.t26568(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__26572 = buff;
if(G__26572){
var bit__18795__auto__ = null;
if(cljs.core.truth_((function (){var or__18121__auto__ = bit__18795__auto__;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return G__26572.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26572.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26572);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26572);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__26574 = arguments.length;
switch (G__26574) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__26577 = arguments.length;
switch (G__26577) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26579 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26579);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26579,ret){
return (function (){
return fn1.call(null,val_26579);
});})(val_26579,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__26581 = arguments.length;
switch (G__26581) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19006__auto___26583 = n;
var x_26584 = (0);
while(true){
if((x_26584 < n__19006__auto___26583)){
(a[x_26584] = (0));

var G__26585 = (x_26584 + (1));
x_26584 = G__26585;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26586 = (i + (1));
i = G__26586;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26590 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26590 = (function (flag,alt_flag,meta26591){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26591 = meta26591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26592){
var self__ = this;
var _26592__$1 = this;
return self__.meta26591;
});})(flag))
;

cljs.core.async.t26590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26592,meta26591__$1){
var self__ = this;
var _26592__$1 = this;
return (new cljs.core.async.t26590(self__.flag,self__.alt_flag,meta26591__$1));
});})(flag))
;

cljs.core.async.t26590.cljs$lang$type = true;

cljs.core.async.t26590.cljs$lang$ctorStr = "cljs.core.async/t26590";

cljs.core.async.t26590.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26590");
});})(flag))
;

cljs.core.async.__GT_t26590 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26590(flag__$1,alt_flag__$1,meta26591){
return (new cljs.core.async.t26590(flag__$1,alt_flag__$1,meta26591));
});})(flag))
;

}

return (new cljs.core.async.t26590(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26596 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26596 = (function (cb,flag,alt_handler,meta26597){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26597 = meta26597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26596.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26598){
var self__ = this;
var _26598__$1 = this;
return self__.meta26597;
});

cljs.core.async.t26596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26598,meta26597__$1){
var self__ = this;
var _26598__$1 = this;
return (new cljs.core.async.t26596(self__.cb,self__.flag,self__.alt_handler,meta26597__$1));
});

cljs.core.async.t26596.cljs$lang$type = true;

cljs.core.async.t26596.cljs$lang$ctorStr = "cljs.core.async/t26596";

cljs.core.async.t26596.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t26596");
});

cljs.core.async.__GT_t26596 = (function cljs$core$async$alt_handler_$___GT_t26596(cb__$1,flag__$1,alt_handler__$1,meta26597){
return (new cljs.core.async.t26596(cb__$1,flag__$1,alt_handler__$1,meta26597));
});

}

return (new cljs.core.async.t26596(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26599_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26599_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26600_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26600_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18121__auto__ = wport;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26601 = (i + (1));
i = G__26601;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18121__auto__ = ret;
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__18109__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18109__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18109__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19161__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19161__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26604){
var map__26605 = p__26604;
var map__26605__$1 = ((cljs.core.seq_QMARK_.call(null,map__26605))?cljs.core.apply.call(null,cljs.core.hash_map,map__26605):map__26605);
var opts = map__26605__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26602){
var G__26603 = cljs.core.first.call(null,seq26602);
var seq26602__$1 = cljs.core.next.call(null,seq26602);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26603,seq26602__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26607 = arguments.length;
switch (G__26607) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22032__auto___26656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___26656){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___26656){
return (function (state_26631){
var state_val_26632 = (state_26631[(1)]);
if((state_val_26632 === (7))){
var inst_26627 = (state_26631[(2)]);
var state_26631__$1 = state_26631;
var statearr_26633_26657 = state_26631__$1;
(statearr_26633_26657[(2)] = inst_26627);

(statearr_26633_26657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (1))){
var state_26631__$1 = state_26631;
var statearr_26634_26658 = state_26631__$1;
(statearr_26634_26658[(2)] = null);

(statearr_26634_26658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (4))){
var inst_26610 = (state_26631[(7)]);
var inst_26610__$1 = (state_26631[(2)]);
var inst_26611 = (inst_26610__$1 == null);
var state_26631__$1 = (function (){var statearr_26635 = state_26631;
(statearr_26635[(7)] = inst_26610__$1);

return statearr_26635;
})();
if(cljs.core.truth_(inst_26611)){
var statearr_26636_26659 = state_26631__$1;
(statearr_26636_26659[(1)] = (5));

} else {
var statearr_26637_26660 = state_26631__$1;
(statearr_26637_26660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (13))){
var state_26631__$1 = state_26631;
var statearr_26638_26661 = state_26631__$1;
(statearr_26638_26661[(2)] = null);

(statearr_26638_26661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (6))){
var inst_26610 = (state_26631[(7)]);
var state_26631__$1 = state_26631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26631__$1,(11),to,inst_26610);
} else {
if((state_val_26632 === (3))){
var inst_26629 = (state_26631[(2)]);
var state_26631__$1 = state_26631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26631__$1,inst_26629);
} else {
if((state_val_26632 === (12))){
var state_26631__$1 = state_26631;
var statearr_26639_26662 = state_26631__$1;
(statearr_26639_26662[(2)] = null);

(statearr_26639_26662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (2))){
var state_26631__$1 = state_26631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26631__$1,(4),from);
} else {
if((state_val_26632 === (11))){
var inst_26620 = (state_26631[(2)]);
var state_26631__$1 = state_26631;
if(cljs.core.truth_(inst_26620)){
var statearr_26640_26663 = state_26631__$1;
(statearr_26640_26663[(1)] = (12));

} else {
var statearr_26641_26664 = state_26631__$1;
(statearr_26641_26664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (9))){
var state_26631__$1 = state_26631;
var statearr_26642_26665 = state_26631__$1;
(statearr_26642_26665[(2)] = null);

(statearr_26642_26665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (5))){
var state_26631__$1 = state_26631;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26643_26666 = state_26631__$1;
(statearr_26643_26666[(1)] = (8));

} else {
var statearr_26644_26667 = state_26631__$1;
(statearr_26644_26667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (14))){
var inst_26625 = (state_26631[(2)]);
var state_26631__$1 = state_26631;
var statearr_26645_26668 = state_26631__$1;
(statearr_26645_26668[(2)] = inst_26625);

(statearr_26645_26668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (10))){
var inst_26617 = (state_26631[(2)]);
var state_26631__$1 = state_26631;
var statearr_26646_26669 = state_26631__$1;
(statearr_26646_26669[(2)] = inst_26617);

(statearr_26646_26669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26632 === (8))){
var inst_26614 = cljs.core.async.close_BANG_.call(null,to);
var state_26631__$1 = state_26631;
var statearr_26647_26670 = state_26631__$1;
(statearr_26647_26670[(2)] = inst_26614);

(statearr_26647_26670[(1)] = (10));


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
});})(c__22032__auto___26656))
;
return ((function (switch__21970__auto__,c__22032__auto___26656){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_26651 = [null,null,null,null,null,null,null,null];
(statearr_26651[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_26651[(1)] = (1));

return statearr_26651;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_26631){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_26631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e26652){if((e26652 instanceof Object)){
var ex__21974__auto__ = e26652;
var statearr_26653_26671 = state_26631;
(statearr_26653_26671[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26672 = state_26631;
state_26631 = G__26672;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_26631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_26631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___26656))
})();
var state__22034__auto__ = (function (){var statearr_26654 = f__22033__auto__.call(null);
(statearr_26654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___26656);

return statearr_26654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___26656))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26856){
var vec__26857 = p__26856;
var v = cljs.core.nth.call(null,vec__26857,(0),null);
var p = cljs.core.nth.call(null,vec__26857,(1),null);
var job = vec__26857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22032__auto___27039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___27039,res,vec__26857,v,p,job,jobs,results){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___27039,res,vec__26857,v,p,job,jobs,results){
return (function (state_26862){
var state_val_26863 = (state_26862[(1)]);
if((state_val_26863 === (2))){
var inst_26859 = (state_26862[(2)]);
var inst_26860 = cljs.core.async.close_BANG_.call(null,res);
var state_26862__$1 = (function (){var statearr_26864 = state_26862;
(statearr_26864[(7)] = inst_26859);

return statearr_26864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26862__$1,inst_26860);
} else {
if((state_val_26863 === (1))){
var state_26862__$1 = state_26862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26862__$1,(2),res,v);
} else {
return null;
}
}
});})(c__22032__auto___27039,res,vec__26857,v,p,job,jobs,results))
;
return ((function (switch__21970__auto__,c__22032__auto___27039,res,vec__26857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0 = (function (){
var statearr_26868 = [null,null,null,null,null,null,null,null];
(statearr_26868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__);

(statearr_26868[(1)] = (1));

return statearr_26868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1 = (function (state_26862){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_26862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e26869){if((e26869 instanceof Object)){
var ex__21974__auto__ = e26869;
var statearr_26870_27040 = state_26862;
(statearr_26870_27040[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27041 = state_26862;
state_26862 = G__27041;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = function(state_26862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1.call(this,state_26862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___27039,res,vec__26857,v,p,job,jobs,results))
})();
var state__22034__auto__ = (function (){var statearr_26871 = f__22033__auto__.call(null);
(statearr_26871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___27039);

return statearr_26871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___27039,res,vec__26857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26872){
var vec__26873 = p__26872;
var v = cljs.core.nth.call(null,vec__26873,(0),null);
var p = cljs.core.nth.call(null,vec__26873,(1),null);
var job = vec__26873;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19006__auto___27042 = n;
var __27043 = (0);
while(true){
if((__27043 < n__19006__auto___27042)){
var G__26874_27044 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26874_27044) {
case "async":
var c__22032__auto___27046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27043,c__22032__auto___27046,G__26874_27044,n__19006__auto___27042,jobs,results,process,async){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (__27043,c__22032__auto___27046,G__26874_27044,n__19006__auto___27042,jobs,results,process,async){
return (function (state_26887){
var state_val_26888 = (state_26887[(1)]);
if((state_val_26888 === (7))){
var inst_26883 = (state_26887[(2)]);
var state_26887__$1 = state_26887;
var statearr_26889_27047 = state_26887__$1;
(statearr_26889_27047[(2)] = inst_26883);

(statearr_26889_27047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (6))){
var state_26887__$1 = state_26887;
var statearr_26890_27048 = state_26887__$1;
(statearr_26890_27048[(2)] = null);

(statearr_26890_27048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (5))){
var state_26887__$1 = state_26887;
var statearr_26891_27049 = state_26887__$1;
(statearr_26891_27049[(2)] = null);

(statearr_26891_27049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (4))){
var inst_26877 = (state_26887[(2)]);
var inst_26878 = async.call(null,inst_26877);
var state_26887__$1 = state_26887;
if(cljs.core.truth_(inst_26878)){
var statearr_26892_27050 = state_26887__$1;
(statearr_26892_27050[(1)] = (5));

} else {
var statearr_26893_27051 = state_26887__$1;
(statearr_26893_27051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26888 === (3))){
var inst_26885 = (state_26887[(2)]);
var state_26887__$1 = state_26887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26887__$1,inst_26885);
} else {
if((state_val_26888 === (2))){
var state_26887__$1 = state_26887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26887__$1,(4),jobs);
} else {
if((state_val_26888 === (1))){
var state_26887__$1 = state_26887;
var statearr_26894_27052 = state_26887__$1;
(statearr_26894_27052[(2)] = null);

(statearr_26894_27052[(1)] = (2));


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
});})(__27043,c__22032__auto___27046,G__26874_27044,n__19006__auto___27042,jobs,results,process,async))
;
return ((function (__27043,switch__21970__auto__,c__22032__auto___27046,G__26874_27044,n__19006__auto___27042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0 = (function (){
var statearr_26898 = [null,null,null,null,null,null,null];
(statearr_26898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__);

(statearr_26898[(1)] = (1));

return statearr_26898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1 = (function (state_26887){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_26887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e26899){if((e26899 instanceof Object)){
var ex__21974__auto__ = e26899;
var statearr_26900_27053 = state_26887;
(statearr_26900_27053[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27054 = state_26887;
state_26887 = G__27054;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = function(state_26887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1.call(this,state_26887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__;
})()
;})(__27043,switch__21970__auto__,c__22032__auto___27046,G__26874_27044,n__19006__auto___27042,jobs,results,process,async))
})();
var state__22034__auto__ = (function (){var statearr_26901 = f__22033__auto__.call(null);
(statearr_26901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___27046);

return statearr_26901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(__27043,c__22032__auto___27046,G__26874_27044,n__19006__auto___27042,jobs,results,process,async))
);


break;
case "compute":
var c__22032__auto___27055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27043,c__22032__auto___27055,G__26874_27044,n__19006__auto___27042,jobs,results,process,async){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (__27043,c__22032__auto___27055,G__26874_27044,n__19006__auto___27042,jobs,results,process,async){
return (function (state_26914){
var state_val_26915 = (state_26914[(1)]);
if((state_val_26915 === (7))){
var inst_26910 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26916_27056 = state_26914__$1;
(statearr_26916_27056[(2)] = inst_26910);

(statearr_26916_27056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (6))){
var state_26914__$1 = state_26914;
var statearr_26917_27057 = state_26914__$1;
(statearr_26917_27057[(2)] = null);

(statearr_26917_27057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (5))){
var state_26914__$1 = state_26914;
var statearr_26918_27058 = state_26914__$1;
(statearr_26918_27058[(2)] = null);

(statearr_26918_27058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (4))){
var inst_26904 = (state_26914[(2)]);
var inst_26905 = process.call(null,inst_26904);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26905)){
var statearr_26919_27059 = state_26914__$1;
(statearr_26919_27059[(1)] = (5));

} else {
var statearr_26920_27060 = state_26914__$1;
(statearr_26920_27060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (3))){
var inst_26912 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26914__$1,inst_26912);
} else {
if((state_val_26915 === (2))){
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(4),jobs);
} else {
if((state_val_26915 === (1))){
var state_26914__$1 = state_26914;
var statearr_26921_27061 = state_26914__$1;
(statearr_26921_27061[(2)] = null);

(statearr_26921_27061[(1)] = (2));


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
});})(__27043,c__22032__auto___27055,G__26874_27044,n__19006__auto___27042,jobs,results,process,async))
;
return ((function (__27043,switch__21970__auto__,c__22032__auto___27055,G__26874_27044,n__19006__auto___27042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0 = (function (){
var statearr_26925 = [null,null,null,null,null,null,null];
(statearr_26925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__);

(statearr_26925[(1)] = (1));

return statearr_26925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1 = (function (state_26914){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_26914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e26926){if((e26926 instanceof Object)){
var ex__21974__auto__ = e26926;
var statearr_26927_27062 = state_26914;
(statearr_26927_27062[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27063 = state_26914;
state_26914 = G__27063;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = function(state_26914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1.call(this,state_26914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__;
})()
;})(__27043,switch__21970__auto__,c__22032__auto___27055,G__26874_27044,n__19006__auto___27042,jobs,results,process,async))
})();
var state__22034__auto__ = (function (){var statearr_26928 = f__22033__auto__.call(null);
(statearr_26928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___27055);

return statearr_26928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(__27043,c__22032__auto___27055,G__26874_27044,n__19006__auto___27042,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27064 = (__27043 + (1));
__27043 = G__27064;
continue;
} else {
}
break;
}

var c__22032__auto___27065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___27065,jobs,results,process,async){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___27065,jobs,results,process,async){
return (function (state_26950){
var state_val_26951 = (state_26950[(1)]);
if((state_val_26951 === (9))){
var inst_26943 = (state_26950[(2)]);
var state_26950__$1 = (function (){var statearr_26952 = state_26950;
(statearr_26952[(7)] = inst_26943);

return statearr_26952;
})();
var statearr_26953_27066 = state_26950__$1;
(statearr_26953_27066[(2)] = null);

(statearr_26953_27066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (8))){
var inst_26936 = (state_26950[(8)]);
var inst_26941 = (state_26950[(2)]);
var state_26950__$1 = (function (){var statearr_26954 = state_26950;
(statearr_26954[(9)] = inst_26941);

return statearr_26954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26950__$1,(9),results,inst_26936);
} else {
if((state_val_26951 === (7))){
var inst_26946 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
var statearr_26955_27067 = state_26950__$1;
(statearr_26955_27067[(2)] = inst_26946);

(statearr_26955_27067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (6))){
var inst_26931 = (state_26950[(10)]);
var inst_26936 = (state_26950[(8)]);
var inst_26936__$1 = cljs.core.async.chan.call(null,(1));
var inst_26937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26938 = [inst_26931,inst_26936__$1];
var inst_26939 = (new cljs.core.PersistentVector(null,2,(5),inst_26937,inst_26938,null));
var state_26950__$1 = (function (){var statearr_26956 = state_26950;
(statearr_26956[(8)] = inst_26936__$1);

return statearr_26956;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26950__$1,(8),jobs,inst_26939);
} else {
if((state_val_26951 === (5))){
var inst_26934 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26950__$1 = state_26950;
var statearr_26957_27068 = state_26950__$1;
(statearr_26957_27068[(2)] = inst_26934);

(statearr_26957_27068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (4))){
var inst_26931 = (state_26950[(10)]);
var inst_26931__$1 = (state_26950[(2)]);
var inst_26932 = (inst_26931__$1 == null);
var state_26950__$1 = (function (){var statearr_26958 = state_26950;
(statearr_26958[(10)] = inst_26931__$1);

return statearr_26958;
})();
if(cljs.core.truth_(inst_26932)){
var statearr_26959_27069 = state_26950__$1;
(statearr_26959_27069[(1)] = (5));

} else {
var statearr_26960_27070 = state_26950__$1;
(statearr_26960_27070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26951 === (3))){
var inst_26948 = (state_26950[(2)]);
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26950__$1,inst_26948);
} else {
if((state_val_26951 === (2))){
var state_26950__$1 = state_26950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26950__$1,(4),from);
} else {
if((state_val_26951 === (1))){
var state_26950__$1 = state_26950;
var statearr_26961_27071 = state_26950__$1;
(statearr_26961_27071[(2)] = null);

(statearr_26961_27071[(1)] = (2));


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
});})(c__22032__auto___27065,jobs,results,process,async))
;
return ((function (switch__21970__auto__,c__22032__auto___27065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0 = (function (){
var statearr_26965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__);

(statearr_26965[(1)] = (1));

return statearr_26965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1 = (function (state_26950){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_26950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e26966){if((e26966 instanceof Object)){
var ex__21974__auto__ = e26966;
var statearr_26967_27072 = state_26950;
(statearr_26967_27072[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27073 = state_26950;
state_26950 = G__27073;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = function(state_26950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1.call(this,state_26950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___27065,jobs,results,process,async))
})();
var state__22034__auto__ = (function (){var statearr_26968 = f__22033__auto__.call(null);
(statearr_26968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___27065);

return statearr_26968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___27065,jobs,results,process,async))
);


var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__,jobs,results,process,async){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__,jobs,results,process,async){
return (function (state_27006){
var state_val_27007 = (state_27006[(1)]);
if((state_val_27007 === (7))){
var inst_27002 = (state_27006[(2)]);
var state_27006__$1 = state_27006;
var statearr_27008_27074 = state_27006__$1;
(statearr_27008_27074[(2)] = inst_27002);

(statearr_27008_27074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (20))){
var state_27006__$1 = state_27006;
var statearr_27009_27075 = state_27006__$1;
(statearr_27009_27075[(2)] = null);

(statearr_27009_27075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (1))){
var state_27006__$1 = state_27006;
var statearr_27010_27076 = state_27006__$1;
(statearr_27010_27076[(2)] = null);

(statearr_27010_27076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (4))){
var inst_26971 = (state_27006[(7)]);
var inst_26971__$1 = (state_27006[(2)]);
var inst_26972 = (inst_26971__$1 == null);
var state_27006__$1 = (function (){var statearr_27011 = state_27006;
(statearr_27011[(7)] = inst_26971__$1);

return statearr_27011;
})();
if(cljs.core.truth_(inst_26972)){
var statearr_27012_27077 = state_27006__$1;
(statearr_27012_27077[(1)] = (5));

} else {
var statearr_27013_27078 = state_27006__$1;
(statearr_27013_27078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (15))){
var inst_26984 = (state_27006[(8)]);
var state_27006__$1 = state_27006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27006__$1,(18),to,inst_26984);
} else {
if((state_val_27007 === (21))){
var inst_26997 = (state_27006[(2)]);
var state_27006__$1 = state_27006;
var statearr_27014_27079 = state_27006__$1;
(statearr_27014_27079[(2)] = inst_26997);

(statearr_27014_27079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (13))){
var inst_26999 = (state_27006[(2)]);
var state_27006__$1 = (function (){var statearr_27015 = state_27006;
(statearr_27015[(9)] = inst_26999);

return statearr_27015;
})();
var statearr_27016_27080 = state_27006__$1;
(statearr_27016_27080[(2)] = null);

(statearr_27016_27080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (6))){
var inst_26971 = (state_27006[(7)]);
var state_27006__$1 = state_27006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27006__$1,(11),inst_26971);
} else {
if((state_val_27007 === (17))){
var inst_26992 = (state_27006[(2)]);
var state_27006__$1 = state_27006;
if(cljs.core.truth_(inst_26992)){
var statearr_27017_27081 = state_27006__$1;
(statearr_27017_27081[(1)] = (19));

} else {
var statearr_27018_27082 = state_27006__$1;
(statearr_27018_27082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (3))){
var inst_27004 = (state_27006[(2)]);
var state_27006__$1 = state_27006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27006__$1,inst_27004);
} else {
if((state_val_27007 === (12))){
var inst_26981 = (state_27006[(10)]);
var state_27006__$1 = state_27006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27006__$1,(14),inst_26981);
} else {
if((state_val_27007 === (2))){
var state_27006__$1 = state_27006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27006__$1,(4),results);
} else {
if((state_val_27007 === (19))){
var state_27006__$1 = state_27006;
var statearr_27019_27083 = state_27006__$1;
(statearr_27019_27083[(2)] = null);

(statearr_27019_27083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (11))){
var inst_26981 = (state_27006[(2)]);
var state_27006__$1 = (function (){var statearr_27020 = state_27006;
(statearr_27020[(10)] = inst_26981);

return statearr_27020;
})();
var statearr_27021_27084 = state_27006__$1;
(statearr_27021_27084[(2)] = null);

(statearr_27021_27084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (9))){
var state_27006__$1 = state_27006;
var statearr_27022_27085 = state_27006__$1;
(statearr_27022_27085[(2)] = null);

(statearr_27022_27085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (5))){
var state_27006__$1 = state_27006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27023_27086 = state_27006__$1;
(statearr_27023_27086[(1)] = (8));

} else {
var statearr_27024_27087 = state_27006__$1;
(statearr_27024_27087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (14))){
var inst_26984 = (state_27006[(8)]);
var inst_26986 = (state_27006[(11)]);
var inst_26984__$1 = (state_27006[(2)]);
var inst_26985 = (inst_26984__$1 == null);
var inst_26986__$1 = cljs.core.not.call(null,inst_26985);
var state_27006__$1 = (function (){var statearr_27025 = state_27006;
(statearr_27025[(8)] = inst_26984__$1);

(statearr_27025[(11)] = inst_26986__$1);

return statearr_27025;
})();
if(inst_26986__$1){
var statearr_27026_27088 = state_27006__$1;
(statearr_27026_27088[(1)] = (15));

} else {
var statearr_27027_27089 = state_27006__$1;
(statearr_27027_27089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (16))){
var inst_26986 = (state_27006[(11)]);
var state_27006__$1 = state_27006;
var statearr_27028_27090 = state_27006__$1;
(statearr_27028_27090[(2)] = inst_26986);

(statearr_27028_27090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (10))){
var inst_26978 = (state_27006[(2)]);
var state_27006__$1 = state_27006;
var statearr_27029_27091 = state_27006__$1;
(statearr_27029_27091[(2)] = inst_26978);

(statearr_27029_27091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (18))){
var inst_26989 = (state_27006[(2)]);
var state_27006__$1 = state_27006;
var statearr_27030_27092 = state_27006__$1;
(statearr_27030_27092[(2)] = inst_26989);

(statearr_27030_27092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27007 === (8))){
var inst_26975 = cljs.core.async.close_BANG_.call(null,to);
var state_27006__$1 = state_27006;
var statearr_27031_27093 = state_27006__$1;
(statearr_27031_27093[(2)] = inst_26975);

(statearr_27031_27093[(1)] = (10));


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
});})(c__22032__auto__,jobs,results,process,async))
;
return ((function (switch__21970__auto__,c__22032__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0 = (function (){
var statearr_27035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__);

(statearr_27035[(1)] = (1));

return statearr_27035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1 = (function (state_27006){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_27006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e27036){if((e27036 instanceof Object)){
var ex__21974__auto__ = e27036;
var statearr_27037_27094 = state_27006;
(statearr_27037_27094[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27095 = state_27006;
state_27006 = G__27095;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__ = function(state_27006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1.call(this,state_27006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21971__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__,jobs,results,process,async))
})();
var state__22034__auto__ = (function (){var statearr_27038 = f__22033__auto__.call(null);
(statearr_27038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_27038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__,jobs,results,process,async))
);

return c__22032__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__27097 = arguments.length;
switch (G__27097) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__27100 = arguments.length;
switch (G__27100) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__27103 = arguments.length;
switch (G__27103) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22032__auto___27155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___27155,tc,fc){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___27155,tc,fc){
return (function (state_27129){
var state_val_27130 = (state_27129[(1)]);
if((state_val_27130 === (7))){
var inst_27125 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
var statearr_27131_27156 = state_27129__$1;
(statearr_27131_27156[(2)] = inst_27125);

(statearr_27131_27156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (1))){
var state_27129__$1 = state_27129;
var statearr_27132_27157 = state_27129__$1;
(statearr_27132_27157[(2)] = null);

(statearr_27132_27157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (4))){
var inst_27106 = (state_27129[(7)]);
var inst_27106__$1 = (state_27129[(2)]);
var inst_27107 = (inst_27106__$1 == null);
var state_27129__$1 = (function (){var statearr_27133 = state_27129;
(statearr_27133[(7)] = inst_27106__$1);

return statearr_27133;
})();
if(cljs.core.truth_(inst_27107)){
var statearr_27134_27158 = state_27129__$1;
(statearr_27134_27158[(1)] = (5));

} else {
var statearr_27135_27159 = state_27129__$1;
(statearr_27135_27159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (13))){
var state_27129__$1 = state_27129;
var statearr_27136_27160 = state_27129__$1;
(statearr_27136_27160[(2)] = null);

(statearr_27136_27160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (6))){
var inst_27106 = (state_27129[(7)]);
var inst_27112 = p.call(null,inst_27106);
var state_27129__$1 = state_27129;
if(cljs.core.truth_(inst_27112)){
var statearr_27137_27161 = state_27129__$1;
(statearr_27137_27161[(1)] = (9));

} else {
var statearr_27138_27162 = state_27129__$1;
(statearr_27138_27162[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (3))){
var inst_27127 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27129__$1,inst_27127);
} else {
if((state_val_27130 === (12))){
var state_27129__$1 = state_27129;
var statearr_27139_27163 = state_27129__$1;
(statearr_27139_27163[(2)] = null);

(statearr_27139_27163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (2))){
var state_27129__$1 = state_27129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27129__$1,(4),ch);
} else {
if((state_val_27130 === (11))){
var inst_27106 = (state_27129[(7)]);
var inst_27116 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27129__$1,(8),inst_27116,inst_27106);
} else {
if((state_val_27130 === (9))){
var state_27129__$1 = state_27129;
var statearr_27140_27164 = state_27129__$1;
(statearr_27140_27164[(2)] = tc);

(statearr_27140_27164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (5))){
var inst_27109 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27110 = cljs.core.async.close_BANG_.call(null,fc);
var state_27129__$1 = (function (){var statearr_27141 = state_27129;
(statearr_27141[(8)] = inst_27109);

return statearr_27141;
})();
var statearr_27142_27165 = state_27129__$1;
(statearr_27142_27165[(2)] = inst_27110);

(statearr_27142_27165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (14))){
var inst_27123 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
var statearr_27143_27166 = state_27129__$1;
(statearr_27143_27166[(2)] = inst_27123);

(statearr_27143_27166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (10))){
var state_27129__$1 = state_27129;
var statearr_27144_27167 = state_27129__$1;
(statearr_27144_27167[(2)] = fc);

(statearr_27144_27167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27130 === (8))){
var inst_27118 = (state_27129[(2)]);
var state_27129__$1 = state_27129;
if(cljs.core.truth_(inst_27118)){
var statearr_27145_27168 = state_27129__$1;
(statearr_27145_27168[(1)] = (12));

} else {
var statearr_27146_27169 = state_27129__$1;
(statearr_27146_27169[(1)] = (13));

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
});})(c__22032__auto___27155,tc,fc))
;
return ((function (switch__21970__auto__,c__22032__auto___27155,tc,fc){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_27150 = [null,null,null,null,null,null,null,null,null];
(statearr_27150[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_27150[(1)] = (1));

return statearr_27150;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_27129){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_27129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e27151){if((e27151 instanceof Object)){
var ex__21974__auto__ = e27151;
var statearr_27152_27170 = state_27129;
(statearr_27152_27170[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27171 = state_27129;
state_27129 = G__27171;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_27129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_27129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___27155,tc,fc))
})();
var state__22034__auto__ = (function (){var statearr_27153 = f__22033__auto__.call(null);
(statearr_27153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___27155);

return statearr_27153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___27155,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__){
return (function (state_27218){
var state_val_27219 = (state_27218[(1)]);
if((state_val_27219 === (7))){
var inst_27214 = (state_27218[(2)]);
var state_27218__$1 = state_27218;
var statearr_27220_27236 = state_27218__$1;
(statearr_27220_27236[(2)] = inst_27214);

(statearr_27220_27236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27219 === (6))){
var inst_27207 = (state_27218[(7)]);
var inst_27204 = (state_27218[(8)]);
var inst_27211 = f.call(null,inst_27204,inst_27207);
var inst_27204__$1 = inst_27211;
var state_27218__$1 = (function (){var statearr_27221 = state_27218;
(statearr_27221[(8)] = inst_27204__$1);

return statearr_27221;
})();
var statearr_27222_27237 = state_27218__$1;
(statearr_27222_27237[(2)] = null);

(statearr_27222_27237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27219 === (5))){
var inst_27204 = (state_27218[(8)]);
var state_27218__$1 = state_27218;
var statearr_27223_27238 = state_27218__$1;
(statearr_27223_27238[(2)] = inst_27204);

(statearr_27223_27238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27219 === (4))){
var inst_27207 = (state_27218[(7)]);
var inst_27207__$1 = (state_27218[(2)]);
var inst_27208 = (inst_27207__$1 == null);
var state_27218__$1 = (function (){var statearr_27224 = state_27218;
(statearr_27224[(7)] = inst_27207__$1);

return statearr_27224;
})();
if(cljs.core.truth_(inst_27208)){
var statearr_27225_27239 = state_27218__$1;
(statearr_27225_27239[(1)] = (5));

} else {
var statearr_27226_27240 = state_27218__$1;
(statearr_27226_27240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27219 === (3))){
var inst_27216 = (state_27218[(2)]);
var state_27218__$1 = state_27218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27218__$1,inst_27216);
} else {
if((state_val_27219 === (2))){
var state_27218__$1 = state_27218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27218__$1,(4),ch);
} else {
if((state_val_27219 === (1))){
var inst_27204 = init;
var state_27218__$1 = (function (){var statearr_27227 = state_27218;
(statearr_27227[(8)] = inst_27204);

return statearr_27227;
})();
var statearr_27228_27241 = state_27218__$1;
(statearr_27228_27241[(2)] = null);

(statearr_27228_27241[(1)] = (2));


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
});})(c__22032__auto__))
;
return ((function (switch__21970__auto__,c__22032__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21971__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21971__auto____0 = (function (){
var statearr_27232 = [null,null,null,null,null,null,null,null,null];
(statearr_27232[(0)] = cljs$core$async$reduce_$_state_machine__21971__auto__);

(statearr_27232[(1)] = (1));

return statearr_27232;
});
var cljs$core$async$reduce_$_state_machine__21971__auto____1 = (function (state_27218){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_27218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e27233){if((e27233 instanceof Object)){
var ex__21974__auto__ = e27233;
var statearr_27234_27242 = state_27218;
(statearr_27234_27242[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27243 = state_27218;
state_27218 = G__27243;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21971__auto__ = function(state_27218){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21971__auto____1.call(this,state_27218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21971__auto____0;
cljs$core$async$reduce_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21971__auto____1;
return cljs$core$async$reduce_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__))
})();
var state__22034__auto__ = (function (){var statearr_27235 = f__22033__auto__.call(null);
(statearr_27235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_27235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__))
);

return c__22032__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__27245 = arguments.length;
switch (G__27245) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__){
return (function (state_27270){
var state_val_27271 = (state_27270[(1)]);
if((state_val_27271 === (7))){
var inst_27252 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27272_27296 = state_27270__$1;
(statearr_27272_27296[(2)] = inst_27252);

(statearr_27272_27296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (1))){
var inst_27246 = cljs.core.seq.call(null,coll);
var inst_27247 = inst_27246;
var state_27270__$1 = (function (){var statearr_27273 = state_27270;
(statearr_27273[(7)] = inst_27247);

return statearr_27273;
})();
var statearr_27274_27297 = state_27270__$1;
(statearr_27274_27297[(2)] = null);

(statearr_27274_27297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (4))){
var inst_27247 = (state_27270[(7)]);
var inst_27250 = cljs.core.first.call(null,inst_27247);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27270__$1,(7),ch,inst_27250);
} else {
if((state_val_27271 === (13))){
var inst_27264 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27275_27298 = state_27270__$1;
(statearr_27275_27298[(2)] = inst_27264);

(statearr_27275_27298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (6))){
var inst_27255 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
if(cljs.core.truth_(inst_27255)){
var statearr_27276_27299 = state_27270__$1;
(statearr_27276_27299[(1)] = (8));

} else {
var statearr_27277_27300 = state_27270__$1;
(statearr_27277_27300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (3))){
var inst_27268 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27270__$1,inst_27268);
} else {
if((state_val_27271 === (12))){
var state_27270__$1 = state_27270;
var statearr_27278_27301 = state_27270__$1;
(statearr_27278_27301[(2)] = null);

(statearr_27278_27301[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (2))){
var inst_27247 = (state_27270[(7)]);
var state_27270__$1 = state_27270;
if(cljs.core.truth_(inst_27247)){
var statearr_27279_27302 = state_27270__$1;
(statearr_27279_27302[(1)] = (4));

} else {
var statearr_27280_27303 = state_27270__$1;
(statearr_27280_27303[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (11))){
var inst_27261 = cljs.core.async.close_BANG_.call(null,ch);
var state_27270__$1 = state_27270;
var statearr_27281_27304 = state_27270__$1;
(statearr_27281_27304[(2)] = inst_27261);

(statearr_27281_27304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (9))){
var state_27270__$1 = state_27270;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27282_27305 = state_27270__$1;
(statearr_27282_27305[(1)] = (11));

} else {
var statearr_27283_27306 = state_27270__$1;
(statearr_27283_27306[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (5))){
var inst_27247 = (state_27270[(7)]);
var state_27270__$1 = state_27270;
var statearr_27284_27307 = state_27270__$1;
(statearr_27284_27307[(2)] = inst_27247);

(statearr_27284_27307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (10))){
var inst_27266 = (state_27270[(2)]);
var state_27270__$1 = state_27270;
var statearr_27285_27308 = state_27270__$1;
(statearr_27285_27308[(2)] = inst_27266);

(statearr_27285_27308[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27271 === (8))){
var inst_27247 = (state_27270[(7)]);
var inst_27257 = cljs.core.next.call(null,inst_27247);
var inst_27247__$1 = inst_27257;
var state_27270__$1 = (function (){var statearr_27286 = state_27270;
(statearr_27286[(7)] = inst_27247__$1);

return statearr_27286;
})();
var statearr_27287_27309 = state_27270__$1;
(statearr_27287_27309[(2)] = null);

(statearr_27287_27309[(1)] = (2));


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
});})(c__22032__auto__))
;
return ((function (switch__21970__auto__,c__22032__auto__){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_27291 = [null,null,null,null,null,null,null,null];
(statearr_27291[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_27291[(1)] = (1));

return statearr_27291;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_27270){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_27270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e27292){if((e27292 instanceof Object)){
var ex__21974__auto__ = e27292;
var statearr_27293_27310 = state_27270;
(statearr_27293_27310[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27311 = state_27270;
state_27270 = G__27311;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_27270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_27270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__))
})();
var state__22034__auto__ = (function (){var statearr_27294 = f__22033__auto__.call(null);
(statearr_27294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_27294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__))
);

return c__22032__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj27313 = {};
return obj27313;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18109__auto__ = _;
if(and__18109__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18757__auto__ = (((_ == null))?null:_);
return (function (){var or__18121__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj27315 = {};
return obj27315;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t27537 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27537 = (function (cs,ch,mult,meta27538){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27538 = meta27538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27537.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t27537.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t27537.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t27537.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t27537.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t27537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27539){
var self__ = this;
var _27539__$1 = this;
return self__.meta27538;
});})(cs))
;

cljs.core.async.t27537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27539,meta27538__$1){
var self__ = this;
var _27539__$1 = this;
return (new cljs.core.async.t27537(self__.cs,self__.ch,self__.mult,meta27538__$1));
});})(cs))
;

cljs.core.async.t27537.cljs$lang$type = true;

cljs.core.async.t27537.cljs$lang$ctorStr = "cljs.core.async/t27537";

cljs.core.async.t27537.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27537");
});})(cs))
;

cljs.core.async.__GT_t27537 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t27537(cs__$1,ch__$1,mult__$1,meta27538){
return (new cljs.core.async.t27537(cs__$1,ch__$1,mult__$1,meta27538));
});})(cs))
;

}

return (new cljs.core.async.t27537(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22032__auto___27758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___27758,cs,m,dchan,dctr,done){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___27758,cs,m,dchan,dctr,done){
return (function (state_27670){
var state_val_27671 = (state_27670[(1)]);
if((state_val_27671 === (7))){
var inst_27666 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27672_27759 = state_27670__$1;
(statearr_27672_27759[(2)] = inst_27666);

(statearr_27672_27759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (20))){
var inst_27571 = (state_27670[(7)]);
var inst_27581 = cljs.core.first.call(null,inst_27571);
var inst_27582 = cljs.core.nth.call(null,inst_27581,(0),null);
var inst_27583 = cljs.core.nth.call(null,inst_27581,(1),null);
var state_27670__$1 = (function (){var statearr_27673 = state_27670;
(statearr_27673[(8)] = inst_27582);

return statearr_27673;
})();
if(cljs.core.truth_(inst_27583)){
var statearr_27674_27760 = state_27670__$1;
(statearr_27674_27760[(1)] = (22));

} else {
var statearr_27675_27761 = state_27670__$1;
(statearr_27675_27761[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (27))){
var inst_27542 = (state_27670[(9)]);
var inst_27613 = (state_27670[(10)]);
var inst_27618 = (state_27670[(11)]);
var inst_27611 = (state_27670[(12)]);
var inst_27618__$1 = cljs.core._nth.call(null,inst_27611,inst_27613);
var inst_27619 = cljs.core.async.put_BANG_.call(null,inst_27618__$1,inst_27542,done);
var state_27670__$1 = (function (){var statearr_27676 = state_27670;
(statearr_27676[(11)] = inst_27618__$1);

return statearr_27676;
})();
if(cljs.core.truth_(inst_27619)){
var statearr_27677_27762 = state_27670__$1;
(statearr_27677_27762[(1)] = (30));

} else {
var statearr_27678_27763 = state_27670__$1;
(statearr_27678_27763[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (1))){
var state_27670__$1 = state_27670;
var statearr_27679_27764 = state_27670__$1;
(statearr_27679_27764[(2)] = null);

(statearr_27679_27764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (24))){
var inst_27571 = (state_27670[(7)]);
var inst_27588 = (state_27670[(2)]);
var inst_27589 = cljs.core.next.call(null,inst_27571);
var inst_27551 = inst_27589;
var inst_27552 = null;
var inst_27553 = (0);
var inst_27554 = (0);
var state_27670__$1 = (function (){var statearr_27680 = state_27670;
(statearr_27680[(13)] = inst_27588);

(statearr_27680[(14)] = inst_27551);

(statearr_27680[(15)] = inst_27552);

(statearr_27680[(16)] = inst_27554);

(statearr_27680[(17)] = inst_27553);

return statearr_27680;
})();
var statearr_27681_27765 = state_27670__$1;
(statearr_27681_27765[(2)] = null);

(statearr_27681_27765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (39))){
var state_27670__$1 = state_27670;
var statearr_27685_27766 = state_27670__$1;
(statearr_27685_27766[(2)] = null);

(statearr_27685_27766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (4))){
var inst_27542 = (state_27670[(9)]);
var inst_27542__$1 = (state_27670[(2)]);
var inst_27543 = (inst_27542__$1 == null);
var state_27670__$1 = (function (){var statearr_27686 = state_27670;
(statearr_27686[(9)] = inst_27542__$1);

return statearr_27686;
})();
if(cljs.core.truth_(inst_27543)){
var statearr_27687_27767 = state_27670__$1;
(statearr_27687_27767[(1)] = (5));

} else {
var statearr_27688_27768 = state_27670__$1;
(statearr_27688_27768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (15))){
var inst_27551 = (state_27670[(14)]);
var inst_27552 = (state_27670[(15)]);
var inst_27554 = (state_27670[(16)]);
var inst_27553 = (state_27670[(17)]);
var inst_27567 = (state_27670[(2)]);
var inst_27568 = (inst_27554 + (1));
var tmp27682 = inst_27551;
var tmp27683 = inst_27552;
var tmp27684 = inst_27553;
var inst_27551__$1 = tmp27682;
var inst_27552__$1 = tmp27683;
var inst_27553__$1 = tmp27684;
var inst_27554__$1 = inst_27568;
var state_27670__$1 = (function (){var statearr_27689 = state_27670;
(statearr_27689[(14)] = inst_27551__$1);

(statearr_27689[(15)] = inst_27552__$1);

(statearr_27689[(18)] = inst_27567);

(statearr_27689[(16)] = inst_27554__$1);

(statearr_27689[(17)] = inst_27553__$1);

return statearr_27689;
})();
var statearr_27690_27769 = state_27670__$1;
(statearr_27690_27769[(2)] = null);

(statearr_27690_27769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (21))){
var inst_27592 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27694_27770 = state_27670__$1;
(statearr_27694_27770[(2)] = inst_27592);

(statearr_27694_27770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (31))){
var inst_27618 = (state_27670[(11)]);
var inst_27622 = done.call(null,null);
var inst_27623 = cljs.core.async.untap_STAR_.call(null,m,inst_27618);
var state_27670__$1 = (function (){var statearr_27695 = state_27670;
(statearr_27695[(19)] = inst_27622);

return statearr_27695;
})();
var statearr_27696_27771 = state_27670__$1;
(statearr_27696_27771[(2)] = inst_27623);

(statearr_27696_27771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (32))){
var inst_27612 = (state_27670[(20)]);
var inst_27610 = (state_27670[(21)]);
var inst_27613 = (state_27670[(10)]);
var inst_27611 = (state_27670[(12)]);
var inst_27625 = (state_27670[(2)]);
var inst_27626 = (inst_27613 + (1));
var tmp27691 = inst_27612;
var tmp27692 = inst_27610;
var tmp27693 = inst_27611;
var inst_27610__$1 = tmp27692;
var inst_27611__$1 = tmp27693;
var inst_27612__$1 = tmp27691;
var inst_27613__$1 = inst_27626;
var state_27670__$1 = (function (){var statearr_27697 = state_27670;
(statearr_27697[(20)] = inst_27612__$1);

(statearr_27697[(21)] = inst_27610__$1);

(statearr_27697[(10)] = inst_27613__$1);

(statearr_27697[(22)] = inst_27625);

(statearr_27697[(12)] = inst_27611__$1);

return statearr_27697;
})();
var statearr_27698_27772 = state_27670__$1;
(statearr_27698_27772[(2)] = null);

(statearr_27698_27772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (40))){
var inst_27638 = (state_27670[(23)]);
var inst_27642 = done.call(null,null);
var inst_27643 = cljs.core.async.untap_STAR_.call(null,m,inst_27638);
var state_27670__$1 = (function (){var statearr_27699 = state_27670;
(statearr_27699[(24)] = inst_27642);

return statearr_27699;
})();
var statearr_27700_27773 = state_27670__$1;
(statearr_27700_27773[(2)] = inst_27643);

(statearr_27700_27773[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (33))){
var inst_27629 = (state_27670[(25)]);
var inst_27631 = cljs.core.chunked_seq_QMARK_.call(null,inst_27629);
var state_27670__$1 = state_27670;
if(inst_27631){
var statearr_27701_27774 = state_27670__$1;
(statearr_27701_27774[(1)] = (36));

} else {
var statearr_27702_27775 = state_27670__$1;
(statearr_27702_27775[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (13))){
var inst_27561 = (state_27670[(26)]);
var inst_27564 = cljs.core.async.close_BANG_.call(null,inst_27561);
var state_27670__$1 = state_27670;
var statearr_27703_27776 = state_27670__$1;
(statearr_27703_27776[(2)] = inst_27564);

(statearr_27703_27776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (22))){
var inst_27582 = (state_27670[(8)]);
var inst_27585 = cljs.core.async.close_BANG_.call(null,inst_27582);
var state_27670__$1 = state_27670;
var statearr_27704_27777 = state_27670__$1;
(statearr_27704_27777[(2)] = inst_27585);

(statearr_27704_27777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (36))){
var inst_27629 = (state_27670[(25)]);
var inst_27633 = cljs.core.chunk_first.call(null,inst_27629);
var inst_27634 = cljs.core.chunk_rest.call(null,inst_27629);
var inst_27635 = cljs.core.count.call(null,inst_27633);
var inst_27610 = inst_27634;
var inst_27611 = inst_27633;
var inst_27612 = inst_27635;
var inst_27613 = (0);
var state_27670__$1 = (function (){var statearr_27705 = state_27670;
(statearr_27705[(20)] = inst_27612);

(statearr_27705[(21)] = inst_27610);

(statearr_27705[(10)] = inst_27613);

(statearr_27705[(12)] = inst_27611);

return statearr_27705;
})();
var statearr_27706_27778 = state_27670__$1;
(statearr_27706_27778[(2)] = null);

(statearr_27706_27778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (41))){
var inst_27629 = (state_27670[(25)]);
var inst_27645 = (state_27670[(2)]);
var inst_27646 = cljs.core.next.call(null,inst_27629);
var inst_27610 = inst_27646;
var inst_27611 = null;
var inst_27612 = (0);
var inst_27613 = (0);
var state_27670__$1 = (function (){var statearr_27707 = state_27670;
(statearr_27707[(20)] = inst_27612);

(statearr_27707[(21)] = inst_27610);

(statearr_27707[(10)] = inst_27613);

(statearr_27707[(12)] = inst_27611);

(statearr_27707[(27)] = inst_27645);

return statearr_27707;
})();
var statearr_27708_27779 = state_27670__$1;
(statearr_27708_27779[(2)] = null);

(statearr_27708_27779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (43))){
var state_27670__$1 = state_27670;
var statearr_27709_27780 = state_27670__$1;
(statearr_27709_27780[(2)] = null);

(statearr_27709_27780[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (29))){
var inst_27654 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27710_27781 = state_27670__$1;
(statearr_27710_27781[(2)] = inst_27654);

(statearr_27710_27781[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (44))){
var inst_27663 = (state_27670[(2)]);
var state_27670__$1 = (function (){var statearr_27711 = state_27670;
(statearr_27711[(28)] = inst_27663);

return statearr_27711;
})();
var statearr_27712_27782 = state_27670__$1;
(statearr_27712_27782[(2)] = null);

(statearr_27712_27782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (6))){
var inst_27602 = (state_27670[(29)]);
var inst_27601 = cljs.core.deref.call(null,cs);
var inst_27602__$1 = cljs.core.keys.call(null,inst_27601);
var inst_27603 = cljs.core.count.call(null,inst_27602__$1);
var inst_27604 = cljs.core.reset_BANG_.call(null,dctr,inst_27603);
var inst_27609 = cljs.core.seq.call(null,inst_27602__$1);
var inst_27610 = inst_27609;
var inst_27611 = null;
var inst_27612 = (0);
var inst_27613 = (0);
var state_27670__$1 = (function (){var statearr_27713 = state_27670;
(statearr_27713[(20)] = inst_27612);

(statearr_27713[(21)] = inst_27610);

(statearr_27713[(10)] = inst_27613);

(statearr_27713[(30)] = inst_27604);

(statearr_27713[(29)] = inst_27602__$1);

(statearr_27713[(12)] = inst_27611);

return statearr_27713;
})();
var statearr_27714_27783 = state_27670__$1;
(statearr_27714_27783[(2)] = null);

(statearr_27714_27783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (28))){
var inst_27610 = (state_27670[(21)]);
var inst_27629 = (state_27670[(25)]);
var inst_27629__$1 = cljs.core.seq.call(null,inst_27610);
var state_27670__$1 = (function (){var statearr_27715 = state_27670;
(statearr_27715[(25)] = inst_27629__$1);

return statearr_27715;
})();
if(inst_27629__$1){
var statearr_27716_27784 = state_27670__$1;
(statearr_27716_27784[(1)] = (33));

} else {
var statearr_27717_27785 = state_27670__$1;
(statearr_27717_27785[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (25))){
var inst_27612 = (state_27670[(20)]);
var inst_27613 = (state_27670[(10)]);
var inst_27615 = (inst_27613 < inst_27612);
var inst_27616 = inst_27615;
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27616)){
var statearr_27718_27786 = state_27670__$1;
(statearr_27718_27786[(1)] = (27));

} else {
var statearr_27719_27787 = state_27670__$1;
(statearr_27719_27787[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (34))){
var state_27670__$1 = state_27670;
var statearr_27720_27788 = state_27670__$1;
(statearr_27720_27788[(2)] = null);

(statearr_27720_27788[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (17))){
var state_27670__$1 = state_27670;
var statearr_27721_27789 = state_27670__$1;
(statearr_27721_27789[(2)] = null);

(statearr_27721_27789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (3))){
var inst_27668 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27670__$1,inst_27668);
} else {
if((state_val_27671 === (12))){
var inst_27597 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27722_27790 = state_27670__$1;
(statearr_27722_27790[(2)] = inst_27597);

(statearr_27722_27790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (2))){
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(4),ch);
} else {
if((state_val_27671 === (23))){
var state_27670__$1 = state_27670;
var statearr_27723_27791 = state_27670__$1;
(statearr_27723_27791[(2)] = null);

(statearr_27723_27791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (35))){
var inst_27652 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27724_27792 = state_27670__$1;
(statearr_27724_27792[(2)] = inst_27652);

(statearr_27724_27792[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (19))){
var inst_27571 = (state_27670[(7)]);
var inst_27575 = cljs.core.chunk_first.call(null,inst_27571);
var inst_27576 = cljs.core.chunk_rest.call(null,inst_27571);
var inst_27577 = cljs.core.count.call(null,inst_27575);
var inst_27551 = inst_27576;
var inst_27552 = inst_27575;
var inst_27553 = inst_27577;
var inst_27554 = (0);
var state_27670__$1 = (function (){var statearr_27725 = state_27670;
(statearr_27725[(14)] = inst_27551);

(statearr_27725[(15)] = inst_27552);

(statearr_27725[(16)] = inst_27554);

(statearr_27725[(17)] = inst_27553);

return statearr_27725;
})();
var statearr_27726_27793 = state_27670__$1;
(statearr_27726_27793[(2)] = null);

(statearr_27726_27793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (11))){
var inst_27551 = (state_27670[(14)]);
var inst_27571 = (state_27670[(7)]);
var inst_27571__$1 = cljs.core.seq.call(null,inst_27551);
var state_27670__$1 = (function (){var statearr_27727 = state_27670;
(statearr_27727[(7)] = inst_27571__$1);

return statearr_27727;
})();
if(inst_27571__$1){
var statearr_27728_27794 = state_27670__$1;
(statearr_27728_27794[(1)] = (16));

} else {
var statearr_27729_27795 = state_27670__$1;
(statearr_27729_27795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (9))){
var inst_27599 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27730_27796 = state_27670__$1;
(statearr_27730_27796[(2)] = inst_27599);

(statearr_27730_27796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (5))){
var inst_27549 = cljs.core.deref.call(null,cs);
var inst_27550 = cljs.core.seq.call(null,inst_27549);
var inst_27551 = inst_27550;
var inst_27552 = null;
var inst_27553 = (0);
var inst_27554 = (0);
var state_27670__$1 = (function (){var statearr_27731 = state_27670;
(statearr_27731[(14)] = inst_27551);

(statearr_27731[(15)] = inst_27552);

(statearr_27731[(16)] = inst_27554);

(statearr_27731[(17)] = inst_27553);

return statearr_27731;
})();
var statearr_27732_27797 = state_27670__$1;
(statearr_27732_27797[(2)] = null);

(statearr_27732_27797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (14))){
var state_27670__$1 = state_27670;
var statearr_27733_27798 = state_27670__$1;
(statearr_27733_27798[(2)] = null);

(statearr_27733_27798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (45))){
var inst_27660 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27734_27799 = state_27670__$1;
(statearr_27734_27799[(2)] = inst_27660);

(statearr_27734_27799[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (26))){
var inst_27602 = (state_27670[(29)]);
var inst_27656 = (state_27670[(2)]);
var inst_27657 = cljs.core.seq.call(null,inst_27602);
var state_27670__$1 = (function (){var statearr_27735 = state_27670;
(statearr_27735[(31)] = inst_27656);

return statearr_27735;
})();
if(inst_27657){
var statearr_27736_27800 = state_27670__$1;
(statearr_27736_27800[(1)] = (42));

} else {
var statearr_27737_27801 = state_27670__$1;
(statearr_27737_27801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (16))){
var inst_27571 = (state_27670[(7)]);
var inst_27573 = cljs.core.chunked_seq_QMARK_.call(null,inst_27571);
var state_27670__$1 = state_27670;
if(inst_27573){
var statearr_27738_27802 = state_27670__$1;
(statearr_27738_27802[(1)] = (19));

} else {
var statearr_27739_27803 = state_27670__$1;
(statearr_27739_27803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (38))){
var inst_27649 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27740_27804 = state_27670__$1;
(statearr_27740_27804[(2)] = inst_27649);

(statearr_27740_27804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (30))){
var state_27670__$1 = state_27670;
var statearr_27741_27805 = state_27670__$1;
(statearr_27741_27805[(2)] = null);

(statearr_27741_27805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (10))){
var inst_27552 = (state_27670[(15)]);
var inst_27554 = (state_27670[(16)]);
var inst_27560 = cljs.core._nth.call(null,inst_27552,inst_27554);
var inst_27561 = cljs.core.nth.call(null,inst_27560,(0),null);
var inst_27562 = cljs.core.nth.call(null,inst_27560,(1),null);
var state_27670__$1 = (function (){var statearr_27742 = state_27670;
(statearr_27742[(26)] = inst_27561);

return statearr_27742;
})();
if(cljs.core.truth_(inst_27562)){
var statearr_27743_27806 = state_27670__$1;
(statearr_27743_27806[(1)] = (13));

} else {
var statearr_27744_27807 = state_27670__$1;
(statearr_27744_27807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (18))){
var inst_27595 = (state_27670[(2)]);
var state_27670__$1 = state_27670;
var statearr_27745_27808 = state_27670__$1;
(statearr_27745_27808[(2)] = inst_27595);

(statearr_27745_27808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (42))){
var state_27670__$1 = state_27670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27670__$1,(45),dchan);
} else {
if((state_val_27671 === (37))){
var inst_27542 = (state_27670[(9)]);
var inst_27638 = (state_27670[(23)]);
var inst_27629 = (state_27670[(25)]);
var inst_27638__$1 = cljs.core.first.call(null,inst_27629);
var inst_27639 = cljs.core.async.put_BANG_.call(null,inst_27638__$1,inst_27542,done);
var state_27670__$1 = (function (){var statearr_27746 = state_27670;
(statearr_27746[(23)] = inst_27638__$1);

return statearr_27746;
})();
if(cljs.core.truth_(inst_27639)){
var statearr_27747_27809 = state_27670__$1;
(statearr_27747_27809[(1)] = (39));

} else {
var statearr_27748_27810 = state_27670__$1;
(statearr_27748_27810[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27671 === (8))){
var inst_27554 = (state_27670[(16)]);
var inst_27553 = (state_27670[(17)]);
var inst_27556 = (inst_27554 < inst_27553);
var inst_27557 = inst_27556;
var state_27670__$1 = state_27670;
if(cljs.core.truth_(inst_27557)){
var statearr_27749_27811 = state_27670__$1;
(statearr_27749_27811[(1)] = (10));

} else {
var statearr_27750_27812 = state_27670__$1;
(statearr_27750_27812[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__22032__auto___27758,cs,m,dchan,dctr,done))
;
return ((function (switch__21970__auto__,c__22032__auto___27758,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21971__auto__ = null;
var cljs$core$async$mult_$_state_machine__21971__auto____0 = (function (){
var statearr_27754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27754[(0)] = cljs$core$async$mult_$_state_machine__21971__auto__);

(statearr_27754[(1)] = (1));

return statearr_27754;
});
var cljs$core$async$mult_$_state_machine__21971__auto____1 = (function (state_27670){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_27670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e27755){if((e27755 instanceof Object)){
var ex__21974__auto__ = e27755;
var statearr_27756_27813 = state_27670;
(statearr_27756_27813[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27814 = state_27670;
state_27670 = G__27814;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21971__auto__ = function(state_27670){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21971__auto____1.call(this,state_27670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21971__auto____0;
cljs$core$async$mult_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21971__auto____1;
return cljs$core$async$mult_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___27758,cs,m,dchan,dctr,done))
})();
var state__22034__auto__ = (function (){var statearr_27757 = f__22033__auto__.call(null);
(statearr_27757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___27758);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___27758,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__27816 = arguments.length;
switch (G__27816) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj27819 = {};
return obj27819;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18109__auto__ = m;
if(and__18109__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18757__auto__ = (((m == null))?null:m);
return (function (){var or__18121__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19161__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19161__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27824){
var map__27825 = p__27824;
var map__27825__$1 = ((cljs.core.seq_QMARK_.call(null,map__27825))?cljs.core.apply.call(null,cljs.core.hash_map,map__27825):map__27825);
var opts = map__27825__$1;
var statearr_27826_27829 = state;
(statearr_27826_27829[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__27825,map__27825__$1,opts){
return (function (val){
var statearr_27827_27830 = state;
(statearr_27827_27830[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27825,map__27825__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_27828_27831 = state;
(statearr_27828_27831[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27820){
var G__27821 = cljs.core.first.call(null,seq27820);
var seq27820__$1 = cljs.core.next.call(null,seq27820);
var G__27822 = cljs.core.first.call(null,seq27820__$1);
var seq27820__$2 = cljs.core.next.call(null,seq27820__$1);
var G__27823 = cljs.core.first.call(null,seq27820__$2);
var seq27820__$3 = cljs.core.next.call(null,seq27820__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27821,G__27822,G__27823,seq27820__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t27951 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27951 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27952){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27952 = meta27952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27951.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27951.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27951.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27951.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27951.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27951.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27951.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27953){
var self__ = this;
var _27953__$1 = this;
return self__.meta27952;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27953,meta27952__$1){
var self__ = this;
var _27953__$1 = this;
return (new cljs.core.async.t27951(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27952__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27951.cljs$lang$type = true;

cljs.core.async.t27951.cljs$lang$ctorStr = "cljs.core.async/t27951";

cljs.core.async.t27951.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t27951");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27951 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27951(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27952){
return (new cljs.core.async.t27951(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27952));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27951(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22032__auto___28070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___28070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___28070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28023){
var state_val_28024 = (state_28023[(1)]);
if((state_val_28024 === (7))){
var inst_27967 = (state_28023[(7)]);
var inst_27972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27967);
var state_28023__$1 = state_28023;
var statearr_28025_28071 = state_28023__$1;
(statearr_28025_28071[(2)] = inst_27972);

(statearr_28025_28071[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (20))){
var inst_27982 = (state_28023[(8)]);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28023__$1,(23),out,inst_27982);
} else {
if((state_val_28024 === (1))){
var inst_27957 = (state_28023[(9)]);
var inst_27957__$1 = calc_state.call(null);
var inst_27958 = cljs.core.seq_QMARK_.call(null,inst_27957__$1);
var state_28023__$1 = (function (){var statearr_28026 = state_28023;
(statearr_28026[(9)] = inst_27957__$1);

return statearr_28026;
})();
if(inst_27958){
var statearr_28027_28072 = state_28023__$1;
(statearr_28027_28072[(1)] = (2));

} else {
var statearr_28028_28073 = state_28023__$1;
(statearr_28028_28073[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (24))){
var inst_27975 = (state_28023[(10)]);
var inst_27967 = inst_27975;
var state_28023__$1 = (function (){var statearr_28029 = state_28023;
(statearr_28029[(7)] = inst_27967);

return statearr_28029;
})();
var statearr_28030_28074 = state_28023__$1;
(statearr_28030_28074[(2)] = null);

(statearr_28030_28074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (4))){
var inst_27957 = (state_28023[(9)]);
var inst_27963 = (state_28023[(2)]);
var inst_27964 = cljs.core.get.call(null,inst_27963,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27965 = cljs.core.get.call(null,inst_27963,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27966 = cljs.core.get.call(null,inst_27963,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27967 = inst_27957;
var state_28023__$1 = (function (){var statearr_28031 = state_28023;
(statearr_28031[(11)] = inst_27966);

(statearr_28031[(12)] = inst_27965);

(statearr_28031[(7)] = inst_27967);

(statearr_28031[(13)] = inst_27964);

return statearr_28031;
})();
var statearr_28032_28075 = state_28023__$1;
(statearr_28032_28075[(2)] = null);

(statearr_28032_28075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (15))){
var state_28023__$1 = state_28023;
var statearr_28033_28076 = state_28023__$1;
(statearr_28033_28076[(2)] = null);

(statearr_28033_28076[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (21))){
var inst_27975 = (state_28023[(10)]);
var inst_27967 = inst_27975;
var state_28023__$1 = (function (){var statearr_28034 = state_28023;
(statearr_28034[(7)] = inst_27967);

return statearr_28034;
})();
var statearr_28035_28077 = state_28023__$1;
(statearr_28035_28077[(2)] = null);

(statearr_28035_28077[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (13))){
var inst_28019 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28036_28078 = state_28023__$1;
(statearr_28036_28078[(2)] = inst_28019);

(statearr_28036_28078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (22))){
var inst_28017 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28037_28079 = state_28023__$1;
(statearr_28037_28079[(2)] = inst_28017);

(statearr_28037_28079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (6))){
var inst_28021 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28023__$1,inst_28021);
} else {
if((state_val_28024 === (25))){
var state_28023__$1 = state_28023;
var statearr_28038_28080 = state_28023__$1;
(statearr_28038_28080[(2)] = null);

(statearr_28038_28080[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (17))){
var inst_27997 = (state_28023[(14)]);
var state_28023__$1 = state_28023;
var statearr_28039_28081 = state_28023__$1;
(statearr_28039_28081[(2)] = inst_27997);

(statearr_28039_28081[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (3))){
var inst_27957 = (state_28023[(9)]);
var state_28023__$1 = state_28023;
var statearr_28040_28082 = state_28023__$1;
(statearr_28040_28082[(2)] = inst_27957);

(statearr_28040_28082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (12))){
var inst_27997 = (state_28023[(14)]);
var inst_27978 = (state_28023[(15)]);
var inst_27983 = (state_28023[(16)]);
var inst_27997__$1 = inst_27978.call(null,inst_27983);
var state_28023__$1 = (function (){var statearr_28041 = state_28023;
(statearr_28041[(14)] = inst_27997__$1);

return statearr_28041;
})();
if(cljs.core.truth_(inst_27997__$1)){
var statearr_28042_28083 = state_28023__$1;
(statearr_28042_28083[(1)] = (17));

} else {
var statearr_28043_28084 = state_28023__$1;
(statearr_28043_28084[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (2))){
var inst_27957 = (state_28023[(9)]);
var inst_27960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27957);
var state_28023__$1 = state_28023;
var statearr_28044_28085 = state_28023__$1;
(statearr_28044_28085[(2)] = inst_27960);

(statearr_28044_28085[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (23))){
var inst_28008 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
if(cljs.core.truth_(inst_28008)){
var statearr_28045_28086 = state_28023__$1;
(statearr_28045_28086[(1)] = (24));

} else {
var statearr_28046_28087 = state_28023__$1;
(statearr_28046_28087[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (19))){
var inst_28005 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
if(cljs.core.truth_(inst_28005)){
var statearr_28047_28088 = state_28023__$1;
(statearr_28047_28088[(1)] = (20));

} else {
var statearr_28048_28089 = state_28023__$1;
(statearr_28048_28089[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (11))){
var inst_27982 = (state_28023[(8)]);
var inst_27988 = (inst_27982 == null);
var state_28023__$1 = state_28023;
if(cljs.core.truth_(inst_27988)){
var statearr_28049_28090 = state_28023__$1;
(statearr_28049_28090[(1)] = (14));

} else {
var statearr_28050_28091 = state_28023__$1;
(statearr_28050_28091[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (9))){
var inst_27975 = (state_28023[(10)]);
var inst_27975__$1 = (state_28023[(2)]);
var inst_27976 = cljs.core.get.call(null,inst_27975__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27977 = cljs.core.get.call(null,inst_27975__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27978 = cljs.core.get.call(null,inst_27975__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_28023__$1 = (function (){var statearr_28051 = state_28023;
(statearr_28051[(15)] = inst_27978);

(statearr_28051[(17)] = inst_27977);

(statearr_28051[(10)] = inst_27975__$1);

return statearr_28051;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28023__$1,(10),inst_27976);
} else {
if((state_val_28024 === (5))){
var inst_27967 = (state_28023[(7)]);
var inst_27970 = cljs.core.seq_QMARK_.call(null,inst_27967);
var state_28023__$1 = state_28023;
if(inst_27970){
var statearr_28052_28092 = state_28023__$1;
(statearr_28052_28092[(1)] = (7));

} else {
var statearr_28053_28093 = state_28023__$1;
(statearr_28053_28093[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (14))){
var inst_27983 = (state_28023[(16)]);
var inst_27990 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27983);
var state_28023__$1 = state_28023;
var statearr_28054_28094 = state_28023__$1;
(statearr_28054_28094[(2)] = inst_27990);

(statearr_28054_28094[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (26))){
var inst_28013 = (state_28023[(2)]);
var state_28023__$1 = state_28023;
var statearr_28055_28095 = state_28023__$1;
(statearr_28055_28095[(2)] = inst_28013);

(statearr_28055_28095[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (16))){
var inst_27993 = (state_28023[(2)]);
var inst_27994 = calc_state.call(null);
var inst_27967 = inst_27994;
var state_28023__$1 = (function (){var statearr_28056 = state_28023;
(statearr_28056[(18)] = inst_27993);

(statearr_28056[(7)] = inst_27967);

return statearr_28056;
})();
var statearr_28057_28096 = state_28023__$1;
(statearr_28057_28096[(2)] = null);

(statearr_28057_28096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (10))){
var inst_27982 = (state_28023[(8)]);
var inst_27983 = (state_28023[(16)]);
var inst_27981 = (state_28023[(2)]);
var inst_27982__$1 = cljs.core.nth.call(null,inst_27981,(0),null);
var inst_27983__$1 = cljs.core.nth.call(null,inst_27981,(1),null);
var inst_27984 = (inst_27982__$1 == null);
var inst_27985 = cljs.core._EQ_.call(null,inst_27983__$1,change);
var inst_27986 = (inst_27984) || (inst_27985);
var state_28023__$1 = (function (){var statearr_28058 = state_28023;
(statearr_28058[(8)] = inst_27982__$1);

(statearr_28058[(16)] = inst_27983__$1);

return statearr_28058;
})();
if(cljs.core.truth_(inst_27986)){
var statearr_28059_28097 = state_28023__$1;
(statearr_28059_28097[(1)] = (11));

} else {
var statearr_28060_28098 = state_28023__$1;
(statearr_28060_28098[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (18))){
var inst_27978 = (state_28023[(15)]);
var inst_27977 = (state_28023[(17)]);
var inst_27983 = (state_28023[(16)]);
var inst_28000 = cljs.core.empty_QMARK_.call(null,inst_27978);
var inst_28001 = inst_27977.call(null,inst_27983);
var inst_28002 = cljs.core.not.call(null,inst_28001);
var inst_28003 = (inst_28000) && (inst_28002);
var state_28023__$1 = state_28023;
var statearr_28061_28099 = state_28023__$1;
(statearr_28061_28099[(2)] = inst_28003);

(statearr_28061_28099[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28024 === (8))){
var inst_27967 = (state_28023[(7)]);
var state_28023__$1 = state_28023;
var statearr_28062_28100 = state_28023__$1;
(statearr_28062_28100[(2)] = inst_27967);

(statearr_28062_28100[(1)] = (9));


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
});})(c__22032__auto___28070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21970__auto__,c__22032__auto___28070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21971__auto__ = null;
var cljs$core$async$mix_$_state_machine__21971__auto____0 = (function (){
var statearr_28066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28066[(0)] = cljs$core$async$mix_$_state_machine__21971__auto__);

(statearr_28066[(1)] = (1));

return statearr_28066;
});
var cljs$core$async$mix_$_state_machine__21971__auto____1 = (function (state_28023){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28067){if((e28067 instanceof Object)){
var ex__21974__auto__ = e28067;
var statearr_28068_28101 = state_28023;
(statearr_28068_28101[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28102 = state_28023;
state_28023 = G__28102;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21971__auto__ = function(state_28023){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21971__auto____1.call(this,state_28023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21971__auto____0;
cljs$core$async$mix_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21971__auto____1;
return cljs$core$async$mix_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___28070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22034__auto__ = (function (){var statearr_28069 = f__22033__auto__.call(null);
(statearr_28069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___28070);

return statearr_28069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___28070,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj28104 = {};
return obj28104;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__28106 = arguments.length;
switch (G__28106) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18109__auto__ = p;
if(and__18109__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18109__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18757__auto__ = (((p == null))?null:p);
return (function (){var or__18121__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18757__auto__)]);
if(or__18121__auto__){
return or__18121__auto__;
} else {
var or__18121__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18121__auto____$1){
return or__18121__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__28110 = arguments.length;
switch (G__28110) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18121__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18121__auto__)){
return or__18121__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18121__auto__,mults){
return (function (p1__28108_SHARP_){
if(cljs.core.truth_(p1__28108_SHARP_.call(null,topic))){
return p1__28108_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28108_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18121__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t28111 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28111 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta28112){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta28112 = meta28112;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28111.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t28111.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t28111.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t28111.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t28111.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t28111.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28111.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t28111.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28113){
var self__ = this;
var _28113__$1 = this;
return self__.meta28112;
});})(mults,ensure_mult))
;

cljs.core.async.t28111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28113,meta28112__$1){
var self__ = this;
var _28113__$1 = this;
return (new cljs.core.async.t28111(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta28112__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t28111.cljs$lang$type = true;

cljs.core.async.t28111.cljs$lang$ctorStr = "cljs.core.async/t28111";

cljs.core.async.t28111.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28111");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t28111 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t28111(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28112){
return (new cljs.core.async.t28111(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta28112));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t28111(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22032__auto___28234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___28234,mults,ensure_mult,p){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___28234,mults,ensure_mult,p){
return (function (state_28185){
var state_val_28186 = (state_28185[(1)]);
if((state_val_28186 === (7))){
var inst_28181 = (state_28185[(2)]);
var state_28185__$1 = state_28185;
var statearr_28187_28235 = state_28185__$1;
(statearr_28187_28235[(2)] = inst_28181);

(statearr_28187_28235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (20))){
var state_28185__$1 = state_28185;
var statearr_28188_28236 = state_28185__$1;
(statearr_28188_28236[(2)] = null);

(statearr_28188_28236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (1))){
var state_28185__$1 = state_28185;
var statearr_28189_28237 = state_28185__$1;
(statearr_28189_28237[(2)] = null);

(statearr_28189_28237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (24))){
var inst_28164 = (state_28185[(7)]);
var inst_28173 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28164);
var state_28185__$1 = state_28185;
var statearr_28190_28238 = state_28185__$1;
(statearr_28190_28238[(2)] = inst_28173);

(statearr_28190_28238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (4))){
var inst_28116 = (state_28185[(8)]);
var inst_28116__$1 = (state_28185[(2)]);
var inst_28117 = (inst_28116__$1 == null);
var state_28185__$1 = (function (){var statearr_28191 = state_28185;
(statearr_28191[(8)] = inst_28116__$1);

return statearr_28191;
})();
if(cljs.core.truth_(inst_28117)){
var statearr_28192_28239 = state_28185__$1;
(statearr_28192_28239[(1)] = (5));

} else {
var statearr_28193_28240 = state_28185__$1;
(statearr_28193_28240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (15))){
var inst_28158 = (state_28185[(2)]);
var state_28185__$1 = state_28185;
var statearr_28194_28241 = state_28185__$1;
(statearr_28194_28241[(2)] = inst_28158);

(statearr_28194_28241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (21))){
var inst_28178 = (state_28185[(2)]);
var state_28185__$1 = (function (){var statearr_28195 = state_28185;
(statearr_28195[(9)] = inst_28178);

return statearr_28195;
})();
var statearr_28196_28242 = state_28185__$1;
(statearr_28196_28242[(2)] = null);

(statearr_28196_28242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (13))){
var inst_28140 = (state_28185[(10)]);
var inst_28142 = cljs.core.chunked_seq_QMARK_.call(null,inst_28140);
var state_28185__$1 = state_28185;
if(inst_28142){
var statearr_28197_28243 = state_28185__$1;
(statearr_28197_28243[(1)] = (16));

} else {
var statearr_28198_28244 = state_28185__$1;
(statearr_28198_28244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (22))){
var inst_28170 = (state_28185[(2)]);
var state_28185__$1 = state_28185;
if(cljs.core.truth_(inst_28170)){
var statearr_28199_28245 = state_28185__$1;
(statearr_28199_28245[(1)] = (23));

} else {
var statearr_28200_28246 = state_28185__$1;
(statearr_28200_28246[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (6))){
var inst_28166 = (state_28185[(11)]);
var inst_28164 = (state_28185[(7)]);
var inst_28116 = (state_28185[(8)]);
var inst_28164__$1 = topic_fn.call(null,inst_28116);
var inst_28165 = cljs.core.deref.call(null,mults);
var inst_28166__$1 = cljs.core.get.call(null,inst_28165,inst_28164__$1);
var state_28185__$1 = (function (){var statearr_28201 = state_28185;
(statearr_28201[(11)] = inst_28166__$1);

(statearr_28201[(7)] = inst_28164__$1);

return statearr_28201;
})();
if(cljs.core.truth_(inst_28166__$1)){
var statearr_28202_28247 = state_28185__$1;
(statearr_28202_28247[(1)] = (19));

} else {
var statearr_28203_28248 = state_28185__$1;
(statearr_28203_28248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (25))){
var inst_28175 = (state_28185[(2)]);
var state_28185__$1 = state_28185;
var statearr_28204_28249 = state_28185__$1;
(statearr_28204_28249[(2)] = inst_28175);

(statearr_28204_28249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (17))){
var inst_28140 = (state_28185[(10)]);
var inst_28149 = cljs.core.first.call(null,inst_28140);
var inst_28150 = cljs.core.async.muxch_STAR_.call(null,inst_28149);
var inst_28151 = cljs.core.async.close_BANG_.call(null,inst_28150);
var inst_28152 = cljs.core.next.call(null,inst_28140);
var inst_28126 = inst_28152;
var inst_28127 = null;
var inst_28128 = (0);
var inst_28129 = (0);
var state_28185__$1 = (function (){var statearr_28205 = state_28185;
(statearr_28205[(12)] = inst_28151);

(statearr_28205[(13)] = inst_28126);

(statearr_28205[(14)] = inst_28129);

(statearr_28205[(15)] = inst_28128);

(statearr_28205[(16)] = inst_28127);

return statearr_28205;
})();
var statearr_28206_28250 = state_28185__$1;
(statearr_28206_28250[(2)] = null);

(statearr_28206_28250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (3))){
var inst_28183 = (state_28185[(2)]);
var state_28185__$1 = state_28185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28185__$1,inst_28183);
} else {
if((state_val_28186 === (12))){
var inst_28160 = (state_28185[(2)]);
var state_28185__$1 = state_28185;
var statearr_28207_28251 = state_28185__$1;
(statearr_28207_28251[(2)] = inst_28160);

(statearr_28207_28251[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (2))){
var state_28185__$1 = state_28185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28185__$1,(4),ch);
} else {
if((state_val_28186 === (23))){
var state_28185__$1 = state_28185;
var statearr_28208_28252 = state_28185__$1;
(statearr_28208_28252[(2)] = null);

(statearr_28208_28252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (19))){
var inst_28166 = (state_28185[(11)]);
var inst_28116 = (state_28185[(8)]);
var inst_28168 = cljs.core.async.muxch_STAR_.call(null,inst_28166);
var state_28185__$1 = state_28185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28185__$1,(22),inst_28168,inst_28116);
} else {
if((state_val_28186 === (11))){
var inst_28126 = (state_28185[(13)]);
var inst_28140 = (state_28185[(10)]);
var inst_28140__$1 = cljs.core.seq.call(null,inst_28126);
var state_28185__$1 = (function (){var statearr_28209 = state_28185;
(statearr_28209[(10)] = inst_28140__$1);

return statearr_28209;
})();
if(inst_28140__$1){
var statearr_28210_28253 = state_28185__$1;
(statearr_28210_28253[(1)] = (13));

} else {
var statearr_28211_28254 = state_28185__$1;
(statearr_28211_28254[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (9))){
var inst_28162 = (state_28185[(2)]);
var state_28185__$1 = state_28185;
var statearr_28212_28255 = state_28185__$1;
(statearr_28212_28255[(2)] = inst_28162);

(statearr_28212_28255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (5))){
var inst_28123 = cljs.core.deref.call(null,mults);
var inst_28124 = cljs.core.vals.call(null,inst_28123);
var inst_28125 = cljs.core.seq.call(null,inst_28124);
var inst_28126 = inst_28125;
var inst_28127 = null;
var inst_28128 = (0);
var inst_28129 = (0);
var state_28185__$1 = (function (){var statearr_28213 = state_28185;
(statearr_28213[(13)] = inst_28126);

(statearr_28213[(14)] = inst_28129);

(statearr_28213[(15)] = inst_28128);

(statearr_28213[(16)] = inst_28127);

return statearr_28213;
})();
var statearr_28214_28256 = state_28185__$1;
(statearr_28214_28256[(2)] = null);

(statearr_28214_28256[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (14))){
var state_28185__$1 = state_28185;
var statearr_28218_28257 = state_28185__$1;
(statearr_28218_28257[(2)] = null);

(statearr_28218_28257[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (16))){
var inst_28140 = (state_28185[(10)]);
var inst_28144 = cljs.core.chunk_first.call(null,inst_28140);
var inst_28145 = cljs.core.chunk_rest.call(null,inst_28140);
var inst_28146 = cljs.core.count.call(null,inst_28144);
var inst_28126 = inst_28145;
var inst_28127 = inst_28144;
var inst_28128 = inst_28146;
var inst_28129 = (0);
var state_28185__$1 = (function (){var statearr_28219 = state_28185;
(statearr_28219[(13)] = inst_28126);

(statearr_28219[(14)] = inst_28129);

(statearr_28219[(15)] = inst_28128);

(statearr_28219[(16)] = inst_28127);

return statearr_28219;
})();
var statearr_28220_28258 = state_28185__$1;
(statearr_28220_28258[(2)] = null);

(statearr_28220_28258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (10))){
var inst_28126 = (state_28185[(13)]);
var inst_28129 = (state_28185[(14)]);
var inst_28128 = (state_28185[(15)]);
var inst_28127 = (state_28185[(16)]);
var inst_28134 = cljs.core._nth.call(null,inst_28127,inst_28129);
var inst_28135 = cljs.core.async.muxch_STAR_.call(null,inst_28134);
var inst_28136 = cljs.core.async.close_BANG_.call(null,inst_28135);
var inst_28137 = (inst_28129 + (1));
var tmp28215 = inst_28126;
var tmp28216 = inst_28128;
var tmp28217 = inst_28127;
var inst_28126__$1 = tmp28215;
var inst_28127__$1 = tmp28217;
var inst_28128__$1 = tmp28216;
var inst_28129__$1 = inst_28137;
var state_28185__$1 = (function (){var statearr_28221 = state_28185;
(statearr_28221[(17)] = inst_28136);

(statearr_28221[(13)] = inst_28126__$1);

(statearr_28221[(14)] = inst_28129__$1);

(statearr_28221[(15)] = inst_28128__$1);

(statearr_28221[(16)] = inst_28127__$1);

return statearr_28221;
})();
var statearr_28222_28259 = state_28185__$1;
(statearr_28222_28259[(2)] = null);

(statearr_28222_28259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (18))){
var inst_28155 = (state_28185[(2)]);
var state_28185__$1 = state_28185;
var statearr_28223_28260 = state_28185__$1;
(statearr_28223_28260[(2)] = inst_28155);

(statearr_28223_28260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28186 === (8))){
var inst_28129 = (state_28185[(14)]);
var inst_28128 = (state_28185[(15)]);
var inst_28131 = (inst_28129 < inst_28128);
var inst_28132 = inst_28131;
var state_28185__$1 = state_28185;
if(cljs.core.truth_(inst_28132)){
var statearr_28224_28261 = state_28185__$1;
(statearr_28224_28261[(1)] = (10));

} else {
var statearr_28225_28262 = state_28185__$1;
(statearr_28225_28262[(1)] = (11));

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
});})(c__22032__auto___28234,mults,ensure_mult,p))
;
return ((function (switch__21970__auto__,c__22032__auto___28234,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_28229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28229[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_28229[(1)] = (1));

return statearr_28229;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_28185){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28230){if((e28230 instanceof Object)){
var ex__21974__auto__ = e28230;
var statearr_28231_28263 = state_28185;
(statearr_28231_28263[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28264 = state_28185;
state_28185 = G__28264;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_28185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_28185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___28234,mults,ensure_mult,p))
})();
var state__22034__auto__ = (function (){var statearr_28232 = f__22033__auto__.call(null);
(statearr_28232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___28234);

return statearr_28232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___28234,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__28266 = arguments.length;
switch (G__28266) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__28269 = arguments.length;
switch (G__28269) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__28272 = arguments.length;
switch (G__28272) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22032__auto___28342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___28342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___28342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28311){
var state_val_28312 = (state_28311[(1)]);
if((state_val_28312 === (7))){
var state_28311__$1 = state_28311;
var statearr_28313_28343 = state_28311__$1;
(statearr_28313_28343[(2)] = null);

(statearr_28313_28343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (1))){
var state_28311__$1 = state_28311;
var statearr_28314_28344 = state_28311__$1;
(statearr_28314_28344[(2)] = null);

(statearr_28314_28344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (4))){
var inst_28275 = (state_28311[(7)]);
var inst_28277 = (inst_28275 < cnt);
var state_28311__$1 = state_28311;
if(cljs.core.truth_(inst_28277)){
var statearr_28315_28345 = state_28311__$1;
(statearr_28315_28345[(1)] = (6));

} else {
var statearr_28316_28346 = state_28311__$1;
(statearr_28316_28346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (15))){
var inst_28307 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28317_28347 = state_28311__$1;
(statearr_28317_28347[(2)] = inst_28307);

(statearr_28317_28347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (13))){
var inst_28300 = cljs.core.async.close_BANG_.call(null,out);
var state_28311__$1 = state_28311;
var statearr_28318_28348 = state_28311__$1;
(statearr_28318_28348[(2)] = inst_28300);

(statearr_28318_28348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (6))){
var state_28311__$1 = state_28311;
var statearr_28319_28349 = state_28311__$1;
(statearr_28319_28349[(2)] = null);

(statearr_28319_28349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (3))){
var inst_28309 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28311__$1,inst_28309);
} else {
if((state_val_28312 === (12))){
var inst_28297 = (state_28311[(8)]);
var inst_28297__$1 = (state_28311[(2)]);
var inst_28298 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28297__$1);
var state_28311__$1 = (function (){var statearr_28320 = state_28311;
(statearr_28320[(8)] = inst_28297__$1);

return statearr_28320;
})();
if(cljs.core.truth_(inst_28298)){
var statearr_28321_28350 = state_28311__$1;
(statearr_28321_28350[(1)] = (13));

} else {
var statearr_28322_28351 = state_28311__$1;
(statearr_28322_28351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (2))){
var inst_28274 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28275 = (0);
var state_28311__$1 = (function (){var statearr_28323 = state_28311;
(statearr_28323[(7)] = inst_28275);

(statearr_28323[(9)] = inst_28274);

return statearr_28323;
})();
var statearr_28324_28352 = state_28311__$1;
(statearr_28324_28352[(2)] = null);

(statearr_28324_28352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (11))){
var inst_28275 = (state_28311[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28311,(10),Object,null,(9));
var inst_28284 = chs__$1.call(null,inst_28275);
var inst_28285 = done.call(null,inst_28275);
var inst_28286 = cljs.core.async.take_BANG_.call(null,inst_28284,inst_28285);
var state_28311__$1 = state_28311;
var statearr_28325_28353 = state_28311__$1;
(statearr_28325_28353[(2)] = inst_28286);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28311__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (9))){
var inst_28275 = (state_28311[(7)]);
var inst_28288 = (state_28311[(2)]);
var inst_28289 = (inst_28275 + (1));
var inst_28275__$1 = inst_28289;
var state_28311__$1 = (function (){var statearr_28326 = state_28311;
(statearr_28326[(7)] = inst_28275__$1);

(statearr_28326[(10)] = inst_28288);

return statearr_28326;
})();
var statearr_28327_28354 = state_28311__$1;
(statearr_28327_28354[(2)] = null);

(statearr_28327_28354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (5))){
var inst_28295 = (state_28311[(2)]);
var state_28311__$1 = (function (){var statearr_28328 = state_28311;
(statearr_28328[(11)] = inst_28295);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28311__$1,(12),dchan);
} else {
if((state_val_28312 === (14))){
var inst_28297 = (state_28311[(8)]);
var inst_28302 = cljs.core.apply.call(null,f,inst_28297);
var state_28311__$1 = state_28311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28311__$1,(16),out,inst_28302);
} else {
if((state_val_28312 === (16))){
var inst_28304 = (state_28311[(2)]);
var state_28311__$1 = (function (){var statearr_28329 = state_28311;
(statearr_28329[(12)] = inst_28304);

return statearr_28329;
})();
var statearr_28330_28355 = state_28311__$1;
(statearr_28330_28355[(2)] = null);

(statearr_28330_28355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (10))){
var inst_28279 = (state_28311[(2)]);
var inst_28280 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28311__$1 = (function (){var statearr_28331 = state_28311;
(statearr_28331[(13)] = inst_28279);

return statearr_28331;
})();
var statearr_28332_28356 = state_28311__$1;
(statearr_28332_28356[(2)] = inst_28280);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28311__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28312 === (8))){
var inst_28293 = (state_28311[(2)]);
var state_28311__$1 = state_28311;
var statearr_28333_28357 = state_28311__$1;
(statearr_28333_28357[(2)] = inst_28293);

(statearr_28333_28357[(1)] = (5));


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
});})(c__22032__auto___28342,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21970__auto__,c__22032__auto___28342,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_28337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28337[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_28337[(1)] = (1));

return statearr_28337;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_28311){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28338){if((e28338 instanceof Object)){
var ex__21974__auto__ = e28338;
var statearr_28339_28358 = state_28311;
(statearr_28339_28358[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28359 = state_28311;
state_28311 = G__28359;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_28311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_28311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___28342,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22034__auto__ = (function (){var statearr_28340 = f__22033__auto__.call(null);
(statearr_28340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___28342);

return statearr_28340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___28342,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__28362 = arguments.length;
switch (G__28362) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22032__auto___28417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___28417,out){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___28417,out){
return (function (state_28392){
var state_val_28393 = (state_28392[(1)]);
if((state_val_28393 === (7))){
var inst_28372 = (state_28392[(7)]);
var inst_28371 = (state_28392[(8)]);
var inst_28371__$1 = (state_28392[(2)]);
var inst_28372__$1 = cljs.core.nth.call(null,inst_28371__$1,(0),null);
var inst_28373 = cljs.core.nth.call(null,inst_28371__$1,(1),null);
var inst_28374 = (inst_28372__$1 == null);
var state_28392__$1 = (function (){var statearr_28394 = state_28392;
(statearr_28394[(7)] = inst_28372__$1);

(statearr_28394[(9)] = inst_28373);

(statearr_28394[(8)] = inst_28371__$1);

return statearr_28394;
})();
if(cljs.core.truth_(inst_28374)){
var statearr_28395_28418 = state_28392__$1;
(statearr_28395_28418[(1)] = (8));

} else {
var statearr_28396_28419 = state_28392__$1;
(statearr_28396_28419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (1))){
var inst_28363 = cljs.core.vec.call(null,chs);
var inst_28364 = inst_28363;
var state_28392__$1 = (function (){var statearr_28397 = state_28392;
(statearr_28397[(10)] = inst_28364);

return statearr_28397;
})();
var statearr_28398_28420 = state_28392__$1;
(statearr_28398_28420[(2)] = null);

(statearr_28398_28420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (4))){
var inst_28364 = (state_28392[(10)]);
var state_28392__$1 = state_28392;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28392__$1,(7),inst_28364);
} else {
if((state_val_28393 === (6))){
var inst_28388 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28399_28421 = state_28392__$1;
(statearr_28399_28421[(2)] = inst_28388);

(statearr_28399_28421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (3))){
var inst_28390 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28392__$1,inst_28390);
} else {
if((state_val_28393 === (2))){
var inst_28364 = (state_28392[(10)]);
var inst_28366 = cljs.core.count.call(null,inst_28364);
var inst_28367 = (inst_28366 > (0));
var state_28392__$1 = state_28392;
if(cljs.core.truth_(inst_28367)){
var statearr_28401_28422 = state_28392__$1;
(statearr_28401_28422[(1)] = (4));

} else {
var statearr_28402_28423 = state_28392__$1;
(statearr_28402_28423[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (11))){
var inst_28364 = (state_28392[(10)]);
var inst_28381 = (state_28392[(2)]);
var tmp28400 = inst_28364;
var inst_28364__$1 = tmp28400;
var state_28392__$1 = (function (){var statearr_28403 = state_28392;
(statearr_28403[(11)] = inst_28381);

(statearr_28403[(10)] = inst_28364__$1);

return statearr_28403;
})();
var statearr_28404_28424 = state_28392__$1;
(statearr_28404_28424[(2)] = null);

(statearr_28404_28424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (9))){
var inst_28372 = (state_28392[(7)]);
var state_28392__$1 = state_28392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28392__$1,(11),out,inst_28372);
} else {
if((state_val_28393 === (5))){
var inst_28386 = cljs.core.async.close_BANG_.call(null,out);
var state_28392__$1 = state_28392;
var statearr_28405_28425 = state_28392__$1;
(statearr_28405_28425[(2)] = inst_28386);

(statearr_28405_28425[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (10))){
var inst_28384 = (state_28392[(2)]);
var state_28392__$1 = state_28392;
var statearr_28406_28426 = state_28392__$1;
(statearr_28406_28426[(2)] = inst_28384);

(statearr_28406_28426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28393 === (8))){
var inst_28372 = (state_28392[(7)]);
var inst_28373 = (state_28392[(9)]);
var inst_28371 = (state_28392[(8)]);
var inst_28364 = (state_28392[(10)]);
var inst_28376 = (function (){var c = inst_28373;
var v = inst_28372;
var vec__28369 = inst_28371;
var cs = inst_28364;
return ((function (c,v,vec__28369,cs,inst_28372,inst_28373,inst_28371,inst_28364,state_val_28393,c__22032__auto___28417,out){
return (function (p1__28360_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28360_SHARP_);
});
;})(c,v,vec__28369,cs,inst_28372,inst_28373,inst_28371,inst_28364,state_val_28393,c__22032__auto___28417,out))
})();
var inst_28377 = cljs.core.filterv.call(null,inst_28376,inst_28364);
var inst_28364__$1 = inst_28377;
var state_28392__$1 = (function (){var statearr_28407 = state_28392;
(statearr_28407[(10)] = inst_28364__$1);

return statearr_28407;
})();
var statearr_28408_28427 = state_28392__$1;
(statearr_28408_28427[(2)] = null);

(statearr_28408_28427[(1)] = (2));


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
});})(c__22032__auto___28417,out))
;
return ((function (switch__21970__auto__,c__22032__auto___28417,out){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_28412 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28412[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_28412[(1)] = (1));

return statearr_28412;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_28392){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28413){if((e28413 instanceof Object)){
var ex__21974__auto__ = e28413;
var statearr_28414_28428 = state_28392;
(statearr_28414_28428[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28429 = state_28392;
state_28392 = G__28429;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_28392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_28392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___28417,out))
})();
var state__22034__auto__ = (function (){var statearr_28415 = f__22033__auto__.call(null);
(statearr_28415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___28417);

return statearr_28415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___28417,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__28431 = arguments.length;
switch (G__28431) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22032__auto___28479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___28479,out){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___28479,out){
return (function (state_28455){
var state_val_28456 = (state_28455[(1)]);
if((state_val_28456 === (7))){
var inst_28437 = (state_28455[(7)]);
var inst_28437__$1 = (state_28455[(2)]);
var inst_28438 = (inst_28437__$1 == null);
var inst_28439 = cljs.core.not.call(null,inst_28438);
var state_28455__$1 = (function (){var statearr_28457 = state_28455;
(statearr_28457[(7)] = inst_28437__$1);

return statearr_28457;
})();
if(inst_28439){
var statearr_28458_28480 = state_28455__$1;
(statearr_28458_28480[(1)] = (8));

} else {
var statearr_28459_28481 = state_28455__$1;
(statearr_28459_28481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (1))){
var inst_28432 = (0);
var state_28455__$1 = (function (){var statearr_28460 = state_28455;
(statearr_28460[(8)] = inst_28432);

return statearr_28460;
})();
var statearr_28461_28482 = state_28455__$1;
(statearr_28461_28482[(2)] = null);

(statearr_28461_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (4))){
var state_28455__$1 = state_28455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28455__$1,(7),ch);
} else {
if((state_val_28456 === (6))){
var inst_28450 = (state_28455[(2)]);
var state_28455__$1 = state_28455;
var statearr_28462_28483 = state_28455__$1;
(statearr_28462_28483[(2)] = inst_28450);

(statearr_28462_28483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (3))){
var inst_28452 = (state_28455[(2)]);
var inst_28453 = cljs.core.async.close_BANG_.call(null,out);
var state_28455__$1 = (function (){var statearr_28463 = state_28455;
(statearr_28463[(9)] = inst_28452);

return statearr_28463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28455__$1,inst_28453);
} else {
if((state_val_28456 === (2))){
var inst_28432 = (state_28455[(8)]);
var inst_28434 = (inst_28432 < n);
var state_28455__$1 = state_28455;
if(cljs.core.truth_(inst_28434)){
var statearr_28464_28484 = state_28455__$1;
(statearr_28464_28484[(1)] = (4));

} else {
var statearr_28465_28485 = state_28455__$1;
(statearr_28465_28485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (11))){
var inst_28432 = (state_28455[(8)]);
var inst_28442 = (state_28455[(2)]);
var inst_28443 = (inst_28432 + (1));
var inst_28432__$1 = inst_28443;
var state_28455__$1 = (function (){var statearr_28466 = state_28455;
(statearr_28466[(8)] = inst_28432__$1);

(statearr_28466[(10)] = inst_28442);

return statearr_28466;
})();
var statearr_28467_28486 = state_28455__$1;
(statearr_28467_28486[(2)] = null);

(statearr_28467_28486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (9))){
var state_28455__$1 = state_28455;
var statearr_28468_28487 = state_28455__$1;
(statearr_28468_28487[(2)] = null);

(statearr_28468_28487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (5))){
var state_28455__$1 = state_28455;
var statearr_28469_28488 = state_28455__$1;
(statearr_28469_28488[(2)] = null);

(statearr_28469_28488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (10))){
var inst_28447 = (state_28455[(2)]);
var state_28455__$1 = state_28455;
var statearr_28470_28489 = state_28455__$1;
(statearr_28470_28489[(2)] = inst_28447);

(statearr_28470_28489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (8))){
var inst_28437 = (state_28455[(7)]);
var state_28455__$1 = state_28455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28455__$1,(11),out,inst_28437);
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
});})(c__22032__auto___28479,out))
;
return ((function (switch__21970__auto__,c__22032__auto___28479,out){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_28474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28474[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_28474[(1)] = (1));

return statearr_28474;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_28455){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28475){if((e28475 instanceof Object)){
var ex__21974__auto__ = e28475;
var statearr_28476_28490 = state_28455;
(statearr_28476_28490[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28491 = state_28455;
state_28455 = G__28491;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_28455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_28455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___28479,out))
})();
var state__22034__auto__ = (function (){var statearr_28477 = f__22033__auto__.call(null);
(statearr_28477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___28479);

return statearr_28477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___28479,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t28499 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28499 = (function (ch,f,map_LT_,meta28500){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta28500 = meta28500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28499.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28499.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t28499.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28499.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t28502 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28502 = (function (fn1,_,meta28500,map_LT_,f,ch,meta28503){
this.fn1 = fn1;
this._ = _;
this.meta28500 = meta28500;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28503 = meta28503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t28502.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28492_SHARP_){
return f1.call(null,(((p1__28492_SHARP_ == null))?null:self__.f.call(null,p1__28492_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t28502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28504){
var self__ = this;
var _28504__$1 = this;
return self__.meta28503;
});})(___$1))
;

cljs.core.async.t28502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28504,meta28503__$1){
var self__ = this;
var _28504__$1 = this;
return (new cljs.core.async.t28502(self__.fn1,self__._,self__.meta28500,self__.map_LT_,self__.f,self__.ch,meta28503__$1));
});})(___$1))
;

cljs.core.async.t28502.cljs$lang$type = true;

cljs.core.async.t28502.cljs$lang$ctorStr = "cljs.core.async/t28502";

cljs.core.async.t28502.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28502");
});})(___$1))
;

cljs.core.async.__GT_t28502 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t28502(fn1__$1,___$2,meta28500__$1,map_LT___$1,f__$1,ch__$1,meta28503){
return (new cljs.core.async.t28502(fn1__$1,___$2,meta28500__$1,map_LT___$1,f__$1,ch__$1,meta28503));
});})(___$1))
;

}

return (new cljs.core.async.t28502(fn1,___$1,self__.meta28500,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18109__auto__ = ret;
if(cljs.core.truth_(and__18109__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18109__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t28499.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28499.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28499.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28501){
var self__ = this;
var _28501__$1 = this;
return self__.meta28500;
});

cljs.core.async.t28499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28501,meta28500__$1){
var self__ = this;
var _28501__$1 = this;
return (new cljs.core.async.t28499(self__.ch,self__.f,self__.map_LT_,meta28500__$1));
});

cljs.core.async.t28499.cljs$lang$type = true;

cljs.core.async.t28499.cljs$lang$ctorStr = "cljs.core.async/t28499";

cljs.core.async.t28499.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28499");
});

cljs.core.async.__GT_t28499 = (function cljs$core$async$map_LT__$___GT_t28499(ch__$1,f__$1,map_LT___$1,meta28500){
return (new cljs.core.async.t28499(ch__$1,f__$1,map_LT___$1,meta28500));
});

}

return (new cljs.core.async.t28499(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t28508 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28508 = (function (ch,f,map_GT_,meta28509){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta28509 = meta28509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28508.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t28508.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28508.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28510){
var self__ = this;
var _28510__$1 = this;
return self__.meta28509;
});

cljs.core.async.t28508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28510,meta28509__$1){
var self__ = this;
var _28510__$1 = this;
return (new cljs.core.async.t28508(self__.ch,self__.f,self__.map_GT_,meta28509__$1));
});

cljs.core.async.t28508.cljs$lang$type = true;

cljs.core.async.t28508.cljs$lang$ctorStr = "cljs.core.async/t28508";

cljs.core.async.t28508.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28508");
});

cljs.core.async.__GT_t28508 = (function cljs$core$async$map_GT__$___GT_t28508(ch__$1,f__$1,map_GT___$1,meta28509){
return (new cljs.core.async.t28508(ch__$1,f__$1,map_GT___$1,meta28509));
});

}

return (new cljs.core.async.t28508(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t28514 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28514 = (function (ch,p,filter_GT_,meta28515){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta28515 = meta28515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28514.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t28514.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t28514.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t28514.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t28514.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t28514.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t28514.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t28514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28516){
var self__ = this;
var _28516__$1 = this;
return self__.meta28515;
});

cljs.core.async.t28514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28516,meta28515__$1){
var self__ = this;
var _28516__$1 = this;
return (new cljs.core.async.t28514(self__.ch,self__.p,self__.filter_GT_,meta28515__$1));
});

cljs.core.async.t28514.cljs$lang$type = true;

cljs.core.async.t28514.cljs$lang$ctorStr = "cljs.core.async/t28514";

cljs.core.async.t28514.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"cljs.core.async/t28514");
});

cljs.core.async.__GT_t28514 = (function cljs$core$async$filter_GT__$___GT_t28514(ch__$1,p__$1,filter_GT___$1,meta28515){
return (new cljs.core.async.t28514(ch__$1,p__$1,filter_GT___$1,meta28515));
});

}

return (new cljs.core.async.t28514(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__28518 = arguments.length;
switch (G__28518) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22032__auto___28561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___28561,out){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___28561,out){
return (function (state_28539){
var state_val_28540 = (state_28539[(1)]);
if((state_val_28540 === (7))){
var inst_28535 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
var statearr_28541_28562 = state_28539__$1;
(statearr_28541_28562[(2)] = inst_28535);

(statearr_28541_28562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (1))){
var state_28539__$1 = state_28539;
var statearr_28542_28563 = state_28539__$1;
(statearr_28542_28563[(2)] = null);

(statearr_28542_28563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (4))){
var inst_28521 = (state_28539[(7)]);
var inst_28521__$1 = (state_28539[(2)]);
var inst_28522 = (inst_28521__$1 == null);
var state_28539__$1 = (function (){var statearr_28543 = state_28539;
(statearr_28543[(7)] = inst_28521__$1);

return statearr_28543;
})();
if(cljs.core.truth_(inst_28522)){
var statearr_28544_28564 = state_28539__$1;
(statearr_28544_28564[(1)] = (5));

} else {
var statearr_28545_28565 = state_28539__$1;
(statearr_28545_28565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (6))){
var inst_28521 = (state_28539[(7)]);
var inst_28526 = p.call(null,inst_28521);
var state_28539__$1 = state_28539;
if(cljs.core.truth_(inst_28526)){
var statearr_28546_28566 = state_28539__$1;
(statearr_28546_28566[(1)] = (8));

} else {
var statearr_28547_28567 = state_28539__$1;
(statearr_28547_28567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (3))){
var inst_28537 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28539__$1,inst_28537);
} else {
if((state_val_28540 === (2))){
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28539__$1,(4),ch);
} else {
if((state_val_28540 === (11))){
var inst_28529 = (state_28539[(2)]);
var state_28539__$1 = state_28539;
var statearr_28548_28568 = state_28539__$1;
(statearr_28548_28568[(2)] = inst_28529);

(statearr_28548_28568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (9))){
var state_28539__$1 = state_28539;
var statearr_28549_28569 = state_28539__$1;
(statearr_28549_28569[(2)] = null);

(statearr_28549_28569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (5))){
var inst_28524 = cljs.core.async.close_BANG_.call(null,out);
var state_28539__$1 = state_28539;
var statearr_28550_28570 = state_28539__$1;
(statearr_28550_28570[(2)] = inst_28524);

(statearr_28550_28570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (10))){
var inst_28532 = (state_28539[(2)]);
var state_28539__$1 = (function (){var statearr_28551 = state_28539;
(statearr_28551[(8)] = inst_28532);

return statearr_28551;
})();
var statearr_28552_28571 = state_28539__$1;
(statearr_28552_28571[(2)] = null);

(statearr_28552_28571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28540 === (8))){
var inst_28521 = (state_28539[(7)]);
var state_28539__$1 = state_28539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28539__$1,(11),out,inst_28521);
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
});})(c__22032__auto___28561,out))
;
return ((function (switch__21970__auto__,c__22032__auto___28561,out){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_28556 = [null,null,null,null,null,null,null,null,null];
(statearr_28556[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_28556[(1)] = (1));

return statearr_28556;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_28539){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28557){if((e28557 instanceof Object)){
var ex__21974__auto__ = e28557;
var statearr_28558_28572 = state_28539;
(statearr_28558_28572[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28573 = state_28539;
state_28539 = G__28573;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_28539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_28539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___28561,out))
})();
var state__22034__auto__ = (function (){var statearr_28559 = f__22033__auto__.call(null);
(statearr_28559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___28561);

return statearr_28559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___28561,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28575 = arguments.length;
switch (G__28575) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__){
return (function (state_28742){
var state_val_28743 = (state_28742[(1)]);
if((state_val_28743 === (7))){
var inst_28738 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28744_28785 = state_28742__$1;
(statearr_28744_28785[(2)] = inst_28738);

(statearr_28744_28785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (20))){
var inst_28708 = (state_28742[(7)]);
var inst_28719 = (state_28742[(2)]);
var inst_28720 = cljs.core.next.call(null,inst_28708);
var inst_28694 = inst_28720;
var inst_28695 = null;
var inst_28696 = (0);
var inst_28697 = (0);
var state_28742__$1 = (function (){var statearr_28745 = state_28742;
(statearr_28745[(8)] = inst_28694);

(statearr_28745[(9)] = inst_28695);

(statearr_28745[(10)] = inst_28719);

(statearr_28745[(11)] = inst_28696);

(statearr_28745[(12)] = inst_28697);

return statearr_28745;
})();
var statearr_28746_28786 = state_28742__$1;
(statearr_28746_28786[(2)] = null);

(statearr_28746_28786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (1))){
var state_28742__$1 = state_28742;
var statearr_28747_28787 = state_28742__$1;
(statearr_28747_28787[(2)] = null);

(statearr_28747_28787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (4))){
var inst_28683 = (state_28742[(13)]);
var inst_28683__$1 = (state_28742[(2)]);
var inst_28684 = (inst_28683__$1 == null);
var state_28742__$1 = (function (){var statearr_28748 = state_28742;
(statearr_28748[(13)] = inst_28683__$1);

return statearr_28748;
})();
if(cljs.core.truth_(inst_28684)){
var statearr_28749_28788 = state_28742__$1;
(statearr_28749_28788[(1)] = (5));

} else {
var statearr_28750_28789 = state_28742__$1;
(statearr_28750_28789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (15))){
var state_28742__$1 = state_28742;
var statearr_28754_28790 = state_28742__$1;
(statearr_28754_28790[(2)] = null);

(statearr_28754_28790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (21))){
var state_28742__$1 = state_28742;
var statearr_28755_28791 = state_28742__$1;
(statearr_28755_28791[(2)] = null);

(statearr_28755_28791[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (13))){
var inst_28694 = (state_28742[(8)]);
var inst_28695 = (state_28742[(9)]);
var inst_28696 = (state_28742[(11)]);
var inst_28697 = (state_28742[(12)]);
var inst_28704 = (state_28742[(2)]);
var inst_28705 = (inst_28697 + (1));
var tmp28751 = inst_28694;
var tmp28752 = inst_28695;
var tmp28753 = inst_28696;
var inst_28694__$1 = tmp28751;
var inst_28695__$1 = tmp28752;
var inst_28696__$1 = tmp28753;
var inst_28697__$1 = inst_28705;
var state_28742__$1 = (function (){var statearr_28756 = state_28742;
(statearr_28756[(14)] = inst_28704);

(statearr_28756[(8)] = inst_28694__$1);

(statearr_28756[(9)] = inst_28695__$1);

(statearr_28756[(11)] = inst_28696__$1);

(statearr_28756[(12)] = inst_28697__$1);

return statearr_28756;
})();
var statearr_28757_28792 = state_28742__$1;
(statearr_28757_28792[(2)] = null);

(statearr_28757_28792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (22))){
var state_28742__$1 = state_28742;
var statearr_28758_28793 = state_28742__$1;
(statearr_28758_28793[(2)] = null);

(statearr_28758_28793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (6))){
var inst_28683 = (state_28742[(13)]);
var inst_28692 = f.call(null,inst_28683);
var inst_28693 = cljs.core.seq.call(null,inst_28692);
var inst_28694 = inst_28693;
var inst_28695 = null;
var inst_28696 = (0);
var inst_28697 = (0);
var state_28742__$1 = (function (){var statearr_28759 = state_28742;
(statearr_28759[(8)] = inst_28694);

(statearr_28759[(9)] = inst_28695);

(statearr_28759[(11)] = inst_28696);

(statearr_28759[(12)] = inst_28697);

return statearr_28759;
})();
var statearr_28760_28794 = state_28742__$1;
(statearr_28760_28794[(2)] = null);

(statearr_28760_28794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (17))){
var inst_28708 = (state_28742[(7)]);
var inst_28712 = cljs.core.chunk_first.call(null,inst_28708);
var inst_28713 = cljs.core.chunk_rest.call(null,inst_28708);
var inst_28714 = cljs.core.count.call(null,inst_28712);
var inst_28694 = inst_28713;
var inst_28695 = inst_28712;
var inst_28696 = inst_28714;
var inst_28697 = (0);
var state_28742__$1 = (function (){var statearr_28761 = state_28742;
(statearr_28761[(8)] = inst_28694);

(statearr_28761[(9)] = inst_28695);

(statearr_28761[(11)] = inst_28696);

(statearr_28761[(12)] = inst_28697);

return statearr_28761;
})();
var statearr_28762_28795 = state_28742__$1;
(statearr_28762_28795[(2)] = null);

(statearr_28762_28795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (3))){
var inst_28740 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28742__$1,inst_28740);
} else {
if((state_val_28743 === (12))){
var inst_28728 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28763_28796 = state_28742__$1;
(statearr_28763_28796[(2)] = inst_28728);

(statearr_28763_28796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (2))){
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28742__$1,(4),in$);
} else {
if((state_val_28743 === (23))){
var inst_28736 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28764_28797 = state_28742__$1;
(statearr_28764_28797[(2)] = inst_28736);

(statearr_28764_28797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (19))){
var inst_28723 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28765_28798 = state_28742__$1;
(statearr_28765_28798[(2)] = inst_28723);

(statearr_28765_28798[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (11))){
var inst_28694 = (state_28742[(8)]);
var inst_28708 = (state_28742[(7)]);
var inst_28708__$1 = cljs.core.seq.call(null,inst_28694);
var state_28742__$1 = (function (){var statearr_28766 = state_28742;
(statearr_28766[(7)] = inst_28708__$1);

return statearr_28766;
})();
if(inst_28708__$1){
var statearr_28767_28799 = state_28742__$1;
(statearr_28767_28799[(1)] = (14));

} else {
var statearr_28768_28800 = state_28742__$1;
(statearr_28768_28800[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (9))){
var inst_28730 = (state_28742[(2)]);
var inst_28731 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28742__$1 = (function (){var statearr_28769 = state_28742;
(statearr_28769[(15)] = inst_28730);

return statearr_28769;
})();
if(cljs.core.truth_(inst_28731)){
var statearr_28770_28801 = state_28742__$1;
(statearr_28770_28801[(1)] = (21));

} else {
var statearr_28771_28802 = state_28742__$1;
(statearr_28771_28802[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (5))){
var inst_28686 = cljs.core.async.close_BANG_.call(null,out);
var state_28742__$1 = state_28742;
var statearr_28772_28803 = state_28742__$1;
(statearr_28772_28803[(2)] = inst_28686);

(statearr_28772_28803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (14))){
var inst_28708 = (state_28742[(7)]);
var inst_28710 = cljs.core.chunked_seq_QMARK_.call(null,inst_28708);
var state_28742__$1 = state_28742;
if(inst_28710){
var statearr_28773_28804 = state_28742__$1;
(statearr_28773_28804[(1)] = (17));

} else {
var statearr_28774_28805 = state_28742__$1;
(statearr_28774_28805[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (16))){
var inst_28726 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28775_28806 = state_28742__$1;
(statearr_28775_28806[(2)] = inst_28726);

(statearr_28775_28806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (10))){
var inst_28695 = (state_28742[(9)]);
var inst_28697 = (state_28742[(12)]);
var inst_28702 = cljs.core._nth.call(null,inst_28695,inst_28697);
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28742__$1,(13),out,inst_28702);
} else {
if((state_val_28743 === (18))){
var inst_28708 = (state_28742[(7)]);
var inst_28717 = cljs.core.first.call(null,inst_28708);
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28742__$1,(20),out,inst_28717);
} else {
if((state_val_28743 === (8))){
var inst_28696 = (state_28742[(11)]);
var inst_28697 = (state_28742[(12)]);
var inst_28699 = (inst_28697 < inst_28696);
var inst_28700 = inst_28699;
var state_28742__$1 = state_28742;
if(cljs.core.truth_(inst_28700)){
var statearr_28776_28807 = state_28742__$1;
(statearr_28776_28807[(1)] = (10));

} else {
var statearr_28777_28808 = state_28742__$1;
(statearr_28777_28808[(1)] = (11));

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
});})(c__22032__auto__))
;
return ((function (switch__21970__auto__,c__22032__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21971__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21971__auto____0 = (function (){
var statearr_28781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28781[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21971__auto__);

(statearr_28781[(1)] = (1));

return statearr_28781;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21971__auto____1 = (function (state_28742){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28782){if((e28782 instanceof Object)){
var ex__21974__auto__ = e28782;
var statearr_28783_28809 = state_28742;
(statearr_28783_28809[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28810 = state_28742;
state_28742 = G__28810;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21971__auto__ = function(state_28742){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21971__auto____1.call(this,state_28742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21971__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21971__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__))
})();
var state__22034__auto__ = (function (){var statearr_28784 = f__22033__auto__.call(null);
(statearr_28784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_28784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__))
);

return c__22032__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28812 = arguments.length;
switch (G__28812) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__28815 = arguments.length;
switch (G__28815) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__28818 = arguments.length;
switch (G__28818) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22032__auto___28868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___28868,out){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___28868,out){
return (function (state_28842){
var state_val_28843 = (state_28842[(1)]);
if((state_val_28843 === (7))){
var inst_28837 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28844_28869 = state_28842__$1;
(statearr_28844_28869[(2)] = inst_28837);

(statearr_28844_28869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (1))){
var inst_28819 = null;
var state_28842__$1 = (function (){var statearr_28845 = state_28842;
(statearr_28845[(7)] = inst_28819);

return statearr_28845;
})();
var statearr_28846_28870 = state_28842__$1;
(statearr_28846_28870[(2)] = null);

(statearr_28846_28870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (4))){
var inst_28822 = (state_28842[(8)]);
var inst_28822__$1 = (state_28842[(2)]);
var inst_28823 = (inst_28822__$1 == null);
var inst_28824 = cljs.core.not.call(null,inst_28823);
var state_28842__$1 = (function (){var statearr_28847 = state_28842;
(statearr_28847[(8)] = inst_28822__$1);

return statearr_28847;
})();
if(inst_28824){
var statearr_28848_28871 = state_28842__$1;
(statearr_28848_28871[(1)] = (5));

} else {
var statearr_28849_28872 = state_28842__$1;
(statearr_28849_28872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (6))){
var state_28842__$1 = state_28842;
var statearr_28850_28873 = state_28842__$1;
(statearr_28850_28873[(2)] = null);

(statearr_28850_28873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (3))){
var inst_28839 = (state_28842[(2)]);
var inst_28840 = cljs.core.async.close_BANG_.call(null,out);
var state_28842__$1 = (function (){var statearr_28851 = state_28842;
(statearr_28851[(9)] = inst_28839);

return statearr_28851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28842__$1,inst_28840);
} else {
if((state_val_28843 === (2))){
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28842__$1,(4),ch);
} else {
if((state_val_28843 === (11))){
var inst_28822 = (state_28842[(8)]);
var inst_28831 = (state_28842[(2)]);
var inst_28819 = inst_28822;
var state_28842__$1 = (function (){var statearr_28852 = state_28842;
(statearr_28852[(10)] = inst_28831);

(statearr_28852[(7)] = inst_28819);

return statearr_28852;
})();
var statearr_28853_28874 = state_28842__$1;
(statearr_28853_28874[(2)] = null);

(statearr_28853_28874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (9))){
var inst_28822 = (state_28842[(8)]);
var state_28842__$1 = state_28842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28842__$1,(11),out,inst_28822);
} else {
if((state_val_28843 === (5))){
var inst_28822 = (state_28842[(8)]);
var inst_28819 = (state_28842[(7)]);
var inst_28826 = cljs.core._EQ_.call(null,inst_28822,inst_28819);
var state_28842__$1 = state_28842;
if(inst_28826){
var statearr_28855_28875 = state_28842__$1;
(statearr_28855_28875[(1)] = (8));

} else {
var statearr_28856_28876 = state_28842__$1;
(statearr_28856_28876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (10))){
var inst_28834 = (state_28842[(2)]);
var state_28842__$1 = state_28842;
var statearr_28857_28877 = state_28842__$1;
(statearr_28857_28877[(2)] = inst_28834);

(statearr_28857_28877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28843 === (8))){
var inst_28819 = (state_28842[(7)]);
var tmp28854 = inst_28819;
var inst_28819__$1 = tmp28854;
var state_28842__$1 = (function (){var statearr_28858 = state_28842;
(statearr_28858[(7)] = inst_28819__$1);

return statearr_28858;
})();
var statearr_28859_28878 = state_28842__$1;
(statearr_28859_28878[(2)] = null);

(statearr_28859_28878[(1)] = (2));


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
});})(c__22032__auto___28868,out))
;
return ((function (switch__21970__auto__,c__22032__auto___28868,out){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_28863 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28863[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_28863[(1)] = (1));

return statearr_28863;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_28842){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28864){if((e28864 instanceof Object)){
var ex__21974__auto__ = e28864;
var statearr_28865_28879 = state_28842;
(statearr_28865_28879[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28880 = state_28842;
state_28842 = G__28880;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_28842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_28842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___28868,out))
})();
var state__22034__auto__ = (function (){var statearr_28866 = f__22033__auto__.call(null);
(statearr_28866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___28868);

return statearr_28866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___28868,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28882 = arguments.length;
switch (G__28882) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22032__auto___28951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___28951,out){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___28951,out){
return (function (state_28920){
var state_val_28921 = (state_28920[(1)]);
if((state_val_28921 === (7))){
var inst_28916 = (state_28920[(2)]);
var state_28920__$1 = state_28920;
var statearr_28922_28952 = state_28920__$1;
(statearr_28922_28952[(2)] = inst_28916);

(statearr_28922_28952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (1))){
var inst_28883 = (new Array(n));
var inst_28884 = inst_28883;
var inst_28885 = (0);
var state_28920__$1 = (function (){var statearr_28923 = state_28920;
(statearr_28923[(7)] = inst_28885);

(statearr_28923[(8)] = inst_28884);

return statearr_28923;
})();
var statearr_28924_28953 = state_28920__$1;
(statearr_28924_28953[(2)] = null);

(statearr_28924_28953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (4))){
var inst_28888 = (state_28920[(9)]);
var inst_28888__$1 = (state_28920[(2)]);
var inst_28889 = (inst_28888__$1 == null);
var inst_28890 = cljs.core.not.call(null,inst_28889);
var state_28920__$1 = (function (){var statearr_28925 = state_28920;
(statearr_28925[(9)] = inst_28888__$1);

return statearr_28925;
})();
if(inst_28890){
var statearr_28926_28954 = state_28920__$1;
(statearr_28926_28954[(1)] = (5));

} else {
var statearr_28927_28955 = state_28920__$1;
(statearr_28927_28955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (15))){
var inst_28910 = (state_28920[(2)]);
var state_28920__$1 = state_28920;
var statearr_28928_28956 = state_28920__$1;
(statearr_28928_28956[(2)] = inst_28910);

(statearr_28928_28956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (13))){
var state_28920__$1 = state_28920;
var statearr_28929_28957 = state_28920__$1;
(statearr_28929_28957[(2)] = null);

(statearr_28929_28957[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (6))){
var inst_28885 = (state_28920[(7)]);
var inst_28906 = (inst_28885 > (0));
var state_28920__$1 = state_28920;
if(cljs.core.truth_(inst_28906)){
var statearr_28930_28958 = state_28920__$1;
(statearr_28930_28958[(1)] = (12));

} else {
var statearr_28931_28959 = state_28920__$1;
(statearr_28931_28959[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (3))){
var inst_28918 = (state_28920[(2)]);
var state_28920__$1 = state_28920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28920__$1,inst_28918);
} else {
if((state_val_28921 === (12))){
var inst_28884 = (state_28920[(8)]);
var inst_28908 = cljs.core.vec.call(null,inst_28884);
var state_28920__$1 = state_28920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28920__$1,(15),out,inst_28908);
} else {
if((state_val_28921 === (2))){
var state_28920__$1 = state_28920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28920__$1,(4),ch);
} else {
if((state_val_28921 === (11))){
var inst_28900 = (state_28920[(2)]);
var inst_28901 = (new Array(n));
var inst_28884 = inst_28901;
var inst_28885 = (0);
var state_28920__$1 = (function (){var statearr_28932 = state_28920;
(statearr_28932[(7)] = inst_28885);

(statearr_28932[(8)] = inst_28884);

(statearr_28932[(10)] = inst_28900);

return statearr_28932;
})();
var statearr_28933_28960 = state_28920__$1;
(statearr_28933_28960[(2)] = null);

(statearr_28933_28960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (9))){
var inst_28884 = (state_28920[(8)]);
var inst_28898 = cljs.core.vec.call(null,inst_28884);
var state_28920__$1 = state_28920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28920__$1,(11),out,inst_28898);
} else {
if((state_val_28921 === (5))){
var inst_28888 = (state_28920[(9)]);
var inst_28885 = (state_28920[(7)]);
var inst_28884 = (state_28920[(8)]);
var inst_28893 = (state_28920[(11)]);
var inst_28892 = (inst_28884[inst_28885] = inst_28888);
var inst_28893__$1 = (inst_28885 + (1));
var inst_28894 = (inst_28893__$1 < n);
var state_28920__$1 = (function (){var statearr_28934 = state_28920;
(statearr_28934[(12)] = inst_28892);

(statearr_28934[(11)] = inst_28893__$1);

return statearr_28934;
})();
if(cljs.core.truth_(inst_28894)){
var statearr_28935_28961 = state_28920__$1;
(statearr_28935_28961[(1)] = (8));

} else {
var statearr_28936_28962 = state_28920__$1;
(statearr_28936_28962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (14))){
var inst_28913 = (state_28920[(2)]);
var inst_28914 = cljs.core.async.close_BANG_.call(null,out);
var state_28920__$1 = (function (){var statearr_28938 = state_28920;
(statearr_28938[(13)] = inst_28913);

return statearr_28938;
})();
var statearr_28939_28963 = state_28920__$1;
(statearr_28939_28963[(2)] = inst_28914);

(statearr_28939_28963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (10))){
var inst_28904 = (state_28920[(2)]);
var state_28920__$1 = state_28920;
var statearr_28940_28964 = state_28920__$1;
(statearr_28940_28964[(2)] = inst_28904);

(statearr_28940_28964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28921 === (8))){
var inst_28884 = (state_28920[(8)]);
var inst_28893 = (state_28920[(11)]);
var tmp28937 = inst_28884;
var inst_28884__$1 = tmp28937;
var inst_28885 = inst_28893;
var state_28920__$1 = (function (){var statearr_28941 = state_28920;
(statearr_28941[(7)] = inst_28885);

(statearr_28941[(8)] = inst_28884__$1);

return statearr_28941;
})();
var statearr_28942_28965 = state_28920__$1;
(statearr_28942_28965[(2)] = null);

(statearr_28942_28965[(1)] = (2));


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
});})(c__22032__auto___28951,out))
;
return ((function (switch__21970__auto__,c__22032__auto___28951,out){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_28946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28946[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_28946[(1)] = (1));

return statearr_28946;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_28920){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_28920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e28947){if((e28947 instanceof Object)){
var ex__21974__auto__ = e28947;
var statearr_28948_28966 = state_28920;
(statearr_28948_28966[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28967 = state_28920;
state_28920 = G__28967;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_28920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_28920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___28951,out))
})();
var state__22034__auto__ = (function (){var statearr_28949 = f__22033__auto__.call(null);
(statearr_28949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___28951);

return statearr_28949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___28951,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28969 = arguments.length;
switch (G__28969) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22032__auto___29042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto___29042,out){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto___29042,out){
return (function (state_29011){
var state_val_29012 = (state_29011[(1)]);
if((state_val_29012 === (7))){
var inst_29007 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29013_29043 = state_29011__$1;
(statearr_29013_29043[(2)] = inst_29007);

(statearr_29013_29043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (1))){
var inst_28970 = [];
var inst_28971 = inst_28970;
var inst_28972 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29011__$1 = (function (){var statearr_29014 = state_29011;
(statearr_29014[(7)] = inst_28972);

(statearr_29014[(8)] = inst_28971);

return statearr_29014;
})();
var statearr_29015_29044 = state_29011__$1;
(statearr_29015_29044[(2)] = null);

(statearr_29015_29044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (4))){
var inst_28975 = (state_29011[(9)]);
var inst_28975__$1 = (state_29011[(2)]);
var inst_28976 = (inst_28975__$1 == null);
var inst_28977 = cljs.core.not.call(null,inst_28976);
var state_29011__$1 = (function (){var statearr_29016 = state_29011;
(statearr_29016[(9)] = inst_28975__$1);

return statearr_29016;
})();
if(inst_28977){
var statearr_29017_29045 = state_29011__$1;
(statearr_29017_29045[(1)] = (5));

} else {
var statearr_29018_29046 = state_29011__$1;
(statearr_29018_29046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (15))){
var inst_29001 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29019_29047 = state_29011__$1;
(statearr_29019_29047[(2)] = inst_29001);

(statearr_29019_29047[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (13))){
var state_29011__$1 = state_29011;
var statearr_29020_29048 = state_29011__$1;
(statearr_29020_29048[(2)] = null);

(statearr_29020_29048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (6))){
var inst_28971 = (state_29011[(8)]);
var inst_28996 = inst_28971.length;
var inst_28997 = (inst_28996 > (0));
var state_29011__$1 = state_29011;
if(cljs.core.truth_(inst_28997)){
var statearr_29021_29049 = state_29011__$1;
(statearr_29021_29049[(1)] = (12));

} else {
var statearr_29022_29050 = state_29011__$1;
(statearr_29022_29050[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (3))){
var inst_29009 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29011__$1,inst_29009);
} else {
if((state_val_29012 === (12))){
var inst_28971 = (state_29011[(8)]);
var inst_28999 = cljs.core.vec.call(null,inst_28971);
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29011__$1,(15),out,inst_28999);
} else {
if((state_val_29012 === (2))){
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29011__$1,(4),ch);
} else {
if((state_val_29012 === (11))){
var inst_28975 = (state_29011[(9)]);
var inst_28979 = (state_29011[(10)]);
var inst_28989 = (state_29011[(2)]);
var inst_28990 = [];
var inst_28991 = inst_28990.push(inst_28975);
var inst_28971 = inst_28990;
var inst_28972 = inst_28979;
var state_29011__$1 = (function (){var statearr_29023 = state_29011;
(statearr_29023[(11)] = inst_28991);

(statearr_29023[(7)] = inst_28972);

(statearr_29023[(12)] = inst_28989);

(statearr_29023[(8)] = inst_28971);

return statearr_29023;
})();
var statearr_29024_29051 = state_29011__$1;
(statearr_29024_29051[(2)] = null);

(statearr_29024_29051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (9))){
var inst_28971 = (state_29011[(8)]);
var inst_28987 = cljs.core.vec.call(null,inst_28971);
var state_29011__$1 = state_29011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29011__$1,(11),out,inst_28987);
} else {
if((state_val_29012 === (5))){
var inst_28975 = (state_29011[(9)]);
var inst_28972 = (state_29011[(7)]);
var inst_28979 = (state_29011[(10)]);
var inst_28979__$1 = f.call(null,inst_28975);
var inst_28980 = cljs.core._EQ_.call(null,inst_28979__$1,inst_28972);
var inst_28981 = cljs.core.keyword_identical_QMARK_.call(null,inst_28972,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28982 = (inst_28980) || (inst_28981);
var state_29011__$1 = (function (){var statearr_29025 = state_29011;
(statearr_29025[(10)] = inst_28979__$1);

return statearr_29025;
})();
if(cljs.core.truth_(inst_28982)){
var statearr_29026_29052 = state_29011__$1;
(statearr_29026_29052[(1)] = (8));

} else {
var statearr_29027_29053 = state_29011__$1;
(statearr_29027_29053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (14))){
var inst_29004 = (state_29011[(2)]);
var inst_29005 = cljs.core.async.close_BANG_.call(null,out);
var state_29011__$1 = (function (){var statearr_29029 = state_29011;
(statearr_29029[(13)] = inst_29004);

return statearr_29029;
})();
var statearr_29030_29054 = state_29011__$1;
(statearr_29030_29054[(2)] = inst_29005);

(statearr_29030_29054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (10))){
var inst_28994 = (state_29011[(2)]);
var state_29011__$1 = state_29011;
var statearr_29031_29055 = state_29011__$1;
(statearr_29031_29055[(2)] = inst_28994);

(statearr_29031_29055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29012 === (8))){
var inst_28975 = (state_29011[(9)]);
var inst_28971 = (state_29011[(8)]);
var inst_28979 = (state_29011[(10)]);
var inst_28984 = inst_28971.push(inst_28975);
var tmp29028 = inst_28971;
var inst_28971__$1 = tmp29028;
var inst_28972 = inst_28979;
var state_29011__$1 = (function (){var statearr_29032 = state_29011;
(statearr_29032[(7)] = inst_28972);

(statearr_29032[(8)] = inst_28971__$1);

(statearr_29032[(14)] = inst_28984);

return statearr_29032;
})();
var statearr_29033_29056 = state_29011__$1;
(statearr_29033_29056[(2)] = null);

(statearr_29033_29056[(1)] = (2));


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
});})(c__22032__auto___29042,out))
;
return ((function (switch__21970__auto__,c__22032__auto___29042,out){
return (function() {
var cljs$core$async$state_machine__21971__auto__ = null;
var cljs$core$async$state_machine__21971__auto____0 = (function (){
var statearr_29037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29037[(0)] = cljs$core$async$state_machine__21971__auto__);

(statearr_29037[(1)] = (1));

return statearr_29037;
});
var cljs$core$async$state_machine__21971__auto____1 = (function (state_29011){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_29011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e29038){if((e29038 instanceof Object)){
var ex__21974__auto__ = e29038;
var statearr_29039_29057 = state_29011;
(statearr_29039_29057[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29058 = state_29011;
state_29011 = G__29058;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
cljs$core$async$state_machine__21971__auto__ = function(state_29011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21971__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21971__auto____1.call(this,state_29011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21971__auto____0;
cljs$core$async$state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21971__auto____1;
return cljs$core$async$state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto___29042,out))
})();
var state__22034__auto__ = (function (){var statearr_29040 = f__22033__auto__.call(null);
(statearr_29040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto___29042);

return statearr_29040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto___29042,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444936772868