(ns goon-squad.engine
    (:require [re-frame.core :as re-frame]
              [re-com.core :as re-com]))

;; --------------------
(def world
  {:a "world"})

(defn stockpile
  [world turn]
  (.log js/console world)
  (- (:stockpile world) (:sell turn)))

(defn next-state
  [world turn]
  (assoc world 
    :stockpile (stockpile world turn)))
