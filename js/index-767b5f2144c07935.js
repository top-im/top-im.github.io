(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        41059: function (e, t, a) {
            "use strict";
            var s = a(41664),
                n = a.n(s),
                i = a(72344),
                r = a(85893);
            t.Z = function (e) {
                var t = e.courseOffer;
                return (0, r.jsx)("li", {
                    children: (0, r.jsx)(n(), {
                        href: null !== t && void 0 !== t && t.key ? "/" + t.key : "",
                        children: (0, r.jsxs)("a", {
                            className: "courses__item",
                            children: [(0, r.jsx)("p", {
                                className: "courses__item-title",
                                children: "\u041a\u0443\u0440\u0441:"
                            }), (0, r.jsx)("p", {
                                className: "courses__item-text",
                                children: null !== t && void 0 !== t && t.name ? t.name : ""
                            }), (0, r.jsx)("p", {
                                className: "courses__item-duration",
                                children: null !== t && void 0 !== t && t.duration ? "\u0421\u0440\u043e\u043a \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f " + t.duration : ""
                            }), (0, r.jsxs)("div", {
                                className: "courses__item__wrp",
                                children: [(0, r.jsx)("p", {
                                    className: "courses__item-btn",
                                    children: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"
                                }), (0, r.jsx)("p", {
                                    className: "courses__item-price",
                                    children: null !== t && void 0 !== t && t.price ? (0, i.L)(t.price) : ""
                                })]
                            })]
                        })
                    })
                })
            }
        },
        87619: function (e, t, a) {
            "use strict";
            a(35797);
            var s = a(64749),
                n = a(50029),
                i = a(87794),
                r = a.n(i),
                c = a(67294),
                l = a(63282),
                o = a(32670),
                d = (a(38973), a(15034)),
                _ = a(23838),
                m = a(11163),
                u = a(9669),
                h = a.n(u),
                x = a(85893),
                p = "https://learn.maxima.school/";
            t.Z = function (e) {
                var t = e.modal,
                    a = (e.titleForForm, (0, _.Z)("form")),
                    i = t.showFormModal ? "modal modal-active" : "modal modal-disable",
                    u = (0, c.useState)(!1),
                    f = u[0],
                    j = u[1],
                    b = (0, c.useState)(""),
                    g = b[0],
                    v = b[1],
                    N = (0, c.useState)(""),
                    y = N[0],
                    w = N[1],
                    S = (0, c.useState)(""),
                    k = S[0],
                    C = S[1],
                    P = (0, c.useState)(""),
                    Z = P[0],
                    T = P[1],
                    F = (0, c.useState)("Telegram"),
                    M = F[0],
                    G = (F[1], (0, c.useState)(!0)),
                    I = G[0],
                    E = G[1],
                    q = (0, c.useState)(""),
                    L = q[0],
                    O = q[1],
                    H = (0, c.useState)(""),
                    R = H[0],
                    U = H[1],
                    B = (0, c.useState)(!1),
                    D = B[0],
                    K = B[1],
                    J = (0, c.useState)([]),
                    Q = J[0],
                    A = J[1],
                    X = (0, c.useState)(""),
                    z = X[0],
                    Y = X[1],
                    V = (0, m.useRouter)(),
                    W = (0, c.useState)({
                        title: ""
                    }),
                    $ = W[0],
                    ee = W[1],
                    te = (0, c.useState)({
                        location: ""
                    }),
                    ae = te[0],
                    se = te[1];
                (0, c.useEffect)((function () {
                    se(window), ee(document), (0, l.ZP)("getClientID", (function (e) {
                        return U(e)
                    }))
                }), []), (0, c.useEffect)((function () {
                    E(!(g && y && k && Z && z)), O("")
                }), [g, y, k, Z, z]);
                var ne = function () {
                        var e = (0, n.Z)(r().mark((function e() {
                            var t, s, n;
                            return r().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = {
                                            method: "GET",
                                            redirect: "follow"
                                        }, e.next = 3, fetch("https://json.geoiplookup.io/", t).then((function (e) {
                                            return e.json()
                                        })).then((function (e) {
                                            return e.ip
                                        }));
                                    case 3:
                                        s = e.sent, g && k && M && (n = [{
                                            source_name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + Q.find((function (e) {
                                                return e.id === z
                                            })).name + " \u0441 " + ae.location.pathname,
                                            source_uid: "a1fee7c0fc436088e64ba2e8822ba2b3",
                                            pipeline_id: 4035451,
                                            _embedded: {
                                                leads: [{
                                                    name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + Q.find((function (e) {
                                                        return e.id === z
                                                    })).name + " \u0441 " + ae.location.pathname,
                                                    visitor_uid: "5692210d-58d0-468c-acb2-dce7f93eef87",
                                                    custom_fields_values: [{
                                                        field_id: 956603,
                                                        values: [{
                                                            value: M
                                                        }]
                                                    }, , {
                                                        field_id: 958873,
                                                        values: [{
                                                            value: R
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
                                                            value: k
                                                        }]
                                                    }, {
                                                        field_id: 731807,
                                                        values: [{
                                                            value: Z
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
                                                form_name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + Q.find((function (e) {
                                                    return e.id === z
                                                })).name + " \u0441 " + ae.location.pathname,
                                                form_page: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + Q.find((function (e) {
                                                    return e.id === z
                                                })).name + " \u0441 " + ae.location.pathname
                                            }
                                        }], new URL(ae.location.href).searchParams.forEach((function (e, t) {
                                            n[0]._embedded.leads[0].custom_fields_values.push({
                                                field_id: o.T.find((function (e) {
                                                    return e.name === t
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
                                            }), j(!1), (0, l.ZP)("reachGoal", "send-choice"), (0, l.ZP)("reachGoal", "registratcia"), (0, l.ZP)("reachGoal", "send_form"), a("event", "form", {
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
                    ie = function () {
                        var e = (0, n.Z)(r().mark((function e() {
                            return r().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        j(!0), h().post(p + "/temp-user", {
                                            firstName: g,
                                            lastName: y,
                                            phone: k,
                                            email: Z,
                                            courseId: z
                                        }, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            j(!1), K(!0), ne()
                                        })).catch((function (e) {
                                            j(!1), e.response.data.message.includes("email") && O("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"), e.response.data.message.includes("phone") && O("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!")
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
                return (0, c.useEffect)((function () {
                    h().get(p + "/trial-courses/by-partner/".concat("/python-kids" === window.location.pathname ? "493" : "4")).then((function (e) {
                        return A(e.data.data)
                    }))
                }), [ae, $]), (0, x.jsx)("div", {
                    className: i,
                    onClick: function (e) {
                        e.target.classList.contains("modal-active") && (t.setShowFormModal(!1), document.body.classList.remove("overflowCheck"))
                    },
                    children: (0, x.jsxs)("div", {
                        className: "modal__body modal__form",
                        id: "modalForm",
                        children: [(0, x.jsxs)("div", {
                            className: "modal__form__wrp",
                            children: [(0, x.jsx)("img", {
                                src: "/images/Frame.webp",
                                alt: "",
                                className: "form__img"
                            }), D ? (0, x.jsxs)("div", {
                                className: "form__success",
                                children: [(0, x.jsx)("img", {
                                    src: "/success.svg",
                                    alt: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430"
                                }), (0, x.jsx)("h3", {
                                    children: "\u0423\u0441\u043f\u0435\u0448\u043d\u043e! \u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0439\u0442\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443"
                                }), (0, x.jsx)("button", {
                                    className: "btn",
                                    onClick: function () {
                                        V.push("https://learn.maxima.school/")
                                    },
                                    children: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443"
                                })]
                            }) : (0, x.jsxs)(x.Fragment, {
                                children: [(0, x.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                                    value: y,
                                    onInput: function (e) {
                                        return w(e.target.value)
                                    }
                                }), (0, x.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0418\u043c\u044f",
                                    value: g,
                                    onInput: function (e) {
                                        return v(e.target.value)
                                    }
                                }), (0, x.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "Email",
                                    value: Z,
                                    onInput: function (e) {
                                        return T(e.target.value)
                                    }
                                }), (0, x.jsxs)("label", {
                                    htmlFor: "phoneInput",
                                    style: {
                                        width: "100%"
                                    },
                                    children: [(0, x.jsx)("span", {
                                        className: "visually-hidden",
                                        children: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d"
                                    }), (0, x.jsx)(d.ZP, {
                                        international: !0,
                                        countryCallingCodeEditable: !1,
                                        defaultCountry: "RU",
                                        value: k,
                                        onChange: C,
                                        countries: ["RU", "BY", "KG", "KZ"]
                                    })]
                                }), (0, x.jsx)(s.Z, {
                                    defaultValue: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441",
                                    style: {
                                        width: "100%"
                                    },
                                    onChange: function (e) {
                                        Y(e)
                                    },
                                    options: Q.map((function (e) {
                                        return {
                                            value: e.id,
                                            label: e.name
                                        }
                                    }))
                                }), (0, x.jsx)("div", {
                                    style: {
                                        color: "red"
                                    },
                                    children: L || null
                                }), (0, x.jsx)("button", {
                                    disabled: I,
                                    className: "form__btn",
                                    onClick: function () {
                                        document.querySelector(".form__input").style.borderColor = "#583E90", document.querySelector(".PhoneInputInput").style.borderColor = "#583E90", ie()
                                    },
                                    children: f ? (0, x.jsxs)("div", {
                                        className: "lds-ellipsis",
                                        children: [(0, x.jsx)("div", {}), (0, x.jsx)("div", {}), (0, x.jsx)("div", {}), (0, x.jsx)("div", {})]
                                    }) : (0, x.jsx)(x.Fragment, {
                                        children: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"
                                    })
                                })]
                            })]
                        }), (0, x.jsx)("div", {
                            className: "modal-form-close-section",
                            onClick: function () {
                                document.body.classList.remove("overflowCheck"), t.setShowFormModal(!1)
                            },
                            children: "X"
                        })]
                    })
                })
            }
        },
        63644: function (e, t, a) {
            "use strict";
            a.d(t, {
                Z: function () {
                    return l
                }
            });
            var s = a(25675),
                n = a.n(s),
                i = a(85893),
                r = function (e) {
                    var t = e.src,
                        a = e.name;
                    return (0, i.jsxs)("li", {
                        className: "partners__item",
                        children: [(0, i.jsx)("div", {
                            className: "partners__item__wrp",
                            children: (0, i.jsx)(n(), {
                                objectFit: "contain",
                                width: 135,
                                height: 135,
                                className: "partners__item__img",
                                src: t,
                                alt: "\u041d\u0430\u0448\u0438 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u044b"
                            })
                        }), (0, i.jsx)("p", {
                            className: "partners__item-title",
                            children: a
                        })]
                    })
                },
                c = [{
                    src: "/images/Partners/partner-1.png",
                    name: "IT Brick"
                }, {
                    src: "/images/Partners/partner-2.png",
                    name: "\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u0418\u043d\u043d\u043e\u043f\u043e\u043b\u0438\u0441"
                }, {
                    src: "/images/Partners/partner-3.png",
                    name: "Test IT"
                }, {
                    src: "/images/Partners/partner-4.png",
                    name: "MPI Supply Chain Management"
                }, {
                    src: "/images/Partners/partner-5.png",
                    name: "Inno Geotech"
                }, {
                    src: "/images/Partners/partner-6.png",
                    name: "JetBrains"
                }],
                l = function () {
                    return (0, i.jsx)("section", {
                        className: "partners",
                        id: "partners",
                        children: (0, i.jsxs)("div", {
                            className: "container",
                            children: [(0, i.jsx)("h2", {
                                className: "partners__title",
                                children: "\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u044b \u0443\u0447\u0435\u0431\u043d\u043e\u0433\u043e \u0446\u0435\u043d\u0442\u0440\u0430 IT Школа WinPoWer"
                            }), (0, i.jsx)("ul", {
                                className: "partners__list",
                                children: c.map((function (e) {
                                    return (0, i.jsx)(r, {
                                        src: e.src,
                                        name: e.name
                                    }, e.src)
                                }))
                            })]
                        })
                    })
                }
        },
        88982: function (e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function () {
                    return M
                }
            });
            var s = a(16835),
                n = a(67294),
                i = a(46096),
                r = a(85893),
                c = function (e) {
                    var t = e.benefit;
                    return (0, r.jsxs)("li", {
                        className: "benefit",
                        children: [(0, r.jsx)("img", {
                            className: "benefit__img",
                            src: "/images/".concat(t.img),
                            alt: ""
                        }), (0, r.jsx)("h3", {
                            className: "benefit__title",
                            children: t.title
                        }), (0, r.jsx)("p", {
                            className: "benefit__text",
                            children: t.text
                        })]
                    })
                },
                l = [{
                    title: "\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430\u043c",
                    text: "\u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447\u0430\u0445, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0432\u044b \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0442\u043e\u043b\u043a\u043d\u0435\u0442\u0435\u0441\u044c, \u043d\u0430\u0447\u0430\u0432 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438.",
                    img: "benefits-1.svg"
                }, {
                    title: "\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434",
                    text: "\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u0432 \u0433\u0440\u0443\u043f\u043f\u0430\u0445 \u0434\u043e 20 \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0441 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u044c\u044e \u043e\u0442 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u043e \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u043c\u0443 \u0437\u0430\u0434\u0430\u043d\u0438\u044e.",
                    img: "benefits-2.svg"
                }, {
                    title: "\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0432\u044b\u043a\u043e\u0432",
                    text: "\u041d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u0437\u0430\u043d\u044f\u0442\u0438\u0438 \u0432\u044b \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0430\u0435\u0442\u0435 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043d\u0430\u0432\u044b\u043a\u0438, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0435 \u0432\u0430\u043c \u0440\u0435\u0448\u0430\u0442\u044c \u0432\u0441\u0435 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438.",
                    img: "benefits-3.svg"
                }, {
                    title: "\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                    text: "\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043e \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447\u0430\u0445 \u0438 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u0445, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u0432\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430.",
                    img: "benefits-5.svg"
                }, {
                    title: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445",
                    text: "\u041b\u0443\u0447\u0448\u0438\u0435 \u0432\u044b\u043f\u0443\u0441\u043a\u043d\u0438\u043a\u0438  \u043f\u043e\u043b\u0443\u0447\u0430\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0439\u0442\u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443 \u0432 IT Школа WinPoWer \u0438\u043b\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f\u0445-\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430\u0445.",
                    img: "benefits-6.svg"
                }, {
                    title: "\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430",
                    text: "\u041f\u0440\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u043c \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0438 \u043a\u0443\u0440\u0441\u043e\u0432 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e.",
                    img: "benefits-4.svg"
                }],
                o = function () {
                    return (0, r.jsxs)("section", {
                        className: "container benefits",
                        children: [(0, r.jsx)("h2", {
                            className: "benefits__title",
                            children: "\u041f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044f \u043a\u0443\u0440\u0441\u043e\u0432"
                        }), (0, r.jsx)("ul", {
                            className: "benefits__list",
                            children: l.map((function (e) {
                                return (0, r.jsx)(c, {
                                    benefit: e
                                }, e.title)
                            }))
                        })]
                    })
                },
                d = a(41059),
                _ = a(63282),
                m = a(23838),
                u = function (e) {
                    var t = e.setShowFormModal,
                        a = e.courses,
                        s = (0, m.Z)("form");
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("section", {
                            className: "courses",
                            id: "courses",
                            children: (0, r.jsxs)("div", {
                                className: "container",
                                children: [(0, r.jsx)("h2", {
                                    className: "courses__title",
                                    children: "\u041a\u0443\u0440\u0441\u044b"
                                }), (0, r.jsx)("ul", {
                                    className: "courses__list",
                                    children: 0 !== a.length ? (0, r.jsx)(r.Fragment, {
                                        children: a.map((function (e, t) {
                                            return (0, r.jsx)(d.Z, {
                                                courseOffer: e
                                            }, e.key)
                                        }))
                                    }) : (0, r.jsx)(r.Fragment, {})
                                })]
                            })
                        }), (0, r.jsxs)("div", {
                            className: "courses__wrp container",
                            children: [(0, r.jsxs)("p", {
                                className: "courses__wrp-text",
                                children: ["\u0417\u0430\u0442\u0440\u0443\u0434\u043d\u044f\u0435\u0442\u0435\u0441\u044c \u0441 \u0432\u044b\u0431\u043e\u0440\u043e\u043c? ", (0, r.jsx)("br", {}), "\u041c\u044b \u043f\u043e\u043c\u043e\u0436\u0435\u043c!"]
                            }), (0, r.jsx)("button", {
                                className: "courses__wrp-btn",
                                onClick: function () {
                                    s("open_choice"), s("event", "form", {
                                        event_category: "event",
                                        event_label: "open_form"
                                    }), (0, _.ZP)("reachGoal", "open_choice"), (0, _.ZP)("reachGoal", "open_form"), document.body.classList.toggle("overflowCheck"), t(!0)
                                },
                                children: "\u041e\u0442\u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c\u0441\u044f"
                            })]
                        })]
                    })
                },
                h = a(25675),
                x = a.n(h),
                p = function () {
                    return (0, r.jsx)("section", {
                        className: "academy__graduate",
                        id: "results",
                        children: (0, r.jsxs)("div", {
                            className: "container",
                            children: [(0, r.jsx)("h2", {
                                className: "academy__graduate-title",
                                children: "\u0427\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0432\u044b\u043f\u0443\u0441\u043a\u043d\u0438\u043a \u043a\u0443\u0440\u0441\u0430?"
                            }), (0, r.jsxs)("ul", {
                                className: "academy__graduate-items",
                                children: [(0, r.jsxs)("li", {
                                    className: "academy__graduate__item",
                                    children: [(0, r.jsx)(x(), {
                                        width: 100,
                                        height: 110,
                                        className: "academy__graduate__item__img",
                                        src: "/images/graduate1.svg",
                                        alt: "\u0417\u043d\u0430\u043d\u0438\u044f, \u043e\u043f\u044b\u0442 \u0438 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435"
                                    }), (0, r.jsxs)("div", {
                                        className: "academy__graduate__item__text",
                                        children: [(0, r.jsx)("p", {
                                            className: "academy__graduate__item__text-title",
                                            children: "\u0417\u043d\u0430\u043d\u0438\u044f, \u043e\u043f\u044b\u0442 \u0438 \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u0435"
                                        }), (0, r.jsx)("p", {
                                            className: "academy__graduate__item__subtitle",
                                            children: "\u041d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u043d\u0430\u043d\u0438\u044f, \u043d\u043e \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043e\u043f\u044b\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447 \u043e\u0442 middle/senior \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u043e\u0432, \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0449\u0438\u0445 \u0441\u0432\u043e\u0439 \u043e\u043f\u044b\u0442 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0435"
                                        })]
                                    })]
                                }), (0, r.jsxs)("li", {
                                    className: "academy__graduate__item",
                                    children: [(0, r.jsx)(x(), {
                                        width: 100,
                                        height: 140,
                                        className: "academy__graduate__item__img",
                                        src: "/images/graduate2.svg",
                                        alt: "\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0430\u0436\u0438\u0440\u043e\u0432\u043a\u0438"
                                    }), (0, r.jsxs)("div", {
                                        className: "academy__graduate__item__text",
                                        children: [(0, r.jsx)("p", {
                                            className: "academy__graduate__item__text-title",
                                            children: "\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0438"
                                        }), (0, r.jsx)("p", {
                                            className: "academy__graduate__item__subtitle",
                                            children: "\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443 \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 IT Школа WinPoWer \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0438\u0445 \u0432\u044b\u043f\u0443\u0441\u043a\u043d\u0438\u043a\u043e\u0432, \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0445 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435."
                                        })]
                                    })]
                                }), (0, r.jsxs)("li", {
                                    className: "academy__graduate__item",
                                    children: [(0, r.jsx)(x(), {
                                        width: 100,
                                        height: 140,
                                        className: "academy__graduate__item__img",
                                        src: "/images/graduate3.svg",
                                        alt: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0430 \u0432\u0441\u0435\u043c \u043f\u0443\u0442\u0438"
                                    }), (0, r.jsxs)("div", {
                                        className: "academy__graduate__item__text",
                                        children: [(0, r.jsx)("p", {
                                            className: "academy__graduate__item__text-title",
                                            children: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"
                                        }), (0, r.jsx)("p", {
                                            className: "academy__graduate__item__subtitle",
                                            children: '\u041d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b \u0441\u043e\u0437\u0434\u0430\u043d\u044b \u043d\u0435 \u0440\u0430\u0434\u0438 "\u043a\u043e\u0440\u043e\u0447\u043a\u0438", \u043d\u043e \u043c\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0432\u0430\u043c\u0438 \u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438.'
                                        })]
                                    })]
                                }), (0, r.jsxs)("li", {
                                    className: "academy__graduate__item",
                                    children: [(0, r.jsx)(x(), {
                                        width: 100,
                                        height: 140,
                                        className: "academy__graduate__item__img",
                                        src: "/images/graduate4.svg",
                                        alt: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043a\u0430\u0442 \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"
                                    }), (0, r.jsxs)("div", {
                                        className: "academy__graduate__item__text",
                                        children: [(0, r.jsx)("p", {
                                            className: "academy__graduate__item__text-title",
                                            children: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0430 \u0432\u0441\u0435\u043c \u043f\u0443\u0442\u0438"
                                        }), (0, r.jsx)("p", {
                                            className: "academy__graduate__item__subtitle",
                                            children: "\u041d\u0430\u0448\u0438 \u043f\u0435\u0434\u0430\u0433\u043e\u0433\u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0437\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0432 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u0435, \u043e\u0442\u0432\u0435\u0442\u044f\u0442 \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u043f\u043e \u0434\u043e\u043c\u0430\u0448\u043d\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u043c."
                                        })]
                                    })]
                                }), (0, r.jsxs)("li", {
                                    className: "academy__graduate__item",
                                    children: [(0, r.jsx)(x(), {
                                        width: 100,
                                        height: 140,
                                        className: "academy__graduate__item__img",
                                        src: "/images/graduate5.svg",
                                        alt: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0430 \u0432\u0441\u0435\u043c \u043f\u0443\u0442\u0438"
                                    }), (0, r.jsxs)("div", {
                                        className: "academy__graduate__item__text",
                                        children: [(0, r.jsx)("p", {
                                            className: "academy__graduate__item__text-title",
                                            children: "100% \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"
                                        }), (0, r.jsx)("p", {
                                            className: "academy__graduate__item__subtitle",
                                            children: "\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0443\u0447\u0435\u043d\u0438\u043a\u043e\u0432, \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0445 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443."
                                        })]
                                    })]
                                }), (0, r.jsxs)("li", {
                                    className: "academy__graduate__item",
                                    children: [(0, r.jsx)(x(), {
                                        width: 100,
                                        height: 140,
                                        className: "academy__graduate__item__img",
                                        src: "/images/graduate6.svg",
                                        alt: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043d\u0430 \u0432\u0441\u0435\u043c \u043f\u0443\u0442\u0438"
                                    }), (0, r.jsxs)("div", {
                                        className: "academy__graduate__item__text",
                                        children: [(0, r.jsx)("p", {
                                            className: "academy__graduate__item__text-title",
                                            children: "\u0421\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435 HR-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430:"
                                        }), (0, r.jsxs)("ul", {
                                            children: [(0, r.jsx)("li", {
                                                className: "academy__graduate__item__subtitle",
                                                children: "\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0438 \u043f\u043e \u043f\u043e\u0438\u0441\u043a\u0443 \u0440\u0430\u0431\u043e\u0442\u044b \u0438 \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044e \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439;"
                                            }), (0, r.jsx)("li", {
                                                className: "academy__graduate__item__subtitle",
                                                children: "\u043e\u0442\u0431\u043e\u0440 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0439;"
                                            }), (0, r.jsx)("li", {
                                                className: "academy__graduate__item__subtitle",
                                                children: "\u0440\u0430\u0437\u0431\u043e\u0440 \u043e\u0448\u0438\u0431\u043e\u043a;"
                                            }), (0, r.jsx)("li", {
                                                className: "academy__graduate__item__subtitle",
                                                children: "\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u043f\u043e\u043c\u043e\u0449\u0438 \u0434\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0436\u043e\u0431-\u043e\u0444\u0444\u0435\u0440\u0430."
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                f = a(85746),
                j = a(63644),
                b = a(13168),
                g = a(32670),
                v = a(70461),
                N = a(50725),
                y = a(5152),
                w = function () {
                    (0, n.useEffect)((function () {
                        var e = document.querySelectorAll(".details-menu__item");

                        function t(t) {
                            var a = this;
                            this.open ? (this.querySelector(".details-menu__item-text").style.opacity = 0, this.querySelector(".details-menu__item-text").style.animation = "opacity .5s forwards", this.querySelector(".details-menu__item-text").style.animationDelay = ".2s") : e.forEach((function (e) {
                                e === a && (e.querySelector(".details-menu__item-text").style.opacity = 0, e.querySelector(".details-menu__item-text").style.animation = "none")
                            }))
                        }
                        e.forEach((function (e) {
                            e.addEventListener("toggle", t)
                        }))
                    }), []);
                    return (0, r.jsxs)("div", {
                        className: "details-menu",
                        children: [(0, r.jsx)("div", {
                            className: "details-menu__title",
                            children: "F.A.Q."
                        }), [{
                            title: "\u041a\u0430\u043a \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442 \u043e\u043f\u043b\u0430\u0442\u0430?",
                            text: "\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0432\u0441\u044e \u0441\u0443\u043c\u043c\u0443 \u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438\u043b\u0438 \u0440\u0430\u0437\u0431\u0438\u0442\u044c \u043d\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043b\u0430\u0442\u0435\u0436\u0435\u0439, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0432\u0448\u0438\u0441\u044c \u0431\u0435\u0441\u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u043e\u0439 \u0440\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u043e\u0439."
                        }, {
                            title: "\u041a\u0430\u043a \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u0437\u0430\u043d\u044f\u0442\u0438\u044f?",
                            text: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u044f\u0442 \u0437\u0430\u043d\u044f\u0442\u0438\u044f \u0434\u0432\u0430\u0436\u0434\u044b \u0432 \u043d\u0435\u0434\u0435\u043b\u044e \u0432 \u0432\u0435\u0447\u0435\u0440\u043d\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u043d\u0430 \u043d\u0430\u0448\u0435\u0439 \u043e\u043d\u043b\u0430\u0439\u043d-\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435. \u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043f\u043e\u0441\u0435\u0449\u0430\u0442\u044c \u0443\u0440\u043e\u043a\u0438 \u0431\u0435\u0437 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432, \u043e\u0434\u043d\u0430\u043a\u043e \u0435\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0443\u0441\u043f\u0435\u0432\u0430\u0435\u0442\u0435 \u043d\u0430 \u0437\u0430\u043d\u044f\u0442\u0438\u0435, \u0435\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 \u0437\u0430\u043f\u0438\u0441\u0438. \u0415\u0441\u043b\u0438 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0442\u0435\u043c\u0430 \u0434\u0430\u0451\u0442\u0441\u044f \u0441 \u0442\u0440\u0443\u0434\u043e\u043c, \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u043a \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044e \u0437\u0430 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u0435\u0439. \u041d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u0430\u0441 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u043a\u0443\u0440\u0430\u0442\u043e\u0440\u044b."
                        }, {
                            title: "\u041a\u0430\u043a\u043e\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u043f\u043e\u0441\u043b\u0435 \u043a\u0443\u0440\u0441\u043e\u0432?",
                            text: "\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 IT Школа WinPoWer \u2014 \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u043c\u044b \u0432\u044b\u0434\u0430\u0451\u043c \u043d\u0430\u0448\u0438\u043c \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c \u0434\u0438\u043f\u043b\u043e\u043c\u044b. \u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441 \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u0438 \u0441\u0434\u0430\u0442\u044c \u044d\u043a\u0437\u0430\u043c\u0435\u043d."
                        }, {
                            title: "\u0427\u0442\u043e \u0431\u0443\u0434\u0435\u0442, \u0435\u0441\u043b\u0438 \u043c\u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435?",
                            text: "\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u0432\u044b \u043f\u043b\u0430\u043d\u0438\u0440\u0443\u0435\u0442\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0432\u0437\u044f\u0442\u044c \u043f\u0430\u0443\u0437\u0443, \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043a\u0443\u0440\u0430\u0442\u043e\u0440\u043e\u043c. \u041c\u044b \u043f\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u043c \u0432\u0430\u0441 \u0432 \u0434\u0440\u0443\u0433\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u0441 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u043c \u0441\u0442\u0430\u0440\u0442\u043e\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f. \u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u0434\u043e\u043f\u043b\u0430\u0442 \u043d\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f."
                        }, {
                            title: "\u041a\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044c?",
                            text: "\u041f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 \u2014 \u043e\u043f\u044b\u0442\u043d\u044b\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u0436\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043b\u0438\u0441\u044c \u0432 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0444\u0435\u0440\u0435 \u0438 \u0445\u043e\u0442\u044f\u0442 \u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u043c\u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u043c\u0438 \u0441 \u043d\u043e\u0432\u0438\u0447\u043a\u0430\u043c\u0438."
                        }, {
                            title: "\u0427\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044e \u043a\u0443\u0440\u0441\u0430 ?",
                            text: "\u041f\u043e\u0441\u043b\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438 \u0438\u0442\u043e\u0433\u043e\u0432\u043e\u0439 \u0430\u0442\u0442\u0435\u0441\u0442\u0430\u0446\u0438\u0438 \u043c\u044b \u043f\u0440\u0438\u0433\u043b\u0430\u0441\u0438\u043c \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0443 \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u044e. \u0417\u0430\u0442\u0435\u043c \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f HR-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442, \u043f\u0440\u043e\u0432\u0435\u0434\u0451\u0442 \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e \u0438 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0441\u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0440\u0430\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u043f\u043e\u0438\u0441\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u044b."
                        }, {
                            title: "\u041d\u0430\u0434\u043e \u043b\u0438 \u0437\u043d\u0430\u0442\u044c \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a?",
                            text: "\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u043e \u0437\u043d\u0430\u043d\u0438\u044e \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u043d\u0435\u0442."
                        }, {
                            title: "\u041a\u0430\u043a\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u0438 \u0441\u043e\u0444\u0442 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f?",
                            text: "\u0412\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0449\u0435 \u0438\u0437\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043a\u0443\u0440\u0441\u0430, \u0435\u0441\u043b\u0438 \u0443 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 2-4 \u044f\u0434\u0435\u0440\u043d\u044b\u0439 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 \u0441 \u043f\u0430\u043c\u044f\u0442\u044c\u044e 8 \u0433\u0438\u0433\u0430\u0431\u0430\u0439\u0442. \u0422\u0430\u043a\u0436\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 Windows 10. \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0441 \u0434\u0440\u0443\u0433\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Mac OS, \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0438 \u0433\u043e\u0440\u044f\u0447\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e (\u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0438\u043b\u0438 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u044c \u0443 \u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044f). \u041d\u0430 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u043e \u043d\u0435 \u043f\u043e\u0432\u043b\u0438\u044f\u0435\u0442."
                        }, {
                            title: "\u041d\u0430\u0434\u043e \u043b\u0438 \u0437\u043d\u0430\u0442\u044c \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0443, \u0435\u0441\u043b\u0438 \u044f \u0445\u043e\u0447\u0443 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c?",
                            text: "\u0417\u043d\u0430\u043d\u0438\u044f \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0438 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043b\u0438\u0448\u043d\u0438\u043c\u0438, \u043e\u0434\u043d\u0430\u043a\u043e \u044d\u0442\u043e \u043d\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u0430 \u0432 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044e."
                        }, {
                            title: "\u0421\u043c\u043e\u0433\u0443 \u043b\u0438 \u044f \u0443\u0441\u0442\u0440\u043e\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u043e\u0441\u043b\u0435 \u0432\u0430\u0448\u0438\u0445 \u043a\u0443\u0440\u0441\u043e\u0432\\\u0432\u0430\u0448\u0435\u0439 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438?",
                            text: "\u0414\u0430, \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u0435\u0442\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0438 junior-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u043e\u0432. \u0422\u0430\u043a\u0436\u0435 \u043c\u044b \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u043c \u043d\u0430\u0448\u0438\u043c \u0443\u0447\u0435\u043d\u0438\u043a\u0430\u043c \u0441 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u043c: \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0435\u043c HR-\u0441\u043e\u043f\u0440\u043e\u0432\u043e\u0436\u0434\u0435\u043d\u0438\u0435 \u0438 \u0441\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435."
                        }].map((function (e, t) {
                            return (0, r.jsxs)("details", {
                                className: "details-menu__item",
                                children: [(0, r.jsxs)("summary", {
                                    className: "details-menu__item-title",
                                    children: [" \xb7 \xa0  ", e.title]
                                }), (0, r.jsx)("p", {
                                    className: "details-menu__item-text",
                                    children: e.text
                                })]
                            }, t)
                        }))]
                    })
                },
                S = a(87619),
                k = (0, y.default)((function () {
                    return Promise.all([a.e(8805), a.e(6118)]).then(a.bind(a, 66118))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return [66118]
                        }
                    }
                }),
                C = (0, y.default)((function () {
                    return Promise.all([a.e(9902), a.e(7235)]).then(a.bind(a, 7235))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return [7235]
                        }
                    }
                }),
                P = (0, y.default)((function () {
                    return Promise.all([a.e(8494), a.e(8112)]).then(a.bind(a, 98112))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return [98112]
                        }
                    }
                }),
                Z = (0, y.default)((function () {
                    return Promise.all([a.e(8805), a.e(9233), a.e(1361)]).then(a.bind(a, 41361))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return [41361]
                        }
                    }
                }),
                T = (0, y.default)((function () {
                    return a.e(6813).then(a.bind(a, 16813))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return [16813]
                        }
                    }
                }),
                F = (0, y.default)((function () {
                    return a.e(6616).then(a.bind(a, 76616))
                }), {
                    loadableGenerated: {
                        webpack: function () {
                            return [76616]
                        }
                    }
                });

            function M() {
                var e = (0, n.useState)(!1),
                    t = e[0],
                    a = e[1],
                    c = (0, n.useState)(!1),
                    l = c[0],
                    d = c[1],
                    m = (0, n.useState)(!1),
                    h = m[0],
                    x = m[1],
                    y = (0, n.useState)(!1),
                    M = y[0],
                    G = y[1],
                    I = (0, n.useState)(!1),
                    E = I[0],
                    q = I[1],
                    L = (0, v.Z)(),
                    O = (0, s.Z)(L, 1)[0],
                    H = (0, n.useContext)(N.CourseContext);
                return (0, n.useEffect)((function () {
                    q("hidden" !== O.happyTicket), document.querySelector("#link-landing") && document.querySelector("#link-landing").classList.add("active-navbar-link")
                }), []), (0, r.jsxs)("div", {
                    className: "index",
                    children: [(0, r.jsx)(i.Z, {}), (0, r.jsxs)("section", {
                        className: "container baner",
                        children: [(0, r.jsxs)("h2", {
                            className: "baner__title",
                            children: ["\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u0446\u0435\u043d\u0442\u0440 ", (0, r.jsx)("br", {}), " \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 IT Школа WinPoWer"]
                        }), (0, r.jsx)("br", {}), (0, r.jsxs)("p", {
                            children: ["\u0412 \u0443\u0447\u0435\u0431\u043d\u043e\u043c \u0446\u0435\u043d\u0442\u0440\u0435, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u043c \u043d\u0430 \u0431\u0430\u0437\u0435 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438, ", (0, r.jsx)("br", {}), " \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0439\u0442\u0438 \u043a\u0443\u0440\u0441\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e\u0434 ", (0, r.jsx)("br", {}), " \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e\u043c \u043e\u043f\u044b\u0442\u043d\u044b\u0445 \u043d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a\u043e\u0432."]
                        }), (0, r.jsx)("br", {}), (0, r.jsx)("p", {
                            children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0443 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u043e\u0432:"
                        }), (0, r.jsxs)("ul", {
                            className: "baner__text",
                            children: [(0, r.jsx)("li", {
                                children: "\u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u0438 - \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0443\u0440\u043e\u0432\u043d\u044f middle/senior;"
                            }), (0, r.jsx)("li", {
                                children: "\u0437\u0430\u043d\u044f\u0442\u0438\u044f \u0432 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0433\u0440\u0443\u043f\u043f\u0430\u0445 \u0441 \u0436\u0438\u0432\u043e\u0439 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u044c\u044e;"
                            }), (0, r.jsx)("li", {
                                children: "\u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0432 IT-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 IT Школа WinPoWer \u0438\u043b\u0438 \u0443 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0439-\u043f\u0430\u0440\u0442\u043d\u0435\u0440\u043e\u0432;"
                            }), (0, r.jsx)("li", {
                                children: (0, r.jsx)("strong", {
                                    children: "100% \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "baner__btn-box",
                            children: [(0, r.jsxs)("div", {
                                className: "baner__buttons__wrp",
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "20px",
                                        width: "100%",
                                        justifyContent: "space-between"
                                    },
                                    children: [(0, r.jsx)("button", {
                                        onClick: function () {
                                            return document.body.style.overflow = "hidden", x(!0), (0, _.ZP)("reachGoal", "click_choice"), !0
                                        },
                                        className: "baner__btn-outline",
                                        children: "\u041f\u043e\u0434\u043e\u0431\u0440\u0430\u0442\u044c \u043a\u0443\u0440\u0441"
                                    }), (0, r.jsx)("a", {
                                        onClick: function () {
                                            return (0, _.ZP)("reachGoal", "click_choice"), !0
                                        },
                                        href: "#courses",
                                        className: "baner__btn-outline",
                                        children: "\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043a\u0443\u0440\u0441\u043e\u0432"
                                    })]
                                }), (0, r.jsx)("div", {
                                    style: {
                                        flexGrow: 1
                                    },
                                    className: "".concat(E ? null : "visibility-btn"),
                                    children: (0, r.jsx)("button", {
                                        style: {
                                            width: "100%",
                                            height: "100%"
                                        },
                                        onClick: function () {
                                            G(!0), (0, _.ZP)("reachGoal", "CASINO "), document.body.classList.toggle("overflowCheck")
                                        },
                                        className: "baner__btn",
                                        children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443"
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "baner__buttons__wrp",
                                children: (0, r.jsx)("button", {
                                    className: "baner__btn",
                                    onClick: function () {
                                        (0, _.ZP)("reachGoal", "demo-big"), d(!0)
                                    },
                                    children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f \u0437\u0430 0 \u20bd"
                                })
                            })]
                        })]
                    }), (0, r.jsx)("br", {}), (0, r.jsx)("br", {}), (0, r.jsx)("section", {
                        className: "baner__video",
                        children: (0, r.jsxs)("div", {
                            className: "container baner__video__wrp",
                            children: [(0, r.jsxs)("div", {
                                className: "baner__video__wrp__txt",
                                children: [(0, r.jsx)("h2", {
                                    className: "benefits__title",
                                    children: "\u0417\u0430\u043d\u044f\u0442\u0438\u044f \u0432 \u0423\u0447\u0435\u0431\u043d\u043e\u043c \u0446\u0435\u043d\u0442\u0440\u0435 IT Школа WinPoWer \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u043e\u043d\u043b\u0430\u0439\u043d"
                                }), (0, r.jsx)("p", {
                                    children: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043f\u0440\u0438\u043c\u0435\u0440 \u043d\u0430\u0448\u0435\u0433\u043e \u0443\u0440\u043e\u043a\u0430 \u043f\u043e Java"
                                }), (0, r.jsx)("button", {
                                    className: "courses__wrp-btn",
                                    onClick: function () {
                                        return a(!0)
                                    },
                                    children: "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044e \u043f\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044e"
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "baner__video__box",
                                children: [(0, r.jsx)("div", {
                                    className: "baner__video__box__preview"
                                }), (0, r.jsx)("button", {
                                    className: "baner__video__box__btn",
                                    onClick: function () {
                                        (0, _.ZP)("reachGoal", "video_click_main"), document.querySelector(".baner__video__box__preview").style.display = "none", document.querySelector(".baner__video__box__btn").style.display = "none", document.querySelector("#video1").src = document.querySelector("#video1").src + "?autoplay=1"
                                    }
                                }), (0, r.jsx)("iframe", {
                                    width: "560",
                                    height: "315",
                                    src: "https://www.youtube.com/embed/FnoHpFTPQPU",
                                    id: "video1",
                                    title: "YouTube video player",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: !0
                                }), (0, r.jsx)("span", {
                                    className: "baner__video__box__circle-1"
                                })]
                            })]
                        })
                    }), (0, r.jsx)("div", {
                        className: "baner__wrp",
                        children: (0, r.jsxs)("ul", {
                            className: "baner__wrp__list container",
                            children: [(0, r.jsxs)("li", {
                                className: "baner__wrp__item",
                                children: [(0, r.jsx)("p", {
                                    className: "baner__wrp__item__title",
                                    children: "4000+"
                                }), (0, r.jsx)("p", {
                                    className: "baner__wrp__item__text",
                                    children: "\u0427\u0435\u043b\u043e\u0432\u0435\u043a \u043e\u043a\u043e\u043d\u0447\u0438\u0432\u0448\u0438\u0445 \u043a\u0443\u0440\u0441\u044b IT Школа WinPoWer"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "baner__wrp__item",
                                children: [(0, r.jsx)("p", {
                                    className: "baner__wrp__item__title",
                                    children: "75%"
                                }), (0, r.jsx)("p", {
                                    className: "baner__wrp__item__text",
                                    children: "\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438 \u043d\u0430\u0448\u0438 \u043a\u0443\u0440\u0441\u044b \u0438 \u043d\u0430\u0448\u043b\u0438 \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"
                                })]
                            }), (0, r.jsxs)("li", {
                                className: "baner__wrp__item",
                                children: [(0, r.jsx)("p", {
                                    className: "baner__wrp__item__title",
                                    children: "80%"
                                }), (0, r.jsx)("p", {
                                    className: "baner__wrp__item__text",
                                    children: "\u0417\u0430\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e\u0442 \u043e\u0442 100 000 \u0440\u0443\u0431. \u0447\u0435\u0440\u0435\u0437 1,5 \u0433\u043e\u0434\u0430 \u043f\u043e\u0441\u043b\u0435 \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430"
                                })]
                            })]
                        })
                    }), (0, r.jsx)(Z, {
                        showQuiz: h,
                        setShowQuiz: x
                    }), (0, r.jsx)(k, {
                        showHappyTicket: M,
                        setShowHappyTicket: G,
                        setShowBtnHappyTicket: q
                    }), (0, r.jsx)(o, {}), (0, r.jsx)(u, {
                        setShowFormModal: a,
                        courses: H.courses
                    }), (0, r.jsx)(C, {}), (0, r.jsx)(p, {}), (0, r.jsx)(P, {}), (0, r.jsx)(w, {}), (0, r.jsx)(F, {
                        text: "\u041e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b? \u041c\u044b \u0441 \u0440\u0430\u0434\u043e\u0441\u0442\u044c\u044e \u043d\u0430 \u043d\u0438\u0445 \u043e\u0442\u0432\u0435\u0442\u0438\u043c!"
                    }), (0, r.jsx)(j.Z, {}), (0, r.jsx)(f.Z, {}), (0, r.jsx)(b.Z, {}), (0, r.jsx)(T, {
                        modal: {
                            showFormModal: t,
                            setShowFormModal: a,
                            modalContent: g.I.mainPageModal
                        }
                    }), (0, r.jsx)(S.Z, {
                        modal: {
                            showFormModal: l,
                            setShowFormModal: d
                        }
                    })]
                })
            }
        },
        72344: function (e, t, a) {
            "use strict";
            a.d(t, {
                C: function () {
                    return r
                },
                L: function () {
                    return l
                }
            });
            var s = a(50029),
                n = a(87794),
                i = a.n(n);

            function r() {
                return c.apply(this, arguments)
            }

            function c() {
                return (c = (0, s.Z)(i().mark((function e() {
                    var t;
                    return i().wrap((function (e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, fetch("https://www.cbr-xml-daily.ru/latest.js");
                            case 2:
                                return t = e.sent, e.next = 5, t.json();
                            case 5:
                                return t = e.sent, e.abrupt("return", {
                                    KZT: t.rates.KZT,
                                    USD: t.rates.USD
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function l(e) {
                return (String(e).toLowerCase().includes("\u043e\u0442") ? "\u043e\u0442 " : "") + String(e).split("").reverse().join("").match(/\d{0,3}/g).join(" ").split("").reverse().join("").trim() + " \u20bd"
            }
        },
        78581: function (e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
                return a(88982)
            }])
        }
    },
    function (e) {
        e.O(0, [3247, 9612, 4081, 1033, 8838, 3420, 4950, 1763, 3421, 9774, 2888, 179], (function () {
            return t = 78581, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);