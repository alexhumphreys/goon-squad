(ns goon-squad.db)

(def default-db
  {:world 
   {:price 10
    :stockpile 10
    :police 0
    :production 1
    :money 0 }
   :history [
             {:price 10
              :stockpile 10
              :police 0
              :production 1
              :money 0 }
             {:price 10
              :stockpile 9
              :police 1
              :production 1
              :money 10 }]})
