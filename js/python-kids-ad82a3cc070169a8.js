(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2771], {
        87619: function (e, s, t) {
            "use strict";
            t(35797);
            var r = t(64749),
                n = t(50029),
                i = t(87794),
                a = t.n(i),
                o = t(67294),
                c = t(63282),
                l = t(32670),
                _ = (t(38973), t(15034)),
                u = t(23838),
                d = t(11163),
                m = t(9669),
                h = t.n(m),
                p = t(85893),
                f = "https://learn.maxima.school/";
            s.Z = function (e) {
                var s = e.modal,
                    t = (e.titleForForm, (0, u.Z)("form")),
                    i = s.showFormModal ? "modal modal-active" : "modal modal-disable",
                    m = (0, o.useState)(!1),
                    x = m[0],
                    j = m[1],
                    y = (0, o.useState)(""),
                    b = y[0],
                    v = y[1],
                    g = (0, o.useState)(""),
                    N = g[0],
                    w = g[1],
                    k = (0, o.useState)(""),
                    C = k[0],
                    O = k[1],
                    P = (0, o.useState)(""),
                    S = P[0],
                    T = P[1],
                    E = (0, o.useState)("Telegram"),
                    I = E[0],
                    M = (E[1], (0, o.useState)(!0)),
                    D = M[0],
                    Z = M[1],
                    A = (0, o.useState)(""),
                    F = A[0],
                    L = A[1],
                    G = (0, o.useState)(""),
                    q = G[0],
                    V = G[1],
                    R = (0, o.useState)(!1),
                    W = R[0],
                    U = R[1],
                    B = (0, o.useState)([]),
                    K = B[0],
                    X = B[1],
                    Y = (0, o.useState)(""),
                    z = Y[0],
                    H = Y[1],
                    J = (0, d.useRouter)(),
                    Q = (0, o.useState)({
                        title: ""
                    }),
                    $ = Q[0],
                    ee = Q[1],
                    se = (0, o.useState)({
                        location: ""
                    }),
                    te = se[0],
                    re = se[1];
                (0, o.useEffect)((function () {
                    re(window), ee(document), (0, c.ZP)("getClientID", (function (e) {
                        return V(e)
                    }))
                }), []), (0, o.useEffect)((function () {
                    Z(!(b && N && C && S && z)), L("")
                }), [b, N, C, S, z]);
                var ne = function () {
                        var e = (0, n.Z)(a().mark((function e() {
                            var s, r, n;
                            return a().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = {
                                            method: "GET",
                                            redirect: "follow"
                                        }, e.next = 3, fetch("https://json.geoiplookup.io/", s).then((function (e) {
                                            return e.json()
                                        })).then((function (e) {
                                            return e.ip
                                        }));
                                    case 3:
                                        r = e.sent, b && C && I && (n = [{
                                            source_name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + K.find((function (e) {
                                                return e.id === z
                                            })).name + " \u0441 " + te.location.pathname,
                                            source_uid: "a1fee7c0fc436088e64ba2e8822ba2b3",
                                            pipeline_id: 4035451,
                                            _embedded: {
                                                leads: [{
                                                    name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + K.find((function (e) {
                                                        return e.id === z
                                                    })).name + " \u0441 " + te.location.pathname,
                                                    visitor_uid: "5692210d-58d0-468c-acb2-dce7f93eef87",
                                                    custom_fields_values: [{
                                                        field_id: 956603,
                                                        values: [{
                                                            value: I
                                                        }]
                                                    }, , {
                                                        field_id: 958873,
                                                        values: [{
                                                            value: q
                                                        }]
                                                    }, {
                                                        field_id: 958471,
                                                        values: [{
                                                            value: r
                                                        }]
                                                    }],
                                                    _embedded: {
                                                        tags: [{
                                                            name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f ".concat("/python-kids" === window.location.pathname ? "KIDS" : "")
                                                        }]
                                                    }
                                                }],
                                                contacts: [{
                                                    name: b,
                                                    custom_fields_values: [{
                                                        field_id: 731805,
                                                        values: [{
                                                            value: C
                                                        }]
                                                    }, {
                                                        field_id: 731807,
                                                        values: [{
                                                            value: S
                                                        }]
                                                    }, {
                                                        field_id: 880119,
                                                        values: [{
                                                            value: !0
                                                        }]
                                                    }]
                                                }],
                                                companies: [{}]
                                            },
                                            metadata: {
                                                form_id: "a1fee7c0fc436088e64ba2e8822ba2b3ewrw",
                                                form_sent_at: 0,
                                                form_name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + K.find((function (e) {
                                                    return e.id === z
                                                })).name + " \u0441 " + te.location.pathname,
                                                form_page: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + K.find((function (e) {
                                                    return e.id === z
                                                })).name + " \u0441 " + te.location.pathname
                                            }
                                        }], new URL(te.location.href).searchParams.forEach((function (e, s) {
                                            n[0]._embedded.leads[0].custom_fields_values.push({
                                                field_id: l.T.find((function (e) {
                                                    return e.name === s
                                                })).id,
                                                values: [{
                                                    value: e
                                                }]
                                            })
                                        })), j(!0), fetch("/api/amo", {
                                            method: "POST",
                                            body: JSON.stringify(n),
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            return e.json()
                                        })).then((function (e) {
                                            "/fnd_promo" === window.location.pathname && fetch("/api/amo/accept", {
                                                method: "POST",
                                                body: JSON.stringify({
                                                    uid: e._embedded.unsorted[0].uid,
                                                    status: 42984433
                                                }),
                                                headers: {
                                                    "Content-Type": "application/json"
                                                }
                                            }), j(!1), (0, c.ZP)("reachGoal", "send-choice"), (0, c.ZP)("reachGoal", "registratcia"), (0, c.ZP)("reachGoal", "send_form"), t("event", "form", {
                                                event_category: "event",
                                                event_label: "send_form"
                                            }), t("send_form"), t("send-choice")
                                        })).catch((function (e) {
                                            return console.log("error", e)
                                        })));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    ie = function () {
                        var e = (0, n.Z)(a().mark((function e() {
                            return a().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        j(!0), h().post(f + "/temp-user", {
                                            firstName: b,
                                            lastName: N,
                                            phone: C,
                                            email: S,
                                            courseId: z
                                        }, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            j(!1), U(!0), ne()
                                        })).catch((function (e) {
                                            j(!1), e.response.data.message.includes("email") && L("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"), e.response.data.message.includes("phone") && L("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!")
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return (0, o.useEffect)((function () {
                    h().get(f + "/trial-courses/by-partner/".concat("/python-kids" === window.location.pathname ? "493" : "4")).then((function (e) {
                        return X(e.data.data)
                    }))
                }), [te, $]), (0, p.jsx)("div", {
                    className: i,
                    onClick: function (e) {
                        e.target.classList.contains("modal-active") && (s.setShowFormModal(!1), document.body.classList.remove("overflowCheck"))
                    },
                    children: (0, p.jsxs)("div", {
                        className: "modal__body modal__form",
                        id: "modalForm",
                        children: [(0, p.jsxs)("div", {
                            className: "modal__form__wrp",
                            children: [(0, p.jsx)("img", {
                                src: "/images/Frame.webp",
                                alt: "",
                                className: "form__img"
                            }), W ? (0, p.jsxs)("div", {
                                className: "form__success",
                                children: [(0, p.jsx)("img", {
                                    src: "/success.svg",
                                    alt: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430"
                                }), (0, p.jsx)("h3", {
                                    children: "\u0423\u0441\u043f\u0435\u0448\u043d\u043e! \u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0439\u0442\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443"
                                }), (0, p.jsx)("button", {
                                    className: "btn",
                                    onClick: function () {
                                        J.push("https://learn.maxima.school/")
                                    },
                                    children: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443"
                                })]
                            }) : (0, p.jsxs)(p.Fragment, {
                                children: [(0, p.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                                    value: N,
                                    onInput: function (e) {
                                        return w(e.target.value)
                                    }
                                }), (0, p.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0418\u043c\u044f",
                                    value: b,
                                    onInput: function (e) {
                                        return v(e.target.value)
                                    }
                                }), (0, p.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "Email",
                                    value: S,
                                    onInput: function (e) {
                                        return T(e.target.value)
                                    }
                                }), (0, p.jsxs)("label", {
                                    htmlFor: "phoneInput",
                                    style: {
                                        width: "100%"
                                    },
                                    children: [(0, p.jsx)("span", {
                                        className: "visually-hidden",
                                        children: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d"
                                    }), (0, p.jsx)(_.ZP, {
                                        international: !0,
                                        countryCallingCodeEditable: !1,
                                        defaultCountry: "RU",
                                        value: C,
                                        onChange: O,
                                        countries: ["RU", "BY", "KG", "KZ"]
                                    })]
                                }), (0, p.jsx)(r.Z, {
                                    defaultValue: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441",
                                    style: {
                                        width: "100%"
                                    },
                                    onChange: function (e) {
                                        H(e)
                                    },
                                    options: K.map((function (e) {
                                        return {
                                            value: e.id,
                                            label: e.name
                                        }
                                    }))
                                }), (0, p.jsx)("div", {
                                    style: {
                                        color: "red"
                                    },
                                    children: F || null
                                }), (0, p.jsx)("button", {
                                    disabled: D,
                                    className: "form__btn",
                                    onClick: function () {
                                        document.querySelector(".form__input").style.borderColor = "#583E90", document.querySelector(".PhoneInputInput").style.borderColor = "#583E90", ie()
                                    },
                                    children: x ? (0, p.jsxs)("div", {
                                        className: "lds-ellipsis",
                                        children: [(0, p.jsx)("div", {}), (0, p.jsx)("div", {}), (0, p.jsx)("div", {}), (0, p.jsx)("div", {})]
                                    }) : (0, p.jsx)(p.Fragment, {
                                        children: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"
                                    })
                                })]
                            })]
                        }), (0, p.jsx)("div", {
                            className: "modal-form-close-section",
                            onClick: function () {
                                document.body.classList.remove("overflowCheck"), s.setShowFormModal(!1)
                            },
                            children: "X"
                        })]
                    })
                })
            }
        },
        32323: function (e, s, t) {
            "use strict";
            var r = t(930);

            function n(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    s && (r = r.filter((function (s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function i(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? n(Object(t), !0).forEach((function (s) {
                        r(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : n(Object(t)).forEach((function (s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }
            s.default = function (e, s) {
                var t = a.default,
                    r = {
                        loading: function (e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? r.loader = function () {
                    return e
                } : "function" === typeof e ? r.loader = e : "object" === typeof e && (r = i(i({}, r), e));
                var n = r = i(i({}, r), s);
                0;
                if (n.suspense) return t(n);
                r.loadableGenerated && delete(r = i(i({}, r), r.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof r.ssr) {
                    if (!r.ssr) return delete r.ssr, c(t, r);
                    delete r.ssr
                }
                return t(r)
            };
            o(t(67294));
            var a = o(t(82271));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e, s) {
                return delete s.webpack, delete s.modules, e(s)
            }
        },
        65066: function (e, s, t) {
            "use strict";
            var r;
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.LoadableContext = void 0;
            var n = ((r = t(67294)) && r.__esModule ? r : {
                default: r
            }).default.createContext(null);
            s.LoadableContext = n
        },
        82271: function (e, s, t) {
            "use strict";
            var r = t(33227),
                n = t(88361),
                i = t(930);

            function a(e, s) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    s && (r = r.filter((function (s) {
                        return Object.getOwnPropertyDescriptor(e, s).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function o(e) {
                for (var s = 1; s < arguments.length; s++) {
                    var t = null != arguments[s] ? arguments[s] : {};
                    s % 2 ? a(Object(t), !0).forEach((function (s) {
                        i(e, s, t[s])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function (s) {
                        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s))
                    }))
                }
                return e
            }

            function c(e, s) {
                var t = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!t) {
                    if (Array.isArray(e) || (t = function (e, s) {
                            if (!e) return;
                            if ("string" === typeof e) return l(e, s);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, s)
                        }(e)) || s && e && "number" === typeof e.length) {
                        t && (e = t);
                        var r = 0,
                            n = function () {};
                        return {
                            s: n,
                            n: function () {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function (e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0,
                    o = !1;
                return {
                    s: function () {
                        t = t.call(e)
                    },
                    n: function () {
                        var e = t.next();
                        return a = e.done, e
                    },
                    e: function (e) {
                        o = !0, i = e
                    },
                    f: function () {
                        try {
                            a || null == t.return || t.return()
                        } finally {
                            if (o) throw i
                        }
                    }
                }
            }

            function l(e, s) {
                (null == s || s > e.length) && (s = e.length);
                for (var t = 0, r = new Array(s); t < s; t++) r[t] = e[t];
                return r
            }
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var _, u = (_ = t(67294)) && _.__esModule ? _ : {
                    default: _
                },
                d = t(82021),
                m = t(65066);
            var h = [],
                p = [],
                f = !1;

            function x(e) {
                var s = e(),
                    t = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return t.promise = s.then((function (e) {
                    return t.loading = !1, t.loaded = e, e
                })).catch((function (e) {
                    throw t.loading = !1, t.error = e, e
                })), t
            }
            var j = function () {
                function e(s, t) {
                    r(this, e), this._loadFn = s, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return n(e, [{
                    key: "promise",
                    value: function () {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function () {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var s = this._res,
                            t = this._opts;
                        s.loading && ("number" === typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function () {
                            e._update({
                                pastDelay: !0
                            })
                        }), t.delay)), "number" === typeof t.timeout && (this._timeout = setTimeout((function () {
                            e._update({
                                timedOut: !0
                            })
                        }), t.timeout))), this._res.promise.then((function () {
                            e._update({}), e._clearTimeouts()
                        })).catch((function (s) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function (e) {
                        this._state = o(o({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function (e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function () {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function () {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function (e) {
                        var s = this;
                        return this._callbacks.add(e),
                            function () {
                                s._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function y(e) {
                return function (e, s) {
                    var t = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null,
                        suspense: !1
                    }, s);
                    t.suspense && (t.lazy = u.default.lazy(t.loader));
                    var r = null;

                    function n() {
                        if (!r) {
                            var s = new j(e, t);
                            r = {
                                getCurrentValue: s.getCurrentValue.bind(s),
                                subscribe: s.subscribe.bind(s),
                                retry: s.retry.bind(s),
                                promise: s.promise.bind(s)
                            }
                        }
                        return r.promise()
                    }
                    if (!f && !t.suspense) {
                        var i = t.webpack ? t.webpack() : t.modules;
                        i && p.push((function (e) {
                            var s, t = c(i);
                            try {
                                for (t.s(); !(s = t.n()).done;) {
                                    var r = s.value;
                                    if (-1 !== e.indexOf(r)) return n()
                                }
                            } catch (a) {
                                t.e(a)
                            } finally {
                                t.f()
                            }
                        }))
                    }
                    var a = t.suspense ? function (e, s) {
                        return u.default.createElement(t.lazy, o(o({}, e), {}, {
                            ref: s
                        }))
                    } : function (e, s) {
                        n();
                        var i = u.default.useContext(m.LoadableContext),
                            a = d.useSubscription(r);
                        return u.default.useImperativeHandle(s, (function () {
                            return {
                                retry: r.retry
                            }
                        }), []), i && Array.isArray(t.modules) && t.modules.forEach((function (e) {
                            i(e)
                        })), u.default.useMemo((function () {
                            return a.loading || a.error ? u.default.createElement(t.loading, {
                                isLoading: a.loading,
                                pastDelay: a.pastDelay,
                                timedOut: a.timedOut,
                                error: a.error,
                                retry: r.retry
                            }) : a.loaded ? u.default.createElement(function (e) {
                                return e && e.__esModule ? e.default : e
                            }(a.loaded), e) : null
                        }), [e, a])
                    };
                    return a.preload = function () {
                        return !t.suspense && n()
                    }, a.displayName = "LoadableComponent", u.default.forwardRef(a)
                }(x, e)
            }

            function b(e, s) {
                for (var t = []; e.length;) {
                    var r = e.pop();
                    t.push(r(s))
                }
                return Promise.all(t).then((function () {
                    if (e.length) return b(e, s)
                }))
            }
            y.preloadAll = function () {
                return new Promise((function (e, s) {
                    b(h).then(e, s)
                }))
            }, y.preloadReady = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function (s) {
                    var t = function () {
                        return f = !0, s()
                    };
                    b(p, e).then(t, t)
                }))
            }, window.__NEXT_PRELOADREADY = y.preloadReady;
            var v = y;
            s.default = v
        },
        42237: function (e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function () {
                    return x
                }
            });
            var r = t(46096),
                n = t(13168),
                i = t(85746),
                a = t(67294),
                o = t(2962),
                c = t(5152),
                l = t(25675),
                _ = t.n(l),
                u = t(99902),
                d = t.n(u),
                m = t(63282),
                h = t(87619),
                p = t(85893),
                f = (0, c.default)((function () {
                    return t.e(6813).then(t.bind(t, 16813))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return [16813]
                        }
                    }
                });

            function x() {
                var e = (0, a.useState)(!1),
                    s = e[0],
                    t = e[1],
                    c = (0, a.useState)(!0),
                    l = c[0],
                    u = c[1],
                    x = (0, a.useState)(0),
                    j = x[0],
                    y = x[1],
                    b = (0, a.useState)(!1),
                    v = b[0],
                    g = b[1],
                    N = function (e) {
                        return y(e)
                    },
                    w = (0, a.useState)(2),
                    k = w[0],
                    C = w[1];
                return (0, a.useEffect)((function () {
                    document.querySelectorAll(".header__wrp a").forEach((function (e) {
                        return e.classList.remove("active-link")
                    })), document.querySelector("#maximaKids").classList.add("active-link"), window.innerWidth <= 600 && u(!1), window.innerWidth <= 910 && C(1), window.innerWidth <= 1200 && window.innerWidth >= 911 && C(2)
                }), []), (0, p.jsxs)("div", {
                    className: "",
                    children: [(0, p.jsx)(o.PB, {
                        title: "\u041a\u0443\u0440\u0441\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 Python \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439 \u0438 \u043f\u043e\u0434\u0440\u043e\u0441\u0442\u043a\u043e\u0432 \u043e\u0442 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 IT Школа WinPoWer",
                        description: "\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u0438 \u0441\u0442\u0430\u0440\u0448\u0435\u0433\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u043d\u0430 \u043a\u0443\u0440\u0441\u044b \u043e\u0442 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 \u043f\u0440\u0438 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438.",
                        canonical: "https://maxima.school/python-kids",
                        openGraph: {
                            title: "\u041a\u0443\u0440\u0441\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 Python \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439 \u0438 \u043f\u043e\u0434\u0440\u043e\u0441\u0442\u043a\u043e\u0432 \u043e\u0442 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 IT Школа WinPoWer",
                            description: "\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u0438 \u0441\u0442\u0430\u0440\u0448\u0435\u0433\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u043d\u0430 \u043a\u0443\u0440\u0441\u044b \u043e\u0442 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 \u043f\u0440\u0438 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438."
                        }
                    }), (0, p.jsx)(r.Z, {}), (0, p.jsx)("section", {
                        className: "banner-kids",
                        children: (0, p.jsxs)("div", {
                            className: "container banner-kids__wrp",
                            children: [(0, p.jsxs)("div", {
                                className: "banner-kids__info",
                                children: [(0, p.jsx)("h2", {
                                    className: "banner-kids__title",
                                    children: "\u041a\u0443\u0440\u0441\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 Python \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439 \u0438 \u043f\u043e\u0434\u0440\u043e\u0441\u0442\u043a\u043e\u0432 \u043e\u0442 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 IT Школа WinPoWer"
                                }), (0, p.jsx)("p", {
                                    className: "banner-kids__text",
                                    children: "\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u0448\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u043e\u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e \u0438 \u0441\u0442\u0430\u0440\u0448\u0435\u0433\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430 \u043d\u0430 \u043a\u0443\u0440\u0441\u044b \u043e\u0442 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 \u043f\u0440\u0438 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438."
                                }), (0, p.jsxs)("div", {
                                    className: "baner__buttons__wrp",
                                    children: [(0, p.jsx)("button", {
                                        className: "baner__btn",
                                        onClick: function () {
                                            t(!0)
                                        },
                                        children: "\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441"
                                    }), (0, p.jsx)("button", {
                                        className: "baner__btn",
                                        onClick: function () {
                                            (0, m.ZP)("reachGoal", "demo-kids"), g(!0)
                                        },
                                        children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430 0 \u20bd"
                                    })]
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "banner-kids__img-wrp",
                                children: [(0, p.jsx)("img", {
                                    className: "banner-kids__img-wrp__icon banner-kids__img-wrp__icon-book",
                                    src: "/images/book.svg"
                                }), (0, p.jsx)("img", {
                                    className: "banner-kids__img-wrp__icon banner-kids__img-wrp__icon-ranking",
                                    src: "/images/ranking.svg"
                                }), (0, p.jsx)("img", {
                                    className: "banner-kids__img-wrp__icon banner-kids__img-wrp__icon-circle",
                                    src: "/images/Subtract.svg"
                                }), (0, p.jsx)(_(), {
                                    className: "banner-kids__img-wrp__img",
                                    src: "/images/banner-kids-baner.svg",
                                    width: 360,
                                    height: 380
                                })]
                            })]
                        })
                    }), (0, p.jsx)("section", {
                        className: "baner__video baner__video_kids",
                        children: (0, p.jsxs)("div", {
                            className: "container baner__video__wrp",
                            children: [(0, p.jsxs)("div", {
                                className: "baner__video__wrp__txt baner__video__wrp__txt_kids",
                                children: [(0, p.jsx)("h2", {
                                    className: "benefits__title",
                                    children: "\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439 \u0432 \u0423\u0447\u0435\u0431\u043d\u043e\u043c \u0446\u0435\u043d\u0442\u0440\u0435 IT Школа WinPoWer \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u043e\u043d\u043b\u0430\u0439\u043d"
                                }), (0, p.jsx)("p", {
                                    children: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u0448\u0435\u0433\u043e \u0443\u0440\u043e\u043a\u0430"
                                }), (0, p.jsx)("button", {
                                    className: "courses__wrp-btn",
                                    onClick: function () {
                                        return t(!0)
                                    },
                                    children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e \u043f\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e"
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "baner__video__box baner__video__box_kids",
                                children: [(0, p.jsx)("div", {
                                    className: "baner__video__box__preview baner__video__box__preview-kids"
                                }), (0, p.jsx)("button", {
                                    className: "baner__video__box__btn",
                                    onClick: function () {
                                        (0, m.ZP)("reachGoal", "video_kids"), document.querySelector(".baner__video__box__preview").style.display = "none", document.querySelector(".baner__video__box__btn").style.display = "none", document.querySelector("#video1").src = document.querySelector("#video1").src + "?autoplay=1"
                                    }
                                }), (0, p.jsx)("iframe", {
                                    width: "496",
                                    height: "279",
                                    src: "https://www.youtube.com/embed/AmBjIfUYkUk",
                                    id: "video1",
                                    title: "YouTube video player",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: !0
                                }), (0, p.jsxs)("div", {
                                    children: [(0, p.jsx)("span", {
                                        className: "baner__video__box__circle baner__video__box__circle_kids"
                                    }), (0, p.jsx)("span", {
                                        className: "baner__video__box__circle_kids"
                                    }), (0, p.jsx)("span", {
                                        className: "baner__video__box__circle_kids"
                                    })]
                                })]
                            })]
                        })
                    }), (0, p.jsxs)("section", {
                        className: "our-courses",
                        children: [(0, p.jsx)("h2", {
                            className: "course-favor__title container",
                            children: "\u041d\u0430\u0448\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"
                        }), (0, p.jsx)("br", {}), (0, p.jsxs)("div", {
                            className: "our-courses__wrp",
                            children: [(0, p.jsxs)("div", {
                                className: "our-courses__wrp-desktop",
                                children: [(0, p.jsx)(_(), {
                                    src: "/images/ourCourse.svg",
                                    alt: "\u041d\u0430\u0448\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f",
                                    width: 1539,
                                    height: 342
                                }), (0, p.jsx)("a", {
                                    href: "#pythonCourses",
                                    className: "our-courses__wrp__area1",
                                    onClick: function () {
                                        N(0)
                                    },
                                    children: (0, p.jsx)("span", {
                                        children: "10-13 \u043b\u0435\u0442"
                                    })
                                }), (0, p.jsx)("a", {
                                    href: "#pythonCourses",
                                    className: "our-courses__wrp__area2",
                                    onClick: function () {
                                        N(1)
                                    },
                                    children: (0, p.jsx)("span", {
                                        children: "14-17 \u043b\u0435\u0442"
                                    })
                                }), (0, p.jsx)("a", {
                                    href: "#pythonCourses",
                                    className: "our-courses__wrp__area3",
                                    onClick: function () {
                                        N(2)
                                    },
                                    children: (0, p.jsx)("span", {
                                        children: "14-17 \u043b\u0435\u0442"
                                    })
                                }), (0, p.jsx)("a", {
                                    href: "#pythonCourses",
                                    className: "our-courses__wrp__area4",
                                    onClick: function () {
                                        N(3)
                                    },
                                    children: (0, p.jsx)("span", {
                                        children: "10-13 \u043b\u0435\u0442"
                                    })
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "our-courses__wrp-mobile",
                                children: [(0, p.jsx)(_(), {
                                    src: "/images/ourCourseMobile.svg",
                                    alt: "\u041d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b",
                                    width: 394,
                                    height: 979
                                }), (0, p.jsx)("a", {
                                    href: "#pythonCourses",
                                    className: "our-courses__wrp__mobile-area1",
                                    onClick: function () {
                                        N(0)
                                    },
                                    children: (0, p.jsx)("span", {
                                        children: "10-13 \u043b\u0435\u0442"
                                    })
                                }), (0, p.jsx)("a", {
                                    href: "#pythonCourses",
                                    className: "our-courses__wrp__mobile-area2",
                                    onClick: function () {
                                        N(1)
                                    },
                                    children: (0, p.jsx)("span", {
                                        children: "14-17 \u043b\u0435\u0442"
                                    })
                                }), (0, p.jsx)("a", {
                                    href: "#pythonCourses",
                                    className: "our-courses__wrp__mobile-area3",
                                    onClick: function () {
                                        N(2)
                                    },
                                    children: (0, p.jsx)("span", {
                                        children: "14-17 \u043b\u0435\u0442"
                                    })
                                }), (0, p.jsx)("a", {
                                    href: "#pythonCourses",
                                    className: "our-courses__wrp__mobile-area4",
                                    onClick: function () {
                                        N(3)
                                    },
                                    children: (0, p.jsx)("span", {
                                        children: "10-13 \u043b\u0435\u0442"
                                    })
                                })]
                            })]
                        })]
                    }), (0, p.jsxs)("section", {
                        className: "container python-benefit",
                        children: [(0, p.jsx)("h2", {
                            className: "course-favor__title python-benefit__title",
                            children: "\u041f\u043e\u0447\u0435\u043c\u0443 Python?"
                        }), (0, p.jsx)("p", {
                            className: "python-benefit__text",
                            children: " \u042d\u0442\u043e\u0442 \u044f\u0437\u044b\u043a \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u2014 \u043e\u0434\u0438\u043d \u0438\u0437 \u0441\u0430\u043c\u044b\u0445 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 1 \u043c\u0435\u0441\u0442\u043e \u0432 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0435 Tiobe \u043f\u043e \u0432\u043e\u0441\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u0432 IT-\u0441\u0440\u0435\u0434\u0435. Python \u0443\u0434\u043e\u0431\u0435\u043d \u0438 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u0435\u043d: \u044d\u0442\u043e\u0442 \u044f\u0437\u044b\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0432 \u0438\u0433\u0440\u043e\u0432\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435, \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0435, \u0431\u0430\u043d\u043a\u0438\u043d\u0433\u0435 \u0438 \u043c\u043d\u043e\u0433\u0438\u0445 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0444\u0435\u0440\u0430\u0445. \u0422\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043a\u0440\u0438\u043f\u0442\u044b Python \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 Sims \u0438 World of Tanks. \u0411\u0435\u0437 Python \u043d\u0435 \u043e\u0431\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0443\u0440\u043e\u0432\u043d\u044f Google \u0438 Netflix."
                        }), (0, p.jsxs)("ul", {
                            className: "python-benefit__list",
                            children: [(0, p.jsx)("li", {
                                className: "python-benefit__item",
                                children: "\u0417\u043d\u0430\u043d\u0438\u0435 \u044d\u0442\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u2014 \u044d\u0442\u043e \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \xab\u043a\u0438\u0440\u043f\u0438\u0447\u0438\u043a\xbb \u0434\u043b\u044f \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438, \u043d\u043e  \u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u044f."
                            }), (0, p.jsx)("li", {
                                className: "python-benefit__item",
                                children: "\u041e\u0442 \u0440\u0435\u0431\u044f\u0442 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u0437\u043d\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, IT-\u043a\u0443\u0440\u0441\u044b \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d\u044b \u043d\u0430 \u043d\u043e\u0432\u0438\u0447\u043a\u043e\u0432. \u0414\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0443\u0436\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441, \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443. \u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u044e\u0442 \u0442\u0435\u043c\u044b \u043f\u0440\u043e\u0441\u0442\u044b\u043c \u044f\u0437\u044b\u043a\u043e\u043c \u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u043e\u0441\u0432\u043e\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0443\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435."
                            })]
                        }), (0, p.jsx)("img", {
                            src: "/images/python-benefit-bot.svg",
                            alt: "\u041f\u043e\u0447\u0435\u043c\u0443 Python"
                        })]
                    }), (0, p.jsxs)("section", {
                        className: "container",
                        style: {
                            marginBottom: "70px"
                        },
                        children: [(0, p.jsx)("h2", {
                            className: "course-favor__title",
                            children: "IT - \u044d\u0442\u043e \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e!"
                        }), (0, p.jsxs)("div", {
                            className: "course-favor__wrp",
                            children: [(0, p.jsxs)("div", {
                                children: [(0, p.jsx)("p", {
                                    className: "course-favor__wrp__text",
                                    children: "\u0412 \u0443\u0447\u0435\u0431\u043d\u043e\u043c \u0446\u0435\u043d\u0442\u0440\u0435 IT Школа WinPoWer \u043e\u043f\u044b\u0442\u043d\u044b\u0435 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438-\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u0434\u0435\u0442\u044f\u043c \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0435 \u0448\u0430\u0433\u0438 \u0432 \u043c\u0438\u0440 IT \u0438 \u0437\u0430\u043b\u043e\u0436\u0438\u0442\u044c \u0444\u0443\u043d\u0434\u0430\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438. \u041c\u044b \u0437\u043d\u0430\u0435\u043c, \u043a\u0430\u043a \u0432\u043e\u0432\u043b\u0435\u0447\u044c \u0432 \u0443\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0438 \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u043a\u0443\u0440\u0441\u044b \u0432 \u0443\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u043c\u0438\u0440 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439."
                                }), " ", (0, p.jsx)("br", {}), (0, p.jsx)("p", {
                                    className: "course-favor__wrp__text",
                                    children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 IT-\u043a\u0443\u0440\u0441\u043e\u0432:"
                                }), (0, p.jsxs)("ul", {
                                    style: {
                                        paddingLeft: "13px",
                                        listStyle: "disc"
                                    },
                                    children: [(0, p.jsx)("li", {
                                        children: "\u041e\u043d\u043b\u0430\u0439\u043d-\u0437\u0430\u043d\u044f\u0442\u0438\u044f \u043d\u0430 \u043d\u0430\u0448\u0435\u0439 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435."
                                    }), (0, p.jsx)("li", {
                                        children: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0443\u0440\u043e\u0432\u043d\u044f middle/senior."
                                    }), (0, p.jsx)("li", {
                                        children: "\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u0432 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0433\u0440\u0443\u043f\u043f\u0430\u0445."
                                    }), (0, p.jsx)("li", {
                                        children: "\u0413\u0435\u0439\u043c\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430: \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0432 \u0438\u0433\u0440\u043e\u0432\u043e\u0439 \u0444\u043e\u0440\u043c\u0435."
                                    })]
                                }), (0, p.jsx)("br", {}), (0, p.jsx)("p", {
                                    className: "course-favor__wrp__text",
                                    children: "\u0410 \u0435\u0449\u0451 \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u043e\u043e\u0449\u0440\u0435\u043d\u0438\u0439: \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0433\u0440\u0430\u0434\u044b-\u0430\u0447\u0438\u0432\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430 \u044f\u0440\u043a\u0438\u0439 \u043c\u0435\u0440\u0447."
                                })]
                            }), (0, p.jsx)("img", {
                                src: "/images/favor_v2.svg",
                                alt: "\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 IT-\u043a\u0443\u0440\u0441\u043e\u0432"
                            })]
                        }), (0, p.jsx)("div", {
                            className: "all-centered",
                            children: (0, p.jsx)("button", {
                                className: "btn btn-primary btn-centered",
                                onClick: function () {
                                    (0, m.ZP)("reachGoal", "demo-kids"), g(!0)
                                },
                                children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430 0 \u20bd"
                            })
                        })]
                    }), (0, p.jsxs)("section", {
                        className: "container",
                        children: [(0, p.jsx)("h2", {
                            className: "course-favor__title",
                            children: "\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043d\u0430\u0448\u0438\u0445 \u043a\u0443\u0440\u0441\u043e\u0432"
                        }), (0, p.jsx)("br", {}), (0, p.jsxs)("div", {
                            className: "kids-grid",
                            children: [(0, p.jsxs)("div", {
                                className: "block1",
                                children: [(0, p.jsx)("h4", {
                                    className: "kids-grid__title",
                                    children: "\u041e\u043d\u043b\u0430\u0439\u043d-\u0444\u043e\u0440\u043c\u0430\u0442"
                                }), (0, p.jsx)("p", {
                                    className: "kids-grid__text",
                                    children: "\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0443\u0434\u043e\u0431\u043d\u043e \u0441\u043e\u0432\u043c\u0435\u0449\u0430\u0442\u044c \u0441\u043e \u0448\u043a\u043e\u043b\u043e\u0439 \u0438 \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u043c \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c."
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "block2",
                                children: [(0, p.jsx)("h4", {
                                    className: "kids-grid__title",
                                    children: "\u041e\u043f\u044b\u0442\u043d\u044b\u0435 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438"
                                }), (0, p.jsx)("p", {
                                    className: "kids-grid__text",
                                    children: "\u041a\u0443\u0440\u0441\u044b \u0432\u0435\u0434\u0443\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438 \u0441 \u043e\u0431\u0448\u0438\u0440\u043d\u044b\u043c \u043e\u043f\u044b\u0442\u043e\u043c"
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "block3",
                                children: [(0, p.jsx)("h4", {
                                    className: "kids-grid__title",
                                    children: "\u0420\u0430\u0441\u043a\u0440\u044b\u0442\u0438\u0435 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u0430"
                                }), (0, p.jsx)("p", {
                                    className: "kids-grid__text",
                                    children: "\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432 \u0440\u0435\u0431\u0451\u043d\u043a\u0430 \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u0430\u0440\u044c\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u0423\u0447\u0435\u043d\u0438\u043a\u0438 \u0441\u043c\u043e\u0433\u0443\u0442 \u0432\u043e\u043f\u043b\u043e\u0442\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u0438\u0434\u0435\u0438"
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "block4",
                                children: [(0, p.jsx)("h4", {
                                    className: "kids-grid__title",
                                    children: "\u041c\u043e\u0436\u043d\u043e \u0441 \u043d\u0443\u043b\u044f"
                                }), (0, p.jsx)("p", {
                                    className: "kids-grid__text",
                                    children: "\u0414\u043b\u044f \u043e\u0441\u0432\u043e\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430. \u041a\u0443\u0440\u0441 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u043d \u043d\u0430 \u043f\u043b\u0430\u0432\u043d\u043e\u0435 \u043f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "block5",
                                children: [(0, p.jsx)("h4", {
                                    className: "kids-grid__title",
                                    children: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a\u043e\u0432"
                                }), (0, p.jsx)("p", {
                                    className: "kids-grid__text",
                                    children: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 \u043e\u0442\u0432\u0435\u0442\u044f\u0442 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u0434\u0430\u0434\u0443\u0442 \u043e\u0431\u0440\u0430\u0442\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442 \u0438\u043d\u0442\u0435\u0440\u0435\u0441 \u043a \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e"
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "block6",
                                children: [(0, p.jsx)("h4", {
                                    className: "kids-grid__title",
                                    children: "\u0425\u043e\u0440\u043e\u0448\u0438\u0439 \u0441\u0442\u0430\u0440\u0442"
                                }), (0, p.jsx)("p", {
                                    className: "kids-grid__text",
                                    children: "\u0417\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u043e\u0441\u043d\u043e\u0432\u044b Python, \u0438\u0437\u0443\u0447\u0430\u0435\u043c \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b, \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0441 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u043c\u0438 \u0438 \u0434\u0435\u043b\u0430\u0435\u043c \u043f\u0435\u0440\u0432\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b"
                                })]
                            }), (0, p.jsxs)("div", {
                                className: "block7",
                                children: [(0, p.jsx)("h4", {
                                    className: "kids-grid__title",
                                    children: "\u041c\u043d\u043e\u0433\u043e \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438"
                                }), (0, p.jsx)("p", {
                                    className: "kids-grid__text",
                                    children: "\u041f\u043e\u043c\u0438\u043c\u043e \u0442\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0431\u043b\u043e\u043a\u043e\u0432 \u043c\u044b \u0443\u0434\u0435\u043b\u044f\u0435\u043c \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435. \u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u044d\u0442\u043e\u043c\u0443 \u0434\u0435\u0442\u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043e\u0441\u0432\u0430\u0438\u0432\u0430\u044e\u0442 \u0430\u0437\u044b \u0438 \u0443\u0447\u0430\u0442\u0441\u044f \u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434"
                                })]
                            })]
                        })]
                    }), (0, p.jsx)("section", {
                        className: "python-courses container",
                        id: "pythonCourses",
                        children: (0, p.jsxs)(d(), {
                            numberOfCards: k,
                            infiniteLoop: !1,
                            requestToChangeActive: N,
                            activeItemIndex: j,
                            alwaysShowChevrons: !1,
                            firstAndLastGutter: !1,
                            chevronWidth: 54,
                            showSlither: l,
                            gutter: 50,
                            activePosition: "right",
                            disableSwipe: !1,
                            rightChevron: (0, p.jsx)("div", {
                                className: "reviews__right"
                            }),
                            leftChevron: (0, p.jsx)("div", {
                                className: "reviews__left"
                            }),
                            outsideChevron: !1,
                            classes: {
                                rightChevronWrapper: "teacher__right_chev",
                                leftChevronWrapper: "teacher__left_chev",
                                itemWrapper: "python-courses__item-slider"
                            },
                            children: [(0, p.jsxs)("li", {
                                className: "python-courses__item",
                                children: [(0, p.jsx)("h4", {
                                    className: "python-courses__item__title python-courses__item__title-game",
                                    children: "2D-\u0438\u0433\u0440\u044b \u043d\u0430 Python"
                                }), (0, p.jsx)("ul", {
                                    className: "python-courses__item__tags",
                                    children: (0, p.jsx)("li", {
                                        className: "python-courses__item__tag python-courses__item__tag-price",
                                        children: "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: 55 000 \u0440\u0443\u0431."
                                    })
                                }), (0, p.jsxs)("ul", {
                                    className: "python-courses__item__info",
                                    children: [(0, p.jsx)("li", {
                                        className: "python-courses__item__info__age",
                                        children: "10-13 \u043b\u0435\u0442"
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__info__duration",
                                        children: "6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"
                                    })]
                                }), (0, p.jsx)("hr", {}), (0, p.jsx)("h5", {
                                    className: "python-courses__item__program__title",
                                    children: "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043a\u0443\u0440\u0441\u0430"
                                }), (0, p.jsxs)("ul", {
                                    className: "python-courses__item__program__list",
                                    children: [(0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u041e\u0441\u043d\u043e\u0432\u044b Python, \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b (\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430, \u043f\u043e\u0438\u0441\u043a \u0438 \u0442.\u0434.)."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b, \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b, \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0432 Python."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u043c\u0438 Arcade \u0438 PyGame: \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430 \u043a\u0430\u0436\u0434\u043e\u0439, \u0438 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0435\u0439."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 \u0438\u0433\u0440\u043e\u0432\u044b\u043c \u0434\u0432\u0438\u0436\u043a\u043e\u043c."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0424\u0438\u0437\u0438\u043a\u0430 \u0432 \u0438\u0433\u0440\u0430\u0445, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0435\u043c, \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435\u043c."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u041d\u0430\u0443\u0447\u0438\u043c\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043c\u0435\u043d\u044e, \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043e\u043a\u043d\u0430, \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441\u043e \u0441\u0432\u0435\u0442\u043e\u043c \u0438 \u0437\u0432\u0443\u043a\u043e\u043c \u0432 \u0438\u0433\u0440\u0430\u0445."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."
                                    })]
                                }), (0, p.jsx)("hr", {}), (0, p.jsx)("h5", {
                                    className: "python-courses__item__program__title",
                                    children: "\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"
                                }), (0, p.jsx)("p", {
                                    className: "python-courses__item__project__text",
                                    children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 2d-\u0438\u0433\u0440\u044b \u0432 \u043b\u044e\u0431\u043e\u043c \u0436\u0430\u043d\u0440\u0435 \u043d\u0430 \u0432\u044b\u0431\u043e\u0440 \u0443\u0447\u0435\u043d\u0438\u043a\u0430."
                                }), (0, p.jsx)("div", {
                                    className: "all-centered",
                                    children: (0, p.jsx)("button", {
                                        style: {
                                            width: "275px"
                                        },
                                        className: "btn btn-primary btn-centered",
                                        onClick: function () {
                                            t(!0)
                                        },
                                        children: "\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441"
                                    })
                                })]
                            }), (0, p.jsxs)("li", {
                                className: "python-courses__item",
                                children: [(0, p.jsx)("h4", {
                                    className: "python-courses__item__title python-courses__item__title-graph",
                                    children: "\u0413\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b"
                                }), (0, p.jsx)("ul", {
                                    className: "python-courses__item__tags",
                                    children: (0, p.jsx)("li", {
                                        className: "python-courses__item__tag python-courses__item__tag-price",
                                        children: "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: 55 000 \u0440\u0443\u0431."
                                    })
                                }), (0, p.jsxs)("ul", {
                                    className: "python-courses__item__info",
                                    children: [(0, p.jsx)("li", {
                                        className: "python-courses__item__info__age",
                                        children: "14-17 \u043b\u0435\u0442"
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__info__duration",
                                        children: "6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"
                                    })]
                                }), (0, p.jsx)("hr", {}), (0, p.jsx)("h5", {
                                    className: "python-courses__item__program__title",
                                    children: "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043a\u0443\u0440\u0441\u0430"
                                }), (0, p.jsxs)("ul", {
                                    className: "python-courses__item__program__list",
                                    children: [(0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u041e\u0441\u043d\u043e\u0432\u044b Python, \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b (\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430, \u043f\u043e\u0438\u0441\u043a \u0438 \u0442.\u0434.)."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b, \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b, \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0432 Python."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 (\u043a\u043b\u0430\u0441\u0441\u044b)."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u041f\u041e."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b. \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043d\u043e\u043f\u043e\u043a, \u0441\u043b\u0430\u0439\u0434\u0435\u0440\u043e\u0432, \u043e\u043a\u043e\u043d \u0438 \u0442.\u0434."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u043e \u0441 \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u044e."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 PyQt \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u043c."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."
                                    })]
                                }), (0, p.jsx)("hr", {}), (0, p.jsx)("h5", {
                                    className: "python-courses__item__program__title",
                                    children: "\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"
                                }), (0, p.jsx)("p", {
                                    className: "python-courses__item__project__text",
                                    children: "\u041a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u043c. \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043d\u0430\u043f\u043e\u0434\u043e\u0431\u0438\u0435 \u0430\u0443\u0434\u0438\u043e/\u043c\u0435\u0434\u0438\u0430\u043f\u043b\u0435\u0435\u0440\u0430, \u043f\u0440\u043e\u0432\u043e\u0434\u043d\u0438\u043a\u0430."
                                }), (0, p.jsx)("div", {
                                    className: "all-centered",
                                    children: (0, p.jsx)("button", {
                                        style: {
                                            width: "275px"
                                        },
                                        className: "btn btn-primary btn-centered",
                                        onClick: function () {
                                            t(!0)
                                        },
                                        children: "\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441"
                                    })
                                })]
                            }), (0, p.jsxs)("li", {
                                className: "python-courses__item",
                                children: [(0, p.jsx)("h4", {
                                    className: "python-courses__item__title python-courses__item__title-pars",
                                    children: "\u041f\u0430\u0440\u0441\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"
                                }), (0, p.jsx)("ul", {
                                    className: "python-courses__item__tags",
                                    children: (0, p.jsx)("li", {
                                        className: "python-courses__item__tag python-courses__item__tag-price",
                                        children: "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: 55 000 \u0440\u0443\u0431."
                                    })
                                }), (0, p.jsxs)("ul", {
                                    className: "python-courses__item__info",
                                    children: [(0, p.jsx)("li", {
                                        className: "python-courses__item__info__age",
                                        children: "14-17 \u043b\u0435\u0442"
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__info__duration",
                                        children: "6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"
                                    })]
                                }), (0, p.jsx)("hr", {}), (0, p.jsx)("h5", {
                                    className: "python-courses__item__program__title",
                                    children: "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043a\u0443\u0440\u0441\u0430"
                                }), (0, p.jsxs)("ul", {
                                    className: "python-courses__item__program__list",
                                    children: [(0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u041e\u0441\u043d\u043e\u0432\u044b Python, \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b (\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430, \u043f\u043e\u0438\u0441\u043a \u0438 \u0442.\u0434.)."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b, \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b, \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0432 Python."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 HTML."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."
                                    })]
                                }), (0, p.jsx)("hr", {}), (0, p.jsx)("h5", {
                                    className: "python-courses__item__program__title",
                                    children: "\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"
                                }), (0, p.jsx)("p", {
                                    className: "python-courses__item__project__text",
                                    children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0430\u0440\u0441\u0435\u0440\u0430 \u0441 \u0432\u044b\u0433\u0440\u0443\u0437\u043a\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0432 \u0444\u0430\u0439\u043b."
                                }), (0, p.jsx)("div", {
                                    className: "all-centered",
                                    children: (0, p.jsx)("button", {
                                        style: {
                                            width: "275px"
                                        },
                                        className: "btn btn-primary btn-centered",
                                        onClick: function () {
                                            t(!0)
                                        },
                                        children: "\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441"
                                    })
                                })]
                            }), (0, p.jsxs)("li", {
                                className: "python-courses__item",
                                children: [(0, p.jsx)("h4", {
                                    className: "python-courses__item__title python-courses__item__title-bots",
                                    children: "Telegram - \u0431\u043e\u0442\u044b"
                                }), (0, p.jsx)("ul", {
                                    className: "python-courses__item__tags",
                                    children: (0, p.jsx)("li", {
                                        className: "python-courses__item__tag python-courses__item__tag-price",
                                        children: "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: 55 000 \u0440\u0443\u0431."
                                    })
                                }), (0, p.jsxs)("ul", {
                                    className: "python-courses__item__info",
                                    children: [(0, p.jsx)("li", {
                                        className: "python-courses__item__info__age",
                                        children: "10-13 \u043b\u0435\u0442"
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__info__duration",
                                        children: "6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432"
                                    })]
                                }), (0, p.jsx)("hr", {}), (0, p.jsx)("h5", {
                                    className: "python-courses__item__program__title",
                                    children: "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043a\u0443\u0440\u0441\u0430"
                                }), (0, p.jsxs)("ul", {
                                    className: "python-courses__item__program__list",
                                    children: [(0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u041e\u0441\u043d\u043e\u0432\u044b Python, \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b (\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430, \u043f\u043e\u0438\u0441\u043a \u0438 \u0442.\u0434.)."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b, \u0438\u0442\u0435\u0440\u0430\u0442\u043e\u0440\u044b, \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0432 Python."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0431\u043e\u0442\u043e\u0432."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0418\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 Aiogram."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440, \u043c\u0435\u043d\u044e."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u0432 \u0431\u043e\u0442\u0435."
                                    }), (0, p.jsx)("li", {
                                        className: "python-courses__item__program__item",
                                        children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0431\u043e\u0442\u043e\u0432: \u043e\u0442 \u043f\u0440\u043e\u0441\u0442\u044b\u0445 \u0434\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0449\u0438\u0445 \u043f\u043b\u0430\u0442\u0435\u0436\u0438."
                                    })]
                                }), (0, p.jsx)("hr", {}), (0, p.jsx)("h5", {
                                    className: "python-courses__item__program__title",
                                    children: "\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"
                                }), (0, p.jsx)("p", {
                                    className: "python-courses__item__project__text",
                                    children: "\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c-\u0431\u043e\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u0434\u0435\u043c\u043e\u0440\u0435\u0436\u0438\u043c\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u043b\u0430\u0442\u0435\u0436\u0438. "
                                }), (0, p.jsx)("div", {
                                    className: "all-centered",
                                    children: (0, p.jsx)("button", {
                                        style: {
                                            width: "275px"
                                        },
                                        className: "btn btn-primary btn-centered",
                                        onClick: function () {
                                            t(!0)
                                        },
                                        children: "\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0443\u0440\u0441"
                                    })
                                })]
                            })]
                        })
                    }), (0, p.jsx)(i.Z, {}), (0, p.jsx)(n.Z, {}), (0, p.jsx)(f, {
                        modal: {
                            showFormModal: s,
                            setShowFormModal: t
                        }
                    }), (0, p.jsx)(h.Z, {
                        modal: {
                            showFormModal: v,
                            setShowFormModal: g
                        }
                    })]
                })
            }
        },
        12045: function (e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/python-kids", function () {
                return t(42237)
            }])
        },
        82021: function (e, s, t) {
            (() => {
                "use strict";
                var s = {
                        800: e => {
                            var s = Object.getOwnPropertySymbols,
                                t = Object.prototype.hasOwnProperty,
                                r = Object.prototype.propertyIsEnumerable;

                            function n(e) {
                                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                                return Object(e)
                            }
                            e.exports = function () {
                                try {
                                    if (!Object.assign) return !1;
                                    var e = new String("abc");
                                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                                    for (var s = {}, t = 0; t < 10; t++) s["_" + String.fromCharCode(t)] = t;
                                    var r = Object.getOwnPropertyNames(s).map((function (e) {
                                        return s[e]
                                    }));
                                    if ("0123456789" !== r.join("")) return !1;
                                    var n = {};
                                    return "abcdefghijklmnopqrst".split("").forEach((function (e) {
                                        n[e] = e
                                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                                } catch (e) {
                                    return !1
                                }
                            }() ? Object.assign : function (e, i) {
                                for (var a, o, c = n(e), l = 1; l < arguments.length; l++) {
                                    for (var _ in a = Object(arguments[l])) t.call(a, _) && (c[_] = a[_]);
                                    if (s) {
                                        o = s(a);
                                        for (var u = 0; u < o.length; u++) r.call(a, o[u]) && (c[o[u]] = a[o[u]])
                                    }
                                }
                                return c
                            }
                        },
                        569: (e, s, t) => {
                            0
                        },
                        403: (e, s, t) => {
                            var r = t(800),
                                n = t(522);
                            s.useSubscription = function (e) {
                                var s = e.getCurrentValue,
                                    t = e.subscribe,
                                    i = n.useState((function () {
                                        return {
                                            getCurrentValue: s,
                                            subscribe: t,
                                            value: s()
                                        }
                                    }));
                                e = i[0];
                                var a = i[1];
                                return i = e.value, e.getCurrentValue === s && e.subscribe === t || (i = s(), a({
                                    getCurrentValue: s,
                                    subscribe: t,
                                    value: i
                                })), n.useDebugValue(i), n.useEffect((function () {
                                    function e() {
                                        if (!n) {
                                            var e = s();
                                            a((function (n) {
                                                return n.getCurrentValue !== s || n.subscribe !== t || n.value === e ? n : r({}, n, {
                                                    value: e
                                                })
                                            }))
                                        }
                                    }
                                    var n = !1,
                                        i = t(e);
                                    return e(),
                                        function () {
                                            n = !0, i()
                                        }
                                }), [s, t]), i
                            }
                        },
                        138: (e, s, t) => {
                            e.exports = t(403)
                        },
                        522: e => {
                            e.exports = t(67294)
                        }
                    },
                    r = {};

                function n(e) {
                    var t = r[e];
                    if (void 0 !== t) return t.exports;
                    var i = r[e] = {
                            exports: {}
                        },
                        a = !0;
                    try {
                        s[e](i, i.exports, n), a = !1
                    } finally {
                        a && delete r[e]
                    }
                    return i.exports
                }
                n.ab = "//";
                var i = n(138);
                e.exports = i
            })()
        },
        5152: function (e, s, t) {
            e.exports = t(32323)
        }
    },
    function (e) {
        e.O(0, [3247, 9612, 4081, 1033, 8838, 3420, 9902, 1763, 3421, 9774, 2888, 179], (function () {
            return s = 12045, e(e.s = s);
            var s
        }));
        var s = e.O();
        _N_E = s
    }
]);