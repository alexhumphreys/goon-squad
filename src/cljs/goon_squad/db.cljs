(ns goon-squad.db
  (:require [schema.core :as s :include-macros true]))

(def starting-values
 {:price {:green 10
          :white 50}
  :stockpile 10
  :stock {:green 10
          :white 1}
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
   :all-turns []
   :history [starting-values]})

(defn positive []
  (s/pred #(>= % 0) 'gt-0))

(defn pos-int []
  (s/both s/Int (positive %)))

(def world-schema 
  {:price {:green s/Int
           :white s/Int}
   :stockpile (pos-int)
   :police s/Int
   :stock {:green (pos-int)
           :white (pos-int)}
   :production s/Int
   :money (pos-int)})

(def turn-schema 
  ;;{:sell s/Int}
  s/Any
  )

(def schema 
  {:world world-schema
   (s/optional-key :all-turns) [turn-schema]
   :commodities s/Any
   :territories s/Any
   (s/optional-key :active-panel) s/Keyword
   :history [world-schema]})
