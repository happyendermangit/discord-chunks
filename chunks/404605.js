function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var l, i = n("627445"),
        a = n.n(i);
    l = class {
        setExporter(e) {
            this.exporter = e
        }
        export (e) {
            a(null != this.exporter, "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.");
            let t = this.canvas.getCanvasForExport();
            return a(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e)
        }
        constructor(e, t) {
            this.canvas = e, this.exporter = t
        }
    }
}