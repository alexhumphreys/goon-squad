(ns goon-squad.engine
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]))

;; --------------------
(def world
  {:a "world"})

(defn stockpile
  [world turn]
  (- (:stockpile world) (:sell turn)))

(defn money
  [world turn]
  (+ (* (:price world) (:sell turn)) (:money world)))

(defn next-state
  [world turn]
  (assoc world 
         :stockpile (stockpile world turn)
         :money (money world turn)))
