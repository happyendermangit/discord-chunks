function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        ElementPool: function() {
            return s
        }
    }), r("424973");
    class s {
        getElement() {
            return 0 === this._elements.length ? this._createElement() : this._elements.pop()
        }
        poolElement(e) {
            this._cleanElement(e), this._elements.push(e)
        }
        clearPool() {
            this._elements.length = 0
        }
        constructor(e, t) {
            this._elements = [], this._createElement = e, this._cleanElement = t
        }
    }
}