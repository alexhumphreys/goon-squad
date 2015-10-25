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

(defn increase-production-cost [constants turn]
    (apply + (vals (apply merge-with * [(:increase-production-cost constants) (:increase-production turn)]))))

(defn production [state turn]
  (apply merge-with + [(:production state) (:increase-production turn)]))

(defn turn-costs [constants turn]
  (def districts (filter #(contains? (:territories turn) (:name %)) (:territories constants)))
  (def districts-cost (reduce + (map :cost districts)))
  (+ districts-cost
     (apply + (vals (apply merge-with * [(:production-cost constants) (:produce turn)])))
     (increase-production-cost constants turn)))

(defn turn-income [state turn]
  (apply + (vals (apply merge-with * [(:price state) (:sell turn)]))))

(defn money
  [state constants turn]
  (def income (+ (turn-income state turn) (:money state)))
  (- income (turn-costs constants turn)))

(defn next-state
  [state constants turn]
  (assoc state 
         :stock (stock state turn)
         :territories (territories state turn)
         :production (production state turn)
         :money (money state constants turn)))
