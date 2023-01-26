(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2641], {
        7816: function (e, t, n) {
            "use strict";
            var a = n(69889),
                r = n.n(a),
                s = n(85893);
            t.Z = function (e) {
                var t = e.text;
                return (0, s.jsxs)("a", {
                    className: r().telegram,
                    href: "https://telegram.me/it_school_Maxima",
                    children: [(0, s.jsx)("svg", {
                        width: "26",
                        height: "22",
                        viewBox: "0 0 26 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, s.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M24.2154 0.117476C22.4871 0.753258 1.18694 8.93625 0.873212 9.08499C-0.169276 9.57909 -0.291151 10.2317 0.576701 10.6732C0.66049 10.7158 2.10222 11.1768 3.78054 11.6977L6.83209 12.6448L13.7612 8.31027C17.5722 5.92624 20.767 3.94892 20.8608 3.91627C21.0961 3.83421 21.2986 3.84188 21.3932 3.93643C21.4594 4.0026 21.4621 4.03581 21.4095 4.13305C21.3747 4.19739 18.844 6.49565 15.7857 9.24028C12.7274 11.9849 10.2169 14.252 10.2068 14.2783C10.1968 14.3045 10.0933 15.6748 9.97692 17.3233L9.76536 20.3206L9.99525 20.2896C10.1217 20.2726 10.3219 20.2073 10.4402 20.1446C10.5585 20.0819 11.3547 19.3607 12.2096 18.5419C13.0645 17.723 13.7935 17.0418 13.8297 17.0278C13.8659 17.014 15.2273 17.9783 16.855 19.1708C18.4827 20.3633 19.9421 21.398 20.0979 21.47C20.5068 21.6589 20.9675 21.6777 21.2666 21.5176C21.5338 21.3746 21.795 21.0194 21.9048 20.6496C21.9473 20.5065 22.8779 16.2068 23.9728 11.0948C25.7957 2.58352 25.9635 1.75949 25.9641 1.31774C25.9647 0.900371 25.9474 0.801094 25.8355 0.581414C25.7567 0.426531 25.6222 0.268398 25.4908 0.175976C25.1903 -0.0353753 24.6929 -0.0581761 24.2154 0.117476Z",
                            fill: "white"
                        })
                    }), t]
                })
            }
        },
        97223: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return j
                }
            });
            var a = n(67777),
                r = n.n(a),
                s = n(1941),
                i = n.n(s),
                c = n(85893),
                o = function (e) {
                    var t = e.info;
                    return (0, c.jsxs)("div", {
                        className: i().info,
                        children: [t.relevance.map((function (e) {
                            return (0, c.jsx)("div", {
                                className: i().relevance,
                                children: e
                            }, e)
                        })), (0, c.jsx)("div", {
                            className: i().date,
                            children: t.date
                        })]
                    })
                },
                l = n(51406),
                d = n.n(l),
                u = function (e) {
                    var t = e.url,
                        n = e.altForPoster;
                    return (0, c.jsx)("img", {
                        className: d().image,
                        src: "".concat(t),
                        alt: n
                    })
                },
                _ = n(41858),
                x = (n(69494), n(27898)),
                h = n.n(x),
                m = function (e) {
                    var t = e.count;
                    return (0, c.jsxs)("div", {
                        className: h().viewsCounter,
                        children: [(0, c.jsx)("img", {
                            src: "/images/blog/count.svg",
                            alt: "\u0441\u0447\u0435\u0442\u0447\u0438\u043a \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"
                        }), (0, c.jsx)("span", {
                            children: t
                        })]
                    })
                },
                v = n(41664),
                g = n.n(v),
                f = n(52774),
                C = n.n(f),
                j = (n(67294), function (e) {
                    var t = e.info,
                        n = void 0 === t ? "" : t,
                        a = e.image,
                        s = void 0 === a ? "" : a,
                        i = e.title,
                        l = void 0 === i ? "" : i,
                        d = e.text,
                        x = void 0 === d ? "" : d,
                        h = e.viewsCounter,
                        v = void 0 === h ? 0 : h,
                        f = e.id,
                        j = void 0 === f ? "" : f,
                        p = e.type,
                        b = void 0 === p ? "" : p,
                        w = e.altForPoster,
                        N = void 0 === w ? "" : w;
                    return (0, c.jsxs)("li", {
                        className: r().card,
                        children: [(0, c.jsx)("div", {
                            className: r().card__info,
                            children: (0, c.jsx)(o, {
                                info: n
                            })
                        }), (0, c.jsx)("div", {
                            className: r().card__image,
                            children: (0, c.jsx)(u, {
                                url: s,
                                altForPoster: N
                            })
                        }), (0, c.jsx)("div", {
                            className: r().card__title,
                            children: (0, c.jsx)(_.Z, {
                                title: l
                            })
                        }), (0, c.jsx)("div", {
                            className: "short" === b ? r().card__textHidden : r().card__text,
                            dangerouslySetInnerHTML: {
                                __html: x.replaceAll('src="/files/', 'src="https://learn.maxima.school/files/')
                            }
                        }), "short" === b ? (0, c.jsx)(g(), {
                            href: "/blog/".concat(j, "/").concat(C()().transform(l, "-").replaceAll("?", "").replaceAll("&", "").toLowerCase()),
                            children: (0, c.jsx)("a", {
                                className: r().card__btn,
                                children: "\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435"
                            })
                        }) : (0, c.jsx)(c.Fragment, {}), (0, c.jsx)("div", {
                            className: r().card__viewsCounter,
                            children: (0, c.jsx)(m, {
                                count: v
                            })
                        })]
                    })
                })
        },
        56037: function (e, t, n) {
            "use strict";
            n(98620);
            var a = n(10149),
                r = n(77191),
                s = n(48406),
                i = n.n(s),
                c = n(69494),
                o = n(67294),
                l = n(41858),
                d = n(41664),
                u = n.n(d),
                _ = n(45697),
                x = n(85893);
            _.bool, _.shape({
                fontSize: _.number
            });
            t.Z = function (e) {
                (0, r.Z)(e);
                var t = (0, o.useState)(null),
                    n = t[0],
                    s = t[1];
                return (0, o.useEffect)((function () {
                    fetch("https://learn.maxima.school/news/blog/attached-news").then((function (e) {
                        return e.json()
                    })).then((function (e) {
                        return s(e)
                    }))
                }), []), (0, x.jsxs)("div", {
                    className: i().post,
                    children: ["\u0413\u043e\u0440\u044f\u0447\u0438\u0439 \u043f\u043e\u0441\u0442", n ? (0, x.jsxs)(x.Fragment, {
                        children: [(0, x.jsx)(l.Z, {
                            title: null === n || void 0 === n ? void 0 : n.title
                        }), (0, x.jsx)(c.Z, {
                            type: "short",
                            text: null === n || void 0 === n ? void 0 : n.text
                        }), (0, x.jsx)(u(), {
                            href: "/blog/".concat(null === n || void 0 === n ? void 0 : n.id),
                            children: (0, x.jsx)("div", {
                                className: i().post__btn,
                                children: "\u0427\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043b\u0435\u0435"
                            })
                        })]
                    }) : (0, x.jsx)("div", {
                        children: (0, x.jsx)(a.Z, {
                            active: !0
                        })
                    })]
                })
            }
        },
        69494: function (e, t, n) {
            "use strict";
            var a = n(45702),
                r = n.n(a),
                s = n(85893);
            t.Z = function (e) {
                var t = e.text,
                    n = void 0 === t ? "" : t,
                    a = e.type,
                    i = void 0 === a ? "" : a;
                return (0, s.jsx)("div", {
                    className: "short" === i ? r().textHidden : r().text,
                    dangerouslySetInnerHTML: {
                        __html: n.replace('src="/files/', 'src="https://learn.maxima.school/files/')
                    }
                })
            }
        },
        41858: function (e, t, n) {
            "use strict";
            var a = n(4501),
                r = n.n(a),
                s = n(85893);
            t.Z = function (e) {
                var t = e.title,
                    n = void 0 === t ? "" : t;
                return (0, s.jsx)("div", {
                    className: r().title,
                    children: n
                })
            }
        },
        52641: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function () {
                    return C
                },
                default: function () {
                    return p
                },
                formatCleanDate: function () {
                    return j
                }
            });
            n(54038);
            var a = n(36671),
                r = (n(98620), n(10149)),
                s = (n(35797), n(64749)),
                i = n(97223),
                c = n(46096),
                o = n(27812),
                l = n(60152),
                d = n.n(l),
                u = n(67294),
                _ = n(85893),
                x = function (e) {
                    var t = e.setSortAtTag,
                        n = e.sortAtTag,
                        a = e.tags,
                        s = void 0 === a ? [] : a,
                        i = e.setTags,
                        c = (e.loading, e.setLoading);
                    return (0, u.useEffect)((function () {
                        fetch("https://learn.maxima.school/news/blog/tags").then((function (e) {
                            return e.json()
                        })).then((function (e) {
                            return i(e)
                        }))
                    }), []), (0, _.jsx)("div", {
                        className: d().category,
                        children: s ? (0, _.jsx)(_.Fragment, {
                            children: s.map((function (e, a) {
                                if (e.name) return [(0, _.jsxs)("div", {
                                    datavalue: e.id,
                                    className: "".concat(d().category__item, " s"),
                                    onClick: function (e) {
                                        c(!0);
                                        var a = e.currentTarget.getAttribute("datavalue");
                                        e.currentTarget.classList.contains("".concat(d().active)) ? (t(n.filter((function (e) {
                                            return a != e
                                        }))), e.currentTarget.classList.remove(d().active)) : (t([].concat((0, o.Z)(n), [a])), e.currentTarget.classList.add(d().active))
                                    },
                                    children: [(0, _.jsx)("svg", {
                                        width: "14",
                                        height: "20",
                                        viewBox: "0 0 14 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, _.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M5.63296 0.0559507C5.62058 0.089092 5.6322 0.284774 5.65877 0.490774C5.76394 1.30535 5.64402 2.19841 5.33163 2.92681C4.96221 3.78825 4.56412 4.33403 3.17942 5.87748C2.3 6.85773 2.04071 7.16687 1.67434 7.67196C0.954599 8.66428 0.5126 9.56887 0.247744 10.5917C0.0362555 11.4084 0.000232297 11.726 3.57823e-06 12.7754C-0.000187021 13.6665 0.00690334 13.7669 0.10205 14.2237C0.721344 17.1966 2.97758 19.4281 5.84853 19.9074C9.72192 20.5541 13.377 17.7426 13.952 13.6743C14.0309 13.116 14.0093 11.9 13.9104 11.3294C13.6909 10.0638 13.2708 8.9649 12.6381 8.00142C12.2509 7.41187 12.1201 7.38326 12.1346 7.89132C12.1619 8.85023 11.5932 9.60482 10.7187 9.77002C10.3941 9.83134 10.0396 9.77514 9.71388 9.61076C9.42432 9.46464 9.06725 9.08719 8.91211 8.7632C8.808 8.54587 8.80301 8.51093 8.80648 8.02698C8.80937 7.62393 8.83522 7.38983 8.93139 6.89443C9.08246 6.11651 9.10964 5.72737 9.053 5.15447C8.96444 4.25938 8.77815 3.60387 8.39764 2.84865C7.87872 1.81861 7.02918 0.858806 6.01546 0.157172C5.76654 -0.0150998 5.66922 -0.0408547 5.63296 0.0559507ZM6.17114 9.907C6.20476 9.94151 6.22439 9.99869 6.21467 10.034C6.169 10.2005 6.15216 11.2358 6.18883 11.6238C6.26873 12.4689 6.45894 12.9347 6.91482 13.4014C7.3893 13.8871 7.90753 14.089 8.59316 14.0551C9.13046 14.0286 9.54669 13.8576 10.0145 13.4711C10.1507 13.3585 10.2278 13.4027 10.3154 13.6437C10.5156 14.1938 10.5628 15.0535 10.4253 15.6467C10.1154 16.9845 9.10171 18.0412 7.8117 18.3712C7.34336 18.491 6.57868 18.4906 6.14266 18.3703C4.86527 18.0179 3.89882 17.0169 3.57591 15.7117C3.50134 15.4103 3.48511 15.2456 3.48511 14.79C3.48511 13.4225 3.87446 12.3717 4.83401 11.1494C5.14225 10.7568 6.00406 9.84252 6.06501 9.84353C6.08972 9.84392 6.13748 9.87249 6.17114 9.907Z",
                                            fill: "#CFCFCF"
                                        })
                                    }), e.name]
                                }, e.id)]
                            }))
                        }) : (0, _.jsx)(r.Z, {
                            active: !0
                        })
                    })
                },
                h = n(7816),
                m = n(56037),
                v = n(2962),
                g = n(13168),
                f = n(85746),
                C = !0;

            function j(e) {
                return "".concat(e.getDate() <= 9 ? "0" : "").concat(e.getDate(), ".").concat(e.getMonth() < 9 ? "0" : "").concat(e.getMonth() + 1, ".").concat(e.getFullYear())
            }
            var p = function (e) {
                var t = e.data,
                    n = (0, u.useState)(t.data),
                    o = n[0],
                    l = n[1],
                    d = (0, u.useState)([]),
                    C = d[0],
                    p = d[1],
                    b = (0, u.useState)("createdAt"),
                    w = b[0],
                    N = b[1],
                    T = (0, u.useState)(!0),
                    y = T[0],
                    S = T[1],
                    Z = (0, u.useState)([]),
                    A = Z[0],
                    I = Z[1],
                    L = s.Z.Option;
                (0, u.useEffect)((function () {
                    document.querySelectorAll(".header__wrp a").forEach((function (e) {
                        return e.classList.remove("active-link")
                    })), document.querySelector("#blog").classList.add("active-link"), document.querySelector("#link-blog") && document.querySelector("#link-blog").classList.add("active-navbar-link"), fetch("https://learn.maxima.school/news/blog?sort=".concat(w, ",desc&tag-ids=").concat(A)).then((function (e) {
                        return e.json()
                    })).then((function (e) {
                        S(!1), l(e.data)
                    }))
                }), [w, A]);
                return (0, _.jsxs)(_.Fragment, {
                    children: [(0, _.jsx)(v.PB, {
                        title: "\u0411\u043b\u043e\u0433 IT Школа WinPoWer - \u0441\u0442\u0430\u0442\u044c\u0438 \u0438 \u043a\u0435\u0439\u0441\u044b IT \u0441\u0444\u0435\u0440\u044b",
                        description: "\u0411\u043b\u043e\u0433 IT Школа WinPoWer. \u0421\u0442\u0430\u0442\u044c\u0438 \u043f\u0440\u043e IT \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438, \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u0445 \u0441 \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u0435\u043c. \u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043a\u0435\u0439\u0441\u044b \u043e \u043a\u0443\u0440\u0441\u0430\u0445 \u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u0445.",
                        canonical: "https://maxima.school/blog",
                        openGraph: {
                            title: "\u0411\u043b\u043e\u0433 IT Школа WinPoWer - \u0441\u0442\u0430\u0442\u044c\u0438 \u0438 \u043a\u0435\u0439\u0441\u044b IT \u0441\u0444\u0435\u0440\u044b",
                            description: "\u0411\u043b\u043e\u0433 IT Школа WinPoWer. \u0421\u0442\u0430\u0442\u044c\u0438 \u043f\u0440\u043e IT \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438, \u0442\u0440\u0443\u0434\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u0445 \u0441 \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u0435\u043c. \u041f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u043a\u0435\u0439\u0441\u044b \u043e \u043a\u0443\u0440\u0441\u0430\u0445 \u0438 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u0445.",
                            url: "https://maxima.school/blog"
                        }
                    }), (0, _.jsx)(c.Z, {}), (0, _.jsxs)("section", {
                        className: "blog container",
                        children: [(0, _.jsx)("div", {
                            className: "blog__background"
                        }), (0, _.jsxs)("div", {
                            className: "blog__header",
                            children: [(0, _.jsx)("h2", {
                                className: "baner__title blog-baner",
                                children: "\u0411\u043b\u043e\u0433 IT Школа WinPoWer"
                            }), (0, _.jsx)(h.Z, {
                                text: "\u041d\u0430\u0448 Telegram"
                            })]
                        }), (0, _.jsxs)("div", {
                            className: "blog__wrp",
                            children: [(0, _.jsx)("div", {
                                className: "blog__container-left",
                                children: (0, _.jsx)(x, {
                                    setSortAtTag: I,
                                    sortAtTag: A,
                                    tags: C,
                                    setTags: p,
                                    loading: y,
                                    setLoading: S
                                })
                            }), (0, _.jsxs)("div", {
                                className: "blog__container-center",
                                children: [(0, _.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        gap: "20px"
                                    },
                                    children: [(0, _.jsx)(s.Z, {
                                        className: "selectCategory",
                                        mode: "multiple",
                                        allowClear: !0,
                                        style: {
                                            width: "100%"
                                        },
                                        placeholder: "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0443\u0431\u0440\u0438\u043a\u0443",
                                        onChange: function (e) {
                                            I(e)
                                        },
                                        optionFilterProp: "children",
                                        children: [].concat(C).sort((function (e, t) {
                                            return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                                        })).map((function (e) {
                                            return (0, _.jsx)(L, {
                                                children: e.name
                                            }, e.id)
                                        }))
                                    }), (0, _.jsxs)(s.Z, {
                                        defaultValue: w,
                                        style: {
                                            width: 120,
                                            marginLeft: "auto"
                                        },
                                        bordered: !1,
                                        onChange: function (e) {
                                            return N(e)
                                        },
                                        children: [(0, _.jsx)(L, {
                                            value: "viewsCount",
                                            children: "\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"
                                        }), (0, _.jsx)(L, {
                                            value: "createdAt",
                                            children: "\u041d\u043e\u0432\u044b\u0435"
                                        })]
                                    })]
                                }), 0 !== o.length ? (0, _.jsx)("ul", {
                                    children: o.map((function (e) {
                                        return (0, _.jsx)(i.Z, {
                                            id: e.id,
                                            info: {
                                                date: j(new Date(e.createdAt)),
                                                relevance: e.newsTags
                                            },
                                            image: "https://learn.maxima.school/files/".concat(e.titleImage.storageFileName),
                                            title: e.title,
                                            text: e.text,
                                            type: "short",
                                            viewsCounter: e.viewsCount
                                        }, e.id)
                                    }))
                                }) : (0, _.jsx)(_.Fragment, {
                                    children: y ? (0, _.jsx)(r.Z, {
                                        active: !0
                                    }) : (0, _.jsx)(a.default, {
                                        description: "\u041f\u043e\u0441\u0442\u043e\u0432 \u043d\u0435\u0442"
                                    })
                                })]
                            }), (0, _.jsxs)("div", {
                                className: "blog__container-right blog",
                                children: [(0, _.jsx)(h.Z, {
                                    text: "\u041d\u0430\u0448 Telegram"
                                }), (0, _.jsx)(m.Z, {})]
                            })]
                        })]
                    }), (0, _.jsx)(f.Z, {}), (0, _.jsx)(g.Z, {})]
                })
            }
        },
        69889: function (e) {
            e.exports = {
                telegram: "BtnTelegram_telegram__UAmCS"
            }
        },
        67777: function (e) {
            e.exports = {
                card: "Card_card__X0MUN",
                card__image: "Card_card__image__xTKxX",
                card__text: "Card_card__text__SOqbt",
                card__textHidden: "Card_card__textHidden__LOwxz",
                card__btn: "Card_card__btn__l2myr",
                card__viewsCounter: "Card_card__viewsCounter__zJi2S"
            }
        },
        60152: function (e) {
            e.exports = {
                category: "Category_category__8VJy7",
                category__item: "Category_category__item__rvGNz",
                active: "Category_active__S2FlL"
            }
        },
        48406: function (e) {
            e.exports = {
                post: "HotPost_post__AH3nq",
                post__btn: "HotPost_post__btn__guVt4"
            }
        },
        51406: function (e) {
            e.exports = {
                image: "ImageCard_image__92b99"
            }
        },
        1941: function (e) {
            e.exports = {
                info: "InfoCard_info__cOSW6",
                relevance: "InfoCard_relevance__SYmyt",
                author: "InfoCard_author__xpQft",
                date: "InfoCard_date__AcbWP"
            }
        },
        45702: function (e) {
            e.exports = {
                text: "TextCard_text__TjlbU",
                textHidden: "TextCard_textHidden__pmUDA"
            }
        },
        4501: function (e) {
            e.exports = {
                title: "TitleCard_title__iqP04"
            }
        },
        27898: function (e) {
            e.exports = {
                viewsCounter: "ViewsCounterCard_viewsCounter__lO903"
            }
        }
    }
]);