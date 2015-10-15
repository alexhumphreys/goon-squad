(ns goon-squad.views
    (:require [re-frame.core :as re-frame]
              [goon-squad.engine :as engine]
              [re-com.core :as re-com]))

;; --------------------
(defn home-title []
  [re-com/title
   :label (str "Hello" "This is the Home Page.")
   :level :level1])

(defn link-to-about-page []
  [re-com/hyperlink-href
   :label "go to About Page"
   :href "#/about"])

(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [[home-title] [world] ]])

;; --------------------
(defn about-title []
  [re-com/title
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [re-com/hyperlink-href
   :label "go to Home Page"
   :href "#/"])  

(defn about-panel []
  [re-com/v-box
   :gap "1em"
   :children [[about-title] [link-to-home-page]]])

(defn world []
  (let [world (re-frame/subscribe [:world])]
    (fn []
      [re-com/v-box
       :gap "1em"
       :children [[re-com/p (str "hey")]]])))

;; --------------------
(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [re-com/v-box
       :height "100%"
       :children [(panels @active-panel)]])))
