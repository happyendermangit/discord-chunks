function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return l
        }
    });
    var n = i("884385");

    function l(e, t, i, l) {
        var a, u, r;
        let d = e.hasConnectedAccount(),
            s = (0, n.isSpotifyPlayable)(e),
            o = e.getTrack(),
            c = e.getSyncingWith(),
            f = e.getActivity(),
            _ = null !== (r = null !== (u = null == o ? void 0 : o.id) && void 0 !== u ? u : null == f ? void 0 : f.sync_id) && void 0 !== r ? r : e.getLastPlayedTrackId();
        return {
            user: i,
            activity: l,
            hasSpotifyAccount: d,
            canPlaySpotify: s,
            notPlayable: d && !s,
            syncingWithParty: (null == f ? void 0 : f.party) != null && (null == l ? void 0 : null === (a = l.party) || void 0 === a ? void 0 : a.id) === f.party.id,
            syncingWithUser: (null == c ? void 0 : c.userId) != null && (null == c ? void 0 : c.userId) === i.id,
            isCurrentUser: i.id === t.getId(),
            currentUserTrackId: _,
            playingSameTrack: null != _ && _ === (null == l ? void 0 : l.sync_id)
        }
    }
}