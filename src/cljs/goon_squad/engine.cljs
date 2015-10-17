(ns goon-squad.engine
    (:require [re-frame.core :as re-frame]
              [re-com.core :as re-com]))

;; --------------------
(def world
  {:a "world"})

(defn stockpile
  [world actions]
  4)

(defn next-state
  [world turn]
  (.log js/console world)
  world)
