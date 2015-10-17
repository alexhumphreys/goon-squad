(ns goon-squad.handlers
    (:require [re-frame.core :as re-frame]
              [goon-squad.engine :as engine]
              [devtools.core :as devtools]
              [schema.core :as s]
              [goon-squad.db :as db]))


(devtools/install!)

(defn check-and-throw
      "throw an exception if db doesn't match the schema."
      [a-schema db]
      (if-let [problems (s/check a-schema db)]
         (throw (js/Error. (str "schema check failed: " problems)))))

;; after an event handler has run, this middleware can check that
;; it the value in app-db still correctly matches the schema.
(def check-schema-mw (re-frame/after (partial check-and-throw db/schema)))

(re-frame/register-handler
 :initialize-db
  check-schema-mw
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
  check-schema-mw
 (fn [db [_ turn-values]]
   (def next-world (engine/next-state (get-in db [:world]) turn-values))
   (assoc db :history (conj (get-in db [:history]) next-world)
             :world next-world
             :all-turns (conj (get-in db [:all-turns] ) turn-values))
    ))
