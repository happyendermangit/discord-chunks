function(e, t, n) {
    "use strict";
    let i;

    function r() {
        return null != i ? i : i = (async () => {
            let {
                default: e
            } = await n.e("20353").then(n.bind(n, "547478")), t = new e({
                params: {
                    logProcessStats: !1,
                    useSharedArrayBuffer: !1,
                    debugLogs: !1,
                    bufferOverflowMS: 200,
                    models: {
                        model8: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_8.kw",
                        model16: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_16.kw",
                        model32: "https://cdn.discordapp.com/assets/krisp_browser_models/v1.0.11_1/model_32.kw"
                    }
                }
            });
            return await t.init(), t
        })()
    }
    n.r(t), n.d(t, {
        getKrispSDK: function() {
            return r
        }
    })
}