(ns goon-squad.tree
  (:require [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [re-com.core :as re-com]))

;; --------------------
(def test-data 
  {:a 0
   :b {:c 4}
   :d {:e 3 :f 2}
   :j [1 2 3]
   :g {:h {:i 1}}})

(defn map-map [m f]
  (into [] (for [[k v] m] (f k v))))

(defn draw-leaf [k v]
  [re-com/h-box
   :justify :around
   :children [[re-com/box
               :child (str k)]
              [re-com/box
               :child (str v)]]])

(defn draw-vector [vect]
  (def x 
    (map (fn [v] [re-com/box :child (str v)]) vect))
  [re-com/v-box
   :children x])

(defn draw-map [m]
  (map-map m (fn [k v]
               (cond
                 (or (string? v) (number? v)) (draw-leaf k v)
                 (vector? v) [re-com/h-box
                              :justify :around
                              :children [[re-com/box :child (str k)] (draw-vector v)]]
                 :else [re-com/h-box
                        :justify :around
                        :children (into [[re-com/box :child (str k)]] 
                                        [[re-com/v-box :children (draw-map v)]])]))))

(defn render-tree [m]
  [re-com/v-box
   :width "150px"
   :children (draw-map m)])
