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

(defn render-tree-long [t]
  (into []
  (for [[k v] test-data]
    (if (or (instance? String v) (instance? Long v))
      (render-leaf k v)
      (render-tree v)))))

(defn render-tree []
  (def x (foo test-data (fn [k v]
    [re-com/box
        :child (str k)])))
  (.log js/console x)
  [re-com/h-box
        :children x])

(defn render-tree-sim []
 (def x [re-com/box
        :child (str "ghell")])
  (.log js/console x)
  x)

(defn foo [m f]
  (into [] (for [[k v] m] (f k v))))
