(ns goon-squad.views
    (:require [re-frame.core :as re-frame]
              [goon-squad.engine :as engine]
              [goon-squad.turn :as turn]
              [re-com.core :as re-com]))

;; --------------------
(defn home-title []
  [re-com/title
   :label "Goon Squad"
   :level :level1])

(defn grid-row [rows]
  (into [] (for [x rows]
    [re-com/box
      :width "50px"
      :child (str x)])))

(defn draw-all [history]
  (if (seq history)
  (into [] (for [k (keys (first history))]
    [re-com/h-box
     :gap "1em"
     :children (grid-row (conj (map k history) k))]))
  [re-com/p]))

(defn world-history []
  (let [history (re-frame/subscribe [:history])]
    (fn []
      [re-com/v-box
       :gap "1em"
       :children (draw-all @history)])))

(defn all-turns []
  (let [all-turns (re-frame/subscribe [:all-turns])]
    (fn []
      [re-com/v-box
       :gap "1em"
       :children (draw-all @all-turns)])))

(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [[home-title] [world-history] [turn/form] [all-turns]]])

;; --------------------
(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [re-com/v-box
       :height "100%"
       :children [(panels @active-panel)]])))
