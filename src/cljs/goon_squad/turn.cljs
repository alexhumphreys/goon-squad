(ns goon-squad.turn
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [goon-squad.util :as util]
            [re-com.core :as re-com]))

;; --------------------

(def data (reagent/atom {:green 1 :white 1}))

(defn slider [value min max step attr data]
  [re-com/slider
    :model     value
    :min       min
    :max       max
    :step      step
    :width     "50px"
    :on-change (fn [v] 
                (reset! data (assoc @data attr v)))]
)

(defn sell-row [k v]
  ((let [slider-val (reagent/atom "1")]
    (fn []
      [re-com/h-box
       :gap "1em"
       :children [(slider slider-val 0 15 1)]]))))

(defn available-to-sell [stock]
  (util/map-map stock sell-row))

(defn sell-item [name turn-type attr data]
  (let [slider-val (reagent/atom "1")]
    (fn []
      [re-com/h-box
       :gap "1em"
       :children [
                  [re-com/h-box
                   :gap "1em"
                   :children [[re-com/box
                               :child name]
                              [re-com/box
                               :width "20px"
                               :child (str (get-value turn-type attr))]]]
                  (slider (get-value turn-type attr) 0 15 1 attr data)]])))

(defn get-value [turn-type attr]
  (get-in @data [turn-type attr])
  (get-in @data [attr])
  )

(defn set-value [turn-type attr new-value]
  (assoc-in @data [turn-type attr] new-value)
  (assoc-in @data [attr] new-value)
  )

(defn form []
  (let [form-data data]
    (fn []
      [re-com/v-box
       :gap "1em"
       :children [
                  [sell-item "Green" :sell :green form-data]
                  [sell-item "White" :sell :white form-data]
                  [re-com/button
                   :label "Do turn"
                   :on-click #(re-frame/dispatch [:complex-turn {:sell @form-data}])]
]])))
