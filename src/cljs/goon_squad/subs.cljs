(ns goon-squad.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :state
 (fn [db]
   (reaction (:state @db))))

(re-frame/register-sub
 :history
 (fn [db]
   (reaction (:history @db))))

(re-frame/register-sub
 :constants
 (fn [db]
   (reaction (:constants @db))))

(re-frame/register-sub
 :all-turns
 (fn [db]
   (reaction (:all-turns @db))))

(re-frame/register-sub
 :active-panel
 (fn [db _]
   (reaction (:active-panel @db))))
