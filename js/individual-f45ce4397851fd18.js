(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1514, 6813], {
        87619: function (e, i, a) {
            "use strict";
            a(35797);
            var s = a(64749),
                n = a(50029),
                t = a(87794),
                l = a.n(t),
                d = a(67294),
                c = a(63282),
                r = a(32670),
                o = (a(38973), a(15034)),
                u = a(23838),
                m = a(11163),
                _ = a(9669),
                h = a.n(_),
                v = a(85893),
                p = "https://learn.maxima.school/";
            i.Z = function (e) {
                var i = e.modal,
                    a = (e.titleForForm, (0, u.Z)("form")),
                    t = i.showFormModal ? "modal modal-active" : "modal modal-disable",
                    _ = (0, d.useState)(!1),
                    x = _[0],
                    f = _[1],
                    j = (0, d.useState)(""),
                    g = j[0],
                    N = j[1],
                    b = (0, d.useState)(""),
                    w = b[0],
                    y = b[1],
                    S = (0, d.useState)(""),
                    q = S[0],
                    k = S[1],
                    C = (0, d.useState)(""),
                    I = C[0],
                    P = C[1],
                    Z = (0, d.useState)("Telegram"),
                    F = Z[0],
                    E = (Z[1], (0, d.useState)(!0)),
                    T = E[0],
                    M = E[1],
                    G = (0, d.useState)(""),
                    O = G[0],
                    L = G[1],
                    R = (0, d.useState)(""),
                    A = R[0],
                    D = R[1],
                    J = (0, d.useState)(!1),
                    U = J[0],
                    K = J[1],
                    Q = (0, d.useState)([]),
                    X = Q[0],
                    B = Q[1],
                    V = (0, d.useState)(""),
                    W = V[0],
                    Y = V[1],
                    z = (0, m.useRouter)(),
                    H = (0, d.useState)({
                        title: ""
                    }),
                    $ = H[0],
                    ee = H[1],
                    ie = (0, d.useState)({
                        location: ""
                    }),
                    ae = ie[0],
                    se = ie[1];
                (0, d.useEffect)((function () {
                    se(window), ee(document), (0, c.ZP)("getClientID", (function (e) {
                        return D(e)
                    }))
                }), []), (0, d.useEffect)((function () {
                    M(!(g && w && q && I && W)), L("")
                }), [g, w, q, I, W]);
                var ne = function () {
                        var e = (0, n.Z)(l().mark((function e() {
                            var i, s, n;
                            return l().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = {
                                            method: "GET",
                                            redirect: "follow"
                                        }, e.next = 3, fetch("https://json.geoiplookup.io/", i).then((function (e) {
                                            return e.json()
                                        })).then((function (e) {
                                            return e.ip
                                        }));
                                    case 3:
                                        s = e.sent, g && q && F && (n = [{
                                            source_name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + X.find((function (e) {
                                                return e.id === W
                                            })).name + " \u0441 " + ae.location.pathname,
                                            source_uid: "a1fee7c0fc436088e64ba2e8822ba2b3",
                                            pipeline_id: 4035451,
                                            _embedded: {
                                                leads: [{
                                                    name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + X.find((function (e) {
                                                        return e.id === W
                                                    })).name + " \u0441 " + ae.location.pathname,
                                                    visitor_uid: "5692210d-58d0-468c-acb2-dce7f93eef87",
                                                    custom_fields_values: [{
                                                        field_id: 956603,
                                                        values: [{
                                                            value: F
                                                        }]
                                                    }, , {
                                                        field_id: 958873,
                                                        values: [{
                                                            value: A
                                                        }]
                                                    }, {
                                                        field_id: 958471,
                                                        values: [{
                                                            value: s
                                                        }]
                                                    }],
                                                    _embedded: {
                                                        tags: [{
                                                            name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f ".concat("/python-kids" === window.location.pathname ? "KIDS" : "")
                                                        }]
                                                    }
                                                }],
                                                contacts: [{
                                                    name: g,
                                                    custom_fields_values: [{
                                                        field_id: 731805,
                                                        values: [{
                                                            value: q
                                                        }]
                                                    }, {
                                                        field_id: 731807,
                                                        values: [{
                                                            value: I
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
                                                form_name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + X.find((function (e) {
                                                    return e.id === W
                                                })).name + " \u0441 " + ae.location.pathname,
                                                form_page: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + X.find((function (e) {
                                                    return e.id === W
                                                })).name + " \u0441 " + ae.location.pathname
                                            }
                                        }], new URL(ae.location.href).searchParams.forEach((function (e, i) {
                                            n[0]._embedded.leads[0].custom_fields_values.push({
                                                field_id: r.T.find((function (e) {
                                                    return e.name === i
                                                })).id,
                                                values: [{
                                                    value: e
                                                }]
                                            })
                                        })), f(!0), fetch("/api/amo", {
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
                                            }), f(!1), (0, c.ZP)("reachGoal", "send-choice"), (0, c.ZP)("reachGoal", "registratcia"), (0, c.ZP)("reachGoal", "send_form"), a("event", "form", {
                                                event_category: "event",
                                                event_label: "send_form"
                                            }), a("send_form"), a("send-choice")
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
                    te = function () {
                        var e = (0, n.Z)(l().mark((function e() {
                            return l().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        f(!0), h().post(p + "/temp-user", {
                                            firstName: g,
                                            lastName: w,
                                            phone: q,
                                            email: I,
                                            courseId: W
                                        }, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            f(!1), K(!0), ne()
                                        })).catch((function (e) {
                                            f(!1), e.response.data.message.includes("email") && L("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"), e.response.data.message.includes("phone") && L("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!")
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
                return (0, d.useEffect)((function () {
                    h().get(p + "/trial-courses/by-partner/".concat("/python-kids" === window.location.pathname ? "493" : "4")).then((function (e) {
                        return B(e.data.data)
                    }))
                }), [ae, $]), (0, v.jsx)("div", {
                    className: t,
                    onClick: function (e) {
                        e.target.classList.contains("modal-active") && (i.setShowFormModal(!1), document.body.classList.remove("overflowCheck"))
                    },
                    children: (0, v.jsxs)("div", {
                        className: "modal__body modal__form",
                        id: "modalForm",
                        children: [(0, v.jsxs)("div", {
                            className: "modal__form__wrp",
                            children: [(0, v.jsx)("img", {
                                src: "/images/Frame.webp",
                                alt: "",
                                className: "form__img"
                            }), U ? (0, v.jsxs)("div", {
                                className: "form__success",
                                children: [(0, v.jsx)("img", {
                                    src: "/success.svg",
                                    alt: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430"
                                }), (0, v.jsx)("h3", {
                                    children: "\u0423\u0441\u043f\u0435\u0448\u043d\u043e! \u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0439\u0442\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443"
                                }), (0, v.jsx)("button", {
                                    className: "btn",
                                    onClick: function () {
                                        z.push("https://learn.maxima.school/")
                                    },
                                    children: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443"
                                })]
                            }) : (0, v.jsxs)(v.Fragment, {
                                children: [(0, v.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                                    value: w,
                                    onInput: function (e) {
                                        return y(e.target.value)
                                    }
                                }), (0, v.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0418\u043c\u044f",
                                    value: g,
                                    onInput: function (e) {
                                        return N(e.target.value)
                                    }
                                }), (0, v.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "Email",
                                    value: I,
                                    onInput: function (e) {
                                        return P(e.target.value)
                                    }
                                }), (0, v.jsxs)("label", {
                                    htmlFor: "phoneInput",
                                    style: {
                                        width: "100%"
                                    },
                                    children: [(0, v.jsx)("span", {
                                        className: "visually-hidden",
                                        children: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d"
                                    }), (0, v.jsx)(o.ZP, {
                                        international: !0,
                                        countryCallingCodeEditable: !1,
                                        defaultCountry: "RU",
                                        value: q,
                                        onChange: k,
                                        countries: ["RU", "BY", "KG", "KZ"]
                                    })]
                                }), (0, v.jsx)(s.Z, {
                                    defaultValue: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441",
                                    style: {
                                        width: "100%"
                                    },
                                    onChange: function (e) {
                                        Y(e)
                                    },
                                    options: X.map((function (e) {
                                        return {
                                            value: e.id,
                                            label: e.name
                                        }
                                    }))
                                }), (0, v.jsx)("div", {
                                    style: {
                                        color: "red"
                                    },
                                    children: O || null
                                }), (0, v.jsx)("button", {
                                    disabled: T,
                                    className: "form__btn",
                                    onClick: function () {
                                        document.querySelector(".form__input").style.borderColor = "#583E90", document.querySelector(".PhoneInputInput").style.borderColor = "#583E90", te()
                                    },
                                    children: x ? (0, v.jsxs)("div", {
                                        className: "lds-ellipsis",
                                        children: [(0, v.jsx)("div", {}), (0, v.jsx)("div", {}), (0, v.jsx)("div", {}), (0, v.jsx)("div", {})]
                                    }) : (0, v.jsx)(v.Fragment, {
                                        children: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"
                                    })
                                })]
                            })]
                        }), (0, v.jsx)("div", {
                            className: "modal-form-close-section",
                            onClick: function () {
                                document.body.classList.remove("overflowCheck"), i.setShowFormModal(!1)
                            },
                            children: "X"
                        })]
                    })
                })
            }
        },
        16813: function (e, i, a) {
            "use strict";
            a.r(i), a.d(i, {
                getServerSideProps: function () {
                    return p
                }
            });
            var s = a(50029),
                n = a(87794),
                t = a.n(n),
                l = a(67294),
                d = a(63282),
                c = a(32670),
                r = (a(38973), a(15034)),
                o = a(23838),
                u = a(11163),
                m = a(9669),
                _ = a.n(m),
                h = a(85893),
                v = "https://learn.maxima.school/";

            function p(e) {
                return x.apply(this, arguments)
            }

            function x() {
                return (x = (0, s.Z)(t().mark((function e(i) {
                    var a, s;
                    return t().wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = i.req, s = a.headers["x-real-ip"] || a.connection.remoteAddress, e.abrupt("return", {
                                    props: {
                                        ip: s
                                    }
                                });
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            i.default = function (e) {
                var i = e.modal,
                    a = e.titleForForm,
                    n = void 0 === a ? "" : a,
                    m = (0, o.Z)("form"),
                    p = i.showFormModal ? "modal modal-active" : "modal modal-disable",
                    x = (0, l.useState)(!1),
                    f = x[0],
                    j = x[1],
                    g = (0, l.useState)(""),
                    N = g[0],
                    b = g[1],
                    w = (0, l.useState)(""),
                    y = (w[0], w[1], (0, l.useState)("")),
                    S = y[0],
                    q = y[1],
                    k = (0, l.useState)(""),
                    C = k[0],
                    I = (k[1], (0, l.useState)("Telegram")),
                    P = I[0],
                    Z = I[1],
                    F = (0, l.useState)(!0),
                    E = F[0],
                    T = F[1],
                    M = (0, l.useState)(""),
                    G = M[0],
                    O = M[1],
                    L = (0, l.useState)(!1),
                    R = L[0],
                    A = (L[1], (0, l.useState)([])),
                    D = (A[0], A[1]),
                    J = (0, l.useState)([]),
                    U = (J[0], J[1], (0, u.useRouter)()),
                    K = (0, l.useState)({
                        title: ""
                    }),
                    Q = K[0],
                    X = K[1],
                    B = (0, l.useState)({
                        location: ""
                    }),
                    V = B[0],
                    W = B[1];
                (0, l.useEffect)((function () {
                    (0, d.ZP)("getClientID", (function (e) {
                        return O(e)
                    }))
                }), []);
                var Y = function () {
                    var e = (0, s.Z)(t().mark((function e() {
                        var a, s, l;
                        return t().wrap((function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = {
                                        method: "GET",
                                        redirect: "follow"
                                    }, e.next = 3, fetch("https://json.geoiplookup.io/", a).then((function (e) {
                                        return e.json()
                                    })).then((function (e) {
                                        return e.ip
                                    }));
                                case 3:
                                    return s = e.sent, N && S && P && (l = [{
                                        source_name: V.location.pathname,
                                        source_uid: "a1fee7c0fc436088e64ba2e8822ba2b3",
                                        pipeline_id: 4035451,
                                        _embedded: {
                                            leads: [{
                                                name: n || Q.title,
                                                visitor_uid: "5692210d-58d0-468c-acb2-dce7f93eef87",
                                                custom_fields_values: [{
                                                    field_id: 956603,
                                                    values: [{
                                                        value: P
                                                    }]
                                                }, , {
                                                    field_id: 958873,
                                                    values: [{
                                                        value: G
                                                    }]
                                                }, {
                                                    field_id: 958471,
                                                    values: [{
                                                        value: s
                                                    }]
                                                }],
                                                _embedded: {
                                                    tags: [{
                                                        name: "\u0417\u0430\u044f\u0432\u043a\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430"
                                                    }]
                                                }
                                            }],
                                            contacts: [{
                                                name: N,
                                                custom_fields_values: [{
                                                    field_id: 731805,
                                                    values: [{
                                                        value: S
                                                    }]
                                                }, {
                                                    field_id: 731807,
                                                    values: [{
                                                        value: C
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
                                            form_name: Q.title,
                                            form_page: "\u0417\u0430\u044f\u0432\u043a\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 ".concat(V.location.pathname)
                                        }
                                    }], new URL(V.location.href).searchParams.forEach((function (e, i) {
                                        l[0]._embedded.leads[0].custom_fields_values.push({
                                            field_id: c.T.find((function (e) {
                                                return e.name === i
                                            })).id,
                                            values: [{
                                                value: e
                                            }]
                                        })
                                    })), j(!0), fetch("/api/amo", {
                                        method: "POST",
                                        body: JSON.stringify(l),
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
                                        }), j(!1), U.push("/thanks"), document.body.classList.toggle("overflowCheck"), i.setShowFormModal(!1)
                                    })).catch((function (e) {
                                        return console.log("error", e)
                                    })), (0, d.ZP)("reachGoal", "send-choice"), (0, d.ZP)("reachGoal", "registratcia"), (0, d.ZP)("reachGoal", "send_form"), m("event", "form", {
                                        event_category: "event",
                                        event_label: "send_form"
                                    }), m("send_form"), m("send-choice")), e.abrupt("return");
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }();
                return (0, l.useEffect)((function () {
                    N && S && P && /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(S) && (null === S || void 0 === S ? void 0 : S.length) > 10 && (null === S || void 0 === S ? void 0 : S.length) < 14 ? T(!1) : T(!0), document.querySelector('.checkbox-container input[type="checkbox"]').checked = !0, document.querySelectorAll('input[name="messenger"]').forEach((function (e) {
                        e.value === P && (e.checked = !0)
                    })), W(window), X(document), _().get(v + "/trial-courses/by-partner/4").then((function (e) {
                        return D(e.data.data)
                    }))
                }), [V, Q, N, S]), (0, h.jsx)("div", {
                    className: p,
                    onClick: function (e) {
                        e.target.classList.contains("modal-active") && (i.setShowFormModal(!1), document.body.classList.remove("overflowCheck"))
                    },
                    children: (0, h.jsxs)("div", {
                        className: "modal__body modal__form",
                        children: [(0, h.jsxs)("div", {
                            className: "modal__form__wrp",
                            children: [(0, h.jsx)("img", {
                                src: "/images/Frame.webp",
                                alt: "",
                                className: "form__img"
                            }), R ? (0, h.jsxs)("div", {
                                className: "form__success",
                                children: [(0, h.jsx)("img", {
                                    src: "/success.svg",
                                    alt: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430"
                                }), (0, h.jsx)("h3", {
                                    children: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430."
                                })]
                            }) : (0, h.jsxs)(h.Fragment, {
                                children: [(0, h.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                                    value: N,
                                    onInput: function (e) {
                                        return b(e.target.value)
                                    }
                                }), (0, h.jsxs)("label", {
                                    htmlFor: "phoneInput",
                                    style: {
                                        width: "100%"
                                    },
                                    children: [(0, h.jsx)("span", {
                                        className: "visually-hidden",
                                        children: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d"
                                    }), (0, h.jsx)(r.ZP, {
                                        international: !0,
                                        countryCallingCodeEditable: !1,
                                        defaultCountry: "RU",
                                        value: S,
                                        onChange: q,
                                        countries: ["RU", "BY", "KG", "KZ"]
                                    })]
                                }), (0, h.jsxs)("div", {
                                    className: "social",
                                    children: [(0, h.jsx)("h3", {
                                        children: "\u041a\u0430\u043a\u0438\u043c \u043c\u0435\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u043e\u043c \u0432\u044b \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435\u0441\u044c?"
                                    }), (0, h.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["Telegram", (0, h.jsx)("input", {
                                            type: "radio",
                                            value: "Telegram",
                                            name: "messenger",
                                            onInput: function (e) {
                                                return Z(e.target.value)
                                            }
                                        }), (0, h.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, h.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["WhatsApp", (0, h.jsx)("input", {
                                            type: "radio",
                                            value: "WhatsApp",
                                            name: "messenger",
                                            onInput: function (e) {
                                                return Z(e.target.value)
                                            }
                                        }), (0, h.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, h.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["Viber", (0, h.jsx)("input", {
                                            type: "radio",
                                            value: "Viber",
                                            name: "messenger",
                                            onInput: function (e) {
                                                return Z(e.target.value)
                                            }
                                        }), (0, h.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, h.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["\u041d\u0435 \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0441\u044c", (0, h.jsx)("input", {
                                            type: "radio",
                                            value: "\u041d\u0435 \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0441\u044c",
                                            name: "messenger",
                                            onInput: function (e) {
                                                return Z(e.target.value)
                                            }
                                        }), (0, h.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    })]
                                }), (0, h.jsxs)("label", {
                                    className: "checkbox-container",
                                    children: [(0, h.jsx)("input", {
                                        type: "checkbox"
                                    }), (0, h.jsx)("span", {
                                        className: "checkmark"
                                    }), "\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043c\u043e\u0438\u0445", (0, h.jsx)("a", {
                                        target: "_blank",
                                        rel: "noreferrer",
                                        href: "/politika_obrabotki_personalnyh_dannyh_16_10_2021.pdf",
                                        children: " \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"
                                    })]
                                }), (0, h.jsx)("button", {
                                    className: "form__btn",
                                    onClick: function () {
                                        var e, i;
                                        (document.querySelector(".form__input").style.borderColor = "#583E90", document.querySelector(".PhoneInputInput").style.borderColor = "#583E90", E) ? (document.querySelector(".form__input").value ? document.querySelector(".PhoneInputInput").style.borderColor = "red" : document.querySelector(".form__input").style.borderColor = "red", ((null === (e = document.querySelector(".PhoneInputInput").value.split(" ").join("")) || void 0 === e ? void 0 : e.length) < 11 || (null === (i = document.querySelector(".PhoneInputInput").value.split(" ").join("")) || void 0 === i ? void 0 : i.length) > 13) && (document.querySelector(".PhoneInputInput").style.borderColor = "red")) : Y()
                                    },
                                    children: f ? (0, h.jsxs)("div", {
                                        className: "lds-ellipsis",
                                        children: [(0, h.jsx)("div", {}), (0, h.jsx)("div", {}), (0, h.jsx)("div", {}), (0, h.jsx)("div", {})]
                                    }) : (0, h.jsx)(h.Fragment, {
                                        children: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"
                                    })
                                })]
                            })]
                        }), (0, h.jsx)("div", {
                            className: "modal-form-close-section",
                            onClick: function () {
                                document.body.classList.remove("overflowCheck"), i.setShowFormModal(!1)
                            },
                            children: "X"
                        })]
                    })
                })
            }
        },
        19363: function (e, i, a) {
            "use strict";
            a.r(i);
            var s = a(67294),
                n = a(2962),
                t = a(46096),
                l = a(85746),
                d = a(13168),
                c = a(25675),
                r = a.n(c),
                o = a(23838),
                u = a(63282),
                m = a(16813),
                _ = a(87619),
                h = a(85893);
            i.default = function () {
                var e = (0, s.useState)(!1),
                    i = e[0],
                    a = e[1],
                    c = (0, s.useState)(!1),
                    v = c[0],
                    p = c[1],
                    x = (0, o.Z)("form"),
                    f = function () {
                        x("open_choice"), x("event", "form", {
                            event_category: "event",
                            event_label: "open_form"
                        }), (0, u.ZP)("reachGoal", "open_choice"), (0, u.ZP)("reachGoal", "open_form"), document.body.classList.toggle("overflowCheck"), a(!0)
                    };
                return (0, h.jsxs)("div", {
                    className: "",
                    children: [(0, h.jsx)(n.PB, {
                        title: "\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0423\u0426 IT Школа WinPoWer",
                        description: "\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u043d\u0430 \u0438\u043d\u0434\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u043a\u043e\u0432 IT Школа WinPoWer",
                        canonical: "https://maxima.school/individual",
                        openGraph: {
                            title: "\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0423\u0426 IT Школа WinPoWer",
                            description: "\u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u043d\u0430 \u0438\u043d\u0434\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043e\u0442 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u043a\u043e\u0432 IT Школа WinPoWer"
                        }
                    }), (0, h.jsx)(t.Z, {}), (0, h.jsxs)("section", {
                        className: "container baner-individual",
                        children: [(0, h.jsxs)("h2", {
                            className: "baner__title individual",
                            children: ["\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 ", (0, h.jsx)("br", {}), " \u043e\u0442 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 IT Школа WinPoWer"]
                        }), (0, h.jsx)("br", {}), (0, h.jsx)("p", {
                            children: "\u041f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0432\u043e\u0439\u0442\u0438 \u0432 IT \u0441 \u043d\u0443\u043b\u044f \u0438\u043b\u0438 \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0433\u043b\u0443\u0431\u0438\u0442\u044c\u0441\u044f \u0432 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e \u0438 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u0438? \u041f\u0440\u0438\u0433\u043b\u0430\u0448\u0430\u0435\u043c \u0432\u0430\u0441 \u043d\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u043e\u0442 \u043d\u0430\u0448\u0438\u0445 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0435\u0439-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432."
                        }), (0, h.jsx)("br", {}), (0, h.jsx)("p", {
                            style: {
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "130%"
                            },
                            children: (0, h.jsx)("i", {
                                children: "\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b?"
                            })
                        }), (0, h.jsxs)("ul", {
                            className: "baner__text individual",
                            children: [(0, h.jsx)("li", {
                                children: "\u0441\u0435\u0440\u044c\u0451\u0437\u043d\u044b\u0439 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u043f\u044b\u0442: \u0433\u0440\u0443\u043f\u043f\u0430 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 IT Школа WinPoWer \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 14 \u043b\u0435\u0442;"
                            }), (0, h.jsx)("li", {
                                children: "\u043c\u044b \u0437\u043d\u0430\u0435\u043c \u0432\u0441\u0451 \u043e\u0431 IT-\u0438\u043d\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u043c, \u043a\u0430\u043a\u0438\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u043d\u0443\u0436\u043d\u044b \u0440\u044b\u043d\u043a\u0443;"
                            }), (0, h.jsx)("li", {
                                children: "\u0442\u043e\u043b\u044c\u043a\u043e \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0433\u043e\u0434\u044f\u0442\u0441\u044f \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445;"
                            }), (0, h.jsx)("li", {
                                children: "\u0431\u043e\u043b\u044c\u0448\u0430\u044f \u044d\u043a\u0441\u043f\u0435\u0440\u0442\u0438\u0437\u0430 \u0432 IT: \u043e\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439."
                            })]
                        }), (0, h.jsxs)("div", {
                            className: "baner__buttons__wrp individual",
                            children: [(0, h.jsx)("button", {
                                style: {
                                    width: "246px"
                                },
                                onClick: f,
                                className: "baner__btn",
                                children: "\u041d\u0430\u0447\u0430\u0442\u044c \u0443\u0447\u0438\u0442\u044c\u0441\u044f"
                            }), (0, h.jsx)("button", {
                                className: "baner__btn",
                                onClick: function () {
                                    (0, u.ZP)("reachGoal", "demo-big"), p(!0)
                                },
                                children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430 0 \u20bd"
                            })]
                        })]
                    }), (0, h.jsx)("section", {
                        className: "baner__wrp",
                        children: (0, h.jsxs)("div", {
                            className: "container individual-education",
                            children: [(0, h.jsx)("h3", {
                                className: "individual-education__title",
                                children: "\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e"
                            }), (0, h.jsxs)("div", {
                                className: "individual-education__description",
                                children: [(0, h.jsx)("div", {
                                    className: "individual-education__description-image",
                                    children: (0, h.jsx)(r(), {
                                        className: "individual-education__image-svg",
                                        width: 450,
                                        height: 325,
                                        src: "/images/individual-education-image.svg",
                                        alt: "Individual education"
                                    })
                                }), (0, h.jsxs)("div", {
                                    className: "individual-education__description-text",
                                    children: [(0, h.jsx)("p", {
                                        children: "\u0412\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0443\u0447\u0430\u0442\u044c \u043e\u043f\u044b\u0442\u043d\u044b\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0441\u0442\u043e\u044f\u043b\u0441\u044f \u0432 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u0438 \u0438 \u0433\u043e\u0442\u043e\u0432 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 \u0441 \u0443\u0447\u0435\u043d\u0438\u043a\u0430\u043c\u0438. \u041d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u0432\u0430\u0441 \u043d\u0430 \u0432\u0441\u0451\u043c \u043f\u0443\u0442\u0438, \u043f\u043e\u043c\u043e\u0433\u0430\u0442\u044c \u0441 \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u044e\u0449\u0438\u043c\u0438 \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438."
                                    }), (0, h.jsx)("p", {
                                        children: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043b\u0430\u043d \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u043e\u0441\u0432\u043e\u0438\u0442\u044c \u0442\u0435\u043e\u0440\u0438\u044e \u0438 \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0435\u0451 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435. \u0412\u0430\u0441 \u043d\u0430\u0443\u0447\u0430\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u0437\u043d\u0430\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447, \u0430 \u043d\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u043f\u0438\u0441\u0430\u0442\u044c \u043a\u043e\u0434."
                                    })]
                                })]
                            })]
                        })
                    }), (0, h.jsx)("section", {
                        className: "individual-advantage",
                        children: (0, h.jsxs)("div", {
                            className: "container",
                            children: [(0, h.jsxs)("h3", {
                                className: "individual-advantage__title",
                                children: ["\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 ", (0, h.jsx)("br", {}), " \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"]
                            }), (0, h.jsxs)("div", {
                                className: "individual-advantage__wrp",
                                children: [(0, h.jsxs)("ul", {
                                    className: "individual-advantage__items",
                                    children: [(0, h.jsxs)("li", {
                                        className: "individual-advantage__items-item",
                                        children: [(0, h.jsxs)("div", {
                                            className: "individual-advantage__items-title",
                                            children: ["\u041e\u043d\u043b\u0430\u0439\u043d ", (0, h.jsx)("br", {}), " - \u0444\u043e\u0440\u043c\u0430\u0442"]
                                        }), (0, h.jsx)("div", {
                                            className: "individual-advantage__items-text",
                                            children: "\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u043d\u0430 \u043d\u0430\u0448\u0435\u0439 \u043e\u043d\u043b\u0430\u0439\u043d-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435."
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-advantage__items-item",
                                        children: [(0, h.jsxs)("div", {
                                            className: "individual-advantage__items-title",
                                            children: ["\u0413\u0438\u0431\u043a\u043e\u0435 ", (0, h.jsx)("br", {}), "\u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"]
                                        }), (0, h.jsx)("div", {
                                            className: "individual-advantage__items-text",
                                            children: "\u041f\u043e\u0434\u0431\u0435\u0440\u0451\u043c \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0434\u043b\u044f \u0432\u0430\u0441 \u0433\u0440\u0430\u0444\u0438\u043a \u0437\u0430\u043d\u044f\u0442\u0438\u0439."
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-advantage__items-item",
                                        children: [(0, h.jsx)("div", {
                                            className: "individual-advantage__items-title",
                                            children: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a\u0430"
                                        }), (0, h.jsx)("div", {
                                            className: "individual-advantage__items-text",
                                            children: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b."
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-advantage__items-item",
                                        children: [(0, h.jsxs)("div", {
                                            className: "individual-advantage__items-title",
                                            children: ["\u041f\u043e\u043c\u043e\u0449\u044c ", (0, h.jsx)("br", {}), " \u0441 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435\u043c"]
                                        }), (0, h.jsx)("div", {
                                            className: "individual-advantage__items-text",
                                            children: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u043b\u043e\u0436\u043d\u044b\u043c\u0438 \u0442\u0435\u043c\u0430\u043c\u0438."
                                        })]
                                    })]
                                }), (0, h.jsxs)("ul", {
                                    className: "individual-advantage__items-two",
                                    children: [(0, h.jsxs)("li", {
                                        className: "individual-advantage__items-two-item",
                                        children: [(0, h.jsxs)("div", {
                                            className: "individual-advantage__items-two-title",
                                            children: ["\u041a\u0443\u0440\u0441\u044b ", (0, h.jsx)("br", {}), " \u0434\u043b\u044f \u0432\u0441\u0435\u0445"]
                                        }), (0, h.jsx)("div", {
                                            className: "individual-advantage__items-two-text",
                                            children: "\u041f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u043d\u043e\u0432\u0438\u0447\u043a\u0430\u043c \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0430\u043c, \u0436\u0435\u043b\u0430\u044e\u0449\u0438\u043c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438"
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-advantage__items-two-item",
                                        children: [(0, h.jsxs)("div", {
                                            className: "individual-advantage__items-two-title",
                                            children: ["\u0417\u043d\u0430\u043d\u0438\u044f, ", (0, h.jsx)("br", {}), " \u043d\u0443\u0436\u043d\u044b\u0435 \u0432\u0430\u043c"]
                                        }), (0, h.jsx)("div", {
                                            className: "individual-advantage__items-two-text",
                                            children: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u0441\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0443\u0447\u0435\u0431\u043d\u044b\u0439 \u0442\u0440\u0435\u043a \u043f\u043e\u0434 \u0432\u0430\u0448 \u0437\u0430\u043f\u0440\u043e\u0441."
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-advantage__items-two-item",
                                        children: [(0, h.jsx)("div", {
                                            className: "individual-advantage__items-two-title",
                                            children: "\u0418\u043d\u0442\u0435\u043d\u0441\u0438\u0432\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435"
                                        }), (0, h.jsx)("div", {
                                            className: "individual-advantage__items-two-text",
                                            children: "\u0411\u0443\u0434\u0443\u0442 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0434\u043b\u044f \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e"
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-advantage__items-two-item",
                                        children: [(0, h.jsx)("div", {
                                            className: "individual-advantage__items-two-title",
                                            children: "\u042d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044e \u0446\u0435\u043b\u0438"
                                        }), (0, h.jsx)("div", {
                                            className: "individual-advantage__items-two-text",
                                            children: "\u0423\u0447\u0438\u0442\u044c\u0441\u044f \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u0435\u0435, \u0447\u0435\u043c \u0432 \u0433\u0440\u0443\u043f\u043f\u0435."
                                        })]
                                    })]
                                })]
                            }), (0, h.jsx)("div", {
                                className: "baner__buttons__wrp individual",
                                children: (0, h.jsx)("button", {
                                    style: {
                                        width: "346px"
                                    },
                                    onClick: f,
                                    className: "baner__btn",
                                    children: "\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e"
                                })
                            })]
                        })
                    }), (0, h.jsx)("section", {
                        className: "individual-faq",
                        children: (0, h.jsxs)("div", {
                            className: "container",
                            children: [(0, h.jsx)("h3", {
                                className: "individual-faq__title",
                                children: "F.A.Q."
                            }), (0, h.jsxs)("div", {
                                className: "individual-faq__wrp",
                                children: [(0, h.jsxs)("div", {
                                    className: "individual-faq__program",
                                    children: [(0, h.jsx)("h4", {
                                        className: "individual-faq__subtitle",
                                        children: "- \u041a\u0430\u043a \u043c\u044b \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043d\u0430 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0438?"
                                    }), (0, h.jsxs)("ul", {
                                        className: "individual-faq__program-items",
                                        children: [(0, h.jsx)("li", {
                                            className: "individual-faq__program-items-list",
                                            children: "1. \u041a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f, \u0432\u044b\u0431\u043e\u0440 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0446\u0435\u043b\u0435\u0439 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f."
                                        }), (0, h.jsx)("li", {
                                            className: "individual-faq__program-items-list",
                                            children: "2. \u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e, \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0443\u0440\u043e\u0432\u043d\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0437\u043d\u0430\u043d\u0438\u0439."
                                        }), (0, h.jsx)("li", {
                                            className: "individual-faq__program-items-list",
                                            children: "3. \u0412\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0442\u0440\u0435\u043a\u0430 \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u044f\u043c\u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430."
                                        }), (0, h.jsx)("li", {
                                            className: "individual-faq__program-items-list",
                                            children: "4. \u0421\u0442\u0430\u0440\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044f."
                                        })]
                                    })]
                                }), (0, h.jsxs)("div", {
                                    className: "individual-faq__directions",
                                    children: [(0, h.jsx)("h4", {
                                        className: "individual-faq__subtitle",
                                        children: "- \u041a\u0430\u043a\u0438\u0435 \u0435\u0441\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f?"
                                    }), (0, h.jsxs)("div", {
                                        className: "individual-faq__directions-wrp",
                                        children: [(0, h.jsxs)("ul", {
                                            className: "individual-faq__directions-items",
                                            children: [(0, h.jsx)("li", {
                                                className: "individual-faq__directions-items-list",
                                                children: "\u041e\u0441\u043d\u043e\u0432\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"
                                            }), (0, h.jsx)("li", {
                                                className: "individual-faq__directions-items-list",
                                                children: "\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 Java"
                                            }), (0, h.jsx)("li", {
                                                className: "individual-faq__directions-items-list",
                                                children: "Junior Automation QA"
                                            }), (0, h.jsx)("li", {
                                                className: "individual-faq__directions-items-list",
                                                children: " \u041e\u0441\u043d\u043e\u0432\u044b Frontend \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0430 React"
                                            }), (0, h.jsx)("li", {
                                                className: "individual-faq__directions-items-list",
                                                children: "\u041e\u0441\u043d\u043e\u0432\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043d\u0430 C#"
                                            })]
                                        }), (0, h.jsx)("div", {
                                            className: "individual-faq__directions-text",
                                            children: "\u0412 \u0443\u0447\u0435\u0431\u043d\u043e\u043c \u0446\u0435\u043d\u0442\u0440\u0435 IT Школа WinPoWer \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 \u0441 \u043e\u0431\u0448\u0438\u0440\u043d\u044b\u043c \u0441\u043a\u0438\u043b\u043b\u0441\u0435\u0442\u043e\u043c, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0438\u043c \u0437\u043d\u0430\u043d\u0438\u0435 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u043d\u0430\u0432\u044b\u043a\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u041c\u044b \u043c\u043e\u0436\u0435\u043c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0432\u0430\u0448\u0438\u0445 \u0437\u0430\u0434\u0430\u0447 \u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e\u0441\u0442\u0435\u0439."
                                        })]
                                    })]
                                }), (0, h.jsxs)("div", {
                                    className: "individual-faq__examples",
                                    children: [(0, h.jsx)("h3", {
                                        className: "individual-faq__examples-title",
                                        children: "\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f:"
                                    }), (0, h.jsxs)("ul", {
                                        className: "individual-faq__examples-items",
                                        children: [(0, h.jsxs)("li", {
                                            className: "individual-faq__examples-item",
                                            children: [(0, h.jsx)(r(), {
                                                className: "individual-faq__examples-item-image",
                                                width: 170,
                                                height: 105,
                                                src: "/images/individual/devOps.svg",
                                                alt: "Individual education DevOps"
                                            }), (0, h.jsx)("h4", {
                                                className: "individual-faq__examples-item-subtitle",
                                                children: "DevOps"
                                            })]
                                        }), (0, h.jsxs)("li", {
                                            className: "individual-faq__examples-item",
                                            children: [(0, h.jsx)(r(), {
                                                className: "individual-faq__examples-item-image",
                                                width: 170,
                                                height: 105,
                                                src: "/images/individual/android.svg",
                                                alt: "Individual education Android dev"
                                            }), (0, h.jsx)("h4", {
                                                className: "individual-faq__examples-item-subtitle",
                                                children: "Android \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430"
                                            })]
                                        }), (0, h.jsxs)("li", {
                                            className: "individual-faq__examples-item",
                                            children: [(0, h.jsx)(r(), {
                                                className: "individual-faq__examples-item-image",
                                                width: 170,
                                                height: 105,
                                                src: "/images/individual/react.svg",
                                                alt: "Individual education React Native dev"
                                            }), (0, h.jsx)("h4", {
                                                className: "individual-faq__examples-item-subtitle",
                                                children: "\u0424\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a React Native"
                                            })]
                                        }), (0, h.jsxs)("li", {
                                            className: "individual-faq__examples-item",
                                            children: [(0, h.jsx)(r(), {
                                                className: "individual-faq__examples-item-image",
                                                width: 170,
                                                height: 105,
                                                src: "/images/individual/sql.svg",
                                                alt: "Individual education SQL dev"
                                            }), (0, h.jsx)("h4", {
                                                className: "individual-faq__examples-item-subtitle",
                                                children: "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u043a\u0443\u0440\u0441 \u043f\u043e SQL"
                                            })]
                                        }), (0, h.jsxs)("li", {
                                            className: "individual-faq__examples-item",
                                            children: [(0, h.jsx)(r(), {
                                                className: "individual-faq__examples-item-image",
                                                width: 170,
                                                height: 105,
                                                src: "/images/individual/dataScience.svg",
                                                alt: "Individual education Data Science dev"
                                            }), (0, h.jsx)("h4", {
                                                className: "individual-faq__examples-item-subtitle",
                                                children: "Data Science"
                                            })]
                                        }), (0, h.jsxs)("li", {
                                            className: "individual-faq__examples-item",
                                            children: [(0, h.jsx)(r(), {
                                                className: "individual-faq__examples-item-image",
                                                width: 170,
                                                height: 105,
                                                src: "/images/individual/team.svg",
                                                alt: "Individual education team lead"
                                            }), (0, h.jsx)("h4", {
                                                className: "individual-faq__examples-item-subtitle",
                                                children: "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439"
                                            })]
                                        })]
                                    }), (0, h.jsx)("p", {
                                        className: "individual-faq__examples-subtitle",
                                        children: "\u0418\u043b\u0438 \u0434\u0440\u0443\u0433\u043e\u0439 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u0440\u0435\u043a \u043f\u043e\u0434 \u0432\u0430\u0448\u0438 \u0437\u0430\u0434\u0430\u0447\u0438*"
                                    })]
                                })]
                            })]
                        })
                    }), (0, h.jsx)("section", {
                        className: "individual-price",
                        children: (0, h.jsxs)("div", {
                            className: "container",
                            children: [(0, h.jsx)("h2", {
                                className: "individual-price__title",
                                children: "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"
                            }), (0, h.jsx)("div", {
                                className: "individual-price__dialog",
                                children: (0, h.jsxs)("div", {
                                    className: "practice__chat",
                                    children: [(0, h.jsx)("div", {
                                        className: "practice__message practice__message-left",
                                        children: "\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435?"
                                    }), (0, h.jsx)("div", {
                                        className: "practice__message practice__message-right",
                                        children: "\u0426\u0435\u043d\u0430 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e."
                                    }), (0, h.jsx)("div", {
                                        className: "practice__message practice__message-left",
                                        children: "\u0418\u0437 \u0447\u0435\u0433\u043e \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0446\u0435\u043d\u0430 \u043a\u0443\u0440\u0441\u0430?"
                                    }), (0, h.jsxs)("div", {
                                        className: "practice__message practice__message-right",
                                        children: ["\u0418\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f, \u0446\u0435\u043b\u0435\u0439 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u0432\u0445\u043e\u0434\u043d\u044b\u0445 ", (0, h.jsx)("br", {}), " \u0437\u043d\u0430\u043d\u0438\u0439 \u0438 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0443\u0447\u0435\u0431\u043d\u044b\u0445 \u0447\u0430\u0441\u043e\u0432."]
                                    })]
                                })
                            }), (0, h.jsx)("h2", {
                                className: "individual-price__title",
                                children: "\u041a\u0430\u043a \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043b\u0430\u043d \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"
                            }), (0, h.jsxs)("div", {
                                className: "individual-price__plan",
                                children: [(0, h.jsxs)("ul", {
                                    className: "individual-price__plan-row",
                                    children: [(0, h.jsxs)("li", {
                                        className: "individual-price__plan-row-item",
                                        children: [(0, h.jsx)("span", {
                                            className: "individual-price__plan-row-number",
                                            children: "1"
                                        }), (0, h.jsx)(r(), {
                                            className: "individual-price__plan-row-image",
                                            width: 152,
                                            height: 152,
                                            src: "/images/individual/plan-image-one-one.svg",
                                            alt: "Individual education plan grade student"
                                        }), (0, h.jsx)("p", {
                                            className: "individual-price__plan-row-text",
                                            children: "\u0423\u0447\u0435\u043d\u0438\u043a \u0440\u0430\u043d\u0435\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u043b \u0432\u0435\u0440\u0441\u0442\u0430\u043b\u044c\u0449\u0438\u043a\u043e\u043c \u0438 \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442 \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b React"
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-price__plan-row-item",
                                        children: [(0, h.jsx)("span", {
                                            className: "individual-price__plan-row-number",
                                            children: "2"
                                        }), (0, h.jsx)(r(), {
                                            className: "individual-price__plan-row-image",
                                            width: 152,
                                            height: 152,
                                            src: "/images/individual/plan-image-one-two.svg",
                                            alt: "Individual education plan consultation"
                                        }), (0, h.jsx)("p", {
                                            className: "individual-price__plan-row-text",
                                            children: "\u0421\u0442\u0443\u0434\u0435\u043d\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0437\u0430\u044f\u0432\u043a\u0443 \u043d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e \u0432 \u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 IT Школа WinPoWer."
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-price__plan-row-item",
                                        children: [(0, h.jsx)("span", {
                                            className: "individual-price__plan-row-number",
                                            children: "3"
                                        }), (0, h.jsx)(r(), {
                                            className: "individual-price__plan-row-image",
                                            width: 152,
                                            height: 152,
                                            src: "/images/individual/plan-image-one-three.svg",
                                            alt: "Individual education teacher test"
                                        }), (0, h.jsx)("p", {
                                            className: "individual-price__plan-row-text",
                                            children: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043d\u0430 30 \u0447\u0430\u0441\u043e\u0432, \u0438\u0441\u0445\u043e\u0434\u044f \u0438\u0437 \u0443\u0440\u043e\u0432\u043d\u044f \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u0443\u0447\u0435\u043d\u0438\u043a\u0430 \u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0445 \u0440\u0430\u043d\u0435\u0435 \u043d\u0430\u0432\u044b\u043a\u043e\u0432."
                                        })]
                                    })]
                                }), (0, h.jsx)("div", {
                                    className: "individual-price__plan-row-line"
                                }), (0, h.jsxs)("ul", {
                                    className: "individual-price__plan-row",
                                    children: [(0, h.jsxs)("li", {
                                        className: "individual-price__plan-row-item",
                                        children: [(0, h.jsx)("span", {
                                            className: "individual-price__plan-row-number",
                                            children: "1"
                                        }), (0, h.jsx)(r(), {
                                            className: "individual-price__plan-row-image",
                                            width: 152,
                                            height: 152,
                                            src: "/images/individual/plan-image-two-one.svg",
                                            alt: "Individual education student QA"
                                        }), (0, h.jsx)("p", {
                                            className: "individual-price__plan-row-text",
                                            children: "\u0423\u0447\u0435\u043d\u0438\u043a \u0445\u043e\u0447\u0435\u0442 \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u043e\u0441\u043d\u043e\u0432\u044b \u0440\u0443\u0447\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u043d\u0443\u043b\u044f."
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-price__plan-row-item",
                                        children: [(0, h.jsx)("span", {
                                            className: "individual-price__plan-row-number",
                                            children: "2"
                                        }), (0, h.jsx)(r(), {
                                            className: "individual-price__plan-row-image",
                                            width: 152,
                                            height: 152,
                                            src: "/images/individual/plan-image-two-two.svg",
                                            alt: "Individual education teacher consultation student"
                                        }), (0, h.jsx)("p", {
                                            className: "individual-price__plan-row-text",
                                            children: "\u041d\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442 \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0443 \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0437\u043d\u0430\u043d\u0438\u0439 \u0438 \u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u044b\u0432\u043e\u0434, \u0447\u0442\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043f\u043e\u0434 \u043d\u043e\u0432\u0438\u0447\u043a\u0430 \u0438 \u043d\u0430\u0447\u0430\u0442\u044c \u0441 \u0431\u0430\u0437\u044b."
                                        })]
                                    }), (0, h.jsxs)("li", {
                                        className: "individual-price__plan-row-item",
                                        children: [(0, h.jsx)("span", {
                                            className: "individual-price__plan-row-number",
                                            children: "3"
                                        }), (0, h.jsx)(r(), {
                                            className: "individual-price__plan-row-image",
                                            width: 152,
                                            height: 152,
                                            src: "/images/individual/plan-image-two-three.svg",
                                            alt: "Individual education teacher create plan to student"
                                        }), (0, h.jsx)("p", {
                                            className: "individual-price__plan-row-text",
                                            children: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u0442 \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u0440\u0435\u043a \u043d\u0430 40 \u0447\u0430\u0441\u043e\u0432 \u0434\u043b\u044f \u043e\u0441\u0432\u043e\u0435\u043d\u0438\u044f \u043e\u0441\u043d\u043e\u0432 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441 \u043d\u0443\u043b\u044f."
                                        })]
                                    })]
                                }), (0, h.jsx)("div", {
                                    className: "individual-price__plan-row-line"
                                })]
                            }), (0, h.jsx)("p", {
                                className: "individual-price__plan-subtitle",
                                children: "\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u0441\u0440\u043e\u043a\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u0431\u0443\u0434\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0440\u043e\u0432\u043d\u044f \u0438\u0445 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438"
                            }), (0, h.jsx)("div", {
                                className: "baner__buttons__wrp individual",
                                children: (0, h.jsx)("button", {
                                    style: {
                                        width: "306px"
                                    },
                                    onClick: f,
                                    className: "baner__btn",
                                    children: "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c"
                                })
                            })]
                        })
                    }), (0, h.jsx)(l.Z, {}), (0, h.jsx)(d.Z, {}), (0, h.jsx)(m.default, {
                        modal: {
                            showFormModal: i,
                            setShowFormModal: a
                        }
                    }), (0, h.jsx)(_.Z, {
                        modal: {
                            showFormModal: v,
                            setShowFormModal: p
                        }
                    })]
                })
            }
        },
        46084: function (e, i, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/individual", function () {
                return a(19363)
            }])
        }
    },
    function (e) {
        e.O(0, [3247, 9612, 4081, 1033, 8838, 3420, 1763, 3421, 9774, 2888, 179], (function () {
            return i = 46084, e(e.s = i);
            var i
        }));
        var i = e.O();
        _N_E = i
    }
]);