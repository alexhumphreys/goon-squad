(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [goon-squad.core]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/goon-squad.core.mount-root (apply js/goon-squad.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'goon-squad.core/mount-root' is missing"))), :build-id "dev"})

