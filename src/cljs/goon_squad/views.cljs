(ns goon-squad.views
    (:require [re-frame.core :as re-frame]
              [goon-squad.engine :as engine]
              [goon-squad.turn :as turn]
              [re-com.core :as re-com]))

;; --------------------
(defn home-title []
  [re-com/title
   :label (str "Hello" "This is the Home Page.")
   :level :level1])

(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [[home-title] [world-at-time] [turn/form] [all-turns]]])

;; --------------------
(defn about-title []
  [re-com/title
   :label "This is the About Page."
   :level :level1])

(defn world-list [rows]
  (into [] (for [x rows]
    [re-com/box
      :width "20px"
      :child (str x)])))

(defn world-at-time []
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

(defn draw-all [history]
  (if (seq history)
  (into [] (for [k (keys (first history))]
    [re-com/h-box
     :gap "1em"
     :children (world-list (map k history))]))
  [re-com/p]))

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
