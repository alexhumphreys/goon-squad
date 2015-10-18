(ns goon-squad.util)

;; --------------------
(defn map-map [m f]
  (into [] (for [[k v] m] (f k v))))
