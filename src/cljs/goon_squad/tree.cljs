(ns goon-squad.tree
    (:require [re-frame.core :as re-frame]
              [reagent.core :as reagent]
              [re-com.core :as re-com]))

;; --------------------
(def test-data 
  {:a 0
   :b {:c 4}
   :d {:e 3 :f 2}
   :g {:h {:i 1} }})

(def simple-test-data 
  {:a 0})

(defn render-leaf [k v]
  [re-com/h-box
    :gap "1em"
    :children [
      [re-com/box
        :child (str k)] 
      [re-com/box
        :child (str v)]]])

(defn draw-map [m]
  (foo m (fn [k v]
    (if (or (string? v) (number? v))
      [re-com/h-box
        :justify :around
        :children [[re-com/box
                    :child (str k)]
                 [re-com/box
                    :child (str v)]]]
      [re-com/h-box
          :justify :around
          :children (into [[re-com/box :child (str k)]] 
                          [[re-com/v-box :children (draw-map v)]])]))))

(defn render-tree []
  (def x )
  [re-com/v-box
        :width "150px"
        :children (draw-map test-data)])

(defn render-tree-sim []
 (def x [re-com/box
        :child (str "ghell")])
  (.log js/console x)
  x)

(defn foo [m f]
  (into [] (for [[k v] m] (f k v))))
