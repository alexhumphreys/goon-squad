(ns goon-squad.db
  (:require [schema.core :as s :include-macros true]))

(def starting-values
 {:price 10
    :stockpile 10
    :stock {:green 10
            :white 0}
    :police 0
    :production 1
    :money 0})

(def default-db
  {:world starting-values
   :commodities [:green
                 :white]
   :territories [:school {:cost 200
                          :production {:green 10
                                       :white 2}}
                 :downtown {:cost 500
                            :production {:green 4
                                         :white 12}}]
   :history [starting-values]})

(defn positive []
  (s/pred #(>= % 0) 'gt-0))

(defn pos-int []
  (s/both s/Int (positive %)))

(def world-schema 
  {:price s/Int
   :stockpile (pos-int)
   :police s/Int
   :stock s/Any
   :production s/Int
   :money (pos-int)})

(def turn-schema 
  {:sell s/Int})

(def schema 
  {:world world-schema
   (s/optional-key :all-turns) [turn-schema]
   :commodities s/Any
   :territories s/Any
   (s/optional-key :active-panel) s/Keyword
   :history [world-schema]})
