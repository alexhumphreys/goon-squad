// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__22032__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22032__auto__){
return (function (){
var f__22033__auto__ = (function (){var switch__21970__auto__ = ((function (c__22032__auto__){
return (function (state_26529){
var state_val_26530 = (state_26529[(1)]);
if((state_val_26530 === (7))){
var inst_26514 = (state_26529[(2)]);
var state_26529__$1 = (function (){var statearr_26531 = state_26529;
(statearr_26531[(7)] = inst_26514);

return statearr_26531;
})();
var statearr_26532_26552 = state_26529__$1;
(statearr_26532_26552[(2)] = null);

(statearr_26532_26552[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (1))){
var state_26529__$1 = state_26529;
var statearr_26533_26553 = state_26529__$1;
(statearr_26533_26553[(2)] = null);

(statearr_26533_26553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (4))){
var inst_26501 = (state_26529[(8)]);
var inst_26501__$1 = (state_26529[(2)]);
var inst_26502 = cljs.core.meta.call(null,inst_26501__$1);
var inst_26503 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_26502);
var state_26529__$1 = (function (){var statearr_26534 = state_26529;
(statearr_26534[(8)] = inst_26501__$1);

return statearr_26534;
})();
if(cljs.core.truth_(inst_26503)){
var statearr_26535_26554 = state_26529__$1;
(statearr_26535_26554[(1)] = (5));

} else {
var statearr_26536_26555 = state_26529__$1;
(statearr_26536_26555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (6))){
var inst_26510 = cljs.core.async.timeout.call(null,(0));
var state_26529__$1 = state_26529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26529__$1,(9),inst_26510);
} else {
if((state_val_26530 === (3))){
var inst_26527 = (state_26529[(2)]);
var state_26529__$1 = state_26529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26529__$1,inst_26527);
} else {
if((state_val_26530 === (12))){
var inst_26501 = (state_26529[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26529,(11),Object,null,(10));
var inst_26522 = re_frame.handlers.handle.call(null,inst_26501);
var state_26529__$1 = state_26529;
var statearr_26537_26556 = state_26529__$1;
(statearr_26537_26556[(2)] = inst_26522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (2))){
var state_26529__$1 = state_26529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26529__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_26530 === (11))){
var inst_26515 = (state_26529[(2)]);
var inst_26516 = re_frame.router.purge_chan.call(null);
var inst_26517 = re_frame$router$router_loop.call(null);
var inst_26518 = (function(){throw inst_26515})();
var state_26529__$1 = (function (){var statearr_26538 = state_26529;
(statearr_26538[(9)] = inst_26517);

(statearr_26538[(10)] = inst_26516);

return statearr_26538;
})();
var statearr_26539_26557 = state_26529__$1;
(statearr_26539_26557[(2)] = inst_26518);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26529__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (9))){
var inst_26512 = (state_26529[(2)]);
var state_26529__$1 = state_26529;
var statearr_26540_26558 = state_26529__$1;
(statearr_26540_26558[(2)] = inst_26512);

(statearr_26540_26558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (5))){
var inst_26505 = reagent.core.flush.call(null);
var inst_26506 = cljs.core.async.timeout.call(null,(20));
var state_26529__$1 = (function (){var statearr_26541 = state_26529;
(statearr_26541[(11)] = inst_26505);

return statearr_26541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26529__$1,(8),inst_26506);
} else {
if((state_val_26530 === (10))){
var inst_26524 = (state_26529[(2)]);
var state_26529__$1 = (function (){var statearr_26542 = state_26529;
(statearr_26542[(12)] = inst_26524);

return statearr_26542;
})();
var statearr_26543_26559 = state_26529__$1;
(statearr_26543_26559[(2)] = null);

(statearr_26543_26559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26530 === (8))){
var inst_26508 = (state_26529[(2)]);
var state_26529__$1 = state_26529;
var statearr_26544_26560 = state_26529__$1;
(statearr_26544_26560[(2)] = inst_26508);

(statearr_26544_26560[(1)] = (7));


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
});})(c__22032__auto__))
;
return ((function (switch__21970__auto__,c__22032__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__21971__auto__ = null;
var re_frame$router$router_loop_$_state_machine__21971__auto____0 = (function (){
var statearr_26548 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26548[(0)] = re_frame$router$router_loop_$_state_machine__21971__auto__);

(statearr_26548[(1)] = (1));

return statearr_26548;
});
var re_frame$router$router_loop_$_state_machine__21971__auto____1 = (function (state_26529){
while(true){
var ret_value__21972__auto__ = (function (){try{while(true){
var result__21973__auto__ = switch__21970__auto__.call(null,state_26529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21973__auto__;
}
break;
}
}catch (e26549){if((e26549 instanceof Object)){
var ex__21974__auto__ = e26549;
var statearr_26550_26561 = state_26529;
(statearr_26550_26561[(5)] = ex__21974__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26562 = state_26529;
state_26529 = G__26562;
continue;
} else {
return ret_value__21972__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__21971__auto__ = function(state_26529){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__21971__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__21971__auto____1.call(this,state_26529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__21971__auto____0;
re_frame$router$router_loop_$_state_machine__21971__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__21971__auto____1;
return re_frame$router$router_loop_$_state_machine__21971__auto__;
})()
;})(switch__21970__auto__,c__22032__auto__))
})();
var state__22034__auto__ = (function (){var statearr_26551 = f__22033__auto__.call(null);
(statearr_26551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22032__auto__);

return statearr_26551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22034__auto__);
});})(c__22032__auto__))
);

return c__22032__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1444936770997