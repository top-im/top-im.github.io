"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5170], {
        87619: function (e, t, s) {
            s(35797);
            var a = s(64749),
                n = s(50029),
                r = s(87794),
                i = s.n(r),
                o = s(67294),
                c = s(63282),
                l = s(32670),
                u = (s(38973), s(15034)),
                d = s(23838),
                m = s(11163),
                f = s(9669),
                h = s.n(f),
                _ = s(85893),
                p = "https://learn.maxima.school/";
            t.Z = function (e) {
                var t = e.modal,
                    s = (e.titleForForm, (0, d.Z)("form")),
                    r = t.showFormModal ? "modal modal-active" : "modal modal-disable",
                    f = (0, o.useState)(!1),
                    v = f[0],
                    x = f[1],
                    j = (0, o.useState)(""),
                    g = j[0],
                    N = j[1],
                    w = (0, o.useState)(""),
                    b = w[0],
                    y = w[1],
                    S = (0, o.useState)(""),
                    C = S[0],
                    k = S[1],
                    Z = (0, o.useState)(""),
                    E = Z[0],
                    F = Z[1],
                    I = (0, o.useState)("Telegram"),
                    P = I[0],
                    T = (I[1], (0, o.useState)(!0)),
                    A = T[0],
                    G = T[1],
                    R = (0, o.useState)(""),
                    L = R[0],
                    O = R[1],
                    K = (0, o.useState)(""),
                    M = K[0],
                    U = K[1],
                    q = (0, o.useState)(!1),
                    D = q[0],
                    J = q[1],
                    B = (0, o.useState)([]),
                    H = B[0],
                    V = B[1],
                    X = (0, o.useState)(""),
                    Y = X[0],
                    z = X[1],
                    Q = (0, m.useRouter)(),
                    W = (0, o.useState)({
                        title: ""
                    }),
                    $ = W[0],
                    ee = W[1],
                    te = (0, o.useState)({
                        location: ""
                    }),
                    se = te[0],
                    ae = te[1];
                (0, o.useEffect)((function () {
                    ae(window), ee(document), (0, c.ZP)("getClientID", (function (e) {
                        return U(e)
                    }))
                }), []), (0, o.useEffect)((function () {
                    G(!(g && b && C && E && Y)), O("")
                }), [g, b, C, E, Y]);
                var ne = function () {
                        var e = (0, n.Z)(i().mark((function e() {
                            var t, a, n;
                            return i().wrap((function (e) {
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
                                        a = e.sent, g && C && P && (n = [{
                                            source_name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + H.find((function (e) {
                                                return e.id === Y
                                            })).name + " \u0441 " + se.location.pathname,
                                            source_uid: "a1fee7c0fc436088e64ba2e8822ba2b3",
                                            pipeline_id: 4035451,
                                            _embedded: {
                                                leads: [{
                                                    name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + H.find((function (e) {
                                                        return e.id === Y
                                                    })).name + " \u0441 " + se.location.pathname,
                                                    visitor_uid: "5692210d-58d0-468c-acb2-dce7f93eef87",
                                                    custom_fields_values: [{
                                                        field_id: 956603,
                                                        values: [{
                                                            value: P
                                                        }]
                                                    }, , {
                                                        field_id: 958873,
                                                        values: [{
                                                            value: M
                                                        }]
                                                    }, {
                                                        field_id: 958471,
                                                        values: [{
                                                            value: a
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
                                                            value: C
                                                        }]
                                                    }, {
                                                        field_id: 731807,
                                                        values: [{
                                                            value: E
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
                                                form_name: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + H.find((function (e) {
                                                    return e.id === Y
                                                })).name + " \u0441 " + se.location.pathname,
                                                form_page: "\u0414\u0435\u043c\u043e \u0434\u043e\u0441\u0442\u0443\u043f " + H.find((function (e) {
                                                    return e.id === Y
                                                })).name + " \u0441 " + se.location.pathname
                                            }
                                        }], new URL(se.location.href).searchParams.forEach((function (e, t) {
                                            n[0]._embedded.leads[0].custom_fields_values.push({
                                                field_id: l.T.find((function (e) {
                                                    return e.name === t
                                                })).id,
                                                values: [{
                                                    value: e
                                                }]
                                            })
                                        })), x(!0), fetch("/api/amo", {
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
                                            }), x(!1), (0, c.ZP)("reachGoal", "send-choice"), (0, c.ZP)("reachGoal", "registratcia"), (0, c.ZP)("reachGoal", "send_form"), s("event", "form", {
                                                event_category: "event",
                                                event_label: "send_form"
                                            }), s("send_form"), s("send-choice")
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
                    re = function () {
                        var e = (0, n.Z)(i().mark((function e() {
                            return i().wrap((function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        x(!0), h().post(p + "/temp-user", {
                                            firstName: g,
                                            lastName: b,
                                            phone: C,
                                            email: E,
                                            courseId: Y
                                        }, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            x(!1), J(!0), ne()
                                        })).catch((function (e) {
                                            x(!1), e.response.data.message.includes("email") && O("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"), e.response.data.message.includes("phone") && O("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0434\u0430\u043d\u043d\u044b\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!")
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
                    h().get(p + "/trial-courses/by-partner/".concat("/python-kids" === window.location.pathname ? "493" : "4")).then((function (e) {
                        return V(e.data.data)
                    }))
                }), [se, $]), (0, _.jsx)("div", {
                    className: r,
                    onClick: function (e) {
                        e.target.classList.contains("modal-active") && (t.setShowFormModal(!1), document.body.classList.remove("overflowCheck"))
                    },
                    children: (0, _.jsxs)("div", {
                        className: "modal__body modal__form",
                        id: "modalForm",
                        children: [(0, _.jsxs)("div", {
                            className: "modal__form__wrp",
                            children: [(0, _.jsx)("img", {
                                src: "/images/Frame.webp",
                                alt: "",
                                className: "form__img"
                            }), D ? (0, _.jsxs)("div", {
                                className: "form__success",
                                children: [(0, _.jsx)("img", {
                                    src: "/success.svg",
                                    alt: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430"
                                }), (0, _.jsx)("h3", {
                                    children: "\u0423\u0441\u043f\u0435\u0448\u043d\u043e! \u0422\u0435\u043f\u0435\u0440\u044c \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0439\u0442\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443"
                                }), (0, _.jsx)("button", {
                                    className: "btn",
                                    onClick: function () {
                                        Q.push("https://learn.maxima.school/")
                                    },
                                    children: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443"
                                })]
                            }) : (0, _.jsxs)(_.Fragment, {
                                children: [(0, _.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                                    value: b,
                                    onInput: function (e) {
                                        return y(e.target.value)
                                    }
                                }), (0, _.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "\u0418\u043c\u044f",
                                    value: g,
                                    onInput: function (e) {
                                        return N(e.target.value)
                                    }
                                }), (0, _.jsx)("input", {
                                    type: "text",
                                    className: "form__input",
                                    placeholder: "Email",
                                    value: E,
                                    onInput: function (e) {
                                        return F(e.target.value)
                                    }
                                }), (0, _.jsxs)("label", {
                                    htmlFor: "phoneInput",
                                    style: {
                                        width: "100%"
                                    },
                                    children: [(0, _.jsx)("span", {
                                        className: "visually-hidden",
                                        children: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d"
                                    }), (0, _.jsx)(u.ZP, {
                                        international: !0,
                                        countryCallingCodeEditable: !1,
                                        defaultCountry: "RU",
                                        value: C,
                                        onChange: k,
                                        countries: ["RU", "BY", "KG", "KZ"]
                                    })]
                                }), (0, _.jsx)(a.Z, {
                                    defaultValue: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0443\u0440\u0441",
                                    style: {
                                        width: "100%"
                                    },
                                    onChange: function (e) {
                                        z(e)
                                    },
                                    options: H.map((function (e) {
                                        return {
                                            value: e.id,
                                            label: e.name
                                        }
                                    }))
                                }), (0, _.jsx)("div", {
                                    style: {
                                        color: "red"
                                    },
                                    children: L || null
                                }), (0, _.jsx)("button", {
                                    disabled: A,
                                    className: "form__btn",
                                    onClick: function () {
                                        document.querySelector(".form__input").style.borderColor = "#583E90", document.querySelector(".PhoneInputInput").style.borderColor = "#583E90", re()
                                    },
                                    children: v ? (0, _.jsxs)("div", {
                                        className: "lds-ellipsis",
                                        children: [(0, _.jsx)("div", {}), (0, _.jsx)("div", {}), (0, _.jsx)("div", {}), (0, _.jsx)("div", {})]
                                    }) : (0, _.jsx)(_.Fragment, {
                                        children: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"
                                    })
                                })]
                            })]
                        }), (0, _.jsx)("div", {
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
        71588: function (e, t, s) {
            var a = s(25675),
                n = s.n(a),
                r = s(85893);
            t.Z = function (e) {
                e.afterItem;
                return (0, r.jsxs)("section", {
                    className: "course-after container",
                    children: [(0, r.jsx)("h2", {
                        className: "course-favor__title",
                        children: "\u0427\u0442\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u044b \u043d\u0430\u0448\u0438\u0445 \u043a\u0443\u0440\u0441\u043e\u0432?"
                    }), (0, r.jsxs)("ul", {
                        className: "course-after__list",
                        children: [(0, r.jsxs)("li", {
                            className: "course-after__item",
                            children: [(0, r.jsx)(n(), {
                                src: "images/courseAfter-1.svg",
                                width: 115,
                                height: 94
                            }), (0, r.jsx)("p", {
                                className: "course-after__item__text",
                                children: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0435\u0434\u0430\u0433\u043e\u0433\u043e\u0432 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0432\u0441\u0435\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"
                            })]
                        }), (0, r.jsxs)("li", {
                            className: "course-after__item",
                            children: [(0, r.jsx)(n(), {
                                src: "images/courseAfter-2.svg",
                                width: 115,
                                height: 94
                            }), (0, r.jsx)("p", {
                                className: "course-after__item__text",
                                children: "\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u043d\u0438\u044f \u0438 \u043a\u043e\u043d\u043a\u0443\u0440\u0435\u043d\u0442\u043d\u044b\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"
                            })]
                        }), (0, r.jsxs)("li", {
                            className: "course-after__item",
                            children: [(0, r.jsx)(n(), {
                                src: "images/courseAfter-3.svg",
                                width: 115,
                                height: 94
                            }), (0, r.jsx)("p", {
                                className: "course-after__item__text",
                                children: "\u0414\u0438\u043f\u043b\u043e\u043c \u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0445 \u0432\u044b\u043f\u0443\u0441\u043a\u043d\u0438\u043a\u043e\u0432"
                            })]
                        }), (0, r.jsxs)("li", {
                            className: "course-after__item",
                            children: [(0, r.jsx)(n(), {
                                src: "images/courseAfter-4.svg",
                                width: 115,
                                height: 94
                            }), (0, r.jsx)("p", {
                                className: "course-after__item__text",
                                children: '"\u0411\u043e\u0435\u0432\u0430\u044f" \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u0430 \u0438 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435'
                            })]
                        }), (0, r.jsxs)("li", {
                            className: "course-after__item",
                            children: [(0, r.jsx)(n(), {
                                src: "images/courseAfter-5.svg",
                                width: 115,
                                height: 94
                            }), (0, r.jsx)("p", {
                                className: "course-after__item__text",
                                children: "\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0441\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 HR-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0430"
                            })]
                        })]
                    })]
                })
            }
        },
        28110: function (e, t, s) {
            s(67294);
            var a = s(85893);
            t.Z = function (e) {
                var t, s = e.structure;
                return (0, a.jsx)("section", {
                    className: "program__structure",
                    children: (0, a.jsxs)("div", {
                        className: "program__structure__wr container",
                        children: [(0, a.jsx)("h2", {
                            className: "course-favor__title",
                            children: null !== (t = s.title) && void 0 !== t ? t : "\u041a\u0430\u043a \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u0443\u0440\u0441\u0435 \u043f\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e \u041f\u041e? "
                        }), (0, a.jsx)("ul", {
                            className: "program__structure__list",
                            children: s.list.map((function (e, t) {
                                return (0, a.jsxs)("li", {
                                    className: "program__structure__item",
                                    children: [(0, a.jsx)("h4", {
                                        children: e.title
                                    }), (0, a.jsx)("p", {
                                        children: e.text
                                    })]
                                }, t)
                            }))
                        })]
                    })
                })
            }
        }
    }
]);