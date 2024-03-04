function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("222007");
    var i, s = n("614276"),
        r = n("398183");
    i = class {
        start() {
            this.listeningUsers.clear(), this.listening.reset(), this.speaking.reset(), this.participation.reset(), this.connected.reset(), this.connected.start(), this.connection.on(s.BaseConnectionEvent.Speaking, (e, t, n) => {
                this.userId === e ? this.onSpeaking(0 !== t) : this.onListening(0 !== t, e)
            })
        }
        onSpeaking(e) {
            e ? (this.speaking.start(), this.participation.start()) : (this.speaking.stop(), !this.listening.isRunning() && this.participation.stop())
        }
        onListening(e, t) {
            e ? (this.listeningUsers.add(t), this.listening.start(), this.participation.start()) : this.listeningUsers.delete(t) && 0 === this.listeningUsers.size && (this.listening.stop(), !this.speaking.isRunning() && this.participation.stop())
        }
        stop() {
            this.speaking.stop(), this.listening.stop(), this.participation.stop(), this.connected.stop()
        }
        getDurationStats() {
            return {
                duration_listening_ms: this.listening.elapsed().asMilliseconds(),
                duration_speaking_ms: this.speaking.elapsed().asMilliseconds(),
                duration_participation_ms: this.participation.elapsed().asMilliseconds(),
                duration_connected_ms: this.connected.elapsed().asMilliseconds()
            }
        }
        constructor(e, t, n = r.TimeStampProducer) {
            this.userId = e, this.connection = t, this.timestampProducer = n, this.listeningUsers = new Set, this.listening = new r.StopWatch(this.timestampProducer), this.speaking = new r.StopWatch(this.timestampProducer), this.participation = new r.StopWatch(this.timestampProducer), this.connected = new r.StopWatch(this.timestampProducer)
        }
    }
}