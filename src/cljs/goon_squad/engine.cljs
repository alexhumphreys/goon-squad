(ns goon-squad.engine
  (:require [re-frame.core :as re-frame]
            [re-com.core :as re-com]))

;; --------------------
(defn stockpile
  [state turn]
  (- (:stockpile state) (:sell turn)))

(defn stock
  [state turn]
  (def sold (apply merge-with - [(:stock state) (:sell turn)]))
  (apply merge-with + [sold (:produce turn)])
)

(defn territories
  [state turn]
  (reduce merge (:territories state) (:territories turn))
)

(defn money
  [state constants turn]
  (def income (+ 
                (apply + (vals (apply merge-with * [(:price state) (:sell turn)])))
                (:money state)))
  (def districts (filter #(contains? (:territories turn) (:name %)) (:territories constants)))
  (def districts-cost (reduce + (map :cost districts)))
  (- income
    (apply + (vals (apply merge-with * [(:production-cost constants) (:produce turn)])))
    districts-cost))

(defn next-state
  [state constants turn]
  (assoc state 
         :stock (stock state turn)
         :territories (territories state turn)
         :money (money state constants turn)))
