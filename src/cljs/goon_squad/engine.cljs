(ns goon-squad.engine
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]))

;; --------------------
(def world
  {:a "world"})

(defn stockpile
  [world turn]
  (- (:stockpile world) (:sell turn)))

(defn stock
  [world turn]
  (apply merge-with - [(:stock world) (:sell turn)]))

(defn money
  [world turn]
  (+ 
    (apply + (vals (apply merge-with * [(:price world) (:sell turn)])))
    (:money world)))

(defn next-state
  [world turn]
  (assoc world 
         :stock (stock world turn)
         :money (money world turn)))
