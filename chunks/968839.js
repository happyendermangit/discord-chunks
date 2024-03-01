function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        a: function() {
            return o
        }
    });
    var n = r("193809");
    r("70102"), r("222007");
    var i = r("846033"),
        o = class {
            get dotLottie() {
                return this._dotLottie
            }
            get animationsMap() {
                return this._animationsMap
            }
            get themeMap() {
                return this._themeMap
            }
            get stateMachinesMap() {
                return this._stateMachinesMap
            }
            get manifest() {
                return this._manifest
            }
            async loadFromUrl(e) {
                let t = await fetch(e, {
                    method: "GET",
                    mode: "cors"
                });
                if (!t.ok) throw Error("Failed to load dotLottie from ".concat(e, " with status ").concat(t.status));
                let r = t.headers.get("content-type");
                if (null != r && r.includes("application/json")) {
                    let r = await t.json();
                    if (!(0, i.l)(r)) throw Error("Invalid lottie JSON at ".concat(e));
                    let n = (0, i.k)(e);
                    this._animationsMap.set(n, r);
                    this._manifest = {
                        activeAnimationId: n,
                        animations: [{
                            id: n
                        }]
                    }
                } else {
                    this._dotLottie = await (0, i.c)(await t.arrayBuffer());
                    let e = await (0, i.b)(this._dotLottie);
                    if (!e) throw Error("Manifest not found");
                    this._manifest = e
                }
            }
            loadFromLottieJSON(e) {
                if (!(0, i.l)(e)) throw Error("Invalid lottie JSON");
                let t = "my-animation";
                this._animationsMap.set(t, e);
                this._manifest = {
                    activeAnimationId: t,
                    animations: [{
                        id: t
                    }]
                }
            }
            async loadFromArrayBuffer(e) {
                this._dotLottie = await (0, i.c)(e);
                let t = await (0, i.b)(this._dotLottie);
                if (!t) throw Error("Manifest not found");
                this._manifest = t
            }
            async getAnimation(e) {
                if (this._animationsMap.get(e)) return this._animationsMap.get(e);
                if (!this._dotLottie) return;
                let t = await (0, i.d)(this._dotLottie, e, {
                    inlineAssets: !0
                });
                return t && this._animationsMap.set(e, t), t
            }
            async getTheme(e) {
                if (this._themeMap.get(e)) return this._themeMap.get(e);
                if (!this._dotLottie) return;
                let t = await (0, i.e)(this._dotLottie, e);
                return t && this._themeMap.set(e, t), t
            }
            async getStateMachines() {
                if (!this._dotLottie) return;
                let e = await (0, i.f)(this._dotLottie);
                for (let t in e)
                    if (t) {
                        let r = e[t];
                        if (r) {
                            let e = JSON.parse(r);
                            if (e) {
                                let t = e.descriptor.id;
                                this._stateMachinesMap.get(t) || this._stateMachinesMap.set(t, e)
                            }
                        }
                    } return Array.from(this._stateMachinesMap.values())
            }
            async getStateMachine(e) {
                if (this._stateMachinesMap.get(e)) return this._stateMachinesMap.get(e);
                if (!this._dotLottie) return;
                let t = await (0, i.g)(this._dotLottie, e);
                return t && this._stateMachinesMap.set(t.descriptor.id, t), t
            }
            constructor() {
                (0, n._)(this, "_dotLottie", void 0), (0, n._)(this, "_animationsMap", new Map), (0, n._)(this, "_themeMap", new Map), (0, n._)(this, "_stateMachinesMap", new Map), (0, n._)(this, "_manifest", void 0)
            }
        }
}