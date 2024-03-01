function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getDefaultLibraryApplicationAction: function() {
            return a
        }
    });
    var l = n("602043"),
        r = n("49111");

    function a(e, t, n) {
        let a = t.getState(e.id, e.branchId),
            i = n.getQueuePosition(e.id, e.branchId),
            u = n.paused;
        if (null != a) {
            if (null == i || -1 === i) switch (a.type) {
                case r.LocalDispatchApplicationStates.INSTALLING:
                    return r.LibraryApplicationActions.INSTALL;
                case r.LocalDispatchApplicationStates.UPDATING:
                case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                    return r.LibraryApplicationActions.UPDATE
            }
            switch (a.type) {
                case r.LocalDispatchApplicationStates.INSTALLING:
                case r.LocalDispatchApplicationStates.UPDATING:
                case r.LocalDispatchApplicationStates.UPDATE_REQUIRED:
                case r.LocalDispatchApplicationStates.REPAIRING:
                    if (i > 0) return r.LibraryApplicationActions.MOVE_UP;
                    if (u) return r.LibraryApplicationActions.RESUME;
                    return r.LibraryApplicationActions.PAUSE;
                case r.LocalDispatchApplicationStates.UP_TO_DATE:
                    return r.LibraryApplicationActions.PLAY;
                case r.LocalDispatchApplicationStates.UNINSTALLING:
                    return null
            }
        }
        return null != i && i > 0 ? r.LibraryApplicationActions.MOVE_UP : (0, l.isSupportedPlatform)() ? r.LibraryApplicationActions.INSTALL : null
    }
}