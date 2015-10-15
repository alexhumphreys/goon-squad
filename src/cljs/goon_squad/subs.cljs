(ns goon-squad.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :world
 (fn [db]
   (reaction (:world @db))))

(re-frame/register-sub
 :history
 (fn [db]
   (reaction (:history @db))))

(re-frame/register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))
