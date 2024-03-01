function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        decorateHandler: function() {
            return b
        }
    }), n("222007"), n("70102"), n("424973"), n("426094"), n("854508");
    var r = n("37983"),
        a = n("884691"),
        i = n("373589"),
        o = n("900255"),
        s = n("388588"),
        c = n("635246"),
        l = n("959708"),
        u = n("204527"),
        d = n.n(u);

    function p(e) {
        return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function v(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e) {
        var t = e.DecoratedComponent,
            n = e.createHandler,
            u = e.createMonitor,
            b = e.createConnector,
            x = e.registerHandler,
            S = e.containerDisplayName,
            w = e.getType,
            D = e.collect,
            C = e.options.arePropsEqual,
            k = void 0 === C ? i.shallowEqual : C,
            P = t.displayName || t.name || "Component",
            E = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && h(e, t)
                }(R, e);
                var d, S, C, E, T, M = (d = R, S = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                    } catch (e) {
                        return !1
                    }
                }(), function() {
                    var e, t = g(d);
                    if (S) {
                        var n = g(this).constructor;
                        e = Reflect.construct(t, arguments, n)
                    } else e = t.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === p(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
                        return v(e)
                    }(this, e)
                });

                function R(e) {
                    var t;
                    return ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, R), y(v(t = M.call(this, e)), "decoratedRef", (0, a.createRef)()), y(v(t), "handlerId", void 0), y(v(t), "manager", void 0), y(v(t), "handlerMonitor", void 0), y(v(t), "handlerConnector", void 0), y(v(t), "handler", void 0), y(v(t), "disposable", void 0), y(v(t), "currentType", void 0), y(v(t), "handleChange", function() {
                        var e = t.getCurrentState();
                        !(0, i.shallowEqual)(e, t.state) && t.setState(e)
                    }), t.disposable = new c.SerialDisposable, t.receiveProps(e), t.dispose(), t
                }
                return C = R, E = [{
                    key: "getHandlerId",
                    value: function() {
                        return this.handlerId
                    }
                }, {
                    key: "getDecoratedComponentInstance",
                    value: function() {
                        return (0, o.invariant)(this.decoratedRef.current, "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"), this.decoratedRef.current
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(e, t) {
                        return !k(e, this.props) || !(0, i.shallowEqual)(t, this.state)
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.disposable = new c.SerialDisposable, this.currentType = void 0, this.receiveProps(this.props), this.handleChange()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        !k(this.props, e) && (this.receiveProps(this.props), this.handleChange())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.dispose()
                    }
                }, {
                    key: "receiveProps",
                    value: function(e) {
                        this.handler && (this.handler.receiveProps(e), this.receiveType(w(e)))
                    }
                }, {
                    key: "receiveType",
                    value: function(e) {
                        if (!!this.handlerMonitor && !!this.manager && !!this.handlerConnector) {
                            if (e !== this.currentType) {
                                this.currentType = e;
                                var t, n, r = (n = 2, function(e) {
                                        if (Array.isArray(e)) return e
                                    }(t = x(e, this.handler, this.manager)) || function(e, t) {
                                        var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != a) {
                                            var i = [],
                                                o = !0,
                                                s = !1;
                                            try {
                                                for (a = a.call(e); !(o = (n = a.next()).done) && (i.push(n.value), !t || i.length !== t); o = !0);
                                            } catch (e) {
                                                s = !0, r = e
                                            } finally {
                                                try {
                                                    !o && null != a.return && a.return()
                                                } finally {
                                                    if (s) throw r
                                                }
                                            }
                                            return i
                                        }
                                    }(t, n) || function(e, t) {
                                        if (e) {
                                            if ("string" == typeof e) return f(e, t);
                                            var n = Object.prototype.toString.call(e).slice(8, -1);
                                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
                                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                                        }
                                    }(t, n) || function() {
                                        throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()),
                                    a = r[0],
                                    i = r[1];
                                this.handlerId = a, this.handlerMonitor.receiveHandlerId(a), this.handlerConnector.receiveHandlerId(a);
                                var o = this.manager.getMonitor().subscribeToStateChange(this.handleChange, {
                                    handlerIds: [a]
                                });
                                this.disposable.setDisposable(new c.CompositeDisposable(new c.Disposable(o), new c.Disposable(i)))
                            }
                        }
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.disposable.dispose(), this.handlerConnector && this.handlerConnector.receiveHandlerId(null)
                    }
                }, {
                    key: "getCurrentState",
                    value: function() {
                        return this.handlerConnector ? D(this.handlerConnector.hooks, this.handlerMonitor, this.props) : {}
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this;
                        return (0, r.jsx)(s.DndContext.Consumer, {
                            children: function(n) {
                                var a = n.dragDropManager;
                                return e.receiveDragDropManager(a), "undefined" != typeof requestAnimationFrame && requestAnimationFrame(function() {
                                    var t;
                                    return null === (t = e.handlerConnector) || void 0 === t ? void 0 : t.reconnect()
                                }), (0, r.jsx)(t, Object.assign({}, e.props, e.getCurrentState(), {
                                    ref: (0, l.isRefable)(t) ? e.decoratedRef : null
                                }), void 0)
                            }
                        }, void 0)
                    }
                }, {
                    key: "receiveDragDropManager",
                    value: function(e) {
                        if (void 0 === this.manager)(0, o.invariant)(void 0 !== e, "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context", P, P), void 0 !== e && (this.manager = e, this.handlerMonitor = u(e), this.handlerConnector = b(e.getBackend()), this.handler = n(this.handlerMonitor, this.decoratedRef))
                    }
                }], m(C.prototype, E), T && m(C, T), R
            }(a.Component);
        return y(E, "DecoratedComponent", t), y(E, "displayName", "".concat(S, "(").concat(P, ")")), d(E, t)
    }
}