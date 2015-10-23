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
  (def sold (apply merge-with - [(:stock world) (:sell turn)]))
  (apply merge-with + [sold (:produce turn)])
)

(defn territories
  [world turn]
  (reduce merge (:territories world) (:territories turn))
)

(defn money
  [world turn]
  (def income (+ 
                (apply + (vals (apply merge-with * [(:price world) (:sell turn)])))
                (:money world)))
  (- income
    (apply + (vals (apply merge-with * [(:production-cost world) (:produce turn)])))))

(defn next-state
  [world turn]
  (assoc world 
         :stock (stock world turn)
         :territories (territories world turn)
         :money (money world turn)))
