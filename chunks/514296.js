function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    }), r("808653"), r("424973");
    var u, n = r("407788"),
        i = r("792382");
    u = class e extends i.default {
        static fromServer(t) {
            let {
                products: r,
                logo: u,
                ...i
            } = t;
            return new e({
                ...super.fromServer(i),
                products: r.reduce((e, t) => {
                    let r = n.default.fromServer(t);
                    return 0 === r.items.length ? e : (e.push(r), e)
                }, []),
                logo: u
            })
        }
        constructor(e) {
            super(e), this.products = e.products, this.logo = e.logo
        }
    }
}