(ns goon-squad.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [goon-squad.handlers]
            [goon-squad.subs]
            [goon-squad.routes :as routes]
            [goon-squad.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init [] 
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (mount-root))
