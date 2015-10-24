(ns goon-squad.db
  (:require [schema.core :as s :include-macros true]))

(def starting-values
 {:price {:green 10
          :white 50}
  :stock {:green 10
          :white 1}
  :police 0
  :production {:green 1
               :white 0}
  :territories (set [])
  :money 310})

(def default-db
  {:state starting-values
   :constants {:commodities [:green
                             :white]
               :production-cost {:green 7
                                 :white 25}
               :increase-production-cost {:green 20
                                          :white 40}
               :territories [{:name :district1
                              :cost 200
                              :locations (set [:school])
                              :production {:green 10
                                           :white 2}}
                             {:name :district2
                              :cost 500
                              :production {:green 4
                                           :white 12}
                              :locations (set [:school :cbd])}]}
   :all-turns []
   :history [starting-values]})

(defn positive []
  (s/pred #(>= % 0) 'gt-0))

(defn pos-int []
  (s/both s/Int (positive %)))

(def goods {:green (pos-int)
           :white (pos-int)})

(def state-schema 
  {:police s/Int
   :price goods
   :stock goods
   :production goods
   :territories s/Any
   :money (pos-int)})

(def turn-schema 
  ;;{:sell s/Int}
  s/Any
  )

(def schema 
  {:state state-schema
   (s/optional-key :all-turns) [turn-schema]
   :constants s/Any
   (s/optional-key :active-panel) s/Keyword
   :history [state-schema]})
