(ns goon-squad.core-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [goon-squad.core :as core]))

(deftest fake-test
  (testing "fake description"
    (is (= 1 2))))
