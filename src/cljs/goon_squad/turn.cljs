(ns goon-squad.turn
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [goon-squad.util :as util]
            [re-com.core :as re-com]))

;; --------------------

(def turn-defaults {:sell {:green 0
                           :white 0}
                    :produce {:green 1
                              :white 0}
                    :territories (set nil)})

(def data (reagent/atom turn-defaults))

(defn slider [value max turn-type attr]
  [re-com/slider
    :model     value
    :min       0
    :max       max
    :step      1
    :width     "50px"
    :on-change (fn [v] 
                (reset! data (set-value v turn-type attr)))]
)

(defn sell-row [k v]
  ((let [slider-val (reagent/atom "1")]
    (fn []
      [re-com/h-box
       :gap "1em"
       :children [(slider slider-val 0 15 1)]]))))

(defn item [turn-type name attr]
  (let [world (re-frame/subscribe [:world])]
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
                  (slider (get-value turn-type attr) (get-in @world [:stock attr]) turn-type attr)]])))

(defn get-value 
  ([turn-type attr]
    (get-in @data [turn-type attr]))
  ([attr]
    (get @data attr)))

(defn set-value 
  ([new-value turn-type attr]
    (assoc-in @data [turn-type attr] new-value))
  ([new-value turn-type]
    (assoc @data turn-type new-value))
  )

(defn territory [name]
  (let [form-data data]
    (fn []
      [re-com/h-box
       :gap "1em"
       :children [
                  [re-com/box :child (str name)]
                   [re-com/checkbox
                   :model (contains? (:territories @form-data) name)
                   :on-change (fn [v]
                                (if v
                                  (reset! form-data (set-value (conj (get-value :territories) name) :territories))
                                  (reset! form-data (set-value (disj (get-value :territories) name) :territories))))]]])))

(defn form []
  (let [form-data data]
    (fn []
      [re-com/v-box
       :gap "1em"
       :children [[re-com/box
                   :child "Sell"]
                  [item :sell "Green" :green]
                  [item :sell "White" :white]

                  [re-com/box
                   :child "Produce"]
                  [item :produce "Green" :green]
                  [item :produce "White" :white]

                  [re-com/v-box
                   :gap "1em"
                   :children [[territory :school] [territory :downtown]]]

                  [re-com/button
                   :label "Do turn"
                   :on-click (fn [e] 
                               ( re-frame/dispatch [:complex-turn @form-data]
                               (reset! data turn-defaults)))]]])))
