(ns goon-squad.draw
    (:require [re-frame.core :as re-frame]
              [reagent.core :as reagent]
              [re-com.core :as re-com]))

;; --------------------

(defn chart-config []
  (let [history (re-frame/subscribe [:history])]
    (fn []
    (.log js/console (data @history))
      {:chart {:type "area" :animation false}
       :yAxis {:min 0
               :title {:text "Population (millions)"
                       :align "high"}
               :labels {:overflow "justify"}}
       :plotOptions {:area {:dataLabels {:enabled false}}}
       :legend {:layout "vertical"
                :align "right"
                :verticalAlign "top"
                :x -40
                :y 100
                :floating true
                :borderWidth 1
                :shadow true}
       :credits {:enabled false}
       :series (data @history)
       })))

(defn data [history]
  (for [k (keys (first history))] {:animation false :name k :data (map k history)})
)

(defn home-did-update [this]
  (.highcharts (js/$ (reagent/dom-node this))
               (clj->js ((chart-config)))))

(defn home-render []
  (let [history (re-frame/subscribe [:history])]
    (fn []
      [re-com/box
        :class (str "history-graph " (count @history))
        :child "stuff"])))

(defn history []
      (reagent/create-class {:reagent-render home-render
                             :component-did-update home-did-update}))
