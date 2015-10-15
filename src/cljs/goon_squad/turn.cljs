(ns goon-squad.turn
    (:require [re-frame.core :as re-frame]
              [goon-squad.engine :as engine]
              [reagent.core :as reagent]
              [re-com.core :as re-com]))

;; --------------------
(defn form []
  (let [slider-val  (reagent/atom "1")
        slider-min  (reagent/atom "0")
        slider-max  (reagent/atom "15")
        slider-step (reagent/atom "1")
        disabled?   (reagent/atom false)]
    (fn []
      [re-com/v-box
       :gap "1em"
       :children [[re-com/slider
                   :model     slider-val
                   :min       slider-min
                   :max       slider-max
                   :step      slider-step
                   :width     "50px"
                   :on-change #(reset! slider-val (str %))]
                  [re-com/box
                    :child "sell"]]])))
