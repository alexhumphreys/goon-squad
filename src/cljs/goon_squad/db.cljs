(ns goon-squad.db
  (:require [schema.core :as s :include-macros true]))

(def default-db
  {:world 
   {:price 10
    :stockpile 10
    :police 0
    :production 1
    :money 0 }
   :all-turns []
   :history [
             {:price 10
              :stockpile 10
              :police 0
              :production 1
              :money 0 }]})


(defn positive []
  (s/pred #(>= % 0) 'gt-0))

(defn pos-int []
  (s/both s/Int (positive %)))

(def world-schema 
  {:price s/Int
    :stockpile (pos-int)
    :police s/Int
    :production s/Int
    :money (pos-int) })

(def turn-schema 
  {:sell s/Int})

(def schema 
  {:world world-schema
   :all-turns s/Any
   (s/optional-key :active-panel) s/Keyword
   :history [world-schema]})
