(ns goon-squad.handlers
    (:require [re-frame.core :as re-frame]
              [goon-squad.engine :as engine]
              [devtools.core :as devtools]
              [goon-squad.db :as db]))


(devtools/install!)

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(def standard-middlewares [ (if ^boolean goog.DEBUG log-ex log-ex-to-airbrake) 
                            (when ^boolean goog.DEBUG debug)]) 


(re-frame/register-handler
 :turn
  standard-middlewares
 (fn [db [_ turn-values]]
   (assoc db :history (conj (get-in db [:history]) (engine/next-state (get-in db [:world]) turn-values))
             :turn turn-values
             :all-turns (conj (get-in db [:all-turns] ) turn-values))
    ))
