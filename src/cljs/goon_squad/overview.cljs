(ns goon-squad.overview
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [goon-squad.tree :as tree]
            [re-com.core :as re-com]))

;; --------------------

(defn get-primary-stats [world]
  (select-keys world [:money]))

(defn primary-stats []
  (let [world (re-frame/subscribe [:world])]
    (fn []
      [re-com/h-box
       :gap "1em"
       :children [[tree/render-tree (get-primary-stats @world)]]])))
