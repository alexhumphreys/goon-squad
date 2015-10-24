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

(defn item [turn-type name attr max]
  (let [state (re-frame/subscribe [:state])]
    (fn []
      (.log js/console (get-in @state max))
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
                  (slider (get-value turn-type attr) (get-in @state max) turn-type attr)]])))

(defn territory [t]
  [re-com/h-box
   :gap "1em"
   :children [[re-com/box :child (str (:name t))]
              [re-com/checkbox
               :model (contains? (:territories @data) (:name t))
               :on-change (fn [v]
                            (if v
                              (reset! data (set-value (conj (get-value :territories) (:name t)) :territories))
                              (reset! data (set-value (disj (get-value :territories) (:name t)) :territories))))]]])

(defn territories-form [territories state]
  (def all-territories (set (for [t territories] (:name t))))
  (def current-territories (:territories state))
  (def available-territories (filter #(not ( contains? current-territories (:name %))) territories))
  (for [p available-territories] [territory p]))

(defn form []
  (let [form-data data
        state (re-frame/subscribe [:state])
        constants (re-frame/subscribe [:constants])]
    (fn []
      [re-com/v-box
       :gap "1em"
       :children [[re-com/box
                   :child "Sell"]
                  [item :sell "Green" :green [:stock :green]]
                  [item :sell "White" :white  [:stock :white]]

                  [re-com/box
                   :child "Produce"]
                  [item :produce "Green" :green [:production :green]]
                  [item :produce "White" :white [:production :white]]

                  [re-com/v-box
                   :gap "1em"
                   :children (territories-form (:territories @constants) @state)]

                  [re-com/button
                   :label "Do turn"
                   :on-click (fn [e] 
                               ( re-frame/dispatch [:complex-turn @form-data]
                               (reset! data turn-defaults)))]]])))
