"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1361], {
        76616: function (e, a, n) {
            n.r(a);
            var t = n(50029),
                s = n(87794),
                r = n.n(s),
                i = n(67294),
                l = n(63282),
                c = n(32670),
                o = n(4298),
                u = n.n(o),
                d = (n(38973), n(15034)),
                m = n(23838),
                p = n(11163),
                _ = n(85893);
            a.default = function (e) {
                var a = e.text,
                    n = e.body,
                    s = void 0 === n ? null : n,
                    o = (e.closeQuiz, e.classNames),
                    h = (0, m.Z)("form"),
                    f = (0, i.useState)(!1),
                    v = f[0],
                    x = f[1],
                    j = (0, i.useState)(""),
                    g = j[0],
                    b = j[1],
                    N = (0, i.useState)(""),
                    k = N[0],
                    y = N[1],
                    w = (0, i.useState)(""),
                    q = w[0],
                    z = (w[1], (0, i.useState)("Telegram")),
                    S = z[0],
                    I = z[1],
                    F = (0, i.useState)(!0),
                    P = F[0],
                    C = F[1],
                    Z = (0, i.useState)(!1),
                    G = Z[0],
                    E = (Z[1], (0, i.useState)("")),
                    A = E[0],
                    R = E[1],
                    T = (0, p.useRouter)(),
                    V = (0, i.useState)({
                        title: ""
                    }),
                    W = V[0],
                    K = V[1];
                (0, i.useEffect)((function () {
                    (0, l.ZP)("getClientID", (function (e) {
                        return R(e)
                    }))
                }), []);
                var Q = (0, i.useState)({
                        location: ""
                    }),
                    U = Q[0],
                    B = Q[1],
                    O = function () {
                        var e = (0, t.Z)(r().mark((function e() {
                            var a, n, t;
                            return r().wrap((function (e) {
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
                                        return n = e.sent, g && k && S && (t = [{
                                            source_name: U.location.pathname,
                                            source_uid: "a1fee7c0fc436088e64ba2e8822ba2b3",
                                            pipeline_id: 4035451,
                                            _embedded: {
                                                leads: [{
                                                    name: W.title,
                                                    visitor_uid: "5692210d-58d0-468c-acb2-dce7f93eef87",
                                                    custom_fields_values: [{
                                                        field_id: 956603,
                                                        values: [{
                                                            value: S
                                                        }]
                                                    }, {
                                                        field_id: 958873,
                                                        values: [{
                                                            value: A
                                                        }]
                                                    }, {
                                                        field_id: 957527,
                                                        values: [{
                                                            value: s || ""
                                                        }]
                                                    }, {
                                                        field_id: 958471,
                                                        values: [{
                                                            value: n
                                                        }]
                                                    }],
                                                    _embedded: {
                                                        tags: [{
                                                            name: "\u0417\u0430\u044f\u0432\u043a\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430"
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
                                                            value: q
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
                                                form_name: W.title,
                                                form_page: "\u0417\u0430\u044f\u0432\u043a\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 ".concat(U.location.pathname)
                                            }
                                        }], new URL(U.location.href).searchParams.forEach((function (e, a) {
                                            t[0]._embedded.leads[0].custom_fields_values.push({
                                                field_id: c.T.find((function (e) {
                                                    return e.name === a
                                                })).id,
                                                values: [{
                                                    value: e
                                                }]
                                            })
                                        })), x(!0), fetch("/api/amo", {
                                            method: "POST",
                                            body: JSON.stringify(t),
                                            headers: {
                                                "Content-Type": "application/json"
                                            }
                                        }).then((function (e) {
                                            return e.text()
                                        })).then((function (e) {
                                            x(!1), T.push("/thanks")
                                        })).catch((function (e) {
                                            return console.log("error", e)
                                        })), (0, l.ZP)("reachGoal", "ask_question"), s && (h("step4"), (0, l.ZP)("reachGoal", "step4")), (0, l.ZP)("reachGoal", "send_form"), h("event", "lead", {
                                            event_category: "event",
                                            event_label: "send_quiz_form"
                                        }), h("send_form")), e.abrupt("return");
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
                return (0, i.useEffect)((function () {
                    g && k && S && /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm.test(k) && (null === k || void 0 === k ? void 0 : k.length) > 10 && (null === k || void 0 === k ? void 0 : k.length) < 14 ? C(!1) : C(!0), document.querySelector('.checkbox-container input[type="checkbox"]').checked = !0, s ? document.querySelectorAll('input[name="messenger__main-quiz"]').forEach((function (e) {
                        e.value === S && (e.checked = !0)
                    })) : document.querySelectorAll('input[name="messenger__main"]').forEach((function (e) {
                        e.value === S && (e.checked = !0)
                    })), B(window), K(document)
                }), [U, W, g, k]), (0, _.jsxs)("section", {
                    className: "".concat(o, " form container"),
                    children: [G ? (0, _.jsx)(_.Fragment, {
                        children: s ? (0, _.jsxs)("h2", {
                            className: "form__title success__form",
                            children: ["\u041e\u0442\u043b\u0438\u0447\u043d\u043e! \u0412 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440, \u0437\u0430\u0434\u0430\u0441\u0442 \u0443\u0442\u043e\u0447\u043d\u044f\u044e\u0449\u0438\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0441 \u0432\u044b\u0431\u043e\u0440\u043e\u043c.", (0, _.jsx)("br", {}), "\u0410 \u043f\u043e\u043a\u0430 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0430\u0441 \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445:"]
                        }) : (0, _.jsx)(_.Fragment, {})
                    }) : (0, _.jsxs)("h2", {
                        className: "form__title",
                        children: [a, " "]
                    }), (0, _.jsx)("div", {
                        className: "modal__form__wrp",
                        children: G ? (0, _.jsx)("div", {
                            className: "form__success",
                            children: s ? (0, _.jsxs)(_.Fragment, {
                                children: [(0, _.jsx)("div", {
                                    id: "vk_groups"
                                }), (0, _.jsx)(u(), {
                                    id: "VKWidgets",
                                    children: VK.Widgets.Group("vk_groups", {
                                        mode: 4,
                                        wide: 1,
                                        height: 400,
                                        color1: "FFFFFF",
                                        color2: "000000",
                                        color3: "5181B8"
                                    }, 213757297)
                                })]
                            }) : (0, _.jsx)(_.Fragment, {})
                        }) : (0, _.jsxs)(_.Fragment, {
                            children: [(0, _.jsx)("input", {
                                type: "text",
                                className: "form__input",
                                placeholder: "\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f",
                                value: g,
                                onInput: function (e) {
                                    return b(e.target.value)
                                }
                            }), (0, _.jsxs)("label", {
                                htmlFor: "phoneInput",
                                style: {
                                    width: "100%"
                                },
                                children: [(0, _.jsx)("span", {
                                    className: "visually-hidden",
                                    children: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d"
                                }), (0, _.jsx)(d.ZP, {
                                    international: !0,
                                    countryCallingCodeEditable: !1,
                                    defaultCountry: "RU",
                                    value: k,
                                    onChange: y,
                                    countries: ["RU", "BY", "KG", "KZ"]
                                })]
                            }), (0, _.jsxs)("div", {
                                className: "social",
                                children: [(0, _.jsx)("h3", {
                                    children: "\u041a\u0430\u043a\u0438\u043c \u043c\u0435\u0441\u0435\u043d\u0434\u0436\u0435\u0440\u043e\u043c \u0432\u044b \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435\u0441\u044c?"
                                }), s ? (0, _.jsxs)(_.Fragment, {
                                    children: [(0, _.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["Telegram", (0, _.jsx)("input", {
                                            type: "radio",
                                            value: "Telegram",
                                            name: "messenger__main-quiz",
                                            onInput: function (e) {
                                                return I(e.target.value)
                                            }
                                        }), (0, _.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, _.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["WhatsApp", (0, _.jsx)("input", {
                                            type: "radio",
                                            value: "WhatsApp",
                                            name: "messenger__main-quiz",
                                            onInput: function (e) {
                                                return I(e.target.value)
                                            }
                                        }), (0, _.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, _.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["Viber", (0, _.jsx)("input", {
                                            type: "radio",
                                            value: "Viber",
                                            name: "messenger__main-quiz",
                                            onInput: function (e) {
                                                return I(e.target.value)
                                            }
                                        }), (0, _.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, _.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["\u041d\u0435 \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0441\u044c", (0, _.jsx)("input", {
                                            type: "radio",
                                            value: "\u041d\u0435 \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0441\u044c",
                                            name: "messenger__main-quiz",
                                            onInput: function (e) {
                                                return I(e.target.value)
                                            }
                                        }), (0, _.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    })]
                                }) : (0, _.jsxs)(_.Fragment, {
                                    children: [(0, _.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["Telegram", (0, _.jsx)("input", {
                                            type: "radio",
                                            value: "Telegram",
                                            name: "messenger__main",
                                            onInput: function (e) {
                                                return I(e.target.value)
                                            }
                                        }), (0, _.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, _.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["WhatsApp", (0, _.jsx)("input", {
                                            type: "radio",
                                            value: "WhatsApp",
                                            name: "messenger__main",
                                            onInput: function (e) {
                                                return I(e.target.value)
                                            }
                                        }), (0, _.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, _.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["Viber", (0, _.jsx)("input", {
                                            type: "radio",
                                            value: "Viber",
                                            name: "messenger__main",
                                            onInput: function (e) {
                                                return I(e.target.value)
                                            }
                                        }), (0, _.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    }), (0, _.jsxs)("label", {
                                        className: "radio-container",
                                        children: ["\u041d\u0435 \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0441\u044c", (0, _.jsx)("input", {
                                            type: "radio",
                                            value: "\u041d\u0435 \u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0441\u044c",
                                            name: "messenger__main",
                                            onInput: function (e) {
                                                return I(e.target.value)
                                            }
                                        }), (0, _.jsx)("span", {
                                            className: "radio-checkmark"
                                        })]
                                    })]
                                })]
                            }), (0, _.jsxs)("label", {
                                className: "checkbox-container",
                                children: [(0, _.jsx)("input", {
                                    type: "checkbox"
                                }), (0, _.jsx)("span", {
                                    className: "checkmark"
                                }), "\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043c\u043e\u0438\u0445", (0, _.jsx)("a", {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    href: "/politika_obrabotki_personalnyh_dannyh_16_10_2021.pdf",
                                    children: " \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"
                                })]
                            }), (0, _.jsx)("button", {
                                className: "form__btn",
                                onClick: function () {
                                    var e, a;
                                    (document.querySelector(".form__input").style.borderColor = "#583E90", document.querySelector(".PhoneInputInput").style.borderColor = "#583E90", P) ? (document.querySelector(".form__input").value ? document.querySelector(".PhoneInputInput").style.borderColor = "red" : document.querySelector(".form__input").style.borderColor = "red", ((null === (e = document.querySelector(".PhoneInputInput").value.split(" ").join("")) || void 0 === e ? void 0 : e.length) < 11 || (null === (a = document.querySelector(".PhoneInputInput").value.split(" ").join("")) || void 0 === a ? void 0 : a.length) > 13) && (document.querySelector(".PhoneInputInput").style.borderColor = "red")) : O()
                                },
                                children: v ? (0, _.jsxs)("div", {
                                    className: "lds-ellipsis",
                                    children: [(0, _.jsx)("div", {}), (0, _.jsx)("div", {}), (0, _.jsx)("div", {}), (0, _.jsx)("div", {})]
                                }) : (0, _.jsx)(_.Fragment, {
                                    children: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"
                                })
                            })]
                        })
                    })]
                })
            }
        },
        41361: function (e, a, n) {
            n.r(a);
            var t = n(67294),
                s = (n(22304), n(64713)),
                r = n(74048),
                i = n(76616),
                l = n(63282),
                c = n(4298),
                o = n.n(c),
                u = n(23838),
                d = n(25675),
                m = n.n(d),
                p = n(85893),
                _ = {
                    steps: [{
                        title: "\u041a\u0430\u043a\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u043e\u0433\u043e?",
                        answer: ["\u041c\u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u0432\u044b\u0431\u043e\u0440\u0435", "\u0418\u043d\u0436\u0435\u043d\u0435\u0440-\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0449\u0438\u043a", "\u0424\u0440\u043e\u043d\u0442\u0435\u043d\u0434 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442", "\u0411\u044d\u043a\u0435\u043d\u0434 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442", "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430 \u0421#"],
                        images: ["/images/quiz/help.webp", "/images/quiz/testing.webp", "/images/quiz/Frontend.webp", "/images/quiz/backend.webp", "/images/quiz/chsrp.webp"],
                        defaultAnswer: 0
                    }, {
                        title: "\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435?",
                        answer: ["\u0421\u0447\u0438\u0442\u0430\u044e \u0435\u0433\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u044b\u043c \u0434\u043b\u044f \u043e\u0441\u0432\u043e\u0435\u043d\u0438\u044f", "\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0438\u043c\u0435\u043d\u043d\u043e \u044d\u0442\u0438\u043c", "\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0432 \u044d\u0442\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0438", "\u0414\u0440\u0443\u0433\u043e\u0435 (\u043d\u0430\u043f\u0438\u0448\u0438\u0442\u0435, \u0447\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e)"],
                        defaultAnswer: 0
                    }, {
                        title: "\u0415\u0441\u0442\u044c \u043b\u0438 \u0443\u0436\u0435 \u0443 \u0432\u0430\u0441 \u043e\u043f\u044b\u0442 \u0432 \u0418\u0422-\u0441\u0444\u0435\u0440\u0435?",
                        answer: ["\u041d\u0435\u0442, \u043f\u043e\u043a\u0430 \u043d\u0435 \u0431\u044b\u043b\u043e \u043e\u043f\u044b\u0442\u0430", "\u0414\u0430, \u043e\u043f\u044b\u0442 \u0435\u0441\u0442\u044c"],
                        defaultAnswer: 0
                    }]
                };
            a.default = function (e) {
                var a = e.showQuiz,
                    n = e.setShowQuiz,
                    c = a ? "quiz quiz-active" : "quiz quiz-disable",
                    d = (0, t.useState)(0),
                    h = d[0],
                    f = d[1],
                    v = (0, t.useState)("\u041c\u043d\u0435 \u043d\u0443\u0436\u043d\u0430 \u043f\u043e\u043c\u043e\u0449\u044c \u0432 \u0432\u044b\u0431\u043e\u0440\u0435"),
                    x = v[0],
                    j = v[1],
                    g = (0, t.useState)("\u0421\u0447\u0438\u0442\u0430\u044e \u0435\u0433\u043e \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0441\u0442\u044b\u043c \u0434\u043b\u044f \u043e\u0441\u0432\u043e\u0435\u043d\u0438\u044f"),
                    b = g[0],
                    N = g[1],
                    k = (0, t.useState)("\u041e\u043f\u044b\u0442\u0430 \u043d\u0435\u0442"),
                    y = k[0],
                    w = k[1],
                    q = (0, u.Z)("form"),
                    z = function () {
                        document.body.style.overflow = "visible", n(!1)
                    };
                return (0, t.useEffect)((function () {}), [h]), (0, p.jsxs)("div", {
                    className: c,
                    children: [(0, p.jsx)(o(), {
                        type: "text/javascript",
                        src: "https://vk.com/js/api/openapi.js?168"
                    }), (0, p.jsx)("div", {
                        className: "quiz__btn__close",
                        onClick: z,
                        children: "X"
                    }), (0, p.jsxs)("div", {
                        className: "container quiz__wrp animate__animated  animate__fadeIn",
                        children: [0 === h ? (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)("div", {
                                className: "quiz__title",
                                children: _.steps[0].title
                            }), (0, p.jsx)("div", {
                                className: "quiz__wrp__answers",
                                children: _.steps[0].answer.map((function (e, a) {
                                    return (0, p.jsxs)("div", {
                                        onClick: function () {
                                            return function (e) {
                                                q("step1"), f(1), (0, l.ZP)("reachGoal", "step1"), j(e)
                                            }(e)
                                        },
                                        className: "quiz__item__answer",
                                        children: [(0, p.jsx)(m(), {
                                            width: 208,
                                            height: 208,
                                            src: _.steps[0].images[a],
                                            alt: ""
                                        }), (0, p.jsx)("p", {
                                            children: e
                                        })]
                                    }, a)
                                }))
                            }), (0, p.jsx)("div", {
                                className: "btn btn-primary btn-centered",
                                onClick: function () {
                                    q("step1"), (0, l.ZP)("reachGoal", "step1"), f(2)
                                },
                                children: "\u0414\u0430\u043b\u0435\u0435"
                            })]
                        }) : (0, p.jsx)(p.Fragment, {}), 1 === h ? (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)("div", {
                                className: "quiz__title animate__animated  animate__fadeInRight",
                                children: _.steps[1].title
                            }), (0, p.jsx)("div", {
                                className: "quiz__wrp__answers quiz__wrp__answers-radios",
                                children: (0, p.jsx)(s.ZP.Group, {
                                    onChange: function (e) {
                                        q("step2"), f(2), (0, l.ZP)("reachGoal", "step2"), N(e.target.value)
                                    },
                                    value: b,
                                    className: "animate__animated  animate__fadeInRight",
                                    children: (0, p.jsx)(r.default, {
                                        direction: "vertical",
                                        children: _.steps[1].answer.map((function (e, a) {
                                            return (0, p.jsx)(s.ZP, {
                                                value: e,
                                                children: e
                                            }, a)
                                        }))
                                    })
                                })
                            }), (0, p.jsx)("div", {
                                className: "btn btn-primary btn-centered",
                                onClick: function () {
                                    q("step2"), (0, l.ZP)("reachGoal", "step2"), f(2)
                                },
                                children: "\u0414\u0430\u043b\u0435\u0435"
                            })]
                        }) : (0, p.jsx)(p.Fragment, {}), 2 === h ? (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)("div", {
                                className: "quiz__title animate__animated  animate__fadeInRight",
                                children: _.steps[2].title
                            }), (0, p.jsx)("div", {
                                className: "quiz__wrp__answers quiz__wrp__answers-radios",
                                children: (0, p.jsx)(s.ZP.Group, {
                                    onChange: function (e) {
                                        q("step3"), f(3), (0, l.ZP)("reachGoal", "step3"), w(e.target.value)
                                    },
                                    value: y,
                                    className: "animate__animated  animate__fadeInRight",
                                    children: (0, p.jsx)(r.default, {
                                        direction: "vertical",
                                        children: _.steps[2].answer.map((function (e, a) {
                                            return (0, p.jsx)(s.ZP, {
                                                value: e,
                                                children: e
                                            }, a)
                                        }))
                                    })
                                })
                            }), (0, p.jsx)("div", {
                                className: "btn btn-primary btn-centered",
                                onClick: function () {
                                    q("step3"), f(3), (0, l.ZP)("reachGoal", "step3")
                                },
                                children: "\u0414\u0430\u043b\u0435\u0435"
                            })]
                        }) : (0, p.jsx)(p.Fragment, {}), 3 === h ? (0, p.jsx)(i.default, {
                            classNames: "animate__animated  animate__fadeInRight quiz__form",
                            closeQuiz: z,
                            body: "1 - ".concat(x, " 2 - ").concat(b, " 3 - ").concat(y),
                            text: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448\u0438 \u043e\u0442\u0432\u0435\u0442\u044b! \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u043c\u0435\u0441\u0441\u0435\u043d\u0434\u0436\u0435\u0440 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043a\u0443\u0440\u0441\u0430"
                        }) : (0, p.jsx)(p.Fragment, {})]
                    })]
                })
            }
        }
    }
]);